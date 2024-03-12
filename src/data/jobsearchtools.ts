import github from '../assets/careers/github.png';
import wellfound from '../assets/careers/well_found.jpeg';
import accel from '../assets/careers/accel.jpeg';
import andressen_horowitz from '../assets/careers/andressen_horowitz.jpg';
import baidu_ventures from '../assets/careers/baidu_ventures.jpeg';
import first_round_capital from '../assets/careers/first_round_capital.jpeg';
import founder_collective from '../assets/careers/founder_collective.jpg';
import softbank from '../assets/careers/softbank.jpeg';
import kleiner_perkins from '../assets/careers/kleiner_perkins.jpeg';
import ggv_capital from '../assets/careers/ggv_capital.png'
import sequoia_capital from '../assets/careers/sequoia_capital.jpeg';
import greylock_ventures from '../assets/careers/greylock_partners.jpeg';
import khosla_ventures from '../assets/careers/khosla_ventures.jpeg';
import google_ventures from '../assets/careers/google_ventures.jpeg';
import bay_area from '../assets/careers/city.jpg';
import new_york from '../assets/careers/city.jpg';
import chicago from '../assets/careers/city.jpg';
import seattle from '../assets/careers/city.jpg';
import los_angeles from '../assets/careers/city.jpg';
import international from '../assets/careers/city.jpg';

export interface TechJobSearchToolCard {
    tool_name?: string
    img_path?: string
    tool_link?: { 
        label: string; 
        link: string
    }
    description?: string
}

const Github: TechJobSearchToolCard = {
    tool_name: 'Github',
    img_path: github,
    tool_link: {
        label: 'Link',
        link: 'https://github.com/search?q=internships&type=repositories',
    },
    description:
        "Search for jobs, internships, and interview preparation material.",
}

const WellFound: TechJobSearchToolCard = {
    tool_name: 'Wellfound',
    img_path: wellfound,
    tool_link: {
        label: 'Link',
        link: 'https://wellfound.com/',
    },
    description:
        "Startup job listings (vet companies carefully).",
}

const BayArea: TechJobSearchToolCard = {
    tool_name: 'Bay Area',
    img_path: bay_area,
    tool_link: {
        label: 'Link',
        link: 'https://wellfound.com/',
    },
    description:
        "Search for jobs in the California Bay Area.",
}

const NewYork: TechJobSearchToolCard = {
    tool_name: 'New York',
    img_path: new_york,
    tool_link: {
        label: 'Link',
        link: 'https://wellfound.com/',
    },
    description:
        "Search for jobs in the New York City, New York.",
}

const Chicago: TechJobSearchToolCard = {
    tool_name: 'Chicago',
    img_path: chicago,
    tool_link: {
        label: 'Link',
        link: 'https://wellfound.com/',
    },
    description:
        "Search for jobs in the Chicago, Illinois.",
}

const Seattle: TechJobSearchToolCard = {
    tool_name: 'Seattle',
    img_path: seattle,
    tool_link: {
        label: 'Link',
        link: 'https://wellfound.com/',
    },
    description:
        "Search for jobs in the Seattle, Washington.",
}

const LosAngeles: TechJobSearchToolCard = {
    tool_name: 'Los Angeles',
    img_path: los_angeles,
    tool_link: {
        label: 'Link',
        link: 'https://wellfound.com/',
    },
    description:
        "Search for jobs in the Los Angeles, CA.",
}

const International: TechJobSearchToolCard = {
    tool_name: 'International',
    img_path: international,
    tool_link: {
        label: 'Link',
        link: 'https://wellfound.com/',
    },
    description:
        "Search for jobs internationally.",
}

const AndressenHorowitz: TechJobSearchToolCard = {
    tool_name: 'Andressen Horowitz',
    img_path: andressen_horowitz,
    tool_link: {
        label: 'Link',
        link: 'https://wellfound.com/',
    },
    description:
        "Stage agnostic venture capital firm that backs bold entrepreneurs building the future through technology.",
}

