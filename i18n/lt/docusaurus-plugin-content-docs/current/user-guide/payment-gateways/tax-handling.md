---
title: Mokesčių tvarkymas
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# Mokesčių tvarkymas

Ultimate Multisite turi mokesčių surinkimo modulį, integruotą į mūsų pagrindinį įskiepį, todėl jei jums reikia surinkti pardavimo mokesčius už savo planus, paketus ir paslaugas, tai galite lengvai padaryti neįdiegdami jokių priedų.

Europoje įsikūrusioms įmonėms siūlome **priedą**, kuris prideda įrankių ir funkcijų, padedančių geriau **palaikyti VAT** atitiktį.

Ultimate Multisite nepateikia ir neperveda mokesčių jūsų vardu vyriausybei; mes tiesiog padedame jums surinkti tinkamus mokesčius operacijos metu. **Jums vis tiek reikės patiems pervesti mokesčius.**

## Mokesčių surinkimo įjungimas {#enabling-tax-collection}

Mokesčių surinkimas pagal numatytuosius nustatymus nėra įjungtas. Norėdami jį įjungti, turite eiti į **Ultimate Multisite > Nustatymai > Mokesčiai** ir perjungti, kad įjungtumėte nustatymą Įjungti mokesčius.

![Įjungti mokesčius perjungiklis mokesčių nustatymų puslapio viršuje](/img/config/settings-taxes-enable.png)

Štai visas mokesčių nustatymų puslapio vaizdas:

![Visas mokesčių nustatymų puslapis](/img/config/settings-taxes-full.png)

Taip pat galite peržiūrėti atskirų produktų mokesčių nustatymus:

![Produktų mokesčių nustatymai](/img/config/settings-taxes.png)

### Mokesčiai neįtraukti ir mokesčiai įtraukti {#tax-excluded-vs-tax-included}

Pagal numatytuosius nustatymus visų jūsų produktų kainos yra be mokesčių, tai reiškia, kad mokesčiai **nėra įtraukti** į produkto kainą. Jei nustatysime, kad klientas turėtų mokėti mokesčius už konkretų pirkinį, pridėsime mokesčius **prie** tarpinės sumos.

Jei norite, kad mokesčiai būtų įtraukti į jūsų produkto kainą, galite tai padaryti įjungę nustatymą **Įtrauktinis mokestis**.

![Įtrauktinio mokesčio perjungiklio eilutė po nustatymu Įjungti mokesčius](/img/config/settings-taxes-inclusive.png)

Nepamirškite **išsaugoti** atliktų pakeitimų.

###

## Mokesčių tarifų kūrimas {#creating-tax-rates}

Įjungę mokesčių surinkimą, turėsite sukurti mokesčių tarifus konkrečioms vietovėms naudodami mūsų mokesčių tarifų redaktorių.

Redaktorių galite pasiekti spustelėję šoniniame mokesčių nustatymų puslapio skydelyje esantį mygtuką **Tvarkyti mokesčių tarifus**.

![Nuoroda Tvarkyti mokesčių tarifus mokesčių tarifų skydelyje nustatymų puslapyje](/img/config/settings-taxes-manage-rates.png)

Mokesčių tarifų redaktoriaus puslapyje galite pridėti naujus mokesčių tarifus spustelėję mygtuką **Pridėti naują eilutę**.

![Mokesčių tarifų redaktoriaus lentelė su mygtuku Pridėti naują eilutę viršuje](/img/config/tax-rates-editor.png)

Kiekvienam mokesčių tarifui turėsite suteikti **pavadinimą** (naudojamą sąskaitose faktūrose). Tada galite pasirinkti **šalį** (privaloma), **valstiją,** ir **miestą** (abu neprivalomi), kur bus taikomas šis mokestis. Galiausiai pridėkite **mokesčio tarifą procentais**.

### Mokesčių kategorijos {#tax-categories}

Taip pat galite sukurti kelias mokesčių kategorijas, kad skirtingų rūšių produktams pridėtumėte skirtingus mokesčių tarifus.

Spustelėkite **Pridėti naują mokesčių kategoriją** , tada įrašykite kategorijos pavadinimą ir paspauskite **Sukurti**.

![Mygtukas Pridėti naują mokesčių kategoriją mokesčių tarifų redaktoriaus viršuje](/img/config/tax-categories-add.png)

![Mokesčių kategorijos pavadinimo įvesties laukas kategorijos kūrimo modaliniame lange](/img/config/tax-categories-create-modal.png)

Norėdami naršyti kategorijas, spustelėkite **Perjungti** ir pasirinkite kategoriją, kuriai norite pridėti naujų mokesčių.

