export interface IMember {
    name: string
    photo?: string
    team:
        | 'Leadership'
        | 'Berkeleytime'
        | 'Berkeley Mobile'
        | 'Marketing'
        | 'ABSA'
        | 'Member Development'
        | 'Project Management'
    title:
        | 'Chief Technology Officer'
        | 'Program Manager'
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

const Leadership: IMember[] = [
    {
        name: 'Vedha Santhosh',
        team: 'Leadership',
        title: 'Chief Technology Officer',
    },
]

const BerkeleytimeMembers: IMember[] = [
    {
        name: 'Kev Wang',
        team: 'Berkeleytime',
        title: 'Program Manager',
    },
]

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
