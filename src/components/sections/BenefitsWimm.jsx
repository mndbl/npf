export function BenefitsWimm() {
    return (
        <section id="benefits" className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">
                    Por qué elegir WIMM
                </h2>
                <p className="text-center text-slate-600 mb-16 text-lg">
                    Descubre cómo miles de personas han tomado control de sus finanzas
                </p>
                
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Benefit 1 */}
                    <div className="flex gap-6">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                                <span className="text-xl">✓</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">
                                Responde la pregunta que todos hacen
                            </h3>
                            <p className="text-slate-600">
                                "¿Dónde está mi dinero?" Finalmente tendrás una respuesta clara y detallada sobre cada peso que gastas.
                            </p>
                        </div>
                    </div>
                    
                    {/* Benefit 2 */}
                    <div className="flex gap-6">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                                <span className="text-xl">✓</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">
                                Ahorra tiempo y dinero
                            </h3>
                            <p className="text-slate-600">
                                Automatiza el registro de tus transacciones y identifica oportunidades de ahorro en minutos.
                            </p>
                        </div>
                    </div>
                    
                    {/* Benefit 3 */}
                    <div className="flex gap-6">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                                <span className="text-xl">✓</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">
                                Toma mejores decisiones
                            </h3>
                            <p className="text-slate-600">
                                Con datos visuales claros, podrás identificar patrones de gasto y tomar mejores decisiones financieras.
                            </p>
                        </div>
                    </div>
                    
                    {/* Benefit 4 */}
                    <div className="flex gap-6">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                                <span className="text-xl">✓</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">
                                Alcanza tus metas financieras
                            </h3>
                            <p className="text-slate-600">
                                Planifica mejor, presupuesta con precisión y alcanza tus objetivos de ahorro más rápido.
                            </p>
                        </div>
                    </div>
                    
                    {/* Benefit 5 */}
                    <div className="flex gap-6">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                                <span className="text-xl">✓</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">
                                Privacidad garantizada
                            </h3>
                            <p className="text-slate-600">
                                Tus datos financieros son encriptados y nunca serán compartidos con terceros.
                            </p>
                        </div>
                    </div>
                    
                    {/* Benefit 6 */}
                    <div className="flex gap-6">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                                <span className="text-xl">✓</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">
                                Soporte dedicado 24/7
                            </h3>
                            <p className="text-slate-600">
                                Nuestro equipo está disponible para ayudarte en cualquier momento que lo necesites.
                            </p>
                        </div>
                    </div>
                </div>
                
                {/* Stats Section */}
                <div className="grid md:grid-cols-3 gap-8 mt-20 pt-12 border-t">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-green-600 mb-2">50K+</div>
                        <p className="text-slate-600">Usuarios activos</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-green-600 mb-2">$10M+</div>
                        <p className="text-slate-600">Monto rastreado</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-green-600 mb-2">4.9★</div>
                        <p className="text-slate-600">Calificación promedio</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
