---
title: Antèt Rechèch Domèn
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Rechèch Domèn nan Header

Sèvi ak konfigirasyon sa a lè ou vle yon ti fòm nan header ki kòmanse yon rechèch domèn, epi ki kite kliyan an chwazi pami domèn ki disponib yo andedan checkout Ultimate Multisite la.

## Kondisyon

- Ultimate Multisite network-active.
- Multisite Ultimate Domain Seller network-active.
- Omwen yon pwodwi enskripsyon domèn aktif avèk:
  - `domain_provider` mete sou yon founisè ki konfigire.
  - TLD ki sipòte yo konfigire, pa egzanp `com`, `net`, ak `org`.
- Yon fòm checkout valid ki genyen chan **Domain Selection** an.

## Fòm checkout

1. Kreye oswa modifye fòm checkout paj enskripsyon an itilize a.
2. Ajoute chan checkout/Account nòmal ki obligatwa yo, enkli **Username**. Yon fòm checkout ki genyen sèlman chan domèn nan ap rejte pa validasyon Ultimate Multisite.
3. Ajoute yon chan **Domain Selection**.
4. Mete mòd Domain Selection an sou **Register Only** lè koule a ta dwe konsantre sou domèn anrejistre olye de subdomain gratis oswa domèn ki deja egziste.
5. Asiyen pwodwi enskripsyon domèn nan ak chan sa a.

Paj enskripsyon an ta dwe rann fòm checkout la, pa egzanp:

```text
[wu_checkout slug="domain-form"]
```

## Fòm header

Ajoute yon ti fòm `GET` nan header sit la ki voye tèm rechèch yo antre a bay paj checkout la kòm `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Pa preseleksyone yon domèn nan JavaScript header pèsonalize. Header la ta dwe sèlman pase tèm rechèch la. Script checkout Domain Seller la li `?domain_name=example`, ranpli bwat rechèch checkout la, epi lanse rechèch disponiblite a pou kliyan an ka chwazi pami domèn yo retounen yo.

## Konpòtman yo atann

Lè w ap chèche `example` nan header la, sa ta dwe ouvri:

```text
/register/?domain_name=example
```

Checkout la ta dwe apre sa montre rezilta ou ka chwazi tankou:

- `example.com`
- `example.net`
- `example.org` pa disponib
- lòt TLD founisè a sipòte

Apre ou chwazi yon rezilta ki disponib, rezime kòmand lan ta dwe gen ladan pwodwi enskripsyon domèn nan ak non domèn ou chwazi a.

## Verifikasyon

1. Ouvri paj dakèy la.
2. Chèche yon non senp, pa egzanp `example`.
3. Konfime URL checkout la genyen `?domain_name=example`.
4. Konfime chan domèn checkout la genyen `example`.
5. Konfime yon lis chwa domèn parèt.
6. Klike **Select** pou yon domèn ki disponib.
7. Konfime rezime kòmand lan genyen `Domain Registration - example.com` oswa domèn ou chwazi a.

## Depanaj

- Si pa gen okenn lis ki parèt, tcheke onglet rezo navigatè a pou `admin-ajax.php?action=wu_domain_search` epi konfime li retounen `domains` oswa `results` ki pa vid.
- Si fòm checkout la echwe validasyon pandan anrejistreman, ajoute chan Account obligatwa yo tankou **Username**.
- Si lè w chwazi yon domèn sa pa mete panye a ajou, konfime `window.wu_checkout_form` egziste epi ke assets checkout Domain Seller yo chaje sou paj checkout la.
