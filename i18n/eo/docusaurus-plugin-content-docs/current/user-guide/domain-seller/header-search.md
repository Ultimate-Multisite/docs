---
title: Serĉo de domajno en kaplinio
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Serĉo de domajno en kaplinio {#header-domain-search}

Uzu ĉi tiun agordon kiam vi volas malgrandan formularon en la kaplinio, kiu komencas domajnan serĉon, poste lasas la klienton elekti el disponeblaj domajnoj ene de la Ultimate Multisite checkout.

## Postuloj {#requirements}

- Ultimate Multisite network-active.
- Multisite Ultimate Domain Seller network-active.
- Almenaŭ unu aktiva domajna registra produkto kun:
  - `domain_provider` agordita al konfigurita provizanto.
  - Subtenataj TLDs agorditaj, ekzemple `com`, `net`, kaj `org`.
- Valida checkout formularo enhavanta la kampon **Elekto de domajno**.

## Checkout formularo {#checkout-form}

1. Kreu aŭ redaktu la checkout formularon uzatan de la registra paĝo.
2. Aldonu la normalajn postulatajn checkout/account kampojn, inkluzive de **Username**. Checkout formularo enhavanta nur la domajnan kampon estas rifuzata de Ultimate Multisite validigo.
3. Aldonu kampon **Elekto de domajno**.
4. Agordu la reĝimon Domain Selection al **Nur registri** kiam la fluo devus fokusiĝi al registritaj domajnoj prefere ol senpagaj subdomajnoj aŭ ekzistantaj domajnoj.
5. Asignu la domajnan registran produkton al tiu kampo.

La registra paĝo devus bildigi la checkout formularon, ekzemple:

```text
[wu_checkout slug="domain-form"]
```

## Kaplinia formularo {#header-form}

Aldonu malgrandan `GET` formularon en la site kaplinio, kiu sendas la enigitan serĉterminon al la checkout paĝo kiel `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Ne antaŭelektu domajnon en propra kaplinia JavaScript. La kaplinio devus nur transdoni la serĉterminon. La Domain Seller checkout skripto legas `?domain_name=example`, plenigas la checkout serĉkeston, kaj rulas la disponeblecan serĉon por ke la kliento povu elekti el la revenigitaj domajnoj.

## Atendata konduto {#expected-behaviour}

Serĉi `example` en la kaplinio devus malfermi:

```text
/register/?domain_name=example
```

La checkout devus tiam montri elekteblajn rezultojn kiel:

- `example.com`
- `example.net`
- `example.org` nedisponebla
- aliaj TLDs subtenataj de la provizanto

Post elekto de disponebla rezulto, la menda resumo devus inkluzivi la domajnan registran produkton kaj la elektitan domajnan nomon.

## Kontrolo {#verification}

1. Malfermu la hejmpaĝon.
2. Serĉu nudan nomon, ekzemple `example`.
3. Konfirmu ke la checkout URL inkluzivas `?domain_name=example`.
4. Konfirmu ke la checkout domajna kampo enhavas `example`.
5. Konfirmu ke aperas listo de domajnaj elektoj.
6. Alklaku **Elekti** por disponebla domajno.
7. Konfirmu ke la menda resumo enhavas `Domain Registration - example.com` aŭ la elektitan domajnon.

## Problemosolvado {#troubleshooting}

- Se neniu listo aperas, kontrolu la retan langeton de la retumilo por `admin-ajax.php?action=wu_domain_search` kaj konfirmu ke ĝi revenigas ne-malplenajn `domains` aŭ `results`.
- Se la checkout formularo malsukcesas validigon dum konservado, aldonu la postulatajn account kampojn kiel **Username**.
- Se elekti domajnon ne ĝisdatigas la ĉaron, konfirmu ke `window.wu_checkout_form` ekzistas kaj ke la Domain Seller checkout assets estas ŝargitaj sur la checkout paĝo.
