import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import JavascriptIcon from "@/assets/icons/javascript.svg";
import BoostrapIcon from "@/assets/icons/bootstrap.svg";
import TailwindCssIcon from "@/assets/icons/tailwindcss.svg";
import MysqlIcon from "@/assets/icons/mysql.svg";
import MongodbIcon from "@/assets/icons/mongodb.svg";
import GitIcons from "@/assets/icons/git.svg";
import GithubIcon from "@/assets/icons/github.svg";
import ExpressIcon from "@/assets/icons/express.svg";
import NodeIcon from "@/assets/icons/nodejs.svg";
import ReactIcon from "@/assets/icons/react.svg";
import NextjsIcon from "@/assets/icons/nextjs.svg";
import DockerIcon from "@/assets/icons/docker.svg";
import GcpIcon from "@/assets/icons/googlecloud.svg";
import LinuxIcon from "@/assets/icons/linux.svg";
import UbuntuIcon from "@/assets/icons/ubuntu.svg";
import WindowsIcon from "@/assets/icons/windows.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";

const toolboxItems = [
  {
    title: "HTML",
    iconType: HtmlIcon,
  },
  {
    title: "CSS",
    iconType: CssIcon,
  },
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "Bootstrap",
    iconType: BoostrapIcon
  },
  {
    title: 'TailwindCss',
    iconType: TailwindCssIcon
  },
  {
    title: 'MySQL',
    iconType: MysqlIcon
  },
  {
    title: 'MongoDB',
    iconType: MongodbIcon
  },
  {
    title: 'Git',
    iconType: GitIcons
  },
  {
    title: 'Github',
    iconType: GithubIcon
  },
  {
    title: 'ExpressJs',
    iconType: ExpressIcon
  },
  {
    title: 'NodeJs',
    iconType: NodeIcon
  },
  {
    title: 'ReactJs',
    iconType: ReactIcon
  },
  {
    title: 'NextJs',
    iconType: NextjsIcon
  },
  {
    title: 'Docker',
    iconType: DockerIcon
  },
  {
    title: 'Google Cloud Platform',
    iconType: GcpIcon
  },
  {
    title: 'Linux',
    iconType: LinuxIcon
  },
  {
    title: 'Ubuntu',
    iconType: UbuntuIcon
  },
  {
    title: 'Windows',
    iconType: WindowsIcon
  }
];

const hobbies = [
  { title: "Football", emoji: "⚽", left: "5%", top: "5%" },
  { title: "Futsal", emoji: "⚽", left: "50%", top: "5%" },
  { title: "Badminton", emoji: "🏸", left: "10%", top: "35%" },
  { title: "Volly", emoji: "🏐", left: "45%", top: "40%" },
  { title: "Tennis", emoji: "🏓", left: "70%", top: "35%" },
  { title: "Reading", emoji: "📖", left: "45%", top: "70%" },
  { title: "Basketball", emoji: "🏀", left: "5%", top: "65%" },
  { title: "Gaming", emoji: "🎮", left: "75%", top: "65%" },
  { title: "Billiard", emoji: "🎱", left: "75%", top: "5%" },
];

export const AboutSection = () => {
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          title="About Me"
          eyebrow="A Glimpse Into My World"
          description="Learn More About about who I am, what I do, and What Inspires me"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            {/* My Reads */}
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the Books shaping my perpectives."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book Cover" />
              </div>
            </Card>

            {/* My Toolbox */}
            <Card className="h-[320px]  md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional
                digital experiences."
                className=""
              />
              <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:60s]" />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:50s]"
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            {/* Beyond the Code */}
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Exploring my interests and hobbies outside the digital world, or maybe you can play with me"
                className="px-6 py-6"
              />
              <div className="relative flex-1">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{ left: hobby.left, top: hobby.top }}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* My Location */}
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="Map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"> </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"> </div>
                <Image
                  src={smileMemoji}
                  alt="Smiling Memoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
