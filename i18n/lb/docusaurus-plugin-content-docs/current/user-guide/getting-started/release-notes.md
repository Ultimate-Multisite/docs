---
title: Ussgabnotize
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Release Notes

## Versio 2.13.0 — Veröffentlicht am 2026-06-05

- Neu: Es isch jetzt sovereign-tenant support für Customer Account, Checkout, Billing, Site, Invoice, Template Switching und Domain Mapping Flows hinzugefügt, damit Tenant Networks Kunde zrugg zum Hauptsite für verwalteti Aktionen leite chönd.
- Neu: Renewal-Credential Checks für wiederkehndi Mitgliedschafte sind hinzugefügt, sodass Gateways d'Auto-Renewal deaktivierä chönd, wenn en gspeicherte Billing Agreement, Subscription oder Vault Token fehlt.
- Neu: HMAC-verified Loopback Publishing für pending Site Creation isch hinzugefügt, um s'Provisioning vo Checkout zu Site zuverlässiger z'mache uf Hosts, wo Background Jobs verzögert sind.
- Neu: Developer Extension Points für SSO URLs, Checkout-Form Base Domains und automatische Domain-Record Erschaffig sind hinzugefügt.
- Fix: SSO isch jetzt zuverlässiger über mappti Domains, anonymi Brokerbesüech, Logout und Konflikte mit Cross-Plugin Abhängigkeiten.
- Fix: Pending Site Creation stellt sich jetz vo veraltete Publish Flags wieder uf und verhindert, dass Kunde uf de Site-Creation Screen feststecke.
- Fix: Domain Records werded nüm für Shared Checkout-Form Base Domains erstellt, und ungenutzti Host-Provider Background Jobs wärded übersprunge, wenn kei Integration aktiv isch.
- Fix: Edge Cases wie Checkout, Billing Address, Passwort-Reset, E-Mail Verification, Template Switching, Tours und Customer Dashboard blockiered jetz nüm normali Kundeflüss.
- Fix: Broadcast Emails behalte jetzt d'Privatsphäre vo de Empfänger bei, während SMTP/Plugin Fatal Errors vermide wärded, wenn Empfängerlisten oder Mail Transports fehlschlage.
- Fix: Edge Cases wie Mitgliedschaftsrenewals, Ablaufanzeige und Zahlungssammlung vermeided jetz sofortigi Abläufe, Abstürze oder verpassti erforderlichi Zahligä.
- Verbessert: WordPress Kompatibilität isch bis zu 7.0 getestet, Produktions Vue Assets wärded us npm Quelle neu gebaut, und Cypress End-to-End Coverage testet jetzt meh Checkout-, Setup-, SSO- und Gateway Flows.

## Versio 2.12.0 — Veröffentlicht am 2026-05-15

- Neu: Hostinger (hPanel) als unterstützte Hosting-Provider mit Domain Mapping Integration hinzugefügt
- Neu: Site Exporter behandelt jetzt Network Import Bundles, was d'Wiederherstellung vo de ganze Site über s'Netzwerk vereifacht
- Fix: BCC Broadcast E-Mails bruche jetz en unoffeni "undesclosed-recipients" Header, um d'Empfängeradressen z'verstecke
- Fix: S'Ablaufdatum vo Mitgliedschaft wird nümme korrumpiert, wenn mer mit eme Datumswert speichert
- Fix: Stripe Mitgliedschaftsaktualisierungen lösche jetz korrekt Rabatte us, ohni d'veralteti deleteDiscount API ufzurufen
- Fix: SSO-Weiterleitige uf domänemappte Sites sind jetzt begrenzt, um unendlechi Weiterleitungs-Loops z'verhindere
- Fix: D'Bildauswahl im Setup Wizard aktualisiert jetz korrekt s'Grunddatamodell
- Fix: De Site Exporter CLI behält jetz d'korrekte Standard-Netzwerk-Site-Auswahl
- Verbessert: De wp-cli Bundel us em Plugin-Paket entfernt, was de Plugin-Grössi verringert

## Versio 2.11.0 — Veröffentlicht am 2026-05-11

- Neu: Site Exports bündle jetz en selber startende `index.php`, sodass mer s'ZIP uf eme frische Host installiere chönne, ohni es separates Plugin z'installiere
- Neu: Network Export erlaubt Admins, alli Untersites us eme einzelne Archiv vo de Site Export Admin Page z'exportiere
- Neu: D'Umschaltestell für d'Site Template Plan wird jetz über en Fallback-Kette durchgsetzt und beschränkt d'Verfügbarkeit vo Templates korrekt nach Planlimits
- Neu: De Checkout Form Editor warnt, wenn mer es Produkt hinzufügt ohni dass es en erforderliche Feld konfiguriert isch
- Neu: D'Import/Export Einstellungen Tab beschribt jetz klar sini Reichweite und verlinkt direkt zur Site Export Tool

## Versio 2.10.0 — Veröffentlicht am 2026-05-05

