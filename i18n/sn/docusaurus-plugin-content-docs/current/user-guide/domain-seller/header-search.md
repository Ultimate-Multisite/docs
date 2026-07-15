---
title: Kutsvaga Domain yeMusoro
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Kutsvaga Domain muHeader

Shandisa setup iyi kana uchida fomu diki reheader rinotanga kutsvaga domain, wobva warega mutengi asarudze kubva kuma domain aripo mukubhadhara kweUltimate Multisite.

## Zvinodiwa {#requirements}

- Ultimate Multisite network-active.
- Multisite Ultimate Domain Seller network-active.
- Kanenge chigadzirwa chimwe chekonyoresa domain chiri active chine:
  - `domain_provider` yakaiswa kumupi akagadziriswa.
  - TLDs dzinotsigirwa dzakagadziriswa, semuenzaniso `com`, `net`, uye `org`.
- Fomu rekubhadhara rinoshanda rine field ye **Sarudzo yeDomain**.

## Fomu rekubhadhara {#checkout-form}

1. Gadzira kana gadzirisa fomu rekubhadhara rinoshandiswa nepeji rekonyoresa.
2. Wedzera mafield akajairika anodiwa ekubhadhara/account, kusanganisira **Zita remushandisi**. Fomu rekubhadhara rine field yedomain chete rinorambwa nekuongorora kweUltimate Multisite.
3. Wedzera field ye **Sarudzo yeDomain**.
4. Isa modhi yeDomain Selection ku **Kunyoresa Chete** kana flow ichifanira kutarisa kuma domain akanyoreswa panzvimbo pema subdomain emahara kana ma domain aripo.
5. Govera chigadzirwa chekonyoresa domain kufield iyoyo.

Peji rekonyoresa rinofanira kuratidza fomu rekubhadhara, semuenzaniso:

```text
[wu_checkout slug="domain-form"]
```

## Fomu reheader {#header-form}

Wedzera fomu diki re `GET` muheader yesaiti rinotumira izwi rekutsvaga rakaiswa kupeji rekubhadhara se `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Usafano sarudza domain muJavaScript yeheader yakagadzirwa. Header inofanira kungopfuudza izwi rekutsvaga. Script yekubhadhara yeDomain Seller inoverenga `?domain_name=example`, yozadza bhokisi rekutsvaga rekubhadhara, uye yomanyisa kutsvaga kuwanikwa kuitira kuti mutengi asarudze kubva kuma domain adzoserwa.

## Maitiro anotarisirwa {#expected-behaviour}

Kutsvaga `example` muheader kunofanira kuvhura:

```text
/register/?domain_name=example
```

Kubhadhara kunofanira kubva kwaratidza mhedzisiro inosarudzika yakaita se:

- `example.com`
- `example.net`
- `example.org` haisi kuwanikwa
- mamwe maTLD anotsigirwa nemupi

Mushure mekusarudza mhedzisiro iripo, pfupiso yeodha inofanira kusanganisira chigadzirwa chekonyoresa domain uye zita redomain rakasarudzwa.

## Kuongorora {#verification}

1. Vhura peji rekumba.
2. Tsvaga zita risina zvimwe, semuenzaniso `example`.
3. Simbisa kuti URL yekubhadhara inosanganisira `?domain_name=example`.
4. Simbisa kuti field yedomain yekubhadhara ine `example`.
5. Simbisa kuti rondedzero yesarudzo dzedomain yaoneka.
6. Dzvanya **Sarudza** kudomain iripo.
7. Simbisa kuti pfupiso yeodha ine `Domain Registration - example.com` kana domain yakasarudzwa.

## Kugadzirisa matambudziko {#troubleshooting}

- Kana pasina rondedzero yaoneka, tarisa browser network tab ye `admin-ajax.php?action=wu_domain_search` uye simbisa kuti inodzorera `domains` kana `results` dzisina chinhu.
- Kana fomu rekubhadhara rikatadza validation parinenge richichengetwa, wedzera mafield eaccount anodiwa akadai se **Zita remushandisi**.
- Kana kusarudza domain kusingagadzirisi cart, simbisa kuti `window.wu_checkout_form` iripo uye kuti assets dzekubhadhara dzeDomain Seller dzakatakurwa papeji rekubhadhara.
