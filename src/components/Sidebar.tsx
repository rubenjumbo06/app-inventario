import React, { useEffect, useState } from "react";
import SidebarTec from "./SidebarTec";
import SidebarAd from "./SidebarAd";
import SidebarUs from "./SidebarUser";

const Sidebar: React.FC = () => {
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const storedRole = sessionStorage.getItem("role");
    setRole(storedRole);
  }, []);

  if (!role) return null; // No mostrar nada si no hay rol guardado

  return (
    <>
      {role === "tecnico" && <SidebarTec />}
      {role === "admin" && <SidebarAd />}
      {role === "usuario" && <SidebarUs />}
    </>
  );
};

export default Sidebar;
