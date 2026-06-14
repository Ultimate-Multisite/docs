---
title: Forme za plačilo
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Checkout forme

Checkout Forms so ti je enostavno in fleksibilno način za eksperimentiranje z različnimi pristopi, ko poskušate novih strank spremeniti v kupce.

Ultimate Multisite 2.0 ponuja editor Checkout Form, ki vam omogoča ustvarjanje čez toliko form, s različnimi polji, ponujanimi izdelki in tako in drugimi stvari.

Za dostop do te funkcije se obiščite v meniju Checkout Forms na levi strani.

![Checkout Forms list](/img/config/checkout-forms-list.png)

Na tej strani vidite vse svoje checkout forme.

V tabeli z seznamom vključuje stolkjo **Status**, tako da lahko preverite, ali je vsaka forma trenutno na voljo za stranke:

| Status | pomen |
|---|---|
| **Active** (Aktivna) | Forma se lahko uporablja bilo kjer jo objavite njen shortcode ali stran za registracijo. |
| **Inactive** (Naktivna) | Forma je shranjena, vendar je onemogočena. Stranke ne morejo dokončati nakup z njim, dokler ga ponovno ne vključite. |

Uporabljajte stolkjo status pred uredjenjem javnega toka registracije, še posebej, ko imate na voljo projekte za checkout forme kot tudi drafte ali sezonske forme ob svoje živih formah.

Če želite ustvariti novu, le kliknite na Add Checkout Form na vrhu strani.

Lahko izberete eno od teh treh možnosti kot začetek: single step (enkratni korak), multi-step (večkorak) ali blank (prazna). Nato kliknite za prehod do Editorja.

Ko izberete **single step** ali **multi-step** kot začetek, v obrazec template se zdaj po defaultu vključuje polje **Template Selection**. To polje omogoča strankam, da izbrezete template strani med procesom registracije. Lahko pustite to polje na mestu, odstranite ga ali ga premestite kot kakšno drugo polje v editorju.

![Checkout Form editor](/img/config/checkout-form-editor.png)

Alternativ lahko forme, ki ste že imate, uredite ali duplirate, če kliknete na možnosti pod njihovim imenom. Tam boste tudi našli možnosti za kopiranje shortcode-a forme ali za brisanje forme.

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

#### Pregled redaktora forme za nakup (Checkout Form Editor Overview)

Redaktor forme za nakup vam omogoča celoten interfejs za ustvarjanje vaših registracijskih form. Tukaj je preglлед rasporeka redaktora:

![Checkout Form editor overview](/img/config/checkout-form-editor-overview.png)

### Ureditev forme za nakup (Editing a Checkout Form)

Lahko ustvarjate forme za nakup za različne namene. V tem primer bomo delali na registracijskem formu.

Po navigaciji do redaktora forme za nakup mu dajte ime (ki bo uporabljeno le za notranjo referenco) in slug (ki se uporablja za ustvarjanje shortcode-ov, na primer).

![Checkout Form editor](/img/config/checkout-form-editor.png)

Forme so sestavljene iz korakov in polj. Novo korako lahko dodate, kliknemo na Add New Checkout Step (Dodaj novo korako za nakup).

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

Na prvem tabu okna modalne window se navedite vsebino vašega koraka forme. Dajte mu ID, ime in opis. Ti elementi so večinoma uporabljani le notranje.

![Checkout form step content tab](/img/config/checkout-form-step-content.png)

Naslednje, nastavite vidljivost koraka. Lahko izberete med "Vedno prikazano", "Prikazano le za prijavljene uporabnike" ali "Prikazano le za goste".

![Checkout form step visibility tab](/img/config/checkout-form-step-visibility.png)

Na koncu, konfigurirajte stil koraka. To so opcionalni polji.

![Checkout form step style tab](/img/config/checkout-form-step-style.png)

Zdaj je čas dodati polja na naš prvi korak. Samo kliknite na Add New Field (Dodaj novo polje) in izberite tip sekcije, ki jo želite.

![Korak za nakup z polji](/img/config/checkout-form-step-with-fields.png)

Vsak polje ima različne parametre, ki jih morate zapolniti. Za to prvo vnos bomo izbrali polje "Username".

![Izberovalnik tipov polja](/img/config/checkout-form-field-type-dropdown.png)

![Nastavitve vsebine polja Username](/img/config/checkout-form-username-content.png)

![Nastavitve vidljivosti polja Username](/img/config/checkout-form-username-visibility.png)

![Nastavitve stila polja Username](/img/config/checkout-form-username-style.png)

Lahko dodate toliko korakov in polj, kot vam je treba. Za prikaz vaših izdelkov, ki bodo kupci lahko izbrali, uporabite polje Pricing Table. Če želite dati svojim strankam možnost izbire templat, dodajte polje Template Selection. In tako naprej.

![Dialog za dodaj novo polje](/img/config/checkout-form-add-field-dialog.png)

_**Opomba:** username, email, password, site title, site URL, order summary, payment in submit button so obvezna polja za ustvarjanje formularja za nakup._

