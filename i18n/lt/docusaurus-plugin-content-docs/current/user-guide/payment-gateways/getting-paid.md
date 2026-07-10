---
title: Mokėjimų gavimas
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Mokėjimų gavimas (v2) {#getting-paid-v2}

_**SVARBI PASTABA: šiame straipsnyje kalbama apie Ultimate Multisite 2.x versiją.**_

Ultimate Multisite turi integruotą narystės ir atsiskaitymo sistemą. Kad mūsų atsiskaitymo sistema veiktų, integravome dažniausiai e. prekyboje naudojamus mokėjimo šliuzus. Numatytieji mokėjimo šliuzai Ultimate Multisite yra _Stripe_ , _PayPal_ ir Manual Payment. Taip pat galite naudoti _WooCommerce_ , _GoCardless_ ir _Payfast_ mokėjimams gauti, įdiegę atitinkamus jų priedus.

## Pagrindiniai nustatymai {#basic-settings}

Bet kurį iš šių mokėjimo šliuzų galite konfigūruoti Ultimate Multisite mokėjimų nustatymuose. Juos rasite eidami į **Ultimate Multisite meniu > Settings > Payments.**

![Mokėjimų nustatymų puslapis Ultimate Multisite, kuriame rodomas Payments skydelis](/img/config/payments-settings-page.png)

Prieš nustatydami savo mokėjimo šliuzą, peržiūrėkite pagrindinius mokėjimų nustatymus, kuriuos galite konfigūruoti:

**Priverstinai automatiškai atnaujin** **ti:** Tai užtikrins, kad mokėjimas automatiškai kartosis kiekvieno atsiskaitymo ciklo pabaigoje, priklausomai nuo naudotojo pasirinkto atsiskaitymo dažnio.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 patikrina, ar aktyvus šliuzas turi pakartotinai naudojamą atnaujinimo kredencialą, prieš išsaugodama pasikartojančią narystę su įjungtu automatiniu atnaujinimu. Atnaujinimo kredencialas gali būti šliuzo prenumerata, atsiskaitymo susitarimas, išsaugotas saugyklos žetonas arba lygiavertis pakartotinai naudojamas mokėjimo metodas. Jei šliuzas praneša, kad tinkamo naudoti kredencialo nėra, Ultimate Multisite išsaugo narystę, bet išjungia automatinį atnaujinimą ir užfiksuoja trūkstamo kredencialo būseną, kad administratorius arba pagalbos procesas galėtų paprašyti kliento iš naujo autorizuoti mokėjimą prieš atnaujinimo datą.

Tai neleidžia narystei atrodyti kaip automatiškai atnaujinamai, kai šliuzas gali surinkti tik vienkartinius mokėjimus. Šliuzų priedai turėtų patvirtinti, kad pasikartojančios kasos išsaugo pakartotinai naudojamą kredencialą, ypač kai šliuzas palaiko ir vienkartinio nuskaitymo, ir saugykloje laikomų / prenumeratinių mokėjimų režimus.

**Leisti bandomuosius laikotarpius be mokėjimo** **metodo:** Įjungus šią parinktį, jūsų klientui registracijos proceso metu nereikės pridėti jokios finansinės informacijos. To reikės tik pasibaigus bandomajam laikotarpiui.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Siųsti sąskaitą faktūrą patvirtinus mokėjimą:** Tai suteikia jums galimybę pasirinkti, ar siųsti sąskaitą faktūrą po mokėjimo. Atminkite, kad naudotojai turės prieigą prie savo mokėjimų istorijos savo subsite dashboard. Ši parinktis netaikoma Manual Gateway.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Sąskaitų faktūrų numeravimo schema:** Čia galite pasirinkti mokėjimo nuorodos kodą arba nuoseklaus numerio schemą. Jei sąskaitoms faktūroms pasirenkate naudoti mokėjimo nuorodos kodą, nieko konfigūruoti nereikia. Jei pasirenkate naudoti nuoseklaus numerio schemą, turėsite sukonfigūruoti **kitą sąskaitos faktūros numerį** (šis numeris bus naudojamas kaip kitos sistemoje sugeneruotos sąskaitos faktūros numeris. Jis padidinamas vienetu kaskart, kai sukuriama nauja sąskaita faktūra. Galite jį pakeisti ir išsaugoti, kad iš naujo nustatytumėte sąskaitų faktūrų nuoseklų numerį į konkrečią reikšmę) ir **sąskaitos faktūros numerio priešdėlį.**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Kur rasti šliuzus: {#where-to-find-the-gateways}

Mokėjimo šliuzus galite nustatyti tame pačiame puslapyje ( **Ultimate Multisite > Settings > Payments**). Iš karto po **aktyviais mokėjimo šliuzais** galėsite matyti: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ ir _Manual_.

![Aktyvių mokėjimo šliuzų skiltis, kurioje išvardyti Stripe, Stripe Checkout, PayPal ir Manual](/img/config/payments-active-gateways.png)

Turime atskirą straipsnį kiekvienam mokėjimo šliuzui, kuris padės jums atlikti jo nustatymo veiksmus; juos rasite toliau pateiktose nuorodose.

Galite peržiūrėti ir redaguoti mokėjimo informaciją:

![Mokėjimo redagavimo sąsaja](/img/admin/payment-edit.png)

Štai visas mokėjimo redagavimo puslapio vaizdas:

![Visa mokėjimo redagavimo sąsaja](/img/admin/payment-edit-full.png)

Taip pat štai visas mokėjimo šliuzų nustatymų vaizdas:

![Visas mokėjimo šliuzų nustatymų puslapis](/img/config/settings-payments-gateways-full.png)

**Stripe šliuzo nustatymas**

**PayPal šliuzo nustatymas**** **

**Rankinių mokėjimų nustatymas**

Dabar, jei norite naudoti _WooCommerce_ , _GoCardless_ arba _Payfast_ kaip savo mokėjimo šliuzą, turėsite **įdiegti ir sukonfigūruoti jų priedus**.

### Kaip įdiegti WooCommerce priedą: {#how-to-install-the-woocommerce-add-on}

Suprantame, kad _Stripe_ ir _PayPal_ kai kuriose šalyse nėra prieinami, o tai riboja arba trukdo Ultimate Multisite naudotojams veiksmingai naudoti mūsų plugin. Todėl sukūrėme priedą, kad integruotume _WooCommerce,_ kuris yra labai populiarus e. prekybos plugin. Kūrėjai visame pasaulyje sukūrė priedus, kad integruotų į jį skirtingus mokėjimo šliuzus. Pasinaudojome tuo, kad išplėstume mokėjimo šliuzus, kuriuos galite naudoti su Ultimate Multisite atsiskaitymo sistema.

_**SVARBU:** Ultimate Multisite: WooCommerce Integration reikalauja, kad WooCommerce būtų aktyvuotas bent jūsų pagrindinėje svetainėje._

Pirmiausia eikite į priedų puslapį. Jį rasite eidami į **Ultimate Multisite > Settings**. Turėtumėte matyti **Add-ons** lentelę. Spustelėkite **Check our Add-ons**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Spustelėję **Check our Add-ons** , būsite nukreipti į priedų puslapį. Čia galite rasti visus Ultimate Multisite priedus. Spustelėkite **Ultimate Multisite: WooCommerce Integration** priedą.

![Priedų puslapis, kuriame išvardyti Ultimate Multisite priedai, įskaitant WooCommerce Integration](/img/addons/addons-page.png)

Atsidarys langas su priedo informacija. Tiesiog spustelėkite **Install Now**.

<!-- Ekrano kopija neprieinama: Ultimate Multisite WooCommerce Integration priedo informacijos dialogo langas su Install Now mygtuku -->

Kai diegimas bus baigtas, būsite nukreipti į plugins puslapį. Čia tiesiog spustelėkite **Network Activate**, ir WooCommerce priedas bus aktyvuotas jūsų tinkle.

<!-- Ekrano kopija neprieinama: Plugins puslapis su Network Activate nuoroda WooCommerce Integration priedui -->

Aktyvavę jį, jei savo svetainėje vis dar neturite įdiegto ir aktyvuoto WooCommerce plugin, gausite priminimą.

<!-- Ekrano kopija neprieinama: administratoriaus pranešimas, primenantis administratoriui įdiegti ir aktyvuoti WooCommerce plugin -->

Norėdami daugiau sužinoti apie WooCommerce Integration priedą, **spustelėkite čia**.

### Kaip įdiegti GoCardless priedą: {#how-to-install-the-gocardless-add-on}

_GoCardless_ priedo diegimo veiksmai iš esmės yra tokie patys kaip _WooCommerce_ priedo. Eikite į priedų puslapį ir pasirinkite **Ultimate Multisite: GoCardless Gateway** priedą.

<!-- Ekrano kopija neprieinama: priedų puslapis su paryškintu Ultimate Multisite GoCardless Gateway priedu -->

Atsidarys priedo langas. Spustelėkite **Install Now**.

<!-- Ekrano kopija neprieinama: Ultimate Multisite GoCardless Gateway priedo informacijos dialogo langas su Install Now mygtuku -->

Kai diegimas bus baigtas, būsite nukreipti į plugins puslapį. Čia tiesiog spustelėkite **Network Activate**, ir _GoCardless_ priedas bus aktyvuotas jūsų tinkle.

<!-- Ekrano kopija neprieinama: Plugins puslapis su Network Activate nuoroda GoCardless Gateway priedui -->

Norėdami sužinoti, kaip pradėti naudotis _GoCardless_ gateway, **perskaitykite šį straipsnį**.

### Kaip įdiegti Payfast priedą: {#how-to-install-the-payfast-add-on}

Eikite į priedų puslapį ir pasirinkite **Ultimate Multisite: Payfast Gateway** priedą.

<!-- Ekrano kopija neprieinama: priedų puslapis su paryškintu Ultimate Multisite Payfast Gateway priedu -->

Atsidarys priedo langas. Spustelėkite **Install Now.**

<!-- Ekrano kopija neprieinama: Ultimate Multisite Payfast Gateway priedo informacijos dialogo langas su Install Now mygtuku -->

Kai diegimas bus baigtas, būsite nukreipti į plugins puslapį. Čia tiesiog spustelėkite **Network Activate**, ir _Payfast_ priedas bus aktyvuotas jūsų tinkle.

<!-- Ekrano kopija neprieinama: Plugins puslapis su Network Activate nuoroda Payfast Gateway priedui -->
