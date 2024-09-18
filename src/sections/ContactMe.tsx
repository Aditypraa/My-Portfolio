'use client';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';
import Button from '@/components/Button';

export const ContactMeSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-20">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Lets create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
                You can contact me via Email by clicking the Contact Me button
                next to this description.
              </p>
            </div>
            <Button
              url="mailto:aditypraa@gmail.com"
              scaleTap={0.8}
              scaleHover={1.1}
              className="text-white bg-gray-900 px-6 h-12 rounded-xl w-max border border-gray-900"
            >
              <span className="font-semibold ">Contact Me</span>
              <ArrowUpRightIcon className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
