---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101

Ang Ultimate Multisite ay isang WordPress Multisite plugin na nagbibigay-daan sa iyo na mag-alok ng WaaS o Websites as a Service sa mga customer. Bago tayo sumisid at matuto kung paano makakatulong ang Ultimate Multisite sa iyong negosyo at mga customer, may ilang pangunahing kaalaman muna tayong kailangang matutunan.

## Ang WordPress Multisite

Karamihan sa atin ay pamilyar na sa karaniwang WordPress installation. Maaari mo itong gawin sa pamamagitan ng control panel ng iyong hosting provider o, para sa mga matapang, mag-set up ng bagong web server at database, mag-download ng core files at simulan ang proseso ng installation.

Gumagana ito para sa milyun-milyong WordPress sites sa buong mundo ngunit mula sa perspektibo ng isang agency o hosting provider, pag-usapan natin ang dami ng mga site sa ilang sandali.

Bagama't napakadali na gumawa ng isang WordPress site o kahit isang daan sa pamamagitan ng automated control panel, mabilis na lumilitaw ang mga problema pagdating sa pamamahala ng mga site na ito. Kung hindi maayos na pinamamahalaan, madali kang maging target ng malware. Ang pamamahala ay nangangailangan ng pagsisikap at resources at bagama't may mga external tools at plugins na makakatulong sa pag-streamline ng pamamahala at administrasyon ng WordPress sites, ang katotohanan na may administrative access ang mga customer ay nangangahulugang madaling matatalo ang mga pagsisikap na ito.

Sa loob ng core nito, nagbibigay ang WordPress ng feature na tinatawag na 'Multisite' na nagmula noong 2010 sa paglulunsad ng WordPress 3.0. Simula noon, marami na itong naranasang pagbabago na naglalayong magdagdag ng mga bagong feature at patatagin ang security.

Sa esensya, ang WordPress multisite ay maaaring isipin nang ganito: Ang isang Unibersidad ay nagpapanatili ng isang installation ng WordPress ngunit ang bawat faculty ay nagpapanatili ng sarili nilang WordPress site.

Para maunawaan ang pahayag na ito, tingnan natin ang ilan sa mga pangunahing terminolohiya na makikita hindi lamang sa dokumentasyon ng Ultimate Multisite kundi sa buong WordPress community.

### Ang Network

Sa konteksto ng WordPress, ang multisite network ay kung saan ang maraming subsites ay maaaring pamahalaan mula sa isang dashboard. Bagama't nag-iiba ang paglikha ng multisite network sa bawat hosting provider, ang resulta ay karaniwang ilang karagdagang directives sa wp-config.php file para ipaalam sa WordPress na ito ay gumagana sa ganitong mode.

May ilang natatanging pagkakaiba sa pagitan ng multisite network at stand-alone WordPress installation na maikli nating tatalakayin.

#### Subdomain vs. Subdirectory

Isa sa mga pinakamahahalagang desisyon na kailangan mong gawin ay kung ang multisite installation ay gagana gamit ang _subdirectories_ o _subdomains_. Gumagana nang maayos ang Ultimate Multisite sa parehong pagpipilian ngunit may ilang pagkakaiba sa arkitektura ng dalawang configuration.

Sa _subdirectory_ configuration, ang mga network sites ay nagmamana ng path batay sa pangunahing domain name. Halimbawa, ang isang network site na may label na 'site1' ay magkakaroon ng buong URL na https://domain.com/site1. Sa _subdomain_ configuration, ang network site ay magkakaroon ng sariling _subdomain_ na nagmula sa pangunahing domain name. Kaya ang site na may label na 'site1' ay magkakaroon ng buong URL na https://site1.domain.com/.

Bagama't parehong valid na pagpipilian, ang paggamit ng _subdomains_ ay nag-aalok ng ilang kalamangan ngunit nangangailangan din ng mas maraming pag-iisip at pagpaplano sa arkitektura nito.

Sa usapin ng DNS, ang paggamit ng _subdirectories_ ay nagpapakita ng medyo simpleng hamon. Dahil ang mga network sites ay mga anak lamang ng parent path, isang domain name entry lang ang kailangan para sa pangunahing domain name. Para sa _subdomains_, mas kumplikado ang hamon na nangangailangan ng hiwalay na CNAME entry para sa bawat network site o wildcard (*) entry sa DNS records.

