import rickandMortyImage from "@/assets/images/rickandmorty.png";
import artistryAgoraImage from "@/assets/images/Artistryagora.png";
import miniProjectImage from "@/assets/images/miniproject.png";
import hydroSenseImage from "@/assets/images/hydrosense.png";
import agrisightImage from "@/assets/images/agrisight.png";
import resepMakananImage from "@/assets/images/resepmakanan.png";
import websiteDesaImage from "@/assets/images/websitedesa.png";
import esafetyImage from "@/assets/images/esafety.png";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import JavascriptIcon from "@/assets/icons/javascript.svg";
import BoostrapIcon from "@/assets/icons/bootstrap.svg";
import TailwindCssIcon from "@/assets/icons/tailwindcss.svg";
import MysqlIcon from "@/assets/icons/mysql.svg";
import MongodbIcon from "@/assets/icons/mongodb.svg";
import GitIcons from "@/assets/icons/git.svg";
import GithubIcon from "@/assets/icons/github.svg";
import ExpressIcon from "@/assets/icons/express-original.svg";
import NodeIcon from "@/assets/icons/nodejs.svg";
import ReactIcon from "@/assets/icons/react.svg";
import NextjsIcon from "@/assets/icons/nextjs.svg";
import DockerIcon from "@/assets/icons/docker.svg";
import GcpIcon from "@/assets/icons/googlecloud.svg";
import LinuxIcon from "@/assets/icons/linux.svg";
import UbuntuIcon from "@/assets/icons/ubuntu.svg";
import WindowsIcon from "@/assets/icons/windows.svg";
import ViteIcon from "@/assets/icons/vitejs.svg";
import SassIcon from "@/assets/icons/sass.svg";
import FirebaseIcon from "@/assets/icons/firebase.svg";
import KotlinIcon from "@/assets/icons/kotlin.svg";
import GoogleCloud from "@/assets/icons/googlecloud-original.svg";
import LaravelIcon from "@/assets/icons/laravel.svg";
import FlutterIcon from "@/assets/icons/flutter.svg";

const projectsData = [
  {
    company: "Personal Project",
    year: "2024",
    title: "Rick and Morty Wiki",
    results: [
      {
        description:
          "I developed a Rick & Morty character wiki project using React JS. The wiki features search, filter, pagination, and dynamic character pages. Character data is fetched from the Rick & Morty API, and Bootstrap is used for styling.",
      },
    ],
    technology: [
      { icon: ReactIcon },
      { icon: TailwindCssIcon },
      { icon: BoostrapIcon },
      { icon: ViteIcon },
      { icon: SassIcon },
    ],
    link: "https://rickandmorty-animasi.vercel.app",
    repository: "https://github.com/Aditypraa/reactjs-rickandmorty",
    image: rickandMortyImage,
  },
  {
    company: "Personal Project",
    year: "2024",
    title: "Artistry Agora",
    results: [
      { description: "Website for Art exhibition information and ticketing" },
    ],
    technology: [
      { icon: MongodbIcon },
      { icon: ExpressIcon },
      { icon: ReactIcon },
      { icon: NodeIcon },
      { icon: NextjsIcon },
      { icon: TailwindCssIcon },
    ],
    link: "https://artistryagora.vercel.app",
    repository: "https://github.com/Aditypraa/Nextjs-Landingpage-Artistryagora",
    image: artistryAgoraImage,
  },
  {
    company: "Infinite Learning Indonesia",
    year: "2024",
    title: "HydroSense",
    results: [
      {
        description:
          "This farm management website helps users easily manage hydroponics and provides articles on farming.",
      },
    ],
    technology: [
      { icon: MysqlIcon },
      { icon: ExpressIcon },
      { icon: ReactIcon },
      { icon: NodeIcon },
      { icon: TailwindCssIcon },
    ],
    link: "",
    repository: "https://github.com/PalapaPixel",
    image: hydroSenseImage,
  },
  {
    company: "Bangkit Academy",
    year: "2023",
    title: "Agrisight",
    results: [
      {
        description: `Agrisight is an innovative project that aims to address the challenges of soil identification and crop
  recommendation in agriculture. Using computer vision, Agrisight intends to revolutionize agriculture by
  enabling users to accurately identify soil types and receive customized crop recommendations through
  simple photo uploads.`,
      },
    ],
    technology: [
      { icon: GoogleCloud },
      { icon: ExpressIcon },
      { icon: FirebaseIcon },
      { icon: KotlinIcon },
    ],
    link: "",
    repository: "https://github.com/Aditypraa/Agrisight",
    image: agrisightImage,
  },
  {
    company: "Personal Project",
    year: "2023",
    title: "Mini Project Ideas",
    results: [
      {
        description:
          "This project highlights my proficiency in web development through a variety of techniques, from basic to advanced.",
      },
      {
        description:
          "Each project demonstrates my ability to apply various frameworks and technologies, reflecting the practical skills I have acquired and honed.",
      },
    ],
    technology: [
      { icon: HtmlIcon },
      { icon: CssIcon },
      { icon: JavascriptIcon },
      { icon: ReactIcon },
      { icon: ExpressIcon },
    ],
    link: "https://aditypraa.github.io/Mini-Project",
    repository: "https://github.com/Aditypraa/Mini-Project",
    image: miniProjectImage,
  },
  {
    company: "Personal Project",
    year: "2023",
    title: "Website Desa",
    results: [
      { description: "A website to display a list of villages in Lamongan." },
    ],
    technology: [{ icon: LaravelIcon }, { icon: MysqlIcon }],
    link: "",
    repository: "https://github.com/Aditypraa/Laravel-WebDesa",
    image: websiteDesaImage,
  },
  {
    company: "PT. Barata Indonesia",
    year: "2023",
    title: "E Safety",
    results: [
      { description: "Electronic Whistleblowing Application for workers." },
    ],
    technology: [
      { icon: LaravelIcon },
      { icon: FlutterIcon },
      { icon: MysqlIcon },
    ],
    link: "",
    repository: "https://github.com/Aditypraa/Flutter-E-safety",
    image: esafetyImage,
  },

  {
    company: "Personal Project",
    year: "2022",
    title: "Resep Makanan",
    results: [{ description: "Application to Display Various Food Recipes." }],
    technology: [{ icon: FlutterIcon }],
    link: "",
    repository: "https://github.com/Aditypraa/Flutter-ResepMakanan",
    image: resepMakananImage,
  },
];

export default projectsData;
