---
title: Integración cPanel
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# Integración con cPanel

## Visión general
cPanel é unha das consolas de control web de hébergement máis populares, utilizadas por moitos proveedores de hébéis partilhados e dedicados. Esta integración permite a sincronización automática de domínios entre Ultimate Multisite e cPanel, permitindo que adices automáticamente alias de dominio e subdominios á túa conta de cPanel.

## Características
- Creación automática de dominios adicionais (addon domains) en cPanel
- Creación automática de subdominios en cPanel (para instalacións multisite de subdomínios)
- Eliminación do dominio cuando se eliminan os mapeamentos

## Requisitos
As seguintes constantes deben estar definidas no teu ficheiro `wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'o_tu_usuario_cpanel');
define('WU_CPANEL_PASSWORD', 'o_tu_contrasena_cpanel');
define('WU_CPANEL_HOST', 'o_tu_host_cpanel');
```

Opcionalmente, tamén podes definir:

```php
define('WU_CPANEL_PORT', 2083); // O valor padrão é 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // O valor padrão é /public_html
```

## Instrución de configuración

### 1. Obtén as tus credenciais de cPanel

1. Obtén o teu nome de usuario e contraseña de cPanel do teu proveedor de hébéis.
2. Determina o teu host de cPanel (usualmente `cpanel.o_tu_dominio.com` ou `o_tu_dominio.com:2083`).

### 2. Añade as constantes a wp-config.php

Añade as seguintes constantes ao teu ficheiro `wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'o_tu_usuario_cpanel');
define('WU_CPANEL_PASSWORD', 'o_tu_contrasena_cpanel');
define('WU_CPANEL_HOST', 'o_tu_host_cpanel');
```

Opcionalmente, podes personalizar o puerto e o directorio raíz:

```php
define('WU_CPANEL_PORT', 2083); // Cámbiño se o teu cPanel usa un puerto diferente
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Cámbiño se a raíz do documento é diferente
```

### 3. Activa a integración

1. No teu admin do WordPress, ve a Ultimate Multisite > Settings
2. Navega para a aba "Domain Mapping" (Mapeamento de Domínios)
3. Desce até "Host Integrations" (Integracións Host)
4. Activa a integración cPanel
5. Clica en "Save Changes" (Guardar Alterações)

## Como Funciona

### Addon Domains (Domínios Adicionais)

Cando un dominio se mapea en Ultimate Multisite:

1. A integración envía unha petición á API de cPanel para adicionar o dominio como un dominio adicional
2. O dominio está configurado para apuntar ao teu directorio raíz
3. Cando se remove un mapeamento de dominio, a integración removerá o dominio adicional de cPanel

### Subdomains (Subdomínios)

Para instalacións multisite de subdomínios, cando se crea un novo sitio:

1. A integración extrae a parte do subdominio do dominio completo
2. Envía unha petición á API de cPanel para adicionar o subdominio
3. O subdominio está configurado para apuntar ao teu directorio raíz

## Notas Importantes

- A integración usa a API2 de cPanel para comunicarse coa mellora conta de cPanel
- A mellora conta de cPanel debe ter permisos para adicionar domínios adicionais e subdomínios
- Algúns proveedores de alojamiento poden limitar o número de domínios adicionais ou subdomínios que podes crear
- A integración non maneña a configuración DNS; tú aínda necesitas apuntar os teus dominios á dirección IP do teu servidor

## Solución de Problemas (Troubleshooting)

### Problemas de Conexión API
- Verifica que o nome de utilizador e a contraseña do cPanel son correctos
- Comprueba que o host do cPanel é o correcto e está accesible
- Asegúrate de que a mellora conta de cPanel ten os permisos necesarios
- Proba usar a URL completa para o host (ex: `https://cpanel.yourdomain.com`)

### Dominio Non Adicionado
- Comprueba os logs de Ultimate Multisite en busca de calquera mensaxe de erro
- Verifica que o dominio non está ya adicionado a cPanel
- Asegúrate de que a mellora conta de cPanel non se chegou ao límite para domínios adicionais ou subdomínios

### Problemas con el Certificado SSL
- A esta integración no se le encarga la emisión de certificados SSL.
- Tendrás que usar las herramientas SSL/TLS de cPanel o la función AutoSSL para emitir los certificados SSL de tus dominios.
- Alternativamente, puedes usar un servicio como Let's Encrypt con el AutoSSL de cPanel.
