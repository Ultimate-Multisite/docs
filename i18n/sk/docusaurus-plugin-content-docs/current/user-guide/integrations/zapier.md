---
title: Integrácia Zapier
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Integrácia Ultimate Multisite s Zapierom

V jednom z článkov sme sa porozprávali o [Webhooks](webhooks.md) a o tom, ako ich môžeme použiť na integráciu s aplikáciami od tretích strán.

Používanie webhookov je trochu komplikované, pretože vyžaduje pokročilé znalosti programovania a zachytávania dát (payloads). **Zapier** je spôsob, ako sa s tým vyhnúť.

Zapier má integrácie s viac ako 5000 aplikáciami, čo uľahčuje komunikáciu medzi rôznymi aplikáciami.

Môžete vytvárať **Trigery**, ktoré sa spustia, keď na vašej sieti nastanú udalosti (napríklad vytvorenie účtu a spúšťanie udalosti `account_create`) alebo generovať **Akcie** na vašej sieti reagujúce na externé udalosti (napríklad vytvorenie novej členstva v sieti Ultimate Multisite).

Toto je možné, pretože **trigery a akcie Zapier'u Ultimate Multisite** sú napájané [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Ako začať

Prv pridať hľadajte Ultimate Multisite v zozname aplikácií Zapier. Alternatívne môžete kliknúť na [tento odkaz](https://zapier.com/apps/wp-ultimo/integrations).

Prejdite do svojho dashboardu a stlačte tlačidlo **+** **Create Zap** (Vytvoriť Zap) v ľavej lište, aby ste nastavili nový Zap.

![Zapier dashboard s tlačidlom Create Zap](/img/admin/webhooks-list.png)

Bude presmerovaný na stránku vytvorenia Zapa.

Do vyhľadávacie poľa napíšte "wp ultimo". Kliknite a vyberte možnosť **Beta**.

![Hľadanie WP Ultimo v zozname aplikácií Zapier](/img/admin/webhooks-list.png)

Po vybraní našej aplikácie si vyberte dostupnú udalosť: **New Ultimate Multisite Event** (Nová udalost Ultimate Multisite).

![Výber triggera New Ultimate Multisite Event](/img/admin/webhooks-list.png)

Teraz musíme dať Zapieru prístup k **vašej sieti**. Kliknutím na **Sign in** (Prihlásiť sa) sa otvorí nové okno, ktoré vyžaduje **API credentials** (API hesla).

![Prompt na prihlásenie do Zapiera pre API hesla](/img/admin/webhooks-list.png)

Prejdite do vášho panel administrácie siete a prejdite do **Ultimate Multisite > Settings** > **API & Webhooks** a vyhľadajte sekciu API Settings.

Vyberte možnosť **Enable API**, pretože je to potrebné, aby sa toto spojenie správne fungovalo.

![Nastavenia API a Webhook s možnosťami API Settings a Enable API](/img/admin/settings-api-webhooks.png)

Použite ikonu **Copy to Clipboard** (Kopírovať do schránky) na poloch API Key a API Secret a vložte tieto hodnoty na obrazovke integrácie.

Na poli URL zadajte plnú URL adresu vašej siete, vrátane protokolu (HTTP alebo HTTPS).

![Obrazovka integrácie Zapier s polami API Key, Secret a URL](/img/admin/webhooks-list.png)

Kliknite na tlačidlo **Yes, Continue** (Áno, pokračovať), aby ste prešli na nasledujúci krok. Ak všetko funguje správne, budete vítaní vašou novou pripojenou účtom! Kliknite na **Continue** (Pokračovať), aby ste vytvorili nový trigger.

## Ako vytvoriť nový Trigger

Teraz, keď je váš účet pripojený, môžete vidieť dostupné udalosti. Pre tento tutorial si vyberieme udalosť **payment_received**.

![Výber udalosti payment_received v Zapier trigger](/img/admin/webhooks-list.png)

Po vybraní udalosti a kliknutí na **continue** (pokračovať) sa zobrazí **testový krok**.

![Testový krok Zapier pre trigger](/img/admin/webhooks-list.png)

Na tomto etape Zapier si zistí, či môže váš Zap **vyčistiť konkrétne parametre (payload)** pre danú udalosť. Pre budúce udalosti rovnakého typu sa pošle informácia s týmto istým štruktúrou.

![Test trigger Zapier úspešne dokončený s payloadom](/img/admin/webhooks-list.png)

V našom tutoriáli sa test bol **úspešne dokončený** a vráti príklad informácií o náklade (payload). Táto príkladová informácia bude užitočná pre nas postup pri vytváraní akcí. Vaša trigger je teraz vytvorená a je pripravená na pripojenie k iným aplikáciám.

## Ako vytvoriť Actions

Actions používajú informácie z iných triggerov, aby vytvorili nové záznamy v vašej sieti.

Pri **vytváraní kroku akcie** si vyberiete Ultimate Multisite **Beta** a možnosť **Create Items on Ultimate Multisite**.

![Vytváranie akcie s Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

Na nasledujúcom kroku buď vytvoríte svoju autentifikáciu, ako to robili sme v **Ako začať**, alebo si vyberiete vytvorenú autentifikáciu. V tomto tutoriáli si vyberieme tú istú autentifikáciu, ktorú sme už vytvorili.

![Výber autentifikácie pre akciu Zapier](/img/admin/webhooks-list.png)

### Nastavenie akcie

Toto je **hlavý krok akcie** a tu sú veci trochu iné. Prvá informácia, ktorú si vyberiete, je **Item**. Item je **model informácií** vašej siete, ako sú **Customers (Klienci), Payments (Platby), Sites (Sité), Emails (E-mailové adresy)** a iné.

![Výber typu Item pre akciu Zapier](/img/admin/webhooks-list.png)

Keď si vyberiete item, formulár sa **premieści na zobrazenie povinných a voliteľných polí** pre vybraný item.

Napriek tomu, keď si vyberiete item **Customer (Kliencie)**, formuláre zobrazia všetko potrebné na vyplnenie, aby ste vytvorili nového klienta v sieti.

![Pole Customer item v nastavení akcie Zapier](/img/admin/webhooks-list.png)

Po vyplnení všetkých polí označených ako **povinné** a kliknutí na pokračovať sa vám na poslednom obrazovke zobrazia vyplnené pole a pole, ktoré boli nevyplnené.

![Test akcie Zapier ukazuje vyplnené a ne vyplnené polia](/img/admin/webhooks-list.png)

Okam, čo sa váš test dokončí a bude úspešný, je vaša akcia skonfigurovaná. Je tiež dôležité zkontrolovať si v sieti, či bola položka vytvorená testom vašej akcie.
