---
title: Agentes integrados
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Agentes Integrados

O Gratis AI Agent v1.9.0 vem com cinco agentes integrados, cada um pré-configurado con un conjunto de ferramentas enfocado, un sistema de *prompt* personalizado y sugerencias iniciales adaptadas a tarefas comunes en esa área. Mudar entre agentes cambia lo que el asistente puede hacer y cómo responde, sin necesidad de ninguna configuración por tu parte.

## O Que É un Agente?

Cada agente é un perfil de configuración con nome que combina:

- **Herramientas** — as capacidades que o agente pode chamar (por exemplo, un Escritor de Contento ten acceso a capacidades de creación de publicaciones; un Estudio de Diseño tiene acceso a CSS y *theme.json*)
- **Sistema de prompt (*System prompt*)** — instrucciones que establecen el tono, las prioridades y las restricciones do agente
- **Sugerencias** — *prompts* preescritos mostrados na interfaz de chat para ti ajudar a empezar rápido

## Acceder ao Selector de Agentes

1. Abre o painel **Gratis AI Agent** na barra lateral do admin do WordPress.
2. Clica no **ícone do agente** no canto superior esquerdo da cabecera de chat (o ícone cambia para reflejar o agente activo).
3. O **Selector de Agentes (*Agent Picker*)** abre como uma sobreposição de tabela-form. Cada agente está listado con o seu ícone, nome e unha descripción de unha frase.
4. Clica en unha fila do agente para activalo. A cabecera de chat se actualiza inmediatamente.

També podes cambiar de agentes a mitad da conversación — o sistema de prompt do novo agente entra en vigor a partir da próxima mensaxe.

## Os Cinco Agentes Integrados

### Escritor de Contento (*Content Writer*)

**Foco:** Crear e editar posts, páxinas e formularios de contacto.

**Herramientas disponíveis:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**O que funciona ben:**
- Redacción e publicación de posts de blog a partir de um resumo ou esquema
- Criação de lotes de landing pages para un novo sitio
- Construção de formulários de contacto e consulta

---

### Site Builder (Construtor de Sitios)

**Foco:** Criação completa de sitios a partir dun único comando.

**Herramientas dispoñibles:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**O que funciona ben:**
- Genera un plan de construcción de sitio de várias fases para un tipo de negocio descrito
- Executa cada fase de forma autónoma — estrutura, contenido, navegación, diseño
- Recupera erros a meio do plan sen precisar de intervención manual
- Instala plugins recomendados como parte da construção
- Cria formularios de contacto directamente desde a interfaz de chat (Superdav AI Agent v1.10.0+)

**Sugerencias para empezar:**
- *Construir un sitio de portfolio fotográfico con tipo de post de galería, unha páxina de reserva e un formulario de contacto.*
- *Crear un sitio web de restaurante con menú en liña, horarios e un formulario de consulta de reserva de mesas.*
- *Configurar un sitio de consultoría freelance con páginas de servizos, unha sección de portfolio e un blog.*
- *Adicionar un formulario de contacto á páxina de Contacto usando o Site Builder.*

---

### Design Studio (Estudio de Diseño)

**Foco:** Personalización visual — colores, tipografía, CSS e modelos de bloques.

**Herramientas dispoñibles:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**O que fai ben:**
- Aplicar presets de tema nomeados (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Ajustar a tipografía global e as paletas de cores ata o theme.json
- Inyectar CSS personalizado para sobrescrituras específicas da marca
- Tirar unha captura dunha páxina e revisala para problemas de diseño

**Sugerencias de inicio:**
- *Aplica o preset warm-editorial e tamén establece a cor principal en #2d6a4f.*
- *Tira unha captura da página inicial e dime o que mellorarías.*
- *Crea un patrón de bloco hero reutilizable con unha imaxe de fondo de pantalla completa e un título centrado.*

---

### Plugin Manager (Xestor de Plugins)

**Foco:** Descubrir, instalar e tamén gestionar os plugins de WordPress.

**Herramientas dispoñibles:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**O que fai ben:**
- Recomendar o mejor plugin para un caso de uso descrito
- Instalar paquetes de habilidades (ability packs) do registry
- Navegar por o catálogo de habilidades dispoñibles por categoría

**Sugerencias de inicio:**
- *Que é o melhor plugin para unha diretorio de membros?*
- *Instala o paquete de habilidades de WooCommerce.*
- *Muéstrame todos os paquetes de habilidades de comercio electrónico dispoñibles.*

---

### Support Assistant (Asistente de Soporte)

**Foco:** Responder a preguntas sobre o contenido do sitio, as configuración e a configuración de WordPress.

**Herramientas dispoñibles:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**O que funciona ben:**
- Buscar as configuración e opcións actuais do sitio.
- Explicar o que están configurados como post types, taxonomías e menus no sitio.
- Responder a preguntas como "o que faz esta configuração?" lendo os valores em tempo real.
- Servir como unha capa de diagnóstico só de lectura antes de hacer cambios.

**Sugerencias para empezar:**
- *Que plugins e configuracións están activas en este sitio?*
- *Listar todos os custom post types rexistrados no sitio.*
- *Que menus de navegación existen e onde están asignados?*

---

## Personalización dos Agentes (Customising Agents)

Cada agente incorporado pode ser estender ou substituir a través do filtro `gratis_ai_agent_agents`.

### Añadir un system prompt personalizado a un agente existente

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Registrar un novo agente

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Optimiza posts e páxinas para os motores de búsqueda.',
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

O novo agente aparece na selección de agentes logo após a execução do filtro.

### Remover un agente embutido

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
