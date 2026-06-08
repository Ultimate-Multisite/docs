---
title: የተገጠሙ ወኪሎች
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# በስርዓቱ ውስጥ የተገጠሙ Agents

Gratis AI Agent v1.9.0 አምስት በስርዓቱ ውስጥ የተገጠሙ agents አሉት። እያንዳንዳቸው በተወሰኑ መሳሪያዎች (tools) ስብስብ፣ በተዘጋጀ system prompt እና በዚያ አካባቢ ባሉ የተለመዱ ስራዎች ላይ የተመሠረቱ የመነሻ ሀሳቦች (starter suggestions) ተዘጋጅተዋል። በአግነቶች መካከል መቀያየር የአሲስጠนต์ው ምን ማድረግ እንደሚችል እና እንዴት ምላሽ እንደሚሰጥ ይለውጣል—እናም ምንም አይነት ቅንብር (configuration) ሳያስፈልግዎ።

## Agent ማለት ምን ማለት ነው?

እያንዳንዱ agent የሚቀላቀለው የሚከተሉትን ክፍሎች ያካተተ ስም የተሰጠው የቅንብር መገለጫ (configuration profile) ነው።

- **Tools** — agentው ሊጠራባቸው የሚፈቀዱ ችሎታዎች (ለምሳሌ፡ የይዘት ጸሐፊ (Content Writer) የፖስት መፍጠር ችሎታን ይይዛል፤ የንድፍ ስቱዲዮ (Design Studio) ደግሞ CSS እና theme.json ችሎታን ይይዛል)
- **System prompt** — የአግነቱን ስሜት፣ ቅድሚያ የሚሰጣቸውን ነገሮች እና ገደቦች የሚያስቀምጡ መመሪያዎች
- **Suggestions** — በፍጥነት እንዲጀምሩ ለመርዳት በቻት በይነገጽ ውስጥ የሚታዩ አስቀድመው የተጻፉ promptዎች

## Agent Pickerን መድረስ

1. በWordPress admin sidebar ውስጥ ያለውን **Gratis AI Agent** ፓነል ይክፈቱ።
2. በቻት ርዕስ (chat header) የላይኛው በግራ ጥግ ላይ ያለውን **agent icon** ይጫኑ (የአይኮኑ የሚቀየረው በንቁ agent ላይ የተመሠረተ ነው።)
3. **Agent Picker** እንደ form-table ሽፋን ይከፈታል። እያንዳንዱ agent በአይኮኑ፣ ስሙ እና በአንድ መስመር መግለጫ ተዘርዝሯል።
4. agentን ለማንቃት የagent መስመሩን ይጫኑ። የቻት ርዕሱ ወዲያውኑ ይሻሻላል።

በውይይቱ መካከልም agents መቀያየር ይችላሉ—አዲሱ agent system prompt ከቀጣዩ መልዕክት ጀምሮ ይሰራል።

## አምስቱ በስርዓቱ ውስጥ የተገጠሙ Agents

### Content Writer

**ትኩረት:** ፖስቶችን፣ ገጾችን እና የእውቂያ ቅጾችን መፍጠር እና ማርትዕ።

**የሚገኙ መሳሪያዎች (Available tools):** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**በምን ላይ ጥሩ ነው:**
- ከማጠቃለያ ወይም ከእቅድ በመነሳት የብሎግ ፖስቶችን መቅረጽ እና ማተም
- ለአዲስ ድረ-ገጽ የላንዲንግ ገጾችን ስብስብ መፍጠር
- የእውቂያ እና ጥያቄ ቅጾችን መገንባት
- ከURL ወይም ፍለጋ በመጠቀም በፖስቶች ላይ featured images ማስቀመጥ

**የመነሻ ሀሳቦች (Starter suggestions):**
- *የWordPress multisite ጥቅሞች ላይ 500 ቃላት የሚያስፈልገው የብሎግ ፖስት ይጻፉ።*
- *አንድ ስለ እኛ (About)፣ አገልግሎቶች (Services) እና የእውቂያ (Contact) ገጽ ይፍጠሩ እና ያትሙ።*
- *በየእውቂያ ገጽ ላይ የቦታ ማስያዣ ጥያቄ ቅጽ ይጨምሩ።*

---

### Site Builder

**ትኩረት:** ከአንድ prompt ብቻ ሙሉ የድረ-ገጽ ግንባታ።

**የሚገኙ መሳሪያዎች (Available tools):** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**በምን ላይ ጥሩ ነው:**
- ለተገለጸ የንግድ አይነት ብዙ ደረጃ ያለው የድረ-ገጽ ግንባታ እቅድ መፍጠር
- እያንዳንዱን ደረጃ በራስ-ሰር ማስፈጸም — አወቃቀር፣ ይዘት፣ አሰሳ፣ ዲዛይን
- በእጅ ጣልቃ መግባት ሳያስፈልግ በቅድሚያ እቅድ ላይ ስህተቶች ከተፈጠሩ መመለስ
- እንደ ግንባታ አካል የሚመከሩ plugins መጫን
- የእውቂያ ቅጾችን በቀጥታ ከቻት በይነገጽ መፍጠር (Superdav AI Agent v1.10.0+)

