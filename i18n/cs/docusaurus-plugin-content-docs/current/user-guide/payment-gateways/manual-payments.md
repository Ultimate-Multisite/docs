---
title: Nastavení ručních plateb
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Nastavení ručních plateb (v2)

_**DŮLEŽITÁ POZNÁMKA: Tento článek se vztahuje k Ultimate Multisite verze 2.x.**_

Ruční platby jsou způsob, jak uživatelům nabídnout jiné platební metody, pokud pro ně není k dispozici **Stripe** nebo **PayPal**. Může jít o bankovní převod nebo jakoukoli jinou platební metodu dostupnou uživatelům lokálně.

## Jak povolit ruční platby {#how-to-enable-manual-payments}

Nastavení ruční platby je velmi snadné. Stačí ji povolit v platebních branách a zadat podrobné pokyny, jak má uživatel platbu odeslat.

Nejprve přejděte na **Ultimate Multisite > Settings > Payments**. Pod **Payment Gateways** zapněte **Manual**. Uvidíte, že se vám zobrazí pole **Payment Instructions**.

Do tohoto pole přidejte informace, které bude zákazník potřebovat k provedení platby. Může jít například o údaje k vašemu bankovnímu účtu a váš e-mail, aby vám zákazník mohl poslat potvrzení o platbě.

![Přepínač brány ruční platby s textovým polem Payment Instructions](/img/config/manual-gateway-expanded.png)

Zde je rozhraní nastavení ruční brány:

![Nastavení ruční brány](/img/config/manual-gateway-settings.png)

Po nastavení stačí kliknout na **Save Settings** a je hotovo. Když se uživatelé zaregistrují do vaší sítě, uvidí zprávu, která jim sdělí, že obdrží vaše pokyny k dokončení nákupu.

![Potvrzovací zpráva registrace informující uživatele, že obdrží platební pokyny](/img/frontend/registration-manual-notice.png)

A také obdrží zprávu na vaší stránce **Thank You** s vašimi platebními pokyny.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Potvrzování ručních plateb {#confirming-manual-payments}

Chcete-li potvrdit ruční platbu, přejděte do nabídky **Payments** v levém panelu. Tam uvidíte všechny platby ve své síti a jejich podrobnosti, včetně jejich **stavu**. Ruční platba bude mít vždy stav **Pending**, dokud jej ručně nezměníte.

![Seznam plateb zobrazující čekající ruční platbu](/img/admin/payments-list.png)

Na stránku platby vstoupíte kliknutím na **referenční kód**. Na této stránce máte všechny podrobnosti o čekající platbě, jako je referenční ID, produkty, časová razítka a další.

![Stránka podrobností platby zobrazující referenční kód, produkty a součty](/img/admin/payment-edit.png)

V pravém sloupci můžete změnit stav platby. Změna na **Completed** a **zapnutí možnosti Activate Membership** povolí web vašeho zákazníka a jeho členství bude aktivní.

![Stránka úprav platby se stavem nastaveným na Completed a přepínačem Activate Membership](/img/admin/payment-activate-membership.png)