Isa pang bagay na dapat isaalang-alang ay ang SSL at ang pagkuha at paggamit ng SSL certificates. Sa _subdirectory_ configuration, maaaring gumamit ng isang domain certificate dahil ang mga network sites ay mga path lamang ng pangunahing domain name. Kaya ang certificate para sa domain.com ay sapat na magbibigay ng SSL para sa https://domain.com/site1, https://domain.com/site2 at iba pa.

Sa _subdomain_ configuration, ang paggamit ng wildcard SSL certificate ay isa sa mga pinakakaraniwang pagpipilian. Ang ganitong uri ng SSL certificate ay nagbibigay ng encryption para sa isang domain at mga _subdomains_ nito. Samakatuwid, ang wildcard SSL certificate ay magbibigay ng encryption para sa https://site1.domain.com, https://site2.domain.com at https://domain.com mismo.

Bagama't may iba pang mga pagpipilian, madalas ang mga ito ay limitado sa saklaw at application at nangangailangan ng karagdagang configuration at pagsasaalang-alang tungkol sa pagiging angkop.

#### Plugins at Themes

Ang ibinibigay ng WordPress ay kinukuha rin nito, kahit man lang mula sa perspektibo ng customer. Sa stand-alone WordPress installation, kung ang site administrator ay nag-install ng masamang plugin o nabigong panatilihing updated ang kanilang installation, siya lang ang biktima at naapektuhan nito. Gayunpaman, ang isang site administrator na nag-i-install ng masamang plugin sa multisite installation ay gumagawa ng biktima sa bawat site na naka-install sa network.

Dahil dito, kapag naka-configure bilang multisite, inaalis ng WordPress ang kakayahan ng mga site administrators na mag-install ng plugins at themes at sa halip ay inililipat ang kakayahang ito sa bagong likhang network administrator o 'super admin' role. Ang privileged role na ito ang magpapasya kung papayagan ang mga administrators ng network sites na makita o ma-access ang plugins menu sa kanilang dashboard at, kung gayon, kung ang mga pahintulot na ito ay umaabot sa _pag-activate_ o _pag-deactivate_ ng plugins.

Sa ganitong lawak, ang network administrator ang responsable sa pag-install ng plugins at themes sa network at nagbibigay ng mga pahintulot para magamit ang mga plugins at themes na ito sa mga network sites. Hindi maaaring mag-install ng plugins at themes ang mga site administrators o ma-access ang plugins at themes na hindi nakatalaga sa kanilang site.

#### Users at Administrators

Sa WordPress Multisite, lahat ng network sites ay nagbabahagi ng parehong database at samakatuwid ay nagbabahagi ng parehong users, roles at capabilities. Ang pinakamainam na paraan para isipin ito ay ang lahat ng users ay mga miyembro ng network at hindi ng isang partikular na site.

Dahil sa pagkakaintindi na ito, maaaring hindi kanais-nais na payagan ang paglikha ng mga users at dahil dito, inaalis ng WordPress Multisite ang kakayahang ito mula sa mga site administrators at inililipat ito sa network administrator. Sa turn, maaaring ibigay ng network administrator ang mga kinakailangang privileges sa site administrator upang payagan silang gumawa ng user accounts para sa kanilang sariling site.

<!-- Screenshot unavailable: WordPress Multisite network user management interface -->

Inuulit ang pahayag sa itaas, bagama't ang user accounts ay mukhang nauugnay sa site, sa katunayan ay nakatalaga sila sa network at samakatuwid ay dapat maging natatangi sa buong network. Maaaring may mga pagkakataon na hindi available ang mga usernames dahil sa dahilang ito.

Bagama't hindi ito kakaibang konsepto sa mga enterprise systems, ang single source na ito ng user registration at authentication ay madalas na mahirap na konsepto para sa mga taong pamilyar sa stand-alone WordPress installations kung saan ang user administration ay medyo mas madali.

#### Media

Kung saan ang mga network sites ay nagbabahagi ng isang database sa WordPress Multisite, nagpapanatili sila ng magkakahiwalay na paths sa filesystem para sa mga media files.

Ang standard WordPress location (wp-content/uploads) ay nananatili; gayunpaman, ang path nito ay binago upang ipakita ang natatanging ID ng network site. Dahil dito, ang mga media files para sa isang network site ay lumalabas bilang wp-contents/uploads/site/[id].

#### Permalinks

Nabanggit natin kanina na may mga natatanging kalamangan ang _subdomain_ kaysa sa _subdirectory_ configuration at narito ito: mga paths.

