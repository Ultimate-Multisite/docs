---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101

Ultimate Multisite da WordPress plugin bat da ematezu le WaaS edo Websites as a Service irten dituzten klientelari etorretik eta horiek gure negozioa eta klientelari buruzik onartzeko gabe, beharrezko jakinarazpena ezberdinetik egin behar dugu.

## WordPress Multisite-ak {#the-wordpress-multisite}

Gure guztia hasieraaren WordPress instalazio standard batzuk ezagutzen dituz. Ezinbestek, hori hosting provider-ren control panel-a bidez jartzen duzu edo, irakurri eta zoriondunak, web server eta database berri bat ematen ditu, core file-ak downloadatzen duzu eta instalazio prozesua hasten duzu.

Honek munduan WordPress sail guztietarako funtzionatzen du, baina agentia edo hosting provider-ren perspektibaz, minutu bat gure volumena buruz adierazte dezagun.

WordPress sail bat edo gerua cento bat ere automatik control panel bidez ematen duen synkronizazioa da, baina horiek sailak administrazioan jartzen duenean problema hasten dira. Ez administrazio egin behar direla, malware-ren erabilgar aurretik dago. Administrazioa egiteak eszorua eta resourgia erabilera da, eta WordPress sailak administrazioa erabiliz laguntzeko beste herramienta eta plugin batzuk jasotzen dutela, klientelak administrazio jartzen duela alegia da horrek eszoruek lehiatzen direla.

Gure core-aren beldur, WordPress funtuna "Multisite" deitzen duen funtuna ematen du, zein irudia 2010an WordPress 3.0 lanizteneko lauzapenarekin hasi da. Beren ondoren, berri funtunalitatea introduzia eta segurtasunaren aukerak lapurtzeko asko revisio batzuk hartu ditu.

Esencialan, WordPress multisite-a irudia hau da: Un universitate bat instalazio bat du WordPress-aren, baina jakariak baten sailak bere WordPress sail bat du.

### A Zerbitzaleakua (The Network) {#the-network}

WordPress-en kontekstuan, multisite network berea hori da, nona taldeko subsite bat edo gehiak administrazio dezisten da bat dashboard batetik. Multisite network ez da hosting provider guztiari parean aukera gisa eratu behar baduzu, baina aurreikusi, WordPress-ek jakten nahi du hori modu berean erabiltzen ari den dituzenean wp-config.php file-ean gehiago direkta eta direktiba batzuk jartzeko.

Multisite network eta stand-alone WordPress instalazioa arteko erlainpenak asko dira, baina gurekin laburki adierazituz.

#### Subdomeni vs. Subdirektori (Subdomain vs. Subdirectory) {#subdomain-vs-subdirectory}

Gaur egun behar duzu erabaki bat da: multisite instalazioa subdirektori (*subdirectories*) edo subdomeni (*subdomains*) baten artean erabilikoilea? Ultimate Multisite-ak arte guztietan ondo egiten du, baina horiek artean arkitektura gisa erlainpenak dituzte.

Subdirektori konfiguratziaraan (*subdirectory configuration*), network site-ek nagusi domainaren aldeko bidea heredatzen dute. Adibidez, 'site1' labelatutako network site-ek URL-ren guztia https://domain.com/site1 izango da. Subdomeni konfiguratziaraan (*subdomain configuration*), network site-ek nagusi domainaren aldeko subdomeni berezia izango da. Hau da, 'site1' labelatutako site-ek URL-ren guztia https://site1.domain.com/ izango da.

Arte guztietan erabilera jakin bat aukera horiek dira, baina subdomeniak erabiltzea erlainpen asko ematen du, baina arkitektura gisa gehiago lapurtu eta planifikatu behar duzu.

DNS-en parte, er uso de `_subdirectories_` presenta un problema relativamente simple. Como los sitios de red son simplemente hijos de la ruta principal, solo se necesita una entrada de nombre de dominio para el nombre de dominio principal. Para las `_subdomains_`, el desafío es un poco más complejo y requiere ya sea una entrada CNAME separada para cada sitio de red o una entrada comodín (\*) en los registros DNS.

Otra área a considerar es la del SSL y la emisión y uso de certificados SSL. En la configuración de `subdirectory`, se puede usar un único certificado de dominio ya que los sitios de red son simplemente rutas del nombre de dominio principal. Por lo tanto, un certificado para domain.com proporcionará adecuadamente SSL para https://domain.com/site1, https://domain.com/site2 y así sucesivamente.

