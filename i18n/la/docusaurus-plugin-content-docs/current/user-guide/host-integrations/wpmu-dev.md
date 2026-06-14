---
title: Integratio WPMU DEV
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# Integratio WPMU DEV

## Visio
WPMU DEV est platforma WordPress completa quae hostium, pluginus et servitia ad sita WordPress offerit. Ha integratio permittit sincronizandum automaticum domini et gestionem certificatibus SSL inter Ultimate Multisite et hosting WPMU DEV.

## Caracteres
- Sincronizatio dominii automatica
- Gestionem certificatorum SSL
- Tentamina verificandi certificatei SSL extendentia

## Requisitos
Integratio automaticiter detegit si tu hostis in WPMU DEV et API incorporatam usus facit. Nulla configuration addita requiritur si hostis in WPMU DEV es.

Integratio verifica praesentiam constantiae `WPMUDEV_HOSTING_SITE_ID`, quae automatico definitur cum hostis in WPMU DEV es.

## Instructiones Configurandi

### 1. Verificatio Hosting WPMU DEV

Si hostis in WPMU DEV es, constants necessarias iam debent definita esse. Verifica quod:

1. Constantia `WPMUDEV_HOSTING_SITE_ID` est definita in tuo ambiente
2. Habes membresiam activa WPMU DEV cum accessu API

### 2. Activatio Integrationis

1. In admin WordPress tuo, ad Ultimate Multisite > Settings adere
2. Ad tabulam "Domain Mapping" (Mappatio Dominii) naviga
3. Ad "Host Integrations" (Integratio Hostium) descende
4. Integracionem WPMU DEV activa fac
5. "Save Changes" (Salva Cambia) clica

## Quommodo Opera
### Sincronizatio Dominii

Cum dominium in Ultimate Multisite mappatur:

1. Integratio API WPMU DEV usus facit ut dominium ad tuum numerum hosting addat
2. Etiam versionem www dominii automaticam addit
3. WPMU DEV configuration dominii et issuance certificatuum SSL maneat

### Gestionem Certificatorum SSL

La integratio est configurata ad incrementum numerus tentationum verificandi certificatuum SSL pro hébergement WPMU DEV, quia temporis potest esse longus ad emissio et installationem certificatorum SSL. Per default, probabit usque ad 10 tentationes ad verificandum certificatuum SSL, comparatum cum normais 5 tentationibus.

## Notae Importantes

### Removetur Dominium

Actualmente, API WPMU DEV non daret viam ad remotionem domiorum. Cum mappula dominii in Ultimate Multisite removetur, dominium in tuo computo hébergement WPMU DEV manebit. Necessaris manuque e itino removi si necesse.

### Authentica API

Integratio usus facit clave API WPMU DEV quae in database WordPress tua optione `wpmudev_apikey` est. Hoc automatico est configuratum cum situm tuum connectis ad WPMU DEV.

## Solutio Problematum

### Problema Connectionis API
- Verifica si situm tuum propert connecti ad WPMU DEV
- Verifica si option `wpmudev_apikey` in database WordPress tua est posta
- Assure te quod membres WPMU DEV tuus activi sunt

### Problema Certificatorum SSL
- WPMU DEV temporis alicui ad emissio certificatuum SSL potest esse (solitunque 5-15 minutarum)
- Integratio configurata est ut usque ad 10 times certifica SSL verificetur
- Si certifica SSL non emissi sunt post multas tentationes, contacta support WPMU DEV

### Dominium Non Aditum
- Verifica logs Ultimate Multisite ad quosdam errores
- Verifica si dominium iam in WPMU DEV additum est
- Assure te quod plan hébergement WPMU DEV tuus numerum domiorum quae addebis suportat
