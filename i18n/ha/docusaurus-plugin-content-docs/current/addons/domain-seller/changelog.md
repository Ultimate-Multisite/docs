---
title: Tarihin Canje-canje na Mai Sayar da Domain
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Rajistar Canje-canje na Domain Seller {#domain-seller-changelog}

Version 1.3.0 - An fitar a 2026-06-02
- Sabo: An ƙara gargaɗin network-admin lokacin da ma’aunin kuɗin HostAfrica reseller ya yi ƙasa sosai
- Sabo: An ƙara daidaita sabbin domains da aka yi rajista ta atomatik zuwa shafin network
- Gyara: An yi amfani da bukatun filayen registrant ne kawai lokacin yin rajistar sabon domain
- Gyara: An sanya sanarwar kula da ma’auni za a iya watsar da su
- Gyara: An tabbatar an adana bayanan biyan kuɗin registrant na WooCommerce
- Gyara: An tilasta bukatun tuntuɓar registrant yayin rajista
- Gyara: An hana ƙirƙirar kayayyakin rajistar domain da markup na 0%
- Gyara: An adana zaɓukan domain da farashi ta cikin tsarin zaman checkout
- Gyara: An inganta nunin kuɗin farashin domain na HostAfrica
- Gyara: An inganta halayen form-action na checkout don hana rashin daidaiton query-var na WP-core
- Inganta: An haɗa takardun daidaitawar HostAfrica reseller a cikin jagorancin saitawa

Version 1.2.0 - An fitar a 2026-05-25
- Sabo: An ƙara HostAfrica a matsayin haɗin sayar da domain tare da checkout, mayen saitawa, bincike, TLD/farashi, rajista, sabuntawa, canja wuri, nameserver, DNS, lambar EPP, kulle registrar, da goyon bayan kariyar ID
- Sabo: An ƙara Openprovider a matsayin haɗin sayar da domain tare da farashin reseller, rajista, sabuntawa, canja wuri, nameserver, DNS, lambar EPP, kulle registrar, sirrin WHOIS, da goyon bayan daidaita TLD
- Sabo: An ƙara Hostinger a matsayin haɗin sayar da domain ta amfani da token na Hostinger API da aka raba daga ainihin haɗin don duba samuwa, rajista, sabunta nameserver, kulle registrar, da sirrin WHOIS
- Inganta: An ƙara docblocks na aikin rayuwar domain da filter don jagorancin haɗin masu haɓakawa
- Inganta: An sabunta metadata na dacewar plugin zuwa WordPress 7.0 a cikin readme na addon
- Inganta: An sabunta samfuran tsarawa da ake amfani da su don daidaita fitowar da ke tafe

Version 1.1.0 - An fitar a 2026-05-08
- Sabo: An aiwatar da ƙirƙirar rikodin DNS (add_dns_record) don registrars na ResellerClub, Enom, da OpenSRS
- Gyara: Default DNS Records parser yanzu yana jure tokens na {DOMAIN} da {SITE_URL}
- Gyara: Slugs na filayen checkout na zaɓin domain an sanya su cikin namespace don hana karo da site_url

Version 1.0.8 - An fitar a 2026-05-07
- Gyara: Farashin domain na ResellerClub yanzu yana ɗauko farashin kuɗin kai tsaye daga madaidaicin API endpoint

Version 1.0.7 - An fitar a 2026-05-06
* Gyara: ResellerClub test_connection yana aika sigar tlds da ake buƙata (#224)

Version 1.0.6 - An fitar a 2026-05-05
* Gyara: Rajistar domain na ResellerClub yanzu tana aiki daidai tare da ingantaccen sarrafa amsar API da routing na provider da registry ke jagoranta
* Gyara: Ingantattun UX na shafin admin na Register Domain
* An cire: Haɗin registrar na CyberPanel

Version 1.0.5 - An fitar a 2026-04-02
* Sabo: Haɗin registrar na GoDaddy don rajista da sarrafa domain
* Sabo: Haɗin registrar na NameSilo
* Sabo: Haɗin registrar na ResellerClub
* Sabo: Tabbatar da domain na aika SES ta atomatik lokacin siyan domain da mapping
* Gyara: An kare constants na plugin daga sake ayyanawa a muhallin gwaji
* Gyara: MySQL flags word-split daidai a cikin install-wp-tests.sh

Version 1.0.4 - An fitar a 2026-03-14
* **Gyara:** Wasu css assets da suka ɓace
* **Gyara:** Kuskure da ke da alaƙa da tlds da ba su samuwa

Version 1.0.3 - An fitar a 2026-03-09
* **Gyara:** Kurakuran reactive property na Vue (domain_option, selected_domain, domain_provider) lokacin amfani da tsohon samfurin signup tare da checkout shortcode
* **Gyara:** Rashin daidaiton filin shigar subdomain da rubutu mai girma fiye da kima a filin checkout na zaɓin domain
* **Gyara:** Ɓoye sashin preview na "URL ɗinka zai kasance" lokacin da filin zaɓin domain yake nan

Version 1.0.2 - An fitar a 2026-03-01
* **Inganta:** An cire saitunan markup na duniya daga shafin saituna — farashi yanzu na kowane-kayayyaki ne kawai
* **Inganta:** An ƙara mahaɗin "Sarrafa Kayayyakin Domain" a shafin saituna don kewayawa cikin sauri
* **Inganta:** Bayanin filaye da tooltips masu fi bayyana don saitunan kayan domain (catch-all vs takamaiman TLD, nau’ukan markup, farashin gabatarwa)
* **Inganta:** Ingantattun bayanai a duk shafin saituna (binciken TLDs, sabuntawa, DNS, sanarwa)

Version 1.0.1 - An fitar a 2026-02-27

* **Sabo:** Kayan shigo da TLD don sarrafa farashin yawa
* **Sabo:** Tallafin farashin gabatarwa don kayayyakin domain
* **Sabo:** Rukunin gwajin E2E tare da Cypress
* **Sabo:** Samfuran imel don sanarwar zagayowar rayuwar domain
* **Sabo:** Filayen adireshin registrant a kan modal na rajistar domain na admin, an riga an cika su daga saituna
* **Sabo:** Fuskar sarrafa DNS ta abokin ciniki tare da tallafin ƙara, gyara, da share rikodi
* **Sabo:** Zaɓin checkout na "Bring your own domain" tare da domain mapping ta atomatik
* **Sabo:** Ƙirƙirar URL na site ta atomatik daga sunan domain yayin checkout
* **Sabo:** Tsarin nameserver na tsoho da saitin rikodin DNS a cikin saituna
* **Sabo:** Bayanai na rajistar domain da sarrafa DNS a kan babban shafin gyaran domain
* **Sabo:** Setup wizard yana ƙirƙirar tsohon samfurin domain ta atomatik tare da tsoffin ƙimomi masu ma'ana
* **Sabo:** Daidaitawar TLD ta atomatik kullum ta cron a duk providers da aka saita
* **Sabo:** Kariyar sirrin WHOIS tare da saitin kowane samfur (koyaushe a kunne, zaɓin abokin ciniki, ko a kashe)
* **Sabo:** Akwatin zaɓi na sirrin WHOIS a checkout tare da nuna farashi da tallafin yanayin duhu
* **Sabo:** Shafin admin na Register Domain don rajistar domain da hannu
* **Sabo:** Sabunta plugin ta atomatik ta uwar garken sabuntawa ta Ultimate Multisite
* **Sabo:** Tab ɗin tace nau'in samfurin domain a teburin jerin kayayyaki tare da salon badge mai launin purple
* **Sabo:** Filayen tuntuɓar registrant (suna, adireshi, birni, jiha, lambar gidan waya, ƙasa, waya) a kan fom ɗin checkout na domain
* **Sabo:** Tabbatar da filin registrant kafin kiran registrar API tare da saƙonnin kuskure masu bayyana
* **Sabo:** Tashoshin log na musamman ga provider don abubuwan rajistar domain (misali domain-seller-namecheap.log)
* **Sabo:** Filayen tuntuɓar registrant a kan babban fom ɗin rajista/signup checkout (ana nuna su lokacin rajistar domain)
* **An inganta:** An maye gurbin filin Domain Search na checkout da haɗaɗɗen filin Domain Selection mai tallafawa tabs na subdomain, register, da existing domain
* **An inganta:** Saitunan samfurin domain suna bayyana inline a shafin gyaran samfur ta tsarin widget na core
* **An inganta:** Bayanin domain na abokin ciniki yana haɗuwa da widget na core domain mapping maimakon metabox mai zaman kansa
* **An inganta:** TLD import wizard an sauƙaƙa shi zuwa daidaitawar dannawa ɗaya daga duk providers
* **An inganta:** Samuwar domain na Namecheap tana amfani da kiran API na batch don bincike mafi sauri
* **An inganta:** API na farashin Namecheap yana amfani da madaidaitan parameters da fassarar amsa
* **An inganta:** Adana TLD a wuri guda a cikin zaɓin network ɗaya
* **An inganta:** Rubutun ayyukan domain don canje-canjen DNS, transfers, da aiwatar da config
* **An inganta:** Cikakkiyar daidaitawar TLD don OpenSRS ta amfani da babban jerin IANA tare da batch validation
* **An inganta:** Cikakkiyar daidaitawar TLD don Namecheap tare da buƙatun API masu pagination
* **An inganta:** An maye gurbin tsoffin provider classes da tsarin Integration Registry
* **An inganta:** Panel ɗin saituna tare da tsarin DNS da transfer
* **An inganta:** Lambobin waya ana tsara su ta atomatik zuwa tsarin registrar na +CC.NNN
* **An inganta:** Tabbatar da filin waya yana cire haruffan tsari kafin miƙawa
* **An inganta:** An ɗaga buƙatar version zuwa Ultimate Multisite 2.4.12 tare da sanarwa mafi bayyane
* **An inganta:** Aikin CI yana amfani da ingantaccen checkout ga addon da core plugin
* **An inganta:** prepare_registrant_info() yana karantawa daga user meta da aka adana a checkout tare da madadin billing address
* **An gyara:** AJAX na binciken domain yana gazawa ga masu amfani da ba su shiga ba yayin checkout
* **An gyara:** AJAX na farashin domain yana gazawa ga masu amfani da ba su shiga ba yayin checkout
* **An gyara:** Mummunan kuskuren sake ayyana class na Spyc lokacin gudanar da umarnin WP-CLI
* **An gyara:** Lokacin ƙarewar Namecheap sandbox API ya yi gajarta sosai
* **An gyara:** Rubutun maɓallin Select na binciken domain ba ya bayyana a kan koren bango
* **An gyara:** Rajistar domain tana gazawa da kuskuren "RegistrantFirstName is Missing" saboda bayanin tuntuɓa ya ɓace
* **An gyara:** An ƙirƙiri rikodin domain da blog_id=0 lokacin da site bai wanzu ba tukuna a lokacin checkout
* **An gyara:** Saitin TLDs na tsoho yana dawowa a matsayin string maimakon parsed array
* **An cire:** Shafin admin na Domain Management mai zaman kansa — yanzu ana sarrafa shi ta manyan shafukan domain

Version 1.0.0 - An saki a 2025-09-28

**Babban Sake Rubutawa don Ultimate Multisite v2**

* **Sabo:** Cikakken sake rubutawa da tsarin gine-ginen PHP 7.4+ na zamani
* **Sabo:** Haɗin kai mara tangarɗa da tsarin checkout na Ultimate Multisite v2
* **Sabo:** Sarrafa samfurin domain tare da zaɓuɓɓukan farashi masu sassauci
* **Sabo:** Tsarin tallafawa providers da yawa na domain
* **Sabo:** Haɗin auto-renewal da subscription
* **Sabo:** Fuskar sarrafa domain ta abokin ciniki
* **Sabo:** Kulawa da log na domain na admin
* **Sabo:** Tallafin coupon don kayayyakin domain
* **Sabo:** Cikakken sarrafa saituna
* **Sabo:** Codebase mai sauƙin faɗaɗawa ga masu haɓakawa
* **An inganta:** An sabunta provider na OpenSRS tare da cikakken tallafin fasali
* **An inganta:** UI na zamani mai daidaito da Ultimate Multisite v2
* **An gyara:** Duk tsohon code na v1 da aka daina amfani da shi an sabunta shi zuwa ƙa'idodin v2
* **An cire:** Daidaituwar v1 ta gado (canji mai karya aiki)

### Sigogin da Suka Gabata (v1 Legacy) {#previous-versions-v1-legacy}

### Version 0.0.3 - 20/08/2019 {#version-003---20082019}

* An gyara: Rashin daidaituwa da Groundhogg CRM
* Lura: Wannan shi ne sakin ƙarshe da ya dace da v1

### Version 0.0.2 - 07/12/2018 {#version-002---07122018}

* An gyara: An cire filin License Key
* An gyara: Tabs na shiri sun ɓace lokacin da feature plugin yake aiki
* An inganta: An ƙara maɓallin tsallakewa a filin rajista

### Version 0.0.1 - Sakin Farko {#version-001---initial-release}

* Haɗin OpenSRS na asali don WP Ultimo v1
* Sauƙin binciken domain da rajista
* Izinin domain bisa shiri
