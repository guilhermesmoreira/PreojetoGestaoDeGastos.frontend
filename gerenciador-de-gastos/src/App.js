import logo from './logo.svg';
import './App.css';
import { UploadCSV } from './componentes/UploadCSV/UploadCSV';

function App() {
  return (
    <div className="App">
      <h1>Gerenciador de Gastos</h1>
      <UploadCSV />
    </div>
  );
}

export default App;
