---
title: Sida loo dejiyo isbeddelka magaca domainka
sidebar_position: 6
_i18n_hash: 53ce91dcbf4f1046b0f74271decfcb77
---
# Sida Loo Qorista Domain Mapping-ka (v2)

_**Fadlan ogaansho MUHIIM: Maqaalkan wuxuu la xiriira Ultimate Multisite nooc 2.x.**_

Mid ka mid ah astaamaha ugu xooggan ee shirkad kor u qaadaysa waa awoodda inaad siinno macmiilayaashaada fursad ay ku qabsadaan domain sare (top-level domain) oo ay ku xirayaan goobta ay leeyihiin. Marka ayay ka muuqato mid ka horumaray: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) mise [_**joesbikeshop.com**_](http://joesbikeshop.com)? Waa sababta Ultimate Multisite wuxuu si dabiici ah u bixiya astaamahan, iyada oo aan loo baahnayn in la isticmaalo plugins kale oo saddexaad ah.

## Maxay tahay domain mapping?

Sida magaca uu muujinayo, domain mapping-ku waa awoodda ay Ultimate Multisite siinayo inay qaadato codsi domain gaar ah (custom domain) waxayna ku xirtaa goobta la midka ah ee shirkadda (network) iyadoo la qabtay domaingaas gaarka ah.

### Sida loo qaabeeyo isbeddelka domain-ka (domain mapping) ee shabakadtaada Ultimate Multisite

In si ay u shaqeeyaan, waxaad u baahan tahay inaad qabato qaar ka mid ah dejinta. Laakiin walaal, Ultimate Multisite wuxuu kuu fududeeyaa shaqada adag si aad si sahlan u buuxiso shuruudaha.

Inta lagu gasho Ultimate Multisite-ka, wizard-ku (halkaas oo ay ku jirto) si toos ah ayaa loogu koobayaa oo loogu soo saaraa **sunrise.php** folder-ka loo qorsheeyay. Wizard-ku ma kuu oggolaan doono inaad sii socoto intaadan kan la dhammeeyin.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Tani waxay ka dhigan tahay in marka wizard-ka Ultimate Multisite uu dhammaystiray dejinta shabakadtaada, waxaad si degdeg ah u bilaabi kartaa isbeddelka domain-ka gaarka ah (custom domain mapping).

Xusuusnow, in Ultimate Multisite-ka, isbeddelka magaca domen (domain mapping) ma aha mid la ah qasidda. Waxaad leedahay fursad aad ku isticmaali karto habka asalka ah ee WordPress Multisite ama nidaam kale oo beddelka magaca domen ah.

Haddii aad u baahan tahay inaad ka hor istaagto (disable) domain mapping-ga Ultimate Multisite si aad u oggolaato dadka kale inay isticmaalaan fariimaha beddelka magaca domen, waxaad tani samayn kartaa iyadoo la raadinayo **Ultimate Multisite > Settings > Domain Mapping**.

![Domain Mapping settings page showing admin redirect, mapping message and DNS options](/img/config/domain-mapping-settings.png)

Hoos ka dambeeya fursadan, waxaad sidoo si fudud arki kartaa fursadda **Force Admin Redirect** (Cilbi beddelka maamulka). Fursadani waxay kuu oggolaanaysaa inaad xakameyso haddii macaamiisha ay heli karaan dashboard-kooda maamulidda (admin dashboard) iyadoo isticmaalayaan magaca domen-tii gaarka ah ama subdomain, mise kaliya mid ka mid ah labadaas.

Haddii aad doorato **Force redirect to mapped domain**, macaamiishaadu waxay kaliya awood u lahayd inay helaan dashboard-ka admin-koodka ah ee doorkooda gaarka ah (custom domains).

Doorabka **Force redirect to** **network domain** wuxuu samaynayaa wax ka dhigaya ka hor imaanaya - macaamiishaadu waxay kaliya u oggolaanayaan inay helaan dashboard-kooda oo ku jira subdomain-kiisa, xitaa haddii ay isku dayayaan inay galayaan (sign in) doorkooda gaarka ah.

Waxaa sidoo kale doorabka **Allow access to the admin by both mapped domain domain and network domain** u oggolaanaya inay helaan dashboard-kooda oo ku jira labada meel: subdomain-ka iyo doorka gaarka ah (custom domain).

![Admin Redirect dropdown expanded showing the three redirect options](/img/config/domain-mapping-redirect-options.png)

Waxaa jira laba hab oo aad ku samayn karto in aad u qorsheysid (map) domain gaar ah. Habka koowaad waa inaad magaca domain-ka ka qorto dashboard-ka maamulaha shirkaddaada (network admin dashboard) adiga oo noqonaya super admin, iyo habka labaadna waa in la samaynayo iyadoo la isticmaalayo dashboard-ka maamulaha subsite-yada (subsite admin dashboard) ee ku jira bogga account.

Laakiin ka hor intaadan bilaabin qorshaynta domain-ka gaarka ah oo aad u qorto mid ka mid ah subsites-ka shirkaddaada, waxaad u baahan tahay inaad hubiso in **DNS settings** (sareerka DNS) ee magaca domain-ka si sax ah loo dejiyay.

### Hubinta in DNS-ka domain-ka si sax ah loo dejiyay

Si in la shaqeeyo mapping-ga (isbeddelka), waa inaad hubisaa in domain-ka aad doonayso inaad isbeddeldo uu si sax ah u bartilmaalin yahay IP address-ka Network-kaaga. Xusuusnow, waxaad u baahan tahay IP address-ka Network-ka - IP address-ka domain-ka halkaas oo Ultimate Multisite ku saabsan yahay - ma aha IP address-ka domain-ka gaarka ah ee aad doonayso inaad isbeddeldo. Si aad u raadsato IP address-ka domain gaar ah, waxaanada ku talinaynaa inaad tagto [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), tusaale ahaan.

Si aad si sax ah u qorsheyn (map) domain-kaaga, waxaad u baahan tahay inaad ku dari **A RECORD** oo ku taal isbeddelkaaga **DNS** oo tilmaamaya **IP address**-kaas. Maareynta DNS waxay si weyn u kala duwan tahay dukumeentiyada (registrars) domain-kaaga, laakiin waxaa jira casharro badan oo online ah oo ka hadlaya arrintan haddii aad raadinayso " _Creating A Record on XXXX_ " halkaas oo XXXX uu yahay dukumeentigaaga domain-kaaga (tusaale: " _Creating A Record on_ _GoDaddy_ ").

Haddii aad isku aragto dhibaato inaad taas u fuliso, **la xiriir taageerada dukumeentigaaga** waxayna ku caawin doonaan qaybtaas.

Haddii aad qorshaynay in macaamiishaadu inay isbeddelaan domain-kaalkooda (map) oo ay sameeyaan shaqada, waxay nafta ayay u samaynayaan qaybtaas. U tilmaanti waxay ku siin kartaa nidaamka taageerada dukumeentiga laga helo haddii aysan awoodin inay abuuraan A Record-ka.

### Qorsheynta magaca domain-ka gaarka ah (custom domain name) oo Super Admin ah

Marka aad ku gasho sidii super admin oo ku jirtay shabakadahaaga, si fudud waxaad u dari kartaa oo maamuli kartaa magacyada domain-ka gaarka ah iyadoo aadan u baahnayn inaad si adag u qorsheysid. Waxaad taas samaynaysaa adigoo tagaya **Ultimate Multisite > Domains**.

![Domains list page in Ultimate Multisite](/img/admin/domains-list.png)

Boggaas, waxaad ku riix kartaa badhanka **Add Domain** ee sare, kaas oo soo saari doona daaqad (modal window) oo aad ku samayn karto inaad qeexdo oo ka buuxiso **magaca domain-ka gaarka ah** (*custom domain name*), **subsite**-ka aad u rabo inuu magaca domain-ka gaarka ah la siiyo, iyo go'aanka haddii aad rabto inaad u samayso **domain-ka ugu muhiimsan** (*primary domain*) mise aadan. (Xusuusnow in aad **magacyo domain-ka badan oo kala duwan subsite hal** ku qori karto).

![Add Domain modal with domain name, site picker and primary domain toggle](/img/admin/domain-add-modal.png)

Marka aad dhammaan macluumaadka ku qorto, waxaad ka dhici kartaa in aad riixdo badhanka **Add Existing Domain** ee hoose.

Tani waxay bilaabi doontaa habka xaqiijinta iyo soo qaadista macluumaadka DNS-ka domain-ka gaarka ah (custom domain). Waxaad sidoo kale arki doontaa log (diyaari) oo hoos ka socda bogga si aad u raacdo habka uu ku marayo. Habkan wuxuu qaadan karaa dhowr daqiiqo inuu dhammaado.

Ultimate Multisite v2.13.0 sidoo kale wuxuu si toos ah u abuuraa diiwaanka domain-ka gudaha (internal domain record) marka website cusub la abuuro host-ka oo loo arko sidii domain gaar ah oo ku saabsan barnaamijka (per-site domain). Haddii host-ku yahay domain-ka ugu muhiimsan ee shabakadda, ama mid ka mid ah domain-yada asaasiga ee qaabka foomka checkout-ka la dejiyay qaybta **Site URL**, diiwaanka domain-ka la xiriiray si toos ah (automatic mapped-domain record) ayaa laga kala saari doonaa si domain-ka asaasiga oo la wadaag ah uu weli awood u leeyahay dhammaan websites-ka isticmaala.

**Stage** ama xaaladdu waa inay ka beddesho **Checking DNS** (Waxay raadinaysaa DNS-ka) oo u noqoto **Ready** (Diyaar) hadda ay si sax ah loo habeeyay.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

Haddii aad ku riixdo magaca domain-ka, waxaad arki doontaa qaar ka mid ah doorbado gudahaas. Aan si degdeg ah u eegno:

![Domain detail page with stage, site, active, primary and SSL toggles](/img/admin/domain-edit.png)

**Stage (Tallaabada):** Tani waa heerka uu domain-ku ku jiro. Marka aad markii ugu horreysay ku darto domain-ka, wuxuu inta badan ku noqon doonaa heerka **Checking DNS**. Habka ayaa hubinaya qoraallada DNS (DNS entries) waxayna xaqiijinaysaa inay sax yihiin. Ka dib, domain-ku waxaa la dhigi doonaa heerka **Checking SSL**. Ultimate Multisite wuxuu hubinayaa in domain-ku uu leeyahay SSL mise ma'aayo, wuxuuna siinayaa domain-ka heer ay tahay **Ready** ama **Ready (without SSL)**.

**Site (Goobta):** Waa subdomain-ka la xiriira domain-kan. Domain-ka la isku xiray (mapped domain) wuxuu muujin doonaa waxyaabaha ku jira goobtan gaarka ah ee site-kaas.

**Active (Wax Badan):** Waxaad dib u samayn kartaa fursaddaasi si aad u furto ama u xirto domain-ka.

**Is Primary Domain? (Ma Waa Domain-ka Muhiimka Ah?):** Macaamiishaadu waxay noqon karaan domain badan oo la isku xiray (mapped domain) oo ku jira goobta kasta. Isticmaal fursaddaasi si aad u doorato haddii tani ay tahay domain-ka muhiimka ah ee site-kaas gaarka ah.

**Ma is Midow?** Ultimate Multisite waxay hubisaa in domain-ka uu lahayd SSL certificate ama aan lahayn marka ay u furayaan, laakiin waxaad si gacanta u dooran kartaa inaad domain-ka la soo dhigto oo leh ama aan lahayn SSL certificate. Xusuusnow in haddii website-ka aysan lahayn SSL certificate oo aad isku daydo inaad si xoog leh ugu soo dhigto SSL, waxaa laga yaabaa inuu kuu soo saaro qalad (errors).

### In la sameeyo magaca domain-ka gaarka ah sida Subsite user

Maamulayaasha subsite-yada waxay sidoo kale ka samayn karaan magacyada domain-ka gaarka ah iyagoo isticmaalaya dashboard-ka maamulka subsite-yada.

Marka hore, waa inaad hubisaa in aad furto doorashadan hoos ku jira settings-ka **Domain mapping**. Waxaad arki kartaa sawirka hoose.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

Waxaad sidoo kale ku qeexi kartaa ama aad dejin kartaa fursaddaas oo hoos ka dhigta heerka **Plan** ama doorashada alaabta ee **Ultimate Multisite > Products**.

![Qaybta Custom Domains ee bogga wax-soo-saarka edit ah](/img/config/product-custom-domains.png)

Marka mid ka mid ah fursadahaas la furayo oo isticdellaya subsite-ka loo oggolaado inuu isku xiro magacyada domain-ka gaarka ah (custom domain names), isticdellaya subsite-ka ayaa arki doona qayb yar oo lagu daray bogga **Account** oo la yiraahdo **Domains**.

<!-- Screenshot unavailable: Qaybta Domains metabox ee bogga Account ee subsite-ka iyo badhanka Add Domain -->

Isticdellayaa wuxuu ku riixayaa badhanka **Add Domain** (Ku dar domain), waxaana soo bandhigaya doona hal furan (modal window) oo leh tilmaamo qoraal ah.

<!-- Screenshot unavailable: Modalka Add Domain ee muujinaya tilmaamaha DNS A-record ee isticdellaya subsite-ka -->

Waxaad ka dib waxay ku riixaysaa **Next Step** oo ay sii socoto inaad ku darto magaca domain-ka gaarka ah. Waxay sidoo kale dooran karaan haddii tani tahay domain-ka ugu muhiimsan (primary) mise ma aha.

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

Riixidda **Add Domain** waxay bilaabi doontaa habka lagu xaqiijinayo macluumaadka DNS-ka domain-ka gaarka ah ee aad dooratay.

### Ku saabsan Syncing-ga Domain-ka (Domain Syncing)

Domain Syncing waa hab uu Ultimate Multisite ku darto magaca domain-ka gaarka ah ee aad doonayso xisaabta hosting-kaaga sidii domain oo la soo daray **si loo shaqeeyo isku-xirnaanta domain-ka (domain mapping)**.

Isdiiwinta domain-ka si toos ah ayaa si toos ah dhaca haddii bixiyaha hosting-kaaga lahayd isku-xirnaansho (integration) oo la xiriira astaanta Ultimate Multisite ee loo maro domain mapping. Hadda, bixiyaya hosting-kaas waxaa ka mid ah _Runcloud_, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ iyo _Cpanel._

Marka isku-xirnaanshaha (integration) qabow yahay, Ultimate Multisite sidoo kale wuxuu ku dari karaa hawsha samaynta DNS ama subdomain-ka bixiyaha marka la abuuro warqad cusub. Haddii aanu wax dhiirigelin ah (listening) u aragayo hawshan, shaqada goobta dambe (background job) waxaa laga kala saari doonaa si aan looga fogaado inaad ku soo daro qoraallo aan waxba ka qabanayn. Baaritaannada DNS iyo SSL-ka ee domain-yada la xiriira waxay sii socda inay fuliyaan habka caadiga ah ee marxaladda domain-ka.

Waxaad u baahan doontaa inaad furto isku-xirnaanshaha (integration) kan Ultimate Multisite settings-ka ku jira labada tabta **Integration**.

![Tabka Isdhexgalka ee dejinta Ultimate Multisite oo muujinaysa bixiyeya hosting-ka](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Xiriirka Dejinta Bixiyeya Hosting-ka ee tabka Isdhexgalka -->

_Fadlan ogow in haddii bixiyaha hosting-kaaga aan ahayn kuwa kor ku xusan, **waxaad u baahan doontaa inaad si gacanta u samayso isku xirna ama aad ku darto magaca domain-ka** (domain name) dukumeentiga hosting-kaaga._
