---
title: Zmožnosti upravljanja vtičnikov
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Zmožnosti upravljanja vtičnikov {#plugin-management-abilities}

Gratis AI Agent v1.5.0 vključuje **7 zmožnosti upravljanja vtičnikov**, ki jih lahko AI pomočnik prikliče med pogovorom. Te zmožnosti omogočajo programski nadzor nad WordPress vtičniki, nameščenimi prek [Sistema za gradnjo vtičnikov in peskovnik](../../user-guide/administration/plugin-builder-and-sandbox).

## Pregled zmožnosti {#abilities-overview}

| Zmožnost | Slug | Opis |
|---|---|---|
| Seznam vtičnikov | `list_plugins` | Vrne seznam vtičnikov v skladišču peskovnika z njihovim stanjem. |
| Pridobi vtičnik | `get_plugin` | Pridobi metapodatke in izvorno kodo za določen vtičnik po slugu. |
| Ustvari vtičnik | `create_plugin` | Ustvari nov vtičnik iz opisa in ga shrani v peskovnik. |
| Posodobi vtičnik | `update_plugin` | Zamenja izvorno kodo vtičnika z novo različico. |
| Izbriši vtičnik | `delete_plugin` | Odstrani vtičnik iz skladišča peskovnika. Najprej ga deaktivira. |
| Namesti vtičnik | `install_plugin` | Razmesti vtičnik iz peskovnika v živi imenik vtičnikov WordPress. |
| Aktiviraj vtičnik | `activate_plugin` | Aktivira vtičnik iz peskovnika v okolju peskovnika wp-env. |

## API namestitvenega programa vtičnikov {#plugin-installer-api}

Namestitveni program vtičnikov upravlja operacije datotečnega sistema pri razmeščanju ali odstranjevanju vtičnikov. Ključna vedenja:

- **Preverjanje poti**: Vse poti vtičnikov se pred vsakim zapisovanjem datotek preverijo glede na dovoljen imenik vtičnikov. Poskusi prehajanja med imeniki so zavrnjeni.
- **Namestitev z več datotekami**: Vtičnik je lahko sestavljen iz več datotek. Namestitveni program ustvari imenik vtičnika in atomsko zapiše vse datoteke.
- **Posodobitev**: Zamenja obstoječe datoteke vtičnika. Pred zapisovanjem deaktivira vtičnik, da se izogne napakam delnega stanja.
- **Brisanje po slugu**: Poišče imenik vtičnika po slugu, ga deaktivira na vseh spletnih mestih in nato odstrani imenik.

### Registracija prilagojenega upravljalnika namestitve {#registering-a-custom-install-handler}

V življenjski cikel namestitve se lahko vključite z dejanji `gratis_ai_plugin_installer_before_install` in `gratis_ai_plugin_installer_after_install`:

```php
add_action('gratis_ai_plugin_installer_before_install', function(string $slug, array $files): void {
    // $slug: the plugin's directory name
    // $files: associative array of relative path => file content
    error_log("Installing plugin: {$slug} with " . count($files) . " files.");
}, 10, 2);

add_action('gratis_ai_plugin_installer_after_install', function(string $slug, bool $success): void {
    if ($success) {
        error_log("Plugin {$slug} installed successfully.");
    }
}, 10, 2);
```

## Register ekosistema {#ecosystem-registry}

Zmožnosti se registrirajo prek **registra ekosistema vtičnikov**. Register preslika sluge zmožnosti v njihove razrede upravljalnikov in jih izpostavi dispečerju orodij AI agenta.

Za registracijo prilagojene zmožnosti upravljanja vtičnikov:

```php
add_filter('gratis_ai_plugin_abilities', function(array $abilities): array {
    $abilities['my_custom_ability'] = [
        'class'       => My_Custom_Plugin_Ability::class,
        'label'       => 'My Custom Ability',
        'description' => 'Does something useful with plugins.',
    ];
    return $abilities;
});
```

Vaš razred zmožnosti mora implementirati `Gratis_AI_Ability_Interface`:

```php
class My_Custom_Plugin_Ability implements Gratis_AI_Ability_Interface {

    public function get_slug(): string {
        return 'my_custom_ability';
    }

    public function get_schema(): array {
        return [
            'name'        => 'my_custom_ability',
            'description' => 'Does something useful with plugins.',
            'parameters'  => [
                'type'       => 'object',
                'properties' => [
                    'slug' => [
                        'type'        => 'string',
                        'description' => 'The plugin slug to operate on.',
                    ],
                ],
                'required' => ['slug'],
            ],
        ];
    }

    public function execute(array $params): array {
        $slug = sanitize_key($params['slug'] ?? '');
        // ... your implementation ...
        return ['success' => true, 'slug' => $slug];
    }
}
```

## Integracija HookScanner {#hookscanner-integration}

Zmožnosti `create_plugin` in `update_plugin` samodejno zaženejo **HookScanner** nad novo ustvarjeno kodo. HookScanner vrne seznam WordPress dejanj in filtrov hookov, ki jih registrira vtičnik.

Za programsko pridobivanje rezultatov HookScanner:

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

HookScanner samodejno preskoči imenika `vendor/` in `node_modules/`.

## Arhitektura asinhronih opravil {#async-job-architecture}

Dolgotrajne operacije vtičnikov (ustvarjanje, namestitev) se odpošljejo kot **asinhrona opravila** s sprotnim spremljanjem napredka. Vmesnik AI klepeta preverja napredek in uporabniku pretaka posodobitve stanja:

1. **Odpošiljanje** — zmožnost ustvari asinhrono opravilo in vrne ID opravila.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Pretakanje** — vmesna sporočila o napredku se potisnejo v nit klepeta.
4. **Dokončanje** — končni rezultat (uspeh ali napaka) se vrne in prikaže.

Za vključitev v dogodke življenjskega cikla opravila:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
