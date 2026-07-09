---
title: Endringslogg for domeneselger
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Domain Seller Changelog

Versjon 1.3.0 - Utgitt 2026-06-02
- Nytt: La til en advarsel i network-admin når HostAfrica reseller-saldoen blir for lav
- Nytt: La til automatisk mapping av nyregistrerte domener til nettverksnettstedet
- Rettelse: Brukte krav til registrantfelt bare ved registrering av et nytt domene
- Rettelse: Gjorde saldoovervåkingsvarsler avvisbare
- Rettelse: Sørget for at WooCommerce registrant-faktureringsdetaljer bevares
- Rettelse: Håndhevet krav til registrantkontakt under registrering
- Rettelse: Hindret at domeneregistreringsprodukter opprettes med 0 % påslag
- Rettelse: Bevarte domenevalg og prising gjennom checkout-øktflyten
- Rettelse: Forbedret visning av valuta for HostAfrica-domeneprising
- Rettelse: Forbedret form-action-oppførsel i checkout for å forhindre avvik med WP-core query-var
- Forbedret: Lenket til dokumentasjon for HostAfrica reseller-konfigurasjon i oppsettsveiledningen

Versjon 1.2.0 - Utgitt 2026-05-25
- Nytt: La til HostAfrica som en domenesalgsintegrasjon med støtte for checkout, oppsettsveiviser, oppslag, TLD/prising, registrering, fornyelse, overføring, navnetjener, DNS, EPP-kode, registrar-lås og ID-beskyttelse
- Nytt: La til Openprovider som en domenesalgsintegrasjon med støtte for reseller-prising, registrering, fornyelse, overføring, navnetjener, DNS, EPP-kode, registrar-lås, WHOIS-personvern og TLD-synkronisering
- Nytt: La til Hostinger som en domenesalgsintegrasjon som bruker den delte Hostinger API-tokenen fra kjerneintegrasjonen for tilgjengelighetssjekker, registrering, navnetjeneroppdateringer, registrar-lås og WHOIS-personvern
- Forbedret: La til docblocks for domene-livssyklushandlinger og filtre for veiledning om utviklerintegrasjon
- Forbedret: Oppdaterte metadata for plugin-kompatibilitet til WordPress 7.0 i addon-readme
- Forbedret: Oppdaterte planleggingsmaler brukt til koordinering av kommende utgivelser

Versjon 1.1.0 - Utgitt 2026-05-08
- Nytt: Opprettelse av DNS-poster (add_dns_record) implementert for ResellerClub-, Enom- og OpenSRS-registrarer
- Rettelse: Standardparseren for DNS Records tolererer nå {DOMAIN}- og {SITE_URL}-tokener
- Rettelse: Slugs for checkout-felt for domenevalg er navnerommet for å forhindre kollisjon med site_url

Versjon 1.0.8 - Utgitt 2026-05-07
- Rettelse: ResellerClub-domeneprising henter nå live kostpriser fra riktig API-endpoint

