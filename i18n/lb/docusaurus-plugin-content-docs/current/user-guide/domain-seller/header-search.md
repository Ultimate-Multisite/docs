---
title: Header-Domain-Sich
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Header Domain Search

Benotzt dëse Setup, wann Dir e klenge Header-Formulaire wëllt, deen eng Domain-Sich start an de Client duerno aus verfügbare Domains am Ultimate Multisite Checkout auswiele léisst.

## Ufuerderungen {#requirements}

- Ultimate Multisite network-active.
- Multisite Ultimate Domain Seller network-active.
- Mindestens ee aktive Domain-Registréierungsprodukt mat:
  - `domain_provider` op e konfiguréierte Provider gesat.
  - Ënnerstëtzt TLDs konfiguréiert, zum Beispill `com`, `net` an `org`.
- E valabele Checkout-Formulaire mat dem Feld **Domain Selection**.

## Checkout-Formulaire {#checkout-form}

1. Erstellt oder ännert de Checkout-Formulaire, deen vun der Registréierungssäit benotzt gëtt.
2. Füügt déi normal erfuerderlech Checkout-/Account-Felder dobäi, inklusiv **Username**. E Checkout-Formulaire, deen nëmmen d’Domain-Feld enthält, gëtt vun der Ultimate Multisite-Validéierung refuséiert.
3. Füügt e Feld **Domain Selection** dobäi.
4. Setzt de Modus vun Domain Selection op **Register Only**, wann de Flow sech op registréiert Domains konzentréiere soll amplaz op gratis Subdomains oder existent Domains.
5. Wist dem Feld d’Domain-Registréierungsprodukt zou.

D’Registréierungssäit soll de Checkout-Formulaire rendéieren, zum Beispill:

```text
[wu_checkout slug="domain-form"]
```

## Header-Formulaire {#header-form}

Füügt e klenge `GET`-Formulaire am Site-Header dobäi, deen den aginnen Sichbegrëff als `domain_name` un d’Checkout-Säit schéckt:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Wielt keng Domain am viraus iwwer personaliséiert Header-JavaScript aus. Den Header soll nëmmen de Sichbegrëff weiderginn. D’Domain Seller Checkout-Skript liest `?domain_name=example`, fëllt d’Checkout-Sichkëscht aus a féiert d’Verfügbarkeetssich aus, sou datt de Client aus de zeréckginnene Domains auswiele kann.

## Erwaart Verhalen {#expected-behaviour}

Eng Sich no `example` am Header soll dëst opmaachen:

```text
/register/?domain_name=example
```

De Checkout soll duerno auswielbar Resultater weisen, wéi:

- `example.com`
- `example.net`
- `example.org` net verfügbar
- aner vum Provider ënnerstëtzt TLDs

Nodeems en verfügbaart Resultat ausgewielt gouf, soll d’Bestellungsresumé d’Domain-Registréierungsprodukt an den ausgewielten Domainnumm enthalen.

## Verifizéierung {#verification}

1. Maacht d’Startsäit op.
2. Sicht no engem blousse Numm, zum Beispill `example`.
3. Confirméiert, datt d’Checkout-URL `?domain_name=example` enthält.
4. Confirméiert, datt d’Checkout-Domain-Feld `example` enthält.
5. Confirméiert, datt eng Lëscht mat Domain-Choixen erschéngt.
6. Klickt op **Select** fir eng verfügbar Domain.
7. Confirméiert, datt de Bestellungsresumé `Domain Registration - example.com` oder déi ausgewielten Domain enthält.

## Problembehandlung {#troubleshooting}

- Wann keng Lëscht erschéngt, kontrolléiert am Browser-Netzwierk-Tab no `admin-ajax.php?action=wu_domain_search` a confirméiert, datt et net-eidel `domains` oder `results` zeréckgëtt.
- Wann de Checkout-Formulaire beim Späichere bei der Validéierung feelt, füügt déi erfuerderlech Account-Felder wéi **Username** dobäi.
- Wann d’Auswiele vun enger Domain de Weenchen net aktualiséiert, confirméiert, datt `window.wu_checkout_form` existéiert an datt d’Domain Seller Checkout-Assets op der Checkout-Säit geluede sinn.
