import Header from "../../components/header";
import '../../css/dashboard.css';

const readings = [
  { id: 1, title: 'Estação 1', temperatura: '25°C', umidade: '60%', pressao: '1013 hPa' },
  { id: 2, title: 'Estação 2', temperatura: '29°C', umidade: '67%', pressao: '1010 hPa' },
  { id: 3, title: 'Estação 3', temperatura: '27°C', umidade: '90%', pressao: '1080 hPa' },
];

export default function Dashboard() {
    return (
       <>
       <Header/>
       <section className="cards">
          {readings.map((item) => (
            <div key={item.id} className="card">
              <h2>{item.title}</h2>
              <p>Temperatura: {item.temperatura}</p>
              <p>Umidade: {item.umidade}</p>
              <p>Pressão: {item.pressao}</p>
            </div>
          ))}
       </section>
       <section className="graficos">
        <div className="grafico">
            <h2>Gráfico de Temperatura</h2>
            {/* Aqui você pode adicionar um gráfico usando uma biblioteca como Chart.js ou Recharts */}
        </div>

       </section>
       <section className="tabela">
        <h6>Leituras recentes</h6>
        <table>
          <thead>
            <tr>
              <th>Temperatura</th>
              <th>Umidade</th>
              <th>Pressão</th>
            </tr>
          </thead>
          <tbody>
            {readings.map((item) => (
              <tr key={item.id}>
                <td>{item.temperatura}</td>
                <td>{item.umidade}</td>
                <td>{item.pressao}</td>
              </tr>
            ))}
          </tbody>
        </table>

       </section>
       </>
    );
}