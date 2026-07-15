---
title: Odosielanie e-mailov a hromadných správ
sidebar_position: 11
_i18n_hash: 0563b0c364cc014990c7066b8251ba36
---
# Odosielanie e-mailov a Broadcasts (v2)

_**DÔLEŽITÁ POZNÁMKA: Tento článok sa vzťahuje na Ultimate Multisite verziu 2.x.**_

Ultimate Multisite obsahuje funkciu, ktorá vám umožní komunikovať so zákazníkmi odoslaním e-mailu cielenému používateľovi alebo skupine používateľov, ako aj odosielaním upozornení na ich admin dashboard na broadcast oznámení

## Pridanie admin upozornení na dashboard vašich zákazníkov pomocou Broadcasts {#add-admin-notices-to-your-customers-dashboard-with-broadcasts}

Pomocou funkcie broadcast v Ultimate Multisite môžete pridať **admin upozornenia** na admin dashboard subsite používateľa.

Je to mimoriadne užitočné, ak potrebujete urobiť oznámenie, napríklad o údržbe systému, alebo ponúknuť nové produkty či služby svojim existujúcim používateľom. Takto bude admin upozornenie vyzerať na dashboard používateľa.

<!-- Screenshot unavailable: Admin notice broadcast shown on a customer's subsite dashboard -->

Ak chcete začať admin upozornenie, prejdite na svoj network admin dashboard a v menu **Ultimate Multisite** nájdete možnosť **Broadcasts**.

![Stránka zoznamu Broadcasts v administrácii Ultimate Multisite](/img/admin/broadcasts-list.png)

Môžete tiež upravovať existujúce broadcasts:

![Rozhranie na úpravu broadcastu](/img/admin/broadcast-edit.png)

Na tejto stránke kliknite hore na tlačidlo **Add Broadcast**.

Otvorí sa modálne okno Add broadcast, kde si môžete vybrať, aký typ broadcastu chcete odoslať.

Pokračujte výberom **Message** a potom kliknite na tlačidlo **Next Step**.

![Modálne okno Add broadcast s vybranou možnosťou Message](/img/admin/broadcast-add-message.png)

Ďalšie okno vás požiada o **Target customer** alebo **Target product**. Upozorňujeme, že môžete vybrať viac ako jedného používateľa alebo viac ako jeden produkt.

Ak chcete vyhľadať používateľský účet alebo produkt, musíte začať písať kľúčové slovo do poľa.

V poli **Message type** môžete vybrať farbu upozornenia. Tým sa zdôrazní naliehavosť vašej správy.

Potom môžete kliknúť na **Next Step**.

![Polia Target customers, target product a message type pre broadcast Message](/img/admin/broadcast-message-targets.png)

V ďalšom okne môžete začať zostavovať svoju správu zadaním predmetu a obsahu/správy, ktorú chcete odoslať používateľom cez broadcast.

![Predmet broadcast správy a editor obsahu v kroku zostavenia](/img/admin/broadcast-edit.png)

Po vytvorení správy môžete stlačiť tlačidlo **Send**.

A to je všetko. Admin upozornenie by sa malo okamžite zobraziť na dashboard používateľa.

## Odosielanie e-mailov vašim zákazníkom {#send-emails-to-your-customers}

Pomocou funkcie broadcast v Ultimate Multisite môžete svojim používateľom odoslať e-mail. Máte možnosť odoslať e-mail iba konkrétnym používateľom alebo zacieliť na konkrétnu skupinu používateľov na základe produktu alebo plánu, pod ktorým sú prihlásení na odber.

Ak chcete spustiť e-mailový broadcast, prejdite na svoj network admin dashboard a v menu Ultimate Multisite nájdete možnosť Broadcast.

![Stránka zoznamu Broadcasts použitá ako východiskový bod pre e-mailový broadcast](/img/admin/broadcasts-list.png)

Na tejto stránke kliknite hore na tlačidlo **Add broadcast**.

Otvorí sa modálne okno Add broadcast, kde si môžete vybrať, aký typ broadcastu chcete odoslať. Pokračujte výberom **Email** a potom kliknite na tlačidlo **Next Step**.

![Modálne okno Add broadcast s vybranou možnosťou Email](/img/admin/broadcast-add-email.png)

