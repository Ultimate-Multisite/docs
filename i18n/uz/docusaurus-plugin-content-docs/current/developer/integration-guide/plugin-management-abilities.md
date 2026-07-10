---
title: Pluginlarni boshqarish imkoniyatlari
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Plugin boshqaruvi imkoniyatlari {#plugin-management-abilities}

Gratis AI Agent v1.5.0 suhbat davomida AI yordamchi chaqira oladigan **7 ta plugin boshqaruvi imkoniyati** bilan yetkazib beriladi. Bu imkoniyatlar [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox) orqali o‘rnatilgan WordPress pluginlari ustidan dasturiy boshqaruvni ta’minlaydi.

## Imkoniyatlar sharhi {#abilities-overview}

| Imkoniyat | Slug | Tavsif |
|---|---|---|
| Pluginlar ro‘yxati | `list_plugins` | Sandbox omboridagi pluginlar ro‘yxatini ularning holati bilan qaytaradi. |
| Pluginni olish | `get_plugin` | Muayyan plugin uchun metadata va manba kodini slug bo‘yicha oladi. |
| Plugin yaratish | `create_plugin` | Tavsif asosida yangi plugin yaratadi va uni sandboxda saqlaydi. |
| Pluginni yangilash | `update_plugin` | Pluginning manba kodini yangi versiya bilan almashtiradi. |
| Pluginni o‘chirish | `delete_plugin` | Pluginni sandbox omboridan olib tashlaydi. Avval deaktivatsiya qiladi. |
| Pluginni o‘rnatish | `install_plugin` | Sandboxdagi pluginni jonli WordPress plugin katalogiga joylashtiradi. |
| Pluginni aktivlashtirish | `activate_plugin` | Sandboxdagi pluginni wp-env sandbox muhitida aktivlashtiradi. |

## Plugin Installer API {#plugin-installer-api}

Plugin o‘rnatuvchisi pluginlarni joylashtirish yoki olib tashlashda fayl tizimi operatsiyalarini boshqaradi. Asosiy xatti-harakatlar:

- **Yo‘lni tekshirish**: Har qanday fayl yozishdan oldin barcha plugin yo‘llari ruxsat etilgan plugin katalogiga nisbatan tekshiriladi. Katalog bo‘ylab o‘tish urinishlari rad etiladi.
- **Ko‘p faylli o‘rnatish**: Plugin bir nechta fayldan iborat bo‘lishi mumkin. O‘rnatuvchi plugin katalogini yaratadi va barcha fayllarni atomik tarzda yozadi.
- **Yangilash**: Mavjud plugin fayllarini almashtiradi. Qisman holat xatolarining oldini olish uchun yozishdan oldin pluginni deaktivatsiya qiladi.
- **Slug bo‘yicha o‘chirish**: Plugin katalogini slug bo‘yicha topadi, barcha saytlarda deaktivatsiya qiladi, so‘ng katalogni olib tashlaydi.

### Maxsus o‘rnatish ishlovchisini ro‘yxatdan o‘tkazish {#registering-a-custom-install-handler}

O‘rnatish hayotiy sikliga `gratis_ai_plugin_installer_before_install` va `gratis_ai_plugin_installer_after_install` actionlari yordamida ulanishingiz mumkin:

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

## Ekotizim reyestri {#ecosystem-registry}

Imkoniyatlar **plugin ekotizim reyestri** orqali ro‘yxatdan o‘tkaziladi. Reyestr imkoniyat sluglarini ularning ishlovchi classlariga moslaydi va ularni AI agentning tool dispatcheriga taqdim etadi.

Maxsus plugin boshqaruvi imkoniyatini ro‘yxatdan o‘tkazish uchun:

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

Imkoniyat classingiz `Gratis_AI_Ability_Interface`ni implement qilishi kerak:

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

## HookScanner integratsiyasi {#hookscanner-integration}

`create_plugin` va `update_plugin` imkoniyatlari yangi yaratilgan kodga avtomatik ravishda **HookScanner**ni ishga tushiradi. HookScanner plugin tomonidan ro‘yxatdan o‘tkazilgan WordPress action va filter hooklari ro‘yxatini qaytaradi.

HookScanner natijalarini dasturiy tarzda olish uchun:

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

HookScanner `vendor/` va `node_modules/` kataloglarini avtomatik ravishda o‘tkazib yuboradi.

## Asinxron ish arxitekturasi {#async-job-architecture}

Uzoq davom etadigan plugin operatsiyalari (yaratish, o‘rnatish) jonli progress kuzatuvi bilan **async joblar** sifatida yuboriladi. AI chat interfeysi progressni tekshiradi va holat yangilanishlarini foydalanuvchiga stream qiladi:

1. **Yuborish** — imkoniyat async job yaratadi va job ID qaytaradi.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Stream** — oraliq progress xabarlari chat mavzusiga yuboriladi.
4. **Yakunlash** — yakuniy natija (muvaffaqiyat yoki xato) qaytariladi va ko‘rsatiladi.

Job hayotiy sikli hodisalariga ulanish uchun:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
