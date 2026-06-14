---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101

Ultimate Multisite ir WordPress Multisite plāgiens, kas ļauj jums piedāvāt WaaS vai vietnīgas kā pakalpojumu (Website as a Service) klientiem. Pirms mēs iepīstam un iemēram, kā Ultimate Multisite var palīdz uzlabot jūsu biznesam un klientiem, mums ir nepieciešams pamata zināšanas.

## WordPress Multisite

Lielākais no mums ir familiārs ar standarta WordPress instalāciju. Vai jūs to izveicāt kontrolpanelī jūsu hostings sniedzītāja vai, ja esat drīsti, iestatīt jaunu tīmekļa serveri un datubāzi, lejupielādēt galvenās failus un sākt instalācijas procesu.

Tas piemērots miljoniem WordPress vietnēm visā pasaulē, bet no aģenta vai hostings sniedzītāja perspektīvas atspējiet vienu brīdi apskatīsim apjomu.

Lai gan ir viegli izveidot viens WordPress vietni vai pat simti automātiskās kontrolpanelis ar automatizēšanu, problēmas ātri sāks parādīties, kad tas kļuva par šo vietņu pārvaldību. Bez pārvaldības jūs būsiet galvenais mērķis malvāra. Pārvaldība nozīmē uztveru un resursu lietojumu, un lai gan ir ievēroti ārējie rīki un plāģi, kas palīdz optimizēt WordPress vietņu pārvaldību un administrāciju, fakt, ka klientiem ir administratora piekļuve, nozīmē, ka šie uztverumi var viegli tikt pārspēti.

Svarīgākajā daļā WordPress sniedz funkciju, kas vienkārši nosaukta ‘Multisite’, kas atsaucas uz 2010. gadu WordPress 3.0 lansējumu. Tiek pēc tam vairāku revīzijām, kuras mērķis ir ieviest jaunas funkcijas un stiprināt drošību.

Esam savukārt, WordPress multisite var domāt kā šādi: Universitāte uztur vienu WordPress instalāciju, bet katra fakultāte uztur savuWordPress vietni.

### Tīrnieks

WordPress kontekstā multisite tīkls ir situācija, kur atsevišķi subsites var pārvaldīti no vienas vienotas dashboarda. Lai gan multisite tīkla izveide atšķiras starp dažādiem hostiem, galvenais rezultāts parasti ir vēl dažas direktīvas `wp-config.php` failā, kas ļauj WordPress pamanīt, ka tas darbojas šajā īpašā režīmā.

Antaवं multisite tīklam un atsevišķai WordPress instalācijai ir vairāki skaidri atšķirības, kurām mēs īsumā apskatīsim.

#### Subdomēns vs. Subdirektori

Viena no visbiežākajiem lēmumu, kas jums jāpieņem, ir to, vai multisite instalācija strādās ar _subdirektoriem_ vai _subdomēniem_. Ultimate Multisite darbojas labi ar abām opcijām, bet starp šiem konfigurācijām ir dažas arhitektūras atšķirības.

_Subdirektoru_ konfigurācijā tīkla sites iegūst ceļu (path), kas balsts uz galvenās domēna nosaukumu. Piemēram, tīkla sites ar nosaukumu ‘site1’ turēs savu pilnu URL adresi kā `https://domain.com/site1`. _Subdomēna_ konfigurācijā tīkla sites turēs savu īpašu _subdomēnu_, kas ir izveidots no galvenās domēna nosaukuma. Tādējādi sites ar nosaukumu ‘site1’ turēs savu pilnu URL adresi kā `https://site1.domain.com/`.

Lai gan abas opcijas ir pilnīgi pareizi, to lietošana _subdomēniem_ piedāvā vairākus priekšrocības, bet arī prasa vairāk domāšanu un plānošanu arhitektūrā.

Attiecībā uz DNS lietošanu subdirektoriem ir relativamente vienkāršs izaicinājums. Tā kā tīmekļa vietnes ir vienkārši vecāki (children) tērpam, nepieciešams būt tikai vienai domēna vārda ierakstīšanai galvenajai domēnai. Subdomēnu gadījumā izaicinājums ir nedaudz sarežģītāks un prasa vai atsevišķu CNAME ierakstu katram tīmekļa vietnei vai wildcard (*) ierakstu DNS rezekstūrās.

