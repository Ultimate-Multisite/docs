---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101

Ultimate Multisite je plugin WordPress Multisite, ktorý vám umožňuje ponúkať WaaS alebo Websites as a Service zákazníkom. Pred tým, než sa ponoříme do toho, ako vám Ultimate Multisite môže pomôcť vašej firmie a zákazníkom, potrebujeme získať základnú znalosť.

## WordPress Multisite

Veľa z nás je si štandardnej instalácie WordPress známe. Vytvoríte ju buď cez kontrolný panel vášho hostia, alebo pre odvážnych nastavíte nový webový server a databázu, stiahnete si základné súbory a začnete s inštaláciou.

Toto funguje pre miliónov WordPress sítí po celom svete, ale z pohľadu agentury alebo hostingového poskytovateľa si ch látku o objeme.

Hoci je to jednoduché vytvoriť jednu WordPress stránku alebo aj sto cez automatizovaný kontrolný panel, problémy sa čoskoro objavia, keď dôjde k správaniu týchto sítí. Ak ich nebudete spravovať, budete hlavnou cieľom pre zlyhania (malware). Správa to znamená vynaložiť úsilie a zdroje a hoci sú dostupné externé nástroje a pluginy, ktoré pomáhajú uplatniť správu a administráciu WordPress sítí, fakt, že zákazníci majú administratívny prístup, znamená, že tieto úsilia môžu byť ľahko poradené.

V svojom jadrde poskytuje WordPress funkciu len nazvanú „Multisite“, ktorá sa vracá do pôvodu z roku 2010 s lanskou WordPress 3.0. Od toho tam odtedy preneslo niekoľko revízií zamieraných na zavedenie nových funkcií a posilnenie bezpečnosti.

V podstate môže byť WordPress multisite predstavený takto: Univerzita udržiava jednu instaláciu WordPress, ale každý fakulta má vlastnú WordPress stránku.

Aby sme to zjednodušili tento tvrdenie, podime sa pozrieme na niektorú základnú terminológiu prítomnú nielen v dokumentácii Ultimate Multisite, ale aj v celom WordPress komuníty.

### Sieť (The Network)

V kontexte WordPress je multisite sieť to miesto, kde môžete spravovať niekoľko podsitov od jednej centra (dashboard). Hoci pri vytváraní multisite siete sa líši medzi poskytovateľmi hostingu, výsledkom je zvyčajne len niekoľko ďalších pokynov v súbore wp-config.php, ktoré informujú WordPress, že pracuje v tomto špecifickom režime.

Existuje niekoľko odlišností medzi multisite sieťou a samostatnou inštaláciu WordPressu, ktorú krátke čas prediskutujeme.

#### Poddoména vs. Podreť (Subdomain vs. Subdirectory)

Jednou z najmäčšej rozhodnutí, ktoré musíte urobiť, je či sa multisite inštalácia bude vnímať ako s _podreťami_ alebo _poddomenami_. Ultimate Multisite funguje rovnako dobre s oboma možnosťami, ale existujú architektonické rozdielu medzi týmito konfiguráciami.

V konfiguracii s _podreťami_ si siete vnímajú cestu založenú na hlavnej doménovej নামে. Napríklad sieťová sita označená ako ‘site1’ bude mať svoju plnú URL adresu https://domain.com/site1. V konfiguracii s _poddomenami_ bude sieťová sita mať vlastnú _poddoménu_, zvierajúcu sa na hlavné doménové meno. Týmto spôsobom bude plná URL adresa siete označeného ako ‘site1’ https://site1.domain.com/.

Hoci obe možnosti sú úplne platné, používanie _poddomen_ ponúka niekoľko výhod, ale vyžaduje aj viac zmyslu a plánovania v jej architektúre.

V zmysle DNS je použitie podkategórií (subdirectories) v podstatne jednoduchý problém. Keďže si webové stránky sú len detičmi rodičovského cesty, potrebuje sa pre hlavnú doménu existovať len jedna záznam domény. Pri poddoménach (subdomains) je problém o trochu zložitý a vyžaduje buď samostatný CNAME záznam pre každú webovú stránku v sieti, alebo wildcard (*) záznam v DNS registra.

