---
title: Obravnava davkov
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# Obravnava davkov

Ultimate Multisite ima modul za pobiranje davkov vgrajen v naš osnovni plugin, zato lahko, če morate pobirati prometne davke za svoje pakete, pakete storitev in storitve, to preprosto storite brez nameščanja kakršnih koli dodatkov.

Za podjetja s sedežem v Evropi ponujamo **dodatek**, ki doda orodja in funkcije za boljšo **podporo skladnosti z VAT**.

Ultimate Multisite ne vlaga ali nakazuje davkov vladi v vašem imenu; preprosto vam pomagamo pobrati ustrezne davke ob času transakcije. **Davke boste še vedno morali nakazati sami.**

## Omogočanje pobiranja davkov

Pobiranje davkov privzeto ni omogočeno. Če ga želite omogočiti, morate iti na **Ultimate Multisite > Nastavitve > Davki** in preklopiti nastavitev Omogoči davke.

![Preklop Omogoči davke na vrhu strani z nastavitvami davkov](/img/config/settings-taxes-enable.png)

Tukaj je celoten pogled strani z nastavitvami davkov:

![Celotna stran z nastavitvami davkov](/img/config/settings-taxes-full.png)

Ogledate si lahko tudi nastavitve davkov za posamezne izdelke:

![Nastavitve davkov za izdelke](/img/config/settings-taxes.png)

### Davek izključen v primerjavi z davkom vključenim

Privzeto so vse cene vaših izdelkov brez davka, kar pomeni, da davki **niso vključeni** v ceno izdelka. Če ugotovimo, da mora stranka plačati davke za določen nakup, bomo davke dodali **na vrh** vmesnega seštevka.

Če želite, da so davki vključeni v ceno vašega izdelka, lahko to storite tako, da omogočite nastavitev **Vključen davek**.

![Vrstica preklopa Vključen davek pod nastavitvijo Omogoči davke](/img/config/settings-taxes-inclusive.png)

Ne pozabite **shraniti** sprememb, ki ste jih naredili.

###

## Ustvarjanje davčnih stopenj

Ko omogočite pobiranje davkov, boste morali z našim urejevalnikom davčnih stopenj ustvariti davčne stopnje za določene lokacije.

Do urejevalnika lahko dostopate s klikom na gumb **Upravljanje davčnih stopenj** v stranski vrstici strani z nastavitvami davkov.

![Povezava Upravljanje davčnih stopenj v plošči Davčne stopnje na strani z nastavitvami](/img/config/settings-taxes-manage-rates.png)

Na strani urejevalnika davčnih stopenj lahko dodate nove davčne stopnje s klikom na gumb **Dodaj novo vrstico**.

![Tabela urejevalnika davčnih stopenj z gumbom Dodaj novo vrstico na vrhu](/img/config/tax-rates-editor.png)

Vsaki davčni stopnji boste morali dodeliti **naslov** (uporabljen na računih). Nato lahko izberete **državo** (obvezno), **zvezno državo/pokrajino** in **mesto** (obe neobvezni), kjer bo ta davek zaračunan. Na koncu dodajte **davčno stopnjo v odstotkih**.

### Davčne kategorije

Ustvarite lahko tudi več davčnih kategorij, da dodate različne davčne stopnje za različne vrste izdelkov.

Kliknite **Dodaj novo davčno kategorijo**, nato vpišite ime kategorije in pritisnite **Ustvari**.

![Gumb Dodaj novo davčno kategorijo na vrhu urejevalnika davčnih stopenj](/img/config/tax-categories-add.png)

![Vnosno polje Ime davčne kategorije v modalnem oknu za ustvarjanje kategorije](/img/config/tax-categories-create-modal.png)

Za brskanje po kategorijah kliknite **Preklopi** in izberite kategorijo, v katero želite dodati nove davke.

![Spustni gumb Preklopi za menjavo med davčnimi kategorijami](/img/config/tax-categories-switch.png)

