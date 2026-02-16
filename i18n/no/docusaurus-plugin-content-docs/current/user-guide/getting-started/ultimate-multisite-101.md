---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101

Ultimate Multisite er en WordPress Multisite-utvidelse som lar deg tilby WaaS – eller nettsteder som en tjeneste – til kundene dine. Før vi går i dybden og ser på hvordan Ultimate Multisite kan hjelpe virksomheten din og kundene dine, må vi først gå gjennom noe grunnleggende.

## WordPress Multisite

De fleste av oss kjenner til en vanlig WordPress-installasjon. Enten oppretter du den via kontrollpanelet hos webhotellet ditt, eller – for de modige – setter du opp en ny webserver og database, laster ned kjernefilene og starter installasjonen.

Dette fungerer for millioner av WordPress-nettsteder over hele verden, men la oss se på volumet fra perspektivet til et byrå eller en hostingleverandør.

Å opprette ett WordPress-nettsted er enkelt nok, og selv hundrevis via et automatisert kontrollpanel går greit. Men problemene viser seg raskt når det kommer til å administrere disse nettstedene. Uten vedlikehold blir du et opplagt mål for skadevare. Å vedlikeholde krever innsats og ressurser, og selv om det finnes eksterne verktøy og utvidelser som kan forenkle drift og administrasjon av WordPress-nettsteder, har kundene fortsatt administratortilgang – noe som lett kan undergrave disse tiltakene.

WordPress har en innebygd funksjon kalt «Multisite», som stammer helt tilbake til 2010 og lanseringen av WordPress 3.0. Siden den gang har den fått en rekke oppdateringer med nye funksjoner og forbedret sikkerhet.

I praksis kan WordPress Multisite forstås slik: Et universitet har én enkelt WordPress-installasjon, men hvert fakultet har sitt eget WordPress-nettsted.

For å bryte ned dette skal vi se på noen grunnleggende begreper som brukes både i Ultimate Multisites dokumentasjon og i WordPress-miljøet generelt.

### Nettverket

I WordPress-sammenheng er et multisite-nettverk et oppsett der flere undernettsteder kan administreres fra ett felles kontrollpanel. Selv om opprettelsen av et multisite-nettverk varierer mellom hostingleverandører, ender det vanligvis med noen ekstra direktiver i wp-config.php-filen som forteller WordPress at det kjører i denne modusen.

Det er flere viktige forskjeller mellom et multisite-nettverk og en frittstående WordPress-installasjon, som vi kort skal gå gjennom.

#### Subdomene vs. underkatalog

En av de første avgjørelsene du må ta, er om multisite-installasjonen skal bruke _underkataloger_ eller _subdomener_. Ultimate Multisite fungerer like godt med begge valg, men det er noen arkitektoniske forskjeller mellom de to konfigurasjonene.

I _underkatalog_-konfigurasjon får nettverksnettstedene en sti basert på hoveddomenet. For eksempel vil et nettverkssted kalt «site1» få full URL som https://domain.com/site1. I _subdomene_-konfigurasjon får nettverksstedet sitt eget _subdomene_ utledet fra hoveddomenet. Dermed vil et nettsted kalt «site1» få full URL som https://site1.domain.com/.

Begge alternativene er fullt gyldige, men bruk av _subdomener_ gir en del fordeler – samtidig som det krever mer planlegging av arkitekturen.

Når det gjelder DNS, er _underkataloger_ relativt enkelt. Siden nettverksnettstedene bare er underbaner av hovedstien, trenger du bare én DNS-oppføring for hoveddomenet. For _subdomener_ er det litt mer komplisert – du trenger enten en egen CNAME-oppføring for hvert nettverkssted, eller en jokertegn-oppføring (*) i DNS-postene.

