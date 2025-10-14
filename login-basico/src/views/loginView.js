export function renderLoginForm() {
return `
<h1>Login app</h1>
<form id="loginForm">
    <label>Username: </label>
    <input type="text" id="username" name="username" required>
    <label>Password: </label>
    <input type="password" id="password" name="password" required>
    <button type="submit">Login</button>
</form>
<p id="message"></p>`;
}
