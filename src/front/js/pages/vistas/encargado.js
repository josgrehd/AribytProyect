import React, { useEffect, useState, useContext } from "react";
import { Context } from "../../store/appContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";

export const Encargado = () => {
<<<<<<< HEAD
  const { store, actions } = useContext(Context);
  const [resultJoin, setResultJoin] = useState([]);
  const [resultMecanico, setResultMecanido] = useState([]);
=======
  const [columnaProblemaMecanico, setColumnaProblema] = useState("");
  const [columnaHoraClasificadora, setColumnaHoraClasificadora] = useState("");
  const [columnaUsuarioClasificadora, setColumnaUsuarioClasificadora] = useState("");
>>>>>>> d5699cdd2659597719a73755fbb5eee432f4ca89

  const [turno, setTurno] = useState("");
  const [fecha, setFecha] = useState("");
  const [enviarFormulario, setFormulario] = useState(false);

  const sendDataEncargado = () => {
    fetch(process.env.BACKEND_URL + "/api/join", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        fecha: fecha,
        turno: turno,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        setResultJoin(result.clasificadora);
        setResultMecanido(result.mecanico);
        console.log("resultado " + resultJoin);
      })
<<<<<<< HEAD
      .catch((error) => console.log("error", error));
  };
  return (
    <>
      <Formik
        initialValues={{
          turno: "",
          fecha: "",
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          console.log("Formulario enviado");
          setFormulario(true);
          setTurno(valores.turno);
          setFecha(valores.fecha);
          setTimeout(() => setFormulario(false), 5000);
        }}
      >
        {() => (
          <Form className="formulario">
            <div>
              <label htmlFor="turno">Turno</label>
              <Field
                type="text"
                id="turno"
                name="turno"
                placeholder="escriba el turno"
                //onKeyUp={(e) => setProblema(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="fecha">Fecha</label>
              <Field
                type="text"
                id="fecha"
                name="fecha"
                placeholder="Escriba la fecha"
                //onKeyUp={(e) => setAccion(e.target.value)}
              />
            </div>
            <button type="submit" onClick={sendDataEncargado}>
              Enviar
            </button>
            {enviarFormulario && (
              <p className="exito">Formulario enviado con exito!</p>
            )}
          </Form>
        )}
      </Formik>
      <div className="container text-center p-5">
        <h1 className="p-2">Encargado</h1>
        <table className="table">
          <thead className="table-success">
            <tr>
              <th scope="col">hora clasificadora</th>
              <th scope="col">Email Clasificadora</th>
              <th scope="col">Fecha</th>
              <th scope="col">Cajas</th>
              <th scope="col">Articulo</th>
              <th scope="col">Lote</th>
              <th scope="col">Jaulas</th>
              <th scope="col">Pedido</th>
              <th scope="col">Personal</th>
              <th scope="col">problema Clasificadora</th>
              <th scope="col">Accion Clasificadora</th>
              <th scope="col">Tiempo</th>
              <th scope="col">Velocidad</th>
              <th scope="col">Gramos</th>
              <th scope="col">Hora Mecanico</th>
              <th scope="col">Email Mecanico</th>
              <th scope="col">Problema Mecanico</th>
              <th scope="col">Accion Mecanico</th>
            </tr>
          </thead>
          {resultJoin.map((item, index) => (
            <>
              <tbody key={index}>
                <tr>
                  <th scope="row">{item.horaClasificadora}</th>
                  <td>{item.usuarioClasificadora}</td>
                  <td>{item.fecha}</td>
                  <td>{item.cajas}</td>
                  <td>{item.articulo}</td>
                  <td>{item.lote}</td>
                  <td>{item.jaulas}</td>
                  <td>{item.pedido}</td>
                  <td>{item.personal}</td>
                  <td>{item.problemaClasificadora}</td>
                  <td>{item.accionClasificadora}</td>
                  <td>{item.tiempo}</td>
                  <td>{item.velocidad}</td>
                  <td>{item.gramos}</td>
                  <td>{item.horaDelMecanico}</td>
                  <td>{item.usuarioMecanico}</td>
                  <td>{item.problemaMecanico}</td>
                  <td>{item.accionMecanico}</td>
                </tr>
              </tbody>
            </>
          ))}
        </table>
      </div>
    </>
  );
};
=======
        .then((response) => response.json())
        .then((result) => {
          setResultJoin(result);
          console.log("resultado "+resultJoin);
        })
        .catch((error) => console.log("error", error));
      };
    return (
      <>
        <Formik
          initialValues={{
            turno: "",
            fecha: "",
          }}
          onSubmit={(valores, { resetForm }) => {
            resetForm();
            console.log("Formulario enviado");
            setFormulario(true);
            setTurno(valores.turno);
            setFecha(valores.fecha);
            setTimeout(() => setFormulario(false), 5000);
          }}
        >
          {() => (
            <Form className="formulario">
              <div>
                <label htmlFor="turno">Turno</label>
                <Field
                  type="text"
                  id="turno"
                  name="turno"
                  placeholder="escriba el turno"
                  onKeyUp={(e) => setTurno(e.target.value)}
                  //onKeyUp={(e) => setProblema(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="fecha">Fecha</label>
                <Field
                  type="text"
                  id="fecha"
                  name="fecha"
                  placeholder="Escriba la fecha"
                  onKeyUp={(e) => setFecha(e.target.value)}
                  //onKeyUp={(e) => setAccion(e.target.value)}
                />
              </div>
              <button type="submit" onClick={sendDataEncargado}>
                Enviar
              </button>
              {enviarFormulario && (
                <p className="exito">Formulario enviado con exito!</p>
              )}
            </Form>
          )}
        </Formik>
        <div className="container text-center p-5">
          <div>
            <button onClick={() => setColumnaProblema("visible")}>
              Problema Mecanico
            </button>
            <button onClick={() => setColumnaHoraClasificadora("visible")}>
              Hora Clasificadora
            </button>
            <button onClick={() => setColumnaUsuarioClasificadora("visible")}>
              Usuario Clasificadora
            </button>
          </div>
          <h1 className="p-2">Encargado</h1>
          <table className="table">
            <thead className="table-success">
              <tr>
                <th
                  scope="col"
                  className={
                    columnaHoraClasificadora === "visible"
                      ? "esconder"
                      : "visible"
                  }
                >
                  hora clasificadora
                </th>
                <th
                  scope="col"
                  className={
                    columnaUsuarioClasificadora === "visible"
                      ? "esconder"
                      : "visible"
                  }
                >
                  Usuario Clasificadora
                </th>
                <th scope="col">Fecha</th>
                <th scope="col">Cajas</th>
                <th scope="col">Articulo</th>
                <th scope="col">Lote</th>
                <th scope="col">Jaulas</th>
                <th scope="col">Pedido</th>
                <th scope="col">Personal</th>
                <th scope="col">problema Clasificadora</th>
                <th scope="col">Accion Clasificadora</th>
                <th scope="col">Tiempo</th>
                <th scope="col">Velocidad</th>
                <th scope="col">Gramos</th>
                <th scope="col">Hora Mecanico</th>
                <th scope="col">Email Mecanico</th>
                <th
                  scope="col"
                  className={
                    columnaProblemaMecanico === "visible"
                      ? "esconder"
                      : "visible"
                  }
                >
                  Problema Mecanico
                </th>
                <th scope="col">Accion Mecanico</th>
              </tr>
            </thead>
            {resultJoin.map((item, index) => (
              <>
                <tbody key={index}>
                  <tr>
                    <th
                      scope="row"
                      className={
                        columnaHoraClasificadora === "visible"
                          ? "esconder"
                          : "visible"
                      }
                    >
                      {item.horaClasificadora}
                    </th>
                    <td
                      className={
                        columnaUsuarioClasificadora === "visible"
                          ? "esconder"
                          : "visible"
                      }
                    >
                      {item.usuarioClasificadora}
                    </td>
                    <td>{item.fecha}</td>
                    <td>{item.cajas}</td>
                    <td>{item.articulo}</td>
                    <td>{item.lote}</td>
                    <td>{item.jaulas}</td>
                    <td>{item.pedido}</td>
                    <td>{item.personal}</td>
                    <td>{item.problemaClasificadora}</td>
                    <td>{item.accionClasificadora}</td>
                    <td>{item.tiempo}</td>
                    <td>{item.velocidad}</td>
                    <td>{item.gramos}</td>
                    <td>{item.horaDelMecanico}</td>
                    <td>{item.usuarioMecanico}</td>
                    <td
                      className={
                        columnaProblemaMecanico === "visible"
                          ? "esconder"
                          : "visible"
                      }
                    >
                      {item.problemaMecanico}
                    </td>
                    <td>{item.accionMecanico}</td>
                  </tr>
                </tbody>
              </>
            ))}
          </table>
        </div>
      </>
    );
}
>>>>>>> d5699cdd2659597719a73755fbb5eee432f4ca89
