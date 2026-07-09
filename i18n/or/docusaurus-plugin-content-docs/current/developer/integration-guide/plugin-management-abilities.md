---
title: ପ୍ଲଗଇନ୍ ପରିଚାଳନା କ୍ଷମତା
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# ପ୍ଲଗିନ ପରିଚାଳନା କ୍ଷମତା {#plugin-management-abilities}

Gratis AI Agent v1.5.0 ସହିତ **୭ଟି ପ୍ଲଗିନ ପରିଚାଳନା କ୍ଷମତା** ଆସେ, ଯାହାକୁ AI ସହାୟକ କଥୋପକଥନ ସମୟରେ ଆହ୍ୱାନ କରିପାରେ। ଏହି କ୍ଷମତାଗୁଡ଼ିକ [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox) ମାଧ୍ୟମରେ ସ୍ଥାପିତ WordPress ପ୍ଲଗିନଗୁଡ଼ିକ ଉପରେ ପ୍ରୋଗ୍ରାମ ମାଧ୍ୟମରେ ନିୟନ୍ତ୍ରଣ ଦିଏ।

## କ୍ଷମତା ସାରାଂଶ {#abilities-overview}

| କ୍ଷମତା | Slug | ବର୍ଣ୍ଣନା |
|---|---|---|
| ପ୍ଲଗିନଗୁଡ଼ିକ ତାଲିକା କରନ୍ତୁ | `list_plugins` | ସେମାନଙ୍କର ସ୍ଥିତି ସହିତ ସ୍ୟାଣ୍ଡବକ୍ସ ଷ୍ଟୋରରେ ଥିବା ପ୍ଲଗିନଗୁଡ଼ିକର ତାଲିକା ଫେରାଏ। |
| ପ୍ଲଗିନ ଆଣନ୍ତୁ | `get_plugin` | ନିର୍ଦ୍ଦିଷ୍ଟ ପ୍ଲଗିନ ପାଇଁ slug ଦ୍ୱାରା ମେଟାଡାଟା ଏବଂ ସୋର୍ସ କୋଡ୍ ଆଣେ। |
| ପ୍ଲଗିନ ସୃଷ୍ଟି କରନ୍ତୁ | `create_plugin` | ଏକ ବର୍ଣ୍ଣନାରୁ ନୂଆ ପ୍ଲଗିନ ତିଆରି କରେ ଏବଂ ତାହାକୁ ସ୍ୟାଣ୍ଡବକ୍ସରେ ସଂରକ୍ଷଣ କରେ। |
| ପ୍ଲଗିନ ଅଦ୍ୟତନ କରନ୍ତୁ | `update_plugin` | ପ୍ଲଗିନର ସୋର୍ସ କୋଡ୍‌କୁ ନୂଆ ସଂସ୍କରଣ ସହିତ ବଦଳାଏ। |
| ପ୍ଲଗିନ ମେଟାନ୍ତୁ | `delete_plugin` | ସ୍ୟାଣ୍ଡବକ୍ସ ଷ୍ଟୋରରୁ ଏକ ପ୍ଲଗିନକୁ କାଢ଼ିଦିଏ। ପ୍ରଥମେ ନିଷ୍କ୍ରିୟ କରେ। |
| ପ୍ଲଗିନ ସ୍ଥାପନ କରନ୍ତୁ | `install_plugin` | ସ୍ୟାଣ୍ଡବକ୍ସରେ ଥିବା ପ୍ଲଗିନକୁ ସଜୀବ WordPress ପ୍ଲଗିନ ଡିରେକ୍ଟରୀକୁ ପଠାଏ। |
| ପ୍ଲଗିନ ସକ୍ରିୟ କରନ୍ତୁ | `activate_plugin` | wp-env ସ୍ୟାଣ୍ଡବକ୍ସ ପରିବେଶରେ ସ୍ୟାଣ୍ଡବକ୍ସରେ ଥିବା ପ୍ଲଗିନକୁ ସକ୍ରିୟ କରେ। |

