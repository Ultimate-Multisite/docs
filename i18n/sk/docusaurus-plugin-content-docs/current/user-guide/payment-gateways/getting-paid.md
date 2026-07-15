---
title: Prijímanie platieb
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Prijímanie platieb (v2)

_**DÔLEŽITÁ POZNÁMKA: Tento článok sa týka Ultimate Multisite verzie 2.x.**_

Ultimate Multisite má vstavaný systém členstiev a fakturácie. Aby náš fakturačný systém fungoval, integrovali sme najbežnejšie platobné brány používané v e-commerce. Predvolené platobné brány v Ultimate Multisite sú _Stripe_ , _PayPal_ a Manuálna platba. Platby môžete prijímať aj cez _WooCommerce_ , _GoCardless_ a _Payfast_ nainštalovaním ich príslušných doplnkov.

## Základné nastavenia {#basic-settings}

Ktorúkoľvek z týchto platobných brán môžete nakonfigurovať v nastaveniach platieb Ultimate Multisite. Nájdete ich cez **menu Ultimate Multisite > Nastavenia > Platby.**

![Stránka nastavení platieb v Ultimate Multisite zobrazujúca panel Platby](/img/config/payments-settings-page.png)

Pred nastavením platobnej brány si pozrite základné nastavenia platieb, ktoré môžete nakonfigurovať:

**Vynútiť automatické obno** **venie:** Toto zabezpečí, že platba sa automaticky zopakuje na konci každého fakturačného cyklu v závislosti od frekvencie fakturácie, ktorú si používateľ vybral.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 pred uložením opakovaného členstva so zapnutým automatickým obnovením kontroluje, či má aktívna brána opätovne použiteľné oprávnenie na obnovenie. Oprávnením na obnovenie môže byť predplatné brány, fakturačná dohoda, uložený vault token alebo ekvivalentná opätovne použiteľná platobná metóda. Ak brána oznámi, že neexistuje žiadne použiteľné oprávnenie, Ultimate Multisite členstvo uloží, ale vypne automatické obnovenie a zaznamená stav chýbajúceho oprávnenia, aby administrátor alebo podporný proces mohol požiadať zákazníka o opätovnú autorizáciu platby pred dátumom obnovenia.

Tým sa zabráni tomu, aby členstvo vyzeralo, že sa automaticky obnoví, keď brána dokáže vyberať iba jednorazové platby. Doplnky brán by mali potvrdiť, že opakované platby pri checkout ukladajú opätovne použiteľné oprávnenie, najmä keď brána podporuje jednorazové strhnutie aj režimy platieb cez vault/predplatné.

