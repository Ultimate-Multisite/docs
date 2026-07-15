---
title: Ultima Multisitio 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101

Ultimate Multisite estas WordPress Multisite plugin, kiu permesas al viŝi WaaS aŭ Websites as a Service al klientoj. Kiel ni komencas kaj lernas, kiel Ultimate Multisite povas helpi vian biznes kaj klientojn, ni bezonas certan bazan konsciencon.

## La WordPress Multisite {#the-wordpress-multisite}

Ni ĉiuj estas familian kun la standarda instalado de WordPress. Vi aŭ kreas ĝin per la kontrolpanelo de via hospedilo aŭ, por la valiantaj, vi montras novan webserveron kaj bazadon de datumoj, senpliigi la kernajn fajlon kaj komencas la instaliron.

Tio funkcias por milionoj de WordPress sitioj ĉie en la mondo, sed de la perspektivo de agencio aŭ hospedilo, partematu pri volumoj unun momenton.

Ĉĉi tio estas sincronigita por krei unu WordPress-siton aŭ eĉ centan per automatita kontrolpanelo, problemo komencas ŝajni tiel kiam ĝi faliĝas al la administriĝo de ĉi ti sitoj. Sen administraĝo vi estas primara celo por malware. Administriĝo signifas esprimi esforĉon kaj resursajn, kaj kvankam eksteraj instrumentoj kaj pluginoj estas valablos por simpligi la administriĝon kaj administracion de WordPress-sitoj, la fakto, ke klientoj plibonariĝas administra aliro, signifas, ke ĉi ti esforĉoj facile povas esti defeatingitaj.

En sin kerno, WordPress provizas funkcion simple nomita ‘Multisite’, kiu rastumas sin origino ĝis 2010 kiam la WordPress 3.0 elanĝis. Desde ti tempe ĝi ricevis plurajn reviziojn orientitan al introduci novajn funkciojn kaj plibonigi sekurecon.

En esence, WordPress multisite povas esti pensita kiel ĉi tio: Univerzo konservas unan instaliron de WordPress, sed ĉiu fakultato konservas sian propran WordPress-siton.

Kaj ni ĉi tiu deklaro dividiĝu, mi rajt farus rigardi certan bazan terminologio, ne nur en la dokumentado de Ultimate Multisite, sed ankaŭ ĉe la WordPress komunumo.

### La Rete (The Network) {#the-network}

En la termino de WordPress, multisite network estas tio, kie pluraj subsitoj povas esti administriitaj el unuja dashboardo. Se la kreo de multisite network diferencas inter alojantoj, la finaj rezultoj usuale estas pli da direkto en la wp-config.php fakte por informi WordPress, ke ĝi operacis en ĉi tiu specifita modo.

Ekzistas pluraj klare diferencoj inter multisite network kaj independente WordPress instalado, kiujn ni brize diskutis.

#### Subdomajno kontraŭ Subdirektorio (Subdomain vs. Subdirectory) {#subdomain-vs-subdirectory}

Una de la plej tujaj decisionoj, kiun vi bezonas fari, estas ĉu la multisite instalado operos per _subdirektoroj_ aŭ _subdomajn_. Ultimate Multisite funkcias egalne bone kun amba elchaj elektadoj, sed ekzistas certaj arkitektura diferencoj inter la du konfiguracioj.

En la _subdirektorio_ konfiguracio, la network-sitoj heredas kuron bazitan sur la ĉefa domajno nomo. Ekzemple, una network-sito etiketita kiel ‘site1’ havos sin plenan URL-on kiel https://domain.com/site1. En la _subdomajno_ konfiguracio, la network-sito havos sin propran _subdomajn_, derivitan de la ĉefa domajno nomo. Tial sito etiketita kiel ‘site1’ havos sin plenan URL-on kiel https://site1.domain.com/.

Ĉambas amba opcio estas perfekta elektado, sed la uso de _subdomajnoj_ oferas plurajn avantajojn, sed ankaŭ postulas pli da pensadon kaj planadon en sin arkitekturo.

Abzide DNS pri la uzo de _subdirectories_ prezentas relativ simplan problemo. Kiel sita reto de parent path estas simple filoj de la ĉefa domeno, nur unu enskribo de domena nomo bezonas ekzisti por la ĉefa domena nomo. Por _subdominoj_ la problemo estas pli kompleksaj, postulante ili aŭ apartan CNAME enskribon por ĉiu reto sita aŭ wildcard (*) en la DNS-registroj.

