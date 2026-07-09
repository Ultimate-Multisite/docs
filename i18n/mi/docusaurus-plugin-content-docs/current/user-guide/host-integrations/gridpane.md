---
title: Whakawhanaungatanga GridPane
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# Whakawhanaungatanga me GridPane (GridPane Integration) {#gridpane-integration}

## Whakataki (Overview) {#overview}
He GridPane heta-tāwhiri (control panel) mō WordPress, tino whai tikanga, i whakatoa ki te whakamahi. He tino nui tēnei integration i te whaiaro syncing o domain me te whakamaoritanga SSL certificateihi (SSL certificate management) anō i waenga i Ultimate Multisite me GridPane.

## Manawa (Features) {#features}
- Whakawhanaungatanga automatic o domain (Automatic domain syncing)
- Whakamaoritanga SSL certificateihi (SSL certificate management)
- Whakamaoritanga automatic o te constant SUNRISE

## Wāhi Whakamahi (Requirements) {#requirements}
Me whakahirahira i ngā constants berikut i tō file `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

## Whakatau (Setup Instructions) {#setup-instructions}

### 1. Whakawātea i ngā Credentials API o tō GridPane {#1-get-your-gridpane-api-credentials}

1. Whakare i tō dashboard o te GridPane
2. Pāinga ki "Settings" > "API"
3. Whakawātea he API key ahau e koe i roto i te wāe, me te whaiaro ana i ai
4. Kopiko tō API key

### 2. Whakawātea i ngā Server ID me Site IDs o koe {#2-get-your-server-and-site-ids}

1. I tō dashboard o te GridPane, pāinga ki "Servers"
2. Whakarite i te server i tēnei i koho ahau i tō WordPress multisite
3. Tōtō i te Server ID (he tino mihau ana i te URL me te page details o te server)
4. Pāinga ki "Sites" me te whaiaro i tō site WordPress
5. Tōtō i te Site ID (he tino mihau ana i te URL me te page details o te site)

### 3. Whakawātea i ngā Constants ki wp-config.php {#3-add-constants-to-wp-configphp}

Whakawātea i ngā constants berikut ki tō file `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. Whakawhanaungatanga i te Integration {#4-enable-the-integration}

1. I tō admin o WordPress, pāinga ki Ultimate Multisite > Settings
2. Pāinga ki te tab "Domain Mapping"
3. Whakarite ki "Host Integrations" (Host Integrations)
4. Whakawhanaunga i te integration o GridPane
5. Whakawātea ki "Save Changes"

## He aha ia mahi ana? (How It Works) {#how-it-works}

I roto i te Ultimate Multisite, i roto i te whaiaro mapping o domain:

1. Te whaiaro (integration) i hoki te tangata ki te API o GridPane kia whānui i te domain ki tō waka.
2. Ka whakahaere ake ai e GridPane te whakamahi i te sertifika SSL anō.
3. I roto i te wā e whakatika ko te mapping o te domain, ka whakatika ai te tangata i te domain mai i GridPane.

Ka whakahaere ake hoki te tangata te constant SUNRISE i tō wp-config.php file, i te mea he tino nui ana ki te mahi i te mapping o te domain i te wā e tika ana.

## Whakawātea Constant SUNRISE {#sunrise-constant-management}

He āhuatanga tino pai o te integration o GridPane ahau, ko ka whakatika ake ai automatically te constant SUNRISE i tō wp-config.php kia whakatika atu ki te pōtiki mapping o domain o GridPane. Ko te mea e hoki ana koe he ka taea te mahi i ngā two system i runga i te tika mai i ngā pōtiki.

## Whakawātea (Troubleshooting) {#troubleshooting}

### Ngā Whainga Connection API {#api-connection-issues}
- Kia tino mārama ko te key API o koe āta.
- Kia tino mārama ko te server me te site IDs o koe āta.
- Kia tiaki i te whānau (account) o koe i GridPane he ngā whānau (permissions) e tika ana.

### Ngā Whainga Sertifika SSL {#ssl-certificate-issues}
- Ka taea e GridPane ka ngā ihi (SSL certificates) ka ngā wā.
- Kia tino mārama ko ngā domain o koe ka pōtiki atu ki te IP address o tō server.
- Kia whakaaro i ngā settings o SSL o GridPane mō tō site.

### Domain Ka Rongotai {#domain-not-added}
- Kia whakaaro i ngā logs o Ultimate Multisite mō ngā puni (error messages) e tika ana.
- Kia tino mārama ko te domain ka whakahoki atu ki GridPane anō.
- Kia tiaki i te whakaritenga DNS o tō domain he tika ana.
