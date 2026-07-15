---
title: உள்ளமைக்கப்பட்ட முகவர்கள்
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# உள்ளமைந்த Agents

Gratis AI Agent v1.9.0 ஐந்து உள்ளமைந்த agents உடன் வருகிறது. ஒவ்வொன்றும் குறிப்பிட்ட கருவிகளின் தொகுப்பு, தனிப்பயனாக்கப்பட்ட system prompt, மற்றும் அந்தப் பகுதியில் பொதுவான பணிகளுக்கு பொருந்தும் தொடக்கப் பரிந்துரைகளுடன் முன்கூட்டியே அமைக்கப்பட்டுள்ளது. agents இடையே மாறுவது assistant என்ன செய்ய முடியும், அது எவ்வாறு பதிலளிக்கும் என்பதை மாற்றும் — உங்கள் பக்கத்தில் எந்த அமைப்பும் தேவையில்லை. தொடர்புடைய ஒருங்கிணைப்புகள் அமைக்கப்பட்டிருக்கும்போது, Superdav AI Agent v1.18.0 இந்த workflows-களில் அட்டவணையை உணரும் கருவிகள், நினைவூட்டல் பதிவுகள், approval gates, மற்றும் SMS அறிவிப்புகளைச் சேர்க்க முடியும்.

## Agent என்றால் என்ன? {#what-is-an-agent}

ஒவ்வொரு agent-மும் பின்வருவனவற்றை இணைக்கும் பெயரிடப்பட்ட அமைப்பு profile ஆகும்:

- **கருவிகள்** — agent பயன்படுத்த அனுமதிக்கப்பட்டுள்ள திறன்கள் (எ.கா. Content Writer-க்கு பதிவு உருவாக்கும் திறன்களுக்கு அணுகல் உண்டு; Design Studio-க்கு CSS மற்றும் theme.json திறன்களுக்கு அணுகல் உண்டு)
- **System prompt** — agent-இன் தொனி, முன்னுரிமைகள், மற்றும் கட்டுப்பாடுகளை நிர்ணயிக்கும் வழிமுறைகள்
- **பரிந்துரைகள்** — நீங்கள் விரைவாகத் தொடங்க உதவ, chat interface-ல் காட்டப்படும் முன்கூட்டியே எழுதப்பட்ட prompts

## Agent Picker-ஐ அணுகுதல் {#accessing-the-agent-picker}

1. WordPress நிர்வாக sidebar-இல் **Gratis AI Agent** panel-ஐத் திறக்கவும்.
2. chat header-இன் மேல்-இடப்புறத்தில் உள்ள **agent icon**-ஐக் கிளிக் செய்யவும் (செயலில் உள்ள agent-ஐ பிரதிபலிக்க icon மாறும்).
3. **Agent Picker** ஒரு form-table overlay ஆக திறக்கும். ஒவ்வொரு agent-மும் அதன் icon, பெயர், மற்றும் ஒரு வரி விளக்கத்துடன் பட்டியலிடப்படும்.
4. அதை செயல்படுத்த agent row-ஐக் கிளிக் செய்யவும். chat header உடனே புதுப்பிக்கப்படும்.

உரையாடலின் நடுவிலும் agents-ஐ மாற்றலாம் — புதிய agent-இன் system prompt அடுத்த செய்தியிலிருந்து செயல்படும்.

## ஐந்து உள்ளமைந்த Agents {#the-five-built-in-agents}

### Content Writer {#content-writer}

**கவனம்:** பதிவுகள், பக்கங்கள், மற்றும் தொடர்பு forms உருவாக்குதல் மற்றும் திருத்துதல்.

**கிடைக்கும் கருவிகள்:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Superdav AI Agent v1.18.0 ஒருங்கிணைப்புகள் இயக்கப்பட்டிருந்தால், அமைக்கப்பட்ட calendar context, approval gates, reminders, மற்றும் SMS அறிவிப்பு கருவிகளும் அங்கீகரிக்கப்பட்ட workflows-களுக்கு கிடைக்கலாம்.

**சிறப்பாக செய்யும் செயல்கள்:**
- ஒரு brief அல்லது outline-இலிருந்து blog posts வரைந்து வெளியிடுதல்
- புதிய site-க்கு landing pages தொகுப்புகளை உருவாக்குதல்
- தொடர்பு மற்றும் enquiry forms உருவாக்குதல்
- URL அல்லது search-இலிருந்து பதிவுகளில் featured images அமைத்தல்
- அமைக்கப்பட்ட Google Calendar context-இலிருந்து event follow-up messages வரைந்து, பின்னர் notifications அனுப்பும் முன் approval-க்காக இடைநிறுத்துதல்

