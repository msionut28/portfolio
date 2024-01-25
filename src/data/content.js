const aboutMe = {
  english: {
    title: "Hi! I'm Stelian-Ionut Molocea",
    position: "Full-Stack Developer",
    typewriter: {
      first:
        "TECH ENTHUSIAST DEDICATED TO TURNING IDEAS INTO DIGITAL INNOVATIONS.",
      second:
        "THRIVING ON CHALLENGES, I SEE EACH PROBLEM AS AN OPPORTUNITY FOR AN IMPACTFUL SOLUTION.",
      third:
        "WHEN I'M NOT IMMERSED IN CODING, YOU'LL FIND ME IMMERSED IN THE RHYTHMIC WORLD OF MUSIC, PASSIONATELY FOLLOWING FOOTBALL MATCHES, AND INDULGING IN MY LOVE FOR CARS.",
    },

    description:
      "Let's connect! I'm the tech enthusiast dedicated to bringing ideas to life in the digital realm. Challenges are opportunities for impactful solutions in my world. Outside coding, I immerse myself in decoding star stories and exploring cosmic mysteries, fueled by an unending passion for astrology. Additionally, my passion extends to the realms of music, cars, and football, where I find boundless inspiration and joy.",
  },
  romanian: {
    title: "Salut! Sunt Stelian-Ionut Molocea",
    position: "Full-Stack Developer",
    typewriter: {
      first:
        "PASIONAT DE TEHNOLOGIE, DEDICAT TRANSFORMĂRII IDEILOR ÎN INOVAȚII DIGITALE.",
      second:
        "PROSPERÂND ÎN FAȚA PROVOCĂRILOR, VĂD FIECARE PROBLEMĂ CA PE O OPORTUNITATE PENTRU O SOLUȚIE CU IMPACT.",
      third:
        "CAND NU PROGRAMEZ, ADOR SĂ ASCULT MUZICĂ ȘI SĂ URMĂRESC CU PASIUNE MECIURILE DE FOTBAL ALE ECHIPELOR PREFERATE",
    },
  },
};

const contactInfo= {
  github: 'https://github.com/msionut28/',
  linkedin: 'https://linkedin.com/'
}

const projects = {
  bs: {
    title: "BATTLESHIP GAME",
    shortDesc:
      "A browser-based game developed during the course of one week, using vanilla JavaScript and CSS, having been coding for only 2 weeks prior.",
    image: "/projects/battleship.png",
    live: "https://msionut28.github.io/battleships_browserGame/",
    git: "https://github.com/msionut28/battleships_browserGame",
  },
  pc: {
    title: "PantryChef - Blog",
    shortDesc:
      "MEVN Full-Stack App that generates custom recipes and fetches an external API for random recipes.",
    image: "/projects/pantrychef.png",
    live: "https://pantrychef-ga.netlify.app/",
    git: "https://github.com/msionut28/pantryChef_frontend",
  },
  sh: {
    title: "SafeHaven - Venue Reviewer & Chat",
    shortDesc:
      "Next.js and Express web app aiming to create an inclusive space for LGBTQ+ community through reviewing venues.",
    image: "/projects/safehaven.png",
    live: "https://safehaven-ga.netlify.app/",
    git: "https://github.com/msionut28/safeHaven",
  },
  sp: {
    title: "SquadSprint - Task Manager",
    shortDesc:
      "SquadSprint is a CRUD Web App using Django and Next.js that is meant to help groups of people in managing tasks together.",
    image: "/projects/squadsprint.png",
    live: "https://squadsprintfe-production.up.railway.app/",
    git: "https://github.com/msionut28/squadsprint_fe",
  },
};

const skills = {
  html: {
    name: "HTML5",
    img: "/skills-vectors/html.svg",
  },
  js: {
    name: "JavaScript",
    img: "/skills-vectors/javascript.svg",
  },
  vuejs: {
    name: "Vue.js",
    img: "/skills-vectors/vuejs.svg",
  },
  reactjs: {
    name: "React.js",
    img: "/skills-vectors/react.svg",
  },
  next: {
    name: "Next.js",
    img: "/skills-vectors/next.svg",
  },
  css: {
    name: "CSS",
    img: "/skills-vectors/css.svg",
  },
  bootstrap: {
    name: "Bootstrap",
    img: "/skills-vectors/bootstrap.svg",
  },
  tailwind: {
    name: "Tailwind",
    img: "/skills-vectors/tailwind.svg",
  },
  node: {
    name: "Node.js",
    img: "/skills-vectors/nodejs.svg",
  },
  express: {
    name: "Express.js",
    img: "/skills-vectors/express.svg",
  },
  python: {
    name: "Python",
    img: "/skills-vectors/python.svg",
  },
  django: {
    name: "Django",
    img: "/skills-vectors/django.svg",
  },
  djangoRest: {
    name: "Django REST",
    img: "/skills-vectors/djangorest.svg",
  },
  mongodb: {
    name: "MongoDB",
    img: "/skills-vectors/mongodb.svg",
  },
  postgresql: {
    name: "PostgreSQL",
    img: "/skills-vectors/postgresql.svg",
  },
  postman: {
    name: "Postman",
    img: "/skills-vectors/postman.svg",
  },
};

const skillsAssessment = {
  top5: {
    react: {
      delay: 0.75,
      name: "React.js",
      percentage: 95,
    },
    express: {
      delay: 1,
      name: "Express.js",
      percentage: 85,
    },
    next: {
      delay: 1.25,
      name: "Next.js",
      percentage: 90,
    },
    css: {
      delay: 1.5,
      name: "CSS",
      percentage: 75,
    },
    mongodb: {
      delay: 1.75,
      name: "MongoDB",
      percentage: 80,
    },
  },
  bottom5: {
    django: {
      delay: 2.25,
      name: "Django",
      percentage: 55,
    },
    python: {
      delay: 2.5,
      name: "Python",
      percentage: 65,
    },
    djangorest: {
      delay: 2.75,
      name: "Django REST",
      percentage: 50,
    },
    vuejs: {
      delay: 3,
      name: "Vue.js",
      percentage: 70,
    },
    postgresql: {
      delay: 3.25,
      name: "PostgreSQL",
      percentage: 65,
    },
  },
};

export { aboutMe, projects, skills, skillsAssessment, contactInfo };
