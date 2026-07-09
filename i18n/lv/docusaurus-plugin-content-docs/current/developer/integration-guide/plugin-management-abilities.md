---
title: Spraudņu pārvaldības iespējas
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Spraudņu pārvaldības iespējas {#plugin-management-abilities}

Gratis AI Agent v1.5.0 tiek piegādāts ar **7 spraudņu pārvaldības iespējām**, kuras AI asistents var izsaukt sarunas laikā. Šīs iespējas nodrošina programmātisku kontroli pār WordPress spraudņiem, kas instalēti, izmantojot [Spraudņu veidotāja un Sandbox sistēmu](../../user-guide/administration/plugin-builder-and-sandbox).

## Iespēju pārskats {#abilities-overview}

| Iespēja | Slug | Apraksts |
|---|---|---|
| Uzskaitīt spraudņus | `list_plugins` | Atgriež sandbox krātuvē esošo spraudņu sarakstu ar to statusu. |
| Iegūt spraudni | `get_plugin` | Iegūst metadatus un pirmkodu konkrētam spraudnim pēc slug. |
| Izveidot spraudni | `create_plugin` | Ģenerē jaunu spraudni no apraksta un saglabā to sandbox. |
| Atjaunināt spraudni | `update_plugin` | Aizstāj spraudņa pirmkodu ar jaunu versiju. |
| Dzēst spraudni | `delete_plugin` | Noņem spraudni no sandbox krātuves. Vispirms deaktivizē. |
| Instalēt spraudni | `install_plugin` | Izvieto sandbox spraudni dzīvajā WordPress spraudņu direktorijā. |
| Aktivizēt spraudni | `activate_plugin` | Aktivizē sandbox spraudni wp-env sandbox vidē. |

## Spraudņu instalētāja API {#plugin-installer-api}

Spraudņu instalētājs apstrādā failu sistēmas darbības, izvietojot vai noņemot spraudņus. Galvenās darbības:

- **Ceļa validācija**: Visi spraudņu ceļi pirms jebkādas faila rakstīšanas tiek validēti pret atļauto spraudņu direktoriju. Direktoriju šķērsošanas mēģinājumi tiek noraidīti.
- **Vairāku failu instalēšana**: Spraudnis var sastāvēt no vairākiem failiem. Instalētājs izveido spraudņa direktoriju un atomāri ieraksta visus failus.
- **Atjaunināšana**: Aizstāj esošos spraudņa failus. Pirms rakstīšanas deaktivizē spraudni, lai izvairītos no daļēja stāvokļa kļūdām.
- **Dzēšana pēc slug**: Atrod spraudņa direktoriju pēc slug, deaktivizē visās vietnēs un pēc tam noņem direktoriju.

### Pielāgota instalēšanas apstrādātāja reģistrēšana {#registering-a-custom-install-handler}

Varat pieslēgties instalēšanas dzīves ciklam, izmantojot `gratis_ai_plugin_installer_before_install` un `gratis_ai_plugin_installer_after_install` darbības:

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

## Ekosistēmas reģistrs {#ecosystem-registry}

Iespējas tiek reģistrētas, izmantojot **spraudņu ekosistēmas reģistru**. Reģistrs kartē iespēju slug uz to apstrādātāju klasēm un dara tās pieejamas AI agenta rīku dispečeram.

Lai reģistrētu pielāgotu spraudņu pārvaldības iespēju:

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

Jūsu iespējas klasei jāimplementē `Gratis_AI_Ability_Interface`:

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

## HookScanner integrācija {#hookscanner-integration}

`create_plugin` un `update_plugin` iespējas automātiski palaiž **HookScanner** pret jaunģenerēto kodu. HookScanner atgriež WordPress darbību un filtru āķu sarakstu, ko reģistrējis spraudnis.

Lai programmatiski izgūtu HookScanner rezultātus:

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

HookScanner automātiski izlaiž `vendor/` un `node_modules/` direktorijas.

## Asinhrono darbu arhitektūra {#async-job-architecture}

Ilgstošas spraudņu darbības (ģenerēšana, instalēšana) tiek nosūtītas kā **asinhronie darbi** ar tiešraides progresa izsekošanu. AI tērzēšanas saskarne aptaujā progresu un straumē statusa atjauninājumus lietotājam:

1. **Nosūtīšana** — iespēja izveido asinhronu darbu un atgriež darba ID.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Straumēšana** — starpposma progresa ziņojumi tiek nosūtīti uz tērzēšanas pavedienu.
4. **Pabeigšana** — gala rezultāts (veiksme vai kļūda) tiek atgriezts un parādīts.

Lai pieslēgtos darba dzīves cikla notikumiem:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
