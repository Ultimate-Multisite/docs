---
title: Quaestio dominii in capite
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Investigatio Dominii in Capite

Utere hac configuratione cum vis parvam formam in capite quae investigationem dominii incipit, deinde emptori sinit ex dominiis praesto intra emptionem Ultimate Multisite eligere.

## Requisita {#requirements}

- Ultimate Multisite in reti activum.
- Multisite Ultimate Domain Seller in reti activum.
- Saltem unum productum activum registrationis dominii cum:
  - `domain_provider` ad provisorem configuratum positum.
  - TLDs sustentata configurata, exempli gratia `com`, `net`, et `org`.
- Forma emptionis valida continens agrum **Electio Dominii**.

## Forma emptionis {#checkout-form}

1. Crea vel edita formam emptionis qua pagina registrationis utitur.
2. Adde campos emptionis/account normales requisitos, inter quos **Nomen usoris**. Forma emptionis quae solum agrum dominii continet a validatione Ultimate Multisite reicitur.
3. Adde agrum **Electio Dominii**.
4. Pone modum Electionis Dominii ad **Tantum Registrare** cum fluxus in dominiis registratis potius quam in subdominiis gratuitis aut dominiis iam exsistentibus incumbere debeat.
5. Adscribe productum registrationis dominii illi agro.

Pagina registrationis formam emptionis reddere debet, exempli gratia:

```text
[wu_checkout slug="domain-form"]
```

## Forma capitis {#header-form}

Adde parvam formam `GET` in capite situs quae terminum investigationis ingressum ad paginam emptionis mittit ut `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Noli dominium in JavaScript capitis custom praeligere. Caput solum terminum investigationis tradere debet. Scriptum emptionis Domain Seller legit `?domain_name=example`, capsam investigationis emptionis implet, et investigationem disponibilitatis exsequitur ut emptor ex dominiis redditis eligere possit.

## Mores exspectati {#expected-behaviour}

Investigatio `example` in capite aperire debet:

```text
/register/?domain_name=example
```

Emptio deinde eventus eligibiles ostendere debet tales quales:

- `example.com`
- `example.net`
- `example.org` non praesto
- alia TLDs a provisore sustentata

Postquam eventus praesto electus est, summarium ordinis productum registrationis dominii et nomen dominii electum includere debet.

## Verificatio {#verification}

1. Aperi paginam principalem.
2. Quaere nomen nudum, exempli gratia `example`.
3. Confirma URL emptionis includere `?domain_name=example`.
4. Confirma agrum dominii in emptione continere `example`.
5. Confirma indicem optionum dominii apparere.
6. Preme **Selige** pro dominio praesto.
7. Confirma summarium ordinis continere `Domain Registration - example.com` vel dominium electum.

## Solutio difficultatum {#troubleshooting}

- Si nullus index apparet, inspice tabulam retialem navigatoris pro `admin-ajax.php?action=wu_domain_search` et confirma eam reddere `domains` vel `results` non vacua.
- Si forma emptionis validationem servando non superat, adde campos account requisitos tales qualis **Nomen usoris**.
- Si electio dominii cart non renovat, confirma `window.wu_checkout_form` exsistere et opes emptionis Domain Seller in pagina emptionis oneratas esse.