## ପ୍ଲଗିନ ସ୍ଥାପକ API {#plugin-installer-api}

ପ୍ଲଗିନ ସ୍ଥାପକ ପ୍ଲଗିନ ପଠାଇବା କିମ୍ବା କାଢ଼ିବା ସମୟରେ ଫାଇଲ୍ ସିଷ୍ଟମ୍ କାର୍ଯ୍ୟଗୁଡ଼ିକ ପରିଚାଳନା କରେ। ମୁଖ୍ୟ ବ୍ୟବହାର:

- **ପଥ ବୈଧତା ଯାଞ୍ଚ**: କୌଣସି ଫାଇଲ୍ ଲେଖିବା ପୂର୍ବରୁ ସମସ୍ତ ପ୍ଲଗିନ ପଥକୁ ଅନୁମୋଦିତ ପ୍ଲଗିନ ଡିରେକ୍ଟରୀ ସହିତ ଯାଞ୍ଚ କରାଯାଏ। ଡିରେକ୍ଟରୀ ଟ୍ରାଭର୍ସାଲ୍ ଚେଷ୍ଟାଗୁଡ଼ିକୁ ଅସ୍ୱୀକାର କରାଯାଏ।
- **ବହୁ-ଫାଇଲ୍ ସ୍ଥାପନ**: ଏକ ପ୍ଲଗିନରେ ଅନେକ ଫାଇଲ୍ ଥାଇପାରେ। ସ୍ଥାପକ ପ୍ଲଗିନ ଡିରେକ୍ଟରୀ ସୃଷ୍ଟି କରେ ଏବଂ ସମସ୍ତ ଫାଇଲ୍‌କୁ ଆଟମିକ୍ ଭାବରେ ଲେଖେ।
- **ଅଦ୍ୟତନ**: ଥିବା ପ୍ଲଗିନ ଫାଇଲ୍‌ଗୁଡ଼ିକୁ ବଦଳାଏ। ଆଂଶିକ-ସ୍ଥିତି ତ୍ରୁଟି ଏଡ଼ାଇବା ପାଇଁ ଲେଖିବା ପୂର୍ବରୁ ପ୍ଲଗିନକୁ ନିଷ୍କ୍ରିୟ କରେ।
- **slug ଦ୍ୱାରା ମେଟାନ୍ତୁ**: slug ଦ୍ୱାରା ପ୍ଲଗିନ ଡିରେକ୍ଟରୀ ଖୋଜେ, ସମସ୍ତ ସାଇଟରେ ନିଷ୍କ୍ରିୟ କରେ, ତାପରେ ଡିରେକ୍ଟରୀକୁ କାଢ଼ିଦିଏ।

### କଷ୍ଟମ୍ ସ୍ଥାପନ ହାଣ୍ଡଲର୍ ପଞ୍ଜିକରଣ {#registering-a-custom-install-handler}

`gratis_ai_plugin_installer_before_install` ଏବଂ `gratis_ai_plugin_installer_after_install` କାର୍ଯ୍ୟ ବ୍ୟବହାର କରି ଆପଣ ସ୍ଥାପନ ଜୀବନଚକ୍ରରେ ଯୋଡ଼ିପାରିବେ:

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

## ଇକୋସିଷ୍ଟମ୍ ରେଜିଷ୍ଟ୍ରି {#ecosystem-registry}

କ୍ଷମତାଗୁଡ଼ିକ **ପ୍ଲଗିନ ଇକୋସିଷ୍ଟମ୍ ରେଜିଷ୍ଟ୍ରି** ମାଧ୍ୟମରେ ପଞ୍ଜିକୃତ ହୁଏ। ରେଜିଷ୍ଟ୍ରି କ୍ଷମତା slugଗୁଡ଼ିକୁ ସେମାନଙ୍କର ହାଣ୍ଡଲର୍ କ୍ଲାସ୍ ସହିତ ମ୍ୟାପ୍ କରେ ଏବଂ AI ଏଜେଣ୍ଟର ଟୁଲ୍ ଡିସ୍ପାଚର୍‌କୁ ଦେଖାଏ।

