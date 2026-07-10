---
title: Hestia kontrollpaneli integreerimine
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Hestia Kontrollpaneli integreerimine {#hestia-control-panel-integration}

See juhend selgitab, kuidas Ultimate Multisite Hestia integratsiooni konfigurida, et teie võrku kaarditud domeenid lisaks (ja eemalduseks) automaatselt lisaks veebdomaanide aliasiks Hestias.

- Hestia CLI viidend: v-add-web-domain-alias / v-delete-web-domain-alias
- Ammutus REST API dokumentatsioon: https://hestiacp.com/docs/server-administration/rest-api.html

## Mis see teeb {#what-it-does}
- Kui domeen on Ultimate Multisite'is kaarditud, kutsub integratsioon Hestia API-t ja käivitab järgmise komendiga:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Kui domeeni kaardutus eemaldatakse, käivitakse:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Valikult lisatakse/eemaldata `www.` alias sõltuvalt teie Domain Mappingi seadistusest "Auto-create www subdomain" (Automaatiliselt `www` domeeni loomine).

## Esimlikud {#prerequisites}
- Ole eksisterav Hestia veebdomaan, mis viitab juba teie WordPress installatsioonile. Integratsioon lisab sellele põhdomaanide aliasid.
- Hestia API pääsuga on aktiivne. Saate autentiseeruda nii parooliga kui ka API hashiga/tokeniga.

Vaadake Hestias REST API dokumentatsiooni API päävu ja autentimise üksikasju:
https://hestiacp.com/docs/server-administration/rest-api.html

## Konfiguratsioon (Wizard → Integrations → Hestia) {#configuration-wizard--integrations--hestia}
Anna järgmised väärtused:

- `WU_HESTIA_API_URL` (kohustuslik)
  - Põhine API endpoint, mis on tavaliselt `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (kohustuslik)
  - Hestia kasutaja, mida kasutatakse API käskude jaoks (tavaliselt `admin`).
- `WU_HESTIA_API_PASSWORD` või `WU_HESTIA_API_HASH` (vähemalt üks)
  - Valige üks autentimishäire: parool või API hash/token.
- `WU_HESTIA_ACCOUNT` (kohustuslik)
  - Web Domaini (omandi) konto Hestiasse; see on esimene argument CLI jaoks.
- `WU_HESTIA_WEB_DOMAIN` (kohustuslik)
  - Olemasoleva Hestia Web Domain, mis teenib teie WordPressi (aliasid lisatakse siia).
- `WU_HESTIA_RESTART` (valikuline; oletus `yes`)
  - Kasuta seadistust palveliste käivitamise/laadimise pärast aliaside muutmist.

Võite lase anda need konstantsid wizardi sisemesse `wp-config.php`-le, või definitsioneerida neid manuaalselt.

## Seadistuse kinnitamine {#verifying-setup}
- Wizardi "Testimine" sammulas plugin kutsub API kaudu funktsiooni `v-list-web-domains <WU_HESTIA_ACCOUNT> json`. Eduvastjuhtumine kinnitab ühendust ja autentimist.
- Domaini mappimise pärast kontrollige Hestiasse: Web > põhine domain > Aliasid. Kui teel on lisatud uue aliasi.

## Järgmised märkused ja nõuanded {#notes--tips}
- Veenduge, et `WU_HESTIA_WEB_DOMAIN` on juba olemas ja omandab selle `WU_HESTIA_ACCOUNT`.
- Kui SSL on vajalik, halda sertifikaate Hestiasse. See integreerimine käsitleb praegu ainult aliasid.
- Plugin võib lisada/eemalada `www.<domain>` sõltuvalt teie Domain Mapping "www subdomain" seadistusest.

## API-kutsu näide (cURL) {#example-api-call-curl}
Allpool on konseptuaalne näide (kohustuse järgi muuta oma keskkonnale). Täpsemate parametrite jaoks viidake ametlikule dokumentatsioonile.

Käivitamine
Kasutamiseks kasutage `cmd=v-add-web-domain-alias` ja sama argumente:

```bash
cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (või &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (lisamiseks lisatav alias)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

Eelamiseks kasutage `cmd=v-delete-web-domain-alias` ja sama argumente:

## Ühendustamine (Troubleshooting) {#troubleshooting}
* API-riste HTTP viga: veenduge, et `WU_HESTIA_API_URL` on kättesaadav ja sisaldab `/api`.
* Autentikatsioonivigu: kinnitage `WU_HESTIA_API_USER` ning kas `WU_HESTIA_API_PASSWORD` või `WU_HESTIA_API_HASH`.
* Logides "Missing account/base domain" (Lõputa konto/põhine domeen): veenduge, et `WU_HESTIA_ACCOUNT` ja `WU_HESTIA_WEB_DOMAIN` on seaditud ja validid Hestia's konfiguratsioonis.

## Viidangid {#references}
* Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
* Hestia CLI viited (Aliasid): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
