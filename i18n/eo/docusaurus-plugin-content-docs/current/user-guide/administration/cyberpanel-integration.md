---
title: Integrado CyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel Integrazione {#cyberpanel-integration}

Ta gvidu klaras, ki manon uz konfigurigi integracion Ultimate Multisite CyberPanel, por permet ke domenaj mapitaj en viajn vo nòtrete otomatikman ajoute (kaj elimini) kiel virtual host en CyberPanel, san opcion de auto-SSL provizión per Let's Encrypt.

## Kion Ĝi Fait {#what-it-does}

- Kiam domeno estas mapita en Ultimate Multisite, la integracion volas la CyberPanel API por krei virtual host por tiu domeno.
- Kiam la mapado de domeno eliminiĝas, la integracion volas la API por eliri la korespondanta virtual host.
- Kiam auto-SSL estas aktiva, la integracion provoĉas la emision sertifikato Let's Encrypt imajne post ke la virtual host estas kreita.
- Opcion de ajoute/elimini la alias `www.` dependante de viaj "Auto-create www subdomain" ŝanco en la konfigurado de Mapado de Domeno.

## Prazeroj (Prerequisites) {#prerequisites}

- Funkanta instanco de CyberPanel (v2.3 aŭ pli rekomendasita) atingabla de via WordPress servero.
- Ekzista sitaĉo en CyberPanel kiu już servas vian rooton de la WordPress networko. La integracion ataches novajn virtual host al ĉi tiu servero.
- Akseso al CyberPanel API aktiva. Autentigo uzas via CyberPanel admin nombro kaj ŝlosilon.
- Via DNS registroj por mapitaj domenoj devas już pointedigi al la IP-adreso de via servero antaŭ ol auto-SSL povas emisi validan sertifikaton.

## Requisitoj (Requirements) {#requirements}

La seguenti konstanta devas esti definita en via `wp-config.php` filiro:

```php
define('WU_CYBERPANEL_HOST', 'https://viaj-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'viaj_admin_nombro');
define('WU_CYBERPANEL_PASSWORD', 'viaj_admin_ŝlosilo');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Opcion de definigi ankaŭ:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Default: true — la produkti Let's Encrypt SSL post la kreo domeno
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Default: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Uzuasit por kontakti de sertifikato SSL
```

## Instruktoroj Monti {#setup-instructions}

### 1. Aktive la API de CyberPanel {#1-enable-the-cyberpanel-api}

1. Logu al viaja de la vianzo de CyberPanel kiel administrator.
2. Alti al **Security** > **SSL** kaj konfirme, ke SSL estas aktiva sur la interfaco de CyberPanel mem (necesas por sekura API-vokoj).
3. La CyberPanel API estas dispona al `https://your-server-ip:8090/api/` per defolo. Ne serĉas pliaj paŝoj por ĝin aktivi — ĝi estas aktiva por admin uzantoj per defolo.

### 2. Ado Konstanto al wp-config.php {#2-add-constants-to-wp-configphp}

Adu la seguenti konstanto al viaj `wp-config.php` filiro antaŭ la linio `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'viaza_sekura_vorto');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Por aktivi auto-SSL (rekomandita):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Aktive la Integrazione {#3-enable-the-integration}

1. En via WordPress network admin, alti al **Ultimate Multisite** > **Settings**.
2. Navige al la tabelo **Domain Mapping**.
3. Scrollante al **Host Integrations**.
4. Aktive la integracion **CyberPanel**.
5. Klikante sur **Save Changes**.

### 4. Verifi la Konektivon {#4-verify-connectivity}

Uzu la konekteston teston mem en la wizard de ŝanĝoj:

1. Altiros **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Klik **Test Connection**.
3. Mensa sukcesas konfirma ke la plugin povas aliri al API de CyberPanel kaj autentiki correttamente.

## Kiel Ĝi Funkcias {#how-it-works}

### Domain Mapping {#domain-mapping}

Kiam domeno estas mapita en Ultimate Multisite:

1. La integracio sendas `POST` petiron al `/api/createWebsite` sur via CyberPanel hosto.
2. CyberPanel kreas novan virtualan hoston por la domeno sub la konfigurita paketo.
3. La dokumentrad-root (document root) estas setita por pointedi al via WordPress reto-root direktorio.
4. Kiam la domain-mapping estas forigita, la integracio volas `/api/deleteWebsite` por puredigi la virtualan hoston.

### Auto-SSL {#auto-ssl}

Kiam `WU_CYBERPANEL_AUTO_SSL` estas `true`:

1. Post kiam la virtualan hoston estas kreita, la integracio volas `/api/issueSSL` por la domeno.
2. CyberPanel petas Let's Encrypt sertifiketon uzante la ACME HTTP-01 challenge.
3. La sertifiketo estas aŭtomate renoveita de CyberPanel antaŭ la ekspirio.

> **Importanta:** DNS devas esti plene propagita al via servero's IP-adreso antaŭe ke Let's Encrypt povus validi la domeno. Se SSL emisiĝo ne funkcias intermeda kiam post mapado, aguarde por DNS-propagado kaj re-triggeru SSL de la CyberPanel dashboard sub **SSL** > **Manage SSL**.

### www Subdomeno {#www-subdomain}

Se **Auto-create www subdomain** estas aktiva en via Domain Mapping konfiguracioj, la integracio ankaŭ kreas alias virtualan hoston por `www.<domain>` kaj, kiam auto-SSL estas aktiva, emisiĝas sertifiketo, kiu coperas tute apex kaj www variantojn.

### Email Forwarders {#email-forwarders}

Kiam la [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) addon aktiva estas, CyberPanel ankaŭ povas provizi klientaj elektronaj redirektantoj. Redirektantoj dirigigas mesaĝojn de domeno ad alia inbox sen krei plenan poŝton, kio estas utile por alias'oj kiel `info@customer-domain.test` aŭ `support@customer-domain.test`.

Antaŭ la aktivaigo redirektantoj por klientoj:

1. Konfirme, ke la ĉeceptaj konstanta CyberPanel super la altvintrigiĝas kaj la konekta testado pasas.
2. Aktive la CyberPanel elektronan provizanton en la ŝanĝoj de la addon Emails.
3. Konfirme, ke la klientdomeno 이미 ekzistas en CyberPanel antaŭ la kreo de la redirektanto.
4. Krei testredirektanton kaj diri mesaĝon per li antaŭ oferi la funkcion sur produkciaj planoj.

Se la kreo de la redirektanto ne pasigas, kontrolu unu el la aktivaj logoj de Ultimate Multisite predikojn, tiam konfirme en CyberPanel, ke la vorto domeno ekzistas kaj ke la API uzanto havas permesojn por administri elektronon.

## Referenco por Konfigurigon {#configuration-reference}

| Konstanta | Reqtirita | Default | Deskribo |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Ja | — | Plena URL al via CyberPanel instanco inkluzive la portoj, ekzemple: `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Ja | — | Administrajo nombro uzanto de CyberPanel |
| `WU_CYBERPANEL_PASSWORD` | Ja | — | Administraja ŝlovo de CyberPanel |
| `WU_CYBERPANEL_PACKAGE` | Ja | `Default` | CyberPanel hospita paketo, kiun aldonigi nova virtualaj hospitaj |
| `WU_CYBERPANEL_AUTO_SSL` | Ne | `true` | Eliri Let's Encrypt SSL sertifikon post domeno kreo |
| `WU_CYBERPANEL_PHP_VERSION` | Ne | `PHP 8.2` | PHP versio por novaj virtualaj hospitaj (devbe koondiari kun versio instalita en CyberPanel) |
| `WU_CYBERPANEL_EMAIL` | Ne | — | Kontakta elektroniko por registri la SSL sertifikon |

## Importanta Notoj {#important-notes}

CyberPanel's API uzas autentifikadon bazitan sesio token. La integracio faras la akvizisyon de token otomatikman sur chak apel API.
Sua konta admin de CyberPanel devas ha permision por kreti kaj diliĉi sitaĵojn (websites).
CyberPanel funkcias sur porta `8090` per defolo. Se via server uzas firewallon, certigu ke ĉi tiu porta estas aksesebla de la WordPress aplikita servero.
La integracio ne administra registroj DNS. Vi devas dirigui domen DNS al la IP-adreso de via serverio antaŭ mapi la domen en Ultimate Multisite.
Se vi uzas OpenLiteSpeed (OLS), gracebla restartado estas akcitata aŭtomate post ŝanĝoj de virtuala hosto. Ne servas manua intervento.

## Problemoj kaj Solvoj {#troubleshooting}

### API konekto refuzita {#api-connection-refused}

- Verifuji, ke porta `8090` estas malferma en via server firewallo.
- Konfirme, ke la valoro de `WU_CYBERPANEL_HOST` inkluzivas la ĝustan protokolon (`https://`) kaj porton.
- Kontroli, ke via CyberPanel SSL certikato estas valida; auto-signitaj certikato povas kaŭzi malsukcesojn en TLS verifikado. Seti `WU_CYBERPANEL_VERIFY_SSL` al `false` nur en fidindaj privataj retoj.

### Autentifikado eraroj {#authentication-errors}

- Konfirme, ke via `WU_CYBERPANEL_USERNAME` kaj `WU_CYBERPANEL_PASSWORD` estas ĝustat per logi in CyberPanel direkte.
- CyberPanel blokas kontojn post pluraj malsukcesaj logina provoj. Kontroli **Security** > **Brute Force Monitor** en CyberPanel, se blokado okazis.

### Domen ne kreita {#domain-not-created}

- Kontroli la aktiva logoj de Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) por API eraro mesaĝoj.
- Verifuji, ke la paketo definita en `WU_CYBERPANEL_PACKAGE` ekzistas en CyberPanel (**Packages** > **List Packages**).
- Certigu, ke la dominio ne estas déjà registrita kiel sitaĵo en CyberPanel — duplika kreo de sitaĵo renkontas eraran.

### SSL certikato ne emitita {#ssl-certificate-not-issued}

- Konfirmiros DNS komplexe propagita: `dig +short your-domain.com` devasigi vian server IP.
- Let's Encrypt impone limito de ratos (rate limits). Se vi octe certifikatoj feliĉa por la sama domeno, aguarde antes de reintentar.
- Kontrole las logoj SSL de CyberPanel sub **Logs** > **Error Logs** por detajlojn de malsukto en la emodo de certifikatoj.
- Kiel alternativo, vi povas emoti SSL manuele de CyberPanel: **SSL** > **Manage SSL** > selektas la domeno > **Issue SSL**.

## Referencoj {#references}

- Dokumentacio API de CyberPanel: https://docs.cyberpanel.net/docs/category/api
- Administrado SSL de CyberPanel: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Limito de ratos de Let's Encrypt: https://letsencrypt.org/docs/rate-limits/
