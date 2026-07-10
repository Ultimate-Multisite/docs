---
title: Galvenes domēna meklēšana
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Header domēna meklēšana {#header-domain-search}

Izmantojiet šo iestatījumu, ja vēlaties nelielu header formu, kas sāk domēna meklēšanu un pēc tam ļauj klientam izvēlēties no pieejamajiem domēniem Ultimate Multisite checkout ietvaros.

## Prasības {#requirements}

- Ultimate Multisite tīklā aktīvs.
- Multisite Ultimate Domain Seller tīklā aktīvs.
- Vismaz viens aktīvs domēna reģistrācijas produkts ar:
  - `domain_provider` iestatītu uz konfigurētu provider.
  - Konfigurētiem atbalstītiem TLD, piemēram, `com`, `net` un `org`.
- Derīga checkout forma ar **Domēna atlase** lauku.

## Checkout forma {#checkout-form}

1. Izveidojiet vai rediģējiet checkout formu, ko izmanto reģistrācijas lapa.
2. Pievienojiet parastos obligātos checkout/account laukus, tostarp **Lietotājvārds**. Checkout forma, kurā ir tikai domēna lauks, tiek noraidīta Ultimate Multisite validācijā.
3. Pievienojiet **Domēna atlase** lauku.
4. Iestatiet Domain Selection režīmu uz **Tikai reģistrācija**, ja plūsmai jākoncentrējas uz reģistrētiem domēniem, nevis bezmaksas apakšdomēniem vai esošiem domēniem.
5. Piešķiriet domēna reģistrācijas produktu šim laukam.

Reģistrācijas lapai jāatveido checkout forma, piemēram:

```text
[wu_checkout slug="domain-form"]
```

## Header forma {#header-form}

Pievienojiet nelielu `GET` formu vietnes header, kas nosūta ievadīto meklēšanas terminu uz checkout lapu kā `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Neizvēlieties domēnu iepriekš pielāgotā header JavaScript. Header drīkst tikai nodot meklēšanas terminu. Domain Seller checkout skripts nolasa `?domain_name=example`, aizpilda checkout meklēšanas lodziņu un palaiž pieejamības meklēšanu, lai klients varētu izvēlēties no atgrieztajiem domēniem.

## Sagaidāmā darbība {#expected-behaviour}

Meklējot `example` header, jāatver:

```text
/register/?domain_name=example
```

Pēc tam checkout jāparāda atlasāmi rezultāti, piemēram:

- `example.com`
- `example.net`
- `example.org` nav pieejams
- citi provider atbalstīti TLD

Pēc pieejama rezultāta izvēles pasūtījuma kopsavilkumā jābūt iekļautam domēna reģistrācijas produktam un izvēlētajam domēna vārdam.

## Pārbaude {#verification}

1. Atveriet sākumlapu.
2. Meklējiet vienkāršu vārdu, piemēram, `example`.
3. Apstipriniet, ka checkout URL ietver `?domain_name=example`.
4. Apstipriniet, ka checkout domēna lauks satur `example`.
5. Apstipriniet, ka parādās domēnu izvēļu saraksts.
6. Noklikšķiniet uz **Atlasīt** pieejamam domēnam.
7. Apstipriniet, ka pasūtījuma kopsavilkumā ir `Domain Registration - example.com` vai izvēlētais domēns.

## Problēmu novēršana {#troubleshooting}

- Ja saraksts neparādās, pārbaudiet pārlūka tīkla cilni attiecībā uz `admin-ajax.php?action=wu_domain_search` un apstipriniet, ka tā atgriež netukšus `domains` vai `results`.
- Ja checkout formas validācija neizdodas saglabāšanas laikā, pievienojiet obligātos account laukus, piemēram, **Lietotājvārds**.
- Ja domēna izvēle neatjaunina grozu, apstipriniet, ka `window.wu_checkout_form` pastāv un ka Domain Seller checkout assets ir ielādēti checkout lapā.
