---
title: பி Plugin நிர்வாக திறன்கள்
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Plugin நிர்வாக திறன்கள் {#plugin-management-abilities}

Gratis AI Agent v1.5.0 ஆனது, உரையாடலின் போது AI உதவியாளர் பயன்படுத்தக்கூடிய **7 plugin நிர்வாக திறன்களைக்** கொண்டுள்ளது. இந்தத் திறன்கள், [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox) மூலம் நிறுவப்பட்ட WordPress plugin-களை நிரல்வழி முறையில் கட்டுப்படுத்த உதவுகின்றன.

## திறன்கள் கண்ணோட்டம் (Abilities Overview) {#abilities-overview}

| Ability | Slug | Description |
|---|---|---|
| List Plugins | `list_plugins` | சாண்ட்பாக்ஸ் ஸ்டோரில் உள்ள plugin-களின் நிலை (status) மற்றும் அவற்றின் பட்டியலைத் தருகிறது. |
| Get Plugin | `get_plugin` | ஒரு குறிப்பிட்ட plugin-க்கான மெட்டாடேட்டாவையும் (metadata) மூலக் குறியீட்டையும் (source code) அதன் slug மூலம் மீட்டெடுக்கிறது. |
| Create Plugin | `create_plugin` | ஒரு விளக்கத்தின் (description) அடிப்படையில் ஒரு புதிய plugin-ஐ உருவாக்கி, அதை சாண்ட்பாக்ஸில் சேமிக்கிறது. |
| Update Plugin | `update_plugin` | ஒரு plugin-ன் மூலக் குறியீட்டை (source code) புதிய பதிப்பால் மாற்றுகிறது. |
| Delete Plugin | `delete_plugin` | சாண்ட்பாக்ஸ் ஸ்டோரிலிருந்து ஒரு plugin-ஐ நீக்குகிறது. முதலில் அதைச் செயலிழக்கச் செய்யும் (Deactivates). |
| Install Plugin | `install_plugin` | சாண்ட்பாக்ஸில் உள்ள plugin-ஐ நேரடி WordPress plugin கோப்பகத்தில் (live plugin directory) நிலைநிறுத்துகிறது (Deploys). |
| Activate Plugin | `activate_plugin` | wp-env சாண்ட்பாக்ஸ் சூழலில் உள்ள plugin-ஐச் செயலில் வைக்கிறது (Activates). |

## Plugin Installer API {#plugin-installer-api}

plugin-களை நிலைநிறுத்தும்போதோ அல்லது நீக்கும்போதோ, இந்த plugin installer கோப்பு அமைப்பு செயல்பாடுகளை (file system operations) கையாளுகிறது. முக்கிய செயல்பாடுகள்:

- **Path validation**: எந்தவொரு கோப்பு எழுதும் செயல்பாட்டிற்கும் முன்னரே, அனைத்து plugin பாதைகளும் (paths) அனுமதிக்கப்பட்ட plugin கோப்பகத்துடன் சரிபார்க்கப்படுகின்றன. கோப்பகப் பாதை ஊடுருவல் (Directory traversal) முயற்சிகள் நிராகரிக்கப்படும்.
- **Multi-file install**: ஒரு plugin பல கோப்புகளைக் கொண்டிருக்கலாம். நிறுவனர் (installer) plugin கோப்பகத்தை உருவாக்கி, அனைத்து கோப்புகளையும் ஒரே நேரத்தில் (atomically) எழுதுகிறது.
- **Update**: ஏற்கனவே உள்ள plugin கோப்புகளை மாற்றுகிறது. பகுதி-நிலை பிழைகளை (partial-state errors) தவிர்க்க, எழுதுவதற்கு முன் plugin-ஐ செயலிழக்கச் செய்கிறது.
- **Delete by slug**: slug மூலம் plugin கோப்பகத்தைக் கண்டறிந்து, அனைத்து தளங்களிலும் (all sites) அதைச் செயலிழக்கச் செய்து, பின்னர் கோப்பகத்தை நீக்குகிறது.

### ஒரு தனிப்பயன் நிறுவல் கையாளுநரை (Custom Install Handler)ப் பதிவு செய்தல் {#registering-a-custom-install-handler}

`gratis_ai_plugin_installer_before_install` மற்றும் `gratis_ai_plugin_installer_after_install` என்ற actions-ஐப் பயன்படுத்தி, நீங்கள் நிறுவல் வாழ்க்கைச் சுழற்சியில் (install lifecycle) ஹூக் (hook) செய்யலாம்:

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

## Ecosystem Registry {#ecosystem-registry}

திறன்கள் (Abilities) **plugin ecosystem registry** மூலம் பதிவு செய்யப்படுகின்றன. இந்த பதிவேடு (registry), ability slug-களை அவற்றின் handler class-களுடன் வரைபடமாக்கி (maps), அவற்றை AI முகவரின் tool dispatcher-க்கு வெளிப்படுத்துகிறது.

ஒரு தனிப்பயன் plugin நிர்வாகத் திறனைப் பதிவு செய்ய:

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

உங்கள் ability class ஆனது `Gratis_AI_Ability_Interface`-ஐ செயல்படுத்த வேண்டும்:

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

## HookScanner ஒருங்கிணைப்பு (Integration) {#hookscanner-integration}

`create_plugin` மற்றும் `update_plugin` திறன்கள், புதிதாக உருவாக்கப்பட்ட குறியீட்டின் மீது தானாகவே **HookScanner**-ஐ இயக்குகின்றன. இந்த HookScanner, plugin மூலம் பதிவு செய்யப்பட்ட WordPress action மற்றும் filter hook-களின் பட்டியலைத் தருகிறது.

HookScanner முடிவுகளை நிரல்வழி முறையில் பெற:

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

HookScanner தானாகவே `vendor/` மற்றும் `node_modules/` கோப்பகங்களைத் தவிர்க்கும்.

## Async Job Architecture {#async-job-architecture}

நீண்ட நேரம் இயங்கும் plugin செயல்பாடுகள் (உருவாக்குதல், நிறுவுதல் போன்றவை) **async jobs** ஆக அனுப்பப்பட்டு, நேரடி முன்னேற்றத்தைக் கண்காணிக்கும் வசதியுடன் வருகின்றன. AI chat interface, முன்னேற்றத்திற்காக விசாரித்து (polls), நிலைப் புதுப்பித்தல்களை (status updates) பயனருக்கு அனுப்பும் (streams):

1. **Dispatch** — ability ஒரு async job-ஐ உருவாக்கி, ஒரு job ID-ஐத் திருப்பி அளிக்கிறது.
2. **Poll** — முகவர் ஒவ்வொரு 2 வினாடிக்கும் `gratis_ai_job_status($job_id)`-ஐ விசாரிக்கும்.
3. **Stream** — இடைப்பட்ட முன்னேற்றச் செய்திகள் chat thread-க்கு அனுப்பப்படும்.
4. **Complete** — இறுதி முடிவு (வெற்றி அல்லது பிழை) திருப்பி அனுப்பப்பட்டு காண்பிக்கப்படும்.

Job வாழ்க்கைச் சுழற்சி நிகழ்வுகளில் ஹூக் செய்ய:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
