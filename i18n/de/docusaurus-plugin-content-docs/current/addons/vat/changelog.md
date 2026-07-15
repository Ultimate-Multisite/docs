---
title: MwSt.-Änderungsprotokoll
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# VAT-Änderungsprotokoll

Version 1.0.7 - Veröffentlicht am 2026-02-03

* Fix: Deutsche (DE) VAT-Nummern schlugen bei der Validierung aufgrund von MS_MAX_CONCURRENT_REQ-Fehlern des VIES SOAP service fehl. Wechsel von der Legacy-SOAP-API zur offiziellen EU VIES REST API für eine zuverlässigere Validierung.
* Fix: VAT-Nummern werden jetzt akzeptiert, wenn der VIES service vorübergehend nicht verfügbar ist, anstatt fälschlicherweise abgelehnt zu werden. Ein Protokolleintrag wird zur späteren Überprüfung erstellt.
* Fix: Das Feld VAT/Tax ID ist jetzt für alle Länder sichtbar, nicht nur für EU-Mitglieder. Nicht-EU-Steuer-IDs (z. B. Schweizer CHE-Nummern) werden für die Rechnungsanzeige ohne VIES-Validierung gespeichert.
* Fix: Die VAT-Präfix-Suche für Griechenland (GR), Monaco (MC) und die Isle of Man (IM) war aufgrund fehlerhafter Array-Suchlogik defekt.
* Verbesserung: Unnötige wp-cli-bundle-Dev-Abhängigkeit entfernt, die bei Verwendung zusammen mit dem Site Exporter addon schwerwiegende Fehler verursachen konnte.
* Verbesserung: Umfassende Unit-Test-Suite hinzugefügt (53 Tests).

Version 1.0.6 - Veröffentlicht am 2026-01-25

* Fix: Inländische B2B-Transaktionen berechnen jetzt korrekt VAT. Gemäß EU-VAT-Regeln gilt Reverse Charge nur für grenzüberschreitende B2B-Transaktionen, nicht wenn das Land des Kunden mit dem Land des Unternehmens übereinstimmt.

Version 1.0.5 - Veröffentlicht am 2026-01-22

* Fix: Addon wurde nicht geladen oder funktionierte nicht ordnungsgemäß.
* Änderung: Datenquelle für VAT-Sätze von euvatrates.com auf das Repository ibericode/vat-rates umgestellt, für zuverlässigere und aktiv gepflegte Daten.
* Fix: Tippfehler im Optionswert super_reduced_rates korrigiert.
* Verbesserung: Null-Prüfungen für die Verarbeitung von Ländercodes hinzugefügt, um Fehler zu verhindern.
* Änderung: Gebündelte Übersetzungsdateien zugunsten automatischer Updates über Traduttore entfernt.

Version: 1.0.3 - Veröffentlicht am 2025-09-28

* Präfix in ultimate-multisite umbenannt; Text-Domain aktualisiert; Versionsanhebung.

Version 1.0.0-beta.4 - 2021-09-24

* Hinzugefügt: Filter wp_ultimo_skip_network_active_check für mu-plugins-basierte Setups;

Version 1.0.0 - 05/08/2021 - Erstveröffentlichung
