import { LogoutButton } from "../buttons/LogoutButton";
import { ToggleThemeButton } from "../buttons/ToggleThemeButton";
import { SearchBar } from "../inputs/SearchBar";
import { UserAuthAvatar } from "../pictures/UserAuthAvatarAndInfo";

export function DashboardHeader({ theme, toggleTheme, userAuth }) {
    return (
        <section id="dashboard-header" className="fixed w-full flex items-center justify-between h-14 text-white z-10">
            <UserAuthAvatar userAuth={userAuth}/>
            <div className="flex flex-1 justify-between items-center h-14 bg-blue-800 dark:bg-gray-800 header-right">
                <div className="flex flex-grow"></div>
                <ul className="flex items-center">
                    <li>
                        <ToggleThemeButton theme={theme} toggleTheme={toggleTheme} />
                    </li>
                    <li>
                        <div className="block w-px h-6 mx-3 bg-gray-400 dark:bg-gray-700"></div>
                    </li>
                    <li>
                        <LogoutButton />
                    </li>
                </ul>
            </div>
        </section>
    )
}