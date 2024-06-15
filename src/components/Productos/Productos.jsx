import Producto from "../Producto/Producto";

export default function Productos() {
    return (
        <div className="productos">
            <div className="titulo">
                <p className="accion">Accion</p>
                <p className="articulo">Articulo</p>
                <p className="cantidad">Cantidad</p>
                <p className="precio">Precio</p>
                <p className="subtotal">Subtotal</p>
            </div>
            <Producto />
            <Producto />
            <Producto />
            <Producto />
            <Producto />
            <Producto />
            <Producto />
            <Producto />
            <Producto />
            <Producto />
        </div>
    );
}