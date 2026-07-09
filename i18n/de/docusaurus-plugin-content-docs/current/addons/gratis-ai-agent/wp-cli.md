---
title: WP-CLI Reference
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI Referenz {#wp-cli-reference}

Gratis AI Agent bringt eine Kommando-Familie `wp gratis-ai-agent` mit, mit der Sie den Agenten testen, Fähigkeiten verwalten und den Status des Agenten direkt über die Kommandozeile abfragen können. Alle Befehle erfordern WP-CLI 2.0 oder höher.

## Installation {#installation}

Die WP-CLI-Befehle werden automatisch registriert, sobald das Plugin aktiviert ist. Überprüfen Sie dies mit:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Führt die Agent Capabilities Benchmark Suite aus – ein Set komplexer, mehrstufiger Prompts, die die gesamte Bandbreite der Fähigkeiten testen. Nutzen Sie dies, um die Modellleistung zu bewerten, AI-Anbieter zu vergleichen oder Fähigkeitspakete zu validieren, bevor Sie sie in die Produktion einsetzen.

### Synopsis {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Optionen {#options}

| Option | Beschreibung |
|---|---|
| `--question=<id>` | Führt anstelle der gesamten Suite nur eine einzelne Benchmark-Frage anhand ihrer ID aus |
| `--provider=<provider>` | Überschreibt den konfigurierten AI-Anbieter für diesen Lauf (z. B. `anthropic`, `openai`) |
| `--model=<model>` | Überschreibt das konfigurierten Modell für diesen Lauf (z. B. `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Ausgabeformat: `table` (Standard), `json`, `csv` |
| `--save` | Speichert die Benchmark-Ergebnisse in der Datenbank für den historischen Vergleich |

### Beispiele {#examples}

Führt die gesamte Benchmark-Suite mit dem aktuellen Anbieter und Modell aus:

```bash
wp gratis-ai-agent benchmark
```

Führt eine einzelne Frage (`q-restaurant-website`) aus und gibt die Ausgabe als JSON aus:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Führt gegen ein spezifisches Modell aus und speichert die Ergebnisse:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Ausgabe {#output}

Die Benchmark gibt pro Frage eine Zeile mit den folgenden Spalten aus:

| Spalte | Beschreibung |
|---|---|
| `ID` | Fragen-Bezeichner |
| `Description` | Kurze Zusammenfassung des Benchmark-Szenarios |
| `Score` | Bestehens-/Misserfolgs- oder numerischer Score (0–100) |
| `Abilities Used` | Komma-separierte Liste der aufgerufenen Fähigkeiten |
| `Tokens` | Gesamtverbrauchter Token-Betrag |
| `Duration` | Zeit in Sekunden (Wall-Clock Time) |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Benchmark-Fragen {#benchmark-questions}

Die Standard-Suite enthält:

| ID | Szenario |
|---|---|
| `q-portfolio-site` | Erstellt einen Portfolio CPT mit einer Project Category Taxonomie und registriert ein Block-Pattern |
| `q-restaurant-website` | Baut eine vollständige Restaurant-Website mit einem Menü CPT, einem Buchungsformular und einer Navigation |
| `q-dark-mode-theme` | Wendet ein Dark-Mode-Design-Preset an und injiziert Markenfarben |
| `q-nav-builder` | Erstellt ein viergliedriges Hauptnavigationsmenü mit einem verschachtelten Dropdown |
| `q-options-roundtrip` | Liest, modifiziert und stellt einen Satz von WordPress-Optionen wieder her |
| `q-ability-install` | Entdeckt und installiert das am besten geeignete Fähigkeitspaket für einen beschriebenen Anwendungsfall |

Zusätzliche Fragen können über den Filter `gratis_ai_agent_benchmark_questions` registriert werden.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Verwaltet installierte Fähigkeiten und Fähigkeitspakete.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Listet alle registrierten Fähigkeiten, deren Quelle (Core oder Pack) und deren aktuellen Status auf.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Optionen**

| Option | Beschreibung |
|---|---|
| `--format=<format>` | Ausgabeformat: `table` (Standard), `json`, `csv` |

**Beispielausgabe**

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

### `wp gratis-ai-agent abilities install` {#wp-gratis-ai-agent-abilities-install}

Lädt und aktiviert ein Fähigkeitspaket aus dem Register.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Argumente**

| Argument | Beschreibung |
|---|---|
| `<slug>` | Plugin-Slug des Fähigkeitspakets, z. B. `gratis-ai-agent-woocommerce` |

**Beispiel**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Deaktiviert eine bestimmte Fähigkeit, ohne das Paket zu entfernen. Nützlich, um den Umfang des Agenten auf einer bestimmten Website einzuschränken.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Beispiel**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

Aktiviert eine zuvor deaktivierte Fähigkeit wieder.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Zeigt die aktuelle Agentenkonfiguration und den Verbindungsstatus an.

```bash
wp gratis-ai-agent status
```

**Beispielausgabe**

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

## `wp gratis-ai-agent logs` {#wp-gratis-ai-agent-logs}

Zeigt die jüngsten Agentenaktivitäten aus dem Debug-Log.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Optionen**

| Option | Beschreibung |
|---|---|
| `--last=<n>` | Zeigt die letzten N Log-Einträge. Standard: `50` |
| `--level=<level>` | Filtert nach Level: `info`, `warning`, `error` |
| `--ability=<ability>` | Filtert nach Fähigkeitsname |

**Beispiel**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Setzt den Agentenzustand zurück: löscht injiziertes CSS, entfernt vom Agenten registrierte CPTs und Taxonomien, setzt globale Styles zurück und leert den Options-Cache des Agenten. Entfernt das Plugin oder seine Einstellungen nicht.

```bash
wp gratis-ai-agent reset [--yes]
```

Fügen Sie `--yes` hinzu, um die Bestätigungsaufforderung zu überspringen.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Exit Codes {#exit-codes}

Alle Befehle verlassen bei Erfolg den Status `0`. Nicht-null Exit Codes:

| Code | Bedeutung |
|---|---|
| `1` | Allgemeiner Fehler (siehe Fehlermeldung) |
| `2` | Verbindungsfehler des Anbieters |
| `3` | Fähigkeit nicht gefunden |
| `4` | Benchmark-Frage nicht gefunden |
