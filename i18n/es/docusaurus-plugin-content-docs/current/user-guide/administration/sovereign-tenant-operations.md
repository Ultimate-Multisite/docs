---
title: Operaciones de inquilino soberano
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Operaciones de Inquilinos Soberanos

Ultimate Multisite: Multi-Tenancy 1.2.0 añade herramientas operativas para inquilinos soberanos: subsites que funcionan con su propia base de datos, raíz del sistema de archivos y contexto de enrutamiento, manteniendo la visibilidad desde el administrador de red.

Utiliza esta página cuando gestionas sitios de clientes aislados, traspasos a sitios remotos o migraciones que mueven un subsite estándar a infraestructura soberana.

## ¿Qué cambia para los administradores?

- **Autologin del inquilino sin estado (Stateless tenant autologin)**: Los administradores de red pueden visitar un inquilino soberano sin depender de estados de sesión compartidos de larga duración. El token SSO es limitado por propósito, anclado a origen, protegido contra repeticiones y tiene una ventana de expiración corta.
- **Enrutamiento consciente del inquilino (Sovereign-aware routing)**: Las redes aisladas heredadas y los inquilinos soberanos se resuelven a través de la misma ruta de enrutador del sitio, reduciendo las diferencias de arranque entre instalaciones aisladas antiguas y nuevas.
- **Estado de migración verificado**: La verificación de la migración comprueba el aprovisionamiento de usuarios, los permisos del escritor de la base de datos, el estado de drenaje de la cola y la ausencia de tablas heredadas antes de que se considere que un inquilino está completo.
- **Desinstalación más segura (Safer teardown)**: La desinstalación soberana ahora elimina las credenciales del inquilino de forma limpia para que los inquilinos eliminados no queden dejando acceso obsoleto a la base de datos.

## Visitar un inquilino soberano

1. Abre **Administrador de Red > Ultimate Multisite > Sitios**.
2. Selecciona el inquilino soberano.
3. Utiliza **Visitar (SSO)** cuando esté disponible en lugar de copiar contraseñas o crear cuentas de administrador temporales.

El flujo de visita crea un token de inicio de sesión de corta duración para ese inquilino y registra el evento SSO en el registro de auditoría del inquilino. Si el botón falla, comprueba que el dominio del inquilino se resuelve a la instalación esperada y que el inquilino puede acceder al punto final SSO del lado de la red.

## Lista de verificación de operaciones de sitios remotos

Antes de cambiar un inquilino soberano o remoto, confirma:

## Eliminación de inquilinos soberanos

Eliminar un inquilino soberano es una acción destructiva. Confirma primero el estado de copia de seguridad y exportación, y luego elimínalo desde la pantalla de administración del sitio. El flujo de desinstalación 1.2.0 elimina las credenciales de la base de datos del inquilino como parte de la limpieza, pero los administradores aún deben verificar que los usuarios y carpetas de la base de datos a nivel de host han desaparecido cuando se utiliza paneles de alojamiento externos.

:::warning
No elimines un inquilino soberano mientras la verificación de migración siga en curso o mientras haya trabajos asíncronos pendientes. Espera a que la verificación finalice para que el proceso de desinstalación no elimine las credenciales necesarias para los trabajos pendientes.
:::