**தொடக்கப் பரிந்துரைகள்:**
- *WordPress multisite-இன் நன்மைகள் பற்றி 500 சொற்களுடைய blog post எழுதவும்.*
- *About, Services, மற்றும் Contact பக்கங்களை உருவாக்கி வெளியிடவும்.*
- *Contact page-க்கு booking enquiry form சேர்க்கவும்.*
- *நாளைய அமைக்கப்பட்ட calendar event-இல் பங்கேற்பாளர்களுக்கான reminder-ஐ வரைந்து, அதை அனுப்புவதற்கு முன் approval-க்காக காத்திருக்கவும்.*

---

### Site Builder {#site-builder}

**கவனம்:** ஒரே prompt-இலிருந்து தொடக்கம் முதல் முடிவு வரை website உருவாக்கம்.

**கிடைக்கும் கருவிகள்:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Superdav AI Agent v1.18.0 உடன், administrators இயக்கும் இடங்களில் அமைக்கப்பட்ட managed-service, approval, reminder, calendar, மற்றும் SMS கருவிகள் கிடைக்கலாம்.

**சிறப்பாக செய்யும் செயல்கள்:**
- விவரிக்கப்பட்ட business type-க்காக பல கட்ட site build plan உருவாக்குதல்
- ஒவ்வொரு கட்டத்தையும் தன்னிச்சையாக செயல்படுத்துதல் — அமைப்பு, content, navigation, design
- கைமுறை தலையீடு தேவையில்லாமல் plan நடுவிலான errors-இலிருந்து மீளுதல்
- build-இன் பகுதியாக பரிந்துரைக்கப்பட்ட plugins-ஐ நிறுவுதல்
- chat interface-இலிருந்து நேரடியாக contact forms உருவாக்குதல் (Superdav AI Agent v1.10.0+)
- approval gates மற்றும் reminder records இயக்கப்பட்டிருக்கும்போது duplicate notifications இல்லாமல் launch reminders அல்லது attendee follow-up-ஐ ஒருங்கிணைத்தல்

**தொடக்கப் பரிந்துரைகள்:**
- *gallery post type, booking page, மற்றும் contact form உடன் photography portfolio site ஒன்றை உருவாக்கவும்.*
- *online menu, opening hours, மற்றும் table-booking enquiry form உடன் restaurant website ஒன்றை உருவாக்கவும்.*
- *service pages, portfolio section, மற்றும் blog உடன் freelance consulting site ஒன்றை அமைக்கவும்.*
- *site builder-ஐப் பயன்படுத்தி Contact page-க்கு contact form சேர்க்கவும்.*
- *site launch checklist அங்கீகரிக்கப்பட்ட பிறகு, அமைக்கப்பட்ட stakeholder contact-க்கு SMS reminder அனுப்பவும்.*

---

### Design Studio {#design-studio}

**கவனம்:** காட்சி தனிப்பயனாக்கம் — நிறங்கள், எழுத்துரு அமைப்பு, CSS, மற்றும் block patterns.

