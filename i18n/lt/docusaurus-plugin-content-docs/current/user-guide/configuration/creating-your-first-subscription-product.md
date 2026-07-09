---
title: Sukurti savo pirmąjį prekybos abonementą
sidebar_position: 6
_i18n_hash: a4a36ed896f6691eebb099208a746cd7
---
# Jūsų Pirmo Mokesčių Produktų Sukurimas (v2) {#creating-your-first-subscription-product-v2}

_**SVARBUOTAS PRANEŠIMAS: Šis straipsnis skirtas tik Ultimate Multisite versijos 2.x vartotojams. Jei naudojate versiją 1.x,**_ **_skirkite šį straipsnis**_.

Kad pradėti veikti savo tinklą ir pradėti parduoti savo paslaugas galimintiems vartotojams, jums reikės skirtingų mokesčių variantų. Kaip sukurti šiuos produktus? Kokių tipų produktų galite pasiūlyti? Šiame straipsnyje pateiksime viską, ką reikia sužinoti apie produktus.

## Produktų Tipai {#product-type}

Su Ultimate Multisite galite pasiūlyti klientams dvi produktų kategorijas: **planus** ir **papildomai (Order Bump)**. Papildomai gali būti sukurti iki dviem tipais: **paketai** ir **paslaugos**. Ką jie skirties ir ypatybės pateiksime toliau.

  * **Planai**: tai pagrindinis Ultimate Multisite produktas. Jūsų klientas gali turėti narys tik tada, jei jis priklausys nuo planų. Planas suteikia jūsų klientams vieną ar daugiau vietų (tai priklauso nuo jūsų planų konfigūracijos) su apribojimais, kurias jūs nustabite savo produktų redaguojimo puslapyje.

  * **Paketai**: papildomai, kurie tiesiogiai veikia Ultimate Multisite planų funkcijas. Jie pakeičia apribojimus arba pridėja naujus resursus, pluginus ar temų originaliam planui, kurį klientas pirkęs. Pavyzdžiui, pagrindinis planas gali leisti 1000 vizitų per mėnesį, o jūs galite pasiūlyti paketą, kuris išplaučia šį skaičių iki 10 000.

  * **Paslaugos**: papildomai, kurie nepatinka Ultimate Multisite funkcijoms. Tai yra užduotys, kurias vyksite klientui, kurio pirkęs planą, beikant tą planą. Pavyzdžiui, jūsų klientas gali pirkti planą, kuris leido vienai vietos ir taip pat mokėti už papildomą paslaugą, kuri padarytų šį dizainą.

## Produktų Valdymas {#managing-products}

Daugeliui vartotojųにとって Ultimate Multisite **(Ultimate Multisite > Products)** puslapis „Products“ (Produktai) gali būti lygi su planų pasirinkimais tradiciinei hostingu aplinkvai.

Ultimate Multisite puslapio „Products“ puslapis nurodo konstrukciją ir apribojimus, geltančius įvykius ar paslaugas. Šie konstrukcijos taikomos produktui arba paslauga, o apima produktų ar paslaugų aprašymą, kainą, mokesčius ir leidimus.

Šis skelbimai jums padės suprasti šį svarbų Ultimate Multisite pagrindą.

![Products list page](/img/config/products-list.png)

## Produktų pridėjimas {#adding-products}

Jei tai planas, pakuotė ar paslauga yra įvestis naujo elementumo nurodymui, tai daroma per **Ultimate Multisite > Products > Add Product**.

![Add Product button](/img/config/product-add-button.png)

Interfejs turi dvi pagrindines dalis. Kairėje yra kelios languoti, kurie padeda nustatyti produktą, o dešinėje yra kelios dalys, kurios skiriasi produktui bazinę kainą, jo veikimo būseną ir produktų vaizdą.

![Product edit page overview](/img/config/product-edit-full.png)

### Aprašymas {#description}

Bazines produktos informacijos galima nustatyti pateikdami produktų pavadinimą ir aprašymą. Šie identifikatoriai skamba, kur jie reikalinga informacija, pavyzdžiui, planų ir kainų pasirinkimo metu, paskyros, įmonių atnaujinimų ir panašios dalykų.

![Product description section](/img/config/product-description.png)

### Kaina {#pricing-type}

Interfeysis dešinėje pusėje leidžia nustatyti bazinę kainą.

