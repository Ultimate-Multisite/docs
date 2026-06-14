---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101

Ultimate Multisite yra WordPress Multisite pluginas, kuris leidžia jums siūlyti WaaS (Web as a Service) arba svetainius kaip paslaugą klientams. Prieš to, kad ieškotume, kaip Ultimate Multisite gali padėti jūsų įmonė ir klientams, turime gauti pagrindines žinias.

## WordPress Multisite

Labiausiai mes jau esame aušrį su standartiniu WordPress instalavimu. Jūs arba per hostingo tiekėjo kontrolinį panelį ją kuriate, arba, jei esate drąsiški, nustatote naują web serverį ir duomenų bazę, atsisiunčiate pagrindinius failus ir pradėjate įdiegimo procesą.

Tai veikia milijonams WordPress svetaini po pasauliu, bet iš agentūros ar hostingo tiekėjo perspektyvos turime pažiūrėti saugumo aspektus.

Nors tai yra patogiai sukurti vieną WordPress svetainę arba net šimtų per automatinį kontrolinį panelį, problemos pradės pasirodyti, kai bus jūsų užduotis valdyti šiuos svetainis. Jei nebus valdomi, jūs būsite pagrindinis tikslas uchun malware (virusų). Valdymas reiškia įsitraukimą ir resursų naudojimą, ir nors yra veiksmingų įrankių ir pluginų, kurie gali padėti supaprastinti WordPress svetaini valdymo ir administravimo procesus, faktas, kad klientai išlaiko administratorio prieigą, reiškia, kad šie pastangai gali būti lengvai pasiekti.

Apie pagrindą, WordPress suteikia funkciją, kuri paprastai vadinama „Multisite“, kurios šaknos yra 2010 m. WordPress 3.0 lansavimo metu. Nuo to laiko ji gauta daug revizijų, skirtų įvesti naujus įrenginius ir užtikrinti saugumą.

Esai, WordPress multisite galima pamatyti taip: Universitetas laikys vieną WordPress instalaciją, bet kiekviena fakultetas laikys savo savos WordPress svetainės.

Aisime šį teigimą supagaupime ir pažiūrėsime į pagrindinius terminus, kurie yra ne tik Ultimate Multisite dokumentuose, bet ir visame WordPress bendruomenėje.

### Tiekiena (The Network)

WordPress kontekste multisite tinklas – tai vieta, kurje galima valdyti daug subsite'ų iš vieno dashboardo. Nors kūrimas multisite tinklo skiriasi tarp hostingų tiekėjų, galiausiai rezultatas dažnai yra kelios papildomos nurodytys `wp-config.php` failiui, kad WordPress suprastų, kad veikia šiuose režimu.

Mėgstamiausiai rodo skirtingas skirtumas tarp multisite tinklo ir nepriklausomai įrengto WordPress instalacijos, kuriuos kitaip trumpai pateiksime.

#### Subdomėnis vs. Subdirektorius (Subdomain vs. Subdirectory)

Viena iš pirmųjų spauskių, kurį turite priimti, yra tai, ar multisite instalacija veiks su _subdirektoriais_ ar _subdomėniais_. Ultimate Multisite veikia vienodai su visais pasirinkimais, bet tarp šių dviejų konfigūracijų yra kelios architektūros skirtingości.

_Subdirektorių_ konfigūracijoje tinklo svetainės perimeina jį žymėjimą (path) pagal pagrindinį domeną. Pavyzdžiui, tinklo svetaine, pažymėta kaip „site1“, turės savo visą URL adresą https://domain.com/site1. _Subdomėnio_ konfigūracijoje tinklo svetaine turės savo _subdomėnį_, išleidžiamą iš pagrindinio domeno. Taigi, svetaine pažymėta kaip „site1“, turės savo visą URL adresą https://site1.domain.com/.

Nors abie prieigos sąlygos yra puikios pasirinkimai, naudojimas _subdomėniams_ suteikia kelis pranašumus, bet taip pat reikalauja daugiau mąstymo ir planavimo architektūrai.

Moks DNS ar šiuo metu naudojimas _subdirectories_ yra relativiai paprastas iššūkis. Kadangi tinklo svetainės yra tiesiog pagrindinės dalys, reikia egzistuoti tik vienas domenų vardinio įrašo pagrindinei domenui. Su _subdomainais_ iššūkis yra biraz sudėtingesnis ir reikalauja arba atskirto CNAME įrašo kiekvienai tinklo svetainei, arba vidurio DNS įrašų laukimo (* wildcard) įrašo.

