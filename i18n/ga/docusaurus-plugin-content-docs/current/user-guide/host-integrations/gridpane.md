---
title: Cothromadh Pane
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# Intégráisi le GridPane

## Oibríocht
Is é GridPane curteáil control panel hosting WordPress a thugtar do phroesionail WordPress leatach. Féachfaidh an chéad seo a bheith i gcónaí domáin agus a bhaint ar cert feidhm SSL idir Ultimate Multisite agus GridPane.

## Feicharásanna
- Cónaí domáin ag sinte (Automatic domain syncing)
- Bhaint ar cert feidhm SSL
- Chéadú curteáil SUNRISE go hiomlán

## Cuidiúcháin
Is gceart a chur i bhfeidm na cónaí seo i do láimhseáil `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'do-api-key');
define('WU_GRIDPANE_SERVER_ID', 'do-server-id');
define('WU_GRIDPANE_APP_ID', 'do-site-id');
```

## Instructiona de Déanáil

### 1. Rao do Cónaí API GridPane

1. Login go dtí do dashboard GridPane
2. Go tới "Settings" > "API"
3. Déan gníomh ar an API key má níl agat ag cur chuig
4. Coptaigh do API key

### 2. Rao do ID Server agus Site

1. I do dashboard GridPane, go dtí "Servers"
2. Déan chun an server a bhfuil do WordPress multisite ag cur isteach agat
3. Note the Server ID (a bhaineann i URL nó ar an seachtail na server)
4. Go dtí "Sites" agus déan chun do site WordPress a bheith agat
5. Note the Site ID (a bhaineann i URL nó ar an seachtail an site)

### 3. Add Cónaí i wp-config.php

Add do cónaí seo i do láimhseáil `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'do-api-key');
define('WU_GRIDPANE_SERVER_ID', 'do-server-id');
define('WU_GRIDPANE_APP_ID', 'do-site-id');
```

### 4. Chéadú an Intégráisiún

1. I do admin WordPress, go dtí Ultimate Multisite > Settings
2. Go dtí tab "Domain Mapping"
3. Scroll go hiomlán chun "Host Integrations" a fheiceáil
4. Chéadú an intégráisiún GridPane
5. Click ar "Save Changes"

## Conas Tá Éifeachtach Sé?

Nuair a bhíonn domán ag sinte i Ultimate Multisite:

1. An tús áit an cur chuim a bheith ag an integration, té aistriú go raonacht API de GridPane chun an domáin a chuidite ar do site.
2. Bheann GridPane a chuidite go raonacht SSL certificate.
3. Nuair a bhíonn cur chuim domáint a chuidite agat, beidh an integration domáint a chuidite ó GridPane.

Bheann an integration a chuidite go raonacht an constant SUNRISE i do wp-config.php, a bhfuil sé ag tairiscint chun cur chuim domáint a bheith ag eolais go héifeachtach.

## Cur Chuim Constant SUNRISE

Is é ar chuid feicim beag a bhaineann an integration GridPane: tá sé ag cur chuim constant SUNRISE i wp-config.php go raonacht chun cur chuim domáint a bheith ag eolais leat le haghaidh cur chuim domáint. Is é sin ag cur chuim deacair go bhfuil siad ag eolais leat le haghaidh cur chuim domáint.

## Treoicíocht (Troubleshooting)

### Cúsaí ar an Cónaí API
- Déan cinnte go bhfuil do key API ceart
- Déan cinnte go bhfuil do chuid ID server agus site ceart
- Déan cinnte go bhfuil do account GridPane ag cur chuim féinnéis cinnte a thugann

### Cúsaí ar SSL Certificate
- Beiridh GridPane go mbeidh sé deacair a bheith ag cur chuim SSL certificate
- Déan cinnte go bhfuil do domáin ag cur chuim go héifeachtach ar an chuid IP server
- Déan cinnte go bhfuil do cur chuim SSL i gcónaí GridPane leat

### Domáint Níl Chuidite
- Déan cinnte go bhfuil aon rud éifeachtach ag cur chuim ar na log Ultimate Multisite
- Déan cinnte go níl an domáint ag cur chuim agat agat agat agat agat agat agat agat agat agat agat agat agat agat agat agat agat agat agat agat agat agat agat agat agat agat agat agat agat agat agat
