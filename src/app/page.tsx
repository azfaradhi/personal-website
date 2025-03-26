import Image from "next/image";
import TechStack from "@/components/techstack/techstack";
import Experience from "@/components/experience/experience";
import Projects from "@/components/projects/Projects";
import {supabase} from "../../lib/supabase.js";
import Navbar from "@/components/navbar/Navbar";

type Item = {
  name: string;
  icon: string;
  invert: boolean;
};
type experienceContent = {
  name: string;
  date: string;
  job: string;
  detail:string
}
type ProjectData = {
  name: string;
  image: string;
  description: string;
  link: string;
}

export default async function Home() {
  const { data: techstack} = await supabase.from('TechStack').select('*');
  const { data: experience} = await supabase.from('Experience').select('*');
  const { data: projects} = await supabase.from('Projects').select('*');

  return (
    
    <div className="h-screen scroll-smooth snap-y snap-mandatory">
      <header className="my-4">
      <Navbar />
      </header>

      <section id="home" className="snap-start">
      <div className="flex flex-col py-4  mt-10 md:mt-0 px-4 md:flex-row md:justify-center md:items-center h-screen">
      <div className="flex justify-center md:justify-start">
        <Image 
        src={"/boy.gif"}
        alt="foto radhi"
        width={200}
        height={200}
        className="rounded-xl w-[200px] h-[200px] md:w-[400px] md:h-[400px] "
        />
      </div>


        <div className="flex flex-col justify-start my-4 md:my-0 md:ml-8 md:w-1/2">
          <h1 className="font-bold text-3xl md:text-[64px] mt-10 md:mt-0 py-2 text-[#4c40ff]">Hi, I'm Radhi</h1>
          <p className="font-light md:text-xl">“Computers are good at following instructions, but not at reading your mind.” - Donald Knuth
          </p>
          <div className="flex flex-col my-5">
            <div className="flex flex-row py-2">
              <Image src={"/location.svg"} width={18} height={18} alt="location" className="invert"/>
              <h1 className="mx-2 text-[15px] md:text-xl relative cursor-pointer after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#4c40ff] after:transition-all after:duration-300 hover:after:w-full">Bandung, Indonesia</h1>
            </div>
            <div className="flex flex-row py-2">
              <Image src={"/github.svg"} width={18} height={18} alt="github" className="invert"/>
              <a href="https://github.com/azfaradhi" className="mx-2 text-[15px] md:text-xl relative cursor-pointer after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#4c40ff] after:transition-all after:duration-300 hover:after:w-full">GitHub</a>
            </div> 
            <div className="flex flex-row py-2">
              <Image src={"/linkedin.svg"} width={18} height={18} alt="linkedin" className="invert"/>
              <a href="https://www.linkedin.com/in/azfa-radhiyya-hakim/" className="mx-2 text-[15px] md:text-xl relative cursor-pointer after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#4c40ff] after:transition-all after:duration-300 hover:after:w-full">Connect on Linkedin</a>
            </div>       
          </div>
          </div>
      </div>
      </section>


      {/* about me */}
      <section id="aboutme" className="snap-start">
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
            <Image src={"/instagram.svg"} width={24} height={24} alt="instagram" className="invert"/>
          </a>
          <a href="https://open.spotify.com/user/313ese4chjeats7v7cnwnwugj6vq?si=b82899a685464647" className="mx-2 text-[15px]">
            <Image src={"/spot.svg"} width={24} height={24} alt="instagram" className="invert"/>
          </a>
        </div> 
          </div>
        </div>
      </div>
      </section>

      {/* skills */}
      <section id="skills" className="snap-start">
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

      {/* Experience */}
      <section id="experience" className="my-20 snap-start">
        <div className="flex flex-col py-4 px-4 min-h-screen md:justify-center md:items-center h-auto">
          <div className="flex justify-center text-2xl md:text-3xl mb-8">
            Experience
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 p-4 w-full max-w-7xl">
            {experience?.map((stack: experienceContent, index) => (
            <Experience key={index} {...stack} />
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
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2  p-4 w-full max-w-7xl">
            {projects?.map((stack:ProjectData, index) => (
            <Projects key={index} {...stack} />
            ))}
          </div>
        </div>   
      </section>

    </div>

  );
}
