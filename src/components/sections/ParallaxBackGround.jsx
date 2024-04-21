export function ParallaxBackground(params) {
    return (
        <section id="paralax-background"
            className="flex flex-col w-full h-[500px] bg-cover bg-fixed bg-center justify-center items-center"
            style={{
                backgroundImage:
                    "url(https://images.unsplash.com/photo-1642427749670-f20e2e76ed8c?auto=format&fit=crop&w=880&q=80)"
            }}
        >
            <h1 className="text-white text-5xl font-semibold mt-20 mb-10">
                This is Parallax Effect
            </h1>
            <span className="text-center font-bold my-20 text-white/90">
                <a
                    href="https://egoistdeveloper.github.io/twcss-to-sass-playground/"
                    target="_blank"
                    className="text-white/90 hover:text-white"
                >
                    Convetert to SASS
                </a>
                <hr className="my-4" />
                <a
                    href="https://unsplash.com/photos/8Pm_A-OHJGg"
                    target="_blank"
                    className="text-white/90 hover:text-white"
                >
                    Image Source
                </a>
                <hr className="my-4" />
                <p>
                    <a
                        href="https://github.com/EgoistDeveloper/my-tailwind-components/blob/main/src/templates/parallax-landing-page.html"
                        target="_blank"
                        className="text-white/90 hover:text-white"
                    >
                        Source Code
                    </a>
                    |
                    <a
                        href="https://egoistdeveloper.github.io/my-tailwind-components/./src/templates/parallax-landing-page.html"
                        target="_blank"
                        className="text-white/90 hover:text-white"
                    >
                        Full Preview
                    </a>
                </p>
            </span>
        </section>
    )
}