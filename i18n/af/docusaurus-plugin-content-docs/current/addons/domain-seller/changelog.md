---
title: Domeinverkoper-veranderingslogboek
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Domain Seller-veranderingslog

Weergawe 1.3.0 - Vrygestel op 2026-06-02
- Nuut: Het ’n network-admin-waarskuwing bygevoeg wanneer HostAfrica-herverkoperbalans te laag raak
- Nuut: Het outomatiese kartering van nuut geregistreerde domeine na die netwerkwerf bygevoeg
- Regstelling: Het registrant-veldvereistes slegs toegepas wanneer ’n nuwe domein geregistreer word
- Regstelling: Het monitorbalans-kennisgewings wegwysbaar gemaak
- Regstelling: Het verseker dat WooCommerce registrant-faktureringsbesonderhede behou word
- Regstelling: Het registrant-kontakvereistes tydens registrasie afgedwing
- Regstelling: Het verhoed dat domeinregistrasieprodukte met 0%-opslag geskep word
- Regstelling: Het domeinkeuses en pryse deur die checkout-sessievloei behou
- Regstelling: Het HostAfrica-domeinprysgeldeenheidvertoon verbeter
- Regstelling: Het checkout-vormaksiegedrag verbeter om WP-core query-var-wanpassings te voorkom
- Verbeter: Het HostAfrica-herverkoperkonfigurasiedokumentasie in opstelriglyne geskakel

Weergawe 1.2.0 - Vrygestel op 2026-05-25
- Nuut: HostAfrica bygevoeg as ’n domeinverkoop-integrasie met checkout, opstelassistent, naslaan, TLD/prysbepaling, registrasie, hernuwing, oordrag, naambediener, DNS, EPP-kode, registrateur-slot, en ondersteuning vir ID-beskerming
- Nuut: Openprovider bygevoeg as ’n domeinverkoop-integrasie met herverkoperprysbepaling, registrasie, hernuwing, oordrag, naambediener, DNS, EPP-kode, registrateur-slot, WHOIS-privaatheid, en ondersteuning vir TLD-sinkronisering
- Nuut: Hostinger bygevoeg as ’n domeinverkoop-integrasie wat die gedeelde Hostinger API-token van die kernintegrasie gebruik vir beskikbaarheidskontroles, registrasie, naambedieneropdaterings, registrateur-slot, en WHOIS-privaatheid
- Verbeter: Domeinlewensiklus-aksie- en filter-docblocks bygevoeg vir leiding oor ontwikkelaarintegrasie
- Verbeter: Plugin-versoenbaarheidsmetadata opgedateer na WordPress 7.0 in die addon-readme
- Verbeter: Beplanningsjablone opgedateer wat vir koördinering van komende vrystellings gebruik word

Weergawe 1.1.0 - Vrygestel op 2026-05-08
- Nuut: DNS-rekordskepping (add_dns_record) geïmplementeer vir ResellerClub-, Enom- en OpenSRS-registrateurs
- Regstelling: Standaard DNS Records-ontleder verdra nou {DOMAIN}- en {SITE_URL}-tokens
- Regstelling: Domeinkeuse-checkout-veldslugs is genamespace om botsing met site_url te voorkom

Weergawe 1.0.8 - Vrygestel op 2026-05-07
- Regstelling: ResellerClub-domeinprysbepaling haal nou lewendige kostpryse vanaf die korrekte API-endpoint

