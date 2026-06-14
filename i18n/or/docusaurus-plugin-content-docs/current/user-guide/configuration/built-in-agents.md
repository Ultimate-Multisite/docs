---
title: ସେବା ପ୍ରତିଷ୍ଠିତ ଏଜେଣ୍ଟ୍‌ମାନେ
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Built-in Agents

Gratis AI Agent v1.9.0 ମଧ୍ୟରେ ପାଞ୍ଚଟି ବୈଭୁତି ଭିତ୍ତିକ (built-in) ଏଜେଣ୍ଟ ଆସିଛି, ଯାହାକୁ ପ୍ରତ୍ୟେକଟି ନିର୍ଦ୍ଦିଷ୍ଟ କାର୍ଯ୍ୟ ପାଇଁ ସୂକ୍ଷ୍ମ ଉପକରଣଗୁଡ଼ିକ, ଏକ ବ୍ୟବହାରିକ 'system prompt' (ସିଷ୍ଟମ୍ ପ୍ରୋମ୍ପ୍ଟ), ଏବଂ ସେହି ବିଷୟରେ ଆରମ୍ଭ କରିବା ପାଇଁ ପ୍ରସ୍ତୁତ ସୂଚନା ସହିତ ପ୍ରସ୍ତୁତ କରାଯାଇଛି। ଏଜେଣ୍ଟ ମଧ୍ୟରେ ପରିବର୍ତ୍ତନ କଲେ, ଆସିଷ୍ଟାଟି କଣ କରିପାରିବ ଏବଂ କିପରି ଉତ୍ତର ଦେବ, ତାହା ବଦଳିଯାଏ — ଆପଣଙ୍କ ପକ୍ଷର କୌଣସି ସେଟିଙ୍ଗ (configuration) ବିନା।

## ଏଜେଣ୍ଟ କ'ଣ?

ପ୍ରତିଟି ଏଜେଣ୍ଟ ହେଉଛି ଏକ ନାମିତ କନଫିଗୁରେସନ୍ ପ୍ରୋଫାଇଲ୍, ଯାହା ମଧ୍ୟରେ ଥିବା ଜିନିଷଗୁଡ଼ିକର ସମାହାର:

- **Tools** — ଏଜେଣ୍ଟକୁ କେଉଁ କାର୍ଯ୍ୟ କରିବା ଅନୁମତି ଦିଆଯାଇଛି (ଉଦାହରଣ ସ୍ୱରୂପ, ଜଣେ Content Writer ପାଇଁ post ତିଆରି କରିବାର କ୍ଷମତା; ଏକ Design Studio ପାଇଁ CSS ଏବଂ theme.json କ୍ଷମତା)।
- **System prompt** — ଯାହା ଏଜେଣ୍ଟର ଢଙ୍ଗ, ପ୍ରାଥମିକତା (priorities) ଏବଂ ସୀମାକୁ ନିର୍ଦ୍ଧାରଣ କରେ।
- **Suggestions** — ଆପଣଙ୍କୁ ଶୀଘ୍ର ଆରମ୍ଭ କରିବାରେ ସାହାଯ୍ୟ କରିବା ପାଇଁ ଚॅट ଇଣ୍ଟରଫେସରେ ପ୍ରସ୍ତୁତ ଭାଷଣ (pre-written prompts)।

## ଏଜେଣ୍ଟ ପିକର୍ ବ୍ୟବହାର କରିବା

୧. WordPress admin sidebar ମଧ୍ୟରେ **Gratis AI Agent** ପ୍ୟାନେଲ୍‌କୁ ଖୋଲନ୍ତୁ।
୨. ଚॅट ହେଡରର ଉପ-बाମ (top-left) ରେ ଥିବା **agent icon** ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ (ଏକାରିକ ଆଇକନ୍ ବର୍ତ୍ତମାନ ସକ୍ରିୟ ଏଜେଣ୍ଟକୁ ପ୍ରତିଫଳିତ କରିବ)।
୩. **Agent Picker** ଏକ form-table overlay ଭାବରେ ଖୋଲିଯିବ। ପ୍ରତ୍ୟେକ ଏଜେଣ୍ଟକୁ ତାହାର ଆଇକନ୍, ନାମ ଏବଂ ଗୋଟିଏ ଧାଡ଼ିର ବର୍ଣ୍ଣନା ସହିତ ଦିଆଯାଇଛି।
୪. କୌଣସି ଏଜେଣ୍ଟ ରେଖା (row) ଉପରେ କ୍ଲିକ୍ କରିବା ଦ୍ୱାରା ତାହାକୁ ଆକ୍ଟିଭେଟ କରାଯିବ। ଚॅट ହେଡର ତୁରନ୍ତ ଅପଡେଟ୍ ହୋଇଯିବ।

