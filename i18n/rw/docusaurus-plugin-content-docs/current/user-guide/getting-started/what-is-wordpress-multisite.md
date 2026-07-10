---
title: WordPress Multisite ni iki?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# Uburyo w WordPress Multisite? {#what-is-wordpress-multisite}

Mu gihe y'ukozi (core), WordPress yituma uburyo rwa ritewe ry'igice cyo gitwa ku 2010 mu gihe y'umukono wa WordPress 3.0. Kugeza uyu munsi, yitwa n'uburyo bishobora gushyiramo ibintu bishya kandi bikorera ubwumvikane bw'ubwumvikane (security).

Mu gihe cyiza, umwe WordPress multisite ashobora guhagaragara nk'iki: Inzego ya dikigizwe (University) ituma uburyo runaka rwa WordPress gishobora kugaragaza, ariko ku gice cyangwa mu gihe cy'ubwoko (faculty), byituma bafite uburyo bwa WordPress bw'ibyo.

##

## Icyiza ni iki WordPress Multisite? {#what-exactly-is-wordpress-multisite}

Multisite ni uburyo rwa WordPress rishobora guhindura ibyo gishobora gushyiramo sita runaka (multiple sites) kugira ngo yashyire ku gihe cy'umukono wa WordPress wujuje. Iyo multisite ituma, uburyo runaka rwa WordPress rwayo rugera mu buryo bwo gutuma ibyo bitwa **network of sites** (uburyo bw'ibyo sita byitwa n'ubwoko).

Iyi network ishyira imbere (file system) (iki bisobanura ko **plugins n'themes byitwa n'ibintu byitwa n'ibintu bishobora gushyiramo byitwa n'ibintu bishobora gushyiramo)**, database, ibintu by'umukono wa WordPress (WordPress core files), wp-config.php, n'ibindi.

Ibi bisobanura ko uburyo runaka rwa WordPress, theme, n'plugin bishobora guhindurwa gusa cyangwa ibyiza gushiramo gusa cyangwa ibyo byose mu network ya sita zikoreshwa, kuko bifite ibintu byitwa n'ibintu byitwa n'ibintu bishobora gushyiramo ku gihe cyo gutuma ibyo sita byose.

Icyemezo cyo hari ni ikindi cyiza cy'ubwumvikane bw'uburyo runaka rwa WordPress multisite, kuko bikugira uburyo bwo gukunda ubushobozi bwo gushyiramo sita zikoreshwa mu gihe cyo gutuma ibyo sita byose.

##

## Subdomain cyangwa Subdirectory? {#subdomain-or-subdirectory}

Hari uburyo runaka runaka rwa gukora WordPress multisite – kandi ugomba guhindura uyu mwe mu gihe utera uburyo runaka rwa WordPress wujuje mu multisite:

