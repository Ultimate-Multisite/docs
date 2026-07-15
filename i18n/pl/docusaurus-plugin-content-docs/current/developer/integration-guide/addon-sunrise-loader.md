---
title: Addon Sunrise File Loader
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise File Loader

Ultimate Multisite 2.8.0 dodaje ładowarkę rozszerzeń „sunrise” dla add-onów i niestandardowych integracji MU-plugin, które muszą działać podczas początkowego uruchamiania (bootstrapping) WordPressa, bez konieczności edytowania wygenerowanego pliku `wp-content/sunrise.php`.

## Kiedy tego używać {#when-to-use-it}

Użyj rozszerzenia sunrise, gdy Twoja integracja musi uruchomić się przed załadowaniem regularnych pluginów, np. w przypadku niestandardowego routingu domen, obsługi żądań specyficznych dla hosta lub w celu wczesnej korekty bootstrapu sieci.

Dla normalnych integracji preferuj regularne pluginów WordPress, MU-pluginów oraz udokumentowane hooki Ultimate Multisite. Kod sunrise działa bardzo wcześnie i powinien być mały, defensywny i nie zależeć od zewnętrznych bibliotek.

## Konwencja nazewnictwa plików {#file-naming-convention}

Utwórz plik PHP o nazwie `sunrise.php` w katalogu add-onu, którego nazwa zaczyna się od `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Ładowarka skanuje katalog pluginów w poszukiwaniu tego wzorca:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Znalezione pliki są ładowane w kolejności alfabetycznej według ścieżki add-onu.

## Gdzie umieścić plik {#where-to-place-the-file}

Umieść plik w katalogu głównym add-onu, który odpowiada za zachowanie sunrise:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Skanowanie odbywa się względem `WP_CONTENT_DIR`, a nie bieżącej wartości `WP_PLUGIN_DIR`. Dzięki temu wykrywanie pozostaje stabilne, nawet jeśli w trakcie sunrise multi-tenancy lub inny wczesny kod bootstrap zmienia stałe katalogów pluginów.

Nie edytuj bezpośrednio wygenerowanego pliku `wp-content/sunrise.php`. Ładowarka pozwala na rozszerzenie zachowania sunrise za pomocą niestandardowego kodu, bez konieczności tworzenia własnej kopii (forkowania) rdzennego pliku sunrise, który Ultimate Multisite instaluje i aktualizuje.

## Dostępne hooki i filtry {#hooks-and-filters-available}

Pliki add-onów sunrise działają po załadowaniu mapowania domen Ultimate Multisite i przed wywołaniem przez WordPressa `ms_loaded`. W tym momencie plik sunrise może:

- odczytać lub nadpisać `$current_site` i `$current_blog`;
- uzyskać dostęp do `$wpdb` po załadowaniu konfiguracji bazy danych;
- zdefiniować stałe czasowe dla sunrise, takie jak `BLOG_ID_CURRENT_SITE`, w razie potrzeby;
- odczytać stan pomocnika sunrise Ultimate Multisite, w tym stan routingu używany przez integracje multi-tenancy.

Ultimate Multisite wywołuje `wu_sunrise_loaded` po zakończeniu swojej ładowarki sunrise. Użyj tego akcji dla kodu, który powinien działać po zakończeniu bootstrapu sunrise, ale nadal należy do cyklu życia sunrise.

Wywołuj tylko funkcje, które zostały już załadowane w fazie sunrise. Unikaj operacji obciążających bazę danych, renderowania szablonów, żądań HTTP oraz kodu, który zakłada, że zakończono normalne ładowanie pluginów.

## Minimalny przykład {#minimal-example}

```php
<?php
/**
 * Sunrise extension for a custom host integration.
 */

if (! defined('ABSPATH')) {
    exit;
}

if (isset($current_blog) && $current_blog instanceof stdClass) {
    // Adjust early routing or constants before ms_loaded.
}
```

Po wdrożeniu pliku, załaduj domenę z mapowaniem oraz adres URL głównej witryny bez mapowania, aby upewnić się, że obie ścieżki nadal poprawnie przechodzą bootstrap.
