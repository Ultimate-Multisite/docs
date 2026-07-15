---
title: Cúileanna WPMU DEV
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# Integration le WPMU DEV

## Oibríocht {#overview}
Is é WPMU DEV platform WordPress ceart a bhfuil hosting, plugins agus serbhiseanna ar fáil do siti WordPress. Féachfaidh an chéad seo a bheith ag cur isteach sincontró domáin go dtí chuid (domain syncing) agus cur rialacha SSL certificate management idir Ultimate Multisite agus hosting WPMU DEV.

## Feicharásanna {#features}
- Cur isteach domáin go dtí chuid (Automatic domain syncing)
- Cur rialacha SSL certificate management
- Cur éifeachtach ar chuid deacairt rialacha SSL certificate verification attempts

## Cuidiúanna {#requirements}
Taispeann an chéad seo go hiomlán an bhfuil tú ag cur isteach ar WPMU DEV agus a úsáideann API atá ag cur isteach. Níl aon cheangacht eile ag cur isteach mar atá tú ag cur isteach ar WPMU DEV.

Taispeann an chéad seo ar an t-idreachas `WPMUDEV_HOSTING_SITE_ID`, a bhaineann go dtí an t-idreachas nuair a bhfuil tú ag cur isteach ar WPMU DEV.

## Teach Cliúnaigh {#setup-instructions}
### 1. Taispeáin an Cur isteach ar WPMU DEV {#1-verify-wpmu-dev-hosting}

Má tá tú ag cur isteach ar WPMU DEV, caithfidh na chuid deacairt sin ag cur isteach. Taispeáin go bhfuil:

1. An t-idreachas `WPMUDEV_HOSTING_SITE_ID` cur isteach i do chuid (environment)
2. Tá tú le chuid membership WPMU DEV atá ag cur isteach API access

### 2. Fáilte ar an Cur isteach {#2-enable-the-integration}

1. I do admin WordPress, cur isteach go Ultimate Multisite > Settings
2. Taispeáin go cur isteach ar an tab "Domain Mapping"
3. Glac go leathanach go "Host Integrations"
4. Fáilte ar an cur isteach WPMU DEV
5. Cliú ar "Save Changes"

## Conas Tá Sin Ag Réiteach {#how-it-works}

### Cur isteach domáin (Domain Syncing) {#domain-syncing}

Nuair a bhíonn domán ag cur isteach i Ultimate Multisite:

1. Bainneann an chéad seo ag úsáid API WPMU DEV chun an domán a chuid ar chuid hosting
2. Bainneann sé ag cur isteach an fhoirtí www (www version) de do domán go dtí chuid
3. Bainneann WPMU DEV an cur isteach domáin agus an cur rialacha SSL certificate a chur in áit

### Cur rialacha SSL certificate management {#ssl-certificate-management}

Tá an curthaighneacht a chur ar fáil chun an t-amachas féachfaidh níos mó de chertacha SSL do hostaí WPMU DEV, mar is féidir leat go ngéiste an t-amachas a bheith seacht. Mar chuid de chuid, beidh sé ag iarraidh a bheith ar aghaidh go dtí 10 amachas chun an t-amachas SSL a féachfaidh, mar chomh maith leis an t-amachas ceart 5.

## Nótaithe ag Duine {#important-notes}

### Taispeán Domáin (Domain Removal) {#domain-removal}

Ag curthaighneacht ar fáil ar an lá atá, níl aon fáil ar an WPMU DEV API a chur ar fáil chun domáin a thoil. Nuair a bhíonn curthaíocht domáin ag tsláthadh i Ultimate Multisite, beidh an domán ag tairiscint i do account hostaí WPMU DEV. Beidh tú ag iarraidh é a thoil go dtí an dashboard hostaí WPMU DEV má tá sé ag curthaighneacht.

### Authaithne API (API Authentication) {#api-authentication}

Bíonn an curthaighneacht ag úsáid an key API de WPMU DEV atá ag teanglaíonn i do database WordPress mar option `wpmudev_apikey`. Is é seo ag curthaighneacht go dtí an t-amachas nuair a chomhcheanglaíonn tú do site le WPMU DEV.

## Treoiche (Troubleshooting) {#troubleshooting}

### Cúsaí ar Chomhcheanglaíonn API (API Connection Issues) {#api-connection-issues}
- Déan cinnte go bhfuil do site ceart curthaighneach le WPMU DEV
- Déan cinnte go bhfuil an option `wpmudev_apikey` ag curthaighneacht i do database WordPress
- Déan cinnte go bhfuil do chuid membership WPMU DEV agat

### Cúsaí ar Chertacha SSL (SSL Certificate Issues) {#ssl-certificate-issues}
- Beidh WPMU DEV ag iarraidh seacht chun chertacha SSL a chur ar fáil (tiomáid ar 5-15 minuta)
- Tá an curthaighneacht curthaighneach chun an t-amachas SSL a féachfaidh go dtí 10 amachas
- Má tá an t-amachas SSL ag iarraidh seacht tar éifeachtach tar éifeachtach, tapaidh do chuid support WPMU DEV

### Domán Níl Ag Bhairt (Domain Not Added) {#domain-not-added}
- Déan cinnte go bhfuil aon rud féachfaidh ar an log Ultimate Multisite
- Déan cinnte go bhfuil an domán níl ag curthaighneacht agat i WPMU DEV
- Déan cinnte go bhfuil do plan hostaí WPMU DEV ag curthaighneacht an n-amachas domáin atá agat
