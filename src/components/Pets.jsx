

export const Pets = ( { pet, paciente, setPaciente, onDelete } ) => {
    
  return (
    <li>
        <div className="mt-0 mx-3 mb-3 bg-white shadow-md px-5 py-10 rounded-md">
                <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {' '}
                    <span className="font-normal normal-case">{ pet.petn }</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Responsable: {' '}
                    <span className="font-normal normal-case">{ pet.owner }</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Teléfono: {' '}
                    <span className="font-normal normal-case">{ pet.phone }</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">E-mail: {' '}
                    <span className="font-normal normal-case">{ pet.email }</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de ingreso: {' '}
                    <span className="font-normal normal-case">{ pet.date }</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Motivo de ingreso: {' '}
                    <span className="font-normal normal-case">{ pet.text }</span>
                </p>
                <div className="md:flex justify-between p-2 ">
                    <button className="bg-fuchsia-800 hover:bg-fuchsia-900 text-center text-white mt-5 p-3 px-8 rounded-md"
                    onClick={ ()=> { setPaciente(pet) }}>
                        Editar
                    </button>
                    <button 
                    className="bg-red-600 hover:bg-red-700 text-center text-white mt-5 p-3 px-8 rounded-md"
                    onClick={()=> onDelete(pet.id) }
                    >
                        Eliminar
                    </button>
                </div>
            </div>
    </li>
  )
}
