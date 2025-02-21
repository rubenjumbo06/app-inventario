import React from "react";

const EditarButton = ({ tabla }: { tabla: string }) => {
  const handleEditar = () => {
    sessionStorage.setItem("tabla", tabla);
    window.location.href = "/agregar";
  };

  return (
    <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={handleEditar}>
      Editar
    </button>
  );
};

export default EditarButton;