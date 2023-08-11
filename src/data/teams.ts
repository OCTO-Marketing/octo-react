import bt from '../assets/teams/bt.png'
import bm from '../assets/teams/bm.jpg'
import absa from '../assets/teams/ABSA.png'
import marketing from '../assets/teams/Marketing.png'
import internal from '../assets/teams/Internal.png'
import ds from '../assets/teams/Data Science.png'
import website from '../assets/teams/Website.png'
import sp from '../assets/teams/Special Project.png'

export interface PTeamCard {
    team_name: string
    positions?: string
    img_path: string
    app_links?: { position: string; link: string }[]
    descriptions?: string
}

const Berkeleytime: PTeamCard = {
    team_name: 'Berkeleytime',
    positions: 'Frontend Developer, Backend Engineer, UI/UX Design',
    img_path: bt,
    app_links: [
        {
            position: 'Apply',
            link: '',
        },
    ],
    descriptions:
        "Contribute to Berkeley's beloved course discovery, grade distribution aggregating, and scheduling powerhouse platform.",
}

const BerkeleyMobile: PTeamCard = {
    team_name: 'Berkeley Mobile',
    positions: 'Developers (iOS, Android & Backend) and Designers.',
    img_path: bm,
    app_links: [
        {
            position: 'Developers',
            link: '',
        },
        {
            position: 'Designers',
            link: '',
        },
    ],
    descriptions:
        "Develop Berkeley's student-created mobile app and collaborate with campus community to implement cutting-edge features.",
}

const ABSA: PTeamCard = {
    team_name: 'ABSA',
    positions: 'Full-Stack Developer, UI/UX Designer',
    img_path: absa,
    app_links: [
        {
            position: 'Apply',
            link: '',
        },
    ],
    descriptions:
        'Help create the new and improved Annual Budgeting and Spaces Application system for ASUC and gain valuable experience at the intersection of engineering and finance.',
}

const Marketing: PTeamCard = {
    team_name: 'Marketing',
    positions: 'Social Media Interns, Communications Lead',
    img_path: marketing,
    app_links: [],
    descriptions:
        "Join OCTO's in house marketing team and be the voice of tech within the ASUC and throughout the campus community.",
}

const Internal: PTeamCard = {
    team_name: 'Internal',
    positions: 'Project Manager, Interns',
    img_path: internal,
    app_links: [],
    descriptions:
        'Spearhead member development activities and cultivate relationships with tech student organizations, ASUC officials, and campus administrative leadership.',
}

const DataScience: PTeamCard = {
    team_name: 'Data Science',
    positions: 'Data Science and Analytics Interns',
    img_path: ds,
    app_links: [],
    descriptions:
        'Identify interesting trends in campus data and communicate results to key strategic stakeholders through dynamic dashboards and interactive reports.',
}

const Website: PTeamCard = {
    team_name: 'Website',
    positions: 'UI Designer, Web Development Interns',
    img_path: website,
    app_links: [],
    descriptions:
        'Assist the lead webmaster with site maintenance and design creation for web developpment needs within OCTO and throughout the ASUC.',
}

const SpecialProjects: PTeamCard = {
    team_name: 'Special Projects',
    positions: 'Roles developed on an individual basis',
    img_path: sp,
    app_links: [],
    descriptions:
        "Don't see a project here that fits your interests? Bring us your unique ideas to improve the campus technology experience.",
}

const TEAMS: PTeamCard[] = [
    Berkeleytime,
    BerkeleyMobile,
    ABSA,
    Marketing,
    Internal,
    DataScience,
    Website,
    SpecialProjects
]

export default TEAMS
