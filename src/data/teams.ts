import bt from '../assets/teams/bt.png'
import bt_preview from '../assets/teams/bt_preview.png'
import bm from '../assets/teams/bm.jpg'
import bm_preview from '../assets/teams/bm_preview.png'
import website from '../assets/teams/Website.png'
import website_preview from '../assets/teams/Website_preview.png'
// import absa from '../assets/teams/ABSA.png'
// import marketing from '../assets/teams/Marketing.png'
// import internal from '../assets/teams/Internal.png'
// import ds from '../assets/teams/Data Science.png'
// import sp from '../assets/teams/Special Project.png'

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

// const ABSA: PTeamCard = {
//     team_name: 'ABSA',
//     positions: 'More info coming soon', //'Full-Stack Developer, UI/UX Designer',
//     img_path: absa,
//     /*app_links: [
//         {
//             position: 'Apply',
//             link: 'https://forms.gle/8fq9sG4eysZfpznx8',
//         },
//     ],*/
//     descriptions:
//         'Help create the new and improved Annual Budgeting and Spaces Application system for ASUC and gain valuable experience at the intersection of engineering and finance.',
// }

// const Marketing: PTeamCard = {
//     team_name: 'Marketing',
//     positions: 'More info coming soon', //'Social Media Interns, Communications Lead',
//     img_path: marketing,
//     /*app_links: [
//         {
//             position: 'Apply',
//             link: 'https://forms.gle/XNMQfMRgMTYvZh6P7',
//         },
//     ],*/
//     descriptions:
//         "Join OCTO's in house marketing team and be the voice of tech within the ASUC and throughout the campus community.",
// }

// const Internal: PTeamCard = {
//     team_name: 'Internal',
//     positions: 'More info coming soon', //'Project Manager, Interns',
//     img_path: internal,
//     /*app_links: [
//         {
//             position: 'Apply',
//             link: 'https://forms.gle/XNMQfMRgMTYvZh6P7',
//         },
//     ],*/
//     descriptions:
//         'Spearhead member development activities and cultivate relationships with tech student organizations, ASUC officials, and campus administrative leadership.',
// }

// const DataScience: PTeamCard = {
//     team_name: 'Data Science',
//     positions:
//         'The Data Science team is not recruiting for this semester. Check back here when spring semester starts.',
//     img_path: ds,
//     app_links: [],
//     descriptions:
//         'Identify interesting trends in campus data and communicate results to key strategic stakeholders through dynamic dashboards and interactive reports.',
// }

// const SpecialProjects: PTeamCard = {
//     team_name: 'Special Projects',
//     positions:
//         'Roles developed on an individual basis. Please schedule a coffee chat above or email the CTO at technology@asuc.org',
//     img_path: sp,
//     app_links: [],
//     descriptions:
//         "Don't see a project here that fits your interests? Bring us your unique ideas to improve the campus technology experience.",
// }

const TEAMS: PTeamCard[] = [
    Berkeleytime,
    BerkeleyMobile,
    Website,
    // ABSA,
    // Marketing,
    // Internal,
    // DataScience,
    // SpecialProjects,
]

export default TEAMS
