import "./Cabecario.css" 

function Cabecario(){
    return(
        <div>
            <header>
                <div className="div1">
                    <span className='circle-image'>
                        <a href="#PaginaInicial"><img src='./imagens/img.logo.jpg'></img></a>
                    </span>
                </div>
        
                <div className="div2">
                     <ul>
                        <a href="#Portifolio">Portifolio</a>
                        <a href='#Servicos'>Serviços</a>
                        <a href='#QuemSou'>Quem sou</a>
                        <a href="#contato">Contatos</a>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Cabecario;


















