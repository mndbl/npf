import { NavLink } from "react-router-dom";

export function SidebarSubItem({ subItem }) {
    return (
        <li >
            <NavLink to={subItem.path} className={({ isActive }) =>
                !isActive ? "relative capitalize flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6" :
                    "relative capitalize flex flex-row items-center h-11 focus:outline-none bg-blue-800 dark:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
            }
            >
                <span className="inline-flex justify-center items-center ml-4">
                    {subItem.icon}
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">{subItem.title}</span>
            </NavLink>
        </li>
    )
}