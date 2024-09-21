'use client';
import SectionHeader from '@/components/SectionHeader';
import React from 'react';
import educationsData from '@/data/educationsData';
import { motion } from 'framer-motion';

function EducationSection() {
  return (
    <div className="py-16 lg:py-24">
      <section className="container">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <SectionHeader
            title="Education"
            eyebrow="My Background"
            description="I've completed my education in the following institutions."
          />

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            {educationsData.map((education, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1 } }}
                whileHover={{ scale: 1.05, boxShadow: '0px 5px 8px #6ee7b7' }}
                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-emerald-300/20 hover:shadow-emerald-300/20"
              >
                <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                  <education.avatar className="size-10" />
                </div>

                <h2 className="mt-4 text-xl max-sm:text-sm sm:text-sm md:text-xl font-bold text-white">
                  {education.major}
                </h2>

                <p className="mt-1 text-sm text-gray-300">{education.title}</p>
                <p className="mt-1 text-sm text-gray-300">{education.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default EducationSection;
