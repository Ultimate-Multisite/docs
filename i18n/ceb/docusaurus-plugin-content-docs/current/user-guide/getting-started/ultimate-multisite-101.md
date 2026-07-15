---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101

Ang Ultimate Multisite kay usa ka WordPress Multisite plugin nga nagtugot kanimo sa pagtanyag og WaaS o Websites as a Service ngadto sa mga customer. Sa dili pa kita magpadayon ug makat-on unsaon pagtabang sa imong negosyo ug sa mga customer, kinahanglan nato kining kuhaon ang pipila ka pundasyon nga kahibalo.

## Ang WordPress Multisite {#the-wordpress-multisite}

Kadaghanan kanato pamilyar sa stock-standard installation sa WordPress. Mahimo nimo kini himuon pinaagi sa control panel sa imong hosting provider o, para sa mga maisog, mag-set up og bag-ong web server ug database, magdownload sa core files ug magsugod sa proseso sa pag-install.

Kini nagtrabaho alang sa milyones sa WordPress sites sa tibuok kalibutan apan gikan sa panan-aw sa usa ka agency o hosting provider, atong hisgutan ang mga volume sulod sa usa ka minuto.

Bisan tuod kini dali ra nga maghimo og usa ka WordPress site o bisan usa ka gatos pinaagi sa automated control panel, ang mga problema magsugod na makita kung mahimong pagdumala niini ang mga sites. Kung dili ma-manage, ikaw usa ka pangunang target alang sa malware. Ang pag-manage nagpasabot og usa ka paningkamot ug mga resources ug bisan tuod adunay mga external tools ug plugins nga magtabang sa pagpadali sa management ug administration sa WordPress sites, ang kamatuoran nga ang mga customer nagpabilin og administrative access nagpasabot nga kining mga paningkamot dali ra mapildi.

Sa sulod niini, ang WordPress naghatag og usa ka feature nga gitawag nga ‘Multisite’ nga nagtrabaho gikan sa 2010 sa paglunsad sa WordPress 3.0. Sukad niadto kini nakadawat og pipila ka revisions nga nagtumong sa pagpaila og bag-ong mga feature ug pagpalig-on sa seguridad.

Sa esensya, ang usa ka WordPress multisite mahimong hunahunaon nga mao kini: Ang usa ka Unibersidad nagpabilin og usa ka installation sa WordPress apan matag faculty nagpabilin og ilang kaugalingong WordPress site.

Para mas maintindihan niining mga pulong, tan-awon nato ang pipila ka basic nga termino nga naa dili lang sa dokumentasyon sa Ultimate Multisite kundi bisan sa tibuok WordPress community.

### Ang Network {#the-network}

Sa konteksto sa WordPress, ang multisite network kay diin daghang subsites pwede ma-manage gikan sa usa ra ka dashboard. Bisan pa nga nagkalain-lain ang paghimo og multisite network depende sa hosting provider, ang resulta kasagaran kay pipila ka dugang instruksyon sa file nga `wp-config.php` para ipahibalo sa WordPress nga nag-operate kini sa espesyal nga mode.

Naa'y daghang kalainan tali sa usa ka multisite network ug usa ka stand-alone WordPress installation nga atong ipasabot gamay.

#### Subdomain vs. Subdirectory {#subdomain-vs-subdirectory}

Ang usa sa labing dali nga desisyon nga kinahanglan nimo buhaton kay kung ang multisite installation mag-operate ba gamit og _subdirectories_ o _subdomains_. Ang Ultimate Multisite nagtrabaho bisan unsa ka maayo sa duha, pero naa'y pipila ka architectural differences tali sa duha ka configuration.

Sa _subdirectory_ configuration, ang mga network site makuha ang usa ka path base sa main domain name. Pananglitan, ang usa ka network site nga gitawag og ‘site1’ adunay iyang tibuok URL isip https://domain.com/site1. Sa _subdomain_ configuration, ang network site adunay kaugalingon niyang _subdomain_ nga gikan sa main domain name. Busa ang usa ka site nga gitawag og ‘site1’ adunay iyang tibuok URL isip https://site1.domain.com/.

Bisan pa nga pareho kining duha ka opsyon, ang paggamit sa _subdomains_ naghatag og pipila ka mga bentaha pero nanginahanglan usab og mas daghang hunahuna ug pagplano sa iyang architecture.

Sa bahin sa DNS, ang paggamit sa mga _subdirectories_ medyo simple lang ang problema. Tungod kay ang mga network sites kay mga anak ra sa parent path, kinahanglan lang og usa ka domain name entry para sa main domain name. Para sa mga _subdomain_, mas komplikado gamay kini ug nanginahanglan og usa ka separate CNAME entry para sa matag network site o usa ka wildcard (*) entry sa DNS records.