Al pli da konsideriĝo estas tiu de SSL kaj la eldonado kaj uzo de SSL-sertifikatoj. En _subdirectory_ konfiguracio unu domena sertifikato povas esti uzata, ĉar la reto sita estas simple vioj de la ĉefa domena nomo. Tial, sertifikato por domain.com bone provizas SSL por https://domain.com/site1, https://domain.com/site2 kaj similaj.

En _subdomain_ konfiguracio la uzo de wildcard SSL-sertifikato estas unu el la plej komunitaj opcioj. Ĉi tiu tipo de SSL-sertifikato provizas enkriptadon por domeno kaj ĝiaj _subdominoj_. Tial, wildcard SSL-sertifikato provizas enkriptadon por https://site1.domain.com, https://site2.domain.com kaj https://domain.com mem.

Eĉ aliaj opcioj ekzistas, ili ofte estas limitaj en rajtado kaj aplikado kaj bezonas pli da konfiguracio kaj konsideriĝo pri la boneco.

#### Plugins kaj Temoj {#plugins-and-themes}

Kion WordPress donas, ti ankaŭ maligas, almenaŭ de la perspektivo de la klastro. En independente WordPress instalita, se la administrator de la sita instalas malan pluginon aŭ ne sekvas ĝian instalacion ĝis nuntemaj, la única vikto kaj rezulto de ĉi tiu agado estas li mem. Tial, se la administrator de la sita instalas malan pluginon sur klastro instalita, ĝi kreas vikton por ĉion siton instalitan en la reto.

Pro tio ĉi tiu kialo, kiam ĝi estas konfigurita kiel multisite WordPress, la sistema eliminas la kapablon de administratoroj de sitioj instali pluginojn kaj temojn kaj en turno migas ĉi tiian kapablon al novkreita rolo de administratoro de la retoj aŭ „superadmino“. Tio privilegia rolo povas deci, ĉu permesas administratorojn de la retaj sitioj vidi aŭ akcesi la menun pluginoj en sia dashboardo kaj, se tiel, ĉu tiaj permesoj estendas al _aktivado_ aŭ _deaktivado_ de pluginoj.

En ĉi tiu sentido la administratoro de la retoj estas responsable por instalado de pluginoj kaj temoj en la reto kaj delegas permesojn por uzi tiuj pluginoj kaj temoj en retaj sitioj. Administratoroj de sitioj ne povas instali pluginojn aŭ temojn aŭ akcesi pluginojn kaj temojn, kiuj ne estas asignitaj al sia sitio.

#### Uzantoj kaj Administratoroj {#users-and-administrators}

En WordPress Multisite ĉiuj retaj sitioj partoprenas la saman bazan databazon kaj tiel partoprenas la saman uzantojn, rolojn kaj kapablon. La plej adekva maniero pensi pri tio estas ke ĉiuj uzantoj estas memberoj de la reto kaj ne de partikula sitio.

Givita ĉi tiun komprenon, ĝi povas esti neideala permesas crei uzantojn kaj pro tio WordPress Multisite eliminas ĉi tiian kapablon de administratoroj de sitioj kaj migas ĉi tiian kapablon al tiu de la administratoro de la retoj. En turna modo, la administratoro de la retoj povas delegi necesajn privilegiajn prizojn al administratoro de sitio por permesas al ili krei uzantajn kontojn por sia propra sitio.

<!-- Screenshot unavailable: WordPress Multisite network user management interface -->

Reiterante la deklaron above, kun malsamaj uzantaj kontoj ŝajnas esti rilata al la sitio, ili fakt estas asignita al la reto kaj tiel devas esti unika sur la reto. Eble ekzistas okazoj, kie nomoj de uzantoj ne povas esti registritaj pro tiu kialo.

Although it is not a foreign concept in enterprise systems, this single source of user registration and authentication is often a difficult concept to understand for people familiar with stand-alone WordPress installations where user administration is somewhat easier.

#### Media {#media}

Where network sites share a single database in a WordPress Multisite, they maintain separate paths on the filesystem for media files.

