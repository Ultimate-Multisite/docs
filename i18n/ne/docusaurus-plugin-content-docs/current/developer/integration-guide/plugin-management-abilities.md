---
title: प्लगइन व्यवस्थापन क्षमताहरू
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# प्लगइन व्यवस्थापन क्षमताहरू {#plugin-management-abilities}

Gratis AI Agent v1.5.0 मा **७ प्लगइन व्यवस्थापन क्षमताहरू** समावेश छन्, जसलाई AI सहायकले कुराकानीका क्रममा आह्वान गर्न सक्छ। यी क्षमताहरूले [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox) मार्फत स्थापित WordPress प्लगइनहरूमाथि कार्यक्रमगत नियन्त्रण प्रदान गर्छन्।

## क्षमताहरूको अवलोकन {#abilities-overview}

| क्षमता | Slug | विवरण |
|---|---|---|
| प्लगइनहरूको सूची | `list_plugins` | स्यान्डबक्स भण्डारमा रहेका प्लगइनहरूको सूची तिनको स्थितिसहित फर्काउँछ। |
| प्लगइन प्राप्त गर्नुहोस् | `get_plugin` | slug द्वारा कुनै विशिष्ट प्लगइनका लागि मेटाडाटा र स्रोत कोड प्राप्त गर्छ। |
| प्लगइन सिर्जना गर्नुहोस् | `create_plugin` | विवरणबाट नयाँ प्लगइन उत्पन्न गर्छ र त्यसलाई स्यान्डबक्समा भण्डारण गर्छ। |
| प्लगइन अद्यावधिक गर्नुहोस् | `update_plugin` | प्लगइनको स्रोत कोडलाई नयाँ संस्करणले प्रतिस्थापन गर्छ। |
| प्लगइन मेटाउनुहोस् | `delete_plugin` | स्यान्डबक्स भण्डारबाट प्लगइन हटाउँछ। पहिले निष्क्रिय गर्छ। |
| प्लगइन स्थापना गर्नुहोस् | `install_plugin` | स्यान्डबक्स गरिएको प्लगइनलाई प्रत्यक्ष WordPress प्लगइन डाइरेक्टरीमा डिप्लोय गर्छ। |
| प्लगइन सक्रिय गर्नुहोस् | `activate_plugin` | wp-env स्यान्डबक्स वातावरणमा स्यान्डबक्स गरिएको प्लगइन सक्रिय गर्छ। |

## प्लगइन Installer API {#plugin-installer-api}

प्लगइन installer ले प्लगइनहरू डिप्लोय वा हटाउँदा फाइल प्रणालीका कार्यहरू सम्हाल्छ। मुख्य व्यवहारहरू:

- **पथ प्रमाणीकरण**: कुनै पनि फाइल लेख्नुअघि सबै प्लगइन पथहरूलाई अनुमति दिइएको प्लगइन डाइरेक्टरीसँग प्रमाणीकरण गरिन्छ। डाइरेक्टरी traversal प्रयासहरू अस्वीकार गरिन्छ।
- **बहु-फाइल स्थापना**: एउटा प्लगइन धेरै फाइलहरूबाट बनेको हुन सक्छ। installer ले प्लगइन डाइरेक्टरी सिर्जना गर्छ र सबै फाइलहरू परमाणवीय रूपमा लेख्छ।
- **अद्यावधिक**: विद्यमान प्लगइन फाइलहरू प्रतिस्थापन गर्छ। आंशिक-स्थिति त्रुटिहरूबाट बच्न लेख्नुअघि प्लगइन निष्क्रिय गर्छ।
- **slug द्वारा मेटाउने**: slug द्वारा प्लगइन डाइरेक्टरी पत्ता लगाउँछ, सबै साइटहरूमा निष्क्रिय गर्छ, त्यसपछि डाइरेक्टरी हटाउँछ।

### अनुकूल स्थापना Handler दर्ता गर्दै {#registering-a-custom-install-handler}

तपाईं `gratis_ai_plugin_installer_before_install` र `gratis_ai_plugin_installer_after_install` actions प्रयोग गरेर स्थापना lifecycle मा hook गर्न सक्नुहुन्छ:

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

क्षमताहरू **प्लगइन ecosystem registry** मार्फत दर्ता गरिन्छन्। registry ले क्षमता slugs लाई तिनका handler classes सँग म्याप गर्छ र तिनलाई AI agent को tool dispatcher मा उपलब्ध गराउँछ।

अनुकूल प्लगइन व्यवस्थापन क्षमता दर्ता गर्न:

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

तपाईंको क्षमता class ले `Gratis_AI_Ability_Interface` कार्यान्वयन गर्नुपर्छ:

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

## HookScanner Integration {#hookscanner-integration}

`create_plugin` र `update_plugin` क्षमताहरूले नयाँ उत्पन्न कोडमाथि स्वचालित रूपमा **HookScanner** चलाउँछन्। HookScanner ले प्लगइनद्वारा दर्ता गरिएका WordPress action र filter hooks को सूची फर्काउँछ।

HookScanner परिणामहरू कार्यक्रमगत रूपमा प्राप्त गर्न:

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

HookScanner ले `vendor/` र `node_modules/` डाइरेक्टरीहरू स्वचालित रूपमा छोड्छ।

## Async Job Architecture {#async-job-architecture}

लामो समय लाग्ने प्लगइन कार्यहरू (उत्पन्न गर्ने, स्थापना गर्ने) प्रत्यक्ष प्रगति ट्र्याकिङसहित **async jobs** को रूपमा पठाइन्छन्। AI chat interface ले प्रगतिका लागि poll गर्छ र प्रयोगकर्तालाई स्थिति अद्यावधिकहरू stream गर्छ:

1. **पठाउने** — क्षमताले async job सिर्जना गर्छ र job ID फर्काउँछ।
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Stream** — मध्यवर्ती प्रगति सन्देशहरू chat thread मा पठाइन्छन्।
4. **पूरा** — अन्तिम परिणाम (सफलता वा त्रुटि) फर्काइन्छ र प्रदर्शन गरिन्छ।

job lifecycle घटनाहरूमा hook गर्न:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
