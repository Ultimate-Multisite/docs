---
title: Usesho Lwesizinda Lwesihloko
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Usesho Lwe-Domain Ku-Header

Sebenzisa lokhu kulungiselelwa lapho ufuna ifomu elincane le-header eliqala usesho lwe-domain, bese livumela ikhasimende ukuthi likhethe kuma-domain atholakalayo ngaphakathi kwe-Ultimate Multisite checkout.

## Izimfuneko {#requirements}

- Ultimate Multisite network-active.
- Multisite Ultimate Domain Seller network-active.
- Okungenani umkhiqizo owodwa osebenzayo wokubhalisa i-domain one:
  - `domain_provider` isethwe ku-provider olungiselelwe.
  - Ama-TLD asekelwayo alungiselelwe, isibonelo `com`, `net`, no-`org`.
- Ifomu le-checkout elivumelekile eliqukethe inkambu ethi **Ukukhethwa Kwe-Domain**.

## Ifomu le-checkout {#checkout-form}

1. Dala noma hlela ifomu le-checkout elisetshenziswa yikhasi lokubhalisa.
2. Engeza izinkambu ezijwayelekile ezidingekayo ze-checkout/account, kuhlanganise ne-**Username**. Ifomu le-checkout eliqukethe inkambu ye-domain kuphela liyenqatshwa ukuqinisekiswa kwe-Ultimate Multisite.
3. Engeza inkambu ethi **Ukukhethwa Kwe-Domain**.
4. Setha imodi ye-Domain Selection ku-**Register Only** lapho ukugeleza kufanele kugxile kuma-domain abhalisiwe kunokuba kube ama-subdomain amahhala noma ama-domain akhona.
5. Nikeza umkhiqizo wokubhalisa i-domain kuleyo nkambu.

Ikhasi lokubhalisa kufanele libonise ifomu le-checkout, isibonelo:

```text
[wu_checkout slug="domain-form"]
```

## Ifomu le-header {#header-form}

Engeza ifomu elincane le-`GET` ku-header yesayithi elithumela igama lokusesha elifakiwe ekhasini le-checkout njenge-`domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Ungakhethi kusengaphambili i-domain ku-JavaScript yangokwezifiso ye-header. I-header kufanele idlulise kuphela igama lokusesha. Isikripthi se-Domain Seller checkout sifunda `?domain_name=example`, sigcwalise ibhokisi lokusesha le-checkout, bese siqhuba usesho lokutholakala ukuze ikhasimende likhethe kuma-domain abuyisiwe.

## Ukuziphatha okulindelekile {#expected-behaviour}

Ukusesha `example` ku-header kufanele kuvule:

```text
/register/?domain_name=example
```

I-checkout kufanele bese ibonisa imiphumela ekhethekayo efana nalena:

- `example.com`
- `example.net`
- `example.org` ayitholakali
- amanye ama-TLD asekelwa yi-provider

Ngemva kokukhetha umphumela otholakalayo, isifinyezo se-oda kufanele sifake umkhiqizo wokubhalisa i-domain kanye negama le-domain elikhethiwe.

## Ukuqinisekisa {#verification}

1. Vula ikhasi lasekhaya.
2. Sesha igama elingenalutho olungeziwe, isibonelo `example`.
3. Qinisekisa ukuthi i-URL ye-checkout ifaka `?domain_name=example`.
4. Qinisekisa ukuthi inkambu ye-domain ye-checkout iqukethe `example`.
5. Qinisekisa ukuthi uhlu lwezinketho ze-domain luyavela.
6. Chofoza **Khetha** ku-domain etholakalayo.
7. Qinisekisa ukuthi isifinyezo se-oda siqukethe `Domain Registration - example.com` noma i-domain ekhethiwe.

## Ukuxazulula izinkinga {#troubleshooting}

- Uma kungekho hlu oluvelayo, hlola ithebhu yenethiwekhi yesiphequluli ye-`admin-ajax.php?action=wu_domain_search` bese uqinisekisa ukuthi ibuyisa `domains` noma `results` okungelona ize.
- Uma ifomu le-checkout lehluleka ukuqinisekiswa ngesikhathi lilondolozwa, engeza izinkambu ze-account ezidingekayo ezifana ne-**Username**.
- Uma ukukhetha i-domain kungabuyekezi inqola, qinisekisa ukuthi `window.wu_checkout_form` ikhona nokuthi ama-assets e-Domain Seller checkout alayishiwe ekhasini le-checkout.
