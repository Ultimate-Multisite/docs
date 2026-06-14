---
title: Inbyggð ábytar
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Innebygdirðar Agéntir

Gratis AI Agent v1.9.0 fer með fimm innbyggðum agéntum, hver einn fyrir sér settum hlutverki og verkfæri, sérstaklega tæmstu system-prompt og byrjunstafanir sem eru tengdar almennum upplýsingum í þessu sviði. Skiftning milli agéntum breytur það hvað hjálpar hjálparstafanum að gera og hvernig hann svara — án þess að þú þarft að setja nýja sett.

## Hvað er Agentur?

Hver agentur er nafnlegar settir upplýsingar sem samþættir:

- **Verkefni** — hvernig agéntur geta nota verkfæri (t.d. hefur Textforfesar aðgang til verkefna skráningars, eða Design Studio aðgang til CSS og theme.json).
- **System prompt** — leiðbeiningar sem setja tóninn, fyrirriorðum og takmarkanir agénturinn.
- **Byrjunstafanir** — fornu skrifaðar textir sem sýnast í chat-auði til að hjálpa þér að byrja fljótt.

## Getting Access til Agent Picker

1. Opna **Gratis AI Agent** panel í sidhliðum WordPress eins og á admin-skipti.
2. Klikka á **agentaríkið** í upphaflega hluta chat-auði (íkoninn breytist til að sýna aktivann agent).
3. **Agent Picker** opnast sem form-table overlay. Hver agentur er listað með íkon, nafn og einhver línan skýrslu um þennan agénta.
4. Klikka á rætlíki til að aktíva það. Chat-auði uppfærst strax.

Þú getur auðvitað skift milli agéntum mitt samtalinn er á gang — nýtt system prompt agéntarinn hefur áhrif frá næstu textanum.

## Fimm Innbyggðir Agéntir

### Textforfesar (Content Writer)

**Fokussamþætting:** Skapa og breyta skráningum, yfirskrifum og tengilínunum.

**Til að nota verkefni:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Hva það gæti gert vel:**
- Skrifa og búa til bloggfærslur úr skýrskrýnum eða skýrskrýnum
- Skapa hlutar (batches) landingssígils fyrir nýtt svið
- Byggja síðufermi og skjalfæði fyrir að fanga uppspynningar
- Setja sérstaklega myndir á færslur frá URL eða leitarorð

**Byrjunstílsforslag:**
- *Skrifa bloggfærslu um möguleika WordPress multisite.*
- *Skapa yfirskrifandi, þjónustu- og viðskiptavini-sida og búa til þessar.*
- *Búa til skráningarsíðu fyrir uppspynningar á síðuna við skjalfæði.*

---

### Site Builder (Sítubygging)

**Ábyrgð:** Fullri síðubyggingu frá einum skýrskrýnum.

**Til að nota:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Hva það gæti gert vel:**
- Skapa flurstafna byggingar fyrir viðskipti sem er skýrskrýnt
- Skynja hverja stigi sjálfstö="" - uppbyggingu, innihaldi, leiðbeiningu og hlutverk
- Fara í veg frá villum á meðan planini er í gangta án þess að þarf mannsfólk til að fari inn og greina
- Innstilla tillaga pluginna sem hluti af byggingarferli
- Búa til viðskiptavini-sígildar beint úr chat-stöðu (Superdav AI Agent v1.10.0+)

**Byrjunstílsforslag:**
- *Búa til myndasafnssíða með post-type fyrir galleri, síðu fyrir uppspynningar og viðskiptavini-sígild.*
- *Búa til matvælsgerðar síðu með netumenu, opnunartíma og skjáningarsíðu fyrir þjónustu.*
- *Setja upp síðu fyrir fréttatengsl/skilning með þjónustu-sígildum, myndasafn og blogg.*
- *Búa til viðskiptavini-sígildar á skjalfæði síðunni með site builder.*

---

### Design Studio (Designstudi)

**Ábyrgð:** Visuell persónulegging - liti, texta, CSS og blokkforfatök.

**Til að nota:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Hva það gæti vel gert:**
- Notkun neðskipta (presets) fyrir þema, eins og minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog.
- Nákvæmjustir á almennum texta og fargaflokkum með theme.json.
- Inntök sérstaka CSS í stað brand-eignar útreikninga.
- Taka skráningu (screenshot) yfir yfir síðu og skoða hana fyrir hlutleysi á hlutum.

**Byrjunstílsforslag:**
- *Notu warm-editorial preset og set það primær fargaflokk í #2d6a4f.*
- *Taka skráningu yfir hópmyndina (homepage) og segðu mér hvað þú vilt bæta við.*
- *Skapa áhrifamótun (hero block pattern) sem er með fullwidth mynd og miðlvætta heiti.*

---

### Plugin Manager

**Fokussamsetning:** Finn, nýta og stjórna WordPress pluginum.

**Til að nota:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Hva það gæti vel gert:**
- Notkun bestu pluginar fyrir sérstaka notkunarsýn.
- Nýting af ability packs í registry.
- Leita í tilfyllt listi mögulega ability packs eftir hluta.

**Byrjunstílsforslag:**
- *Hva er bestri pluginur fyrir membership directory?*
- *Nýtu WooCommerce abilities pack.*
- *Sækja mér allar tilfylltu einkaups ability packs.*

---

### Support Assistant

**Fokussamsetning:** Svara spurningum um innihald síðu, settir og WordPress uppsetningu.

**Til að nota:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Hva það gæti vel gert:**
- Leita upp núverandi innstillingar og val á síðunni.
- Skynja hvaða post types, taxonomies og menus eru settir upp á síðunni.
- Svara spurningum um "hvað gerir þessi innstilling?" með því að lesa liveness (live) gildi.
- Taka framleiðandi lesi-eina diagnostíklag fyrir breytingar.

**Byrjunarsugerðir:**
- *Hva er notaðir pluginir og innstillingar á síðunni?*
- *Lista upp allar custom post types sem eru registered á síðunni.*
- *Hva er navigationsmenúir til staðar og hvar eru þau settir upp?*

---

## Skráning af greinar (Customising Agents)

Þú getur breitt út eða byta úr eingöngu innbyggðum greinarmönnum með filteri `gratis_ai_agent_agents`.

### Að bæta sérstakri system prompt í núverandi greini

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Að skrá grein (Registering a new agent)

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

Nýtt agentur kemur í Agent Picker beint eftir að filterinn hefur körfð.

### Fjarlagning byggðar agentar

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
