---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101

Ultimate Multisite ndi plugin la WordPress lomwe limapangitsa kuti muli ndi ulemu wopereka WaaS kapena Websites as a Service kwa anthu. Mmodzi pano tikakhudza ndipo tikufunsa kuti Ultimate Multisite kuliwonse kutanthauza bwanji kwa bizinesi yanu ndi anthuwo. Koma pamene tikapambana ndi kupeza kuti Ultimate Multisite kuliwonse kutanthauza bwanji kwa bizinesi yanu ndi anthuwo, pali zinthu zofondera zomwe tikufunika kuyamba.

## WordPress Multisite

Potsimikizirani ndipo mukuwoneka ndi WordPress lomwe limapangidwa m'stock (mmodzi woperekedwa), muli ndi ulemu wopereka m'control panel ya hosting yanu kapena, kwa ena omwe ali ndi chiyembekezo, muli ndi server ndi database yanu yanu, mukuwoneka m'kuyesa files zomwe zikuyenera ndipo mukuwoneka m'kuyamba kupeza.

Izi zimapangidwa kwa anthu zingapo pa WordPress m'dziko lonse koma, monga m'moyo wopereka services kapena hosting yanu, tiliwonse tikufunika kuyankha za zinthu zomwe zikuyenera kutanthauza.

Koma pamene muli ndi ulemu woperekedwa kuti mupereke WordPress site imodzi kapena nthawi imodzi ya sitiri, ndipo mukuwoneka m'moyo woperekedwa kwa sitiri zimene zikuyenera kutanthauza. Koma monga muli ndi ulemu wosangalatsa (unmanaged), muli ndi chidziwitso lalikulu la malware. Kutanthauza ndi kuyesa nkhawa ndi zinthu zina, koma pamene anthu ali ndi ulemu woperekedwa kuti mupereke sitiri, zimene zikuyenera kutanthauza ndipo zomwe mungayeseni kukhala ndi zinthu zina, zimene zikuyenera kuyesa.

M'moyo woperekedwa (core) wa WordPress, pali chinthu lomwe limakuthandiza lomwe limakhala ndi dzina "Multisite" komwe limapangidwa m'2010 pamene WordPress 3.0 lipambana. Since then, limapereka zowonjezera kwa zinthu zina ndipo limapangitsa kuti kukhala ndi chidziwitso lalikulu.

Mmodzi pano, WordPress multisite imakutanthauza monga izi: Njamba imodzi imapereka installation ya WordPress koma m'moyo woperekedwa wina umene imapereka sitiri lina la WordPress.

Kuti monga kuti tusonyei maulendo omwe muli nawo, osati m'moyo wopangidwa ndi Ultimate Multisite komanso m'moyo wopangidwa pa WordPress.

### The Network (M'moyo Wopangidwa)

M'WordPress, multisite network ndi malo omwe m'moyo wosiyanasiyana womwe mungupereke kuti mumangeka m'dashboard yakali. Ngakhale kupanga multisite network kumakhudza kwambiri m'hosting providers, kukhala kulibe kuchokera kwa zinthu zingapo m'wp-config.php file kuti WordPress imveze kuti ikulimbikizidwa m'mode imeneyi.

Kuli ndi kusiyanasiyana kwambiri pakati pa multisite network ndi installation ya WordPress yomwe imapangidwa pansi, komwe tidzindikire kwa inu m'maka.

#### Subdomain vs. Subdirectory (Subdomain vs. Subdirectory)

Modzi m'zinthu zomwe mukupeza kukhala ndi chifukwa cha m'maka kwambiri ndipo mukupeza kuti multisite installation idzakhala ndi _subdirectories_ kapena _subdomains_. Ultimate Multisite imapangidwa bwino ndi ziwili, koma kumakhale ndi kusiyanasiyana kuchokera kwa zinthu zomwe zikuyenera kudzipereka m'maka.

M'configuration ya _subdirectory_, sites za network zimapereka pathi (path) lomwe limapereka m'dzina la domain lalikulu. Mwachitsanzo, site yomwe imapangidwa kuti ‘site1’ idzakuti URL yake yomwe yomwe yomwe ndi https://domain.com/site1. M'configuration ya _subdomain_, site ya network idzakuti idzakhala ndi _subdomain_ yake lomwe limapereka m'dzina la domain lalikulu. Choncho, site yomwe imapangidwa kuti ‘site1’ idzakuti URL yake yomwe yomwe yomwe ndi https://site1.domain.com/.

Koma ziwili zimene zikuyenera kukhala m'maka, kulimbikitsa ya _subdomains_ imapereka mafunso ambiri koma kumakhudza kuti muli ndi chondeledwe ndi kupanga m'maka m'architecture yake.

