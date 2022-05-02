import React from 'react';
import '../componentes/Mensagem'

export class Mensagem extends React.componentes{
    state = {
        nomeUsuario: '',
        MensagemUsuario: ''
    }

    onChangeNome = (event) => {
        this.setState({nomeRemetente: event.target.value})
    }

    onChangeConteudo = (event) => {
        this.setState({MensagemUsuario: event.target.value})
    }

    render(){
        return (
            <div>
                <input 
                        name={''}
                        value={this.state.nomeUsuario}
                        onChange={this.onChangeNome}
                    />
                    <input 
                        placeholder="Mensagem"
                        value={this.state.MensagemUsuario}
                        onChange={this.onChangeConteudo}
                    />
                    <button onClick={this.onClickEnviar}>Enter</button>
            </div>

        );
    }
}

export default Mensagem