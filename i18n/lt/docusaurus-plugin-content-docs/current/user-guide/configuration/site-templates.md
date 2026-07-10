---
title: Sito šablonavimai
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# Szabdomod modeliai (v2) {#site-templates-v2}

_**SUTRA: Šis straipsnis susijęs su Ultimate Multisite versija 2.x. Jei naudojate versiją 1.x,**_ **prieš skone šį straipsnis** _**.**_

Mūsų tikslas, kurdami premium tinklą su Ultimate Multisite, yra automatiškai atlikti kuo daugiau procesų, suteikiant klientams judesmumo ir skirtingų pasirinkimų, iš kurių jie gali pasirinkti savo svetainų kūrimui. Vienas lengvas būdas pasiekti šį balansą – naudoti Ultimate Multisite Site Templates funkciją.

## Kas tai yra Site Template? {#what-is-a-site-template}

Kaip pavadinimas rodo, Site Template yra bazinis (boilerplate) svetainis, kurį galima naudoti kaip pagrindą naujų vietų kūrimui jūsų tinkluose.

Tai reiškia, kad galite sukurti pagrindinį svetainį, aktyvuoti skirtingus pluginus, nustatyti aktivą temą ir pritaikyti jį bet kokiu būdu. Tada, kai jūsų klientas kuria naują paskyrą, jis gaus ne standartinę WordPress svetainę be reikšmingų treści, o gaus kopiją jūsų pagrindiniame svetainėje su visais įdiegta ir pritaikytomis trečiais.

Tai atrodo puikiai, bet kaip sukurti naują svetainę modelį? Tai yra lengvai.

## Naujos Site Template kūrimas ir redagavimas {#creating-and-editing-a-new-site-template}

Site Templates yra normalūs svetainiai jūsų tinkluose. Naujo modelio kūrimui galite tiesiog eiti į **Network Admin > Ultimate Multisite > Sites > Add Site.**

**![Mygtukas "Pridėti svetainę" puslapis kur site-templates-list.png](/img/config/site-templates-list.png)**

Tai atidaro modala langą, kurio nurodytų **Svetainės pavadinimas, Svetainės domenų/kelpos (Site Domain/path) ir Svetainės tipas.** Kaiame **Svetainės tipų** 드롭-down sąraše turėkite užtikrinti, kad pasirinkote **Site Template**.

_![Modalas naujos svetainės modelio su svetainės tipų sąrašu](/img/config/site-templates-list.png)_

Galite nurodyti klientams skirtą aprašymą, kuris paaiškinas, ką įskiria šis modelis:

![Site template description field on the site template edit screen](/img/config/site-template-edit-description.png)

Forminės pakuotės apačioje pamatysite **Copy Site** (Kopijuoti svetainę) mygtuką. Šis nustatymas leidžia jums sukurti naują svetainės šablonią, bazduojant į esamą svetainės šabloną kaip pradžią, o tai padės išsaugoti laiką, nekurti jį nuo nulio.

![Add site template modal with copy site toggle](/img/config/site-templates-list.png)

### Svetainės šabloono treści keitimas {#customizing-the-contents-of-a-site-template}

Svetainės šabloną keisti labai paprastai: eikite į jo dashboard panelį ir atlikite reikiamus pakeitimus. Jūs galite kurti naujus straipsnius, puslapis, aktyvuoti pluginus ir pakeisti aktyvivą temą. Galite net ieinti Customizeriu ir pakeisti visoki kitus pritaikymo nustatymus.

![Site template edit interface](/img/config/site-template-edit.png)

Visi šie duomenys bus kopijuoti, kai klientas sukuria naują svetainę, bazduojant į tą Svetainės šabloną.

### Piniginė opsijos (Advanced Options) {#advanced-options}

Jei turite kokį gamybines kodo patirtį, galite naudoti mūsų Search and Replace API, kad automatiškai pakeistumėte informaciją naujo svetainėje po jos sukūrimo. Tai naudinga tokioms dalykais, kaip įvertinti įmonės vardus puslapyje "Apie mus", keisti kontaktų el. paštą puslapyje „Kontaktai“ ir kitas.

### Svetainės šablonų naudojimas {#using-site-templates}

Gerai, jūs sukūrėte daug skirtingų Svetainės šablonų su skirtingais dizainais, temomis ir nustatymais. Kai kur jie bus naudingi jūsų tinklu?

Pagrindinis puslapis yra tas, kad dabar turite dvi būdus, kuriuos galite naudoti (ne vienu metu):

  * Pridėti vieną Svetainės šabloną prie kiekvieno Jūsų Planų.

