---
title: Jūsų registracijos formos personalizavimas
sidebar_position: 17
_i18n_hash: 13f72671d55f48becd6bd89f6571f111
---
# Jūsų Registracijos Formų Pridauginimas

Savo tinklo puslapiai unikalius padaryti vis kitose WordPress platformos buvusiose SaaS sistemose, Ultimate Multisite leidžia jums pritaikyti savo registracijos ir pranešimo puslapius naudojant mūsų **Checkout Forms** funkciją.

Nors jos yra lengvas ir fleksibilas būdas eksperimentuoti su skirtingais metodais, kai bandomas pasiekti naujus klientus, jos daugiausiai naudingos yra kurti personalizuotus registracijos formus. Šis straipsnis tiksluoja jums parodyti, kaip tai padaryti.

## Pranešimo ir registracijos puslapiai:

Ultimate Multisite įdalius instalavimu automatiškai sukuria jūsų pagrindiniame puslapyje pritaikomus loginimo ir registracijos puslapius. Jūs galite pakeisti šiuos pagrindinius puslapis bet kuriuo metu eikiant į savo puslapį **Ultimate Multisite > Settings > Login & Registration**.

![Login and Registration settings page](/img/config/settings-general.png)

Štai visas vaizdas loginimo ir registracijos nustatymų puslapyje:

![Login and Registration settings full page](/img/config/settings-login-registration-full.png)

Patikrinkime kiekvieną jūsų pasirinkimą, kurį galite pritaikyti **Login & Registration** puslapyje:

  * **Enable registration (Įjungti registraciją):** Šis nustatymas įjunkia arba išjungia registraciją jūsų tinklyje. Jei jis yra išjungtas, jūsų klientai nebus galini registruotis ir prekių pasirašyti.

  * **Enable email verification (Įjungti el. pašto patvirtinimą):** Jei šis nustatymas įjunkas, klientai, kurie pasirašys už nemokamą planą arba mokamą planą su mokymu laikotarpiu, gaus patvirtinimo el. laišką ir turės paspausti patvirtinimo nuorodą savo svetainų kūrimui.

* **Pagusa registracijos puslapis:** Tai yra pagrindinis puslapis registracijai. Šį puslapį reikia publikuoti ant jūsų svetainės ir turėti registracijos formą (kurios taip pat žinoma kaip kasos forma) – kurje jūsų klientai prekių užsiprenima. Jūs galite sukurti kitus registracijos puslapis ir kasos formas, kiek norite, bet suspektykite, kad įregistruota kasos forma turi būti įdėta kaip shortcode ant registracijos puslapio, kitaip ji nepasirodys.

* **Naudoti kiti loginimo puslapio:** Šis pasirinkimas leidžia naudoti pritaikytą loginimo puslapį, kuris bus kitas nei standartinis wp-login.php puslapis. Jei šią funkciją įjunkite, galite nustatyti, kuriam puslapui naudoti loginą (dešinėje pusėje yra „Default login page“ opsijos).

* **Slaptykite originalų loginimo URL (wp-login.php):** Jei norite sukleisti originalų loginimo URL, galite įjungti šią funkciją. Tai naudinga, kad būtų užtrinta brute-force atakų. Jei ši opsinė bus įjungta, Ultimate Multisite rodo 404 erorą, kai vartotojas bando pasiekti originalų wp-login.php linką.

* **Prisijungti svetainę laiku (synchronous site publication):** Po to, kai klientas užsiprenima prekių tinkluose, nauji laukiamasis puslapis turi būti konvertuotas į realų tinklo puslapį. Publikavimo procesas vyksta asinkroniai per Job Queue. Įjunkite šią opsinę, kad praleistumėte publikavimą tą pačiu pasirinkimu kaip ir registraciją.

Dabar pamatome kitus variantus, kurie vis dar yra susiję su loginimo ir registracijos procesais. Jūs rasite juos po **Kiti opsijos** (Other options) ant toje samej loginimo ir registracijos puslapio:

* **Pagrindinė vaidmuo:** Tai yra vaidmuo, kurį jūsų klientai turės savo svetainėje po registracijos procesui.

* **Įjunkite Jumper:** Leina naudoti Jumper skiltyvę admin sąraube. Jumper leidžia administratoriams greitai perėjti į Ultimate Multisite ekranus, tinklo objektus ir kitus palaikomi vietos be visų meniu peržiūros. Išjunkite jį, jei norite sužudinti šią greitą navigacijos įrangą admin sąraube.

* **Pridėkite vartotojus į pagrindinį svetainę:** Įjungdami šią funkciją, jūs pridėsite vartotoją ir prie tinklo pagrindinės svetainės po registracijos procesui. Jei įjunkite šią funkciją, tiesiai poje pasirodys pasirinkimas nustatyti **pagrindinę vaidmenį** (default role) šiem vartotojams jūsų svetainėje.

