import './Contatos.css'
function Contatos(){
    return(
        <div id='contato' className='section-2'>
            <h1 className='conts'>Contate-nos</h1>

            <section >
                
                <span className='telefone'>
                    <i class="fa-solid fa-phone" alt="Telefone" />
                    <p>+351 (00) 000-0000</p>
                </span>

                <span className='email'>
                    <i class="fa-solid fa-envelope" alt="E-mail" />
                    <p>julia.dornelas@outlook.com</p>
                </span>
                
                <span className='insta'>
                    <i class="fa-brands fa-instagram" alt="Instagram" />
                    <p>@julia_carlini0</p>
                </span>

                <span className='whats'>
                    <i class="fa-brands fa-whatsapp" alt="WhatsApp" />
                    <p>+351 (00) 000-0000</p>
                </span>

                <span className='face'>
                    <i class="fa-brands fa-facebook" alt="Facebook" />
                    <p>Julia Dornelas</p>
                </span>

            </section>
        </div>
    )
}

export default Contatos;