---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101

Ultimate Multisite är ett WordPress Multisite-tillägg som gör det möjligt för dig att erbjuda WaaS eller Websites as a Service till kunder. Innan vi dyker in och lär oss hur Ultimate Multisite kan hjälpa din verksamhet och dina kunder finns det viss grundläggande kunskap vi behöver skaffa oss.

## WordPress Multisite

De flesta av oss är bekanta med den vanliga WordPress-installationen. Du skapar den antingen via kontrollpanelen hos din webbhotellsleverantör eller, för de modiga, konfigurerar en ny webbserver och databas, laddar ner kärnfilerna och påbörjar installationsprocessen.

Detta fungerar för miljontals WordPress-sajter över hela världen, men ur en byrås eller webbhotellsleverantörs perspektiv låt oss diskutera volymer en stund.

Även om det är enkelt att skapa en WordPress-sajt eller till och med hundra via en automatiserad kontrollpanel, börjar problem snart visa sig när det gäller att hantera dessa sajter. Utan hantering blir du ett utmärkt mål för skadlig kod. Att hantera innebär en ansträngning av kraft och resurser och även om det finns externa verktyg och tillägg tillgängliga för att effektivisera hanteringen och administrationen av WordPress-sajter, betyder det faktum att kunder behåller administrativ åtkomst att dessa insatser lätt kan motverkas.

I sin kärna tillhandahåller WordPress en funktion med det enkla namnet 'Multisite' som har sitt ursprung tillbaka till 2010 vid lanseringen av WordPress 3.0. Sedan dess har den fått ett antal revideringar som syftar till att introducera nya funktioner och stärka säkerheten.

I grund och botten kan en WordPress multisite tänkas så här: Ett universitet underhåller en enda installation av WordPress men varje fakultet underhåller sin egen WordPress-sajt.

För att bryta ner detta uttalande låt oss ta en titt på en del av den grundläggande terminologin som finns inte bara i Ultimate Multisites dokumentation utan även över hela WordPress-communityn.

### Nätverket

I WordPress-termer är ett multisite-nätverk där ett antal undersajter kan hanteras från en enda instrumentpanel. Även om skapandet av ett multisite-nätverk skiljer sig mellan webbhotellsleverantörer, är slutresultatet vanligtvis några ytterligare direktiv i wp-config.php-filen för att låta WordPress veta att det fungerar i detta specifika läge.

Det finns ett antal tydliga skillnader mellan ett multisite-nätverk och en fristående WordPress-installation som vi kort ska diskutera.

#### Subdomän kontra underkatalog

Ett av de mest omedelbara besluten du behöver fatta är om multisite-installationen ska fungera med _underkataloger_ eller _subdomäner_. Ultimate Multisite fungerar lika bra med båda valen men det finns vissa arkitektoniska skillnader mellan de två konfigurationerna.

I _underkatalog_-konfiguration ärver nätverkssajter en sökväg baserad på huvuddomännamnet. Till exempel kommer en nätverkssajt märkt 'site1' att ha sin fullständiga URL som https://domain.com/site1. I _subdomän_-konfiguration kommer nätverkssajten att ha sin egen _subdomän_ härledd från huvuddomännamnet. Således kommer en sajt märkt 'site1' att ha sin fullständiga URL som https://site1.domain.com/.

Även om båda alternativen är helt giltiga val, erbjuder användningen av _subdomäner_ ett antal fördelar men kräver också mer eftertanke och planering i sin arkitektur.

När det gäller DNS presenterar användningen av _underkataloger_ en relativt enkel utmaning. Eftersom nätverkssajter helt enkelt är barn till föräldasökvägen, behöver endast en enda domännamnpost finnas för huvuddomännamnet. För _subdomäner_ är utmaningen lite mer komplex och kräver antingen en separat CNAME-post för varje nätverkssajt eller en wildcard (*)-post i DNS-posterna.

