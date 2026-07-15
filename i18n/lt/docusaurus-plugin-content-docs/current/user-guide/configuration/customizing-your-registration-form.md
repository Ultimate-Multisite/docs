---
title: Jūsų registracijos formos tinkinimas
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Registracijos formos tinkinimas

Kad jūsų tinklas atrodytų išskirtinai tarp visų kitų SaaS, sukurtų WordPress platformoje, Ultimate Multisite leidžia tinkinti registracijos ir prisijungimo puslapius naudojant mūsų **Atsiskaitymo formų** funkciją.

Nors jos yra paprastas ir lankstus būdas eksperimentuoti su skirtingais metodais siekiant pritraukti naujų klientų, dažniausiai jos naudojamos suasmenintoms registracijos formoms kurti. Šio straipsnio tikslas – parodyti, kaip galite tai padaryti.

## Prisijungimo ir registracijos puslapiai: {#login-and-registration-pages}

Įdiegus Ultimate Multisite, jis automatiškai sukuria pasirinktinius prisijungimo ir registracijos puslapius jūsų pagrindinėje svetainėje. Šiuos numatytuosius puslapius galite bet kada pakeisti nuėję į **Ultimate Multisite > Nustatymai > Prisijungimas ir registracija** puslapį.

![Prisijungimo ir registracijos nustatymų puslapis](/img/config/settings-general.png)

Štai visas prisijungimo ir registracijos nustatymų puslapio vaizdas:

![Visas prisijungimo ir registracijos nustatymų puslapis](/img/config/settings-login-registration-full.png)

Pažvelkime į kiekvieną parinktį, kurią galite tinkinti **Prisijungimo ir registracijos** puslapyje:

  * **Įjungti registraciją:** Ši parinktis įjungs arba išjungs registraciją jūsų tinkle. Jei ji išjungta, jūsų klientai negalės registruotis ir prenumeruoti jūsų produktų.

  * **Įjungti el. pašto patvirtinimą:** Jei ši parinktis įjungta, klientai, užsisakę nemokamą planą arba mokamą planą su bandomuoju laikotarpiu, gaus patvirtinimo el. laišką ir turės spustelėti patvirtinimo nuorodą, kad jų svetainės būtų sukurtos.

  * **Numatytasis registracijos puslapis:** Tai numatytasis registracijos puslapis. Šis puslapis turi būti paskelbtas jūsų svetainėje ir turėti registracijos formą (taip pat žinomą kaip atsiskaitymo forma) – vietą, kurioje jūsų klientai prenumeruos jūsų produktus. Galite sukurti tiek registracijos puslapių ir atsiskaitymo formų, kiek norite, tik nepamirškite įdėti atsiskaitymo formos trumpojo kodo registracijos puslapyje, kitaip ji nebus rodoma.

  * **Naudoti pasirinktinį prisijungimo puslapį:** Ši parinktis leidžia naudoti tinkintą prisijungimo puslapį vietoje numatytojo wp-login.php puslapio. Jei ši parinktis įjungta, galite pasirinkti, kuris puslapis bus naudojamas prisijungimui, parinktyje **Numatytasis prisijungimo puslapis** (iškart žemiau).

  * **Paslėpti originalų prisijungimo URL (wp-login.php)** : Jei norite paslėpti originalų prisijungimo URL, galite įjungti šią parinktį. Tai naudinga siekiant išvengti bruteforce atakų. Jei ši parinktis įjungta, Ultimate Multisite rodys 404 klaidą, kai naudotojas bandys pasiekti originalią wp-login.php nuorodą

  * **Priverstinis sinchroninis svetainės publikavimas:** Kai klientas užsisako produktą tinkle, nauja laukianti svetainė turi būti paversta tikra tinklo svetaine. Publikavimo procesas vyksta per Job Queue, asinchroniškai. Įjunkite šią parinktį, kad publikavimas įvyktų toje pačioje užklausoje kaip ir registracija.