Kitas reikalinga dėmesio zona yra susijusi su SSL-u ir SSL sertifikatų išduodimu ir naudojimu. _Subdirectory_ konfigūracijoje galima naudoti vieną domenų sertifikatą, nes tinklo svetainės tiesiog yra pagrindinės domenų vardinio pavadinimo kelių. Taigi, sertifikatas domaino.com pateiks tinkamą SSL-ą https://domain.com/site1, https://domain.com/site2 ir taip be galiba.

_Subdomainai_ konfigūracijoje naudojimas laukimo (wildcard) SSL sertifikato yra vienas dažniausiai naudojami variantų. Šis sertifikatas suteikia šifravimą domenui ir jo _subdomainams_. Taigi, laukimo SSL sertifikatas suteiks šifravimą https://site1.domain.com, https://site2.domain.com ir net pačiariam domainui.

Nors egzistuoja kitos variantai, jie dažnai yra apriboti ratione ir taikomybėje ir reikalauja papildomų konfigūracijų ir dėmesio dėl tinkamumo.

#### Pluginai ir Temai

Kas WordPress suteikia, tai atimant, labiausiai iš klientų perspektyvos. Jei savame WordPress instaliuojami (stand-alone) paleidimoje administrator įdaro nepatikimą pluginą arba neprieina atnaujinimas, vienintelis ofioto ir žrtvų šis veiksmas yra jis pats. Tačiau jei administrator įdaro nepatikimą pluginą multisite instaliuojamame paleidime, tai skatina ofioto kiekvieno tinklo svetainės ofioto.

Dėl toliau, kai konfigūruojama kaip multisite WordPress, sistema pašalina administratorų galimybę įdaryti pluginus ir temų ir nustato šią galimybę naujai sukurtam tinklo administratoriaus ar „super administratoriaus“ vaidmeniu. Šis privilegijuotas vaidmuo tada gali pasikirti, ar leisti tinklo vietų administratoriams matyti arba prieiti į pluginų meniu savo dashboarde ir, jei taip, ar šios teisės apima _įjungimą_ ar _išjungimą_ pluginus.

Šiai laiku tinklo administratoras yra atsakingas už pluginų ir temų įdarymą tinkluose ir deleguoja teikumus naudoti šiais pluginais ir temais tinklo vietoms. Vietos administratorai negali įdaryti pluginus ir temas ar prieiti prie pluginų ir temų, kurie nėra nurodyti jų vietai.

#### Vartotojai ir Administratorai

WordPress Multisite sistema, kurioje visos tinklo vietos dalina tą pačią duomenų bazę ir todėl dalina toliau vartotojus, vaidmenius ir galimybes. Labiausiai tinkamai tai vizualizuoti galima taip: visi vartotojai yra tinklo nariai, o ne kurio nors vieno vietos.

Šį supratimą atsižvelgiant, gali būti netiksliai leisti sukurti vartotojus ir dėl to WordPress Multisite pašalina šią galimybę nuo vietų administratoriais ir nustato ją tinklo administratoriaus vaidmeniu. Taip, tinklo administratoras gali deleguoti reikiam privilegijas vietos administratorui, kad jis galėtų sukurti vartotojų paskyras savo vietai.

<!-- Screenshot unavailable: WordPress Multisite network user management interface -->

Atsekti viršutiniame pateiktame teigta, nors vartotojų paskyros atrodo susijusios su vieta, jie iš tikrųjų yra nurodyti tinklui ir todėl turi būti unikalūs visame tinkluose. Gali atstuti situacijos, kai vartotojų vardai negali būti registruoti dėl šios priežasties.

Nors, choć nie jest to obce pojęcie w systemach korporacyjnych, ta pojedyncza baza do rejestracji użytkowników i uwierzytelniania bywa trudna do zrozumienia dla osób zaznajomionych z samodzielnymi instalacjami WordPressa, gdzie zarządzanie użytkownikami jest nieco prostsze.

#### Media

Gdzie strony sieciowe dzielą jedną bazę danych w WordPress Multisite, utrzymują osobne ścieżki na systemie plików dla plików multimedialnych.

Standardowa lokalizacja WordPressa (wp-content/uploads) pozostaje bez zmian; jednak jej ścieżka jest zmieniona tak, aby odzwierciedlała unikalny identyfikator strony sieciowej. W rezultacie pliki multimedialne dla strony sieciowej pojawiają się jako wp-contents/uploads/site/[id].

#### Permalinks

