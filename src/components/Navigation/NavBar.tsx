import { useState } from 'react'
import { ReactComponent as OCTOLogo } from '../../assets/octo.svg'
import { NAV_BAR_ITEMS } from '../../data/navbaritems.data'
import { useLocation, useNavigate } from 'react-router-dom'
import { Dropdown } from 'components/Components/Dropdown.component'

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
        <nav
            className={`h-20 ${
                scrolled
                    ? 'top-0 bg-white shadow-xl shadow-slate-700/10'
                    : 'top-8 bg-transparent'
            } transition-all z-50 fixed w-screen flex gap-8 select-none ease-in-out duration-300 px-20 mb:px-10 py-2 items-center justify-between`}
        >
            <div
                id='logo-container'
                className='cursor-pointer'
                onClick={() => {
                    navigate('/')
                }}
            >
                <OCTOLogo className='h-12 w-12 pointer-events-none' />
            </div>
            <ul
                id='navbar-items-container'
                className='flex justify-between gap-6 font-bold text-lg'
            >
                {NAV_BAR_ITEMS.map((item) => {
                    const { path, label, subItems} = item
                    const selected = path === location
                    return (
                        <li
                            key={label}
                            onClick={() => {
                                if (!subItems) {
                                    navigate(path)
                                }
                            }}
                            className={`cursor-pointer ${
                                selected
                                    ? 'opacity-100'
                                    : 'opacity-50 hover:opacity-75'
                            } transition-opacity duration-300 ${
                                label === 'API' && 'mb:hidden'
                            }`}
                        >
                            {
                                subItems
                                ? <Dropdown items={subItems}>{label}</Dropdown>
                                : label
                            }
                            {item.new && (
                                <span className='inline-block ml-1 p-1 bg-accent rounded-md text-white uppercase text-base'>
                                    New
                                </span>
                            )}
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default NavBar
