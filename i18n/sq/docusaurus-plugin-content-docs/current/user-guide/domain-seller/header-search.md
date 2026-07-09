---
title: Kërkimi i domenit në krye
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Kërkimi i domenit në krye {#header-domain-search}

Përdoreni këtë konfigurim kur dëshironi një formular të vogël në krye që nis kërkimin e një domeni, pastaj i lejon klientit të zgjedhë nga domenet e disponueshme brenda procesit të pagesës së Ultimate Multisite.

## Kërkesat {#requirements}

- Ultimate Multisite aktiv në rrjet.
- Multisite Ultimate Domain Seller aktiv në rrjet.
- Të paktën një produkt aktiv për regjistrim domeni me:
  - `domain_provider` të vendosur te një ofrues i konfiguruar.
  - TLD-të e mbështetura të konfiguruara, për shembull `com`, `net` dhe `org`.
- Një formular i vlefshëm pagese që përmban fushën **Përzgjedhja e domenit**.

## Formulari i pagesës {#checkout-form}

1. Krijoni ose redaktoni formularin e pagesës që përdoret nga faqja e regjistrimit.
2. Shtoni fushat normale të kërkuara të pagesës/llogarisë, përfshirë **Emri i përdoruesit**. Një formular pagese që përmban vetëm fushën e domenit refuzohet nga validimi i Ultimate Multisite.
3. Shtoni një fushë **Përzgjedhja e domenit**.
4. Vendosni modalitetin e Përzgjedhjes së domenit në **Vetëm regjistrim** kur rrjedha duhet të fokusohet te domenet e regjistruara, në vend të nën-domeneve falas ose domeneve ekzistuese.
5. Caktoni produktin e regjistrimit të domenit te ajo fushë.

Faqja e regjistrimit duhet të shfaqë formularin e pagesës, për shembull:

```text
[wu_checkout slug="domain-form"]
```

## Formulari i kryes {#header-form}

Shtoni një formular të vogël `GET` në kryen e faqes që dërgon termin e futur të kërkimit te faqja e pagesës si `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Mos parazgjidhni një domen në JavaScript të personalizuar të kryes. Kryeja duhet të kalojë vetëm termin e kërkimit. Skripti i pagesës i Domain Seller lexon `?domain_name=example`, plotëson kutinë e kërkimit në pagesë dhe ekzekuton kërkimin e disponueshmërisë që klienti të mund të zgjedhë nga domenet e kthyera.

## Sjellja e pritur {#expected-behaviour}

Kërkimi për `example` në krye duhet të hapë:

```text
/register/?domain_name=example
```

Pastaj pagesa duhet të shfaqë rezultate të përzgjedhshme si:

- `example.com`
- `example.net`
- `example.org` i padisponueshëm
- TLD të tjera të mbështetura nga ofruesi

Pas zgjedhjes së një rezultati të disponueshëm, përmbledhja e porosisë duhet të përfshijë produktin e regjistrimit të domenit dhe emrin e zgjedhur të domenit.

## Verifikimi {#verification}

1. Hapni faqen kryesore.
2. Kërkoni një emër të zhveshur, për shembull `example`.
3. Konfirmoni që URL-ja e pagesës përfshin `?domain_name=example`.
4. Konfirmoni që fusha e domenit në pagesë përmban `example`.
5. Konfirmoni që shfaqet një listë zgjedhjesh domenesh.
6. Klikoni **Zgjidh** për një domen të disponueshëm.
7. Konfirmoni që përmbledhja e porosisë përmban `Domain Registration - example.com` ose domenin e zgjedhur.

## Zgjidhja e problemeve {#troubleshooting}

- Nëse nuk shfaqet asnjë listë, kontrolloni skedën e rrjetit të shfletuesit për `admin-ajax.php?action=wu_domain_search` dhe konfirmoni që kthen `domains` ose `results` jo bosh.
- Nëse formulari i pagesës dështon në validim gjatë ruajtjes, shtoni fushat e kërkuara të llogarisë, si **Emri i përdoruesit**.
- Nëse zgjedhja e një domeni nuk përditëson shportën, konfirmoni që `window.wu_checkout_form` ekziston dhe që asetet e pagesës të Domain Seller janë ngarkuar në faqen e pagesës.