![Pricing and save section](/img/config/product-pricing-save.png)

Ultimate Multisite palaiko trikus kitus kainos tipus. **Paid** (Mokėtinas) opsinai praneša tinklo administratorui informaciją apie produkto kainą ir paskirstymo tikslą.

### Kainos nustatymas {#pricing}

Kainos komponentas nurodo bazinę produkto kainą ir paskirstymo intervalą.

![Ceny ir saugumo sekcija](/img/config/product-pricing-save.png)

ta, pavyzdžiui, jei turite kainą 29.99$, o kurio nustatytas laikas yra vienas mėnesis, tai bus skaičiuojama 29.99$ kiekvienam mėnesiu. Analogiai, jei kainos yra 89.97$ ir nustatyta per 3 mėnesius, tai bus skaičiuojama šią sumą kiekviename kvartale.

### Skaičiavimo ciklai {#billing-cycles}

Skaičiavimo ciklus sekcija nurodo, kokia dažniausia yra ieškomos mokėjimo intervalo ir ji dažnai suprantama su santykiu prie sutarties ar fiksuotu laiko.

![Ceny ir saugumo sekcija](/img/config/product-pricing-save.png)

Pavyzdžiui, jei produkto kaina yra 29.99$ ir intervalas yra vienas mėnesis ir 12 skaičiavimo ciklus, tai bus skaičiuojama 29.99$ kiekvienam mėnesiu už produktą per to 12 mėnesių laikotarpį. Vakar tokiu nustatymu bus sukurta fiksuota kaina 29.99$ per mėnesį per 12 mėnesius ir skaičiavimas bus nutrauktas.

### Bandymo laikotarpis {#trial-period}

Paleidžiant pasiūlymo bandymo mygtuką leidžia tinklo administratorui nustatyti bandymo laikotarpį produktai.

![Ceny ir saugumo sekcija](/img/config/product-pricing-save.png)

Bandymo laikotarpiui vartotojai yra laisvai naudotis produktais ir nebus mokėti, kol bandymas laikotarpis bus išnaudotas.

### Nustatymo didinimo mokestis (Setup Fee) {#setup-fee}

Galite taip pat pateikti nustatymo didinimo mokestį savo planui.

![Ceny ir saugumo sekcija](/img/config/product-pricing-save.png)

Tai reiškia, kad jūsų klientas bus mokėti papildomą sumą per pirmą mokesčią (pas kurio kainos planą) kuri, atitina didinimo mokestį, kurį nustatyote šioje sekcijoje.

### Aktyvus {#active}

Aktyvumo mygtukas efektyviai nurodo, ar produktas yra skirtas vartotojams naujiems registracijoms.

![Aktyvumo mygtukas](/img/config/product-active.png)

Jei šio planui yra esantys klientai, nustabdykite šį mygtuką į neaktyvų būseną – tai efektyviai išlaikys planą ir pašalys jį ateitymo registracijose. **Esantys planui klientai bus pinigoti** iki kol jie pereis prie naujo plano arba bus pašalinti iš plano.

### Produkto vaizdas {#product-image}

Mygtukas **Upload Image** leidžia tinklo administratorui naudotis medijos biblioteka, kad pasirinktų ar įkeltų produkto vaizdą.

![Product image section](/img/config/product-image.png)

### Ištrinti {#delete}

Mygtukas **Delete Product** pašalina produktą iš sistema. Jis pasirodys po to, kai produktas bus publikuotas.

![Delete product section](/img/config/product-delete.png)

Paprastai skiriasi kitoms pašalinimams – produktas nebus pateiktas į kokį šaltinį (trampas). Taigi, po ištrinkimo veiksmas yra neatvirkštas.

### Produkto nustatymai {#product-options}

Kai pagrindinė produkto informacija bus nurodyta, produkto nustatymai padės tinklo administratorui toliau nurodyti specifinius produktų atributus.

#### Bendrasis {#general}

**General** (Bendrasis) sąrašas nurodo bendrus produktų atributus, kurie ne taikomi jokiam kitam produktui specifikam sąrašui.

![General tab](/img/config/product-general-tab.png)

Atsivaizduojamas **product slug** (produkto sluga) nurodo tą slugą, su kuris produktas identifikuojamas URL adresuose ir kitose Ultimate Multisite dalys.

