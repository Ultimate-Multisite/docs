---
title: Integratio ServerPilot
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# Integrare ServerPilot {#serverpilot-integration}

## Visió {#overview}
ServerPilot est servitium nubium ad hospedare WordPress et alios webs PHP in serveribus DigitalOcean, Amazon, Google vel aliis providendorum. Hoc integrare permittit sincronizandum automaticam domini et gestionem certificat SSL inter Ultimate Multisite et ServerPilot.

## Caracteres {#features}
- Sincronizatio dominii automatica
- Gestionem certificati SSL cum Let's Encrypt
- Renovatio SSL automatica

## Requisitos {#requirements}
Quod constants sequentibus in file `wp-config.php` tuum definire debes:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'tuum_client_id');
define('WU_SERVER_PILOT_API_KEY', 'tuum_api_key');
define('WU_SERVER_PILOT_APP_ID', 'tuum_app_id');
```

## Instrucțiuni Configurandi {#setup-instructions}

### 1. Obtine Credentias API ServerPilot Tuas {#1-get-your-serverpilot-api-credentials}

1. Accede ad dashboard tuum ServerPilot
2. Imi ad "Account" > "API"
3. Crea novam clave API si iam non habes
4. Copia Client ID et API Key tuas

### 2. Obtine App ID Tuum {#2-get-your-app-id}

1. In dashboard tuum ServerPilot, i mi ad "Apps"
2. Select app ubi WordPress multisite tuum est hospedatus
3. App ID est videribil in URL: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Adde Constants in wp-config.php {#3-add-constants-to-wp-configphp}

Adde constants sequentibus in file `wp-config.php` tuum:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'tuum_client_id');
define('WU_SERVER_PILOT_API_KEY', 'tuum_api_key');
define('WU_SERVER_PILOT_APP_ID', 'tuum_app_id');
```

### 4. Activa Integrare {#4-enable-the-integration}

1. In admin WordPress tuum, i mi ad Ultimate Multisite > Settings
2. Imi ad tab "Domain Mapping"
3. Scroll in basum ad "Host Integrations"
4. Activa integrare ServerPilot
5. Clic ad "Save Changes"

## Quom Operat {#how-it-works}

### Sincronizatio Dominii {#domain-syncing}

Cum dominium in Ultimate Multisite mappatur:

1. La integratio recuperat la lista actuali de domeniu de ServerPilot
2. Addit il novo domenum ad la lista (junto con una versio www si est inapplicabilis)
3. Envía la lista actualizata a ServerPilot per via API
4. ServerPilot actualizat la lista de domeniu pro tua applicatio

### Gestio de Certificats SSL {#ssl-certificate-management}

Despues de sincronitzat i domenia:

1. La integratio activa automà AutoSSL pro tua applicatio
2. ServerPilot gestionat l'emissió i instalació del certificat SSL utilitzant Let's Encrypt
3. ServerPilot també gestiona la renovació automàtica dels certificats SSL

## Verificació de Certificats SSL {#ssl-certificate-verification}

La integratio és configurada per aumentar el nombre de tentativis de verificació de certificats SSL pro ServerPilot, ja que pot prendre temps a ServerPilot emetir i instal·lar certificats SSL. Per default, intentarà fins a 5 vegades, però això es pot ajustar utilitzant filters.

## Resolució de Problemes {#troubleshooting}

### Problemes de Conexió API {#api-connection-issues}
- Verifica que el teu Client ID i la Clau API són correctes
- Comprueba que el teu App ID és correcte
- Assure't que la teva compte de ServerPilot té els permisos necessaris

### Problemes de Certificats SSL {#ssl-certificate-issues}
- ServerPilot requereix que els domènis tinguin registres DNS valids que apunten al teu servidor abans d'emitir certificats SSL
- Si no es emeten certificats SSL, comprueba que els teus domènis apunten correctament a l'adreç IP del teu servidor
- Pot prendre temps a ServerPilot emetir i instal·lar certificats SSL (normalment 5-15 minuts)

### Domini No Aquest {#domain-not-added}
- Comprueba els logs de Ultimate Multisite per qualsevol missatge d'error
- Verifica que el domini no estigui ja afegit a ServerPilot
- Assure't que el teu pla de ServerPilot suporta el nombre de domènis que estàs afegint

### Removendum Domini {#domain-removal}

- At present, la API de ServerPilot no ofrece un modo para eliminar dominios individuales.
- Cuando se elimina un mapeo de dominio en Ultimate Multisite, la integración actualizará la lista de dominios en ServerPilot para excluir el dominio eliminado.
