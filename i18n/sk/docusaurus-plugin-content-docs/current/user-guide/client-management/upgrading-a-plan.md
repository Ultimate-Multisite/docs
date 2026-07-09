---
title: Aktualizácia plánu
sidebar_position: 11
_i18n_hash: 292fe52b63762d11e65c720ada133d39
---
# Upgrade plannu (v2) {#upgrading-a-plan-v2}

_**DÔLEŽITÉU POZNÁDANIE: Tento článok sa týka Ultimate Multisite verzie 2.x.**_

Vaši zákazníci si môžu plánovať svoje plány v akýkoľvek čas. Môžu sa buď pôsobiť na iný plán, alebo kúpiť akékoľvek doplnkové služby alebo balíčky, ktoré ponúkate v siamej sieti.

V tomto tutoriáli ukážeme, ako si môžu svoj plán pôsobiť a čo sa stane po procese pôsobenia.

Aby si mohli pôsobiť na svoj plán, zákazníci by mali prístupť do svojho dashboardu a ísť na stránku **Account** (Účet).

![Dashboard podplánu zákazníka s viditeľným menu linkom Account](/img/account-page/account-menu.png)

Na stránke Account si zobrazí ich aktuálne členstvo a plán, ktorý sa k nemu spojený je. Aby sa pôsobili na iný plán, musia kliknúť na **Change** (Zmeniť) v pravom hornom rohu sekcie **Your Membership** (Vaše členstvo).

![Stránka Account Vaša karta členstva s tlačidlom Change](/img/account-page/membership-change-button.png)

Boli presmerovaní na formulár pre platbu, kde sa zobrazia všetky dostupné plány.

Mogú tiež vidieť **smernice a balíčky, ktoré sú k ich aktuálnemu plánu prístupné**, ak si len chceli kúpiť konkrétnu službu alebo balíček (ako napr. neomezené návštevy alebo priestor na disk v našom príklade), namiesto pôsobenia na celý plán.

![Výber pôsobenia zobrazujúci dostupné plány a balíčky zo strany zákazníka](/img/account-page/upgrade-picker.png)

Po vybranom produkcie, ktoré chcú kúpiť, uvidia, koľko im bude musieť zaplatiť teraz – bez toho, aby sa odčítal akékoľvek existujúci kredit – a koľko im bude účtované na ďalšej fakturačnej dátume.

Zvyčajne, ak je produkt iný plán a platba bude vykonaná medzi poplatkom za členstvo, dostanú budú créditos za zaplatenú sumu z prvého plánu.

![Upgrade payment summary showing credit applied and next billing amount](/img/account-page/upgrade-summary.png)

Ak si vyberiete plán alebo balíček, ktorý nič ne zmení oproti aktuálnej ponuke, uvidíte správu vysvetľujúcu to.

![Poznámka, ak vybraný plán neupraví ponuku](/img/account-page/upgrade-no-change.png)

Po dokončení pokladne sa nové produkty prispôsobia účtu vašich zákazníkov a všetky limity alebo funkcie nových produktov okamžite sa do nich pridajú: návštevy, priestor na disk, príspevky atď...

##

##

## Cesty na upgrade a downgrade {#upgrade-and-downgrade-paths}

Na každom z vašich produktov budete mať záložku **Up & Downgrades**. Prvým možným položkou na tejto záložke je pole sa naznačujúce **Plan Group**.

**Plan skupiny** vám umožňujú Ultimate Multisite informovať, že určité plány patria do istej „rodiny“ a preto by mali byť používané na vytvorenie možností upgrade/downgrade.

![Upraviť produkt Záložka Up and Downgrades s polom Plan Group](/img/config/product-upgrades-plan-group.png)

Napriek tomu, že máte k dispozícii **Free plan**, **Basic Plan** a **Premium Plan**. Chcete, aby používatelia pod **Free Plan** mohli upgradeť len na **Premium Plan** a nechcete, aby videli „Basic Plan“ ako možnosť upgrade. Všetko, čo potrebujete, je priradzenie rovnakého mena skupiny plán pre Free a Premium plány, ako je ukázané v obrázkoch nižšie.

![Stránka produktu Free Plan s pradanou skupiny High End](/img/config/product-upgrades-free.png)

![Stránka produktu Premium Plan s pradanou skupiny High End](/img/config/product-upgrades-premium.png)

Toto má informovať Ultimate Multisite, že v sieti existuje „rodina“ plánov nazvaná **High End**. Pri ponukovaní pôvodných alebo znížovanýchเวอร์zií sa používateľovi zobrazia iba plány z istej rodiny ako možnosť.
