import "./Cabecario.css" 
import Contatos from "./Contatos";
import Portifolio from "./Potifolio";

function Cabecario(){
    return(
        <div>
            <header>
                <div className="div1">
                    <span className='circle-image'>
                        <a href="PaginaInicial"><img src='./imagens/img.logo.jpg'></img></a>
                    </span>
                </div>
        
                <div className="div2">
                     <ul>
                        <a href="./Potifolio.jsx">Portifolio</a>
                        <a href='Servicos.jsx'>Serviços</a>
                        <a href='QuemSou.jsx'>Quem sou</a>
                        <a >Contatos</a>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Cabecario;


















