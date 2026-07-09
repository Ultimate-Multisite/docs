---
title: Domain Seller ändringslogg
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Domain Seller ändringslogg

Version 1.3.0 - Släppt 2026-06-02
- Nytt: Lade till en varning i nätverksadmin när HostAfrica-återförsäljarens saldo blir för lågt
- Nytt: Lade till automatisk mappning av nyregistrerade domäner till nätverkssajten
- Fix: Tillämpade krav på registrantfält endast vid registrering av en ny domän
- Fix: Gjorde meddelanden om saldoövervakning avfärdbara
- Fix: Säkerställde att WooCommerce-faktureringsuppgifter för registrant bevaras
- Fix: Tvingade fram krav på registrantkontakt vid registrering
- Fix: Förhindrade att domänregistreringsprodukter skapas med 0 % påslag
- Fix: Bevarade domänval och prissättning genom flödet för checkout-sessionen
- Fix: Förbättrade valutavisning för HostAfrica-domänprissättning
- Fix: Förbättrade beteendet för checkout-formulärets åtgärd för att förhindra avvikelser i WP-kärnans query-var
- Förbättrat: Länkade dokumentation för HostAfrica-återförsäljarkonfiguration i setup-vägledningen

Version 1.2.0 - Släppt 2026-05-25
- Nytt: Lade till HostAfrica som en domänförsäljningsintegration med stöd för checkout, setup-guide, uppslagning, TLD/prissättning, registrering, förnyelse, överföring, namnserver, DNS, EPP-kod, registrar lock och ID-skydd
- Nytt: Lade till Openprovider som en domänförsäljningsintegration med stöd för återförsäljarprissättning, registrering, förnyelse, överföring, namnserver, DNS, EPP-kod, registrar lock, WHOIS-sekretess och TLD-synkronisering
- Nytt: Lade till Hostinger som en domänförsäljningsintegration som använder den delade Hostinger API-token från kärnintegrationen för tillgänglighetskontroller, registrering, namnserveruppdateringar, registrar lock och WHOIS-sekretess
- Förbättrat: Lade till docblocks för domänlivscykelåtgärder och filter för vägledning vid utvecklarintegration
- Förbättrat: Uppdaterade metadata för plugin-kompatibilitet till WordPress 7.0 i tilläggets readme
- Förbättrat: Uppdaterade planeringsmallar som används för samordning av kommande releaser

Version 1.1.0 - Släppt 2026-05-08
- Nytt: Skapande av DNS-post (add_dns_record) implementerat för registratorerna ResellerClub, Enom och OpenSRS
- Fix: Standardparsern för DNS Records tolererar nu {DOMAIN}- och {SITE_URL}-token
- Fix: Slugs för checkout-fältet för domänval har namnrymd för att förhindra kollision med site_url

Version 1.0.8 - Släppt 2026-05-07
- Fix: ResellerClub-domänprissättning hämtar nu aktuella kostnadspriser från rätt API-slutpunkt

