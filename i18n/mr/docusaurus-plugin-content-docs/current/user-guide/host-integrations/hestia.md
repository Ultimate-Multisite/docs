---
title: Hestia Control Panel एकत्रीकरण
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Hestia Control Panel Integration

हे मार्गदर्शक Ultimate Multisite Hestia integration कसे configure करायचे ते समजावून सांगते, जेणेकरून तुमच्या network मध्ये map केलेले domains आपोआप Hestia मध्ये Web Domain Aliases म्हणून जोडले (आणि काढले) जातील.

- Hestia CLI संदर्भ: v-add-web-domain-alias / v-delete-web-domain-alias
- अधिकृत REST API दस्तऐवज: https://hestiacp.com/docs/server-administration/rest-api.html

## हे काय करते
- Ultimate Multisite मध्ये domain map केल्यावर, integration Hestia API ला call करून हे चालवते:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Domain mapping काढून टाकल्यावर, हे चालवते:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Domain Mapping settings मधील तुमच्या "Auto-create www subdomain" सेटिंगनुसार `www.` alias जोडणे/काढणे हे ऐच्छिक आहे.

## पूर्वअटी
- एक अस्तित्वात असलेला Hestia Web Domain जो आधीच तुमच्या WordPress installation कडे point करतो. Integration या base domain ला aliases जोडेल.
- Hestia API access सक्षम असणे आवश्यक आहे. तुम्ही password किंवा API hash/token वापरून authenticate करू शकता.

API access सक्षम करणे आणि authentication तपशीलांसाठी Hestia चे REST API docs पहा:
https://hestiacp.com/docs/server-administration/rest-api.html

## Configuration (Wizard → Integrations → Hestia)
खालील मूल्ये द्या:

- `WU_HESTIA_API_URL` (आवश्यक)
  - Base API endpoint, सामान्यतः `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (आवश्यक)
  - API commands साठी वापरला जाणारा Hestia user (बहुतेक वेळा `admin`).
- `WU_HESTIA_API_PASSWORD` किंवा `WU_HESTIA_API_HASH` (किमान एक)
  - एक authentication पद्धत निवडा: password किंवा API hash/token.
- `WU_HESTIA_ACCOUNT` (आवश्यक)
  - Hestia मधील Web Domain चा account (मालक); हा CLI चा पहिला argument आहे.
- `WU_HESTIA_WEB_DOMAIN` (आवश्यक)
  - तुमचे WordPress serve करणारा अस्तित्वात असलेला Hestia Web Domain (aliases येथे जोडले जातील).
- `WU_HESTIA_RESTART` (ऐच्छिक; default `yes`)
  - Alias बदलांनंतर services restart/reload करायचे का.

तुम्ही wizard ला या constants ला `wp-config.php` मध्ये inject करू देऊ शकता, किंवा ते स्वतः manually define करू शकता.

## Setup तपासणे
- Wizard च्या "Testing" step मध्ये, plugin API द्वारे `v-list-web-domains <WU_HESTIA_ACCOUNT> json` call करते. यशस्वी response connectivity आणि authentication ची पुष्टी करतो.
- Domain map केल्यानंतर, Hestia मध्ये तपासा: Web > base domain > Aliases. तुम्हाला नवीन alias जोडलेला दिसला पाहिजे.

## टिपा आणि सूचना
- `WU_HESTIA_WEB_DOMAIN` आधीच अस्तित्वात आहे आणि `WU_HESTIA_ACCOUNT` चे ownership आहे याची खात्री करा.
- SSL आवश्यक असल्यास, certificates Hestia मध्ये manage करा. हे integration सध्या फक्त aliases हाताळते.
- तुमच्या Domain Mapping "www subdomain" सेटिंगनुसार plugin `www.<domain>` देखील जोडू/काढू शकते.

## Example API Call (cURL)
खाली एक संकल्पनात्मक उदाहरण आहे (तुमच्या environment नुसार adjust करा). अचूक parameters साठी अधिकृत doc पहा.

```
POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (or &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (जोडायचा alias)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

Delete साठी, `cmd=v-delete-web-domain-alias` आणि तेच args वापरा.

## समस्यानिवारण
- API वरून HTTP error: `WU_HESTIA_API_URL` reachable आहे आणि त्यात `/api` आहे याची खात्री करा.
- Auth errors: `WU_HESTIA_API_USER` आणि `WU_HESTIA_API_PASSWORD` किंवा `WU_HESTIA_API_HASH` यापैकी एक बरोबर आहे याची पुष्टी करा.
- Logs मध्ये "Missing account/base domain": `WU_HESTIA_ACCOUNT` आणि `WU_HESTIA_WEB_DOMAIN` set आहेत आणि Hestia मध्ये valid आहेत याची खात्री करा.

## संदर्भ
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Reference (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
