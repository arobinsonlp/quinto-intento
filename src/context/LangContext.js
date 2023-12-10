import { useState } from "react";
import { createContext } from "react";
import ResumeES from "../assets/cv/ResumeES.pdf";
import ResumeEN from "../assets/cv/ResumeEN.pdf";

const LangContext = createContext();
const initialLang = "english";
const translations = {
  spanish: {
    navAbout: "Sobre mí",
    navWork: "Proyectos",
    navContact: "Contacto",
    navResume: "Currículo",
    home1: "Bienvenido a mi portfolio, mi nombre es",
    home2: "soy google cloud jr",
    home3:
      "En general, soy un ingeniero cloud jr apasionado y dedicado que está motivado por el amor al aprendizaje y mi deseo de crear increíbles experiencias en línea.",
    home4:
      "Si tienes curiosidad sobre quién soy y qué hago, has venido al lugar correcto.",
    home5:
      "Haga clic en el botón de aquí abajo para obtener más información sobre mí, mis habilidades como desarrollador web y mi pasión por explorar nuevas fronteras.",
    homeButton: "Ver más",
    aboutAbout: "Acerca de mí",
    aboutText1:
      "Como apasionado de la nube busqué en google mi primer proveedor que busca aprender y crecer, siempre estoy buscando nuevos desafíos y oportunidades.",
    aboutText2:
      "Además de mis habilidades técnicas, también soy un individuo curioso y creativo que busca constantemente nuevos conocimientos y experiencias.",
    aboutText3:
      "Siempre estoy buscando formas de ampliar los límites de lo que es posible con estudio de la nube, y disfruto encontrando nuevas soluciones a problemas complejos.",
    aboutText4:
      "Adéntrate en mi mundo y descubre los misterios que allí se encuentran. Desde mis habilidades como ingeniero de la nube hasta mi pasión por explorar nuevas fronteras. Hay aún más de lo que se ve a simple vista",
    skillsText: "Tecnologías con las que estoy familiarizado:",
    workCode: "Código",
    workLive: "Sitio",
    contact1: "Contacto",
    contact2: "Llena el formulario y envía ese e-mail 👍",
    contact3: "Pon aquí tu nombre",
    contact4: "Tu dirección de correo electrónico",
    contact5: "Tu mensaje",
    contactButton: "Colaboremos",
    footer1: "Hecho con React y Tailwind",
    footer2: "También hecho con",
    footer3: ". Todos los derechos reservados.",
    cv: ResumeES,
    contactAlert: "Por favor, completa todos los campos.",
    errorName: "Nombre requerido",
    errorEmail: "Por favor, usa una dirección válida",
    errorMessage: "Al menos 10 caracteres",
    alertCV:
      "CV fuera de servicio temporalmente. Vuelva en otra ocasión, muchas gracias.",
  },
  english: {
    navAbout: "About",
    navWork: "Work",
    navContact: "Contact",
    navResume: "Resume",
    home1: "Welcome to my portfolio, my name is",
    home2: "I'm a google cloud engineer jr",
    home3:
      "Overall, I am a passionate and dedicated google cloud who is driven by my love of learning and my desire to create amazing online experiences.",
    home4:
      "If you're curious about who I am and what I do, you've come to the right place.",
    home5:
      "Click the button below to learn more about me, my skills as a google cloud, and my passion for exploring new frontiers",
    homeButton: "Show more",
    aboutAbout: "About",
    aboutText1:
      "As a web developer who is always looking to learn and grow, I am always on the lookout for new challenges and opportunities",
    aboutText2:
      "In addition to my technical skills, I am also a curious and creative individual who is constantly seeking new knowledge and experiences.",
    aboutText3:
      "I am always looking for ways to push the boundaries of what is possible with web development, and I thrive on finding new solutions to complex problems.",
    aboutText4:
      "Step into my world and discover the mysteries that lie within.From my skills as a cloud engineer to my passion for exploring new frontiers, there's more to me than meets the eye.",
    skillsText: "Technologies I'm familiar with:",
    workCode: "Code",
    workLive: "Live",
    contact1: "Contact",
    contact2: "Fill the form and send that e-mail 👍",
    contact3: "Let me know your name",
    contact4: "Your e-mail address",
    contact5: "Your message",
    contactButton: "Let's Collaborate",
    footer1: "Made with React and Tailwind",
    footer2: "Also made with",
    footer3: ". All Rights Reserved.",
    cv: ResumeEN,
    contactAlert: "Please, fill every field in the form.",
    errorName: "Name required",
    errorEmail: "Please use a valid e-mail format",
    errorMessage: "At least 10 characters, please",
    alertCV:
      "Resume is temporarily out of service. Come back later, thank you very much.",
  },
};
const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(initialLang);
  const [text, setText] = useState(translations[lang]);
  const handleLang = (e) => {
    if (e.target.innerHTML === "EN") {
      setLang("spanish");
      setText(translations.spanish);
    } else {
      setLang("english");
      setText(translations.english);
    }
  };
  const data = { text, handleLang };
  return <LangContext.Provider value={data}>{children}</LangContext.Provider>;
};
export { LangProvider };
export default LangContext;
