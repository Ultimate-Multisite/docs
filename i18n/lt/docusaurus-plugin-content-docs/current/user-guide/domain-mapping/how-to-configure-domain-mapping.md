---
title: Kaip nustatyti domenų mapavimą
sidebar_position: 6
_i18n_hash: 53ce91dcbf4f1046b0f74271decfcb77
---
# Kaiprasti domenų netyrinimą (v2)

_**SVARBUOTAS PRANEŠIMAS: Šis straipsnis taikomas Ultimate Multisite versijai 2.x.**_

Viena iš stipriausių funkcijų premium tinklo yra galimybė pasiūlyti savo klientams įdaryti šaltinį (top-level domain) savo svetainėms. Po visko, kas atrodo profesionaliau: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) ar [_**joesbikeshop.com**_](http://joesbikeshop.com)? Tai todėl Ultimate Multisite siūlo šią funkciją, kuri yra įtraukta sistema, nes reikia naudoti trečiosiomis programėlėmis.

## Kas tai yra domenų netyrinimas?

Kaip pavadinimas rodo, domenų netyrinimas yra galimybė, kuria Ultimate Multisite priima užklausą dėl pritaikytos domeno ir netyrina ją su atitinkama svetaine tinklu.

### Kaip įdaryti domenų netyrinimą jūsų Ultimate Multisite tinklu

Domenų netyrinimui reikia atlikti ką nors konfigūracijos, kad tai veiktų. Ačiū, Ultimate Multisite automatiškai atlieka sv difficultą darbą, kad galėtumėte lengvai sužinoti reikalavimus.

Ultimate Multisite įdarymo metu žvaigždutė (wizard) automatiškai kopiuoja ir įdara **sunrise.php** į nurodytą katalogą. **Žvaigždutė nesulaikys jūsų judėti, kol šis žingsnis nebus užbaigtas**.

<!-- Screenshot unavailable: Ultimate Multisite įdarymo žvaigždiutė su sunrise.php žingsniu -->

Tai reiškia, kad kai Ultimate Multisite įdarymo žvaigždutė baigus nustatyti jūsų tinklą, galite pradėti domenų netyrinimą jau iš karto.

Pagalba domeniu netyrinimas Ultimate Multisite nėra privaloma. Jums yra pasirinkimas naudoti natūralią funkciją domenų netyrinimo WordPress Multisite arba bet kokį kitą domenų netyrinimo sprendimą.

Je reikia išjungti Ultimate Multisite domenų maptavimą, kad galėtum naudoti kitus domenų maptavimo sprendimus? Jūs galite išjungti šią funkciją nustatymai **Ultimate Multisite > Settings > Domain Mapping** puslapyje.

![Domain Mapping settings page showing admin redirect, mapping message and DNS options](/img/config/domain-mapping-settings.png)

Šio opsijos po dešimtį galite pamatyti opsiją **Force Admin Redirect**. Ši opsija leidžia jums nustatyti, ar jūsų klientai bus pasiekti savo administratorio panelį tiek savo kustomio domenui ir subdomeninui, o tik vienam iš jų.

Jei pasirinksite **Force redirect to mapped domain** (Prutinti į maptuotą domeną), jūsų klientai bus pasiekti savo administratorio panelį tik savo kustomiu domenu.

Opsija **Force redirect to network domain** (Prutinti į tinklo domeną) padarytų eksaktai priešingą – jūsų klientams bus nurodyt, kad jie gali pasiekti savo panelių tik subdomenie, net jei bandys pasiregistruoti savo kustomiame domene.

O opsija **Allow access to the admin by both mapped domain domain and network domain** (Leisti prieigą administratoriai tiek maptuotam domenui, tiek tinklo domenui) leidžia jais pasiekti savo administratorius panelių tiek subdomenie, tiek kustomio domeno.

![Admin Redirect dropdown expanded showing the three redirect options](/img/config/domain-mapping-redirect-options.png)

Yra dvi būdai maptuoti kustomį domeną. Pirmas – maptavimas domenų pavadinimo iš jūsų tinklo administratorio panelio kaip superadministratorius, o paskutinis – per subsite administratorio panelį puslapyje „Account“.

Bet prieš pradėdami maptuoti kustomį domeną į vieną savo tinklo subsite, turite užtikrinti, kad **DNS nustatymai** domeno pavadinimo būtų tinkamai konfigūruoti.

###

### Užtikrinimas, kad domeno DNS nustatymai būtų tinkamai konfigūruoti

Kad mapavimas tuke, turite užtikrinti, kad domenas, kurį planuojate mapuoti, nurodytų į jūsų tinklo IP adresą. Priežastai reikia naudoti tinklo IP adresą – tai yra domeno IP adresas, kurje instalotas Ultimate Multisite – o ne kustomo domeno IP adresą, kurį norite mapuoti. Jei ieškote specinio domeno IP adresą, siunčiame jūsų į [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html) (pvz.).

Norėdami teisingai mapuoti domeną, turite pridėti **A RECORD** savo **DNS** konfigūracijai, kuris nurodytų tą **IP adresą**. DNS valdymo būdas labai skiriasi tarp skirtingų domeno registratorių, bet internete yra daug tutorialų, kurie apima šį procesą, jei ieškote „_Creating A Record on XXXX_“, kur XXXX yra jūsų domeno registratorius (pvz.: „_Creating A Record on_ _GoDaddy_“).

Jei susiraupytumėte su tą dalyku, kaip tai įvyksta, **susisiekitės su savo domeno registratoriaus pagalba**, ir jie pavyks jums padėti šiuo dalyku.

Jei planuojate leisti jūsų klientams mapuoti savo domenus, jie turės atlikti šį darbą savai. Jei susiraupytumėte su negaudojimu pridėti A Record, nurodykite jiems pagalbą savo registratoriaus sistemai.

### Mapavimas kustomo domeno pavadinimo kaip Super Adminas

Kai esate prisijungę kaip super adminas savo tinklu, galite lengvai pridėti ir valdyti kustomus domeno pavadinimus eiti į **Ultimate Multisite > Domains**.

![Domains list page in Ultimate Multisite](/img/admin/domains-list.png)

Šiame puslapyje galite paspausti mygtuką **Pridėti domeną** viršuje, ir atidarymas jūsų pateiks modala langą, kurio per pagalba galite nustatyti ir įrašyti **pridastą domenų vardą**, **subsaitę**, į kurią norite taikyti pridedamą domeną, o nuspręsti, ar norite nustatyti jį kaip **pagrindinį** domeną (paminėkite, kad galite mapuoti **keliamus domenų vardus vienai subsaitai**).

![Pridėti domeną modalas su domeno vardu, svetainės pasirinkimu ir pagrindinio domeno perjungimo](/img/admin/domain-add-modal.png)

Visą informaciją įrašytus po to galite paspausti mygtuką **Pridėti esamą domeną** apačioje.

Tai pradės procesą, kurio metu patvirtinamas ir ieškomas pradinio DNS informacijos jūsų pridėto domeno. Galite pamatyti logą puslapio apačioje, kad sekotumėte šį procesą. Šis procesas gali užtrukti kelias minučių.

Ultimate Multisite v2.13.0 automatiškai sukuria vidinį domenų įrašą, kai kurio nauja svetainė yra sukurta hostyje, kuris turi būti traktuojamas kaip domenas per svetainę. Jei hostas yra tinklo pagrindinis domenas arba vienas iš bendrujų skaitmenų formų bazinių domenų nustatytų lauke **Svetainės URL**, automatinis mapuotas domenų įrašas yra prastabamas, kad bendras bazinis domenas liktų prieinamas kiekvienai svetainei, kuri jį naudoja.

**Stage** arba status turi pakeisti nuo **Patvirtinamos DNS ieškojimo** (Checking DNS) į **Apiegaliotas** (Ready), jei viskas yra tinkamai nustatytas.

<!-- Screenshot unavailable: Domeno eilutė rodo Patvirtinaną DNS ieškojimo etapą domenų sąraše -->

<!-- Screenshot unavailable: Domeno eilutė rodo Apiegaliotos etapo ir žalia status indikatori -->

Jei paspausite domeno vardą, galite pamatyti kelis nustatymus viduje. Paspaiste šiek tiek peržiūrėsime juos:

![Domeno detalių puslapis su etapu, svetaine, aktyvumu, pagrindiniu ir SSL perjungimo mygtukais](/img/admin/domain-edit.png)

**Stage:** Tai yra taikomas etapas, kurio lauke yra jūsų domenų statusas. Kai pirmą kartą pridėsite domeną, jis, verta tikėjimo, bus įtrauktas į **DNS patikrinimą** etapą. Šis procesas patikrins DNS įrašus ir patvirtins, ar jie yra teisingi. Vėliau domenas bus pateikt į **SSL patikrinimą** etapą. Ultimate Multisite patikrins, ar jūsų domenui yra SSL sertifikatas ar ne, ir kategorizuos jūsų domeną kaip **Ready** (Apiegaliotas) arba **Ready (without SSL)** (Apiegaliotas be SSL).

**Site:** Tai subdomenas, kuris susijęs su šiuo domenu. Maptas domenas rodys šio specifinio vietos turinį.

**Active:** Jūs galite įjungti ar išjungti šią funkciją, kad aktyvuotumėte arba deaktyvuotumėte domeną.

**Is Primary Domain?:** Jūsų klientai gali turėti daugiau nei vieną maptą domeną kiekvienam vietai. Naudokite šią funkciją, kad pasirinkumėtokite, ar tai yra pagrindinis domenas specifinei vietai.

**Is Secure?:** Nors Ultimate Multisite patikrina, ar jūsų domenui yra SSL sertifikatas prieš ją įjungdami, jūs galite nustoti manuliai įkelti domeną su arba be SSL sertifikatą. Priežastai, kad jei svetainėje nėra SSL sertifikato ir jūs bandomas priversti ją įkelti su SSL, tai gali pateikti klaidas.

### Maptavimas kustomo domeno pavadinimo kaip subsite vartotojas

Subsite administratoriai taip pat gali maptuoti kustomus domenu pavadinimus iš savo subsite admin panelio.

Pirmiausia turite užtikrinti, kad įjungėte šią funkciją nustatymuose **Domain mapping**. Prieš to žiūrį paveikslėlį.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

Jūs galite nustoti arba konfigūruoti šią funkciją lauke **Plan** ar produktų nustatymuose **Ultimate Multisite > Products**.

![Custom Domains section on the product edit page](/img/config/product-custom-domains.png)

Kai bet kurių šių jūsų pasirinkimų įjungimo ir subsite vartotojui leidžiamumo nustatymo, kad subsite vartotojas matytų **Account** puslapio bawahą vadinant **Domains**.

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

Vartotojas gali paspausti mygtuką **Add Domain**, ir atidarymas pasirodys modalas, kuriame bus nurodytos instrukcijos.

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

Tada vartotojas gali paspausti **Next Step** ir tęsti procesą naujo domaino įdėjimo. Galite nustatyti, ar tai bus pagrindinis domainas ar ne.

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

Paspaudus **Add Domain**, pradėtas procesas, kurio metu valstomas ir pasiekiama jūsų kustomo domaino informacijos DNS duomenys.

### Apie Domain Syncingą

Domain Syncingas yra procesas, kai Ultimate Multisite pridėja kustomo domaino pavadinimą jūsų hostingu paskyliam kaip papildomą domainą **kad domainų netyvimo veikimas galėtų įvykti**.

Domain syncingas automatiškai vyksta, jei jūsų hostingo tiekėjas turi integraciją su Ultimate Multisite domainų netyvimo pavadinimų nustatymo funkcija. Šiuo metu šie hostingo tiekėjai yra _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways_ ir _Cpanel_.

Kai aktyvi yra hostingo tiekėjo integracija, Ultimate Multisite taip pat gali įdėti į koleję (enqueue) taską DNS ar subdomeno kūrimui tiesiogiai nuo tiekimto pusės naujai sukurtiems svetainėms. Jei jokių integracijos ne laukia šios taskos, arka planinė darba bus prastabinta, kad vengta nulaus veiksmų kolejės įrašai. DNS ir SSL patikrinimai netyvimo domainams tęsiasi per normalų domaino etapus procesą.

Jūs turėtumėte įveikti šią integraciją Ultimate Multisite nustatymuose, ieškodami **Integration** (Integracijos) pakuotės.

![Integrations tab in Ultimate Multisite settings showing hosting providers](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_Paišykite, kad jei jūsų hostinga tiekė nebus vienas iš up relations, nurodytų vietų, **jums reikės rankiniu būdu sinigruoti ar pridėti domeną** prie savo hostingo paskyros._
