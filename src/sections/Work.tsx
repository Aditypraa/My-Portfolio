import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import Card from "@/components/Card";
import worksData from "@/data/worksData";

export const WorkSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          title="WORK / INTERNSHIP EXPERIENCE"
          eyebrow="Explore My Work and Internship Experience"
          description="Let's take a look at my Experience and Internship so far"
        />

        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <>
                {worksData.map((work) => (
                  <Card
                    key={work.company}
                    className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={work.avatar}
                          alt={work.company}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{work.company}</div>
                        <div className="text-md text-white/40">
                          {work.position}
                        </div>
                        <div className="text-sm text-white/40">
                          {work.date}
                        </div>
                      </div>
                    </div>
                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                      {work.descriptions.map((description, index) => (
                        <li
                          key={index}
                          className="flex gap-2 text-sm md:text-base text-white/50"
                        >
                          <span>✒️</span>
                          <p className="text-justify">{description.text}</p>
                        </li>
                      ))}
                    </ul>
                    {/* <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {}
                    </p> */}
                  </Card>
                ))}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