Dabar pažiūrėkime kitas parinktis, kurios vis dar susijusios su prisijungimo ir registracijos procesu. Jos yra tame pačiame Prisijungimo ir registracijos puslapyje, iškart po **Kitos parinktys**:

  * **Numatytasis vaidmuo:** Tai vaidmuo, kurį jūsų klientai turės savo svetainėje po registracijos proceso.

  * **Įjungti Jumper:** Įjungia Jumper spartųjį klavišą administravimo srityje. Jumper leidžia administratoriams greitai pereiti į Ultimate Multisite ekranus, tinklo objektus ir kitas palaikomas paskirties vietas nenaršant per kiekvieną meniu. Išjunkite, jei norite paslėpti šį greitos navigacijos įrankį administravimo sąsajoje.

  * **Taip pat pridėti naudotojus prie pagrindinės svetainės:** Įjungus šią parinktį, po registracijos proceso naudotojas taip pat bus pridėtas prie pagrindinės jūsų tinklo svetainės. Jei įjungsite šią parinktį, iškart žemiau taip pat pasirodys parinktis nustatyti šių naudotojų **numatytąjį vaidmenį** jūsų svetainėje.

  * **Įjungti kelias paskyras:** Leiskite naudotojams turėti paskyras skirtingose jūsų tinklo svetainėse su tuo pačiu el. pašto adresu. Jei ši parinktis išjungta, jūsų klientai negalės sukurti paskyros kitose jūsų tinkle veikiančiose svetainėse naudodami tą patį el. pašto adresą.

Ir tai visos su prisijungimu ir registracija susijusios parinktys, kurias galite tinkinti! Nepamirškite išsaugoti nustatymų, kai baigsite juos redaguoti.

## Kelių registracijos formų naudojimas: {#using-multiple-registration-forms}

Ultimate Multisite 2.0 siūlo atsiskaitymo formų redaktorių, kuris leidžia sukurti tiek formų, kiek norite, su skirtingais laukais, siūlomais produktais ir pan.

Tiek prisijungimo, tiek registracijos puslapiai įterpiami naudojant trumpuosius kodus: **[wu_login_form]** prisijungimo puslapyje ir**[wu_checkout]** registracijos puslapiui. Registracijos puslapį galite papildomai tinkinti kurdami atsiskaitymo formas.

Norėdami pasiekti šią funkciją, eikite į **Atsiskaitymo formos** meniu kairėje šoninėje juostoje.

![Atsiskaitymo formų meniu šoninėje juostoje](/img/config/checkout-forms-list.png)

Šiame puslapyje galite matyti visas turimas atsiskaitymo formas.

Jei norite sukurti naują, tiesiog spustelėkite **Pridėti atsiskaitymo formą** puslapio viršuje.

Galite pasirinkti vieną iš šių trijų parinkčių kaip pradžios tašką: vieno žingsnio, kelių žingsnių arba tuščią. Tada spustelėkite **Eiti į redaktorių**.

![Pridėti atsiskaitymo formą su vieno žingsnio, kelių žingsnių arba tuščiomis parinktimis](/img/config/checkout-forms-list.png)

Arba galite redaguoti ar dubliuoti jau turimas formas spustelėdami parinktis po jų pavadinimu. Ten taip pat rasite parinktis nukopijuoti formos trumpąjį kodą arba ištrinti formą.

![Atsiskaitymo formos užvedimo veiksmai su redagavimu, dubliavimu ir ištrynimu](/img/config/checkout-form-hover-actions.png)

Jei pasirinksite vieno žingsnio arba kelių žingsnių parinktį, atsiskaitymo forma jau bus iš anksto užpildyta pagrindiniais žingsniais, reikalingais jai veikti. Tada, jei norėsite, galėsite pridėti papildomų žingsnių.

### Atsiskaitymo formos redagavimas: {#editing-a-checkout-form}

Kaip minėjome anksčiau, galite kurti atsiskaitymo formas skirtingiems tikslams. Šiame pavyzdyje dirbsime su registracijos forma.

