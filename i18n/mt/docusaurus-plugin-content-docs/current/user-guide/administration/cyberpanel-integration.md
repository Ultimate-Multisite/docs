---
title: Integrazzjoni CyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# Integrazzjoni mal-CyberPanel

Dan it-tieni jispjega kif tista' tgħallma l-Ultimate Multisite CyberPanel integration biex domini mappati fil-network tiegħek jiġu aḍḍaw (u jiġu eliminati) awtomatik come virtual hosts f'CyberPanel, ma għal-provision auto-SSL opzjonali minn Let's Encrypt.

## X'la Jidira

- Meta dominu jomm mappat fil-Ultimate Multisite, l-integration tiffaċċja l-CyberPanel API biex tgħml virtual host għal ddomin f'dinja.
- Meta tinelimina mappatura tal-dominu, l-integration tiffaċċja l-API biex t Elimina l-virtual host correspondenti.
- Meta jkun auto-SSL aktib, l-integration tivigħed l-issħubija (issuance) ta sertifikat Let's Encrypt immediat wara li l-virtual host jitcrea.
- Opzjonalment tiddir/t Elimina l-alias `www.` b'mod meta setting tiegħek f'Domain Mapping settings huwa "Auto-create www subdomain".

## Prerequisiti

- Instanza CyberPanel qed tmur (v2.3 jew aktar jomm imbronizzat) li tista' tipprovvista mill-server WordPress tiegħek.
- Website esistenti f'CyberPanel li giàm jservi l-root network tal-WordPress tiegħek. L-integration tagħmel virtual hosts ġoddi għal dan is-server.
- Aċċess għall-CyberPanel API aktib. L-authentifikazzjoni tiffaċċja b'username u password ta admin tiegħek f'CyberPanel.
- Il-DNS records tiegħek għad domini mappati jidħlu giàq jidironixxi l-indirizzju IP tal-server tiegħek qabel ma auto-SSL jistax jissib sertifikat valid.

## Reġistrazzjonijiet

Il-konstanti li segwixxi għandhom jiġu definiti f'file `wp-config.php` tiegħek:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Opzjonalment, tista' definixxi wkoll:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Default: true — issa Let's Encrypt SSL dopo la creazione del dominio
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Default: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Usat per contattare per il certificato SSL
```

## Istruzioni per l'installazione (Setup Instructions)

### 1. Abilita l'API di CyberPanel

1. Accedi al tuo pannello di controllo CyberPanel come amministratore.
2. Vai a **Security** > **SSL** e conferma che l'SSL sia attivo sull'interfaccia di CyberPanel stessa (necessario per le chiamate API sicure).
3. L'API di CyberPanel è disponibile di default a `https://your-server-ip:8090/api/`. Non sono necessari passaggi aggiuntivi per attivarla — è attiva di default per gli utenti admin.

### 2. Aggiungi le Costanti a wp-config.php

