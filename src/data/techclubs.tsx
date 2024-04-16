import bt from '../assets/teams/bt.png'
import bm from '../assets/teams/bm.jpg'
import absa from '../assets/teams/ABSA.png'
import marketing from '../assets/teams/Marketing.png'
import internal from '../assets/teams/Internal.png'
import ds from '../assets/teams/Data Science.png'
import website from '../assets/teams/Website.png'
import sp from '../assets/teams/Special Project.png'

export interface TechClubCard {
    club_name: string
    tags?: string[]
    img_path: string
    link?: string
    descriptions?: string
}

const ThreeDModelingAnimation: TechClubCard = {
    club_name: '3D Modeling & Animation @ Berkeley',
    tags: ['animation', 'decal'],
    img_path: bt,
    link: 'http://www.ucbugg.com/static/index.html#syllabusbasic',
    descriptions:
        "Contribute to Berkeley's beloved course discovery, grade distribution aggregating, and scheduling powerhouse platform.",
}

const AerospaceSAE: TechClubCard = {
    club_name: 'AerospaceSAE',
    tags: ['industrial design'],
    img_path: bm,
    link: 'https://asae.studentorg.berkeley.edu/',
    descriptions:
        "Develop Berkeley's student-created mobile app and collaborate with campus community to implement cutting-edge features.",
}

const AIEntrepreneurs: TechClubCard = {
    club_name: 'AI Entrepreneurs',
    tags: ['programming', 'data science', 'computer science', 'artificial intelligence'],
    img_path: absa,
    link: 'https://aientrepreneurs.org/',
    descriptions:
        'Help create the new and improved Annual Budgeting and Spaces Application system for ASUC and gain valuable experience at the intersection of engineering and finance.',
}

const ANova: TechClubCard = {
    club_name: 'ANova',
    tags: ['education', 'programming', 'computer science'],
    img_path: marketing,
    link: 'https://www.berkeleyanova.org/',
    descriptions:
        "Join OCTO's in house marketing team and be the voice of tech within the ASUC and throughout the campus community.",
}

const BigData: TechClubCard = {
    club_name: 'Big Data @ Berkeley',
    tags: ['education', 'programming', 'computer science', 'data science'],
    img_path: internal,
    link: 'https://bd.studentorg.berkeley.edu/',
    descriptions:
        'Spearhead member development activities and cultivate relationships with tech student organizations, ASUC officials, and campus administrative leadership.',
}

const Blockchain: TechClubCard = {
    club_name: 'Blockchain @ Berkeley',
    tags: ['blockchain design', 'human-centered design', 'product design'],
    img_path: ds,
    link: 'https://blockchain.berkeley.edu/',
    descriptions:
        'Identify interesting trends in campus data and communicate results to key strategic stakeholders through dynamic dashboards and interactive reports.',
}

const Blueprint: TechClubCard = {
    club_name: 'Blueprint',
    tags: ['human-centered design', 'programming'],
    img_path: website,
    link: 'https://calblueprint.org/',
    descriptions:
        'Assist the lead webmaster with site maintenance and design creation for web developpment needs within OCTO and throughout the ASUC.',
}

const CalHacks: TechClubCard = {
    club_name: 'CalHacks',
    tags: ['programming', 'computer science'],
    img_path: sp,
    link: 'https://hackberkeley.org/',
    descriptions:
        "Don't see a project here that fits your interests? Bring us your unique ideas to improve the campus technology experience.",
}

const CodeforGood: TechClubCard = {
    club_name: 'Code for Good',
    tags: ['programming', 'computer science', 'human-centered design', 'social good'],
    img_path: sp,
    link: 'https://codeforgoodberkeley.github.io/',
    descriptions:
        "Don't see a project here that fits your interests? Bring us your unique ideas to improve the campus technology experience.",
}

const Codebase: TechClubCard = {
    club_name: 'Codebase',
    tags: ['programming', 'computer science'],
    img_path: sp,
    link: 'https://codebase.studentorg.berkeley.edu/',
    descriptions:
        "Don't see a project here that fits your interests? Bring us your unique ideas to improve the campus technology experience.",
}

