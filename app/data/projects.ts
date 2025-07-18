import TrashAI from "@/public/assets/trash.jpeg";
import MuzicImg from "@/public/assets/muzic.jpeg";
import MediumImg from "@/public/assets/medium.jpeg"
import PaytmImg from "@/public/assets/paytm.jpeg";
import F1 from "@/public/assets/f1.jpeg";


export const projects = [
  {
    title: "TrashAI",
    description: "Never write from your code from scratch again. Kickstart your coding projects with TrashAI,your long-form writing AI assistant.",
    imageSrc: TrashAI,
    liveUrl: "https://trashai.vercel.app/",
    githubUrl: "https://github.com/fazal-bhinder/TrashAI",
    technologies: ["Next.js", "React", "WebContainer", "GPT-4o"],
  },
  {
    title: "Medium Clone",
    description: "Created a Medium-style blogging platform Implemented authentication, CRUD operations, and a clean editor interface.",
    imageSrc: MediumImg,
    liveUrl: "https://medium-frontend-beta.vercel.app/",
    githubUrl: "https://github.com/fazal-bhinder/medium?tab=readme-ov-file",
    technologies: ["Next.js", "TypeScript", "Hono", "Cloudflare"],
  },
  {
    title: "Formla 1",
    description: "Inspired by the thrill and intensity of Formula 1. It features a dynamic fullscreen video background, iconic quotes from drivers, and a sleek, responsive design.",
    imageSrc: F1,
    liveUrl: "https://racing-f1.b-cdn.net/",
    githubUrl: "https://github.com/fazal-bhinder/gym_app",
    technologies: ["Gsap", "Html", "Css", "JavaScript"],
  },
  {
    title: "PayTm clone",
    description: "Built a full-stack Paytm-like payment app. Enabling users to transfer funds between bank and wallet, and send money to friends. Separate payment gateway routing, and real-time transaction of magic, and a lot of love.",
    imageSrc: PaytmImg,
    liveUrl: "https://github.com/fazal-bhinder/paytm?tab=readme-ov-file",
    githubUrl: "https://github.com/fazal-bhinder/paytm?tab=readme-ov-file",
    technologies: ["React", "Next.js", "PostgreSQL", "TurboRepo"],
  },
  {
    title: "Muzic",
    description: "Developed a Spotify-like SaaS app allowing users to host and join live music streams. Features include collaborative song queues with upvote/downvote functionality, and a clean interface.",
    imageSrc: MuzicImg,
    liveUrl: "https://github.com/fazal-bhinder/muzic",
    githubUrl: "https://github.com/fazal-bhinder/muzic",
    technologies: ["Next.js", "React", "TailwindCSS", "Algorithms"],
  },
  
  
];
