---
title: Ináisteán RunCloud
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# Iomháitheall RunCloud {#runcloud-integration}

## Oibríocht {#overview}
RunCloud is platform dearbhán cloud-based chun feabhas a chur ar chuid servera web agus a bhaineann leis an t-amachadh agus an t-athrúcháin domáin agus certfeidhm SSL idir Ultimate Multisite agus RunCloud.

## Feicharásanna {#features}
- Athrúchán domáin go dtí an t-amachadh (Automatic domain syncing)
- Déanamh ar chuid certfeidhm SSL
- Tréimhse domáin a bhaint nuair a bhíonn mappings ag déanamh amháin

## Cuidiúir {#requirements}
Is gcaithfidh na cúanta seo a bheith ag déanamh i bhfáile `wp-config.php` a bheith ag déanamh:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Instructiona Athrachadh {#setup-instructions}

### 1. Déan do Chuid API Credentials RunCloud {#1-get-your-runcloud-api-credentials}

1. Login go dtí an dashboard RunCloud atá agat
2. Déan cur isteach ar "User Profile" (cliceáil ar an bhfáile a bheith ag an t-amachán i gcóras áirítear)
3. Déan chun "API" a bheith ag an meán
4. Cliceáil ar "Generate API Key" má tá tú níl ag cur fáil agat
5. Coptaigh do API Key agus do API Secret

### 2. Déan do Server ID agus App IDs {#2-get-your-server-and-app-ids}

1. I do chuid dashboard RunCloud, cur isteach ar "Servers"
2. Déan chun an server a bheith ag cur WordPress multisite agat a bheith ag cur isteach
3. Is é an Server ID ag bheith ag cur fáil i url: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Déan chun "Web Applications" a bheith ag cur isteach agus déan ar do application WordPress
5. Is é an App ID ag bheith ag cur fáil i url: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Add Constants go wp-config.php {#3-add-constants-to-wp-configphp}

Add do cúanta seo go do fáil `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Fáil ar an Iomháitheall {#4-enable-the-integration}

1. I gcóitead an admin WordPress, cur Ultimate Multisite > Settings
2. Cur "Domain Mapping" tab a bhfáthach
3. Cur "Host Integrations" a shroin go leat
4. Féachán an integration RunCloud
5. Click ar "Save Changes"

## Conas Tá Éiteann {#how-it-works}

Nuair a bhíonn domáin ag cur in Ultimate Multisite:

1. Agraíonn an integration isteach do API de RunCloud chun domáint a chuid an application a chur iad
2. Má tá an domáint ag cur go díreach, beidh an integration ag réamh-dlao (redeploy) certsslíocht shláin féin
3. Nuair a bhíonn cur domáin ag cur anail, beidh an integration domáint a bhaint ó RunCloud

Do chuid isteach subdomains, beidh an integration ag cur iad go díreach mar chuid anail in RunCloud nuair a bhíonn noutacha siteanna ag cur iad ar do nettwrík.

## Déan Taispeán {#troubleshooting}

### Cúsaí API Connection {#api-connection-issues}

- Féacháin go bhfuil do chuid creideamh API ceart
- Féacháin go bhfuil do chuid ID server agus app ceart
- Déan cinnte go bhfuil do chuid RunCloud account ag cur an gníomhartha ag cur iad

### Cúsaí Certsslíocht {#ssl-certificate-issues}

- Beidh RunCloud ag cur tuimitheochán ar certsslíocht shláin féin
- Féacháin go bhfuil do domáintanna ag cur iad go díreach ar IP address do server
- Déan cinnte go bhfuil do chuid réiteacha SSL ar an application do RunCloud

### Domáint Níl Ag Cur {#domain-not-added}

- Féacháin leat na logs de Ultimate Multisite chun aon meánas éiríne a bheith agat
- Déan cinnte go bhfuil domáint ag cur iad go díreach i RunCloud
- Déan cinnte go bhfuil do plan RunCloud ag cur iad ar domáintí mbeara
