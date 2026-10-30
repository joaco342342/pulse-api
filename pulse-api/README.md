# PULSE — Node.js + Vercel

Demo completa de dashboard + API REST sin dependencias de terceros, lista para desplegar como proyecto independiente en Vercel.

## Desarrollo local

Requiere Node.js 20+.

```bash
npm run dev
```

Abrir `http://localhost:3000`. Probar `http://localhost:3000/api/health`, `/api/metrics` y `/api/summary`.

## Vercel

1. Subí **el contenido de esta carpeta `pulse-api`** a un repositorio GitHub separado.
2. En Vercel, elegí Add New > Project e importá ese repositorio.
3. Framework Preset: Other; directorio raíz: `./`; sin variables de entorno necesarias.
4. Deploy. Copiá la URL terminada en `vercel.app`.
5. En el portfolio de Hostinger, reemplazá la tarjeta «PULSE API» (aún indicada como no publicada) por un enlace a la URL real.

Los datos son intencionalmente ficticios. La API es de solo lectura: no hay base de datos, usuarios, autenticación ni operaciones de pago. No afirmar esas capacidades en entrevistas. Para un siguiente proyecto full stack: autenticación, DB PostgreSQL, validación, tests, manejo de errores y documentación OpenAPI.
