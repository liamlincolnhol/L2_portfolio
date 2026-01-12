'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Card from '@/components/ui/Card';
import Section from '@/components/ui/Section';
import { generateBreadcrumbs } from '@/lib/breadcrumbs';

const allProjects = [
  {
    id: 1,
    title: 'ClearPoint Window Services',
    client: 'Window Cleaning Business',
    category: 'Web Design',
    description: 'Professional website for a local window cleaning business. Clean, modern design that showcases their services and makes it easy for customers to get quotes.',
    image: '/clearpoint.png',
    year: '2024',
  },
  {
    id: 2,
    title: 'Forever Data',
    client: 'On-Chain Data Storage',
    category: 'Web Design',
    description: 'Pure utility interface for an Ethereum data storage platform. No marketing, no explanations—just a streamlined tool for uploading and storing data permanently on-chain.',
    image: '/forever_data.png',
    year: '2024',
  },
  // {
  //   id: 3,
  //   title: 'Right On Q',
  //   client: 'Business Solutions',
  //   category: 'Web Design',
  //   description: 'Modern, conversion-focused website for a business consulting firm. Clean design that highlights their expertise.',
  //   image: '/right_on_q.png',
  //   year: '2024',
  // },
];

const categories = ['All', 'Web Design'];

export default function Work() {
  const breadcrumbSchema = generateBreadcrumbs('/work');

  // Portfolio Schema
  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": allProjects.map((project, index) => ({
      "@type": "CreativeWork",
      "position": index + 1,
      "name": project.title,
      "description": project.description,
      "image": `https://liamlincolnhol.agency${project.image}`,
      "creator": {
        "@type": "Person",
        "name": "Liam Lincoln Hol",
        "jobTitle": "Web Designer"
      },
      "dateCreated": project.year,
      "keywords": project.category
    }))
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
          __html: JSON.stringify(portfolioSchema),
        }}
      />
      <Navigation />

      <Section className="pt-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium">
            My <em className="italic">Work</em>
          </h1>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {allProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
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
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-foreground">
                      {project.year}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p
                      className="text-sm text-accent font-medium"
                     
                    >
                      {project.category}
                    </p>
                    <h3 className="font-heading text-2xl font-medium group-hover:text-accent transition-colors"

                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-sm text-foreground/60"
                     
                    >
                      {project.client}
                    </p>
                    <p
                      className="text-foreground/70 leading-relaxed"
                     
                    >
                      {project.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
        </motion.div>
      </Section>
    </>
  );
}
