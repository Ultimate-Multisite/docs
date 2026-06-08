---
title: Référence WP-CLI
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# Référence WP-CLI

Gratis AI Agent fournit la famille de commandes `wp gratis-ai-agent` pour évaluer l'agent, gérer ses capacités et interroger son statut depuis la ligne de commande. Toutes les commandes nécessitent WP-CLI 2.0 ou une version ultérieure.

## Installation

Les commandes WP-CLI sont enregistrées automatiquement lorsque le plugin est activé. Vérifiez avec :

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark`

Exécute la suite de tests (benchmark) des capacités de l'Agent — un ensemble de prompts complexes et multi-étapes qui sollicitent l'ensemble des capacités disponibles. Utilisez ceci pour évaluer la performance du modèle, comparer les fournisseurs d'IA ou valider des packs de capacités avant de déployer en production.

### Synopsis

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Options

| Option | Description |
|---|---|
| `--question=<id>` | Exécute une seule question de benchmark par ID au lieu de la suite complète |
| `--provider=<provider>` | Remplace le fournisseur d'IA configuré pour cette exécution (ex. : `anthropic`, `openai`) |
| `--model=<model>` | Remplace le modèle configuré pour cette exécution (ex. : `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Format de sortie : `table` (par défaut), `json`, `csv` |
| `--save` | Sauvegarde les résultats du benchmark dans la base de données pour une comparaison historique |

### Exemples

Exécuter la suite de tests complète avec le fournisseur et le modèle actuels :

```bash
wp gratis-ai-agent benchmark
```

Exécuter une seule question (`q-restaurant-website`) et afficher le résultat en JSON :

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Exécuter contre un modèle spécifique et sauvegarder les résultats :

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Sortie

Le benchmark affiche une ligne par question avec les colonnes suivantes :

| Colonne | Description |
|---|---|
| `ID` | Identifiant de la question |
| `Description` | Résumé court du scénario de benchmark |
| `Score` | Réussite/échec ou score numérique (0–100) |
| `Abilities Used` | Liste séparée par des virgules des capacités invoquées |
| `Tokens` | Nombre total de tokens consommés |
| `Duration` | Temps écoulé en secondes |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Créer un CPT portfolio avec des tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Construire un site de restaurant complet     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Appliquer un préréglage de thème sombre   100    apply_theme_json_preset      986     4.2s
...
```

### Questions de Benchmark

La suite par défaut comprend :

| ID | Scénario |
|---|---|
| `q-portfolio-site` | Créer un CPT Portfolio avec une taxonomie Catégorie de Projet et enregistrer un modèle de bloc |
| `q-restaurant-website` | Construire un site de restaurant complet avec un CPT menu, un formulaire de réservation et une navigation |
| `q-dark-mode-theme` | Appliquer un préréglage de design sombre et injecter des couleurs de marque |
| `q-nav-builder` | Créer un menu de navigation principal de quatre éléments avec un menu déroulant imbriqué |
| `q-options-roundtrip` | Lire, modifier et restaurer un ensemble d'options WordPress |
| `q-ability-install` | Découvrir et installer le pack de capacités le plus approprié pour un cas d'utilisation décrit |

Des questions supplémentaires peuvent être enregistrées via le filtre `gratis_ai_agent_benchmark_questions`.

---

## `wp gratis-ai-agent abilities`

Gère les capacités et les packs de capacités installés.

### `wp gratis-ai-agent abilities list`

Liste toutes les capacités enregistrées, leur source (noyau ou pack) et leur statut actuel.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Options**

| Option | Description |
|---|---|
| `--format=<format>` | Format de sortie : `table` (par défaut), `json`, `csv` |

**Exemple de sortie**

```
Ability                   Source                          Status
register_post_type        gratis-ai-agent (core)          active
list_post_types           gratis-ai-agent (core)          active
delete_post_type          gratis-ai-agent (core)          active
register_taxonomy         gratis-ai-agent (core)          active
inject_custom_css         gratis-ai-agent (core)          active
apply_theme_json_preset   gratis-ai-agent (core)          active
create_product            gratis-ai-agent-woocommerce     active
```

---

### `wp gratis-ai-agent abilities install`

Télécharge et active un pack de capacités à partir du registre.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Arguments**

| Argument | Description |
|---|---|
| `<slug>` | Slug du plugin du pack de capacités, ex. : `gratis-ai-agent-woocommerce` |

**Exemple**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable`

Désactive une capacité spécifique sans supprimer le pack. Utile pour restreindre le champ d'action de l'agent sur un site donné.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Exemple**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable`

Réactive une capacité précédemment désactivée.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status`

Affiche la configuration actuelle de l'agent et son statut de connectivité.

```bash
wp gratis-ai-agent status
```

**Exemple de sortie**

```
Plugin Version:    1.4.0
AI Provider:       Anthropic
Model:             claude-sonnet-4-6
Provider Status:   Connected
Abilities Loaded:  24
Benchmark Results: 3 saved runs (last: 2026-04-15)
Options Blocklist: 18 entries
```

---

## `wp gratis-ai-agent logs`

Affiche les activités récentes de l'agent dans le journal de débogage.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Options**

| Option | Description |
|---|---|
| `--last=<n>` | Affiche les N dernières entrées de journal. Défaut : `50` |
| `--level=<level>` | Filtrer par niveau : `info`, `warning`, `error` |
| `--ability=<ability>` | Filtrer par nom de capacité |

**Exemple**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset`

Réinitialise l'état de l'agent : efface le CSS injecté, supprime les CPT et taxonomies enregistrés par l'agent, réinitialise les styles globaux et vide le cache des options de l'agent. Ne supprime pas le plugin ni ses paramètres.

```bash
wp gratis-ai-agent reset [--yes]
```

Ajoutez `--yes` pour ignorer l'invite de confirmation.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Codes de sortie

Toutes les commandes sortent avec `0` en cas de succès. Les codes de sortie non nuls :

| Code | Signification |
|---|---|
| `1` | Erreur générale (voir le message d'erreur) |
| `2` | Échec de connectivité du fournisseur |
| `3` | Capacité introuvable |
| `4` | Question de benchmark introuvable |
