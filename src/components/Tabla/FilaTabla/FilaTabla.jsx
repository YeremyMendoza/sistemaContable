export default function FilaTabla({ esTitulo, campos }) {
    return <tr>
        { esTitulo ? 
        campos.map((campo, index) => <td key={index} className={campo.toLowerCase()}>{campo}</td>) 
        :campos.map((campo, index) => <td key={index}>{campo}</td>)}
    </tr>;
}