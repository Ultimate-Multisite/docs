---
title: Hestia Control Panel ውህደት
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# የHestia Control Panel ውህደት

ይህ መመሪያ በUltimate Multisite ውስጥ ካሉ የዶሜን ኔትወርክ (mapped domains) ዶሜኖች በHestia ውስጥ እንደ Web Domain Aliases በራስ-ሰር እንዴት እንደሚጨመሩ (እና እንደሚወገዱ) የHestia ውህደትን (integration) እንዴት ማዋቀር እንደሚቻል ያብራራል።

- የHestia CLI ማጣቀሻ፡ `v-add-web-domain-alias` / `v-delete-web-domain-alias`
- ኦፊሴላዊ REST API ሰነድ፡ https://hestiacp.com/docs/server-administration/rest-api.html

## ምን ያደርጋል
- በUltimate Multisite ውስጥ አንድ ዶሜን ሲመዘገብ፣ ውህደቱ የሚከተለውን ለማስኬድ የHestia APIን ይጠራዋል፦
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- የዶሜን መመዝገቢያ ሲወገድ ደግሞ የሚከተለውን ያከናውናል፦
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- በተጨማሪም፣ በDomain Mapping settings ውስጥ ባለው “Auto-create www subdomain” ቅንብር ላይ በመመስረት `www.` aliasን በቅንጅት ሊጨምር ወይም ሊያስወግድ ይችላል።

## ቅድመ ሁኔታዎች
- ቀድሞውንም ወደ WordPress installationዎ የሚያመላክት የHestia Web Domain መኖር አለበት። ውህደቱ aliases የሚለጥፈው በዚህ መሰረታዊ ዶሜን ላይ ነው።
- የHestia API መዳረሻ መብ开ል አለበት። በይለፍ ቃል (password) ወይም በAPI hash/token ሊመዘገቡ ይችላሉ።

የAPI መዳረሻን እና የማረጋገጫ ዝርዝሮችን ለማወቅ የHestia REST API ሰነዶችን ይመልከቱ፦
https://hestiacp.com/docs/server-administration/rest-api.html

## ማዋቀር (Wizard → Integrations → Hestia)
የሚከተሉትን እሴቶች ያቅርቡ፦

- `WU_HESTIA_API_URL` (አስፈላጊ)
  - መሰረታዊ የAPI endpoint፣ በአብዛኛው `https://your-hestia-host:8083/api/` ነው።
- `WU_HESTIA_API_USER` (አስፈላጊ)
  - ለAPI ትዕዛዞች የሚያገለግለው የHestia ተጠቃሚ (ብዙውን ጊዜ `admin`)።
- `WU_HESTIA_API_PASSWORD` ወይም `WU_HESTIA_API_HASH` (ቢያንስ አንዱ)
  - የአንድ የማረጋገጫ ዘዴ ይምረጡ፦ የይለፍ ቃል ወይስ የAPI hash/token።
- `WU_HESTIA_ACCOUNT` (አስፈላጊ)
  - በHestia ውስጥ የWeb Domain ባለቤት (owner) አካውንት፤ ይህ ለCLI የመጀመሪያው መረጃ ነው።
- `WU_HESTIA_WEB_DOMAIN` (አስፈላጊ)
  - WordPressዎን የሚያገለግለው ቀድሞ የነበረው የHestia Web Domain (aliases እዚህ ይለጠዋል)።
- `WU_HESTIA_RESTART` (አማራጭ፤ መነሻው `yes`)
  - ከaliases ለውጦች በኋላ አገልግሎቶችን እንደገና ማስጀመር/ማዘመን መፈለግ።

እነዚህን ቋሚ እሴቶች (constants) ወደ `wp-config.php` እንዲያስገቡ በwizard ውስጥ እንዲያደርጉት ወይም በእጅ እንዲገልጹት ይችላሉ።

## Setupን ማረጋገጥ
- በwizard “Testing” ደረጃ፣ plugin በAPI በኩል `v-list-web-domains <WU_HESTIA_ACCOUNT> json` ይጠራል። ስኬታማ ምላሽ ግንኙነትን እና ማረጋገጫን ያረጋግጣል።
- ዶሜን ካስመዘገቡ በኋላ፣ በHestia ውስጥ ይፈትሹ፦ Web > መሰረታዊው ዶሜን > Aliases። አዲሱ alias መጨመሩን ማየት አለብዎት።

## ማስታወሻዎች እና ምክሮች
- `WU_HESTIA_WEB_DOMAIN` ቀድሞ መኖሩን እና በ`WU_HESTIA_ACCOUNT` ባለቤት መሆኑን ያረጋግጡ።
- SSL የሚያስፈልግ ከሆነ፣ ሰርተፊኬቶችን በHestia ውስጥ ያስተዳድሩ። ይህ ውህደት በአሁኑ ጊዜ aliasesን ብቻ ነው የሚያስተናግደው።
- pluginዎ በDomain Mapping “www subdomain” ቅንብርዎ ላይ በመመስረት `www.<domain>` ሊጨምር ወይም ሊያስወግድ ይችላል።

## የAPI ጥሪ ምሳሌ (cURL)
ከዚህ በታች ያለው ምሳሌ (በየአካባቢዎ እንዲስተካከል) ነው። ትክክለኛ መለኪያዎች (parameters) ለማግኘት ኦፊሴላዊውን ሰነድ ይመልከቱ።

```
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
```

ለመሰረዝ (delete) ደግሞ `cmd=v-delete-web-domain-alias` እና ተመሳሳይ arguments ይጠቀሙ።

## ችግር መፍታት
- ከAPI የመጣ HTTP ስህተት፡ `WU_HESTIA_API_URL` መድረስ መቻሉን እና `/api` መያዝ መቻሉን ያረጋግጡ።
- የማረጋገጫ ስህተቶች (Auth errors)፡ `WU_HESTIA_API_USER` እና ከ`WU_HESTIA_API_PASSWORD` ወይም `WU_HESTIA_API_HASH` አንዱ መሆኑን ያረጋግጡ።
- በሎጎች ውስጥ “Missing account/base domain”፡ `WU_HESTIA_ACCOUNT` እና `WU_HESTIA_WEB_DOMAIN` በHestia ውስጥ ተቀምጠው እና ትክክል መሆናቸውን ያረጋግጡ።

## ማጣቀሻዎች
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Reference (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
