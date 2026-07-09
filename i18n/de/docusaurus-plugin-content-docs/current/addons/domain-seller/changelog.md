---
title: Domain Seller Änderungsprotokoll
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Domain Seller Änderungsprotokoll {#domain-seller-changelog}

Version 1.3.0 - Veröffentlicht am 2026-06-02
- Neu: Eine network-admin-Warnung hinzugefügt, wenn das HostAfrica-Reseller-Guthaben zu niedrig wird
- Neu: Automatisches Mapping neu registrierter Domains zur Netzwerk-Site hinzugefügt
- Fix: Anforderungen an Registrantenfelder nur beim Registrieren einer neuen Domain angewendet
- Fix: Monitor-Guthabenhinweise ausblendbar gemacht
- Fix: Sichergestellt, dass WooCommerce-Registranten-Rechnungsdetails erhalten bleiben
- Fix: Anforderungen an Registrantenkontakte während der Registrierung erzwungen
- Fix: Verhindert, dass Domain-Registrierungsprodukte mit 0 % Aufschlag erstellt werden
- Fix: Domain-Auswahlen und Preise im gesamten Checkout-Session-Ablauf beibehalten
- Fix: Anzeige der HostAfrica-Domain-Preise-Währung verbessert
- Fix: Verhalten der Checkout-Formularaktion verbessert, um WP-core-query-var-Abweichungen zu verhindern
- Verbessert: HostAfrica-Reseller-Konfigurationsdokumentation in der Setup-Anleitung verlinkt

Version 1.2.0 - Veröffentlicht am 2026-05-25
- Neu: HostAfrica als Domain-Verkaufsintegration mit Checkout, Setup-Assistent, Suche, TLD/Preisen, Registrierung, Verlängerung, Transfer, Nameserver, DNS, EPP-Code, Registrar-Sperre und Unterstützung für ID-Schutz hinzugefügt
- Neu: Openprovider als Domain-Verkaufsintegration mit Reseller-Preisen, Registrierung, Verlängerung, Transfer, Nameserver, DNS, EPP-Code, Registrar-Sperre, WHOIS-Datenschutz und Unterstützung für TLD-Synchronisierung hinzugefügt
- Neu: Hostinger als Domain-Verkaufsintegration hinzugefügt, die den gemeinsamen Hostinger API-Token aus der Core-Integration für Verfügbarkeitsprüfungen, Registrierung, Nameserver-Updates, Registrar-Sperre und WHOIS-Datenschutz verwendet
- Verbessert: Docblocks für Domain-Lifecycle-Aktionen und Filter zur Anleitung für Entwickler-Integrationen hinzugefügt
- Verbessert: Plugin-Kompatibilitätsmetadaten in der Add-on-Readme auf WordPress 7.0 aktualisiert
- Verbessert: Planungsvorlagen für die Koordination kommender Releases aktualisiert

Version 1.1.0 - Veröffentlicht am 2026-05-08
- Neu: DNS-Record-Erstellung (add_dns_record) für ResellerClub-, Enom- und OpenSRS-Registrare implementiert
- Fix: Standard-DNS-Records-Parser toleriert jetzt {DOMAIN}- und {SITE_URL}-Tokens
- Fix: Slugs der Checkout-Felder für die Domain-Auswahl mit Namespace versehen, um Kollisionen mit site_url zu verhindern

Version 1.0.8 - Veröffentlicht am 2026-05-07
- Fix: ResellerClub-Domain-Preise rufen jetzt Live-Kostpreise vom korrekten API-endpoint ab

Version 1.0.7 - Veröffentlicht am 2026-05-06
* Fix: ResellerClub test_connection sendet den erforderlichen tlds-Parameter (#224)

Version 1.0.6 - Veröffentlicht am 2026-05-05
* Fix: ResellerClub-Domainregistrierung funktioniert jetzt korrekt mit verbesserter API-Antwortverarbeitung und Registry-gesteuertem Provider-Routing
* Fix: UX-Verbesserungen der Admin-Seite „Domain registrieren“
* Entfernt: CyberPanel-Registrar-Integration

Version 1.0.5 - Veröffentlicht am 2026-04-02
* Neu: GoDaddy-Registrar-Integration für Domainregistrierung und -verwaltung
* Neu: NameSilo-Registrar-Integration
* Neu: ResellerClub-Registrar-Integration
* Neu: SES-Sendedomain beim Domainkauf und Mapping automatisch verifizieren
* Fix: Plugin-Konstanten gegen Neudefinition in der Testumgebung schützen
* Fix: MySQL-Flags werden in install-wp-tests.sh korrekt nach Wörtern aufgeteilt

Version 1.0.4 - Veröffentlicht am 2026-03-14
* **Fix:** Einige fehlende CSS-Assets
* **Fix:** Fehler im Zusammenhang mit nicht verfügbaren TLDs

Version 1.0.3 - Veröffentlicht am 2026-03-09
* **Fix:** Vue-Fehler bei reaktiven Eigenschaften (domain_option, selected_domain, domain_provider) bei Verwendung des alten Signup-Templates mit dem Checkout-Shortcode
* **Fix:** Fehlausrichtung des Subdomain-Eingabefelds und zu großer Text im Domain-Auswahlfeld beim Checkout
* **Fix:** Den Vorschau-Block „Your URL will be“ ausblenden, wenn das Domain-Auswahlfeld vorhanden ist

Version 1.0.2 - Veröffentlicht am 2026-03-01
* **Verbessert:** Globale Aufschlagseinstellungen von der Einstellungsseite entfernt — Preise werden jetzt ausschließlich pro Produkt festgelegt
* **Verbessert:** Link „Manage Domain Products“ auf der Einstellungsseite für schnelle Navigation hinzugefügt
* **Verbessert:** Klarere Feldbeschreibungen und Tooltips für Domain-Produkt-Einstellungen (Catch-all vs. TLD-spezifisch, Aufschlagstypen, Einführungspreise)
* **Verbessert:** Bessere Beschreibungen auf der gesamten Einstellungsseite (TLDs suchen, Verlängerungen, DNS, Benachrichtigungen)

Version 1.0.1 - Veröffentlicht am 2026-02-27

* **Neu:** TLD-Import-Tool für die Verwaltung von Massenpreisen
* **Neu:** Unterstützung für Einführungspreise bei Domain-Produkten
* **Neu:** E2E-Testsuite mit Cypress
* **Neu:** E-Mail-Templates für Benachrichtigungen zum Domain-Lebenszyklus
* **Neu:** Felder für die Registrantenadresse im Admin-Modal zur Domain-Registrierung, aus den Einstellungen vorausgefüllt
* **Neu:** Kundenoberfläche zur DNS-Verwaltung mit Unterstützung zum Hinzufügen, Bearbeiten und Löschen von Records
* **Neu:** Checkout-Option „Bring your own domain“ mit automatischem Domain-Mapping
* **Neu:** Automatisches Generieren der Website-URL aus dem Domain-Namen während des Checkouts
* **Neu:** Konfiguration von Standard-Nameservern und DNS-Records in den Einstellungen
* **Neu:** Domain-Registrierungsdetails und DNS-Verwaltung auf der Core-Bearbeitungsseite für Domains
* **Neu:** Setup-Assistent erstellt automatisch ein Standard-Domain-Produkt mit sinnvollen Defaults
* **Neu:** Tägliche automatische TLD-Synchronisierung per Cron über alle konfigurierten Provider hinweg
* **Neu:** WHOIS-Datenschutz mit Konfiguration pro Produkt (immer aktiviert, Kundenauswahl oder deaktiviert)
* **Neu:** WHOIS-Datenschutz-Checkbox im Checkout mit Preisanzeige und Dark-Mode-Unterstützung
* **Neu:** Admin-Seite „Register Domain“ für manuelle Domain-Registrierung
* **Neu:** Automatische Plugin-Updates über den Ultimate Multisite Update-Server
* **Neu:** Filter-Tab für den Domain-Produkttyp in der Produktlistentabelle mit violettem Badge-Styling
* **Neu:** Kontaktfelder für Registranten (Name, Adresse, Stadt, Bundesland, Postleitzahl, Land, Telefon) im Domain-Checkout-Formular

* **Neu:** Validierung der Registrantenfelder vor dem Aufruf der Registrar-API mit klaren Fehlermeldungen
* **Neu:** Anbieterspezifische Log-Kanäle für Domainregistrierungsereignisse (z. B. domain-seller-namecheap.log)
* **Neu:** Registranten-Kontaktfelder im Hauptformular für Registrierungs-/Signup-Checkout (angezeigt beim Registrieren einer Domain)
* **Verbessert:** Domain-Search-Checkout-Feld durch ein einheitliches Domain-Auswahlfeld mit Tabs für Subdomain, Registrierung und bestehende Domain ersetzt
* **Verbessert:** Domain-Produkteinstellungen werden inline auf der Produktbearbeitungsseite über das Core-Widget-System gerendert
* **Verbessert:** Kundendomain-Informationen werden in das Core-Domain-Mapping-Widget eingebunden statt in eine eigenständige Metabox
* **Verbessert:** TLD-Importassistent auf One-Click-Synchronisierung von allen Anbietern vereinfacht
* **Verbessert:** Namecheap-Domainverfügbarkeit nutzt Batch-API-Aufruf für schnellere Suche
* **Verbessert:** Namecheap-Preis-API nutzt korrekte Parameter und Antwortverarbeitung
* **Verbessert:** Zentralisierte TLD-Speicherung in einer einzelnen Netzwerkoption
* **Verbessert:** Domain-Aktivitätsprotokollierung für DNS-Änderungen, Transfers und Konfigurationsanwendung
* **Verbessert:** Vollständige TLD-Synchronisierung für OpenSRS mit IANA-Masterliste und Batch-Validierung
* **Verbessert:** Vollständige TLD-Synchronisierung für Namecheap mit paginierten API-Anfragen
* **Verbessert:** Legacy-Anbieterklassen durch Integration-Registry-Pattern ersetzt
* **Verbessert:** Einstellungen-Panel mit DNS- und Transfer-Konfiguration
* **Verbessert:** Telefonnummern werden automatisch in das Registrar-Format +CC.NNN formatiert

* **Verbessert:** Telefonfeld-Validierung entfernt Formatierungszeichen vor der Übermittlung
* **Verbessert:** Versionsanforderung auf Ultimate Multisite 2.4.12 angehoben, mit klarerem Hinweis
* **Verbessert:** CI-Workflow verwendet korrektes Checkout für sowohl Add-on als auch Core-Plugin
* **Verbessert:** prepare_registrant_info() liest aus beim Checkout gespeicherten Benutzer-Metadaten mit Rechnungsadressen-Fallback
* **Behoben:** Domain-Suche-AJAX schlug für nicht angemeldete Benutzer während des Checkout fehl
* **Behoben:** Domain-Preis-AJAX schlug für nicht angemeldete Benutzer während des Checkout fehl
* **Behoben:** Schwerwiegender Fehler durch erneute Deklaration der Spyc-Klasse beim Ausführen von WP-CLI-Befehlen
* **Behoben:** Namecheap-Sandbox-API-Timeout zu kurz
* **Behoben:** Text des Auswählen-Buttons in der Domain-Suche auf grünem Hintergrund nicht sichtbar
* **Behoben:** Domain-Registrierung schlug mit dem Fehler „RegistrantFirstName is Missing“ aufgrund fehlender Kontaktinformationen fehl
* **Behoben:** Domain-Eintrag wurde mit blog_id=0 erstellt, wenn die Website zum Checkout-Zeitpunkt noch nicht existierte
* **Behoben:** Einstellung für Standard-TLDs wurde als String statt als geparstes Array zurückgegeben
* **Entfernt:** Eigenständige Admin-Seite für Domain Management — wird jetzt über Core-Domain-Seiten gehandhabt

Version 1.0.0 - Veröffentlicht am 2025-09-28

**Umfassende Neufassung für Ultimate Multisite v2**

* **Neu:** Vollständige Neuentwicklung mit moderner PHP 7.4+-Architektur
* **Neu:** Nahtlose Integration mit dem Checkout-System von Ultimate Multisite v2
* **Neu:** Verwaltung von Domain-Produkten mit flexiblen Preisoptionen
* **Neu:** Architektur zur Unterstützung mehrerer Domain-Anbieter
* **Neu:** Integration von automatischer Verlängerung und Abonnement
* **Neu:** Oberfläche zur Verwaltung von Kundendomains
* **Neu:** Admin-Domain-Überwachung und Protokolle
* **Neu:** Coupon-Unterstützung für Domain-Produkte
* **Neu:** Umfassende Einstellungsverwaltung
* **Neu:** Entwicklerfreundliche, erweiterbare Codebasis
* **Verbessert:** Aktualisierter OpenSRS-Anbieter mit vollständiger Funktionsunterstützung
* **Verbessert:** Moderne UI im Einklang mit Ultimate Multisite v2
* **Behoben:** Sämtlicher veralteter v1-Code auf v2-Standards aktualisiert
* **Entfernt:** Legacy-v1-Kompatibilität (Breaking Change)

### Frühere Versionen (v1 Legacy) {#previous-versions-v1-legacy}

### Version 0.0.3 - 20/08/2019 {#version-003---20082019}

* Behoben: Inkompatibilität mit Groundhogg CRM
* Hinweis: Dies war die letzte v1-kompatible Version

### Version 0.0.2 - 07/12/2018 {#version-002---07122018}

* Behoben: Feld für den License Key entfernt
* Behoben: Plan-Tabs fehlen, wenn das Feature-Plugin aktiv ist
* Verbessert: Skip-Button im Registrierungsfeld hinzugefügt

### Version 0.0.1 - Erste Veröffentlichung {#version-001---initial-release}

* Grundlegende OpenSRS-Integration für WP Ultimo v1
* Einfache Domainsuche und -registrierung
* Planbasierte Domain-Berechtigungen
