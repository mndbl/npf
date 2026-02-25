export function Hero(params) {
    return (
        <section id="website-info" className="flex flex-wrap items-center font-sans px-4 mx-auto w-full lg:max-w-screen-lg sm:max-w-screen-sm md:max-w-screen-md pb-20">
            {/* Column-1 */}
            <div className="px-3 w-full lg:w-2/5">
                <div className="mx-auto mb-8 max-w-lg text-center lg:mx-0 lg:max-w-md lg:text-left">
                    <h2 className="mb-4 text-3xl font-bold text-left lg:text-5xl">
                        ¿Dónde está
                        <span className="text-5xl text-green-500 leading-relaxeds">
                            mi dinero?
                        </span>
                        Descúbrelo ahora
                    </h2>
                    <p className="visible mx-0 mt-3 mb-0 text-sm leading-relaxed text-left text-slate-400">
                        Controla, analiza y entiende exactamente en qué estás gastando tu dinero con WIMM
                    </p>
                </div>
                <div className="text-center lg:text-left">
                    <a className="block visible py-4 px-8 mb-4 text-xs font-semibold tracking-wide leading-none text-white bg-green-500 rounded cursor-pointer sm:mr-3 sm:mb-0 sm:inline-block hover:bg-green-600 transition">
                        Comenzar Ahora
                    </a>
                    <a className="block visible py-4 px-8 text-xs font-semibold leading-none bg-white rounded border border-solid cursor-pointer sm:inline-block border-slate-200 text-slate-500 hover:bg-slate-50 transition">
                        Ver Características
                    </a>
                </div>
            </div>
            {/* Column-2 */}
            <div className="px-3 mb-12 w-full lg:mb-0 lg:w-3/5">
                {/* Illustrations Container */}
                <div className="flex justify-center items-center">
                    <svg
                        className="block max-w-full h-auto align-middle lg:max-w-lg"
                        xmlns="http://www.w3.org/2000/svg"
                        height={400}
                        viewBox="0 0 200 200"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                        {/* Money Wallet Icon */}
                        <g>
                            {/* Wallet */}
                            <rect x="30" y="50" width="140" height="100" rx="8" fill="#10b981" opacity="0.2"/>
                            <rect x="30" y="50" width="140" height="100" rx="8" fill="none" stroke="#10b981" strokeWidth="2"/>
                            
                            {/* Cards inside */}
                            <rect x="45" y="65" width="50" height="32" rx="4" fill="#10b981"/>
                            <rect x="105" y="65" width="50" height="32" rx="4" fill="#059669"/>
                            
                            {/* Dollar sign */}
                            <text x="100" y="120" fontSize="24" fill="#10b981" fontWeight="bold" textAnchor="middle">$</text>
                        </g>
                        
                        {/* Pie Chart */}
                        <g transform="translate(100, 160)">
                            <circle cx="0" cy="0" r="18" fill="none" stroke="#3b82f6" strokeWidth="6" strokeDasharray="28.27 113.1" transform="rotate(-90)"/>
                            <circle cx="0" cy="0" r="18" fill="none" stroke="#10b981" strokeWidth="6" strokeDasharray="28.27 113.1" transform="rotate(19)"/>
                            <circle cx="0" cy="0" r="18" fill="none" stroke="#f59e0b" strokeWidth="6" strokeDasharray="56.55 113.1" transform="rotate(90)"/>
                        </g>
                        <polygon
                            points="409.33502 185.02664 418.23482 225.05637 366.08305 216.39672 387.33502 178.53845 409.33502 185.02664"
                            fill="#a0616a"
                        />
                    </svg>
                </div>
            </div>
        </section>
    )
}