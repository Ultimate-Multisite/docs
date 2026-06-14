---
title: Aislamiento Multi-inquilino
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Aislamiento Multi-Tenencia

Ultimate Multisite: Multi-Tenancy 1.2.0 soporta el aislamiento de bases de datos y sistemas de archivos por subsitio para inquilinos soberanos. Esto mantiene los datos del inquilino separados mientras se conserva el aprovisionamiento a nivel de red, la facturación y la administración.

## Estrategia de aislamiento

Utiliza el aislamiento soberano para clientes que requieran una separación de datos más estricta, almacenamiento dedicado del sistema de archivos o un límite de host separado.

Cada inquilino soberano debe tener:

- Una base de datos dedicada al inquilino o una estrategia de prefijo de base de datos aprobada para el host.
- Una raíz de sistema de archivos dedicada al inquilino.
- Una entrada en el registro del inquilino que mapee el sitio a su base de datos, ruta raíz, nombre de host y modelo de aislamiento.
- Un resultado de verificación de migración antes de que se considere activo el inquilino.

## Vinculación del host de la base de datos

La versión 1.2.0 cambia el comportamiento predeterminado de vinculación de host en la misma máquina para instalaciones soberanas. Los valores de la misma máquina, como `localhost`, se normalizan para que Bedrock, FrankenPHP e instalaciones de WordPress contenerizadas puedan otorgar y verificar permisos contra la cadena de host que MySQL realmente ve.

Al configurar un inquilino soberano:

1. Establece el host de la base de datos al valor requerido por el tiempo de ejecución del inquilino.
2. Utiliza `localhost` para instalaciones locales de socket cuando el host espere conexiones locales.
3. Utiliza `127.0.0.1` o un nombre de host de servicio solo cuando el servidor de la base de datos otorgue privilegios a ese host.
4. Ejecuta la verificación de migración después de cambiar la vinculación del host.

Si la verificación reporta fallos en los permisos, compara los permisos del usuario de la DB del inquilino con la vinculación del host configurada. Un usuario concedido para `user@localhost` es diferente a `user@127.0.0.1` o `user@%`.

## Raíz del sistema de archivos

La raíz del inquilino debe ser estable después de reinicios y despliegues. Evita rutas de montaje temporales. Para instalaciones estilo Bedrock, confirma que la raíz del inquilino apunte a la raíz web de WordPress esperada por el bootstrap del inquilino, no solo a la raíz del proyecto.

## Orden de aprovisionamiento

Para nuevos inquilinos soberanos, utiliza este orden:

1. Crear la entrada del registro del inquilino.
2. Crear la base de datos y el usuario de la base de datos del inquilino.
3. Inicializar el esquema del inquilino (Bootstrap).
4. Aprovisionar usuarios del inquilino.
5. Configurar las rutas del sistema de archivos del inquilino.
6. Ejecutar la verificación de migración.
7. Cambiar el enrutamiento o DNS después de que la verificación sea exitosa.

Este orden evita que los inquilinos parcialmente aislados reciban tráfico antes de que el escritor de base de datos, los usuarios y el sistema de archivos estén listos.

## Flujos de gestión de clientes soberanos

Ultimate Multisite v2.13.0 mantiene las acciones de gestión de clientes en el sitio principal cuando el modo soberano está habilitado. Un inquilino aún puede funcionar como una instalación de WordPress aislada, pero las acciones orientadas al cliente que dependan de facturación de red, membresía o datos de cuentas compartidas deben redirigir al cliente al sitio principal en lugar de intentar completar la acción dentro del tiempo de ejecución (runtime) del inquilino.

El flujo del sitio principal se aplica a:

- Cambios en el proceso de pago y plan.
- Resumen de cuenta y acciones del perfil del cliente.
- Actualizaciones de la dirección de facturación y pantallas de gestión de pagos.
- Vistas de facturas e historial de pagos.
- Acciones de gestión del sitio como añadir o eliminar sitios.
- Cambio de plantilla (Template switching).
- Mapeo de dominios y cambios en el dominio principal.

Cuando un cliente inicia una de estas acciones desde un inquilino soberano (sovereign tenant), Ultimate Multisite construye la URL del sitio principal correspondiente y mantiene al inquilino de origen como destino de retorno cuando sea seguro hacerlo. Esto permite a los clientes completar la acción gestionada contra los registros de la red, y luego volver al contexto del inquilino sin duplicar el estado de facturación o membresía en la base de datos soberana.

Para los operadores, la regla práctica es: mantén las páginas de facturación, cuenta, pago (checkout), factura, plantilla y gestión de dominio disponibles en el sitio principal para las redes soberanas. Los paneles de control del inquilino pueden enlazar a esas páginas, pero el sitio principal sigue siendo la fuente de verdad para la acción.
