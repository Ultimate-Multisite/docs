---
title: Integracija Hestia Control Panela
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Integracija sa Hestia Control Panelom

Ovaj vodič objašnjava kako da podesite integraciju Ultimate Multisite Hestie tako da domen koji su mapirani u vašoj mreži automatski dodaju (i uklanjaju) kao Web Domain Aliase u Hestii.

- Referenca za Hestia CLI: `v-add-web-domain-alias` / `v-delete-web-domain-alias`
- Zvanični dokument REST API: https://hestiacp.com/docs/server-administration/rest-api.html

## Šta radi
- Kada se domen mapira u Ultimate Multisite, integracija poziva Hestia API da izvrši sledeće komande:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Kada se ukloni mape domena, izvršava se:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Opciono dodaje/uklanja alias `www.` zavisno od vaše postavke "Auto-create www subdomain" u podešavanjima mape domena.

## Preduslovi
- Postojeći Hestia Web Domain koji već pokazuje na vaš instalaciju WordPressa. Integracija će vezati alase za taj osnovni domen.
- Omogućeni pristup Hestia API. Možete se autentifikovati koristeći lozinku ili API hash/token.

Pogledajte Hestie dokumentaciju REST API-ja za omogućavanje pristupa API-ju i detalje autentifikacije:
https://hestiacp.com/docs/server-administration/rest-api.html

## Konfiguracija (Wizard → Integrations → Hestia)
Dajte sledeće vrednosti:

`WU_HESTIA_API_URL` (obavezno)
  - Osnovna API endpoint adresa, obično `https://your-hestia-host:8083/api/`.

`WU_HESTIA_API_USER` (obavezno)
  - Hestia korisničko ime koje se koristi za API komande (često je `admin`).

`WU_HESTIA_API_PASSWORD` ili `WU_HESTIA_API_HASH` (najmanje jedan)
  - Izaberite jednu metodu autentifikacije: lozinku ili API hash/token.

`WU_HESTIA_ACCOUNT` (obavezno)
  - Račun (vlasnik) Web Domena u Hestiji; ovo je prvi argument za CLI komandu.

`WU_HESTIA_WEB_DOMAIN` (obavezno)
  - Postojeći Hestia Web Domain koji služi vaš WordPress (alias će se dodavati ovde).

`WU_HESTIA_RESTART` (opciono; podrazumevano `yes`)
  - Da li da ponovo pokrenete/reloadite servise nakon promene alias-a.

Možete dozvoliti wizardu da ubaci ove konstante u `wp-config.php`, ili ih definisati ručno.

## Provera podešavanja
- U koraku "Testiranje" u wizardu, plugin poziva `v-list-web-domains <WU_HESTIA_ACCOUNT> json` putem API-ja. Uspešan odgovor potvrđuje konektivnost i autentifikaciju.
- Nakon mapiranja domena, proverite u Hestiji: Web > osnovni domen > Aliase. Trebalo bi da vidite dodati novi alias.

## Napomene i saveti
- Proverite da `WU_HESTIA_WEB_DOMAIN` već postoji i da ga poseduje `WU_HESTIA_ACCOUNT`.
- Ako je SSL potreban, upravljajte sertifikatima u Hestiji. Ova integracija trenutno obrađuje samo alase.
- Plugin može dodati/ukloniti `www.<domain>` zavisno od podešavanja Domain Mapping "www subdomain".

## Primer API poziva (cURL)
Ispod je konceptualni primer (prilagodite svom okruženju). Proverite zvaničan dokument za tačne parametre.

POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (ili &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias za dodavanja)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes

Za brisanje koristite `cmd=v-delete-web-domain-alias` i iste argumente.

## Rešavanje problema (Troubleshooting)
- HTTP greška od API-ja: proverite da li je `WU_HESTIA_API_URL` dostupan i da li uključuje `/api`.
- Greške za autentifikaciju: potvrdite da su postavljeni `WU_HESTIA_API_USER` i ili `WU_HESTIA_API_PASSWORD` ili `WU_HESTIA_API_HASH`.
- "Missing account/base domain" u logovima: proverite da li su `WU_HESTIA_ACCOUNT` i `WU_HESTIA_WEB_DOMAIN` postavljeni i validni u Hestii.

## Referanse
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Reference (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
