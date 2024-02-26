import React, { useState } from "react";
import "./App.css";

function App() {
  const [rfc, setRfc] = useState("");
  const [isValid, setIsValid] = useState(false);

  const validaRfc = (rfc) => {
    const pattern = /^M[AML]{3}$/i;
    return pattern.test(rfc);
  };

  const handleValidate = () => {
    setIsValid(validaRfc(rfc));
  };

  return (
    <>
      <div>
        <div>
          <p>RFC: MAML</p>
          <input
            type="text"
            value={rfc}
            onChange={(e) => setRfc(e.target.value)}
          />
          <button onClick={handleValidate}>Validar</button>
        </div>
        <div>{isValid ? <p>RFC válido</p> : <p>RFC inválido</p>}</div>

        <div>
          <img src="src/assets/img/automata.png" alt="Autómata" />
        </div>
      </div>
    </>
  );
}

export default App;
