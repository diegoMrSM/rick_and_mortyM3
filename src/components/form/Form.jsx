import styles from "./Form.module.css"
import { useEffect, useState } from "react";
import { validate } from "./validation";

export default function Form(props){ // props es la funcion login ***(3)***
       
    const [userData, setUserData ] = useState({ userName: "", password:"" });
    const [errors, setErrors] = useState({userName:"", password:""});

    const handleChange =(event) =>{
        const {name, value} = event.target;
        setUserData({...userData, [name]: value});// con el ...userData se hace una copia del userData original de la linea 30
        setErrors(validate({...userData, [name]:value}))// llega el return de la linea 27
    };
    
    //useEffect(()=> {}, [userData]) // useEffect de prueba

    const handleSubmit =(event) => {
        event.preventDefault() // para uqe la pagina no se recarge al clickear el boton
        props.login(userData)
    }

    return( <form className={styles.container} onSubmit={handleSubmit}>

            <label htmlFor ="" style={{color: "green"}}>Nombre: diego@henry.com</label>
            <input type="text" value={userData.userName} name="userName" onChange={handleChange}
            className={errors.userName && "warning"}/>
            {errors.userName ? <p style={{color:"red"}}>{errors.userName}</p>: null}
            <label htmlFor="" style={{color: "green"}}>Password: die123</label>
            {errors.password ? <p style={{color:"red"}}>{errors.password}</p>: null}
            <input type="password" value={userData.password} name="password" onChange={handleChange}
            className={errors.password && "warning"}/>
            <button type="submit">Login</button>

    </form>
    );
}