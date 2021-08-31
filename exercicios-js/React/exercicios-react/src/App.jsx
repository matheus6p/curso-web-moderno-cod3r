import "./App.css";

import Primeiro from "./components/Primeiro";
import BomDia from "./components/ComponenteComProps";
import Saudacao from "./components/ClassComponent";
import TestComponent from "./components/FunctionalComponent";
import Pai from "./components/Pai";
import Filho from "./components/Filho";

function App() {
  return (
    <div className="App">
      {/* <Primeiro /> */}
      {/* <BomDia nome="Matheus" /> */}
      {/* <Saudacao tipo="Bom dia" nome="Matheus" /> */}
      {/* <TestComponent tipo="Bom dia" nome="Matheus" /> */}
      <Pai nome="Paulo" sobrenome="Silva">
        {/* como passar o filhos aqui? */}
        <Filho nome="Pedro" sobrenome="Silva" />
        <Filho nome="Paulo" sobrenome="Silva" />
        <Filho nome="Carla" sobrenome="Silva" />
      </Pai>
    </div>
  );
}

export default App;
