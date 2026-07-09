---
title: Patlo ea Domain ea Sehlooho
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Patlo ya Domain ya Header {#header-domain-search}

Sebedisa tlhophiso ena ha o batla foromo e nyane ya header e qalang patlo ya domain, ebe e dumella moreki ho kgetha ho tswa ho di-domain tse fumanehang ka hare ho tefo ya Ultimate Multisite.

## Ditlhoko {#requirements}

- Ultimate Multisite e sebetsa boemong ba network.
- Multisite Ultimate Domain Seller e sebetsa boemong ba network.
- Bonyane sehlahisoa se le seng se sebetsang sa ngodiso ya domain se nang le:
  - `domain_provider` e behilweng ho mofani ya hlophisitsweng.
  - Di-TLD tse tshehetswang di hlophisitswe, mohlala `com`, `net`, le `org`.
- Foromo ya tefo e nepahetseng e nang le lebala la **Kgetho ya Domain**.

## Foromo ya tefo {#checkout-form}

1. Etsa kapa o hlophise foromo ya tefo e sebediswang ke leqephe la ngodiso.
2. Kenya mabala a tlwaelehileng a hlokahalang a tefo/akhaonto, ho kenyeletsa **Lebitso la mosebedisi**. Foromo ya tefo e nang le lebala la domain feela e hanelwa ke netefatso ya Ultimate Multisite.
3. Kenya lebala la **Kgetho ya Domain**.
4. Beha mokgwa wa Kgetho ya Domain ho **Ngodisa Feela** ha phallo e lokela ho tsepamisa maikutlo ho di-domain tse ngodisitsweng ho ena le di-subdomain tsa mahala kapa di-domain tse seng di le teng.
5. Abela sehlahisoa sa ngodiso ya domain lebaleng leo.

Leqephe la ngodiso le lokela ho hlahisa foromo ya tefo, mohlala:

```text
[wu_checkout slug="domain-form"]
```

## Foromo ya header {#header-form}

Kenya foromo e nyane ya `GET` ho header ya site e romelang lentswe la patlo le kentsoeng leqepheng la tefo e le `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

O se ke wa kgetha domain esale pele ka JavaScript ya header e ikgethileng. Header e lokela ho fetisa lentswe la patlo feela. Script ya tefo ya Domain Seller e bala `?domain_name=example`, e tlatsa lebokose la patlo la tefo, mme e tsamaisa patlo ya boteng hore moreki a kgone ho kgetha ho tswa ho di-domain tse kgutlisitsweng.

## Boitshwaro bo lebelletsweng {#expected-behaviour}

Ho batla `example` ho header ho lokela ho bula:

```text
/register/?domain_name=example
```

Tefo e lokela ho bontsha diphetho tse ka kgethwang tse kang:

- `example.com`
- `example.net`
- `example.org` ha e fumanehe
- Di-TLD tse ding tse tshehetswang ke mofani

Ka mora ho kgetha sephetho se fumanehang, kakaretso ya odara e lokela ho kenyelletsa sehlahisoa sa ngodiso ya domain le lebitso la domain le kgethilweng.

## Netefatso {#verification}

1. Bula leqephe la lapeng.
2. Batla lebitso le se nang sehlomathiso, mohlala `example`.
3. Netefatsa hore URL ya tefo e kenyelletsa `?domain_name=example`.
4. Netefatsa hore lebala la domain la tefo le na le `example`.
5. Netefatsa hore lenane la dikgetho tsa domain le a hlaha.
6. Tobetsa **Kgetha** bakeng sa domain e fumanehang.
7. Netefatsa hore kakaretso ya odara e na le `Domain Registration - example.com` kapa domain e kgethilweng.

## Tharollo ya mathata {#troubleshooting}

- Haeba ho se lenane le hlahang, hlahloba tab ya network ya sebadi bakeng sa `admin-ajax.php?action=wu_domain_search` mme o netefatse hore e kgutlisa `domains` kapa `results` tse seng letho.
- Haeba foromo ya tefo e hloleha netefatso ha e bolokwa, kenya mabala a hlokahalang a akhaonto a kang **Lebitso la mosebedisi**.
- Haeba ho kgetha domain ho sa ntjhafatse kariki, netefatsa hore `window.wu_checkout_form` e teng le hore thepa ya tefo ya Domain Seller e laetswe leqepheng la tefo.
