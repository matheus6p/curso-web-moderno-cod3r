import React, { Component } from "react";

class Saudacao extends Component {
  constructor(props) {
    super(props);

    this.setTipo = this.setTipo.bind(this);
  }

  state = {
    tipo: this.props.tipo,
    nome: this.props.nome,
  };

  setTipo(event) {
    this.setState({ tipo: event.target.value });
  }

  setNome(event) {
    this.setState({ nome: event.target.value });
  }

  render() {
    const { tipo, nome } = this.state;
    //this.props ou this.state é utilizado para pegar as props em um componente de classe

    return (
      <div>
        <h1>
          {tipo} {nome}
        </h1>
        <hr />
        <input
          type="text"
          placeholder="Tipo..."
          value={tipo}
          onChange={this.setTipo}
        />
        <input
          type="text"
          placeholder="Nome..."
          value={nome}
          onChange={(e) => this.setNome(e)}
        />
      </div>
    );
  }
}

export default Saudacao;
