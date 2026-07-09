---
title: Diiwaanka Isbeddellada Iibiyaha Domain-ka
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Domain Seller Diiwaanka Isbeddellada {#domain-seller-changelog}

Nooca 1.3.0 - La sii daayay 2026-06-02
- Cusub: Waxaa lagu daray digniin network-admin ah marka hadhaaga reseller-ka HostAfrica uu aad u hooseeyo
- Cusub: Waxaa lagu daray khariidayn toos ah oo domains-ka cusub ee la diiwaangeliyey loogu xiro goobta shabakadda
- Hagaajin: Shuruudaha field-ka diiwaangeliyaha waxaa la dabaqay keliya marka la diiwaangelinayo domain cusub
- Hagaajin: Ogeysiisyada la socodka hadhaaga waxaa laga dhigay kuwo la diidi karo
- Hagaajin: Waxaa la xaqiijiyey in faahfaahinta biil-bixinta diiwaangeliyaha WooCommerce la ilaaliyo
- Hagaajin: Waxaa la adkeeyey shuruudaha xiriirka diiwaangeliyaha inta lagu jiro diiwaangelinta
- Hagaajin: Waxaa laga hortagay in alaabada diiwaangelinta domain-ka lagu abuuro markup 0% ah
- Hagaajin: Waxaa la ilaaliyey xulashooyinka domain-ka iyo qiimeynta inta lagu jiro socodka kalfadhiga checkout-ka
- Hagaajin: Waxaa la hagaajiyey muujinta lacagta qiimeynta domain-ka HostAfrica
- Hagaajin: Waxaa la hagaajiyey habdhaqanka checkout form-action si looga hortago iswaafaq-la'aanta WP-core query-var
- La hagaajiyey: Dukumentiyada qaabeynta reseller-ka HostAfrica ayaa lagu xiray hagitaanka dejinta

Nooca 1.2.0 - La sii daayay 2026-05-25
- Cusub: HostAfrica waxaa lagu daray sidii isdhexgal lagu iibiyo domains oo leh checkout, setup wizard, lookup, TLD/qiimeyn, diiwaangelin, cusboonaysiin, wareejin, nameserver, DNS, EPP code, registrar lock, iyo taageerada ilaalinta ID
- Cusub: Openprovider waxaa lagu daray sidii isdhexgal lagu iibiyo domains oo leh qiimeyn reseller, diiwaangelin, cusboonaysiin, wareejin, nameserver, DNS, EPP code, registrar lock, WHOIS privacy, iyo taageerada TLD sync
- Cusub: Hostinger waxaa lagu daray sidii isdhexgal lagu iibiyo domains iyadoo la adeegsanayo Hostinger API token-ka la wadaago ee ka yimaada isdhexgalka core-ka, si loogu sameeyo hubinta helitaanka, diiwaangelinta, cusboonaysiinta nameserver-ka, registrar lock, iyo WHOIS privacy
- La hagaajiyey: Waxaa lagu daray domain lifecycle action iyo filter docblocks si loogu hago isdhexgalka horumariyeyaasha
- La hagaajiyey: Metadata-ga waafaqsanaanta plugin-ka waxaa lagu cusboonaysiiyey WordPress 7.0 gudaha readme-ga addon-ka
- La hagaajiyey: Waxaa la cusboonaysiiyey templates-ka qorshaynta ee loo adeegsado isku-duwidda sii-daynta soo socota

Nooca 1.1.0 - La sii daayay 2026-05-08
- Cusub: Abuurista diiwaanka DNS (add_dns_record) ayaa loo hirgeliyey diiwaangeliyeyaasha ResellerClub, Enom, iyo OpenSRS
- Hagaajin: Parser-ka Default DNS Records hadda wuu u dulqaataa tokens-ka {DOMAIN} iyo {SITE_URL}
- Hagaajin: Slugs-ka field-ka checkout-ka xulashada domain-ka waxaa lagu daray namespace si looga hortago isku dhaca site_url

Nooca 1.0.8 - La sii daayay 2026-05-07
- Hagaajin: Qiimeynta domain-ka ResellerClub hadda waxay ka soo qaadataa qiimaha kharashka tooska ah API endpoint-ka saxda ah

Nooca 1.0.7 - La sii daayay 2026-05-06
* Hagaajin: ResellerClub test_connection waxay dirtaa parameter-ka tlds ee loo baahan yahay (#224)

Nooca 1.0.6 - La sii daayay 2026-05-05
* Hagaajin: Diiwaangelinta domain-ka ResellerClub hadda si sax ah ayey u shaqeysaa iyadoo la hagaajiyey maaraynta jawaabta API-ga iyo routing-ka provider-ka ee registry-gu hago
* Hagaajin: Hagaajinta UX ee bogga admin-ka Register Domain
* La saaray: Isdhexgalka registrar-ka CyberPanel

Nooca 1.0.5 - La sii daayay 2026-04-02
* Cusub: Isdhexgalka registrar-ka GoDaddy ee diiwaangelinta iyo maareynta domain-ka
* Cusub: Isdhexgalka registrar-ka NameSilo
* Cusub: Isdhexgalka registrar-ka ResellerClub
* Cusub: Si toos ah u xaqiiji domain-ka dirista SES marka domain la iibsado oo la khariidadeeyo
* Hagaajin: Ka ilaali constants-ka plugin-ka in dib loo qeexo gudaha deegaanka tijaabada
* Hagaajin: Flags-ka MySQL si sax ah ayaa loogu kala jaray install-wp-tests.sh

Nooca 1.0.4 - La sii daayay 2026-03-14
* **Hagaajin:** Qaar ka mid ah assets-ka css ee maqnaa
* **Hagaajin:** Khalad la xiriira tlds aan la heli karin

Nooca 1.0.3 - La sii daayay 2026-03-09
* **Hagaajin:** Khaladaadka Vue reactive property (domain_option, selected_domain, domain_provider) marka la adeegsanayo template-ka signup-ka dhaxalka ah oo leh checkout shortcode-ka
* **Hagaajin:** Iswaafajin-la'aanta field-ka gelinta subdomain-ka iyo qoraal aad u weyn gudaha field-ka checkout-ka xulashada domain-ka
* **Hagaajin:** Qari block-ga horudhaca "URL-kaagu wuxuu noqon doonaa" marka field-ka xulashada domain-ka uu jiro

Nooca 1.0.2 - La sii daayay 2026-03-01
* **La hagaajiyey:** Dejimaha markup-ka guud ayaa laga saaray bogga dejimaha — qiimeyntu hadda waxay si gaar ah ugu xiran tahay alaab kasta
* **La hagaajiyey:** Waxaa lagu daray linkiga "Maamul Alaabada Domain-ka" bogga dejimaha si loogu socdo si degdeg ah
* **La hagaajiyey:** Sharaxaadaha field-ka iyo tooltips-ka oo ka cadcad dejimaha alaabta domain-ka (catch-all vs TLD-specific, noocyada markup, qiimeynta hordhaca ah)
* **La hagaajiyey:** Sharaxaad ka wanaagsan dhammaan bogga dejimaha (raadinta TLDs, cusboonaysiinta, DNS, ogeysiisyada)

Nooca 1.0.1 - La sii daayay 2026-02-27

* **Cusub:** Qalabka soo-dejinta TLD ee maareynta qiimeynta tiro badan
* **Cusub:** Taageerada qiimeyn hordhac ah ee alaabaha domain
* **Cusub:** Xirmo tijaabo E2E ah oo leh Cypress
* **Cusub:** Qaabab email oo loogu talagalay ogeysiisyada wareegga nolosha domain
* **Cusub:** Goobaha cinwaanka diiwaangaliyaha ee modal-ka diiwaangelinta domain ee admin, oo horay looga buuxiyey settings
* **Cusub:** Interface maareynta DNS ee macmiilka oo leh taageero ku darid, tafatir, iyo tirtirid record
* **Cusub:** Ikhtiyaarka checkout ee "Bring your own domain" oo leh domain mapping toos ah
* **Cusub:** Si toos ah u abuur URL-ka site-ka laga bilaabo magaca domain inta lagu jiro checkout
* **Cusub:** Nameserver-ka caadiga ah iyo qaabeynta DNS record ee settings
* **Cusub:** Faahfaahinta diiwaangelinta domain iyo maareynta DNS ee bogga tafatirka domain-ka aasaasiga ah
* **Cusub:** Setup wizard ayaa si toos ah u abuura alaab domain caadi ah oo leh defaults macquul ah
* **Cusub:** Is-waafajin TLD maalinle ah oo toos ah via cron dhammaan providers-ka la habeeyay
* **Cusub:** Ilaalinta asturnaanta WHOIS oo leh qaabeyn per-product ah (had iyo jeer shid, doorashada macmiilka, ama damisan)
* **Cusub:** Checkbox-ka checkout ee asturnaanta WHOIS oo leh bandhig qiimeyn iyo taageero dark mode
* **Cusub:** Bogga admin ee Register Domain loogu talagalay diiwaangelinta domain gacanta ah
* **Cusub:** Cusboonaysiinta plugin-ka tooska ah via server-ka cusboonaysiinta Ultimate Multisite
* **Cusub:** Tab filter nooca alaabta domain ee miiska liiska alaabta oo leh qaab badge guduudan
* **Cusub:** Goobaha xiriirka diiwaangaliyaha (magac, cinwaan, magaalo, gobol, code boosto, waddan, telefoon) ee foomka checkout-ka domain
* **Cusub:** Xaqiijinta goobaha diiwaangaliyaha ka hor inta aan la wicin registrar API oo leh fariimo qalad cad
* **Cusub:** Kanaallo log oo provider-gaar ah loogu talagalay dhacdooyinka diiwaangelinta domain (tusaale domain-seller-namecheap.log)
* **Cusub:** Goobaha xiriirka diiwaangaliyaha ee foomka checkout-ka diiwaangelinta/signup-ka ugu weyn (la muujiyo marka la diiwaangelinayo domain)
* **La hagaajiyay:** Waxaa lagu beddelay goobtii Domain Search ee checkout goob mideysan oo Domain Selection ah oo taageerta tabs subdomain, register, iyo existing domain
* **La hagaajiyay:** Settings-ka alaabta domain waxay si inline ah uga muuqdaan bogga tafatirka alaabta via nidaamka widget-ka core
* **La hagaajiyay:** Macluumaadka domain ee macmiilka wuxuu ku xirmaa widget-ka domain mapping ee core halkii uu ka ahaan lahaa metabox gooni ah
* **La hagaajiyay:** Wizard-ka soo-dejinta TLD waa la fududeeyay si uu u noqdo is-waafajin hal-gujin ah dhammaan providers
* **La hagaajiyay:** Helitaanka domain ee Namecheap wuxuu adeegsadaa wicitaan batch API ah si raadintu u degdegto
* **La hagaajiyay:** Pricing API-ga Namecheap wuxuu adeegsadaa parameters sax ah iyo falanqaynta jawaabta
* **La hagaajiyay:** Kaydinta TLD ayaa lagu mideeyay hal network option
* **La hagaajiyay:** Logging-ka dhaqdhaqaaqa domain ee isbeddellada DNS, wareejinnada, iyo codsiga config
* **La hagaajiyay:** Is-waafajin TLD oo buuxda oo loogu talagalay OpenSRS iyadoo la adeegsanayo liiska master ee IANA oo leh batch validation
* **La hagaajiyay:** Is-waafajin TLD oo buuxda oo loogu talagalay Namecheap oo leh codsiyo API oo paginated ah
* **La hagaajiyay:** Waxaa lagu beddelay classes provider-kii legacy qaabka Integration Registry
* **La hagaajiyay:** Settings panel oo leh qaabeynta DNS iyo wareejin
* **La hagaajiyay:** Lambarada telefoonka si toos ah ayaa loogu qaabeeyaa format-ka registrar ee +CC.NNN
* **La hagaajiyay:** Xaqiijinta goobta telefoonka waxay ka saartaa characters qaabeynta ka hor gudbinta
* **La hagaajiyay:** Shuruudda version-ka ayaa kor loogu qaaday Ultimate Multisite 2.4.12 oo leh ogeysiis ka cad
* **La hagaajiyay:** Workflow-ga CI wuxuu adeegsadaa checkout sax ah labadaba addon iyo core plugin
* **La hagaajiyay:** prepare_registrant_info() wuxuu ka akhriyaa user meta checkout-saved oo leh billing address fallback
* **La hagaajiyay:** Domain search AJAX oo ku fashilmay isticmaaleyaasha aan logged-in ahayn inta lagu jiro checkout
* **La hagaajiyay:** Domain pricing AJAX oo ku fashilmay isticmaaleyaasha aan logged-in ahayn inta lagu jiro checkout
* **La hagaajiyay:** Khalad fatal ah oo Spyc class redeclaration ah marka la socodsiinayo amarrada WP-CLI
* **La hagaajiyay:** Timeout-ka Namecheap sandbox API oo aad u gaaban
* **La hagaajiyay:** Qoraalka badhanka Select ee raadinta domain oo aan ka muuqan background cagaaran
* **La hagaajiyay:** Diiwaangelinta domain oo ku fashilantay qaladka "RegistrantFirstName is Missing" sababtoo ah macluumaad xiriir oo maqan
* **La hagaajiyay:** Domain record oo lagu abuuray blog_id=0 marka site-ku weli uusan jirin waqtiga checkout
* **La hagaajiyay:** Setting-ka TLDs caadiga ah oo loo soo celiyay string halkii uu ka ahaan lahaa array la parsed
* **La saaray:** Bogga admin ee Domain Management goonida ah — hadda waxaa lagu maareeyaa bogagga domain ee core

Version 1.0.0 - La sii daayay 2025-09-28

**Dib-u-qorid Weyn oo loogu talagalay Ultimate Multisite v2**

* **Cusub:** Dib-u-qorid dhammaystiran oo leh qaab-dhismeed casri ah PHP 7.4+
* **Cusub:** Isdhexgal aan kala go' lahayn oo lala leeyahay nidaamka checkout ee Ultimate Multisite v2
* **Cusub:** Maareynta alaabta domain oo leh ikhtiyaarro qiimeyn dabacsan
* **Cusub:** Qaab-dhismeedka taageerada providers badan oo domain ah
* **Cusub:** Is-cusboonaysiin iyo isdhexgal subscription
* **Cusub:** Interface maareynta domain ee macmiilka
* **Cusub:** Kormeerka domain ee admin iyo logs
* **Cusub:** Taageerada coupon ee alaabaha domain
* **Cusub:** Maareyn settings oo dhammaystiran
* **Cusub:** Codebase la ballaarin karo oo u sahlan developer
* **La hagaajiyay:** Provider-ka OpenSRS oo la cusboonaysiiyay, leh taageero feature buuxda
* **La hagaajiyay:** UI casri ah oo waafaqsan Ultimate Multisite v2
* **La hagaajiyay:** Dhammaan code-kii v1 ee duugoobay waxaa loo cusboonaysiiyay heerarka v2
* **La saaray:** Waafaqsanaanta legacy v1 (isbeddel jabinaya)

### Versions Hore (v1 Legacy) {#previous-versions-v1-legacy}

### Version 0.0.3 - 20/08/2019 {#version-003---20082019}

* La hagaajiyay: Is-waafaqid la'aanta Groundhogg CRM
* Xusuusin: Kani wuxuu ahaa sii-dayntii ugu dambeysay ee v1-compatible

### Version 0.0.2 - 07/12/2018 {#version-002---07122018}

* La hagaajiyay: Waxaa la saaray goobta License Key
* La hagaajiyay: Tabs-ka plan oo maqan marka plugin-ka feature uu firfircoon yahay
* La hagaajiyay: Waxaa lagu daray badhan skip ah goobta diiwaangelinta

### Version 0.0.1 - Sii-dayntii Hore {#version-001---initial-release}

* Isdhexgal OpenSRS aasaasi ah oo loogu talagalay WP Ultimo v1
* Raadinta iyo diiwaangelinta domain fudud
* Oggolaanshaha domain ee ku saleysan plan
