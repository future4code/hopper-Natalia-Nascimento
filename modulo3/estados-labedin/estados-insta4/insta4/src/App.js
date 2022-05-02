import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const Button = styled.button`
  text-transform: uppercase;
  background-color: blue;
  color: black;
  height: 3vh;
  width: 100%;
  border-style: 2px 2px 2px 2px solid;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;



class App extends React.Component {
  
  state = {

    usuario: [

      {
        nomeUsuario: "paulinha",
        fotoUsuario: "bla",
        fotoPost: "bla"
      } ,

      {
        nomeUsuario: "natalia",
        fotoUsuario: "bla",
        fotoPost: "bla"
      },

      {
        nomeUsuario: "valdivio",
        fotoUsuario: "bla",
        fotoPost: "bla"
      }


    ] ,

    valorInputUsuario: "" ,
    valorInputFoto:"" ,
    valorInputPost:""

  };

  adicionaUsuario =()=>{
    const novoUsuario = {
      nomeUsuario: this.state.valorInputUsuario,
      fotoUsuario: this.state.valorInputFoto,
      fotoPost: this.state.valorInputPost
    };

    const novosUsuarios = [...this.state.usuario,novoUsuario];

    this.setState({usuario:novoUsuario});

  };

  onChangeInputUsuario = (event) =>{
    this.setState({valorInputUsuario: event.target.value});
  };

  onChangeInputFoto = (event) =>{
    this.setState({valorInputFoto: event.target.value});
  };

  onChangeInputPost = (event) =>{
    this.setState({valorInputPost: event.target.value});
  };



  render() {

    const listaUsuario = this.state.usuario.map((usuario) => {

      return(
        <p>
          {usuario.nomeUsuario} , {usuario.fotoUsuario} , {usuario.fotoPost}
        </p>
      )



    });


    return ( 
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/54'}
          fotoPost={'https://picsum.photos/200/150'}
        />

         <Post
          nomeUsuario={'natalia'}
          fotoUsuario={'https://picsum.photos/50/51'}
          fotoPost={'https://picsum.photos/50/50'}
        />

         <Post
          nomeUsuario={'valdivio'}
          fotoUsuario={'https://picsum.photos/50/53'}

        />
          <div>
          <input
          value={this.state.valorInputUsuario}
          onChange={this.onChangeInputUsuario}
          placeholder={"nomeUsuario"}/>
          

          <input
          value={this.state.valorInputFoto}
          onChange={this.onChangeInputFoto}
          placeholder={"fotoUsuario"}/>
          

          <input
          value={this.state.valorInputPost}
          onChange={this.onChangeInputPost}
          placeholder={"fotoPost"}/>


        
          <Button onClick={this.adicionaUsuario}>Adicionar</Button>

        </div> 
      </MainContainer>
    );
  };
}

export default App;
