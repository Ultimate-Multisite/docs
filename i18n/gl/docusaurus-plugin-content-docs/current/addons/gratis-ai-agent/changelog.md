---
title: Rexistro de cambios
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Rexistro de cambios

## 1.9.0 — Publicado o 2026-04-28

### Novo

- **habilidade `create_contact_form`** — crea un formulario de contacto usando o plugin de formularios activo (Contact Form 7, WPForms, Fluent Forms ou Gravity Forms) e devolve un shortcode listo para inserir en calquera entrada ou páxina.
- **habilidade `set_featured_image`** — asigna unha imaxe destacada a unha entrada ou páxina desde un ID de anexo existente da biblioteca multimedia ou desde un URL remoto; importa automaticamente a imaxe cando se proporciona un URL.
- **habilidade `batch_create_posts`** — crea varias entradas nunha única chamada de habilidade. Admite os mesmos parámetros ca `create_post`, informa do éxito/erro por entrada e ten un modo opcional `stop_on_error`.
- **parámetro `page_template`** — engadido a `create_post` e `update_post`. Asigna un ficheiro de modelo de páxina PHP (p. ex. `page-full-width.php`) no momento de crear ou actualizar. Pasa unha cadea baleira a `update_post` para volver ao valor predeterminado do tema.
- **Habilidades de captura de pantalla do lado do cliente** — `capture_screenshot`, `compare_screenshots` e `review_page_design`. Captura pantallas completas ou da xanela visible de páxinas en directo mediante un navegador sen interface do lado do servidor, compara dúas capturas de pantalla e obtén unha revisión de deseño xerada por IA que abrangue disposición, tipografía, cor e accesibilidade.
- **Cinco axentes integrados** — Redactor de contido, Creador de sitios, Estudio de deseño, Xestor de plugins e Asistente de soporte. Cada axente ten un conxunto dedicado de ferramentas, un prompt de sistema adaptado e suxestións iniciais. Pódense cambiar mediante o novo **Selector de axente** na cabeceira do chat. Consulta [Axentes integrados](../../user-guide/configuration/built-in-agents).
- **Bandeiras de funcións** — nova pestana **Axustes → Bandeiras de funcións** con interruptores de control de acceso (restrinxir a administradores, restrinxir a administradores de rede, acceso de subscritores, desactivar para non membros) e opcións de marca (ocultar atribución no pé, nome de axente personalizado, ocultar selector de axente, usar a icona do sitio como avatar do chat). Consulta [Axustes de Gratis AI Agent](../../user-guide/administration/gratis-ai-agent-settings).
- **Restaurar a última sesión** — o panel de chat agora recarga automaticamente a conversa máis recente ao cargar a páxina e ao abrir o widget, polo que o contexto nunca se perde ao navegar entre páxinas.
- **Ligazóns de acción do plugin** — as ligazóns rápidas a Axustes e ao Rexistro de habilidades agora aparecen na pantalla **Plugins → Plugins instalados** de WordPress baixo a descrición do plugin.

### Mellorado

- **Reintento de orixe de imaxes** — o axente agora volve intentar todas as fontes gratuítas de imaxes configuradas antes de recorrer a unha imaxe xerada por IA cando falla a descarga.
- **Panel de información do modelo** — sempre visible na cabeceira do chat; xa non queda oculto despois da primeira mensaxe.
- **Comportamento de desprazamento automático** — o desprazamento automático ponse en pausa cando o usuario se despraza cara arriba para ler; aparece un botón flotante **Desprazarse ao final** e descártase automaticamente cando o usuario chega á mensaxe máis recente.
- **IU do Selector de axente** — redeseñado como unha superposición de táboa de formulario con iconas por axente, o que facilita identificar e cambiar de axente dunha ollada.
- **Fragmentos JS con carga diferida** — o paquete inicial de JavaScript do widget de chat agora divídese en fragmentos con carga diferida, reducindo os tamaños iniciais do paquete nun 75–90%.
- **Redeseño do widget de chat** — unha icona de IA unificada substitúe o avatar personalizado anterior; é coherente co sistema de axentes integrados.
- **Conversión de URL en ligazóns** — os URL que aparecen en mensaxes do sistema e burbullas de mensaxes de erro agora represéntanse como ligazóns clicables.

