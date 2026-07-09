---
title: Ajan ki entegre
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Agents entegre yo

Gratis AI Agent v1.9.0 vini ak senk agents entegre, chak youn pre-konfigire ak yon seri zouti ki konsantre, yon system prompt ki adapte, ak sijesyon pou kòmanse ki koresponn ak travay komen nan zòn sa a. Lè w chanje ant agents yo, sa chanje sa asistan an ka fè ak fason li reponn — san okenn konfigirasyon bò kote pa w. Superdav AI Agent v1.18.0 ka ajoute zouti ki pran orè an konsiderasyon, dosye rapèl, pòtay apwobasyon, ak notifikasyon SMS nan workflow sa yo lè entegrasyon ki gen rapò yo konfigire.

## Kisa yon Agent ye?

Chak agent se yon pwofil konfigirasyon ki gen non ki konbine:

- **Zouti** — kapasite agent la gen dwa envoke (pa egzanp, yon Content Writer gen aksè ak kapasite pou kreye pòs; yon Design Studio gen aksè ak kapasite CSS ak theme.json)
- **System prompt** — enstriksyon ki fikse ton, priyorite, ak kontrent agent la
- **Sijesyon** — prompts ki deja ekri yo montre nan koòdone chat la pou ede w kòmanse rapidman

## Aksede Agent Picker la

1. Louvri panèl **Gratis AI Agent** la nan sidebar admin WordPress la.
2. Klike sou **agent icon** nan anlè agoch header chat la (ikon nan chanje pou reflete agent ki aktif la).
3. **Agent Picker** la ouvri kòm yon overlay form-table. Chak agent nan lis la ak ikon li, non li, ak yon deskripsyon yon liy.
4. Klike sou yon ranje agent pou aktive li. Header chat la mete ajou imedyatman.

Ou ka chanje agents tou nan mitan yon konvèsasyon — system prompt nouvo agent la pran efè apati pwochen mesaj la.

## Senk Agents entegre yo

### Content Writer

**Konsantre:** Kreye ak modifye pòs, paj, ak fòm kontak.

**Zouti ki disponib:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Avèk entegrasyon Superdav AI Agent v1.18.0 yo aktive, kontèks kalandriye ki konfigire, pòtay apwobasyon, rapèl, ak zouti notifikasyon SMS ka disponib tou pou workflows ki apwouve yo.

**Sa li fè byen:**
- Ekri bouyon ak pibliye pòs blog apati yon brief oswa outline
- Kreye pakèt landing pages pou yon nouvo site
- Bati fòm kontak ak demann enfòmasyon
- Mete imaj vedèt sou pòs apati yon URL oswa rechèch
- Ekri bouyon mesaj swivi evènman apati kontèks Google Calendar ki konfigire, epi fè yon poz pou apwobasyon anvan voye notifikasyon

**Sijesyon pou kòmanse:**
- *Ekri yon pòs blog 500 mo sou avantaj WordPress multisite.*
- *Kreye yon paj About, Services, ak Contact epi pibliye yo.*
- *Ajoute yon fòm demann rezèvasyon sou paj Contact la.*
- *Ekri yon bouyon rapèl pou patisipan yo sou evènman kalandriye konfigire demen an epi tann apwobasyon anvan w voye li.*

---

### Site Builder

**Konsantre:** Kreyasyon sit entènèt depi kòmansman rive nan fen apati yon sèl prompt.

**Zouti ki disponib:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Avèk Superdav AI Agent v1.18.0, zouti managed-service, apwobasyon, rapèl, kalandriye, ak SMS ki konfigire ka disponib kote administratè yo aktive yo.

**Sa li fè byen:**
- Jenere yon plan konstriksyon site an plizyè faz pou yon kalite biznis ki dekri
- Egzekite chak faz otonòmman — estrikti, kontni, navigasyon, konsepsyon
- Rekipere apre erè nan mitan plan an san mande entèvansyon manyèl
- Enstale plugins rekòmande kòm pati nan konstriksyon an
- Kreye fòm kontak dirèkteman nan koòdone chat la (Superdav AI Agent v1.10.0+)
- Kowòdone rapèl lansman oswa swivi patisipan san notifikasyon doub lè pòtay apwobasyon ak dosye rapèl yo aktive

