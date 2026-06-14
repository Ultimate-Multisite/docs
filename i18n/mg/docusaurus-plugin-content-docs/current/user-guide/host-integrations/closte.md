---
title: Fampidirana Closte
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Fandahana Amin'ny Closte

## Famarahabana (Overview)
Ny Closte dia sehatra hosting WordPress voaomana izay natao tamin'ny fototra Google Cloud. Ity fampifandraisana ity dia mamela ny fametrahana mivantana ny domain sy ny fitantanana ny SSL certificate eo amin'ny Ultimate Multisite sy Closte.

## Toa (Features)
- Fametrahana mivantana ny domain ho azy (Automatic domain syncing)
- Fitantanam-bola SSL certificate (SSL certificate management)
- Fanohanana domain wildcard (Wildcard domain support)
- Tsy mila fametrahana na fanamboarana raha miasa amin'ny Closte ianao

## Fepetra Takiana (Requirements)
Ity constant ity dia tokony ho voarakitra ao anaty rakitra `wp-config.php` anao raha mampiasa Closte ianao:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

Matetika dia efa misy io constant io raha miasa amin'ny Closte ianao.

## Toromarika Fampidirana (Setup Instructions)

### 1. Fantaro ny API Key an'ny Closte anao

Raha miasa amin'ny Closte ianao, tokony ho voarakitra ao anaty rakitra `wp-config.php` anao ilay constant `CLOSTE_CLIENT_API_KEY`. Afaka manamarina izany amin'ny famakiana ny rakitra `wp-config.php` anao ianao.

### 2. Ampirisihina ny Fampifandraisana (Enable the Integration)

1. Ao amin'ny admin WordPress anao, mandehana any amin'ny Ultimate Multisite > Settings
2. Mandehana any amin'ny "Domain Mapping" tab
3. Mandroso any amin'ny "Host Integrations" ianao
4. Ampirisihina ny fampifandraisana Closte (Enable the Closte integration)
5. Tsindrio ny "Save Changes"

## Ahoana no Asa (How It Works)

Rehefa misy domain voapetra ao amin'ny Ultimate Multisite:

1. Ny fampifandraisana dia mandefa fangatahana mankany amin'ny API an'ny Closte mba hanampiana ny domain ao amin'ny application anao
2. Ny Closte no mitantana ho azy ny fanomezana SSL certificate (SSL certificate provisioning)
3. Rehefa esorina ny fametrahana domain, dia esorina avy amin'ny Closte ny fampifandraisana

Miasa koa ity fampifandraisana ity miaraka amin'ny fepetra "DNS check interval" ao amin'ny Ultimate Multisite, izay mamela anao hamantatra ny fomba fanaovana fanamarinana DNS sy ny famoronana SSL certificate.

## Famoronana Fandaharam-ba Domain (Domain Record Creation)

Ity fampifandrahana ity dia miantoka fa rehefa vita na namboarina ny tranokala iray na nampiana kopia azy, dia misy fametrahana domain (domain record) ho voara-maso ho azy. Tena zava-dehibe izany amin'ny Closte integration satria ny famoronana io fametrahana domain io no mamporisika ny API an'ny Closte mba hamoronana ny domain sy ny SSL certificate.

## Fandresena Olana (Troubleshooting)

### Olana momba ny Fifandraisana amin'ny API
- Fantaro fa marina ny Closte API key anao
- Antsoy fa manana zo ilaina ao amin'ny kaontinao Closte ianao

### Olana momba ny SSL Certificate
- Mety mila fotoana kely ny Closte mba hanomezana SSL certificates (matetika 5-10 minitra)
- Fantaro fa marina ny fametrahana ireo domain anao amin'ny adiresin'ny IP an'ny server Closte anao
- Jereo ny DNS records ho an'ny domain anao mba hahazoana antoka fa voara-maso tsara izy ireo

### Tsy Nampiana Domain
- Jereo ny logs an'ny Ultimate Multisite raha misy hafatra fahadisoana (error messages)
- Fantaro fa tsy nampiana amin'ny Closte mihitsy ilay domain ianao
- Antsoy fa voara-maso tsara ireo DNS records an'ilay domain anao

### Fepetra ho an'ny DNS Check Interval
- Raha miadana loatra ny fotoana hanomezana SSL certificates, dia afaka manova ny fepetra ho an'ny DNS check interval ao amin'ny Domain Mapping settings ianao
- Ny fepetra tokony ho default dia 300 seconds (5 minitra), fa afaka mametraka azy ho latsaky ny 10 seconds ianao mba haingana kokoa ny fanamarinana mandritra ny test.
