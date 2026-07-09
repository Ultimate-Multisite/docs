---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101 {#ultimate-multisite-101}

Ultimate Multisite dia plugin WordPress izay ahafahanao manolotra WaaS na Websites as a Service ho an'ny mpanjifa. Alohan'ny handroso sy fianarana ny fomba hanampian'i Ultimate Multisite amin'ny fandraisana anjara iainanao sy ireo mpanjifanao dia misy fahalalana fototra tokony azontsika.

## Ny WordPress Multisite {#the-wordpress-multisite}

Mino antsika rehetra no mahazatra amin'ny fametrahana WordPress izay efa misy (stock-standard). Na mamorona azy ianao amin'ny alalan'ny control panel an'ny hosting provider anao na, ho ireo mpanjaka matanjaka dia manamboatra server sy database vaovao, mandray ny fichier fototra ary manomboka ny dingana fametrahana.

Misy WordPress site an'ny olona maro maneran-tany izany, fa amin'ny fomba fijerin'ny agency na hosting provider dia miresaka momba ny habetsahana (volumes) isika iray.

Na dia azo atao aza ny mamoronaWordPress site iray na hatramin'ny ankamaroana amin'ny alalan'ny control panel automated, dia hahita olana eo roaka rehefa lasa fitantanana ireo site ireo. Raha tsy vitan'ny fitantana azy ianao dia lasa tanjona lehibe ho an'ny malware ianao. Ny fitantanana dia fahaizana mitaky ezaka sy loharanon-karena ary na dia misy fitaovana sy plugin ivelany azo ampiasaina mba hanatsarana ny fitantanana sy ny fanatanterahana ireo WordPress site aza, ny zava-nitranga fa ny mpanjifa dia manana fahafahana mandeha amin'ny fitantanana dia mety ho voavaha mora izany ezaka rehetra.

Ao anatin'ny fototra (core) azy, ny WordPress dia manome fitaovana iray antsoina hoe ‘Multisite’ izay nisy fiandohana tamin'ny 2010 rehefa nivoaka ny WordPress 3.0. Hatramin'izany vao dia nahazo fanavaozana maro izy natao mba hampidirana fahaiza-manao vaovao sy hanamafisana ny fiarovana.

Raha fintinina, azo heverina ho toy izao ny WordPress multisite: Ny Oniversite iray dia mitazona fametrahana WordPress tokana fa ny fakalazana (faculty) tsirairay dia mitazona WordPress site manokana.

Mba hanazavana ity fehezanteny ity isika hifantoka amin'ny teny fototra vitsivitsy izay misy ao anatin'ny antontan-taratasy Ultimate Multisite ihany fa eo amin'ny vondron'ny WordPress koa.

### Ny Tambonina (The Network) {#the-network}

Amin'ny lafiny WordPress, ny multisite network dia toerana ahafahana mitantana ireo subsite maro avy amin'ny dashboard iray. Na dia miova aza ny fomba famoronana multisite network eo anelanelan'ny mpamatsy hosting samihafa, dia matetika dia misy toromarika fanampiny vitsivitsy ao amin'ny fichier `wp-config.php` mba hanomezana ny WordPress fahalalana fa miasa amin'ity fomba manokana ity izy.

Misy fahasamihafana maro eo anelanelan'ny multisite network sy ny fametrahana WordPress tsy misy (stand-alone installation) izay hohazavaina fohy isika.

#### Subdomain vs. Subdirectory {#subdomain-vs-subdirectory}

Iray amin'ireo fanapahan-kevitra voalohany tokony hataonao dia hoe raha ny fametrahana multisite dia hiara-miasa amin'ny _subdirectories_ (fizarana) na _subdomains_ (domaine aloha). Ny Ultimate Multisite dia miasa tsara amin'ireo safidy roa ireo, saingy misy fahasamihafana ara-drafitra eo amin'ireo fametrahana roa ireo.

Ao amin'ny fametrahana _subdirectory_, ny toerana (path) ananan'ny sites ao anatin'ny network dia miankina amin'ny anaran'ny domain lehibe. Ohatra, ny site antsoina hoe ‘site1’ dia hanana ny URL feno ho https://domain.com/site1. Ao amin'ny fametrahana _subdomain_, ny site ao anatin'ny network dia hanana ny _subdomain_ manokana avy amin'ny anaran'ny domain lehibe. Noho izany, ny site antsoina hoe ‘site1’ dia hanana ny URL feno ho https://site1.domain.com/.

Na dia safidy marina aza ireo roa ireo, ny fampiasana _subdomains_ dia manome tombony maromaro fa mitaky fisainana sy fandrindrana bebe kokoa amin'ny rafitra azy.

Amin'ny lafiny DNS dia tsotra kokoa ny fampiasana ireo `_subdirectories_`. Satria ny toerana an-tserasera dia zanak'ilay lalana lehibe, mila entry domain iray ihany no ilaina ho an'ny anaran-tsarimihetsika lehibe. Raha momba ny `_subdomains_` kosa, dia sarotra kely kokoa izany satria mitaky fampiasana CNAME entry manokana ho an'ny toerana an-tserasera tsirairay na fampiasana wildcard (*) ao amin'ireo DNS records.

Ny lafiny hafa tokony hodinihina dia ny SSL sy ny famoronana sy fampiasana ireo sertifika SSL. Amin'ny fanamboarana `_subdirectory_`, azo ampiasaina ny sertifika iray ho an'ny domain satria ny toerana an-tserasera dia lalana (path) amin'ilay anaran-tsarimihetsika lehibe. Noho izany, ny sertifika ho an'i domain.com dia afaka manome SSL tsara ho an'ny https://domain.com/site1, https://domain.com/site2 ary toy izao.

Amin'ny fanamboarana `_subdomain_`, ny fampiasana wildcard SSL certificate dia iray amin'ireo safidy mahazatra indrindra. Ity karazana sertifika SSL ity dia manome fiarovana (encryption) ho an'ny domain sy ireo `_subdomains_` ao aminy. Noho izany, ny wildcard SSL certificate dia hanome fiarovana ho an'ny https://site1.domain.com, https://site2.domain.com ary koa ho an'i domain.com mihitsy.

Na misy safidy hafa aza, matetika dia voafetra amin'ny fatra sy ny fampiasana izy ireo ary mitaky fanamboarana sy fandinihana hafa momba ny mety ho azo atao.

#### Plugins sy Themes {#plugins-and-themes}

Inona no ataon'i WordPress izay mampanina azy koa, indrindra raha jerena avy amin'ny lafiny mpampiasa (customer). Raha misy fampiasana WordPress iray manokana (stand-alone installation) dia raha misy administrator ny tranonkala nampiditra plugin ratsy na tsy mitazona ny fampiasana azy ho vaovao, dia izy ihany no ho loha-taranaka sy olana amin'izany asa izany. Na izany aza, rehefa manome plugin ratsy ny administrator amin'ny fanamboarana multisite, dia miteraka loha-taranaka ho an'ny toerana rehetra voafidy ao anatin'ny tambajotra (network).

Izany noho izany rehefa voafidy ho WordPress multisite dia manala ny fahaizana an'ny mpitantana ireo tranokala (site administrators) hamerina plugin sy theme, ary manova azy ho an'ny "network administrator" na "super admin" vaovao. Ity anjara manan-danja ity dia afaka manapa-kevitra raha avelanao ny mpitantana ireo tranokala ao amin'ny tambajotra (dashboard) hiasa amin'ny menu plugin ve, ary raha izany dia mivelatra ho fahaizana hanatanteraka (_activating_) na hanafoana (_deactivating_) ireo plugin ireo.

Amin'izay lafiny io, ny network administrator no tompon'andraikitra amin'ny fametrahana plugin sy theme ao anatin'ny tambajotra ary manome alalana (permissions) mba hampiasain'ireo plugin sy theme ireo ho an'ireo tranokala ao amin'ny tambajotra. Tsy afaka mametraka plugin na theme ny mpitantana ireo tranokala, na tsy afaka miditra amin'ny plugin sy theme izay tsy voatendry azy ireo.

#### Mpampiasa sy Mpitantana (Users and Administrators) {#users-and-administrators}

Ao anatin'ny WordPress Multisite, ny tranokala rehetra ao amin'ny tambajotra dia mizara ny database iray ary noho izany dia mizara ny mpampiasa, ny anjara toerana (roles), ary ny fahaizana (capabilities) mitovy. Ny fomba tsara indrindra hihevitra azy dia hoe ny mpampiasa rehetra dia mpikambana ao amin'ny tambajotra fa tsy tranokala iray manokana.

Noho izany fahazoana izany dia mety tsy tiana ho an'ny mpampiasa ny famoronana mpampiasa ary noho izany dia manala ny fahaizana io avy amin'ny mpitantana ireo tranokala ary manova azy ho an'ny network administrator. Amin'izay lafiny, ny network administrator dia afaka manome ny zo ilaina (privileges) ho an'ny site administrator mba hahafahany mamorona kaonty mpampiasa ho an'ny tranokala manokana.

<!-- Screenshot unavailable: WordPress Multisite network user management interface -->

Mamerina indray ny fanambarana etsy ambony, na dia toa mifandray amin'ny tranokala iainana ireo kaonty mpampiasa, dia voatendry ho an'ny tambajotra izy ary noho izany dia tsy maintsy miavaka eo amin'ny tambajotra. Mety misy toe-javatra izay tsy azo atao ny fametrahana anarana mpampiasa satria antony io.

Na dia tsy fomba mahazatra amin'ny rafitra orinasa aza, ity loharanon-teny iray ho an'ny fametrahana sy fanamarinana mpampiasa (user registration and authentication) dia sarotra kokoa ho fantatry ny olona izay mahazatra amin'ny WordPress misy manokana (stand-alone installations), satria mora kokoa ny fitantanana mpampiasa eo amin'izany.

#### Media {#media}

Rehefa misarika database iray ny tranokala maro ao anatin'ny WordPress Multisite, dia mitazona lalana samihafa eo amin'ny rafitry ny fitaovana (filesystem) ho an'ny rakitra media izy ireo.

Ny toerana mahazatra an'ny WordPress (wp-content/uploads) dia mijanona ho toy ny teo aloha; na dia ovaina aza ny lalany mba hanehoana ny famantarana manokana an'ilay site maro. Vokatr'izany, ny rakitra media ho an'ny site maro dia miseho amin'ny endrika wp-contents/uploads/site/[id].

#### Permalinks {#permalinks}

Efa nilaza teo aloha fa misy tombony manokana ny fomba fanaovana _subdomain_ mihoatra ny _subdirectory_. Iza izany no lalana (paths).

Amin'ny fomba _subdirectory_, dia tsy maintsy mitovy lalana eo amin'ny tranokala lehibe (ilay voalohany no namboarina rehefa vita ny tambajotra maro) sy ireo site maro ao anatin'ny tambajotra izy rehetra manaraka avy amin'ny anaran'ny domain. Mety hitarika fifanolanana be dia be izany.

Ho an'ny posts, dia azo ampiana lalana /blog/ tsy maintsy ho an'ilay site lehibe mba hisorohana ny fifanolanana amin'ireo site maro ao anatin'ny tambajotra. Midika izany fa ny permalink tsara toy ny ‘Post name’ dia haseho amin'ny endrika domain.name/blog/post-name/.

<!-- Screenshot unavailable: WordPress permalink settings showing /blog/ path in subdirectory configuration -->

Amin'ny fomba _subdomain_, tsy ilaina ity asa ity satria ny site maro tsirairay dia mahazo fahasamihafana tanteraka amin'ny domain ary tsy mila miankina amin'ny lalana iray. Fa izy ireo dia mitazona lalany manokana mifototra amin'ny _subdomain_ ananany.

<!-- Screenshot unavailable: WordPress permalink settings for subdomain configuration -->

#### Static Pages {#static-pages}

Ao amin'ny fepetra ao amin'ny _subdirectory_ dia misy mety hisian'ny fifanolanana anarana amin'ireo pejy statika ho toy ny toerana lehibe ary ireo tranonkala tambajotra (network sites) dia mizara ny lalana mitovy.

Mba hisorohana izany, manome fomba iantsoana an-tsokosoko WordPress mba hanakana anarana sasany izay tsy hifanolana amin'ny anaran'ny tranonkala voalohany. Matetika, ny mpitantana tambajotra dia manoratra ireo lalana fototra (root paths) an'ireo pejy ao amin'ilay tranonkala lehibe.

<!-- Screenshot tsy azo jerena: Fampisehoana ny fepetra tambajotra WordPress mampiseho ireo anaran'ny toerana voafetra mba hisorohana fifanolana -->

Ao amin'ny fepetra _subdomain_ dia voafehy ny mety hisian'ny fifanolanana anarana noho ny _subdomain_, satria manokana ho an'ilay tranonkala tambajotra izy ary tsy mifandray amin'ny tranonkala lehibe na inona na inona.

### Fisoratana (Registration) {#registration}

Ao anatin'ny fepetra tambajotra WordPress Multisite dia misy safidy vaovao maromaro ho an'ny fisoratana anarana mpampiasa, izay ahafahana mamorona toerana vaovao sy manome toerana ireo mpampiasa efa misy.

<!-- Screenshot tsy azo jerena: Fampisehoana ny fepetra tambajotra WordPress Multisite mampiseho ireo safidy fisoratana anarana -->

Tsy toy ny fametrahana WordPress iray manokana (stand-alone), dia tsy mitazona ireo safidy mahazatra ho an'ny fisoratana anarana mpampiasa na fanomezana toerana ireo fisoratana anarana ireo ireo tranonkala tambajotra.

<!-- Screenshot tsy azo jerena: Fampisehoana ny fepetra fisoratana anarana mpampiasa amin'ny tranonkala WordPress iray manokana mampiseho safidy voafetra -->

Rehefa vita ireo kaonty mpampiasa, dia vokarina ao haavon'ny tambajotra (network level) ireo kaonty ireo. Noho izany, fa tsy mitondra anisan'ny toerana iray manokana izy ireo fa mitondra anisan'ny tambajotra. Manana tombony sy fatiantoka manokana izany.

Ohatra, ohatra ny WordPress Multisite anao dia momba ny vaovao sy fampahalalana no iantsoana. Azo ataonao ny multisite ary avy eo mamorona toerana maromaro ho an'ny fitantanana ara-bola, teknolojia, fialan-tsasatra ary sehatra hafa izay misy liana samihafa, fa mitazona ny fanaraha-maso lalina amin'ny plugins sy themes rehetra. Ny toerana tsirairay ao amin'ilay network site dia hanana fahefana lehibe kokoa amin'ny endrika sy ny traikefan'ny mpampiasa an'ilay network site noho ireo custom post types na regular post categories.

Amin'izay fomba io, rehefa miditra ny mpampiasa, dia miditra ao amin'ny network ianao ary amin'ny farany dia miditra ao amin'ny toerana tsirairay ao amin'ilay network site koa mba hanomezana traikefa tsy misy fahasamihafana. Raha toa ka ny toerana vaovao dia mifototra amin'ny fandraisana vola (subscription based) izany, dia io no vahaolana sy vokatra tsara indrindra.

Na izany aza, raha ny tanjona sy ny antony namboarin'ilay multisite dia hanolotra toerana maromaro tsy mifandray amin'ny hafa ianao, dia matetika mila plugins ivelany na fanampiny mba hanovana ny anjara asan'ny mpampiasa.

### Domain sy SSL {#domain-and-ssl}

Andao hiresaka momba ny fametrahana WordPress Multisite izay tena mety ho very amin'ny saina antsika - Wordpress.com. Io no ohatra mivelatra indrindra momba ny WordPress multisite ary mampiseho ny fahaizany lehibe amin'ny fanovana sy famoronana azy mba hanatanterahana tanjona iray manokana.

Amin'izao fotoana anio, ny fampiasana SSL dia tena ilaina ary ireo mpitantana network WordPress multisite dia miatrika ireo fanamby ireo tsy ho ela.

Ao amin'ny fametrahana _subdomain_ dia natao ny toerana mifototra amin'ny domain fototra (root domain name). Noho izany, ny toerana antsoina hoe ‘site1’ dia hatao hoe ‘site1.domain.com’. Amin'ny fampiasana sertifika SSL wildcard, afaka mandray anjara amin'ity fanamby ity ny mpitantana network ary manome fahaizana fiarovana (SSL encryption) ho an'ilay network.

Ny WordPress Multisite dia manana fiasa mifandraika amin'ny domain mapping izay ahafahana mampifandray ireo toerana (network sites) amin'ny anarana domain manokana na anarana domain hafa tsy mitovy amin'ny domain fototra an'ilay tambajotra.

Ho an'ny mpitantana ny tambajotra, izany dia manome dingana fanampiny sarotra eo amin'ny fametrahana ny anaran-domain sy ny famoahana sy fitazomana ireo sertifika SSL.

Amin'izay lafiny, na dia manome fomba iray aza ny WordPress Multisite mba hahafahana mampifandray [www.anotherdomain.com](http://www.anotherdomain.com) amin'ny 'site1', dia mijanona ho an'ny mpitantana ny tambajotra ny fanamby momba ny fitantanana ivelany ireo entry DNS sy ny fanatanterahana ireo sertifika SSL.

## Ultimate Multisite {#ultimate-multisite}

Rehefa fantatra tsara ny fahasamihafana eo amin'ny fametrahana WordPress iray manokana (stand-alone) sy ny fametrahana Multisite, andeha hijery hoe ahoana no fitaovana tena ilaina an'i Ultimate Multisite mba hanomezana Websites as a Service (WaaS).

### Fampidirana {#introduction}

Ny Ultimate Multisite dia toy ny "Swiss Army knife" anao rehefa manao Website as a Service (WaaS) ianao. Heverina hoe Wix.com, Squarespace, WordPress.com ary avy eo mieritreritra ny fananana tolotra anao manokana.

Ao anatiny, mampiasa ny Ultimate Multisite ny WordPress Multisite fa amin'ny fomba izay tsy vahaolana ny olana maro atrehan'ny mpitantana ny tambajotra momba ireo fametrahana multisite fa manatsara ihany koa ny fahaizana ahafahana manome fitaovana azo ampiasaina betsaka.

Ao amin'ireo faritra manaraka dia hijery antsika ny ohatra fampiasana (use cases) sy ny zavatra ilaina mba hanohanana ireo toe-javatra ireo.

### Ohatra Fampiasana (Use Cases) {#use-cases}

#### Tranga 1: Antso (An Agency) {#case-1-an-agency}

Matetika, ny fahaizana fototra an'ny antso dia mifantoka amin'ny famolavolana tranonkala izay misy lafiny toy ny fanomezana toerana (hosting) na ny marketing ho serivisy fanampiny.

Ho anjara, ho Ultimate Multisite dia manome tombom goavana be mpam-panjakana (value proposition) amin'ny agency satria afaka mitazona sy mitantana tranokala maro eo amin'ny sehatra iray izy. Indrindra kokoa ho an'ny agency izay manao fampitahana ny dikan'ny dikan'izy ireo amin'ny thème sasany toy ny GeneratePress, Astra, OceanWP na hafa dia afaka mampiasa ny fahaizan'ny Ultimate Multisite mba hampandehanana azy ireo ho automatique ho an'ny tranokala vaovao tsirairay.

Mitovy amin'izany koa, noho ny betsaka fifanarahana momba ny vidin'ny agency ho plugin malaza sy mahazatra, ny fampiasana ny Ultimate Multisite dia ahafahana mampiasa ireo zavatra efa namboarina (existing investments) amin'ny alalan'ny fanomezana sehatra iombonana izay azo apetraka, atokisana ary ampiasaina ny plugin.

Matetika dia ilain'ny fampiasana configuration izany ary voninahitra ho anao fa manome fahafahana mora be ny Ultimate Multisite mba hanatanterahana ny mapping anarana (domain mapping) sy ny sertifika SSL amin'ny alalan'ny fampifandraisany amin'ny mpamatsy hosting malaza maro toy ny Cloudflare sy cPanel.

Noho izany, amin'ny fampiasana iray amin'ireo mpamatsy ireo na amin'ny fametrahana ny Ultimate Multisite eo ambanin'ny Cloudflare, ny lafiny momba ny fitantanana anarana (domains) sy ny sertifika SSL dia lasa zavatra tsotra.

Ny agency izay tia mitazona fanaraha-maso akaiky kokoa amin'ny famoronana tranokala dia hahatsapa ny fahasahiana amin'ny fomba mora azo atao ny famoronana tranokala sy ny fifangaroana ireo tranokala amin'ny mpanjifa sy ny plan maro amin'ny alalan'ny interface tsara tarehy (streamlined interface) an'ny Ultimate Multisite.

![Ultimate Multisite site management interface](/img/admin/sites-list.png)

Ny fanaraha-maso akaiky momba ny plugins sy ireo thème dia mitazona amin'ny fototra vokatra (per-product basis) amin'ny alalan'ireo interface tsara tarehy an'ny Ultimate Multisite izay ahafahana mametraka na manafaka (hide) ireo plugin sy themes ary ny fomba fiasany rehefa atokisaina ho an'ny tranokala vaovao.

![Product plugin limitations interface](/img/config/product-plugins.png)

Ny thème dia manome fiasa mitovy, izay ahafahana manao ny thème iray ho azo ampiasaina na tsy azo ampiasaina amin'ny famoronana tranokala.

![Product theme limitations interface](/img/config/product-themes.png)

Ho an'ny agency ireo dia hahatsapa fiadanana amin'ny alalan'ny Ultimate Multisite satria ahafahany manao izay tena mahay azy—manamboatra tranonkala tsara indrindra.

#### Tranga 2: Mpamatsy Manokana (Niche Provider) {#case-2-niche-provider}

Misy teny lany taloha hoe, “manao zavatra iray ary ataovy tsara”. Ho an'ny manam-pahaizana maro dia midika izany ny famoronana vokatra na serivisy mifototra amin'ny hevitra fototra tokana.

Mety ianao no mpilalao golif ; izay mampiroborobo tranonkala ho ireo klioba, na mety ianao no mpilalao esports; izay manome tranonkala ho ireo clan. Na mety misy olona iray mampiroborobo serivisy famandriana (booking service) ho an'ny sakafo rehetra ve?

No antony maro dia tianao ny hanome serivisy mifototra amin'ny rafitra sy sehatra iray. Mety hoe efa namorona na nampiasa plugin manokana ianao mba hanomezana ny fiasa ilaina, na mety ho izany no tranga izay mitaky fomba fiasa voafetra (standardized approach) amin'ny famolavolana ara-indambin'ny indostria.

Iray amin'ireo fahaizana vaovao an'ny Ultimate Multisite dia ny fampiasana template sites. Ny template site dia ilay toerana izay efa nampidirina sy napetraka ny thème, ireo plugin ilaina dia voafetra sy napetraka, ary misy posts na pejy ohatra no natao. Rehefa mamorona tranokala vaovao miorina amin'ity template ity ny mpanjifa, dia atokisana ny votoaty sy ny fepetra an'ilay template ho azo ao anatin'ny tranokala vaovao no namboarina.

Ho an'ny mpamatsy toerana manokana (niche sites) sy serivisy, izany dia manome tombony tsy manam-paharoana amin'ny fahaizana mamorona tranokala vonona avy hatrany miaraka amin'ny plugin sy famolavolana manokana. Ny mpanjifa dia mila manome ny zavatra kely indrindra mba hanatanterahana ny serivisy.

Miankina amin'ny fepetra ilainao dia mety ho an'ny _subdirectory_ na _subdomain_ ny fanamboarana, ary amin'izay toe-javatra izay, ny safidy momba ny rafitra dia eo amin'ny mari-pahaizana SSL tsotra ho an'ny _subdirectories_ na mari-pahaizana wildcard SSL ho an'ny _subdomains_.

#### Tranga 3: Fampiasana WordPress Web Hosting {#case-3-wordpress-web-hosting}

Misy fomba maro samihafa hanome hosting ho an'ny tranonkala WordPress, saingy tsy dia tsotra loatra ny manome toerana web ho an'ny mpanjifa miaraka amin'ny dikan-teny efa voa asiana WordPress. Izany no satria mila fanapahan-kevitra sy fandraisana an-tsaina maro izay tokony hifandray mba hanomezana tolotra tena ilain'ny mpanjifa.

Ny Ultimate Multisite dia mahomby amin'izany amin'ny alalan'ny fanomezana vahaolana turnkey feno ho an'ny hosting ireo tranonkala WordPress. Anisan'ireo zavatra ao anatin'ity vahaolana ity ny mekanisma fototra hanomezana serivisy subscription, fitakiana vola, forms checkout, voucher fanaovana tombony ary fifandraisana amin'ny mpanjifa.

Ny asa lehibe maro ilaina mba hanatanterahana, fanamboarana sy fitazonana WordPress Multisite tsara dia voatsara ho mora kokoa ny Ultimate Multisite, satria mila mihevitra fotsiny ireo administrator tambajotra momba ireo lafiny mifandraika amin'ny serivisy na taranja manokana azy toy ny tahan'ny vokatra (product tiers), vidiny ary tolotra serivisy.

Ho an'ireo developer izay te-hifandray amin'ny Ultimate Multisite, ny vahaolana dia manolotra API RESTful sy Webhooks feno ho an'ny famantarana zava-nitranga (event notification).

Tsy mitaky fanohanana ireo plugin sy lisansy ivelany maro i Ultimate Multisite, satria manome vahaolana be tolotra ary azo ampitahaina amin'ny Wix, Squarespace, WordPress.com ary hafa.

### Fandraisana an-tsaina momba ny rafitra (Architecture Considerations) {#architecture-considerations}

Na dia tsy toromarika feno aza izany, ireo zavatra manaraka dia tokony ho torolalana amin'ny safidy marina amin'ireo teknolojia hanohanana ny fanatanterahana Ultimate Multisite.

#### Hosting miaraka (Shared vs. Dedicated Hosting) {#shared-vs-dedicated-hosting}

Mba misy olona rehetra manome asa mitovy, ary ny sasany dia mampiasa fahaizana be amin'ny server. Matetika, ireo mpamatsy mora vidy dia mahazo tombony amin'ny alalan'ny fanatontosana ny haavo avo indrindra amin'ny server. Noho izany, ny fametrahanao Ultimate Multisite dia mety ho iray amin'ireo toerana maro an'ilay server iray ihany.

Raha tsy misy fiarovana mendrika avy amin'ny mpamatsy, ireo tranonkala ao amin'ny server miaraka dia miatrika ny olana hoe 'noisy neighbour'. Midika izany fa ny tranonkala iray ao amin'ny server mitovy dia mampiasa harena be toy izany ka tsy maintsy miady amin'ireo harena mijanona ho an'ny tranonkala hafa. Matetika, izany dia miseho amin'ny alalan fahaverezana haingana na tsy fahafahan'ny famaliana amin'ny fotoana voatsoina ny tranonkala sasany.

Ho mpamatsy hosting ianao, ny fiantraikan'izany dia midika fa ny mpanjifa anao dia ho tratry hafa ny hafainganam-pandehanana ratsy, ny toerana ambany amin'ny Google (page rank) ary ny tahan'ny fialan-tsokajy avo, izay matetika mitarika amin'ny fialan-tsasatra ny mpanjifa rehefa mitady tolotra hafa.

Raha fintinina, mora vidy dia tsy midika fa tsara.

Fantatro fa miasa tsara amin'ireo mpamatsy hosting maromaro i Ultimate Multisite ary mifandray tsara amin'ny tontolo iainany mba hanomezana asa toy ny fametrahana domain (domain mapping) sy SSL automatique. Ireo mpamatsy ireo dia manome lanja lehibe ny fahombiazana (performance) ary manome tolotra haamaro kokoa noho ny shared hosting.

Ho an'ny lisitry ny mpamatsy mifanaraka sy toromarika feno momba ny fanamboarana azy ho tsirairay dia jereo ao amin'ny dokamanta Compatible Providers.

#### Fanamarihana Momba ny Fahombiazana (Performance Considerations) {#performance-considerations}

Tsy rindrambaiko salama i Ultimate Multisite, fa haingana be izy. Na izany aza, miasa hatramin'izay vitan'ilay application sy ny fototra (infrastructure) eo aminy ihany ary afaka mampiasa izay azon'izy ireo ihany.

Hevereso ity: Ianao no mpitantana tambajotra (network administrator) an'ny fametrahana Ultimate Multisite misy 100 tranonkala. Ny sasany amin'ireo tranonkala ireo dia miasa tsara ary mitondra mpitsidika tranokala maro isan'andro.

Ireo toe-javatra dia hafa ny zava-mitranga amin'ny habeny kely, ohatra iray ka hatramin'ny dimy toerana fotsiny, fa rehefa miha lany ela dia ho hita ny olana vokatry ny habeny lehibe.

Raha tsy voafehy, ny tranonkala Ultimate Multisite tokana dia tompon'andraikitra amin'ny fanatanterahana ny fangatahan'ny mpitsidika rehetra ao amin'ireo toerana ireo. Ireo fangatahana ireo dia mety ho an'ny pejy PHP dinamika na zavatra statika toy ny stylesheets, javascript na rakitra media. Na iray sa aharitrany arakaraka ny toerana, ireo asa ireo dia miverimberina, tsy miova ary fatiantoka. Tsy ilaina ny fampiasana hery CPU sy memory mba handramana rakitra PHP raha toa ka mitovy ny fampahatonana (output) ho an'ny fangatahana rehetra.

Mitovy amin'izany, ny fangatahana iray ho pejy PHP na HTML dia miteraka fangatahana maro manaraka ho an'ny scripts, stylesheets ary rakitra sary. Ireo fangatahana ireo dia mikendry mivantana ny server Ultimate Multisite anareo.

Afaka vahaolana tsotra ity olana ity amin'ny alalan'ny fanatsarana ny server ianao, saingy tsy manamboatra ny olana faharoa izany - ny fahasamihafan'ny toerana (geographic latencies). Ilay server maro ao anaty toerana maro no afaka manome valiny marina amin'ity olana ity.

Noho izany, ny mpitantana tambajotra maro dia mampiasa vahaolana caching amin'ny lafiny farany (front-end caching) sy ireo Content Distribution Networks (CDN) mba hanatanterahana ireo fangatahana ho an'ireo pejy statika. Ny fanatanterahana ireo fangatahana ireo sy ny fametrahana zavatra alohan'ny tonga amin'ny server dia manome fahaizana ara-panatanjahantena, manala ny fahatarana, manakana ny fanatsarana tsy ilaina ary mampitombo ny fampiasam-bola amin'ny teknolojia.

Ny Ultimate Multisite dia ahitana modifika Cloudflare sarotra izay ahafahan'ireo mpitantana tambajotra mametraka ny fametrahany ao aoriana an'i Cloudflare ary mampiasa tsy ny fahaizana mitahiry (caching) ihany fa koa DNS hosting, SSL certificates ary fomba fiarovana.

#### Backups {#backups}

Afaka mangataka olona 50 ianao mba hanome torohevitra momba ny backups ary handray hevitra samihafa 50 momba ny paikady fanatanterahana backups. Ny valiny dia: miankina amin'izany.

Inona no tsy azo iantsoana ho disadiana dia mila *backups* (fanaovana kopia famerenana), ary tena sarotra ny mahatsapa fa tsy vitan'ny mpamatsy izany, indrindra raha manome serivisy *managed*. Noho izany, ny mpanjifa dia hitady ny *network administrator* mba hanome sy hitantana ity serivisy ity. Iza no hitady ny *network administrator* dia olana hafa tanteraka.

Ho an'ity fizarana ity dia hataontsika fifanarahana fa ny *backup* dia kopia iray amin'ny fotoana iray (point-in-time copy) momba ny toe-javatra an'ilay rafitra tamin'ny fotoana nampidirana ilay *backup*. Raha tsotra no lazaina, na inona na inona no toe-javatra an'ilay rafitra amin'ny fotoana nanao *backup*, dia voangona sy voafandrenina ao anatin'ilay *backup* izany toe-javatra izany.

Amin'ity fahatakarana ity, ny valiny momba ny fomba hanatanterahana ireo *backups* ary izay tsara indrindra ho an'ny tontolo iainanao dia miankina betsaka amin'ny zavatra ilainao sy ny fahafahan'ny mpamatsy (hosting provider) hanome ireo zavatra ireo. Na izany aza, araka ny fepetra manokana indrindra ka hatramin'ny tsy misy fepetra mihitsy, ireto no safidy azo atao mba hanomezana toromarika anareo:

#### Snapshots (Fandrefesana) {#snapshots}

Ny *Snapshots* dia toy ny "silver bullets" ho an'ny *backups* satria mora, tsy sarotra (raha te-handray azy amin'ny fampidirana), ary mandeha tsara izy. Na izany aza, mila fanampiana kely avy amin'ny mpamatsy ianao ary matetika dia miankina amin'ny VPS (Virtual Private Server) na zavatra mitovitovy amin'izany no tena ilainao. Misy mpamatsy maromaro voalaza ao amin'ny antontan-taratasy momba ny "Compatible Providers" anay izay manome *backups* tsy mila fampidirana na fanazavana hafa avy amin'ny *network administrator*.

