import { ParallaxBackground } from "../components/sections/ParallaxBackGround"
import { Example } from "../components/sections/Example"
import { Hero } from "../components/sections/Hero"
import { useNavigation } from "react-router-dom"
import { Loader } from "../components/loaders/loader"



export function LandingPage() {
    const navigation = useNavigation()
    if (navigation.state === 'loading') return <Loader />
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