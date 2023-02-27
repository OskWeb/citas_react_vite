import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";
import {useState, useEffect } from 'react';

function App() {

  // Recoger LS
  
  //Listado pacientes
  const [pacientes, setPacientes] = useState([]);
  
  //Paciente a Editar
  const [paciente, setPaciente] = useState({});
  
  const eliminarPaciente = (id) => {
    const pacientesUpdate = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesUpdate);
  };
  
  useEffect(() => {
    const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) || [];
    pacientesLS.length > 0 && setPacientes(pacientesLS);
  }, []);

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);
  
  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <div className="mt-12 md:flex">
        <Formulario
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
        setPaciente={setPaciente}/>
        <ListadoPacientes pacientes={pacientes} setPaciente={setPaciente}
        paciente={paciente} eliminarPaciente={eliminarPaciente}/>
      </div>
      
    </div>
  );
}

export default App
