import Image from 'next/image';
import React from 'react';
import sampulImage from '@/assets/images/Sampul-HD.png';
import fotoProfil from '@/assets/images/Ap.png';

function SummarySection() {
  return (
    <section className="">
      <div className="px-5 mt-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-64 overflow-hidden">
            <Image
              alt="content"
              className="object-cover object-center h-full w-full"
              src={sampulImage}
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <Image alt="profil" className="rounded-full" src={fotoProfil} />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font py-4 text-lg">
                  Aditya Pratama
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-emerald-300 to-sky-400 rounded mb-4"></div>
                <p className="text-base">
                  Web Developer | Informatic Engineering
                </p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed mb-4 text-justify text-base lg:text-lg">
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default SummarySection;
