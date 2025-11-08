// Configuración personal del portafolio
export const PERSONAL_INFO = {
  name: "Francisco",
  fullName: "Francisco Castaño",
  title: "Desarrollador Full Stack",
  location: "Cali, Colombia 🇨🇴",
  email: "franxx838@gmail.com",
  linkedin: "https://www.linkedin.com/in/francisco-salgado-castaño-77a952277",
  github: "https://github.com/FranciscoWesker",
  
  // Descripción personal
  description: {
    short: "+8 años de experiencia. Desarrollador Full Stack apasionado por crear soluciones web innovadoras y eficientes.",
    long: [
      "Soy Francisco Castaño, un Desarrollador FullStack con más de 8 años de experiencia creando soluciones web, automatizando procesos y analizando datos. He liderado desarrollos en investigación académica, educación tecnológica y atención al cliente, logrando mejoras medibles en rendimiento, eficiencia y experiencia de usuario.",
      "Mi enfoque combina habilidades técnicas sólidas con comunicación clara y enfoque en resultados. Me especializo en el desarrollo de aplicaciones completas que van desde herramientas de visualización y análisis de datos hasta sistemas de gestión de proyectos con funcionalidades en tiempo real.",
      "Además de mi trabajo técnico, he tenido la oportunidad de diseñar y facilitar talleres de programación, robótica y desarrollo web para niños, niñas y adolescentes, fortaleciendo habilidades socioemocionales y digitales en más de 120 estudiantes. Esta experiencia me ha enseñado la importancia de la pedagogía, la inclusión y la creatividad en el desarrollo tecnológico."
    ]
  },

  // Experiencia laboral
  experience: [
    {
      date: "Agosto 2021 - Noviembre 2022",
      title: "Monitor y Tallerista",
      company: "FabLab Cali",
      description: "Diseñé y facilité talleres de programación, robótica, electrónica y desarrollo web para niños, niñas y adolescentes en situación de vulnerabilidad. Coordiné sesiones presenciales y virtuales con enfoque pedagógico, inclusivo y creativo. Realicé mantenimiento y gestión del laboratorio: impresoras 3D, kits de Arduino, cortadoras láser, etc. Fortalecí habilidades socioemocionales y digitales en más de 120 estudiantes.",
      link: "https://fablabcali.com"
    },
    {
      date: "Agosto 2020 - Septiembre 2022",
      title: "Programador - Desarrollador FullStack",
      company: "Grupo de Investigación G7 (Universidad del Valle)",
      description: "Desarrollé herramientas para visualización y análisis de datos en proyectos de investigación sísmica. Automatización de flujos de trabajo con Python y PostgreSQL/PostGIS. Participé en el procesamiento y modelamiento de datos geoespaciales para caracterización del subsuelo.",
      link: "https://univalle.edu.co"
    }
  ],

  // Proyectos destacados
  projects: [
    {
      title: "TaskForge - Gestión de Proyectos en Tiempo Real",
      description: "Aplicación de gestión de proyectos para equipos que combina tableros Kanban en tiempo real, comunicación por chat y integraciones con repositorios Git. Incluye sincronización en tiempo real mediante Socket.io, persistencia en MongoDB, autenticación con Firebase y una interfaz moderna construida con Angular y Taiga UI.",
      link: "https://taskforge-21m4.onrender.com/",
      github: "https://github.com/FranciscoWesker/Taskforge",
      image: "/projects/taskforge.webp",
      tags: [
        {
          name: "Angular",
          class: "bg-primary-500 text-white"
        },
        {
          name: "Node.js",
          class: "bg-secondary-500 text-white"
        },
        {
          name: "MongoDB",
          class: "bg-accent-600 text-white"
        },
        {
          name: "Socket.io",
          class: "bg-purple-500 text-white"
        }
      ]
    },
    {
      title: "SupportFlow - Chatbot de Soporte Técnico",
      description: "Sistema de chatbot profesional de soporte técnico construido con React, TypeScript y Chat UI Kit de Chatscope. Diseñado para resolver consultas y problemas comunes de usuarios mediante una interfaz moderna, responsive y accesible.",
      link: "https://supportflow-yorh.onrender.com/",
      github: "https://github.com/FranciscoWesker/SupportFlow",
      image: "/projects/supportflow.webp",
      tags: [
        {
          name: "React",
          class: "bg-primary-500 text-white"
        },
        {
          name: "TypeScript",
          class: "bg-secondary-500 text-white"
        },
        {
          name: "TailwindCSS",
          class: "bg-accent-600 text-white"
        },
        {
          name: "Framer Motion",
          class: "bg-pink-500 text-white"
        }
      ]
    }
  ],

  // Habilidades técnicas
  skills: [
    "JavaScript", "TypeScript", "React", "Angular", "Node.js", "Express",
    "Python", "PostgreSQL", "PostGIS", "MongoDB", "Socket.io", "Firebase",
    "TailwindCSS", "Framer Motion", "Git", "GitHub", "Render"
  ],

  // Metadatos SEO
  seo: {
    title: "Portafolio de Francisco Castaño - Desarrollador Full Stack | Cali, Colombia",
    description: "Desarrollador Full Stack con +8 años de experiencia. Especializado en Angular, React, Node.js, MongoDB y Python. Creador de TaskForge y SupportFlow. Cali, Colombia.",
    keywords: "desarrollador full stack, cali colombia, angular, react, nodejs, mongodb, python, francisco castaño, desarrollador web, programador"
  }
}

// Configuración de temas y colores personalizados
export const THEME_CONFIG = {
  primaryColor: "#3B82F6", // Azul
  secondaryColor: "#10B981", // Verde
  accentColor: "#F59E0B", // Amarillo
  textColor: {
    light: "#1F2937",
    dark: "#F9FAFB"
  }
}
