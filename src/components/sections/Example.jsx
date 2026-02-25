export function Example(params) {
    return (
        <section id="features" className="py-20 px-4 bg-slate-50">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-4 text-slate-900">
                    Características de WIMM
                </h1>
                <p className="text-center text-slate-600 mb-16 text-lg">
                    Todo lo que necesitas para entender y controlar tu dinero
                </p>
                
                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
                        <div className="text-4xl mb-4">💰</div>
                        <h3 className="text-xl font-bold mb-3 text-slate-900">Registro de Gastos</h3>
                        <p className="text-slate-600">
                            Registra todos tus gastos de forma rápida y sencilla. Categoriza automáticamente tu dinero.
                        </p>
                    </div>
                    
                    {/* Feature 2 */}
                    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
                        <div className="text-4xl mb-4">📊</div>
                        <h3 className="text-xl font-bold mb-3 text-slate-900">Análisis Visuales</h3>
                        <p className="text-slate-600">
                            Gráficos intuitivos que te muestran a dónde va tu dinero con piezas visuales claras.
                        </p>
                    </div>
                    
                    {/* Feature 3 */}
                    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
                        <div className="text-4xl mb-4">📱</div>
                        <h3 className="text-xl font-bold mb-3 text-slate-900">Acceso Desde Cualquier Lugar</h3>
                        <p className="text-slate-600">
                            Accede a tu información desde cualquier dispositivo, en cualquier momento, en cualquier lugar.
                        </p>
                    </div>
                    
                    {/* Feature 4 */}
                    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
                        <div className="text-4xl mb-4">🏷️</div>
                        <h3 className="text-xl font-bold mb-3 text-slate-900">Categorías Inteligentes</h3>
                        <p className="text-slate-600">
                            Categoriza tus transacciones automáticamente o crea las tuyas propias para mejor control.
                        </p>
                    </div>
                    
                    {/* Feature 5 */}
                    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
                        <div className="text-4xl mb-4">📈</div>
                        <h3 className="text-xl font-bold mb-3 text-slate-900">Reportes Detallados</h3>
                        <p className="text-slate-600">
                            Obtén reportes completos de tus gastos por período, categoría y más para planificar mejor.
                        </p>
                    </div>
                    
                    {/* Feature 6 */}
                    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
                        <div className="text-4xl mb-4">🔒</div>
                        <h3 className="text-xl font-bold mb-3 text-slate-900">Seguridad Garantizada</h3>
                        <p className="text-slate-600">
                            Tus datos financieros están protegidos con encriptación de nivel empresarial.
                        </p>
                    </div>
                </div>
                
                {/* Call to Action */}
                <div className="mt-16 text-center">
                    <h2 className="text-3xl font-bold mb-6 text-slate-900">
                        ¿Listo para descubrir dónde está tu dinero?
                    </h2>
                    <button className="px-10 py-4 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition text-lg">
                        Comenzar Gratis Ahora
                    </button>
                </div>
            </div>
        </section>
    )
}