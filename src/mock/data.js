import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Dimitris Georgiadis | Junior Full Stack Web Developer', // e.g: 'Name | Developer'
  lang: 'gr, en', // e.g: en, es, fr, jp
  description: "Welcome to my Site don't forget to check out my resume and my Github", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Jim,',
  subtitle: 'Junior Full Stack Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
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
    info2: 'Made with React.js , custom SASS styles and free API.',
    url: 'https://mv-info.netlify.app',
    repo: 'https://github.com/Jimgeo98/React-Movie-info', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'jokes.png',
    title: 'React.js Jokes',
    info: "It's a web app that provides Random Jokes.",
    info2: 'Made with React.js, custom SCSS, Materialize.css and free API.',
    url: 'https://jokeed.netlify.app',
    repo: 'https://github.com/Jimgeo98/React-axios-jokes', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'weather.png',
    title: 'Vue.js Weather',
    info: "It's a web app that provides information about Weather for every place on the planet.",
    info2: 'Made with Vue.js, Typescript, custom SCSS and free API.',
    url: 'https://opweather.ml',
    repo: 'https://github.com/Jimgeo98/vue-weather', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'vapi.png',
    title: 'Vue.js Games',
    info: "It's a web app that provides information about popular games fetched from the Laravel API.",
    info2: 'Made with Vue.js, custom SCSS and my Laravel API endpoint.',
    url: 'https://vgv.netlify.app',
    repo: 'https://github.com/Jimgeo98/vue-games', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'vfire.png',
    title: 'Vue.js Firebase Auth',
    info: "It's a web app that provides Authentication with email and password or google Account with Popup Menu",
    info2: 'Made with Vue.js, custom SCSS, Bulma.css and Google Firebase.',
    url: 'https://vfire.netlify.app',
    repo: 'https://github.com/Jimgeo98/vue-firebase-auth', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'dec.png',
    title: 'Deciconv',
    info: "It's a web app that can convert a Decimal Number to binary, octahedral, hexadecimal form.",
    info2: 'Made with HTML, SCSS, JavaScript',
    url: 'https://deciconv.netlify.app',
    repo: 'https://github.com/Jimgeo98/Deciconv', // if no repo, the button will not show up
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
    img: 'jwt.png',
    title: 'Node.js JWT Auth',
    info: "It's a Web service that can provide User Authentication with JWT Web Token.",
    info2: 'Made with HTML, CSS, Bootstrap, EJS, Node.js, Express.js, JWT, MySQL.',
    url: 'https://github.com/Jimgeo98/node-jwt-api',
    repo: 'https://github.com/Jimgeo98/node-jwt-api', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'lapi.png',
    title: 'Laravel Rest API',
    info: "It's a REST API that can provide Create, Read, Update, Delete Methods on hi endpoint.",
    info2: 'Made with PHP Laravel Framework and MySQL Database.',
    url: 'https://games584.herokuapp.com',
    repo: 'https://github.com/Jimgeo98/Laravel-REST-API', // if no repo, the button will not show up
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
