---
title: TVA-Ännerungsprotokoll
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# VAT-Ännerungsprotokoll

Versioun 1.0.7 - Verëffentlecht den 2026-02-03

* Fix: Däitsch (DE) VAT-Nummeren hunn d'Validatioun wéinst VIES SOAP service MS_MAX_CONCURRENT_REQ-Feeler net gepackt. Vun der legacy SOAP API op déi offiziell EU VIES REST API gewiesselt fir eng méi zouverlässeg Validatioun.
* Fix: VAT-Nummeren ginn elo akzeptéiert, wann de VIES service temporär net disponibel ass, amplaz falsch ofgeleent ze ginn. Eng Log-Androung gëtt fir spéider Iwwerpréiwung erstallt.
* Fix: VAT/Steier-ID-Feld ass elo fir all Länner siichtbar, net nëmme fir EU-Memberen. Net-EU-Steier-IDen (z. B. Schwäizer CHE-Nummeren) gi fir d'Rechnungsuweisung ouni VIES-Validatioun gespäichert.
* Fix: VAT-Prefix-Noschloe fir Griicheland (GR), Monaco (MC) an Isle of Man (IM) war wéinst falscher Array-Noschlo-Logik defekt.
* Verbesserung: Onnéideg wp-cli-bundle dev dependency ewechgeholl, déi fatal Feeler verursaache konnt, wann se zesumme mam Site Exporter addon benotzt gouf.
* Verbesserung: Ëmfaassend Unit-Test-Suite derbäigesat (53 Tester).

Versioun 1.0.6 - Verëffentlecht den 2026-01-25

* Fix: Inlännesch B2B-Transaktioune verrechnen elo korrekt VAT. No EU-VAT-Reegelen gëllt Reverse Charge nëmme fir grenziwwerschreidend B2B-Transaktiounen, net wann d'Land vum Client mam Land vun der Firma iwwerstëmmt.

Versioun 1.0.5 - Verëffentlecht den 2026-01-22

* Fix: Addon gouf net gelueden oder huet net richteg funktionéiert.
* Ännerung: VAT-Taux-Datenquell vun euvatrates.com op den ibericode/vat-rates Repository gewiesselt fir méi zouverlässeg an aktiv ënnerhalen Donnéeën.
* Fix: Tippfeeler am super_reduced_rates-Optiounswäert korrigéiert.
* Verbesserung: Null-Checks fir d'Behandlung vu Landescoden derbäigesat, fir Feeler ze verhënneren.
* Ännerung: Matgeliwwert Iwwersetzungsdateien zugonschte vun automateschen Updates iwwer Traduttore ewechgeholl.

Versioun: 1.0.3 - Verëffentlecht den 2025-09-28

* Prefix op ultimate-multisite ëmbenannt; text domain aktualiséiert; Versioun erhéicht.

Versioun 1.0.0-beta.4 - 2021-09-24

* Derbäigesat: Filter wp_ultimo_skip_network_active_check fir mu-plugins-baséiert Setups;

Versioun 1.0.0 - 05/08/2021 - Éischt Verëffentlechung
