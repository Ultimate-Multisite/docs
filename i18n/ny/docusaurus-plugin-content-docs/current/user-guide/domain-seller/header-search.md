---
title: Kusaka Domain pa Header
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Kusaka Domain mu Header

Gwiritsani ntchito setup iyi mukafuna form yaing'ono ya header yomwe imayambitsa kusaka domain, kenako imalola kasitomala kusankha kuchokera ku domains omwe alipo mkati mwa Ultimate Multisite checkout.

## Zofunikira {#requirements}

- Ultimate Multisite network-active.
- Multisite Ultimate Domain Seller network-active.
- Osachepera chinthu chimodzi chogwira ntchito cha kulembetsa domain chokhala ndi:
  - `domain_provider` yokhazikitsidwa ku provider wokonzedwa.
  - TLDs zothandizidwa zokonzedwa, mwachitsanzo `com`, `net`, ndi `org`.
- Form yovomerezeka ya checkout yokhala ndi field ya **Kusankha Domain**.

## Form ya checkout {#checkout-form}

1. Pangani kapena sinthani form ya checkout yomwe imagwiritsidwa ntchito ndi tsamba la kulembetsa.
2. Onjezani fields zofunikira za checkout/account, kuphatikizapo **Username**. Form ya checkout yokhala ndi field ya domain yokha imakanidwa ndi validation ya Ultimate Multisite.
3. Onjezani field ya **Kusankha Domain**.
4. Khazikitsani mode ya Domain Selection kukhala **Register Only** pamene flow iyenera kuyang'ana pa domains olembetsedwa m'malo mwa subdomains aulere kapena domains omwe alipo kale.
5. Perekani chinthu cha kulembetsa domain ku field imeneyo.

Tsamba la kulembetsa liyenera kuwonetsa form ya checkout, mwachitsanzo:

```text
[wu_checkout slug="domain-form"]
```

## Form ya header {#header-form}

Onjezani form yaing'ono ya `GET` mu header ya site yomwe imatumiza mawu osaka omwe alowetsedwa ku tsamba la checkout monga `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Musasankhe domain pasadakhale mu JavaScript ya header yokonzedwa mwamakonda. Header iyenera kungodutsa mawu osaka. Script ya Domain Seller checkout imawerenga `?domain_name=example`, imadzaza bokosi losaka la checkout, ndipo imayendetsa kusaka kwa kupezeka kuti kasitomala asankhe kuchokera ku domains obwezedwa.

## Khalidwe loyembekezeredwa {#expected-behaviour}

Kusaka `example` mu header kuyenera kutsegula:

```text
/register/?domain_name=example
```

Checkout iyenera kenako kuwonetsa zotsatira zosankhika monga:

- `example.com`
- `example.net`
- `example.org` palibe
- TLDs ena othandizidwa ndi provider

Pambuyo posankha zotsatira zomwe zilipo, chidule cha order chiyenera kuphatikiza chinthu cha kulembetsa domain ndi dzina la domain losankhidwa.

## Kutsimikizira {#verification}

1. Tsegulani tsamba loyamba.
2. Sakani dzina lopanda zina, mwachitsanzo `example`.
3. Tsimikizirani kuti URL ya checkout ili ndi `?domain_name=example`.
4. Tsimikizirani kuti field ya domain ya checkout ili ndi `example`.
5. Tsimikizirani kuti mndandanda wa zosankha za domain ukuoneka.
6. Dinani **Select** pa domain yomwe ilipo.
7. Tsimikizirani kuti chidule cha order chili ndi `Domain Registration - example.com` kapena domain yosankhidwa.

## Kuthetsa mavuto {#troubleshooting}

- Ngati palibe mndandanda ukuoneka, onani tab ya network ya browser pa `admin-ajax.php?action=wu_domain_search` ndipo tsimikizirani kuti imabweza `domains` kapena `results` zosakhala zopanda kanthu.
- Ngati form ya checkout ikulephera validation posunga, onjezani fields zofunikira za account monga **Username**.
- Ngati kusankha domain sikusintha cart, tsimikizirani kuti `window.wu_checkout_form` ilipo komanso kuti assets za Domain Seller checkout zayikidwa pa tsamba la checkout.