କଷ୍ଟମ୍ ପ୍ଲଗିନ ପରିଚାଳନା କ୍ଷମତା ପଞ୍ଜିକରଣ କରିବାକୁ:

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

ଆପଣଙ୍କ କ୍ଷମତା କ୍ଲାସ୍‌କୁ `Gratis_AI_Ability_Interface` କାର୍ଯ୍ୟାନ୍ବୟ କରିବା ଆବଶ୍ୟକ:

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

## HookScanner ସମନ୍ୱୟ {#hookscanner-integration}

`create_plugin` ଏବଂ `update_plugin` କ୍ଷମତାଗୁଡ଼ିକ ନୂଆ ତିଆରି ହୋଇଥିବା କୋଡ୍‌ରେ ସ୍ୱୟଂଚାଳିତ ଭାବରେ **HookScanner** ଚଲାଏ। HookScanner ପ୍ଲଗିନ ଦ୍ୱାରା ପଞ୍ଜିକୃତ WordPress ଆକ୍ସନ୍ ଏବଂ ଫିଲ୍ଟର୍ ହୁକ୍‌ଗୁଡ଼ିକର ତାଲିକା ଫେରାଏ।

HookScanner ଫଳାଫଳ ପ୍ରୋଗ୍ରାମ ମାଧ୍ୟମରେ ପାଇବାକୁ:

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

HookScanner ସ୍ୱୟଂଚାଳିତ ଭାବରେ `vendor/` ଏବଂ `node_modules/` ଡିରେକ୍ଟରୀଗୁଡ଼ିକୁ ଏଡ଼ାଇଦିଏ।

## ଅସମକାଳୀନ କାମ ଆର୍କିଟେକ୍ଚର୍ {#async-job-architecture}

ଦୀର୍ଘ ସମୟ ଚାଲୁଥିବା ପ୍ଲଗିନ କାର୍ଯ୍ୟଗୁଡ଼ିକୁ (ତିଆରି, ସ୍ଥାପନ) ସଜୀବ ଅଗ୍ରଗତି ଟ୍ରାକିଂ ସହିତ **ଅସମକାଳୀନ କାମ** ଭାବରେ ପଠାଯାଏ। AI ଚାଟ୍ ଇଣ୍ଟରଫେସ୍ ଅଗ୍ରଗତି ପାଇଁ ପୋଲ୍ କରେ ଏବଂ ବ୍ୟବହାରକାରୀଙ୍କୁ ସ୍ଥିତି ଅଦ୍ୟତନଗୁଡ଼ିକ ଧାରାବାହିକ ଭାବରେ ଦେଖାଏ:

1. **ପଠାନ୍ତୁ** — କ୍ଷମତା ଏକ ଅସମକାଳୀନ କାମ ସୃଷ୍ଟି କରେ ଏବଂ କାମ ID ଫେରାଏ।
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **ଧାରାବାହିକ କରନ୍ତୁ** — ମଧ୍ୟବର୍ତ୍ତୀ ଅଗ୍ରଗତି ସନ୍ଦେଶଗୁଡ଼ିକୁ ଚାଟ୍ ଥ୍ରେଡ୍‌କୁ ପଠାଯାଏ।
4. **ସମ୍ପୂର୍ଣ୍ଣ** — ଅନ୍ତିମ ଫଳାଫଳ (ସଫଳତା କିମ୍ବା ତ୍ରୁଟି) ଫେରାଇ ଦିଆଯାଏ ଏବଂ ଦେଖାଯାଏ।

କାମ ଜୀବନଚକ୍ର ଘଟଣାଗୁଡ଼ିକରେ ଯୋଡ଼ିବାକୁ:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
