---
title: Admin Page Creator Änderungsprotokoll
sidebar_position: 99
_i18n_hash: 60442b433a1fe73d3624b115e3d153a5
---
# Admin Page Creator Changelog

### Version 1.9.0 - Released on 2026-01-18

* Fixed: Fatalfehler beim Aktivieren.
* Refactored: Content-Source-Klassen nutzen das Singleton-Attribut mit korrekter Initialisierung des Elternkonstruktors.
* Fixed: Vue.js-Template-Kompilierungsfehler verhindern das Rendern des Inhaltstyp-Selectors.
* Fixed: Fehlende Vue-Datenattribute (template_id, external_link_url_embedable, external_link_url_checking).
* Fixed: TinyMCE-Editor initialisiert sich nicht korrekt beim Laden der Seite.
* Fixed: Divi-Unterstützungsdatei wird nicht automatisch über Composer geladen.
* Fixed: Beschädigte PHP-Syntax in der Divi-Unterstützungsklasse.
* Improved: Organisation und Minifizierung von JavaScript-Assets.
* Improved: Kompatibilität mit den neuesten WordPress- und Page-Builder-Versionen.

= Version: 1.8.8 - Released on 2025-09-28

* Rename prefix to ultimate-multisite; update text domain; version bump.

### Version 1.8.7 - 04/10/2023

* Fixed: Fatalfehler beim Versuch, eine neue Admin-Seite hinzuzufügen.
* Fixed: Konflikt mit Oxygen-Stilvorlagenpräfix behoben.

### Version 1.8.6 - 09/08/2023

* Added: Option, Daten vom Hauptsite oder dem aktuellen Subsite anzuzeigen.
* Added: Unterstützung für den WordPress Block Editor (Gutenberg).
* Fixed: Problem mit nicht ladenden Brizy-Seitenassets behoben.

### Version 1.8.5 - 09/12/2020

* Fixed: Problem mit den Bildschirmoptionen zum Ausblenden des Menüs, das nicht verschwindet.

### Version 1.8.4 - 11/11/2020

* Fixed: Unterstützung für Multisite Ultimate v2.

### Version 1.8.3 - 01/10/2020

* Fixed: Inkompatibilitäten mit Beaver Builder aus vorheriger Version.
* Fixed: Randinkonsistenzen mit WP 5.5.

### Version 1.8.2 - 21/09/2020

* Fixed: Kleine Inkompatibilitäten mit WP 5.5.

### Version 1.8.1 - 05/08/2020

* Fixed: Inkompatibilität mit Brizy 2.0.
* Fixed: Kleine Leistungsprobleme beim Erstellen der Menüliste.

### Version 1.8.0 - 27/04/2020

* Fixed: Benachrichtigungen werden unter der Top-Leiste ausgeblendet, wenn kein Randmodus ausgewählt ist.
* Added: Benutzerdefinierte Seiten können jetzt gleichzeitig mehrere WordPress-Admin-Haupt- und Unterseiten ersetzen.
* Added: Administratoren können Admin-Seiten jetzt mit WP Admin Pages PRO ausblenden.

### Version 1.7.9 - 01/04/2020

* Fixed: Brizy 1.10.118 und höher brechen SVG-Unterstützung auf Admin-Seiten.

### Version 1.7.8 - 26/03/2020

* Fixed: Escaping-Fehler, der die Editor-Seite beim Verwenden von Französisch bricht.

### Version 1.7.7 - 04/03/2020

* Fixed: Kleine Inkompatibilität mit Brizy Builder.
* Improved: Freemius SDK auf 2.3.2 aktualisiert.

### Version 1.7.6 - 10/02/2020

* Fixed: Admin-Seiten-Edit-Button in der unteren rechten Ecke funktioniert nicht in Dashboard-Widgets.
* Fixed: Kleine Inkompatibilität mit Astra.
* Fixed: Neue Brizy-Version bricht die Kompatibilität.