Fahazana, ity ny fanazavana amin'ny teny Malagasy:

Rehefa ny famahan-tsary (backup) mahazatra dia mikendry ireo rakitra sy database, ny *snapshot* kosa dia mikendry ny disk manontolo. Midika izany fa tsy ny angon'ny tranokala ihany no voatahiry ao anatin'ilay snapshot, fa ny operating system sy ny fomba fiasa (configuration) koa. Ho an'ny maro amin'izany io dia tombony lehibe satria azo atao ny mamorona rafitra vaovao haingana be avy amin'ny snapshot ary azo ampiasaina hanoloana ilay rafitra latsaka. Mitovy izany amin'izany, ny dingana famerenana (recovery) mba hahazoana ireo rakitra dia mitaky fametrahana ny sary snapshot ho disk amin'ny rafitra efa misy mba hahafahana miditra sy manamboatra azy ireo.

Mety hitondra fandoavam-bola fanampiny ny *snapshot* avy amin'ny mpamatsy (hosting provider) izany, fa fiantohana izany dia toy ny fiantohana ho an'ny loza.

#### Scripts ivelany (*External Scripts*) {#external-scripts}

Tsy misy olana betsaka momba ireo script sy vahaolana ivelany mba hifampianarana (backup) ireo harena WordPress sy MySQL ary mety tsara ho an'Ultimate Multisite satria plugin WordPress izy, izay mampiasa ny rafitra fiasan'ny WordPress sy ny database. Noho izany, vahaolana manao backup ireo tranokala WordPress dia afaka manome tombony amin'ny filan'ny Ultimate Multisite.

