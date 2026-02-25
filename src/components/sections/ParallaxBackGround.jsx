export function ParallaxBackground(params) {
    return (
        <section id="paralax-background"
            className="flex flex-col w-full h-[500px] bg-gradient-to-r from-green-500 to-emerald-600 justify-center items-center"
        >
            <h1 className="text-white text-5xl font-semibold mt-20 mb-10 text-center">
                Toma Control de tu Dinero
            </h1>
            <p className="text-center font-bold my-5 text-white/90 text-xl max-w-2xl px-4">
                Con WIMM, responderás de una vez por todas la pregunta: ¿Dónde está mi dinero?
            </p>
            <div className="flex gap-4 mt-10 flex-wrap justify-center">
                <button className="px-8 py-3 bg-white text-green-600 font-bold rounded hover:bg-slate-100 transition">
                    Registrarme Ahora
                </button>
                <button className="px-8 py-3 border-2 border-white text-white font-bold rounded hover:bg-white/10 transition">
                    Ver Demo
                </button>
            </div>
        </section>
    )
}