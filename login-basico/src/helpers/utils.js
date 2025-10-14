import { validarCredenciales } from "./services/authService.js";
import { renderLoginForm } from "./view/loginView.js";
import { renderRegisterForm } from "./view/registerView.js";
import { setUsuarios } from "./storage.js";
import { DB } from "./db/db.js";
import bcrypt from "bcryptjs";

export function loadLoginRegister(){
        const app = document.getElementById("app")
        app.innerHTML = renderLoginForm();
        const app2 = document.getElementById("app2")
        app2.innerHTML = renderRegisterForm();
        const loginForm = document.querySelector("#loginForm")
        const registerForm = document.querySelector("#registerForm")
        const message = document.querySelector("#message")

        
    // add listener
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        // recoger username y password
        const formData = new FormData(loginForm);
        const username = formData.get('username');
        const password = formData.get('password');    

        try {
            const user = validarCredenciales(username, password);
            localStorage.setItem("currentUser", JSON.stringify(user));
            message.innerHTML = `<span style="color:green;">Bienvenido, ${user.username}</span>`;
            window.location.reload();
        } catch (error) {
            message.innerHTML = `<span style="color:red;">${error.message}</span>`;
        }

        loginForm.reset();
    })

        registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        // recoger username y password
        const formData = new FormData(registerForm);
        const username = formData.get('usernameR');
        const password = formData.get('passwordR');    

        try {
            const lastId = DB.length > 0 ? Number(DB[DB.length - 1].id) : 0;
            const salt = bcrypt.genSaltSync(10); 
            const hash = bcrypt.hashSync(password, salt);
            const newUser = {
                id: lastId + 1,
                username: username,
                passwordHash: hash,
                rol: "user"
            }
            setUsuarios(newUser)
        } catch (error) {
            message.innerHTML = `<span style="color:red;">${error.message}</span>`;
        }

        registerForm.reset();
    })

}