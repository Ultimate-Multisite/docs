---
title: Pagpangita sa Domain sa Ulohan
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Header Domain Search

Gamita kini nga setup kung gusto ka og gamay nga header form nga magsugod og domain search, dayon tugotan ang customer nga mopili gikan sa anaa nga mga domain sulod sa Ultimate Multisite checkout.

## Mga kinahanglanon {#requirements}

- Ultimate Multisite network-active.
- Multisite Ultimate Domain Seller network-active.
- Labing menos usa ka aktibong domain registration product nga adunay:
  - `domain_provider` gitakda sa usa ka configured provider.
  - Supported TLDs gi-configure, pananglitan `com`, `net`, ug `org`.
- Usa ka valid checkout form nga adunay **Domain Selection** field.

## Checkout form {#checkout-form}

1. Paghimo o pag-edit sa checkout form nga gigamit sa registration page.
2. Idugang ang normal nga gikinahanglan nga checkout/account fields, lakip ang **Username**. Ang checkout form nga adunay domain field lamang isalikway sa Ultimate Multisite validation.
3. Idugang ang **Domain Selection** field.
4. Itakda ang Domain Selection mode ngadto sa **Register Only** kung ang flow kinahanglan mopunting sa registered domains imbis sa free subdomains o existing domains.
5. I-assign ang domain registration product ngadto niana nga field.

Ang registration page kinahanglan mo-render sa checkout form, pananglitan:

```text
[wu_checkout slug="domain-form"]
```

## Header form {#header-form}

Idugang ang gamay nga `GET` form sa site header nga mopadala sa gisulod nga search term ngadto sa checkout page isip `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Ayaw pag-preselect og domain sa custom header JavaScript. Ang header kinahanglan mopasa lamang sa search term. Ang Domain Seller checkout script mobasa sa `?domain_name=example`, mopuno sa checkout search box, ug mopadagan sa availability search aron ang customer makapili gikan sa gibalik nga mga domain.

## Gipaabot nga paggawi {#expected-behaviour}

Ang pagpangita sa `example` sa header kinahanglan moabli sa:

```text
/register/?domain_name=example
```

Ang checkout kinahanglan dayon magpakita og mapiling mga resulta sama sa:

- `example.com`
- `example.net`
- `example.org` dili available
- uban pang provider-supported TLDs

Human mopili og available nga resulta, ang order summary kinahanglan maglakip sa domain registration product ug sa napiling domain name.

## Pagpamatuod {#verification}

1. Ablihi ang home page.
2. Pangitaa ang bare name, pananglitan `example`.
3. Kumpirmaha nga ang checkout URL naglakip sa `?domain_name=example`.
4. Kumpirmaha nga ang checkout domain field adunay `example`.
5. Kumpirmaha nga makita ang lista sa mga kapilian nga domain.
6. I-click ang **Select** alang sa available nga domain.
7. Kumpirmaha nga ang order summary adunay `Domain Registration - example.com` o ang napiling domain.

## Pagsulbad sa problema {#troubleshooting}

- Kung walay lista nga makita, susiha ang browser network tab alang sa `admin-ajax.php?action=wu_domain_search` ug kumpirmaha nga nagbalik kini og dili bakante nga `domains` o `results`.
- Kung ang checkout form mapakyas sa validation samtang nag-save, idugang ang gikinahanglan nga account fields sama sa **Username**.
- Kung ang pagpili og domain dili mo-update sa cart, kumpirmaha nga anaa ang `window.wu_checkout_form` ug nga ang Domain Seller checkout assets na-load sa checkout page.
