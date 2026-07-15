---
title: Integració amb Cloudflare
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Integració amb Cloudflare

## Resum {#overview}
Cloudflare és un reticular de distribució de contingut (CDN) i proveïdor de seguretat líder que ajuda a protegir i accelerar els llocs web. Aquesta integració permet la gestió automàtica de domini entre Ultimate Multisite i Cloudflare, especialment per a instal·lacions de multisite amb subdominis.

## Funcionalitats {#features}
- Creació automàtica de subdominis a Cloudflare
- Suport de subdominis proxiate
- Gestió de registres DNS
- Visualització avançada de registres DNS a l'administració d'Ultimate Multisite

## Requisits {#requirements}
Les constants siguents han de ser definides al vostre fitxer `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Instruccions de configuració {#setup-instructions}

### 1. Obté la vostra clau API de Cloudflare {#1-get-your-cloudflare-api-key}

1. Inforeixeix al vostre panell de control de Cloudflare
2. Navegueu a "My Profile" (clicari sobre el vostre correu electrònic a la cantonada superior dreta)
3. Seleccioneu "API Tokens" del menú
4. Creari un nou token API amb els permisos siguents:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. Copieu el vostre token API

### 2. Obté l'ID de Zona {#2-get-your-zone-id}

1. Al vostre panell de control de Cloudflare, seleccioneu el domini que voleu utilitzar
2. L'ID de Zona és visible a la pestanya "Overview", a la barra lateral dreta, sota "API"
3. Copieu l'ID de Zona

### 3. Afegir les constants a wp-config.php {#3-add-constants-to-wp-configphp}

Afegiu les constants siguinents al vostre fitxer `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Activar l'integració {#4-enable-the-integration}

1. A l'administració de WordPress, aneu a Ultimate Multisite > Settings
2. Navegueu a la pestanya "Domain Mapping"
3. Descolleu fins a "Host Integrations"
4. Activeu l'integració de Cloudflare
5. Clicari en "Save Changes"

## Com funciona {#how-it-works}

### Gestió de subdominis {#subdomain-management}

Quan es crea un nou lloc en una instal·lació de multisite amb subdominis:

1. L'integració envia una sol·licitud a l'API de Cloudflare per afegir un registre CNAME per al subdomini
2. Per defecte, el subdomini es configura per ser proxiat a través de Cloudflare (això es pot canviar amb filtres)
3. Quan es suprimeix un lloc, l'integració eliminarà el subdomini de Cloudflare

### Visualització de registres DNS {#dns-record-display}

L'integració millora la visualització dels registres DNS a l'administració d'Ultimate Multisite de la següent manera:

1. Recuperant registres DNS directament de Cloudflare
2. Mostrant si els registres són proxiate o no
3. Mostrant informació addicional sobre els registres DNS

## Noms d'host personalitzats de Cloudflare {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (anteriorment anomenat "Cloudflare for SaaS") és una funcionalitat de Cloudflare que permet als vostres clients utilitzar els seus propis dominis amb SSL a la vostra xarxa multisite. És l'enquadrament recomanat per a instal·lacions multisite mapejades per domini que utilitzen Cloudflare, perquè Cloudflare gestiona automàticament l'emissió i la renovació del certificat SSL per a cada domini personalitzat.

### Com difereix de l'integració estàndard de Cloudflare {#how-it-differs-from-the-standard-cloudflare-integration}

| | Integració estàndard | Cloudflare Custom Hostnames |
|---|---|---|
| **Objectiu** | Crea registres DNS automàticament per subdominis | Permaneix dominis personalitzats (mapejats) amb SSL gestionat per Cloudflare |
| **Millor per** | Multisite amb subdominis | Multisite mapejats per domini |
| **SSL** | Gestionat separatament | Gestionat automàticament per Cloudflare |

### Configuració de Cloudflare Custom Hostnames {#setting-up-cloudflare-custom-hostnames}

1. Al vostre panell de control de Cloudflare, obriu la zona del vostre domini principal.
2. Navegueu a **SSL/TLS > Custom Hostnames**.
3. Afegiu un orígin de reserva (fallback origin) que apunti a l'IP o nom d'host del vostre servidor.
4. Per a cada domini client mapejat a Ultimate Multisite, afegiu una entrada Custom Hostname a Cloudflare. Podeu automatitzar aquest pas utilitzant l'API de Cloudflare.
5. Cloudflare emet i renova els certificats TLS per a cada nom d'host personalitzat automàticament quan el DNS del client apunta a la vostra xarxa.

Per a la referència completa de l'API, veureu [documentació de Cloudflare Custom Hostnames](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Actualització de terminologia
A partir d'Ultimate Multisite v2.6.1, aquesta funcionalitat es refereix com a **Cloudflare Custom Hostnames** a totes les configuracions i etiquetes del plugin. Versió anteriors utilitzaven el nom "Cloudflare for SaaS", que és el nom del producte fonamental de Cloudflare.
:::

## Notes importants {#important-notes}

A partir de les últimes actualitzacions de Cloudflare, el *wildcard proxying* (proximent comodinal) és ara disponible per a tots els clients. Això significa que l'integració estàndard de DNS de Cloudflare és menys crítica per les instal·lacions de multisite amb subdominis del que ho era abans, ja que simplement podeu configurar un registre DNS comodinal a Cloudflare.

## Solucionar problemes {#troubleshooting}

### Problemes de connexió API {#api-connection-issues}
- Verifiqueu que el vostre token API és correcte i té els permisos necessaris
- Comproveu que el vostre ID de Zona és correcte
- Assegureu-vos que el vostre compte de Cloudflare té els permisos necessaris

### Subdomini no afegit {#subdomain-not-added}
- Comproveu els registres d'Ultimate Multisite per qualsevol missatge d'error
- Verifiqueu que el subdomini no estigui ja afegit a Cloudflare
- Assegureu-vos que el vostre pla de Cloudflare suporta el nombre de registres DNS que creades

### Problemes de proximent {#proxying-issues}
- Si no voleu que els subdominis siguin proxiate, podeu utilitzar el filtre `wu_cloudflare_should_proxy`
- Algunes funcionalitats poden no funcionar correctament quan són proxiate (per exemple, certes funcions d'administració de WordPress)
- Considerare utilitzar les Regles de pàgina (Page Rules) de Cloudflare per saltar el cache de les pàgines d'administració
