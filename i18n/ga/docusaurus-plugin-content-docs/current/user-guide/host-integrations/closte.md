---
title: Cloiste Integration
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Closte Integration

## Oibríocht (Overview)
Is Closte is platform host WordPress a bhfostaithe ar craic Google Cloud. Féachfaidh an cur chuimhne seo sinteacht domáin agus cur chuimhne SSL certificate ag cur chuimhne go dtí le Ultimate Multisite agus Closte.

## Feicharásanna (Features)
- Cur chuimhne domáin
- Cur chuimhne SSL certificate
- Suíocht ar domáin wildcard
- Níl aon cheangacht ag cur chuimhne mar thuair an t-Closte

## Cuidiúcháin (Requirements)
Is gceart sin chéadún constant a chur in díriú i do láimhseáil `wp-config.php` má tá tú ag úsáid Closte:

```php
define('CLOSTE_CLIENT_API_KEY', 'do_api_key');
```

Is é an constant seo tí ar fáil go dtí tú a bhfostaithe ar Closte.

## Instructiona Cuidiúcháin (Setup Instructions)

### 1. Déan cinnte de do Closte API Key

Má tá tú ag fhostáil ar Closte, caithfidh an constant `CLOSTE_CLIENT_API_KEY` a bheith tí ar fáil i do láimhseáil `wp-config.php`. Is féidir leat é seo a chosaint ag cur chuimhne i do láimhseáil `wp-config.php`.

### 2. Fáilte an cur chuimhne (Enable the Integration)

1. I do admin WordPress, cur isteach ar Ultimate Multisite > Settings
2. Cur chuimhne ar tab "Domain Mapping"
3. Glac go leathanach go dtí "Host Integrations"
4. Fáilte an cur chuimhne Closte
5. Cliom ar "Save Changes"

## Conas Tá Sinteacht Ag Réiteach (How It Works)

Nuair a bhíonn domán ag cur chuimhne i Ultimate Multisite:

1. Taispeann an cur chuimhne cur chuimhne ar API Closte chun domáin a chomhfaidh ag do application
2. Bheann Closte ag cur chuimhne SSL certificate go dtí leat
3. Nuair a bhíonn cur chuimhne domáin ag cur chuimhne, beann an cur chuimhne domáin a bhaint ar Closte

Tá an cur chuimhne sinteacht ag cur chuimhne leis an cur chuimhne DNS check interval i Ultimate Multisite, rud a fháil duit a chur in díriú conas a bheith ag cur chuimhne an t-amach ar DNS agus an cur chuimhne SSL certificate.

## Creach Domáin (Domain Record Creation)

Céad maí seán! Is é an curteáil seo a fháil go bhfuil curtha ar an t-aonáil seo:

Seo curteáil a sholáthíonn sé go bhfuil curtha ar an t-aonáil in a bheith curtha ar chuid site nó a dubhail. Is é seo go mórchúlaigh le Closte, mar a bhfaidh curtha ar an t-aonáil a chur in áit, gur thaispeántacht chun API Closte a chur in áit an domáin agus an sertificat SSL a chur in áit.

## Curteála (Troubleshooting)

### Problemaí le Cónáiste API
- Déan cinnte go bhfuil curtha ar an chuid key API Closte cosúil le ceart.
- Déan cinnte go bhfuil breiseanna ag curtha ar chuid account Closte.

### Problemaí le Sertificat SSL
- Beiridh Closte séamhailt (SSL certificates) de chuid t-am (tiomáid 5-10 minuta).
- Déan cinnte go bhfuil do chuid domáin ag curtha ar an IP address de chuid server Closte.
- Déan cinnte go bhfuil na record DNS de do chuid domán ag curtha ar fáil ar bhealach ceart.

### Domán Níl Curtha Ar Fáil
- Déan cinnte go bhfuil aon rud éifeachtach ar an log Ultimate Multisite.
- Déan cinnte go bhfuil an domán níl curtha ar Closte anois.
- Déan cinnte go bhfuil na record DNS de do chuid domán ag curtha ar fáil ar bhealach ceart.

### Taispeántacht Cónáiste DNS
- Má tá sertificat SSL ag curt go mórchúlaigh a chur in áit, leat ormúint an t-amaisc DNS check i ngléanna Mapping Domáin (Domain Mapping settings).
- Is é an amaisc de chuid default 300 second (5 minuta), ach is féidir leat é a chur ar 10 second as an t-amaisc chun curtha ar fáil sé go tapa ag teastáil.
