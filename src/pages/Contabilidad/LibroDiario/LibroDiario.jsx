import DoblePartida from "../../../components/DoblePartida/DoblePartida";

export default function LibroDiario() {
    return (
        <div className="libroDiario">
            <div className="cuerpo">
                <DoblePartida titulos={["FECHA", "CUENTA", "DEBE", "HABER"]} />
            </div>
        </div>
    );
}