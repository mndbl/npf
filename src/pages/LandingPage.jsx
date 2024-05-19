import { ParallaxBackground } from "../components/sections/ParallaxBackGround"
import { Example } from "../components/sections/Example"
import { Hero } from "../components/sections/Hero"



export function LandingPage() {
    return (
        <>
            {/* Hero */}
            <Hero/>
            {/* Parallax Background */}
            <ParallaxBackground />
            {/* Content */}
            <Example />

        </>

    )
}