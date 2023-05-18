# Proyecto de Aplicación CRUD en React Native

Este es un proyecto de una aplicación móvil desarrollada en React Native que permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) utilizando un servidor JSON y la librería Axios para manejar las solicitudes HTTP.

## Requisitos previos

Antes de ejecutar la aplicación, asegúrate de tener instalados los siguientes requisitos:

-   [Node.js](https://nodejs.org/) - Versión 10 o superior
-   [React Native ](https://reactnative.dev/docs/environment-setup) - Configuración del entorno de desarrollo para React Native

## Instalación

Sigue los pasos a continuación para configurar y ejecutar la aplicación:

1.  Clona este repositorio en tu máquina local:
    
    bashCopy code
    
    `git clone crud-clientes-native` 
    
2.  Navega al directorio del proyecto:
    
    bashCopy code
    
    `cd proyecto-react-native-crud` 
    
3.  Instala las dependencias del proyecto ejecutando el siguiente comando:
    
    Copy code
    
    `npm install` 
    

## Configuración del servidor JSON

Esta aplicación utiliza un servidor JSON local para almacenar y recuperar los datos. Sigue los pasos a continuación para configurar el servidor:

1.  Abre una nueva terminal y navega al directorio `server` dentro del proyecto:
    
    bashCopy code
    
    `cd server` 
    
2.  Instala las dependencias del servidor ejecutando el siguiente comando:
    
    Copy code
    
    `npm install` 
    
3.  Inicia el servidor JSON ejecutando el siguiente comando:
    
    sqlCopy code
    
    `npm start` 
    
    
    Esto iniciará el servidor JSON en si es IOS `http://localhost:3000`.
    Esto iniciará el servidor JSON en si es Android `http://10.0.2.2:3000`.
    

## Ejecución de la aplicación

Sigue los pasos a continuación para ejecutar la aplicación en un emulador de iOS o Android, o en un dispositivo físico:

1.  Abre una nueva terminal y navega al directorio raíz del proyecto.
    
2.  Inicia el emulador o conecta tu dispositivo físico a tu máquina.
    
3.  Ejecuta el siguiente comando para iniciar la aplicación:
    
    arduinoCopy code
    
    `npx react-native run-android` 
    
    o
    
    arduinoCopy code
    
    `npx react-native run-ios` 
    
    Esto compilará la aplicación y la ejecutará en el emulador o dispositivo físico.
    

## Uso de la aplicación

La aplicación proporciona una interfaz de usuario simple para realizar las siguientes operaciones CRUD:

-   **Crear**: Agrega un nuevo elemento a la base de datos.
-   **Leer**: Obtiene y muestra los elementos almacenados en la base de datos.
-   **Actualizar**: Modifica un elemento existente en la base de datos.
-   **Eliminar**: Elimina un elemento de la base de datos.

Puedes interactuar con la aplicación a través de la interfaz de usuario y observar las respuestas en la consola.

## Contribución

Si deseas contribuir a este proyecto, puedes seguir estos pasos:

1.  Realiza un fork de este repositorio.
    
2.  Crea una nueva rama para tus cambios:
    
    cssCopy code
    
    `git checkout -b mi-rama` 
    
3.  Realiza tus modificaciones y realiza commit de tus cambios:
    
    sqlCopy code
    
    `git commit -m "Descripción de los cambios"` 
    
4.  Envía tus cambios al repositorio remoto:
    
    perlCopy code
    
    `git push origin mi-rama` 
    
5.  Abre una solicitud de extracción en este repositorio.
    

## Información adicional

Para obtener más información sobre el desarrollo de aplicaciones en