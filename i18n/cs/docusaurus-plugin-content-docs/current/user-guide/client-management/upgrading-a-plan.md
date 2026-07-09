---
title: Přechod na vyšší tarif
sidebar_position: 11
_i18n_hash: 292fe52b63762d11e65c720ada133d39
---
# Upgrade plánu (v2)

_**DŮLEŽITÁ POZNÁMKA: Tento článek se vztahuje k Ultimate Multisite verze 2.x.**_

Vaši zákazníci mohou své plány kdykoli upgradovat. Mohou buď upgradovat na jiný plán, nebo si zakoupit jakékoli další služby či balíčky, které ve své síti nabízíte.

V tomto návodu si ukážeme, jak mohou svůj plán upgradovat a co se stane po procesu upgradu.

Pro upgrade svého plánu by vaši zákazníci měli přejít do svého dashboardu a otevřít stránku **Account**.

![Dashboard zákaznického podwebu s viditelným odkazem na menu Account](/img/account-page/account-menu.png)

Na stránce Account se jim zobrazí jejich aktuální členství a plán, který je s ním spojený. Pro upgrade na jiný plán musí kliknout na **Změnit** v pravém horním rohu sekce **Vaše členství**.

![Stránka Account, karta Vaše členství s tlačítkem Změnit](/img/account-page/membership-change-button.png)

Budou přesměrováni na formulář pokladny, kde se zobrazí všechny dostupné plány.

Uvidí také **služby a balíčky dostupné pro jejich aktuální plán** , pokud si chtějí zakoupit jen konkrétní službu nebo balíček (například neomezené návštěvy nebo diskový prostor v našem příkladu zde), a neupgradovat plán.

![Výběr upgradu zobrazující dostupné plány a balíčky na straně zákazníka](/img/account-page/upgrade-picker.png)

Poté, co si vyberou produkt, který chtějí zakoupit, uvidí, kolik budou muset zaplatit právě teď – bez započtení jakéhokoli stávajícího kreditu – a kolik jim bude účtováno v dalším fakturačním termínu.

Obvykle, pokud je produktem jiný plán a platba má být provedena mezi dvěma platbami za členství, obdrží kredit ve výši částky zaplacené za první plán.

![Souhrn platby za upgrade zobrazující použitý kredit a částku další fakturace](/img/account-page/upgrade-summary.png)

Pokud vyberou plán nebo balíček, který oproti aktuálnímu předplatnému nic nezmění, zobrazí se jim zpráva, která to vysvětluje.

![Upozornění, když vybraný plán nemění předplatné](/img/account-page/upgrade-no-change.png)

Po dokončení pokladny budou nové produkty přidány do účtu vašich zákazníků a všechny limity nebo funkce nových produktů k němu budou okamžitě přidány: návštěvy, diskový prostor, příspěvky atd...

##

##

## Cesty upgradu a downgradu

U každého ze svých produktů budete mít kartu **Up & Downgrades**. První možností na této kartě je pole s názvem **Plan Group**.

**Skupiny plánů** umožňují dát Ultimate Multisite vědět, že určité plány patří do stejné „rodiny“, a proto by se měly použít k vytvoření možností cest upgradu/downgradu.

![Úprava produktu, karta Up and Downgrades s polem Plan Group](/img/config/product-upgrades-plan-group.png)

Například máte k dispozici **bezplatný plán** , **Basic Plan** a **Premium Plan**. Chcete, aby uživatelé přihlášení k **Free Plan** mohli upgradovat pouze na **Premium Plan**, a nechcete, aby viděli „Basic Plan“ jako možnost upgradu. Stačí přiřadit stejný název skupiny plánů pro plány Free i Premium, jak je zobrazeno na snímcích obrazovky níže.

![Stránka produktu Free Plan s přiřazenou skupinou plánů High End](/img/config/product-upgrades-free.png)

![Stránka produktu Premium Plan s přiřazenou skupinou plánů High End](/img/config/product-upgrades-premium.png)

To by mělo Ultimate Multisite sdělit, že v síti existuje „rodina“ plánů s názvem **High End**. Při nabídce upgradů nebo downgradů se uživateli jako možnost zobrazí pouze plány ze stejné rodiny.
