---
title: Cloudways ඒකාබද්ධ කිරීම
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Cloudways ඒකාබද්ධ කිරීම (Integration)

## දළ විශ්ලේෂණය (Overview) {#overview}
Cloudways කියන්නේ DigitalOcean, AWS, Google Cloud වගේ විවිධ cloud providers වල WordPress වෙබ් අඩවි deploy කරන්න පුළුවන් කළමනාකරණය කරන ලද hosting platform එකක්. මේ integration එක මගින් Ultimate Multisite සහ Cloudways අතර automatic domain syncing සහ SSL certificate management පහසු කරයි.

## විශේෂාංග (Features) {#features}
- ස්වයංක්‍රීය domain syncing කිරීම
- SSL certificate කළමනාකරණය
- අමතර domains සඳහා සහාය වීම
- SSL certificates සඳහා DNS validation

## අවශ්‍යතා (Requirements) {#requirements}
ඔබේ `wp-config.php` ගොනුවේ පහත constants නිර්වචනය කළ යුතුයි:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

විකල්පයක් ලෙස, ඔබට පහත දේ ද නිර්වචනය කළ හැකිය:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## සැකසීමේ උපදෙස් (Setup Instructions) {#setup-instructions}

### 1. ඔබේ Cloudways API Credentials ලබා ගැනීම {#1-get-your-cloudways-api-credentials}

1. ඔබේ Cloudways dashboard එකට ලොග් වෙන්න.
2. "Account" > "API Keys" වෙත යන්න.
3. ඔබට දැනටමත් API key එකක් නැත්නම්, එය ජනනය කරන්න (Generate).
4. ඔබේ email සහ API key එක පිටපත් කරන්න (Copy).

### 2. ඔබේ Server සහ Application IDs ලබා ගැනීම {#2-get-your-server-and-application-ids}

