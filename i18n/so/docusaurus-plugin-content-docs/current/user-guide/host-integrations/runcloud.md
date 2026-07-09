---
title: Isdheegidda RunCloud
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# Isku-dhaafinta RunCloud {#runcloud-integration}

## Aragtida {#overview}
RunCloud waa nidaam maamulidda serverka ee ku dhex jira cloud ah oo kuu oggolaanaya inaad si fudud u soo dejisid oo u maamulid web applications-kaaga server-yada cloud-kaaga. Isku-dhaafinta (integration) kan wuxuu kuu oggolaanaya isku-dubbarista automatic ee domain-ka iyo maamulka SSL certificate-ka ka dhexe Ultimate Multisite iyo RunCloud.

## Faahfaahinta {#features}
- Isku-dubbaris automatic oo domain-ka ah
- Maamulidda SSL certificate-ka
- Domain-ka la saarista marka xiriirrada (mappings) la saaro

## Shuruudaha {#requirements}
Waxyaabahan waa in lagu qoro badankood ee `wp-config.php` faylkaaga:

```php
define('WU_RUNCLOUD_API_KEY', 'api_key_ga_aga');
define('WU_RUNCLOUD_API_SECRET', 'secret_ga_api_ga');
define('WU_RUNCLOUD_SERVER_ID', 'id_server_ka_aga');
define('WU_RUNCLOUD_APP_ID', 'id_app_ka_aga');
```

## Tallaabooyinka Qaab-dhismeedka (Setup Instructions) {#setup-instructions}

### 1. Hel Isticmaalka API-ga RunCloud-kaaga {#1-get-your-runcloud-api-credentials}

1. Tag dashboard-ka RunCloud-kaaga.
2. Tag "User Profile" (sawirkaaga profile-ka ah ee goobta sare ee dhanka midig).
3. Dooro "API" laga bilaabo menu-ga.
4. Haddii aadan weli lahayn, riix "Generate API Key".
5. Ku darto API Key-gaaga iyo API Secret-kaaga.

### 2. Hel ID-ga Server-kaaga iyo App-kaaga {#2-get-your-server-and-app-ids}

1. Dashboard-ka RunCloud-kaaga, tag "Servers".
2. Dooro server-ka uu ku jiro WordPress multisite-kaaga.
3. Server ID-gu wuxuu si cad u muuqdaa URL-ka: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Tag "Web Applications" oo dooro application-kaaga WordPress-ka ah.
5. App ID-gu wuxuu si cad u muuqdaa URL-ka: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Ku dar Constants-ka faylka wp-config.php {#3-add-constants-to-wp-configphp}

Ku dar constants-kan ee hoose faylkaaga `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'api_key_ga_aga');
define('WU_RUNCLOUD_API_SECRET', 'secret_ga_api_ga');
define('WU_RUNCLOUD_SERVER_ID', 'id_server_ka_aga');
define('WU_RUNCLOUD_APP_ID', 'id_app_ka_aga');
```

### 4. Fur Isticmaalka (Enable the Integration) {#4-enable-the-integration}

1. Admin-ka WordPress-kaaga, Ultimate Multisite > Settings-ka tagi socda.
2. "Domain Mapping" tab-ka u gudbi.
3. "Host Integrations"-ka hoos dhig.
4. RunCloud integration-ka shidid.
5. "Save Changes"-ka guji.

## Sideeheeda Waa Sidee U Shaqayso {#how-it-works}

Marka domain-ka Ultimate Multisite-ka ku xirto:

1. Integration-ku waxay codsi u dirtaa API-ga RunCloud-ka si ay domain-kaaga app-kaada ugu daro.
2. Haddii domain-ka si guuleed loogu daro, integration-ku wuxuu sidoo kale dib u soo dejin doonaa SSL certificates-ka.
3. Marka domain mapping-ka la saaro, integration-ku domain-ka RunCloud-ka ka saari doonaa.

Subdomain installation-kaada, integration-ku si toos ah ayaa loo maamuli doonaa inuu subdomains-ka RunCloud-ka ku abuuro marka meel cusub oo aad shirkaddaada ku darto.

## Wax Karka Lagu Xallin Karaa (Troubleshooting) {#troubleshooting}

### Masalahaat Ku Saabsan API Connection {#api-connection-issues}
- Hubi in aqoonsiga API-gaagu sax yahay.
- Hubi in server-kaaga iyo app ID-yadaagu ay sax yihiin.
- Hubi in account-ka RunCloud-kaaga uu leeyahay fursadaha loo baahan yahay.

### Masalahaat Ku Saabsan SSL Certificate {#ssl-certificate-issues}
- RunCloud waxay qaadan kartaa wakhti si ay u bixiso SSL certificates-ka.
- Hubi in domain-kaagu si sax ah ugu tilmaamayo IP address-ka server-kaaga.
- Hubi settings-ka SSL-ka RunCloud-ka ee app-kaaga.

### Domain-ka Aan La Darin {#domain-not-added}
- Logs-ka Ultimate Multisite-ka ka eeg qoraallo qalad ah oo ay jiraan.
- Hubi in domain-ka aan hore u la darmin RunCloud-ka.
- Hubi in bixinta (plan)-kaaga RunCloud-ku uu taageero domain badan.
