---
title: આંતરિક એજન્ટો
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# બિલ્ટ-ઇન એજન્ટ્સ

Gratis AI Agent v1.9.0 માં પાંચ બિલ્ટ-ઇન એજન્ટ્સ આવે છે. દરેક એજન્ટને એક ચોક્કસ ટૂલ્સના સેટ, એક તૈયાર સિસ્ટમ પ્રોમ્પ્ટ અને તે ક્ષેત્રમાં સામાન્ય કાર્યો સાથે મેળ ખાતા સ્ટાર્ટર સૂચનો સાથે તૈયાર કરવામાં આવ્યો છે. એજન્ટ્સ વચ્ચે સ્વિચ કરવાથી આસિસ્ટન્ટ શું કરી શકે છે અને તે કેવી રીતે જવાબ આપે છે તેમાં ફેરફાર થાય છે — અને તમારે કોઈ કન્ફિગરેશન કરવાની જરૂર નથી.

## એજન્ટ શું છે?

દરેક એજન્ટ એક નામવાળી કન્ફિગરેશન પ્રોફાઇલ છે જે નીચેની વસ્તુઓનું મિશ્રણ છે:

- **Tools** — એ ક્ષમતાઓ જે એજન્ટને વાપરવાની મંજૂરી છે (દા.ત., એક Content Writer પાસે પોસ્ટ બનાવવાની ક્ષમતાઓ છે; એક Design Studio પાસે CSS અને theme.json ક્ષમતાઓ છે)
- **System prompt** — સૂચનાઓ જે એજન્ટના સ્વર, પ્રાથમિકતાઓ અને મર્યાદાઓ નક્કી કરે છે
- **Suggestions** — ચેટ ઇન્ટરફેસમાં બતાવવામાં આવેલા તૈયાર પ્રોમ્પ્ટ્સ જે તમને ઝડપથી શરૂઆત કરવામાં મદદ કરે છે

## એજન્ટ પિકરને એક્સેસ કરવો

1. WordPress એડમિન સાઇડબારમાં **Gratis AI Agent** પેનલ ખોલો.
2. ચેટ હેડરના ઉપર-ડાબી બાજુએ **એજન્ટ આઇકન** પર ક્લિક કરો (સક્રિય એજન્ટને પ્રતિબિંબિત કરવા માટે આ આઇકન બદલાય છે).
3. **Agent Picker** એક ફોર્મ-ટેબલ ઓવરલે તરીકે ખુલે છે. દરેક એજન્ટ તેના આઇકન, નામ અને એક-લાઇન વર્ણન સાથે સૂચિબદ્ધ છે.
4. તેને એક્ટિવેટ કરવા માટે એજન્ટ રો પર ક્લિક કરો. ચેટ હેડર તરત જ અપડેટ થઈ જાય છે.

તમે વાતચીતની મધ્યમાં પણ એજન્ટ્સ બદલી શકો છો — નવા એજન્ટના સિસ્ટમ પ્રોમ્પ્ટ આગલા મેસેજથી લાગુ થઈ જાય છે.

## પાંચ બિલ્ટ-ઇન એજન્ટ્સ

### Content Writer

**ફોકસ:** પોસ્ટ્સ, પેજીસ અને કોન્ટેક્ટ ફોર્મ્સ બનાવવું અને એડિટ કરવું.

**ઉપલબ્ધ ટૂલ્સ:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**શું સારું કરે છે:**
- એક સંક્ષિપ્ત રૂપરેખા (brief) અથવા આઉટલાઇનમાંથી બ્લોગ પોસ્ટ્સનો ડ્રાફ્ટ કરવો અને પ્રકાશિત કરવો
- નવી સાઇટ માટે લેન્ડિંગ પેજીસના બેચ બનાવવા
- કોન્ટેક્ટ અને એન્ક્વાયરી ફોર્મ્સ બનાવવું
- URL અથવા સર્ચમાંથી પોસ્ટ્સ પર ફીચર કરેલી ઇમેજ સેટ કરવી

**સ્ટાર્ટર સૂચનો:**
- *WordPress multisite ના ફાયદાઓ પર 500 શબ્દોની બ્લોગ પોસ્ટ લખો.*
- *એક About, Services, અને Contact પેજ બનાવો અને તેને પ્રકાશિત કરો.*
- *Contact પેજ પર બુકિંગ એન્ક્વાયરી ફોર્મ ઉમેરો.*

---

### Site Builder

**ફોકસ:** એક જ પ્રોમ્પ્ટમાંથી end-to-end વેબસાઇટ બનાવવી.

**ઉપલબ્ધ ટૂલ્સ:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**શું સારું કરે છે:**
- વર્ણવેલ બિઝનેસ પ્રકાર માટે મલ્ટી-ફેઝ સાઇટ બિલ્ડ પ્લાન જનરેટ કરવો
- દરેક તબક્કાને સ્વતંત્ર રીતે એક્ઝિક્યુટ કરવો — માળખું, કન્ટેન્ટ, નેવિગેશન, ડિઝાઇન
- મેન્યુઅલ હસ્તક્ષેપની જરૂરિયાત વિના પ્લાન દરમિયાન ભૂલોમાંથી પુનઃપ્રાપ્ત થવું
- બિલ્ડના ભાગરૂપે ભલામણ કરેલ પ્ગઇન ઇન્સ્ટોલ કરવા
- ચેટ ઇન્ટરફેસમાંથી સીધા કોન્ટેક્ટ ફોર્મ્સ બનાવવું (Superdav AI Agent v1.10.0+)

