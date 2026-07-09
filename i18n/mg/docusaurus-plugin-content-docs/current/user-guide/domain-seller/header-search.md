---
title: Lohatenin’ny Fikarohana Domena
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Fikarohana Domain amin'ny Header {#header-domain-search}

Ampiasao ity fanamboarana ity rehefa mila endrika kely ao amin'ny header ianao izay manomboka fikarohana domain, avy eo mamela ny mpanjifa hisafidy amin'ireo domain misy ao anatin'ny fandoavana Ultimate Multisite.

## Fepetra takiana {#requirements}

- Ultimate Multisite network-active.
- Multisite Ultimate Domain Seller network-active.
- Farafahakeliny vokatra fisoratana anarana domain iray mavitrika miaraka amin'ny:
  - `domain_provider` napetraka ho mpamatsy efa voarindra.
  - TLD tohanana voarindra, ohatra `com`, `net`, ary `org`.
- Endrika fandoavana manan-kery misy ny saha **Safidy Domain**.

## Endrika fandoavana {#checkout-form}

1. Mamoròna na ovay ny endrika fandoavana ampiasain'ny pejy fisoratana anarana.
2. Ampio ireo saha fandoavana/Account takiana mahazatra, anisan'izany ny **Anaran'ny mpampiasa**. Lavin'ny fanamarinana Ultimate Multisite ny endrika fandoavana izay tsy misy afa-tsy ny saha domain.
3. Ampio saha **Safidy Domain**.
4. Apetraho ho **Fisoratana Anarana Ihany** ny maody Safidy Domain rehefa tokony hifantoka amin'ny domain voasoratra anarana ny fikorianana fa tsy amin'ny subdomain maimaim-poana na domain efa misy.
5. Atolory amin'io saha io ny vokatra fisoratana anarana domain.

Tokony haneho ny endrika fandoavana ny pejy fisoratana anarana, ohatra:

```text
[wu_checkout slug="domain-form"]
```

## Endrika header {#header-form}

Ampio endrika `GET` kely ao amin'ny header an'ilay tranonkala izay mandefa ny teny fikarohana nampidirina mankany amin'ny pejy fandoavana ho `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Aza mifidy domain mialoha ao amin'ny JavaScript header namboarina manokana. Tokony hampita fotsiny ny teny fikarohana ny header. Ny script fandoavana Domain Seller dia mamaky `?domain_name=example`, mameno ny boaty fikarohana ao amin'ny fandoavana, ary mampandeha ny fikarohana fahafahana mba hahafahan'ny mpanjifa misafidy amin'ireo domain naverina.

## Fitondran-tena andrasana {#expected-behaviour}

Ny fikarohana `example` ao amin'ny header dia tokony hanokatra:

```text
/register/?domain_name=example
```

Avy eo ny fandoavana dia tokony haneho valiny azo fidina toy ny:

- `example.com`
- `example.net`
- `example.org` tsy misy
- TLD hafa tohanan'ny mpamatsy

Rehefa avy mifidy valiny misy, ny famintinana kaomandy dia tokony ahitana ny vokatra fisoratana anarana domain sy ny anaran-domain voafidy.

## Fanamarinana {#verification}

1. Sokafy ny pejy fandraisana.
2. Mitadiava anarana tsotra, ohatra `example`.
3. Hamafiso fa misy `?domain_name=example` ny URL fandoavana.
4. Hamafiso fa misy `example` ny saha domain ao amin'ny fandoavana.
5. Hamafiso fa miseho ny lisitry ny safidy domain.
6. Tsindrio **Safidio** ho an'ny domain misy.
7. Hamafiso fa misy `Domain Registration - example.com` na ilay domain voafidy ny famintinana kaomandy.

## Famahana olana {#troubleshooting}

- Raha tsy misy lisitra miseho, jereo ny tabilao tambajotran'ny navigateur ho an'ny `admin-ajax.php?action=wu_domain_search` ary hamafiso fa mamerina `domains` na `results` tsy foana izy.
- Raha tsy mahomby ny fanamarinana ny endrika fandoavana rehefa mitahiry, ampio ireo saha Account takiana toy ny **Anaran'ny mpampiasa**.
- Raha tsy manavao ny harona ny fisafidianana domain iray, hamafiso fa misy ny `window.wu_checkout_form` ary voampiditra ao amin'ny pejy fandoavana ny assets fandoavana Domain Seller.
