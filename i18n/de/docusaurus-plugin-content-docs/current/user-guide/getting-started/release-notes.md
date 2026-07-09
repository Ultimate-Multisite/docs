---
title: Versionshinweise
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Versionshinweise

## Version 2.13.0 — Veröffentlicht am 2026-06-05

- Neu: Unterstützung für souveräne Mandanten für Abläufe rund um Kunden-Account, Kasse, Abrechnung, Website, Rechnung, Vorlagenwechsel und Domain-Zuordnung hinzugefügt, damit Mandantennetzwerke Kunden für verwaltete Aktionen zurück zur Haupt-Website leiten können.
- Neu: Prüfungen für Verlängerungs-Zugangsdaten für wiederkehrende Mitgliedschaften hinzugefügt, damit Gateways die automatische Verlängerung deaktivieren können, wenn eine gespeicherte Abrechnungsvereinbarung, Subscription oder ein Vault-Token fehlt.
- Neu: HMAC-verifizierte Loopback-Veröffentlichung für ausstehende Website-Erstellung hinzugefügt, um die Bereitstellung von der Kasse zur Website auf Hosts zuverlässiger zu machen, bei denen Hintergrundjobs verzögert sind.
- Neu: Erweiterungspunkte für Entwickler für SSO-URLs, Basisdomains für Kassenformulare und automatische Erstellung von Domain-Einträgen hinzugefügt.
- Fix: SSO ist über zugeordnete Domains, anonyme Broker-Besuche, Abmeldung und Abhängigkeitskonflikte zwischen Plugins hinweg zuverlässiger.
- Fix: Ausstehende Website-Erstellung stellt sich jetzt von veralteten Veröffentlichungs-Flags wieder her und verhindert, dass Kunden auf dem Bildschirm zur Website-Erstellung festhängen.
- Fix: Domain-Einträge werden nicht mehr für gemeinsam genutzte Basisdomains von Kassenformularen erstellt, und ungenutzte Hintergrundjobs von Host-Anbietern werden übersprungen, wenn keine Integration aktiv ist.
- Fix: Grenzfälle bei Kasse, Rechnungsadresse, Passwort-Zurücksetzung, E-Mail-Verifizierung, Vorlagenwechsel, Touren und Kunden-Dashboard blockieren normale Kundenabläufe nicht mehr.
- Fix: Rundsendungs-E-Mails halten Empfänger jetzt privat und vermeiden gleichzeitig fatale SMTP-/Plugin-Fehler, wenn Empfängerlisten oder Mail-Transporte fehlschlagen.
- Fix: Grenzfälle bei Mitgliedschaftsverlängerungen, Ablaufanzeige und Zahlungseinzug vermeiden jetzt sofortige Abläufe, Abstürze oder verpasste erforderliche Zahlungen.
- Verbessert: WordPress-Kompatibilität ist bis 7.0 getestet, produktive Vue-Assets werden aus npm-Quellen neu erstellt, und die Cypress-End-to-End-Abdeckung prüft jetzt mehr Kassen-, Einrichtungs-, SSO- und Gateway-Abläufe.

## Version 2.12.0 — Veröffentlicht am 2026-05-15

- Neu: Hostinger (hPanel) als unterstützter Host-Anbieter mit Integration für Domain-Zuordnung hinzugefügt
- Neu: Website-Exporter verarbeitet jetzt Netzwerk-Importpakete für eine optimierte netzwerkweite Wiederherstellung von Websites
- Fix: BCC-Rundsendungs-E-Mails verwenden jetzt einen Undisclosed-Recipients-Header, um die Offenlegung von Empfängeradressen zu verhindern
- Fix: Ablaufdatum der Mitgliedschaft wird beim Speichern mit einem Nicht-Datumswert nicht mehr beschädigt
- Fix: Stripe-Mitgliedschaftsaktualisierungen entfernen Rabatte jetzt korrekt, ohne die veraltete deleteDiscount API aufzurufen
- Fix: SSO-Weiterleitungen auf Domain-zugeordneten Websites sind jetzt begrenzt, um unendliche Weiterleitungsschleifen zu verhindern
- Fix: Auswahl in der Bildauswahl des Einrichtungsassistenten aktualisiert jetzt korrekt das zugrunde liegende Datenmodell
- Fix: Website-Exporter-CLI behält jetzt die korrekte Standardauswahl der Netzwerk-Website bei
- Verbessert: Gebündeltes wp-cli aus dem Plugin-Paket entfernt, wodurch die Plugin-Größe reduziert wird

## Version 2.11.0 — Veröffentlicht am 2026-05-11

- Neu: Website-Exporte bündeln jetzt eine selbststartende `index.php`, damit die ZIP-Datei auf einem frischen Host ohne separate Plugin-Installation installiert werden kann.
- Neu: Netzwerkexport ermöglicht Administratoren, alle Unterwebsites in einem einzigen Archiv von der Admin-Seite für Website-Export zu exportieren.
- Neu: Umschalter für den Plan „Website-Vorlagen erlauben“ wird jetzt über eine Fallback-Kette erzwungen, wodurch die Verfügbarkeit von Vorlagen für Plan-Limits korrekt eingeschränkt wird.
- Neu: Editor für Kassenformulare warnt, wenn ein Produkt ohne konfiguriertes erforderliches Feld hinzugefügt wird.
- Neu: Tab für Import-/Export-Einstellungen beschreibt jetzt klar seinen Umfang und verlinkt direkt zum Website-Export-Tool.

## Version 2.10.0 — Veröffentlicht am 2026-05-05

