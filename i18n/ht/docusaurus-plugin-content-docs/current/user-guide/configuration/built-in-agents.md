---
title: Agans ki genyen nan sistèm la
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Agents ki Genyen an

Gratis AI Agent v1.9.0 bay chak pif agent built-in, chak pre-configure ak yon kesyon zouti ki konsantre sou yo, yon pwompt sistèm ki adapte pou yo, e sijesyon kòmanse ki koresponn ak travay komen nan domèn sa a. Chanje ant agent yo chanje sa asistan an ka fè epi kijan li reponn — san okenn konfigirasyon ki bezwen de chak moun.

## Ki Sa Yon Agent Ye?

Chak agent se yon profil konfigirasyon ki gen non k ap combine:

- **Tools** — kapasite yo pèmèt agent la itilize (pa egzanp, yon Content Writer gen aksè pou kapasite kreye pòs; yon Design Studio gen aksè pou CSS ak theme.json).
- **System prompt** — enstriksyon ki mete ton an agent la, priyorite l, e limitasyon yo.
- **Suggestions** — pwompt ki deja ekri montre nan entèfas chat la pou ede w kòmanse rapidman.

## Kijan Pou W Jwenn Agent Picker La

1. Louvri panel **Gratis AI Agent** nan sidebar admin WordPress la.
2. Klike sou **agent icon** an nan menm anlè chèd chat la (ikon an ap chanje pou montre agent ki aktif la).
3. **Agent Picker** ouvri kòm yon overlay fòm-tablo. Chak agent la lis ak ikon li, non li, e yon deskripsyon youn liy.
4. Klike sou yon liy agent pou aktive l. Menm anlè chèd la ap rafraîchi imedyatman.

Ou ka tou chanje agent pandan konvèsasyon an — system prompt nouvo agent la kòmanse mache nan mesaj ki vini apre a.

## Chak Pif Agent Built-in Yo

### Content Writer

**Konsantre:** Kreye ak edite pòs, paj, ak fòm kontak.

**Zouti ki disponib:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Sa sa a ki fè byen:**
- Ekri ak pibliye post blog nan yon briz o kontan ak yon plan anvan an (brief or outline)
- Kreye batach paj atlant (landing pages) pou yon nou site
- Bati fòm kontak ak kesyon yo (enquiry forms)
- Mete imaj piblisite (featured images) sou post ki soti nan yon URL o chèche

**Sijesyon kòmanse:**
- *Ekri yon post blog 500 mo sou benefis WordPress multisite.*
- *Kreye paj "About", "Services" ak "Contact" epi pibliye yo.*
- *Ajoute yon fòm kesyon rezervasyon (booking enquiry form) sou paj Contact la.*

---

### Site Builder

**Konsantre:** Kreye tout yon sit entènèt soti nan yon sèl enfòmasyon.

**Oli ki disponib:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Sa li fè byen:**
- Kreye yon plan bati sit ki gen plizyè etap pou kalite biznis ou dekri.
- Ekzekite chak etap la pou kont li — estrikti, kontni, navigasyon, konsepsyon (design).
- Rekonstri nan erè pandan plan an san bezwen okenn intervans manual.
- Enstale plugin ki rekòmande kòm pati nan bati a.
- Kreye fòm kontak dirèkteman nan entèfas chat la (Superdav AI Agent v1.10.0+).

**Sijesyon kòmanse:**
- *Bati yon sit pou fotografi ak yon kalite post gallery, yon paj rezervasyon, epi yon fòm kontak.*
- *Kreye yon sit pou manje ki gen mennu anlè (online menu), lè ouvèti, e yon fòm kesyon pou rezèv tab.*
- *Fè yon sit konsiltan freelance ak paj sèvis, yon seksyon portfolio, epi yon blog.*
- *Ajoute yon fòm kontak sou paj Contact la itilize Site Builder la.*

---

### Design Studio

**Konsantre:** Personalize vizyèl — koulè, tipografi (typography), CSS, ak patat blòk (block patterns).

**Outil ki disponib:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Sa li fè byen:**
- Aplike preset thèm ki gen non (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Finiye tipografi global ak palèt koulè yo atravè theme.json
- Mete CSS koutim pou deside espesifik mark la
- Pran yon screenshot nan yon paj epi revize li pou pwoblèm konsepsyon

**Sijesyon pou kòmanse:**
- *Aplike preset warm-editorial la epi apre sa mete koulè prensipal la a #2d6a4f.*
- *Pran yon screenshot sou paj la ak di m ki jan ou ta amelyore l.*
- *Kreye yon pattern blòk hero ki reyalize pou tout laj nan yon imaj founye epi yon tit santre.*

---

### Plugin Manager

**Konsantre:** Chèche, enstale, epi jere WordPress plugins.

**Outil ki disponib:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Sa li fè byen:**
- Rekòmande pi bon plugin pou yon sitiyasyon ou dekri
- Enstale ability packs soti nan registry la
- Pase epi gade katalòg ability ki disponib pa kategori

**Sijesyon pou kòmanse:**
- *Ki pi bon plugin pou yon direktwa manm (membership directory)?*
- *Enstale ability pack WooCommerce la.*
- *Montre m tout ability packs ekomè ki disponib yo.*

---

### Support Assistant

**Konsantre:** Reponn kesyon sou kontni sit, konfigirasyon, ak WordPress.

**Outil ki disponib:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Sa sa a ki fè byen:**
- Gade konfigirasyon ak opsyon kouran sit la.
- Eksplike sa ki post types, taxonomies, ak menus yo configure sou sit la.
- Repond kesyon "sa konfigirasyon sa ap fè?" lè w li valè reyèl yo.
- Serv kòm yon kouvèti diagnoz pa li anvan ou fè chanjman.

**Sijesyon pou kòmanse:**
- *Ki plugin ak konfigirasyon ki aktif sou sit la kounye a?*
- *Lis tout custom post types ki reyegrè sou sit la.*
- *Ki navigation menus ki egziste epi kote yo mete yo?*

---

## Kòmanse Agent yo (Customising Agents)

Chak agent ki vini ak WordPress ka elaji oswa ranplase li atravè filtre `gratis_ai_agent_agents`.

### Ajoute yon custom system prompt pou yon agent egziste deja

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nToujou ekri an Angla Britanik epi itilize Oxford comma.";
    }
    return $agents;
} );
```

### Reyegrè yon nou agent

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Optimize posts ak paj yo pou motè chèche.',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'Ou se yon SEO specialist. Konsantre sou optimize mot ka, meta descriptions, ak structured data.',
        'suggestions'   => [
            'Revize tit paj la epi meta description li pou twa post ki pi nou yo.',
            'Sijere amelyorasyon tag tit pou twa dènye post yo.',
        ],
    ];
    return $agents;
} );
```

L'nouvo agent la parèt imedyatman apre filtre a fini.

### Retire yon agent ki vini ak sistèm nan

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
