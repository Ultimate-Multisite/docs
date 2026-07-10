---
title: Fahaiza-mitantana plugin
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Fahaiza-mitantana fanitarana {#plugin-management-abilities}

Gratis AI Agent v1.5.0 dia miaraka amin'ny **fahaiza-mitantana fanitarana 7** izay azon'ny mpanampy AI antsoina mandritra ny resaka. Ireo fahaiza-manao ireo dia manome fanaraha-maso ara-programa amin'ireo fanitarana WordPress napetraka amin'ny alalan'ny [Mpanamboatra Fanitarana sy Rafitra Sandbox](../../user-guide/administration/plugin-builder-and-sandbox).

## Topimaso momba ny fahaiza-manao {#abilities-overview}

| Fahaiza-manao | Slug | Famaritana |
|---|---|---|
| Tanisao ny fanitarana | `list_plugins` | Mamerina lisitry ny fanitarana ao amin'ny tahiry sandbox miaraka amin'ny satan'izy ireo. |
| Alao ny fanitarana | `get_plugin` | Maka metadata sy kaody loharano ho an'ny fanitarana manokana amin'ny alalan'ny slug. |
| Mamoròna fanitarana | `create_plugin` | Mamorona fanitarana vaovao avy amin'ny famaritana iray ary mitahiry azy ao amin'ny sandbox. |
| Havaozy ny fanitarana | `update_plugin` | Manolo ny kaody loharanon'ny fanitarana amin'ny kinova vaovao. |
| Fafao ny fanitarana | `delete_plugin` | Manala fanitarana iray ao amin'ny tahiry sandbox. Atsahatra aloha. |
| Apetraho ny fanitarana | `install_plugin` | Mandefa fanitarana sandboxed mankany amin'ny lahatahiry fanitarana WordPress mivantana. |
| Alefaso ny fanitarana | `activate_plugin` | Mampandeha fanitarana sandboxed ao amin'ny tontolo sandbox wp-env. |

## API Mpametraka Fanitarana {#plugin-installer-api}

Ny mpametraka fanitarana dia mikarakara ny asa amin'ny rafitra rakitra rehefa mandefa na manala fanitarana. Fitondran-tena fototra:

- **Fanamarinana lalana**: Ny lalan'ny fanitarana rehetra dia hamarinina amin'ny lahatahiry fanitarana avela alohan'ny fanoratana rakitra rehetra. Lavina ny andrana fitetezana lahatahiry.
- **Fametrahana rakitra maro**: Mety ahitana rakitra maro ny fanitarana iray. Mamorona ny lahatahiry fanitarana ny mpametraka ary manoratra ny rakitra rehetra amin'ny fomba atomika.
- **Fanavaozana**: Manolo ireo rakitra fanitarana efa misy. Atsahatra aloha ny fanitarana alohan'ny hanoratana mba hisorohana hadisoana amin'ny toe-javatra ampahany.
- **Famafana amin'ny slug**: Mitady ny lahatahiry fanitarana amin'ny alalan'ny slug, mampiato azy manerana ny site rehetra, avy eo manala ilay lahatahiry.

### Fisoratana Handler Fametrahana Manokana {#registering-a-custom-install-handler}

Afaka miditra amin'ny lifecycle fametrahana ianao amin'ny alalan'ny actions `gratis_ai_plugin_installer_before_install` sy `gratis_ai_plugin_installer_after_install`:

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

## Rejisitry ny Ekosistema {#ecosystem-registry}

Ny fahaiza-manao dia soratana amin'ny alalan'ny **rejisitry ny ekosisteman'ny fanitarana**. Ny rejisitra dia mampifandray ny slug an'ny fahaiza-manao amin'ny kilasy handler-ny ary mampiseho azy ireo amin'ny mpandefa fitaovan'ny agent AI.

Mba hisoratana fahaiza-mitantana fanitarana manokana:

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

Ny kilasy fahaiza-manaonao dia tsy maintsy mampihatra ny `Gratis_AI_Ability_Interface`:

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

## Fampidirana HookScanner {#hookscanner-integration}

Ny fahaiza-manao `create_plugin` sy `update_plugin` dia mampandeha ho azy ny **HookScanner** amin'ny kaody vao novokarina. HookScanner dia mamerina lisitry ny hook action sy filter WordPress nosoratan'ny fanitarana.

Mba hakana ny vokatra HookScanner amin'ny fomba ara-programa:

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

HookScanner dia mandingana ho azy ireo lahatahiry `vendor/` sy `node_modules/`.

## Maritranon'ny Asa Async {#async-job-architecture}

Ny asa fanitarana maharitra ela (mamorona, mametraka) dia alefa ho **asa async** miaraka amin'ny fanarahana fandrosoana mivantana. Ny interface chat AI dia manao poll ny fandrosoana ary mandefa fanavaozam-pisatahana amin'ny mpampiasa:

1. **Alefaso** — mamorona asa async ny fahaiza-manao ary mamerina ID asa.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Alefa mitohy** — atosika any amin'ny thread chat ny hafatra fandrosoana eo anelanelany.
4. **Vita** — averina sy aseho ny vokatra farany (fahombiazana na hadisoana).

Mba hidirana amin'ny hetsika lifecycle an'ny asa:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
