---
title: ඇතුළත් නියෝජිතයන්
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# අන්තර්ගත Agents {#built-in-agents}

Gratis AI Agent v1.9.0 හි අන්තර්ගත agents පහක් ඇතුළත් වේ. ඒ එක් එකක්ම එම ක්ෂේත්‍රයේ සාමාන්‍ය කාර්යයන්ට ගැළපෙන පරිදි, අවධානය යොමු කළ tools සමූහයකින්, සකස් කළ system prompt එකකින්, සහ ආරම්භක යෝජනාවලින් පෙර-සකසා ඇත. agents අතර මාරුවීමෙන් assistant කළ හැකි දේ සහ එය ප්‍රතිචාර දක්වන ආකාරය වෙනස් වේ — ඔබට කිසිදු configuration කිරීමක් අවශ්‍ය නැත. Superdav AI Agent v1.18.0 හට, අදාළ integrations සකසා ඇති විට, මෙම workflows වෙත කාලසටහන්-සංවේදී tools, reminder records, approval gates, සහ SMS notifications එකතු කළ හැක.

## Agent යනු කුමක්ද? {#what-is-an-agent}

එක් එක් agent යනු පහත දෑ එකට ගලපන නාමිත configuration profile එකකි:

- **Tools** — agent ට invoke කිරීමට අවසර ඇති හැකියාවන් (උදා. Content Writer කෙනෙකුට post නිර්මාණ හැකියාවන්ට ප්‍රවේශය ඇත; Design Studio කෙනෙකුට CSS සහ theme.json හැකියාවන්ට ප්‍රවේශය ඇත)
- **System prompt** — agent ගේ ස්වරය, ප්‍රමුඛතා, සහ සීමා නියම කරන උපදෙස්
- **යෝජනා** — ඔබට ඉක්මනින් ආරම්භ කිරීමට උදව් කිරීමට chat interface එකේ පෙන්වන පෙර-ලියූ prompts

## Agent Picker වෙත ප්‍රවේශ වීම {#accessing-the-agent-picker}

1. WordPress admin sidebar තුළ **Gratis AI Agent** panel එක විවෘත කරන්න.
2. chat header හි ඉහළ-වම් පැත්තේ ඇති **agent icon** ක්ලික් කරන්න (සක්‍රීය agent අනුව icon එක වෙනස් වේ).
3. **Agent Picker** form-table overlay එකක් ලෙස විවෘත වේ. එක් එක් agent එහි icon, නම, සහ එක්-පේළි විස්තරයක් සමඟ ලැයිස්තුගත වේ.
4. එය සක්‍රීය කිරීමට agent row එකක් ක්ලික් කරන්න. chat header එක වහාම යාවත්කාලීන වේ.

ඔබට සංවාදයක් අතරතුරද agents මාරු කළ හැක — නව agent ගේ system prompt එක ඊළඟ පණිවිඩයෙන් බලපැවැත්වේ.

## අන්තර්ගත Agents පහ {#the-five-built-in-agents}

### Content Writer {#content-writer}

**අවධානය:** posts, pages, සහ contact forms නිර්මාණය කිරීම සහ සංස්කරණය කිරීම.

**ලබාගත හැකි tools:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Superdav AI Agent v1.18.0 integrations සක්‍රීය කර ඇති විට, සකස් කළ calendar context, approval gates, reminders, සහ SMS notification tools ද අනුමත workflows සඳහා ලබාගත හැක.

**මෙය හොඳින් කරන දේ:**
- brief එකක් හෝ outline එකකින් blog posts කෙටුම්පත් කර ප්‍රකාශයට පත් කිරීම
- නව අඩවියක් සඳහා landing pages සමූහ නිර්මාණය කිරීම
- contact සහ enquiry forms තැනීම
- URL එකකින් හෝ search එකකින් posts මත featured images සැකසීම
- සකසා ඇති Google Calendar context එකකින් event follow-up messages කෙටුම්පත් කර, notifications යැවීමට පෙර approval සඳහා නතර වීම

**ආරම්භක යෝජනා:**
- *WordPress multisite හි ප්‍රතිලාභ ගැන වචන 500ක blog post එකක් ලියන්න.*
- *About, Services, සහ Contact page එකක් නිර්මාණය කර ඒවා ප්‍රකාශයට පත් කරන්න.*
- *Contact page එකට booking enquiry form එකක් එක් කරන්න.*
- *හෙට සකසා ඇති calendar event එකේ සහභාගීවන්නන් සඳහා reminder එකක් කෙටුම්පත් කර, එය යැවීමට පෙර approval සඳහා රැඳී සිටින්න.*

