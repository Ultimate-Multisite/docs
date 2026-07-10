---
title: Domain Seller Changelog
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Domain Seller-wijzigingslog {#domain-seller-changelog}

Versie 1.3.0 - Uitgebracht op 2026-06-02
- Nieuw: Een waarschuwing voor de netwerkbeheerder toegevoegd wanneer het HostAfrica reseller-saldo te laag wordt
- Nieuw: Automatische koppeling van nieuw geregistreerde domeinen aan de netwerksite toegevoegd
- Oplossing: Vereisten voor registrant-velden alleen toegepast bij het registreren van een nieuw domein
- Oplossing: Meldingen voor saldo-monitoring wegklikbaar gemaakt
- Oplossing: Ervoor gezorgd dat WooCommerce-factuurgegevens van de registrant behouden blijven
- Oplossing: Vereisten voor registrant-contactgegevens afgedwongen tijdens registratie
- Oplossing: Voorkomen dat domeinregistratieproducten worden aangemaakt met 0% opslag
- Oplossing: Domeinselecties en prijzen behouden tijdens de afrekensessiestroom
- Oplossing: Valutaweergave voor HostAfrica-domeinprijzen verbeterd
- Oplossing: Gedrag van de formulieractie bij afrekenen verbeterd om mismatches met WP-core query-vars te voorkomen
- Verbeterd: Documentatie voor HostAfrica reseller-configuratie gelinkt in de setup-begeleiding

Version 1.2.0 - Uitgebracht op 2026-05-25
- Nieuw: HostAfrica toegevoegd als een domeinverkoop-integratie met ondersteuning voor checkout, setup wizard, lookup, TLD/prijzen, registratie, verlenging, transfer, nameserver, DNS, EPP code, registrar lock en ID protection
- Nieuw: Openprovider toegevoegd als een domeinverkoop-integratie met ondersteuning voor reseller pricing, registratie, verlenging, transfer, nameserver, DNS, EPP code, registrar lock, WHOIS privacy en TLD sync
- Nieuw: Hostinger toegevoegd als een domeinverkoop-integratie met de gedeelde Hostinger API token uit de core-integratie voor beschikbaarheidscontroles, registratie, nameserver-updates, registrar lock en WHOIS privacy
- Verbeterd: Docblocks voor domeinlevenscyclus-acties en filters toegevoegd voor richtlijnen voor ontwikkelaarsintegratie
- Verbeterd: Metadata voor plugincompatibiliteit bijgewerkt naar WordPress 7.0 in de addon readme
- Verbeterd: Planningssjablonen bijgewerkt die worden gebruikt voor coördinatie van aankomende releases

Version 1.1.0 - Uitgebracht op 2026-05-08
- Nieuw: Aanmaken van DNS records (add_dns_record) geïmplementeerd voor ResellerClub-, Enom- en OpenSRS-registrars
- Fix: Default DNS Records-parser tolereert nu {DOMAIN}- en {SITE_URL}-tokens
- Fix: Slugs van domeinselectie-checkoutvelden hebben nu een namespace om botsing met site_url te voorkomen

Version 1.0.8 - Uitgebracht op 2026-05-07
- Fix: ResellerClub-domeinprijzen halen nu live kostprijzen op van het juiste API endpoint

Version 1.0.7 - Uitgebracht op 2026-05-06
* Fix: ResellerClub test_connection verzendt de vereiste tlds parameter

Version 1.0.6 - Uitgebracht op 2026-05-05
* Fix: ResellerClub-domeinregistratie werkt nu correct met verbeterde verwerking van API-responses en registry-gestuurde provider-routering
* Fix: UX-verbeteringen voor de admin-pagina Domein registreren
* Verwijderd: CyberPanel-registrar-integratie

Version 1.0.5 - Uitgebracht op 2026-04-02
* Nieuw: GoDaddy-registrar-integratie voor domeinregistratie en -beheer
* Nieuw: NameSilo-registrar-integratie
* Nieuw: ResellerClub-registrar-integratie
* Nieuw: SES-verzenddomein automatisch verifiëren bij domeinaankoop en mapping
* Fix: Plugin-constanten beschermen tegen herdefinitie in testomgeving
* Fix: MySQL-vlaggen correct gesplitst op woorden in install-wp-tests.sh

Version 1.0.4 - Uitgebracht op 2026-03-14
* **Fix:** Enkele ontbrekende css-assets
* **Fix:** Fout gerelateerd aan niet-beschikbare tlds

Version 1.0.3 - Uitgebracht op 2026-03-09
* **Fix:** Vue reactive property-fouten (domain_option, selected_domain, domain_provider) bij gebruik van de legacy aanmeldtemplate met de checkout-shortcode
* **Fix:** Verkeerde uitlijning van het subdomein-invoerveld en te grote tekst in het checkout-veld voor domeinselectie
* **Fix:** Verberg het voorbeeldblok "Je URL wordt" wanneer het veld voor domeinselectie aanwezig is

Version 1.0.2 - Uitgebracht op 2026-03-01
* **Verbeterd:** Globale markup-instellingen verwijderd van de instellingenpagina — prijzen zijn nu uitsluitend per product
* **Verbeterd:** Link "Domeinproducten beheren" toegevoegd op de instellingenpagina voor snelle navigatie
* **Verbeterd:** Duidelijkere veldbeschrijvingen en tooltips voor instellingen van domeinproducten (catch-all vs TLD-specifiek, markup-typen, introductieprijzen)
* **Verbeterd:** Betere beschrijvingen op de hele instellingenpagina (TLD's zoeken, verlengingen, DNS, meldingen)

Version 1.0.1 - Uitgebracht op 2026-02-27

* **Nieuw:** TLD-importtool voor bulkbeheer van prijzen
* **Nieuw:** Ondersteuning voor introductieprijzen voor domeinproducten
* **Nieuw:** E2E-testsuite met Cypress
* **Nieuw:** E-mailtemplates voor meldingen over de levenscyclus van domeinen
* **Nieuw:** Adresvelden van registrant in admin-modal voor domeinregistratie, vooraf ingevuld vanuit instellingen
* **Nieuw:** Interface voor DNS-beheer door klanten met ondersteuning voor records toevoegen, bewerken en verwijderen
* **Nieuw:** Checkout-optie "Bring your own domain" met automatische domeinkoppeling
* **Nieuw:** Site-URL automatisch genereren op basis van domeinnaam tijdens checkout
* **Nieuw:** Configuratie van standaard nameserver en DNS-records in instellingen
* **Nieuw:** Domeinregistratiegegevens en DNS-beheer op de kernpagina voor domeinbewerking
* **Nieuw:** Setup-wizard maakt automatisch een standaard domeinproduct aan met verstandige standaardwaarden
* **Nieuw:** Dagelijkse automatische TLD-sync via cron over alle geconfigureerde providers
* **Nieuw:** WHOIS-privacybescherming met configuratie per product (altijd aan, keuze van klant of uitgeschakeld)
* **Nieuw:** WHOIS-privacy-checkbox bij checkout met prijsweergave en ondersteuning voor donkere modus
* **Nieuw:** Admin-pagina Register Domain voor handmatige domeinregistratie
* **Nieuw:** Automatische plugin-updates via Ultimate Multisite-update server
* **Nieuw:** Filtertabblad voor domeinproducttype in productlijsttabel met paarse badge-styling
* **Nieuw:** Contactvelden van registrant (naam, adres, stad, staat/provincie, postcode, land, telefoon) op checkoutformulier voor domeinen

* **Nieuw:** Validatie van registrantvelden vóór het aanroepen van de registrar-API, met duidelijke foutmeldingen
* **Nieuw:** Providerspecifieke logkanalen voor domeinregistratiegebeurtenissen (bijv. domain-seller-namecheap.log)
* **Nieuw:** Contactvelden voor registranten op het hoofdformulier voor registratie/signup-checkout (getoond bij het registreren van een domein)
* **Verbeterd:** Domain Search-checkoutveld vervangen door een uniform Domain Selection-veld met ondersteuning voor tabs voor subdomein, registreren en bestaand domein
* **Verbeterd:** Instellingen voor domeinproducten worden inline weergegeven op de productbewerkingspagina via het core widget system
* **Verbeterd:** Domeininformatie van klanten koppelt aan de core domain mapping widget in plaats van een afzonderlijke metabox
* **Verbeterd:** TLD-importwizard vereenvoudigd tot one-click sync vanuit alle providers
* **Verbeterd:** Domeinbeschikbaarheid van Namecheap gebruikt batch-API-aanroep voor sneller zoeken
* **Verbeterd:** Pricing API van Namecheap gebruikt correcte parameters en response parsing
* **Verbeterd:** Gecentraliseerde TLD-opslag in één enkele network option
* **Verbeterd:** Logging van domeinactiviteit voor DNS-wijzigingen, transfers en configuratietoepassing
* **Verbeterd:** Volledige TLD-sync voor OpenSRS met IANA-masterlijst en batchvalidatie
* **Verbeterd:** Volledige TLD-sync voor Namecheap met gepagineerde API-aanvragen
* **Verbeterd:** Legacy provider classes vervangen door Integration Registry-patroon
* **Verbeterd:** Instellingenpaneel met DNS- en transferconfiguratie
* **Verbeterd:** Telefoonnummers worden automatisch geformatteerd naar +CC.NNN-registrarformaat

* **Verbeterd:** Validatie van telefoonveld verwijdert opmaaktekens vóór verzending
* **Verbeterd:** Versievereiste verhoogd naar Ultimate Multisite 2.4.12 met duidelijkere melding
* **Verbeterd:** CI-workflow gebruikt correcte checkout voor zowel addon als core plugin
* **Verbeterd:** prepare_registrant_info() leest uit tijdens checkout opgeslagen user meta met billing address-fallback
* **Opgelost:** Domain search AJAX faalde voor niet-ingelogde gebruikers tijdens checkout
* **Opgelost:** Domain pricing AJAX faalde voor niet-ingelogde gebruikers tijdens checkout
* **Opgelost:** Fatale fout door herdeclaratie van Spyc class bij het uitvoeren van WP-CLI-opdrachten
* **Opgelost:** Namecheap sandbox API-timeout te kort
* **Opgelost:** Tekst van de Select-knop bij domain search niet zichtbaar op groene achtergrond
* **Opgelost:** Domain registration faalde met fout "RegistrantFirstName is Missing" door ontbrekende contactgegevens
* **Opgelost:** Domain record aangemaakt met blog_id=0 wanneer site nog niet bestond op het moment van checkout
* **Opgelost:** Standaard TLDs-instelling geretourneerd als string in plaats van geparste array
* **Verwijderd:** Zelfstandige adminpagina voor Domain Management — wordt nu afgehandeld via core domain pages

Versie 1.0.0 - Uitgebracht op 2025-09-28

**Grote herschrijving voor Ultimate Multisite v2**

* **Nieuw:** Volledige herschrijving met moderne PHP 7.4+-architectuur
* **Nieuw:** Naadloze integratie met het Ultimate Multisite v2-checkout-systeem
* **Nieuw:** Domeinproductbeheer met flexibele prijsopties
* **Nieuw:** Architectuur voor ondersteuning van meerdere domeinproviders
* **Nieuw:** Integratie van automatische verlenging en abonnementen
* **Nieuw:** Interface voor klantdomeinbeheer
* **Nieuw:** Monitoring en logs voor beheerdersdomeinen
* **Nieuw:** Couponondersteuning voor domeinproducten
* **Nieuw:** Uitgebreid instellingenbeheer
* **Nieuw:** Uitbreidbare codebase die ontwikkelaarsvriendelijk is
* **Verbeterd:** Bijgewerkte OpenSRS-provider met volledige functieondersteuning
* **Verbeterd:** Moderne UI consistent met Ultimate Multisite v2
* **Opgelost:** Alle verouderde v1-code bijgewerkt naar v2-standaarden
* **Verwijderd:** Legacy v1-compatibiliteit (breaking change)

### Vorige versies (v1 Legacy) {#previous-versions-v1-legacy}

### Versie 0.0.3 - 20/08/2019 {#version-003---20082019}

* Opgelost: Incompatibiliteit met Groundhogg CRM
* Opmerking: Dit was de laatste v1-compatibele release

### Versie 0.0.2 - 07/12/2018 {#version-002---07122018}

* Opgelost: Het License Key-veld verwijderd
* Opgelost: Plan-tabs ontbreken wanneer de feature plugin actief is
* Verbeterd: Een overslaanknop toegevoegd aan het registratieveld

### Versie 0.0.1 - Eerste release {#version-001---initial-release}

* Basis OpenSRS-integratie voor WP Ultimo v1
* Eenvoudige domeinzoekopdracht en registratie
* Op plan gebaseerde domeinrechten
