import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import styled from "styled-components";


const ImgLogo = styled.img`
 height: 12vh;
  margin-right: 20px;
  margin-left: 30px;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    height: 8vh;
  }
`;

const HearderPrincipal =styled.div`
display: flex;
flex-direction: row;
justify-content: start;
align-items: center;
width: 98, 5vw;
height: 15vh;
background-color: #090a09;
color: #05df05;
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
 @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
font-size: 20px;
 width: 100vw;
  }
`;
const MainPrincipal = styled.div`
color: green;
  background-image: url(https://s2.glbimg.com/GMx2mjgzj7W0vXDBmz9GQg5yZFs=/e.glbimg.com/og/ed/f/original/2018/08/13/the-beatles-abbey-road-vinil-raro-d_nq_np_830893-mlb25562292073_052017-f.jpg);
  height: 100vh;
  width: 98, 5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  font-size: 50px;
  text-shadow: #05df05;
  position: relative;
  display: flex;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 25px;
    width: 100vw;
    height: 110vh;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const InputPlaylist = styled.input`
  height: 40px;
  background: transparent;
  border: none;
  border-bottom: 1px solid #05df05;
  justify-content: center;
  text-align: center;
  align-items: center;
  display: flex;
  color: #05df05;
  font-size: 35px;
  margin: auto;
  margin-top: 44px;
  width: 500px;
  :focus {
    outline: none;
  }
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 25px;
    display: flex;
    text-align: center;
    justify-content: center;
    width: 250px;
  }
`;
const ButtonPlaylist = styled.button`
  display: flex;
  margin: auto;
  margin-top: 40px;
  padding: 15px;
  width: 200px;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  flex-direction: column;
  border-radius: 15px;
  border: 1px solid gray;
  height: 60px;
  background-image: linear-gradient(to left, green, #30a14a, #05df05);
  color: black;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 15px;
    width: 150px;
  }
`;

const FooterList = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  background-color: #090a09;
  color: white;
  height: 15vh;
  width: 98, 5vw;
  color: #05df05;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 100vw;
    font-size: 12px;
  }
`;



const headers ={
  headers:{
        Authorization: "Natalia-Nascimento-Hopper",
    },
};
class CriarPlaylist extends React.Component {
    state = {
        nomePlaylist: "",
      };
    
      criaPlaylist = (event) => {
        this.setState({ nomePlaylist: event.target.value });
      };


    criarPlaylist = () => {
      const body = {
          name: this.state.nomePlaylist,
      };

      axios.post(
          "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists" ,
          body ,
          headers
      )

      .then((resposta) => {
        console.log(resposta);
        this.setState({ nomePlaylist: "" });
        // alert("", "A Playlist foi criada com sucesso!", "success");
        Swal.fire("", "Playlist criada com sucesso!", "success");
      })
      .catch((erro) => {
        // alert("", "Ops, algo deu errado!", "error");
        Swal.fire("", "Algo deu errado!", "error");
        console.log(erro);
      });
  };
    



    

    render (){
        return(
            <div>
                <HearderPrincipal>
                    <ImgLogo src="/img/dezzer.jpg"/>
                    
                    <h1>Labefy do Rock </h1>
                </HearderPrincipal>

                <MainPrincipal>
                <div>
                <h2> Criar Playlist</h2>
                <InputPlaylist
                placeholder={"Nome da Playlist"}
                value={this.state.nomePlaylist}
                onChange={this.criaPlaylist}
                />
                 <ButtonPlaylist onClick={this.criarPlaylist}>
                 Criar Playlist
                 </ButtonPlaylist>

                <ButtonPlaylist onClick={this.props.irParaLista}>
                 Ir para Lista de Playlist
                </ButtonPlaylist>

                </div>
                
                </MainPrincipal>
                <FooterList>
               &copy; 2022 All rights reserved.
              <p>Projeto Desenvolvido pela estudante da Turma Hopper: Natalia Amorim Pereira do Nascimento</p>
              </FooterList>
            </div>
        )
    }
}

export default CriarPlaylist;