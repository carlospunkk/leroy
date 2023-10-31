import './Rodape.css'

const Rodape = ()=>{

    return(
        <footer className="footer">
        <section>
        <ul>
            <li>
                <a href="https://www.linkedin.com/in/carlos-r%C3%B4mulo-9650a055/" target="_blank">
                    <img src="/imagens/linkedin.png" alt="linkedin" width={"40px"}/>
                </a>
            </li>
            <li>
                <a href="https://github.com/carlospunkk" target="_blank">
                    <img src="/imagens/github.png" alt="github"  width={"40px"}/>
                </a>
            </li>
            <li>
                <a href="instagram.com" target="_blank">
                    <img src="/imagens/instagram.png" alt="" />
                </a>
            </li>
        </ul>
    </section>
    <section>
        <img src="/imagens/logo.png" alt="" />
    </section>
    <section>
        <p>
            Escola Front-End Alura.
        </p>
    </section>
</footer>
    )
}

export default Rodape;