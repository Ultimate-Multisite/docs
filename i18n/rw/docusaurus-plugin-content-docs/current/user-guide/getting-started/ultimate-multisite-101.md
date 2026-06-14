---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101

Ultimate Multisite ni plugin ya WordPress Multisite inashawishi wewe kutoa WaaS au Websites kama Huduma (as a Service) kwa wateja. Kabla ya kuingia na kujifunza jinsi Ultimate Multisite inaweza kukusaidia biashara yako na wateja, kuna maarifa ya msingi tunayohitaji kupata.

## WordPress Multisite

Wengi wetu tunajua usakinishaji wa kawaida (stock-standard) wa WordPress. Unaweza kuunda kwa kutumia control panel ya mtoa huduma wako wa hosting au, kwa wale wenye ujasiri, kuweka seva mpya na database, kupakua faili za msingi na kuanza mchakato wa usakinishaji.

Hii inafanya kazi kwa maelfu ya tovuti za WordPress duniani, lakini kutoka mtazamo wa agency au mtoa huduma wa hosting, hebu tuzungumzie kuhusu idadi (volumes) kidogo.

Ingawa ni rahisi kuunda tovuti moja ya WordPress au hata mia kupitia control panel ya kiotomatiki, matatizo yote yanapoanza kuonekana pale inapotegemea usimamizi wa tovuti hizo. Ikiwa hazisimamiwi, unaweza kuwa lengo kuu la malware. Kusimamia kunamaanisha kutumia jitihada na rasilimali; ingawa kuna zana za nje na plugins zinazopatikana ili kusaidia kurahisisha usimamizi na utawala wa tovuti za WordPress, ukweli kwamba wateja wanabaki na ufikiaji wa kiutawala (administrative access) kunamaanisha jitihada hizo zinaweza kushindwa kwa urahisi.

Katika msingi wake, WordPress inatoa kipengele kinachoitwa ‘Multisite’ ambacho kina asili yake mwaka 2010 wakati wa kuanzishwa kwa WordPress 3.0. Tangu hapo, kimepokea marekebisho kadhaa yaliyolenga kuleta vipengele vipya na kuimarisha usalama.

Kwa kifupi, unaweza kufikiria kuwa WordPress multisite ni kama hii: Chuo Kikuu kinasimamia usakinishaji mmoja wa WordPress lakini kila fakulti inasimamia tovuti yake ya WordPress tofauti.

Iyi, kugira ngo twishime ibi bikoresho by'ubwujobozi bishobora gukoreshwa mu kumenya uburyo bw'ubwujobozi bwa WordPress n'ibindi mu gukoresha.

### Icyemezo (The Network)

Mu gihe cy'ubwujobozi bwa WordPress, multisite network ni aho umuntu ashobora gushyira umubiri (subsites) inshuro nyinshi ku dashboard ya mbere. Iyo gukora multisite network bikwiye mu gihe cy'ubwujobozi bw'hosting bitandukanye, ariko uburyo bwo gukemura ibi ni ko hari ibindi by'umwihariko mu file wp-config.php kugira ngo WordPress yitokeze ko ikora muri iki gihe kirekire.

Hari ibintu by'umwihariko byinshi bitandukanye hagati multisite network n'ikoresha WordPress ya mbere (stand-alone installation) kandi twashobora kubyaza uburyo bwo gukemura ibi mu buryo gifite urugero.

#### Subdomain vs. Subdirectory

