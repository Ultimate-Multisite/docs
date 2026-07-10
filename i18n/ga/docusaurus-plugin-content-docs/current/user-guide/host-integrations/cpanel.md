---
title: CPanel Integration
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# Intégráisi le cPanel {#cpanel-integration}

## Oibríocht {#overview}
Is é cPanel de bhfostála web is áit a bhaineann go mór ar fáil ó chuid fhoistála shared agus dedicated. Féachfaidh an chéad seo a bheith ag cur isteach sincontróir (control panel) chun sinte sinte (domain syncing) authiomáid le Ultimate Multisite agus cPanel, rud a gníomh faisnéis domáin alias agus subdomains ar chuid acaintí cPanel a chur i bhfeidhm go authiomáid.

## Feicharásanna {#features}
- Creádomána addhionálta (addon domain) authiomáid i cPanel
- Creádomána subdomain authiomáid i cPanel (le subdomains multisite installations)
- Taispeán domáin nuair a bhíonn mappings déanach

## Ríomhcheisteanna {#requirements}
Is gceart sin é a chur in díonachta i do "wp-config.php":

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Ar chuid optional, leat a chur in díonachta:

```php
define('WU_CPANEL_PORT', 2083); // Is é an chéad sinte 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Is é an chéad sinte /public_html
```

## Instructiona Set-up {#setup-instructions}

### 1. Déan do chuid cPanel credentials {#1-get-your-cpanel-credentials}

1. Bhraigh do chuid username agus password cPanel ó chuid fhoistála shared nó dedicated
2. Déan do chuid host cPanel (is é seo tí ar tí `cpanel.yourdomain.com` nó `yourdomain.com:2083`)

### 2. Add constants i wp-config.php {#2-add-constants-to-wp-configphp}

Add an constants a bhfáiste seo i do "wp-config.php":

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Ar chuid optional, leat a thaispeán an port agus an root directory:

```php
define('WU_CPANEL_PORT', 2083); // Athrú mar atá do cPanel ag úsáid sinte eile
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Athrú mar atá do document root ag athrú
```

### 3. Fáilte an intéaracht {#3-enable-the-integration}

(An t-aon chuid a fáilte an intéaracht)

1. Go tới Ultimate Multisite > Settings (Réigiúntais)
2. Navar go "Domain Mapping" (Mapeáil Domáina)
3. Scroll go "Host Integrations" (Iomlán na Cloganna Host)
4. Enable an cPanel integration (Féachaint an cPanel integration)
5. Click "Save Changes" (Sábháil Changú)

## Conas Tá É seo ag Raidhiú {#how-it-works}

### Addon Domains (Domáina Addon) {#addon-domains}

Nuair a bhíonn domáin ag mapeáil i Ultimate Multisite:

1. Agraíonn an integration cur isteach rith (request) go cPanel API chun an domáin a chur idir as domáin addon
2. Is é an domáin ag cur isteach ar an cur chuile (root directory) atá agat
3. Nuair a bhíonn mapeáil domáina ag iarraidh, beidh an integration ag cur domáin addon i gceann cPanel

### Subdomains (Subdomáina) {#subdomains}

Para installation multisite ar subdomáina, nuair a bhíonn nua site ag creacht:

1. Beann an integration ag teacht an t-subdomain ó chuid domáin leat
2. Agraíonn sé rith go cPanel API chun an subdomáin a chur idir as
3. Is é an subdomáin ag cur isteach ar an cur chuile (root directory) atá agat

## Nótaigh Go leat {#important-notes}

- Bú tá an integration ag úsáid API2 de cPanel chun díriú le do chuid account cPanel
- Ba cheart go bhfuil eolaíocht (permissions) i do chuid account cPanel chun domáina addon agus subdomáina a chur idir as
- Beagadh cur mhaith ar fhoireann host (hosting providers) in a bheith ag líonadh an n-uimhir domáin addon nó subdomáina atá agat
- Níl an integration ag cur isteach díriú DNS; is féidir leat an domáina a chur idir as IP address do chuid server

## Treoicí (Troubleshooting) {#troubleshooting}

### Cúsaí ar Chuid API Connection {#api-connection-issues}

- Déan cinnte go bhfuil do username agus do password cPanel ceart
- Déan cinnte go bhfuil do host cPanel ceart agus go bhfuil sé ag fáil ar fáil
- Déan cinnte go bhfuil an eolaíocht (permissions) i do chuid account cPanel ceart

### Domáin Níl Ag Raidhiú {#domain-not-added}

- Déan cinnte go bhfuil aon rud éifeachtach (error messages) ag cur isteach i log Ultimate Multisite
- Déan cinnte go bhfuil an domáin níl ag cur idir as i gceann cPanel
- Déan cinnte go bhfuil do chuid account cPanel níl ag cur ar an líneadh (limit) domáina addon nó subdomáina

### Probleanna le Certat SSL {#ssl-certificate-issues}

- Níl an t-aonráin seo ag cur isteach (integrate) an t-certat SSL.
- Beidh tú ag teastáil ar aís uirlisí SSL/TLS de cPanel nó feidhm AutoSSL chun certat SSL do domáin a chur isteach.
- Mar chuid eile, leat a bheith ag úsáid oibríocht mar Let's Encrypt le AutoSSL de cPanel.
