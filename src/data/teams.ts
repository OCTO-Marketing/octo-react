import bt from '../assets/teams/bt.png'
import bm from '../assets/teams/bm.jpg'

export interface PTeamCard {
    team_name: string
    positions: string
    img_path: string
    links: { position: string; link: string }[]
}

const Berkeleytime: PTeamCard = {
    team_name: 'Berkeleytime',
    positions: 'Frontend Developer, Backend Engineer, UI/UX Design',
    img_path: bt,
    links: [
        {
            position: 'Apply',
            link: '',
        },
    ],
}

const BerkeleyMobile: PTeamCard = {
    team_name: 'Berkeley Mobile',
    positions:
        'Positions open: Developers (iOS, Android & Backend) and Designers.',
    img_path: bm,
    links: [
        {
            position: 'Developers',
            link: '',
        },
        {
            position: 'Designers',
            link: '',
        },
    ],
}

const Marketing: PTeamCard = {
    team_name: 'Marketing',
    positions: 'Positions open: None at the moment',
    img_path: bm,
    links: [],
}

const ABSA: PTeamCard = {
    team_name: 'ABSA',
    positions: 'Positions open: Full-Stack Developer, UI/UX Designer',
    img_path: bm,
    links: [],
}

const TEAMS: PTeamCard[] = [Berkeleytime, BerkeleyMobile, Marketing, ABSA]

export default TEAMS
