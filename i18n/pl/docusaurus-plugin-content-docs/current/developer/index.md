---
title: Dokumentacja dla deweloperów
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Dokumentacja dla deweloperów

Ten przewodnik dostarcza deweloperom wszystkiego, czego potrzebują, aby integrować się, rozszerzać lub tworzyć dodatki dla Ultimate Multisite. Ultimate Multisite przekształca sieć WordPress Multisite w platformę Website-as-a-Service (WaaS).

## Co jest dostępne

- **[REST API](./rest-api/overview)** — Pełne operacje CRUD dla wszystkich encji (klienci, witryny, członkostwa, płatności, produkty, domeny) z uwierczeniem kluczem API
- **[Hooks Reference](./hooks/guide)** — Ponad 200 action hooków i ponad 280 filter hooków dla zdarzeń cyklu życia i niestandardizacji
- **[Integration Guide](./integration-guide/)** — Przykłady integracji z CRM, analityką, niestandardowymi bramkami płatności i webhookami
- **[Code Examples](./code-examples/)** — Zaawansowane wzorce dla dynamicznego ustalania cen, provisioningu witryn, niestandardowych ograniczeń i przetwarzania wielu bramek płatności
- **[Addon Development](./addon-development/getting-started)** — Strukturalny framework do budowania pluginów dodatków

## Wymagania

- Instalacja WordPress Multisite
- PHP 7.4 lub nowszy
- Aktywowany plugin Ultimate Multisite

## Instalacja za pomocą Composer / Bedrock

Ultimate Multisite jest dostępne na [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) pod nazwą `ultimate-multisite/ultimate-multisite`. Jest to zalecana metoda instalacji dla środowisk WordPress opartych na [Bedrock](https://roots.io/bedrock/) oraz innych środowisk zarządzanych przez Composer.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Zmieniona nazwa pakietu (v2.6.1+)
Pakiet Composer został zmieniony z `devstone/ultimate-multisite` na `ultimate-multisite/ultimate-multisite` w wersji v2.6.1. Jeśli Twoja `composer.json` odwołuje się do starego nazwy vendora, zaktualizuj wpis `require` i uruchom `composer update`.
:::

Po instalacji, aktywuj plugin na poziomie sieci w Network Admin:

```bash
wp plugin activate ultimate-multisite --network
```

Lub, jeśli ładowanie pluginu jako must-use plugin za pomocą autoloadera Bedrock, użyj filtra `wp_ultimo_skip_network_active_check`, aby ominąć zabezpieczenie aktywacji:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Szybki start

### Użycie REST API

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Podłączenie się do zdarzeń (Hooks)

```php
add_action('wu_customer_post_create', function($customer) {
    // Reagowanie na nowe rejestracje klientów
});
```

### Budowanie dodatku (Addon)

```bash
# Generowanie scaffolda dodatku z szablonu
bash create-addon.sh
```

Zobacz każdą sekcję, aby zapoznać się ze szczegółową dokumentacją i przykładami.
