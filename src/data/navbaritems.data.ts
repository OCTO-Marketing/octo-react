import APIDocs from '../pages/APIDocs/APIDocs.page'
// import Apply from '../pages/Apply.page'
import Projects from '../pages/Projects.page'
import Team from '../pages/Team.page'
import SearchTools from '../pages/Careers/SearchTools.page'
import InterviewPrep from '../pages/Careers/InterviewPrep.page'
import SearchPlatform from '../pages/Careers/SearchPlatform.page'

export interface NavBarItem {
    path: string
    label: string
    unavailable?: boolean
    active?: boolean
    new?: boolean
    component: () => JSX.Element
}

export const NAV_BAR_ITEMS: NavBarItem[] = [
    // { path: '/research-fair', label: 'Research Fair', component: ResearchFair },
    // { path: '/case-comp', label: 'Case Competition', component: CaseComp },
    { path: '/team', label: 'Team', component: Team },
    { path: '/projects', label: 'Projects', component: Projects },
    // { path: '/apply', label: 'Apply', component: Apply },
    { path: '/api', label: 'API', component: APIDocs },
    { path: '/careers/searchtools', label: 'Search Tools', component: SearchTools },
    { path: '/careers/interview', label: 'Interview Prep', component: InterviewPrep },
    { path: '/careers/searchplatform', label: 'Search Platform', component: SearchPlatform },
]
