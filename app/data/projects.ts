import TrashAI from "/Users/fazalsingh/Documents/Resume/Portfolio/project/public/assets/trash.jpeg";
import MuzicImg from "/Users/fazalsingh/Documents/Resume/Portfolio/project/public/assets/muzic.jpeg";
import MediumImg from "/Users/fazalsingh/Documents/Resume/Portfolio/project/public/assets/medium.jpeg"
import PaytmImg from "/Users/fazalsingh/Documents/Resume/Portfolio/project/public/assets/paytm.jpeg";
import GymImg from "/Users/fazalsingh/Documents/Resume/Portfolio/project/public/assets/gym.jpeg";

export const projects = [
  {
    title: "TrashAI",
    description: "Never write from your code from scratch again. Kickstart your coding projects with TrashAI,your long-form writing AI assistant.",
    imageSrc: TrashAI,
    liveUrl: "https://trashai-frontend.vercel.app/",
    githubUrl: "https://github.com/fazal-bhinder/TrashAI",
    technologies: ["Next.js", "React", "WebContainer", "GPT-4o"],
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
  {
    title: "Medium Clone",
    description: "Created a Medium-style blogging platform Implemented authentication, CRUD operations, and a clean editor interface.",
    imageSrc: MediumImg,
    liveUrl: "https://github.com/fazal-bhinder/medium?tab=readme-ov-file",
    githubUrl: "https://github.com/fazal-bhinder/medium?tab=readme-ov-file",
    technologies: ["Next.js", "TypeScript", "Hono", "Cloudflare"],
  },
  {
    title: "Exercise Tracker",
    description: "A fully-featured Exercise tracking platform with a clean and intuitive interface. Users can log their workouts, set goals, and track their progress.",
    imageSrc: GymImg,
    liveUrl: "https://github.com/fazal-bhinder/gym_app",
    githubUrl: "https://github.com/fazal-bhinder/gym_app",
    technologies: ["React", "Node.js", "Express"],
  },
  
];