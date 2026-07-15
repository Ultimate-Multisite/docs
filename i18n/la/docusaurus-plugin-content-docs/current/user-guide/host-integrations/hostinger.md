---
title: Integritas Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Integrare con Hostinger (hPanel)

## Panoramica {#overview}

Hostinger es un proveedor de alojamiento web popular con un panel de control moderno llamado hPanel. La integración Ultimate Multisite Hostinger permite la sincronización automática de dominios entre Ultimate Multisite y el hPanel de Hostinger, lo que te permite gestionar automáticamente los mapeos de dominio y subdominios directamente desde tu administración de WordPress.

## Características {#features}

- Creación automática de dominios adicionales en hPanel
- Creación automática de subdominios en hPanel (para instalaciones de multisite de subdominio)
- Eliminación del dominio cuando se eliminan los mapeos
- Integración perfecta con la API de gestión de dominios de hPanel

## Requisitos {#requirements}

Para usar la integración de Hostinger, necesitas:

1. Una cuenta de Hostinger con acceso a hPanel
2. Un token de API de Hostinger
3. Las siguientes constantes definidas en tu archivo `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'tu_token_de_api_hostinger');
define('WU_HOSTINGER_ACCOUNT_ID', 'tu_id_de_cuenta_hostinger');
```

Opcionalmente, también puedes definir:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Punto final de API predeterminado
```

## Instrucciones de Configuración {#setup-instructions}

### 1. Generar tu Token de API de Hostinger {#1-generate-your-hostinger-api-token}

1. Inicia sesión en tu cuenta de Hostinger y accede a hPanel
2. Navega a **Configuración de la Cuenta** → **Tokens de API**
3. Haz clic en **Crear Nuevo Token**
4. Dale un nombre descriptivo a tu token (por ejemplo, "Ultimate Multisite")
5. Selecciona los permisos necesarios:
   - Gestión de dominios
   - Gestión de subdominios
6. Copia el token generado y guárdalo de forma segura

### 2. Encontrar tu ID de Cuenta {#2-find-your-account-id}

1. En hPanel, ve a **Configuración de la Cuenta** → **Información de la Cuenta**
2. Tu ID de Cuenta se muestra en esta página
3. Copia y guarda este ID para el siguiente paso

### 3. Añadir Constantes a wp-config.php {#3-add-constants-to-wp-configphp}

Añade las siguientes constantes a tu archivo `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'tu_token_api_hostinger');
define('WU_HOSTINGER_ACCOUNT_ID', 'tu_id_cuenta_hostinger');
```

Si tu cuenta de Hostinger usa un punto final (endpoint) diferente para la API, puedes personalizarlo así:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Habilitar la Integración {#4-enable-the-integration}

1. En tu administración de WordPress, ve a **Ultimate Multisite > Settings** (Configuración).
2. Navega a la pestaña **Domain Mapping** (Mapeo de Dominios).
3. Desplázate hacia abajo hasta **Host Integrations** (Integraciones de Alojamiento).
4. Habilita la integración **Hostinger (hPanel)**.
5. Haz clic en **Save Changes** (Guardar Cambios).

## Cómo Funciona {#how-it-works}

### Dominios Adicionales (Addon Domains) {#addon-domains}

Cuando mapeas un dominio en Ultimate Multisite:

1. La integración envía una solicitud a la API de Hostinger para añadir el dominio como un dominio adicional.
2. El dominio se configura para que apunte a tu directorio raíz.
3. Cuando eliminas un mapeo de dominio, la integración elimina automáticamente el dominio adicional de hPanel.

### Subdominios (Subdomains) {#subdomains}

Para instalaciones de multisite con subdominios, cuando creas un sitio nuevo:

1. La integración extrae la parte del subdominio del dominio completo.
2. Envía una solicitud a la API de Hostinger para añadir el subdominio.
3. El subdominio se configura para que apunte a tu directorio raíz.

## Notas Importantes {#important-notes}

- La integración utiliza la API REST de Hostinger para comunicarse con tu cuenta.
- Tu token de API debe tener los permisos necesarios para la gestión de dominios y subdominios.
- La integración no gestiona la configuración DNS; los dominios ya deben estar apuntando a tu cuenta de Hostinger.
- Las solicitudes de la API se realizan de forma segura a través de HTTPS.
- Mantén tu token de API seguro y nunca lo compartas públicamente.

## Solución de Problemas {#troubleshooting}

### Problemas de Conexión a la API {#api-connection-issues}

- Verifica quod token API tuus est rectus et non expiratus sit
- Verifica quod ID Account tuus est rectus
- Assure quod token API tuus habet permissiones necessarias ad gestionem domini
- Verifica quod account Hostinger tuus est activus et in bonam statu

### Dominium Non Aditum {#domain-not-added}

- Verifica logs Ultimate Multisite pro quibus errorum sunt
- Verifica quod dominium non est iam additum ad account Hostinger tuum
- Assure quod account Hostinger tuus non habet pervenit ad limitam domiorum additorum
- Confirma quod dominium est propriamente indicatum ad nameservers Hostinger tuos

### Problematum Certificatus SSL {#ssl-certificate-issues}

- Integra non maneat emendationem certificatorum SSL
- Hostinger de genere certomata SSL gratuita per AutoSSL praebet
- Certata SSL possis in hPanel sub **SSL/TLS** propriam gestioni
- Alternativam, Let's Encrypt cum feature AutoSSL Hostinger habes

## Supportium {#support}

Ad adjuvare auxilium ad integrationem Hostinger, referte:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
