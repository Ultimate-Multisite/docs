---
title: Prejemanje plačil
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Prejemanje plačil (v2)

_**POMEMBNO OBVESTILO: Ta članek se nanaša na Ultimate Multisite različico 2.x.**_

Ultimate Multisite ima vgrajen sistem članstva in obračunavanja. Da bi naš sistem obračunavanja deloval, smo integrirali najpogostejše plačilne prehode, ki se uporabljajo v e-trgovini. Privzeti plačilni prehodi v Ultimate Multisite so _Stripe_ , _PayPal_ in ročno plačilo. Uporabite lahko tudi _WooCommerce_ , _GoCardless_ in _Payfast_ za prejemanje plačil z namestitvijo njihovih ustreznih dodatkov.

## Osnovne nastavitve

Kateri koli od teh plačilnih prehodov lahko konfigurirate v nastavitvah plačil Ultimate Multisite. Najdete jih tako, da odprete **meni Ultimate Multisite > Nastavitve > Plačila.**

![Stran z nastavitvami plačil v Ultimate Multisite, ki prikazuje ploščo Plačila](/img/config/payments-settings-page.png)

Preden nastavite svoj plačilni prehod, si oglejte osnovne nastavitve plačil, ki jih lahko konfigurirate:

**Vsili samodejno podaljšanje:** To bo zagotovilo, da se bo plačilo samodejno ponovilo ob koncu vsakega obračunskega cikla, odvisno od pogostosti obračunavanja, ki jo je izbral uporabnik.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 pred shranjevanjem ponavljajočega se članstva z omogočenim samodejnim podaljševanjem preveri, ali ima aktivni prehod ponovno uporabno poverilnico za podaljšanje. Poverilnica za podaljšanje je lahko naročnina prehoda, dogovor o obračunavanju, shranjen vault token ali enakovredna ponovno uporabna plačilna metoda. Če prehod sporoči, da uporabna poverilnica ne obstaja, Ultimate Multisite shrani članstvo, vendar izklopi samodejno podaljševanje in zabeleži stanje manjkajoče poverilnice, da lahko skrbnik ali podporni postopek stranko pozove k ponovni avtorizaciji plačila pred datumom podaljšanja.

To prepreči, da bi članstvo delovalo, kot da se samodejno podaljšuje, kadar lahko prehod pobira samo enkratna plačila. Dodatki za prehode morajo potrditi, da ponavljajoče se blagajne shranijo ponovno uporabno poverilnico, zlasti kadar prehod podpira tako enkratni zajem plačila kot načine plačila z vault/subscription.

**Dovoli preizkusna obdobja brez plačilne** **metode:** Ko je ta možnost omogočena, vaši stranki med registracijskim postopkom ne bo treba dodati nobenih finančnih podatkov. To bo zahtevano šele, ko preizkusno obdobje poteče.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Pošlji račun ob potrditvi plačila:** To vam omogoča izbiro, ali želite po plačilu poslati račun ali ne. Upoštevajte, da bodo uporabniki imeli dostop do svoje zgodovine plačil v nadzorni plošči svojega podmesta. Ta možnost ne velja za ročni prehod.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Shema številčenja računov:** Tukaj lahko izberete bodisi referenčno kodo plačila bodisi zaporedno shemo številčenja. Če se odločite za uporabo referenčne kode plačila za svoje račune, vam ni treba ničesar konfigurirati. Če se odločite za uporabo zaporedne sheme številčenja, boste morali konfigurirati **naslednjo številko računa** (ta številka bo uporabljena kot številka računa za naslednji račun, ustvarjen v sistemu. Vsakič, ko je ustvarjen nov račun, se poveča za ena. Lahko jo spremenite in shranite, da ponastavite zaporedno številko računa na določeno vrednost) in **predpono številke računa.**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Kje najti prehode:

Plačilne prehode lahko nastavite na isti strani ( **Ultimate Multisite > Nastavitve > Plačila**). Tik pod **aktivnimi plačilnimi prehodi** boste lahko videli: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ in _Manual_.

![Razdelek Aktivni plačilni prehodi s seznamom Stripe, Stripe Checkout, PayPal in Manual](/img/config/payments-active-gateways.png)

Za vsak plačilni prehod imamo namenski članek, ki vas bo vodil skozi korake nastavitve; najdete jih na spodnjih povezavah.

Ogledate si in urejate lahko podrobnosti plačila:

![Vmesnik za urejanje plačila](/img/admin/payment-edit.png)

Tukaj je celoten pogled strani za urejanje plačila:

![Celoten vmesnik za urejanje plačila](/img/admin/payment-edit-full.png)

Tukaj je tudi celoten pogled nastavitev plačilnih prehodov:

![Celotna stran z nastavitvami plačilnih prehodov](/img/config/settings-payments-gateways-full.png)

**Nastavitev prehoda Stripe**

