import github from '../assets/careers/github.png';
import levels from '../assets/careers/levels.png';
import y from '../assets/careers/y_combinator.png';
import whiteboard from '../assets/careers/whiteboard.png';

export interface TechJobSearchPlatformCard {
    tool_name?: string
    img_path?: string
    tool_link?: { 
        label: string; 
        link: string
    }
    description?: string
}

const Whiteboards: TechJobSearchPlatformCard = {
    tool_name: 'Hiring Without Whiteboards',
    img_path: whiteboard,
    tool_link: {
        label: 'Link',
        link: 'https://github.com/poteto/hiring-without-whiteboards',
    },
    description:
        "A listing of companies (or teams) that don't do \"whiteboard\" interviews.",
}

const Levels: TechJobSearchPlatformCard = {
    tool_name: 'Levels.fyi',
    img_path: levels,
    tool_link: {
        label: 'Link',
        link: 'https://www.levels.fyi/',
    },
    description:
        "View live salary submissions and verified professionals at top startups.",
}

const Choosemars: TechJobSearchPlatformCard = {
    tool_name: 'Choosemars’ List',
    img_path: github,
    tool_link: {
        label: 'Link',
        link: 'https://docs.google.com/spreadsheets/d/1TrPJt4g2q7NIP0FDMqx-iewHXVQZHWEzXPvt2DJqp2g/edit?usp=sharing',
    },
    description:
        "Comprehensive directory of over 1,800 companies.",
}

const HackerNews: TechJobSearchPlatformCard = {
    tool_name: 'Hacker News Who\'s Hiring',
    img_path: y,
    tool_link: {
        label: 'Link',
        link: 'https://news.ycombinator.com/item?id=22465476',
    },
    description:
        "Updated monthly, search for keywords (e.g. “intern”).",
}

const EasyApplicationProcess: TechJobSearchPlatformCard = {
    tool_name: 'Easy Application Process',
    img_path: github,
    tool_link: {
        label: 'Link',
        link: 'https://github.com/j-delaney/easy-application',
    },
    description:
        "Provides a curated list of companies with streamlined job application processes.",
}

const Zacklight: TechJobSearchPlatformCard = {
    tool_name: 'Zacklight Internships',
    img_path: github,
    tool_link: {
        label: 'Link',
        link: 'https://github.com/Zackhardtoname/internships',
    },
    description:
        "Search for your dream internships!",
}

const TECH_JOB_SERACH_PLATFORM: TechJobSearchPlatformCard[] = [
    Whiteboards,
    Levels,
    Choosemars,
    HackerNews,
    EasyApplicationProcess,
    Zacklight
]

const CAREER_PATH_RESOURCES: TechJobSearchPlatformCard[] = [
    
]


export {TECH_JOB_SERACH_PLATFORM, CAREER_PATH_RESOURCES}