Sa _subdirectory_ configuration, ang main site (ang unang site na nilikha nang maitatag ang network) at ang mga network subsites ay dapat magbahagi ng parehong path na nanggagaling mula sa domain name. Ito ay may potensyal para sa napakaraming conflicts.

Para sa mga posts, isang mandatory na /blog/ path ang idinadagdag sa main site upang maiwasan ang mga clashes sa mga network sites. Nangangahulugan ito na ang mga pretty permalinks tulad ng 'Post name' ay ipepresenta bilang domain.name/blog/post-name/

<!-- Screenshot unavailable: WordPress permalink settings showing /blog/ path in subdirectory configuration -->

Sa _subdomain_ configuration, hindi kailangan ang aksyon na ito dahil ang bawat network site ay nakikinabang mula sa kumpletong domain separation at samakatuwid ay hindi kailangang umasa sa isang path. Sa halip, nagpapanatili sila ng sarili nilang natatanging paths batay sa kanilang _subdomain_.

<!-- Screenshot unavailable: WordPress permalink settings for subdomain configuration -->

#### Static Pages

Sa _subdirectory_ configuration, ang potensyal para sa mga naming conflicts ay umaabot sa mga static pages dahil ang main site at mga network sites ay nagbabahagi ng parehong path.

Upang maiwasan ito, nagbibigay ang WordPress ng paraan upang i-blacklist ang ilang site names upang hindi sila mag-conflict sa mga pangalan ng unang site. Karaniwang inilalagay ng network administrator ang mga root paths ng mga pages ng main site.

<!-- Screenshot unavailable: WordPress network settings showing banned site names to prevent conflicts -->

Sa _subdomain_ configuration, ang posibilidad ng mga naming conflicts ay nababawasan ng _subdomain_ dahil ito ay natatangi sa network site at hindi nauugnay sa anumang paraan sa main site.

### Registration

Sa loob ng network settings ng WordPress Multisite, may ilang bagong user registration options na available, na nagpapahintulot sa mga bago at umiiral na users na gumawa ng mga sites.

<!-- Screenshot unavailable: WordPress Multisite network settings showing registration options -->

Kumpara sa stand-alone WordPress installations, hindi pinapanatili ng mga network sites ang mga pamilyar na options upang payagan ang user registrations o italaga ang mga registrations sa mga roles.

<!-- Screenshot unavailable: WordPress standalone site user registration settings showing limited options -->

Kapag ang mga user accounts ay nilikha, ang mga accounts na ito ay binubuo sa network level. Kaya sa halip na mapabilang sa alinmang partikular na site, napapabilang sila sa network. Ito ay may ilang natatanging kalamangan at kahinaan.

Halimbawa, ipagpalagay na ang iyong WordPress Multisite ay nasa negosyo ng balita at impormasyon. Itatayo mo ang multisite at pagkatapos ay lilikha ng mga network sites para sa finance, technology, entertainment at iba pang mga larangan habang pinapanatili ang pangkalahatang kontrol sa plugins at themes. Ang bawat network site sa turn ay magkakaroon ng mas malaking antas ng kontrol sa hitsura at pakiramdam at user experience ng kanilang network site kaysa sa mga custom post types o regular na post categories.

Sa ganitong lawak, kapag ang isang user ay nag-login, nag-login sila sa network at sa huli ay naka-login din sa bawat network site upang magbigay ng seamless na karanasan. Kung ang iyong bagong site ay subscription based, ito ang magiging ideal na solusyon at resulta.

Gayunpaman, kung ang nilalayong kalikasan at layunin ng multisite ay mag-alok ng magkakaibang network sites na walang relasyon sa isa't isa, halos palaging kailangan ng mga external o karagdagang plugins upang manipulahin ang user roles.

### Domain at SSL

Pag-usapan natin ang isang WordPress Multisite installation na halos nakakaligtaan natin - Wordpress.com. Ito ang pinakamalawak na halimbawa ng isang Wordpress multisite at nagpapakita ng malawak na kakayahan nitong i-customize at hubugin upang matupad ang isang layunin.

Sa mga panahong ito sa modernong internet, halos mandatory na ang paggamit ng SSL at ang mga network administrators ng WordPress multisites ay mabilis na naharap sa mga hamong ito.

Sa _subdomain_ configuration, ang mga sites ay nililikha batay sa root domain name. Kaya ang site na may label na 'site1' ay magiging 'site1.domain.com'. Gamit ang wildcard SSL certificate, matagumpay na matutugunan ng network administrator ang hamong ito at makapagbibigay ng SSL encryption abilities para sa network.