- Neu: Geführter PayPal-Einrichtungsassistent für manuelle Eingabe von Zugangsdaten mit OAuth-Flag-Gate für nahtlose Gateway-Konfiguration.
- Neu: Kundenbereich für Vorlagenwechsel mit Karte für aktuelle Vorlage, dauerhaftem Raster und Button **Aktuelle Vorlage zurücksetzen** neu gestaltet.
- Fix: Vorlagenwechsel lässt die UI bei AJAX-Fehlern nicht mehr hängen.
- Fix: Berechtigungszustände beim Vorlagenwechsel gegen unbefugten Zugriff abgesichert.
- Fix: Eingaben für Website-Überschreibungen vor dem Speichern validiert.
- Fix: Aufforderung zur Rechnungsadresse wird jetzt angezeigt, wenn die Adresse leer ist.
- Fix: PHP 8.1-Hinweise zur veralteten Null-zu-String-Umwandlung behoben.
- Fix: Currents werden vor dem Init-Hook lazy-geladen, um Timing-Probleme zu verhindern.
- Fix: Gefilterter SSO-Pfad wird in allen Anmeldeabläufen berücksichtigt.
- Fix: Leere Optionen für Website-Identität bleiben beim Speichern erhalten.

## Version 2.9.0 — Veröffentlicht am 2026-04-30

- Neu: Export und Import einzelner Websites unter **Werkzeuge > Export & Import** hinzugefügt.
- Fix: Export-ZIP-Dateien werden jetzt über einen authentifizierten Download-Endpoint bereitgestellt.
- Fix: SQL-Injection-Risiko und Abfrageprobleme in Abfragen für ausstehende Exporte/Importe behoben.
- Fix: Ausstehende Website wird nicht veröffentlicht, wenn der Administrator die Kunden-E-Mail manuell verifiziert.
- Fix: Verwaiste pending_site-Einträge werden bereinigt, wenn die Mitgliedschaft fehlt.
- Fix: Padding der Einstellungsnavigation und Navigation zu Suchankern korrigiert.
- Fix: Ausstehende Websites werden jetzt zuerst in der Ansicht „Alle Websites“ angezeigt.
- Fix: User-Agent header für Screenshot-Anbieter (mShots) hinzugefügt, um 403-Fehler zu verhindern.
- Fix: Zirkuläre Abhängigkeit im Import-Cron-Zeitplan behoben.
- Fix: Tour-IDs in Benutzereinstellungsschlüsseln auf Unterstriche normalisiert.
- Verbessert: ZipArchive wird jetzt anstelle von Alchemy/Zippy für bessere Kompatibilität verwendet.

## Version 2.8.0 — Veröffentlicht am 2026-04-29

- Neu: „Jumper aktivieren“-Umschalter zur Other Options-Einstellungs-UI hinzugefügt.
- Neu: Statusspalte zur Listentabelle der Checkout-Formulare hinzugefügt.
- Neu: Addon-sunrise-Datei-Loader für benutzerdefinierte MU plugin-sunrise-Erweiterungen.
- Verbessert: Opt-in-Einstellung für Fehlerberichte von der Einstellungsseite entfernt.
- Korrektur: Website-Karte der Dankeschön-Seite — Bild ist jetzt eingeschränkt und Links sind korrekt gestaltet.
- Korrektur: Screenshot-Anbieter von thum.io auf WordPress.com mShots umgestellt.
- Korrektur: Enable Registration und Default Role setzen jetzt bei einer Neuinstallation die korrekten Standardwerte.
- Korrektur: `get_site_url()` gibt nicht mehr leer zurück, wenn die Domain einen Port enthält.
- Korrektur: Geklonte Mediendateien werden jetzt korrekt kopiert, wenn die Einstellung `copy_media` leer war.
- Korrektur: Objekt-Cache nach dem Schreiben von netzwerkaktivierten sitemeta korrekt invalidiert.
- Korrektur: Benutzerdefinierte Domain wird bei DNS-Verifizierung für dreiteilige Domains automatisch zur primären Domain hochgestuft.
- Korrektur: Ausstehende Mitgliedschaft wird storniert, wenn eine abgelaufene Zahlung bereinigt wird.
- Korrektur: Passwortstärke-Prüfung wird nach dem Verwerfen der Inline-Anmeldeaufforderung erneut gebunden.
- Korrektur: Endloses Neuladen der Seite auf der Dankeschön-Seite gestoppt, wenn die Website bereits erstellt wurde.
- Korrektur: WP-Core-Registrierungsoption bei Plugin-Aktivierung und Speichern der Einstellungen synchronisiert.
- Korrektur: Null-Ablaufwächter in `calculate_expiration` für PHP 8.4-Kompatibilität hinzugefügt.
- Korrektur: Doppelte Registrierungen blockiert, wenn der Kunde bereits eine aktive Mitgliedschaft hat.
- Korrektur: Null-Prüfung für `date_expiration` im Checkout hinzugefügt.
- Korrektur: Website-Bereitstellung gehärtet — Einschränkungen, Mitgliedschaftsableitung, Domain-Hochstufung.
- Korrektur: Statuslabel der Vorinstallationsprüfung auf NOT Activated korrigiert, wenn die Prüfung fehlschlägt.
- Korrektur: Checkout-Domain für E-Mail-Verifizierungs-URLs verwendet.
- Korrektur: Automatische Anmeldung nach Checkout, wenn kein Passwortfeld vorhanden ist.
- Korrektur: Kostenlose Mitgliedschaften laufen nicht mehr ab — sie werden als lebenslang behandelt.
- Korrektur: E-Mail-Verifizierungssperre hält die Veröffentlichung der Website zurück, bis der Kunde die E-Mail verifiziert.
- Korrektur: SES-v2-API-Endpunkt-Basispfad und Identitätsroute korrigiert.
- Korrektur: `wu_inline_login_error`-Hook im Pre-Submit-Catch-Block ausgelöst.
