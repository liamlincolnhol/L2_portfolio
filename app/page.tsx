'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Section from '@/components/ui/Section';
import Divider from '@/components/ui/Divider';
import BackgroundImage from '@/components/ui/BackgroundImage';

const featuredProjects = [
  {
    id: 1,
    title: 'ClearPoint Window Services',
    client: 'Window Cleaning Business',
    category: 'Web Design',
    description: 'Professional website for a local window cleaning business. Clean, modern design that showcases their services and makes it easy for customers to get quotes.',
    image: '/clearpoint.png',
  },
  {
    id: 2,
    title: 'Forever Data',
    client: 'On-Chain Data Storage',
    category: 'Web Design',
    description: 'Website for an Ethereum-based data storage system. Built a clear, technical presentation that explains their blockchain solution to both technical and non-technical audiences.',
    image: '/forever_data.png',
  },
  // {
  //   id: 3,
  //   title: 'Right On Q',
  //   client: 'Business Solutions',
  //   category: 'Web Design',
  //   description: 'Modern, conversion-focused website for a business consulting firm. Clean design that highlights their expertise.',
  //   image: '/right_on_q.png',
  // },
];

export default function Home() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <Section className="min-h-screen flex items-center pt-24 md:pt-32 relative overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero background.png"
            alt="Hero Background"
            fill
            className="object-cover scale-110"
            priority
          />
          {/* Grain/Blur Overlay */}
          <div className="absolute inset-0 bg-background/50 backdrop-blur-3xl"></div>
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="heading-display mb-6">
              Turn your reputation into <em className="italic">visibility</em>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl leading-relaxed"
          >
            Professional web design for local businesses ready to establish their
            online presence. Agency-quality websites at rates that actually make sense.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <Button href="/work">View My Work</Button>
            <Button href="/contact" variant="secondary">
              Start a Project
            </Button>
          </motion.div>
        </div>
      </Section>

      <Divider />

      {/* Featured Work Section */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="heading-large mb-6">
            Recent <em className="italic">Projects</em>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Real websites I've built for real businesses. Each one helped a
            company go from hidden to findable online.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card hover className="h-full cursor-pointer group">
                <div className="aspect-[4/3] rounded-lg mb-6 overflow-hidden relative bg-foreground/5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="space-y-3">
                  <p className="text-sm text-accent font-medium">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-heading font-medium group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-foreground/60">
                    {project.client}
                  </p>
                  <p className="text-foreground/70 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Button href="/work" variant="text">
            View Projects
          </Button>
        </motion.div>
      </Section>

      <Divider />

      {/* Services Preview Section */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-large mb-6">
              What I <em className="italic">do</em>
            </h2>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              Custom websites built from scratch. No templates, no bloat—just
              clean design that helps customers find you, understand what you
              offer, and get in touch.
            </p>
            <Button href="/services" variant="text">
              Learn More
            </Button>
          </motion.div>

          <div className="space-y-4 md:space-y-6">
            {['Custom Websites', 'Fast Deployment', 'Affordable Pricing'].map(
              (service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card variant="dark" className="group cursor-pointer">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-medium group-hover:text-accent transition-colors">
                      {service}
                    </h3>
                  </Card>
                </motion.div>
              )
            )}
          </div>
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
          <h2 className="heading-display mb-8">
            Let's get you <em className="italic">online</em>
          </h2>
          <p className="text-lg text-foreground/70 mb-10">
            Ready to create your online presence? I'll build you a website that
            gets you found and turns visitors into customers.
          </p>
          <Button href="/contact">Get Your Website</Button>
        </motion.div>
      </Section>
    </>
  );
}
