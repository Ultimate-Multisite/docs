---
title: Gauti mokėjimą
sidebar_position: 15
_i18n_hash: 0f45bd2eb659d27199ac9f9752e1a8ae
---
# Mokėti (v2)

_**DUGIS ĮSPĖJIMAS: Šis straipsnis taikomas Ultimate Multisite versijai 2.x.**_

Ultimate Multisite turi įtrauktą narys ir mokėjimo sistemą. Kad mūsų mokėjimo sistema tiktų veikti, mes integruome dažniausiai naudojamus e-komercijos mokėjimo persienius. Pagrindiniai mokėjimo persieniai Ultimate Multisite yra _Stripe_, _PayPal_ ir Manual Payment (Manual Mokėjimas). Galite naudoti ir _WooCommerce_, _GoCardless_ ir _Payfast_, įdaliant jų atitinkamus add-on'us, kad gautumėte mokėjimų.

## Pagrindinės nustatymai

Jokio iš šių mokėjimo persienio galite nustatyti Ultimate Multisite mokėjimo nustatymai. Galite rasti juos eiti į **Ultimate Multisite meniu > Settings (Nustatymai) > Payments (Mokėjimai).**

![Payments settings page in Ultimate Multisite showing the Payments panel](/img/config/payments-settings-page.png)

Prieš nustatymą savo mokėjimo persienį, žiūrėkite pagrindinius mokėjimo nustatymai, kuriuos galite konfigūruoti:

**Force auto-rene (Prutinti automatinę atnaujinimą):** Tai užtikrins, kad mokėjimas būtų automatiškai atnaujintas kiekvieno paskyros ciklo pabaigoje, prieldant pagal nustatyto mokesčių tikslą.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 patikrina, ar aktyviai naudojamas persienis turi naudodamą atnaujinimo kredentinį duomenų (renewal credential). Tai gali būti persienio prenumerata, mokėjimo sutartis, išsaugotas vault tokenas arba ekvivalentus naudodami mokėjimai. Jei persienis praneša, kad nėra naudingos kredentinės informacijos, Ultimate Multisite išsaugos narystį, bet išjungia automatiną atnaujinimą ir įrašys trūkstant kredentinio būseną, o todėl administratorius arba pagalbos procesas gali užklausyti klientą patvirtinti mokėjimą prieš atnaujinimo datą.

**Leidžkitės mokymui be mokėjimo būdo:** Su šiuosios opsijos įjungta, jūsų klientas nebus prireikusdami pateikti finansines informacijos registracijos metu. Tai reikalinga tik tada, kai išlaikoma mokymo laikotarpis.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Siųsti paskolos užklausą po mokėjimo patvirtinimo:** Ši opsija suteikia jums pasirinkimą, ar siųsti užklausą po mokėjimo atliekimo. Priežastojama, kad vartotojai turės prieigą savo mokymų istorijai savo subsite dashboard'ui. Ši opsija neįvyksta Manual Gateway sujungimui.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Užklausos numeravimo schematas:** Šiuose galite pasirinkti mokymo referencijos kodą arba sekulinio skaičių schematą. Jei pasirinksite naudoti mokymo referencijos kodą savo užklausoms, jums ne reikalauja nustatyti jokios dalies. Jei pasirinksite naudoti sekulinį skaitmenį, turėsite nustatyti **kitą užklausos numerį** (Šis numeris bus naudojamas kaip užklausos numeris kitai generuojamo sistemos užklausos. Jis padidins vienu kiekvieną kartą, kai sukurama nauja užklausą. Jūs galite jį pakeisti ir išsaugoti, kad atšvėrėte užklausų sekulinio numerį į konkretų vertę) ir **užklausos numerio prefiksą**.

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Kurti, kurio kurti gauti:

Jūs galite nustatyti mokėjimo gateway'us viename puslapyje (**Ultimate Multisite > Settings > Payments**). Šalia **aktyvių mokėjimo gateway'ų** jūs pamatys: _Stripe_, _Stripe_ Checkout, _PayPal_ ir _Manual_.

![Active Payment Gateways section listing Stripe, Stripe Checkout, PayPal and Manual](/img/config/payments-active-gateways.png)

Mums yra skirtas straipsnis kiekvienam mokėjimo gateway'ui, kuris pabaigo jums nustatyti instrukcijas, kurias galite rasti šiuose nuorodose.

Galite peržiūrėti ir redaguoti mokėjimo duomenis:

![Payment edit interface](/img/admin/payment-edit.png)

Štai visame mokėjimo redaguojimo puslapio vaizdo:

