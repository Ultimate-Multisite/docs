---
title: Hestia കൺട്രോൾ പാനൽ ഇന്റഗ്രേഷൻ
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Hestia Control Panel ഇന്റഗ്രേഷൻ

നിങ്ങളുടെ നെറ്റ്‌വർക്കിൽ മാപ്പ് ചെയ്ത ഡൊമെയ്‌നുകൾ Hestia-യിൽ Web Domain Aliases ആയി സ്വയമേവ ചേർക്കുകയും (നീക്കം ചെയ്യുകയും) ചെയ്യുന്നതിന് Ultimate Multisite Hestia ഇന്റഗ്രേഷൻ എങ്ങനെ കോൺഫിഗർ ചെയ്യാമെന്ന് ഈ ഗൈഡ് വിശദീകരിക്കുന്നു.

- Hestia CLI റഫറൻസ്: v-add-web-domain-alias / v-delete-web-domain-alias
- ഔദ്യോഗിക REST API ഡോക്യുമെന്റ്: https://hestiacp.com/docs/server-administration/rest-api.html

## ഇത് എന്താണ് ചെയ്യുന്നത്
- Ultimate Multisite-ൽ ഒരു ഡൊമെയ്ൻ മാപ്പ് ചെയ്യുമ്പോൾ, ഇന്റഗ്രേഷൻ Hestia API-യെ വിളിച്ച് ഇത് റൺ ചെയ്യുന്നു:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- ഒരു ഡൊമെയ്ൻ മാപ്പിംഗ് നീക്കം ചെയ്യുമ്പോൾ, ഇത് റൺ ചെയ്യുന്നു:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Domain Mapping സെറ്റിംഗ്സിലെ "Auto-create www subdomain" സെറ്റിംഗ് അനുസരിച്ച് `www.` alias ഓപ്ഷണലായി ചേർക്കുകയോ നീക്കം ചെയ്യുകയോ ചെയ്യുന്നു.

## മുൻവ്യവസ്ഥകൾ
- നിങ്ങളുടെ WordPress ഇൻസ്റ്റാളേഷനിലേക്ക് ഇതിനകം പോയിന്റ് ചെയ്യുന്ന ഒരു നിലവിലുള്ള Hestia Web Domain. ഈ ബേസ് ഡൊമെയ്‌നിലേക്ക് ഇന്റഗ്രേഷൻ aliases അറ്റാച്ച് ചെയ്യും.
- Hestia API ആക്സസ് എനേബിൾ ചെയ്തിരിക്കണം. password അല്ലെങ്കിൽ API hash/token ഉപയോഗിച്ച് നിങ്ങൾക്ക് authenticate ചെയ്യാം.

API ആക്സസ് എനേബിൾ ചെയ്യുന്നതിനും authentication വിശദാംശങ്ങൾക്കും Hestia-യുടെ REST API ഡോക്സ് കാണുക:
https://hestiacp.com/docs/server-administration/rest-api.html

## കോൺഫിഗറേഷൻ (Wizard → Integrations → Hestia)
ഇനിപ്പറയുന്ന മൂല്യങ്ങൾ നൽകുക:

