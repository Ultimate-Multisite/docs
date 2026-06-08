---
title: Versionshinweise
sidebar_position: 9
_i18n_hash: e9f9d20e55608b81945ab7dfcf495fcb
---
# Versionshinweise

## Version 2.12.0 — Veröffentlicht am 2026-05-15

- Neu: Hostinger (hPanel) wurde als unterstützter Host-Anbieter mit Domain-Mapping-Integration hinzugefügt
- Neu: Site Exporter verarbeitet nun Netzwerk-Import-Bundles, um eine optimierte Wiederherstellung der gesamten Website im Netzwerk zu ermöglichen
- Behebung: BCC-Broadcast-E-Mails verwenden jetzt einen `undisclosed-recipients`-Header, um die Offenlegung der Empfängeradressen zu verhindern
- Behebung: Das Ablaufdatum der Mitgliedschaft wird nicht mehr beschädigt, wenn mit einem Nicht-Datumswert gespeichert wird
- Behebung: Stripe-Mitgliedschaftsaktualisierungen löschen nun korrekt Rabatte, ohne die veraltete deleteDiscount API aufzurufen
- Behebung: SSO-Weiterleitungen auf domain-mapped Sites werden nun begrenzt, um unendliche Weiterleitungs-Schleifen zu verhindern
- Behebung: Die Auswahl im Bild-Picker des Setup-Assistenten aktualisiert nun korrekt das zugrunde liegende Datenmodell
- Behebung: Site Exporter CLI speichert nun die korrekte Standardauswahl der Netzwerkseite
- Verbessert: Das gebündelte wp-cli wurde aus dem Plugin-Paket entfernt, wodurch die Plugin-Größe reduziert wird

## Version 2.11.0 — Veröffentlicht am 2026-05-11

- Neu: Site-Exporte bündeln nun eine selbststartende `index.php`, sodass das ZIP ohne separate Plugin-Installation auf einem neuen Host installiert werden kann.
- Neu: Der Netzwerk-Export ermöglicht es Administratoren, alle Subsites in einem einzigen Archiv von der Site Export Admin Seite aus zu exportieren.
- Neu: Die Option „Allow Site Templates“ wird nun über eine Fallback-Kette durchgesetzt und schränkt die Verfügbarkeit von Templates bei Planlimits korrekt ein.
- Neu: Der Checkout-Formular-Editor warnt, wenn ein Produkt hinzugefügt wird, ohne dass ein Pflichtfeld konfiguriert ist.
- Neu: Der Tab „Import/Export-Einstellungen“ beschreibt nun klar seinen Umfang und verlinkt direkt auf das Site Export Tool.

## Version 2.10.0 — Veröffentlicht am 2026-05-05

- Neu: PayPal-Assistent für die Einrichtung bei manueller Eingabe von Anmeldeinformationen, mit einem OAuth-Flag-Gate für eine nahtlose Gateway-Konfiguration.
- Neu: Das Kunden-Panel für den Template-Wechsel wurde mit einer „current-template“-Karte, einem persistenten Raster und einem **Reset current template**-Button überarbeitet.
- Behebung: Der Template-Wechsel hängt die Benutzeroberfläche nicht mehr bei AJAX-Fehlern.
- Behebung: Die Berechtigungszustände für den Template-Wechsel sind gegen unbefugten Zugriff gesichert.
- Behebung: Site-Überschreibungs-Eingaben werden vor dem Speichern validiert.
- Behebung: Die Aufforderung zur Rechnungsadresse wird nun angezeigt, wenn die Adresse leer ist.
- Behebung: PHP 8.1 null-zu-string Deprecation Notices wurden behoben.
- Behebung: Currents wird vor dem init-Hook lazy-loaded, um Timing-Probleme zu verhindern.
- Behebung: Der gefilterte SSO-Pfad wird über alle Anmeldeflüsse hinweg respektiert.
- Behebung: Leere Site-Identitätsoptionen werden beim Speichern beibehalten.

## Version 2.9.0 — Veröffentlicht am 2026-04-30

