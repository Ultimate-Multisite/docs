---
title: Możliwości zarządzania wtyczkami
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Możliwości zarządzania pluginami {#plugin-management-abilities}

Gratis AI Agent v1.5.0 zawiera **7 możliwości zarządzania pluginami**, które asystent AI może wywołać podczas rozmowy. Te możliwości zapewniają programowy kontrolę nad pluginami WordPress zainstalowanymi za pośrednictwem [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox).

## Przegląd możliwości {#abilities-overview}

| Możliwość | Slug | Opis |
|---|---|---|
| List Plugins | `list_plugins` | Zwraca listę pluginów dostępnych w sandbox store wraz ze statusem. |
| Get Plugin | `get_plugin` | Pobiera metadane i kod źródłowy określonego pluginu na podstawie slug. |
| Create Plugin | `create_plugin` | Generuje nowy plugin na podstawie opisu i przechowuje go w sandboxie. |
| Update Plugin | `update_plugin` | Zastępuje kod źródłowy pluginu nową wersją. |
| Delete Plugin | `delete_plugin` | Usuwa plugin ze store'a sandboxowego. Najpierw dezaktywuje. |
| Install Plugin | `install_plugin` | Wdraża (deployuje) plugin z sandboxa do aktywnego katalogu pluginów WordPress. |
| Activate Plugin | `activate_plugin` | Aktywuje plugin z sandboxa w środowisku sandbox wp-env. |

## API Instalatora Pluginów {#plugin-installer-api}

Instalator pluginów obsługuje operacje na systemie plików podczas wdrażania lub usuwania pluginów. Kluczowe zachowania:

- **Walidacja ścieżki**: Wszystkie ścieżki pluginów są walidowane względem dozwolonego katalogu pluginów przed jakimkolwiek zapisem pliku. Próby traversingu katalogów są odrzucane.
- **Instalacja wieloplikowa**: Plugin może składać się z wielu plików. Instalator tworzy katalog pluginu i zapisuje wszystkie pliki atomowo.
- **Aktualizacja**: Zastępuje istniejące pliki pluginu. Dezaktywuje plugin przed zapisem, aby uniknąć błędów wynikających z częściowego stanu.
- **Usuwanie po slug**: Lokalizuje katalog pluginu na podstawie slug, dezaktywuje go we wszystkich stronach, a następnie usuwa katalog.

### Rejestrowanie niestandardowego handler'a instalacji {#registering-a-custom-install-handler}

Możesz podpiąć się do cyklu życia instalacji, używając akcji `gratis_ai_plugin_installer_before_install` oraz `gratis_ai_plugin_installer_after_install`:

```php
add_action('gratis_ai_plugin_installer_before_install', function(string $slug, array $files): void {
    // $slug: nazwa katalogu pluginu
    // $files: tablicza asocjacyjna z relatywną ścieżką => zawartość pliku
    error_log("Instalacja pluginu: {$slug} z " . count($files) . " plikami.");
}, 10, 2);

add_action('gratis_ai_plugin_installer_after_install', function(string $slug, bool $success): void {
    if ($success) {
        error_log("Plugin {$slug} zainstalowany pomyślnie.");
    }
}, 10, 2);
```

## Rejestr Ekosystemu {#ecosystem-registry}

Możliwości są rejestrowane za pośrednictwem **rejestru ekosystemu pluginów**. Rejestr mapuje slugi możliwości do ich klas handlerów i udostępnia je dyspozytorowi narzędzi agenta AI.

Aby zarejestrować niestandardową możliwość zarządzania pluginami:

```php
add_filter('gratis_ai_plugin_abilities', function(array $abilities): array {
    $abilities['my_custom_ability'] = [
        'class'       => My_Custom_Plugin_Ability::class,
        'label'       => 'Moja niestandardowa możliwość',
        'description' => 'Wykonuje coś użytecznego z pluginami.',
    ];
    return $abilities;
});
```

Twoja klasa możliwości musi implementować `Gratis_AI_Ability_Interface`:

```php
class My_Custom_Plugin_Ability implements Gratis_AI_Ability_Interface {

    public function get_slug(): string {
        return 'my_custom_ability';
    }

    public function get_schema(): array {
        return [
            'name'        => 'my_custom_ability',
            'description' => 'Wykonuje coś użytecznego z pluginami.',
            'parameters'  => [
                'type'       => 'object',
                'properties' => [
                    'slug' => [
                        'type'        => 'string',
                        'description' => 'Slug pluginu, na którym ma zostać wykonana operacja.',
                    ],
                ],
                'required' => ['slug'],
            ],
        ];
    }

    public function execute(array $params): array {
        $slug = sanitize_key($params['slug'] ?? '');
        // ... Twoja implementacja ...
        return ['success' => true, 'slug' => $slug];
    }
}
```

## Integracja HookScanner {#hookscanner-integration}

Możliwości `create_plugin` i `update_plugin` automatycznie uruchamiają **HookScanner** na nowo wygenerowanym kodzie. HookScanner zwraca listę akcji i filtrów WordPress zarejestrowanych przez plugin.

Aby programowo pobrać wyniki HookScanner:

```php
$scanner = new Gratis_AI_Hook_Scanner();
$hooks   = $scanner->scan_plugin_slug('my-generated-plugin');

foreach ($hooks['actions'] as $hook) {
    echo "Action: {$hook['hook']} — callback: {$hook['callback']}\n";
}

foreach ($hooks['filters'] as $hook) {
    echo "Filter: {$hook['hook']} — callback: {$hook['callback']}\n";
}
```

HookScanner automatycznie pomija katalogi `vendor/` i `node_modules/`.

## Architektura Zadań Asynchronicznych {#async-job-architecture}

Długotrwałe operacje na pluginach (generowanie, instalacja) są wysyłane jako **zadania asynchroniczne** z bieżącym śledzeniem postępów. Interfejs czatu AI okresowo sprawdza status zadania i przesyła użytkownikowi aktualizacje statusu:

1. **Dispatch** — możliwość tworzy zadanie asynchroniczne i zwraca ID zadania.
2. **Poll** — agent okresowo sprawdza `gratis_ai_job_status($job_id)` co 2 sekundy.
3. **Stream** — pośrednie komunikaty o postępie są wysyłane do wątku czatu.
4. **Complete** — ostateczny wynik (sukces lub błąd) jest zwracany i wyświetlany.

Aby podpiąć się do zdarzeń cyklu życia zadania:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Zadanie {$job_id} rozpoczęte dla możliwości: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Zadanie {$job_id} zakończone. Sukces: " . ($result['success'] ? 'tak' : 'nie'));
}, 10, 2);
```