Vēl viens jautājuma lauks ir saistīts ar SSL-u lietošanu un sertifikātu izdošanu un lietošanu. Subdirektoriem konfigurēšanā var izmantot vienu domēna sertifikātu, jo tīmekļa vietnes ir vienkārši galvenās domēnas tūlītējumi (paths). Tādējādi sertifikāts `domain.com` pietiekami nodrošina SSL https://domain.com/site1, https://domain.com/site2 un tā padomju.

Subdomēnu konfigurēšanā wildcard SSL sertifikāta izmantošana ir viens no visbiežākajiem variantiem. Šveida SSL sertifikāts nodrošina šifrēšanu domēnai un tās subdomēniem. Tādējādi wildcard SSL sertifikāts nodrošina šifrēšanu https://site1.domain.com, https://site2.domain.com un pat `domain.com` sevi.

Lai gan pastāv citus variantus, tie bieži ir ierobežoti apjomu un lietojumu un prasa papildu konfigurēšanu un apsvaļošanu attiecībā uz piemērotību.

#### Plugins un Temas

Kas WordPress dod arī atņem, vismaz no klientu perspektīvas. Ja vienā WordPress instalācijā administrator instalē sliktu pluginu vai neuzlabo savu instalāciju, vienīgais lauks un zaudējums šajā darbībā ir pats. Tomēr ja administrator instalē sliktu pluginu multisite instalācijā, tas rada zaudējumu visam vietnēm, kas ir tīklā.

Tā kā šāda ir iemesla, ka, kad konfigurēts kā multisite WordPress, lietotāji nevar pārņemt iespēju instalēt pluginus un temus no administratoriem vietnēm, bet šo iespēju pārvieto uz jauni izveidoto tīkla administratora vai "super administratora" lomu. Šī īpašīgā loma var tad izlemt, vai atļaut vai neatļaut tīkla vietņu administratorji redzēt vai piekļūt pluginu menu dashboardā un, ja tas ir iespējams, vai šādas atļaupas uzstādīt vai neatstādīt pluginus.

Šajā jomā tīkla administratoram ir atbildība instalēt pluginus un temas tīklā un delegēt atļaupas izmantot šos pluginus un temas tīkla vietnēs. Vietņu administratoriem nav iespējams instalēt pluginus un temas vai piekļūt pluginus un temas, kas nav saistīti ar viņu vietni.

#### Lietotāji un administratorji

WordPress Multisite lietotātāji dalās vienu datubāzu un tāpēc dalās vienos lietotājus, lomas un iespējas visiem tīkla vietnēm. Labākais veids to saprast ir tas, ka visi lietotāji ir tīkla membri, bet ne konkrētā vietnes.

Ņemot šo pazīstamību, var būt nevarīgi ļaut izveidot lietotājus un tāpēc WordPress Multisite pārmanto šo iespēju no vietņu administratoriem un pārvieto to uz tīkla administratora lomu. Apkalpojamam tīkla administratoram tad ir iespējams delegēt nepieciešamās īpašības vietnes administratoram, lai viņš varētu izveidot lietotāju kontus savai vietnei.

<!-- Screenshot unavailable: WordPress Multisite network user management interface -->

Atja atkārtojam iepriekšminēto, lai gan lietotāju konti izskatās saistīti ar vietni, tie faktiski tiek atzīmēti tīklam un tāpēc ir unikāli visā tīklā. Var būt situācijas, kur lietotātāju nosaukumi nav pieejami reģistrēšanai šāda iemesla dēļ.

Meskī, lai gan tas nav jauns jautājums uzņēmējdarbības sistēmas kontekstā, šis viencilis lietotāju reģistrācijas un autentifikācijas avots bieži ir grūti saprotams cilvēkiem, kuri ir pierādīti standarta WordPress instalācijās, kur lietotāju administrēšana ir daudz vieglākais.

#### Media

Kur tīkliskajos vietnēs, kas dalās vienu datubāzi WordPress Multisite, tie saglabā atšķirīgus faila ceļus fiziskajā diskos (filesystem) mediā failiem.

Standartizēts WordPress vieta (`wp-content/uploads`) paliek nelikmaināts; tomēr tās ceļš tiek izveidots tā, lai atspoguļotu tīkliskās vietnes unikā ID. Tādējādi tīkliskās vietnes mediā faili parādās kā `wp-contents/uploads/site/[id]`.

#### Permalinks

Mēs iepriekš minējām, ka ir spēcīgi priekšrocības subdomēnam konfigurācijai salīdzinājumā ar subdirektoriem un šeit ir: ceļi.

