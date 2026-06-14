---
title: Prejem novance
sidebar_position: 15
_i18n_hash: 0f45bd2eb659d27199ac9f9752e1a8ae
---
# Plačilnost (v2)

_**POMEMBNO OPOMENILO: Ta članek se nanaša na Ultimate Multisite verzijo 2.x.**_

Ultimate Multisite ima vgrajen sistem za članstva in plačevanje. Da bi naš sistem za plačevanje deloval, smo integrirali najpogostejše platne bramke, ki se uporabljajo v e-trgovini. Standardni platni bramki v Ultimate Multisite so _Stripe_, _PayPal_ in Ručno plačilo (Manual Payment). Lahko lahko uporablja tudi _WooCommerce_, _GoCardless_ in _Payfast_ za prejem plačil z namestitvijo njihovih odgovarjajočih dodatkov.

## Osnovne nastavitve

Iskanje in konfiguriranje katerikoli od teh platnih bramk je mogoče v nastavitvah plačevanja Ultimate Multisite. Lahko to najdete, če grete na **Ultimate Multisite meni > Nastavitve > Plačilo (Payments).**

![Stranica nastavitev plačil v Ultimate Multisite, ki prikazuje panel za plačila](/img/config/payments-settings-page.png)

Pred temeljitvijo svoj platni bramka, se pozabite na osnovne nastavitve plačila, ki lahko konfigurirate:

**Force auto-rene (Forci avtomatno obnovo):** To zagotavlja, da bo plačilo samodejno ponovljeno na koncu vsakega ciklusa plačevanja, odvisno od frekvence plačevanja, ki jo uporabnik je izbral.

<!-- Screenshot unavailable: Nastavitev preklopnika Force Auto-Renew na strani nastavitev plačila -->

Ultimate Multisite v verziji 2.13.0 preverja, ali aktivni bramka imajo ponovno uporabno podatke za obnovo pred shranjevanjem ponavljajočega seznama z vključeno avtomatno obnovo. Podatki za obnovo lahko predstavljajo naročilo na bramko, pogodbo o plačevanju, shranjen token skladišča (vault token) ali ekvivalentno podatke za ponovno uporabo metode plačanja. Če bramka opoazi, da ne obstaja uporabna podatkovni podatki, Ultimate Multisite shranjuje članstvo, vendar vklopi avtomatno obnovo in beleži stanje z manjkalimi podatki, tako da lahko administrator ali pot za podporo prosili stranko, da ponovno autorizira plačilo pred datumom obnove.

To preprečuje, da se članstvo ne bo pojavilo kot avtomatsko obnovljeno, če je gateway lahko sprejme samo jednokratne plačbe. Dodatki za gateway morajo potrditi, da se ponavljajo plačila shranjujejo ponovno uporabno podatke (credential), zlasti ko gateway podpiranja tako jednokrotno zadrževanje kot tudi načine plačev s shranjenimi/predskupni plačbi.

**Določite dovoljenje za preizkušnje brez plačilne metode** **metoda:** Z enabledo te opcije ne bo vaš stranke morala dodati kakršne koli finančne podatke med proces registracije. To bo potrebno le enkrat, ko poteka preizkusni obdobje.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Pošlji račun na potrditev plačila:** Ta vam daje možnost, ali želite po plačbi poslati račun. Opazite, da bodo uporabniki imeli dostop do svoje zgodovine plačil pod svojim dashboardom subsite. Ta opcija ni za Manual Gateway.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Splošna shema številčevanja računov:** Tukaj lahko izberete bodisi referenčni kod plačila ali sekvencno številko. Če izberete, da boste uporabili referenčni kod plačila za svoje račune, ne morate nič konfigurirati. Če pa izberete sekvenco številk, boste morali konfigurirati **nasledno številko računa** (Ta številka bo uporabljena kot številka računa za naslednji generirani račun na sistemu. Se poveča za eno vsakrat, ko se ustvari novi račun. Lahko jo spremenite in shranite, da boste lahko resetirali sekvenco številk računa na določeno vrednost) ter **predlog številke računa**.

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Prikaz številke računa in predskupca številke računa, ko je izbrana Sekvencijalna številka -->

## Kje najdete bramske (gateways):

Možete nastavit bramske za plačilo na isto stran (**Ultimate Multisite > Settings > Payments**). Pravipoškodno pod **aktivnimi bramskimi plačilni sistemi** boste videli: _Stripe_, _Stripe_ Checkout, _PayPal_ in _Manual_.

![Razdelek Aktivne bramske plačilne sisteme z seznamom Stripe, Stripe Checkout, PayPal in Manual](/img/config/payments-active-gateways.png)

Imamo posvečen članek za vsako bramsko plačilo, ki vam bo vodil skozi korake nastavitve, ki ga lahko najdete na povezavah spodaj.

Lahko vidite in uredite podatke o plačilu:

![Splošna vprašna interfejs plačila](/img/admin/payment-edit.png)