Tsy afaka manoro hevitra script iray ho tsara kokoa noho ny hafa isika fa torohevitra ankapobeny dia ataovy dingana fanandramana backup sy famerenana maromaro mba hahazoana vokatra tianao ary "ataovy antoka" amin'ny alalan'ny fanombanana tsy tapaka ny script sy ny fiasany, indrindra rehefa misy paikady *differential backup* (fanamboarana mifanohitra) ampiharina.

Tokony ho fantatra fa rehefa miasa ireo script ireo dia hanome lanja ny rafitra (system load), izay tokony hodinihina.

#### Plugins {#plugins}

Tsy misy olana tena lehibe amin'ny WordPress izay tsy azo voavaha amin'ny alalan'ny plugin ary raha tsy mahay mitantana ireo script ivelany ianao, dia mety ho ny plugin no safidy tsara indrindra manaraka.

Na dia misy fomba maro ny plugin, nefa matetika mitovy ny asany: ny mamorona kopia amin'ny rakitra WordPress sy ny database. Aorian'izay, miova ny fomba fiasan'izy ireo satria misy plugin sasany afaka mandefa ireo backup ireo mankany serivisy ivelany toy ny Google Drive na Dropbox, na mankany karazana "object storage" mifanaraka toy ny S3, Wasabi, na hafa. Ireo plugin izay mivelatra kokoa dia manome backup diferencial (differential backups) na paikady iray mba hamoronana backup ireo data novana ihany mba hisampiana ny fandaniana amin'ny fitahirizana ivelany.

