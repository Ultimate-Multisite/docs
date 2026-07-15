---
title: Àwọn Aṣoju tí a fi sínú rẹ
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Agents Tí a Kọ Sínú Rẹ̀

Gratis AI Agent v1.9.0 wá pẹ̀lú agents márùn-ún tí a kọ sínú rẹ̀, ọkọọkan ni a ti ṣètò tẹ́lẹ̀ pẹ̀lú àkójọpọ̀ tools tó dojú kọ iṣẹ́ pàtó, system prompt tí a ṣe fún un, àti àwọn àbá ìbẹ̀rẹ̀ tí ó bá àwọn iṣẹ́ tó wọ́pọ̀ ní agbègbè yẹn mu. Yíyípadà láàárín agents máa ń yí ohun tí assistant lè ṣe àti bí ó ṣe ń dáhùn padà — láìsí ìṣètò kankan ní apá rẹ. Superdav AI Agent v1.18.0 lè fi tools tó mọ ìṣètò àkókò, àwọn àkọsílẹ̀ ìrántí, approval gates, àti àwọn ìfitónilétí SMS kún àwọn workflows wọ̀nyí nígbà tí a bá ti ṣètò àwọn integrations tó jẹ mọ́ wọn.

## Kí Ni Agent? {#what-is-an-agent}

Agent kọ̀ọ̀kan jẹ́ profile ìṣètò tí ó ní orúkọ tí ó darapọ̀:

- **Tools** — àwọn agbára tí a gba agent láàyè láti pè (fún àpẹẹrẹ Content Writer ní access sí àwọn agbára ìdásílẹ̀ post; Design Studio ní access sí CSS àti àwọn agbára theme.json)
- **System prompt** — àwọn ìtọ́nisọ́nà tí ń ṣètò ohùn agent, àwọn ohun pàtàkì jù, àti àwọn ìdènà
- **Suggestions** — prompts tí a ti kọ tẹ́lẹ̀ tí a fi hàn nínú chat interface láti ràn ọ́ lọ́wọ́ láti bẹ̀rẹ̀ kíákíá

## Wíwọlé sí Agent Picker {#accessing-the-agent-picker}

1. Ṣí panel **Gratis AI Agent** nínú sidebar alákóso WordPress.
2. Tẹ **aami agent** ní òkè-òsì chat header (aami náà máa ń yí padà láti fi agent tó ń ṣiṣẹ́ hàn).
3. **Agent Picker** ṣí bí form-table overlay. Agent kọ̀ọ̀kan ni a ṣe àtòjọ rẹ̀ pẹ̀lú aami rẹ̀, orúkọ rẹ̀, àti àpèjúwe ila kan.
4. Tẹ ila agent kan láti mú un ṣiṣẹ́. Chat header máa ṣe ìmúdójúìwọ̀n lẹ́sẹ̀kẹsẹ̀.

O tún lè yí agents padà ní àárín ìjíròrò — system prompt ti agent tuntun máa bẹ̀rẹ̀ ṣiṣẹ́ láti ìfiranṣẹ́ tó tẹ̀lé.

## Agents Márùn-ún Tí a Kọ Sínú Rẹ̀ {#the-five-built-in-agents}

### Content Writer {#content-writer}

**Àfojúsùn:** Ṣíṣẹ̀dá àti ṣíṣàtúnṣe posts, pages, àti contact forms.

**Tools tó wà:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Pẹ̀lú integrations Superdav AI Agent v1.18.0 tí a ti mu ṣiṣẹ́, configured calendar context, approval gates, reminders, àti tools ìfitónilétí SMS tún lè wà fún workflows tí a fọwọ́ sí.

**Ohun tí ó máa ń ṣe dáadáa:**
- Kíkọ àkọ́kọ́ àti títẹ̀jáde blog posts láti brief tàbí outline
- Ṣíṣẹ̀dá batches ti landing pages fún site tuntun
- Kíkọ contact àti enquiry forms
- Ṣíṣètò featured images lórí posts láti URL tàbí ìṣàwárí
- Kíkọ àkọ́kọ́ àwọn ìfiranṣẹ́ event follow-up láti configured Google Calendar context, lẹ́yìn náà dídúró fún ìfọwọ́sí kí ó tó rán àwọn ìfitónilétí

