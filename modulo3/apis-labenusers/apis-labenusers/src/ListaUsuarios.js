import React from "react";
import axios from "axios";

class ListaUsuarios extends React.Component {

    state = {
        users: [],
      };
      componentDidMount() {
        this.showAllUsers();
      }
    
      componentDidUpdate() {
        this.showAllUsers();
      }
    
      showAllUsers = () => {
        axios
          .get(
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            {
              headers: {
                Authorization: "natalia-nascimento-hopper",
              },
            }
          )
          .then((res) => {
            this.setState({ users: res.data });
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      deleteUser = (idDoUsuario) => {
        axios
          .delete(
            `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${idDoUsuario}`,
            {
              headers: {
                Authorization: "natalia-nascimento-hopper",
              },
            }
          )
          .then((response) => {
            alert("Usuário deletado com sucesso!");
    
            console.log(response);
          })
          .catch((err) => {
            console.log(err.response);
          });
      };
      render() {
        const usuariosRenderizados = this.state.users.map((user) => {
          return (
            <div>
              <p key={user.id}>{user.name}</p>
              <button onClick={() => this.deleteUser(user.id)}> Deletar </button>
            </div>
          );
        });
    
        return (
          <div>
            <h3> Lista de usuários:</h3>
            {usuariosRenderizados}
          </div>
        );
      }
    }

export default ListaUsuarios;