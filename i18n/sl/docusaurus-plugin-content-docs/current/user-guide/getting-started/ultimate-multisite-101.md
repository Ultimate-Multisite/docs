---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101 {#ultimate-multisite-101}

Ultimate Multisite je WordPress plugin, ki vam omogoča ponudbo WaaS ali spletnih strani kot storitve za stranke. Pred tem, ko se bomo poglobili in naučili kako vam Ultimate Multisite lahko pomaga v poslovanju in za stranke, potrebujemo nekaj osnovnega znanja.

## WordPress Multisite {#the-wordpress-multisite}

Večico nas je že oskrbno poznano standardna instalacija WordPressa. Lahko jo ustvarite preko kontrolne panela vašega hosterja ali, če ste odzeli, postavite novi spletni server in bazo podatkov, prenesete osnovne datoteke in začnete proces instalacije.

To deluje za milijone WordPress strani po svetu, vendar z razmerja agencije ali hosterja давайте trenutek pogovorimo o obremenjenostih.

Čeprav je enostavno ustvariti eno WordPress stran ali celo sto preko avtomatsnega kontrolnega panela, problemi se bodo kmalu pojavili, ko pride do upravljanja teh strani. Če jih ne upravljate, ste primerno cilj za malware. Upravljanje pomeni uporabo truda in virov, in čeprav je na voljo zunanjih orodij in pluginov, ki pomagajo pri olajšanju upravljanja in administracije WordPress strani, dejstvo, da stranke ohranjajo administratorski dostop, pomeni, da se ta trud lahko enostavno preobisti.

V svoji osnovni delu WordPress ponuja funkcijo, ki je preprosto imenovana 'Multisite', ki poteka svoje izvirnike v 2010 letih z lansiranjem WordPressa 3.0. Od tam je imela številne revizije namenjene vnosu novih funkcij in za razdelo varnosti.

Na splošno se WordPress multisite lahko zamislite kot: Univerza ohranja eno instalacijo WordPressa, vendar vsaka fakulteta ohranja svojo lastno WordPress stran.

Da bi razdelali to besedilo, давайте pogledamo nekaj osnovne terminologije, ki je prisotna ne le v dokumentaciji Ultimate Multisite, ampak tudi v celoti WordPress topliniti.

### Mreža (The Network) {#the-network}

V smislu WordPressa je multisite mreža mesto, kjer lahko upravljate več podspodmatic sistemov iz ene edinstvene dashboard. Čeprav se pri ustvarjanju multisite mreže razlikuje med različnimi hostarji, končni rezultat običajno vključuje nekaj dodatnih navodil v dateniku `wp-config.php`, ki WordPressu povejo, da deluje v tem specifičnem načinu.

Obstaja več značilnih razlik med multisite mrežo in samostojno instalacijo WordPressa, ki jih kratko predvidimo.

#### Poddomena vs. Poddirektorij (Subdomain vs. Subdirectory) {#subdomain-vs-subdirectory}

Ena od prvih ključnih odločitev, ki morate podjetno storiti, je ali se multisite instalacija bo delovala z _poddirektoriji_ ali _poddomenami_. Ultimate Multisite deluje enako dobro s oboimi izbira, vendar obstajajo arhitekturne razlike med dvoimi konfiguracijami.

Pri konfiguraciji z _poddirektorijami_ se mreže podspodmatic sistemov prepričujejo pot (path) na podlagi glavnega imena domena. Na primer, mreža podsystema s imenom 'site1' bo imela svojo celotno URL adresu kot `https://domain.com/site1`. Pri konfiguraciji z _poddomenami_ bo mreža podsistema imela lastno _poddomeno_, ki je izvedena iz glavnega imena domena. Tako bo podsystem s imenom 'site1' imel celotno URL adreso kot `https://site1.domain.com/`.

Čeprav sta oba možnosti popolnoma validna, obstoje uporaba _poddomen_ ponuja več prednosti, vendar zahteva tudi več razmišljanja in načrtovanja v njeni arhitekturi.

Kaj se nanaša DNS vprašanje uporabe poddirektorijev (_subdirectories_) je relativno preprosto. Ker so spletni domov samo otroci glavne poti, za glavni domen potrebuje obstajati le enega vpis na ime domena. Pri _poddomeni_ pa je izziv malo složnejši in zahteva ali ločeno CNAME vpisano za vsako poddomenno spletno mesto ali polaznik (* wildcard) v DNS zapisi.

Drugi prostor, ki ga treba upoštevati, je SSL in izdaja ter uporaba SSL sertifikatov. Pri konfiguraciji _poddirektori_ lahko uporabite enega domena sertifikata, ker so poddirektori preprosto poti glavnega imena domena. Na primer, sertifikat za domain.com bo ustrezno zagotovil SSL za https://domain.com/site1, https://domain.com/site2 in tako dalje.

Pri konfiguraciji _poddomene_ je uporaba wildcard SSL sertifikata ena od najbolj pogostih možnosti. Ta tip SSL sertifikata zagotavlja šifriranje za domen in njegove poddomene. Zato bo wildcard SSL sertifikat zagotovil šifriranje za https://site1.domain.com, https://site2.domain.com in tudi za sam domain.com.

Čeprav obstajajo drugi načini, so ti pogosto omejeni v obsegu in uporabi in zahtevajo dodatno konfiguracijo ter razmišljanje o primernosti.

#### Pluginov in temah {#plugins-and-themes}

Kar WordPress daje, odnese tudi, vsaj z gledišča uporabnika. Pri samostojni instalaciji WordPressa če administrator spletnega mesta instalira slab plugin ali ne ohrani svoje instalacije na zadnjem delu, je jedini žrtev in posledice tega dejanja sam. Vendar pa če administrator spletnega mesta instalira slab plugin v multisite instalaciji ustvari žrtve za vsako spletno mesto v mreži.

Zato je, ko je konfiguriran kot multisite WordPress odstrani možnost za administratorje spletnih strani, da instalirajo pluginove in teme, in ta možnost namesto tega premesti na nov ustvarjenega administratorja omrežja ali vlogo 'super admin'. Ta privilegirani nalog lahko nato odloči, ali dovoliti administratorjem omrežnih strani videti ali dostopati do menija za pluginove v svojem dashboardu in, če to, ali pa ali imajo ta dovoljenja tudi za _aktiviranje_ ali _deaktiviranje_ pluginov.

Na ta način je administrator omrežja odgovoren za instalacijo pluginov in teme v omrežju in delegira dovoljenja za uporabo teh pluginov in teme na omrežnih straneh. Administratorji spletnih strani ne morejo instalirati pluginov in teme ali dostopati do pluginov in teme, ki niso imajo dodeljene svoji strani.

#### Uporabniki in administratorji {#users-and-administrators}

V WordPress Multisite si vsi omrežni stranki deli eno isto bazo podatkov in zato delijo iste uporabnike, vloge in sposobnosti (capabilities). Najbolj primerno je mislit tako, da so vsi uporabniki članovi omrežja, a ne določene strani.

S tem razumevanjem lahko želite, da se uporabniki ne ustvarjajo, zato WordPress Multisite odstrani to možnost za administratorje strani in ta možnost premesti na omrežnega administratorja. Na drugi način lahko omrežni administrator delegira potrebna privilegija administratorju strani, da mu dovoli ustvarjati račune uporabnikov za svojo stran.

<!-- Zaslon ni na voljo: Interfejs upravljanja omrežnih uporabnikov WordPress Multisite -->

Ponovljamo to besedilo: čeprav se uporabniški računi zdi, da so povezani s stranjo, v resnici pa so dodeljeni omrežju in zato morajo biti edinstveni v celotnem omrežju. Lahko obstajajo primerji, kjer je uporabniško ime nedostopno za registracijo zaradi tega razloga.

Čeprav ni to zunanje koncept v podjetni sistemih, je ta eno vir za registracijo uporabnikov in avtorizacijo pogosto težko razumeti za ljudi, ki so se navikli na samostojne WordPress instalacije, kjer je administracija uporabnikov malo lažja.

#### Mediji (Media) {#media}

Kamenetni domneti, ki delujejo v WordPress Multisite, deli eno bazo podatkov, ohranjajo pa ločene poti na sistemu datoteka za medijske datoteke.

Standardna lokacija WordPressa (wp-content/uploads) ostaja; vendar je njena pot spremenjena, da odražava edinstveni ID mreže. Posledično se medijske datoteke za mrežni site pojavljajo kot wp-contents/uploads/site/[id].

#### Permalinki {#permalinks}

Še prej smo omenili, da obstajajo značilne prednosti _poddomena_ (subdomain) namesto _poddirektorja_ (subdirectory) konfiguracije in tukaj je: poti.

Pri konfiguraciji _poddirektorja_ morajo se glavni site (prvi site, ki ga ustvarite ob ustanovitvi mreže) in mrežni podsite deliti isti pot do domena. To ima potencial za veliko konfliktov.

Za objave se na glavni site dodaja obvezna pot /blog/, da bi preprečilo kolizije z mrežnimi siti. To pomeni, da bodo lepri permalinki, kot so ‘Ime objave’, prikazane kot domain.name/blog/post-name/.

<!-- Zaslon ni na voljo: nastavitve permalink WordPressa, ki pokazajo pot /blog/ v konfiguraciji poddirektorja -->

Pri konfiguraciji _poddomena_ ta dejanje ni potrebno, ker se vsaka mrežna site koristi od popolne razdelitve domena in zato ne mora zasnovati na eni poti. Namesto tega ohranjajo lastne ločene poti na podlagi njihove _poddomene_.

<!-- Zaslon ni na voljo: nastavitve permalink WordPressa za konfiguracijo poddomena -->

#### Statistične strani (Static Pages) {#static-pages}

V konfiguraciji _subdirectory_ je možnost konfliktov z imenovanji tudi pri statičnih stranih kot glavnem spletu in omrežnih spleti, ki delijo isti pot (path).

Da bi se s tem preprečilo, WordPress ponuja način za blokiranje določenih imen spletov, tako da ne bodo konfliktali z imeni prvotnega spleta. Tipično bi omrežni administrator vnesel osnovne poti stranih glavnega spleta.

<!-- Skenarno sliko ni na voljo: Omrežne nastavitve WordPressa, ki prikazuje zabranjene imena spletov za preprečevanje konfliktov -->

V konfiguraciji _subdomain_ je možnost konfliktov z imenovanji zmanjšana, ker je poddomeno edinstveno za omrežni splet in ni povezano z glavnim spletom.

### Registracija {#registration}

V omrežnih nastavitvah WordPress Multisite je na voljo več novih možnosti registracije uporabnikov, ki omogočajo novim in obstoječim uporabnikom ustvarjanje spletov.

<!-- Skenarno sliko ni na voljo: Omrežne nastavitve WordPressa Multisite, ki prikazuje možnosti registracije -->

Na nasprotju s samostojnimi instalacijami WordPressa omrežni spleti ne ohranjajo znanih možnosti za dovoljenje registracij uporabnikov ali dodeljeno tisti registracije vloge.

<!-- Skenarno sliko ni na voljo: Nastavitve registracije uporabnikov samostojnega spleta WordPressa, ki prikazuje omejene možnosti -->

Ko se ustvarjajo računi uporabnikov, ti računi so generirani na omrežni ravni. Tako ne pripadajo določenemu spletu, ampak pripadajo omrežju. To ima svoje specifične prednosti in slabosti.

Na primer, predstavljajte si WordPress Multisite v poslovanju z novicami in informacijami. Ustanovite multisite in nato ustvarite mrežno spletne strani za finančne sisteme, tehnologijo, zabavo in druge oblasti zanimanja, ohranjajoč pri tem celoten nadzor nad pluginom in temi. Vsaka mrežno stran bi lahko imela veliko večji nadzor nad izgledom in uporabniško izkušnjo svoje mrežne strani kot pa to običajni posttipe ali kategorije postov.

Do tega razmerja, ko se uporabnik prijavi, prijavi se na mrežno stran in končno je prijavi tudi na vsako mrežno stran za zagotavljanje brezhibnega izkušanja. Če bi bila vaša nova stran zasnovana na pretplatni model, bi to bilo idealno rešitev in rezultat.

Če pa je namen in namen multisite strani bil ponudba različnih mrežnih strani, ki nimajo ničesar za seboj, je skoraj vedno potrebno uporaba zunanjih ali dodatnih pluginov za upravljanje uporabniških vloge.

### Domen in SSL {#domain-and-ssl}

Pojdičemo na WordPress Multisite instalacijo, ki nam skoraj premika iz pozornosti – Wordpress.com. To je daleč najbolj obsežen primer WordPress multisite in kaže njegove močne sposobnosti prilagoditve in oblikovanja za doseganje določenega namena.

Danes na sodobnem spletu je uporaba SSL sertifikata praktično nujna, in mrežni administratorji WordPress multisite strani imajo takoj pred sobico te izzive.

Pri konfiguraciji z poddomeni se strani ustvarjajo na podlagi glavnega domena. Na primer bi bila stran označena kot ‘site1’ ustvarjena kot ‘site1.domain.com’. Uporabljanjem wildcard SSL sertifikata lahko mrežni administrator uspešno reši to izzivo in zagotovi sposobnosti SSL šifriranja za celoto mrežno stran.

WordPress Multisite vsebuje funkcijo mapiranja domen, ki omogoča povezovanje spletnih sistemov v mreži z prilagojenimi imeni domen ali imeni domenin, ki so različni od osnovnega domena mreže.

Za administratorje mreže to predstavlja dodatno sloj kompleksnosti tako pri konfiguraciji imen domen kot pri izdajanju in vzdrževanju SSL sertifikatov.

Na ta način, čeprav WordPress Multisite omogoča mapiranje [www.anotherdomain.com](http://www.anotherdomain.com) na 'site1', administrator mreže ostaja z izzivom zunanjega upravljanja DNS vpisov in implementacijo SSL sertifikatov.

## Ultimate Multisite {#ultimate-multisite}

Če razumemo razlike med samostojno instalacijo WordPressa in instalacijo Multisite, давайте pogledamo, kako je Ultimate Multisite ultimativna orodja za zagotavljanje spletnih strani kot storitve (Website as a Service).

### Uvod {#introduction}

Ultimate Multisite je vaš švicarski nož, ko gre za ustvarjanje Website as a Service (WaaS). Predstavite si Wix.com, Squarespace, WordPress.com in nato v zamudi lastno storitev.

Pod motorjem uporablja Ultimate Multisite WordPress Multisite, vendar to naredi na način, ki ne le rešuje myriad izzivov, s katerimi se soočajo administratorji mreže z instalacijami multisite, ampak tudi poveča možnosti, ki omogočajo podporo široki razredov uporab.

V naslednjih poglavjih bomo pogledali nekaterih skupnih primerov uporabe in zahtev, ki so potrebni za podporo teh primerov.

### Primeri uporabe {#use-cases}

#### Primer 1: Agencija {#case-1-an-agency}

Tipično ležijo osnovne veščine agencije v oblikovanju spletnih strani z vidika njihove hostinga ali trženja kot dodatnih storitev.

Za agencije Ultimate Multisite ponuja neverjetno vrednost, saj omogoča hostiranje in upravljanje več spletnih strani na eni platformi. To je še bolj koristno za agencije, ki standardizirajo svoje dizajne na določenih temah, kot so GeneratePress, Astra, OceanWP ali druge – lahko z uporabo moči Ultimate Multisite avtomatsko aktivirajo te teme za vsako novo stran.

Na isti način, s obsežnim izborom ponudb za agencijske cene na pogosto uporabne in popularne pluginove, omogoča uporaba Ultimate Multisite agencijam, da z uporabo enake platforme, kjer lahko instalirajo, vzdržujejo in uporabljajo pluginove.

Najverjetnejše je, da bodo želeli uporabiti konfiguracijo, in srečo je, da Ultimate Multisite omogoča preprosto nastavitve za mapiranje domen in SSL sertifikate z integracijami za številne popularne storitvene ponudnike kot tudi storitve kot so Cloudflare in cPanel.

Tako lahko z uporabo ene od teh ponudb ali s postavitvijo Ultimate Multisite za Cloudflare, aspekti upravljanja domen in SSL sertifikatov postanejo preprosti.

Agencije, ki prevladajo strogo nadzor nad krepitevami strani, bodo cenile lažljivost pri krepitvi strani in povezovanju strani z strankami in paketi preko uproščenega interfejsa Ultimate Multisite.

![Ultimate Multisite site management interface](/img/admin/sites-list.png)

Strogi nadzor nad pluginovi in temi se ohranja na podlagi vsakega izdelka prek intuitivnih interfejsov Ultimate Multisite, ki omogočajo prikaz ali skritanje pluginov in tem, kot tudi stanje njihove aktivacije pri instanciranju za novu stran.

![Product plugin limitations interface](/img/config/product-plugins.png)

Teme (teme) ponuj podobno delovanje, ki omogoča določeni teme aktivirati ali skriti na spletni strani pri kreiranju.

![Splošna omejitve teme interfejs](/img/config/product-themes.png)

Agencije bodo z Ultimate Multisite imeli mir, saj jim omogoča, da delajo to, kar najbolje znajo – oblikovati izjemne spletne strani.

#### Primer 2: Specjalist za nišo {#case-2-niche-provider}

Obstaja stara poslovica, ki pravi: „odloči se na eno in naredi jo dobro”. Za mnogih specialistov pomeni to ustvarjanje izdelka ali storitve okoli ene osnovne ideje.

Morda ste zaljubljen golfer, ki promocijete spletne strani za klubove, ali morda ste zaljubljen esports igralec, ki ponujete spletne strani klanom. Ali pa oseba, ki promocija storitev rezervacije za restavracije?

Po številnih razlogih bi želeli ponuditi storitve na podlagi skupnega okvirja in platforme. Lahko ste zasnovali ali vložili v prilagojene pluginove, da omogočite potrebna funkcionalnost, ali morda je sliko tako, da zahtevajo najboljše prave industrije nekakšno standardizirano pristopno oblikovanje.

Ena od inovativnih značilnosti Ultimate Multisite je uporaba templatnih strani (template sites). Templatna stran je ena, kjer je tema instalirana in aktivirana, potrebni pluginovi instalirani in aktivirani, ter so ustvarjeni vzorčni članki ali strani. Ko kupec ustvari novo stran na podlagi templete, se vsebina in nastavitve templete kopirajo na novo ustvarjeno stran.

Za ponudnika nišnih strani in storitev to prinaša neverjetno prednost v sposobnosti trenutnega ustvarjanja strani, pripravljenih za uporabo z prilagojenimi pluginovi in oblikovanjem. Kupce morajo le zagotoviti najminimalnejši podatke za dokončanje storitve.

Odvisno od zahtevov se lahko primeri za pododrejke (_subdirectory_) ali poddomene (_subdomain_) uporabljajo, pri čemer bi izbira arhitekture bila med preprosto SSL certifikato za pododrejke ali wildcard SSL certifikat za poddome.

#### Primer 3: WordPress Web Hosting {#case-3-wordpress-web-hosting}

Obstaja številnih načinov za hostovanje WordPress strani, vendar je redko tako preprosto, kot da ponudite prostor na spletni strani stranki z predinstalirano različico WordPressa. To je zato, ker mora biti skupaj vključeno več odločitev in razmatranj, da bi se zagotovil smiselna storitev.

Ultimate Multisite odlično deluje v tej oblasti, saj ponuja celovit rešitev za hostovanje WordPress strani. V rešitev so vključeni osnovni mehanizmi za zagotavljanje predpisnih storitev, zbiranje plačil, forme za nakup, rabatne kuponke in komunikacijo z strankami.

Veliko ključnega dela, ki je potrebno za pravilno namestitev, konfiguracijo in vzdrževanje WordPress Multisite, ga Ultimate Multisite omogoča tako, da se omrežni administratorji morajo samo razmišljati o aspektih, povezanih z njihovim storitvijo ali nišo, kot so npr. različne stopnje izdelkov, cenik in ponudbe storitev.

Za razvijalce, ki želijo integrirati s Ultimate Multisite, rešitev ponuja tudi celovit RESTful API in Webhooks za obvestilo o dogodkih.

Spremenjen na številnih zunanjih pluginov in licenc, Ultimate Multisite ponuja bogato funkcionirano in primerljivo rešitev kot Wix, Squarespace, WordPress.com in druge.

### Arhitekturna razmatranja {#architecture-considerations}

Čeprav ni celoten vodič, bodo naslednji elementi služili kot smernica za pravilno izbiro tehnologij za podporo namestitve Ultimate Multisite.

#### Deljeno vs. Dedikirano hostovanje {#shared-vs-dedicated-hosting}

Nažalost niso vsi hostniki enaki in nekateri izvzejajo ekstremno visoke razmerje serverne gustine. Niski stroški ponudniki običajno generirajo prihodke z maksimalne serverne gustine. Kot tako je vaša Ultimate Multisite instalacija lahko le ena od več sto strani na istem serverju.

Kot obsežnih varovanj od ponudnika, strani na deljenem serverju doživljajo problem "šumnega soseda". To pomeni, da stran na istem serverju porablja toliko virov, da drugi stranki morajo te vlive konkurirati za preostale vire. Pogosto se to kaže kot strani ki so počasne ali ne reagirajo občasno.

Kot ponudnik spletne hostange sami bo tok učinkov pomenil, da bodo vaši uporabniki doživeli slab hitrosti, nizko rangiranje stran in visoke stopnje odskakanja, kar pogosto vodi do odhodka strank ali pač tega storjenja.

Kratko rečeno: lavo ni vedno dobro.

Ultimate Multisite je znan kot deluje z več dobri hostniki in se dobro integrira v njihovo okolje, da omogoči funkcije kot so mapiranje domen in avtomatska SSL. Ti ponudniki cenijo učinkovitost in zagotavljajo višjo razred storitev kot pri deljenem hostingu.

Za seznam kompatibilnih ponudnikov in popolne navodila za nastavitve za vsak od njih se prosimo ogledajte dokumentacije o kompatibilnih ponudnikih.

#### Uskrbija o učinkovitosti (Performance Considerations) {#performance-considerations}

Ultimate Multisite ni počasno aplikacija, namesto tega je izjemno hitra. Vendar pa deluje le tako dobro kot podlaga aplikacije in infrastrukture in lahko uporablja le tisto, ki jo ima na voljo.

Predstavite to: Ste si predstavljajo, da ste mrežni administrator Ultimate Multisite instalacije z 100 strani. Nekatere od teh strani delujejo dobro in privabljajo številne obiskovalce spletnih strani vsak dan.

Ta scenarij bi bil drugačen na manjši meri, recimo eno do petih spletnih strani, vendar bi se problemi skaliranja pojavili že pred daljšimi težavami.

Če ne prideš v to, eno Ultimate Multisite stran bo odgovorna za izpolnjevanje zahtev vseh obiskovalcev strani. Ti zahtevi lahko obstajajo za dinamične PHP strani ali statične lastnosti kot so stylesheeti, javascript ali medijni datoteke. Ne glede na to, če je eno ali sto strani, te naloge postanejo ponavljajoče se, monotonije in nesprevedene. Ni potrebno uporabljati CPU moč in memorijo za obdelavo PHP datoteke, ko je izhod isti statični podatki za vsak zahtev.

Na isto način en zahteva za PHP ali HTML stran generira več naslednjih zahtev za skripte, stylesheeti in slike. Ti zahtevi so usmerjeni neposredno na vaš Ultimate Multisite server.

To težavo lahko enostavno rešuje z nadaljnijo nadgradnjo serverja, vendar to ni rešuje sekundne probleme – geografske latencije. Samo več serverjev v različnih lokacijah bi pravilno odgovoril na to težavo.

Zaradi tega večina omrežnih administratorjev uporablja rešitve za front-end caching in content distribution networks (CDN) za izpolnjevanje zahtev za statične strani. Izpolnjevanje teh zahtev in posredovanje lastnosti pred tem, ko pride do serverja, štedi procesne resurse, eliminiira zakaže, preprečuje nepotrebne nadgradnje in maksimira investicije v tehnologijo.

Ultimate Multisite vključuje sofisticiran Cloudflare add-on, ki omogoča omrežnim administratorjem, da postavijo svoje instalacije za Cloudflare in uporabljajo ne le njegove možnosti cacheiranja, temveč tudi DNS hosting, SSL certificates in varnostne mehanizme.

#### Rezervne kopije (Backups) {#backups}

Če bi vprašal 50 ljudi za svetovanje glede rezervnih kopij in prejmel 50 različnih mnenj o strategijah za rezervne kopije. Odgovor je: to odvisno.

Kar ni je ne spor, da so potrebni backupi in da je skoraj nemogo predstavljeno, da jih upravlja ponudnik, še posebej tisti, ki ponuja upravljano storitev. Posledično bodo uporabniki gledali na mrežnega administratorja za zagotavljanje in upravljanje te storitve. Kdo mrežnega administratorja posluje je popolnoma druga težava.

Za namene tega oddelka se dogovorimo, da je backup trenutni zapis stanja sistema v času, ko je bila inicirana operacija za backup. Preprosto rečeno, koli je stanje sistema v času lastnega backupa, to stanje je zabiljeno in shranjeno v backupu.

S tem razumevanjem bo odgovor na vprašanje, kako doseči backupe in kaj je najboljše za vaš okolje, močno odvisen od vaših zahtev in sposobnosti hostnega ponudnika, da te zahteve zadovolji. V vrsti od najbolj mišljenih do najmanj mišljenih, bodo spodaj navedene možnosti določale nekaj smernic.

#### Snapshots (Snape) {#snapshots}

Snapshots so srebrni kupci za backupe, ker so enostavni, brez komplikacij (dokaj ne želite obnoviti) in "le delujejo". Vendar pa zahtevajo nekaj pomoč od vašega ponudnika in se nanašajo predvsem na primer z VPS-om (Virtual Private Server) ali podobnimi. Nekateri ponudniki navedeni v dokumentaciji o "Sobrnih Ponudnikih" ponujajo backupe, ki ne zahtevajo več intervencije ali razmišljanja od mrežnega administratorja.

Medtem tradicionalne kopiranje (backup) cilja na datoteke in bazo podatkov, snapshot cilja na cel disk. To pomeni, da se v snapshot zagreje ne le podatki spletnega mesta, ampak tudi operacijski sistem in konfiguracija. Za mnoge je to jasna prednost, ker lahko nov sistem praktično trenutno ustvarite iz snapshot in ga uporabite za nadomest lošega sistema. Na isti način zahteva proces oporabljanja (recovery) za povrat 파일을 le priključenost slike snapshot kot diska na obstoječi instanci, tako da se datoteke lahko dostopajo in kopirajo.

Snapshot se lahko z drugimi stroški sooči s hostom, vendar je to zavarovanje proti nesrečam.

#### Zunanjih skript {#external-scripts}
Ne manjka zunanjih skript in rešitev za kopiranje (backup) WordPressa in MySQL resursov, ki bi dobro delale tudi za Ultimate Multisite, ker je WordPress plugin, ki uporablja WordPress sistem datotek in bazo podatkov. Tako bi rešitev, ki kopira WordPress sisteme, adekvatno pokrivala potrebe Ultimate Multisite.

Ne lahko priporočamo eno skripto nad drugo, vendar naša splošna svetovanje je, da preverite več testov oporabljanja in obnovitve (backup and restore tests), da se rezultati zdijo željeni in da ste "prepovedali prepoved" s stalno ocenjevalno funkcijo skripte in njene delovanja, še posebej tam kjer je uporabljen nekak način diferencijalne strategije za kopiranje (differential backup strategy).

Treba opozoriti, da bodo te skripte med delovanjem povečale obrambo sistema, kar je treba vlagati v znanje.

#### Plugin {#plugins}
V WordPressu je praktično ni težav, ki jo ne bi lahko rešil plugin, in če upravljanje zunanjih skript ne spada v vaše moč, morda je plugin naslednja najboljša možnost.

Čeprav se različni pluginovi razlikujejo po možnostih in funkcijah, v večini opravljajo isti funkcijo: kloniranje WordPress datotek in baze podatkov. Nato se funkcionalnosti razlikujejo, ker nekateri pluginovi lahko shijo kopije na zunanje storitve, kot so Google Drive ali Dropbox, ali na kakšno kompatibilno storitev za skladiščenje objektov, kot sta S3, Wasabi ali druge. Več obsežni pluginovi ponujajo diferencijalne kopije ali kakšno strategijo za shranje samo podatkov, ki so se spremenili, da bi se štedili stroške zunanjega skladiščenja.

Ob izbiri svojega pluginove preverite, da je kompatibilen z multisite. Ker zaradi svoje načina delovanja lahko pričakujete privršen obremenitev serverja med tekočim shranjejem kopij.

#### Domen in SSL {#domain-and-ssl-1}

Več se že pogovorilo o domenah v modu _subdomain_. Praktična rešitev za administratorje omrežij je uporaba wildcard DNS entry-jev.

![Primer konfiguracije wildcard DNS entry](/img/config/settings-domain-mapping.png)

Ta tip DNS entry-ja uspešno razrešuje _subdomene_ kot sta ‘site1.domain.com’ in ‘site2.domain.com’ na IP naslov 1.2.3.4, kar podpira Ultimate Multisite in v večji meri WordPress Multisite z uporabo _subdomain_ mode.

To lahko popolnoma deluje tudi za HTTP, ker se ciljni host čita iz HTTP headerjev, vendar je spletna stran danes redko tako preprosta, da so HTTPS transakcije sicer obvezne.

Na sreči z SSL sertifikati je na voljo enostavna rešitev. V načinu _subdirectory_ lahko uporabite običajen domen sertifikat. Ti so pripravljeni in brezplačni dostopni od gostolovnih ponudnikov, ki imajo v uporabi brezplačni storitev LetsEncrypt ali druge viri. Drugo možnost je komercialna ponudba od pooblaščenih oseb, če ste sposobni generirati zahtevo za podpis sertifikata (CSR).

Za načinom _subdomain_ bo uporaba wildcard SSL sertifikata popolnoma ustreznih z wildcard domenom in omogočilo mu, da je sertifikat autoritativ za glavni domen in vse _subdomene_ brez dodatne konfiguracije.

Vendar pa je treba opozoriti, da se wildcard SSL sertifikati morda ne bodo uporabili z storitvami kot sta Cloudflare, razen če ste na podjetni načrt ali postavite vnos samo na DNS, kjer se omogoči vse cache in optimizacijo.

Ultimate Multisite iz paketa ponuja rešitev za to težavo, kar kaže na naše bogato izkušnje z potrebami WordPress multisite. Aktivacija tega enostavnega add-ona bo omogočila Ultimate Multisite uporabo vaših Cloudflare podatkov za avtomatsko dodajanje DNS vnosov za mrežne sisteme v Cloudflar in postavitvo njihovega načina na 'proxied'. Na ta način bo vsaka mrežna podstran, ko se ustvari, imela popolno zaščito in koristi Cloudflare, vključno z SSL.

Odvisno od narave in namene vaše Ultimate Multisite instalacije lahko uporabniki potrebujejo lastne domene. V tem primer je mrežni administrator odgovoren za reševanje dveh problemov: eno, hostovanje imena domena in drugo, SSL sertifikate za domen.

Za mnogih je uporaba Cloudflare enostavna možnost. Kupci le morajo svoj domen postaviti na Cloudflare, usmeriti CNAME na osnovni domen Ultimate Multisite in mapirati svoj domen v Ultimate Multisite, da bi začeli uporabljati svoj prilagojen naziv domena.

Zunanjih možnosti pa je treba искать alternative rešitve, zato Ultimate Multisite priporoča seznam Ustreznih Dostaviteljev (Compatible Providers). To je zato, ker proces nastavitve DNS in SSL lahko zahteva nekaj dela. Vendar z integracijo Ultimate Multisite z temi dostavili je kompleksnost veliko manjša in postopek je avtomatiziran.

#### Plugins {#plugins-1}

Verjetno boste potrebovali dodatne plugins za zagotavljanje funkcionalnosti vašim kupcem ali omrežnim stranem. Ali vsi plugins delujejo z WordPress Multisite in Ultimate Multisite? To je odvisno.

Čeprav večina plugins lahko instalirate v WordPress Multisite, njihova aktivacija in licenciranje se razlikuje od avtorja do avtorja.

Izjava je v tem, kako se primena licence uporablja z nekaterimi plugins, ki zahtevajo licenciranje na podlagi domena. To pomeni, da za nekatera plugins mora omrežni administrator ručno aktivirati licencu za vsako plugin na vsito novo stran.

Zato bi bilo morda najbolje preveriti z avtorjem pluginov, kako bo njihov plugin deloval z WordPress Multisite in kakšne posebne zahteve ali postopke potrebovali za njegovo licenciranje.
