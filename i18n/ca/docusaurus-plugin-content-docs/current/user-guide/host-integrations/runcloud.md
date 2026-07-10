---
title: Integració RunCloud
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# Integració amb RunCloud {#runcloud-integration}

## Resum {#overview}
RunCloud és una plataforma de gestió de serveis basada en la nuvem que et permet desplegar i gestionar fàcilment aplicacions web als teus propis serveis en la nuvem. Aquesta integració permet la sincronització automática de domènis i la gestió de certificats SSL entre Ultimate Multisite i RunCloud.

## Característiques {#features}
- Sincronització automática de domènis
- Gestió de certificats SSL
- Eliminació del domèni quan es eliminen les mappes (mappings)

## Requeriments {#requirements}
Hi ha que definir les següents constantes al teu fitxer `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'teu_api_key');
define('WU_RUNCLOUD_API_SECRET', 'teu_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'teu_server_id');
define('WU_RUNCLOUD_APP_ID', 'teu_app_id');
```

## Instruccions de configuració {#setup-instructions}

### 1. Obtén les teves credencials API de RunCloud {#1-get-your-runcloud-api-credentials}

1. Inicia sessió al teu dashboard de RunCloud
2. Ve a "User Profile" (clic a la teva imatge de perfil a la part superior dreta)
3. Selecciona "API" del menú
4. Clic a "Generate API Key" si encara no ho tens
5. Copia la teva Clau API (API Key) i el Secret API

### 2. Obtén els IDs del teu servidor i aplicació {#2-get-your-server-and-app-ids}

1. Al teu dashboard de RunCloud, ve a "Servers"
2. Selecciona el servidor on està hospellat el teu multisite de WordPress
3. L'ID del Servei (Server ID) és visible a l'URL: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Ve a "Web Applications" i selecciona la teva aplicació de WordPress
5. L'ID de l'Aplicació (App ID) és visible a l'URL: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Afegeix les constantes a wp-config.php {#3-add-constants-to-wp-configphp}

Aix les següents constantes al teu fitxer `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'te_teu_te_llave_api');
define('WU_RUNCLOUD_API_SECRET', 'te_teu_te_secret_api');
define('WU_RUNCLOUD_SERVER_ID', 'te_teu_id_de_servidor');
define('WU_RUNCLOUD_APP_ID', 'te_teu_id_d_aplicació');
```

### 4. Activar la integració {#4-enable-the-integration}

1. En el teu administrador de WordPress, ve a Ultimate Multisite > Settings (Configuració).
2. Navega a la pestaña "Domain Mapping" (Mapeig de domini).
3. Desplaça fins a "Host Integrations" (Integracions d'hiperhost).
4. Activa l'integració RunCloud.
5. Clica en "Save Changes" (Guardar canvis).

## Com funciona {#how-it-works}

Quan es mapeja un domini en Ultimate Multisite:

1. L'integració envia una petició a l'API de RunCloud per afegir el domini a la teva aplicació.
2. Si s'afegir el domini amb èxit, l'integració també redepositarà els certaments SSL.
3. Quan es elimina un mapeig de domini, l'integració eliminarà el domini de RunCloud.

Per a instal·lacions de subdomènis, l'integració gestionarà automàticament la creació dels subdomènis en RunCloud quan s'afeixin nous sites a la teva xarxa.

## Problemes habituals (Troubleshooting) {#troubleshooting}

### Problemes de connexió API {#api-connection-issues}
- Verifica que les teves credencials d'API són correctes.
- Comprova que els IDs del teu servidor i aplicació són correctes.
- Assure't que la teva compte de RunCloud té els permisos necessaris.

### Problemes amb certaments SSL {#ssl-certificate-issues}
- RunCloud pot prendre un temps per emitir els certaments SSL.
- Verifica que els teus domini apuntin correctament a l'adreça IP del teu servidor.
- Comprova les configuracions SSL de RunCloud per a la teva aplicació.

### Dominio no añadido {#domain-not-added}
- Comprueba els logs de Ultimate Multisite per buscar qualsevol missatge d'error.
- Verifica que el domini encara no està afegit a RunCloud.
- Assure't que el teu pla de RunCloud suporta múltiples dominis.
