---
title: અંતર્નિર્મિત એજન્ટ્સ
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# બિલ્ટ-ઇન Agents

Gratis AI Agent v1.9.0 પાંચ બિલ્ટ-ઇન agents સાથે આવે છે, દરેકને કેન્દ્રિત સાધનોના સેટ, અનુરૂપ system prompt, અને તે ક્ષેત્રના સામાન્ય કાર્યોને મળતી starter સૂચનો સાથે પહેલેથી રૂપરેખાંકિત કરવામાં આવ્યા છે. Agents વચ્ચે બદલવાથી assistant શું કરી શકે છે અને તે કેવી રીતે પ્રતિસાદ આપે છે તે બદલાય છે — તમારી તરફથી કોઈ configuration વિના. Superdav AI Agent v1.18.0 સંબંધિત integrations રૂપરેખાંકિત હોય ત્યારે આ workflowsમાં schedule-aware સાધનો, reminder records, approval gates, અને SMS notifications ઉમેરી શકે છે.

## Agent શું છે?

દરેક agent એ નામિત configuration profile છે જે જોડે છે:

- **સાધનો** — agentને invoke કરવાની મંજૂરી હોય તેવી ક્ષમતાઓ (દા.ત. Content Writer પાસે post-creation ક્ષમતાઓની access હોય છે; Design Studio પાસે CSS અને theme.json ક્ષમતાઓની access હોય છે)
- **System prompt** — agentનો tone, priorities, અને constraints નક્કી કરતી સૂચનાઓ
- **સૂચનો** — ઝડપથી શરૂઆત કરવામાં મદદ કરવા chat interfaceમાં બતાવવામાં આવતા પૂર્વલિખિત prompts

## Agent Picker ઍક્સેસ કરવું

1. WordPress admin sidebarમાં **Gratis AI Agent** panel ખોલો.
2. chat headerના ઉપર-ડાબે **agent icon** પર ક્લિક કરો (active agent દર્શાવવા icon બદલાય છે).
3. **Agent Picker** form-table overlay તરીકે ખૂલે છે. દરેક agent તેના icon, નામ, અને એક-લાઇન વર્ણન સાથે સૂચિબદ્ધ છે.
4. agent row પર ક્લિક કરીને તેને activate કરો. chat header તરત જ update થાય છે.

તમે વાતચીતની વચ્ચે પણ agents બદલી શકો છો — નવા agentનું system prompt આગામી messageથી અસર કરે છે.

## પાંચ બિલ્ટ-ઇન Agents

### Content Writer

**કેન્દ્રબિંદુ:** posts, pages, અને contact forms બનાવવું અને સંપાદિત કરવું.

**ઉપલબ્ધ સાધનો:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Superdav AI Agent v1.18.0 integrations enabled હોય ત્યારે, configured calendar context, approval gates, reminders, અને SMS notification tools પણ approved workflows માટે ઉપલબ્ધ હોઈ શકે છે.

**તે શું સારી રીતે કરે છે:**
- brief અથવા outline પરથી blog postsનો draft બનાવવો અને publish કરવું
- નવા site માટે landing pagesના batches બનાવવું
- contact અને enquiry forms બનાવવું
- URL અથવા search પરથી posts પર featured images સેટ કરવું
- configured Google Calendar contextમાંથી event follow-up messagesનો draft બનાવવો, પછી notifications મોકલતા પહેલાં approval માટે pause કરવું

**Starter suggestions:**
- *WordPress multisiteના ફાયદા વિશે 500-શબ્દનો blog post લખો.*
- *About, Services, અને Contact page બનાવો અને તેમને publish કરો.*
- *Contact pageમાં booking enquiry form ઉમેરો.*
- *આવતીકાલના configured calendar eventના attendees માટે reminderનો draft બનાવો અને તેને મોકલતા પહેલાં approval માટે રાહ જુઓ.*

---

### Site Builder

**કેન્દ્રબિંદુ:** એક જ promptમાંથી end-to-end website creation.

**ઉપલબ્ધ સાધનો:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Superdav AI Agent v1.18.0 સાથે, configured managed-service, approval, reminder, calendar, અને SMS tools ઉપલબ્ધ હોઈ શકે છે જ્યાં administrators તેમને enable કરે છે.

**તે શું સારી રીતે કરે છે:**
- વર્ણવેલા business type માટે multi-phase site build plan generate કરવો
- દરેક phase autonomously execute કરવો — structure, content, navigation, design
- manual intervention જરૂરી કર્યા વિના mid-plan errorsમાંથી recover કરવું
- buildના ભાગરૂપે recommended plugins install કરવું
- chat interfaceમાંથી સીધા contact forms બનાવવું (Superdav AI Agent v1.10.0+)
- approval gates અને reminder records enabled હોય ત્યારે duplicate notifications વિના launch reminders અથવા attendee follow-up coordinate કરવું

**Starter suggestions:**
- *gallery post type, booking page, અને contact form સાથે photography portfolio site બનાવો.*
- *online menu, opening hours, અને table-booking enquiry form સાથે restaurant website બનાવો.*
- *service pages, portfolio section, અને blog સાથે freelance consulting site set up કરો.*
- *site builderનો ઉપયોગ કરીને Contact pageમાં contact form ઉમેરો.*
- *site launch checklist approve થયા પછી, configured stakeholder contactને SMS reminder મોકલો.*

---

### Design Studio

**કેન્દ્રબિંદુ:** Visual customisation — colours, typography, CSS, અને block patterns.

