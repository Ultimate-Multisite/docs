---
title: Chwilio Parthau yn y Pennyn
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Chwilio Parth o’r Pennyn {#header-domain-search}

Defnyddiwch y gosodiad hwn pan fyddwch eisiau ffurflen bennyn fach sy’n dechrau chwiliad parth, ac yna’n gadael i’r cwsmer ddewis o barthau sydd ar gael y tu mewn i daliad Ultimate Multisite.

## Gofynion {#requirements}

- Ultimate Multisite yn weithredol ar y rhwydwaith.
- Multisite Ultimate Domain Seller yn weithredol ar y rhwydwaith.
- O leiaf un cynnyrch cofrestru parth gweithredol gyda:
  - `domain_provider` wedi’i osod i ddarparwr wedi’i ffurfweddu.
  - TLDs a gefnogir wedi’u ffurfweddu, er enghraifft `com`, `net`, a `org`.
- Ffurflen dalu ddilys sy’n cynnwys y maes **Dewis Parth**.

## Ffurflen dalu {#checkout-form}

1. Crëwch neu golygwch y ffurflen dalu a ddefnyddir gan y dudalen gofrestru.
2. Ychwanegwch y meysydd talu/cyfrif gofynnol arferol, gan gynnwys **Enw defnyddiwr**. Caiff ffurflen dalu sy’n cynnwys y maes parth yn unig ei gwrthod gan ddilysiad Ultimate Multisite.
3. Ychwanegwch faes **Dewis Parth**.
4. Gosodwch fodd Dewis Parth i **Cofrestru’n Unig** pan ddylai’r llif ganolbwyntio ar barthau cofrestredig yn hytrach nag is-barthau am ddim neu barthau presennol.
5. Neilltuwch y cynnyrch cofrestru parth i’r maes hwnnw.

Dylai’r dudalen gofrestru rendro’r ffurflen dalu, er enghraifft:

```text
[wu_checkout slug="domain-form"]
```

## Ffurflen bennyn {#header-form}

Ychwanegwch ffurflen `GET` fach ym mhennyn y safle sy’n anfon y term chwilio a gofnodwyd i’r dudalen dalu fel `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Peidiwch â rhag-ddewis parth mewn JavaScript pennyn wedi’i addasu. Dylai’r pennyn basio’r term chwilio yn unig. Mae sgript dalu Domain Seller yn darllen `?domain_name=example`, yn llenwi blwch chwilio’r taliad, ac yn rhedeg y chwiliad argaeledd fel y gall y cwsmer ddewis o’r parthau a ddychwelwyd.

## Ymddygiad disgwyliedig {#expected-behaviour}

Dylai chwilio am `example` yn y pennyn agor:

```text
/register/?domain_name=example
```

Yna dylai’r taliad ddangos canlyniadau y gellir eu dewis megis:

- `example.com`
- `example.net`
- `example.org` ddim ar gael
- TLDs eraill a gefnogir gan y darparwr

Ar ôl dewis canlyniad sydd ar gael, dylai crynodeb yr archeb gynnwys y cynnyrch cofrestru parth a’r enw parth a ddewiswyd.

## Gwirio {#verification}

1. Agorwch y dudalen gartref.
2. Chwiliwch am enw moel, er enghraifft `example`.
3. Cadarnhewch fod URL y taliad yn cynnwys `?domain_name=example`.
4. Cadarnhewch fod maes parth y taliad yn cynnwys `example`.
5. Cadarnhewch fod rhestr o ddewisiadau parth yn ymddangos.
6. Cliciwch **Dewis** ar gyfer parth sydd ar gael.
7. Cadarnhewch fod crynodeb yr archeb yn cynnwys `Domain Registration - example.com` neu’r parth a ddewiswyd.

## Datrys problemau {#troubleshooting}

- Os nad oes rhestr yn ymddangos, gwiriwch dab rhwydwaith y porwr am `admin-ajax.php?action=wu_domain_search` a chadarnhewch ei fod yn dychwelyd `domains` neu `results` nad ydynt yn wag.
- Os yw’r ffurflen dalu yn methu dilysiad wrth gadw, ychwanegwch y meysydd cyfrif gofynnol megis **Enw defnyddiwr**.
- Os nad yw dewis parth yn diweddaru’r drol, cadarnhewch fod `window.wu_checkout_form` yn bodoli a bod asedau talu Domain Seller wedi’u llwytho ar y dudalen dalu.
