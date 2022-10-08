
import { Pets } from "./Pets"


export const ListadoPacientes = ( { pets = [], paciente, setPaciente, onDelete }) => {
  
  return (
    
    <div className="md:w-1/2 lg:w-3/5"> 
      { pets && pets.length? (
        <>
          <h2 className="font-black text-3xl text-center">
              Listado de Pacientes
          </h2>
          <p className="text-lg mt-5 text-center mb-10 font-bold">Detalles</p>
        </>

      ):(
        <>
          <h2 className="font-black text-3xl text-center">
              No hay Pacientes
          </h2>
          <p className="text-lg mt-5 text-center mb-10 font-bold">Nadie en espera</p>
        </>
      )}
        <div className="md:h-screen overflow-y-scroll">
            <ul>
              {
                pets.map(pet =>(
                  <Pets key={ pet.id } pet={ pet } setPaciente= { setPaciente } onDelete = { onDelete } paciente = { paciente } />
                ))
              }
            </ul>
            
            
        </div>
    </div>
  )
}