Tukaj je celoten pregled strani za urejanje plačila:

![Splošna vprašna interfejs nastavitve bramskih sistemov plačil](/img/admin/payment-edit-full.png)

Tukaj je tudi celoten pregled nastavitve bramskih sistemov plačil:

![Splošna stran nastavitve bramskih sistemov plačil](/img/config/settings-payments-gateways-full.png)

**Nastavitev Stripe bramske**

**Nastavitev PayPal bramske**** **

**Nastavitev ručnih plačil**

Zdaj, če želite uporabiti _WooCommerce_, _GoCardless_ ali _Payfast_ kot svoj bramski sistem za plačilo, boste morali **instalirati in konfigurirati njihove dodatke (add-ons)**.

### Kako instalirati dodatek WooCommerce:

Razumemo, da sta _Stripe_ in _PayPal_ v nekaterih državah ne obstojata, kar omejuje ali moti uporabnike Ultimate Multisite pri učinkovitem uporabi našega plugin. Zato smo ustvarili dodatek za integracijo _WooCommerce_, ki je zelo popularni e-commerce plugin. Razvijalci po svetu so ustvarili dodatke za integracijo različnih bramskih sistemov plačil z njim. Uporabljamo to, da razširimo bramske sisteme plačil, ki jih lahko uporabljate z sistemom računovodstva Ultimate Multisite.

**POMEMBNO:** Integracija Ultimate Multisite: WooCommerce zahteva, da je WooCommerce aktiviran vsaj na vašem glavnem spletni strani.

Preden se začnete, prosim, idite na stran za dodatke (add-ons). Lahko jo najdete, če grete do **Ultimate Multisite > Settings**. Treba vam biti vidna tabela z dodatki (**Add-ons**). Kliknite na **Check our Add-ons**.

<!-- Screenshot unavailable: Tabela z dodatki v strani nastavitve Ultimate Multisite s povezavo Check our Add-ons -->

Po klikanju na **Check our Add-ons** boste preusmerjeni na stran za dodatke. Tukaj najdete vse Ultimate Multisite dodatke. Kliknite na dodatek **Ultimate Multisite: WooCommerce Integration**.

![Stran z dodatki, ki prikazuje Ultimate Multisite dodatke vključno z integracijo WooCommerce](/img/addons/addons-page.png)

Odpre se pojavno okno s podrobnostmi dodatka. Samo kliknite na **Install Now** (Instaliraj zdaj).

<!-- Screenshot unavailable: Dialog s podrobnostmi dodatka Ultimate Multisite WooCommerce Integration z gumbom Install Now -->

Po dokončanemu namestitvi boste preusmerjeni na stran za pluginove. Tukaj samo kliknite na **Network Activate** (Aktiviraj omrežje), in dodatek WooCommerce bo aktiviran na vašem omrežju.

<!-- Screenshot unavailable: Stran z pluginovi s povezavo Network Activate za dodatek integracije WooCommerce -->

Po aktivaciji, če še vedno niste imeli vključene in aktivirane WooCommerce pluginove na svoji spletni strani, boste prejeli opomnik.

<!-- Screenshot unavailable: Admin obvestilo, ki opominja administratorja za namestitev in aktivacijo WooCommerce pluginove -->

Za več informacij o dodatku integraciji WooCommerce, **kliknite tukaj**.

### Kako namestiti dodatek GoCardless:

Postopek za instalacijo dodatka _GoCardless_ je praktično isti kot pri dodtku _WooCommerce_. Predvsem samo gre, da se na strani zadevnikov (add-ons page) izberete dodatek **Ultimate Multisite: GoCardless Gateway**.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite GoCardless Gateway add-on highlighted -->

Ogled dodatka se odpre. Kliknite na **Install Now** (Instaliraj zdaj).

<!-- Screenshot unavailable: Ultimate Multisite GoCardless Gateway add-on details dialog with Install Now button -->

Po dokončanju instalacije boste preusmerjeni na stran zadevnikov (plugins page). Tamo samo kliknite na **Network Activate** in dodatek _GoCardless_ bo aktiviran na vašeta omrežju.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the GoCardless Gateway add-on -->

Za učenje kako začeti z _GoCardless_ gateway, **brskajte to članek**.

### Kako instalirati dodatek Payfast:

Idi na stran zadevnikov (add-ons page) in izberite dodatek **Ultimate Multisite: Payfast Gateway**.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite Payfast Gateway add-on highlighted -->

Ogled dodatka se odpre. Kliknite na **Install Now** (Instaliraj zdaj).

<!-- Screenshot unavailable: Ultimate Multisite Payfast Gateway add-on details dialog with Install Now button -->

Po dokončanju instalacije boste preusmerjeni na stran zadevnikov (plugins page). Tamo samo kliknite na **Network Activate** in dodatek _Payfast_ bo aktiviran na vašeta omrežju.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the Payfast Gateway add-on -->