Ultimate Multisite palaiko kelis produkto tipus: Planą, Paketą ir Paslaugą. **Product Options** (Produkto nustatymai) sąrašai dinamiškai keičiasi priklausomai nuo nurodytos produkto tipų.

**Customer Role** (Klientas vaidmuo) nurodo tą vaidmenį, kuris siama klientui, kai svetainė sukuriamasi. Tipikiame atveju daugeliui tinklo administratoriams tai bus Ultimate Multisite standartinis ar Administratoris. Ultimate Multisite standartinį vaidmenį galima nustatyti **Ultimate Multisite > Settings > Login & Registration** (Ultimate Multisite > Nustatymai > Prisijungimas ir registracija).

![Customer role settings](/img/config/product-customer-role-settings.png)

#### Pakeit ir atšaukimas (Up & Downgrades) {#up--downgrades}

Ši vieta nurodo, kokie įtraukimai ir atsaukimo (downgrade) būdai yra skirti klientui jo konkretio lygio metu.

Svarbu suprasti šią koncepciją per pavyzdį, kurioje niša Ultimate Multisite instalacija teikia mokymosi sąlygų solutions savo klientams. Kadangi su šiomis dvi (Basic, Plus ir Premium) planai yra nurodyti ir kiekviena planui aktyvuojami specifiniai pluginai (iš instrukcijoms apie pluginų aktyvuojimą radingite vėliau šio skelbimų), jei Ultimate Multisite instalacija taip pat teikia verslo svetainoms ar e-komercijos svetainoms, šie planai gali reikalauti įdėti ir aktyvuoti kitus pluginus.

Šiu santykioje situacijoje būtų netiksliai ir problematiškai leisti mokymosi klientams perjungti į e-komercijos planus, nes šių planų kaina, laimintys ir apribojimai gali būti nepatikti.

Taigi, kad apribotumėte klientui kelioją vietą ir užprengtumėte incidentus, tinklo administratorius gali nurodyti planų grupę ir šio grupės viduje nurodyti, į kuriuos planai klientas gali perjungti.

![Up and Downgrades tab](/img/config/product-upgrades.png)

Kad nurodytumėte planų grupę, nurodykite sudergias planus **planų grupės** sąraše. **Produkto užsakymas** nurodo, kaip planai yra surinkti ir rodomi nuo kainos didžiausios iki mažiausios.

Ultimate Multisite taip pat susijęs su funkcija **order bump**, kurioje tinkamai į planus gali būti pridėti papildomi produktai ir paslaugos. Tai siūloma klientui kaip papildomos dalys, kurias galima pridėti prie planų kasui ar metu atsaukimo (upgrade) metu.

#### Kaina variantai {#price-variations}

Kaina variantai leidžia tinklo administratorui nurodyti alternatyvų kainos lygis, prieldant pagal laikotarpį. Ši nustatyimas leidžia pasiūlyti vienam pačiu produktui skirtingus mokesčių terminus – mėnesio, kvartalinio, annualinio ar bet kokio kitimo periodų. Pavyzdžiui, galite nustatyti produktą už 29,99 USD/mėnį ir pasiūlyti nuolaidytą annualinę opsiją už 249,99 USD/metus.

![Price Variations tab](/img/config/product-price-variations-tab.png)

Kai nustate kainos variantus, paleiskite **Enable Price Variations** (Paleistyti kainos variantus) mygtuką ir paspauskite mygtuką **Add new Price Variation** (Pridėti naują kainos variantą).

![Product price variations](/img/config/product-price-variations.png)

Kai įvedate variantą, nustatykite jo laikotarpį, periodą ir kainą. Naujus variantus galite pridėti paspaudus mygtuką vėl.

Pavyzdžiui, jei jūsų pagrindinio produkto kaina yra 29,99 USD per mėnesį, galite pridėti:

  * **3 mėn.** už 79,99 USD (mažai nuolaida nei mėnesio kaina)
  * **1 metai** už 249,99 USD (išskirtine nuolaida dėl annualinio įsipareigojimo)

:::tip Prieš naujieną: Skaitant Mokesčių Periodą Antraspusėje pusėje (Frontend)

