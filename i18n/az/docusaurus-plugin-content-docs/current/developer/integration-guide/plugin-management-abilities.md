---
title: Plugin İdarəetmə Bacarıqları
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Plugin Yönetimi Qabiliyyətləri

Gratis AI Agent v1.5.0, AI köməkçisinin söhbət zamanı çağırış edə biləcəyi **7 plugin yönetimi qabiliyyəti** ilə birlikdə gəlir. Bu qabiliyyətlər, [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox) vasitəsilə quraşdırılmış WordPress pluginləri üzərində proqramlaşdırılmış nəzarət təmin edir.

## Qabiliyyətlərin Ümumi Baxışı

| Qabiliyyət | Slug | Təsvir |
|---|---|---|
| Pluginləri Listlə | `list_plugins` | Sandbox mağazasındakı pluginlərin siyahısını və onların statusunu qaytarır. |
| Plugin Al | `get_plugin` | Slug-u ilə müəyyən edilmiş plugin üçün metadata və mənbə kodunu alır. |
| Plugin Yarat | `create_plugin` | Təsvir əsasında yeni bir plugin yaradır və onu sandbox-da saxlayır. |
| Plugin Yenilə | `update_plugin` | Pluginin mənbə kodunu yeni bir versiya ilə əvəz edir. |
| Plugin Sil | `delete_plugin` | Pluginləri sandbox mağazasından silir. Əvvəlcə deaktive edir. |
| Plugin Quraşdır | `install_plugin` | Sandbox-da olan pluginləri canlı WordPress plugin kataloquna yerləşdirir. |
| Plugin Aktivləşdir | `activate_plugin` | Sandbox mühitində pluginləri aktivləşdirir. |

## Plugin Quraşdırıcı API

Plugin quraşdırıcı, pluginləri yerləşdirərkən və ya silərkən fayl sistemi əməliyyatlarını idarə edir. Əsas davranışlar:

- **Yol yoxlaması (Path validation)**: Hər hansı bir fayl yazılmasından əvvəl bütün plugin yolları icazə verilən plugin kataloqu ilə yoxlanılır. Dizin keçidi cəhdləri rədd edilir.
- **Çoxfayllı quraşdırma (Multi-file install)**: Bir plugin bir neçə fayldan ibarət ola bilər. Quraşdırıcı plugin dizinini yaradır və bütün faylları atomik şəkildə yəzir.
- **Yeniləmə (Update)**: Mövcud plugin fayllarını əvəz edir. Qismən işləmiş vəziyyət səhvlərindən yayınmaq üçün yazmadan əvvəl pluginləri deaktive edir.
- **Slug ilə silmə**: Plugin dizinini slug-u ilə tapır, bütün saytlarda deaktiv edir və sonra dizini silir.

### Xüsusi Quraşdırma Handler-i Qeydiyyatdan Keçirmək

`gratis_ai_plugin_installer_before_install` və `gratis_ai_plugin_installer_after_install` action-larından istifadə edərək quraşdırma dövrünə qoşula bilərsiniz:

```php
add_action('gratis_ai_plugin_installer_before_install', function(string $slug, array $files): void {
    // $slug: pluginin dizin adı
    // $files: relative path => file content olan assosiativ massiv
    error_log("Plugin quraşdırılır: {$slug} və " . count($files) . " faylla.");
}, 10, 2);

add_action('gratis_ai_plugin_installer_after_install', function(string $slug, bool $success): void {
    if ($success) {
        error_log("Plugin {$slug} uğurla quraşdırıldı.");
    }
}, 10, 2);
```

## Ekosistem Kataloqu (Ecosystem Registry)

Qabiliyyətlər **plugin ekosistem kataloqu** vasitəsilə qeydiyyatdan keçir. Kataloq qabiliyyət slug-larını onların handler siniflərində eşləşdirir və onları AI agentinin tool dispatcher-ına təqdim edir.

Xüsusi bir plugin idarəetmə qabiliyyətini qeydiyyatdan keçirmək üçün:

```php
add_filter('gratis_ai_plugin_abilities', function(array $abilities): array {
    $abilities['my_custom_ability'] = [
        'class'       => My_Custom_Plugin_Ability::class,
        'label'       => 'Mənim Xüsusi Qabiliyyətim',
        'description' => 'Pluginlərlə faydalı bir şey edir.',
    ];
    return $abilities;
});
```

Sizin qabiliyyət sinifiniz `Gratis_AI_Ability_Interface`-i tətbiq etməlidir:

```php
class My_Custom_Plugin_Ability implements Gratis_AI_Ability_Interface {

    public function get_slug(): string {
        return 'my_custom_ability';
    }

    public function get_schema(): array {
        return [
            'name'        => 'my_custom_ability',
            'description' => 'Pluginlərlə faydalı bir şey edir.',
            'parameters'  => [
                'type'       => 'object',
                'properties' => [
                    'slug' => [
                        'type'        => 'string',
                        'description' => 'İşlənməsi lazım olan plugin slug-u.',
                    ],
                ],
                'required' => ['slug'],
            ],
        ];
    }

    public function execute(array $params): array {
        $slug = sanitize_key($params['slug'] ?? '');
        // ... öz tətbiqiniz ...
        return ['success' => true, 'slug' => $slug];
    }
}
```

## HookScanner İntegrasiyası

`create_plugin` və `update_plugin` qabiliyyətləri, avtomatik olaraq, yeni yaradılan kod üzərində **HookScanner** işlədir. HookScanner plugin tərəfindən qeyd olunan WordPress action və filter hook-larının siyahısını qaytarır.

HookScanner nəticələrini proqramlaşdırılmış şəkildə almaq üçün:

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

HookScanner avtomatik olaraq `vendor/` və `node_modules/` dizinlərini atlayır.

## Asinxron İş Arxitekturası (Async Job Architecture)

Uzun müddət çəkən plugin əməliyyətləri (yaratmaq, quraşdırmaq) canlı irəliləyiş izlənməsi ilə **asinxron işlər (async jobs)** kimi göndərilir. AI chat interfeysi irəliləyiş üçün sorğu göndərir və status yeniləmələrini istifadəçiyə axın (stream) şəklində ötürür:

1. **Göndərilmə (Dispatch)** — qabiliyyət asinxron bir iş yaradır və bir iş ID-si qaytarır.
2. **Sorğu (Poll)** — agent hər 2 saniyədə `gratis_ai_job_status($job_id)` sorğusu göndərir.
3. **Axın (Stream)** — ara irəliləyiş mesajları chat ipə göndərilir.
4. **Tamamlama (Complete)** — son nəticə (uğur və ya səhv) qaytarılır və göstərilir.

İş dövrü hadisələrinə qoşulmaq üçün:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("İş {$job_id} qabiliyyət üçün başladı: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("İş {$job_id} tamamlandı. Uğur: " . ($result['success'] ? 'bəli' : 'xeyr'));
}, 10, 2);
```
