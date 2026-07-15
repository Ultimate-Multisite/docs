---
title: Gushakisha Indangarubuga mu Mutwe
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Gushaka Domain mu Mutwe w'Urupapuro

Koresha iyi setup igihe ushaka form nto yo mu mutwe w'urupapuro itangiza gushaka domain, hanyuma ikareka umukiriya guhitamo muri domain ziboneka imbere muri checkout ya Ultimate Multisite.

## Ibisabwa {#requirements}

- Ultimate Multisite network-active.
- Multisite Ultimate Domain Seller network-active.
- Nibura product imwe ikora yo kwandikisha domain ifite:
  - `domain_provider` yashyizwe kuri provider yateguwe.
  - TLDs zishyigikiwe zateguwe, urugero `com`, `net`, na `org`.
- Form ya checkout yemewe irimo field ya **Guhitamo Domain**.

## Form ya checkout {#checkout-form}

1. Kora cyangwa uhindure form ya checkout ikoreshwa n'urupapuro rwo kwiyandikisha.
2. Ongeramo fields zisanzwe za checkout/account zisabwa, harimo **Username**. Form ya checkout irimo field ya domain gusa yangwa na validation ya Ultimate Multisite.
3. Ongeramo field ya **Guhitamo Domain**.
4. Shyira mode ya Domain Selection kuri **Register Only** igihe flow igomba kwibanda kuri domain zanditswe aho kwibanda kuri subdomains z'ubuntu cyangwa domain zisanzweho.
5. Shyira product yo kwandikisha domain kuri iyo field.

Urupapuro rwo kwiyandikisha rugomba kwerekana form ya checkout, urugero:

```text
[wu_checkout slug="domain-form"]
```

## Form yo mu mutwe w'urupapuro {#header-form}

Ongeramo form nto ya `GET` mu mutwe wa site yohereza ijambo ryinjijwe ryo gushaka kuri page ya checkout nka `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Ntugahitire domain muri JavaScript yihariye yo mu mutwe w'urupapuro. Umutwe w'urupapuro ugomba kohereza ijambo ryo gushaka gusa. Script ya checkout ya Domain Seller isoma `?domain_name=example`, ikuzuza agasanduku ko gushaka ka checkout, kandi igakora gushaka availability kugira ngo umukiriya ashobore guhitamo muri domain zagaruwe.

## Imyitwarire iteganyijwe {#expected-behaviour}

Gushaka `example` mu mutwe w'urupapuro bigomba gufungura:

```text
/register/?domain_name=example
```

Checkout igomba noneho kwerekana ibisubizo bishobora gutoranywa nka:

- `example.com`
- `example.net`
- `example.org` itaboneka
- izindi TLDs zishyigikiwe na provider

Nyuma yo guhitamo igisubizo kiboneka, incamake y'itumiza igomba kubamo product yo kwandikisha domain n'izina rya domain ryatoranyijwe.

## Kugenzura {#verification}

1. Fungura home page.
2. Shaka izina ryonyine, urugero `example`.
3. Emeza ko URL ya checkout irimo `?domain_name=example`.
4. Emeza ko field ya domain muri checkout irimo `example`.
5. Emeza ko urutonde rw'amahitamo ya domain rugaragara.
6. Kanda **Hitamo** kuri domain iboneka.
7. Emeza ko incamake y'itumiza irimo `Domain Registration - example.com` cyangwa domain yatoranyijwe.

## Gukemura ibibazo {#troubleshooting}

- Niba nta rutonde rugaragara, reba tab ya network muri browser kuri `admin-ajax.php?action=wu_domain_search` kandi wemeze ko igarura `domains` cyangwa `results` bitarimo ubusa.
- Niba form ya checkout inanirwa validation mu gihe uyibika, ongeramo fields za account zisabwa nka **Username**.
- Niba guhitamo domain bitavugurura cart, emeza ko `window.wu_checkout_form` iriho kandi ko assets za checkout za Domain Seller zapakiwe kuri page ya checkout.
