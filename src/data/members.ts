import vedha_santhosh from '../assets/members/vedha_santhosh.jpeg'
import srikar_hanumanula from '../assets/members/srikar_hanumanula.jpeg'
import kev_wang from '../assets/members/kev_wang.jpeg'
import sukhamrit_singh from '../assets/members/sukhamrit_singh.jpeg'
import joanne_tran from '../assets/members/joanne_tran.jpeg'

export interface IMember {
    name: string
    photo?: string
    team:
        | 'Leadership'
        | 'Berkeleytime'
        | 'Berkeley Mobile'
        | 'Marketing'
        | 'ABSA'
        | 'Internal'
        | 'Website'
        | 'Data Science'
        | 'Special Projects'
    title:
        | 'Chief Technology Officer'
        | 'Product Manager'
        | 'Lead'
        | 'Frontend'
        | 'Frontend Lead'
        | 'Backend'
        | 'Backend Lead'
        | 'Design'
        | 'Design Lead'
        | 'Full-Stack'
        | 'iOS Dev'
        | 'iOS Lead'
        | 'Android Dev'
        | 'Android Lead'
        | 'Project Manager'
        | 'Marketing Lead'
}

export const TEAMS = [
    'Leadership',
    'Berkeleytime',
    'Berkeley Mobile',
    'Marketing',
    'ABSA',
    'Member Development',
    'Project Management',
]

export const Leadership: IMember[] = [
    {
        name: 'Vedha Santhosh',
        team: 'Leadership',
        title: 'Chief Technology Officer',
        photo: vedha_santhosh,
    },
    {
        name: 'Kev Wang',
        team: 'Berkeleytime',
        title: 'Product Manager',
        photo: kev_wang,
    },
    {
        name: 'Sukhamrit Singh ',
        team: 'Berkeley Mobile',
        title: 'Product Manager',
        photo: sukhamrit_singh,
    },
    {
        name: 'Srikar Hanumanula',
        team: 'ABSA',
        title: 'Product Manager',
        photo: srikar_hanumanula,
    },
    {
        name: 'Joanne Tran',
        team: 'Website',
        title: 'Lead',
        photo: joanne_tran,
    },
    {
        name: 'Marketing Lead',
        team: 'Marketing',
        title: 'Lead',
    },
    {
        name: 'Data Science PM',
        team: 'Data Science',
        title: 'Lead',
    },
]

const BerkeleytimeMembers: IMember[] = []

const BerkeleyMobileMembers: IMember[] = []

const ABSAMembers: IMember[] = []

const MarketingMembers: IMember[] = []

const MemberDevelopmentMembers: IMember[] = []

const ProjectManagementMembers: IMember[] = []

const MEMBERS = [
    ...Leadership,
    ...BerkeleytimeMembers,
    ...BerkeleyMobileMembers,
    ...ABSAMembers,
    ...MarketingMembers,
    ...MemberDevelopmentMembers,
    ...ProjectManagementMembers,
]

export default MEMBERS
