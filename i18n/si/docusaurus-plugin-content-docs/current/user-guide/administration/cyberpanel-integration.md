---
title: සයිබර්පැනල් ඒකාබද්ධ කිරීම
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel ඒකාබද්ධ කිරීම (Integration) {#cyberpanel-integration}

මෙම මාර්ගෝපදේශය මගින් Ultimate Multisite CyberPanel ඒකාබද්ධ කිරීම සකස් කරන්නේ කෙසේද යන්න පැහැදිලි කරයි. එමඟින් ඔබේ ජාලයේ ඇති මූලික වෙබ් අඩවි (mapped domains) ස්වයංක්‍රීයව CyberPanel හි virtual hosts ලෙස එකතු කිරීම (සහ ඉවත් කිරීම) සිදු වන අතර, Let's Encrypt හරහා විකල්ප auto-SSL සැපයුමක් ද ලබා ගත හැකිය.

## එය කරන්නේ කුමක්ද? {#what-it-does}

- Ultimate Multisite හිදී යම් ડોමെയ്නයක් map කළ විට, ඒ සඳහා virtual host එකක් නිර්මාණය කිරීමට integration එක CyberPanel API වෙත ඇමතුමක් කරයි.
- ડોමെയ്න mapping එක ඉවත් කරන විට, අදාළ virtual host එක මකා දැමීමට integration එක API වෙත ඇමතුමක් ලබා දෙයි.
- auto-SSL සක්‍රිය කර ඇති විට, virtual host එක නිර්මාණය කිරීමෙන් පසු Let's Encrypt සහතිකයක් (certificate) වහාම නිකුත් කිරීමට integration එක ක්‍රියාත්මක කරයි.
- Domain Mapping settings හි "Auto-create www subdomain" සැකසුමට අනුව `www.` අලියාචනය (alias) එක අවශ්‍ය පරිදි එකතු කිරීම හෝ ඉවත් කිරීම විකල්ප වේ.

## පූර්ව අවශ්‍යතා (Prerequisites) {#prerequisites}

- ඔබේ WordPress සේවාදායකයෙන් (server) ප්‍රවේශ විය හැකි, ක්‍රියාත්මක වන CyberPanel instance එකක් (v2.3 හෝ ඊට පසු නිර්දේශ කරනු ලැබේ).
- ඔබගේ WordPress network root එක දැනටමත් සපයන CyberPanel හි පවතින වෙබ් අඩවියක් තිබිය යුතුය. integration එක මගින් නව virtual hosts මෙම සේවාදායකයට සම්බන්ධ කරයි.
- CyberPanel API ප්‍රවේශය සක්‍රීය කර තිබිය යුතුය.認証 (Authentication) සඳහා ඔබගේ CyberPanel පරිපාලක පරිශීලක නාමය සහ මුරපදය භාවිතා කරන්න.
- auto-SSL වලට වලංගු සහතිකයක් නිකුත් කිරීමට පෙර, map කළ ડોමെയ്න සඳහා වන DNS වාර්තා ඔබේ සේවාදායකයේ IP ලිපිනය වෙත යොමු වී තිබිය යුතුය.

## අවශ්‍යතා (Requirements) {#requirements}

ඔබේ `wp-config.php` ගොනුවේ පහත constant (ස්ථාවර අගයන්) නිර්වචනය කළ යුතුය:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

විකල්ප වශයෙන්, ඔබට පහත දේ ද නිර්වචනය කළ හැකිය:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // පෙරනිමිය: true — ડોમેન නිර්මාණය කිරීමෙන් පසු Let's Encrypt SSL ලබා දෙන්න
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // පෙරනිමිය: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // SSL සහතික කිරීම සම්බන්ධයෙන් භාවිතා කරයි
```

## සැකසුම් උපදෙස් (Setup Instructions) {#setup-instructions}

### 1. CyberPanel API සක්‍රීය කරන්න {#1-enable-the-cyberpanel-api}

1. පරිපාලක ලෙස ඔබේ CyberPanel දාශබෝඩ් එකට ලොග් වන්න.
2. **Security** > **SSL** වෙත යන්න සහ CyberPanel අතුරුමුහුණතේ SSL ක්‍රියාත්මක බව තහවුරු කරන්න (ආරක්ෂිත API ඇමතුම් සඳහා මෙය අවශ්‍ය වේ).
3. CyberPanel API මූලිකව `https://your-server-ip:8090/api/` හි ලබා ගත හැක. එය සක්‍රීය කිරීමට අමතර පියවර අවශ්‍ය නොවේ — පරිපාලක පරිශීලකයින් සඳහා එය පෙරනිමියෙන් ක්‍රියාත්මක වේ.

### 2. wp-config.php වෙත Constant එකතු කරන්න {#2-add-constants-to-wp-configphp}

`/* That's all, stop editing! */` යන පේළියට පෙර ඔබේ `wp-config.php` ගොනුවට පහත constant එකතු කරන්න:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Auto-SSL සක්‍රීය කිරීමට (නිර්දේශිතයි):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. ඒකාබද්ධ කිරීම සක්‍රීය කරන්න (Enable the Integration) {#3-enable-the-integration}

1. ඔබේ WordPress network admin තුළ, **Ultimate Multisite** > **Settings** වෙත යන්න.
2. **Domain Mapping** ටැබයට යන්න.
3. පහළට **Host Integrations** වෙත ගොස් බලන්න.
4. **CyberPanel** ඒකාබද්ධ කිරීම සක්‍රීය කරන්න (Enable).
5. **Save Changes** ක්ලික් කරන්න.

### 4. සම්බන්ධතාවය තහවුරු කරන්න (Verify Connectivity) {#4-verify-connectivity}

සැකසුම් මඟින් ඇති built-in connection test එක භාවිතා කරන්න:

1. **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel** වෙත යන්න.
2. **Test Connection** ක්ලික් කරන්න.
3. සාර්ථක බව පිළිබඳ පණිවිඩයක් මගින් මෙම plugin එක CyberPanel API වෙත ළඟා වී නිවැරදිව අනුබද්ධ කළ හැකි බව තහවුරු කරයි.

## එය ක්‍රියා කරන ආකාරය {#how-it-works}

### Domain Mapping (ප්‍රධාන නාමය සිතියම් කිරීම) {#domain-mapping}

Ultimate Multisite හිදී යම් ડોමේනයක් සිතියම් කරන විට:

1. ඒකාබද්ධ කිරීම ඔබේ CyberPanel සත්කාරකයා වෙත `/api/createWebsite` වෙත `POST` ඉල්ලීමක් යවයි.
2. CyberPanel විසින් වෙන් කර ඇති පැකේජය යටතේ එම ડોමේනය සඳහා නව virtual host එකක් නිර්මාණය කරයි.
3. document root එක ඔබේ WordPress ජාලයේ මූලික (root) දිශාව වෙත යොමු වන ලෙස සකසනු ලැබේ.
4. Domain mapping ඉවත් කරන විට, virtual host එක පිරිසිදු කිරීම සඳහා ඒකාබද්ධ කිරීම `/api/deleteWebsite` අමතයි.

### Auto-SSL (ස්වයංක්‍රීය SSL) {#auto-ssl}

`WU_CYBERPANEL_AUTO_SSL` `true` නම්:

1. virtual host එක නිර්මාණය කිරීමෙන් පසු, ඒකාබද්ධ කිරීම එම ડોමේනය සඳහා `/api/issueSSL` අමතයි.
2. CyberPanel විසින් ACME HTTP-01 අභියෝගය (challenge) භාවිතා කර Let's Encrypt සහතිකයක් ඉල්ලා සිටී.
3. අලුත් වන කාලයට පෙර, CyberPanel මගින් සහතිකය ස්වයංක්‍රීයව අලුත් කරයි.

> **වැදගත්:** Let's Encrypt විසින් ડોමේනය වලංගු කිරීමට පෙර DNS සම්පූර්ණයෙන්ම ඔබේ සේවාදායකයේ IP ලිපිනයට ප්‍රචාරණය (propagate) කළ යුතුය. mapping කිරීමෙන් පසු SSL නිකුතුව වහාම අසාර්ථක වුවහොත්, DNS ප්‍රචාරණය සඳහා රැඳී සිටින්න සහ **SSL** > **Manage SSL** යටතේ CyberPanel දත්ත පුවරුවේ නැවත ක්‍රියාත්මක කරන්න.

### www Subdomain (www උප-ප්‍රධාන නාමය) {#www-subdomain}

ඔබේ Domain Mapping සැකසුම් වල **Auto-create www subdomain** සක්‍රීය කර ඇත්නම්, ඒකාබද්ධ කිරීම මගින් `www.<domain>` සඳහා virtual host alias එකක් නිර්මාණය කරන අතර, auto-SSL ක්‍රියාත්මක වූ විට apex සහ www යන දෙකම ආවරණය වන සහතිකය නිකුත් කරයි.

### Email Forwarders (ඊමේල් ඉදිරියට යවන්නන්) {#email-forwarders}

[Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) අමතක කර ඇති විට, CyberPanel මගින් පාරිභෝගික විද්‍යුත් තැපැල් ඉදිරිපත් කරන්නන් (customer email forwarders) ද සැපයිය හැකිය. මෙය සම්පූර්ණ mailbox එකක් නිර්මාණය නොකර, එක් ડોමේට් එකකින් ලැබෙන පණිවිඩ වෙනත් Inbox එකකට යොමු කිරීමට ඉඩ සලසයි. `info@customer-domain.test` හෝ `support@customer-domain.test` වැනි අලියා (aliases) සඳහා මෙය ඉතා ප්‍රයෝජනවත් වේ.

පාරිභෝගිකයින් සඳහා ඉදිරිපත් කරන්නන් ක්‍රියාත්මක කිරීමට පෙර:

1. ඉහත CyberPanel constants නිවැරදිව සකසා ඇති බවත් සම්බන්ධතා පරීක්ෂාව සාර්ථක වී ඇති බවත් තහවුරු කර ගන්න.
2. Emails addon සැකසුම් වලදී CyberPanel email provider එක සක්‍රිය කරන්න.
3. ඉදිරිපත් කරන්නෙකු නිර්මාණය කිරීමට පෙර, එම පාරිභෝගික ડોමේට් එක CyberPanel හි දැනටමත් පවතින බව තහවුරු කර ගන්න.
4. නිෂ්පාදන සැලසුම් සඳහා මෙම විශේෂාංගය ලබා දීමට පෙර, පරීක්ෂණ ඉදිරිපත් කිරීමක් (test forwarder) නිර්මාණය කර එය හරහා පණිවිඩයක් යොමු කරන්න.

ඉදිරිපත් කරන්නෙකු නිර්මාණය කිරීමට අපොහොසත් වුවහොත්, මුලින්ම Ultimate Multisite activity logs පරීක්ෂා කරන්න, ඉන්පසු CyberPanel හි මූලාශ්‍ර ડોමේට් එක පවතින බවත් API user සතුව email-management අවසරයන් ඇති බවත් තහවුරු කරන්න.

## සැකසුම් විස්තරය (Configuration Reference) {#configuration-reference}

| Constant | අවශ්‍යද | පෙරනිමියි | විස්තරය |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | ඔව් | — | ඔබේ CyberPanel ආයතනයට පෝට් එක ඇතුළුව සම්පූර්ණ URL (උදා: `https://cp.example.com:8090`) |
| `WU_CYBERPANEL_USERNAME` | ඔව් | — | CyberPanel පරිපාලක නාමය (admin username) |
| `WU_CYBERPANEL_PASSWORD` | ඔව් | — | CyberPanel පරිපාලක මුරපදය (admin password) |
| `WU_CYBERPANEL_PACKAGE` | ඔව් | `Default` | නව virtual hosts සඳහා පවරන CyberPanel hosting package එක |
| `WU_CYBERPANEL_AUTO_SSL` | නැත | `true` | ડોමේන් නිර්මාණය කිරීමෙන් පසු Let's Encrypt SSL සහතිකයක් නිකුත් කරන්න |
| `WU_CYBERPANEL_PHP_VERSION` | නැත | `PHP 8.2` | නව virtual hosts සඳහා PHP අනුවාදය (CyberPanel හි ස්ථාපනය කර ඇති අනුවාදයට ගැලපිය යුතුය) |
| `WU_CYBERPANEL_EMAIL` | නැත | — | SSL සහතිකයක් ලියාපදිංචි කිරීම සඳහා සම්බන්ධතා විද්‍යුත් තැපෑල |

## වැදගත් සටහන් (Important Notes) {#important-notes}

- CyberPanel API එක සෙෂන් මත පදනම් වූ ටෝකන් (token) අනුභවයක් භාවිතා කරයි. මෙම integration එක මගින් සෑම API ඇමතුමක් සඳහාම ටෝකන් ස්වයංක්‍රීයව ලබා ගනී.
- ඔබේ CyberPanel පරිපාලක ගිණුමට වෙබ් අඩවි නිර්මාණය කිරීමට සහ මකා දැමීමට අවසර තිබිය යුතුය.
- CyberPanel පෙරනිමියෙන් `8090` වෝර්ඩ් එකේ (port) ක්‍රියාත්මක වේ. ඔබගේ සේවාදායකයේ firewall එකක් භාවිතා කරන්නේ නම්, මෙම වෝර්ඩ් එක WordPress application server වෙතින් ප්‍රවේශ විය හැකි බව තහවුරු කරන්න.
- මෙම integration එක DNS වාර්තා කළමනාකරණය නොකරයි. Ultimate Multisite හි එම ડોමේන් මූලිකව සිතියම්ගත කිරීමට පෙර ඔබේ ડોමේන් DNS ලිපිනය ඔබගේ සේවාදායකයේ IP ලිපිනයට යොමු කළ යුතුය.
- ඔබට OpenLiteSpeed (OLS) භාවිතා කරන්නේ නම්, virtual host වෙනස් කිරීමෙන් පසු ස්වයංක්‍රීයව සාමකාමී නැවත ආරම්භයක් (graceful restart) ක්‍රියාත්මක වේ. අතින් මැදිහත්වීමක් අවශ්‍ය නොවේ.

## ගැටළු නිරාකරණය (Troubleshooting) {#troubleshooting}

### API සම්බන්ධතාව ප්‍රතික්ෂේප කිරීම (API Connection Refused) {#api-connection-refused}

- ඔබේ සේවාදායකයේ firewall එකේ `8090` වෝර්ඩ් එක විවෘත කර ඇත්දැයි පරීක්ෂා කරන්න.
- `WU_CYBERPANEL_HOST` අගතිය නිවැරදි ප්‍රොටෝකෝලය (`https://`) සහ වෝර්ඩ් එක ඇතුළත් බව තහවුරු කරන්න.
- ඔබේ CyberPanel SSL සහතිකයේ වලංගුභාවය පරීක්ෂා කරන්න; ස්වයං-අත්සන් කරන ලද (self-signed) සහතික නිසා TLS සත්‍යාපන අසාර්ථක විය හැකිය. විශ්වාසදායක පුද්ගලික ජාල පරිසරයන් තුළ පමණක් `WU_CYBERPANEL_VERIFY_SSL` අගය `false` ලෙස සකසන්න.

###認証 දෝෂ (Authentication Errors)

- CyberPanel වෙත කෙලින්ම ලොග් වී ඔබේ `WU_CYBERPANEL_USERNAME` සහ `WU_CYBERPANEL_PASSWORD` නිවැරදි දැයි තහවුරු කරන්න.
- නැවත නැවත අසාර්ථක පිවිසුම් උත්සාහයන් කිරීමෙන් පසු CyberPanel ගිණුම් අගුළු දමයි. අගුළු වැටීම් සිදුවන්නේ නම්, CyberPanel හි **Security** > **Brute Force Monitor** පරීක්ෂා කරන්න.

### ડોමේන් නිර්මාණය නොවීම (Domain Not Created) {#authentication-errors}

- API දෝෂ පණිවිඩ සඳහා Ultimate Multisite ක්‍රියාකාරකම් ලොගය (**Ultimate Multisite** > **Activity Logs**) පරීක්ෂා කරන්න.
- `WU_CYBERPANEL_PACKAGE` තුළ අර්ථ දක්වා ඇති පැකේජය CyberPanel හි (`Packages` > `List Packages`) පවතින බව තහවුරු කරන්න.
- ડોමේනය දැනටමත් CyberPanel හි වෙබ් අඩවියක් ලෙස ලියාපදිංචි කර නොමැති බවට වග බලා ගන්න — ද්විත්ව වෙබ් අඩවියක් නිර්මාණය කිරීමෙන් දෝෂයක් ලැබේ.

### SSL සහතිකයක් නිකුත් නොවීම (SSL Certificate Not Issued) {#domain-not-created}

DNS සම්පූර්ණයෙන් ව්‍යාප්ත වී ඇත්දැයි තහවුරු කරන්න: `dig +short your-domain.com` මගින් ඔබේ සේවාදායකයේ IP ලිපිනය ලබා දිය යුතුය.
Let's Encrypt විසින් වේග සීමාවන් (rate limits) පනවනු ලැබේ. ඔබ මෑතකදී එකම ડોමේනය සඳහා සහතිකපත් කිහිපයක් නිකුත් කර ඇත්නම්, නැවත උත්සාහ කිරීමට පෙර රැඳී සිටින්න.
සහතිකපත් නිකුත් කිරීමේ අසාර්ථකත්වයන් පිළිබඳ විස්තර සඳහා **Logs** > **Error Logs** යටතේ CyberPanel හි SSL ලොග් පරීක්ෂා කරන්න.
විකල්පයක් ලෙස, ඔබට CyberPanel වෙතින් SSL අතින්ම නිකුත් කළ හැකිය: **SSL** > **Manage SSL** > ડોමේනය තෝරන්න > **Issue SSL**.

## සබැඳි (References) {#ssl-certificate-not-issued}

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
