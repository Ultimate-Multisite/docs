---
title: Tiftix tad-Dominju tal-Intestatura
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Tiftixa tad-Domain fil-Header

Uża din is-setup meta trid formola żgħira fil-header li tibda tiftixa ta’ domain, imbagħad tħalli lill-klijent jagħżel minn domains disponibbli ġewwa ċ-checkout ta’ Ultimate Multisite.

## Rekwiżiti {#requirements}

- Ultimate Multisite network-active.
- Multisite Ultimate Domain Seller network-active.
- Mill-inqas prodott wieħed attiv ta’ reġistrazzjoni ta’ domain b’:
  - `domain_provider` issettjat għal provider ikkonfigurat.
  - TLDs appoġġjati kkonfigurati, pereżempju `com`, `net`, u `org`.
- Formola ta’ checkout valida li fiha l-field **Għażla ta’ Domain**.

## Formola ta’ checkout {#checkout-form}

1. Oħloq jew editja l-formola ta’ checkout użata mill-paġna tar-reġistrazzjoni.
2. Żid il-fields normali meħtieġa ta’ checkout/account, inkluż **Username**. Formola ta’ checkout li fiha biss il-field tad-domain tiġi miċħuda mill-validazzjoni ta’ Ultimate Multisite.
3. Żid field **Għażla ta’ Domain**.
4. Issettja l-modalità Domain Selection għal **Register Only** meta l-fluss għandu jiffoka fuq domains irreġistrati aktar milli subdomains b’xejn jew domains eżistenti.
5. Assenja l-prodott ta’ reġistrazzjoni tad-domain lil dak il-field.

Il-paġna tar-reġistrazzjoni għandha turi l-formola ta’ checkout, pereżempju:

```text
[wu_checkout slug="domain-form"]
```

## Formola tal-header {#header-form}

Żid formola żgħira `GET` fil-header tas-sit li tibgħat it-terminu tat-tiftixa mdaħħal lill-paġna taċ-checkout bħala `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Tippreselletx domain f’JavaScript personalizzat tal-header. Il-header għandu jgħaddi biss it-terminu tat-tiftixa. L-iskript taċ-checkout ta’ Domain Seller jaqra `?domain_name=example`, jimla l-kaxxa tat-tiftixa taċ-checkout, u jmexxi t-tiftixa tad-disponibbiltà sabiex il-klijent ikun jista’ jagħżel mid-domains ritornati.

## Imġiba mistennija {#expected-behaviour}

It-tiftix għal `example` fil-header għandu jiftaħ:

```text
/register/?domain_name=example
```

Imbagħad iċ-checkout għandu juri riżultati li jistgħu jintgħażlu bħal:

- `example.com`
- `example.net`
- `example.org` mhux disponibbli
- TLDs oħra appoġġjati mill-provider

Wara li jintgħażel riżultat disponibbli, is-sommarju tal-ordni għandu jinkludi l-prodott ta’ reġistrazzjoni tad-domain u l-isem tad-domain magħżul.

## Verifika {#verification}

1. Iftaħ il-paġna ewlenija.
2. Fittex għal isem vojt, pereżempju `example`.
3. Ikkonferma li l-URL taċ-checkout jinkludi `?domain_name=example`.
4. Ikkonferma li l-field tad-domain fiċ-checkout fih `example`.
5. Ikkonferma li tidher lista ta’ għażliet ta’ domain.
6. Ikklikkja **Agħżel** għal domain disponibbli.
7. Ikkonferma li s-sommarju tal-ordni fih `Domain Registration - example.com` jew id-domain magħżul.

## Soluzzjoni tal-problemi {#troubleshooting}

- Jekk ma tidher l-ebda lista, iċċekkja t-tab tan-network tal-browser għal `admin-ajax.php?action=wu_domain_search` u kkonferma li tirritorna `domains` jew `results` mhux vojta.
- Jekk il-formola taċ-checkout tfalli l-validazzjoni waqt is-salvataġġ, żid il-fields meħtieġa tal-account bħal **Username**.
- Jekk l-għażla ta’ domain ma taġġornax il-cart, ikkonferma li `window.wu_checkout_form` jeżisti u li l-assets taċ-checkout ta’ Domain Seller huma mgħobbija fuq il-paġna taċ-checkout.
