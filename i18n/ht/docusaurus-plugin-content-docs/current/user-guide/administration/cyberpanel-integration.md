---
title: Entegrasyon CyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# Entegrasyon CyberPanel

Ki gidans sa ki jan pou configure entegrasyon Ultimate Multisite CyberPanel ou pou domèn ki mapé nan rezo ou yo otomatikman ajoute (e retire) kòm virtual host nan CyberPanel, ak opsyon pou bay auto-SSL atravè Let's Encrypt.

## Sa Li Fè {#what-it-does}

- Lè yon domèn mapé nan Ultimate Multisite, entegrasyon an ap rele API CyberPanel la pou kreye yon virtual host pou domèn sa a.
- Lè yon mapaj domèn retire, entegrasyon an ap rele API la pou detwi virtual host ki koresponn.
- Lè auto-SSL aktif, entegrasyon an ap bay sertifikat Let's Encrypt imedyat apre virtual host la kreye.
- Opsyonèlman ajoute/retire alias `www.` selon konfigirasyon "Auto-create www subdomain" ou nan Domain Mapping settings.

## Pré-requis {#prerequisites}

- Yon instance CyberPanel ki ap mache (v2.3 oswa pi bon a rekòmande) ki rive jodi a de server WordPress ou an.
- Yon sit entegre deja nan CyberPanel ki sèvi ak root rezo WordPress ou la. Entegrasyon an ap atache nouvo virtual host yo sou sa server la.
- Akses API CyberPanel aktif. Otantifikasyon itilize non itilizatè ak pawòl admin CyberPanel ou a.
- Rekò DNS ou pou domèn ki mapé yo dwe deja pointer nan adrès IP server ou an anvan auto-SSL ka bay yon sertifikat valide.

## Requis {#requirements}

Konstanta sa yo dwe defini nan fichye `wp-config.php` ou a:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Opsyonèlman, ou ka defini tou:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Default: true — issue Let's Encrypt SSL after domain creation
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Default: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Used for SSL certificate contact
```

## Enstriksyon Konfigirasyon {#setup-instructions}

### 1. Aktive API CyberPanel la {#1-enable-the-cyberpanel-api}

1. Konekte ak kont ou nan dashboard CyberPanel ou kòm yon administrateur.
2. Ale nan **Security** > **SSL** epi konfime ke SSL aktif sou entèfas CyberPanel la menm (sa ki nesesè pou apèl API ki sekirize).
3. API CyberPanel disponib sou `https://your-server-ip:8090/api/` pa default. Pa gen okenn etap adisyonèl pou aktive li — li aktif pa default pou itilizatè admin.

### 2. Ajoute Konstanta nan wp-config.php {#2-add-constants-to-wp-configphp}

Ajoute konstanta sa yo nan fichye `wp-config.php` ou anvan liy `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Pou aktive auto-SSL (rekomande):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Aktive Entegrasyon an {#3-enable-the-integration}

1. Nan admin rezo WordPress ou, ale nan **Ultimate Multisite** > **Settings**.
2. Navige nan onglet **Domain Mapping**.
3. Desannou pou w rive nan **Host Integrations**.
4. Active entegrasyon **CyberPanel**.
5. Klike sou **Save Changes**.

### 4. Verify Koneksyon an {#4-verify-connectivity}

Sèvi ak teste koneksyon ki genyen nan wizard konfigirasyon an:

1. Ale chèche **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Klike sou **Test Connection**.
3. Yon mesaj saksès ki konfime ke plugin la kapab rive nan CyberPanel API epi autentike byen.

## Kijan Li Travay {#how-it-works}

### Domain Mapping {#domain-mapping}

Lè yon domain mapye nan Ultimate Multisite:

1. Integrasyon an voye yon `POST` request pou `/api/createWebsite` sou host CyberPanel ou a.
2. CyberPanel kreye yon nou virtual host pou domain la anba pake ki te configure.
3. Root dokiman an mete pou pointer rive nan dirèktwa root rezo WordPress ou a.
4. Lè mapye domain la retire, integrasyon an ap rele `/api/deleteWebsite` pou netwaye virtual host la.

### Auto-SSL {#auto-ssl}

Lè `WU_CYBERPANEL_AUTO_SSL` se `true`:

1. Apre virtual host la kreye, integrasyon an ap rele `/api/issueSSL` pou domain la.
2. CyberPanel mande yon sertifikat Let's Encrypt itilize defi ACME HTTP-01.
3. Sertifikat la otomatikman renouvle pa CyberPanel anvan li expire.

> **Enpòtan:** DNS dwe byen pwofaje (fully propagated) pou adrès IP sèvè ou a anvan Let's Encrypt ka valide domain la. Si emisyon SSL la échoue imedyatman apre mapye, tann pwofaj DNS la epi re-trigger SSL la nan dashboard CyberPanel anba **SSL** > **Manage SSL**.

### www Subdomain {#www-subdomain}

Si **Auto-create www subdomain** aktif nan konfigirasyon Domain Mapping ou a, integrasyon an ap kreye yon alias virtual host pou `www.<domain>` e, lè auto-SSL la active, li voye yon sertifikat ki kouvri tou de variant apex ak www.

### Email Forwarders {#email-forwarders}

Lè lè [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) addon la active, CyberPanel ka bay lòt kliyan yo tou pou fè fòtori imèl koutye (customer email forwarders). Fòtori sa yo mete mesaj nan yon adrès domèn nan yon lòt bo ak pa kreye yon bo nèt, ki itil pou alias tankou `info@customer-domain.test` oswa `support@customer-domain.test`.

Anvan ou kòmanse aktive fòtori pou kliyan yo:

1. Konfime ke konstante CyberPanel anwo yo configure epi tès koneksyon a pase.
2. Active pwofavè imèl CyberPanel nan tout konfigirasyon addon Emails la.
3. Konfime domèn kliyan an deja egziste nan CyberPanel anvan ou kòmanse kreye fòtori a.
4. Kreye yon fòtori tès epi voye yon mesaj atravè li anvan ou ofri fonksyonalite sa a sou plan pwodiksyon yo.

Si kreye fòtori la échoue, kontwole premye nan log aktivite Ultimate Multisite la, apre sa konfime nan CyberPanel ke domèn sous la egziste epi ke itilizatè API a gen pèmisyon pou jere imèl (email-management permissions).

## Referans Konfigirasyon {#configuration-reference}

| Konstante | Obligatwa | Defolt | Deskripsyon |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Wi | — | URL konplè nan enstans CyberPanel ou ki gen ladan pòt, egzanp: `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Wi | — | Non itilizatè admin CyberPanel la |
| `WU_CYBERPANEL_PASSWORD` | Wi | — | Pwòvwa admin CyberPanel la |
| `WU_CYBERPANEL_PACKAGE` | Wi | `Default` | Pakaj wèb CyberPanel pou asigne nan nouvo virtual host yo |
| `WU_CYBERPANEL_AUTO_SSL` | Non | `true` | Bay yon sertifikat Let's Encrypt apre domèn an kreye |
| `WU_CYBERPANEL_PHP_VERSION` | Non | `PHP 8.2` | Vèsyon PHP pou nouvo virtual host yo (dwe koresponn ak yon vèsyon ki enstale nan CyberPanel) |
| `WU_CYBERPANEL_EMAIL` | Non | — | Imèl kontant pou registrasyon sertifikat SSL la |

