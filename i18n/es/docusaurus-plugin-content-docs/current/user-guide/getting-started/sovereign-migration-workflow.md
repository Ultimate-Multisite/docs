---
title: Flujo de migración soberana
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Flujo de Migración Soberana

Ultimate Multisite: Multi-Tenancy 1.2.0 añade puertas de verificación de migración para mover un subsitio estándar a la infraestructura del inquilino soberano.

## Antes de empezar {#before-you-start}

Confirma que tienes lo siguiente:

- Una copia de seguridad actual del sitio de origen.
- El addon Multi-Tenancy activo.
- La base de datos, el directorio raíz del sistema de archivos y el dominio del inquilino de destino listos.
- Un enlace de host de base de datos que coincida con el entorno de destino.
- Acceso para ejecutar comandos WP-CLI para la red.

## Flujo de trabajo recomendado {#recommended-workflow}

1. Prepara la base de datos y el sistema de archivos del inquilino de destino.
2. Registra o actualiza la configuración de aislamiento del inquilino.
3. Ejecuta la migración del inquilino.
4. Provee o verifica los usuarios del inquilino.
5. Drena los trabajos de migración asíncronos.
6. Ejecuta la verificación de migración soberana.
7. Visita el inquilino con SSO.
8. Cambia DNS o enrutamiento solo después de que la verificación sea exitosa.

## Puertas de verificación {#verification-gates}

El flujo de trabajo de verificación comprueba la migración desde varios ángulos:

- El esquema del inquilino existe y puede ser escrito por el escritor de la base de datos del inquilino.
- El host de base de datos configurado tiene permisos válidos.
- Los usuarios del inquilino están presentes y coinciden con el número esperado de usuarios instalados soberanos.
- La cola de envío asíncrono se puede drenar correctamente.
- Las rutas de datos del lado de la red heredadas ya no son necesarias para el inquilino soberano.

Trata los fallos de verificación como bloqueadores previos al lanzamiento. Arregla el problema reportado de base de datos, usuario, cola o enrutamiento, y luego vuelve a ejecutar la verificación antes de exponer el inquilino a los clientes.

## Primera visita a producción {#first-production-visit}

Después de que la verificación sea exitosa, utiliza **Visitar (SSO)** desde la pantalla de gestión del sitio para la primera visita de administrador. Esto confirma el enrutamiento del inquilino, el manejo del token SSO, el anclaje de origen y el aprovisionamiento de usuarios del lado del inquilino en un solo paso controlado.