Kainos variantai vieni negali pridėti mygtuko ar switch'o ant frontendio kasos. Kad klientai galėtų pasirinkti tarp mokesčių periodų (pvz., Mėnesio / Annualinio), turite pridėti **Period Selection** (Periodos pasirinkimo) laukelį į savo kasos formą. Paskutines instrukcijas rasite [Checkout Forms: Adding a Period Selection Toggle](checkout-forms#adding-a-period-selection-toggle).
:::

#### Mokesčiai {#taxes}

**Taxes** (Mokesčiai) puslapis susijęs su mokesčių nustatymais, nurodytais **Ultimate Multisite > Settings > Taxes** ir, specifiau, nurodytomis mokesčių lygiais. Norėdami įjungti mokesčius ir nustatyti pritaikomus mokesčių lygis, rasite dokumentaciją **Ultimate Multisite: Settings**.

![Taxes tab](/img/config/product-taxes.png)

Anteremosejame, nustatyme vietinį mokesčių įstaigą 7.25% Kalifornijos (Jungtinų Stanų) klientams.

Kai mokesčio lygis bus nustatytas **Ultimate Multisite > Settings > Manage Tax Rates** puslapyje, jis galės būti pasirinktas produkto laipsnyje.

![Taxes tab](/img/config/product-taxes.png)

Norint nurodyti, kad produktas yra mokesčias itemas, paleiskite **Is Taxable** (Ar yra mokesčias) mygtuką ir pasirinkite pritaikytą mokesčių lygį iš Dropdown meniu Tax Category.

#### Svetų šablonavimo (Site Templates) {#site-templates}

Pagrindinis požiūris – svetainės šablonavimas yra pilni WordPress svetainiai, kurie klonuojami klientui turimo svetaine pradžioje jų subskriptijos metu.

![Site Templates tab](/img/config/product-site-templates.png)

Tinklinės administratoriai sukuria ir konfigūruoja šablono svetainę kaip įprastą WordPress svetainę su aktyviaus ir nustatyti temais, pluginais ir turiniu. Šablono svetainė klonuojama tiksliai klientui.

Šis puslapis leidžia tinklinės administratoriais nurodyti šablono svetaini veikimą naujos subskriptijos metu. Norėdami naudoti šablono svetainius šiam planui, paleiskite **Allow Site Templates** (Leisti šablono svetainius) mygtuką į aktyvų būsenį.

Kai **Allow Site Templates** yra išjungtas, klientai šiam planui negali pasirinkti šablono, nors ir jei pabaigojo užsakymo forma, dalintis nuorodą ar URL parametras kitais atvejais leidžia jūsų pasirinkimą. Ultimate Multisite dabar taikoma šį limitą per pagalbą: pirmiausia patikrinami planų nustatymai, tada užsakymo formos šablono nustatymai ir vėliau – pre-pasirinkti arba URL pateikti šablono. Tai išlaiko planų limitus vienodūs ir nesutinka jokioms produktams, kuriems jų turėtų būti nepritaikyti.

**site template selection mode** (šablono svetainės pasirinkimo režimas) nurodo šablono svetaini veikimą subskriptijos procesui metu.

Parametras **D** **Default** (Default): Šis nustatymas seka šių veiksmų, esančius užsakymo formoje. Jei tinklo administratorius nurodė templato pasirinkimo žingsnį užsakymo procese ir šis žingsnis nurodytas su templatingais, šis nustatymas atitiks užsakymo žingsnio nurodytą nariausius nurodymus.

Nurodant **A** **Assign Site Template** (Privalyti nustatyti svetainės šabloną): Tai priverčia pasirinkti nurodytą šabloną. Taip, rezultatu, bet kokios templato pasirinkimo žingsniai užsakymo procese bus pašalomi.

Kitas žingsnis, **C** **Choose Available Site Templates** (Pasirinkti turimos svetainės šablonai), perviršija užsakymo žingsnio nurodytus šablonus pasirinktais šiu nustatymu. Arba galima nurodyti pre-pasirinktą šabloną, kad padėtumėte klientui pasirinkimo procese.

Apibendrinant, jei tinklo administratorius nori, kad šablonų pasirinkimas būtų vykdomas užsakymo žingsniuose, visada sugenia nustatymas '_default_'. Alternatyviai, jei norite pašalyti ir užblokuoti šablonų pasirinkimą ir deleguoti pasirinkimą planui nustatymams, gali būti tinkami opsijos '_assign new template_' arba '_choose available site templates_'.

