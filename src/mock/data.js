import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
    title: 'Andrés | Full Stack Developer', // e.g: 'Name | Developer'
    lang: 'es', // e.g: en, es, fr, jp
    description: 'Bienvenido a mi portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
    title: 'Hola, soy',
    name: 'Andrés Fabregat',
    subtitle: 'Full Stack Developer',
    cta: 'Conóceme',
};

// ABOUT DATA
export const aboutData = {
    img: 'andres.jpeg',
    paragraphOne: 'Full Stack developer con experiencia en front de React y Angular, en back con Node y Mongo.',
    paragraphTwo: 'Técnico superior informático con más de 5 años de experiencia en industrias de tecnología. Especializado en dar apoyo y asesoría técnica a empresas e usuarios, brindar la máxima calidad de atención, optimizando el rendimiento de los sistemas informáticos.',
    paragraphThree: 'Actualmente, busco continuar desarrollando mis aptitudes profesionales en el campo de la programación.',
    resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [{
        id: nanoid(),
        img: 'shopeame.jpg',
        title: 'Shopeame',
        info: 'Este es el segundo proyecto realizado durante el bootcamp. Proyecto realizado 100% con javascript, html5 y css.',
        info2: 'Es un trabajo muy sencillo con una llamada a una api en local con json-server. Tiene tres apartados muy sencillos. Una home con descripción y texto, una pantalla de productos y otra vista para agregar o editar productos.',
        url: 'https://www.linkedin.com/feed/update/urn:li:activity:6821361634880065536/',
        repo: 'https://github.com/Ntres/Shopeame', // if no repo, the button will not show up
    },
    {
        id: nanoid(),
        img: 'got.jpeg',
        title: 'Juego de Tronos',
        info: 'Proyecto desarrollado durante mi formación en el bootcamp de Full Stack Developer.',
        info2: 'Realizado en Angular con librerías externas y llamada a una API. Multi idioma y con componente de buscar en personajes y casas.',
        url: 'https://ntres-got-project.netlify.app/',
        repo: 'https://github.com/Ntres/got',
    },
];

// CONTACT DATA
export const contactData = {
    cta: 'Si tienes dudas, quieres conocer más o simplemente hablar un rato...',
    btn: 'Escríbeme',
    email: 'fabregat.andres@gmail.com',
};

// FOOTER DATA
export const footerData = {
    networks: [{
            id: nanoid(),
            name: 'linkedin',
            url: 'https://www.linkedin.com/in/andres-fabregat-nogueras/',
        },
        {
            id: nanoid(),
            name: 'github',
            url: 'https://github.com/Ntres',
        },
    ],
};

// Github start/fork buttons
export const githubButtons = {
    isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};