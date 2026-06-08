---
title: Agents integratsos
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Agents Integrats

Gratis AI Agent v1.9.0 inclou cinc agents integrats, cada un preconfigurat amb un conjunt d'utilitats enfocades, un *system prompt* personalitzat i suggeriments de inici adaptats a les tasques més comunes d'aquest àmbit. Canviar entre agents canvia el que pot fer l'assistència i com respon, sense que tu hagis de configurar res.

## Què és un Agent?

Cada agent és un perfil de configuració amb nom que combina:

- **Utilitats (Tools)** — les capacitats que l'agent pot utilitzar (per exemple, un Content Writer té accés a utilitats de creació de contingut; un Design Studio té accés a utilitats de CSS i theme.json)
- **Prompt del sistema (System prompt)** — instruccions que estableixen el to, les prioritats i les limitacions de l'agent
- **Suggeriments (Suggestions)** — *prompts* preescrivuts que es mostren a la interfície de xat per ajudar-te a començar ràpidament

## Com accedir a l'Agent Picker

1. Obre el panell **Gratis AI Agent** a la barra lateral d'administració de WordPress.
2. Fes clic a l'**icona d'agent** a l'esquina superior esquerra del titular del xat (l'icona canvia per reflectar l'agent actiu).
3. L'**Agent Picker** s'obre com una superposició de taula-formulari. Cada agent es llista amb la seva icona, nom i una descripció d'una línia.
4. Fes clic a una fila d'agent per activar-lo. El titular del xat s'actualitza immediatament.

També pots canviar d'agent a mitja conversa: el *system prompt* del nou agent es fa efectiu a partir del missatge següent.

## Els Cinc Agents Integrats

### Content Writer

**Foc:** Creació i edició de *posts*, pàgines i formularis de contacte.

**Utilitats disponibles:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Què fa bé:**
- Elaborar i publicar *posts* de blog a partir d'un resum o un esquema
- Crear llots de pàgines de *landing* per a un site nou
- Construir formularis de contacte i consulta
- Assignar imatges destacades a *posts* a partir d'una URL o una cerca

**Suggeriments de inici:**
- *Escriu un article de blog de 500 paraules sobre els beneficis de WordPress multisite.*
- *Crea una pàgina de "Sobre nosaltres", una de "Serveis" i una de "Contacte" i publiquen-les.*
- *Afegeix un formulari de consulta de reserva a la pàgina de Contacte.*

---

### Site Builder

**Foc:** Creació de lloc web de punt a punt a partir d'un únic *prompt*.

**Utilitats disponibles:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Què fa bé:**
- Generar un pla de construcció del site multifase per a un tipus de negoci descrit
- Executar cada fase de manera autònoma: estructura, contingut, navegació, disseny
- Recuperar-se d'errors a mitja pla sense requerir intervenció manual
- Instalar plugins recomanats com a part de la construcció
- Crear formularis de contacte directament des de la interfície de xat (Superdav AI Agent v1.10.0+)

**Suggeriments de inici:**
- *Construeix un site de portefoli de fotografia amb un tipus de post de galeria, una pàgina de reserva i un formulari de contacte.*
- *Crea un site de restaurant amb un menú en línia, hores d'apertura i un formulari de consulta de reserva de taula.*
- *Configura un site de consultoria *freelance* amb pàgines de serveis, una secció de portefoli i un blog.*
- *Afegeix un formulari de contacte a la pàgina de Contacte utilitzant el site builder.*

---

### Design Studio

**Foc:** Personalització visual: colors, tipografia, CSS i patrons de bloc.

**Utilitats disponibles:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Què fa bé:**
- Aplicar preajustaments de tema nomemats (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Afinar la tipografia global i les paletes de colors mitjançant theme.json
- Injeccionar CSS personalitzat per sobreescriures específiques de marca
- Fes una captura de pantalla d'una pàgina i revisar-la per detectar problemes de disseny

**Suggeriments de inici:**
- *Applica el preajustament warm-editorial i després afegeix el color principal a #2d6a4f.*
- *Fes una captura de pantalla de la pàgina inicial i di'm què em milloraràs.*
- *Crea un patró de bloc hero reutilitzable amb una imatge de fons a plena ampla i un titular centrat.*

---

### Plugin Manager

**Foc:** Descobrir, instal·lar i gestionar plugins de WordPress.

**Utilitats disponibles:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Què fa bé:**
- Recomanar el millor plugin per un cas d'ús descrit
- Instal·lar paquets d'habilitats del registre
- Navegar pel catàleg d'habilitats disponibles per categoria

**Suggeriments de inici:**
- *Quin és el millor plugin per a un directori de membres?*
- *Installa el paquet d'habilitats de WooCommerce.*
- *Mostra-me tots els paquets d'habilitats d'ecommerce disponibles.*

---

### Support Assistant

**Foc:** Respondre a preguntes sobre el contingut del site, la configuració i WordPress.

**Utilitats disponibles:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Què fa bé:**
- Comproveu la configuració i les opcions actuals del site
- Explicar què són els tipus de *post*, les taxònomes i els menús configurats al site
- Resoldre preguntes com "què fa aquesta configuració?" llegint valors en temps real
- Actuar com una capa de diagnòstic de lectura solament abans de fer canvis

**Suggeriments de inici:**
- *Quins plugins i configuracions estan actius actualment en aquest site?*
- *Llista tots els tipus de post personalitzats registrats en aquest site.*
- *Quins menús de navegació hi ha i on estan assignats?*

---

## Personalització d'Agents

Cada agent integrat pot ser estès o substituït mitjançant el *filter* `gratis_ai_agent_agents`.

### Afegir un *system prompt* personalitzat a un agent existent

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Registrar un nou agent

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

El nou agent apareixerà a l'Agent Picker immediatament després que s'executi el *filter*.

### Eliminar un agent integrat

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