Ďalšie okno vás požiada o **Target customer** alebo **Target produc** t. Upozorňujeme, že môžete vybrať viac ako jedného používateľa alebo viac ako jeden produkt.

Ak chcete vyhľadať používateľský účet alebo produkt, musíte začať písať kľúčové slovo do poľa.

Keď je vybrané vaše cieľové publikum, môžete kliknúť na **Next Step**.

![Výber Target customers a target product pre broadcast Email](/img/admin/broadcast-email-targets.png)

V ďalšom okne môžete začať zostavovať svoj e-mail zadaním predmetu a obsahu/správy, ktorú chcete poslať používateľom.

<!-- Screenshot unavailable: Email broadcast subject and content editor on the compose step -->

Po vytvorení správy môžete stlačiť tlačidlo **Send**.

A takto jednoducho môžete odoslať e-mail svojim koncovým používateľom pomocou funkcie broadcast.

## Systémové e-maily {#system-emails}

Systémové e-maily v Ultimate Multisite sú tie **automatické oznámenia**, ktoré systém odosiela po určitých akciách, ako je registrácia, platba, mapovanie domény atď. Tieto e-maily možno upravovať alebo meniť v nastaveniach Ultimate Multisite. Obsahuje tiež funkciu, ktorá vám umožní resetovať a importovať existujúce nastavenia z inej inštalácie Ultimate Multisite.

### Resetovanie a import {#resetting--importing}

Nové verzie Ultimate Multisite, ako aj doplnky, môžu a budú z času na čas registrovať nové e-maily.

Aby sme predišli konfliktom a iným problémom, **nepridáme nové šablóny e-mailov ako System Emails do vašej inštalácie automaticky** , pokiaľ nie sú kľúčové pre správne fungovanie danej funkcie.

Super administrátori a agenti však môžu tieto novo zaregistrované e-maily importovať pomocou nástroja importéra. Tento proces vytvorí nový systémový e-mail s obsahom a konfiguráciou novej šablóny e-mailu, čo super administrátorovi umožní vykonať ľubovoľné úpravy alebo ich ponechať tak, ako sú.

#### Ako importovať systémové e-maily {#how-to-import-system-emails}

Prejdite na stránku nastavení Ultimate Multisite a prejdite na kartu **Emails**.

![Karta Emails v nastaveniach Ultimate Multisite zobrazujúca sekciu System Emails](/img/config/settings-emails-tab.png)

Potom na bočnom paneli kliknite na tlačidlo **Customize System Emails**.

<!-- Screenshot unavailable: Customize System Emails button on the System Emails sidebar panel -->

Na stránke System Emails uvidíte hore tlačidlo akcie **Reset & Import**. Kliknutím na toto tlačidlo by sa malo otvoriť modálne okno importu a resetovania.

![Tlačidlo akcie Reset alebo Import na admin stránke System Emails](/img/admin/system-emails-reset-import.png)

Potom môžete prepnúť možnosti Import Emails a pozrieť si, ktoré systémové e-maily sú dostupné na importovanie.

<!-- Snímka obrazovky nedostupná: Modálne okno Reset and Import s rozbalenými možnosťami Import Emails -->

#### Resetovanie systémových e-mailov {#reseting-system-emails}

Inokedy si uvedomíte, že zmeny, ktoré ste vykonali v danej šablóne e-mailu, vám už nevyhovujú a chcete ju resetovať do jej **predvoleného stavu**.

V takých prípadoch máte dve možnosti: môžete jednoducho odstrániť systémový e-mail a znova ho importovať (pomocou pokynov vyššie) – tým sa vymažú metriky odosielania a ďalšie veci, takže táto metóda je najmenej odporúčaná.

Alebo môžete použiť nástroj **Reset & Import** na resetovanie tejto šablóny e-mailu.

Ak chcete resetovať šablónu e-mailu, môžete postupovať podľa krokov vyššie, až kým sa nedostanete k nástroju Reset & Import, a potom prepnúť možnosť **Reset** a vybrať e-maily, ktoré chcete resetovať späť na ich predvolený obsah.

<!-- Snímka obrazovky nedostupná: Modálne okno Reset and Import s rozbalenými možnosťami Reset Emails -->
