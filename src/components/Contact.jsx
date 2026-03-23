import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiMail, FiPhone, FiLinkedin, FiSend } from 'react-icons/fi';

const SERVICE_ID = 'service_vovuiwj';
const TEMPLATE_ID = 'template_xvltk15';
const PUBLIC_KEY = 'zpWqvkYjWPtZZFSp2';

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => { setStatus('success'); form.current.reset(); })
      .catch(() => setStatus('error'));
  };

  return (
    <section className="py-20 bg-gray-50 min-h-[calc(100vh-80px)]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center" style={{ color: '#655e7a' }}>Get In Touch</h2>
        <p className="text-center text-gray-500 mb-12 text-sm">Have a project in mind or just want to say hi? I'd love to hear from you.</p>

        <div className="flex flex-col md:flex-row md:gap-12">
          <div className="md:w-1/3 mb-10 md:mb-0 space-y-5">
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#655e7a' }}>Contact Info</h3>
            <a href="mailto:vaish.jana@gmail.com" className="flex items-center gap-3 text-gray-600 hover:text-purple-700 transition text-sm">
              <FiMail size={20} style={{ color: '#655e7a' }} />
              vaish.jana@gmail.com
            </a>
            <p className="flex items-center gap-3 text-gray-600 text-sm">
              <FiPhone size={20} style={{ color: '#655e7a' }} />
              +1-216-507-2375
            </p>
            <a
              href="https://www.linkedin.com/in/vaishnavi-subramanian/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-600 hover:text-purple-700 transition text-sm"
            >
              <FiLinkedin size={25} style={{ color: '#655e7a' }} />
              https://www.linkedin.com/in/vaishnavi-subramanian/
            </a>
          </div>

          <div className="md:w-2/3 bg-white p-8 shadow-sm border border-gray-100">
            <form ref={form} onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input type="text" name="user_name" required className="w-full border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-purple-400 transition" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" name="user_email" required className="w-full border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-purple-400 transition" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea name="message" required rows={5} className="w-full border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-purple-400 transition resize-none" />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex items-center gap-2 px-6 py-2 text-white text-sm font-semibold transition hover:opacity-80 disabled:opacity-50"
                style={{ backgroundColor: '#655e7a' }}
              >
                <FiSend size={15} />
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && <p className="text-green-600 text-sm mt-2">✓ Message sent successfully!</p>}
              {status === 'error' && <p className="text-red-500 text-sm mt-2">✗ Something went wrong. Please try again.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
