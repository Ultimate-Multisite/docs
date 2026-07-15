---
title: Iskanje domene v glavi
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Iskanje domene v glavi

Uporabite to nastavitev, kadar želite majhen obrazec v glavi, ki začne iskanje domene, nato pa stranki omogoči izbiro med razpoložljivimi domenami znotraj Ultimate Multisite checkouta.

## Zahteve {#requirements}

- Ultimate Multisite omrežno aktiven.
- Multisite Ultimate Domain Seller omrežno aktiven.
- Vsaj en aktiven izdelek za registracijo domene z:
  - `domain_provider` nastavljenim na konfiguriranega ponudnika.
  - Konfiguriranimi podprtimi TLD-ji, na primer `com`, `net` in `org`.
- Veljaven obrazec za checkout, ki vsebuje polje **Izbira domene**.

## Obrazec za checkout {#checkout-form}

1. Ustvarite ali uredite obrazec za checkout, ki ga uporablja registracijska stran.
2. Dodajte običajna zahtevana polja za checkout/Account, vključno z **Uporabniško ime**. Obrazec za checkout, ki vsebuje samo polje za domeno, validacija Ultimate Multisite zavrne.
3. Dodajte polje **Izbira domene**.
4. Nastavite način Domain Selection na **Register Only**, kadar naj se potek osredotoča na registrirane domene namesto na brezplačne poddomene ali obstoječe domene.
5. Dodelite izdelek za registracijo domene temu polju.

Registracijska stran naj prikaže obrazec za checkout, na primer:

```text
[wu_checkout slug="domain-form"]
```

## Obrazec v glavi {#header-form}

Dodajte majhen obrazec `GET` v glavo spletnega mesta, ki vneseni iskalni izraz pošlje na stran za checkout kot `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

V JavaScriptu po meri v glavi ne izberite domene vnaprej. Glava naj posreduje samo iskalni izraz. Skripta Domain Seller checkout prebere `?domain_name=example`, izpolni iskalno polje v checkoutu in zažene iskanje razpoložljivosti, da lahko stranka izbira med vrnjenimi domenami.

## Pričakovano vedenje {#expected-behaviour}

Iskanje `example` v glavi bi moralo odpreti:

```text
/register/?domain_name=example
```

Checkout naj nato prikaže rezultate, ki jih je mogoče izbrati, kot so:

- `example.com`
- `example.net`
- `example.org` ni na voljo
- drugi TLD-ji, ki jih podpira ponudnik

Po izbiri razpoložljivega rezultata naj povzetek naročila vključuje izdelek za registracijo domene in izbrano ime domene.

## Preverjanje {#verification}

1. Odprite domačo stran.
2. Poiščite golo ime, na primer `example`.
3. Potrdite, da URL checkouta vključuje `?domain_name=example`.
4. Potrdite, da polje domene v checkoutu vsebuje `example`.
5. Potrdite, da se prikaže seznam izbir domen.
6. Kliknite **Izberi** za razpoložljivo domeno.
7. Potrdite, da povzetek naročila vsebuje `Domain Registration - example.com` ali izbrano domeno.

## Odpravljanje težav {#troubleshooting}

- Če se seznam ne prikaže, preverite zavihek omrežja v brskalniku za `admin-ajax.php?action=wu_domain_search` in potrdite, da vrne neprazne `domains` ali `results`.
- Če obrazec za checkout pri shranjevanju ne prestane validacije, dodajte zahtevana polja Account, kot je **Uporabniško ime**.
- Če izbira domene ne posodobi košarice, potrdite, da `window.wu_checkout_form` obstaja in da so sredstva Domain Seller checkout naložena na strani checkouta.