Ang WordPress Multisite ay naglalaman ng domain mapping function na nagpapahintulot sa mga network sites na maiugnay sa custom domain names o domain names na iba sa root domain ng network.

Para sa mga network administrators, nagpapakita ito ng karagdagang layer ng complexity kapwa sa domain name configuration pati na rin sa pagkuha at maintenance ng SSL certificates.

Sa ganitong lawak, bagama't nagbibigay ang WordPress Multisite ng paraan upang payagan ang [www.anotherdomain.com](http://www.anotherdomain.com) na ma-map sa 'site1', naiwan ang network administrator sa hamong external na pamamahala ng DNS entries at implementation ng SSL certificates.

## Ultimate Multisite

Nang maunawaan ang mga pagkakaiba sa pagitan ng stand-alone WordPress installation at Multisite installation, tingnan natin kung paano ang Ultimate Multisite ang ultimate na arsenal para sa pagbibigay ng Websites as a Service.

### Introduksyon

Ang Ultimate Multisite ay ang iyong Swiss Army knife pagdating sa paglikha ng Website as a Service (WaaS). Isipin mo ang Wix.com, Squarespace, WordPress.com at pagkatapos ay isipin mong may-ari ka ng sarili mong serbisyo.

Sa ilalim ng hood, ginagamit ng Ultimate Multisite ang WordPress Multisite ngunit ginagawa ito sa paraang hindi lamang nilulutas ang napakaraming hamon na kinakaharap ng mga network administrators sa multisite installations kundi pinapahusay din ang mga kakayahan na nagpapahintulot sa malawak na uri ng use cases na masuportahan.

Sa mga susunod na seksyon, titingnan natin ang ilang karaniwang use cases at mga konsiderasyong kinakailangan upang suportahan ang mga kasong ito.

### Mga Use Cases

#### Kaso 1: Isang Agency

Karaniwang ang pangunahing kasanayan ng isang agency ay nasa disenyo ng mga websites na may mga aspeto tulad ng kanilang hosting o marketing na nakalista bilang karagdagang serbisyo.

Para sa mga agencies, nagpapakita ang Ultimate Multisite ng hindi kapani-paniwalang value proposition sa kakayahan nitong i-host at pamahalaan ang maraming websites sa isang platform. Lalo na para sa mga agencies na nagsta-standardize ng kanilang mga disenyo sa partikular na themes tulad ng GeneratePress, Astra, OceanWP o iba pa, maaaring gamitin ang kakayahan ng Ultimate Multisite na awtomatikong i-activate ang mga themes na ito para sa bawat bagong site.

Gayundin sa kasaganaan ng mga deals para sa agency pricing sa mga karaniwan at popular na plugins, ang paggamit ng Ultimate Multisite ay nagpapahintulot sa mga agencies na gamitin ang mga umiiral na investments sa pamamagitan ng pagbibigay ng common platform kung saan maaaring i-install, i-maintain at gamitin ang mga plugins.

Malamang na kanais-nais ang paggamit ng configuration at sa kabutihang palad, ginagawang napakadali ng Ultimate Multisite na i-facilitate ang domain mapping at SSL certificates sa mga integrations nito para sa ilang popular na hosting providers pati na rin sa mga serbisyo tulad ng Cloudflare at cPanel.

Kaya sa pamamagitan ng paggamit ng isa sa mga provider na ito o sa pamamagitan ng paglalagay ng Ultimate Multisite sa likod ng Cloudflare, ang mga aspeto tulad ng pamamahala ng mga domains at SSL certificates ay nagiging medyo trivial.

Ang mga agencies na gustong panatilihing mahigpit ang kontrol sa paglikha ng mga sites ay magpapahalaga sa kadalian kung saan maaari silang gumawa ng mga sites at iugnay ang mga sites sa mga customers at plans sa pamamagitan ng streamlined interface ng Ultimate Multisite.

![Ultimate Multisite site management interface](/img/admin/sites-list.png)

Ang mahigpit na kontrol sa mga plugins at themes ay pinapanatili sa bawat produkto sa pamamagitan ng mga intuitive interfaces ng Ultimate Multisite na nagpapahintulot sa mga plugins at themes na gawing available o itago pati na rin ang kanilang activation state kapag na-instantiate para sa isang bagong site.

![Product plugin limitations interface](/img/config/product-plugins.png)