Rehefa misafidy plugin anao, dia tsara raha fantatrao fa mahafantatra ny fahaizany miasa amin'ny multisite izy. Noho ny fomba fiasany mandritra ny fanatanterahana backup, dia azo inoana fa hisy fampitomboana (load) eo amin'ny server ianao mandra-pahatongan'ny dingana.

#### Domain sy SSL {#domain-and-ssl-1}

Misy resaka maro efa nolazainy momba ny domain anarana amin'ny fomba _subdomain_ ao amin'ny multisite. Vahaolana tena mahazatra ho an'ny mpitantana tambajotra dia ny mampiasa "wildcard DNS entries".

![Wildcard DNS entry configuration example](/img/config/settings-domain-mapping.png)

Ity karazana fidirana DNS ity dia afaka mandray tsara ireo _subdomains_ toy ny ‘site1.domain.com’ sy ‘site2.domain.com’ ary manome an'ilay adiresy IP hoe 1.2.3.4, izay manohana ny Ultimate Multisite sy WordPress Multisite amin'ny fomba _subdomain_.

Mety mandeha tsara ho an'ny HTTP izany satria avy amin'ny header HTTP no apetraka ilay host target fa tsy dia tsotra loatra ny tranonkala anio izay tena voatery ny fifanakalozana HTTPS azo antoka.

