---
title: Orquestació de Site Builder v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder Orchestration v2 {#site-builder-orchestration-v2}

Site Builder Orchestration v2 (introduït en Gratis AI Agent v1.4.0) és el motor que alimenta la creació de llocs web amb múltiples passos. Quan demanes a l'agent que "crei un lloc web de restaurant" o "crei un portefoli amb un blog", l'orquestador desglossaria aquest objectiu de nivell superior en un **pla** estructurat, descobreix els plugins necessaris per complir-lo, executa cada pas en seqüència, fa un seguiment del progrés i es recupera d'errors de manera autònoma.

---

## Com funciona {#how-it-works}

### 1. Generació del pla {#1-plan-generation}

Quan l'agent rebre una instrucció per construir un lloc web, crida a la capacitat `create_site_plan` per produir un **pla de site** en format JSON. El pla descriu:

- **Objectiu** — què ha de fer el lloc web acabat
- **Fases** — grups d'etapes ordenades (per exemple, _Setup_, _Tipus de contingut_, _Disseny_, _Contingut_)
- **Etapes** — crides de capacitat individuals dins de cada fase
- **Requisits de plugins** — plugins que han de ser actius perquè algunes etapes es puguin executar
- **Fallback** — etapes alternatives si una etapa principal falla

**Exemple de pla (abreviat)**

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

### 2. Descobriment de plugins {#2-plugin-discovery}

Abans de començar l'execució, l'orquestador escaneja els `plugin_requirements` del pla i comprueba quins plugins ja estan actius. Per als plugins faltants, fa:

1. Busca el registre utilitzant `recommend_plugin` per trobar la millor coincidència
2. Sol·licita a l'agent que confirmi la recomanació
3. Activa l'instal·lació si s'aprova (o si l'instal·lació automàtica està activada a la configuració)

Els fallos en el descobriment de plugins no són fatals: l'orquestador marca les etapes afectades com a `skipped` (saltades) i continua amb el reste del pla.

### 3. Execució del pla {#3-plan-execution}

L'orquestador crida a `execute_site_plan` amb l'ID del pla. L'execució procedeix fase per fase, etapa per etapa:

- **Referències d'etapes** (`__ref:` prefix) — les etapes poden referenciar els resultats d'etapes anteriors. A l'exemple anterior, `__ref:create_menu.menu_id` es resolveix al `menu_id` retornat per l'etapa `create_menu`.
- **Etapes paral·leles** — les etapes dins de la mateixa fase que no tenen interdependències es desplaçaixen de manera concurrents quan s'estableix la bandera `parallel`.
- **Expiració de l'etapa** — cada etapa té una expiració individual (per defecte: la configuració `Ability Timeout`). Una etapa que caduca es marca com a `failed` (fallida) i el pla continua.

### 4. Seguiment del progrés {#4-progress-tracking}

Truca `get_plan_progress` en qualsevol moment per comprovar l'estat de l'execució:

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

Els usuaris de WP-CLI poden monitoritzar el progrés amb:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Recuperació d'errors {#5-error-recovery}

Quan una etapa falla, l'orquestador busca una etapa de **fallback** definida al pla:

- **Fallback disponible** — es intenta immediatament l'etapa de fallback. Si té èxit, l'execució continua. Si també falla, l'etapa es marca com a `failed` i l'execució continua amb la propera etapa.
- **Sense fallback** — l'etapa es marca com a `failed`. Les etapes no crítiques es salten; les etapes crítiques (marquées `required: true`) detenen la fase actual i desencadenen un intent de recuperació a nivell de fase.

L'agent reporta tots els fallos en el resum final del pla i pot suggerir passos de remediació manual per errors irrecuperables.

---

## Capacitats de Pla (Site Plan Abilities) {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

Genera un pla de site estructurat a partir d'una descripció d'objectiu en llenguatge natural.

**Paràmetres**

| Paràmetre | Tipus | Requerit | Descripció |
|---|---|---|---|
| `goal` | string | Sí | Descripció en llenguatge natural del lloc web desitjat |
| `style` | string | No | Preferència de estil visual: `minimal`, `bold`, `professional`, `playful`. Default: l'agent tria basat en l'objectiu |
| `plugins` | array | No | Slugs de plugins per incloure al pla. L'orquestador afegeix els plugins requerits automàticament. |
| `dry_run` | boolean | No | Si és `true`, retorna el pla JSON sense salvar-lo ni executar-lo. Default `false` |

**Retorn** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

Comença a executar un pla de site generat prèviament.

**Paràmetres**

| Paràmetre | Tipus | Requerit | Descripció |
|---|---|---|---|
| `plan_id` | string | Sí | ID del pla a executar |
| `auto_install_plugins` | boolean | No | Si és `true`, instal·la els plugins requerits automàticament sense confirmació. Default `false` |
| `max_retries` | integer | No | Nombre de vegades per intentar una etapa fallida abans de passar. Default `1` |

**Retorn** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

Retorna l'estat d'execució actual d'un pla de site.

**Paràmetres**

| Paràmetre | Tipus | Requerit | Descripció |
|---|---|---|---|
| `plan_id` | string | Sí | ID del pla a consultar |

**Retorn** l'objecte de progrés descrit en [Progress Tracking](#4-progress-tracking) anterior.

---

### `handle_plan_error` {#handleplanerror}

Resoluciona manualment una etapa fallida i rebona l'execució del pla des de la propera etapa. Utilitza això quan la recuperació automàtica no va ser possible i vols intervenir.

**Paràmetres**

| Paràmetre | Tipus | Requerit | Descripció |
|---|---|---|---|
| `plan_id` | string | Sí | ID del pla |
| `step_id` | string | Sí | ID de l'etapa fallida |
| `resolution` | string | Sí | Un dels valors `skip` (saltar i continuar), `retry` (reintentar l'etapa immediatament), o `mark_done` (tritat com a èxit sense reexecutar) |

**Retorn** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Comparativa v1 i v2 {#comparing-v1-and-v2}

| Funcionalitat | v1 | v2 |
|---|---|---|
| Plans amb múltiples fases | No | Sí |
| Referències de resultats d'etapes (`__ref:`) | No | Sí |
| Descobriment de plugins | Manual | Automàtic |
| API de seguiment de progrés | No | Sí |
| Recuperació d'errors | Fallir i parar | Fallback + continuar |
| Execució d'etapes paral·leles | No | Sí (opcional per fase) |
| Comandos de pla de WP-CLI | No | Sí |
| Integració de benchmarks | No | Sí (`q-restaurant-website`) |

---

## Comandos de Pla de WP-CLI {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

Genera un pla de site a partir d'una descripció d'objectiu.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

Executa un pla generat prèviament.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

Mostra el progrés actual d'un pla en execució o completat.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

Lista tots els plans de site (pendents, en progrés i completats).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

Reseteja un pla fallit a `pending` perquè es pugui reexecutar des de l'inici.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