* **Įjunkite daug paskyrų:** Leiskite vartotojams turėti paskyras skirtingose tinklo svetainėse su vienodaliu el. pašto adresais. Jei šis pasirinkimas yra išjungtas, jūsų klientai nebus galini registruotis kitose tinklo svetainėse su vienodaliu el. pašto adresu.

Ir tai yra visi nustatymai susiję su pradinimu ir registracija, kuriuos galite pakeisti! Neleidžkit pasakyti – išsaugokite savo nustatymus po to, kai baigsite juos redaguoti.

## Daug slapta registracijos formų naudojimas:

Ultimate Multisite 2.0 siūlo skaitmenio kaso formų redaktorią, kuris leidžia sukurti tiek formų, kiek norite, su skirtingais laukais ir pasiūlymais produktų ir kitomis dalyklios.

Visi pradiniai ir registracijos puslapiai yra įtraukti trumpiais kodais (shortcodes): **[wu_login_form]** pradinio puslapioje ir **[wu_checkout]** registracijos puslapioje. Jūs galite further sužudinti registracijos puslapį, kurdami arba sukurdami kaso formus.

Sukurti šią funkciją, eikite į meniu **Checkout Forms**, esantį kairėje skelbimose (side-bar).

![Checkout Forms menu in the sidebar](/img/config/checkout-forms-list.png)

Šiame puslapyje pakaite visus jūsų turimus kaso formas.

Jei norite sukurti naują, atsirinkite **Add Checkout Form** (Pridėti kaso formą) viršuje puslapio.

Galite vieną iš šių trijų jūsų pradžios variantų: vienas žingsnis, daug žingmenų ar laukelis. Tada paspauskite, kad **Pasiektum Editorį**.

![Pridėti kasą formą su vienu žingsniu, daug žingmenų arba laukeliu](/img/config/checkout-forms-list.png)

Alternatyviai galite redaguoti ar duplikuoti jau turimas formas, paspaudus ant jos pavadinimo nurodytus variantus. Tai taip pat leidžia jums kopijuoti formos shortcode arba ištrinti formą.

![Atsiliepimai dėl veiksmų su kasą forma redaguojant, duplikuojant ir trinkant](/img/config/checkout-form-hover-actions.png)

Jei pasirinksite vieną žingsnį ar daug žingmenų, kasą formą jau bus pre-pildyta pagrindiniais žingmenimis, kad ji galėtų veikti. Tada, jei norite, galite pridėti papildomus žingmenis.

### Kasą formos redaguoti:

Kaip minėjome anksčiau, galite sukurti kasas formos skirtingoms tikslams. Šiuose pavyzdžiu busime dirbti su registracijos forma.

Po nurodymo į kasą formas editorį pateikite jūsų formai pavadinimą (jis bus naudojamas tik vidiniam referavimui) ir slug'ą (naudojamas shortcode'ų kūrimui, pavyzdžiui).

![Kasos formas redaguojimo langas su laukais pavadinimas ir slug](/img/config/checkout-form-editor.png)

Formos sudaro žingmenys ir laukai. Galite pridėti naują žingmenį paspaudus **Pridėti naują kasą žingmenį**.

![Klausa Pridėti naują kasą žingmenį mygtukas](/img/config/checkout-form-add-step.png)

Viename lango pirmaje vieto pasirinkite jūsų formos žingmenį turinį. Pateikite jam ID, pavadinimą ir aprašymą. Šie dalykai daugiausiai naudojami vidiniam tikslui.

![Kasos žingmenų turinio vieta su ID, pavadinimu ir aprašymu](/img/config/checkout-form-step-content.png)

Tada nustatykite žingmenio matomumą. Galite pasirinkti tarp **Visada rodyti**, **Rodyti tik prisijungę vartotojams** arba **Rodyti tik nematems**.

![Opcionai matyti žingsnio stili](/img/config/checkout-form-step-style.png)

Laau, nustatykite žingsnio stilą. Tai yra valstybiniai laukai (jūs galite juos neįdėti).

![Žingsnio stiliai konfigūracija](/img/config/checkout-form-step-style.png)

Dabar atvykime prie pridėjimo laukų mūsų pirmam žingui. Atidarykite, kad **Pridėti naują lauką** ir pasirinkite, kokio tipą sekcijos norite naudoti.

![Pridėti naują lauką mygtukas](/img/config/checkout-form-step-with-fields.png)![Laukų tipų pasirinkimo 드롭다운](/img/config/checkout-form-field-type-dropdown.png)

Kiekvienam laikui yra skirtingi parametrai, kuriuos reikia užpildyti. Šiuo metu mes pasirinksimos **Username** lauką.

