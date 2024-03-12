import APIDocs from '../pages/APIDocs/APIDocs.page'
import Apply from '../pages/Apply.page'
import Projects from '../pages/Projects.page'
import Team from '../pages/Team.page'
import Research from '../pages/Research.page' //Import research page
import ColdEmail from '../pages/ColdEmail.page' //Import research page

export interface NavBarItem {
    path: string
    label: string
    unavailable?: boolean
    active?: boolean
    new?: boolean
    component: () => JSX.Element
}

export const NAV_BAR_ITEMS: NavBarItem[] = [
    { path: '/research', label: 'Research', component: Research }, //Add Research Page in NavBar
    { path: '/coldEmail', label: 'Research-ColdEmail', component: ColdEmail }, //Add Research Page in NavBar
    // { path: '/case-comp', label: 'Case Competition', component: CaseComp },
    { path: '/team', label: 'Team', component: Team },
    { path: '/projects', label: 'Projects', component: Projects },
    { path: '/apply', label: 'Apply', component: Apply },
    { path: '/api', label: 'API', component: APIDocs },
]
