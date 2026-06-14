---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101

Ultimate Multisite onab WordPress plugin võimaldab teil klientidele pakutada WaaS või Websites as a Service. Enne, kui me seda uurime ja teame, kuidas Ultimate Multisite teie liiketoimust ja klientidele aitab, peame saada põhjalikku algset teadmisi.

## WordPress Multisite

Me on enamik meil tuttavad standard WordPress installatsioonist. Või luute selle oma hoostavere kontrollplaani abil või, kui olete kurjatus, seadistage uue veebiserveri ja database, laadige core failid ja alustage installimise protsessi.

See toimib miljonide WordPress sidetel kogu maailmas, kuid agenti või hoostavere perspektiivist lühikalt käsitletame volüüme.

Kuigi see on lihtne luua üks WordPress side või isegi hundert, automaatse kontrollplaani abil probleemid alustavad ilmuma, kui te neid sidet haldamise vastutusele jätkate. Haldamata olete peamine siht. Või selleks, et halda tähendab pingut ja ressursside kasutamist, ja kuigi on saadaval välisveneid tööriite ja pluginid WordPress sidet haldamise ja administraatori lihtsustamiseks, teost võib klientide administrateerimise pääsuga lihtsalt võita.

Omaduses WordPress pakub funktsiooni, mille nimi on lihtsalt ‘Multisite’, mis uuesti algab 2010. aastal WordPress 3.0 loomisel. Seal ​​nate on saanud mitmeid versioid, mille eesmärk on uute funktsioonide sissejuhatamine ja turvalisuse tugevdamine.

Lõpulemades võib WordPress multisite mõelda nagu see: Ülikool pakub ühe WordPress installatsiooni, kuid iga fakultet haldab oma WordPress side.

### Võrk

WordPressi kontekstis multisite-võrk on selline, kus saab ühtest dashboardist hallata mitmeid alatesiteid. Kuigi multisite-võrku loomine erineb hoastajate vahel, lõplik tulemus on tavaliselt mõned lisid direktiive `wp-config.php` failis, et WordPress teadaaks, et see operatsioonivõrku režiimis.

Multisite-võrku ja eraldi asitud WordPress-installaatsiooni vahel on mitu erinevust, mida me lühidalt käsitsemine oma.

#### Subdomaain vs. Subdirektorium

Üks kõige kiiremini teha vaja otsus on, kas multisite-installatsioon toimib `subdirectory` (subdirektorium) või `subdomain` (subdomaain) abil. Ultimate Multisite töötab mõlemaga samuti hästi, kuid konfiguratsioonide vahel on arhitektuuril mõned erinevused.

`subdirectory`-konfiguratsioonil päranevad võrkuse sitiid stiilis põhinevad peamise domeeni järgi. Näiteks ‘site1’ kui nimetatud võrkuse site saab oma täieliku URL-i `https://domain.com/site1`. `subdomain`-konfiguratsioonil aga saab võrkuse site oma oma `subdomaaini`, mis on pärane peamise domeenist. Seega saab ‘site1’ kui nimetatud site oma täieliku URL-i `https://site1.domain.com/`.

Kuigi mõlemad valikud on täiesti valide, pakub `subdomain`-ide kasutamine mitu eeliseid, kuid nõuab samuti rohkem mõtlemist ja planeerimist arhitektuuril.

DNS osasubdirektorium kasutamine esineb suhteeltavalt lihtsaks väljakutuseks. Kuna võrku sildid on lihtsalt vanem stiil, vajab ainult ühe domeeni nimi sisseandmine peamise domeenini. Subdomeenide puhul on väljakutuse keerukus veidi suurem: nõuab kas iga võrku sildi jaoks eraldi CNAME sisseandmit või wildcard (*) sisseandmit DNS-registrite osas.

Lisaks tuleb arvestada SSL-i ja sertifikaadide küsimust ning nende väljastamist ja kasutamist. Subdirektoriumi konfiguratsioonil saab kasutada ühe domeeni sertifikaadi, kuna võrku sildid on lihtsalt peamise domeenini stiilid. Seega sertifikaat domain.com jaoks annab korralikult SSL-i https://domain.com/site1, https://domain.com/site2 ja nii edasi.

