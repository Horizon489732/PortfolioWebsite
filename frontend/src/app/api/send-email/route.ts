import emailjs from '@emailjs/nodejs';
import { NextResponse } from "next/server";

export async function POST(req: Request) { 
  try {
    const { name, email, subject, message } = await req.json();

    const customerMail = {
      email,
      name,
      message,
      subject,
    };

    const adminMail = {
      title: subject,
      name,
      time: new Date().toUTCString(),
      message,
      email,
    };

    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    const privateKey = process.env.EMAILSJS_PRIVATE_KEY;
    const serviceKey = process.env.EMAILJS_SERVICE_KEY;
    const adminTemplateKey = process.env.EMAILJS_ADMIN_TEMPLATE_ID;
    const customerTemplateKey = process.env.EMAILJS_CUSTOMER_TEMPLATE_ID;

    console.log("EmailJS keys loaded:", {
      publicKey: !!publicKey ? "✅ Found" : "❌ Missing",
      privateKey: !!privateKey ? "✅ Found" : "❌ Missing",
      serviceKey: !!serviceKey ? "✅ Found" : "❌ Missing",
      adminTemplateKey: !!adminTemplateKey ? "✅ Found" : "❌ Missing",
      customerTemplateKey: !!customerTemplateKey ? "✅ Found" : "❌ Missing",
    });

    await emailjs.send(serviceKey!, customerTemplateKey!, customerMail, {publicKey:  publicKey, privateKey: privateKey});
    await emailjs.send(serviceKey!, adminTemplateKey!, adminMail, {publicKey:  publicKey, privateKey: privateKey});

    return NextResponse.json({ success: true });
    
  } catch (err) {
    console.error("Email sending error:", err);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
