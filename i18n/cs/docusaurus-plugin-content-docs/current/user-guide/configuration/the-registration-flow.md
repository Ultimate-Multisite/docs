---
title: Registrační proces
sidebar_position: 3
_i18n_hash: 73484be47ec750747cb9d94ea874d97f
---
# Registrační proces (v2)

_**DŮLEŽITÁ POZNÁMKA: Tento článek se týká Ultimate Multisite verze 2.x.**_

Uživatelé se mohou do vaší sítě registrovat různými způsoby. Mohou použít váš registrační formulář nebo sdílený odkaz na předem vybraný tarif. Zde vám ukážeme, jak se vaši zákazníci mohou registrovat ve vaší síti pomocí dostupných možností a co se stane po jejich registraci.

## Použití registračního formuláře:

Toto je standardní registrační proces. Vytvoříte registrační stránku s **checkout formulářem**, na které se vaši zákazníci budou registrovat do vaší sítě a přihlašovat k odběru tarifu. Můžete mít více registračních stránek, každou s jiným registračním formulářem, pokud chcete.

Výchozí stránka pro registraci je [_**vasedomena.cz/register**_](http://yourdomain.com/register), ale toto můžete kdykoli změnit v **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

Poté, co uživatel přijde na vaši registrační stránku (obvykle kliknutím na tlačítko **Přihlásit se** nebo **Koupit**), uvidí váš registrační formulář.

![Registrační formulář zobrazený na registrační stránce](/img/config/checkout-forms-list.png)

Stačí, aby vyplnili všechna povinná pole – e-mail, uživatelské jméno, heslo atd. – a zaplatili za tarif, nebo potvrdili svou e-mailovou adresu, pokud se registrují na bezplatný tarif nebo placený tarif se zkušební dobou bez platebních údajů.

Na stránce „Děkujeme" uvidí zprávu, která jim sdělí, zda potřebují potvrdit svou e-mailovou adresu, nebo zda je jejich web již aktivován a mohou ho začít používat.

![Stránka Děkujeme po registraci](/img/config/checkout-form-editor.png)

Pokud je vyžadováno potvrzení e-mailové adresy, budou muset přejít do své e-mailové schránky a kliknout na ověřovací odkaz. Jejich web nebude aktivován, dokud nebude jejich e-mailová adresa ověřena.

Pokud se zaregistrovali na placený tarif nebo ověření e-mailu není ve vaší síti povinné, jejich web bude aktivován ihned po dokončení objednávky a zobrazí se jim odkaz pro přihlášení do jejich dashboardu.

![Aktivovaný web s odkazem pro přihlášení do dashboardu](/img/config/checkout-form-editor.png)

## Použití sdíleného odkazu:

Proces registrace pomocí sdíleného odkazu je v podstatě stejný jako u registračního formuláře, jediný rozdíl je, že při použití sdíleného odkazu mohou mít vaši zákazníci v checkout formuláři předem vybraný produkt nebo šablonu webu (viz sekce Předvýběr produktů a šablon pomocí URL parametrů) nebo možná přidaný slevový kód (viz sekce Použití URL parametrů).

Registrační proces bude stejný: budou muset vyplnit své jméno, uživatelské jméno, e-mailovou adresu, název a titulek webu atd., ale tarif nebo šablona webu pro ně bude již předem vybrána.

### Registrace s využitím manuálních plateb:

Pokud nechcete používat PayPal, Stripe nebo jinou platební bránu nabízenou Ultimate Multisite nebo jeho doplňkovými integracemi, můžete pro své zákazníky použít manuální platby. Tímto způsobem jim můžete po registraci do vaší sítě vygenerovat fakturu k úhradě přes váš preferovaný platební procesor.

Registrační proces bude přesně stejný jako výše, ale na registrační stránce vaši zákazníci uvidí zprávu, že obdrží e-mail s dalšími pokyny k dokončení platby.

![Zpráva o manuální platbě během registrace](/img/config/settings-payment-gateways.png)

A po dokončení registrace uvidí platební pokyny, které jste nastavili (a také je obdrží na svůj e-mail).

![Platební pokyny zobrazené po registraci](/img/config/settings-payment-gateways.png)

Platební pokyny lze změnit v **Ultimate Multisite > Settings > Payments** po zapnutí možnosti **Manual** platby:

![Přepínač manuální platby s polem pro platební pokyny](/img/config/settings-payment-gateways.png)

Poté, co vaši zákazníci dokončí manuální platbu a pošlou vám potvrzení, musíte **ručně potvrdit platbu**, abyste aktivovali členství a web zákazníka.

Chcete-li to provést, přejděte na **Ultimate Multisite > Payments** a najděte platbu zákazníka. Měla by stále zobrazovat stav **Pending**.

![Seznam plateb s čekající manuální platbou](/img/admin/payments-list.png)

Klikněte na číslo platby a budete moci změnit její stav na **Completed**.

![Stránka s detaily platby](/img/admin/payments-list.png)

![Změna stavu platby na Completed](/img/admin/payments-list.png)

Po změně stavu na **Completed** by se měla zobrazit zpráva **Activate membership**. Přepněte tuto možnost **na zapnuto**, abyste aktivovali členství a web spojený s tímto zákazníkem. Poté klikněte na **Save Payment**.

![Přepínač Activate membership a tlačítko Save Payment](/img/admin/payments-list.png)

Váš zákazník by nyní měl mít přístup k dashboardu a všem funkcím, které si předplatil.