---

### Site Builder {#site-builder}

**අවධානය:** එක් prompt එකකින් මුල සිට අවසානය දක්වා වෙබ් අඩවි නිර්මාණය.

**ලබාගත හැකි tools:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Superdav AI Agent v1.18.0 සමඟ, administrators ඒවා සක්‍රීය කරන තැන්වල සකසා ඇති managed-service, approval, reminder, calendar, සහ SMS tools ලබාගත හැක.

**මෙය හොඳින් කරන දේ:**
- විස්තර කළ ව්‍යාපාර වර්ගයක් සඳහා බහු-අදියර අඩවි ගොඩනැගීමේ සැලැස්මක් ජනනය කිරීම
- එක් එක් අදියර ස්වයංක්‍රීයව ක්‍රියාත්මක කිරීම — ව්‍යුහය, අන්තර්ගතය, navigation, design
- අතින් මැදිහත්වීම අවශ්‍ය නොකර, සැලැස්ම මැද errors වලින් නැවත යථා තත්ත්වයට පත්වීම
- build එකේ කොටසක් ලෙස නිර්දේශිත plugins ස්ථාපනය කිරීම
- chat interface එකෙන්ම contact forms නිර්මාණය කිරීම (Superdav AI Agent v1.10.0+)
- approval gates සහ reminder records සක්‍රීය කර ඇති විට, duplicate notifications නොමැතිව launch reminders හෝ attendee follow-up සම්බන්ධීකරණය කිරීම

**ආරම්භක යෝජනා:**
- *gallery post type එකක්, booking page එකක්, සහ contact form එකක් සහිත photography portfolio site එකක් ගොඩනඟන්න.*
- *online menu එකක්, opening hours, සහ table-booking enquiry form එකක් සහිත restaurant website එකක් නිර්මාණය කරන්න.*
- *service pages, portfolio section එකක්, සහ blog එකක් සහිත freelance consulting site එකක් සකසන්න.*
- *site builder භාවිතයෙන් Contact page එකට contact form එකක් එක් කරන්න.*
- *site launch checklist එක approved වූ පසු, සකසා ඇති stakeholder contact වෙත SMS reminder එකක් යවන්න.*

---

### Design Studio {#design-studio}

**අවධානය:** දෘශ්‍ය අභිරුචිකරණය — colours, typography, CSS, සහ block patterns.