**የመነሻ ሀሳቦች (Starter suggestions):**
- *የፎቶግራፍ ስራዎች ፖርትፎሊዮ ድረ-ገጽ፣ የጋለሪ ፖስት አይነት፣ የቦታ ማስያዣ ገጽ እና የእውቂያ ቅጽ ይገንቡ።*
- *በኦንላይን ምናሌ፣ የስራ ሰዓት እና የጠረጴዛ ማስያዣ ጥያቄ ቅጽ ያለው የሬስቶራንት ድረ-ገጽ ይፍጠሩ።*
- *የአገልግሎት ገጾችን፣ የፖርትፎሊዮ ክፍልን እና የብሎግ የሚያካትት የነጻ አማካሪ ድረ-ገጽ ያዘጋጁ።*
- *በsite builder በመጠቀም ወደ የእውቂያ ገጽ የቅጽ ይጨምሩ።*

---

### Design Studio

**ትኩረት:** የእይታ ማበጀት — ቀለሞች፣ የፊደል ቅርጽ (typography)፣ CSS እና የብሎክ አብነቶች (block patterns)።

**የሚገኙ መሳሪያዎች (Available tools):** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**በምን ላይ ጥሩ ነው:**
- በተሰየሙ የtheme presets መተግበሪያዎች (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog) መጠቀም
- በtheme.json አማካኝነት ዓለም አቀፍ የፊደል ቅርጽ እና የቀለም ቤተ-ስዕል ማስተካከያ ማድረግ
- ለብራንድ ልዩ የሆኑ መለዋወጫዎች (overrides) የcustom CSS ማስገባት
- የገጽ ስዕል በመቅረጽ እና የንድፍ ችግሮችን በመገምገም መመርመር

**የመነሻ ሀሳቦች (Starter suggestions):**
- *warm-editorial presetን በመተግበር እና ከዚያ ዋናውን ቀለም ወደ #2d6a4f ማዘጋጀት።*
- *የመነሻ ገጹን ስዕል በመቅረጽ እና ምን ማሻሻል እንዳለብኝ መንገር።*
- *ሙሉ-ስፋት የጀርባ ምስል እና በመሃል የርዕስ ስም ያለው እንደገና ጥቅም ላይ ሊውል የሚችል የhero block pattern መፍጠር።*

---

### Plugin Manager

**ትኩረት:** WordPress plugins መፈለግ፣ መጫን እና ማስተዳደር።

**የሚገኙ መሳሪያዎች (Available tools):** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**በምን ላይ ጥሩ ነው:**
- ለተገለጸ የአጠቃቀም ሁኔታ ምርጥ የሆነውን plugin የመመከር
- ከመመዝገቢያው (registry) የችሎታ ፓኬጆችን (ability packs) መጫን
- በምድብ መሠረት የሚገኙ የችሎታ ካታሎግን መቃኘት

**የመነሻ ሀሳቦች (Starter suggestions):**
- *ለየአባልነት ዳይሬክቶሪ (membership directory) ምን ምርጥ plugin አለ?*
- *የWooCommerce abilities pack ይጫኑ።*
- *ሁሉም የሚገኙ የecommerce ability packs አሳይኝ።*

---

### Support Assistant

**ትኩረት:** ስለ የድረ-ገጽ ይዘት፣ ቅንብሮች እና የWordPress አወቃቀር ጥያቄዎችን መመለስ።

**የሚገኙ መሳሪያዎች (Available tools):** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**በምን ላይ ጥሩ ነው:**
- የአሁኑ የድረ-ገጽ ቅንብሮችን እና አማራጮችን መፈለግ
- በድረ-ገጹ ላይ ምን ዓይነት post types፣ taxonomies እና menus ተዘጋጅተዋል ብሎ ማስረዳት
- ቀጥታ እሴቶችን በማንበብ "ይህ ቅንብር ምን ያደርጋል?" ለሚሉ ጥያቄዎች መልስ መስጠት
- ለለውጥ ከመስራት በፊት እንደ የጥበቃ (read-only) የዲያግኖስቲክ ሽፋን ሆኖ ማገልገል

**የመነሻ ሀሳቦች (Starter suggestions):**
- *በዚህ ድረ-ገጽ ላይ በአሁኑ ጊዜ ምን plugins እና ቅንብሮች ንቁ ናቸው?*
- *በዚህ ድረ-ገጽ ላይ የተመዘገቡትን ሁሉንም custom post types ዘርዝሩ።*
- *ምን ዓይነት የአሰሳ (navigation) menus አሉ እና የት ተመድበዋል?*

---

## Agentsን ማበጀት (Customising Agents)

እያንዳንዱ በስርዓቱ ውስጥ የተገጠመ agent በ`gratis_ai_agent_agents` filter በኩል ሊሰፋ ወይም ሊተካ ይችላል።

### ወደ አሁን ባለው agent የcustom system prompt መጨመር

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### አዲስ agent መመዝገብ

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

አዲሱ agent filter በሚሰራበት ጊዜ ወዲያውኑ በAgent Picker ውስጥ ይታያል።

### በስርዓቱ ውስጥ የተገጠመ agent ማስወገድ

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
