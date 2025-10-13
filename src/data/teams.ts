import bt from '../assets/teams/bt.png'
import bt_preview from '../assets/teams/bt_preview.png'
import bm from '../assets/teams/bm.jpg'
import bm_preview from '../assets/teams/bm_preview.png'
import website from '../assets/teams/Website.png'
import website_preview from '../assets/teams/Website_preview.png'
import bearbites from '../assets/teams/bearbites.png'
import bearbites_preview from '../assets/teams/bearbites_preview.png'
import moffitstatus from '../assets/teams/moffitstatus.png'
import moffitstatus_preview from '../assets/teams/moffitstatus_preview.png'
import decal from '../assets/teams/decal.png'
import decal_preview from '../assets/teams/decal_preview.png'

export interface PTeamCard {
    team_name: string
    positions?: string
    img_path: string
    app_links?: { position: string; link: string }[]
    website_link?: string
    descriptions?: string
    preview_img_path?: string
}

const Berkeleytime: PTeamCard = {
    team_name: 'Berkeleytime',
    positions: 'Frontend, Backend, Infrastructure, ML/DS, UI/UX, Research',
    img_path: bt,
    app_links: [
        {
            position: 'Apply',
            link: 'https://berkeleytime.com/apply'
        }
    ],
    website_link: 'https://berkeleytime.com',
    descriptions:
        "Contribute to the development of Berkeley's go-to platform for course discovery, grade distribution insights, and seamless schedule planning, enabling students to make informed academic choices with ease.",
    preview_img_path: bt_preview
}

const BerkeleyMobile: PTeamCard = {
    team_name: 'Berkeley Mobile',
    positions: 'iOS Developers, Designers',
    img_path: bm,
    app_links: [
        {
            position: 'Apply',
            link: 'https://forms.gle/uARTVwHa7kNWQ5qp7'
        }
    ],
    website_link: 'https://forms.gle/uARTVwHa7kNWQ5qp7',
    descriptions:
        "Help develop Berkeley's student-created mobile app and collaborate with the campus community to implement cutting-edge features, including an interactive campus navigation map for efficient route planning, a comprehensive dining hall menu page, real-time safety alerts, and a convenient study page to locate the nearest open library.",
    preview_img_path: bm_preview
}

const Website: PTeamCard = {
    team_name: 'Website',
    positions: 'Frontend, UI/UX',
    img_path: website,
    app_links: [
        {
            position: 'Apply',
            link: 'https://forms.gle/CkcT3nmbntkPv1RR6'
        }
    ],
    website_link: 'https://octo.asuc.org',
    descriptions:
        'Assist the lead webmaster with maintaining, designing, and developing websites for both OCTO and the ASUC, ensuring that sites are visually appealing, user-friendly, and aligned with organizational goals.',
    preview_img_path: website_preview
}

const BearBites: PTeamCard = {
    team_name: 'BearBites',
    positions: '',
    img_path: bearbites,
    app_links: [
        {
            position: 'Apply',
            link: ''
        }
    ],
    website_link: '',
    descriptions:
        'Maintain and improve BearBites, a real-time notification platform that alerts students about free leftover food on campus, reducing waste, saving students money, and connecting them with campus communities through instant alerts and organization-level tagging.',
    preview_img_path: bearbites_preview
}

const MoffitStatus: PTeamCard = {
    team_name: 'MoffitStatus',
    positions: '',
    img_path: moffitstatus,
    app_links: [
        {
            position: 'Apply',
            link: ''
        }
    ],
    website_link: 'https://www.instagram.com/moffittstatus',
    descriptions:
        "Contribute to the development of Berkeley's Library Crowd Meter platform, MoffittStatus, which provides real-time data on library occupancy and study space availability. Enhance the platform’s data collection, visualization, and user interface features to help students conveniently find open study areas and manage their time more efficiently during peak hours.",
    preview_img_path: moffitstatus_preview
}

const Decal: PTeamCard = {
    team_name: 'Decal',
    positions: '',
    img_path: decal,
    app_links: [
        {
            position: 'Apply',
            link: ''
        }
    ],
    website_link: 'https://decal.studentorg.berkeley.edu',
    descriptions:
        "Contribute to the development of Berkeley's platform for DeCal course registration, discovery, and application. The website allows students to easily register for those DeCal courses by allowing them to be notified on time of open DeCals.",
    preview_img_path: decal_preview
}

const TEAMS: PTeamCard[] = [
    Berkeleytime,
    BerkeleyMobile,
    Website,
    BearBites,
    MoffitStatus,
    Decal
]

export default TEAMS
