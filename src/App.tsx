import { Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'
import Home from './pages/Home.page'

import './styles/defaults.css'
import './styles/theme.css'
import { NAV_BAR_ITEMS } from './data/navbaritems.data'
import Team from './pages/Team.page'

function App() {
    return (
        <Routes>
            <Route path='/' element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path='team' element={<Team />} />
                {NAV_BAR_ITEMS.map((item) => {
                    return <Route path={item.path} element={item.component()} />
                })}
            </Route>
        </Routes>
    )
}

export default App
