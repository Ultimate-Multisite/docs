---
title: Mis on WordPress Multisite?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# Mis on WordPress Multisite?

WordPressi peal core'is funktsioon, mida nimetatakse 'Multisite'. See funktsioon algab oma juurest 2010. aasta WordPress 3.0 loomise ajast. Seal ​​nate on saanud mitmeid versioid, mille eesmärk on uute funktsioonide sissejuhatamine ja turvalisuse tugevdamine.

 Põhiline mõttes võib WordPress Multisite'i panna nii: Ülikool on ühe WordPress-installaatsiooni hoidja, kuid iga fakultet hoitab oma WordPress-saiti.

##

## Mis on loodud WordPress Multisite? {#what-exactly-is-wordpress-multisite}

Multisite on WordPress funktsioon, mis võimaldab mitme saiti jagada ühtise WordPress-installaatsiooni abil. Kui multisite aktiveeritakse, muutub algne WordPress-sait selleks, et toetada seda, mida tavaliselt nimetatakse **saitse võrrakuks**.

See võrk on jagatud failisüsteemi (märgib, et **pluginid ja teemad jagatakse ka**), database'i, WordPress core failid, wp-config.php jne.

See tähendab, et WordPressi, teema ja pluginide uuendusi tuleb teha ainult kord kogu oma võrkuse selt, kuna need jagavad samaid fokaale failisüsteemis.

See on üks multisite'i suurimaid eeliseid, kuna see võimaldab teil kasvada halda oma saineid, samal ajal kui vajalikud ülesannete arv teie klientide saitide hoitamiseks jääb samana.

##

## Subdomaain või subdirektorium? {#subdomain-or-subdirectory}

WordPress Multisite'i käivitamiseks on kaks režiimi – ja peate valima üks, kui muutsite oma tavalise WordPress-installaatsiooni multisite'iks:

