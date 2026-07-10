---
title: Hvad er WordPress Multisite?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# Hvad er WordPress Multisite? {#what-is-wordpress-multisite}

I kernen af WordPress findes der en funktion kaldet 'Multisite', som har sine rødder tilbage i 2010 med lanceringen af WordPress 3.0. Siden da har den gennemgået flere revisioner, der sigter mod at introducere nye funktioner og styrke sikkerheden.

I bund og grund kan et WordPress multisite tænkes på som dette: En Universitet vedligeholder én enkelt installation af WordPress, men hver fakultet vedligeholder sin egen WordPress-side.

##

## Hvad er WordPress Multisite præcist? {#what-exactly-is-wordpress-multisite}

Multisite er en funktion i WordPress, der gør det muligt for flere sider at dele én enkelt WordPress-installation. Når multisite aktiveres, konverteres den oprindelige WordPress-side til at understøtte det, man normalt kalder et **netværk af sider**.

Dette netværk deler filsystemet (hvilket betyder, at **plugins og themes også deles**), databasen, de kernefiler for WordPress, wp-config.php osv.

Det betyder, at opdateringer til WordPress, temaer og plugins kun behøver at blive udført én gang for hele dit netværk af sider, da de deler de samme filer på filsystemet.

Dette er en af de største fordele ved multisite, da det giver dig mulighed for at vokse antallet af sider, du administrerer, samtidig med at antallet af opgaver, du skal udføre for at vedligeholde dine kunders sider, forbliver det samme.

##

## Subdomæne eller undermappe? {#subdomain-or-subdirectory}

Der er to måder at køre WordPress multisite på – og du skal vælge en, når du konverterer din almindelige WordPress-installation til en multisite-installation:

