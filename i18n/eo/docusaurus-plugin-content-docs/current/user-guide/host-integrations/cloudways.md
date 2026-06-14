---
title: Integriteco Cloudways
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Cloudways Integation

## Aperçu
Cloudways estas platformo de alojado cloud gérée kiu permiĉas al vi deplopi sita WordPress sur diversaj cloud providendoj kiel DigitalOcean, AWS, Google Cloud kaj pli. Ĉi tiu integriĝo permesas aŭtomatan domeno sincronigon kaj SSL-sertifikatoj manĝestion inter Ultimate Multisite kaj Cloudways.

## Funkcioj
- Aŭtomata domeno sincronigo
- Manĝestro de SSL-sertifikatoj
- Subteno por ekstrema domeno
- DNS validacio por SSL-sertifikatoj

## Requisitoj
La seguenti konstantaĵoj devas esti definita en via `wp-config.php` filiro:

```php
define('WU_CLOUDWAYS_EMAIL', 'via_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'via_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'via_server_id');
define('WU_CLOUDWAYS_APP_ID', 'via_app_id');
```

Opicionalajne, vi ankaŭ povas defini:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'virgilo,separita,listo,de,domenoj');
```

## Instrukoj por Montado

### 1. Akcepte Vian Cloudways API Credencojn

1. Logu-sin al via Cloudways dashboardo
2. Altiĝu al "Account" > "API Keys" (Kontado > API-clavo)
3. Genere API-clavon, se vi ne havas ĝin iam
4. Kopiu vian e-mailajn informojn kaj API-clavon

### 2. Akcepte Vian Servern kaj Aplikaĵn Identigojn

1. En via Cloudways dashboardo, altiĝu al "Servers" (Serveroj)
2. Selektoj la serveron, kie via WordPress multisite estas alojita
3. La Server ID estas vidbla en la URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Altiĝu al "Applications" (Aplikoj) kaj selektos vian WordPress aplikacion
5. La App ID estas vidbla en la URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Ado de Konstantaĵoj al wp-config.php

Adu la seguenti konstantaĵojn al via `wp-config.php` filiro:

```php
define('WU_CLOUDWAYS_EMAIL', 'tu_email_cloudways');
define('WU_CLOUDWAYS_API_KEY', 'tua_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'tu_server_id');
define('WU_CLOUDWAYS_APP_ID', 'tua_app_id');
```

Se vi uzajnu **eksternajn** domenojn (forta alien tuja de la viaja reto) ki devas ĉiam resti sur la listo alias Cloudways:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Ne inkluzi vian sian reton wildcardo
**Ne** ajuvi `*.via-reto.com` ( aŭ iu ajn subdomajno patero de via reto) al `WU_CLOUDWAYS_EXTRA_DOMAINS`. Vidu [Importanta — wildcard SSL pièvo](#important--wildcard-ssl-pitfall) aldaŭ por kialo kio permesas ĉi tiun interŝaltadon de SSL-sertifikato por ĉiu lojiko.
:::

### 4. Aktivi la Integretan

1. En via WordPress admina, diru Ultimate Multisite > Settings (Konfigurado)
2. Navigu al la tabelo "Domain Mapping" (Domeno Mapado)
3. Scrollu al la parteco "Host Integrations" (Hosta Integretoj)
4. Aktivi la Cloudways integration
5. Kliku sur "Save Changes" (Konservi ŝanĝojn)

## Kiel Ĝi Funkcias

### Domeno Sincronado

Kiam domeno estas mapita en Ultimate Multisite:

1. La integration rekviriĝas ĉiuj aktualaj mapitaj domenoj
2. Ĝi ajuvas la novan domenon al la listo (jok la www-version, se aplika)
3. Ĝi sendas la kompletan liston al Cloudways per la API
4. Cloudways ĝisdatigas la domeno alias por via aplikado

Notu: La Cloudways API postulas diri la kompletan liston de domenoj ĉiu fojon, ne nur ajuvi aŭ forigi individua domenojn.

### SSL-Sertifikato Administrado

Post kiam domenoj estas sincronitaj:

1. La integration kontrolas kiuj domenoj havas validajn DNS-registroj, kiem pointing al via servero
2. Ĝi sendas peton al Cloudways por instali Let's Encrypt SSL-sertifikato por ti domenoj
3. Cloudways gestas la emitadon kaj instaladon de la SSL-sertifikato

La integriĝo ĉiam petas **standard** (ne-wildcard) Let's Encrypt sertifikatom de Cloudways. Se wildcard patero estas donita en `WU_CLOUDWAYS_EXTRA_DOMAINS`, la vorto `*.` antaŭ la SSL petado estas forigita — la wildcard mem ne estas instalita per ĉi tiu integriĝo. Por uzi wildcard sertifikatom sur Cloudways vi devus instali ĝin manuele, sed tio blokas la emitadon de Let's Encrypt por ĉiu domeno por mapitaj personalaj domenoj (vidu la krison below).

## Ekstra Domenoj

La konstanta `WU_CLOUDWAYS_EXTRA_DOMAINS` permesas vi spesifi eksterajn **eksterajn** domenojn, kiuj devus ĉiam resti sur la alias-listo de la aplikado Cloudways. Uzdu ĝin por:

- Eksteraj domenoj, kiuj ne estas administritaj de Ultimate Multisite (ekzemple, apartigita marketa sitio, kiu parta la same Cloudways aplikadon).
- Parkitaj aŭ staging domenoj, kiujn vi volas resti sur la alias-listo de la aplikado.

**Ne** uzu ĉi tią konstanton por la wildcard subdomeno de via propra reto (ekzemple `*.your-network.com`). Vidu la krison pri wildcard SSL below.

## Importanta — Kriso pri Wildcard SSL

Komuna eraro, kiam vi sekvas la defaultan montron de Cloudways, estas aĉeti tiaj wildcard kiel `*.your-network.com` al `WU_CLOUDWAYS_EXTRA_DOMAINS`, aŭ manuele instali wildcard SSL sertifikatom de Cloudways por tiu wildcard.

**Se vi faras tion, Cloudways ne permesos emiti Let's Encrypt sertifikatom por la personalaj domenoj por tenantoj kiujn Ultimate Multisite mapas.** Cloudways subventus la aktivan SSL-sertifikaton sur la aplikadon ĉiu fojon, kaj antaŭa wildcard sertifikato sur la aplikado blokas la emitadon de Let's Encrypt por ĉiu domeno kiun la integriĝo bazigas.

### Rekomandita Cloudways SSL montro por Ultimate Multisite reto

1. Na la tab **SSL Certificate** de la aplikacio Cloudways, instaliu sertifikat **standard Let's Encrypt** kiu cubre nombe `your-network.com` kaj `www.your-network.com` — **nont** wildcard.
2. **Nont** meti `*.your-network.com` (aŭ iu ajpa subdomena patro de viajita recko) en `WU_CLOUDWAYS_EXTRA_DOMAINS`. Rezervu tiu konstanta por **eksteraj** domajnoj nombro nur.
3. Kreu la wildcard subdomain per-tenant al nivel **DNS** nur (un `A` record por `*.your-network.com` apuntanta al IP de viaja server Cloudways) por ke subdomajnoj resolvas. SSL por individua mapita personala domajno estas tiam emitita avteomatike per la integriĝo via Let's Encrypt.

Se viajantaj klientoj sin estas blokitaj sen SSL, kontrolu la tab **Cloudways SSL**. Se wildcard sertifikato estas aktiva tie, eliminu ĝin, re-emiti standardan Let's Encrypt sertifikaton por la ĉefan recko de la recko nur, kaj eliminu ĉiujn wildcard en `WU_CLOUDWAYS_EXTRA_DOMAINS`. Tiam re-aktive triggeri domajno mapadon (aŭ aguardi la sekvan) kaj la integriĝo komencos emiti sertifikato per domajno.

## Problemoj pri diagnostiko

### Problemo kun API konekto
- Verifimu, ke via e-mail kaj API ŝlosilo estas ĝustataj
- Kontrolu, ke via server kaj aplikacio ID'oj estas ĝustataj
- Assuringu, ke via Cloudways konto havas la necesajn permesojn

### Problemajn kun SSL Sertifikatoj
- Cloudways praferas, ke domenoj ha validajn DNS registroj, kiuj indikiĝas al via servero, пред издавати SSL sertifikatojn.
- La integriĝo validefaraj DNS registrojn пред peti SSL sertifikatojn.
- Se SSL sertifikatoj ne estas emitita, kontrolu, ĉu via domenoj ĝuste indikiĝas al via servero's IP-adreso.
- **Per-tenant personalaj domenoj blokitaj sen SSL?** Kontenu la tabelon "SSL Certificate" de la aplikado Cloudways. Se wildcard sertifikato (manuale instalita, aŭ kiu cakavas `*.your-network.com`) estas aktiva, Cloudways ne emitos Let's Encrypt sertifikatojn por individue mapitaj personalaj domenoj. Substitu ĝin per standardan Let's Encrypt sertifikaton, kiu cakavas nur la ĉevan retoj domenon (`your-network.com`, `www.your-network.com`) kaj forigu ĉiuj wildcard en `WU_CLOUDWAYS_EXTRA_DOMAINS`. Tiam re-aktive domeno mapadon ( aŭ aguardu la sekvan) kaj la integriĝo petos sertifikatojn per domenon.

### Domeno Ne Adata
- Kontenu la logojn de Ultimate Multisite por ĉian eraro mesaĝoj.
- Verifigu, ke la domeno ne estas déjà data al Cloudways.
- Assuringu, ke via Cloudways plan subtenas la nancojn de domenoj, kiujn vi estás rajdaj.
