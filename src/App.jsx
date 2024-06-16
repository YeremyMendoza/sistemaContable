// import { useState } from 'react'
import BarraUsuario from './components/BarraUsuario/BarraUsuario';
import BarraNavegacion from './components/BarraNavegacion/BarraNavegacion';
import Navegacion from './components/Navegacion/Navegacion';
import './App.css'
import FormatoComprobante from './pages/Contabilidad/FormatoComprobante/FormatoComprobante';
import LibroMayor from './pages/Contabilidad/LibroMayor/LibroMayor';
import FiltroBusqueda from './components/FiltroBusqueda/FiltroBusqueda';
import LibroDiario from './pages/Contabilidad/LibroDiario/LibroDiario';
import Ventas from './pages/Comercial/Ventas/Ventas';
import Compras from './pages/Comercial/Compras/Compras';
import Clientes from './pages/Comercial/Clientes/Clientes';
import Comprobantes from './pages/Contabilidad/Comprobantes/Comprobantes';



export function App(){
  return(
    <>
      <BarraUsuario />
      <div className="contenido">
        <BarraNavegacion />
        <div className="vista">
          <Navegacion />
          {/* <FiltroBusqueda /> */}
          <Comprobantes />
          {/* <FormatoComprobante /> */}
          {/* <LibroMayor /> */}
          {/* <LibroDiario /> */}
          {/* <Ventas /> */}
          {/* <Compras /> */}
          {/* <Clientes /> */}
        </div>
      </div>
    </>
  );
}

export default App
