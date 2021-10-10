import { nanoid } from 'nanoid'

// HEAD DATA
export const headData = {
  title: 'Dimitris Georgiadis', // e.g: 'Name | Developer'
  lang: 'gr, en', // e.g: en, es, fr, jp
  description: "Welcome to my Site don't forget to check out my resume and my GitHub", // e.g: Welcome to my website
}

// HERO DATA
export const heroData = {
  title: '',
  name: 'Dimitris Georgiadis,',
  subtitle: 'I am Junior Full Stack Developer',
  cta: '',
}

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "Hi i'm a Jim, Junior Full Stack Developer, i have bachelor degree in computer science.",
  paragraphTwo:
    'I like making websites and web applications , i call myself full stack developer because i like both front-end and back-end things. I mainly work with MEVN Stack (MongoDB / MySQL, ExpressJS, VueJS, NodeJS) & TypeGraphQL with Apollo client & TypeScript. However i use and other languages like PHP and Python. If you want check out my projects on GitHub. Iam a simple person, I like to code and learn new things every day, my goal is to become a good developer with active role.',
  paragraphThree: "Also don't forget to check out my resume.",
  resume:
    'https://www.canva.com/design/DAEsOtedHcw/9nOcuUvuW3ZdK1oig9q1Xg/view?utm_content=DAEsOtedHcw&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton', // if no resume, the button will not show up
}

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'nxmov.png',
    title: 'Movies',
    info: "It's a web app that provides information about popular Movies fetched from TMDB.",
    info2: 'Made with NuxtJS / VueJS and custom SCSS.',
    url: 'https://mos.vercel.app',
    repo: 'https://github.com/geojimas/nuxt-movies', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'typer.png',
    title: 'Type game',
    info: "It's a Typing game with countdown timer to test your typing skills.",
    info2: 'Made with VueJS, SCSS, Materialize.css, animate.css and free API.',
    url: 'https://typv.netlify.app',
    repo: 'https://github.com/geojimas/vue-typing-game', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'weather.png',
    title: 'Weather',
    info: "It's a web app that provides information about Weather for every place on the planet.",
    info2: 'Made with VueJS, TypeScript, custom SASS and free API from OpenWeatherMap.',
    url: 'https://opweather.netlify.app',
    repo: 'https://github.com/geojimas/vue-weather', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'bmi.png',
    title: 'BMI Calculator',
    info: "It's a web app that can Calculate your BMI.",
    info2: 'Made with VueJS and Materialize.css and animate.css',
    url: 'https://vbmi.netlify.app',
    repo: 'https://github.com/geojimas/vue-bmi-calc', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'dec.png',
    title: 'Converter',
    info: "It's a web app that can convert a Decimal Number to binary, octahedral, hexadecimal form.",
    info2: 'Made with HTML, SASS, JavaScript.',
    url: 'https://deciconv.netlify.app',
    repo: 'https://github.com/geojimas/Deciconv', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ts-rest.png',
    title: 'TypeScript REST API',
    info: "It's a REST API with CRUD (Create, Read, Update, Delete) operations.",
    info2:
      'Made with TypeScript / NodeJS ExpressJS, MongoDB, with JWT Authentication and Protected Routes.',
    url: 'https://rest86.herokuapp.com',
    repo: 'https://github.com/geojimas/TypeScript-REST-API', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'auth.png',
    title: 'JWT Authentication',
    info: "It's a custom JWT Authentication that Users can Register and Login, with public and protected Routes, made with NodeJS and TypeScript in backend and VueJS and JavaScript in frontend.",
    info2: 'Made with MongoDB, ExpressJS, VueJS, NodeJS',
    url: 'https://github.com/geojimas/jwt-auth-vue-typescript',
    repo: 'https://github.com/geojimas/jwt-auth-vue-typescript', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mevn.png',
    title: 'MEVN CRUD operations',
    info: "It's a web application that can create, read, update, delete data with HTTP Requests (GET, POST, PATCH, DELETE)",
    info2: 'Made with MongoDB, ExpressJS, VueJS, NodeJS',
    url: 'https://vcruda.netlify.app',
    repo: 'https://github.com/geojimas/MEVN-TypeScript', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'lmn.png',
    title: 'Lumen Rest API',
    info: "It's a REST API with CRUD (Create, Read, Update, Delete) endpoints.",
    info2: 'Made with PHP Lumen Framework and MySQL Database.',
    url: 'https://lumrest.herokuapp.com/api/movies',
    repo: 'https://github.com/geojimas/Lumen-REST-API', // if no repo, the button will not show up
  },
]

// // CONTACT DATA
// export const contactData = {
//   cta: '',
//   btn: '',
//   email: '',
// };

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/dimitris-georgiadis-47b8b21aa',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/geojimas',
    },
  ],
}

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
}
