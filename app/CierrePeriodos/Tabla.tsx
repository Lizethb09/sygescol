import React from "react";
import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
export type Props = {
  data: any;
};
const Tabla = ({ data }: Props) => {
  const [open, setOpen] = useState({
    status: false,
    Estudiantes: [],
  });

  return (
    <>
      <Dialog
        className="overflow-y-scroll h-86"
        open={open?.status}
        handler={() => {
          setOpen({
            status: false,
            Estudiantes: [],
          });
        }}
      >
        <DialogHeader>Listado Estudiantes</DialogHeader>
        <DialogBody divider>
          <div className="max-h-[30vh] lg:max-h-[70vh]  overflow-auto">
            {open?.Estudiantes?.map((item: any, index: number) => {
              return (
                <p key={index}>
                  {item.Nombre} {item.Apellido}
                </p>
              );
            })}
          </div>
          {/* <p>Hugo Hernandez</p>
                          <p>Paco Jimenez</p>
                          <p>Luis Chaverra</p> */}
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => {
              setOpen({
                status: false,
                Estudiantes: [],
              });
            }}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          {/* <Button
                        variant="gradient"
                        color="green"
                        onClick={handleOpen}
                      >
                        <span>Confirm</span>
                      </Button> */}
        </DialogFooter>
      </Dialog>
      <table className=" border-collapse w-full ">
        <thead>
          <tr>
            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              ASIGNATURA
            </th>
            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              DOCENTE
            </th>
            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              DETALLE
            </th>
            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              ESTUDIANTES
            </th>
          </tr>
        </thead>
        <tbody className=" ">
          {data?.map((item: any, index: number) => (
            <tr
              key={index}
              className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
            >
              <td className="w-full lg:w-auto p-6 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0  px-2 py-1 text-xs font-bold uppercase">
                  ASIGNATURA
                </span>
                {item.Asignatura}
              </td>
              <td className="w-full lg:w-auto p-6 text-gray-800 text-center border border-b  block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0  px-2 py-1 text-xs font-bold uppercase">
                  DOCENTE
                </span>
                {item.docente}
              </td>
              <td className="w-full lg:w-auto p-6 text-gray-800  border border-b text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0  px-2 py-1 text-xs font-bold uppercase">
                  DETALLE
                </span>
                <span className="rounded text-white bg-red-200 py-1 px-3 text-xs font-bold">
                  {item.detalle}
                </span>
              </td>
              <td className="w-full lg:w-auto p-6 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0  px-2 py-1 text-xs font-bold uppercase">
                  ESTUDIANTES
                </span>
                {(item?.matri_id != 0 && (
                  <>
                    <Fragment>
                      <Button
                        onClick={() => {
                          setOpen({
                            status: true,
                            Estudiantes: item.estudiantes,
                          });
                        }}
                        variant="gradient"
                      >
                        Ver
                      </Button>
                    </Fragment>
                  </>
                )) || <>---</>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Tabla;