Med delom na svojem formularju za nakup lahko vedno uporabite gumb Preview, da vidite kako bodo kupci videli formular. Lahko tudi preprečate med prikazom kot obstojeega uporabnika in gostitelja.

![Gumb predskombare formularja](/img/config/checkout-form-preview-button.png)

![Modal za predskombare formularja](/img/config/checkout-form-preview-modal.png)

Na koncu, v Advanced Options lahko konfigurirate sporočilo za stran "Thank You", dodate snippetove za sledenje konverzijam, dodate prilagojen CSS na vaš formular za nakup ali ga omejite na določene države.

![Advanced Options](/img/config/checkout-form-advanced.png)

Lahko lahko tudi ručno vključite ali izklopite svoj formular za nakup z uporabo tega možnosti v desni koloni, ali ga trajano obrišete.

![Aktiven preklopnik](/img/config/checkout-form-active.png)

Da želite izbrisati obrazec, kliknite na opcijo "Delete" v akcijah obrazca:

![Checkout form delete option](/img/config/checkout-form-delete.png)

Ne pozabite shraniti svoj obrazec za plačevanje!

![Save button](/img/config/checkout-form-save.png)

Da bi dobili shortcode za vaš obrazec, kliknite na "Generate Shortcode" in kopirajte rezultat, ki se prikazuje v modalni okno.

![Save button with shortcode](/img/config/checkout-form-save.png)

### Polje Tabeli cen

Polje **Pricing Table** (Tabela cen) prikazuje vaše izdelke na obrazcu za plačevanje, tako da lahko kupci izbrešče paket. Ko ga uredite, lahko konfigurirate več opcija:

![Pricing Table field settings](/img/config/pricing-table-field-settings.png)

Tako izgleda tabela cen na sprednem registracijskem obrazcu:

![Frontend checkout pricing table](/img/config/frontend-checkout-pricing-table.png)

  * **Products** (Izdelki): Izberite katere izdelke želite prikazati in v kateri vrsti se bodo pojavili.
  * **Force Different Durations** (Načrt različnih trajanja): Ko je ta opcija vključena, se prikazuje vsi izdelki ne glede na to ali imajo prav tako variant cene za trenutno izbran obdobje plačevanja. Ko je ta opcija izklopena (podrazmerna), so skriti izdelki brez varianti za izbrano obdobje.
    ![Pricing table force durations option](/img/config/pricing-table-force-durations.png)
  * **Hide when Pre-Selected** (Skrij pri predizbranih): Tabela cen se skrbi, če je paket že izbran preko URL-ja (npr. `/register/premium`).
  * **Pricing Table Template** (Šablon tabeli cen): Izberite vizualni šablon za tabelo cen (Preprosta lista, Legacy in podobno).

Če dodate izdelek v Pricing Table pred tem, ko obrazec vsebuje polja potrebna za dokončanje plačilnega toka tega izdelka, editor prikazuje opozorilo. Uporabite to opozorilo, da dodate manjkalega potrebnega polja pred objavo ali shranjevanjem sprememb za življenjski registracijski obrazec.

### Dodavanje prekida za odabir razpoložljivosti