- Neu: PayPal geführte Setup Wizard für manuelli Credential-Eingabe mit OAuth Flag Gate für nahtlose Gateway-Konfiguration.
- Neu: Template switch Kundepanel neu gestaltet mit der aktuellen-template Karte, persistent Grid und dem Button **Reset current template**.
- Fix: Template-Wechsel hängt die UI nicht mehr bei AJAX-Fehlern auf.
- Fix: Berechtigungszustände beim Template-Wechsel sind gegen unbefugten Zugriff gesichert.
- Fix: Site Override Eingaben werden vor dem Speichern validiert.
- Fix: Der Prompt für die Rechnungsadresse wird jetzt angezeigt, wenn keine Adresse vorhanden ist.
- Fix: PHP 8.1 Null-zu-String Deprecation-Hinweise behoben.
- Fix: Aktuelle Lazy-Loading findet vor dem Init Hook statt, um Timing-Probleme zu vermeiden.
- Fix: Gefilterte SSO Pfade werden über alle Login-Flows hinweg respektiert.
- Fix: Leere Seitenidentitätsoptionen bleiben beim Speichern erhalten.

## Version 2.9.0 — Veröffentlicht am 2026-04-30

- Neu: Export und Import für Einzelseiten hinzugefügt unter **Tools > Export & Import**.
- Fix: Export-ZIP-Dateien werden jetzt über einen authentifizierten Download-Endpunkt bereitgestellt.
- Fix: SQL-Injection-Risiken und Abfrageprobleme bei ausstehenden Export-/Import-Abfragen korrigiert.
- Fix: Ausstehende Seiten werden nicht veröffentlicht, wenn der Admin die Kundene-Mail manuell überprüft.
- Fix: Verwaiste `pending_site`-Einträge werden bereinigt, wenn Mitgliedschaft fehlt.
- Fix: Padding in der Einstellungen-Navigation und Suchanker-Navigation korrigiert.
- Fix: Ausstehende Seiten werden jetzt zuerst in der Ansicht Alle Seiten angezeigt.
- Fix: User-Agent Header des Screenshot-Providers (mShots) hinzugefügt, um 403-Fehler zu verhindern.
- Fix: Zirkuläre Abhängigkeit im Import-Cronplan behoben.
- Fix: Tour IDs wurden in den Benutzereinstellungen auf Unterstriche normalisiert.
- Verbessert: `ZipArchive` wird jetzt anstelle von Alchemy/Zippy für bessere Kompatibilität verwendet.

## Version 2.8.0 — Veröffentlicht am 2026-04-29

- Neu: Jumper toggle aktiviert hinzugefügt zur UI der Anderi Optionseinstellungen.
- Neu: Statusspalte hinzugefügt zur Tabelle der Checkout-Formulare.
- Neu: Addon sunrise file loader für benutzerdefinierte MU-plugin sunrise extensions hinzugefügt.
- Verbessert: Fehlerberichtsoption aus den Einstellungen entfernt worden.
- Korrigiert: Thank-you Seite Site Card — Bild ist jetzt eingeschränkt und Links sind korrekt gestylt.
- Korrigiert: Screenshot-Provider von thum.io auf WordPress.com mShots umgestellt.
- Korrigiert: Registrierung und Standardrolle jetzt mit korrekten Standardwerten bei Neuinstallation eingestellt.
- Korrigiert: `get_site_url()` gibt nicht mehr leer zurück, wenn die Domain einen Port enthält.
- Korrigiert: Media-Dateien werden nun korrekt kopiert, wenn die Einstellung `copy_media` leer ist.
- Korrigiert: Object Cache wird nach dem Netzwerk-Aktivieren von sitemeta korrekt ungültig gemacht.
- Korrigiert: Benutzerdefinierte Domains werden bei DNS-Verifizierung für 3-teilige Domains automatisch zur Primärdomäne hochgestuft.
- Korrigiert: Abgelaufene Mitgliedschaft wird storniert, wenn abgelaufene Zahlungen bereinigt werden.
- Korrigiert: Passwortstärke-Prüfer wird nach Ablehnung des Inline-Login-Prompts neu gestartet.
- Korrigiert: Unendliche Seitenaktualisierung auf der Thank-you Seite wurde gestoppt, wenn die Seite bereits erstellt ist.
- Korrigiert: WP Core Registrierungsoption wird bei Plugin-Aktivierung und Einstellungen gespeichert synchronisiert.
- Korrigiert: Null-Verfalls-Guard hinzugefügt in `calculate_expiration` für PHP 8.4 Kompatibilität.
- Korrigiert: Doppelte Anmeldungen werden blockiert, wenn der Kunde bereits eine aktive Mitgliedschaft hat.
- Korrigiert: Nullprüfung für `date_expiration` im Checkout hinzugefügt.
- Korrigiert: Site Provisionierung wurde verschärft — Einschränkungen, Mitgliederinferenz, Domänenpromotion.
- Korrigiert: Statuslabel des Pre-Installationschecks korrigiert auf NICHT Aktiviert, wenn der Check fehlschlägt.
- Korrigiert: Checkout-Domain wird für E-Mail-Verifizierungs-URLs verwendet.
- Korrigiert: Automatische Anmeldung nach dem Checkout, wenn kein Passwortfeld vorhanden ist.
- Korrigiert: Kostenlose Mitgliedschaften laufen nicht mehr ab — als lebenslang behandelt.

Fix: De E-Mail Verifikationsgate blie de Site publik, bis de Klant d'E-Mail verifieert.
Fix: De Basispad en Identitätsroute vo de SES v2 API endpoint korrigiert.
Fix: De `wu_inline_login_error` hook emittiert in de pre-submit catch block.
