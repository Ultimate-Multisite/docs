---
title: ඇතුළත් නියෝජිතයන්
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# අන්තර්ගත ඒජන්ට් (Built-in Agents)

Gratis AI Agent v1.9.0 හි, සෑම ඒජන්ට් එකක්ම පෙර සැකසූ මෙවලම් සමූහයක්, විශේෂිත සිස්ටම් ප්‍රොම්ප්ට් එකක් සහ එම ක්ෂේත්‍රයේ පොදු කාර්යයන්ට ගැලපෙන ආරම්භක යෝජනා සහිතව පැමිණේ. ඒජන්ට් අතර මාරු වීමෙන් අනුකාරකයා (assistant) කළ හැකි දේ සහ එය ප්‍රතිචාර දැක්වීමට ඇති ආකාරය වෙනස් වේ — ඔබ කිසිදු සැකසීමක් නොමැතිව.

## ඒජන්ට් එකක් කියන්නේ මොකක්ද? (What Is an Agent?)

සෑම ඒජන්ට් එකක්ම නම් කරන ලද වින්‍යාස ප්‍රොෆයිලයක් වන අතර එය පහත දේ ඒකාබද්ධ කරයි:

- **Tools** — ඒජන්ට් එකට භාවිතා කිරීමට අවසර ඇති හැකියාවන් (උදාහරණයක් ලෙස, Content Writer කෙනෙකුට පෝස්ට් නිර්මාණය කිරීමේ හැකියාව ලැබේ; Design Studio එකකට CSS සහ theme.json හැකියාවන් ලැබේ).
- **System prompt** — ඒජන්ට් එකේ ස්වරය, ප්‍රමුඛතා සහ සීමාවන් තීරණය කරන උපදෙස්.
- **Suggestions** — ඉක්මනින් ආරම්භ කිරීමට ඔබට උදවු කිරීම සඳහා චැට් අතුරුමුහුණතේ පෙන්වන පෙර ලියන ලද ප්‍රොම්ප්ට් (prompts).

## ඒජන්ට් තෝරා ගැනීම වෙත පිවිසීම (Accessing the Agent Picker)

1. WordPress admin sidebar එකේ **Gratis AI Agent** පැනලය විවෘත කරන්න.
2. චැට් හෙඩර් එකේ ඉහළ වම් කෙළවරේ ඇති **agent icon** එක ක්ලික් කරන්න (ක්‍රියාකාරී ඒජන්ට් එක පිළිබිඹු වන පරිදි අයිකනය වෙනස් වේ).
3. **Agent Picker** එක පෝරම-වගුව ලෙස විවෘත වේ. සෑම ඒජන්ට් එකක්ම එහි අයිකනය, නම සහ එක් පේළියක විස්තරයක් සමඟ ලැයිස්තුගත කර ඇත.
4. ක්‍රියාත්මක කිරීමට ඔබට අවශ්‍ය ඒජන්ට් රේඛාව ක්ලික් කරන්න. චැට් හෙඩර් එක වහාම යාවත්කාලීන වේ.

ඔබට සංවාදයේ අතරතුර පවා ඒජන්ට් මාරු කළ හැකිය — නව ඒජන්ට් එකේ සිස්ටම් ප්‍රොම්ප්ට් එක ඊළඟ පණිවිඩයෙන් ක්‍රියාත්මක වේ.

## අන්තර්ගත ඒජන්ට් පහ (The Five Built-in Agents)

### Content Writer

**අවධානය:** පෝස්ට්, පිටු සහ සම්බන්ධතා පෝරම නිර්මාණය කිරීම සහ සංස්කරණය කිරීම.

