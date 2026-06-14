---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101

Ultimate Multisite je WordPress plugin koji vam omogućava da ponudite WaaS ili Websites as a Service kupcima. Pre nego što se duboko uđemo i naučimo kako Ultimate Multisite može pomoći vašem poslovanju i kupcima, potrebno je da steknete neku osnovnu znanja.

## WordPress Multisite

Većina nas upoznata sa standardnom instalacijom WordPress-a. Ili ga kreirate preko kontrolne table hosting provajdera ili, za hrabrije, postavite novi web server i bazu podataka, preuzmite jezgraste fajlove i počnite proces instalacije.

Ovo radi za milione WordPress sajtova širom sveta, ali iz perspektive agencije ili provajdera hostinga, hajde da malo razgovaramo o obimima posla.

Dok je sinkronizacija za kreiranje jednog WordPress sajta ili čak sto putem automatizovane kontrolne table problematična, problemi počinju se pojavljivati čim dođe do upravljanja tim sajtovima. Ako ne budete upravljali njima, postajete primarna ciljna grupa za malware. Upravljanje znači napor i resurse, i iako postoje spoljašnji alati i pluginovi koji pomažu u pojednostavljenju upravljanja i administracije WordPress sajtovima, činjenica da kupci zadržavaju administratorski pristup znači da se ti napori mogu lako prevazići.

Unutar svog jezgra, WordPress nudi funkciju jednostavno nazvanu ‘Multisite’ koja potiče iz 2010. godine, kada je lansiran WordPress 3.0. Od tada je dobio niz revizija usmerenih na uvođenje novih funkcija i pojačavanje bezbednosti.

U suštini, WordPress multisite se može zamisliti ovako: Univerzitet održava jednu instalaciju WordPress-a, ali svaki fakultet održava svoj sopstveni WordPress sajt.

Da bismo razložimo ovu rečenicu, pogledajmo neku od osnovne terminologije koja se nalazi ne samo u dokumentaciji Ultimate Multisite, već i širom WordPress zajednice.

### Mreža (The Network)

U kontekstu WordPress-a, multisite mreža je mesto gde se više podsajtova može upravljati sa jedne glavne dashboard-a. Iako se kreiranje multisite mreže razlikuje između hosting provajdera, krajnji rezultat obično uključuje nekoliko dodatnih uputstava u fajlu `wp-config.php` da WordPress zna da radi u ovom specifičnom režimu.

Postoji niz različitih razlika između multisite mreže i samostalnog instaliranja WordPress-a koje ćemo kratko proći.

#### Poddomena vs. Poddirektorijum (Subdomain vs. Subdirectory)

Jedna od najvažnijih odluka koju ćete morati da donesete je da li će multisite instalacija raditi sa _poddirektorijumima_ ili _poddomenama_. Ultimate Multisite radi jednako dobro sa oba izbora, ali postoje arhitektonske razlike između ova dva konfiguracije.

U konfiguraciji sa _poddirektorijumom_, mreža sajta nasleđuje put (path) na osnovu glavnog imena domena. Na primer, mrežno sajt označen kao ‘site1’ će imati punu URL adresu kao `https://domain.com/site1`. U konfiguraciji sa _poddomenom_, mrežno sajt će imati sopstvenu _poddomenu_ koja se izvodi iz glavnog imena domena. Dakle, sajt označen kao ‘site1’ će imati punu URL adresu kao `https://site1.domain.com/`.

Iako su oba opcije potpuno validni izbori, korišćenje _poddomena_ nudi niz prednosti, ali zahteva i više razmišljanja i planiranja u arhitekturi.

Što se tiče DNS-a, korišćenje poddirektorijuma (_subdirectories_) predstavlja relativno jednostavan izazov. Pošto su mrežno sajtovi jednostavno deca rodnog puta, potrebno je da postoji samo jedan unos u domen za glavni naziv domena. Za _poddomene_ (subdomains) izazov je malo složeniji i zahteva ili zasebni CNAME unos za svaku mrežno lokaciju ili wildcard (*) unos u DNS zapisima.

