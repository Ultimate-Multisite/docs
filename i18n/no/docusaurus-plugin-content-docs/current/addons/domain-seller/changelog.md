---
title: Endringslogg for Domain Seller
sidebar_position: 99
_i18n_hash: bc3ab4e3f0076e80e8c38ed313f4430d
---
# Domain Seller Endringslogg

Versjon 1.1.0 - Utgitt 2026-05-08
- Ny: DNS-oppretting (add_dns_record) implementert for registratorene ResellerClub, Enom og OpenSRS
- Fix: Standard DNS Records parser tolererer nå tokenene {DOMAIN} og {SITE_URL}
- Fix: Feltnavn for domenevalg i kassen er nå namespaced for å forhindre kollisjon med site_url

Versjon 1.0.8 - Utgitt 2026-05-07
- Fix: Domene-prising for ResellerClub henter nå live kostpriser fra riktig API-endepunkt

Versjon 1.0.7 - Utgitt 2026-05-06
* Fix: ResellerClub test_connection sender nå påkrevd tlds-parameter (#224)

Versjon 1.0.6 - Utgitt 2026-05-05
* Fix: Domeneregistrering for ResellerClub fungerer nå korrekt med forbedret API-responsbehandling og registry-drevet leverandør-ruting
* Fix: Forbedret brukeropplevelse (UX) på siden for "Register Domain"
* Fjernet: CyberPanel registrar-integrasjon

Versjon 1.0.5 - Utgitt 2026-04-02
* Ny: GoDaddy registrar-integrasjon for domeneregistrering og -administrasjon
* Ny: NameSilo registrar-integrasjon
* Ny: ResellerClub registrar-integrasjon
* Ny: Automatisk verifisering av SES-sendende domene ved domenekjøp og mapping
* Fix: Guard plugin-konstanter beskyttet mot redefinisjon i testmiljø
* Fix: MySQL flags splittes korrekt i install-wp-tests.sh

Versjon 1.0.4 - Utgitt 2026-03-14
* **Fix:** Noen manglende CSS-ressurser
* **Fix:** Feil relatert til utilgjengelige tlds

Versjon 1.0.3 - Utgitt 2026-03-09
* **Fix:** Vue reactive property-feil (domain_option, selected_domain, domain_provider) når man bruker det eldre registreringsmal-formatet med kodesnutt for kassen
* **Fix:** Feiljustering av inputfelt for underdomene og for stort tekstområde i domenevalgfeltet i kassen
* **Fix:** Skjuler forhåndsvisningsblokken "Your URL will be" når domenevalgfeltet er til stede

Versjon 1.0.2 - Utgitt 2026-03-01
* **Forbedret:** Fjernet globale markeringinnstillinger fra innstillingssiden — prising er nå utelukkende per produkt
* **Forbedret:** Lagt til lenke til "Manage Domain Products" på innstillingssiden for rask navigasjon
* **Forbedret:** Klarere feltbeskrivelser og verktøytips for domenproduktinnstillinger (catch-all vs TLD-spesifikt, markeringstyper, introduksjonspriser)
* **Forbedret:** Bedre beskrivelser gjennom hele innstillingssiden (søk TLD-er, fornyelser, DNS, varsler)

Versjon 1.0.1 - Utgitt 2026-02-27

* **Ny:** TLD-importverktøy for storskala prishåndtering
* **Ny:** Støtte for introduksjonspriser for domenprodukter
* **Ny:** E2E test-suite med Cypress
* **Ny:** E-postmaler for domenlivssyklusvarsler
* **Ny:** Registrantadressefelt på admin-modalen for domeneregistrering, forhåndsutfylt fra innstillingene
* **Ny:** Kunde-DNS-administrasjonsgrensesnitt med støtte for å legge til, redigere og slette poster
* **Ny:** "Bring your own domain"-kassealternativ med automatisk domenemapping
* **Ny:** Automatisk generering av site URL fra domenenavn under kassen
* **Ny:** Standard nameserver- og DNS-oppsett i innstillingene
* **Ny:** Domeneregistreringsdetaljer og DNS-administrasjon på kjernedomen-redigeringssiden
* **Ny:** Oppsettveiviseren oppretter automatisk et standard domenprodukt med fornuftige standardinnstillinger
* **Ny:** Daglig automatisk TLD-synkronisering via cron på tvers av alle konfigurerte leverandører
* **Ny:** WHOIS-personvern med konfigurasjon per produkt (alltid på, kundevalg eller deaktivert)
* **Ny:** WHOIS-personverkskrysstikk med prisoppvisning og støtte for mørk modus
* **Ny:** "Register Domain" admin-side for manuell domeneregistrering
* **Ny:** Automatisk plugin-oppdatering via Ultimate Multisite update server
* **Ny:** Domeneprodukt-typefilterfane i produktlistetabell med lilla merke-styling
* **Ny:** Registrantkontaktfelt (navn, adresse, by, stat, postnummer, land, telefon) på domenekasse-skjemaet
* **Ny:** Validering av registrantfelt før det kalles registratorens API med klare feilmeldinger
* **Ny:** Leverandørspesifikke loggkanaler for domeneregistreringshendelser (f.eks. domain-seller-namecheap.log)
* **Ny:** Registrantkontaktfelt på hovedregistrerings-/påmeldingskasse-skjemaet (vises ved registrering av et domene)
* **Forbedret:** Erstattet "Domain Search" kassefelt med et samlet "Domain Selection" felt som støtter faner for underdomene, registrere og eksisterende domene
* **Forbedret:** Domenproduktinnstillinger vises inline på produktoppføringssiden via kjernemodulen
* **Forbedret:** Kunde-domeneinformasjon kobles til kjernedomen-mappningsmodulen i stedet for en frittstående metaboks
* **Forbedret:** TLD-import-wizard forenklet til ett-klikk-synk fra alle leverandører
* **Forbedret:** Namecheap domenekontrollerbarhet bruker batch API-kall for raskere søk
* **Forbedret:** Namecheap prising API bruker korrekte parametere og respons-parsing
* **Forbedret:** Sentralisert TLD-lagring i én nettverksopsjon
* **Forbedret:** Domeneaktivitetslogging for DNS-endringer, overføringer og konfigurasjonsapplikasjon
* **Forbedret:** Full TLD-synkronisering for OpenSRS ved bruk av IANA master list med batch-validering
* **Forbedret:** Full TLD-synkronisering for Namecheap med paginerte API-forespørsler
* **Forbedret:** Erstattet eldre leverandørklasser med Integration Registry-mønster
* **Forbedret:** Innstillingspanel med DNS- og overføringskonfigurasjon
* **Forbedret:** Telefonnumre automatisk formatert til +CC.NNN registrar-format
* **Forbedret:** Validering av telefonfelt fjerner formateringskarakterer før innsending
* **Forbedret:** Versjonskrav økt til Ultimate Multisite 2.4.12 med klarere varsel
* **Forbedret:** CI-arbeidsflyt bruker korrekt kasse for både tilleggs- og kjernepakket
* **Forbedret:** prepare_registrant_info() leser fra kasse-lagret bruker-meta med faktureringsadresse som fallback
* **Fixet:** Domain search AJAX feiler for ikke-påloggede brukere under kassen
* **Fixet:** Domain pricing AJAX feiler for ikke-påloggede brukere under kassen
* **Fixet:** Spyc class redeklareringsfatalfeil ved kjøring av WP-CLI-kommandoer
* **Fixet:** Namecheap sandbox API timeout for kort
* **Fixet:** Select-knappetekst for domenesøk er ikke synlig på grønn bakgrunn
* **Fixet:** Domeneregistrering feiler med feilmeldingen "RegistrantFirstName is Missing" på grunn av manglende kontaktinfo
* **Fixet:** Domeneoppføring opprettes med blog_id=0 når nettstedet ennå ikke eksisterte ved kassetidspunktet
* **Fixet:** Standard TLD-innstilling returneres som streng i stedet for parsert array
* **Fjernet:** Frittstående "Domain Management" admin-side — håndteres nå gjennom kjernedomen-sider

Versjon 1.0.0 - Utgitt 2025-09-28

**Stort omskrivning for Ultimate Multisite v2**

* **Ny:** Fullstendig omskrivning med moderne PHP 7.4+ arkitektur
* **Ny:** Sømløs integrasjon med Ultimate Multisite v2 kassesystem
* **Ny:** Domeneproduktadministrasjon med fleksible prisalternativer
* **Ny:** Arkitektur for støtte av flere domeneleverandører
* **Ny:** Automatisk fornyelse og abonnement-integrasjon
* **Ny:** Kunde-domeneadministrasjonsgrensesnitt
* **Ny:** Admin-domeneovervåking og logger
* **Ny:** Kupongstøtte for domeneprodukter
* **Ny:** Omfattende innstillingshåndtering
* **Ny:** Utvikler-vennlig utvidbar kodebase
* **Forbedret:** Oppdatert OpenSRS-leverandør med full funksjonalitet
* **Forbedret:** Moderne UI konsistent med Ultimate Multisite v2
* **Fixet:** All utdatert v1-kode oppdatert til v2-standarder
* **Fjernet:** Legacy v1-kompatibilitet (bruddendring)

### Tidligere versjoner (v1 Legacy)

### Versjon 0.0.3 - 20/08/2019

* Fixet: Inkompatibilitet med Groundhogg CRM
* Merknad: Dette var den siste v1-kompatible utgivelsen

### Versjon 0.0.2 - 07/12/2018

* Fixet: Fjernet feltet for lisensnøkkel
* Fixet: Planfaner mangler når funksjonspluginen er aktiv
* Forbedret: Lagt til en "skip"-knapp på registreringsfeltet

### Versjon 0.0.1 - Første utgivelse

* Grunnleggende OpenSRS-integrasjon for WP Ultimo v1
* Enkelt domenesøk og registrering
* Planbasert domeneautorisasjon
