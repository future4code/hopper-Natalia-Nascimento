import './App.css';
import React from 'react';
import CadastroUsuario from './componentes/CadastroUsuario';
import ListaUsuarios from './ListaUsuarios';


class App extends React.Component{
  render(){
    return(
      <div>
        <CadastroUsuario/>
        <ListaUsuarios/>
      </div>
    )
  }
}

export default App;
