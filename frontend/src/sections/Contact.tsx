"use client";

import { FC } from "react";
import ContactForm from "@/components/ContactForm";

const Contact: FC = () => {
  return (
    <section id="contact" className="pb-16 lg:py-24">
      <div className="container !max-w-full">
        <div>
          <h2 className="font-semibold text-3xl md:text-5xl mb-6 uppercase">
            Contact
          </h2>
          <p className="md:text-2xl md:mt-5">Have a project in mind or a question to ask? Drop me a message—I&#39;d love to hear from you!</p>
        </div>
        <div className="mt-12 md:mt-20">
          <div className="grid md:grid-cols-12">
            <div className="md:col-span-5">
              <ContactForm />
            </div>
            <div className="md:col-span-7">hi</div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Contact;