Ang laing butang nga kinahanglan atong hunahunaon kay ang SSL ug ang pag-issue ug paggamit sa mga SSL certificates. Sa _subdirectory_ configuration, usa lang ka domain certificate ang mahimong gamiton tungod kay ang mga network sites kay simpleng mga path sa main domain name. Busa, ang usa ka certificate para sa domain.com makahatag og SSL alang sa https://domain.com/site1, https://domain.com/site2 ug uban pa.

Sa _subdomain_ configuration, ang paggamit og wildcard SSL certificate usa sa labing kasagarang pamaagi. Kini nga klase sa SSL certificate naghatag og encryption para sa usa ka domain ug sa mga _subdomains_ niini. Busa, ang wildcard SSL certificate makahatag og encryption para sa https://site1.domain.com, https://site2.domain.com ug bisan pa mismo sa https://domain.com.

Bisan pa nga naa'y uban pang mga opsyon, kini kasagaran limitado sa sakop ug aplikasyon ug nanginahanglan og dugang configuration ug konsiderasyon bahin sa angay ba kini gamiton.

#### Plugins ug Themes {#plugins-and-themes}

Unsa may gihatag sa WordPress, gikuha usab niini, labi na gikan sa panan-aw sa customer. Kung usa ka stand-alone WordPress installation kung ang site administrator mag-install og dili maayo nga plugin o dili magpabiling updated ang ilang installation, ang bugtong biktima ug kadaot niining lihok mao ang ilang kaugalingon. Apan, kung ang usa ka site administrator mag-install og dili maayo nga plugin sa multisite installation, naghimo kini og biktima sa matag site nga na-install sa network.

Tung rason ani kung i-configure isip multisite WordPress, ang abilidad para sa mga site administrator nga mag-install og plugins ug themes gikuha na sa mga site administrators ug gihatag kini ngadto sa usa ka bag-ong gihimo nga network administrator o 'super admin' role. Kini nga privileged role maoy magdesisyon kung tugotan ba niya ang mga administrator sa network sites nga makakita o maka-access sa plugins menu sa ilang dashboard, ug kung mao, kung kini nga mga permiso naglakip ba sa pag-activate o pag-deactivate sa mga plugins.

Hangtod niini, ang network administrator maoy responsable sa pag-install og plugins ug themes sa network ug maghatag og mga permiso aron gamiton kining mga plugins ug themes sa mga network sites. Ang mga site administrator dili makapag-install og plugins ug themes o maka-access sa mga plugins ug themes nga wala gihatag sa ilang site.

#### Mga User ug Administrator {#users-and-administrators}

Sa WordPress Multisite, ang tanang network sites nag-share sa parehas nga database ug busa nag-share sila sa parehas nga mga user, roles, ug capabilities. Ang labing maayo nga paagi sa paghunahuna niini mao nga ang tanang users miyembro sa network ug dili lang sa usa ka partikular nga site.

Tungod niining pagsabot, mahimong dili maayo nga tugotan ang paghimo og mga user ug tungod niana gikuha na kini sa mga site administrator ug gihatag kini ngadto sa network administrator. Sa balik, ang network administrator makahatag sa kinahanglanon nga mga privilegio sa usa ka site administrator aron mapahintulutan sila sa paghimo og mga user account para sa ilang kaugalingong site.

<!-- Screenshot unavailable: WordPress Multisite network user management interface -->

Pagbalik sa punto sa ibabaw, bisan pa nga ang mga user accounts daw may kalabotan sa site nga ilang anaa, sila sa tinuod gihatag sa network ug busa kinahanglan nga unique sa tibuok network. Mahimo adunay mga kaso diin ang usernames dili matagmay aron ma-register tungod niini nga rason.

Bisan pa dili kini usa ka bag-o nga konsepto sa mga enterprise system, kasagaran lisod kining masabtan para sa mga tawo nga pamilyar sa stand-alone WordPress installations diin mas dali gamiton ang pagdumala sa user.

#### Media {#media}

Kung ang mga network site nag-share og usa ka database sa WordPress Multisite, sila magpabilin og lahi nga mga ruta (paths) sa filesystem para sa media files.

Ang standard na lokasyon sa WordPress (wp-content/uploads) nagpabilin; apan kini mausab ang path aron ipakita ang unique ID sa network site. Tungod niini, ang mga media files para sa usa ka network site modaghan isip wp-contents/uploads/site/[id].