ଆପଣ କଥା ମଧ୍ୟରେ ଏଜେଣ୍ଟ ପରିବର୍ତ୍ତନ କରିପାରିବ — ନୂଆ ଏଜେଣ୍ଟର system prompt ଆଗକୁ ଆସୁଥିବା ନିଷ୍କ୍ରିୟ ବାର୍ତ୍ତା (next message) ଠାରୁ ପ୍ରଭାବଶାଳୀ ହୋଇଯିବ।

## ପାଞ୍ଚଟି Built-in ଏଜେଣ୍ଟ

### Content Writer

**focuS:** post, page, ଏବଂ contact form ତିଆରି କରିବା ଓ ସେଗୁଡ଼ିକ ଉପରେ କାର୍ଯ୍ୟ କରିବା।

**ଉପଲବ୍ଧ ଉପକରଣ (Available tools):** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**ଏହା କ'ଣ ଭଲ କରିପାରିବ:**
- ସଂକ୍ଷିପ୍ତ ବିଷୟ ବା ଆଉଟଲାଇନ୍ ମୁଠିରେ ବ୍ଲଗ୍ ପୋଷ୍ଟ ଲେଖିବା ଏବଂ ପ୍ରକାଶ କରିବା
- ନୂଆ ସାଇଟ୍ ପାଇଁ ଲ୍ୟାଣ୍ଡିଂ ପେଜର ବ୍ୟାଟ୍ (batch) ତିଆରି କରିବା
- କଣ୍ଟାକ୍ଟ୍ ଏବଂ ଅନୁମୋଦନ (enquiry) ଫର୍ମ ତିଆରି କରିବା
- URL ବା ସર્ચ ମାଧ୍ୟମରେ ପୋଷ୍ଟଗୁଡ଼ିକର ଫିଚର୍ଡ୍ ଇମେଜ୍ ସେଟିଂ

**ଆରମ୍ଭ ପ୍ରସ୍ତାବ:**
- *WordPress multisite ର ଲାଭ ବିଷୟରେ ୫୦୦ ଶବ୍ଦର ଏକ ବ୍ଲଗ୍ ପୋଷ୍ଟ ଲେଖନ୍ତୁ।*
- *ଏକ About, Services, ଏବଂ Contact ପେଜ୍ ତିଆରି କରନ୍ତୁ ଏବଂ ସେଗୁଡ଼ିକୁ ପ୍ରକାଶ କରନ୍ତୁ।*
- *Contact ପେଜ୍‌ରେ ଏକ ବୁକ୍ ଆଇନକ୍ଷଣ (booking enquiry) ଫର୍ମ ଯୋଗ କରନ୍ତୁ।*

---

### ସାଇଟ୍ ବିଲ୍ଡର (Site Builder)

**ଧ୍ୟାନ:** ଏକ ପ୍ରମ୍ପଟ (prompt) ମାଧ୍ୟମରେ ସମ୍ପୂର୍ଣ୍ଣ ସାଇଟ୍ ନିର୍ମାଣ କରିବା।

**ଉପଲବ୍ଧ ଉପକରଣ:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**ଏହା କ'ଣ ଭଲ କରିପାରିବ:**
- ବ୍ୟବସାୟିକ ପ୍ରକାର ପାଇଁ ଏକ ମల్-ଫେଜ୍ ସାଇଟ୍ ବିଲ୍ଡ୍ ପ୍ଲାନ ତିଆରି କରିବା
- ପ୍ରତ୍ୟେକ ଫେଜ୍ (structure, content, navigation, design) ନିଜେ କରୁଥିବା—ବିଶେଷ ଭାବରେ ଆଧାର, ବିଷୟବସ୍ତୁ, ନେଭିଗେସନ୍ ଏବଂ డిଜାଇନ୍
- ପ୍ଲାନ ମଧ୍ୟରେ ଠିକ୍ ହୋଇନଥିଲେ ମଧ୍ୟ ମାନୁବ ହସ୍ତକ୍ଷେପ (manual intervention) ବିନା ଭୁଲରୁ ବାହାରିବା
- ବିଲ୍ଡ୍ କରିବା ସମୟରେ ଆବଶ୍ୟକ ପ୍ଲଗିନ୍‌ଗୁଡ଼ିକୁ ଇନଷ୍ଟଲ୍ କରିବା
- ଚ୍ୟାଟ୍ ଇଣ୍ଟରଫେସ୍ (Superdav AI Agent v1.10.0+) ମଧ୍ୟରୁ କଣ୍ଟାକ୍ଟ୍ ଫର୍ମ ସିଧାସଳଖ ତିଆରି କରିବା

