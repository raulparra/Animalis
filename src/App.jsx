import { PetAdd } from "./components/PetAdd"
import { Header } from "./components/Header"
import { ListadoPacientes } from "./components/ListadoPacientes"
import { useEffect, useReducer } from "react";
import { petReducer } from "./helper/petReducer";
import { useState } from "react";



function App() {
 
  let initialState = [];
  const [ pets, dispatch ] = useReducer( petReducer, initialState );
  const [paciente, setPaciente] = useState({})
  
 
  useEffect(() => {
    const obtenerLS = ()=>{
      const petsInLS = JSON.parse(localStorage.getItem('pets'))?? [];
      //console.log(petsInLS);
      if (petsInLS) {
        
        const action = {
            type: 'ls',
            payload: petsInLS
        }
        dispatch( action );
      }
      
    }
    obtenerLS();
  }, []);
  
  useEffect(() => {
    localStorage.setItem('pets', JSON.stringify( pets ));
  }, [pets])

  const handleDelete = (id)=> {
      //console.log('paciente eliminado', id);
      const pacientesSinEliminar = pets.filter( petFilter => petFilter.id !== id)

      const action = {
        type: 'del pet',
        payload: pacientesSinEliminar
      }
      dispatch(action);
  }
 

  const handleNewPet = ( pet )=>{
    
      const action = {
        type:'add pet',
        payload: pet
      }
      dispatch(action);
      //console.log(pet);
  }

  const handleNewPets = (pacientesActualizados) =>{
    const action = { 
      type: 'add newPets',
      payload: pacientesActualizados
    }
    dispatch ( action );
  }
 

  return (
    <div className="container mx-auto mt-20">
        <Header/>
      <div className="mt-12 md:flex">
        <PetAdd onNewPet={ handleNewPet } onNewPets = { handleNewPets } paciente= { paciente } setPaciente= { setPaciente } pets = { pets } />
        <ListadoPacientes pets = { pets } setPaciente= { setPaciente } onDelete = { handleDelete }/>
      </div>
    </div>
  )
}

export default App