Još jedna oblast koju treba uzeti u obzir je SSL i izdavač i korišćenje SSL sertifikata. U konfiguraciji _poddirektorijuma_ može se koristiti jedan domen sertifikat jer su sajtovi jednostavno putanje glavnog imena domena. Dakle, sertifikat za domain.com će adekvatno pružiti SSL za https://domain.com/site1, https://domain.com/site2 i tako dalje.

U konfiguraciji _poddomene_ korišćenje wildcard SSL sertifikata je jedna od najčešćih opcija. Ovaj tip SSL sertifikata pruža šifrovanje za domen i njegove _poddomene_. Dakle, wildcard SSL sertifikat će pružiti šifrovanje za https://site1.domain.com, https://site2.domain.com i sam za https://domain.com.

Iako postoje drugi opcije, one su često ograničene u obimu i primeni pa zahtevaju dodatnu konfiguraciju i razmatranje u vezi sa prikladnošću.

#### Pluginovi i teme

Šta WordPress daje, to uzima i onaj, barem iz perspektive korisnika. U samostalnoj instalaciji WordPress-a ako administrator sajta instalira loš plugin ili ne održava svoju instalaciju ažurnom, jedini žrtva i posledica ovog čina je on sam. Međutim, kada administrator sajta instalira loš plugin na multisite instalaciji, stvara se žrtva za svaki sajt koji je instaliran u mreži.

Zbog toga što je podešen kao multisite WordPress uklanja mogućnost za administratora sajta da instalira pluginove i teme, a umesto toga tu nadove ovu mogućnost na novu ulogu administratora mreže ili 'super admin'. Ova privilegovana uloga zatim odlučuje da li će omogućiti administratorima mrežnih sajtova da vide ili pristupaju meniju pluginova u svom dashboard-u i, ako je tako, da li se takva dozvola proširuje na _aktiviranje_ ili _deaktiviranje_ pluginova.

U tom smislu, administrator mreže odgovoran je za instaliranje pluginova i tema na mrežnom nivou i delega dozvole za korišćenje tih pluginova i tema na mrežnim sajtovima. Administratori sajta ne mogu da instaliraju pluginove i teme niti pristupaju pluginovima i temama koji nisu dodeljeni njihovom sajtu.

#### Korisnici i Administracije

U WordPress Multisite, svi sajtovi mreže dele istu bazu podataka i stoga dele iste korisnike, uloge i mogućnosti (capabilities). Najbolji način da to zamislite je da su svi korisnici članovi mreže, a ne određenog sajta.

S obzirom na ovo razumevanje, možda nije poželjno dozvoliti kreiranje korisnika i zbog toga WordPress Multisite uklanja tu mogućnost za administratora sajta i prebacuje je na nadležnost administratora mreže. Na taj način, administrator mreže može delegirati potrebne privilegije administratoru sajta da mu omogući da kreira nalog za korisnika za svoj sajt.

<!-- Screenshot unavailable: WordPress Multisite network user management interface -->

Ponovljajući gore navedeno, iako se naloge za korisnike čine povezani sa sajtom na kojem su, zapravo su dodeljeni mreži i stoga moraju biti jedinstveni u celoj mreži. Može postojati situacija kada imena korisnika ne mogu biti registrovana zbog tog razloga.

Iako nije stran koncept u korporativnim sistemima, ova jedinstvena lokacija za registraciju i autentifikaciju korisnika često je teško razumeti ljudima koji su navikli na samostalnu instaliranja WordPressa gde je administracija korisnika malo lakša.

#### Mediji (Media)

Kada se mrežno saiti dele jednu bazu podataka u WordPress Multisite, oni održavaju odvojene putanje na fajl sistemu za medijske fajlove.

Standardna lokacija WordPress-a (`wp-content/uploads`) ostaje; međutim, njena putanja se menja kako bi odražavala jedinstveni ID mrežno sajta. Posledično, medijski fajlovi za mrežno sajt izgledaju kao `wp-contents/uploads/site/[id]`.

#### Permalinks (Permali linkovi)

