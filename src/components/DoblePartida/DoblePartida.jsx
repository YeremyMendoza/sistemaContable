import FilaTabla from "../Tabla/FilaTabla/FilaTabla";

export default function DoblePartida({ titulos }) {
    return (
        <table border="1">
            <thead>
                <FilaTabla campos={titulos} esTitulo={true} />
            </thead>
            <tbody>
                <FilaTabla campos={["INGRESO", "20", "Glosa de la cuenta", "1000", "", "1000"]} />
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="2">Total</td>
                    <td>100</td>
                    <td>100</td>
                </tr>
            </tfoot>
        </table>
    );
}