import React from 'react'

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  

  const {nombre, propietario, email, fecha, sintomas, id} = paciente;

  const handleEliminar = () => {
    const respuesta = confirm('Seguro que quieres eliminar el paciente?');
    
    if(respuesta){
      eliminarPaciente(id);
    }
  }
  return (
    <div className='my-3 md:m-3 bg-white shadow-md px-5 py-10 rounded-lg'>
          <p className='font-bold mb-3 uppercase text-gray-700'>Nombre: {''}
            <span className='font-normal normal-case'>{nombre}</span>
          </p>
          <p className='font-bold mb-3 uppercase text-gray-700'>Propietario: {''}
            <span className='font-normal normal-case'>{propietario}</span>
          </p>
          <p className='font-bold mb-3 uppercase text-gray-700'>Email: {''}
            <span className='font-normal normal-case'>{email}</span>
          </p>
          <p className='font-bold mb-3 uppercase text-gray-700'>Fecha Alta: {''}
            <span className='font-normal normal-case'>{fecha}</span>
          </p>
          <p className='font-bold mb-3 uppercase text-gray-700'>Sintomas: {''}
            <span className='font-normal normal-case'>{sintomas}</span>
          </p>
          <div className='flex justify-end mt-10'>
            <button 
            type='button'
            className='py-2 px-10 bg-indigo-700 hover:bg-indigo-800 text-white 
            uppercase rounded-lg'
            onClick={() => setPaciente(paciente)}
            >Editar</button>
            <button 
            type='button' className='py-2 px-10 ml-5 bg-red-600 hover:bg-red-700 text-white 
            uppercase rounded-lg'
            onClick={handleEliminar}
            >Eliminar</button>
          </div>
    </div>
  )
}

export default Paciente