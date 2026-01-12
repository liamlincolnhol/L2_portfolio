'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Section from '@/components/ui/Section';
import Divider from '@/components/ui/Divider';
import BackgroundImage from '@/components/ui/BackgroundImage';
import { generateBreadcrumbs } from '@/lib/breadcrumbs';

const services = [
  {
    id: 1,
    title: 'Custom Website Design',
    description:
      'Professional websites built from the ground up. No templates—just clean, modern design tailored to your business and your customers.',
    offerings: [
      'Mobile-responsive design',
      'SEO-friendly structure',
      'Contact forms & integrations',
      'Easy-to-update content',
    ],
  },
  {
    id: 2,
    title: 'Fast Deployment',
    description:
      'Quick turnarounds that get you online when you need it. Most projects launch in 2 weeks, not months.',
    offerings: [
      'Rapid prototyping',
      'Streamlined development',
      'Domain & hosting setup',
      'Launch support',
    ],
  },
  {
    id: 3,
    title: 'Ongoing Support',
    description:
      "Your website doesn't end at launch. I provide updates, fixes, and improvements to keep your site running smoothly.",
    offerings: [
      'Content updates',
      'Bug fixes & maintenance',
      'Performance optimization',
      'Technical support',
    ],
  },
  {
    id: 4,
    title: 'Search Visibility',
    description:
      'Built-in SEO best practices so customers can actually find you on Google. Clean code, fast loading, and proper structure.',
    offerings: [
      'Local SEO optimization',
      'Google Business integration',
      'Page speed optimization',
      'Mobile-first approach',
    ],
  },
];

const process = [
  {
    step: '01',
    title: 'Discovery Call',
    description:
      'We talk about your business, your customers, and what you need from a website. Quick and straightforward.',
  },
  {
    step: '02',
    title: 'Design & Build',
    description:
      "I create mockups, get your feedback, then build the site. You'll see progress along the way.",
  },
  {
    step: '03',
    title: 'Review & Refine',
    description:
      "You test everything, request changes, and I make sure it's exactly what you need.",
  },
  {
    step: '04',
    title: 'Launch & Support',
    description:
      'I handle the technical launch and stick around to help with any issues or questions.',
  },
];

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer: "Most projects launch in 2-3 weeks. I work quickly without sacrificing quality, getting you online when you need it—not months from now."
  },
  {
    question: "How much does a website cost?",
    answer: "As a student building my portfolio, I offer agency-quality work at rates that make sense for local businesses. Contact me for a custom quote based on your specific needs."
  },
  {
    question: "Do you offer ongoing website maintenance?",
    answer: "Yes! I provide ongoing support including content updates, bug fixes, performance optimization, and technical support to keep your site running smoothly."
  },
  {
    question: "Will my website work on mobile phones?",
    answer: "Absolutely. Every website I build is fully responsive and mobile-first, ensuring it looks great and works perfectly on all devices—from phones to tablets to desktops."
  },
  {
    question: "Do you help with local SEO?",
    answer: "Yes, all websites include built-in SEO best practices: clean code, fast loading, proper structure, and local optimization to help customers in the Grand Rapids area find you on Google."
  },
  {
    question: "Do you work with businesses in Lowell, Cascade, and Ada?",
    answer: "Absolutely! I'm from Lowell and serve the entire Grand Rapids metro area including Lowell, Cascade, Ada, Wyoming, Kentwood, and Grandville."
  }
];

export default function Services() {
  const breadcrumbSchema = generateBreadcrumbs('/services');

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Service Schema
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Service",
        "position": 1,
        "name": "Custom Website Design",
        "description": "Professional websites built from the ground up. No templates—just clean, modern design tailored to your business and your customers.",
        "provider": {
          "@type": "ProfessionalService",
          "name": "L2 Design"
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Grand Rapids"
          },
          {
            "@type": "City",
            "name": "Lowell"
          },
          {
            "@type": "City",
            "name": "Cascade"
          },
          {
            "@type": "City",
            "name": "Ada"
          }
        ]
      },
      {
        "@type": "Service",
        "position": 2,
        "name": "Fast Deployment",
        "description": "Quick turnarounds that get you online when you need it. Most projects launch in 2 weeks, not months.",
        "provider": {
          "@type": "ProfessionalService",
          "name": "L2 Design"
        }
      },
      {
        "@type": "Service",
        "position": 3,
        "name": "Ongoing Support",
        "description": "Your website doesn't end at launch. We provide updates, fixes, and improvements to keep your site running smoothly.",
        "provider": {
          "@type": "ProfessionalService",
          "name": "L2 Design"
        }
      },
      {
        "@type": "Service",
        "position": 4,
        "name": "Search Visibility",
        "description": "Built-in SEO best practices so customers can actually find you on Google. Clean code, fast loading, and proper structure.",
        "provider": {
          "@type": "ProfessionalService",
          "name": "L2 Design"
        }
      }
    ]
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
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
      />
      <Navigation />

      {/* Hero Section */}
      <Section className="pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium mb-6">
            What I <em className="italic">build</em>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
            Custom websites for local businesses. Fast turnarounds, professional
            results, and pricing that makes sense. Here's what I can do for you.
          </p>
        </motion.div>
      </Section>

      <Divider />

      {/* Services Grid */}
      <Section className="relative overflow-hidden">
        <BackgroundImage />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative z-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card variant="dark" className="h-full">
                <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
                  {service.title}
                </h2>
                <p className="card-dark-text-80 mb-8 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3">
                  {service.offerings.map((offering) => (
                    <div key={offering} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                      <span className="card-dark-text-90">{offering}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Divider />

      {/* Process Section */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-medium mb-6">
            How it <em className="italic">works</em>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl">
            A straightforward process that gets you online without the confusion
            or complexity. From first call to launch.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="space-y-4"
            >
              <div className="inline-block px-4 py-2 bg-accent text-white rounded-full text-sm font-medium">
                {item.step}
              </div>
              <h3 className="font-heading text-3xl font-medium">
                {item.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Divider />

      {/* FAQ Section */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-medium mb-6">
            Frequently Asked <em className="italic">Questions</em>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Common questions from local businesses.
          </p>
        </motion.div>

        <div className="space-y-6 max-w-3xl">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card variant="light">
                <h3 className="text-xl font-heading font-medium mb-3">
                  {faq.question}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {faq.answer}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Divider />

      {/* CTA Section */}
      <Section className="relative overflow-hidden">
        <BackgroundImage transform="rotate180" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto relative z-10"
        >
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-medium mb-6">
            Ready to get <em className="italic">started?</em>
          </h2>
          <p className="text-lg text-foreground/70 mb-10">
            Let's discuss how I can help bring your vision to life.
          </p>
          <Button href="/contact">Start a Project</Button>
        </motion.div>
      </Section>
    </>
  );
}
