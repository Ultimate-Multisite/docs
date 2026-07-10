---
title: Põhiline konseptid
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Põhitunnised {#basic-concepts}

Uued WordPress Multisite kasutajatele ja keskmiselt alustavatele Ultimate Multisite kasutajatele võib esialgphase palju uusi sõnu ja fraase omandada. Neid õppimine on oluline, sest peab teil mõista platvormi ja seda, kuidas see üldmulderise kui üksus toimib.

Selles artiklis proovime definitsionaalselt selgitada ja selgitada mõned WordPressi võtmekohaneid konsepte. Mõned neist on rohkem olulised kasutajatele, teised arendajatele ja mõned nii mõlematele.

## WordPress Multisite {#wordpress-multisite}

WordPress **Multisite** on WordPressi installatsiooni tüüp, mis võimaldab teil luua ja hallata mitme veebilehtide võrku ühendusest ühe WordPress-paneeli kaudu. Saate hallata kõike aspekte, sealhulgas lehtide arv, funktsioonid, teemad ja kasutaja rollid. On võimalik hallata hingedes ja tuhatte lehti.

## Võrk (Network) {#network}

WordPressi kontekstis on multisite võrk see kohas, kus saab ühendusest ühe paneeli kaudu hallata mitmeid **sublehte** (subsites). Kuigi multisite võrku loomine erineb hoastajate vahel, lõplik tulemus on tavaliselt mõned lisid **wp-config.php** failis, mis teavitab WordPressile selle spetsiifilise režiimi kohta.

Multisite võrku ja eraldi asuva WordPressi installatsiooni vahel on mitu erinevust, mida lühidalt käsitlemme.

## Database (Andmebaas) {#database}

Database on struktureeritud, korraldatud andmete koonus. Informatika terminoloogi kontekstis viitab database'ile ohutamiseks ja organiseerimiseks kasutatava softwarele. Arvestage seda faili kaapitina, kus säilitate andmeid erinevates osades olevates tabelite kui nimetatakse neid.

WordPress Multisite kasutab ühe database'i, ja iga subleht saab oma tabelid blogi ID-ga prefiksiga, seega pärast võrku installimist ja sublehti loomist peal teil peaks olema need tabelid:

_wp_1_options_ \- konfiguratsioon tabel esimese alaliste veebile jaoks

_wp_2_options_ \- konfiguratsioon tabel teise alaliste veebile jaoks

## Hostingu teenindus {#hosting-provider}

Hostingu teenindus on ettevõte, mis võimaldab äriorganisaatioid ja isikut oma veebile jääda World Wide Web'i abil. Veebihostingu teenused varieeruvad, kuid tavaliselt hõlmavad ne kaitsme veebile disainimist, hoitamist hostil olevate ruumide ja Internetiga ühendust.

## Domeen {#domain}

Domeen nimi on adress, mida inimesed kasutavad oma veebile külastamiseks. See ütleb veebibrüügile, kus otsida teie veebile. Samuti nagu kelduri aadress, domeen on see, kuidas inimesed külastavad teie veebile online. Ja nagu püsib liin on teie poole. Kui soovite meie veebile külastada, peate kirjutama meie veebiaadressi veebibrüügi aadressil, mis on [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) _, kus [**ultimatemultisite.com**](http://ultimatemultisite.com) on domeen nimi.

## Subdomeen {#subdomain}

Subdomeen on veebile hoida, mis on peamise domeeni all, kuid mitte foldere kasutamine sisu organiseerimiseks veebile, vaid see luuab oma veebile. See esitub kui [**https://site1.domain.com/**](https://site1.domain.com/), kus _site1_ on subdomeeni nimi ja [_domain.com_](http://domain.com) on peamine domeen.

## Subdirektorium {#subdirectory}

Subdirektorium on veebile hoida, mis on juurdomaani all ja kasutab foldere sisu organiseerimiseks veebile. Subdirektorium on sama nagu subfolder ja nimetusi saab üksteist kasutada. See esitub kui [**https://domain.com/site1**](https://domain.com/site1), kus _site1_ on subdirektoriumi nimi ja [_domain.com_](http://domain.com) on peamine domeen.

## Subsite {#subsite}

Subsite on Multisite on loodud alatesiteid, mida teebte Multisite võrku abil. See võib olla **subdomaan** või **subfold**, sõltuvalt sellest, kuidas teie WordPress Multisite installatsiooni konfiguratsioon on seadsetud.

## Super Admin {#super-admin}

WordPress Super Admin on kasuturõhk, millel on täielik võimalus hallata kõiki alatesiteid Multisite võrku all. Multisite kasutajatele see on **korkein taseme külastamine**, mida saate oma WordPress installatsioonile pakkuda.

## Plugin {#plugin}

Üldiselt on plugin koodi مجموعة, mis lisab ekstra funktsionaalsust teie WordPress veebile. See võib olla nii lihtne kui logo muutmine logiinisel sisse, kui ka keeruline e-commerce funktsioonide lisamine. _Woocommerce ja Contact Form_ on näidused pluginist.

WordPress Multisiteil saab pluginid installida ainult Super Admini abil võrku administraatori dashboardist. Subsite administratsioonid võivad pluginid aktiveerida ja deaktiveerida ainult oma alatesitel.

## Themes {#themes}

WordPress theme on failide grup, mis määrab veebile üldise ulatusi (_grafika, stiilifailide ja koodi_). See pakub kõik esiteelise stüülid nagu fontide stüülimine, lehekülje paigutamine, värvid jne.

Samuti kui pluginid, WordPress Multisiteil saab themeid installida ainult Super Admini abil ja aktiveerida subsite administratsioonide tasemel.

## Site Template {#site-template}

**Site Template** on boilerplate veebile, mida saab kasutada aluseks uute veebile tegemisel oma võrkus.

See tähendab, et saate luua aluseveebile, aktiveerida erinevaid pluginid, seada aktiivse theme ja kohandada seda igal soov anda. Seejärel, kui teie klient luuakse uue konti, saab ta mitte puudutada poolest WordPress veebile ilma märkmeid sisulise sisu ilma, vaid kopija oma aluseveebist, kus kõik kohandused ja sisu on juba paigutatud.

## Domain Mapping {#domain-mapping}

**Domeenüüdloomine** WordPressiga on viis viisüt kasutajate õigele hoosta juhatavale ületõrge. WordPress Multisite'is luuakse alsubsaitid kas allpoololeva asendame või subdomaaini abil. Domeenüüdloomine võimaldab subsite kasutajatel kasutada kõrget taseme domeeni nagu [**joesbikeshop.com**](http://joesbikeshop.com), et nende veebilehe aadress näeks professionaalsem.

## SSL {#ssl}

SSL on **Secure Sockets Layer** (Turvaline sokkeetiki). See on digitaalne sertifikaat, mis kinnitab veebilehe identiteeti ja võimaldab salvestatud ühenduse. Nüüd kasutatakse seda standardne tehnoloogiat interneti ühenduse turvalisalt hoida ja kaitsta kõigist tundlikust andmestikust, mida on väljuti kahe süsteemi vahel, et vältida kriminaaleid teavet luumat või muudata transfereeritud infot, sealhulgas võimalikku isikupärastatud detailid. Modernseides brauserites SSL on vajalik, mis teeb sellest olulise veebilehe loomisel ja juhatsemisel.

## Media {#media}

Media on pildid, audiot, videod ja muud failid, mis veebilehe osalduvad.

Network-saitides jagatakse ühtst database WordPress Multisite'is, kuid hoitakse mediafailide jaoks eraldi teekonnad file-süsteemis.

Standardne WordPress paigutamine (wp-content/uploads) jääb samana; kuid selle teekond muutub network-saiti unikaalse ID loomise peetamiseks. Järgnevalt näidatakse network-saiti mediafailid kui wp-contents/uploads/site/[id].

## Permalinks {#permalinks}

Permalinks on teie individuaalse blogipost või lehe pysjapiksad URL-ad veebilehel. Permalinksit kutsutakse ka **pretty links** (kaalutavat linkid). Oletuks WordPressi URL-ad kasutavad küsimusketta vormi, mis näeb selliselt:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite {#ultimate-multisite}

Ultimate Multisite on WordPress on loodud WordPress Multisite installide jaoks ja muudab teie WordPress installi premium sisse – nagu [WordPress.com](https://WordPress.com) – võimaldades klientidele saada veebilehtid kuudlikuga, kvartalise või aastate tasumise eest (saatub saate kasutada ka tasuta pläne).

## Checkout Form (Tellimuse vorm) {#checkout-form}

Checkout Form on üksikaline või mitme sammeline tellimuse vorm, mis hõlmab subsite loomist, li membershipi ja kasutajakontaktsioonide luomist Ultimate Multisite registreerimise abil. See koosneb erinevatest valdkondadest ja maksukontrollistest vormidest, mida kasutaja tuleb registreerimisprotsessis esitada.

## Webhook (Webhook) {#webhook}

Webhook (seda nimetatakse ka web callbacki või HTTP push API) on viis, kuidas rakendus teise rakendustele reaaliaikavat teavet annab. Webhook toob andmeid teistele rakendustele samal ajal, mida meeldivad, see tähendab, et sa saadud andmed on kohe olemas.

**Ultimate Multisite webhooks** avavad piiratud võimalusi, mis võimaldavad võrkonadministraatoritele teha erinevaid hulluslikke kuid kasulikku integreerimist, eriti kui neid kasutatakse Zapier ja IFTTT nagu palvelidega koos.

## Events (Sündmused) {#events}

Event on tegevus, mis toimub kasutaja või teise alliku tegevuse tulemusena, näiteks hiireklikk. Ultimate Multisite hoidab registreeritud kõikide sündmuste ja logide teie kogu võrku jooksul. See jälgib erinevaid tegevusi, mis teie multisite'is toimuvad, nagu plaanide muutmid.
