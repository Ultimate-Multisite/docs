---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101

Ang Ultimate Multisite ay isang WordPress Multisite plugin na nagbibigay-daan sa iyo na mag-alok ng WaaS o Websites as a Service sa mga customer mo. Bago tayo sumisid at matutunan kung paano makakatulong ang Ultimate Multisite sa iyong negosyo at mga customer, mayroon tayong ilang pangunahing kaalaman na kailangan nating makuha.

## Ang WordPress Multisite {#the-wordpress-multisite}

Karamihan sa atin ay pamilyar sa standard installation ng WordPress. Maaari mo itong gawin gamit ang control panel ng iyong hosting provider o, para sa mga matatapang, mag-set up ng bagong web server at database, i-download ang core files at simulan ang proseso ng pag-install.

Ito ay gumagana para sa milyun-milyong WordPress sites sa buong mundo ngunit mula sa pananaw ng isang agency o hosting provider, pag-usapan natin muna ang dami (volumes).

Bagama't madali itong gawin upang gumawa ng isang WordPress site o kahit isang daan via automated control panel, malapit nang lumitaw ang mga problema kapag napunta na ito sa pamamahala ng mga sites na iyon. Kung hindi ito ma-manage, ikaw ay pangunahing target para sa malware. Ang pag-manage ay nangangailangan ng pagsisikap at mga resources at bagama't may mga external tools at plugin na available upang tulungan ang pagpapadali ng management at administration ng WordPress sites, ang katotohanan na ang mga customer ang nagpapanatili ng administrative access ay nangangahulugang ang mga pagsisikaping ito ay madaling malampasan.

Sa loob nito, ang WordPress ay nagbibigay ng isang feature na tinatawag na ‘Multisite’ na may pinagmulan noong 2010 sa paglulunsad ng WordPress 3.0. Mula noon, nakatanggap ito ng ilang mga revision na naglalayong magpakilala ng mga bagong features at palakasin ang seguridad.

Sa esensya, ang isang WordPress multisite ay maaaring isipin bilang ganito: Ang isang Unibersidad ay nagpapanatili ng iisang installation ng WordPress ngunit ang bawat kolehiyo ay may sariling WordPress site.

Para ma mas madali nating maintindihan ito, tingnan natin ang ilang pangunahing termino na makikita hindi lang sa dokumentasyon ng Ultimate Multisite kundi pati na rin sa buong WordPress community.

### Ang Network {#the-network}

Sa WordPress, ang multisite network ay kung saan maraming subsites ang pwedeng i-manage mula sa iisang dashboard. Bagama't nagkakaiba ang paggawa ng multisite network depende sa hosting provider, karaniwan itong may ilang dagdag na direksyon (directives) sa file na `wp-config.php` para malaman ng WordPress na ito ay gumagana sa partikular na mode na ito.

Mayroong iba't ibang pagkakaiba ang isang multisite network at isang stand-alone WordPress installation, na maikli nating tatalakayin.

#### Subdomain vs. Subdirectory {#subdomain-vs-subdirectory}

Isa sa mga pinakaunang desisyong kailangan mong gawin ay kung ang multisite installation ay gagamit ng _subdirectories_ o _subdomains_. Gumagana nang maganda ang Ultimate Multisite sa parehong pagpipilian, ngunit may ilang pagkakaiba sa arkitektura sa pagitan ng dalawang configuration na ito.

Sa _subdirectory_ configuration, ang mga network site ay nagmamana ng isang path batay sa pangunahing domain name. Halimbawa, ang network site na may label na ‘site1’ ay magkakaroon ng buong URL na `https://domain.com/site1`. Sa _subdomain_ configuration naman, ang network site ay magkakaroon ng sarili nitong _subdomain_ na hango sa pangunahing domain name. Kaya ang isang site na may label na ‘site1’ ay magkakaroon ng buong URL na `https://site1.domain.com/`.

Bagama't parehong balidong pagpipilian ang dalawang opsyon, nagbibigay din ang paggamit ng _subdomains_ ng ilang mga kalamangan ngunit nangangailangan din ito ng mas maraming pag-iisip at pagpaplano sa arkitektura nito.

Tungkol sa DNS, medyo simple lang ang hamon ng paggamit ng mga _subdirectories_. Dahil ang mga network sites ay parang mga anak lang ng parent path, kailangan mo lang ng isang entry sa domain name para sa pangunahing domain name. Para naman sa mga _subdomain_, mas kumplikado ito at nangangailangan ng hiwalay na CNAME entry para sa bawat network site o kaya naman ay isang wildcard (*) entry sa DNS records.

