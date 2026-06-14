---
title: Whakawhanaungatanga CyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# Whakawhanaungatanga me CyberPanel Integration

Ko tēnei whakatairanga ahau whakamārama i te ara hei whakauru i te Ultimate Multisite CyberPanel integration kia whai ake ana, ko e whai whakaaro ana ki te whakarite (me te whakatū) me te whero (whakamutunga) ngā domain inu i tō wāhi, ahakoaho ana ki te whakamahi virtual hosts i CyberPanel, me te whakatū auto-SSL anō.

## He aha ia tino mahi?

- I roto i te Ultimate Multisite, i whakawhanake (map) koe i te domain, ka whakawhanaunga (call) te integration ki te CyberPanel API kia whero virtual host mō tēnei domain.
- I roto i te wā e whero te mapping o te domain, ka whakawhanaunga (call) te integration ki te API kia whero (delete) te virtual host e hāngai ana.
- I roto i te wā e whakatau auto-SSL, ka whakatika (trigger) te integration i te whero certificate issuance o Let's Encrypt immediately i runga i te whero virtual host.
- E ngā mea e taea, ka whero/whero te alias `www.` i runga i tō "Auto-create www subdomain" setting i Domain Mapping settings.

## Ngā Tūnga Whakawhanaungatanga (Prerequisites)

- He instance o CyberPanel i whakawhanake (running) (e tino whakamārama ana ko v2.3 oru ora ana) e tika ana ki te whai ake, me te mea he tino whaihi ana i tō server WordPress.
- He website mō te riupawheraki i CyberPanel e hoki ana i tō network root o WordPress. Ko te integration e whero virtual hosts hou ki tēnei server.
- Whakawhanaungatanga API o CyberPanel e pēnei. Ka whakamahia tō admin username me password o CyberPanel.
- Me whai whakaaro ana ngā DNS records mō ngā domain inu i whakawhanake (mapped domains) ki te IP address o tō server mō te mea e taea ai auto-SSL iawhia certificate tino pai.

## Ngā Wāhi Whakawhanaungatanga (Requirements)

Me whakahau i ngā constants berikut i tō file `wp-config.php`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

E ngā mea e taea, ka whakahau i:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Default: true — issue Let's Encrypt SSL after domain creation
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Default: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Used for SSL certificate contact
```

## Nereia Whakamahi (Setup Instructions)

### 1. Whakawhanaungatanga API o CyberPanel (Enable the CyberPanel API)

1. Log in ki te dashboard o aua CyberPanel mo admin.
2. Pāinga ki **Security** > **SSL** ā, kia whakatika i te mea SSL active ana i te interface o CyberPanel ahau (he mea tino nui mō te whakamahi API ā-secure).
3. He API o CyberPanel e rite ana i `https://your-server-ip:8090/api/` e rite ana i te mea, he mea tino nui ki te whakatau i a ia — he active ana he mea tino nui mō ngā admin users.

### 2. Whakawhiti Constants ki wp-config.php (Add Constants to wp-config.php)

