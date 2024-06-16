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

export function App(){
  return(
    <>
      <BarraUsuario />
      <div className="contenido">
        <BarraNavegacion />
        <div className="vista">
          <Navegacion />
          {/* <FiltroBusqueda /> */}
          {/* <FormatoComprobante /> */}
          {/* <LibroMayor /> */}
          {/* <LibroDiario /> */}
          {/* <Ventas /> */}
          <Compras />
        </div>
      </div>
    </>
  );
}

export default App
