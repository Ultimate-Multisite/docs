---
title: Agents integrats
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Agents integrats

Gratis AI Agent v1.9.0 inclou cinc agents integrats, cadascun preconfigurat amb un conjunt d’eines enfocat, un prompt de sistema adaptat i suggeriments inicials adequats a tasques habituals en aquella àrea. Canviar d’agent modifica què pot fer l’assistent i com respon — sense cap configuració per part teva. Superdav AI Agent v1.18.0 pot afegir eines conscients de la programació, registres de recordatoris, portes d’aprovació i notificacions SMS a aquests fluxos de treball quan les integracions relacionades estan configurades.

## Què és un agent?

Cada agent és un perfil de configuració amb nom que combina:

- **Eines** — les capacitats que l’agent té permís per invocar (p. ex., un redactor de contingut té accés a capacitats de creació d’entrades; un estudi de disseny té accés a capacitats de CSS i theme.json)
- **Prompt de sistema** — instruccions que estableixen el to, les prioritats i les restriccions de l’agent
- **Suggeriments** — prompts preescrits mostrats a la interfície de xat per ajudar-te a començar ràpidament

## Accedir al selector d’agents

1. Obre el tauler **Gratis AI Agent** a la barra lateral d’administració de WordPress.
2. Fes clic a la **icona d’agent** a la part superior esquerra de la capçalera del xat (la icona canvia per reflectir l’agent actiu).
3. El **Selector d’agents** s’obre com una superposició de taula de formulari. Cada agent apareix amb la seva icona, nom i una descripció d’una línia.
4. Fes clic a una fila d’agent per activar-lo. La capçalera del xat s’actualitza immediatament.

També pots canviar d’agent a mitja conversa — el prompt de sistema del nou agent té efecte a partir del missatge següent.

## Els cinc agents integrats

### Redactor de contingut

**Enfocament:** Crear i editar entrades, pàgines i formularis de contacte.

**Eines disponibles:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Amb les integracions de Superdav AI Agent v1.18.0 activades, també poden estar disponibles per a fluxos de treball aprovats el context de calendari configurat, les portes d’aprovació, els recordatoris i les eines de notificació SMS.

**Què fa bé:**
- Redactar i publicar entrades de blog a partir d’un brief o esquema
- Crear lots de pàgines de destinació per a un lloc nou
- Crear formularis de contacte i de consulta
- Definir imatges destacades en entrades des d’un URL o una cerca
- Redactar missatges de seguiment d’esdeveniments a partir del context configurat de Google Calendar, i després aturar-se per a l’aprovació abans d’enviar notificacions

**Suggeriments inicials:**
- *Escriu una entrada de blog de 500 paraules sobre els beneficis de WordPress multisite.*
- *Crea una pàgina Sobre nosaltres, Serveis i Contacte i publica-les.*
- *Afegeix un formulari de consulta de reserva a la pàgina de Contacte.*
- *Redacta un recordatori per als assistents a l’esdeveniment de calendari configurat de demà i espera l’aprovació abans d’enviar-lo.*

---

### Constructor de llocs

**Enfocament:** Creació de llocs web de punta a punta a partir d’un sol prompt.

**Eines disponibles:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Amb Superdav AI Agent v1.18.0, les eines configurades de servei gestionat, aprovació, recordatoris, calendari i SMS poden estar disponibles quan els administradors les habiliten.

**Què fa bé:**
- Generar un pla de creació de lloc en diverses fases per a un tipus de negoci descrit
- Executar cada fase de manera autònoma — estructura, contingut, navegació, disseny
- Recuperar-se d’errors a mitjan pla sense requerir intervenció manual
- Instal·lar plugins recomanats com a part de la creació
- Crear formularis de contacte directament des de la interfície de xat (Superdav AI Agent v1.10.0+)
- Coordinar recordatoris de llançament o seguiment d’assistents sense notificacions duplicades quan les portes d’aprovació i els registres de recordatoris estan habilitats

