---
title: Agentes integrados
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Integrataj Agenta Inbuilt

Gratis AI Agent v1.9.0 alport finve agent'ojn inbuilt, ĉiu prekonfigurita kun fokusa seti de instrumentoj, prilaborita sistemo prompt kaj komencaj sugestoj, kiuj korespondon kun malsamaj taskoj en tiu domeno. Inter ŝanĝi inter agentojn ŝanĝas ti, kion la asistanto povas fari kaj kiel ĝi respondistas — sen iu konfigurado de viaj partio.

## Kion Estas Agent?

Chakla agente estas nomita konfigurita perfilo, kiu kombinas:

- **Instrumentoj** — la kapabilitetoj, kiuj al la agente estas permitita vokti (ekzemple, Content Writer havas aliro al kapabilitetoj de poste-kreedo; Design Studio havas aliron al CSS kaj theme.json kapabilitetoj)
- **Sistemo prompto** — instruoj, kiuj definas la tonon, prioritetojn kaj restriktion de la agente
- **Sugestioj** — pre-skribitaj promptoj, kiuj estas shown en la chatointerfaco por helpi vin rapide komenci

## Aliro al la Agent Picker

1. Ĉiŝi la panelon **Gratis AI Agent** en la WordPress admin baro.
2. Kliki sur la **agent icon** en la malalta de la chatohelbo (la ikono ŝanĝiĝas por reflekti la aktivan agenton).
3. La **Agent Picker** ŝanĝiĝas kiel form-tablo superfa. Chak agente estas listita kun sia ikono, nombro kaj unu-linia deskripcio.
4. Kliki sur linion de agenton por aktivi ĝin. La chatohelbo aktualizas tutej.

Vi ankaŭ povas ŝanĝi agentojn inter konversacio — la sistemo prompto de la nova agente efektivasĝas de la suivante mesaĝo.

## La Finveaj Inbuilt Agentoj

### Content Writer

**Fokuso:** Kreado kaj redigado de postaj, pajaj kaj kontaktojformoj.

**Aliborditaj instrumentoj:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Kion per Ĝi bone fari:**
- Redakti kaj publikigi blogajn postojn el breca aŭ skizoj
- Krei batio de landing page'oj por nova sitio
- Konstrui formulojn por kontakto kaj informaj serĉoj
- Aŭski tempon (featured images) sur postoj el URL-o aŭ serĉoj

**Kion oni povas fari kiel komencajn sugestojn:**
- *Skriv 500-parlaj blogajn postojn pri la benefitoj de WordPress multisite.*
- *Krei pagojn "Aŭtonomi", "Servoj" kaj "Kontakto" kaj publikigu ilin.*
- *Adu rezerviĝen informan formulon al la Pagoj Kontakto.*

---

### Site Builder (Konstruanto de Sitio)

**Fokus:** Kompleta kreo de sitio el unu prompto.

**Disponablaj instrumentoj:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Kion oni povas fari bone:**
- Generi planon de konstruo de sitio pluraj fazoj por describerita tipon bizneso
- Egzotibone ekzekui ĉion fazon — strukturo, enhavo, navigado, dezajno
- Rekovriĝi el erar inter la planon sen necesa manua intervento
- Instali rekomendas pluginojn kiel parto de konstruado
- Krei kontaktoformojn direkten el la chatointerfaço (Superdav AI Agent v1.10.0+)

**Kion oni povas fari kiel komencajn sugestojn:**
- *Krei sito-portfolion kun tip postoj "galerio", pagoj rezervado kaj formulo por kontakto.*
- *Krei restoracion site kun online menuko, ŝanĝaj horoj kaj informaj serĉoj por tablos rezervado.*
- *Konstrui freelance konsultanton sito kun pagoj servoj, portfolion sekcion kaj bloga postoj.*
- *Adu kontaktoformon al la Pagoj Kontakto uzante la Site Builder.*

---

### Design Studio (Studio de Dezajno)

**Fokus:** Vizaŭla personaligo — koloroj, tipografiaj elementoj, CSS kaj bloko ŝablonoj.

**Disponiblaj instrumentoj:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Kion ŝanĝi bone:**
- Apliki nombatajn temaj presetojn (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Finajni la globalan tipografion kaj koloraj paletojn per theme.json
- Injekti personalan CSS por brand-specifajn sovritaj ŝanĝojn
- Foti skrinomikon de paĝo kaj renuntuji ĝin por dezajno problemoj

**Kalkaj sugestoj:**
- *Apliki la warm-editorial preseton kaj tiam seto la primaran koloran kodon al #2d6a4f.*
- *Foti skrinomikon de la homepage kaj diri al mi, kion vi plibonigis.*
- *Krei reutilizablean hero block pattern con fondo imago plenumita la largmeton kaj centratan titoliron.*

---

### Plugin Manager (Menedhoro de Pluginoj)

**Fokus:** Trovi, instali kaj administra WordPress pluginojn.

**Disponiblaj instrumentoj:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Kion ŝanĝi bone:**
- Rekomendas la plej bonan pluginon por deskribita uzado-caso
- Instali ability packs el la registrio
- Navegi per la disponabla katalogo de abilityj per kategorioj

**Kalkaj sugestoj:**
- *Kion estas la plej bona plugino por membraĵdiron?*
- *Instali la WooCommerce abilities pack.*
- *Montri al mi ĉiuj disponibles ekomerco ability packs.*

---

### Support Assistant (Asisto de Subteno)

**Fokus:** Responduji demandojn pri la enon de la paĝo, la ŝanĝoj kaj la konfigurita WordPress.

**Disponiblaj instrumentoj:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Kionaj rezultoj:**
- Kontroli aktualia konfiguracionn site kaj opciojn.
- Eksplani, kio estas konfiguriita kiel post tipoj, taksonomii kaj menuoj sur la site.
- Respondas al demandoj "kio faras ĉi tiu opcio?" per legi vivajn valorojn.
- Servas kiel legeta diagnostika capa antaŭ ol fari ŝanĝojn.

**Iniciaj sugestoj:**
- *Kaj pluginoj kaj opcioj estas aktiva sur ĉi tiu site?*
- *Listu ĉiuj la personalaj post tipoj, registritaj sur ĉi tiu site.*
- *Kaj navigaj menuoj ekzistas kaj kie ili estas atribuitaj?*

---

## Personaligo de Agentoj

Ĉiomaj integritaj agentoj povas esti elstariĝita aŭ substituita per la filtru `gratis_ai_agent_agents`.

### Доdaado de personala sistemprompt al ekzistanta agentejo

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nĈiam skrib en brita angla kaj uzu la Oxford-komon.";
    }
    return $agents;
} );
```

### Registri novan agentejon

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Optimumigas postaj kaj paĝojn por la bezonoj de serĉmotoroj.',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'Vi estas SEO-specialisto. Fokusante sur vortaro optimado, meta deskriboj kaj struktura data.',
        'suggestions'   => [
            'Revizi la titolon de la ĉezo kaj la meta deskribon.',
            'Sugeruji plibrojn titolojn por la kvin plej novaj postoj.',
        ],
    ];
    return $agents;
} );
```

La nova aganto aperas hemen apre po filtrado fini.

### Eliminado un agente integrato

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
