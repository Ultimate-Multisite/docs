---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101

Ultimate Multisite je plugin pro WordPress Multisite, který vám umožňuje nabízet zákazníkům WaaS neboli Websites as a Service (weby jako služba). Než se ponoříme do toho, jak může Ultimate Multisite pomoci vašemu podnikání i zákazníkům, musíme si nejprve osvojit některé základní znalosti.

## WordPress Multisite

Většina z nás zná běžnou instalaci WordPressu. Buď ji vytvoříte přes ovládací panel vašeho poskytovatele hostingu, nebo – pokud jste odvážnější – nastavíte nový webový server a databázi, stáhnete základní soubory a spustíte instalační proces.

Takto fungují miliony WordPress webů po celém světě, ale z pohledu agentury nebo poskytovatele hostingu si pojďme chvíli povídat o objemech.

Vytvořit jeden WordPress web nebo dokonce stovku přes automatizovaný ovládací panel je hračka, ale problémy se začnou objevovat ve chvíli, kdy přijde na správu těchto webů. Bez správy se stáváte snadným cílem pro malware. Správa však znamená vynaložení úsilí a zdrojů, a přestože existují externí nástroje a pluginy, které pomáhají zefektivnit správu a administraci WordPress webů, skutečnost, že zákazníci mají administrátorský přístup, znamená, že toto úsilí může být snadno zmařeno.

WordPress ve svém jádru poskytuje funkci jednoduše nazvanou „Multisite", která má své kořeny v roce 2010 při spuštění WordPressu 3.0. Od té doby prošla řadou revizí zaměřených na přidávání nových funkcí a zpřísnění bezpečnosti.

WordPress Multisite si lze představit takto: Univerzita spravuje jedinou instalaci WordPressu, ale každá fakulta má svůj vlastní WordPress web.

Pojďme si tento výrok rozebrat a podívat se na základní terminologii přítomnou nejen v dokumentaci Ultimate Multisite, ale i v celé WordPress komunitě.

### Síť

V terminologii WordPressu je multisite síť prostředí, kde lze spravovat více podwebů z jediného dashboardu. Ačkoli se vytvoření multisite sítě liší mezi poskytovateli hostingu, výsledkem je obvykle několik dodatečných direktiv v souboru wp-config.php, které WordPressu sdělují, že pracuje v tomto specifickém režimu.

Mezi multisite sítí a samostatnou instalací WordPressu existuje řada výrazných rozdílů, které si stručně probereme.

#### Subdoména vs. podadresář

Jedno z prvních rozhodnutí, které budete muset učinit, je, zda bude multisite instalace pracovat s _podadresáři_ nebo _subdoménami_. Ultimate Multisite funguje stejně dobře s oběma variantami, ale mezi těmito dvěma konfiguracemi existují určité architektonické rozdíly.

V konfiguraci s _podadresáři_ síťové weby dědí cestu založenou na hlavním doménovém jménu. Například síťový web označený jako „site1" bude mít svou úplnou URL jako https://domain.com/site1. V konfiguraci se _subdoménami_ bude mít síťový web vlastní _subdoménu_ odvozenou od hlavního doménového jména. Web označený jako „site1" tak bude mít svou úplnou URL jako https://site1.domain.com/.

Obě varianty jsou naprosto validní, použití _subdomén_ však nabízí řadu výhod, ale také vyžaduje více promyšlení a plánování architektury.

Z hlediska DNS představuje použití _podadresářů_ relativně jednoduchý úkol. Jelikož jsou síťové weby jednoduše potomky rodičovské cesty, stačí pouze jeden záznam doménového jména pro hlavní doménu. U _subdomén_ je úkol o něco složitější a vyžaduje buď samostatný CNAME záznam pro každý síťový web, nebo zástupný znak (*) v DNS záznamech.

