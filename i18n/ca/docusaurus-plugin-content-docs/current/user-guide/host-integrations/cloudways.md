---
title: Integració amb Cloudways
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Integració amb Cloudways {#cloudways-integration}

## Resum {#overview}
Cloudways és una plataforma d'hosting cloud gestionada que et permet desplegar llocs WordPress en diversos proveïdors cloud com DigitalOcean, AWS, Google Cloud, i més. Aquesta integració facilita la sincronització automàtica de domini i la gestió de certificats SSL entre Ultimate Multisite i Cloudways.

## Funcionalitats {#features}
- Sincronització automàtica de domini
- Gestió de certificats SSL
- Suport per a dominis addicionals
- Validació DNS per a certificats SSL

## Requisits {#requirements}
Les constants siguents han de ser definides al teu fitxer `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Opcionalment, també pots definir:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Instruccions de configuració {#setup-instructions}

### 1. Obtén les credencials API de Cloudways {#1-get-your-cloudways-api-credentials}

1. Accedeix al teu *dashboard* de Cloudways
2. Navega a "Account" > "API Keys"
3. Genera una clau API si encara no en tens
4. Copia el teu correu electrònic i la clau API

### 2. Obtén els IDs del servidor i de l'aplicació {#2-get-your-server-and-application-ids}

1. Al teu *dashboard* de Cloudways, accedeix a "Servers"
2. Selecciona el servidor on està allotjat el teu *multisite* de WordPress
3. L'ID del servidor és visible a l'URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Accedeix a "Applications" i selecciona la teva aplicació de WordPress
5. L'ID de l'aplicació és visible a l'URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Afegir les constants a wp-config.php {#3-add-constants-to-wp-configphp}

Afegir les constants siguents al teu fitxer `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Si tens dominis **externs** addicionals (fora de la teva xarxa *multisite*) que sempre han de mantenir-se a la llista d'alias de Cloudways:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning No incloure el comodinal de la teva pròpia xarxa
**No** afegir `*.your-network.com` (o qualsevol patró de subdomain de la teva pròpia xarxa) a
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Consulta [Important — el problema del comodinal SSL](#important---el-problema-del-comodinal-ssl)
abaix per saber per què això impedeix que s'emitin certificats SSL per cada tenant.
:::

### 4. Activar l'integració {#4-enable-the-integration}

1. Al teu administrador de WordPress, accedeix a Ultimate Multisite > Settings
2. Navega a la pestanya "Domain Mapping"
3. Desplaça-te fins a "Host Integrations"
4. Activa l'integració de Cloudways
5. Clica a "Save Changes"

## Com funciona {#how-it-works}

### Sincronització de dominis {#domain-syncing}

Quan un domini es mapeja a Ultimate Multisite:

1. L'integració recupera tots els dominis mapejats actualment
2. Afegirà el nou domini a la llista (jocant amb una versió www si és aplicable)
3. Envía la llista completa a Cloudways a través de l'API
4. Cloudways actualitza els alias de domini per a la teva aplicació

Nota: L'API de Cloudways exigeix enviar la llista completa de dominis cada vegada, no només afegir o eliminar dominis individuals.

### Gestió de certificats SSL {#ssl-certificate-management}

Després de sincronitzar els dominis:

1. L'integració comprueba quins dominis tenen registres DNS vàlids que apunten al teu servidor
2. Envía una sol·licitud a Cloudways per instal·lar certificats SSL Let's Encrypt per a aquests dominis
3. Cloudways gestiona l'emissió i l'instal·lació del certificat SSL

L'integració sempre sol·licita certificats Let's Encrypt **estàndard** (no comodinals) de Cloudways. Si es proporciona un patró comodinal a `WU_CLOUDWAYS_EXTRA_DOMAINS`, el `*.` inicial s'elimina abans de la sol·licitud SSL — el comodinal en si mai s'instal·la amb aquesta integració. Per utilitzar un certificat comodinal a Cloudways, hauràs de l'instal·lar manualment, però fer-ho bloqueja l'emissió de certificats Let's Encrypt per domini per als dominis personalitzats mapejats (veure el problema més avall).

## Dominis addicionals {#extra-domains}

La constant `WU_CLOUDWAYS_EXTRA_DOMAINS` et permet especificar dominis **externs** addicionals que han de mantenir-se sempre a la llista d'alias de l'aplicació de Cloudways. Utilitza aquesta constant per:

- Dominis externs que no són gestionats per Ultimate Multisite (per exemple, un lloc de *marketing* separat que comparteix la mateixa aplicació de Cloudways)
- Dominis allotjats o de *staging* que vols mantenir a la llista d'alias de l'aplicació

**No** utilitzis aquesta constant per el comodinal de subdomain de la teva pròpia xarxa
(per exemple, `*.your-network.com`). Consulta el problema del comodinal SSL més avall.

## Important — El problema del comodinal SSL {#important--wildcard-ssl-pitfall}

Un error freqüent quan es segueixen les configuracions per defecte de Cloudways és afegir un comodinal com `*.your-network.com` a `WU_CLOUDWAYS_EXTRA_DOMAINS`, o instal·lar manualment un certificat SSL comodinal de Cloudways per a aquest comodinal.

**Si ho fas, Cloudways rifiutrà d'emetre certificats Let's Encrypt per els dominis personalitzats per tenant que mapeja Ultimate Multisite.** Cloudways substitueix el certificat SSL actiu a l'aplicació cada vegada, i un certificat comodinal preexistents a l'aplicació bloqueja l'emissió de Let's Encrypt per domini de la qual cosa depèn l'integració.

### Configuració SSL recomanada de Cloudways per a una xarxa Ultimate Multisite {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. A la pestanya **SSL Certificate** de l'aplicació de Cloudways, instal·la un **certificat Let's Encrypt estàndard** que cobreixi només `your-network.com` i `www.your-network.com` — **no** un comodinal.
2. **No** afegir `*.your-network.com` (o qualsevol patró de subdomain de la teva pròpia xarxa) a `WU_CLOUDWAYS_EXTRA_DOMAINS`. Reserva aquesta constant només per a dominis **externs**.
3. Crea el comodinal de subdomain per tenant al nivell **DNS** només (un registre `A` per a `*.your-network.com` que apunten a l'IP del servidor de Cloudways) perquè els subsites es resolquin. L'SSL per els dominis personalitzats mapejats individualsment es compleixa automàticament a través de l'integració mitjançant Let's Encrypt.

Si els dominis personalitzats dels teus tenants estan atascats sense SSL, comprueba la pestanya SSL Certificate de Cloudways. Si hi ha un certificat comodinal actiu (instal·lat manualment, o que cobreixi `*.your-network.com`), Cloudways no emetrà certificats Let's Encrypt per dominis personalitzats. Substituïsc-ho per un certificat Let's Encrypt estàndard que cobreixi només el domini principal de la xarxa (`your-network.com`, `www.your-network.com`) i elimina qualsevol entrada comodinal de `WU_CLOUDWAYS_EXTRA_DOMAINS`. Després, re-activa el mapeig de domini (o espera el proper) i l'integració començarà a emetre certificats per domini de nou.

## Solucionar problemes {#troubleshooting}

### Problemes de connexió API {#api-connection-issues}
- Verifica que el teu correu electrònic i la clau API són correctes
- Comprova que els teus IDs de servidor i aplicació són correctes
- Assegura't que el teu compte de Cloudways té els permisos necessaris

### Problemes de certificats SSL {#ssl-certificate-issues}
- Cloudways exigeix que els dominis tinguin registres DNS vàlids que apunten al teu servidor abans d'emetre certificats SSL
- L'integració valida els registres DNS abans de sol·licitar certificats SSL
- Si no s'estan emetent certificats SSL, comprueba que els teus dominis apunten correctament a l'adreça IP del teu servidor
- **¿Dominis personalitzats per tenant atascats sense SSL?** Comprova la pestanya SSL Certificate de l'aplicació de Cloudways. Si hi ha un certificat comodinal (instal·lat manualment, o que cobreixi `*.your-network.com`) actiu, Cloudways no emetrà certificats Let's Encrypt per dominis personalitzats. Substituïsc-ho per un certificat Let's Encrypt estàndard que cobreixi només el domini principal de la xarxa (`your-network.com`, `www.your-network.com`) i elimina qualsevol entrada comodinal de `WU_CLOUDWAYS_EXTRA_DOMAINS`. Després, re-activa el mapeig de domini (o espera el proper) i l'integració sol·licitarà certificats per domini.

### Domini no afegit {#domain-not-added}
- Comprova els registres de Ultimate Multisite per qualsevol missatge d'error
- Verifica que el domini no estigui ja afegit a Cloudways
- Assegura't que el teu pla de Cloudways suporta el nombre de dominis que estàs afeguint
