---
title: Binciken Yankin Kan Kai
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Neman Domain na Header

Yi amfani da wannan saitin idan kana son ƙaramin form a header wanda zai fara neman domain, sannan ya bar abokin ciniki ya zaɓa daga domains da suke samuwa a cikin Ultimate Multisite checkout.

## Bukatu {#requirements}

- Ultimate Multisite network-active.
- Multisite Ultimate Domain Seller network-active.
- Aƙalla samfurin rajistar domain guda ɗaya mai aiki da:
  - An saita `domain_provider` zuwa provider da aka tsara.
  - An tsara TLDs da ake tallafawa, misali `com`, `net`, da `org`.
- Ingantaccen checkout form da ke ƙunshe da filin **Zaɓin Domain**.

## Checkout form {#checkout-form}

1. Ƙirƙiri ko gyara checkout form da shafin rajista ke amfani da shi.
2. Ƙara filayen checkout/account na yau da kullum da ake buƙata, ciki har da **Username**. Ultimate Multisite validation tana ƙin checkout form da ke ɗauke da filin domain kawai.
3. Ƙara filin **Zaɓin Domain**.
4. Saita yanayin Domain Selection zuwa **Register Only** lokacin da tafiyar ta kamata ta mai da hankali kan domains da aka yi rajista maimakon subdomains na kyauta ko domains da suke wanzu.
5. Sanya samfurin rajistar domain ga wannan filin.

Shafin rajista ya kamata ya nuna checkout form, misali:

```text
[wu_checkout slug="domain-form"]
```

## Header form {#header-form}

Ƙara ƙaramin form na `GET` a cikin header na shafi wanda ke aika kalmar nema da aka shigar zuwa shafin checkout a matsayin `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Kada a riga a zaɓi domain a cikin JavaScript na header na musamman. Header ya kamata kawai ya wuce da kalmar nema. Script na Domain Seller checkout yana karanta `?domain_name=example`, yana cika akwatin neman checkout, kuma yana gudanar da binciken samuwa domin abokin ciniki ya zaɓa daga domains da aka dawo da su.

## Halin da ake sa ran gani {#expected-behaviour}

Neman `example` a cikin header ya kamata ya buɗe:

```text
/register/?domain_name=example
```

Checkout ya kamata sannan ya nuna sakamakon da za a iya zaɓa kamar:

- `example.com`
- `example.net`
- `example.org` ba ya samuwa
- sauran TLDs da provider ke tallafawa

Bayan zaɓar sakamako da yake samuwa, taƙaitaccen oda ya kamata ya ƙunshi samfurin rajistar domain da sunan domain da aka zaɓa.

## Tabbatarwa {#verification}

1. Buɗe shafin gida.
2. Nemi suna tsirara, misali `example`.
3. Tabbatar URL na checkout ya ƙunshi `?domain_name=example`.
4. Tabbatar filin domain na checkout yana ƙunshe da `example`.
5. Tabbatar jerin zaɓuɓɓukan domain ya bayyana.
6. Danna **Zaɓi** don domain da yake samuwa.
7. Tabbatar taƙaitaccen oda ya ƙunshi `Domain Registration - example.com` ko domain da aka zaɓa.

## Gyaran Matsala {#troubleshooting}

- Idan babu jerin da ya bayyana, duba browser network tab don `admin-ajax.php?action=wu_domain_search` kuma tabbatar yana dawo da `domains` ko `results` marasa wofi.
- Idan checkout form ya kasa validation yayin adanawa, ƙara filayen account da ake buƙata kamar **Username**.
- Idan zaɓar domain bai sabunta cart ba, tabbatar `window.wu_checkout_form` yana wanzu kuma an loda assets na Domain Seller checkout a shafin checkout.