Ang mga themes ay nagbibigay ng katulad na functionality, na nagpapahintulot sa mga partikular na themes na ma-activate o maitago sa paglikha ng site.

![Product theme limitations interface](/img/config/product-themes.png)

Ang mga agencies ay makakahanap ng peace of mind sa Ultimate Multisite na nagpapahintulot sa kanila na gawin ang pinakamahusay nilang ginagawa - magdisenyo ng mga exceptional na web sites.

#### Kaso 2: Niche Provider

May lumang kasabihan na nagsasabing, "gawin ang isang bagay at gawin itong mabuti". Para sa maraming specialists, nangangahulugan ito ng paglikha ng produkto o serbisyo sa paligid ng isang core idea.

Marahil ikaw ay isang avid golfer na nagpo-promote ng mga websites sa mga clubs o maaaring ikaw ay isang avid esports gamer na nagbibigay ng mga websites sa mga clans. Isang indibidwal na nagpo-promote ng booking service sa mga restaurant marahil?

Para sa maraming dahilan, gusto mong magbigay ng mga serbisyo batay sa isang common framework at platform. Maaaring nagdisenyo ka o nag-invest sa mga bespoke plugins upang magbigay ng kinakailangang functionality o maaaring ang industry best practices ay nangangailangan ng ilang uri ng standardized approach sa disenyo.

Isa sa mga innovative features ng Ultimate Multisite ay ang paggamit ng template sites. Ang template site ay kung saan ang theme ay naka-install at naka-activate, mga kinakailangang plugins ay naka-install at naka-activate at mga sample posts o pages ay nilikha. Kapag ang isang customer ay gumawa ng bagong site batay sa template, ang mga nilalaman at settings ng template ay kinokopya sa bagong likhang site.

Para sa isang provider ng niche sites at serbisyo, nagbibigay ito ng walang kapantay na kalamangan sa kakayahang agad na lumikha ng site na handa nang gamitin na may custom plugins at disenyo. Ang customer ay kailangan lang magbigay ng pinakamaliit na input upang makumpleto ang serbisyo.

Depende sa mga kinakailangan, maaaring angkop ang parehong _subdirectory_ o _subdomain_ configurations, kung saan ang mga pagpipilian sa arkitektura ay sa pagitan ng simpleng SSL certificate para sa _subdirectories_ o wildcard SSL certificate para sa _subdomains_.

#### Kaso 3: WordPress Web Hosting

Maraming paraan para mag-host ng WordPress sites ngunit bihirang ito ay kasing simple ng pagbibigay ng web space sa isang customer na may pre-installed na bersyon ng WordPress. Ito ay dahil maraming desisyon at konsiderasyon ang kailangang pagsamahin upang magbigay ng makabuluhang serbisyo.

Namumukod-tangi ang Ultimate Multisite sa larangang ito sa pamamagitan ng pagbibigay ng komprehensibong turnkey solution para sa hosting ng WordPress sites. Kasama sa solusyon ang mga core mechanisms para magbigay ng subscription services, payment collection, checkout forms, discount vouchers at customer communications.

Karamihan sa integral na trabahong kinakailangan upang maayos na i-install, i-configure at i-maintain ang WordPress Multisite ay pinapadali ng Ultimate Multisite sa lawak na ang mga network administrators ay kailangan lang isaalang-alang ang mga aspeto na may kinalaman sa kanilang serbisyo o niche tulad ng product tiers, pricing at service offers.

Para sa mga developers na gustong mag-integrate sa Ultimate Multisite, nag-aalok din ang solusyon ng komprehensibong RESTful API at Webhooks para sa event notification.

Nang walang pag-asa sa napakaraming external plugins at licenses, nagbibigay ang Ultimate Multisite ng feature rich at comparable na solusyon sa Wix, Squarespace, WordPress.com at iba pa.

### Mga Konsiderasyon sa Arkitektura

Bagama't hindi isang komprehensibong gabay, ang mga sumusunod na item ay dapat magsilbing patnubay sa tamang pagpili ng mga teknolohiya upang suportahan ang Ultimate Multisite installation.

#### Shared vs. Dedicated Hosting

Sa kasamaang palad, hindi lahat ng hosting providers ay pantay at ang ilan ay nagpapraktis ng matinding server densities. Ang mga low-cost providers ay karaniwang bumubuo ng revenue sa pamamagitan ng pag-maximize ng server density. Dahil dito, ang iyong Ultimate Multisite installation ay maaaring isa lamang sa ilang daang sites sa parehong server.

