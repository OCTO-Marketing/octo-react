import ydkjs from '../assets/academics/githublogo.jpg'
import fedh2019 from '../assets/academics/fedhlogo.jpg'
import pwa from '../assets/academics/pwalogo.jpg'
import egghead from '../assets/academics/eggheadlogo.png'
import react from '../assets/academics/reactlogo.jpg'
import javascript from '../assets/academics/jslogo.jpg'

export interface EduResCard {
    resource_name: string
    img_path: string
    descriptions?: string
    links: string[]
}

const YDKJS: EduResCard = {
    resource_name: 'You Don\'t Know JavaScript',
    img_path: ydkjs,
    descriptions:
        'You Don\'t Know JavaScript (YDKJS) is a deep dive into JavaScript by Kyle Simpson. The book is available to read on Github.',
    links:
        ['https://github.com/getify/You-Dont-Know-JS?tab=readme-ov-file'],
}

const FEDH2019: EduResCard = {
    resource_name: 'Front-end Developer Handbook 2019',
    img_path: fedh2019,
    descriptions:
        'A comprehensive guide to frontend development. Includes resources on how to learn HTML, CSS, JavaScript, and React, as well as higher-level resources for interviews, jobs, development practices, and how the Internet works.',
    links:
        ['https://frontendmasters.com/guides/front-end-handbook/2019/?']
}

const PWA: EduResCard = {
    resource_name: 'Progressive Web Apps',
    img_path: pwa,
    descriptions:
        'Learn about Progressive Web Apps (PWA) with resources from web.dev, Microsoft, and MDN Web Docs.',
    links:
       ['https://web.dev/learn/pwa', 'https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/', 'https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Tutorials']
}

const Egghead: EduResCard = {
    resource_name: 'Egghead.io',
    img_path: egghead,
    descriptions:
        'Has thousands of concise and practical video lessons for modern web development. Includes lessons on React, Next.js, TypeScript, Angular, GraphQL, and AWS.',
    links:
        ['https://egghead.io/']
}

const ReactCourses: EduResCard = {
    resource_name: 'React Courses',
    img_path: react,
    descriptions:
        'Free and paid React courses from the legacy React.js website. Although not updated anymore, contains many great courses for getting started in React.',
    links:
        ['https://legacy.reactjs.org/community/courses.html']
}

const ExploringJS: EduResCard = {
    resource_name: 'Exploring JS',
    img_path: javascript,
    descriptions:
        'A site with collection of free books to learn JavaScript and TypeScript. Their author also runs a blog (now discontinued) called 2ality that reviews JavaScript features.',
    links:
        ['https://exploringjs.com/']
}

const EduRes: EduResCard[] = [
    YDKJS,
    FEDH2019,
    PWA,
    Egghead,
    ReactCourses,
    ExploringJS
]

export default EduRes