**Nastavitev prehoda PayPal**** **

**Nastavitev ročnih plačil**

Če želite zdaj kot svoj plačilni prehod uporabiti _WooCommerce_ , _GoCardless_ ali _Payfast_ , boste morali **namestiti in konfigurirati njihove dodatke**.

### Kako namestiti dodatek WooCommerce:

Razumemo, da _Stripe_ in _PayPal_ nista na voljo v nekaterih državah, kar omejuje ali ovira uporabnike Ultimate Multisite pri učinkoviti uporabi našega vtičnika. Zato smo ustvarili dodatek za integracijo _WooCommerce,_ ki je zelo priljubljen vtičnik za e-trgovino. Razvijalci po vsem svetu so ustvarili dodatke za integracijo različnih plačilnih prehodov z njim. To smo izkoristili za razširitev plačilnih prehodov, ki jih lahko uporabljate z obračunskim sistemom Ultimate Multisite.

_**POMEMBNO:** Ultimate Multisite: WooCommerce Integration zahteva, da je WooCommerce aktiviran vsaj na vašem glavnem spletnem mestu._

Najprej pojdite na stran z dodatki. Najdete jo tako, da odprete **Ultimate Multisite > Nastavitve**. Videti bi morali tabelo **Dodatki**. Kliknite **Preverite naše dodatke**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Po kliku na **Preverite naše dodatke** boste preusmerjeni na stran z dodatki. Tukaj najdete vse dodatke Ultimate Multisite. Kliknite dodatek **Ultimate Multisite: WooCommerce Integration**.

![Stran z dodatki s seznamom dodatkov Ultimate Multisite, vključno z WooCommerce Integration](/img/addons/addons-page.png)

Odprlo se bo okno s podrobnostmi dodatka. Samo kliknite **Namesti zdaj**.

<!-- Posnetek zaslona ni na voljo: pogovorno okno s podrobnostmi dodatka Ultimate Multisite WooCommerce Integration z gumbom Namesti zdaj -->

Ko je namestitev končana, boste preusmerjeni na stran z vtičniki. Tukaj samo kliknite **Omrežno aktiviraj** in dodatek WooCommerce bo aktiviran v vašem omrežju.

<!-- Posnetek zaslona ni na voljo: stran z vtičniki s povezavo Omrežno aktiviraj za dodatek WooCommerce Integration -->

Po aktivaciji boste prejeli opomnik, če na svojem spletnem mestu še vedno nimate nameščenega in aktiviranega vtičnika WooCommerce.

<!-- Posnetek zaslona ni na voljo: skrbniško obvestilo, ki skrbnika opominja, naj namesti in aktivira vtičnik WooCommerce -->

Če želite prebrati več o dodatku WooCommerce Integration, **kliknite tukaj**.

### Kako namestiti dodatek GoCardless:

Koraki za namestitev dodatka _GoCardless_ so skoraj enaki kot pri dodatku _WooCommerce_. Pojdite na stran z dodatki in izberite dodatek **Ultimate Multisite: GoCardless Gateway**.

<!-- Posnetek zaslona ni na voljo: stran z dodatki z označenim dodatkom Ultimate Multisite GoCardless Gateway -->

Odprlo se bo okno dodatka. Kliknite **Namesti zdaj**.

<!-- Posnetek zaslona ni na voljo: pogovorno okno s podrobnostmi dodatka Ultimate Multisite GoCardless Gateway z gumbom Namesti zdaj -->

Ko je namestitev končana, boste preusmerjeni na stran z vtičniki. Tukaj samo kliknite **Omrežno aktiviraj** in dodatek _GoCardless_ bo aktiviran v vašem omrežju.

<!-- Posnetek zaslona ni na voljo: stran z vtičniki s povezavo Omrežno aktiviraj za dodatek GoCardless Gateway -->

Če želite izvedeti, kako začeti z vmesnikom _GoCardless_, **preberite ta članek**.

### Kako namestiti dodatek Payfast:

Pojdite na stran z dodatki in izberite dodatek **Ultimate Multisite: Payfast Gateway**.

<!-- Posnetek zaslona ni na voljo: stran z dodatki z označenim dodatkom Ultimate Multisite Payfast Gateway -->

Odprlo se bo okno dodatka. Kliknite **Namesti zdaj.**

<!-- Posnetek zaslona ni na voljo: pogovorno okno s podrobnostmi dodatka Ultimate Multisite Payfast Gateway z gumbom Namesti zdaj -->

Ko je namestitev končana, boste preusmerjeni na stran z vtičniki. Tukaj samo kliknite **Omrežno aktiviraj** in dodatek _Payfast_ bo aktiviran v vašem omrežju.

<!-- Posnetek zaslona ni na voljo: stran z vtičniki s povezavo Omrežno aktiviraj za dodatek Payfast Gateway -->
