---
title: Hestia Control Panel એકીકરણ
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Hestia Control Panel Integration

આ માર્ગદર્શિકા સમજાવે છે કે Ultimate Multisite Hestia integration કેવી રીતે configure કરવું જેથી તમારા network માં mapped domains આપમેળે Hestia માં Web Domain Aliases તરીકે ઉમેરાય (અને દૂર થાય).

- Hestia CLI સંદર્ભ: v-add-web-domain-alias / v-delete-web-domain-alias
- સત્તાવાર REST API દસ્તાવેજ: https://hestiacp.com/docs/server-administration/rest-api.html

## આ શું કરે છે
- જ્યારે Ultimate Multisite માં domain map થાય છે, ત્યારે integration Hestia API ને call કરીને આ ચલાવે છે:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- જ્યારે domain mapping દૂર થાય છે, ત્યારે આ ચાલે છે:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Domain Mapping settings માં તમારી "Auto-create www subdomain" setting મુજબ `www.` alias ઉમેરે/દૂર કરે છે.

## પૂર્વજરૂરિયાતો
- એક હાલનું Hestia Web Domain જે પહેલેથી તમારા WordPress installation તરફ point કરતું હોય. Integration આ base domain સાથે aliases જોડશે.
- Hestia API access enabled હોવું જોઈએ. તમે password અથવા API hash/token વાપરીને authenticate કરી શકો છો.

API access enable કરવા અને authentication વિગતો માટે Hestia ના REST API docs જુઓ:
https://hestiacp.com/docs/server-administration/rest-api.html

## Configuration (Wizard → Integrations → Hestia)
નીચેની values આપો:

- `WU_HESTIA_API_URL` (જરૂરી)
  - Base API endpoint, સામાન્ય રીતે `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (જરૂરી)
  - API commands માટે વપરાતો Hestia user (ઘણીવાર `admin`).
- `WU_HESTIA_API_PASSWORD` અથવા `WU_HESTIA_API_HASH` (ઓછામાં ઓછું એક)
  - એક authentication method પસંદ કરો: password અથવા API hash/token.
- `WU_HESTIA_ACCOUNT` (જરૂરી)
  - Hestia માં Web Domain નો account (owner); આ CLI નું પહેલું argument છે.
- `WU_HESTIA_WEB_DOMAIN` (જરૂરી)
  - હાલનું Hestia Web Domain જે તમારું WordPress serve કરે છે (aliases અહીં attach થશે).
- `WU_HESTIA_RESTART` (વૈકલ્પિક; default `yes`)
  - Alias changes પછી services restart/reload કરવી કે નહીં.

તમે wizard ને આ constants `wp-config.php` માં inject કરવા દઈ શકો છો, અથવા manually define કરી શકો છો.

## Setup ચકાસવું
- Wizard ના "Testing" step માં, plugin API દ્વારા `v-list-web-domains <WU_HESTIA_ACCOUNT> json` call કરે છે. Success response connectivity અને authentication confirm કરે છે.
- Domain map કર્યા પછી, Hestia માં ચકાસો: Web > base domain > Aliases. તમને નવું alias ઉમેરાયેલું દેખાવું જોઈએ.

## નોંધો અને ટિપ્સ
- ખાતરી કરો કે `WU_HESTIA_WEB_DOMAIN` પહેલેથી અસ્તિત્વમાં છે અને `WU_HESTIA_ACCOUNT` ની માલિકીનું છે.
- જો SSL જરૂરી હોય, તો certificates Hestia માં manage કરો. આ integration હાલમાં ફક્ત aliases handle કરે છે.
- તમારી Domain Mapping "www subdomain" setting મુજબ plugin `www.<domain>` પણ ઉમેરી/દૂર કરી શકે છે.

## ઉદાહરણ API Call (cURL)
નીચે એક conceptual ઉદાહરણ છે (તમારા environment મુજબ adjust કરો). ચોક્કસ parameters માટે સત્તાવાર doc જુઓ.

```
POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (અથવા &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (ઉમેરવા માટેનું alias)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

Delete માટે, `cmd=v-delete-web-domain-alias` અને એ જ args વાપરો.

## સમસ્યાનિવારણ
- API માંથી HTTP error: ચકાસો કે `WU_HESTIA_API_URL` reachable છે અને `/api` સામેલ છે.
- Auth errors: `WU_HESTIA_API_USER` અને `WU_HESTIA_API_PASSWORD` અથવા `WU_HESTIA_API_HASH` confirm કરો.
- Logs માં "Missing account/base domain": ખાતરી કરો કે `WU_HESTIA_ACCOUNT` અને `WU_HESTIA_WEB_DOMAIN` set છે અને Hestia માં valid છે.

## સંદર્ભો
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Reference (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
