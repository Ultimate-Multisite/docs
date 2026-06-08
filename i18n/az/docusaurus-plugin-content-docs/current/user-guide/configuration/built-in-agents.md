---
title: Daxili Agentlər
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Daxili Agentlər

Gratis AI Agent v1.9.0 beş daxili agent ilə gəlir. Hər biri özünə xas bir vasitə dəsti, tənzimlənmiş bir sistem təlimatı və o sahədəki yayğın tapşırıqlara uyğun başlayan təkliflər ilə hazırlanmışdır. Agentlər arasında keçid etmək, sizin tərəfinizdən heç bir konfiqurasiya tələb etmədən, köməkçinin nə edə biləcəyini və necə cavab verəcəyini dəyişir.

## Agent nədir?

Hər bir agent, aşağıdakıları birləşdirən adlandırılmış bir konfiqurasiya profilidir:

- **Vasitələr (Tools)** — agentin çağırmasına icazə verilən bacarıqlar (məsələn, bir Məzmun Yazarı post yaratmaq bacarıqlarına; bir Dizayn Studiyası isə CSS və theme.json bacarıqlarına çıxışa malikdir).
- **Sistem təlimatı (System prompt)** — agentin tonunu, prioritetlərini və məhdudiyyətlərini müəyyən edən təlimatlar.
- **Təkliflər (Suggestions)** — çat interfeysində sizə tez başlamağa kömək etmək üçün əvvəlcədən yazılmış təlimatlar.

## Agent Seçiciyə (Agent Picker) Giriş

1. WordPress admin yan çubuğunda **Gratis AI Agent** panelinə daxil olun.
2. Çat başlığının yuxarı sol küncündəki **agent ikonuna** klikləyin (ikon aktiv agenti əks etdirmək üçün dəyişir).
3. **Agent Seçici** bir form-cədvəl üst qatı kimi açılır. Hər agent ikonu, adı və bir sətirlik təsviri ilə siyahıdadır.
4. Aktivləşdirmək üçün bir agent sətirinə klikləyin. Çat başlığı dərhal yenilənir.

Həmçinin, söhbət zamanı agentləri dəyişə bilərsiniz — yeni agentin sistem təlimatı növbəti mesajdan etirrib.

## Beş Daxili Agent

### Məzmun Yazarı (Content Writer)

**Diqqət Mərkəzi:** Post, səhifə və əlaqə formaları yaratmaq və redaktə etmək.

**Mövcud vasitələr:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Nəyi yaxşı edir:**
- Qısa mətn və ya plan əsasında blog postları hazırlamaq və nəşr etmək
- Yeni bir sayt üçün bir qrup (batch) enlandinq səhifələri yaratmaq
- Əlaqə və sorğu formaları qurmaq
- URL və ya axtarış vasitəsilə postlara əsas şəkillər təyin etmək

**Başlayan təkliflər:**
- *WordPress multisite-ın faydaları haqqında 500 sözlük bir blog postu yaz.*
- *Haqqımızda, Xidmətlər və Əlaqə səhifələrini yarat və onları nəşr et.*
- *Əlaqə səhifəsinə kitabça sorğu forması əlavə et.*

---

### Sayt Qurucu (Site Builder)

**Diqqət Mərkəzi:** Bir tək təlimatdan tam sayt yaratmaq.

**Mövcud vasitələr:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Nəyi yaxşı edir:**
- Təsvir edilmiş biznes növü üçün çoxmərhəlli sayt qurma planı yaratmaq
- Hər bir mərhələni avtonom şəkildə yerinə yetirmək — struktur, məzmun, naviqasiya, dizayn
- Əl ilə müdaxilə tələb etmədən planın ortasında yaranan səhvlərdən bərpəristəmək
- Qurma prosesinin bir hissəsi kimi tövsiyə olunan pluginləri quraşdırmaq
- Əlaqə formalarını birbaşa çat interfeysindən yaratmaq (Superdav AI Agent v1.10.0+)

