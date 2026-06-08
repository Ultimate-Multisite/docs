---
title: Integració amb cPanel
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# Integració amb cPanel

## Visió general
cPanel és un dels panells de control de *hosting* web més populars utilitzats per molts proveïdors de *hosting* compartit i dedicat. Aquesta integració permet la sincronització automàtica de domini entre Ultimate Multisite i cPanel, cosa que et permet afegir automàticament alias de domini i subdomini al teu compte de cPanel.

## Funcionalitats
- Creació automàtica de domini add-on (addon domain) a cPanel
- Creació automàtica de subdomini a cPanel (per instal·lacions multisite de subdomini)
- Eliminació de domini quan es suprimeixen les assignacions (mappings)

## Requisits
Les constants siguents han de ser definides al teu fitxer `wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Opcionalment, també pots definir:

```php
define('WU_CPANEL_PORT', 2083); // Default és 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Default és /public_html
```

## Instruccions de configuració

### 1. Obtén les credencials de cPanel

1. Obtén el nom d'usuari i la contrasenya de cPanel del teu proveïdor de *hosting*.
2. Determina l'host de cPanel (normalment `cpanel.yourdomain.com` o `yourdomain.com:2083`).

### 2. Afegir constants a wp-config.php

Afegir les constants siguents al teu fitxer `wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Opcionalment, pots personalitzar el port i el directori r的一次 (root directory):

```php
define('WU_CPANEL_PORT', 2083); // Canvia si el teu cPanel utilitza un port diferent
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Canvia si el teu directori r的一次 és diferent
```

### 3. Activar l'integració

1. A l'administració de WordPress, veu a Ultimate Multisite > Settings.
2. Navega a la pestanya "Domain Mapping".
3. Desplaça't fins a "Host Integrations".
4. Activa l'integració de cPanel.
5. Clica a "Save Changes".

## Com funciona

### Domini add-on (Addon Domains)

Quan un domini es mapeja a Ultimate Multisite:

1. L'integració envia una sol·licitud a l'API de cPanel per afegir el domini com a domini add-on.
2. El domini es configura per apuntar al teu directori r的一次.
3. Quan es suprimeix un mapeig de domini, l'integració eliminarà el domini add-on de cPanel.

### Subdominis

Per instal·lacions multisite de subdomini, quan es crea un site nou:

1. L'integració extreu la part del subdomini del domini complet.
2. Envía una sol·licitud a l'API de cPanel per afegir el subdomini.
3. El subdomini es configura per apuntar al teu directori r的一次.

## Notes importants

- L'integració utilitza l'API2 de cPanel per comunicar-se amb el teu compte de cPanel.
- El teu compte de cPanel ha de tenir permisos per afegir domini add-on i subdominis.
- Alguns proveïdors de *hosting* poden limitar el nombre de domini add-on o subdominis que pots crear.
- L'integració no gestiona la configuració de DNS; encara necessites apuntar els teus dominis a la adreça IP del teu servidor.

## Solucionar problemes

### Problemes de connexió a l'API
- Verifica que el teu nom d'usuari i contrasenya de cPanel són correctes.
- Comprova que l'host de cPanel és correcte i accessible.
- Assegura't que el teu compte de cPanel té els permisos necessaris.
- Intenta utilitzar l'URL completa per l'host (per exemple, `https://cpanel.yourdomain.com`).

### Domini no afegit
- Comprova els *logs* d'Ultimate Multisite per detectar qualsevol missatge d'error.
- Verifica que el domini no estigui ja afegit a cPanel.
- Assegura't que el teu compte de cPanel no ha arribat al seu límit de domini add-on o subdominis.

### Problemes amb el certificat SSL
- L'integració no gestiona l'emissió de certificats SSL.
- Hauràs de utilitzar les eines SSL/TLS de cPanel o la funció AutoSSL per emetre certificats SSL per als teus dominis.
- Alternativament, pots utilitzar un servei com Let's Encrypt amb AutoSSL de cPanel.