Další oblast k zvážení je SSL a vydávání a používání SSL certifikátů. V konfiguraci s _podadresáři_ lze použít jeden doménový certifikát, protože síťové weby jsou jednoduše cestami hlavního doménového jména. Certifikát pro domain.com tak adekvátně poskytne SSL pro https://domain.com/site1, https://domain.com/site2 a tak dále.

V konfiguraci se _subdoménami_ je jednou z nejběžnějších možností použití wildcard SSL certifikátu. Tento typ SSL certifikátu poskytuje šifrování pro doménu a její _subdomény_. Wildcard SSL certifikát tedy poskytne šifrování pro https://site1.domain.com, https://site2.domain.com a samotnou https://domain.com.

Ačkoli existují i jiné možnosti, ty jsou často omezené v rozsahu a použití a vyžadují dodatečnou konfiguraci a zvážení vhodnosti.

#### Pluginy a šablony

Co WordPress dává, to také bere, alespoň z pohledu zákazníka. V samostatné instalaci WordPressu, pokud administrátor webu nainstaluje špatný plugin nebo neudržuje svou instalaci aktuální, jediná oběť tohoto činu je on sám. Nicméně administrátor webu instalující špatný plugin na multisite instalaci z každého webu v síti dělá oběť.

Z tohoto důvodu, když je WordPress nakonfigurován jako multisite, odebírá administrátorům webů schopnost instalovat pluginy a šablony a místo toho přesouvá tuto schopnost na nově vytvořenou roli síťového administrátora neboli „super admina". Tato privilegovaná role pak může rozhodnout, zda povolit administrátorům síťových webů vidět nebo přistupovat k menu pluginů v jejich dashboardu, a pokud ano, zda se taková oprávnění vztahují na _aktivaci_ nebo _deaktivaci_ pluginů.

V tomto rozsahu je síťový administrátor zodpovědný za instalaci pluginů a šablon do sítě a deleguje oprávnění k používání těchto pluginů a šablon na síťové weby. Administrátoři webů nemohou instalovat pluginy a šablony ani přistupovat k pluginům a šablonám nepřiřazeným jejich webu.

#### Uživatelé a administrátoři

Ve WordPress Multisite všechny síťové weby sdílejí stejnou databázi, a proto sdílejí stejné uživatele, role a schopnosti. Nejvýstižnější způsob, jak o tom přemýšlet, je, že všichni uživatelé jsou členy sítě, nikoli konkrétního webu.

S ohledem na toto pochopení může být nežádoucí povolit vytváření uživatelů, a z tohoto důvodu WordPress Multisite odebírá tuto schopnost administrátorům webů a přesouvá ji na síťového administrátora. Ten pak může delegovat potřebná oprávnění administrátorovi webu, aby mu umožnil vytvářet uživatelské účty pro jeho vlastní web.

<!-- Screenshot unavailable: WordPress Multisite network user management interface -->

Opakujeme výše uvedené – ačkoli se uživatelské účty zdají být spojeny s webem, ve skutečnosti jsou přiděleny síti, a proto musí být v rámci sítě unikátní. Mohou existovat případy, kdy nelze uživatelská jména registrovat právě z tohoto důvodu.

Ačkoli to není cizí koncept v podnikových systémech, tento jediný zdroj registrace a autentizace uživatelů je často obtížně pochopitelný pro lidi zvyklé na samostatné instalace WordPressu, kde je správa uživatelů poněkud jednodušší.

#### Média

Zatímco síťové weby sdílejí jednu databázi ve WordPress Multisite, udržují si oddělené cesty v souborovém systému pro mediální soubory.

Standardní umístění WordPressu (wp-content/uploads) zůstává; nicméně jeho cesta je upravena tak, aby odrážela unikátní ID síťového webu. V důsledku toho se mediální soubory pro síťový web zobrazují jako wp-contents/uploads/site/[id].

#### Trvalé odkazy

Dříve jsme zmínili, že _subdomény_ mají výrazné výhody oproti konfiguraci s _podadresáři_, a tady je to: cesty.