**Subdomaain:** näiteks [site.domain.com](http://site.domain.com)

...või

**Subdirektorium:** näiteks [yourdomain.com/site](http://yourdomain.com/site)

Mỗi režiim on oma eelised ja kuulamused, mida peate arvestama, kui te teeb seda otsust.

On on üks oluline asja on panna tänulik: kui te otsustate, on võrku ümberkiirta subdirektoriumist subdomainile või vastutult tagasi, on see väga raske muuta – eriti siis, kui teil juba mitu lehte luu.

Enne et te teha seda otsust, on siin mõned punktid, mida tuleb arvestada:

**Subdirektoriumi režiim** on seadistamise ja hooldamise osas kõige lihtsam variant. See toimub sellepärast, et kõik lehed on lihtsalt stiilid, mis on seotud peamainikuga (nt [yourdomain.com/subsite](http://yourdomain.com/subsite)). Selle tulemusena vajate ainult **ühtunist SSL-tööcertificate** peamainikule, ja see katab kogu võrku.

Samal ajal, URL-struktuurist tõttu arvestavad Google ja suurim osa teistest otsingumootorist subdirektoriumi põhjal olevat võrku ühe suurina lehtena. Selle tulemusena teie eotud kliendide poolt lisatud sisu võib mõjutada landing site'i SEO jõudlust, näiteks. Mõju taseme on arutav ja on argument, et sellise korraldamise saamist võib isegi olla kas SEO jõudluse jaoks kasulik.

**Subdomaini režiim** on seadistamise osas veidi keerulisem, kuid selle URL-struktuur (nt [subsite.yournetwork.com](http://subsite.yournetwork.com)) hinnatakse üldiselt kui "professionaalsemalt" näevat.

Ühend- ja alatesite (subdomain) režiimi seadistamise suur probleem on SSL-kavande kattavuus kogu võrku jaoks (HTTPS). See on selle tõttu, et brauserid käsitlevad alatesiteid eraldatud üksustena. Selle tulemusena vajabte iga alatesile erinevat SSL-sertifikaadi või eriti tüüpi sertifikaadi nimega **Wildcard SSL certificate**. Viimades aastateides on hoitja ja paneelid parandanud oma SSL-kavande osas, ja mõned pakuvad wildcard-sertifikaade ühe klõpsuga, mis sulgenevad nende kahe režiimi vahel olevat eriarvasse seadistamise keerukuse osas.

Subdirektoriumi režiimi vastupidi on alatesid subdomaini põhjal oleva võrku otsingumootorid näha eraldi veebilehti, mis tähendab, et ühe alatesil oleva sisu ei mõjuta üldse teiste alatesiteide SEO jõudluse pealt.

## Superadmin {#the-super-admin}

Üks-saiti WordPressi installatsiooniga saate lisada ilma piirata kasutajate arv ja annada neile erinevad kasutajarolid ja eri lubanded.

WordPress Multisite'is avatakse uue tüüpi kasutaja: **superadmin** – ja avatakse uue administraatorpaneeli: **network admin panel**.

Nime järgi, superadminil on võrku üle võimud, võimaldades hallata selle kõik alatesid, pluginid, teemad, kõike!

Kui muudate oma üks-saiti WordPressi installatsiooni multisiteiks, originaalset ühe saiti administraatori tõupärastatakse automaatselt superadminiks.

Pluginide ja teemade saab installida või eemaldada ainult network admin panelist superadminid. Seejärel võivad alatesiteadministraatorid valita selle pluginide või teemide aktiveerimise või deaktiveerimise, välja arvatud juhul, kui superadmin võrku aktiivab pluginit, mis pakub selle aktiivseks kõigile alatesitele igal ajal.

_Noot: nagu näed, annuse mina oma võrku ja antud superadmini status annab sellele kasutajale täieliku kontrolli teie võrkule. Näiteks võivad teised superadministraanid isegi eemaldada teie superadmini statusi, mis lõpetab teil pääsu oma võrku administraatorpaneelile. Et võimaldada Ultimate Multisite klientide saada detailset kontrolli selle üle, mida lisasuperadministraanid saavad teha, meil on lisaks add-on nimega Support Agents. See add-on võimaldab teil luua veelgi uut kasutaja – agenti – ainult neile lubatud õigustega, mida nad võrku tehtud ülesannete täitmiseks vajavad._

## Mis on jagatud subsitide vahel ja mis ei ole {#what-is-shared-among-subsites-and-what-is-not}

Kides nagu juba mainisime, WordPress multisite olulise eelise kui kõik subsitid jagavad samad konfiguratsioonid, peamised failid, teemad, pluginid, WordPressi peamised failid jne.

Kuid on elemente, mida on hästi seotud iga subsiti põhjal.

- Näiteks saada iga subsite oma eraldatud üleslaadimisküsimuse (uploads) folder. Selle tulemusena ühe konkreetse subsiti kasutajad poolt tehtud üleslaadimised ei saa külastada teist subsiti.
- Iga subsitil on oma eraldatud administraatorpaneel ja saab aktiveerida või deaktiveerida pluginid või teeme, välja arvatud kui need olid võrkul aktiivsed superadministraanilt poolt.
- Üksikud database tabelid luuakse iga subsiti jaoks, mida tähendab, et sisu (posts), kommentaarid, lehed, seadistused ja veel palju on eraldatud iga subsiti jaoks.

## Kasutaja haldamine WordPress Multisite'is {#user-management-on-wordpress-multisite}

WordPress multisite'is üks haiglaslikku küsimust on kasutaja haldamine. WordPressi kasutajate tabel on üks väheid, mis jagatakse kõigis subsitides.

See korraldus võib põhjustada mõningaid probleeme sõltuvalt sellest, mida te plaanite võrkuga lahendada. Allpool näivab allpool illustreerida kõige kiireloomukamat.

Kujutage ette järgmine skeemium:

Loo WordPress multisite võrku luute ja alustate subsite'ide pakkumise kuudlik tasuta maksuluse eest inimestele, kes soovivad oma e-commerce poodi.

Sa saavutate esimese maksava kliendi – John. Luute Johnile oma võrkule ja paigaldate kõik vajalikud pluginid, seejärel luute Johnile kasutaja, et ta suutaks oma poodet hallata.

Siis tuleb teine klient – Alice. Te teed sama selle tema jaoks ja tal on nüüd ka pood oma võrkul.

John ja Alice on mõlemad teie kliendid, kuid nad ei tea üksteist. Üleminekult olulisem on see, et kui üks neist külastab teise poode veebilehte, ei ole võimalik teada, et see pood hostitub sama võrkuse all olevates sidetel.

Kuna ühe päeva Johni tuleb uue jalgpäraste ostuda ja ta leiab täiuslikud kasut Alice's poos. Kui ta proovib osta, saab ta vabandust "email on juba kasutatud", mis on hämmastav, kuna John on 100% kindel, et see on esimene kord, kui ta Alice'i veebilehte külastab.

See juhtus selle koostööd: Johni kasutaja on võrkuse kogu jaoks jagatud, seega kui ta proovib konto luua ostukorvi lõpetamiseks Alice'i poos, tuvastab WordPress, et sama e-posti aadressiga kasutaja juba olemas ja annab vabanduse.

_Märkus: Me teame, kui halva see võib olla teie kasutusjuhaga sõltuvalt, seega Ultimate Multisite on valik, mis ületab regulaarse kontrollid olemasoleva kasutaja kohta, võimaldades sama e-posti aadressiga mitmeid konti luua. Iga konto on seotud subsite'ile, seega kokkulupuse risk on väistatud minimaalselt. Ülemineku näites John ei saada vabandust ja saab neid jalgpäraste ilma probleemita osta. See valik nimetatakse Enable Multiple Accounts (Mitmeid konti aktiveerida) ja saab aktivere Ultimate Multisite → Settings → Login & Registration-is._

Kuidub kasutajate tabel on jagatud, kuid subsite-administraatorid või superadministratorid võivad kasutajaid lisada ja eemaldada subsite'ilt, ning neil võib olla erinevad kasutajarolid erinevates subsite'ides.

## Patutekuhulgu arvestused {#performance-considerations}

WordPress multisite on väga võimas, kui puhutame selle võimalike platvormide arvuga. Seda saab testida selle abil, et [WordPress.com](https://WordPress.com), Edublogs ja Campuspress on kõik multisite-põhised teenused, ja iga hosti tuhandisi sisse.

Teoretiliselt ei ole ühtki WordPress multisite installatsioonil võimalik hooldada maksimaalset platvormide arvu, kuid teoohus võib subsite'ides korraldatava platvormide arv erinevalt sõltuvalt mitutest erinevatest teguritest: kui dünaamilised on subsite, millised pluginid subsite'ile on saadaval jne.

Regla kui panna, mida lihtsam teie võrk on, seda paremini. Suhelda platvormide arvestamiseks sellele subsiteides, kus sisu ei ole tõesti dünaamiline (mis teeb neid suurepäraseid kandidaate aggressiivsete kašimisstrategiade jaoks) ja hoidma plugin-kasti nii kerjaga kui võimalik (ku väiksem on aktiveeritud pluginide arv, seda paremini), võib subsiteides hooldada platvormide arvu dramaatiliselt suurendada.

Parim osa on see, et kuna kõik on WordPress, siis samad tööriistad, mida te juba tunnete ja armastete patutekuhulgu parandamiseks, töötavad ka multisite võrku jaoks.

Multisite'i suurim kallis punkt on database, kuid kui kõik muu on õigesti seadustatud, võib see vaja kaksikundi tuhande platvormide enne, kui te selle kohta murenete. Iga korras on aga lahendusi, mida saab ühtlas lisada selles hetkel (nt database sharding lahendused).