**Subdomain:** ex.: [site.domain.com](http://site.domain.com)

…cyangwa

**Subdirectory:** ex.: [yourdomain.com/site](http://yourdomain.com/site)

Uburyo runaka rwa mbere (mode) rwayo rugira ibintu byiza n'ibintu byitwa n'ibintu bishobora gushyiramo uyu mwe mu gihe utera uburyo runaka rwa WordPress wujuje.

Iyi kibazo cyane kumenya iki: iyo utangira ikindi, gukora uburyo bwawe mu gukoresha uburenganzira (network) ku gihe cy'ubwoko bw'ubwoko (subdirectory) cyangwa mu gihe cy'ubwoko bw'ubwoko (subdomain) ni igihe cyiza kumenya ko ni cyo gishiba gukora cyane – cyane cyane iyo hari uburyo bwawe ubushobozi bwo gukoresha ibyo. Ibi byitwa n'ibindi, iyo hari uburyo bwawe mu gukoresha uburenganzira (network) ku gihe cy'ubwoko bw'ubwoko (subdirectory) cyangwa mu gihe cy'ubwoko bw'ubwoko (subdomain) ni igihe cyiza kumenya ko ni cyo gishiba gukora cyane – cyane cyane iyo hari uburyo bwawe ubushobozi bwo gukoresha ibyo.

Icyiza kandi, mbere y'uko utangira iki, hari ibintu byiza kwigira mu maso:

**Uburyo bw'ubwoko bw'ubwoko (Subdirectory Mode)** ni uburyo bwiza cyane ku mpamvu y'ubushobozi bwo gukora no gufata. Ibi bitewe n'uko ibyo byose ni amabwiriza (paths) atangiraho mu gihe cy'umuduro w'ubwoko bw'ubwoko (main domain) (urugero: [yourdomain.com/subsite](http://yourdomain.com/subsite)). Icyo gishobora guhindura ko ukeneye **SSL certificate** ikintu runaka ku gihe cy'umuduro w'ubwoko bw'ubwoko (main domain) kandi iki kigira uburenganzira bwawe mu buryo bwose.

Icyo gishobora gukora, ibyo byitewe n'urugero rwa URL zikoreshwa, Google n'ibindi byinshi by'ubwoko bw'ubwoko (search engines) bizabona ko ibyo bose by'ubwoko bw'ubwoko (subsites) mu gihe cy'ubwoko bw'ubwoko (subdirectory)-based network ni igice cyiza cyane. Icyo gishobora guhindura uko ubuzima bwa SEO (SEO performance) bwo uburyo bwawe bwo gukoresha ibyo byose, urugero: ibintu bikoreshwa mu subsites n'abakoresha bwawe bafiteweza yashobora kwishyira mu buryo bwa landing site ryawe. Icyo kigomba guhinduka cyane kandi hari umwanya w'ubwoba ko gukoresha uburyo bwawe ni igihe cyiza cyane ku SEO performance.

**Uburyo bw'ubwoko bw'ubwoko (Subdomain Mode)** ni igihe cyiza cyane kumenya ko gufata, ariko uko URL zikoreshwa (urugero: [subsite.yournetwork.com](http://subsite.yournetwork.com)) gishobora kuboneka ko "yari yiza" cyane mu buryo bw'ubwoko bw'ubwoko (more professional).

Umwe mu gukora subdomain mode, umutekano w'umwihariko ni SSL (HTTPS) ku rugo rwa mbere yose. Iri hariwo kubera ko amabwira bafunga subdomains mu buryo bishya. Nta, uzafite certificate ya SSL ishyirwaho kandi itandukanye kuri kila subdomain muri network yawe, cyangwa certificate ikomeye cyane cyangwa **Wildcard SSL certificate**. Mu gihe cyiza cyane, hosting providers n'ibyo panels yose bafasha mu gukoresha SSL kandi hari ibindi bifashishije wildcard certificates ku gukora ibyo mu gihe runaka, bikorera kugabanya urugero hagati uburyo bukenewe bwo gukora iki cyangwa se.

Mu gihe cyiza cyane, subsites muri network ya subdomain, amakuru y'amabwira (search engines) bifungura nk'ibindi websites, kandi ibyo bikunda kuri subsite cyose bitandukanye n'ubushobozi bwo SEO bwa subsites byo bitandukanye.

## The Super Admin {#the-super-admin}

Ibyerekezo y'WordPress ya mbere ituma wumva ubushobozi bwo gukoresha abantu bishobora kubyara cyane kandi ubugero bw'ubwoko bw'abantu bifite uburenganzira bukenewe.

Mu WordPress Multisite, hari uburyo bwo kuba umuntu w'ubwoko bukoreye: **the super admin** – kandi hari panel ya abantu (admin panel) ikomeye cyane: **the network admin panel**.

Kugira ngo umukuru y'izina ryashobora gishobora, the super admin agira ubushobozi bukenewe mu network, ariko yashobora gutera ku bikorwa byose byo subsite zacyo, plugins, themes, n'ibindi byose!

Icyiza cyane, iyo ugiye gukora conversion ya single-site WordPress ya mbere ikoresheje multisite, umuntu w'ubwoko y'umwe yashobora gutera ku super admin mu gihe runaka.

Plugins n'themes bishobora guhindurwa cyangwa guhagararirwa kuri network admin panel uburyo bwo gukora iki byo super admins. Subsites admins bashobora gushyira cyangwa guhagaririra ibyo plugins cyangwa themes nta ngaruka, ariko iyo super admin ya network yashyira plugin, ibyo bituma kuba yakoresheje ku subsites byose mu gihe runaka.

_Note: uko uri kumenya, gukunda umuntu kuwezi mu gukoresha uburyo bwo kwitonderwa mu rwego rwawe kandi ukugira uburenganzira bwo super admin, bishobora kugira uburyo bwose bwo gutera umuntu ubanze mu rwego rwawe. Nko mu gihe cy'umwihariko, abandi super admins bashobora gukora ibyo bintu byo kwitondera uburenganzira bwawe, bishobora kugukora umuntu wese mu panel yawe y'admin y'network. Kugira ngo Ultimate Multisite abantu bashobore gufata uburyo bwiza ku bijyanye n'ibyo abandi super admins bashobora gukora, twari twagize add-on itarikiye Support Agents. Iyi add-on ituma wumva umuntu wese mu buryo bwo kwiga - agent - kandi yashobora gukoresha gusa ibyo abikoresho bafite uburyo bwo gukora ibyo ba ari kubyishoboka ku network._

## Icyo cyari cyitandukanye hagati y'subsites n'icyo ntacyari cyitandukanye {#what-is-shared-among-subsites-and-what-is-not}

Nko twagaragaje mbere, umwe mu mahamutse y'WordPress multisite ni ko subsites imweyo yashobora gukoresha uburyo bwo kwiga (configurations), ibyemezo by'ubwoko (core files), themes, plugins, ibintu by'umwihariko bwa WordPress, n'ibindi.

Ariko hari ibintu byo mu buryo bwo kubyara cyangwa gukoresha umuntu wese mu subsite imweyo.

- Urugero, umubyara (uploads folder) uyu mwezi yashobora kuba we. Icyo ryo kwitonderwa n'abantu babiri mu subsite imweyo ntishobora gukoreshwa mu subsite imweyo.
- Subsite imweyo ikunda panel yawe y'admin isanzwe kandi ishobora gukora (activate) cyangwa gufata (deactivate) plugins cyangwa themes nta super admin yashobora kwitondera network.
- Inyandiko nyinshi z'database zishobora gukoreshwa ku subsite imweyo, bigaragaza ko posts, comments, pages, settings n'ibindi byo mu buryo bwo kubyara bishobora kugira uburyo bwose ku subsite imweyo.

## Umuco w'abantu ku WordPress Multisite {#user-management-on-wordpress-multisite}

Icyo cyari cyitandukanye cyane kuri WordPress multisite ni umuco w'abantu (user management). Umubyara wa user ya WordPress ni mu muryango wo gukoresha uburyo bwo kwiga (shared) hagati y subsites nyinshi.

Icyo kishobora gutera ibintu byo guhagarara cyangwa gukora cyane kugeza ku buryo wumva wifuza gukora n'ubwo wuri kubyitondera mu network. Urugero uryo uburyo bwa mbere rurimo:

Urahagaragara umwe WordPress multisite kandi wumva ubushobozi bwo gukoresha subsites ku gihe cy'umwuka ku bantu bashaka kugira e-commerce store.

Ushobora kugera ku umukoresha wako wujuje – John. Urahindura uburyo bwo gukora site kuri John muri network yawe, ugira plugins nyose zikoresho, mbere yego ugira user cyangwa umukoresha ku gihe John ashobora gukoresha store yawe.

Kandi hari umukoresha w'inyuma – Alice. Urahindura ibyo mu gihe cyo, kandi ubu Alice yashobora gukoresha store kuri network yawe niyo.

John na Alice barimo kuba abakoresha bwawe, ariko batari bahereye. Uburyo bwo kwerekana ko iyo store ikoreshwa muri network yacu hari umuntu wiriho.

Ururo rwa mbere, John yashaka gukoresha ibiryo bishya kandi yagufashe mu duka rya Alice. Iyo yitondera gukora umukoresha, atona "email itangwa" (email already in use) error message, iki cyo cyari cyiza cyane kuko John yari wumva ko ari iyo mbere yawe yashaka gukoresha website ya Alice.

Icyo cyari cyaho ni ko umukoresha wa John yari uburyo bwo gukoresha mu gihe cyose cy'network, kandi iyo yitondera gukora account kugira ngo ashobore gukoresha ku duka rya Alice, WordPress yashobora kumenya ko hari user yakurikira email yashaka gukoresha kandi yitondera error.

_Urahereye: Turime ko iyo uburyo bwo gukoresha cyari cyiza cyane mu gihe cyose cy'umwihariko wako, kandi Ultimate Multisite yashobora kugira uburyo bwo kwibanda ku checks zikomeye za user ya mbere, bikabasha kubyara ko hari accounts nyinshi zikoreshwa iyo email. Iyo account ikaba itandukanye n'ubwoko bw'ubwoko (subsite), ibyo bituma risiho ry'ubushobozi bwo gukomeza kwibanda cyo kigaragaza umusaruro w'ubwoko (collision) mu gihe cyo. Mururo rwa mbere, John yari atona error kandi ashobora gukoresha ibiryo bya Alice nta magambo. Iyo uburyo bwo gukoresha ni "Enable Multiple Accounts", kandi ushobora kugaragaza kuri Ultimate Multisite → Settings → Login & Registration._

Ntawe ntabwo ubutabera, ntabwo abantu bashobora gufashishwa cyangwa gukoreshwa mu subsites binyuze mu byerekeza n'abakoresha b'ubusite (users), kandi bashobora kuba na uburenganzira bw'ubusite buvugwa ku subsite, cyangwa se wamukoreshe uburyo bukomeye mu subsite runaka.

## Gusobanura ibyo bikwiriye gukunda (Performance considerations) {#performance-considerations}

WordPress multisite ni ikintu gikomeye cyane mu gihe cyo kubyara ubushobozi bwo gufashisha abusite. Ibi bisobanura n'ibyo bishobora kwerekana ku facta ko [WordPress.com](https://WordPress.com), Edublogs, n'Campuspress ni ibikorwa byihinduwe mu multisite kandi abantu benshi bashobora gufashisha abusite binyabimwe.

Mu gihe cyo gukunda (in theory), nta nyumbura y'abusunso bwo kubyara abusite uyu mwezi w'WordPress multisite, ariko mu gihe cyo gukoresha (in practice), nyumbura y'abusunso bwo kubyara abusite ushobora gufashisha neza bishobora gushyira mu buryo bukomeye ku ngufi n'ibindi byiza: uburyo abusite bishobora kuba bishobora guhinduka (dynamic), ibintu byiza cyangwa plugins zishobora kubyara subsites, n'ibindi.

Kugira inama ya mbere, nk'uko urubuga rwawe rurimo, uburyo rw'ubwoko bw'ubusite bwo kuba bishobora guhinduka (dynamic) ni cyiza kandi ugukoresha plugins zikomeye (plugins), kandi kugabanya inyungu ya plugins (ibyo gukunda ko nta plugin nyinshi) ni ikintu kigisha abantu bashobora gufashisha subsites binyabimwe.

Icyo gikwiriye cyane ni ko kubera ko ni WordPress, ibyo uburyo rwawe rurimo rwo gukunda (performance improvements) rurimo subsite binyabimwe byiza kandi bikorera neza.

Inyumbura ikomeye mu multisite ni database, ariko niba ibindi byose bigaragara neza, hari uburyo bwo kubyara abusunso bishobora gushyirwa mu gihe runaka (nk'uko database sharding solutions).

---
