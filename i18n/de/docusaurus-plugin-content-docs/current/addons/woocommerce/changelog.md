---
title: WooCommerce-Integrations-Änderungsprotokoll
sidebar_position: 99
_i18n_hash: b34d062c52ab13dbab02f7162f01e641
---
# WooCommerce Integration Änderungsprotokoll

Version 2.0.6 - Veröffentlicht am 2026-01-16
* Verbesserung: Kernabonnements im Add-on einbeziehen. Erfordert nicht mehr die Woocommerce Subscriptinos-Erweiterung.

Version 2.0.5 - Veröffentlicht am 2026-01-09
* Verbesserung: Übersetzungen von der glotpress-API laden.
* Fehlerbehebung: Fataler Fehler bei einigen Page Buildern.
* Fehlerbehebung: Unendliche Weiterleitung, wenn der Kunde Mitglied der Hauptseite ist.

Version 2.0.4 - Veröffentlicht am 2025-11-14
* Hinzugefügt: Übersetzungen für viele weitere Sprachen.
* Geändert: Umbenannt in Ultimate Multisite: Woocommerce Integration.
* Hinzugefügt: Kompatibilität mit Woocommerce 10.2.1.
* Hinzugefügt: Kompatibilität mit Woocommerce Subscriptions 7.7.0.
* Fehlerbehebung: Kompatibilität mit PHP 8.4
* Fehlerbehebung: Weiterleitung, wenn keine WC-Konto-Seite existiert.

Version 2.0.3 - Veröffentlicht am 2025-08-13
* Geändert: Automatische Updates mit neuem Marketplace aktiviert.

Version 2.0.2 - Veröffentlicht am 2025-07-05
* Geändert: Umbenannt in Multisite Ultimate: Woocommerce Integration.
* Hinzugefügt: Kompatibilität mit Woocommerce 9.8.1.
* Hinzugefügt: Kompatibilität mit Woocommerce Subscriptions 7.3.0.
* Fehlerbehebung: Kündigung eines Abonnements durch den Kunden.
* Fehlerbehebung: Fataler Fehler bei Verwendung des Checkout-Blocks.
* Verbesserung: Jetzt kompatibel mit Woocommerce High Performance Custom Order Tables.
* Fehlerbehebung: Kündigung beim WooCommerce Checkout kann immer noch eine Mitgliedschaft upgraden.

Version 2.0.1 - Veröffentlicht am 2023-08-09
* Hinzugefügt: Kompatibilität mit Woocommerce 7.9.0.
* Hinzugefügt: Kompatibilität mit Woocommerce Subscriptions 5.3.0.
* Hinzugefügt: Unterstützung für Mitgliedschaftsaktualisierungen.
* Hinzugefügt: Benachrichtigungen zu Testversionen und Setup-Gebühren in Woocommerce.
* Hinzugefügt: Identifikation von Ultimate Multisite Woocommerce-Produkten mit einem Meta-Wert.
* Hinzugefügt: Einmalige Fehlerbehebung eingefügt, um alle Ultimate Multisite-bezogenen Woocommerce-Produkte zu markieren.
* Hinzugefügt: Von Ultimate Multisite erstellte Produkte aus der Woocommerce-Liste entfernt.
* Verbesserung: Nicht wiederkehrender Woocommerce-Rabatt zum Warenkorb hinzugefügt.
* Verbesserung: Wiederkehrender Rabatt zum Woocommerce-Produkt wiederhergestellt.
* Verbesserung: Wiederkehrender Rabatt-Label zum Woocommerce-Produkt hinzugefügt.
* Verbesserung: Produkttyp beim Checkout sichergestellt.
* Fehlerbehebung: Mitgliedschaftsstatus während des Downgrade-Prozesses beibehalten.
* Fehlerbehebung: Prüft, ob ein Abonnement existiert, um Fehler während des Kündigungsprozesses zu vermeiden.
* Fehlerbehebung: Startdatum des Abonnements hinzugefügt, um es in Woocommerce-Abonnements zu verwenden.
* Intern: Neuer PHP 8.1-Build-Prozess implementiert.

