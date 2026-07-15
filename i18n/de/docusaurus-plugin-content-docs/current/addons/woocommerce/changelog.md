---
title: Änderungsprotokoll der WooCommerce Integration
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# WooCommerce Integration Änderungsprotokoll

Version 2.2.0 - Veröffentlicht am 2026-07-01
* Neu: Steuerbeträge von Ultimate Multisite erscheinen jetzt als separate WooCommerce-Gebührenzeilen beim Checkout, wodurch Steuersummen vor der Zahlung klarer werden.
* Neu: Eine Opt-in-Einstellung „Suspend Memberships Immediately on Failed Renewals“ und der Filter `wu_woo_suspend_on_payment_failure` wurden für Websites hinzugefügt, die eine Sperrung bei fehlgeschlagener Verlängerung während des Wiederholungsfensters von WooCommerce Subscriptions wünschen.
* Korrektur: WooCommerce Subscription-Status wurden abgeglichen, die nach fehlgeschlagenen oder wiederhergestellten Verlängerungen nicht mehr mit Ultimate Multisite-Mitgliedschaften synchron sein konnten.
* Korrektur: Die WooCommerce-Shop-Währung wurde zur Ultimate Multisite-Währungsliste hinzugefügt, wenn sie fehlte.
* Korrektur: Rechnungsdetails von Kunden wurden beim Weiterleiten von Abonnenten zum WooCommerce-Checkout beibehalten.
* Verbessert: Kompatibilität mit Jetpack Autoloader 5 hinzugefügt.
* Verbessert: Die Erstellung von Release-Paketen wurde bereinigt, sodass GitHub- und Marketplace-ZIP-Dateien verschachtelte Staging-Verzeichnisse und Entwicklungsdateien vermeiden.

Version 2.0.6 - Veröffentlicht am 2026-01-16
* Verbesserung: Core-Abonnements im Add-on enthalten. Benötigt nicht länger die Woocommerce Subscriptinos-Erweiterung.

Version 2.0.5 - Veröffentlicht am 2026-01-09
* Verbesserung: Übersetzungen aus der glotpress API laden.
* Korrektur: Fataler Fehler in einigen Page-Buildern.
* Korrektur: Endlose Weiterleitung, wenn der Kunde Mitglied der Hauptwebsite ist.

Version 2.0.4 - Veröffentlicht am 2025-11-14
* Hinzugefügt: Übersetzungen für viele weitere Sprachen.
* Geändert: Umbenannt in Ultimate Multisite: Woocommerce Integration.
* Hinzugefügt: Kompatibilität mit Woocommerce 10.2.1.
* Hinzugefügt: Kompatibilität mit Woocommerce Subscriptions 7.7.0.
* Korrektur: Kompatibilität mit PHP 8.4
* Korrektur: Weiterleitung, wenn keine WC-Account-Seite existiert.

Version 2.0.3 - Veröffentlicht am 2025-08-13
* Geändert: Automatische Updates mit neuem Marketplace aktiviert.

Version 2.0.2 - Veröffentlicht am 2025-07-05
* Geändert: Umbenannt in Multisite Ultimate: Woocommerce Integration.
* Hinzugefügt: Kompatibilität mit Woocommerce 9.8.1.
* Hinzugefügt: Kompatibilität mit Woocommerce Subscriptions 7.3.0.
* Korrektur: Kündigen eines Abonnements durch den Kunden.
* Korrektur: Fataler Fehler bei Verwendung des Checkout-Blocks.
* Verbesserung: Jetzt kompatibel mit den leistungsstarken benutzerdefinierten Bestelltabellen von Woocommerce.
* Korrektur: Abbrechen beim WooCommerce-Checkout kann weiterhin eine Mitgliedschaft upgraden.

Version 2.0.1 - Veröffentlicht am 2023-08-09

* Hinzugefügt: Kompatibilität mit Woocommerce 7.9.0.
* Hinzugefügt: Kompatibilität mit Woocommerce Subscriptions 5.3.0.
* Hinzugefügt: Unterstützung für Mitgliedschaftsaktualisierungen.
* Hinzugefügt: Hinweise zu Testphasen und Einrichtungsgebühren in Woocommerce.
* Hinzugefügt: Identifizierung von Ultimate Multisite Woocommerce-Produkten mit einem Meta-Wert.
* Hinzugefügt: Ein einmaliger Fix wurde eingefügt, um alle mit Ultimate Multisite verbundenen Woocommerce-Produkte zu markieren.
* Hinzugefügt: Von Ultimate Multisite erstellte Produkte wurden aus der Woocommerce-Liste entfernt.
* Verbesserung: Ein nicht wiederkehrender Woocommerce-Rabatt wurde erstellt, um ihn auf den Warenkorb anzuwenden.
* Verbesserung: Der wiederkehrende Rabatt wurde im Woocommerce-Produkt wiederhergestellt.
* Verbesserung: Ein Label für wiederkehrende Rabatte wurde zum Woocommerce-Produkt hinzugefügt.
* Verbesserung: Produkttyp beim Checkout sichergestellt.
* Korrektur: Mitgliedschaftsstatus während des Downgrade-Prozesses beibehalten.
* Korrektur: Geprüft, ob ein Abonnement existiert, um Fehler während des Kündigungsprozesses zu vermeiden.
* Korrektur: Das Startdatum des Abonnements wurde zur Verwendung in Woocommerce-Abonnements hinzugefügt.
* Intern: Ein neuer PHP 8.1-Build-Prozess wurde implementiert.

