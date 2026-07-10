---
title: प्लगइन प्रबंधन क्षमताएं
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# प्लगइन प्रबंधन क्षमताएं {#plugin-management-abilities}

Gratis AI Agent v1.5.0 में **7 प्लगइन प्रबंधन क्षमताएं** (plugin management abilities) हैं जिन्हें AI असिस्टेंट बातचीत के दौरान इस्तेमाल कर सकता है। ये क्षमताएं [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox) के माध्यम से इंस्टॉल किए गए WordPress प्लगइन्स पर प्रोग्रामेटिक नियंत्रण प्रदान करती हैं।

## क्षमताओं का अवलोकन (Abilities Overview) {#abilities-overview}

| क्षमता (Ability) | Slug | विवरण (Description) |
|---|---|---|
| प्लगइन्स सूचीबद्ध करें (List Plugins) | `list_plugins` | सैंडबॉक्स स्टोर में प्लगइन्स की सूची और उनकी स्थिति (status) लौटाता है। |
| प्लगइन प्राप्त करें (Get Plugin) | `get_plugin` | स्लग (slug) द्वारा विशिष्ट प्लगइन के मेटाडेटा और सोर्स कोड प्राप्त करता है। |
| प्लगइन बनाएं (Create Plugin) | `create_plugin` | विवरण से एक नया प्लगइन बनाता है और इसे सैंडबॉक्स में स्टोर करता है। |
| प्लगइन अपडेट करें (Update Plugin) | `update_plugin` | प्लगइन के सोर्स कोड को नए वर्ज़न से बदलता है। |
| प्लगइन हटाएं (Delete Plugin) | `delete_plugin` | सैंडबॉक्स स्टोर से प्लगइन हटाता है। पहले उसे डीएक्टिवेट करता है। |
| प्लगइन इंस्टॉल करें (Install Plugin) | `install_plugin` | एक सैंडबॉक्स किए गए प्लगइन को लाइव WordPress प्लगइन डायरेक्टरी में डिप्लॉय करता है। |
| प्लगइन सक्रिय करें (Activate Plugin) | `activate_plugin` | wp-env सैंडबॉक्स वातावरण में एक सैंडबॉक्स किए गए प्लगइन को सक्रिय करता है। |

## प्लगइन इंस्टॉलर API {#plugin-installer-api}

प्लगइन इंस्टॉलर प्लगइन्स को डिप्लॉय या हटाने के समय फ़ाइल सिस्टम ऑपरेशन को संभालता है। मुख्य व्यवहार (Key behaviours) इस प्रकार हैं:

- **पाथ सत्यापन (Path validation)**: किसी भी फ़ाइल लिखने से पहले सभी प्लगइन पाथ को अनुमत प्लगइन डायरेक्टरी के विरुद्ध मान्य (validate) किया जाता है। डायरेक्टरी ट्रैवर्सल के प्रयासों को अस्वीकार कर दिया जाता है।
- **मल्टी-फ़ाइल इंस्टॉलेशन (Multi-file install)**: एक प्लगइन में कई फाइलें हो सकती हैं। इंस्टॉलर प्लगइन डायरेक्टरी बनाता है और सभी फ़ाइलों को एटॉमिक रूप से लिखता है।
- **अपडेट (Update)**: मौजूदा प्लगइन फ़ाइलों को बदलता है। आंशिक-स्थिति त्रुटियों (partial-state errors) से बचने के लिए लिखने से पहले प्लगइन को डीएक्टिवेट करता है।
- **स्लग द्वारा हटाना (Delete by slug)**: स्लग द्वारा प्लगइन डायरेक्टरी का पता लगाता है, सभी साइटों पर डीएक्टिवेट करता है, और फिर डायरेक्टरी को हटा देता है।

### एक कस्टम इंस्टॉलर हैंडलर को रजिस्टर करना {#registering-a-custom-install-handler}

आप `gratis_ai_plugin_installer_before_install` और `gratis_ai_plugin_installer_after_install` एक्शन का उपयोग करके इंस्टॉलेशन लाइफसाइकिल में हुक (hook) कर सकते हैं:

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

## इकोसिस्टम रजिस्ट्री (Ecosystem Registry) {#ecosystem-registry}

क्षमताएं **प्लगइन इकोसिस्टम रजिस्ट्री** के माध्यम से रजिस्टर की जाती हैं। यह रजिस्ट्री एबिलिटी स्लग्स को उनके हैंडलर क्लास से मैप करती है और उन्हें AI एजेंट के टूल डिस्पैचर (tool dispatcher) के लिए उपलब्ध कराती है।

एक कस्टम प्लगइन प्रबंधन क्षमता को रजिस्टर करने के लिए:

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

आपकी एबिलिटी क्लास को `Gratis_AI_Ability_Interface` को लागू (implement) करना होगा:

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

## HookScanner इंटीग्रेशन {#hookscanner-integration}

`create_plugin` और `update_plugin` क्षमताएं स्वचालित रूप से नए बनाए गए कोड पर **HookScanner** चलाती हैं। HookScanner प्लगइन द्वारा रजिस्टर किए गए WordPress एक्शन और फिल्टर हुक्स की सूची लौटाता है।

प्रोग्रामेटिक रूप से HookScanner परिणाम प्राप्त करने के लिए:

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

HookScanner स्वचालित रूप से `vendor/` और `node_modules/` डायरेक्टरी को छोड़ देता है।

## एसिंक जॉब आर्किटेक्चर (Async Job Architecture) {#async-job-architecture}

लंबे समय तक चलने वाले प्लगइन ऑपरेशन (जैसे बनाना, इंस्टॉल करना) को लाइव प्रगति ट्रैकिंग के साथ **एसिंक जॉब्स** (async jobs) के रूप में भेजा जाता है। AI चैट इंटरफ़ेस प्रगति के लिए पोल करता है और उपयोगकर्ता को स्थिति अपडेट स्ट्रीम करता है:

1. **डिस्पैच (Dispatch)** — क्षमता एक एसिंक जॉब बनाती है और एक जॉब ID लौटाती है।
2. **पोल (Poll)** — एजेंट हर 2 सेकंड में `gratis_ai_job_status($job_id)` को पोल करता है।
3. **स्ट्रीम (Stream)** — बीच की प्रगति के संदेश चैट थ्रेड में भेजे जाते हैं।
4. **पूरा होना (Complete)** — अंतिम परिणाम (सफलता या त्रुटि) लौटाया और प्रदर्शित किया जाता है।

जॉब लाइफसाइकिल इवेंट्स में हुक करने के लिए:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
