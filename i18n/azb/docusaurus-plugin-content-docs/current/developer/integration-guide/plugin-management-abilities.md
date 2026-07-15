---
title: Plugin Yönetim Yetenekleri
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Plugin Yönetim Yetenekleri

Gratis AI Agent v1.5.0, konuşma sırasında AI asistanının çağırabileceği **7 plugin yönetim yeteneği** ile geliyor. Bu yetenekler, [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox) üzerinden kurulan WordPress pluginleri üzerinde programatik kontrol sağlar.

## Yeteneklere Genel Bakış {#abilities-overview}

| Yetenek | Slug | Açıklama |
|---|---|---|
| List Plugins | `list_plugins` | Sandbox mağazasındaki pluginlerin durumlarıyla birlikte bir listesini döndürür. |
| Get Plugin | `get_plugin` | Bir slug ile belirli bir pluginin meta verilerini ve kaynak kodunu alır. |
| Create Plugin | `create_plugin` | Bir açıklamadan yeni bir plugin oluşturur ve bunu sandbox'ta saklar. |
| Update Plugin | `update_plugin` | Bir pluginin kaynak kodunu yeni bir sürümle değiştirir. |
| Delete Plugin | `delete_plugin` | Bir plugini sandbox mağazasından kaldırır. Önce devre dışı bırakır. |
| Install Plugin | `install_plugin` | Sandbox'ta oluşturulmuş bir plugini canlı WordPress plugin dizinine dağıtır. |
| Activate Plugin | `activate_plugin` | Sandbox'ta oluşturulmuş bir plugini wp-env sandbox ortamında etkinleştirir. |

## Plugin Yükleyici API {#plugin-installer-api}

Plugin yükleyici, pluginleri dağıtırken veya kaldırırken dosya sistemi işlemlerini yönetir. Temel davranışlar şunlardır:

- **Path validation**: Herhangi bir dosya yazılmadan önce tüm plugin yolları izin verilen plugin dizinine göre doğrulanır. Dizin gezintisi (directory traversal) girişimleri reddedilir.
- **Multi-file install**: Bir plugin birden fazla dosyadan oluşabilir. Yükleyici, plugin dizinini oluşturur ve tüm dosyaları atomik olarak yazar.
- **Update**: Mevcut plugin dosyalarını değiştirir. Kısmi durum hatalarını önlemek için yazmadan önce plugini devre dışı bırakır.
- **Delete by slug**: Slug ile plugin dizinini bulur, tüm sitelerde devre dışı bırakır ve ardından dizini kaldırır.

### Özel Bir Kurulum İşleyicisi Kaydetme {#registering-a-custom-install-handler}

`gratis_ai_plugin_installer_before_install` ve `gratis_ai_plugin_installer_after_install` eylemlerini kullanarak kurulum yaşam döngüsüne takılabilirsiniz (hook):

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

## Ekosistem Kaydı {#ecosystem-registry}

Yetenekler, **plugin ekosistemi kaydı** aracılığıyla kaydedilir. Bu kayıt, yetenek slug'larını ilgili işleyici sınıflarına eşler ve bunları AI asistanının araç dağıtıcısına (tool dispatcher) sunar.

Özel bir plugin yönetim yeteneği kaydetmek için:

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

Yetenek sınıfınızın `Gratis_AI_Ability_Interface` arayüzünü uygulaması gerekir:

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

## HookScanner Entegrasyonu {#hookscanner-integration}

`create_plugin` ve `update_plugin` yetenekleri, otomatik olarak **HookScanner**'ı yeni oluşturulan kod üzerinde çalıştırır. HookScanner, plugin tarafından kaydedilen WordPress action ve filter hook'larının bir listesini döndürür.

HookScanner sonuçlarını programatik olarak almak için:

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

HookScanner, `vendor/` ve `node_modules/` dizinlerini otomatik olarak atlar.

## Asenkron İş (Async Job) Mimarisi {#async-job-architecture}

Uzun süren plugin işlemleri (oluşturma, yükleme), canlı ilerleme takibi ile **asenkron işler (async jobs)** olarak gönderilir. AI sohbet arayüzü ilerlemeyi sorgular ve durum güncellemelerini kullanıcıya yayınlar (stream):

1. **Gönderme (Dispatch)** — yetenek bir asenkron iş oluşturur ve bir iş kimliği (job ID) döndürür.
2. **Sorgulama (Poll)** — ajan, her 2 saniyede bir `gratis_ai_job_status($job_id)` fonksiyonunu sorgular.
3. **Yayınlama (Stream)** — ara ilerleme mesajları sohbet akışına gönderilir.
4. **Tamamlama (Complete)** — nihai sonuç (başarı veya hata) döndürülür ve gösterilir.

İş yaşam döngüsü olaylarına takılmak (hook) için:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
