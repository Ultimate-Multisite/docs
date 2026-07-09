---
title: Domänsökning i sidhuvud
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Sökning efter domän i header

Använd den här konfigurationen när du vill ha ett litet formulär i headern som startar en domänsökning och sedan låter kunden välja bland tillgängliga domäner inne i Ultimate Multisite checkout.

## Krav

- Ultimate Multisite nätverksaktiverat.
- Multisite Ultimate Domain Seller nätverksaktiverat.
- Minst en aktiv domänregistreringsprodukt med:
  - `domain_provider` inställd på en konfigurerad leverantör.
  - Stödda TLD:er konfigurerade, till exempel `com`, `net` och `org`.
- Ett giltigt checkout-formulär som innehåller fältet **Domänval**.

## Checkout-formulär

1. Skapa eller redigera checkout-formuläret som används av registreringssidan.
2. Lägg till de vanliga obligatoriska checkout-/Account-fälten, inklusive **Användarnamn**. Ett checkout-formulär som endast innehåller domänfältet avvisas av Ultimate Multisite-valideringen.
3. Lägg till ett fält för **Domänval**.
4. Ställ in läget för Domain Selection på **Endast registrering** när flödet ska fokusera på registrerade domäner snarare än gratis subdomäner eller befintliga domäner.
5. Tilldela domänregistreringsprodukten till det fältet.

Registreringssidan bör rendera checkout-formuläret, till exempel:

```text
[wu_checkout slug="domain-form"]
```

## Header-formulär

Lägg till ett litet `GET`-formulär i webbplatsens header som skickar den angivna söktermen till checkout-sidan som `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Förvälj inte en domän i anpassad JavaScript för headern. Headern ska endast skicka söktermen. Domain Seller checkout-scriptet läser `?domain_name=example`, fyller i checkout-sökrutan och kör tillgänglighetssökningen så att kunden kan välja bland de returnerade domänerna.

## Förväntat beteende

Att söka efter `example` i headern bör öppna:

```text
/register/?domain_name=example
```

Checkout bör sedan visa valbara resultat som:

- `example.com`
- `example.net`
- `example.org` otillgänglig
- andra TLD:er som stöds av leverantören

Efter att ha valt ett tillgängligt resultat bör ordersammanfattningen inkludera domänregistreringsprodukten och det valda domännamnet.

## Verifiering

1. Öppna startsidan.
2. Sök efter ett naket namn, till exempel `example`.
3. Bekräfta att checkout-URL:en innehåller `?domain_name=example`.
4. Bekräfta att checkout-domänfältet innehåller `example`.
5. Bekräfta att en lista med domänval visas.
6. Klicka på **Välj** för en tillgänglig domän.
7. Bekräfta att ordersammanfattningen innehåller `Domain Registration - example.com` eller den valda domänen.

## Felsökning

- Om ingen lista visas, kontrollera webbläsarens nätverksflik för `admin-ajax.php?action=wu_domain_search` och bekräfta att den returnerar icke-tomma `domains` eller `results`.
- Om checkout-formuläret misslyckas med valideringen vid sparande, lägg till de obligatoriska Account-fälten såsom **Användarnamn**.
- Om valet av en domän inte uppdaterar varukorgen, bekräfta att `window.wu_checkout_form` finns och att Domain Seller checkout-resurserna är laddade på checkout-sidan.