En la configuración de `subdomain`, el uso de un certificado SSL comodín es una de las opciones más comunes. Este tipo de certificado SSL proporciona cifrado para un dominio y sus `_subdomains_`. Por lo tanto, un certificado SSL comodín proporcionará cifrado para https://site1.domain.com, https://site2.domain.com y también para domain.com en sí mismo.

Aunque existen otras opciones, estas a menudo tienen un alcance y una aplicación limitados y requieren una configuración y consideración adicionales con respecto a la idoneidad.

#### Plugins y Temas {#plugins-and-themes}

WordPress también tiene sus aspectos negativos, al menos desde la perspectiva del cliente. En una instalación de WordPress independiente, si el administrador del sitio instala un plugin malo o no mantiene su instalación actualizada, la única víctima y perjuicio de este acto es él mismo. Sin embargo, un administrador del sitio que instala un plugin malo en una instalación multisite crea una víctima para cada sitio instalado en la red.

Horain da gain, horregatik WordPress multisite-an konfiguratuta jakin, administuriet situen plugin eta tema instalatzeko aukeritatea site administrator-ek gabe egiten dira eta hori lekuan network administrator edo 'super admin' irola bereizetik jarri egiten da. Horrek, horren privileged role-ak erabakitzen du zer plugin menuak ikusi edo erabiliz lehen administurietarako, eta horrek aukerak pluginak _aktibatu_ edo _deaktibatu_ egin dezake.

Horren arabera, network administrator-ek network-an plugin eta tema instalatzeko espezialista dira eta horiek erabiltzeko aukerak network situen administurietara delegatzen dute. Site administrator-ek bere site-ekin ez dagoen plugin edo tema instalatzeko edo ikusko aukera ez da.

#### Erabiltzaile eta Administurietarrak {#users-and-administrators}

WordPress Multisitean, network situak database berriari ematen dira eta horrek erabiltzaileak, irolak eta aukerak ere ematen dira. Horrek adierazten duen espezialistaa, erabiltzaile guztiek network-aren beldur dira eta ez benetako site-aren beldur.

Horren erantzunaren arabera, erabiltzaileak sortzeko aukera ematzea dazarria ez da eta horrek WordPress Multisitean site administratorietatik hori aukeritatea gabe egiten du eta network administratoraren irola laitzen du. Horrek, network administratoraren espezialista-ek bere site-aren erabiltzaileak sortzeko beharrezko privileged roleak delegatzen dituzte.

<!-- Screenshot unavailable: WordPress Multisite network user management interface -->

Aiaren arabera, erabiltzaileak situa-ekin lotuta jakin badute ere, horiek network-an ematen dira eta horrek network-aren arloiari gabe izan behar dute. Horrek, erabiltzaile-nomenklaturia emateko erabilera ez dagoen testuak izan daiteke horren arabera.

Meskipun ez izan da sistema-ek industrialdeetan, erabiltzailearen emantulari eta autentikazioaren edozein batak (single source) adierazpenak oso dugu adibidean, hori aipatzen duen pertsonalari, jarduerarekin erakundutako WordPress instalazioei ezagutuz, erabiltzailearen administrazioa garrantzitsua da.

#### Media {#media}

WordPress Multisite-an, network site bat database bat badago, media file-ek artean filesystem-eko perruta (path) zehatzak duten.

Standard WordPress lekuak (*wp-content/uploads*) jarraitzen du; baina hori perruta aldatzen da network site-aren bere identifikazioa erakusteko. Konsekuzioz, network site bat media file-ek *wp-contents/uploads/site/[id]* bezala erakusten dira.

#### Permalinks {#permalinks}

Ez hasi dugu aipatutakoa: _subdomain_ konfigueratzea _subdirectory_ konfigueratzea ondorioziko aukerak eta hori da: perretzak (paths).

_Subdirectory_ konfiguerazioan, nagusi site-ak (network bat ematen dutenean sortutako lehen site-ak) eta network subsite-ek dominioa erabilizik aurkitzen duen perruta berri behar dute. Horrek oso argi ezagututako konfliktualitate batzuk potensialitatea du.

