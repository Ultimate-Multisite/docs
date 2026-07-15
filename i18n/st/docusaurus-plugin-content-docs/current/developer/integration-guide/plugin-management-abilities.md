---
title: Bokhoni ba Tsamaiso ea Plugin
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Bokgoni ba Taolo ya Dikatoloso

Gratis AI Agent v1.5.0 e tla le **bokgoni ba 7 ba taolo ya dikatoloso** boo mothusi wa AI a ka bo bitsang nakong ya puisano. Bokgoni bona bo fana ka taolo ya mananeo hodima dikatoloso tsa WordPress tse kentsweng ka [Sistimi ya Sehahi sa Dikatoloso le Sandbox](../../user-guide/administration/plugin-builder-and-sandbox).

## Kakaretso ya Bokgoni {#abilities-overview}

| Bokgoni | Slug | Tlhaloso |
|---|---|---|
| Etsa Lenane la Dikatoloso | `list_plugins` | E kgutlisa lenane la dikatoloso tse polokelong ya sandbox le boemo ba tsona. |
| Fumana Katoloso | `get_plugin` | E lata metadata le khoutu ya mohlodi bakeng sa katoloso e itseng ka slug. |
| Etsa Katoloso | `create_plugin` | E hlahisa katoloso e ntjha ho tswa tlhalosong mme e e boloka ka sandbox. |
| Ntjhafatsa Katoloso | `update_plugin` | E nkela khoutu ya mohlodi ya katoloso sebaka ka mofuta o motjha. |
| Hlakola Katoloso | `delete_plugin` | E tlosa katoloso polokelong ya sandbox. E e tima pele. |
| Kenya Katoloso | `install_plugin` | E romela katoloso e ka sandbox bukeng ya dikatoloso ya WordPress e phelang. |
| Kenya Tshebetsong Katoloso | `activate_plugin` | E kenya tshebetsong katoloso e ka sandbox tikolohong ya wp-env sandbox. |

## API ya Sehlomamisi sa Dikatoloso {#plugin-installer-api}

Sehlomamisi sa dikatoloso se sebetsana le ditshebetso tsa sistimi ya difaele ha ho romelwa kapa ho tloswa dikatoloso. Mekgwa ya bohlokwa:

- **Netefatso ya tsela**: Ditsela tsohle tsa dikatoloso di netefatswa kgahlanong le buka ya dikatoloso e dumelletsweng pele ho ngolwa faele efe kapa efe. Diteko tsa ho tsamaya ka hara dibuka di a hanwa.
- **Ho kenya difaele tse ngata**: Katoloso e ka ba le difaele tse ngata. Sehlomamisi se etsa buka ya katoloso mme se ngola difaele tsohle ka mokgwa wa atomiki.
- **Ntjhafatso**: E nkela difaele tse teng tsa katoloso sebaka. E tima katoloso pele e ngola ho qoba diphoso tsa boemo bo sa fellang.
- **Hlakola ka slug**: E fumana buka ya katoloso ka slug, e tima katoloso dibakeng tsohle tsa marang-rang, ebe e tlosa buka.

### Ho Ngodisa Setsamaisi sa ho Kenya se Ikgethileng {#registering-a-custom-install-handler}

O ka hokela potolohong ya bophelo ya ho kenya o sebedisa diketso tsa `gratis_ai_plugin_installer_before_install` le `gratis_ai_plugin_installer_after_install`:

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

## Rejistara ya Tikoloho ya Dikatoloso {#ecosystem-registry}

Bokgoni bo ngodiswa ka **rejistara ya tikoloho ya dikatoloso**. Rejistara e hokahanya di-slug tsa bokgoni le diklase tsa batsamaisi ba tsona mme e di pepesetsa moromelli wa disebediswa wa agent ya AI.

Ho ngodisa bokgoni bo ikgethileng ba taolo ya dikatoloso:

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

Klase ya hao ya bokgoni e tlameha ho kenya tshebetsong `Gratis_AI_Ability_Interface`:

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

## Kopanyo ya HookScanner {#hookscanner-integration}

Bokgoni ba `create_plugin` le `update_plugin` bo tsamaisa **HookScanner** ka bo bona kgahlanong le khoutu e sa tswa hlahiswa. HookScanner e kgutlisa lenane la di-hook tsa ketso le sefene tsa WordPress tse ngodisitsweng ke katoloso.

Ho lata diphetho tsa HookScanner ka mananeo:

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

HookScanner e tlola dibuka tsa `vendor/` le `node_modules/` ka bo yona.

## Sebopeho sa Mesebetsi ya Async {#async-job-architecture}

Ditshebetso tsa dikatoloso tse nkang nako e telele (hlahisa, kenya) di romelwa e le **mesebetsi ya async** e nang le ho sala morao tswelopele ka nako ya nnete. Sehokelo sa puisano sa AI se botsa kgafetsa bakeng sa tswelopele mme se phallela dintjhafatso tsa boemo ho mosebedisi:

1. **Romela** — bokgoni bo etsa mosebetsi wa async mme bo kgutlisa ID ya mosebetsi.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Phallela** — melaetsa ya tswelopele ya mahareng e sutumelletswa kgweleng ya puisano.
4. **Phethela** — sephetho sa ho qetela (katleho kapa phoso) se kgutliswa mme se bontshwa.

Ho hokela diketsahalong tsa potoloho ya bophelo ya mosebetsi:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