const Codeology: TechClubCard = {
    club_name: 'Codeology',
    tags: ['programming', 'computer science'],
    img_path: sp,
    link: 'https://codeology.studentorg.berkeley.edu/',
    descriptions:
        "Don't see a project here that fits your interests? Bring us your unique ideas to improve the campus technology experience.",
}

const ComputerScienceMentors: TechClubCard = {
    club_name: 'Computer Science Mentors (CSM)',
    tags: ['education', 'programming', 'computer science'],
    img_path: sp,
    link: 'https://csmentors.studentorg.berkeley.edu/#/',
    descriptions:
        "Don't see a project here that fits your interests? Bring us your unique ideas to improve the campus technology experience.",
}

const DataScienceSociety: TechClubCard = {
    club_name: 'Data Science Society',
    tags: ['computer science', 'data science', 'artificial intelligence', 'programming', 'education'],
    img_path: sp,
    link: 'https://dssberkeley.com/',
    descriptions:
        "Don't see a project here that fits your interests? Bring us your unique ideas to improve the campus technology experience.",
}

const Datagood: TechClubCard = {
    club_name: 'Datagood',
    tags: ['computer science', 'data science', 'social good', 'programming', 'human-centered design'],
    img_path: sp,
    link: 'https://datagood.studentorg.berkeley.edu/',
    descriptions:
        "Don't see a project here that fits your interests? Bring us your unique ideas to improve the campus technology experience.",
}

const DiversaTech: TechClubCard = {
    club_name: 'DiversaTech',
    tags: ['web design', 'programming', 'product design', 'human-centered design'],
    img_path: sp,
    link: 'https://www.diversatech.org/',
    descriptions:
        "Don't see a project here that fits your interests? Bring us your unique ideas to improve the campus technology experience.",
}

const EnableTech: TechClubCard = {
    club_name: 'EnableTech',
    tags: ['decal', 'engineering', 'human-centered design'],
    img_path: sp,
    link: 'https://enabletech.berkeley.edu/',
    descriptions:
        "Don't see a project here that fits your interests? Bring us your unique ideas to improve the campus technology experience.",
}

const EngineeringSolutions: TechClubCard = {
    club_name: 'Engineering Solutions @ Berkeley',
    tags: ['engineering', 'industrial design', 'product design', 'consulting'],
    img_path: sp,
    link: 'https://www.esberkeley.com/',
    descriptions:
        "Don't see a project here that fits your interests? Bring us your unique ideas to improve the campus technology experience.",
}

const Fintech: TechClubCard = {
    club_name: 'Fintech @ Berkeley',
    tags: ['computer science', 'data science', 'programming', 'consulting'],
    img_path: sp,
    link: 'https://www.fintechberkeley.com/',
    descriptions:
        "Don't see a project here that fits your interests? Bring us your unique ideas to improve the campus technology experience.",
}

const GirlsWhoCode: TechClubCard = {
    club_name: 'Girls Who Code',
    tags: ['computer science', 'programming'],
    img_path: sp,
    link: 'https://gwcberkeley.github.io/',
    descriptions:
        "Don't see a project here that fits your interests? Bring us your unique ideas to improve the campus technology experience.",
}

const Launchpad: TechClubCard = {
    club_name: 'Launchpad',
    tags: ['computer science', 'data science', 'artificial intelligence', 'programming'],
    img_path: sp,
    link: 'https://launchpad.studentorg.berkeley.edu/',
    descriptions:
        "Don't see a project here that fits your interests? Bring us your unique ideas to improve the campus technology experience.",
}

const MachineLearning: TechClubCard = {
    club_name: 'Machine Learning @ Berkeley',
    tags: ['computer science', 'data science', 'artificial intelligence', 'programming', 'education', 'consulting'],
    img_path: sp,
    link: 'https://ml.studentorg.berkeley.edu/',
    descriptions:
        "Don't see a project here that fits your interests? Bring us your unique ideas to improve the campus technology experience.",
}

const CLUBS: TechClubCard[] = [
    ThreeDModelingAnimation,
    AerospaceSAE,
]

export default CLUBS
