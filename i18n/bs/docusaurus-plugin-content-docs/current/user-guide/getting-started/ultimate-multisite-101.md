---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101 {#ultimate-multisite-101}

Ultimate Multisite je WordPress plugin koji vam omogućava da ponudite WaaS ili Web sa Servisom (Websites as a Service) kupcima. Pre nego što se dublje uđemo i naučimo kako Ultimate Multisite može pomoći vašem poslovanju i kupcima, moramo prvo nabaviti neku osnovnu znanja.

## WordPress Multisite {#the-wordpress-multisite}

Većina nas je upoznata sa standardnom instalacijom WordPress-a. Ili ga kreirate putem kontrolne ploče svog hosting provajdera ili, za hrabrije, postavite novi web server i bazu podataka, preuzmite jezgro datoteka i počnite proces instalacije.

Ovo funkcioniše za milione WordPress sajtova širom sveta, ali iz perspektive agencije ili hosting provajdera, hajde da na trenutak razmotrimo obim posla.

Dok je sinkronizacija za kreiranje jednog WordPress sajta ili čak sto putem automatizovane kontrolne ploče problematična, problemi počinju se pojavljivati čim dođe do upravljanja tim sajtovima. Ako ne budete upravljali njima, postajete primarna ciljna grupa za malware. Upravljanje znači napor i resurse, i iako postoje spoljašnji alati i pluginovi koji pomažu u pojednostavljenju upravljanja i administracije WordPress sajtovima, činjenica da kupci zadržavaju administrativni pristup znači da bi ti napori mogli lako biti pobegli.

U svom jezgru, WordPress nudi značajnu funkciju jednostavno nazvanu „Multisite“ koja se vrati svojim počecima 2010. godine s lansiranjem WordPressa 3.0. Od tada je dobio niz revizija usmječenih na uvođenje novih značajki i pojačavanje sigurnosti.

U suštini, WordPress multisite se može zamisliti ovako: Univerzitet održava jednu instalaciju WordPress-a, ali svaki fakultet održava svoj vlastiti WordPress sajt.

Da bismo ovo razložili, pogledajmo neku osnovnu terminologiju koja postoji ne samo u dokumentaciji Ultimate Multisite, već i širom WordPress zajednice.

### Mreža (The Network) {#the-network}

U kontekstu WordPress-a, multisite mreža je mjesto gdje se niz pod-sajtova može upravljati s jedne glavne dashboard-a. Iako se kreiranje multisite mreže razlikuje između hosting provajdera, krajnji rezultat je obično nekoliko dodatnih uputa u datoteci wp-config.php kako biste WordPressu rekli da radi u ovom specifičnom načinu rada.

Postoji niz različitih razlika između multisite mreže i samostalnoj instalacije WordPressa koje ćemo kratko proći.

#### Poddomena vs. Poddirektorijum (Subdomain vs. Subdirectory) {#subdomain-vs-subdirectory}

Jedna od najhitnijih odluka koju ćete morati donijeti je da li će multisite instalacija raditi s _poddirektorijumima_ ili _poddomenama_. Ultimate Multisite radi jednako dobro s oba biranja, ali postoje neke arhitektonske razlike između ova dva konfiguracije.

U konfiguraciji _subdirectory_ (poddirektorij), mrežni saiti nasleđuju put ovisno o glavnom nazivima domena. Na primjer, mrežni sajt označen kao ‘site1’ će imati punu URL adresu kao https://domain.com/site1. U konfiguraciji _subdomain_ (poddomen), mrežni sajt će imati svoj vlastiti _subdomain_ deriviran iz glavnog nazivnog domena. Dakle, sajt označen kao ‘site1’ će imati punu URL adresu kao https://site1.domain.com/.

Iako su obje opcije savršeno ispravne izbori, korištenje _subdomains_ nudi niz prednosti, ali zahtijeva i više razmišljanja i planiranja u arhitekturi.

Što se tiče DNS-a, korištenje _subdirectories_ (poddirektorijuma) predstavlja relativno jednostavan izazov. Budući da su mrežni saiti jednostavno podređeni roditeljskom putanji, potrebno je postojati samo jedan unos imena domena za glavni naziv domena. Za _subdomains_, izazov je malo složeniji i zahtijeva ili zasebnu CNAME entry za svaki mrežni sajt ili wildcard (*) unos u DNS zapisima.

Još jedna oblast razmatranja je SSL-a i izdavanja i korištenje SSL certifikata. U konfiguraciji _subdirectory_ može se koristiti jedan certifikat za domen jer su mrežni saiti jednostavno putanje glavnog nazivnog domena. Dakle, certifikat za domain.com adekvatno će pružiti SSL za https://domain.com/site1, https://domain.com/site2 i tako dalje.

U konfiguraciji sa poddomenima (subdomain) korišćenje wildcards SSL sertifikata je jedna od najčešćih opcija. Ovaj tip SSL sertifikata pruža šifrovanje za domen i njegove poddomene. Dakle, wildcard SSL sertifikat će pružiti šifrovanje za https://site1.domain.com, https://site2.domain.com i sam domain.com.

Iako postoje i druge opcije, one su često ograničene u obimu i primeni pa zahtevaju dodatnu konfiguraciju i razmatranje s obzirom na prikladnost.

#### Pluginovi i Temi {#plugins-and-themes}

Šta WordPress daje, to on i oduzima, barem sa perspektive korisnika. U samostalnoj instalaciji WordPress-a ako administrator sajta instalira loš plugin ili ne održava svoju instalaciju ažuriranom, jedini žrtva i posledica ovog čina je on sam. Međutim, kada administrator sajta instalira loš plugin na multisite instalaciji, stvara se žrtva za svaki sajt koji je instaliran u mreži.

Zbog toga, kada bude konfigurisan kao multisite WordPress uklanja mogućnost administratorskim sajtovima da instaliraju pluginove i teme i umesto toga tu mogućnost prebacuje na novog administratora mreže ili ulogu 'super admin'. Ova privilegovana uloga zatim odlučuje da li će dozvoliti administratorima mrežnih sajtova da vide ili pristupe meniju pluginova u njihovom dashboard-u i, ako je tako, da li se takva dozvola proširuje na aktiviranje ili deaktiviranje pluginova.

Do onome stepu mrežni administrator odgovoran je za instaliranje pluginova i tema na mreži te delegiranje dozvola kako bi se mogli koristiti ovi pluginovi i teme na web stranicama mreže. Administratori stranica ne mogu instalirati pluginove i teme niti pristupiti pluginovima i temama koji nisu dodijeljeni njihovoj stranici.

#### Korisnici i administrator {#users-and-administrators}

U WordPress Multisite, sve web stranice mreže dijele istu bazu podataka i stoga dijele iste korisnike, uloge i mogućnosti. Najbolji način da to zamislite je da su svi korisnici članovi mreže, a ne određene stranice.

S obzirom na ovo razumijevanje, možda nije poželjno dozvoliti kreiranje korisnika i zbog toga WordPress Multisite uklanja tu mogućnost od administratora stranice i prebacuje je na nadležnost administratorske mreže. Na taj način, administrator mreže može delegirati potrebne privilegije administratoru stranice kako bi mu omogućio da kreira račune za korisnike za svoju stranicu.

<!-- Screenshot unavailable: WordPress Multisite network user management interface -->

Ponovljajući gore navedeno, iako se računi korisnika čine povezani sa stranicom na kojoj su, zapravo su dodijeljeni mreži i stoga moraju biti jedinstveni u cijeloj mreži. Može postojati situacija kada imena korisnika ne mogu biti registrirana zbog tog razloga.

Iako nije potpuno novi koncept u korporativnim sistemima, ova jedinstvena lokacija za registraciju korisnika i autentifikaciju često je teško razumjeti ljudima koji su navikli na samostalnu instaliranja WordPressa gdje je administracija korisnika malo lakša.

#### Mediji (Media) {#media}

Kada se web stranice koriste u WordPress Multisite, one dijele jednu bazu podataka, ali zadržavaju odvojene putanje na sustavu datoteka za medijske fajlove.

Standardna lokacija WordPressa (`wp-content/uploads`) ostaje ista; međutim, njena putanja se mijenja kako bi odražavala jedinstveni ID mreže stranice. Posljedično, medijski fajlovi za mrežu stranicu izgledaju kao `wp-contents/uploads/site/[id]`.

#### Permalinks (Permali linkovi) {#permalinks}

Ranije smo spomenuli da postoje značajne prednosti korištenja _poddomena_ u odnosu na konfiguraciju _poddirektorijuma_, a evo kako to izgleda: putanje.

U konfiguraciji _poddirektorijuma_, glavni sajt (prvi sajt koji se kreira kada je mreža uspostavljena) i podstranice mreže moraju dijeliti istu putanju koja vodi od domena. Ovo ima potencijal za mnogo sukoba.

Za objave, na glavni sajt se dodaje obavezna putanja `/blog/` kako bi se spriječile kolizije s drugim stranicama u mreži. To znači da lijepi permali linkovi poput ‘Naziv objave’ će se prikazivati kao `domain.name/blog/post-name/`.

<!-- Screenshot unavailable: WordPress permalink settings showing /blog/ path in subdirectory configuration -->

U konfiguraciji sa poddomenom ova akcija nije nužna jer svako mrežni sajt koristi potpuno odvojeni domen i stoga ne mora ovisiti na jednu zajedničku putanju. Umjesto toga, oni održavaju svoje zasebne putanje zasnovane na njihovom _subdomain_.

<!-- Screenshot unavailable: WordPress permalink settings for subdomain configuration -->

#### Statické stranice {#static-pages}

U konfiguraciji poddirektorijuma potencijal za konflikte imena se proširuje i na statičke stranice jer glavni sajt i mrežni sajt dijele istu putanju.

Da bi se to spriječilo, WordPress nudi način da blokirate određena imena sajta kako ne bi se sukobili s imenima prvog sajta. Tipično, mrežni administrator unosi root putanje stranica glavnog sajta.

<!-- Screenshot unavailable: WordPress network settings showing banned site names to prevent conflicts -->

U konfiguraciji sa poddomenom mogućnost konflikta imena je ublažena zahvaljujući _subdomain_u jer on jedinstven za mrežni sajt i nema nikakvu vezu s glavnim sajtom.

### Registracija {#registration}

Unutar mrežnih postavki WordPress Multisite dostupno je nekoliko novih opcija za registraciju korisnika, koje omogućavaju novim i postojećim korisnicima da kreiraju sajtove.

<!-- Screenshot unavailable: WordPress Multisite network settings showing registration options -->

Za razliku od samostalnih instalacija WordPress-a, mrežni sajtovi ne zadržavaju poznate opcije za dozvolu registracije korisnika ili dodjeljivanje tih registracija uloge.

<!-- Screenshot nedostupan: WordPress standalone sajta korisnik registracija podešavet prikazuje ograničene opcije -->

Kada se kreiraju korisnički računi, ti računi se generišu na nivou mreže. Dakle, umjesto da pripadaju nekoj jednoj određenoj lokaciji, oni pripadaju mreži. Ovo ima neke specifične prednosti i mane.

Na primjer, zamislite da je vaš WordPress Multisite u poslu novina i informacija. Postavili biste multisite i zatim kreirali network siteove za financije, tehnologiju, zabavu i druge oblasti interesa, zadržavajući pritom opći kontrolu nad pluginovima i temama. Svaki network site bi na svoj način imao mnogo veću kontrolu nad izgledom i korisničkim iskustvom svog network sitea nego što bi to bilo slučaj s custom post tipovima ili običnim kategorijama postova.

U tom smislu, kada se korisnik prijavi, on se prijavi u mrežu i u konačnici je prijavljen na svaki network site kako bi pružio neprekidno iskustvo. Ako vaš novi site ima pretplatu, ovo bi bilo idealno rješenje i rezultat.

Ako, međutim, namjena i svrha multisitea nije bila ponuditi različite network siteove koji nemaju nikakvu vezu međusobno, gotovo je uvijek potrebno koristiti eksterne ili dodatne pluginove kako biste manipulirali korisničkim ulogama (user roles).

### Domen i SSL {#domain-and-ssl}

Razgovarajmo o instalaciji WordPress Multisite koja se skoro izmiče pažnji – Wordpress.com. Ovo je daleko najobimniji primjer WordPress multisite i pokazuje njegove široke sposobnosti prilagođavanja i oblikovanja kako bi ispunio određenu svrhu.

Danas na modernom internetu korištenje SSL-a je gotovo obavezno, a administratori mreža za WordPress multisite se ubrzo suočavaju s ovim izazovima.

U konfiguraciji _subdomain_ (poddomena) stranice se kreiraju na osnovu glavnog domena. Dakle, stranica označena kao ‘site1’ bi se kreirala kao ‘site1.domain.com’. Koristeći wildcard SSL certifikat, administrator mreže može uspješno riješiti ovaj izazov i pružiti mogućnosti SSL šifriranja za cijelu mrežu.

WordPress Multisite sadrži funkciju mapiranja domena koja omogućava da se sita u mreži povežu s prilagođenim nazivima domena ili nazivima domena različitim od glavnog domena mreže.

Za administratora mreže ovo predstavlja dodatni sloj složenosti kako u konfiguraciji imena domena, tako i u izdavanju i održavanju SSL certifikata.

U tom smislu, iako WordPress Multisite pruža način da se [www.anotherdomain.com](http://www.anotherdomain.com) mapira na ‘site1’, administrator mreže ostaje s izazovom eksternog upravljanja DNS unosa i implementacije SSL certifikata.

## Ultimate Multisite {#ultimate-multisite}

### Uvod {#introduction}

Ultimate Multisite je vaš švedski nož kada je u pitanju kreiranje Web-as-a-Service (WaaS). Zamislite Wix.com, Squarespace, WordPress.com i zatim razmislite o vlasništvu nad sopstvenom uslugom.

Pod pokrovom Ultimate Multisite koristi se WordPress Multisite, ali to radi na način koji ne samo da rešava mnoštvo problema koje administrator mreže imaju sa multisite instalacijama, već poboljšava mogućnosti omogućavajući podršku širokom spektru slučajeva korišćenja.

U sledećim sekcijama ćemo pogledati neke uobičajene slučajeve korišćenja i razmatranja potrebna za podršku tih slučajeva.

### Slučajevi Korišćenja {#use-cases}

#### Slučaj 1: Agencija {#case-1-an-agency}

Tipično, osnovne veštine agencije leže u dizajnu web-sajtova sa aspektima kao što je njihovo hostovanje ili marketing navedeni kao dodatni servisi.

Za agencije Ultimate Multisite nudi neverovatnu prednost jer omogućava hostovanje i upravljanje više web-sajtova na jednoj platformi. Još još više za agencije koje standardizuju dizajn na određenim temama kao što su GeneratePress, Astra, OceanWP ili druge mogu iskoristiti mogućnosti Ultimate Multisite da automatski aktiviraju te teme za svaki novi sajt.

Slično kao i s obzirom na mnogo ponuda za agencijske cene popularnim i zajedničkim pluginovima, Ultimate Multisite omogućava agencijama da iskoriste postojeće investicije pružanjem zajedničke platforme sa koje se pluginovi mogu instalirati, održavati i koristiti.

Najvjerojatnije će biti poželjno korištenje konfiguracije, a sretno je što Ultimate Multisite olakšava mapiranje domena i SSL sertifikate pomoću svojih integracija za niz popularnih hosting provajdera kao i usluga poput Cloudflare-a i cPanel-a.

Dakle, koristeći jedan od ovih provajdera ili postavljanjem Ultimate Multisite iza Cloudflare-a, aspekte upravljanja domenima i SSL sertifikatima postaju prilično jednostavni.

Agencije koje preferiraju da zadrže strogu kontrolu nad kreiranjem sajtova će cijeni lakoću s kojom mogu kreirati sajtove i povezati sajtove s klijentima i planovima putem pojednostavljenog interfejsa Ultimate Multisite-a.

![Ultimate Multisite site management interface](/img/admin/sites-list.png)

Stroga kontrola nad pluginovima i temama održava se na osnovu svakog proizvoda putem intuitivnih interfejsa Ultimate Multisite-a koji omogućavaju da se pluginovi i teme učitaju ili skriju, kao i njihov status aktivacije kada se instanciraju za novi sajt.

![Product plugin limitations interface](/img/config/product-plugins.png)

Teme nude sličnu funkcionalnost, omogućujući aktiviranje ili skrivanje određenih tema pri kreiranju sajta.

![Interfejs ograničenja tema proizvoda](/img/config/product-themes.png)

Agencije će pronaći mir sa Ultimate Multisite platformom koja im omogućava da rade ono u čemu su najdobrije – dizajniraju sjajne web stranice.

#### Primer 2: Niche Pružalac (Specjalista) {#case-2-niche-provider}

Postoji stara poslovica koja kaže: „Uradi jednu stvar i uradi je dobro”. Za mnoge specijaliste to znači kreiranje proizvoda ili usluge oko jedne osnovne ideje.

Možda ste zaljubljen u golfe, promovirajući web stranice klubovima, ili možda ste zaljubljenik u esports igranje i pružate web stranice klanovima. Možda pojedinac koji promoviše uslugu rezervacije restoranima?

Iz mnogih razloga biste željeli pružati usluge zasnovane na zajedničkom okviru i platformi. Možda ste dizajnirali ili uložili novac u specijalizovane pluginove kako biste obezbedili potrebnu funkcionalnost, ili može biti slučaj da industrijske najbolje prakse zahtevaju neku vrstu standardnog pristupa dizajnu.

Jedna od inovativnih karakteristika Ultimate Multisite platforme je korišćenje template stranica (template sites). Template stranica je ona gde je tema instalirana i aktivirana, potrebni pluginovi instalirani i aktivirani, a kreirane su uzorne objave ili stranice. Kada klijent napravi novu stranicu na osnovu tog šablona, sadržaj i podešavanja šablona se kopiraju u 새로 kreiranu stranicu.

Za pružatelja specijaliziranih sajtova i usluga, ovo pruža neusporedivu prednost u mogućnosti trenutnog kreiranja sajta spremnog za upotrebu s prilagođenim pluginovima i dizajnom. Klijent mora samo da priloži najminimalniji unos kako bi se usluga kompletirala.

Ovisno o zahtjevima, mogu odgovarati konfiguracije _poddirektorijuma_ ili _poddomena_, u kojem slučaju arhitektonske opcije su između jednostavnog SSL certifikata za _poddirektorijume_ ili wildcard SSL certifikata za _poddomene_.

#### Slučaj 3: WordPress Web Hosting {#case-3-wordpress-web-hosting}

Postoji mnoštvo načina na koje se mogu hostati WordPress sajtovi, ali rijetko je jednostavno kao pružanje web prostora klijentu s unaprijed instaliranim verzijom WordPressa. To je zato što mora se skupiti niz odluka i razmatranja kako bi se pružio smisleno usluga.

Ultimate Multisite se ističe u ovoj oblasti tako što nudi sveobuhvatno turnkey rješenje za hosting WordPress sajtova. Rješenje uključuje osnovne mehanizme za pružanje pretplatničkih usluga, prikupljanje plaćanja, obrasce za prodatu (checkout forms), kuponove popusta i komunikaciju s klijentima.

Veliki dio integralnog rada potrebnog za ispravnu instalaciju, konfiguraciju i održavanje WordPress Multisite olakšava Ultimate Multisite tako da administratori mreže moraju razmatrati samo aspekte vezane za njihovu uslugu ili nišu, kao što su nivoi proizvoda, cijene i ponude usluga.

Za programere koji žele da se integriraju sa Ultimate Multisite, ovo rešenje nudi i sveobuhvatan RESTful API i Webhookove za obaveštenja o događajima.

Bez oslanjanja na mnoštvo spoljnih pluginova i licenci, Ultimate Multisite pruža bogato funkcionalno i slično rešenje kao Wix, Squarespace, WordPress.com i drugi.

### Razmatranja arhitekture {#architecture-considerations}

Iako nije sveobuhvatan vodič, sledeći stavke bi trebalo da posluje kao smernice za ispravan izbor tehnologija koje podržavaju Ultimate Multisite instalaciju.

#### Deljeno vs. Dedikovatno hosting {#shared-vs-dedicated-hosting}

Nažalost, ne svi provajderi hostinga su jednaki i neki prave ekstremnu gustinu servera. Niskokoszti provajderi obično zarađuju maksimiziranjem gustine servera. Kao takav slučaj, vaša Ultimate Multisite instalacija može biti samo jedna od stotina sa istog servera.

Bez odgovarajućih zaštita od strane provajdera, sajtovi na deljenom serveru doživljavaju problem „bukvalnog suseda“ (noisy neighbour). To znači da sajt na istom serveru koji troši toliko resursa da drugi sajtovi moraju da se bore za preostale resurse. Često se to manifestuje kao sajtovi koji su spori ili ne odgovaraju na vreme.

Kao provajder web hostinga, slediti će posledice toga što vaši klijenti doživljavaju loše brzine, nisku rangiranost stranica i visoke stopove odlazaka (bounce rates), što često dovodi do gubitka kupaca jer traže usluge drugde.

Ukratko, je jeftino ne znači dobro.

Ultimate Multisite poznat je kao platforma koja dobro funkcioniše sa nizom dobrih hosting provajdera i dobro se integri u njihovu okruženja kako bi obezbedila funkcije poput mapiranja domena i automatskog SSL-a. Ti provajderi cene performanse i nude bolji nivo usluge nego običan (shared) hosting.

Za listu kompatibilnih provajdera i kompletnih uputstava za podešavanje za svaki od njih, molimo vas da proverite dokumentaciju o Kompatibilnim Provajderima.

#### Razmatranja u vezi performansi {#performance-considerations}

Ultimate Multisite nije spor program, već je izuzetno brz. Međutim, on radi samo koliko je dobra pod osnovom aplikacije i infrastrukture i može iskoristiti samo ono što ima pristup.

Razmislite o sledećem: Vi ste administrator mreže Ultimate Multisite instalacije sa 100 sajtovima. Neki od tih sajtova dobro rade i privlače određeni broj posetilaca svakog dana.

Ovaj scenario bi bio drugačiji na manjim skalama, recimo jedan do pet sajtova, ali pre nego što se pojave problemi skale, oni će biti očevidni.

Ako ostane nepratren, jedini Ultimate Multisite sajt će biti odgovoran za ispunjavanje zahteva svih posetilaca sajtova. Ti zahtevi mogu biti za dinamičke PHP stranice ili statičke resurse kao što su stilovi (stylesheets), JavaScript ili medijski fajlovi. Bez obzira da je reč o jednom ili sto sajtova, ove zadaci postaju ponavljajući, monoton i beskorisni. Nije potrebno koristiti procesorsku moć i memoriju za obradu PHP fajla kada je rezultat ista statička informacija za svaki zahtev.

Slično tome, jedan zahtjev za PHP ili HTML stranicu može generirati više naknadnih zahtjeva za skripte, stilove i slike. Ti zahtjevi su usmjereni direktno na vaš Ultimate Multisite server.

Ovaj problem se lako može riješiti ažuriranjem servera, ali to ne rješava sekundni problem – geografske kašnjenja (latencies). Samo više servera u različitim lokacijama bi mogao pravilno odgovoriti na ovaj problem.

Zbog toga većina mrežnih administratora koriste front-end caching rješenja i Content Distribution Networks (CDN) kako bi ispunili zahtjeve za statičke stranice. Ispunjavanje ovih zahtjeva i slanje resursa prije nego što zahtjev dođe do servera štedi procesorske resurse, uklanja kašnjenja, izbjegava nepotrebna ažuriranja i maksimizira investicije u tehnologiju.

Ultimate Multisite uključuje sofisticirani Cloudflare add-on koji omogućava mrežnim administratorima da postave svoje instalacije iza Cloudflarea i koriste ne samo njegove mogućnosti keširanja, već i DNS hosting, SSL certifikate i sigurnosne mehanizme.

#### Rezervni kopije (Backups) {#backups}

Možete zamoliti 50 ljudi za savjet o rezervnim kopijama i dobiti 50 različitih mišljenja o strategijama za rezervne kopije. Odgovor je: to ovisi o tome.

Što nije sporno je da su rezervne kopije (backup-ovi) potrebne i da je gotovo nemoguće da ih ne upravlja pružatelj usluge, pogotovo onaj koji nudi upravljenu uslugu. Posljedica toga je da će klijenti tražiti od administratora mreže da pruži i upravlja ovom uslugom. Tko je administrator mreže zavisi od potpuno drugačije probleme.

Za potrebe ovog dijela, dogovorimo se da je backup trenutni snimak stanja sistema u trenutku pokretanja backupa. Jednostavno rečeno, bilo koji je eventualno stanja sistema u trenutku backupa hvatan je i zaključava se u backupu.

S ovim razumijevanjem odgovor na pitanje kako postići backupe i što je najbolje za vaš okruženje će uglavnom ovisiti o vašim zahtjevima i sposobnosti pružatelja hostinga da te zahtjeve zadovolji. Međutim, redoslijed od najviše mišljenih do najmanje mišljenih opcija bi trebao dati neku smjernicu.

#### Snapshots (Snimci stanja) {#snapshots}

Snapshot-ovi su srebrna kupola za backupe jer su jednostavni, bez komplikacija (dok ne želite vratiti stanje) i "samo rade". Ipak, zahtijevaju pomoć vašeg pružatelja usluge i uglavnom se primjenjuju samo ako imate VPS (Virtual Private Server) ili slično. Nekoliko pružatelja usluga navedenih u našoj dokumentaciji „Kompatibilni pružatelji“ nude backupe koji ne zahtijevaju daljnje intervencije ili razmatranje od strane administratora mreže.

Gde tradicionalni rezervni kopiji ciljaju datoteke i baze podataka, snimak (snapshot) cilja cijeli disk. To znači da se u snimku hvata ne samo podaci sajta, već i operativni sistem i konfiguracija. Za mnoge to je značajna prednost jer se novi sistem može gotovo trenutno kreirati iz snimka i staviti u rad kako bi zamijenio neispravan primjerak. Na sličan način, proces oporavka za povratak datoteka zahtijeva samo priključivanje slike snimka kao diska na postojeći primjerak tako da se datoteke mogu pristupiti i kopirati.

Snimci mogu podrazmjetiti dodatnu trošak od pružatelja hostinga, ali to je osiguravajuća polisa protiv nesreće.

#### Eksterni skripti {#external-scripts}

Ne nedostaje eksternih skripti i rješenja za rezervne kopije resursa WordPressa i MySQL-a, a oni bi dobro radili za Ultimate Multisite jer je to WordPress plugin koji koristi WordPress datoteke i bazu podataka. Dakle, rješenje koje rezervno kopira WordPress sajmove adekvatno pokriva potrebe Ultimate Multisite.

Ne možemo preporučiti jednu skriptu nad drugom, ali savjet je da se pokrene nekoliko testova za rezervnu kopiju i oporavak kako bi se osiguralo da su rezultati željeni i da "budete sigurni" stalno evaluirajući skriptu i njenu funkcionalnost, posebno tamo gdje se primjenjuje neka vrsta strategije diferencijalne rezervne kopije.

Treba napomenuti da će ove skripte, dok rade, povećati opterećenje sistema što treba uzeti u obzir.

#### Pluginovi {#plugins}

U WordPressa skoro nema problema koji se ne može riješiti pluginom, i ako upravljanje vanjskim skriptama nije vaš stil, možda je plugin sljedeća najbolja opcija.

Iako varijacije u opcijama i značajkama pluginova postoje, oni uglavnom obavljaju istu funkciju: kopiranje WordPress datoteka i baze podataka. Nakon toga, funkcionalnosti se razlikuju jer neki pluginovi mogu slati backupove na vanjske usluge kao što su Google Drive ili Dropbox, ili na neku kompatibilnu uslugu skladištenja objekata poput S3-a, Wasabi-ja ili drugih. Što su pluginovi opsežniji, oni nude diferencijalne backupove ili neku strategiju za backup samo onih podataka koji su se promijenili kako bi se uštedjela mjesta na vanjskom skladištu.

Kada birate svoj plugin, obratite pažnju da provjerite da li je kompatibilan sa multisite-om. Zbog načina rada, dok se backup radi, možete očekivati privremeni teret na serveru dok proces nije završen.

#### Domen i SSL {#domain-and-ssl-1}

Mnogi su već razgovarali o domenima u modu poddomena (subdomain) za multisite. Gotovo univerzalno rješenje za mrežne administratora je korištenje wildcard DNS unosa.

![Primjer konfiguracije wildcard DNS unosa](/img/config/settings-domain-mapping.png)

Ovaj tip DNS unosa će uspješno rešiti poddomene poput ‘site1.domain.com’ i ‘site2.domain.com’ na IP adresu 1.2.3.4, čime podržava Ultimate Multisite i u većoj mjeri WordPress Multisite koristeći modu poddomena (subdomain) za multisite.

Ovo bi moglo savršeno raditi za HTTP jer se ciljna host čita iz HTTP zaglavlja, ali retko je veb tako jednostavan kao danas da su sigurni HTTPS transakciji gotovo obavezni.

Srećom, postoje jednostavne opcije za SSL certifikate. U modu poddirektorija (subdirectory mode) može se koristiti običan domen certifikat. Oni su lako i besplatno dostupni od pružatelja hostinga koji možda koriste besplatni LetsEncrypt servis ili neku drugu izvor. Inače, oni su komercijalno dostupni od autoriteta ako ste u mogućnosti generisati zahtjev za potpis certifikata (certificate signing request).

Za modu poddomena (subdomain mode), korištenje wildcard SSL certifikata savršeno će se uklopiti sa wildcard domenom i omogućit će da certifikat bude autoritativan za root domen i sve poddomene bez nepotrebnog konfiguriranja.

Međutim, treba napomenuti da wildcard SSL certifikati možda neće raditi s uslugama kao što je Cloudflare osim ako niste na enterprise planu ili ne postavite ulaz u DNS samo, u tom slučaju se svi keširanje i optimizacija zaobiđu.

Ultimate Multisite izvan kutije (out-of-the-box) pruža rješenje za ovaj problem, dokazujući našu duboku iskustva s potrebama WordPress multisite. Aktivira se ovaj jednostavan addon kako bi Ultimate Multisite koristio vaše Cloudflare podatke za automatsko dodavanje DNS unosa za mrežne siteove u Cloudflare i postavljanje njihovog načina na 'proxied'. Na taj način svaki podsite mreže, kada se kreira, će imati punu zaštitu i prednosti Cloudflare uključujući SSL.

Ovisno o prirodi i svrsi vaše Ultimate Multisite instalacije, kupcima može biti potrebno da koriste sopstvene domene. U tom slučaju, mrežni administrator je odgovoran za rešavanje dva problema: hosting imena domena i SSL sertifikate za domen.

Za mnoge, korišćenje Cloudflare-a je jednostavan izbor. Kupac samo treba da postavi svoj domen na Cloudflare, usmeri CNAME ka root domeni Ultimate Multisite i mapira svoj domen u Ultimate Multisite kako bi počeo iskoristiti sopstveni naziv domena.

Osim toga, potrebno je tražiti alternative rešenja, zato Ultimate Multisite preporučuje list kompatibilnih dobavljača (Compatible Providers). To je zato što proces podešavanja DNS-a i SSL-a može biti neobičan proces. Međutim, sa integracijom Ultimate Multisite sa ovim dobavljačima, složenost se značajno smanjuje i procedura je automatizovana.

#### Pluginovi {#plugins-1}

Vrlo je verovatno da ćete morati dodatne pluginove kako biste pružili funkcionalnost vašim kupcima ili mrežnim sajtovima. Da li svi pluginovi rade sa WordPress Multisite-om i Ultimate Multisite-om? To zavisi.

Dok većina pluginova se može instalirati u WordPress Multisite, njihova aktivacija i licenciranje varira od autora do autora.

Izazov leži u tome kako se primenjuje licenciranje kod nekih pluginova koji zahtevaju licencu na osnovu pojedinačnog domena (per-domain basis). To bi značilo da za neke pluginove mrežni administrator mora ručno aktivirati licencu za svaki plugin na svakom novom sajtu.

Stoga bi bilo najbolje da se posavjetujete sa autorom dodatka o tome kako će njegov dodatak raditi s WordPress Multisite-om i kakvih ima posebnih zahtjeva ili procedura za licenciranje.
