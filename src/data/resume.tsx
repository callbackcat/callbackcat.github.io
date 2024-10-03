import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Kirill Semenov",
  initials: "KS",
  url: "https://callbackcat.github.io/",
  location: "Russia, Saint-Petersburg",
  locationLink: "https://www.google.com/maps/place/russia",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.",
  summary:
    "At the middle of 2024, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses.",
  avatarUrl: "./me.jpeg",
  education: [
    {
      school: "ITMO",
      href: "https://itmo.ru",
      degree: "Bachelor of Software Engineering",
      logoUrl: "/itmo.png",
      start: "2020",
      end: "2024",
    },
  ],
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "Docker",
    "Java",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "mr.callbackcat@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/callbackcat",
        icon: Icons.github,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/kiracommerce",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Sitronics KT",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Junior Software Engineer",
      logoUrl: "/sitr.jpg",
      start: "Feb 2022",
      end: "Jul 2024",
    },
  ],
  projects: [
    {
      title: "Problemic",
      href: "https://problemic.com",
      dates: "Jul 2024",
      active: true,
      description:
      "A platform that lets users record audio notes about real-world problems and uses AI to generate potential startup ideas, aiming to help individuals discover and develop innovative solutions from everyday challenges without compromising privacy.",
      technologies: [
        "Next.js",
        "Typescript",
        "Supabase",
        "TailwindCSS",
        "Paddle",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://problemic.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
    },
  ],
} as const;
