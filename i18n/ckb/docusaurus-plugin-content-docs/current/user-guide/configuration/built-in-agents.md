---
title: ئاسایی ئەژمارەکان
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Agents Built-in

Gratis AI Agent v1.9.0 ye 5 agenta built-in (bi-dîjan) ye, ku hûn pêşîn bi setekî taybet hatine ji ber çend alate, yek sistem prompt taybetkirî, û pêşneri destpêkî li gor xwediyê jinan yên wê hene. Pergazandin hatina navbera agentan, dikare vê wekî ku asistanê dikare bike û çawa biaxivin — bi heman demê ji aliyê we ve hatine kirin.

## Agent Çi E?

Heke agent yek profile-a taybetkirî ye ku li ser hev kombine:

- **Tools** — hune qabûlên ku agent dikare bersivê din (mîsal, Content Writer ji bo nirxandin û şifaqandinê hewce dike; Design Studio ji bo CSS û theme.json xwediyê qabûleke ye).
- **System prompt** — rêbazên ku ton tonê, pirüriya, û kersetinên agentê de dabeş dikin.
- **Suggestions** — pêşneri bi nivîs kirin ku li nêroya çatê derxistin ji bo destpêkkirina bergehan arijayî.

## Mergin an Agent Picker

1. Panelê **Gratis AI Agent** di navbera welatê WordPress de dibe.
2. Li hûrguliyeke (top-left) ya sîmna çatê, li ser **agent icon** klik bike (iconê ji bo agenta aktif derxistin).
3. **Agent Picker** wekî yek form-table overlay dibe. Her agent bi iconê, navê wê û tiştî welatî derxistin.
4. Li ser rûna agentê klik bike ku wê aktife bike. Hûrguliyeke çatê hatine guhertin.

Hûn dikarin midî di navbera şatê de agentan bi hev ferokirin — sistem prompt-a agentê nû ji mesajê pêşerojê derxistin.

## Pênç Agentên Built-in (Taybetkirî)

### Content Writer

**Fokus:** Nirxandin û şifaqandinê post, page û formên hezikê.

**Alatên berîvan:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**شومە کاریگەرەکانی:**
- نووسینی و بڵاوکردنەوەی پۆستەکانی بلاگ لەسەر بنووسراوەیەکی کورت یان پێکهاتەی وردی (outline)
- دروستکردنی کۆمەڵێک لـەپیسی لاندینگ بۆ شوێنێکی نوێ
- دروستکردنی فۆرمەکانی پەیوەندی و پرسیارکردن

**پیشگرە سەرەتایی:**
- *نووسین پۆستێکی بلاگ بە ٥٠٠ وشە لەسەر سوودەکانی WordPress multisite.*
- *دروستکردنی لـەپەکانی بافی (About)، خزمەتگوزاری و پەیوەندی و بڵاوکردنەوەیان.*
- *زیادکردنی فۆرمێکی پرسیار بۆ rezervacija لە لـەپی پەیوەندی.*

---

### Site Builder (درستکاروی شوێن)

**تایبەتمەندی سەرەکی:** دروستکردنی وێبسایتی تەواو لەسەر بنەمای یەک پڕۆمێپت (prompt).

**ابزاری پێکراوەکان:** `create_site_plan`، `execute_site_plan`، `get_plan_progress`، `handle_plan_error`، `create_post`، `batch_create_posts`، `register_post_type`، `create_menu`، `add_menu_item`، `inject_custom_css`، `apply_theme_json_preset`، `install_ability`، `recommend_plugin`، `create_contact_form`

**شومە کاریگەرەکانی:**
- دروستکردنی پلانی دروستکردنی شوێن لە چەند قۆناغی جیاواز بۆ ئەو جۆرە کارانەی کە باس دەکرێت
- ئەنجامدانی هەر قۆناغێک بە شێوەیەکی خۆڕاگر (autonomously) — وەک پێکهاتەکان، ناوەڕۆک، ڕێنمایی (navigation)، دیزاین
- گەڕاندنەوە لە هەڵەی نێوان قۆناغەکان بەبێ ئەوەی دەستکاریی دەستکرد بکەیت
- دامەزراندنی پلاتینی پێشنیارکراوەکان وەک بەشێک لە دروستکردنی شوێن

