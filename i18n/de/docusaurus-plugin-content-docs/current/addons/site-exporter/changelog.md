---
title: Änderungsprotokoll des Website-Exporters
sidebar_position: 99
_i18n_hash: 6ce7f1a3c455b0afe71a841b7b82319a
---
# Site Exporter Änderungsprotokoll

Version: 1.0.6 - Veröffentlicht am 2026-05-11
* Neu: Site-Exporte bündeln jetzt eine selbststartende index.php, sodass die ZIP auf einem neuen Host ohne separate Plugin-Installation installiert werden kann
* Neu: Der Netzwerkexport ermöglicht Administratoren, alle Subsites in einem einzigen Archiv über die Site Export-Admin-Seite zu exportieren

Version: 1.0.5 - Veröffentlicht am 2026-05-05
* Fix: __callStatic zum WP_CLI-Polyfill-Stub hinzugefügt, um nicht gemockte Methoden wie get_config zu verarbeiten und Fehler beim Test-Bootstrap zu verhindern

Version: 1.0.4 - Veröffentlicht am 2025-11-25

* Kompatibilität mit Ultimate Multisite 2.4 behoben.

Version: 1.0.2 - Veröffentlicht am 2025-09-28

* Präfix in ultimate-multisite umbenannt; Textdomain aktualisiert; Versionsanhebung.

### Version 1.0.1 - Veröffentlicht am 2023-08-09 {#version-101---released-on-2023-08-09}

* Verbessert: Stellt jetzt sicher, dass der korrekte Dateipfad der Importer-Datei ermittelt wird.
* Behoben: Objekt-Cache deaktiviert, um Fehler während des Imports zu verhindern.
* Behoben: Das Problem wurde behoben, dass der Download-Link des Importer-Plugins nicht funktionierte.

### Version 1.0.0 - Veröffentlicht am 2022-12-23 {#version-100---released-on-2022-12-23}

* Behoben: Exportformular-Popup wurde nicht geladen;
* Behoben: Javascript-Dateien wurden auf der Exportseite nicht geladen;
* Intern: Neuer Build-Prozess;

### Version 1.0.0-beta.4 - Veröffentlicht am 2022-01-13 {#version-100-beta4---released-on-2022-01-13}

* Intern: Hooks- und Filtergenerator hinzugefügt;
* Intern: WP Ultimo-Stubs für bessere Entwicklerfreundlichkeit hinzugefügt;