Weergawe 1.0.7 - Vrygestel op 2026-05-06
* Regstelling: ResellerClub test_connection stuur die vereiste tlds-parameter (#224)

Version 1.0.6 - Vrygestel op 2026-05-05
* Regstelling: ResellerClub-domeinregistrasie werk nou korrek met verbeterde API-reaksiehantering en registergedrewe verskafferroetering
* Regstelling: UX-verbeterings vir Register Domain-administrasiebladsy
* Verwyder: CyberPanel-registrateurintegrasie

Version 1.0.5 - Vrygestel op 2026-04-02
* Nuut: GoDaddy-registrateurintegrasie vir domeinregistrasie en -bestuur
* Nuut: NameSilo-registrateurintegrasie
* Nuut: ResellerClub-registrateurintegrasie
* Nuut: Verifieer SES-stuurdomein outomaties met domeinaankoop en kartering
* Regstelling: Beskerm plugin-konstantes teen herdefiniëring in toetsomgewing
* Regstelling: MySQL-vlae word korrek in woorde verdeel in install-wp-tests.sh

Version 1.0.4 - Vrygestel op 2026-03-14
* **Regstelling:** Sommige ontbrekende css-bates
* **Regstelling:** Fout verwant aan onbeskikbare TLDs

Version 1.0.3 - Vrygestel op 2026-03-09
* **Regstelling:** Vue-reaktiewe-eienskapfoute (domain_option, selected_domain, domain_provider) wanneer die erfenis-aansluitingsjabloon met die betaalpunt-kortkode gebruik word
* **Regstelling:** Wanbelyning van subdomein-invoerveld en oorgroot teks in die domeinkeuse-betaalpuntveld
* **Regstelling:** Versteek die "Jou URL sal wees"-voorskoublok wanneer die domeinkeuseveld teenwoordig is

Weergawe 1.0.2 - Vrygestel op 2026-03-01
* **Verbeter:** Globale opslaginstellings van instellingsbladsy verwyder — prysbepaling is nou uitsluitlik per-produk
* **Verbeter:** "Bestuur domeinprodukte"-skakel op instellingsbladsy bygevoeg vir vinnige navigasie
* **Verbeter:** Duideliker veldbeskrywings en hulpmiddelwenke vir domeinproduk-instellings (vang-alles teenoor TLD-spesifiek, opslagtipes, bekendstellingspryse)
* **Verbeter:** Beter beskrywings regdeur die instellingsbladsy (soek TLD's, hernuwings, DNS, kennisgewings)

Weergawe 1.0.1 - Vrygestel op 2026-02-27

* **Nuut:** TLD-invoernutsding vir grootmaat-prysbestuur
* **Nuut:** Inleidende prysondersteuning vir domeinprodukte
* **Nuut:** E2E-toetspakket met Cypress
* **Nuut:** E-possjablone vir domeinlewensiklus-kennisgewings
* **Nuut:** Registreerderadresvelde op admin-domeinregistrasie-modal, vooraf ingevul uit instellings
* **Nuut:** Kliënt-DNS-bestuurskoppelvlak met ondersteuning om rekords by te voeg, te wysig en te verwyder
* **Nuut:** "Bring your own domain"-checkout-opsie met outomatiese domeinkartering
* **Nuut:** Genereer webwerf-URL outomaties uit domeinnaam tydens checkout
* **Nuut:** Verstek-nameserver- en DNS-rekordkonfigurasie in instellings
* **Nuut:** Domeinregistrasiebesonderhede en DNS-bestuur op kern-domeinwysigingsbladsy
* **Nuut:** Opstelassistent skep outomaties 'n verstek-domeinproduk met sinvolle verstekwaardes
* **Nuut:** Daaglikse outomatiese TLD-sinkronisering via cron oor alle gekonfigureerde verskaffers
* **Nuut:** WHOIS-privaatheidsbeskerming met per-produk-konfigurasie (altyd aan, kliëntkeuse, of gedeaktiveer)
* **Nuut:** WHOIS-privaatheid-checkout-merkblokkie met prysvertoning en donkermodus-ondersteuning
* **Nuut:** Register Domain-adminbladsy vir handmatige domeinregistrasie
* **Nuut:** Outomatiese plugin-opdaterings via Ultimate Multisite-opdateringsbediener
* **Nuut:** Domeinproduk-tipefilter-oortjie in produklystabel met pers kentekenstilering
* **Nuut:** Registreerderkontakvelde (naam, adres, stad, staat, poskode, land, telefoon) op domein-checkout-vorm

* **Nuut:** Registrant-veldvalidering voordat die registrar API geroep word, met duidelike foutboodskappe
* **Nuut:** Verskaffer-spesifieke logkanale vir domeinregistrasiegebeurtenisse (bv. domain-seller-namecheap.log)
* **Nuut:** Registrant-kontakvelde op hoofregistrasie-/signup-checkout-vorm (gewys wanneer ’n domein geregistreer word)
* **Verbeter:** Domain Search-checkout-veld vervang met verenigde Domain Selection-veld wat subdomein-, registreer- en bestaande-domein-oortjies ondersteun
* **Verbeter:** Domeinproduk-instellings word inline op produkredigeerbladsy via die kern-widget-stelsel weergegee
* **Verbeter:** Kliëntdomeininligting haak in by kern-domeinkartering-widget in plaas van losstaande metabox
* **Verbeter:** TLD-invoerwizard vereenvoudig na eenklik-sinkronisering vanaf alle verskaffers
* **Verbeter:** Namecheap-domeinbeskikbaarheid gebruik batch API-oproep vir vinniger soektog
* **Verbeter:** Namecheap-prysbepaling-API gebruik korrekte parameters en reaksieontleding
* **Verbeter:** Gesentraliseerde TLD-berging in ’n enkele netwerkopsie
* **Verbeter:** Domeinaktiwiteit-logging vir DNS-veranderinge, oordragte en konfigurasietoepassing
* **Verbeter:** Volledige TLD-sinkronisering vir OpenSRS deur IANA-meesterlys met batch-validering te gebruik
* **Verbeter:** Volledige TLD-sinkronisering vir Namecheap met gepagineerde API-versoeke
* **Verbeter:** Verouderde verskafferklasse vervang met Integration Registry-patroon
* **Verbeter:** Instellingspaneel met DNS- en oordragkonfigurasie
* **Verbeter:** Telefoonnommers word outomaties na +CC.NNN registrar-formaat geformateer

* **Verbeter:** Foonveldvalidering stroop formateringstekens voor indiening
* **Verbeter:** Weergawevereiste verhoog na Ultimate Multisite 2.4.12 met duideliker kennisgewing
* **Verbeter:** CI-werkvloei gebruik behoorlike checkout vir beide byvoeging en kern-plugin
* **Verbeter:** prepare_registrant_info() lees vanaf gebruiker-meta wat deur die betaalpunt gestoor is, met faktuuradres-terugval
* **Reggestel:** Domeinsoektog-AJAX misluk vir gebruikers wat nie aangemeld is nie tydens betaalpunt
* **Reggestel:** Domeinprys-AJAX misluk vir gebruikers wat nie aangemeld is nie tydens betaalpunt
* **Reggestel:** Spyc-klas-herverklaring veroorsaak fatale fout wanneer WP-CLI-opdragte uitgevoer word
* **Reggestel:** Namecheap-sandput-API se uitteltyd te kort
* **Reggestel:** Domeinsoektog se Kies-knoppieteks nie sigbaar op groen agtergrond nie
* **Reggestel:** Domeinregistrasie misluk met "RegistrantFirstName is Missing"-fout weens ontbrekende kontakinligting
* **Reggestel:** Domeinrekord geskep met blog_id=0 toe werf nog nie tydens betaalpunttyd bestaan het nie
* **Reggestel:** Verstek-TLDs-instelling teruggestuur as string in plaas van ontlede skikking
* **Verwyder:** Selfstandige Domeinbestuur-adminblad — word nou deur kern-domeinbladsye hanteer

Weergawe 1.0.0 - Vrygestel op 2025-09-28

**Groot herskrywing vir Ultimate Multisite v2**

* **Nuut:** Volledige herskrywing met moderne PHP 7.4+-argitektuur
* **Nuut:** Naatlose integrasie met Ultimate Multisite v2-afrekeningstelsel
* **Nuut:** Domeinprodukbestuur met buigsame prysopsies
* **Nuut:** Ondersteuningsargitektuur vir verskeie domeinverskaffers
* **Nuut:** Outohernuwing en intekeningintegrasie
* **Nuut:** Koppelvlak vir kliëntdomeinbestuur
* **Nuut:** Admin-domeinmonitering en logboeke
* **Nuut:** Koeponondersteuning vir domeinprodukte
* **Nuut:** Omvattende instellingsbestuur
* **Nuut:** Ontwikkelaarvriendelike uitbreidbare kodebasis
* **Verbeter:** Opgedateerde OpenSRS-verskaffer met volledige funksieondersteuning
* **Verbeter:** Moderne UI in ooreenstemming met Ultimate Multisite v2
* **Reggemaak:** Alle verouderde v1-kode opgedateer na v2-standaarde
* **Verwyder:** Verouderde v1-versoenbaarheid (brekende verandering)

### Vorige Weergawes (v1 Legacy) {#previous-versions-v1-legacy}

### Weergawe 0.0.3 - 20/08/2019 {#version-003---20082019}

* Reggemaak: Onversoenbaarheid met Groundhogg CRM
* Nota: Dit was die laaste v1-versoenbare vrystelling

### Weergawe 0.0.2 - 07/12/2018 {#version-002---07122018}

* Reggemaak: Die License Key-veld verwyder
* Reggemaak: Plan-oortjies ontbreek wanneer die funksie-plugin aktief is
* Verbeter: ’n Oorslaan-knoppie by die registrasieveld gevoeg

### Weergawe 0.0.1 - Aanvanklike Vrystelling {#version-001---initial-release}

* Basiese OpenSRS-integrasie vir WP Ultimo v1
* Eenvoudige domeinsoektog en registrasie
* Plan-gebaseerde domeintoestemmings
