import React from 'react';

const Footer = () => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 text-xs block">
        &copy; 2030 Garvit. All Rights Reserved
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this Website:</span> Build
        utilizing React & Next.js (App Router & Server Actions), TypeScript,
        Tailwind CSS, Framer Motion, React Emmail & Resend and Self hosted @{' '}
        <a href="https://www.grvt.me">grvt.me</a>
      </p>
    </footer>
  );
};

export default Footer;
