---
title: Nastavenie manuálnych platieb
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# Konfigurácia manuálnych platieb (v2)

_**DÁVAJTE VÝSLEDKY: Tento článok sa týka Ultimate Multisite verzie 2.x.**_

Manuálne platby sú spôsob, ako môžete ponúknuť iné metódy platob, ak nie je k dispozícii **Stripe** alebo **PayPal** pre vašich používateľov. Môžete to robiť cez wire transfer (wire bankový prevod) alebo akýkoľvek iný platobný spôsob dostupný lokálne pre vaše používateľov.

## Ako vymeži manuálne platby

Konfigurácia manuálnych platieb je veľmi jednoduchá. Musíte len vymežiť, že ich vymežte pod sekciou **Payment Gateways** a zadajte podrobné pokyny, ako má používateľ platbu poslať.

Pracujte najprv do sekcie **Ultimate Multisite > Settings > Payments**. Pod **Payment Gateways** prepnite vypínač **Manual** na zapnutý (on). Uvidíte, že sa pre vás zobrazí okno s **Payment Instructions**.

Do toho okna pridalte informácie, ktoré bude váš zákazník potrebovať na platbu. Môžete tam zadať údaje vášho bankového účtu a e-mail, aby si zákazník mohol poslať vám potvrdenie o platbe, napríklad.

![Prepínač manuálnej platobnej brány s textovým polom pre pokyny](/img/config/manual-gateway-expanded.png)

Tu je rozhranie nastavení manuálnej brány:

![Nastavenia manuálnej brány](/img/config/manual-gateway-settings.png)

Po dokončení konfigurácie kliknite len na **Save Settings** a hotové. Keď sa používatelia zaregistrujú do vašej siete, uvidia správu informujúcu ich, že dostanú pokyny k dokončeniu nákupu.

![Správa o potvrdení registráции, ktorá informuje používateľa, že dostane pokyny na platbu](/img/frontend/registration-manual-notice.png)

A dostanú tiež správu na vašej stránke **Thank You** s vašimi pokynmi na platbu.

<!-- Screenshot unavailable: Stránka Thank You zobrazujúca pokyny na platbu po dokončení objednávky -->

## Potvrdenie manuálnych platieb

Aby ste potvrdili manuálnu platbu, prejdite do menu **Payments** (Platby) v ľavej lište. Tam uvidíte všetky platby na vašej sieti a ich detaily, vrátane ich **status**. Manuálna platba bude vždy mať stav **Pending** (Očakáva). Zmiana to môžete vykonať len manuálne.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

Prejdite na stránku platby kliknutím na **reference code** (referenčný kód). Na tejto stránke máte všetky detaily očakávajúcej platby, ako je reference ID, produkty, časové značky a viac.

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

V pravej kolone môžete zmeniť stav platby. Zmena na **Completed** (Dokončené) a premienenie možnosti **Activate Membership** (Aktivovať členstvo) umožní aktiváciu stránky vášho zákazníka a jeho členstvo bude aktívne.

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