- `WU_HESTIA_API_URL` (നിർബന്ധം)
  - ബേസ് API endpoint, സാധാരണയായി `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (നിർബന്ധം)
  - API കമാൻഡുകൾക്കായി ഉപയോഗിക്കുന്ന Hestia യൂസർ (മിക്കപ്പോഴും `admin`).
- `WU_HESTIA_API_PASSWORD` അല്ലെങ്കിൽ `WU_HESTIA_API_HASH` (ഒരെണ്ണമെങ്കിലും)
  - ഒരു authentication രീതി തിരഞ്ഞെടുക്കുക: password അല്ലെങ്കിൽ API hash/token.
- `WU_HESTIA_ACCOUNT` (നിർബന്ധം)
  - Hestia-യിലെ Web Domain-ന്റെ അക്കൗണ്ട് (ഉടമ); ഇത് CLI-യിലേക്കുള്ള ആദ്യ argument ആണ്.
- `WU_HESTIA_WEB_DOMAIN` (നിർബന്ധം)
  - നിങ്ങളുടെ WordPress സർവ് ചെയ്യുന്ന നിലവിലുള്ള Hestia Web Domain (ഇവിടെയാണ് aliases അറ്റാച്ച് ചെയ്യുക).
- `WU_HESTIA_RESTART` (ഓപ്ഷണൽ; ഡിഫോൾട്ട് `yes`)
  - alias മാറ്റങ്ങൾക്ക് ശേഷം services restart/reload ചെയ്യണമോ എന്ന്.

ഈ constants `wp-config.php`-ൽ inject ചെയ്യാൻ wizard-നെ അനുവദിക്കാം, അല്ലെങ്കിൽ സ്വമേധയാ define ചെയ്യാം.

## സെറ്റപ്പ് പരിശോധിക്കൽ
- wizard-ന്റെ "Testing" ഘട്ടത്തിൽ, plugin API വഴി `v-list-web-domains <WU_HESTIA_ACCOUNT> json` വിളിക്കുന്നു. ഒരു success response connectivity-യും authentication-ഉം ശരിയാണെന്ന് സ്ഥിരീകരിക്കുന്നു.
- ഒരു ഡൊമെയ്ൻ മാപ്പ് ചെയ്ത ശേഷം, Hestia-യിൽ പരിശോധിക്കുക: Web > ബേസ് ഡൊമെയ്ൻ > Aliases. പുതിയ alias ചേർത്തതായി നിങ്ങൾ കാണും.

## കുറിപ്പുകളും ടിപ്പുകളും
- `WU_HESTIA_WEB_DOMAIN` ഇതിനകം നിലവിലുണ്ടെന്നും `WU_HESTIA_ACCOUNT`-ന്റെ ഉടമസ്ഥതയിലാണെന്നും ഉറപ്പാക്കുക.
- SSL ആവശ്യമെങ്കിൽ, Hestia-യിൽ certificates നിയന്ത്രിക്കുക. ഈ ഇന്റഗ്രേഷൻ നിലവിൽ aliases മാത്രമാണ് കൈകാര്യം ചെയ്യുന്നത്.
- നിങ്ങളുടെ Domain Mapping "www subdomain" സെറ്റിംഗ് അനുസരിച്ച് plugin `www.<domain>` ചേർക്കുകയോ നീക്കം ചെയ്യുകയോ ചെയ്തേക്കാം.

## ഉദാഹരണ API Call (cURL)
താഴെ ഒരു ആശയപരമായ ഉദാഹരണമാണ് (നിങ്ങളുടെ environment-ന് അനുസരിച്ച് ക്രമീകരിക്കുക). കൃത്യമായ parameters-ന് ഔദ്യോഗിക doc കാണുക.

```
POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (അല്ലെങ്കിൽ &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (ചേർക്കേണ്ട alias)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

delete-ന്, `cmd=v-delete-web-domain-alias`-ഉം അതേ args-ഉം ഉപയോഗിക്കുക.

## ട്രബിൾഷൂട്ടിംഗ്
- API-യിൽ നിന്ന് HTTP error: `WU_HESTIA_API_URL` ആക്സസ് ചെയ്യാവുന്നതാണെന്നും `/api` ഉൾപ്പെടുന്നുണ്ടെന്നും പരിശോധിക്കുക.
- Auth errors: `WU_HESTIA_API_USER`-ഉം `WU_HESTIA_API_PASSWORD` അല്ലെങ്കിൽ `WU_HESTIA_API_HASH`-ഉം ശരിയാണെന്ന് ഉറപ്പാക്കുക.
- ലോഗുകളിൽ "Missing account/base domain": `WU_HESTIA_ACCOUNT`-ഉം `WU_HESTIA_WEB_DOMAIN`-ഉം സെറ്റ് ചെയ്തിട്ടുണ്ടെന്നും Hestia-യിൽ valid ആണെന്നും ഉറപ്പാക്കുക.

## റഫറൻസുകൾ
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Reference (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
