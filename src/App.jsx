import React, { useState} from "react";
import Automata from "../src/components/graph"; 
import Swal from 'sweetalert2'; 

function App() {

  const [rfc, setRfc] = useState("");
  const setIsValid = React.useMemo(() => false, []);

  const validaRfc = (rfc) => {
    const pattern = /^P[OPR]{3}$/i;
    return pattern.test(rfc);
  };

  const handleValidate = () => {
    const valid = validaRfc(rfc);
    setIsValid(valid);
    if (valid) {
      Swal.fire({
        title: '¡Éxito!',
        text: 'RFC válido',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
    } else {
      Swal.fire({
        title: 'Error',
        text: 'RFC inválido',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    }
  };

  return (
    <div className="min-h-screen bg-cyan-100 flex items-center justify-center"> 
      <div className="bg-white text-center p-10 rounded shadow-md w-90 border border-black">
        <h1 className="text-3xl font-bold mb-4">RFC: PORP</h1>
        <input
          type="text"
          value={rfc}
          onChange={(e) => setRfc(e.target.value)}
          className="w-full p-2 border border-black rounded mb-4" 
        />
        <button
          onClick={handleValidate}
          className="w-full bg-gray-500 text-white p-2 rounded" 
        >
          Validar
        </button>
      </div>
      <div className="bg-white text-center p-10 rounded shadow-md w-90 border border-black">
        <Automata rfc={rfc} />
      </div>
    </div>

    

  );
}

export default App;