Isa pang bagay na dapat isaalang-alang ay ang SSL at ang pag-isyu at paggamit ng mga SSL certificate. Sa _subdirectory_ configuration, isang domain certificate lang ang pwedeng gamitin dahil ang mga network sites ay simpleng mga path ng pangunahing domain name. Kaya, ang isang certificate para sa domain.com ay sapat na magbibigay ng SSL para sa https://domain.com/site1, https://domain.com/site2 at iba pa.

Sa _subdomain_ configuration, ang paggamit ng wildcard SSL certificate ay isa sa pinakakaraniwang opsyon. Ang uri ng SSL certificate na ito ay nagbibigay ng encryption para sa isang domain at sa mga _subdomains_ nito. Kaya, ang wildcard SSL certificate ay magbibigay ng encryption para sa https://site1.domain.com, https://site2.domain.com at pati na rin sa https://domain.com mismo.

Bagama't may ibang opsyon din, madalas itong limitado ang saklaw at aplikasyon kaya nangangailangan ito ng dagdag na configuration at pagsasaalang-alang kung bagay ba talaga sa sitwasyon.

#### Plugins at Themes {#plugins-and-themes}

Ano ang ibinibigay ng WordPress ay inaalis din nito, kahit mula sa pananaw ng customer. Sa isang stand-alone WordPress installation, kung ang site administrator ay mag-install ng masamang plugin o hindi niya mapapanatili ang kanyang installation na updated, ang tanging biktima at kasalukuyang apektado ay siya mismo. Ngunit kapag ang isang site administrator ay nag-install ng masamang plugin sa isang multisite installation, ang biktima nito ay lahat ng site na naka-install sa network.

Dahil dito kapag naka-configure bilang multisite WordPress, inaalis nito ang kakayahan ng mga site administrator na mag-install ng plugins at themes at sa halip ay inililipat ito sa isang bagong ginawang network administrator o 'super admin' role. Ang privileged na role na ito ang magpapasya kung papayagan ba nitong makita o ma-access ng mga administrator ng network sites ang plugins menu sa kanilang dashboard, at kung gayon, kung ang mga pahintulot na iyon ay umaabot din sa _pag-activate_ o _pag-deactivate_ ng mga plugin.

Sa ganitong paraan, ang network administrator ang responsable sa pag-install ng mga plugin at themes sa network at nagbibigay ng pahintulot upang magamit ang mga plugin at themes na iyon sa mga network sites. Hindi maaaring mag-install o mag-access ng mga site administrator ng mga plugin at themes na hindi itinalaga para sa kanilang site.

#### Mga User at Administrator {#users-and-administrators}

Sa isang WordPress Multisite, lahat ng network sites ay may iisang database kaya pareho rin sila ng users, roles, at capabilities. Ang pinakamahusay na paraan para isipin ito ay ang lahat ng user ay miyembro ng network at hindi ng partikular na site.

Dahil sa pag-unawang ito, maaaring hindi kanais-nais na payagan ang paglikha ng mga user at dahil dito, inaalis ng WordPress Multisite ang kakayahang ito mula sa mga site administrator at inililipat ito sa network administrator. Sa huli, ang network administrator ay maaaring magbigay ng kinakailangang pribilehiyo sa isang site administrator upang payagan silang gumawa ng user accounts para sa kanilang sariling site.

<!-- Hindi available na screenshot: WordPress Multisite network user management interface -->

Muling binibigyang-diin ang nabanggit, bagama't ang mga user account ay tila may kaugnayan sa site na kinabibilangan nila, sa katunayan ay itinalaga ito sa network at dahil dito ay dapat unique sa buong network. May mga pagkakataon kung saan hindi magagamit ang username para ma-register dahil sa dahilan na ito.

Bagama't hindi ito bago sa mga enterprise system, ang iisang pinagmumulan para sa pagpaparehistro at pag-authenticate ng user ay madalas na mahirap intindihin para sa mga taong pamilyar sa mga stand-alone WordPress installation kung saan mas madali ang pamamahala sa user.

#### Media {#media}

Kung ang mga network site ay nagbabahagi ng iisang database sa isang WordPress Multisite, mayroon silang magkahiwalay na path sa filesystem para sa mga media file.

Ang standard WordPress location (wp-content/uploads) ay nananatili; gayunpaman, binabago ang path nito upang ipakita ang natatanging ID ng network site. Dahil dito, ang mga media file para sa isang network site ay lumalabas bilang wp-contents/uploads/site/[id].

#### Permalinks {#permalinks}

Nauna na nating nabanggit na mayroong mga natatanging bentahe ang _subdomain_ kumpara sa _subdirectory_ configuration at narito ito: ang mga path.