**پیشگرە سەرەتایی:**
- *دروستکردنی لـەپی پۆرتفۆلی فۆتۆگرافی لەگەڵ جۆرێکی پۆستی gallery، لـەپی rezervacija و فۆرم پەیوەندی.*
- *دروستکردنی لـەپی restorant (خاڵخانە) لەگەڵ مینیووی ئۆنلاین، کاتی کارکردن و فۆرمی پرسیار بۆ rezervacija خەریکی.*
- *دامەزراندنی شوێنێکی consultancy فریแลنس لەگەڵ لایەکانی خزمەتگوزاری، بەشی پۆرتفۆلی و بلاگ.*
- *زیادکردنی فۆرم پەیوەندی بۆ لـەپی پەیوەندی بە بەکارهێنانی Site Builder.*

---

### Design Studio (استۆدی دیزاین)

**تایبەتمەندی سەرەکی:** شخصی زۆر و وردکردنەوەی دەوڵەمەندییەکان — ڕەنگەکان، تایپۆگرافی، CSS، و پترۆلەکانی بلوکەکان.

**Aletênkaranî (Plugin Manager)**

**Têkiliya:** Dêfandina, nîvîsîn û ræninkirina pluginên WordPress.

**Aletên li gorî:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Çandî:**
- Pluginê baş ji bo tevgerîna navbera karê vekirin (membership directory) çend e?
- Ability pack-ên WooCommerce ji bo carê nîvîsînê ji min ji vanê.
- Mîte binê min li gorî ability pack-ên e-tînakî yên berê dikarin din.

---

**Kolîkarên Pêrevdar (Support Assistant)**

**Têkiliya:** Paşkirina pirsiyên li ser liştên site, set-ên taybet û ravasendinên WordPress.

**Aletên li gorî:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**چیت بە باشی کار دەکات:**
- دۆزین ڕێگاکانی ئێستای سایت و هەڵبژاردنەکان دەداتەوە.
- ڕوونکردنەوەی ئەوەیە کە چ جۆرە پۆست تایبەتمەند (post types)، تاکسیمە (taxonomies) و مینیوکان لەسەر سایتەکە دیاریکراون.
- وەڵامدانەوەی پرسیارەکانی "ئەم هەڵبژاردنە چی دەکات؟" بە خوێندنەوەی بەهاکانی زیندووە.
- کارکردن وەک لایەیەکی تەنها بۆ دەستپێکردن پێش ئەوەی گۆڕانکاری بکەیت.

**پیشگرە سەرەتاییەکان:**
- *چ پڵگین و هەڵبژاردنەکانی ئێستا لەسەر ئەم سایتە چالاکن؟*
- *هەر جۆرە پۆست تایبەتمندیی (custom post types) کە لەسەر ئەم سایتە تۆمارکراون، لیست بکە.*
- *چ مینیوکان بۆ ڕێڕەوی کارکردن هەن و لە کوێ دابەش کراون؟*

---

## گۆڕانکاریی ئاژەڵەکان (Customising Agents)

هەر یەک لە ئاژەڵەکانی ناوخۆیی دەتوانرێت بە شێوەیەکی زیاتر بگەیەنرێت یان جابگرێتەوە لە ڕێگەی فیلتەرەکە `gratis_ai_agent_agents`.

### زیادکردنی پرامپتێکی سیستمی تایبەت بۆ ئاژەڵێکی هێز (Agent)

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### تۆمارکردنی ئاژەڵێکی نوێ

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

ئەزموونی نوێ لە هەڵبژاردنی کارمێژۆری دەبینیت بە سەردە ڕێی دوای ئەوەی فیلترەکە کار بکات.

### هەڵگرتنی کارمێژۆرێکی پێشوەخت (built-in agent)

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
