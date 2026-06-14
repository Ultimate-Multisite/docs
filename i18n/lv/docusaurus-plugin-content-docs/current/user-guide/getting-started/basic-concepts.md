---
title: Pamatojoties uz pamata koncepcijas
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Pamato koncepcijas

Ja jauns WordPress Multisite lietotājs un kāds, kurš tikai sāk izmantot Ultimate Multisite, var būt daudz jaunas vārdu un frāzju, kas jāiejas. Tās mācīšana ir svarīga darba loma, jo jums būs nepieciešams saprast platformu un to darbību kā visumu.

Šajā rakstā mēģināsim definēt un izskaidrot dažas galvenās koncepcijas WordPress. Dažas no tām ir vairāk saistītas ar lietotājiem, citas ar attīstītājiem, un dažas gan abiem.

## WordPress Multisite

WordPress **Multisite** ir WordPress instalācijas veids, kas ļauj jums izveidot un pārvaldīt tīklu vairāku vietņu no vienas WordPress dashboarda. Jūs varat pārvaldīt visu, tostarp vietņu skaitu, funkcijas, temus un lietotāju roļus. Ir iespējams pārvaldīt سودniecības un tūkstošiem vietnēm.

## Tīkla (Network)

WordPress kontekstā multisite tīkls ir vieta, kur kuras **subvietnes** var pārvaldītas no vienas dashboarda. Lai gan multisite tīkla izveide atšķiras starp hostingu pakalpojumiem, galvenais rezultāts parasti ir dažas papildu direktīvas failā `wp-config.php`, kas ļauj WordPress zināt, ka tas darbojas šajā īpašā režīmā.

Ir vairākas atšķirības starp multisite tīklu un vienkāršas (stand-alone) WordPress instalāciju, ko mēs īsi apskatīsim.

## Database

Database ir struktūrināta, organizēta datu kopums. Informātikas terminoloja nozīmē database programmu lietojumu, kas tiek izmantots datu glabāšanai un organizēšanai. Izmeklējiet to kā faila kabineti, kurā jūs glabājat datus dažādās sadaļās, ko vadām tabulas (tables).

WordPress Multisite izmanto vienu database, un katra subvieta saņem savas tabulas ar blog ID prefixā. Tātad, kad instalējat tīkla instalāciju un izveidat subvietni, jums būs šīs tabulas:

_wp_1_options_ \- opcijas tabula for pirmo apakšsajmu

_wp_2_options_ \- opcijas tabula for otrā apakšsajmu

## Uzņēmējs

Uzņēmējs ir firma, kas ļauj biznesiem un individuem ievietot savus vietnes World Wide Webī resurs. Pakalpojumi, ko piedāvā vietņu hosti, atšķiras, bet parasti ietver dizainu vietnei, glabātās vietas hostā un saistīšanās ar Internetu.

## Domens

