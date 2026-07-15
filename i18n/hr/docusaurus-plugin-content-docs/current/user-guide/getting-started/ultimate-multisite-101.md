---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101

Ultimate Multisite je WordPress plugin koji vam omogućuje da ponudite WaaS ili Webseiten kao uslugu kupcima. Prije nego što se duboko uđemo i naučimo kako Ultimate Multisite može pomoći vašem poslovanju i kupcima, moramo imati neku osnovnu znanja.

## WordPress Multisite {#the-wordpress-multisite}

Većina nas je upoznata sa standardnom instalacijom WordPressa. Ili ga kreirate putem kontrolne ploče svog hosting provajdera ili, za hrabre, postavite novi web server i bazu podataka, preuzmite jezgru datoteka i počnite s procesom instalacije.

Ovo radi za milijune WordPress stranica širom svijeta, ali iz perspektive agencije ili hosting provajdera, hajde da malo razgovaramo o obimima posla.

Iako je to jednostavno kreiranje jedne WordPress stranice ili čak stotine putem automatizirane kontrolne ploče, problemi počinju se pojavljivati kada dođe do upravljanja ovim stranicama. Ako ne upravljate njima, postajete primarna ciljna zona za malware. Upravljanje znači napor i resurse, i iako postoje vanjski alati i pluginovi koji pomažu u pojednostavljanju upravljanja i administriranja WordPress stranicama, činjenica da kupci zadržavaju administrativni pristup znači da se ti napori mogu lako pobijediti.

Unutar svog jezgra, WordPress nudi značajku jednostavno nazvanu „Multisite” koja se vrati izvorima 2010. s lansiranjem WordPressa 3.0. Od tada je dobio niz revizija usmječenih na uvođenje novih značajki i pojačavanje sigurnosti.

U suštini, WordPress multisite se može zamisliti ovako: Univerzitet održava jednu instalaciju WordPressa, ali svaki fakultet održava vlastitu WordPress stranicu.

Da bismo razložimo ovu rečenicu, pogledajmo malo osnovnu terminologiju koja se pojavljuje ne samo u dokumentaciji Ultimate Multisite već i u cijeloj WordPress zajednici.

### Mreža (The Network) {#the-network}

U kontekstu WordPressa, multisite mreža je situacija u kojoj se nekoliko podstranica može upravljati s jedne glavne ploče za kontrolu (dashboard). Iako se kreiranje multisite mreže razlikuje ovisno o dobavljaču hostinga, krajnji rezultat obično uključuje nekoliko dodatnih uputa u datoteci `wp-config.php` kako bismo WordPressu rekli da radi u ovom specifičnom načinu rada.

Postoji niz različitih razlika između multisite mreže i samostalnog postavljanja WordPressa koje ćemo kratko proći.

#### Poddomena vs. Poddirektorijum (Subdomain vs. Subdirectory) {#subdomain-vs-subdirectory}

Jedna od najvažnijih odluka koju ćete morati donijeti je da li će multisite instalacija raditi s _poddirektorijumima_ ili _poddomenama_. Ultimate Multisite radi jednako dobro s obje opcije, ali postoje određene arhitektonske razlike između ova dva postavljanja.

U konfiguraciji s _poddirektorijumima_, mrežno stranice nasljeđuju put ovisno o glavnom domenu. Na primjer, mrežno stranica označena kao 'site1' će imati punu URL adresu kao `https://domain.com/site1`. U konfiguraciji s _poddomenama_, mrežno stranica će imati vlastitu _poddomenu_ deriviranu iz glavnog domena. Dakle, stranica označena kao 'site1' će imati punu URL adresu kao `https://site1.domain.com/`.

Iako su obje opcije potpuno ispravne odabira, korištenje _poddomenama_ nudi niz prednosti, ali zahtijeva i više razmišljanja i planiranja u arhitekturi.

Što se tiče DNS-a, korištenje poddirektorijskih (subdirectories) predstavlja relativno jednostavan izazov. Budući da su web stranice na mreži jednostavno podređene roditeljskoj putanji, za ime domena potrebno je postojati samo jedan unos u domeni za glavni naziv domena. Za poddomene (subdomains), izazov je malo složeniji i zahtijeva ili zasebni CNAME unos za svaku web stranicu na mreži ili wildcard (*) unos u DNS zapisima.

