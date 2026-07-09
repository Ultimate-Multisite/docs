---
title: Domænesøgning i sidehoved
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Header-domænesøgning

Brug denne opsætning, når du ønsker en lille header-form, der starter en domænesøgning og derefter lader kunden vælge mellem tilgængelige domæner inde i Ultimate Multisite checkout.

## Krav

- Ultimate Multisite netværksaktiv.
- Multisite Ultimate Domain Seller netværksaktiv.
- Mindst ét aktivt domæneregistreringsprodukt med:
  - `domain_provider` sat til en konfigureret udbyder.
  - Understøttede TLD'er konfigureret, for eksempel `com`, `net` og `org`.
- En gyldig checkout-form, der indeholder feltet **Domænevalg**.

## Checkout-form

1. Opret eller rediger checkout-formen, der bruges af registreringssiden.
2. Tilføj de normale påkrævede checkout-/Account-felter, inklusive **Brugernavn**. En checkout-form, der kun indeholder domænefeltet, afvises af Ultimate Multisite-validering.
3. Tilføj et **Domænevalg**-felt.
4. Sæt Domain Selection-tilstanden til **Kun registrering**, når flowet skal fokusere på registrerede domæner frem for gratis underdomæner eller eksisterende domæner.
5. Tildel domæneregistreringsproduktet til det felt.

Registreringssiden bør gengive checkout-formen, for eksempel:

```text
[wu_checkout slug="domain-form"]
```

## Header-form

Tilføj en lille `GET`-form i sidens header, der sender det indtastede søgeord til checkout-siden som `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Forudvælg ikke et domæne i brugerdefineret header-JavaScript. Headeren bør kun videregive søgeordet. Domain Seller checkout-scriptet læser `?domain_name=example`, udfylder checkout-søgefeltet og kører tilgængelighedssøgningen, så kunden kan vælge mellem de returnerede domæner.

## Forventet adfærd

Søgning efter `example` i headeren bør åbne:

```text
/register/?domain_name=example
```

Checkout bør derefter vise valgbare resultater såsom:

- `example.com`
- `example.net`
- `example.org` ikke tilgængeligt
- andre udbyder-understøttede TLD'er

Efter valg af et tilgængeligt resultat bør ordreoversigten indeholde domæneregistreringsproduktet og det valgte domænenavn.

## Verifikation

1. Åbn forsiden.
2. Søg efter et nøgent navn, for eksempel `example`.
3. Bekræft, at checkout-URL'en indeholder `?domain_name=example`.
4. Bekræft, at checkout-domænefeltet indeholder `example`.
5. Bekræft, at en liste med domænevalg vises.
6. Klik på **Vælg** for et tilgængeligt domæne.
7. Bekræft, at ordreoversigten indeholder `Domain Registration - example.com` eller det valgte domæne.

## Fejlfinding

- Hvis ingen liste vises, skal du kontrollere browserens netværksfane for `admin-ajax.php?action=wu_domain_search` og bekræfte, at den returnerer ikke-tomme `domains` eller `results`.
- Hvis checkout-formen fejler validering under lagring, skal du tilføje de påkrævede Account-felter såsom **Brugernavn**.
- Hvis valg af et domæne ikke opdaterer kurven, skal du bekræfte, at `window.wu_checkout_form` findes, og at Domain Seller checkout-assets er indlæst på checkout-siden.