M'moyo m'moyo pa DNS, kukhala kuti mutendeka kuita _subdirectories_ ndi chitsanzo chofupi. Kuti sites za mtundu wosiyenera (network sites) zikukhala ndi poyamba kwa path ya mama, mukuchepa chifukwa kuti muli ndi entry imodzi pa dzina la domain lomwe lili lalikulu. Kwa _subdomains_, chitsanzo chimene chofunika kuli kofunika kupeza CNAME entry lina lina kwa site lolimba lomwe lili m'moyo wosiyenera, kapena wildcard (*) entry m'DNS records.

Kukonzekera kofunika lingine ndi SSL ndikupatsa ndi kulimbikitsa SSL certificates. M'koleksyon ya _subdirectory_, certificate imodzi yomwe imakhala ndi domain yomwe imakwaniridwa kuti sites zikukhala poyamba kwa paths za domain lomwe lili lalikulu. Choncho, certificate yomwe imakhala ndi domain.com imakwaniridwa kukhala SSL kwa https://domain.com/site1, https://domain.com/site2 ndipo pano.

M'koleksyon ya _subdomain_, kulimbikitsa wildcard SSL certificate ndi monga momwe zimakhala zofunika kwambiri. Certificate yomwe imakhala ndi wildcard imapereka encryption kwa domain lanayo ndi _subdomains_ yake. Choncho, wildcard SSL certificate imapereka encryption kwa https://site1.domain.com, https://site2.domain.com ndipo kuma domain.com lisonse.

Koma pali zinthu zina zomwe zimakhala, koma zimene zikuchepa m'moyo ndi kukhala kwambiri m'kufunika ndi kulimbikitsa kuti muli woyenera.

#### Plugins ndi Themes

M'moyo wosiyenera (WordPress) imapereka nkhawa zomwe zimakhala, monga momwe muli woyenera. Kuti muli woyenera wosiyenera (site administrator) yomwe imalimbikitsa plugin yosiyenera kapena kulimbikitsa kuti muli ndi installation yanu yomwe imapereka, m'moyo wosiyenera lomwe lili woyenera ndi chifukwa cha iwo ndi iwo. Komabe, muli woyenera wosiyenera womwe imalimbikitsa plugin yosiyenera pa installation ya multisite imapereka woyenera kwa site lonse lomwe limapereka m'moyo wosiyenera.

Moyo welo, monga mwayi muli ndiwo woperekera.

Monga momwe muli ndiwo woperekera, pamene muliyeza kuti WordPress Multisite imapereka ulemu (capability) kwa site administrators kuti mupereke plugins ndi themes, imapereka ulemuulolo lili ku network administrator kapena 'super admin' wosiyanasiwa. Ulemu woperekera umene mumveledwe ndiyenera kuyesa kuti muliyeza kukhulupirira site administrators awo sites kuti mupereke plugins ndi themes m'dashboard yanu, ndipo ngati iyenera, kungakhale imene zimene zikufotokozedwa (activating) kapena kuchepa (deactivating) plugins.

Monga momwe muliyeza, network administrator ali ndi luso la kupereka plugins ndi themes m'network ndikupeza ulemu kuti mupereke mwayiwo m'network sites. Site administrators siwanji mupereke plugins kapena themes zomwe siyezi ku site yanu.

#### Users and Administrators (Mwayiwo ndi Administrators)

M'WordPress Multisite, onse mwayiwo wosiyanasiwa (network sites) imapereka database yomweyi yomweyo ndipo chifukwa cha iwo, imapereka users, roles, ndi capabilities zosiyanasiwa. Mwayi woperekera kuti mwayiwo onse ndi wone m'network komweye site yomweye.

Monga momwe muliyeza, zimene kukhala kwa users kuwoneka kwambiri si yomwe yomweyo ndi site yanu. Chifukwa cha izi, WordPress Multisite imapereka ulemu lili kuwoleka (capability) kwa site administrators kuti muperekere kuwoleka lili ku network administrator. M'network administrator ali ndi ulemu woperekera wosiyanasiwa kuti amupereke ulemu woperekera zomwe zifunikira kuti mupereke user accounts kwa site yanu.

<!-- Screenshot unavailable: WordPress Multisite network user management interface -->

Monga momwe muliyeza, ngakhale user accounts zimene zikuyenera kuwoleka ndi site yanu, zimene zikugwiritsidwa ku network ndipo chifukwa cha izi, zimene zikuyenera kukhala zosiyanasiwa m'network. Kuli kutali kukhala kwa usernames kuti zikugwiritsidwe monga iwo chifukwa cha izi.

Koma ndi chonde, pamene si chinthu chosavuta m'moyo kwa mfundo ya enterprise systems, kukhala chotsatira kuti anthu omwe ali ndi WordPress wosavuta kwambiri kuona. Koma, poyenera kusankha nkhani yomwe imaperekera m'njira yakatsopano (single source) yoperekera ndikukonza anthu, zimene zikuphatikizidwa kwambiri kwa anthu omwe ali ndi WordPress wosavuta kukhala ndi ulamuliro.

#### Media

