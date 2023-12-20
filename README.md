# Prueba técnica para Ciudadela

Se crea un monorepositorio con tres paquetes/workspaces: `client`, `server`, `shared`.

En `client` hay una aplicación Next.js y en su mayoría las páginas se renderizan en el servidor
con contadas excepciones de componentes como el paginador o el botón que requieren de interactividad.

En `server` hay una aplicación express que tiene dos rutas:

- `/count` - retorna la cantidad de personajes humanos/humanoides.
- `/characters?page=<page>` - retorna la página correspondiente de personajes humanos/humanoides.

En `shared` se encuentran tipos compartidos por las aplicaciones en `client` y `server`.

## Pasos para desplegar el proyecto en un ambiente local

1. Clonar este repositorio con el comando `git clone git@github.com:ivanroguerre/ciudadela-technical-test.git`.
2. Instalar dependencias con el comando `npm install` ejecutado en la raíz del repositorio clonado.
3. Desplegar el proyecto con el comando `npm run dev` ejecutado en la raíz del repositorio clonado.
4. Abrir un navegador en la URL `http://localhost:3000`

## Oportunidades de mejora

1. Configurar lerna de tal manera que el servidor se despliegue antes que el cliente
   ya que el cliente tiene una relación de dependencia con el servidor.
2. Mejorar la UI.
3. Agregar más funcionalidades: filtro por nombre y por otras características por ejemplo.
4. Solucionar incidencia con la especie de los personajes ya que el filtro `Human` también
   permite especies como `Humanoid`.
5. Agregar pruebas en todos los workspaces.
6. Reforzar buenas prácticas mediante el uso de eslint y prettier.
7. Mejorar el uso de Typescript en el servidor.
8. Dockerizar para facilitar el despliegue del proyecto en cualquier ambiente de desarrollo.
