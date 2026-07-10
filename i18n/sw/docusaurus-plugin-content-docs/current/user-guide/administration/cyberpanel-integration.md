---
title: CyberPanel Uunganishaji
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# Uunganishaji na CyberPanel {#cyberpanel-integration}

Mwongozo huu unashambulia jinsi ya kuweka mipangilio ya uunganishaji wa Ultimate Multisite na CyberPanel ili kwamba nyanja za nje (mapped domains) katika mtandao wako ziwekwe kiotomatiki (na ziondelwe) kama virtual hosts katika CyberPanel, na pia kwa uwezekano wa kuweka SSL kiotomatiki kupitia Let's Encrypt.

## Inafanya Nini {#what-it-does}

- Wakati nyanja ya nje inapowekwa (mapped) katika Ultimate Multisite, uunganishaji unaitumia CyberPanel API kuunda virtual host kwa nyanja hiyo.
- Wakati uwekaji wa nyanja ya nje unapoondolewa, uunganishaji unaitumia API kuondoa virtual host husika.
- Wakati auto-SSL inawashiriwa, uunganishaji unachochea utoaji wa cheti cha Let's Encrypt mara moja baada ya virtual host kuundwa.
- Kwa hiari, unaongeza/kuondoa jina la `www.` kulingana na mipangilio yako ya "Auto-create www subdomain" katika mipangilio ya Domain Mapping.

## Mahitaji ya Awali {#prerequisites}

- Tunzi ya CyberPanel inayofanya kazi (inayopendekezwa v2.3 au zaidi) ambayo inaweza kufikiwa kutoka kwa seva yako ya WordPress.
- Tovuti iliyopo katika CyberPanel ambayo tayari inatoa mzizi wa mtandao wako wa WordPress. Uunganishaji huambatisha virtual hosts mpya kwenye seva hii.
- Upatikanaji wa CyberPanel API uwe imewashiriwa. Uthibitishaji unatumia jina la mtumiaji na neno la siri la admin la CyberPanel yako.
- Rekodi zako za DNS kwa nyanja zote zilizowekwa lazima zionyeshe IP address ya seva yako kabla ya auto-SSL kuweza kutoa cheti halali.

## Mahitaji {#requirements}

Thamani hizi thabiti (constants) lazima zifafanuliwe katika faili yako ya `wp-config.php`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Kwa hiari, unaweza pia kufafanua:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Kiwango cha kiotomatiki: true — toa SSL ya Let's Encrypt baada ya kuunda nyanja
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Kiwango cha kiotomatiki: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Inatumika kwa mawasiliano ya cheti cha SSL
```

## Maelekezo ya Kuweka Mpangilio {#setup-instructions}

### 1. Washa CyberPanel API {#1-enable-the-cyberpanel-api}

1. Ingia kwenye dashboard yako ya CyberPanel kama msimamizi.
2. Nenda kwenye **Security** > **SSL** na thibitisha kwamba SSL inawashiriwa kwenye interface ya CyberPanel yenyewe (hii ni muhimu kwa wito salama wa API).
3. CyberPanel API inapatikana kwa kiwango cha `https://your-server-ip:8090/api/` kwa msingi. Hatua zingine za ziada hazihitajiki kuwasha — inawashiriwa kwa msingi kwa watumiaji wa admin.

### 2. Ongeza Constants kwenye wp-config.php {#2-add-constants-to-wp-configphp}

