import { ParallaxBackground } from "../components/sections/ParallaxBackGround"
import { Example } from "../components/sections/Example"
import { Hero } from "../components/sections/Hero"
import { WimmFooter } from "../components/sections/WimmFooter"
import { BenefitsWimm } from "../components/sections/BenefitsWimm"
import { useNavigation } from "react-router-dom"
import { Loader } from "../components/loaders/loader"



export function LandingPage() {
    const navigation = useNavigation()
    if (navigation.state === 'loading') return <Loader />
    return (
        <>
            {/* WIMM Hero Section */}
            <Hero/>
            {/* Call to Action */}
            <ParallaxBackground />
            {/* Features */}
            <Example />
            {/* Benefits */}
            <BenefitsWimm />
            {/* Footer */}
            <WimmFooter />

        </>

    )
}