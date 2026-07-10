---
title: Cuardach Fearainn sa Cheanntásc
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Cuardach Fearainn sa Cheanntásc {#header-domain-search}

Úsáid an socrú seo nuair atá foirm bheag cheanntáisc uait a chuireann tús le cuardach fearainn, agus ansin a ligeann don chustaiméir roghnú as fearainn atá ar fáil taobh istigh de chríochnú ceannaigh Ultimate Multisite.

## Riachtanais {#requirements}

- Ultimate Multisite gníomhach ar an líonra.
- Multisite Ultimate Domain Seller gníomhach ar an líonra.
- Táirge gníomhach amháin ar a laghad le haghaidh clárú fearainn le:
  - `domain_provider` socraithe chuig soláthraí cumraithe.
  - TLDanna tacaithe cumraithe, mar shampla `com`, `net`, agus `org`.
- Foirm bhailí chríochnaithe ceannaigh ina bhfuil an réimse **Roghnú Fearainn**.

## Foirm chríochnaithe ceannaigh {#checkout-form}

1. Cruthaigh nó cuir in eagar an fhoirm chríochnaithe ceannaigh a úsáideann an leathanach clárúcháin.
2. Cuir leis na gnáthréimsí riachtanacha chríochnaithe ceannaigh/Account, lena n-áirítear **Ainm Úsáideora**. Diúltaíonn bailíochtú Ultimate Multisite d’fhoirm chríochnaithe ceannaigh nach bhfuil inti ach an réimse fearainn.
3. Cuir réimse **Roghnú Fearainn** leis.
4. Socraigh mód Roghnú Fearainn go **Clárú Amháin** nuair ba cheart don sreabhadh díriú ar fhearainn chláraithe seachas ar fho-fhearainn saor in aisce nó ar fhearainn atá ann cheana.
5. Sann an táirge cláraithe fearainn don réimse sin.

Ba cheart don leathanach clárúcháin an fhoirm chríochnaithe ceannaigh a rindreáil, mar shampla:

```text
[wu_checkout slug="domain-form"]
```

## Foirm cheanntáisc {#header-form}

Cuir foirm bheag `GET` i gceanntásc an tsuímh a sheolann an téarma cuardaigh a iontráladh chuig an leathanach chríochnaithe ceannaigh mar `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Ná réamhroghnaigh fearann i JavaScript saincheaptha an cheanntáisc. Níor cheart don cheanntásc ach an téarma cuardaigh a chur ar aghaidh. Léann script chríochnaithe ceannaigh Domain Seller `?domain_name=example`, líonann sí bosca cuardaigh an chríochnaithe ceannaigh, agus ritheann sí an cuardach infhaighteachta ionas gur féidir leis an gcustaiméir roghnú as na fearainn a fhilleann.

## Iompar ionchais {#expected-behaviour}

Ba cheart do chuardach `example` sa cheanntásc an méid seo a oscailt:

```text
/register/?domain_name=example
```

Ba cheart don chríochnú ceannaigh torthaí inroghnaithe a thaispeáint ansin, amhail:

- `example.com`
- `example.net`
- `example.org` níl sé ar fáil
- TLDanna eile a dtacaíonn an soláthraí leo

Tar éis toradh atá ar fáil a roghnú, ba cheart don achoimre ordaithe an táirge cláraithe fearainn agus an t-ainm fearainn roghnaithe a áireamh.

## Fíorú {#verification}

1. Oscail an leathanach baile.
2. Cuardaigh ainm lom, mar shampla `example`.
3. Deimhnigh go bhfuil `?domain_name=example` san URL chríochnaithe ceannaigh.
4. Deimhnigh go bhfuil `example` i réimse fearainn an chríochnaithe ceannaigh.
5. Deimhnigh go bhfeictear liosta roghanna fearainn.
6. Cliceáil **Roghnaigh** le haghaidh fearainn atá ar fáil.
7. Deimhnigh go bhfuil `Domain Registration - example.com` nó an fearann roghnaithe san achoimre ordaithe.

## Fabhtcheartú {#troubleshooting}

- Mura bhfeictear aon liosta, seiceáil cluaisín líonra an bhrabhsálaí le haghaidh `admin-ajax.php?action=wu_domain_search` agus deimhnigh go bhfilleann sé `domains` nó `results` nach bhfuil folamh.
- Má theipeann ar bhailíochtú na foirme críochnaithe ceannaigh agus í á sábháil, cuir na réimsí Account riachtanacha leis, amhail **Ainm Úsáideora**.
- Mura nuashonraíonn roghnú fearainn an tralaí, deimhnigh go bhfuil `window.wu_checkout_form` ann agus go bhfuil sócmhainní chríochnú ceannaigh Domain Seller luchtaithe ar an leathanach chríochnaithe ceannaigh.
