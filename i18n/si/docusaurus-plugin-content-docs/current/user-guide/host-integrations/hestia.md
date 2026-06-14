---
title: Hestia Control Panel ඒකාබද්ධ කිරීම
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Hestia Control Panel එක සමඟ සම්බන්ධ කිරීම

මෙම මාර්ගෝපදේශය මගින් Ultimate Multisite Hestia integration එක සකස් කරන්නේ කෙසේද යන්න පැහැදිලි කරයි. එවිට ඔබේ ජාලයේ ඇති mapped domains (සිතියම් කරන ලද වෙබ් ડોමේන්) ස්වයංක්‍රීයව Hestia හි Web Domain Aliases ලෙස එකතු කිරීම (සහ ඉවත් කිරීම) සිදු වේ.

- Hestia CLI විමර්ශනය: v-add-web-domain-alias / v-delete-web-domain-alias
- නිල REST API ලේඛන: https://hestiacp.com/docs/server-administration/rest-api.html

## එය කරන්නේ කුමක්ද
- Ultimate Multisite හිදී යම් ડોමെയ്කට map කළ විට, integration එක Hestia API වෙත ඇමතුමක් ලබා දී පහත දේ ක්‍රියාත්මක කරයි:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- ડોමේන් mapping එක ඉවත් කරන විට, එය මෙය ක්‍රියාත්මක කරයි:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Domain Mapping settings හි ඇති "Auto-create www subdomain" සැකසුම අනුව, අවශ්‍ය නම් `www.` alias එක අතින් එකතු කිරීම හෝ ඉවත් කිරීම සිදු කරයි.

## පූර්ව අවශ්‍යතා
- ඔබේ WordPress ස්ථාපනයට දැනටමත් pointing කර ඇති පවතින Hestia Web Domain එකක් තිබිය යුතුය. integration එක මගින් මෙම ප්‍රධාන ડોමේන්ට aliases සම්බන්ධ කරයි.
- Hestia API ප්‍රවේශය සක්‍රීය විය යුතුය. ඔබට මුරපදයක් හෝ API hash/token එකක් භාවිතා කර認証 (authenticate) කළ හැකිය.

API ප්‍රවේශය සහ 認証 විස්තර සඳහා Hestia හි REST API ලේඛන බලන්න:
https://hestiacp.com/docs/server-administration/rest-api.html

## සැකසීම (Wizard → Integrations → Hestia)
පහත අගයන් ලබා දෙන්න:

`WU_HESTIA_API_URL` (අවශ්‍යයි)
- මූලික API ඇන්ඩ්පොයින්ට් එක, සාමාන්‍යයෙන් `https://your-hestia-host:8083/api/`.

`WU_HESTIA_API_USER` (අවශ්‍යයි)
- API විධාන සඳහා Hestia පරිශීලකයා (බොහෝ විට `admin`).

`WU_HESTIA_API_PASSWORD` හෝ `WU_HESTIA_API_HASH` (එකක්වත් තෝරන්න)
- සත්‍යාපන ක්‍රමයක් තෝරන්න: මුරපදය හෝ API hash/token.

`WU_HESTIA_ACCOUNT` (අවශ්‍යයි)
- Hestia හි Web Domain එකේ ගිණුම (හිමිකරු); මෙය CLI සඳහා පළමු ආකෘතියයි.

`WU_HESTIA_WEB_DOMAIN` (අවශ්‍යයි)
- ඔබේ WordPress එක සේවය කරන පවතින Hestia Web Domain එක (ඇලියස් මෙතැනට සම්බන්ධ කරනු ලැබේ).

`WU_HESTIA_RESTART` (විකල්ප; පෙරනිමිය `yes`)
- ඇලියස් වෙනස් කිරීමෙන් පසු සේවා නැවත ආරම්භ කළ යුතුද/Reload කළ යුතුද යන්න.

ඔබට මෙම constant ගොනු කර ඇති ආකාරය අනුව `wp-config.php` තුළට ඇතුළත් කිරීමට හෝ ඒවා අතින් නිර්වචනය කිරීමට හැකිය.

## සැකසුම තහවුරු කිරීම
- මෘදුකාංගයේ "Testing" පියවරේදී, ප්ලගිනය API හරහා `v-list-web-domains <WU_HESTIA_ACCOUNT> json` ලෙස ඇමතයි. සාර්ථක ප්‍රතිචාරයක් සම්බන්ධතාව සහ සත්‍යාපනය තහවුරු කරයි.
- Domain එකක් මූලික කර ගැනීමෙන් පසු, Hestia හි පරීක්ෂා කරන්න: Web > මූලික domain එක > Aliases. නව ඇලියස් එක එකතු වී ඇති බව ඔබ දැකගත යුතුය.

## සටහන් සහ උපදෙස්
- `WU_HESTIA_WEB_DOMAIN` දැනටමත් පවතින අතර එය `WU_HESTIA_ACCOUNT` හි අයිතිය ඇති බව තහවුරු කරන්න.
- SSL අවශ්‍ය නම්, සහතික කළමනාකරණය Hestia තුළ සිදු කරන්න. මේ සම්බන්ධයෙන් දැනට ඇලියස් පමණක් හැසිරවීම මෙයින් සිදු කරයි.
- ඔබේ Domain Mapping "www subdomain" සැකසුමට අනුව ප්ලගිනය `www.<domain>` එකත් එක් කිරීමට/ඉවත් කිරීමට ඉඩ ඇත.

## උදාහරණ API ඇමතීම (cURL)
පහත යනු සංකල්පීය උදාහරණයකි (ඔබේ පරිසරයට අනුව වෙනස් කරන්න). නිවැරදිพරාමීටර් සඳහා නිල ලේඛන බලන්න.

POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (or &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias to add)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes

මකා දැමීමට (delete) `cmd=v-delete-web-domain-alias` සහ එකම ආර්ග (args) භාවිතා කරන්න.

## ගැටළු විසඳීම (Troubleshooting)
- API වෙතින් HTTP දෝෂයක්: `WU_HESTIA_API_URL` නිවැරදිව ක්‍රියාත්මක වන බවත් එය `/api` වලින් අවසන් වන බවත් තහවුරු කර ගන්න.
- අනුයුක්ත කිරීමේ (Auth) දෝෂ: `WU_HESTIA_API_USER` සහ `WU_HESTIA_API_PASSWORD` හෝ `WU_HESTIA_API_HASH` වලින් එකක් නිවැරදි බව තහවුරු කරන්න.
- ලොග් වල "Missing account/base domain" (ගිණුම/පදනම් ડોමේන් නොමැතිකම): Hestia තුළ `WU_HESTIA_ACCOUNT` සහ `WU_HESTIA_WEB_DOMAIN` නිවැරදිව සකසා ඇති බව තහවුරු කරන්න.

## යොමු (References)
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Reference (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