The standard WordPress location (wp-content/uploads) remains; however, its path is altered to reflect the network site’s unique ID. Consequently media files for a network site appear as wp-contents/uploads/site/[id].

#### Permalinks {#permalinks}

We mentioned before that there are distinctive advantages of _subdomain_ over _subdirectory_ configuration and here it is: paths.

In a _subdirectory_ configuration, the main site (the first site created when the network is established) and network subsites must share the same path leading from the domain name. This has the potential for a great number of conflicts.

For posts, a mandatory /blog/ path is added to the main site to prevent clashes with network sites. This means that pretty permalinks such as ‘Post name’ will be presented as domain.name/blog/post-name/

<!-- Screenshot unavailable: WordPress permalink settings showing /blog/ path in subdirectory configuration -->

In a _subdomain_ configuration this action is not necessary because each network site benefits from complete domain separation and thus need not rely on a single path. They instead maintain their own distinct paths based on their _subdomain_.

<!-- Screenshot unavailable: WordPress permalink settings for subdomain configuration -->

#### Static Pages {#static-pages}

I konfiguracio de _subdirectory_ la potencial por konflikto de nombro se estende hasta las páxinas estáticas como sitio principal e los sitios de rede comparten a la mesma ruta.

Para prevenir esto, WordPress proporciona un método para poner en lista negra ciertos noms de sitios para que no colipin con os noms dos primeiros sitios. Normalmente, o administrador da rede introduciría as rutas raízes das páxinas do sitio principal.

<!-- Screenshot unavailable: Configuración de red de WordPress mostrando nombres de sitios prohibidos para prevenir conflictos -->

Na konfiguracio de _subdomain_ a possibilidade de konflikto de nombro se atenua pola _subdomain_, ya que é única para o sitio de rede e non está relacionada de ninguna manera coa do sitio principal.

### Registo {#registration}

Dentro das configuracións de rede de WordPress Multisite están dispoñibles varias opcións novas de registo de usuarios, que permiten a novos e existentes usuarios crear sitios.

<!-- Screenshot unavailable: Configuración de red de WordPress Multisite mostrando opciones de registro -->

A diferencia das instalacións de WordPress independientes, os sitios de rede non mantén as opcións familiares para permitir o registo de usuarios ou asignar esos registos a roles.

<!-- Screenshot unavailable: Configuración de registro de usuario de sitio independiente de WordPress mostrando opciones limitadas -->

Cando se crean contas de usuario, esas contas son generadas no ao nivel do sitio, senón ao nivel da rede. Así, en lugar de pertenecer a algún sitio en particular, pertenecen á rede. Isto ten algunhas ventajas e desventuras distintivas.

Privalorante WordPress Multisite estis en la biznes de novino kaj informacio. Vi ekstilasis la multisite kaj tiam kreis retoj de sitoj por financo, teknologio, entretenado kaj aliaj interesa. Vi plibonigas la kontrolon super plugin-oj kaj temoj. Ĉiuj reta sita tium aldatigas pli grandan nivelon de kontrolon super la ŝuto kaj la uzanto-ekspriencon de sia reta sito ol ĉe postaj tipoj aŭ regularaj kategorioj de postoj.

En ĉi tiu sens, kiam uzanto logas in, li logas in al la retoj kaj finvive logas in al ĉiu reta sitio ankaŭ por doni seninteran eksperiancon. Se via nova sito estas bazita sur subskribon, tio estas la ideala solvo kaj rezulto.

Se tamen la intenda natura kaj celo de la multisite estis oferi disparaj retoj kiuj ne havas rilaton al unu la alia, tio estas prate malfacile necesas eksteraj aŭ pli da plugin-oj por manipuli uzanto-rolojn.

### Domeno kaj SSL {#domain-and-ssl}

Kies vi parolas pri instalado de WordPress Multisite, kiu prate subiras nian atenton – Wordpress.com. Tio estas la plej vasta ekzemplo de WordPress multisite kaj demonstras ĝia vastajn kapablon por esti personaligita kaj moldita por plenumi celon.

Tiam en la moderna interreto la uso de SSL estas prate obligatoria, kaj retoj administratoroj de WordPress multisite tium pronto prezentitaj al ĉi tiuj desafiajoj.

