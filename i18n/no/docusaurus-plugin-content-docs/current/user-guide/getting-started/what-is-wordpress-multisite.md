---
title: Hva er WordPress Multisite?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# Hva er WordPress Multisite?

WordPress har en innebygd funksjon kalt «Multisite» som stammer helt tilbake til 2010, da WordPress 3.0 ble lansert. Siden den gang har funksjonen blitt oppdatert flere ganger med nye muligheter og bedre sikkerhet.

I korte trekk kan du tenke på WordPress multisite slik: Et universitet har én enkelt WordPress-installasjon, men hvert fakultet har sin egen WordPress-side.

## 

## Hva er egentlig WordPress Multisite?

Multisite er en funksjon i WordPress som lar flere nettsteder dele én og samme WordPress-installasjon. Når multisite aktiveres, blir den opprinnelige WordPress-siden gjort om til det som ofte kalles et **nettverk av nettsteder**.

Dette nettverket deler filsystemet (noe som betyr at **utvidelser og temaer også deles**), databasen, WordPress-kjernefilene, wp-config.php, og så videre.

Det vil si at oppdateringer av WordPress, temaer og utvidelser bare trenger å gjøres én gang for alle nettstedene i nettverket, siden de deler de samme filene i filsystemet.

Dette er en av de største fordelene med multisite – du kan utvide antall nettsteder du administrerer uten at vedlikeholdsarbeidet øker tilsvarende.

## 

## Subdomene eller underkatalog?

Det finnes to måter å kjøre WordPress multisite på – og du må velge én av dem når du gjør om den vanlige WordPress-installasjonen din til en multisite-installasjon:

