/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Niharika",
  logo_name: "Niharika()",
  nickname: "Niharika / Niha",
  full_name: "Niharika kakumanu",
  subTitle:
    "Full Stack Developer, Machine Learning Enthusiast. Always learning.",
  resumeLink:
    "https://docs.google.com/document/d/14f2qEaIbtuUedEo25SZ2hk2G1DYE1uzmaHL7nL8MtrE/edit?usp=sharing",
  mail: "k.niharika2206@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/Niharika-kakumanu-22",
  linkedin: "https://www.linkedin.com/in/niharika-kakumanu-2544b7249/",
  gmail: "k.niharika2206@gmail.com",
  gitlab: " ",
  facebook: " ",
  twitter: "",
  instagram: "https://www.instagram.com/niharika_kakumanu/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Developing web applications using Reactjs.",
        "⚡ Creating application backend in Nodejs and firebase.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },

        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "React Native",
          fontAwesomeClassname: "tabler:brand-react-native",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            color: "#FFFFFF",
            backgroundColor: "#1D1D1D",
            borderRadius: "50%",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCB2E",
          },
        },
        {
          skillName: "redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#764ABC",
          },
        },
        {
          skillName: "bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#860AFB",
          },
        },
        {
          skillName: "stripe",
          fontAwesomeClassname: "simple-icons:stripe",
          style: {
            color: "#6772E5",
          },
        },
        {
          skillName: "tailwindcss",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#38BDF8",
          },
        },
        {
          skillName: "github",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#010101",
          },
        },

        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Experience of working with Machine learning projects",
        "⚡ Experience with 3+ Projects",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#6E6E6E",
          },
        },
      ],
    },
    {
      title: "Cloud Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Learning on cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Certifications by Coursera",
      ],
      softwareSkills: [
        
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    
    {
      title: "Mahindra University",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "mec.png",
      alt_name: "Mahindra University",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, DBMS, Machine learning etc.",
        "⚡ I have also completed various online courses for ML/DL, Web Development etc.",
        "⚡ I have implemented several projects based on what I've learnt under my Computer Engineering course. ",
      ],
      website_link: "https://www.mahindrauniversity.edu.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "UI/UX",
      subtitle: "Greate Learning",
      logo_path: "GL.jpg",
      certificate_link: " ",
      alt_name: "Greate Learning",
      color_code: "#ffc475",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've mostly done projects on my own and I am actively looking for internships. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        
      ],
    },
    {
      title: "Internships",
      experiences: [
        
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "My project.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Medium.",
    link: "https://medium.com/@k.niharika2206",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      name: "Disneyplus-clone",
      url: "https://github.com/Niharika-kakumanu-22/Disneyplus-clone",
      description: "Here's the DEMO Disney+ Clone App",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      name: "Amazon-clone",
      url: "https://github.com/Niharika-kakumanu-22/Amazon-clone",
      description: "A complete E-commerce app like Amazon.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      name: "Portfolio",
      url: "https://github.com/Niharika-kakumanu-22/Portfolio",
      description: "(This) A clean and full customizable portfolio template.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      name: "Multiple Disease Prediction System using Machine Learning",
      url: "https://github.com/Niharika-kakumanu-22/multiple-disease ",
      description:
        "A menu-based multiple chronic disease detection system that will detect if a person is suffering from a severe disease by taking essential input values.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      name: "Prediction Of Expenditure Of a Student Studying In Mahindra University",
      url: "https://github.com/Niharika-kakumanu-22/expenditure-prediction",
      description: "The project aimed at creating an application that made it easier to handle personal finances by automating the typical steps people take when making a budget.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      name: "Travigo-travel template",
      url: "https://github.com/Niharika-kakumanu-22/Travel-niharika",
      description:
        "This project is based on how an effective demo travel website will make us feel.This website contains highlights of some important places along and allows people to book their dream destination within their budgets.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      name: "Modern payment template",
      url: "https://github.com/Niharika-kakumanu-22/modern-payment",
      description:
        "Modern payment systems use cash substitutes as compared to traditional payment systems. It allows consumers and organizations to transfer funds usually held in an account to one another.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