Drugi dio koji treba uzeti u obzir je SSL i izdavač i korištenje SSL certifikata. U konfiguraciji poddirektorija, jedan certifikat za domen može se koristiti jer su web stranice na mreži jednostavno putanje glavnog imena domena. Dakle, certifikat za domain.com adekvatno će pružiti SSL za https://domain.com/site1, https://domain.com/site2 i tako dalje.

U konfiguraciji poddomene, korištenje wildcard SSL certifikata je jedna od najčešćih opcija. Ovaj tip SSL certifikata pruža šifriranje za domen i njegove poddomene. Dakle, wildcard SSL certifikat će pružiti šifriranje za https://site1.domain.com, https://site2.domain.com i sam domain.com.

Iako postoje i druge opcije, one su često ograničene u obimu i primjeni te zahtijevaju dodatnu konfiguraciju i razmatranje s obzirom na prikladnost.

#### Pluginovi i Temi {#plugins-and-themes}

Što WordPress daje, to uzima i onaj, barem iz perspektive korisnika. U samostalnoj instalaciji WordPressa, ako administrator stranice instalira loš plugin ili ne održava svoju instalaciju ažuriranom, jedini žrtva i posljedica ovog djela je on sam. Međutim, kada administrator stranice instalira loš plugin na instalaciji multisite, stvara se žrtva za svaku stranicu koja je postavljena u mrežu.

Zbog toga što je konfiguriran kao multisite WordPress uklanja mogućnost za administratora stranice da instalira pluginove i teme, a tu mogućnost prenosi na novonastvorenu ulogu administratora mreže ili „super admina“. Ova privilegovana uloga zatim odlučuje hoće li omogućiti administratorima mrežnih stranica pristup meniju pluginova na njihovom dashboardu i ako tako, hoće li ta dozvolama biti proširena i za _aktiviranje_ ili _deaktiviranje_ pluginova.

U tom smislu, administrator mreže je odgovoran za instaliranje pluginova i tema unutar mreže te delegira dozvole kako bi se omogućilo korištenje tih pluginova i tema na mrežnim stranicama. Administratori stranica ne mogu instalirati pluginove i teme niti pristupiti pluginovima i temama koji nisu dodijeljeni njihovoj stranici.

#### Korisnici i administratora {#users-and-administrators}

U WordPress Multisite, svi mrežni siti dijele istu bazu podataka i stoga dijele iste korisnike, uloge i mogućnosti (capabilities). Najbolji način da to zamislite je da su svi korisnici članovi mreže, a ne određene stranice.

S obzirom na ovo razumijevanje, možda nije poželjno omogućiti stvaranje korisnika i zbog toga WordPress Multisite uklanja tu mogućnost za administratora stranice i prenosi je na ulogu administratora mreže. Na svoj način, administrator mreže može delegirati potrebne privilegije administratoru stranice kako bi mu omogućio da kreira račune korisnika za svoju stranicu.

<!-- Screenshot unavailable: WordPress Multisite network user management interface -->

Ponovivši gore navedeno, iako se računi korisnika čine povezani sa stranicom na kojoj su, zapravo im je dodijeljen dio mreže i stoga moraju biti jedinstveni unutar cijele mreže. Možda postoje primjeri kada korisničke imena ne mogu biti registrirana zbog tog razloga.

Iako nije stran koncept u enterprise sustavima, ova jedinstvena lokacija za registraciju i autentifikaciju korisnika često je teško razumjeti ljudima koji su navikli na samostalnu instaliranja WordPressa gdje je administracija korisnika malo lakša.

#### Media (Mediji) {#media}

Gdje se web stranice u WordPress Multisite dijele jednu bazu podataka, one zadržavaju odvojene putanje na sustavu datoteka za medijske datoteke.

Standardna lokacija WordPressa (`wp-content/uploads`) ostaje; međutim, njena putanja se mijenja kako bi odražavala jedinstveni ID mreže stranice. Posljedično, medijske datoteke za mrežu stranicu izgledaju kao `wp-contents/uploads/site/[id]`.

#### Permalinks (Povezivke) {#permalinks}

