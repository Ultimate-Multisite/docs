---
title: Ndị nnọchi anya arụnyere n'ime
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Agents e wuru n’ime

Gratis AI Agent v1.9.0 na-ebute agents ise e wuru n’ime, nke ọ bụla akwadoro tupu oge ya na otu ngwaọrụ lekwasịrị anya, system prompt ahaziri ya, na aro mmalite kwekọrọ na ọrụ a na-ahụkarị n’akụkụ ahụ. Ịgbanwe n’etiti agents na-agbanwe ihe assistant nwere ike ime na otu o si aza — na-enweghị nhazi ọ bụla n’aka gị. Superdav AI Agent v1.18.0 nwere ike itinye ngwaọrụ maara usoro oge, ndekọ ncheta, ọnụ ụzọ nkwado, na ozi SMS na workflows ndị a mgbe ahaziri integrations metụtara ha.

## Kedu ihe bụ Agent?

Agent ọ bụla bụ profile nhazi nwere aha nke jikọtara:

- **Ngwaọrụ** — ikike ndị a na-enye agent ohere ịkpọ (dịka Content Writer nwere ohere na ikike imepụta posts; Design Studio nwere ohere na ikike CSS na theme.json)
- **System prompt** — ntụziaka na-edobe olu, ihe ndị agent na-ebute ụzọ, na oke ya
- **Aro** — prompts edere tupu oge e gosiri na chat interface iji nyere gị aka ibido ngwa ngwa

## Inweta Agent Picker

1. Mepee panel **Gratis AI Agent** n’akụkụ admin WordPress.
2. Pịa **akara agent** n’elu-akaekpe nke isi chat (akara ahụ na-agbanwe iji gosipụta agent dị ugbu a).
3. **Agent Picker** ga-emepe dị ka form-table overlay. A depụtara agent ọ bụla na akara ya, aha ya, na nkọwa otu ahịrị.
4. Pịa ahịrị agent iji mee ka ọ rụọ ọrụ. Isi chat na-emelite ozugbo.

Ị nwekwara ike ịgbanwe agents n’etiti mkparịta ụka — system prompt nke agent ọhụrụ na-amalite ịrụ ọrụ site na ozi na-esote.

## Agents ise e wuru n’ime

### Content Writer

**Ihe a na-elekwasị anya:** Ịmepụta na idezi posts, ibe, na fọm kọntaktị.

**Ngwaọrụ dị:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Mgbe Superdav AI Agent v1.18.0 integrations gbanyere, ọnọdụ kalenda ahaziri, ọnụ ụzọ nkwado, ncheta, na ngwaọrụ ozi SMS nwekwara ike ịdị maka workflows akwadoro.

**Ihe ọ na-eme nke ọma:**
- Idepụta na ibipụta blog posts site na brief ma ọ bụ outline
- Ịmepụta batches nke landing pages maka saịtị ọhụrụ
- Iwulite fọm kọntaktị na ajụjụ
- Ịtọ featured images na posts site na URL ma ọ bụ ọchụchọ
- Idepụta ozi nsonye mgbe mmemme gasịrị site na ọnọdụ Google Calendar ahaziri, mgbe ahụ kwụsịtụ maka nkwado tupu izipu notifications

**Aro mmalite:**
- *Dee blog post okwu 500 banyere uru WordPress multisite.*
- *Mepụta ibe About, Services, na Contact ma bipụta ha.*
- *Tinye fọm ajụjụ booking na ibe Contact.*
- *Dee ncheta maka ndị bịara mmemme kalenda ahaziri nke echi ma chere nkwado tupu izipu ya.*

---

### Site Builder

**Ihe a na-elekwasị anya:** Ịmepụta webụsaịtị site na mmalite ruo n’ọgwụgwụ site n’otu prompt.

**Ngwaọrụ dị:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Na Superdav AI Agent v1.18.0, ngwaọrụ managed-service ahaziri, nkwado, ncheta, kalenda, na SMS nwere ike ịdị ebe administrators nyere ha ohere.

**Ihe ọ na-eme nke ọma:**
- Ịmepụta atụmatụ iwulite saịtị nke nwere ọtụtụ akụkụ maka ụdị azụmahịa akọwara
- Ịrụ akụkụ ọ bụla n’onwe ya — nhazi, ọdịnaya, navigation, imewe
- Iweghachi site na njehie n’etiti atụmatụ na-enweghị ịchọ ntinye aka mmadụ
- Ịwụnye plugins a tụrụ aro dịka akụkụ nke iwuli
- Ịmepụta fọm kọntaktị ozugbo site na chat interface (Superdav AI Agent v1.10.0+)
- Ịchịkwa ncheta mmalite ma ọ bụ nsonye ndị bịara na-enweghị notifications ugboro abụọ mgbe enyere ọnụ ụzọ nkwado na ndekọ ncheta

