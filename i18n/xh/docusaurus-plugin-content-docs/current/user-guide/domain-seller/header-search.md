---
title: Ukukhangela iDomeyini kwiNtloko
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Uphendlo lwe-Domain ye-Header

Sebenzisa olu seto xa ufuna ifom encinci ye-header eqalisa uphendlo lwe-domain, emva koko ivumele umthengi akhethe kwi-domain ezifumanekayo ngaphakathi kwe-Ultimate Multisite checkout.

## Iimfuno

- Ultimate Multisite network-active.
- Multisite Ultimate Domain Seller network-active.
- Ubuncinane imveliso enye esebenzayo yobhaliso lwe-domain ene:
  - `domain_provider` isetwe kumboneleli oqwalaselweyo.
  - Ii-TLD ezixhaswayo ziqwalaselwe, umzekelo `com`, `net`, kunye `org`.
- Ifom ye-checkout esebenzayo equlathe intsimi ye-**Domain Selection**.

## Ifom ye-checkout

1. Yenza okanye uhlele ifom ye-checkout esetyenziswa liphepha lobhaliso.
2. Yongeza iintsimi eziqhelekileyo ezifunekayo ze-checkout/account, kuquka **Username**. Ifom ye-checkout equlathe intsimi ye-domain kuphela iyaliwa luqinisekiso lwe-Ultimate Multisite.
3. Yongeza intsimi ye-**Domain Selection**.
4. Seta imo ye-Domain Selection ibe **Register Only** xa ukuhamba kufuneka kugxile kwii-domain ezibhalisiweyo kunokuba kube zii-subdomain zasimahla okanye ii-domain esele zikhona.
5. Yabela imveliso yobhaliso lwe-domain kuloo ntsimi.

Iphepha lobhaliso kufuneka libonise ifom ye-checkout, umzekelo:

```text
[wu_checkout slug="domain-form"]
```

## Ifom ye-header

Yongeza ifom encinci ye-`GET` kwi-header yesayithi ethumela igama lophendlo elifakiweyo kwiphepha le-checkout njenge-`domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Musa ukukhetha kwangaphambili i-domain kwi-JavaScript ye-header eyenziwe ngokwesiko. I-header kufuneka idlulise kuphela igama lophendlo. Iskripthi se-Domain Seller checkout sifunda `?domain_name=example`, sigcwalise ibhokisi yophendlo ye-checkout, kwaye siqhube uphendlo lokufumaneka ukuze umthengi akhethe kwii-domain ezibuyisiweyo.

## Indlela elindelekileyo yokuziphatha

Ukukhangela `example` kwi-header kufuneka kuvule:

```text
/register/?domain_name=example
```

I-checkout kufuneka emva koko ibonise iziphumo ezinokukhethwa ezifana nezi:

- `example.com`
- `example.net`
- `example.org` ayifumaneki
- ezinye ii-TLD ezixhaswa ngumboneleli

Emva kokukhetha isiphumo esifumanekayo, isishwankathelo se-odolo kufuneka siquke imveliso yobhaliso lwe-domain kunye negama le-domain elikhethiweyo.

## Uqinisekiso

1. Vula iphepha lasekhaya.
2. Khangela igama elingenanto yongeziweyo, umzekelo `example`.
3. Qinisekisa ukuba i-URL ye-checkout iquka `?domain_name=example`.
4. Qinisekisa ukuba intsimi ye-domain ye-checkout iqulathe `example`.
5. Qinisekisa ukuba uluhlu lokukhetha ii-domain luyavela.
6. Cofa **Select** kwi-domain efumanekayo.
7. Qinisekisa ukuba isishwankathelo se-odolo siqulathe `Domain Registration - example.com` okanye i-domain ekhethiweyo.

## Ukusombulula iingxaki

- Ukuba akukho luhlu luvelayo, jonga ithebhu yenethiwekhi yesikhangeli ye-`admin-ajax.php?action=wu_domain_search` kwaye uqinisekise ukuba ibuyisa `domains` okanye `results` ezingengenanto.
- Ukuba ifom ye-checkout iyasilela kuqinisekiso xa igcinwa, yongeza iintsimi ezifunekayo ze-account ezifana ne-**Username**.
- Ukuba ukukhetha i-domain akuhlaziyi inqwelo, qinisekisa ukuba `window.wu_checkout_form` ikhona kwaye ii-assets ze-Domain Seller checkout zilayishiwe kwiphepha le-checkout.
