---
title: Kas ir WordPress Multisite?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# Kāpēc ir WordPress Multisite? {#what-is-wordpress-multisite}

WordPress pamata funkcijās ir funkcija, ko vadās nosaukums ‘Multisite’, kas atsaucas uz 2010. gadu WordPress 3.0 lansēšanu. Kopējā laikā tas ir ieguvies vairākas revizijas, kurām mērķis ir ieviekt jaunas funkcijas un uzstādīt drošību.

Esam savukārt, WordPress multisite var domāt kā šādi: Universitāte uztur vienu WordPress instalāciju, bet katra fakultāte uztur savuWordPress vietni.

##

## Kā tieši ir WordPress Multisite? {#what-exactly-is-wordpress-multisite}

Multisite ir WordPress funkcija, kas ļauj vairākiem vietnēm dalīties ar vienu WordPress instalāciju. Kad multisite tiek aktivizēts, oriģinālā WordPress vieta tiek pārvērsta, lai atbalstītu to, ko parasti nosauca kā **vietņu tīkls**.

Šis tīkls dalās failu sistēmu (tādējādi arī **plugins un temoj ir dalīti**), datubāzu, WordPress pamata failus, wp-config.php un tālāk.

Tādējādi WordPress, temas un plugins atjauninājumi jāveic tikai reizi visiem jūsu tīkla vietnēm, jo tie dalās vienos failos failu sistēmā.

Šis fakts ir viens no galvenajām multisite priekšrocībām, jo ļauj palielināt vietņu skaitu, ko jūs pārvaldāt, saglabājot vienotu uzdevumu, kas jums jāveic, lai uzturētu jūsu klientu vietnes.

##

## Subdomēns vai subdirektoris? {#subdomain-or-subdirectory}

Ir divas veidības veiksmīt WordPress multisite – un jums ir jāizvēlas viens, kad pārvērjat savu regulāru WordPress instalāciju multisite instalācijā:

