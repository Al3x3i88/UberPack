import React, {useState} from 'react'
// import Link from 'next/link'
// import {v4 as uuidv4} from 'uuid'



const Motorista = () => {
    let arreglo =[];
    let mot = new Object();
    let sacarStorage;
    
const [datos, setDatos] = useState({
    nombre:"",  
    edad: '',
    telefono:"",
    identidad:''
})

const handleInputChange = (e)=>{

    setDatos({
        ...datos,
        [e.target.name] : e.target.value,
        
    })
}

const enviarDatos = (e)=>{
    mot.nombre = datos.nombre
    mot.edad = datos.edad
    mot.identidad = datos.identidad
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
                    <input type="text" name ="edad" placeholder="Edad" onChange={handleInputChange} /> 
                </div>
                <div>
                    <input type="text" name ="identidad" placeholder="DNI" onChange={handleInputChange} required/> 
                </div>
                <div>
                    <input type="text" name ="telefono" placeholder="Telefono" onChange={handleInputChange} /> 
                </div>
                <button type='submit'> Submit</button>
                
            </form>
            <ul>
                <li> {datos.nombre} </li>
                <li> {datos.edad} </li>
                <li> {datos.identidad} </li>
                <li> {datos.telefono} </li>
                
            </ul>
            
            
        </>
    )}    
    export default Motorista

