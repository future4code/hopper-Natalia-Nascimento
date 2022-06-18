import {useNavigate} from "react-router-dom"

const ListTripsPage = () => {
    const navigate = useNavigate();


    return(

        <div>
            <header>
                {/* <Img src="../imagens/possivel-logo.png"/> */}
                <h2 onClick={() => navigate("/")}>LabeX</h2>
            </header>
        	<div>
            <nav>
        	<h6>Lista de viagem</h6>

        	<button onClick={()=> navigate("/trips/application")}>Planejar viagem</button>
            </nav>
        	</div>
            <footer>
                 &copy; 2022 All rights reserved.
                <p>Projeto Desenvolvido por Natália Amorim Pereira do Nascimento ♥</p>
            </footer>
        </div>
    )
};

export default ListTripsPage