**ଆରମ୍ଭ ପ୍ରସ୍ତାବ:**
- *ଏକ ଗ୍ୟାଲେରୀ ପୋଷ୍ଟ ଟାଇପ୍, ଏକ ବୁକ୍ ଆଇନକ୍ଷଣ ପେଜ୍, ଏବଂ ଏକ କଣ୍ଟାକ୍ଟ୍ ଫର୍ମ ସହିତ ଏକ ଫଟୋଗ୍ରାଫି ପୋର୍ଟଫୋଲିଓ ସାଇଟ୍ ତିଆରି କରନ୍ତୁ।*
- *ଏକରେଷ୍ଟ୍ରାଣ୍ଟ୍ ସାଇଟ୍ ତିଆରି କରନ୍ତୁ ଯେଉଁଥିରେ ଅନ୍‌ଲାଇନ୍ ମେନୁ, ଖୋଲିବା ସମୟ ଏବଂ ବୋଝ ବୁକ୍ କରିବା ପାଇଁ ଏକ ଟେବଲ୍-ବୁକ୍ ଆଇନକ୍ଷଣ ଫର୍ମ ରହିବ।*
- *ଏକ ଫ୍ରିଲାନ୍ସ କନସଲ୍ଟିଙ୍ଗ୍ ସାଇଟ୍ ସେଭିସ୍ ପେଜ୍, ଏକ ପୋର୍ଟଫୋଲିଓ ଅଂଶ ଏବଂ ଏକ ବ୍ଲଗ୍ ସହିତ ସେଟ୍ କରନ୍ତୁ।*
- *ସାଇଟ୍ ବିଲଡର ବ୍ୟବହାର କରି Contact ପେଜ୍‌ରେ ଏକ କଣ୍ଟାକ୍ଟ୍ ଫର୍ମ ଯୋଗ କରନ୍ତୁ।*

---

### ဒီଜାଇନ୍ ସ୍ତୁଡିଓ (Design Studio)

**ଧ୍ୟାନ:** ଦୃଶ୍ୟମୂଳକ କଷ୍ଟମ୍‌라이ଜେସନ—ବେଗ, ଟିପografi, CSS, ଏବଂ ବ୍ଲକ୍ ପ୍ୟାଟର୍ନ୍।

**ଉପଲବ୍ଧ ଉପକରଣ:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**ଏହା କ'ଣ ଭଲ କରିପାରିବ:**
- ନାମିତ ธีମ୍ ପ୍ରିସେଟ୍ (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog) ଆପ୍ଲାଇ କରିବା।
- theme.json ମାଧ୍ୟମରେ ଗୋଟିଏ ଫୋନ୍ଟ ଏବଂ ରଙ୍ଗ ପ୍ୟାଲେଟ୍କୁ ସୁସଂହତ କରିବା।
- ବ୍ରାଣ୍ଡ-विशिष्ट ଅତିରିକ୍ଷଣ (overrides) ପାଇଁ କଷ୍ଟମ୍ CSS ପ୍ରେରଣ କରିବା।
- ଏକ ପୃଷ୍ଠାର স্ক্রିନ୍‌ଶଟ୍ ନେଇ ତାକୁ ဒီଜାଇନ ସମସ୍ୟାରୁ ଯାଞ୍ଚ କରିବା।

**ଆରମ୍ଭଗୁଡ଼ିକ:**
- *warm-editorial ପ୍ରିସେଟ୍ ଆପ୍ଲାଇ କରନ୍ତୁ ଏବଂ ମୁଖ୍ୟ ରଙ୍ଗ (primary colour)କୁ #2d6a4f ରେ ସେଟ କରନ୍ତୁ।*
- *হোମପେଜ୍‌ର ଏକ స్క୍ରିନ୍‌ଶଟ୍ ନିଅନ୍ତୁ ଏବଂ ମୋତେ କୁହନ୍ତୁ ଆପଣ କ'ଣ ବାଦଳି କରିପାରିବେ।*
- *ସମ୍ପୂର୍ଣ୍ଣ-ବିଆଦୀ (full-width) ବ୍ୟାଗ୍ରାଉଣ୍ଡ ଇମେଜ୍ ଏବଂ ମଝିରେ ଥିବା ହେଡିଂ ସହିତ ଏକ ପୁନଃ-ଉପଯୋଗୀ (reusable) ହେରୋ ବ୍ଲକ୍ ପ୍ୟାଟର୍ନ୍ ତିଆରି କରନ୍ତୁ।*

