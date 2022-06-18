import React from "react";
import {useNavigate} from "react-router-dom";
 
const HomePage = () => {
    const navigate = useNavigate();
    return (

        <div>
            <header>
                {/* <Img src="../imagens/possivel-logo.png"/> */}
                <h2>LabeX</h2>
            </header>
    
            <nav>  
                <button onClick={()=> navigate("/trips/list")}>Ver viagens</button>
                <button onClick={() => navigate("/login")}>Login</button>
            </nav>
            <footer>
                 &copy; 2022 All rights reserved.
                <p>Projeto Desenvolvido por Natália Amorim Pereira do Nascimento ♥</p>
            </footer>
        </div>
        
    )
};

export default HomePage;