Et annet viktig aspekt er SSL og utstedelse og bruk av SSL-sertifikater. I _underkatalog_-konfigurasjon kan ett enkelt domenesertifikat brukes, siden nettverksnettstedene bare er stier under hoveddomenet. Et sertifikat for domain.com vil altså dekke SSL for https://domain.com/site1, https://domain.com/site2 og så videre.

I _subdomene_-konfigurasjon er et jokertegn-SSL-sertifikat (wildcard) et av de vanligste alternativene. Denne typen SSL-sertifikat gir kryptering for et domene og alle dets _subdomener_. Et slikt sertifikat vil dermed dekke https://site1.domain.com, https://site2.domain.com og https://domain.com selv.

Det finnes andre alternativer, men disse er ofte begrenset i omfang og bruksområde, og krever ekstra konfigurasjon og vurdering av egnethet.

#### Utvidelser og temaer

Det WordPress gir, tar det også bort – i hvert fall fra kundens perspektiv. I en frittstående WordPress-installasjon, hvis nettstedsadministratoren installerer en dårlig utvidelse eller ikke holder installasjonen oppdatert, er det bare de selv som rammes. Men hvis en nettstedsadministrator installerer en dårlig utvidelse i en multisite-installasjon, rammes alle nettstedene i nettverket.

Derfor fjerner WordPress i multisite-modus muligheten for nettstedsadministratorer til å installere utvidelser og temaer, og flytter denne muligheten til en nyopprettet nettverksadministrator- eller «superadmin»-rolle. Denne privilegerte rollen kan så bestemme om administratorer av nettverksnettsteder skal få se eller få tilgang til utvidelsesmenyen i kontrollpanelet, og eventuelt om de kan _aktivere_ eller _deaktivere_ utvidelser.

Nettverksadministratoren er altså ansvarlig for å installere utvidelser og temaer i nettverket, og delegerer rettigheter til å bruke disse til de enkelte nettstedene. Nettstedsadministratorer kan ikke installere utvidelser og temaer, eller få tilgang til utvidelser og temaer som ikke er tilordnet deres nettsted.

#### Brukere og administratorer

I en WordPress Multisite deler alle nettverksnettsteder samme database, og dermed også samme brukere, roller og rettigheter. Den beste måten å tenke på det er at alle brukere er medlemmer av nettverket, ikke av et bestemt nettsted.

Med denne forståelsen kan det være uønsket å la brukere opprettes fritt, og derfor fjerner WordPress Multisite denne muligheten fra nettstedsadministratorene og flytter den til nettverksadministratoren. Nettverksadministratoren kan i sin tur delegere de nødvendige rettighetene til en nettstedsadministrator slik at de kan opprette brukerkontoer for sitt eget nettsted.

<!-- Screenshot unavailable: WordPress Multisite network user management interface -->

For å gjenta: selv om brukerkontoene ser ut til å tilhøre et bestemt nettsted, er de faktisk tilordnet nettverket og må derfor være unike på tvers av hele nettverket. Det kan forekomme at brukernavn ikke er tilgjengelige av denne grunn.

Selv om dette ikke er et fremmed konsept i bedriftssystemer, er denne sentrale brukerregistreringen og -autentiseringen ofte vanskelig å forstå for folk som er vant til frittstående WordPress-installasjoner, der brukeradministrasjon er noe enklere.

#### Media

Mens nettverksnettsteder deler én enkelt database i en WordPress Multisite, har de separate mapper på filsystemet for mediefiler.

Standard WordPress-plassering (wp-content/uploads) beholdes, men stien endres for å gjenspeile nettverksstedets unike ID. Mediefiler for et nettverkssted vises derfor som wp-contents/uploads/site/[id].

#### Permalenker

Vi nevnte tidligere at det er tydelige fordeler med _subdomene_ fremfor _underkatalog_-konfigurasjon, og her er den: stier.

I en _underkatalog_-konfigurasjon må hovednettstedet (det første nettstedet som opprettes når nettverket etableres) og nettverksundernettstedene dele samme sti fra domenenavnet. Dette kan føre til mange konflikter.

