---
title: Rapu Rohe Pane
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Rapu Rohe Pane {#header-domain-search}

Whakamahia tēnei whakaritenga ina hiahia koe ki tētahi puka pane iti e tīmata ana i te rapu rohe, kātahi ka tuku i te kiritaki kia kōwhiri i ngā rohe e wātea ana i roto i te takiutu Ultimate Multisite.

## Ngā whakaritenga {#requirements}

- Ultimate Multisite kua whakahohehia ki te whatunga.
- Multisite Ultimate Domain Seller kua whakahohehia ki te whatunga.
- Kia kotahi neke atu rānei te hua rēhita rohe hohe me:
  - `domain_provider` kua tautuhia ki tētahi kaiwhakarato kua whirihorahia.
  - Ngā TLD e tautokona ana kua whirihorahia, hei tauira `com`, `net`, me `org`.
- Tētahi puka takiutu whaimana kei roto te āpure **Kōwhiringa Rohe**.

## Puka takiutu {#checkout-form}

1. Waihangatia, whakatikaina rānei te puka takiutu e whakamahia ana e te whārangi rēhitatanga.
2. Tāpirihia ngā āpure takiutu/pūkete e hiahiatia ana, tae atu ki **Ingoa kaiwhakamahi**. Ka whakakāhoretia e te manatoko Ultimate Multisite tētahi puka takiutu kei roto ko te āpure rohe anake.
3. Tāpirihia tētahi āpure **Kōwhiringa Rohe**.
4. Tautuhia te aratau Kōwhiringa Rohe ki **Rēhita Anake** ina me arotahi te rerenga ki ngā rohe kua rēhitatia, kaua ki ngā rohe-iti koreutu, ki ngā rohe tīariari rānei.
5. Whakaritea te hua rēhita rohe ki taua āpure.

Me whakaatu e te whārangi rēhitatanga te puka takiutu, hei tauira:

```text
[wu_checkout slug="domain-form"]
```

## Puka pane {#header-form}

Tāpirihia tētahi puka `GET` iti ki te pane pae e tuku ana i te kupu rapu kua tāurutia ki te whārangi takiutu hei `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Kaua e kōwhiri tōmua i tētahi rohe ki te JavaScript pane ritenga. Me tuku noa e te pane te kupu rapu. Ka pānui te hōtuhi takiutu Domain Seller i `?domain_name=example`, ka whakakī i te pouaka rapu takiutu, ā, ka whakahaere i te rapu wāteatanga kia taea e te kiritaki te kōwhiri i ngā rohe kua whakahokia mai.

## Whanonga e tūmanakohia ana {#expected-behaviour}

Mā te rapu i `example` i te pane e whakatuwhera:

```text
/register/?domain_name=example
```

Kātahi me whakaatu e te takiutu ngā hua ka taea te kōwhiri, pēnei i:

- `example.com`
- `example.net`
- `example.org` kāore i te wātea
- ētahi atu TLD e tautokona ana e te kaiwhakarato

Whai muri i te kōwhiri i tētahi hua e wātea ana, me whakauru te whakarāpopototanga ota i te hua rēhita rohe me te ingoa rohe kua kōwhiria.

## Manatokonga {#verification}

1. Whakatuwheratia te whārangi kāinga.
2. Rapua tētahi ingoa kau, hei tauira `example`.
3. Whakaūngia kei roto i te URL takiutu ko `?domain_name=example`.
4. Whakaūngia kei roto i te āpure rohe takiutu ko `example`.
5. Whakaūngia ka puta tētahi rārangi kōwhiringa rohe.
6. Pāwhiritia **Kōwhiri** mō tētahi rohe e wātea ana.
7. Whakaūngia kei roto i te whakarāpopototanga ota ko `Domain Registration - example.com`, ko te rohe kua kōwhiria rānei.

## Raparongoā {#troubleshooting}

- Ki te kore he rārangi e puta, tirohia te ripa whatunga pūtirotiro mō `admin-ajax.php?action=wu_domain_search`, ā, whakaūngia ka whakahoki mai i ngā `domains`, i ngā `results` rānei kāore i te putu.
- Ki te rahua te manatoko o te puka takiutu i te wā e tiaki ana, tāpirihia ngā āpure pūkete e hiahiatia ana pērā i **Ingoa kaiwhakamahi**.
- Ki te kore te kōwhiri rohe e whakahou i te kāta, whakaūngia kei te tīariari `window.wu_checkout_form`, ā, kua utaina ngā rawa takiutu Domain Seller ki te whārangi takiutu.
