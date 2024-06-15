export default function Producto() {
    return (
        <div className="producto">
            <div className="accion">
                <button>X</button>
            </div>
            <div className="articulo">
                <p>Nombre producto</p>
            </div>
            <div className="cantidad">
                <input type="text" />
            </div>
            <div className="precio">
                <input type="text" />
            </div>
            <div className="subtotal">
                <input type="text" readOnly />
            </div>
        </div>
    );
}