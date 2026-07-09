---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101

Ultimate Multisite yi-WordPress Multisite plugin ekuvumela ukuba unikezele nge-WaaS okanye Websites as a Service kubathengi. Phambi kokuba singene nzulu size sifunde indlela Ultimate Multisite enokunceda ngayo ishishini lakho nabathengi bakho kukho ulwazi olusisiseko ekufuneka silufumene.

## I-WordPress Multisite

Uninzi lwethu luqhelene nofakelo oluqhelekileyo lwe-WordPress. Ungalwenza ngephaneli yolawulo yomboneleli wakho wokubamba iwebhu okanye, kwabanesibindi, usete iseva entsha yewebhu kunye nedatabase, ukhuphele iifayile ezingundoqo uze uqalise inkqubo yofakelo.

Oku kusebenza kwizigidi zeesayithi ze-WordPress kwihlabathi liphela kodwa ngokwembono yearhente okanye umboneleli wokubamba iwebhu masixoxe ngemiqulu umzuzwana.

Nangona kulula ukwenza isayithi enye ye-WordPress okanye nokuba likhulu ngephaneli yolawulo ezenzekelayo, iingxaki ziqala ngokukhawuleza ukubonakala xa kufikwa kulawulo lwezi sayithi. Ukuba zishiywe zingalawulwa uba lixhoba eliphambili le-malware. Ukulawula kuthetha ukusetyenziswa komzamo nezixhobo kwaye nangona kukho izixhobo zangaphandle nee-plugin ezifumanekayo ukunceda ukulungisa ulawulo nolawulo lweesayithi ze-WordPress, inyani yokuba abathengi bagcina ukufikelela kolawulo ithetha ukuba ezi nzame zinokoyiswa ngokulula.

Kumbindi wayo, WordPress ibonelela ngenqaku elibizwa ngokulula ngokuba yi-‘Multisite’ elinemvelaphi yalo ebuyela ku-2010 ekusungulweni kwe-WordPress 3.0. Ukusukela ngoko lifumene uhlaziyo oluninzi olujolise ekungeniseni iimpawu ezintsha nasekuqiniseni ukhuseleko.

Ngokwenyani, i-WordPress multisite inokucingwa ngolu hlobo: IYunivesithi igcina ufakelo olunye lwe-WordPress kodwa ifakhalthi nganye igcina isayithi yayo ye-WordPress.

Ukuze sihlalutye le ngxelo masijonge amanye amagama asisiseko akhoyo hayi kuphela kuxwebhu lwe-Ultimate Multisite kodwa nakuluntu lwe-WordPress.

### I-Network

Ngokwemigaqo ye-WordPress, i-multisite network yindawo apho inani leesayithi ezingaphantsi linokulawulwa khona ukusuka kwi-dashboard enye. Nangona ukwenza i-multisite network kwahlukile phakathi kwababoneleli bokubamba iwebhu, isiphumo sokugqibela sihlala sisiba yimiyalelo embalwa eyongezelelweyo kwifayile ye-wp-config.php ukwazisa WordPress ukuba isebenza kule modi ethile.

Kukho umahluko ocacileyo omninzi phakathi kwe-multisite network kunye nofakelo lwe-WordPress oluzimeleyo esiza kuwuxoxa ngokufutshane.

#### Subdomain vs. Subdirectory

Esinye sezigqibo zokuqala oza kufuneka uzenze kukuba ingaba ufakelo lwe-multisite luza kusebenza nge-_subdirectories_ okanye nge-_subdomains_. Ultimate Multisite isebenza kakuhle ngokulinganayo kuzo zombini ezi khetho kodwa kukho umahluko othile wolwakhiwo phakathi kwezicwangciso zombini.

Kwisicwangciso se-_subdirectory_, iisayithi zenetwork zizuza indlela esekelwe kwigama le-domain ephambili. Umzekelo isayithi yenetwork ebhalwe ‘site1’ iya kuba ne-URL epheleleyo njenge https://domain.com/site1. Kwisicwangciso se-_subdomain_, isayithi yenetwork iya kuba ne-_subdomain_ yayo ethathwe kwigama le-domain ephambili. Ngoko isayithi ebhalwe ‘site1’ iya kuba ne-URL yayo epheleleyo njenge https://site1.domain.com/.

Nangona zombini iinketho zingamakhetho asemthethweni ngokupheleleyo, ukusetyenziswa kwee-_subdomains_ kunika inani leenzuzo kodwa kukwafuna ukucinga nokucwangcisa okungakumbi kulwakhiwo lwayo.

Ngokwemigaqo ye-DNS ukusetyenziswa kwee-_subdirectories_ kuzisa umngeni olula ngokuthelekiswa. Njengoko iisayithi zenetwork zingabantwana nje bendlela yomzali, kufuneka kubekho ingeniso enye kuphela yegama le-domain eliphambili. Kwii-_subdomains_ umngeni untsonkothe ngakumbi ufuna nokuba yi-CNAME entry eyahlukileyo kwisayithi nganye yenetwork okanye i-wildcard (*) entry kwiirekhodi ze-DNS.

Enye indawo eyongezelelweyo ekufuneka iqwalaselwe yile ye-SSL kunye nokukhutshwa nokusetyenziswa kwezatifikethi ze-SSL. Kwisicwangciso se-_subdirectory_ isatifikethi se-domain esinye sinokusetyenziswa njengoko iisayithi zenetwork zingamakhondo nje egama le-domain eliphambili. Ngoko isatifikethi se-domain.com siya kubonelela ngokwaneleyo nge-SSL ku-https://domain.com/site1, https://domain.com/site2 njalo njalo.

