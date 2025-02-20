import React, { useState } from "react";
import styles from '../styles/Sidebar.module.css';

const SidebarUser: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openSubmenus, setOpenSubmenus] = useState<{ [key: string]: boolean }>({});

    // Función para alternar submenús
    const toggleSubMenu = (id: string) => {
        setOpenSubmenus(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <div
            className={`${styles['menu-container']} ${isOpen ? styles.open : ''}`}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            {isOpen && (
                <div className={styles['menu-content']}>
                    {/* Título del menú */}
                    <h5 className={styles['menu-title']}>Menú</h5>

                    {/* Lista de opciones */}
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {/* Inicio */}
                        <li>
                            <a href="/USindex" className={styles['menu-item']}>
                                Inicio
                            </a>
                        </li>

                        {/* Listas */}
                        <li>
                            <button
                                onClick={() => toggleSubMenu('listas')}
                                className={styles['menu-button']}
                            >
                                Listas ▾
                            </button>
                            {openSubmenus['listas'] && (
                                <ul className={styles['submenu']}>
                                    <li>
                                        <a href="../listas/herramientas" className={styles['submenu-item']}>
                                            Herramientas
                                        </a>
                                    </li>
                                    <li>
                                        <a href="../listas/activos" className={styles['submenu-item']}>
                                            Activos
                                        </a>
                                    </li>
                                    <li>
                                        <a href="../listas/consumibles" className={styles['submenu-item']}>
                                            Consumibles
                                        </a>
                                    </li>
                                </ul>
                            )}
                        </li>

                        {/* Agregar Producto */}
                        <li>
                            <button
                                onClick={() => toggleSubMenu('agregarProducto')}
                                className={styles['menu-button']}
                            >
                                Agregar Producto ▾
                            </button>
                            {openSubmenus['agregarProducto'] && (
                                <ul className={styles['submenu']}>
                                    <li>
                                        <a href="../listas/herramientas" className={styles['submenu-item']}>
                                            Herramientas
                                        </a>
                                    </li>
                                    <li>
                                        <a href="../listas/activos" className={styles['submenu-item']}>
                                            Activos
                                        </a>
                                    </li>
                                    <li>
                                        <a href="../listas/consumibles" className={styles['submenu-item']}>
                                            Consumibles
                                        </a>
                                    </li>
                                </ul>
                            )}
                        </li>

                        {/* Actualizar Producto */}
                        <li>
                            <button
                                onClick={() => toggleSubMenu('actualizarProducto')}
                                className={styles['menu-button']}
                            >
                                Actualizar Producto ▾
                            </button>
                            {openSubmenus['actualizarProducto'] && (
                                <ul className={styles['submenu']}>
                                    <li>
                                        <a href="../listas/herramientas" className={styles['submenu-item']}>
                                            Herramientas
                                        </a>
                                    </li>
                                    <li>
                                        <a href="../listas/activos" className={styles['submenu-item']}>
                                            Activos
                                        </a>
                                    </li>
                                    <li>
                                        <a href="../listas/consumibles" className={styles['submenu-item']}>
                                            Consumibles
                                        </a>
                                    </li>
                                </ul>
                            )}
                        </li>

                        {/* Perfil de Usuario */}
                        <li>
                            <a href="../perfiluser" className={styles['menu-item']}>
                                Perfil de Usuario
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SidebarUser;