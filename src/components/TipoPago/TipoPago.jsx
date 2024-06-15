export default function TipoPago() {
    return (
        <div className="tipoPago">
            <button>X</button>
            <label>
                Tipo de Pago
                <select>
                    <option value="">Efectivo</option>
                    <option value="">Documento por cobrar</option>
                    <option value="">Verbal</option>
                </select>
            </label>
            <label>
                Bs
                <input type="text" />
            </label>
            <label>
                <input type="checkbox" /> Respaldo
            </label>
        </div>
    );
}