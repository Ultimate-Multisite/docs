---
title: Kichwa cha Utafutaji wa Kikoa
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Utafutaji wa Domain Kwenye Header

Tumia usanidi huu unapotaka form ndogo ya header inayoanzisha utafutaji wa domain, kisha kumruhusu mteja kuchagua kutoka kwa domain zinazopatikana ndani ya checkout ya Ultimate Multisite.

## Mahitaji {#requirements}

- Ultimate Multisite ikiwa network-active.
- Multisite Ultimate Domain Seller ikiwa network-active.
- Angalau bidhaa moja amilifu ya usajili wa domain yenye:
  - `domain_provider` iliyowekwa kwa provider aliyesanidiwa.
  - TLDs zinazotumika zikiwa zimesanidiwa, kwa mfano `com`, `net`, na `org`.
- Form halali ya checkout iliyo na field ya **Uteuzi wa Domain**.

## Form ya checkout {#checkout-form}

1. Unda au hariri form ya checkout inayotumiwa na ukurasa wa usajili.
2. Ongeza fields za kawaida zinazohitajika za checkout/account, ikijumuisha **Jina la mtumiaji**. Form ya checkout iliyo na field ya domain pekee hukataliwa na uthibitishaji wa Ultimate Multisite.
3. Ongeza field ya **Uteuzi wa Domain**.
4. Weka hali ya Domain Selection kuwa **Register Only** wakati mtiririko unapaswa kulenga domain zilizosajiliwa badala ya subdomains za bure au domain zilizopo.
5. Weka bidhaa ya usajili wa domain kwenye field hiyo.

Ukurasa wa usajili unapaswa kuonyesha form ya checkout, kwa mfano:

```text
[wu_checkout slug="domain-form"]
```

## Form ya header {#header-form}

Ongeza form ndogo ya `GET` kwenye header ya site inayotuma neno la utafutaji lililoingizwa kwenda ukurasa wa checkout kama `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Usichague mapema domain katika JavaScript maalum ya header. Header inapaswa kupitisha tu neno la utafutaji. Script ya checkout ya Domain Seller husoma `?domain_name=example`, hujaza kisanduku cha utafutaji cha checkout, na kuendesha utafutaji wa upatikanaji ili mteja aweze kuchagua kutoka kwa domain zilizorudishwa.

## Tabia inayotarajiwa {#expected-behaviour}

Kutafuta `example` kwenye header kunapaswa kufungua:

```text
/register/?domain_name=example
```

Kisha checkout inapaswa kuonyesha matokeo yanayoweza kuchaguliwa kama vile:

- `example.com`
- `example.net`
- `example.org` haipatikani
- TLDs nyingine zinazotumika na provider

Baada ya kuchagua tokeo linalopatikana, muhtasari wa oda unapaswa kujumuisha bidhaa ya usajili wa domain na jina la domain lililochaguliwa.

## Uthibitishaji {#verification}

1. Fungua ukurasa wa nyumbani.
2. Tafuta jina tupu, kwa mfano `example`.
3. Thibitisha URL ya checkout inajumuisha `?domain_name=example`.
4. Thibitisha field ya domain ya checkout ina `example`.
5. Thibitisha orodha ya chaguo za domain inaonekana.
6. Bofya **Chagua** kwa domain inayopatikana.
7. Thibitisha muhtasari wa oda una `Domain Registration - example.com` au domain iliyochaguliwa.

## Utatuzi wa matatizo {#troubleshooting}

- Ikiwa hakuna orodha inayoonekana, angalia kichupo cha mtandao cha kivinjari kwa `admin-ajax.php?action=wu_domain_search` na uthibitishe kinarudisha `domains` au `results` zisizo tupu.
- Ikiwa form ya checkout inashindwa uthibitishaji wakati wa kuhifadhi, ongeza fields za account zinazohitajika kama **Jina la mtumiaji**.
- Ikiwa kuchagua domain hakusasishi cart, thibitisha `window.wu_checkout_form` ipo na kwamba assets za checkout za Domain Seller zimepakiwa kwenye ukurasa wa checkout.