Kwisicwangciso se-_subdomain_ ukusetyenziswa kwesatifikethi se-wildcard SSL yenye yezona ndlela ziqhelekileyo. Olu hlobo lwesatifikethi se-SSL lubonelela ngoguqulelo oluntsonkothileyo lwe-domain kunye nee-_subdomains_ zayo. Ngoko ke isatifikethi se-wildcard SSL siya kubonelela ngoguqulelo oluntsonkothileyo ku-https://site1.domain.com, https://site2.domain.com kunye ne-https://domain.com ngokwayo.

Nangona ezinye iinketho zikhona, ezi zihlala zilinganiselwe kububanzi nakwisicelo kwaye zifuna isicwangciso esongezelelweyo nokuqwalaselwa ngokumalunga nokufaneleka.

#### Ii-Plugins kunye nee-Themes

Into WordPress ekunikayo iyayithatha kwakhona, ubuncinane ngokwembono yomthengi. Kufakelo lwe-WordPress oluzimeleyo ukuba umlawuli wesayithi ufaka i-plugin embi okanye uyasilela ukugcina ufakelo lwakhe luhlaziyiwe, ekuphela kwexhoba nengozi yesi senzo nguye ngokwakhe. Nangona kunjalo, umlawuli wesayithi ofaka i-plugin embi kufakelo lwe-multisite udala ixhoba lesayithi nganye efakwe kwinetwork.

Ngenxa yesi sizathu xa iqwalaselwe njenge-multisite WordPress isusa amandla kubalawuli beesayithi okufaka ii-plugin kunye nee-theme kwaye endaweni yoko iwahambisa la mandla kwindima esandul’ ukwenziwa yomlawuli wenetwork okanye ‘super admin’. Le ndima inamalungelo ingagqiba ke ukuba ivumele abalawuli beesayithi zenetwork ukuba babone okanye bafikelele kwimenyu yee-plugin kwi-dashboard yabo kwaye, ukuba kunjalo, ingaba ezo mvume ziya kufikelela eku-_activating_ okanye eku-_deactivating_ ii-plugin.

Ukuya kuthi ga kweli nqanaba umlawuli wenetwork unoxanduva lokufaka ii-plugin kunye nee-theme kwinetwork kwaye anikezele ngeemvume zokusebenzisa ezi plugin kunye nee-theme kwiisayithi zenetwork. Abalawuli beesayithi abanakufaka ii-plugin kunye nee-theme okanye bafikelele kwii-plugin kunye nee-theme ezingabelwanga isayithi yabo.

#### Abasebenzisi kunye nabaLawuli

Kwi-WordPress Multisite, zonke iisayithi zenetwork zabelana ngedatabase enye kwaye ngoko zabelana ngabasebenzisi abafanayo, iindima kunye nezakhono. Eyona ndlela ifanelekileyo yokuyicinga kukuba bonke abasebenzisi bangamalungu enetwork hayi esayithi ethile.

Ngenxa yolu luqondiso kunokuba kunganqweneleki ukuvumela abasebenzisi ukuba benziwe, kwaye ngenxa yesi sizathu WordPress Multisite isusa obu buchule kubalawuli besayithi ize ibuse kumlawuli wenethiwekhi. Emva koko umlawuli wenethiwekhi anganikezela amalungelo ayimfuneko kumlawuli wesayithi ukuze akwazi ukwenza ii-akhawunti zabasebenzisi zesayithi yakhe.

<!-- Umfanekiso-skrini awufumaneki: ujongano lolawulo lwabasebenzisi benethiwekhi ye-WordPress Multisite -->

Ukuphinda ingxelo engentla, nangona ii-akhawunti zabasebenzisi zibonakala zinxulumene nesayithi, enyanisweni zabelwe kwinethiwekhi kwaye ngoko kufuneka zibe zezodwa kuyo yonke inethiwekhi. Kusenokubakho iimeko apho amagama abasebenzisi engafumaneki ukuba abhaliswe ngenxa yesi sizathu.

Nangona ingeyongcamango ingaqhelekanga kwiinkqubo zamashishini, lo mthombo omnye wobhaliso nokuqinisekiswa kwabasebenzisi udla ngokuba yingcamango enzima ukuyiqonda kubantu abaqhelene nofakelo lwe-WordPress oluzimeleyo apho ulawulo lwabasebenzisi lulula kancinci.

#### Imidiya

Apho iisayithi zenethiwekhi zabelana ngedatabase enye kwi-WordPress Multisite, zigcina iindlela ezahlukeneyo kwinkqubo yeefayile zeefayile zemidiya.

Indawo esemgangathweni ye-WordPress (wp-content/uploads) ihlala injalo; nangona kunjalo, indlela yayo iyatshintshwa ukuze ibonise i-ID eyodwa yesayithi yenethiwekhi. Ngenxa yoko iifayile zemidiya zesayithi yenethiwekhi zibonakala njenge-wp-contents/uploads/site/[id].

#### Permalinks

Sikhankanyile ngaphambili ukuba kukho iinzuzo ezicacileyo zoqwalaselo lwe-_subdomain_ ngaphezu kwe-_subdirectory_ kwaye nantsi zona: iindlela.

Kuqwalaselo lwe-_subdirectory_, isayithi ephambili (isayithi yokuqala eyenziwayo xa kusekwa inethiwekhi) kunye neesayithi ezingaphantsi zenethiwekhi kufuneka zabelane ngendlela efanayo ephuma kwigama ledomain. Oku kunokubangela inani elikhulu leengxabano.