Pamene sites zomwe zikugwiritsa ntchito database imodzi m'WordPress Multisite, zimapereka mitengo ya m'moyo (paths) osiyanasiyana pa filesystem kuti zikuperekere media files.

M'lokaleri la WordPress lomaliza (wp-content/uploads) limakhalira; koma, nkhani yake imalimbikizidwa kuti ikumakumbutse ID yomwe ndi site ya network. Mwachidule, media files za site ya network zimapereka m'lokaleri la wp-contents/uploads/site/[id].

#### Permalinks

Tsimeneze kuti pali mafunso omwe a woperekera _subdomain_ ndi yomwe a _subdirectory_ kukhala osavuta, ndipo pano ndi zimene: paths.

M'khalidwe la _subdirectory_, site yomwe yomwe yomwe (site imodzi yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe

M'moyo m'moyo mu _subdirectory_ configuration, kukhala kukhala kuti zikukumbutsa mavuto pa zolemba zomwe muli ndi main site ndi sites za mtundu wosiyanasiyana (network sites) komwezi kumayamba.

Kuti zimene zidzakhale, WordPress imapereka njira yomwe mungupereke kuti muzilondoleza malo omwe ali ndi zolemba zomwe sikuyenera kukumbutsa kuti zikukumbutsa mavuto ndi zolemba la chake. Koma monga momwe zimene, administrator wa network imapereka mapulogolo a main site pa malo omwe ali ndi zolemba.

<!-- Screenshot is not available: WordPress network settings showing banned site names to prevent conflicts -->

M'moyo mu _subdomain_ configuration, kukhala kukhala kuti mavuto pa zolemba kumayamba akupitilira monga _subdomain_, chifukwa ndiwo ndi wosiyanasiyana kwa site la network ndipo siyo ndi kuyenera ndi main site.

### Registration

M'moyo mu settings za network ya WordPress Multisite, kuli ndi mapulogolo atsopano a registration wa users omwe kumapereka kuti users atsopano ndi aliyense akugwiritse sites.

<!-- Screenshot is not available: WordPress Multisite network settings showing registration options -->

Monga momwe ndi WordPress installations zomwe zikuyenera, sites za network siyo zimenezi mapulogolo omwe kumapereka kuti users amagwiritse m'moyo wosiyanasiyana kapena kuwathandiza.

<!-- Screenshot is not available: WordPress standalone site user registration settings showing limited options -->

Pamene accounts za users zimaperekedwa, zikugwiritsidwa pa level ya network. Choncho monga momwe siyo kukhala kwa site lolimba lolimba, kuti zikuyenera kuwathandiza m'moyo wosiyanasiyana kapena kuwathandiza m'moyo wosiyanasiyana. Kuti izi ndi zinthu zomwezi zili ndi mavuto ndi zokhudza.

Mwachidwe, mupereka wanu wa WordPress Multisite ulienda m'ndau wa kukhala news ndi mavuto. Muthaula multisite uliyoona ndipo muliye kupeza sites zosiyanasiyana zomwe zikuyenera kwa finance, technology, entertainment ndi malo ena omwe aliyenera kulimbikira. Kodi muliye kumakhala ndi ulemu wosonyeza (control) wa plugins ndi themes. Kukhala m'malo omwe muliye kupeza kukhala ndi ulemu wosonyeza wambiri pa mpaka pa custom post types kapena regular post categories.

M'malo omwe muliye kumakhala ndi ulemu wosonyeza (control) wa plugins ndi themes, pamene munthu amapereka (logs in), amapereka kuenda m'network ndipo muliye amapereka kuenda m'site lonse m'malo omwe muliye kumakhala kuti mupereke ulemu wosonyeza wosavuta. Ngati site yanu lili ndi subscription, izi ndi njira yomwe yomwe yomwe yomwe imakwaniritsa.

Komabe, ngati ntchito ndi chifukwa cha multisite ndi kukhala ndi sites osiyanasiyana zomwe siyo m'malo omwe ali ndi ulendo, muliye mukuwoneka kuti muliye mukuwoneka kuti mupereke ulemu wosonyeza (user roles) m'njira yomwe imapereka plugins ena kapena zinthu zina.

### Domain ndi SSL

Tiyenera kudziwa za WordPress Multisite lomwe limakwaniritsa kutoperekera kwake - Wordpress.com. Iyi ndi mfundo yomwe yomwe yomwe yomwe imapereka m'malo omwe ali ndi multisite ndipo imapereka ulemu wosonyeza (customization) wambiri kuti mupereke ntchito yake.

M'malo omwe muliye kupeza m'internet lero, ulendo wa SSL ndi woperekera ndi woperekera ndi chidziwitso ndi zinthu zina ndi kukhala ndi ulemu wosonyeza (challenges).

M'configuration ya _subdomain_, sites zimaperekedwa pa domain yomwe yomwe yomwe. Mwachitsanzo, site yomwe imapereka 'site1' imaperekedwa monga 'site1.domain.com'. Mwachidziwitsa SSL wosonyeza wambiri (wildcard SSL certificate), muliye mukuwoneka kuti mupereke ntchito ya SSL encryption kwa network yanu.

