import BotonIcono from "../BotonIcono/BotonIcono";

export default function SumarioBotones({nombre, elementos}){
    return (
      <details className="boton">
        <summary>{nombre}</summary>
        {elementos.map((boton, index) => <BotonIcono key={index} nombre={boton}/>)}
      </details>
    );
  }