Wcześniej wspomnieliśmy o wyraźnych zalet konfiguracji _subdomain_ nad _subdirectory_, a oto one: ścieżki.

W konfiguracji _subdirectory_ główna strona (pierwsza stworzona po utworzeniu sieci) oraz podstrony sieciowe muszą mieć tę samą ścieżkę prowadzącą z nazwy domeny. Może to prowadzić do ogromnej liczby konfliktów.

Dla postów dodawany jest obowiązkowy ścieżka /blog/ na głównej stronie, aby zapobiec kolizjom ze stronami sieciowymi. Oznacza to, że ładne permalinksowe adresy takie jak „Nazwa posta” będą prezentowane jako domain.name/blog/post-name/.

<!-- Zrzut ekranu niedostępny: ustawienia permalinków WordPressa pokazujące ścieżkę /blog/ w konfiguracji subdirectory -->

W konfiguracji _subdomain_ ta czynność nie jest konieczna, ponieważ każda strona sieciowa korzysta z pełnego oddzielenia domeny i dlatego nie musi polegać na jednej ścieżce. Zamiast tego utrzymują własne, odrębne ścieżki oparte na ich _subdomain_.

<!-- Zrzut ekranu niedostępny: ustawienia permalinków WordPressa dla konfiguracji subdomain -->

#### Strony statyczne

W konfiguracji _subdirectory_ potencjał kolizji nazw rozciąga się na statyczne strony jako główną stronę, a strony sieciowe dzielą tę samą ścieżkę.

Aby temu zapobiec, WordPress oferuje sposób na zablokowanie pewnych nazw stron, aby nie kolidowały one z nazwami pierwszej strony. Zazwyczaj administrator sieci wprowadza główne ścieżki stron głównej strony.

<!-- Zdjęcie niedostępne: ustawienia sieciowe WordPress Multisite pokazujące zakazane nazwy stron w celu zapobiegania konfliktom -->

W konfiguracji _subdomain_ możliwość kolizji nazw jest łagodzona przez _subdomain_, ponieważ jest on unikalny dla strony sieciowej i nie ma żadnego związku z główną stroną.

### Rejestracja

W ustawieniach sieciowych WordPress Multisite dostępne są kilka nowych opcji rejestracji użytkowników, które pozwalają nowym i istniejącym użytkownikom na tworzenie stron.

<!-- Zdjęcie niedostępne: ustawienia sieciowe WordPress Multisite pokazujące opcje rejestracji -->

W przeciwieństwie do niezależnych instalacji WordPressa, strony sieciowe nie zachowują znajomych opcji pozwalających na rejestrację użytkowników lub przypisanie tych rejestracji do ról.

<!-- Zdjęcie niedostępne: ustawienia rejestracji użytkownika dla niezależnej strony WordPress pokazujące ograniczone opcje -->

Kiedy tworzone są konta użytkowników, te konta generowane są na poziomie sieci. Zamiast należeć do jakiejś konkretnej strony, należą one do całej sieci. Ma to pewne charakterystyczne zalety i wady.

Pavyzdžiui, kurį naudojate WordPress Multisite, galite nustatyti multisite ir tada sukurti tinklo (network) paleidimus finansų, technologijų, entretenimento ir kitų ilgialačių sferose, išlaikant visą kontrolę įrankiais (plugins) ir temomis. Kiekvienas tinklo paleidimas turėtų turėti daug didesnį kontrolę angus ir vartotojų patirtimi nei standartiniai post tipai ar kategorijos.

Šiai būdu, kai vartotojas prisijungiasi, jis prisijungiasi prie tinklo ir, galiausiai, prisijungiasi prie kiekvieno tinklo paleidimo, siekiant užtikrinti neprisaskiam patirtį. Jei jūsų naujas paleidimas yra subskriptcijos pagrindu, tai būtų idealus sprendimas ir rezultatas.

Jei tačiau multisite nurodytos tikslinės esmos ir tikslo yra pasiūlyti nepanašius tinklo paleidimus, kurie nėra sujungiami, beveik visada reikalinga jūsų įrengti vidurinčias ar papildomias įrankius (plugins), kad manipuliuotumė vartotojų vaidmenimis.

### Domenas ir SSL

Rašykime apie WordPress Multisite instalaciją, kuri beveik nieko neįspūdi – Wordpress.com. Tai yra didžiausias pavyzdys WordPress multisite ir demonstruoja jo didelius įgalumus būti pritaikomiems ir suformuotiems atitinkamai tikslui.

