---
title: Ikike Njikwa Plugin
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Ikike Njikwa Ngwa Mgbakwunye

Gratis AI Agent v1.5.0 na-abịa na **ikike njikwa ngwa mgbakwunye 7** nke onye enyemaka AI nwere ike ịkpọ n’oge mkparịta ụka. Ikike ndị a na-enye njikwa site na mmemme n’elu ngwa mgbakwunye WordPress etinyere site na [Usoro Onye Nrụpụta Ngwa Mgbakwunye na Sandbox](../../user-guide/administration/plugin-builder-and-sandbox).

## Nchịkọta Ikike {#abilities-overview}

| Ikike | Slug | Nkọwa |
|---|---|---|
| Depụta Ngwa Mgbakwunye | `list_plugins` | Na-eweghachite ndepụta ngwa mgbakwunye dị na ụlọ ahịa sandbox tinyere ọnọdụ ha. |
| Nweta Ngwa Mgbakwunye | `get_plugin` | Na-eweghachite metadata na koodu isi maka ngwa mgbakwunye akọwapụtara site na slug. |
| Mepụta Ngwa Mgbakwunye | `create_plugin` | Na-emepụta ngwa mgbakwunye ọhụrụ site na nkọwa ma debe ya na sandbox. |
| Melite Ngwa Mgbakwunye | `update_plugin` | Na-eji ụdị ọhụrụ dochie koodu isi nke ngwa mgbakwunye. |
| Hichapụ Ngwa Mgbakwunye | `delete_plugin` | Na-ewepụ ngwa mgbakwunye n’ụlọ ahịa sandbox. Na-eme ka ọ kwụsị ọrụ mbụ. |
| Wụnye Ngwa Mgbakwunye | `install_plugin` | Na-ebunye ngwa mgbakwunye sandbox gaa na ndekọ ngwa mgbakwunye WordPress dị ndụ. |
| Mee Ka Ngwa Mgbakwunye Rụọ Ọrụ | `activate_plugin` | Na-eme ka ngwa mgbakwunye sandbox rụọ ọrụ n’ime gburugburu sandbox wp-env. |

## API Onye Wụnye Ngwa Mgbakwunye {#plugin-installer-api}

Onye wụnye ngwa mgbakwunye na-elekọta ọrụ sistemụ faịlụ mgbe a na-ebunye ma ọ bụ na-ewepụ ngwa mgbakwunye. Omume ndị bụ isi:

- **Nkwado ụzọ**: A na-enyocha ụzọ ngwa mgbakwunye niile megide ndekọ ngwa mgbakwunye enyere ikike tupu e dee faịlụ ọ bụla. A na-ajụ mbọ ịgafe ndekọ.
- **Nwụnye ọtụtụ faịlụ**: Ngwa mgbakwunye nwere ike inwe ọtụtụ faịlụ. Onye wụnye na-emepụta ndekọ ngwa mgbakwunye ma dee faịlụ niile n’ụzọ atomic.
- **Mmelite**: Na-eji dochie faịlụ ngwa mgbakwunye dị ugbu a. Na-eme ka ngwa mgbakwunye kwụsị ọrụ tupu ide ihe iji zere njehie ọnọdụ na-ezughị ezu.
- **Ihichapụ site na slug**: Na-achọta ndekọ ngwa mgbakwunye site na slug, na-eme ka ọ kwụsị ọrụ n’ofe saịtị niile, mgbe ahụ wepụ ndekọ ahụ.

### Idebanye Handler Nwụnye Omenala {#registering-a-custom-install-handler}

Ị nwere ike iji `gratis_ai_plugin_installer_before_install` na `gratis_ai_plugin_installer_after_install` actions banye n’ime usoro ndụ nwụnye:

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

## Ndebanye Ecosystem {#ecosystem-registry}

A na-edebanye ikike site na **ndebanye ecosystem ngwa mgbakwunye**. Ndebanye ahụ na-ejikọta slugs ikike na klas handler ha ma mee ka ha pụta nye onye nkesa ngwá ọrụ nke AI agent.

Iji debanye ikike njikwa ngwa mgbakwunye omenala:

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

Klas ikike gị ga-etinyerịrị `Gratis_AI_Ability_Interface` n’ọrụ:

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

## Njikọta HookScanner {#hookscanner-integration}

Ikike `create_plugin` na `update_plugin` na-agba **HookScanner** na-akpaghị aka megide koodu emepụtara ọhụrụ. HookScanner na-eweghachite ndepụta hooks action na filter WordPress nke ngwa mgbakwunye debanyere.

Iji weghachite nsonaazụ HookScanner site na mmemme:

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

HookScanner na-awụpụ ndekọ `vendor/` na `node_modules/` na-akpaghị aka.

## Nhazi Ọrụ Async {#async-job-architecture}

A na-eziga ọrụ ngwa mgbakwunye na-ewe ogologo oge (mepụta, wụnye) dị ka **ọrụ async** nwere nsuso ọganihu dị ndụ. Interface nkata AI na-ajụ maka ọganihu ma na-ebuga mmelite ọnọdụ nye onye ọrụ:

1. **Zipụ** — ikike ahụ na-emepụta ọrụ async ma weghachite ID ọrụ.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Stream** — a na-ebuga ozi ọganihu dị n’etiti gaa na thread nkata.
4. **Mechaa** — a na-eweghachite ma gosipụta nsonaazụ ikpeazụ (ihe ịga nke ọma ma ọ bụ njehie).

Iji banye n’ihe omume usoro ndụ ọrụ:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