**ઉપલબ્ધ સાધનો:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**તે શું સારી રીતે કરે છે:**
- named theme presets લાગુ કરવું (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- theme.json દ્વારા global typography અને colour palettes fine-tune કરવું
- brand-specific overrides માટે custom CSS inject કરવું
- pageનો screenshot લઈને design issues માટે review કરવું

**Starter suggestions:**
- *warm-editorial preset લાગુ કરો અને પછી primary colour #2d6a4f પર સેટ કરો.*
- *homepageનો screenshot લો અને તમે શું સુધારશો તે કહો.*
- *full-width background image અને centred heading સાથે reusable hero block pattern બનાવો.*

### Plugin Manager

**કેન્દ્રબિંદુ:** WordPress plugins શોધવા, install કરવા, અને manage કરવા.

**ઉપલબ્ધ સાધનો:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**તે શું સારી રીતે કરે છે:**
- વર્ણવેલા use case માટે શ્રેષ્ઠ plugin recommend કરવું
- registryમાંથી ability packs install કરવું
- category અનુસાર ઉપલબ્ધ ability catalogue browse કરવું

**Starter suggestions:**
- *membership directory માટે શ્રેષ્ઠ plugin શું છે?*
- *WooCommerce abilities pack install કરો.*
- *મને બધા ઉપલબ્ધ ecommerce ability packs બતાવો.*

---

### Support Assistant

**કેન્દ્રબિંદુ:** site content, settings, અને WordPress configuration વિશે પ્રશ્નોના જવાબ આપવા.

**ઉપલબ્ધ સાધનો:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**તે શું સારી રીતે કરે છે:**
- વર્તમાન સાઇટ સેટિંગ્સ અને વિકલ્પો શોધવા
- સાઇટ પર કયા પોસ્ટ પ્રકારો, ટેક્સોનોમી અને મેનુઓ ગોઠવેલા છે તે સમજાવવું
- જીવંત મૂલ્યો વાંચીને "આ સેટિંગ શું કરે છે?" જેવા પ્રશ્નોના જવાબ આપવું
- ફેરફારો કરતા પહેલાં ફક્ત-વાંચન નિદાન સ્તર તરીકે સેવા આપવી

**શરૂઆત માટેના સૂચનો:**
- *હાલમાં આ સાઇટ પર કયા પ્લગઇન અને સેટિંગ્સ સક્રિય છે?*
- *આ સાઇટ પર નોંધાયેલા બધા કસ્ટમ પોસ્ટ પ્રકારોની યાદી આપો.*
- *કયા નેવિગેશન મેનુઓ અસ્તિત્વમાં છે અને તેમને ક્યાં સોંપવામાં આવ્યા છે?*

---

## Superdav ઓટોમેશન એકીકરણો

જ્યારે Superdav AI Agent v1.18.0 એકીકરણો ગોઠવેલા હોય, ત્યારે બિલ્ટ-ઇન એજન્ટ વધુ સુરક્ષિત સમયપત્રક-જાગૃત ઓટોમેશન વર્કફ્લોમાં ભાગ લઈ શકે છે:

- **Google Calendar વાંચન સાધનો** એજન્ટને અનુગામી કાર્યનો ડ્રાફ્ટ બનાવતા પહેલાં ગોઠવેલા કેલેન્ડર અને ઇવેન્ટ્સ તપાસવાની મંજૂરી આપે છે.
- **સંપર્ક અને હાજરી આપનારાનું મેપિંગ** ઇવેન્ટના ભાગીદારોને WordPress વપરાશકર્તાઓ અથવા જાણીતા સંપર્કો સાથે મેચ કરવામાં મદદ કરે છે.
- **માનવ મંજૂરી ગેટ્સ** અધિકૃત વપરાશકર્તા તેમની સમીક્ષા કરીને પુષ્ટિ કરે ત્યાં સુધી સંવેદનશીલ ક્રિયાઓને વિરામ આપે છે.
- **રિમાઇન્ડર રેકોર્ડ્સ** નક્કી કરેલી નોકરીઓ ફરી પ્રયાસ કરે અથવા પુનરાવર્તિત થાય ત્યારે ડુપ્લિકેટ સૂચનાઓ અટકાવે છે.
- **TextBee SMS સૂચનાઓ** SMS ઓળખપત્રો અને વર્કફ્લો પરવાનગીઓ સક્ષમ હોય ત્યારે જ ગોઠવેલા ટેક્સ્ટ સંદેશાઓ મોકલે છે.

ભલામણ કરેલો વર્કફ્લો: એજન્ટને સંદેશ અથવા ક્રિયા તૈયાર કરવા કહો, મંજૂરી પ્રોમ્પ્ટની સમીક્ષા કરો, પછી મંજૂર થયેલી ક્રિયાને ફરી શરૂ થવા દો. પુનરાવર્તિત રિમાઇન્ડર માટે, રિમાઇન્ડર ડિડુપ્લિકેશન સક્ષમ રાખો જેથી તે જ ઇવેન્ટ અથવા સંપર્કને વારંવાર સૂચિત ન કરવામાં આવે.

---

## એજન્ટ્સને કસ્ટમાઇઝ કરવું

દરેક બિલ્ટ-ઇન એજન્ટને `gratis_ai_agent_agents` ફિલ્ટર દ્વારા વિસ્તારી અથવા બદલી શકાય છે.

### અસ્તિત્વમાં રહેલા એજન્ટમાં કસ્ટમ સિસ્ટમ પ્રોમ્પ્ટ ઉમેરવું

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### નવો એજન્ટ નોંધવો

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

ફિલ્ટર ચાલ્યા પછી તરત જ નવો એજન્ટ એજન્ટ પિકરમાં દેખાય છે.

### બિલ્ટ-ઇન એજન્ટ દૂર કરવો

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