Kung walang naaangkop na safeguards mula sa provider, ang mga sites sa isang shared server ay nakakaranas ng 'noisy neighbour' problem. Ibig sabihin, isang site sa parehong server ang kumokonsumo ng napakaraming resources na ang ibang sites ay kailangang mag-agawan para sa natitirang resources. Madalas itong nagpapakita bilang mga sites na mabagal o hindi nakakatugon sa tamang oras.

Bilang isang provider ng web hosting mismo, ang mga flow on effects ay nangangahulugang ang iyong mga customers ay makakaranas ng mabagal na speeds, mababang page rank at mataas na bounce rates na madalas ay nagreresulta sa customer churn habang sila ay naghahanap ng mga serbisyo sa ibang lugar.

Sa madaling salita, ang mura ay hindi nangangahulugang maganda.

Kilala ang Ultimate Multisite na gumagana sa ilang magagandang hosting providers at nag-i-integrate nang maayos sa kanilang environment upang magbigay ng mga functions tulad ng domain mapping at automatic SSL. Pinapahalagahan ng mga providers na ito ang performance at nagbibigay ng mas mataas na antas ng serbisyo kaysa sa shared hosting.

Para sa listahan ng mga compatible providers at kumpletong set-up instructions para sa bawat isa, pakitingnan ang dokumentasyon ng Compatible Providers.

#### Mga Konsiderasyon sa Performance

Ang Ultimate Multisite ay hindi isang mabagal na application, sa halip, ito ay napakabilis. Gayunpaman, gumaganap lamang ito nang kasing husay ng underlying application at infrastructure at magagamit lamang ang mga bagay na may access ito.

Isaalang-alang ito: Ikaw ang network administrator ng isang Ultimate Multisite installation na may 100 sites. Ang ilan sa mga sites na ito ay maayos ang takbo at nakakaakit ng ilang website visitors bawat araw.

Ang scenario na ito ay magiging iba sa mas maliit na scale ng sabihin nating isa hanggang limang sites ngunit hindi magtatagal at magiging malinaw na ang mga problema ng scale.

Kung hindi alagaan, ang isang Ultimate Multisite site ang magiging responsable sa pagtugon sa mga requests ng lahat ng visitors sa mga sites. Ang mga requests na ito ay maaaring para sa dynamic PHP pages o static assets tulad ng stylesheets, javascript o media files. Isa man o isang daang sites, ang mga gawaing ito ay nagiging paulit-ulit, monotonous at wasteful. Hindi kailangan na gumamit ng CPU power at memory para mag-process ng PHP file kung ang output ay parehong static information para sa bawat request.

Gayundin, ang isang request para sa PHP o HTML page ay bumubuo ng maraming kasunod na requests para sa scripts, stylesheets at image files. Ang mga requests na ito ay direktang nakatutok sa iyong Ultimate Multisite server.

Madaling malulutas ng isa ang problemang ito sa pamamagitan ng pag-upgrade ng server ngunit hindi nito naayos ang isang secondary problem - geographic latencies. Tanging maraming servers sa maraming lokasyon ang makakapag-address nang maayos sa problemang ito.

Dahil dito, karamihan sa mga network administrators ay gumagamit ng front-end caching solutions at content distribution networks (CDN) upang tuparin ang mga requests para sa static pages. Ang pagtugon sa mga requests na ito at paghahain ng assets bago maabot ng request ang server ay nakakatipid ng processing resources, nag-aalis ng delays, nag-iiwas ng mga hindi kinakailangang upgrades at nagma-maximize ng technology investments.

Kasama sa Ultimate Multisite ang isang sophisticated Cloudflare add-on na nagpapahintulot sa mga network administrators na ilagay ang kanilang installations sa likod ng Cloudflare at gamitin hindi lamang ang caching capabilities nito kundi ang DNS hosting, SSL certificates at security mechanisms din.

#### Backups

Maaaring magtanong sa 50 tao para sa payo sa backups at makatanggap ng 50 magkakaibang opinyon sa backup strategies. Ang sagot ay, depende ito.

Ang hindi pinagtatalunan ay ang mga backups ay kinakailangan at halos hindi maisip na ang mga ito ay hindi pinamamahalaan ng provider, partikular na isa na nag-aalok ng managed service. Dahil dito, titingnan ng mga customers ang network administrator upang magbigay at pamahalaan ang serbisyong ito. Kung sino ang titingnan ng network administrator ay isang ganap na ibang problema.

