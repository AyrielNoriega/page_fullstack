# page_fullstack

Esta es una aplicación desarrollada en JavaScript utilizando React.js. La vista principal de la aplicación incluye un formulario el cual esta diseñado para enviar los datos a través de una  API para su procesamiento y almacenamiento.

Actualmente, solo la vista principal es funcional, lo que significa que los botones del menu (exeptuando el HOME) no tienen funcionalidad implementada en este momento.

## Requisitos Previos

Asegúrate de tener las siguientes herramientas instaladas en tu sistema:

- Node.js (v^18.2.0)
- NPM (v9.5.0) o Yarn
- Vite
- Laravel
- PHP 8.2.0 
- Composer 2.5.5
- MySQL
- También puedes utilizar XAMPP para toda la configuracion de PHP.

## Instalación

Sigue estos pasos para instalar y configurar el proyecto:

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/AyrielNoriega/page_fullstack
   
2. Navega hasta el directorio del proyecto:
    ```bash
    cd nombre-del-proyecto


3. Instala las dependencias del proyecto utilizando npm o yarn:
    ```bash
    npm install
    
    ó
    
    yarn install 
    


4. Ejecuta el siguiente comando para iniciar la aplicación:
    ```bash
    yarn dev
    


## Configuración de la API

La aplicación envía los datos del formulario a través de una API desarrollada en Laravel. Sigue estos pasos para configurar la API:

1. Clona el repositorio de la API de Laravel en tu máquina local:
    ```bash
    git clone https://github.com/AyrielNoriega/backend_fullstack

2. Navega hasta el directorio del proyecto de la API:
    ```bash
    cd backend_fullstack
    
3. Instala las dependencias de la API utilizando Composer:
    ```bash
    composer install
    
4. Configura la conexión a la base de datos y otros parámetros en el archivo '.env' (debes crear el archivo .env en la raiz del proyecto).

5. Ejecuta las migraciones:
    ```bash
    php artisan migrate
    
6. Inicia el servidor de desarrollo de la API:
    ```bash
    php artisan serve
    
Si utilizas XAMPP, inicia apache y mySql

7. Puedes ejecutar los test:
    ```bash
    php artisan test