Subdirektoriem konfigurācijā galvenais vietne (pirmais vietne, kas izveidota, kad tiek izveidots tīklis) un tīkliskās vietnes jādalās vienā ceļā no domēna nosaukuma. Šim ir lielas konfliktus potenciāls.

Postiem pie galvenajai vietnei tiek pievienots obligāts `/blog/` ceļš, lai novērstu saskargus ar tīkliskajām vietnēm. Tas nozīmē, ka labi izskatītie permalinks, piemēram, ‘Posta nosaukums’, parādīsies kā `domain.name/blog/post-name/`.

<!-- Screenshot unavailable: WordPress permalink settings showing /blog/ path in subdirectory configuration -->

Subdomēnam konfigurācijā šī darbība nav nepieciešama, jo katra tīkliskā vietne ieguv komplektu domēna atšķirību un tā tās nepieciešamība nesakārtoties vienam ceļam. Tvs instead saglabā savus atšķirīgus ceļus, kas balstīti uz viņa subdomēnu.

<!-- Screenshot unavailable: WordPress permalink settings for subdomain configuration -->

#### Statiskās lapas

Konfigurācijai `_subdirectory_` potenciāli nosaukumu konfliktus var izraisīt arī statiskajās lapās, jo galvenais vietnes un tīkla vietnes dalās vienu ceļu.

Lai to novērstu, WordPress piedāvā veidu, kā blacklistēt noteiktas vietnes nosaukumus, lai tie nekonfliktētu ar galvenās vietnes nosaukumiem. Tipiski tīkla administratoris ievada galvenās vietnes lapām root ceļus.

<!-- Iejaums nav pieejams: WordPress tīkla iestatījumi, kas redz noteikto vietņu nosaukumus, lai novērstu konfliktus -->

Konfigurācijai `_subdomain_` nosaukumu konfliktus tiek samazināti, jo `_subdomain_` ir unikāls tīkla vietnei un nav nekādu saistību ar galveno vietni.

### Reģistrācija

WordPress Multisite tīkla iestatījumos ir pieejami vairāki jauni lietotāju reģistrācijas opcijas, kas ļauj jauni un jau eksistējošiem lietotājiem izveidot vietnes.

<!-- Iejaums nav pieejams: WordPress Multisite tīkla iestatījumi, kas redz reģistrācijas opcijas -->

Atšķirībā no atsevišķām WordPress instalācijām tīkla vietnes neuzlabo familiārus opcijas lietotāju reģistrēšanai vai šo reģistrāciju piešķiršanai roļiem.

<!-- Iejaums nav pieejams: WordPress atsevišķas vietnes lietotāja reģistrācijas iestatījumi, kas redz ierobežotas opcijas -->

Kad tiek izveidoti lietotāju konti tie konti tiek generēti tīkla līmenī. Tādējādi viņi nepiezīvo kādu konkrētu vietni, bet gan pieder tīklam. Šim ir dažas īpašas priekšrocības un disadvantages.

Piemēram, izpratījumā, ka jūsu WordPress Multisite ir saistīts ar ziņojumiem un informāciju. Jūs izveidotu multisite un tad izveidoti tīklas vietnes finanšu, tehnoloģiju, izlaišanu un citu interesi nozīmīgām jomām, saglabājot vispārējo kontroli over pluginus un temām. Katra tīkla vietne turvāk būtu ievērojami lielāka kontrole par savas tīkla vietnes izskatu un lietotāja pieredzi nekā ar custom post types vai regulārus postu kategorijas.

Šajā jomā, kad lietotājs iekļauj sistēmā, viņš iekļauj tīklā un galvenokārt tiek iekļauts visās tīkla vietnēs, lai nodrošinātu neprasaigātīgu pieredzi. Ja jūsu jauna vietne būtu bazas abonētiem balstīta, tas būtu ideāls risinājums un rezultāts.

Ja, tomēr, multisite paredzētais dzinējs un mērķis ir piedāvāt atšķirīgas tīkla vietnes, kas nav savstarp saistītas, vienmēr ir nepieciešams izmantot ārējus vai papildu pluginus, lai manipulētu lietotāja roļiem.

### Domeni un SSL

Izpratījumā apskatīsim WordPress Multisite instalāciju, kas næpj mums neredzama – Wordpress.com. Tas ir visizplatitākais piemērs multisite WordPress un demonstrē tās plašas spējās pielāgoties un formēties atbilstoši kādam mērķim.

Šodien mūsdienu interneta lietošanā SSL (Secure Sockets Layer) izmantošana ir praktiski obligāta, un WordPress multisite administratorji drīz saņems šos izaicinājumus.

