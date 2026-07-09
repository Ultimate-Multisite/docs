---
title: Kaip sukonfigūruoti domenų susiejimą
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Kaip konfigūruoti domenų susiejimą (v2)

_**SVARBI PASTABA: šiame straipsnyje kalbama apie Ultimate Multisite 2.x versiją.**_

Viena galingiausių premium tinklo funkcijų yra galimybė pasiūlyti mūsų klientams prie savo svetainių prijungti aukščiausio lygio domeną. Galų gale, kas atrodo profesionaliau: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) ar [_**joesbikeshop.com**_](http://joesbikeshop.com)? Būtent todėl Ultimate Multisite siūlo šią funkciją integruotą, be poreikio naudoti trečiųjų šalių įskiepius.

## Kas yra domenų susiejimas?

Kaip rodo pavadinimas, domenų susiejimas yra Ultimate Multisite suteikiama galimybė priimti užklausą dėl pasirinktinio domeno ir susieti tą užklausą su atitinkama tinklo svetaine, prie kurios tas konkretus domenas yra prijungtas.

### Kaip nustatyti domenų susiejimą jūsų Ultimate Multisite tinkle

Kad domenų susiejimas veiktų, iš jūsų pusės reikia atlikti tam tikrą nustatymą. Laimei, Ultimate Multisite automatizuoja sunkų darbą už jus, todėl reikalavimus galite įvykdyti lengvai.

Ultimate Multisite diegimo metu vedlys automatiškai nukopijuos ir įdiegs **sunrise.php** į nurodytą aplanką. **Vedlys neleis jums tęsti, kol šis veiksmas nebus atliktas**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Tai reiškia, kad kai Ultimate Multisite diegimo vedlys baigs nustatyti jūsų tinklą, galite iš karto pradėti susieti pasirinktinį domeną.

Atkreipkite dėmesį, kad domenų susiejimas Ultimate Multisite nėra privalomas. Turite galimybę naudoti WordPress Multisite gimtąją domenų susiejimo funkciją arba bet kurį kitą domenų susiejimo sprendimą.

Jei reikėtų išjungti Ultimate Multisite domenų susiejimą, kad galėtumėte naudoti kitus domenų susiejimo sprendimus, šią funkciją galite išjungti skiltyje **Ultimate Multisite > Nustatymai > Domenų susiejimas**.

![Domenų susiejimo nustatymų puslapis, kuriame rodomas administratoriaus peradresavimas, susiejimo pranešimas ir DNS parinktys](/img/config/domain-mapping-settings.png)

Tiesiai po šia parinktimi taip pat galite matyti parinktį **Priverstinis administratoriaus peradresavimas**. Ši parinktis leidžia valdyti, ar jūsų klientai galės pasiekti savo administratoriaus skydelį tiek per savo pasirinktinį domeną, tiek per subdomeną, ar tik per vieną iš jų.

Jei pasirinksite **Priverstinai peradresuoti į susietą domeną** , jūsų klientai savo administratoriaus skydelį galės pasiekti tik per savo pasirinktinius domenus.

Parinktis **Priverstinai peradresuoti į** **tinklo domeną** atliks visiškai priešingą veiksmą - jūsų klientams bus leidžiama pasiekti savo skydelius tik per subdomeną, net jei jie bandys prisijungti per savo pasirinktinius domenus.

O parinktis **Leisti prieigą prie administratoriaus tiek per susietą domeną, tiek per tinklo domeną** leidžia jiems pasiekti savo administratoriaus skydelius ir per subdomeną, ir per pasirinktinį domeną.

![Išskleistas administratoriaus peradresavimo išskleidžiamasis sąrašas, kuriame rodomos trys peradresavimo parinktys](/img/config/domain-mapping-redirect-options.png)

Yra du būdai susieti pasirinktinį domeną. Pirmasis — susieti domeno pavadinimą iš tinklo administratoriaus skydelio kaip super administratoriui, o antrasis — per antrinės svetainės administratoriaus skydelį Account puslapyje.

Tačiau prieš pradėdami susieti pasirinktinį domeną su viena iš antrinių svetainių savo tinkle, turėsite įsitikinti, kad domeno pavadinimo **DNS nustatymai** yra tinkamai sukonfigūruoti.

###

### Įsitikinkite, kad domeno DNS nustatymai yra tinkamai sukonfigūruoti

Kad susiejimas veiktų, turite įsitikinti, jog domenas, kurį planuojate susieti, nukreiptas į jūsų tinklo IP adresą. Atkreipkite dėmesį, kad jums reikia tinklo IP adreso - domeno, kuriame įdiegtas Ultimate Multisite, IP adreso - o ne pasirinktinio domeno, kurį norite susieti, IP adreso. Norint rasti konkretaus domeno IP adresą, siūlome, pavyzdžiui, apsilankyti [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html).

Norėdami teisingai susieti domeną, savo **DNS** konfigūracijoje turite pridėti **A RECORD**, nukreipiantį į tą **IP adresą**. DNS valdymas labai skiriasi tarp skirtingų domenų registratorių, tačiau internete yra daugybė pamokų šia tema, jei ieškosite „ _Creating A Record on XXXX_ “, kur XXXX yra jūsų domeno registratorius (pvz.: „ _Creating A Record on_ _GoDaddy_ “).

Jei kyla sunkumų tai padaryti, **susisiekite su savo domeno registratoriaus palaikymo komanda** ir jie galės jums padėti su šia dalimi.

Jei planuojate leisti savo klientams susieti savo pačių domenus, šią dalį jie turės atlikti patys. Nukreipkite juos į jų registratoriaus palaikymo sistemą, jei jie negali sukurti A Record.

### Pasirinktinio domeno pavadinimo susiejimas kaip Super Admin

Kai esate prisijungę kaip super administratorius savo tinkle, galite lengvai pridėti ir valdyti pasirinktinius domenų pavadinimus eidami į **Ultimate Multisite > Domenai**.

![Domenų sąrašo puslapis Ultimate Multisite](/img/admin/domains-list.png)

Šiame puslapyje galite spustelėti viršuje esantį mygtuką **Pridėti domeną** ir bus atidarytas modalinis langas, kuriame galėsite nustatyti ir užpildyti **pasirinktinio domeno pavadinimą** , **antrinę svetainę**, kuriai norite pritaikyti pasirinktinio domeno pavadinimą, ir nuspręsti, ar norite jį nustatyti kaip **pirminį domeno** pavadinimą, ar ne (atkreipkite dėmesį, kad galite susieti **kelis domenų pavadinimus su viena antrine svetaine**).

![Pridėti domeną modalinis langas su domeno pavadinimu, svetainės pasirinkikliu ir pirminio domeno perjungikliu](/img/admin/domain-add-modal.png)

Įvedę visą informaciją, apačioje galite spustelėti mygtuką **Pridėti esamą domeną**.

Tai pradės pasirinktinio domeno DNS informacijos tikrinimo ir gavimo procesą. Puslapio apačioje taip pat matysite žurnalą, kad galėtumėte sekti vykstantį procesą. Šis procesas gali užtrukti kelias minutes.

Ultimate Multisite v2.13.0 taip pat automatiškai sukuria vidinį domeno įrašą, kai nauja svetainė sukuriama priegloboje, kuri turėtų būti laikoma kiekvienai svetainei skirtu domenu. Jei priegloba yra tinklo pagrindinis domenas arba vienas iš bendrų atsiskaitymo formos bazinių domenų, sukonfigūruotų **Site URL** laukelyje, automatinis susieto domeno įrašas praleidžiamas, kad bendras bazinis domenas liktų prieinamas kiekvienai jį naudojančiai svetainei.

Kai klientas užregistruoja naują domeną per Domain Seller v1.3.0 arba naujesnę versiją, Ultimate Multisite pagal numatytuosius nustatymus automatiškai susieja užregistruotą domeną su kliento tinklo svetaine. Administratoriams nebereikia pridėti atskiro susieto domeno įrašo po sėkmingos registracijos, nebent jie nori pakoreguoti tokias parinktis kaip pagrindinio domeno žyma, aktyvavimo būsena arba SSL tvarkymas.

**Stage** arba būsena turėtų pasikeisti iš **Checking DNS** į **Ready**, jei viskas tinkamai sukonfigūruota.

<!-- Ekrano kopija nepasiekiama: domeno eilutė, rodanti Checking DNS etapą domenų sąraše -->

<!-- Ekrano kopija nepasiekiama: domeno eilutė, rodanti Ready etapą su žaliu būsenos indikatoriumi -->

Jei spustelėsite domeno pavadinimą, galėsite pamatyti kai kurias jo parinktis. Greitai jas apžvelkime:

![Domeno išsamios informacijos puslapis su etapo, svetainės, aktyvumo, pagrindinio domeno ir SSL perjungikliais](/img/admin/domain-edit.png)

**Stage:** Tai etapas, kuriame yra domenas. Kai pirmą kartą pridėsite domeną, jis tikriausiai bus **Checking DNS** etape. Procesas patikrins DNS įrašus ir patvirtins, kad jie teisingi. Tada domenas bus perkeltas į **Checking SSL** etapą. Ultimate Multisite patikrins, ar domenas turi SSL, ir priskirs jūsų domeną kategorijai **Ready** arba **Ready (without SSL)**.

**Site:** Subdomenas, susietas su šiuo domenu. Susietas domenas rodys šios konkrečios svetainės turinį.

**Active:** Galite įjungti arba išjungti šią parinktį, kad aktyvuotumėte arba deaktyvuotumėte domeną.

**Is Primary Domain?:** Jūsų klientai gali turėti daugiau nei vieną susietą domeną kiekvienai svetainei. Naudokite šią parinktį, kad pasirinktumėte, ar tai yra pagrindinis domenas konkrečiai svetainei.

**Is Secure?:** Nors Ultimate Multisite prieš įjungdamas patikrina, ar domenas turi SSL sertifikatą, galite rankiniu būdu pasirinkti įkelti domeną su SSL sertifikatu arba be jo. Atkreipkite dėmesį, kad jei svetainė neturi SSL sertifikato ir bandysite priverstinai ją įkelti su SSL, gali atsirasti klaidų.

### Pasirinktinio domeno pavadinimo susiejimas kaip subsvetainės naudotojui

Subsvetainių administratoriai taip pat gali susieti pasirinktinius domenų pavadinimus iš savo subsvetainės administratoriaus valdymo skydelio.

Pirmiausia turite įsitikinti, kad įjungėte šią parinktį **Domain mapping** nustatymuose. Žr. ekrano kopiją žemiau.

<!-- Ekrano kopija nepasiekiama: Domain mapping nustatymai, leidžiantys subsvetainių naudotojams susieti domenus per Customer DNS Management perjungiklį -->

Taip pat galite nustatyti arba sukonfigūruoti šią parinktį **Plan** lygyje arba produkto parinktyse, esančiose **Ultimate Multisite > Products**.

![Pasirinktinių domenų skyrius produkto redagavimo puslapyje](/img/config/product-custom-domains.png)

Kai bet kuri iš šių parinkčių įjungta ir subsvetainės naudotojui leidžiama susieti pasirinktinius domenų pavadinimus, subsvetainės naudotojas **Account** puslapyje turėtų matyti metadėžutę pavadinimu **Domains**.

<!-- Ekrano kopija nepasiekiama: Domains metadėžutė subsvetainės Account puslapyje su Add Domain mygtuku -->

Naudotojas gali spustelėti **Add Domain** mygtuką, ir bus atidarytas modalinis langas su keliomis instrukcijomis.

<!-- Ekrano kopija nepasiekiama: Add Domain modalinis langas, rodantis DNS A įrašo instrukcijas subsvetainių naudotojams -->

Tada naudotojas gali spustelėti **Next Step** ir tęsti pasirinktinio domeno pavadinimo pridėjimą. Jis taip pat gali pasirinkti, ar tai bus pagrindinis domenas, ar ne.

<!-- Ekrano kopija nepasiekiama: Add Domain forma su pasirinktinio domeno pavadinimo laukeliu ir pagrindinio domeno perjungikliu -->

<!-- Ekrano kopija nepasiekiama: Add Domain patvirtinimo žingsnis, kuris paleidžia DNS patikrinimą -->

Spustelėjus **Add Domain**, prasidės pasirinktinio domeno DNS informacijos tikrinimo ir gavimo procesas.

### Apie domenų sinchronizavimą

Domenų sinchronizavimas yra procesas, kurio metu Ultimate Multisite prideda pasirinktinį domeno pavadinimą prie jūsų prieglobos paskyros kaip papildomą domeną **kad veiktų domenų susiejimas**.

Domenų sinchronizavimas vyksta automatiškai, jei jūsų prieglobos paslaugų teikėjas turi integraciją su Ultimate Multisite domenų susiejimo funkcija. Šiuo metu šie prieglobos paslaugų teikėjai yra _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ ir _Cpanel._

Kai prieglobos paslaugų teikėjo integracija yra aktyvi, Ultimate Multisite taip pat gali įtraukti į eilę teikėjo pusės DNS arba subdomeno kūrimo užduotį naujai sukurtoms svetainėms. Jei jokia integracija neklauso šios užduoties, foninis darbas praleidžiamas, kad būtų išvengta nieko neatliekančių eilės įrašų. Susietų domenų DNS ir SSL patikros toliau vykdomos per įprastą domeno etapo procesą.

Šią integraciją turėsite aktyvuoti Ultimate Multisite nustatymuose, **Integration** skirtuke.

![Integracijų skirtukas Ultimate Multisite nustatymuose, rodantis prieglobos paslaugų teikėjus](/img/config/integrations-tab.png)

<!-- Ekrano kopija nepasiekiama: prieglobos paslaugų teikėjų Configuration nuorodos Integrations nustatymų skirtuke -->

_Atkreipkite dėmesį, kad jei jūsų prieglobos paslaugų teikėjas nėra vienas iš aukščiau paminėtų teikėjų, **turėsite rankiniu būdu sinchronizuoti arba pridėti domeno pavadinimą** prie savo prieglobos paskyros._
