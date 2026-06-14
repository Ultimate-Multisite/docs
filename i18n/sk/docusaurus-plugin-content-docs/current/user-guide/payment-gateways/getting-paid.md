---
title: Odbieranie platby
sidebar_position: 15
_i18n_hash: 0f45bd2eb659d27199ac9f9752e1a8ae
---
# Vyplatnosť (v2)

_**DÁVAČNÝ POZNÁTEK: Tento článok sa týka Ultimate Multisite verzie 2.x.**_

Ultimate Multisite má v sobie zabudovanú siatku pre členstvo a fakturáciu. Aby sme mohli fungovať, integrujete najbežnejšie platobné brány používané v e-commerce. Predvodnými platobnými bránami v Ultimate Multisite sú _Stripe_, _PayPal_ a Manuálna platba. Môžete tiež použiť _WooCommerce_, _GoCardless_ a _Payfast_ na prijímanie platení pomocou ich príslušných doplnkov (add-ons).

## Základné nastavenia

Ak chcete skonfigurovať akýkoľvek z týchto platobných brán, môžete to urobiť v nastaveniach platobných systémov Ultimate Multisite. Môžete sa na to dostať cez **Menu Ultimate Multisite > Nastavenia > Platby.**

![Strana s nastaveniami platieb v Ultimate Multisite zobrazujúca panel Platby](/img/config/payments-settings-page.png)

Pred tým, ako nastavíte svoju platobnú bránu, pozrite si základné nastavenia platby, ktoré môžete skonfigurovať:

**Force auto-rene (Zabezpečiť automatické obnovenie):** Toto zabezpečí, že platba bude automaticky opakovať sa na konci každého fakturačného cyklu v závislosti od frekvencie fakturácie, ktorú používateľ vybral.

<!-- Screenshot unavailable: Nastavenie prepínačom Force Auto-Renew na strane nastavení platieb -->

Ultimate Multisite verzia 2.13.0 skontroluje, či aktívna brána má použiteľný kľúč pre obnovu (renewal credential), než uloží opakujúce sa členstvo s automatickým obnovením zapnutým. Kľúč pre obnovu môže byť predplatné brány, dohodu o fakturácii, uložený token v zabezpečenom sviešti (vault token) alebo ekvivalentný použiteľný platobný metóda. Ak brána hlási, že neexistuje použitý kľúč, Ultimate Multisite ukladá členstvo, ale vypne automatické obnovenie a zaznamená stav chýbajúceho kľúča tak, aby admin alebo systém podporu mohol požiadať zákazníka o ponovný autorizáciu platby pred dátumom obnovenia.

**Povoli skúšobné obdobia bez platby** **metóda:** S týmto možnosťou, ak je tento prístup zapnutý, váš klient nemusí pri registrácii zadať žiadne finančné informácie. Toto bude potrebné len raz, keď skončí skúšobné obdobie.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Odosla faktúry po potvrdení platby:** Tento prístup vám dá možnosť, či chcete po platbe poslať faktúru alebo nie. Poznámte si, že používatelia budú mať prístup k svojej histórii platení v dashboarde svojho subportálu. Táto možnosť sa nestane na manuálnom Gatewayu.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Schema číselenia faktúr:** Tu môžete vybrať buď kód odoznamovacieho čísla platby, alebo sekvenčné číslovanie. Ak si vyberiete kód odoznamacieho čísla pre svoje faktúry, nemusíte nič konfiguráve. Ak si vyberiete sekvenčné číslovanie, budete musieť skonfigurovať **nasledujúce číslo faktúry** (Toto číslo bude používané ako číslo faktúry pre nasledujúcu generovanú faktúru v systéme. Zvyšuje sa o jeden každý raz, keď je vytvorená nová faktúra. Môžete ho zmeniť a uložiť na reset sekvenčného čísla faktúry na konkrétnu hodnotu) a **predponu čísla faktúry**.

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Kde nájsť gatewayy:

Môžete nastaviť platobné gatewayy na vami na nejakej samej stránke (**Ultimate Multisite > Settings > Payments**). Pod sekciou **aktívne platobné gatewayy** uvidíte: _Stripe_, _Stripe_ Checkout, _PayPal_ a _Manual_.

![Aktívna sekcia platobných gatewayov zobrazujúca Stripe, Stripe Checkout, PayPal a Manual](/img/config/payments-active-gateways.png)

Máme špecialny článok pre každý platobný gateway, ktorý vás krok za krokom navedie v jeho nastavení. Môžete ho nájsť na odkazoch nižšie.

Možete vidieť a upraviť detaily platby:

![Rozhranie na úpravu platby](/img/admin/payment-edit.png)

Tu je plný prehľad stránky na úpravu platby:

![Plný prehľad rozhrania na úpravu platby](/img/admin/payment-edit-full.png)

Tu je tiež plný prehľad nastavení platobných gatewayov:

![Plný prehľad nastavení platobných gatewayov](/img/config/settings-payments-gateways-full.png)

