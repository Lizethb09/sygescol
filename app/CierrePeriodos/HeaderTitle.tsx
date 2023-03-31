import React from "react";

const HeaderTitle = () => {
  return (
    <>
      {/* <div className="mx-44 mt-3 shadow-card max-w-6xl flex flex-col rounded-xl bg-gray-100 bg-clip-border border-double border-4 border-indigo-600 shadow-xl"></div> */}
      <div className="text-secondary flex-1 p-1">
        <div className="mb-5 text-center font-bold font-regular relative block w-full rounded-lg bg-blue-900 p-4 text-xl leading-5 text-white opacity-100">
          <h1>CIERRE DE PERIODOS</h1>
        </div>
        <p className="font-bold text-lg mb-2">
          Señor Coordinador Brahian Orozco:
        </p>
        <p className="text-justify font-semibold mb-4">
          En el proceso de cierre del 2 periodo académico, el sistema a
          detectado pendientes de registro en los módulos de los docentes a su
          cargo, los cuales describiremos a continuación de manera detallada,
          para que, por favor, se proceda con la autorización de los permisos
          requeridos por cada profesor, los cuales verá relacionados en esta
          interfaz:
        </p>
      </div>
    </>
  );
};

export default HeaderTitle;
