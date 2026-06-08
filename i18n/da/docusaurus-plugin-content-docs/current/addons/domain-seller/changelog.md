---
title: Domæne-sælger ændringslog
sidebar_position: 99
_i18n_hash: bc3ab4e3f0076e80e8c38ed313f4430d
---
# Domain Seller Changelog

Version 1.1.0 - Udgivet den 2026-05-08
- Nye funktioner: Implementering af DNS record creation (add_dns_record) for ResellerClub, Enom og OpenSRS registreringer
- Fix: Standard parser for DNS Records tolererer nu {DOMAIN} og {SITE_URL} tokens
- Fix: Slutnamesene i checkout-feltet til domænevalg er nu navngivet (namespaced) for at undgå kollision med site_url

Version 1.0.8 - Udgivet den 2026-05-07
- Fix: Prissætning af ResellerClub domæner henter nu live omkostningspriser fra den korrekte API-endpoint

Version 1.0.7 - Udgivet den 2026-05-06
* Fix: Testforbindelsen i ResellerClub sender det nødvendige tlds parameter (#224)

Version 1.0.6 - Udgivet den 2026-05-05
* Fix: Domæneregistrering i ResellerClub virker nu korrekt med forbedret håndtering af API-svar og registry-drevet leverandørrouting
* Fix: UX-forbedringer på siden til domæneadministrator

Version 1.0.5 - Udgivet den 2026-04-02
* Nye funktioner: Integration med GoDaddy registrering og administration af domæner
* Nye funktioner: Integration med NameSilo registrering
* Nye funktioner: Integration med ResellerClub registrering
* Nye funktioner: Automatisk verifikation af SES sendende domæne ved domæneindkøb og kortlægning
* Fix: Guard plugin konstanter mod omdefinition i testmiljøet
* Fix: MySQL flags ordopdeling korrekt i install-wp-tests.sh

Version 1.0.4 - Udgivet den 2026-03-14
* **Fix:** Nogle manglende CSS-aktiveringer
* **Fix:** Fejl relateret til utilgængelige tlds

Version 1.0.3 - Udgivet den 2026-03-09
* **Fix:** Fejl i Vue reactive properties (domain_option, selected_domain, domain_provider) ved brug af det ældre signup template med checkout shortcode
* **Fix:** Ujævn placering af inputfeltet for subdomain og for stor tekst i feltet til valg af domæne under checkout
* **Fix:** Skjul "Din URL vil være" preview-blokken, når feltet til domænevalg er til stede

Version 1.0.2 - Udgivet den 2026-03-01
* **Forbedret:** Fjernet globale markeringindstillinger fra indstillingssiden – prissætning er nu udelukkende pr. produkt
* **Forbedret:** Tilføjet linket "Administrer domæne-produkter" på indstillingssiden til hurtig navigation
* **Forbedret:** Klarere feltbeskrivelser og tooltips for indstillinger af domæne-produkter (catch-all vs TLD-specifik, markeringstyper, introduktionspriser)
* **Forbedret:** Bedre beskrivelser gennem hele indstillingssiden (søg efter TLD'er, fornyelser, DNS, notifikationer)

Version 1.0.1 - Udgivet den 2026-02-27

* **Nyt:** TLD import værktøj til masseprissætning
* **Nyt:** Introducerende prissupport for domæne-produkter
* **Nyt:** E2E testsuite med Cypress
* **Nyt:** E-mail-skabeloner til notifikationer om domænenes livscyklus
* **Nyt:** Registrantadressefelter på modalen til admin-domæneregistrering, forudfyldt fra indstillinger
* **Nyt:** Kunde DNS-styringsgrænseflade med understøttelse af tilføj, rediger og slet af registreringer
* **Nyt:** "Brug din egen domæne" checkout-mulighed med automatisk domænemapping
* **Nyt:** Automatisk generering af websitets URL fra domænenavn under checkout
* **Nyt:** Standardindstillinger for nameserver og DNS-oplysninger i indstillinger
* **Nyt:** Domæneregistreringsdetaljer og DNS-styring på hoveddomæneedit-siden
* **Nyt:** Opsætningsovervejelse automatisk opretter et standarddomæne-produkt med fornuftige standardindstillinger
* **Nyt:** Daglig automatisk TLD synkronisering via cron på tværs af alle konfigurerbare udbydere
* **Nyt:** WHOIS privatlivsbeskyttelse med prissætning per produkt (altid tændt, kundevalg eller deaktiveret)
* **Nyt:** WHOIS privatlivs-afkrydsningsfelt ved checkout med prisvisning og support for mørk tilstand
* **Nyt:** Registrer Domæne admin side til manuel domæneregistrering
* **Nyt:** Automatisk plugin-opdatering via Ultimate Multisite opdateringsserver
* **Nyt:** Fanen for domæne-produkt-type i produktliste-tabellen med lilla badge-styling
* **Nyt:** Registrantkontaktfelter (navn, adresse, by, stat, postnummer, land, telefon) på domænecheckout-formularen

* **Nyt:** Validering af registreringsfelt før kald til registrar API med klare fejlmeddelelser
* **Nyt:** Udbyder-specifikke logkanaler for domæneregistreringsbegivenheder (f.eks. domain-seller-namecheap.log)
* **Nyt:** Registrant kontaktdetaljer på hovedregistrerings-/tilmeldingscheckoutformular (vises, når man registrerer et domæne)
* **Forbedret:** Erstatning af checkout-feltet til domænesøgning med et samlet Domænevalg-felt, der understøtter faner for subdomain, registrering og eksisterende domæner
* **Forbedret:** Domæneproduktindstillinger vises direkte på produktdetaljesiden via kerne widget-systemet
* **Forbedret:** Kundedata om domænen integreres i det kerne-domænemapping widget i stedet for en uafhængig metabox
* **Forbedret:** TLD import-wizard forenklet til én-klik synkronisering fra alle udbydere
* **Forbedret:** Namecheap domæne-tilgængelighed bruger batch API-kald for hurtigere søgning
* **Forbedret:** Namecheap pris-API bruger korrekte parametre og responsfortolkning
* **Forbedret:** Centraliseret TLD-opbevaring i én netværksmulighed
* **Forbedret:** Logning af domæneaktivitet for DNS-ændringer, overførsler og konfigurationsanvendelse
* **Forbedret:** Fuldt TLD-synkronisering for OpenSRS ved brug af IANA master list med batch-validering
* **Forbedret:** Fuldt TLD-synkronisering for Namecheap med paginerede API-anmodninger
* **Forbedret:** Erstatning af ældre udbyderklasser med Integration Registry mønster
* **Forbedret:** Indstillingspanel med DNS- og overførselskonfiguration
* **Forbedret:** Telefonnumre formateres automatisk til +CC.NNN udbyderformat

* **Forbedret:** Validering af telefonfelt fjerner formateringskarakterer før indsendelse
* **Forbedret:** Versionskrav hævet til Ultimate Multisite 2.4.12 med tydeligere meddelelse
* **Forbedret:** CI workflow bruger korrekt checkout for både addon- og core-plugins
* **Forbedret:** prepare_registrant_info() læser fra checkout-gemte brugerdata med faktureringsadresse som fallback
* **Udbedret:** Domænesøgning AJAX fejler for ikke-loggede brugere under checkout
* **Udbedret:** Domæne-prissøgning AJAX fejler for ikke-loggede brugere under checkout
* **Udbedret:** Spyc class redeclaration fatal error ved kørsel af WP-CLI kommandoer
* **Udbedret:** Namecheap sandbox API timeout for kort
* **Udbedret:** Tekst i Domænesøgning Select knap synlig på grøn baggrund
* **Udbedret:** Domæneregistrering fejler med fejl "RegistrantFirstName er manglende" grundet manglende kontaktoplysninger
* **Udbedret:** Domæneredstykket oprettes med blog_id=0, når siden endnu ikke eksisterer ved checkout-tidspunktet
* **Udbedret:** Standard TLD-indstillinger returneres som streng i stedet for en parseret array
* **Fjernet:** Standalone Domain Management admin side – nu håndteres via core domænesider

Version 1.0.0 - Udgivet den 2025-09-28

**Større omskrivning til Ultimate Multisite v2**

* **Nyt:** Fuld omskrivning med moderne PHP 7.4+ arkitektur
* **Nyt:** Problemfri integration med Ultimate Multisite v2 checkout system
* **Nyt:** Domæne produktstyring med fleksible prismuligheder
* **Nyt:** Arkitektur understøttende flere domæneudbydere
* **Nyt:** Auto-fornyelse og abonnement integration
* **Nyt:** Brugerdomæne management interface
* **Nyt:** Admin domæne monitorering og logs
* **Nyt:** Kuponsupport til domæne produkter
* **Nyt:** Omfattende indstillingsstyring
* **Nyt:** Udviklervenlig udvidbar kodebase
* **Forbedret:** Opdateret OpenSRS-udbyder med fuld funktionsstøtte
* **Forbedret:** Moderne UI konsistent med Ultimate Multisite v2
* **Fikset:** Alle de forældede v1 koder opdateret til v2 standarder
* **Fjernet:** Arvortvning fra v1 (brudende ændring)

### Tidligere Versioner (v1 Legacy)

### Version 0.0.3 - 20/08/2019

* Fikset: Inkompatibilitet med Groundhogg CRM
* Bemærkning: Dette var den sidste v1-kompatible udgivelse

### Version 0.0.2 - 07/12/2018

* Fikset: Fjernet feltet License Key
* Fikset: Planfanter manglende, når feature plugin er aktiv
* Forbedret: Tilføjet en skip-knap på registreringsfeltet

### Version 0.0.1 - Indledende udgivelse

* Grundlæggende OpenSRS integration for WP Ultimo v1
* Simpel domæne søgning og registrering
* Planbaserede domæne rettigheder
