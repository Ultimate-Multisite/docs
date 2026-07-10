---
title: Site Builder Orchestration v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder Orchestration v2 {#site-builder-orchestration-v2}

Site Builder Orchestration v2 (eingeführt in Gratis AI Agent v1.4.0) ist die Engine, die die mehrstufige Website-Erstellung antreibt. Wenn Sie dem Agenten beispielsweise sagen „Baue eine Restaurant-Website“ oder „Erstelle ein Portfolio mit Blog“, zerlegt der Orchestrator dieses übergeordnete Ziel in einen strukturierten **Plan**, findet die benötigten Plugins, führt jeden Schritt nacheinander aus, verfolgt den Fortschritt und kann Fehler autonom beheben.

---

## Wie es funktioniert {#how-it-works}

### 1. Plan-Generierung {#1-plan-generation}

Wenn der Agent eine Anweisung zur Website-Erstellung erhält, ruft er die Fähigkeit `create_site_plan` auf, um einen JSON **Site Plan** zu erstellen. Der Plan beschreibt:

- **Goal** — was die fertige Website leisten soll
- **Phases** — geordnete Gruppen von Schritten (z. B. _Setup_, _Content Types_, _Design_, _Content_)
- **Steps** — einzelne Ability-Aufrufe innerhalb jeder Phase
- **Plugin requirements** — Plugins, die aktiv sein müssen, damit bestimmte Schritte ausgeführt werden können
- **Fallbacks** — alternative Schritte, falls ein primärer Schritt fehlschlägt

**Beispielplan (gekürzt)**

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

### 2. Plugin Discovery {#2-plugin-discovery}

Bevor mit der Ausführung begonnen wird, scannt der Orchestrator die `plugin_requirements` des Plans und prüft, welche Plugins bereits aktiv sind. Bei fehlenden Plugins:

1.  Durchsucht das Register über `recommend_plugin`, um die beste Übereinstimmung zu finden
2.  Bittet den Agenten um Bestätigung der Empfehlung
3.  Löst die Installation aus, falls zugestimmt wird (oder wenn die automatische Installation in den Einstellungen aktiviert ist)

Fehler bei der Plugin-Erkennung sind nicht kritisch – der Orchestrator markiert die betroffenen Schritte als `skipped` und fährt mit dem Rest des Plans fort.

### 3. Plan Execution {#3-plan-execution}

Der Orchestrator ruft `execute_site_plan` mit der Plan-ID auf. Die Ausführung erfolgt Phase für Phase, Schritt für Schritt:

- **Step references** (`__ref:` Präfix) — Schritte können auf die Ergebnisse vorheriger Schritte verweisen. Im obigen Beispiel wird `__ref:create_menu.menu_id` mit der `menu_id` aufgelöst, die vom Schritt `create_menu` zurückgegeben wird.
- **Parallel steps** — Schritte innerhalb derselben Phase, die keine Abhängigkeiten voneinander haben, werden gleichzeitig ausgeführt, wenn das Flag `parallel` gesetzt ist.
- **Step timeout** — Jeder Schritt hat einen eigenen Timeout (Standard: die Einstellung `Ability Timeout`). Ein abgelaufener Schritt wird als `failed` markiert und der Plan wird fortgesetzt.

### 4. Progress Tracking {#4-progress-tracking}

Rufen Sie jederzeit `get_plan_progress` auf, um den Ausführungsstatus zu überprüfen:

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

WP-CLI-Benutzer können den Fortschritt mit folgendem Befehl überwachen:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Error Recovery {#5-error-recovery}

Wenn ein Schritt fehlschlägt, prüft der Orchestrator auf einen **Fallback**-Schritt, der im Plan definiert ist:

- **Fallback available** — Der Fallback-Schritt wird sofort versucht. Wenn er erfolgreich ist, wird die Ausführung fortgesetzt. Schlägt er ebenfalls fehl, wird der Schritt als `failed` markiert und die Ausführung geht mit dem nächsten Schritt weiter.
- **No fallback** — Der Schritt wird als `failed` markiert. Nicht kritische Schritte werden übersprungen; kritische Schritte (markiert mit `required: true`) stoppen die aktuelle Phase und lösen einen Wiederherstellungsversuch auf Phasenebene aus.

Der Agent meldet alle Fehler in der abschließenden Plan-Zusammenfassung und kann manuelle Behebungsmaßnahmen für nicht wiederherstellbare Fehler vorschlagen.

---

## Site Plan Abilities {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

Generiert einen strukturierten Site Plan aus einer Beschreibung des Ziels in natürlicher Sprache.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Natürliche Sprachbeschreibung der gewünschten Website |
| `style` | string | No | Visueller Stil-Präferenz: `minimal`, `bold`, `professional`, `playful`. Standard: Der Agent wählt basierend auf dem Ziel |
| `plugins` | array | No | Plugin-Slugs, die in den Plan aufgenommen werden sollen. Der Orchestrator fügt erforderliche Plugins automatisch hinzu. |
| `dry_run` | boolean | No | Wenn `true`, wird der Plan-JSON zurückgegeben, ohne ihn zu speichern oder auszuführen. Standard `false` |

**Returns** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

Beginnt mit der Ausführung eines zuvor erstellten Site Plans.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | ID des Plans zur Ausführung |
| `auto_install_plugins` | boolean | No | Wenn `true`, werden erforderliche Plugins automatisch ohne Bestätigung installiert. Standard `false` |
| `max_retries` | integer | No | Anzahl der Versuche, einen fehlgeschlagenen Schritt zu wiederholen, bevor fortgefahren wird. Standard `1` |

**Returns** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

Gibt den aktuellen Ausführungsstatus eines Site Plans zurück.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | Plan-ID zur Abfrage |

**Returns** das Fortschrittsobjekt, das oben unter [Progress Tracking](#4-progress-tracking) beschrieben ist.

---

### `handle_plan_error` {#handleplanerror}

Behebt manuell einen fehlgeschlagenen Schritt und setzt die Plan-Ausführung vom nächsten Schritt fort. Verwenden Sie dies, wenn eine automatische Wiederherstellung nicht möglich war und Sie eingreifen möchten.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | Plan-ID |
| `step_id` | string | Yes | ID des fehlgeschlagenen Schritts |
| `resolution` | string | Yes | Eines von `skip` (überspringen und fortfahren), `retry` (Schritt sofort wiederholen) oder `mark_done` (als erfolgreich behandeln, ohne erneut auszuführen) |

**Returns** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Vergleich v1 und v2 {#comparing-v1-and-v2}

| Feature | v1 | v2 |
|---|---|---|
| Multi-phase plans | Nein | Ja |
| Step output references (`__ref:`) | Nein | Ja |
| Plugin discovery | Manuell | Automatisch |
| Progress tracking API | Nein | Ja |
| Error recovery | Fehler und Stopp | Fallback + Fortfahren |
| Parallel step execution | Nein | Ja (optional pro Phase) |
| WP-CLI plan commands | Nein | Ja |
| Benchmark integration | Nein | Ja (`q-restaurant-website`) |

---

## WP-CLI Plan Commands {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

Generiert einen Site Plan aus einer Zielbeschreibung.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

Führt einen zuvor erstellten Plan aus.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

Zeigt den aktuellen Fortschritt für einen laufenden oder abgeschlossenen Plan.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

Listet alle Site Plans (ausstehend, in Bearbeitung und abgeschlossen).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

Setzt einen fehlgeschlagenen Plan auf `pending` zurück, damit er von vorne ausgeführt werden kann.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
