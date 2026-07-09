---
title: Multi-Network-Änderungsprotokoll
sidebar_position: 99
_i18n_hash: 277edeab455a1d2e70dbbb4617f115a0
---
# Multi-Network-Änderungsprotokoll

### 1.3.0
* Neu: Network-Template-Vorschau — Network-Templates vor dem Kauf mit einem Live-Panel durchsuchen und in der Vorschau anzeigen.
* Neu: Network-Template-Auswahl beim Checkout — Kunden können während des Signup-Checkout-Ablaufs ein Network-Template auswählen.
* Neu: Netzwerkübergreifendes Magic-Link-SSO — Kunden können über Magic-Link-Authentifizierung nahtlos auf Sub-Netzwerke zugreifen.
* Neu: Klonen von Network-Medien — Website-Medien werden beim Klonen von Netzwerken aus einem Template korrekt dupliziert.
* Fix: Das Klonen von Netzwerken funktioniert jetzt ohne das Multi-Tenancy-Addon; Super-Admin-Berechtigungen werden nach dem Klonen erneut gewährt.
* Fix: Die Erstellung von Netzwerken ist jetzt mit WooCommerce und allen Zahlungsgateways kompatibel.
* Fix: Die Portnummer wird jetzt bei der Generierung der Fallback-Domain einbezogen.
* Fix: CSS für die Template-Auswahl wurde in ein eingereihtes Stylesheet verschoben, damit es in allen Themes korrekt gerendert wird.
* Fix: Schutz vor undefiniertem `network_id`-Schlüssel im Website-Abfragebereich.
* Fix: Network-Berechtigungsprüfung vor dem Kontextwechsel verhindert Fehler bei `wpdb`-Tabelleneigenschaften.

### 1.0.4
* Fix: Erstellen eines neuen Netzwerks.
* Fix: Rendern von Menüs.

### 1.0.3
* Aktualisiert auf Plugin Update Checker v5
* Moderne WordPress-Plugin-Header hinzugefügt
* Verbesserte Kompatibilität mit den neuesten WordPress-Versionen

### 1.0.2
* Fehlerbehebungen und Leistungsverbesserungen
* Verbesserte Netzwerkisolierung

### 1.0.0
* Erstveröffentlichung
* Kernfunktionalität für Multinetwork
* Integration mit Multisite Ultimate
