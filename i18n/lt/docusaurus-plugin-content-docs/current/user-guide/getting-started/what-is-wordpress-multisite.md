---
title: Kas yra WordPress Multisite?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# Kas yra WordPress Multisite?

WordPress coreje pateikiama funkcija, vadinama „Multisite“, kuri atsakinga nuo 2010 m. atidarymo WordPress 3.0. Nuo to laiko ji gauta daug revizijų, kurios tikslas yra įvesti naujus įrenginius ir užtikrinti saugumą.

Pagrindinis požiūris į WordPress Multisite yra tas: Universitetas turi vieną WordPress instalaciją, bet kiekviena fakultetas turi savo savintį WordPress svetainę.

##

## Kas tai yra WordPress Multisite?

Multisite yra WordPress funkcija, kuri leidžia daugeliui vietų naudoti vieną WordPress instalaciją. Kai multisite įjungiamas, originalus WordPress kitas konvertuojamas palaikyti tai, kas dažnai vadinamas **vietų tinklu**.

Šis tinklas dalina failų sistemą (tai reiškia, kad **pluginai ir temai taip pat dalinami**), duomenų bazę, WordPress pagrindinius failus, wp-config.php ir kitus.

Tai reiškia, kad WordPress, tema ir pluginų atnaujinimai reikia atlikti vieną kartą visame jūsų tinklo vietose, nes jie dalina vienodius failus į diskretą sistemą.

Šis faktas yra viena iš pagrindiniais multisite pranašumų, nes jis leidžia jums auginti valdymo vietų skaičių, laikydamasis to, kad reikalingos užduotys jūsų klientų vietų priežiūrai liktų vienodios.

##

## Subdomėnis ar Subdirektorius?

WordPress multisite gali veikti dviem būdais – ir jums reikia pasirinkti vieną, kai konvertuojate savo įprastą WordPress instalaciją į multisite instalaciją:

