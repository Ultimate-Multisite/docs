---
title: Magungunan da aka gina
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Agents da Shiga

Gratis AI Agent v1.9.0 yana biyar da hudu (5) agents na gida, kowane ɗayan kuma an shirya shi da kayan aiki da aka tsara, wani bayanin tsarin (system prompt) mai dacewa, da shawarwari na farko da suka dace da ayyukan yau da kullum a wannan fannin. Canza tsakanin agents yana canza abin da asista zai iya yi da yadda zai jawab — ba tare da wani shigarwa (configuration) daga gare ku ba.

## Menene Agent?

Kowane agent shi ne bayanin tsari mai sunan wanda ya haɗa:

- **Tools** — kayan aiki da agent an amuba su yi (misali, Mai rubuta abubuwa yana iya samun ikon samar da abubuwa; Studio na zane yana iya samun ikon CSS da theme.json).
- **System prompt** — umarni waɗanda ke tsara yanayin magana, muhimmancin abubuwa, da iyakoki (constraints) na agent ɗin.
- **Suggestions** — bayanan rubutu da aka shigar a cikin interface na tattaunawa don taimaka maka fara da sauri.

## Samun Agent Picker

1. Buɗa panel ɗin **Gratis AI Agent** a gefen baya (sidebar) na WordPress admin.
2. Danna **icon ɗin agent** a gefen sama na sashi na tattaunawa (icon ɗin yana canzawa don nuna agent ɗin da ke aiki).
3. **Agent Picker** zai buɗe kowace shi kamar wani tsarin jadawali (form-table overlay). Kowane agent an raba da ikon sa, sunan sa, da bayanin gajeren.
4. Danna sashi na agent don shiga shi. Sashi na tattaunawa zai canza nan take.

Zaka iya canza agents a tsakanin tattaunawa — bayanin tsarin (system prompt) na agent ɗin na sabo zai fara a cikin saƙon da ya biyo.

## Hudu (5) Agents Na Gida

### Mai Rubuta Abubuwa (Content Writer)

**Fokus:** Samar da rubutu da gyara posts, pages, da wajen tattaunawa (contact forms).

**Kayayyaki da aka ba shi:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Abin da shi wanda yake yi kyau:**
- Rubuta da fitarwa (publish) blog posts daga wani bayanin ko tsarin rubutu (outline).
- Samar da nau'ikan shafuka na shiga (landing pages) don wuri sabon.
- Gina fassarori da tambayoyi (contact and enquiry forms).
- Saka hotun al'amari (featured images) a kan posts daga URL ko bincike (search).

**Gabaɗaya ga shawarwari na farko:**
- *Rubuta blog post mai tsawon rubutu 500 game da fa'idodin WordPress multisite.*
- *Samar wani shafi na Game da Wata, Sabbin Ayyuka (Services), da Tambayoyi (Contact) sannan ka fitarwa.*
- *Ka ƙara wani fassarar tambaya na booking a kan shafin Contact ta amfani da Site Builder.*

---

### Site Builder

**Fokus:** Samar da gaba ɗaya na website daga wani babban bayani (single prompt).

**Wadanda ke aiki:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Abin da yake yi kyau:**
- Samar da tsarin gina website na matakai daban don nau'in kasuwanci da aka bayyana.
- Aiki kowane mataki (phase) da kansa — tsari, abubuwan rubutu, hanyar tafiya (navigation), da zane (design).
- Tabbatarwa daga rauni a tsakiya ba tare da buƙatar shiga hannu ba.
- Shigar plugin da aka ba da shawarar a matsayin wani sashi na gina.
- Samar da fassarori da tambayoyi kai tsaye daga interface na tattaunawa (Superdav AI Agent v1.10.0+).