Kwizithuba, indlela enyanzelekileyo ethi /blog/ yongezwa kwisayithi ephambili ukuze kuthintelwe ukungqubana neesayithi zenethiwekhi. Oku kuthetha ukuba ii-permalink ezintle ezifana ‘Post name’ ziya kuboniswa njenge-domain.name/blog/post-name/

<!-- Umfanekiso-skrini awufumaneki: iisetingi ze-permalink ze-WordPress ezibonisa indlela /blog/ kuqwalaselo lwe-subdirectory -->

Kuqwalaselo lwe-_subdomain_ eli nyathelo aliyomfuneko kuba isayithi nganye yenethiwekhi ixhamla kukwahlulwa okupheleleyo kweedomain kwaye ke akuyomfuneko ixhomekeke kwindlela enye. Endaweni yoko zigcina iindlela zazo ezahlukileyo ezisekelwe kwi-_subdomain_ yazo.

<!-- Umfanekiso-skrini awufumaneki: iisetingi ze-permalink ze-WordPress kuqwalaselo lwe-subdomain -->

#### Amaphepha Angatshintshiyo

Kuqwalaselo lwe-_subdirectory_ amathuba eengxabano zamagama adlulela nakumaphepha angatshintshiyo njengoko isayithi ephambili kunye neesayithi zenethiwekhi zabelana ngendlela efanayo.

Ukuthintela oku, WordPress ibonelela ngendlela yokufaka kuluhlu oluthintelweyo amagama athile eesayithi ukuze angangqubani namagama esayithi yokuqala. Ngokuqhelekileyo umlawuli wenethiwekhi uya kufaka iindlela zengcambu zamaphepha esayithi ephambili.

<!-- Umfanekiso-skrini awufumaneki: iisetingi zenethiwekhi ye-WordPress ezibonisa amagama eesayithi avaliweyo ukuthintela iingxabano -->

Kuqwalaselo lwe-_subdomain_ amathuba eengxabano zamagama ayancitshiswa yi-_subdomain_ kuba iyodwa kwisayithi yenethiwekhi kwaye ayinxulumene nangayiphi na indlela nesayithi ephambili.

### Ubhaliso

Ngaphakathi kwiisetingi zenethiwekhi ze-WordPress Multisite kukho iinketho ezininzi ezintsha zobhaliso lwabasebenzisi ezikhoyo, ezivumela abasebenzisi abatsha nabakhoyo ukuba benze iisayithi.

<!-- Umfanekiso-skrini awufumaneki: iisetingi zenethiwekhi ye-WordPress Multisite ezibonisa iinketho zobhaliso -->

Ngokwahlukileyo kufakelo lwe-WordPress oluzimeleyo, iisayithi zenethiwekhi azigcini iinketho eziqhelekileyo zokuvumela ubhaliso lwabasebenzisi okanye ukwabela olo bhaliso kwiindima.

<!-- Umfanekiso-skrini awufumaneki: iisetingi zobhaliso lwabasebenzisi zesayithi ye-WordPress ezimeleyo ezibonisa iinketho ezilinganiselweyo -->

Xa ii-akhawunti zabasebenzisi zenziwa, ezo akhawunti ziveliswa kwinqanaba lenethiwekhi. Ngoko endaweni yokuba zibe zezesayithi ethile enye, zona ziba zezenethiwekhi. Oku kuneenzuzo nezingeloncedo ezicacileyo.

Umzekelo, cinga ukuba i-WordPress Multisite yakho yayikwishishini leendaba nolwazi. Ubuya kuseka i-multisite uze wenze iisayithi zenethiwekhi zezemali, itekhnoloji, ukuzonwabisa kunye nezinye iindawo zomdla ngelixa ugcina ulawulo olupheleleyo lwee-plugin nemixholo. Isayithi nganye yenethiwekhi yona iya kuba nenqanaba eliphezulu kakhulu lolawulo kwinkangeleko nemvakalelo kunye namava omsebenzisi esayithi yayo yenethiwekhi kunokuba kunjalo kwiintlobo zezithuba ezenzelwe wena okanye iindidi zezithuba eziqhelekileyo.

Kule ndlela, xa umsebenzisi engena, ungena kwinethiwekhi kwaye ekugqibeleni ungene nakwisayithi nganye yenethiwekhi ukuze kubekho amava angenamthungo. Ukuba isayithi yakho entsha ibisekelwe kumrhumo oku bekuya kuba sisisombululo nesiphumo esifanelekileyo.

Nangona kunjalo, ukuba indalo nenjongo ecwangcisiweyo ye-multisite ibikukunika iisayithi zenethiwekhi ezahlukeneyo ezingenabudlelwane omnye komnye, phantse kusoloko kunjalo ukuba kufuneka ii-plugin zangaphandle okanye ezongezelelweyo ukuze zilawule iindima zabasebenzisi.

### Domain kunye ne-SSL

Masithethe ngofakelo lwe-WordPress Multisite oluphantse lusiphunyuke engqondweni - Wordpress.com. Lo ngowona mzekelo ubanzi kakhulu we-Wordpress multisite kwaye ubonisa amandla ayo abanzi okwenziwa ngokwezifiso nokubunjwa ukuze kuzalisekiswe injongo.

