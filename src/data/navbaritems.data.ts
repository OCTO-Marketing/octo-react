import APIDocs from '../pages/APIDocs/APIDocs.page'
// import Apply from '../pages/Apply.page'
import Projects from '../pages/Projects.page'
import Team from '../pages/Team.page'
import EducationalResources from '../pages/Academics/EducationalResources.page'
import HackathonsAndComps from '../pages/Academics/HackathonsAndComps.page'
import TechClubs from '../pages/Academics/TechClubs.page'
import UIUXProductDesign from '../pages/Academics/UIUXProductDesign.page'

export interface NavBarItem {
    path: string
    label: string
    unavailable?: boolean
    active?: boolean
    new?: boolean
    subItems?: NavBarItem[]
    component?: () => JSX.Element
}

export const ACADEMICS_ITEMS: NavBarItem[] = [
    { path: '/academics/educationalresources', label: 'Educational Resources', component: EducationalResources },
    { path: '/academics/hackathonsandcomps', label: 'Hackathons and Competitions', component: HackathonsAndComps },
    { path: '/academics/techclubs', label: 'Tech Clubs', component: TechClubs },
    { path: '/academics/uiuxproductdesign', label: 'UI/UX Product Design', component: UIUXProductDesign },
]

export const NAV_BAR_ITEMS: NavBarItem[] = [
    // { path: '/research-fair', label: 'Research Fair', component: ResearchFair },
    // { path: '/case-comp', label: 'Case Competition', component: CaseComp },
    { path: '/team', label: 'Team', component: Team },
    { path: '/projects', label: 'Projects', component: Projects },
    // { path: '/apply', label: 'Apply', component: Apply },
    { path: '/api', label: 'API', component: APIDocs },
    { path: '/academics', label: 'Academics', subItems: ACADEMICS_ITEMS},
]