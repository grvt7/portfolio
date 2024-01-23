'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/sendEmail';
import { useFormStatus } from 'react-dom';
import SubmitButton from './submit-btn';
import toast from 'react-hot-toast';

const Contact = () => {
  const { ref } = useSectionInView('Contact', 0.6);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading heading={'Contact Me'} />
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{' '}
        <a className="underline" href="mailto:r.garvit7@gmail.com">
          r.garvit7@gmail.com
        </a>{' '}
        or through this form.
      </p>
      <form
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success('Email Sent Successfully');
        }}
        className="mt-10 flex flex-col"
      >
        <input
          type="email"
          name="senderEmail"
          className="h-14 rounded-lg borderBlack px-4"
          required
          maxLength={500}
          placeholder="Your Email"
        />

        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4"
          name="message"
          required
          maxLength={5000}
          placeholder="Your Message"
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
};

export default Contact;
