---
title: ప్లగిన్ నిర్వహణ సామర్థ్యాలు
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Plugin Management Abilities

Gratis AI Agent v1.5.0 లో **7 plugin management abilities** ఉన్నాయి. ఈ abilitiesని AI assistant సంభాషణ సమయంలో ఉపయోగించగలదు. ఈ abilities [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox) ద్వారా ఇన్‌స్టాల్ చేయబడిన WordPress plugins పై ప్రోగ్రామాటిక్ నియంత్రణను అందిస్తాయి.

## Abilities Overview

| Ability | Slug | Description |
|---|---|---|
| List Plugins | `list_plugins` | sandbox store లో ఉన్న plugins జాబితాను వాటి స్టేటస్‌తో సహా తిరిగి ఇస్తుంది. |
| Get Plugin | `get_plugin` | slug ద్వారా నిర్దిష్ట plugin యొక్క మెటాడేటా మరియు సోర్స్ కోడ్‌ను పొందుతుంది. |
| Create Plugin | `create_plugin` | ఒక వివరణ (description) నుండి కొత్త plugin ను రూపొందించి, దానిని sandbox లో నిల్వ చేస్తుంది. |
| Update Plugin | `update_plugin` | ఒక plugin యొక్క సోర్స్ కోడ్‌ను కొత్త వెర్షన్‌తో భర్తీ చేస్తుంది. |
| Delete Plugin | `delete_plugin` | sandbox store నుండి plugin ను తొలగిస్తుంది. ముందుగా డియాక్టివేట్ చేస్తుంది. |
| Install Plugin | `install_plugin` | sandboxed plugin ను లైవ్ WordPress plugin directory లోకి డిప్లాయ్ చేస్తుంది. |
| Activate Plugin | `activate_plugin` | wp-env sandbox environment లో sandboxed plugin ను యాక్టివేట్ చేస్తుంది. |

## Plugin Installer API

plugins ను డిప్లాయ్ చేయడం లేదా తొలగించడం చేసేటప్పుడు plugin installer file system operations ను నిర్వహిస్తుంది. ముఖ్యమైన విషయాలు:

- **Path validation**: ఏ ఫైల్ రైట్ చేసినా, అన్ని plugin paths లు అనుమతించబడిన plugin directory తో సరిపోల్చబడతాయి. Directory traversal ప్రయత్నాలను తిరస్కరిస్తుంది.
- **Multi-file install**: ఒక plugin లో బహుళ ఫైళ్లు ఉండవచ్చు. ఇన్‌స్టాలర్ plugin directory ను సృష్టించి, అన్ని ఫైళ్లను అటామిక్‌గా (atomically) రాస్తుంది.
- **Update**: ఇప్పటికే ఉన్న plugin ఫైళ్లను భర్తీ చేస్తుంది. పాక్షిక-స్థితి (partial-state) లోపాలను నివారించడానికి, రాసే ముందు plugin ను డియాక్టివేట్ చేస్తుంది.
- **Delete by slug**: slug ద్వారా plugin directory ను కనుగొని, అన్ని సైట్‌లలో డియాక్టివేట్ చేసి, ఆపై directory ను తొలగిస్తుంది.

### Registering a Custom Install Handler

మీరు `gratis_ai_plugin_installer_before_install` మరియు `gratis_ai_plugin_installer_after_install` actions ఉపయోగించి install lifecycle లో హుక్ (hook) చేయవచ్చు:

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

abilities లను **plugin ecosystem registry** ద్వారా రిజిస్టర్ చేస్తారు. ఈ registry ability slugs ను వాటి handler classes తో మ్యాప్ చేసి, వాటిని AI agent యొక్క tool dispatcher కు అందుబాటులో ఉంచుతుంది.

ఒక కస్టమ్ plugin management ability ను రిజిస్టర్ చేయడానికి:

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

మీ ability class తప్పనిసరిగా `Gratis_AI_Ability_Interface` ను implement చేయాలి:

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

`create_plugin` మరియు `update_plugin` abilities లు కొత్తగా రూపొందించబడిన కోడ్ పై ఆటోమేటిక్‌గా **HookScanner** ను రన్ చేస్తాయి. HookScanner అనేది plugin ద్వారా రిజిస్టర్ చేయబడిన WordPress action మరియు filter hooks జాబితాను తిరిగి ఇస్తుంది.

HookScanner ఫలితాలను ప్రోగ్రామాటిక్‌గా పొందడానికి:

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

HookScanner ఆటోమేటిక్‌గా `vendor/` మరియు `node_modules/` directories లను దాటవేస్తుంది (skips).

## Async Job Architecture

ఎక్కువ సమయం తీసుకునే plugin operations (generate, install) లను **async jobs** గా డిస్పాచ్ చేస్తారు, మరియు వాటి ప్రగతిని (progress) లైవ్‌గా ట్రాక్ చేయవచ్చు. AI chat interface అనేది progress కోసం poll చేస్తుంది మరియు స్టేటస్ అప్‌డేట్‌లను యూజర్‌కు స్ట్రీమ్ చేస్తుంది:

1. **Dispatch** — ability ఒక async job ను సృష్టించి, ఒక job ID ను తిరిగి ఇస్తుంది.
2. **Poll** — agent ప్రతి 2 సెకన్లకు `gratis_ai_job_status($job_id)` ను poll చేస్తుంది.
3. **Stream** — మధ్యంతర progress సందేశాలు chat thread కు పంపబడతాయి (pushed).
4. **Complete** — తుది ఫలితం (success లేదా error) తిరిగి ఇవ్వబడి, ప్రదర్శించబడుతుంది.

Job lifecycle events లో హుక్ చేయడానికి:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
