export default function Clientes() {
    return (
        <div className="clientes">
            <div className="busquedaCliente">
                <label>Cliente: <input type=" text" /></label>
                <label>Numero: <input type=" text" /></label>
                <label>NIIT/CI: <input type=" text" /></label>
                <label>Estado:
                    <select>
                        <option value="solvente">Solvente</option>
                        <option value="mora">Mora</option>
                        <option value="riesgo">Riesgo</option>
                    </select>
                </label>
                <button className="">Buscar</button>
                <button className="c-success">+</button>
            </div>
            <div className="listarClientes">
                <div className="titulo">
                    <spam className="cod">Cod</spam>
                    <spam className="nombre">Cliente</spam>
                    <spam className="nit">NIT/CI</spam>
                    <spam className="telefono">Telefono</spam>
                    <spam className="estado">Estado</spam>
                </div>
                <div className="cliente">
                    <spam className="cod">Cod</spam>
                    <spam className="nombre">Cliente</spam>
                    <spam className="nit">NIT/CI</spam>
                    <spam className="telefono">Telefono</spam>
                    <spam className="estado">Estado</spam>
                </div>
            </div>
        </div>
    );
}