Mazava ho azo atao mora ny mari-panome SSL. Amin'ny fomba _subdirectory_ dia azo ampiasaina ny mari-panome domena mahazatra. Ireo dia azo anefa sy maimaim-po amin'ny mpamatsy hosting izay mety mampiasa ny serivisy free LetsEncrypt na loharano hafa. Raha tsy izany, dia azo vidiana ara-barotra avy amin'ireo manam-dalim-barotra raha afaka mamorona ny fangatahana mari-panome (certificate signing request) ianao.

Ho an'ny fomba _subdomain_ dia ny fampiasana wildcard SSL certificate dia mifanaraka tsara amin'ny domain wildcard ary ahafahana manome fahefana ny mari-panome ho tompon'andraikitra ho an'ny domain fototra sy ireo _subdomain_ rehetra tsy misy fanamboarana hafa.

Na izany aza, tokony ho fantatra fa mety tsy mandeha ny wildcard SSL certificate amin'ny serivisy toy ny Cloudflare raha tsy ao amin'ny toromarika enterprise ianao na raha mametraka ny fidirana ho DNS ihany izay dia manakana ny caching sy ny fanatsarana (optimization).

Ny Ultimate Multisite an-tserasera (out-of-the-box) dia manome vahaolana ho an'ity olana ity, mampiseho ny traikefanay mivelatra amin'ny filan'ny WordPress multisites. Ny fanajàna ity add-on tsotra ity dia hampiasana ny Cloudflare credentials anao mba hanampiana entry DNS ho an'ireo toerana (network sites) ao amin'ny Cloudflare sy hametraka ny fomba ho ‘proxied’. Amin'izay fomba io, isaky ny misy subdomain an-tserasera, rehefa voforona, dia hanana ny fiarovana sy tombontsoa manontolo an'i Cloudflare, anisan'izany ny SSL.

