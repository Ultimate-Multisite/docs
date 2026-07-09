---
title: Domænesælger ændringslog
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Domain Seller-ændringslog

Version 1.3.0 - Udgivet den 2026-06-02
- Nyt: Tilføjede en network-admin-advarsel, når HostAfrica-forhandlerens saldo bliver for lav
- Nyt: Tilføjede automatisk mapping af nyregistrerede domæner til netværkssitet
- Rettelse: Anvendte kun krav til registrantfelter ved registrering af et nyt domæne
- Rettelse: Gjorde meddelelser om saldoovervågning afviselige
- Rettelse: Sikrede, at WooCommerce-registrantens faktureringsoplysninger bevares
- Rettelse: Håndhævede krav til registrantkontakt under registrering
- Rettelse: Forhindrede, at domæneregistreringsprodukter blev oprettet med 0 % markup
- Rettelse: Bevarede domænevalg og priser gennem checkout-sessionens flow
- Rettelse: Forbedrede visning af valuta for HostAfrica-domænepriser
- Rettelse: Forbedrede checkout-form-action-adfærd for at forhindre uoverensstemmelser med WP-core query-var
- Forbedret: Linkede til dokumentation for HostAfrica-forhandlerkonfiguration i setup-vejledningen

Version 1.2.0 - Udgivet den 2026-05-25
- Nyt: Tilføjede HostAfrica som en domænesalgsintegration med understøttelse af checkout, setup-guide, opslag, TLD/priser, registrering, fornyelse, overførsel, nameserver, DNS, EPP-kode, registrar-lås og ID-beskyttelse
- Nyt: Tilføjede Openprovider som en domænesalgsintegration med understøttelse af forhandlerpriser, registrering, fornyelse, overførsel, nameserver, DNS, EPP-kode, registrar-lås, WHOIS-privatliv og TLD-synkronisering
- Nyt: Tilføjede Hostinger som en domænesalgsintegration, der bruger den delte Hostinger API-token fra kerneintegrationen til tilgængelighedstjek, registrering, nameserver-opdateringer, registrar-lås og WHOIS-privatliv
- Forbedret: Tilføjede docblocks for domænelivscyklus-handlinger og filtre som vejledning til udviklerintegration
- Forbedret: Opdaterede plugin-kompatibilitetsmetadata til WordPress 7.0 i addon-readme
- Forbedret: Opdaterede planlægningsskabeloner, der bruges til koordinering af kommende udgivelser

Version 1.1.0 - Udgivet den 2026-05-08
- Nyt: Oprettelse af DNS-poster (add_dns_record) implementeret for ResellerClub-, Enom- og OpenSRS-registrarer
- Rettelse: Standardparseren for DNS Records tolererer nu {DOMAIN}- og {SITE_URL}-tokens
- Rettelse: Slugs for checkout-felter til domænevalg namespaced for at forhindre kollision med site_url

Version 1.0.8 - Udgivet den 2026-05-07
- Rettelse: ResellerClub-domænepriser henter nu live kostpriser fra det korrekte API-endpoint