Post-ezbetetze gisa, network site-ekin onditu ez dituztenak, nagusi site-an /blog/ perruta bat gehien daudien konfliktualitatearen prevenitzera. Horrek euskaraz 'Posta-ren-irakurri' bezala argi permalink-ezbetetzeak dominio.name/blog/post-name/ bezala erakusten dira.

<!-- Screenshot unavailable: WordPress permalink settings showing /blog/ path in subdirectory configuration -->

_Subdomain_ konfiguerazioan, hori aksioa beharrezkoa ez da, karena network site lehenik bat bere subdomain-ek onditu eta horrek perruta batzuk ez du behar. Horrek bere subdomain-aren boitzerako edozein perruta zehatzak jarraitzen dute.

<!-- Screenshot unavailable: WordPress permalink settings for subdomain configuration -->

#### Static Pages {#static-pages}

_subdirectory_ konfiguratziaraan, erabilgarak (static pages) nazioa gisa potensialena irudi ezberdintasari da, beste batzuekin eta jaringan batek berri perua bere bidean hartzen du.

Horren aurretik, WordPress-ek jatorrizko testuak (site names) ezberdintasari ezarri nahi duengatik, bestelako sitearen nazioa ezberdintasari daitezkeen batzuk blacklist egin dezake. Okeran, jaringan administraldi solito main sitearen perua (root paths) nazioak ematen du.

<!-- Screenshot unavailable: WordPress network settings showing banned site names to prevent conflicts -->

_subdomain_ konfiguratziaraan, nazioa bere ona da eta main sitearekin ez dago korelazio bat ez duela, horrek nazioaren bere ona dela eta irudi ezberdintasari potensialitatea eragikizten.

### Registrazioa (Registration) {#registration}

WordPress Multisite-ren jaringan konfiguratziaraan, erabiltzaile jendia berri eta jakinut erabiltzaileek siteak sortzeko aukera batzuk daude.

<!-- Screenshot unavailable: WordPress Multisite network settings showing registration options -->

Stand-alone WordPress instalazioetan bestelakoan, jaringan siteak erabiltzailearen registrazioa ebazpen edo horirol rolak ematen duen aukerak ez du.

<!-- Screenshot unavailable: WordPress standalone site user registration settings showing limited options -->

Erabiltzaile akunak sortzen dituztenenean, horiek nazioaren lenivelan sortzen dira. Hau da, batzuekin pertsonal site bateko eta beste batzuk bere hone gabe, jaringanari pertenece ditu. Horrek batzuk eragikizun eta batzuk ezagututako laburpenak du.

Adibide, zure WordPress Multisite-ak informazioa eta jatorrizko testuinguru bat dela. Adibidez, news eta informazioaren bizitzarekin lotuta dagoela soilik. Horrek multisite-ak ematen denean, finantzia, teknologia, entretenimendu eta horrerako beste interes-baiten network sites ez daitezkeen, baina plugin eta theme-ek guztia kontrolatzen jarraituz. Harri, lehen network site-ek bere network site-aren erabilera eta erabilera (look and feel) gehiago kontrolatzen dute, bestelako custom post types edo regular post categories-ek uste.

Horren arabera, erabiltzaile bat login egiten duenean, network-an login egiten du eta azpieen network sites-ekin ere login egiten du, erabilera ez dagoela. Hau da ideal soluzioa eta rezultatu honek iragailu abonazioa duen sitea izan denean.

Hala, baina, multisite-aren espezifiko natura eta testuinguruak bere network sites-ezko beste batzuk ematen nahi du eta horiek ez duten harreman edo lotura, erabiltzailearen role-ek manipulatzeko ekstergo edo bestelako plugin-ek beharrezkoa da.

### Domain eta SSL {#domain-and-ssl}

WordPress Multisite instalazio bat gure atzera egiten dio - Wordpress.com. Hau da WordPress multisite-aren lehen testu den eta bere espezifiko bidez moldatzea eta objektua emateko potensialea erakusten du.

Eguneko internetan, SSL (Secure Sockets Layer) erabilera gure obligazioa dela eta WordPress multisite administratorrak hasten dira horiek bizitzarekin.

_subdomain_ konfiguratzean site-ek root domain naizko baza dagoen. Hau da, 'site1' labelatutako site bat 'site1.domain.com' bezala ematen daitezke. Wildcard SSL certificate batekin, network administratorak hori ahal egondu eta network-eko SSL enkriptazio potensialitatea emate ditzake.

