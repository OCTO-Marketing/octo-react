import * as React from "react";
import { NavBarItem } from "data/navbaritems.data"
import { useLocation, useNavigate } from 'react-router-dom'

export const Dropdown = ({items, children}: {
    items: NavBarItem[],
    children: string
}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    const location = useLocation().pathname

    const navigate = useNavigate()


    return (
        <div className="relative inline-block">
            <button
                type="button"
                className="inline-flex items-center"
                onClick={toggleDropdown}
            >
                {children}
                <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                </svg>
            </button>

            {isOpen &&
                <div className="origin-top-right absolute right-0 mt-2 w-44 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <ul role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {items.map((item) => {
                            const { path, label} = item
                            return (
                                <li
                                    className={`cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-opacity duration-300 ${
                                        label === 'API' && 'mb:hidden'
                                    }`}
                                    onClick={() => {
                                        navigate(path)
                                        closeDropdown()
                                    }}
                                >
                                    {label}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            }
        </div>
    )
}