Ranije smo spomenuli da postoje značajne prednosti korištenja _subdomain_ konfiguracije u odnosu na _subdirectory_ i evo kako to izgleda: putanje.

U _subdirectory_ konfiguraciji, glavni web stranica (prva stranica koja se kreira kada je mreža uspostavljena) i podstranice mreže moraju dijeliti istu putanju koja vodi od domena. Ovo ima potencijal za veliki broj sukoba.

Za objave, na glavnoj stranici dodaje se obavezna putanja `/blog/` kako bi se spriječile kolizije s podstranicama mreže. To znači da lijep permalinks poput ‘Naziv objave’ će se prikazivati kao `domain.name/blog/post-name/`.

<!-- Screenshot unavailable: WordPress permalink settings showing /blog/ path in subdirectory configuration -->

U _subdomain_ konfiguraciji ova akcija nije potrebna jer svaka podstranica mreže koristi punu odvajanje domena i stoga ne mora ovisiti na jednu putanju. Umjesto toga, one zadržavaju svoje zasebne putanje temeljenog na njihovoj _subdomain_.

<!-- Screenshot unavailable: WordPress permalink settings for subdomain configuration -->

#### Static Pages (Statike stranice) {#static-pages}

U konfiguraciji _subdirectory_ postoji potencijal za sukobe imena čak i kod statičkih stranica kao glavne stranice, jer se mreža i glavni sajt dele istom putanjom.

Da bi se ovo spriječilo, WordPress nudi način da blokirate određena imena stranica kako ne bi se suzali s imenima prvog sajta. Uobičajeno je da administrator mreže unese root putanje stranica glavne stranice.

<!-- Screenshot unavailable: WordPress network settings showing banned site names to prevent conflicts -->

U konfiguraciji _subdomain_ mogućnost sukoba imena se ublažava zahvaljujući _subdomainu_, jer on postoji samo za tu mrežu i nema nikakvu vezu s glavnom stranicom.

### Registracija {#registration}

Unutar postavki mreže WordPress Multisite dostupno je nekoliko novih opcija za registraciju korisnika, koje omogućuju novim i postojećim korisnicima da kreiraju stranice.

<!-- Screenshot unavailable: WordPress Multisite network settings showing registration options -->

Za razliku od samostalnih instalacija WordPressa, mrežno stranice ne zadržavaju poznate opcije koje omogućavaju registraciju korisnika ili dodjeljivanje tih registracija uloge.

<!-- Screenshot unavailable: WordPress standalone site user registration settings showing limited options -->

Kada se kreiraju korisnički računi, ti se računi generiraju na nivou mreže. Dakle, umjesto da pripadaju nekoj jednoj stranici, oni pripadaju cijeloj mreži. Ovo ima neke specifične prednosti i mane.

Na primjer, zamislite si da je vaš WordPress Multisite u poslu novina i informacija. Postavili biste multisite, a zatim kreirali mrežu stranica za financije, tehnologiju, zabavu i druge oblasti interesa, zadržavajući pritom opći kontrolu nad pluginovima i temama. Svaka stranica unutar mreže bi imala daleko veći nivo kontrole nad izgledom i korisničkim iskustvom svoje stranice u odnosu na custom post typeove ili obične kategorije bài.

U tom smislu, kada se korisnik prijavi, on se prijavi u mrežu i u konačnici je prijavljen i na svaku stranicu unutar mreže kako bi pružio besprekorno iskustvo. Ako je vaša nova stranica bazirana na pretplati, ovo bi bilo idealno rješenje i rezultat.

Ako, međutim, namijenjena priroda i svrha multisite-a bila je ponuditi različite stranice unutar mreže koje nemaju nikakvu vezu jedna s drugom, gotovo uvijek će biti potrebno koristiti eksterne ili dodatne pluginove kako bi se manipulirale korisničke uloge.

### Domen i SSL {#domain-and-ssl}

Hajde da popričamo o instalaciji WordPress Multisite koja skoro izmiče pažnji – Wordpress.com. Ovo je daleko najobimniji primjer WordPress multisite-a i demonstrira njegove široke sposobnosti prilagođavanja i oblikovanja kako bi se ispunila određena svrha.

