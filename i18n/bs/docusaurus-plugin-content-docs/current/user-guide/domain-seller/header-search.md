---
title: Pretraga domena u zaglavlju
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Pretraga domena u zaglavlju

Koristite ovu postavku kada želite mali obrazac u zaglavlju koji pokreće pretragu domena, a zatim omogućava kupcu da izabere među dostupnim domenima unutar Ultimate Multisite checkouta.

## Zahtjevi {#requirements}

- Ultimate Multisite mrežno aktivan.
- Multisite Ultimate Domain Seller mrežno aktivan.
- Najmanje jedan aktivan proizvod za registraciju domena sa:
  - `domain_provider` postavljenim na konfigurisanog provajdera.
  - Konfigurisanim podržanim TLD-ovima, na primjer `com`, `net` i `org`.
- Važeći checkout obrazac koji sadrži polje **Odabir domena**.

## Checkout obrazac {#checkout-form}

1. Kreirajte ili uredite checkout obrazac koji koristi stranica za registraciju.
2. Dodajte uobičajena obavezna checkout/account polja, uključujući **Korisničko ime**. Checkout obrazac koji sadrži samo polje za domen odbija Ultimate Multisite validacija.
3. Dodajte polje **Odabir domena**.
4. Postavite način rada Domain Selection na **Samo registracija** kada tok treba biti fokusiran na registrovane domene umjesto na besplatne poddomene ili postojeće domene.
5. Dodijelite proizvod za registraciju domena tom polju.

Stranica za registraciju treba prikazati checkout obrazac, na primjer:

```text
[wu_checkout slug="domain-form"]
```

## Obrazac u zaglavlju {#header-form}

Dodajte mali `GET` obrazac u zaglavlje sitea koji šalje uneseni pojam za pretragu na checkout stranicu kao `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Nemojte unaprijed odabrati domen u prilagođenom JavaScriptu zaglavlja. Zaglavlje treba samo proslijediti pojam za pretragu. Domain Seller checkout skripta čita `?domain_name=example`, popunjava checkout polje za pretragu i pokreće pretragu dostupnosti kako bi kupac mogao izabrati među vraćenim domenima.

## Očekivano ponašanje {#expected-behaviour}

Pretraga `example` u zaglavlju treba otvoriti:

```text
/register/?domain_name=example
```

Checkout zatim treba prikazati rezultate koji se mogu odabrati, kao što su:

- `example.com`
- `example.net`
- `example.org` nedostupan
- drugi TLD-ovi koje provajder podržava

Nakon odabira dostupnog rezultata, sažetak narudžbe treba uključivati proizvod za registraciju domena i odabrani naziv domena.

## Provjera {#verification}

1. Otvorite početnu stranicu.
2. Pretražite golo ime, na primjer `example`.
3. Potvrdite da checkout URL uključuje `?domain_name=example`.
4. Potvrdite da checkout polje za domen sadrži `example`.
5. Potvrdite da se pojavljuje lista izbora domena.
6. Kliknite **Odaberi** za dostupan domen.
7. Potvrdite da sažetak narudžbe sadrži `Domain Registration - example.com` ili odabrani domen.

## Rješavanje problema {#troubleshooting}

- Ako se lista ne pojavi, provjerite mrežnu karticu preglednika za `admin-ajax.php?action=wu_domain_search` i potvrdite da vraća neprazne `domains` ili `results`.
- Ako checkout obrazac ne prođe validaciju prilikom spremanja, dodajte obavezna account polja kao što je **Korisničko ime**.
- Ako odabir domena ne ažurira korpu, potvrdite da `window.wu_checkout_form` postoji i da su Domain Seller checkout assets učitani na checkout stranici.