- Neu: Export und Import für einzelne Websites wurden unter **Tools > Export & Import** hinzugefügt.
- Behebung: Export-ZIP-Dateien werden nun über einen authentifizierten Download-Endpunkt bereitgestellt.
- Behebung: Das Risiko von SQL-Injection und Abfrageprobleme bei ausstehenden Export-/Import-Abfragen wurden korrigiert.
- Behebung: Die Site wird nicht veröffentlicht, wenn der Administrator die E-Mail-Adresse des Kunden manuell überprüft.
- Behebung: Verwaiste `pending_site`-Datensätze werden bereinigt, wenn die Mitgliedschaft fehlt.
- Behebung: Die Padding-Navigation der Einstellungen und die Such-Anker-Navigation wurden korrigiert.
- Behebung: Ausstehende Sites werden nun in der Ansicht „All Sites“ zuerst angezeigt.
- Behebung: Für den Screenshot-Anbieter (mShots) wurde ein User-Agent-Header hinzugefügt, um 403-Fehler zu verhindern.
- Behebung: Die kreisförmige Abhängigkeit des Import-Cron-Plans wurde behoben.
- Behebung: Tour-IDs werden in den Benutzereinstellungen auf Unterstriche normalisiert.
- Verbessert: Statt Alchemy/Zippy wird nun ZipArchive für bessere Kompatibilität verwendet.

## Version 2.8.0 — Veröffentlicht am 2026-04-29

- Neu: Die Option „Enable Jumper“ wurde in die Einstellungen „Other Options“ hinzugefügt.
- Neu: Eine Statusspalte wurde zur Liste der Checkout-Formulare hinzugefügt.
- Neu: Ein Addon sunrise file loader für benutzerdefinierte MU-Plugin sunrise Erweiterungen.
- Verbessert: Die Option zur Fehlerberichterstattung wurde von der Einstellungsseite entfernt.
- Behebung: Die Site-Karte auf der Dankeschön-Seite — das Bild wird nun eingeschränkt und die Links korrekt gestylt.
- Behebung: Der Screenshot-Anbieter wurde von thum.io auf WordPress.com mShots umgestellt.
- Behebung: „Enable Registration“ und „Default Role“ werden bei einer Neuinstallation nun mit den korrekten Standardwerten gesetzt.
- Behebung: `get_site_url()` gibt nicht mehr leer zurück, wenn die Domain einen Port enthält.
- Behebung: Das Klonen von Mediendateien wird nun korrekt kopiert, wenn die Einstellung `copy_media` leer war.
- Behebung: Der Object Cache wird nach dem Schreiben von sitemeta über network-activate korrekt invalidiert.
- Behebung: Die benutzerdefinierte Domain wird bei der DNS-Verifizierung für 3-teilige Domains automatisch als primär hochgestuft.
- Behebung: Die ausstehende Mitgliedschaft wird storniert, wenn eine abgelaufene Zahlung bereinigt wird.
- Behebung: Der Passwort-Stärke-Prüfer wird nach Schließen des Inline-Login-Prompts wieder verbunden.
- Behebung: Die unendliche Seiten-Neuladung auf der Dankeschön-Seite wird gestoppt, wenn die Site bereits erstellt wurde.
- Behebung: Die WP core Registrierungsoption wird bei der Plugin-Aktivierung und beim Speichern der Einstellungen synchronisiert.
- Behebung: Ein Null-Ablaufschutz wurde in `calculate_expiration` für die Kompatibilität mit PHP 8.4 hinzugefügt.
- Behebung: Doppelte Anmeldungen werden blockiert, wenn der Kunde bereits eine aktive Mitgliedschaft besitzt.
- Behebung: Ein Null-Check für `date_expiration` im Checkout wurde hinzugefügt.
- Behebung: Die Site-Bereitstellung wurde gehärtet — Einschränkungen, Mitgliedschaftsableitung, Domain-Promotion.
- Behebung: Der Status-Label des Vorinstallations-Checks wurde auf „NOT Activated“ korrigiert, wenn der Check fehlschlägt.
- Behebung: Die Checkout-Domain wird für E-Mail-Verifizierungs-URLs verwendet.
- Behebung: Auto-Login nach dem Checkout, wenn kein Passwortfeld vorhanden ist.
- Behebung: Kostenlose Mitgliedschaften verfallen nicht mehr – sie werden als lebenslang behandelt.
- Behebung: Das E-Mail-Verifizierungs-Gate hält die Site-Veröffentlichung, bis der Kunde die E-Mail verifiziert hat.
- Behebung: Der Basispfad und der Identitäts-Pfad des SES v2 API Endpunkts wurden korrigiert.
- Behebung: Der `wu_inline_login_error` Hook wird im pre-submit Catch-Block emittiert.