Danas na modernom internetskom svijetu korištenje SSL sertifikata je gotovo obavezno, a administratori mreže WordPress multisite-a ubrzo se suočavaju s ovim izazovima.

U konfiguraciji _subdomain_ stranice se kreiraju na temelju glavnog domena. Dakle, stranica označena kao ‘site1’ bi se kreirala kao ‘site1.domain.com’. Koristeći wildcard SSL sertifikat, administrator mreže može uspješno riješiti ovaj izazov i pružiti mogućnosti SSL šifriranja za cijelu mrežu.

WordPress Multisite sadrži funkciju mapiranja domena koja omogućuje povezivanje mreže web stranica s prilagođenim nazivima domena ili nazivima domena različitim od osnovnog domena mreže.

Za administratora mreže to predstavlja dodatni sloj složenosti kako u konfiguraciji imena domena, tako i pri izdavanju i održavanju SSL certifikata.

U tom smislu, iako WordPress Multisite pruža način da se [www.anotherdomain.com](http://www.anotherdomain.com) mapira na 'site1', administrator mreže ostaje s izazovom eksternog upravljanja DNS unosi i implementacije SSL certifikata.

## Ultimate Multisite {#ultimate-multisite}

S obzirom na razlike između samostalnog WordPress instaliranja i Multisite instaliranja, pogledajmo kako je Ultimate Multisite ultimativno oružje za pružanje Web stranica kao usluge (Website as a Service - WaaS).

### Uvod {#introduction}

Ultimate Multisite je vaš švedski nož kada je u pitanju kreiranje Web stranice kao usluge (WaaS). Zamislite Wix.com, Squarespace, WordPress.com i zatim razmislite o vlasništvu nad vlastitom uslugom.

Pod pokrovom Ultimate Multisite koristi se WordPress Multisite, ali to radi na način koji ne samo da rješava mnoštvo problema s kojima se suočavaju administratori mreže pri instaliranjima Multisite, već poboljšava mogućnosti omogućujući podršku širokom spektru slučajeva korištenja.

U sljedećim odjeljcima pogledat ćemo nekoliko uobičajenih slučajeva korištenja i razmatranja koja su potrebna za podršku tim slučajevima.

### Slučajevi korištenja {#use-cases}

#### Slučaj 1: Agencija {#case-1-an-agency}

Tipično, osnovne vještine agencije leže u dizajnu web stranica s aspektima kao što je njihovo hostiranje ili marketing navedeni kao dodatni usluge.

Za agencije, Ultimate Multisite nudi nevjerojatnu vrijednost jer omogućuje hostiranje i upravljanje više web stranica na jednoj platformi. To je još više važno za agencije koje standardiziraju dizajn na određenim temama poput GeneratePressa, Astra ili OceanWP-a; tako mogu iskoristiti mogućnosti Ultimate Multisite kako bi automatski aktivirali te teme za svaki novi sajt.

Slično kao što postoji mnogo ponuda za cijene pluginova za agencije, korištenje Ultimate Multisite omogućuje agencijama da iskoriste postojeće investicije pružanjem zajedničke platforme s kojeg se pluginovi mogu instalirati, održavati i koristiti.

Najvjerojatnije će biti poželjno koristiti konfiguraciju, a sretno je, Ultimate Multisite olakšava mapiranje domena i SSL certifikate putem svojih integracija za niz popularnih hosting provajdera kao i usluga poput Cloudflare-a i cPanel-a.

Dakle, koristeći jedan od ovih provajdera ili postavljanjem Ultimate Multisite iza Cloudflare-a, aspekte upravljanja domenima i SSL certifikatima postaju prilično jednostavni.

Agencije koje preferiraju zadržati strogu kontrolu nad kreiranjem web stranica će cijeni lakoću s kojom mogu kreirati sajtove i povezivati sajtove s klijentima i planovima putem pojednostavljene sučelje Ultimate Multisite-a.

![Ultimate Multisite site management interface](/img/admin/sites-list.png)

Stroga kontrola nad pluginovima i temama održavana je na osnovu svakog proizvoda putem intuitivnih sučelja Ultimate Multisite-a, što omogućuje da se pluginovi i teme učine dostupnim ili skrivenim, kao i njihov status aktiviranja kada se instanciraju za novi sajt.

![Product plugin limitations interface](/img/config/product-plugins.png)

Teme (teme) nude sličnosti, omogućujući određenim temama da se aktiviraju ili skriju na kreiranom sajtu.

![Product theme limitations interface](/img/config/product-themes.png)

Agencije će pronaći mir s Ultimate Multisite platformom koja im omogućuje da rade ono u čemu su najbolji - dizajniranje izvanrednih web stranica.

#### Slučaj 2: Pruživač niše {#case-2-niche-provider}

Postoji stara poslovica koja kaže: „Uradi jednu stvar i uradi je dobro”. Za mnoge specijaliste to znači kreirati proizvod ili uslugu oko jedne osnovne ideje.

Možda ste zaljubljenik u golfe koji promovira web stranice klubovima, a možda ste zaljubljenik u esports igranje koji pruža web stranice klanovima. Možda pojedinac koji promoviše uslugu rezervacije restoranima?

Iz mnogih razloga biste željeli pružiti usluge na temelju zajedničkog okvira i platforme. Možda ste dizajnirali ili uložili novac u bespočetne pluginove kako biste pružili potrebnu funkcionalnost, ili možda je slučaj da industrijske najbolje prakse zahtijevaju neku vrstu standardiziranog pristupa dizajnu.

Jedna od inovativnih značajki Ultimate Multisite platforme je korištenje tematskih stranica (template sites). Tematska stranica je ona gdje je tema instalirana i aktivirana, potrebni pluginovi instalirani i aktivirani, a kreirane su uzorne objave ili stranice. Kada klijent napravi novu stranicu na temelju te tematske stranice, sadržaj i postavke tematske stranice se kopiraju u 새로 kreiranu stranicu.

Za pružatelja nišnih stranica i usluga to pruža neusporedivu prednost u mogućnosti trenutnog kreiranja stranice spremne za upotrebu s prilagođenim pluginovima i dizajnom. Klijentu je potrebno samo minimalno ulazno podaci kako bi se usluga kompletirala.

Ovisno o zahtjevima mogu odgovarati konfiguracije poddirektorija (_subdirectory_) ili poddomena (_subdomain_), u tom slučaju arhitektonski izbor bi bio između jednostavnog SSL certifikata za poddirektorije ili wildcard SSL certifikata za poddomene.

#### Slučaj 3: Web hosting WordPressa {#case-3-wordpress-web-hosting}

Postoji mnogo načina na koje se može hostati WordPress stranice, ali rijetko je jednostavno kao pružanje web prostora klijentu s unaprijed instaliranom verzijom WordPressa. To je zato što mora spojiti niz odluka i razmatranja kako bi se pružio smislen usluga.

Ultimate Multisite se ističe u ovoj oblasti tako što nudi sveobuhvatno turnkey rješenje za hosting stranica WordPressa. Rješenje uključuje osnovne mehanizme za pružanje pretplatničkih usluga, prikupljanje plaćanja, obrasce za prodatu (checkout forms), kuponove s popustom i komunikaciju s klijentima.

Veliki dio integriranog rada potrebnog za ispravnu instalaciju, konfiguraciju i održavanje WordPress Multisite olakšava Ultimate Multisite tako da se administratori mreže moraju razmatrati samo aspekte vezane uz njihovu uslugu ili nišu, kao što su nivoi proizvoda, cijene i ponude usluga.

Za developere koji žele integrirati s Ultimate Multisite, rješenje također nudi sveobuhvatnu RESTful API i Webhooks za obavijesti o događajima.

Bez oslanjanja na mnoštvo vanjskih pluginova i licenciranih softvera, Ultimate Multisite pruža bogato značajkama i slično rješenje kao Wix, Squarespace, WordPress.com i drugi.

### Arhitektonske razmatranja {#architecture-considerations}

Iako nije sveobuhvatan vodič, sljedeći elementi bi trebali poslužiti kao smjernice za ispravan izbor tehnologija koje podržavaju instalaciju Ultimate Multisite-a.

#### Podijeljeni vs. Dedikirani hosting {#shared-vs-dedicated-hosting}

Nažalost, ne svi hosting provajderi su jednaki i neki primjenjuju ekstremnu gustoću servera. Niskokoszti provajderi obično zarađuju maksimiziranjem gustoće servera. Kao takav slučaj, vaša Ultimate Multisite instalacija može biti samo jedna od stotina stranica na istom serveru.

Bez odgovarajućih zaštita koje pruža provajder, stranice na zajedničkom serveru doživljavaju problem "bučnog susjeda". To znači da stranica na istom serveru koja troši toliko resursa da druge stranice moraju natjecati za preostale resurse. Često se to manifestira kao stranice koje su sporije ili ne reagiraju u pravo vrijeme.

Kao provajder web hostinga, to će značiti da vaši klijenti doživljavaju loše brzine, niski rang na Googleu i visoke stope od odbijanja (bounce rates), što često dovodi do gubitka kupaca koji traže usluge drugdje.

Ukratko, je jeftino ne znači dobro.

Ultimate Multisite poznat je po tome da radi s brojem dobrih provajdera hostinga i dobro se integrira u njihovu okruženje kako bi pružio funkcije poput mapiranja domena i automatskog SSL-a. Ti provajderi cijene performanse i pružaju kvalitetniji uslugu od zajedničkog hostinga.

Za popis kompatibilnih provajdera i kompletne upute za postavljanje za svakog, molimo vas da pogledate dokumentaciju o Kompatibilnim Provijderima (Compatible Providers).

#### Razmatranja u vezi performansi {#performance-considerations}

Ultimate Multisite nije spor aplikacija, već je izuzetno brz. Međutim, on radi samo koliko je dobar kao i osnovna aplikacija i infrastruktura te može iskoristiti samo ono što ima pristup.

Zamislite ovo: Vi ste administrator mreže Ultimate Multisite instalacije s 100 stranica. Neke od tih stranica dobro rade i privlače broj posjetitelja na web stranicu svakog dana.

Ovaj scenarij bi bio drugačiji na manjim skalama, recimo jedan do pet web stranica, ali prije nego što se pojave problemi velikog obima.

Ako ostaviš Ultimate Multisite stranicu bez nadzora, ona će biti odgovorna za ispunjavanje zahtjeva svih posjetitelja na stranicama. Ti zahtjevi mogu biti za dinamičke PHP stranice ili statičke resurse poput stilskih listi (stylesheets), JavaScript ili medijskih datoteka. Bilo da je riječ o jednoj ili stotine stranica, ove zadaci postaju ponavljajući, monodni i propustivi. Nije potrebno koristiti procesorsku snagu i memoriju za obradu PHP datoteke kada je rezultat isti statički sadržaj za svaki zahtjev.

Slično tome, jedan zahtjev za PHP ili HTML stranicu generira niz sljedećih zahtjeva za skripte, stilove i slike. Ti zahtjevi su usmjereni direktno na vaš Ultimate Multisite server.

Ovu problemu lako se može riješiti nadogradnjom servera, ali to ne rješava sekundarni problem – geografske kašnjenja (latencies). Samo više servera u različitim lokacijama bi mogao pravilno riješiti ovaj problem.

Zbog toga većina mrežnih administratora koristi front-end caching rješenja i Content Distribution Networks (CDN) kako bi ispunili zahtjeve za statičke stranice. Ispunjavanje tih zahtjeva i slanje resursa prije nego što zahtjev dođe do servera štedi procesorske resurse, uklanja kašnjenja, izbjegava nepotrebne nadogradnje i maksimizira investicije u tehnologiju.

Ultimate Multisite uključuje sofisticirani Cloudflare add-on koji omogućuje mrežnim administratorima da postave svoje instalacije iza Cloudflarea i koriste ne samo njegove mogućnosti keširanja, već i DNS hosting, SSL certifikate i sigurnosne mehanizme.

#### Rezervni kopije (Backups) {#backups}

Možeš zamoliti 50 ljudi za savjet o rezervnim kopijama i dobiti 50 različitih mišljenja o strategijama za rezervne kopije. Odgovor je: ovisi.

Što nije sporno je da su rezervne kopije (backup-ovi) potrebne i da je gotovo nemoguće da ih ne upravlja pružatelj usluge, pogotovo onaj koji nudi upravljano ovisnu uslugu (managed service). Posljedica toga je da će klijenti tražiti od administratora mreže da pruži i upravlja ovom uslugom. Tko se Administrator mreže traži je potpuno drugačiji problem.

Za potrebe ovog dijela, dogovorimo se da je backup trenutni prijem stanja sustava u trenutku pokretanja backupa. Jednostavno rečeno, bilo koji je eventualni stanje sustava u vrijeme backupa capturano i zaključano u backupu.

S ovim razumijevanjem odgovor na pitanje kako postići backupe i što je najbolje za vaš okruženje ovisno će uglavnom o vašim zahtjevima i sposobnosti pružatelja hostinga da te zahtjeve zadovolji. Međutim, redoslijed od najviše mišljenih do najmanje mišljenih opcija bi trebao dati neku smjernicu.

#### Snapshots (Snimci stanja) {#snapshots}

Snapshot-ovi su srebrna kupola za backupe jer su jednostavni, bez komplikacija (dok ne želite vratiti stanje) i "samo rade". Ipak, zahtijevaju pomoć vašeg pružatelja usluge i primjenjuju se uglavnom ako imate VPS (Virtual Private Server) ili slično. Nekoliko pružatelja usluga navedenih u našoj dokumentaciji za „Kompatibilne pružatelje“ nudi backupe koji ne zahtijevaju daljnje intervencije ili razmatranje od strane administratora mreže.

Dok tradicionalnih sigurnosnih kopija ciljaju datoteke i baze podataka, dok snapshot cilja cijeli disk. To znači da se u snapshotu snima ne samo podaci sajta, već i operativni sustav i konfiguracija. Za mnoge to je značajna prednost jer se novi sustav može gotovo trenutno kreirati iz snapshot-a i staviti u rad kako bi zamijenio kvaran primjerak. Na sličan način, proces oporavka za povratak datoteka zahtijeva samo priključivanje slike snapshot-a kao diska na postojeći primjerak tako da se datoteke mogu pristupiti i kopirati.

Snapshotovi mogu podrazmjerati dodatnu trošak od pružatelja hostinga, ali to je osiguravajuća polica protiv nesreće.

#### Eksterni skripti {#external-scripts}

Ne nedostaje eksternih skripti i rješenja za sigurnosno kopiranje resursa WordPressa i MySQL-a, a oni bi dobro radili za Ultimate Multisite jer je to WordPress plugin koji koristi WordPress sustav datoteka i bazu podataka. Dakle, rješenje koje kopira WordPress siteove adekvatno pokriva potrebe Ultimate Multisite.

Ne možemo preporučiti jednu skriptu nad drugom, ali savjet je da se pokrene nekoliko testova sigurnosne kopiranja i oporavka kako bi se osiguralo da su rezultati željeni i da "budete sigurni" stalno evaluiranjem skripte i njene funkcionalnosti, posebno tamo gdje se primjenjuje neka vrsta strategije diferencijalnog sigurnosnog kopiranja.

Treba napomenuti da će ovi skripti, dok rade, povećati opterećenje sustava što treba uzeti u obzir.

#### Pluginovi {#plugins}

U WordPressu gotovo nema problema koji ne može riješiti plugin, i ako upravljanje eksternim skriptama nije vaš stil, možda je plugin sljedeća najbolja opcija.

Iako se pluginovi variraju po opcijama i značajkama, uglavnom obavljaju istu funkciju: kopiranje WordPress datoteka i baze podataka. Nakon toga, funkcionalnosti se razlikuju jer neki pluginovi mogu slati sigurnosne kopije na vanjske usluge poput Google Drivea ili Dropboxa, kao i nekoj kompatibilnoj usluzi za skladištenje objekata poput S3-a, Wasabija ili drugih. Što su pluginovi opsežniji, oni nude diferencijalne sigurnosne kopije ili neku strategiju za sigurnosnu kopiju samo onih podataka koji su se promijenili kako bi se uštedjela mjesta na vanjskom skladištu.

Kada birate svoj plugin, obavezno provjerite da je kompatibilan s multisite-om (multisite aware). Zbog načina na koji radi sigurnosna kopija, dok se proces ne završi, možete očekivati privremeni teret na serveru.

#### Domen i SSL {#domain-and-ssl-1}

Mnogi su već razgovarali o domenima u modu poddomena (_subdomain_ mode) za multisite. Gotovo univerzalno rješenje za administraciju mreže je korištenje wildcard DNS unosa.

![Wildcard DNS entry configuration example](/img/config/settings-domain-mapping.png)

Ovaj tip DNS unosa uspješno će prebaciti poddomene poput ‘site1.domain.com’ i ‘site2.domain.com’ na IP adresu 1.2.3.4, čime podržavate Ultimate Multisite i u većoj mjeri WordPress Multisite s poddomenskim (subdomain) načinom rada.

Ovo može savršeno raditi za HTTP jer se ciljna host preuzima iz HTTP zaglavlja, ali rijetko je web tako jednostavan kao danas da su sigurne HTTPS transakcije gotovo obavezne.

Srećom, postoje jednostavne opcije za SSL certifikate. U modu poddirektorija (subdirectory mode) možete koristiti običan domen certifikat. Oni su lako i besplatno dostupni od strane pružatelja hostinga koji možda koriste besplatni LetsEncrypt uslugu ili neku drugu izvor. Inače, oni su komercijalno dostupni od strane nadležnih tijela ako ste u mogućnosti generirati zahtjev za potpis certifikata (certificate signing request).

Za modu poddomena (subdomain mode), korištenje wildcard SSL certifikata savršeno će se uklopiti s wildcard domenom i omogućit će certifikat da bude autoritativan za glavni domen i sve poddomene bez nepotrebnog konfiguriranja.

Međutim, treba napomenuti da wildcard SSL certifikati možda neće raditi s uslugama kao što je Cloudflare osim ako niste na enterprise planu ili ne postavite ulaz u DNS samo (DNS only), u tom slučaju se sve keširanje i optimizacija zaobiđu.

Ultimate Multisite izvan kutije pruža rješenje za ovaj problem, dokazujući našu duboku iskustva s potrebama WordPress multisite instalacija. Aktiviranjem ovog jednostavnog add-ona Ultimate Multisite će koristiti vaše Cloudflare podatke kako bi automatski dodala DNS unose za mrežno siteove u Cloudflare i postavila im način rada na 'proxied' (preusmjeren). Na taj način, svaki podsite mreže, kada se kreira, će imati punu zaštitu i prednosti Cloudflare uključujući SSL.

Ovisno o prirodi i svrsi vaše Ultimate Multisite instalacije, može postojati potreba da klijenti koriste vlastita domena. U tom slučaju, nadzornik mreže je odgovoran za rješavanje dva problema: prvo, hosting imena domena i drugo, SSL certifikate za taj domen.

Za mnoge je korištenje Cloudflare jednostavan izbor. Klijent samo treba postaviti svoj domen na Cloudflare, pokazati CNAME na root domen Ultimate Multisite i mapirati svoj domen u Ultimate Multisite kako bi počeo iskoristiti vlastito ime domena.

Osim toga, potrebno je tražiti alternativne rješenja, što je razlog zašto Ultimate Multisite preporučuje popis kompatibilnih provajdera (Compatible Providers). To je zato što proces podešavanja DNS-a i SSL-a može biti neobičan. Međutim, s integracijom Ultimate Multisite s ovim provajderima, složenost se značajno smanjuje i procedura postaje automatizirana.

#### Pluginovi {#plugins-1}

Vrlo je vjerojatno da ćete morati dodatne pluginove kako biste pružili funkcionalnost vašim klijentima ili mrežnim stranicama. Da li svi pluginovi rade s WordPress Multisite-om i Ultimate Multisite-om? To ovisi.

Iako su većina pluginova instalirajuća u WordPress Multisite, njihova aktivacija i licenciranje varira od autora do autora.

Izazov leži u tome kako se primjenjuje licenciranje kod nekih pluginova koji zahtijevaju licencu na osnovu pojedinog domena (per-domain basis). To bi značilo da za neke pluginove administrator mreže mora ručno aktivirati licencu za svaki plugin na svakoj novoj stranici.

Stoga bi bilo najbolje provjeriti s autorom pluginova kako će njihov plugin raditi s WordPress Multisite-om i kakve posebne zahtjeve ili procedure su potrebne za njegovo licenciranje.