**Àwọn àbá ìbẹ̀rẹ̀:**
- *Kọ blog post ọrọ̀ 500 nípa àwọn àǹfààní WordPress multisite.*
- *Ṣẹ̀dá ojú-ewé About, Services, àti Contact kí o sì tẹ̀ wọ́n jáde.*
- *Fi booking enquiry form kún ojú-ewé Contact.*
- *Kọ àkọ́kọ́ ìrántí kan fún àwọn attendees lórí configured calendar event ti ọ̀la kí o sì dúró fún ìfọwọ́sí kí o tó fi ránṣẹ́.*

---

### Site Builder {#site-builder}

**Àfojúsùn:** Ṣíṣẹ̀dá website láti ìbẹ̀rẹ̀ dé òpin láti prompt kan ṣoṣo.

**Tools tó wà:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Pẹ̀lú Superdav AI Agent v1.18.0, configured managed-service, approval, reminder, calendar, àti tools SMS lè wà níbi tí administrators bá ti mu wọn ṣiṣẹ́.

**Ohun tí ó máa ń ṣe dáadáa:**
- Ṣíṣẹ̀dá site build plan oní-ìpele púpọ̀ fún irú business tí a ṣàpèjúwe
- Ṣíṣe ìpele kọ̀ọ̀kan láìsí ìtọ́sọ́nà — structure, content, navigation, design
- Ìpadàbọ̀ láti inú àwọn errors ní àárín plan láì nílò ìdásíwọ́wọ́
- Fífi recommended plugins sílẹ̀ gẹ́gẹ́ bí apá kan ti build
- Ṣíṣẹ̀dá contact forms taara láti chat interface (Superdav AI Agent v1.10.0+)
- Ṣíṣepọ̀ launch reminders tàbí attendee follow-up láìsí duplicate notifications nígbà tí approval gates àti reminder records bá ti ṣiṣẹ́

**Àwọn àbá ìbẹ̀rẹ̀:**
- *Kọ site portfolio photography pẹ̀lú gallery post type, ojú-ewé booking, àti contact form.*
- *Ṣẹ̀dá website restaurant pẹ̀lú online menu, opening hours, àti table-booking enquiry form.*
- *Ṣètò site consulting freelance pẹ̀lú ojú-ewé service, apá portfolio, àti blog.*
- *Fi contact form kún ojú-ewé Contact ní lílo site builder.*
- *Lẹ́yìn tí a bá fọwọ́ sí site launch checklist, rán SMS reminder sí configured stakeholder contact.*

---

### Design Studio {#design-studio}

**Àfojúsùn:** Ìṣàṣàtúnṣe ìríran — colours, typography, CSS, àti block patterns.

