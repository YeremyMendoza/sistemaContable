import DoblePartida from "../../../components/DoblePartida/DoblePartida";

export default function FormatoComprobante() {
    return (
        <div className="formatoComprobante">
            <div className="cabecera">
                <div className="tipo">
                    COMPROBANTE INGRESO
                </div>
                <div className="">
                    <div>Cochabamba, 12 de diciembre de 202x</div>
                    <div className="nroComprobante"><strong>N° 04</strong></div>
                </div>
                <div className="">
                    <div><strong>Recibido de:</strong> </div>
                    <div>12/02/2024</div>
                </div>
                <div className="">
                    <div><strong>Literal:</strong> Sesenta y cuatro mil terscientos sesenta y siete 82/00</div>
                    <div>64.367,82</div>
                </div>
                <div className="">
                    <div><strong>Concepto:</strong></div>
                    <div>
                        <label>
                            <input name="moneda" type="radio" />Bs
                        </label>
                        <label>
                            <input name="moneda" type="radio" />$us
                        </label>
                    </div>
                </div>
            </div>
            <div className="cuerpo">
                <DoblePartida titulos={["codigo", "cuenta", "debe", "haber"]} />
            </div>
        </div>
    );
}