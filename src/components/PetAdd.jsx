
import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm"

export const PetAdd = ( { pets, onNewPet, paciente, setPaciente, onNewPets }) => {
    
    const { onInputChange, onResetForm, formState, setFormState, petn, owner, phone, email, date, text } = useForm({
       
        petn: "",
        owner: "",
        phone: "",
        email: "",
        date: "",
        text: ""
    }); 
    const [ error, setError ] = useState( false );

    useEffect(() => {
        if(Object.keys(paciente).length > 0){
          paciente.id = new Date().getTime();   
          setFormState(paciente)
        } ;
        
      }, [paciente]);

    const onFormSubmit = (e)=> {
        e.preventDefault();
        if( [ petn, owner, phone, email, date, text ].includes('')) {
            setError(true);
            return;
        }
        setError(false);

        if (petn === '' && petn.length <=1) return;
        if (owner === '' &&owner.length <=1) return;
        if (phone.length < 10 && isNaN(phone)== false) return;

        const newPet = { 
            petn,
            owner,
            phone,
            email,
            date,
            text,
        }
        //editar
        if (paciente.id) {
            newPet.id = paciente.id
            console.log(paciente);
            console.log(newPet);
          
            const pacientesActualizados = pets.map(petState => 
                petState.id === paciente.id ? newPet: petState  )
               //console.log(pacientesActualizados);
                onNewPets( pacientesActualizados);
                console.log( pets );
                setPaciente ( {} )
                
           // onNewPet( pacientesActualizados );
        } else { //nuevo registro
            newPet.id = new Date().getTime();
            onNewPet(newPet);
        }
        onResetForm();
       
    }

    
    

  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center">
            Seguimiento Pacientes
        </h2>
        <p className="text-lg mt-5 text-center mb-10 font-bold">Añadir paciente</p>
        <form 
            onSubmit={ onFormSubmit } 
            className="bg-white shadow-md rounded-md px-5 py-10 mb-10 mx-5">
                {
                    error && (
                        <div className=" bg-red-600 p-3 text-white font-bold mb-3 text-center rounded-md" >
                            Todos los campos son obligatorios
                        </div>
                    )
                }
            <div className="mb-5 ">
                <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold" >Mascota</label>
                <input 
                    //id="mascota"
                    name="petn"
                    value={ petn }
                    type="text"
                    placeholder="Nombre del paciente" 
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    onChange={ onInputChange }
                    />
            </div>
            <div className="mb-5 ">
                <label htmlFor="responsable" className="block text-gray-700 uppercase font-bold" >Responsable</label>
                <input 
                    //id="responsable"
                    type="text"
                    name="owner"
                    value={ owner }
                    placeholder="Nombre del responsable" 
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    onChange={ onInputChange }
                    />
            </div>
            <div className="mb-5 ">
                <label htmlFor="telefono" className="block text-gray-700 uppercase font-bold" >Teléfono</label>
                <input 
                    //id="responsable"
                    type="text"
                    name="phone"
                    value={ phone }
                    placeholder="Número de teléfono" 
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    onChange={ onInputChange }
                    />
            </div>
            <div className="mb-5 ">
                <label htmlFor="email" className="block text-gray-700 uppercase font-bold" >E-mail</label>
                <input 
                    //id="email"
                    type="email"
                    name="email"
                    value={ email }
                    placeholder="e-amil" 
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    onChange={ onInputChange }
                    />
            </div>
            <div className="mb-5 ">
                <label htmlFor="ingreso" className="block text-gray-700 uppercase font-bold" >Fecha de ingreso</label>
                <input 
                    //id="ingreso"
                    type="date" 
                    name="date"
                    value={ date }
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    onChange={ onInputChange }
                    />
            </div>
            <div className="mb-5 ">
                <label htmlFor="motivo" className="block text-gray-700 uppercase font-bold" >Motivo de ingreso</label>
                <textarea 
                    name="text" 
                    //id="motivo" 
                    cols="30" rows="10"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    placeholder="Descripción del motivo de ingreso"
                    value={ text }
                    onChange={ onInputChange }>
                </textarea>
            </div>
          {/*   <input 
                type="submit"
                className="w-full p-3 text-white uppercase font-bold bg-fuchsia-800 hover:bg-fuchsia-900 rounded-md cursor-pointer"
                value="Ingresar registro"
                onSubmit={ onResetForm }
                
            /> */}
            <button 
                type="submit"
                className="w-full p-3 text-white uppercase font-bold bg-fuchsia-800 hover:bg-fuchsia-900 rounded-md cursor-pointer"
                /*onClick={ onResetForm }*/>
                { paciente.id ? 'Editar paciente': 'Ingresar Registro'}
            </button>
            
        </form>
    </div>
  )
}