Ett ytterligare område att överväga är SSL och utfärdandet och användningen av SSL-certifikat. I _underkatalog_-konfiguration kan ett enda domäncertifikat användas eftersom nätverkssajterna helt enkelt är sökvägar av huvuddomännamnet. Således kommer ett certifikat för domain.com att tillräckligt tillhandahålla SSL för https://domain.com/site1, https://domain.com/site2 och så vidare.

I _subdomän_-konfiguration är användningen av ett wildcard SSL-certifikat ett av de vanligaste alternativen. Denna typ av SSL-certifikat tillhandahåller kryptering för en domän och dess _subdomäner_. Därför kommer ett wildcard SSL-certifikat att tillhandahålla kryptering för https://site1.domain.com, https://site2.domain.com och https://domain.com själv.

Även om andra alternativ finns, är dessa ofta begränsade i omfattning och tillämpning och kräver ytterligare konfiguration och övervägande med avseende på lämplighet.

#### Tillägg och teman

Vad WordPress ger tar det också bort, åtminstone ur kundens perspektiv. I en fristående WordPress-installation om sajtadministratören installerar ett dåligt tillägg eller misslyckas med att hålla sin installation uppdaterad är det enda offret och förlusten de själva. Dock skapar en sajtadministratör som installerar ett dåligt tillägg på en multisite-installation ett offer av varje sajt installerad i nätverket.

Av denna anledning när WordPress är konfigurerat som en multisite tar det bort möjligheten från sajtadministratörer att installera tillägg och teman och flyttar istället denna möjlighet till en nyskapad nätverksadministratör eller 'super admin'-roll. Denna privilegierade roll kan sedan bestämma om administratörer av nätverkssajter ska tillåtas se eller komma åt tilläggsmenyn i sin instrumentpanel och, om så, om sådana behörigheter sträcker sig till att _aktivera_ eller _inaktivera_ tillägg.

I denna utsträckning är nätverksadministratören ansvarig för att installera tillägg och teman i nätverket och delegerar behörigheter att använda dessa tillägg och teman till nätverkssajter. Sajtadministratörer kan inte installera tillägg och teman eller komma åt tillägg och teman som inte tilldelats deras sajt.

#### Användare och administratörer

I en WordPress Multisite delar alla nätverkssajter samma databas och delar därför samma användare, roller och rättigheter. Det mest träffande sättet att tänka på det är att alla användare är medlemmar av nätverket och inte en specifik sajt.

Med denna förståelse kan det vara oönskat att tillåta att användare skapas och av denna anledning tar WordPress Multisite bort denna möjlighet från sajtadministratörerna och flyttar denna möjlighet till nätverksadministratören. I sin tur kan nätverksadministratören delegera de nödvändiga privilegierna till en sajtadministratör för att tillåta dem att skapa användarkonton för sin egen sajt.

<!-- Screenshot unavailable: WordPress Multisite network user management interface -->

För att upprepa uttalandet ovan, även om användarkontona verkar vara relaterade till sajten är de i själva verket allokerade till nätverket och måste därför vara unika över hela nätverket. Det kan finnas tillfällen där användarnamn inte är tillgängliga för registrering av denna anledning.

Även om det inte är ett främmande koncept i företagssystem är denna enda källa för användarregistrering och autentisering ofta ett svårt koncept att förstå för personer bekanta med fristående WordPress-installationer där användaradministration är något enklare.

#### Media

Där nätverkssajter delar en enda databas i en WordPress Multisite, upprätthåller de separata sökvägar i filsystemet för mediefiler.

Den standardmässiga WordPress-platsen (wp-content/uploads) förblir; dock ändras dess sökväg för att återspegla nätverkssajtens unika ID. Följaktligen visas mediefiler för en nätverkssajt som wp-contents/uploads/site/[id].

#### Permalänkar

Vi nämnde tidigare att det finns tydliga fördelar med _subdomän_ över _underkatalog_-konfiguration och här är det: sökvägar.