Version 2.0.0 - Komplettes Rewrite
* Hinzugefügt: Prozess zur Kündigung, um woo subscription bei Änderung des Gateways oder Kündigung der Mitgliedschaft zu entfernen;
* Hinzugefügt: Handler zum Downgrade und Upgrade von Mitgliedschaften;
* Verbesserung: Woocommerce-Abhängigkeiten beim Kundenaktualisierungsformular in Subsites laden, um Kontobearbeitung zu ermöglichen;
* Verbesserung: Woocommerce-Warenkorb korrekt laden, falls nicht vorhanden;
* Verbesserung: Sicherstellen, dass wir auf den Hauptseiten-Tabellen sind, wenn ein Checkout verarbeitet wird;
* Verbesserung: Ultimo-Erneuerungsauftrag basierend auf dem Woocommerce-Abonnement-Auftragswert und nicht vom letzten Zahlung erstellen;
* Fehlerbehebung: Zur WU Membership-Button-URL gehen;
* Fehlerbehebung: Ultimo-Auftrag als bezahlt markieren, wenn Woocommerce-Abonnement-Erneuerung bezahlt wurde;
* Build: MPB als Builder hinzufügen;

Version 2.0.0-beta-5 - Veröffentlicht am 2022-01-21
* Intern: Hooks und Filtergenerator hinzugefügt;
* Intern: Ultimate Multisite-Stubs für Entwickler-Qualität des Lebens hinzugefügt;
* Fehlerbehebung: Verhindern, dass mehrere Produkte erstellt werden, wenn nicht nötig;

Version 2.0.0-beta.4 - 2021-09-23
* Fehlerbehebung: WooCommerce muss im Netzwerk aktiv sein, nicht nur auf der Hauptseite;
* Verbesserung: Filter hinzugefügt, um das Add-on als mu-plugin zu verwenden;

Version 2.0.0-beta.3 - 2021-05-28
* Fehlerbehebung: Dashboard-Zugriffskontrolle war zu aggressiv;
* Verbesserung: WooCommerce-Hilfeseitenlinks zum Ultimate Multisite-Topmenü hinzugefügt;

Version 2.0.0-beta.2 - 2021-05-04
* Verbesserung: Erstellt ausstehende Zahlungen bei Ultimo bei Erstellung eines WCS-Erneuerungsauftrags;
* Verbesserung: Vorkompletierung der Rechnungsfelder mit Ultimate Multisite-Kundendaten;
* Verbesserung: Rechnungsfelder für Gateways wiederherstellen;

Version 2.0.0-beta.1 - 2021-05-04
* Initiale Beta-Veröffentlichung

-- Legacy Versions --

Version 1.2.6 - 26/03/2020
* Fehlerbehebung: Kleine Inkompatibilität mit neueren Versionen von WooCommerce Subscriptions;

Version 1.2.5 - 26/08/2019
* Fehlerbehebung: Fehler bei vorheriger Veröffentlichung;

Version 1.2.4 - 22/08/2019
* Verbesserte: Option hinzugefügt, um sofort nach der Integration zur WooCommerce-Checkout-Screen weiterzuleiten;

Version 1.2.3 - 26/05/2019
* Fehlerbehebung: Zahlungs-E-Mail für WooCommerce verschwand in einigen Randfällen;

Version 1.2.2 - 27/02/2019
* Hinzugefügt: Unterstützung für Setup-Gebühren bei der WooCommerce Subscription-Integration;

Version 1.2.1 - 17/11/2018
* Fehlerbehebung: Kompatibilitätsprobleme mit Ultimate Multisite Version 1.9.0;

Version 1.2.0 - 10/09/2018
* Verbesserte: Neue Updates-URL für Add-ons;
* Hinzugefügt: Beta-Unterstützung für WooCommerce Subscription;

Version 1.1.2 - 11/02/2018
* Fehlerbehebung: Link zu Pay wird dynamisch generiert, um auf Änderungen der WooCommerce-Endpunkte zu reagieren;
* Verbesserte: Wir setzen jetzt den Status 'abgeschlossen' für unsere Bestellungen, wenn payment_completed aufgerufen wird, um sicherzustellen, dass unsere Erneuerungs-Hooks ausgeführt werden, wenn sie sollten;

Version 1.1.1 - 24/01/2018
* Fehlerbehebung: Prüft jetzt auch, ob WooCommerce nur auf der Hauptseite aktiviert ist;
* Fehlerbehebung: Enthält Überladungen, um die Auftrags-Erstellung mit Steuern zu ermöglichen;

Version 1.1.0 - 04/11/2017
* Fehlerbehebung: Das Label des Integrations-Buttons ändert sich jetzt tatsächlich, um die Einstellungen widerzuspiegeln. Erfordert Ultimate Multisite 1.5.0;
* Fehlerbehebung: WooCommerce Integration funktioniert jetzt auch, wenn WooCommerce nicht im Netzwerk aktiv ist und nur auf der Hauptseite aktiviert wurde;

1.0.0 - Initiale Veröffentlichung
