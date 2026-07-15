---
title: Průběh registrace
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# Registrační proces (v2)

_**DŮLEŽITÁ POZNÁMKA: Tento článek se vztahuje k Ultimate Multisite verze 2.x.**_

Uživatelé se mohou do vaší sítě registrovat různými způsoby. Mohou použít váš registrační formulář nebo sdílený odkaz na předem vybraný plán. Zde vám ukážeme, jak se vaši zákazníci mohou registrovat ve vaší síti pomocí dostupných cest a co se stane poté, co se ve vaší síti zaregistrují.

## Použití registračního formuláře: {#using-the-registration-form}

Toto je standardní registrační proces. Vytvoříte registrační stránku s **pokladním formulářem** a právě tam budou vaši zákazníci chodit, aby se zaregistrovali ve vaší síti a předplatili si plán. Můžete mít více registračních stránek, každou s jiným registračním formulářem, pokud chcete.

Výchozí stránka pro registraci je [_**yourdomain.com/register**_](http://yourdomain.com/register), ale můžete ji kdykoli změnit v **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

Poté, co se uživatel dostane na vaši registrační stránku (obvykle kliknutím na tlačítko **Přihlásit se** nebo **Koupit nyní**), uvidí tam váš registrační formulář.

![Registrační formulář zobrazený na registrační stránce](/img/frontend/registration-form.png)

Zde je příklad pokladního formuláře, jak se zobrazuje na frontendu:

![Frontend registrační pokladní formulář](/img/config/checkout-frontend-registration.png)

Stačí, aby vyplnili všechna povinná pole – e-mail, uživatelské jméno, heslo atd. – a zaplatili za plán nebo potvrdili svou e-mailovou adresu, pokud se registrují k bezplatnému plánu nebo placenému plánu se zkušebním obdobím bez platebních údajů.

Na stránce „Děkujeme“ uvidí zprávu, která jim sdělí, zda musí potvrdit svou e-mailovou adresu, nebo zda je jejich web již aktivovaný a mohou ho začít používat.

![Stránka Děkujeme po registraci](/img/frontend/registration-thank-you.png)

Pokud je vyžadováno potvrzení e-mailové adresy, budou muset přejít do své e-mailové schránky a kliknout na ověřovací odkaz. Jejich web nebude aktivován, pokud jejich e-mailová adresa nebude ověřena.

Pokud se zaregistrovali k placenému plánu nebo ověření e-mailu není ve vaší síti povinné, jejich web bude aktivován hned po checkoutu a zobrazí se jim odkaz pro přihlášení do jejich Dashboardu.

![Web aktivován s odkazem pro přihlášení do Dashboardu](/img/frontend/site-activated.png)

## Použití sdíleného odkazu: {#using-a-shareable-link}

Proces registrace pomocí sdíleného odkazu je v zásadě stejný jako registrační formulář, jediný rozdíl je v tom, že pomocí sdíleného odkazu mohou mít vaši zákazníci v pokladním formuláři předem vybraný produkt nebo šablonu webu (viz část Předvýběr produktů a šablon pomocí parametrů URL) nebo třeba přidaný kód kupónu (viz část Použití parametrů URL).

Registrační proces bude stejný: budou muset vyplnit své jméno, uživatelské jméno, e-mailovou adresu, název a titulek webu atd., ale plán nebo šablona webu pro ně už budou předem vybrané.

### Registrace pomocí manuálních plateb: {#registering-using-manual-payments}

Pokud nechcete používat PayPal, Stripe ani žádnou jinou platební bránu nabízenou Ultimate Multisite nebo jeho integracemi doplňků, můžete pro své zákazníky použít manuální platby. Tímto způsobem jim můžete po registraci ve vaší síti vygenerovat fakturu, kterou zaplatí prostřednictvím vámi preferovaného zpracovatele plateb.

Registrační proces bude přesně stejný jako výše, ale na registrační stránce vaši zákazníci uvidí zprávu s informací, že obdrží e-mail s dalšími pokyny k dokončení platby.

![Zpráva o manuální platbě během registrace](/img/frontend/registration-manual-notice.png)

A po dokončení registrace uvidí platební pokyny, které jste nastavili (a také je obdrží e-mailem).

![Platební pokyny zobrazené po registraci](/img/frontend/registration-payment-instructions.png)

Platební pokyny lze změnit v **Ultimate Multisite > Settings > Payments** po zapnutí možnosti platby **Manual**:

![Přepínač manuální platby s polem platebních pokynů](/img/config/manual-gateway-settings.png)

Poté, co vaši zákazníci dokončí manuální platbu a pošlou vám potvrzení, musíte **manuálně potvrdit platbu**, aby se aktivovalo členství zákazníka a web.

Chcete-li to udělat, přejděte na **Ultimate Multisite > Payments** a najděte platbu zákazníka. Stále by měla zobrazovat stav **Pending**.

![Seznam plateb s čekající manuální platbou](/img/admin/payments-list.png)

Klikněte na číslo platby a budete moci změnit její stav na **Completed**.

![Stránka detailu platby](/img/admin/payment-edit.png)

![Změna stavu platby na Completed](/img/admin/payment-status-completed.png)

Po změně stavu na **Completed** byste měli vidět zprávu **Activate membership**. Zapněte tuto možnost na **on**, aby se aktivovalo členství a web spojené s tímto zákazníkem. Poté klikněte na **Save Payment**.

![Přepínač Activate membership a tlačítko Save Payment](/img/admin/payment-activate-membership.png)

Váš zákazník by nyní měl mít přístup k Dashboardu a všem funkcím, které si předplatil.
