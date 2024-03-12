import coursera from '../assets/academics/coursera.jpeg'
import udemy from '../assets/academics/udemy.jpeg'
import adobe from '../assets/academics/adobeportfolio.jpeg'
import behance from '../assets/academics/behance.jpeg'
import uxdesignweekly from '../assets/academics/uxdesignweekly.png'
import figma from '../assets/academics/figma.jpeg'

export interface UIUXPDCard {
    resource_name: string
    img_path: string
    descriptions?: string
    link: string
}

const Coursera: UIUXPDCard = {
    resource_name: 'Coursera',
    img_path: coursera,
    descriptions:
        "Offers a vast array of specialized courses and certifications. Taught by industry experts from leading universities and companies, it enbales learners to gain practical skills and theoretical knowledge.",
    link:
        'https://www.coursera.org/search?skills=Design%20and%20Product&skills=Product%20Design&language=English&sortBy=NEW',
}

const Udemy: UIUXPDCard = {
    resource_name: 'Udemy',
    img_path: udemy,
    descriptions:
        "Provides a comprehensive platform, ranging from beginner to advanced levels, allowing individuals to learn at their own pace with real-world projects and examples.",
    link:
        'https://www.udemy.com/courses/design/user-experience/'
}

const AdobePortfolio: UIUXPDCard = {
    resource_name: 'Adobe Portfolio',
    img_path: adobe,
    descriptions:
        'Allows designers to create professional, customizable portfolios to exhibit their UI/UX and product design projects, facilitating the demonstration of their skills to potential employers or clients.',
    link:
        'https://portfolio.adobe.com/'
}

const Behance: UIUXPDCard = {
    resource_name: 'Behance',
    img_path: behance,
    descriptions:
        "Premier online platform for creatives to showcase their work, discover inspiring designs, and connect with other professionals in the UI/UX and product design fields.",
    link:
        'https://www.behance.net/'
}

const UXDesignWeekly: UIUXPDCard = {
    resource_name: 'UX Design Weekly',
    img_path: uxdesignweekly,
    descriptions:
        'Curated newsletter that delivers the best in UI/UX design news, articles, projects, and resources directly to your inbox, helping you stay updated with the latest industry trends.',
    link:
        'https://uxdesignweekly.com/'
}

const FigmaCommunity: UIUXPDCard = {
    resource_name: 'Figma Community',
    img_path: figma,
    descriptions:
        'Collaborative online space where designers can share, explore, and download Figma resources, including UI kits, templates, and design systems.',
    link:
        'https://www.figma.com/community'
}

const UIUXPD: UIUXPDCard[] = [
    Coursera,
    Udemy,
    AdobePortfolio,
    Behance,
    UXDesignWeekly,
    FigmaCommunity
]

export default UIUXPD