Subdomeenide konfiguratsioonil wildcard SSL-sertifikaadi kasutamine on üks kõige levinud valikuid. Selline SSL-sertifikaat pakub koodi enkriptimist domeenile ja selle subdomeenidele. Seega annab wildcard SSL-sertifikaat koodi enkriptimise https://site1.domain.com, https://site2.domain.com ja isegi domain.comile.

Kuigi on olemas teisi valikuid, need on sageli piiratud lahendusega ja kasutusealust ja nõuavad lisakogustust ja arvestamist sobisuse osas.

#### Pluginid ja Teemad

Mis WordPress annab ka võtab ära, vähemalt kliendi perspektiivis. Üksikuline WordPress-installatsioonil, kui veebilehtadministraator paigaldab halva pluginiga või ei hoida installatsiooni uuendatud, ainus levinud ja kahjustatud osaliku on ta ise. Kuid kui site administrator paigaldab halva pluginiga multisite-installatsioonil, siis kahjustatakse võrku kõikidele paigaldatud sildile.

Selle tõttu, kui konfiguratsioon on multisite WordPress'ina seadustatud, eemaldab see võimaluse site administraatorilt asutada pluginid ja teema, ja viib selle võimaluse uuesti loodudest võrkoadministratori või 'superadmin' rollile. See eeliseeritud roll saab siis otsustada, kas luba võrkuite administratoritele näha või külastada pluginide menüü dashboardis, ja kui nii on, kas sellised lubanded ulatuvad pluginide _aktiveerimise_ või _deaktiveerimise_ üle.

Seltses osas vastutab võrkoadministrator selle eest, et asutada pluginid ja teema võrkule ja delegereerida lubande, et neid pluginid ja teema kasutada võrkuite sidetel. Site administratorid ei saa asutada pluginid ja teema ega külastada sellise pluginide ja teemad, mis pole neile omandatud nende site jaoks.

#### Kasutajad ja administratorid

WordPress Multisite'is on kõik võrkuid sidetud sama databasele ning seega on neid kasutajad, rollid ja võimalused samad. Parimelt mõelda on nii, et kõik kasutajad kuuluvad võrkuge, mitte mingile erispärasele sitele.

Seehtel põhjal, võib kasutaja loomist lubada olla soovitatav, ja selle tõttu eemaldab WordPress Multisite selle võimaluse site administratorilt ja viib selle võrkuadministratorile. Võrkuadministrator saab siis ülalolevaid õigusi delegereerida siteadministratorile, et luba neid luua oma site jaoks kasutajakonti.

<!-- Screenshot unavailable: WordPress Multisite network user management interface -->

Uusalt kinnitades ebat kõnele edastatud väidet, kuigi kasutajakontid näivad olevat seotud selle sitega, on need tegelikult alluse võrku ja peavad seega olema unikaalsed kogu võrku. On väärtuslikud juhtumid, kus kasutaja nimi ei ole registreitav olemasoleva põhjusel.

Kuigi ettevõtte süsteemides ei ole see võõriline konsept, kuid kasutajate registreimise ja autentimise ühtine allik on sageli keeruline mõista neile, kes on tutud eraldi asutatud WordPressi installatsioonidega, kus kasutaja administreerimine on mõnikord lihtsam.

#### Media

Kui võrku sidetel (WordPress Multisite) jagatakse ühtine database, siis säilitatakse mediafailide jaoks eraldi teeadused failisüsteemis.

Standardne WordPress'i paikka (wp-content/uploads) jääb samana; kuid selle teadaus muutub reflectiks võrku sidet unikaalse ID kohta. Järgnevalt näidab võrku sidet mediafailid kui wp-contents/uploads/site/[id].

#### Permalinks

Me ole enne maininud, et _subdomain_ konfiguratsioon on eristatud eeliseid _subdirectory_ konfiguratsioonist ja siin on selle kohta: teeadused.

_Subdirectory_ konfiguratsioonil peab põhisaade (es on esimene site, mille loodakse võrku loomisel) ja võrku alsitead (network subsites) jagama sama stiili domeenist algava teedusega. See annab võimaluse suurte konfliktide riski.