Para sa mga layunin ng seksyong ito, sumang-ayon tayo na ang backup ay isang point-in-time copy ng system state sa oras na sinimulan ang backup. Sa madaling salita, anuman ang estado ng system sa oras ng backup, ang estadong iyon ay kinukuha at itinatago sa backup.

Sa pagkakaintinding ito, ang sagot kung paano makamit ang mga backups at kung ano ang pinakamahusay para sa iyong environment ay higit na nakadepende sa iyong mga kinakailangan at kakayahan ng hosting provider na matugunan ang mga kinakailangan na iyon. Gayunpaman, sa pagkakasunud-sunod mula sa pinaka-opinionated hanggang sa pinakamaliit na opinionated, ang mga pagpipilian sa ibaba ay dapat magbigay ng ilang patnubay.

#### Snapshots

Ang mga snapshots ay ang silver bullets sa backups dahil madali sila, uncomplicated (hanggang sa gusto mong mag-restore) at 'gumagana lang'. Nangangailangan ito ng tulong mula sa iyong provider at karamihan ay nalalapat lamang kung mayroon kang VPS (Virtual Private Server) o katulad. Maraming providers na nakalista sa aming dokumentasyon ng 'Compatible Providers' ang nag-aalok ng backups na hindi na nangangailangan ng karagdagang intervention o konsiderasyon ng network administrator.

Kung saan ang mga traditional backups ay nakatutok sa files at databases, ang snapshot ay nakatutok sa buong disk. Nangangahulugan ito na hindi lamang ang data ng site ang nakukuha sa snapshot kundi pati na rin ang operating system at configuration. Para sa marami, ito ay isang natatanging kalamangan dahil ang isang bagong system ay maaaring ma-spawn halos agad mula sa isang snapshot at mailalagay sa operasyon upang palitan ang isang ailing instance. Gayundin, ang proseso ng recovery para kunin ang mga files ay nangangailangan lamang ng pag-attach ng snapshot image bilang disk sa isang umiiral na instance upang ma-access at makopya ang mga files.

Ang mga snapshots ay maaaring magkaroon ng karagdagang gastos sa hosting provider ngunit ito ay isang insurance policy laban sa mga aksidente.

#### External Scripts

Tila walang kakulangan ng external scripts at solutions para i-backup ang WordPress at MySQL resources at ang mga ito ay gagana nang maayos para sa Ultimate Multisite dahil ito ay isang WordPress plugin na gumagamit ng WordPress filesystem at database. Kaya ang isang solusyon na nagba-backup ng WordPress sites ay sapat na matutugunan ang mga pangangailangan ng Ultimate Multisite.

Hindi namin maaaring i-recommend ang isang script kaysa sa iba ngunit ang aming pangkalahatang payo ay magpatakbo ng ilang backup at restore tests upang matiyak na ang mga resulta ay kanais-nais at upang 'maging sigurado sa pagiging sigurado' sa pamamagitan ng patuloy na pagsusuri ng script at functionality nito partikular kung saan may ilang uri ng differential backup strategy na inilalapat.

Dapat tandaan na ang mga scripts na ito, habang tumatakbo, ay magdaragdag ng system load na dapat isaalang-alang.

#### Plugins

Halos walang problema sa WordPress na hindi malulutas ng plugin at kung ang pamamahala ng external scripts ay hindi ang iyong cup of java, marahil ang plugin ang susunod na pinakamahusay na pagpipilian.

Bagama't nag-iiba ang mga plugins sa mga options at features, karamihan ay gumaganap ng parehong function at iyon ay ang paggawa ng kopya ng WordPress files at database contents. Pagkatapos nito, nag-iiba ang mga functionalities dahil ang ilang plugins ay maaaring mag-ship ng mga backups sa mga external services tulad ng Google Drive o Dropbox o sa ilang uri ng compatible object storage service tulad ng S3, Wasabi o iba pa. Ang mas komprehensibong mga plugins ay nagbibigay ng differential backups o ilang uri ng strategy upang i-backup lamang ang data na nabago upang makatipid ng external storage costs.

Sa pagpili ng iyong plugin, mag-ingat na i-verify na ito ay multisite aware. Dahil sa kalikasan ng operasyon nito, habang tumatakbo ang backup, maaari mong asahan ang pansamantalang load sa server hanggang sa makumpleto ang proseso.

#### Domain at SSL

Marami na ang napag-usapan tungkol sa mga domain names sa multisite _subdomain_ mode. Ang halos universal na solusyon para sa mga network administrators ay ang paggamit ng wildcard DNS entries.