### Corrixido

- **Descubribilidade das habilidades** — corrixíronse descricións, referencias do prompt do sistema e aliñamento do espazo de nomes para que todas as habilidades aparezan de forma fiable na lista de ferramentas do axente.
- **Caché de provedores** — os provedores agora almacénanse na caché en todo o sitio mediante un contador de versión, evitando problemas de provedores obsoletos en redes multisite.
- **`ability_invalid_output`** — resolto en 12 xestores de habilidades; todos devolven respostas JSON correctamente estruturadas.
- **Canalización `pending_client_tool_calls`** — conectada de extremo a extremo para que as chamadas a ferramentas do lado do cliente se completen correctamente e devolvan resultados ao modelo.
- **Caixón de historial** — os cambios non reversibles exclúense da lista de reversión; a ligazón **Ver historial completo** agora funciona correctamente.
- **Sistema de cambios/reversión** — corrixíronse cinco erros separados e unificáronse baixo a nova interface de administración.
- **Aviso emerxente de Gardar axustes** — a notificación snackbar agora aparece de forma fiable despois de facer clic en **Gardar axustes**.
- **Menú contextual do lixo** — engadiuse a opción **Eliminar permanentemente** para que os elementos poidan eliminarse definitivamente sen saír da vista do lixo.
- **Editar e reenviar** — ao facer clic na icona de edición agora éntrase no modo de edición só para a mensaxe premida, non para todas as mensaxes do fío.
- **Altura da disposición do chat** — o panel de chat adapta a súa altura cando aparece contido inxectado polo plugin (avisos de administración, banners) enriba da páxina, evitando que a área de entrada quede desprazada fóra da pantalla.

---

## 1.4.0 — Publicado o 2026-04-09

### Novo

- **Comando de benchmark de WP-CLI** (`wp gratis-ai-agent benchmark`) — executa a suite de benchmark Agent Capabilities v1 desde a liña de comandos para pipelines de CI e fluxos de traballo de avaliación de modelos. Admite execucións por pregunta, substitucións de provedor/modelo e saída JSON/CSV.
- **Suite de benchmark Agent Capabilities v1** — un conxunto estruturado de prompts complexos de varios pasos que exercitan toda a superficie de capacidades, con puntuación e informes de tokens/duración.
- **Capacidades de Custom Post Type** — `register_post_type`, `list_post_types`, `delete_post_type`. Os rexistros persisten entre reinicios mediante a táboa de opcións.
- **Capacidades de Custom Taxonomy** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Admite taxonomías xerárquicas e planas con slugs de reescritura opcionais.
- **Capacidades de Design System** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Inclúe cinco preaxustes seleccionados: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Capacidades de Global Styles** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Le e escribe valores de theme.json mediante a WordPress Global Styles API.
- **Capacidade de xestión do menú de navegación** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Admite menús aniñados e asignación de localizacións de tema.
- **Capacidade de xestión de opcións** — `get_option`, `set_option`, `delete_option`, `list_options`. Inclúe unha lista de bloqueo de seguridade integrada que protexe opcións críticas de WordPress fronte a modificacións.
- **Installable Abilities Registry** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Descubre e activa paquetes de capacidades distribuídos como plugins de WordPress.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Plans de construción de sitios en varias fases con descubrimento de plugins, referencias de saída de pasos, seguimento do progreso e recuperación autónoma de erros.
- **Pregunta de benchmark de sitio web de restaurante** (`q-restaurant-website`) — proba de extremo a extremo que cobre o rexistro de CPT, o sistema de deseño, a navegación e o descubrimento de plugins.
- **Plugins conectores de provedores de AI** engadidos aos blueprints de WordPress Playground para unha configuración de desenvolvemento local máis rápida.

### Mellorado

- README actualizado coa documentación dos conectores de provedores de AI e instrucións de configuración.

### Corrixido

- Resoltas 25 fallas de probas PHPUnit na rama `main`.
- Corrixido o formato do URL de lanzamentos de GitHub en `blueprint.json`.
- Renumeración dos ID de tarefas para evitar colisións con ID antigos.

---

## 1.3.x

_As notas de versión anteriores mantéñense no repositorio do plugin._
