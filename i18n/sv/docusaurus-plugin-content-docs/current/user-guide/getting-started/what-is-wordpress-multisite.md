---
title: Vad är WordPress Multisite?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# Vad är WordPress Multisite?

WordPress har en inbyggd funktion som kallas "Multisite" och som har funnits sedan WordPress 3.0 lanserades 2010. Sedan dess har funktionen uppdaterats ett flertal gånger med nya funktioner och förbättrad säkerhet.

Ett WordPress multisite kan enklast förklaras så här: Ett universitet har en enda WordPress-installation, men varje fakultet har sin egen WordPress-webbplats.

## 

## Vad är egentligen WordPress Multisite?

Multisite är en funktion i WordPress som gör att flera webbplatser kan dela på en och samma WordPress-installation. När multisite aktiveras omvandlas den ursprungliga WordPress-webbplatsen till det som brukar kallas ett **nätverk av webbplatser**.

Detta nätverk delar filsystem (vilket innebär att **plugins och teman också delas**), databas, WordPress kärnfiler, wp-config.php, och så vidare.

Det betyder att uppdateringar av WordPress, teman och plugins bara behöver göras en gång för alla webbplatser i nätverket eftersom de delar samma filer i filsystemet.

Detta är en av de största fördelarna med multisite – du kan utöka antalet webbplatser du hanterar utan att öka mängden arbete som krävs för att underhålla dina kunders webbplatser.

## 

## Subdomän eller underkatalog?

Det finns två sätt att köra WordPress multisite – och du måste välja ett när du konverterar din vanliga WordPress-installation till en multisite-installation:

