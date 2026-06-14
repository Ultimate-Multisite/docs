---
title: Shigarwar CyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# Shigarwarin CyberPanel Integration

Wannan hanyar da ke bayanin yadda za a tsara Ultimate Multisite CyberPanel integration don in domain-domain da aka haska a cikin shahararku su a ƙara (da kuma a cire) a matsayin virtual hosts a CyberPanel, tare da damar samar da auto-SSL ta Let's Encrypt.

## Abin da Yana Yi

- Lokacin da aka haska domain a Ultimate Multisite, wannan integration tana kira CyberPanel API don ƙirƙirar wani virtual host don wannan domain ɗin.
- Lokacin da aka cire haskar domain, wannan integration tana kira API don shigar da wancan virtual host da ya dace.
- Lokacin da a sanya auto-SSL, wannan integration tana ƙarfafa samar da sertifika ta Let's Encrypt nan take bayan an ƙirƙirar virtual host ɗin.
- A zaɓi yana ƙara/cire alias na `www.` dangane da tsarin "Auto-create www subdomain" a Settings na Domain Mapping.

## Sharuwar Awarin (Prerequisites)

- Wani CyberPanel instance mai aiki (an ba da shawarar v2.3 ko kuma wani ya ƙarshe).
- Wannan website da ya kasance a CyberPanel wanda ya bayar da tushen shahararku na WordPress. An haɗa sabbin virtual hosts ga wannan server ɗin ta integration.
- A buɗe samun CyberPanel API. Bayan da labari (Authentication) ana amfani da sunan amiran admin da kalmar sirri a CyberPanel.
- Siffar DNS na domain-domain da aka haska dole ne ta shiga IP ɗin server ɗinku kafin auto-SSL zai iya samar da sertifika mai kyau.

## Sharuwa (Requirements)

Wannan ƙa'idodin dole ne su bayyana a cikin fayil ɗin `wp-config.php` ɗinka:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

A zaɓi, za ka iya bayyana su da:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Default: true — SSL a kasa Let's Encrypt bayan domain gaba
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Default: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Amfani da amfani don tattaunawa da sertifikat SSL

## Shawararin Shirye-shirye (Setup Instructions)

### 1. Shigar API na CyberPanel

1. Shiga cikin dashboard na CyberPanel a matsayin administrator.
2. Zuwa **Security** > **SSL** kuma tabbatar cewa SSL tana aiki a kan interface na CyberPanel baki (dole ne don yin amfani da API mai aminci).
3. API na CyberPanel yana nan a `https://your-server-ip:8090/api/` a matsayin asali. Ba dole ba a yi matakai na ƙarin don shigar shi — yana nan a matsayin asali ga masu amfani na administrator.

### 2. Tambaya Constants zuwa wp-config.php

Tambaya waɗannan constants zuwa fayil ɗin `wp-config.php` kafin lissafin `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Don shigar SSL na asali (recommended):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Shigar Haɗin Kai (Enable the Integration)

1. A admin network na WordPress, tafiya zuwa **Ultimate Multisite** > **Settings**.
2. Tafiya zuwa tabin **Domain Mapping**.
3. Ji da ƙasa zuwa **Host Integrations**.
4. Shigar haɗin **CyberPanel**.
5. Danna **Save Changes**.

### 4. Bincike Haɗin Kai (Verify Connectivity)

Yi amfani da gwajin haɗi na asali a cikin shawarar settings:

1. Zuwa **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Dabuta **Test Connection**.
3. Wataƙila wata mace tana tabbatar da cewa plugin na iya samun CyberPanel API kuma ta yi tsaro cikin sauki.

## Yadda Ake Aiki

### Domain Mapping (Tattaunawa Ta Lokaci)

Idan aka yi mapping ga domain a Ultimate Multisite:

1. Wannan haɗin yana aiko `POST` request zuwa `/api/createWebsite` a CyberPanel ɗinka.
2. CyberPanel yana ƙirƙirar wani virtual host na domain ɗin a ƙarƙashin package da aka tsara.
3. Directory na takarda (document root) ana sanya shi ya nuna directory na gida na WordPress ɗinka.
4. Lokacin da aka cire mapping na domain, wannan haɗin yana kiran `/api/deleteWebsite` don tsaftace virtual host.

### Auto-SSL (Auto-Sertifikat Na Tsaro)

Idan `WU_CYBERPANEL_AUTO_SSL` tana da matsayin `true`:

1. Bincike da virtual host ya ƙirƙira, wannan haɗin yana kiran `/api/issueSSL` don domain ɗin.
2. CyberPanel yana buƙatar sertifikat na Let's Encrypt ta amfani da ACME HTTP-01 challenge.
3. CyberPanel yana sake sabunta sertifikat ne kafin ya ƙare.

> **Muhimmi:** Dole DNS ya yi cikakken taruwa ga IP ɗin server ɗinka kafin Let's Encrypt za ta iya tabbatar da domain ɗin. Idan samarwa SSL ya yi nasara nan bayan an yi mapping, ka jira taruwar DNS kuma sake ƙarfafa SSL daga dashboard na CyberPanel a ƙarƙashin **SSL** > **Manage SSL**.

### www Subdomain (Subdomain Na www)

Idan aka wuce **Auto-create www subdomain** a cikin tsarin Domain Mapping ɗinka, wannan haɗin yana ƙirƙirar alias na virtual host don `www.<domain>` kuma, lokacin da Auto-SSL ya kasance, yana samar da sertifikat wanda ke gona kan variant ɗin apex da www.

### Email Forwarders (Wurin Shigar Jin Imel)

Idan [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) addon yana aiki, CyberPanel kuma iya ba da sabon masu canza imel (customer email forwarders). Wannan forwarding suna kan bayanan imel daga wani domain zuwa babban inbox ba tare da ƙirƙirar hotawa mai cike (full mailbox) ba, wanda ya fi kyau ga alias ɗin kamar `info@customer-domain.test` ko `support@customer-domain.test`.

Kafin a samar da forwarding ga abokan ciniki:

1. Ka tabbata ƙa'idodin CyberPanel da aka bayarwa above sun yi tsari kuma gwajin haɗi ya wuce.
2. Ingili gudanar da imel na CyberPanel a cikin sako (settings) na Emails addon.
3. Ka tabbata domain ɗin abokan ciniki yana da shi a CyberPanel kafin ƙirƙirar forwarding.
4. Ka ƙirƙira forwarding na gwaji ka kuma ka aiko sa imel ta hanyar shi kafin ba su wannan ƙarin kyautawar (feature) ga tsarin aiki na production.

Idan ƙirƙirar forwarding ya yi nasara ba, ka bincika log-aiki na Ultimate Multisite farko, sannan ka tabbata a CyberPanel cewa domain ɗin asalinsa yana da shi kuma wani mai amfani (API user) yana da iyakacin sarrafa imel.

## Bayanai na Tsarin (Configuration Reference)

| Constant | Yiwuwar Aida | Default | Bayanin |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Eh | — | URL gaba ga CyberPanel ɗinka da aka haɗa, misali: `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Eh | — | Sunan amfani (username) na CyberPanel admin |
| `WU_CYBERPANEL_PASSWORD` | Eh | — | Kalmar sirri (password) na CyberPanel admin |
| `WU_CYBERPANEL_PACKAGE` | Eh | `Default` | Tsarin haɗin CyberPanel da za a ba shi ga sabon virtual hosts |
| `WU_CYBERPANEL_AUTO_SSL` | Ba | `true` | Aiki da sertifika na Let's Encrypt bayan ƙirƙirar domain |
| `WU_CYBERPANEL_PHP_VERSION` | Ba | `PHP 8.2` | Bayan PHP ga sabon virtual hosts (ya kamata ya yi da wani bayanan da aka so a CyberPanel) |
| `WU_CYBERPANEL_EMAIL` | Ba | — | Imel na tuntuɓar sarrafa sertifika na SSL |