**Sijesyon pou kòmanse:**
- *Bati yon site pòtfolyo fotografi ak yon kalite pòs galri, yon paj rezèvasyon, ak yon fòm kontak.*
- *Kreye yon sit entènèt restoran ak yon meni sou entènèt, lè ouvèti, ak yon fòm demann rezèvasyon tab.*
- *Mete sou pye yon site konsiltasyon endepandan ak paj sèvis, yon seksyon pòtfolyo, ak yon blog.*
- *Ajoute yon fòm kontak sou paj Contact la avèk site builder la.*
- *Apre lis verifikasyon lansman site la apwouve, voye yon rapèl SMS bay kontak moun ki gen enterè ki konfigire a.*

---

### Design Studio

**Konsantre:** Pèsonalizasyon vizyèl — koulè, tipografi, CSS, ak modèl blòk.

**Zouti ki disponib:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Sa li fè byen:**
- Aplike presets theme ki gen non (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Ajiste tipografi global ak palèt koulè atravè theme.json
- Enjekte CSS pèsonalize pou overrides espesifik pou mak
- Pran yon screenshot yon paj epi revize li pou pwoblèm konsepsyon

**Sijesyon pou kòmanse:**
- *Aplike preset warm-editorial la epi apre sa mete koulè prensipal la sou #2d6a4f.*
- *Pran yon screenshot paj dakèy la epi di m kisa ou ta amelyore.*
- *Kreye yon modèl blòk hero ki ka reyitilize ak yon imaj background tout lajè ak yon tit santre.*

### Plugin Manager

**Konsantre:** Dekouvri, enstale, ak jere WordPress plugins.

**Zouti ki disponib:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Sa li fè byen:**
- Rekòmande pi bon plugin lan pou yon ka itilizasyon ki dekri
- Enstale pake kapasite apati registry a
- Navige katalòg kapasite ki disponib la pa kategori

**Sijesyon pou kòmanse:**
- *Ki pi bon plugin pou yon anyè membership?*
- *Enstale pake kapasite WooCommerce la.*
- *Montre m tout pake kapasite ecommerce ki disponib yo.*

---

### Support Assistant

**Konsantre:** Reponn kesyon sou kontni site, paramèt, ak konfigirasyon WordPress.

**Zouti ki disponib:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Sa li fè byen:**
- Chèche paramèt ak opsyon aktyèl sit la
- Eksplike ki kalite piblikasyon, taksonomi, ak meni ki konfigire sou sit la
- Reponn kesyon "kisa paramèt sa a fè?" lè li li valè an dirèk yo
- Sèvi kòm yon kouch dyagnostik sèlman pou lekti anvan ou fè chanjman

**Sijesyon pou kòmanse:**
- *Ki plugin ak paramèt ki aktif kounye a sou sit sa a?*
- *Lis tout kalite piblikasyon pèsonalize ki anrejistre sou sit sa a.*
- *Ki meni navigasyon ki egziste epi ki kote yo asiyen yo?*

---

## Entegrasyon Otomasyon Superdav

Lè entegrasyon Superdav AI Agent v1.18.0 yo konfigire, ajan entegre yo ka patisipe nan workflow otomasyon ki pi an sekirite epi ki pran orè an kont:

- **Zouti lekti Google Calendar** pèmèt ajan yo enspekte kalandriye ak evènman ki konfigire yo anvan yo prepare travay swivi.
- **Kat kontak ak patisipan** ede matche patisipan evènman yo ak itilizatè WordPress oswa kontak yo konnen.
- **Pòtay apwobasyon moun** mete aksyon sansib yo an poz jiskaske yon itilizatè otorize revize yo epi konfime yo.
- **Dosye rapèl** anpeche notifikasyon doub lè travay pwograme yo eseye ankò oswa repete.
- **Notifikasyon SMS TextBee** voye mesaj tèks ki konfigire yo sèlman lè idantifyan SMS ak pèmisyon workflow yo aktive.

Workflow rekòmande: mande ajan an prepare mesaj la oswa aksyon an, revize demann apwobasyon an, epi apre sa pèmèt aksyon ki apwouve a rekòmanse. Pou rapèl ki repete, kenbe dediplikasyon rapèl aktive pou menm evènman an oswa menm kontak la pa resevwa notifikasyon plizyè fwa.

---

## Pèsonalize Ajan yo

Chak ajan entegre ka pwolonje oswa ranplase atravè filtè `gratis_ai_agent_agents` la.

### Ajoute yon prompt sistèm pèsonalize nan yon ajan ki deja egziste

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Anrejistre yon nouvo ajan

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

Nouvo ajan an parèt nan Selektè Ajan an imedyatman apre filtè a kouri.

### Retire yon ajan entegre

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
