---
title: Diari de canvis
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Diari de canvis

## 1.9.0 — Publicat el 2026-04-28

### Nou

- **Capacitat `create_contact_form`** — crea un formulari de contacte utilitzant el plugin de formularis actiu (Contact Form 7, WPForms, Fluent Forms o Gravity Forms) i retorna un shortcode preparat per incorporar a qualsevol article o pàgina.
- **Capacitat `set_featured_image`** — assigna una imatge destacada a un article o pàgina a partir d'un ID d'adjunt de la Biblioteca de mitjà existent o d'una URL remota; importa automàticament l'imatge quan es proporciona una URL.
- **Capacitat `batch_create_posts`** — crea múltiples articles en una sola crida de capacitat. Suporta els mateixos paràmetres que `create_post`, informa sobre el èxit/fracàs per article i té un mode opcional `stop_on_error`.
- **Paràmetre `page_template`** — afegit a `create_post` i `update_post`. Assigna un fitxer de plantilla de pàgina PHP (per exemple, `page-full-width.php`) en el moment de la creació o actualització. Passa una cadena de caràcters buida a `update_post` per revertir a la plantilla per defecte del tema.
- **Capacitats de capturà de pantall a nivell client** — `capture_screenshot`, `compare_screenshots` i `review_page_design`. Capturen pantall complet o de la viewport de pàgines en directe mitjançant un headless browser a nivell servidor, diferencien dues captures de pantall i obteu una revisió de disseny generada per IA que cobreix la disposició, la tipografia, el color i l'accessibilitat.
- **Cinc agents integrats** — Content Writer, Site Builder, Design Studio, Plugin Manager i Support Assistant. Cada agent té un conjunt dedicat de eines, un prompt de sistema personalitzat i suggeriments de inici. Es poden canviar mitjançant el nou **Agent Picker** a l'encabezament del chat. Veure [Agents integrats](../../user-guide/configuration/built-in-agents).
- **Feature flags** — nova pestanya **Settings → Feature Flags** amb interruptors de control d'accés (restringir a administradors, restringir a administradors de xarxa, accés d'abonat, deshabilitar per no membres) i opcions de marca (ocultar l'atribució del pie de pàgina, nom d'agent personalitzat, ocultar l'agent picker, utilitzar l'ícone del site com a avatar del chat). Veure [Configuració de l'agent Gratis AI](../../user-guide/administration/gratis-ai-agent-settings).
- **Restaurar última sessió** — el panell de chat ara recarrega automàticament la conversa més recent quan es carrega la pàgina i quan s'obre el widget, així que el context mai es perd durant la navegació per pàgines.
- **Enllaços d'acció del plugin** — ara apareixen enllaços ràpids a Settings i al Abilities Registry a l'e pantalla **Plugins → Plugins instal·lats** de WordPress, sota la descripció del plugin.

### Millorat

- **Reintent de font d'imatge** — l'agent ara reintenta totes les fonts d'imatges gratuïtes configurades abans de recórrer a una imatge generada per IA en cas de fracàs de descàrrega.
- **Panell d'informació del model** — sempre visible a l'encabezament del chat; ja no està ocult després del primer missatge.
- **Comportament d'autoscroll** — l'autoscroll es deturació quan l'usuari desplaca cap amunt per llegir; apareix un botó flotant **Scroll to bottom** i es desactiva automàticament quan l'usuari arriba al missatge més recent.
- **UI de Agent Picker** — rediseñada com una superposició de taula-formulari amb íconos per agent, cosa que facilita identificar i canviar agents de un llanc.
- **Chunks JS carregats de forma perezosa (Lazy-loaded)** — el paquet JavaScript inicial del widget de chat ara es divideix en chunks carregats de forma perezosa, reduint els tamanys del paquet inicial entre un 75% i un 90%.
- **Rediseño del widget de chat** — un ícone AI unitari substitueix l'avatar personalitzat anterior; és consistent amb el sistema d'agents integrats.
- **Linkificació d'URL** — les URL que apareixen en missatges del sistema i en bústies de missatges d'error es renderitzen ara com enllaços clicables.

### Corregit

- **Descoberta de capacitats** — descricions, referències de prompts de sistema i alineació de namespace corregits perquè totes les capacitats apareguin a la llista d'eines de l'agent de manera fiable.
- **Cache de proveïdors** — els proveïdors ara es cacheen a nivell de site amb un comptador de versions, prevenint problemes de proveïdors desactualitzats en xarxes multisite.
- **`ability_invalid_output`** — resolt en 12 manejadors de capacitats; tots retornen respostes JSON estructurades correctament.
- **Tubería `pending_client_tool_calls`** — connectada de cap a tot perquè les crides d'eines a nivell client es completin correctament i retornin resultats al model.
- **Drejà d'historial** — els canvis no revertibles s'exclouen de la llista de revert; l'enllaç **View full history** ara funciona correctament.
- **Sistema de canvis/revert**: cinc bugs separats corregits i unitzats sota la nova interfície d'administració.
- **Toast de guardat de configuració** — la notificació snackbar ara apareix de manera fiable després de fer clic a **Save Settings**.
- **Menú de context de la paparella (Trash)** — afegit l'opció **Delete Permanently** perquè els elements es puguin eliminar permanentment sense deixar la vista de paparella.
- **Editar i reenviar** — fer clic a l'ícone d'edició ara entra en mode d'edició només per al missatge clica, no per a tots els missatges del fil.
- **Altura de la disposició de chat** — el panell de chat s'adapta la seva altura quan apareixen continguts injectats per plugins (avisos d'administració, banners) per sobre de la pàgina, prevenint que l'àrea d'entrada sigui empujada fora de la pantalla.

