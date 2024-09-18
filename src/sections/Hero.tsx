'use client';
import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import SparkleIcon from '@/assets/icons/sparkle.svg';
import HeroOrbit from '@/components/HeroOrbit';
import GithubIcon from '@/assets/icons/github.svg';
import LinkedInIcon from '@/assets/icons/linkedin.svg';
import Button from '@/components/Button';
import CvIcon from '@/assets/icons/cv.svg';
import { delay, motion } from 'framer-motion';

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-5 text-amber-300/20" />
        </HeroOrbit>

        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-10 text-rose-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-12 text-amber-300" />
        </HeroOrbit>

        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="3s"
        >
          <StarIcon className="size-8 text-rose-300" />
        </HeroOrbit>

        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration="44s"
          shouldSpin
          spinDuration="6s"
        >
          <SparkleIcon className="size-14 text-rose-300/20" />
        </HeroOrbit>

        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
          <div className="size-3 rounded-full bg-amber-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="48s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>

      <div className="container">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2.0,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Memoji on computer"
          />

          <motion.div
            className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg"
            style={{
              borderRadius: 30,
              boxShadow: '0px -3000px 80px 100px rgba(255, 255, 235, .3)',
            }}
            animate={{ boxShadow: '0px -20px 80px 10px #fff' }}
            transition={{ duration: 3 }}
          >
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">Open to Work</div>
          </motion.div>

          <div className="max-w-lg mx-auto z-0">
            <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
              ADITYA PRATAMA
            </h1>

            {/* Media Social  */}
            <div className="flex flex-row justify-center items-center mt-4 gap-2">
              <Button
                url="https://github.com/Aditypraa"
                scaleTap={0.8}
                scaleHover={1.2}
                className="border-white/15 px-2 h-10 rounded-full"
              >
                <GithubIcon className="size-6" />
              </Button>
              <Button
                url="https://www.linkedin.com/in/aditypraa/"
                scaleTap={0.8}
                scaleHover={1.2}
                className="border-white/15 px-2 h-10 rounded-full"
              >
                <LinkedInIcon className="size-6" />
              </Button>
            </div>
            {/* End Media Social */}

            <p className="mt-4 text-center text-white/60 md:text-lg">
              &quot; Talk is cheap, Show me the code &quot;
            </p>
            <p className="mt-4 text-center text-white/60 md:text-lg">
              - Linus Torvalds -
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4 z-0">
            {/* <ButtonSocial url="" scaleTap={0.8} className="border-white/15 px-6 h-12 rounded-xl">
              <span className="font-semibold">Explore My Work</span>
              <ArrowDown className="size-4" />
            </ButtonSocial> */}
            <Button
              url="https://drive.google.com/file/d/10x2ygVvnCIehp2RslW76t6aiZnRfbCwG/view?usp=sharing"
              scaleTap={0.8}
              scaleHover={1.1}
              className="border-white bg-white text-gray-900 h-12 px-6 rounded-xl"
            >
              <CvIcon className="size-8" />
              <span className="font-semibold ">Curriculum Vitae</span>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
