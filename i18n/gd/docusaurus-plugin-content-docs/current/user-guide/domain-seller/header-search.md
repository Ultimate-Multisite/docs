---
title: Rannsachadh àrainn a’ bhann-chinn
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Rannsachadh Raoin sa Header

Cleachd an rèiteachadh seo nuair a tha thu ag iarraidh foirm bheag sa header a thòisicheas rannsachadh raoin, agus an uair sin a leigeas leis a’ chustomer taghadh bho raointean a tha ri fhaighinn am broinn checkout Ultimate Multisite.

## Riatanasan {#requirements}

- Ultimate Multisite gnìomhach air an lìonra.
- Multisite Ultimate Domain Seller gnìomhach air an lìonra.
- Co-dhiù aon toradh clàraidh raoin gnìomhach le:
  - `domain_provider` suidhichte gu solaraiche rèitichte.
  - TLDs le taic air an rèiteachadh, mar eisimpleir `com`, `net`, agus `org`.
- Foirm checkout dhligheach anns a bheil an raon **Taghadh Raoin**.

## Foirm checkout {#checkout-form}

1. Cruthaich no deasaich am foirm checkout a chleachdas an duilleag clàraidh.
2. Cuir ris na raointean checkout/Account àbhaisteach a tha riatanach, a’ gabhail a-steach **Ainm-cleachdaiche**. Thèid foirm checkout anns nach eil ach an raon raoin a dhiùltadh le dearbhadh Ultimate Multisite.
3. Cuir ris raon **Taghadh Raoin**.
4. Suidhich modh Taghadh Raoin gu **Register Only** nuair a bu chòir don t-sruth fòcas a chur air raointean clàraichte seach fo-raointean an-asgaidh no raointean a tha ann mu thràth.
5. Sònraich an toradh clàraidh raoin dhan raon sin.

Bu chòir don duilleag clàraidh am foirm checkout a thaisbeanadh, mar eisimpleir:

```text
[wu_checkout slug="domain-form"]
```

## Foirm header {#header-form}

Cuir foirm bheag `GET` ann an header na làraich a chuireas an teirm rannsachaidh a chaidh a chur a-steach dhan duilleag checkout mar `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Na ro-thagh raon ann an JavaScript header gnàthaichte. Cha bu chòir don header ach an teirm rannsachaidh a chur seachad. Leughaidh sgriobt checkout Domain Seller `?domain_name=example`, lìonaidh e bogsa rannsachaidh a’ checkout, agus ruithidh e an rannsachadh ri-fhaotainneachd gus an urrainn don chustomer taghadh bho na raointean a thilleadh.

## Giùlan ris a bheil dùil {#expected-behaviour}

Bu chòir do rannsachadh `example` sa header fosgladh:

```text
/register/?domain_name=example
```

Bu chòir don checkout an uair sin toraidhean a ghabhas taghadh a shealltainn, leithid:

- `example.com`
- `example.net`
- `example.org` nach eil ri fhaighinn
- TLDs eile le taic bhon t-solaraiche

Às dèidh dhut toradh a tha ri fhaighinn a thaghadh, bu chòir don gheàrr-chunntas òrduigh an toradh clàraidh raoin agus an t-ainm raoin a chaidh a thaghadh a ghabhail a-steach.

## Dearbhadh {#verification}

1. Fosgail an duilleag-dhachaigh.
2. Rannsaich ainm lom, mar eisimpleir `example`.
3. Dearbhaich gu bheil `?domain_name=example` ann an URL a’ checkout.
4. Dearbhaich gu bheil `example` ann an raon raoin a’ checkout.
5. Dearbhaich gu bheil liosta de roghainnean raoin a’ nochdadh.
6. Briog air **Tagh** airson raon a tha ri fhaighinn.
7. Dearbhaich gu bheil `Domain Registration - example.com` no an raon a chaidh a thaghadh anns a’ gheàrr-chunntas òrduigh.

## Fuasgladh dhuilgheadasan {#troubleshooting}

- Mura nochd liosta sam bith, thoir sùil air taba lìonra a’ bhrabhsair airson `admin-ajax.php?action=wu_domain_search` agus dearbhaich gu bheil e a’ tilleadh `domains` no `results` nach eil falamh.
- Ma dh’fhàillig dearbhadh a’ fhoirm checkout nuair a thathar ga shàbhaladh, cuir ris na raointean Account riatanach leithid **Ainm-cleachdaiche**.
- Mura h-ùraich taghadh raoin a’ chairt, dearbhaich gu bheil `window.wu_checkout_form` ann agus gu bheil maoin checkout Domain Seller air a luchdadh air an duilleag checkout.
