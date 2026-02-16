---
title: Nastavení ručních plateb
sidebar_position: 20
_i18n_hash: 1046fae1e97189ace8966057920da6eb
---
# Nastavení manuálních plateb (v2)

_**DŮLEŽITÁ POZNÁMKA: Tento článek se týká Ultimate Multisite verze 2.x.**_

Manuální platby vám umožňují nabídnout další platební metody v případě, že **Stripe** nebo **PayPal** nejsou pro vaše uživatele dostupné. Může se jednat o bankovní převod nebo jakoukoli jinou platební metodu, která je vašim uživatelům lokálně k dispozici.

## Jak povolit manuální platby

Nastavení manuálních plateb je velmi snadné. Stačí je povolit v nastavení platebních bran a zadat podrobné pokyny, jak má uživatel platbu odeslat.

Nejprve přejděte do **Ultimate Multisite > Nastavení > Platby**. V sekci **Platební brány** zapněte možnost **Manuální**. Zobrazí se vám pole **Platební pokyny**.

Do tohoto pole přidejte informace, které váš zákazník potřebuje k provedení platby. Mohou to být například údaje o vašem bankovním účtu a váš e-mail, aby vám zákazník mohl zaslat potvrzení o platbě.

![Přepínač manuální platební brány a pole s platebními pokyny](/img/config/settings-payment-gateways.png)

Po nastavení stačí kliknout na **Uložit nastavení** a máte hotovo. Když se uživatelé zaregistrují do vaší sítě, uvidí zprávu, že obdrží vaše pokyny k dokončení nákupu.

![Zpráva o manuální platbě zobrazená při registraci](/img/config/settings-payment-gateways.png)

Zprávu s vašimi platebními pokyny také uvidí na stránce **Děkujeme**.

![Stránka Děkujeme zobrazující platební pokyny](/img/config/settings-payment-gateways.png)

## Potvrzování manuálních plateb

Pro potvrzení manuální platby přejděte do menu **Platby** v levém panelu. Zde vidíte všechny platby ve vaší síti a jejich podrobnosti, včetně jejich **stavu**. Manuální platba bude mít vždy stav **Čeká na vyřízení**, dokud ji ručně nezměníte.

![Seznam plateb zobrazující čekající manuální platbu](/img/admin/payments-list.png)

Kliknutím na **referenční kód** vstoupíte na stránku s detaily platby. Na této stránce najdete všechny podrobnosti o čekající platbě, jako je referenční ID, produkty, časová razítka a další.

![Stránka s detaily platby včetně referenčního kódu a produktů](/img/admin/payments-list.png)

V pravém sloupci můžete změnit stav platby. Změnou na **Dokončeno** a zapnutím možnosti **Aktivovat členství** povolíte web vašeho zákazníka a jeho členství bude aktivní.

![Změna stavu platby na Dokončeno s přepínačem Aktivovat členství](/img/admin/payments-list.png)