V konfiguraci s _podadresáři_ musí hlavní web (první web vytvořený při založení sítě) a síťové podweby sdílet stejnou cestu vedoucí od doménového jména. To má potenciál pro velké množství konfliktů.

Pro příspěvky je na hlavní web přidána povinná cesta /blog/, aby se předešlo střetům se síťovými weby. To znamená, že pěkné trvalé odkazy jako „Název příspěvku" budou prezentovány jako domain.name/blog/post-name/

<!-- Screenshot unavailable: WordPress permalink settings showing /blog/ path in subdirectory configuration -->

V konfiguraci se _subdoménami_ toto není nutné, protože každý síťový web má prospěch z úplného oddělení domén, a proto se nemusí spoléhat na jednu cestu. Místo toho si udržují své vlastní odlišné cesty založené na jejich _subdoméně_.

<!-- Screenshot unavailable: WordPress permalink settings for subdomain configuration -->

#### Statické stránky

V konfiguraci s _podadresáři_ se možnost konfliktu názvů rozšiřuje i na statické stránky, protože hlavní web a síťové weby sdílejí stejnou cestu.

Aby se tomu předešlo, WordPress poskytuje prostředky k zařazení určitých názvů webů na černou listinu, aby nekolidovaly s názvy prvního webu. Síťový administrátor by obvykle zadal kořenové cesty stránek hlavního webu.

<!-- Screenshot unavailable: WordPress network settings showing banned site names to prevent conflicts -->

V konfiguraci se _subdoménami_ je možnost konfliktu názvů zmírněna _subdoménou_, protože je unikátní pro síťový web a nijak nesouvisí s hlavním webem.

### Registrace

V nastavení sítě WordPress Multisite je k dispozici několik nových možností registrace uživatelů, které umožňují novým i stávajícím uživatelům vytvářet weby.

<!-- Screenshot unavailable: WordPress Multisite network settings showing registration options -->

Na rozdíl od samostatných instalací WordPressu síťové weby nemají k dispozici známé možnosti pro povolení registrace uživatelů nebo přiřazení těchto registrací k rolím.

<!-- Screenshot unavailable: WordPress standalone site user registration settings showing limited options -->

Když jsou vytvořeny uživatelské účty, tyto účty jsou generovány na úrovni sítě. Takže místo toho, aby patřily k jednomu konkrétnímu webu, patří síti. To má určité výrazné výhody i nevýhody.

Představte si například, že váš WordPress Multisite by byl v oboru zpravodajství a informací. Založili byste multisite a pak vytvořili síťové weby pro finance, technologie, zábavu a další oblasti zájmu, zatímco byste si udržovali celkovou kontrolu nad pluginy a šablonami. Každý síťový web by měl mnohem větší úroveň kontroly nad vzhledem a uživatelským zážitkem svého síťového webu, než by umožňovaly vlastní typy příspěvků nebo běžné kategorie příspěvků.

V tomto rozsahu, když se uživatel přihlásí, přihlásí se do sítě a v konečném důsledku je přihlášen i ke každému síťovému webu, což poskytuje bezproblémový zážitek. Pokud by váš nový web byl založen na předplatném, toto by bylo ideální řešení a výsledek.

Pokud by však zamýšlená povaha a účel multisite byla nabízet nesourodé síťové weby, které spolu nemají žádný vztah, je téměř vždy nutné použít externí nebo dodatečné pluginy k manipulaci s uživatelskými rolemi.

### Doména a SSL

Pojďme si povídat o instalaci WordPress Multisite, která nám téměř uniká – WordPress.com. Toto je zdaleka nejrozsáhlejší příklad WordPress multisite a demonstruje jeho rozsáhlé schopnosti být přizpůsoben a formován k naplnění účelu.

V dnešní době na moderním internetu je použití SSL téměř povinné a síťoví administrátoři WordPress multisite jsou brzy postaveni před tyto výzvy.

