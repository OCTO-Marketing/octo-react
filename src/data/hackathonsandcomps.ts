import calhackslogo from '../assets/academics/calhackslogo.jpeg'
import sfhackslogo from '../assets/academics/sfhackslogo.png'
import treehackslogo from '../assets/academics/treehackslogo.jpeg'
import hackerearthlogo from '../assets/academics/hackerearthlogo.jpeg'
import devpostlogo from '../assets/academics/devpostlogo.jpeg'
import metalogo from '../assets/academics/metalogo.jpeg'
import microsoftimaginecup from '../assets/academics/microsoftimaginecup.jpeg'
import topcoder from '../assets/academics/topcoder.jpeg'

export interface hackathonsAndCompsCard {
    resource_name: string
    img_path: string
    descriptions?: string
}

const CalHacks: hackathonsAndCompsCard = {
    resource_name: 'Cal Hacks',
    img_path: calhackslogo,
    descriptions:
        "Hackathons orchestrated by one of Berkeley’s esteemed nonprofit organizations, dedicated to nurturing a “culture of hacking, entrepreneurship, and social good via the empowerment of technology.",
}

const SFHacks: hackathonsAndCompsCard = {
    resource_name: 'SF Hacks',
    img_path: sfhackslogo,
    descriptions:
        "Hackathon organized by the Association of Computing Machinery at SFSU, offering a complimentary and inclusive experience for programmers of all proficiency levels.",
}

const TreeHacks: hackathonsAndCompsCard = {
    resource_name: 'Tree Hacks',
    img_path: treehackslogo,
    descriptions:
        'Hackathon hosted by Stanford University, provided at no cost and beginner friendly. Features a series of workshops, varied hacking tracks, and travel reimbursements.',
}

const HackerEarth: hackathonsAndCompsCard = {
    resource_name: 'Hacker Earth',
    img_path: hackerearthlogo,
    descriptions:
        "Online portal designed to connect individuals with a variety of hackathons, spanning both online and in-person formats. Houses hackathons of different levels, some that they sponsor themselves.",
}

const DevPost: hackathonsAndCompsCard = {
    resource_name: 'DevPost',
    img_path: devpostlogo,
    descriptions:
        'A comprehensive platform dedicated to the discovery of countless hackathons, both virtual and physical. Features thousands of hackathon events in various categories.',
}

const MetaHackerCup: hackathonsAndCompsCard = {
    resource_name: 'Meta Hacker Cup',
    img_path: metalogo,
    descriptions:
        'Yearly global programming contest, where coders worldwide showcase their problem-solving and algorithmic skills in online rounds. Participants compete for prizes and a chance to go to the finals.',
}

const MicrosoftImagineCup: hackathonsAndCompsCard = {
    resource_name: 'Microsoft Imagine Cup',
    img_path: microsoftimaginecup,
    descriptions:
        'Annual global competition inviting student innovators to apply their creativity and technological knowledge in challenging online rounds. Competitors win awards and a chance to go to the finals.',
}

const Topcoder: hackathonsAndCompsCard = {
    resource_name: 'Topcoder',
    img_path: topcoder,
    descriptions:
        'Platform conducting frequent programming contests and challenges, accessible to both students and professionals across all skill levels. Rewards range from cash and scholarships to internships.',
}

const hackathonsAndComps: hackathonsAndCompsCard[] = [
    CalHacks,
    SFHacks,
    TreeHacks,
    HackerEarth,
    DevPost,
    MetaHackerCup,
    MicrosoftImagineCup,
    Topcoder
]

export default hackathonsAndComps