1. ඔබේ Cloudways dashboard එකේ "Servers" වෙත යන්න.
2. ඔබේ WordPress multisite ස්ථාපනය කර ඇති server එක තෝරන්න.
3. Server ID එක URL එකේ පෙනේ: `https://platform.cloudways.com/server/{SERVER_ID}`
4. "Applications" වෙත ගොස් ඔබේ WordPress application එක තෝරන්න.
5. App ID එක URL එකේ පෙනේ: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. wp-config.php වල Constants එකතු කිරීම {#3-add-constants-to-wp-configphp}

පහත constants ඔබේ `wp-config.php` ගොනුවේ එක් කරන්න:

```php
define('WU_CLOUDWAYS_EMAIL', 'ඔබේ_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'ඔබේ_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'ඔබේ_server_id');
define('WU_CLOUDWAYS_APP_ID', 'ඔබේ_app_id');
```

ඔබට අමතර **බාහිර** ડોමේන් (ඔබේ මල්ටිසයිට් ජාලයෙන් පිටත) තිබේ නම්, ඒවා සැමවිටම Cloudways aliases ලැයිස්තුවේ තබා ගත යුතු නම්:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning ඔබේම ජාලයේ වයිල්ඩ්කාඩ් (wildcard) ඇතුළත් නොකරන්න
`WU_CLOUDWAYS_EXTRA_DOMAINS` වෙත `*.your-network.com` (හෝ ඔබගේ ජාලයේ ඕනෑම උප-โดเมන් රටාවක්) එකක් එක් නොකරන්න. එසේ කිරීමෙන් තනි කුලීතයන් සඳහා SSL සහතික නිකුත් කිරීම වැළැක්වීම සිදු වේ.
:::

### 4. ඒකාබද්ධ කිරීම සක්‍රීය කිරීම (Enable the Integration) {#4-enable-the-integration}

1. ඔබේ WordPress admin තුළ, Ultimate Multisite > Settings වෙත යන්න.
2. "Domain Mapping" ටැබයට යන්න.
3. "Host Integrations" වෙත පහළට අනුචලනය කරන්න.
4. Cloudways integration සක්‍රීය කරන්න.
5. "Save Changes" ක්ලික් කරන්න.

## එය ක්‍රියා කරන ආකාරය (How It Works) {#how-it-works}

### ડોමේන් සමමුහුර්ත කිරීම (Domain Syncing) {#domain-syncing}

Ultimate Multisite හිදී යම් ડોමെയ്කට මූලිකව සම්බන්ධ කළ විට:

1. ඒකාබද්ධතාව (integration) දැනට සිතා ඇති සියලුම මූලිකව සම්බන්ධ කරන ලද ડોමේන් ලබා ගනී.
2. එය නව ડોමේන්තය ලැයිස්තුවේ එකතු කරයි (අදාළ නම් www අනුවාදයක් සමඟ).
3. එය සම්පූර්ණ ලැයිස්තුව API හරහා Cloudways වෙත යවයි.
4. Cloudways විසින් ඔබේ යෙදුම සඳහා වන ડોමේන් aliases යාවත්කාලීන කරයි.

සටහන: Cloudways API සෑම විටම තනි ડોමේන් එකක් එක් කිරීම හෝ ඉවත් කිරීම පමණක් නොව, සම්පූර්ණ ලැයිස්තුව යැවීම අවශ්‍ය වේ.

### SSL සහතික කළමනාකරණය (SSL Certificate Management) {#ssl-certificate-management}

ડોමේන් සමමුහුර්ත කිරීමෙන් පසු:

1. ඒකාබද්ධතාව මගින් ඔබේ සේවාදායකයට නිවැරදි DNS වාර්තා සහිත ડોමේන් මොනවාදැයි පරීක්ෂා කරයි.
2. එම ડોමේන් සඳහා Let's Encrypt SSL සහතික ස්ථාපනය කිරීමට Cloudways වෙත ඉල්ලීමක් යවයි.
3. SSL සහතික නිකුත් කිරීම සහ ස්ථාපනය කිරීම Cloudways විසින් සිදු කරයි.

සම්බන්ධ කිරීම සෑම විටම Cloudways වෙතින් **standard** (wildcard නොවන) Let's Encrypt සහතිකපත් ඉල්ලයි. `WU_CLOUDWAYS_EXTRA_DOMAINS` හි wildcard රටාවක් සැපයූ විට, SSL ඉල්ලීමට පෙර මූලික `*.` කොටස ඉවත් කරනු ලැබේ — මෙම සම්බන්ධතාව (integration) මගින් wildcard එකක් කිසිවිටෙකත් ස්ථාපනය නොකරයි. Cloudways හි wildcard සහතිකයක් භාවිතා කිරීමට ඔබට එය අතින් ස්ථාපනය කළ යුතු වුවද, එසේ කිරීමෙන් සිතියම් කරන ලද කස්ටම් ડોමේන් සඳහා Let's Encrypt අනුවාදයන් අවහිර වේ (පහත ගැටලුව බලන්න).

## අමතර ડોමේන් (Extra Domains) {#extra-domains}

`WU_CLOUDWAYS_EXTRA_DOMAINS` constant මගින් Cloudways යෙදුමේ අලියා ලැයිස්තුවේ සැමවිටම තබා ගත යුතු අමතර **බාහිර** ડોමේන් සඳහන් කිරීමට ඔබට ඉඩ සලසයි. පහත දේ සඳහා එය භාවිතා කරන්න:

- Ultimate Multisite විසින් කළමනාකරණය නොකරන බාහිර ડોමේන් (උදාහරණයක් ලෙස, එකම Cloudways යෙදුමක් බෙදා ගන්නා වෙනම අලෙවක වෙළඳපොළක්).
- යෙදුමේ අලියා ලැයිස්තුවේ තබා ගැනීමට ඔබ කැමති Parked හෝ staging ડોමේන්.

ඔබේම ජාලයේ උප-ડોමේ wildcard සඳහා මෙම constant භාවිතා නොකරන්න (උදාහරණයක් ලෙස, `*.your-network.com`). පහත wildcard SSL ගැටලුව බලන්න.

## වැදගත් — Wildcard SSL ගැටලුව {#important--wildcard-ssl-pitfall}

Cloudways හි පෙරනිමි සැකසුම් අනුගමනය කිරීමේදී පොදු වැරැද්දක් නම් `WU_CLOUDWAYS_EXTRA_DOMAINS` වෙත `*.your-network.com` වැනි wildcard එකක් එකතු කිරීම හෝ එම wildcard සඳහා Cloudways මගින් අතින් Wildcard SSL සහතිකයක් ස්ථාපනය කිරීමයි.

**ඔබ මෙය කළහොත්, Ultimate Multisite විසින් සිතියම් කරන ලද තනි කුලී (per-tenant) කස්ටම් ડોමේන් සඳහා Let's Encrypt සහතිකපත් නිකුත් කිරීමට Cloudways ප්‍රතික්ෂේප කරනු ඇත.** Cloudways යෙදුම මත ක්‍රියාකාරී SSL සහතිකය සෑම විටම ප්‍රතිස්ථාපනය කරන අතර, යෙදුම මත පවතින පෙර පැවති wildcard සහතිකයක් එම සම්බන්ධතාව විශ්වාස කරන Let's Encrypt නිකුත් කිරීම අවහිර කරයි.

### Ultimate Multisite ජාල සඳහා නිර්දේශිත Cloudways SSL සැකසුම {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

Cloudways යෙදුමේ **SSL Certificate** ටැබ් එකේ, `your-network.com` සහ `www.your-network.com` සඳහා පමණක් ආවරණය වන **standard Let's Encrypt certificate** එකක් ස්ථාපනය කරන්න — වයිල්ඩ් කාඩ් (wildcard) එකක් නොවේ.
2. `*.your-network.com` (හෝ ඔබේ ජාලයේ වෙනත් උප-โดเมන් රටාවක්) `WU_CLOUDWAYS_EXTRA_DOMAINS` තුළ තැබීම **නොකරන්න**. එම නියත අගය **බාහිර** ડોමේන් සඳහා පමණක් වෙන් කරන්න.
3. සබ්සයිට් (subsites) විසඳීමට, **DNS** මට්ටමින් පමණි (ඔබේ Cloudways සර්වර් IP වෙත යොමු වන `*.your-network.com` සඳහා `A` record එකක්), තනි පුද්ගල මැප් කරන ලද කස්ටම් ડોමේන් සඳහා SSL ස්වයංක්‍රීයව Let's Encrypt හරහා නිකුත් කරනු ලැබේ.

ඔබේ කුලීකරුවන්ගේ කස්ටම් ડોමේන් SSL නොමැතිව අතීතයේම තිබේ නම්, Cloudways SSL ටැබ් එක පරීක්ෂා කරන්න. එහි වයිල්ඩ් කාඩ් සහතිකයක් ක්‍රියාත්මක නම්, එය ඉවත් කර, ප්‍රධාන ජාල ડોමේනය සඳහා standard Let's Encrypt සහතිකය නැවත නිකුත් කරන්න, සහ `WU_CLOUDWAYS_EXTRA_DOMAINS` හි ඇති ඕනෑම වයිල්ඩ් කාඩ් ඇතුළත් කිරීම් ඉවත් කරන්න. ඉන්පසු ડોමේන් මැප් කිරීම නැවත ක්‍රියාත්මක කරන්න (හෝ ඊළඟ එක සඳහා රැඳී සිටින්න) සහ ඒකාබද්ධතාවය නැවත එක් එක් ડોමේනය සඳහා සහතික නිකුත් කිරීමට පටන් ගනු ඇත.

## ගැටළු විසඳීම (Troubleshooting) {#troubleshooting}

### API සම්බන්ධතා ගැටළු {#api-connection-issues}
- ඔබේ විද්‍යුත් තැපෑල සහ API key නිවැරදි දැයි තහවුරු කරන්න.
- ඔබේ සර්වර් සහ application IDs නිවැරදි දැයි පරීක්ෂා කරන්න.
- ඔබේ Cloudways ගිණුමට අවශ්‍ය අවසරයන් තිබේදැයි තහවුරු කරන්න.

### SSL සහතික ප්‍රශ්න {#ssl-certificate-issues}
- SSL සහතික නිකුත් කිරීමට පෙර ඔබේ සේවාදායකයට නිවැරදි DNS වාර්තා (DNS records) යොමු වී තිබිය යුතු බව Cloudways අවශ්‍ය කරයි.
- මෙම ඒකාබද්ධ කිරීම (integration) SSL සහතික ඉල්ලීමට පෙර DNS වාර්තා පරීක්ෂා කරයි.
- SSL සහතික නිකුත් නොකරන්නේ නම්, ඔබේ වෙබ් අඩවි නිවැරදිව ඔබේ සේවාදායකයේ IP ලිපිනයට යොමු වී තිබේදැයි පරීක්ෂා කරන්න.
- **SSL නොමැති තනි කුලක (Per-tenant) කස්ටම් ડોමේන් (custom domains) අත රැඳී තිබේද?** Cloudways යෙදුමේ SSL Certificate ටැබය පරීක්ෂා කරන්න. වයිල්ඩ් කාඩ් එකක් (wildcard certificate - අතින් ස්ථාපනය කළ හෝ `*.your-network.com` ආවරණය වන) ක්‍රියාත්මක නම්, Cloudways විසින් තනිව මූලිකව සිතන කස්ටම් ડોමේන් සඳහා Let's Encrypt සහතික නිකුත් නොකරනු ඇත. එය ප්‍රධාන ජාල ડોමේ (`your-network.com`, `www.your-network.com`) පමණක් ආවරණය වන සම්මත Let's Encrypt සහතිකයක් සමඟ ප්‍රතිස්ථාපනය කරන්න, `WU_CLOUDWAYS_EXTRA_DOMAINS` හි ඇති ඕනෑම වයිල්ඩ් කාඩ් ඇතුළත් කිරීම් ඉවත් කරන්න. ඉන්පසු ડોමේ මූලික යොමු කිරීම නැවත ක්‍රියාත්මක කරන්න (හෝ ඊළඟ එකක් සඳහා රැඳී සිටින්න) එවිට ඒකාබද්ධ කිරීමෙන් එක් එක් ડોමේ සහතික ඉල්ලනු ඇත.

### ડોමේ එකතු කර නොමැත {#domain-not-added}
- ඕනෑම දෝෂ පණිවිඩ තිබේදැයි Ultimate Multisite logs පරීක්ෂා කරන්න.
- Cloudways වෙත දැනටමත් එම ડોමේ එකතු වී ඇත්දැයි තහවුරු කරන්න.
- ඔබ එක් කරන ડોමේ ගණන ඔබේ Cloudways සැලැස්ම (plan) විසින් සහාය දෙන බවට වග බලා ගන්න.