![Perjungimo išskleidžiamasis mygtukas, skirtas keisti mokesčių kategorijas](/img/config/tax-categories-switch.png)

![Mokesčių kategorijos pasirinkimo išskleidžiamasis sąrašas, rodantis prieinamas kategorijas](/img/config/tax-categories-select.png)

Konkretaus produkto mokesčių kategoriją galite nustatyti eidami į **Produkto redagavimo puslapį**, o tada į skirtuką Mokesčiai.

![Produkto mokesčių skirtukas su mokesčių kategorija ir apmokestinimo perjungikliu](/img/config/product-taxes.png)

Tame pačiame ekrane galite išjungti perjungiklį **Ar apmokestinama?**, kad Ultimate Multisite žinotų, jog neturėtų rinkti mokesčių už tą konkretų produktą.

## Europos VAT palaikymas {#european-vat-support}

Kaip minėta anksčiau, turime priedą klientams ES, kuriems taikomi papildomi reikalavimai dėl Europos VAT reglamentų.

Mūsų VAT įrankiai padeda su keliais svarbiais dalykais:

  * Lengvas ES VAT tarifų įkėlimas;

  * VAT numerio surinkimas ir patvirtinimas – ir atvirkštinis apmokestinimas VAT neapmokestinamiems subjektams (pvz., įmonėms su galiojančiais VAT numeriais);

Norėdami įdiegti šį priedą, eikite į **Ultimate Multisite > Nustatymai** ir tada spustelėkite šoninės juostos nuorodą **Peržiūrėkite mūsų priedus**.

![Nustatymų puslapio šoninė juosta su nuoroda Peržiūrėkite mūsų priedus](/img/config/settings-taxes-addons-link.png)

Būsite nukreipti į mūsų priedų puslapį. Ten galite ieškoti **Ultimate Multisite VAT priedo** ir jį įdiegti.

<!-- Ekrano kopija nepasiekiama: VAT priedo kortelė priedų puslapyje -->

<!-- Ekrano kopija nepasiekiama: VAT priedo dialogas Įdiegti dabar -->

Tada eikite į **Tinklo administravimas > Įskiepiai** ir aktyvuokite šį priedą visame tinkle.

<!-- Ekrano kopija nepasiekiama: veiksmas Aktyvuoti tinkle VAT priedui įskiepių puslapyje -->

Jei grįšite į **Mokesčių nustatymų skirtuką** , pamatysite naujas prieinamas parinktis. Perjunkite parinktį **Įjungti VAT palaikymą**, kad įjungtumėte naujus VAT įrankius. Nepamirškite **išsaugoti** savo nustatymų!

<!-- Ekrano kopija nepasiekiama: Įjungti VAT palaikymą perjungiklis mokesčių nustatymuose po priedo aktyvavimo -->

### VAT mokesčių tarifų įkėlimas {#pulling-on-vat-tax-rates}

Vienas iš įrankių, kuriuos prideda mūsų integracija, yra galimybė įkelti ES valstybių narių mokesčių tarifus. Tai galima padaryti apsilankius mokesčių tarifų redaktoriaus puslapyje po ES VAT palaikymo įjungimo.

Puslapio apačioje matysite VAT įkėlimo parinktis. Pasirinkus tarifo tipą ir spustelėjus mygtuką **Atnaujinti ES VAT tarifus**, lentelė bus užpildyta kiekvienos ES valstybės narės mokesčių tarifais. Tada jums tereikės ją išsaugoti.

![Mygtukas Atnaujinti ES VAT tarifus mokesčių tarifų redaktoriaus apačioje](/img/config/tax-rates-vat-pull.png)

Taip pat galite redaguoti reikšmes po jų įkėlimo. Norėdami tai padaryti, tiesiog redaguokite reikiamą lentelės eilutę ir spustelėkite, kad išsaugotumėte naujas reikšmes.

### VAT patvirtinimas {#vat-validation}

Kai VAT palaikymas įjungtas, Ultimate Multisite pridės papildomą lauką prie atsiskaitymo formos, po atsiskaitymo adreso lauku. Laukas bus rodomas tik ES esantiems klientams.

<!-- Ekrano kopija nepasiekiama: VAT numerio laukas naudotojo sąsajos atsiskaitymo formoje po atsiskaitymo adresu -->

Ultimate Multisite tada patikrins PVM mokėtojo kodą ir, jei jis bus pripažintas galiojančiu, bus pritaikytas atvirkštinio apmokestinimo mechanizmas, o to užsakymo mokesčio tarifas bus nustatytas į 0 %.