![Payment edit full interface](/img/admin/payment-edit-full.png)

Štai taip pat visame mokėjimo gateway'ų nustatymų vaizdo:

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**Stripe gateway'o nustatymas**

**PayPal gateway'o nustatymas**** **

**Manual mokėjimų nustatymas**

Dabar, jei norite naudoti _WooCommerce_, _GoCardless_ arba _Payfast_ kaip savo mokėjimo gateway'ą, jums reikės **įjungti ir nustatyti jų add-ons**.

### Kaip įjungti WooCommerce add-on:

Mes suprantame, kad _Stripe_ ir _PayPal_ nėra naudodami visos šios šalys, kurios apribina ar uždaro Ultimate Multisite vartotojų efektyviai naudoti mūsų pluginą. Taigi mes sukurti add-onai, kurie integruojami su _WooCommerce_, kuris yra labai populiaras e-komercijos pluginas. Visi pasaulio programystai sukurė add-onus, kurios integruoja skirtingus mokėjimo gateway'us su juo. Mes naudodami šį aspektą, išplėšome mokėjimo gateway'us, kuriuos galite naudoti su Ultimate Multisite paskelbimo sistema.

**PAGRINDINAS:** Ultimate Multisite: WooCommerce integracija reikalauja, kad WooCommerce bus aktyvuotas labiausiai visiame jūsų pagrindiniame svetainėje.

Visada pirmiausia eikite į puslapį pridelio (add-ons). Jūs galite rasti jį eikiant į **Ultimate Multisite > Settings**. Turėtumėte pamatyti lentelę **Add-ons** (Pridanga). Spauskite ant **Check our Add-ons** (Patikrinkime mūsų pridėkanus).

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Po paspaudimo ant **Check our Add-ons**, jūsų sutikimas bus nukreiptas į pridelio puslapį. Tai yra vieta, kur galite rasti visus Ultimate Multisite pridėkanus. Spauskite ant pridėkto **Ultimate Multisite: WooCommerce Integration**.

![Add-ons page listing Ultimate Multisite add-ons including WooCommerce Integration](/img/addons/addons-page.png)

Atidarymas pasirodys su pridėkto detalėmis. Visai spauskite ant **Install Now** (Įdaryti dabar).

<!-- Screenshot unavailable: Ultimate Multisite WooCommerce Integration add-on details dialog with Install Now button -->

Po įdarymo, jūsų sutikimas bus nukreiptas į pluginų puslapį. Tai yra vieta, kur visai spauskite ant **Network Activate** (Aktyvuoti tinklą), ir WooCommerce pridėkto bus aktyvuotas jūsų tinkluose.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the WooCommerce Integration add-on -->

Jei po aktyvavimo dar ne turite įdarytas ir aktyvuotas WooCommerce pluginą savo svetainėje, jūsų pasieks tikrinimas.

<!-- Screenshot unavailable: Admin notice reminding the administrator to install and activate the WooCommerce plugin -->

Jei norite sužinoti daugiau apie WooCommerce Integration pridėktį, **spauskite čia**.

### Kaip įdaryti GoCardless pridėktį:

Instalavimo `_GoCardless_` add-on žingsnius yra labai panašūs į `_WooCommerce_` add-oną. Eikite į add-onų puslapį ir pasirinkite **Ultimate Multisite: GoCardless Gateway** add-oną.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite GoCardless Gateway add-on highlighted -->

Atidaryks add-onų langas. Paspauskite **Install Now**.

<!-- Screenshot unavailable: Ultimate Multisite GoCardless Gateway add-on details dialog with Install Now button -->

Po įdarymo, busi perdirbti į pluginų puslapį. Tai čia visai paspauskite **Network Activate**, ir `_GoCardless_` add-onys bus aktyvuotas jūsų tinkluose.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the GoCardless Gateway add-on -->

Norėdami sužinoti, kaip pradėti naudotis `_GoCardless_` gatewayu, **skaitykite šį straipsnį**.

### Kaip įdaryti Payfast add-oną:

Eikite į add-onų puslapį ir pasirinkite **Ultimate Multisite: Payfast Gateway** add-oną.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite Payfast Gateway add-on highlighted -->

Atidaryks add-onų langas. Paspauskite **Install Now**.

<!-- Screenshot unavailable: Ultimate Multisite Payfast Gateway add-on details dialog with Install Now button -->

Po įdarymo busi perdirbti į pluginų puslapį. Tai čia visai paspauskite **Network Activate**, ir `_Payfast_` add-onys bus aktyvuotas jūsų tinkluose.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the Payfast Gateway add-on -->