Postide jaoks lisatakse põhisaadele majanduslik /blog/ stiilis teedus, et vältida konflikte võrku alsiteadega. See tähendab, et pretty permalinks nagu ‘Post nimi’ esitakse domeen.nimi/blog/post-nimi kui domain.name/blog/post-name/.

<!-- Screenshot unavailable: WordPress permalink settings showing /blog/ path in subdirectory configuration -->

_Subdomain_ konfiguratsioonil see tegevus ei ole vajalik, kuna iga võrku site on täieliku domeenide eraldamise kasuks ja seega ei vaja ühtst paikka. See asemel säilitavad oma unikaalsed stiilis teeadused oma _subdomain_i põhjal.

<!-- Screenshot unavailable: WordPress permalink settings for subdomain configuration -->

#### Statilised lehed

In _subdirectory_ konfiguratsioonides võib nimekonfliktide võimalus lahendada vastata ka staatikumistele lehtele, kuna pealplatil ja võrkulehtel on sama teel.

See vältida, WordPress pakub viisid, kuidas mõnda lehtnimeid must-listida, et nad ei konfliktida esimese lehtiga nimega. Üldiselt sisestaks võrkuadministrator root-teele pealplatil olevate lehtide.

<!-- Screenshot unavailable: WordPress network settings showing banned site names to prevent conflicts -->

_Subdomain_ konfiguratsioonides on nimekonfliktide võimalusi vähendatud, kuna _subdomain_ on ainulaadne võrkulehtile ja ei ole mingi seos pealplatiga.

### Registreerimine

WordPress Multisite võrkuasetustes on saadaval mitu uut kasutaja registreimise valikku, mis võimaldab uus- ja olemasoleva kasutajatele lehtid luua.

<!-- Screenshot unavailable: WordPress Multisite network settings showing registration options -->

Erinevalt eraldi asitud WordPress installatsioonidest ei säilitada võrkulehtel tuttavaid valikuid kasutaja registreimise lubamiseks või selle registreerimise rollidele määramiseks.

<!-- Screenshot unavailable: WordPress standalone site user registration settings showing limited options -->

Kas kasutajakonti luuakse, on need kontid loodud võrku tasemel. Seega kuuluvad nad mitte ühegi tietates lehtile, vaid kogu võrkulehtele. See annab mõne eristuslikke eeliseid ja tagasisideid.

Näiteks, panna ole teie WordPress Multisite uudiste ja informatsiooni teema. Lõpetabte multisite'i ja luute si sellest võrgu sissejuhatavaid site finantsidele, tehnoloogiale, entretenemendile ja teistele huvialaliste piirkondadele, säilitades samal kontrolli pluginide ja teemadega. Iga võrkuse site on siis veel suurema kontrolli omaga oma võrku site loomuliku ulatusest ja kasutajakogemust, kui lihtsalt custom post type'id või tavalised sisu kategooriad antakse.

Seliselt, kui kasutaja logib sisse, logib ta võrgu sisse ja lõpuks on logitud sisse iga võrkuse site jaoks, et pakkuda ühtlustatud kogemust. Kui teie uus site oleks subskriptioonipõhine, oleks see ideaalne lahendus ja tulemus.

Kui aga multisite'i mõeldud luonte ja eesmärgi oli pakutada erinevaid võrku site, millel ei ole vahelisu seoses, on lähes alati vajalik kasutada välise või lisaplainuse pluginade modifitseerimiseks kasutaja rollide.

### Domeen ja SSL

Räägime WordPress Multisite installatsioonist, mis lähedalt meid vältib – Wordpress.com. See on kõige laiem näide WordPress multisite'ist ja demonstreerib selle laiaid võimet, mida saab kohandada ja vormida eesmärgi täitmiseks.

Mõnedel tänapäeval internetis SSL-i kasutamine on lähedalt majanduslikult vajalik, ja WordPress Multisite'i administraatorid esitakse peale neid väljakutusi.

_Subdomain_-konfiguratsiooniga luuakse site juurdomaaini põhjal. Seega luuakse 'site1' kui 'site1.domain.com'. Wildcard SSL-sertifikaadi kasutades saab võrkuse administratior õnnestuda selle väljakutuse lahendada ja pakkuda SSL-kriptiroomise võimalusi võrgule.

