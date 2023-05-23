import React from "react"
import styles from "./About.module.css"

export default function About(props) {
    return(
    <div className={styles.container}>
        <h1>Bienvenidos a mi primer Single Page Application</h1>
        <p>En esta App usé los conocimientos adquiridos en SoyHenry y  GOOGLE</p>
        <img src="https://assets.soyhenry.com/logoOG.png" alt="Not found" />
        <h3 className={styles.contDetail}>Mi nombre es Diego.
            Estudiante de soyHenry en modalidad PartTime.
            Vencido por el Modulo 2 probablemente migre otra vez.
            Debí tomar el consejo de algunos entrevistados en el SUP que ya consiguieron trabajo: 
            HAY QUE DEDICARLE AMOR AL FRONT-END</h3>
    </div>
    )
}