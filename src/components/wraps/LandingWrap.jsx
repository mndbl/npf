import { Footer } from "../navs/Footer"
import { LandingHeader } from "../headers/LandingHeader"
import { Outlet, useLoaderData } from "react-router-dom"
import localforage from "localforage"

export async function loader() {
    const userAuth = await localforage.getItem('userAuth')
    return { userAuth }
}

export function LandingWrap() {
    const { userAuth } = useLoaderData()
    return (

        <>
            {/* component */}
            {/* Gogole Fonts */}
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        '\n    section {\n        font-family: "Poppins", sans-serif;\n    }\n'
                }}
            />
            {/* Page Main */}
            <main className="flex flex-col items-center justify-center mt-32">
                <LandingHeader userAuth={userAuth} />
                <Outlet />
            </main>
            {/* Footer */}
            <Footer />
        </>
    )
}