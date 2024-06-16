export default function Inventario() {
    return (
        <div className="inventario">
            <div className="busquedaProducto">
                <label>
                    Codigo Articulo
                    <input type="text" />
                </label>
                <label>
                    Codigo Articulo
                    <input type="text" />
                </label>
                <button>Buscar</button>
            </div>
            <div className="kardex">
                <table border="1">
                    <thead>
                        <tr>
                            <th scope="col" rowSpan="2">Fecha</th>
                            <th scope="col" rowSpan="2">Detalle</th>
                            <th scope="col" colSpan="3">Entradas</th>
                            <th scope="col" colSpan="3">Salidas</th>
                            <th scope="col" colSpan="3">Saldos</th>
                        </tr>
                        <tr>
                            <th scope="col">Cantidad</th>
                            <th scope="col">C/U</th>
                            <th scope="col">Importe</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">C/U</th>
                            <th scope="col">Importe</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">C/U</th>
                            <th scope="col">Importe</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>12/03/2024</td>
                            <td>Compra de mercaderia importador castaño</td>
                            <td>15</td>
                            <td>100</td>
                            <td>1500</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>15</td>
                            <td>100</td>
                            <td>1500</td>
                        </tr>
                        <tr>
                            <td>12/03/2024</td>
                            <td>Compra de mercaderia importador castaño</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>15</td>
                            <td>15</td>
                            <td>3500</td>
                            <td>15</td>
                            <td>100</td>
                            <td>1500</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}