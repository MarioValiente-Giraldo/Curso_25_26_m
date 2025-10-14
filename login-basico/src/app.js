import { DB } from "/db/db.js";
import { initialStorage } from "./helpers/storage.js";
import { loadLoginRegister } from "./helpers/utils.js";

/**
 * 
 */
export function initialApp(){
    initialStorage(DB)

    //pintamos el formulario
    if (localStorage.getItem("currentUser")){
        const app = document.getElementById("app")
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        app.innerHTML = renderMainView(currentUser.username);
        const logout = document.querySelector("#logoutBtn")
        logout.addEventListener("click", () => {
            localStorage.removeItem("currentUser")
            window.location.reload();
        })    
    }else {
    loadLoginRegister();
    }
    

}