![Spustni izbirnik davčne kategorije, ki prikazuje razpoložljive kategorije](/img/config/tax-categories-select.png)

Davčno kategorijo za določen izdelek lahko nastavite tako, da greste na **stran za urejanje izdelka** in nato na zavihek Davki.

![Zavihek davkov izdelka z davčno kategorijo in preklopom obdavčljivo](/img/config/product-taxes.png)

Na istem zaslonu lahko izklopite preklop **Je obdavčljivo?**, da Ultimate Multisite obvestite, da za ta določen izdelek ne sme pobirati davkov.

## Podpora za evropski VAT

Kot omenjeno prej, imamo za stranke v EU na voljo dodatek, ki imajo zaradi evropskih predpisov o VAT dodatne zahteve.

Naša orodja za VAT pomagajo pri nekaj pomembnih stvareh:

  * Preprosto nalaganje stopenj EU VAT;

  * Zbiranje in preverjanje številke VAT - ter obrnjeno davčno obveznost za subjekte, oproščene VAT (kot so podjetja z veljavnimi številkami VAT);

Če želite namestiti ta dodatek, pojdite na **Ultimate Multisite > Nastavitve** in nato kliknite povezavo v stranski vrstici **Oglejte si naše dodatke**.

![Stranska vrstica strani z nastavitvami s povezavo Oglejte si naše dodatke](/img/config/settings-taxes-addons-link.png)

Preusmerjeni boste na našo stran z dodatki. Tam lahko poiščete **Ultimate Multisite VAT dodatek** in ga namestite.

<!-- Posnetek zaslona ni na voljo: ploščica VAT dodatka na strani z dodatki -->

<!-- Posnetek zaslona ni na voljo: pogovorno okno Namesti zdaj za VAT dodatek -->

Nato pojdite na **Omrežna administracija > Plugins** in aktivirajte ta dodatek po celotnem omrežju.

<!-- Posnetek zaslona ni na voljo: dejanje Omrežno aktiviraj za VAT dodatek na strani Plugins -->

Če se vrnete na **zavihek Nastavitve davkov**, boste videli nove razpoložljive možnosti. Preklopite možnost **Omogoči podporo za VAT**, da omogočite nova orodja za VAT. Ne pozabite **shraniti** svojih nastavitev!

<!-- Posnetek zaslona ni na voljo: preklop Omogoči podporo za VAT v nastavitvah davkov po aktivaciji dodatka -->

### Pridobivanje davčnih stopenj VAT

Eno od orodij, ki jih doda naša integracija, je možnost nalaganja davčnih stopenj za države članice EU. To lahko storite tako, da po omogočitvi podpore za EU VAT obiščete stran urejevalnika davčnih stopenj.

Na dnu strani boste videli možnosti pridobivanja VAT. Izbira vrste stopnje in klik na gumb **Posodobi stopnje EU VAT** bosta pridobila in samodejno izpolnila tabelo z davčnimi stopnjami za vsako državo članico EU. Nato jo morate le še shraniti.

![Gumb Posodobi stopnje EU VAT na dnu urejevalnika davčnih stopenj](/img/config/tax-rates-vat-pull.png)

Vrednosti lahko po pridobivanju tudi uredite. To storite tako, da preprosto uredite vrstico tabele, ki jo potrebujete, in kliknete za shranjevanje novih vrednosti.

### Preverjanje VAT

Ko je podpora za VAT omogočena, bo Ultimate Multisite v obrazec za zaključek nakupa dodal dodatno polje, pod poljem naslova za obračun. Polje se bo prikazalo samo strankam, ki se nahajajo v EU.

<!-- Posnetek zaslona ni na voljo: polje Številka VAT na obrazcu za zaključek nakupa na sprednjem delu pod naslovom za obračun -->

Ultimate Multisite bo nato preveril VAT Number in če se vrne kot veljavna, se uporabi mehanizem obrnjene davčne obveznosti, davčna stopnja pa se za to naročilo nastavi na 0 %.
