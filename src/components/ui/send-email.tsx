"use server";

async function sendEmail(
  name: string,
  company: string,
  email: string,
  message: string,
  phone?: string,
) {
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.CONTACT_KEY,
        name: name,
        email: email,
        message: `Phone: ${phone}, Company: ${company}, Message: ${message}`,
      }),
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  } catch (error) {
    console.log(error);
    throw new Error("Failed to send email");
  }
}

export default sendEmail;