Ongeza constants zifuatazo kwenye faili yako ya `wp-config.php` kabla ya mstari wa `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Ili kuwezesha auto-SSL (inapendekezwa):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Washa Uunganishaji {#3-enable-the-integration}

1. Katika kiadmin cha mtandao wako wa WordPress, nenda kwenye **Ultimate Multisite** > **Settings**.
2. Nenda kwenye tab ya **Domain Mapping**.
3. Skrola chini hadi **Host Integrations**.
4. Washa uunganishaji wa **CyberPanel**.
5. Bonyeza **Save Changes**.

### 4. Thibitisha Muunganisho {#4-verify-connectivity}

Tumia kipimo cha muunganisho kilicho ndani kwenye kichawi cha mipangilio:

1. Nenda kwenye **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Bonyeza **Test Connection**.
3. Ujumbe wa mafanikio unathibitisha kwamba plugin inaweza kufika na CyberPanel API na kuthibitisha kwa usahihi.

## Inafanya Kazi Vipi {#how-it-works}

### Domain Mapping {#domain-mapping}

Wakati nyanja ya nje inapowekwa (mapped) katika Ultimate Multisite:

1. Uunganishaji unatuma ombi la `POST` kwenda `/api/createWebsite` kwenye host yako ya CyberPanel.
2. CyberPanel inaunda virtual host mpya kwa nyanja hiyo chini ya package iliyowekwa.
3. Mzizi wa hati (document root) unowekwa kuonyesha kwenye saraka ya mzizi ya mtandao wako wa WordPress.
4. Wakati uwekaji wa nyanja ya nje unaondolewa, uunganishaji unaitumia `/api/deleteWebsite` ili kusafisha virtual host.

### Auto-SSL {#auto-ssl}

Wakati `WU_CYBERPANEL_AUTO_SSL` ni `true`:

1. Baada ya virtual host kuundwa, uunganishaji unaitumia `/api/issueSSL` kwa nyanja hiyo.
2. CyberPanel inataka cheti cha Let's Encrypt kwa kutumia changamoto ya ACME HTTP-01.
3. Cheti kinajapishwa kiotomatiki na CyberPanel kabla ya kuisha.

> **Muhimu:** DNS lazima ienezwe kabisa hadi IP address ya seva yako kabla ya Let's Encrypt kuweza kuthibitisha nyanja. Ikiwa utoaji wa SSL unashindikana mara moja baada ya kuwekwa, subiri kwa uenezaji wa DNS na uchochee tena SSL kutoka kwenye dashboard ya CyberPanel chini ya **SSL** > **Manage SSL**.

### www Subdomain {#www-subdomain}

Ikiwa **Auto-create www subdomain** imewashiriwa katika mipangilio yako ya Domain Mapping, uunganishaji pia unaunda jina la virtual host la kiambishi cha `www.<domain>` na, wakati auto-SSL inawashiriwa, inatoa cheti kinachofunika aina zote mbili za apex na www.

### Email Forwarders {#email-forwarders}

Wakati addon ya [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) inawashiriwa, CyberPanel pia inaweza kutoa email forwarders kwa wateja. Forwarders hutoa ujumbe kutoka kwa anwani ya nyanja hadi sanduku la barua jingine bila kuunda sanduku la barua kamili, ambayo ni muhimu kwa viambishi kama `info@customer-domain.test` au `support@customer-domain.test`.

Kabla ya kuwezesha forwarders kwa wateja:

1. Thibitisha kwamba constants za CyberPanel hapo juu zimepangishwa na kipimo cha muunganisho kinapita.
2. Washa mtoa huduma wa barua pepe wa CyberPanel katika mipangilio ya Emails addon.
3. Thibitisha kwamba nyanja ya mteja ipo tayari katika CyberPanel kabla ya kuunda forwarder.
4. Unda forwarder ya majaribio na tuma ujumbe kupitia hiyo kabla ya kutoa kipengele kwenye mipango ya uzalishaji.

Ikiwa kuunda forwarder kushindwa, angalia kwanza logi za shughuli za Ultimate Multisite, kisha thibitisha katika CyberPanel kwamba nyanja ya chanzo ipo na kwamba mtumiaji wa API ana ruhusa za usimamizi wa barua pepe.

## Rejeleo la Mpangilio {#configuration-reference}

| Constant | Lazima | Kiwango cha Kiotomatiki | Maelezo |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Ndiyo | — | URL kamili ya toleo lako la CyberPanel ikiwa ni pamoja na bandari, mfano: `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Ndiyo | — | Jina la mtumiaji wa admin wa CyberPanel |
| `WU_CYBERPANEL_PASSWORD` | Ndiyo | — | Neno la siri la admin wa CyberPanel |
| `WU_CYBERPANEL_PACKAGE` | Ndiyo | `Default` | Package ya ujenzi wa tovuti ya CyberPanel ya kuipa virtual hosts mpya |
| `WU_CYBERPANEL_AUTO_SSL` | Hapana | `true` | Toa cheti cha SSL cha Let's Encrypt baada ya kuunda nyanja |
| `WU_CYBERPANEL_PHP_VERSION` | Hapana | `PHP 8.2` | Toleo la PHP kwa virtual hosts mpya (lazima liendane na toleo lililowekwa katika CyberPanel) |
| `WU_CYBERPANEL_EMAIL` | Hapana | — | Barua pepe ya mawasiliano kwa ajili ya usajili wa cheti cha SSL |

