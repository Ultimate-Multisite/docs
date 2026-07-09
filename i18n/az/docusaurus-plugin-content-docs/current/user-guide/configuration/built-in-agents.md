---
title: Daxili Agentlər
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Daxili Agentlər

Gratis AI Agent v1.9.0 beş daxili agentlə gəlir; hər biri fokuslanmış alətlər dəsti, uyğunlaşdırılmış system prompt və həmin sahədə ümumi tapşırıqlara uyğun başlanğıc təklifləri ilə əvvəlcədən konfiqurasiya olunub. Agentlər arasında keçid köməkçinin nə edə bildiyini və necə cavab verdiyini dəyişir — sizin tərəfinizdən heç bir konfiqurasiya olmadan. Superdav AI Agent v1.18.0 əlaqəli inteqrasiyalar konfiqurasiya edildikdə bu iş axınlarına cədvəldən xəbərdar alətlər, xatırlatma qeydləri, təsdiq keçidləri və SMS bildirişləri əlavə edə bilər.

## Agent nədir?

Hər agent bunları birləşdirən adlı konfiqurasiya profilidir:

- **Alətlər** — agentin işə sala biləcəyi imkanlar (məsələn, Content Writer yazı yaratma imkanlarına çıxışa malikdir; Design Studio CSS və theme.json imkanlarına çıxışa malikdir)
- **System prompt** — agentin tonunu, prioritetlərini və məhdudiyyətlərini müəyyən edən təlimatlar
- **Təkliflər** — tez başlamağınıza kömək etmək üçün chat interfeysində göstərilən əvvəlcədən yazılmış prompt-lar

## Agent Picker-ə giriş

1. WordPress admin yan panelində **Gratis AI Agent** panelini açın.
2. Chat başlığının yuxarı sol hissəsində **agent ikonuna** klikləyin (ikon aktiv agenti əks etdirmək üçün dəyişir).
3. **Agent Picker** forma-cədvəl örtüyü kimi açılır. Hər agent ikonu, adı və bir sətirlik təsviri ilə siyahıda göstərilir.
4. Aktivləşdirmək üçün agent sətrinə klikləyin. Chat başlığı dərhal yenilənir.

Söhbətin ortasında da agentləri dəyişə bilərsiniz — yeni agentin system prompt-u növbəti mesajdan etibarən qüvvəyə minir.

## Beş Daxili Agent

### Content Writer

**Fokus:** Yazıların, səhifələrin və əlaqə formalarının yaradılması və redaktəsi.

**Mövcud alətlər:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Superdav AI Agent v1.18.0 inteqrasiyaları aktiv olduqda, konfiqurasiya edilmiş təqvim konteksti, təsdiq keçidləri, xatırlatmalar və SMS bildiriş alətləri də təsdiqlənmiş iş axınları üçün mövcud ola bilər.

**Nəyi yaxşı edir:**
- Brif və ya plandan bloq yazılarının qaralanması və dərc edilməsi
- Yeni sayt üçün landing page-lərin paket şəklində yaradılması
- Əlaqə və sorğu formalarının qurulması
- URL və ya axtarışdan yazılara seçilmiş şəkillərin təyin edilməsi
- Konfiqurasiya edilmiş Google Calendar kontekstindən tədbir sonrası izləmə mesajlarının qaralanması, sonra bildirişlər göndərilməzdən əvvəl təsdiq üçün dayandırılması

**Başlanğıc təklifləri:**
- *WordPress multisite-in üstünlükləri haqqında 500 sözlük bloq yazısı yaz.*
- *Haqqımızda, Xidmətlər və Əlaqə səhifəsi yarat və onları dərc et.*
- *Əlaqə səhifəsinə rezervasiya sorğu forması əlavə et.*
- *Sabahkı konfiqurasiya edilmiş təqvim tədbirinin iştirakçıları üçün xatırlatma qarala və göndərməzdən əvvəl təsdiqi gözlə.*

---

### Site Builder

**Fokus:** Tək bir prompt-dan başdan-sona vebsayt yaradılması.

**Mövcud alətlər:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Superdav AI Agent v1.18.0 ilə, administratorların aktivləşdirdiyi yerlərdə konfiqurasiya edilmiş idarə olunan xidmət, təsdiq, xatırlatma, təqvim və SMS alətləri mövcud ola bilər.

**Nəyi yaxşı edir:**
- Təsvir edilmiş biznes növü üçün çoxmərhələli sayt qurma planının yaradılması
- Hər mərhələnin avtonom icrası — struktur, məzmun, naviqasiya, dizayn
- Əl müdaxiləsi tələb etmədən planın ortasında xətalardan bərpa
- Qurmanın bir hissəsi kimi tövsiyə olunan plugin-lərin quraşdırılması
- Birbaşa chat interfeysindən əlaqə formalarının yaradılması (Superdav AI Agent v1.10.0+)
- Təsdiq keçidləri və xatırlatma qeydləri aktiv olduqda dublikat bildirişlər olmadan buraxılış xatırlatmalarının və ya iştirakçı izləmələrinin koordinasiyası