**ARBA**

  * Leisti savo klientams pasiekti svetainę šablonus pats during registracijos.

#### Režimas 1: Pateikti Svetainės šabloną {#mode-1-assign-site-template}

Šiame režime jūsų klientai nebus galini rasti šabloną, kai sukuriant paskyrą, o tai būtų jūs nurodytumėte, kurį šabloną turėtų naudoti kiekvienam Jūsų planui.

Tai padaryti reikės eiti į **Ultimate Multisite > Products > Edit**.

![Edit product to assign site template](/img/config/product-site-templates.png)

Štai pateikiami jums **Product Options** (Produkto parinkties) skiltyje, ieškokite **Site template** (Sito šablonas) posėdį ir pasirinkite **Assign Site Template** (Nuošakoti sito šabloną) opsiją iš 드롭-down laukelio. Tai atidaro sąrašą skirtų siųstinių šablonų ir leks jums pasirinkti tik vieną šabloną, kurį skirsimai produktai.

![Product site template tab with assign site template option](/img/config/product-site-templates.png)

#### Režimas 2: Pasirinkite skirtus siuntimo šablonus {#mode-2-choose-available-site-template}

Šiame režime jūs pateiksite jūsų klientams pasirinkimą registracijos metu. Jie galės pasirinkti iš skirtingų siuntimo šablonų, kuriuos nurodytumėte produkto nustatymuose. Jums yra pasirinkimas apriboti skirtus siuntimo šablonus, iš kurių jie gali pasirinkti. Tai leidžia jums turėti skirtingus siuntimo šablonų rinkinius kiekvienam produktui, o tai yra puikiai tinka pabrėžti skirtingas funkcijas ir įrangos didesniems kainoms turintiems produktams.

Redaguose **Produktų redaguojimo** puslapyje. **Produktų variantų** sekcijoje ieškokite **Sito modelio (Site template)** posrtribinio ir pasirinkite **Pasirinkti turimos sito modelį** opsinį iš drėtinio laukelio. Tai atidaro sąrašą turimos sito modeliai ir leiks jums pasirinkti tą sito modelį, kuris bus pasiekiamas. Jūs galite tai padaryti pasirinkdami jo veikimo būdą: **Turimas** (Available), jei norite, kad sito modelis būtų įtrauktas sąraše. _**Neteikia turimo**_ (Not Available), jei norite, kad sito modelis ne rodomas kaip opsinija. O **Pre-pasirinktas** (Pre-selected), jei norite, kad iš nurodytų sito modelių būtų pasirinktas pagrindinis.

![Pasirinkite turimos sito modeliai su veikimo būdais](/img/config/product-site-templates.png)

### Pagrindinis režimas: Sito modelio pasirinkimas atlikta Užsakymo formoje (Checkout form) {#default-mode-site-template-selection-on-the-checkout-form}

Jei norite, kad visi jūsų sito modeliai būtų turimi registracijos metu, arba galbūt nesukreipiate papildomų darbų nurodyti ar nurodyti sito modelius kiekvienam kuriamam produktui. Taip galite nustatyti sito modelio pasirinkimą savo **Užsakymo formoje (Checkout Form)**. Reikia ieškoti **Ultimate Multisite > Užsakymo formos** ir paspausti **Redaguoti** ant formos, kurią norite konfigūruoti.

Tai atidaro puslapį **Užsakymo formos redaguoti**. Ieškokite laukelį **Modelio pasirinkimas (Template Selection)** ir paspaustite **Redaguoti** ant jo.

Pasirodys modalinis langas. Laukelyje **Modeliai (Template Sites)** galite pasirinkti ir nurodyti visus sito modelius, kuriuos norite turėti registracijos metu. Jūs nurodytų šiuose sito modelius bus turimi nepaisant to, kurį produktą atsirinkęs vartotojas.

![Modelio pasirinkimo laukelis užsakymo formos redaguojimoje](/img/config/checkout-form-template-step.png)

Frontendui klientai mato modelio pasirinkimo naršalę užsakymo metu ir gali pasirinkti naujo svetainės pradžios dizainą.

![Frontend template chooser during registration](/img/config/frontend-template-chooser.png)

### Stulpų šablonų pasirinkimo opsijos {#site-template-options}

Ypatingi kitas stulpų šablonų funkcijas, kurias galite įjungti arba išjungti Ultimate Multisite nustatymuose.

![Stulpų šablonų opsijos Ultimate Multisite nustatymuose](/img/config/settings-sites-templates-section.png)

#### Leisti stulpų šablonų keitimo {#allow-template-switching}

