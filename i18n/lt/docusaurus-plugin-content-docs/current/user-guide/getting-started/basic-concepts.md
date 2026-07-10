---
title: Pagrindinės koncepcijos
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Pagrindiniai konceptai {#basic-concepts}

Jei esate naujas WordPress Multisite vartotojas ir tik šiek tiek pradėjote naudoti Ultimate Multisite, jūsų gali būti daug naujų žodžių ir frazų. Jų mokymasis yra svarbi taska, nes turėsite suprasti platformą ir kaip ji veikia kaip visuma sistema.

Šiame straipsnyje mes bandysime nurodyti ir paaiškinoti kelis pagrindinius konceptus WordPress'e. Kai kurie iš jų yra labiau reikalingi vartotojams, kiti – programavikai, o kažkas – abiejose grupėse.

## WordPress Multisite {#wordpress-multisite}

WordPress **Multisite** yra WordPress įrengimo tipas, kuris leidžia jums sukurti ir valdyti tinklą kelios svetaini. Tai galima padaryti iš vieno WordPress dashboardo. Jūs galite valdyti viską – nuo svetaini skaičiaus, funkcijos, temų ir vartotojų vaidmenys. Galite valdyti suratus ir tūnus svetaini.

## Tinklas (Network) {#network}

WordPress kontekste multisite tinklas yra vieta, kurje galima valdyti kelias **subsaitas** iš vieno dashboardo. Nors sukurti multisite tinklą skiriasi tarp hostingų tiekėjų, galinis rezultatas dažnai susijęs su keliais papildančiais nurodymais `wp-config.php` failinde, kad WordPress suprastų, kad jis veikia šiuo specifiniu režimu.

Antraštės yra kelios skirtingos skirties tarp multisite tinklo ir nepriklausomai įrengto WordPress'o instancijos, kurias mes trumpai pateiksime.

## Database (Bazė duomenų) {#database}

Database yra struktūrinis, suorganizuotas duomenų kompleksas. Kompiuterio terminologijoje database – tai programėlė, naudojama duomenų saugoti ir suorganizuoti. Pakeičkite ją užduobiui, kurį laikote kaip įrankį, kurioje saugote duomenis skirtingose dalisose vadintais lentelėmis (tables).

WordPress Multisite naudoja vieną bazę duomenų, o kiekviena subsaitai gauna savo lentelės su blog id prefixu. Taigi, kai įdėto multisite instanciją ir kuriate subsaitą, turite šių lentelių:

_wp_1_options_ - options table for first subsite

_wp_2_options_ - options table for second subsite

## Hosting provider {#hosting-provider}

Hostingas tvarkyra įmonė, kuri leidžia verslui ir individualams pasiekti savo svetainę per World Wide Web. Paslaugos, kurias siūlo hostingas tvarkymo sąskaita, skiriasi, bet dažnai apima svetainės dizainą, vietą duomenų saugojimo (storage space on a host) ir internet bağlantį.

## Domainas {#domain}

Domaino pavadinimas yra adresas, kurį žmonės naudoja pasiekti jūsų svetainę. Jis informuoja web naršalį, kur ieškoti jūsų svetainės. Tinka kaip gadu adresas – domainas yra tas, kaip žmonės pasieka jūsų svetainę internete. Taip pat, tai padaria lygiai su svetainės žymėjimais prieš savo parduotuvę. Jei norite pasiekti mūsų svetainę, turite įvesti mūsų web adresą naršalio adrese, kuris yra [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) _, kur [**ultimatemultisite.com**](http://ultimatemultisite.com) yra domaino pavadinimas.

## Subdomainas {#subdomain}

Subdomainas yra svetainės hierarchijos tipas, esantis pagrindinio domaino požiūrio, bet vietoj naudojant katalogus turinį organizuoti svetainėje, jis skatina savo svetainę būti savimi. Jis pateikiamos kaip [**https://site1.domain.com/**](https://site1.domain.com/) , kur _site1_ yra subdomaino pavadinimas ir [_domain.com_](http://domain.com) yra pagrindinis domainas.

## Subdirektorius {#subdirectory}

Subdirektorius yra svetainės hierarchijos tipas po pagrindiniu domainu, kuris naudoja katalogus turinį organizuoti svetainėje. Subdirektorius yra tas pats kaip subkatalogas ir pavadinimai gali būti naudojami tarpuskeliam. Jis pateikiamos kaip [**https://domain.com/site1**](https://domain.com/site1) , kur _site1_ yra subdirektorius pavadinimas ir [_domain.com_](http://domain.com) yra pagrindinis domainas.

## Subsite {#subsite}

Subsite yra child site, kurį jūs kuriate savo Multisite tinklu. Jis gali būti **subdomėniumas** arba **podskleidumas**, prieldant to, kaip yra nustatytas jūsų WordPress Multisite instalacija.

## Super Adminas {#super-admin}

WordPress Super Adminas yra vartotojo rolis su visais įgaliojimu valdyti visus subsites tinklu. Jūsų WordPress instalacijai, kaip Multisite vartotojai, tai yra **didžiausias prieiga laipsnis**, kurį galite suteikti savo WordPress instalacijai.

## Pluginas {#plugin}

Paprastai pluginas yra kodų rinkinys, kuris pridėja papildomą funkcijas jūsų WordPress svetainei. Tai gali būti tiek taip, kaip paprastas pakeisti pradinimo logotipą, tiek skaičiai sudėtingas, jei pridėsite e-commerce funkciją. _Woocommerce_ ir _Contact Form_ yra pavyzdžiai pluginų.

WordPress Multisite tinklu pluginus galima įdėti tik iš Super Admino administratorio dashboardo. Subsite administratoriai gali aktyvuoti ir deaktyvuoti pluginus tik savo subsite.

## Temai {#themes}

WordPress tema yra failų grupė (_grafikos, stiliai ir kodas_), kuri nurodo svetainės visą apvaizdą. Ji suteikia visus front-end stilifikavimus, tokius kaip fontų stilių, puslapio tvarkymas, spalvos ir kitos dalykai.

Tinkamai kaip pluginai, WordPress Multisite temai galima įdėti tik Super Adminas, o aktyvuoti jeju laipsnis gali subsite administratoriai.

## Svetainės šablonas (Site Template) {#site-template}

**Svetainės šablonas (Site Template)** yra bazinis svetainės modelis, kurį galima naudoti kaip pagrindą, kur kuriate naujus svetainis tinklu.

Tai reiškia, kad galite kurti pagrindinį svetainį, aktyvuoti skirtingus pluginus, nustatyti aktivų temą ir sukurti jį taip, kaip jums reikia. Tada, kai jūsų klientas kuria naują paskyrą, jis gaus ne standartinę WordPress svetainę be reikšmingo turinio, o gaus kopiją jūsų pagrindinią svetainę su visais pakeitimais ir turiniu jau įdėtu.

## Domenų nenumatymas (Domain Mapping) {#domain-mapping}

**Domenojei netybos** su WordPress-u yra būdas leisti vartotojams perrodyti į tinkamą hostį, naudojant svetainės adresą. WordPress Multisite (Multisite) aprašyme subsaitos sukuriamas naudojant arba subdirektorių, arba subdomainą. Domenoje netybos leidžia subsite vartotojams naudoti pagrindinį domeną, panašų kaip [**joesbikeshop.com**](http://joesbikeshop.com), kad jų svetainės adresas atrodytų profesionaliau.

## SSL {#ssl}

SSL reiškia **Secure Sockets Layer**. Tai skaitmeninis sertifikatas, kuris patvirtina svetainės identitetą ir leidžia įvykti šifruotas ryšys. Šiuolaikiniame laiku tai naudojama kaip standartinė technologijos beveikimo būdas internetiejiems ryšiams ir apsaugoti bet kokius jautrius duomenis, kurie siunami tarp dviejų sistemų, nes leidžia kriminalizatoriams skaityti ir keisti bet kokią informaciją, įskaitant galimus asmeninius duomenis. Šiuolaikiniai naršykliai reikalauja SSL, todėl tai yra būtina svetainę kurti ir veikti.

## Mediai {#media}

Mediai – tai vaizdai, audio, video ir kitos dalys, kurios sudaro svetainę.

Tinkliniai (Network) svetainės dalina vieną duomenų bazę WordPress Multisite, tačiau jie palaiko skirtus jūsų fizinio diskamento (filesystem) žymus medijos failams.

Standartinė WordPress laukimo vieta (wp-content/uploads) visada laiko; tačiau jos kelias yra pakeisti, kad atspindintų tinklinės svetainės unikalų ID. Taip, rezultatu, tinklinės svetainės medijos failai pasirodo kaip wp-contents/uploads/site/[id].

## Permalinks {#permalinks}

Permalinks yra jūsų individualios blogų įrašo ar puslapio permanūs URL adresai jūsų svetainėje. Permalinks taip pat vadinami **pretty links**. Pagal valdymą, WordPress URL adresiui naudojasi klausimo eilutės formatas, kuris atrodo panašiai:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite {#ultimate-multisite}

Ultimate Multisite yra WordPress pluginas, skirtas WordPress Multisite įdiegtiems, kuris transformuoja jūsų WordPress įdiegimą į premium tinklą svetaini – panašiai kaip [WordPress.com] – leidžiant klientams sukurti svetainis per mėnesio, ketvirtadienio arba metinio mokesčių (jūs galite sukurti ir Nemokamas planus).

## Checkout Formas {#checkout-form}

Checkout Formas yra vienas ar daug etapų užsakymo forma, kuri susijusi su subsite skirstymo, nuskaitos ir vartotojų paskirto registracijos procesais per Ultimate Multisite. Ji sudaro skirtingus laukus ir mokėjimo formus, kurus vartotojas turi pateikti įregistruojimo metu.

## Webhookas {#webhook}

Webhookas (arba web callback arba HTTP push API) yra būdas, kaip programėlė gali pateikti kitoms programėlėms realios informacijos. Webhookas siunčia duomenis kitoms programėlėms, kai jie pasirodo, o tai reiškia, kad jūs gausite duomenis iš karto.

**Ultimate Multisite webhookai** atvertos belimančias galimybes, leidžiant tinklo administratoriams atlikti visą rodyklę šiek tiek šokantais bet naudingais integracijomis, ypač jei jie naudojami su paslaugomis, tokiomis kaip _Zapier_ ir IFTTT.

## Eventai {#events}

Eventas yra veikla, kuri vyksta kaip rezultatas vartotojo ar kitos šaltinio veiklos, pavyzdžiui, myšaus klikimo. Ultimate Multisite laikosi visų įvykių ir logų, kurie vyksta jūsų visame tinklyje. Tai matyti skirtingas veiklos, kurios vyksta jūsų multisite, pavyzdžiui, planų pakeitimai.
