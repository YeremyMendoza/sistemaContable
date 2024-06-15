import DoblePartida from "../../../components/DoblePartida/DoblePartida";

export default function LibroMayor() {
    return (
        <div className="libroMayor">
            <div className="cuerpo">
                <DoblePartida titulos={["tipo", "dia", "detalle", "debito", "credito", "saldo"]} />
            </div>
            <div className="totalesSaldos">
                <div className="totales">
                    Totales
                    <input type="text" />
                    <input type="text" />
                </div>
                <div className="saldos">
                    Saldos
                    <input type="text" />
                    <input type="text" />
                </div>
            </div>
        </div>
    );
}