Miankina amin'ny karazana sy tanjona an'ny fanatanterahana Ultimate Multisite an-tserasera dia mety mila mampiasa domain manokana ny mpanjifa. Amin'izay toe-javatra io, ny mpitantana tambajotra (network administrator) no iantsoina mba hamahana olana roa: ny fanomezana toerana ho an'ny anaran-tsipiny (domain name hosting) sy ny mari-panome SSL ho an'io domain io.

Ho an'ny olona maro, ny fampiasana Cloudflare dia safidy mora. Ny mpanjifa dia mila apetraka ny domain-ny amin'ny Cloudflare, manondro CNAME ho amin'ny root domain an'i Ultimate Multisite ary mametraka ny domain-ny ao amin'ny Ultimate Multisite mba hanombohana fampiasana ny anarana domain manokana azy.

Ankoatra izany, mila mitady vahaolana hafa izay no antony nampanantenan'i Ultimate Multisite ny lisitry ny Compatible Providers (Vahaolana Mifanaraka). Izany dia satria ny fomba fanamboarana DNS sy SSL dia mety ho zavatra sarotra. Na izany aza, amin'ny alalan'ny fampifandraisan'i Ultimate Multisite amin'ireo provider ireo, dia lasa mora kokoa ny fahasarotana ary voatanteraka ny fomba fiasa.

#### Plugins (Fitaovana Fanampiny) {#plugins-1}

Mety ho mila plugins hafa ianao mba hanomezana fahaizana ho an'ny mpanjifa na ireo toerana ao amin'ny tambajotra (network sites). Ny plugin rehetra ve dia miasa tsara amin'ny WordPress Multisite sy Ultimate Multisite? Miankina amin'izany.

Na dia azo apetraka aza ny plugins maro ao amin'ny WordPress Multisite, dia miova ny fampaktika azy sy ny fanaovana licence avy amin'ny mpanoratra (author) mankany mpanoratra hafa.

Ny olana dia eo amin'ny fomba fampiharana ny licence amin'ny plugins sasany izay mitaky licence isaky ny domain. Izany dia midika fa ho an'ny plugins sasany, mila manao ny administrator an'ny tambajotra ny fanatanterahana (activation) ny licence ho an'ny plugin tsirairay eo amin'ny toerana vaovao.

Noho izany, mety tsara kokoa ny manontany ny mpanoratra ny plugin momba ny fomba iasan'ilay plugin amin'ny WordPress Multisite ary raha misy fepetra na fomba manokana ilaina mba hanomezana licence azy.
