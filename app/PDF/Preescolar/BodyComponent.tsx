"use client";
import { Document, Page, PDFViewer, Text, View } from "@react-pdf/renderer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Asistencia from "./Estructura/Asistencia";
import Cabecera from "./Estructura/Cabecera";
import Comportamiento from "./Estructura/Comportamiento";
import Dimension from "./Estructura/Dimension";
import Firmas from "./Estructura/Firmas";
import PersonalInfo from "./Estructura/PersonalInfo";

function BodyComponent() {
  const [data, setData] = useState(null as any);
  const [dataInfo, setInfo] = useState(null as any);
  const [firma, setFirma] = useState(null as any);

  const GetInfoBase = () => {
    setData(JSON.parse(localStorage?.datosColegio || {}));
    setFirma(JSON.parse(localStorage?.datosUsu)?.firma);
  };
  const GetDataStudents = async () => {
    axios
      .get(
        `/api/PDF/Boletines/Preescolar/GetStudents?c=${
          localStorage.colegio
        }&g=${JSON.parse(localStorage?.Grupo)?.grupo_id}`
      )
      .then((res) => {
        if (res.status == 200) {
          // alert("Información consultada con exito");
          setInfo(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Existe un error al consultar la información");
      });
  };
  useEffect(() => {
    GetInfoBase();
    GetDataStudents();
  }, []);
  return (
    <>
      <div className="uppercase text-center font-bold lg:text-2xl py-4 bg-blue-900 text-white rounded-b-2xl">
        Impresión de boletines de Preescolar
      </div>
      <div className="container mx-auto bg-light-blue-200 w-3/5 rounded-md mt-5">
        <div className="text-2xl font-bold text-center p-2">
          Seleccione el periodo al cual desea generar boletines
        </div>
      </div>
      {/* {(data && dataInfo && (
        <PDFViewer style={{ width: "100%", height: "100Vh" }}>
          <Document>
            {dataInfo?.estudiante.map((inf: any, key: number) => {
              return (
                <Page size={"A4"} key={key}>
                  <View
                    style={
                      {
                        border: "2px solid black",
                        height: "96%",
                        width: "90%",
                        margin: "auto",
                        display: "block",
                      } as any
                    }
                  >
                    <Cabecera data={data} />
                    <PersonalInfo data={inf} grup={dataInfo?.grupo} />
                    <Dimension dimensiones={dataInfo?.cga} data={inf} />
                    <Comportamiento data={inf} />
                    <Asistencia data={inf.asistencia} />
                    <Firmas firma={firma} />
                  </View>
                </Page>
              );
            })}
          </Document>
        </PDFViewer>
      )) ||
        "Cargando Información del Grupo"} */}
    </>
  );
}

export default BodyComponent;