---

### ፕလଗିନ୍ ମ୍ୟାନେଜର୍ (Plugin Manager)

**ମୁଖ୍ୟ ବିଷୟ:** WordPress ଉପରେ ଥିବା plugin ଗୁଡ଼ିକୁ ଆବିଷ୍କାର କରିବା, ସ୍ଥାପନ କରିବା ଏବଂ ପରିଚାଳନା କରିବା।

**ଉପଲବ୍ଧ ଉପକରଣ:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**ଏହା କ'ଣ ଭଲ କରିପାରିବ:**
- ବର୍ଣ୍ଣନା କରାଯାଇଥିବା କାମ ପାଇଁ ସବୁଠାରୁ ଭଲ pluginଟିକୁ ପରାମର୍ଶ ଦେବା।
- registry ଠାରୁ ability packs install କରିବା।
- ବିଭେଗ ଅନୁଯାୟୀ ଉପଲବ୍ଧ ability catalogue ବ୍ରାଉଜ୍ କରିବା।

**ଆରମ୍ଭଗୁଡ଼ିକ:**
- *ଏକ ମେମ୍ବେରିସ୍ ଡିରେକ୍ଟୋରୀ ପାଇଁ କେଉଁ pluginଟି ସବୁଠାରୁ ଭଲ?*
- *WooCommerce abilities pack install କରନ୍ତୁ।*
- *ମୋତେ ଆପଣଙ୍କର ସବୁ ଇ-କମର୍ସ ability packs ଦେଖାନ୍ତୁ।*

---

### ସହାୟକ ଅଭିଯୋଗ (Support Assistant)

**ମୁଖ୍ୟ ବିଷୟ:** ସାଇଟ୍ କଣ୍ଟେଣ୍ଟ, ସେଟିଂ ଏବଂ WordPress configuration ସମ୍ପର୍କରେ ପ୍ରଶ୍ନର ଉତ୍ତର ଦେବା।

**ଉପଲବ୍ଧ ଉପକରଣ:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**ଏହା କ’ଣ ଭଲ କରିପାରିବ:**
- ସାଇଟ୍‌ର ବର୍ତ୍ତମାନର ସେଟିଂ ଏବଂ ଅପସନ୍ଗୁଡ଼ିକ ଦେଖିବା।
- ସାଇଟ୍‌ରେ କେଉଁ post types, taxonomies, ଏବଂ menus କ’ଣ କିପରି set ହୋଇଛି, ତାହା ବୁଝାଇବା।
- ଜୀବନ୍ତ ମୂଲ୍ୟ (live values) ପଢ଼ି "ଏହି setting କ’ଣ କରନ୍ତି?" ଭଳି ପ୍ରଶ୍ନର ଉତ୍ତର ଦେବା।
- ପରିବର୍ତ୍ତନ କରିବା ପୂର୍ବରୁ ଏକ read-only diagnostic layer ଭାବରେ କାର୍ଯ୍ୟ କରିବା।

**ଆରମ୍ଭ ସୁପାରିଶ:**
- *ଏହି ସାଇଟ୍‌ରେ ବର୍ତ୍ତମାନ କେଉଁ plugin ଏବଂ setting ಗಳಿವೆ?*
- *ଏହି ସାଇଟ୍‌ରେ ରିଜିଷ୍ଟର୍ ହୋଇଥିବା ସମସ୍ତ custom post types ତାଲିକା ଦିଅ।*
- *କେଉଁ navigation menus ଅଛି ଏବଂ ସେଗୁଡ଼ିକ କେଉଁଠି assign ହୋଇଛି?*

---

## Customising Agents (এଜେଣ୍ଟ୍‌କୁ କଷ୍ଟମାଇଜ କରିବା)

ପ୍ରତି built-in agent କୁ `gratis_ai_agent_agents` filter ମାଧ୍ୟମରେ ବ୍ୟାହତ କରାଯାଇପାରିବ କିମ୍ବା ବଦଳାଇ ଦିଆଯାଇପାରିବ।

### ଏକ ଅସ୍ଥିତ agent ପାଇଁ custom system prompt ଯୋଗ କରିବା

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### ଏକ ନୂଆ agent ରିଜିଷ୍ଟର କରିବା

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Search engines ପାଇଁ posts ଏବଂ pages ଉପରେ ଅପ୍ଟିମାଇଜେସନ୍ କରନ୍ତି।',
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

নতুন এজেন্টটি ফিল্টার চলার পরেই এডিটর থেকে দেখা যায়।

### একটি বিল্ট-ইন এজেন্ট সরানো

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
