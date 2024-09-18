import rickandMortyImage from '@/assets/images/rickandmorty.png';
import artistryAgoraImage from '@/assets/images/Artistryagora.png';
import miniProjectImage from '@/assets/images/miniproject.png';
import hydroSenseImage from '@/assets/images/hydrosense.png';
import agrisightImage from '@/assets/images/agrisight.png';
import resepMakananImage from '@/assets/images/resepmakanan.png';
import websiteDesaImage from '@/assets/images/websitedesa.png';
import esafetyImage from '@/assets/images/esafety.png';
import HtmlIcon from '@/assets/icons/html5.svg';
import CssIcon from '@/assets/icons/css3.svg';
import JavascriptIcon from '@/assets/icons/javascript.svg';
import BoostrapIcon from '@/assets/icons/bootstrap.svg';
import TailwindCssIcon from '@/assets/icons/tailwindcss.svg';
import MysqlIcon from '@/assets/icons/mysql.svg';
import MongodbIcon from '@/assets/icons/mongodb.svg';
import GitIcons from '@/assets/icons/git.svg';
import GithubIcon from '@/assets/icons/github.svg';
import ExpressIcon from '@/assets/icons/express-original.svg';
import NodeIcon from '@/assets/icons/nodejs.svg';
import ReactIcon from '@/assets/icons/react.svg';
import NextjsIcon from '@/assets/icons/nextjs.svg';
import DockerIcon from '@/assets/icons/docker.svg';
import GcpIcon from '@/assets/icons/googlecloud.svg';
import LinuxIcon from '@/assets/icons/linux.svg';
import UbuntuIcon from '@/assets/icons/ubuntu.svg';
import WindowsIcon from '@/assets/icons/windows.svg';
import ViteIcon from '@/assets/icons/vitejs.svg';
import SassIcon from '@/assets/icons/sass.svg';
import FirebaseIcon from '@/assets/icons/firebase.svg';
import KotlinIcon from '@/assets/icons/kotlin.svg';
import GoogleCloud from '@/assets/icons/googlecloud-original.svg';
import LaravelIcon from '@/assets/icons/laravel.svg';
import FlutterIcon from '@/assets/icons/flutter.svg';

const projectsData = [
  {
    company: 'Personal Project',
    year: '2024',
    title: 'Rick and Morty Wiki',
    results: [
      {
        description:
          'I have developed a Website called Rick & Morty using the React J.S. Framework. This website allows fans of this cartoon to easily search for and find various characters from the animated series.',
      },
    ],
    technology: [
      { icon: ReactIcon },
      { icon: TailwindCssIcon },
      { icon: BoostrapIcon },
      { icon: ViteIcon },
      { icon: SassIcon },
    ],
    link: 'https://rickandmorty-animasi.vercel.app',
    repository: 'https://github.com/Aditypraa/reactjs-rickandmorty',
    image: rickandMortyImage,
  },
  {
    company: 'Personal Project',
    year: '2024',
    title: 'Artistry Agora',
    results: [
      {
        description:
          'I named it Artistry Agora, a Website for art exhibition information and ticketing. This Website aims to make it easier for artists and art lovers to create and find centralized art events on one Website.',
      },
    ],
    technology: [
      { icon: MongodbIcon },
      { icon: ExpressIcon },
      { icon: ReactIcon },
      { icon: NodeIcon },
      { icon: NextjsIcon },
      { icon: TailwindCssIcon },
    ],
    link: 'https://artistryagora.vercel.app',
    repository: 'https://github.com/Aditypraa/Nextjs-Landingpage-Artistryagora',
    image: artistryAgoraImage,
  },
  {
    company: 'Infinite Learning Indonesia',
    year: '2024',
    title: 'HydroSense',
    results: [
      {
        description:
          'This Website is designed to help urban farmers by providing educational resources through the Hydropedia feature, making it easier for them to manage their crops. Future updates will include tools for plant care, such as automated watering schedules and harvest time predictions.',
      },
    ],
    technology: [
      { icon: MysqlIcon },
      { icon: ExpressIcon },
      { icon: ReactIcon },
      { icon: NodeIcon },
      { icon: TailwindCssIcon },
    ],
    link: '#',
    repository: 'https://github.com/PalapaPixel',
    image: hydroSenseImage,
  },
  {
    company: 'Bangkit Academy',
    year: '2023',
    title: 'Agrisight',
    results: [
      {
        description: `Agrisight is a cutting-edge project designed to tackle the challenges of soil identification and crop recommendations in modern agriculture. By leveraging advanced computer vision technology, Agrisight empowers users to determine soil types accurately and receive personalized crop suggestions simply by uploading a photo, transforming farmers' decision-making and optimizing agricultural productivity.`,
      },
    ],
    technology: [
      { icon: GoogleCloud },
      { icon: ExpressIcon },
      { icon: FirebaseIcon },
      { icon: KotlinIcon },
    ],
    link: '#',
    repository: 'https://github.com/Aditypraa/Agrisight',
    image: agrisightImage,
  },
  {
    company: 'Personal Project',
    year: '2023',
    title: 'Mini Project Ideas',
    results: [
      {
        description:
          'This project showcases my web development expertise, utilizing various techniques from foundational to advanced levels. Each project illustrates my ability to implement diverse frameworks and technologies, demonstrating the practical skills I have mastered and continuously refined.',
      },
    ],
    technology: [
      { icon: HtmlIcon },
      { icon: CssIcon },
      { icon: JavascriptIcon },
      { icon: ReactIcon },
      { icon: ExpressIcon },
    ],
    link: 'https://aditypraa.github.io/Mini-Project',
    repository: 'https://github.com/Aditypraa/Mini-Project',
    image: miniProjectImage,
  },
  {
    company: 'Personal Project',
    year: '2023',
    title: 'Website Desa',
    results: [
      {
        description:
          'I created this Website to display a list of villages and sub-districts in Lamongan Regency, East Java Province. This Website was developed using the Laravel Framework with the MySql database.',
      },
    ],
    technology: [{ icon: LaravelIcon }, { icon: MysqlIcon }],
    link: '#',
    repository: 'https://github.com/Aditypraa/Laravel-WebDesa',
    image: websiteDesaImage,
  },
  {
    company: 'PT. Barata Indonesia',
    year: '2023',
    title: 'E Safety',
    results: [
      {
        description:
          'The name of this application is E-Safety. This is my internship project that I worked on with my friend. This application aims to report employee violations in the form of images that are photographed directly or uploaded.',
      },
    ],
    technology: [
      { icon: LaravelIcon },
      { icon: FlutterIcon },
      { icon: MysqlIcon },
    ],
    link: '#',
    repository: 'https://github.com/Aditypraa/Flutter-E-safety',
    image: esafetyImage,
  },

  {
    company: 'Personal Project',
    year: '2022',
    title: 'Resep Makanan',
    results: [
      {
        description:
          'Food Recipes is a tutorial application that provides video and written guides for making the food you are looking for. This application is developed using the Flutter framework and integrated with external APIs.',
      },
    ],
    technology: [{ icon: FlutterIcon }],
    link: '#',
    repository: 'https://github.com/Aditypraa/Flutter-ResepMakanan',
    image: resepMakananImage,
  },
];

export default projectsData;