#### Permalinks {#permalinks}

Gihisgutan na nato kani nga adunay lahi nga mga benepisyo ang _subdomain_ kumpara sa _subdirectory_ configuration ug ania kini: mga path.

Sa usa ka _subdirectory_ configuration, ang main site (ang unang site nga gihimo kung gibutang ang network) ug ang network subsites kinahanglan mag-share sa parehas nga path nga nagdala gikan sa domain name. Kini adunay potensyal alang sa daghang awayan (conflicts).

Para sa mga posts, usa ka mandatoryong /blog/ path ang idugang sa main site aron mapugngan ang pagbangga sa mga network sites. Nagpasabot kini nga ang nindot nga permalinks sama sa ‘Post name’ ipakita isip domain.name/blog/post-name/.

<!-- Screenshot unavailable: WordPress permalink settings showing /blog/ path in subdirectory configuration -->

Sa usa ka _subdomain_ configuration, kini nga aksyon dili kinahanglan tungod kay ang matag network site makabenepisyo sa kompleto nga paghiwalay sa domain ug busa dili na kinahanglan magsalig sa usa ka path. Sa baylo, sila nagpabilin og ilang kaugalingon nga lahi nga mga path base sa ilang _subdomain_.

<!-- Screenshot unavailable: WordPress permalink settings for subdomain configuration -->

#### Static Pages {#static-pages}

Sa configuration sa _subdirectory_ (sub-directory), ang posibilidad nga magka-conflict sa paghimo og mga ngalan naglakip na sa static pages isip main site ug network sites pareho ra ang path.

Aron mapugngan niini, ang WordPress naghatag og paagi aron ma-blacklist ang pipila ka mga ngalan sa site aron dili sila mag-conflict sa ngalan sa unang site. Kasagaran, ang network administrator mosulod sa root paths sa mga pages sa main site.

<!-- Screenshot unavailable: WordPress network settings showing banned site names to prevent conflicts -->

Sa configuration sa _subdomain_, ang posibilidad nga magka-conflict sa ngalan giatiman pinaagi sa paggamit sa _subdomain_ kay kini unique sa network site ug dili may kalabotan sa main site.

### Registration {#registration}

Sulod sa network settings sa WordPress Multisite, naa'y pipila ka bag-ong opsyon sa user registration nga maghatag og kahigayonan sa mga bag-o ug existing users nga makakagamit og sites.

<!-- Screenshot unavailable: WordPress Multisite network settings showing registration options -->

Dili sama sa stand-alone WordPress installations, ang network sites dili nagpabilin sa pamilyar nga mga opsyon aron tugotan ang user registrations o ihatag kini ngadto sa roles.

<!-- Screenshot unavailable: WordPress standalone site user registration settings showing limited options -->

Kung maghimo og user accounts, kining mga account kay gihimo sa network level. Busa imbes nga molambigit sa bisan unsang usa ka particular nga site, sila molambigit sa tibuok network. Kini adunay pipila ka mga espesyal nga kaayohan ug disbentaha.

Pananglitan, isipon nga ang imong WordPress Multisite kay nagtrabaho sa balita ug impormasyon. Maghimo ka og multisite ug dayon maghimo og mga network site para sa pinansyal (finance), teknolohiya (technology), entertainment, ug uban pang mga interes samtang nagpabilin og kinatibuk-ang kontrol sa mga plugin ug theme. Ang matag network site adunay mas dako nga lebel sa kontrol sa hitsura ug kasinatian sa user sa ilang network site kaysa sa custom post types o regular post categories.

Sa maong paagi, kung ang usa ka user mag-login sila mag-login sa network ug sa katapusan mag-login usab sa matag network site aron maghatag og walay kalainan nga kasinatian (seamless experience). Kung ang imong bag-ong site subscription-based kini, kini mao ang perpektong solusyon ug resulta.

Bisan pa, kung ang gituyo nga kinaiya ug katuyoan sa multisite kay magtanyag og mga disparate network sites nga walay relasyon sa usag usa, halos kanunay nga gikinahanglan ang external o dugang mga plugin aron manipulahon ang user roles.

### Domain ug SSL {#domain-and-ssl}

Atong hisgutan ang usa ka WordPress Multisite installation nga halos molapas sa atensyon nato - Wordpress.com. Kini mao ang labing lapad nga pananglitan sa WordPress multisite ug nagpakita sa ilang lapad nga mga abilidad sa pag-customize ug paghimo aron matubag ang usa ka katuyoan.

Karon sa modernong internet, halos obligado na ang paggamit og SSL ug ang mga network administrator sa WordPress multisites dali ra makasugat niining mga hagit.

