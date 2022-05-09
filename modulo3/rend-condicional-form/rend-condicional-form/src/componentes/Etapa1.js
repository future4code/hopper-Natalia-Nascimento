import React from "react";
import Perguntas from "./Perguntas";
import Opcoes from "./Opcoes";

class Etapa1 extends React.Component {
  render() {
    return (
      <div>
        <h3>DADOS GERAIS</h3>
        <Perguntas perguntas={"1. Qual o seu nome?"} />
        <Perguntas perguntas={"2. Qual sua idade?"} />
        <Perguntas perguntas={"3. Qual seu email?"} />
        <Opcoes
          perguntas={"4. Qual a sua escolaridade?"}
          opcoes={[
            "Ensino médio incompleto",
            "Ensino médio completo",
            "Ensino superior incompleto",
            "Ensino superior completo"
          ]}
        />
      </div>
    );
  }
}


export default Etapa1;