Če sta imate konfigurirano [Price Variations](creating-your-first-subscription-product#price-variations) na svojim proizvodima (npr. mesečna i godišnja cene), možete dodati polje **Period Selection** u vašu formular za plaćanje. Ovo polje prikazuje prekidač koji omogućava kupcima da prebacuju između perioda plaćanja, pri čemer se tablica cena dinamički ažurira u realnom vremenu.

#### Korak 1: Konfigurirajte Price Variations na svojim proizvodima

Pre dodavanja polja Period Selection, uverite se da imate konfigurirane price variations za svoje proizvode. Idite na **Ultimate Multisite > Products**, uredite proizvod i navigirajte na karticu **Price Variations** kako biste dodali alternativne perioda plaćanja (npr. Godišnje po popustovoj ceni).

![Tab Price Variations na proizvodu](/img/config/product-price-variations-tab.png)

#### Korak 2: Dodajte polje Period Selection u formular za plaćanje

1. Idite na **Ultimate Multisite > Checkout Forms** i uredite svoj formular za plaćanje.

2. Skrolujte do koraka koji sadrži vaše polje **Pricing Table** i kliknite na **Add new Field**.

3. U dijalogu izbora tipa polja, kliknite na **Period Select**.

![Dijalog Add New Field prikazuje Period Select](/img/config/checkout-form-add-field-dialog.png)

4. Konfigurirajte opcije perioda. Svaka opcija treba:
   * **Duration**: Broj (npr. `1`)
   * **Duration unit**: Tip perioda (Dni, Nedelje, Meseci ili Godine)
   * **Label**: Tekst koji će kupci videti (npr. "Mesečno", "Godišnje")

5. Kliknite na **+ Add Option** da biste dodali više opcija za periode. Ove opcije morajo odgovarati price variations koje ste konfigurirali na svojim proizvodima.

![Podešavanja polja Period Selection](/img/config/period-selection-field-settings.png)

6. Izaberite **Period Selector Template** (Clean je podrazumevani, što prikazuje jednostavan stilizovani selector spremni za prilagođeni CSS).

7. Kliknite na **Save Field**.

#### Korak 3: Postavitev polja nad tablico z cenami

Za najboljše uporabniške izkušnje se prepričajte, da je polje Izbiro obdobja (Period Selection) prikazano **pred** poljem Tablica z cenami (Pricing Table) v vašem koraku nakupa. Lahko lahko polja povlečete in jih ponovno uredate v redju v editoru formularja nakupovnega koraka. Na ta način naj bodo kupci najprej izbrali obdobje plačila, a nato videli cene za to obdobje.

![Checkout form editor showing field order](/img/config/checkout-form-editor-with-fields.png)

#### Kako deluje na sprednji strani (Frontend)

Ko je konfigurirano, bodo kupci, ki obiščejo vašo stran za registracijo, videli izbiro obdobja nad tablico z cenami. Ko kliknejo na drugačno obdobje plačila:

  * Tablica z cenami se trenutno posodobno osredotoči na prikaz cen za izbrano obdobje (ni potreben ponoven obnavljanje strani).
  * Če je **Force Different Durations** (Načrtaj različne dolžine) iskano v polju Tablica z cenami izklopjeno, bodo izdelki brez variacije cene za izbrano obdobje skriti.
  * Če je **Force Different Durations** na voljo, bodo vsi izdelki ostali vidni, tudi če ne imajo variacije za izbrano obdobje (pokažijo svojo osnovno ceno).

#### Predizbiro obdobja plačila preko URL-a

Lahko lahko predizberete izdelek in obdobje plačila prek URL-a. Ultimate Multisite podpira te URL vzorce:

  * `/register/premium` — Predizbere "Premium" izdelek
  * `/register/premium/12` — Predizbere izdelek in 12-mesno dolžino
  * `/register/premium/1/year` — Predizbere izdelek z 1-letno dolžino

### Polje za izbiro šablona (Template Selection Field)

Polje **Template Selection** (Izbiro šablona) omogoča kupcem, da izbere šablon za spletno mesto med nakupovanjem. Zdaj je vključeno po defaultu v šabloni formularjev nakupovnega koraka z eno korakom (single step) in z več koraki (multi-step), ki so dodani v Ultimate Multisite v verziji v2.6.1.

#### Dodavanje polja ručno

Če delate z obrazcem, ki je bil ustvarjen pred verzijo v2.6.1 ali ste ga začeli s praznim šablonom:

1. Pojdite na **Ultimate Multisite > Checkout Forms** in uredite svoj checkout form.
2. Na koraku, kjer se zbirajo podatki o spletni strani (site details), kliknite na **Add new Field**.
3. Iz izbire tipa polja (field type dialog) izberite **Template Selection**.
4. Konfigurišajte polje:
   - **Label** — Naslov, ki ga vidijo uporabniki nad mrežo šablonov (npr. "Izberite šablon za spletno stran").
   - **Required** — Ali morajo uporabniki izbrati šablon pred nadaljnjo uporabo.

#### Kako to deluje

Ko klijent izbere šablon med nakupovanjem, Ultimate Multisite ga uporablja pri nastavljanju njegove nove spletne strani. Šablonih, ki se prikazujejo, potičo iz vaše seznama **Site Templates** (**Ultimate Multisite > Site Templates**). Tukaj se pojavijo le šabloni, ki so označeni kot na voljo za uporabnike.

### Osnovni domeni za checkout-form

Ultimate Multisite v2.13.0 tretira domene, konfigurirane v poljih **Site URL** na checkout formih, kot mrežne osnovne domene (network base domains). Uporabljajte nastavitve dostopnih domen polja, če želite, da uporabniki ustvarjajo strani pod eno ali več deljenimi registracijskimi domeni, kot so `example.com` in `sites.example.com`.

Deljeni osnovni domeni za checkout-formih ne tretja kot mapiranje prilagojenih domen za vsako stran (per-site custom domain mappings). Ko klijent ustvari poddirektno stran na eni od teh osnov, Ultimate Multisite ne ustvarja zapisa mapiranega domena, ki bi naredil deljen host pripadajo le tisto eno stran. Deljeni host ostaja na voljo za sosednje strani, ki uporabljajo isti osnovni domen za checkout form.

Ohranite prilagojene domene za mapirane hoste za vsako stranko uporabo, kot je `customer-example.com`. Ohranite deljene osnovne domene za registracijske hoste, ki jih lahko uporabijo številne strani.

#### Odstranitev polja

Če ne pon드시 pregravarovni shebti (site templates), odstranite pol za izbiro shebtov (Template Selection) iz svoje forme. Kupci bodo prejeli tisti shebt, ki je nastavljen kot zadetni v **Ultimate Multisite > Settings > Site Templates**.
