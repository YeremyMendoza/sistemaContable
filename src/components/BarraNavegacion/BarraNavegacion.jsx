import SumarioBotones from "../SumarioBotones/SumarioBotones";

export default function BarraNavegacion(){
    let botones = {
      "Contabilidad":["comprobantes",
                      "libros","compras y ventas",
                      "cuentas por cobrar",
                      "estados financieros",
                      "plan de cunetas"],
      "Activos Fijos":["prueba1"],
      "Recursos Humanos":["prueba2"],
      "Produccion":["prueba3"],
      "Administracion":["prueba4"]};
    
    return (
    <div className="barraNavegacion">
        {Object.keys(botones).map((boton, index) => <SumarioBotones key={index} nombre={boton} elementos={botones[boton]} />)}
    </div>
    );
  }