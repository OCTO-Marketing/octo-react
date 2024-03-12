import github from '../assets/careers/github.png';
import levels from '../assets/careers/levels.png';
import y from '../assets/careers/y_combinator.png';
import whiteboard from '../assets/careers/whiteboard.png';
import programmer from '../assets/careers/programmericon.png';

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

const EntryLevelDeveloper: TechJobSearchPlatformCard = {
    tool_name: 'Entry Level: Software Developer',
    img_path: programmer,
    description:
        "Entry-level position focused on developing skills in coding, debugging, and basic project management.",
}

const ROOT_CAREER_PATH_RESOURCES: TechJobSearchPlatformCard[] = [
    EntryLevelDeveloper,
]

const FrontendDeveloper: TechJobSearchPlatformCard = {
    tool_name: 'Frontend Developer',
    img_path: programmer,
    description:
        "Specializes in user interface design and development using HTML, CSS, JavaScript, and various frameworks. Responsible for building the visual elements.",
}

const BackendDeveloper: TechJobSearchPlatformCard = {
    tool_name: 'Backend Developer',
    img_path: programmer,
    description:
        "Focuses on server-side logic, databases, and application integration, ensuring data and services are effectively served to the frontend.",
}

const DevOpsEngineer: TechJobSearchPlatformCard = {
    tool_name: 'DevOps Engineer',
    img_path: programmer,
    description:
        "Works on system automation, deployment pipelines, and cloud infrastructure to streamline the software delivery process.",
}

const SeniorFrontendDeveloper: TechJobSearchPlatformCard = {
    tool_name: 'Senior Frontend Developer',
    img_path: programmer,
    description:
        "Leads frontend teams, architects frontend solutions, and ensures performance and user experience standards.",
}

const SeniorBackendDeveloper: TechJobSearchPlatformCard = {
    tool_name: 'Senior Backend Developer',
    img_path: programmer,
    description:
        "Oversees backend operations, database management, and develops high-level application logic.",
}

const SeniorDevOpsEngineer: TechJobSearchPlatformCard = {
    tool_name: 'Senior DevOps Engineer',
    img_path: programmer,
    description:
        "Leads the design and implementation of automation, continuous integration, and continuous delivery processes.",
}

const FrontendTechLead: TechJobSearchPlatformCard = {
    tool_name: 'Frontend Tech Lead',
    img_path: programmer,
    description:
        "Manages a team of developers, oversees project timelines, and aligns development tasks with business objectives.",
}

const BackendArchitect: TechJobSearchPlatformCard = {
    tool_name: 'Backend Architect',
    img_path: programmer,
    description:
        "Responsible for creating the selection of technologies, frameworks, and patterns to ensure the system is scalable and maintainable.",
}

const CloudArchitect: TechJobSearchPlatformCard = {
    tool_name: 'Cloud Architect',
    img_path: programmer,
    description:
        "Overseeing the company’s cloud computing strategy, including , cloud application design, and cloud management and monitoring.",
}


const CAREER_PATH_RESOURCES: TechJobSearchPlatformCard[] = [
    FrontendDeveloper,
    BackendDeveloper,
    DevOpsEngineer,
    SeniorFrontendDeveloper,
    SeniorBackendDeveloper,
    SeniorDevOpsEngineer,
    FrontendTechLead,
    BackendArchitect,
    CloudArchitect
]


export {TECH_JOB_SERACH_PLATFORM, CAREER_PATH_RESOURCES, ROOT_CAREER_PATH_RESOURCES}