Sa isang _subdirectory_ configuration, ang pangunahing site (ang unang site na ginawa kapag itinatag ang network) at ang mga network subsites ay dapat magbahagi ng parehong path na papunta mula sa domain name. May potensyal ito para sa napakaraming conflict.

Para sa mga post, may idinadagdag na mandatory /blog/ path sa pangunahing site upang maiwasan ang pagbanggaan sa mga network sites. Nangangahulugan ito na ang magagandang permalink tulad ng ‘Post name’ ay ipapakita bilang domain.name/blog/post-name/.

<!-- Screenshot unavailable: WordPress permalink settings showing /blog/ path in subdirectory configuration -->

Sa isang _subdomain_ configuration, hindi kailangan ang aksyong ito dahil ang bawat network site ay nakikinabang sa kumpletong paghihiwalay ng domain at kaya hindi na kailangang umasa sa iisang path. Sa halip, nagpapanatili sila ng sarili nilang magkakaibang mga path batay sa kanilang _subdomain_.

<!-- Screenshot unavailable: WordPress permalink settings for subdomain configuration -->

#### Static Pages {#static-pages}

Sa configuration ng _subdirectory_ ang posibilidad ng pagbanggaan sa pangalan ay umaabot hanggang sa mga static page bilang main site at network sites ay gumagamit ng parehong path.

Upang maiwasan ito, nagbibigay ang WordPress ng paraan upang i-blacklist ang ilang mga pangalan ng site kaya hindi sila magkakasalungat sa mga pangalan ng unang site. Karaniwan, ang network administrator ang maglalagay ng root paths ng mga pahina ng main site.

<!-- Screenshot unavailable: WordPress network settings showing banned site names to prevent conflicts -->

Sa configuration ng _subdomain_ ang posibilidad ng pagbanggaan sa pangalan ay nababawasan dahil ang _subdomain_ ay natatangi para sa network site at walang kinalaman sa main site.

### Pagpaparehistro (Registration) {#registration}

Sa loob ng network settings ng WordPress Multisite, may ilang bagong opsyon sa pagpaparehistro ng user na nagpapahintulot sa mga bagong at kasalukuyang user na gumawa ng mga site.

<!-- Screenshot unavailable: WordPress Multisite network settings showing registration options -->

Hindi tulad ng mga stand-alone WordPress installation, ang mga network sites ay hindi nagpapanatili ng pamilyar na opsyon para sa pagpaparehistro ng user o pagtatalaga ng mga rehistrasyong iyon sa mga role.

<!-- Screenshot unavailable: WordPress standalone site user registration settings showing limited options -->

Kapag nilikha ang mga user account, ang mga account na ito ay ginagawa sa antas ng network. Kaya imbes na maging kabilang ng kahit anong partikular na site sila, sila ay magiging kabilang ng network. Mayroon itong ilang natatanging bentahe at disbentaha.

Para sa halimbawa, isipin mo na ang WordPress Multisite mo ay nasa negosyo ng balita at impormasyon. Magtatatag ka ng multisite at pagkatapos ay gagawa ka ng mga network site para sa pananalapi (finance), teknolohiya (technology), libangan (entertainment) at iba pang interes habang pinapanatili ang pangkalahatang kontrol sa mga plugin at theme. Ang bawat network site ay magkakaroon ng mas malaking kontrol kaysa sa custom post types o regular post categories tungkol sa itsura at karanasan ng user ng kanilang network site.

Sa ganitong paraan, kapag nag-log in ang isang user, naglo-log in siya sa network at sa huli ay naka-log in din sa bawat network site para magbigay ng walang aberyang karanasan. Kung ang bagong site mo ay subscription-based ito, ito ang perpektong solusyon at resulta.

Gayunpaman, kung ang layunin at kalikasan ng multisite ay magbigay ng mga hiwa-hiwalay na network site na walang kaugnayan sa isa't isa, halos palaging kailangan ang mga panlabas o karagdagang plugin para manipulahin ang user roles.

### Domain at SSL {#domain-and-ssl}

Pag-usapan natin ang isang WordPress Multisite installation na halos hindi napapansin—Wordpress.com. Ito ang pinakamalawak na halimbawa ng Wordpress multisite at nagpapakita ng malawak nitong kakayahan na i-customize at hubugin para matupad ang isang layunin.

Sa modernong internet ngayon, halos mandatory na ang paggamit ng SSL at malapit nang haharapin ng mga network administrator ng WordPress multisites ang mga hamon na ito.

