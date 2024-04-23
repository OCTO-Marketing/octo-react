import APIDocs from '../pages/APIDocs/APIDocs.page'
// import Apply from '../pages/Apply.page'
import Projects from '../pages/Projects.page'
import Team from '../pages/Team.page'
import Research from '../pages/Research.page' //Import research page
import ColdEmail from '../pages/ColdEmail.page' //Import research page
import CorporateEng from 'pages/CorporateEng.page'
import SearchTools from '../pages/Careers/SearchTools.page'
import InterviewPrep from '../pages/Careers/InterviewPrep.page'
import SearchPlatform from '../pages/Careers/SearchPlatform.page'

export interface NavBarItem {
    path: string
    label: string
    unavailable?: boolean
    active?: boolean
    new?: boolean
    subItems?: NavBarItem[]
    component?: () => JSX.Element
}

export const CAREERS_ITEMS: NavBarItem[] = [
    { path: '/careers/searchtools', label: 'Search Tools', component: SearchTools },
    { path: '/careers/interview', label: 'Interview Prep', component: InterviewPrep },
    { path: '/careers/searchplatform', label: 'Search Platform', component: SearchPlatform },
]

export const RESEARCH_ITEMS: NavBarItem[] = [
    { path: '/research/academicResources', label: 'Academic Papers & Resources', component: Research },
    { path: '/research/coldEmail', label: 'Cold Email Templates', component: ColdEmail },
    { path: '/research/CorporateEng', label: 'Corporate Engineering Blogs', component: CorporateEng },
]

export const NAV_BAR_ITEMS: NavBarItem[] = [
    // { path: '/case-comp', label: 'Case Competition', component: CaseComp },
    { path: '/team', label: 'Team', component: Team },
    { path: '/projects', label: 'Projects', component: Projects },
    // { path: '/apply', label: 'Apply', component: Apply },
    { path: '/research', label: 'Research', subItems: RESEARCH_ITEMS},
    { path: '/api', label: 'API', component: APIDocs },
    { path: '/careers', label: 'Careers', subItems: CAREERS_ITEMS},
]
