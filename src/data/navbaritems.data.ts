import { NavBarItem } from '../interfaces/navbaritem.i'
import APIDocs from '../pages/APIDocs.page'
import Apply from '../pages/Apply.page'
import CaseComp from '../pages/CaseComp'
import Projects from '../pages/Projects.page'
import ResearchFair from '../pages/ResearchFair.page'
import Team from '../pages/Team.page'

export const NAV_BAR_ITEMS: NavBarItem[] = [
    {
        path: '/research-fair',
        label: 'Research Fair',
        component: ResearchFair,
    },
    { path: '/case-comp', label: 'Case Competition', component: CaseComp },
    { path: '/team', label: 'Team', component: Team },
    { path: '/projects', label: 'Projects', component: Projects },
    { path: '/apply', label: 'Apply', component: Apply},
    { path: '/apidocs', label: 'API', component: APIDocs },
]