Sa _subdomain_ configuration, ang mga site ay ginagawa batay sa root domain name. Kaya, ang isang site na may label na ‘site1’ ay gagawin bilang ‘site1.domain.com’. Sa paggamit ng wildcard SSL certificate, matagumpay na malulutas ng isang network administrator ang hamong ito at magbibigay ng kakayahang i-encrypt ang SSL para sa buong network.

Ang WordPress Multisite ay mayroong function para sa domain mapping na nagpapahintulot na ang mga network site ay maiugnay sa mga custom domain o mga domain na iba sa root domain ng network.

Para sa mga network administrator, ito ay nagdadala ng dagdag na kumplikasyon pareho sa pag-configure ng pangalan ng domain at sa pag-isyu at pagpapanatili ng SSL certificates.

Sa ganitong paraan, habang ang WordPress Multisite ay nagbibigay ng paraan upang ma-map ang [www.anotherdomain.com](http://www.anotherdomain.com) sa ‘site1’, ang network administrator ay naiiwang may hamon sa paghawak ng DNS entries sa labas at sa pagpapatupad ng SSL certificates.

## Ultimate Multisite {#ultimate-multisite}

Dahil nauunawaan natin ang pagkakaiba sa pagitan ng isang stand-alone WordPress installation at ng Multisite installation, tingnan natin kung paano si Ultimate Multisite ang magiging pangunahing gamit para sa pagbibigay ng Websites as a Service (WaaS).

### Panimula {#introduction}

Ang Ultimate Multisite ay parang Swiss Army knife mo kapag gumagawa ka ng Website as a Service (WaaS). Isipin mo ang Wix.com, Squarespace, WordPress.com at pagkatapos isipin mo na magmamay-ari ka ng sarili mong serbisyo.

Sa likod nito, ginagamit ng Ultimate Multisite ang WordPress Multisite pero sa paraang hindi lang nalulutas ang maraming hamon na kinakaharap ng mga network administrator sa multisite installations kundi pinapahusay din nito ang kakayahan na sumusuporta sa iba't ibang uri ng gamit.

Sa mga susunod na seksyon, titingnan natin ang ilang karaniwang use cases at mga dapat isaalang-alang para suportahan ang mga kaso na iyon.

### Mga Use Cases {#use-cases}

#### Kaso 1: Isang Ahensiya (An Agency) {#case-1-an-agency}

Karaniwan, ang pangunahing kasanayan ng isang ahensiya ay nakasalalay sa pagdidisenyo ng mga website na may mga aspeto tulad ng kanilang hosting o marketing na nakalista bilang karagdagang serbisyo.

Para sa mga agency, ang Ultimate Multisite ay nagpapakita ng napakagandang benepisyo dahil kaya nitong mag-host at mag-manage ng maraming website sa iisang platform. Mas malaki pa ito para sa mga agency na nagpapatatag ng kanilang disenyo gamit ang mga partikular na theme tulad ng GeneratePress, Astra, OceanWP o iba pa—maaari nilang gamitin ang kakayahan ng Ultimate Multisite upang awtomatikong i-activate ang mga temang ito para sa bawat bagong site.

Gayundin, dahil sa dami ng mga deal para sa agency pricing sa mga karaniwan at sikat na plugin, pinapayagan ng Ultimate Multisite ang mga agency na gamitin ang kanilang mga nakaraang investment sa pamamagitan ng pagbibigay ng isang karaniwang platform kung saan maaaring i-install, mapanatili, at magamit ang mga plugin.

Malamang na gusto nila ang paggamit ng configuration, at sa magandang balita, ginagawang napakadali ng Ultimate Multisite ang domain mapping at SSL certificates gamit ang mga integrasyon nito para sa maraming sikat na hosting provider pati na rin sa mga serbisyo tulad ng Cloudflare at cPanel.

Kaya kapag gumamit ka ng isa sa mga provider na ito o inilagay mo ang Ultimate Multisite sa likod ng Cloudflare, ang mga aspeto tulad ng pamamahala ng domain at SSL certificates ay nagiging halos madali lang.

Ang mga agency na mas gusto ring panatilihin ang mahigpit na kontrol sa paglikha ng mga site ay mapapangiti sa kadalian kung paano nila maaaring gumawa ng mga site at iugnay ang mga site sa mga customer at plano gamit ang pinadaling interface ng Ultimate Multisite.

![Ultimate Multisite site management interface](/img/admin/sites-list.png)

Ang mahigpit na kontrol sa mga plugin at theme ay pinapanatili batay sa bawat produkto sa pamamagitan ng mga intuitive interface ng Ultimate Multisite na nagpapahintulot na maging available o itago ang mga plugin at theme pati na rin ang kanilang estado ng pag-activate kapag ito ay inilunsad para sa isang bagong site.

![Product plugin limitations interface](/img/config/product-plugins.png)

Nagbibigay ang mga theme ng katulad na functionality, na nagpapahintulot sa pag-activate o pagtatago ng partikular na themes sa paglikha ng site.

![Product theme limitations interface](/img/config/product-themes.png)

Makakahanap ng kapayapaan ang mga agency sa Ultimate Multisite dahil pinapayagan sila na gawin ang kanilang pinakamahusay—ang magdisenyo ng mga pambihirang website.

#### Kaso 2: Niche Provider {#case-2-niche-provider}

May lumang kasabihan na nagsasabi, “gawin mo ang isang bagay at gawin mo ito nang mahusay.” Para sa maraming espesyalista, ibig sabihin nito ay gumawa ng produkto o serbisyo batay sa iisang pangunahing ideya.

Baka ikaw ay isang masigasig na golfer na nagpo-promote ng mga website sa mga club o baka isa kang masigasig na esports gamer na nagbibigay ng mga website sa mga clan. Isang indibidwal na nagpo-promote ng booking service sa mga restaurant marahil?

Sa maraming dahilan, gusto mong magbigay ng mga serbisyo batay sa isang karaniwang framework at platform. Maaaring ikaw ay nakadisenyo o nakapag-invest sa mga bespoke plugin upang magbigay ng kinakailangang functionality o maaaring ang kaso na ang pinakamahusay na kasanayan ng industriya ay nangangailangan ng isang uri ng standardized approach sa disenyo.

Isa sa mga makabagong feature ng Ultimate Multisite ay ang paggamit ng template sites. Ang template site ay isa kung saan na-install at na-activate ang theme, na na-install at na-activate ang mga kinakailangang plugins, at mayroon nang mga sample post o page. Kapag ang isang customer ay gumawa ng bagong site batay sa template, ang nilalaman at setting ng template ay kinokopya sa bagong ginawang site.

Para sa isang provider ng niche sites at serbisyo, nagbibigay ito ng walang katumbas na kalamangan sa kakayahang agad na lumikha ng isang site na handa nang gamitin na may mga custom plugins at disenyo. Ang customer ay kailangan lamang magbigay ng pinakamababang input upang makumpleto ang serbisyo.

Depende sa mga pangangailangan, ang parehong _subdirectory_ o _subdomain_ configuration ay maaaring bagay, kung saan ang pagpili ng arkitektura ay nasa pagitan ng simpleng SSL certificate para sa _subdirectories_ o isang wildcard SSL certificate para sa _subdomains_.

#### Kaso 3: WordPress Web Hosting {#case-3-wordpress-web-hosting}

Maraming paraan para mag-host ng mga WordPress site pero bihira lang na kasing simple nito ang pagbibigay ng web space sa customer na may pre-installed na bersyon ng WordPress. Ito ay dahil maraming desisyon at konsiderasyon ang kailangang pagsamahin para makapagbigay ng makabuluhang serbisyo.

Ang Ultimate Multisite ay nagtatagumpay dito sa pamamagitan ng pagbibigay ng isang kumpletong turnkey solution para sa pag-host ng mga WordPress site. Kasama sa solusyon ang mga pangunahing mekanismo para magbigay ng subscription services, koleksyon ng bayad, checkout forms, discount vouchers at komunikasyon sa customer.

Malaki ang bahagi ng mahahalagang trabaho na kailangan para sa tamang pag-install, configuration, at maintenance ng WordPress Multisite ay ginagawang madali ng Ultimate Multisite kaya ang mga network administrator ay kailangang isaalang-alang lamang ang mga aspeto na may kaugnayan sa kanilang serbisyo o niche tulad ng product tiers, pricing, at service offers.

Para sa mga developer na gustong makipag-integrate sa Ultimate Multisite, nag-aalok din ang solusyon ng isang komprehensibong RESTful API at Webhooks para sa event notification.

Hindi umaasa sa maraming external plugins at license, ang Ultimate Multisite ay nagbibigay ng feature-rich at katumbas na solusyon kumpara sa Wix, Squarespace, WordPress.com at iba pa.

### Mga Konsiderasyon sa Arkitektura {#architecture-considerations}

Bagama't hindi ito isang komprehensibong gabay, ang mga sumusunod ay dapat magsilbing gabay sa tamang pagpili ng teknolohiya para suportahan ang isang Ultimate Multisite installation.

#### Shared vs. Dedicated Hosting {#shared-vs-dedicated-hosting}

Hindi lahat ng hosting provider ay pantay-pantay at may ilang gumagamit ng sobrang daming server density. Ang mga low-cost provider ay karaniwang kumikita sa pamamagitan ng pagpapalaki ng server density. Dahil dito, ang iyong Ultimate Multisite installation ay maaaring isa lamang sa daan-daang sites na nasa iisang server.

Kung walang tamang proteksyon mula sa provider, ang mga site sa isang shared server ay nakakaranas ng problema ng ‘noisy neighbour’. Ibig sabihin, ang isang site sa parehong server na kumokonsumo ng ganoong daming resources ay kailangang makipagkompetensya sa natitirang resources para sa ibang mga site. Madalas itong nagpapakita bilang mga site na mabagal o hindi tumutugon nang napapanahon.

Bilang isang web hosting provider, ang epekto ng flow na ito ay nangangahulugan na ang iyong mga customer ay nakakaranas ng mababang bilis, mababang page rank, at mataas na bounce rates, na kadalasang nagreresulta sa pag-alis nila ng serbisyo dahil naghahanap sila ng ibang serbisyo.

Sa madaling salita, hindi nangangahulugang maganda ang mura.

Ang Ultimate Multisite ay kilala na gumagana kasama ng ilang mahuhusay na hosting provider at mahusay itong nakakasama sa kanilang environment para magbigay ng mga function tulad ng domain mapping at automatic SSL. Pinahahalagahan ng mga provider na ito ang performance at nagbibigay sila ng mas mataas na antas ng serbisyo kaysa sa shared hosting.

Para sa listahan ng mga compatible provider at kumpletong set-up instructions para sa bawat isa, tingnan ang dokumentasyon ng Compatible Providers.

#### Mga Konsiderasyon Tungkol sa Performance {#performance-considerations}

Ang Ultimate Multisite ay hindi mabagal na application; sa katunayan, ito ay napakabilis. Gayunpaman, gumagana lamang ito hangga't maganda ang underlying application at infrastructure nito at maaari lamang gamitin ang mga bagay na naa-access nito.

Isipin mo ito: Ikaw ang network administrator ng isang Ultimate Multisite installation na may 100 sites. Ang ilan sa mga site na iyon ay gumagana nang maayos at umaakit ng maraming website visitors araw-araw.

Ang sitwasyong ito ay magiging iba kung mas maliit ang saklaw, halimbawa isa hanggang limang sites lang, pero bago dumating ang malalaking problema sa laki (scale), makikita na ito.

Kung hindi inaalagaan, ang iisang Ultimate Multisite site ang magiging responsable sa pagtugon sa mga kahilingan ng lahat ng bisitang site. Ang mga kahilingang ito ay maaaring para sa dynamic PHP pages o static assets tulad ng stylesheets, javascript, o media files. Kahit isa o isang daang sites, ang mga gawaing ito ay nagiging paulit-ulit, monotonous, at sayang. Hindi kailangan gumamit ng CPU power at memory para iproseso ang isang PHP file kung ang output ay parehong static na impormasyon para sa bawat kahilingan.

Gayundin, ang isang kahilingan para sa isang PHP o HTML page ay nagdudulot naman ng maraming susunod na kahilingan para sa mga scripts, stylesheets, at image files. Ang mga kahilingang ito ay direktang tinatarget sa iyong Ultimate Multisite server.

Madali itong malulutas sa pamamagitan ng pag-upgrade ng server, pero hindi nito inaayos ang pangalawang problema—ang geographic latencies (pagkaantala dahil sa distansya). Kailangan ng maraming server sa iba't ibang lokasyon para maresolba nang tama ang problemang ito.

Dahil dito, ginagamit ng karamihan ng network administrator ang front-end caching solutions at content distribution networks (CDN) para matugunan ang mga kahilingan para sa static pages. Ang pagtugon sa mga kahilingang ito at paghahatid ng mga assets bago pa dumating ang request sa server ay nakakatipid ng processing resources, inaalis ang mga pagkaantala, iniiwasan ang hindi kinakailangang upgrade, at pinapahusay ang mga investment sa teknolohiya.

Kasama sa Ultimate Multisite ang isang sopistikadong Cloudflare add-on na nagbibigay-daan sa mga network administrator na ilagay ang kanilang instalasyon sa likod ng Cloudflare at gamitin hindi lang ang kakayahan nitong mag-cache, kundi pati na rin ang DNS hosting, SSL certificates, at security mechanisms.

#### Mga Backup {#backups}

Maaari kang humingi ng payo tungkol sa backups sa 50 tao at makakuha ng 50 iba't ibang opinyon tungkol sa mga backup strategy. Ang sagot ay, depende iyan.

Ang hindi pinagtatalunan ay kailangan ang mga backup at halos imposible na hindi ito pinamamahalaan ng provider, lalo na kung nag-aalok sila ng managed service. Dahil dito, hihingi ang mga customer ng tulong sa network administrator para magbigay at mamahala sa serbisyong ito. Sino ang hinahanap ng network administrator ay isang ganap na ibang problema.

Para sa bahaging ito, pag-ayon tayo na ang backup ay isang point-in-time copy ng estado ng sistema noong sinimulan ang backup. Sa simpleng salita, anuman ang estado ng sistema noong oras ng backup, iyon ang maikukuhanan at itatago sa backup.

Sa pag-unawang ito, ang sagot kung paano makakamit ang mga backup at ano ang pinakamahusay para sa iyong environment ay lubos na nakadepende sa iyong mga pangangailangan at kakayahan ng hosting provider na matugunan ang mga pangangailangang iyon. Gayunpaman, mula sa pinaka-opinionated hanggang sa hindi gaanong opinionated, ang mga opsyong nasa ibaba ay dapat magbigay ng ilang gabay.

#### Snapshots {#snapshots}

Ang snapshots ay parang "silver bullets" para sa backups dahil madali, walang komplikasyon (hanggang sa gusto mong i-restore), at "gumagana lang." Ngunit nangangailangan ito ng tulong mula sa iyong provider at kadalasan ay aplikable lamang kung mayroon kang VPS (Virtual Private Server) o katulad nito. Maraming provider na nakalista sa aming dokumentasyon ng ‘Compatible Providers’ ang nag-aalok ng mga backup na hindi na nangangailangan ng karagdagang pakikialam o konsiderasyon mula sa network administrator.

Kung ang mga traditional backup ay tumatarget sa mga files at database, ang snapshot naman ay tumatarget sa buong disk. Ibig sabihin, hindi lang nasasalo ang data ng site sa snapshot kundi pati na rin ang operating system at configuration nito. Para sa marami, ito ay malaking bentahe dahil halos agad kang makakagawa ng bagong sistema mula sa isang snapshot at maibabalik ito sa operasyon para palitan ang may problema o sira na instance. Katulad nito, ang proseso ng recovery para makuha lang ang mga files ay nangangailangan lamang ng pag-attach ng snapshot image bilang disk sa kasalukuyang instance para magamit at makopya ang mga files.

Maaaring magkaroon ng dagdag na bayad ang snapshots mula sa hosting provider pero ito ay parang insurance laban sa aksidente.

#### External Scripts {#external-scripts}

Mukhang walang kulang sa mga external scripts at solusyon para i-backup ang WordPress at MySQL resources, at maganda itong gumana para sa Ultimate Multisite dahil isang WordPress plugin ito na gumagamit ng WordPress filesystem at database. Kaya ang solusyong nagba-backup ng mga WordPress sites ay sapat na matutugunan ang pangangailangan ng Ultimate Multisite.

Hindi namin irerekomenda ang isa kaysa sa iba, pero ang pangkalahatang payo namin ay magpatakbo ng ilang backup at restore tests para masigurado na gusto mo ang resulta at "tiyakin nang tiyak" sa pamamagitan ng patuloy na pag-evaluate ng script at ng kakayahan nito lalo na kung may ginagamit kang differential backup strategy.

Dapat tandaan na habang tumatakbo ang mga scripts na ito, tataas ang system load kaya dapat itong isaalang-alang.

#### Plugins {#plugins}

Halos walang problema sa WordPress na hindi malulutas gamit ang isang plugin at kung hindi mo gusto ang pamamahala ng external scripts, marahil ang plugin ang susunod na pinakamagandang opsyon.

Bagama't nag-iiba ang mga plugin sa kanilang mga opsyon at feature, karaniwan silang gumagawa ng parehong trabaho: kopyahin ang mga file at database ng WordPress. Pagkatapos nito, magkakaiba ang kanilang mga functionality dahil may ilang plugin na nagpapadala ng mga backup sa mga external service tulad ng Google Drive o Dropbox, o sa isang uri ng compatible object storage service gaya ng S3, Wasabi, o iba pa. Ang mas kumpletong mga plugin ay nagbibigay ng differential backups o isang estratehiya para i-backup lamang ang mga datos na nagbago upang makatipid sa gastos sa external storage.

Sa pagpili mo ng iyong plugin, siguraduhing tingnan mo kung ito ba ay multisite aware. Dahil sa paraan ng paggana nito habang tumatakbo ang backup, maaari kang maghintay ng pansamantalang bigat (load) sa server hanggang matapos ang proseso.

#### Domain at SSL {#domain-and-ssl-1}

Marami na ang napag-uusapan tungkol sa mga domain name sa multisite _subdomain_ mode. Isang halos unibersal na solusyon para sa mga network administrator ay ang paggamit ng wildcard DNS entries.

![Wildcard DNS entry configuration example](/img/config/settings-domain-mapping.png)

Ang uri ng DNS entry na ito ay matagumpay na magre-resolve ng mga _subdomain_ tulad ng ‘site1.domain.com’ at ‘site2.domain.com’ sa isang IP address na 1.2.3.4, kaya sinusuportahan nito ang Ultimate Multisite at sa mas malawak na antas ng WordPress Multisite gamit ang _subdomain_ mode.

Maaaring gumana ito nang perpekto para sa HTTP dahil binabasa ang target host mula sa HTTP headers ngunit bihira na ngayon na napakasimple ng web kung saan halos mandatory na ang mga secure HTTPS transaction.

Mas swerte na may mga madaling opsyon para sa SSL certificates. Sa _subdirectory_ mode, pwedeng gamitin ang regular domain certificate. Ang mga ito ay madaling makuha at libre mula sa mga hosting provider na gumagamit ng libreng LetsEncrypt service o iba pang pinagmumulan. Kung hindi naman, maaari itong bilhin nang komersyally mula sa mga awtoridad kung kaya mong mag-generate ng certificate signing request.

Para sa _subdomain_ mode, ang paggamit ng wildcard SSL certificate ay perpektong babagay sa isang wildcard domain at magpapahintulot na ang certificate ay maging awtoritatibo para sa root domain at lahat ng _subdomains_ nang walang dagdag na setup.

Gayunpaman, dapat tandaan na ang wildcard SSL certificates ay maaaring hindi gumana sa mga serbisyo tulad ng Cloudflare maliban kung nasa enterprise plan ka o itatakda mo ang entry sa DNS only kung saan mabibigyang-bypass lahat ng caching at optimization.

Ang Ultimate Multisite out-of-the-box ay nagbibigay ng solusyon sa problemang ito na nagpapakita ng aming malawak na karanasan sa mga pangangailangan ng WordPress multisites. Ang pag-activate ng simpleng add-on na ito ay magpapahintulot sa Ultimate Multisite na gamitin ang iyong Cloudflare credentials para awtomatikong magdagdag ng DNS entries para sa network sites sa Cloudflare at itakda ang kanilang mode bilang ‘proxied’. Sa ganitong paraan, ang bawat network subsite, kapag ginawa, ay magkakaroon ng buong proteksyon at benepisyo ng Cloudflare kasama ang SSL.

Depende sa kalikasan at layunin ng iyong Ultimate Multisite installation, maaaring kailanganin ng mga customer na gumamit ng sarili nilang domain. Sa kasong ito, ang network administrator ang may pananagutan sa paglutas ng dalawang problema. Una, ang pag-host ng pangalan ng domain at pangalawa, ang SSL certificates para sa domain na iyon.

Para sa marami, madali lang gamitin ang Cloudflare. Ang kailangan lang gawin ng customer ay ilagay ang kanilang domain sa Cloudflare, i-point ang CNAME sa root domain ng Ultimate Multisite, at i-map ang kanilang domain sa Ultimate Multisite para makapagsimula na magamit ang kanilang custom domain name.

Bukod dito, kailangang hanapin ang ibang mga solusyon kaya inirerekomenda ng Ultimate Multisite ang listahan ng mga Compatible Providers. Ito ay dahil ang proseso ng pag-set up ng DNS at SSL ay maaaring hindi madali. Gayunpaman, sa integrasyon ng Ultimate Multisite sa mga provider na ito, malaki ang nabawas na kumplikasyon at awtomatiko ang proseso.

#### Plugins {#plugins-1}

Malamang na kailangan mo ng dagdag na mga plugin para magbigay ng functionality sa iyong mga customer o network sites. Gumagana ba ang lahat ng plugins kasama ng WordPress Multisite at Ultimate Multisite? Depende 'yan.

Bagama't karamihan ng mga plugin ay mai-install sa isang WordPress Multisite, nag-iiba ang kanilang activation at licensing depende sa author.

Ang hamon ay kung paano inilalapat ang licensing sa ilang plugins na nangangailangan ng licensing base sa bawat domain. Ibig sabihin, para sa ilang plugins, kailangang i-activate ng network administrator nang mano-mano ang license para sa bawat plugin sa bawat bagong site.

Kaya mas mabuting kumonsulta muna sa author ng plugin kung paano ito gagana kasama ng WordPress Multisite at kung mayroon bang anumang espesyal na requirement o procedure na kailangan para ma-license ito.
