---
title: Integrazzjoni GridPane
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# Integrazzjoni ma' GridPane

## Panoramika {#overview}
GridPane huwa panel kontroll hosting speċjalizzati għall-WordPress biex jipprofessjonali serju. Dan l-integrazzjoni tismella sincronizzazzjoni awtomatika tal-domain u il-ġestjoni ta sertifikat SSL bejn Ultimate Multisite u GridPane.

## Funzjonijiet {#features}
- Sincronizzazzjoni awtomatika tal-domain
- Ġestjoni ta sertifikat SSL
- Konfigurazzjoni awtomatika tal-konstanti SUNRISE

## Reġistrazzjonijiet {#requirements}
Il-konstanti li j segue l-meħtieġa għandhom jiġu definiti f'file `wp-config.php` tiegħek:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

## Istruzzjonijiet ta l-Istitwix {#setup-instructions}

### 1. Iġib il-Credentials API tiegħek tal-GridPane {#1-get-your-gridpane-api-credentials}

1. Idħol għad dashboard tiegħek ta GridPane
2. Irridi għal "Settings" > "API"
3. Genera API key jekk ma għandekx waħda
4. Kopja l-API key tiegħek

### 2. Iġib il-Server ID u Site IDs tiegħek {#2-get-your-server-and-site-ids}

1. F'dashboard tiegħek ta GridPane, irridi għal "Servers"
2. Sigli l-server li jipprovvide l-WordPress multisite tiegħek
3. Nota l-Server ID (visibbli fil-URL jew fuq pajdida tal-detajiet tal-server)
4. Irridi għal "Sites" u sigli l-site tiegħek ta WordPress
5. Nota l-Site ID (visibbli fil-URL jew fuq pajdida tal-detajiet tal-site)

### 3. Aggiungi i Konstanti għal wp-config.php {#3-add-constants-to-wp-configphp}

Aggiungi il-konstanti li j segue f'file tiegħek `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. Iżgih il-Integrazzjoni {#4-enable-the-integration}

1. F'admin tiegħek ta WordPress, irridi għal Ultimate Multisite > Settings
2. Naviga għall-tab "Domain Mapping"
3. Scrolla' wara għal "Host Integrations"
4. Aktiva l-integrazzjoni tal-GridPane
5. Klikka fuq "Save Changes"

## Come Funziona {#how-it-works}

Meta li domini jomm mappati f'Ultimate Multisite:

1. L-integrà l-istradizzjoni għall-API ta GridPane biex tista' tista' ddomina fuq sitja tiegħek
2. GridPane jidabbir awtomatik l-provisioning tal-certifikat SSL
3. Meta tiddir il-mapping tal-ddomina, l-integrà tiddir il-ddomina fil-GridPane

L-integrà jidabbir ukoll b'mod awtomatiku l-konstanta SUNRISE f'il-file wp-config.php tiegħek, li hija preżizzju għalliex it-mapping tal-ddomina jgħin b'mod korrett.

## Aġġustament tal-Konstanta SUNRISE {#sunrise-constant-management}

Il-funzjoni unika tal-integrà ta' GridPane hija li tirtorda awtomatik l-konstanta SUNRISE f'il-file wp-config.php biex tevitaw konflitt mal-sistema ta mapping tal-ddomina ta' GridPane. Dan jassuru li is-sistemi kollha jistgħu jaħdem flimkien b'mod tajbun.

## Problemi u Soluzzjonijiet (Troubleshooting) {#troubleshooting}

### Problemi b'Konnessjoni API {#api-connection-issues}
- Verifika li l-API key tiegħek korretta huwa.
- Kontrolla li l-server tiegħek u id-identifikaturi tal-sitja huma korretti.
- Assicurajt li l-account tiegħek f'GridPane għandu l-permessijiet neċessarji.

### Problemi b'Certifikat SSL {#ssl-certificate-issues}
- GridPane tista' teħtieġ ħin taħdem biex tipprovvidi certifikat SSL
- Verifika li ddomini tiegħek qed indironu b'mod appropriat għall-indirizzju IP tal-server tiegħek
- Kontrolla l-ippożizzjonijiet (settings) tal-SSL ta' GridPane għals sitja tiegħek

### Ddomina M'għandiex Tiddir {#domain-not-added}
- Kontrolla l-logs ta' Ultimate Multisite biex tista' tqesser mesajji ta fam
- Verifika li ddomina hija giàx mad-dinja f'GridPane
- Assicurajt li r-rekordi DNS tal-ddomina tiegħek huma konfigurat b'mod korrett
