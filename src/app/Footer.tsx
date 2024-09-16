import LinkedinIcon from '@/assets/icons/linkedin.svg';
import GithubIcon from '@/assets/icons/github.svg';
import TwitterIcon from '@/assets/icons/twitter.svg';
import InstagramIcon from '@/assets/icons/instagram.svg';
import FacebookIcon from '@/assets/icons/facebook.svg';
import YoutubeIcon from '@/assets/icons/youtube.svg';

const footerLinks = [
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/aditypraa/',
    icon: LinkedinIcon,
  },
  { title: 'Github', url: 'https://github.com/Aditypraa', icon: GithubIcon },
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/aditypraa',
    icon: InstagramIcon,
  },
  {
    title: 'Youtube',
    url: 'https://www.youtube.com/@adityapraetama',
    icon: YoutubeIcon,
  },
  {
    title: 'Facebook',
    url: 'https://www.facebook.com/adityapraetama',
    icon: FacebookIcon,
  },
  { title: 'Twitter', url: 'https://x.com/aditypraa', icon: TwitterIcon },
];

export const Footer = () => {
  return (
    <footer className="relative z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2024. Aditya Pratama</div>
          <nav className="flex flex-wrap justify-center md:flex-row md:justify-start max-[360px]:flex-wrap max-[360px]:justify-center  items-center gap-8">
            {footerLinks.map((link) => (
              <a
                href={link.url}
                key={link.title}
                className="inline-flex items-center gap-1.5"
              >
                <span className="font-semibold">{link.title}</span>
                <link.icon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