Sa _subdomain_ configuration, ang mga site gihimo base sa root domain name. Busa ang usa ka site nga gitawag nga ‘site1’ ma-create isip ‘site1.domain.com’. Paggamit og wildcard SSL certificate, ang usa ka network administrator makasulbad niining hagit ug makahatag og SSL encryption abilities para sa network.

Ang WordPress Multisite naglangkob sa usa ka function nga domain mapping nga nagtugot sa mga network site nga mahimong konektado sa custom domain names o domain names nga lain gikan sa root domain sa network.

Para sa mga network administrator, kini naghatag og dugang kalisod pareho sa pag-configure sa domain name ug sa pag-issue ug pagpangalagad (maintenance) sa SSL certificates.

Sa maong paagi, bisan kung ang WordPress Multisite naghatag og pamaagi aron mapatabang ang [www.anotherdomain.com](http://www.anotherdomain.com) nga mahimong ma-mapa-mapa ng 'site1', ang network administrator magpabilin sa hagit sa pagdumala sa DNS entries gikan sa gawas ug sa pagpatuman (implementation) sa SSL certificates.

## Ultimate Multisite {#ultimate-multisite}

Sa pagsabot sa mga kalainan tali sa usa ka stand-alone WordPress installation ug usa ka Multisite installation, tan-awon nato kung unsaon pagka-ultimate arsenal ang Ultimate Multisite sa paghatag og Websites as a Service (WaaS).

### Introduksyon {#introduction}

Ang Ultimate Multisite mao ang imong Swiss Army knife kung bahin sa paghimo og Website as a Service (WaaS). Hunahunaa ang Wix.com, Squarespace, WordPress.com ug unya hunahunaa ang pagpanag-iya sa imong kaugalingong serbisyo.

Sa sulod niini, ang Ultimate Multisite naggamit sa WordPress Multisite apan nagbuhat kini sa paagi nga dili lang kini makasulbad sa daghang hagit nga giatubang sa mga network administrator sa multisite installations, kondili nagpalambo usab sa mga abilidad aron suportahan ang daghang klase sa mga gamit (use cases).

Sa mosunod nga mga seksyon atong tan-awon ang pipila ka kasagaran nga mga gamit ug mga konsiderasyon nga gikinahanglan aron suportahan ang mga kaso niini.

### Mga Gamit (Use Cases) {#use-cases}

#### Kaso 1: Usa ka Agency {#case-1-an-agency}

Kasagaran, ang nag-unang abilidad sa usa ka agency mao ang pagdisenyo og mga website uban ang mga bahin sama sa ilang hosting o marketing nga giilista isip dugang serbisyo.

Para sa mga agency, ang Ultimate Multisite naghatag og talagsaong benepisyo tungod sa iyang abilidad nga mag-host ug magdumala og daghang websites sa usa lang ka platform. Mas dako pa kini para sa mga agency nga nagpadayon sa paggamit og parehas nga design gamit ang mga theme sama sa GeneratePress, Astra, OceanWP o uban—makagamit sila sa abilidad sa Ultimate Multisite aron awtomatikong ma-activate kining mga theme alang sa matag bag-ong site.

Sa samang paagi, tungod sa daghang mga deal para sa presyo sa agency ngadto sa kasagarang ug popular nga plugins, ang paggamit sa Ultimate Multisite nagtugot sa mga agency nga magamit ang ilang mga nauna nga investment pinaagi sa paghatag og usa ka common platform diin ang mga plugins mahimong i-install, i-maintain, ug gamiton.

Lagmit gusto nila ang paggamit og configuration, ug malipayon nga ang Ultimate Multisite naghimo niini nga sayon kaayo ang domain mapping ug SSL certificates pinaagi sa iyang mga integrations para sa daghang popular nga hosting providers sama sa Cloudflare ug cPanel.

Busa, pinaagi sa paggamit sa usa niining mga provider o pinaagi sa pagbutang og Ultimate Multisite sa likod sa Cloudflare, ang mga aspeto sama sa pagdumala sa domains ug SSL certificates mahimong gamay ra kaayo.

Ang mga agency nga gusto magpabilin og lig-on nga kontrol sa paghimo og sites makapahinumdom sa kalihokan kung unsa sayon nila paghimo og sites ug pag-associate sa mga sites uban sa mga customer ug plans pinaagi sa streamlined interface sa Ultimate Multisite.

![Ultimate Multisite site management interface](/img/admin/sites-list.png)

Ang lig-on nga kontrol sa plugins ug themes gipadayon base sa matag produkto pinaagi sa intuitive interfaces sa Ultimate Multisite, nga nagtugot sa mga plugins ug themes nga mahimong available o itago samtang gi-instantiate kini alang sa bag-ong site.

![Product plugin limitations interface](/img/config/product-plugins.png)

Ang mga theme naghatag og parehas nga functionality, nga nagtugot sa pipila ka themes nga ma-activate o ma-hide sa paghimo sa site.

![Product theme limitations interface](/img/config/product-themes.png)

Makahingalo ang mga agency sa Ultimate Multisite kay gitugotan sila sa pagbuhat sa ilang pinakmaayo—pagdisenyo og talagsaong web sites.

#### Kaso 2: Niche Provider {#case-2-niche-provider}

Naa'y daan nga pulong nga nag-ingon, “buhat usa ka butang ug buhata kini sa maayo.” Para sa daghang mga espesyalista, ang niini nagpasabot sa paghimo og produkto o serbisyo labot sa usa ka sentro nga ideya.

Bisan unsa man, basin ikaw usa ka aktibo nga golfer nga nagpromosyon og mga website sa clubs o basin usa ka aktibo nga esports gamer nga naghatag og mga website sa clans. Usa ba kini usa ka indibidwal nga nagpromosyon og booking service sa mga restaurant?

Sa daghang rason, gusto nimo nga maghatag og mga serbisyo base sa usa ka common framework ug platform. Mahimong ang imong gidesign o na-invest sa bespoke plugins aron maghatag sa kinahanglanon nga functionality, o mahimong kini nga ang industry best practices nagkinahanglan og gamay nga porma sa standardized approach sa disenyo.

Usa sa mga inobasyon sa Ultimate Multisite mao ang paggamit og template sites. Ang template site kay usa diin ang theme na gi-install ug na-activate, kinahanglanon nga plugins gi-install ug na-activate, ug sample posts o pages gihimo. Kung ang usa ka customer maghimo og bag-ong site base sa template, ang sulod ug settings sa template gi-copy sa bag-ong gigimbalay nga site.

Para sa usa ka provider sa niche sites ug serbisyo, kini naghatag og dili matapakan nga bentaha sa abilidad sa paghimo dayon og site nga andam na gamiton uban ang custom plugins ug disenyo. Ang customer kinahanglan lamang maghatag sa pinaka-gamay nga input aron makompleto ang serbisyo.

Depende sa mga kinahanglanon kung ang _subdirectory_ o _subdomain_ configuration ang mas haom, diin ang pagpili sa arkitektura magdepende sa usa ka simple nga SSL certificate para sa _subdirectories_ o usa ka wildcard SSL certificate para sa _subdomains_.

#### Kaso 3: WordPress Web Hosting {#case-3-wordpress-web-hosting}

Naa daghang paagi sa pag-host og WordPress sites pero bihira lang nga sayon sama sa paghatag og web space sa customer uban ang pre-installed version sa WordPress. Kini tungod kay kinahanglan magpundok ug maghunahuna og daghang mga desisyon ug konsiderasyon aron makahatag og usa ka makahuluganon nga serbisyo.

Ang Ultimate Multisite molihok sa maayo ni pinaagi sa paghatag og usa ka komprehensibo nga turnkey solution para sa hosting sa WordPress sites. Ang solusyon naglakip sa mga core mechanism aron maghatag og subscription services, pagkolekta sa bayad, checkout forms, discount vouchers ug customer communications.

Ang dako nga trabaho nga gikinahanglan aron sa hustong pag-install, pag-configure ug pagpadayon sa usa ka WordPress Multisite gi-facilitate sa Ultimate Multisite hangtod nga ang mga network administrator kinahanglan lang maghunahuna sa mga aspeto nga may kalabotan sa ilang serbisyo o niche sama sa product tiers, pricing ug service offers.

Para sa mga developer nga gusto mag-integrate uban sa Ultimate Multisite, ang solusyon nagtanyag usab og usa ka komprehensibo nga RESTful API ug Webhooks para sa event notification.

Dili na kinahanglan umasa sa daghang external plugins ug licenses, ang Ultimate Multisite naghatag og feature-rich ug pamaagi nga solusyon sama sa Wix, Squarespace, WordPress.com ug uban pa.

### Architecture Considerations {#architecture-considerations}

Bisan tuod dili kini usa ka komprehensibo nga giya, kining mga butang kinahanglan magsilbing giya sa hustong pagpili sa mga teknolohiya aron suportahan ang Ultimate Multisite installation.

#### Shared vs. Dedicated Hosting {#shared-vs-dedicated-hosting}

Dili tanan hosting provider parehas ug ang uban nagpraktis og sobrang density sa server. Ang mga low-cost provider kasagaran makakuha og kita pinaagi sa pag-maximize sa server density. Tungod niini, ang imong Ultimate Multisite installation mahimong usa ra sa pipila ka gatos nga sites sa samang server.

Kung walay angay nga proteksyon gikan sa provider, ang mga sites sa shared server mag-experience sa problema sa ‘noisy neighbour’. Nagpasabot kini nga ang usa ka site sa samang server nga nagkonsumo og maingon nga resources ug ang ubang sites kinahanglan magkompetensya alang sa nahabilin nga resources. Kasagaran kini modan-aw isip mga sites nga hinay o dili moadto sa oras pagtubag.

Isip usa ka provider sa web hosting, ang epekto sa flow kay ang imong mga customer makasinati og dili maayo nga porma, ubos nga page rank, ug taas nga bounce rates, nga sagad moresulta sa pagbiya sa customer tungod kay mangita sila og serbisyo sa lain.

Sa laktod, barato dili kini nagpasabot nga maayo.

Ang Ultimate Multisite nailhan nga nagtrabaho uban sa pipila ka maayong hosting provider ug maayo kining mag-integrate sa ilang palibot aron maghatag og mga function sama sa domain mapping ug automatic SSL. Ang mga provider niining mga butang gihatagan og importansya ang performance ug naghatag og mas taas nga kalidad nga serbisyo kumpara sa shared hosting.

Para sa listahan sa mga compatible provider ug kompleto nga instruksyon sa pag-set up alang sa matag usa, palihog tan-aw ang dokumentasyon sa Compatible Providers.

#### Performance Considerations {#performance-considerations}

Ang Ultimate Multisite dili hinay nga application, kondili kini labaw sa tanan ka paspas. Bisan pa niana, kini molihok lang kutob sa maayo sa underlying application ug infrastructure ug makagamit lamang ni sa iyang naa kining access.

Hunahunaa kini: Ikaw ang network administrator sa usa ka Ultimate Multisite installation nga adunay 100 sites. Ang pipila sa mga site niana maayo ug nag-atray sa daghang website visitors matag adlaw.

Maglain kini nga sitwasyon mas lain kung gamay lang ang mga site, sama sa usa hangtod lima ka sites, apan dili pa molungtad og dagkong problema sa scale.

Kung wala'y giatiman, ang usa ra nga Ultimate Multisite site maoy responsable sa pagtupad sa mga panginahanglan sa tanang bisita sa mga site. Ang mga panginahanglan ani mahimong para sa dynamic PHP pages o static assets sama sa stylesheets, javascript, o media files. Bisan usa o usa ka gatos ka sites, kini nga mga buluhaton mahimong paulit-ulit, monotonous, ug maguba lang. Dili kinahanglan gamiton ang CPU power ug memory aron proseso ang usa ka PHP file kung ang output pareho ra nga static information para sa matag request.

Sa samang paagi, ang usa ka request alang sa PHP o HTML page moresulta sa daghang sunod nga mga request alang sa scripts, stylesheets, ug image files. Kini nga mga request diretso nga gipuntirya sa imong Ultimate Multisite server.

Dali kining problema mahimong masulbad pinaagi sa pag-upgrade sa server apan dili kini mag-ayo sa ikaduha nga problema—ang geographic latencies (pagka-layo sa network). Kinahanglan ang daghang mga server sa lain-laing lugar aron maayo gyud ni masulbad.

Tungod niini, kadaghanan sa mga network administrator naggamit og front-end caching solutions ug content distribution networks (CDN) para matubag ang mga request alang sa static pages. Ang pagtupad niining mga request ug paghatag og assets sa dili pa moabot ang request sa server makapahimo nga makatipon sa processing resources, ma-alis ang mga delay, malikayan ang mga kinahanglanon nga upgrade, ug mapalig-on ang mga investment sa teknolohiya.

Ang Ultimate Multisite naglakip og usa ka komplikado nga Cloudflare add-on nga nagtugot sa mga network administrator nga ibutang ang ilang instalasyon sa likod sa Cloudflare ug gamiton dili lang ang iyang caching capabilities kondili usab ang DNS hosting, SSL certificates, ug security mechanisms.

#### Backups {#backups}

Mahimo nimo mangayo og 50 ka tawo alang sa tambag bahin sa backups ug makadawat og 50 ka lain-laing opinyon bahin sa mga backup strategies. Ang tubag mao: depende kini.

Ang dili madawat nga isyu mao nga kinahanglan ang mga backup ug halos imposible nga dili kini gihimog sa provider, ilabi na kung usa ka nag-alagad nga managed service. Tungod niini, ang mga customer magtan-aw sa network administrator aron maghatag ug magdumala niining serbisyo. Kinsa ang gititibo sa network administrator kay lain gyud og problema.

Para sa bahin niining seksyon, atong pagkasundahi nga ang backup usa ka point-in-time copy sa kahimtang sa sistema sa panahon nga nagsugod ang backup. Sa yano lang, bisan unsa pa ang kahimtang sa sistema sa oras sa backup, mao na ang ma-kuha ug ma-lock sa backup.

Sa pagsabot niini, ang tubag kung unsaon pagkab-ot sa mga backup ug unsa ang labing maayo para sa imong environment nagdepende og dako sa imong mga panginahanglan ug sa abilidad sa hosting provider nga matubag kining mga panginahanglan. Bisan pa, sulod sa rang gikan sa labing opinyonado ngadto sa dili kaayo opinyonado, ang ubos nga mga opsyon maghatag og pipila ka giya.

#### Snapshots {#snapshots}

Ang snapshots mao ang "silver bullets" para sa backups kay dali ra kini, walay komplikasyon (hangtod nga gusto nimo i-restore), ug 'just work' lang. Apan kinahanglan gyud kini og tabang gikan sa imong provider ug kadaghanan niini naglangkob lamang kung naa kay VPS (Virtual Private Server) o susama. Pipila ka mga provider nga listado sa among dokumentasyon sa ‘Compatible Providers’ nagtanyag og backups nga dili na nanginahanglan og dugang pagpangutana o konsiderasyon gikan sa network administrator.

Kung ang traditional backup nag-target sa mga files ug database, ang snapshot naman nag-target sa tibuok disk. Nagpasabot ni nga dili lang ma-capture ang data sa site sa snapshot, kondili ang operating system ug configuration usab. Para sa daghan, kini usa ka dakong bentaha kay dali ra makapahimo og bag-ong sistema gikan sa snapshot ug mahimong magtrabaho dayon aron mapulihan ang dili maayo nga instance. Sa samang paagi, ang proseso sa recovery para makuha ang mga files nagkinahanglan lang sa pag-attach sa snapshot image isip disk sa usa ka existing instance aron mahimong ma-access ug ma-copy ang mga files.

Ang snapshots mahimong magdala og dugang gasto gikan sa hosting provider apan kini usa ka insurance policy batok sa mga aksidente.

#### External Scripts {#external-scripts}

Mao ni nga daghan ra gyud og external scripts ug solutions para mag-backup sa WordPress ug MySQL resources, ug maayo kini gamiton alang sa Ultimate Multisite kay kini usa ka WordPress plugin nga naggamit sa WordPress filesystem ug database. Busa ang solusyon nga nag-backup sa mga WordPress sites makatubag sa mga panginahanglan sa Ultimate Multisite.

Dili among maisugyot bisan unsa nga script kaysa uban, apan ang among general nga tambag mao ang pagpatakbo og daghang backup ug restore tests aron masiguro nga ang resulta kay gusto nato ug "siguraduhon nga sigurado" pinaagi sa padayon nga pag-evaluate sa script ug sa iyang functionality labi na kung adunay gamay nga differential backup strategy ang gipaggamit.

Kinahanglan nga mahatag kini nga kining mga scripts, samtang nag-run, makapataas sa system load nga kinahanglan iisip.

#### Plugins {#plugins}

Halos walay problema sa WordPress nga dili masulbad pinaagi sa usa ka plugin ug kung dili nimo ma-manage ang external scripts, basin ang plugin mao ang sunod nga pinakamaayo nga opsyon.

Bisan pa nagkalain ang mga plugin sa ilang mga option ug features, kadaghanan pareho ra sila sa paghimo og kopya sa WordPress files ug database contents. Human niana, magkalahi na ang mga functionality kay ang pipila ka plugins makapadala sa backups ngadto sa external services sama sa Google Drive o Dropbox o sa uban nga compatible object storage service sama sa S3, Wasabi o uban pa. Ang mas komprehensibo nga mga plugin naghatag og differential backups o usa ka estratehiya aron i-backup lang ang data nga nausab para makatipig sa gasto sa external storage.

Sa pagpili nimo sa imong plugin, hunahunaa nga siguruha nga kini multisite aware. Tungod sa paagi sa operasyon niini samtang nag-run ang backup, mahimong magbaton og temporary load sa server hangtod matapos ang proseso.

#### Domain ug SSL {#domain-and-ssl-1}

Daghan na kaayo ang gihisgutan bahin sa mga domain names sa multisite _subdomain_ mode. Usa ra ka universal nga solusyon para sa mga network administrator mao ang paggamit og wildcard DNS entries.

![Wildcard DNS entry configuration example](/img/config/settings-domain-mapping.png)

Kini nga klase sa DNS entry makasulbad sa mga _subdomain_ sama sa ‘site1.domain.com’ ug ‘site2.domain.com’ ngadto sa IP address nga 1.2.3.4, busa suportado kini sa Ultimate Multisite ug sa mas dako nga WordPress Multisite gamit ang _subdomain_ mode.

Kini mahimong molihok pag-ayo para sa HTTP kay ang target host ma-read gikan sa HTTP headers pero bihira na karon nga simple kaayo ang web diin halos mandatory na ang secure HTTPS transactions.

But good news, naa kay dali ra ang mga pamaagi para sa SSL certificates. Sa _subdirectory_ mode, pwede gamiton ang regular domain certificate. Kini dali ra ug libre gikan sa mga hosting provider nga mogamit sa free LetsEncrypt service o laing source. Kung dili, komersyal kini available gikan sa mga awtoridad kung kaya nimo mag-generate og certificate signing request.

Para sa _subdomain_ mode, ang paggamit og wildcard SSL certificate perpekto nga mag-match sa usa ka wildcard domain ug tugotan ang certificate nga mahimong authoritative para sa root domain ug tanang _subdomains_ nga walay dagkong setup.

Bisan pa niana, kinahanglan masabtan nga ang wildcard SSL certificates dili sigurado nga molihok uban sa mga serbisyo sama sa Cloudflare gawas kung ikaw naa sa enterprise plan o mag-set og entry sa DNS ra diin case ang tanang caching ug optimization kay mawala.

Ang out-of-the-box Ultimate Multisite naghatag og solusyon niining problema nga nagpakita sa among dagkong kasinatian sa mga panginahanglan sa WordPress multisites. Ang pag-activate ni simple add-on magpabiling gamiton sa Ultimate Multisite ang imong Cloudflare credentials para awtomatikong magdugang og DNS entries para sa network sites sa Cloudflare ug i-set ang ilang mode ng ‘proxied’. Sa inganyoon, matag network subsite, kung paghimo, adunay bug-os nga proteksyon ug mga benepisyo sa Cloudflare lakip na ang SSL.

Depende sa kinaiya ug katuyoan sa imong Ultimate Multisite installation, basin kinahanglan pa sa mga customer nga mogamit og ilang kaugalingong domains. Sa ingon ani, ang network administrator ma-charge sa pag-solve og duha ka problema. Usa, ang hosting sa domain name ug duha, SSL certificates para sa domain.

Para sa daghan, dali ra gamiton ang Cloudflare. Kinahanglan lang nga ibutang ang ilang domain sa Cloudflare, i-point ang CNAME ngadto sa root domain sa Ultimate Multisite ug i-map ang ilang domain sa Ultimate Multisite aron magsugod na sila og kalampusan sa paggamit sa ilang custom domain name.

Gawas niini, kinahanglan pang mangita og mga alternatibo nga mao nganong nagrekomenda ang Ultimate Multisite og listahan sa Compatible Providers. Kini tungod kay ang proseso sa pag-set up sa DNS ug SSL mahimong lisod. Bisan pa, tungod sa integrasyon sa Ultimate Multisite niini nga mga provider, ang kalisod gidugangan ra ug ang pamaagi gi-automate na.

#### Plugins {#plugins-1}

Dili gyud kini maoy saktong gamiton og dugang plugins aron maghatag og functionality sa inyong mga customer o network sites. Ang tanang plugins ba nagtrabaho uban sa WordPress Multisite ug Ultimate Multisite? Depende na ni.

Bisan tuod kadaghanan sa mga plugins mahimong i-install sa WordPress Multisite, ang ilang pag-activate ug licensing nagkalain-lain depende sa author.

Ang problema anaa kung unsaon paggamit sa licensing sa pipila ka plugins nga nanginahanglan og licensing base sa matag domain. Nagpasabot kini nga alang sa pipila ka plugins, kinahanglan nga i-activate manual sa network administrator ang license para sa matag plugin sa matag bag-ong site.

Busa, mas maayo siguro nga mag-check sa author sa plugin kung unsaon kini pagtrabaho uban sa WordPress Multisite ug bisan unsang espesyal nga requirements o pamaagi nga kinahanglan aron maproseso ang licensing niini.