**Povoliť skúšobné obdobia bez platobnej** **metódy:** Keď je táto možnosť zapnutá, váš klient nebude musieť počas procesu registrácie pridávať žiadne finančné údaje. Bude to potrebné až po uplynutí skúšobného obdobia.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Odoslať faktúru po potvrdení platby:** Táto možnosť vám umožňuje rozhodnúť, či sa má po platbe odoslať faktúra. Upozorňujeme, že používatelia budú mať prístup k svojej histórii platieb vo svojom dashboarde podstránky. Táto možnosť sa nevzťahuje na Manual Gateway.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Schéma číslovania faktúr:** Tu môžete vybrať buď referenčný kód platby, alebo schému postupného číslovania. Ak sa rozhodnete používať pre svoje faktúry referenčný kód platby, nemusíte nič konfigurovať. Ak sa rozhodnete používať schému postupného číslovania, budete musieť nakonfigurovať **číslo nasledujúcej faktúry** (toto číslo sa použije ako číslo faktúry pre nasledujúcu faktúru vygenerovanú v systéme. Pri každom vytvorení novej faktúry sa zvýši o jedna. Môžete ho zmeniť a uložiť, aby ste postupné číslo faktúry resetovali na konkrétnu hodnotu) a **predponu čísla faktúry.**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Kde nájsť brány: {#where-to-find-the-gateways}

Platobné brány môžete nastaviť na tej istej stránke ( **Ultimate Multisite > Nastavenia > Platby**). Hneď pod **aktívnymi platobnými bránami** uvidíte: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ a _Manuálna_.

![Sekcia Aktívne platobné brány so zoznamom Stripe, Stripe Checkout, PayPal a Manuálna](/img/config/payments-active-gateways.png)

Pre každú platobnú bránu máme samostatný článok, ktorý vás prevedie krokmi jej nastavenia a ktorý nájdete na odkazoch nižšie.

Podrobnosti platby môžete zobraziť a upraviť:

![Rozhranie úpravy platby](/img/admin/payment-edit.png)

Tu je úplné zobrazenie stránky úpravy platby:

![Úplné rozhranie úpravy platby](/img/admin/payment-edit-full.png)

Tu je aj úplné zobrazenie nastavení platobných brán:

![Celá stránka nastavení platobných brán](/img/config/settings-payments-gateways-full.png)

**Nastavenie brány Stripe**

**Nastavenie brány PayPal**** **

**Nastavenie manuálnych platieb**

Ak teraz chcete používať _WooCommerce_ , _GoCardless_ alebo _Payfast_ ako svoju platobnú bránu, budete musieť **nainštalovať a nakonfigurovať ich doplnky**.

### Ako nainštalovať doplnok WooCommerce: {#how-to-install-the-woocommerce-add-on}

Chápeme, že _Stripe_ a _PayPal_ nie sú dostupné v niektorých krajinách, čo obmedzuje alebo bráni používateľom Ultimate Multisite efektívne používať náš plugin. Preto sme vytvorili doplnok na integráciu _WooCommerce,_ čo je veľmi populárny e-commerce plugin. Vývojári po celom svete vytvorili doplnky na integráciu rôznych platobných brán do neho. Využili sme to na rozšírenie platobných brán, ktoré môžete používať s fakturačným systémom Ultimate Multisite.

_**DÔLEŽITÉ:** Ultimate Multisite: WooCommerce Integration vyžaduje, aby bol WooCommerce aktivovaný aspoň na vašej hlavnej stránke._

Najprv prejdite na stránku doplnkov. Nájdete ju cez **Ultimate Multisite > Nastavenia**. Mali by ste vidieť tabuľku **Doplnky**. Kliknite na **Pozrieť naše doplnky**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Po kliknutí na **Pozrieť naše doplnky** budete presmerovaní na stránku doplnkov. Tu nájdete všetky doplnky Ultimate Multisite. Kliknite na doplnok **Ultimate Multisite: WooCommerce Integration**.

![Stránka doplnkov so zoznamom doplnkov Ultimate Multisite vrátane WooCommerce Integration](/img/addons/addons-page.png)

Zobrazí sa okno s podrobnosťami doplnku. Stačí kliknúť na **Inštalovať teraz**.

<!-- Snímka obrazovky nedostupná: dialógové okno s podrobnosťami doplnku Ultimate Multisite WooCommerce Integration s tlačidlom Inštalovať teraz -->

Po dokončení inštalácie budete presmerovaní na stránku zásuvných modulov. Tu stačí kliknúť na **Aktivovať v sieti** a doplnok WooCommerce sa aktivuje vo vašej sieti.

<!-- Snímka obrazovky nedostupná: stránka zásuvných modulov s odkazom Aktivovať v sieti pre doplnok WooCommerce Integration -->

Po jeho aktivácii, ak ešte nemáte zásuvný modul WooCommerce nainštalovaný a aktivovaný na svojej webovej stránke, dostanete pripomienku.

<!-- Snímka obrazovky nedostupná: oznámenie správcu pripomínajúce správcovi, aby nainštaloval a aktivoval zásuvný modul WooCommerce -->

Ak si chcete prečítať viac o doplnku WooCommerce Integration, **kliknite sem**.

### Ako nainštalovať doplnok GoCardless: {#how-to-install-the-gocardless-add-on}

Kroky na inštaláciu doplnku _GoCardless_ sú takmer rovnaké ako pri doplnku _WooCommerce_. Prejdite, prosím, na stránku doplnkov a vyberte doplnok **Ultimate Multisite: GoCardless Gateway**.

<!-- Snímka obrazovky nedostupná: stránka doplnkov so zvýrazneným doplnkom Ultimate Multisite GoCardless Gateway -->

Zobrazí sa okno doplnku. Kliknite na **Inštalovať teraz**.

<!-- Snímka obrazovky nedostupná: dialógové okno s podrobnosťami doplnku Ultimate Multisite GoCardless Gateway s tlačidlom Inštalovať teraz -->

Po dokončení inštalácie budete presmerovaní na stránku zásuvných modulov. Tu stačí kliknúť na **Aktivovať v sieti** a doplnok _GoCardless_ sa aktivuje vo vašej sieti.

<!-- Snímka obrazovky nedostupná: stránka zásuvných modulov s odkazom Aktivovať v sieti pre doplnok GoCardless Gateway -->

Ak sa chcete dozvedieť, ako začať s bránou _GoCardless_, **prečítajte si tento článok**.

### Ako nainštalovať doplnok Payfast: {#how-to-install-the-payfast-add-on}

Prejdite na stránku doplnkov a vyberte doplnok **Ultimate Multisite: Payfast Gateway**.

<!-- Snímka obrazovky nedostupná: stránka doplnkov so zvýrazneným doplnkom Ultimate Multisite Payfast Gateway -->

Zobrazí sa okno doplnku. Kliknite na **Inštalovať teraz.**

<!-- Snímka obrazovky nedostupná: dialógové okno s podrobnosťami doplnku Ultimate Multisite Payfast Gateway s tlačidlom Inštalovať teraz -->

Po dokončení inštalácie budete presmerovaní na stránku zásuvných modulov. Tu stačí kliknúť na **Aktivovať v sieti** a doplnok _Payfast_ sa aktivuje vo vašej sieti.

<!-- Snímka obrazovky nedostupná: stránka zásuvných modulov s odkazom Aktivovať v sieti pre doplnok Payfast Gateway -->
