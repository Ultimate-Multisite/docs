---
title: Mbiri ya Zosintha za Wogulitsa Madomeni
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Mbiri ya Kusintha ya Wogulitsa Ma Domain

Mtundu 1.3.0 - Watulutsidwa pa 2026-06-02
- Chatsopano: Onjezera chenjezo la network-admin pamene ndalama zotsala za HostAfrica reseller zatsika kwambiri
- Chatsopano: Onjezera kulumikiza kokha kwa ma domain omwe alembetsedwa kumene ku tsamba la netiweki
- Kukonza: Ikani zofunikira za minda ya wolembetsa pokhapokha polembetsa domain yatsopano
- Kukonza: Zidziwitso zowunika ndalama zotsala zikhale zotha kuchotsedwa
- Kukonza: Tsimikiza kuti tsatanetsatane wa kulipira wa wolembetsa wa WooCommerce wasungidwa
- Kukonza: Limbikitsa zofunikira za kulumikizana ndi wolembetsa panthawi yolembetsa
- Kukonza: Pewani kuti zinthu zolembetsa ma domain zisapangidwe ndi phindu la 0%
- Kukonza: Sungani zosankha za ma domain ndi mitengo kudzera mu kayendedwe ka gawo la checkout
- Kukonza: Konzani kuwonetsa ndalama za mitengo ya ma domain a HostAfrica
- Kukonza: Konzani khalidwe la form-action ya checkout kuti mupewe kusiyana kwa query-var ya WP-core
- Zakonzedwa: Lumikizani zolemba za kasinthidwe ka HostAfrica reseller mu malangizo a kukhazikitsa

Mtundu 1.2.0 - Watulutsidwa pa 2026-05-25
- Chatsopano: Onjezera HostAfrica ngati kuphatikizana kogulitsa ma domain kokhala ndi checkout, setup wizard, lookup, TLD/pricing, kulembetsa, kukonzanso, kusamutsa, nameserver, DNS, EPP code, registrar lock, ndi thandizo la chitetezo cha ID
- Chatsopano: Onjezera Openprovider ngati kuphatikizana kogulitsa ma domain kokhala ndi mitengo ya reseller, kulembetsa, kukonzanso, kusamutsa, nameserver, DNS, EPP code, registrar lock, WHOIS privacy, ndi thandizo la TLD sync
- Chatsopano: Onjezera Hostinger ngati kuphatikizana kogulitsa ma domain pogwiritsa ntchito token ya Hostinger API yogawidwa kuchokera ku kuphatikizana kwa core pa kufufuza kupezeka, kulembetsa, zosintha za nameserver, registrar lock, ndi WHOIS privacy
- Zakonzedwa: Onjezera domain lifecycle action ndi filter docblocks pa malangizo a kuphatikizana kwa opanga mapulogalamu
- Zakonzedwa: Sinthani metadata ya kugwirizana kwa plugin kukhala WordPress 7.0 mu addon readme
- Zakonzedwa: Sinthani ma template a kukonzekera omwe amagwiritsidwa ntchito pa kugwirizanitsa kutulutsa komwe kukubwera

Mtundu 1.1.0 - Watulutsidwa pa 2026-05-08
- Chatsopano: Kupanga zolemba za DNS (add_dns_record) kwakhazikitsidwa kwa ma registrar a ResellerClub, Enom, ndi OpenSRS
- Kukonza: Parser ya Default DNS Records tsopano imalola ma token a {DOMAIN} ndi {SITE_URL}
- Kukonza: Ma slug a minda ya checkout yosankha domain apatsidwa namespace kuti apewe kugundana ndi site_url

Mtundu 1.0.8 - Watulutsidwa pa 2026-05-07
- Kukonza: Mitengo ya ma domain a ResellerClub tsopano imatenga mitengo ya ndalama zenizeni kuchokera ku API endpoint yolondola