For innlegg legges en obligatorisk /blog/-sti til på hovednettstedet for å unngå kollisjoner med nettverksnettsteder. Dette betyr at pene permalenker som «Innleggsnavn» vil vises som domain.name/blog/post-name/

<!-- Screenshot unavailable: WordPress permalink settings showing /blog/ path in subdirectory configuration -->

I en _subdomene_-konfigurasjon er dette ikke nødvendig, fordi hvert nettverkssted har fullstendig domeneseparasjon og dermed ikke trenger å dele én enkelt sti. De beholder sine egne distinkte stier basert på sitt _subdomene_.

<!-- Screenshot unavailable: WordPress permalink settings for subdomain configuration -->

#### Statiske sider

I _underkatalog_-konfigurasjon kan navnekonflikter også oppstå for statiske sider, siden hovednettstedet og nettverksnettstedene deler samme sti.

For å forhindre dette tilbyr WordPress en måte å blokkere visse nettstedsnavn slik at de ikke kolliderer med navnene på det første nettstedet. Vanligvis legger nettverksadministratoren inn rotstiene til hovednettstedets sider.

<!-- Screenshot unavailable: WordPress network settings showing banned site names to prevent conflicts -->

I _subdomene_-konfigurasjon reduseres muligheten for navnekonflikter fordi _subdomenet_ er unikt for nettverksstedet og ikke relatert til hovednettstedet på noen måte.

### Registrering

I nettverksinnstillingene for WordPress Multisite er flere nye brukerregistreringsalternativer tilgjengelige, som lar nye og eksisterende brukere opprette nettsteder.

<!-- Screenshot unavailable: WordPress Multisite network settings showing registration options -->

I motsetning til frittstående WordPress-installasjoner har nettverksnettsteder ikke de kjente alternativene for å tillate brukerregistreringer eller tildele registreringer til roller.

<!-- Screenshot unavailable: WordPress standalone site user registration settings showing limited options -->

Når brukerkontoer opprettes, genereres de på nettverksnivå. I stedet for å tilhøre ett bestemt nettsted tilhører de altså nettverket. Dette har noen tydelige fordeler og ulemper.

For eksempel, anta at din WordPress Multisite var i nyhets- og informasjonsbransjen. Du ville etablere multisiten og deretter opprette nettverksnettsteder for økonomi, teknologi, underholdning og andre interesseområder, samtidig som du beholdt overordnet kontroll over utvidelser og temaer. Hvert nettverkssted ville ha langt større kontroll over utseende og brukeropplevelse enn det egendefinerte innholdstyper eller vanlige innleggskategorier ville gitt.

Når en bruker logger inn, logger de inn på nettverket og er dermed også logget inn på hvert nettverkssted for en sømløs opplevelse. Hvis nettstedet ditt var abonnementsbasert, ville dette være den ideelle løsningen.

Hvis derimot hensikten med multisiten var å tilby adskilte nettverksnettsteder uten noen relasjon til hverandre, vil det nesten alltid være nødvendig med eksterne eller ekstra utvidelser for å manipulere brukerrollene.

### Domene og SSL

La oss snakke om en WordPress Multisite-installasjon som nesten unnslipper vår oppmerksomhet – WordPress.com. Dette er uten tvil det mest omfattende eksempelet på en WordPress Multisite og demonstrerer dens omfattende muligheter for tilpasning til et bestemt formål.

I dag på det moderne internettet er bruk av SSL nærmest obligatorisk, og nettverksadministratorer av WordPress Multisites møter snart disse utfordringene.

I _subdomene_-konfigurasjon opprettes nettsteder basert på rotdomenet. Et nettsted kalt «site1» ville bli opprettet som «site1.domain.com». Ved å bruke et jokertegn-SSL-sertifikat kan en nettverksadministrator løse denne utfordringen og tilby SSL-kryptering for nettverket.

