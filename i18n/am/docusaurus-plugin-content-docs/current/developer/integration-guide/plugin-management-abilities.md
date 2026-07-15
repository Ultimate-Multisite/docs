---
title: የፕልጊን አስተዳደር አቅሞች
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# የፕልጊን አስተዳደር አቅሞች

Gratis AI Agent v1.5.0 ከ**7 የፕልጊን አስተዳደር አቅሞች** ጋር ይመጣል፤ እነዚህ አቅሞች AI ረዳቱ በውይይት ወቅት ሊጠቀምባቸው የሚችል ሲሆን። እነዚህ አቅሞች በ[Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox) በኩል በተጫኑ WordPress plugins ላይ ፕሮግራማዊ ቁጥጥር ይሰጣሉ።

## የአቅሞች አጠቃላይ እይታ {#abilities-overview}

| Ability | Slug | Description |
|---|---|---|
| List Plugins | `list_plugins` | በሳንድቦክስ ማከማቻ ውስጥ ያሉ plugins ዝርዝር እና የየራሳቸው ሁኔታን ይመልሳል። |
| Get Plugin | `get_plugin` | ለተወሰነ plugin በslug በመጠቀም ሜታዳታ እና የምንጭ ኮድ ያገኛል። |
| Create Plugin | `create_plugin` | አዲስ plugin ከማብራሪያ በመፍጠር በሳንድቦክስ ውስጥ ያስቀምጣል። |
| Update Plugin | `update_plugin` | የpluginን የምንጭ ኮድ በአዲስ ስሪት ይተካዋል። |
| Delete Plugin | `delete_plugin` | pluginን ከሳንድቦክስ ማከማቻ ያስወግዳል። በመጀመሪያ ያሰናብታል። |
| Install Plugin | `install_plugin` | አንድ በሳንድቦክስ ውስጥ የተፈተነ plugin ወደ ቀጥታ የWordPress plugin ዳይሬክቶሪ ይጭናል። |
| Activate Plugin | `activate_plugin` | አንድ በሳንድቦክስ ውስጥ የተፈተነ plugin በwp-env ሳንድቦክስ አካባቢ ያነቃቃል። |

## የPlugin Installer API {#plugin-installer-api}

የplugin installer plugins ሲጫን ወይም ሲያስወግድ የፋይል ሲስተም ስራዎችን ይቆጣጠራል። ዋና ዋና ባህሪያት የሚከተሉት ናቸው፦

- **የመንገድ (Path) ማረጋገጫ**: ማንኛውም የplugin መንገድ ከመጻፍ በፊት በየተፈቀደው የplugin ዳይሬክቶሪ ይረጋገጣል። የዳይሬክቶሪ መሻገር ሙከራዎች ይከለከላሉ።
- **ባለብዙ ፋይል ጭነት (Multi-file install)**: አንድ plugin ከአንድ በላይ ፋይሎችን ሊይዝ ይችላል። installer የplugin ዳይሬክቶሪውን ይፈጥራል እና ሁሉንም ፋይሎች በአንድ ጊዜ (atomically) ይጽፋል።
- **ማዘመን (Update)**: ያሉትን የplugin ፋይሎች ይተካል። በከፊል ሁኔታ ስህተቶችን ለማስወገድ ከመጻፉ በፊት pluginን ያሰናብታል።
- **በslug መሰረዝ (Delete by slug)**: በslug በመጠቀም የplugin ዳይሬክቶሪውን ያገኛል፣ በሁሉም ድረ-ገጾች ያሰናብታል፣ ከዚያም ዳይሬክቶሪውን ያስወግዳል።

### የCustom Install Handler መመዝገብ {#registering-a-custom-install-handler}

በ`gratis_ai_plugin_installer_before_install` እና `gratis_ai_plugin_installer_after_install` action በመጠቀም የinstall life cycle ውስጥ መሳተፍ ይችላሉ፦

```php
add_action('gratis_ai_plugin_installer_before_install', function(string $slug, array $files): void {
    // $slug: የplugin ዳይሬክቶሪ ስም
    // $files: relative path => የፋይል ይዘት የያዘ አያያዥ ስብስብ
    error_log("Installing plugin: {$slug} with " . count($files) . " files.");
}, 10, 2);

add_action('gratis_ai_plugin_installer_after_install', function(string $slug, bool $success): void {
    if ($success) {
        error_log("Plugin {$slug} installed successfully.");
    }
}, 10, 2);
```

## የEcosystem መመዝገቢያ (Ecosystem Registry) {#ecosystem-registry}

አቅሞች በ**plugin ecosystem registry** በኩል ይመዘገባሉ። ይህ መመዝገቢያ የability slugsን ወደ handler classes በማዛመድ ለAI agent tool dispatcher ያቀርባቸዋል።

የcustom plugin management ability ለመመዝገብ፦

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

የability classዎ `Gratis_AI_Ability_Interface`ን መተግበር አለበት፦

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

## HookScanner ውህደት (HookScanner Integration) {#hookscanner-integration}

የ`create_plugin` እና `update_plugin` አቅሞች አዲስ የተፈጠረ ኮድ ሲሰራ በራስ-ሰር **HookScanner**ን ያካሂዳሉ። HookScanner በplugin የተመዘገቡ የWordPress action እና filter hooks ዝርዝርን ይመልሳል።

የHookScanner ውጤቶችን በፕሮግራም ለማግኘት፦

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

HookScanner በራስ-ሰር `vendor/` እና `node_modules/` ዳይሬክቶሪዎችን ይዘልቃል።

## Asynchronous Job Architecture {#async-job-architecture}

ረጅም ጊዜ የሚወስዱ የplugin ስራዎች (መፍጠር፣ መጫን) እንደ **async jobs** ተልከስ (dispatch) እና ቀጥተኛ የሂደት ክትትል (live progress tracking) አላቸው። የAI chat interface ለሂደት ይጠይቃል (polls) እና የሁኔታ ዝማኔዎችን ለተጠቃሚው ያተላለፋል (streams)፦

1. **Dispatch** — አቅሙ አንድ async job ይፈጥራል እና የjob ID ይመልሳል።
2. **Poll** — ወኪሉ (agent) በየ 2 ሰከንዶች `gratis_ai_job_status($job_id)` ይጠይቃል።
3. **Stream** — መካከለኛ የሂደት መልዕክቶች ወደ chat thread ይገፋሉ።
4. **Complete** — የመጨረሻው ውጤት (ስኬት ወይም ስህተት) ይመልሳል እና ይታያል።

የjob life cycle ክስተቶች ውስጥ ለመሳተፍ፦

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
