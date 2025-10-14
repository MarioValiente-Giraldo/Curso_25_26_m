import { getUsuarios } from "./helpers/storage.js";
import bcrypt from "bcryptjs";

export default  function validateCredentials(username,password) {
    //Existe username y password
    //Password tiene más de 8 caracteres
    //Existe username y password en localStorage 
    //Nota: Siempre trimear la data de los formularios
    if(!username.trim() || !password.trim() || password.lenght() < 3 ){ return false}

    const users = getUsuarios();
    const user = users.find((user)=> user.username === username);
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password,salt);

    const ok = bcrypt.compareSync(user.passwordHash, hash); 
    
    return ok;

  
}
