import { Route, Routes, useLocation } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'
import { NAV_BAR_ITEMS } from './data/navbaritems.data'
import Home from './pages/Home/Home.page'
import './styles/defaults.css'
import './styles/theme.css'
import NotFound from 'pages/NotFound.page'
import { useEffect } from 'react'

function App() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        <Routes>
            <Route path='/' element={<Navigation />}>
                <Route index element={<Home />} />
                {NAV_BAR_ITEMS.map((item) => {
                    return <Route path={item.path} element={item.component()} />
                })}
                <Route element={<NotFound />} />
            </Route>
        </Routes>
    )
}

export default App
