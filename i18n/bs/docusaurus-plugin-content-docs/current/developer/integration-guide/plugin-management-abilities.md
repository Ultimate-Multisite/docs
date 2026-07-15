---
title: Sposobnosti upravljanja pluginovima
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Funkcionalnosti Upravljanja Pluginima

Gratis AI Agent v1.5.0 dolazi sa **7 funkcionalnosti upravljanja pluginima** koje AI asistent može aktivirati tokom razgovora. Ove funkcionalnosti pružaju programski kontrolu nad WordPress pluginovima instaliranim putem [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox).

## Pregled Funkcionalnosti {#abilities-overview}

| Funkcionalnost | Slug | Opis |
|---|---|---|
| List Plugins | `list_plugins` | Vraća listu pluginova u sandbox skladištu sa njihovim statusom. |
| Get Plugin | `get_plugin` | Dohvata metapodatke i izvorni kod za određeni plugin po slug-u. |
| Create Plugin | `create_plugin` | Generiše novi plugin iz opisa i skladišti ga u sandboxu. |
| Update Plugin | `update_plugin` | Zamjenjuje izvorni kod plugin-a novom verzijom. |
| Delete Plugin | `delete_plugin` | Uklanja plugin iz sandbox skladišta. Prvo ga deaktivira. |
| Install Plugin | `install_plugin` | Implementira (deployuje) sandboks plugin u živo WordPress direktorijum pluginova. |
| Activate Plugin | `activate_plugin` | Aktivira sandboks plugin u wp-env sandbox okruženju. |

## API za Instalaciju Pluginova {#plugin-installer-api}

Instalator pluginova obrađuje operacije na sistemu datoteka prilikom implementacije ili uklanjanja pluginova. Ključne karakteristike su:

- **Validacija putanje**: Sve plugin putanje se validiraju u odnosu na dozvoljeni direktorijum pluginova prije bilo kakvog pisanja datoteka. Pokušaji traversiranja direktorijuma odbijaju se.
- **Instalacija više datoteka**: Plugin može sastojati se od više datoteka. Instalator kreira direktorijum plugin-a i sve datoteke piše atomski.
- **Ažuriranje**: Zamjenjuje postojeće plugin datoteke. Deaktivira plugin prije pisanja kako bi se izbjegle greške djelimičnog stanja.
- **Brisanje po slug-u**: Pronalazi direktorijum plugin-a po slug-u, deaktivira ga na svim sajtovima, a zatim uklanja direktorijum.

### Registracija Prilagođenog Handler-a za Instalaciju {#registering-a-custom-install-handler}

Možete se hook-ovati u životni ciklus instalacije koristeći akcije `gratis_ai_plugin_installer_before_install` i `gratis_ai_plugin_installer_after_install`:

```php
add_action('gratis_ai_plugin_installer_before_install', function(string $slug, array $files): void {
    // $slug: ime direktorijuma plugin-a
    // $files: asocijativni niz relativne putanje => sadržaj datoteke
    error_log("Instalacija plugin-a: {$slug} sa " . count($files) . " datoteka.");
}, 10, 2);

add_action('gratis_ai_plugin_installer_after_install', function(string $slug, bool $success): void {
    if ($success) {
        error_log("Plugin {$slug} uspješno instaliran.");
    }
}, 10, 2);
```

## Registry Ekosistema {#ecosystem-registry}

Funkcionalnosti se registruju putem **registryja ekosistema pluginova**. Registry mapira slug-ove funkcionalnosti na njihove handler klase i izlaže ih dispečeru alata AI agenta.

Da biste registraciju prilagođene funkcionalnosti upravljanja pluginima:

```php
add_filter('gratis_ai_plugin_abilities', function(array $abilities): array {
    $abilities['my_custom_ability'] = [
        'class'       => My_Custom_Plugin_Ability::class,
        'label'       => 'Moja Prilagođena Funkcionalnost',
        'description' => 'Radi nešto korisno sa pluginovima.',
    ];
    return $abilities;
});
```

Vaša klasa funkcionalnosti mora implementirati `Gratis_AI_Ability_Interface`:

```php
class My_Custom_Plugin_Ability implements Gratis_AI_Ability_Interface {

    public function get_slug(): string {
        return 'my_custom_ability';
    }

    public function get_schema(): array {
        return [
            'name'        => 'my_custom_ability',
            'description' => 'Radi nešto korisno sa pluginovima.',
            'parameters'  => [
                'type'       => 'object',
                'properties' => [
                    'slug' => [
                        'type'        => 'string',
                        'description' => 'Slug plugin-a na kojem se radi.',
                    ],
                ],
                'required' => ['slug'],
            ],
        ];
    }

    public function execute(array $params): array {
        $slug = sanitize_key($params['slug'] ?? '');
        // ... vaša implementacija ...
        return ['success' => true, 'slug' => $slug];
    }
}
```

## Integracija HookScanner-a {#hookscanner-integration}

Funkcionalnosti `create_plugin` i `update_plugin` automatski pokreću **HookScanner** na novogeneriranom kodu. HookScanner vraća listu WordPress akcionih i filter hook-ova koje je plugin registrirao.

Da biste programski dohvatili rezultate HookScanner-a:

```php
$scanner = new Gratis_AI_Hook_Scanner();
$hooks   = $scanner->scan_plugin_slug('my-generated-plugin');

foreach ($hooks['actions'] as $hook) {
    echo "Akcija: {$hook['hook']} — callback: {$hook['callback']}\n";
}

foreach ($hooks['filters'] as $hook) {
    echo "Filter: {$hook['hook']} — callback: {$hook['callback']}\n";
}
```

HookScanner automatski preskače direktorijume `vendor/` i `node_modules/`.

## Arhitektura Asinhronih Zadataka {#async-job-architecture}

Dugotrajne operacije pluginova (generisanje, instalacija) dispatchuju se kao **asinhroni zadaci** sa praćenjem napretka u realnom vremenu. AI chat interfejs proverava napredak i streamuje statusne ažuriranja korisniku:

1. **Dispatch** — funkcionalnost kreira asinhroni zadatak i vraća ID zadatka.
2. **Poll** — agent proverava `gratis_ai_job_status($job_id)` svakih 2 sekunde.
3. **Stream** — privremene poruke o napretku pushuju se u chat niti.
4. **Complete** — konačni rezultat (uspjeh ili greška) se vraća i prikazuje.

Da biste se hook-ovali u životni ciklus zadataka:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Zadatak {$job_id} započeo za funkcionalnost: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Zadatak {$job_id} završen. Uspjeh: " . ($result['success'] ? 'da' : 'ne'));
}, 10, 2);
```
