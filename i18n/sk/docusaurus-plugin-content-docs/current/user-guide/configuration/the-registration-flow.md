---
title: Postup registráции
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# Registračný tok (v2) {#the-registration-flow-v2}

_**DÔLEŽITÉU POZNÁMKA: Tento článok sa týka Ultimate Multisite verzie 2.x.**_

Používatelia môžu sa registrovať na vašej sieti rôznymi spôsobmi. Môžu použiť váš formulár na registrácia alebo zdieľateľný odkaz na predvolený plán. Tu vám ukážeme, ako môžu vaši zákazníci sa zaregistrovať na vašej sieti pomocou dostupných ciest a čo sa stane po ich registrácii na vašej sieti.

## Používanie formulára na registrácia: {#using-the-registration-form}

Toto je štandardný proces registráции. Vytvoríte stránku na registrácia s **formulárom na objednávku (checkout form)**, a to bude miesto, kam sa vaši zákazníci dostanú, aby sa zaregistrovali na vašej sieti a podali sa plánu. Môžete mať viacero stránok na registrácia, každá s iným formulárom v závislosti od toho, ak chcete.

Počiatkom stránkou pre registráciu je [_**vašdomena.com/register**_](http://yourdomain.com/register), ale môžete toto v anytime zmeniť v **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

Keď sa používateľ dostane na vašu stránku na registrácia (obvykle kliknutím na tlačidlo **Sign in** alebo **Buy now**), uvidí tam váš formulár na registrácia.

![Registračný formulár zobrazený na stránke na registrácia](/img/frontend/registration-form.png)

Tu je príklad formulára na objednávku tak, ako sa zobrazuje v prednej časti (frontend):

![Predný formulár na objednávku pre registráciu](/img/config/checkout-frontend-registration.png)

Všetko, čo musia urobiť, je vyplniť všetky povinné polia – e-mail, používateľské meno, heslo atď... – a zaplatiť za plán alebo potvrdiť svoju e-mailovú adresu, ak sa registrujete na bezplatný plán alebo platný plán s možnosťou skúšobného obdobia bez informácií o platbe.

Na stránke „Ďakujeme“ uvidia správu, ktorá im ukáže, či je potrebné potvrdiť svoju e-mailovú adresu alebo aká je stav ich webovej stránky a či môžu začať s používaním.

![Ďakujeme za registráciu po vytvorení stránky](/img/frontend/registration-thank-you.png)

Ak je potrebná potvrdenie e-mailovej adresy, budú musieť kliknúť v svojej schránke na e-mail a kliknúť na odkaz na overenie. Vaša webová stránka sa neaktivuje, ak sa ich e-mailová adresa nezoverí.

Ak sa zaregistrovali na plno platný plán alebo nie je povinné potvrdenie e-mailu v vašej sieti, ich webová stránka bude aktivovaná okamžite po dokončení objednávky a zobrazí im odkaz na prihlásenie do ich dashboardu.

![Stránka aktivovaná s odkazom na prihlásenie do dashboardu](/img/frontend/site-activated.png)

## Používanie zdieľateľného odkazu: {#using-a-shareable-link}

Proces registráции pomocou zdieľateľného odkazu je v podstate ten istý ako formulár registrácii, jediné zmenu je, že pri použití zdieľateľného odkazu môžu vaši zákazníci mať produkt alebo šablon webovej stránky predodôvodnený v formulári objednávky (referencie na sekciu Predodôvodnenie produktov a šablon pomocou URL parametrov) alebo možno pridaný kód kuponu (referencie na sekciu Používanie URL parametrov).

Proces registráции bude ten istý: budú musieť vyplniť svoje meno, používateľské meno, e-mailovú adresu, názov webovej stránky a titul atď..., ale plán alebo šablona webovej stránky im bude už predodôvodnená.

### Registrácia pomocou manuálnych platieb: {#registering-using-manual-payments}

Ak nechcete používať PayPal, Stripe alebo akýkoľvek iný platobný gateway ponúkaný Ultimate Multisite alebo jeho doplnkami, môžete použiť manuálne platby pre svoje zákazníkov. Týmto spôsobom si môžete vygenerovať faktúru, ktorú im môžu zaplatiť na vašom preferovanom platobnom procesore po registrácii v vašej sieti.

Proces registráции bude úplne ten istý ako vyššie, ale na stránke registrácii budú zákazníci vidieť správu, že dostanú e-mail s ďalšími inštrukciami k dokončeniu platby.

![Manuálne platobné správy počas registráции](/img/frontend/registration-manual-notice.png)

A po dokončení registráции uvidia pokyny na platbu, ktoré ste nastavili (a obdrhajú ich aj v e-mailu).

![Pokyny na platbu zobrazené po registrácii](/img/frontend/registration-payment-instructions.png)

Pokyny na platbu môžete zmeniť v **Ultimate Multisite > Settings > Payments** po zapnutí možnosti **Manual**:

![Prełączanie manuálnej platby s polom pokynov na platbu](/img/config/manual-gateway-settings.png)

Po tom, čo váš zákazník dokončí manuálnu platbu a pošle vám potvrdenie, musíte si **manuálne potvrditi platbu**, aby sa aktivovala členstvo zákazníka a web.

Na to sa naviažte do **Ultimate Multisite > Payments** a nájdite platbu zákazníka. Mala by stále zobrazovať stav **Pending** (Očakáva).

![Zoznam platieb s manuálnou platbou v priebehu](/img/admin/payments-list.png)

Kliknite na číslo platby a budete môcť zmeniť jeho stav na **Completed** (Dokončené).

![Strana s informáciami o plate](/img/admin/payment-edit.png)

![Zmena stavu platby na Completed](/img/admin/payment-status-completed.png)

Po zmenení stavu na **Completed** uvidíte správu **Activate membership** (Aktivovať členstvo). Pretož tento možnosť zapnite, aby ste aktivovali členstvo a web spojený s týmto zákazníkom. Potom kliknite na **Save Payment** (Uložiť platbu).

![Prełączanie aktivačného členstva a tlačidlo Save Payment](/img/admin/payment-activate-membership.png)

Váš zákazník bude teraz môcť prístup k dashboardu a všetkým funkciám, ktoré si zakúpil.