WordPress Multisite sisältää domeenimappimisfunktiooni, joka mahdollistaa verkko-sivustoilla (network sites) liittymisen räätälöityihin domeenimenohjauksiin tai domeeneihin, jotka ovat erilaiset kuin verkoston juuridomeeni.

Verkkoadministratorille tämä tuo lisämonimutkaisuutta sekä domeenimenohjauksen että SSL-sertifikaattien myöntämisen ja ylläpidon osalta.

Tämä tarkoittaa sitä, että vaikka WordPress Multisite tarjoaa myös tapa mappata [www.anotherdomain.com](http://www.anotherdomain.com) 'site1':een, verkkoadministratorilla jää haaste ulkoisten DNS-tietojen hallinnan ja SSL-sertifikaattien toteuttamisen osalta.

## Ultimate Multisite

Ymmärrettäessä erot yksittäisen WordPress-asennuksen ja Multisite-asennuksen välillä, tarkastellaanpa, miten Ultimate Multisite on paras väline verkkosivustojen palveluna (Website as a Service, WaaS) tarjoamiseen.

### Johdanto

Ultimate Multisite on Swiss Army Knife -tyyppinen työkalu sinulle, kun kyseessä on verkkosivuston palvelun (WaaS) luominen. Ajattele Wix.comia, Squarespacea ja WordPress.comia, ja mieti sitten oman palvelusi omistamista.

Taustalla Ultimate Multisite käyttää WordPress Multisite -järjestelmää, mutta se tekee sen tavalla, joka ei ainoastaan ratkaise verkkoadministratorien kohtaamia monenlaisia haasteita multisite-asennuksilla, vaan parantaa myös kykyjä, joiden avulla voidaan tukea laajan valikoima käyttökohteita.

Seuraavissa osioissa tarkastellaan joitakin yleisiä käyttökohteita ja niihin liittyviä huomioita, jotka tarvitaan näiden tapauksien tukemiseen.

### Käyttötapaukset

#### Tapaus 1: Toimisto/Agentti

Tyypillisesti toimiston ydinosa on verkkosivustojen suunnittelu, jossa on esimerkiksi niiden isännöinti tai markkinointi listattuna lisäpalveluina.

Agentuurid Ultimate Multisite pakub imendikku imendikku võimalusi, et paljud veebilehtid hooldada ja juhtida ühe platvormi kaudu. See on eriti kasulik agentuuride jaoks, kes standardiseerivad oma disaineid tietatud teematega nagu GeneratePress, Astra või OceanWP, ja saab Ultimate Multisite'i võimalusi kasutada neid teeme automaatselt aktiveerimiseks iga uue veebilehtiks.

Samuti kui on palju lepingud agentuuride hinnadest populaarsematele pluginidele, võimaldab Ultimate Multisite agentuureid kasutada olemasoleva investeeringuid pakkudes ühte platvormi, mille kaudu pluginid saab installida, hooldada ja kasutada.

On tõenäoliselt soovitud konfiguratsiooni kasutamine, ja õnneks Ultimate Multisite teeb seda domain mappingu ja SSL-sertifikaadide lihtsustamisel oma integreerimise abil mitmete populaarsete hoolduspakendite ja teenuste nagu Cloudflare ja cPanel kaudu.

Seega, kasutades ühtset sellest pakendist või paigutades Ultimate Multisite'i Cloudflare taga, on domainide ja SSL-sertifikaadide juhtimine mõne määral lihtsat.

Agentuurid, kes soovivad veebilehtide loomise üle tihed kontrolli säilitada, hinnaksid seda, kui lihtsalt nad saavad veebilehti luua ja veebilehte klientidega ning plaanidega Ultimate Multisite'i sujuva kasutajaliides abil seotuda.

![Ultimate Multisite site management interface](/img/admin/sites-list.png)

Pluginide ja teemate tihed kontroll on säilitatud iga toote kohta Ultimate Multisite'i intuitiivsete liidesete kaudu, mis võimaldavad pluginide ja teemade saadaval või varjatud olla samuti nende aktiveerimise staatuse suhtes uue veebilehtiks instansieeritud.

![Product plugin limitations interface](/img/config/product-plugins.png)

Temad pakuvad samasandnud funktsioone, mis võimaldab eriti teemad aktivere või peitamise veebile naalt.

![Product theme limitations interface](/img/config/product-themes.png)

Agentid saavad Ultimate Multisite abil rahuliku tunnetuse: see võimaldab neid teha seda, mida nad kõige paremini teevad – eriti veebileid disainida.

#### Kasus 2: Niishusandja

On vana lause, mis ütleb: "tee üks asja ja tee see hästi". Paljud spetsialistide jaoks tähendab see üht operaatori või teenuse around ühe peamise idee loomist.

Kas olete huvitav golfer, kes reklaamib klubide veebileid, või olete huvitav e-sport mängija, kes pakub veebileid klannidele? Ehk isik, kes reklaamib reservoint teenust restoranide jaoks?

Paljud põhjustega soovite pakkuda teenuseid ühtlaikul raamiku ja platvormi alusel. Võimalik on, et teil oleksite disaininud või investeerinud eriti lahendusi (bespoke plugins) vajalik funktsiooniga täitmiseks, või võib olla, et industrija parimad praktikad nõuavad mõnda standardiseeritud lähenemist disainile.

Ultimate Multisite'i innovatiivne funktsioon on šabloni kasutamine. Šabloni veebil on see selline, kus teem pakutud ja aktivere, vajalikud pluginid on paigutatud ja aktivere, ning näidlikud sisu või lehed on luuditud. Kui klient luuakse uue veebile šablonist, kopitakse šabloni sisu ja seadised uuest luudud veebilele.

Niishise veebilete ja teenuste pakutjatele see annab ühtlaikul eeliseuse: võimaluse kohe lahendada valmis oleva veebile, isiklikud pluginid ja disainiga. Klient peab vaid minimaalse sisseandiku tegemiseks teenuse lõpetamiseks.

Nõu alates needi sõltuvalt nõuandestest võib sobida nii _subdirectory_ kui ka _subdomain_ konfiguratsioon, mille korral arhitektuurivalik oleks lihtne SSL-tüüdor _subdirektoriumidele_ või laia SSL-tüüdor _subdomeenidele_.

#### Järjelus 3: WordPress veebihosting

WordPressi sissejuhatamise ja hoiania on mitu meetod, kuid harva on see nii lihtne kui lihtsalt pakkuda klientile valmis paigaldatud versioniga WordPress. See on seotud sellega, et vaja koos teha mitmeid otsuseid ja arvestusi, et pakkuda tähendust kvalifitseeritud teenust.

Ultimate Multisite eristub selles osas selle poolt, et see pakub WordPressi sissejuhatamise hoiakirjale põhjalik lahenduse. Lahenduses on sisalduvad keskkondlikud mekaanused teenuste pakkimiseks, maksude kogumiseks, ostukorviformideks, allahindluskoodideks ja klientide kommunikatsioonideks.

WordPress Multisite õigesti paigaldamise, konfiguratsiooni ja hoiania jaoks vajalik suur osa töö on Ultimate Multisite poolt lihtsustatud nii, et võrkuadministratoril ei vaja arvestada ainult aspekte, mis seotud on nende teenust või nisma, näiteks toote tasemeid, hinnad ja teenuse pakkumisi.

Arengutajatele, kes soovivad Ultimate Multisitega integreeruda, pakub lahendus ka põhjaliku RESTful API-l ja Webhooks ürituste teavitamiseks.

Välja poolt erinevate väljaspoolsete pluginate ja lisentluste sõltumata pakub Ultimate Multisite funktsioonide täisust ja võrdelise lahenduse Wixi, Squarespace'i, WordPress.comi ja teiste jaoks.

### Arhitektuurilised arvestused

Kuigi see ei ole põhjalik juhend, järgmised punktid võivad olla suunakeskkondiks Ultimate Multisite paigaldamise jaoks õigete tehnoloogiate valimiseks.

#### Jaotatud vs. Esimlik hoiakirja

Lõiklikult mitte kõik hoostingukogud ei ole võrdsed, ja mõned kasutavad äärmiselt kõrge serverdensiteedi. Madalalt hinnatud tarbija pakutajad genereerivad sisse tulvaid maksude abil serverdensiteedi maksimise. Seega võib teie Ultimate Multisite installatsioon olla vaid üks mitmes hing ja samal serveril olevast sajast veebisajadest.

Kui hoostaja poolt ei ole olemas sobiva kaitse, kogevad jagatud serveril olevad sildid "kohuküsimuse naaber" probleemi. See tähendab, et sama serveril asuva site kulutab nii palju ressurssi, et teiste sildide tuleb järelevalve teha ülejäänud ressursside eest konkureerimiseks. Paljud korral seda näevad selliseid sildid, mis on aeglaseid või ei vastata ajaga.

Veebhoostaja kui itse hoostaja olete, mõjutused tulevad sellele, et teie kliendid kogevad keerulisi kiirusi, madala lehekülje ranguse ja kõrge bounce rate'i, mis lõpeb sageli kliendite lahkumise, kuna nad otsivad teenuseid teistest.

Lühidalt: billiline ei tähenda head.

Ultimate Multisite on tunnetud sellega, et see töötab mitme head hoostaja poolt ja integreerub hästi nende keskkonnaga pakkudes funktsioone nagu domeenmapping ja automaatne SSL. Need hoostajad hinnatakse jõudlust ja pakuvad kõrgema kvaliteedi teenust kui jagatud hoosting.

Kõige soodustatud hoostajate nimekirja ja igaühingu täieliku seadistamise juhised leiate Compatible Providers dokumentatsioonist.

#### Jõudluse arutused

Ultimate Multisite ei ole aeglane rakendus, vaid see on imendavalt kiire. See toimib aga ainult nii hästi kui selle alusel olev rakendus ja infrastruktuur, ning saab kasutada ainult seda, mida see kätte saavad.

Mõgeda mõtle: Te olete Ultimate Multisite installatsiooni võrku administraator 100 sildiga. Mõned sellest sildidest toimivad hästi ja meelitavad iga päev veebisajad külastama veebsaite.

Seeid la see senaario oleks erinev on väiksemalises skaalal, näiteks ühe või viie veebilehe korral, kuid suurema skaala probleemid ilmnevad kiiresti.

Kui üht välimasel vaatamata Ultimate Multisite lehel oleks vastutav kõikide külastuste küsimuste täitmise eest. Need küsimused võisid olla dünaamilised PHP-lehed või staatsed sisu osad nagu stiilid, javascript või mediakontrollifailid. Kas üks lehel või hundert, need ülesanded muutuvad korduvaks, monotoniks ja hävikuks. Ei ole vajalik kasutada CPU jõudut ja memori töötlemiseks PHP-faili, kui väljund on iga küsimuse jaoks sama staatsine teave.

Samuti üks küsimus PHP-lehe või HTML-lehed loomine genereerib järgmistest küsimustele skriptide, stiilide ja pildifailide osas. Need küsimused suunatakse otseselt teie Ultimate Multisite serverile.

See probleem saab relatively lihtsalt lahendada serveri uuendtamise poolt, kuid see ei lahenda sekundärprobleemi – geograafiline viivitused. ainult mitu serveri erinevate asukohtade kasutamine võib seda probleemi korralikult lahendada.

Selle tõttu kasutavad enamik võrkuadministratsioonid esile jääva (front-end) kehtivuse lahendusi ja sisu jaotuse võrki (CDN) staatsed lehedest tulevate küsimuste täitmiseks. Need küsimuste täitmine ja asetuste teenindamine enne, kui küsimus serverile jõuab, säästab töötlemise ressursside, elimineerib viivitused, vältib uneloomseid uuendusi ja maksimalevad tehnoloogilisi investeeringuid.

Ultimate Multisite sisaldab sofistikud Cloudflare add-on'i, mis võimaldab võrkuadministratsioonide asetada oma installiatse Cloudflare taha ja kasutada mitte ainult selle kehtivuse süsteemeid, vaid ka DNS-hostingu, SSL-tööcertificateid ja turvalisuse mehnemaid.

#### Kogutused

Võis küsimata 50 inimeselt nõu Ultimate Multisite kogutustega ja saada 50 erinevat vastuoluulist kogutuse strateegia kohta. Vastus on: see sõltub sellest, mida sa soovivad.

Mida ongevast probleem on, et tagasisidud on vajalikud varjupidandused ja see on lähes imajikuvastav, et neid haldamaks antakse veebipровайder, eriti selline, kes pakub haldatud teenust. Järgnevalt kasutaja suunab seda teenust tarbimaise võrkorral. Keda võetakse võrkorral? See on täiesti erinev probleem.

See osaga jaoks siis arvestame, et varjupidandus on süsteemi oleku koondatud kopija selle hetke staatust, milles varjupidandus käivitati. Ühendades sõnastus: mida saavutamiseks ja mis on teie keskkonnale parim, sõltub see suuresti teie nõuete ja hoostavere võimele neid nõude täitmada. Kuid kõige enam arvestatud järjekordusest (parimest inimlikust kõige vähem inimlikku) pakuvad allpool esitatud valikud mõnda juhendamist.

#### Snapshots (Kujundused)

Snapshots on varjupidanduste "kuldne lause", sest need on lihtsad, probleemivabaline (eski soovite taastada) ja lihtsalt toimivad. Neid nõuavad aga teie hoostavere poolt mõnda abi, ja see kasutatakse pääsutult ainult siis, kui teil on VPS (Virtual Private Server) või sarnane. Meie "Compatibel Provider" dokumentatsioonis esitatud mitu pроваidert pakub varjupidandusi, mida ei nõuda võrkorral lisaväälise intervektsiooni ega arvestamist.

Tradits var backupidil failide ja database, aga snapshot pakub kogu diski. See tähendab, et ei ole ainult veebilehe andmeid pildistatud snapshotis, vaid ka operatsiojusüsteemi ja konfiguratsiooni. Paljudel on see oluline eelised, kuna uut süsteemi saab lähes hetkellikult luua snapshotist ja kasutada seda kahjustatud instluse asendamiseks. Samuti tagasiandmine protsess failide taastamiseks nõuab ainult snapshot-pildi lisamist diskina olemasoleva instlusele, seega on failid kätte saab ja neid saab kopienda.

Snapshotilt võib hoitja poolt välja võtta lisakulu, kuid see on kindlustuspool.

#### Välised skriptid

WordPressi ja MySQL ressursside backupide jaoks on ilmselt palju välise skripte ja lahendusi, mis toimisid hästi Ultimate Multisite jaoks, kuna see WordPressi failisüsteemi ja database kasutav plugin on. Seega lahendus, mis backupi teeb WordPressi veebilehe jaoks, katab Ultimate Multisite'i vajadusi piideselt.

Me ei saa üht skripti teise üle soovita, kuid meie üldine nõuanne on teha mitu backupi ja taastamise testi, et tagada, et tulemused on soovitud, ja "paku kindlust" pideva kontrolli abil skripti ja selle funktsionaalsuse hindamiseks, eriti seal, kus kasutatakse mõnda diffuusalbackupi strateegiat.

Pärast seda tuleb märkida, et need skriptid käivit ajal suurendavad süsteemi koormust, mida tuleb arvestada.

#### Pluginid

WordPressis on lähes ebameelne probleem, mida ei saa lahendada pluginiga, ja kui välise skriptide haldamine ei ole teie igas, siis võib plugin olla järgmine parim valik.

Varemõõtlikud (plugins) erinevad võimalustest ja funktsioonidest, kuid elasid enamasti sama funktsiooni: WordPressi failide ja database sisut kopienda. Seejärel erinevad funktsioonid sellest, kuidas mõned pluginid varbukke väljas teenusees (nt Google Drive või Dropbox) või mõne sotsiaalselt compatibla objekti haldamise teenusees (nt S3, Wasabi) saatavad. Küll rohkem funktsionaalsed pluginid pakuvad erinevaid varbukke (differential backups) või muid strateegiaid, mis varbukki ainult selle andmete jaoks teeb, mis muutunud on, et väljas hoiatulevikud haldamise kustutustähtuse maksude vähendamiseks.

Pluginil valides ettevaatuge, et see toetab multisite-režiimi (multisite aware). Selle toimimise luonnat tõttu võib tegeliku varbukki käivitamise ajal serveril hetke jaoks ületada koormust.

#### Domeen ja SSL

Domeenide kasutamist multisite _subdomain_ režiimisega on juba palju discusseeritud. Võimalik lahendus võrku administraatoritele on kasutada wildcard DNS-sisseandmeid (wildcard DNS entries).

![Wildcard DNS entry configuration example](/img/config/settings-domain-mapping.png)

Selline DNS-sisseandme tüüp resolube _subdomeeneid_ nagu ‘site1.domain.com’ ja ‘site2.domain.com’ IP-adressiks 1.2.3.4, mis toetab Ultimate Multisite'i ja laialdaselt WordPress Multisite'i multisubdomeenirežiimi kasutamist.

See võib HTTP-ga täiesti hästi toimida, kuna eesmärkhost on lugemine HTTP-pealkirjast, kuid harva on tänapäeval veebileht nii lihtne, et turvalise HTTPS-transaktsioonid oleksid läheduslikud vajadused.

Turkse on Fortunately on lihtsaid võimalusi SSL-sertifikaadega. _subdirectory_ režiimis saab kasutada tavalset domeenisertifikaati. Need on saadaval ja tasuta hoitjaantujate poolt, kes võivad kasutada ilmaasutustatud LetsEncrypt teenust või muud allikat. Muutes selleks sertifikaatit saate ostada autoriteetide poolt, kui saate sertifikaatin küsimuse (CSR) genereerida.

_subdomain_ režiimis lahendab wildcard SSL-sertifikaati kasutamine täydel harmoniaga wildcard domeeniga ja võimaldab sertifikaatilt olla autoritiivne nii juurdomaaini kui ka kõigile _subdomainile_ ilma lisakohastustega.

Kuid tuleb märkida, et wildcard SSL-sertifikaadid ei pruugi töötada Cloudflare'i nagu näiteks ettevõtteplaanil või kui seadete asetus on DNS-le ainult, milles kõik kašimis- ja optimeerimise funktsioonid on ületatud.

Out-of-the-box Ultimate Multisite pakub selle probleemile lahenduse, demonstreerides meie laia kogemus WordPress multisite vajadustega. Selle lihtsa addoni aktiveerimine laseb Ultimate Multisite kasutada teie Cloudflare-kujutusi automaatselt DNS-sisse seadistamiseks võrku sidetel ja asetamiseks nende režiimidiks 'proxied'. Sellest viisil iga võrkuse subdomaan, kui see luuakse, saavad täieliku kaitset ja kõik Cloudflare'i eelised, sealhulgas SSL.

Kõrval Ultimate Multisite installatsiooni loodud laatu ja tarkoitlisu järgi võib olla vajadus klientide poolt kasutada oma domeeneid. Sellis juhul võrkuse administraator on vastutav kahe küsimuse lahendamisest: üks on domeeni nimetamise hoitamine ja teine SSL-sertifikaadid selle domeenile.

Paljudeliselt kasutamiseks Cloudflare on lihtne valik. Klient peab lihtsalt oma domeeni Cloudflare'ile paigutama, CNAME-i juurdomaainile (root domain) Ultimate Multisite'ile viitama ja domeeni Ultimate Multisite'is mappima, et alustada oma isiklikud domeeninimed kasutamisel.

See allpool tuleb otsida alternatiivseid lahendusi, mis on põhjus sellele, et Ultimate Multisite soovitatakse Compatible Providersi nimekirja. See on seotud sellega, et DNS- ja SSL-seadistamise protsess võib olla keeruline. Kuid Ultimate Multisite'i integreerimise abil see keerukus on palju vähennatud ja protsess on automatiseeritud.

#### Pluginid

On väga tõenäoline, et vajad lisaplakette klientidele või võrku sille funktsionaalsuse tagamiseks. Kas kõik pluginid töötavad WordPress Multisite'iga ja Ultimate Multisite'iga? See sõltub sellest, kas.

Kuigi suurim osa pluginidest on installiitav WordPress Multisite'ile, nende aktiveerimine ja litsentsimine varieeruvad autori järgi.

Vajadus on sellel, kuidas litsentsimine kasutatakse mõnikord pluginidega, mis nõuavad litsentsimist domeenide põhjal. See tähendab, et mõnikord võrku administraator peab iga uue kohta käsitsi aktiveerima litsentsi iga pluginile.

Seega võib olla parim kontrollida plugin autoriaga, kuidas nende plugin töötaks WordPress Multisite'iga ja millised erikordused või protseduurid on vajalikud selle litsentseerimiseks.
