import { useState } from "react";

export const useForm = ( inicitialForm = {}) => {

    const [formState, setFormState] = useState( inicitialForm );

    const onInputChange = ( { target })=>{ //InputChange recibe el evento como parámetro y desestructuramos el target.
        const { name, value} = target;     // desestructuramos los valores del target que nos interesan
        setFormState({
            ...formState, // desestructuramos todas las propiedades del formState 
            [ name ]: value // modificamos solo la que queremos

        })
    }

    const onResetForm = ()=> { //Función que limpia el formulario  
      setFormState( inicitialForm );
    }

  return{
    //Se retorna la información que se necesite.
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    setFormState
  }
}
