import React from 'react';
import '../components/Mensagem';

export class Mensagem extends React.Component{
    state = {

        mensagens:this.props.array,
        inputUsuario: '',
        inputMensagem: ''
        
    
    }
    onChangeUsuario = (event) => {
        this.setState({ inputUsuario: event.target.value })
    }

    onChangeMensagem = (event) => {
        this.setState({ inputMensagem: event.target.value })
    }

    enviaMensagem=() => {
        const novoArray = this.state.mensagens
        novoArray.push(
            {usuario:this.state.inputUsuario, mensagem:this.state.inputMensagem}
        )
        this.setState({
            mensagens:novoArray,
            inputMensagem:''
        })
        this.props.updateState(this.state.mensagens)


    }

    render() {
        return (
            <div>
                <input placeholder='Usuário' value={this.state.inputUsuario} onChange={this.onChangeUsuario} />
                <input placeholder='Escreva sua Mensagem' value={this.state.inputMensagem} onChange={this.onChangeMensagem }/>
                <button onClick={this.enviaMensagem}>Enviar</button>
            </div>
        )
    }
}


export default Mensagem;