Aggiungi queste costanti al file `wp-config.php` prima della riga `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Per abilitare l'auto-SSL (consigliato):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Abilita l'Integrazione

1. Nel tuo admin di rete WordPress, vai su **Ultimate Multisite** > **Settings**.
2. Naviga alla scheda **Domain Mapping**.
3. Scorri fino a **Host Integrations**.
4. Abilita l'integrazione **CyberPanel**.
5. Clicca su **Save Changes** (Salva modifiche).

### 4. Verifica la Connessione

Usa il test di connessione integrato nel wizard delle impostazioni:

1. Idhoga għal **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Klikka fuq **Test Connection**.
3. Messaggju ta ħsaru jkonferma li il-plugin jistax jaffronta l-API tal CyberPanel u jauthentifika b'mod korrett.

## Come Funziona

### Domain Mapping

Meta li dominu jomm mappat f Ultimate Multisite:

1. Il-integrazzjoni tiffaħaq `POST` request għal `/api/createWebsite` fuq host tal CyberPanel tiegħek.
2. CyberPanel jieħu hosting ġdid virtuali għall-dominu ta quddha sotto il-package impost.
3. Il-document root jomm impost biex jista' jippaċċa għad-root network ta WordPress tiegħek.
4. Meta tiddir il-domain mapping, l-integrazzjoni tiffaħaq `/api/deleteWebsite` biex tneħħi l-virtual host.

### Auto-SSL

Meta `WU_CYBERPANEL_AUTO_SSL` huwa `true`:

1. Wara li jomm creat il-virtual host, l-integrazzjoni tiffaħaq `/api/issueSSL` għall-dominu.
2. CyberPanel jitzied certifikat Let's Encrypt u jista' it-test ACME HTTP-01.
3. Il-certifikat jiġi rinewwit awtomatik mill-CyberPanel qabel ma jintlaq.

> **Importanti:** DNS għandu jkun kważi kumplett għall-indirizzju IP tal-server tiegħek qabel ma Let's Encrypt tista' tivallida l-dominu. Jekk l-issodda ta SSL tfail immediat b'dopo mapping, attenja għall-propagazzjoni tal-DNS u riattivaw is-SSL mill-dashboard tal CyberPanel sotto **SSL** > **Manage SSL**.

### www Subdomain

Meta jkun **Auto-create www subdomain** aktiiv, l-integrazzjoni tikkrea wkoll alias virtual host għal `www.<domain>` u, meta auto-SSL huwa aktiiv, tiffaħaq certifikat li tgħmlu kopja sia tal-apex sia ta www.

### Email Forwarders

Meta l-għandek l-opportunità li, meta l-addon [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) huwa attif, CyberPanel jista' joffri wkoll forwarders ta email għall-customer. Il-forwarders jorrutu il-messaġġi min id-domaina tal-indirizzju lejn inbox oħra b'mod li ma jgħidu mailbox kumpli, li huwa util għal alias bħal `info@customer-domain.test` jew `support@customer-domain.test`.

Qabel ma tivverifika l-forwarders għall-customer:

1. Konferma li l-constants ta CyberPanel huma konfigurat u li test il-konnessjoni jittlaq b'mod iżjedhon.
2. Attiva l-provider ta email ta CyberPanel f'settings tal-addon Emails.
3. Konferma li domaina il-customer hija già esistenti f'CyberPanel qabel ma tgħmli l-forwarder.
4. Iżgura forwarder test u trassmill messaġġ biex tqodhu flimghid il-feature fuq i planijiet ta produzzjoni.

Meta tiffail il-kriatura tal-forwarder, tikkontrolla ewda l-logiċi ta attivitajiet ta Ultimate Multisite ewda l-prim, u poi konferma f'CyberPanel li domaina s-sorgi hija esistenti u li l-API user għandu permess b'gestjoni tal-email.

## Referenza ta Konfigurazzjoni

| Constant | Preżżumata | Default | Descrizzjoni |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Yes | — | URL kumpli għall-istanza CyberPanel tiegħek inkluż port, e.g. `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Yes | — | Username ta admin tal-CyberPanel |
| `WU_CYBERPANEL_PASSWORD` | Yes | — | Password ta admin tal-CyberPanel |
| `WU_CYBERPANEL_PACKAGE` | Yes | `Default` | Package ta hosting ta CyberPanel li għandek tgħallis lil virtual hosts ġeddi |
| `WU_CYBERPANEL_AUTO_SSL` | No | `true` | Tissier il-certifikat SSL Let's Encrypt wara ma tiddir domaina |
| `WU_CYBERPANEL_PHP_VERSION` | No | `PHP 8.2` | Versjoni ta PHP għall-virtual hosts ġeddi (għandha tkun ispejċjalment mat-tqabbel ma versione installata f'CyberPanel) |
| `WU_CYBERPANEL_EMAIL` | No | — | Email ta kontra biex tivverifika il-certifikat SSL |

## Nota Importanti

L-API ta CyberPanel u jomm l-token basat fuq il-session. L-integràżjoni tagħmel l-ottratt (acquisition) tal-token awtomatik għal kull chiamat API.
Il-kont admin tiegħek ta CyberPanel għandu permess biex ikun creat u ttal-website.
CyberPanel joraw fuq il-port `8090` b'default. Jekk il-server tiegħek jipproċessa firewall, assigurah li dan il-port huwa aġġust mill-WordPress application server.
L-integràżjoni ma tmexx l-record DNS. Għandek t-point il-DNS tal-domain għall-IP address tal-server tiegħek qabel ma tmapp il-domain f'Ultimate Multisite.
Jekk uża OpenLiteSpeed (OLS), riparti graffu (graceful restart) jiftakkar awtomatik wara li tiddir il-virtual host. Ma għandekx intervenzjoni manuali.

## Problemi taċċettar (Troubleshooting)

### API Connection Refused

- Verifika li il-port `8090` huwa aġġust fil-firewall tal-server tiegħek.
- Konferma li l-valur `WU_CYBERPANEL_HOST` jinkludi protokoll korrekt (`https://`) u port.
- Kontrolla li il-certifikat SSL ta CyberPanel tiegħek valid; il-certifikat self-signed tista' tikkawża fallimenti fil-TLS verification. Istawla `WU_CYBERPANEL_VERIFY_SSL` biex tkun `false` biss f'ambienti reġistrati privati affidabbli.

### Authentication Errors

- Konferma li l-username u password tiegħek ta CyberPanel (`WU_CYBERPANEL_USERNAME` u `WU_CYBERPANEL_PASSWORD`) huma korretti biex tidħol diretament għal CyberPanel.
- CyberPanel jlocki l-accounts wara passament tentat fejn il-login ma jkunx korrett. Kontrolla **Security** > **Brute Force Monitor** f'CyberPanel se juri lockouts.

### Domain Not Created

- Kontrolla l-log tal-attività ta Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) għal messaggi diċċajsk API (API error messages).
- Verifika li il-package definitt f' `WU_CYBERPANEL_PACKAGE` jieħu ekzistenza f'CyberPanel (**Packages** > **List Packages**).
- Assigurah li d-domain ma jkunx giàm registrat bħala website f'CyberPanel — ikun tiddir creati diċċajs ta website juri errore.

### SSL Certificate Not Issued

* Confirmati li il DNS jgħadiex kollu (fully propagated): `dig +short your-domain.com` għandu irritorna l-IP tal-server tiegħek.
* Let's Encrypt japplika limitatira tal-rate (rate limits). Jekk qed ti emetti s-sertifikat għal domini ħafna f'ħin, attenija qabel ma tirtryji.
* Kontrolli il loggi SSL ta CyberPanel sotto **Logs** > **Error Logs** biex ti tqbel dettagli fuq l-falliti nell'emissioni tal-sertifikat.
* Bħala fallback, puoi emetti SSL manualment min CyberPanel: **SSL** > **Manage SSL** > seleziona dominu > **Issue SSL**.

## Referenzi

- Dokumentazzjoni API ta CyberPanel: https://docs.cyberpanel.net/docs/category/api
- Gestjoni SSL ta CyberPanel: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Limitati tal-Rate ta Let's Encrypt: https://letsencrypt.org/docs/rate-limits/
