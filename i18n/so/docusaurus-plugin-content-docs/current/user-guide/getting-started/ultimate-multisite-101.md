---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101 {#ultimate-multisite-101}

Ultimate Multisite waa plugin-ka WordPress Multisite oo kuu oggolaanaya inaad u bixiso WaaS ama Websites as a Service macaamiishaada. Inta aanan dhex galin oo aan barato sida Ultimate Multisite ay ku caawin karto ganacsigaaga iyo macaamiishaada, waxaa jira aqoon aasaasi ah oo aan u baahanahay inaan helo.

## WordPress Multisite-ka {#the-wordpress-multisite}

Inta badan waxaan la yaqaan qaabka ugu caansan ee installation-ka WordPress. Waxaad ku samaysaa mid iyadoo la isticmaalayo control panel-ka bixiyaha hostinggaaga ama, kuwa badbaadinaya, waxaad samayn kartaa server iyo database cusub, aad ka soo dejisid faylasha muhiimka ah oo bilaaw inaad bilaawdo habka installation-ka.

Tani waxay u shaqaysaa miyaha WordPress ee caalamka oo dhan laayey, laakiin haddii aan aragti ka qaadno agaasimada ama bixiyaha hostingga, aan ka wada hadalno heerarka (volumes) muddo kooban.

In kasta oo ay tahay mid isku xiran in aad samayso hal WordPress site ama xilliga saddexdhoodan, waxay si degdeg ah u muuqda dhibaatooyin marka la gaaro maamulka sitaalladaas. Haddii aan la maamulin, waxaad noqon kartaa bartilaha malware-ka. Maamuliddu waxay ka mid tahay dadaal iyo kheyraad, inkasta oo ay jiraan qalab iyo plugins dibadda ah oo kaa caawin kara in la fududeeyo maamulka iyo maaraynta WordPress sites, dhabtaas macaamiishu siiya inay helaan fursad maamul (administrative access) waxay ka dhigaysaa in dadaalladan si fudud loo horumarin karo.

Inta badan, WordPress wuxuu bixiyaa mid lagu magacaabo 'Multisite' oo ay ku bilaabtay 2010 markii la soo saaray WordPress 3.0. Tan iyo markaas waxaa jira hagaajinro badan oo loogu talagalay in la soo bandhigo astaamo cusub iyo in la xoojiyo amniga.

Si kooban, WordPress multisite-ka waxa loo arki karaa sidan: Jaamacadda waxay ilaalinaysaa installation hal ah oo WordPress ah, laakiin kasta oo xafiis (faculty) ayaa ilaalinaya website-keeda WordPress gaarka ah.

Si aan u kala qaadno qoraalkan, aan eegno qaar ka mid ah erayada asaasiga ah ee jira, ma aha oo kaliya qoraalka Ultimate Multisite-ka laakiin sidoo kale bulshada WordPress-ka oo dhan.

### Shirkadda (The Network) {#the-network}

Waxaa loo tixraaca WordPress, shirkadda multisite waa meesha laga maamuli karo inta badan subsite-yo iyadoo la isticmaalayo dashboard hal ah. In kasta oo hababka sameynta shirkadda multisite ay kala duwan yihiin bixiyeya hosting-ka, natiijada ugu dambeysa waxay caadi ahaan tahay in la ku darno qaar ka mid ah tilmaamaha dheeraadka ah faylka wp-config.php si WordPress u ogaado inay shaqaynaysaa qaabkan gaarka ah.

Waxaa jira farqanno cad oo inta badan u kala duwan inta u dhaxaysa shirkadda multisite iyo warxad (installation) WordPress oo ku jirta hal meel, waxaan si kooban uga wada hadli doonaa.

#### Subdomain vs. Subdirectory {#subdomain-vs-subdirectory}

Mid ka mid ah go'aanka ugu degdega ah ee aad qaadi doontid waa in shirkadda multisite ay shaqaynayso _subdirectories_ (wadajirro yar oo ku jira) ama _subdomains_ (domain-yo yaryar). Ultimate Multisite si isku macquulsan u shaqeeyaa labada dooro, laakiin waxaa jira farqanno qaab-dhismeed ah oo u dhexeeya labada qaabkaas.

In qaabka _subdirectory_ ku jiro, shirkadaha shirkadda (network sites) waxay warxad ka warshaysan yihiin waddo (path) iyadoo la adeegsanayo magaca domain-ka koowaad. Tusaale ahaan, shirkad lagu magacaabo ‘site1’ waxay lahayd URL-keeda oo dhammaystiran ah https://domain.com/site1. Qaabka _subdomain_ ku jiro, shirkadda shirkaddu waxay lahayd _subdomain_ (wadajir yar) ay ka soo baxday magaca domain-ka koowaad. Sidaas darteed, shirkad lagu magacaabo ‘site1’ waxay lahayd URL-keeda oo dhammaystiran ah https://site1.domain.com/.

In kasta oo labada dooro ay yihiin xulasho si fiican u habboon, isticmaalka _subdomains_ wuxuu bixiyaa faa'iidooyin badan laakiin sidoo kale wuxuu u baahan yahay miisaan iyo qorshayn dheeraad ah oo qaab-dhismeedka.

قالباa arrimaha DNS-ka, isticmaalka _subdirectories_ waxay si fudud u aragtaa caqabado yar. Maaddaama goobaha shirkaddu (network sites) ay yihiin carruur oo ka soo jeedda habka hore (parent path), kaliya hal magaca domain ah ayaa loo baahan yahay inuu jiro bogga domain-ka ugu weyn. Inta badan _subdomains_ waxaa ka adag, waxayna u baahan tahay inaad hesho qoraal CNAME gaar ah oo loogu talagalay goob kasta oo shirkad ah ama isticmaalid wildcard (*) oo ku jirta diiwaanka DNS-ka.

Goob kale oo la tixgelinayo waa SSL iyo bixinta iyo isticmaalka shahaaynta SSL (SSL certificates). Marka aad dejisdo _subdirectory_, waxaad isticmaali kartaa shahaaynta domain-ka hal, sababtoo ah goobaha shirkaddu waxay si fudud yihiin waddooyinka bogga domain-ka ugu weyn. Sidaas darteed, shahaaynta domain.com ayaa si habboon u bixin doonta SSL-ka ee https://domain.com/site1, https://domain.com/site2 iyo kuwa kale.

Marka aad dejisdo _subdomain_, isticmaalka shahaaynta wildcard SSL waa mid ka mid ah qoraallada ugu caansan. Nooca shahaaynta SSL-ka ee noocdan ayaa siinaya codsi (encryption) domain-ka iyo _subdomains_-kiisa. Sidaas darteed, shahaaynta wildcard SSL waxay siin doontaa codsi HTTPS-ka ee https://site1.domain.com, https://site2.domain.com iyo isaga oo la xiriira domain.com-ga isha.

In kasta oo ay jiraan fursado kale, inta badan kuwaas waxaa lagaa koobid meel yar oo isticmaalka ah waxayna u baahan yihiin dejin dheeri ah iyo tixgelin ku saabsan in la hubiyo in ay si habboon ugu habboon yihiin.

#### Plugins and Themes {#plugins-and-themes}

Waxaa jira wax kale oo WordPress uu ka qaado, ugu yaraan isticmaalayaasha. Haddii maamulaha bogga (site administrator) uu ku rakibo plugin xun ama u fashilmo inuu si joogto ah ula habboon yahay, qofka kaliya ee laabta iyo dhibaatada ay ka soo horjeeddo yahay waa isaga. Si kastaba ha ahaatee, haddii maamulaha bogga uu ku rakibo plugin xun oo ku jira isticmaal multisite (multisite installation), wuxuu abuuraa qof laabta dhammaan goobaha lagu rakibo shirkadda.

Sababtan, marka WordPress Multisite sida loo dejiyo, waxay ka saaraa awoodda maamulayaasha meelaha (site administrators) inay ku soo installaan plugins iyo themes, halkii ay u wareejinayaan awooddaas doorkii maamulaha shirkadda (network administrator) ama 'super admin' cusub. Doorka aad u gaarka ah ee la siiyo wuxuu go'aaminayaa in la oggolaado maamulayaasha meelaha shirkadda inay arkaan ama helaan menu-ga plugins-kaas ee dashboard-kooda, haddii ay sidaas tahay, iyo haddii oggolaanshahaas uu ku dhammaanayo _install-ka_ ama _deactivate-ka_ plugins-ka.

Ilkaygaas, maamulaha shirkadda wuxuu mas'uul ka yahay in lagu installo plugins iyo themes meelaha shirkadda oo uu u siinayo oggolaanshaha loo isticmaalo plugins iyo themes-kaas ee meelaha shirkadda. Maamulayaasha meelaha (site administrators) ma heli karaan ama ku soo installaan plugins iyo themes aan la siinin meelaha ay ku jiraan.

#### Isticmaalayaasha iyo Maamulayaasha {#users-and-administrators}

WordPress Multisite-ka, dhammaan meelaha shirkadda waxay wadaagaa database-ka isku mid ah, sidaas darteed waxay wadaagaa isticmaalayaasha, doorka (roles) iyo awoodaha (capabilities). Habka ugu habboon ee aad u fikirayso waa in dhammaan isticmaalayaashu ay yihiin xubnaha shirkadda oo aan ahayn meel gaar ah.

Marka la tixgeliyo arrintan, waxaa laga yaabaa inaan uusan rabin in la abuuro isticmaalayaal, taasina waxay sababtay WordPress Multisite inay ka saarto awooddaas maamulayaasha meelaha (site administrators) waxayna wareejiso doorka maamulaha shirkadda. Markaas, maamulaha shirkaddu wuxuu u siin karaa xuquuqda loo baahan yahay maamulaha meelaha inuu abuuro xisaabada isticmaalayaasha (user accounts) ee meelkiisa.

<!-- Screenshot unavailable: WordPress Multisite network user management interface -->

Marka la soo celiyo qodobka kor ku xusan, inkasta oo xisaabta isticmaalayaasha ay u muuqdaan inay la xiriiraan meesha ay joogaan, waxay si dhab ah loo loogu talagalay yahay shirkadda (network) waxayna sidaas darteed waa inay isku mid yihiin dhammaan shirkadda. Waxaa jira fursado ay username-ka laga heli karo in lagu diiwaangeliyo sababtan.

In kasta ah, in kastoo ma aha fikrad aan la ogaansii ganacsiga, haddana xogta isticmaalayaasha iyo aqoonsiga (authentication) ee hal meel oo keliya ayaa inta badan adag in la fahmo dadka yaqaan WordPress-ka lagu dhisay si mid iska ah.

#### Media {#media}

Haddii hay'adaha shirkadda (network sites) ay wadaagaan database hal oo WordPress ku jirta, waxay ilaaliyaan goobyo kala duwan oo faylasha media ah (media files) ee fayl-qaabka (filesystem).

Goobta caadiga ah ee WordPress-ka (wp-content/uploads) weli waxay sii jirtaa; si kastaba, habka ay u socoto wuxuu la beddelayaa si uu u muujiyo ID gaarka ah ee hay'adda shirkadda. Natiijada ah, faylasha media ee hay'adda shirkadda ayaa si `wp-contents/uploads/site/[id]` loo arki doonaa.

#### Permalinks (Goobaha Link-ka) {#permalinks}

Waxaan hore u sheegnay in qaabka _subdomain_ uu ka faa'iido badan yahay qaabka _subdirectory_, halkan waa goobaha link-kaas.

Haddii aad isticmaalayso qaabka _subdirectory_, meesha ugu weyn (site-ka koowaad ee la abuuro marka hay'adda shirkadda la aasaaso) iyo hay'adaha yar yar ee shirkadda (network subsites) waa inay wadaagaan isku-dhafka link-ka ka bilaabmaya magaca domain-ka. Tani waxay keeni kartaa isku dhacmo badan oo dhibaato ah.

Haddii aad rabto in maqaallada (posts) ay leeyihiin goob gaar ah, waxaa lagu darayaa habka /blog/ ee qasab ah meesha ugu weyn si loo horjuuro isku dhaca hay'adaha shirkadda. Tani waxay ka dhigan tahay in link-yada permalink-ka quruxda badan sida ‘Magaca Maqaalka’ ay la soo bandhigi doonaan qaabkan: domain.name/blog/post-name/.

<!-- Screenshot unavailable: WordPress permalink settings showing /blog/ path in subdirectory configuration -->

Haddii aad isticmaalayso qaabka _subdomain_, ma loo baahnayn tallaabadaas sababtoo ah hay'adaha shirkadda kasta waxay ka faa'iideysanayaan kala go'aaminta domain-ka oo dhammaystiran, sidaasina uma baahnayn inay ku tiha hal goob link-ka. Halkii ay waxay ilaaliyaan goobyo kala duwan iyagoo ku salaysan _subdomain_-kooda.

<!-- Screenshot unavailable: WordPress permalink settings for subdomain configuration -->

#### Static Pages (Maqaallada Joogtada ah) {#static-pages}

Intaabka _subdirectory_ (sub-directory) oo la xiriira isbeddellada magacyada, sida bogga ugu muhiimsan iyo bogagga kale ee shirkadda (network sites), sababtoo ah labadaba waxay isticmaalaan isku-dhafka faylka.

Si aan tani u ka horjoogsado, WordPress wuxuu bixiyaa hab lagu xirmo magacyada bogagga qaarkood si aysan la isku dhicin magacyada bogga ugu horreeya. Caadi ahaan, maamulaha shirkadda (network administrator) ayaa ku qoraa goobta asalka ah (root paths) ee bogagga bogga muhiimka ah.

<!-- Screenshot unavailable: WordPress network settings showing banned site names to prevent conflicts -->

Inta badan _subdomain_ (sub-domain) oo la xiriira, suurtagalnimada isku dhac magacyada waxaa yareynaya _subdomain_-ka sababtoo ah wuxuu u gaar ah yahay bogga shirkadda (network site) mana la xiriirin waxba bogga muhiimka ah.

### Diyaarinta (Registration) {#registration}

Waxaa jira fursado cusub oo diiwaangelinta isticmaalayaal ah oo ku jira settings-ka network-ka WordPress Multisite, taasoo u oggolaanaysa isticmaalayaasha cusub iyo kuwa hore inay abuuraan bogag.

<!-- Screenshot unavailable: WordPress Multisite network settings showing registration options -->

In karkood la barbardhigo install-yada WordPress ee gaarka ah (stand-alone), bogagga shirkadda (network sites) ma ilaalin doonaan fursadaha caadiga ah ee u oggolaanaya diiwaangelinta isticmaalayaasha ama si loo qabto diiwaangelintaas doorooyin (roles).

<!-- Screenshot unavailable: WordPress standalone site user registration settings showing limited options -->

Marka la abuuro xisaabta isticmaalayaasha, xisaabtaas waxaa lagu sameeyaa heerka network-ka. Sidaas darteed, halkii ay ku timaadeen bog gaar ah, waxay u timaadaan inta badan network-ka. Tani waxay leedahay faa'iidooyin iyo dhibaatooyin gaar ah.

Inta, u sheegga in WordPress Multisite-kaaga aad u isticmaalayso. Tusaale, haddii WordPress Multisite-kaagu yahay ganacsiga wararka iyo macluumaadka, waxaad samayn lahayd multisite-kaas ka dib, ka samaysid network sites oo ku saabsan maaliyadda, tiknoolajiyadda, dabeecadda, iyo qaybo kale oo xiisaha ah inta badan adiga oo ilaalin awoodda guud ee plugins-ka iyo themes-ka. Qayb kasta oo network site ah waxay si ka weyn u lahayd xakamaynta muuqaalka iyo dareenka isticmaalayaasha network site-keeda, marka loo eego custom post types ama categories-ka post-ka caadiga ah.

Ilma inta badan markii isticmaaluhu galo, wuxuu ku galayaa network-ka oo ugalayaa dhammaan network sites-ka si uu si fudud u lahayd waayo-aragnimo aan la kala goyn. Haddii website-kaaga cusub uu yahay mid ciyaarsan qiimo (subscription based), tani waxay noqon lahayd xalka ugu habboon iyo natiijada ugu wanaagsan.

Haddii, si kastaba, dabeecadda iyo ujeeddada loogu talagalay multisite-ka ah ay tahay inuu bixiyo network sites kala duwan oo aan la xiriirin midba kale, inta badan waxaa loo baahan yahay plugins ama qaybo dheeri ah oo lagu maamulo doorashada isticmaalayaasha (user roles).

### Domain iyo SSL {#domain-and-ssl}

Aynu ka hadalno installation-ka WordPress Multisite ee dhinaca domain-ka iyo SSL-ka. Waxaan ka hadlaynaa Wordpress.com, taasoo si weyn u tusaale ah sida multisite-ka ugu ballaaran, waxayna muujineysaa awooddiisa weyn ee loo beddeli karo oo lagu fuliyo ujeedo gaar ah.

Maanta internetka casriga ah, isticmaalka SSL (Secure Sockets Layer) waa waxa la rabo inuu yahay mid waajib ah, waxayna maamulayaasha network-ka WordPress Multisite-ka ayaa si degdeg ah ula kulmayaan caqabadahan.

Haddii aad isticmaalayso qaabka _subdomain_, websites-ka waxaa lagu abuuraa iyadoo la adeegsanayo magaca domain-ka hoose (root domain name). Sidaas darteed, website loo magacaayo ‘site1’ wuxuu la samayn doonaa ‘site1.domain.com’. Adiga oo isticmaalaya SSL wildcard certificate ah, maamulaha network-ka ayaa si guuleystiran ula falgeli karaa caqabadan isagoo bixiya awoodda codsiga (SSL encryption) ee network-ka.

WordPress Multisite waxaa ku jira hab lagu xiriro domain-yada (domain mapping function) oo u oggolaanaya in hay'adaha shirkadda (network sites) la la xiriro magacyada domain-ka gaarka ah ama magacyada domain-ka ka duwan domain-ka asaasiga ee shirkadda.

Maamulayaasha shirkadda ayaa siisaa heer kale oo adag, iyadoo la tixgelinayo dejinta magacyada domain-ka iyo bixinta iyo ilaalinista SSL certificates-ka.

In la xiriirdoas, inkasta oo WordPress Multisite uu bixiyo hab lagu oggolaado in [www.anotherdomain.com](http://www.anotherdomain.com) la xiro 'site1', maamulaha shirkadda wuxuu weli la kulmaa caqabadka maamulka DNS-ka dibadda iyo fulinta SSL certificates-ka.

## Ultimate Multisite {#ultimate-multisite}

Marka la fahmay kala duwanaanshaha inta u dhaxaysa installation-ka WordPress ee ku socda (stand-alone) iyo installation-ka Multisite, aan eegno sida Ultimate Multisite uu yahay awoodda ugu weyn ee bixinta Websites as a Service.

### Hordhac {#introduction}

Ultimate Multisite waa qalabka aad u baahan tahay marka la timaado samaynta Website as a Service (WaaS). Ka fikir Wix.com, Squarespace, WordPress.com, ka dibna ka fikir in aad leedahay adeeggaaga gaarka ah.

Dhinaca gudaha (under the hood), Ultimate Multisite wuxuu isticmaalaa WordPress Multisite laakiin si habka uugu wanaagsan oo aan kaliya xalliyo caqabadaha badan ee maamulayaasha shirkadda la kulmaan installation-ka multisite, balse sidoo kale wuxuu xoojinaya awoodaha loo oggolaanayo in la taageero noocyo badan oo isticmaal ah.

Qaybaha soo socda waxaan eynaa qaar ka mid ah noocyada isticmaalka caadiga ah iyo tixgeliyada loo baahan yahay si loo taageero noocyadaas.

### Noocyada Isticmaalka (Use Cases) {#use-cases}

#### Tallaabada 1: Hay'ad (An Agency) {#case-1-an-agency}

Guud ahaan, xirfadaha asaasiga ee hay'adda waxay ku jiraan naqshadaynta websites iyadoo la raacayo qaybo sida hosting-ka ama suuqgeynta inay ahaadaan adeegyo dheeri ah.

Kuwaagoo agensiyadu, Ultimate Multisite waxay soo bandhigaysaa qiimo aad u weyn oo ku saabsan awooddiisa inuu host iyo maamulo website badan oo isku xiran platform hal ah. Waxayna si ka sii wanaagsan tahay agensiyadu kuwa dejinta qaabka (design) ay ku hagaajiyaan theme-yada gaarka ah sida GeneratePress, Astra, OceanWP ama kuwa kale, waxay isticmaali karaan awoodda Ultimate Multisite si ay si toos ah u fuliyaan theme-yadan cusub ee website kasta.

Sidoo kale, iyadoo la isku dayayo bixinta qiimo oo wanaagsan (deals) lagu heli karo plugins caawiya agensiyada, isticmaalka Ultimate Multisite wuxuu agensiyadu u oggolaanayaa inay ka faa'iideystaan maalgashiga hore iyagoo bixiyay platform wadajir ah oo plugins la soo galiyo, la ilaaliyo, iyo la isticmaalo.

Waxaa laga yaabaa in isticmaalka configuration (deeqsi ama hababka dejinta) loo baahan yahay, waana hubaal awoodda Ultimate Multisite waxay si fudud u fududaysaa isku xirnaanta domain-ka iyo SSL certificates-ka iyadoo la adeegsanayo isku-xirnaantiisa (integrations) ee barnaamijyada hosting caawiyaya badan sida Cloudflare iyo cPanel.

Sidaas darteed, adigoo isticmaalaya mid ka mid ah kuwaas ama adigoo Ultimate Multisite ku dhigaya Cloudflare, arrimaha maamulka domain-ka iyo SSL certificates-ka waxay noqdaan kuwo fudud.

Agensiyadu kuwa doorbida inay si xooggan u xakameeyaan habka ay website-yada abuuraan waxay qiimeynayaan sida ay si sahlan ugu abuuri karaan website-yo oo ay la xiriiraan macaamiisha iyo qorsheyaasha (plans) iyagoo isticmaalaya interface-ka fudud ee Ultimate Multisite.

![Ultimate Multisite site management interface](/img/admin/sites-list.png)

Xakamaynta xooggan ee plugins iyo themes waxaa la ilaaliyaa si gaar ah oo ku saabsan wax kasta oo lagu iibiyo (per-product basis) iyadoo la adeegsanayo interface-ka fudud ee Ultimate Multisite, kaas oo u oggolaanaya in plugins iyo themes la soo bandhigo ama la qarin karo xilli la abuuro website cusub.

![Product plugin limitations interface](/img/config/product-plugins.png)

Themes waxay bixiyaan habab la mid ah, oo u oggolaanaya in qoraallo gaar ah lagu soo galo ama lagu xirto website-ka marka la abuuro.

![Product theme limitations interface](/img/config/product-themes.png)

Agencies (hay'adaha) waxay heshiis wanaagsan ka helayaan Ultimate Multisite sababtoo ah waxay u oggolaanaysaa inay galaan waxa ay ugu fiican yihiin - in ay qaataan design-ka website-yada aan caawimaad lahayn.

#### Ardhka 2: Bixiyaha Gaarka Ah (Niche Provider) {#case-2-niche-provider}

Waxaa jiray hadal qadiim ah oo leh, "hal shay ka samee oo si fiican u samee". Inta badan khabiirrada, tani waxay micnaheedu tahay in ay abuuraan alaab ama adeeg ku salaysan fikrad hal ah.

Ma ihi aad tahay ciyaaryahan golf-ka ballaaran oo soo promoteey website-yada kooxaha, mise waxaad tahay ciyaaryahan esports-ka ballaaran oo bixiya website-yo clan-yada? Ma ihi mid ka soo promoteeya adeeg la socda (booking service) cuntada?

Waxaa jira sababo badan oo aad u rabto inaad bixiso adeegyo ku salaysan qaab iyo platform wadajir ah. Waxaa laga yaabaa in aad samaysay ama aad maalgashi ka qabtay plugins gaar ah si aad u bixisid habka loo baahan yahay, ama waxaa laga yaabaa in hababka ugu wanaagsan ee warshaduhu ku jira ay u baahan yihiin qaab la isku mid ah oo design-ka loogu talagalay.

Mid ka mid ah astaamaha cusub ee Ultimate Multisite waa isticmaalka template sites (website-yada qoraalka ah). Template site waa meel uu theme-ku lagu soo saaray oo lagu fuliyay, plugins-ka loo baahan iyo xirnaa lagu fuliyay, iyo in la abuuro maqaallo ama bogag tusaale. Marka macmiil cusub uu abuuro website cusub oo ku salaysan template-kaas, waxyaabaha iyo settings-ka template-ka waxaa la koobaya (copied) website-ka cusub ee la samaysay.

Haddii aad tahay bixiyaha niche sites iyo adeegyada gaarka ah, tani waxay si weyn u fududaysaa awoodda inaad isla markiiba abuurtid website oo diyaar u yahay iyadoo lagu darayo plugins iyo design-kaaga gaarka ah. Macmiilku wuxuu kaliya u baahan yahay inuu bixiyo wax ugu yar ee laga heli karo si loo dhammaystiro adeeggaas.

Marka ah oo ku xiran baahiyaha, labada qaab ee _subdirectory_ ama _subdomain_ waxay si wanaagsan u habboon yihiin, halkaasoo doorashada qaabka farsamada ay noqon doonto inta badan in la kala saaro shahaadada SSL-ka fudud ee _subdirectories_ ama shahaadada wildcard (wildcard) ee _subdomains_.

#### Sheekada 3: Adeegsiga Web Hosting-ga WordPress {#case-3-wordpress-web-hosting}

Waxaa jira qaabab badan oo aad ku samayn karto hosting-ka WordPress, laakiin si dhakhso ah ayuu u fudud yahay in lagu bixiyo meel web (web space) macmiilka oo leh nooc hore loo soo saaray WordPress. Tani waxay sababtahan muhiim ah ayaa ka dhasha in qaadashada go'aanno iyo tixgelinayaal badan ay isugu yimaadaan si loo bixiyo adeeg la qiimo leh.

Ultimate Multisite wuxuu kuugu guulaystay qaybtaas iyadoo bixiyay xalka oo dhammaystiran (turnkey solution) ee hosting-ka WordPress. Xalka waxaa ka mid ah hababka aasaasiga ah ee bixiya adeegyada subscription, ururinta lacagta, foomamka checkout-ka, voucher-yada ruxa (discount vouchers), iyo waraaqaha macaamiisha.

Inta badan shaqada muhiimka ah ee loo baahan yahay si sax ah loo install gareeyo, loo hagaajiyo (configure) oo la ilaaliyo WordPress Multisite waxaa fududeynaya Ultimate Multisite ilaa maamulayaasha shabakaddu ay u arkaan dhinacyada la xiriira adeegga ama gaarkaas ee ay leeyihiin sida heerarka badeecadaha (product tiers), qiimaha, iyo bixinnada adeegyada.

Waxaa sidoo kale, developer-ka ah kuwa raba inay la shaqeeyaan Ultimate Multisite, xalka ayaa si dhammaystiran u bixiya RESTful API iyo Webhooks oo lagu ogeysiiyo dhacdooyinka (event notification).

Iyadoo aan ku tiirsan plugin-yada iyo lisansiyadaha dibadda badan, Ultimate Multisite wuxuu bixiyaa xalka leh astaamo badan oo la barbardhiga sida Wix, Squarespace, WordPress.com iyo kuwa kale.

### Tixgelinta Qaabka Farsamada (Architecture Considerations) {#architecture-considerations}

In kasta oo aan ahayn hagitaan dhammaystiran, qodobadan hoose waa inay noqdaan hageysid si loo doorto tignoolojiyadda saxda ah ee taageeraysa install-ka Ultimate Multisite.

#### Hosting Waa La Mid Nahay (Shared vs. Dedicated Hosting) {#shared-vs-dedicated-hosting}

بالأسف ليس كل مزودي الاستضافة متساوين، وبعضهم يمارسون كثافة خوادم عالية جداً. عادةً ما يحقق المزودون ذوو التكلفة المنخفضة إيراداتهم عن طريق زيادة كثافة الخادم قدر الإمكان. ولهذا السبب قد يكون تثبيت Ultimate Multisite الخاص بك مجرد واحد من مئات المواقع على نفس الخادم.

بدون إجراءات حماية مناسبة من جانب المزود، تعاني المواقع الموجودة على خادم مشترك من مشكلة "الجيران الصاخبين". وهذا يعني أن موقعاً واحداً على نفس الخادم يستهلك الكثير من الموارد لدرجة أن المواقع الأخرى تضطر للتنافس على الموارد المتبقية. وغالباً ما يظهر هذا الأمر في شكل مواقع بطيئة أو لا تستجيب في الوقت المناسب.

بصفتك مزود استضافة ويب، فإن التأثير سيكون أن عملائك سيختبرون سرعات ضعيفة، وتصنيف صفحات منخفض، ومعدلات ارتداد عالية، مما يؤدي غالباً إلى فقدان العملاء بحثاً عن خدمات أخرى. باختصار، الرخيص لا يعني الجيد.

يُعرف Ultimate Multisite بأنه يعمل مع عدد من مزودي الاستضافة الجيدين ويتكامل بشكل جيد مع بيئتهم لتوفير وظائف مثل تعيين النطاقات (domain mapping) وتأمين SSL تلقائياً. يقدر هؤلاء المزودون الأداء ويقدمون خدمة ذات جودة أعلى من الاستضافة المشتركة.

للحصول على قائمة بالمزودين المتوافقين وتعليمات الإعداد الكامل لكل منهم، يرجى مراجعة وثائق "Compatible Providers" (المزودون المتوافقون).

#### اعتبارات الأداء {#performance-considerations}

Ultimate Multisite ليس تطبيقاً بطيئاً، بل هو سريع بشكل ملحوظ. ومع ذلك، فإنه يعمل فقط بقدر جودة التطبيق والبنية التحتية الأساسية ويمكنه الاستفادة فقط مما لديه وصول إليه.

فكر في هذا: أنت مسؤول الشبكة لتثبيت Ultimate Multisite يحتوي على 100 موقع. بعض تلك المواقع تسير بشكل جيد وتجذب عدداً من زوار الويب كل يوم.

Tani xaaladdu wuxuu ahaan laa dhashin yahay haddii ay yihiin meel yar oo sida hal ilaa shan website ah, laakiin ka hor inta aan la arki dhibaatooyinka weyn ee heerka weyn.

Haddii aan la ilaalin, website-ka Ultimate Multisite ee hal waa inuu mas'uul yahay inuu qabto codsiyada dhammaan booqdayda website-yadaas. Codsiyadan waxay noqon karaan bogag PHP oo isbeddelaya ama waxyaabo aan isbeddelaya sida stylesheets, javascript ama faylasha media ah. Ma haddii ay hal website yahay mise saddex boob, hawlahaasi waxay noqdaan kuwo soo noqnoqsan, mid la mid ah, iyo kuwa ka lumin. Ma tahay baahi in la isticmaalo awoodda CPU iyo xusuusta (memory) si loo maareeyo fayl PHP haddii natiijadu ay tahay macluumaad isku mid ah oo lagu soo celinayo codsiyada kasta.

Sidaas darteed, hal codsi oo bog PHP ama HTML ah wuxuu abuuraa codsiyo badan oo soo socda oo ku saabsan scripts-ka, stylesheets-ka iyo faylasha sawirrada. Codsiyadan waxaa si toos ah loo bartilmaaliyaa server-ka Ultimate Multisite ee aad leedahay.

Waxaa si fudud la xallin karaa dhibaatadaas iyadoo la cusboonaysiiyo server-ka, laakiin ma hagaajinayo dhibaato labaad oo ah inuu ay tahay horumarka gobollada (geographic latencies). Waxaan u baahanahay server badan oo ku yaalla meelaha kala duwan si loo xalliyo si sax ah arrintan.

Waxa ka dambaysa sababtan, inta badan maamulayaasha shabakaddu waxay isticmaalaan xalalka caching-ga hore (front-end caching solutions) iyo shabakadaha qaybta macluumaadka (CDN) si ay qabtaan codsiyada bogagga aan isbeddelaya. In la qabto codsiyadan oo lagu soo saaro waxyaabaha ka hor inta codsiga u gaaro server-ka waxay badbaadisaa kheyraadka maareynta, waxay yareysaa darrada, waxayna ka fogaataa cusboonaysiiyada aan loo baahnayn, waxayna u xoojisaa maalgashiga tiknoolajiyadda.

Ultimate Multisite wuxuu raacayaa add-on (add-on) qurux badan oo Cloudflare ah kaas oo u oggolaanaya maamulayaasha shabakaddu inay ku dhistaan install-koodihii ay Cloudflare ka hor taagan yihiin, iyagoo isticmaalaya awoodaha caching-ga iyo sidoo kale hosting-ka DNS, SSL certificates (sertifikadu), iyo hababka amniga.

#### Backups (Waxyaabaha la ilaaliyo) {#backups}

Waxaad u weydiin kartaa dadka 50 oo talo ku saabsan backups ah waxaadna heli doontaa ra'ayino kala duwan oo ku saabsan istiraatiijiyadda backup-ka. Jawabdu waa, waxay ku xiran tahay.

Waxa aan ku ogol yahay in la iska ilaaliyo in la muranayo in baahna hagaajinta faylasha (backups) iyo in aysan ahayn wax caadi ah in bixiye si xogta loo maareeyo, gaar ahaan haddii aad isticmaalayso adeeg la maareeyay (managed service). Sidaas darteed macaamiishu waxay u eegi doonaan maamulaha shabakadda (network administrator) si uu bixiyo oo uu maareeyo adeeggan. Qofka la isku eego maamulaha shabakadda waa arrin aad u kala duwan.

Ujeeddooyinka qaybtaani, aan heshiiyo in hagaajinta faylasha (backup) ay tahay nuqshado hal mar oo ka qaata xaaladda nidaamka markii la bilaabay hagaajinta. Si fudud loo sheego, waxa hadda jirta nidaamka markii la samaynayo backup-ka ayaa la qaatay oo lagu kaydiyay backup-kaas.

Marka aan heshiiyay arrintan, sida loo gaaro hagaajinta faylasha iyo waxa ugu fiican deegaankaaga waxay si weyn ku xiran doonto baahiyahaaga iyo awoodda bixiyaha hosting ee ah inuu buuxiyo baahiyahaas. Si kastaba ha ahaatee, iyadoo la eegayo kuwa ugu dareenka badan ee fikradaha ilaa kuwa ugu yar, doorbada hoose waa inay si weyn u hagtaa.

#### Snapshots (Nuqshado hal mar ah) {#snapshots}

Snapshots-ku waa waxa ugu fiican hagaajinta faylasha sababtoo ah waxay fududahay, ma aha mid adag (ilama aad rabto inaad soo celiso), waxayna si toos ah u shaqeeyaan. Si kastaba ha ahaatee, waxay u baahan tahay caawimaad ka helidda bixiyahaaga, waxaana inta badan waxay kuugu habboon tahay haddii aad leedahay VPS (Virtual Private Server) ama mid la mid ah. Bixiye badan oo lagu soo bandhigay dukumentigaaga 'Compatible Providers' waxay bixiyaan hagaajinta faylasha iyadoo aan loo baahnayn wax dheeri ah oo maamulaha shabakadda ka qabto ama ka tago.

Backup-yada caabka dhaqanka waxay diiradda saartaa faylasha iyo database-yada, halka snapshot-ku uu diiradda saaro disk-ga oo dhan. Tani macnaheedu waa in macluumaadka website-ka la qabto snapshot-ka kaliya ma aha balse nidaamka hawlgalka (operating system) iyo qaab-dhismeedkaas sidoo kale. Kuwa badan waxay arkaan tan ku ah faa'iido gaar ah sababtoo ah nidaam cusub ayaa si degdeg ah loogu soo saari kara snapshot-ka oo la soo gelin kara hawlgalka si loo beddelo mid dhibaato leh. Sidoo kale, habka soo celinta faylasha ee lagu soo celiyo wuxuu u baahan yahay in la dhejiyo sawirka snapshot-ka sidii disk ku jira nidaam jira si faylasha loogu heli karo oo la koobayn karo.

Snapshot-yada waxay keeni karaan kharash dheeri ah iyadoo la wareegayo bixiyaha hosting-ka, laakiin waa siyaasadda lagu ilaaliyo dhibaatooyinka.

#### External Scripts (Scripts Dibadda) {#external-scripts}

Waxaa u muuqda in aysan jirin wax badan oo scripts iyo xalabaad dibadda ah oo lagu backup-gareeyo agabka WordPress iyo MySQL, kuwaasuna si fiican ay u shaqayn lahaayeen Ultimate Multisite sababtoo ah waa plugin WordPress oo isticmaala faylasha iyo database-ka WordPress. Sidaa darteed xalka ee hagaajinaya (backup) website-yada WordPress wuxuu si wanaagsan ugu qaban doonaa baahiyaha Ultimate Multisite.

Ma awoodno inaan mid ka soo qaadano mid kale laakiin talada guud waa inaad samayso weerarro badan oo hagaajin iyo soo celin si aad u hubiso in natiijooyinka ay ku habboon yihiin, sidoo kale si aad "hubiso hubka" adiga oo si joogto ah uga qiimeynaya script-ka iyo shaqadiisa gaar ahaan halka lagu salaynayo qaab-dhismeed hagaajin kala duwan (differential backup strategy).

Waa in la xusuusto in scripts-kan, inta ay socdaan, ay kordhiyaan cabbirka nidaamka (system load) taasina waa inaad ka tixgelisaa.

#### Plugins (Plugins) {#plugins}

Waxaa dhac weyn oo aan la heli karin WordPress oo lagu xalliyo plugin, haddii ma ahayn qof ku takhasusay maaraynta scripts-ka dibadda ah, waxaa laga yaabaa in plugin uu yahay doorashada ugu wanaagsan.

Plugins-yadaa waxay leeyihiin dooro iyo astaamo kala duwan, laakiin inta badan waxay sameeyaan waxa si la mid ah: inay nuqul ka qaadaan faylasha WordPress iyo xogta database-ka. Ka dibna shaqooyinka ayaa kala duwan, sababtoo ah qaar ka mid ah plugins-yada waxay u dirayaan backup-yada adeegsiga dibadda sida Google Drive ama Dropbox ama adeegga kaydinta shayba la isku dhafan sida S3, Wasabi ama kuwa kale. Plugins-ka aad si faahfaahsan u samaysato waxay bixiyaan differential backups ama qorshe mid ah oo lagu backup-gareeyo xogta beddelaysay si loo badbaado kharashka kaydinta dibadda.

Marka aad dooranayso plugin-kaaga, hubi inuu awoodu yahay multisite (macaamiil badan). Sababtoo ah habka uu u shaqeeyo inta lagu jiro socodka backup-ka, waxaad filan kartaa in server-ka uu si kooban u xirmo ilaa la dhammeeyo habkaas.

#### Domain iyo SSL {#domain-and-ssl-1}

Wax badan ayaa hore loo ka hadlayay magacyada domain-ka marka la isticmaalayo mode-ka _subdomain_ ee multisite. Xalka ugu caansan ee maamulayaal shirkadaha waa in la isticmaalo DNS wildcard entries (qoraallo kala duwan oo DNS ah).

![Wildcard DNS entry configuration example](/img/config/settings-domain-mapping.png)

Noockan DNS wuxuu si guuleystiran u xallinayaa _subdomains_ sida ‘site1.domain.com’ iyo ‘site2.domain.com’ oo uu u soo celinayo IP address 1.2.3.4, taasoo taageeraysa Ultimate Multisite iyo WordPress Multisite ee ballaaran marka la isticmaalayo mode-ka _subdomain_.

Tani waxay si fiican u shaqayn kartaa HTTP sababtoo ah host-ka la rabaa waxaa lagu qaada header-ka HTTP, laakiin ma aha sida web-ka hadda oo fudud oo ay lacagta ammaan ah (HTTPS) u noqoto wax waajib ah.

Khammaarta, waxaa jira dooro fudud oo ku saabsan SSL certificates-ka. Mode-ka _subdirectory_ (subdirectory) ah, waxaad isticmaali kartaa certificate caadi ah oo domain-ka lahayd. Kuwaas ayaa si sahlan oo bilaash ah loogu heli karaa bixiyeyaasha hosting-ka ee laga yaabo inay isticmaalaan adeegga bilaashka LetsEncrypt ama ilo kale. Haddii aysan, waxay ku heli karaan iyagoo lahayd suurtagalnimada ay samayn karaan request-ka saxiixista certificate-ka (certificate signing request).

Mode-ka _subdomain_ ah, isticmaalka wildcard SSL certificate wuxuu si habboon ugu lahaa domain-ka wildcard ah isagoo u oggolaanaya in certificate-ku uu yahay mid awood badan oo ku saabsan domain-ka muhiimka ah iyo dhammaan _subdomains_ iyada oo aan loo baahnayn hagaajin dheeri ah.

Si kastaba ha ahaatee, waa in la xuso in wildcard SSL certificates-ku laga yaabo inay ka shaqeeyaan adeegyada sida Cloudflare haddii aadan ku jirin qorshe ganacsi (enterprise plan) ama aad dejiso habka gelitaanka oo kaliya DNS ah, taasoo siiyay dhammaan cache-ka iyo hagaajinta.

Ultimate Multisite ee bilaashka ayaa bixiya xalka arrintan isagoo muujinaya waaxdii badan ee aan lahayn oo ku saabsan baahiyaha WordPress multisites. Furitaanka add-on (add-on) fudud ee kan wuxuu ka dhigayaa Ultimate Multisite inuu isticmaalo macluumaadka Cloudflare ee aad leedahay si uu si toos ah u daro DNS entries-ka network sites-ka Cloudflare oo uu dejiyo mode-ka inay tahay ‘proxied’. Sidaas, subsite kasta oo network ah marka la abuuro, wuxuu heli doonaa difaacda iyo faa'iidada buuxda ee Cloudflare oo ay ku jirto SSL.

Waxaa laga yaaba in baahna ay macluuma badan iyo ujeeddada installation-ka Ultimate Multisite aad u kala duwan yihiin inay macaamiishu isticmaalaan domain-kooda. Markaas, maamulaha network (network administrator) wuxuu lahaa mas'uuliyadda xallinta laba arrimood. Halabuurka, waa hosting-ka magaca domain-ka iyo labaad, SSL certificates-ka domain-ka.

Badanaa, isticmaalka Cloudflare waa doorooyin fudud oo dad badan lahayn. Macaamiishu waxay kaliya u baahan yihiin inay domain-kooda ku dhigaan Cloudflare, CNAME u dirayaan root domain-ka Ultimate Multisite, isla markaana ay ka xiriiraan (map) domain-kooda Ultimate Multisite si ay bilaabaan u faa'iideyn magaca domain-kaas gaarka ah.

Waxaa dibaddaas, waa in la raadiyo xalalka kale oo loo isticmaali karo taasina macnaheedu yahay in Ultimate Multisite uu soo jeediyo liis ka mid ah Bixiyeya La Midloobay (Compatible Providers). Tani waa sababta ah sababta habka aasaasidda DNS iyo SSL-ka noqon karo mid aan fududayn. Si kastaba ha ahaatee, isdhexgalka Ultimate Multisite la bixiyeya bixiyeyaasi waxay yareysaa adiga oo ka saaraysa dhibaatada, waxaana habkaas si toos ah u samaynaya (automated).

#### Plugins {#plugins-1}

Waa laga yaabaa inaad u baahan tahay plugins kale oo aad ku siiso shaqo dadkaaga ama meelaha shirkadda. Ma dhammaan plugins-ku shaqeeyaan WordPress Multisite iyo Ultimate Multisite? Waa ku xiran.

In kasta oo inta badan plugins-ka lagu soo gali karo WordPress Multisite, habaynta (activation) iyo hantida (licensing) waxay ka duwan yihiin qoraaga plugin-ka.

Dhibaatadu waxay ku jirtaa sida loo adeegsado hantida (licensing) marka qaar ka mid ah plugins-ka u baahan inay hantidooda la isticmaalo iyadoo lagu salaynayo domain kasta. Tani waxay ka dhigan tahay in qaar ka mid ah plugins-ka maamulaha shirkadda uu si gacanta ugu samaynayo inuu si gacanta ugu samaynayo (manually activate) hantida plugin-kasta oo ku saabsan website cusub.

Sidaas darteed, waxaa laga yaabaa in ay tahay mid wanaagsan inaad la tashato qoraaga plugin-ka sida uu u shaqeeyo WordPress Multisite iyo waxyaabaha gaarka ah ee loo baahan yahay ama hababka loo isticmaalo si loo hantido (license) plugin-kaas.
