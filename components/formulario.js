import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

const Formulario = () => {
    let arreglo =[];
    let mot = new Object();
    let sacarStorage;
    
const [datos, setDatos] = useState({
    nombre:"",
    telefono:"",
    uuidv4();
})
console.log(uuidv4);

const handleInputChange = (e)=>{

    setDatos({
        ...datos,
        [e.target.name] : e.target.value
    })
}

const enviarDatos = (e)=>{
    mot.nombre = datos.nombre
    mot.telefono = datos.telefono
    arreglo = JSON.parse(localStorage.getItem("datosStorage")) || [];
    arreglo.push(mot)
    localStorage.setItem('datosStorage', JSON.stringify(arreglo));
    sacarStorage = JSON.parse(localStorage.getItem("datosStorage"));
    console.log(sacarStorage);
    e.preventDefault();
}
                    

    return(
        <>
            <h1>Formulario</h1>
            <form onSubmit={enviarDatos}>
                <div>
                    <input type="text" name ="nombre" placeholder="Nombre Completo" onChange={handleInputChange} /> 
                </div>
                <div>
                    <input type="text" name ="telefono" placeholder="Telefono" onChange={handleInputChange} /> 
                </div>
                <button type='submit'> Submit</button>
                
            </form>
            <ul>
                <li> {datos.nombre} </li>
                <li> {datos.telefono} </li>
            </ul>
            
        </>
    )}    
    export default Formulario