Whakawhiti i ngā constants berikut ki tō file `wp-config.php` mōha i te wā e hoki i te line `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Mō te whakamahi auto-SSL (he mea tino nui):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Whakawhanaungatanga (Enable the Integration)

1. I tō WordPress network admin, pāinga ki **Ultimate Multisite** > **Settings**.
2. Pāinga ki te tab **Domain Mapping**.
3. Scrolli ki te **Host Integrations**.
4. Whakawhanaunga i te integration o **CyberPanel**.
5. Click **Save Changes**.

### 4. Whakawhiti Whakamahi (Verify Connectivity)

Whakawhiti te whakamārama konektanga e hoki ana i te settings wizard:

1. Pāpā ki **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Whakaaro **Test Connection**.
3. He whaiwhia whaihi e whakataki ana i te whakamārama he ka taea te pēre i te API o CyberPanel me te whakamahi i te whakamārama (authenticate) i te wāhi.

## He aha ia mahi?

### Domain Mapping

I roto i Ultimate Multisite, i roto i te wā e whakatō ana koe i te domain:

1. Ka tōwhiti te whaiwhia ki te `POST` request ki `/api/createWebsite` o te host CyberPanel mo tō domain.
2. Ka whakamaoritia e CyberPanel he virtual host hou mo te domain under te package (package) kua whakaritea.
3. Ka whakatika te document root kia pūmau ana ki te directory o te wāhi nui o WordPress o koe.
4. I roto i te wā e whero ai te domain mapping, ka whakawhiti te whaiwhia ki `/api/deleteWebsite` mo te whero (clean up) te virtual host.

### Auto-SSL

I roto i te wā e hoki ana `WU_CYBERPANEL_AUTO_SSL` he `true`:

1. I roto i te wā e whakamaoritia te virtual host, ka whakawhiti te whaiwhia ki `/api/issueSSL` mo te domain.
2. Ka whero e CyberPanel he certificate o Let's Encrypt no te ACME HTTP-01 challenge.
3. Ka whero ana te certificate automatically e CyberPanel i roto i te wā e hoki (expiry) i te wae.

> **Tū mai:** Me hoatu te DNS katoa ki te IP address o tō server mo Let's Encrypt he taea ai te whakamārama i te domain. Ko te mea, ko i roto i te wā e pēre ana i te mapping, he whai whakaaro ki te propagation o te DNS me te whakawero anō (re-trigger) i te SSL mula mai i te dashboard o CyberPanel under **SSL** > **Manage SSL**.

### www Subdomain

Ko i roto i te whakaritenga Domain Mapping mo **Auto-create www subdomain**, ka whakatō te whaiwhia he virtual host alias mo `www.<domain>` me, ko i roto i te wā e hoki ana Auto-SSL, ka whero certificate no te apex (apex) me te www variants.

### Email Forwarders

Kāore i te wae o te [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) addon e active, he taea ana ki CyberPanel whakamahi ai i forwarders email mō ngā mea whaiora o te mea. Ka whakahaa ake ngā forwarders i ngā pango (messages) mai te wāhi o te domain ki te inbox hou, i roto i te mea ka whakatika i te pango mai i te domain ki te inbox hou, ā, he nui tēnei mō mga alias kua whai mo te `info@customer-domain.test` ahau.

Mōha i te whakatau i forwarders mō ngā mea o te whānau:

1. Kia tino mārama ko ka whakamahinga i ngā constants o CyberPanel i runga above, ā, ka pēnei te whakamātautanga konei.
2. Whakahaa ake te provider email o CyberPanel i ngā settings o te Emails addon.
3. Kia tino mārama ko ka puta te domain o te whānau i CyberPanel mō te whakatika i te forwarder.
4. Whakahaa ake tētahi test forwarder, ā, whaihi pango mai i ai mō pango i roto i te whakamātautanga mo ngā plānge o te whānau.

Kia pēnei te whakaaro:

Kia pēnei te whakahaere i te fakaa (forwarder) ka pēnei te whakaaro: Kia tino mārama ko ka puta te domain o te whānau i CyberPanel mō te whakatika i te forwarder.

Kia pēnei te whakaaro: Kia tino mārama ko ka puta te domain o te whānau i CyberPanel mō te whakatika i te forwarder.

Whakarongo: Whakarongo ki te whakamārama mō ngā mea e whai ake nei i te dokumentation o te WordPress.

Te API o CyberPanel (CyberPanel's API) e whakamahi whakamārama-based token authentication. Ko te whakataunga (integration) e whaiaro ana i te whakahaere o te token ki te ao Māori (token acquisition) i roto i ngā pō (each API call).

Me heke i te mana (permissions) o te account admin o koe i CyberPanel kia taea ai i te whakamahi me te whakatika (create and delete) ngā website.

Ko CyberPanel e hoatu (runs) i te port `8090` e tino pai (by default). Ko te mea, ko te mea nui, inae ki te server o koe he firewall, kia kore e taea te whaihi (accessible) tēnei port mai i te server o te WordPress application.

Ko te whakamārama (integration) ia i te whakahaere o ngā DNS records. Me whai whakaaro ki te whakaputa (point) i te DNS o te domain ki te IP address o tō server mō te mea, i roto i Ultimate Multisite, kia taea ai te mapu (mapping) i te domain.

Inae he hoki (OpenLiteSpeed - OLS), ko e whakatika (graceful restart) ana automatically i runga i ngā whakawhiti virtual host (virtual host changes). He tino pai tēnei; he mea nui, he mea nui, he mea nui, he mea nui, he mea nui.

## Whakamārama (Troubleshooting)

### API Connection Refused

- Kia tiaki (verify) ki te port `8090` e pātaka (open) ana i tō firewall o te server.
- Kia whakatika (confirm) ko te wāhi o `WU_CYBERPANEL_HOST` e whai ana i te protocol tika (`https://`) me te port.
- Kia tiaki ki te certificate SSL o koe i CyberPanel he tino pai; ngā certificates self-signed (self-signed certificates) e taea te whakatika (cause) TLS verification failures. Whakarite (Set) i `WU_CYBERPANEL_VERIFY_SSL` ki `false` anō i ngā ao whānui (trusted private network environments).

### Authentication Errors

- Kia whakatika (confirm) ko te `WU_CYBERPANEL_USERNAME` me te `WU_CYBERPANEL_PASSWORD` o koe he tino pai e ngā login ki CyberPanel.
- Ko CyberPanel e whakawhiti (locks) i ngā account i runga i ngā whakamātautanga login e pēnei ana. Kia tiaki ki **Security** > **Brute Force Monitor** i CyberPanel inae ko ngā lockouts e hua.

### Domain Not Created

- Kia tiaki ki te activity log o Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) mō ngā messages of API error.
- Kia whakatika (verify) ko te package e whakatau i `WU_CYBERPANEL_PACKAGE` e tino pai ana i CyberPanel (**Packages** > **List Packages**).
- Kia tiaki ki te mea he pēnei, he pēnei, he pēnei, he pēnei. Ko te domain ia he pātaka (registered) koe i te website i CyberPanel — ko te whakatika (duplicate) o te creation o te website e hua error.

### SSL Certificate Not Issued

- Korewa i te DNS e whānau atu katoa: Me whai i `dig +short your-domain.com` kia whai i te IP o tō server.
- He Let's Encrypt e whakatau ngā rate limits (rate limits). Ko te mea, ko te tino tika koe ki te whai i te wā i whai i te hiahia mo certificate he nui ana i te domain, he whai i te wā mō te whakamohana i te pō.
- Pāpā i ngā logs SSL o CyberPanel i runga i **Logs** > **Error Logs** kia whai i ngā korero mō te pōtiki o te certificate.
- He whakatau whakamua, ko koe e taea ai te pōtiki i te SSL manu manu ana i CyberPanel: **SSL** > **Manage SSL** > select the domain > **Issue SSL**.

## References

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
