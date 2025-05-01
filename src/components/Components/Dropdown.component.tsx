import * as React from "react";
import { NavBarItem } from "data/navbaritems.data"
import { useNavigate } from 'react-router-dom'
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

export const Dropdown = ({items, children}: {
    items: NavBarItem[],
    children: string
}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const btnRef = React.useRef<HTMLButtonElement>(null)
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    
    const navigate = useNavigate()
    
    React.useEffect(() => {

        const closeDropdown = (e: any) => {
            if (isOpen && !btnRef.current?.contains(e.target)) {
                setIsOpen(false);
            }
        };

        document.body.addEventListener('click', closeDropdown);
        return () => document.body.removeEventListener('click', closeDropdown);
    }, [isOpen]);

    return (
        <div className="relative inline-block">
            <button
                type="button"
                className="inline-flex items-center"
                onClick={toggleDropdown}
                ref={btnRef}
            >
                {children}
                {
                    !isOpen
                    ? <RiArrowDropDownLine />
                    : <RiArrowDropUpLine />
                }
            </button>

            {isOpen &&
                <div className="origin-top-right absolute right-0 mt-2 w-44 rounded-lg shadow-lg bg-white ring-1 ring-black">
                    <ul role="menu" aria-orientation="vertical" aria-labelledby={`${children}-menu`}>
                        {items.map((item) => {
                            const { path, label} = item
                            return (
                                <li
                                    className={`cursor-pointer block px-4 py-2 text-sm text-gray-400 hover:bg-gray-100 transition-opacity duration-300`}
                                    onClick={(e) => {
                                        navigate(path) 
                                        toggleDropdown();
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