// Importing images for research cards
import acm from '../assets/research/acm.png'
import cornell from '../assets/research/cornell.png'
import google from '../assets/research/gg.png'
import ieee from '../assets/research/ieee.png'
import illinois from '../assets/research/illinois.png'
import kaggle from '../assets/research/kaggle.png'
import kalpesh from '../assets/research/kalp.png'
import david from '../assets/research/re.png'

// Interface for a research card
export interface PResearchCard {
    name: string
    img_path: string
    links?: { position: string; link: string }[] // Optional array of links
    descriptions: string
}
// Research card data
const ACM: PResearchCard = {
    name: 'ACM Digital Library',
    img_path: acm,
    links: [
        {
            position: 'Link',
            link: 'https://dl.acm.org/',
        },
    ],
    descriptions:
        "Academic databases for computer science. The ACM Full-Text Collection currently has 540,000+ articles, while the ACM Guide to Computing Literature holds more than 2.8+ million entries.",
}

const Cornell: PResearchCard = {
    name: 'Cornell Virtual Workshop',
    img_path: cornell,
    links: [
        {
            position: 'Link',
            link: 'https://cvw.cac.cornell.edu/default',
        },
    ],
    descriptions:
        "Learning platform designed to enhance the computational science skills of researchers and accelerate the adoption of new and emerging technologies.",
}

const Google: PResearchCard = {
    name: 'Google Publications',
    img_path: google,
    links: [
        {
            position: 'Google Publications',
            link: 'https://research.google/pubs/',
        },
        {
            position: 'Early Google Prototype',
            link: 'http://infolab.stanford.edu/~backrub/google.html',
        },
        {
            position: 'Google File System',
            link: 'https://research.google/pubs/pub51/',
        },
    ],
    descriptions:
        'A database of publications that allows users to share ideas and work collaboratively to advance the field of computer science.',
}

const IEEE: PResearchCard = {
    name: 'IEEE Xplore Database',
    img_path: ieee,
    links: [
        {
            position: 'Link',
            link: 'https://www.ieee.org/',
        },
    ],
    descriptions:
        "Holds more than 4.7 million research articles from the fields of electrical engineering, computer science, and electronics.",
}

const Illinois: PResearchCard = {
    name: 'Illinois Library: High Impact Journals',
    img_path: illinois,
    links: [
        {
            position: 'Link',
            link: 'https://guides.library.illinois.edu/cs/journals',
        },
    ],
    descriptions:
        'A guide to finding articles and reference materials for students in the several fields of Computer Science.',
}

const Kaggle: PResearchCard = {
    name: 'Kaggle',
    img_path: kaggle,
    links: [
        {
            position: 'Link',
            link: 'https://www.kaggle.com/',
        },
    ],
    descriptions:
        'A web platform that hosts the world’s largest Data Science community. allows users to find datasets they want to use in building AI models and publish datasets.',
}

const Kalpesh: PResearchCard = {
    name: 'Grad School Resources by Kalpesh Krishna',
    img_path: kalpesh,
    links: [
        {
            position: 'Link',
            link: 'http://martiansideofthemoon.github.io/2018/05/29/grad-resources.html',
        },
    ],
    descriptions:
        'Help create the new and improved Annual Budgeting and Spaces Application system for ASUC and gain valuable experience at the intersection of engineering and finance.',
}

const David: PResearchCard = {
    name: 'Reinforcement Learning Lectures by Prof. David Silver',
    img_path: david,
    links: [
        {
            position: 'Link',
            link: 'https://www.youtube.com/watch?v=2pWv7GOvuf0&list=PLqYmG7hTraZDM-OYHWgPebj2MfCFzFObQ&index=1',
        },
    ],
    descriptions:
        "A comprehensive introduction to reinforcement learning, covering fundamental concepts, algorithms, and applications, presented by renowned expert Prof. David Silver.",
}

// Array containing all research cards
const RESEARCH: PResearchCard[] = [
    ACM,
    Cornell,
    Google,
    IEEE,
    Illinois,
    Kaggle,
    Kalpesh,
    David,
]
// Exporting the array of research cards
export default RESEARCH