Nuėję į atsiskaitymo formos redaktorių, suteikite savo formai pavadinimą (jis bus naudojamas tik vidinėms nuorodoms) ir slug (naudojamą, pavyzdžiui, trumpiesiems kodams kurti).

![Atsiskaitymo formos redaktorius su pavadinimo ir slug laukais](/img/config/checkout-form-name-slug.png)

Formos sudarytos iš žingsnių ir laukų. Naują žingsnį galite pridėti spustelėję **Pridėti naują atsiskaitymo žingsnį**.

![Mygtukas Pridėti naują atsiskaitymo žingsnį](/img/config/checkout-form-add-step.png)

Pirmajame modalinio lango skirtuke užpildykite savo formos žingsnio turinį. Suteikite jam ID, pavadinimą ir aprašymą. Šie elementai dažniausiai naudojami viduje.

![Atsiskaitymo žingsnio turinio skirtukas su ID, pavadinimu ir aprašymu](/img/config/checkout-form-step-content.png)

Toliau nustatykite žingsnio matomumą. Galite rinktis iš **Visada rodyti**, **Rodyti tik prisijungusiems naudotojams** arba **Rodyti tik svečiams**.

![Atsiskaitymo žingsnio matomumo parinktys](/img/config/checkout-form-step-visibility.png)

Galiausiai sukonfigūruokite žingsnio stilių. Tai neprivalomi laukai.

![Atsiskaitymo žingsnio stiliaus konfigūracija](/img/config/checkout-form-step-style.png)

Dabar laikas pridėti laukų prie mūsų pirmojo žingsnio. Tiesiog spustelėkite **Pridėti naują lauką** ir pasirinkite norimo skyriaus tipą.

![Mygtukas Pridėti naują lauką](/img/config/checkout-form-add-field-button.png)![Lauko tipo pasirinkimo išskleidžiamasis sąrašas](/img/config/checkout-form-field-type-dropdown.png)

Kiekvienas laukas turi skirtingus parametrus, kuriuos reikia užpildyti. Šiam pirmajam įrašui pasirinksime lauką **Naudotojo vardas**.

![Naudotojo vardo lauko konfigūracija](/img/config/checkout-form-username-content.png)![Naudotojo vardo lauko parametrai](/img/config/checkout-form-username-visibility.png)![Papildomi naudotojo vardo lauko nustatymai](/img/config/checkout-form-username-style.png)

Galite pridėti tiek žingsnių ir laukų, kiek reikia. Norėdami rodyti savo produktus, kad klientai galėtų pasirinkti vieną, naudokite lauką Kainų lentelė. Jei norite leisti klientams pasirinkti šabloną, pridėkite lauką Šablono pasirinkimas. Ir taip toliau.

![Atsiskaitymo formos redaktorius su šablono pasirinkimo lauku](/img/config/checkout-form-with-template-field.png)

_**Pastaba:** Jei sukuriate produktą po to, kai sukūrėte atsiskaitymo formą, turėsite pridėti produktą Kainų lentelės skyriuje. Jei jo nepridėsite, produktas nebus rodomas jūsų klientams registracijos puslapyje._

_**Pastaba 2:** naudotojo vardas, el. paštas, slaptažodis, svetainės pavadinimas, svetainės URL, užsakymo suvestinė, mokėjimas ir pateikimo mygtukas yra privalomi laukai norint sukurti atsiskaitymo formą._

Dirbdami su savo atsiskaitymo forma, visada galite naudoti mygtuką Peržiūra, kad pamatytumėte, kaip jūsų klientai matys formą. Taip pat galite perjungti peržiūrą kaip esamas naudotojas arba lankytojas.

![Peržiūros mygtukas atsiskaitymo formos redaktoriuje](/img/config/checkout-form-preview-button.png)![Atsiskaitymo formos peržiūra kaip lankytojas arba esamas naudotojas](/img/config/checkout-form-preview-modal.png)

