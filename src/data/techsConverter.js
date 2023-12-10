import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiBootstrap,
  SiExpress,
  SiMaterialdesign,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiRedux,
  SiSequelize,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

export function converter(tech) {
  const techMap = {
    gcp: { icon: <FaNodeJs size='1.5rem' />, name: "gcp" },
    node: { icon: <FaNodeJs size='1.5rem' />, name: "NodeJs" },
    js: { icon: <FaJs size='1.5rem' />, name: "JavaScript" },
    react: { icon: <FaReact size='1.5rem' />, name: "ReactJs" },
    express: { icon: <SiExpress size='1.5rem' />, name: "Express" },
    html: { icon: <FaHtml5 size='1.5rem' />, name: "HTML" },
    css: { icon: <FaCss3 size='1.5rem' />, name: "CSS" },
    mui: { icon: <SiMaterialdesign size='1.5rem' />, name: "Material UI" },
    postgres: { icon: <SiPostgresql size='1.5rem' />, name: "Postgres" },
    redux: { icon: <SiRedux size='1.5rem' />, name: "Redux" },
    sequelize: { icon: <SiSequelize size='1.5rem' />, name: "Sequelize" },
    mongo: { icon: <SiMongodb size='1.5rem' />, name: "MongoDB" },
    ts: { icon: <SiTypescript size='1.5rem' />, name: "TypeScript" },
    bootstrap: { icon: <SiBootstrap size='1.5rem' />, name: "Bootstrap" },
    nextjs: { icon: <SiNextdotjs size='1.5rem' />, name: "NextJs" },
    zustand: { icon: "🐻", name: "Zustand" },
    tailwind: { icon: <SiTailwindcss size='1.5rem' />, name: "Tailwind" },
  };

  if (tech in techMap) {
    const { icon, name } = techMap[tech];
    return (
      <span className='flex flex-col items-center justify-center'>
        <p>{icon}</p>
        <p>{name}</p>
      </span>
    );
  }
}
