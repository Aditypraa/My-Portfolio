'use client';
import Button from '@/components/Button';
import FormLabel from '@/components/Form';
import SectionHeader from '@/components/SectionHeader';
import React from 'react';

function FeedbackSection() {
  return (
    <section className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container ">
        <SectionHeader
          title="Contact"
          eyebrow=""
          description="You can contact me through the form below or through the social media that I listed below."
        />
        <div className="mt-10 md:mt-20">
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <FormLabel
                    htmlFor="name"
                    labelName="Name"
                    type="text"
                    id="name"
                    name="name"
                    className="w-full rounded border text-base outline-none text-black py-1 px-3 leading-8 "
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <FormLabel
                    htmlFor="email"
                    labelName="Email"
                    type="email"
                    id="email"
                    name="email"
                    className="w-full rounded border text-base outline-none text-black py-1 px-3 leading-8 "
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <FormLabel
                    htmlFor="subject"
                    labelName="Subject"
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full rounded border text-base outline-none text-black py-1 px-3 leading-8 "
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-opacity-50 rounded border border-blatext-black focus:border-indigo-500 focus:bg-white focus:text-black focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-black py-1 px-3 leading-6 transition-colors duration-200 ease-in-out"
                    style={{ resize: 'both' }}
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full z-20">
                <Button
                  scaleTap={0.8}
                  className="flex mx-auto text-white bg-gradient-to-r from-emerald-300/20 to-sky-400 border-0 py-2 px-8 focus:outline-none hover:bg-emerald-300 rounded text-lg"
                >
                  <span>Send</span>
                </Button>
              </div>
              {/* <div className="p-2 w-full pt-8 mt-8  text-center"> */}
              {/* <a className="text-indigo-500">example@email.com</a>
              <p className="leading-normal my-5">49 Smith St.
                <br />Saint Cloud, MN 56301
              </p> */}
              {/* <span className="inline-flex">
                <a className="text-gray-500">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-4 text-gray-500">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-4 text-gray-500">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a className="ml-4 text-gray-500">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeedbackSection;