Galiausiai skiltyje **Išplėstinės parinktys** galite sukonfigūruoti pranešimą **Ačiū** puslapiui, pridėti fragmentų konversijoms stebėti, pridėti pasirinktinį CSS prie savo atsiskaitymo formos arba apriboti ją tam tikroms šalims.

![Išplėstinės parinktys su Ačiū puslapiu, konversijų stebėjimu ir pasirinktiniu CSS](/img/config/checkout-form-advanced.png)

Taip pat galite rankiniu būdu įjungti arba išjungti savo atsiskaitymo formą perjungdami šią parinktį dešiniajame stulpelyje arba visam laikui ištrinti formą.

![Aktyvumo perjungiklis ir atsiskaitymo formos ištrynimo parinktis](/img/config/checkout-form-active.png)

Nepamirškite išsaugoti savo atsiskaitymo formos!

![Mygtukas Išsaugoti atsiskaitymo formą](/img/config/checkout-form-save.png)

Norėdami gauti savo formos trumpąjį kodą, spustelėkite **Generuoti trumpąjį kodą** ir nukopijuokite modaliniame lange parodytą rezultatą.

![Modalinis langas Generuoti trumpąjį kodą su kopijuotinu trumpuoju kodu](/img/config/checkout-form-editor.png)

_**Pastaba:** Turėsite pridėti šį trumpąjį kodą į savo registracijos puslapį, kad ši atsiskaitymo forma būtų į jį pridėta._

## Produktų ir šablonų išankstinis pasirinkimas naudojant URL parametrus: {#pre-selecting-products-and-templates-via-url-parameters}

Jei norite sukurti pritaikytas kainų lenteles savo produktams ir atsiskaitymo formoje iš anksto pasirinkti produktą arba šabloną, kurį jūsų klientas pasirenka iš jūsų kainų lentelės arba šablonų puslapio, tam galite naudoti URL parametrus.

### **Planams:** {#for-plans}

Eikite į **Ultimate Multisite > Produktai > Pasirinkite planą**. Puslapio viršuje turėtumėte matyti mygtuką **Spustelėkite, kad nukopijuotumėte bendrinamą nuorodą**. Tai nuoroda, kurią galite naudoti norėdami iš anksto pasirinkti šį konkretų planą savo atsiskaitymo formoje.

![Produkto puslapis su bendrinamos nuorodos mygtuku](/img/config/products-list.png)

Atkreipkite dėmesį, kad ši bendrinama nuoroda galioja tik **Planams**. Negalite naudoti bendrinamų nuorodų paketams ar paslaugoms.

### Šablonams: {#for-templates}

Jei norite iš anksto pasirinkti svetainės šablonus savo atsiskaitymo formoje, savo registracijos puslapio URL galite naudoti parametrą: **?template_id=X**. „X“ reikia pakeisti **svetainės šablono ID numeriu**. Norėdami gauti šį numerį, eikite į **Ultimate Multisite > Svetainės**.

Spustelėkite **Tvarkyti** tiesiai po svetainės šablonu, kurį norite naudoti. Pamatysite SITE ID numerį. Tiesiog naudokite šį numerį šiam konkrečiam svetainės šablonui, kad jis būtų iš anksto pasirinktas jūsų atsiskaitymo formoje. Mūsų atveju čia URL parametras būtų **?template_id=2**.

![Svetainių sąrašas, rodantis svetainės šablono ID](/img/config/site-templates-list.png)

Tarkime, mūsų tinklo svetainė yra [**www.mynetwork.com**](http://www.mynetwork.com), o mūsų registracijos puslapis su atsiskaitymo forma yra **/register** puslapyje. Visas URL su iš anksto pasirinktu šiuo svetainės šablonu atrodys taip: [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Ir, jei norite, savo atsiskaitymo formoje galite iš anksto pasirinkti ir produktus, ir šablonus. Viskas, ką reikia padaryti, tai nukopijuoti plano bendrinamą nuorodą ir įklijuoti šablono parametrą pabaigoje. Tai atrodys taip: [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
