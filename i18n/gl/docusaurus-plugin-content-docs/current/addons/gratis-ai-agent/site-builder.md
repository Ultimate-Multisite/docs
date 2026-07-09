---
title: Orquestración do creador de sitios v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Orquestración de Site Builder v2

Site Builder Orchestration v2 (introducido en Gratis AI Agent v1.4.0) é o motor que impulsa a creación de sitios web en múltiples pasos. Cando lle pides ao axente que "constrúa un sitio web de restaurante" ou "cree un portafolio cun blog", o orquestrador divide ese obxectivo de alto nivel nun **plan** estruturado, descobre os plugins necesarios para cumprilo, executa cada paso en secuencia, fai seguimento do progreso e recupérase dos erros de forma autónoma.

---

## Como funciona

### 1. Xeración do plan

Cando o axente recibe unha instrución para crear un sitio, chama á capacidade `create_site_plan` para producir un **plan de sitio** en JSON. O plan describe:

- **Obxectivo** — que debe facer o sitio rematado
- **Fases** — grupos ordenados de pasos (p. ex. _Configuración_, _Tipos de contido_, _Deseño_, _Contido_)
- **Pasos** — chamadas individuais a capacidades dentro de cada fase
- **Requisitos de plugins** — plugins que deben estar activos para que certos pasos poidan executarse
- **Alternativas** — pasos alternativos se un paso principal falla

**Plan de exemplo (abreviado)**

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

### 2. Descubrimento de plugins

Antes de que comece a execución, o orquestrador examina os `plugin_requirements` do plan e comproba que plugins xa están activos. Para os plugins ausentes, fai o seguinte:

1. Busca no rexistro mediante `recommend_plugin` a mellor coincidencia
2. Pídelle ao axente que confirme a recomendación
3. Activa a instalación se se aproba (ou se a instalación automática está activada na configuración)

Os fallos no descubrimento de plugins non son fatais: o orquestrador marca os pasos afectados como `skipped` e continúa co resto do plan.

### 3. Execución do plan

O orquestrador chama a `execute_site_plan` co ID do plan. A execución avanza fase por fase, paso por paso:

- **Referencias de pasos** (prefixo `__ref:`) — os pasos poden facer referencia ás saídas de pasos anteriores. No exemplo anterior, `__ref:create_menu.menu_id` resólvese ao `menu_id` devolto polo paso `create_menu`.
- **Pasos en paralelo** — os pasos dentro da mesma fase que non teñen interdependencias lánzanse simultaneamente cando a marca `parallel` está definida.
- **Tempo límite do paso** — cada paso ten un tempo límite individual (por defecto: a configuración `Ability Timeout`). Un paso que esgota o tempo márcase como `failed` e o plan continúa.

### 4. Seguimento do progreso

Chama a `get_plan_progress` en calquera momento para comprobar o estado da execución:

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

Os usuarios de WP-CLI poden supervisar o progreso con:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Recuperación de erros

Cando un paso falla, o orquestrador comproba se hai un paso **alternativo** definido no plan:

- **Alternativa dispoñible** — inténtase o paso alternativo de inmediato. Se ten éxito, a execución continúa. Se tamén falla, o paso márcase como `failed` e a execución continúa co seguinte paso.
- **Sen alternativa** — o paso márcase como `failed`. Os pasos non críticos omítense; os pasos críticos (marcados como `required: true`) deteñen a fase actual e activan un intento de recuperación a nivel de fase.

O axente informa de todos os fallos no resumo final do plan e pode suxerir pasos de corrección manual para erros irrecuperables.

---

## Capacidades do plan de sitio

### `create_site_plan`

Xera un plan de sitio estruturado a partir dunha descrición de obxectivo en linguaxe natural.

**Parámetros**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Descrición en linguaxe natural do sitio web desexado |
| `style` | string | No | Preferencia de estilo visual: `minimal`, `bold`, `professional`, `playful`. Por defecto: o axente escolle en función do obxectivo |
| `plugins` | array | No | Slugs de plugins para incluír no plan. O orquestrador engade automaticamente os plugins requiridos. |
| `dry_run` | boolean | No | Se é `true`, devolve o JSON do plan sen gardalo nin executalo. Por defecto `false` |

**Devolve** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan`

Comeza a executar un plan de sitio xerado previamente.

**Parámetros**

| Parámetro | Tipo | Obrigatorio | Descrición |
|---|---|---|---|
| `plan_id` | string | Si | ID do plan que se vai executar |
| `auto_install_plugins` | boolean | Non | Se é `true`, instala automaticamente os plugins requiridos sen confirmación. Predeterminado `false` |
| `max_retries` | integer | Non | Número de veces que se tentará de novo un paso fallido antes de continuar. Predeterminado `1` |

**Devolve** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress`

Devolve o estado de execución actual dun plan de sitio.

**Parámetros**

| Parámetro | Tipo | Obrigatorio | Descrición |
|---|---|---|---|
| `plan_id` | string | Si | ID do plan que se vai consultar |

**Devolve** o obxecto de progreso descrito en [Seguimento do progreso](#4-progress-tracking) arriba.

---

### `handle_plan_error`

Resolve manualmente un paso fallido e retoma a execución do plan desde o seguinte paso. Usa isto cando a recuperación automática non foi posible e queres intervir.

**Parámetros**

| Parámetro | Tipo | Obrigatorio | Descrición |
|---|---|---|---|
| `plan_id` | string | Si | ID do plan |
| `step_id` | string | Si | ID do paso fallido |
| `resolution` | string | Si | Un de `skip` (omitir e continuar), `retry` (tentar de novo o paso inmediatamente) ou `mark_done` (tratar como realizado correctamente sen volver executalo) |

**Devolve** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Comparación de v1 e v2

| Funcionalidade | v1 | v2 |
|---|---|---|
| Plans multifase | Non | Si |
| Referencias á saída de pasos (`__ref:`) | Non | Si |
| Descubrimento de plugins | Manual | Automático |
| API de seguimento do progreso | Non | Si |
| Recuperación de erros | Fallar e deter | Alternativa + continuar |
| Execución paralela de pasos | Non | Si (con activación por fase) |
| Comandos de plan de WP-CLI | Non | Si |
| Integración de benchmark | Non | Si (`q-restaurant-website`) |

---

## Comandos de plan de WP-CLI

### `wp gratis-ai-agent plan create`

Xera un plan de sitio a partir dunha descrición de obxectivo.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute`

Executa un plan xerado previamente.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status`

Mostra o progreso actual dun plan en execución ou completado.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list`

Lista todos os plans de sitio (pendentes, en curso e completados).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset`

Restablece un plan fallido a `pending` para que poida volver executarse desde o principio.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