## Bayanai Muhimman

API na CyberPanel tana amfani da token-based authentication (token-based session) ke amfani da shi. Wannan integration yana samun wannan token a kowane kira na API ne.
Babban amfani mai CyberPanel dole ya sami iyakoki don samar da shafuka (websites) da kuma sanyawa.
CyberPanel yana tafiya a port `8090` a matsayin asali. Idan server ɗinka ke da firewall, tabbatar wannan port na iya samun samun daga server ɗin WordPress.
Wannan integration ba ta'amji rekodoin DNS (DNS records). Dole ka nuna DNS na domain ɗinka ga IP address na server ɗinka kafin ka sanya domain a Ultimate Multisite.
Idan kana amfani da OpenLiteSpeed (OLS), an fara sake gudanarwa cikin sauki bayan canjin virtual host. Ba a buƙatar wani shiga kai tsaye ba.

## Magance Matala (Troubleshooting)

### Wajara Ake Rajawa (API Connection Refused)

- Tabbatar cewa port `8090` tana buɗe a firewall na server ɗinka.
- Ka tabbatar cewa yawan `WU_CYBERPANEL_HOST` yana nuna tsarin da ya dace (`https://`) da kuma port.
- Ka bincika ko sertifika na SSL na CyberPanel ta dace; sertifika da aka samar a kansa (self-signed certificates) za su iya kawo matsaloli wajen tabbatar da TLS. Ka sanya `WU_CYBERPANEL_VERIFY_SSL` zuwa `false` kawai a muhallin gida na sirri da aka amince shi.

### Kuskuren Tabbatar Da Kai (Authentication Errors)

- Ka tabbatar cewa `WU_CYBERPANEL_USERNAME` da `WU_CYBERPANEL_PASSWORD` na dace ta hanyar shiga CyberPanel kai tsaye.
- CyberPanel yana lokawa ayi buɗa kai (locks accounts) bayan an ƙara ƙoƙarin shiga kai da kuskure. Ka bincika **Security** > **Brute Force Monitor** a CyberPanel idan ana samun wajara.

### Ba A Samar Da Domain Ba (Domain Not Created)

- Bincika login aiki na Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) don samun saƙonnin kuskuren API.
- Ka tabbatar cewa paket ɗin da aka tsara a `WU_CYBERPANEL_PACKAGE` yana wajaba a CyberPanel (**Packages** > **List Packages**).
- Ka tabbatar domain ba ya samar a matsayin website ba a CyberPanel — samarwa website na dubawa zai kawo kuskure.

### Ba A Samar Da Sertifika Na SSL Ba (SSL Certificate Not Issued)

- tabbatar DNS ya yi cikak a matsayin cewa an kammala bai waɗannan ba: `dig +short your-domain.com` ya kamata ya bayyana IP ɗin server ɗinka.
- Let's Encrypt tana magance ƙa'idar da ake saka (rate limits). Idan ka sake samarwa wasu sertifikat na domain ɗaya a cikin kwanaki masu yawa, ka jira kafin ka sake gwada.
- Bincika log-in SSL na CyberPanel a kan **Logs** > **Error Logs** don samun bayani game da rashin samun sertifika.
- A matsayin wajibi (fallback), za ka iya samarwa SSL ne kai tsaye daga CyberPanel: **SSL** > **Manage SSL** > zaɓi domain ɗin > **Issue SSL**.

## Bayanai

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
