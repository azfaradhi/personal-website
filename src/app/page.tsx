import Image from "next/image";
import TechStack from "@/components/techstack/techstack";
import Experience from "@/components/experience/experience";
import Projects from "@/components/projects/Projects";
import {supabase} from "../../lib/supabase.js";

// export async function getServerSideProps() {
//   const { data, error } = await supabase.from('TechStack').select('*');
//   return { props: { users: data || [] } };
// }

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
  const { data: techstack, error: techstackError } = await supabase.from('TechStack').select('*');
  const { data: experience, error: experienceerr } = await supabase.from('Experience').select('*');
  const { data: projects, error: projecterr } = await supabase.from('Projects').select('*');
  console.log(experience);

  return (
    <div className="h-screen scroll-smooth snap-y snap-mandatory">
      <section id="home" className="snap-start">
      <div className="flex flex-col py-4 px-4 md:flex-row md:justify-center md:items-center h-screen">
        <div className="flex justify-center md:justify-start">
          <Image 
          src={"/radhi.jpeg"}
          alt="foto radhi"
          width={200}
          height={200}
          className="rounded-xl w-[200px] h-[200px] md:w-[400px] md:h-[400px]"
          />
        </div>

        <div className="flex flex-col justify-start my-10 md:my-0 md:ml-8 md:w-1/2">
          <h1 className="font-bold text-2xl md:text-3xl py-2">Hi, I'm Radhi</h1>
          <p className="font-light md:text-2xl">"Hi, I'm an Informatics student at ITB with a passion for exploration. 
            I enjoy software engineering and cybersecurity, and I'm currently diving deep into data. 
            This space is where I share my journey, projects, and insights. Let's connect and explore the world of tech together!"
          </p>
          <div className="flex flex-col my-5">
            <div className="flex flex-row py-2">
              <Image src={"/location.svg"} width={18} height={18} alt="location" className="invert"/>
              <h1 className="mx-2 text-[15px] md:text-xl relative cursor-pointer after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#4c40ff] after:transition-all after:duration-300 hover:after:w-full">Bandung, Indonesia</h1>
            </div>
            <div className="flex flex-row py-2">
              <Image src={"/github.svg"} width={18} height={18} alt="github" className="invert"/>
              <a href="https://github.com/azfaradhi" className="mx-2 text-[15px] md:text-xl relative cursor-pointer after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#4c40ff] after:transition-all after:duration-300 hover:after:w-full">Connect on GitHub</a>
            </div> 
            <div className="flex flex-row py-2">
              <Image src={"/linkedin.svg"} width={18} height={18} alt="linkedin" className="invert"/>
              <a href="https://www.linkedin.com/in/azfa-radhiyya-hakim/" className="mx-2 text-[15px] md:text-xl relative cursor-pointer after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#4c40ff] after:transition-all after:duration-300 hover:after:w-full">Linkedin</a>
            </div>       
          </div>
          </div>
      </div>
      </section>


      {/* about me */}
      <section id="aboutme" className="snap-start">
      <div className="flex flex-col py-4 px-4 md:flex-row md:justify-center md:items-center h-screen">

        <div className="flex flex-col justify-start my-10 md:my-0 md:ml-8 md:w-1/2 md:mx-10">
          <h1 className="font-bold text-2xl md:text-3xl py-2">About Me</h1>
          <p className="font-light md:text-2xl">"Hi, I'm an Informatics student at ITB with a passion for exploration. 
            I enjoy software engineering and cybersecurity, and I'm currently diving deep into data. 
            This space is where I share my journey, projects, and insights. Let's connect and explore the world of tech together!"
          </p>
          <div className="flex flex-col my-5">
            {/* <div className="flex flex-row py-2">
              <Image src={"/location.svg"} width={18} height={18} alt="location" className="invert"/>
              <h1 className="mx-2 text-[15px]">Bandung, Indonesia</h1>
            </div> */}
            <div className="flex flex-row py-2">
              <a href="https://www.instagram.com/azfaradhi" className="mx-2 text-[15px]">
                <Image src={"/instagram.svg"} width={24} height={24} alt="instagram" className="invert"/>
              </a>
              
            </div> 
            {/* <div className="flex flex-row py-2">
              <Image src={"/linkedin.svg"} width={18} height={18} alt="linkedin" className="invert"/>
              <a href="https://www.linkedin.com/in/azfa-radhiyya-hakim/" className="mx-2 text-[15px]">Linkedin</a>
            </div>        */}
          </div>
        </div>


        <div className="flex justify-center md:justify-start">
          <Image 
          src={"/radhi.jpeg"}
          alt="foto radhi"
          width={200}
          height={200}
          className="rounded-xl w-[200px] h-[200px] md:w-[400px] md:h-[400px]"
          />
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
      <section id="experience" className="mt-20 snap-start">
        <div className="flex flex-col py-4 px-4 md:h-screen md:justify-center md:items-center h-auto">
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
      <section id="experience" className="mt-20 snap-start">
      <div className="flex flex-col py-4 px-4 md:h-screen md:justify-center md:items-center h-auto">
          <div className="flex justify-center text-2xl md:text-3xl mb-8">
            Projects
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2  p-4 w-full max-w-7xl">
            {projects?.map((stack, index) => (
            <Projects key={index} {...stack} />
            ))}
          </div>
        </div>   
      </section>

    </div>

  );
}
