'use client';
import Image from 'next/image';
import WebIcons from '@/assets/icons/webicons.svg';
import GithubIcon from '@/assets/icons/github.svg';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import projectsData from '@/data/projectsData';
import Button from '@/components/Button';
import { motion } from 'framer-motion';

const cardVariant = {
  hidden: { opacity: 0, scale: 0, x: 100 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 50, duration: 0.5 },
  },
};

const cardTransition = {
  // initial={{ opacity: 0, scale: 0.2 }}
  // animate = {{ opacity: 1, scale: 1 }}
  // transition = {{
  //   duration: 2.0,
  //     delay: 0.4,
  //       ease: [0, 0.71, 0.2, 1.01]
  // }}

  hidden: { opacity: 0, scale: 0.8, stiffness: 50, duration: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 2.0,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
};

export const ProjectsSection = () => {
  return (
    <section className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <SectionHeader
          title="Projects"
          eyebrow="Explore My Projects"
          description="I invite you to look at some of the projects I've been developing and completing."
        />

        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {projectsData.map((project, index) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20"
              variants={cardVariant}
              initial="hidden"
            >
              <motion.div
                className="lg:grid lg:grid-cols-2 lg:gap-16"
                variants={cardTransition}
              >
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>

                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />

                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        {/* <CheckCircleIcon className="size-5 md:size-6" /> */}
                        <span className="text-justify">
                          {result.description}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <ul className="flex flex-row items-center justify-center gap-4 mt-4 md:mt-5">
                    {project.technology.map((tech, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <tech.icon className="size-12 lg:size-12 md:size-12 sm:size-10 max-sm:size-10" />
                      </li>
                    ))}
                  </ul>

                  <div className="flex justify-center md:gap-4 sm:gap-2 max-sm:gap-2">
                    <Button
                      url={project.link}
                      scaleTap={0.8}
                      scaleHover={1.1}
                      className="bg-white text-gray-950 h-12 w-full md:w-auto px-8 rounded-xl font-semibold inline-flex items-center justify-center mt-8"
                    >
                      <span>Demo</span>
                      <WebIcons className="size-5 ml-2" />
                    </Button>

                    <Button
                      url={project.repository}
                      scaleTap={0.8}
                      scaleHover={1.1}
                      className="bg-black text-white-950 h-12 w-full md:w-auto px-8 rounded-xl font-semibold inline-flex items-center justify-center mt-8 border border-black"
                    >
                      <span>GitHub</span>
                      <GithubIcon className="size-5 ml-2" />
                    </Button>
                  </div>
                </div>

                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </motion.div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
