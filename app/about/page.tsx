'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Section from '@/components/ui/Section';
import Divider from '@/components/ui/Divider';
import BackgroundImage from '@/components/ui/BackgroundImage';

const capabilities = [
  {
    title: 'Custom Websites',
    description:
      'Building professional websites from scratch that establish your online presence and showcase what makes your business great.',
  },
  {
    title: 'Growth Focused',
    description:
      'Every project is outcome-driven: getting your phone ringing and making it easy for customers to find your services.',
  },
  {
    title: 'Agency Quality',
    description:
      'High-level professional work at accessible rates. You get the expertise without the traditional agency price tag.',
  },
  {
    title: 'Fast Deployment',
    description:
      'Quick turnaround times that get your business online and visible when you need it, not months from now.',
  },
];

export default function About() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <Section className="pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium mb-6"

          >
            About <em className="italic">Me</em>
          </h1>
          <p
            className="text-lg md:text-xl text-foreground/70 leading-relaxed mb-8"
           
          >
            I'm a student at the University of Michigan pursuing a double major
            in Mathematics and Computer Science. But beyond the classroom, I'm
            a freelance web designer—helping local businesses bridge the gap
            between their stellar physical reputation and their nonexistent
            digital presence.
          </p>
          <p
            className="text-lg md:text-xl text-foreground/70 leading-relaxed mb-8"
           
          >
            I specialize in building custom websites from the ground up for
            businesses that are hidden gems in their community but ready to
            establish their online presence. My mission is simple: turn your
            existing reputation into online visibility that actually gets your
            phone ringing.
          </p>
          <p
            className="text-lg md:text-xl text-foreground/70 leading-relaxed"
           
          >
            With professional web design experience and a portfolio built
            through real-world commercial projects, I bring agency-level quality
            at rates that make sense for growing businesses. No jargon, no
            complexity—just clean, effective websites that work.
          </p>
        </motion.div>
      </Section>

      <Divider />

      {/* Values Section */}
      <Section className="relative overflow-hidden">
        <BackgroundImage />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 relative z-10"
        >
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-medium mb-6"

          >
            What I <em className="italic">Offer</em>
          </h2>
          <p
            className="text-lg text-foreground/70 max-w-2xl"
           
          >
            The core capabilities that help your business thrive online.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card variant="light" hover={false} className="h-full">
                <h3 className="font-heading text-3xl font-medium mb-4"

                >
                  {capability.title}
                </h3>
                <p
                  className="text-foreground/70 leading-relaxed"
                 
                >
                  {capability.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Divider />

      {/* Why Choose Me Section */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-medium mb-6"

            >
              The <em className="italic">Student</em> Advantage
            </h2>
            <p
              className="text-lg text-foreground/70 mb-8 leading-relaxed"
             
            >
              You shouldn't have to choose between quality and affordability. As
              a student building my portfolio through real commercial work, I
              bring the same level of professionalism and technical skill you'd
              expect from a traditional agency—without the inflated price tag.
            </p>
            <p
              className="text-lg text-foreground/70 leading-relaxed"
             
            >
              Every project is an opportunity to create something exceptional
              while helping local businesses compete in the digital space. Your
              success builds my portfolio. It's a win-win that leads to better
              work and better results.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card variant="dark" className="space-y-6">
              <div>
                <h3 className="font-heading text-3xl font-medium mb-4"

                >
                  Building Your Digital Presence
                </h3>
                <p
                  className="card-dark-text-80 leading-relaxed"

                >
                  If someone searches for your services on Google or their
                  phone, do you appear? Can they easily find your hours, your
                  contact info, what you offer?
                </p>
              </div>
              <div>
                <p
                  className="card-dark-text-80 leading-relaxed"

                >
                  I specialize in creating strong online presences for businesses
                  ready to grow. Clean design. Clear information. Easy contact.
                  That's how you turn searches into customers.
                </p>
              </div>
            </Card>
          </motion.div>
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
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-medium mb-6"

          >
            Let's build your <em className="italic">digital identity.</em>
          </h2>
          <p
            className="text-lg text-foreground/70 mb-10"

          >
            Ready to create your online presence? Let's talk about how I can
            turn your business into a website that actually drives results.
          </p>
          <Button href="/contact">Start the Conversation</Button>
        </motion.div>
      </Section>
    </>
  );
}
