import netflix from '../assets/research/netflix.png'
import yc from '../assets/research/yc.png'
import medium from '../assets/research/medium.png'
import github from '../assets/research/github.png'
import blind from '../assets/research/blind.png'
import reddit from '../assets/research/reddit.jpeg'

// Interface for a research card
export interface PResearchCard {
    name: string
    img_path: string
    links?: { position: string; link: string; tag?: string }[] // Optional array of links
    descriptions: string
}
// Research card data
const Big_Tech: PResearchCard = {
    name: 'Learn from the Best',
    img_path: netflix,
    links: [
            {
                position: 'Link',
                link: 'https://netflixtechblog.com',
                tag: 'Netflix: ',
            },
           {
                position: 'Link',
                link: 'https://www.databricks.com/blog',
                tag: 'Databricks: ',
           },
           {
                position: 'Link',
                link: 'https://engineering.atspotify.com',
                tag: 'Spotify: ',
           },
           {
                position: 'Link',
                link: 'https://instagram-engineering.com',
                tag: 'Instagram: ',
           },
    ],
    descriptions:
        "How do the best companies consistently develop and manage industry-leading software? Learn from some of the best here:",
}

const Startup: PResearchCard = {
    name: 'Startup Corner',
    img_path: yc,
     links: [
         {
             position: 'Link',
             link: 'https://www.ycombinator.com/blog',
             tag: 'YC: ',
         },
         {
             position: 'Link',
             link: 'https://greylock.com/blog/',
             tag: 'Greylock: ',
         },
         {
             position: 'Link',
             link: 'https://www.accel.com/noteworthy-categories/portfolio',
             tag: 'Accel: ',
         },
    ],
    descriptions:
        "How do you build innovative tech as a startup? Find out what some of the hottest startups are doing here:",
}

const Medium: PResearchCard = {
    name: 'Medium and Linkedin Blogs',
    img_path: medium,
    links: [
        {
            position: 'Link',
            link: 'https://medium.engineering',
            tag: 'Medium: '
        },
        {
            position: 'Link',
            link: 'https://www.linkedin.com/blog/engineering',
            tag: 'LinkedIn: '
        },
    ],
    descriptions:
        "Medium and linkedin contain various existing resources about industry engineering practices."
}

const Github_Links: PResearchCard = {
    name: 'Links to Other Company Blogs',
    img_path: github,
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
    img_path: blind,
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
    img_path: reddit,
    links: [
        {
            position: 'Link',
            link: 'https://www.reddit.com/r/cscareerquestions/',
            tag: 'r/cscareerquestions: ',
        },
        {
            position: 'Link',
            link: 'https://www.reddit.com/r/ProductManagement/',
            tag: 'r/ProductManagement: '
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
