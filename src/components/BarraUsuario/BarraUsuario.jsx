import Logo from "../Logo/Logo";
import Notificaciones from "../Notificaciones/Notificaciones";
import DatosUsuario from "../DatosUsuario/DatosUsuario";

export default function BarraUsuario(){
    return (
      <div className="barraUsuario">
        <Logo />
        <Notificaciones />
        <DatosUsuario />
      </div>
    );
  }