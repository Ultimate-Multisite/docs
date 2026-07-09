---
title: Integración de multitenencia
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Integración de multi-tenancy {#multi-tenancy-integration}

Ultimate Multisite: Multi-Tenancy 1.2.0 cambia varios puntos de integración para tenants soberanos, verificación de migración y automatización del ciclo de vida de tenants.

## Flujo de inicialización de tenants {#tenant-bootstrap-flow}

Las integraciones que crean o modifican tenants deben seguir este orden:

1. Resolver el registro del tenant y el modelo de aislamiento.
2. Crear o verificar el escritor de base de datos del tenant.
3. Inicializar el esquema del tenant.
4. Aprovisionar usuarios del tenant.
5. Registrar el enrutamiento del tenant y las rutas del sistema de archivos.
6. Ejecutar la verificación de migración antes de exponer el tenant.

No asumas que un tenant soberano puede reutilizar la conexión a la base de datos de la red. Usa el registro de tenants y las abstracciones de escritor proporcionadas por el addon.

## Hooks de SSO y REST {#sso-and-rest-hooks}

El autologin de tenants sin estado usa tokens de corta duración con una declaración de propósito, protección contra repetición JTI, un límite de caducidad y fijación de origen. Las integraciones que añaden botones de inicio de sesión o enlaces de gestión remota deben generar visitas de tenants mediante el flujo SSO compatible en lugar de construir directamente URLs de inicio de sesión de tenants.

Los eventos de auditoría de API del lado de la red y los resúmenes diarios están disponibles para las puertas de enlace de tenants soberanos. Usa esos registros al depurar sistemas externos que llaman a endpoints del ciclo de vida de tenants.

## URLs de acciones de clientes soberanos {#sovereign-customer-action-urls}

Ultimate Multisite v2.13.0 enruta las acciones de clientes de tenants soberanos de vuelta al sitio principal para flujos de Account, checkout, facturación, factura, sitio, cambio de plantilla y mapeo de dominios. Las integraciones que renderizan enlaces de gestión del lado del tenant deben apuntar esas acciones al panel de clientes del sitio principal e incluir un destino de retorno validado cuando el usuario deba poder navegar de vuelta al tenant después de completar la acción.

Usa el envoltorio SSO principal para enlaces de gestión entre dominios:

```php
$url = wu_with_sso($main_site_customer_url);
```

La URL generada sigue siendo filtrable mediante `wu_sso_url`, que recibe la URL SSO, el usuario actual, el ID del sitio de destino y el contexto de redirección. Los add-ons pueden usar ese filtro para añadir contexto específico del proveedor o para reemplazar la URL del broker mientras preservan la validación de tokens de Ultimate Multisite.

No dupliques el estado de membresía, factura, dirección de facturación, plantilla ni gestión de dominios dentro del tenant soberano. Trata el Dashboard del tenant como el lanzador y el panel de clientes del sitio principal como el sistema de registro para acciones gestionadas.

## Verificación de migración {#migration-verification}

Después de que una migración o integración de ciclo de vida cambie datos del tenant, ejecuta las puertas de verificación:

- `wp tenant verify-no-legacy --site=<site-id>` confirma que el tenant ya no depende de rutas heredadas del lado de la red.
- `wp tenant verify-sovereign-push --site=<site-id>` confirma que los trabajos de push soberano pueden procesarse y vaciarse.

Las integraciones deben tratar una verificación fallida como un bloqueador de despliegue y evitar marcar un tenant como activo hasta que el fallo esté resuelto.

## Eliminación de tenants {#tenant-deletion}

Los flujos de eliminación deben llamar a la ruta de desmontaje del addon para que se limpien las credenciales de base de datos del tenant. Las integraciones externas pueden eliminar recursos del proveedor después de que el desmontaje se complete correctamente, pero no deben eliminar bases de datos ni carpetas del host mientras la verificación o los trabajos de push asíncronos sigan ejecutándose.

## Enrutador de base de datos obsoleto {#deprecated-database-router}

El `Database_Router` heredado ha sido reemplazado por un stub de obsolescencia. Las nuevas integraciones deben resolver tenants mediante el enrutador de sitios actual y las APIs del registro de tenants, en lugar de depender de la antigua clase de enrutador.
