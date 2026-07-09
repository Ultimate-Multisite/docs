---
title: Ìṣàwárí Domain Akọsori
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Ìṣàwárí Domain ní Header

Lo ìṣètò yìí nígbà tí o bá fẹ́ form kékeré ní header tí ó bẹ̀rẹ̀ ìṣàwárí domain, lẹ́yìn náà kí ó jẹ́ kí oníbàárà yan lára àwọn domain tó wà nínú Ultimate Multisite checkout.

## Àwọn ohun tí a nílò

- Ultimate Multisite network-active.
- Multisite Ultimate Domain Seller network-active.
- Ó kéré tán ọja ìforúkọsílẹ̀ domain kan tó n ṣiṣẹ́ pẹ̀lú:
  - `domain_provider` tí a ṣètò sí provider tí a ti ṣàtúnṣe.
  - Àwọn TLD tí a ṣe àtìlẹ́yìn fún tí a ti ṣètò, fún àpẹẹrẹ `com`, `net`, àti `org`.
- Form checkout tó wúlò tí ó ní field **Domain Selection**.

## Form checkout

1. Ṣẹ̀dá tàbí ṣàtúnṣe form checkout tí ojúewé ìforúkọsílẹ̀ ń lò.
2. Ṣàfikún àwọn field checkout/account dandan deede, pẹ̀lú **Username**. Form checkout tí ó ní field domain nìkan ni Ultimate Multisite validation yóò kọ̀.
3. Ṣàfikún field **Domain Selection**.
4. Ṣètò ipo Domain Selection sí **Register Only** nígbà tí sísàn yẹ kí ó dojú kọ àwọn domain tí a forúkọsílẹ̀ dípò subdomain ọ̀fẹ́ tàbí domain tó wà tẹ́lẹ̀.
5. Yan ọja ìforúkọsílẹ̀ domain sí field náà.

Ojúewé ìforúkọsílẹ̀ yẹ kí ó ṣe àfihàn form checkout, fún àpẹẹrẹ:

```text
[wu_checkout slug="domain-form"]
```

## Form header

Ṣàfikún form `GET` kékeré nínú header site tí ó fi ọ̀rọ̀ ìṣàwárí tí a tẹ̀ ránṣẹ́ sí ojúewé checkout gẹ́gẹ́ bí `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Má ṣe yan domain sílẹ̀ ṣáájú nínú JavaScript header àṣàṣe. Header yẹ kí ó kọjá ọ̀rọ̀ ìṣàwárí nìkan. Script checkout Domain Seller máa ka `?domain_name=example`, fọwọ́si àpótí ìṣàwárí checkout, ó sì ṣiṣẹ́ ìṣàwárí ìwà-nílé kí oníbàárà lè yan lára àwọn domain tí a dá padà.

## Ìhùwàsí tí a ń retí

Ṣíṣe ìṣàwárí `example` nínú header yẹ kí ó ṣí:

```text
/register/?domain_name=example
```

Checkout yẹ kí ó wá ṣàfihàn àwọn èsì tí a lè yan bíi:

- `example.com`
- `example.net`
- `example.org` kò sí
- àwọn TLD míì tí provider ṣe àtìlẹ́yìn fún

Lẹ́yìn yíyan èsì tó wà, àkótán order yẹ kí ó ní ọja ìforúkọsílẹ̀ domain àti orúkọ domain tí a yan.

## Ìjẹ́rìí

1. Ṣí ojúewé ilé.
2. Wá orúkọ pẹtẹlẹ kan, fún àpẹẹrẹ `example`.
3. Jẹ́rìí pé URL checkout ní `?domain_name=example`.
4. Jẹ́rìí pé field domain checkout ní `example`.
5. Jẹ́rìí pé àtòkọ àwọn yíyàn domain hàn.
6. Tẹ **Select** fún domain tó wà.
7. Jẹ́rìí pé àkótán order ní `Domain Registration - example.com` tàbí domain tí a yan.

## Ìṣòro àti bí a ṣe ń tún un ṣe

- Tí àtòkọ kankan kò bá hàn, ṣàyẹ̀wò taabu network browser fún `admin-ajax.php?action=wu_domain_search` kí o sì jẹ́rìí pé ó dá `domains` tàbí `results` tí kò ṣófo padà.
- Tí form checkout bá kuna validation nígbà ìfipamọ́, ṣàfikún àwọn field account dandan bíi **Username**.
- Tí yíyan domain kò bá ṣe imudojuiwọn cart, jẹ́rìí pé `window.wu_checkout_form` wà àti pé àwọn asset checkout Domain Seller ti kojọpọ̀ lórí ojúewé checkout.
