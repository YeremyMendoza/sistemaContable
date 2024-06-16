export default function Compras() {
    return (
        <div className="compras">
            <DatosCompra />
            <div className="listaProductos">
                <div className="titulo">
                    <span className="accion">Accion</span>
                    <span className="articulo">Articulo</span>
                    <span className="cantidad">Cantidad</span>
                    <span className="precio">Precio</span>
                    <span className="subtotal">Subtotal</span>
                </div>
                <Producto />
            </div>
        </div>
    );
}

function DatosCompra() {
    return (
        <div className="datosCompra">
            <Campo campos={[
                { campo: "Nro.Factura", tipo: "text", estilos: "" },
                { campo: "Fecha", tipo: "text", estilos: "" }]} />
            <Campo campos={[
                { campo: "NIT/CI", tipo: "text", estilos: "" },
                { campo: "Codigo Autorizacion", tipo: "text", estilos: "" }]} />
            <Campo campos={[
                { campo: "Proveedor", tipo: "text", estilos: "w-80" }]} />
            <div className="tiposPago">
                <TipoPago />
                <TipoPago />
                <TipoPago />
            </div>
            <div className="btn-grupo">
                <button>Realizar Compra</button>
                <button>Realizar Venta</button>
            </div>
        </div>
    );
}

function Campo({ campos }) {
    return (
        <div className="campo">
            {campos.map(({ campo, tipo, estilos }, index) => <label key={index}>{campo}<input className={estilos} type={tipo} /></label>)}
        </div>
    );
}

function Producto() {
    return (
        <div className="producto">
            <div className="accion">
                <button className="c-success">+</button>
            </div>
            <div className="articulo">
                <p>Tipo Producto</p>
            </div>
            <div className="cantidad">
                <input type="text" />
            </div>
            <div className="precio">
                <input type="text" />
            </div>
            <div className="subtotal">
                <input type="text" />
            </div>
        </div>
    );
}
function TipoPago() {
    return (
        <div className="tipoPago">
            <button className="c-success">+</button>
            <label>Tipo de pago
                <select>
                    <option>Efectivo</option>
                    <option>Documento</option>
                    <option>Verbal</option>
                </select>
            </label>
            <label>Bs. <input type="text" /></label>
            <label><input type="checkbox" /> Respaldo</label>
        </div>
    );
}