**Subdomēns:** piemēram: [site.domain.com](http://site.domain.com)

...vai

**Subdirektoris:** piemēram: [yourdomain.com/site](http://yourdomain.com/site)

Katras režīmas ir savas priekšrocības un disadvantages, kas jums jāņem vērā šīs lēmuma pieņemšanas laikā.

Viena ir svarīgi atcerēties vienu lietas: kad pieņemšu lēmumu, mainīt tīklu no subdirektūras uz subdomānu vai atpakaļ ir ļoti grūti – īpaši, ja jums jau ir vairāki veidzi izveidoti vietnes.

Pirms šī lēmuma pieņemšanas, šeit ir dažas lietas, kas jāievēro:

**Subdirektūras režīms** ir visvieglākais režīms attiecībā uz iestatījumiem un apkopi. Tas notiek tā, jo visas vietnes ir vienkārši ceļi, kur tie ir pievienoti galvenajai domānam (piemēram: [yourdomain.com/subsite](http://yourdomain.com/subsite)). Kā rezultāt, jums būs nepieciešams **viens SSL sertifikāts** galvenajai domānam un tas apgrūtinās visu tīklu.

Pat tieks, ka dēļ tās URL struktūras, Google un lielākā daļa citu meklēšanas rindas uzskatīs visus subvietnes jūsu subdirektūras bazā kā vienu gigantisku vietni. Kā rezultāt, satura, ko pievieno jūsu galvenajai domānam endokasturi, var ietekmēt jūsu landing site SEO veiktspēju, piemēram. Ietekmes līmenis ir diskusijain, un ir argumenti, kas jāievieš par to, ka šāda arrangēšana var pat būt laba SEO veiktspējas uzlabošanai.

**Subdomānu režīms** ir nedaudz sarežģītāks iestatīt, bet tās URL struktūra (piemēram: [subsite.yournetwork.com](http://subsite.yournetwork.com)) parasti tiek uzskatīta kā "visbiežāk profesionālāka".

Viena galvenais izvēles problēmas konfigurēt subdomēnu režīmā ir SSL atspējums (HTTPS) visai tīkliem. Tas ir tā, ka pārlūkprogrammas uzskata subdomēnus parasti izolēti entitāti. Kā rezultāt, jums būs nepieciešams atšķirīgs SSL sertifikāts katram subdomēnam savā tīklā, vai specializēts sertifikāts, ko sauc **Wildcard SSL sertifikāts**. Laikarp uzņēmēji un paneli ir paaupja savas spējas SSL sniegšanā, un daži piedāvā wildcard sertifikatus ar vienu klikšķi uz pogu, aizvērtot starpu šiem modeļiem konfigurēšanas sarežģītības jomā.

Kontrast subdirektoriem režīmai, subsajūti subdomēnu balstītajā tīklā tiek uzskatīti meklējamie rindas kā atsevišķi vietnes, kas nozīmē, ka viens subsite uz vietu esošais saturs ne ietekmē SEO veiktspēju citos subsaitiem.

## Super admin {#the-super-admin}

Vienrādīga WordPress instalācija ļauj jums pievienot neklimata lietotāju un sniegt tiem dažādus lietotāja roļus ar atšķirīgām ierobežojumiem.

WordPress Multisite sistēmā atklāts ir jauns lietotāja tipa: **super admin** – un atklāta jauna admin panelis: **tīkla admin panelis**.

Kā nosaukums norāda, super adminam ir spējas pārvaldīt visu tīklu, viņš var vadīt visus subsite, pluginus, temus, visu!

Kad konvertējat savu vienrādīgu WordPress instalāciju uz multisite, sākotnējais vietnes admin automātiski tiek upplīdzināts super adminam.

Pluginus un temas var instalēt vai neinstalēt tikai no tīkla admin panelis ar super adminiem. Tad subsite admini var izvēlēties aktivizēt vai deaktvēt šos pluginus vai temas, ja neuztver super admina tīkls kādu pluginu, kas priekšlaicina to aktīvu visiem subsaitiem visu laiku.

_Piezīts: kā redzams, ka uzņēmumam iestatīt kādu lietotāju savā tīklā un sniegt viņam superadministrators statusu dod šim lietotā pilnu kontroli pār jūsu tīkli. Piemēram, citi superadministrators var izņemt jūsu superadministrators statusu, efektīvi aizverot jūs no savas tīkla administrācijas paneļa. Lai ļaut Ultimate Multisite klientiem iegūt detaļu kontroli tam, ko papildu superadministrators var darīt, mums ir uzlabojums, kas nosaucas Support Agents. Šis uzlabojums ļauj jums izveidot vēl vienu lietotāju veidu – agentu – ar tikai tiem atļautajām ierobežojumiem, kas viņam var būt nepieciešami, lai veiktu savas darbus tīklā._

## Kādas lietas ir dalītas starp subsaitiem un kādas nav dalītas {#what-is-shared-among-subsites-and-what-is-not}

Kā mēs iepriekš minējām, viens no galvenajiem priekšrocību WordPress multisite ir tas, ka visi subsaitie dalās vienām konfigurācijām, pamata failiem, temām, pluginiem, WordPress pamata failiem, etc.

Tomēr ir elementi, kas labi definēti pa subsaitiem.

- Piemēram, katram subsaitam ir savas upiednes (uploads) folderis. Kā rezultātā uzviens lietotāju, kas izveido upiednes vienā konkrētā subsaitā, nevar piekļūt to upiednēm citai subsaitai.

- Katram subsaitam ir savas atļautās administrācijas paneļi un var aktivizēt vai deaktvēt pluginus vai temus, ja tie nav aktīvi tīklā superadministratorsa.

- Lielākā daļa databasetu tabulu tiek izveidotas katram subsaitam, kas nozīmē, ka postas, komentāri, lapas, iestatījumi un vēl vairāk ir definēti katram subsaitam.

## Lietotāju pārvaldība WordPress Multisite {#user-management-on-wordpress-multisite}

Viena smaga jautājums WordPress multisite ir lietotāju pārvaldība. WordPress lietotāju tabula ir viens no dažiem, kas dalītas starp visiem subsaitiem.

Šis arrangaments var radīt dažas problēmas atkarībā no tiem, ko plānojat izveidot savā tīklā. Piemēram, šis piemērs palīdz ilustrēt visvairāk spēcīgo jautājumu.

Izbrīkojiet šo scenāriju:

Jūs izveicāt WordPress multisite tīklu un sākāt piedāvāt subvietas mēnesīgu maksājumu cilvēkiem, kuri vēlas turēt e-komercijas veikalu.

Lat jums ir pirmais maksājums klientā – John. Jūs izveicāt viņam vietni savā tīklā, instalējiet visus nepieciešamos pluginus, pēc tam izveicāt lietotāju Johnam, lai viņš varētu pārvaldīt savu veikalu.

Pēc tam piekrīst otra klienta – Alice. Jūs darāt to pa viņu un viņai tagad ir veikals arī jūsu tīklā.

Johns un Alices ir abvērti jūsu klientas, bet viņi viens otru nezin. Vairāk svarīgi, ja viens no tiem apmekšas otrās veikala vietni, nav kāda veida zināt, ka šis veikals tiek hostēts uz vienu tīklu vietnēm.

Vienu dienu Johnam ir vajadzīgs pirkt jaunu paaugu un viņš atrod savus perfekti paot. Kad viņš mēģina pabeigt iepirkumu, viņam parādās kļūdas ziņojums "e-pasts jau lietots", kas ir dziļi neparasti, jo John ir 100% pārliecināts, ka tas ir pirmais laiks, kad apmeklē Alice vietni.

Šeit notika tas ir tā, ka Johnam lietotājs ir dalīts visā tīklā, tāpēc, kad viņš mēģina izveidot kontu, lai pabeigtu iepirkumu Alices vietnē, WordPress atrod, ka ar to pašu e-pastu adresi jau ir lietotājs un atliec kļūdu.

_Piezīme: Mēs saprotam, cik tas var būt slikts jūsu lietojum kontekstā, tāpēc Ultimate Multisite ir opcija, kas apmeklē regulārus pārbaudes procesus jau esošam lietotājam, ļaujot izveidot vairākus kontus ar pašu e-pastu adresi. Katrs konts ir saistīts uz subvieti, tāpēc kolīzijas risku minimizē. Pirmsminējumā Johnam neparādīsies kļūdas ziņojums un viņš varēs pirkt šos paaugu bez problēmu. Šo opciju vadās nosaukums "Enable Multiple Accounts", un to var aktivizēt Ultimate Multisite → Settings → Login & Registration._

Paties, lai gan lietotājs tabli ir dalīta, bet lietotājus var pievienot un izņemties no subvietām ar subvietu admini vai superadmini, un viņiem var būt dažādi lietotāju lomas dažādās subvietās.

## Performances ievērojamie jautājumi {#performance-considerations}

WordPress multisite ir ļoti spēcīgs, kad runā par tiem vietnēm, ko tas var atbalstīt. To var pārbaudīt tā, ka [WordPress.com](https://WordPress.com), Edublogs un Campuspress ir multisite-dzinēti pakalpojumi, un katrs hosta tūkstošus vietnī.

Lai gan teorētiski nav maksimāls vietņu skaits, ko var hostēt vienā WordPress multisite instalācijā, praktiskā situācijā subvietu skaits, kas var veiksmīgi veikt, var būt ļoti atšķirīgs dažādiem ietekmīgajiem faktoriem: kā dinamiskas ir vietnes, kuras subvietām ir pieejami pluginus un tas vēl.

Kopumā labāk ir vienkāršā tīkls. Prioritizējot vietnes, kuram saturs nav īsti dinamisks (kas tos dara lieliskajiem kandidāti agresīvās kešēšanas stratēģijām) un turinoties ar vismazākem pluginu apakšdatus (jo mazāks ir aktīvo pluginu skaits, jo labāk), var drastiski palielināt subvietu skaitu, ko var hostēt.

Labākais ir tas, ka tās ir WordPress, tāpēc vieni pati zināmi un mīļoti lietotie rīki veidroties arī multisite tīklā performances uzlabošanai.

Galvenais vārsots bloka multisite ir datubāze, bet ja viskas citu ir labi iestatīts, tas var aizņemt vairākus tūkstošus vietņu pirms, kad jums būs jāņem uz verdzību. Pat tad ir solutions, kas var progresivām veidīt tam laikā (piemēram, datubāzes shardinga solutions).
