---
title: Overskrift for domenesøk
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Header Domain Search

Bruk dette oppsettet når du vil ha et lite skjema i headeren som starter et domenesøk, og deretter lar kunden velge blant tilgjengelige domener inne i Ultimate Multisite checkout.

## Krav

- Ultimate Multisite nettverksaktiv.
- Multisite Ultimate Domain Seller nettverksaktiv.
- Minst ett aktivt domeneregistreringsprodukt med:
  - `domain_provider` satt til en konfigurert leverandør.
  - Støttede TLD-er konfigurert, for eksempel `com`, `net` og `org`.
- Et gyldig checkout-skjema som inneholder feltet **Domain Selection**.

## Checkout-skjema

1. Opprett eller rediger checkout-skjemaet som brukes av registreringssiden.
2. Legg til de vanlige påkrevde checkout-/Account-feltene, inkludert **Username**. Et checkout-skjema som bare inneholder domenefeltet, blir avvist av Ultimate Multisite-validering.
3. Legg til et **Domain Selection**-felt.
4. Sett Domain Selection-modusen til **Register Only** når flyten skal fokusere på registrerte domener i stedet for gratis underdomener eller eksisterende domener.
5. Tilordne domeneregistreringsproduktet til det feltet.

Registreringssiden bør vise checkout-skjemaet, for eksempel:

```text
[wu_checkout slug="domain-form"]
```

## Header-skjema

Legg til et lite `GET`-skjema i site-headeren som sender det angitte søkeordet til checkout-siden som `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Ikke forhåndsvelg et domene i tilpasset header-JavaScript. Headeren skal bare sende søkeordet. Domain Seller checkout-skriptet leser `?domain_name=example`, fyller ut checkout-søkefeltet og kjører tilgjengelighetssøket slik at kunden kan velge blant domenene som returneres.

## Forventet oppførsel

Søk etter `example` i headeren skal åpne:

```text
/register/?domain_name=example
```

Checkout skal deretter vise valgbare resultater som:

- `example.com`
- `example.net`
- `example.org` utilgjengelig
- andre leverandørstøttede TLD-er

Etter at et tilgjengelig resultat er valgt, skal bestillingssammendraget inkludere domeneregistreringsproduktet og det valgte domenenavnet.

## Verifisering

1. Åpne startsiden.
2. Søk etter et rent navn, for eksempel `example`.
3. Bekreft at checkout-URL-en inkluderer `?domain_name=example`.
4. Bekreft at checkout-domenefeltet inneholder `example`.
5. Bekreft at en liste med domenevalg vises.
6. Klikk på **Velg** for et tilgjengelig domene.
7. Bekreft at bestillingssammendraget inneholder `Domain Registration - example.com` eller det valgte domenet.

## Feilsøking

- Hvis ingen liste vises, sjekk nettverksfanen i nettleseren for `admin-ajax.php?action=wu_domain_search` og bekreft at den returnerer ikke-tomme `domains` eller `results`.
- Hvis checkout-skjemaet feiler validering under lagring, legg til de påkrevde Account-feltene, som **Username**.
- Hvis valg av et domene ikke oppdaterer handlekurven, bekreft at `window.wu_checkout_form` finnes og at Domain Seller checkout-ressursene er lastet inn på checkout-siden.
