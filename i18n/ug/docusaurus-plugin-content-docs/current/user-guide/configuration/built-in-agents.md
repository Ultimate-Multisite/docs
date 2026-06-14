---
title: Ўзига киритилган агентлар
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Built-in Agents

Gratis AI Agent v1.9.0 beş hazır agent ile gelir, her biri o alandaki yaygın görevlere uygun olarak önceden yapılandırılmış bir araç seti, özel bir sistem prompt'u ve başlangıç önerileriyle donatılmıştır. Agentler arasında geçiş yapmak, asistanın ne yapabileceğini ve nasıl yanıt vereceğini değiştirir — sizin tarafınızdan herhangi bir ayar yapmanıza gerek yoktur.

## Agent Nedir?

Her agent, şunları birleştiren isimlendirilmiş bir yapılandırma profili gibidir:

- **Araçlar (Tools)** — agent'in kullanmasına izin verilen yetenekler (örneğin, Bir İçerik Yazarı gönderi oluşturma yeteneğine erişebilir; bir Tasarım Stüdyosu CSS ve theme.json yeteneklerine erişebilir).
- **Sistem Prompt'u** — agent'in tonunu, önceliklerini ve kısıtlamalarını belirleyen talimatlar.
- **Öneriler (Suggestions)** — hızlı başlamanı sağlamak için sohbet arayüzünde gösterilen önceden yazılmış prompt'lar.

## Agent Seçicisini Kullanma

