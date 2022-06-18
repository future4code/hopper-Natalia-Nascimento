import React from "react";
import { useNavigate } from "react-router-dom"

const LoginPage = () => {
    const navigate = useNavigate();

    return(
        <div>
            <header>
                {/* <Img src="../imagens/possivel-logo.png"/> */}
                <h2 onClick={() => navigate("/")}>LabeX</h2>
            </header>
            <nav>
            <h2>Fazer login</h2>
                <form>
                    Nome: <input></input><br/>
                    Email: <input type="text" ></input><br/>
                </form>
                <button type="submit" value="Enviar">Enviar</button>
            </nav>
            <footer>
                 &copy; 2022 All rights reserved.
                <p>Projeto Desenvolvido por Natália Amorim Pereira do Nascimento ♥</p>
            </footer>
        </div>
    )
}



export default LoginPage;