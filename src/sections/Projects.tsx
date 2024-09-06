import Image from "next/image";
import artistryAgoraImage from "@/assets/images/Artistryagora.png";
import miniProjectImage from "@/assets/images/miniproject.png";
import hydroSenseImage from "@/assets/images/hydrosense.png";
import agrisightImage from "@/assets/images/agrisight.png";
import resepMakananImage from "@/assets/images/resepmakanan.png";
import websiteDesaImage from "@/assets/images/websitedesa.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import GithubIcon from "@/assets/icons/github.svg";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

const portfolioProjects = [
  {
    company: "---",
    year: "2024",
    title: "Artistry Agora",
    results: [{ title: "progres" }, { title: "progres" }, { title: "progres" }],
    link: "https://artistryagora.vercel.app",
    repository: "https://github.com/Aditypraa/Nextjs-Landingpage-Artistryagora",
    image: artistryAgoraImage,
  },
  {
    company: "-----",
    year: "2024",
    title: "HydroSense",
    results: [{ title: "progres" }, { title: "progres" }, { title: "progres" }],
    link: "",
    repository: "https://github.com/PalapaPixel",
    image: hydroSenseImage,
  },
  {
    company: "----",
    year: "2023",
    title: "Agrisight",
    results: [{ title: "progres" }, { title: "progres" }, { title: "progres" }],
    link: "",
    repository: "https://github.com/Aditypraa/Agrisight",
    image: agrisightImage,
  },
  {
    company: "----",
    year: "2023",
    title: "Mini Project Ideas",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://aditypraa.github.io/Mini-Project",
    repository: "https://github.com/Aditypraa/Mini-Project",
    image: miniProjectImage,
  },
  {
    company: "-----",
    year: "2023",
    title: "Website Desa",
    results: [{ title: "progres" }, { title: "progres" }, { title: "progres" }],
    link: "",
    repository: "https://github.com/Aditypraa/Laravel-WebDesa",
    image: websiteDesaImage,
  },
  {
    company: "-----",
    year: "2023",
    title: "E Safety",
    results: [{ title: "progres" }, { title: "progres" }, { title: "progres" }],
    link: "",
    repository: "https://github.com/Aditypraa/Flutter-E-safety",
    image: "",
  },

  {
    company: "----",
    year: "2022",
    title: "Resep Makanan",
    results: [{ title: "progres" }, { title: "progres" }, { title: "progres" }],
    link: "",
    repository: "https://github.com/Aditypraa/Flutter-ResepMakanan",
    image: resepMakananImage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          title=" Real-world Results"
          eyebrow="Projects"
          description=" See how I transformed concepts into engaging digital experiences."
        />

        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20"
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
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
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex justify-center md:gap-4 sm:gap-2">
                    <a href={project.link}>
                      <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-8 rounded-xl font-semibold inline-flex items-center justify-center mt-8">
                        <span>Demo</span>
                        <ArrowUpRightIcon className="size-4" />
                      </button>
                    </a>

                    <a href={project.repository}>
                      <button className="bg-black text-white-950 h-12 w-full md:w-auto px-8 rounded-xl font-semibold inline-flex items-center justify-center mt-8">
                        <span>GitHub</span>
                        <GithubIcon className="size-4 ml-2" />
                      </button>
                    </a>
                  </div>
                </div>

                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