#### Svetainės (Sites) {#sites}

**Svetainės (Sites)** sąstumas yra Ultimate Multisite apribojimų funkcijų dalis.

![Sites tab](/img/config/product-sites.png)

Šis nustatymas nurodo maksimalią svetainių skaičių, kuriuos klientas gali suk creare savo nariausyje.

Kad įjungti apribojimą, nustatykite **limit sites** (skaičius svetainių) mygtuką į aktyvų būsenį ir nurodykite maksimalų svetainių skaičių lauke **site allowance** (svetainės atsiuntimas).

#### Apžiūros (Visits) {#visits}

**Apžiūros (Visits)** sąstumas yra Ultimate Multisite apribojimų sistema. Šis nustatymas leidžia sužinoti ir toliau kontroliuoti unikalius apsilankijančius klientus į klientų svetainę.

![Visits tab](/img/config/product-visits.png)

N marketingui perspektyvos siekiantį, tinklo administratoriai gali naudoti šią nustatymą kaip būdą patraukti klientus įsitikinimui atnaujinti savo planą, kai pasiekti sąlygos limitai. Ši nustatyma taip pat gali padėti tinklo administratorui sužmogauti ir prevenciliai kontroliuoti perlabumas į svetainų trafiką, kad būtų išlaikyti sistemines resursus.

Kad naudoti šią funkciją, nustatykite **limit unique visits** (limito unikalios vizitų) mygtuką į aktyvų būsenį ir nurodykite maksimalų skaičių unikalių vizitatoriame lauke **unique visits quota** (unikalios vizitų kvotas).

Kai šis limitas pasiektas Ultimate Multisite nebus teikti klientui svetainės, o atvyks pranešimas apie tai, kad limitai buvo pasiekti.

#### Vartotojai {#users}

Ultimate Multisite „Vartotojų“ (Users) apribojimai leidžia tinklo administratorui nustatyti limitus skaičiumi vartotojų, kuriuos galima sukurti ir atsiųsti į vaidmenius.

![Users tab](/img/config/product-users.png)

Kad įjungti apribojimų funkciją, nustatykite **limit user** (vartotojo limitas) mygtuką į aktyvų būsenį, siūlant ji dešimtį.

Kiekvienam vaidmeniui, kuriam reikia nustatyti limitus, nustatykite mygtuką šalia jį į aktyvų būsenį ir nurodykite maksimalų aukščiausią ribą tinkamame lauke.

#### Post Types (Post Tipai) {#post-types}

**Post Types** (Post Tipai) sąraδος leidžia tinklo administratorui nustatyti detalius limitus dideliai įtraukiamoms post tipams WordPress'e.

![Post Types tab](/img/config/product-post-types.png)

Dėl WordPress konstrukcijos postai ir post tipai yra svarbi dalis jo pagrindinės veiklos, todėl Ultimate Multisite apribojimų sistema skirtas padėti tinklo administratorui nustatyti ir išlaikyti limitus.

Kad įjungti šią apribojimų subsystemą, nustatykite **limit post types** (post tipų limitas) mygtuką į aktyvų būsenį, siūlant ji dešimtį.

Kiekvienam post tipui, kurį norite apriboti, paleiskite jį, slidžiant dešimtį į dešimtį (dešinėje pusėje) ir nurodykite maksimalų aukščiausią ribą tinkamu laiku atitinkame laiku.

#### Disko ruošystė {#disk-space}

**Disk Space** (Disko ruošystės) posviselis leidžia tinklo administratoriams apriboti vietą, kurį vartotojai gali užimti.

![Disk Space tab](/img/config/product-disk-space.png)

Papildomai, kaip nurodyta, WordPress multisite pagrindiniai failai daluojami visais svetainėmis, o individualiai sukurti dirbtos katalogai medya failams ir įkėlimams, kuriems taikomos šios nustatymai ir ribos.

Sveikiame diskų naudojimo ribojimą, paleiskite **limit disk size per site** (ribos disko dydis per svetainę) mygtuką į aktyvų būsenį slidžiant jį į dešimtį.

Toliau nurodykite maksimalų aukščiausią ribą megabajtams lauke **disk space allowance**.

#### Pradėtas domenas (Custom Domain) {#custom-domain}