**Nastavenie Stripe gatewayu**

**Nastavenie PayPal gatewayu**** **

**Nastavenie manuálnych platieb**

Teraz, ak chcete používať _WooCommerce_, _GoCardless_ alebo _Payfast_ ako svoj platobný gateway, budete musieť **instalovať a nakonfigúrovať ich add-ony**.

### Ako nainštalovať add-on WooCommerce:

Rozumieme, že _Stripe_ a _PayPal_ nie sú k dispozícii v niektorých krajinách, čo obmedzuje alebo bráni používateľom Ultimate Multisite efektívne používať náš plugin. Preto sme vytvorili add-on pre integráciu s _WooCommerce_, ktorý je veľmi populárnym e-commerce pluginom. Vývojári po celom svete vytvorili add-ony na integráciu rôznych platobných gatewayov s ním. Využili sme to, aby sme rozšírili platobné gatewayy, ktoré môžete použiť s fakturačným systémom Ultimate Multisite.

**DÔLEŽITÉ:** Integrácia s WooCommerce v Ultimate Multisite vyžaduje, aby bol WooCommerce aktivovaný na vašej hlavnej sieti.

Prv pridať sa do sekcie doplnkov (add-ons). Môžete to urobiť cez **Ultimate Multisite > Settings**. Uvidíte tabuľku **Add-ons** a kliknite na **Check our Add-ons**.

<!-- Screenshot unavailable: Tabuľka doplnkov v paneli Ultimate Multisite Settings s odkazom Check our Add-ons -->

Po kliknutí na **Check our Add-ons** budete presmerovaní na stránku doplnkov, kde nájdete všetky doplnky Ultimate Multisite. Kliknite na doplnok **Ultimate Multisite: WooCommerce Integration**.

![Stránka doplnkov s zoznamom doplnkov Ultimate Multisite vrátane integrácie s WooCommerce](/img/addons/addons-page.png)

Otvori sa okno s informáciami o doplnku. Stačí kliknúť na **Install Now** (Stiahnuť teraz).

<!-- Screenshot unavailable: Dialog s informáciami o doplnku Ultimate Multisite WooCommerce Integration s tlačidlom Install Now -->

Po dokončení instalácie budete presmerovaní na stránku pluginov. Tu kliknite len na **Network Activate** (Aktivovať v sieti) a doplnok WooCommerce sa aktivuje na vašej sieti.

<!-- Screenshot unavailable: Stránka pluginov s odkazom Network Activate pre doplnok integrácie s WooCommerce -->

Po aktivácii, ak máte stále neinstalovaný a neaktivovaný plugin WooCommerce na vašej webovej stránke, dostanete upozornenie.

<!-- Screenshot unavailable: Administratívne upozornenie, ktoré pomeňuje administrátora o instalácii a aktivácii pluginu WooCommerce -->

Pre viac informácií o doplnku integrácie s WooCommerce kliknite **tu**.

### Ako nainštalovať doplnok GoCardless:

Kroky na nainštaláciu doplnku _GoCardless_ sú prakticky rovnaké ako pri inštalácii doplnku _WooCommerce_. Prejdite na stránku doplnkov a vyberte doplnok **Ultimate Multisite: GoCardless Gateway**.

<!-- Screenshot unavailable: Stránka doplnkov s zvýrazneným doplnkom Ultimate Multisite GoCardless Gateway -->

Otvori sa okno doplnku. Kliknite na **Install Now** (Inštalovať teraz).

<!-- Screenshot unavailable: Detailné okno doplnku Ultimate Multisite GoCardless Gateway s tlačidlom Install Now -->

Po dokončení inštalácie budete presmerovaní na stránku pluginov. Tu stačí kliknúť na **Network Activate** (Aktivovať v sieti) a doplnok _GoCardless_ sa aktivuje na vašej sieti.

<!-- Screenshot unavailable: Stránka pluginov s odkazom Network Activate pre GoCardless Gateway doplnok -->

Aby ste sa naučili, ako začať s bránou _GoCardless_, **prečítajte si tento článok**.

### Ako nainštalovať doplnok Payfast:

Prejdite na stránku doplnkov a vyberte doplnok **Ultimate Multisite: Payfast Gateway**.

<!-- Screenshot unavailable: Stránka doplnkov s zvýrazneným doplnkom Ultimate Multisite Payfast Gateway -->

Otvori sa okno doplnku. Kliknite na **Install Now** (Inštalovať teraz).

<!-- Screenshot unavailable: Detailné okno doplnku Ultimate Multisite Payfast Gateway s tlačidlom Install Now -->

Po dokončení inštalácie budete presmerovaní na stránku pluginov. Tu stačí kliknúť na **Network Activate** (Aktivovať v sieti) a doplnok _Payfast_ sa aktivuje na vašej sieti.

<!-- Screenshot unavailable: Stránka pluginov s odkazom Network Activate pre Payfast Gateway doplnok -->
