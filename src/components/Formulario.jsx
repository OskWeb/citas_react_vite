import React from 'react';
import { useState, useEffect } from 'react';
import Error from './Error';

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  //const [formButtonName, setFormButtonName] = useState('Agregar paciente')

  const [error, setError] = useState(false);

  useEffect(() => {
    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)

      //setFormButtonName('Editar paciente')
    }
  }, [paciente])

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  }
  const handleSubmit = (e) => {
    e.preventDefault();


    // Validacion del Formulario
    if([nombre, propietario, email, fecha, sintomas].includes('')){
      setError(true);
      return;
    }
    setError(false);

    //Objeto de Paciente

    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas
    }

    if(paciente.id){
      // Editando el paciente
      objetoPaciente.id = paciente.id;
      const pacientesUpdate = pacientes.map(
        pacienteState => pacienteState.id === paciente.id ? 
        objetoPaciente : pacienteState);
      
      setPacientes(pacientesUpdate);
      setPaciente({});  
    }else{
      // Nuevo paciente
      objetoPaciente.id = generarId();
      setPacientes([...pacientes,objetoPaciente]);
    }

    
    
    //Reiniciar formulario

    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');
  }
  
  

  return (
    <div className='md:w-1/2 lg:w-2/5'>
        <h2 className='font-black text-3xl text-center mb-10'>Seguimiendo Pacientes</h2>
        <p className='text-lg mt-5 text-center'>
          Añade Pacientes y {''}
          <span className='text-indigo-700 font-bold'>Administralos</span>
        </p>
        <form onSubmit={handleSubmit} 
        className='bg-white shadow-md rounded-lg py-10 px-5 mt-4'>
           {error && (
              <Error><p>Todos los campos son obligatorios</p></Error>
              
            )}
        <div className='mb-4'>
            <label htmlFor="mascota" className='block text-gray-700 uppercase font-bold'>Nombre Mascota</label>
            <input id="mascota" type="text" placeholder='Nombre de la Mascota' 
            className='w-full border-2 mt-2 p-2 placeholder-gray-400 rounded-md'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}/>
          </div>
          <div className='mb-4'>
            <label htmlFor="propietario" className='block text-gray-700 uppercase font-bold'>Nombre Propietario</label>
            <input id="propietario" type="text" placeholder='Nombre del propietario' 
            className='w-full border-2 mt-2 p-2 placeholder-gray-400 rounded-md'
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}/>
          </div>
          <div className='mb-4'>
            <label htmlFor="email" className='block text-gray-700 uppercase font-bold'>Email</label>
            <input id="email" type="email" placeholder='Email Contacto Propietario' 
            className='w-full border-2 mt-2 p-2 placeholder-gray-400 rounded-md'
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className='mb-4'>
            <label htmlFor="alta" className='block text-gray-700 uppercase font-bold'>Alta</label>
            <input id="alta" type="date"
            className='w-full border-2 mt-2 p-2 placeholder-gray-400 rounded-md'
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}/>
          </div>
          <div className='mb-4'>
            <label htmlFor="sintomas" className='block text-gray-700 uppercase font-bold'>sintomas</label>
            <textarea id="sintomas" className='w-full border-2 mt-2 p-2 placeholder-gray-400 rounded-md'
            placeholder='Describe los Sintomas'
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}></textarea>
          </div>
          <input type="submit" value={paciente.id ? 'Editar paciente' : 'Agregar paciente'} 
          className='bg-indigo-700 w-full text-white uppercase hover:bg-indigo-800 cursor-pointer p-2 transition-shadow'/>
        </form>
    </div>
  )
}

export default Formulario