**Başlanğıc təklifləri:**
- *Qalereya yazı növü, rezervasiya səhifəsi və əlaqə forması olan fotoqrafiya portfolio saytı qur.*
- *Onlayn menyusu, iş saatları və masa rezervasiyası sorğu forması olan restoran vebsaytı yarat.*
- *Xidmət səhifələri, portfolio bölməsi və bloqu olan frilans konsaltinq saytı qur.*
- *Site builder-dən istifadə edərək Əlaqə səhifəsinə əlaqə forması əlavə et.*
- *Sayt buraxılış yoxlama siyahısı təsdiqləndikdən sonra konfiqurasiya edilmiş maraqlı tərəf əlaqə nömrəsinə SMS xatırlatma göndər.*

---

### Design Studio

**Fokus:** Vizual fərdiləşdirmə — rənglər, tipoqrafiya, CSS və blok nümunələri.

**Mövcud alətlər:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Nəyi yaxşı edir:**
- Adlandırılmış theme preset-lərin tətbiqi (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- theme.json vasitəsilə qlobal tipoqrafiya və rəng palitralarının incə tənzimlənməsi
- Brendə xas override-lar üçün xüsusi CSS-in əlavə edilməsi
- Səhifənin screenshot-ının çəkilməsi və dizayn problemləri baxımından nəzərdən keçirilməsi

**Başlanğıc təklifləri:**
- *warm-editorial preset-ini tətbiq et və sonra əsas rəngi #2d6a4f olaraq təyin et.*
- *Ana səhifənin screenshot-ını çək və mənə nəyi yaxşılaşdıracağını de.*
- *Tam enli fon şəkli və mərkəzləşdirilmiş başlığı olan təkrar istifadə edilə bilən hero blok nümunəsi yarat.*

### Plugin Manager

**Fokus:** WordPress plugin-lərinin kəşfi, quraşdırılması və idarə edilməsi.

**Mövcud alətlər:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Nəyi yaxşı edir:**
- Təsvir edilmiş istifadə halı üçün ən yaxşı plugin-in tövsiyə edilməsi
- Registry-dən ability pack-lərin quraşdırılması
- Mövcud ability kataloquna kateqoriya üzrə baxış

**Başlanğıc təklifləri:**
- *Membership directory üçün ən yaxşı plugin hansıdır?*
- *WooCommerce abilities pack-ini quraşdır.*
- *Mənə bütün mövcud ecommerce ability pack-ləri göstər.*

---

### Support Assistant

**Fokus:** Sayt məzmunu, ayarlar və WordPress konfiqurasiyası haqqında sualların cavablandırılması.

**Mövcud alətlər:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Nəyi yaxşı edir:**
- Cari sayt ayarlarını və seçimlərini axtarıb tapmaq
- Saytda hansı yazı növlərinin, taksonomiyaların və menyuların konfiqurasiya edildiyini izah etmək
- Canlı dəyərləri oxuyaraq "bu ayar nə edir?" suallarını cavablandırmaq
- Dəyişiklik etməzdən əvvəl yalnız oxuma üçün diaqnostika qatı kimi xidmət etmək

**Başlanğıc təklifləri:**
- *Hazırda bu saytda hansı plugin-lər və ayarlar aktivdir?*
- *Bu saytda qeydiyyatdan keçirilmiş bütün fərdi yazı növlərini siyahıya al.*
- *Hansı naviqasiya menyuları mövcuddur və haralara təyin olunub?*

---

## Superdav Avtomatlaşdırma İnteqrasiyaları

Superdav AI Agent v1.18.0 inteqrasiyaları konfiqurasiya edildikdə, daxili agentlər daha təhlükəsiz, cədvəldən xəbərdar avtomatlaşdırma iş axınlarında iştirak edə bilər:

- **Google Calendar oxuma alətləri** agentlərə növbəti işi hazırlamazdan əvvəl konfiqurasiya edilmiş təqvimləri və tədbirləri yoxlamağa imkan verir.
- **Kontakt və iştirakçı uyğunlaşdırması** tədbir iştirakçılarını WordPress istifadəçiləri və ya məlum kontaktlarla uyğunlaşdırmağa kömək edir.
- **İnsan təsdiqi qapıları** həssas əməliyyatları səlahiyyətli istifadəçi onları nəzərdən keçirib təsdiqləyənə qədər dayandırır.
- **Xatırlatma qeydləri** planlaşdırılmış işlər yenidən cəhd etdikdə və ya təkrarlandıqda təkrarlanan bildirişlərin qarşısını alır.
- **TextBee SMS bildirişləri** yalnız SMS etimad məlumatları və iş axını icazələri aktiv edildikdə konfiqurasiya edilmiş mətn mesajlarını göndərir.

Tövsiyə olunan iş axını: agentdən mesajı və ya əməliyyatı hazırlamasını istəyin, təsdiq sorğusunu nəzərdən keçirin, sonra təsdiqlənmiş əməliyyatın davam etməsinə icazə verin. Təkrarlanan xatırlatmalar üçün xatırlatma deduplıkasiyasını aktiv saxlayın ki, eyni tədbir və ya kontakt təkrar-təkrar bildiriş almasın.

---

## Agentlərin Fərdiləşdirilməsi

Hər bir daxili agent `gratis_ai_agent_agents` filter-i vasitəsilə genişləndirilə və ya əvəz edilə bilər.

### Mövcud agentə fərdi sistem sorğusu əlavə etmək

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Yeni agentin qeydiyyatdan keçirilməsi

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

Yeni agent filter işə düşdükdən dərhal sonra Agent Seçicisində görünür.

### Daxili agentin silinməsi

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
