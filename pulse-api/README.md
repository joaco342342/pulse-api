# PULSE API — Node.js + Vercel

Dashboard de demostración, con datos simulados y tres endpoints GET:

- `/api/health`
- `/api/metrics`
- `/api/summary`

## Despliegue en Vercel

Subí el **contenido de esta carpeta** a la raíz de tu repositorio `pulse-api` de GitHub (reemplazando los archivos existentes y eliminando el anterior `api/index.js`). En Vercel, el deploy se realizará al actualizar la rama conectada.

Configuración de Vercel: Framework Preset = Other; Root Directory = `./`; sin Build Command personalizado, sin Output Directory personalizado.

## Pruebas locales

Ejecutá `npm start` y abrí `http://localhost:3000`, `/api/health`, `/api/metrics`, `/api/summary`.

No hay base de datos. Datos ficticios, sin secretos de entorno.
