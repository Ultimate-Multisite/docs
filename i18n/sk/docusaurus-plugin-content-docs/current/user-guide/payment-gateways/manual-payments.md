---
title: Nastavenie manuálnych platieb
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Nastavenie manuálnych platieb (v2)

_**DÔLEŽITÁ POZNÁMKA: Tento článok sa vzťahuje na Ultimate Multisite verzie 2.x.**_

Manuálne platby sú spôsob, ako ponúknuť iné platobné metódy, ak **Stripe** alebo **PayPal** nie sú pre vašich používateľov dostupné. Môže ísť o bankový prevod alebo akúkoľvek inú platobnú metódu dostupnú vašim používateľom lokálne.

## Ako povoliť manuálne platby

Nastavenie manuálnej platby je veľmi jednoduché. Stačí ju povoliť v platobných bránach a zadať podrobné pokyny, ako má používateľ odoslať platbu.

Najprv prejdite na **Ultimate Multisite > Nastavenia > Platby**. Pod **Platobné brány** zapnite prepínač **Manuálne**. Uvidíte, že sa vám zobrazí pole **Pokyny k platbe**.

Do tohto poľa pridajte informácie, ktoré bude váš zákazník potrebovať na vykonanie platby. Môžu to byť napríklad údaje o vašom bankovom účte a váš e-mail, aby vám zákazník mohol poslať potvrdenie o platbe.

![Prepínač manuálnej platobnej brány s textovou oblasťou Pokyny k platbe](/img/config/manual-gateway-expanded.png)

Tu je rozhranie nastavení manuálnej brány:

![Nastavenia manuálnej brány](/img/config/manual-gateway-settings.png)

Po nastavení stačí kliknúť na **Uložiť nastavenia** a je hotovo. Keď sa používatelia zaregistrujú do vašej siete, zobrazí sa im správa, že dostanú vaše pokyny na dokončenie nákupu.

![Potvrdzovacia správa registrácie informujúca používateľa, že dostane pokyny k platbe](/img/frontend/registration-manual-notice.png)

A správu s vašimi pokynmi k platbe dostanú aj na vašej stránke **Ďakujeme**.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Potvrdzovanie manuálnych platieb

Ak chcete potvrdiť manuálnu platbu, prejdite do menu **Platby** na ľavej lište. Tam môžete vidieť všetky platby vo vašej sieti a ich podrobnosti vrátane ich **stavu**. Manuálna platba bude mať vždy stav **Čaká na spracovanie**, kým ho manuálne nezmeníte.

![Zoznam platieb zobrazujúci čakajúcu manuálnu platbu](/img/admin/payments-list.png)

Na stránku platby vstúpte kliknutím na **referenčný kód**. Na tejto stránke máte všetky podrobnosti o čakajúcej platbe, ako napríklad referenčné ID, produkty, časové pečiatky a ďalšie.

![Stránka podrobností platby zobrazujúca referenčný kód, produkty a súčty](/img/admin/payment-edit.png)

V pravom stĺpci môžete zmeniť stav platby. Zmenou na **Dokončené** a **zapnutím možnosti Aktivovať členstvo** povolíte stránku vášho zákazníka a jeho členstvo bude aktívne.

![Stránka úpravy platby so stavom nastaveným na Dokončené a prepínačom Aktivovať členstvo](/img/admin/payment-activate-membership.png)
