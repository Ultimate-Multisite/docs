---
title: Vestavění agenti
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Vestavění agenti

Gratis AI Agent v1.9.0 přináší pět vestavěných agentů, z nichž každý je předkonfigurovaný se zaměřenou sadou nástrojů, přizpůsobeným systémovým promptem a úvodními návrhy odpovídajícími běžným úkolům v dané oblasti. Přepínání mezi agenty mění, co asistent dokáže dělat a jak odpovídá — bez jakékoli konfigurace z vaší strany. Superdav AI Agent v1.18.0 může do těchto pracovních postupů přidat nástroje zohledňující harmonogram, záznamy připomínek, schvalovací brány a SMS upozornění, když jsou související integrace nakonfigurovány.

## Co je agent? {#what-is-an-agent}

Každý agent je pojmenovaný konfigurační profil, který kombinuje:

- **Nástroje** — schopnosti, které smí agent vyvolávat (např. Content Writer má přístup ke schopnostem pro tvorbu příspěvků; Design Studio má přístup ke schopnostem pro CSS a theme.json)
- **Systémový prompt** — instrukce, které nastavují tón, priority a omezení agenta
- **Návrhy** — předem napsané prompty zobrazené v chatovacím rozhraní, které vám pomohou rychle začít

## Přístup k výběru agenta {#accessing-the-agent-picker}

1. Otevřete panel **Gratis AI Agent** v administrátorském postranním panelu WordPress.
2. Klikněte na **ikonu agenta** vlevo nahoře v záhlaví chatu (ikona se mění podle aktivního agenta).
3. **Výběr agenta** se otevře jako překryvná vrstva s tabulkou formuláře. Každý agent je uveden se svou ikonou, názvem a jednořádkovým popisem.
4. Kliknutím na řádek agenta ho aktivujete. Záhlaví chatu se okamžitě aktualizuje.

Agenty můžete přepínat také uprostřed konverzace — systémový prompt nového agenta se uplatní od další zprávy.

## Pět vestavěných agentů {#the-five-built-in-agents}

### Content Writer {#content-writer}

**Zaměření:** Tvorba a úpravy příspěvků, stránek a kontaktních formulářů.

**Dostupné nástroje:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Se zapnutými integracemi Superdav AI Agent v1.18.0 mohou být pro schválené pracovní postupy k dispozici také nakonfigurovaný kontext kalendáře, schvalovací brány, připomínky a nástroje pro SMS upozornění.

**V čem vyniká:**
- Psaní konceptů a publikování blogových příspěvků podle briefu nebo osnovy
- Vytváření dávek vstupních stránek pro nový web
- Vytváření kontaktních a poptávkových formulářů
- Nastavení náhledových obrázků u příspěvků z URL nebo vyhledávání
- Příprava následných zpráv po události z nakonfigurovaného kontextu Google Calendar, poté pozastavení kvůli schválení před odesláním upozornění

**Úvodní návrhy:**
- *Napiš blogový příspěvek o 500 slovech o výhodách WordPress multisite.*
- *Vytvoř stránku O nás, Služby a Kontakt a publikuj je.*
- *Přidej na stránku Kontakt formulář pro poptávku rezervace.*
- *Připrav připomínku pro účastníky zítřejší nakonfigurované události v kalendáři a před odesláním počkej na schválení.*

---

### Site Builder {#site-builder}

**Zaměření:** Kompletní tvorba webu z jediného promptu.

**Dostupné nástroje:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Se Superdav AI Agent v1.18.0 mohou být k dispozici nakonfigurované nástroje pro spravovanou službu, schvalování, připomínky, kalendář a SMS tam, kde je správci povolí.

**V čem vyniká:**
- Generování vícefázového plánu tvorby webu pro popsaný typ firmy
- Autonomní provádění každé fáze — struktura, obsah, navigace, design
- Zotavení z chyb uprostřed plánu bez nutnosti ručního zásahu
- Instalace doporučených pluginů jako součást tvorby
- Vytváření kontaktních formulářů přímo z chatovacího rozhraní (Superdav AI Agent v1.10.0+)
- Koordinace připomínek spuštění nebo následné komunikace s účastníky bez duplicitních upozornění, když jsou zapnuté schvalovací brány a záznamy připomínek

