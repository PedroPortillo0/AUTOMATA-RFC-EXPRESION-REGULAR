import React, { useState } from "react";
import Automata from "../src/components/graph"; // Asegúrate de que la ruta sea correcta

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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white text-center p-10 rounded shadow-md w-90">
        <h1 className="text-3xl font-bold mb-4">Digite la combinacion del siguiente RFC: MAML</h1>
        <input
          type="text"
          value={rfc}
          onChange={(e) => setRfc(e.target.value)} // Cuando el valor del input cambia, actualiza el estado 'rfc'
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <button
          onClick={handleValidate} // Cuando se hace clic en el botón, valida el RFC
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Validar
        </button>
        <div className="mt-4 text-center text-lg">
          {isValid ? (
            <p className="text-green-500">RFC válido</p>
          ) : (
            <p className="text-red-500">RFC inválido</p>
          )}
        </div>
        <div className="mt-4">
          <Automata rfc={rfc} /> {/* Aquí se utiliza el componente Automata, pasando el estado 'rfc' como prop */}
        </div>
      </div>
    </div>
  );
}

export default App;