![Username lauko konfigūracija](/img/config/checkout-form-username-content.png)![Username lauko parametrai](/img/config/checkout-form-username-visibility.png)![Username lauko papildomi nustatymai](/img/config/checkout-form-username-style.png)

Jūs galite pridėti tiek žingsnių, tiek laukų, kiek jums reikia. Jei norite parodyti savo produktus, kad klientai galėtų pasirinkti vieną, naudokite lauką **Pricing Table**. Jei norite leisti jūsų klientams pasirinkti šaltinį (template), pridėkite lauką **Template Selection**. Ir taip weiter.

_**Pastaba:** Jei pateiksite produktą po to, kai kursite savo checkout formą, jums reikės pridėti tą produktą į Pricing Table sekciją. Jei jį nepridėsite, produktas nepasirodys jūsų klientams registracijos pusėje._

_**Pastaba 2:** username, email, password, site title, site URL, order summary, payment ir submit mygtukai yra privalomi laukai, kad sukurtingumui checkout formos reikėtų._

Kol dar workate prie savo checkout formos, galite visada naudoti **Preview** mygtuką, kad pamatytumėte, kaip jūsų klientai matys formą. Galite taip pat alternatyvų pasirinkti – peržiūrėti kaip esamasis vartotojas arba kaip nuolatinis asmuo (visitor).

Ostatei,je **Advanced Options** pusite nustatyti pranešimą „Ačiū“ (Thank You) puslapyje, pridėti skriptus, kurie matros konversijas, pridėti kustominį CSS į savo užsakymo formą arba reikalauti ją tik tietymoms šalims.

![Advanced Options with Thank You page, conversion tracking, and custom CSS](/img/config/checkout-form-advanced.png)

Jau galite nustatyti ar išjungti savo užsakymo formą per šį laisvą pasirinkimą dešinėje kolonoje arba nepanaudoti ją permanentiškai.

![Active toggle and delete option for checkout form](/img/config/checkout-form-active.png)

Neužakite jūsų užsakymo formos!

![Save Checkout Form button](/img/config/checkout-form-save.png)

Jums, kad gautumėte jūsų formos shortcode, paspauskite **Generate Shortcode** ir nukopijuokite rezultatą, kuris rodomas modala langelyje.

![Generate Shortcode modal with shortcode to copy](/img/config/checkout-form-editor.png)

_**Pastaba:** Jums reikės pridėti šį shortcode į savo registracijos puslapį, kad jis būtų pridėtas prie jūsų užsakymo formos._

## Prekės ir šablonų pasirinkimas per URL parametrus:

Jei norite sukurti individualizuotas kainos lentelges savo produktams ir iš anksto pasirinkti už sakymo formą, kurį vartotojas pasirinks iš jūsų kainos lentelės ar šablonų puslapio, galite naudoti URL parametrus.

### **Planams:**

Eikite į **Ultimate Multisite > Products > Select a plan**. Turėtumėte pamatyti mygtuką **Click to copy Shareable Link** virš puslapio. Tai yra linkas, kurį galite naudoti, kad iš anksto pasirinkotumėte šį konkretų planą savo užsakymo formoje.

![Product page with shareable link button](/img/config/products-list.png)

Pagalba, šis pasidalinamas linki veikia tik **Planams**. Pasidalinami linkai negalite naudoti paketams ar paslaugoms.

### Templatui:

Jei norite iš anksto pasirinkti svetainės šaltinius (templates) savo užsakymo formoje, galite naudoti parametrai: **?template_id=X** jūsų registracijos puslapio URL adresui. „X“ reikšmę reikia pakeisti **svetainės şaltinio ID numeriu**. Šį numerį galite gauti eiti į **Ultimate Multisite > Sites**.

Spauskite **Manage** (Tvarkyti) tiesiog po tą svetainės šaltiniu, kurį norite naudoti. Jūs pamatysITE SITE ID numerį. Nors naudokite šį numerį tik šiam specifiniam svetainės şaltiniui, kad jis būtų iš anksto pasirinktas jūsų užsakymo formoje. Mums šiuo atveju URL parametras bus **?template_id=2**.

![Svetainų sąrašas rodo svetainės šaltinio ID](/img/config/site-templates-list.png)

Patvarkykime, kad mūsų tinklo svetainė būtų [**www.mynetwork.com**](http://www.mynetwork.com), o mūsų registracijos puslapis su užsakymo formos yra /register puslapyje. Visas URL adresas su iš anksto pasirinktu šiuo svetainės şaltiniu atrodo taip: [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Jei norite, galite iš anksto pasirinkti ir produktus, ir šaltinius į užsakymo formą. Visi, ką reikalinga, tai yra kopijuoti planą pasidalinamos linką ir įdėti şaltinio parametrai laisvai po jo. Tai atrodo taip: [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
