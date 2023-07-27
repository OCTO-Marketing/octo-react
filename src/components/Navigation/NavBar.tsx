import { useState } from 'react'
import { ReactComponent as OCTOLogo } from '../../assets/octo.svg'
import { NAV_BAR_ITEMS } from '../../data/navbaritems.data'
import { useLocation, useNavigate } from 'react-router-dom'

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false)

    const location = useLocation().pathname

    const navigate = useNavigate()

    window.addEventListener('scroll', () => {
        if (window.scrollY >= 48) {
            setScrolled(true)
        } else if (scrolled) {
            setScrolled(false)
        }
    })

    return (
        // add box shadow box-shadow: ${props => (props.scrolled ? `0px 0px 30px rgb(127 137 161 / 30%)` : `none`)};;
        <nav
            className={`h-20 ${
                scrolled
                    ? 'top-0 bg-white shadow-xl shadow-neutral-300/50'
                    : 'top-8 bg-transparent'
            } transition-all z-50 fixed w-screen flex select-none ease-in-out duration-300`}
        >
            <div
                id='navbar-content-container'
                className='ml-20 mr-40 w-full mt-2 flex items-center justify-between'
            >
                <div
                    id='logo-container'
                    className='cursor-pointer'
                    onClick={() => {
                        navigate('/')
                    }}
                >
                    <OCTOLogo className='h-14 w-14 pointer-events-none' />
                </div>
                <ul
                    id='navbar-items-container'
                    className='flex justify-between gap-6 font-bold text-lg'
                >
                    {NAV_BAR_ITEMS.map((item) => {
                        const { path, label } = item
                        const selected = path === location
                        return (
                            <li
                                key={label}
                                onClick={() => navigate(path)}
                                className={`cursor-pointer ${
                                    selected
                                        ? 'opacity-100'
                                        : 'opacity-50 hover:opacity-75'
                                } transition-opacity duration-300`}
                            >
                                {label}
                                {item.new && (
                                    <span className='inline-block ml-1 p-1 bg-accent rounded-md text-white uppercase text-base'>
                                        New
                                    </span>
                                )}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