**கிடைக்கும் கருவிகள்:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**சிறப்பாக செய்யும் செயல்கள்:**
- பெயரிடப்பட்ட theme presets-ஐப் பயன்படுத்துதல் (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- theme.json மூலம் global typography மற்றும் colour palettes-ஐ நுணுக்கமாகச் சரிசெய்தல்
- brand-specific overrides-க்காக custom CSS செலுத்துதல்
- ஒரு பக்கத்தின் screenshot எடுத்து, design issues-க்காக அதை மதிப்பாய்வு செய்தல்

**தொடக்கப் பரிந்துரைகள்:**
- *warm-editorial preset-ஐப் பயன்படுத்தி, பிறகு primary colour-ஐ #2d6a4f ஆக அமைக்கவும்.*
- *homepage-இன் screenshot எடுத்து, நீங்கள் என்ன மேம்படுத்துவீர்கள் என்று சொல்லவும்.*
- *முழு அகல background image மற்றும் மையப்படுத்தப்பட்ட heading உடன் மறுபயன்படுத்தக்கூடிய hero block pattern உருவாக்கவும்.*

### Plugin Manager {#plugin-manager}

**கவனம்:** WordPress plugins-ஐ கண்டறிதல், நிறுவுதல், மற்றும் நிர்வகித்தல்.

**கிடைக்கும் கருவிகள்:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**சிறப்பாக செய்யும் செயல்கள்:**
- விவரிக்கப்பட்ட பயன்பாட்டுக்கான சிறந்த plugin-ஐ பரிந்துரைத்தல்
- registry-இலிருந்து ability packs நிறுவுதல்
- வகைப்படி கிடைக்கும் ability catalogue-ஐ உலாவுதல்

**தொடக்கப் பரிந்துரைகள்:**
- *membership directory-க்கு சிறந்த plugin எது?*
- *WooCommerce abilities pack-ஐ நிறுவவும்.*
- *கிடைக்கும் அனைத்து ecommerce ability packs-ஐக் காட்டவும்.*

---

### Support Assistant {#support-assistant}

**கவனம்:** site content, settings, மற்றும் WordPress configuration பற்றிய கேள்விகளுக்கு பதிலளித்தல்.

**கிடைக்கும் கருவிகள்:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**இது சிறப்பாகச் செய்வது:**
- தற்போதைய தள அமைப்புகள் மற்றும் விருப்பங்களைப் பார்ப்பது
- தளத்தில் எந்த இடுகை வகைகள், வகைப்பாடுகள் மற்றும் மெனுக்கள் அமைக்கப்பட்டுள்ளன என்பதை விளக்குவது
- நேரடி மதிப்புகளைப் படித்து "இந்த அமைப்பு என்ன செய்கிறது?" என்ற கேள்விகளுக்கு பதிலளிப்பது
- மாற்றங்கள் செய்வதற்கு முன் படிக்க மட்டும் கூடிய கண்டறிதல் அடுக்காகச் செயல்படுவது

**தொடக்கப் பரிந்துரைகள்:**
- *இந்தத் தளத்தில் தற்போது எந்த plugins மற்றும் அமைப்புகள் செயலில் உள்ளன?*
- *இந்தத் தளத்தில் பதிவு செய்யப்பட்டுள்ள அனைத்து தனிப்பயன் இடுகை வகைகளையும் பட்டியலிடு.*
- *எந்த வழிசெலுத்தல் மெனுக்கள் உள்ளன, அவை எங்கு ஒதுக்கப்பட்டுள்ளன?*

---

## Superdav தானியக்க ஒருங்கிணைப்புகள் {#superdav-automation-integrations}

Superdav AI Agent v1.18.0 ஒருங்கிணைப்புகள் அமைக்கப்பட்டிருக்கும்போது, உட்பொதிக்கப்பட்ட agents பாதுகாப்பான, அட்டவணை-அறிந்த தானியக்க பணிப்பாய்வுகளில் பங்கேற்கலாம்:

- **Google Calendar படிப்பு கருவிகள்** பின்தொடர் பணியை வரைவதற்கு முன், அமைக்கப்பட்ட நாட்காட்டிகளையும் நிகழ்வுகளையும் agents ஆய்வு செய்ய அனுமதிக்கின்றன.
- **தொடர்பு மற்றும் பங்கேற்பாளர் பொருத்தம்** நிகழ்வு பங்கேற்பாளர்களை WordPress பயனர்கள் அல்லது அறியப்பட்ட தொடர்புகளுடன் பொருத்த உதவுகிறது.
- **மனித ஒப்புதல் வாயில்கள்** அங்கீகரிக்கப்பட்ட பயனர் அவற்றை மதிப்பாய்வு செய்து உறுதிப்படுத்தும் வரை உணர்வுபூர்வமான செயல்களை இடைநிறுத்துகின்றன.
- **நினைவூட்டல் பதிவுகள்** அட்டவணையிடப்பட்ட பணிகள் மீண்டும் முயற்சிக்கும்போது அல்லது மீண்டும் நிகழும்போது நகல் அறிவிப்புகளைத் தடுக்கின்றன.
- **TextBee SMS அறிவிப்புகள்** SMS credentials மற்றும் பணிப்பாய்வு அனுமதிகள் இயக்கப்பட்டிருக்கும்போது மட்டுமே அமைக்கப்பட்ட உரைச் செய்திகளை அனுப்புகின்றன.

பரிந்துரைக்கப்படும் பணிப்பாய்வு: செய்தி அல்லது செயலைத் தயாரிக்க agent-ஐக் கேளுங்கள், ஒப்புதல் அறிவுறுத்தலை மதிப்பாய்வு செய்யுங்கள், பின்னர் அங்கீகரிக்கப்பட்ட செயல் தொடர அனுமதியுங்கள். மீண்டும் நிகழும் நினைவூட்டல்களுக்கு, அதே நிகழ்வு அல்லது தொடர்புக்கு மீண்டும் மீண்டும் அறிவிப்பு செல்லாமல் இருக்க நினைவூட்டல் நகல் நீக்கத்தை இயக்கப்பட்ட நிலையில் வைத்திருங்கள்.

---

## Agents-ஐ தனிப்பயனாக்குதல் {#customising-agents}

ஒவ்வொரு உட்பொதிக்கப்பட்ட agent-ஐயும் `gratis_ai_agent_agents` filter மூலம் நீட்டிக்கலாம் அல்லது மாற்றலாம்.

### ஏற்கனவே உள்ள agent-க்கு தனிப்பயன் system prompt சேர்த்தல் {#adding-a-custom-system-prompt-to-an-existing-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### புதிய agent-ஐப் பதிவு செய்தல் {#registering-a-new-agent}

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

புதிய agent, filter இயங்கியவுடன் Agent Picker-இல் தோன்றும்.

### உட்பொதிக்கப்பட்ட agent-ஐ அகற்றுதல் {#removing-a-built-in-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
