export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];


export const myProjects = [
  {
    title: 'OpenAI Article Summerizer tool',
    desc: 'Summarize any kind of article with just one click using the powerful OpenAI model a modern and user-friendly interface, offering an intuitive experience for users.',
    subdesc:
      'Provided Authentication as security purpose,users can input the URL of a lengthy article, and the web app utilizes AI to provide a concise summary of the article content ,the app includes a history feature, allowing users to save summaries locally, providing a convenient way to revisit and manage their reading history.Enables users to easily share or store the summarized content by copying it to their clipboard,utilizes the advanced capabilities of Redux Toolkit (RTK) Query for making API requests.',
    href: 'https://openaiarticlesummarizertool.netlify.app/',
    texture: '/textures/project/Recording 2024-09-23 111402.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Redux Toolkit',
        path: '/assets/redux.png',
      },
      {
        id: 5,
        name: 'Rapid Api',
        path: '/assets/light.png',
      },
    ],
  },
  {
    title: 'Resume Builder',
    desc: 'Designed and developed a user-centric, responsive web application (HTML, CSS, JavaScript) for resume creation.Features include live preview, customizable templates, and data persistence, empowering users to createprofessioal resumes that stand out. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.',
    subdesc:
      'The platform offers an intuitive UI, live preview, and customization options, ensuring a seamless resume-building experience for diverse technical backgrounds.',
    href: 'https://createmycv.netlify.app/',
    texture: '/textures/project/Recording 2024-09-23 115854.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Vanilla JavaScript',
        path: '/assets/javascript.avif',
      },
      {
        id: 2,
        name: 'Html',
        path: 'assets/html-5.png',
      },
      {
        id: 3,
        name: 'CSS',
        path: '/assets/css-3.png',
      },
      
    ],
  },
  
  
  
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Collab Vision Infosolution',
    pos: 'Software Trainee',
    duration: 'Jan2024 - Present',
    title: "I am currently working as a Software Trainee at The Collab Vision Infosolutions, where I am developing an e-commerce web application using the MERN stack. My role involves building scalable, user-friendly features and integrating essential functionalities. This hands-on experience has deepened my expertise in full-stack development.",
    icon: '/assets/CollabVision.webp',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Winsple',
    pos: 'Web Developer',
    duration: 'Nov2022 - Jan2023',
    title: "I worked as a Web Developer at Winsple, where I contributed to designing and developing responsive web applications. My focus was on front-end development, ensuring seamless user experiences across devices. This role enhanced my skills in HTML, CSS, JavaScript, and modern web frameworks.",
    icon: '/assets/download.jpeg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Geeks for Geeks',
    pos: 'Technical content creator',
    duration: 'Dec2022 - Mar2023',
    title: "Contributed to a reputable online platform frequented by developers and programmers Authored 42+ technical articles on networking,cybersecurity, mathematics, and microprocessors.Demonstrated ability to improve and refine technical content for clarity and accuracy.",
    icon: '/assets/gfg.png',
    animation: 'salute',
  },
];
