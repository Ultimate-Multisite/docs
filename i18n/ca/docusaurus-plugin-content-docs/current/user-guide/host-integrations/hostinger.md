---
title: Integració Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Integració amb Hostinger (hPanel) {#hostinger-hpanel-integration}

## Resum {#overview}

Hostinger és un proveïdor popular d'hosting web amb un panel de control modern anomenat hPanel. L'integració Ultimate Multisite Hostinger permet la sincronització automática de domènis entre Ultimate Multisite i el hPanel de Hostinger, possibilitant que tu puguis gestionar les mappes de domini i subdomènis automàticament des del teu admin de WordPress.

## Característiques {#features}

- Creació automática de domènis addicionals en hPanel
- Creació automática de subdomènis en hPanel (per instal·lacions multisite de subdomènis)
- Eliminació del domini quan es eliminen les mappes
- Integració fluida amb l'API de gestió de domènis de hPanel

## Requeriments {#requirements}

Per utilitzar l'integració Hostinger, necessites:

1. Una compte de Hostinger amb accés al hPanel
2. Un token API de Hostinger
3. Les següents constantes definides en el teu fitxer `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'tu_token_api_hostinger');
define('WU_HOSTINGER_ACCOUNT_ID', 'tu_id_compte_hostinger');
```

Opcionalment, també pots definir:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Endpoint API predefinit
```

## Instruccions de configuració {#setup-instructions}

### 1. Genera el teu token API de Hostinger {#1-generate-your-hostinger-api-token}

1. Clica per iniciar sessió a la teva compte de Hostinger i accedeix al hPanel
2. Navega a **Configuració de comptes** → **Tokens API**
3. Clica en **Crear nou token**
4. Dà el teu token un nom descriptiu (per exemple, "Ultimate Multisite")
5. Selecciona els permís necessaris:
   - Gestió de domènis
   - Gestió de subdomènis
6. Copia el token generat i guarda-ho de manera segura

### 2. Trobar el teu ID de compte {#2-find-your-account-id}

1. En hPanel, anar a **Configuració de comptes** → **Informació de la compte**.
2. El teu ID de compte es mostra aquí.
3. Copia i guarda aquest ID per al següent pas.

### 3. Afegir constants a wp-config.php {#3-add-constants-to-wp-configphp}

Afegir les següents constants al teu fitxer `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'teu_token_api_hostinger');
define('WU_HOSTINGER_ACCOUNT_ID', 'teu_id_compte_hostinger');
```

Si la teva compte Hostinger utilitza un endpoint API diferent, pots personalitzar-lo així:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Activar l'integració {#4-enable-the-integration}

1. A la teva administració de WordPress, anar a **Ultimate Multisite > Configuració**.
2. Navegar a la pta **Mapeig de domini** (Domain Mapping).
3. Desplorar fins a **Integracions d'hiperhoste** (Host Integrations).
4. Activar l'integració **Hostinger (hPanel)**.
5. Clicar en **Guardar canvis**.

## Com funciona {#how-it-works}

### Domèns addicionals (Addon Domains) {#addon-domains}

Quan mapejes un domini en Ultimate Multisite:

1. L'integració envia una petició a l'API d'Hostinger per afegir el domini com a domini addicional.
2. El domini es configura perquè apunte al teu directori principal (root directory).
3. Quan es elimina un mapeig de domini, l'integració elimina automàticament el domini addicional de hPanel.

### Subdomèns {#subdomains}

Per a instal·lacions multisite amb subdomèns, quan es crea un nou site:

1. L'integració extra la part del subdomèni del domini complet.
2. Envía una petició a l'API d'Hostinger per afegir el subdomèni.
3. El subdomèni es configura perquè apunte al teu directori principal (root directory).

## Notes Importants {#important-notes}

La integració utilitza l'API REST de Hostinger per comunicar amb la teva compte.
El teu token API ha que tenir els permisos necessaris per a la gestió del domini i el subdomain.
L'integració no gestiona la configuració DNS; els domini han de estar ja punts al teu compte de Hostinger.
Les sol·licitacions API es realitzen de manera segura per HTTPS.
Mantén el teu token API segur i mai ho compartixis públicament.

## Problemes Comuns (Troubleshooting) {#troubleshooting}

### Problemes de connexió a l'API {#api-connection-issues}

- Verifica que el teu token API és correcte i no ha caducat.
- Comprova que el teu ID de compte sigui correcte.
- Assure't que el teu token API té els permisos necessaris per a la gestió del domini.
- Verifica que el teu compte de Hostinger estigui actiu i en bon estat.

### Domini no afegit {#domain-not-added}

- Comprova si hi ha missatats d'error als logs de Ultimate Multisite.
- Verifica que el domini encara no està afegit al teu compte de Hostinger.
- Assure't que el teu compte de Hostinger no ha arribat al seu límit per a domini addicionals.
- Confirma que el domini està punts correctament als serveis de noms (nameservers) de Hostinger.

### Problemes amb el certificat SSL {#ssl-certificate-issues}

- L'integració no gestiona l'emissió de certificats SSL.
- Generalment, Hostinger proporciona certificats SSL gratuïts a través d'AutoSSL.
- Pots gestionar els certificats SSL directament en hPanel sota **SSL/TLS**.
- Alternativament, utilitza Let's Encrypt amb la funció AutoSSL de Hostinger.

## Suport {#support}

Per obtenir més ajuda amb l'integració de Hostinger, consulta:

- [Documentació de l'API Hostinger](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Documentació d'Ultimate Multisite](/)
- [Soporte d'Ultimate Multisite](https://ultimatemultisite.com/support)