**Subdomæne:** f.eks.: [site.domain.com](http://site.domain.com)

…eller

**Undermappe:** f.eks.: [yourdomain.com/site](http://yourdomain.com/site)

Hver metode har fordele og ulemper, som du skal tage højde for, når du træffer denne beslutning.

Et vigtigt at bemærke: når du har truffet din beslutning, er det virkelig svært at ændre dit netværksstruktur fra undermappe til subdomain eller omvendt – især hvis du allerede har et par sider oprettet.

Før du træffer den beslutning, er her et par ting, du skal huske:

**Undermappe-tilstand (Subdirectory Mode)** er den nemmeste tilstand med hensyn til opsætning og vedligeholdelse. Det skyldes, at alle sider blot er stier knyttet til hoveddomænet (f.eks. [dinwebsted.com/subsite](http://dinwebsted.com/subsite)). Som følge heraf behøver du kun **ét SSL-certifikat** til hoveddomænet, og det dækker hele netværket.

Samtidig vil Google og de fleste andre søgemaskiner betragte alle undermappene på dit undermappe-baserede netværk som én kæmpe side. Som følge heraf kan indhold tilføjet til undermappene af dine slutkunder påvirke SEO-ydelsen af din landingsside, for eksempel. Omfanget af påvirkningen er omdiskuteret, og der er et argument for, at en sådan opsætning faktisk kan være gavnlig for SEO-ydelsen.

**Subdomæne-tilstand (Subdomain Mode)** er lidt mere kompleks at sætte op, men dens URL-struktur (f.eks. [subsite.dinnetværk.com](http://subsite.dinnetværk.com)) opfattes generelt som "mere professionel".

Et af de største udfordringer ved opsætning af subdomain mode er SSL-dækningen (HTTPS) for hele netværket. Det skyldes, at browsere betragter subdomæner som isolerede enheder. Som følge heraf skal du have et andet SSL-certifikat til hver subdomæne på dit netværk, eller en særlig type certifikat kaldet et **Wildcard SSL certificate**. I de senere år har hostingudbydere og paneler forbedret deres SSL-provisionering, og nogle tilbyder wildcard-certifikater med ét klik, hvilket lukker kløften mellem de to modes kompleksitet i opsætningen.

I modsætning til subdirectory mode betragter søgemaskiner subsites på et subdomain-baseret netværk som separate hjemmesider, hvilket betyder, at indhold på én subsite slet ikke påvirker SEO-ydelsen af de andre subsites.

## Super Admin {#the-super-admin}

Single-site WordPress installationer giver dig mulighed for at tilføje et ubegrænset antal brugere og give disse brugere forskellige brugerroller med forskellige rettigheder.

I WordPress Multisite får en ny type bruger låst op: **super admin** – og et nyt admin panel låses også op: **network admin panel**.

Som navnet antyder har super admin overmagter over netværket, idet de kan administrere alle dets subsites, plugins, themes, alt!

Når du konverterer din single-site WordPress installation til multisite, bliver den oprindelige administrator af den enkelt site automatisk opgraderet til super admin.

Plugins og themes kan kun installeres eller fjernes fra network admin panel af super admins. Subsite-administratorer kan derefter vælge at aktivere eller deaktivere disse plugins eller themes, medmindre en super admin i netværket aktiverer et plugin, hvilket tvinger det til at være aktivt for alle subsites hele tiden.

_Bemærk: som du kan se, at man inviterer nogen ind i dit netværk og giver dem superadmin-status giver denne bruger fuld kontrol over dit netværk. Som eksempel kan andre superadmins endda fjerne din superadmin-status, hvilket effektivt låser dig ude af dit eget adminpanel for netværket. For at lade Ultimate Multisite kunder have finjusteret kontrol over, hvad yderligere superadmins må gøre, har vi et add-on kaldet Support Agents. Dette add-on giver dig mulighed for at oprette en anden slags bruger – en agent – med kun de rettigheder, de skal bruge til at udføre deres opgaver på netværket._

## Hvad deles mellem subsites og hvad der ikke deles {#what-is-shared-among-subsites-and-what-is-not}

Som vi nævnte før er en af de vigtigste fordele ved WordPress multisite, at alle subsites deler de samme konfigurationer, kernefiler, temaer, plugins, WordPress-kernefiler osv.

Der er dog elementer, der er fint indkapslet på et per-subsite basis.

\- For eksempel får hvert subsite sin egen uploads mappe. Som følge heraf kan uploads foretaget af brugere på ét bestemt subsite ikke tilgås på et andet subsite.

\- Hvert subsite har sit eget dedikerede adminpanel og kan aktivere eller deaktivere plugins eller temaer, medmindre de er aktive i netværket af en superadmin.

\- De fleste databasetabeller oprettes for hvert subsite, hvilket betyder, at indlæg, kommentarer, sider, indstillinger osv. er begrænset til hvert subsite.

## Brugerstyring på WordPress Multisite {#user-management-on-wordpress-multisite}

Et lidt følsomt emne ved WordPress multisite er brugerstyring. WordPress-bruger-tabellen er en af få, der deles mellem alle subsites.

Denne opsætning kan skabe nogle problemer afhængigt af, hvad du planlægger at bygge med dit netværk. Eksemplet nedenfor hjælper med at illustrere det mest presserende problem.

Forestil dig følgende scenarie:

Du opretter et WordPress multisite netværk og begynder at tilbyde subsites for en månedlig gebyr til folk, der ønsker at have en e-handelsbutik.

Du får din første betalende kunde – John. Du opretter en side for John på dit netværk, installerer alle de nødvendige plugins, og opretter derefter en bruger for John, så han kan administrere sin butik.

Så kommer en anden kunde – Alice. Du gør det samme for hende, og hun har nu også en butik på dit netværk.

John og Alice er begge dine kunder, men de kender ikke hinanden. Endnu vigtigere er, hvis den ene besøger den andens butikswebsite, er der ingen måde at vide, at denne butik hostes på det samme netværk af sider.

En dag skal John købe et nyt par sko, og han finder de perfekte sko i Alices butik. Når han prøver at gennemføre købet, får han en fejlmeddelelse om "e-mail allerede i brug", hvilket er mærkeligt, da John er 100% sikker på, at dette er første gang, han nogensinde har besøgt Alices hjemmeside.

Det, der skete her, er, at Johns bruger deles på tværs af hele netværket. Når han prøver at oprette en konto til kassen på Alices side, vil WordPress opdage, at en bruger med den samme e-mailadresse allerede eksisterer, og kaste en fejl.

_Bemærk: Vi indser, hvor dårligt det kan være afhængigt af dit brugsscenarie, så Ultimate Multisite har en mulighed, der omgår de almindelige tjek for eksisterende brugere, hvilket tillader flere konti at blive oprettet med den samme e-mailadresse. Hver konto er bundet til et subsite, så risikoen for kollision holdes på et minimum. I eksemplet ovenfor ville John ikke få en fejlmeddelelse og kunne købe de sko uden problemer. Denne mulighed kaldes Enable Multiple Accounts, og kan aktiveres i Ultimate Multisite → Settings → Login & Registration._

Selvom bruger-tabellen deles, kan subsiteadministratorer eller superadministratoren tilføje og fjerne brugere fra subsites, og de kan endda have forskellige brugerroller på forskellige subsites.

## Ydelsesovervejelser {#performance-considerations}

WordPress multisite er virkelig kraftfuldt, når det kommer til antallet af sider, det kan understøtte. Dette kan testes ved at bemærke, at [WordPress.com](https://WordPress.com), Edublogs og Campuspress alle er multisite-baserede tjenester, og hver host tusindvis af sider.

Selvom der i teorien ikke er et maksimum antal sider, du kan hoste på en enkelt WordPress multisite-installation, varierer det praktiske antal sider, du kan køre tilfredsstillende, meget afhængigt af flere forskellige faktorer: hvor dynamiske siderne er, hvilke plugins der er tilgængelige for subsites osv.

Som et generelt princip er jo mere simpel dit netværk, jo bedre. At foretrække sider, hvor indholdet ikke er virkelig dynamisk (hvilket gør dem til gode kandidater for aggressive caching-strategier) og at holde plugin-stakken så let som muligt (jo færre aktive plugins, jo bedre) kan dramatisk øge antallet af subsites, du kan hoste.

Det bedste er, at da det hele er WordPress her, vil de samme værktøjer, du allerede kender og elsker til ydeevneforbedringer, også virke for et multisite-netværk.

Den primære flaskehals for multisite er databasen, men hvis alt andet er sat op korrekt, kan det tage et par tusinde sider, før du skal bekymre dig om det. Selv da findes der løsninger, der gradvist kan tilføjes på det tidspunkt (som f.eks. database sharding-løsninger).