Šiuo metu moderniame internete SSL naudojimas beveik yra privalomas, o tinklo administratoriai WordPress multisite neturi dabar kitų iššūkio.

Jei naudojama _subdomain_ konfigūracija, paleidimai sukuriami pagal pagrindinį domeną. Taigi, „site1“ pavadinimas būtų sukuriamas kaip „site1.domain.com“. Naudojant vidurį SSL sertifikatą (wildcard SSL certificate), tinklo administratorius gali sėkmingai atsakyti į šį iššūkį ir suteikti SSL šifrovimo galimybes tinklui.

WordPress Multisite turi domenų mapavimo funkciją, kuri leidžia tinklo vietoms asociuoti pritaikytus domenus arba domenus, kurie yra skirti tinklo pagrindiniam domeno.

Tinklo administratoriams tai sukuria papildomą sudėtingumą tiek domenų nustatymuose, tiek SSL sertifikatų išdavimo ir priežiūromi.

Šiuo metu, nors WordPress Multisite suteikia būdą nurodyti, kad [www.anotherdomain.com](http://www.anotherdomain.com) būtų mapuotas į „site1“, tinklo administratoriam liksta su išorinejame DNS įrašų vadovavimu ir SSL sertifikatų įvedimu.

## Ultimate Multisite

Suprantant skirtumą tarp nepriklausomai įdiegto WordPress instalacijos ir Multisite instalacijos, pamatome, kaip Ultimate Multisite yra geriausias įrankis teikti svetainius kaip paslaugą (Website as a Service).

### Pradedimas

Ultimate Multisite yra jūsų švilpio mokslas, kai tai susiję su svetainės kaip paslauga (WaaS) kūrimu. Pameinkite Wix.com, Squarespace ir WordPress.com, o tada pamatykite savo paslaugą.

Šalia „šalia“ Ultimate Multisite naudoja WordPress Multisite, bet tai taip, kad ne tik yra išsiaiškina tinklo administratoriams susiduria su multisite instalacijomis vykdytos daug problemų, bet pagerina galimybes, leidžiant sudaryti didelį įvairovę naudojimo atvejus.

Sekančių sekcijos pamatome dažnus naudojimo atvejus ir reikiamas laikytis jais.

### Naudojimo atvejai

#### Atveitas 1: Agentūra

Papildomai agentūros pagrindinės įgūdžiai lieka svetainų projektavimui, su aspektuose, tokiais kaip jų hostavimas ar marketingas, skiriami kaip papildomi paslaugos.

Dienstlektoriai Ultimate Multisite siūlo neįtikėtiną vertę, leidžiant savo įgaliemu hostuoti ir valdyti daug svetaini viename platformoje agencijoms. Tai dar daugiau, jei agencijos standartizuojasi su konkrečiais temais, tokiais kaip GeneratePress, Astra, OceanWP ar kitais – jie gali naudoti Ultimate Multisite geriausias įgalius automatiškai aktyvuoti šiuos temas kiekvienam naujam svetaini.

Analogiai su daug pasiūlymų agencijai kainoms populiariems ir dažniems pluginams, naudojimas Ultimate Multisite leidžia agencijoms naudoti jau turimus investicijas, teikdami bendrą platformą, kurioje galima įdėti, priežiūrėti ir naudoti pluginus.

Pabūtina, kad reikalingas būtų konfigūracijos naudojimas, o laimę bagi, Ultimate Multisite leidžia labai lengvai padaryti domenų mapavimą ir SSL sertifikatus su savo integracijomis su numeriais populiariai hostavimo paslaugos, taip pat paslaugomis, tokiomis kaip Cloudflare ir cPanel.

Taigi, naudodami vieną iš šių paslaugų arba įdėdamas Ultimate Multisite už Cloudflare, aspektai, kuten domenų ir SSL sertifikatų valdymas, tampa vidutiniu dalyku.

Agencijoms, kurios pasirinktų laikytis didelio kontrolio svetaini kūrimui, bus vertina to lengvumą, kaip jie gali sukreipti svetainius ir susitikti svetainius su klientais ir planų per Ultimate Multisite supaprastintą interfeisą.

![Ultimate Multisite site management interface](/img/admin/sites-list.png)

Kontrolė į pluginus ir temas laikosi pagal produktą, naudojant Ultimate Multisite intuityvius interfeisus, leidžianti pateikti pluginus ir temas arba paslėpti taip pat kaip jų aktyvavimo būseną, kai jie instancijuojami naujam svetaini.

![Product plugin limitations interface](/img/config/product-plugins.png)

Temai suteiki panašias veiksmus, leidžiant, kad įsitikintų aktyvuoti ar paslėpti specinius temai naujienos svetainėje.

![Product theme limitations interface](/img/config/product-themes.png)

Agentai gausas ramybę su Ultimate Multisite, leidžiant ji atlikti tai, kas yra jų geriausia – kurti apgailtinus internetinius svetainis.

#### Pavyzdys 2: Niche tiekėjas

Gali būti senas patarimas, kad „padary vieną dalyką ir padary jį geriai“. Daugeliui specialistų tai reiškia produktų ar paslaugų kūrimą apima vieną pagrindinę idėją.

Galbūt jūs esate aktyvus golfininkas, kuris reklamuojasi svetainiais klubams, arba galbūt esate aktyvus esports žaidžiamasis, kurius teikia svetainis klanams. Ar individualus asmuo, kuris reklamuoja rezervacijos paslaugą restoranams?

Daugeliu priežasčių turėtumėte teikti paslaugas, bazuotame į bendrą tvarką ir platformą. Tai gali būti tai, kad jūs kurdėte arba investuotiose specializuotus pluginus, kad pateiktumėte reikalingą funkcijų, arba gali būti taigi, kad industrijos geriausi praktikai reikalauja kokios nors standartizuoto nurodymų dizainui.

Viena iš Ultimate Multisite inovacinių funkcijos yra šių šaltinių naudojimas. Šis šaltinis yra tas, kurio įdiegta ir aktyvuota tema, įdiegti ir aktyvuoti reikalingus pluginus ir sukurti pavyzdinius straipsnius ar puslapis. Kai klientas kūrsta naują svetainę pagal šį šaltinį, šio šaltinio turinys ir nustatymai kopijuojami į naujai kurimą svetainę.

Šis pateikimo specialistams niche svetainių ir paslaugų suteikia nepritaikomybų pranašumą – galimybę iš karto sukurti prêt ready svetainę su pritaikytais pluginais ir dizainu. Klientas turėtų teikti tik minimalią informaciją, kad apdorotu paslaugą.

Nors reikalavimų prieldos abejonių konfigūracijos gali tapti tinkamos – jei pasirinksite _subdirectories_ ar _subdomain_ konfiguracijas, architektūros pasirinkimas bus tarp paprastos SSL sertifikato _subdirektoriui_ arba wildcard SSL sertifikato _subdomėnams_.

#### atvejis 3: WordPress svetainės hostavimas

WordPress svetainų hostavimo yra beaps ir daug būdų, bet labai retai tai yra taip paties kaip pateikti klientui interneto vietą su preinstaluota versija WordPress. Tai ta paskui, kad reikia susidėti daugybę sprendimų ir atsirandimų, kad teiktumėte reikšmingą paslaugą.

Ultimate Multisite išskyla šią dalį, pateikiant visapriešingą „turnkey“ (be problemų) sprendimą WordPress svetainių hostavimui. Šios sprendimo dalys apima pagrindinius mechanizmus, skirtus teikti prenumeruosius paslaugas, mokėjimo laukus, kasos formų, nuolaidų kuponų ir klientų komunikaciją.

Daugiausiai esančio svarbio veiklos, reikalingos WordPress Multisite tinkamai įdėti, konfigūruoti ir palaikyti, Ultimate Multisite leidžia atlikti, o tai yra taip, kad tinklo administratoriams reikia atkreipti dėmesį tik į aspektus susijusius su jų paslauga ar nichenę, pavyzdžiui, produktų lygis, kainą ir paslaugų pasiūlymus.

Programatoriams, kurie nori integruoti su Ultimate Multisite, šios sprendimo dalys taip pat siūlo visapriešingą RESTful API ir Webhooks įvykių pranešimui.

Be priklausomybės nuo daugybos vidurinių pluginų ir licencijų, Ultimate Multisite teikia funkcionaliai bogtą ir lygį su kitais paslaugomis (pvz., Wix, Squarespace, WordPress.com ir kiti).

### Architektūros atkreipimai

Nors tai nėra visapriešingas gidas, šie dalykai gali būti nurodymai tinkamų technologijų pasirinkimui, kurios padės palaikyti Ultimate Multisite įdėjimą.

#### Bendras vs. Dedikuotas hostavimas

Štai, nevis kas hostingų tiek sąnaudos ir kai kurie praktikuoja ekstremalų serverų padidėjimą. Nulieti kainos hostingai tipicamente generuoja pajamos maksimalizuojant serverų padidėjimą. Taigi jūsų Ultimate Multisite instalacija gali būti tik vienas iš šim vietų tą pačiame servere.

Be tinkamų apsaugos nuo tiekėjo, vietos bendrame servere susiduria su „šunkašio sągojimo“ problemu. Tai reiškia, kad kitai vietos, esantys toje pačio servere, turi kempiauti už likus resursus, kurį naudoja ta vienas vietos. Dažnai tai rodoma kaip langesnos svetainės arba neatsakytos laiku.

Kai jūs esate web hostingų tiekėjas, efektai bus reiškoti, kad jūsų klientai susiduria su netikiais greičiais, mažais rangais ir dideliais atsisakymais, dažnai sukeldant klientų išankstų, nes jie ieško paslaugų kitose virodoje.

Apimausiame reiškiau: kainas ne reiškia kokybės.

Ultimate Multisite žinoma, kad veikia su numeriu geriausiais hostingų tiekėjais ir gerai integruojasi su jų aplinkva, teikiant funkcijas, tokias kaip domenų netyrinimas (domain mapping) ir automatinis SSL. Šie tiekėjai vertina sąlygų veikimą ir siūlo aukštesnį lauką paslaugas nei bendras hostingas.

Jei norite skaičių su tinkamais tiekėjais ir visus nustatymo instrukcijas, prašome peržiūrėti dokumentaciją „Tinkami tiekėjai“ (Compatible Providers).

#### Naudojimo atsižvelginkai

Ultimate Multisite nėra langesnė programė, tai tikrai greita. Tačiau ji veikia tik tiek, kiek yra geriai pagrindinė programė ir infrastruktūra, o gali naudoti tik tą, ką turi prieigą.

Pagalvokite šį scenarijų: jūs esate Ultimate Multisite instalacijos tinklo administratorius su 100 vietomis. Kai kurie iš tų vietų gerai veikia ir atraใจo daug svetainės vizitatori kasdien.

Šis scenarijus būtų kitas, jei turėtų mažesios skalių, pavyzdžiui vienu ar penkiame svetainiu, bet ilgai po to būtų aiškiai matomi skalos problemos.

Jei vieną Ultimate Multisite svetainę nepatrupius, ji bus atsakinga už visų puslapių vizitatori reikalavimų atitikimą. Šie reikalavimai gali būti dinaminių PHP puslapių ar statinių reikalavimų, tokių kaip stiliai (stylesheets), JavaScript arba medya failai. Nezgrybti vienu svetaine ar šim svetainais, šios užduotys tampa repetityvimis, monotoniais ir beproksmisios. Nepavykdama naudoti CPU pajėgumus ir RAM procesioti PHP failą, jei rezultatas yra tas pats statinis informacinis turinys kiekvienam reikalavimui.

Analogiai, vienas reikalavimas PHP ar HTML puslapio sukuria kelis toliai sekančius reikalavimus skriptams, stilams ir vaizdo failams. Šie reikalavimai yra tiesiogiai nurodomi jūsų Ultimate Multisite serveriui.

Šį problemą galima lengvai išspręsti atnaujindami serverį, bet tai ne išlaiko sekundinės problema – geografinių laiko (latencies). Tik kelios serveriai skirtingose vietoose gali tinkamai susiregistruoti su šiuosiu problemu.

Dėl to dauguma tinklo administratorų naudoja front-end caching solutions ir content distribution networks (CDN) atitikti statinių puslapių reikalavimus. Atitinkant šius reikalavimus ir teikdami sąskaitas prieš pasiekdami serverį, sutaupyjama procesavimo resursus, eliminuojama laiko uždarymas, vengiamas neprospectuivos atnaujinimai ir maksimalizuojamos technologijos investicijos.

Ultimate Multisite sujungia sofistikuotą Cloudflare add-on, leidžiantį tinklo administratoriams pateikti savo instalacijas už Cloudflare ir naudoti ne tik jo caching galimybes, o dar DNS hostavimą, SSL sertifikatus ir saugumo mechanizmus.

#### Sauga (Backups)

Galite pasirašyti 50 žmonėms dėl patarimų apie saugumą ir gauti 50 skirtingus puslapių strategijas. Apsakata yra: tai priklauso nuo situacijos.

Nėra suverbiaus, kad rezervai yra reikalinga ir kad beveik neįmanoma, kad tai nebus valdoma tiekėjas, ypač jei jis siūlo išlaikytą paslaugą (managed service). Taigi klientai ieina tinklo administratoriaus pasiekti šią paslaugą ir ją valdyti. Kiek tinklo administratorui ieškomi – tai visiškai kitas problema.

Šio skaidrumo tikslui susipažinime, kad rezervas yra sistemos būklės kopija tam raidėta metu, kai buvo inicijuotas rezervas. Paprastai pasakojame: kas nors yra sistemos būklėje rezervavimo metu – ta būklė yra užfiksuota ir saugoma rezervą.

Su šiuo supratimu, kaip atlikti rezervus ir kas yra geriausias jūsų aplinkve, dideliai priklauso nuo jūsų reikalavimų ir hostingu tiekėjo galimybes sužinoti šiuos reikalavimus. Tačiau, nuo labiausiai mokingimo iki labiausiai nekomokingimo, pateiktos žemiau esančios variantai gali suteikti ką nors nurodymų.

#### Snapshots (Kopijos būklės)

Snapshots yra rezervų „silvė buviena“, nes jie yra lengvi, nereiklingi (kol jūs ne norite atskirti) ir „darbo be problemų“. Tačiau jie reikalauja jūsų tiekėjo pagalbos ir daugeliui laika tinka tik jei turite VPS (Virtual Private Server) arba panašią įrenginį. Visiame mūsų „Sutinkami tiekėjai“ dokumente pateikiami kelešiai, kurie siūlo rezervus, reikalaujančius jokių didesnių tinklo administratoriaus intervencijų ar atsirandamos dėmesio.

Tradiciškai, jei tradiciniai backupai taisto į failus ir duomenų bazas, snapshotie taisto visą diską. Tai reiškia, kad ne tik svetainės duomenys bus užfiksuoti snapshotie, bet ir operacinė sistema ir konfigūracija taip pat. Daugeliui tai yra aiški pranašumas, nes naują sistemą galima beveik iškart sukurti iš snapshotio ir įjungti ją veikti, kad pakeistumė būklę neigiamai veikiančią instanciją. Analogiai būtų atvežimas – atvežimo procesas failų atsiminkti reikalauja tik pridelės snapshot vaizdo įvaizdį kaip diską prie esamaj instancijos, kad duomenys galėtų būti pasiekti ir nukopijuoti.

Snapshotai gali sukelti papildomą kainą su hostingu tiekėju, bet tai yra apsaugos polisa prieš nuostatas.

#### Išorinis skriptai

Atsirasta daug išorinių skriptų ir sprendimų backupu WordPress ir MySQL resursų, kurie būtų puikiai tinka Ultimate Multisite, nes tai yra WordPress pluginas, kuris naudoja WordPress filesystemą ir duomenų bazę. Taigi, sprendimas, kuris backupuota WordPress svetainų reikalavimus apima Ultimate Multisite reikalavimus.

Mes negalime rekomendoti vieną skriptą kito, bet mūsų bendras patarimas – atlikti kelis backupo ir atsiminkimo testus, kad užtikrintumėte norimus rezultatus ir „patikrinumai“, nuolatiniai vertinant skriptą ir jo veikimą, ypačje, kur taikoma kokios formos diferencijos backup strategija.

Nuožymėti, kad šie skriptai, veikiančiame, bus padaryti sistemines įkrovos didesnės, kurią reikia atsižvelgti.

#### Pluginai

Labai retas yra problemų WordPress, kurios negalima išspręsti pluginu, o jei valdyti išorinius skriptus jums nepatinka, galbūt pluginas yra kitas geriausias variantas.

Nors, nors plėtiniai skiriasi savo galimybėmis ir funkcijomis, bet jie visada atlieka vieną pagrindinę funkciją – kopijuoja WordPress failus ir duomenų bazos. Po to funkcijas skiriasi: kai kurie plėtiniai gali išsiųsti saugias kopijas į vidurinį paslaugas, tokias kaip Google Drive ar Dropbox, arba į kokį nors tinkamą objektų saugojimo paslaugą, pavyzdžiui S3, Wasabi ar kitas. Darai apibūdines plėtiniai siūlo diferencinius saugias (backup) arba kokį nors strategiją saugoti tik duomenis, kurie buvo pakeisti, kad sutaupytumėte išorinių saugojimo išlaidas.

Pasirinkdami savo plėtinaį, atkreipkite dėmesį, ar jis yra multisite (*multisite aware*). Dėl jo veikimo natūros, kol saugimas vyksta, galite tikėtis trumpalaikios įsivaikalybos (load) serverio, kol procesas bus užbaigtas.

#### Domenas ir SSL

Daug buvo diskutojama apie domenų naudojimą multisite _subdomain_ režime. Nariestai universali sp ir tinklo administratoriams yra naudoti wildcard DNS įrašus.

![Wildcard DNS entry configuration example](/img/config/settings-domain-mapping.png)

Šis DNS įrašo tipas sėkmingai atsiranda _subdomėnius_, tokius kaip ‘site1.domain.com’ ir ‘site2.domain.com’, į IP adresą 1.2.3.4, todėl tai palaiko Ultimate Multisite ir didesnį WordPress Multisite naudojant _subdomain_ režimą.

Tai gali puikiai tinka HTTP, nes tikslus hostas skaitomas iš HTTP žinomybų, bet retai svetainės yra tokios paprastos šiuo metu, kad saugūs HTTPS transakcijos būtų praktiškai būtini.

Na labiausiai išsukis easyjios galimybės gauti SSL sertifikatus. `subdirectory` režime galima naudoti įprastą domenų sertifikatą. Šie yra lengvai ir nemokamai pasiekiami hostingų tiekėjais, kurie gali naudoti nemokamą LetsEncrypt paslaugą arba kitą šaltinį. Asemuose jie yra komerciniai ir pasiekiami nurodytojai, jei galite sukurti sertifikato užsakymo reikalavimą (CSR).

`subdomain` režime naudojant wildcard SSL sertifikatą puikiai sudergamas su wildcard domeniu ir leidžia sertifikatui tapti aukščiausios autoritietės tiek pagrindinei domenui, tiek visoms `subdomains` be papildomų konfigūracijos.

Tačiau reikia atkreipta dėmesį, kad wildcard SSL sertifikatai gali ne veikti su paslaugomis, tokiomis kaip Cloudflare, jei neturite enterprise planą arba nustatysite įėjimo režimą tik DNS, o tada visi kešavimo ir optimizavimo mechanizmai bus bypassinti.

Out-of-the-box Ultimate Multisite siūlo sprendimą šiai problemai, demonstruojant savo didelį patirtį WordPress multisite poreikiams. Aktyvuodami šį paprastą add-on, Ultimate Multisite naudos jūsų Cloudflare kreditiuosius duomenis, kad automatiškai pridėtų DNS įrašus tinklo vietoms Cloudflare ir nustatytų jų režimą „proxied“. Šiu būdu kiekviena tinklo subsite, kai sukurta, turės visą Cloudflare saugumą ir pranašumą, įskaitant SSL.

Nors priklausomai nuo jūsų Ultimate Multisite instalacijos natūros ir tikslo, vartotojai gali reikėti naudoti savo domenus. Šiame atveju tinklo administratorius turėtų išspręsti dvi problemas: vieną – domeno įrengimą ir kitą – sertifikatus tam domenei.

Daugeliui vartotojų, Cloudflare naudojimas yra lengva variantas. Vartotojui viskas reikalinga – pateikti savo domeną Cloudflare ir nurodyti CNAME į Ultimate Multisite pagrindinį domeną ir mapuoti savo domeną Ultimate Multisite, kad pradėtų naudotis jūsų pritaikytu domenų pavadinimu.

Iš šio pusės reikia ieškoti alternatyvių sprendimų, todėl Ultimate Multisite rekomenduojasi sąrašas sudergtių tiekėjų (Compatible Providers). Tai ta, nes DNS ir SSL nustatymo procesas gali būti nepatogus. Tačiau su Ultimate Multisite integracija su šiais tiekėjais sudėtingumas yra daug mažesni, o procedūra yra automatizuota.

#### Pluginai

Jau tikėtina, jums reikės papildomų pluginų, kad pateiktumėte funkcijas savo klientams ar tinklo svetainėms. Ar visi pluginai veikia su WordPress Multisite ir Ultimate Multisite? Tai priklauso nuo situacijos.

Nors dauguma pluginų galima įdėti į WordPress Multisite, jų aktyvavimas ir licencijavimas skiriasi kiekvienam autoriui.

Daugiausiai iššūkis yra to, kaip taikoma licencija su kitais pluginais, reikiant requiring licence per domeną. Tai reiškia, kad kažkamu pluginui tinklo administratorius reikės rankiniu būdu aktyvuoti licenciją kiekvienam naujam svetainiui ir kiekvienam pluginui.

Todėl geriausia gali būti patikslinti su plugino autoriais, kaip jų pluginas veiks su WordPress Multisite ir ar yra specialios reikalavimai ar procedūros, reikalingos licencijuoti jį.
