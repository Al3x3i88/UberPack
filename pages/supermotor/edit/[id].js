import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/router';

const EditMotorista = () => {

const router = useRouter();
const {query:{id}} = router;

const [motoList, setmotoList] = useState([]);
const [filter, setFilter] = useState([]);
const [datos, setDatos] = useState({
    nombre:"",  
    edad: '',
    telefono:"",
    identidad:''
})

    useEffect(()=>{
        if (typeof localStorage !== 'undefined') {
            let arrayStorage = JSON.parse(localStorage.getItem("datosStorage"))
            setmotoList(arrayStorage);
            
            const variable = motoList.find((lista)=>lista.identidad === id)
            setFilter(variable);
    }},[]) 
   
    const modificarDatos = (e)=>{
        datos.nombre = filter.nombre
        datos.edad = filter.edad
        datos.identidad = filter.identidad
        datos.telefono = filter.telefono
    
        arreglo = JSON.parse(localStorage.getItem("datosStorage")) || [];
        arreglo.push(datos)
        localStorage.setItem('datosStorage', JSON.stringify(arreglo));
        sacarStorage = JSON.parse(localStorage.getItem("datosStorage"));
        
        e.preventDefault();
    }

    const handleInputChange = (e)=>{

        setDatos({
            ...datos,
            [e.target.name] : e.target.value,
            
        })
    }

return (
    <>
    {filter!==''}
        <form onSubmit={modificarDatos}>
                <div>
                    <input type="text" name ="nombre"  value={filter.nombre} onChange={handleInputChange} /> 
                </div>
                <div>
                    <input type="text" name ="edad" value={filter.edad} /> 
                </div>
                <div>
                    <input type="text" name ="identidad" value={filter.identidad} /> 
                </div>
                <div>
                    <input type="text" name ="telefono" value={filter.telefono} /> 
                </div>
                <button type='submit'> Actualizar Datos</button>
                
            </form>


      
    <p>Su numero de identidad es {id}</p>
    </>
)}
 
export default EditMotorista