### Version 1.7.5 - 14/12/2019

* Fixed: Neuer Edge-Case-Handler zum Befüllen von Menüeinträgen bei der Replace-Page-Option.
* Fixed: Elementor-Schriftarten funktionieren nicht.
* Improved: Freemius SDK aktualisiert, um das Verbergen sensibler Informationen auf der Account-Seite zu unterstützen.

### Version 1.7.4 - 29/11/2019

* Fixed: Inkompatibilität mit WooCommerce Memberships.
* Fixed: Oxygen Builder Tab-Komponente funktioniert nicht.
* Fixed: Beaver Themer funktioniert nicht.

### Version 1.7.3 - 12/07/2019

* Fixed: Seiten verschwinden, wenn ihr Elternteil in einen anderen Admin-Seitentyp konvertiert wird.
* Improved: Bessere Tabellen-Trennlinien zwischen Admin-Seitentypen.
* Improved: Sicherheitsüberprüfung des gesamten Plugin-Codebasen.
* Improved: Hinweis zur Separator-Tab-Warnung, wenn die Funktion für einen bestimmten Menü-/Inhaltsquellen-Typ nicht verfügbar ist.

### Version 1.7.2 - 01/07/2019

* Fixed: Freemius SDK-Version auf 2.3.0 aktualisiert.
* Fixed: Inkompatibilitätsproblem mit Flywheel.

### Version 1.7.1 - 27/06/2019

* Fixed: Welcome-Widget wird jetzt allen Rollen angezeigt.
* Fixed: Bildschirmoption zum Ausblenden/Anzeigen des Admin-Seiten-Menüs wird nicht hinzugefügt, wenn das Menü über den dokumentierten Filter ausgeblendet wird.
* Improved: Das Ausblenden der Admin-Seiten-Menüs blendet jetzt auch die aus der Beaver Builder gespeicherten Vorlagenliste im Builder-UI erstellten Vorlagen aus.
* Added: Optionen zum Massenaktivieren und -deaktivieren von Admin-Seiten.
* Added: Option, Seiten auch auf dem Hauptsite anzuzeigen.
* Added: Option, die Menübeschriftungen für Haupt- und Unterebene im Replace-Modus umzubenennen.

### Version 1.7.0 - 04/06/2019

* Fix: Probleme mit Oxygen-Templates, die nicht angezeigt werden.
* Added: Unterstützung für Widget-Erstellung!

### Version 1.6.1 - 22/05/2019

* Fixed: Tippfehler.
* Fixed: Untermenüseiten überschreiben vorherige Untermenüeinträge mit demselben Reihenfolgenwert.
* Fixed: Duplizierung setzt jetzt den Slug der duplizierten Seite zurück.
* Improved: pt_BR- und es_ES-po-Dateien aktualisiert.
* Improved: Listen-Tabelle listet jetzt auch den Namen benutzerdefinierter Seiten als Elternseiten.

### Version 1.6.0 - 21/05/2019

* Added: Externe Links unterstützen jetzt auch iframe-Laden.

### Version 1.5.5 - 17/05/2019

* Fixed: Warnmeldung wird ausgelöst, wenn eine Seite gelöscht oder dupliziert wurde.
* Fixed: Berechtigungseinstellungen werden nicht auf Administratoren angewendet.

### Version 1.5.4 - 08/05/2019

* Fixed: Inkompatibilitäten mit Sliced Invoices.
* Fixed: Kleines Problem mit Oxygen.
* Fixed: Platzhalter im neuen Admin-Seiten-Titelfeld verschwindet nicht bei Key-Up.

### Version 1.5.3 - 03/05/2019

* Fixed: Inkompatibilität mit Advanced Custom Field-Optionseiten.
* Added: Option, bestimmte Benutzer als Ziel benutzerdefinierter Admin-Seiten hinzuzufügen.

### Version 1.5.2 - 30/04/2019