## Nòt Enpòtan {#important-notes}

API CyberPanel itilize ak token ki baze pou autentifikasyon. Entegrasyon an otomatikman pran token la sou chak appel API.
Kont akta admin CyberPanel ou dwe gen permisyon pou kreye ak delete sitwèb (websites).
CyberPanel kouri sou pòt `8090` pa default. Si sèvè ou itilize firewall, asire w ke pòt sa a rive ale chèche de aplikasyon WordPress la.
Entegrasyon an pa jere enregistrè DNS. Ou dwe dire domain DNS pou adrès IP sèvè ou anvan ou map domain la nan Ultimate Multisite.
Si ou itilize OpenLiteSpeed (OLS), yon re-start ki byen fèt (graceful restart) ap kouri otomatikman apre chanjman virtual host yo. Pa gen okenn entèvansyon manual ki nesesè.

## Resous sou pwoblèm (Troubleshooting) {#troubleshooting}

### API Connection Refused (Koneksyon API refize) {#api-connection-refused}

- Verifye ke pòt `8090` ouvè nan firewall sèvè ou an.
- Konfime ke valè `WU_CYBERPANEL_HOST` gen protocole kòrèk (`https://`) ak pòt la.
- Kontnen ke sertifikat SSL CyberPanel ou a valide; sertifikat ki pwòp (self-signed) ka lakòz erè verifikasyon TLS. Mete `WU_CYBERPANEL_VERIFY_SSL` sou `false` sèlman nan anviwònman rezo prive ki fi pou sa.

### Authentication Errors (Erè autentifikasyon) {#authentication-errors}

- Konfime ke `WU_CYBERPANEL_USERNAME` ak `WU_CYBERPANEL_PASSWORD` ou a kòrèk lè w konekte dirèkteman nan CyberPanel la.
- CyberPanel bloke kont yo apre esè koneksyon ki echwe anpil fwa. Kontwane **Security** > **Brute Force Monitor** nan CyberPanel si gen bloke (lockouts).

### Domain Not Created (Domain pa kreye) {#domain-not-created}

- Kontwane log aktivite Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) pou mesaj erè API yo.
- Verifye ke pake ki defini nan `WU_CYBERPANEL_PACKAGE` la egziste nan CyberPanel (**Packages** > **List Packages**).
- Asire w ke domain la pa deja reyalize kòm yon sitwèb nan CyberPanel — kreye sitwèb ki gen doublon ap retounen yon erè.

### SSL Certificate Not Issued (Sertifikat SSL pa emisyon) {#ssl-certificate-not-issued}

- Konfime ke DNS a deja propague nèt: `dig +short your-domain.com` ta dwe retounye IP server ou.
- Let's Encrypt mete limit sou vitès (rate limits). Si ou fin bay anpil sertifikat pou menm domaine nan yon moman, tann anvan ou eseye ankò.
- Kontwe log SSL CyberPanel anba **Logs** > **Error Logs** pou w jwenn detay sou efikasite bay sertifikat la pa reyisi.
- Kòm yon opsyon rezèv (fallback), ou ka bay SSL manman nan CyberPanel: **SSL** > **Manage SSL** > chwazi domaine la > **Issue SSL**.

## Referans {#references}

- Dokiman API CyberPanel : https://docs.cyberpanel.net/docs/category/api
- Jesyon SSL CyberPanel : https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Limit Vitès Let's Encrypt : https://letsencrypt.org/docs/rate-limits/