**ලබා ගත හැකි මෙවලම්:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**එය හොඳින් කරන දේවල්:**
- කෙටි සටහනකින් හෝ පිටපතකින් බ්ලොග් පෝස්ට් (blog posts) කෙටුම්පත් කිරීම සහ ප්‍රකාශනය කිරීම
- නව වෙබ් අඩවියක් සඳහා ලෑන්ඩිං පිටු (landing pages) සමූහයක් නිර්මාණය කිරීම
- සම්බන්ධතා සහ විමසීම් පෝරම (contact and enquiry forms) ගොඩනැගීම
- URL එකකින් හෝ සෙවුමකින් ලැබෙන දේ මත පදනම්ව පෝස්ට් වල විශේෂිත රූප (featured images) සැකසීම

**ආරම්භක යෝජනා:**
- *WordPress multisite වල ප්‍රතිලාභ පිළිබඳ 500 වචනක් සහිත බ්ලොග් පෝස්ට් එකක් ලියන්න.*
- *About, Services සහ Contact පිටුවක් සාදා ප්‍රකාශයට පත් කරන්න.*
- *Contact පිටුවට වෙන් කිරීමේ විමසීම් පෝරමක් (booking enquiry form) එක් කරන්න.*

---

### Site Builder

**අවධානය:** එකම ප්‍රොම්ප්ට් එකකින් මුළු වෙබ් අඩවියම නිර්මාණය කිරීම.

**ප්‍රවේශ විය හැකි මෙවලම්:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**එය හොඳින් කරන දේවල්:**
- විස්තර කළ ව්‍යාපාර වර්ගයක් සඳහා බහු-අදියර වෙබ් අඩවි ගොඩනැගීමේ සැලැස්මක් (multi-phase site build plan) ජනනය කිරීම
- සෑම අදියරක්ම ස්වයංක්‍රීයව ක්‍රියාත්මක කිරීම — ව්‍යුහය, අන්තර්ගතය, සංචාලනය සහ නිර්මාණය
- සැලැස්ම අතරතුර දෝෂවලින් මිදීම (Recovering from errors) - අතින් මැදිහත්වීම් අවශ්‍ය නොකර
- ගොඩනැගීමේ කොටසක් ලෙස නිර්දේශිත plugin ස්ථාපනය කිරීම
- චැට් අතුරුමුහුණතෙන් කෙලින්ම සම්බන්ධතා පෝරම (contact forms) නිර්මාණය කිරීම (Superdav AI Agent v1.10.0+)

**ආරම්භක යෝජනා:**
- *ගැලරි post type එකක්, වෙන් කිරීමේ පිටුවක් සහ සම්බන්ධතා පෝරමක් සහිත ඡායාරූප කළඹ වෙබ් අඩවියක් ගොඩනඟන්න.*
- *මාර්ගගත මෙනු (online menu), විවෘත වේලාවන් සහ මේස වෙන් කිරීමේ විමසීම් පෝරමක් සහිත අවන්හල වෙබ් අඩවියක් සාදන්න.*
- *සේවා පිටු, කළඹ කොටසක් සහ බ්ලොග් එකක් සහිත නිදහස් උපදේශන (freelance consulting) වෙබ් අඩවියක් සකසන්න.*
- *site builder භාවිතා කර Contact පිටුවට සම්බන්ධතා පෝරමක් එක් කරන්න.*

---

### Design Studio

**අවධානය:** දෘශ්‍ය වෙනස් කිරීම් — වර්ණ, අකුරු වර්ග (typography), CSS සහ කොටු රටා (block patterns).

**පවතින මෙවලම්:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**මේවා හොඳින් කරන දේවල්:**
- නාමගත තේමා ප්‍රස්ථර (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog) යෙදීම.
- theme.json හරහා ගෝලීය අකුරු සැකසුම් සහ වර්ණ මාලා සියුම් ලෙස සකස් කිරීම.
- වෙළඳ නාමයට විශේෂිත වෙනස්කම් සඳහා custom CSS ඇතුළත් කිරීම.
- පිටුවක ස්ක්‍රීන්ෂොට් එකක් ගැනීම සහ නිර්මාණ ගැටළු පරීක්ෂා කිරීම.

