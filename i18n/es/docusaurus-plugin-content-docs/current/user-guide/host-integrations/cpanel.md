---
title: Integración con cPanel
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# cPanel Integración

## Visión general
cPanel es uno de los paneles de control de hosting web más populares utilizados por muchos proveedores de hosting compartido y dedicado. Esta integración permite la sincronización automática de dominios entre Ultimate Multisite y cPanel, lo que te permite agregar automáticamente alias de dominio y subdominios a tu cuenta de cPanel.

## Funcionalidades
- Creación automática de dominios adicionales en cPanel
- Creación automática de subdominios en cPanel (para instalaciones multisite de subdominio)
- Eliminación de dominio cuando se eliminan los mapeos

## Requisitos
Las siguientes constantes deben definirse en tu archivo `wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Opcionalmente, también puedes definir:

```php
define('WU_CPANEL_PORT', 2083); // Default is 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Default is /public_html
```

## Instrucciones de configuración

### 1. Obtén tus credenciales de cPanel

1. Obtén tu nombre de usuario y contraseña de cPanel de tu proveedor de hosting
2. Determina tu host de cPanel (normalmente `cpanel.tudominio.com` o `tudominio.com:2083`)

### 2. Añade constantes a wp-config.php

Añade las siguientes constantes a tu archivo `wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Opcionalmente, puedes personalizar el puerto y el directorio raíz:

```php
define('WU_CPANEL_PORT', 2083); // Change if your cPanel uses a different port
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Change if your document root is different
```

### 3. Habilita la integración

1. En el administrador de WordPress, ve a Ultimate Multisite > Ajustes
2. Navega a la pestaña "Domain Mapping"
3. Desplázate hacia abajo hasta "Host Integrations"
4. Habilita la integración de cPanel
5. Haz clic en "Save Changes"

## Cómo funciona

### Dominios adicionales

Cuando un dominio se mapea en Ultimate Multisite:

1. La integración envía una solicitud a la API de cPanel para agregar el dominio como dominio adicional
2. El dominio se configura para apuntar a tu directorio raíz
3. Cuando se elimina un mapeo de dominio, la integración eliminará el dominio adicional de cPanel

### Subdominios

Para instalaciones multisite de subdominio, cuando se crea un nuevo sitio:

1. La integración extrae la parte del subdominio del dominio completo
2. Envía una solicitud a la API de cPanel para agregar el subdominio
3. El subdominio se configura para apuntar a tu directorio raíz

## Notas importantes

- La integración utiliza la API2 de cPanel para comunicarse con tu cuenta de cPanel
- Tu cuenta de cPanel debe tener permisos para agregar dominios adicionales y subdominios
- Algunos proveedores de hosting pueden limitar el número de dominios adicionales o subdominios que puedes crear
- La integración no gestiona la configuración de DNS; aún necesitas apuntar tus dominios a la dirección IP de tu servidor

## Solución de problemas

### Problemas de conexión API

- Verifica que tu nombre de usuario y contraseña de cPanel sean correctos
- Verifica que tu host de cPanel sea correcto y accesible
- Asegúrate de que tu cuenta de cPanel tenga los permisos necesarios
- Intenta usar la URL completa para el host (por ejemplo, `https://cpanel.tudominio.com`)

### Dominio no añadido

- Revisa los registros de Ultimate Multisite para ver si hay mensajes de error
- Verifica que el dominio no esté ya añadido a cPanel
- Asegúrate de que tu cuenta de cPanel no haya alcanzado su límite para dominios adicionales o subdominios

### Problemas con el certificado SSL

- La integración no gestiona la emisión de certificados SSL
- Necesitarás usar las herramientas SSL/TLS de cPanel o la función AutoSSL para emitir certificados SSL para tus dominios
- Alternativamente, puedes usar un servicio como Let's Encrypt con AutoSSL de cPanel