**Subdomėnis:** pavyzdžiui: [site.domain.com](http://site.domain.com)

…arba

**Subdirektorius:** pavyzdžiui: [yourdomain.com/site](http://yourdomain.com/site)

Kiekvienas režimas turi savo pranašumus ir truskinimus, kuriuos reikia atsižvelgti, priimant šį sprendimą.

Visą svarbiają dalykus, kuriuos reikia atkreipti dėmesį: karodamus, kai priimtas jūsų sprendimas, pakeisti tinklą nuo subdirektorius į subdomain arba atgal – tai tikrai trudna situacija, ypač jei jau turite keletą svetaini.

Prieš priimant šį sprendimą, pateikiame kelis dalykus, kuriuos reikia atkreipti dėmesį:

**Subdirektorių režimas (Subdirectory Mode)** yra lengviausias režimas nustatymui ir priežiūrai. Tai vyksta todėl, kad visi svetainės yra tik kelių įrenginių (path) priklausomai nuo pagrindinio domeno (pvz., [jūsųdomenas.com/subsite](http://yourdomain.com/subsite)). Rezultato, jums reikalinga **viena SSL sertifikatas** pagrindiniam domenui, ir ji apimsi visą tinklą.

Tada, dėl savo URL struktūros (pvz., [subsite.jūsųtinklas.com](http://subsite.yournetwork.com)), Google ir dauguma kitų paieškos enginečių laikys visus subdirektorius jūsų subdirektoriuui tinklu kaip vieną didelę svetainę. Rezultato, turinys, kurį pridėja jūsų klientai subdirektoriams, gali atverti įtiekimą jūsų skelbimo svetainės SEO veiksmams – pavyzdžiui. Įtaka lygis yra diskutuojamas ir argumentuojama, kad ta tais sąstumas gali būti geriai SEO performansui.

**Subdomeno režimas (Subdomain Mode)** yra biraz sudėtingesnis nustatymui, bet jo URL struktūra (pvz., [subsite.jūsųtinklas.com](http://subsite.yournetwork.com)) įprastai reiškama kaip „profesionaliau“.

Viena vienas iš pagrindiniais iššūkiai įdėta subdomain mode – SSL apimaipinytumas (HTTPS) visai tinklui. Tai nurodoma dėl to, kad naršinkliai traktuoja subdomainus kaip izoliuotus entitas. Taip, rezultatu, jums reikės skirtingo SSL sertifikato kiekvienam subdomainui jūsų tinklu, arba specialios tipas sertifikato vadinami **Wildcard SSL sertifikatai**. Visiame metingai hostavimo paslaugos ir paneliai tobulina savo įgūdžius sertifikatų pateikimui, o kai kurie siūlo wildcard sertifikatus vienu kliku mygtuko, uždarydami kilpą tarp šiųjų mode linijomis dėl nustatymo sudėtingumo.

Kontrastu su subdirectory mode, subdomainai subdomain-pagrindiniame tinklu yra laikomi ieškojimo engineiais kaip nepriklausomai svetainės, o tai reiškia, kad vienoje subdomain svetainėje esantis turinys ne vaikina kitų subdomainų SEO veiklos.

## Super Adminas

Vienos svetainės WordPress instalacijose leidžia pridėti neapsankiam skaičių vartotojų ir suteikti jiems skirtingus vartotojų vaidmenis su skirtingomis įsipareigojimais.

WordPress Multisite sistema atveinu naujo vartotojo: **super admino** – o atveinu atveina naujo admininio panelio: **tinklo admininio panelio**.

Kaip pavadinimas reiškia, super adminas turi supervaldyklę tinklu, gali valdyti visus savo subdomainus, pluginus, temų ir viską!

Kai konvertuosite savo vienos svetainės WordPress instalaciją į multisite, originalus vienos svetainės administratoris automatiškai pateks į super admino.

Pluginus ir temai galima įdėti arba pašalinti tik iš tinklo admininio panelio per super adminus. Tada subdomainų administratoriai gali pasirinkti aktyvuoti ar deaktyvuoti šiuos pluginus ar temas, jei super adminas tinklu neaktyvuoja pluginą, kuris priverčia jį būti aktyvus visoms subdomainams visada.

_Pastaba: kaip matote, įsitraukdami į savo tinklą ir suteikdami jais superadmin statusą, jūs turite visą kontrolį. Pavyzdžiui, kiti superadminai gali pašalinti jūsų superadmino statusą, efektyviai užblaudžiant jus nuo savo tinklo administratorio panelio. Kad Ultimate Multisite klientai galėtų turėti detalių kontrolę tam, ką papildami superadministratoriai gali daryti, turime add-oną vadinant Support Agents. Šis add-on leidžia jums sukurti kitokį vartotojo tipą – agentą – kuris turi tik tą nurodytą įgaliojimą atlikti savo užduotis tinklyje._

## Kas yra bendras subsite ir kas nėra bendras

Kaip jau minėjome, vienas iš pagrindinių pranašumų WordPress multisite yra tas, kad visi subsite dalina vienodias konfigūras, pagrindines veiklas (core files), temų, pluginus, WordPress core failus ir kitus.

Tačiau yra elementai, kurie yra aiški nurodyti kiekvienam subsite bazai.

- Pavyzdžiui, kiekviena subsite turi savo įskirtinį įrankių (uploads) katalogą. Tai reiškia, kad vartotojai vienoje subsite atlikti įkėptas medžiagą negali pasiekti kitose subsite.
- Kiekvienai subsite yra savo skirtas admin panelis ir gali aktyvuoti ar deaktyvuoti pluginus arba temas, jei jie nėra tinklo aktyvi (network active) superadminas.
- Dažniai duomenų bazės lentelės sukurti kiekvienam subsite, o tai reiškia, kad postai, komentarai, puslapiai, nustatymai ir kitos dalykai yra aiški kiekvienam subsite.

## Vartotojų valdymas WordPress Multisite

Vartotojų valdymas WordPress multisite yra jūsų tinklo labiausiai subtiliausias klausimas. WordPress vartotojų lentelė yra vienas iš jautrių, kurie dalinami visais subsite.

Šis nustatymas gali sukelti kelionę problemų, prieldant to, ką planuojate su savo tinklu statyti. Prieš to pateikta pavyzdys padeda pateikti tai, kas yra labiausiai aktyvus problema.

Įsivaizduokite šią scenarija:

Sukurti WordPress multisite tinkląsto ir pradėjimas siūlyti subsaites mėnesio mokesčiu žmonėms, kurie nori turėti e-komercijos parduotuvę.

Jūsų pirmasis mokamas klientas – Jonas. Jūs kuriate Jam svetainę savo tinkluose, įdėjate visus reikiamus pluginus ir sukuriate vartotoją Jonui, kad jis galėtų valdyti savo parduotuvę.

Tada atsiranda antrausias klientas – Alisa. Jūs dar kartą tai padarote ją ir ji dabar turi parduotuvę jūsų tinkluose.

Jonas ir Alisa yra jūsų klientai, bet jie nieko apie kitus ne진au. Dar svarbiau, jei vienas iš jų apsilankys kitos parduotuvės svetainėje, nėra būda sužinoti, kad šiti parduotuvę hostuojama viename tinkluose.

Vieną dieną Jonas nori pirkti naujų buvių ir randa tikslusios buvės Alisos parduotuvėje. Kai jis bando pabaigti pirkimą, jis mato klaidos pranešimą „el. paštu jau naudojamas“, kas yra neįtikinamu, nes Jonas yra 100% įsitikinęs, kad tai pirmasis kartas, kai apsilankė Alisos svetainėje.

Tai atrodo taip dėl to, kad Jonui vartotojas dalinamas visame tinkluose, todėl kai jis bando sukurti paskyrą pirkimui ant Alisos svetainės, WordPress praneša, kad jau egzistuoja vartotojas su tą pačia el. pašto adresais ir skiria klaidos.

_Pastaba: Mes suprantame, kaip tai gali būti blogai, priklausomai nuo jūsų naudojimo atvejų, todėl Ultimate Multisite turi variantą, kuris perjungia įprastą patikrinimą egzistuojančiam vartotojui, leidžiantu sukurti daug paskyrų tą pačia el. pašto adresi. Kiekviena paskyra bus susijusi su subsite, todėl kolizijos rizikos minimalizuojama. Pavyzdžiui, up relations Jonas ne gaus klaidos ir galės pirkti šiuos buvę be problemų. Šį variantą vadina „Enable Multiple Accounts“ (Leisti daug paskyrų) ir galima aktyvuoti: Ultimate Multisite → Settings → Login & Registration._

Nors užiariajamos vartotojų lentelę, tačiau subsite administratoriai arba superadministratoriai gali pridėti ir pašalinti vartotojus subsite. Taip pat jie gali turėti skirtingus vartotojų vaidmenius skirtingose subsite.

## Naudojimo saugos atsižvelginkai

WordPress multisite yra tikrai geras, kai reikalaujama didelio skaičiaus vietų palaikyti. Tai galima patikrinti per tą faktą, kad [WordPress.com](https://WordPress.com), Edublogs ir Campuspress yra multisite bazoti paslaugos, o kiekviena iš jų hostuoja tūkstis vietų.

Noriama sužinoti, kad teorijoje nėra didžiausio skaičiaus vietų, kuriuos galite hostuoti vienoje WordPress multisite instancijoje, bet praktiko subsite skaičius, kurį galite efektyviai veikti, labai keičiasi priklausomai nuo skirtingų faktorių: kaip dinamiški yra svetainės, kokie pluginai yra pasiekti subsite ir taip.

Tinkamiais taisyklais, jei jūsų tinklas yra paprastas, tuo geriau. Favorizuokite svetainius, kuriuose turinys nėra tikrai dinamiškas (kas padeda juos būti puikiais kandidatais agresyviems kešio strategijoms) ir išlaikykite pluginų sąraštą kuo lengvę (kuo mažiau aktyviai veikiančių pluginų, tuo geriau). Tai gali drasti padidinti subsite skaičių, kuriuos galite hostuoti.

Geriausias dalykas yra tas, kad nesvarbu, kad tai viskas yra WordPress, taikoma tą pačią įrodą, kurios jau suprantate ir mygote saugos pagerinimui – ji veiks ir multisite tinkluose.

Pagrindinis laisvai uždarymas (bottleneck) multisite yra bazė, bet jei viskas kitas nustatytas teisingai, tai gali reikėti kelios tūkstos vietų, kol jūsų ne reikės dėl to rūpintis. Tačiau net tada yra sprendimai, kuriuos galima progresyviai pridėti šiai laikotarpiui (pvz., bazės sharding solutions).
