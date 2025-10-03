"use client"

import { FC, useReducer, useState } from "react";
import emailjs from "@emailjs/browser";

import Button from "../Button";

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
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target; 
    const action: Action = { field: id as keyof FormState, value };
    dispatch(action);
};

    const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault();
            setLoading(true);

             // Non-Empty
            if (!form.name || !form.email || !form.subject || !form.message) {
                alert("Please fill in all fields.");
                setLoading(false);
                return;
            }

            // Email checking
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(form.email)) {
                alert("Please enter a valid email address.");
                setLoading(false);
                return;
            }
            
            const customerMail = {
                email: form.email,
                name: form.name,
                message: form.message,
                subject: form.subject,
            }

            const adminMail = {
                title: form.subject,
                name: form.name,
                time: new Date().toUTCString(),
                message: form.message,
                email: form.email,
            }

            const serviceKey = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY;
            const customerTemplateId = process.env.NEXT_PUBLIC_EMAILJS_CUSTOMER_TEMPLATE_ID;
            const adminTemplateId = process.env.NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE_ID;
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

            try {
                await emailjs.send(serviceKey!, customerTemplateId!, customerMail, publicKey!);
                await emailjs.send(serviceKey!, adminTemplateId!, adminMail, publicKey!);

                // Reset the form
                dispatch({ field: "name", value: "" });
                dispatch({ field: "email", value: "" });
                dispatch({ field: "subject", value: "" });
                dispatch({ field: "message", value: "" });

                alert("Message sent successfully!");
            } catch (error) {
                console.error("Email sending error:", error);
                alert("Failed to send message. Please try again later.");
            } finally {
                setLoading(false);
            }
    };

    return(
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

                <Button type="submit" variant="primary" className="justify-center rounded-sm" disabled={loading}>{loading ? "Sending..." : "Send Message"}</Button>
            </form>
        </div>
    );
}

export default ContactForm;