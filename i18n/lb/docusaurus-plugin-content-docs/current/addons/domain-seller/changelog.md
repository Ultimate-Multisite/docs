---
title: Domain-Verkeefer Ännerungsprotokoll
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Domain Seller Ännerungsprotokoll {#domain-seller-changelog}

Versioun 1.3.0 - Verëffentlecht den 2026-06-02
- Nei: Eng Warnung am Netzwierk-Admin bäigesat, wann de HostAfrica Reseller-Saldo ze niddereg gëtt
- Nei: Automatesch Zouuerdnung vun nei registréierten Domänen un d'Netzwierk-Site bäigesat
- Fix: Ufuerderunge fir Registrant-Felder nëmme beim Registréiere vun enger neier Domän ugewannt
- Fix: Monitor-Saldo-Notizen ofweisbar gemaach
- Fix: Séchergestallt, datt WooCommerce Registrant-Rechnungsdetailer erhale bleiwen
- Fix: Ufuerderunge fir Registrant-Kontakt wärend der Registréierung duerchgesat
- Fix: Verhënnert, datt Domän-Registréierungsprodukter mat 0% Opschlag erstallt ginn
- Fix: Domän-Auswielen a Präisser duerch de Checkout-Sessiounsfloss erhale gelooss
- Fix: HostAfrica Domän-Präis-Währungsuweisung verbessert
- Fix: Verhalen vun der Checkout-Form-Action verbessert, fir WP-Core Query-Var-Onstëmmegkeeten ze verhënneren
- Verbessert: HostAfrica Reseller-Konfiguratiounsdokumentatioun an der Ariichtungsuleedung verlinkt

Versioun 1.2.0 - Verëffentlecht den 2026-05-25
- Nei: HostAfrica als Domän-Verkafs-Integratioun bäigesat mat Ënnerstëtzung fir Checkout, Ariichtungsassistent, Sich, TLD/Präisser, Registréierung, Erneierung, Transfert, Nameserver, DNS, EPP-Code, Registrar-Spär an ID-Schutz
- Nei: Openprovider als Domän-Verkafs-Integratioun bäigesat mat Ënnerstëtzung fir Reseller-Präisser, Registréierung, Erneierung, Transfert, Nameserver, DNS, EPP-Code, Registrar-Spär, WHOIS-Privatsphär an TLD-Synchroniséierung
- Nei: Hostinger als Domän-Verkafs-Integratioun bäigesat, déi de gemeinsame Hostinger API-Token aus der Kärintegratioun fir Disponibilitéitsprüfungen, Registréierung, Nameserver-Aktualiséierungen, Registrar-Spär an WHOIS-Privatsphär benotzt
- Verbessert: Domän-Liewenszyklus-Aktiouns- a Filter-Docblocks fir Uleedung zur Entwéckler-Integratioun bäigesat
- Verbessert: Plugin-Kompatibilitéitsmetadaten am Addon-Readme op WordPress 7.0 aktualiséiert
- Verbessert: Plangvirlagen aktualiséiert, déi fir d'Koordinatioun vun zukünftege Verëffentlechunge benotzt ginn

Versioun 1.1.0 - Verëffentlecht den 2026-05-08
- Nei: DNS-Record-Erstellung (add_dns_record) fir ResellerClub-, Enom- an OpenSRS-Registrare implementéiert
- Fix: Standard-DNS-Records-Parser toleréiert elo {DOMAIN}- an {SITE_URL}-Token
- Fix: Domän-Auswiel-Checkout-Feld-Slugs mat Namespace verseet, fir Kollisioun mat site_url ze verhënneren

Versioun 1.0.8 - Verëffentlecht den 2026-05-07
- Fix: ResellerClub Domän-Präisser ruffen elo Live-Käschtepräisser vum richtegen API-Endpunkt of

Versioun 1.0.7 - Verëffentlecht den 2026-05-06
* Fix: ResellerClub test_connection schéckt den erfuerderlechen tlds Parameter (#224)

Versioun 1.0.6 - Verëffentlecht den 2026-05-05
* Fix: ResellerClub Domän-Registréierung funktionéiert elo korrekt mat verbessertem Ëmgang mat API-Äntwerten a Registry-gedriwwenem Provider-Routing
* Fix: UX-Verbesserunge fir d'Admin-Säit Register Domain
* Ewechgeholl: CyberPanel Registrar-Integratioun

Versioun 1.0.5 - Verëffentlecht den 2026-04-02
* Nei: GoDaddy Registrar-Integratioun fir Domän-Registréierung a Gestioun
* Nei: NameSilo Registrar-Integratioun
* Nei: ResellerClub Registrar-Integratioun
* Nei: Automatesch Verifizéierung vun der SES-Sendendomän beim Domän-Kaf a Mapping
* Fix: Plugin-Konstanten géint Nei-Definitioun an Testëmfeld geschützt
* Fix: MySQL Flags ginn an install-wp-tests.sh korrekt a Wierder opgespléckt

Versioun 1.0.4 - Verëffentlecht den 2026-03-14
* **Fix:** E puer feelend css-Assets
* **Fix:** Feeler am Zesummenhang mat net verfügbare tlds

Versioun 1.0.3 - Verëffentlecht den 2026-03-09
* **Fix:** Vue reaktiv Eegenschaftsfeeler (domain_option, selected_domain, domain_provider) beim Benotze vun der legacy Umeldungsvirlag mam Checkout-Shortcode
* **Fix:** Feelerausrichtung vum Subdomän-Agefell an ze groussen Text am Domän-Auswiel-Checkout-Feld
* **Fix:** De Virschau-Block "Your URL will be" verstoppen, wann d'Domän-Auswiel-Feld präsent ass

Versioun 1.0.2 - Verëffentlecht den 2026-03-01
* **Verbessert:** Global Opschlag-Astellungen vun der Astellungssäit ewechgeholl — Präisser sinn elo exklusiv pro Produkt
* **Verbessert:** Link "Manage Domain Products" op der Astellungssäit fir séier Navigatioun bäigesat
* **Verbessert:** Méi kloer Feldbeschreiwungen an Tooltips fir Domän-Produkt-Astellungen (Catch-all vs. TLD-spezifesch, Opschlag-Typen, Aféierungspräisser)
* **Verbessert:** Besser Beschreiwungen duerch d'ganz Astellungssäit (TLDs sichen, Erneierungen, DNS, Notifikatiounen)

Versioun 1.0.1 - Verëffentlecht den 2026-02-27

* **Nei:** TLD-Import-Tool fir Bulk-Präisverwaltung
* **Nei:** Ënnerstëtzung fir Aféierungspräisser fir Domain-Produkter
* **Nei:** E2E-Test-Suite mat Cypress
* **Nei:** E-Mail-Templates fir Notifikatiounen am Domain-Liewenszyklus
* **Nei:** Registrant-Adressfelder am Admin-Domain-Registréierungsmodal, aus den Astellunge viraus ausgefëllt
* **Nei:** Client-DNS-Verwaltungsinterface mat Ënnerstëtzung fir Records derbäizesetzen, z'änneren an ze läschen
* **Nei:** "Bring your own domain"-Checkout-Optioun mat automateschem Domain-Mapping
* **Nei:** Site-URL beim Checkout automatesch aus dem Domain-Numm generéieren
* **Nei:** Standard-Nameserver- an DNS-Record-Konfiguratioun an den Astellungen
* **Nei:** Domain-Registréierungsdetailer an DNS-Verwaltung op der Kär-Domain-Ännerungssäit
* **Nei:** Setup-Wizard erstellt automatesch e Standard-Domain-Produkt mat sënnvollen Defaults
* **Nei:** Deeglechen automateschen TLD-Sync iwwer cron iwwer all konfiguréiert Provider
* **Nei:** WHOIS-Dateschutz mat Konfiguratioun pro Produkt (ëmmer un, Client-Wiel oder deaktivéiert)
* **Nei:** WHOIS-Dateschutz-Checkout-Checkbox mat Präisuweisung an Dark-Mode-Ënnerstëtzung
* **Nei:** Register Domain-Admin-Säit fir manuell Domain-Registréierung
* **Nei:** Automatesch Plugin-Aktualiséierungen iwwer den Ultimate Multisite Update-Server
* **Nei:** Domain-Produkt-Typ-Filter-Tab an der Produktlëschtentabell mat purpurroudem Badge-Styling
* **Nei:** Registrant-Kontaktfelder (Numm, Adress, Stad, Staat, Postleitzuel, Land, Telefon) am Domain-Checkout-Formulaire
* **Nei:** Registrant-Feldvalidatioun virum Opruff vun der Registrar API mat kloeren Fehlermeldungen
* **Nei:** Provider-spezifesch Log-Channels fir Domain-Registréierungsevenementer (z. B. domain-seller-namecheap.log)
* **Nei:** Registrant-Kontaktfelder am Haaptregistréierungs-/Signup-Checkout-Formulaire (ugewise beim Registréiere vun enger Domain)
* **Verbessert:** Domain Search-Checkout-Feld duerch vereenheetlecht Domain Selection-Feld ersat, mat Ënnerstëtzung fir Subdomain-, Registréieren- an existent-Domain-Tabs
* **Verbessert:** Domain-Produkt-Astellunge ginn inline op der Produkt-Ännerungssäit iwwer de Kär-Widget-System gerendert
* **Verbessert:** Client-Domain-Info hänkt sech an de Kär-Domain-Mapping-Widget an amplaz vun enger eegestänneger Metabox
* **Verbessert:** TLD-Import-Wizard op One-Click-Sync vun alle Provider vereinfacht
* **Verbessert:** Namecheap-Domain-Verfügbarkeet benotzt Batch-API-Opruff fir méi séier Sich
* **Verbessert:** Namecheap-Präis-API benotzt korrekt Parameteren an Äntwert-Parsing
* **Verbessert:** Zentraliséiert TLD-Späicherung an enger eenzeger Network-Optioun
* **Verbessert:** Domain-Aktivitéitslogging fir DNS-Ännerungen, Transfere a Konfiguratiounsapplikatioun
* **Verbessert:** Vollstännegen TLD-Sync fir OpenSRS mat IANA-Masterlëscht a Batch-Validatioun
* **Verbessert:** Vollstännegen TLD-Sync fir Namecheap mat paginéierten API-Ufroen
* **Verbessert:** Legacy-Provider-Klassen duerch Integration Registry-Muster ersat
* **Verbessert:** Astellungspanel mat DNS- an Transferkonfiguratioun
* **Verbessert:** Telefonsnummeren automatesch an +CC.NNN-Registrar-Format formatéiert
* **Verbessert:** Telefonfeld-Validatioun läscht Formatéierungszeeche virum Ofschécken
* **Verbessert:** Versiounsufuerderung op Ultimate Multisite 2.4.12 eropgesat mat méi kloerem Hiwäis
* **Verbessert:** CI-Workflow benotzt korrekten Checkout fir souwuel Addon wéi och Kär-Plugin
* **Verbessert:** prepare_registrant_info() liest aus beim Checkout gespäicherter User-Meta mat Billing-Adress-Fallback
* **Behuewen:** Domain-Sich-AJAX huet fir net ageloggt Benotzer beim Checkout net funktionéiert
* **Behuewen:** Domain-Präis-AJAX huet fir net ageloggt Benotzer beim Checkout net funktionéiert
* **Behuewen:** Fatalen Spyc-Klass-Neideklaratiounsfeeler beim Ausféiere vu WP-CLI-Befehler
* **Behuewen:** Namecheap-Sandbox-API-Timeout ze kuerz
* **Behuewen:** Domain-Sich Select-Knäppchentext net siichtbar op gréngem Hannergrond
* **Behuewen:** Domain-Registréierung ass mat "RegistrantFirstName is Missing"-Feeler wéinst feelender Kontaktinfo gescheitert
* **Behuewen:** Domain-Record mat blog_id=0 erstallt, wann d'Site zum Checkout-Zäitpunkt nach net existéiert huet
* **Behuewen:** Standard-TLDs-Astellung gouf als String amplaz vun engem geparsten Array zeréckginn
* **Ewechgeholl:** Eegestänneg Domain Management-Admin-Säit — elo iwwer Kär-Domain-Säiten ofgehandelt

Versioun 1.0.0 - Verëffentlecht den 2025-09-28

**Grouss Neiopschreiwung fir Ultimate Multisite v2**

* **Nei:** Komplett Neiopschreiwung mat moderner PHP 7.4+-Architektur
* **Nei:** Nahtlos Integratioun mam Ultimate Multisite v2 Checkout-System
* **Nei:** Domain-Produktverwaltung mat flexiblen Präisoptiounen
* **Nei:** Ënnerstëtzung fir Multiple-Domain-Provider-Architektur
* **Nei:** Auto-Erneierung an Abonnementsintegratioun
* **Nei:** Client-Domain-Verwaltungsinterface
* **Nei:** Admin-Domain-Iwwerwaachung a Logs
* **Nei:** Coupon-Ënnerstëtzung fir Domain-Produkter
* **Nei:** Ëmfaassend Astellungsverwaltung
* **Nei:** Entwécklerfrëndlech erweiderbar Codebase
* **Verbessert:** Aktualiséierten OpenSRS-Provider mat voller Feature-Ënnerstëtzung
* **Verbessert:** Modern UI konsequent mat Ultimate Multisite v2
* **Behuewen:** All ofgeschaaften v1-Code op v2-Standarden aktualiséiert
* **Ewechgeholl:** Legacy-v1-Kompatibilitéit (breaking change)

### Vireg Versiounen (v1 Legacy) {#previous-versions-v1-legacy}

### Versioun 0.0.3 - 20/08/2019 {#version-003---20082019}

* Behuewen: Inkompatibilitéit mat Groundhogg CRM
* Notiz: Dëst war déi lescht v1-kompatibel Verëffentlechung

### Versioun 0.0.2 - 07/12/2018 {#version-002---07122018}

* Behuewen: License Key-Feld ewechgeholl
* Behuewen: Plan-Tabs feelen, wann de Feature-Plugin aktiv ass
* Verbessert: Skip-Knäppchen um Registréierungsfeld derbäigesat

### Versioun 0.0.1 - Éischt Verëffentlechung {#version-001---initial-release}

* Basis-OpenSRS-Integratioun fir WP Ultimo v1
* Einfach Domain-Sich a Registréierung
* Plan-baséiert Domain-Berechtegungen