Version 2.0.0 - Vollständige Neufassung.

* Hinzugefügt: Kündigungsprozessmethode, um das Woo-Abonnement beim Wechsel des Gateways oder beim Kündigen der Mitgliedschaft zu entfernen;
* Hinzugefügt: Handler zum Downgraden und Upgraden von Mitgliedschaften;
* Verbesserung: Woocommerce-Abhängigkeiten im Formular zur Kundenaktualisierung in Unterwebsites laden, um Account-Aktualisierung zu ermöglichen;
* Verbesserung: Woocommerce-Warenkorb korrekt laden, falls nicht vorhanden;
* Verbesserung: Sicherstellen, dass wir uns auf den Tabellen der Hauptwebsite befinden, wenn ein Checkout verarbeitet wird;
* Verbesserung: Ultimo-Verlängerungsbestellung auf dem Bestellwert des Woocommerce-Abonnements basieren lassen und nicht auf der letzten Zahlung;
* Korrektur: Link der Schaltfläche „Zu WU-Mitgliedschaft gehen“;
* Korrektur: Ultimo-Bestellung als bezahlt festlegen, wenn die Verlängerung von Woocommerce-Abonnements bezahlt wurde;
* Build: MPB als Builder hinzufügen;

Version 2.0.0-beta-5 - Veröffentlicht am 2022-01-21

* Intern: Generator für Hooks und Filter hinzugefügt;
* Intern: Ultimate Multisite-Stubs für eine bessere Developer-Quality-of-Life hinzugefügt;
* Korrigiert: Erstellung mehrerer Produkte verhindern, wenn nicht notwendig;

Version 2.0.0-beta.4 - 2021-09-23

* Korrektur: WooCommerce muss netzwerkweit aktiv sein statt nur auf der Hauptwebsite;
* Verbesserung: Filter hinzugefügt, um die Verwendung des Add-ons als MU plugin zu ermöglichen;

Version 2.0.0-beta.3 - 2021-05-28

* Korrektur: Dashboard-Zugriffskontrolle war zu aggressiv;
* Verbesserung: WooCommerce-Hilfelinks zum Ultimate Multisite-Top-Menü hinzugefügt;

Version 2.0.0-beta.2 - 2021-05-04

* Verbesserung: Erstellt ausstehende Zahlungen in Ultimo bei Erstellung einer WCS-Verlängerungsbestellung;
* Verbesserung: Füllt Rechnungsfelder mit Ultimate Multisite-Kundendaten voraus;
* Verbesserung: Fügt Rechnungsfelder für Gateways wieder hinzu;

Version 2.0.0-beta.1 - 2021-05-04

* Erste Beta-Veröffentlichung

-- Legacy-Versionen --

Version 1.2.6 - 26/03/2020

* Korrigiert: Kleine Inkompatibilität mit neueren Versionen von WooCommerce Subscriptions;

Version 1.2.5 - 26/08/2019

* Korrigiert: Fehler in der vorherigen Veröffentlichung;

Version 1.2.4 - 22/08/2019

* Verbessert: Option hinzugefügt, um nach der Integration sofort zum WooCommerce-Checkout-Bildschirm weiterzuleiten;

Version 1.2.3 - 26/05/2019

* Korrigiert: Zahlungs-E-Mail für WooCommerce verschwand in einigen Randfällen;

Version 1.2.2 - 27/02/2019

* Hinzugefügt: Unterstützung für Einrichtungsgebühren in der WooCommerce Subscription-Integration;

Version 1.2.1 - 17/11/2018

* Korrigiert: Kompatibilitätsprobleme mit Ultimate Multisite Version 1.9.0;

Version 1.2.0 - 10/09/2018

* Verbessert: Neue Updates-URL für Add-ons;
* Hinzugefügt: Beta-Unterstützung für WooCommerce Subscription;

Version 1.1.2 - 11/02/2018

* Korrigiert: Link zum Bezahlen wird dynamisch generiert, um auf Änderungen an WooCommerce-Endpunkten zu reagieren;
* Verbessert: Wir erzwingen jetzt den Status „abgeschlossen“ für unsere Bestellungen, wenn payment_completed aufgerufen wird, um sicherzustellen, dass unsere Verlängerungs-Hooks ausgeführt werden, wenn sie es sollten;

Version 1.1.1 - 24/01/2018

* Behoben: Jetzt wird auch geprüft, ob WooCommerce nur auf der Haupt-Website aktiviert ist;
* Behoben: Überladungen hinzugefügt, damit die Auftragserstellung Steuern einschließen kann;

Version 1.1.0 - 04/11/2017

* Behoben: Jetzt ändert sich die Beschriftung des Integrations-Buttons tatsächlich entsprechend den Einstellungen. Erfordert Ultimate Multisite 1.5.0;
* Behoben: WooCommerce Integration funktioniert jetzt auch, wenn WooCommerce nicht netzwerkweit aktiv ist und nur auf der Haupt-Website aktiviert ist;

1.0.0 - Erstveröffentlichung