Paleiskdami šią funkciją, galite leisti naudoti pradinus domenus šiame planą.

![Custom Domains tab](/img/config/product-custom-domains.png)

#### Temai {#themes}

**Themes** (Temai) posviselis nustatymai produkto opsiniuose leidžia tinklo administratorui pateikti temai vartotojams pasirinkimui ir, opcionai, priversti temo būseną.

![Themes tab](/img/config/product-themes.png)

_**Pastaba: kad temai tų vartotojų pasiektų, jos turi būti tinklu įjungtos administratoriumi.**_

![Network themes page](/img/config/product-themes-network-enabled.png)

**Visibility** (Matoma) opsinis nurodo, ar šis temas yra matomas vartotojui, kai jis naršys savo svetainės **Appearance > Themes** (Atsivaizduojimas > Temai) posviseliu. Nustatydami šį opsinį į **Hidden** (Paslėptas), jūs pašalote temą iš matojimo ir todėl apribojate jos pasirinkimą ir aktyvavimą.

![Themes tab](/img/config/product-themes.png)

**Behavior** (Elgesys) pasirinkimas leidžia tinklo administratorui nurodyti temo būseną, kai sukuriamas vartotojo svetainė.

W stanie **Dostępny** motyw jest dostępny dla klienta do samodzielnej aktywacji. Z drugiej strony, w stanie **Niedostępny** usuwa możliwość aktywowania motywu z klienta. Na koniec opcja **Wymuś Aktywację** wymusza wybór i aktywację motywu, ustawiając go jako domowy przy tworzeniu strony.

#### Plugins (Wtyczki) {#plugins}

Podobnie jak w zakładce Themes, Ultimate Multisite pozwala administratorowi sieci na określenie widoczności wtyczek dla klientów oraz ich stanu po utworzeniu nowej strony.

![Plugins tab](/img/config/product-plugins.png)

Rozwijana lista **widoczności** pozwala na to, aby wtyczka była albo widoczna, albo ukryta dla klienta, gdy jest wyświetlana na jego stronie za pomocą opcji z menu Plugins.

Administrator sieci może dalej modyfikować zachowanie wtyczek, korzystając z opcji w rozwijanej liście **zachowania** (behavior).

![Plugins tab](/img/config/product-plugins.png)

Wybór **Domyślny** szanuje stan wtyczki zdefiniowany w szablonie strony wybranym przez klienta. W ten sposób wtyczki aktywowane w szablonie pozostaną aktywne, gdy zostanie on sklonowany na stronę klienta.

Opcja **Wymuś Aktywację** umieszcza wtyczkę w stanie aktywnym po utworzeniu strony, a opcja **Wymuś Deaktywację** dezaktywuje wtyczkę po utworzeniu strony. W obu tych przypadkach stan wtyczki może być ręcznie zmieniony przez klienta za pomocą menu Plugins w WordPressie.

Ustawienie **Force Activate & Lock** działa podobnie, ale zapobiega zmianie stanu wtyczki przez klienta. Oznacza to, że ustawienie Force Activate i Lock wymusi aktywne działanie wtyczki i uniemożliwi klientowi jej dezaktywację. Podobnie ustawienie **Force Inactivate & Lock** wymusi stan nieaktywny wtyczki i zapobiegnie użytkownikowi jej aktywacji.

Administrator sieci może chcieć rozważyć ustawienia Force Activate & Lock oraz Force Inactivate & Lock w połączeniu z szablonami witryny jako wtyczkami, ponieważ stany wtyczek w szablonach mogą zostać wpłynięte przez te ustawienia, jeśli zostaną one wybrane.

#### Ograniczenia przy resetowaniu {#reset-limitations}

Zakładka **Reset Limitations** resetuje wszystkie własne limity zdefiniowane dla produktu. Aby zresetować ograniczenia, kliknij przycisk **reset limitations**.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

Aby potwierdzić działanie, przełącz suwak **confirm reset** w prawo i kliknij przycisk **reset limitations**.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

## Edycja, duplikowanie lub usunięcie produktu {#edit-duplicate-or-delete-product}

Istniejące produkty można edytować, duplikować lub usuwać, przechodząc do **Ultimate Multisite > Products** i najedając kursorem nad nazwą istniejącego produktu.

![Product hover actions](/img/config/product-hover-actions.png)
