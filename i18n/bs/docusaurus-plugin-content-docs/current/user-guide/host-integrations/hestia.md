---
title: Integracija Hestia Control Panela
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Integracija sa Hestia Control Panel-om

Ovaj vodič objašnjava kako da konfigurišete Ultimate Multisite Hestia integraciju, tako da se domeni mapirani u vašoj mreži automatski dodaju (i uklanjaju) kao Web Domain Aliases u Hestiji.

- Hestia CLI reference: v-add-web-domain-alias / v-delete-web-domain-alias
- Official REST API doc: https://hestiacp.com/docs/server-administration/rest-api.html

## Šta radi {#what-it-does}
- Kada se domen mapira u Ultimate Multisite, integracija poziva Hestia API kako bi pokrenula:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Kada se uklanja mapiranje domena, pokreće:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Opcionalno dodaje/uklanja alias `www.` ovisno o vašoj postavci „Auto-create www subdomain“ u podešavanjima Domain Mapping-a.

## Preduslovi {#prerequisites}
- Postojeći Hestia Web Domain koji već pokazuje na vašu WordPress instalaciju. Integracija će dodati aliase na ovaj osnovni domen.
- Omogućeni je pristup Hestia API-ju. Autentifikaciju možete koristiti putem lozinke ili API hash-a/tokena.

Pogledajte Hestia REST API dokumentaciju za omogućavanje API pristupa i detalje autentifikacije:
https://hestiacp.com/docs/server-administration/rest-api.html

## Konfiguracija (Wizard → Integrations → Hestia) {#configuration-wizard--integrations--hestia}
Unesite sljedeće vrijednosti:

- `WU_HESTIA_API_URL` (obavezno)
  - Osnovna API tačka, obično `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (obavezno)
  - Hestia korisnik koji se koristi za API komande (često `admin`).
- `WU_HESTIA_API_PASSWORD` ili `WU_HESTIA_API_HASH` (najmanje jedan)
  - Izaberite jednu metodu autentifikacije: lozinka ili API hash/token.
- `WU_HESTIA_ACCOUNT` (obavezno)
  - Račun (vlasnik) Web Domain-a u Hestiji; ovo je prvi argument za CLI.
- `WU_HESTIA_WEB_DOMAIN` (obavezno)
  - Postojeći Hestia Web Domain koji služi vašem WordPressu (ovdje će biti dodati aliasi).
- `WU_HESTIA_RESTART` (opciono; podrazumevano `yes`)
  - Da li je potrebno ponovo pokrenuti/reloadovati servise nakon promjena aliasa.

Možete pustiti wizard da ubaci ove konstante u `wp-config.php`, ili ih definisati ručno.

## Provjera podešavanja {#verifying-setup}
- U koraku „Testing“ u wizardu, plugin poziva `v-list-web-domains <WU_HESTIA_ACCOUNT> json` putem API-ja. Uspešan odgovor potvrđuje povezanost i autentifikaciju.
- Nakon mapiranja domena, provjerite u Hestiji: Web > osnovni domen > Aliases. Trebali biste vidjeti dodati novi alias.

## Napomene i savjeti {#notes--tips}
- Osigurajte da `WU_HESTIA_WEB_DOMAIN` već postoji i da ga posjeduje `WU_HESTIA_ACCOUNT`.
- Ako je potreban SSL, upravljajte certifikatima u Hestiji. Ova integracija trenutno obrađuje samo aliase.
- Plugin također može dodati/ukloniti `www.<domen>` ovisno o vašoj postavci „www subdomain“ u Domain Mapping-u.

## Primjer API poziva (cURL) {#example-api-call-curl}
Ispod je konceptualni primjer (prilagodite ga svom okruženju). Za tačne parametre, pogledajte zvaničnu dokumentaciju.

```
POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (ili &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias za dodavanje)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

Za brisanje, koristite `cmd=v-delete-web-domain-alias` i iste argumente.

## Rješavanje problema {#troubleshooting}
- HTTP greška iz API-ja: provjerite da li je `WU_HESTIA_API_URL` dostupan i da uključuje `/api`.
- Greške autentifikacije: potvrdite `WU_HESTIA_API_USER` i ili `WU_HESTIA_API_PASSWORD` ili `WU_HESTIA_API_HASH`.
- „Nedostajući račun/osnovni domen“ u logovima: osigurajte da su `WU_HESTIA_ACCOUNT` i `WU_HESTIA_WEB_DOMAIN` postavljeni i validni u Hestiji.

## Reference {#references}
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Reference (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