_Subdomain_ konfigurēšanas laikā vietnes tiek izveidotas uz pamata domēnu. Tādējādi ‘site1’ nosaukta vietne tiek izveidota kā ‘site1.domain.com’. Izmantojot wildcard SSL sertifikātu, tīkla administratoris var veiksmīgi atrisināt šo izaicinājumu un sniegt SSL šifrēšanas spējas tīklam.

WordPress Multisite ietvaras ar domēnu mapiģēšanas funkcija, kas ļauj tīklulim (network) sajtam saistīt personīgu domānu vai domānu, kas ir atšķirīgs no tīkla galvenā domānu.

Tīkla administratoriem tas prasa papildu sarežģītību gan domēnu konfigurēšanā, gan SSL sertifikātu izdošanu un uzturēšanu.

Šajā ziņā, lai gan WordPress Multisite nodrošina līdzekli saistīt [www.anotherdomain.com](http://www.anotherdomain.com) ar 'site1', tīkla administratoram paliek izaicinājums ārējai DNS reģistrēšanu un SSL sertifikātu implementēšanu.

## Ultimate Multisite

Izpradot atšķirības starp vienkāršas WordPress instalāciju un Multisite instalāciju, iesmeklēsim, kā Ultimate Multisite ir galvenais arsena, kas nodrošina vietnīgas kā pakalpojumu (Website as a Service).

### Ievads

Ultimate Multisite ir jūsu svieciņu nožģeri, kad runā par Vietnīgas kā Pakalpojumu (WaaS) izveidi. Pārstāviet Wix.com, Squarespace, WordPress.com un tad domāšanu savu pakalpojumu īpašniecību.

Ap aiz karos Ultimate Multisite izmanto WordPress Multisite, bet to dara tā slikta veidā, ka tas ne tikai risina tīkla administratorju priekšnojautās problēmas ar multisite instalācijām, bet uzlabo iespējas, lai atbalstītu ļoti dažādus lietojumu.

Sejās mēs apskatīsim dažus biežos lietojumus un prasības, kas nepieciešamas šo lietojumu atbalstam.

### Lietojumi

#### Vārds 1: Aģentūra

Tipiski aģentūras galvenie prasmes liecas vietņu dizainam ar aspektiem, piemēram, to hostēšanu vai mārketinga aprakstīšanu kā papildu pakalpojumu.

Agentūrī Ultimate Multisite piedāvā nebrīvu vērtību, jo tas ļauj hostēt un pārvaldīt vairākus vietnes vienā platformā. Tas ir vēl svarīgākām agentūrām, kas standartizē savas dizainus konkrētās temām, piemēram GeneratePress, Astra vai OceanWP, kuras var izmantot Ultimate Multisite spējām automātiski aktivizēt šīs tēmas katras jaunas vietnes laikā.

Līdzīgi kā daudz piedāvājumus agentūru cenās populāriem un veiksmīgiem pluginiem, Ultimate Multisite ļauj agentūrām izmantot jau iegūtas investīcijas nodrošinot vienu platformu, no kuras var instalēt, apkārtotas un izmantot pluginus.

Lielākais iespējams ir, ka konfigurācijas lietošana būs nepieciešama, un laipnie, Ultimate Multisite ļauj viegli veikt domēnu mapi un SSL sertifikātu ar savām integrācijām dažādiem populārām hostingu pakalpojumiem kā arī dienestiem, piemēram Cloudflare un cPanel.

Tādējādi izmantojot vienu no šiem pakalpojumiem vai novietojot Ultimate Multisite aiz Cloudflare, aspekti kā domēnu un SSL sertifikātu pārvaldība kļūst salīdzināti viegli.

Agentūras, kas vēlas saglabāt stingru kontroli vietņu izveidošanas pārāk, novēršas ar tovieglu veidarbību, kā tas ļauj veikt vietnes un saistīt vietnes ar klientiem un plānus caur Ultimate Multisite vienkāršā interfeisa.

![Ultimate Multisite site management interface](/img/admin/sites-list.png)

Stingra kontrole pluginos un temām tiek saglabāta pēc produktu bazas, lai nodrošinātu intuīcijas lietotnes, kas ļauj pluginus un tēmas kļūt pieejami vai slēptes kā arī to aktivācijas statuss, kad tie instancējamas jauna vietnei.

![Product plugin limitations interface](/img/config/product-plugins.png)

Temas piedāvā līdzīgu funkciju, ļaujot konkrētām temām aktivizēties vai slēgties vietnē izveidošanā.

![Product theme limitations interface](/img/config/product-themes.png)

Agentūrai būs klussība ar Ultimate Multisite, jo tas ļauj viņiem darīt to, kas tiem labāk: dizināt izcilu tīmekļa vietnes.

#### Pārdevējs 2: Niche sniedzējs

Ir viena veca pazīstama frāze, kas saka: "darīt vienu lietu un darīt to labi". Daudziem speciālistiem tas nozīmē produktu vai pakalpojuma izveidi ap vienu galveno ideju.

Mazākums jūs varat būt aizrautīgs golfa spēlētājs, kas promova vietnes klubiem, vai varat būt aizrautīgs e-sportu spēlētājs, kurš sniedz vietnes klānus. Vai kāds individuāls, kurš promova rezervācijas pakalpojumu restoranam?

Daudzām iemesliem jums visticamāk būtu nodrošināt pakalpojumus, kas balstīti uz vienu kopīgu risinājuma veidu un platformu. Var būt situācija, ka jūs izveidojusi vai investējusi bespoke pluginus, lai sniegtu nepieciešamās funkcijas, vai varētu būt situācija, ka industrias labākās prakses prasa kādu standardizētu pieejamības pieeju dizainam.

Ultimate Multisite inovative funkcija ir atbalstīt template sites (shablons). Template site ir tas, kur theme ir instalēta un aktivizēta, nepieciešami pluginus ir instalēti un aktivizēti, un izveidoti piemēroji saraksti vai lapas. Kad kliente veido jaunu vietni uz pamata template, template saturs un iestatījumi tiek kopēti jauni creatā vietnē.

Šis sniedz neparīgu priekšrocību niche vietņu un pakalpojumu sniedzējam, ļaujot ātri izveidot vietni, kas ir gatava lietošanai ar personizētām pluginus un dizainu. Klientam pietiek minimālais iegūmisji, lai pabeigtu pakalpojumu.

Atkaros atkaros, kas novērtējumiem, gan subdirektoriem, gan subdomēniem var būt piemēroti konfigurācijas, un šajā gadījumā arhitektūras izvēles ir starp vienkāršas SSL sertifikāta lietošanu subdirektoriem un viltru (wildcard) SSL sertifikāta lietošanu subdomēniem.

#### 3. Pārdevēja WordPress vietnes hostings

WordPress vietņu hostēt ir milzīgs iespēju, bet ļoti retu tas ir tik vienkārši kā sniegt klientam tīmekļa vietu ar iepriekš instalētu WordPress versiju. Tas ir tā, jo nepieciešams pievienot vairākus lēmumus un apsvērumus, lai nodrošinātu nozīmīgu pakalpojumu.

Ultimate Multisite izcēljas šajā jomā sniedzot vispārēju "turnkey" risinājumu WordPress vietņu hostēšanai. Risinājumam ir ietverti galvenie mehānisms, kas nodrošina abīkārtas pakalpojumu, maksājumu vākšanu, checkout formus, atlaides kuponus un klientu komunikāciju.

Lielā daļa būtiskās darba, kas nepieciešama WordPress Multisite pareiz instalēšanai, konfigurēšanai un uzturēšanai, tiek palīdzēta ar Ultimate Multisite tā mērā, ka tīkla administratoram pietiek vien apsvērt aspektus, kas saistīti ar viņa pakalpojumu vai nismi, piemēram, produktiem līmeņiem, cenām un pakalpojumu piedāvājumiem.

Programmeriem, kuri vēlas integrēties ar Ultimate Multisite, risinājums piedāvā arī vispārēju RESTful API un Webhooks notikumu paziņošanai.

Bez atkarības uz milzīgu ārējām palīdzībām un licencēm, Ultimate Multisite sniedz funkciju bagātītu un salīdzinājam risinājumu, kā Wix, Squarespace vai WordPress.com.

### Arhitektūras apsvērumi

Lai gan tas nav vispārīga ceļvedība, šie elementi var būt noderīgi tehnoloģiju pareizai izvēlei, kas atbalsta Ultimate Multisite instalāciju.

#### Sadarbīts vs. Viena hostings (Shared vs. Dedicated Hosting)

Šeit nevis visi hostingu sniedzēji ir vienādi, un kādi no tiem praktizē ļoti augstu servera densitāti. Līdzdarbība zārtās līmeņa sniedzējiem tipiski ražo ienalmājamu ar optimizētu servera densitāti. Tādējādi jūsu Ultimate Multisite instalācija var būt tikai viens no vairākām simtiem vietnēm vienā serverā.

Bez atbilstošajiem aizsardzības, kas ir nodrošināti sniedzējam, dalījumās servera vietnes piedzīvo "stirdīgas kaimiņa" problēmu. Tas nozīmē, ka vienā pašas serverā esoša vietne izmantojot tik daudz resursu, citi vietnes ir jākonkurrojo atlikušos resursus par. Bieži tas manifestējas kā vietnes, kas ir lēkas vai neatbild uz laiku.

Kopējoties sniedzējs web hostingu, flow on effects rezultāti nozīmē, ka jūsu klientiem piedāvājas zems ātrums, zema lapas ranga un augsti atskaitības (bounce rates), kas bieži rezultē klientu atstāšanu, jo viņi meklē 서비스를 citur.

Kopējoties, lēts neizplatīgs labumu.

Ultimate Multisite ir zināms, ka darbojas ar vairākiem labiem hostingu sniedzējiem un labi integrējas ar viņu vidi nodrošinot funkcijas kā domēnu mapi (domain mapping) un automātiskais SSL. Šie sniedzēji novērtējo veiktspēju un sniedz augstāku kvalitātes pakalpojumu nekā dalījumās serveras.

Ja jums ir saraksts saistītiem sniedzējiem un pilni iestatījuma instrukcijas katram no tiem, lūdzu, pārbaudiet dokumentāciju "Compatible Providers".

#### Veiktspējas ievērojumi

Ultimate Multisite nav lēks lietojums, tas ir ļoti ātrs. Tomēr tas darbojas tikai tik labi kā pamata lietojums un infrastruktūra, un var izmantot tikai to, ko viņam ir pieejams.

Izmeklējiet šo: Jūs esat tīkla administratoris Ultimate Multisite instalācijai ar 100 vietnēm. Noteikumi no tiem labi darbojas un atraita vairāku vietņu viesu katru dienu.

Šis scenārijs ir atšķirīgs mazākās mērlēs, piemēram vienam līdz pieci vietnēm, bet pirms garas laika problēmas skali būs redzamas.

Ja viens Ultimate Multisite vietnes nepaliek apmeklētāju pieprasījumu apstrādes uzmanības zem, tas kļūs par atbildīgu par visiem vietņu lietotāju pieprasījumus piesaisti. Šie pieprasījumi var būt dinamiskās PHP lapas vai statiskās resursas, piemēram, stilu lapas (stylesheets), JavaScript vai mediju faili. Vai vienā vietnē vai simti vietnēs, šie uzdevumi kļūst atkārtojami, monotonami un neefektīvi. Nav ir nepieciešams izmantot CPU spējas un memoriu procesēt PHP failu, ja rezultāts katram pieprasījumam ir tas pats statisks informācija.

Tāpat vienas pieprasījuma par PHP vai HTML lapu attiecīgi rada vairākus sekojošos pieprasījumus skriptiem, stilu lapām un attēlu failiem. Šie pieprasījumi tiek tieši novirzīti uz jūsu Ultimate Multisite serveri.

Šo problēmu var viegli risināt uppgrādājot serveri, bet tas neizrisina sekundāro problēmu – geografiskās atlaidējumu (latencies). Tikai vairāki serveri dažādās vietās var labi atbildēt uz šo problēmu.

Tā kā šo iemeslu, lielākā daļa tīkla administratoru izmanto front-end caching risinājumus un satura distributīcijas tīklu (CDN) statiskām lapām pieprasījumu apstrādei. Šie pieprasījumi piesaistot un resursus serveram piekļūt pirms pieprasījuma sasniedzot serveri, ietver procesingu resursus, eliminē atgrēkšanos, izvairās nepieciešamajām uppgrādājumiem un maksimizē tehnoloģiju investīcijas.

Ultimate Multisite ietver sarežģītu Cloudflare add-on, kas ļauj tīkla administratoriem novietot savas instalācijas aiz Cloudflare un izmantot ne tikai tās caching iespējas, bet arī DNS hostingu, SSL sertifikātu un drošības mehānismus.

#### Backups

Var jautāt 50 cilvēkiem par backupiem un saņemt 50 dažādus viedokļus par backup stratēģijām. Atbilde ir: tas atkar no situācijas.

Nei mainī, ka nepašzināms ir tas, ka nepieciešami backingi un ka gandrīz neiztiekam, ka tos vada tieši šķēršļoties sniedzējs, īpaši viens, kas piedāvā pārvaldīto pakalpojumu. Tādējādi klientiem jāmeklē tīkla administratora, lai nodrošinātu un pārvaldītu šo pakalpojumu. Kuram tīkla administratoram meklēt ir vēl problēma.

Šajā sadaļā piegriezieties vienojumam, ka backingis ir sistēmas stāvokļa kopējais atkarbējums tajā laikā, kad sākas backinga veidošana. Vienkārši izteiktu: kas tas ir sistēmas stāvoklis backinga laiku, tas tiek saglabāts un aizturts backingā.

Ar šo sapratumiem atbildes par to, kā sasniegt backingus un kas labāk jūsu apstākļiem, lielā mērā ieteikumi jūsu prasībām un hostings sniedzēja spējai tos prasības apkurēt. Tomēr pēc visiešas viedokļu rīcjumā no visviesotākajam līdz mazviesotākajam, šīs opcijas var sniegt kādu ieteikumu.

#### Snapshots (Atkarbējumi)

Snapshots ir backingiem "silvērām bumbām", jo tie ir viegli, nekomplikoti (kamēr vēlaties atgriezt) un "viskas izdarās". Tomēr tas prasa kādu palīdzību no jūsu sniedzēja un galvenokārt piemērots tikai tad, ja jums ir VPS (Virtual Private Server) vai līdzīga sistēma. Vairā sniedzēji, kas listēti mūsu "Kompatie Sniedzēji" dokumentācijā, piedāvā backingus, kas neprasa vēl jebkuru ievades vai pārvaldības no tīkla administratora.

Lai gan tradicionālajos backupos tiek mērāti failiem un datubāzēm, snapshot mērās visu diskus. Tas nozīmē, ka ne tikai vietnes dati tiek saglabāti snapshotā, bet arī operacionālā sistēma un konfigurācija. Daudzām to ir spēcīgs priekšrocība, jo no snapshotā var praktiski mirkli izveidot jaunu sistēmu un ieviekt to darbību, lai aizstāvu nepieciešamu instanci. Līdzīgi atjauno procesu failu atkāpšanai prasa tikai snapshot image pievienot kā disk savai eksistējai instanci, lai failus varētu piekļūt un kopēt.

Snapshotam var būt papildu izmaksas ar hostings sniedzējam, bet tas ir ātrasti aizsardzība pret nespējām.

#### Īpaši skripti (External Scripts)

Līdz esošā laikā nav nepieciešams vēl kādī īpaši skriptu un risinājumu backupēt WordPress un MySQL resurs, un tie labi derētu Ultimate Multisite, jo tas ir WordPress plugin, kas izmanto WordPress failus sistēmu un datubāzi. Tādējādi risinājums, kas backupē WordPress vietnes, piemērots Ultimate Multisite vajadzībām.

Mēs nevaram rekomendēt vienu skriptu pār otru, bet mūsu vispārīga padoms ir veikt vairākus backupa un atjauno testus, lai nodrošinātu, ka rezultāti ir vēlamie, un "noteikiet seku" (beidziet seku) nepārtraukti novērtot skriptu un viņa funkcionālu, īpaši tur, kur piemērota diferencijas backupa stratēģija.

Jā atzīmē, ka šie skripti, runot kā tie, palielina sistēmas slodzes, kas jāņem vērā.

#### Pluginu

WordPress-ā praktiski nav problēmu, ko nevar risināt ar pluginu, un ja jūs nevarat labi pārvaldīt ārējus skriptus, tad iespējams, ka plugin ir labākais nākamais pasākums.

Lai gan pluginu atšķiras iespējas un funkcijas, tie lielāko laiku veic vienu lietu: kopēji tas ir kópē WordPress failus un datubāzes saturu. Pēc tam funkcijas atšķiras – dažas pluginus var nosūtīt backupus uz ārējus pakalpojumiem, piemēram Google Drive vai Dropbox, vai uz kādu atbilstošu objekta glabātnes pakalpojumu, piemēram S3 vai Wasabi. Lielākos un visbiežāk izmantotajos pluginos piedāvā diferencijas backupus vai kādu stratēģiju, kas nodrošina backupu tikai uz datiem, kas ir mainīti, lai samazinātu ārējās glabātnes izmaksas.

Izvēloties savu pluginu, jāpārbauda, ka tas atbalsta multisite režīmu. Tā dabiski darbības laikā backupa veidošanas laikā varētu būt atkārtota slēgšana serverim līdz šī procesa pabeigšanai.

#### Domēns un SSL

Lielākais daudz ir jau apspārstīts par domēniem multisite _subdomain_ režīmā. Praktiski visbiežākais risinājums tīkla administratoru ir izmantot wildcard DNS ierakstus.

![Wildcard DNS entry configuration example](/img/config/settings-domain-mapping.png)

Šāda veida DNS ieraksts veiksmīgi atrisina _subdomēnus_, piemēram ‘site1.domain.com’ un ‘site2.domain.com’, uz IP adresi 1.2.3.4, tādējādi atbalstot Ultimate Multisite un lielāku mērķi WordPress Multisite izmantojot _subdomain_ režīmu.

Tas var pilnīgi piemēroties HTTP, jo mērķa host tiek lasīts no HTTP sarakstu, bet šodien vadi ir ļoti vienkārši, ka drošas HTTPS transakcijas praktiski ir obligātas.

Labi ir labi vienkāršas iespējas SSL sertifikāti. `subdirectory` režīmā var izmantot parasti domēna sertifikātu. Šos var viegli un bezmaksas iegūt no hostingu pakalpojumu sniedzējiem, kas var izmantot bezmaksas LetsEncrypt pakalpojumu vai citu avotu. Otherwise tie ir komerciāli pieejami autoritātiem, ja jums ir spēja veikt sertifikāta pētījuma pieprasījumu (CSR).

`subdomain` režīmā viltkārto SSL sertifikāta izmantošana perfekti ietveras ar viltkārto domēnu un ļauj sertifikat atsaukties uz pamata domēnu un visām `subdomains` bez nepieciešamās konfigurācijas.

Tomēr jāņem vērā, ka viltkārto SSL sertifikāti var nepiemērot ar pakalpojumiem, piemēram, Cloudflare, ja jūs neesat uzņēmējdarbības plānu vai neiziet ienauju DNS tikai režīmu, kur viss kešēšana un optimizācija tiek apmeklētas.

Out-of-the-box Ultimate Multisite sniedz risinājumu šai problēmai, demonstrējot mūsu plašu pieredzi WordPress multisite vajadzībām. Aktivitāto šo vienkārsho add-on vai ļaus Ultimate Multisite izmantot jūsu Cloudflare atļaujas, lai automātiski pievienotu DNS ierakstus tīklisko vietnēm Cloudflare un iestatu to režīmu kā ‘proxied’. Šāda veidā katra tīkliskā subvieta, kas tiek radīta, turēs pilnu aizsardzību un priekšrocības, ieskaitot SSL.

Atkarībā no jūsu Ultimate Multisite instalācijas dabisko noteikuma un mērķa var būt nepieciešams klientiem izmantot savas domēnus. Šajā gadījumā tīkliskais administrator ir atbildīgs par risināt divas problēmas: pirmā, domēna nosaukuma hostēšana un otrā, domēna SSL sertifikāti.

Daud vielu lietotāju Cloudflare ir viegais rīksmes veids. Klientam pietiek, lai viņu domēnu iestatītu Cloudflare, uzrādītu CNAME atsaucijumus Ultimate Multisite pamata domēnei un mapētu savu domēnu Ultimate Multisite, lai sāktu izmantot savu personīgo domēnu nosaukumu.

Šajā jomā jāmeklē alternatīvas solutions, kas ir tā iemesls, kāpēc Ultimate Multisite ieteic klāstu saistītos sniedzēju sarakstu. Tas ir tā, ka DNS un SSL konfigurēšanas procesa veidošana var būt nepatikms process. Tomēr ar Ultimate Multisite integrāciju ar šiem sniedzēji sarežģītība ir ļoti samazināta, un procedūra tiek automātiski veikta.

#### Plugins

Ļoti iespējams, ka jums būs nepieciešami papildu plugins, lai nodrošinātu funkcijas jūsu klientiem vai tīklas vietnēm. Vai visi plugins darbojas ar WordPress Multisite un Ultimate Multisite? Tas atkar no tā.

Lai gan lielākais daudz plugins ir instalēmi WordPress Multisite, to aktivizēšana un licencēšana atšķiras no autori uz autoru.

Izdevums ir tajā, kā licencēšana tiek piemērota dažiem plugins, kas prasa licencu pa domēnu bazas pamatu. Tas nozīmē, ka dažiem plugins administratoram būs jāaktivizē licence manuāli katram pluginam katrā jauna vietnē.

Tātad var labāk pārbaudīt ar pluginu autoru, kā viņa plugin darboties ar WordPress Multisite un vai ir nepieciešami nozīmīgi noteikumi vai procedūras licencēšanai.