**Úvodní návrhy:**
- *Vytvoř web fotografického portfolia s typem příspěvku galerie, rezervační stránkou a kontaktním formulářem.*
- *Vytvoř web restaurace s online menu, otevírací dobou a poptávkovým formulářem pro rezervaci stolu.*
- *Nastav web pro freelance poradenství se stránkami služeb, sekcí portfolia a blogem.*
- *Přidej kontaktní formulář na stránku Kontakt pomocí nástroje Site Builder.*
- *Po schválení kontrolního seznamu pro spuštění webu odešli SMS připomínku nakonfigurovanému kontaktu zainteresované osoby.*

---

### Design Studio {#design-studio}

**Zaměření:** Vizuální přizpůsobení — barvy, typografie, CSS a vzory bloků.

**Dostupné nástroje:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**V čem vyniká:**
- Použití pojmenovaných přednastavení theme (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Jemné doladění globální typografie a barevných palet přes theme.json
- Vkládání vlastního CSS pro úpravy specifické pro značku
- Pořízení snímku obrazovky stránky a její posouzení z hlediska designových problémů

**Úvodní návrhy:**
- *Použij přednastavení warm-editorial a potom nastav primární barvu na #2d6a4f.*
- *Pořiď snímek obrazovky domovské stránky a řekni mi, co bys zlepšil.*
- *Vytvoř znovupoužitelný hero vzor bloku s obrázkem na pozadí přes celou šířku a zarovnaným nadpisem na střed.*

### Plugin Manager {#plugin-manager}

**Zaměření:** Objevování, instalace a správa WordPress pluginů.

**Dostupné nástroje:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**V čem vyniká:**
- Doporučení nejlepšího pluginu pro popsaný případ použití
- Instalace balíčků schopností z registru
- Procházení dostupného katalogu schopností podle kategorie

**Úvodní návrhy:**
- *Jaký je nejlepší plugin pro členský adresář?*
- *Nainstaluj balíček schopností WooCommerce.*
- *Ukaž mi všechny dostupné balíčky schopností pro ecommerce.*

---

### Support Assistant {#support-assistant}

**Zaměření:** Odpovídání na otázky o obsahu webu, nastavení a konfiguraci WordPress.

**Dostupné nástroje:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Co zvládá dobře:**
- Vyhledávání aktuálních nastavení a možností webu
- Vysvětlování, jaké typy příspěvků, taxonomie a menu jsou na webu nakonfigurovány
- Odpovídání na otázky typu „co toto nastavení dělá?“ čtením živých hodnot
- Slouží jako diagnostická vrstva pouze pro čtení před prováděním změn

**Úvodní návrhy:**
- *Jaké pluginy a nastavení jsou aktuálně aktivní na tomto webu?*
- *Vypiš všechny vlastní typy příspěvků registrované na tomto webu.*
- *Jaká navigační menu existují a kde jsou přiřazena?*

---

## Integrace automatizace Superdav {#superdav-automation-integrations}

Když jsou nakonfigurovány integrace Superdav AI Agent v1.18.0, vestavění agenti se mohou podílet na bezpečnějších automatizačních pracovních postupech s ohledem na plánování:

- **Nástroje pro čtení Google Calendar** umožňují agentům kontrolovat nakonfigurované kalendáře a události před přípravou navazující práce.
- **Mapování kontaktů a účastníků** pomáhá přiřadit účastníky událostí k uživatelům WordPress nebo známým kontaktům.
- **Schvalovací brány člověkem** pozastaví citlivé akce, dokud je oprávněný uživatel nezkontroluje a nepotvrdí.
- **Záznamy připomenutí** zabraňují duplicitním oznámením, když se naplánované úlohy opakují nebo zkoušejí znovu.
- **TextBee SMS oznámení** odesílají nakonfigurované textové zprávy pouze tehdy, když jsou povoleny přihlašovací údaje pro SMS a oprávnění pracovního postupu.

Doporučený pracovní postup: požádejte agenta, aby připravil zprávu nebo akci, zkontrolujte výzvu ke schválení a poté povolte obnovení schválené akce. U opakujících se připomenutí ponechte zapnuté odstraňování duplicit připomenutí, aby stejná událost nebo kontakt nebyly upozorňovány opakovaně.

---

## Přizpůsobení agentů {#customising-agents}

Každého vestavěného agenta lze rozšířit nebo nahradit prostřednictvím filtru `gratis_ai_agent_agents`.

### Přidání vlastního systémového promptu k existujícímu agentovi {#adding-a-custom-system-prompt-to-an-existing-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Registrace nového agenta {#registering-a-new-agent}

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

Nový agent se zobrazí ve výběru agentů okamžitě po spuštění filtru.

### Odebrání vestavěného agenta {#removing-a-built-in-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