**Subdomän:** t.ex.: [site.domain.com](http://site.domain.com)

…eller

**Underkatalog:** t.ex.: [yourdomain.com/site](http://yourdomain.com/site)

Varje läge har sina för- och nackdelar som du behöver tänka igenom innan du bestämmer dig.

En sak är viktig att notera: när du väl har bestämt dig är det väldigt svårt att byta från underkatalog till subdomän eller tvärtom – särskilt om du redan har skapat ett antal webbplatser.

Innan du fattar ditt beslut finns det några saker att tänka på:

**Underkatalogläge** är det enklaste alternativet när det gäller installation och underhåll. Detta beror på att alla webbplatser bara är sökvägar under huvuddomänen (t.ex. [yourdomain.com/subsite](http://yourdomain.com/subsite)). Därför behöver du bara **ett SSL-certifikat** för huvuddomänen, och det täcker hela nätverket.

Samtidigt innebär URL-strukturen att Google och de flesta andra sökmotorer betraktar alla underwebbplatser i ditt underkatalogbaserade nätverk som en enda stor webbplats. Det betyder att innehåll som dina slutkunder lägger till på underwebbplatser kan påverka SEO-prestandan för din landningssida, till exempel. Hur stor påverkan det har går att diskutera, och det finns argument för att en sådan uppställning till och med kan vara fördelaktig för SEO-prestandan.

**Subdomänläge** är lite mer komplicerat att sätta upp, men dess URL-struktur (t.ex. [subsite.yournetwork.com](http://subsite.yournetwork.com)) uppfattas generellt som "mer professionell".

En av de största utmaningarna med att sätta upp subdomänläge är SSL-täckning (HTTPS) för hela nätverket. Det handlar om att webbläsare betraktar subdomäner som separata enheter. Därför behöver du antingen ett eget SSL-certifikat för varje subdomän i ditt nätverk, eller en speciell typ av certifikat som kallas **Wildcard SSL-certifikat**. Under de senaste åren har webbhotell och kontrollpaneler blivit allt bättre på SSL-provisionering, och vissa erbjuder wildcard-certifikat med ett enda knapptryck, vilket minskar komplexitetsskillnaden mellan de två lägena.

Till skillnad från underkatalogläge betraktas underwebbplatser i ett subdomänbaserat nätverk av sökmotorer som separata webbplatser, vilket innebär att innehåll på en underwebbplats inte påverkar SEO-prestandan för andra underwebbplatser alls.

## Superadministratören

Vanliga WordPress-installationer med en enda webbplats låter dig lägga till obegränsat antal användare och ge dem olika användarroller med olika behörigheter.

I WordPress Multisite låses en ny typ av användare upp: **superadministratören** – och en ny adminpanel låses upp: **nätverkets adminpanel**.

Som namnet antyder har superadministratören superkrafter över nätverket och kan hantera alla dess underwebbplatser, plugins, teman – allt!

När du konverterar din WordPress-installation med en enda webbplats till multisite uppgraderas den ursprungliga administratören automatiskt till superadministratör.

Plugins och teman kan bara installeras eller avinstalleras från nätverkets adminpanel av superadministratörer. Administratörer för underwebbplatser kan sedan välja att aktivera eller inaktivera dessa plugins eller teman, såvida inte superadministratören har nätverksaktiverat ett plugin – då är det aktivt för alla underwebbplatser hela tiden.

_Observera: som du ser innebär det att bjuda in någon till ditt nätverk och ge dem superadministratörsstatus att denna användare får total kontroll över ditt nätverk. Exempelvis kan andra superadministratörer till och med ta bort din superadministratörsstatus, vilket i praktiken stänger ute dig från din egen nätverksadminpanel. För att ge Ultimate Multisite-kunder detaljerad kontroll över vad ytterligare superadministratörer kan göra har vi ett tillägg som heter Support Agents. Detta tillägg låter dig skapa ytterligare en typ av användare – en agent – med endast de behörigheter som behövs för att utföra sina uppgifter i nätverket._

## Vad delas mellan underwebbplatser och vad delas inte

Som vi nämnde tidigare är en av de stora fördelarna med WordPress multisite att alla underwebbplatser delar samma konfigurationer, kärnfiler, teman, plugins, WordPress kärnfiler, och så vidare.

Det finns dock element som är snyggt avgränsade per underwebbplats.

\- Till exempel får varje underwebbplats sin egen uppladdningsmapp. Det innebär att uppladdningar gjorda av användare på en viss underwebbplats inte kan nås från en annan underwebbplats.

\- Varje underwebbplats har sin egen adminpanel och kan aktivera eller inaktivera plugins eller teman, såvida de inte har nätverksaktiverats av en superadministratör.

\- De flesta databastabeller skapas för varje underwebbplats, vilket innebär att inlägg, kommentarer, sidor, inställningar med mera är avgränsade för varje underwebbplats.

## Användarhantering i WordPress Multisite

Ett känsligt ämne i WordPress multisite är användarhantering. WordPress användartabell är en av de få som delas mellan alla underwebbplatser.

Denna uppställning kan skapa problem beroende på vad du planerar att bygga med ditt nätverk. Exemplet nedan hjälper till att illustrera det mest påträngande problemet.

Tänk dig följande scenario:

Du skapar ett WordPress multisite-nätverk och börjar erbjuda underwebbplatser mot en månadsavgift till personer som vill ha en e-handelsbutik.

Du får din första betalande kund – Johan. Du skapar en webbplats för Johan i ditt nätverk, installerar alla nödvändiga plugins och skapar sedan en användare åt Johan så att han kan hantera sin butik.

Sedan kommer en andra kund – Alice. Du gör samma sak för henne och nu har hon också en butik i ditt nätverk.

Johan och Alice är båda dina kunder, men de känner inte varandra. Ännu viktigare är att om någon av dem besöker den andras butikswebbplats finns det inget sätt att veta att butiken drivs i samma nätverk av webbplatser.

En dag behöver Johan köpa ett par nya skor och han hittar de perfekta i Alices butik. När han försöker slutföra köpet får han felmeddelandet "e-postadressen används redan", vilket är konstigt eftersom Johan är 100% säker på att det här är första gången han besöker Alices webbplats.

Det som hände här är att Johans användare delas över hela nätverket, så när han försöker skapa ett konto för att checka ut i Alices butik upptäcker WordPress att en användare med samma e-postadress redan finns och visar ett fel.

_Observera: Vi förstår hur problematiskt detta kan vara beroende på ditt användningsfall, så Ultimate Multisite har ett alternativ som kringgår de vanliga kontrollerna för befintliga användare och tillåter att flera konton skapas med samma e-postadress. Varje konto är kopplat till en underwebbplats, så risken för kollision hålls minimal. I exemplet ovan skulle Johan inte få något felmeddelande och skulle kunna köpa skorna utan problem. Detta alternativ heter Enable Multiple Accounts och kan aktiveras under Ultimate Multisite → Settings → Login & Registration._

Även om användartabellen delas kan användare läggas till och tas bort från underwebbplatser av underwebbplatsens administratörer eller superadministratören, och de kan till och med ha olika användarroller på olika underwebbplatser.

## Prestandaöverväganden

WordPress multisite är verkligen kraftfullt när det gäller antalet webbplatser det kan hantera. Detta bekräftas av att [WordPress.com](https://WordPress.com), Edublogs och Campuspress alla är multisite-baserade tjänster och var och en driftar tusentals webbplatser.

Även om det i teorin inte finns något maxantal webbplatser du kan drifta på en enda WordPress multisite-installation, kan det i praktiken variera kraftigt hur många webbplatser du kan köra tillfredsställande beroende på ett antal olika faktorer: hur dynamiska webbplatserna är, vilka plugins som är tillgängliga för underwebbplatser, och så vidare.

Som tumregel gäller att ju enklare ditt nätverk är, desto bättre. Att föredra webbplatser där innehållet inte är särskilt dynamiskt (vilket gör dem till utmärkta kandidater för aggressiva cachningsstrategier) och att hålla plugin-stacken så lätt som möjligt (ju färre aktiva plugins desto bättre) kan drastiskt öka antalet underwebbplatser du kan drifta.

Det bästa är att eftersom allt är WordPress här kommer samma verktyg du redan känner till och älskar för prestandaförbättringar också att fungera för ett multisite-nätverk.

Den främsta flaskhalsen för multisite är databasen, men om allt annat är korrekt konfigurerat kan det ta ett par tusen webbplatser innan du behöver oroa dig för det. Även då finns det lösningar som kan läggas till progressivt vid den tidpunkten (som lösningar för databas-sharding, till exempel).
