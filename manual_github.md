# Manual configurar github por ssh


## Instalación de la clave en GitHub

El primer paso sería crear nuestra clave ssh si no la tenemos creada con el comando 

```bash
ssh-keygen -t ed25519 -C "mariovaliente0@hotmail.com"
```
 
 Una vez generada la clave deberemos copiar la clave pública en GitHub, para ello nos dirigimos a los ajustes de GitHub y en "SSH and GPG Keys" creamos una nueva clave ssh e introducimos la clave generada.
 ![imagen ssh](/img/Captura%20de%20pantalla%202025-09-17%20142522.png)
 
 
    


 
## Añadir de la clave a Agent

**IMPORTANTE**
Si estamos en un equipo Windows, deberemos tener el servicio **ssh-agent** deberemos ejecutar los siguientes comandos

```powershell
> Get-Service ssh-agent | Set-Service -StartupType Automatic
> Start-Service ssh-agent
```

Una vez ejecutado los comandos dichos ya tendríamos el servicio activo y ya podríamos iniciarlo.

Deberemos iniciar el program ssh-agent con el comando 

```bash
> eval "$(ssh-agent -s)"
```
Una vez iniciado deberemos añadir la clave ssh a Agent mediante el comando

```bash
 > ssh-add ~/.ssh/NUESTRA_CLAVE
 ```
Una vez puesto el comando ya estaría añadida nuestra clave.

## Verificar la clave

Para vereficar la clave y GitHub estén bien configurados deberemos utilizar el comando 

```bash
> ssh -T git@github.com
```

 Si este está bien configurado nos mostrará un mensaje de bienvendia.

 #### Made by: Mario Valiente Giraldo