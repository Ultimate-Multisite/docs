---
title: Ukuhlanganiswa kwe-Hestia Control Panel
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Ukuhlanganiswa kwe-Hestia Control Panel

Lo mhlahlandlela uchaza indlela yokulungisa ukuhlanganiswa kwe-Ultimate Multisite Hestia ukuze izizinda eziqondanisiwe kunethiwekhi yakho zengezwe ngokuzenzakalelayo (futhi zisuswe) njenge-Web Domain Aliases ku-Hestia.

- Inkomba ye-Hestia CLI: v-add-web-domain-alias / v-delete-web-domain-alias
- Idokhumenti esemthethweni ye-REST API: https://hestiacp.com/docs/server-administration/rest-api.html

## Okwenzayo {#what-it-does}
- Lapho isizinda siqondaniswa ku-Ultimate Multisite, ukuhlanganiswa kubiza i-Hestia API ukuze kuqalise:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Lapho ukuqondaniswa kwesizinda kususwa, kuqalisa:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Ngokuzikhethela kwengeza/kususe i-alias ye-`www.` kuye ngesilungiselelo sakho esithi “Dala ngokuzenzakalelayo isizinda esingaphansi se-www” kuzilungiselelo ze-Domain Mapping.

## Okudingekayo Ngaphambi Kokuqala {#prerequisites}
- I-Hestia Web Domain ekhona esivele ikhomba ekufakweni kwakho kwe-WordPress. Ukuhlanganiswa kuzonamathisela ama-alias kulesi sizinda esiyisisekelo.
- Ukufinyelela kwe-Hestia API kunikwe amandla. Ungaqinisekisa usebenzisa iphasiwedi noma i-API hash/token.

Bheka amadokhumenti e-REST API ka-Hestia ukuze unike amandla ukufinyelela kwe-API nemininingwane yokuqinisekisa:
https://hestiacp.com/docs/server-administration/rest-api.html

## Ukulungiselela (Isilekeleli → Ukuhlanganiswa → Hestia) {#configuration-wizard--integrations--hestia}
Nikeza amanani alandelayo:

- `WU_HESTIA_API_URL` (kuyadingeka)
  - I-endpoint eyisisekelo ye-API, ngokuvamile `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (kuyadingeka)
  - Umsebenzisi we-Hestia osetshenziswa emiyalweni ye-API (ngokuvamile `admin`).
- `WU_HESTIA_API_PASSWORD` noma `WU_HESTIA_API_HASH` (okungenani okukodwa)
  - Khetha indlela eyodwa yokuqinisekisa: iphasiwedi noma i-API hash/token.
- `WU_HESTIA_ACCOUNT` (kuyadingeka)
  - I-akhawunti (umnikazi) ye-Web Domain ku-Hestia; lokhu kuyimpikiswano yokuqala ku-CLI.
- `WU_HESTIA_WEB_DOMAIN` (kuyadingeka)
  - I-Hestia Web Domain ekhona esebenzela i-WordPress yakho (ama-alias azonamathiselwa lapha).
- `WU_HESTIA_RESTART` (ngokuzikhethela; okuzenzakalelayo `yes`)
  - Ukuthi izinsiza ziqaliswe kabusha/zilayishwe kabusha ngemva kwezinguquko ze-alias.

Ungavumela isilekeleli sifake lawa ma-constant ku-`wp-config.php`, noma uwachaze mathupha.

## Ukuqinisekisa Ukusethwa {#verifying-setup}
- Esinyathelweni sesilekeleli esithi “Ukuhlola”, i-plugin ibiza `v-list-web-domains <WU_HESTIA_ACCOUNT> json` nge-API. Impendulo yempumelelo iqinisekisa ukuxhumeka nokuqinisekisa.
- Ngemva kokuqondanisa isizinda, hlola ku-Hestia: Web > isizinda esiyisisekelo > Aliases. Kufanele ubone i-alias entsha ingeziwe.

## Amanothi Namathiphu {#notes--tips}
- Qinisekisa ukuthi `WU_HESTIA_WEB_DOMAIN` isivele ikhona futhi ingeyakwa-`WU_HESTIA_ACCOUNT`.
- Uma kudingeka i-SSL, phatha izitifiketi ku-Hestia. Lokhu kuhlanganiswa okwamanje kusingatha ama-alias kuphela.
- I-plugin ingase futhi yengeze/isuse `www.<domain>` kuye ngesilungiselelo sakho se-Domain Mapping “isizinda esingaphansi se-www”.

## Isibonelo Sokubiza i-API (cURL) {#example-api-call-curl}
Ngezansi kunesibonelo somqondo (lungisa ngokwemvelo yakho). Bheka idokhumenti esemthethweni ukuze uthole amapharamitha aqondile.

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

Ukuze ususe, sebenzisa `cmd=v-delete-web-domain-alias` nama-args afanayo.

## Ukuxazulula Izinkinga {#troubleshooting}
- Iphutha le-HTTP elivela ku-API: qinisekisa ukuthi `WU_HESTIA_API_URL` iyafinyeleleka futhi ifaka `/api`.
- Amaphutha okuqinisekisa: qinisekisa `WU_HESTIA_API_USER` kanye noma `WU_HESTIA_API_PASSWORD` noma `WU_HESTIA_API_HASH`.
- “I-akhawunti/isizinda esiyisisekelo siyashoda” kumalogi: qinisekisa ukuthi `WU_HESTIA_ACCOUNT` ne-`WU_HESTIA_WEB_DOMAIN` kusethiwe futhi kuvumelekile ku-Hestia.

## Izinkomba {#references}
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Inkomba ye-Hestia CLI (Ama-alias): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
