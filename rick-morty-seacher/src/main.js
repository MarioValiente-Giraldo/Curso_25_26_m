import createApp from './App';
import './style.css'
import viteLogo from '/vite.svg'

document.addEventListener("DOMContentLoaded",()=>{
  const app = document.getElementById('app')
  const searchComponent = createApp();
  app.appendChild(searchComponent);
});