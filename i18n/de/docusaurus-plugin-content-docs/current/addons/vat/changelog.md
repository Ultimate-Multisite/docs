---
title: Mehrwertsteuer-Änderungsprotokoll
sidebar_position: 99
_i18n_hash: 203587cca82c7a062fdbaf29c1b0024b
---
# Mehrwertsteuer-Änderungsprotokoll

Version 1.0.6 - Veröffentlicht am 2026-01-25

* Korrektur: Inländische B2B-Transaktionen berechnen jetzt korrekt die Mehrwertsteuer. Nach den EU-Mehrwertsteuervorschriften gilt die Reverse-Charge-Regelung nur für grenzüberschreitende B2B-Transaktionen, nicht wenn das Land des Kunden mit dem Land des Unternehmens übereinstimmt.

Version 1.0.5 - Veröffentlicht am 2026-01-22

* Korrektur: Addon lädt nicht oder funktioniert nicht richtig.
* Änderung: Die Datenquelle für Mehrwertsteuersätze wurde von euvatrates.com auf das ibericode/vat-rates-Repository umgestellt, um zuverlässigere und aktiv gepflegte Daten zu erhalten.
* Korrektur: Der Tippfehler im Wert der Option super_reduced_rates wurde behoben.
* Verbesserung: Nullprüfungen für die Handhabung des Ländercodes wurden hinzugefügt, um Fehler zu verhindern.
* Änderung: Eingebettete Übersetzungsdateien wurden zugunsten automatischer Updates über Traduttore entfernt.

Version 1.0.3 - Veröffentlicht am 2025-09-28

* Umbenennung des Präfixes zu ultimate-multisite; Aktualisierung der Textdomäne; Versionssprung.

Version 1.0.0-beta.4 - 2021-09-24

* Hinzugefügt: filter wp_ultimo_skip_network_active_check für mu-plugins-basierte Setups;

Version 1.0.0 - 05/08/2021 - Initiale Veröffentlichung
