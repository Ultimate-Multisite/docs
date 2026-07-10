---
title: Kev Tshawb Nrhiav Domain Hauv Header
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Header Domain Search {#header-domain-search}

Siv qhov kev teeb tsa no thaum koj xav tau ib daim form me hauv header uas pib tshawb nrhiav domain, ces cia tus customer xaiv ntawm cov domain uas muaj nyob hauv Ultimate Multisite checkout.

## Yam yuav tsum muaj {#requirements}

- Ultimate Multisite network-active.
- Multisite Ultimate Domain Seller network-active.
- Yam tsawg kawg ib qho domain registration product uas active nrog:
  - `domain_provider` teeb rau ib tug provider uas twb configure lawm.
  - Cov TLDs uas txhawb tau twb configure lawm, piv txwv li `com`, `net`, thiab `org`.
- Ib daim checkout form siv tau uas muaj **Domain Selection** field.

## Checkout form {#checkout-form}

1. Tsim lossis kho daim checkout form uas siv los ntawm nplooj registration.
2. Ntxiv cov checkout/account fields uas ib txwm yuav tsum muaj, nrog rau **Username**. Ib daim checkout form uas muaj tsuas yog domain field xwb yuav raug Ultimate Multisite validation tsis lees txais.
3. Ntxiv ib qho **Domain Selection** field.
4. Teeb Domain Selection mode rau **Register Only** thaum flow yuav tsum tsom rau cov domain uas registered lawm es tsis yog free subdomains lossis existing domains.
5. Muab domain registration product assign rau field ntawd.

Nplooj registration yuav tsum render daim checkout form, piv txwv li:

```text
[wu_checkout slug="domain-form"]
```

## Header form {#header-form}

Ntxiv ib daim `GET` form me hauv site header uas xa lo lus tshawb nrhiav uas tau sau mus rau checkout page ua `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Tsis txhob preselect ib lub domain hauv custom header JavaScript. Header yuav tsum tsuas dhau lo lus tshawb nrhiav xwb. Domain Seller checkout script nyeem `?domain_name=example`, sau rau checkout search box, thiab khiav availability search kom customer xaiv tau ntawm cov domain uas rov qab los.

## Cwj pwm uas xav kom muaj {#expected-behaviour}

Tshawb `example` hauv header yuav tsum qhib:

```text
/register/?domain_name=example
```

Checkout ces yuav tsum qhia cov txiaj ntsig uas xaiv tau xws li:

- `example.com`
- `example.net`
- `example.org` tsis muaj
- lwm cov TLDs uas provider txhawb

Tom qab xaiv ib qho txiaj ntsig uas muaj, order summary yuav tsum muaj domain registration product thiab lub domain name uas xaiv lawm.

## Kev xyuas kom tseeb {#verification}

1. Qhib home page.
2. Tshawb ib lub npe tsis muaj TLD, piv txwv li `example`.
3. Paub meej tias checkout URL muaj `?domain_name=example`.
4. Paub meej tias checkout domain field muaj `example`.
5. Paub meej tias muaj ib daim list domain choices tshwm.
6. Nyem **Select** rau ib lub domain uas muaj.
7. Paub meej tias order summary muaj `Domain Registration - example.com` lossis lub domain uas xaiv lawm.

## Troubleshooting {#troubleshooting}

- Yog tsis muaj list tshwm, xyuas browser network tab rau `admin-ajax.php?action=wu_domain_search` thiab paub meej tias nws rov qab los nrog `domains` lossis `results` uas tsis yog khoob.
- Yog checkout form validation tsis dhau thaum saving, ntxiv cov account fields uas yuav tsum muaj xws li **Username**.
- Yog xaiv ib lub domain tsis hloov cart, paub meej tias `window.wu_checkout_form` muaj nyob thiab Domain Seller checkout assets raug load rau checkout page.
