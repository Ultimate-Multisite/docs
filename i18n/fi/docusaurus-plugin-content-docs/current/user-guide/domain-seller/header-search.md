---
title: Ylätunnisteen verkkotunnushaku
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Ylätunnisteen verkkotunnushaku

Käytä tätä asetusta, kun haluat pienen ylätunnistelomakkeen, joka käynnistää verkkotunnushaun ja antaa asiakkaan sitten valita saatavilla olevista verkkotunnuksista Ultimate Multisite checkoutissa.

## Vaatimukset {#requirements}

- Ultimate Multisite verkkoaktiivisena.
- Multisite Ultimate Domain Seller verkkoaktiivisena.
- Vähintään yksi aktiivinen verkkotunnuksen rekisteröintituote, jossa on:
  - `domain_provider` asetettuna määritettyyn palveluntarjoajaan.
  - Tuetut TLD:t määritettyinä, esimerkiksi `com`, `net` ja `org`.
- Kelvollinen checkout-lomake, joka sisältää **Verkkotunnuksen valinta** -kentän.

## Checkout-lomake {#checkout-form}

1. Luo tai muokkaa rekisteröintisivun käyttämää checkout-lomaketta.
2. Lisää tavalliset pakolliset checkout-/Account-kentät, mukaan lukien **Käyttäjätunnus**. Checkout-lomake, joka sisältää vain verkkotunnuskentän, hylätään Ultimate Multisite -validoinnissa.
3. Lisää **Verkkotunnuksen valinta** -kenttä.
4. Aseta Verkkotunnuksen valinta -tilaksi **Vain rekisteröinti**, kun prosessin tulisi keskittyä rekisteröityihin verkkotunnuksiin ilmaisten aliverkkotunnusten tai olemassa olevien verkkotunnusten sijaan.
5. Määritä verkkotunnuksen rekisteröintituote kyseiseen kenttään.

Rekisteröintisivun tulisi näyttää checkout-lomake, esimerkiksi:

```text
[wu_checkout slug="domain-form"]
```

## Ylätunnistelomake {#header-form}

Lisää sivuston ylätunnisteeseen pieni `GET`-lomake, joka lähettää syötetyn hakutermin checkout-sivulle muodossa `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Älä esivalitse verkkotunnusta mukautetulla ylätunnisteen JavaScriptillä. Ylätunnisteen tulisi vain välittää hakutermi. Domain Seller -checkout-skripti lukee `?domain_name=example`, täyttää checkoutin hakukentän ja suorittaa saatavuushaun, jotta asiakas voi valita palautetuista verkkotunnuksista.

## Odotettu toiminta {#expected-behaviour}

Haun `example` ylätunnisteessa tulisi avata:

```text
/register/?domain_name=example
```

Checkoutin tulisi sitten näyttää valittavia tuloksia, kuten:

- `example.com`
- `example.net`
- `example.org` ei saatavilla
- muut palveluntarjoajan tukemat TLD:t

Kun saatavilla oleva tulos on valittu, tilauksen yhteenvedon tulisi sisältää verkkotunnuksen rekisteröintituote ja valittu verkkotunnus.

## Varmistaminen {#verification}

1. Avaa etusivu.
2. Hae paljasta nimeä, esimerkiksi `example`.
3. Varmista, että checkout-URL sisältää `?domain_name=example`.
4. Varmista, että checkoutin verkkotunnuskenttä sisältää `example`.
5. Varmista, että verkkotunnusvaihtoehtojen luettelo tulee näkyviin.
6. Napsauta saatavilla olevan verkkotunnuksen kohdalla **Valitse**.
7. Varmista, että tilauksen yhteenveto sisältää `Verkkotunnuksen rekisteröinti - example.com` tai valitun verkkotunnuksen.

## Vianmääritys {#troubleshooting}

- Jos luetteloa ei näy, tarkista selaimen verkkovälilehdeltä `admin-ajax.php?action=wu_domain_search` ja varmista, että se palauttaa ei-tyhjän `domains`- tai `results`-arvon.
- Jos checkout-lomakkeen validointi epäonnistuu tallennettaessa, lisää pakolliset Account-kentät, kuten **Käyttäjätunnus**.
- Jos verkkotunnuksen valitseminen ei päivitä ostoskoria, varmista, että `window.wu_checkout_form` on olemassa ja että Domain Seller -checkout-resurssit on ladattu checkout-sivulla.
