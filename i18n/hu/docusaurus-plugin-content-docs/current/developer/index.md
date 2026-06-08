---
title: Fejlesztői Dokumentáció
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Fejlesztői Dokumentáció

Ez az útmutató minden szükséges információt nyújt a fejlesztőknek, akik integrálni, bővíteni vagy addonokat fejleszteni kívánnak az Ultimate Multisite rendszeréhez. Az Ultimate Multisite egy WordPress Multisite hálózatát Weboldal-mint-szolgáltatás (WaaS) platformra alakítja.

## Mit érhetünk el

- **[REST API](./rest-api/overview)** — Teljes CRUD (Create, Read, Update, Delete) műveletek minden entitás számára (ügyfélek, oldalak, tagságok, fizetések, termékek, domainek) API kulcsos hitelesítéssel
- **[Hooks Reference](./hooks/guide)** — 200+ action hook és 280+ filter hook az életciklus események és a testreszabás számára
- **[Integration Guide](./integration-guide/)** — Péletek a CRM integrációhoz, analitikához, egyedi fizetési kapukhoz és webhookokhoz
- **[Code Examples](./code-examples/)** — Haladó minták a dinamikus árazáshoz, oldalprovízióhoz, egyedi korlátozásokhoz és több fizetési kapu feldolgozásához
- **[Addon Development](./addon-development/getting-started)** — Strukturált keretrendszer az addon pluginoképítéséhez

## Feltételek

- WordPress Multisite telepítés
- PHP 7.4 vagy magasabb
- Aktivált Ultimate Multisite plugin

## Composer / Bedrock telepítés

Az Ultimate Multisite elérhető a [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) címen a `ultimate-multisite/ultimate-multisite` név alatt. Ez az ajánlott telepítési módszer a [Bedrock](https://roots.io/bedrock/)-alapú WordPress környezetekhez és más Composer-kezelésű környezetekhez.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Nevezett csomag (v2.6.1+)
A Composer csomagot v2.6.1-ben nevelték át a `devstone/ultimate-multisite` nevéről a `ultimate-multisite/ultimate-multisite` névre. Ha az Ön `composer.json` fájlja az régi vendor nevét hivatkozza, frissítse a `require` bejegyzést, és futtassa a `composer update` parancsot.
:::

A telepítés után aktiválja a pluginet a Network Admin felületen:

```bash
wp plugin activate ultimate-multisite --network
```

Vagy ha a pluginet Bedrock autoloader-en keresztül must-use pluginként tölti be, használja a `wp_ultimo_skip_network_active_check` filtert az aktivációs védőmechanizmus elkerülésére:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Gyors kezdés

### Használja a REST API-t

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Csatolja be az eseményekhez (Hook)

```php
add_action('wu_customer_post_create', function($customer) {
    // Reagáljon az új ügyfél regisztrációira
});
```

### Építsen egy Addon-t

```bash
# Generálja az addon alapstruktúráját a sablonból
bash create-addon.sh
```

Látogasson el minden szekcióhoz a részletes dokumentáció és példákért.