En konfigurado de _subdomeno_, sitoj estas kreitaj bazitaj sur la radika domena nomo. Tial sito etiketita kiel ‘site1’ estas kreita kiel ‘site1.domain.com’. Traŭ la uso de wildcard SSL-sertifikato, retoj administratoro povas sukcese adresui ĉi tiun desafiancon kaj doni SSL-kriptadon por la retoj.

WordPress Multisite kontena funkcionon domen-mappado, kiu permemas la retoj de retoj por partnerecoj de reto (network sites) asociigi domeno nombroj personalaj aŭ domeno nombroj diferencaj de la radika domeno de la retoj.

Por administratoroj de retoj tio prezentas alian nivel kompleksa, tiaz en konfigurado de domen-nombroj kiel ankaŭ en la emodo de eldonado kaj manutenco de SSL-sertifikatoj.

En tia grado, ĉambon WordPress Multisite donas la medio por permemi [www.anotherdomain.com](http://www.anotherdomain.com) mappi al ‘site1’, sed la administrator de retoj restas kun la tio, ke li devas eksterne administra DNS-entroj kaj implementado de SSL-sertifikatoj.

## Ultimate Multisite {#ultimate-multisite}

Kiam la diferenco inter independente WordPress instalado kaj Multisite instalado estas komprenita, mi ŝanĝu alvokon de kiel Ultimate Multisite estas la ultim la arsenal por doni Vikto kiel Servico (Website as a Service - WaaS). Pensi pri Wix.com, Squarespace, WordPress.com kaj tiam pensi pri propra servco.

Sub la ĉapo, Ultimate Multisite uzas WordPress Multisite, sed li faras tio en maniero kiu ne nur solvus la multaj retoj de reto administratoroj fariĝantaj kun multisite instaladoj, sed plive plibonigas la kapablon permemi multajn uzutilojn.

En la sekvaj sekcioj ni rigardos multajn uzutilojn kaj necesajn konsideracojn por subteni tiuj kazoj.

### Uzutiloj {#introduction}

#### Kazo 1: Agenzio {#use-cases}

Tipike la bazaj skilibraj de agencio estas en la dezajno de Vikto kun aspektoj kiel sia hospedado aŭ marketado listita kiel alian servco.

Por agencioda, Ultimate Multisite ofresas una valora exceptionalan per sa sintezi la kapasito por hospendi kaj administra plurajn sitiojn sur unu unua platformo. Tio estas tiel pli grava por agencioda, kiuj standardizas siajn dezajnon sur partaj temoj kiel GeneratePress, Astra, OceanWP aŭ aliaj povas uzi la kapablo de Ultimate Multisite por aŭtomate aktivi ĉi ti temojn por ĉiu nova sitio.

Simile kun la abundon de agordo por agencioda preco por komuna kaj populara pluginoj, la uso de Ultimate Multisite pervasigas agencioda investojn per provizi komun platformon, kie pluginoj povas esti instalita, maintenita kaj uzata.

La uso de konfiguracio estas probable necesa, kaj fortunately Ultimate Multisite faras ĝin tre facilan por faciligi domeno-mappadon kaj SSL-sertifikatojn kun siaj integritaj por pluraj popularaj hospodantoj kiel Cloudflare kaj cPanel.

Tiel per uzi unu el ĉi ti provizantoj aŭ per plazti Ultimate Multisite malvende Cloudflare aspektoj kiel la administra de domenoj kaj SSL-sertifikatoj fariĝas relativefacile.

Agencioda, kiuj preferas sekvi tian strejan kontrolon sur la kreo de sitioj, komprenos la facilcon per kiu ili povas krei sitiojn kaj asociigi sitiojn kun klientoj kaj planoj per la simpligita interfaco de Ultimate Multisite.

![Ultimate Multisite site management interface](/img/admin/sites-list.png)

Strejan kontrolon sur pluginoj kaj temoj estas mantenita per produkto bazita per tiu intuitiva interfaco, kiu pervasigas, ĉu pluginoj kaj temoj povas esti prezentita aŭ malvende kiel sia aktiva estado kiam ili instancias por nova sitio.

![Product plugin limitations interface](/img/config/product-plugins.png)

Temoj ofertas similajn funkcionon, pernek ke temoj partikaj temi akivita aŭ sur la kreo de sitaĉio.

![Product theme limitations interface](/img/config/product-themes.png)

Agencoj atingos paŝan timenton kun Ultimate Multisite, permi infiniti al ili fari tion, kion ili plej bone faras – dezajni ekseciajn web-sitaĉiojn.

#### Caso 2: Niche Provedanto {#case-1-an-agency}

E existe malalta frazo kiu diras: „faro unu thing kaj faru ĝin bone“. Por multaj specialistoj tio signifas krei produkton aŭ servon ĉirkaŭ unu baziga ideyo.

Ĉu vi estas avid golfejo, kiu promove sitaĉiojn al kluboj, aŭ vi estas avid esports-gamiisto, kiu donas web-sitaĉiojn al clanoj? Unpersona, kiu promove rezerviĝservon al restoracioj, perhaps?

Por multaj kialoj vi volus doni servojn bazitajn sur komuna ramko kaj platformo. E ŭi estas ke vi dezainis aŭ investis en specialaj pluginoj por doni la necesan funkcionon, aŭ eble estas la kazo, ke industrio bonepraktikoj postulas jakion de standardigita approbo al dezajno.

Unaj inovativaj funkcioj de Ultimate Multisite estas la uso de template sitaĉioj. Template sitaĉio estas tiu, kie temo estis instalita kaj akivita, necesaj pluginoj instalita kaj akivita kaj ekzemplaj postoj aŭ paĝoj kreita. Kiam klientas kreas novan sitaĉion bazitajn sur la template, la enontoj kaj ŝanĝoj de la template estas kopitaj al la novkreita sitaĉio.

Por provedanto de niche-sitaĉioj kaj servoj tio donas neparignian avantajon en la kapablo instante krei sitaĉion respondan por fari kun personalaj pluginoj kaj dezajno. La klientulo nur bezonas doni la plej minimalan input por kompleti la servon.

Depende de la necesoj, tanto la configuración de _subdirecciones_ como la de _subdominios_ pueden ser adecuadas; en cuyo caso las opciones arquitectónicas estarían entre un certificado SSL simple para _subdirectorios_ o un certificado SSL comodín (wildcard) para _subdominios_.

#### Caso 3: Alojamiento Web de WordPress {#case-2-niche-provider}

Hay muchísimas maneras de alojar sitios de WordPress, pero rara vez es tan simple como proporcionar espacio web a un cliente con una versión preinstalada de WordPress. Esto se debe a que muchas decisiones y consideraciones deben juntarse para ofrecer un servicio significativo.

Ultimate Multisite destaca en esta área al proporcionar una solución integral lista para usar (turnkey solution) para el alojamiento de sitios de WordPress. La solución incluye los mecanismos centrales para proporcionar servicios de suscripción, recaudación de pagos, formularios de pago (checkout forms), cupones de descuento y comunicaciones con clientes.

Gran parte del trabajo integral necesario para instalar, configurar y mantener correctamente un WordPress Multisite es facilitado por Ultimate Multisite en la medida en que los administradores de red solo necesitan considerar aspectos relacionados con su servicio o nicho, como niveles de producto, precios y ofertas de servicio.

Para los desarrolladores que desean integrarse con Ultimate Multisite, la solución también ofrece una API RESTful completa y Webhooks para notificaciones de eventos.

Sin depender de una miríada de plugins y licencias externas, Ultimate Multisite proporciona una solución rica en funciones y comparable a la de Wix, Squarespace, WordPress.com y otros.

### Consideraciones Arquitectónicas {#case-3-wordpress-web-hosting}

Aunque no es una guía completa, los siguientes puntos deben servir como orientación para la selección correcta de tecnologías que soporten una instalación de Ultimate Multisite.

#### Alojamiento Compartido vs. Dedicado {#architecture-considerations}

Malheureusement, ne ĉiuj alojigantoj estas egalaj kaj certaj praktikantaj ekstremajn servern densojn. La malgrava-costaj alojigantoj tipike generas revenon per la maksimado de servern densaĵo. Tial via Ultimate Multisite instalado povas esti nur unu el pluraj centaj sitoj sur la sama servero.

Sen kun la necesaj ŝprizoj de la alojiganto, sitoj sur partaj serveroj ekspericie la problemin "zverba vizino" (noisy neighbour). Tio signifas, ke unua sita sur la sama servero konsumas tanta resursoj, kaj aliaj sitoj devas konkurado por la restaj resursoj. Tiel tio ofte manifestiĝas kiel sitoj, kiuj estas lentaj aŭ ne respondis en la ĝusta tempo.

Kiel alojiganto de web-hostado, la rezultoj signifas, ke via klientoj ekspericie malaj velocĵojn, malan rankon kaj altajn bounce ratojn, kio ofte rezultigas klientajn fordon (churn), ĉar ili serĉas servojn en aliaj loko.

Kial sejo, barĝeco ne signifas boneco.

Ultimate Multisite estas konata per laborado kun pluraj bonaj alojigantoj kaj integriĝas bone kun ilia aĉo por provizi funkcio kiel domajno mapado kaj aŭtomatan SSL. Ti alojigantoj valoras performon kaj provizas pli altan nivelon servon ol parta alojado.

Por liston kompatibilaj alojigantoj kaj kompletan instruojn por ĉiu, kontrolu la dokumentadon de Kompatiblaj Aloigantoj.

#### Performaj Konsideroj {#shared-vs-dedicated-hosting}

Ultimate Multisite ne estas lenta aplikeco; ŝajne, ĝi estas remarkable bone. Tial, tamen ĝi funkcias nur kiel bone kiel la bazala aplikeco kaj infrastrukturo kaj povas uzi nur tijn, al kiuj ĝi havas alparencon.

Malkolektu ĉi tiun: Vi estas la retoj administratoro de Ultimate Multisite instalado kun 100 sitoj. Kelkaj el tiuj sitoj funkcias bone kaj atrakfiscias plurajn vizitantojn da web-sitaj ĉiuj tian tagon.

Ĉi tiu scenaro ŝanĝiĝos al pli malgranda skala, ĉu oni parolas pri unu ĝis kvin sitoj, sed antaŭ longa problemo de skala estas evidenta.

Se la unua Ultimate Multisite sitio ne estas monitorita, ĝi devas respondi al la petoj de ĉiuj vizitaroj al la sitoj. Ti petoj povus esti por dinamikaj PHP-paĝoj aŭ statikaj asetoj kiel stiletoj, javascript aŭ mediofileoj. ĉu unu aŭ cent sitoj, ĉi ti taskoj fariĝas repetitiva, monotonaj kaj malutilaj. Ĝi estas ne necesa uzi CPU-potanton kaj memorigon por procesi PHP-fileon, se la rezulto estas la sama statika informo por ĉiu peto.

Simile unu peto por PHP aŭ HTML-paĝo generas multajn sekvantajn petojn por skriptoj, stiletoj kaj imagen fileoj. Ti petoj estas direkte targetita al via Ultimate Multisite servero.

Unu facile povas solvari ĉi ti problemin per moderniĝi la serveron, sed tio ne fixas sekundaran problemin – geografan latencojn. Nur multaj serveroj en multaj lokoj povas bone adresui ĉi ti problemin.

Pro tio la plej multaj retoj administratoroj uzas front-end caching solutionojn kaj content distribution networks (CDN) por plenumi petojn por statikaj paĝoj. Plenumi ĉi ti petojn kaj servas asetojn antaŭ ol la peto atingas la serveron savas procesajn ressourcejn, eliminas tardojn, evitas ne necesajn modernizojn kaj maksimigas teknologian investon.

Ultimate Multisite inkluzas sofistikitan Cloudflare add-on, kiu permesas retoj administratoroj plazmi sin malhaŭte de Cloudflare kaj uzi ne nur ĝiaj caching kapabilitojn, sed ankaŭ DNS-hostadon, SSL-sertifikatojn kaj sekureco mekanismojn.

#### Backup'oj {#performance-considerations}

Unu povus peti 50 homojn konsilo pri backup'oj kaj ricevi 50 malsamaj opiniojn pri backup strategioj. La respondo estas: ĝi dependas.

Kion ne disputata estas, ke rezervoj de la sistemaj staton estas necesaj kaj ke estas pratezble, ke ili estas malvokej gviditaj de la providanto, partikile tiu kiu oferas servon administrita. Konsekvence klientoj uzas la retoj administratoron por doni kaj administra ĉi tijn servojn. Kion la retoj administratoro uzas, estas kompleta diferenca problema.

Por la caŭzo de ĉi tiu sekcio, la ni akceptas, ke rezervoj estas momentaj kopioj de la staton de la sistemo en la tempe, kiam la rezervado komencas. Simple digite, kion la staton de la sistemo estas en la tempe de la rezervado, tiu staton estas kaptita kaj blokita en la rezervado.

Con ĉi tiu kompreniĝo, respondo pri kiel atingi la rezervojn kaj kio plej bone por via aĉeta ĉirkaŭa (environment) dependos el viaj bezonoj kaj el la kapablo de la alojiganto provizi tijn bezonojn. Tial, en ordino de plej opinvia al plej malopinvia, la sekvaj opcioj devas doni certan gvidon.

#### Snapshots (Kapturoj) {#backups}

Snapshots estas la argentaj bulletoj por rezervoj ĉar ili estas facila, nekomplika (finankomita pri restorado) kaj "simple funkcias". Tial ili bezonas jaka helpon de via providanto kaj pli aplika nur se vi havas VPS (Virtual Private Server) aŭ similajn. Diversaj providantoj listitaj en nia dokumento "Compatible Providers" oferas rezervojn, kiuj bezonas ne plu intervenado aŭ konsiderado de la retoj administratoro.

Kiel tradicionale backup'oj atingas filoj kaj bazojn, snapshot atingas la tutan diskon. Tio signifas ne nur la datum de la sitio estas kaptita en la snapshot, sed ankaŭ la operacian sistemo kaj la konfiguracion. Por multaj tio estas aparta avantaĝo, ĉar nova sistema povas esti kreita subteinstante el snapshot kaj portita en operacio por substitui malfunan instancon. Simile, la recovra procezo por reteni filojn nur postulas atendi la snapshot imagon kiel diskon al ekzista instanco, tiel ke filoj povas esti aksesitaj kaj kopitita.

Snapshot pli povas attiraj plian koston de la alojigo providanto, sed ĝi estas seguropoliso kontraŭ akcidentoj.

#### Eksteraj Skriptoj {#snapshots}

Pare ŝajnas ne fari manko de eksteraj skriptoj kaj solvoj por backupi WordPress kaj MySQL resurs, kaj tiĝi bone por Ultimate Multisite ĉar ĝi estas WordPress plugino, kiu uzas la filesystem kaj bazon de WordPress. Tiel solvo kiu backupas WordPress sitojn tute konvencas la bezonojn de Ultimate Multisite.

Ni ne povas rekomendas unu skripton super alian, sed nia ĝenerala konsilo estas fari plurajn testojn de backupado kaj recovro por certigi, ke rezultoj estas ŝatitaj, kaj "certi diri certan" per kontinua evalui la skripton kaj ĝian funkcion specifajmente kie iu forma strategio de diferenca backupo estas aplikita.

Ĝi devas noti, ke ĉi ti skriptoj, dum ili funkcias, plibendas sistemn beban, kion bezonas konsideri.

#### Pluginoj {#external-scripts}

Pratiquement ne ekzistas problemi en WordPress, kiun ne povas esti solvita per plugino, kaj se la administri eksterajn skriptojn ne estas via kompetenco, tio eble estas la plej bona opcio.

Kiel pluginaj varian estas en opcio kaj funkcio, sed ili faras la same function: kopii de WordPress-fajiloj kaj bazdatankonto. Post tio, la funkcio diferencas, ĉar certaj pluginoj povas envipliigi la rezervojn al eksteraj servoj kiel Google Drive aŭ Dropbox, aŭ al iu kompatabla objekta storo servco kiel S3, Wasabi aŭ aliaj. La pli komprenaj pluginoj provizas diferenca rezervojn aŭ iu strategion por rezervi nur datumojn, kiuj ŝanĝis, por konservi eksterajn storo kostojn.

Kie vi selektas vian pluginon, zorguĝu pri la verigo ke li estas multisite-kompata. Laŭ tio, dum la rezervado funkcias, vi povas esperi temporan ŝarĝon sur la servero ĝis ke la proceso finas.

#### Domeno kaj SSL {#plugins}

Multa estis diskita pri domeno nomoj en multisite _subdomajno_ modo. Pratiquement universala solvo por retoj administratoroj estas uzui wildcard DNS-entrojn.

![Wildcard DNS entry configuration example](/img/config/settings-domain-mapping.png)

Tio tipa DNS-entro sukcese rezolu subdomajn kiel ‘site1.domain.com’ kaj ‘site2.domain.com’ al IP-adreso 1.2.3.4, tiel suportante Ultimate Multisite kaj pli grandan WordPress Multisite uzante _subdomajno_ modon.

Tio povas fari perfekt por HTTP ĉar la celo hosto estas legita el HTTP-kapitaĵoj, sed raramente la web estas tanta simpla ĉiutankor, kie sekura HTTPS transakcio estas pratej obligata.

Fortuntate, estas estas facila opcioj por SSL-sertifikatoj. En _subdirectory_ modo oni povas uzi regularan domen sertifikaton. Ti ĉi ti estas facile kaj libre da provizendiloj, kiuj uzas la libra servon LetsEncrypt aŭ alia sintron. Al alia, ili estas komerĉe disponibile de autoritatiloj, se vi povas generi la sertifikadon peton (CSR).

Por _subdomain_ modo la uzo de wildcard SSL-sertifikatoj paros perfektaj kun wildcard domeno kaj permesas al la sertifikato esti autorativa por la radikdomeno kaj ĉiuj _subdomeno_ sen ekstrema konfigurado.

Tamen, devas esti notita, ke wildcard SSL-sertifikatoj ne povas funkcii kun servoj kiel Cloudflare, se vi ne estas sur enteprenor plano aŭ sidas la enmigron al DNS nur, kio permesas ĉion la cacheon kaj optimadon eliri.

La out-of-the-box Ultimate Multisite provizas solucion al ĉi tiu problemo, demonstrante nian vastan ekspertencon kun la bezonoj de WordPress multisite'oj. Aktivado de ĉi tiu simplej addon permesas al Ultimate Multisite uzi vian Cloudflare kredencojn por aŭtomate aĉeti DNS-entron por retoj sur Cloudflare kaj fari ilian modon "proxied". Tio permesas, ke ĉiu reta subdomeno, kiam kreita, haju la plienan protektion kaj benefitojn de Cloudflare inkluzive SSL.

Depende de la naturo kaj celo de via Ultimate Multisite instalado, oni povas necesi ke klientoj uzu siajn proprajn domenojn. En tia kazo la reta administrator estas aktabita por solvi du problemoj: unu, la alojado de la domeno-nombo kaj du, SSL-sertifikatoj por tiu domeno.

Por multaj, la uso de Cloudflare estas facila opcio. La kliento nur devas plazare sian domeno en Cloudflare, apuntare CNAME al radiko domeno de Ultimate Multisite kaj mapi sian domeno en Ultimate Multisite por komenci profiti el sian personala domena nomon.

Ekziste ekaj laŭ tiu ĉi situacio, alternativo solviĝas necesiĝas, kio kial Ultimate Multisite rekomendas liston Kompatibilaj Providantoj. Tio ĉar la procezo de konfigurado de DNS kaj SSL povas esti nefacila proceso. Tamen, kun la integriĝo de Ultimate Multisite kun ĉi ti providantoj, la kompleksaĵo estas multe malita kaj la procedura estas automatigita.

#### Plugins {#domain-and-ssl-1}

Ĝi estas bone probable, ke vi necesas pli da plugins por doni funkcionon al viaj klientoj aŭ retoj de sitoj. Ĉu ĉiuj plugins laboras kun WordPress Multisite kaj Ultimate Multisite? Tio dependas.

Mekzer la plej multaj plugins povas esti instalitaj en WordPress Multisite, sed ilia aktiva kaj licenco variĝas de autoro al autoro.

La tio estas la tio: kiel licenco estas aplikiita kun certaj plugins, kiuj postulas licencon per domeno. Tio signifas, ke por certaj plugins la retoj administrator devas manuvece aktivi la licencon por ĉiu plugin sur ĉiu nova sitio.

Tial, Ĝi povas esti plej bone kontroli kun la autoro de la plugin kiel ilia plugin laboros kun WordPress Multisite kaj ĉu estas necesaj specialaj kravoj aŭ proceduro por licenci it.
