import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  
  const { name, email, message, organization, phone, country } = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 587,
    secure: false, // true para puerto 465, false para 587
    auth: {
      user: process.env.email,
      pass: process.env.password,
    },
  });

  const mailOptions = {
    from: process.env.email,
    to: process.env.email, // También podés enviar a otros
    subject: `Mensaje desde el formulario de ${name}`,
    text: `
      Nombre: ${name}
      Email: ${email}
      Organizattion: ${organization}
      Phone: ${phone}
      Country: ${country}
      Mensaje: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error){
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}