* Fixed: Inkompatibilitäten mit neueren Brizy-Versionen.
* Added: Spanische Übersetzung hinzugefügt – dank John Rozzo. Danke, John!
* Added: Beta-Unterstützung für Oxygen Builder.

### Version 1.5.1 - 15/04/2019

* Fixed: Problem mit Platzhaltern in den Normal- und HTML-Editoren.
* Fixed: Admin-Seiten werden nicht im Tools -> Export angezeigt.
* Fixed: Skripte und Styles werden nur auf unseren eigenen Seiten geladen.
* Added: Super-Admins können jetzt Admin-Seiten duplizieren.

### Version 1.5.0 - 29/03/2019

* Fixed: Kleine Fehler, die von Sentry erfasst wurden.
* Fixed: Löschen-Button funktioniert nicht auf dem Edit Admin-Seite-Bildschirm.
* Improved: BeaverBuilder-Button geändert, um klarzustellen, dass die Standard-BB-Lizenz ebenfalls unterstützt wird.
* Added: Administratoren können die Reihenfolge der Untermenüs festlegen.
* Added: Replace-Page-Modus unterstützt jetzt alle verfügbaren Menüeinträge.

### Version 1.4.0 - 14/02/2019 (stand-alone) & 27/02/2019 (add-on)

* Added: Als Standalone-Plugin in https://wpadminpagespro.com gestartet.
* Added: Option, das Admin-Seiten-Menüelement nach Abschluss des Seitenerstellungsprozesses zu entfernen.
* Added: Option, Admin-Benachrichtigungen von Admin-Seiten zu entfernen.
* Added: Inhaltsverarbeitung, sodass Sie Platzhalter wie {{user:first_name}} setzen können und diese automatisch ersetzt werden.
* Added: Inline-Editor.
* Added: Konsolidierte Inhaltsquellen-Elternklasse, um das Hinzufügen neuer Page Builders/Content Sources in Zukunft zu erleichtern.
* Added: Unterstützung für externe URLs.

### Version 1.3.0 - 15/01/2019

* Fixed: Admin-Seiten erscheinen nicht auf dem Hauptsite in Multisite-Umgebungen.
* Improved: Multisite Ultimate-Custom-Post-Types aus dem Export-Bildschirm der Subsites entfernt.
* Added: Top-Leiste mit Schnellaktionen für Netzwerk-Admins auf den Erstellungsseiten.
* Added: RIESIG! Elementor-Unterstützung!
* Added: RIESIG! Brizy-Unterstützung!

### Version 1.2.1 - 17/11/2018

* Fixed: Plugin kompatibel mit Multisite Ultimate 1.9.0 machen.

### Version 1.2.0 - 10/09/2018

* Added: PHP-Unterstützung hinzugefügt, wenn WU_APC_ALLOW_PHP_PROCESSING in wp-config.php auf true gesetzt ist. Dies verwendet kein PHP-eval, kann jedoch immer noch Sicherheitslücken verursachen. Verwenden Sie dies vorsichtig.
* Improved: Add-on-Plugin-Updater.
* Improved: Neue URL für den Update-Server.

### Version 1.1.2 - 16/08/2018

* Fixed: Kleines Problem mit WP Engine.

### Version 1.1.1 - 16/08/2018

* Fixed: Berechtigungen werden nicht korrekt auf Ersatzseiten angewendet.

### Version 1.1.0 - 15/08/2018

* Added: Beaver Builder-Vorlagen werden jetzt unterstützt! Sie können Ihren bevorzugten Page Builder verwenden, um benutzerdefinierte Admin-Seiten zu erstellen.
* Added: Es ist jetzt möglich, den Inhalt der WordPress-Standard-Admin-Seiten ebenfalls zu ersetzen.
* Added: Es ist jetzt möglich, den erstellten Inhalt oben oder unten an die Standard-WordPress-Admin-Seiten anzuhängen.

### 0.0.1

* Initiale Veröffentlichung
