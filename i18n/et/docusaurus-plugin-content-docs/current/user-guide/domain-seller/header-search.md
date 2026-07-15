---
title: Päise domeeniotsing
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Headeri domeeniotsing

Kasuta seda seadistust, kui soovid väikest headeri vormi, mis alustab domeeniotsingut ja laseb seejärel kliendil valida saadaolevate domeenide seast Ultimate Multisite checkoutis.

## Nõuded {#requirements}

- Ultimate Multisite võrgus aktiivne.
- Multisite Ultimate Domain Seller võrgus aktiivne.
- Vähemalt üks aktiivne domeeni registreerimise toode, millel on:
  - `domain_provider` määratud seadistatud teenusepakkujale.
  - Toetatud TLD-d seadistatud, näiteks `com`, `net` ja `org`.
- Kehtiv checkouti vorm, mis sisaldab välja **Domeeni valik**.

## Checkouti vorm {#checkout-form}

1. Loo või muuda registreerimislehel kasutatavat checkouti vormi.
2. Lisa tavapärased nõutavad checkouti/konto väljad, sealhulgas **Kasutajanimi**. Checkouti vorm, mis sisaldab ainult domeenivälja, lükatakse Ultimate Multisite valideerimise poolt tagasi.
3. Lisa väli **Domeeni valik**.
4. Määra Domain Selection režiimiks **Ainult registreerimine**, kui voog peaks keskenduma registreeritud domeenidele, mitte tasuta alamdomeenidele või olemasolevatele domeenidele.
5. Määra domeeni registreerimise toode sellele väljale.

Registreerimisleht peaks kuvama checkouti vormi, näiteks:

```text
[wu_checkout slug="domain-form"]
```

## Headeri vorm {#header-form}

Lisa saidi headerisse väike `GET` vorm, mis saadab sisestatud otsingutermini checkouti lehele parameetrina `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Ära eelvali domeeni kohandatud headeri JavaScriptis. Header peaks edastama ainult otsingutermini. Domain Selleri checkouti skript loeb `?domain_name=example`, täidab checkouti otsingukasti ja käivitab saadavuse otsingu, et klient saaks tagastatud domeenide seast valida.

## Oodatav käitumine {#expected-behaviour}

Otsing `example` headeris peaks avama:

```text
/register/?domain_name=example
```

Checkout peaks seejärel kuvama valitavad tulemused, näiteks:

- `example.com`
- `example.net`
- `example.org` pole saadaval
- muud teenusepakkuja toetatud TLD-d

Pärast saadaoleva tulemuse valimist peaks tellimuse kokkuvõte sisaldama domeeni registreerimise toodet ja valitud domeeninime.

## Kontrollimine {#verification}

1. Ava avaleht.
2. Otsi paljast nime, näiteks `example`.
3. Kinnita, et checkouti URL sisaldab `?domain_name=example`.
4. Kinnita, et checkouti domeeniväli sisaldab `example`.
5. Kinnita, et ilmub domeenivalikute loend.
6. Klõpsa saadaoleva domeeni juures **Vali**.
7. Kinnita, et tellimuse kokkuvõte sisaldab `Domain Registration - example.com` või valitud domeeni.

## Tõrkeotsing {#troubleshooting}

- Kui loendit ei ilmu, kontrolli brauseri võrgu vahekaardilt `admin-ajax.php?action=wu_domain_search` ja kinnita, et see tagastab mittetühjad `domains` või `results`.
- Kui checkouti vormi valideerimine salvestamisel ebaõnnestub, lisa nõutavad konto väljad, näiteks **Kasutajanimi**.
- Kui domeeni valimine ei uuenda ostukorvi, kinnita, et `window.wu_checkout_form` on olemas ja et Domain Selleri checkouti varad on checkouti lehel laaditud.
