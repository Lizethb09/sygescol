"use client";
import React, { useEffect } from "react";
import getDataParametro from "../../../../../utils/GetParametro";

export default function Par109() {
  const [data, setData] = React.useState({} as any);

  console.log(data);

  useEffect(() => {
    const GetInfo = async () => {
      const resultado = await getDataParametro(109, 2);
      setData(resultado);
    };
    GetInfo();
  }, []);

  return (
    <div>
      {/* <Parametro1 />
      <CardsPreguntas /> */}
      {data?.infoParametros?.conf_nom_ver}
    </div>
  );
}