Mtundu 1.0.7 - Watulutsidwa pa 2026-05-06
* Kukonza: ResellerClub test_connection imatumiza parameter yofunikira ya tlds (#224)

Mtundu 1.0.6 - Watulutsidwa pa 2026-05-05
* Kukonza: Kulembetsa domain kwa ResellerClub tsopano kumagwira ntchito bwino ndi kusamalira yankho la API kokonzedwa komanso routing ya provider yoyendetsedwa ndi registry
* Kukonza: Zokonza za UX pa tsamba la admin la Register Domain
* Zachotsedwa: Kuphatikizana kwa registrar wa CyberPanel

Mtundu 1.0.5 - Watulutsidwa pa 2026-04-02
* Chatsopano: Kuphatikizana kwa registrar wa GoDaddy pa kulembetsa ndi kusamalira ma domain
* Chatsopano: Kuphatikizana kwa registrar wa NameSilo
* Chatsopano: Kuphatikizana kwa registrar wa ResellerClub
* Chatsopano: Kutsimikizira zokha domain yotumizira ya SES pa kugula ndi kulumikiza domain
* Kukonza: Tetezani ma constants a plugin kuti asatanthauzidwenso mu malo oyesera
* Kukonza: Ma flags a MySQL amagawanika mawu molondola mu install-wp-tests.sh

Mtundu 1.0.4 - Watulutsidwa pa 2026-03-14
* **Kukonza:** Zinthu zina za css zosowa
* **Kukonza:** Cholakwika chokhudzana ndi tlds zomwe sizikupezeka

Mtundu 1.0.3 - Watulutsidwa pa 2026-03-09
* **Kukonza:** Zolakwika za Vue reactive property (domain_option, selected_domain, domain_provider) pogwiritsa ntchito template yakale ya signup yokhala ndi shortcode ya checkout
* **Kukonza:** Kusagwirizana kwa munda wolowetsera subdomain ndi mawu akulu kwambiri mu munda wa checkout wosankha domain
* **Kukonza:** Bisani block ya chithunzithunzi cha "URL yanu idzakhala" pamene munda wosankha domain ulipo

Mtundu 1.0.2 - Watulutsidwa pa 2026-03-01
* **Zakonzedwa:** Chotsani makonzedwe a phindu lonse pa tsamba la makonzedwe — mitengo tsopano ili ya chinthu chilichonse chokha
* **Zakonzedwa:** Onjezera ulalo wa "Samalirani Zinthu za Ma Domain" pa tsamba la makonzedwe kuti muyende mwachangu
* **Zakonzedwa:** Mafotokozedwe omveka bwino a minda ndi ma tooltips a makonzedwe a zinthu za domain (catch-all motsutsana ndi za TLD yeniyeni, mitundu ya phindu, mitengo yoyambira)
* **Zakonzedwa:** Mafotokozedwe abwino pa tsamba lonse la makonzedwe (kusaka TLDs, kukonzanso, DNS, zidziwitso)

Mtundu 1.0.1 - Watulutsidwa pa 2026-02-27

* **Chatsopano:** Chida cholowetsera TLD cha kasamalidwe ka mitengo yambiri
* **Chatsopano:** Thandizo la mitengo yoyambira pa zinthu za domain
* **Chatsopano:** Gulu la mayeso a E2E ndi Cypress
* **Chatsopano:** Ma template a imelo a zidziwitso za moyo wa domain
* **Chatsopano:** Minda ya adilesi ya registrant pa modal ya kulembetsa domain ya admin, yodzazidwa kale kuchokera ku settings
* **Chatsopano:** Mawonekedwe a kasamalidwe ka DNS kwa kasitomala okhala ndi thandizo lowonjezera, losintha, ndi lochotsa ma record
* **Chatsopano:** Njira ya checkout ya "Bring your own domain" yokhala ndi domain mapping yokha
* **Chatsopano:** Kupanga yokha URL ya site kuchokera ku dzina la domain pa nthawi ya checkout
* **Chatsopano:** Kusintha kwa nameserver yokhazikika ndi DNS record mu settings
* **Chatsopano:** Tsatanetsatane wa kulembetsa domain ndi kasamalidwe ka DNS pa tsamba lalikulu losinthira domain
* **Chatsopano:** Setup wizard imapanga yokha chinthu cha domain chokhazikika chokhala ndi zokhazikika zomveka
* **Chatsopano:** Kulunzanitsa kwa TLD tsiku ndi tsiku kokha kudzera pa cron kwa opereka onse okonzedwa
* **Chatsopano:** Chitetezo cha chinsinsi cha WHOIS chokhala ndi kasinthidwe pa chinthu chilichonse (nthawi zonse chayatsidwa, chisankho cha kasitomala, kapena chazimitsidwa)
* **Chatsopano:** Bokosi losankha la WHOIS privacy pa checkout lokhala ndi kuwonetsa mitengo ndi thandizo la dark mode
* **Chatsopano:** Tsamba la admin la Register Domain lolembetsa domain pamanja
* **Chatsopano:** Zosintha za plugin zokha kudzera pa seva yosinthira ya Ultimate Multisite
* **Chatsopano:** Tabu yosefera mtundu wa chinthu cha domain mu tebulo la mndandanda wa zinthu yokhala ndi kalembedwe ka badge yofiirira
* **Chatsopano:** Minda yolumikizirana ndi registrant (dzina, adilesi, mzinda, boma, postal code, dziko, foni) pa fomu ya checkout ya domain
* **Chatsopano:** Kutsimikizira minda ya registrant musanayitane registrar API yokhala ndi mauthenga olakwika omveka
* **Chatsopano:** Ma channel a log apadera kwa provider a zochitika za kulembetsa domain (monga domain-seller-namecheap.log)
* **Chatsopano:** Minda yolumikizirana ndi registrant pa fomu yayikulu ya kulembetsa/signup checkout (imawonetsedwa polembetsa domain)
* **Zakonzedwa bwino:** Munda wa Domain Search checkout wasinthidwa ndi munda umodzi wa Domain Selection wothandiza ma tabu a subdomain, register, ndi domain yomwe ilipo
* **Zakonzedwa bwino:** Settings za chinthu cha domain zimawonetsedwa mkati pa tsamba losinthira chinthu kudzera pa core widget system
* **Zakonzedwa bwino:** Zambiri za domain ya kasitomala zimalumikizana ndi core domain mapping widget m'malo mwa metabox yodziyimira payokha
* **Zakonzedwa bwino:** TLD import wizard yasinthidwa kukhala yosavuta ndi kulunzanitsa kamodzi kokha kuchokera kwa opereka onse
* **Zakonzedwa bwino:** Kupezeka kwa domain ya Namecheap kumagwiritsa ntchito batch API call kuti kufufuza kukhale kofulumira
* **Zakonzedwa bwino:** Namecheap pricing API imagwiritsa ntchito ma parameter olondola ndi kusanthula yankho
* **Zakonzedwa bwino:** Kusungira kwa TLD kwapakati mu network option imodzi
* **Zakonzedwa bwino:** Kulemba zochitika za domain pa kusintha kwa DNS, transfers, ndi kugwiritsa ntchito config
* **Zakonzedwa bwino:** Kulunzanitsa kwathunthu kwa TLD kwa OpenSRS pogwiritsa ntchito IANA master list yokhala ndi batch validation
* **Zakonzedwa bwino:** Kulunzanitsa kwathunthu kwa TLD kwa Namecheap ndi zopempha za API za paginated
* **Zakonzedwa bwino:** Makalasi akale a provider asinthidwa ndi njira ya Integration Registry
* **Zakonzedwa bwino:** Panel ya settings yokhala ndi kasinthidwe ka DNS ndi transfer
* **Zakonzedwa bwino:** Manambala a foni amasinthidwa okha kukhala mtundu wa registrar wa +CC.NNN
* **Zakonzedwa bwino:** Kutsimikizira kwa munda wa foni kumachotsa zilembo za formatting musanatumize
* **Zakonzedwa bwino:** Chofunikira cha version chakwezedwa kukhala Ultimate Multisite 2.4.12 chokhala ndi chidziwitso chomveka bwino
* **Zakonzedwa bwino:** CI workflow imagwiritsa ntchito checkout yoyenera pa addon ndi core plugin
* **Zakonzedwa bwino:** prepare_registrant_info() imawerenga kuchokera ku user meta yosungidwa pa checkout yokhala ndi billing address fallback
* **Zakonzedwa:** Domain search AJAX kulephera kwa ogwiritsa ntchito osalowa pa nthawi ya checkout
* **Zakonzedwa:** Domain pricing AJAX kulephera kwa ogwiritsa ntchito osalowa pa nthawi ya checkout
* **Zakonzedwa:** Cholakwika chachikulu cha Spyc class redeclaration poyendetsa malamulo a WP-CLI
* **Zakonzedwa:** Namecheap sandbox API timeout inali yochepa kwambiri
* **Zakonzedwa:** Mawu a batani la Select pa domain search sanali kuwoneka pa maziko obiriwira
* **Zakonzedwa:** Kulembetsa domain kulephera ndi cholakwika cha "RegistrantFirstName is Missing" chifukwa chosowa zambiri zolumikizirana
* **Zakonzedwa:** Domain record idapangidwa ndi blog_id=0 pamene site sinalipo panthawiyo ya checkout
* **Zakonzedwa:** Setting ya TLDs yokhazikika inabwezedwa ngati string m'malo mwa array yosanthulidwa
* **Zachotsedwa:** Tsamba la admin la Domain Management lodziyimira payokha — tsopano likuchitidwa kudzera pa masamba a core domain

Version 1.0.0 - Yatulutsidwa pa 2025-09-28

**Kulembanso Kwakukulu kwa Ultimate Multisite v2**

* **Chatsopano:** Kulembanso kwathunthu ndi kapangidwe kamakono ka PHP 7.4+
* **Chatsopano:** Kuphatikizana kosalala ndi checkout system ya Ultimate Multisite v2
* **Chatsopano:** Kasamalidwe ka zinthu za domain kokhala ndi zosankha zamitengo zosinthika
* **Chatsopano:** Kapangidwe kothandizira opereka domain angapo
* **Chatsopano:** Kuphatikizana kwa auto-renewal ndi subscription
* **Chatsopano:** Mawonekedwe a kasamalidwe ka domain kwa kasitomala
* **Chatsopano:** Kuwunika kwa domain kwa admin ndi ma log
* **Chatsopano:** Thandizo la coupon pa zinthu za domain
* **Chatsopano:** Kasamalidwe ka settings kokwanira
* **Chatsopano:** Codebase yosavuta kwa opanga mapulogalamu komanso yowonjezekeka
* **Zakonzedwa bwino:** Provider wa OpenSRS wasinthidwa ndi thandizo la zinthu zonse
* **Zakonzedwa bwino:** UI yamakono yogwirizana ndi Ultimate Multisite v2
* **Zakonzedwa:** Code yonse ya v1 yakale yasinthidwa ku miyezo ya v2
* **Zachotsedwa:** Kugwirizana ndi v1 yakale (kusintha koswa)

### Ma Version Akale (v1 Yakale)

### Version 0.0.3 - 20/08/2019

* Zakonzedwa: Kusagwirizana ndi Groundhogg CRM
* Chidziwitso: Iyi inali kutulutsidwa komaliza kogwirizana ndi v1

### Version 0.0.2 - 07/12/2018

* Zakonzedwa: Munda wa License Key wachotsedwa
* Zakonzedwa: Ma tabu a plan akusowa pamene feature plugin ili active
* Zakonzedwa bwino: Batani lodumpha lawonjezedwa pa munda wa kulembetsa

### Version 0.0.1 - Kutulutsidwa Koyambirira

* Kuphatikizana koyambira kwa OpenSRS kwa WP Ultimo v1
* Kufufuza ndi kulembetsa domain kosavuta
* Zilolezo za domain zochokera pa plan
