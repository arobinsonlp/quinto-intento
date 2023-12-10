import pokePi from "../assets/projects/pokePi.png";
//import tresbien from "../assets/projects/tresbien.png";
import muvhi from "../assets/projects/muvhi.png";
import alarmHenry from "../assets/projects/alarmHenry.png";
import cristaldeluna from "../assets/projects/cristaldeluna.png";
import psiUnited from "../assets/projects/psiUnited.png";
import budget from "../assets/projects/budget.png";
import esi4u from "../assets/projects/esi4u.png";
// import placeholder from "../assets/projects/placeholder.jpg";
import tarot from "../assets/projects/tarot.png";
import simplestqr from "../assets/projects/simplestQR.png";
import tarotClient from "../assets/projects/tarotClient.png";
import NodeJsIcon from "../assets/Techs/gcp.png";
//import NodeJsIcon from "../assets/Techs/nodejs-icon-logo-svgrepo-com.svg";
import JavaScriptIcon from "../assets/Techs/javascript-svgrepo-com.svg";
import ReactJsIcon from "../assets/Techs/react-svgrepo-com.svg";
import ReduxIcon from "../assets/Techs/redux-svgrepo-com.svg";
import NextIcon from "../assets/Techs/nextjs-icon-svgrepo-com.svg";
//import ExpressJsIcon from "../assets/Techs/express-svgrepo-com.svg";
import ExpressJsIcon from "../assets/Techs/nodejs-icon-logo-svgrepo-com.svg";
import MongoIcon from "../assets/Techs/mongo-svgrepo-com.svg";
import SequelizeIcon from "../assets/Techs/sequelize-svgrepo-com.svg";
import PostgresIcon from "../assets/Techs/postgresql-svgrepo-com.svg";
import MaterialIcon from "../assets/Techs/material-ui-svgrepo-com.svg";
import CssIcon from "../assets/Techs/css-svgrepo-com.svg";
import HtmlIcon from "../assets/Techs/html-5-svgrepo-com.svg";
import BootstrapIcon from "../assets/Techs/bootstrap-4-logo-svgrepo-com.svg";
import NestJsIcon from "../assets/Techs/nestjs-svgrepo-com.svg";
import TypeScriptIcon from "../assets/Techs/typescript-svgrepo-com.svg";
import TailwindIcon from "../assets/Techs/tailwind-svgrepo-com.svg";
import AngularIcon from "../assets/Techs/angular-svgrepo-com.svg";
import ZustandLogo from "../assets/Techs/zustand-logo.png";
export const datafrontend = [
  {
    id: 1,
    description: "",
    techs: ["react", "zustand", "tailwind"],
    name: "Tarot-ES API Client",
    image: tarotClient,
    // github: "https://github.com/AngelVDev/alarmHenry", no mover
   // live: "https://tarot-es-client.vercel.app/",
    isWIP: false,
  },
  {
    id: 2,
    description: "",
    techs: ["nextjs", "tailwind"],
    name: "Simplest-QR",
    image: simplestqr,
    // github: "https://github.com/AngelVDev/alarmHenry", no mover
   // live: "https://simplest-qr.vercel.app/",
    isWIP: false,
  },
  {
    id: 3,
    description: "",
    techs: ["react", "mui"],
    name: "Muvhi",
    image: muvhi,
    github: "https://github.com/AngelVDev/Muvhi",
    //live: "https://muvhi-project.vercel.app",
    isWIP: false,
  },
  {
    id: 4,
    description: "",
    techs: ["react", "bootstrap"],
    name: "Budget",
    image: budget,
   // live: "https://budget-app-chaos.vercel.app/",
    isWIP: false,
  },
  {
    id: 5,
    description: "",
    techs: ["js", "html", "css"],
    name: "Henry Alarm",
    image: alarmHenry,
    github: "https://github.com/AngelVDev/alarmHenry",
   // live: "https://alarm-henry.vercel.app/",
    isWIP: false,
  },
  {
    id: 6,
    description: "",
    techs: ["js", "html", "css"],
    name: "ESI4U",
    image: esi4u,
    github: "https://github.com/AngelVDev/ESI4U",
   // live: "https://esiparavos.vercel.app/",
    isWIP: false,
  },
];
///////////////////////////
export const datafullstack = [
  {
    id: 1,
    description: "",
    techs: ["nextjs", "ts", "node", "express", "mongo"],
    name: "Cristal de Luna Tarot Site",
    image: cristaldeluna,
   // live: "https://cristal-front.vercel.app/",
    isWIP: true,
  },
  {
    id: 2,
    description: "",
    techs: ["react", "ts", "tailwind", "node", "express", "mongo"],
    name: "Psi-United",
    image: psiUnited,
   // live: "https://psi-united.com.ar/",
    isWIP: true,
  },
  /*{
    id: 3,
    description: "",
    techs: ["react", "redux", "node", "express", "ts", "mongo", "mui"],
    name: "Trés Bien e-Commerce",
    image: tresbien,
   // github: "https://github.com/orgs/PF-eCommerce/repositories",
    //live: "https://tres-bien-app.vercel.app/",
    isWIP: false,
  }, */
  {
    id: 4,
    description: "",
    techs: [
      "react",
      "redux",
      "css",
      "node",
      "express",
      "postgres",
      "sequelize",
    ],
    name: "Poke-PI",
    image: pokePi,
   // github: "https://github.com/AngelVDev/TheReturnOfPokeClient",
    //live: "https://the-return-of-poke-client.vercel.app/",
    isWIP: false,
  },
];
export const databackend = [
  {
    id: 1,
    description:
      "Provee información sobre los arcanos descritos en el sitio Tarot de Tiziana. La versión original está en inglés, fue creada por ekelen",
    techs: ["node", "express"],
    name: "tarotAPIes",
    image: tarot,
   // github: "https://github.com/AngelVDev/tarotAPIes",
   // live: "https://tarot-api-es.vercel.app/",
    isWIP: false,
  },
];
//area: "Backend"
//area: "Frontend"
//area: "Fullstack"
//type: "Language"
//type: "Database"
//type: "Enviroment"
//type: "Framework"
//type: "Tool"
export const dataTechs = [
 // { icon: NodeJsIcon, name: "NodeJs" },
  { icon: NodeJsIcon, name: "Google Cloud" },
  { icon: JavaScriptIcon, name: "JavaScript" },
  { icon: ReactJsIcon, name: "ReactJs" },
  { icon: ExpressJsIcon, name: "Node" },
  { icon: HtmlIcon, name: "HTML" },
  { icon: CssIcon, name: "CSS" },
  { icon: MaterialIcon, name: "Material UI" },
  { icon: PostgresIcon, name: "Postgres" },
  { icon: ReduxIcon, name: "Redux" },
  { icon: SequelizeIcon, name: "Sequelize" },
  { icon: MongoIcon, name: "MongoDB" },
  { icon: TypeScriptIcon, name: "TypeScript" },
  { icon: BootstrapIcon, name: "Bootstrap" },
  { icon: NextIcon, name: "NextJs" },
  { icon: NestJsIcon, name: "NestJs" },
  { icon: ZustandLogo, name: "Zustand" },
  { icon: TailwindIcon, name: "Tailwind" },
  { icon: AngularIcon, name: "Angular" },
];