## Vidokezo Muhimu {#important-notes}

- API ya CyberPanel inatumia uthibitishaji wa token wa kundi la vipindi (session-based token authentication). Uunganishaji unashughulikia kupata token kiotomatiki kila wito wa API.
- Akaunti yako ya admin ya CyberPanel lazima iwe na ruhusa za kuunda na kufuta tovuti.
- CyberPanel inafanya kazi kwenye bandari `8090` kwa msingi. Ikiwa seva yako inatumia firewall, hakikisha bandari hii inapatikana kutoka kwa seva ya programu ya WordPress.
- Uunganishaji hausimami rekodi za DNS. Lazima uonyeshe DNS ya nyanja hadi IP address ya seva yako kabla ya kuweka nyanja katika Ultimate Multisite.
- Ikiwa unatumia OpenLiteSpeed (OLS), upya wa kirafiki (graceful restart) unachochewa kiotomatiki baada ya mabadiliko ya virtual host. Hakuna mwingiliano wa kibinadamu unaohitajika.

## Kutatua Matatizo {#troubleshooting}

### API Connection Refused (Muunganisho wa API Unakataa) {#api-connection-refused}

- Thibitisha kwamba bandari `8090` imefunguliwa kwenye firewall ya seva yako.
- Thibitisha kwamba thamani ya `WU_CYBERPANEL_HOST` inajumuisha itifaki sahihi (`https://`) na bandari.
- Angalia kwamba cheti cha SSL cha CyberPanel chako ni halali; cheti cha kujitenga (self-signed certificates) kinaweza kusababisha kushindwa kwa uthibitishaji wa TLS. Weka `WU_CYBERPANEL_VERIFY_SSL` kuwa `false` tu katika mazingira ya mtandao binafsi yanayotegemewa.

### Authentication Errors (Makosa ya Uthibitishaji) {#authentication-errors}

- Thibitisha kwamba `WU_CYBERPANEL_USERNAME` na `WU_CYBERPANEL_PASSWORD` zako ni sahihi kwa kuingia kwenye CyberPanel moja kwa moja.
- CyberPanel inafunga akaunti baada ya majaribio mengi ya kuingia kushindwa. Angalia **Security** > **Brute Force Monitor** katika CyberPanel ikiwa kuna kufungwa.

### Domain Not Created (Nyanja Haikuundwa) {#domain-not-created}

- Angalia logi za shughuli za Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) kwa ujumbe wa makosa ya API.
- Thibitisha kwamba package iliyofafanuliwa katika `WU_CYBERPANEL_PACKAGE` ipo katika CyberPanel (**Packages** > **List Packages**).
- Hakikisha nyanja haijatowekana tayari kama tovuti katika CyberPanel — kuunda tovuti mara mbili kunarejesha kosa.

### SSL Certificate Not Issued (Cheti cha SSL Hakitolewi) {#ssl-certificate-not-issued}

- Thibitisha kwamba DNS imefika kabisa: `dig +short your-domain.com` inapaswa kurejesha IP address ya seva yako.
- Let's Encrypt inazimisha mipaka ya kiwango (rate limits). Ikiwa hutoa cheti kadhaa kwa nyanja moja hivi karibuni, subiri kabla ya kujaribu tena.
- Angalia logi za SSL za CyberPanel chini ya **Logs** > **Error Logs** kwa maelezo kuhusu kushindwa kwa utoaji wa cheti.
- Kama njia mbadala, unaweza kutoa SSL kwa mikono kutoka CyberPanel: **SSL** > **Manage SSL** > chagua nyanja > **Issue SSL**.

## Rejeleo {#references}

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
