---
title: Header domein zoeken
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Header-domeinzoekopdracht

Gebruik deze setup wanneer je een klein header-formulier wilt dat een domeinzoekopdracht start en de klant daarna laat kiezen uit beschikbare domeinen binnen de Ultimate Multisite checkout.

## Vereisten

- Ultimate Multisite netwerk-actief.
- Multisite Ultimate Domain Seller netwerk-actief.
- Ten minste één actief domeinregistratieproduct met:
  - `domain_provider` ingesteld op een geconfigureerde provider.
  - Ondersteunde TLD’s geconfigureerd, bijvoorbeeld `com`, `net` en `org`.
- Een geldig checkout-formulier met het veld **Domeinselectie**.

## Checkout-formulier

1. Maak of bewerk het checkout-formulier dat door de registratiepagina wordt gebruikt.
2. Voeg de normale vereiste checkout/account-velden toe, inclusief **Gebruikersnaam**. Een checkout-formulier dat alleen het domeinveld bevat, wordt door de validatie van Ultimate Multisite geweigerd.
3. Voeg een veld **Domeinselectie** toe.
4. Zet de modus Domeinselectie op **Alleen registreren** wanneer de flow zich moet richten op geregistreerde domeinen in plaats van gratis subdomeinen of bestaande domeinen.
5. Wijs het domeinregistratieproduct toe aan dat veld.

De registratiepagina moet het checkout-formulier weergeven, bijvoorbeeld:

```text
[wu_checkout slug="domain-form"]
```

## Header-formulier

Voeg een klein `GET`-formulier toe in de site-header dat de ingevoerde zoekterm naar de checkout-pagina stuurt als `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Selecteer geen domein vooraf in aangepaste header-JavaScript. De header moet alleen de zoekterm doorgeven. Het Domain Seller checkout-script leest `?domain_name=example`, vult het checkout-zoekvak in en voert de beschikbaarheidszoekopdracht uit, zodat de klant kan kiezen uit de geretourneerde domeinen.

## Verwacht gedrag

Zoeken naar `example` in de header zou moeten openen:

```text
/register/?domain_name=example
```

De checkout moet daarna selecteerbare resultaten tonen, zoals:

- `example.com`
- `example.net`
- `example.org` niet beschikbaar
- andere door de provider ondersteunde TLD’s

Na het selecteren van een beschikbaar resultaat moet de bestelsamenvatting het domeinregistratieproduct en de geselecteerde domeinnaam bevatten.

## Verificatie

1. Open de homepagina.
2. Zoek naar een kale naam, bijvoorbeeld `example`.
3. Bevestig dat de checkout-URL `?domain_name=example` bevat.
4. Bevestig dat het checkout-domeinveld `example` bevat.
5. Bevestig dat er een lijst met domeinkeuzes verschijnt.
6. Klik op **Selecteren** voor een beschikbaar domein.
7. Bevestig dat de bestelsamenvatting `Domain Registration - example.com` of het geselecteerde domein bevat.

## Probleemoplossing

- Als er geen lijst verschijnt, controleer dan het netwerk-tabblad van de browser op `admin-ajax.php?action=wu_domain_search` en bevestig dat dit niet-lege `domains` of `results` retourneert.
- Als de validatie van het checkout-formulier mislukt tijdens het opslaan, voeg dan de vereiste account-velden toe, zoals **Gebruikersnaam**.
- Als het selecteren van een domein de winkelwagen niet bijwerkt, bevestig dan dat `window.wu_checkout_form` bestaat en dat de Domain Seller checkout-assets op de checkout-pagina zijn geladen.