**Başlayan təkliflər:**
- *Bir qalereya post tipi, kitabça səhifəsi və əlaqə forması ilə foto-portfel saytı qur.*
- *Online menyu, iş saatları və masa rezervasiyası sorğu forması olan bir restoran veb saytı yarat.*
- *Xidmət səhifələri, portfel bölməsi və blog ilə freelance konsultasiya saytı qur.*
- *Sayt qurucudan istifadə edərək Əlaqə səhifəsinə bir əlaqə forması əlavə et.*

---

### Dizayn Studiyası (Design Studio)

**Diqqət Mərkəzi:** Vizual fərdiləşdirmə — rənglər, tipoqrafiya, CSS və blok nümunələri.

**Mövcud vasitələr:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Nəyi yaxşı edir:**
- Adlandırılmış tema presetlərini tətbiq etmək (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- theme.json vasitəsilə ümumi tipoqrafiya və rəng palitralarını incə tənzimləmək
- Brendə xas üstünlüklər üçün xüsusi CSS yerləşdirmək
- Bir səhifənin skrinşotunu çəkmək və dizayn problemləri baxımından nəzərdən keçirmək

**Başlayan təkliflər:**
- *warm-editorial presetini tətbiq et və sonra əsas rəngi #2d6a4f olaraq təyin et.*
- *Ana səhifənin skrinşotunu çək və mənə nəyi yaxşılaşdıra biləcəyimi de.*
- *Tam enarlığı fon şəkli və mərkəzləşdirilmiş başlıq olan istifadə edilə bilən bir hero blok nümunəsi yarat.*

---

### Plugin Meneceri (Plugin Manager)

**Diqqət Mərkəzi:** WordPress pluginlərini kəşf etmək, quraşdırmaq və idarə etmək.

**Mövcud vasitələr:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Nəyi yaxşı edir:**
- Təsvir edilmiş istifadə vəziyyəti üçün ən yaxşı plugini tövsiyə etmək
- Reyestrasiyadan bacarıq paketlərini quraşdırmaq
- Kateqoriya üzrə mövcud bacarıq kataloqundan gəzinti etmək

**Başlayan təkliflər:**
- *Üzvlik kataloqu üçün ən yaxşı plugin hansıdır?*
- *WooCommerce bacarıq paketini quraşdır.*
- *Mövcud bütün e-commerce bacarıq paketlərini göstər.*

---

### Dəstək Asistanı (Support Assistant)

**Diqqət Mərkəzi:** Sayt məzmunu, parametrləri və WordPress konfiqurasiyası haqqında suallara cavab vermək.

**Mövcud vasitələr:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Nəyi yaxşı edir:**
- Cari sayt parametrlərini və seçimlərini yoxlamaq
- Saytda hansı post tiplərinin, taksonomiyaların və menyuların konfiqurasiya edildiyini izah etmək
- Canlı dəyərləri oxuyaraq "bu parametr nə edir?" suallarına cavab vermək
- Dəyişiklik etməzdən əvvəl oxunma (read-only) diaqnostik qat kimi xidmət etmək

**Başlayan təkliflər:**
- *Bu saytda hazırda hansı pluginlər və parametrlər aktivdir?*
- *Bu saytda qeyd olunan bütün custom post tiplərini siyahıla.*
- *Hansı naviqasiya menyuları mövcuddur və haralara təyin edilmişlər?*

---

## Agentləri Fərdiləşdirmək (Customising Agents)

Hər bir daxili agent `gratis_ai_agent_agents` filtri vasitəsilə genişləndirilə və ya əvəz edilə bilər.

### Mövcud agentə xüsusi sistem təlimatı əlavə etmək

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Yeni agent qeydiyyatdan keçirmək

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

Yeni agent, filtri işlətdikdən dərhal sonra Agent Seçiciyə görünür.

### Daxili agenti silmək

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
