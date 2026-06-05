# mi-app-render

Aplicacion web desplegada en Render con pipeline CI/CD automatizado mediante GitHub Actions.

## Que hace la aplicacion

Sirve una API Express que demuestra un pipeline CI/CD completo:
commit local → tests automaticos → despliegue en produccion → rollback si hay fallo.

## Como ejecutarla en local

Requisitos: Node.js 20 o superior, Git.

    git clone https://github.com/TUUSUARIO/mi-app-render.git
    cd mi-app-render
    npm install
    npm start

Abre http://localhost:3000 en el navegador.

Para ejecutar los tests:

    npm test

## Como funciona el pipeline CI/CD

    Push a main en GitHub
            |
    GitHub Actions ejecuta ci.yml
            |
      npm ci → npm test
            |
    Tests pasan (exit 0)       Tests fallan (exit 1)
            |                          |
    Render detecta el push     Workflow en rojo
    y ejecuta Build Command    Render aborta el build
            |
      npm install && npm test
            |
    Deploy a produccion
            |
    App disponible en URL publica de Render

GitHub Actions actua como gate de calidad en el repositorio.
Render ejecuta los tests de nuevo en su Build Command como segunda capa.
Si el build de Render falla, la version en produccion no se sustituye.

## Como hacer un rollback

1. Accede al panel de Render: https://dashboard.render.com
2. Selecciona el servicio.
3. Ve a la pestana Events.
4. Localiza el ultimo deploy con estado Deploy succeeded anterior al fallo.
5. Haz clic en ese deploy y selecciona Rollback to this deploy.
6. Verifica que el estado vuelve a Live y que la URL publica responde.

El rollback no ejecuta el build de nuevo.
Activa directamente la version compilada anterior de forma instantanea.

## Verificar que version esta desplegada

En el panel de Render, pestana Events, cada deploy muestra el commit hash de GitHub.
Compara ese hash con la pestana Commits del repositorio en GitHub
para confirmar que la version en produccion corresponde al commit esperado.
