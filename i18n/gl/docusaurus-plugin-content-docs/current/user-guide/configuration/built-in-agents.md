---
title: Axentes integrados
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Axentes integrados {#built-in-agents}

Gratis AI Agent v1.9.0 inclúe cinco axentes integrados, cada un preconfigurado cun conxunto específico de ferramentas, un prompt de sistema adaptado e suxestións iniciais axustadas ás tarefas habituais nesa área. Cambiar entre axentes modifica o que o asistente pode facer e como responde, sen ningunha configuración pola túa parte. Superdav AI Agent v1.18.0 pode engadir ferramentas sensibles á programación, rexistros de recordatorios, portas de aprobación e notificacións por SMS a estes fluxos de traballo cando as integracións relacionadas están configuradas.

## Que é un axente? {#what-is-an-agent}

Cada axente é un perfil de configuración con nome que combina:

- **Ferramentas** — as capacidades que o axente ten permitido invocar (por exemplo, un redactor de contido ten acceso a capacidades de creación de entradas; un estudo de deseño ten acceso a capacidades de CSS e theme.json)
- **Prompt de sistema** — instrucións que establecen o ton, as prioridades e as restricións do axente
- **Suxestións** — prompts preescritos que se mostran na interface de chat para axudarche a comezar rapidamente

## Acceder ao selector de axentes {#accessing-the-agent-picker}

1. Abre o panel **Gratis AI Agent** na barra lateral de administración de WordPress.
2. Fai clic na **icona de axente** na parte superior esquerda da cabeceira do chat (a icona cambia para reflectir o axente activo).
3. O **selector de axentes** ábrese como unha superposición en forma de táboa de formulario. Cada axente aparece coa súa icona, nome e unha descrición dunha liña.
4. Fai clic nunha fila de axente para activalo. A cabeceira do chat actualízase de inmediato.

Tamén podes cambiar de axente a media conversa: o prompt de sistema do novo axente entra en vigor desde a seguinte mensaxe.

## Os cinco axentes integrados {#the-five-built-in-agents}

### Redactor de contido {#content-writer}

**Foco:** Crear e editar entradas, páxinas e formularios de contacto.

**Ferramentas dispoñibles:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Coas integracións de Superdav AI Agent v1.18.0 activadas, o contexto de calendario configurado, as portas de aprobación, os recordatorios e as ferramentas de notificación por SMS tamén poden estar dispoñibles para fluxos de traballo aprobados.

**O que fai ben:**
- Redactar e publicar entradas de blog a partir dun resumo ou esquema
- Crear lotes de páxinas de destino para un novo sitio
- Construír formularios de contacto e consulta
- Establecer imaxes destacadas nas entradas desde un URL ou unha busca
- Redactar mensaxes de seguimento de eventos a partir do contexto configurado de Google Calendar e logo pausar para obter aprobación antes de enviar notificacións

**Suxestións iniciais:**
- *Escribe unha entrada de blog de 500 palabras sobre os beneficios de WordPress multisite.*
- *Crea unha páxina Sobre nós, Servizos e Contacto e publícaas.*
- *Engade un formulario de consulta de reservas á páxina de Contacto.*
- *Redacta un recordatorio para os asistentes do evento de calendario configurado de mañá e agarda a aprobación antes de envialo.*

---

### Construtor de sitios {#site-builder}

**Foco:** Creación integral de sitios web a partir dun único prompt.

**Ferramentas dispoñibles:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Con Superdav AI Agent v1.18.0, as ferramentas configuradas de servizo xestionado, aprobación, recordatorios, calendario e SMS poden estar dispoñibles onde os administradores as activen.

**O que fai ben:**
- Xerar un plan de construción de sitio en varias fases para un tipo de negocio descrito
- Executar cada fase de forma autónoma: estrutura, contido, navegación, deseño
- Recuperarse de erros a medio plan sen requirir intervención manual
- Instalar plugins recomendados como parte da construción
- Crear formularios de contacto directamente desde a interface de chat (Superdav AI Agent v1.10.0+)
- Coordinar recordatorios de lanzamento ou seguimento de asistentes sen notificacións duplicadas cando as portas de aprobación e os rexistros de recordatorios están activados

**Suxestións iniciais:**
- *Constrúe un sitio de portafolio de fotografía cun tipo de entrada de galería, unha páxina de reservas e un formulario de contacto.*
- *Crea un sitio web de restaurante cun menú en liña, horarios de apertura e un formulario de consulta para reserva de mesa.*
- *Configura un sitio de consultoría freelance con páxinas de servizos, unha sección de portafolio e un blog.*
- *Engade un formulario de contacto á páxina de Contacto usando o construtor de sitios.*
- *Despois de aprobar a lista de comprobación do lanzamento do sitio, envía un recordatorio por SMS ao contacto interesado configurado.*

---

### Estudo de deseño {#design-studio}

**Foco:** Personalización visual: cores, tipografía, CSS e patróns de bloques.

**Ferramentas dispoñibles:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**O que fai ben:**
- Aplicar preaxustes de tema con nome (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Axustar con precisión a tipografía global e as paletas de cores mediante theme.json
- Inxectar CSS personalizado para sobrescrituras específicas da marca
- Tomar unha captura de pantalla dunha páxina e revisala para detectar problemas de deseño

**Suxestións iniciais:**
- *Aplica o preaxuste warm-editorial e despois establece a cor primaria en #2d6a4f.*
- *Toma unha captura de pantalla da páxina de inicio e dime que mellorarías.*
- *Crea un patrón de bloque hero reutilizable cunha imaxe de fondo a ancho completo e un encabezado centrado.*

### Xestor de plugins {#plugin-manager}

**Foco:** Descubrir, instalar e xestionar plugins de WordPress.

**Ferramentas dispoñibles:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**O que fai ben:**
- Recomendar o mellor plugin para un caso de uso descrito
- Instalar paquetes de capacidades desde o rexistro
- Explorar o catálogo de capacidades dispoñibles por categoría

**Suxestións iniciais:**
- *Cal é o mellor plugin para un directorio de membership?*
- *Instala o paquete de capacidades de WooCommerce.*
- *Amósame todos os paquetes de capacidades de ecommerce dispoñibles.*

---

### Asistente de soporte {#support-assistant}

**Foco:** Responder preguntas sobre o contido do sitio, a configuración e a configuración de WordPress.

**Ferramentas dispoñibles:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**O que fai ben:**
- Consultar a configuración e as opcións actuais do sitio
- Explicar que tipos de publicación, taxonomías e menús están configurados no sitio
- Responder preguntas do tipo "que fai esta configuración?" lendo valores en vivo
- Servir como unha capa de diagnóstico de só lectura antes de facer cambios

**Suxestións iniciais:**
- *Que plugins e configuracións están activos actualmente neste sitio?*
- *Lista todos os tipos de publicación personalizados rexistrados neste sitio.*
- *Que menús de navegación existen e onde están asignados?*

---

## Integracións de automatización de Superdav {#superdav-automation-integrations}

Cando as integracións de Superdav AI Agent v1.18.0 están configuradas, os axentes incorporados poden participar en fluxos de traballo de automatización máis seguros e conscientes da programación:

- **Ferramentas de lectura de Google Calendar** permiten aos axentes inspeccionar calendarios e eventos configurados antes de redactar traballo de seguimento.
- **Mapeamento de contactos e asistentes** axuda a asociar os participantes dun evento con usuarios de WordPress ou contactos coñecidos.
- **Portas de aprobación humana** pausan accións sensibles ata que un usuario autorizado as revisa e confirma.
- **Rexistros de recordatorios** evitan notificacións duplicadas cando os traballos programados se reintentan ou repiten.
- **Notificacións SMS de TextBee** envían mensaxes de texto configuradas só cando as credenciais de SMS e os permisos do fluxo de traballo están activados.

Fluxo de traballo recomendado: pídelle ao axente que prepare a mensaxe ou a acción, revisa a solicitude de aprobación e logo permite que a acción aprobada se retome. Para recordatorios recorrentes, mantén activada a deduplicación de recordatorios para que o mesmo evento ou contacto non reciba notificacións repetidamente.

---

## Personalización de axentes {#customising-agents}

Cada axente incorporado pode ampliarse ou substituírse mediante o filtro `gratis_ai_agent_agents`.

### Engadir un prompt de sistema personalizado a un axente existente {#adding-a-custom-system-prompt-to-an-existing-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Rexistrar un novo axente {#registering-a-new-agent}

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

O novo axente aparece no Agent Picker inmediatamente despois de que se execute o filtro.

### Eliminar un axente incorporado {#removing-a-built-in-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
