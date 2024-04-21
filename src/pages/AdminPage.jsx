import { Outlet, redirect, useLoaderData } from "react-router-dom";
import { DashboardHeader } from "../components/headers/DashboardHeader";
import { Sidebar } from "../components/navs/Sidebar";
import { useState } from "react";
import localforage from "localforage";
export async function loader() {
    const userAuth = await localforage.getItem('userAuth')
    if (userAuth.success === false || userAuth.username === '') return redirect('/login')
    return { userAuth }
}
export function AdminPage() {
    const { userAuth } = useLoaderData()
    const [theme, setTheme] = useState('dark')
    const toggleTheme = (theme) => setTheme((prevTheme) => prevTheme === 'dark' ? 'light' : 'dark')
    return (
        <div>
            <div
                className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
                {/* <!-- Header --> */}
                <DashboardHeader theme={theme} toggleTheme={toggleTheme} userAuth={userAuth} />
                {/* <!-- ./Header --> */}
                <div className="h-full ml-14 mt-14 mb-10 md:ml-64">

                    {/* <!-- Sidebar --> */}
                    <Sidebar />
                    {/* <!-- ./Sidebar --> */}

                    <Outlet />
                </div>
            </div>
        </div >
    )
}