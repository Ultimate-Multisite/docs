---
title: Valdybos formos
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Formaijių formos

Formaijių formos yra lengvas ir įtraukliškas būdas eksperimentuoti su skirtingais paleidimu, kai bandomas pasiekti naujus klientus.

Ultimate Multisite 2.0 siūlo Checkout Forms redaktorią, kuris leidžia jums sukurti tiek formų, kiek norite, su skirtingais laukais, pasiūlytais produktų ir kitomis dalykiais.

Sukurti šią funkciją galite perilieti „Checkout Forms“ meniu, esantį kairėje pusėje.

![Checkout Forms sąrašas](/img/config/checkout-forms-list.png)

Šiame puslapyje pakaite matyti visus jūsų turimus formaijius formus.

Sąrašei yra **Status** kolona, kuri leidžia patvirtinti, ar kiekviena forma šiuo metu yra paslaugų klientams:

| Status | Pranešimas |
|---|---|
| **Active** | Formaijis gali būti naudojamas bet kurioje vietoje, kur jis skirstrinis kodas (shortcode) arba registracijos puslapis yra publikuotas. |
| **Inactive** | Forma yra išsaugota, bet neaktyvi. Klientai negali pabaigti užsakymo su juo, kol jį vėl įjunkite. |

Naudokite statusą koloną prieš redaguojant viešą registracijos procesą, ypač kai laikote naujų arba sezoninių formaijių formų šalia savo gyvybių formų.

Jei norite sukurti naują, atsirinkite „Add Checkout Form“ (Pridėti formą) puslapio viršuje.

Jūs galite pasirinkti vieną iš šių trijų variantų kaip pradžią: vienas žingsnis, daug žinginių arba lauklis. Tada paspauskite, kad ieškotumėte Redaktoriu.

Kai pasirinksite **vieną žingsnį** arba **daug žinginių** kaip pradžią, forma šablonas nurodo **Šablonų pasirinkimo** laukelį pagal numatytus. Šis laukelis leidžia jūsų klientams pasirinkti svetainės šabloną registracijos metu. Jūs galite jį likti, pašalinti arba rekonfigūruoti kaip kitą laukelį redaktoriuje.

![Checkout Form editor](/img/config/checkout-form-editor.png)

Alternatyviai, galite redaguoti arba duplikuoti jau turėtus formus, paspaudę ant nurodyto mygtukų opsijos šalia jų pavadinimo. Ten pabaudate ir opsijas kopijuoti formos shortcode ar ištrinti formą.

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

#### Checkout Form Editor peržiūra {#checkout-form-editor-overview}

Checkout form editor suteikia visapriešingą interfeisą, kurį naudojate registracijos formų kūrimui. Štai peržiūra redaktoriaus schematui:

![Checkout Form editor overview](/img/config/checkout-form-editor-overview.png)

### Checkout form redaguoti {#editing-a-checkout-form}

Galite sukurti checkout formas skirtingoms tikslams. Šiuose pavyzdžiu busime dirbti registracijos forma.

