---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101 {#ultimate-multisite-101}

Ultimate Multisite er en WordPress Multisite plugin, der giver dig mulighed for at tilbyde WaaS eller Websites as a Service til kunderne. Før vi dykker ned og lærer, hvordan Ultimate Multisite kan hjælpe din virksomhed og dine kunder, skal vi have et grundlæggende kendskab til emnet.

## WordPress Multisite {#the-wordpress-multisite}

Mange af os er bekendte med den standardinstallation af WordPress. Enten opretter du den via kontrolpanelet fra din hostingudbyder eller – for de modige – sætter en ny webserver og database op, downloader kernedataene og starter installationsprocessen.

Dette virker for millioner af WordPress-sider over hele verden, men fra et agents eller hostingudbyders perspektiv lad os tale om volumen et øjeblik.

Selvom det er nemt at oprette én WordPress-side eller endda hundrede via et automatiseret kontrolpanel, begynder problemer snart at vise sig, når det kommer til administration af disse sider. Uadministrerede sider er et primært mål for malware. At administrere betyder en indsats og brug af ressourcer, og selvom der findes eksterne værktøjer og plugins til at hjælpe med at strømline administrationen af WordPress-sider, betyder det faktum, at kunderne bevarer administratoradgang, at disse anstrengelser nemt kan blive overvundet.

I kernen tilbyder WordPress en funktion blot kaldet ‘Multisite’, der spores tilbage til 2010 ved lanceringen af WordPress 3.0. Siden da har den fået flere revisioner med det formål at introducere nye funktioner og styrke sikkerheden.

I bund og grund kan et WordPress multisite tænkes på som dette: Et universitet vedligeholder én enkelt installation af WordPress, men hver fakultet vedligeholder sin egen WordPress-side.

Lad os se dykke ned i nogle af de grundlæggende termer, som man finder ikke kun i Ultimate Multisite's dokumentation, men også i hele WordPress-fællesskabet.

### Netværket {#the-network}

Når det kommer til WordPress, er et multisite netværk et sted, hvor du kan administrere flere undersider fra et enkelt dashboard. Selvom oprettelsen af et multisite netværk varierer mellem hostingudbydere, ender man ofte med et par ekstra instruktioner i wp-config.php filen for at fortælle WordPress, at det kører i denne specifikke tilstand.

Der er en række markante forskelle mellem et multisite netværk og en selvstændig WordPress-installation, som vi kort vil gennemgå.

#### Subdomæne vs. Undermappe (Subdirectory) {#subdomain-vs-subdirectory}

En af de første beslutninger, du skal træffe, er om multisite-installationen skal køre med _undermapper_ eller _subdomæner_. Ultimate Multisite fungerer lige godt med begge valg, men der er nogle arkitektoniske forskelle mellem de to konfigurationer.

I en _subdirectory_-konfiguration arver netværks-sider en sti baseret på hoveddomænenavnet. For eksempel vil et netværks-site mærket 'site1' have sin fulde URL som https://domain.com/site1. I en _subdomain_-konfiguration vil netværks-siden have sin egen _subdomæne_, der udledes fra hoveddomænenavnet. Så vil et site mærket 'site1' have sin fulde URL som https://site1.domain.com/.

Selvom begge muligheder er helt gyldige valg, tilbyder brugen af _subdomæner_ en række fordele, men kræver også mere tænksomhed og planlægning i arkitekturen.

Når det kommer til DNS er brugen af _subdirectories_ et relativt simpelt problem at håndtere. Da netværkssteder blot er underordnede stier til hovedstien, skal der kun være én domænenavnseindgang for hoveddomænet. For _subdomains_ er udfordringen lidt mere kompleks og kræver enten en separat CNAME-indgang for hvert netværkssted eller en jokerte indgang (*) i DNS-opslagene.

Et yderligere område at overveje er SSL og udstedelse samt brug af SSL-certifikater. I _subdirectory_ konfiguration kan ét domæne-certifikat bruges, da netværkssteder blot er stier til hoveddomænet. Et certifikat for domain.com vil så derved give SSL til https://domain.com/site1, https://domain.com/site2 og så videre.

I _subdomain_ konfiguration er brugen af et jokerte SSL-certifikat en af de mest almindelige muligheder. Denne type SSL-certifikat giver kryptering for et domæne og dets _subdomains_. Derfor vil et jokerte SSL-certifikat give kryptering til https://site1.domain.com, https://site2.domain.com og selv til domain.com.

Selvom der findes andre muligheder, er disse ofte begrænset i omfang og anvendelse og kræver yderligere konfiguration og overvejelse med hensyn til egnethed.

#### Plugins og Themes {#plugins-and-themes}

Hvad WordPress giver, tager det også fra, mindst fra kundenes perspektiv. I en selvstændig WordPress-installation er den eneste ofre og offer for denne handling, hvis sidens administrator installerer et dårligt plugin eller ikke holder sin installation opdateret, sig selv selv. Men en sidens administrator, der installerer et dårligt plugin på en multisite-installation, skaber et offer for alle sider installeret i netværket.

Derfor fjerner WordPress Multisite muligheden for sidens administratorer til at installere plugins og themes, og flytter i stedet denne mulighed over på en ny oprettet netværksadministrator eller 'super admin' rolle. Denne privilegerede rolle kan derefter beslutte, om administratorer af netværkssider må se eller få adgang til plugin-menuen i deres dashboard, og hvis ja, om disse tilladelser strækker sig til at _aktivere_ eller _deaktivere_ plugins.

I denne forstand er netværksadministratoren ansvarlig for at installere plugins og themes i netværket og delegere rettighederne til at bruge disse plugins og themes på netværkssiderne. Sidens administratorer kan ikke installere plugins og themes eller få adgang til plugins og themes, der ikke er tildelt deres specifikke side.

#### Brugere og Administratorer {#users-and-administrators}

I et WordPress Multisite deler alle netværks sider den samme database og har derfor de samme brugere, roller og evner (capabilities). Det mest passende at tænke på er, at alle brugere er medlemmer af netværket og ikke en specifik side.

Med denne forståelse kan det være uønsket at tillade oprettelse af brugere, og derfor fjerner WordPress Multisite denne mulighed fra sidens administratorer og flytter den over på netværksadministratorrollen. Netværksadministratoren kan derefter dele de nødvendige privilegier med en sidens administrator for at lade dem oprette brugerkonti til deres egen side.

<!-- Skærmbillede utilgængeligt: WordPress Multisite netværksbrugerstyringsgrænseflade -->

For at gentage ovenstående, selvom brugerkonti ser ud til at være relateret til den side, de befinder sig på, er de i virkeligheden tildelt netværket og skal derfor være unikke på tværs af hele netværket. Der kan forekomme situationer, hvor brugernavne ikke kan registreres på grund af denne årsag.

Selvom det ikke er et fremmed begreb i virksomhedssystemer, er denne enkelt kilde til brugerregistrering og autentificering ofte svært at forstå for folk, der er vant til selvstændige WordPress-installationer, hvor brugeradministration er lidt lettere.

#### Medier (Media) {#media}

Hvor netværks-sites deler én database i et WordPress Multisite, opretholder de separate stier på filsystemet for mediefiler.

Den standard WordPress-placering (wp-content/uploads) forbliver den samme; dog ændres dens sti for at afspejle det unikke ID for netværks-sitet. Følgelig vises mediefiler for et netværks-site som wp-contents/uploads/site/[id].

#### Permalinks (Permalinks) {#permalinks}

Vi nævnte tidligere, at der er markante fordele ved en _subdomain_-konfiguration frem for en _subdirectory_-konfiguration, og her er stierne.

I en _subdirectory_-konfiguration skal hovedsitet (det første site, der oprettes, når netværket etableres) og netværks-subsider dele den samme sti fra domænenavnet. Dette har potentiale for et stort antal konflikter.

For indlæg tilføjes en obligatorisk /blog/ sti til hovedsitet for at forhindre kollisioner med netværks-sites. Det betyder, at pæne permalinks som ‘Indlægsnavn’ vil blive præsenteret som domain.name/blog/indlægsnavn/.

<!-- Skærmbillede utilgængeligt: WordPress permalink indstillinger, der viser /blog/ sti i subdirectory konfiguration -->

I en _subdomain_-konfiguration er denne handling ikke nødvendig, da hvert netværks-site drager fordel af fuld domæneadskillelse og derfor ikke behøver at stole på én enkelt sti. I stedet opretholder de deres egne distinkte stier baseret på deres _subdomain_.

<!-- Skærmbillede utilgængeligt: WordPress permalink indstillinger for subdomain konfiguration -->

#### Statiske sider (Static Pages) {#static-pages}

I indstillinger for _subdirectory_ strækker potentialet for navnekonflikter til statiske sider som hovedsite, da netværks-sider deler den samme sti.

For at undgå dette giver WordPress en måde at sorte-liste bestemte sidens navne på, så de ikke kolliderer med navnet på den første site. Typisk vil netværksadministrator indtaste rodstierne for hovedsidens sider.

<!-- Skærmbillede utilgængeligt: WordPress netværksindstillinger, der viser sorte-listede sidens navne for at forhindre konflikter -->

I _subdomain_ konfiguration mindskes muligheden for navnekonflikter af _subdomain_, da den er unik for netværks-siden og ikke har nogen relation til hovedsiden.

### Registrering {#registration}

Inden for WordPress Multisite's netværksindstillinger er der flere nye muligheder for brugerregistrering, som giver både nye og eksisterende brugere mulighed for at oprette sider.

<!-- Skærmbillede utilgængeligt: WordPress Multisite netværksindstillinger, der viser registreringsmuligheder -->

I modsætning til selvstændige WordPress-installationer har netværks-sider ikke de velkendte muligheder for at tillade brugerregistrering eller tildele disse registreringer roller.

<!-- Skærmbillede utilgængeligt: WordPress enkelt site brugerregistreringsindstillinger, der viser begrænsede muligheder -->

Når brugerkonti oprettes, genereres disse konti på netværksniveau. De tilhører derfor ikke ét specifikt site, men snarere hele netværket. Dette har nogle distinkte fordele og ulemper.

For eksempel, lad dit WordPress Multisite var i erhverv med nyheder og information. Du ville oprette multisitet og derefter oprette netværks-sites til finans, teknologi, underholdning og andre områder af interesse, samtidig med at du bevarer den overordnede kontrol over plugins og themes. Hvert netværks-site ville igen have et langt større niveau af kontrol over udseende og brugeroplevelsen på deres netværks-site end hvad custom post types eller almindelige postkategorier giver.

I denne forstand logger en bruger ind i netværket, og bliver i sidste ende logget ind på hvert netværks-site også for at give en problemfri oplevelse. Hvis din nye site var abonnementsbaseret, ville dette være den ideelle løsning og resultat.

Hvis det derimod tiltænkte formål med multisitet var at tilbyde forskellige netværks-sites uden relation til hinanden, er det næsten altid nødvendigt med eksterne eller yderligere plugins for at manipulere brugerrollerne.

### Domæne og SSL {#domain-and-ssl}

Lad os tale om en WordPress Multisite installation, der næsten undgår vores opmærksomhed – Wordpress.com. Dette er langt det mest omfattende eksempel på en WordPress multisite og demonstrerer dens omfattende evner til at blive tilpasset og formet til at opfylde et formål.

I dag på internettet er brugen af SSL næsten obligatorisk, og netværksadministratorer for WordPress multisites står snart over for disse udfordringer.

Ved _subdomain_-konfiguration skabes sites baseret på rodenavn. Så ville en site kaldet ‘site1’ blive oprettet som ‘site1.domænen.com’. Ved at bruge et wildcard SSL-certifikat kan en netværksadministrator succesfuldt imødekomme denne udfordring og give SSL-krypteringsmuligheder for netværket.

WordPress Multisite indeholder en domæne-mapping funktion, der gør det muligt for netværkssteder at blive forbundet med brugerdefinerede domænenavne eller domænenavne, der er forskellige fra netværkets roott-domæne.

For netværksadministratorer skaber dette et ekstra lag af kompleksitet både i domænekonfiguration samt ved udstedelse og vedligeholdelse af SSL-certifikater.

I denne forstand giver WordPress Multisite os mulighed for at mappe [www.anotherdomain.com](http://www.anotherdomain.com) til 'site1', men netværksadministratoren står tilbage med udfordringen med ekstern styring af DNS-indgange og implementering af SSL-certifikater.

## Ultimate Multisite {#ultimate-multisite}

Når forskellene mellem en selvstændig WordPress-installation og en Multisite-installation er forstået, lad os se på, hvordan Ultimate Multisite er det ultimative arsenal til at levere Websites as a Service (WaaS).

### Introduktion {#introduction}

Ultimate Multisite er din schweizerkniv, når det kommer til at skabe en Website as a Service (WaaS). Tænk på Wix.com, Squarespace, WordPress.com og så tænk over at eje din egen service.

Under motorhjelmen bruger Ultimate Multisite WordPress Multisite, men gør det på en måde, der ikke blot løser de utallige udfordringer, netværksadministratorer står overfor med multisite-installationer, men forbedrer også funktionaliteten og muliggør understøttelse af et bredt udvalg af brugsscenarier.

I følgende sektioner vil vi kigge på nogle almindelige brugsscenarier og de overvejelser, der kræves for at understøtte disse tilfælde.

### Brugsscenarier {#use-cases}

#### Tilfælde 1: Et Agentur {#case-1-an-agency}

Typisk ligger et agenturs kernekompetencer i design af hjemmesider med aspekter som deres hosting eller markedsføring, der er listet som yderligere tjenester.

For agenserne Ultimate Multisite tilbyder en utrolig værdi i sine evner til at hoste og administrere flere websites på én platform. Det er endnu mere relevant for agenser, der standardiserer deres designs på specifikke themes som GeneratePress, Astra, OceanWP eller andre kan udnytte Ultimate Multisites evner til automatisk at aktivere disse themes for hvert nyt site.

Ligesom med den overflod af gode tilbud på priser for plugins til agenser, giver brugen af Ultimate Multisite agenser mulighed for at udnytte eksisterende investeringer ved at tilbyde en fælles platform, hvor plugins kan installeres, vedligeholdes og bruges.

Det er sandsynligt, at man ønsker brug af konfigurationen, og heldigvis gør Ultimate Multisite det utroligt nemt at facilitere domænemapping og SSL-certifikater med sine integrationer for en række populære hostingudbydere samt services som Cloudflare og cPanel.

Derfor ved at udnytte en af disse udbydere eller ved at placere Ultimate Multisite bag Cloudflare bliver aspekter som styring af domæner og SSL-certifikater ret trivielle.

Agenser, der foretrækker at bevare et stramt kontrol over site-oprettelsen, vil sætte pris på, hvor nemt de kan oprette sites og forbinde sites med kunder og planer gennem Ultimate Multisites strømlinede interface.

![Ultimate Multisite site management interface](/img/admin/sites-list.png)

Stram kontrol over plugins og themes opretholdes på et produktspecifikt grundlag gennem Ultimate Multisites intuitive interfaces, der gør det muligt at gøre plugins og themes tilgængelige eller skjule dem samt deres aktiveringsstatus, når de instansieres for et nyt site.

![Product plugin limitations interface](/img/config/product-plugins.png)

Themes giver lignende funktionalitet, som gør det muligt for specifikke themes at blive aktiveret eller skjult på en hjemmesideoprettelse.

![Product theme limitations interface](/img/config/product-themes.png)

Agencies vil finde ro med Ultimate Multisite, da det lader dem gøre det bedst – design exceptionelle websider.

#### Tilfælde 2: Nicheudbyder {#case-2-niche-provider}

Der er et gammelt ordsprog, der siger: "gør én ting og gør den godt". For mange specialister betyder det at skabe et produkt eller en service omkring en enkelt kerneidé.

Måske er du en ivrig golfspiller, der promoverer hjemmesider til klubber, eller måske er du en dedikeret esports-gamer, der leverer hjemmesider til clans. En person, der promoverer en bookingtjeneste til restauranter måske?

Af mange grunde vil du gerne tilbyde tjenester baseret på et fælles rammeværk og platform. Det kan være, at du har designet eller investeret i skræddersyede plugins for at give den nødvendige funktionalitet, eller det kan være tilfældet, at branchestandarder kræver en form for standardiseret tilgang til design.

En af Ultimate Multisites innovative funktioner er brugen af template sites. Et template site er et sted, hvor temaet er installeret og aktiveret, nødvendige plugins er installeret og aktiveret, samt eksempelindlæg eller sider er oprettet. Når en kunde opretter en ny side baseret på template-siden, kopieres indholdet og indstillingerne fra template-siden til den nyoprettede side.

For en udbyder af niche-sider og -tjenester giver dette en uovertruffen fordel i evnen til øjeblikkeligt at skabe en klar side klar til brug med egne plugins og design. Kunden behøver kun give det absolut mindste input for at gennemføre tjenesten.

Afhængigt af kravene kan både _subdirectory_ eller _subdomain_ konfigurationer være passende, hvor arkitekturoverskuddet i så fald vil ligge mellem et simpelt SSL-certifikat til _subdirectories_ eller et wildcard SSL-certifikat til _subdomains_.

#### Tilfælde 3: WordPress Web Hosting {#case-3-wordpress-web-hosting}

Der findes utallige måder at hoste WordPress-sider på, men det er sjældent så simpelt som blot at tilbyde webplads til en kunde med en forinstalleret version af WordPress. Dette skyldes, at der skal træffes et antal beslutninger og overvejelser sammen for at levere en meningsfuld service.

Ultimate Multisite excellerer i dette område ved at tilbyde en omfattende "turnkey" løsning til hosting af WordPress-sider. Løsningen inkluderer de kernefunktioner, der leverer abonnementsservices, betalingsoverførsel, checkout-formularer, rabatkuponer og kundekommunikation.

Mye af det essentielle arbejde, der kræves for korrekt installation, konfiguration og vedligeholdelse af et WordPress Multisite, forenkles af Ultimate Multisite i den grad, at netværksadministratorer kun behøver at overveje aspekter relateret til deres service eller niche, såsom produktniveauer, prissætning og serviceudbud.

For udviklere, der ønsker at integrere med Ultimate Multisite, tilbyder løsningen også en omfattende RESTful API og Webhooks til hændelsesnotifikationer.

Uden afhængighed af et utal af eksterne plugins og licenser leverer Ultimate Multisite en funktion rig og sammenlignelig løsning til Wix, Squarespace, WordPress.com og andre.

### Arkitektoniske Overvejelser {#architecture-considerations}

Selvom dette ikke er en omfattende guide, kan følgende punkter tjene som vejledning til den korrekte valg af teknologier til at understøtte en Ultimate Multisite-installation.

#### Deling vs. Dedikeret Hosting {#shared-vs-dedicated-hosting}

Desværre er ikke alle hostingudbydere lige, og nogle praktiserer ekstrem serverdensitet. Lavprisudbydere genererer typisk indtægter ved at maksimere serverdensiteten. Som følge heraf kan din Ultimate Multisite-installation muligvis kun være et af flere hundrede sider på den samme server.

Uden passende beskyttelse fra udbyderen oplever sider på en delt server problemet med 'støjende naboer'. Det betyder, at en side på samme server bruger så mange ressourcer, at de andre sider skal konkurrere om de resterende ressourcer. Ofte viser dette sig som sider, der er langsomme eller ikke reagerer i tide.

Som webhostingudbyder vil flowet af effekter betyde, at dine kunder oplever dårlige hastigheder, lav page rank og høje bounce rates, hvilket ofte fører til kundefrafald, når de søger tjenester andre steder.

Kort sagt betyder billigt ikke godt.

Ultimate Multisite er kendt for at fungere med et antal gode hostingudbydere og integreres godt i deres miljø for at levere funktioner som domænemapping og automatisk SSL. Disse udbydere værdsætter ydeevne og tilbyder en højere serviceniveau end delt hosting.

For en liste over kompatible udbydere og komplette opsætningsinstruktioner til hver kan du tjekke dokumentationen for Kompatible Udbydere.

#### Ydelsesovervejelser {#performance-considerations}

Ultimate Multisite er ikke en langsom applikation, tværtimod er den bemærkelsesværdigt hurtig. Den fungerer dog kun så godt som den underliggende applikation og infrastruktur og kan kun udnytte det, den har adgang til.

Tænk over dette: Du er netværksadministrator for en Ultimate Multisite-installation med 100 sider. Nogle af disse sider klarer sig godt og tiltrækker et antal besøgende på hjemmesiden hver dag.

Dette scenarie ville være anderledes i en mindre skala, f.eks. ét til fem sider, men før de store skalproblemer bliver tydelige.

Uden overvågning vil den enkelt Ultimate Multisite-side være ansvarlig for at imødekomme anmodninger fra alle besøgende på siderne. Disse anmodninger kan være for dynamiske PHP-sider eller statiske aktiver som stylesheets, javascript eller mediefiler. Uanset om det er én eller hundrede sider, bliver disse opgaver gentagne, monotone og spild af ressourcer. Det er unødvendigt at bruge CPU-kraft og hukommelse til at behandle en PHP-fil, når outputtet er den samme statiske information for hver anmodning.

På samme måde genererer én anmodning om en PHP- eller HTML-side igen flere efterfølgende anmodninger om scripts, stylesheets og billedfiler. Disse anmodninger rettes direkte mod din Ultimate Multisite-server.

Man kan nemt løse dette problem ved at opgradere serveren, men det løser ikke et sekundært problem – geografiske forsinkelser (latencies). Kun flere servere på forskellige lokationer kan håndtere dette problem ordentligt.

Derfor bruger de fleste netværksadministratorer front-end caching-løsninger og content distribution networks (CDN'er) til at imødekomme anmodninger om statiske sider. At imødekomme disse anmodninger og levere aktiverne før anmodningen når serveren sparer behandlingsressourcer, eliminerer forsinkelser, undgår unødvendige opgraderinger og maksimerer teknologiske investeringer.

Ultimate Multisite inkluderer et sofistikeret Cloudflare add-on, som giver netværksadministratorer mulighed for at placere deres installation bag Cloudflare og bruge ikke kun dens caching-kapaciteter, men også DNS-hosting, SSL-certifikater og sikkerhedsforanstaltninger.

#### Backups {#backups}

Man kunne spørge 50 personer om råd til backups og modtage 50 forskellige meninger om backup-strategier. Svaret er: det afhænger af situationen.

Det, der ikke er omstridt, er at backups er nødvendige, og det er næsten umuligt at forestille sig, at disse ikke administreres af udbyderen, især en der tilbyder en managed service. Følgelig vil kunder kigge til netværksadministrator for at få denne service leveret og administreret. Hvem man kigger til som netværksadministrator er et helt andet problem.

Til formålet med dette afsnit lad os blive enige om, at en backup er en øjebliksbilledekopiering af systemets tilstand på det tidspunkt, hvor backupen blev startet. Kort sagt: uanset systemets tilstand på tidspunktet for backupen, fanges den tilstand og låses fast i backupen.

Med denne forståelse vil svaret på, hvordan man opnår backuperne og hvad der er bedst for dit miljø, i høj grad afhænge af dine krav og hostingudbyderens evne til at imødekomme disse krav. Men efter mest meningsfuld til mindst meningsfuld rækkefølge bør de nedenstående muligheder give lidt vejledning.

#### Snapshots (Billeder) {#snapshots}

Snapshots er den gyldne løsning til backuper, fordi de er nemme, ukomplicerede (indtil du vil gendanne) og "virker bare". Det kræver dog lidt hjælp fra din udbyder og gælder primært, hvis du har en VPS (Virtual Private Server) eller lignende. Flere udbydere nævnt i vores dokumentation over 'Kompatible Udbydere' tilbyder backuper, der ikke kræver yderligere indgriben eller overvejelse fra netværksadministratoren.

Hvor traditionelle backups målretter filer og databaser, målretter et snapshot hele disken. Det betyder, at ikke kun sidens data gemmes i snapshot'et, men også operativsystemet og konfigurationen. For mange er dette en markant fordel, da et nyt system næsten øjeblikkeligt kan oprettes fra et snapshot og bringes i drift til at erstatte en fejlramt instans. På samme måde kræver genopretningsprocessen for at hente filer blot at vedhæfte snapshot-billedet som en disk til en eksisterende instans, så filerne kan tilgås og kopieres.

Snapshots kan medføre en ekstra omkostning hos hostingudbyderen, men det er en forsikring mod uheld.

#### Eksterne scripts {#external-scripts}

Der ser ud til ikke at være mangel på eksterne scripts og løsninger til at backuppe WordPress- og MySQL-ressourcer, og disse vil fungere godt for Ultimate Multisite, da det er et WordPress plugin, der benytter WordPress filsystemet og databasen. En løsning, der backuper WordPress-siderne, vil derfor dække Ultimate Multisites behov tilstrækkeligt.

Vi kan ikke anbefale ét script frem for et andet, men vores generelle råd er at køre flere backup- og gendannelsestests for at sikre, at resultaterne er ønskelige, og at 'være helt sikker' ved løbende at evaluere scriptet og dets funktionalitet, især hvor en form for differential backup strategi anvendes.

Det skal bemærkes, at disse scripts vil øge systembelastningen under kørsel, hvilket skal tages i betragtning.

#### Plugins {#plugins}

Der er næsten ingen problemer i WordPress, som ikke kan løses med et plugin, og hvis styring af eksterne scripts ikke er din styrke, så er et plugin måske det næstbedste alternativ.

Selvom plugins varierer i muligheder og funktioner, udfører de fleste den samme grundlæggende opgave: at lave en kopi af WordPress-filerne og databasens indhold. Derefter adskiller funktionaliteten sig; nogle plugins kan sende backupene til eksterne tjenester som Google Drive eller Dropbox, eller til en form for kompatibel objektlagringstjeneste som S3, Wasabi eller andre. De mere omfattende plugins tilbyder differentielle backuper eller en slags strategi til kun at tage backup af de data, der er blevet ændret, for at spare omkostninger til eksternt lager.

Når du vælger dit plugin, så sørg for at tjekke, at det understøtter multisite. På grund af dets måde at fungere på kan du forvente en midlertidig belastning på serveren, mens backup-processen kører.

#### Domæne og SSL {#domain-and-ssl-1}

Der er allerede meget diskuteret om domænenavne i multisite _subdomain_ mode. En næsten universel løsning for netværksadministratorer er at bruge wildcard DNS-indstillinger.

![Eksempel på konfiguration af wildcard DNS-indstilling](/img/config/settings-domain-mapping.png)

Denne type DNS-indstilling vil med succes løse _subdomæner_ som ‘site1.domain.com’ og ‘site2.domain.com’ til en IP-adresse på 1.2.3.4, hvilket understøtter Ultimate Multisite og i højere grad WordPress Multisite ved brug af _subdomain_ mode.

Dette kan fungere perfekt for HTTP, fordi målhosten læses fra HTTP-headerne, men sjældent er nettet så simpelt i dag, at sikre HTTPS-transaktioner næsten er obligatoriske.

Heldigvis er der nemme muligheder for SSL-certifikater. I _subdirectory_ mode kan et almindeligt domæne-certifikat bruges. Disse er let tilgængelige og gratis fra hostingudbydere, som måske bruger den gratis LetsEncrypt-service eller en anden kilde. Ellers er de kommercielt tilgængelige hos myndighederne, hvis du kan generere anmodningen om certifikatsunderskrift (CSR).

For _subdomain_ mode vil brugen af et wildcard SSL-certifikat passe perfekt sammen med et wildcard domæne og tillade certifikatet at være autoritativt for roden og alle _subdomæner_ uden unødig konfiguration.

Det skal dog bemærkes, at wildcard SSL-certifikater muligvis ikke virker med tjenester som Cloudflare, medmindre du er på en enterprise-plan eller sætter indgangen til kun DNS, hvilket i så fald omgår al caching og optimering.

Ultimate Multisite ud af boksen løser dette problem ved at demonstrere vores omfattende erfaring med behovene for WordPress multisites. Ved at aktivere denne simple add-on vil Ultimate Multisite bruge dine Cloudflare-oplysninger til automatisk at tilføje DNS-indgange for netværks-sites i Cloudflare og sætte deres mode til 'proxied'. På denne måde vil hver netværks-subsite, når den oprettes, have fuld beskyttelse og alle fordelene ved Cloudflare, herunder SSL.

Afhængigt af karakteren og formålet med din Ultimate Multisite-installation kan der være behov for, at kunder bruger deres egne domæner. I dette tilfælde pålægges netværksadministratoren at løse to problemer: Én er hosting af domænenavnet og den anden er SSL-certifikaterne til domænet.

For mange er brugen af Cloudflare en nem mulighed. Kunden skal blot placere deres domæne på Cloudflare, pege en CNAME til roden af Ultimate Multisite og mappe deres domæne i Ultimate Multisite for at begynde at drage fordel af deres eget domænenavn.

Udover dette skal der søges alternative løsninger, hvilket er derfor grunden til, at Ultimate Multisite anbefaler en liste over Kompatible Leverandører (Compatible Providers). Dette skyldes, at processen med opsætning af DNS og SSL kan være en ikke triviel proces. Men med Ultimate Multisites integration med disse leverandører fjernes kompleksiteten meget, og proceduren bliver automatiseret.

#### Plugins {#plugins-1}

Det er meget sandsynligt, at du vil have brug for yderligere plugins til at give funktionalitet til dine kunder eller netværks-sider. Virker alle plugins med WordPress Multisite og Ultimate Multisite? Det afhænger af det.

Selvom de fleste plugins kan installeres i et WordPress Multisite, varierer aktivering og licensering fra forfatter til forfatter.

Udfordringen ligger i, hvordan licenser anvendes med nogle plugins, der kræver licens på en per-domæne basis. Det vil betyde, at for nogle plugins skal netværksadministrator manuelt aktivere licensen for hvert plugin på hver ny side.

Derfor kan det være bedst at tjekke med plugin-forfatteren, hvordan deres plugin vil fungere med et WordPress Multisite og eventuelle særlige krav eller procedurer, der kræves for at licensere det.
