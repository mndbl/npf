import { useState } from "react"
import { Footer } from "../navs/Footer"
import { LandingHeader } from "../headers/LandingHeader"
import { Hero } from "../sections/Hero"
import { Outlet } from "react-router-dom"

export function LandingWrap(params) {
    const [userAuth, setUserAuth] = useState(null)
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