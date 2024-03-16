// Importing images for research cards
import website from '../assets/teams/Website.png'
import bt from '../assets/teams/bt.png'
import internal from '../assets/teams/Internal.png'
import absa from '../assets/teams/ABSA.png'


// Interface for a research card
export interface PColdEmailCard {
    name: string
    img_path: string
    links?: { position: string; link: string }[] // Optional array of links
    descriptions: string
}
// Research card data
const ResearchRelations: PColdEmailCard = {
    name: 'Maintaining Research Relations',
    img_path: website,
    links: [
        {
            position: 'Link',
            link: '',
        },
    ],
    descriptions:
        'How to contribute effectively during research and secure recommendations and opportunities from your research mentors.',
}

const Templates: PColdEmailCard = {
    name: 'Templates for Cold Outreach',
    img_path: bt,
    links: [
        {
            position: 'Link',
            link: '',
        },
    ],
    descriptions:
        "Contribute to Berkeley's beloved course discovery, grade distribution aggregating, and scheduling powerhouse platform.",
}

const BestPractice: PColdEmailCard = {
    name: 'Best Practices for Cold Outreach',
    img_path: internal,
    links: [
        {
            position: 'Link',
            link: '',
        },
    ],
    descriptions:
        'Maintaining professionalism and developing the best strategy to contact research groups',
}

const Finding: PColdEmailCard = {
    name: 'Finding Professors and Research Groups @ Berkeley',
    img_path: absa,
    links: [
        {
            position: 'Link',
            link: '',
        },
    ],
    descriptions:
        'How to find professors and GSIs within your own classes and network. Focus on the research areas closest to your research passion.',
}

// Array containing all research cards
const COLD_EMAIL: PColdEmailCard[] = [
    ResearchRelations,
    Templates,
    BestPractice,
    Finding
]
// Exporting the array of research cards
export default COLD_EMAIL
