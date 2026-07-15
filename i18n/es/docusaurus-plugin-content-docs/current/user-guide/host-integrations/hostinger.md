---
title: Integración con Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Integración con Hostinger (hPanel)

## Descripción general {#overview}

Hostinger es un proveedor de alojamiento web popular con un panel de control moderno llamado hPanel. La integración de Ultimate Multisite con Hostinger permite sincronizar automáticamente los dominios entre Ultimate Multisite y el hPanel de Hostinger, lo que le permite gestionar mapeos de dominios y subdominios directamente desde el administrador de WordPress de forma automática.

## Características {#features}

- Creación automática de dominios adicionales (addon domains) en hPanel
- Creación automática de subdominios en hPanel (para instalaciones multisite con subdominios)
- Eliminación de dominios cuando se borran los mapeos
- Integración fluida con la API de gestión de dominios de hPanel

## Requisitos {#requirements}

Para usar la integración de Hostinger, necesitas:

1. Una cuenta de Hostinger con acceso a hPanel
2. Un token API de Hostinger
3. Definir las siguientes constantes en tu archivo `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Opcionalmente, también puedes definir:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Endpoint API por defecto
```

## Instrucciones de configuración {#setup-instructions}

### 1. Generar tu token API de Hostinger {#1-generate-your-hostinger-api-token}

1. Inicia sesión en tu cuenta de Hostinger y accede a hPanel
2. Navega a **Configuración de la cuenta** → **Tokens API**
3. Haz clic en **Crear nuevo token**
4. Asígnale un nombre descriptivo a tu token (ej. "Ultimate Multisite")
5. Selecciona los permisos necesarios:
   - Gestión de dominios
   - Gestión de subdominios
6. Copia el token generado y guárdalo de forma segura

### 2. Encontrar tu ID de cuenta {#2-find-your-account-id}

1. En hPanel, ve a **Configuración de la cuenta** → **Información de la cuenta**
2. Tu ID de cuenta se muestra en esta página
3. Copia y guarda este ID para el siguiente paso

### 3. Añadir constantes a wp-config.php {#3-add-constants-to-wp-configphp}

Añade las siguientes constantes a tu archivo `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Si tu cuenta de Hostinger utiliza un endpoint API diferente, puedes personalizarlo:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Habilitar la integración {#4-enable-the-integration}

1. En el administrador de WordPress, ve a **Ultimate Multisite > Configuración**
2. Navega a la pestaña **Mapeo de dominios**
3. Desplázate hasta **Integraciones de host**
4. Habilita la integración **Hostinger (hPanel)**
5. Haz clic en **Guardar cambios**

## Cómo funciona {#how-it-works}

### Dominios adicionales (Addon Domains) {#addon-domains}

Cuando mapeas un dominio en Ultimate Multisite:

1. La integración envía una solicitud a la API de Hostinger para añadir el dominio como un dominio adicional.
2. El dominio se configura para apuntar a tu directorio raíz.
3. Cuando se elimina un mapeo de dominio, la integración elimina automáticamente el dominio adicional de hPanel.

### Subdominios {#subdomains}

Para instalaciones multisite con subdominios, cuando se crea un sitio nuevo:

1. La integración extrae la parte del subdominio del dominio completo.
2. Envía una solicitud a la API de Hostinger para añadir el subdominio.
3. El subdominio se configura para apuntar a tu directorio raíz.

## Notas importantes {#important-notes}

- La integración utiliza la API REST de Hostinger para comunicarse con tu cuenta.
- Tu token API debe tener los permisos necesarios para la gestión de dominios y subdominios.
- La integración no gestiona la configuración de DNS; los dominios deben apuntar ya a tu cuenta de Hostinger.
- Las solicitudes API se realizan de forma segura a través de HTTPS.
- Mantén tu token API seguro y nunca lo compartas públicamente.

## Solución de problemas {#troubleshooting}

### Problemas de conexión API {#api-connection-issues}

- Verifica que tu token API sea correcto y no haya caducado.
- Comprueba que tu ID de cuenta sea el correcto.
- Asegúrate de que tu token API tenga los permisos necesarios para la gestión de dominios.
- Verifica que tu cuenta de Hostinger esté activa y en buen estado.

### Dominio no añadido {#domain-not-added}

- Revisa los registros de Ultimate Multisite en busca de mensajes de error.
- Verifica que el dominio no esté ya añadido a tu cuenta de Hostinger.
- Asegúrate de que tu cuenta de Hostinger no haya alcanzado su límite de dominios adicionales.
- Confirma que el dominio apunta correctamente a los nameservers de Hostinger.

### Problemas con certificados SSL {#ssl-certificate-issues}

- La integración no gestiona la emisión de certificados SSL.
- Hostinger generalmente proporciona certificados SSL gratuitos a través de AutoSSL.
- Puedes gestionar los certificados SSL directamente en hPanel bajo **SSL/TLS**.
- Alternativamente, utiliza Let's Encrypt con la función AutoSSL de Hostinger.

## Soporte {#support}

Para obtener ayuda adicional con la integración de Hostinger, consulta:

- [Documentación API de Hostinger](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Documentación de Ultimate Multisite](/)
- [Soporte de Ultimate Multisite](https://ultimatemultisite.com/support)