Ďalšou oblastí, ktorú treba zvážiť, je SSL a vydávanie a používanie SSL certifikátov. Pri konfigurácii podkategórií (subdirectory) sa môže použiť jeden doménový certifikát, pretože webové stránky sú len cesty na hlavnú doménu. Preto bude certifikát pre domain.com dostatočne poskytovať SSL pre https://domain.com/site1, https://domain.com/site2 a tak ďalej.

Pri konfigurácii poddomén (subdomain) je použitie wildcard SSL certifikátu jedným z najčastejších možností. Tento typ SSL certifikátu poskytuje šifrovanie pre doménu a jej poddomény. Preto bude wildcard SSL certifikát poskytovať šifrovanie pre https://site1.domain.com, https://site2.domain.com a samotnú https://domain.com.

Hoci existujú iné možnosti, sú tieto často obmedzené v rozsahu a aplikácii a vyžadujú dodatočnú konfiguráciu a zváženie pri vhodnosti.

#### Plugins a Themes

Čo WordPress dá, to odberá aj, najmä z pohľadu zákazníka. Pri samostatnej inštalácii WordPressu je jediným obehnutím a dôsledkom tejto akcie samotný správca webovej stránky, ak nainštaluje zlé plugin alebo neudržia svoju inštaláciu aktuálnu. Avšak pri inštalácii zlé pluginu na inštalácii multisite vytvára obehnutie pre každú stránku v sieti.

Preto dôvodu toho, keď je WordPress nakonfigurovaný ako multisite, odstráni schopnosť správcovitého používateľa na site nainštalovať súbory (plugins) a témy a namiesto toho túto schopnosť presunie do nového vytvoreného role správy siete alebo „super admin“. Táto privilegovaná rola potom môže rozhodnúť, či umožní správcovia sietí vidieť alebo pristupovať k menu pluginov v ich dashboarde a ak áno, či sa takéto povolenia týkajú aktivácie alebo deaktivácie pluginov.

Do tejto míry je správa siete zodpovedná za nainštalovanie pluginov a tém v sieti a deleguje povolenia na použitie týchto pluginov a tém pre sity siete. Správcovia site nemôžu nainštalovať pluginy ani témy alebo pristupovať k pluginom a témam, ktoré im nie sú priradené k ich sitou.

#### Používatelia a správy (Administrators)

V WordPress Multisite všetky sity siete zdielajú tú istú databázu a preto zdielajú istých používateľov, role a schopnosti (capabilities). Najlepšie je to v mysli vnímať tak, že všetci používatelia sú členmi siete a nie konkrétnej site.

Vzhľadom na toto pochopenie môže byť nežiadacné umožniť vytvárať používateľov a preto WordPress Multisite odstráni túto schopnosť od správcovitého používateľa site a presunie ju do role správy siete. Potom si správa siete môže delegovať potrebné prístupy správcovi site, aby sa mu umožnilo vytvárať účty používateľov pre jeho vlastnú sitou.

<!-- Zobrazenie zobrazené: rozhranie správy používateľov siete WordPress Multisite -->

Opomenieme na vyššie uvedené, hoci si používateľské účty pôsobia ako súvislé od site, fakt sú priradené k siete a preto musia byť unikátne v celej sieti. Môžu existovať prípadné situácie, keď nemôžu byť pripísané používateľské mená na registráciu z dôvodu tohto dôvodu.

Hociak to niečo cudzí v podnikových systémoch, je táto jednotná pôvodná registracia a autentifikácia často ťažko pochopiteľná pre ľudí zvyknutých na samostatné inštalácie WordPressu, kde je správa používateľov trochu ľahšia.

#### Media

Keď si webové stránky v WordPress Multisite zdielajú jednu databázu, udržiava si oddelené cesty na súborový systém pre médiá.

Štandardná poloha (wp-content/uploads) zostáva; však jej cesta je zmenená, aby odrážala unikátny ID webovej siete. Konsekvenčne sa súbory medi pre sieťovú stránku objavujú ako wp-contents/uploads/site/[id].

#### Permalinks (Permalienky)

Pravilne sme už spomenuli, že existujú odlišné výhody **subdomény** oproti konfigurácii **podkatalógovej** a tu je to: cesty.