WordPress Multisite imana funksheni ya kupanga domain (domain mapping) iliyopo m'mwebuse wa WordPress Multisite, inayowezesha sites za mtandao (network sites) kuunganishwa na majina ya domain maalum au majina ya domain tofauti na domain kuu la mtandao.

Kwa admin wote wa mtandao, hii inawapa kiwango cha ugumu kingine katika kupanga majina ya domain pamoja na kutoa na kudumisha vyeti vya SSL (SSL certificates).

Hata hivyo, ingawa WordPress Multisite inatoa njia ya kuruhusu [www.anotherdomain.com](http://www.anotherdomain.com) kuunganishwa na 'site1', admin wa mtandao anabaki na changamoto ya kusimamia DNS entries nje na kutekeleza vyeti vya SSL.

## Ultimate Multisite

Kwa kuelewa tofauti kati ya usakinishaji wa WordPress unaokaa peke yako (stand-alone) na usakinishaji wa Multisite, hebu tuangalie jinsi Ultimate Multisite inavyokuwa silaha bora kwa kutoa Websites as a Service (WaaS).

### Utangulizi

Ultimate Multisite ni kama chiseti cha Swiss Army yako wakati wa kuunda Website as a Service (WaaS). Fikiria Wix.com, Squarespace, WordPress.com na kisha fikiria kuwa una mwenyewe huduma yako.

Chini ya eneo la ndani (under the hood), Ultimate Multisite inatumia WordPress Multisite lakini inafanya hivyo kwa njia ambayo haijatatua changamoto nyingi ambazo admin wote wa mtandao wanazokutana nazo na usakinishaji wa multisite, bali inajenga uwezo unaoruhusu matumizi mengi tofauti kutumika.

Katika sehemu zinazofuata tutachunguza mifano ya matumizi (use cases) na mambo muhimu yanayohitajika kusaidia mifano hiyo.

### Mifano ya Matumizi (Use Cases)

#### Kesi 1: Kampuni ya Huduma (An Agency)

Kwa kawaida, ujuzi wa msingi wa kampuni ya huduma unajikita katika kubuni tovuti na vipengele kama vile hosting au masoko kuwekwa kama huduma za ziada.

Kwa makampuni (agencies), Ultimate Multisite inatoa thamani kubwa sana kwa uwezo wake wa kuweka na kusimamia tovuti nyingi kwenye jukwaa moja. Hii ni muhimu zaidi kwa makampuni yanayofanya muundo wao kuwa sawa kwa kutumia themes fulani kama GeneratePress, Astra, OceanWP au zingine wanaweza kutumia uwezo wa Ultimate Multisite kuwasha (activate) themes hizo kiotomatiki kwa kila tovuti mpya.

Sivyo vile na kupatikana kwa mikataba mingi ya bei za plugins maarufu kwa makampuni, matumizi ya Ultimate Multisite kunawapa makampuni uwezo wa kutumia vitu vilivyopo kwa kutoa jukwaa moja ambapo plugins zinaweza kuwekwa, kusimamiwa na kutumiwa.

Ni maana nyingi hutaka kutumia configuration (muundo wa mipangilio), na kwa bahati, Ultimate Multisite inafanya iwe rahisi sana kufanya domain mapping na SSL certificates kupitia integrations zake na mtoa huduma wengi maarufu kama Cloudflare na cPanel.

Kwa hivyo, kwa kutumia mojawapo ya vyanzo hivi au kuweka Ultimate Multisite nyuma ya Cloudflare, vipengele kama usimamizi wa domains na SSL certificates vinakuwa rahisi sana.

Makampuni yanayopendelea kudumisha udhibiti mkali juu ya uundaji wa tovuti watapenda urahisi unaowapa ili kuunda tovuti na kuunganisha tovuti na wateja pamoja na mipango kupitia interface iliyorahisishwa ya Ultimate Multisite.

![Ultimate Multisite site management interface](/img/admin/sites-list.png)

Udhibiti mkali juu ya plugins na themes unadumishwi kwa msingi wa bidhaa (per-product basis) kupitia interfaces rahisi za Ultimate Multisite zinazowapa uwezo wa kufanya plugins na themes ziweze kuonekana au kuzificha pamoja na hali yao ya kuwasha wakati zinapokuwa zimeundwa kwa tovuti mpya.

![Product plugin limitations interface](/img/config/product-plugins.png)

Themes zikomo zilipeza zilipeza, zikufuna kuti themes zina zikugoneka kapena zikuyevwe pa upatendere wa upatendere wosayera.

![Product theme limitations interface](/img/config/product-themes.png)

Agencies zikupatira kulumbulika ndi Ultimate Multisite komwe zimupatira kuti makhale ali ndi chiyembekezo chawo - kukhala ndi upatendere wosayera wogwiritsa ntchito kwa mpaka kupanga upatendere wa wamweru.

#### Case 2: Mphamvu ya Chinthu Chimodzi (Niche Provider)

Kuli kulemba lero lomwe limakuti, “phuna chinthu chimodzi ndi yenera ndi kuyendetsa bwino.” Kwa anthu ambiri omwe ali ndi chitsanzo cha mtima, izi zimeneza kupanga wopangidwa kapena mfundo ya ntchito m'malo.

Mungowoneka ndi munthu woyamba wogwiritsa ntchito upatendere wa kukhala m'malo kwa clubs kapena woyamba wogwiritsa ntchito upatendere wa esports kupanga websites kwa clans? Kapena munthu woyamba wopangidwa kwa khalidwe lalikulu la kupeza malo?

Kwa zambiri za chifukwa, mukufuna kupereka zolinga zomwe zimapereka m'malo ya mfundo yomwe ndi yenera. Kuti muli ndi plugins zosayera zomwe zimapereka zinthu zomwe zimayenera kapena kuti kukhale ndi njira yomwe yenera yopangidwa kwa mpaka kupanga upatendere wosayera.

Chimenezo cha Ultimate Multisite ndi chinthu chomwe chimapereka ndi kugwiritsa ntchulo m'malo ndi template sites. Template site ndi malo omwe theme imaperekedwa ndipo imaperekedwa, plugins zomwe zikufunika zimaperekedwa ndipo zimaperekedwa, ndipo zotsatira kapena pages zosoncho zimaperekedwa. Pamene mwana wosayera amapanga site lili lili ndi template, malo ndi zinthu za template zimaperekedwa ku mpaka pa site yomwe imapangidwa kwa nthawi yomwe.

Poyamba wopereka niche sites ndi zolinga, izi zimapereka chifukwa cha mtima kwambiri m'malo wa kupanga site lili likuperekedwa m'malo ndi plugins ndi upatendere. Mwana wosayera ali ndi kuyenera kupereka chinthu chimodzi chomwe chimakhale kukhala kofunika kuti amakomera ntchito.

Kupambana ndi zolemba zomwe muli nawo, kukhala kuti _subdirectory_ kapena _subdomain_ zikukwanira, ndipo m'malo omwe muli nawo ndi kuchokera kwa sertifika ya SSL yomwe imapereka _subdirectories_ kapena sertifika ya wildcard yomwe imapereka _subdomains_.

#### Kazi 3: WordPress Web Hosting

Kukonza (host) WordPress sites kuli ndi njira zambiri, koma kimakku sikuti zimene zikukhala zimeneli kuti mupereke malo omwezi kwa munthu ndi WordPress yomwe imapereka m'malo. Izi ndikuphatikizidwa chifukwa kuti kuli ndi zinthu zingapo zomwe muli nawo kuti mupereke khalidwe yofunika.

Ultimate Multisite imakukwanira kwambiri m'malo omwezi koma imapereka njira yomwe imapereka chinthu chomwe chimene (turnkey solution) kwa kukonza WordPress sites. Zomwe zimaphatikizidwa m'malo ndi zinthu zomwe zimapereka mfundo za kupereka khalidwe ya subscription, kuchita mapulogalamu a kukhazikitsa (payment collection), forms za checkout, vouchers za discount, ndipo kuti munthu wamene amakuthandizira.

Kukonza zinthu zomwe zimene zofunika kuti mupereke ndi kukonza ndi kuteteza WordPress Multisite yomwe imapereka chithandizo cha Ultimate Multisite, kukhala m'malo omwe administrators wa network amakufunsa kuti muli nawo zinthu zomwe zimenezo ndi zina monga product tiers, kuphatika (pricing) ndipo mapulogalamu a khalidwe.

Pamene developers amakufuna kupereka ndi Ultimate Multisite, njira iyi imapereka RESTful API yomwe imapereka Webhooks kuti mupereke chidziwitso cha zinthu.

Pofunsa kuti muli nawo plugins ndi licenses zingapo zosiyanasiyana, Ultimate Multisite imapereka njira yomwe imapereka chithandizo chomwe chimene chokhudza Wix, Squarespace, WordPress.com ndi zina.

### Zolemba za Mwayi (Architecture Considerations)

Koma osati ndi mwayi wosonyeza, zinthu zomwe zimenezo zikuyenera kukhala mwayi kuti mupereke chithandizo cha teknolojia chomwe chimene chokhudza kukonza Ultimate Multisite.

#### Hosting Yosonyeza (Shared vs. Dedicated Hosting)

Kutete kuti muli ndi wopereka hosting, ndipo kwa inu zambiri si zolembedwa. Kuchokera kwa inu zosangalatsa kukhala ndi server zambiri kwambiri. Kwa inu zomwe zimakhala zosangalatsa kutenga ndalama, zimakhala kuti Ultimate Multisite yanu imatha kukhala monga moyo wosangalatsa wa sita kapena zambiri pa server imodzi.

Osati muli ndi maprotezu omwe provider imene, inu zomwe zikuyenera kupeza zolembedwa, sita lomwe lili pa server yoshanana limakukumbutsa ndalama kwa zosangalatsa kwambiri. Izi zimatha kukhala monga sita lomwe likunena kuti sita lina limene limene lili ndi zinthu zingapo zomwe linayamba kuteteza.

Monga wopereka hosting, mwayi wosangalatsa uliwonse mudzindikire kuti makatundu anu kukhala ndi kasi lomwe lili lothandiza sita lina liyenera kupeza zowonjezera, monga kuyendetsa domain mapping ndi SSL yomwe yomwe. Inezi inu zosangalatsa kuti zimene zolembedwa kwambiri ndipo zimene zikupereka khalidwe lomwe lili kupambana ndi hosting woshanana.

Kuti muli ndi listi ya providers omwe amakubwera ndi maithawi omwe muli ndi mapulogolero omwe muli ndi sita lomwe liyenera, muli ndi chondeza kuona documentation ya Compatible Providers.

#### Zinthu Zomwe Zikuyenera Kukhala Zolembedwa (Performance Considerations)

Ultimate Multisite si application yosoweka, koma imene yosoweka kwambiri. Komabe, imene yosoweka monga momwe application ndi infrastructure yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe y

Mwayi woyopezo ndi momwe kuli m'moyo wosangalala kwa site imodzi, monga sita mpaka m'mili, koma monga nthawi yomwe zimakhala zikulu, mwayi mwamulitsa.

Ndikuti sita imodzi lina ntchito ya kuyesa zolemba zonse zomwe anthu aliyenera kupeza pa sita. Zolemba hizo mung zingakhale PHP pages zomwe zimayenera kuchitidwa m'moyo, kapena zinthu zomwe si mwamulitsa monga stylesheets, javascript kapena media files. Kuti mpaka sita imodzi kapena sita m'mili, ntchitoziizo hizo zimakhala zikati, zikati, ndipo zimapangitira. Siyenera kuyesa CPU power ndi memory kuti mwayi PHP file pamene mtundu wosoncho ndi wosoncho kwa mpalingaliro zonse.

Monga momwe, mopalingaliro wosoncho wopangidwa m'PHP kapena HTML page mumtima, mumapangitsa kuwera mpalingaliro olingana kwa scripts, stylesheets ndipo media files. Mpalingaliro awa amapangidwa m'moyo wa Ultimate Multisite wanu.

Mwayi mwamulitsa momwe mungupereke ntchito yomwe ndi kuyesa sita imodzi koma kukhala ndi mato olingana kwa m'moyo wosoncho, ndipo sikuyenera kuwona nthawi zosoncho - geographic latencies. Kuti mpaka momwe zimapangidwa bwino, mwayi mwamulitsa wosoncho m'mauso omwe ndi osiyanasiyana.

Monga momwe, anthu odzindikira ntchito ya network amagwiritsa ntchito front-end caching solutions ndi content distribution networks (CDN) kuti mwayi mpalingaliro zomwe si mwamulitsa zimapangidwa. Kuyesa ntchito hizo ndikupereka zinthu zonse m'moyo wa server kupangitsa kuyesa, kuchepa kutuluka, kukonza kukhala ndi upgrades osiyenera, ndipo kupanga zinthu zosoncho kwa teknolojia.

Ultimate Multisite imayenera Cloudflare add-on yomwe imapangitsa mwayi wamulitsa kuti anthu odzindikira ntchito ya network angathe sita lanu pa Cloudflare ndikugwiritsa ntchito osati kukhala ndi caching, koma kuyesa DNS hosting, SSL certificates, ndi zinthu zomwe zimapanga kuchepa.

#### Backups

Mwayi woyenera m'moyo wa backups (backups) ndi anthu 50 kuti awonjeza ntchito ya backups ndipo kupereka mapulogalamu 50 osiyanasiyana pa njira za backups. Mtendi ndi: kukhala ndi momwe.

Koma kosa kosa, kuli na kuwamba kuti m'backup (kufotokozera kwa data) kuli nkhau, ndipo kuli kukhala koti pano kuti wamene anapereka ndi kusunga ntchito imeneyi. Kuti m'mphindo, anthu amakuthandizira kuti awonjeze ndi kusunga ntchito imeneyi. Koma kodi wamene amakuthandizira kupeza ndiyense yomwe ndi ndiyense yosiyanasiyana.

M'mphindo imeneyi, tiliyeza kuti m'backup ndi kopitiriza kwa njira ya kusunga ntchito ya system m'maka poyamba. Koma m'mphindo, kodi m'maka poyamba, ndipo m'maka poyamba, ndiyense yomwe imapereka ntchito imeneyi ndi kuyendetsa.

Kuti m'maka poyamba, ndiyense yomwe imapereka ntchito imeneyi ndi kupeza ndiyense yosiyanasiyana.

M'mphindo imeneyi, tiliyeza kuti m'backup ndi kopitiriza kwa njira ya kusunga ntchito ya system m'maka poyamba. Koma kodi m'maka poyamba, ndipo m'maka poyamba, ndiyense yomwe imapereka ntchito imeneyi ndi kupeza ndiyense yosiyanasiyana.

Kuti m'mphindo imeneyi, tiliyeza kuti m'backup ndi kopitiriza kwa njira ya kusunga ntchito ya system m'maka poyamba. Koma kodi m'maka poyamba, ndipo m'maka poyamba, ndiyense yomwe imapereka ntchito imeneyi ndi kupeza ndiyense yosiyanasiyana.

#### Snapshots

Snapshots ndi njira yomwe zimene zikukonza kukhala kofunika kwa backups chifukwa kuti zimene lina, zimene zisayenera, ndipo zimene zikugwira ntchito m'maka. Koma zimene zifuna kuti muli ndi madiningire kuchokera kwa wamene amapereka ntchito imeneyi, ndipo zimene zikugwira ntchito kwambiri ngati muli ndi VPS (Virtual Private Server) kapena njira yomwe yomwe. M'maka poyamba, anthu ambiri omwe ali m'documentation yathu ya ‘Compatible Providers’ amapereka backups zomwe si mwayi wosiyanasiyana kapena kuchokera kwa wamene amakuthandizira ntchito imeneyi.

Kuti zikomo zikomo za ku-backup, ziphatira kuti zikufuna files ndi databases, snapshot ikufuna disk yosonyeza ntchito yote. Izi zimeneza kuti si kwawo data ya site ikuperekedwa m'snapshot koma kuti operating system ndi configuration nzeru. Kwa anthu ambiri, izi ndi chifukwa chokhudzana kwambiri ndipo osati ndi snapshot ukhoza kupangidwa kwa nthawi yomweyo ndikugwira ntchito kuti muupatsedwe m'malo ya chinthu chomwe chimapangidwa. Mwachisetshedwe, pulogolero la kukhazikitsa files lomwe lili m'snapshot limakufuna kuthandizira disk ku instance yomwe ikulimbikira kuti files zikugwiritse ntchito ndi kuperekedwa.

Snapshots mung kufunane chidziwitso chachikulu ndi hosting provider koma ndi chifukwa cha chinyama pa m'malo ya kusowa.

#### External Scripts

Kuti kukhala ndi scripts ndi zowonjezera zosiyanasiyana kuti ku-backup WordPress ndi MySQL resources si ndipo zimeneza kuthandizira kwa Ultimate Multisite koma ndi plugin ya WordPress yomwe imaperekera m'filesystem ndi database ya WordPress. Choncho, solution yomwe ikuperekera backup ya WordPress ikuperekera zikalengedwa za Ultimate Multisite.

Sati tikhale ndi script lolimba kuliyonse, chidziwitso chathu ndi kuti munapereka ntchito za backup ndi restore zambiri kuti muli ndi zokhudzana zomwe mukufuna ndipo 'muli ndi chifukwa cha kukhala ndi chifukwa' monga kuphunzira script ndi ntchito yake m'malo omwe muli ndi njira yomwezi ya differential backup ikuperekedwa.

Kuti zimeneza kuti, pamene zikuyenda, zimaperekera kusintha kwa system load komwe kudzipereka.

#### Plugins

Kuti kukhala ndi WordPress zomwe sikupangidwa ndi plugin ndipo ngati mukufuna kuwongolera scripts zosiyanasiyana osati m'malo ya Java, mosati plugin ndi chifukwa cha chifukwa chachikulu.

Plugins muli ndi zinthu zina monga mapulogalamu (plugins) mukuwera, koma mukuwera kuti zimapereka ntchito yomwe yomwe: kuti zikopereke files za WordPress ndi database. Kuti nthawi zina, ntchito ya zinthu izi kumakhala wosonyeza (differ) kwambiri. Kuchokera pano, zombulogalamu zina zikupereka backups ku m'malo osiyanasiyana monga Google Drive kapena Dropbox kapena m'malo ena omwe ndi yenera. Zombulogalamu zomwe zikukhala zolemba kwambiri zimapereka differential backups kapena njira yomwe imapereka backup kwa data zomwe zimakhala zikachitidwa kuti mupereke kuteteza malingaliro a storage osiyanasiyana.

Pofunsa plugin, muli kukhala ndi chondezera kuti muli kuyesa kuti imakubwera multisite. Choncho, chifukwa cha ntchito yake, muli kuyesa kuti muli ndi kusintha kwa server (load) m'maka poyamba pomwe njira ya backup ikupitilira mpaka yomwe imapereka ntchito yake.

#### Domain ndi SSL

Kuti nthawi zina, kuli kutanthauza za domain names m'mode ya _subdomain_ ya multisite. Njira yomwe yomwe zimakhala yenera kwa administrators wa mtundu wosiyana (network administrators) ndi kuyesa kuti muli ndi DNS entries zokhudzana ndi wildcard.

![Wildcard DNS entry configuration example](/img/config/settings-domain-mapping.png)

DNS entry yomwe imakubwera kumapereka _subdomains_ monga ‘site1.domain.com’ ndi ‘site2.domain.com’ ku IP address ya 1.2.3.4, izi zimapereka chidziwitso kwa Ultimate Multisite ndi WordPress Multisite kwambiri m'mode ya _subdomain_.

Izi imatha kuthandiza bwino kwa HTTP chifukwa kuti host yomwe imakubwera kumapereka ku HTTP headers koma nthawi zambiri sitiyeni web imodzi momwe HTTPS yomwe yenera kwambiri m'mmodzi wosiyanasiyana.

Kodi, kuli ndi mwayi wosavuta kwa SSL certificates. M'moyo wopereka (subdirectory mode) mumwe certificate wa domain wosonyeza mungayendetsedwa. Amene ndi wosonyeza bwino ndi wosavuta kuwoneka kuchokera kwa hosting providers omwe angayendetsa LetsEncrypt service yosavuta kapena mwayi wina. Koma, m'moyo wa subdomain, ulendo wa wildcard SSL certificate uliwonetsa bwino ndi domain wosonyeza wildcard ndipo kulipira certificate kuyesa kuti ndi luso kwa domain yomwe yomweyo ndi onse _subdomains_ osati ndi kufufuza zinthu zingakhazikizidwe.

Koma, kudziwa kuti wildcard SSL certificates mwayi wina womwezi (Cloudflare) kumatha kusintha ngati muli ndi enterprise plan kapena muli ndi kuwera kukhala DNS only pamene onse zowonjezera ndi optimization zimakhazikizidwa.

Ultimate Multisite yomwe yomwezi (out-of-the-box) imapereka sulira ya izi, imapereka chondeledwe lathu lozi m'moyo wopereka wa WordPress multisites. Kukhazikitsa add-on wosavuta uliwonetsa kuti Ultimate Multisite idzakhale ndi credentials yanu ya Cloudflare kuti iteza DNS entries kwa sites za network m'Cloudflare ndipo itsetse mode yake kuti 'proxied'. Mwayi wosonyeza, m'moyo wina wa network, pamene uliwonetsa, mudzakhale ndi chiyembekezo ndi mafayelo onse a Cloudflare kuphatikiza SSL.

Kupembedza kwa momwezi ndi chifukwa cha kukhala ndi njira yomwezi (nature and purpose) ya Ultimate Multisite yanu, mungakukumbukire kuti mwachidule mung kupereke wamene angathe kutsegula domains zake. Mwayi wosonyeza, administrator wa network amaperekedwa kuwoneka ndi chifukwa cha zinthu zina mawuluwo: simba la domain name ndi certificate za SSL kwa domain.

Pansimwe, kwa ambiri, kuitumia Cloudflare ndi njira yosavuta. Mwanawo aliye kofunsa ndi kupereka domain yake pa Cloudflare, kuwamba CNAME ku root domain ya Ultimate Multisite ndipo kuyapanga domain yake mu Ultimate Multisite kuti mupathe kufaidika ndi dzina lanu la custom.

Pansi pa iwo, mwayi wopereka njira zina zikati ndi kukhala nkhani yomwe yofunika kutayire, ndipo ukuti Ultimate Multisite imalimbikitsa list ya Compatible Providers. Izi ndipo chifukwa chonde, kusankha DNS ndi SSL kuli ndi njira yosavuta. Komabe, ndi kuphatikiza kwa Ultimate Multisite ndi iwo providers, kusintha kuli kulimbikitsidwa kwambiri ndipo njira imapangidwa m'mwayi wopangidwa (automated).

#### Plugins

Kuti muli ndi plugins zina kuti mupereke ulamuliro kwa anthu kapena sites ya network yanu, kuli kukhala kofunika kwambiri. Kodi onse iwo plugins kumakwanira WordPress Multisite ndi Ultimate Multisite? Kuti kulimbikitsidwe.

Koma pamene zambiri pa plugins zimakwaniridwa m'WordPress Multisite, kukwera na licensing ndimene kumakhala kuyamba ndi kuphatikiza kuli kutanthauza kwa author ku author.

Chiyembekezo chokhazikitsa ndi momwe licensing imapangidwa ndi zambiri pa plugins zomwe zimayenera licensing pa msingi wa domain. Izi kumatanthauza kuti poyamba, kwa ambiri pa plugins, administrator ya network ali ndi kuyenera kuphatikiza license kwa plugin zina pa site lino lili lili.

Choncho, ingakhale kuyenera kukhala m'mwayi wopereka author kuti momwe plugin yake idzakhala ndi WordPress Multisite ndipo zolemba zokhudzana kapena njira zomwe zimayenera kuphatikiza licensing.
