---
title: Kūrėjo dokumentacija
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Kūrėjų dokumentacija

Šis vadovas suteikia kūrėjams viską, ko reikia norint integruotis su Ultimate Multisite, jį išplėsti arba kurti jam priedus. Ultimate Multisite paverčia WordPress Multisite tinklą Website-as-a-Service (WaaS) platforma.

## Kas pasiekiama

- **[REST API](./rest-api/overview)** — Išsamios CRUD operacijos visiems objektams (klientams, svetainėms, narystėms, mokėjimams, produktams, domenams) su API rakto autentifikavimu
- **[Hooks nuoroda](./hooks/guide)** — Daugiau nei 200 action hooks ir daugiau nei 280 filter hooks gyvavimo ciklo įvykiams ir tinkinimui
- **[Integracijos vadovas](./integration-guide/)** — CRM integracijos, analitikos, pasirinktinių mokėjimo šliuzų ir webhooks pavyzdžiai
- **[Kodo pavyzdžiai](./code-examples/)** — Pažangūs šablonai dinaminei kainodarai, svetainių parengimui, pasirinktinėms apribojimų taisyklėms ir kelių mokėjimo šliuzų apdorojimui
- **[Priedų kūrimas](./addon-development/getting-started)** — Struktūrizuota sistema priedų pluginams kurti

## Reikalavimai

- WordPress Multisite diegimas
- PHP 7.4 arba naujesnė versija
- Aktyvuotas Ultimate Multisite pluginas

## Composer / Bedrock diegimas

Ultimate Multisite pasiekiamas [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) kaip `ultimate-multisite/ultimate-multisite`. Tai rekomenduojamas diegimo būdas [Bedrock](https://roots.io/bedrock/) pagrindu veikiančioms WordPress sąrankoms ir kitoms Composer valdomoms aplinkoms.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Pervadintas paketas (v2.6.1+)
Composer paketas v2.6.1 versijoje buvo pervadintas iš `devstone/ultimate-multisite` į `ultimate-multisite/ultimate-multisite`. Jei jūsų `composer.json` nurodo seną tiekėjo pavadinimą, atnaujinkite require įrašą ir paleiskite `composer update`.
:::

Po diegimo aktyvuokite pluginą tinkle iš Network Admin:

```bash
wp plugin activate ultimate-multisite --network
```

Arba, jei pluginą įkeliate kaip must-use pluginą per Bedrock autoloaderį, naudokite `wp_ultimo_skip_network_active_check` filtrą, kad apeitumėte aktyvavimo apsaugą:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Greita pradžia

### Naudokite REST API

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Prisijunkite prie įvykių

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Sukurkite priedą

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Išsamią dokumentaciją ir pavyzdžius rasite kiekviename skyriuje.