![Wildcard DNS entry configuration example](/img/config/settings-domain-mapping.png)

Ang ganitong uri ng DNS entry ay matagumpay na magre-resolve ng mga _subdomains_ tulad ng 'site1.domain.com' at 'site2.domain.com' sa IP address na 1.2.3.4 na nagsusuporta sa Ultimate Multisite at sa mas malaking lawak ang WordPress Multisite gamit ang _subdomain_ mode.

Maaaring gumana ito nang perpekto para sa HTTP dahil ang target host ay binabasa mula sa HTTP headers ngunit bihirang simple ang web sa mga panahong ito kung saan halos mandatory na ang secure HTTPS transactions.

Sa kabutihang palad, may madaling mga pagpipilian para sa SSL certificates. Sa _subdirectory_ mode, maaaring gumamit ng regular domain certificate. Ang mga ito ay madaling makuha at libreng available mula sa mga hosting providers na maaaring gumagamit ng libreng LetsEncrypt service o ibang source. Kung hindi, ang mga ito ay commercially available mula sa mga authorities kung kaya mong bumuo ng certificate signing request.

Para sa _subdomain_ mode, ang paggamit ng wildcard SSL certificate ay perpektong kapareha ng wildcard domain at nagpapahintulot sa certificate na maging authoritative para sa root domain at lahat ng _subdomains_ nang walang labis na configuration.

Gayunpaman, dapat tandaan na ang wildcard SSL certificates ay maaaring hindi gumana sa mga serbisyo tulad ng Cloudflare maliban kung ikaw ay nasa enterprise plan o itakda ang entry sa DNS only kung saan ang lahat ng caching at optimization ay nababypass.

Out-of-the-box, nagbibigay ang Ultimate Multisite ng solusyon sa problemang ito na nagpapakita ng aming malawak na karanasan sa mga pangangailangan ng WordPress multisites. Ang pag-activate ng simpleng add-on na ito ay magkakaroon ng Ultimate Multisite na gagamit ng iyong Cloudflare credentials upang awtomatikong magdagdag ng DNS entries para sa mga network sites sa Cloudflare at itakda ang kanilang mode sa 'proxied'. Sa ganitong paraan, ang bawat network subsite, kapag nilikha, ay magkakaroon ng buong proteksyon at benepisyo ng Cloudflare kasama ang SSL.

Depende sa kalikasan at layunin ng iyong Ultimate Multisite installation, maaaring may pangangailangan para sa mga customers na gumamit ng sarili nilang domains. Sa kasong ito, ang network administrator ay may tungkuling lutasin ang dalawang problema. Una, ang hosting ng domain name at dalawa, ang SSL certificates para sa domain.

Para sa marami, ang paggamit ng Cloudflare ay isang madaling pagpipilian. Ang customer ay kailangan lamang ilagay ang kanilang domain sa Cloudflare, ituro ang CNAME sa root domain ng Ultimate Multisite at i-map ang kanilang domain sa Ultimate Multisite upang magsimulang samantalahin ang kanilang custom domain name.

Sa labas nito, kailangang humanap ng alternatibong mga solusyon kung kaya't inirerekomenda ng Ultimate Multisite ang isang listahan ng Compatible Providers. Ito ay dahil ang proseso ng pag-set up ng DNS at SSL ay maaaring maging non-trivial na proseso. Gayunpaman, sa integration ng Ultimate Multisite sa mga providers na ito, naaalis ang karamihan sa complexity at naa-automate ang procedure.

#### Plugins

Malamang na kakailanganin mo ng karagdagang plugins upang magbigay ng functionality sa iyong mga customers o network sites. Gumagana ba ang lahat ng plugins sa WordPress Multisite at Ultimate Multisite? Depende ito.

Bagama't karamihan sa mga plugins ay mai-install sa WordPress Multisite, nag-iiba ang kanilang activation at licensing mula sa bawat author.

Ang hamon ay nasa kung paano inilalapat ang licensing na may ilang plugins na nangangailangan ng licensing sa bawat domain. Nangangahulugan ito na para sa ilang plugins, kailangan ng network administrator na mano-manong i-activate ang license para sa bawat plugin sa bawat bagong site.

Samakatuwid, maaaring pinakamabuting makipag-ugnayan sa plugin author kung paano gagana ang kanilang plugin sa WordPress Multisite at anumang mga espesyal na kinakailangan o procedures na kinakailangan upang i-license ito.
