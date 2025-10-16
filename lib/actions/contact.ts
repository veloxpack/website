'use server'

import { ContactEmail } from '@/emails/contact';
import { contactFormSchema } from '@/lib/schemas/contact';
import { z } from 'zod';
import { resend } from '@/lib/resend';


export async function submitContactForm(data: z.infer<typeof contactFormSchema>) {
  try {
    // Validate the data
    const validatedData = contactFormSchema.parse(data);

    // Send email using Resend
    const { error } = await resend.emails.send({
      from: 'Veloxpack Contact <noreply@veloxpack.io>',
      to: ['hello@veloxpack.io'],
      replyTo: validatedData.email,
      subject: `Contact Form: ${validatedData.subject}`,
      react: ContactEmail({
        name: validatedData.name,
        email: validatedData.email,
        company: validatedData.company,
        inquiryType: validatedData.inquiryType,
        subject: validatedData.subject,
        message: validatedData.message,
      }),
    });

    if (error) {
      console.error('Resend error:', error);
      return {
        success: false,
        error: 'Failed to send message. Please try again later.',
      };
    }

    return {
      success: true,
      message: 'Thank you for your message! We will get back to you soon.',
    };
  } catch (error) {
    console.error('Contact form error:', error);

    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: 'Invalid form data. Please check your inputs.',
      };
    }

    return {
      success: false,
      error: 'An unexpected error occurred. Please try again later.',
    };
  }
}