Po nurodymo į checkout form editor, pateikite formai pavadinimą (naudojamas tik vidiniame referencijame) ir slugą (naudojama shortcode'ų kūrimui, pavyzdžiui).

![Checkout Form editor](/img/config/checkout-form-editor.png)

Formos sudaro žingsnius ir laukus. Galite pridėti naują žingsnį paspaudę "Add New Checkout Step".

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

Pirmoje schemamos langelyje užpildykite formos žingsnio turinį. Pateikite jam ID, pavadinimą ir aprašymą. Šie dalykai daugiausia naudojami vidiniame naudojimo tiksliu.

![Checkout form step content tab](/img/config/checkout-form-step-content.png)

Ką sukurkite žingsnio matomumą. Galite pasirinkti tarp "All show" (Visai rodyti), "Only show for logged in users" (Rodyti tik prisijungę vartotojams) arba "Only show for guests" (Rodyti tik nematyti vartotojams).

![Checkout form step visibility tab](/img/config/checkout-form-step-visibility.png)

Pabaigiai nustatomas žingsnio stilių. Tai yra valstybiniai laukai.

![Checkout form step style tab](/img/config/checkout-form-step-style.png)

Dabar atsiranda laukus mūsų pirmtam žingniui. Atidarykite "Add New Field" ir pasirinkite norimą sekcijos tipą.

![Kioskoje užsakymo forma su laukeliais](/img/config/checkout-form-step-with-fields.png)

Kiekvienam laukeliai turi skirtingus parametrus, kuriuos reikia įveskite. Šio pirmo įėjimo metu pasirinksite „Username“ (Vartotojo vardą) laukelį.

![Laukelių tipų pasirinkimo 드롭다운](/img/config/checkout-form-field-type-dropdown.png)

![Username laukelio treści nustatymai](/img/config/checkout-form-username-content.png)

![Username laukelio matomumo nustatymai](/img/config/checkout-form-username-visibility.png)

![Username laukelio stiliaus nustatymai](/img/config/checkout-form-username-style.png)

Jūs galite pridėti tiek laukelių, kiek jums reikia. Jei norite parodyti savo produktus klientams, kad jie pasirinktų vieną, naudokite „Pricing Table“ (Kainų lentelės) laukelio. Jei norite leisti savo klientams pasirinkti šaltinį (template), pridėkite „Template Selection“ (Šaltinio pasirinkimo) laukelį ir panašiai.

![Naujo laukelio pridėjimo dialogas](/img/config/checkout-form-add-field-dialog.png)

_**Pastaba:** username, email, password, site title, site URL, order summary (daugiau užsakymo santrauka), payment (mokesčiai) ir submit button (siuntimo mygtukas) yra privalomi laukeliai, kad sukurtingumui būtų buvęs užsakymo forma._

Dar kol dirbate prie savo užsakymo formos, galite peržiūrėti „Preview“ (Priežiūra) mygtuką, kad pamatytumėte, kaip jūsų klientai matys formą. Galite taip pat pasirinkti tarp būdo, kaip ji atrodo esamajam vartotojui ar pasivaizdantemu.

![Užsakymo formos priežiūros mygtukas](/img/config/checkout-form-preview-button.png)

![Užsakymo formos priežiūros modalas](/img/config/checkout-form-preview-modal.png)

Vienai galite nustatyti „Advanced Options“ (Tiesomy nustatymai), kur galite nustatyti pranešimą „Thank You“ (Ačiū) puslapio, pridėti skriptus, skirtus matyti konvertacijas, pridėti kustomą CSS savo užsakymo formai arba sukurti ją tik tam kad ir tai, kad ji būtų apribotu įveikiamais šalis.

![Tiesomy nustatymai](/img/config/checkout-form-advanced.png)

Jūs galite taip pat rankiniu būdu įjungti ar išjungti savo užsakymo formą per šį pasirinkimą dešinėje kolono, arba permanentiškai ištrinti formą.

![Aktyvumo mygtukas](/img/config/checkout-form-active.png)

Formą ištrinti, spustelėkite trūksta mygtuką "Delete" (Ištrinti") formos veiksmų pusėje:

![Checkout form delete option](/img/config/checkout-form-delete.png)

Neužakite išsaugoti savo formas!

![Save button](/img/config/checkout-form-save.png)

Jums reikia gauti jūsų formos shortcode, spustelėkite "Generate Shortcode" (Sukurti shortcode) ir nukopijuokite rezultatą, kuris pasirodys modalu langelyje.

![Save button with shortcode](/img/config/checkout-form-save.png)

### Kaina sąrašo laukas (The Pricing Table Field) {#the-pricing-table-field}

Laukas **Pricing Table** (Kaina sąrašo) atrodys jūsų produktus checkout formoje, kad vartotojai galėtų pasirinkti planą. Redaguodami šį lauką, galite nustatyti kelis nariaus:

![Pricing Table field settings](/img/config/pricing-table-field-settings.png)

Štai kaip atrodo kainos sąrašas ant svetainės registracijos formos:

![Frontend checkout pricing table](/img/config/frontend-checkout-pricing-table.png)

  * **Products** (Produktai): Pasirinkite, kurius produktus rodyti ir koks yra jų nurodytas tvarkas.
  * **Force Different Durations** (Pratvarkyti skirtingas laikotarpis): Jei šis nariaus įjungtas, visi produktai bus rodomi nepaisant to, ar turėtų jie atitinkamą kainos variantą dabartiniam paskirstymo laikotarpiui. Jei jis išjungtas (deformuotas), bus paslėpti produktai, kuriems nėra variantų pasirinkti nurodytam laikotarpiui.
    ![Pricing table force durations option](/img/config/pricing-table-force-durations.png)
  * **Hide when Pre-Selected** (Paslėpti, kai jau pasirinktas): Kainos sąrašas paslėpiamas, jei planai jau buvo pasirinkti per URL (pvz., `/register/premium`).
  * **Pricing Table Template** (Kainos sąrašo šablonas): Pasirinkite vizualinį šabloną kainos sąrašui (Sąrašas, Legacy ir kitų).

Jei pridėsite produktą į Kainos sąrašą prieš tai, kai formoje bus reikalinga laukelis, kad būtų galima užbaigti to produkto checkout procesą, redaktorius rodo perspėjimą. Naudokite šį perspėjimą, kad pridėtumėte trūkstantą reikiamą laukelį prieš publikuoti arba išsaugoti pakeitimus gyvos registracijos formos atvejais.

### Įdiegimas laiko pasirinkimo mygtuko {#adding-a-period-selection-toggle}

Jei turite nustatytas [Kaina variantai](creating-your-first-subscription-product#price-variations) jūsų produktų (pvz., mėnesio ir kasmens kainos), galite pridėti **Laiko pasirinkimo** lauką prie savo užsakymo formos. Šis laukas rodo mygtuką, kuris leidžia klientams keisti tarp paskolos laikotarpų, o kainos lentelė atnaujinasi dinamiškai realiu laiku.

#### Žingsnis 1: Nustatykite kainos variantus jūsų produktuose {#step-1-set-up-price-variations-on-your-products}

Prieš pridėdami Laiko pasirinkimo lauką, užtikrinkite, kad jūsų produktų nustatyti kainos variantai. Eikite į **Ultimate Multisite > Produktai**, redaguokite produktą ir nukreipkite į languotę **Price Variations** (Kainos variantai) vėtybą, kad pridėtumėte alternatyvius paskolos laikotarpius (pvz., Kasmens su nuolaida).

![Price Variations tab on a product](/img/config/product-price-variations-tab.png)

#### Žingsnis 2: Pridėkite Laiko pasirinkimo lauką prie savo užsakymo formos {#step-2-add-the-period-selection-field-to-your-checkout-form}

1. Eikite į **Ultimate Multisite > Užsakymo formos** ir redaguokite savo užsakymo formą.

2. Pasirinkite žingsnį, kuriame yra jūsų **Kainos lentelės** laukas, ir paspauskite **Pridėti naują lauką**.

3. Laikų tipų pasirinkimo dialogoje paspauskite **Period Select** (Pasirinkti laikotarpį).

![Add New Field dialog showing Period Select](/img/config/checkout-form-add-field-dialog.png)

4. Nustatykite laiko opsijas. Kiekvienai opsijai reikalinga:
   * **Duration**: Skaičius (pvz., `1`)
   * **Duration unit**: Laiko tipas (Dienos, Savos, Mėnesiai ar Metrai)
   * **Label**: Tekstas, kurį pamatys klientas (pvz., "Mėnesio", "Kasmens")

5. Paspauskite **+ Pridėti opsiją**, kad pridėtumėte daugiau laiko pasirinkimų. Šios opsijos turi atitinti kainos variantus, kuriuos nustatyote jūsų produktuose.

![Period Selection field settings](/img/config/period-selection-field-settings.png)

6. Pasirinkite **Period Selector Template** (Clean yra pagrindinis, kuris generuoja paprastą stilizuojamą pasirinkimo mygtuką, ready su pritaikoma CSS).

7. Kliknij **Save Field**.

#### Krok 3: Priešdėkite lauką virš priemonės kelionės (Pricing Table) {#step-3-position-the-field-above-the-pricing-table}

Geriausios vartotojų patirtis užtikrina, kad laukas pasirinkimo laikotarpio (Period Selection) pasirodo **prieš** priemonės kelionės (Pricing Table) laukui jūsų kasos metu. Galite siūti laukus, kad pakeistumėte jų tvarką kasos formos redaktore. Prieš to vartotojai pirmiausia pasirinksite paskirties laikotarpį ir tada pamatys kainas tam laikotarpiui.

![Checkout form editor showing field order](/img/config/checkout-form-editor-with-fields.png)

#### Kaip tai veikia ant frontendoje (Frontend) {#how-it-works-on-the-frontend}

Kai laukas bus nustatytas, vartotojai, kurie atsivasynosi į jūsų registracijos puslapį, pamatys laikotarpio sekti virš priemonės kelionės. Kai jie paspaudos kitą paskirties laikotarpį:

  * Priemonės kelionė automatiškai atnaujosi, rodykite kainas pasirinkto laikotarpio (ne reikia atsisiųsti puslapio).
  * Jei laukas **Force Different Durations** (Prisikirsti kitus laikotarpius) yra išjungtas Priemonės kelionės laukui, produktai be kainos variantų pasirinkto laikotarpio bus paslėpti.
  * Jei **Force Different Durations** yra įjungta, visi produktai bus matomi, net jei jie nėra variantai pasirinkto laikotarpio (prieš jų rodys savo pagrindinę kainą).

#### Pasirinkimas paskirties laikotarpio per URL {#pre-selecting-a-billing-period-via-url}

Galite paspausti prekę ir paskirties laikotarpį per URL. Ultimate Multisite palaiko šiuos URL schemų:

  * `/register/premium` — Pasirinkti tik „Premium“ prekę
  * `/register/premium/12` — Pasirinkti prekę ir 12 mėnesių laikotarpį
  * `/register/premium/1/year` — Pasirinkti prekę su 1 metų laikotarpiu

### Šaltinio pasirinkimo laukas (The Template Selection Field) {#the-template-selection-field}

**Šaltinio pasirinkimo** laukas leidžia vartotojams pasirinkti svetainės šaltinį kasos metu. Jis dabar yra įtrauktas kaip pagrindinis laukas tiek viena, tiek daug etapų kasos formos šaltinių šablono (single step and multi-step checkout form templates) Ultimate Multisite v2.6.1 versijose.

#### Lauko pridėjimas rankiniu būdu {#adding-the-field-manually}

Jei dirbate darbe formulio, kuris buvo sukurtas prieš versiją v2.6.1 arba pradėtas iš naujo šabloono:

1. Eikite į **Ultimate Multisite > Checkout Forms** ir redaguokite savo užsakymo formą.
2. Taip patrypsite mygtuką **Pridėti naują laukelį** taikant tą žingsnį, kur rinkodami svetainės detales.
3. Iš srities laukelių pasirinkite **Šabloono pasirinkimas**.
4. Konfigūruokite laukelį:
   - **Label** – Pavadinimas, kurį vartotojai mato virš šabloono tinklo (pvz., „Pasirinkite svetainės šabloną“).
   - **Required** – Ar vartotojai turi pasirinkti šabloną prieš tęsdami.

#### Kaip tai veikia {#how-it-works}

Kai vartotojas pasirašys šabloną during checkout, Ultimate Multisite jį naudoja naujo svetainės įdiegimo metu. Šie matomi šablonai yra iš jūsų **Svetainės šablonų** sąrašo (**Ultimate Multisite > Site Templates**). Apie šiuos yra tik ti šablonai, kuriems vartotojai yra pasirinkti.

### Užsakymo formos bazinės domenai {#checkout-form-base-domains}

Ultimate Multisite v2.13.0 traktuoja domenus, nustatytus užsakymo formos **Site URL** laukelu, kaip tinklo bazines domenus. Naudokite laukelio „available-domain“ nustatymus, jei norite, kad vartotojai kurtų svetainius naudojant vieną ar daugiau bendruomenės registracijos domenų, pavyzdžiui, `example.com` ir `sites.example.com`.

Bendri užsakymo formos bazinės domenai ne traktuojami kaip individualių svetainiose kustomizuoti domenų netyvos (mapped domain). Kai vartotojas kuria subdirektoriuotą svetainę vienoje iš šių bazinių, Ultimate Multisite nekuria netyvos registravimo įrašą, kuris padėtų bendruomenės būti tik tą vienu svetainei. Bendruomenė visada bus tersedia kitoms svetainėms, kurios naudoja tą pačią užsakymo formos bazinę domeną.

Laikykite kustomizuotus domenus individualių vartotojų netyvos, pavyzdžiui, `customer-example.com`. Laikykite užsakymo formos bazines domenus bendruomenės registracijos netyvams, kurias daug svetainių gali naudoti.

#### Laukelio pašalinimas {#removing-the-field}

Jei jūs ne siūlots svetainės šablonų, atsirinkite „Template Selection“ laukelį iš savo formos. Tėvčiais taikys jūsų konfigūruotą pagrindinį šabloną, kuris bus nurodytas **Ultimate Multisite > Settings > Site Templates** puslapyje.