**ආරම්භක යෝජනා:**
- *warm-editorial preset එක යොදලා, ප්‍රාථමික වර්ණය #2d6a4f ලෙස සකසන්න.*
- *homepage එකේ ස්ක්‍රීන්ෂොට් එකක් ගන්න แล้ว මට මොනවද වැඩිදියුණු කරන්න පුළුවන් කියලා කියන්න.*
- *පූර්ණ පළල පසුබිම් රූපයක් සහ මැද තියෙන මාතෘකාවක් සහිත නැවත භාවිතා කළ හැකි hero block pattern එකක් සාදන්න.*

---

### Plugin Manager (ප්ලග්ඉන් කළමනාකරු)

**අවධානය:** WordPress ප්ලග්ඉන් සොයා ගැනීම, ස්ථාපනය කිරීම සහ කළමනාකරණය කිරීම.

**පවතින මෙවලම්:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**මේවා හොඳින් කරන දේවල්:**
- විස්තර කරන ලද භාවිත අවස්ථාව සඳහා හොඳම ප්ලග්ඉනය නිර්දේශ කිරීම.
- registry එකෙන් ability packs ස්ථාපනය කිරීම.
- කාණ්ඩ අනුව පවතින ability catalogue එක බැලීම.

**ආරම්භක යෝජනා:**
- *සාමාජික දත්ත ගබඩාවක් (membership directory) සඳහා හොඳම ප්ලග්ඉනය මොකක්ද?*
- *WooCommerce abilities pack එක ස්ථාපනය කරන්න.*
- *පවතින සියලුම e-commerce ability packs මට පෙන්වන්න.*

---

### Support Assistant (සහාය සහායකයා)

**අවධානය:** වෙබ් අඩවි අන්තර්ගතයන්, සැකසුම් සහ WordPress configuration ගැන ප්‍රශ්නවලට පිළිතුරු දීම.

**පවතින මෙවලම්:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**එය හොඳින් කරන දේ:**
- වර්තමාන වෙබ් අඩවි සැකසුම් සහ විකල්ප පරීක්ෂා කිරීම.
- වෙබ් අඩවියේ ඇති post types, taxonomies සහ menus මොනවාද කියලා පැහැදිලි කිරීම.
- සජීවී අගයන් කියවීමෙන් "මේ සැකසුම කරන්නේ මොකක්ද?" වැනි ප්‍රශ්නවලට පිළිතුරු දීම.
- වෙනස්කම් කිරීමට පෙර කියවීමේ පමණක් (read-only) රෝග විනිශ්චය ස්ථරයක් ලෙස ක්‍රියා කිරීම.

**ආරම්භක යෝජනා:**
- *මේ වෙබ් අඩවියේ දැනට ක්‍රියාත්මක ප්ලග්ඉන් සහ සැකසුම් මොනවාද?*
- *මේ වෙබ් අඩවිය සඳහා ලියාපදිංචි කර ඇති සියලුම custom post types (cpt) ලැයිස්තුගත කරන්න.*
- *පවතින navigation menus මොනවාද සහ ඒවා කොතැනට සම්බන්ධ කර තිබේද?*

---

## Customising Agents (කාරකයන් වෙනස් කිරීම)

built-in agent එකක් ඕනෑම ෆිල්ටරයක් හරහා `gratis_ai_agent_agents` හරහා පුළුල් කළ හැකියි හෝ ප්‍රතිස්ථාපනය කළ හැකියි.

### පවතින agent එකකට custom system prompt එකක් එකතු කිරීම

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### නව agent එකක් ලියාපදිංචි කිරීම

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

නව ඒජන්ට් එක ෆිල්ටරය පවත්වන විගසම Agent Picker එකේ දිස්වේ.

### අන්තර්ගත වූ (built-in) ඒජන්ට් එකක් ඉවත් කිරීම

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
