---
title: Orquestación del Constructor de Sitios v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Orquestación del Constructor de Sitios v2 {#site-builder-orchestration-v2}

Site Builder Orchestration v2 (introducido en Gratis AI Agent v1.4.0) es el motor que impulsa la creación de sitios web en múltiples pasos. Cuando le pides al agente que "cree un sitio web de restaurante" o "elabore un portafolio con un blog", el orquestador desglosa ese objetivo general en un **plan** estructurado, descubre los plugins necesarios para cumplirlo, ejecuta cada paso en secuencia, rastrea el progreso y se recupera de errores de forma autónoma.

---

## Cómo Funciona {#how-it-works}

### 1. Generación del Plan {#1-plan-generation}

Cuando el agente recibe una instrucción para construir un sitio, llama a la capacidad `create_site_plan` para producir un **plan de sitio** en formato JSON. El plan describe:

- **Goal** (Objetivo) — lo que debe hacer el sitio terminado
- **Phases** (Fases) — grupos ordenados de pasos (ej. _Configuración_, _Tipos de Contenido_, _Diseño_, _Contenido_)
- **Steps** (Pasos) — llamadas a capacidades individuales dentro de cada fase
- **Plugin requirements** (Requisitos de plugins) — plugins que deben estar activos para que ciertos pasos se ejecuten
- **Fallbacks** (Alternativas) — pasos alternativos si un paso principal falla

**Ejemplo de plan (abreviado)**

```json
{
  "plan_id": "plan_restaurant_001",
  "goal": "Build a restaurant website with an online menu, booking form, and contact page",
  "phases": [
    {
      "id": "setup",
      "label": "Setup",
      "steps": [
        { "ability": "install_ability", "params": { "slug": "gratis-ai-agent-woocommerce" } },
        { "ability": "register_post_type", "params": { "slug": "menu-item", "singular_label": "Menu Item", "plural_label": "Menu Items" } },
        { "ability": "register_taxonomy", "params": { "slug": "menu-section", "singular_label": "Menu Section", "plural_label": "Menu Sections", "post_types": ["menu-item"] } }
      ]
    },
    {
      "id": "design",
      "label": "Design",
      "steps": [
        { "ability": "apply_theme_json_preset", "params": { "preset": "warm-editorial" } },
        { "ability": "inject_custom_css", "params": { "css": ".menu-item { border-radius: 8px; }", "label": "restaurant-ui" } }
      ]
    },
    {
      "id": "navigation",
      "label": "Navigation",
      "steps": [
        { "ability": "create_menu", "params": { "name": "Primary Navigation", "location": "primary" } },
        { "ability": "add_menu_item", "params": { "menu_id": "__ref:create_menu.menu_id", "type": "custom", "title": "Menu", "url": "/menu-items/" } },
        { "ability": "add_menu_item", "params": { "menu_id": "__ref:create_menu.menu_id", "type": "custom", "title": "Book a Table", "url": "/book/" } }
      ]
    }
  ],
  "plugin_requirements": [
    { "slug": "contact-form-7", "reason": "Required for the booking and contact forms" }
  ]
}
```

### 2. Descubrimiento de Plugins {#2-plugin-discovery}

Antes de que comience la ejecución, el orquestador escanea los `plugin_requirements` del plan y comprueba qué plugins ya están activos. Para los plugins faltantes, realiza lo siguiente:

1. Busca en el registro mediante `recommend_plugin` la mejor coincidencia.
2. Solicita al agente que confirme la recomendación.
3. Activa la instalación si se aprueba (o si la auto-instalación está habilitada en la configuración).

Los fallos en el descubrimiento de plugins no son fatales: el orquestador marca los pasos afectados como `skipped` (omitidos) y continúa con el resto del plan.

### 3. Ejecución del Plan {#3-plan-execution}

El orquestador llama a `execute_site_plan` con el ID del plan. La ejecución procede fase por fase, paso por paso:

- **Step references** (Referencias de pasos) (`__ref:` prefijo) — los pasos pueden hacer referencia a los resultados de pasos anteriores. En el ejemplo anterior, `__ref:create_menu.menu_id` se resuelve al `menu_id` devuelto por el paso `create_menu`.
- **Parallel steps** (Pasos paralelos) — los pasos dentro de la misma fase que no tienen interdependencias se envían concurrentemente cuando se establece la bandera `parallel`.
- **Step timeout** (Tiempo de espera del paso) — cada paso tiene un tiempo de espera individual (por defecto: la configuración `Ability Timeout`). Un paso que se agota el tiempo se marca como `failed` (fallido) y el plan continúa.

### 4. Seguimiento del Progreso {#4-progress-tracking}

Llama a `get_plan_progress` en cualquier momento para comprobar el estado de la ejecución:

```json
{
  "plan_id": "plan_restaurant_001",
  "status": "in_progress",
  "phases_total": 4,
  "phases_complete": 2,
  "steps_total": 14,
  "steps_complete": 8,
  "steps_failed": 1,
  "steps_skipped": 0,
  "current_step": "add_menu_item",
  "elapsed_seconds": 42
}
```

Los usuarios de WP-CLI pueden monitorizar el progreso con:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Recuperación de Errores {#5-error-recovery}

Cuando un paso falla, el orquestador comprueba si hay un paso de **fallback** (alternativa) definido en el plan:

- **Fallback available** (Alternativa disponible) — se intenta el paso de fallback inmediatamente. Si tiene éxito, la ejecución continúa. Si también falla, el paso se marca como `failed` y la ejecución continúa con el siguiente paso.
- **No fallback** (Sin alternativa) — el paso se marca como `failed`. Los pasos no críticos se omiten; los pasos críticos (marcados como `required: true`) detienen la fase actual y activan un intento de recuperación a nivel de fase.

El agente informa de todos los fallos en el resumen final del plan y puede sugerir pasos de remediación manual para errores irrecuperables.

---

## Capacidades del Plan de Sitio {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

Genera un plan de sitio estructurado a partir de una descripción de objetivo en lenguaje natural.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Descripción en lenguaje natural del sitio web deseado |
| `style` | string | No | Preferencia de estilo visual: `minimal`, `bold`, `professional`, `playful`. Por defecto: el agente elige según el objetivo |
| `plugins` | array | No | Slugs de plugins a incluir en el plan. El orquestador añade automáticamente los plugins requeridos. |
| `dry_run` | boolean | No | Si es `true`, devuelve el JSON del plan sin guardarlo ni ejecutarlo. Por defecto `false` |

**Returns** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

Comienza la ejecución de un plan de sitio generado previamente.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | ID del plan a ejecutar |
| `auto_install_plugins` | boolean | No | Si es `true`, instala automáticamente los plugins requeridos sin confirmación. Por defecto `false` |
| `max_retries` | integer | No | Número de veces que intentar un paso fallido antes de continuar. Por defecto `1` |

**Returns** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

Devuelve el estado de ejecución actual de un plan de sitio.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | ID del plan a consultar |

**Returns** el objeto de progreso descrito en [Progress Tracking](#4-progress-tracking) arriba.

---

### `handle_plan_error` {#handleplanerror}

Resuelve manualmente un paso fallido y reanuda la ejecución del plan desde el siguiente paso. Utiliza esto cuando la recuperación automática no fue posible y deseas intervenir.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | ID del plan |
| `step_id` | string | Yes | ID del paso fallido |
| `resolution` | string | Yes | Uno de `skip` (omitir y continuar), `retry` (reintentar el paso inmediatamente), o `mark_done` (tratar como éxito sin volver a ejecutar) |

**Returns** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Comparando v1 y v2 {#comparing-v1-and-v2}

| Feature | v1 | v2 |
|---|---|---|
| Multi-phase plans | No | Yes |
| Step output references (`__ref:`) | No | Yes |
| Plugin discovery | Manual | Automatic |
| Progress tracking API | No | Yes |
| Error recovery | Fail-and-stop | Fallback + continue |
| Parallel step execution | No | Yes (opt-in per phase) |
| WP-CLI plan commands | No | Yes |
| Benchmark integration | No | Yes (`q-restaurant-website`) |

---

## Comandos de Plan WP-CLI {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

Genera un plan de sitio a partir de una descripción de objetivo.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

Ejecuta un plan generado previamente.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

Muestra el progreso actual de un plan en ejecución o completado.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

Lista todos los planes de sitio (pendientes, en progreso y completados).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

Reinicia un plan fallido a `pending` para que pueda ser reejecutado desde el principio.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