Version 1.0.7 - Udgivet den 2026-05-06
* Rettelse: ResellerClub test_connection sender påkrævet tlds-parameter (#224)

Version 1.0.6 - Udgivet den 2026-05-05
* Rettelse: ResellerClub-domæneregistrering fungerer nu korrekt med forbedret håndtering af API-svar og registry-drevet providerrouting
* Rettelse: UX-forbedringer på admin-siden Register Domain
* Fjernet: CyberPanel-registrarintegration

Version 1.0.5 - Udgivet den 2026-04-02
* Nyt: GoDaddy-registrarintegration til domæneregistrering og administration
* Nyt: NameSilo-registrarintegration
* Nyt: ResellerClub-registrarintegration
* Nyt: Automatisk verificering af SES-afsenderdomæne ved domænekøb og mapping
* Rettelse: Beskyt plugin-konstanter mod redefinering i testmiljø
* Rettelse: MySQL-flag word-split korrekt i install-wp-tests.sh

Version 1.0.4 - Udgivet den 2026-03-14
* **Rettelse:** Nogle manglende css-assets
* **Rettelse:** Fejl relateret til utilgængelige tlds

Version 1.0.3 - Udgivet den 2026-03-09
* **Rettelse:** Vue reactive property-fejl (domain_option, selected_domain, domain_provider) ved brug af den ældre signup-skabelon med checkout-shortcode
* **Rettelse:** Fejljustering af subdomæneinputfelt og for stor tekst i checkout-feltet til domænevalg
* **Rettelse:** Skjul forhåndsvisningsblokken "Din URL bliver", når feltet til domænevalg er til stede

Version 1.0.2 - Udgivet den 2026-03-01
* **Forbedret:** Fjernede globale markup-indstillinger fra indstillingssiden — priser er nu udelukkende pr. produkt
* **Forbedret:** Tilføjede linket "Administrer domæneprodukter" på indstillingssiden for hurtig navigation
* **Forbedret:** Klarere feltbeskrivelser og tooltips for indstillinger for domæneprodukter (catch-all vs TLD-specifik, markup-typer, introduktionspriser)
* **Forbedret:** Bedre beskrivelser på hele indstillingssiden (søg TLD'er, fornyelser, DNS, notifikationer)

Version 1.0.1 - Udgivet den 2026-02-27

* **Nyt:** TLD-importværktøj til massehåndtering af priser
* **Nyt:** Understøttelse af introduktionspriser for domæneprodukter
* **Nyt:** E2E-testsuite med Cypress
* **Nyt:** E-mailskabeloner til notifikationer om domæners livscyklus
* **Nyt:** Registrantadressefelter i admin-modal til domæneregistrering, forudfyldt fra indstillinger
* **Nyt:** Kundens DNS-administrationsgrænseflade med understøttelse af tilføjelse, redigering og sletning af records
* **Nyt:** Checkout-mulighed for "Bring your own domain" med automatisk domænemapping
* **Nyt:** Automatisk generering af site-URL fra domænenavn under checkout
* **Nyt:** Konfiguration af standard-nameserver og DNS-record i indstillinger
* **Nyt:** Domæneregistreringsdetaljer og DNS-administration på den centrale domæneredigeringsside
* **Nyt:** Opsætningsguide opretter automatisk et standarddomæneprodukt med fornuftige standardindstillinger
* **Nyt:** Daglig automatisk TLD-synkronisering via cron på tværs af alle konfigurerede udbydere
* **Nyt:** WHOIS-privatlivsbeskyttelse med konfiguration pr. produkt (altid aktiveret, kundens valg eller deaktiveret)
* **Nyt:** WHOIS-privatlivsafkrydsningsfelt i checkout med prisvisning og understøttelse af dark mode
* **Nyt:** Register Domain-adminside til manuel domæneregistrering
* **Nyt:** Automatiske plugin-opdateringer via Ultimate Multisite update server
* **Nyt:** Filterfane for domæneprodukttype i produktlistetabel med lilla badge-styling
* **Nyt:** Registrantkontaktfelter (navn, adresse, by, stat, postnummer, land, telefon) på domæne-checkoutformular
* **Nyt:** Validering af registrantfelter før kald til registrator-API med klare fejlmeddelelser
* **Nyt:** Udbyderspecifikke logkanaler til domæneregistreringshændelser (f.eks. domain-seller-namecheap.log)
* **Nyt:** Registrantkontaktfelter på hovedformularen til registrering/tilmelding i checkout (vises ved registrering af et domæne)
* **Forbedret:** Erstattede Domain Search-checkoutfeltet med et samlet Domain Selection-felt, der understøtter faner for subdomæne, registrering og eksisterende domæne
* **Forbedret:** Domæneproduktindstillinger vises inline på produktredigeringssiden via det centrale widgetsystem
* **Forbedret:** Kundens domæneinfo kobles til den centrale domænemapping-widget i stedet for en selvstændig metabox
* **Forbedret:** TLD-importguiden er forenklet til ét-klik-synkronisering fra alle udbydere
* **Forbedret:** Namecheap-domænetilgængelighed bruger batch-API-kald for hurtigere søgning
* **Forbedret:** Namecheap-pris-API bruger korrekte parametre og svarparsing
* **Forbedret:** Centraliseret TLD-lagring i en enkelt netværksindstilling
* **Forbedret:** Logning af domæneaktivitet for DNS-ændringer, overførsler og anvendelse af konfiguration
* **Forbedret:** Fuld TLD-synkronisering for OpenSRS ved hjælp af IANA-masterliste med batchvalidering
* **Forbedret:** Fuld TLD-synkronisering for Namecheap med paginerede API-anmodninger
* **Forbedret:** Erstattede ældre udbyderklasser med Integration Registry-mønster
* **Forbedret:** Indstillingspanel med DNS- og overførselskonfiguration
* **Forbedret:** Telefonnumre formateres automatisk til +CC.NNN-registratorformat
* **Forbedret:** Validering af telefonfelt fjerner formateringstegn før indsendelse
* **Forbedret:** Versionskrav hævet til Ultimate Multisite 2.4.12 med tydeligere meddelelse
* **Forbedret:** CI-workflow bruger korrekt checkout for både addon og centralt plugin
* **Forbedret:** prepare_registrant_info() læser fra checkout-gemt user meta med fallback til faktureringsadresse
* **Rettet:** Domænesøgning via AJAX fejlede for ikke-indloggede brugere under checkout
* **Rettet:** Domænepriser via AJAX fejlede for ikke-indloggede brugere under checkout
* **Rettet:** Fatal fejl ved Spyc-klasse-redeklaration ved kørsel af WP-CLI-kommandoer
* **Rettet:** Namecheap sandbox-API-timeout var for kort
* **Rettet:** Tekst på Select-knappen i domænesøgning var ikke synlig på grøn baggrund
* **Rettet:** Domæneregistrering fejlede med fejlen "RegistrantFirstName is Missing" på grund af manglende kontaktinfo
* **Rettet:** Domæne-record oprettet med blog_id=0, når site endnu ikke fandtes på checkout-tidspunktet
* **Rettet:** Standard-TLD-indstilling blev returneret som streng i stedet for parset array
* **Fjernet:** Selvstændig Domain Management-adminside — håndteres nu via centrale domænesider

Version 1.0.0 - Udgivet den 2025-09-28

**Større omskrivning til Ultimate Multisite v2**

* **Nyt:** Komplet omskrivning med moderne PHP 7.4+-arkitektur
* **Nyt:** Problemfri integration med Ultimate Multisite v2-checkoutsystem
* **Nyt:** Domæneprodukthåndtering med fleksible prisindstillinger
* **Nyt:** Arkitektur med understøttelse af flere domæneudbydere
* **Nyt:** Integration med automatisk fornyelse og abonnementer
* **Nyt:** Kundens domæneadministrationsgrænseflade
* **Nyt:** Admin-overvågning af domæner og logge
* **Nyt:** Kuponunderstøttelse for domæneprodukter
* **Nyt:** Omfattende administration af indstillinger
* **Nyt:** Udviklervenlig, udvidelig kodebase
* **Forbedret:** Opdateret OpenSRS-udbyder med fuld funktionsunderstøttelse
* **Forbedret:** Moderne UI i overensstemmelse med Ultimate Multisite v2
* **Rettet:** Al forældet v1-kode opdateret til v2-standarder
* **Fjernet:** Ældre v1-kompatibilitet (brydende ændring)

### Tidligere versioner (v1 Legacy)

### Version 0.0.3 - 20/08/2019

* Rettet: Inkompatibilitet med Groundhogg CRM
* Bemærk: Dette var den sidste v1-kompatible udgivelse

### Version 0.0.2 - 07/12/2018

* Rettet: Fjernede License Key-feltet
* Rettet: Plan-faner mangler, når funktions-plugin’et er aktivt
* Forbedret: Tilføjede en spring over-knap på registreringsfeltet

### Version 0.0.1 - Første udgivelse

* Grundlæggende OpenSRS-integration for WP Ultimo v1
* Simpel domænesøgning og registrering
* Plan-baserede domænetilladelser
