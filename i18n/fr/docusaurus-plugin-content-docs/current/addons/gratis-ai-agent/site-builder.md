---
title: Orchestration du Site Builder v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Orchestration du Site Builder v2

Site Builder Orchestration v2 (introduit avec Gratis AI Agent v1.4.0) est le moteur qui alimente la création de sites web en plusieurs étapes. Lorsque vous demandez à l'agent de « créer un site de restaurant » ou de « réaliser un portfolio avec un blog », l'orchestrateur décompose cet objectif général en un **plan** structuré, découvre les plugins nécessaires pour le réaliser, exécute chaque étape séquentiellement, suit la progression et se rétablit de manière autonome en cas d'erreur.

---

## Comment ça fonctionne

### 1. Génération du plan

Lorsque l'agent reçoit une instruction de création de site, il appelle l'ability `create_site_plan` pour produire un **plan de site** au format JSON. Ce plan décrit :

- **Objectif** — ce que le site final doit faire
- **Phases** — groupes d'étapes ordonnés (ex. : _Configuration_, _Types de contenu_, _Design_, _Contenu_)
- **Étapes** — appels d'ability individuels au sein de chaque phase
- **Exigences de plugins** — les plugins qui doivent être actifs pour que certaines étapes puissent s'exécuter
- **Plans de secours (Fallbacks)** — étapes alternatives si une étape principale échoue

**Exemple de plan (abrégé)**

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

### 2. Découverte des plugins

Avant le début de l'exécution, l'orchestrateur analyse les `plugin_requirements` du plan et vérifie quels plugins sont déjà actifs. Pour les plugins manquants, il :

1. Recherche dans le registre via `recommend_plugin` la meilleure correspondance
2. Demande à l'agent de confirmer la recommandation
3. Déclenche l'installation si l'approbation est donnée (ou si l'auto-installation est activée dans les paramètres)

Les échecs de découverte de plugins ne sont pas critiques : l'orchestrateur marque les étapes affectées comme `skipped` (sautées) et continue avec le reste du plan.

### 3. Exécution du plan

L'orchestrateur appelle `execute_site_plan` avec l'ID du plan. L'exécution se déroule phase par phase, étape par étape :

- **Références d'étapes** (`__ref:` préfixe) — les étapes peuvent faire référence aux résultats d'étapes précédentes. Dans l'exemple ci-dessus, `__ref:create_menu.menu_id` est résolu à la `menu_id` retournée par l'étape `create_menu`.
- **Étapes parallèles** — les étapes au sein de la même phase qui n'ont pas de dépendances entre elles sont exécutées simultanément lorsque le drapeau `parallel` est défini.
- **Délai d'étape** — chaque étape dispose d'un délai individuel (par défaut : le paramètre `Ability Timeout`). Une étape qui dépasse son délai est marquée `failed` (échouée) et le plan continue.

### 4. Suivi de la progression

Appelez `get_plan_progress` à tout moment pour vérifier l'état d'exécution :

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

Les utilisateurs de WP-CLI peuvent suivre la progression avec :

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Récupération des erreurs

Lorsqu'une étape échoue, l'orchestrateur vérifie s'il existe un plan de secours (fallback) défini dans le plan :

- **Plan de secours disponible** — le plan de secours est tenté immédiatement. S'il réussit, l'exécution continue. S'il échoue également, l'étape est marquée `failed` et l'exécution passe à l'étape suivante.
- **Pas de plan de secours** — l'étape est marquée `failed`. Les étapes non critiques sont sautées ; les étapes critiques (marquées `required: true`) arrêtent la phase en cours et déclenchent une tentative de récupération au niveau de la phase.

L'agent signale tous les échecs dans le résumé final du plan et peut suggérer des étapes de remédiation manuelles pour les erreurs irrécupérables.

---

## Abilities du Plan de Site

### `create_site_plan`

Génère un plan de site structuré à partir d'une description d'objectif en langage naturel.

**Paramètres**

| Paramètre | Type | Requis | Description |
|---|---|---|---|
| `goal` | string | Oui | Description en langage naturel du site web souhaité |
| `style` | string | Non | Préférence de style visuel : `minimal`, `bold`, `professional`, `playful`. Par défaut : l'agent choisit en fonction de l'objectif |
| `plugins` | array | Non | Slugs de plugins à inclure dans le plan. L'orchestrateur ajoute automatiquement les plugins requis. |
| `dry_run` | boolean | Non | Si `true`, retourne le JSON du plan sans l'enregistrer ni l'exécuter. Par défaut `false` |

**Retourne** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan`

Démarre l'exécution d'un plan de site précédemment généré.

**Paramètres**

| Paramètre | Type | Requis | Description |
|---|---|---|---|
| `plan_id` | string | Oui | ID du plan à exécuter |
| `auto_install_plugins` | boolean | Non | Si `true`, installe automatiquement les plugins requis sans confirmation. Par défaut `false` |
| `max_retries` | integer | Non | Nombre de tentatives pour une étape échouée avant de passer à la suivante. Par défaut `1` |

**Retourne** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress`

Retourne l'état d'exécution actuel d'un plan de site.

**Paramètres**

| Paramètre | Type | Requis | Description |
|---|---|---|---|
| `plan_id` | string | Oui | ID du plan à interroger |

**Retourne** l'objet de progression décrit dans [Suivi de la progression](#4-suivi-de-la-progression) ci-dessus.

---

### `handle_plan_error`

Résout manuellement une étape échouée et reprend l'exécution du plan à partir de l'étape suivante. Utilisez ceci lorsque la récupération automatique n'était pas possible et que vous souhaitez intervenir.

**Paramètres**

| Paramètre | Type | Requis | Description |
|---|---|---|---|
| `plan_id` | string | Oui | ID du plan |
| `step_id` | string | Oui | ID de l'étape échouée |
| `resolution` | string | Oui | L'une des valeurs : `skip` (sauter et continuer), `retry` (réessayer l'étape immédiatement), ou `mark_done` (traiter comme réussi sans réexécuter) |

**Retourne** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Comparaison v1 et v2

| Fonctionnalité | v1 | v2 |
|---|---|---|
| Plans multi-phases | Non | Oui |
| Références de sortie d'étapes (`__ref:`) | Non | Oui |
| Découverte de plugins | Manuelle | Automatique |
| API de suivi de progression | Non | Oui |
| Récupération des erreurs | Échec et arrêt | Plan de secours + continuation |
| Exécution d'étapes parallèles | Non | Oui (optionnel par phase) |
| Commandes de plan WP-CLI | Non | Oui |
| Intégration de benchmark | Non | Oui (`q-restaurant-website`) |

---

## Commandes de Plan WP-CLI

### `wp gratis-ai-agent plan create`

Génère un plan de site à partir d'une description d'objectif.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute`

Exécute un plan précédemment généré.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status`

Affiche la progression actuelle d'un plan en cours d'exécution ou terminé.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list`

Liste tous les plans de site (en attente, en cours, et terminés).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset`

Réinitialise un plan échoué à `pending` afin qu'il puisse être réexécuté depuis le début.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