**Gabaɗaya ga shawarwari na farko:**
- *Gina wuri na hoto (photography portfolio site) tare da nau'in post na gallery, shafin booking, da fassarar tambaya.*
- *Samar website na babban abinci tare da menu na intanet, sa'a na buɗuwa, da wani fassarar tambaya don saka baki a kan baki (table-booking).*
- *Ƙirƙirar wuri na shiga lafiyayya ta konsultin (freelance consulting site) tare da shafuka na ayyuka, sashi na portfolio, da blog.*
- *Ka ƙara fassarar tambaya a kan shafin Contact ta amfani da Site Builder.*

---

### Design Studio

**Fokus:** Zane na musamman (Visual customisation) — launi, rubutu (typography), CSS, da tsarin sashi (block patterns).

**Gabaɗa da kayan aiki:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Abin da yake yi kyau:**
- Aiki da kayan aiki na tema (theme presets) masu sunan (kamar minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog).
- Gyara tsarin rubutu da lafiyayya (typography) da launuka na gaba daya ta hanyar theme.json.
- Shigar CSS na musamman don canza abubuwa ga brand ɗin ku.
- Ɗaukar screenshot na wani shafi kuma bincike shi don kuskuren zane.

**Shawarwari na farko:**
- *Yi amfani da preset ɗin warm-editorial sannan ka yi lafiyayyar gaba (primary colour) ta #2d6a4f.*
- *Ka ɗaukar screenshot na homepage kuma ka gaya min abubuwan da za ka inganta.*
- *Ƙirƙiro wani pattern na hero mai amfani da shi tare da hoton gaba daya da labarin da ke tsakiya (centred heading).*

---

### Plugin Manager (Manajan Plugins)

**Fokus:** Gano, shigarwa, da sarrafa WordPress plugins.

**Kayan aiki masu lura:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Abin da yake yi kyau:**
- Ba da shawarar wuri mafi kyau don amfani da wani nau'in aiki (use case) da aka bayyana.
- Shigar kayan aiki na ability (ability packs) daga registry.
- Gano katalin kayan aiki da ake samu ta hanyar fannoni (category).

**Shawarwari na farko:**
- *Wane plugin ne mafi kyau don wani babban wurin samun kuɗi (membership directory)?*
- *Shigar ability pack ɗin WooCommerce.*
- *Ka nuna min dukkan ability packs da ake samu a kasuwar sayarwa (ecommerce).*

---

### Support Assistant (Mai Bincike)

**Fokus:** Amsa tambayoyi game da abubuwan da ke cikin shafin, tsarin (settings), da tsarin WordPress.

**Kayan aiki masu lura:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**شنارته شنو كيدير مزيان:**
- كيقلب على إعدادات وخيارات الموقع الحالية.
- يشرح شنو هما أنواع المنشورات (post types)، والتصنيفات (taxonomies)، والقوائم (menus) اللي مُفعلين في الموقع.
- يجاوب على أسئلة "شنو كيدير هاد الإعداد؟" عن طريق قراءة القيم الحية (live values).
- كيخدم كطبقة تشخيصية للقراءة فقط قبل ما دير أي تغييرات.

**اقتراحات للبداية:**
- *شنو هي الـ plugins والإعدادات المفعلة حالياً في هاد الموقع؟*
- *صنف جميع أنواع المنشورات المخصصة (custom post types) المسجلة في هاد الموقع.*
- *شنو القوائم ديال التنقل (navigation menus) موجودين وأين تم تعيينهم؟*

---

## تخصيص الوكلاء (Customising Agents)

كل وكيل مُدمج (built-in agent) يمكن توسيعو أو استبدالُه عن طريق الفلتر `gratis_ai_agent_agents`.

### إضافة موجه نظام مخصص لوكيل موجود

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### تسجيل وكيل جديد

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

د کارگر جدید بلا تألی قطعه انتخاب (Agent Picker) بلا مباشره بعد از اجرای فیلتر نمایش داده می‌شود.

### حذف یک عامل داخلی (built-in agent)

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
