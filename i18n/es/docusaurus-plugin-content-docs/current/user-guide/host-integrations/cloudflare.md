---
title: Integración con Cloudflare
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Integración con Cloudflare {#cloudflare-integration}

## Resumen {#overview}
Cloudflare es una red de distribución de contenido (CDN) y proveedor de seguridad líder que ayuda a proteger y acelerar sitios web. Esta integración permite la gestión automática de dominios entre Ultimate Multisite y Cloudflare, especialmente para instalaciones multisitio con subdominios.

## Funcionalidades {#features}
- Creación automática de subdominios en Cloudflare
- Compatibilidad con subdominios con proxy
- Gestión de registros DNS
- Visualización mejorada de registros DNS en la administración de Ultimate Multisite

## Requisitos {#requirements}
Las siguientes constantes deben estar definidas en tu archivo `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Instrucciones de configuración {#setup-instructions}

### 1. Obtén tu clave API de Cloudflare {#1-get-your-cloudflare-api-key}

1. Inicia sesión en tu Dashboard de Cloudflare
2. Ve a "Mi perfil" (haz clic en tu correo electrónico en la esquina superior derecha)
3. Selecciona "Tokens de API" en el menú
4. Crea un nuevo token de API con los siguientes permisos:
   - Zone.Zone: Lectura
   - Zone.DNS: Edición
5. Copia tu token de API

### 2. Obtén tu Zone ID {#2-get-your-zone-id}

1. En tu Dashboard de Cloudflare, selecciona el dominio que quieres usar
2. El Zone ID está visible en la pestaña "Resumen", en la barra lateral derecha bajo "API"
3. Copia el Zone ID

### 3. Añade constantes a wp-config.php {#3-add-constants-to-wp-configphp}

Añade las siguientes constantes a tu archivo `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Activa la integración {#4-enable-the-integration}

1. En tu administración de WordPress, ve a Ultimate Multisite > Ajustes
2. Navega a la pestaña "Mapeo de dominios"
3. Desplázate hacia abajo hasta "Integraciones de host"
4. Activa la integración con Cloudflare
5. Haz clic en "Guardar cambios"

## Cómo funciona {#how-it-works}

### Gestión de subdominios {#subdomain-management}

Cuando se crea un nuevo sitio en una instalación multisitio con subdominios:

1. La integración envía una solicitud a la API de Cloudflare para añadir un registro CNAME para el subdominio
2. El subdominio se configura para pasar por proxy a través de Cloudflare de forma predeterminada (esto se puede cambiar con filtros)
3. Cuando se elimina un sitio, la integración eliminará el subdominio de Cloudflare

### Visualización de registros DNS {#dns-record-display}

La integración mejora la visualización de registros DNS en la administración de Ultimate Multisite al:

1. Obtener registros DNS directamente desde Cloudflare
2. Mostrar si los registros tienen proxy o no
3. Mostrar información adicional sobre los registros DNS

## Cloudflare Custom Hostnames {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (anteriormente llamado "Cloudflare for SaaS") es una funcionalidad de Cloudflare que permite a tus clientes usar sus propios dominios con SSL en tu red multisitio. Es el enfoque recomendado para instalaciones multisitio con dominios mapeados que usan Cloudflare, porque Cloudflare gestiona automáticamente la emisión y renovación de certificados SSL para cada dominio personalizado.

### En qué se diferencia de la integración estándar de Cloudflare {#how-it-differs-from-the-standard-cloudflare-integration}

| | Integración estándar | Cloudflare Custom Hostnames |
|---|---|---|
| **Propósito** | Crea automáticamente registros DNS para subdominios | Permite dominios personalizados (mapeados) con SSL gestionado por Cloudflare |
| **Ideal para** | Multisitio con subdominios | Multisitio con dominios mapeados |
| **SSL** | Se gestiona por separado | Gestionado automáticamente por Cloudflare |

### Configuración de Cloudflare Custom Hostnames {#setting-up-cloudflare-custom-hostnames}

1. En tu Dashboard de Cloudflare, abre la zona de tu dominio principal.
2. Ve a **SSL/TLS > Custom Hostnames**.
3. Añade un origen de respaldo que apunte a la IP o al nombre de host de tu servidor.
4. Para cada dominio de cliente mapeado en Ultimate Multisite, añade una entrada de Custom Hostname en Cloudflare. Puedes automatizar este paso usando la API de Cloudflare.
5. Cloudflare emite y renueva automáticamente certificados TLS para cada hostname personalizado una vez que el DNS del cliente apunta a tu red.

Para ver la referencia completa de la API, consulta la [documentación de Cloudflare Custom Hostnames](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Actualización de terminología
A partir de Ultimate Multisite v2.6.1, esta funcionalidad se denomina **Cloudflare Custom Hostnames** en todos los ajustes y etiquetas del plugin. Las versiones anteriores usaban el nombre "Cloudflare for SaaS", que es el nombre del producto subyacente de Cloudflare.
:::

## Notas importantes {#important-notes}

A partir de las actualizaciones recientes de Cloudflare, el proxy con comodines ahora está disponible para todos los clientes. Esto significa que la integración DNS estándar de Cloudflare es menos crítica para instalaciones multisitio con subdominios de lo que solía ser, ya que simplemente puedes configurar un registro DNS comodín en Cloudflare.

## Solución de problemas {#troubleshooting}

### Problemas de conexión con la API {#api-connection-issues}
- Verifica que tu token de API sea correcto y tenga los permisos necesarios
- Comprueba que tu Zone ID sea correcto
- Asegúrate de que tu Account de Cloudflare tenga los permisos necesarios

### Subdominio no añadido {#subdomain-not-added}
- Revisa los registros de Ultimate Multisite para ver si hay mensajes de error
- Verifica que el subdominio no se haya añadido ya a Cloudflare
- Asegúrate de que tu plan de Cloudflare admita el número de registros DNS que estás creando

### Problemas con el proxy {#proxying-issues}
- Si no quieres que los subdominios pasen por proxy, puedes usar el filtro `wu_cloudflare_should_proxy`
- Es posible que algunas funcionalidades no funcionen correctamente cuando pasan por proxy (por ejemplo, ciertas funciones de administración de WordPress)
- Considera usar las Page Rules de Cloudflare para omitir la caché en las páginas de administración
