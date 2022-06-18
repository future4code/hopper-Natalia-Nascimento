import React from "react";
import { useNavigate } from "react-router-dom"

const ApplicationFormPage = () => {
    const navigate = useNavigate();


    return (
        <div>
            <header>
                {/* <Img src="../imagens/possivel-logo.png"/> */}
                <h2 onClick={() => navigate("/")}>LabeX</h2>
            </header>

            <nav>
            <h1>Ver opções</h1>
            <div>
                <form>
                    Nome: <input></input><br/>
                    Idade: <input type="number" ></input><br/>
                </form>

                Para onde gostaria de ir ?
                <select>
                    <option> - </option>
                    <option>Júpiter</option>
                    <option>Saturno</option>
                    <option>Mercúrio</option>
                    <option>Vênus</option>
                </select><br />
                <button type="submit" value="Enviar">Enviar</button>
                <button onClick={() => navigate("/login")}>Fazer login</button>
            </div>
            </nav>

            <footer>
                 &copy; 2022 All rights reserved.
                <p>Projeto Desenvolvido por Natália Amorim Pereira do Nascimento ♥</p>
            </footer>
        </div>
        
    );

};

export default ApplicationFormPage