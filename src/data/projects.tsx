export interface Project {
  title: string;
  description: string;
  images: string[];
  tech: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: "DCT Technology Website",
    description:
      "A modern, fully responsive website built with React.js (Vite), featuring styled components, React Query, and React Hook Form for efficient state and form management. The site provides an engaging user experience with dynamic routing, lazy loading, and SEO optimization using React Helmet. It showcases DCT Technology’s IT services, courses, and expertise while ensuring smooth navigation and performance.",
    images: ["/project-1-1.png", "/project-1-2.png", "/project-1-3.png"],
    tech: [
      "React",
      "Node.js",
      "Styled Components",
      "React Query",
      "Express",
      "Mongo DB",
      "Mongoose",
      "Authentication",
      "Nodemailer",
      "MVC",
    ],
    demo: "https://dctinfotech.com",
  },
  {
    title: "Blogify Flask",
    description:
      "A feature-rich and secure blogging web application built using Flask and Jinja, designed for users to create, edit, and manage blog posts with an interactive and dynamic interface. The platform implements secure authentication, multi-step form validation, and a seamless user experience with responsive design using Bootstrap. It also integrates SQLite with SQLAlchemy ORM for efficient database management, and CKEditor for rich text formatting, ensuring an engaging blogging experience.",
    images: [
      "/project-6-1.png",
      "/project-6-2.png",
      "/project-6-3.png",
      "/project-6-4.png",
    ],
    tech: [
      "Flask",
      "Jinja",
      "Python",
      "SQLite",
      "SQLAlchemy",
      "Bootstrap",
      "WTForms",
      "CKEditor",
      "Werkzeug.security",
      "Flask-Login",
      "Flask-WTF",
    ],
    github: "https://github.com/dev-himanshu-karnwal/Blogify-flask",
  },
  {
    title: "Employee Management CRM",
    description:
      "A robust and scalable web application built with Angular for the frontend and Node.js (Express.js) with MongoDB (Mongoose) for the backend, designed to efficiently manage employees, projects, and tasks. The system ensures role-based authentication, secure data handling, and an intuitive UI for seamless operations. It incorporates RxJS for reactive programming, NG Icons for UI enhancements, and modular component-based architecture for maintainability. Security is reinforced with JWT authentication, Helmet, CORS, Express Rate Limiting, Mongo Sanitize, and HPP. The application is deployed on DigitalOcean, ensuring reliability and scalability.",
    images: ["/project-3-1.png", "/project-3-2.png"],
    tech: [
      "Angular",
      "Modular CSS",
      "RxJS",
      "NG Icons",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Multer",
      "Cloudinary",
      "Nodemailer",
      "Helmet",
      "CORS",
      "Rate Limiting",
      "Mongo Sanitize",
      "HPP",
      "DigitalOcean",
    ],
  },
  {
    title: "DCT Management Portal",
    description:
      "A feature-rich, scalable MERN-based admin panel designed for project management, user roles, authentication, and doubt resolution. Built with React.js, Vite, React Query, and a modular architecture, the frontend ensures seamless interaction, while the Node.js (Express.js) backend with MongoDB (Mongoose) provides robust data handling. Security is reinforced with JWT authentication, Helmet, CORS, and Express Rate Limiting. Hosted on DigitalOcean, the panel offers an intuitive interface for admin, clients, and users, enabling efficient management of projects, users, and permissions.",
    images: ["/project-2-1.png", "/project-2-2.png", "/project-2-3.png"],
    tech: [
      "React.js",
      "Vite",
      "React Query",
      "Styled Components",
      "React Hook Form",
      "React Helmet",
      "Recharts",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Multer",
      "Cloudinary",
      "Nodemailer",
      "Helmet",
      "CORS",
      "Rate Limiting",
      "DigitalOcean",
    ],
    demo: "https://dctinfotech.com/dashboard",
  },
  {
    title: "Portfolio Website",
    description:
      "A sleek, high-performance portfolio website built with React.js (Vite) and Tailwind CSS, designed to showcase projects, skills, and contact information with a smooth user experience. The application leverages React Router for navigation, lazy loading with React Suspense for optimized performance, and Framer Motion for animations. Form validation is implemented using React Hook Form and Zod, while EmailJS enables seamless contact form submissions. The project follows a modular and scalable architecture, ensuring maintainability and responsiveness across all devices.",
    images: ["/project-4-1.png", "/project-4-2.png", "/project-4-3.png"],
    tech: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "React Router",
      "React Hook Form",
      "Zod",
      "EmailJS",
      "Lucide React",
      "Swiper",
      "TypeScript",
      "ESLint",
      "PostCSS",
    ],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Top Movies",
    description:
      "A full-stack movie catalog web application built with Flask, featuring real-time movie data fetching via the TMDB API, CRUD operations for managing movie records in an SQLite database, and an interactive rating and review system for user engagement. The application follows secure form handling with Flask-WTF and WTForms, ensuring seamless user interactions and data accuracy. The UI is responsive and visually appealing, designed with Bootstrap and Jinja templating for a dynamic front-end experience.",
    images: ["/project-7-1.png", "/project-7-2.png"],
    tech: [
      "Python",
      "Flask",
      "SQLAlchemy",
      "Jinja",
      "Bootstrap",
      "Flask-WTF",
      "WTForms",
      "SQLite",
      "TMDB API",
    ],
    github: "https://github.com/dev-himanshu-karnwal/top-movies",
  },
  {
    title: "Fast Pizza Delivery App",
    description:
      "A fast and responsive pizza ordering web application built with React.js (Vite) and Redux Toolkit, designed for a seamless food ordering experience. The app features dynamic routing with React Router, global state management with Redux, and a modern UI styled with Tailwind CSS. It follows a scalable and modular architecture, ensuring efficient order management, cart functionality, and a smooth checkout process. The project adheres to best coding practices with ESLint and Prettier, maintaining clean and optimized code.",
    images: [
      "/project-5-1.png",
      "/project-5-2.png",
      "/project-5-3.png",
      "/project-5-4.png",
      "/project-5-5.png",
    ],
    tech: [
      "React.js",
      "Vite",
      "Redux Toolkit",
      "React Router",
      "loaders",
      "actions",
      "Redux Thunk",
      "Tailwind CSS",
      "ESLint",
      "Prettier",
      "PostCSS",
      "Autoprefixer",
    ],
  },
  {
    title: "Cooking Recipe App",
    description:
      "A full-stack web application designed for food enthusiasts to explore, share, and manage recipes. Built with Node.js and Express.js, it follows the MVC architecture, leveraging MongoDB for data storage and EJS for dynamic templating. The app provides a seamless user experience with Bootstrap-powered responsive design and real-time database interactions for an engaging browsing experience.",
    images: [
      "/project-8-1.png",
      "/project-8-2.png",
      "/project-8-3.png",
      "/project-8-4.png",
    ],
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose ODM",
      "Bootstrap",
      "EJS",
      "Express-layout",
      "Multer",
    ],
  },
];