Version 1.0.7 - Släppt 2026-05-06
* Fix: ResellerClub test_connection skickar obligatorisk tlds-parameter (#224)

Version 1.0.6 - Släppt 2026-05-05
* Fix: ResellerClub-domänregistrering fungerar nu korrekt med förbättrad hantering av API-svar och registerstyrd leverantörsrouting
* Fix: UX-förbättringar på adminsidan Register Domain
* Borttaget: CyberPanel-registratorintegration

Version 1.0.5 - Släppt 2026-04-02
* Nytt: GoDaddy-registratorintegration för domänregistrering och hantering
* Nytt: NameSilo-registratorintegration
* Nytt: ResellerClub-registratorintegration
* Nytt: Autoverifiera SES-avsändardomän vid domänköp och mappning
* Fix: Skyddade plugin-konstanter mot omdefiniering i testmiljö
* Fix: MySQL-flaggor delas korrekt upp i install-wp-tests.sh

Version 1.0.4 - Släppt 2026-03-14
* **Fix:** Vissa saknade css-tillgångar
* **Fix:** Fel relaterat till otillgängliga tlds

Version 1.0.3 - Släppt 2026-03-09
* **Fix:** Vue-fel för reaktiva egenskaper (domain_option, selected_domain, domain_provider) när den äldre registreringsmallen används med checkout-shortcode
* **Fix:** Feljustering av inmatningsfältet för subdomän och överdimensionerad text i checkout-fältet för domänval
* **Fix:** Dölj förhandsvisningsblocket "Din URL kommer att vara" när fältet för domänval finns

Version 1.0.2 - Släppt 2026-03-01
* **Förbättrat:** Tog bort globala påslagsinställningar från inställningssidan — prissättningen är nu uteslutande per produkt
* **Förbättrat:** Lade till länken "Hantera domänprodukter" på inställningssidan för snabb navigering
* **Förbättrat:** Tydligare fältbeskrivningar och verktygstips för inställningar för domänprodukter (catch-all kontra TLD-specifika, påslagstyper, introduktionsprissättning)
* **Förbättrat:** Bättre beskrivningar genom hela inställningssidan (sök TLD:er, förnyelser, DNS, aviseringar)

Version 1.0.1 - Släppt 2026-02-27

* **Nytt:** TLD-importverktyg för hantering av massprissättning
* **Nytt:** Stöd för introduktionsprissättning för domänprodukter
* **Nytt:** E2E-testsvit med Cypress
* **Nytt:** E-postmallar för aviseringar om domänlivscykel
* **Nytt:** Registrantadressfält i admin-modal för domänregistrering, förifyllda från inställningar
* **Nytt:** Kundgränssnitt för DNS-hantering med stöd för att lägga till, redigera och ta bort poster
* **Nytt:** Checkout-alternativet "Ta med din egen domän" med automatisk domänmappning
* **Nytt:** Generera automatiskt webbplats-URL från domännamn under checkout
* **Nytt:** Standardkonfiguration för nameserver och DNS-poster i inställningar
* **Nytt:** Domänregistreringsdetaljer och DNS-hantering på kärnans sida för domänredigering
* **Nytt:** Setup-wizard skapar automatiskt en standarddomänprodukt med rimliga standardvärden
* **Nytt:** Daglig automatisk TLD-synk via cron över alla konfigurerade leverantörer
* **Nytt:** WHOIS-integritetsskydd med konfiguration per produkt (alltid på, kundens val eller inaktiverat)
* **Nytt:** WHOIS-integritetskryssruta i checkout med prisvisning och stöd för mörkt läge
* **Nytt:** Adminsida för Register Domain för manuell domänregistrering
* **Nytt:** Automatiska pluginuppdateringar via Ultimate Multisite-uppdateringsserver
* **Nytt:** Filterflik för domänprodukttyp i produktlisttabellen med lila badge-stil
* **Nytt:** Registrantkontaktfält (namn, adress, stad, delstat, postnummer, land, telefon) i checkout-formulär för domäner
* **Nytt:** Validering av registrantfält innan anrop till registrar-API med tydliga felmeddelanden
* **Nytt:** Leverantörsspecifika loggkanaler för domänregistreringshändelser (t.ex. domain-seller-namecheap.log)
* **Nytt:** Registrantkontaktfält i huvudformuläret för registrering/signup-checkout (visas när en domän registreras)
* **Förbättrat:** Ersatte checkout-fältet Domain Search med enhetligt fält för domänval med flikar för subdomän, registrering och befintlig domän
* **Förbättrat:** Domänproduktinställningar renderas inline på sidan för produktredigering via kärnans widgetsystem
* **Förbättrat:** Kundens domäninfo kopplas in i kärnans widget för domänmappning i stället för fristående metabox
* **Förbättrat:** TLD-importwizard förenklad till synk med ett klick från alla leverantörer
* **Förbättrat:** Namecheap-domäntillgänglighet använder batch-API-anrop för snabbare sökning
* **Förbättrat:** Namecheap-prissättnings-API använder korrekta parametrar och svarstolkning
* **Förbättrat:** Centraliserad TLD-lagring i ett enda nätverksalternativ
* **Förbättrat:** Domänaktivitetsloggning för DNS-ändringar, överföringar och konfigurationstillämpning
* **Förbättrat:** Full TLD-synk för OpenSRS med IANA-huvudlista och batchvalidering
* **Förbättrat:** Full TLD-synk för Namecheap med paginerade API-förfrågningar
* **Förbättrat:** Ersatte äldre leverantörsklasser med Integration Registry-mönster
* **Förbättrat:** Inställningspanel med DNS- och överföringskonfiguration
* **Förbättrat:** Telefonnummer formateras automatiskt till registrar-formatet +CC.NNN
* **Förbättrat:** Validering av telefonfält tar bort formateringstecken före inlämning
* **Förbättrat:** Versionskravet höjt till Ultimate Multisite 2.4.12 med tydligare meddelande
* **Förbättrat:** CI-arbetsflöde använder korrekt checkout för både addon och kärnplugin
* **Förbättrat:** prepare_registrant_info() läser från användarmeta sparad vid checkout med faktureringsadress som fallback
* **Åtgärdat:** AJAX för domänsökning misslyckades för användare som inte var inloggade under checkout
* **Åtgärdat:** AJAX för domänprissättning misslyckades för användare som inte var inloggade under checkout
* **Åtgärdat:** Fatalt fel med omdeklaration av Spyc-klass vid körning av WP-CLI-kommandon
* **Åtgärdat:** Namecheap sandbox-API hade för kort timeout
* **Åtgärdat:** Texten på knappen Select i domänsökning syntes inte på grön bakgrund
* **Åtgärdat:** Domänregistrering misslyckades med felet "RegistrantFirstName is Missing" på grund av saknad kontaktinfo
* **Åtgärdat:** Domänpost skapades med blog_id=0 när webbplatsen ännu inte fanns vid checkout-tillfället
* **Åtgärdat:** Inställningen för standard-TLD:er returnerades som sträng i stället för tolkad array
* **Borttaget:** Fristående adminsida för Domain Management — hanteras nu via kärnans domänsidor

Version 1.0.0 - Släppt 2025-09-28

**Stor omskrivning för Ultimate Multisite v2**

* **Nytt:** Fullständig omskrivning med modern PHP 7.4+-arkitektur
* **Nytt:** Sömlös integration med checkout-systemet i Ultimate Multisite v2
* **Nytt:** Domänprodukthantering med flexibla prissättningsalternativ
* **Nytt:** Arkitektur för stöd för flera domänleverantörer
* **Nytt:** Integration med automatisk förnyelse och prenumerationer
* **Nytt:** Kundgränssnitt för domänhantering
* **Nytt:** Domänövervakning och loggar för admin
* **Nytt:** Kupongstöd för domänprodukter
* **Nytt:** Omfattande inställningshantering
* **Nytt:** Utvecklarvänlig utbyggbar kodbas
* **Förbättrat:** Uppdaterad OpenSRS-leverantör med fullt funktionsstöd
* **Förbättrat:** Modernt UI i linje med Ultimate Multisite v2
* **Åtgärdat:** All föråldrad v1-kod uppdaterad till v2-standarder
* **Borttaget:** Äldre v1-kompatibilitet (brytande ändring)

### Tidigare versioner (v1 Legacy)

### Version 0.0.3 - 20/08/2019

* Åtgärdat: Inkompatibilitet med Groundhogg CRM
* Obs: Detta var den sista v1-kompatibla versionen

### Version 0.0.2 - 07/12/2018

* Åtgärdat: Tog bort fältet License Key
* Åtgärdat: Planflikar saknades när funktionspluginet är aktivt
* Förbättrat: Lade till en hoppa över-knapp i registreringsfältet

### Version 0.0.1 - Första utgåvan

* Grundläggande OpenSRS-integration för WP Ultimo v1
* Enkel domänsökning och registrering
* Planbaserade domänbehörigheter
