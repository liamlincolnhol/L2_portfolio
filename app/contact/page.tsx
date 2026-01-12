'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Card from '@/components/ui/Card';
import Section from '@/components/ui/Section';
import BackgroundImage from '@/components/ui/BackgroundImage';
import { generateBreadcrumbs } from '@/lib/breadcrumbs';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
  website?: string; // Honeypot field
}

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>();

  const breadcrumbSchema = generateBreadcrumbs('/contact');

  // Contact Schema
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "ProfessionalService",
      "name": "L2 Design",
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "liamlincolnholagency@gmail.com",
        "contactType": "Customer Service",
        "availableLanguage": "English",
        "areaServed": [
          "Grand Rapids, MI",
          "Lowell, MI",
          "Cascade, MI",
          "Ada, MI"
        ]
      }
    }
  };

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSubmitted(true);
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please try again or email directly.');
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema),
        }}
      />
      <Navigation />

      <Section className="min-h-screen pt-32 relative overflow-hidden">
        <BackgroundImage />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start relative z-10">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium mb-6"

            >
              Let's <em className="italic">talk</em>
            </h1>
            <p
              className="text-lg md:text-xl text-foreground/70 leading-relaxed mb-12"

            >
              Got a project in mind? Want to chat about your website needs?
              Drop me a message and I'll get back to you within 24 hours.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-2xl font-medium mb-2"

                >
                  Email
                </h3>
                <a
                  href="mailto:liamlincolnholagency@gmail.com"
                  className="text-lg text-foreground/70 hover:text-accent transition-colors"

                >
                  liamlincolnholagency@gmail.com
                </a>
              </div>

              <div>
                <h3 className="font-heading text-2xl font-medium mb-2"

                >
                  Based in
                </h3>
                <p
                  className="text-lg text-foreground/70"

                >
                  Lowell and Ann Arbor
                </p>
              </div>

              <div>
                <h3 className="font-heading text-2xl font-medium mb-2"

                >
                  Student at
                </h3>
                <p
                  className="text-lg text-foreground/70"

                >
                  University of Michigan
                </p>
              </div>

              <div>
                <h3 className="font-heading text-2xl font-medium mb-2"

                >
                  Follow
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/liamlincolnhol"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-accent transition-colors"

                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/liamlincolnhol"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-accent transition-colors"

                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card variant="dark">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 16L14 22L24 10"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="font-heading text-2xl font-medium mb-2"

                  >
                    Message sent!
                  </h3>
                  <p
                    className="card-dark-text-80"

                  >
                    I'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium form-label-dark mb-2"

                    >
                      Name *
                    </label>
                    <input
                      {...register('name', {
                        required: 'Name is required',
                        minLength: {
                          value: 2,
                          message: 'Name must be at least 2 characters',
                        },
                      })}
                      type="text"
                      id="name"
                      className="w-full px-4 py-3.5 md:py-3 form-input-dark rounded-lg transition-colors"
                      placeholder="Your name"

                    />
                    {errors.name && (
                      <p
                        className="mt-1 text-sm text-accent"
                       
                      >
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium form-label-dark mb-2"

                    >
                      Email *
                    </label>
                    <input
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      type="email"
                      id="email"
                      className="w-full px-4 py-3.5 md:py-3 form-input-dark rounded-lg transition-colors"
                      placeholder="your@email.com"

                    />
                    {errors.email && (
                      <p
                        className="mt-1 text-sm text-accent"
                       
                      >
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Company Field */}
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium form-label-dark mb-2"

                    >
                      Company
                    </label>
                    <input
                      {...register('company')}
                      type="text"
                      id="company"
                      className="w-full px-4 py-3.5 md:py-3 form-input-dark rounded-lg transition-colors"
                      placeholder="Your company"

                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium form-label-dark mb-2"

                    >
                      Message *
                    </label>
                    <textarea
                      {...register('message', {
                        required: 'Message is required',
                        minLength: {
                          value: 10,
                          message: 'Message must be at least 10 characters',
                        },
                      })}
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3.5 md:py-3 form-input-dark rounded-lg transition-colors resize-none"
                      placeholder="Tell us about your project..."

                    />
                    {errors.message && (
                      <p
                        className="mt-1 text-sm text-accent"
                       
                      >
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Honeypot field - hidden from users, bots will fill it */}
                  <input
                    {...register('website')}
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      left: '-9999px',
                      width: '1px',
                      height: '1px',
                      opacity: 0,
                    }}
                  />

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-4 bg-accent text-white rounded-[999px] font-medium hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                   
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4 12L12 4M12 4H6M12 4V10"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
