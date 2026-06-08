---
title: Domain Seller Changelog
sidebar_position: 99
_i18n_hash: bc3ab4e3f0076e80e8c38ed313f4430d
---
# Domain Seller Ändringslogg

Version 1.1.0 - Släppt den 2026-05-08
- Nytt: Implementering av DNS-postskapande (add_dns_record) för registrarna ResellerClub, Enom och OpenSRS
- Fix: Standard DNS Records-parser hanterar nu tokenen {DOMAIN} och {SITE_URL}
- Fix: Slugs-namnen för fältet för domänval är nu namnspecifierade för att förhindra krockar med site_url

Version 1.0.8 - Släppt den 2026-05-07
- Fix: ResellerClub domänprissättning hämtar nu live kostpriser från rätt API-slutpunkt

Version 1.0.7 - Släppt den 2026-05-06
* Fix: ResellerClub test_connection skickar nu det nödvändiga tlds-parametret (#224)

Version 1.0.6 - Släppt den 2026-05-05
* Fix: ResellerClub domänregistrering fungerar nu korrekt med förbättrat hanterande av API-svar och leverantörsrutning baserat på registret
* Fix: Förbättrad användarupplevelse (UX) på sidan för "Register Domain"
* Borttaget: CyberPanel registrar-integration

Version 1.0.5 - Släppt den 2026-04-02
* Nytt: GoDaddy registrar-integration för domänregistrering och hantering
* Nytt: NameSilo registrar-integration
* Nytt: ResellerClub registrar-integration
* Nytt: Automatisk verifiering av SES-sändningsdomän vid domänköp och mappning
* Fix: Skyddar Guard-pluginets konstanter mot omdefinition i testmiljö
* Fix: MySQL hanterar word-split korrekt i install-wp-tests.sh

Version 1.0.4 - Släppt den 2026-03-14
* **Fix:** Vissa saknade CSS-resurser
* **Fix:** Fel relaterat till otillgängliga tlds

Version 1.0.3 - Släppt den 2026-03-09
* **Fix:** Vue reactive property-fel (domain_option, selected_domain, domain_provider) när man använder det äldre registreringsformuläret med checkout-shortcoden
* **Fix:** Feljustering av inmatningsfältet för subdomän och för stort textutrymme i domänvalfältet vid checkout
* **Fix:** Döljer förhandsvisningsblocket "Your URL will be" när domänvalfältet är synligt

Version 1.0.2 - Släppt den 2026-03-01
* **Förbättrat:** Globala markeringar (markup) har tagits bort från inställningssidan – prissättning sker nu enbart per produkt
* **Förbättrat:** Lägger till länken "Manage Domain Products" på inställningssidan för snabb navigering
* **Förbättrat:** Tydligare fältbeskrivningar och verktygstips för domänproduktinställningar (catch-all vs TLD-specifikt, markeringstyper, introduktionsprissättning)
* **Förbättrat:** Bättre beskrivningar över hela inställningssidan (sök TLD:er, förnyelser, DNS, aviseringar)

Version 1.0.1 - Släppt den 2026-02-27

* **Nytt:** TLD-importverktyg för bulkprissättningshantering
* **Nytt:** Stöd för introduktionsprissättning för domänprodukter
* **Nytt:** E2E testsvit med Cypress
* **Nytt:** E-postmallar för domänlivscykelaviseringar
* **Nytt:** Registrantadressfält på admin-modalen för domänregistrering, förifyllda från inställningar
* **Nytt:** Kundhantering av DNS-gränssnitt med stöd för att lägga till, redigera och ta bort poster
* **Nytt:** Checkout-alternativet "Bring your own domain" med automatisk domänmappning
* **Nytt:** Automatisk generering av site URL från domännamn under checkout
* **Nytt:** Standard nameserver och DNS-postkonfiguration i inställningar
* **Nytt:** Domänregistreringsdetaljer och DNS-hantering på kärn-redigeringssidan för domän
* **Nytt:** Setup-wizard skapar automatiskt en standarddomänprodukt med rimliga standardvärden
* **Nytt:** Daglig automatisk TLD-synkronisering via cron över alla konfigurerade leverantörer
* **Nytt:** WHOIS-integritet med konfiguration per produkt (alltid på, kundval eller avstängt)
* **Nytt:** WHOIS-integritetskryssruta vid checkout med prisläggning och stöd för mörkt läge
* **Nytt:** Admin-sida för "Register Domain" för manuell domänregistrering
* **Nytt:** Automatisk plugin-uppdatering via Ultimate Multisite update server
* **Nytt:** Filterflik för domänprodukt-typ i produktlisttabellen med lila badge-styling
* **Nytt:** Registrantkontaktfält (namn, adress, stad, delstat, postnummer, land, telefon) på domäncheckout-formuläret
* **Nytt:** Validering av registrantfält innan anrop till registrar API med tydliga felmeddelanden
* **Nytt:** Leverantörspecifika loggkanaler för domänregistreringshändelser (t.ex. domain-seller-namecheap.log)
* **Nytt:** Registrantkontaktfält på huvudregistrerings-/anmälningscheckout-formuläret (visas vid registrering av en domän)
* **Förbättrat:** Domain Search checkout-fältet ersätts med ett enhetligt Domain Selection-fält som stöder flikar för subdomän, registrering och befintlig domän
* **Förbättrat:** Domänproduktinställningar renderas inline på produktraderingssidan via kärnwidget-systemet
* **Förbättrat:** Kunddomäninformation kopplas till kärn-domänmappningswidget istället för ett fristående metabox
* **Förbättrat:** TLD-import-wizard förenklas till en-klick-synk från alla leverantörer
* **Förbättrat:** Namecheap domänåtkomlighet använder batch API-anrop för snabbare sökning
* **Förbättrat:** Namecheap prissättnings-API använder korrekta parametrar och svarsparsering
* **Förbättrat:** Centraliserat TLD-lagring i ett enda nätverksalternativ
* **Förbättrat:** Domänaktivitetsloggning för DNS-ändringar, överföringar och konfigurationsapplikation
* **Förbättrat:** Full TLD-synk för OpenSRS med IANA master list och batchvalidering
* **Förbättrat:** Full TLD-synk för Namecheap med paginerade API-anrop
* **Förbättrat:** Ersatte äldre leverantörsklasser med Integration Registry-mönstret
* **Förbättrat:** Inställningspanel med DNS- och överföringskonfiguration
* **Förbättrat:** Telefonnummer formateras automatiskt till +CC.NNN registrar-format
* **Förbättrat:** Validering av telefonfält tar bort formateringskaraktärer före inskick
* **Förbättrat:** Versionskrav höjdes till Ultimate Multisite 2.4.12 med tydligare meddelande
* **Förbättrat:** CI-arbetsflödet använder korrekt checkout för både tilläggs- och kärnplugin
* **Förbättrat:** prepare_registrant_info() läser från checkout-sparad användarmeta med fallback till faktureringsadress
* **Fixat:** Domain search AJAX misslyckas för icke-inloggade användare under checkout
* **Fixat:** Domain pricing AJAX misslyckas för icke-inloggade användare under checkout
* **Fixat:** Spyc-klassåterdeklaration fatal error vid körning av WP-CLI-kommandon
* **Fixat:** Namecheap sandbox API timeout för kort
* **Fixat:** Domain search Select-knappens text synliggörs inte på grön bakgrund
* **Fixat:** Domänregistrering misslyckas med felet "RegistrantFirstName is Missing" på grund av saknad kontaktinformation
* **Fixat:** Domänpost skapas med blog_id=0 när webbplatsen ännu inte existerade vid checkout-tillfället
* **Fixat:** Standard TLD-inställning returneras som sträng istället för en parsnad array
* **Borttaget:** Fristående admin-sida för domänhantering – hanteras nu via kärndomän-sidor

Version 1.0.0 - Släppt den 2025-09-28

**Större omskrivning för Ultimate Multisite v2**

* **Nytt:** Komplett omskrivning med modern PHP 7.4+-arkitektur
* **Nytt:** Smärtfri integration med Ultimate Multisite v2 checkout-system
* **Nytt:** Domänproduktförvaltning med flexibla prissättningsalternativ
* **Nytt:** Arkitektur för stöd av flera domänleverantörer
* **Nytt:** Automatisk förnyelse och prenumerationsintegration
* **Nytt:** Kundhantering av domäner
* **Nytt:** Admin-övervakning och loggar för domäner
* **Nytt:** Kupongstöd för domänprodukter
* **Nytt:** Omfattande inställningshantering
* **Nytt:** Utvecklarvänlig utbyggbar kodbas
* **Förbättrat:** Uppdaterad OpenSRS-leverantör med full funktionsstöd
* **Förbättrat:** Modern UI konsekvent med Ultimate Multisite v2
* **Fixat:** Allt föråldrat v1-kod uppdaterat till v2-standarder
* **Borttaget:** Äldre v1-kompatibilitet (brytande ändring)

### Tidigare versioner (v1 Legacy)

### Version 0.0.3 - 20/08/2019

* Fixat: Inkompatibilitet med Groundhogg CRM
* Notera: Detta var den sista v1-kompatibla releasen

### Version 0.0.2 - 07/12/2018

* Fixat: Tar bort fältet för licensnyckel
* Fixat: Planflikar saknas när funktionspluginet är aktivt
* Förbättrat: Lägger till en "hoppa över"-knapp på registreringsfältet

### Version 0.0.1 - Initial release

* Grundläggande OpenSRS-integration för WP Ultimo v1
* Enkel domänökning och registrering
* Planbaserade domänrättigheter
