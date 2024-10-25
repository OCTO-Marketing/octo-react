import bt from '../assets/teams/bt.png'
import bt_preview from '../assets/teams/bt_preview.png'
import bm from '../assets/teams/bm.jpg'
import bm_preview from '../assets/teams/bm_preview.png'
import website from '../assets/teams/Website.png'
import website_preview from '../assets/teams/Website_preview.png'

export interface PTeamCard {
    team_name: string
    positions?: string
    img_path: string
    app_links?: { position: string; link: string }[]
    website_link?: string
    descriptions?: string
    preview_img_path?: string;
}

const Berkeleytime: PTeamCard = {
    team_name: 'Berkeleytime',
    positions: 'Frontend, Backend, Infrastructure, ML/DS, UI/UX, Research',
    img_path: bt,
    app_links: [
        {
            position: 'Apply',
            link: 'https://airtable.com/appllQy6crmpquCOQ/pag5ngU9hgKJt5eAs/form',
        },
    ],
    website_link: 'https://berkeleytime.com',
    descriptions:
        "Contribute to the development of Berkeley's go-to platform for course discovery, grade distribution insights, and seamless schedule planning, enabling students to make informed academic choices with ease.",
    preview_img_path: bt_preview,
}

const BerkeleyMobile: PTeamCard = {
    team_name: 'Berkeley Mobile',
    positions: 'More info coming soon', //'Developers (iOS, Android & Backend) and Designers.',
    img_path: bm,
    /*app_links: [
        {
            position: 'Apply',
            link: 'https://forms.gle/DhpTrKVf4QB1Zwj1A',
        },
    ],*/
    website_link: 'https://apps.apple.com/us/app/berkeley-mobile/id912243518',
    descriptions:
        "Help develop Berkeley's student-created mobile app and collaborate with the campus community to implement cutting-edge features, including an interactive campus navigation map for efficient route planning, a comprehensive dining hall menu page, real-time safety alerts, and a convenient study page to locate the nearest open library.",
    preview_img_path: bm_preview,
}

const Website: PTeamCard = {
    team_name: 'Website',
    positions: 'Frontend, UI/UX',
    img_path: website,
    app_links: [
        {
            position: 'Apply',
            link: 'https://docs.google.com/forms/d/e/1FAIpQLSf-M52LTjXSy61nfHkPybedKVDFCnKwHSJ-I9gjWJv4NNIR7w/viewform',
        },
    ],
    website_link: 'https://octo.asuc.org',
    descriptions:
        'Assist the lead webmaster with maintaining, designing, and developing websites for both OCTO and the ASUC, ensuring that sites are visually appealing, user-friendly, and aligned with organizational goals.',
    preview_img_path: website_preview,
}

const TEAMS: PTeamCard[] = [
    Berkeleytime,
    BerkeleyMobile,
    Website,
]

export default TEAMS