Versjon 1.0.7 - Utgitt 2026-05-06
* Rettelse: ResellerClub test_connection sender påkrevd tlds-parameter (#224)

Versjon 1.0.6 - Utgitt 2026-05-05
* Rettelse: ResellerClub-domeneregistrering fungerer nå korrekt med forbedret håndtering av API-respons og registerstyrt provider-ruting
* Rettelse: UX-forbedringer på admin-siden Register Domain
* Fjernet: CyberPanel registrar-integrasjon

Versjon 1.0.5 - Utgitt 2026-04-02
* Nytt: GoDaddy registrar-integrasjon for domeneregistrering og -administrasjon
* Nytt: NameSilo registrar-integrasjon
* Nytt: ResellerClub registrar-integrasjon
* Nytt: Automatisk verifisering av SES-sendedomene ved domenekjøp og mapping
* Rettelse: Beskytt plugin-konstanter mot redefinering i testmiljø
* Rettelse: MySQL-flagg deles riktig i install-wp-tests.sh

Versjon 1.0.4 - Utgitt 2026-03-14
* **Rettelse:** Noen manglende css-ressurser
* **Rettelse:** Feil relatert til utilgjengelige tlds

Versjon 1.0.3 - Utgitt 2026-03-09
* **Rettelse:** Vue reactive property-feil (domain_option, selected_domain, domain_provider) ved bruk av den eldre registreringsmalen med checkout-shortcode
* **Rettelse:** Feiljustering av inndatafelt for subdomene og for stor tekst i checkout-feltet for domenevalg
* **Rettelse:** Skjul forhåndsvisningsblokken "Din URL blir" når feltet for domenevalg finnes

Versjon 1.0.2 - Utgitt 2026-03-01
* **Forbedret:** Fjernet globale påslagsinnstillinger fra innstillingssiden — prising er nå utelukkende per produkt
* **Forbedret:** La til lenken "Administrer domeneprodukter" på innstillingssiden for rask navigering
* **Forbedret:** Tydeligere feltbeskrivelser og verktøytips for innstillinger for domeneprodukter (catch-all kontra TLD-spesifikk, påslagstyper, introduksjonsprising)
* **Forbedret:** Bedre beskrivelser på hele innstillingssiden (søk i TLD-er, fornyelser, DNS, varsler)

Versjon 1.0.1 - Utgitt 2026-02-27

* **Nytt:** TLD-importverktøy for massehåndtering av priser
* **Nytt:** Støtte for introduksjonspriser for domeneprodukter
* **Nytt:** E2E-testpakke med Cypress
* **Nytt:** E-postmaler for varsler om domenelivssyklus
* **Nytt:** Adressefelt for registrant i admin-modal for domeneregistrering, forhåndsutfylt fra innstillinger
* **Nytt:** Kundens DNS-administrasjonsgrensesnitt med støtte for å legge til, redigere og slette oppføringer
* **Nytt:** Checkout-alternativet "Ta med ditt eget domene" med automatisk domenetilkobling
* **Nytt:** Generer automatisk site-URL fra domenenavn under checkout
* **Nytt:** Standard nameserver- og DNS-oppføringskonfigurasjon i innstillinger
* **Nytt:** Domeneregistreringsdetaljer og DNS-administrasjon på kjerne-domeneredigeringssiden
* **Nytt:** Oppsettsveiviser oppretter automatisk et standard domeneprodukt med fornuftige standardverdier
* **Nytt:** Daglig automatisk TLD-synkronisering via cron på tvers av alle konfigurerte leverandører
* **Nytt:** WHOIS-personvernbeskyttelse med konfigurasjon per produkt (alltid på, kundens valg eller deaktivert)
* **Nytt:** WHOIS-personvern-avkrysningsboks i checkout med prisvisning og støtte for mørk modus
* **Nytt:** Admin-side for Registrer domene for manuell domeneregistrering
* **Nytt:** Automatiske plugin-oppdateringer via Ultimate Multisite-oppdateringsserver
* **Nytt:** Filterfane for domeneprodukttype i produktlistetabell med lilla merke-styling
* **Nytt:** Kontaktfelt for registrant (navn, adresse, by, fylke/stat, postnummer, land, telefon) i domenets checkout-skjema
* **Nytt:** Validering av registrantfelt før kall til registrar-API med tydelige feilmeldinger
* **Nytt:** Leverandørspesifikke loggkanaler for domeneregistreringshendelser (f.eks. domain-seller-namecheap.log)
* **Nytt:** Kontaktfelt for registrant på hovedskjemaet for registrering/signup-checkout (vises ved registrering av et domene)
* **Forbedret:** Erstattet checkout-feltet Domenesøk med samlet Domenevalg-felt som støtter faner for subdomene, registrering og eksisterende domene
* **Forbedret:** Domeneproduktinnstillinger vises innebygd på produktredigeringssiden via kjernens widget-system
* **Forbedret:** Kundens domeneinfo kobles til kjernens widget for domenetilkobling i stedet for en separat metabox
* **Forbedret:** TLD-importveiviser forenklet til ettklikksynkronisering fra alle leverandører
* **Forbedret:** Namecheap-domenetilgjengelighet bruker batch-API-kall for raskere søk
* **Forbedret:** Namecheap-pris-API bruker riktige parametere og responstolking
* **Forbedret:** Sentralisert TLD-lagring i ett enkelt nettverksalternativ
* **Forbedret:** Loggføring av domeneaktivitet for DNS-endringer, overføringer og konfigurasjonsbruk
* **Forbedret:** Full TLD-synkronisering for OpenSRS med IANA-hovedliste og batch-validering
* **Forbedret:** Full TLD-synkronisering for Namecheap med paginerte API-forespørsler
* **Forbedret:** Erstattet eldre leverandørklasser med Integration Registry-mønster
* **Forbedret:** Innstillingspanel med DNS- og overføringskonfigurasjon
* **Forbedret:** Telefonnummer formateres automatisk til registrar-formatet +CC.NNN
* **Forbedret:** Validering av telefonfelt fjerner formateringstegn før innsending
* **Forbedret:** Versjonskrav hevet til Ultimate Multisite 2.4.12 med tydeligere varsel
* **Forbedret:** CI-arbeidsflyt bruker riktig checkout for både addon og kjerne-plugin
* **Forbedret:** prepare_registrant_info() leser fra bruker-meta lagret fra checkout, med fakturaadresse som reserve
* **Fikset:** Domene-søk AJAX feilet for ikke-innloggede brukere under checkout
* **Fikset:** Domeneprising AJAX feilet for ikke-innloggede brukere under checkout
* **Fikset:** Fatal feil med ny deklarasjon av Spyc-klasse ved kjøring av WP-CLI-kommandoer
* **Fikset:** Namecheap sandbox-API hadde for kort tidsavbrudd
* **Fikset:** Teksten på Velg-knappen i domenesøk var ikke synlig på grønn bakgrunn
* **Fikset:** Domeneregistrering feilet med feilen "RegistrantFirstName is Missing" på grunn av manglende kontaktinfo
* **Fikset:** Domeneoppføring ble opprettet med blog_id=0 når sitet ikke eksisterte ennå ved checkout-tidspunktet
* **Fikset:** Innstillingen for standard TLD-er ble returnert som streng i stedet for tolket array
* **Fjernet:** Frittstående admin-side for Domeneadministrasjon — håndteres nå via kjernens domenesider

Versjon 1.0.0 - Utgitt 2025-09-28

**Stor omskriving for Ultimate Multisite v2**

* **Nytt:** Komplett omskriving med moderne PHP 7.4+-arkitektur
* **Nytt:** Sømløs integrasjon med checkout-systemet i Ultimate Multisite v2
* **Nytt:** Administrasjon av domeneprodukter med fleksible prisalternativer
* **Nytt:** Arkitektur med støtte for flere domeneleverandører
* **Nytt:** Integrasjon med automatisk fornyelse og abonnement
* **Nytt:** Kundens grensesnitt for domeneadministrasjon
* **Nytt:** Admin-overvåking og logger for domener
* **Nytt:** Kupongstøtte for domeneprodukter
* **Nytt:** Omfattende administrasjon av innstillinger
* **Nytt:** Utviklervennlig og utvidbar kodebase
* **Forbedret:** Oppdatert OpenSRS-leverandør med full funksjonsstøtte
* **Forbedret:** Moderne UI i tråd med Ultimate Multisite v2
* **Fikset:** All utdatert v1-kode oppdatert til v2-standarder
* **Fjernet:** Eldre v1-kompatibilitet (brytende endring)

### Tidligere versjoner (v1 Legacy)

### Versjon 0.0.3 - 20/08/2019

* Fikset: Inkompatibilitet med Groundhogg CRM
* Merk: Dette var den siste v1-kompatible utgivelsen

### Versjon 0.0.2 - 07/12/2018

* Fikset: Fjernet License Key-feltet
* Fikset: Plan-faner manglet når funksjons-pluginen er aktiv
* Forbedret: La til en hopp over-knapp på registreringsfeltet

### Versjon 0.0.1 - Første utgivelse

* Grunnleggende OpenSRS-integrasjon for WP Ultimo v1
* Enkelt domenesøk og registrering
* Planbaserte domenetillatelser