**ලබාගත හැකි tools:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**මෙය හොඳින් කරන දේ:**
- නම් කළ theme presets යෙදීම (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- theme.json හරහා global typography සහ colour palettes සූක්ෂ්මව සකස් කිරීම
- brand-specific overrides සඳහා custom CSS ඇතුළත් කිරීම
- පිටුවක screenshot එකක් ගෙන design issues සඳහා එය සමාලෝචනය කිරීම

**ආරම්භක යෝජනා:**
- *warm-editorial preset එක යොදා, පසුව primary colour එක #2d6a4f ලෙස සකසන්න.*
- *homepage එකේ screenshot එකක් ගෙන, ඔබ වැඩිදියුණු කරන දේ මට කියන්න.*
- *full-width background image එකක් සහ centred heading එකක් සහිත නැවත භාවිත කළ හැකි hero block pattern එකක් නිර්මාණය කරන්න.*

### Plugin Manager {#plugin-manager}

**අවධානය:** WordPress plugins සොයාගැනීම, ස්ථාපනය කිරීම, සහ කළමනාකරණය කිරීම.

**ලබාගත හැකි tools:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**මෙය හොඳින් කරන දේ:**
- විස්තර කළ භාවිත අවස්ථාවක් සඳහා හොඳම plugin එක නිර්දේශ කිරීම
- registry එකෙන් ability packs ස්ථාපනය කිරීම
- category අනුව ලබාගත හැකි ability catalogue එක පිරික්සීම

**ආරම්භක යෝජනා:**
- *membership directory එකක් සඳහා හොඳම plugin එක කුමක්ද?*
- *WooCommerce abilities pack එක ස්ථාපනය කරන්න.*
- *ලබාගත හැකි සියලු ecommerce ability packs මට පෙන්වන්න.*

---

### Support Assistant {#support-assistant}

**අවධානය:** අඩවි අන්තර්ගතය, සැකසුම්, සහ WordPress configuration පිළිබඳ ප්‍රශ්නවලට පිළිතුරු දීම.

**ලබාගත හැකි tools:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**මෙය හොඳින් කරන දේ:**
- වත්මන් අඩවි සැකසුම් සහ විකල්ප සොයා බැලීම
- අඩවියේ වින්‍යාස කර ඇති ලිපි වර්ග, වර්ගීකරණ සහ මෙනු පැහැදිලි කිරීම
- සජීවී අගයන් කියවා "මෙම සැකසුම කරන්නේ කුමක්ද?" වැනි ප්‍රශ්නවලට පිළිතුරු දීම
- වෙනස්කම් කිරීමට පෙර කියවීමට පමණක් වූ දෝෂ නිර්ණය ස්ථරයක් ලෙස ක්‍රියා කිරීම

**ආරම්භක යෝජනා:**
- *මෙම අඩවියේ දැනට සක්‍රියව ඇති plugin සහ සැකසුම් මොනවාද?*
- *මෙම අඩවියේ ලියාපදිංචි කර ඇති සියලු අභිරුචි ලිපි වර්ග ලැයිස්තුගත කරන්න.*
- *පවතින සංචරණ මෙනු මොනවාද, ඒවා පැවරී ඇත්තේ කොතැනටද?*

---

## Superdav ස්වයංක්‍රීයකරණ ඒකාබද්ධකරණ {#superdav-automation-integrations}

Superdav AI Agent v1.18.0 ඒකාබද්ධකරණ වින්‍යාස කළ විට, ඇතුළත් නියෝජිතයන්ට කාලසටහන පිළිබඳව දැනුවත් වඩා ආරක්ෂිත ස්වයංක්‍රීයකරණ කාර්ය ප්‍රවාහවලට සහභාගී විය හැක:

- **Google Calendar කියවීමේ මෙවලම්** පසුකාලීන වැඩ කෙටුම්පත් කිරීමට පෙර වින්‍යාස කළ දිනදර්ශන සහ සිදුවීම් පරීක්ෂා කිරීමට නියෝජිතයන්ට ඉඩ දෙයි.
- **සම්බන්ධතා සහ සහභාගිවන්නන් ගැළපීම** සිදුවීම් සහභාගිවන්නන් WordPress පරිශීලකයන් හෝ දන්නා සම්බන්ධතා සමඟ ගැළපීමට උපකාරී වේ.
- **මානව අනුමැති ද්වාර** අවසර ලත් පරිශීලකයෙකු සමාලෝචනය කර තහවුරු කරන තුරු සංවේදී ක්‍රියා විරාම කරයි.
- **සිහිකැඳවීම් වාර්තා** කාලසටහන්ගත කාර්ය නැවත උත්සාහ කරන විට හෝ නැවත සිදුවන විට ද්විත්ව දැනුම්දීම් වැළැක්වෙයි.
- **TextBee SMS දැනුම්දීම්** SMS අක්තපත්‍ර සහ කාර්ය ප්‍රවාහ අවසර සක්‍රිය කර ඇති විට පමණක් වින්‍යාස කළ පෙළ පණිවිඩ යවයි.

නිර්දේශිත කාර්ය ප්‍රවාහය: පණිවිඩය හෝ ක්‍රියාව සූදානම් කිරීමට නියෝජිතයාගෙන් ඉල්ලන්න, අනුමැති විමසුම සමාලෝචනය කරන්න, ඉන්පසු අනුමත කළ ක්‍රියාව නැවත ආරම්භ වීමට ඉඩ දෙන්න. නැවත සිදුවන සිහිකැඳවීම් සඳහා, එකම සිදුවීම හෝ සම්බන්ධතාව නැවත නැවත දැනුම් නොදෙන ලෙස සිහිකැඳවීම් ද්විත්වකරණය වැළැක්වීම සක්‍රියව තබා ගන්න.

---

## නියෝජිතයන් අභිරුචිකරණය කිරීම {#customising-agents}

සෑම ඇතුළත් නියෝජිතයෙකුම `gratis_ai_agent_agents` පෙරහන හරහා දිගු කළ හෝ ප්‍රතිස්ථාපනය කළ හැක.

### පවතින නියෝජිතයෙකට අභිරුචි පද්ධති විමසුමක් එක් කිරීම {#adding-a-custom-system-prompt-to-an-existing-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### නව නියෝජිතයෙකු ලියාපදිංචි කිරීම {#registering-a-new-agent}

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

පෙරහන ක්‍රියාත්මක වූ වහාම නව නියෝජිතයා නියෝජිත තේරීමේ පෙනේ.

### ඇතුළත් නියෝජිතයෙකු ඉවත් කිරීම {#removing-a-built-in-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
