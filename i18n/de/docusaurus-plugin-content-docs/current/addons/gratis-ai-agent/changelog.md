---
title: Änderungsprotokoll
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Changelog

## 1.9.0 — Veröffentlicht am 2026-04-28 {#190--released-on-2026-04-28}

### Neu {#new}

- **`create_contact_form` Ability** — erstellt ein Kontaktformular mithilfe des aktiven Formular-Plugins (Contact Form 7, WPForms, Fluent Forms oder Gravity Forms) und gibt einen Shortcode zurück, der in jedem Beitrag oder jeder Seite eingebettet werden kann.
- **`set_featured_image` Ability** — weist einem Beitrag oder einer Seite ein Beziehungsbild (Featured Image) anhand einer bestehenden Media Library Attachment ID oder einer Remote-URL zu; importiert das Bild automatisch, wenn eine URL angegeben wird.
- **`batch_create_posts` Ability** — erstellt mehrere Beiträge in einem einzigen Ability-Aufruf. Unterstützt dieselben Parameter wie `create_post`, meldet den Erfolg/Misserfolg pro Beitrag und verfügt über einen optionalen Modus `stop_on_error`.
- **`page_template` Parameter** — hinzugefügt zu `create_post` und `update_post`. Weist ein PHP-Seiten-Template-File (z. B. `page-full-width.php`) beim Erstellen oder Aktualisieren zu. Übergeben Sie bei `update_post` einen leeren String, um zum Theme-Standard zurückzukehren.
- **Client-seitige Screenshot Abilities** — `capture_screenshot`, `compare_screenshots` und `review_page_design`. Erfasst vollständige oder Viewport-Screenshots von Live-Seiten über einen serverseitigen Headless Browser, vergleicht zwei Screenshots und liefert eine KI-generierte Design-Überprüfung, die Layout, Typografie, Farbe und Barrierefreiheit abdeckt.
- **Fünf integrierte Agenten** — Content Writer, Site Builder, Design Studio, Plugin Manager und Support Assistant. Jeder Agent verfügt über einen eigenen Satz von Tools, einen zugeschnittenen System-Prompt und Startvorschläge. Wechselbar über den neuen **Agent Picker** im Chat-Header. Details zu [Built-in Agents](../../user-guide/configuration/built-in-agents) ansehen.
- **Feature Flags** — neuer Tab **Einstellungen → Feature Flags** mit Zugriffskontroll-Schaltern (auf Administratoren beschränken, auf Netzwerkadministratoren beschränken, Abonnentenzugriff, für Nicht-Mitglieder deaktivieren) und Branding-Optionen (Fußzeilen-Attribution ausblenden, benutzerdefinierten Agentennamen, Agent Picker ausblenden, Site Icon als Chat-Avatar verwenden). Details zu [Gratis AI Agent Settings](../../user-guide/administration/gratis-ai-agent-settings) ansehen.
- **Letzte Sitzung wiederherstellen** — das Chat-Panel lädt nun bei Seitenaufruf und beim Öffnen des Widgets automatisch das letzte Gespräch, sodass der Kontext bei der Navigation zwischen Seiten nie verloren geht.
- **Plugin-Aktionslinks** — schnelle Links zu Einstellungen und dem Abilities Registry erscheinen nun auf dem WordPress-Bildschirm **Plugins → Installierte Plugins** unterhalb der Plugin-Beschreibung.

### Verbessert {#improved}

- **Image Source Retry** — der Agent versucht nun alle konfigurierten kostenlosen Bildquellen erneut, bevor er bei einem Download-Fehler auf ein KI-generiertes Bild zurückgreift.
- **Model Info Panel** — immer im Chat-Header sichtbar; wird nicht mehr nach der ersten Nachricht ausgeblendet.
- **Auto-Scroll Verhalten** — das Auto-Scrollen pausiert, wenn der Benutzer nach oben scrollt, um zu lesen; ein schwebender **Zum Ende scrollen**-Button erscheint und verschwindet automatisch, wenn der Benutzer die neueste Nachricht erreicht.
- **Agent Picker UI** — neu gestaltet als Form-Tabelle-Overlay mit Icons pro Agent, was die Identifizierung und den Wechsel der Agenten auf einen Blick erleichtert.
- **Lazy-loaded JS Chunks** — das anfängliche JavaScript-Bundle des Chat-Widgets wird nun in lazy-loaded Chunks aufgeteilt, wodurch die anfänglichen Bundle-Größen um 75–90 % reduziert werden.
- **Chat Widget Redesign** — ein vereinheitlichtes KI-Icon ersetzt das vorherige benutzerdefinierte Avatar; dies ist konsistent mit dem integrierten Agenten-System.
- **URL Linkification** — URLs, die in Systemnachrichten und Fehler-Nachrichtenblasen erscheinen, werden nun als klickbare Links gerendert.