Domena nosaukums ir adrese, ko cilvēki izmanto vietnes apmeklēt. Tas norāda webbraukam, kur meklēt jūsu vietni. Līdzīgi kā iela adrese, domēns ir tas, kā cilvēki apmeklē jūsu vietni tiešsaistē. Un, tāpat kā būt zīmēm priekšā savas veikala. Ja vēlaties apmeklēt mūsu vietni, jums būs jāievada mūsu web adrese braukers adresē, kas ir [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) _, kur [**ultimatemultisite.com**](http://ultimatemultisite.com) ir domēna nosaukums.

## Subdomēns

Subdomēns ir vietnes hierarhijas veids zem galvenā domēna, bet vietā, kad izmantojam failus organizēt saturu vietnē, tas ir kā savas vietnes. Tas tiek prezentēts kā [**https://site1.domain.com/**](https://site1.domain.com/) , kur _site1_ ir subdomēna nosaukums un [_domain.com_](http://domain.com) ir galvenais domēns.

## Subdirektūra

Subdirektūra ir vietnes hierarhijas veids zem pamata domēna, kas izmanto failus organizēt saturu vietnē. Subdirektūra ir tāds pats kā subfoldors un nosaukumi var izmantot vienlaicīgi. Tas tiek prezentēts kā [**https://domain.com/site1**](https://domain.com/site1) , kur _site1_ ir subdirektūras nosaukums un [_domain.com_](http://domain.com) ir galvenais domēns.

## Apakšsajms

Subsite ir bērns vietne, ko jūs izveidojat Multisite tīklā. Tas var būt **subdomēns** vai **subdirektori**, atkarībā no tā, kā konfigurēts jūsu WordPress Multisite instalācija.

## Super Admin

WordPress Super Admin ir lietotāja lomu, kuram ir pilnas iespējas pārvaldīt visus subvietnes tīklā. Multisite lietotāji ir **visaugākais piekļuves līmenis**, ko varat sniegt savai WordPress instalācijai.

## Plugin

Vispārēji plugin ir koda pakets, kas pievieno papildu funkcijas jūsu WordPress vietnei. Tas var būt vienkāršs, piemēram, mainīt iekopojuma logotu logo, vai sarežģīts, piemēram, pievienot e-komercijas funkcijas. _Woocommerce un Contact Form_ ir pluginu piemēri.

WordPress Multisite tīklā pluginus var instalēt tikai no Super Admina administrācijas paneļa. Subvietnes admins var aktivizēt un deaktvēt pluginus tikai savā subvietnē.

## Themes

WordPress themes ir failu grupe (_grafika, stili un koda_), kas noteik vispārējo vietnes izskatu. Tas sniedz visu front-end stilizāciju, piemēram, fontu stilizāciju, lapas laidaru, krāsas, etc.

Līdzīgi kā pluginus, WordPress Multisite tīklā themes var instalēt tikai Super Admin un var aktivizēties subvietnes līmenī no subvietnes adminiem.

## Site Template

**Site Template** ir baziskais vietnes šablonis, ko var izmantot kā pamatu, kad veidat jaunas vietnes tīklā.

Tas nozīmē, ka jūs varat izveidot pamata vietni, aktivizēt dažādus pluginus, noteikt aktīvo themes un personizēt to kā jums vēlaties. Tad, kad jūsu kliente izveido jaunu kontu, viņam nepiecēs parasti WordPress vietni bez nozīmīgas satura, bet viņam tiks sniegta jūsu pamata vietnes kopija ar visām personizācijām un saturi jau iekļautus.

## Domain Mapping

Domānu mapišana ar WordPress ir veids, kā novirkt lietotājus uz pareizu hosti, lai to piekļūtu vietnes adresi. WordPress Multisite-a laikā subvietas tiek izveidotas vai caur subdirektori vai domēnu subdomēni. Domānu mapišana ļauj subvietu lietotāji izmantot augšpusējo domēnu, piemēram [**joesbikeshop.com**](http://joesbikeshop.com), lai to vietnes adresi kļūtu vizuāli profesionālāka.

## SSL

SSL nozīmē **Secure Sockets Layer**. Tas ir digitāls sertifikāts, kas apstiprina vietnes identitāti un ļauj izveidot šifruju (encrypted connection). Šodien tas tiek lietots kā standarta tehnoloģija internet savienojuma drošināt un aizsargāt jebkuru jautāli datus, kas tiek nosūtīti starp diviem sistēmām, novēršot kriminaļus lasīt un izmaiņot jebkuram pārsūtītam informācijai, ieskaitot iespējamo personīgajiem datiem. Modernie brauzeri prasa SSL, kas dara to būtisku vietnes veidošanai un veikšanai.

## Media

Media ir attēli, audio, video un citi faili, kas veido vietni.

Tīrnieku (Network) vietnēs tiek dalīta vienīgais datubāze WordPress Multisite-a laikā; tās uztur vismaz divas atsevišķas ceļus fiziskajā sistēmā (filesystem) media failiem.

Standartne WordPress vieta (`wp-content/uploads`) paliek tāds, bet tās ceļš tiek izveidots atšķirībā no tīmekļa vietnes unikālām ID. Tādējādi tīmekļa vietnes media faili parādās kā `wp-contents/uploads/site/[id]`.

## Permalinks

Permalinks ir jūsu individuālo bloga postu vai lapas pastāvīgie URL adresi savā vietnē. Permalinks tiek arī nosaukta kā **pretty links**. Bez speciālo iestatījumu WordPress URL-i izmanto jautājuma ķēdes (query string) formātu, kas izskatās kaut ko šādi:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite

Ultimate Multisite ir WordPress plugin, kas paredzēts WordPress Multisite instalācijām, kas pārvērš jūsu WordPress instalāciju uz premium tīklu vietņu sistēmu – tā nodrošina klientiem iespēju izveidot vietnes ar mēnesī, kvartālu vai gadu maksājumiem (jūs varat arī izveidot bezmaksas plānus).

## Checkout Form (Pārdošanas forma)

Checkout Form ir vienkārša vai vairāku soļiem order formā, kas ietver subvietnes, pievienošanos un lietotāju kontu izveidi ar Ultimate Multisite reģistrāciju. Tā sastāv no dažādiem laukiem un maksājuma formām, ko lietotājs ir jāievada reģistrēšanās procesu laikā.

## Webhook (Webhook)

Webhook (to arī sauc "web callback" vai "HTTP push API") ir veids, kā lietojums var sniegt citām lietojumām reālla informāciju. Webhook nosniedz datus citām lietojumam, kad tie notiek, kas nozīmē, ka jūs saņemiet datus neatliekamā laikā.

**Ultimate Multisite webhooks** atver negrūtas iespējas, ļaujot tīkla administratoriem veikt dažādus brīnišķīgi, bet noderīgi integrācijas, īpaši ja tos izmantojat kopā ar pakalpojumiem kā _Zapier_ un IFTTT.

## Events (Ivadījumumi)

Events ir darbība, kas notiek lietotāja vai citās avota darbības rezultātā, piemēram, muslīta klikšķi. Ultimate Multisite saglabā reģistru visiem notikumiem un logiem, kas notiek jūsu visu tīkla sistēmā. Tas seko dažādām aktivitātēm, kas notiek jūsu multisite sistēmā, piemēram, plāna izmaiņām.
