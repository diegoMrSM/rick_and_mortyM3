const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const validLettersAndNumbers = new RegExp(/^(?=.*[a-z])(?=.*[0-9])/);

    export const validate =(inputs) =>{
        //inputs
        const errors = {}
        if(!regexEmail.test(inputs.userName)){/*si no es un formato de email*/
            errors.userName= "Debe ser un email";
        }
        if(!inputs.userName){
            errors.userName ="No puede ser vacio";
        }
        if(inputs.userName.length > 35){
            errors.userName ="no pueden haber mas de 35 caracteres";
        }
        if(!validLettersAndNumbers.test(inputs.password)){
            errors.password = "Debe contener almenos un numero";
        }
        if(inputs.password.length < 6 || inputs.password.length > 10 ){
            errors.password = "Debe tener de 6 a 10 caracteres";
        }
        return errors; // se retorna el objto estado "error" con la propiedad name segun el if al que entre
    };