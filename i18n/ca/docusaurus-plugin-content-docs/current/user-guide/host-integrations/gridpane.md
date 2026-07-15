---
title: Integració de GridPane
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# Integració amb GridPane

## Resum {#overview}
GridPane és un painel de control d'hosting especialitzat per professionals serios de WordPress. Aquesta integració permet la sincronització automática de domènis i la gestió de certificats SSL entre Ultimate Multisite i GridPane.

## Característiques {#features}
- Sincronització automática de domènis
- Gestió de certificats SSL
- Configuració automàtica de constant SUNRISE

## Requeriments {#requirements}
Hi ha que definir les següents constantes al teu fitxer `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'la_teu_api_key');
define('WU_GRIDPANE_SERVER_ID', 'el_teu_server_id');
define('WU_GRIDPANE_APP_ID', 'el_teu_site_id');
```

## Instruccions de configuració {#setup-instructions}

### 1. Obtén les teves credencials API de GridPane {#1-get-your-gridpane-api-credentials}

1. Inicia sessió al teu painel de control de GridPane
2. Ve a "Settings" > "API" (Configuració > API)
3. Genera una API key si encara no la tens
4. Copia la teva API key

### 2. Obtén els IDs del teu servidor i site {#2-get-your-server-and-site-ids}

1. Al teu painel de control de GridPane, ve a "Servers" (Serveix).
2. Selecciona el servidor on està hostat el teu multisite de WordPress.
3. Anota l'ID del Servei (visible a la URL o en la pàgina de detalls del servidor).
4. Ve a "Sites" (Sites) i selecciona el teu site de WordPress.
5. Anota l'ID del Site (visible a la URL o en la pàgina de detalls del site).

### 3. Afegeix les constantes a wp-config.php {#3-add-constants-to-wp-configphp}

Afegeix les següents constantes al teu fitxer `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'la_teu_api_key');
define('WU_GRIDPANE_SERVER_ID', 'el_teu_server_id');
define('WU_GRIDPANE_APP_ID', 'el_teu_site_id');
```

### 4. Activar la Integració {#4-enable-the-integration}

1. En l'administració de WordPress, anar a Ultimate Multisite > Settings (Configuració)
2. Navegar a la pestaña "Domain Mapping" (Mapeament de domini)
3. Desplorar fins a "Host Integrations" (Integracions d'hiperhost)
4. Activar l'integració GridPane
5. Clicar en "Save Changes" (Guardar canvis)

## Com Funciona {#how-it-works}

Quan es mapeja un domini en Ultimate Multisite:

1. L'integració envia una petició a l'API de GridPane per afegir el domini al teu site
2. GridPane gestiona automàticament la provisió del certificat SSL
3. Quan s'elimina un mapeig de domini, l'integració eliminarà el domini de GridPane

L'integració també gestiona automàticament la constant SUNRISE en el teu fitxer wp-config.php, que és necessari perquè el mapeig de domini funcione correctament.

## Gestió de la Constant SUNRISE {#sunrise-constant-management}

Una característica única de l'integració GridPane és que revertix automàticament la constant SUNRISE en wp-config.php per evitar conflictes amb el propi sistema de mapeig de domini de GridPane. Això assegura que tots dos sistemes puguin funcionar junts sense problemes.

## Solucionar Problemes (Troubleshooting) {#troubleshooting}

### Problemes de connexió API {#api-connection-issues}
- Comproveu que la vostra clef API sigui correcta
- Verifique que els IDs del vostre servidor i site són correctes
- Assoreu que el vostre compte de GridPane té els permisos necessaris

### Problemes amb el certificat SSL {#ssl-certificate-issues}
- GridPane pot prendre un temps per emitir certificats SSL
- Verifique que els vostres domini apuntin correctament a l'adreç IP del vostre servidor
- Comproveu les configuracions SSL de GridPane per al vostre site

### Dominio no afegit {#domain-not-added}
- Comprueba els logs de Ultimate Multisite per buscar qualsevol missatge d'error.
- Verifica que el domini encara no estigui afegit a GridPane.
- Assureu-vos que els registres DNS del vostre domini estan configurats correctament.
