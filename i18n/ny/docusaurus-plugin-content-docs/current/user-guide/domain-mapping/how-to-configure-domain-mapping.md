---
title: Momwe Mungakhazikitsire Kulumikiza Madomaini
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Momwe Mungakonzekere Kulumikiza Domain (v2)

_**CHIDZIWITSO CHOFUNIKA: Nkhaniyi ikunena za Ultimate Multisite mtundu wa 2.x.**_

Chimodzi mwa zinthu zamphamvu kwambiri pa netiweki yapamwamba ndi kuthekera kopatsa makasitomala athu mwayi wolumikiza domain ya pamwamba ku ma site awo. Pomaliza, ndi iti yomwe imawoneka yaukadaulo kwambiri: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) kapena [_**joesbikeshop.com**_](http://joesbikeshop.com)? Ndi chifukwa chake Ultimate Multisite imapereka mbali imeneyo yomangidwamo, popanda kufunikira kogwiritsa ntchito ma plugin a chipani chachitatu.

## Kodi kulumikiza domain ndi chiyani? {#whats-domain-mapping}

Monga dzinalo likusonyezera, kulumikiza domain ndi kuthekera komwe Ultimate Multisite imapereka kolandira pempho la domain yapadera ndikulumikiza pempholo ku site yoyenera mu netiweki yomwe ili ndi domain imeneyo yolumikizidwa.

### Momwe mungakhazikitsire kulumikiza domain pa Netiweki yanu ya Ultimate Multisite {#how-to-setup-domain-mapping-on-your-ultimate-multisite-network}

Kulumikiza domain kumafuna kukonzekera kwina kwa inu kuti kugwire ntchito. Mwamwayi, Ultimate Multisite imachita yokha ntchito yovuta kwa inu kuti muthe kukwaniritsa zofunikira mosavuta.

Pa nthawi yoyika Ultimate Multisite, wizard idzakopera yokha ndikuyika **sunrise.php** mu foda yomwe yasankhidwa. **Wizard sidzakulolani kupitiriza mpaka sitepe iyi itamalizidwa**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Izi zikutanthauza kuti wizard yoyika Ultimate Multisite ikamaliza kukhazikitsa netiweki yanu, mukhoza kuyamba kulumikiza domain yapadera nthawi yomweyo.

Dziwani kuti kulumikiza domain mu Ultimate Multisite sikokakamiza. Muli ndi mwayi wogwiritsa ntchito ntchito yakubadwa ya WordPress Multisite yolumikiza domain kapena njira ina iliyonse yolumikizira domain.

Ngati mungafunike kuzimitsa kulumikiza domain kwa Ultimate Multisite kuti mupatse mpata njira zina zolumikizira domain, mukhoza kuzimitsa mbali iyi pansi pa **Ultimate Multisite > Settings > Domain Mapping**.

![Tsamba la makonzedwe a Domain Mapping likuwonetsa admin redirect, uthenga wa mapping ndi zosankha za DNS](/img/config/domain-mapping-settings.png)

Pansi pomwe pa njira iyi, mukhozanso kuona njira ya **Force Admin Redirect**. Njira iyi imakulolani kuwongolera ngati makasitomala anu adzatha kulowa pa dashboard ya admin yawo pa domain yawo yapadera ndi subdomain, kapena pa imodzi yokha mwa izo.

Ngati musankha **Force redirect to mapped domain** , makasitomala anu adzatha kulowa pa dashboard ya admin yawo pa ma domain awo apadera okha.

Njira ya **Force redirect to** **network domain** idzachita zosiyana kwenikweni - makasitomala anu adzaloledwa kulowa pa ma dashboard awo pa subdomain yawo yokha, ngakhale akuyesera kulowa pa ma domain awo apadera.

Ndipo njira ya **Allow access to the admin by both mapped domain domain and network domain** imawalola kulowa pa ma dashboard awo a admin pa subdomain komanso pa domain yapadera.

![Dropdown ya Admin Redirect yotsegulidwa ikusonyeza zosankha zitatu za redirect](/img/config/domain-mapping-redirect-options.png)

Pali njira ziwiri zolumikizira domain yapadera. Yoyamba ndi kulumikiza dzina la domain kuchokera pa dashboard ya admin ya netiweki yanu monga super admin ndipo yachiwiri ndi kudzera pa dashboard ya admin ya subsite pansi pa tsamba la account.

Koma musanayambe kulumikiza domain yapadera ku imodzi mwa ma subsite mu netiweki yanu, muyenera kuonetsetsa kuti **makonzedwe a DNS** a dzina la domain akonzedwa moyenera.

###

### Kuonetsetsa kuti makonzedwe a DNS a domain akonzedwa moyenera {#making-sure-the-domain-dns-settings-are-properly-configured}

Kuti kulumikiza kugwire ntchito, muyenera kuonetsetsa kuti domain yomwe mukukonzekera kulumikiza ikuloza ku IP address ya Netiweki yanu. Dziwani kuti mukufunika IP address ya Netiweki - IP address ya domain komwe Ultimate Multisite yayikidwa - osati IP address ya domain yapadera yomwe mukufuna kulumikiza. Kuti mufufuze IP address ya domain inayake, tikupangira kupita ku [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), mwachitsanzo.

Kuti mulumikize domain moyenera, muyenera kuwonjezera **A RECORD** pa konfigureshoni yanu ya **DNS** yolunjika ku **IP address** imeneyo. Kuwongolera DNS kumasiyana kwambiri pakati pa olembetsa ma domain osiyanasiyana, koma pali maphunziro ambiri pa intaneti okhudza izi ngati mufufuza " _Creating A Record on XXXX_ " pomwe XXXX ndi wolembetsa domain wanu (mwachitsanzo: " _Creating A Record on_ _GoDaddy_ ").

Ngati mukupeza vuto kuti izi zigwire ntchito, **lumikizanani ndi chithandizo cha wolembetsa domain wanu** ndipo adzatha kukuthandizani ndi gawo ili.

Ngati mukukonzekera kulola makasitomala anu kulumikiza ma domain awo okha, adzayenera kuchita ntchito ya gawo ili okha. Awalozereni ku dongosolo la chithandizo la wolembetsa wawo ngati apeza kuti sangathe kupanga A Record.

### Kulumikiza dzina la domain yapadera monga Super Admin {#mapping-custom-domain-name-as-super-admin}

Mukalowa monga super admin pa netiweki yanu, mukhoza kuwonjezera ndi kuwongolera mosavuta mayina a ma domain apadera popita pansi pa **Ultimate Multisite > Domains**.

![Tsamba la mndandanda wa Domains mu Ultimate Multisite](/img/admin/domains-list.png)

Pansi pa tsamba ili, mukhoza kudina batani la **Add Domain** pamwamba ndipo izi zidzatsegula zenera la modal komwe mungakhazikitse ndi kudzaza **dzina la domain yapadera** , **subsite** yomwe mukufuna kuyigwiritsa ntchito ndi dzina la domain yapaderalo, ndi kusankha ngati mukufuna kuyikhazikitsa monga **dzina la domain yayikulu** kapena ayi (dziwani kuti mukhoza kulumikiza **mayina angapo a domain ku subsite imodzi**).

![Modal ya Add Domain yokhala ndi dzina la domain, chosankhira site ndi toggle ya primary domain](/img/admin/domain-add-modal.png)

Mukayika zambiri zonse, mukhoza kudina batani la **Add Existing Domain** pansi.

Izi ziyambitsa njira yotsimikizira ndi kutenga zambiri za DNS za domain yapadera. Mudzaonanso log pansi pa tsambalo kuti mutsatire njira yomwe ikudutsa. Njirayi ingatenge mphindi zochepa kuti imalizidwe.

Ultimate Multisite v2.13.0 imapanganso mbiri ya domain yamkati yokha pamene tsamba latsopano lapangidwa pa host yomwe iyenera kuonedwa ngati domain ya tsamba lililonse. Ngati host ndi domain yayikulu ya network, kapena imodzi mwa ma domain oyambira a checkout-form omwe amagawidwa omwe akhazikitsidwa pa field ya **Site URL**, mbiri ya domain yolumikizidwa yokha imadumphidwa kuti domain yoyambira yogawidwayo ikhalebe yopezeka kwa tsamba lililonse lomwe limayigwiritsa ntchito.

Pamene kasitomala alembetsa domain yatsopano kudzera mu Domain Seller v1.3.0 kapena yatsopano, Ultimate Multisite imalumikiza domain yolembetsedwayo ku tsamba la network la kasitomala mwachisawawa. Oyang'anira safunikiranso kuwonjezera mbiri ina ya domain yolumikizidwa pambuyo polembetsa bwino, pokhapokha ngati akufuna kusintha zosankha monga chizindikiro cha domain yayikulu, mkhalidwe woyatsidwa, kapena kasamalidwe ka SSL.

**Gawo** kapena status iyenera kusintha kuchoka pa **Kuyang'ana DNS** kupita pa **Yakonzeka** ngati zonse zakonzedwa bwino.

<!-- Chithunzi sichikupezeka: Mzere wa domain ukuwonetsa gawo la Kuyang'ana DNS mu mndandanda wa ma domain -->

<!-- Chithunzi sichikupezeka: Mzere wa domain ukuwonetsa gawo la Yakonzeka ndi chizindikiro chobiriwira cha status -->

Ngati mudina pa dzina la domain, mudzatha kuona zosankha zina mkati mwake. Tiyeni tiyang'ane mwachidule:

![Tsamba la zambiri za domain lokhala ndi gawo, tsamba, ma toggle a active, primary ndi SSL](/img/admin/domain-edit.png)

**Gawo:** Ili ndi gawo limene domain ili. Mukangowonjezera domain koyamba, mwina idzakhala pa gawo la **Kuyang'ana DNS**. Njirayi idzayang'ana zolemba za DNS ndikutsimikizira kuti ndi zolondola. Kenako, domain idzayikidwa pa gawo la **Kuyang'ana SSL**. Ultimate Multisite idzayang'ana ngati domain ili ndi SSL kapena ayi ndipo idzagawa domain yanu ngati **Yakonzeka** kapena **Yakonzeka (popanda SSL)**.

**Tsamba:** Subdomain yomwe yalumikizidwa ndi domain iyi. Domain yolumikizidwa idzawonetsa zomwe zili pa tsamba lenilenili.

**Yoyatsidwa:** Mutha kuyatsa kapena kuzimitsa chosankhachi kuti muyambitse kapena mulepheretse domain.

**Ndi Domain Yayikulu?:** Makasitomala anu angakhale ndi domain yoposa imodzi yolumikizidwa pa tsamba lililonse. Gwiritsani ntchito chosankhachi kusankha ngati iyi ndi domain yayikulu ya tsamba lenilenilo.

**Ndi Yotetezeka?:** Ngakhale Ultimate Multisite imayang'ana ngati domain ili ndi satifiketi ya SSL kapena ayi isanayiyambitse, mutha kusankha pamanja kuti mutsegule domain ndi kapena popanda satifiketi ya SSL. Dziwani kuti ngati website ilibe satifiketi ya SSL ndipo muyesa kuyikakamiza kutseguka ndi SSL, ingakupatseni zolakwika.

### Kulumikiza dzina la custom domain ngati wogwiritsa ntchito Subsite {#mapping-custom-domain-name-as-subsite-user}

Oyang'anira ma subsite angathenso kulumikiza mayina a custom domain kuchokera pa dashboard ya admin ya subsite yawo.

Choyamba, muyenera kuonetsetsa kuti mwayambitsa chosankhachi pansi pa zoikamo za **Kulumikiza domain**. Onani chithunzi pansipa.

<!-- Chithunzi sichikupezeka: Zoikamo za kulumikiza domain zomwe zimalola ogwiritsa ntchito subsite kulumikiza ma domain kudzera pa toggle ya Kasamalidwe ka DNS ka Kasitomala -->

Muthanso kukhazikitsa kapena kusintha chosankhachi pansi pa mulingo wa **Plan** kapena zosankha za product pa **Ultimate Multisite > Products**.

![Gawo la Custom Domains pa tsamba losintha product](/img/config/product-custom-domains.png)

Pamene chilichonse mwa zosankhazo chayatsidwa ndipo wogwiritsa ntchito subsite walolezedwa kulumikiza mayina a custom domain, wogwiritsa ntchito subsite ayenera kuona metabox pansi pa tsamba la **Account** lotchedwa **Ma Domain**.

<!-- Chithunzi sichikupezeka: Metabox ya Ma Domain pa tsamba la Account la subsite yokhala ndi batani la Onjezani Domain -->

Wogwiritsa ntchito akhoza kudina batani la **Onjezani Domain** ndipo lidzatsegula zenera la modal lokhala ndi malangizo ena.

<!-- Chithunzi sichikupezeka: Modal ya Onjezani Domain yosonyeza malangizo a DNS A-record kwa ogwiritsa ntchito subsite -->

Kenako wogwiritsa ntchito akhoza kudina **Gawo Lotsatira** ndikupitiriza kuwonjezera dzina la custom domain. Angasankhenso ngati iyi idzakhala domain yayikulu kapena ayi.

<!-- Chithunzi sichikupezeka: Fomu ya Onjezani Domain yokhala ndi field ya dzina la custom domain ndi toggle ya domain yayikulu -->

<!-- Chithunzi sichikupezeka: Gawo lotsimikizira la Onjezani Domain lomwe limayambitsa kutsimikizira DNS -->

Kudina **Onjezani Domain** kudzayambitsa njira yotsimikizira ndi kutenga zambiri za DNS za custom domain.

### Za Kulunzanitsa Domain {#about-domain-syncing}

Kulunzanitsa Domain ndi njira imene Ultimate Multisite imawonjezera dzina la custom domain ku account yanu ya hosting ngati domain yowonjezera **kuti kulumikiza domain kugwire ntchito**.

Kulunzanitsa domain kumachitika kokha ngati wopereka hosting wanu ali ndi integration ndi feature ya kulumikiza domain ya Ultimate Multisite. Pakadali pano, opereka hosting awa ndi _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ ndi _Cpanel._

Pamene integration ya wopereka host yayatsidwa, Ultimate Multisite ingathenso kuyika pa queue ntchito yopanga DNS kapena subdomain mbali ya wopereka kwa masamba atsopano opangidwa. Ngati palibe integration yomwe ikumvetsera ntchitoyo, background job imadumphidwa kuti ipewe zolemba za queue zosachita kanthu. Kuyangana kwa DNS ndi SSL kwa ma domain olumikizidwa kumapitiriza kuyenda kudzera mu njira yanthawi zonse ya gawo la domain.

Muyenera kuyambitsa integration iyi pa zoikamo za Ultimate Multisite pansi pa tabu ya **Integration**.

![Tabu ya Integrations mu zoikamo za Ultimate Multisite ikusonyeza opereka hosting](/img/config/integrations-tab.png)

<!-- Chithunzi sichikupezeka: Ma link a Configuration a wopereka hosting pa tabu ya zoikamo za Integrations -->

_Dziwani kuti ngati wopereka hosting wanu si mmodzi mwa opereka omwe atchulidwa pamwambapa,**muyenera kulunzanitsa pamanja kapena kuwonjezera dzina la domain** ku account yanu ya hosting._