V konfiguraci se _subdoménami_ jsou weby vytvářeny na základě kořenového doménového jména. Web označený jako „site1" by tedy byl vytvořen jako „site1.domain.com". S využitím wildcard SSL certifikátu může síťový administrátor úspěšně vyřešit tuto výzvu a poskytnout schopnosti SSL šifrování pro síť.

WordPress Multisite obsahuje funkci mapování domén, která umožňuje síťovým webům být spojeny s vlastními doménovými jmény nebo doménovými jmény odlišnými od kořenové domény sítě.

Pro síťové administrátory to představuje dodatečnou vrstvu složitosti jak v konfiguraci doménového jména, tak ve vydávání a údržbě SSL certifikátů.

V tomto rozsahu, zatímco WordPress Multisite poskytuje prostředky k mapování [www.anotherdomain.com](http://www.anotherdomain.com) na „site1", síťový administrátor je ponechán s výzvou externě spravovat DNS záznamy a implementaci SSL certifikátů.

## Ultimate Multisite

S pochopením rozdílů mezi samostatnou instalací WordPressu a instalací Multisite se pojďme podívat na to, jak je Ultimate Multisite tím nejlepším arzenálem pro poskytování Websites as a Service.

### Úvod

Ultimate Multisite je váš švýcarský armádní nůž, pokud jde o vytváření Website as a Service (WaaS). Pomyslete na Wix.com, Squarespace, WordPress.com a pak si představte vlastnit svou vlastní službu.

Pod kapotou Ultimate Multisite využívá WordPress Multisite, ale činí tak způsobem, který nejen řeší nespočet výzev, kterým síťoví administrátoři čelí u multisite instalací, ale také rozšiřuje schopnosti umožňující podporu široké škály případů použití.

V následujících sekcích se podíváme na některé běžné případy použití a úvahy nutné k jejich podpoře.

### Případy použití

#### Případ 1: Agentura

Klíčové dovednosti agentury typicky spočívají v designu webových stránek, přičemž aspekty jako jejich hosting nebo marketing jsou uvedeny jako doplňkové služby.

Pro agentury představuje Ultimate Multisite neuvěřitelnou hodnotovou nabídku ve svých schopnostech hostovat a spravovat více webových stránek na jediné platformě. Ještě více pro agentury, které standardizují své designy na konkrétních šablonách jako GeneratePress, Astra, OceanWP nebo jiných, mohou využít schopnosti Ultimate Multisite automaticky aktivovat tyto šablony pro každý nový web.

Podobně s množstvím nabídek agenturních cen pro běžné a populární pluginy umožňuje použití Ultimate Multisite agenturám využít existující investice poskytnutím společné platformy, ze které lze pluginy instalovat, udržovat a využívat.

Pravděpodobně bude žádoucí použití konfigurace a naštěstí Ultimate Multisite neuvěřitelně usnadňuje mapování domén a SSL certifikátů díky svým integracím s řadou populárních poskytovatelů hostingu i se službami jako Cloudflare a cPanel.

Využitím jednoho z těchto poskytovatelů nebo umístěním Ultimate Multisite za Cloudflare se aspekty jako správa domén a SSL certifikátů stávají poměrně triviálními.

Agentury, které preferují udržovat přísnou kontrolu nad vytvářením webů, ocení snadnost, s jakou mohou vytvářet weby a spojovat weby se zákazníky a plány prostřednictvím zjednodušeného rozhraní Ultimate Multisite.

![Rozhraní správy webů Ultimate Multisite](/img/admin/sites-list.png)

Přísná kontrola nad pluginy a šablonami je udržována na úrovni produktu prostřednictvím intuitivních rozhraní Ultimate Multisite, která umožňují pluginy a šablony zpřístupnit nebo skrýt, jakož i jejich stav aktivace při vytvoření nového webu.

![Rozhraní omezení pluginů produktu](/img/config/product-plugins.png)

Šablony poskytují podobnou funkcionalitu, umožňující konkrétní šablony aktivovat nebo skrýt při vytvoření webu.

![Rozhraní omezení šablon produktu](/img/config/product-themes.png)

Agentury najdou klid s Ultimate Multisite, který jim umožní dělat to, co dělají nejlépe – navrhovat výjimečné webové stránky.

#### Případ 2: Specializovaný poskytovatel

Existuje staré rčení, které říká: „Dělej jednu věc a dělej ji dobře." Pro mnoho specialistů to znamená vytvoření produktu nebo služby kolem jedné základní myšlenky.

Možná jste vášnivý golfista propagující weby klubům nebo možná jste vášnivý esports hráč poskytující weby klanům. Jednotlivec propagující rezervační službu restauracím možná?

Z mnoha důvodů byste chtěli poskytovat služby založené na společném frameworku a platformě. Může to být tím, že jste navrhli nebo investovali do zakázkových pluginů k poskytnutí požadované funkcionality, nebo může být případ, kdy nejlepší postupy v odvětví vyžadují nějakou formu standardizovaného přístupu k designu.

Jednou z inovativních funkcí Ultimate Multisite je použití šablonových webů. Šablonový web je takový, kde byla šablona nainstalována a aktivována, potřebné pluginy nainstalovány a aktivovány a vzorové příspěvky nebo stránky vytvořeny. Když zákazník vytvoří nový web na základě šablony, obsah a nastavení šablony jsou zkopírovány do nově vytvořeného webu.

Pro poskytovatele specializovaných webů a služeb to poskytuje bezkonkurenční výhodu ve schopnosti okamžitě vytvořit web připravený k použití s vlastními pluginy a designem. Zákazník potřebuje poskytnout pouze minimální vstup k dokončení služby.

V závislosti na požadavcích mohou vyhovovat jak konfigurace s _podadresáři_, tak se _subdoménami_, v takovém případě by architektonické volby byly mezi jednoduchým SSL certifikátem pro _podadresáře_ nebo wildcard SSL certifikátem pro _subdomény_.

#### Případ 3: WordPress webhosting

Existuje nespočet způsobů, jak hostovat WordPress weby, ale zřídkakdy je to tak jednoduché jako poskytnout webový prostor zákazníkovi s předinstalovanou verzí WordPressu. Je to proto, že řada rozhodnutí a úvah musí být spojena dohromady, aby byla poskytnuta smysluplná služba.

Ultimate Multisite v této oblasti vyniká poskytováním komplexního řešení na klíč pro hosting WordPress webů. V řešení jsou zahrnuty základní mechanismy pro poskytování předplatitelských služeb, vybírání plateb, pokladní formuláře, slevové kupóny a komunikaci se zákazníky.

Většina integrální práce potřebné ke správné instalaci, konfiguraci a údržbě WordPress Multisite je usnadněna Ultimate Multisite do té míry, že síťoví administrátoři potřebují zvážit pouze aspekty vztahující se k jejich službě nebo specializaci, jako jsou produktové úrovně, ceny a nabídky služeb.

Pro vývojáře, kteří si přejí integrovat s Ultimate Multisite, řešení také nabízí komplexní RESTful API a Webhooky pro notifikace událostí.

Bez spoléhání na nespočet externích pluginů a licencí poskytuje Ultimate Multisite funkčně bohaté a srovnatelné řešení s Wix, Squarespace, WordPress.com a dalšími.

### Architektonické úvahy

Ačkoli se nejedná o komplexního průvodce, následující body by měly sloužit jako návod ke správnému výběru technologií pro podporu instalace Ultimate Multisite.

#### Sdílený vs. dedikovaný hosting

Bohužel ne všichni poskytovatelé hostingu jsou si rovni a někteří praktikují extrémní hustoty serverů. Nízkonákladoví poskytovatelé typicky generují příjmy maximalizací hustoty serverů. Vaše instalace Ultimate Multisite tak může být jen jedním z několika set webů na stejném serveru.

Bez odpovídajících ochranných opatření od poskytovatele zažívají weby na sdíleném serveru problém „hlučného souseda". To znamená, že web na stejném serveru spotřebovává tolik zdrojů, že ostatní weby musí soutěžit o zbývající zdroje. Často se to projevuje jako weby, které jsou pomalé nebo nereagují včas.

Jako poskytovatel webhostingu se následné efekty projeví tím, že vaši zákazníci zažívají nízké rychlosti, nízké hodnocení stránek a vysokou míru odchodů, což často vede k odchodu zákazníků, kteří hledají služby jinde.

Stručně řečeno, levné neznamená dobré.

Je známo, že Ultimate Multisite funguje s řadou dobrých poskytovatelů hostingu a dobře se integruje s jejich prostředím pro poskytování funkcí jako mapování domén a automatické SSL. Tito poskytovatelé si cení výkonu a poskytují službu vyšší třídy než sdílený hosting.

Seznam kompatibilních poskytovatelů a kompletní pokyny k nastavení pro každého najdete v dokumentaci Kompatibilních poskytovatelů.

#### Úvahy o výkonu

Ultimate Multisite není pomalá aplikace, naopak je pozoruhodně rychlá. Nicméně funguje pouze tak dobře, jak dovoluje základní aplikace a infrastruktura, a může využívat pouze to, k čemu má přístup.

Zvažte toto: Jste síťový administrátor instalace Ultimate Multisite se 100 weby. Některé z těchto webů si vedou dobře a denně přitahují řadu návštěvníků.

Tento scénář by byl odlišný v menším měřítku, řekněme jednoho až pěti webů, ale než dlouho by byly problémy škálování zjevné.

Bez zásahu by jediný web Ultimate Multisite byl zodpovědný za vyřizování požadavků všech návštěvníků webů. Tyto požadavky by mohly být na dynamické PHP stránky nebo statické prostředky jako styly, JavaScript nebo mediální soubory. Ať už jeden nebo sto webů, tyto úkoly se stávají opakovanými, monotónními a plýtvavými. Není nutné používat CPU výkon a paměť ke zpracování PHP souboru, když výstupem jsou stejné statické informace pro každý požadavek.

Podobně jeden požadavek na PHP nebo HTML stránku následně generuje více navazujících požadavků na skripty, styly a obrazové soubory. Tyto požadavky jsou směřovány přímo na váš server Ultimate Multisite.

Tento problém by šlo snadno vyřešit upgradem serveru, ale to neřeší sekundární problém – geografické latence. Pouze více serverů na více místech by tento problém mohlo správně řešit.

Z tohoto důvodu většina síťových administrátorů využívá řešení front-end cachování a sítě pro distribuci obsahu (CDN) k vyřizování požadavků na statické stránky. Vyřizování těchto požadavků a servírování prostředků před tím, než požadavek dosáhne serveru, šetří výpočetní zdroje, eliminuje zpoždění, zabraňuje zbytečným upgradům a maximalizuje technologické investice.

Ultimate Multisite obsahuje sofistikovaný doplněk Cloudflare, který síťovým administrátorům umožňuje umístit jejich instalace za Cloudflare a využívat nejen jeho cachovací schopnosti, ale také DNS hosting, SSL certifikáty a bezpečnostní mechanismy.

#### Zálohy

Můžete se zeptat 50 lidí na rady ohledně záloh a dostanete 50 různých názorů na strategie zálohování. Odpověď je – záleží na okolnostech.

Co není sporné, je to, že zálohy jsou nutné a že je téměř nepředstavitelné, aby je nespravoval poskytovatel, konkrétně ten, který nabízí spravovanou službu. V důsledku toho budou zákazníci očekávat, že síťový administrátor poskytne a spravuje tuto službu. Na koho se obrací síťový administrátor, je zcela jiný problém.

Pro účely této sekce se shodněme, že záloha je kopie stavu systému v okamžiku, kdy byla záloha zahájena. Jednoduše řečeno, jakýkoli stav systému v době zálohy je zachycen a uzamčen v záloze.

S tímto pochopením bude odpověď na to, jak dosáhnout záloh a co je nejlepší pro vaše prostředí, do značné míry záviset na vašich požadavcích a schopnosti poskytovatele hostingu tyto požadavky splnit. Nicméně v pořadí od nejvíce názorového k nejméně názorovému by níže uvedené možnosti měly poskytnout určitý návod.

#### Snapshoty

Snapshoty jsou stříbrné kulky zálohování, protože jsou snadné, nekomplikované (dokud nechcete obnovit) a „prostě fungují". Vyžadují však určitou pomoc od vašeho poskytovatele a většinou platí pouze tehdy, pokud máte VPS (virtuální privátní server) nebo podobné. Několik poskytovatelů uvedených v naší dokumentaci „Kompatibilních poskytovatelů" nabízí zálohy nevyžadující žádný další zásah nebo úvahu síťového administrátora.

Zatímco tradiční zálohy cílí na soubory a databáze, snapshot cílí na celý disk. To znamená, že ve snapshotu jsou zachycena nejen data webu, ale také operační systém a konfigurace. Pro mnohé je to výrazná výhoda, protože nový systém může být téměř okamžitě vytvořen ze snapshotu a uveden do provozu k nahrazení nefunkční instance. Podobně proces obnovy k získání souborů vyžaduje pouze připojení obrazu snapshotu jako disku k existující instanci, aby soubory mohly být přístupné a zkopírovány.

Snapshoty mohou vyžadovat dodatečné náklady u poskytovatele hostingu, ale jsou pojistkou proti nehodám.

#### Externí skripty

Zdá se, že neexistuje nedostatek externích skriptů a řešení pro zálohování WordPress a MySQL zdrojů a ty by fungovaly dobře pro Ultimate Multisite, protože je to WordPress plugin využívající souborový systém a databázi WordPressu. Řešení, které zálohuje WordPress weby, by tedy adekvátně pokrylo potřeby Ultimate Multisite.

Nemůžeme doporučit jeden skript před druhým, ale naše obecná rada je provést několik testů zálohování a obnovy, abyste se ujistili, že výsledky jsou žádoucí, a „být si jistý na 100 %" kontinuálním hodnocením skriptu a jeho funkcionality, konkrétně tam, kde je aplikována nějaká forma diferenciální strategie zálohování.

Je třeba poznamenat, že tyto skripty během běhu zvýší zatížení systému, což by mělo být vzato v úvahu.

#### Pluginy

Téměř neexistuje problém ve WordPressu, který by nemohl být vyřešen pluginem, a pokud správa externích skriptů není vaše šálka kávy, pak je možná plugin další nejlepší volbou.

Zatímco pluginy se liší v možnostech a funkcích, většinou plní stejnou funkci, a to vytvořit kopii WordPress souborů a obsahu databáze. Poté se funkcionality liší, protože některé pluginy mohou odesílat zálohy do externích služeb jako Google Drive nebo Dropbox nebo do nějakého druhu kompatibilní služby objektového úložiště jako S3, Wasabi nebo jiných. Komplexnější pluginy poskytují diferenciální zálohy nebo nějakou strategii k zálohování pouze dat, která byla změněna, aby se ušetřily náklady na externí úložiště.

Při výběru pluginu se ujistěte, že je multisite aware (podporuje multisite). Vzhledem k povaze provozu můžete během běhu zálohy očekávat dočasné zatížení serveru, dokud proces není dokončen.

#### Doména a SSL

Hodně už bylo diskutováno ohledně doménových jmen v režimu multisite se _subdoménami_. Téměř univerzálním řešením pro síťové administrátory je využití wildcard DNS záznamů.

![Příklad konfigurace wildcard DNS záznamu](/img/config/settings-domain-mapping.png)

Tento typ DNS záznamu úspěšně přeloží _subdomény_ jako „site1.domain.com" a „site2.domain.com" na IP adresu 1.2.3.4, čímž podporuje Ultimate Multisite a v širším měřítku WordPress Multisite používající režim _subdomén_.

To může fungovat perfektně pro HTTP, protože cílový hostitel je čten z HTTP hlaviček, ale web je v dnešní době zřídkakdy tak jednoduchý, kde jsou bezpečné HTTPS transakce téměř povinné.

Naštěstí existují snadné možnosti pro SSL certifikáty. V režimu _podadresářů_ lze použít běžný doménový certifikát. Ty jsou snadno a zdarma dostupné od poskytovatelů hostingu, kteří mohou používat bezplatnou službu LetsEncrypt nebo jiný zdroj. Jinak jsou komerčně dostupné od autorit, pokud jste schopni vygenerovat žádost o podpis certifikátu.

Pro režim _subdomén_ se wildcard SSL certifikát dokonale spáruje s wildcard doménou a umožní certifikátu být autoritativním pro kořenovou doménu a všechny _subdomény_ bez nadměrné konfigurace.

Nicméně je třeba poznamenat, že wildcard SSL certifikáty nemusí fungovat se službami jako Cloudflare, pokud nejste na enterprise plánu nebo nenastavíte záznam pouze na DNS, v takovém případě je veškeré cachování a optimalizace obejito.

Ultimate Multisite poskytuje řešení tohoto problému hned po vybalení, což demonstruje naše rozsáhlé zkušenosti s potřebami WordPress multisite. Aktivace tohoto jednoduchého doplňku způsobí, že Ultimate Multisite využije vaše přihlašovací údaje Cloudflare k automatickému přidání DNS záznamů pro síťové weby v Cloudflare a nastaví jejich režim na „proxied". Tímto způsobem bude každý síťový podweb po vytvoření mít plnou ochranu a výhody Cloudflare včetně SSL.

V závislosti na povaze a účelu vaší instalace Ultimate Multisite může existovat potřeba, aby zákazníci používali své vlastní domény. V tomto případě je síťový administrátor pověřen řešením dvou problémů. Za prvé, hosting doménového jména a za druhé, SSL certifikáty pro doménu.

Pro mnohé je použití Cloudflare snadnou volbou. Zákazník potřebuje pouze umístit svou doménu na Cloudflare, nasměrovat CNAME na kořenovou doménu Ultimate Multisite a namapovat svou doménu v Ultimate Multisite, aby začal využívat výhody svého vlastního doménového jména.

Mimo toto je třeba hledat alternativní řešení, což je důvod, proč Ultimate Multisite doporučuje seznam Kompatibilních poskytovatelů. Je to proto, že proces nastavení DNS a SSL může být netriviální proces. Nicméně s integrací Ultimate Multisite s těmito poskytovateli je složitost do značné míry odstraněna a procedura je automatizována.

#### Pluginy

Je vysoce pravděpodobné, že budete potřebovat dodatečné pluginy k poskytnutí funkcionality vašim zákazníkům nebo síťovým webům. Fungují všechny pluginy s WordPress Multisite a Ultimate Multisite? No, záleží na okolnostech.

Zatímco většina pluginů je instalovatelná ve WordPress Multisite, jejich aktivace a licencování se liší od autora k autorovi.

Výzva spočívá v tom, jak je licencování aplikováno, přičemž některé pluginy vyžadují licencování na základě domény. To by znamenalo, že pro některé pluginy musí síťový administrátor ručně aktivovat licenci pro každý plugin na každém novém webu.

Proto může být nejlepší ověřit u autora pluginu, jak by jejich plugin fungoval s WordPress Multisite a jaké jsou speciální požadavky nebo postupy potřebné k jeho licencování.