const BaiduVentures: TechJobSearchToolCard = {
    tool_name: 'Baidu Ventures',
    img_path: baidu_ventures,
    tool_link: {
        label: 'Link',
        link: 'https://wellfound.com/',
    },
    description:
        "independent venture fund established by Baidu in 2017.",
}

const KleinerPerkins: TechJobSearchToolCard = {
    tool_name: 'Kleiner Perkins',
    img_path: kleiner_perkins,
    tool_link: {
        label: 'Link',
        link: 'https://wellfound.com/',
    },
    description:
        "Investors for companies starting from the inception stage to the IPO stage.",
}

const GGVCapital: TechJobSearchToolCard = {
    tool_name: 'GGV Capital',
    img_path: ggv_capital,
    tool_link: {
        label: 'Link',
        link: 'https://wellfound.com/',
    },
    description:
        "American venture capital firm focused on early-to-growth investments in tech companies.",
}

const SequoiaCapital: TechJobSearchToolCard = {
    tool_name: 'Sequoia Capital',
    img_path: sequoia_capital,
    tool_link: {
        label: 'Link',
        link: 'https://wellfound.com/',
    },
    description:
        "Helping the daring build legendary companies.",
}

const Accel: TechJobSearchToolCard = {
    tool_name: 'Accel',
    img_path: accel,
    tool_link: {
        label: 'Link',
        link: 'https://wellfound.com/',
    },
    description:
        "Global venture capital firm that is the first partner to exceptional teams everywhere.",
}

const GreylockVentures: TechJobSearchToolCard = {
    tool_name: 'Greylock Ventures',
    img_path: greylock_ventures,
    tool_link: {
        label: 'Link',
        link: 'https://wellfound.com/',
    },
    description:
        "Leading venture capital firm based in Silicon Valley.",
}

const SoftBank: TechJobSearchToolCard = {
    tool_name: 'Soft Bank',
    img_path: softbank,
    tool_link: {
        label: 'Link',
        link: 'https://wellfound.com/',
    },
    description:
        "Strategic holding company investing in technologies for the betterment of humanity.",
}

const KhoslaVentures: TechJobSearchToolCard = {
    tool_name: 'Khosla Ventures',
    img_path: khosla_ventures,
    tool_link: {
        label: 'Link',
        link: 'https://wellfound.com/',
    },
    description:
        "Hopes to change the way the world uses carbon and creating a post-pollution world!",
}

const FirstRoundCapital: TechJobSearchToolCard = {
    tool_name: 'First Round Capital',
    img_path: first_round_capital,
    tool_link: {
        label: 'Link',
        link: 'https://wellfound.com/',
    },
    description:
        "Backing remarkable entrepreneurs from the first moment — not just the first round.",
}

const GoogleVentures: TechJobSearchToolCard = {
    tool_name: 'Google Ventures',
    img_path: google_ventures,
    tool_link: {
        label: 'Link',
        link: 'https://wellfound.com/',
    },
    description:
        "Launched in 2009, GV supports innovative founders moving the world forward.",
}

const FounderCollective: TechJobSearchToolCard = {
    tool_name: 'Founder Collective',
    img_path: founder_collective,
    tool_link: {
        label: 'Link',
        link: 'https://wellfound.com/',
    },
    description:
        "Building the most aligned VC fund for founders at the seed stage.",
}

const STANDARD_SEARCH_TOOLS: TechJobSearchToolCard[] = [
    Github,
    WellFound,
]

const AREA_SPECIFIC_TOOLS: TechJobSearchToolCard[] = [
    BayArea,
    NewYork,
    Chicago,
    Seattle,
    LosAngeles,
    International,
]

const VENTURE_CAPITAL_PORTFOLIOS: TechJobSearchToolCard[] = [
    AndressenHorowitz,
    BaiduVentures,
    KleinerPerkins,
    GGVCapital,
    SequoiaCapital,
    Accel,
    GreylockVentures,
    SoftBank,
    KhoslaVentures,
    FirstRoundCapital,
    GoogleVentures,
    FounderCollective
]

export {STANDARD_SEARCH_TOOLS, AREA_SPECIFIC_TOOLS, VENTURE_CAPITAL_PORTFOLIOS}