I en _underkatalog_-konfiguration måste huvudsajten (den första sajten som skapas när nätverket etableras) och nätverksundersajter dela samma sökväg som leder från domännamnet. Detta har potential för ett stort antal konflikter.

För inlägg läggs en obligatorisk /blog/-sökväg till för huvudsajten för att förhindra sammanstötningar med nätverkssajter. Detta innebär att snygga permalänkar som 'Inläggsnamn' kommer att presenteras som domain.name/blog/post-name/

<!-- Screenshot unavailable: WordPress permalink settings showing /blog/ path in subdirectory configuration -->

I en _subdomän_-konfiguration är denna åtgärd inte nödvändig eftersom varje nätverkssajt drar nytta av fullständig domänseparation och därför inte behöver förlita sig på en enda sökväg. De upprätthåller istället sina egna distinkta sökvägar baserat på sin _subdomän_.

<!-- Screenshot unavailable: WordPress permalink settings for subdomain configuration -->

#### Statiska sidor

I _underkatalog_-konfiguration sträcker sig potentialen för namnkonflikter till statiska sidor eftersom huvudsajten och nätverkssajter delar samma sökväg.

För att förhindra detta tillhandahåller WordPress ett sätt att svartlista vissa sajtnamn så att de inte konfliktar med namnen på den första sajten. Vanligtvis skulle nätverksadministratören ange rotsökvägarna för huvudsajtens sidor.

<!-- Screenshot unavailable: WordPress network settings showing banned site names to prevent conflicts -->

I _subdomän_-konfiguration mildras möjligheten för namnkonflikter av _subdomänen_ eftersom den är unik för nätverkssajten och inte relaterad på något sätt till huvudsajten.

### Registrering

Inom nätverksinställningarna för WordPress Multisite finns flera nya användarregistreringsalternativ tillgängliga, som tillåter nya och befintliga användare att skapa sajter.

<!-- Screenshot unavailable: WordPress Multisite network settings showing registration options -->

Till skillnad från fristående WordPress-installationer upprätthåller inte nätverkssajter de bekanta alternativen för att tillåta användarregistreringar eller tilldela dessa registreringar till roller.

<!-- Screenshot unavailable: WordPress standalone site user registration settings showing limited options -->

När användarkonton skapas genereras dessa konton på nätverksnivå. Således istället för att tillhöra någon specifik sajt tillhör de istället nätverket. Detta har vissa tydliga fördelar och nackdelar.

Anta till exempel att din WordPress Multisite var inom nyhets- och informationsbranschen. Du skulle etablera multisiten och sedan skapa nätverkssajter för finans, teknik, underhållning och andra intresseområden samtidigt som du behåller övergripande kontroll över tillägg och teman. Varje nätverkssajt skulle i sin tur ha en långt större kontrollnivå över utseendet och känslan och användarupplevelsen av sin nätverkssajt än vad anpassade inläggstyper eller vanliga inläggskategorier skulle ge.

I denna utsträckning när en användare loggar in loggar de in på nätverket och är i slutändan inloggade på varje nätverkssajt också för att ge en sömlös upplevelse. Om din nya sajt var prenumerationsbaserad skulle detta vara den ideala lösningen och resultatet.

Om däremot den avsedda naturen och syftet med multisiten var att erbjuda disparata nätverkssajter som inte har någon relation till varandra är det nästan alltid fallet att externa eller ytterligare tillägg krävs för att manipulera användarrollerna.

### Domän och SSL

Låt oss prata om en WordPress Multisite-installation som nästan undgår vår uppmärksamhet - Wordpress.com. Detta är överlägset det mest omfattande exemplet på en Wordpress multisite och demonstrerar dess omfattande förmågor att anpassas och formas för att uppfylla ett syfte.

Nuförtiden på det moderna internet är användningen av SSL nästan obligatorisk och nätverksadministratörer av WordPress multisites ställs snart inför dessa utmaningar.

