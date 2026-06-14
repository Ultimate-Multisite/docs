---
title: Odosť e-mailov a rozšielanie
sidebar_position: 11
_i18n_hash: e9ddc461d32299505e4a7a5af491cff6
---
# Odeslávanie e-mailov a rozšielení (v2)

_**DÔLEŽITÉ UPOZORNENIE: Tento článok sa týka Ultimate Multisite verzie 2.x.**_

Ultimate Multisite má funkciu, ktorá vám umožní komunikovať s vašimi klientmi pomocou odoslania e-mailov konkrétnemu používateľovi alebo skupine používateľov, ako aj o zasielaní oznámení na ich admin dashboard pre rozšielanie správ.

## Pridajte si oznámenia administrátora do dashboardu vašich klientov s pomocou rozšielania (Broadcasts)

Použitím funkcie rozšielania Ultimate Multisite môžete pridať **oznámenia administrátora** do admin dashboard vášho podsitového siete.

Toto je veľmi užitočné, ak potrebujete urobiť oznámenie ako napríklad o údržbe systému alebo o ponukaniu nových produktov či služieb vašim existujúcim používateľom. Tak sa bude oznámenie administrátora na dashboarde vášho používateľa vypoistenia.

<!-- Screenshot unavailable: Admin notice broadcast shown on a customer's subsite dashboard -->

Aby ste začali s pridaním oznámenia administrátora, prejdite do admin dashboard vašej siete a pod menu **Ultimate Multisite** nájdete možnosť **Broadcasts**.

![Broadcasts list page in Ultimate Multisite admin](/img/admin/broadcasts-list.png)

Môžete tiež upraviť existujúce rozšielania:

![Broadcast edit interface](/img/admin/broadcast-edit.png)

Z tejto stránky kliknite na tlačidlo **Add Broadcast** (Pridať rozšielanie) v hornej časti.

Toto otvorí okno modálu Pridať rozšielanie, kde si môžete vybrať, aký typ rozšielania chcete poslať.

Prejdite ďalej a vyberte **Message** (Vzťahovanie správ) a potom kliknite na tlačidlo **Next Step** (Ďalší krok).

![Add broadcast modal with the Message option selected](/img/admin/broadcast-add-message.png)

Nasledujúce okno vás požiada o výber buď **Target customer** (Cílový klient), alebo **Target product** (Cílo produkt). Poznámte, že môžete vybrať viac ako jeden používateľa alebo viac ako jeden produkt.

Aby vyhľadávanie používateľského účtu alebo produktu bolo možné, musíte v poli začať s zadávaním kľúčového slova.

Pod polom **Typ správy** môžete vybrať farbu upozornenia. Toto zvýrazní dôležitosť vašej správy.

Potom môžete kliknúť na **Ďalý krok**.

![Pole cieľových zákazníkov, cieľového produktu a typu správy pre rozosilanie správ](/img/admin/broadcast-message-targets.png)

Nasledujúce okno je miesto, kde začnete pisyvať svoju správu, zadávajúc tému a obsah/správu, ktorú chcete rozoslať používateľom.

![Editor témy a obsahu správy na kroku vytvárania](/img/admin/broadcast-edit.png)

Po vytvorení správy môžete kliknúť na tlačidlo **Odoslať**.

A to je všetko. Upozornenie administrátora sa okamžite zobrazí na dashboarde vášho používateľa.

## Odosielanie e-mailov vašim zákazníkom

Použitím funkcie rozosilania Ultimate Multisite môžete poslať e-mail svojím používateľom. Máte možnosť poslať e-mail len konkrétnym používateľom alebo cíli sa na konkrétnu skupinu používateľov na základe produktu alebo plánu, pod ktorým sú predplatní.

Aby ste začali rozosilanie e-mailov, prejdite do dashboardu administrátora siete a pod menu Ultimate Multisite nájdete možnosť Rozoslanie (Broadcast).

![Strana s zoznamom rozosilaní používaná ako bod spojený s rozosilaniem e-mailov](/img/admin/broadcasts-list.png)

Z tejto stránky kliknite na tlačidlo **Pridať rozosilanie** v hornej časti.

Toto otvorí modálne okno Pridať rozosilanie, kde si môžete vybrať, aký typ rozosilania chcete poslať. Vyberte si potom **E-mail** a kliknite na tlačidlo **Ďalý krok**.

