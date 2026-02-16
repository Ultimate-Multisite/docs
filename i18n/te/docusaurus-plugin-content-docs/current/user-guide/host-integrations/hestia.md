---
title: Hestia కంట్రోల్ ప్యానెల్ ఇంటిగ్రేషన్
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Hestia Control Panel ఇంటిగ్రేషన్

మీ నెట్‌వర్క్‌లో మ్యాప్ చేసిన డొమైన్‌లు Hestia లో Web Domain Aliases గా స్వయంచాలకంగా జోడించబడేలా (మరియు తొలగించబడేలా) Ultimate Multisite Hestia ఇంటిగ్రేషన్‌ను ఎలా కాన్ఫిగర్ చేయాలో ఈ గైడ్ వివరిస్తుంది.

- Hestia CLI రిఫరెన్స్: v-add-web-domain-alias / v-delete-web-domain-alias
- అధికారిక REST API డాక్యుమెంటేషన్: https://hestiacp.com/docs/server-administration/rest-api.html

## ఇది ఏమి చేస్తుంది
- Ultimate Multisite లో ఒక డొమైన్ మ్యాప్ చేయబడినప్పుడు, ఇంటిగ్రేషన్ Hestia API ని పిలిచి ఈ క్రింది కమాండ్ రన్ చేస్తుంది:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- డొమైన్ మ్యాపింగ్ తొలగించబడినప్పుడు, ఇది రన్ చేస్తుంది:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Domain Mapping సెట్టింగ్స్‌లో మీ "Auto-create www subdomain" సెట్టింగ్ ఆధారంగా `www.` alias ను ఐచ్ఛికంగా జోడిస్తుంది/తొలగిస్తుంది.

## ముందస్తు అవసరాలు
- మీ WordPress ఇన్‌స్టాలేషన్‌కు ఇప్పటికే పాయింట్ చేస్తున్న Hestia Web Domain ఉండాలి. ఈ బేస్ డొమైన్‌కు ఇంటిగ్రేషన్ aliases ను అటాచ్ చేస్తుంది.
- Hestia API యాక్సెస్ ఎనేబుల్ చేయబడి ఉండాలి. మీరు password లేదా API hash/token ఉపయోగించి ఆథెంటికేట్ చేయవచ్చు.

API యాక్సెస్ ఎనేబుల్ చేయడం మరియు ఆథెంటికేషన్ వివరాల కోసం Hestia యొక్క REST API డాక్స్ చూడండి:
https://hestiacp.com/docs/server-administration/rest-api.html

## కాన్ఫిగరేషన్ (Wizard → Integrations → Hestia)
కింది విలువలు అందించండి:

- `WU_HESTIA_API_URL` (తప్పనిసరి)
  - బేస్ API ఎండ్‌పాయింట్, సాధారణంగా `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (తప్పనిసరి)
  - API కమాండ్‌ల కోసం ఉపయోగించే Hestia యూజర్ (తరచుగా `admin`).
- `WU_HESTIA_API_PASSWORD` లేదా `WU_HESTIA_API_HASH` (కనీసం ఒకటి)
  - ఒక ఆథెంటికేషన్ పద్ధతి ఎంచుకోండి: password లేదా API hash/token.
- `WU_HESTIA_ACCOUNT` (తప్పనిసరి)
  - Hestia లో Web Domain యొక్క అకౌంట్ (owner); ఇది CLI కి మొదటి ఆర్గ్యుమెంట్.
- `WU_HESTIA_WEB_DOMAIN` (తప్పనిసరి)
  - మీ WordPress ను సర్వ్ చేస్తున్న ఇప్పటికే ఉన్న Hestia Web Domain (ఇక్కడ aliases అటాచ్ చేయబడతాయి).
- `WU_HESTIA_RESTART` (ఐచ్ఛికం; డిఫాల్ట్ `yes`)
  - alias మార్పుల తర్వాత సర్వీసులను restart/reload చేయాలా వద్దా.

ఈ constants ను `wp-config.php` లో inject చేయడానికి wizard ను అనుమతించవచ్చు, లేదా మాన్యువల్‌గా డిఫైన్ చేయవచ్చు.

## సెటప్ వెరిఫికేషన్
- Wizard "Testing" స్టెప్‌లో, plugin API ద్వారా `v-list-web-domains <WU_HESTIA_ACCOUNT> json` ను కాల్ చేస్తుంది. విజయవంతమైన రెస్పాన్స్ కనెక్టివిటీ మరియు ఆథెంటికేషన్‌ను నిర్ధారిస్తుంది.
- డొమైన్ మ్యాప్ చేసిన తర్వాత, Hestia లో చెక్ చేయండి: Web > బేస్ డొమైన్ > Aliases. కొత్తగా జోడించిన alias కనిపించాలి.

## గమనికలు & చిట్కాలు
- `WU_HESTIA_WEB_DOMAIN` ఇప్పటికే ఉందని మరియు `WU_HESTIA_ACCOUNT` యాజమాన్యంలో ఉందని నిర్ధారించుకోండి.
- SSL అవసరమైతే, Hestia లో certificates ను మేనేజ్ చేయండి. ఈ ఇంటిగ్రేషన్ ప్రస్తుతం aliases ను మాత్రమే హ్యాండిల్ చేస్తుంది.
- మీ Domain Mapping "www subdomain" సెట్టింగ్ ఆధారంగా plugin `www.<domain>` ను కూడా జోడించవచ్చు/తొలగించవచ్చు.

## ఉదాహరణ API కాల్ (cURL)
కింద ఒక కాన్సెప్చువల్ ఉదాహరణ ఉంది (మీ ఎన్విరాన్‌మెంట్‌కు సర్దుబాటు చేయండి). ఖచ్చితమైన పారామీటర్ల కోసం అధికారిక డాక్ చూడండి.

```
POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (లేదా &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (జోడించాల్సిన alias)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

తొలగించడానికి, `cmd=v-delete-web-domain-alias` మరియు అదే args ఉపయోగించండి.

## ట్రబుల్‌షూటింగ్
- API నుండి HTTP ఎర్రర్: `WU_HESTIA_API_URL` చేరుకోగలదా మరియు `/api` కలిగి ఉందా వెరిఫై చేయండి.
- Auth ఎర్రర్లు: `WU_HESTIA_API_USER` మరియు `WU_HESTIA_API_PASSWORD` లేదా `WU_HESTIA_API_HASH` లో ఏదైనా ఒకటి సరిగ్గా ఉందో కన్ఫర్మ్ చేయండి.
- లాగ్స్‌లో "Missing account/base domain": `WU_HESTIA_ACCOUNT` మరియు `WU_HESTIA_WEB_DOMAIN` సెట్ చేయబడి Hestia లో చెల్లుబాటు అవుతున్నాయో నిర్ధారించుకోండి.

## రిఫరెన్సులు
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI రిఫరెన్స్ (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
