import TiposPago from "../../../components/TiposPago/TiposPago";
import BusquedaProducto from "../../../components/BusquedaProducto/BusquedaProducto";
import Productos from "../../../components/Productos/Productos";

export default function Ventas() {
    return (
        <div className="ventas">
            <div className="detallesVenta">
                <div className="campoVenta">
                    <label>
                        Nro. Factura
                        <input type="text" />
                    </label>
                    <label>
                        Fecha
                        <input type="text" />
                    </label>
                </div>
                <div className="campoVenta">
                    <label>
                        NIT / CI
                        <input type="text" />
                    </label>
                    <label>
                        Señor(es)
                        <input type="text" />
                    </label>
                </div>
                <TiposPago />
                <div className="btn-grupo accionesVenta">
                    <button><i className=""></i>Realizar Venta</button>
                    <button><i className=""></i>Cancelar Venta</button>
                </div>
            </div>
            <div className="listadoProductos">
                <BusquedaProducto />
                <Productos />
                <div className="totales">
                    <hr />
                    <label>
                        Total
                        <input type="text" />
                    </label>
                </div>
            </div>
        </div>
    );
}