**Suggeriments inicials:**
- *Crea un lloc de portafoli de fotografia amb un tipus d’entrada de galeria, una pàgina de reserves i un formulari de contacte.*
- *Crea un lloc web de restaurant amb un menú en línia, horari d’obertura i un formulari de consulta de reserva de taula.*
- *Configura un lloc de consultoria freelance amb pàgines de serveis, una secció de portafoli i un blog.*
- *Afegeix un formulari de contacte a la pàgina de Contacte amb el constructor de llocs.*
- *Després que la llista de comprovació de llançament del lloc sigui aprovada, envia un recordatori SMS al contacte de la part interessada configurat.*

---

### Estudi de disseny

**Enfocament:** Personalització visual — colors, tipografia, CSS i patrons de blocs.

**Eines disponibles:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Què fa bé:**
- Aplicar presets de tema amb nom (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Ajustar finament la tipografia global i les paletes de colors mitjançant theme.json
- Injectar CSS personalitzat per a substitucions específiques de marca
- Fer una captura de pantalla d’una pàgina i revisar-la per detectar problemes de disseny

**Suggeriments inicials:**
- *Aplica el preset warm-editorial i després defineix el color principal a #2d6a4f.*
- *Fes una captura de pantalla de la pàgina d’inici i digues-me què milloraries.*
- *Crea un patró de bloc hero reutilitzable amb una imatge de fons d’amplada completa i un encapçalament centrat.*

### Gestor de plugins

**Enfocament:** Descobrir, instal·lar i gestionar plugins de WordPress.

**Eines disponibles:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Què fa bé:**
- Recomanar el millor plugin per a un cas d’ús descrit
- Instal·lar paquets de capacitats des del registre
- Navegar pel catàleg de capacitats disponibles per categoria

**Suggeriments inicials:**
- *Quin és el millor plugin per a un directori de membres?*
- *Instal·la el paquet de capacitats de WooCommerce.*
- *Mostra’m tots els paquets de capacitats d’ecommerce disponibles.*

---

### Assistent de suport

**Enfocament:** Respondre preguntes sobre el contingut del lloc, la configuració i la configuració de WordPress.

**Eines disponibles:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Què fa bé:**
- Cercar la configuració i les opcions actuals del lloc
- Explicar quins tipus d’entrada, taxonomies i menús estan configurats al lloc
- Respondre preguntes del tipus "què fa aquesta configuració?" llegint valors en directe
- Servir com a capa de diagnòstic de només lectura abans de fer canvis

**Suggeriments inicials:**
- *Quins plugins i configuracions estan actius actualment en aquest lloc?*
- *Llista tots els tipus d’entrada personalitzats registrats en aquest lloc.*
- *Quins menús de navegació existeixen i on estan assignats?*

---

## Integracions d’automatització de Superdav

Quan les integracions de Superdav AI Agent v1.18.0 estan configurades, els agents integrats poden participar en fluxos de treball d’automatització més segurs i conscients de la programació:

- **Les eines de lectura de Google Calendar** permeten als agents inspeccionar calendaris i esdeveniments configurats abans de redactar feina de seguiment.
- **El mapatge de contactes i assistents** ajuda a relacionar els participants dels esdeveniments amb usuaris de WordPress o contactes coneguts.
- **Les portes d’aprovació humana** posen en pausa les accions sensibles fins que un usuari autoritzat les revisa i les confirma.
- **Els registres de recordatoris** eviten notificacions duplicades quan les tasques programades es tornen a intentar o es repeteixen.
- **Les notificacions SMS de TextBee** envien missatges de text configurats només quan les credencials SMS i els permisos del flux de treball estan activats.

Flux de treball recomanat: demana a l’agent que prepari el missatge o l’acció, revisa la sol·licitud d’aprovació i després permet que l’acció aprovada es reprengui. Per als recordatoris recurrents, mantén activada la deduplicació de recordatoris perquè no es notifiqui repetidament el mateix esdeveniment o contacte.

---

## Personalització d’agents

Cada agent integrat es pot ampliar o substituir mitjançant el filtre `gratis_ai_agent_agents`.

### Afegir una indicació de sistema personalitzada a un agent existent

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Registrar un agent nou

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

L’agent nou apareix al selector d’agents immediatament després que s’executi el filtre.

### Eliminar un agent integrat

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