**Tools tó wà:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Ohun tí ó máa ń ṣe dáadáa:**
- Lílo àwọn theme presets tí ó ní orúkọ (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Ṣíṣe àtúnṣe pẹ̀lú ìtẹ́lọ́run sí global typography àti colour palettes nípasẹ̀ theme.json
- Fífi custom CSS sínú fún brand-specific overrides
- Yíya screenshot ti ojú-ewé kan àti ṣíṣe àyẹ̀wò rẹ̀ fún design issues

**Àwọn àbá ìbẹ̀rẹ̀:**
- *Lo preset warm-editorial, lẹ́yìn náà ṣètò primary colour sí #2d6a4f.*
- *Ya screenshot ti homepage kí o sì sọ ohun tí o máa mú dára síi fún mi.*
- *Ṣẹ̀dá reusable hero block pattern pẹ̀lú full-width background image àti heading tí a fi sí àárín.*

### Plugin Manager {#plugin-manager}

**Àfojúsùn:** Wíwá, fífi sílẹ̀, àti ṣíṣàkóso WordPress plugins.

**Tools tó wà:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Ohun tí ó máa ń ṣe dáadáa:**
- Dídámọ̀ràn plugin tó dára jù fún use case tí a ṣàpèjúwe
- Fífi ability packs sílẹ̀ láti registry
- Wíwo available ability catalogue nípa category

**Àwọn àbá ìbẹ̀rẹ̀:**
- *Kí ni plugin tó dára jù fún membership directory?*
- *Fi WooCommerce abilities pack sílẹ̀.*
- *Fi gbogbo ecommerce ability packs tó wà hàn mí.*

---

### Support Assistant {#support-assistant}

**Àfojúsùn:** Dídáhùn àwọn ìbéèrè nípa content site, settings, àti ìṣètò WordPress.

**Tools tó wà:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Ohun tí ó ń ṣe dáadáa:**
- Wíwá àwọn ètò àti aṣayan ojúlé lọwọlọwọ
- Ṣíṣe àlàyé irú àwọn post, taxonomies, àti àwọn àkójọ aṣàyàn tí a ti ṣètò lórí ojúlé náà
- Dídáhùn àwọn ìbéèrè “kí ni ètò yìí ń ṣe?” nípa kíkà àwọn iye tó wà ní ìgbà yìí
- Ṣíṣe bí ipele ìwádìí ìṣòro tí kò lè kọ nkan sílẹ̀ ṣáájú ṣíṣe àwọn ìyípadà

**Àwọn àbá ìbẹ̀rẹ̀:**
- *Àwọn plugin àti ètò wo ni ó ń ṣiṣẹ́ lọwọlọwọ lórí ojúlé yìí?*
- *Ṣe àtòkọ gbogbo àwọn custom post types tí a forúkọsílẹ̀ lórí ojúlé yìí.*
- *Àwọn àkójọ aṣàyàn ìrìnà wo ni ó wà, ibo sì ni a yàn wọ́n sí?*

---

## Àwọn Ìṣepọ̀ Ìṣe Aládàáṣiṣẹ́ Superdav {#superdav-automation-integrations}

Nígbà tí a bá ti ṣètò àwọn ìṣepọ̀ Superdav AI Agent v1.18.0, àwọn aṣoju tí a fi sínú rẹ̀ lè kópa nínú àwọn ìṣàn iṣẹ́ aládàáṣiṣẹ́ tó mọ ìṣètò àkókò, tó sì ní ààbò ju:

- **Àwọn irinṣẹ́ kíkà Google Calendar** ń jẹ́ kí àwọn aṣoju ṣàyẹ̀wò àwọn kàlẹ́ńdà àti ìṣẹ̀lẹ̀ tí a ti ṣètò ṣáájú kí wọ́n tó kọ iṣẹ́ ìtẹ̀lé.
- **Ìbáramu olùkàn síni àti olùwàníbẹ̀** ń ràn wá lọ́wọ́ láti bá àwọn olùkópa ìṣẹ̀lẹ̀ mu pẹ̀lú àwọn oníṣe WordPress tàbí àwọn olùkàn síni tí a mọ̀.
- **Àwọn ẹnubodè ìfọwọ́sí ènìyàn** máa ń dá àwọn ìgbésẹ̀ tó ní ìfarapa dúró títí oníṣe tí a fún ní àṣẹ yóò fi ṣàyẹ̀wò wọn, kí ó sì jẹ́risi wọn.
- **Àwọn àkọsílẹ̀ ìrántí** ń dènà àwọn ìfitónilétí àdàkọ nígbà tí àwọn iṣẹ́ tí a ṣètò bá tún gbìyànjú tàbí bá tún ṣẹlẹ̀.
- **Àwọn ìfitónilétí SMS TextBee** ń fi àwọn ìfiranṣẹ́ ọrọ̀ tí a ti ṣètò ránṣẹ́ nìkan nígbà tí àwọn ẹ̀rí SMS àti àwọn àṣẹ ìṣàn iṣẹ́ bá ti ṣiṣẹ́.

Ìṣàn iṣẹ́ tí a dámọ̀ràn: ní kí aṣoju náà pèsè ìfiranṣẹ́ tàbí ìgbésẹ̀ náà, ṣàyẹ̀wò ìkìlọ̀ ìfọwọ́sí, lẹ́yìn náà gba ìgbésẹ̀ tí a fọwọ́sí láàyè láti tẹ̀síwájú. Fún àwọn ìrántí tó ń tún ṣẹlẹ̀, jẹ́ kí ìdènà àdàkọ ìrántí ṣiṣẹ́ kí a má bàa fi ìfitónilétí ránṣẹ́ sí ìṣẹ̀lẹ̀ tàbí olùkàn síni kan náà léraléra.

---

## Ṣíṣe Àdáṣe Àwọn Aṣoju {#customising-agents}

A lè fa aṣoju kọọkan tí a fi sínú rẹ̀ gùn tàbí rọ́pò rẹ̀ nípasẹ̀ filter `gratis_ai_agent_agents`.

### Fífi system prompt àdáṣe kún aṣoju tó wà tẹ́lẹ̀ {#adding-a-custom-system-prompt-to-an-existing-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Fíforúkọsílẹ̀ aṣoju tuntun {#registering-a-new-agent}

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

Aṣoju tuntun náà máa hàn nínú Aṣàyàn Aṣoju lẹ́sẹ̀kẹsẹ̀ lẹ́yìn tí filter náà bá ṣiṣẹ́.

### Yíyọ aṣoju tí a fi sínú rẹ̀ kúrò {#removing-a-built-in-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
