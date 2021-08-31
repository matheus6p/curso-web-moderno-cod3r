import { useState } from "react";

const TestComponent = (props) => {
  const [tipo, setTipo] = useState(props.tipo);
  const [nome, setNome] = useState(props.nome);

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
        onChange={(e) => setTipo(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nome..."
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
    </div>
  );
};

export default TestComponent;