Ranije smo spomenuli da postoje značajne prednosti _poddomena_ u odnosu na konfiguraciju _poddirektorijuma_, a evo kako to izgleda: putanje.

U konfiguraciji _poddirektorijuma_, glavni sajt (prvi sajt koji se kreira kada se uspostavi mreža) i podsaite mreže moraju deliti istu putanju koja vodi od imena domena. Ovo ima potencijal za veliki broj sukoba.

Za objave, na glavni sajt se dodaje obavezna putanja `/blog/` kako bi se sprečili sukobi sa mrežnim sajtovima. To znači da lepo formatirani permali linkovi poput ‘Naziv posta’ će biti prikazani kao `domain.name/blog/post-name/`.

<!-- Screenshot unavailable: WordPress permalink settings showing /blog/ path in subdirectory configuration -->

U konfiguraciji _poddomena_ ova akcija nije neophodna jer svaki mrežni sajt koristi punu separaciju domena i stoga ne mora da se oslanja na jednu putanju. Umesto toga, oni održavaju sopstvene različite putanje zasnovane na njihovom _poddomenu_.

<!-- Screenshot unavailable: WordPress permalink settings for subdomain configuration -->

#### Statističke stranice (Static Pages)

U konfiguraciji _subdirectory_ potencijal za konflikte imena se proširuje i na statičke stranice kao glavnu lokaciju, jer mreža i sita dele isti put (path).

Da bi se ovo sprečilo, WordPress nudi način da blokirate određena imena sajtova tako da ne koliduju sa imenima prvog sajta. Obično administrator mreže unosi root putanje stranica glavnog sajta.

<!-- Screenshot nedostupan: Podešavanja mreže u WordPressu koja prikazuje zabranjene nazive sajtova radi sprečavanja konflikata -->

U konfiguraciji _subdomain_ mogućnost kolizije imena se ublažava zahvaljujući _subdomenu_, jer je on jedinstven za sita u mreži i nema nikakvu vezu sa glavnim sajtom.

### Registracija

Unutar podešavanja mreže WordPress Multisite dostupno je nekoliko novih opcija za registraciju korisnika, koje omogućavaju novim i postojećim korisnicima da kreiraju sajtove.

<!-- Screenshot nedostupan: Podešavanja mreže u WordPressu Multisite koja prikazuju opcije za registraciju -->

Za razliku od samostalnih instalacija WordPressa, sita u mreži ne zadržavaju poznate opcije koje omogućavaju registraciju korisnika ili dodelu tih registracija rolama.

<!-- Screenshot nedostupan: Podešavanja registracije korisnika na samostalnoj lokaciji WordPress-a koja prikazuju ograničene opcije -->

Kada se kreiraju nalogu korisnika, ti se nalogi generišu na nivou mreže. Dakle, umesto da pripadaju nekom jedinom sajtu, oni pripadaju celoj mreži. Ovo ima neke specifične prednosti i mane.

На пример, замислите да је ваш WordPress Multisite био у бизнису вести и информација. У то случају бисте установили multisite а zatim креирали сете сајтове за финансије, технологију, развлечење и друге области интересова, привређујући притом целокупну контролу над плагиними и темама. Сваки сете сајт би на свом крају имао знатно већи ниво контроле над изгледом и искуством корисника свог сете сајта него што би то могли да имају кастом пости типови или редовне категорије пословања.

У таквом мерилу, када корисник улази на систему, он улази у мрежу и на крају је улази и на сваки сете сајт како би пружио беспрекорно искуство. Ако ваш нови сајт буде заснован на претплати, ова би била идеална понуда и резултат.

Ако, међутим, намењена природа и сврха multisite-а била да нуди раздвојени сете који немају никакве везе међу собом, веома често ће бити потребне спољне или додатне плагинове за манипулисање улога корисника.

### Домен и SSL

Хајде да разговарамо о инсталацији WordPress Multisite-а која се почти изгуби у набави – Wordpress.com. Ово је најшироко примерен пример WordPress multisite-а и долази док демонстрира његове широке способности за прилагођавање и обликовање како би испунио неку сврху.

