"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendEmail(
  name: string,
  company: string,
  email: string,
  message: string,
  phone?: string,
) {
  try {
    console.log("Attempting to send email");
    const { error, data } = await resend.emails.send({
      from: "ojas.singh02@gmail.com",
      to: ["ojas.singh02@gmail.com"],
      subject: "Website Form Inquiry",
      html: `<p>Name: ${name}</p><p>Company: ${company}</p><p>Email: ${email}</p><p>Phone: ${phone ?? "Not provided"}</p><p>Message: ${message}</p>`,
    });

    if (error) {
      console.log(error)
    }
    console.log(data);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to send email");
  }
}

export default sendEmail;
