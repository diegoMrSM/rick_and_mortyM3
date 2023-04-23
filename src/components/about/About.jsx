import React from "react"
import styles from "./About.module.css"

export default function About(props) {
    return(
    <div className={styles.container}>
        <h1>Bienvenidos a mi primer Single Page Application</h1>
        <p>En esta App usé los conocimientos adquiridos en SoyHenry y San GOOGLE</p>
        <img src="https://assets.soyhenry.com/logoOG.png" alt="Not found" />
        <h3>Hola, mi nombre es Diego</h3>
    </div>
    )
}