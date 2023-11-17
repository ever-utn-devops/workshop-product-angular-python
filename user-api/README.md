# Ejercicio en clase
# Cómo correr los apis localmente?

1. Tener instalado Visual Code y nodejs
2. Bajar la aplicación en la computadora.
3. Abrir el proyecto (folder) en visual Code.
4. Abrir la terminal (menu View--> terminal)
5. En la terminal poner el siguiente comando: **npm install** para que se instalen las dependencias del app.
6. Para correr el app ejecutar en la terminal el siguiente comando: **npm start**
7. No cerrar la terminal, ni el Visual Code y acceder al api con la siguiente url:  [http://localhost:3008/users](http://localhost:3008/users)


## Endpoints de api Users
| Endpoint | Método | Descripción | Input | Output | Ejemplo | Excepciones |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| auth | Post | Validad el usuario a autenticar | {"userName":"usuario", "password":"claveusuario"} | {"userName":"usuario", "password":"clave", "email":"email@email.com", "isActive":true, "role":"Admin"} | http://localhost:3008/auth | Mensaje error si usuario no existe: { success: 'false', message: 'The user/password does not match with the right credentials.' } | 
| users | Get | Devuelve la lista de usuarios |  | [{"userName":"usuario", "password":"clave", "email":"email@email.com", "isActive":true, "role":"Admin"},{"userName":"usuario", "password":"clave", "email":"email@email.com", "isActive":true, "role":"Admin"},{"userName":"usuario", "password":"clave", "email":"email@email.com", "isActive":true, "role":"Admin"}] | http://localhost:3008/users |  |
| users/:userName | GET | Devuelve un usuario en específico | userName | {"userName":"usuario", "password":"clave", "email":"email@email.com", "isActive":true, "role":"Admin"} | http://localhost:3008/users/userName | Si no existe se devuelve un mensaje: { success: 'false', message: 'User not found' } |