![Modálne okno pridaného rozosilania s vybranou možnosťou E-mail](/img/admin/broadcast-add-email.png)

Nasledujúce okno vás požiada o výber buď **Cieľového zákazníka**, alebo **Cieľového produktu**. Poznámte, že môžete vybrať viac ako jeden používateľa alebo viac ako jeden produkt.

Aby vyhľadávanie používateľského účtu alebo produktu bolo možné, musíte v poli začať s zadávaním kľúčového slova.

Po vybranom cieľovom publiku môžete kliknúť na **Ďalší krok**.

![Výber cieľových zákazníkov a cieľového produktu pre e-mailové rozosilnenie](/img/admin/broadcast-email-targets.png)

Nasledujúce okno je miesto, kde môžete začať pisyvať svoj e-mail, vloženie predmetu a obsahu/vynozky, ktorú chcete poslať používateľom.

<!-- Screenshot unavailable: Editor predmetu a obsahu pre rozosilnenie e-mailov na kroku písania -->

Po vytvorení správy môžete kliknúť na tlačidlo **Odoslať**.

Ato je tak jednoduché posielať e-mail používateľom pomocou funkcie rozosilnenia (broadcast).

## Systémové e-máily

Systémové e-máily v Ultimate Multisite sú to **automatické upozornenia**, ktoré systém po určitých akciách, ako je registrácia, platba, mapovanie domény atď., posiela. Tieto e-máily môžete upraviť alebo zmeniť v nastaveniach Ultimate Multisite. Sú s tým tiež vybavené funkciou, ktorá vám umožní obnoviť a zaviesť existujúce nastavenia z inej inštancie Ultimate Multisite.

### Obnovenie a importovanie

Novšie verzie Ultimate Multisite, ako aj doplnky (add-ons), môžu v čase času registrovať nové e-máily.

Aby sme zabránili konfliktom a iným problémom, **nové šablóny e-mailov nebudeme automaticky pridávať ako systémové e-máily na vašej inštancii**, ak nie sú kritické pre správne fungovanie daného funkcie.

Avšak superadmini a agenti môžu tieto novozрегистриované e-máily importovať pomocou nástroja na importovanie (importer tool). Tento proces vytvorí nový systémový e-mail s obsahom a konfiguračnou informáciou novej šablóny e-mailu, čo umožní superadminovi robiť akékoľvek úpravy alebo ich zostávať ako sú.

#### Ako importovať systémové e-máily

Prejdite na si svoju stránku Nastavení Ultimate Multisite a prejdite na záložku **Emails**.

![Tab Emails v nastaveniach Ultimate Multisite zobrazujúca sekciu System Emails](/img/config/settings-emails-tab.png)

Potom v laternej lište kliknite na tlačidlo **Customize System Emails**.

<!-- Screenshot unavailable: Tlačidlo Customize System Emails na panel si System Emails -->

Na stránke System Emails uvidíte na vrchu akciu tlačidlo **Reset & Import**. Kliknutím na to otvorí modálne okno importu a resetu.

![Akciové tlačidlo Reset alebo Import na admin stránke System Emails](/img/admin/system-emails-reset-import.png)

Potom môžete premieniť možnosti Import Emailov, aby ste videli, ktoré systémy e-mailov sú k importe dostupné.

<!-- Screenshot unavailable: Modálne okno Reset a Import s rozšírenými možnosťami Import Emailov -->

#### Resetovanie systémových e-mailov

Inýkrát si uvidíte, že zmeny, ktoré ste urobili na určitej šablone e-mailu, už pre vás nefungujú a chcete ju vrátiť do jej **predvolenej stavu**.

V takých prípado máte dve možnosti: môžete jednoducho odstrániť systémový e-mail a importovať ho späť (použitím vyššie uvedených pokynov) – čo vymaže metriky o odoslaní a iné veci, čo robí túto metódu najmenej preferovanou.

Alebo môžete použiť **Reset & Import nástroj**, aby ste resetovali danú šablonu e-mailu.

Aby ste resetovali šablonu e-mailu, postupujte vyššie uvedenými krokvami až do nástroja Reset & Import a potom premienite možnosť **Reset** a vyberte e-máily, ktoré chcete vrátiť na ich predvolený obsah.

<!-- Screenshot unavailable: Modálne okno Reset a Import s rozšírenými možnosťami Reset Emailov -->
