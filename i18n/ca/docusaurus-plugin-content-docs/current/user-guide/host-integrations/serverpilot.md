---
title: Integració ServerPilot
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# Integració amb ServerPilot

## Resum {#overview}
ServerPilot és un servei en la nuvem per hospedar WordPress i altres webs en PHP en serveis de DigitalOcean, Amazon, Google o qualsevol altre proveïdor de serveis. Aquesta integració permet la sincronització automática de domènis i la gestió de certificats SSL entre Ultimate Multisite i ServerPilot.

## Característiques {#features}
- Sincronització automática de domènis
- Gestió de certificats SSL amb Let's Encrypt
- Renovació automática de SSL

## Requeriments {#requirements}
Hi ha que definir les següents constantes al teu fitxer `wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Instruccions de configuració {#setup-instructions}

### 1. Obtén les teves credencials API de ServerPilot {#1-get-your-serverpilot-api-credentials}

1. Inicia sessió al teu dashboard de ServerPilot
2. Ve a "Account" > "API"
3. Crea una nova cleau API si encara no la tens
4. Copia el teu Client ID i la API Key

### 2. Obtén el teu App ID {#2-get-your-app-id}

1. Al teu dashboard de ServerPilot, ve a "Apps"
2. Selecciona l'aplicació on està hospellat el teu multisite de WordPress
3. L'App ID es pot veure a l'URL: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Afegeix les constantes a wp-config.php {#3-add-constants-to-wp-configphp}

Afegeix les següents constantes al teu fitxer `wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Activa l'integració {#4-enable-the-integration}

1. En el teu admin de WordPress, ve a Ultimate Multisite > Settings (Configuració)
2. Navega a la pestaña "Domain Mapping" (Mapeig de domini)
3. Desplaça fins a "Host Integrations" (Integracions d'hiperhost)
4. Activa l'integració ServerPilot
5. Clica en "Save Changes" (Guardar canvis)

## Com Funciona {#how-it-works}

### Sincronització de Domini (Domain Syncing) {#domain-syncing}

Quan es mapeja un domini en Ultimate Multisite:

1. L'integració recupera la llista actual de dominis de ServerPilot
2. Afegeix el nou domini a la llista (juntament amb una versió www si és aplicable)
3. Envía la llista actualitzada a ServerPilot mitjançant l'API
4. ServerPilot actualitza la llista de dominis per a la teva aplicació

### Gestió de Certificats SSL {#ssl-certificate-management}

Després que els dominis es sincroitzen:

1. L'integració activa automàticament AutoSSL per a la teva aplicació
2. ServerPilot gestiona l'emissió i instal·lació del certificat SSL mitjançant Let's Encrypt
3. ServerPilot també gestiona la renovació automàtica dels certificats SSL

## Verificació de Certificats SSL {#ssl-certificate-verification}

L'integració està configurada per augmentar el nombre d'intentos de verificació de certificats SSL per a ServerPilot, ja que pot prendre temps que ServerPilot emissi i installi els certificats SSL. Per par défaut, intentaran fins a 5 vegades, però això es pot ajustar utilitzant filters.

## Problemes Comuns (Troubleshooting) {#troubleshooting}

### Problemes de connexió API {#api-connection-issues}
- Verifica que el teu Client ID i la Clau API (API Key) són correctes
- Comprova que el teu App ID sigui correcte
- Assure't que la teva compte de ServerPilot tinguis els permisos necessaris

### Problemes amb el certificat SSL {#ssl-certificate-issues}
- ServerPilot exigeix que els domènis tinguin registres DNS valids que apunten al teu servidor abans de emitir certificats SSL.
- Si no es estan emetent els certificats SSL, verifica que els teus domènis apuntin correctament a l'adreça IP del teu servidor.
- Pot potser tinguis que esperar un temps per ServerPilot emetre i instal·lar els certificats SSL (normalment 5-15 minuts).

### Domini no afegit {#domain-not-added}
- Comprova als logs de Ultimate Multisite qualsevol missatge d'error.
- Verifica que el domini encara no estigui afegit a ServerPilot.
- Assureu-vos que el teu pla de ServerPilot suporta la quantitat de domènis que estàs afegint.

### Eliminació de domini {#domain-removal}
- Actuariament, l'API de ServerPilot no té una manera d'eliminar domènis individuals.
- Quan es elimina una mappatura de domini en Ultimate Multisite, l'integració actualitzarà la llista de domènis en ServerPilot per excluir el domini eliminat.
