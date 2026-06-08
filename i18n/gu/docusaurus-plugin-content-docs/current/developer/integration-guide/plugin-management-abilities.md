---
title: પ્લગઇન મેનેજમેન્ટ ક્ષમતાઓ
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Plugin Management Abilities

Gratis AI Agent v1.5.0 માં **7 પ્લગઇન મેનેજમેન્ટ ક્ષમતાઓ** છે જે AI સહાયક વાતચીત દરમિયાન ઉપયોગમાં લઈ શકે છે. આ ક્ષમતાઓ [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox) દ્વારા ઇન્સ્ટોલ કરેલા WordPress પ્લગઇન્સ પર પ્રોગ્રામિંગ દ્વારા નિયંત્રણ પ્રદાન કરે છે.

## Abilities Overview

| Ability | Slug | Description |
|---|---|---|
| List Plugins | `list_plugins` | સેન્ડબોક્સ સ્ટોરમાં તેમના સ્ટેટસ સાથેના પ્લગઇન્સની યાદી પાછી આપે છે. |
| Get Plugin | `get_plugin` | સ્લગ દ્વારા ચોક્કસ પ્લગઇન માટે મેટાડેટા અને સ્ત્રોત કોડ મેળવે છે. |
| Create Plugin | `create_plugin` | વર્ણનમાંથી નવો પ્લગઇન જનરેટ કરે છે અને તેને સેન્ડબોક્સમાં સ્ટોર કરે છે. |
| Update Plugin | `update_plugin` | પ્લગઇનનો સ્ત્રોત કોડ નવા સંસ્કરણ સાથે બદલે છે. |
| Delete Plugin | `delete_plugin` | સેન્ડબોક્સ સ્ટોરમાંથી પ્લગઇનને દૂર કરે છે. પહેલા તેને ડિએક્ટિવેટ કરે છે. |
| Install Plugin | `install_plugin` | સેન્ડબોક્સ કરેલા પ્લગઇનને લાઇવ WordPress પ્લગઇન ડિરેક્ટરીમાં તૈનાત (deploy) કરે છે. |
| Activate Plugin | `activate_plugin` | wp-env સેન્ડબોક્સ એન્વાયર્નમેન્ટમાં સેન્ડબોક્સ કરેલા પ્લગઇનને એક્ટિવેટ કરે છે. |

## Plugin Installer API

પ્લગઇન ઇન્સ્ટોલર પ્લગઇન તૈનાત (deploy) કરતી વખતે અથવા દૂર કરતી વખતે ફાઇલ સિસ્ટમ ઓપરેશન્સનું સંચાલન કરે છે. મુખ્ય વર્તણૂકો (Key behaviours):

- **Path validation**: કોઈપણ ફાઇલ લખતા પહેલા તમામ પ્લગઇન પાથને મંજૂર કરેલ પ્લગઇન ડિરેક્ટરી સામે માન્ય (validate) કરવામાં આવે છે. ડિરેક્ટરી ટ્રેવર્સલના પ્રયાસોને નકારી કાઢવામાં આવે છે.
- **Multi-file install**: એક પ્લગઇનમાં બહુવિધ ફાઇલો હોઈ શકે છે. ઇન્સ્ટોલર પ્લગઇન ડિરેક્ટરી બનાવે છે અને તમામ ફાઇલોને એકસાથે (atomically) લખે છે.
- **Update**: હાલની પ્લગઇન ફાઇલોને બદલે છે. આંશિક-સ્થિતિની ભૂલો ટાળવા માટે લખતા પહેલા પ્લગઇનને ડિએક્ટિવેટ કરે છે.
- **Delete by slug**: સ્લગ દ્વારા પ્લગઇન ડિરેક્ટરી શોધે છે, તમામ સાઇટ્સ પર ડિએક્ટિવેટ કરે છે, અને પછી ડિરેક્ટરી દૂર કરે છે.

### Registering a Custom Install Handler

તમે `gratis_ai_plugin_installer_before_install` અને `gratis_ai_plugin_installer_after_install` એક્શનનો ઉપયોગ કરીને ઇન્સ્ટોલ લાઇફસાયકલમાં હૂક (hook) કરી શકો છો:

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

## Ecosystem Registry

ક્ષમતાઓ **પ્લગઇન ઇકોસિસ્ટમ રજિસ્ટ્રી** દ્વારા રજીસ્ટર કરવામાં આવે છે. આ રજિસ્ટ્રી એબિલિટી સ્લગ્સને તેમના હેન્ડલર ક્લાસ સાથે મેપ કરે છે અને તેમને AI એજન્ટના ટૂલ ડિસ્પેચરને એક્સપોઝ કરે છે.

કોઈ કસ્ટમ પ્લગઇન મેનેજમેન્ટ એબિલિટી રજીસ્ટર કરવા માટે:

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

તમારા એબિલિટી ક્લાસમાં `Gratis_AI_Ability_Interface` ને અમલ (implement) કરવો જરૂરી છે:

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

## HookScanner Integration

`create_plugin` અને `update_plugin` એબિલિટીઝ આપમેળે નવા જનરેટ કરેલા કોડ પર **HookScanner** ચલાવે છે. HookScanner પ્લગઇન દ્વારા રજીસ્ટર કરાયેલા WordPress એક્શન અને ફિલ્ટર હૂક્સની યાદી પાછી આપે છે.

HookScanner પરિણામો પ્રોગ્રામિંગ દ્વારા મેળવવા માટે:

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

HookScanner આપમેળે `vendor/` અને `node_modules/` ડિરેક્ટરીઓને અવગણે છે.

## Async Job Architecture

લાંબા સમય સુધી ચાલતી પ્લગઇન ઓપરેશન્સ (જનરેટ, ઇન્સ્ટોલ) ને લાઇવ પ્રગતિ ટ્રેકિંગ સાથે **એસિન્ક જોબ્સ** તરીકે ડિસ્પેચ કરવામાં આવે છે. AI ચેટ ઇન્ટરફેસ પ્રગતિ માટે પોલ કરે છે અને વપરાશકર્તાને સ્ટેટસ અપડેટ્સ સ્ટ્રીમ કરે છે:

1. **Dispatch** — એબિલિટી એક એસિન્ક જોબ બનાવે છે અને એક જોબ ID પાછો આપે છે.
2. **Poll** — એજન્ટ દર 2 સેકન્ડમાં `gratis_ai_job_status($job_id)` ને પોલ કરે છે.
3. **Stream** — મધ્યવર્તી પ્રગતિ સંદેશાઓ ચેટ થ્રેડમાં પુશ થાય છે.
4. **Complete** — અંતિમ પરિણામ (સફળતા અથવા ભૂલ) પાછું અપાય છે અને પ્રદર્શિત થાય છે.

જોબ લાઇફસાયકલ ઇવેન્ટ્સમાં હૂક કરવા માટે:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
