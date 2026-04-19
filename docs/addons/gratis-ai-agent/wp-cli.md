---
title: "WP-CLI Reference"
sidebar_position: 3
---

# WP-CLI Reference

Gratis AI Agent ships a `wp gratis-ai-agent` command family for benchmarking the agent, managing abilities, and querying agent status from the command line. All commands require WP-CLI 2.0 or higher.

## Installation

The WP-CLI commands are registered automatically when the plugin is active. Verify with:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark`

Runs the Agent Capabilities benchmark suite — a set of complex, multi-step prompts that exercise the full ability surface. Use this to evaluate model performance, compare AI providers, or validate ability packs before deploying to production.

### Synopsis

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Options

| Option | Description |
|---|---|
| `--question=<id>` | Run a single benchmark question by ID instead of the full suite |
| `--provider=<provider>` | Override the configured AI provider for this run (e.g. `anthropic`, `openai`) |
| `--model=<model>` | Override the configured model for this run (e.g. `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Output format: `table` (default), `json`, `csv` |
| `--save` | Save the benchmark results to the database for historical comparison |

### Examples

Run the full benchmark suite with the current provider and model:

```bash
wp gratis-ai-agent benchmark
```

Run a single question (`q-restaurant-website`) and output as JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Run against a specific model and save results:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Output

The benchmark outputs one row per question with the following columns:

| Column | Description |
|---|---|
| `ID` | Question identifier |
| `Description` | Short summary of the benchmark scenario |
| `Score` | Pass/fail or numeric score (0–100) |
| `Abilities Used` | Comma-separated list of abilities invoked |
| `Tokens` | Total tokens consumed |
| `Duration` | Wall-clock time in seconds |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Benchmark Questions

The default suite includes:

| ID | Scenario |
|---|---|
| `q-portfolio-site` | Create a Portfolio CPT with a Project Category taxonomy and register a block pattern |
| `q-restaurant-website` | Build a full restaurant website with a menu CPT, booking form, and navigation |
| `q-dark-mode-theme` | Apply a dark-mode design preset and inject brand colours |
| `q-nav-builder` | Create a four-item primary navigation menu with a nested dropdown |
| `q-options-roundtrip` | Read, modify, and restore a set of WordPress options |
| `q-ability-install` | Discover and install the most appropriate ability pack for a described use case |

Additional questions can be registered via the `gratis_ai_agent_benchmark_questions` filter.

---

## `wp gratis-ai-agent abilities`

Manages installed abilities and ability packs.

### `wp gratis-ai-agent abilities list`

Lists all registered abilities, their source (core or pack), and their current status.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Options**

| Option | Description |
|---|---|
| `--format=<format>` | Output format: `table` (default), `json`, `csv` |

**Example output**

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

Downloads and activates an ability pack from the registry.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Arguments**

| Argument | Description |
|---|---|
| `<slug>` | Plugin slug of the ability pack, e.g. `gratis-ai-agent-woocommerce` |

**Example**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable`

Disables a specific ability without removing the pack. Useful for restricting the agent's scope on a given site.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Example**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable`

Re-enables a previously disabled ability.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status`

Displays the current agent configuration and connectivity status.

```bash
wp gratis-ai-agent status
```

**Example output**

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

Displays recent agent activity from the debug log.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Options**

| Option | Description |
|---|---|
| `--last=<n>` | Show the last N log entries. Default `50` |
| `--level=<level>` | Filter by level: `info`, `warning`, `error` |
| `--ability=<ability>` | Filter by ability name |

**Example**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset`

Resets agent state: clears injected CSS, removes agent-registered CPTs and taxonomies, resets global styles, and empties the agent's options cache. Does not remove the plugin or its settings.

```bash
wp gratis-ai-agent reset [--yes]
```

Add `--yes` to skip the confirmation prompt.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Exit Codes

All commands exit `0` on success. Non-zero exit codes:

| Code | Meaning |
|---|---|
| `1` | General error (see error message) |
| `2` | Provider connectivity failure |
| `3` | Ability not found |
| `4` | Benchmark question not found |
