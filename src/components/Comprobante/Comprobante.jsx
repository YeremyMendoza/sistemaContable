export default function Comprobante(){
    return (
      <div className="comprobante">
              <div className="cabecera">
                <p className="tipo">Ingreso</p>
                <div className="informacion">
                  <p className="numero">Nro. 1</p>
                  <p className="fecha">05/05/2024</p>
                </div>
              </div>
              <div className="cuerpo">
                <table border="1">
                  <thead>
                    <tr>
                      <td>Cuentas Afectadas</td>
                      <td>debe</td>
                      <td>Haber</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Caja M/N</td>
                      <td>1000</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Ventas</td>
                      <td></td>
                      <td>1000</td>
                    </tr>
                  </tbody>
                </table>
                <p className="glosa">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium ad odio eum, necessitatibus porro doloribus laboriosam voluptatem </p>
              </div>
              <div className="footer">
              </div>
            </div>
    );
  }