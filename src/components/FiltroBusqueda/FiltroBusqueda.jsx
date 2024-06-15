export default function FiltroBusqueda() {
    return (
        <div className="filtroBusqueda">
            <label>
                Mes
                <select name="select">
                    <option value="value1">Value 1</option>
                    <option value="value2" selected>Value 2</option>
                    <option value="value3">Value 3</option>
                </select>
            </label>
            <label>
                Comprobante
                <select name="select">
                    <option value="value1" selected>Value 1</option>
                    <option value="value2">Value 2</option>
                    <option value="value3">Value 3</option>
                </select>
            </label>
            <label>
                Nro. Comprobante
                <input type="text" />
            </label>
            <label>
            </label>
            <button>Buscar Comprobante</button>
            <button>+</button>
        </div>
    );
}