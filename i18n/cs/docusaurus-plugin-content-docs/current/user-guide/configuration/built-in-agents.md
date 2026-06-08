---
title: Vstěnně integrování agentů
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Vestavěni Agenti

Gratis AI Agent v1.9.0 obsahuje pět vestavěných agentů. Každý je předkonfigurován s cílenou sadou nástrojů, přizpůsobeným systémovým promptem a výchozími návrhy, které odpovídají běžným úlohám v dané oblasti. Přepínání mezi agenty mění to, co asistent umí dělat a jak reaguje — a to bez jakéhokoli vašeho nastavení.

## Co je agent?

Každý agent je pojmenovaný profil konfigurace, který kombinuje:

- **Nástroje (Tools)** — schopnosti, které je agent má právo zavolat (např. Content Writer má přístup k funkcím pro vytváření příspěvků; Design Studio má přístup k funkcím CSS a theme.json)
- **Systémový prompt (System prompt)** — pokyny, které určují tón, priority a omezení agenta
- **Návrhy (Suggestions)** — předpřipravené výzvy zobrazené v chatovém rozhraní, které vám pomohou rychle začít

## Přístup k výběru agentů

1. Otevřete panel **Gratis AI Agent** v bočním panelu administrace WordPressu.
2. Klikněte na **ikonu agenta** v levém horním rohu hlavičky chatu (ikona se změní, aby odrážela aktivního agenta).
3. Otevře se **Agent Picker** jako překryvná tabulka ve formátu. Každý agent je uveden se svou ikonou, názvem a jedním řádkovým popisem.
4. Klikněte na řádek agenta, abyste ho aktivovali. Hlavička chatu se okamžitě aktualizuje.

Můžete agenty přepínat i během konverzace — systémový prompt nového agenta platí od následující zprávy.

## Pět vestavěných agentů

### Content Writer (Autor obsahu)

**Zaměření:** Vytváření a úprava příspěvků, stránek a kontaktních formulářů.

**Dostupné nástroje:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Co umí dobře:**
- Vytváření a publikování blogových příspěvků na základě zhrnutia nebo osnovy
- Vytváření sadových landing page pro nový web
- Budování kontaktních a dotazovacích formulářů
- Nastavování vedoucích obrázků na příspěvky z URL nebo vyhledávání

**Výchozí návrhy:**
- *Napište 500slový blogový příspěvek o výhodách WordPress multisite.*
- *Vytvořte stránku O nás, Služby a Kontakt a publikujte je.*
- *Přidejte dotazovací formulář pro rezervaci na stránku Kontakt.*

---

### Site Builder (Konstruktor webů)

**Zaměření:** Vytváření webu od začátku do konce z jediné výzvy.

**Dostupné nástroje:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Co umí dobře:**
- Generování vícefázového plánu výstavby webu pro popsaný typ podnikání
- Samostatné provedení každé fáze — struktura, obsah, navigace, design
- Zotavení z chyb během plánu bez nutnosti manuální intervence
- Instalace doporučených pluginů jako součást výstavby
- Vytváření kontaktních formulářů přímo z chatového rozhraní (Superdav AI Agent v1.10.0+)

**Výchozí návrhy:**
- *Vytvořte portfolio fotografa s typem příspěvků galerie, stránkou pro rezervace a kontaktním formulářem.*
- *Vytvořte web restaurace s online menu, dobíracími hodinami a dotazovacím formulářem pro rezervaci stolu.*
- *Nastavte web pro nezávislého konzultanta se službami, sekcí portfolia a blogem.*
- *Přidejte kontaktní formulář na stránku Kontakt pomocí konstruktora webů.*

---

### Design Studio (Designové studio)

**Zaměření:** Vizuální přizpůsobení — barvy, typografie, CSS a blokové vzory.

**Dostupné nástroje:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Co umí dobře:**
- Aplikace pojmenovaných přednastavených témat (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Jemné doladění globální typografie a barevných palet pomocí theme.json
- Vkládání vlastního CSS pro přepsání specifických pro značku prvků
- Zhotovení snímku obrazovky stránky a zhodnocení jej z hlediska designu

**Výchozí návrhy:**
- *Použijte přednastavené téma warm-editorial a poté nastavte primární barvu na #2d6a4f.*
- *Zhotvěte snímek obrazovky domovské stránky a řekněte mi, co byste vylepšili.*
- *Vytvořte recyklovatelný blok vzor s plnohodostředným pozadím obrázkem a centrovým nadpisem.*

---

### Plugin Manager (Správce pluginů)

**Zaměření:** Objevování, instalace a spravování pluginů WordPressu.

**Dostupné nástroje:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Co umí dobře:**
- Doporučování nejlepšího pluginu pro popsaný případ použití
- Instalace sad schopností z registru
- Procházení dostupného katalogu schopností podle kategorie

**Výchozí návrhy:**
- *Jaký je nejlepší plugin pro herní katalog členů?*
- *Nainstalujte sadu schopností WooCommerce.*
- *Ukážte mi všechny dostupné sady schopností pro e-commerce.*

---

### Support Assistant (Asistent podpory)

**Zaměření:** Odpovídání na otázky týkající se obsahu webu, nastavení a konfigurace WordPressu.

**Dostupné nástroje:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Co umí dobře:**
- Vyhledávání aktuálních nastavení a možností webu
- Vysvětlování, jaké typy příspěvků, takonomie a menu jsou na webu nakonfigurovány
- Odpovídání na otázky typu „co dělá toto nastavení?“ tím, že čte živé hodnoty
- Sloužení jako čtecí diagnostická vrstva před provedením změn

**Výchozí návrhy:**
- *Jaké pluginy a nastavení jsou na tomto webu aktivní?*
- *Seznamte všechny vlastní typy příspěvků registrované na tomto webu.*
- *Jaká menu navigace existuje a kam jsou přiřazeny?*

---

## Přizpůsobení agentů

Každý vestavěný agent lze rozšířit nebo nahradit pomocí filtru `gratis_ai_agent_agents`.

### Přidání vlastního systémového promptu k existujícímu agentovi

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Registrace nového agenta

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

Nový agent se objeví v Agent Pickeru ihned po spuštění filtru.

### Odstranění vestavěného agenta

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