I _subdomän_-konfiguration skapas sajter baserat på rotdomännamnet. Således skulle en sajt märkt 'site1' skapas som 'site1.domain.com'. Genom att använda ett wildcard SSL-certifikat kan en nätverksadministratör framgångsrikt hantera denna utmaning och tillhandahålla SSL-krypteringsmöjligheter för nätverket.

WordPress Multisite innehåller en domänmappningsfunktion som tillåter nätverkssajter att associeras med anpassade domännamn eller domännamn som skiljer sig från nätverkets rotdomän.

För nätverksadministratörer presenterar detta ett ytterligare lager av komplexitet både i domännamnskonfiguration samt utfärdande och underhåll av SSL-certifikat.

I denna utsträckning medan WordPress Multisite tillhandahåller ett sätt att tillåta [www.anotherdomain.com](http://www.anotherdomain.com) att mappas till 'site1' lämnas nätverksadministratören med utmaningen att externt hantera DNS-posterna och implementeringen av SSL-certifikat.

## Ultimate Multisite

Med skillnaderna mellan en fristående WordPress-installation och en Multisite-installation förstådda, låt oss ta en titt på hur Ultimate Multisite är den ultimata arsenalen för att tillhandahålla Websites as a Service.

### Introduktion

Ultimate Multisite är din schweiziska armékniv när det gäller att skapa en Website as a Service (WaaS). Tänk på Wix.com, Squarespace, WordPress.com och tänk sedan på att äga din egen tjänst.

Under huven använder Ultimate Multisite WordPress Multisite men gör det på ett sätt som inte bara löser mängden utmaningar nätverksadministratörer möter med multisite-installationer utan förbättrar även kapabiliteterna för att stödja ett brett utbud av användningsfall.

I följande avsnitt kommer vi att ta en titt på några vanliga användningsfall och överväganden som krävs för att stödja dessa fall.

### Användningsfall

#### Fall 1: En byrå

Vanligtvis ligger en byrås kärnkompetenser i design av webbplatser med aspekter som deras hosting eller marknadsföring listade som tilläggstjänster.

För byråer presenterar Ultimate Multisite ett otroligt värdeerbjudande i sina förmågor att hosta och hantera flera webbplatser på en enda plattform. Ännu mer för byråer som standardiserar sina designer på särskilda teman som GeneratePress, Astra, OceanWP eller andra kan utnyttja Ultimate Multisites förmågor att automatiskt aktivera dessa teman för varje ny sajt.

På samma sätt med överflödet av erbjudanden för byråprissättning till vanliga och populära tillägg, tillåter användningen av Ultimate Multisite byråer att utnyttja befintliga investeringar genom att tillhandahålla en gemensam plattform från vilken tillägg kan installeras, underhållas och användas.

Troligtvis skulle användningen av en konfiguration vara önskvärd och lyckligtvis gör Ultimate Multisite det otroligt enkelt att underlätta domänmappning och SSL-certifikat med sina integrationer för ett antal populära webbhotellsleverantörer samt tjänster som Cloudflare och cPanel.

Således genom att utnyttja en av dessa leverantörer eller genom att placera Ultimate Multisite bakom Cloudflare blir aspekter som hantering av domäner och SSL-certifikat något triviala.

Byråer som föredrar att hålla en stram kontroll över skapandet av sajter kommer att uppskatta hur enkelt de kan skapa sajter och associera sajter med kunder och planer genom Ultimate Multisites strömlinjeformade gränssnitt.

![Ultimate Multisite site management interface](/img/admin/sites-list.png)

Stram kontroll över tillägg och teman upprätthålls på per-produkt-basis genom Ultimate Multisites intuitiva gränssnitt som tillåter tillägg och teman att göras tillgängliga eller dolda samt deras aktiveringstillstånd när de instansieras för en ny sajt.

![Product plugin limitations interface](/img/config/product-plugins.png)

Teman tillhandahåller liknande funktionalitet, vilket tillåter särskilda teman att aktiveras eller döljas vid sajtskapande.

![Product theme limitations interface](/img/config/product-themes.png)

Byråer kommer att finna sinnesfrid med Ultimate Multisite som tillåter dem att göra det de gör bäst - designa exceptionella webbplatser.

#### Fall 2: Nischtillhandahållare

Det finns ett gammalt talesätt som säger, "gör en sak och gör det bra". För många specialister innebär detta att skapa en produkt eller tjänst kring en enda kärnidé.

Kanske är du en ivrig golfare som marknadsför webbplatser till klubbar eller så kanske du är en ivrig e-sportspelare som tillhandahåller webbplatser till clans. En individ som marknadsför en bokningstjänst till restauranger kanske?

Av många anledningar skulle du vilja tillhandahålla tjänster baserade på ett gemensamt ramverk och plattform. Det kan vara att du har designat eller investerat i skräddarsydda tillägg för att tillhandahålla den nödvändiga funktionaliteten eller det kan vara fallet att branschens bästa praxis kräver någon form av standardiserat tillvägagångssätt för design.

En av Ultimate Multisites innovativa funktioner är användningen av mallsajter. En mallsajt är en där temat har installerats och aktiverats, nödvändiga tillägg installerats och aktiverats och exempelinlägg eller sidor skapats. När en kund skapar en ny sajt baserad på mallen kopieras innehållet och inställningarna för mallen till den nyskapade sajten.

För en tillhandahållare av nischsajter och tjänster ger detta en oöverträffad fördel i förmågan att omedelbart skapa en sajt redo att användas med anpassade tillägg och design. Kunden behöver bara tillhandahålla minimal input för att slutföra tjänsten.

Beroende på kraven kan både _underkatalog_- eller _subdomän_-konfigurationer passa, i vilket fall arkitekturvalen skulle vara mellan ett enkelt SSL-certifikat för _underkataloger_ eller ett wildcard SSL-certifikat för _subdomäner_.

#### Fall 3: WordPress webbhotell

Det finns otaliga sätt att hosta WordPress-sajter men sällan är det så enkelt som att tillhandahålla webbutrymme till en kund med en förinstallerad version av WordPress. Detta beror på att ett antal beslut och överväganden behöver samlas för att tillhandahålla en meningsfull tjänst.

Ultimate Multisite utmärker sig inom detta område genom att tillhandahålla en omfattande nyckelfärdig lösning för hosting av WordPress-sajter. Inkluderat i lösningen finns kärnmekanismerna för att tillhandahålla prenumerationstjänster, betalningsinsamling, kassaformulär, rabattkuponger och kundkommunikation.

Mycket av det integrala arbetet som krävs för att korrekt installera, konfigurera och underhålla en WordPress Multisite underlättas av Ultimate Multisite i den utsträckning att nätverksadministratörer endast behöver överväga aspekter som relaterar till deras tjänst eller nisch såsom produktnivåer, prissättning och tjänsteerbjudanden.

För utvecklare som vill integrera med Ultimate Multisite erbjuder lösningen också ett omfattande RESTful API och Webhooks för händelsenotifieringar.

Utan beroende av en mängd externa tillägg och licenser tillhandahåller Ultimate Multisite en funktionsrik och jämförbar lösning med Wix, Squarespace, WordPress.com och andra.

### Arkitekturöverväganden

Även om detta inte är en omfattande guide, bör följande punkter tjäna som vägledning för korrekt val av teknologier för att stödja en Ultimate Multisite-installation.

#### Delat kontra dedikerat webbhotell

Tyvärr är inte alla webbhotellsleverantörer lika och vissa praktiserar extrema serverdensiteter. Lågkostnadsleverantörer genererar vanligtvis intäkter genom att maximera serverdensiteten. Som sådan kan din Ultimate Multisite-installation bara vara en av flera hundra sajter på samma server.

Utan lämpliga skyddsåtgärder på plats från leverantören upplever sajter på en delad server problemet med 'störande grannar'. Det vill säga, en sajt på samma server som förbrukar så många resurser att andra sajter måste tävla om de återstående resurserna. Ofta visar sig detta som sajter som är långsamma eller misslyckas att svara i tid.

Som en leverantör av webbhotell själv kommer de påföljande effekterna att innebära att dina kunder upplever dåliga hastigheter, låg sidrankning och höga avvisningsfrekvenser vilket ofta resulterar i kundbortfall när de söker tjänster någon annanstans.

Kort sagt, billigt betyder inte bra.

Ultimate Multisite är känt för att fungera med ett antal bra webbhotellsleverantörer och integreras väl med deras miljö för att tillhandahålla funktioner som domänmappning och automatisk SSL. Dessa leverantörer värdesätter prestanda och tillhandahåller en högre grad av tjänst än delat webbhotell.

För en lista över kompatibla leverantörer och kompletta installationsinstruktioner för varje, vänligen kontrollera dokumentationen för Kompatibla leverantörer.

#### Prestandaöverväganden

Ultimate Multisite är inte en långsam applikation, snarare är den anmärkningsvärt snabb. Den presterar dock endast så bra som den underliggande applikationen och infrastrukturen och kan endast utnyttja det som den har tillgång till.

Överväg detta: Du är nätverksadministratör för en Ultimate Multisite-installation med 100 sajter. Några av dessa sajter går bra och attraherar ett antal webbplatsbesökare varje dag.

Detta scenario skulle vara annorlunda i mindre skala av säg en till fem sajter men inom kort skulle skalningsproblem vara uppenbara.

Utan åtgärd skulle den enda Ultimate Multisite-sajten vara ansvarig för att uppfylla förfrågningarna från alla besökare till sajterna. Dessa förfrågningar kan vara för dynamiska PHP-sidor eller statiska tillgångar såsom stilmallar, javascript eller mediefiler. Oavsett om det är en eller hundra sajter blir dessa uppgifter repetitiva, monotona och slösaktiga. Det är onödigt att använda CPU-kraft och minne för att bearbeta en PHP-fil när utdata är samma statiska information för varje förfrågan.

På samma sätt genererar en förfrågan för en PHP- eller HTML-sida i sin tur flera efterföljande förfrågningar om skript, stilmallar och bildfiler. Dessa förfrågningar riktas direkt till din Ultimate Multisite-server.

Man kan enkelt lösa detta problem genom att uppgradera servern men det löser inte ett sekundärt problem - geografiska latenser. Endast flera servrar på flera platser kan korrekt adressera detta problem.

Av denna anledning använder de flesta nätverksadministratörer front-end cachningslösningar och innehållsdistributionsnätverk (CDN) för att uppfylla förfrågningarna om statiska sidor. Att uppfylla dessa förfrågningar och servera tillgångar innan förfrågan når servern sparar bearbetningsresurser, eliminerar förseningar, undviker onödiga uppgraderingar och maximerar teknikinvesteringar.

Ultimate Multisite inkluderar ett sofistikerat Cloudflare-tillägg som gör det möjligt för nätverksadministratörer att placera sina installationer bakom Cloudflare och använda inte bara dess cachningsfunktioner utan DNS-hosting, SSL-certifikat och säkerhetsmekanismer också.

#### Säkerhetskopior

Man kan fråga 50 personer om råd om säkerhetskopior och få 50 olika åsikter om säkerhetskopieringsstrategier. Svaret är, det beror på.

Vad som inte är omtvistat är att säkerhetskopior krävs och att det är nästan otänkbart att dessa inte hanteras av leverantören, specifikt en som erbjuder en hanterad tjänst. Följaktligen kommer kunder att se till nätverksadministratören för att tillhandahålla och hantera denna tjänst. Vem nätverksadministratören ser till är ett helt annat problem.

För syftet med detta avsnitt låt oss vara överens om att en säkerhetskopia är en tidpunktskopia av systemtillståndet vid den tidpunkt då säkerhetskopieringen initierades. Enkelt uttryckt, oavsett systemets tillstånd vid tidpunkten för säkerhetskopieringen fångas det tillståndet och låses in i säkerhetskopian.

Med denna förståelse kommer svaret på hur man uppnår säkerhetskopiorna och vad som är bäst för din miljö till stor del att bero på dina krav och webbhotellsleverantörens förmåga att tillfredsställa dessa krav. Dock, i ordning från mest egensinnig till minst egensinnig, bör alternativen nedan ge viss vägledning.

#### Ögonblicksbilder

Ögonblicksbilder är silverbloorna för säkerhetskopior eftersom de är enkla, okomplicerade (tills du vill återställa) och 'bara fungerar'. Det kräver dock viss hjälp från din leverantör och gäller mest bara om du har en VPS (Virtual Private Server) eller liknande. Flera leverantörer listade i vår dokumentation 'Kompatibla leverantörer' erbjuder säkerhetskopior som inte kräver ytterligare ingripande eller övervägande från nätverksadministratören.

Där traditionella säkerhetskopior riktar in sig på filer och databaser, riktar sig en ögonblicksbild mot hela disken. Detta innebär att inte bara sajtens data fångas i ögonblicksbilden utan även operativsystemet och konfigurationen. För många är detta en tydlig fördel då ett nytt system kan skapas nästan omedelbart från en ögonblicksbild och tas i drift för att ersätta en sviktande instans. På samma sätt kräver återställningsprocessen för att hämta filer endast att fästa ögonblicksbilden som en disk till en befintlig instans så att filerna kan nås och kopieras.

Ögonblicksbilder kan medföra en extra kostnad hos webbhotellsleverantören men det är en försäkring mot olyckor.

#### Externa skript

Det verkar inte finnas någon brist på externa skript och lösningar för att säkerhetskopiera WordPress- och MySQL-resurser och dessa skulle fungera bra för Ultimate Multisite eftersom det är ett WordPress-tillägg som använder WordPress filsystem och databas. Således skulle en lösning som säkerhetskopierar WordPress-sajter tillräckligt täcka Ultimate Multisites behov.

Vi kan inte rekommendera något enskilt skript över ett annat men vårt allmänna råd är att köra flera säkerhetskopierings- och återställningstester för att säkerställa att resultaten är önskade och att 'vara säker för att vara säker' genom att kontinuerligt utvärdera skriptet och dess funktionalitet specifikt där någon form av differentiell säkerhetskopieringsstrategi tillämpas.

Det bör noteras att dessa skript, medan de körs, kommer att öka systembelastningen vilket bör tas i beaktande.

#### Tillägg

Det finns nästan inget problem i WordPress som inte kan lösas med ett tillägg och om att hantera externa skript inte är din kopp kaffe är kanske ett tillägg det näst bästa alternativet.

Medan tillägg varierar i alternativ och funktioner utför de mestadels samma funktion och det är att göra en kopia av WordPress-filerna och databasinnehållet. Därefter skiljer sig funktionaliteterna då vissa tillägg kan skicka säkerhetskopiorna till externa tjänster som Google Drive eller Dropbox eller till någon form av kompatibel objektlagringstjänst som S3, Wasabi eller andra. De mer omfattande tilläggen tillhandahåller differentiella säkerhetskopior eller någon form av strategi för att endast säkerhetskopiera data som har ändrats för att spara externa lagringskostnader.

När du väljer ditt tillägg, var noga med att verifiera att det är multisite-medvetet. På grund av dess verkningsläge medan säkerhetskopieringen körs kan du förvänta dig tillfällig belastning på servern tills processen har slutförts.

#### Domän och SSL

Mycket har redan diskuterats angående domännamn i multisite _subdomän_-läge. En nästan universell lösning för nätverksadministratörer är att använda wildcard DNS-poster.

![Wildcard DNS entry configuration example](/img/config/settings-domain-mapping.png)

Denna typ av DNS-post kommer framgångsrikt att lösa _subdomäner_ som 'site1.domain.com' och 'site2.domain.com' till en IP-adress på 1.2.3.4 och därmed stödja Ultimate Multisite och i större utsträckning WordPress Multisite som använder _subdomän_-läge.

Detta kan fungera perfekt bra för HTTP eftersom målvärden läses från HTTP-huvudena men sällan är webben så enkel nuförtiden där säkra HTTPS-transaktioner är nästan obligatoriska.

Lyckligtvis finns det enkla alternativ för SSL-certifikat. I _underkatalog_-läge kan ett vanligt domäncertifikat användas. Dessa är lätt och fritt tillgängliga från webbhotellsleverantörer som kan använda den kostnadsfria LetsEncrypt-tjänsten eller en annan källa. Annars är dessa kommersiellt tillgängliga från myndigheter om du kan generera certifikatsigneringsförfrågan.

För _subdomän_-läge kommer användningen av ett wildcard SSL-certifikat att para perfekt med en wildcard-domän och tillåta certifikatet att vara auktoritativt för rotdomänen och alla _subdomäner_ utan överdriven konfiguration.

Dock bör det noteras att wildcard SSL-certifikat kanske inte fungerar med tjänster som Cloudflare om du inte är på en enterprise-plan eller ställer in posten till endast DNS i vilket fall all cachning och optimering förbigås.

Direkt ur förpackningen tillhandahåller Ultimate Multisite en lösning på detta problem som demonstrerar vår omfattande erfarenhet av behoven hos WordPress multisites. Att aktivera detta enkla tillägg kommer att få Ultimate Multisite att använda dina Cloudflare-uppgifter för att automatiskt lägga till DNS-poster för nätverkssajter i Cloudflare och ställa in deras läge till 'proxied'. På detta sätt kommer varje nätverksundersajt, när den skapas, att ha det fulla skyddet och fördelarna med Cloudflare inklusive SSL.

Beroende på naturen och syftet med din Ultimate Multisite-installation kan det finnas ett behov för kunder att använda sina egna domäner. I detta fall har nätverksadministratören i uppgift att lösa två problem. Ett, hostningen av domännamnet och två, SSL-certifikat för domänen.

För många är användningen av Cloudflare ett enkelt alternativ. Kunden behöver bara placera sin domän på Cloudflare, peka en CNAME till rotdomänen för Ultimate Multisite och mappa sin domän i Ultimate Multisite för att börja dra nytta av sitt anpassade domännamn.

Utanför detta behöver alternativa lösningar sökas vilket är varför Ultimate Multisite rekommenderar en lista över Kompatibla leverantörer. Detta beror på att processen att ställa in DNS och SSL kan vara en icke-trivial process. Dock med Ultimate Multisites integration med dessa leverantörer är komplexiteten mycket borttagen och proceduren är automatiserad.

#### Tillägg

Det är högst troligt att du skulle behöva ytterligare tillägg för att tillhandahålla funktionalitet till dina kunder eller nätverkssajter. Fungerar alla tillägg med WordPress Multisite och Ultimate Multisite? Tja, det beror på.

Medan de flesta tillägg är installerbara i en WordPress Multisite varierar deras aktivering och licensiering från författare till författare.

Utmaningen ligger i hur licensiering tillämpas där vissa tillägg kräver licensiering på en per-domän-basis. Detta skulle innebära att för vissa tillägg behöver nätverksadministratören manuellt aktivera licensen för varje tillägg på varje ny sajt.

Därför kan det vara bäst att kontrollera med tilläggsförfattaren om hur deras tillägg skulle fungera med en WordPress Multisite och eventuella speciella krav eller procedurer som krävs för att licensiera det.
