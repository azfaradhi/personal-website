import Image from "next/image";
import TechStack from "@/components/techstack/techstack";
import Experience from "@/components/experience/experience";
import Projects from "@/components/projects/Projects";
import Education from "@/components/education/education";
// import Honor from "@/components/honor/honor";
// import Navbar from "@/components/navbar/Navbar";

type Item = {
  name: string;
  icon: string;
  invert: boolean;
};
type experienceContent = {
  job: string;
  comName: string;
  date: string;
  detail: string;
  photoLink: string;
  skills: string[];
}

type EducationList = {
  name: string;
  icon: string;
  date: string;
  score: string;
};

type ProjectLink = {
  label: string;
  url: string;
};

type ProjectData = {
  name: string;
  image: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
};

// type HonorData = {
//   image: string;
//   name: string;
//   award: string;
// };


export default async function Home() {
  const techstack: Item[] = [
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", invert: false },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", invert: false },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", invert: false },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", invert: false },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", invert: false },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invert: true },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", invert: false },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", invert: false },
    { name: "Golang", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg", invert: false },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", invert: false },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", invert: false },
    { name: "Electron.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg", invert: true },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invert: true },
    { name: "FastAPI", icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/fastapi.svg", invert: true },
    { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", invert: true },
    { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", invert: false },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", invert: false },
    { name: "Supabase", icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/supabase.svg", invert: true }
  ];
  const experience =
    [
      {
        comName: "OSKM ITB 2025",
        date: "Present",
        job: "Backend Developer",
        detail: "Developed endpoints that required for the website",
        photoLink: "/oskm2024.svg",
        skills: ["Hono"],
      },
      {
        comName: "OSKM ITB 2024",
        date: "present",
        job: "Frontend Developer",
        detail: "Developed and launched a responsive mentor dashboard, enabling 100 mentors to efficiently track and assess assignments for 2000 mentees. Ensured usability and responsiveness across devices to support efficient task tracking.",
        photoLink: "/oskm2024.svg",
        skills: ["React", "T3", "TypeScript"],
      },
      {
        comName: "KTOM",
        date: "present",
        job: "Quality Control",
        detail: "Reviewed and validated problem sets before public release to ensure accuracy, clarity, and appropriate difficulty levels for 5000+ participants",
        photoLink: "/logoktom.jpg",
        skills: ["LaTex", "Problem Writing"],
      },
      {
        comName: "Institut Teknologi Bandung",
        date: "present",
        job: "Asistant Computational Thinking",
        detail: "Guided 100+ students in weekly lab sessions, improving their understanding of fundamental algorithmic thinking and contributing to a 100% class success rate on practical assignments.",
        photoLink: "/logoitb.png",
        skills: ["Python"],
      },
      {
        comName: "Teman Belajar Course",
        date: "Present",
        job: "Co-Founder and Math Tutor",
        detail: "Co-founded a course platform focused on math enrichment for high school students. Provided personalized guidance for UTBK, OSN, and academic competitions.",
        photoLink: "/temanbelajar.jpg",
        skills: ["Leadership"],
      }


    ]
  const education: EducationList[] =
    [
      {
        name: "Institut Teknologi Bandung",
        icon: "/logoitb.png",
        date: "2023 - Present",
        score: "GPA: 3.89/4.00"
      },
      {
        name: "SMA Negeri 1 Depok",
        icon: "/sman1.png",
        date: "2020 - 2023",
        score: "95.32"
      }
    ]
  const projects: ProjectData[] = [
    {
      name: "Alchemy Element Finder",
      image: "/alchemy.png",
      description:
        "The application utilizes graph traversal methods such as Breadth-First Search, Depth-First Search, and Bidirectional Search to look for elements required to create your target element.",
      links: [
        { label: "Frontend", url: "https://github.com/azfaradhi/Tubes2_FE_Bolang" },
        { label: "Backend", url: "https://github.com/azfaradhi/Tubes2_BE_Bolang" },
        { label: "Website", url: "https://alchemy-bolang.vercel.app/" }

      ],
      tags: ["React", "Typescript", "Go"]
    },
    {
      name: "NoBazir",
      image:
        "/nobazir2.png",
      description:
        "Marketplace website for buying and selling food with a focus on responsible consumption.",
      links: [
        { label: "Repository", url: "https://github.com/azfaradhi/NoBazir" },
        { label: "Website", url: "https://nobazir.vercel.app/" }
      ],
      tags: ["Next.js", "TypeScript", "TailwindCSS", "Supabase"]
    },
    {
      name: "Image Retrieval dan Music Information Retrieval",
      image:
        "https://uyctwegdjjvywikeonjf.supabase.co/storage/v1/object/public/personal-website//homepage.png",
      description:
        "A system that processes audio and visual data, enabling retrieval and analysis similar to human perception.",
      links: [
        { label: "Repository", url: "https://github.com/azfaradhi/Algeo02-23095" }
      ],
      tags: ["Python", "FastAPI"]
    },
    {
      name: "Rentopia",
      image:
        "https://uyctwegdjjvywikeonjf.supabase.co/storage/v1/object/public/personal-website//page-list-car.png",
      description:
        "Rentopia is an application for efficiently managing a car rental business",
      links: [
        { label: "Repository", url: "https://github.com/azfaradhi/IF2150-2024-K01-G06-Rentopia" }
      ],
      tags: ["Python", "Electron.js", "PostgreSQL"]
    }
  ];
    // const honors: HonorData[] = [
    //   {
    //     image: "/honors.jpg",
    //     name: "Hackathon 10.0 Web3",
    //     award: "2nd Place",
    //   },
    //   {
    //     image: "/honors.jpg",
    //     name: "Indonesian National Science Olympiad",
    //     award: "Mathematic National Finalist",
    //   },
    //   {
    //     image: "/honors.jpg",
    //     name: "Sebelas Maret Mathematics Competition",
    //     award: "1st Place",
    //   },
    //   {
    //     image: "/honors.jpg",
    //     name: "PSN IPB (Mathematics)",
    //     award: "1st Place",
    //   },
    //   {
    //     image: "/honors.jpg",
    //     name: "KMNR",
    //     award: "Gold Medal",
    //   },
    // ];

  return (

    <div className="h-screen scroll-smooth">

      <section id="home" className="snap-start">
        <div className="flex flex-col py-4 mt-10 md:mt-0 px-4 md:flex-row md:justify-center md:items-center h-screen">
          <div className="flex justify-center md:justify-start">
            <Image
              src="/radrad.jpg"
              alt="foto radhi"
              width={256}
              height={256}
              className="rounded-full w-32 h-32 md:w-80 md:h-80 object-cover"
            />
          </div>



          <div className="flex flex-col my-4 md:my-0 md:ml-8 md:w-1/2">
            <div className="flex flex-col items-center justify-center">
              <h1 className="font-semibold text-3xl md:text-[64px] mt-10 md:mt-0 py-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Hi, I'm Radhi
              </h1>
              <p className="font-light text-[15px]  md:text-xl mt-8">
                Informatics Engineering student at ITB with a passion for software engineering, cryptography, and AI. Enthusiast of hackathons and CTF competitions.
              </p>
            </div>

            <div className="flex flex-col mt-4">
              <div className="flex flex-row items-center py-2">
                <Image src="/location.svg" width={18} height={18} alt="location" className="invert" />
                <h1 className="mx-2 text-[15px] md:text-xl relative cursor-pointer after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#4c40ff] after:transition-all after:duration-300 hover:after:w-full">
                  Bandung, Indonesia
                </h1>
              </div>
              <div className="flex flex-row py-2">
                <Image src="/github.svg" width={18} height={18} alt="github" className="invert" />
                <a
                  href="https://github.com/azfaradhi"
                  className="mx-2 text-[15px] md:text-xl relative cursor-pointer after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#4c40ff] after:transition-all after:duration-300 hover:after:w-full"
                >
                  GitHub
                </a>
              </div>
              <div className="flex flex-row items-center py-2">
                <Image src="/linkedin.svg" width={18} height={18} alt="linkedin" className="invert" />
                <a
                  href="https://www.linkedin.com/in/azfa-radhiyya-hakim/"
                  className="mx-2 text-[15px] md:text-xl relative cursor-pointer after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#4c40ff] after:transition-all after:duration-300 hover:after:w-full"
                >
                  Linkedin
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* about me */}
      {/* <section id="aboutme" className="snap-start">
        <div className="flex flex-col py-4 px-4 md:flex-row md:justify-center md:items-center h-screen">
          <div className="flex justify-center md:order-2">
            <Image
              src="/radhi.jpeg"
              alt="foto radhi"
              width={200}
              height={200}
              className="rounded-xl w-[200px] h-[200px] md:w-[400px] md:h-[400px]"
            />
          </div>

          <div className="flex flex-col justify-start my-4 md:my-0 md:ml-8 md:w-1/2 md:mx-10 md:order-1">
            <h1 className="font-bold text-2xl md:text-3xl py-2 ">About Me</h1>
            <p className="font-light text-[15px] text-justify md:text-xl">
              I'm an Informatics Engineering student at ITB with a passion for exploration.
              I enjoy software engineering and cybersecurity, and I'm currently diving deep into data.
              This space is where I share my journey, projects, and insights. I love staying active and have taken part in various sports events, earning national and international recognition during school. Outside of sports, I’m passionate about gaming—especially story-driven games. As the youngest of two siblings, I’m always looking for new ways to challenge myself and make the most out of life. <br /> Fun fact: I enjoy all genres of music!</p>
            <div className="flex flex-col my-5">
              <div className="flex flex-row py-2">
                <a href="https://www.instagram.com/azfaradhi" className="mx-2 text-[15px]">
                  <Image src={"/instagram.svg"} width={24} height={24} alt="instagram" className="invert" />
                </a>
                <a href="https://open.spotify.com/user/313ese4chjeats7v7cnwnwugj6vq?si=b82899a685464647" className="mx-2 text-[15px]">
                  <Image src={"/spot.svg"} width={24} height={24} alt="instagram" className="invert" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Experience */}
      <section id="experience" className="my-20 snap-start">
        <div className="flex flex-col py-12 px-4 min-h-screen md:justify-center md:items-center h-auto rounded-xl backdrop-blur-md">

          {/* Title */}
          <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-12">
            Experience
          </h2>

          {/* Experience Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl">
            {experience?.map((stack: experienceContent, index) => (
              <Experience key={index} {...stack} />
            ))}
          </div>

        </div>
      </section>


      {/* skills */}
      <section id="skills" className="snap-start mt-10">
        <div className="flex flex-col py-4 px-4  md:h-screen md:justify-center md:items-center h-auto">
          <div className="flex justify-center text-2xl md:text-3xl">
            Tech Stack
          </div>
          <div className="grid grid-cols-3 gap-4 md:grid-cols-8 p-4">
            {techstack?.map((stack: Item, index: number) => (
              <TechStack key={index} {...stack} />
            ))}
          </div>
        </div>
      </section>

      {/* education */}
      <section id="educations" className="snap-start mt-10">
        <div className="flex flex-col py-4 px-4 md:h-screen md:justify-center md:items-center h-auto">
          <div className="text-center text-2xl md:text-3xl mb-6">
            Education
          </div>

          <div className="flex flex-col gap-4 w-full max-w-4xl">
            {education?.map((item, index) => (
              <Education key={index} {...item} />
            ))}
          </div>
        </div>
        </section>
      {/* Projects */}
      <section id="projects" className="mt-20 snap-start">
        <div className="flex flex-col py-4 px-4 min-h-screen md:justify-center md:items-center h-auto">
          <div className="flex justify-center text-2xl md:text-3xl mb-8">
            Projects
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 w-full max-w-7xl">
            {projects?.map((stack: ProjectData, index) => (
              <Projects key={index} {...stack} />
            ))}
          </div>
        </div>
      </section>


      {/* Honor */}
      {/* <section id="Honor" className="mt-20 snap-start">
        <div className="flex flex-col py-4 px-4 min-h-screen md:justify-center md:items-center h-auto">
          <div className="flex justify-center text-2xl md:text-3xl mb-8">
            Honor and Awards
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2  p-4 w-full max-w-7xl">
            {honors?.map((stack: HonorData, index) => (
              <Honor key={index} {...stack} />
            ))}
          </div>
        </div>
      </section> */}
    </div>

  );
}