Pri konfigurácii **podkatalógovej** musí hlavná stránka (prvá vytvorená stránka, keď sa sieť vytvorí) a podstránky siete zdieľať tú istú cestu vedúcu k doménové. Toto má potenciál pre veľa konfliktov.

Pre príspevky je na hlavnej stránke pridaná povinná cesta /blog/, aby sa zabránilo kolíziam s sieťovými stránkami. To znamená, že priľnavé permalienky ako „Názov príspevku“ budú predstavené ako domain.name/blog/post-name/.

<!-- Zobrazenie obrázka nedostupné: nastavenia permalieniek WordPressu ukazujúce cestu /blog/ v podkatalógovej konfigurácii -->

Pri konfigurácii **subdomény** táto akcia nie je potrebná, pretože každá sieťová stránka získa výhodu úplného oddelenia domény a preto nemusí závisieť na jednej ceste. Namísto toho udržiavajú svoje vlastné odlišné cesty na základe ich **subdomény**.

<!-- Zobrazenie obrázka nedostupné: nastavenia permalieniek WordPressu pre konfiguráciu subdomény -->

#### Statické stránky

V konfiguracii _subdirectory_ sa potenciál pre názvoných konfliktov sa rozširuje aj na statické stránky ako hlavná stránka a siete používajú rovnakú cestu.

Aby sme s týmto zabránili, WordPress poskytuje spôsob, ako zablokovať určité názvy sit, aby sa nekonfliktovali s názvom prvej stránky. Typicky by si sieťový administrátor zadal základné cesty stránok hlavnej stránky.

<!-- Zobrazenie snímky obrazovky nedostupné: nastavenia siete WordPress ukazujúce zablokované názvy sit na prevenciu konfliktov -->

V konfiguracii _subdomain_ je možnosť názorov konfliktu minimalizovaná pomocou _subdomény_, pretože je unikátna pre sieťový sit a nemá žiadny vzťah k hlavnej stránke.

### Registrácia

V sieti nastaveniach WordPress Multisite je k dispozícii niekoľko nových možností registrácie používateľov, ktoré umožňujú novým a existujúcim používateľom vytvárať sita.

<!-- Zobrazenie snímky obrazovky nedostupné: nastavenia siete WordPress Multisite ukazujúce možnosti registrácie -->

Vopredných instalácií WordPress nie sú k dispozícii zvyčajné možnosti, ktoré umožňujú registráciu používateľov alebo priradenie týchto registrácií rôznym rolám.

<!-- Zobrazenie snímky obrazovky nedostupné: nastavenia registrácie používateľov na samostatnej stránke WordPress ukazujúce obmedzené možnosti -->

Keď sa vytvárajú účty používateľov, sú tieto účty generované na úrovni siete. Preto namiesto toho, aby patrí ich k nejakej konkrétnej stránke, patrí im sieť. Toto má niektoré charakteristické výhody a nevýhody.

Na príklade, predpokladajme, že váš WordPress Multisite je v podnimo novinárstva a informácií. Vytvoríte si potom multisite a vytvoríte sieťové siete pre finančnú, technickú, rozrywkovú a iné oblasti záujmu, pričom zachovávate celkovú kontrolu nad pluginmi a témami. Každá sieťová siť bude na svojom mieste mať oveľa väčšiu kontrolu nad vzhľadom a užívateľským zážitkom svojej siete ako to by mali typové posttypy alebo bežné kategórie prístupu.

Do tejto míry, keď sa používateľ prihlási, prihláša sa do siete a v konečnej chode je prihlášen na každú sieťovú sieti takto, aby poskytol plynulý zážitok. Ak by ste váš nový web bol založený na predplatnom modelu, bolo by to ideálne riešenie a výsledok.

Ak však určený charakter a účel multisite boli ponúknuť rozporúčané sieťové siete bez vzájomnej vzťahu, je tém neredíadne, že budú potrebné externé alebo doplnkové pluginy na manipuláciu s rolohami používateľov.

### Doména a SSL

Prečítajte si o inštalácii WordPress Multisite, ktorá sa skoro neobjavuje – Wordpress.com. Je to najrozšírenejší príklad WordPress multisite a ukazuje jeho rozsáhlé schopnosti byť prispôsobený a tvarovaný na splnenie určitého účelu.

