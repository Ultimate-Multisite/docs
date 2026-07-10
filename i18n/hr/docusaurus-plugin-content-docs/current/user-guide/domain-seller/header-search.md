---
title: Pretraživanje domena u zaglavlju
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Pretraživanje domena u zaglavlju {#header-domain-search}

Koristite ovu postavku kada želite mali obrazac u zaglavlju koji pokreće pretraživanje domena, a zatim omogućuje korisniku odabir dostupnih domena unutar Ultimate Multisite checkouta.

## Zahtjevi {#requirements}

- Ultimate Multisite mrežno aktivan.
- Multisite Ultimate Domain Seller mrežno aktivan.
- Najmanje jedan aktivan proizvod za registraciju domene s:
  - `domain_provider` postavljenim na konfiguriranog pružatelja.
  - Konfiguriranim podržanim TLD-ovima, na primjer `com`, `net` i `org`.
- Važeći checkout obrazac koji sadrži polje **Odabir domene**.

## Checkout obrazac {#checkout-form}

1. Izradite ili uredite checkout obrazac koji se koristi na stranici za registraciju.
2. Dodajte uobičajena obavezna checkout/Account polja, uključujući **Korisničko ime**. Checkout obrazac koji sadrži samo polje domene odbija se Ultimate Multisite validacijom.
3. Dodajte polje **Odabir domene**.
4. Postavite način rada Odabira domene na **Samo registracija** kada se tijek treba usredotočiti na registrirane domene umjesto na besplatne poddomene ili postojeće domene.
5. Dodijelite proizvod za registraciju domene tom polju.

Stranica za registraciju trebala bi prikazati checkout obrazac, na primjer:

```text
[wu_checkout slug="domain-form"]
```

## Obrazac u zaglavlju {#header-form}

Dodajte mali `GET` obrazac u zaglavlje stranice koji šalje uneseni pojam za pretraživanje na checkout stranicu kao `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Nemojte unaprijed odabrati domenu u prilagođenom JavaScriptu zaglavlja. Zaglavlje treba samo proslijediti pojam za pretraživanje. Domain Seller checkout skripta čita `?domain_name=example`, popunjava checkout okvir za pretraživanje i pokreće pretraživanje dostupnosti kako bi korisnik mogao odabrati među vraćenim domenama.

## Očekivano ponašanje {#expected-behaviour}

Pretraživanje pojma `example` u zaglavlju trebalo bi otvoriti:

```text
/register/?domain_name=example
```

Checkout bi zatim trebao prikazati rezultate koje je moguće odabrati, kao što su:

- `example.com`
- `example.net`
- `example.org` nedostupno
- drugi TLD-ovi koje podržava pružatelj

Nakon odabira dostupnog rezultata, sažetak narudžbe trebao bi uključivati proizvod za registraciju domene i odabrani naziv domene.

## Provjera {#verification}

1. Otvorite početnu stranicu.
2. Pretražite goli naziv, na primjer `example`.
3. Potvrdite da checkout URL uključuje `?domain_name=example`.
4. Potvrdite da checkout polje domene sadrži `example`.
5. Potvrdite da se pojavljuje popis izbora domena.
6. Kliknite **Odaberi** za dostupnu domenu.
7. Potvrdite da sažetak narudžbe sadrži `Domain Registration - example.com` ili odabranu domenu.

## Rješavanje problema {#troubleshooting}

- Ako se ne pojavi popis, provjerite karticu mreže u pregledniku za `admin-ajax.php?action=wu_domain_search` i potvrdite da vraća neprazne `domains` ili `results`.
- Ako checkout obrazac ne prođe validaciju tijekom spremanja, dodajte obavezna Account polja, kao što je **Korisničko ime**.
- Ako odabir domene ne ažurira košaricu, potvrdite da `window.wu_checkout_form` postoji i da su Domain Seller checkout resursi učitani na checkout stranici.