**Subdomene:** f.eks.: [site.domain.com](http://site.domain.com)

…eller

**Underkatalog:** f.eks.: [yourdomain.com/site](http://yourdomain.com/site)

Hver metode har fordeler og ulemper som du bør vurdere før du bestemmer deg.

Én ting er viktig å huske på: Når du først har valgt, er det veldig vanskelig å bytte fra underkatalog til subdomene eller omvendt – spesielt hvis du allerede har opprettet en del nettsteder.

Her er noen punkter du bør tenke gjennom før du tar valget:

**Underkatalog-modus** er den enkleste metoden når det gjelder oppsett og vedlikehold. Dette skyldes at alle nettstedene bare er stier knyttet til hoveddomenet (f.eks. [yourdomain.com/subsite](http://yourdomain.com/subsite)). Dermed trenger du bare **ett SSL-sertifikat** for hoveddomenet, og det dekker hele nettverket.

Samtidig vil Google og de fleste andre søkemotorer, på grunn av URL-strukturen, betrakte alle undernettstedene i et underkatalog-basert nettverk som ett stort nettsted. Dette betyr at innhold som legges til av sluttkundene dine på undernettstedene, kan påvirke SEO-ytelsen til landingssiden din, for eksempel. Hvor stor påvirkning dette har, er omdiskutert, og det finnes argumenter for at en slik løsning faktisk kan være gunstig for SEO-ytelsen.

**Subdomene-modus** er litt mer komplisert å sette opp, men URL-strukturen (f.eks. [subsite.yournetwork.com](http://subsite.yournetwork.com)) oppfattes generelt som mer «profesjonell».

En av hovedutfordringene med subdomene-modus er SSL-dekning (HTTPS) for hele nettverket. Det handler om at nettlesere behandler subdomener som separate enheter. Derfor trenger du enten et eget SSL-sertifikat for hvert subdomene i nettverket, eller en spesiell type sertifikat kalt **Wildcard SSL-sertifikat**. De siste årene har hostingleverandører og kontrollpaneler blitt mye bedre på SSL-håndtering, og noen tilbyr wildcard-sertifikater med et enkelt klikk – noe som reduserer forskjellen i kompleksitet mellom de to metodene.

I motsetning til underkatalog-modus blir undernettstedene i et subdomene-basert nettverk betraktet av søkemotorer som separate nettsteder. Det betyr at innhold på ett undernettsted ikke påvirker SEO-ytelsen til andre undernettsted i det hele tatt.

## Superadministratoren

Vanlige WordPress-installasjoner med ett enkelt nettsted lar deg legge til ubegrenset antall brukere og gi dem ulike brukerroller med forskjellige tillatelser.

I WordPress Multisite får du tilgang til en ny type bruker: **superadministratoren** – og et nytt administrasjonspanel: **nettverksadministrasjonspanelet**.

Som navnet antyder, har superadministratoren superkrefter over nettverket og kan administrere alle undernettstedene, utvidelser, temaer – alt sammen!

Når du gjør om en vanlig WordPress-installasjon til multisite, blir den opprinnelige administratoren automatisk oppgradert til superadministrator.

Utvidelser og temaer kan bare installeres eller avinstalleres fra nettverksadministrasjonspanelet av superadministratorer. Administratorer på undernettstedene kan deretter velge å aktivere eller deaktivere disse utvidelsene eller temaene, med mindre superadministratoren har nettverksaktivat en utvidelse – da blir den aktiv for alle undernettstedene til enhver tid.

_Merk: Som du ser, gir du en bruker full kontroll over nettverket ditt når du inviterer noen og gir dem superadministratorstatus. Andre superadministratorer kan for eksempel til og med fjerne din superadministratorstatus, noe som effektivt låser deg ute fra ditt eget nettverksadministrasjonspanel. For å gi Ultimate Multisite-kunder finmasket kontroll over hva andre superadministratorer kan gjøre, har vi en tilleggsfunksjon som heter Support Agents. Denne tilleggsfunksjonen lar deg opprette enda en type bruker – en agent – med bare de tillatelsene de trenger for å utføre oppgavene sine i nettverket._

## Hva deles mellom undernettstedene og hva deles ikke

Som vi nevnte tidligere, er en av de viktigste fordelene med WordPress multisite at alle undernettstedene deler de samme konfigurasjonene, kjernefilene, temaene, utvidelsene, WordPress-kjernefilene, osv.

Det finnes imidlertid elementer som er pent avgrenset per undernettsted.

\- For eksempel får hvert undernettsted sin egen opplastingsmappe. Derfor kan ikke opplastinger gjort av brukere på ett bestemt undernettsted nås fra et annet undernettsted.

\- Hvert undernettsted har sitt eget administrasjonspanel og kan aktivere eller deaktivere utvidelser eller temaer, med mindre de er nettverksaktiverte av en superadministrator.

\- De fleste databasetabellene opprettes for hvert undernettsted, noe som betyr at innlegg, kommentarer, sider, innstillinger og mer er avgrenset til hvert undernettsted.

## Brukeradministrasjon i WordPress Multisite

Et krevende tema i WordPress multisite er brukeradministrasjon. WordPress-brukertabellen er en av de få tabellene som deles mellom alle undernettstedene.

Denne ordningen kan skape noen problemer avhengig av hva du planlegger å bygge med nettverket ditt. Eksempelet nedenfor illustrerer det mest presserende problemet.

Se for deg følgende scenario:

Du oppretter et WordPress multisite-nettverk og begynner å tilby undernettsted mot en månedlig avgift til folk som ønsker seg en nettbutikk.

Du får din første betalende kunde – John. Du oppretter et nettsted for John i nettverket ditt, installerer alle nødvendige utvidelser, og oppretter deretter en bruker til John slik at han kan administrere butikken sin.

Så kommer en ny kunde – Alice. Du gjør det samme for henne, og nå har hun også en butikk i nettverket ditt.

John og Alice er begge kundene dine, men de kjenner ikke hverandre. Enda viktigere: Hvis en av dem besøker den andres butikknettsted, er det ingen måte å vite at denne butikken er hostet i det samme nettverket av nettsteder.

En dag trenger John et nytt par sko, og han finner det perfekte paret i Alice sin butikk. Når han prøver å fullføre kjøpet, får han feilmeldingen «e-postadressen er allerede i bruk», noe som er merkelig ettersom John er 100 % sikker på at dette er første gang han besøker Alice sitt nettsted.

Det som skjedde her er at Johns bruker deles på tvers av hele nettverket, så når han prøver å opprette en konto for å betale i Alice sin butikk, oppdager WordPress at en bruker med samme e-postadresse allerede finnes og gir en feilmelding.

_Merk: Vi forstår hvor problematisk dette kan være avhengig av bruksområdet ditt, så Ultimate Multisite har et alternativ som omgår de vanlige sjekkene for eksisterende brukere, og tillater at flere kontoer opprettes med samme e-postadresse. Hver konto er knyttet til et undernettsted, så risikoen for kollisjon holdes på et minimum. I eksempelet ovenfor ville ikke John fått en feilmelding og kunne ha kjøpt skoene uten problemer. Dette alternativet heter Enable Multiple Accounts og kan aktiveres under Ultimate Multisite → Settings → Login & Registration._

Selv om brukertabellen er delt, kan brukere legges til og fjernes fra undernettsted av undernettstedsadministratorer eller superadministratoren, og de kan til og med ha ulike brukerroller på forskjellige undernettsted.

## Ytelsesvurderinger

WordPress multisite er virkelig kraftig når det gjelder antall nettsteder det kan støtte. Dette bekreftes av at [WordPress.com](https://WordPress.com), Edublogs og Campuspress alle er multisite-baserte tjenester, og hver av dem hoster tusenvis av nettsteder.

Selv om det i teorien ikke finnes noen øvre grense for antall nettsteder du kan hoste på én enkelt WordPress multisite-installasjon, kan antallet nettsteder du faktisk kan kjøre tilfredsstillende variere mye avhengig av flere faktorer: hvor dynamiske nettstedene er, hvilke utvidelser som er tilgjengelige for undernettstedene, osv.

Som en tommelfingerregel: Jo enklere nettverket ditt er, desto bedre. Å foretrekke nettsteder der innholdet ikke er veldig dynamisk (noe som gjør dem til gode kandidater for aggressive hurtiglagringsstrategier) og å holde utvidelseslisten så lett som mulig (jo færre aktive utvidelser, desto bedre) kan drastisk øke antall undernettsted du kan hoste.

Det beste er at siden alt her er WordPress, vil de samme verktøyene du allerede kjenner og liker for ytelsesforbedringer også fungere for et multisite-nettverk.

Den viktigste flaskehalsen for multisite er databasen, men hvis alt annet er satt opp riktig, kan du ha et par tusen nettsteder før du trenger å bekymre deg for det. Selv da finnes det løsninger som kan legges til gradvis (som for eksempel database sharding-løsninger).