### Behoben {#fixed}

- **Ability Discoverability** — Beschreibungen, System-Prompt-Referenzen und Namespace-Ausrichtungen korrigiert, sodass alle Abilities zuverlässig in der Tool-Liste des Agenten erscheinen.
- **Providers Cache** — Provider werden nun site-weit über einen Versionszähler gecached, wodurch Probleme mit veralteten Providern in Multisite-Netzwerken verhindert werden.
- **`ability_invalid_output`** — behoben in 12 Ability-Handlern; alle geben nun korrekt strukturierte JSON-Antworten zurück.
- **`pending_client_tool_calls` Pipeline** — end-to-end verbunden, sodass clientseitige Tool-Aufrufe korrekt abgeschlossen werden und die Ergebnisse an das Modell zurückgegeben werden.
- **History Drawer** — nicht rückgängig machbare Änderungen werden von der Liste der Wiederherstellungen ausgeschlossen; der Link **Vollständige Historie anzeigen** funktioniert nun korrekt.
- **Änderungen/Rückgängig-System** — fünf separate Bugs behoben und unter der neuen Admin-Oberfläche zusammengefasst.
- **Save Settings Toast** — die Snackbar-Benachrichtigung erscheint nun zuverlässig nach dem Klicken auf **Einstellungen speichern**.
- **Trash Kontextmenü** — Option **Permanent löschen** hinzugefügt, sodass Elemente hart gelöscht werden können, ohne die Papierkorb-Ansicht zu verlassen.
- **Bearbeiten & erneut senden** — Das Klicken auf das Bearbeiten-Icon betritt nun den Bearbeitungsmodus nur für die geklickte Nachricht und nicht für alle Nachrichten im Thread.
- **Chat Layout Höhe** — das Chat-Panel passt seine Höhe an, wenn Plugin-injiziertes Content (Admin-Benachrichtigungen, Banner) über der Seite erscheint, wodurch verhindert wird, dass der Eingabebereich vom Bildschirm verschoben wird.

---

## 1.4.0 — Veröffentlicht am 2026-04-09 {#140--released-on-2026-04-09}

### Neu {#new-1}

- **WP-CLI Benchmark Command** (`wp gratis-ai-agent benchmark`) — führt die Agent Capabilities v1 Benchmark Suite von der Kommandozeile aus für CI-Pipelines und Modell-Evaluierungs-Workflows. Unterstützt Durchläufe pro Frage, Provider-/Model-Überschreibungen und JSON-/CSV-Ausgabe.
- **Agent Capabilities v1 Benchmark Suite** — ein strukturiertes Set komplexer, mehrstufiger Prompts, die die gesamte Ability-Oberfläche testen, inklusive Scoring und Token-/Dauer-Berichterstattung.
- **Custom Post Type Abilities** — `register_post_type`, `list_post_types`, `delete_post_type`. Registrierungen bleiben über Neustarts hinweg über die Options-Tabelle erhalten.
- **Custom Taxonomy Abilities** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Unterstützt hierarchische und flache Taxonomien mit optionalen Rewrite-Slugs.
- **Design System Abilities** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Beinhaltet fünf kuratierte Presets: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Global Styles Abilities** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Liest und schreibt theme.json-Werte über die WordPress Global Styles API.
- **Navigation Menu Management Ability** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Unterstützt verschachtelte Menüs und die Zuweisung zu Theme-Standorten.
- **Options Management Ability** — `get_option`, `set_option`, `delete_option`, `list_options`. Beinhaltet eine integrierte Sicherheits-Blacklist, die kritische WordPress-Optionen vor der Änderung schützt.
- **Installable Abilities Registry** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Entdecken und aktivieren Ability-Pakete, die als WordPress-Plugins verteilt werden.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Mehrphasige Site-Build-Pläne mit Plugin-Entdeckung, Schritt-Output-Referenzen, Fortschrittsverfolgung und autonomer Fehlerbehebung.
- **Restaurant Website Benchmark Question** (`q-restaurant-website`) — End-to-End-Test, der CPT-Registrierung, Design System, Navigation und Plugin-Entdeckung abdeckt.
- **AI Provider Connector Plugins** wurden zu WordPress Playground Blueprints hinzugefügt, um eine schnellere lokale Entwicklungsumgebung zu gewährleisten.

### Verbessert {#improved-1}

- README aktualisiert mit Dokumentation und Einrichtungshinweisen für AI Provider Connector.

### Behoben {#fixed-1}

- 25 PHPUnit Test-Fehler auf dem `main`-Branch behoben.
- Das GitHub Releases URL-Format in `blueprint.json` korrigiert.
- Task ID neu nummeriert, um Kollisionen mit alten IDs zu vermeiden.

---

## 1.3.x {#13x}

_Ältere Release-Notizen finden Sie im Plugin-Repository._
