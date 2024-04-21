import { ParallaxBackground } from "../components/sections/ParallaxBackGround"
import { Example } from "../components/sections/Example"
import { Hero } from "../components/sections/Hero"

const menuItems = [
    {
        path: '/',
        name: 'Home',
    },
    {
        path: '/about',
        name: 'About',
    },
    {
        path: '/contact',
        name: 'Contact',
    },
    {
        path: '/blog',
        name: 'Blog',
    }
]

export function LandingPage() {
    return (
        <>
            {/* Hero */}
            <Hero />
            {/* Parallax Background */}
            <ParallaxBackground />
            {/* Content */}
            <Example />

        </>

    )
}