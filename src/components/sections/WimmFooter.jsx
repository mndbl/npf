export function WimmFooter() {
    return (
        <footer className="bg-slate-900 text-white py-16">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* About WIMM */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            💰 WIMM
                        </h3>
                        <p className="text-slate-300 text-sm">
                            Where Is My Money - La solución completa para entender dónde va tu dinero y tomar control de tus finanzas personales.
                        </p>
                    </div>
                    
                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Enlaces Rápidos</h4>
                        <ul className="space-y-2 text-slate-300 text-sm">
                            <li><a href="/" className="hover:text-green-500 transition">Inicio</a></li>
                            <li><a href="#features" className="hover:text-green-500 transition">Características</a></li>
                            <li><a href="#" className="hover:text-green-500 transition">Precios</a></li>
                            <li><a href="#" className="hover:text-green-500 transition">Blog</a></li>
                        </ul>
                    </div>
                    
                    {/* Product */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Producto</h4>
                        <ul className="space-y-2 text-slate-300 text-sm">
                            <li><a href="#" className="hover:text-green-500 transition">Características</a></li>
                            <li><a href="#" className="hover:text-green-500 transition">Seguridad</a></li>
                            <li><a href="#" className="hover:text-green-500 transition">Integraciones</a></li>
                            <li><a href="#" className="hover:text-green-500 transition">API</a></li>
                        </ul>
                    </div>
                    
                    {/* Legal */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Legal</h4>
                        <ul className="space-y-2 text-slate-300 text-sm">
                            <li><a href="#" className="hover:text-green-500 transition">Privacidad</a></li>
                            <li><a href="#" className="hover:text-green-500 transition">Términos</a></li>
                            <li><a href="#" className="hover:text-green-500 transition">Cookies</a></li>
                            <li><a href="#" className="hover:text-green-500 transition">Contacto</a></li>
                        </ul>
                    </div>
                </div>
                
                {/* Divider */}
                <div className="border-t border-slate-700 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-slate-400 text-sm">
                            © 2024 WIMM - Where Is My Money. Todos los derechos reservados.
                        </p>
                        <div className="flex gap-6 mt-4 md:mt-0">
                            <a href="#" className="text-slate-400 hover:text-green-500 transition">
                                <span className="text-2xl">f</span>
                            </a>
                            <a href="#" className="text-slate-400 hover:text-green-500 transition">
                                <span className="text-2xl">𝕏</span>
                            </a>
                            <a href="#" className="text-slate-400 hover:text-green-500 transition">
                                <span className="text-2xl">in</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
