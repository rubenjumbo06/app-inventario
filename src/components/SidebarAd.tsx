import React, { useState } from "react";

const SidebarAd: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openSubmenus, setOpenSubmenus] = useState<{ [key: string]: boolean }>({});

    // Alternar submenús
    const toggleSubMenu = (id: string) => {
        setOpenSubmenus(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <div 
            className="fixed top-0 left-0 h-screen w-2 bg-transparent hover:w-64 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 shadow-lg overflow-hidden"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            {isOpen && (
                <div className="h-full p-4 overflow-y-auto">
                    <h5 className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menú</h5>

                    <ul className="space-y-2 font-medium">
                        <li>
                            <a href="../pages/index.astro" className="block p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                Inicio
                            </a>
                        </li>

                        {/* Listas */}
                        <li>
                            <button 
                                onClick={() => toggleSubMenu("listas")}
                                className="w-full flex justify-between p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                Listas ▾
                            </button>
                            {openSubmenus["listas"] && (
                                <ul className="pl-5 space-y-1">
                                    <li><a href="#" className="block p-2 hover:bg-gray-200">Herramientas</a></li>
                                    <li><a href="#" className="block p-2 hover:bg-gray-200">Activos</a></li>
                                    <li><a href="#" className="block p-2 hover:bg-gray-200">Consumibles</a></li>
                                    <li><a href="#" className="block p-2 hover:bg-gray-200">Empresa</a></li>
                                    <li><a href="#" className="block p-2 hover:bg-gray-200">Estados</a></li>
                                    <li><a href="#" className="block p-2 hover:bg-gray-200">Técnico</a></li>
                                    <li><a href="#" className="block p-2 hover:bg-gray-200">Usuarios</a></li>
                                    <li><a href="#" className="block p-2 hover:bg-gray-200">Utilidad</a></li>
                                    <li><a href="#" className="block p-2 hover:bg-gray-200">Registro de Salidas</a></li>

                                </ul>
                            )}
                        </li>

                        {/* Agregar Producto */}
                        <li>
                            <button 
                                onClick={() => toggleSubMenu("agregarProducto")}
                                className="w-full flex justify-between p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                Agregar Producto ▾
                            </button>
                            {openSubmenus["agregarProducto"] && (
                                <ul className="pl-5 space-y-1">
                                    <li><a href="#" className="block p-2 hover:bg-gray-200">Herramientas</a></li>
                                    <li><a href="#" className="block p-2 hover:bg-gray-200">Activos</a></li>
                                    <li><a href="#" className="block p-2 hover:bg-gray-200">Consumibles</a></li>
                                    <li><a href="#" className="block p-2 hover:bg-gray-200">Empresa</a></li>
                                    <li><a href="#" className="block p-2 hover:bg-gray-200">Estados</a></li>
                                    <li><a href="#" className="block p-2 hover:bg-gray-200">Técnico</a></li>
                                    <li><a href="#" className="block p-2 hover:bg-gray-200">Usuarios</a></li>
                                    <li><a href="#" className="block p-2 hover:bg-gray-200">Utilidad</a></li>
                                    <li><a href="#" className="block p-2 hover:bg-gray-200">Registro de Salidas</a></li>
                                </ul>
                            )}
                        </li>

                        {/* Actualizar Producto */}
                        <li>
                            <button 
                                onClick={() => toggleSubMenu("actualizarProducto")}
                                className="w-full flex justify-between p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                Actualizar Producto ▾
                            </button>
                            {openSubmenus["actualizarProducto"] && (
                                <ul className="pl-5 space-y-1">
                                    <li><a href="#" className="block p-2 hover:bg-gray-200">Herramientas</a></li>
                                    <li><a href="#" className="block p-2 hover:bg-gray-200">Activos</a></li>
                                    <li><a href="#" className="block p-2 hover:bg-gray-200">Consumibles</a></li>
                                    <li><a href="#" className="block p-2 hover:bg-gray-200">Empresa</a></li>
                                    <li><a href="#" className="block p-2 hover:bg-gray-200">Estados</a></li>
                                    <li><a href="#" className="block p-2 hover:bg-gray-200">Técnico</a></li>
                                    <li><a href="#" className="block p-2 hover:bg-gray-200">Usuarios</a></li>
                                    <li><a href="#" className="block p-2 hover:bg-gray-200">Utilidad</a></li>
                                    <li><a href="#" className="block p-2 hover:bg-gray-200">Registro de Salidas</a></li>
                                </ul>
                            )}
                        </li>

                        {/* Eliminar Producto */}
                        <li>
                            <button 
                                onClick={() => toggleSubMenu("eliminarProducto")}
                                className="w-full flex justify-between p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                Eliminar Producto ▾
                            </button>
                            {openSubmenus["eliminarProducto"] && (
                                <ul className="pl-5 space-y-1">
                                    <li><a href="#" className="block p-2 hover:bg-gray-200">Herramientas</a></li>
                                    <li><a href="#" className="block p-2 hover:bg-gray-200">Activos</a></li>
                                    <li><a href="#" className="block p-2 hover:bg-gray-200">Consumibles</a></li>
                                    <li><a href="#" className="block p-2 hover:bg-gray-200">Empresa</a></li>
                                    <li><a href="#" className="block p-2 hover:bg-gray-200">Estados</a></li>
                                    <li><a href="#" className="block p-2 hover:bg-gray-200">Técnico</a></li>
                                    <li><a href="#" className="block p-2 hover:bg-gray-200">Usuarios</a></li>
                                    <li><a href="#" className="block p-2 hover:bg-gray-200">Utilidad</a></li>
                                    <li><a href="#" className="block p-2 hover:bg-gray-200">Registro de Salidas</a></li>
                                </ul>
                            )}
                        </li>

                        {/* Generar Reportes */}
                        <li>
                            <button 
                                onClick={() => toggleSubMenu("generarReportes")}
                                className="w-full flex justify-between p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                Generar Reportes ▾
                            </button>
                            {openSubmenus["generarReportes"] && (
                                <ul className="pl-5 space-y-1">
                                    <li><a href="#" className="block p-2 hover:bg-gray-200">Reporte Herramientas</a></li>
                                    <li><a href="#" className="block p-2 hover:bg-gray-200">Reporte Activos</a></li>
                                    <li><a href="#" className="block p-2 hover:bg-gray-200">Reporte Consumibles</a></li>
                                    <li><a href="#" className="block p-2 hover:bg-gray-200">Reporte Registros de Salida</a></li>
                                </ul>
                            )}
                        </li>

                        {/* Perfil de Usuario */}
                        <li>
                            <a href="#" className="block p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                Perfil de Usuario
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SidebarAd;