Dnes v modernom internete je použitie SSL tém neredíadne povinné, a administrátorov sieťových sietí WordPress Multisite im sa čoskoro predchádzajú tieto výzva.

Pri konfigurácii s poddoménkou (subdomain) sú siete vytvárané na základe základnej domény. Týmto spôsobom by bolo vytvorené siete označené ako ‘site1’ ako ‘site1.domain.com’. Použitím wildcard SSL certifikátu môže sieťový administrátor úspešne riešiť túto výzva a poskytnúť schopnosť šifrovania SSL pre sieti.

WordPress Multisite obsahuje funkciu mapovania domén, ktorá umožňuje spojené siete (network sites) s prispôsobenými doménami alebo doménami, ktoré sú rôzne od základnej domény siete.

Pre administrátorov siete predstavuje to ďalšiu vrstvu zložitosti ako pri konfigurácii názvov domén a tak pri vydávaní a údržbe SSL certifikátov.

Do určitej miery, hoci WordPress Multisite poskytuje spôsob, ako mapovať [www.anotherdomain.com](http://www.anotherdomain.com) na „site1“, administrátor siete zostáva s výzvou externého správy záznamov DNS a implementácie SSL certifikátov.

## Ultimate Multisite

S pochopením rozdielov medzi samostatnou inštaláciu WordPressu a inštaláciu Multisite si pozrime, ako je Ultimate Multisite ultimátna zbra pre poskytovanie webových stránok ako služby (Website as a Service).

### Úvod

Ultimate Multisite je váš šвейцарský nož v tom, čo ide o vytváranie Webové služby (WaaS). Predstavte si Wix.com, Squarespace, WordPress.com a potom si predstavte vlastnenie vlastnej služby.

Pod kapochou používa Ultimate Multisite WordPress Multisite, ale robí to spôsobom, ktorý nielen rieši množstvo problémov, ktoré sa s siete spojenými inštaláciami objavujú, ale zároveň zlepšuje schopnosti a umožňuje podporiť širokú škálu prípadov použitia.

V nasledujúcich sekciách si podimeme niektoré bežné prípadové použitia a potrebná zváženia pre ich podporu.

### Prípady použitia

#### Prípad 1: Agentúra

Typické základné zručnosti agentúry sú obvykle v návrhu webových stránok s aspekтами ako ich hostovanie alebo marketing, ktoré sú uvedené ako doplnkové služby.

Pre agentoch Ultimate Multisite ponúka neuviaryhodú hodnotu vďaka schopnosti hostiť a spravovať viacero webových stránok na jednej platforme. Je to ešte aj pre agentúry, ktoré štandardizujú svoje dizajny na konkrétnych témach ako GeneratePress, Astra, OceanWP alebo iných – môžu využiť schopnosti Ultimate Multisite na automatické aktivovanie týchto tém pre každú novú webovku.

Podobne ako je obrovské množstvo ponúk pre ceny agentských pluginov a populárnych doplnkov, použitie Ultimate Multisite umožňuje agentúrom využiť existujúce investície tým, že poskytnú spoločnú platformu, z ktorej môžu byť pluginy nainštalované, udržiavané a využívané.

Najčastejšie sa bude požadovať konfigurácia a šťastne to Ultimate Multisite urobí jednoduchým procesom mapovania domén a SSL certifikátov pomocou svojich integrácií s rôznymi poskytovateľmi hostingu ako aj službami ako Cloudflare a cPanel.

Týmto spôsobom, využitím jedného z týchto poskytovateľov alebo umiestnením Ultimate Multisite za Cloudflare, aspekty správy domén a SSL certifikátov sa stávajú zatiaľ jednoduchými.

Agentúry, ktoré preferujú mať pevný kontrolu nad vytváraním webových stránok, si budú odporucať jednoduchosť, s ktorou môžu vytvárať webové stránky a spárovať ich s klientmi a plánmi pomocou upraveného rozhrania Ultimate Multisite.

![Ultimate Multisite site management interface](/img/admin/sites-list.png)

Kontrola nad pluginmi a témami je zachovaná na úrovni konkrétneho produktu pomocou intuitívnych rozhraní, ktoré umožňujú disponibilnú alebo skrytú byť pluginom a témou takzeraz, ako sa inicializuje pre novú webovku.

![Product plugin limitations interface](/img/config/product-plugins.png)

Témy ponúkajú podobnú funkčnosť, ktorá umožňuje aktivovať alebo skryť konkrétne témy pri vytváraní webu.

![Rozhranie obmedzení témy produktu](/img/config/product-themes.png)

Agencie si s Ultimate Multisite môžu spokojne povedať a robiť to, čo robia najlepšie – navracať výnimočné webové stránky.

#### Študium 2: Špecializovaný poskytovateľ

Existuje stará poviedka, ktorá hovorí: „urob jedno a urob to dobre“. Pre mnohých špecialistov to znamená vytvoriť produkt alebo službu okolo jedného základného nápadu.

Možno ste vášnivý golfista, ktorý promove webové stránky klubom, alebo možno ste vášnivý e-sportový hráč, ktorý poskytuje webové stránky klanom. Možno individuálne promítate službu rezervácie pre reštaurácie?

Pre mnohé dôvody by ste chceli poskytovať služby na základe bežného rámca a platformy. Môže to byť to, že ste navrhli alebo investovali do špeciálnych pluginov, aby ste poskytli potrebnú funkčnosť, alebo môže byť prípadné, že priemyselné najlepšie praxe vyžadujú určitý štandardizovaný prístup k návrhu.

Jednou z inovatívnych vlastností Ultimate Multisite je použitie šablonových sítí (template sites). Šablónová sieť je sieť, kde je nainštalovaná a aktivovaná téma, nainštalované a aktivované nevyhnutné pluginy a vytvorené vzorové príspevky alebo stránky. Keď zákazník vytvorí novú sieť na základe šablóny, obsah a nastavenia šablóny sa kopírovania do novovytvorených stránok.

Pre poskytovateľa špecializovaných sítí a služieb to je neporovnateľná výhoda v schopnosti okamžite vytvoriť sieť pripravenú na použitie s prispôsobenými pluginmi a návrhom. Zákazník potrebuje len poskytnúť najminimálnu vstup, aby bol služba dokončená.

V závislosti od požiadaviek sa môžu hodia konfigurácie s podkategóriami (_subdirectory_) alebo s poddoménami (_subdomain_), v ktorých prípade by architektonické výbory boli medzi jednoduchým SSL certifikátom pre podkategórie alebo wildcard SSL certifikátom pre poddomény.

#### Úprava 3: Web hostovanie WordPressu

Existuje neviemocné množstvo spôsobov, ako hostovať WordPress webové stránky, ale zriedka je to tak jednoduché, ako poskytnúť zákazníkovi webové priestory s predinstalovanou verzou WordPressu. Je to preto, že potrebná je spoložka niekoľkých rozhodnutí a ohľadov na poskytnutie relevantného služieb.

Ultimate Multisite vyniká v tejto oblasti tým, že poskytuje komplexné riešenie typu "turnkey" pre hostovanie WordPress webových stránok. Do riešenia sú zahrnuté základné mechanizmy pre poskytovanie predplatných služieb, zbieranie platení, formuláre na objednávku, zľavné vety a komunikáciu s klientmi.

Veľa integrovaného práce potrebných na správne nainštalovanie, nakonfigurovanie a udržiavanie WordPress Multisite je uľahčuje Ultimate Multisite tak, že si sieťové administrátory musia zvážiť len aspekty týkajúce sa ich služby alebo špecializácie, ako sú úrovne produktov, cenník a ponuky služieb.

Pre vývojárov, ktorí chcú integrovať s Ultimate Multisite, riešenie ponúka tiež komplexnú RESTful API a Webhooks pre upozornenia na udalosti.

Bez závislosti na neviemocnom množstve externých pluginov a licencií poskytuje Ultimate Multisite bohaté funkčnosť a porovnateľné riešenie ako Wix, Squarespace, WordPress.com a iné.

### Architektonické zváženia

Hoci nie je to komplexný návod, nasledujúce body by mali slúžiť ako smerovanie pri správnom výbere technológií na podporu inštalácie Ultimate Multisite.

#### Splnené vs. Vlastné hostovanie

Niestety nie všetky hostovi poskytovatelia sú rovnaké, a niektoré pracujú s extrémne hustotou serverov. Nízkoskladové poskytovatele typicky generujú príjem tým, že maximalizujú hustotu serverov. Preto môže byť vaše inštalácia Ultimate Multisite len jedna z niekoľkých striedov na tom istom servere.

Bez vhodných ochranných opatrení od poskytovateľa zažívajú striedy na zdieľanom serveri problém „hlučný sused“. To znamená, že sita na tom istom serveri spotrebuje tak veľa zasobností, že ostatné sitá musia súbeží s zvyšnými zasobnosťami. Často sa to objavuje ako sitá, ktoré sú pomalé alebo nereagujú včas.

Ako poskytovateľ webového hostingu sami bude to mať vplyv na to, že vaši zákazníci zažívajú zlé rýchlosti, nízké posadenie a vysokú mieru odchádzania, čo často viesť k odchodom zákazníkov, ktorí hľadajú služby inak.

Stručne povedané, nízke cena neoznačuje dobrú kvalitu.

Ultimate Multisite je známe to, že funguje s niekoľkými dobrými poskytovateľmi hostingu a dobre sa integruje do ich prostredia, aby poskytovalo funkcie ako mapovanie domén a automatické SSL. Tí poskytovatelia si vážia výkon a ponúkajú vyššiu kvalitu služieb ako zdieľaný hosting.

Pre zoznam kompatibilných poskytovateľov a kompletné pokyny na konfiguráciu pre každý si prosím pozrite dokumentáciu Kompatibilných poskytovateľov.

#### Zváženia týkajúce výkonu

Ultimate Multisite nie je pomáca aplikácia, skôr je úžasne rýchla. Je však tak dobrá ako podkladová aplikácia a infraštruktúra a môže využívať len to, k čemu má prístup.

Umyšľajte si to: ste si sieťovým administrátorom inštalácie Ultimate Multisite s 100 sitami. Niektoré z týchto sit sú v dobrom stave a atraia počet návštevníkov webových stránok každý deň.

Táto scénárium bylo by bol in inejnom na menšom rozsahu, napríklad pri jednom až päť sítioch, ale pred dlhým časom by sa problémy s rozmerom zjavili.

Ak je nepreriatený, jediný Ultimate Multisite site bude zodpovedný za splnenie požiadaviek všetkých návštevníkov sit. Tiež môžu byť požiadavky na dynamické PHP stránky alebo statické súbory ako stylesheets, javascript alebo media súbory. či je to jedna alebo sto sítioch sit, tieto úlohy sa stávajú opakujúcimi sa, monotónnymi a zbytočnými. Nie je nutné použiť CPU výkon a pamäť na spracovanie PHP súboru, ak je výstup ten istý statický informácia pre každý požiadanie.

Na podobný spôsob jedna požiadavka na PHP alebo HTML stránku generuje viacero nasledujúcich požiadaviek na skripty, stylesheets a obrázkové súbory. Tiež požiadavky sa priamo zameriavajú na váš Ultimate Multisite server.

Tento problém by bol jednoducho riešiť aktualizáciou servera, ale to neriešil sekundný problém – geografické latencie. Len viacero serverov v rôznych miestach by mohlo tento problém správne vyriešiť.

Preto najviac si sieťoví administrátori používajú prednejčátečné cache (front-end caching solutions) a siete distribúcia obsahu (CDN), aby splnili požiadavky na statické stránky. Splnenie týchto požiadaviek a servírovanie súborov pred tým, ako sa požiadavka dostane k serveru, ušetria procesné zdroje, eliminujú zpoždene a vyhýbajú nepotrebným aktualizáciám a maximalizujú investície do technológie.

Ultimate Multisite obsahuje sofistikovaný Cloudflare add-on, ktorý umožňuje sieťovým administrátorom svoje inštalácie umiestniť za Cloudflare a využívať nielen jeho schopnosti cacheovania, ale aj hosting DNS, SSL certifikáty a bezpečnostné mechanizmy.

#### Zálohy (Backups)

Ak by ste sa pýtal 50 ľudí o rady ohľadom záloh a dostali 50 rôznych názorov na stratégie záloh, odpoveď je: to závisí od toho.

Niečo, čo nie je pod sporom, to, že są potrebné zálohy a že je tém neredídeľné, aby ich správa bol riadený poskytovateľom, najmä ak sa jedná o poskytovateľa s riadeným službami. Preto zákazníci sa budú vamočť na sieťového administrátora za poskytnutím a správou tejto služby. Kto je však sieťový administrátor, je úplne iný problém.

Pre účely tejto sekcie si dohodneme, že záloha je momentálny odkaz stavu systému v čase iniciovania zálohy. Jednoducho povedané, akákoľvek chyba stav systému v čase zálohy sa zachytí a uloží v zálohe.

S týmto pochopením odpoveď na to, ako dosiahnuť zálohy a čo je najlepšie pre vaše okolie bude v podstate závisieť od vašich požiadaviek a schopnosti poskytovateľa hostingu ich splniť. Je však v poradí od najriadenších k najmenej riadeným ponukaniu, nasledujúce možnosti by mali poskytovať niečo ako smerovanie.

#### Snapshots (Záznamy stavu)

Snapshots sú zlatovláde (silver bullets) pre zálohy, pretože sú jednoduché, nekomplikované (kým sa nechce obnoviť) a "fungujú". Vyžadujú však pomoc vášho poskytovateľa a platia hlavne, ak máte VPS (Virtual Private Server) alebo podobný. Niektorí poskytovatelia uvedení v našej dokumentácii o kompatibilných poskytovateľoch ponúkajú zálohy, ktoré vyžadujú žiadnu ďalšiu intervenciu ani zváženie zo strany sieťového administrátora.

Kde tradičné zálohy sa zameriavajú na súbory a databázy, snapshot sa zameriava na celý disk. To znamená, že do snapshotu je zachytaná nie len dátité webovej stránky, ale aj operačný systém a konfigurácia. Pre mnohých je to výrazná výhoda, pretože z snapshotu je možné téměř okamžite vytvoriť novú sieť a nasadit ju na miesto zlyhalého prístupu. Podobne proces obnovy dát len vyžaduje pripojenie obrazovky snapshotu ako disku k existujúcej inštancii, aby sa súbory dajú prístupni a skopírovať.

Snapshoty môžu mať možnú extra cenu od hostiteľa, ale predstavujú požiarnú poľ (insurance policy) proti nehodám.

#### Externé skripty

Zdá sa, že je nejaký nedostatok externých skriptov a riešení na zálohu zdrojov WordPressu a MySQL, ktoré by sa skvele hodili pre Ultimate Multisite, pretože je to plugin WordPressu, ktorý využíva súborový systém a databázu WordPressu. Preto riešenie, ktoré zálohuje webové stránky WordPressu, adekvátne pokryje potreby Ultimate Multisite.

Nemôžeme odporúča žiadny skript nad iný, ale naša všeobecná rada je spustiť niekoľko testov zálohy a obnovy, aby ste si uistili, že výsledky sú požadované, a „buďte si istí“ cez nepretržitú hodnotenie skriptu a jeho funkčnosti, najmä tam, kde sa používa akýkoľvek typ strategie differencialnej zálohy.

Je warto si všimnúť, že tieto skripty počas bežného fungovania zvýšia náročnosť systému, čo je potrebné zohľadniť.

#### Pluginy

V WordPressu je skoro žiadny problém, ktorý by sa nemohol vyriešiť pluginom, a ak správanie externých skriptov nie je vaša silná stránka, možno je plugin najlepšou alternatívou.

Hocik sa pluginmi saúvary v možnostiach a funkciách, väčšina z nich vykonáva rovnakú úlohu, ktorou je vytvorenie kópie súborov WordPressu a dátovej databázy. Potom sa funkcie líšia, pretože niektoré pluginy môžu zálohy posielať na externé služby ako Google Drive alebo Dropbox, alebo na akýkoľvek kompatibilný službu pre ukladanie objektov, ako je S3, Wasabi alebo iné. Včesť komplexnejších pluginov poskytuje diferenciálne zálohy alebo niečo podobné, aby sa zabezpečilo zálohovanie len dát, ktoré sa zmenili, a tým sa ušetrí náklady na externú úložnicu.

Pri výbere svojho pluginu si pozorne skontrolujte, či je podporovaný v multisite. Kvôli jeho spôsobilosi chodia počas vykonávania zálohy môžete očakávať dočasné zaťaženie servera, kým proces nehotoví.

#### Domén a SSL

O doménach v režime _subdomain_ v multisite sa už bolo diskutovať veľa. Prasi almost univerzálnym riešením pre sieti správcov je využívať wildcard DNS záznamy.

![Príklad konfigurácie wildcard DNS záznamu](/img/config/settings-domain-mapping.png)

Tento typ DNS záznamu úspešne presmeruje _subdomény_ ako 'site1.domain.com' a 'site2.domain.com' na IP adresu 1.2.3.4, čo podporuje Ultimate Multisite a v širšom rozsahu WordPress Multisite v režime _subdomain_.

Toto môže fungovať skvele aj s HTTP, pretože cieľový host je čítaný z HTTP hlavičky, ale dnes web je zvyčajne tak jednoduchý, že zabezpečené HTTPS transakcie sú tém neredky povinné.

Našťast sú jednoduché možnosti pre SSL certifikáty. V režime _subdirectory_ môžete použiť štandardný doménový certifikát. Tieto sú k dispozícii bez komplikácií od poskytovateľov hostingu, ktorí môžu používať bezplatný servis LetsEncrypt alebo iné zdroje. Inak je ich komerčnej dostupných od autoritatívnych orgánov, ak máte možnosť vygenerovať certifikát signing request (CSR).

Pre režim _subdomain_ bude použitie wildcard SSL certifikátu skvele spárovať s wildcard doménou a umožní certifikátu fungovať ako autoritárny pre základnú doménu a všetky _subdomény_ bez nečinných konfigurácií.

Je však potrebné poznam, že wildcard SSL certifikáty nemusí fungovať s službami ako Cloudflare, ak nie ste na enterprise pláne alebo si nastavíte vstup len v DNS, v ktorom sa všetko cacheovanie a optimalizácia vymazie.

Ultimate Multisite zobrazený pri prvom spustení (out-of-the-box) poskytuje riešenie pre tento problém a ukazuje naše rozsáhlé skúsenosti s potrebami WordPress multisite. Aktivácia to jednoduchého addonu umožní Ultimate Multisite využiť vaše Cloudflare údaje na automatické pridávanie DNS záznamov pre sieťové siete do Cloudflare a nastaví ich režim na „proxied“. Takto bude každý sieťový subdoména, keď sa vytvorí, mať plnú ochranu a výhody Cloudflare vrátane SSL.

V závislosti od charakteru a účelu vašej inštalácie Ultimate Multisite môže byť potrebné, aby zákazníci používali vlastné domény. V tomto prípade je sieťový administrátor zodpovedný za riešenie dvoch problémov: jedno, hostovanie názvu domény a druhé, SSL certifikáty pre tú doménu.

Pre mnohým je používanie Cloudflare jednoduchá možnosť. Uživatelia sa len musia svoje doménu pridať do Cloudflare, ukázať CNAME na základnú doménu Ultimate Multisite a mapovať svoju doménu v Ultimate Multisite, aby mohli začať využívať svoje vlastné doménové meno.

Cesto je potrebné hľadať alternatívne riešenia, prečo odporúča Ultimate Multisite zoznam Kompatibilných poskytovateľov (Compatible Providers). Je to preto, že proces nastavovania DNS a SSL môže byť nejednoduchý. Avšak s integráciou Ultimate Multisite s týmito poskytovateľmi je zložitost výrazne znížená a postup je automatizovaný.

#### Plugins

Je veľmi pravdepodobné, že budete potrebovať extra pluginy na poskytnutie funkčnosti pre vaše zákaznícke alebo siatkové siete. Chcú všetky pluginy fungovať s WordPress Multisite a Ultimate Multisite? To závisí od toho.

Hoci väčšina pluginov je nainštalovatelná do WordPress Multisite, ich aktivácia a licencovanie sa líšia od autora k autorovi.

Výzva spočíva v tom, ako sa licencovanie aplikuje pri niektorých pluginoch, ktoré vyžadujú licenciu na základe jednotlivých domén. To znamená, že pre niektoré pluginy musí administrátor siete manuálne aktivovať licenci pre každý plugin na každú novú siatkovú stránku.

Preto je možno najlepšie skontrolovať u autora pluginu, ako funguje jeho plugin s WordPress Multisite a aké sú špeciálne požiadavky alebo postupy potrebné na jeho licencovanie.
