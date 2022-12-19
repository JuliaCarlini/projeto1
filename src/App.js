import './App.css';
import Cabecario from './componentes/Cabecario';
import PaginaInicial from './componentes/PaginaInicial';
import QuemSou from './componentes/Quemsou';
import Servicos from './componentes/Servicos';
import Portifolio from './componentes/Potifolio';
import Contatos from './componentes/Contatos';

function App() {
  function Apresenta(){

  }
  return (
    <div className="App">
      <header className="App-header">
        <Cabecario/>
        <PaginaInicial/>
        <QuemSou/>
        <Servicos/>
        <Portifolio/>
        <Contatos/>
      
      
      </header>
    </div>
  );
}

export default App;
