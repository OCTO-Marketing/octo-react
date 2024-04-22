// Importing images for research cards
import acm from '../assets/research/acm.png'
import cornell from '../assets/research/cornell.png'
import google from '../assets/research/gg.png'
import ieee from '../assets/research/ieee.png'
import illinois from '../assets/research/illinois.png'
import kaggle from '../assets/research/kaggle.png'
import kalpesh from '../assets/research/kalp.png'
import uxr from '../assets/research/uxr.png'

// Interface for a research card
export interface PResearchCard {
    name: string
    img_path: string
    links?: { position: string; link: string }[] // Optional array of links
    descriptions: string
}
// Research card data
const Big_Tech: PResearchCard = {
    name: 'Lessons from Big Tech',
    img_path: google,
    links: [
        {
            position: 'Link',
            link: 'https://research.google/pubs/',
        },
    ],
    descriptions:
        'A database of publications that allows users to share ideas and work collaboratively to advance the field of computer science.',
}

const Startup: PResearchCard = {
    name: 'Startup Corner',
    img_path: uxr,
    links: [
        {
            position: 'Link',
            link: 'http://guidetouxr.com/',
        },
    ],
    descriptions:
        "A curated collection of 250+ resources & tools dedicated to user research, that will help you incorporate it into your design practice.",
}

const Medium: PResearchCard = {
    name: 'Medium and Linkedin Blogs',
    img_path: uxr,
    links: [
        {
            position: 'Link',
            link: 'http://guidetouxr.com/',
        },
    ],
    descriptions:
        "Medium and linkedin contain various existing resources about industry engineering practices."
}

const Github_Links: PResearchCard = {
    name: 'Links to Other Company Blogs',
    img_path: uxr,
    links: [
        {
            position: 'Link',
            link: 'https://github.com/kilimchoi/engineering-blogs',
        },
    ],
    descriptions:
        "This github repo contains an exhaustive list of engineering and system design blogs from various companies."
}

const Blind: PResearchCard = {
    name: 'Blind',
    img_path: uxr,
    links: [
        {
            position: 'Link',
            link: 'https://www.teamblind.com',
        },
    ],
    descriptions:
        "An online social forum for tech professionals to discuss all things career-related."
}

const Reddit: PResearchCard = {
    name: 'Reddit Communities',
    img_path: uxr,
    links: [
        {
            position: 'Link',
            link: 'https://www.reddit.com/r/cscareerquestions/',
        },
        {
            position: 'Link',
            link: 'https://www.reddit.com/r/ProductManagement/'
            ,
        },
    ],
    descriptions:
        "Reddit communities that offer resources for Computer Science / Product Management professionals."
}

// Array containing all research cards
const CORPORATE_ENG: PResearchCard[] = [
    Big_Tech,
    Startup
]

const CORPORATE_OTHER: PResearchCard[] = [
    Medium,
    Github_Links,
    Blind,
    Reddit
]
// Exporting the array of research cards
export {CORPORATE_ENG, CORPORATE_OTHER};