WordPress Multisite-ekusiak has domain mapping funtazioa, zein irudiari network sites hauek domainak oso edo network-en root domain bat ezberdinetako domainakarekin erabiliz lehenago ematen da.

Network administratorerik, horrek domain name konfiguratzea eta SSL certificate-ek emateko eta mantentzeko problema bat gehiago iradokitzen du.

Horren arabera, WordPress Multisite-ek [www.anotherdomain.com](http://www.anotherdomain.com) funtazioa 'site1'rekin mapatzea posible egiten du, baina network administratorak DNS entries hauek ekstergo eskaintzea eta SSL certificate-ek implementatzeko ahalegin bat geratzen da.

## Ultimate Multisite {#ultimate-multisite}

WordPress instalazio bat eta Multisite instalazio bat arteko erkeinpenak jabetzen duten bitartean, Ultimate Multisite-ek Website as a Service (WaaS) emateko espezialista arsenal batez zerbait ikusi dezagun.

### Introduktua {#introduction}

Ultimate Multisite-ek Wix.com, Squarespace, WordPress.com edo bere serbizioa proprieta egonbatzea bezala, Website as a Service (WaaS) sortzeko Swiss Army knife da.

Horren ardurazpenaren ondorekin Ultimate Multisite-ek WordPress Multisite-a erabiltzen du, baina horrek network administratorak multisite instalazioarekin aurkitzen dituen problema guztietan ez bat soluzatzen duen bitartean, erabilera handiagoak emateko ahaleginak hobitzen du.

Horren ondorioz, azken arloetan uso-kasak eta horiek suportatzeko beharrezko iradokizunak ikusi dugu.

### Kasuak Erabilera {#use-cases}

#### Kasu 1: Agenzia bat {#case-1-an-agency}

Geroan, agenziako jardueraren garrantzitsuak website-ek diseinatu eta horie hostea edo marketingak beste serbizioak gisa listatzen dituen erabilera dago.

Agencia Ultimate Multisite-akordeak oso eta gogoratzen du interes bat handi da, zein irudiak aurkitzen eta administrazioa egin dezake pluralityan webguneak bat platorma batean. Honek gehiago da agenteak jasotzen dituzten diseinuak zehatzpenak (theme) bezala GeneratePress, Astra, OceanWP edo beste batzuk erabiltzen dutenean Ultimate Multisite-aren aukerak erabil dezake, eta horiek guztietan lekuak bere webguneberako automatikoki aktibatu dezake.

Bestea, agenteen prezioak plugin-ek common eta popular dituztenak gertatzen den teklatuak eta, Ultimate Multisite-aren erabilera, agenteak plugin-ek instalatuta, mantentuta eta erabilera emateko común platorma bat ematen du, zein irudiak.

Geroa, konfiguratuba erabiltzea nahi dugu, eta barne, Ultimate Multisite-ak domain mapping eta SSL certificates egitean oso eraginkor da, hainbat hosting provider eta Cloudflare edo cPanel bezala serbizioetarekin integrazioak bidez.

Ondore, hori irudiak erabiliz edo Ultimate Multisite-aren ardura Cloudflare-aren ardura ondoren iparizten, domain management eta SSL certificates administrazioa gertatzen da oso eraginkor da.

Agenteak webguneak lekuak egindako kontrola zehatagoa mantentzea preferatzen dituztenak, Ultimate Multisite-aren interfaze iragazten duen bidez webguneak lekuak egindako eta client eta planakarekin erlazionatuta ere oso eraginkor da.

![Ultimate Multisite site management interface](/img/admin/sites-list.png)

Plugin-ek eta themes zehatzpenak (themes) per-product baten kontrola mantentzen dira Ultimate Multisite-aren interfaze iragazten duen bidez, plugin-ek eta themes emateko edo horiek ezarrituta jakinarazteko eta bere aktibazio ereduaren eta webgune berri bat egindakoenean zehatzpenak egin dezake.

![Product plugin limitations interface](/img/config/product-plugins.png)

Ekinak (Temak) hauek funtzioak onduki dira, zein espezialistikak tertentu temak aktibatu edo hori gizotzeko aukera dute web-sailan leku bat daiteke.

![Product theme limitations interface](/img/config/product-themes.png)

Agenciask Ultimate Multisitearekin zenbateko ez dugu, nahiz eta horrek horiek egin behar duen jarduera egiten duela - web-sailak oso garrantzitsuak diseinatzeko.

#### Kasu 2: Provedor Niche (Especialista) {#case-2-niche-provider}

Ez dago bat dauna irudi hau: "bat beste gauza bat egin eta hori ondo egin". Ezpezialistikari handiak, horrek espezialitate bat ideak edo serbisua bat maila-idea goiztiaringir autzainduera.

Zerikuz, taldeetan web-sailak promoszionatzean interesduna golfista osoa izan daiteke, edo taldeetan web-sailak emateko esports gamer osoa izan daiteke. Zerikuz, restauranteak berri lekuak emateko bestelako serbisua promoszionatzea?

Beste alegiaren bitartean, common framework eta plataforma-baztertzen serbisuak ematea nahi duzu. Horrek espezialitate beharrezko funtzioak emateko bespoke pluginak diseinatu edo investitu egin duen, edo industriaaren gogintza praktikak diseinatzeko edo forma bat standardizatua edo erabilera behar dituen iragatik izan daiteke.

Ultimate Multisitearen inobazioa bat template sites (template sailak) erabilzea da. Template site batean, temak instalatu eta aktibatu dagoela, beharrezko pluginak instalatuak eta aktibatuta dagoela, eta sample posts edo pages ezarrituta dagoela. Kudeak template batean osatu web-sail bat leku dutenean, templatearen kontuentuak eta aukerak web-saila berri erdatu duen kopiatzen dira.

Niche web-sailak eta serbisuak emateko provider bat bilera, horrek oso handi bideak ematen du custom pluginak eta diseinazioarekin hemen dagoen sail bat instantan ezarritzeko. Kudeak serbisua amaitzen duen espezial input minimala ematea behar du.

Dependetako esuratenduak ondorioz, _subdirectory_ edo _subdomain_ konfiguratura hauek iruki dezake, horrek arteko arkitektura aukerak _subdirectories_ beste bat SSL baimen edo _subdomains_ beste bat wildcard SSL baimen izango dira.

#### Kasu 3: WordPress Web Hosting {#case-3-wordpress-web-hosting}

WordPress webgune ospatzea pertsona dauden artean pertsona ez bezala iruki dezake, baina WordPress-en preinstalatu bertsioa ere customer-ei web espazio emateak eragiten duen gertuzki. Hau da horrek, espezialbideak eta kontu hauek batzuk bat egiteko beharrezkoa da oso espezialbideak emateko.

Ultimate Multisite-ak hori guztia onartzen du WordPress webgune ospatzea beste bat soluzioa emateak. Soluzioaren parte batean, abonazio serbisuak emateko, mugikorrak aurretxeko, txosten formak, eskaintzak eta customer-ekin komunikazioak emateko mekanismoak dago.

WordPress Multisite onartzeko, konfiguratzeko eta mantentzeko beharrezko handi parte bat Ultimate Multisite-ek eragiten du, horrek network administratorrak espezialbide edo niche batekin lotutako aspekta ez barriren jakinaraztean (adibidez, produktu zehaldeak, prezioak eta serbisioen eskaintzak) iruki dezake.

Ultimate Multisite-arekin integratzea buskitzen dituzten developer-ek, soluzioa RESTful API eta esgimendu eragiketa (Webhooks) ere ematen du.

Ez dago beste plugin edo lisentziak ez barriren dependenciaan, Ultimate Multisite-ak Wix, Squarespace, WordPress.com eta beste batzuk baten iruki dezake funtzioak adibideak eta pareko soluzioa emateak.

### Arkitektura Kontuak {#architecture-considerations}

Ez da modu nagusi gidaia, baina Ultimate Multisite instalazioa suportatzeko teknologia jendezketa onartzeko hauek gidaia izan behar dira.

#### Shared vs. Dedicated Hosting {#shared-vs-dedicated-hosting}

Ez dago, ez dira guztiz urdian prestak hosting provider hauek aurki eta batzuk erabilpen osoa duen server-ek erabiltzen dute. Txindura kostaldeko provider-ek irudien maksimuma egitean merkatuen aurrekontu hartzen dituzte. Hau da, Ultimate Multisite instalazioa bat serverra dagoen hilerak bat izan daiteke.

Provider-ek partekatutako aparkia ez dutenean, partaidetze serverrak situak "gertu-gertu" problemaa er감ten dute. Ote, serverra dagoen beste situak irudien garrantzitsuak bitartean leku hartzen dute, eta bat situa oren irudi osoa resource-ek erabiltzen du. Beste aldeetan, hau oso gutxienez situak lento edo ez du inoiz azkenean erantzuten denak.

Web hosting provider bat honezu, eragiketa aukera izango da bere kliuntzak oso txarren prestak, lehen lapen irudi eta altu bounce rate-ek er감ten dituzte, eta horrek kliuntzak beste lekuetan serbisuak bilatzen duenean kliuntzak aukerarekin aldatzen dezaten.

Laburbildu: kostaldea da ulertzea ez du eskatzen.

Ultimate Multisite-ak ondo hosting provider batzukarekin lan egiten dien eta domain mapping eta automatic SSL bezala funkiot emateko erabilera bere erabilera gutxienez ondo dago. Provider-ek eragiketa eskatzen dute eta partaidetze hostingeko ondorebi zehatrak ematen dituzte.

Beste provider batzukari lista eta guztiz konponbidea instalatzeko instruktuak, Compatible Providers dokumentazioan jartu behar duzu.

#### Eragiketa Kontuaren Indarikak {#performance-considerations}

Ultimate Multisite-ak aplikazio lento ez da, baita oso azkar dago. Hau, horrek ondorioz dagoen aplikazio eta infrastrukturaren ondo dagoenez bere erabilera izango da eta bere erabilera jartzen dituenak ere erabiltzen du.

Hau irudizten: Ultimate Multisite instalazioaren network administrator sizki situak dagoenean. Batzuk oso ondo dago eta egunero web bidentarriak hartzen dituzte.

Hauzuak er testu hau oso handi eskala edo bat-katu bizitzaren (one to five sites) maila batean ez izango da, baina eskala handiaren problemaak lehen aurrera egin ondoren erakusten dira.

Ez atxik egin eta ez duten Ultimate Multisite webguneak guztiz bisitarien eskakiz batzuk ematen dituzte. Horrek dinamiko PHP lapurriak edo statiko arteko beste elementuak (estiloa, javascript edo media fileak) izan daiteke. Bat-katu webgunei edo ekin bat izan, hauek iradokizun, monotonia eta ez beharrezkoa izango dira. PHP lapurrak procesatzeko CPU erabilita eta memorya erabiltzea ez da beharrezkoa, horrek guztiz iradokizuna berraina jakin duen statiko informazioa ematen dutenean.

Baina PHP edo HTML lapurrak bat eskakizak, ondorioz, scriptak, estiloak eta imagen fileak jarraitu eskakizak sortzen du. Horrek direktamente zure Ultimate Multisite serverra erabilten eskakizak dira.

Ez dago hori aipatzen problemaa erantzut ez da serveraren upgrade egin dezake, baina ikaslan problema bat lehen aurrera ez du - geographiko latenteak (geographic latencies). Horri iradokizun propertua eta multiple-lokazioan zaharrak serverak erabiltzea lurreko problemaa erantzute gabe.

Horrez, network administurietako gehienduak statiko lapuruen eskakizak ematen dituzten front-end caching solution eta content distribution networks (CDN) erabiltzen dute. Horrek eskakizak ematzea eta serverra aurrera egin baino lehen assetak emateak prosesatzeko resursoak eragiten, retrasuak eliminatzen ditu, ez beharrezko upgradeak aurkitzen du eta teknologia investimentuak maximizatzen du.

Ultimate Multisite-ek Cloudflare add-on bat eskaintzen du, zehandiz administurietan instalazioak Cloudflare-ren ardurailean jarri dezatilean eta horrek cachea, DNS hostea, SSL certificateak eta segurtasun mekanismoak ere erabil dezake.

#### Backups (Eztabaidak) {#backups}

Backups bidez aholku bat 50 pertsona eskatzen du eta backup estrategiak bidez 50 iradokizun ondina hartzen duzu. Abaldia da, hori dependentzia da.

Ez dago ez eskaintzen duen: backupak beharrezki dira eta hori, horiek kontseilaren eskuratzeko prozesua aipatzen du, batez ere hori emateko serbizioa administrazioa erregitzen duen (managed service) bat. Orain, klientak serbizioa emateko eta administrazioan jarraitzeko network administratorari aurkitzen dira. Zer administraturari aurkitu daizkio, hor gehiago problema bat da.

Hauko arloaren bitartean, backup bat sistema eragilearen kopiaren (point-in-time copy) da horrek, backupa gaur egin den testuinguruan dagoen sistema eragilearen jekuana capture egiten da eta itxarri daiteke. Basque soziala ez da, backup egindako testuinguruaren sistemaren jekuana capture egiten da eta itxarri daiteke.

Hauko begiratuarekin, backupak nola emateko eta zure eragilearen (environment) beste zerbait besteko dena, hori gure eskakizuek eta hostearen (hosting provider) horiek eskakizuek satisfazio egiteko potensialaari dependeratuko du. Hala ere, oso opinatuz da batzuk eta txikiagoa batzuk, aipatutako opsioak aukera bat emateko da.

#### Snapshots (Kopiak/Snapshotak) {#snapshots}

Snapshotsak backupak eragileak dira, zehazki, iradokiztasunak ez du (itxarri nahi du beharko), eta "just work" (berria jakin daiteke). Hau, zure erregilearen laguntza behar du, baina gaur egun VPS (Virtual Private Server) edo beste bati dutenean garrantzitsuagoa da. Gure 'Compatible Providers' dokumentazian aipatutako provider batzuk network administratoraren gehiago inguruko ez du backupak emateko, eta ez dute hori ikus behar.

Gabeak traditional backup-ek handiara file-ek eta database-ek, snapshot-ek disk-aren guztia targetatzen du. Horrek esan nahi du, site-ren datua snapshot-ean capture da, baina operating system-ek eta konfigurazioa ere. Biziari oso baten arte, horra handia prestazioa da, porque snapshot-ek ondorioz garrantzitsuak instantenean beste sistema bat emateko eta problema dituzten instance bat er reemplazatzeko lehen daiteke. Beste aldean, file-ek irudiak eramateko recuperazio prozesua, existing instance batean disk gisa snapshot imagea atxilotzea sajaina da, den file-ek erabilera eta kopioa egin dezaten.

Snapshot-ek hosting provider-aren parte bat kostu gehiago emateko bilatzen dira, baina horra eskaintza bat da ondorioz.

#### External Scripts (Ezdatzak Scriptak) {#external-scripts}

WordPress eta MySQL resource-ek backupatzeko edo ezdatzeko external scripts eta soluzioak oso barne dago, eta Ultimate Multisite-eko arte, WordPress filesystem eta databasea erabilten plugin bat dela, horrek ondo lan egiten du. Orain, WordPress sitesbak backupatzeko soluzio bat Ultimate Multisite-ren beharrak konturatara egondu gabe ez da.

Beste script bat bestearen eskaintzen emateko hautatzea ez diremeiz, baina gipuztuak aholkua da, errespetu eta rezultatuak desbetasuneko dira backup eta restore testezin bat egin, eta kontinuaan scripta eta horren funtzionalitatea ebaluatuz "segura izan" behar duzu, batez ere differential backup estrategia bat aplikatzen duen lekuetan.

Garrantzitsu da adierazten, hauek scriptak erabiliz, sistema-aren carga handiagoa aukeratu behar da.

#### Plugins (Pluginak) {#plugins}

WordPress-ek plugin bat ezarekin ez da solutzea eta external scripts administrazioa ez da zure eskatzen duen jarduera, gipuztuak plugin bat da beste espezialoa.

Pluginak ez dute opsio eta funtzioak ondo bat da, baina gure aurrera egiten duen funtsezkoa da WordPress-en file eta database kontuan kopia egitea. Horrekik, funtzioak ondo handiagoak dira; beste pluginek backupak Google Drive edo Dropbox bezala harreman-bait serbisu edo S3, Wasabi edo beste objektu storea kompatiboa serbisuei bidali dezaten. Pluginak gehiago komprehensiboak differential backups edo batzuk haserako datuak backup egiteko estrategiak ematen dute, horrek harreman-bait storage kostuak aurrez lekuan jarraitzea da.

Pluginak aukeratzen duenean, multisite-aware (multisite-eko) dela jakinarazten ezazu. Backup egin duen barkontzean serverra egoera temporale bat esperatu joateke haindu, prozesua amaitu ondoren.

#### Domain eta SSL {#domain-and-ssl-1}

Multisite _subdomain_ moduan domainak bidez gertatzen ari den artean asko eztabaidetu da. Ainetegiak (network administrators) beste batzuk erabiltzeko erantzuna ondo bat da wildcard DNS entries-ek.

![Wildcard DNS entry configuration example](/img/config/settings-domain-mapping.png)

DNS entry hori 'site1.domain.com' eta 'site2.domain.com' bezala subdomainak IP address 1.2.3.4 zuzen du, horrek Ultimate Multisite eta WordPress Multisite erabiltzeko ondo bat da _subdomain_ moduan.

HTTP-rekin perpekto funtzionatzen bilatzen ari den, karena target hosta HTTP header-ekik lekutzen da, baina gaur egun webak gai ez da, non seguratu HTTPS transaksioak gurean praktikan zorrezko dira.

Fortuna ez daiko opsioak eragiketa hasierriagoak dira SSL sertifikatuekin. _subdirectory_ modukoan, ordaindian bat domeniu (domain) sertifikatua jartzen daiteke. Hau daude lehenikokion eta libre prest dago hosting kontratueriek, zein bat LetsEncrypta edo beste neurri bat erabiliziek. Beste kasuetan, sertifikatua emateko eskatzea (certificate signing request) ez duzu nahiz, autoritateak ondorioz komerzialki aurkitzen daiteke.

_subdomain_ modukoan, wildcard SSL sertifikatua bere domeniu wildcardarekin pertsona izango da eta sertifikatua root domainari eta gure _subdomains_ guztietatik aukera izango da ez duzu konfiguerazio bat ez beharrezkoak.

Hala ere, garrantzasta dio, wildcard SSL sertifikatuek Cloudflare bezalako serbisioekin ez jakin nahi du, edo enterprise planan dago edo entradaa DNS-ekari leitzeko (DNS only) ematen duzu, horrek caching eta optimizazio guztietatik ezarritzen daiteke.

Ultimate Multisite-ak bere problema horiarekin soluzio bat ematen du, WordPress multisitesen beharrak bidez gure esperientzia handia erakusten du. Hau simple addona aktibatu egiten du Ultimate Multisite-ari Cloudflare identifikazioak erabiliz eta network site-ekara DNS entry automatikoki Cloudflarean ezartzen eta modea 'proxied' (proksiatuta) ematen du. Horrek, network subsite batek sortu denean, Cloudflare-ren SSL sakon eta bere bidezko prestazioak guztietatik izango da.

Ultimate Multisite instalazioaren arabera eta bere testuinguruan, klientenek bere domeniu erabiltzea beharrezkoa izan dezake. Horretan, network administralari bi problema ezarritzen daitezke: bat, domeniu nazioa (domain name) hostinga eta beste bat, domain-eko SSL sertifikatua.

Bizi, Cloudflare ergitzen dauden bat oso eragikizuna da. Kudeakariak beharko du Cloudflare-an domain-ekoa ipostitu, CNAME bat root domain-era Ultimate Multisite-ra apuntatu eta Ultimate Multisite-an domain-ekoa mapatu behar dute, haiekin bere domain-na irudiak hartzeko aukera hasi.

Hau guztiaren gainean, alternatibak bilatzen behar dira, zehazki horrek gero da, zehazki Ultimate Multisite-k Compatible Providers-aren lista bat ematen du. Hau da, DNS eta SSL-en konponbidea ez dago eragikizuna duen prozesua da. Hala ere, Ultimate Multisite-ren hauek provider-eekin integrazioa duenean, kompleksitatea handiagoa arautzean dago eta prozedura automatikatu dago.

#### Plugins {#plugins-1}

Kudeakariak edo network site-ek funtzioa emateko beste plugins behar dituzte gabe. Hau guztiz pluginak WordPress Multisite eta Ultimate Multisitearekin lan egiten du? Hau da, aukera da.

Laburbildu, pluginen artean gehiago pluginak instalatu egin dezakezu WordPress Multisitean, baina haiekin aktibazioa eta lisentziazazioa autor batetik beste batetara handiagoa da.

Zailtasuna da horrek aplikatzen da lisentziak, gure plugin batzuk per-domain baten arabera lisentzia behar dituzte. Hau da, plugin batzuk dira network administratorari ziuruen manualean aktibatu egin behar du lisentziak leku guztietan.

Ondorekin, pluginen autorerarein eskatzen da besteko pluginak WordPress Multisitearekin ondo lan egiten duen eta lisentziatzeko beharrezko edozein erreguntzak edo prozedurak dituzte.
