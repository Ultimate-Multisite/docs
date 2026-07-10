---
title: Kodo kūrimas
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Nuodų kodų kūrimas (v2) {#creating-discount-codes-v2}

_**SVARBUOTAS PRANEŠIMAS: Šis straipsnis taikomas Ultimate Multisite versijai 2.x.**_

Ultimate Multisite leidžia jums sukurti nuodų kodus, kad pateiktumėte klientams nuolaidas jų prenumeratoms. Ir juos sukriti yra lengvai!

## Nuodų kodų kūrimas ir redagavimas {#creating-and-editing-discount-codes}

Kad sukurtum ar redaguotumėtum nuodą kodą, eikite į **Ultimate Multisite > Discount Codes**.

![Nuodų kodų sąrašas – tuščias būsenos prieš paspaudimą jokių kodų](/img/config/discount-codes-empty.png)

Tada turite sąrašą jau sukurtų jūsų nuodų kodų.

Galite paspausti **Pridėti nuodą** (Add Discount Code), kad sukurotumėte naują kuponą, arba galite redaguoti jau esančius, paspaudus ir atsidurti viršuje **Redaguoti** (Edit).

![Nuodų kodų sąraštas su įvedimo veiksmų pakuotės Redaguoti ir Ištrinti linkais](/img/config/discount-codes-list-hover.png)

![Pridėti nuodą kodą mygtukas puslapio galvos viršuje](/img/config/discount-codes-add-button.png)

Jums bus nukreipti į puslapį, kur sukursite arba redaguosite savo kupono kodą. Šiuose pavyzdžiu sukurime naują.

![Nuodų kodo redaguojimo puslapis su visais skiltisiais matomais](/img/config/discount-code-edit.png)

Patikrinkime, kokias nustatymus galima rasti čia:

**Įveskite nuodą kodą:** Tai tik jūsų nuodų kodo pavadinimas. Tai nėra kodas, kurį vartotojai turės naudoti kasui užsakymo formoje.

**Aprašymas:** Šiuose galite trumpai aprašyti, kurios kupono tai yra.

![Nuodų kodo pavadinimo ir aprašymo laukai viršuje redaguojimo puslapio](/img/config/discount-code-description.png)

Galite peržiūrėti nuodą kodą kaip aktivą arba neaktivą:

![Nuodų kodo aktyvumo statusas](/img/config/discount-code-active.png)

**Kupono kodas:** Štai, kurį nurodoma jūsų klientams įvesti kasui užsakymo metu.

![Kupono kodo laukelis, kurioje vartotojai įvesia kodą pirkimo metu](/img/config/discount-code-coupon-field.png)

**Nuolaida:** Šiuo lauke galite nustatyti arba **procentus**, arba **fiksuotą sumą** pinigų jūsų nuolaidymo kodui.

![Nuolaidos sumos nustatymai su procentais ar fiksuota sumą dropdownu](/img/config/discount-code-amount.png)

**Taikyti į atnaujinimus:** Jei šis laukelis yra išjungtas, šis nuolaidymo kodas tinka tik **pirmam mokėjimui**. Visi kiti mokėjimai bus be nuolaidos. Jei šis laukelis yra įjungtas, nuolaidymo kodas bus galiojantis visoms kitoms mokėjimams.

**Nustatymo didinimo (setup fee) nuolaida:** Jei šis laukelis yra išjungtas, kupono kodu **nuolaida nebus taikoma už nustatymo didinimo (setup fee)** uždarymo. Jei šis laukelis yra įjungtas, galite nustatyti (procentus ar fiksuota sumą), kurį nuolaidymo kodas tinka jūsų planų nustatymo didinimui.

![Išjungimo ir nustatymo didinimo nuolaidos taikymo laukelių nustatymai](/img/config/discount-code-renewals.png)

**Aktyvus:** Manuliai įjunkite arba išjunkite šį nuolaidymo kodą.

![Aktyvumo laukelis, kurioje galite manuliai įjungti ar išjungti nuolaidymo kodą](/img/config/discount-code-active.png)

**Tiesomy 옵cijos (Advanced Options)**, turime šių nustatyjimų:

![Nuolaidos kodo tiesioginiai nustatymai](/img/config/discount-code-advanced.png)

**Limituoti naudojimus:**

  * **Naudojimai:** Šiuo lauke galite pamatyti, kiek kartų nuolaidymo kodas buvo naudotas.

  * **Maksimalus naudo:** Tai apribos, kiek kartų vartotojai gali naudoti šį nuolaidymo kodą. Pavyzdžiui, jei įrašysite čia 10, kuponą galima naudoti tik 10 kartų. Po šio ribos kupono kodu nebus galima naudoti.

![Limituoti naudojimų nustatymai su dabartiniu naudojimo skaičiu ir maksimalaus naudojimo lauku](/img/config/discount-code-limit-uses.png)

**Data startuo ir galiojimo terminai:** Šiuose turite pasirinkimą pridėti pradžių datą ir/arba galiojimo datą savo kuponui.

![Start and expiration date fields for scheduling the discount code](/img/config/discount-code-dates.png)

**Apriboti produktus:** Jei įjunkote **Select products** (Rinkti produktus), jums bus parodyti visi jūsų produktai. Turite pasirinkimą nustatyti (įjungdami arba išjungdami) kurį produktą gali priimti šis kuponas kodas. Produktai, kuriems šiuose yra išjungta funkcija, neatsisakys jokios pakeitimo, jei jūsų klientai pasinaudosis šiuo kuponu kodu.

![Limit products section with per-product toggle switches](/img/config/discount-code-limit-products.png)

Po nustatyta visos šios opsijos, spustelėkite **Save Discount Code** (Išsaugoti kuponą), kad išsaugotumėte savo kuponą ir tai bus atlikta!

![Save Discount Code button at the bottom of the edit page](/img/config/discount-code-save.png)

Kuponas dabar yra jūsų sąraše ir nuo to galite spustelėti, kad **redaguoti arba ištrinti** jį.

![Discount code row in the list with Edit and Delete hover actions](/img/config/discount-codes-list-hover.png)

###

### Naudojant URL parametrus: {#using-url-parameters}

Jei norite pritaikyti savo kainos lentelges arba sukurti graų kupono kodų puslapio savo svetainėje ir norite automatiškai taikyti kuponą kodą prie jūsų kasos formos, galite tai padaryti per URL parametrus.

Pirmajau, turite gauti pasidalinamos nuorodą savo planui. Tos kadu, eikite į **Ultimate Multisite > Products** (Ultimate Multisite > Produktai) ir pasirinkite planą.

Spustelėkite mygtuką **Click to Copy Shareable Link** (Spustelėti, kad nukopiu pasidalinamos nuorodą). Tai pateiks jums pasidalinamos nuorodą šiam specifikiškam planui. Mūsų atveju pateikta pasidalinama nuoroda buvo [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_.

![Product page with shareable link button](/img/config/products-list.png)

Kad jūsų nuolaidos kodą taikyti šiam konkretiam planui, visai reikia pridėti parametrai **?discount_code=XXX** į URL adresą. Kur **XXX** yra jūsų kupono kodas.

Mums šiuo pavyzdžiu mes taikys kupono kodą **50OFF** šiam konkretiam produktui.

URL adresas šiam planui ir su taikytu 50OFF nuolaidos kodu bus atrodo taip: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