**સ્ટાર્ટર સૂચનો:**
- *એક ગેલેરી પોસ્ટ ટાઇપ, એક બુકિંગ પેજ અને એક કોન્ટેક્ટ ફોર્મ સાથે ફોટોગ્રાફી પોર્ટફોલિયો સાઇટ બનાવો.*
- *ઓનલાઈન મેનુ, ઓપનિંગ અવર્સ અને ટેબલ-બુકિંગ એન્ક્વાયરી ફોર્મ સાથે રેસ્ટોરન્ટ વેબસાઇટ બનાવો.*
- *સર્વિસ પેજીસ, પોર્ટફોલિયો સેક્શન અને બ્લોગ સાથે ફ્રીલાન્સ કન્સલ્ટિંગ સાઇટ સેટ કરો.*
- *સાઇટ બિલ્ડરનો ઉપયોગ કરીને Contact પેજ પર કોન્ટેક્ટ ફોર્મ ઉમેરો.*

---

### Design Studio

**ફોકસ:** વિઝ્યુઅલ કસ્ટમાઇઝેશન — રંગો, ટાઇપોગ્રાફી, CSS અને બ્લોક પેટર્ન.

**ઉપલબ્ધ ટૂલ્સ:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**શું સારું કરે છે:**
- નામવાળા થીમ પ્રિસેટ્સ (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog) લાગુ કરવા
- theme.json દ્વારા ગ્લોબલ ટાઇપોગ્રાફી અને કલર પેલેટ્સને ફાઇન-ટ્યુન કરવા
- બ્રાન્ડ-વિશિષ્ટ ઓવરરાઇડ્સ માટે કસ્ટમ CSS ઇન્જેક્ટ કરવું
- પેજનું સ્ક્રીનશોટ લેવું અને ડિઝાઇન સમસ્યાઓ માટે તેની સમીક્ષા કરવી

**સ્ટાર્ટર સૂચનો:**
- *warm-editorial પ્રિસેટ લાગુ કરો અને પછી પ્રાથમિક રંગને #2d6a4f પર સેટ કરો.*
- *હોમપેજનો સ્ક્રીનશોટ લો અને મને કહો કે તમે શું સુધારશો.*
- *ફુલ-width બેકગ્રાઉન્ડ ઇમેજ અને સેન્ટર કરેલા હેડિંગ સાથે એક ફરીથી ઉપયોગમાં લઈ શકાય તેવું હીરો બ્લોક પેટર્ન બનાવો.*

---

### Plugin Manager

**ફોકસ:** WordPress પ્ગઇન શોધવા, ઇન્સ્ટોલ કરવા અને મેનેજ કરવા.

**ઉપલબ્ધ ટૂલ્સ:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**શું સારું કરે છે:**
- વર્ણવેલ ઉપયોગના કેસ માટે શ્રેષ્ઠ પ્ગઇન ભલામણ કરવું
- રજિસ્ટ્રીમાંથી એબિલિટી પેક્સ ઇન્સ્ટોલ કરવા
- કેટેગરી દ્વારા ઉપલબ્ધ એબિલિટી કેટલોગ બ્રાઉઝ કરવો

**સ્ટાર્ટર સૂચનો:**
- *Membership directory માટે શ્રેષ્ઠ પ્ગઇન કયું છે?*
- *WooCommerce એબિલિટી પેક ઇન્સ્ટોલ કરો.*
- *મને બધા ઉપલબ્ધ ecommerce એબિલિટી પેક્સ બતાવો.*

---

### Support Assistant

**ફોકસ:** સાઇટ કન્ટેન્ટ, સેટિંગ્સ અને WordPress કન્ફિગરેશન વિશે પ્રશ્નોના જવાબ આપવા.

**ઉપલબ્ધ ટૂલ્સ:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**શું સારું કરે છે:**
- વર્તમાન સાઇટ સેટિંગ્સ અને ઓપ્શન્સ શોધવા
- સમજાવવું કે સાઇટ પર કયા પોસ્ટ ટાઇપ્સ, ટેક્સોનોમીઝ અને મેનુ કન્ફિગર કરેલા છે
- લાઇવ વેલ્યુ વાંચીને "આ સેટિંગ શું કરે છે?" જેવા પ્રશ્નોના જવાબ આપવા
- ફેરફાર કરતા પહેલા read-only diagnostic layer તરીકે સેવા આપવું

**સ્ટાર્ટર સૂચનો:**
- *આ સાઇટ પર હાલમાં કયા પ્ગઇન અને સેટિંગ્સ active છે?*
- *આ સાઇટ પર રજીસ્ટર થયેલા બધા કસ્ટમ પોસ્ટ ટાઇપ્સની યાદી આપો.*
- *કયા નેવિગેશન મેનુ અસ્તિત્વમાં છે અને તે ક્યાં સોંપાયેલા છે?*

---

## એજન્ટ્સ કસ્ટમાઇઝ કરવા

દરેક બિલ્ટ-ઇન એજન્ટને `gratis_ai_agent_agents` ફિલ્ટર દ્વારા એક્સટેન્ડ અથવા રિપ્લેસ કરી શકાય છે.

### હાલના એજન્ટમાં કસ્ટમ સિસ્ટમ પ્રોમ્પ્ટ ઉમેરવો

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### નવો એજન્ટ રજીસ્ટર કરવો

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

નવો એજન્ટ ફિલ્ટર ચાલ્યા પછી તરત જ એજન્ટ પિકરમાં દેખાય છે.

### બિલ્ટ-ઇન એજન્ટ દૂર કરવો

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
