"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.resend_key)

type FormState = {
  success: boolean
  message?: string
  error?: string
}
export async function sendFooterEmail( prevState: FormState,formData: FormData): Promise<FormState> {
    try {
        // Extract and validate form data
        const rawData = {
            organization: formData.get("organization") as string,
            email: formData.get("email") as string,
            phone: formData.get("phone") as string,
            country: formData.get("country") as string,
            message: formData.get("message") as string,
            name: (formData.get("name") as string) || "Anonymous",
        }
        console.log('este es el email que llega', rawData, formData)

        const validatedData = rawData;

        // Send email using Resend
        const {  error } = await resend.emails.send({
            from: 'websiteform@polisanalytics.com', // Replace with your verified domain
            to: `${process.env.EMAIL}`,
            subject: `New message from ${validatedData.name}`,
            html: `
          <div style="margin: 20px 0;">
            <p><strong>From:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Organization:</strong> ${validatedData.organization}</p>
            <p><strong>Phone:</strong> ${validatedData.phone}</p>
            <p><strong>Country:</strong> ${validatedData.country}</p>
          </div>
          
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
          <p style="color: #666; font-size: 12px;">
            This email was sent from your website's footer contact form.
          </p>
        </div>
      `,
            replyTo: validatedData.email,
        })

        if (error) {
            console.error("Resend error:", error)
            return {
                success: false,
                error: "Failed to send email. Please try again.",
            }
        }

        return {
            success: true,
            message: "Thank you! Your message has been sent successfully.",
        }
    } catch (error) {
        console.error("Email sending failed:", error)

        return {
            success: false,
            error: "An unexpected error occurred. Please try again.",
        }
    }
}