Kule mihla kwi-intanethi yanamhlanje ukusetyenziswa kwe-SSL phantse kunyanzelekile kwaye abalawuli benethiwekhi bee-WordPress multisites kungekudala bajongana nale mingeni.

Kuqwalaselo lwe-_subdomain_ iisayithi zenziwa ngokusekelwe kwigama le-root domain. Ngoko isayithi ebhalwe ‘site1’ iya kwenziwa njenge-‘site1.domain.com’. Ngokusebenzisa isatifikethi se-wildcard SSL, umlawuli wenethiwekhi angawuphendula ngempumelelo lo mngeni aze abonelele ngezakhono zogqumelelo lwe-SSL kwinethiwekhi.

WordPress Multisite iqulethe umsebenzi wokumatanisa i-domain ovumela iisayithi zenethiwekhi ukuba zidityaniswe namagama edomain enzelwe wena okanye amagama edomain ahlukileyo kwi-root domain yenethiwekhi.

Kubalawuli benethiwekhi oku kuzisa umaleko owongezelelekileyo wobunzima kokubini kuqwalaselo lwegama ledomain kunye nokukhutshwa nokugcinwa kwezatifikethi ze-SSL.

Ukuya kweli nqanaba, nangona WordPress Multisite ibonelela ngendlela yokuvumela [www.anotherdomain.com](http://www.anotherdomain.com) ukuba imaphwe ku-‘site1’, umlawuli wenethiwekhi ushiyeka nomngeni wokulawula ngaphandle amangeniso e-DNS kunye nokuphunyezwa kwezatifikethi ze-SSL.

## Ultimate Multisite

Xa umahluko phakathi kofakelo lwe-WordPress oluzimeleyo kunye nofakelo lwe-Multisite sele uqondiwe, makhe sijonge indlela i-Ultimate Multisite elisixhobo sokugqibela sokubonelela ngeeWebhusayithi njengeNkonzo.

### Intshayelelo

Ultimate Multisite sisixhobo sakho esiguquguqukayo xa kufikwa ekudaleni iWebhusayithi njengeNkonzo (WaaS). Cinga nge-Wix.com, Squarespace, WordPress.com uze ucinge ngokuba nenkonzo yakho.

Ngaphantsi Ultimate Multisite isebenzisa WordPress Multisite, kodwa ikwenza oko ngendlela engasombululi kuphela imingeni emininzi abalawuli benethiwekhi abajongana nayo kufakelo lwe-multisite, koko ikwandise amandla evumela uluhlu olubanzi lweemeko zokusetyenziswa ukuba luxhaswe.

Kumacandelo alandelayo siza kujonga ezinye iimeko zokusetyenziswa eziqhelekileyo kunye nezinto ekufuneka ziqwalaselwe ukuxhasa ezo meko.

### Iimeko Zokusetyenziswa

#### Imeko 1: I-Arhente

Ngokuqhelekileyo izakhono eziphambili ze-arhente zikwidizayini yeewebhusayithi, nemiba efana nokusingathwa kwazo okanye ukuthengisa idweliswe njengeenkonzo ezongezelelweyo.

Kwi-arhente, Ultimate Multisite ibonelela ngesindululo sexabiso esimangalisayo kumandla ayo okusingatha nokulawula iiwebhusayithi ezininzi kwiqonga elinye. Nangakumbi kwii-arhente ezimisela iidizayini zazo kwimixholo ethile efana ne-GeneratePress, Astra, OceanWP okanye eminye, zinokusebenzisa amandla e-Ultimate Multisite okuvula ngokuzenzekelayo le mixholo kwisayithi nganye entsha.

Ngokufanayo, ngenxa yobuninzi bezivumelwano zamaxabiso e-arhente kwiiplugin eziqhelekileyo nezithandwayo, ukusetyenziswa kwe-Ultimate Multisite kuvumela ii-arhente ukuba zisebenzise utyalo-mali olukhoyo ngokubonelela ngeqonga eliqhelekileyo apho iiplugin zinokufakelwa, zigcinwe kwaye zisetyenziswe.

Kusenokwenzeka ukuba ukusetyenziswa koqwalaselo kuya kufunwa, kwaye ngethamsanqa Ultimate Multisite yenza kube lula kakhulu ukuququzelela ukumaphwa kweedomeyini kunye nezatifikethi ze-SSL ngodibaniso lwayo nababoneleli abaninzi abadumileyo bokusingatha kwakunye neenkonzo ezifana ne-Cloudflare kunye ne-cPanel.

Ngoko ke, ngokusebenzisa omnye waba baboneleli okanye ngokubeka Ultimate Multisite emva kwe-Cloudflare, imiba efana nolawulo lweedomeyini kunye nezatifikethi ze-SSL iba yinto elula noko.

Ii-arhente ezikhetha ukugcina ulawulo oluqinileyo ekudalweni kweesayithi ziya kuluxabisa lula abanokudala ngalo iisayithi baze badibanise iisayithi nabathengi kunye nezicwangciso ngonxibelelwano olucwangcisiweyo lwe-Ultimate Multisite.

![Ujongano lolawulo lweesayithi lwe-Ultimate Multisite](/img/admin/sites-list.png)

Ulawulo oluqinileyo lwe-plugin kunye nemixholo lugcinwa ngokwemveliso nganye ngoonxibelelwano oluqondakalayo lwe-Ultimate Multisite, luvumela iiplugin kunye nemixholo ukuba zenziwe zifumaneke okanye zifihlwe, kwakunye nemeko yazo yokuvulwa xa kusenziwa isayithi entsha.

![Ujongano lwezithintelo ze-plugin zemveliso](/img/config/product-plugins.png)

Imixholo ibonelela ngokusebenza okufanayo, ivumela imixholo ethile ukuba ivulwe okanye ifihlwe xa kudalwa isayithi.

![Ujongano lwezithintelo zomxholo wemveliso](/img/config/product-themes.png)

Ii-arhente ziya kufumana uxolo lwengqondo nge-Ultimate Multisite evumela ukuba zenze eyona nto ziyenza kakuhle - ukuyila iiwebhusayithi ezibalaseleyo.

#### Imeko 2: Umboneleli We-niche

Kukho intetho yakudala ethi, “yenza into enye uze uyenze kakuhle”. Kwiingcali ezininzi oku kuthetha ukudala imveliso okanye inkonzo ejikeleze uluvo olunye oluphambili.

Mhlawumbi ungumdlali wegalufa ozinikeleyo okhuthaza iiwebhusayithi kwiiklabhu, okanye usenokuba ngumdlali we-esports ozinikeleyo obonelela ngeewebhusayithi kwiiklan. Umntu okhuthaza inkonzo yokubhukisha kwiindawo zokutyela mhlawumbi?

Ngezizathu ezininzi ungafuna ukubonelela ngeenkonzo ezisekelwe kwisakhelo neqonga eliqhelekileyo. Kusenokuba uyile okanye utyale imali kwiiplugin ezilungiselelwe ngokukodwa ukubonelela ngokusebenza okufunekayo, okanye kusenokwenzeka ukuba ezona ndlela zibalaseleyo zeshishini zifuna uhlobo oluthile lwendlela esemgangathweni kwidizayini.

Enye yeempawu ezintsha ze-Ultimate Multisite kukusetyenziswa kweesayithi zethemplethi. Isayithi yethemplethi yenye apho umxholo ufakelwe waza wavulwa, iiplugin eziyimfuneko zafakelwa zaza zavulwa, kwaza kwadalwa izithuba okanye amaphepha esampulu. Xa umthengi edala isayithi entsha esekelwe kwithemplethi, imixholo kunye nezicwangciso zethemplethi zikopishwa kwisayithi esandula kudalwa.

Kumboneleli weesayithi kunye neenkonzo ze-niche, oku kubonelela ngenzuzo engenakuthelekiswa kumandla okudala kwangoko isayithi ekulungele ukusetyenziswa ene-plugin ezilungiselelwe kunye nedizayini. Umthengi kufuneka anike kuphela igalelo elincinane kakhulu ukuze agqibe inkonzo.

Kuxhomekeke kwiimfuno, zombini uqwalaselo lwe-_subdirectory_ okanye lwe-_subdomain_ lunokufaneleka, apho ukhetho loyilo lwenkqubo luya kuba phakathi kwesatifikethi se-SSL esilula se-_subdirectories_ okanye isatifikethi se-SSL se-wildcard se-_subdomains_.

#### Imeko 3: Ukusingathwa Kwewebhu kwe-WordPress

Kukho iindlela ezininzi kakhulu zokusingatha iisayithi ze-WordPress, kodwa kunqabile ukuba kube lula njengokubonelela umthengi ngendawo yewebhu enenguqulelo ye-WordPress efakwe kwangaphambili. Oku kungenxa yokuba inani lezigqibo kunye neengqwalasela kufuneka zidityaniswe ukuze kubonelelwe ngenkonzo enentsingiselo.

Ultimate Multisite igqama kule ndawo ngokubonelela ngesisombululo esipheleleyo esilungele ukusetyenziswa sokusingathwa kweesayithi ze-WordPress. Ezibandakanyiweyo kwisisombululo ziindlela eziphambili zokubonelela ngeenkonzo zobhaliso, ukuqokelelwa kweentlawulo, iifom ze-checkout, iivawutsha zesaphulelo kunye nonxibelelwano lwabathengi.

Uninzi lomsebenzi obalulekileyo ofunekayo ukufaka, ukuqwalasela nokugcina WordPress Multisite ngokuchanekileyo luququzelelwa yi-Ultimate Multisite ukuya kuthi ga kwinqanaba lokuba abalawuli benethiwekhi kufuneka baqwalasele kuphela imiba enxulumene nenkonzo okanye i-niche yabo, efana namanqanaba emveliso, amaxabiso kunye nezibonelelo zenkonzo.

Kubaphuhlisi abanqwenela ukudibanisa ne-Ultimate Multisite, isisombululo sikwabonelela nge-RESTful API ebanzi kunye nee-Webhooks zesaziso seziganeko.

Ngaphandle kokuxhomekeka kumawaka ee-plugin zangaphandle kunye neelayisensi, Ultimate Multisite ibonelela ngesisombululo esineempawu ezininzi nesithelekisekayo neso se-Wix, Squarespace, WordPress.com nabanye.

### Iingqwalasela zoYilo

Nangona ingesosikhokelo esipheleleyo, izinto ezilandelayo kufuneka zisebenze njengesikhokelo ekukhetheni ngokuchanekileyo iitekhnoloji zokuxhasa ufakelo lwe-Ultimate Multisite.

#### Ukusingatha okwabelwana ngako vs. Ukusingatha okunikezelweyo

Ngelishwa ayingabo bonke ababoneleli bokusingatha abalinganayo kwaye abanye basebenzisa ukuxinana okugqithisileyo kweeseva. Ababoneleli beendleko eziphantsi ngokuqhelekileyo bafumana ingeniso ngokwandisa ukuxinana kweeseva. Ngaloo ndlela ufakelo lwakho lwe-Ultimate Multisite lunokuba yenye kuphela kumakhulu aliqela eendawo kwiseva enye.

Ngaphandle kwezikhuselo ezifanelekileyo ezibekwe ngumboneleli, iindawo kwiseva ekwabelwana ngayo zifumana ingxaki ‘yommelwane onengxolo’. Oko kukuthi, indawo ekwiseva enye isebenzisa izixhobo ezininzi kangangokuba ezinye iindawo kufuneka zikhuphisane ngezixhobo eziseleyo. Amaxesha amaninzi oku kubonakala njengeendawo ezicothayo okanye ezingaphenduli ngexesha elifanelekileyo.

Njengomboneleli wokusingathwa kwewebhu ngokwakho, iziphumo ezidlulayo ziya kuthetha ukuba abathengi bakho bafumana isantya esibi, inqanaba lephepha eliphantsi kunye namazinga aphezulu okuphuma, nto leyo edla ngokukhokelela ekubeni abathengi bayeke inkonzo njengoko befuna iinkonzo kwenye indawo.

Ngokufutshane, ixabiso eliphantsi alithethi ukuba kulungile.

Ultimate Multisite yaziwa ngokusebenza nababoneleli abaliqela abalungileyo bokusingatha kwaye idityaniswa kakuhle nendawo yabo yokusebenza ukuze ibonelele ngemisebenzi efana nokumataniswa kweedomeyini kunye ne-SSL ezenzekelayo. Aba baboneleli baxabisa ukusebenza kakuhle kwaye babonelela ngenkonzo ekumgangatho ophezulu kunokusingatha okwabelwana ngako.

Kuluhlu lwababoneleli abahambelanayo kunye nemiyalelo epheleleyo yokuseta ngamnye nceda ujonge uxwebhu lwababoneleli abaHambelanayo.

#### Iingqwalasela zokuSebenza

Ultimate Multisite ayisosicelo esicothayo, koko, ikhawuleza ngokumangalisayo. Nangona kunjalo, isebenza kuphela kakuhle njengosetyenziso olusisiseko kunye neziseko ezingundoqo, kwaye inokusebenzisa kuphela oko inofikelelo kuko.

Cinga oku: Ungumphathi wenethiwekhi wofakelo lwe-Ultimate Multisite olunendawo ezili-100. Ezinye kwezo ndawo ziqhuba kakuhle kwaye zitsala inani labatyeleli bewebhusayithi yonke imihla.

Le meko ibiya kwahluka kumlinganiselo omncinane, masithi indawo enye ukuya kwezintlanu, kodwa kungekudala iingxaki zomlinganiselo ziya kubonakala.

Ukuba ishiywe ingakhathalelwanga, indawo enye ye-Ultimate Multisite iya kuba noxanduva lokuzalisekisa izicelo zabo bonke abatyeleli kwiindawo. Ezi zicelo zinokuba zezasephepha e-PHP aguqukayo okanye ii-asethi ezimileyo ezifana nee-stylesheet, javascript okanye iifayile zemidiya. Nokuba yindawo enye okanye ikhulu, le misebenzi iba yinto ephindaphindayo, edinayo nechitha izixhobo. Akuyomfuneko ukusebenzisa amandla e-CPU kunye nememori ukuqhubekisa ifayile ye-PHP xa imveliso ilulwazi olufanayo olungashukumiyo kwisicelo ngasinye.

Ngokufanayo, isicelo esinye sephepha le-PHP okanye le-HTML sivelisa izicelo ezininzi ezilandelayo zeziskripthi, ii-stylesheet kunye neefayile zemifanekiso. Ezo zicelo zijoliswe ngqo kwiseva yakho ye-Ultimate Multisite.

Umntu unokusombulula le ngxaki ngokulula ngokuphucula iseva kodwa oko akulungisi ingxaki yesibini - ukulibaziseka ngokwejografi. Ziiseva ezininzi kuphela kwiindawo ezininzi ezinokuyisombulula ngokufanelekileyo le ngxaki.

Ngesi sizathu abaninzi abaphathi benethiwekhi basebenzisa izisombululo ze-front-end caching kunye neenethiwekhi zokusasaza umxholo (CDN) ukuzalisekisa izicelo zamaphepha amileyo. Ukuzalisekisa ezi zicelo nokunikezela ngee-asethi ngaphambi kokuba isicelo sifike kwiseva kugcina izixhobo zokuqhubekisa, kuphelisa ukulibaziseka, kuthintela uphuculo olungafunekiyo kwaye kwandisa utyalo-mali lwetekhnoloji.

Ultimate Multisite iquka i-add-on ye-Cloudflare ephucukileyo evumela abaphathi benethiwekhi ukuba babeke ufakelo lwabo emva kwe-Cloudflare baze basebenzise hayi kuphela amandla ayo e-caching kodwa nokusingathwa kwe-DNS, izatifikethi ze-SSL kunye neendlela zokhuseleko ngokunjalo.

#### Iikopi zogcino

Umntu angabuza abantu abangama-50 iingcebiso malunga neekopi zogcino aze afumane izimvo ezingama-50 ezahlukeneyo malunga nezicwangciso zeekopi zogcino. Impendulo kukuba, kuxhomekeke.

Into engaphikiswa kukuba iikopi zogcino ziyafuneka kwaye phantse akunakucingeleka ukuba ezi azilawulwa ngumboneleli, ngakumbi lowo unikezela ngenkonzo elawulwayo. Ngenxa yoko abathengi baya kujonga kumphathi wenethiwekhi ukuba abonelele kwaye alawule le nkonzo. Ukuba umphathi wenethiwekhi ujonga kubani yingxaki eyahlukileyo ngokupheleleyo.

Ngeenjongo zeli candelo masivumelane ukuba ikopi yogcino yikopi yenqanaba lenkqubo ngexesha elithile xa ikopi yogcino iqalisiwe. Ngokulula, nokuba imeko yenkqubo injani ngexesha lekopi yogcino, loo meko iyabanjwa ize itshixelwe kwikopi yogcino.

Ngolu lwazi, impendulo yokuba ungazifumana njani iikopi zogcino nokuba yintoni elungele indawo yakho yokusebenza iya kuxhomekeka kakhulu kwiimfuno zakho nakwisakhono somboneleli wokusingatha sokwanelisa ezo mfuno. Nangona kunjalo, ngokulandelelana ukusuka kwezona zinezimvo ezininzi ukuya kwezona zinezimvo ezimbalwa, iinketho ezingezantsi kufuneka zinike isikhokelo esithile.

#### I-Snapshots

I-Snapshots zizisombululo ezinamandla kwiikopi zogcino kuba zilula, azinzima (de kube ufuna ukubuyisela) kwaye ‘ziyasebenza nje’. Nangona kunjalo, kufuna uncedo oluthile kumboneleli wakho kwaye ikakhulu kusebenza kuphela ukuba une-VPS (Virtual Private Server) okanye into efanayo. Ababoneleli abaliqela abadweliswe kuxwebhu lwethu ‘lwababoneleli abaHambelanayo’ banikezela ngeekopi zogcino ezingafuni naluphi na ungenelelo okanye ingqwalasela eyongezelelweyo kumphathi wenethiwekhi.

Apho iikopi zogcino zesintu zijolise kwiifayile nakwiidatabase, i-snapshot ijolise kwidiski yonke. Oku kuthetha ukuba ayisiyodatha yendawo kuphela ebanjwa kwi-snapshot kodwa nenkqubo yokusebenza kunye noqwalaselo ngokunjalo. Kwabaninzi oku yinzuzo ecacileyo kuba inkqubo entsha inokudalwa phantse ngoko nangoko ukusuka kwi-snapshot ize ingeniswe ekusebenzeni ukuze ithathe indawo ye-instance egulayo. Ngokufanayo, inkqubo yokubuyisela yokufumana iifayile ifuna kuphela ukunamathisela umfanekiso we-snapshot njengediski kwi-instance ekhoyo ukuze iifayile zifikeleleke kwaye zikotshwe.

I-Snapshots zinokutsala iindleko ezongezelelweyo kumboneleli wokusingatha kodwa ngumgaqo-nkqubo we-inshorensi ngokuchasene neengozi.

#### Iziskripthi zangaphandle

Kubonakala ngathi akukho kunqongophala kwezikripthi zangaphandle nezisombululo zokwenza backup izixhobo zeWordPress neMySQL, kwaye ezi zingasebenza kakuhle kwiUltimate Multisite njengoko iyiWordPress plugin esebenzisa inkqubo yeefayile nedatabase yeWordPress. Ngoko ke isisombululo esenza backup yeeWordPress sites siya kugubungela ngokwaneleyo iimfuno zeUltimate Multisite.

Asinakukwazi ukucebisa iskripthi esinye ngaphezu kwesinye, kodwa icebiso lethu ngokubanzi kukusebenzisa iimvavanyo ezininzi ze-backup nokubuyisela ukuqinisekisa ukuba iziphumo ziyafuneka, kwaye ‘uqiniseke ukuze uqiniseke’ ngokuhlala uvavanya iskripthi kunye nokusebenza kwaso, ngakumbi apho kusetyenziswa uhlobo oluthile lweqhinga le-differential backup.

Kufuneka kuqatshelwe ukuba ezi zikripthi, ngelixa zisebenza, ziya kwandisa umthwalo wenkqubo, nto leyo ekufuneka ithathelwe ingqalelo.

#### Plugins

Phantse akukho ngxaki kwiWordPress engenakusonjululwa ngeplugin, kwaye ukuba ukulawula izikripthi zangaphandle ayisiyonto oyithandayo, mhlawumbi iplugin yeyona ndlela ilandelayo ingcono.

Nangona plugins zahluka kwiinketho nakwiimpawu, ubukhulu becala zenza umsebenzi ofanayo, oko kukwenza ikopi yeefayile zeWordPress kunye nomxholo wedatabase. Emva koko ukusebenza kuyahluka, njengoko ezinye plugins zinokuthumela ii-backups kwiinkonzo zangaphandle ezifana neGoogle Drive okanye Dropbox, okanye kuhlobo oluthile lwenkonzo yokugcina izinto ehambelanayo efana neS3, Wasabi okanye ezinye. Iiplugins ezibanzi ngakumbi zibonelela nge-differential backups okanye uhlobo oluthile lweqhinga lokwenza backup kuphela idatha etshintshiweyo ukuze kugcinwe iindleko zokugcina zangaphandle.

Xa ukhetha iplugin yakho, qaphela ukuqinisekisa ukuba iyayiqonda i-multisite. Ngenxa yobume bokusebenza kwayo ngelixa i-backup isebenza, ungalindela umthwalo wexeshana kwiseva de inkqubo igqitywe.

#### Domain kunye neSSL

Kuninzi sele kuxoxiwe malunga namagama e-domain kwimowudi ye-multisite _subdomain_. Isisombululo esiphantse sibe sesonke kubalawuli benethiwekhi kukusebenzisa amangeniso e-wildcard DNS.

![Umzekelo wolungiselelo lokungeniswa kweWildcard DNS](/img/config/settings-domain-mapping.png)

Olu hlobo lokungeniswa kweDNS luya kusombulula ngempumelelo _subdomains_ ezifana no-‘site1.domain.com’ no-‘site2.domain.com’ ziye kwidilesi ye-IP engu-1.2.3.4, ngaloo ndlela luxhasa Ultimate Multisite, kwaye ngokubanzi ngakumbi WordPress Multisite esebenzisa imowudi ye-_subdomain_.

Oku kunokusebenza kakuhle kakhulu kwiHTTP kuba umamkeli ekujoliswe kuye ufundwa kwiiheader zeHTTP, kodwa kunqabile ukuba iwebhu ibe lula kangako kule mihla apho ukuthengiselana okukhuselekileyo kweHTTPS phantse kunyanzelekile.

Ngethamsanqa kukho iinketho ezilula zezatifikethi zeSSL. Kwimowudi ye-_subdirectory_ kunokusetyenziswa isatifikethi se-domain esiqhelekileyo. Ezi zifumaneka lula kwaye simahla kubaboneleli bokusingatha abanokusebenzisa inkonzo yasimahla yeLetsEncrypt okanye omnye umthombo. Kungenjalo ezi ziyafumaneka ngokurhweba kumagunya ukuba uyakwazi ukuvelisa isicelo sokusayina isatifikethi.

Kwimowudi ye-_subdomain_ ukusetyenziswa kwesatifikethi se-wildcard SSL kuya kuhambelana ngokugqibeleleyo ne-wildcard domain kwaye kuvumele isatifikethi ukuba sibe negunya kwi-root domain nazo zonke _subdomains_ ngaphandle kolungiselelo olungaphezulu.

Nangona kunjalo, kufuneka kuqatshelwe ukuba izatifikethi ze-wildcard SSL zisenokungasebenzi neenkonzo ezifana neCloudflare ngaphandle kokuba ukwisicwangciso se-enterprise okanye usete ungeniso lube yiDNS kuphela, apho ke yonke i-caching kunye nokuphucula kudlulwa.

Ngaphandle kolungiselelo olongezelelweyo Ultimate Multisite ibonelela ngesisombululo kule ngxaki, ibonisa amava ethu abanzi ngeemfuno zeeWordPress multisites. Ukuvula le add-on ilula kuya kwenza Ultimate Multisite isebenzise iziqinisekiso zakho zeCloudflare ukongeza ngokuzenzekelayo amangeniso eDNS kwiindawo zenethiwekhi kwiCloudflare kwaye isete imowudi yazo ibe ‘proxied’. Ngale ndlela isubsite nganye yenethiwekhi, xa yenziwe, iya kuba nokhuselo olupheleleyo kunye neenzuzo zeCloudflare kuquka iSSL.

Kuxhomekeke kubume nenjongo yofakelo lwakho lweUltimate Multisite, kusenokubakho imfuneko yokuba abathengi basebenzise ii-domain zabo. Kule meko umlawuli wenethiwekhi unoxanduva lokusombulula iingxaki ezimbini. Eyokuqala, ukubamba igama le-domain, kwaye eyesibini, izatifikethi zeSSL ze-domain.

Kwabaninzi, ukusetyenziswa kweCloudflare yindlela elula. Umthengi kufuneka abeke nje i-domain yakhe kwiCloudflare, akhombe iCNAME kwi-root domain yeUltimate Multisite, aze adibanise i-domain yakhe kwiUltimate Multisite ukuze aqale ukuxhamla kwigama lakhe le-domain elenziwe ngokwezifiso.

Ngaphandle koku, kufuneka kufunwe ezinye izisombululo, yiyo loo nto Ultimate Multisite icebisa uluhlu lwabaBoneleli abaHambelanayo. Oku kungenxa yokuba inkqubo yokuseta iDNS neSSL inokuba yinkqubo engelula. Nangona kunjalo, ngodibaniso lweUltimate Multisite naba baboneleli, ubunzima buyasuswa kakhulu kwaye inkqubo iyazenzekela.

#### Plugins

Kusenokwenzeka kakhulu ukuba uya kudinga plugins ezongezelelweyo ukubonelela ngokusebenza kubathengi bakho okanye kwiindawo zenethiwekhi. Ngaba zonke plugins zisebenza neWordPress Multisite kunye neUltimate Multisite? Ewe, kuxhomekeke.

Nangona uninzi lweeplugins lufakelwa kwiWordPress Multisite, ukuvulwa kwazo kunye nelayisensi yazo kuyahluka ukusuka kumbhali ukuya kumbhali.

Umceli-mngeni usekubeni ilayisensi isetyenziswa njani, kuba ezinye plugins zifuna ilayisensi ngesiseko se-domain nganye. Oku kuya kuthetha ukuba kwezinye plugins umlawuli wenethiwekhi kufuneka avule ngesandla ilayisensi yeplugin nganye kwisiza ngasinye esitsha.

Ngoko ke kunokuba ngcono ukujonga nombhali weplugin ukuba iplugin yakhe iza kusebenza njani neWordPress Multisite kunye naziphi na iimfuno ezikhethekileyo okanye iinkqubo ezifunekayo ukuyinika ilayisensi.
