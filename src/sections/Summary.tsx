'use client';
import Image from 'next/image';
import React from 'react';
import sampulImage from '@/assets/images/Sampul.png';
import fotoProfil from '@/assets/images/Ap.png';
import { motion } from 'framer-motion';

function SummarySection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="px-5 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0, x: '100vw' }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 50, duration: 0.5 }}
            className="rounded-lg h-64 overflow-hidden"
          >
            <Image
              alt="content"
              className="object-cover object-center h-full w-full"
              src={sampulImage}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0, x: '-100vw' }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 50, duration: 0.5 }}
            className="flex flex-col justify-center items-center md:flex-row mt-10"
          >
            <div className="text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <Image alt="profil" className="rounded-full" src={fotoProfil} />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-serif text-base py-4">Aditya Pratama</h2>
                <div className="w-32 h-1 bg-gradient-to-r from-emerald-300 to-sky-400 rounded mb-4"></div>
                <p className="font-serif text-base">Web Developer</p>
              </div>
            </div>
            <div className="flex items-center justify-center  sm:mt-4 sm:pt-4 max-[380px]:mt-4 max-[380px]:pt-4">
              <p className="text-justify text-base">
                I am a Fresh Graduate with a Bachelor`s degree in Informatics
                Engineering from, the Universitas 17 Agustus 1945 Surabaya, with
                expertise in using JavaScript programming language frameworks. I
                have experience creating RESTful API using Express.js and am
                proficient in using React.JS framework as the front end and
                Node.JS as the back end. My focus is to become a Full Stack Web
                Developer by learning more about MERN technologies (MongoDB,
                Express.JS, React.JS, Node.JS). I am enthusiastic about
                continuing to learn and adapt to the latest technology in the
                information technology industry, and I am ready to make my best
                contribution to every project I work on.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default SummarySection;