Данас на модерном интернету коришћење SSL-а је почти обавезно, а администратори мрежа WordPress multisite-а скоро су преднали овим погледима.

У конфигурацији поддомена се сајто креирају на основу основног доменне имена. Токако би се сајт означен као ‘site1’, он би био креиран као ‘site1.domain.com’. Користећи варлични SSL сертификат, администратор мреже може успешно решити овај проблем и пружити могућност шифровања (SSL-а) за мрежу.

WordPress Multisite sisält pre ima funkciju mapiranja domena koja omogućava da se mrežna sajtovi povežu sa prilagođenim domenima ili domenima različitim od glavnog domena mreže.

Za mrežne administratora, ovo predstavlja dodatni sloj složenosti kako u konfiguraciji imena domena tako i u izdavanju i održavanju SSL sertifikata.

U tom smislu, iako WordPress Multisite pruža način da se [www.anotherdomain.com](http://www.anotherdomain.com) mapira na 'site1', mrežni administrator ostaje sa izazovom eksternog upravljanja DNS unosi i implementacije SSL sertifikata.

## Ultimate Multisite

Razumevajući razlike između samostalnog WordPress instalacionog okruženja i Multisite instalacije, pogledajmo kako je Ultimate Multisite ultimativno oružje za pružanje Web sa Servisom (WaaS).

### Uvod

Ultimate Multisite je vaš švicarski nož kada je u pitanju kreiranje Web sa Servisa (WaaS). Zamislite Wix.com, Squarespace, WordPress.com i zatim razmislite o vlasništvu nad sopstvenim servisom.

Pod pokrovom Ultimate Multisite koristi se WordPress Multisite, ali to radi na način koji ne samo da rešava mnoštvo problema sa kojima se mrežni administratori suočavaju kod multisite instalacija, već poboljšava mogućnosti tako da podržava široku raznolikost slučajeva korišćenja.

U sledećim sekcijama ćemo pogledati neke uobičajene slučajeve korišćenja i potrebe za njihovom podrškom.

### Slučajevi korišćenja

#### Primer 1: Agencija

Tipično, jezgro veština agencije leži u dizajnu veb sajtova sa aspektima kao što je njihovo hostovanje ili marketing navedeni kao dodatne usluge.

Za agencije, Ultimate Multisite nudi neverovatnu vrednost jer omogućava hostovanje i upravljanje više veb sajtova na jednoj platformi. To je još važnije za agencije koje standardizuju dizajn pomoću određenih tema kao što su GeneratePress, Astra, OceanWP ili drugih – one mogu iskoristiti mogućnosti Ultimate Multisite da automatski aktiviraju te teme za svaki novi sajt.

Slično kao i obrada ponuda za cene agencijskih usluga za popularne i česte pluginove, korišćenje Ultimate Multisite omogućava agencijama da iskoriste postojeće investicije pružanjem zajedničke platforme na kojoj se pluginovi mogu instalirati, održavati i koristiti.

Najverovatnije će biti poželjno koristiti konfiguraciju, a srećom, Ultimate Multisite olakšava mapiranje domena i SSL sertifikate kroz svoje integracije sa brojnim popularnim hosting provajderima kao i uslugama kao što su Cloudflare i cPanel.

Dakle, korišćenjem jednog od ovih provajdera ili postavljanjem Ultimate Multisite iza Cloudflare-a, aspekte upravljanja domenima i SSL sertifikatima postaju prilično jednostavni.

Agencije koje preferiraju da zadrže strogu kontrolu nad kreiranjem sajtova će ceniti lakoću s kojom mogu kreirati sajtove i povezati sajtove sa klijentima i planovima putem pojednostavljenog interfejsa Ultimate Multisite-a.

![Ultimate Multisite site management interface](/img/admin/sites-list.png)

Stroga kontrola nad pluginovima i temama održava se na osnovu svakog proizvoda kroz intuitivne interfejse Ultimate Multisite-a koji omogućavaju da se pluginovi i teme dostupne ili skrivaju, kao i njihov status aktivacije kada se instanciraju za novi sajt.

![Product plugin limitations interface](/img/config/product-plugins.png)

Teme (teme) nude sličnosti, omogućavajući određenim temama da se aktiviraju ili sakriju na kreiranom sajtu.

![Interfejs ograničenja tema proizvoda](/img/config/product-themes.png)

Agencije će pronaći mir sa Ultimate Multisite platformom koja im omogućava da rade ono u čemu su najbolji - dizajniraju izuzetne web sajtove.

#### Primer 2: Pružaoc niše

Postoji stara poslovica koja kaže: „Uradi jednu stvar i uradi je dobro”. Za mnoge specijaliste, to znači kreiranje proizvoda ili usluge oko jedne osnovne ideje.

Možda ste zaljubljen u golfejkupromociju sajtova klubovima ili možda ste zaljubljen u esports igranje i pružate web sajtove klanovima. Možda pojedinac koji promovira uslugu rezervisanja restoranima?

Iz mnogih razloga biste želeli da nudite usluge zasnovane na zajedničkom okviru i platformi. Možda ste dizajnirali ili uložili novac u specijalne pluginove kako biste pružili potrebnu funkcionalnost, ili može biti slučaj da industrijske najbolje prakse zahtevaju neku vrstu standardizovanog pristupa dizajnu.

Jedna od inovativnih karakteristika Ultimate Multisite platforme je korišćenje šablonskih sajtova (template sites). Šablonski sajt je onaj gde je tema instalirana i aktivirana, potrebni pluginovi instalirani i aktivirani, a kreirane su uzorne objave ili stranice. Kada klijent napravi novi sajt na osnovu šablona, sadržaj i podešavanja šablona se kopiraju u 새로 kreirani sajt.

Za pružaoce nišnih sajtova i usluga, ovo pruža neuporedivu prednost u mogućnosti trenutnog kreiranja sajta spreman za upotrebu sa prilagođenim pluginovima i dizajnom. Klijent mora samo da pruži najminimalniji unos kako bi se usluga kompletirala.

Zavisno od zahteva, mogu odgovarati i konfiguracije sa poddirektorijumima (_subdirectory_) ili poddomenima (_subdomain_), u tom slučaju bi izbor arhitekture bio između jednostavnog SSL sertifikata za poddirektorijume ili wildcard SSL sertifikata za poddomeine.

#### Primer 3: WordPress Web Hosting

Postoji mnogo načina da hostujete WordPress sajtove, ali retko je jednostavno kao pružanje web prostora klijentu sa unapred instaliranom verzijom WordPress-a. To je zato što je potrebno objediniti niz odluka i razmatranja kako bi se pružio smislen servis.

Ultimate Multisite se ističe u ovoj oblasti tako što nudi sveobuhvatan gotov rešenje za hosting WordPress sajtova. Rešenju su uključeni osnovni mehanizmi za pružanje pretplatničkih usluga, prikupljanje plaćanja, forme za prodatu (checkout forms), kupon za popuste i komunikaciju sa klijentima.

Većina integralnog rada koji je potreban za ispravnu instalaciju, konfigurisanje i održavanje WordPress Multisite olakšava Ultimate Multisite tako što se administratori mreže moraju razmatrati samo aspekte vezane za njihov servis ili nišu, kao što su nivoi proizvoda, cene i ponude usluga.

Za developere koji žele da se integrisaju sa Ultimate Multisite, rešenje nudi sveobuhvatan RESTful API i Webhooks za obaveštenja o događajima.

Bez oslanjanja na niz spoljnih pluginova i licenci, Ultimate Multisite pruža bogato funkcionalno i slično rešenje kao Wix, Squarespace, WordPress.com i drugi.

### Arhitektonske razmatranja

Iako nije sveobuhvatan vodič, sledeći elementi bi trebalo da služe kao smernice za ispravan izbor tehnologija koje podržavaju instalaciju Ultimate Multisite-a.

#### Deljeno vs. Dedikovano hosting

Nažalost, ne svi hosting provajderi su jednaki i neki prave ekstremne servere gustine. Niskokoszti provajderi obično zarađuju tako što maksimiziraju gustinu servera. Kao takav slučaj, vaša Ultimate Multisite instalacija može biti samo jedan od nekoliko stotina sa istog servera.

Bez odgovarajućih zaštita koje pruža provajder, sajtovi na zajedničkom serveru doživljavaju problem „bučnog suseda“ (noisy neighbour). To znači da sajt koji koristi toliko resursa kao drugi sajtovi moraju da se bore za preostale resurse. Često se to manifestuje kao sajtovi koji su spori ili ne reaguju na vreme.

Kao provajder web hostinga, to će značiti da vaši klijenti doživljavaju loše brzine, niski rang u pretrazi i visoke stopove odbačanja (bounce rates), što često dovodi do gubitka kupaca koji traže usluge drugde.

Ukratko: je jeftino ne znači dobro.

Ultimate Multisite poznat je po tome da radi sa nizom dobrih provajdera hostinga i dobro se integriše u njihovu okruženje, pružajući funkcije kao što su mapiranje domena (domain mapping) i automatski SSL. Ti provajderi cene performanse i nude viši nivo usluge nego zajednički hosting.

Za listu kompatibilnih provajdera i kompletnih uputstava za podešavanje za svakog od njih, molimo vas da proverite dokumentaciju o Kompatibilnim Provajderima (Compatible Providers).

#### Razmatranja u vezi performansi

Ultimate Multisite nije spor aplikacija, već je izuzetno brz. Međutim, on radi samo koliko je dobar kao i osnovna aplikacija i infrastruktura, te može iskoristiti samo ono što ima pristup.

Razmislite o ovome: Vi ste administrator mreže Ultimate Multisite instalacije sa 100 sajtovima. Neki od tih sajtova dobro rade i privlače određeni broj posetilaca svakog dana.

Ovaj scenarij bi bio drugačiji na manjim skalama, recimo od jednog do pet sajtova, ali pre nego što se pojave ozbiljni problemi skale, to postaje očigledno.

Ako ostane nepratren, jedan Ultimate Multisite sajt će biti odgovoran za ispunjavanje zahteva svih posetilaca sajtova. Ti zahtevi mogu biti za dinamičke PHP stranice ili statičke resurse kao što su stilovi (stylesheets), JavaScript ili medijski fajlovi. Bez obzira da li je reč o jednom sajtu ili sto, ove zadaci postaju ponavljajući, monoton i bezvredni. Nevjerojatno je koristiti CPU snagu i memoriju za obradu PHP fajla kada je izlaz isti statički sadržaj za svaki zahtev.

Slično tome, jedan zahtev za PHP ili HTML stranicu generiše više naknadnih zahteva za skripte, stilove i slike. Ti zahtevi su direktno usmereni na vaš Ultimate Multisite server.

Ovo se može lako rešiti ažuriranjem servera, ali to ne rešava sekundarni problem – geografske kašnjenja (latencies). Samo više servera u različitim lokacijama bi mogao pravilno da reši ovaj problem.

Zbog toga većina mrežnih administratora koristi rešenja za front-end caching i Content Distribution Networks (CDN) kako bi ispunili zahteve za statičke stranice. Ispunjavanje ovih zahteva i slanje resursa pre nego što zahtev stigne do servera štedi procesorske resurse, eliminiše kašnjenja, sprečava nepotrebne nadogradnje i maksimizira investicije u tehnologiju.

Ultimate Multisite uključuje sofisticiran Cloudflare add-on koji omogućava mrežnim administratorima da postave svoje instalacije iza Cloudflare-a i koriste ne samo njegove mogućnosti keširanja, već i DNS hosting, SSL sertifikate i sigurnosne mehanizme.

#### Backupovi

Možete tražiti savet od 50 ljudi o backupovima i dobiti 50 različitih mišljenja o strategijama za backup. Odgovor je: zavisi.

Šta nije spor je da su rezervne kopije (backup-ovi) potrebne i da je gotovo nemoguće da ih ne upravlja pružalac usluge, posebno onaj koji nudi upravljenu uslugu (managed service). Posledično, klijenti će se obratiti mrežnom administratoru kako bi dobili i upravljali ovom uslugom. Koja mrežni administrator traži je potpuno druga pitanja.

Za potrebe ovog dela, dogovorimo se da je backup trenutno snimak stanja sistema u trenutku pokretanja backupa. Jednostavno rečeno, bilo koji je eventualni stanja sistema u trenutku backupa onaj stanja će biti uhvaćen i zaključan u backupu.

S obzirom na ovo razumevanje, odgovor o tome kako postići backupe i šta je najbolje za vaš okruženje uglavnom će zavisiti od vaših zahteva i sposobnosti hosting provajdera da te zahteve zadovolji. Međutim, po redu od najviše mišljenja do najmanje mišljenja, sledeće opcije bi trebalo da pruže neku smernicu.

#### Snapshots (Snimci stanja)

Snapshot-ovi su srebrna kugla za backupe jer su jednostavni, bez komplikacija (dok ne želite da ih vratite) i "samo rade". Međutim, zahtevaju pomoć vašeg provajdera i primenjuju se uglavnom samo ako imate VPS (Virtual Private Server) ili slično. Nekoliko provajdera navedenih u našoj dokumentaciji „Compatible Providers“ nudi backupe koji ne zahtevaju dalju intervenciju ili razmatranje od strane mrežnog administratora.

У томе традиционални бекапи циљају на фајлове и бази података, а снапшот циља на цели диск. Ово значи да се у снапшоту захваће не само подаци са сајта, већ и операциосиски систем и конфигурација. За многих то је значајан користи, јер нови систем може почти одмах покренути из снапшота и довести га у рад да замени оне који имају проблем. Слишко је, процес покретања (recovery) за извлечење фајлова захтева само прикрепље слике снапшота као диска на постојећи инстанс тако да се фајлови могу приступити и копирати.

Снапшоти могу донети додатну трошку од хостинг провајдера, али су заштитна полиса против несрећа.

#### Екстерни скриптовски додаци (External Scripts)

Нема недостатка екстерних скрипта и решења за бекапи WordPress-а и MySQL ресурса, а они би добро радили и за Ultimate Multisite јер је то WordPress плагин који користи WordPress фајлсистему и базу података. Међутим, решение које бекупира сајтове на WordPressу довољно покрива потребе Ultimate Multisite-а.

Не можемо препоручити један скрипт над другом, али наш општи совет је да уводите неколико тестова за бекапи и покретање (restore) како бисте осигурали да су резултати жељени и да „будете сигурни“ континуирано оцењујући скрипт и његову функционалност, посебно тамо где се примењује неки облик диференцијалног бекап стратегије.

Треба напоменути да ће ови скрипти, док раде, повећати системски оптерећење, што треба узети у обзир.

#### Плагини (Plugins)

У WordPressу је почти нема проблема који се не може решити плагином, а ако вам управљање екстерним скриптами није на вашем ниво, можда је плагин најбољи следећи избор.

Iako se pluginovi razlikuju po opcijama i funkcijama, uglavnom obavljaju istu osnovnu funkciju: kopiranje WordPress datoteka i baze podataka. Nakon toga, funkcionalnosti se razlikuju jer neki pluginovi mogu slati backupove na eksterne servise kao što su Google Drive ili Dropbox, ili na neku kompatibilnu uslugu skladištenja objekata poput S3-a, Wasabi-ja ili drugih. Što su pluginovi sveobuhvatniji, oni nude diferencijalne backupove ili neku strategiju za backup samo onih podataka koji su se promenili kako bi se uštedela trošak na eksternom skladištu.

Kada birate svoj plugin, obavezno proverite da li je kompatibilan sa multisite-om (multisite aware). S obzirom na način na koji radi, dok se backup radi, možete očekivati privremeni opterećenje servera dok proces ne završi.

#### Domen i SSL sertifikati

Veoma se već raspravljalo o domenima u modu sa poddomenima (subdomain) multisite-a. Gotovo univerzalno rešenje za mrežne administratora je korišćenje wildcard DNS unosa.

![Primer konfiguracije wildcard DNS unosa](/img/config/settings-domain-mapping.png)

Ovaj tip DNS unosa uspešno će povezati poddomene kao što su ‘site1.domain.com’ i ‘site2.domain.com’ sa IP adresom 1.2.3.4, čime podržavate Ultimate Multisite i u većoj meri WordPress Multisite koristeći modu sa poddomenima (subdomain mode).

Ovo može savršeno raditi za HTTP jer se ciljna host-a čita iz HTTP zaglavlja, ali retko je veb tako jednostavan kao danas gde su sigurni HTTPS transakciji skoro obavezni.

Srećom, postoje jednostavne opcije za SSL sertifikate. U modu poddirektorijuma (subdirectory mode) možete koristiti običan domen sertifikat. Oni su lako i besplatno dostupni od strane pružalaca hosting usluga koji možda koriste besplatni LetsEncrypt servis ili neku drugu izvor. Inače, oni su komercijalno dostupni od strane nadležnih tela ako ste u mogućnosti da generišete zahtev za potpis sertifikata (certificate signing request).

Za mod poddomena (subdomain mode), korišćenje wildcard SSL sertifikata savršeno će se kombinovati sa wildcard domenom i omogućava da sertifikat bude autoritativan za root domen i sve poddomene bez dodatne konfiguracije.

Međutim, treba napomenuti da wildcard SSL sertifikati možda neće raditi sa uslugama kao što je Cloudflare osim ako niste na enterprise planu ili ne postavite ulaz u DNS samo (DNS only), u tom slučaju se svi keširanje i optimizacija zaobiđu.

Ultimate Multisite izvan kutije pruža rešenje za ovaj problem, pokazujući našog dugog iskustva sa potrebama WordPress multisite. Aktivacijom ovog jednostavnog add-ona Ultimate Multisite će koristiti vaše Cloudflare kredencijale da automatski doda DNS unose za mrežne site u Cloudflare i postavi im mod na 'proxied' (proksirano). Na ovaj način, svaki mrežni podsite, kada se kreira, će imati punu zaštitu i prednosti Cloudflare uključujući SSL.

Zavisno od prirode i svrhe vaše Ultimate Multisite instalacije, možda će biti potrebe da klijenti koriste sopstvene domene. U tom slučaju, mrežni administrator je odgovoran za rešavanje dva problema: prvo, hosting imena domena i drugo, SSL sertifikate za taj domen.

Za mnoge ljudi, korišćenje Cloudflare je lakše rešenje. Klijent jednostavno mora da postavi svoj domen na Cloudflare, poveže CNAME ka root domenu Ultimate Multisite i mapira svoj domen u Ultimate Multisite kako bi počeo da koristi svoje prilagođeno ime domena.

Osim toga, potrebno je tražiti alternative rešenja, zbog čega Ultimate Multisite preporučuje list kompatibilnih provajdera (Compatible Providers). To je zato što proces podešavanja DNS-a i SSL-a može biti neobičan proces. Međutim, sa integracijom Ultimate Multisite sa ovim provajderima, složenost se značajno smanjuje i procedura je automatizovana.

#### Pluginovi

Verovatno ćete morati dodatne pluginove da biste pružili funkcionalnost vašim klijentima ili mrežnim sajtovima. Da li svi pluginovi rade sa WordPress Multisite-om i Ultimate Multisite-om? To zavisi.

Dok većina pluginova se može instalirati u WordPress Multisite, njihova aktivacija i licenciranje varira od autora do autora.

Izazov leži u tome kako se primenjuje licenciranje kod nekih pluginova koji zahtevaju licencu na osnovu pojedinačnih domena (per-domain basis). To bi značilo da za neke pluginove administrator mreže mora ručno da aktivira licencu za svaki plugin na svakom novom sajtu.

Stoga, možda je najbolje proveriti sa autorom plugin-a kako će njegov plugin raditi sa WordPress Multisite-om i koje su posebne zahteve ili procedure potrebne za njegovo licenciranje.
