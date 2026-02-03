---
title: Integración con Cloudflare
sidebar_position: 16
_i18n_hash: 41bd975db7c89a129f5f880b439a8f2f
---
# Cloudflare Integración

## Visión general
Cloudflare es una red de entrega de contenido (CDN) y proveedor de seguridad líder que ayuda a proteger y acelerar sitios web. Esta integración permite la gestión automática de dominios entre Ultimate Multisite y Cloudflare, especialmente para instalaciones multisite con subdominios.

## Características
- Creación automática de subdominios en Cloudflare
- Soporte de subdominios proxied
- Gestión de registros DNS
- Visualización mejorada de registros DNS en el administrador de Ultimate Multisite

## Requisitos
Las siguientes constantes deben definirse en su archivo `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Instrucciones de configuración

### 1. Obtenga su clave API de Cloudflare

1. Inicie sesión en su panel de Cloudflare
2. Vaya a "Mi perfil" (haga clic en su correo electrónico en la esquina superior derecha)
3. Seleccione "Tokens de API" en el menú
4. Cree un nuevo token de API con los siguientes permisos:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. Copie su token de API

### 2. Obtenga su ID de zona

1. En su panel de Cloudflare, seleccione el dominio que desea usar
2. El ID de zona es visible en la pestaña "Resumen", en la barra lateral derecha bajo "API"
3. Copie el ID de zona

### 3. Agregue constantes a wp-config.php

Agregue las siguientes constantes a su archivo `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Habilite la integración

1. En el administrador de WordPress, vaya a Ultimate Multisite > Ajustes
2. Navegue a la pestaña "Mapeo de dominio"
3. Desplácese hacia abajo hasta "Integraciones de host"
4. Habilite la integración de Cloudflare
5. Haga clic en "Guardar cambios"

## Cómo funciona

### Gestión de subdominios

Cuando se crea un nuevo sitio en una instalación multisite con subdominios:

1. La integración envía una solicitud a la API de Cloudflare para agregar un registro CNAME para el subdominio
2. El subdominio se configura para ser proxied a través de Cloudflare por defecto (esto se puede cambiar con filtros)
3. Cuando se elimina un sitio, la integración eliminará el subdominio de Cloudflare

### Visualización de registros DNS

La integración mejora la visualización de registros DNS en el administrador de Ultimate Multisite de la siguiente manera:

1. Obtener registros DNS directamente de Cloudflare
2. Mostrar si los registros están proxied o no
3. Mostrar información adicional sobre los registros DNS

## Notas importantes

A partir de las actualizaciones recientes de Cloudflare, el proxy de comodín ahora está disponible para todos los clientes. Esto significa que la integración de Cloudflare es menos crítica para las instalaciones multisite con subdominios que antes, ya que puede simplemente configurar un registro DNS comodín en Cloudflare.

## Solución de problemas

### Problemas de conexión API

- Verifique que su token de API sea correcto y tenga los permisos necesarios
- Verifique que su ID de zona sea correcto
- Asegúrese de que su cuenta de Cloudflare tenga los permisos necesarios

### Subdominio no añadido

- Revise los registros de Ultimate Multisite en busca de mensajes de error
- Verifique que el subdominio no esté ya añadido a Cloudflare
- Asegúrese de que su plan de Cloudflare admita el número de registros DNS que está creando

### Problemas de proxy

- Si no desea que los subdominios sean proxied, puede usar el filtro `wu_cloudflare_should_proxy`
- Algunas funciones pueden no funcionar correctamente cuando están proxied (por ejemplo, ciertas funciones de administración de WordPress)
- Considere usar las Reglas de página de Cloudflare para evitar la caché en las páginas de administración