---

## 1.4.0 — Publicat el 2026-04-09

### Nou

- **Comandament de benchmark de WP-CLI** (`wp gratis-ai-agent benchmark`) — executa la suite de benchmark Agent Capabilities v1 des de la línia de comandes per a pipelines CI i fluxos de treball de evaluació de models. Suporta execucions per pregunta, sobreescritures de proveïdor/model i sortida JSON/CSV.
- **Suite de benchmark Agent Capabilities v1** — un conjunt estructurat de prompts complexos i multi-etapa que exerciten la superfície completa de capacitats, amb puntuació i informes de tokens/durada.
- **Capacitats per Tipus de contingut personalitzat** — `register_post_type`, `list_post_types`, `delete_post_type`. Les registracions persisteixen durant els reinicis mitjançant la taula d'opcions.
- **Capacitats per Taxonomia personalitzada** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Suporta taxonomies jeràrquiques i planes amb slugs de rewrite opcionals.
- **Capacitats de Sistema de disseny** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Inclou cinc presets curats: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Capacitats de Estils globals** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Llegeix i escriu valors de theme.json mitjançant l'API de Estils globals de WordPress.
- **Capacitat de gestió de menús de navegació** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Suporta menús anidats i assignació de lloc del tema.
- **Capacitat de gestió d'opcions** — `get_option`, `set_option`, `delete_option`, `list_options`. Inclou una llista negra de seguretat integrada que protegeix les opcions crítiques de WordPress de modificacions.
- **Registre de Capacitats instal·lables** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Descobreix i activa paquets de capacitats distribuïts com plugins de WordPress.
- **Orquestació de Site Builder v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Plans de construcció de site multifase amb descobriment de plugins, referències de sortida d'etapes, seguiment de progrés i recuperació d'errors autònoma.
- **Pregunta de benchmark per a pàgines web de restaurants** (`q-restaurant-website`) — prova de cap a tot que cobreix la registració de CPT, sistema de disseny, navegació i descobriment de plugins.
- **Plugins de conector de proveïdors d'IA** afegits als blueprints de WordPress Playground per a una configuració de desenvolupament local més ràpida.

### Millorat

- README actualitzat amb documentació i instruccions de configuració per als conectors de proveïdors d'IA.

### Corregit

- 25 fallades de test PHPUnit a la branca `main` resoltes.
- Format de URL de les publicacions de GitHub en `blueprint.json` corregit.
- Renumeració de l'ID de la tasca per evitar col·lisions amb IDs antics.

---

## 1.3.x

_Les notes de les versions anteriors es mantenen al repository del plugin._