1. WordPress yönetim panelinin yan çubuğundaki **Gratis AI Agent** paneline gidin.
2. Sohbet başlığının sol üst köşesindeki **agent ikonuna** tıklayın (ikon, aktif agent'i yansıtacak şekilde değişir).
3. **Agent Picker** bir form-tablo katmanı olarak açılır. Her agent, simgesi, adı ve tek satırlık açıklamasıyla listelenir.
4. Aktif etmek için bir agent satırına tıklayın. Sohbet başlığı anında güncellenir.

Ayrıca konuşma sırasında da agent değiştirebilirsiniz — yeni agent'in sistem prompt'u bir sonraki mesajdan itibaren geçerli olur.

## Beş Dahili Agent

### İçerik Yazarı (Content Writer)

**Odak:** Gönderi, sayfa ve iletişim formu oluşturmak ve düzenlemek.

**Mevcut araçlar:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Ən yaxşı etdiyi işlər:**
- Qısa mətn və ya skeç üzərindən blog yazıları hazırlamaq və yayınlamaq
- Yeni bir sayt üçün landing page-lərin toplu hazırlanmasını yaratmaq
- Əlaqə və sorğu formaları qurmaq
- URL və ya axtarışdan əsas şəkilləri postlara təyin etmək

**Başlanğıc tövsiyələr:**
- *WordPress multisite-ın faydaları haqqında 500 sözlük bir blog yazısı yazın.*
- *Haqqlaşma, Xidmətlər və Əlaqə səhifəsi yaradın və onları yayınlayın.*
- *Əlaqə səhifəsinə rezervasiya sorğu forması əlavə edin.*

---

### Sayt Qurucu (Site Builder)

**Fokus:** Yalnız bir təlimat üzərindən uçtan uca sayt yaratmaq.

**Mövcud alətlər:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Ən yaxşı etdiyi işlər:**
- Təsvir olunan biznes növü üçün çox mərhələli sayt qurma planı yaratmaq
- Hər mərhələni avtonom şəkildə yerinə yetirmək — struktur, məzmun, navigasiya, dizayn
- Plan zamanı xətalar baş versə də əl ilə müdaxilə tələb etmədən onlardan çıxmaq (recover)
- Qurma prosesinin bir hissəsi kimi tövsiyə olunan pluginləri quraşdırmaq
- Chat interfeysindən birbaşa əlaqə formaları yaratmaq (Superdav AI Agent v1.10.0+)

**Başlanğıc tövsiyələr:**
- *Qalereya post tipi, rezervasiya səhifəsi və əlaqə forması ilə fotoqrafiya portfoliyası saytı yaradın.*
- *Onlayn menyu, iş saatları və masa rezervasiyası sorğu forması olan restoran saytı yaradın.*
- *Xidmətlər səhifələri, portfoli qism və blogla bir freelancer məsləhətçi saytı qurun.*
- *Sayt qurucu vasitəsilə Əlaqə səhifəsinə əlaqə forması əlavə edin.*

---

### Dizayn Studiyası (Design Studio)

**Fokus:** Vizual özelleşdirmə — rənglər, tipografiya, CSS və blok nümunələri.

**Mavjud bolmalar:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Nega yaxshi:**
- Ismli theme presetlärini (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog) qo'llash.
- theme.json orqali umumiy tipografiya va rang palitrasini sozlash.
- Brendga xos o'zgartirishlar uchun maxsus CSS kiritish.
- Sahifaning skrinshotini olish va dizayn muammolarini ko'rib chiqish.

**Boshlanish takliflari:**
- *warm-editorial presetini qo'llang va keyin asosiy rangni #2d6a4f qilib belgilang.*
- *Homepage skrinshotini oling va nima yaxshilash mumkinligini ayting.*
- *To'liq kenglikdagi fon rasmi va markazlashtirilgan sarlavha bilan qayta ishlatiladigan hero block pattern yarating.*

---

### Plugin Manager (Plugin Boshqaruvchisi)

**E'tibor:** WordPress pluginlarini topish, o'rnatish va boshqarish.

**Mavjud bolmalar:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Nega yaxshi:**
- Tasvirlangan vaziyat uchun eng yaxshi pluginni tavsiya qilish.
- ro'yxatdan (registry) ability packlarini o'rnatish.
- mavjud ability katalogini kategoriya bo'yicha ko'rib chiqish.

**Boshlanish takliflari:**
- *Aboji ro'yxati uchun eng yaxshi plugin qaysi?*
- *WooCommerce ability packini o'rnating.*
- *Mavjud barcha e-commerce ability packlarini ko'rsating.*

---

### Support Assistant (Texnik Yordamchi)

**E'tibor:** Sayt kontenti, sozlamalari va WordPress konfiguratsiyasi haqidagi savollarga javob berish.

**Mavjud bolmalar:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**بهترین ویژگی‌ها:**
- فعلی تنظیمات و گزینه‌های سایت رو بررسی کردن.
- سایتت روی چه post types، taxonomies و menus تنظیم شده رو توضیح دادن.
- زنده مقادیر رو می‌خونه و به سوال "این تنظیم کارش چیه؟" جواب می‌ده.
- قبل از اینکه تغییر ایجاد کنی، یه لایه تشخیص فقط خواندنی (read-only diagnostic layer) عمل می‌کنه.

**پیشنهادات اولیه:**
- *در حال حاضر چه افزونه‌ها و تنظیماتی روی این سایت فعال هستن؟*
- *تمام custom post types ثبت شده روی این سایت رو لیست کن.*
- *چه منوی ناوبری‌هایی وجود دارن و کجا اختصاص داده شدن؟*

---

## سفارشی‌سازی Agentها (Customising Agents)

هر agent داخلی رو می‌تونی با فیلتر `gratis_ai_agent_agents` گسترش بدی یا جایگزین کنی.

### اضافه کردن یک دستورالعمل سیستمی (system prompt) سفارشی به یک agent موجود

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### ثبت یک agent جدید

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Optimises posts and pages for search engines.',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'You are an SEO specialist. Focus on keyword optimisation, meta descriptions, and structured data.',
        'suggestions'   => [
            'Review the homepage title and meta description.',
            'Suggest title tag improvements for the five most recent posts.',
        ],
    ];
    return $agents;
} );
```

ياقين، جديد агент فیلتر چایلی دانیشه‌چە پاش ئەوەی فیلترەکە کار بکات دەربڕین.

### هەڵگرتنی agentێکی ناوخۆیی (built-in)

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
