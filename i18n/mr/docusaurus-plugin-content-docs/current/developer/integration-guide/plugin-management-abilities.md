---
title: प्लगइन व्यवस्थापन क्षमता
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Plugin Management Abilities (प्लगइन व्यवस्थापन क्षमता) {#plugin-management-abilities}

Gratis AI Agent v1.5.0 मध्ये **७ प्लगइन व्यवस्थापन क्षमता** (plugin management abilities) आहेत, ज्या AI assistant संभाषणादरम्यान वापरू शकतो. या क्षमता [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox) द्वारे स्थापित केलेल्या WordPress प्लगइन्सवर प्रोग्रामॅटिक नियंत्रण (programmatic control) प्रदान करतात.

## Abilities Overview (क्षमतांचा आढावा) {#abilities-overview}

| Ability | Slug | Description |
|---|---|---|
| List Plugins | `list_plugins` | sandbox store मधील प्लगइन्सची यादी आणि त्यांची स्थिती (status) परत करते. |
| Get Plugin | `get_plugin` | slug नुसार विशिष्ट प्लगइनचे मेटाडेटा (metadata) आणि सोर्स कोड मिळवते. |
| Create Plugin | `create_plugin` | वर्णनावरून (description) नवीन प्लगइन तयार करते आणि ते sandbox मध्ये साठवते. |
| Update Plugin | `update_plugin` | प्लगइनचा सोर्स कोड नवीन आवृत्तीने बदलतो. |
| Delete Plugin | `delete_plugin` | sandbox store मधून प्लगइन काढून टाकते. प्रथम ते निष्क्रिय (deactivate) करते. |
| Install Plugin | `install_plugin` | एका sandboxed प्लगइनाला live WordPress plugin directory मध्ये तैनात (deploy) करते. |
| Activate Plugin | `activate_plugin` | wp-env sandbox environment मध्ये sandboxed प्लगइनाला सक्रिय (activate) करते. |

## Plugin Installer API (प्लगइन इन्स्टॉलर API) {#plugin-installer-api}

प्लगइन इन्स्टॉलर प्लगइन्स तैनात (deploy) करताना किंवा काढताना फाइल सिस्टीम ऑपरेशन्स (file system operations) हाताळतो. मुख्य कार्यप्रणाली (Key behaviours) खालीलप्रमाणे आहेत:

- **Path validation (पथाची पडताळणी)**: कोणतीही फाइल लिहिण्यापूर्वी सर्व प्लगइन पाथ (plugin paths) अनुमत प्लगइन डिरेक्टरीशी (allowed plugin directory) पडताळले जातात. डिरेक्टरी ट्रॅव्हर्सल (Directory traversal) चे प्रयत्न नाकारले जातात.
- **Multi-file install (अनेक फाइल इन्स्टॉलेशन)**: प्लगइनमध्ये अनेक फाइल्स असू शकतात. इन्स्टॉलर प्लगइन डिरेक्टरी तयार करतो आणि सर्व फाइल्स एकाच वेळी (atomically) लिहितो.
- **Update (अपडेट)**: विद्यमान प्लगइन फाइल्स बदलतो. अंशतः त्रुटी (partial-state errors) टाळण्यासाठी लिहिण्यापूर्वी प्लगइन निष्क्रिय (deactivate) केले जाते.
- **Delete by slug (slug नुसार डिलीट)**: slug नुसार प्लगइन डिरेक्टरी शोधतो, सर्व साइट्सवर ते निष्क्रिय करतो, आणि नंतर डिरेक्टरी काढून टाकतो.

### Registering a Custom Install Handler (कस्टम इन्स्टॉल हँडलर नोंदवणे) {#registering-a-custom-install-handler}

तुम्ही `gratis_ai_plugin_installer_before_install` आणि `gratis_ai_plugin_installer_after_install` actions वापरून install lifecycle मध्ये hook करू शकता:

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

## Ecosystem Registry (इकोसिस्टम रजिस्ट्री) {#ecosystem-registry}

क्षमता (Abilities) **plugin ecosystem registry** द्वारे नोंदवल्या जातात. ही रजिस्ट्री ability slugs ला त्यांच्या handler classes शी मॅप करते आणि त्यांना AI agent च्या tool dispatcher ला उपलब्ध करून देते.

कस्टम प्लगइन व्यवस्थापन क्षमता नोंदवण्यासाठी (To register a custom plugin management ability):

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

तुमच्या ability class ने `Gratis_AI_Ability_Interface` लागू करणे आवश्यक आहे:

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

## HookScanner Integration (हुकस्कॅनर इंटिग्रेशन) {#hookscanner-integration}

`create_plugin` आणि `update_plugin` क्षमता आपोआप नवीन तयार केलेल्या कोडवर **HookScanner** चालवतात. HookScanner प्लगइनद्वारे नोंदवलेल्या WordPress action आणि filter hooks ची यादी परत करतो.

HookScanner चे परिणाम प्रोग्रामॅटिकरित्या (programmatically) मिळवण्यासाठी:

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

HookScanner आपोआप `vendor/` आणि `node_modules/` डिरेक्टरी वगळतो.

## Async Job Architecture (असिंक जॉब आर्किटेक्चर) {#async-job-architecture}

दीर्घकाळ चालणारे प्लगइन ऑपरेशन्स (generate, install) **async jobs** म्हणून डिस्पॅच केले जातात आणि त्यांची live प्रगती (live progress tracking) ट्रॅक केली जाते. AI chat interface प्रगतीसाठी पोल (poll) करते आणि वापरकर्त्याला status अपडेट्स स्ट्रीम (stream) करते:

1. **Dispatch (डिस्पॅच)** — क्षमता एक async job तयार करते आणि एक job ID परत करते.
2. **Poll (पोल)** — agent दर २ सेकंदांनी `gratis_ai_job_status($job_id)` ला पोल करतो.
3. **Stream (स्ट्रीम)** — मध्यवर्ती प्रगती संदेश (intermediate progress messages) chat thread मध्ये पुश केले जातात.
4. **Complete (पूर्ण)** — अंतिम परिणाम (यश किंवा त्रुटी) परत केला जातो आणि प्रदर्शित होतो.

Job lifecycle events मध्ये hook करण्यासाठी:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