WordPress Multisite inneholder en domenekartleggingsfunksjon som lar nettverksnettsteder assosieres med egendefinerte domenenavn eller domenenavn som er forskjellige fra nettverkets rotdomene.

For nettverksadministratorer utgjør dette et ekstra lag av kompleksitet både i domenekonfigurasjon og i utstedelse og vedlikehold av SSL-sertifikater.

Selv om WordPress Multisite gir mulighet for å la [www.anotherdomain.com](http://www.anotherdomain.com) kartlegges til «site1», står nettverksadministratoren igjen med utfordringen å eksternt administrere DNS-oppføringene og implementere SSL-sertifikater.

## Ultimate Multisite

Nå som vi forstår forskjellene mellom en frittstående WordPress-installasjon og en Multisite-installasjon, la oss se på hvordan Ultimate Multisite er det ultimate verktøyet for å tilby nettsteder som en tjeneste.

### Introduksjon

Ultimate Multisite er din sveitsiske lommekniv når det gjelder å lage en nettsted-som-en-tjeneste (WaaS). Tenk på Wix.com, Squarespace, WordPress.com – og tenk så på å eie din egen tjeneste.

Under panseret bruker Ultimate Multisite WordPress Multisite, men på en måte som ikke bare løser de mange utfordringene nettverksadministratorer møter med multisite-installasjoner, men også utvider mulighetene slik at et bredt spekter av bruksområder støttes.

I de følgende avsnittene skal vi se på noen vanlige bruksområder og hva som kreves for å støtte dem.

### Bruksområder

#### Tilfelle 1: Et byrå

Kjernekompetansen til et byrå ligger vanligvis i design av nettsteder, mens aspekter som hosting eller markedsføring tilbys som tilleggstjenester.

For byråer representerer Ultimate Multisite en utrolig verdiøkning gjennom sine muligheter til å drifte og administrere flere nettsteder på én enkelt plattform. Dette gjelder spesielt for byråer som standardiserer designene sine på bestemte temaer som GeneratePress, Astra, OceanWP eller andre – de kan utnytte Ultimate Multisites evne til automatisk å aktivere disse temaene for hvert nye nettsted.

På samme måte, med overfloden av tilbud på byråprising for vanlige og populære utvidelser, lar Ultimate Multisite byråer utnytte eksisterende investeringer ved å tilby en felles plattform der utvidelser kan installeres, vedlikeholdes og brukes.

Mest sannsynlig ønskes det å bruke en tilpasset domenekonfigurasjon, og heldigvis gjør Ultimate Multisite det utrolig enkelt å håndtere domenekartlegging og SSL-sertifikater gjennom integrasjoner med en rekke populære hostingleverandører samt tjenester som Cloudflare og cPanel.

Ved å benytte en av disse leverandørene eller ved å plassere Ultimate Multisite bak Cloudflare, blir aspekter som administrasjon av domener og SSL-sertifikater relativt trivielle.

Byråer som foretrekker å ha stram kontroll over opprettelse av nettsteder vil sette pris på hvor enkelt de kan opprette nettsteder og knytte dem til kunder og planer gjennom Ultimate Multisites strømlinjeformede grensesnitt.

![Ultimate Multisite nettstedsadministrasjonsgrensesnitt](/img/admin/sites-list.png)

Stram kontroll over utvidelser og temaer opprettholdes per produkt gjennom Ultimate Multisites intuitive grensesnitt, som lar utvidelser og temaer gjøres tilgjengelige eller skjules, samt deres aktiveringsstatus når et nytt nettsted opprettes.

![Grensesnitt for produktutvidelsebegrensninger](/img/config/product-plugins.png)

Temaer tilbyr lignende funksjonalitet, der bestemte temaer kan aktiveres eller skjules ved nettstedsopprettelse.

![Grensesnitt for produkttemabegrensninger](/img/config/product-themes.png)

Byråer vil finne trygghet med Ultimate Multisite, som lar dem gjøre det de gjør best – designe eksepsjonelle nettsteder.

#### Tilfelle 2: Nisjeleverandør

Det er et gammelt ordtak som sier: «Gjør én ting, og gjør det godt». For mange spesialister betyr dette å lage et produkt eller en tjeneste rundt én enkelt kjerneidé.

Kanskje du er en ivrig golfer som tilbyr nettsteder til klubber, eller kanskje du er en ivrig e-sportspiller som tilbyr nettsteder til klaner. Eller en person som tilbyr en reservasjonstjeneste til restauranter?

Av mange grunner vil du ønske å tilby tjenester basert på et felles rammeverk og plattform. Det kan være at du har designet eller investert i skreddersydde utvidelser for å tilby nødvendig funksjonalitet, eller det kan være at bransjens beste praksis krever en standardisert tilnærming til design.

En av Ultimate Multisites innovative funksjoner er bruken av malnetttsteder. Et malnettssted er et der temaet er installert og aktivert, nødvendige utvidelser er installert og aktivert, og eksempelinnlegg eller -sider er opprettet. Når en kunde oppretter et nytt nettsted basert på malen, kopieres innholdet og innstillingene fra malen til det nyopprettede nettstedet.

For en leverandør av nisjenettsteder og -tjenester gir dette en uovertruffen fordel i evnen til å umiddelbart opprette et nettsted klart til bruk med egendefinerte utvidelser og design. Kunden trenger bare å gi minimal input for å fullføre tjenesten.

Avhengig av kravene kan både _underkatalog_- eller _subdomene_-konfigurasjoner passe, og arkitekturvalgene vil være mellom et enkelt SSL-sertifikat for _underkataloger_ eller et jokertegn-SSL-sertifikat for _subdomener_.

#### Tilfelle 3: WordPress-webhosting

Det finnes utallige måter å drifte WordPress-nettsteder på, men sjelden er det så enkelt som å gi webplass til en kunde med en forhåndsinstallert versjon av WordPress. Dette er fordi en rekke beslutninger og vurderinger må komme sammen for å tilby en meningsfull tjeneste.

Ultimate Multisite utmerker seg på dette området ved å tilby en omfattende nøkkelferdig løsning for hosting av WordPress-nettsteder. Løsningen inkluderer kjernemekanismer for abonnementstjenester, betalingsinnkreving, betalingsskjemaer, rabattkuponger og kundekommunikasjon.

Mye av det integrerte arbeidet som kreves for å korrekt installere, konfigurere og vedlikeholde en WordPress Multisite håndteres av Ultimate Multisite, slik at nettverksadministratorer kun trenger å vurdere aspekter som gjelder deres tjeneste eller nisje, som produktnivåer, prising og tjenestetilbud.

For utviklere som ønsker å integrere med Ultimate Multisite, tilbyr løsningen også et omfattende RESTful API og Webhooks for hendelsesvarsling.

Uten avhengighet av en mengde eksterne utvidelser og lisenser, tilbyr Ultimate Multisite en funksjonsrik løsning som er sammenlignbar med Wix, Squarespace, WordPress.com og andre.

### Arkitekturvurderinger

Selv om dette ikke er en uttømmende guide, bør følgende punkter gi veiledning til riktig valg av teknologier for å støtte en Ultimate Multisite-installasjon.

#### Delt vs. dedikert hosting

Dessverre er ikke alle hostingleverandører like, og noen praktiserer ekstrem servertetthet. Lavkostleverandører genererer vanligvis inntekter ved å maksimere servertettheten. Dermed kan din Ultimate Multisite-installasjon være bare ett av flere hundre nettsteder på samme server.

Uten passende sikkerhetstiltak fra leverandøren opplever nettsteder på en delt server «bråkete nabo»-problemet. Det vil si at et nettsted på samme server forbruker så mange ressurser at andre nettsteder må konkurrere om de gjenværende ressursene. Dette viser seg ofte som nettsteder som er trege eller ikke responderer i tide.

Som webhost-leverandør selv vil ringvirkningene bety at kundene dine opplever dårlige hastigheter, lav siderangering og høye fluktfrekvenser, noe som ofte resulterer i kundefrafall når de søker tjenester andre steder.

Kort sagt: billig betyr ikke bra.

Ultimate Multisite er kjent for å fungere med en rekke gode hostingleverandører og integrerer godt med deres miljø for å tilby funksjoner som domenekartlegging og automatisk SSL. Disse leverandørene verdsetter ytelse og tilbyr en høyere grad av service enn delt hosting.

For en liste over kompatible leverandører og fullstendige oppsettsinstruksjoner for hver, se dokumentasjonen for Compatible Providers.

#### Ytelseshensyn

Ultimate Multisite er ikke en treg applikasjon – snarere er den bemerkelsesverdig rask. Den yter imidlertid bare så godt som den underliggende applikasjonen og infrastrukturen, og kan bare utnytte det den har tilgang til.

Tenk deg dette: Du er nettverksadministrator for en Ultimate Multisite-installasjon med 100 nettsteder. Noen av disse nettstedene gjør det bra og tiltrekker seg en rekke besøkende hver dag.

Dette scenarioet ville vært annerledes i mindre skala med for eksempel ett til fem nettsteder, men før eller siden ville skalaproblemer bli tydelige.

Uten tiltak ville den ene Ultimate Multisite-siden være ansvarlig for å oppfylle forespørslene fra alle besøkende til alle nettstedene. Disse forespørslene kan være for dynamiske PHP-sider eller statiske ressurser som stilark, javascript eller mediefiler. Enten det er ett eller hundre nettsteder, blir disse oppgavene repetitive, monotone og bortkastede. Det er unødvendig å bruke CPU-kraft og minne til å behandle en PHP-fil når utdataene er den samme statiske informasjonen for hver forespørsel.

På samme måte genererer én forespørsel om en PHP- eller HTML-side flere påfølgende forespørsler om skript, stilark og bildefiler. Disse forespørslene rettes direkte mot Ultimate Multisite-serveren din.

Man kunne enkelt løse dette problemet ved å oppgradere serveren, men det løser ikke et sekundært problem – geografiske forsinkelser. Bare flere servere på flere lokasjoner kan ordentlig adressere dette problemet.

Av denne grunn bruker de fleste nettverksadministratorer frontend-cache-løsninger og innholdsleveringsnettverk (CDN) for å oppfylle forespørslene om statiske sider. Å oppfylle disse forespørslene og levere ressurser før forespørselen når serveren sparer prosesseringsressurser, eliminerer forsinkelser, unngår unødvendige oppgraderinger og maksimerer teknologiinvesteringene.

Ultimate Multisite inkluderer et sofistikert Cloudflare-tillegg som lar nettverksadministratorer plassere installasjonene sine bak Cloudflare og benytte ikke bare cache-funksjonene, men også DNS-hosting, SSL-sertifikater og sikkerhetsmekanismer.

#### Sikkerhetskopier

Man kunne spørre 50 personer om råd om sikkerhetskopier og få 50 forskjellige meninger om sikkerhetskopistrategier. Svaret er: det kommer an på.

Det som ikke er omstridt, er at sikkerhetskopier er nødvendige, og at det er nesten utenkelig at disse ikke administreres av leverandøren – spesielt én som tilbyr en administrert tjeneste. Følgelig vil kundene se til nettverksadministratoren for å tilby og administrere denne tjenesten. Hvem nettverksadministratoren ser til, er et helt annet problem.

For formålet med dette avsnittet, la oss enes om at en sikkerhetskopi er en tidspunktskopi av systemtilstanden på det tidspunktet sikkerhetskopien ble startet. Enkelt sagt: uansett hva tilstanden til systemet er på tidspunktet for sikkerhetskopien, fanges den tilstanden opp og låses i sikkerhetskopien.

Med denne forståelsen vil svaret på hvordan man oppnår sikkerhetskopiene og hva som er best for ditt miljø i stor grad avhenge av dine krav og hostingleverandørens evne til å oppfylle disse kravene. I rekkefølge fra mest til minst oppfattet, bør alternativene nedenfor gi noe veiledning.

#### Øyeblikksbilder

Øyeblikksbilder er sølvkulene for sikkerhetskopier fordi de er enkle, ukompliserte (inntil du vil gjenopprette) og «bare fungerer». Det krever imidlertid litt hjelp fra leverandøren din og gjelder stort sett bare hvis du har en VPS (Virtual Private Server) eller lignende. Flere leverandører oppført i vår dokumentasjon for «Compatible Providers» tilbyr sikkerhetskopier som ikke krever ytterligere inngrep eller vurdering fra nettverksadministratoren.

Der tradisjonelle sikkerhetskopier retter seg mot filer og databaser, retter et øyeblikksbilde seg mot hele disken. Dette betyr at ikke bare nettstedets data fanges i øyeblikksbildet, men også operativsystemet og konfigurasjonen. For mange er dette en tydelig fordel, ettersom et nytt system kan startes nesten umiddelbart fra et øyeblikksbilde og settes i drift for å erstatte en sviktende instans. På samme måte krever gjenopprettingsprosessen for å hente filer bare å koble øyeblikksbildet som en disk til en eksisterende instans slik at filene kan aksesseres og kopieres.

Øyeblikksbilder kan medføre en ekstra kostnad hos hostingleverandøren, men det er en forsikring mot uhell.

#### Eksterne skript

Det ser ikke ut til å være mangel på eksterne skript og løsninger for å sikkerhetskopiere WordPress- og MySQL-ressurser, og disse ville fungere godt for Ultimate Multisite siden det er en WordPress-utvidelse som bruker WordPress' filsystem og database. En løsning som sikkerhetskopierer WordPress-nettsteder vil dermed dekke Ultimate Multisites behov.

Vi kan ikke anbefale ett skript fremfor et annet, men vårt generelle råd er å kjøre flere sikkerhetskopierings- og gjenopprettingstester for å sikre at resultatene er som ønsket, og å «være sikker for å være sikker» ved kontinuerlig å evaluere skriptet og dets funksjonalitet, spesielt der det brukes en form for differensiell sikkerhetskopistrategi.

Det bør bemerkes at disse skriptene, mens de kjører, vil øke systembelastningen, noe som bør tas i betraktning.

#### Utvidelser

Det er nesten intet problem i WordPress som ikke kan løses med en utvidelse, og hvis administrasjon av eksterne skript ikke er din kopp te, er kanskje en utvidelse det nest beste alternativet.

Selv om utvidelser varierer i alternativer og funksjoner, utfører de stort sett samme funksjon: å lage en kopi av WordPress-filene og databaseinnholdet. Deretter varierer funksjonaliteten, da noen utvidelser kan sende sikkerhetskopiene til eksterne tjenester som Google Drive eller Dropbox, eller til en kompatibel objektlagringstjeneste som S3, Wasabi eller andre. De mer omfattende utvidelsene tilbyr differensielle sikkerhetskopier eller en form for strategi for å sikkerhetskopiere bare data som har blitt endret for å spare eksterne lagringskostnader.

Når du velger utvidelse, pass på å verifisere at den er multisite-bevisst. På grunn av dens virkemåte kan du forvente midlertidig belastning på serveren mens sikkerhetskopien kjører.

#### Domene og SSL

Mye har allerede blitt diskutert angående domenenavn i multisite _subdomene_-modus. En nesten universell løsning for nettverksadministratorer er å bruke jokertegn-DNS-oppføringer.

![Eksempel på konfigurering av jokertegn-DNS-oppføring](/img/config/settings-domain-mapping.png)

Denne typen DNS-oppføring vil løse _subdomener_ som «site1.domain.com» og «site2.domain.com» til en IP-adresse på 1.2.3.4, og dermed støtte Ultimate Multisite og i større grad WordPress Multisite ved bruk av _subdomene_-modus.

Dette kan fungere helt fint for HTTP fordi målverten leses fra HTTP-hodene, men sjelden er nettet så enkelt i dag der sikre HTTPS-transaksjoner er nærmest obligatoriske.

Heldigvis finnes det enkle alternativer for SSL-sertifikater. I _underkatalog_-modus kan et vanlig domenesertifikat brukes. Disse er lett og gratis tilgjengelige fra hostingleverandører som kanskje bruker den gratis LetsEncrypt-tjenesten eller en annen kilde. Ellers er disse kommersielt tilgjengelige fra sertifikatmyndigheter hvis du kan generere sertifikatsigneringsforespørselen.

For _subdomene_-modus vil bruken av et jokertegn-SSL-sertifikat passe perfekt med et jokertegn-domene og la sertifikatet være autoritativt for rotdomenet og alle _subdomener_ uten ekstra konfigurasjon.

Det bør imidlertid bemerkes at jokertegn-SSL-sertifikater kanskje ikke fungerer med tjenester som Cloudflare med mindre du er på en enterprise-plan, eller setter oppføringen til kun DNS, i hvilket tilfelle all caching og optimalisering forbigås.

Rett ut av boksen tilbyr Ultimate Multisite en løsning på dette problemet, som demonstrerer vår omfattende erfaring med behovene til WordPress Multisites. Ved å aktivere dette enkle tillegget vil Ultimate Multisite bruke dine Cloudflare-legitimasjoner til automatisk å legge til DNS-oppføringer for nettverksnettsteder i Cloudflare og sette deres modus til «proxied». På denne måten vil hvert nettverksundersted, når det opprettes, ha full beskyttelse og fordeler fra Cloudflare, inkludert SSL.

Avhengig av naturen og formålet med din Ultimate Multisite-installasjon kan det være behov for at kunder bruker sine egne domener. I dette tilfellet har nettverksadministratoren to problemer å løse. Ett: hosting av domenenavnet, og to: SSL-sertifikater for domenet.

For mange er bruken av Cloudflare et enkelt alternativ. Kunden trenger bare å plassere domenet sitt på Cloudflare, peke en CNAME til rotdomenet til Ultimate Multisite og kartlegge domenet sitt i Ultimate Multisite for å begynne å dra nytte av sitt egendefinerte domenenavn.

Utenom dette må alternative løsninger søkes, noe som er grunnen til at Ultimate Multisite anbefaler en liste over Compatible Providers. Dette er fordi prosessen med å sette opp DNS og SSL kan være en ikke-triviell prosess. Men med Ultimate Multisites integrasjon med disse leverandørene fjernes mye av kompleksiteten, og prosedyren er automatisert.

#### Utvidelser

Det er høyst sannsynlig at du trenger ekstra utvidelser for å tilby funksjonalitet til kundene dine eller nettverksnettstedene. Fungerer alle utvidelser med WordPress Multisite og Ultimate Multisite? Vel, det kommer an på.

Mens de fleste utvidelser kan installeres i en WordPress Multisite, varierer aktivering og lisensiering fra utvikler til utvikler.

Utfordringen ligger i hvordan lisensiering brukes, da noen utvidelser krever lisensiering per domene. Dette betyr at for noen utvidelser må nettverksadministratoren manuelt aktivere lisensen for hver utvidelse på hvert nytt nettsted.

Derfor kan det være lurt å sjekke med utvidelsens utvikler om hvordan deres utvidelse fungerer med en WordPress Multisite og eventuelle spesielle krav eller prosedyrer som kreves for å lisensiere den.
