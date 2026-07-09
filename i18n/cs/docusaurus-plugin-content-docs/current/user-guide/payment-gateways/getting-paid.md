---
title: Jak dostávat zaplaceno
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Jak dostávat platby (v2) {#getting-paid-v2}

_**DŮLEŽITÁ POZNÁMKA: Tento článek se vztahuje k Ultimate Multisite verze 2.x.**_

Ultimate Multisite má vestavěný systém členství a fakturace. Aby náš fakturační systém fungoval, integrovali jsme nejběžnější platební brány používané v e-commerce. Výchozí platební brány v Ultimate Multisite jsou _Stripe_ , _PayPal_ a manuální platba. K přijímání plateb můžete také použít _WooCommerce_ , _GoCardless_ a _Payfast_ instalací příslušných doplňků.

## Základní nastavení {#basic-settings}

Kteroukoli z těchto platebních bran můžete nakonfigurovat v nastavení plateb Ultimate Multisite. Najdete je přes **Ultimate Multisite menu > Nastavení > Platby.**

![Stránka nastavení plateb v Ultimate Multisite zobrazující panel Platby](/img/config/payments-settings-page.png)

Než nastavíte svou platební bránu, podívejte se prosím na základní nastavení plateb, která můžete konfigurovat:

**Vynutit automatické obnov** **ení:** Tím zajistíte, že se platba bude automaticky opakovat na konci každého fakturačního cyklu v závislosti na frekvenci fakturace, kterou uživatel vybral.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 před uložením opakovaného členství se zapnutým automatickým obnovením kontroluje, zda má aktivní brána opakovaně použitelné pověření pro obnovení. Pověření pro obnovení může být předplatné brány, fakturační dohoda, uložený vault token nebo ekvivalentní opakovaně použitelná platební metoda. Pokud brána oznámí, že žádné použitelné pověření neexistuje, Ultimate Multisite členství uloží, ale vypne automatické obnovení a zaznamená stav chybějícího pověření, aby administrátor nebo proces podpory mohl zákazníka požádat o opětovné autorizování platby před datem obnovení.

Tím se zabrání tomu, aby členství vypadalo, že se automaticky obnovuje, když brána může vybírat pouze jednorázové platby. Doplňky bran by měly potvrdit, že opakované checkouty ukládají opakovaně použitelné pověření, zejména když brána podporuje jak jednorázové stržení, tak platební režimy s vaultem nebo předplatným.

**Povolit zkušební období bez platební** **metody:** Pokud je tato možnost zapnutá, váš klient nebude muset během registračního procesu zadávat žádné finanční údaje. Ty budou vyžadovány až po vypršení zkušebního období.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Odeslat fakturu po potvrzení platby:** Tato možnost určuje, zda se má po platbě odeslat faktura. Upozorňujeme, že uživatelé budou mít přístup ke své historii plateb ve Dashboard svého podwebu. Tato možnost se nevztahuje na manuální bránu.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Schéma číslování faktur:** Zde můžete vybrat buď referenční kód platby, nebo schéma sekvenčního číslování. Pokud se rozhodnete pro faktury používat referenční kód platby, nemusíte nic konfigurovat. Pokud se rozhodnete použít schéma sekvenčního číslování, budete muset nakonfigurovat **číslo další faktury** (Toto číslo bude použito jako číslo faktury pro další fakturu vygenerovanou v systému. Při každém vytvoření nové faktury se zvýší o jedna. Můžete ho změnit a uložit, abyste sekvenční číslo faktury resetovali na konkrétní hodnotu) a **prefix čísla faktury.**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Kde brány najdete: {#where-to-find-the-gateways}

Platební brány můžete nastavit na stejné stránce ( **Ultimate Multisite > Nastavení > Platby**). Hned pod **aktivní platební brány** uvidíte: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ a _Manuální_.

![Sekce Aktivní platební brány uvádějící Stripe, Stripe Checkout, PayPal a Manuální](/img/config/payments-active-gateways.png)

Pro každou platební bránu máme samostatný článek, který vás provede kroky jejího nastavení a který najdete na odkazech níže.

Můžete zobrazit a upravit platební údaje:

![Rozhraní úprav platby](/img/admin/payment-edit.png)

Zde je úplný pohled na stránku úprav platby:

![Úplné rozhraní úprav platby](/img/admin/payment-edit-full.png)

Zde je také úplný pohled na nastavení platebních bran:

![Celá stránka nastavení platebních bran](/img/config/settings-payments-gateways-full.png)

**Nastavení brány Stripe**

**Nastavení brány PayPal**** **

**Nastavení manuálních plateb**

Pokud teď chcete jako svou platební bránu použít _WooCommerce_ , _GoCardless_ nebo _Payfast_ , budete muset **nainstalovat a nakonfigurovat jejich doplňky**.

### Jak nainstalovat doplněk WooCommerce: {#how-to-install-the-woocommerce-add-on}

Chápeme, že _Stripe_ a _PayPal_ nejsou dostupné v některých zemích, což omezuje nebo brání uživatelům Ultimate Multisite v efektivním používání našeho pluginu. Proto jsme vytvořili doplněk pro integraci _WooCommerce,_ což je velmi populární e-commerce plugin. Vývojáři po celém světě vytvořili doplňky pro integraci různých platebních bran. Využili jsme toho k rozšíření platebních bran, které můžete používat s fakturačním systémem Ultimate Multisite.

_**DŮLEŽITÉ:** Ultimate Multisite: WooCommerce Integration vyžaduje, aby byl WooCommerce aktivovaný alespoň na vašem hlavním webu._

Nejprve prosím přejděte na stránku doplňků. Najdete ji přes **Ultimate Multisite > Nastavení**. Měli byste vidět tabulku **Doplňky**. Klikněte na **Prohlédnout naše doplňky**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Po kliknutí na **Prohlédnout naše doplňky** budete přesměrováni na stránku doplňků. Zde najdete všechny doplňky Ultimate Multisite. Klikněte na doplněk **Ultimate Multisite: WooCommerce Integration**.

![Stránka doplňků uvádějící doplňky Ultimate Multisite včetně WooCommerce Integration](/img/addons/addons-page.png)

Zobrazí se okno s podrobnostmi doplňku. Stačí kliknout na **Instalovat nyní**.

<!-- Snímek obrazovky není k dispozici: dialog s podrobnostmi doplňku Ultimate Multisite WooCommerce Integration s tlačítkem Instalovat nyní -->

Po dokončení instalace budete přesměrováni na stránku pluginů. Zde stačí kliknout na **Aktivovat v síti** a doplněk WooCommerce bude aktivován ve vaší síti.

<!-- Snímek obrazovky není k dispozici: stránka pluginů s odkazem Aktivovat v síti pro doplněk WooCommerce Integration -->

Po jeho aktivaci, pokud na svém webu stále nemáte nainstalovaný a aktivovaný plugin WooCommerce, obdržíte připomenutí.

<!-- Snímek obrazovky není k dispozici: oznámení administrátorovi připomínající instalaci a aktivaci pluginu WooCommerce -->

Chcete-li si přečíst více o doplňku WooCommerce Integration, **klikněte sem**.

### Jak nainstalovat doplněk GoCardless: {#how-to-install-the-gocardless-add-on}

Kroky pro instalaci doplňku _GoCardless_ jsou téměř stejné jako u doplňku _WooCommerce_. Přejděte prosím na stránku doplňků a vyberte doplněk **Ultimate Multisite: GoCardless Gateway**.

<!-- Snímek obrazovky není k dispozici: stránka doplňků se zvýrazněným doplňkem Ultimate Multisite GoCardless Gateway -->

Zobrazí se okno doplňku. Klikněte na **Instalovat nyní**.

<!-- Snímek obrazovky není k dispozici: dialog s podrobnostmi doplňku Ultimate Multisite GoCardless Gateway s tlačítkem Instalovat nyní -->

Po dokončení instalace budete přesměrováni na stránku pluginů. Zde stačí kliknout na **Aktivovat v síti** a doplněk _GoCardless_ bude aktivován ve vaší síti.

<!-- Snímek obrazovky není k dispozici: stránka pluginů s odkazem Aktivovat v síti pro doplněk GoCardless Gateway -->

Chcete-li se dozvědět, jak začít s bránou _GoCardless_, **přečtěte si tento článek**.

### Jak nainstalovat doplněk Payfast: {#how-to-install-the-payfast-add-on}

Přejděte na stránku doplňků a vyberte doplněk **Ultimate Multisite: Payfast Gateway**.

<!-- Snímek obrazovky není k dispozici: stránka doplňků se zvýrazněným doplňkem Ultimate Multisite Payfast Gateway -->

Zobrazí se okno doplňku. Klikněte na **Instalovat nyní.**

<!-- Snímek obrazovky není k dispozici: dialog s podrobnostmi doplňku Ultimate Multisite Payfast Gateway s tlačítkem Instalovat nyní -->

Po dokončení instalace budete přesměrováni na stránku pluginů. Zde stačí kliknout na **Aktivovat v síti** a doplněk _Payfast_ bude aktivován ve vaší síti.

<!-- Snímek obrazovky není k dispozici: stránka pluginů s odkazem Aktivovat v síti pro doplněk Payfast Gateway -->
