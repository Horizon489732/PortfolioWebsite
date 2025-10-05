"use client"

import { FC, useReducer, useState } from "react";

import Button from "../Button";
import LoaderModal from "../LoaderModal";
import { useDisableScrollbar } from "@/hooks/useDisableScrollbar";
import { useAlert } from "@/hooks/useAlert";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Action = { field: keyof FormState; value: string };

const initialState: FormState = { name: "", email: "", subject: "", message: "" };

function formReducer(prevState: FormState, action: Action): FormState {
    const { field, value } = action;
    return { ...prevState, [field]: value };
}

const ContactForm: FC = () => {

    const [form, dispatch] = useReducer(formReducer, initialState);
    const [isLoading, setIsLoading] = useState(false);

    useDisableScrollbar(isLoading)
    const { showAlert } = useAlert();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch({ field: e.target.id as keyof FormState, value: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault();
            setIsLoading(true);

            if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
                showAlert("Error", "Please fill in all fields.");
                setIsLoading(false);
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(form.email)) {
                showAlert("Error", "Please enter a valid email address.");
                setIsLoading(false);
                return;
            }

            try {
            const res = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (data.success) {
                showAlert("Success", "Message sent successfully!");
                dispatch({ field: "name", value: "" });
                dispatch({ field: "email", value: "" });
                dispatch({ field: "subject", value: "" });
                dispatch({ field: "message", value: "" });
            } else {
                showAlert("Error", "Failed to send message. Try again.");
            }
            } catch (error) {
                console.error("Error:", error);
                showAlert("Error", "Failed to send message. Try again.");
            } finally {
                setIsLoading(false);
            }
        };

        return(
            <>
            {isLoading && <LoaderModal><span>Loading</span></LoaderModal>}

            <div className="flex items-center justify-center">
                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 text-secondary-dark border border-primary p-4 rounded-sm">
                    <div>
                        <label htmlFor="name" className="label">Name:</label>

                        <div className="inputWrapper">
                            <input type="text" id="name" placeholder="Alla" className="input" maxLength={50} value={form.name} onChange={handleChange}/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="label">Email:</label>
                        
                        <div className="inputWrapper">
                            <input type="text" id="email" placeholder="hello@gmail.com" className="input" maxLength={100} value={form.email} onChange={handleChange}/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="subject" className="label">Subject:</label>

                        <div className="inputWrapper">
                            <input type="text" id="subject" placeholder="Anything works!" className="input" maxLength={250} value={form.subject} onChange={handleChange}/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="message" className="label">Message:</label>
                        <textarea id="message" placeholder="Send me a message" rows={5} className="bg-neutral-light placeholder-support-orange w-full font-light border-secondary-dark text-sm md:text-base focus-visible:outline-none focus-visible:p-1 focus-visible:border focus-visible:border-double focus-visible:border-1 focus-visible:border-secondary-dark"
                                maxLength={700} value={form.message} onChange={handleChange}/>
                    </div>

                    <Button type="submit" variant="primary" className="justify-center rounded-sm" disabled={isLoading}>{isLoading ? "Sending..." : "Send Message"}</Button>
                </form>
            </div>

            </>
        );
}

export default ContactForm;