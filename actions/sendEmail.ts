'use server';

import ContactFormEmail from '@/email/contact-form-email';
import { validateString } from '@/lib/utils';
import React from 'react';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const getErrorMessage = (error: unknown) => {
  let message: string;
  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === 'object' && 'message' in error) {
    message = String(error.message);
  } else if (typeof error === 'string') {
    message = error;
  } else {
    message = 'Something Went Wrong';
  }
  return message;
};

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail');
  const message = formData.get('message');

  // Simple Server Side Validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: 'Invalid Sender Email',
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: 'Invalid Message',
    };
  }

  let data;
  try {
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'r.garvit7@gmail.com',
      subject: 'Message from My Portfolio Contact Form',
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
      // react: <ContactFormEmail message={message} senderEmail={senderEmail} />,
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
