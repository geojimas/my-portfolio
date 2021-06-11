import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Dimitris Georgiadis', // e.g: 'Name | Developer'
  lang: 'gr, en', // e.g: en, es, fr, jp
  description: "Welcome to my Site don't forget to check out my resume and my Github", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Dimitris Georgiadis,',
  subtitle: 'I am Junior Full Stack Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "Hi i'm a Jim, junior Full Stack Web Developer, i have bachelor degree in computer science with Grading 8.2",
  paragraphTwo:
    'I like making websites and web applications , i call myself full stuck developer because i like both front-end and back-end things. I mainly work with MEVN Stack (MongoDB / MySQL, Express.js, VueJS, Node.js) and PHP Laravel / Lumen with MySQL and Vue.js. So if you want check my projects in github.',
  paragraphThree: "Also don't forget to check out my resume.",
  resume:
    'https://www.canva.com/design/DAET0C9JptA/9DUG4oEDZPfytTrr32atww/edit?category=tACZCki4tbY&tailoringShowExploreOnboarding=', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'rmv.png',
    title: 'React.js Movies',
    info: "It's a web app that provides information's about movies.",
    info2: 'Made with React.js, custom SCSS and free API from .',
    url: 'https://mv-info.netlify.app',
    repo: 'https://github.com/Jimgeo98/React-Movie-info', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'jokes.png',
    title: 'React.js Jokes',
    info: "It's a web app that provides Random Jokes.",
    info2: 'Made with React.js, SCSS, Materialize.css and free API.',
    url: 'https://jokeed.netlify.app',
    repo: 'https://github.com/Jimgeo98/React-axios-jokes', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'weather.png',
    title: 'Vue.js Weather',
    info: "It's a web app that provides information about Weather for every place on the planet.",
    info2: 'Made with Vue.js, Typescript, custom SASS and free API from OpenWeatherMap',
    url: 'https://opweather.ml',
    repo: 'https://github.com/Jimgeo98/vue-weather', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'vmov.png',
    title: 'Vue.js Movie List',
    info: "It's a web app that provides information about popular Movies fetched from my PHP Lumen API.",
    info2: 'Made with Vue.js in front-end and PHP Lumen in back-end',
    url: 'https://vmov.netlify.app',
    repo: 'https://github.com/Jimgeo98/vue-movies-api', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'bmi.png',
    title: 'Vue.js BMI Calculator',
    info: "It's a web app that can Calculate your BMI.",
    info2: 'Made with Vue.js and Materialize.css',
    url: 'https://vbmi.netlify.app',
    repo: 'https://github.com/Jimgeo98/vue-bmi-calc', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'dec.png',
    title: 'Deciconv',
    info: "It's a web app that can convert a Decimal Number to binary, octahedral, hexadecimal form.",
    info2: 'Made with HTML, SASS, JavaScript.',
    url: 'https://deciconv.netlify.app',
    repo: 'https://github.com/Jimgeo98/Deciconv', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'qts.png',
    title: 'Quick API Test',
    info: "It's a web app that can provide quick API calls for any URL endpoint to test the cors, response, headers etc.",
    info2: 'Made with HTML, CSS, JavaScript.',
    url: 'https://quickapitest.netlify.app',
    repo: 'https://github.com/Jimgeo98/quick-api-test', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'nodecrd.png',
    title: 'Node.js CRUD',
    info: "It's a web app that can create, read, update, delete data in MySQL Database.",
    info2: 'Made with HTML, CSS, Bootstrap, EJS, Node.js, Express.js, MySQL.',
    url: 'https://crud77.herokuapp.com',
    repo: 'https://github.com/Jimgeo98/Node-CRUD', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ndapi.png',
    title: 'Node.js REST API',
    info: "It's a REST API with CRUD (Create, Read, Update, Delete) operations.",
    info2: 'Made with Node.js Express.js, MongoDB',
    url: 'https://rest48.herokuapp.com',
    repo: 'https://github.com/Jimgeo98/Node-REST-API', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mevn.png',
    title: 'MEVN stack',
    info: "It's a web application that can create, read, update, delete data with HTTP Requests (GET, POST, PATCH, DELETE)",
    info2: 'Made with MongoDB, Express.js, Vue.js, Node.js',
    url: 'https://vcruda.netlify.app',
    repo: 'https://github.com/Jimgeo98/MEVN-JavaScript', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'jwt.png',
    title: 'Node.js JWT Auth',
    info: "It's a Web service that can provide User Authentication with Json Web Token (JWT).",
    info2: 'Made with HTML, CSS, Bootstrap, EJS, Node.js, Express.js, JWT, MySQL.',
    url: 'https://github.com/Jimgeo98/node-jwt-api',
    repo: 'https://github.com/Jimgeo98/node-jwt-api', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'lmn.png',
    title: 'Lumen Rest API',
    info: "It's a REST API with CRUD (Create, Read, Update, Delete) endpoints.",
    info2: 'Made with PHP Lumen Framework and MySQL Database.',
    url: 'https://lumrest.herokuapp.com/api/movies',
    repo: 'https://github.com/Jimgeo98/Lumen-REST-API', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'lvlcrud.png',
    title: 'Laravel CRUD',
    info: "It's a web app that can create, read, update, delete data in MySQL Database.",
    info2: 'Made with PHP Laravel Framework, Bootstrap.css, Materialize.css and MySQL Database.',
    url: 'http://lvlcrud.herokuapp.com',
    repo: 'https://github.com/Jimgeo98/Laravel-CRUD', // if no repo, the button will not show up
  },
];

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
      url: 'https://github.com/Jimgeo98',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