Įjungiant šią opsiją, jūsų klientai turės galimybę pakeisti tą šabloną, kurį pasirinksite registracijos metu po paskyros ir svetainės kūrimo. Tai naudinga klientui, nes tai leidžia ji vėl pasirinkti šabloną, jei vėliau sužino, kad jūsų pradinis pasirinkimas nėra geriausias jų specifinėms poreikiams.

#### Leisti vartotojams naudoti savo svetainę kaip šabloną {#allow-users-to-use-their-site-as-templates}

Kadangi subsite vartotojai skiria laiką savo svetainės kūrimui ir dizainui, jie gali norėti ją klonuoti ir naudoti kaip vieną iš stulpų šablonų, skirtų pasiekti kitą subsite kūrimą jūsų tinkluose. Ši opsija suteiks ji tą galimybę.

#### Kopijuoti medius priklausomai nuo šablonų duplikavimo {#copy-media-on-template-duplication}

Jei pasirinksite šią opsiją, ji kopios medius, įkelti į stulpų svetainę, į naujai kuriamą svetainę. Tai gali būti perjunkas kiekviename planą.

#### **Priešimti paieškos enginečių indeksuoti stulpus šablonus** {#prevent-search-engines-from-indexing-site-templates}

Stulpai šablonai, kaip apibacowano šiame straipsnyje, yra standartiniai (boilerplate), bet vis dar yra jūsų tinklo dalis, todėl jie vis dar gali būti rasti paieškos enginečių. Ši opsija leidžia jums paslėpti stulpus šablonus, kad paieška enginečiai galėtų juos indeksuoti.

## Stulpų šablonų užpildymas automatiniais paieška-ir keitimo funkcijomis {#pre-populating-site-templates-with-auto-search-and-replace}

Ultimate Multisite'o vienas geriausi funkcijų yra jūsų registracijos formai pridėti laisva tekstą, spalvas ir pasirinkimą laukus. Kai turime tą duomenį sugrįstame, galime naudoti jį, kad išprekšte turinį į pasirinkto svetainės šablono (template) dalys. Tada, kai nauja svetainė bus publikuojama, Ultimate Multisite pakeis šiuos laukus tikro informacija, kuri buvo įvesta registracijos metu.

Pavyzdžiui, jei norite gauti jūsų vartotojo įmonės vardą registracijos metu ir automatiškai pateikti įmonės vardą naujienų puslapyje. Jūsų šablono svetainės puslapio (home page) tur reikia pridėti laukus, panašiai kaip vaizde below (laiklus turi būti apimti dviparkelėmis - {{placeholder_name}}).

![Homepage with placeholder text in curly braces](/img/config/site-templates-list.png)

Tada galite paprastai pridėti atitinkamą registracijos lauką savo kasos formai, kad sugrįstumėte šį duomenį. Tai tas pats kasos formos redaktorius, kurį naudojate šablono pasirinkimui, leidžia jūsų įdėti pritaikomus laukus puslapyto pasirinkimo priedovai:

![Template selection and registration fields in the checkout form editor](/img/config/checkout-form-template-step.png)

Jūsų klientas tada galės užpildyti šį lauką registracijos metu.

![Frontend checkout form with template chooser](/img/config/frontend-template-chooser.png)

Ultimate Multisite tada automatiškai pakeis laukus su klientu pateikta informacija.

![Placeholders replaced with customer data on the site](/img/config/site-templates-list.png)

### Problemos sprendimas „šablonas užpildytas laukais“ {#solving-the-template-full-of-placeholders-problem}

Viskas yra puikiai, bet susirinkame nepatogų problema: dabar mūsų svetainės šablonav – kuriuos gali vizinti klientai – užpildyti nepatogiais laukais, kurie ne du daug informacijos.

Šį problemą išspręsti mes siūlo nustatyti fiksuotas vertus (fake values) laukimo vietoms ir naudoti šiuose vertiniais ieškomi ir keisti jų turinį ant jūsų svetainų, kol klientai jus vizito.

Jūs galite pasiekti šio template laukimo vietų redaktorią eina į **Ultimate Multisite > Settings > Sites**, o tada, puslapio skelbimose (sidebar), paspaudus nuorodą **Edit Placeholders**.

![Site template settings under the Sites settings page](/img/config/settings-sites-templates-section.png)

Tai pateiks jus į laukimo vietų turinio redaktorią, kur galite pridėti laukimus (placeholders) ir jų atitinkamą turinį.

![Template placeholders content editor entry point](/img/config/settings-sites-templates-section.png)