Icyemezo cyiza cyane ushaka gukora ni ukuri kuko multisite installation izakora ku buryo bw'subdirectories (ubwoko bw'amabwiriza) cyangwa subdomains (ubwoko bw'ibinyumbura). Ultimate Multisite ikora neza ku bibiri byo, ariko hari ibintu by'umwihariko mu gutandukanya hagati iki gice.

Mu buryo bwo **subdirectory**, amabiri y'amabiri (network sites) yashobora gushyira uburyo bw'ubwoko (path) ku ngaruka ya domain ya mbere. Urugero, site yakoreshwa itwa ‘site1’ izakora URL yayo yose ikoresheje https://domain.com/site1. Mu buryo bwo **subdomain**, site yakoreshwa itwa ‘site1’ izakora subdomain yayo yisanzwe ku domain ya mbere. Urugero, site yakoreshwa itwa ‘site1’ izakora URL yayo yose ikoresheje https://site1.domain.com/.

Ntabwo ibi bibiri byo byiza kandi byishobora gukorwa neza, gusa ko gukoresha **subdomains** bikora ibintu byiza nyinshi ariko bitazwiho gukora akazi cyangwa gufite uburyo bwo gutandukanya mu ntego y'ubwujobozi.

Muri mu DNS, gukoresha _subdirectories_ ni umugambi usanzwe. Kubera nkoho uburyo bwo mu rwego rwa mbere (network sites) ni imyera y'umwihariko w'umwihariko wa mbere, gusa igice cyo DNS cyiza kigomba kuba cyiza kuri domain name y'umwihariko. Ku gihe cyo _subdomains_, umugambi ugiye mu gukomeza kandi ukoresha CNAME entry cy'umwihariko cyangwa wildcard (*) ku DNS records.

Uruhu rugufi rwo kwikirana ni SSL no gukoresha no guhura SSL certificates. Mu gihe cyo _subdirectory_ configuration, uburyo bwo gukoresha certificate cyiza cyashobora gukoreshwa mu rwego rwa mbere (network sites) kubera ko imyera ni amabwiriza y'umwihariko wa mbere. Bityo certificate cy'domain.com kizakora SSL cyiza kuri https://domain.com/site1, https://domain.com/site2 n'ibindi.

Mu gihe cyo _subdomain_ configuration, gukoresha wildcard SSL certificate ni mu gihe cyo cyohereza cyane cyane. Urugero rwa SSL ryo wildcard ryigisha uburyo bwo guhura https://site1.domain.com, https://site2.domain.com kandi HTTPS kuri domain.com yihariye.

Urugero rugufi rwo gukoresha mu gihe cyo kera, hari ibindi byo gukora, ariko bikorwa cyane kandi bikoreshwa mu gihe cyane kandi bikwiriye kugira ngo uzi uko bishobora gukoreshwa.

#### Plugins n'Themes

Icyo WordPress kigomba kwitera, mu gihe cyo umukoresha w'umuryango (customer), niho mu rurimi rw'WordPress ryo mbere (stand-alone installation) ubutumwa bwo gukoresha plugin yizera cyangwa ukagira ikibazo kuko uratera kwitonderwa, umuntu wowe niwe wari umugambi kandi umwihariko. Ariko, mu gihe cyo umukoresha w'umuryango ukaratera plugin yizera kuri multisite installation, umuntu wowe ni umugambi wese w'imyera itangwa mu rwego rwa mbere.

Iyi hari ko, mu gihe uburyo nkoze ku bijyanye n'UWP (WordPress) w'itegura nk'uko ugiye gukoreshwa nk'umwihariko (multisite). Ibi byitwa cyane ni uko iyo UWP yitera ubushobozi bwo abanyamwugasubaki (site administrators) kugira ngo bashobore gukoresha plugins n'themes, kandi itera ibyo ubushobozi ku muntu w'umwihariko w'uburenganzira (network administrator) cyangwa 'super admin' wari yagize. Iyo muntu w'umwihariko w'uburenganzira yashobora gushyira uburyo bwo kumenya n'ukoresha menu ya plugins kuri dashboard y'abanyamwugasubaki b'itegura mu rubuga rwe, kandi iyo hari ibyo, yashobora guhindura ubushobozi bwo gukora cyangwa gukoresha (activating or deactivating) plugins.

Ku gihe cyo, muntu w'umwihariko w'uburenganzira ni umwe w'uko byitwa mu network kandi yashobora gushyira ubushobozi bwo gukoresha plugins n'themes ku myitango itera mu network. Abanyamwugasubaki (site administrators) batagira ubushobozi bwo gushyira plugins cyangwa themes cyangwa gukoresha ibyo ntibyo byashyizwe kuri site yabo.

#### Abantu n'Abanyamwugasubaki (Users and Administrators)

Mu WordPress Multisite, myitango yose itera mu network yishobora gushyira database yashya kandi biba bakoresha abantu bashya, roles, n'ubushobozi biba byiza. Uburyo bwiza bwo kwerekana ibi ni uko abantu bose bari mu network kandi batari umuntu w'itegura cyangwa site itera runaka.

Kugira ngo uburyo bwa mbere bishobore gukoreshwa, bitewe niyo ubwoba, WordPress Multisite yitera ubushobozi bwo gukora abantu bashya kandi ibyo byitwa "site administrators" mu gihe cyo itera ku muntu w'umwihariko w'uburenganzira. Iyo, muntu w'umwihariko w'uburenganzira yashobora gushyira ubushobozi bwo gukoresha (delegate) kugira ngo abanyamwugasubaki b'itegura bashobore gukora abantu bashya kuri site yabo.

<!-- Screenshot unavailable: WordPress Multisite network user management interface -->

Kubyara ibyo, ntabwo abantu bashya biba biboneka mu gihe cyo itera ku site yabo; ariko byishyizwe kuri network kandi bifite ubwoko bw'umuntu w'uburenganzira. Biba hari ibintu bitewe niyo uburyo, aho abantu babiri (usernames) batagira ubushobozi bwo gukoreshwa mu gihe cyo, kubera iyo ndimi.

Même si sita ntabwo ikintu cy'ubwoko bw'ibikorwa by'ubucuruzi, uburyo bwo gukoresha umuntu wese kugira aka kanya (registration) no guhura (authentication) ni ikintu cyiza kumenya cyane ku bantu bashobora kwishobora kubona inyandiko z'WordPress zikoreshwa mu buryo bw'ibyo ntabwo mu mashami y'WordPress yisanzwe, aho uburyo bwo gukemura ibyo by'umuntu (user administration) ni cyiza cyane.

#### Media

Mu gihe sita ry'ubwoko bw'uburyo bwa WordPress Multisite rishyira umudashyiramo wose mu database, bitera uburyo bwo gukoresha amakuru (media files) ku ntego z'umwihariko kuri filesystem.

Uburyo bwa sita ryisanzwe (wp-content/uploads) rikoreshwa; ariko, uburyo bw'izo file cy'amakuru bikoreshwa bishoboraga gukoreshwa mu buryo bwo kubyara umwihariko w'uburyo bwa sita. Mu gihe cyose, amakuru y'umwihariko kuri sita ry'uburyo bwa Multisite bitangwa nk'wp-contents/uploads/site/[id].

#### Permalinks (Uburyo bwo gukoresha uburyo bwo kubyara)

Tariye yitangiraga ko hari ibyo byiza by'ubwoko bw'subdomain cyane ku gihe cy'uburyo bwa subdirectory, kandi hari iki: amakuru (paths).

Mu buryo bwa subdirectory, sita ry'ingenzi (sitacya cyo gukoreshwa cyane mu gihe ubwoko bwa Multisite) n'ibindi sita by'uburyo bwa network bifite uburyo buhagaragara ku muryango w'ubwoko bw'ubwoko bwo domain. Ibi bituma hari uburyo bwo gukemura ibyo by'umuntu cyane.

Kugira ngo nta kigabanyiramo (clashes) n'ibindi sita, hari uburyo bwa /blog/ rishobora guhagaragara ku sita ry'ingenzi kugira ngo umubyiruko w'ubwoko bwo domain yari 'Post name'. Icyo bicuriramo cyiza cyane nk'domain.name/blog/post-name/.

<!-- Screenshot unavailable: WordPress permalink settings showing /blog/ path in subdirectory configuration -->

Mu buryo bwa subdomain, uburyo bwa gukemura iki ntabwo ari ngombwa kuko sita ry'uburyo bwa network rishobora kwirinda cyane ku domain. Icyo bicuriramo cyiza cyane nk'domain.name/subdomain-name/. Bityo bitera uburyo bwo gukoresha amakuru by'umwihariko mu buryo bw'ubwoko bwa subdomain.

<!-- Screenshot unavailable: WordPress permalink settings for subdomain configuration -->

#### Static Pages (Icyiciro cy'amajwi)

Mu gihe y'ubwuzi mu _subdirectory_ configuration, ubushobozi bwo gukora ibyemezo byo gusohora (naming conflicts) cyemerera ku nshingiro ry'amajyango (static pages) nk'uko uburyo bw'umuryo w'umwebwe (main site) n'amajyango y'uburyo bwo umuryo w'ubwoko (network sites) yashyira mu gihe cy'umwihariko.

Kugira ngo uratire ibi, WordPress yifasha gukora uburyo bwo kwitera ibyo byo gusohora (blacklist) ibyemezo byo nshingiro z'amajyango itandukanye kugira ngo bitagire mu gihe cy'umwihariko n'ibyo byo nshingiro ya mbere. Gusa, umukozi w'uburyo bwo umuryo w'ubwoko (network administrator) yitera uburyo bw'amajyango y'umwebwe (root paths) y'amajyango y'ibyo byemezo byo gusohora.

<!-- Screenshot itariki: WordPress network settings ikoresha ibyemezo byo nshingiro byo gukora ibi byo gusohora kugira ngo bitagire -->

Mu _subdomain_ configuration, ubushobozi bwo gukora ibyemezo byo gusohora (naming conflicts) bishoboraga ku gutera mu buryo bw'uburyo bwo umuryo w'ubwoko (subdomain) kuko uburyo bwo umuryo w'ubwoko (subdomain) ni cy'umwihariko ku muryo w'ubwoko (network site) kandi si ryihariye n'ibyo byo mu buryo bw'umwebwe w'umuryo w'ubwoko (main site).

### Gukoresha (Registration)

Mu ngaruka za gukora ibi mu settings y'uburyo bwo umuryo w'ubwoko (network settings) ya WordPress Multisite, hari uburyo bwo gukora abantu bafite ubushobozi bwo gukora amajyango atandukanye (sites). Ibi byitera abantu bafite ibyo babaye kandi abantu bafite ibyo babaye.

<!-- Screenshot itariki: WordPress Multisite network settings ikoresha ibi byo gukora abantu -->

Mu gihe cy'uburyo bwo umuryo w'ubwoko (network sites) bishoboraga, bitagira ibyo byo kwitera abantu bafite ubushobozi bwo gukora amajyango atandukanye (user registrations) cyangwa gukoresha ibi bito kugira ngo ubanire ibyo bito ku rurimi rw'uburyo (roles).

<!-- Screenshot itariki: WordPress standalone site user registration settings ikoresha ibi byo kwitera abantu -->

Icyo gihe abantu bafite amakuru yabo (user accounts) bikora mu gihe cy'uburyo bwo umuryo w'ubwoko (network level). Bityo mu gihe cy'umwihariko, mu gutera ibyo byo gukora ibi, batagira uburyo bwo kubaho mu mshobora y'amajyango atandukanye (belonging to any one particular site) ahubwo bitagira mu rurimi rw'uburyo w'ubwoko (network). Ibi byitera ibyo byiza kandi ibyo byiza.

Urugero, uburyo mu WordPress Multisite yawe yari mu ugendero rya iby'abwera n'ubwujyanye. Uko wumva, wamukoresha multisite yawe kandi ukora sites za network ku bijyanye n'ibikorwa by'ubuzima bishobora kuba ari ubuzima bwa nyumbura, uburyo mu bikorwa, ubwujyanye n'ibindi by'ingenzi, kandi wumukoresha uburyo bwo gukoresha plugins n'themes. Icyo cyose kuko site ya network yose itera uburyo bwo gushobora kwerekana no gukora umuntu (user experience) mu gihe cyane cyane cyangwa ibindi byiza nk'ubwoko bw'ibyo bikoreshwa n'ibanga ry'post categories.

Ku gihe cyacu, iyo umuntu yanditira aka account, atangira kumenya ku network kandi akaba yanditiraho mu site ya network yose kugira ngo umenye uburyo bwo gukora ibyo byiza. Iyo site yawe yashobora kuba itera ubwoko bw'ubwujyanye (subscription based), iyo iki cyari ari uburyo bwiza kandi burimo kwerekana, ni uburyo bwawe.

Ariko, iyo uburyo bwo gukoresha multisite yari ari ukugira site za network zishobora kuba zishobora kubaho mu buryo bwo gushyira umuntu ku ubwoko bw'uburyo (user roles) n'ibyo byari bitagufi, ni cyo hari ibindi plugins cyangwa ibindi byiza byashobora guhindura uburyo bwo gukoresha iyo user.

### Domain n'SSL

Tugereye ku WordPress Multisite yari itera umuntu mu gihe cyose - Wordpress.com. Iyo ni inama ya mbere kandi ifite uburyo bwiza bwo kumenya ibyo multisite yashobora gukora, kandi ikoresha ubushobozi bwawe bwo gukoresha no guhindura ngo itera umuntu mu buryo bwo gukora ibyo byiza.

Icyose ku rwego rwa internet ry'umukono uyu munsi, gukoresha SSL ni ikintu cyitwa nk'igice cyangwa ikintu cyitwa nk'ikoresho (mandatory). Iyo abashobora gukemura ibi bito mu multisite yari itera umuntu, bashobora kubona ibi bikorwa.

Mu uburyo bwo gukoresha _subdomain_, sites zishobora guhindurwa ku gihe cyose cyangwa ku gihe cyiza cyane cyane cyangwa ku gihe cy'ubwoko (root domain name). Icyo rero, site itanzwe 'site1' yashobora gukoreshwa nk'site1.domain.com. Uko umukoresha uburyo bwo SSL ya wildcard certificate, ashobora guhindura iki kintu kandi akaba atangira ubushobozi bwa SSL ku network yose.

WordPress Multisite iweze uburyo bwo gukoresha domain mapping, uyuho yashobora ubushobozi bw'amuryango (network sites) guhagarirwa n'izina z'ibanga (custom domain names) cyangwa izina z'ibanga zitandukanye n'izina ry'umuryango rwa mbere.

Kuva ku muryango w'abanyamwugasiramo, iki kigaragaza uburyo bwo gukora ibintu byiza kandi byiza mu gukoresha izina zibanga no gukoresha no guhagarira SSL certificates.

Icyo cyitwa ni ko, n'uko WordPress Multisite igira uburyo bwo kugira [www.anotherdomain.com](http://www.anotherdomain.com) guhagarirwa kuri 'site1', umuryango w'abanyamwugasiramo yiboneka n'ubushobozi bwo gukora DNS entries mu buryo bw'ibindi, no gukoresha SSL certificates.

## Ultimate Multisite

Ntabwo twishobora kumenya ingano nyinshi hasi hasi hasi hagati y'indwara ya WordPress installation ishyirwaho n'indwara ya Multisite, twashobora kubona uko Ultimate Multisite ni igikorwa cyiza cyane mu gukoresha Websites as a Service (WaaS).

### Intumbuka

Ultimate Multisite ni ikintu cyiza cyane kuri wowe mu gukora Website as a Service (WaaS). Nshobora kugufiwe n'ibyo bishobora kubona Wix.com, Squarespace, WordPress.com kandi ntabwo kwiyumva uyuho.

Hisi hasi hasi hasi, Ultimate Multisite igira uburyo bwo gukoresha WordPress Multisite ariko mu buryo bwiza cyane kuko yitandukanye n'ibintu byose byashobora kubona mu gukoresha. Iyo, mu gihe cy'amabwiriza atandukanye twagira, twahagariraho ibyo bishobora kubona mu gukoresha.

Mu nshami zikurikira, twagira uburyo bwo kumenya ibintu byose byihariye kandi byerekana uko twashobora gufasha iyo ndwara.

### Uburyo Bwo Gukoresha (Use Cases)

#### Icyiciro 1: Inshuti (An Agency)

Gusa, uburyo bwo gukora inshuti cyangwa agency ni ko ubushobozi bw'ubwoko bwa website bishobora kuba ariko byitwa nk'ibindi ibintu nko hosting cyangwa marketing.

Kwa ajili ya agencies, Ultimate Multisite inatoa thamani kubwa sana kwa uwezo wake wa kuhost na kusimamia tovuti nyingi kwenye jukwaa moja. Hii ni muhimu zaidi kwa agencies ambayo yamefafanua muundo wao kwa mada (themes) kama GeneratePress, Astra, OceanWP au zingine; wanaweza kutumia uwezo wa Ultimate Multisite kuwasha moja kwa moja hizo themes kwa kila tovuti mpya.

Vilevile na wingi wa mikataba ya bei za agency kwa plugins maarufu na za kawaida, matumizi ya Ultimate Multisite kunawapa agencies uwezo wa kutumia maisha yaliyopo kwa kutoa jukwaa ya pamoja ambapo plugins zinaweza kuwekwa, kusimamiwa na kutumiwa.

Ni makubwa sana kwamba matumizi ya configuration (muundo) kitatakiwa na watu wengi, na kwa bahati, Ultimate Multisite inafanya iwe rahisi sana kufanya domain mapping na SSL certificates kupitia integrations zake na vyanzo vingi vya hosting maarufu kama Cloudflare na cPanel.

Kwa hivyo, kwa kutumia mojawapo ya vyanzo hivi au kuweka Ultimate Multisite nyuma ya Cloudflare, vipengele kama usimamizi wa domains na SSL certificates vinakuwa rahisi sana.

Agencies ambazo zinapendelea kudumisha udhibiti mkali juu ya uundaji wa tovuti zitashukuru urahisi unaoweza kuunda tovuti na kuzihusisha na wateja na mipango kupitia interface iliyorahisishwa ya Ultimate Multisite.

![Ultimate Multisite site management interface](/img/admin/sites-list.png)

Udhibiti mkali juu ya plugins na themes unadumishwi kwa msingi wa bidhaa (per-product basis) kupitia interfaces za Ultimate Multisite zinazoeleweka, ambazo zinawapa uwezo wa kufanya plugins na themes ziweze kuwepo au kuzificha pamoja na hali yao ya kuwasha wakati zinapowekwa kwenye tovuti mpya.

![Product plugin limitations interface](/img/config/product-plugins.png)

Themes zishobora gukora uburyo runaka, bikorera kugira ngo umwe mu myaka y'umwebwe yashoboye kugaragurwa cyangwa guhagarirwa ku muryango w'umwebwe.

![Product theme limitations interface](/img/config/product-themes.png)

Agencies zishobora kwishimira n'Ultimate Multisite kugira ngo zikora ibyo zizera neza - gukoresha umwebwe nziza.

#### Icyiciro 2: Umuntu w'uburyo (Niche Provider)

Hari igice cy'umwaka cyemeje cyane kigaga ko, “gukora ikintu cyiza kandi cyemeje.” Ku gihe cyinshi b'abantu bashobora gukoresha ibi, ibyo bikunda byari gukora ikintu runaka cyangwa gukoresha umuntu w'uburyo (specialist) uwo muntu yashobora gukora ikintu runaka ku gihe cyiza.

Urugero, wumva ko wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo wumva ngo w

Kuriye uburyo bwo kubyara ubushobozi bw'ubwujobozi (requirements), ubushobozi bwa _subdirectory_ cyangwa _subdomain_ cyashobora gukunda, mu gihe cyose ibyo byaba ni ibyo byaba mu gutegura uburyo bwo gukoresha. Mu gihe cyo, ibyo byaba ni ibyo byaba mu gutegura uburyo bwo gukoresha SSL certificate y'ubwoko bw'ubwoko (subdirectory) cyangwa wildcard SSL certificate y'ubwoko bw'ubwoko (subdomain).

#### Icyiciro 3: Urugendo rwa WordPress Web Hosting

Hari uburyo bwinshi bwo gukoresha WordPress sites, ariko hari ikirere kire cyane cyo gukoresha ubushobozi bwo kubyara umuntu n'ubwoko bw'ubwoko (web space) ku muntu kandi yashobora kuba yakunda. Icyo ni kubera ko hari ibindi byinshi byemezo n'ibindi byemezo byaba bifite uburyo bwo gukoresha kugira ngo umuntu atangire ubuzima bwiza.

Ultimate Multisite yitera neza mu gihe cyo bicwe uburyo bwo kubyara umuntu kandi bikundahohoho (turnkey solution) ku gutegura WordPress sites. Icyo kishobora gukoreshwa mu gukoresha ni ibintu by'ubwoko bw'ubwoko (core mechanisms) byo gukoresha ubuzima bwo kubyara umuntu, gukoresha imyenda (payment collection), amashobora y'uko uyu muntu yagize (checkout forms), amashobora y'ibindi (discount vouchers) n'ubwumvikane bw'abakoresha.

Uburyo bwo gukora ibintu by'ubuzima bwo kubyara umuntu, gukora ibindi, no gufata uburyo bwo gukunda WordPress Multisite ni cyiza kandi bicweho n'Ultimate Multisite. Icyo kishobora gukoreshwa mu gihe cyo ubwoko bw'ubwoko (network administrators) bishobora gukoresha ibintu byemezo byo kubyara umuntu, nk'ibyo byaba mu muryango w'ibindi (product tiers), uburyo bwo kwishyura (pricing) n'ibindi byo kubyara.

Ku gihe cyo abakoresha ibintu byo gukora ubushobozi na Ultimate Multisite, uburyo bwo gukoresha ni igikorwa cyiza cyane cyane cyangwa Webhooks kugira ngo umuntu yitangire ibindi (event notification).

Buri gihe, Ultimate Multisite yitera uburyo bwo kubyara umuntu kandi bicweho uburyo bwo gukora ibintu by'ubwoko bw'ubwoko (feature rich solution) cyangwa ibyo byaba bifite ubushobozi bwa Wix, Squarespace, WordPress.com n'ibindi.

### Icyemezo cyo Gukoresha Uburyo Bwo Gukoresha (Architecture Considerations)

Ntabwo ni inshingano y'ubwujobozi bwose, ibintu byo mu gihe cyo bishobora kuba ari inama kugira ngo umuntu atangire uburyo bwo gukoresha ibintu byemezo byo kubyara (selection of technologies) kugira ngo Ultimate Multisite yitandire.

#### Gukoresha Ubwoko Bw'ubwoko bw'ubwoko (Shared vs. Dedicated Hosting)

Muriye, nta wese uburyo mu gukoresha hosting. Hari abantu bishobora kuba barashyira ubushobozi bw'ubwoko (server densities) cyane. Abanyubyuranye bafite ubwoko bw'umutera (low-cost providers) bashobora kugera ku mwera bakoresha ubushobozi bw'ubwoko kenshi. Nubwo, uburyo w'Ultimate Multisite yashobora kuba umwe mu nshingano z'abantu bishobora kubyara cyane mu gihe runaka ku server imwe.

Nta hari uburyo bwo gukoresha ubwoko bw'umutera (safeguards) bwiza ku muntu w'uburyo, abantu bashobora kubona ikibazo cyo 'noisy neighbour'. Icyo ni ukuba umwe mu gihe runaka ku server yashyira ubushobozi bwinshi kandi abandi bakoresha ibyo bishize. Icyo gusa cyashobora guhindura uburyo abantu bashobora kubona, nk'uko abantu babona amaso (slow) cyangwa batagira uburyo bwo kwiga mu gihe runaka.

Nk'umuntu w'uburyo bw'ubwoko bw'ubwoko (web hosting), ibyo byitwa 'flow on effects' bituma abakoresha banyuze amaso y'abantu, uburenganzira bw'amaso (page rank) bufungura cyane, kandi batagira uburyo bwo kwiga mu gihe runaka. Ibi bifasha abantu babona ikibazo cyo gukora ibyo bacyo mu gihe runaka, kandi bakoresha ibindi bintu mu gihe runaka, bikaba byashobora gutera ku muntu w'uburyo bw'ubwoko (customer churn).

Mu buryo bw'umwujiza, ubwoko bw'umutera (cheap) ntabwo rurinda uburyo bwiza.

Ultimate Multisite yizera ko ituma neza n'abantu bishobora kubona hosting bwinshi kandi ituma neza mu gihe runaka ku server imwe kugira ngo itegeze ibyo bishobora gukora nk'uko byerekana uburyo bwiza. Abantu bashobora kwishimira ubwoko bw'umutera (good hosting providers) n'uburyo w'Ultimate Multisite yashobora gutandukanya neza mu gihe runaka ku server imwe kugira ngo itegeze ibyo bishobora gukora nk'uko byerekana uburyo bwiza. Abantu bashobora kwishimira ubwoko bw'umutera (performance) kandi bakoresha uburyo bwiza bukomeye cyane ku gihe runaka ku server imwe.

Kugira uburyo bwo kubona abantu banyuze hosting n'uburyo bwo gukora ibyo bacyo mu gihe runaka, n'ibyo byitwa 'complete set-up instructions' kuri buri wese, ushobora kumenya ku documentation ya Compatible Providers.

#### Gusobanura Icyemezo cyo Ubwoko (Performance Considerations)

Ultimate Multisite si uburyo bwo gukoresha mu gihe runaka, ahubwo ni uburyo bwiza kandi buhoraho cyane. Ariko, yituma neza gusa nk'uko byerekana uburyo bwiza n'ubwoko bw'umutera (underlying application and infrastructure) kandi yashobora gukoresha gusa ibyo bishobora kubona.

Gushyira mu maso: Wari umuntu w'uburyo bw'ubwoko (network administrator) w'Ultimate Multisite yashyira abantu 100. Abandi mu gihe runaka bashobora kuba barashyira neza kandi bafasha abantu banyuze amaso y'abantu banyuze website buri gihe.

Icyo ikihezo ikihezo zikwiriye mu gihe cyiza kandi n'ubwujumbura bwa WordPress.

Urugero rwa hariho rugera ku ngingo y'umuryango w'ibyo gishobora kuba difite uburyo bw'ingenzi, nk'uko umwe cyangwa umwe mu gihe cyiza (site) cyangwa ibindi byo mu gihe runaka. Ariko, mbere y'uko ibintu bishobora guhinduka ku ngingo nyinshi, ubwoba w'ibyo gishobora kuba difite uburyo bw'ingenzi bwa scale (uburyo bwo gutera imbere).

Niba umwe cyangwa site runaka mu gihe cyiza y'umuryango w'ibyo gishobora kuba difite uburyo bw'ingenzi, uyu site ni umwe w'uko ari we ugenda gukorera ibyo abakoresha bose bafite ubushobozi bwo gukoresha. Ibi byo nshya, bigira ingano zikwiriye mu PHP cyangwa ibindi byo mu gihe runaka nk'ibyo bishobora kuba ari stylesheets, javascript cyangwa media files. Niba hari site imwe cyangwa imwe mu gihe runaka, ibyo kazi bishobora kuba bifite uburyo bw'ingenzi, bishobora kuba bifite uburyo bw'ingenzi kandi bigira ingano zikwiriye ku gukoresha CPU na memory kugira ngo yihanganye. Ni ngombwa ko nta kintu cyo gukoresha CPU na memory kugira ngo yitandukanye n'ibyo bishobora kuba ari ibindi byo mu gihe runaka.

Uburyo bwa mbere, umwe cyangwa uburyo bwa PHP cyangwa HTML cyo mu gihe runaka ni gukora ibyo bikwiriye, bigira ingano zikwiriye ku gukoresha scripts, stylesheets n'ibindi byo mu gihe runaka. Ibi byo bifite ingano zikwiriye kugenda kuri server ya Ultimate Multisite yawe.

Icyo cyo gushyira uburyo bwa mbere ni gukora ibyo bikwiriye, bigira ingano zikwiriye ku gukoresha ibintu byo mu gihe runaka kandi bigenda kuwezi bishobora kuba bifite uburyo bw'ingenzi. Icyo cyo gushyira ibyo bikwiriye no gukorera ibintu byo mu gihe runaka kenshi, bibagira ingano zikwiriye kugenda kuri server yawe.

Ushobora gushyira uburyo bwa mbere mu gihe cyiza kandi nta kintu cyo gushyira ikibazo cy'geographic latencies (ingano z'umuganda w'uburyo) cyo mu gihe runaka. Gukoresha server nyinshi mu nzego zitandukanye ni uburyo bwiza bwo guhindura iki kibazo.

Kuko byo, abanyamukuru bwa network babona ko bakoresha front-end caching solutions na content distribution networks (CDN) kugira ngo bashobore gukora ibyo abakoresha bafite ingano zikwiriye ku gukorera ibintu byo mu gihe runaka. Gukora ibyo bikwiriye no guhagarika ibintu mbere y'uko ibyo bishobora kuba bifite uburyo bw'ingenzi bwa server ni gushyira ingano zikwiriye ku gukoresha, kugabanya imyitwarire, kwibuka ubushobozi bwo guhindura iki kibazo cyo mu gihe runaka kandi gukora ibyo byo mu gihe runaka.

Ultimate Multisite yifashishije Cloudflare add-on ikomeye kenshi kugira ngo abanyamukuru bwa network bashobore gushyira ibyo bifite ingano zikwiriye ku gukoresha mu buryo bw'ingingo, kandi bigira uburyo bwo gukoresha ubushobozi bwa caching, DNS hosting, SSL certificates n'ibindi byo mu gihe runaka.

#### Backups (Ubugenzuzi)

Ushobora umuntu yari yashyira abantu 50 kugira ngo bashobore gutanga ubufasha ku bugenzuzi kandi yashobora gushyira ingano zikwiriye mu gihe runaka, kandi byo bishobora kuba bifite ingano zikwiriye mu buryo bw'ingenzi bwa bugenzuzi. Icyo cyo guhindura iki kibazo ni kumenya ko hari ibyo bikwiriye ku gukoresha.

Icyo cyangwa ntabwo ari igisubizo cy'ibyo bishobora gukorwa, ni ko bakoresha backups kandi ko ni ikintu kirekire cyane ko bakoreshwa na umuyobozi w'ubwoko (provider), cyane cyane uwo ufite serivisi y'ubwoko (managed service). Bityo, abakoresha bakora inama ku umuyobozi w'ubwoko kugira ngo atangire kandi akorera ubu kazi. Icyo gishobora kuba ikibazo kintu cyiza ni ko umuyobozi w'ubwoko yashaka ubushobozi bwo gutanga no gukoresha serivisi iyi. Ariko, igice cy'ibyo bikurikira, ku gihe twagera mu gice cyo ubu, twatangira ko backup ni inyandiko ya sita (point-in-time copy) y'ubwoko bw'ubwoko (system state) mu gihe umukoresha w'ubwoko yashyiraho. Mu buryo wuriye, ibyo sita ry'ubwoko mu gihe cyo gukora backup rishobora kugabanyirwa kandi rihagarirwa mu backup.

Ndashobora gushyira ku isi ko uburyo bwo gukora backups n'uko byiza kuri environment yawe bizashobora guhinduka kenshi ku ngombwa zyawe no ubushobozi bw'umuyobozi w'ubwoko gutera ibyo. Ariko, mu gihe twgira inama zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nshingano zikomeye cyane ku nsh

Icyoho, mu gihe uburyo bwo kubaka (backup) byo gishobora kugera ku file cyangwa database, snapshot igera kuri disk yose. Ibi by meaninga ko nta gice gusa cyo data ry'site cyangwa operating system n'configuration cyangwa se. Ku gihe runaka, iki ni ikintu gikomeye cyane kuko umuryango w'umunsi mushya ashobora gutungwa cyane mu gihe cyiza ku snapshot kandi guhindurwa kugira ngo uhereze gukorera umunsi w'ubwoko bw'ibindi. Uburyo bwo gukemura ikibazo cyo gukoresha ibindi byo kubaka (recovery) byumva gukora ubutumwa mu file gusa, kandi ni gukoresha snapshot image nk'umugambi ku disk y'umunsi w'ubwoko bw'ibindi kugira ngo ubone ibyo.

Snapshots ishobora gutera ikintu cyo gukomeye n'umukoresha w'hosting, ariko ni uburyo bwo kubaka (insurance policy) kuri ibyo byo gishobora kwitwa ku gihe cyiza.

#### External Scripts

Buri hari uburyo bwo gukoresha scripts zikoreshwa mu gihe cyiza kugira ngo ubaka (backup) WordPress n'MySQL resources, kandi ibyo byoza cyane kuri Ultimate Multisite kuko ni plugin ya WordPress ikoresha filesystem n'database ya WordPress. Bityo uburyo bwo kubaka sites za WordPress byumva gukemura ibyo Ultimate Multisite yashobora gutera ku gihe cyiza.

Tari tushobora kugira umuntu w'ibiri mu scripts, ariko uburyo bw'ubwujgwa ni ugukora uburyo bwo gukora tests nyinshi bya backup no recovery kugira ngo ubone ibyo bishobora kwerekana kandi kugira ngo "ugire umutima" (be sure) ukoresheje script kandi ubyumva uburyo bwo gukora, cyane mu gihe hari uburyo bwo kubaka by'ibindi.

Ni byiza kumenya ko scripts iryo mu gihe yikoreshwa, izakomeza gutera umunsi w'umunsi (system load) kandi byitwa ku gihe cyiza.

#### Plugins

Buri hari ikibazo mu WordPress cyo gushobora guhindurwa n'plugin, kandi niba ubanzi mu gukoresha scripts zikoreshwa mu gihe cyiza, uburyo bwo gukoresha plugin ni umuntu w'ibindi.

Icyo mu byo mu gihe, ntabwo plugins zishobora kuba zishobora mu buryo runaka cyangwa zo mu gihe, zishobora gukora uburyo runaka bwa gukoresha (copy) files n'ibanga ry'database ya WordPress. Nyuma y'ibyo, uburyo bw'ubwujumbura bishobora guhinduka kuko hari plugins zikora ibyo mu gihe cy'ibindi, nk'uko zishobora gukoresha backups ku byiciro by'ibindi (external services) nko Google Drive cyangwa Dropbox, cyangwa ku byiciro byo gutanga ibyerekeje nko S3, Wasabi cyangwa ibindi. Plugins zikomeye cyane zishobora gukora differential backups cyangwa uburyo runaka bwa gukoresha (strategy) kugukora backup igice cy'ibyo yashyirwaho gukoresha ibintu by'ibindi, kugira ngo ubone inyungu ku byiciro by'ibindi.

Iyo utera plugin yawe, ugomba kwerekana ko ifite uburyo bwo gukora multisite (multisite aware). Kubera uburyo bwo gukora ibi mu gihe cy'backup ikora, uza kubona inyungu itandukanye ku server mbere y'ibyo yakomplirwa.

#### Domain n'SSL

Bikurikira, hari uburyo runaka bw'ubwujumbura bwo domain names mu buryo bwa _subdomain_ multisite. Uburyo runaka cyane ku gihe cy'abantu bashobora gukoresha ni gukoresha wildcard DNS entries.

![Wildcard DNS entry configuration example](/img/config/settings-domain-mapping.png)

Iyo DNS entry ikiza uburyo bwo gukoresha _subdomains_ nk'uko 'site1.domain.com' n'site2.domain.com' kugira IP address ya 1.2.3.4, ibyo byerekana Ultimate Multisite no WordPress Multisite mu buryo bwa _subdomain_.

Ito cyashobora gukora neza ku HTTP kuko ubyo bwo gutanga host yitwa kuri HTTP headers, ariko hari ikindi gihe aho web ni igice cy'ubwujumbura kandi umusaruro w'HTTPS (secure HTTPS transactions) ni ikintu cyiza cyane.

Merawe, hari umuntu ufite uburyo bwo gukoresha SSL certificates ni byiza. Mu mode ya _subdirectory_ (sub-directory), wowe mushobora gukoresha certificate y'ubwoko bw'ibanga (regular domain). Ibi bitanga mu buryo bwo gukoresha n'ubwoko bw'ibanga, kandi bitanga mu buryo bwo gukoresha LetsEncrypt service cyangwa uburyo bwa mbere. Mu gihe runaka, bitanga mu buryo bwo gukoresha certificate byiza (certificate signing request) n'ubwoko bwa mbere.

Mu mode ya _subdomain_, gukoresha wildcard SSL certificate kigabanya neza n'ubwoko bw'ibanga bwa wildcard kandi kibasha ko certificate cyaba ari cyo cy'ubwoko ku mwezi (root domain) n'ubwo bwose bwo subdomains nta kumenya ibindi byiza.

Ariko, bitangwa ko wildcard SSL certificates bitangira mu gihe cyo gukoresha ibintu n'ibyo bikora Cloudflare, nta cyereka uziho mu enterprise plan cyangwa ukugenzura uko igikorwa cyashobora gukoreshwa DNS gusa, aho uburyo bwo gukoresha caching n'optimization bishoboraga.

Ultimate Multisite yitanga uburyo bwo gutera ubu dicarazo mu gihe cyo gukoresha ibintu n'ibyo bikora WordPress multisites. Gutera iyo addon yisanzwe kizabasha Ultimate Multisite gukoresha credentials za Cloudflare yawe kugira ngo yizera DNS entries ku mwezi (network sites) mu Cloudflare kandi ikora mode y'ubwoko bwa 'proxied'. Mu gihe cyo, umwe subsite w'ubwoko bw'ibanga, iyo ugiye gukoresha, uzabona uburyo bwo gukoresha SSL n'ibindi byiza za Cloudflare.

Kugira ngo umuntu yashobore gukoresha mwezi (domains) yawe, hari uburyo bwo gutera ko umunyamakuru w'ubwoko bw'ibanga ashobora gukora ibintu bibiri: cyane, kwita ku mwezi (hosting) n'SSL certificates za mwezi.

Kwa watu wengi, kutumia Cloudflare ni chaguo rahisi. Mteja anahitaji tu kuweka domain yake kwenye Cloudflare, kuelekeza CNAME kwenda kwenye root domain ya Ultimate Multisite na kuunda (map) domain yake ndani ya Ultimate Multisite ili kuanza kufaidia jina lake la kibinafsi.

Nje ya hili, ni lazima kutafuta sulumavu zingine ambazo ndizo kwa nini Ultimate Multisite inarekomanya orodha ya Watoa Huduma Wenye Ufanisi (Compatible Providers). Hii inatokana na kwamba mchakato wa kuweka DNS na SSL unaweza kuwa mchakato mgumu. Hata hivyo, kwa sababu ya ushirikishwaji wa Ultimate Multisite na watoa huduma hawa, ugumu unakuwa mdogo sana na utaratibu unakuwa unafanywa kiotomatiki.

#### Plugins (Vifaa vya ziada)

Ni jambo la kawaida kwamba utahitaji plugins nyingine ili kutoa utendaji kwa wateja wako au maeneo ya mtandao yako. Je, plugins zote zinafanya kazi na WordPress Multisite na Ultimate Multisite? Jibu ni hutegemea.

Ingawa plugins nyingi zinaweza kuwekwa kwenye WordPress Multisite, kuwasha (activate) na leseni (licensing) hutofautiana kulingana na mwandishi.

Changamoto inakuwa jinsi leseni inavyotumika kwa baadhi ya plugins zinazohitaji leseni kulingana na kila domain. Hii inamaanisha kwamba kwa baadhi ya plugins, msimamizi wa mtandao anahitaji kuwasha leseni kwa kila plugin kwenye kila tovuti mpya kwa mkono.

Kwa hiyo, inaweza kuwa bora kujua na mwandishi wa plugin jinsi plugin yake itakavyofanya kazi na WordPress Multisite na mahitaji au taratibu maalum zinazohitajika ili kuliseni.
