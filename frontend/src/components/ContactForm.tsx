
import { FC } from "react";

import Button from "./Button";

const ContactForm: FC = () => {
    return(
        <div className="flex items-center justify-center">
            <form className="w-full flex flex-col gap-4 text-secondary-dark border border-primary p-4 rounded-sm">
                <div>
                    <label htmlFor="name" className="label">Name:</label>

                    <div className="inputWrapper">
                        <input type="text" id="name" placeholder="Alla" className="input"/>
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className="label">Email:</label>
                    
                    <div className="inputWrapper">
                        <input type="text" id="email" placeholder="hello@gmail.com" className="input"/>
                    </div>
                </div>
                <div>
                    <label htmlFor="subject" className="label">Subject:</label>

                    <div className="inputWrapper">
                        <input type="text" id="subject" placeholder="Anything works!" className="input"/>
                    </div>
                </div>
                <div>
                    <label htmlFor="message" className="label">Message:</label>
                    <textarea id="message" placeholder="Send me a message" rows={5} className="bg-neutral-light placeholder-support-orange w-full font-light border-secondary-dark text-sm md:text-base focus-visible:outline-none focus-visible:p-1 focus-visible:border focus-visible:border-double focus-visible:border-1 focus-visible:border-secondary-dark"/>
                </div>

                <Button type="submit" variant="primary" className="justify-center rounded-sm">Send Message</Button>
            </form>
        </div>
    );
}

export default ContactForm;