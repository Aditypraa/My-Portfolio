import barataImage from '../assets/images/barataid.jpeg';
import bangkiImage from '../assets/images/bangkit.jpeg';
import infiniteImage from '../assets/images/infinitelearning.jpeg';

const works = [
  {
    company: 'PT. Barata Indonesia',
    position: 'IT Support Specialist',
    date: '01 Feb 2023 - 31 Juli 2023',
    descriptions: [
      { text: 'Developing a mobile E-Safety application using Flutter.' },
      { text: 'Creating a Restful API with Laravel Framework.' },
      { text: 'Troubleshooting and improving network systems.' },
      {
        text: 'Evaluating and enhancing computer objects, operating systems, hardware, and software.',
      },
    ],
    avatar: barataImage,
  },
  {
    company: 'Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka',
    position: 'Cloud Computing',
    date: '14 August 2023 - 26 January 2024',
    descriptions: [
      { text: 'Creating a Backend Using the Express JS framework' },
      { text: 'Using Google Cloud Infrastructure' },
      { text: 'Creating a website according to best practices' },
      { text: 'API Testing Using Postman' },
    ],
    avatar: bangkiImage,
  },
  {
    company: 'Infinite Learning Indonesia',
    position: 'Web Development & UI UX Design',
    date: '16 Februari 2024 - 30 Juni 2024',
    descriptions: [
      { text: 'Build UI/UX design using Figma' },
      { text: 'Create Restfull api using ExpressJs Framework' },
      { text: 'Designing a Database with Mysql' },
      { text: 'Integrate API to frontend using ReactJs' },
    ],
    avatar: infiniteImage,
  },
];

export default works;
