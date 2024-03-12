import github from '../assets/careers/github.png';
import byte from '../assets/careers/byte.jpeg';
import career_cup from '../assets/careers/careercup.png';
import algorithms from '../assets/careers/massive_algorithms.jpeg';
import geeks from '../assets/careers/geeksforgeeks.jpeg';
import blind from '../assets/careers/teamblind.jpeg';

export interface TechInterviewPrepCard {
    tool_name?: string
    img_path?: string
    tool_link?: { 
        label: string; 
        link: string
    }
    description?: string
}

const ByteByByte: TechInterviewPrepCard = {
    tool_name: 'Byte-by-Byte Explained Questions',
    img_path: byte,
    tool_link: {
        label: 'Link',
        link: 'https://www.byte-by-byte.com/coding-interview-questions/',
    },
    description:
        "Compilation of 50+ practice coding interview questions with explained video solutions.",
}

const CareerCup: TechInterviewPrepCard = {
    tool_name: 'Career Cup',
    img_path: career_cup,
    tool_link: {
        label: 'Link',
        link: 'https://www.careercup.com/page?pid=facebook-interview-questions',
    },
    description:
        "Forum with open Interview Question discussions.",
}

const Gitbook: TechInterviewPrepCard = {
    tool_name: 'Coding Interview Questions Gitbook',
    img_path: github,
    tool_link: {
        label: 'Link',
        link: 'https://lei-d.gitbook.io/leetcode',
    },
    description:
        "A collection of algorithm problems and code bases for study and interview preparation.",
}

const MassiveAlgorithms: TechInterviewPrepCard = {
    tool_name: 'Massive Algorithms Blog',
    img_path: algorithms,
    tool_link: {
        label: 'Link',
        link: 'https://massivealgorithms.blogspot.com/2019/06/archives.html',
    },
    description:
        "Blog all about algorithms and interview style questions!.",
}

const GeeksForGeeks: TechInterviewPrepCard = {
    tool_name: 'Geeks for Geeks',
    img_path: geeks,
    tool_link: {
        label: 'Link',
        link: 'https://www.geeksforgeeks.org/',
    },
    description:
        "Educational website as a source of practice problems of simple how to’s.",
}

const WhatHappens: TechInterviewPrepCard = {
    tool_name: 'What Happens When Github',
    img_path: github,
    tool_link: {
        label: 'Link',
        link: 'https://github.com/alex/what-happens-when',
    },
    description:
        "Detailed explanations of more uncommon topics.",
}

const BlindCurated: TechInterviewPrepCard = {
    tool_name: 'Blind Curated Blind 75',
    img_path: blind,
    tool_link: {
        label: 'Link',
        link: 'https://www.teamblind.com/post/New-Year-Gift---Curated-List-of-Top-75-LeetCode-Questions-to-Save-Your-Time-OaM1orEU',
    },
    description:
        "List of the best LeetCode questions for each category/type of problems.",
}

const GithubCollection: TechInterviewPrepCard = {
    tool_name: 'Github Collection',
    img_path: github,
    tool_link: {
        label: 'Link',
        link: 'https://docs.google.com/document/d/1oPs9cE5JPPF6o8ftUbk7WqGN7iqzeTEUwvRjldX0dco/edit',
    },
    description:
        "Collection of more coding interview repositories.",
}

const TECH_INTERVIEW_PREP_RESOURCES: TechInterviewPrepCard[] = [
    ByteByByte,
    CareerCup,
    Gitbook,
    MassiveAlgorithms,
    GeeksForGeeks,
    WhatHappens,
    BlindCurated,
    GithubCollection
]

export default TECH_INTERVIEW_PREP_RESOURCES