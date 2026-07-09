---
title: Antraštės domeno paieška
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Antraštės domeno paieška

Naudokite šią sąranką, kai norite nedidelės antraštės formos, kuri pradeda domeno paiešką, o tada leidžia klientui pasirinkti iš galimų domenų Ultimate Multisite checkout viduje.

## Reikalavimai

- Ultimate Multisite aktyvus tinkle.
- Multisite Ultimate Domain Seller aktyvus tinkle.
- Bent vienas aktyvus domeno registracijos produktas su:
  - `domain_provider` nustatytu į sukonfigūruotą teikėją.
  - Sukonfigūruotais palaikomais TLD, pavyzdžiui, `com`, `net` ir `org`.
- Galiojanti checkout forma, kurioje yra **Domeno pasirinkimo** laukas.

## Checkout forma

1. Sukurkite arba redaguokite checkout formą, naudojamą registracijos puslapyje.
2. Pridėkite įprastus privalomus checkout / Account laukus, įskaitant **Username**. Checkout formą, kurioje yra tik domeno laukas, Ultimate Multisite validacija atmeta.
3. Pridėkite **Domeno pasirinkimo** lauką.
4. Nustatykite Domain Selection režimą į **Tik registruoti**, kai eiga turėtų būti orientuota į registruotus domenus, o ne į nemokamus subdomenus ar esamus domenus.
5. Priskirkite domeno registracijos produktą tam laukui.

Registracijos puslapis turėtų atvaizduoti checkout formą, pavyzdžiui:

```text
[wu_checkout slug="domain-form"]
```

## Antraštės forma

Pridėkite nedidelę `GET` formą site antraštėje, kuri siunčia įvestą paieškos terminą į checkout puslapį kaip `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Iš anksto nepasirinkite domeno pasirinktiniame antraštės JavaScript. Antraštė turėtų tik perduoti paieškos terminą. Domain Seller checkout skriptas nuskaito `?domain_name=example`, užpildo checkout paieškos laukelį ir paleidžia pasiekiamumo paiešką, kad klientas galėtų pasirinkti iš grąžintų domenų.

## Tikėtina elgsena

Ieškant `example` antraštėje, turėtų būti atidaryta:

```text
/register/?domain_name=example
```

Tada checkout turėtų rodyti pasirenkamus rezultatus, tokius kaip:

- `example.com`
- `example.net`
- `example.org` nepasiekiamas
- kiti teikėjo palaikomi TLD

Pasirinkus pasiekiamą rezultatą, užsakymo suvestinėje turėtų būti domeno registracijos produktas ir pasirinktas domeno vardas.

## Patikrinimas

1. Atidarykite pagrindinį puslapį.
2. Ieškokite paprasto vardo, pavyzdžiui, `example`.
3. Patvirtinkite, kad checkout URL yra `?domain_name=example`.
4. Patvirtinkite, kad checkout domeno lauke yra `example`.
5. Patvirtinkite, kad pasirodo domenų pasirinkimų sąrašas.
6. Spustelėkite **Pasirinkti** prie pasiekiamo domeno.
7. Patvirtinkite, kad užsakymo suvestinėje yra `Domain Registration - example.com` arba pasirinktas domenas.

## Trikčių šalinimas

- Jei sąrašas nepasirodo, patikrinkite naršyklės tinklo skirtuką dėl `admin-ajax.php?action=wu_domain_search` ir patvirtinkite, kad jis grąžina netuščią `domains` arba `results`.
- Jei checkout formos validacija nepavyksta išsaugant, pridėkite privalomus Account laukus, tokius kaip **Username**.
- Jei domeno pasirinkimas neatnaujina krepšelio, patvirtinkite, kad `window.wu_checkout_form` egzistuoja ir kad Domain Seller checkout assets įkelti checkout puslapyje.
