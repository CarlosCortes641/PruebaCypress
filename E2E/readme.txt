Instrucciones para ejecutar la prueba automatizada

Requisitos previos:
- Asegúrate de tener Node.js y npm instalados en tu entorno de desarrollo.

Pasos:
1. Abre una terminal o línea de comandos. Puedes hacerlo mediante una de las siguientes opciones:
En Windows: Presiona la tecla "Windows" + "R" para abrir el cuadro de diálogo "Ejecutar", escribe "cmd" y presiona "Enter".
En macOS: Abre la aplicación "Terminal" desde la carpeta "Utilidades" en "Aplicaciones".
En Linux: Presiona las teclas "Ctrl" + "Alt" + "T" para abrir la terminal.

2. Navega hasta la ubicación en la que deseas crear y almacenar el proyecto de prueba automatizada. 
Por ejemplo, puedes usar el siguiente comando para navegar hasta el escritorio:
cd Escritorio

3. Crea un nuevo directorio para el proyecto de prueba ejecutando el siguiente comando:
mkdir prueba-automatizada
cd prueba-automatizada

4. Ingresa al directorio recién creado ejecutando el siguiente comando:
cd prueba-automatizada

5. Inicializa un nuevo proyecto de Node.js ejecutando el siguiente comando:
npm init -y

6. Instala Cypress como una dependencia de desarrollo ejecutando el siguiente comando:
npm install cypress --save-dev

7. Descarga los archivos de la prueba automatizada y colócalos dentro del directorio 
prueba-automatizada.

8. Regresa a la terminal o línea de comandos y navega hasta el directorio prueba-automatizada ejecutando el siguiente comando:
cd prueba-automatizada

9. Ejecuta el siguiente comando para abrir Cypress:
npx cypress open


10. En la interfaz de Cypress, haz clic en el archivo de prueba llamado "testOpenCart.cy.js" en la lista de archivos disponibles e2e. 
Asegúrate de que el navegador en el que deseas ejecutar la prueba esté seleccionado en la parte superior derecha de la ventana de Cypress.

11. Haz clic en el archivo de prueba para ejecutarlo. Verás cómo se ejecutan las pruebas automatizadas paso a paso en el navegador seleccionado.

12. Observa los resultados de la prueba en la interfaz de Cypress. La interfaz mostrará información detallada sobre el progreso y los resultados de la prueba, incluyendo cualquier error que pueda haber ocurrido.

Con estos pasos, podrás ejecutar la prueba automatizada utilizando Cypress en tu entorno de desarrollo. Asegúrate de tener todas las dependencias instaladas correctamente y de seguir las instrucciones paso a paso para obtener los mejores resultados.