**Aro mmalite:**
- *Wulite saịtị portfolio foto nwere ụdị post gallery, ibe booking, na fọm kọntaktị.*
- *Mepụta webụsaịtị ụlọ oriri na ọṅụṅụ nwere menu online, awa mmeghe, na fọm ajụjụ table-booking.*
- *Hazie saịtị ndụmọdụ freelance nwere ibe ọrụ, ngalaba portfolio, na blog.*
- *Tinye fọm kọntaktị na ibe Contact site n’iji site builder.*
- *Mgbe a kwadoro checklist mmalite saịtị, ziga ncheta SMS na kọntaktị stakeholder ahaziri.*

---

### Design Studio

**Ihe a na-elekwasị anya:** Nhazi anya — agba, typography, CSS, na block patterns.

**Ngwaọrụ dị:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Ihe ọ na-eme nke ọma:**
- Itinye theme presets nwere aha (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Imezi global typography na palette agba site na theme.json
- Ịtinye CSS ahaziri maka overrides nke brand kpọmkwem
- Ịse screenshot nke ibe ma nyochaa ya maka nsogbu imewe

**Aro mmalite:**
- *Tinye preset warm-editorial ma mgbe ahụ tọọ agba primary ka ọ bụrụ #2d6a4f.*
- *Were screenshot nke homepage ma gwa m ihe ị ga-eme ka mma.*
- *Mepụta hero block pattern a pụrụ iji ọzọ nwere full-width background image na heading dị n’etiti.*

### Plugin Manager

**Ihe a na-elekwasị anya:** Ịchọpụta, ịwụnye, na ijikwa WordPress plugins.

**Ngwaọrụ dị:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Ihe ọ na-eme nke ọma:**
- Ịtụ aro plugin kacha mma maka use case akọwara
- Ịwụnye ability packs site na registry
- Ịchọgharị catalogue ikike dị site na category

**Aro mmalite:**
- *Kedu plugin kacha mma maka membership directory?*
- *Wụnye WooCommerce abilities pack.*
- *Gosi m ecommerce ability packs niile dị.*

---

### Support Assistant

**Ihe a na-elekwasị anya:** Ịza ajụjụ banyere ọdịnaya saịtị, settings, na nhazi WordPress.

**Ngwaọrụ dị:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Ihe ọ na-eme nke ọma:**
- Ịchọgharị ntọala na nhọrọ saịtị dị ugbu a
- Ịkọwa ụdị post, nhazi ọkwa, na ndepụta nhọrọ ahaziri na saịtị ahụ
- Ịza ajụjụ "gịnị ka ntọala a na-eme?" site n’ịgụ uru dị ndụ
- Ịrụ ọrụ dị ka oyi akwa nyocha nke bụ naanị ọgụgụ tupu emee mgbanwe

**Atụmatụ mmalite:**
- *Kedu mgbakwunye na ntọala ndị na-arụ ọrụ ugbu a na saịtị a?*
- *Depụta ụdị post ahaziri iche niile edebanyere na saịtị a.*
- *Kedu ndepụta nhọrọ njem dị, oleekwa ebe e kenyere ha?*

---

## Njikọ Akpaaka Superdav

Mgbe ahaziri njikọ Superdav AI Agent v1.18.0, agents arụnyere n’ime ya nwere ike isonye na usoro ọrụ akpaaka dị nchebe karị nke na-eburu usoro oge n’uche:

- **Ngwa ọgụgụ Google Calendar** na-enye agents ohere inyocha kalenda na ihe omume ahaziri tupu ha dee ọrụ nsochi.
- **Ịkekọrịta kọntaktị na ndị bịara ihe omume** na-enyere aka ijikọ ndị sonyere n’ihe omume na ndị ọrụ WordPress ma ọ bụ kọntaktị a maara.
- **Ọnụ ụzọ nkwado mmadụ** na-akwụsị omume ndị nwere mmetụta ruo mgbe onye ọrụ e nyere ikike nyochara ma kwado ha.
- **Ndekọ ncheta** na-egbochi ọkwa ugboro abụọ mgbe ọrụ ahaziri na-anwaleghachi ma ọ bụ na-emeghachi.
- **Ọkwa TextBee SMS** na-eziga ozi ederede ahaziri naanị mgbe agbanyere nzere SMS na ikike usoro ọrụ.

Usoro ọrụ a tụrụ aro: gwa agent ka ọ kwadebe ozi ma ọ bụ omume ahụ, nyochaa arịrịọ nkwado ahụ, mgbe ahụ kwe ka omume a kwadoro gaa n’ihu. Maka ncheta na-eme ugboro ugboro, hapụ mwepụ-ugboro abụọ ncheta ka ọ bụrụ nke agbanwụrụ ka a ghara izigara otu ihe omume ma ọ bụ kọntaktị ọkwa ugboro ugboro.

---

## Ịhazigharị Agents

Enwere ike ịgbatị ma ọ bụ dochie agent ọ bụla arụnyere n’ime ya site na `gratis_ai_agent_agents` filter.

### Ịgbakwunye system prompt ahaziri iche na agent dị adị

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Idebanye agent ọhụrụ

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

Agent ọhụrụ ahụ na-apụta na Agent Picker ozugbo filter ahụ rụsịrị ọrụ.

### Iwepụ agent arụnyere n’ime ya

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
