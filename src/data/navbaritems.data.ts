import APIDocs from '../pages/APIDocs/APIDocs.page'
import Apply from '../pages/Apply.page'
import Projects from '../pages/Projects.page'
import Team from '../pages/Team.page'

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
    { path: '/apply', label: 'Apply', component: Apply },
    { path: '/api', label: 'API', component: APIDocs },
]
