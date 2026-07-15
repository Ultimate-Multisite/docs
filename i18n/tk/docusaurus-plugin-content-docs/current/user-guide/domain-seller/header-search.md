---
title: Başlykdaky domen gözlegi
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Sözbaşy domen gözlegi

Bu sazlamany, domen gözlegini başlaýan kiçi sözbaşy formasyny isläniňizde, soňra müşderä Ultimate Multisite töleg tamamlaýyş sahypasynyň içinde elýeterli domenlerden saýlamaga mümkinçilik bermek üçin ulanyň.

## Talaplar {#requirements}

- Ultimate Multisite torda işjeň.
- Multisite Ultimate Domain Seller torda işjeň.
- Iň azyndan bir işjeň domen hasaba alyş önümi bolmaly we onda:
  - `domain_provider` sazlanan üpjün edijä bellengilen.
  - Goldanýan TLD-ler sazlanan, mysal üçin `com`, `net` we `org`.
- **Domen saýlamagy** meýdanyny öz içine alýan dogry töleg tamamlaýyş formasy.

## Töleg tamamlaýyş formasy {#checkout-form}

1. Hasaba alyş sahypasy tarapyndan ulanylýan töleg tamamlaýyş formasyny dörediň ýa-da redaktirläň.
2. **Ulanyjy ady** bilen birlikde adaty hökmany töleg tamamlaýyş/Account meýdanlaryny goşuň. Diňe domen meýdanyny öz içine alýan töleg tamamlaýyş formasy Ultimate Multisite barlagy tarapyndan ret edilýär.
3. **Domen saýlamagy** meýdanyny goşuň.
4. Akym mugt subdomenlere ýa-da bar bolan domenlere däl-de, hasaba alnan domenlere gönükmeli bolsa, Domen saýlamagy tertibini **Diňe hasaba almak** edip belläň.
5. Domen hasaba alyş önümini şol meýdana belläň.

Hasaba alyş sahypasy töleg tamamlaýyş formasyny görkezmeli, mysal üçin:

```text
[wu_checkout slug="domain-form"]
```

## Sözbaşy formasy {#header-form}

Sahypanyň sözbaşysynda girizilen gözleg adalgasyny töleg tamamlaýyş sahypasyna `domain_name` hökmünde iberýän kiçi `GET` formasyny goşuň:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Ýörite sözbaşy JavaScript-inde domeni öňünden saýlamaň. Sözbaşy diňe gözleg adalgasyny geçirmeli. Domain Seller töleg tamamlaýyş skripti `?domain_name=example` okaýar, töleg tamamlaýyş gözleg gutusyny doldurýar we elýeterlilik gözlegini işledýär, şeýdip müşderi gaýtarylan domenlerden saýlap bilýär.

## Garaşylýan özüni alyp baryş {#expected-behaviour}

Sözbaşynyň içinde `example` gözlemek şuny açmaly:

```text
/register/?domain_name=example
```

Soňra töleg tamamlaýyş sahypasy saýlanyp bolýan netijeleri görkezmeli, mysal üçin:

- `example.com`
- `example.net`
- `example.org` elýeterli däl
- üpjün ediji tarapyndan goldanýan beýleki TLD-ler

Elýeterli netije saýlanandan soň, sargyt jemlemesi domen hasaba alyş önümini we saýlanan domen adyny öz içine almaly.

## Barlag {#verification}

1. Baş sahypany açyň.
2. Diňe ady gözläň, mysal üçin `example`.
3. Töleg tamamlaýyş URL-iniň `?domain_name=example` öz içine alýandygyny tassyklaň.
4. Töleg tamamlaýyş domen meýdanynyň `example` öz içine alýandygyny tassyklaň.
5. Domen saýlawlarynyň sanawynyň peýda bolýandygyny tassyklaň.
6. Elýeterli domen üçin **Saýla** basyň.
7. Sargyt jemlemesinde `Domain Registration - example.com` ýa-da saýlanan domeniň bardygyny tassyklaň.

## Näsazlyklary düzetmek {#troubleshooting}

- Sanaw peýda bolmasa, brauzeriň tor goýmasynda `admin-ajax.php?action=wu_domain_search` barlaň we onuň boş däl `domains` ýa-da `results` gaýtarýandygyny tassyklaň.
- Töleg tamamlaýyş formasy saklananda barlagdan geçmese, **Ulanyjy ady** ýaly hökmany Account meýdanlaryny goşuň.
- Domen saýlamak sebedi täzelemese, `window.wu_checkout_form` bardygyny we Domain Seller töleg tamamlaýyş serişdeleriniň töleg tamamlaýyş sahypasynda ýüklenendigini tassyklaň.
