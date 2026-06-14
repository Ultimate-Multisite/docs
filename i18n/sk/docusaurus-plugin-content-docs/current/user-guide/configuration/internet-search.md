---
title: Hľadávanie v sieti
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Internet Hľadávanie

Gratis AI Agent v1.5.0 pridáva schopnosť **Internet Search**, ktorá umožňuje asistentovi AI vyhľadať aktuálne informácie z webu počas konverzácie. Toto je napáchané [Brave Search API](https://brave.com/search/api/) alebo [Tavily API](https://tavily.com/).

## Ako to funguje

Keď je internetové vyhľadávanie zapnuté, asistent môže automaticky vyžiadať váš skonfigurovaný vyhľadávací poskytovateľ, keď určí, že otázka vyžaduje aktuálne alebo externé informácie – napríklad noviny, živé ceny alebo dokumentáciu, ktorá sa mohla zmeniť od dátumu ukončenia tréningu modelu.

Výsledky sa získavajú v reálnom čase a injektujú do kontextu asistentu pred tým, ako vygeneruje odpoveď. Asistent uviedie, ak používa výsledky vyhľadávania na odpovedanie otázky.

## Aktivovanie internetového vyhľadávania

Internetové vyhľadávanie vyžaduje API kľúč od vášho zvoleného vyhľadávacieho poskytovateľa. Na jeho konfiguráciu postupujte takto:

1. Prejdite do **Gratis AI Agent → Settings → Advanced**.
2. Nahrajte rozbaľovacie menu **Internet Search Provider** a vyberte buď **Brave Search**, alebo **Tavily**.
3. Vstupte svoj API kľúč do príslušného pole. Linky na registrácia sú viditeľné vedľa každého pola.
4. Kliknite na **Save Settings** (Uložiť nastavenia).

Po uložení kľúča je schopnosť internetového vyhľadávania automaticky dostupná pre asistenta.

## Brave Search

### Získanie API kľúča Brave Search

1. Navštívte [Brave Search API page](https://brave.com/search/api/).
2. Registrujte sa na plán. Dostupné je bezplatný stupeň s limitom požiadaviek na mesiac.
3. Skopírujte svoj API kľúč z dashboardu vývojára Brave Search.
4. Vstúpte ho do pol **Brave Search API Key** v nastaveniach Gratis AI Agent.

### Limity použitia

Použitie je účtované spoločnosťou Brave Search na základe počtu vykonaných dotazov. Ka každá odpoveď AI, ktorá vyvolá vyhľadávanie, sa považuje za jeden dotaz. Monitorujte svoje použitie v [dashboarde vývojára Brave Search](https://brave.com/search/api/), aby ste unikli nečakaným poplatkom.

## Tavily

Superdav AI Agent v1.10.0 pridáva **Tavily** ako alternatívny poskytovateľ internetového vyhľadávania, ktorý ponúka bohatšie výsledky vyhľadávania a pokročilé schopnosti výskumu.

### Získanie API kľúča Tavily

1. Navštívte [stranu API Tavily](https://tavily.com/).
2. Registrujte sa na účet. Dostupné je bezplatná úroveň s maximálnym počtom požiadaviek mesačne.
3. Skopírujte svoj API kľúč z dashboardu Tavily.
4. Vstrieť ho do polia **Tavily API Key** v nastaveniach Gratis AI Agent.

### Limity použitia

Použitie je účtované spoločnosťou Tavily na základe počtu vykonaných API hovorov (API calls). Ka odpoveď AI, ktorá vyvolá vyhľadávanie, sa považuje za jeden hovor. Monitorujte svoje použitie v [dashboarde Tavily](https://tavily.com/), aby ste unikli nečakaným poplatkom.

## Vyhľadávanie v sieti vypnuté

Odstránte API kľúč z polia aktívneho poskytovateľa vyhľadávania a uložte. Schopnosť vyhľadávania v sieti nebude už ponúkaná asistentom.

:::note
Vyhľadávanie v sieti pridáva zpoždenie odpovedí, pretože asistent musí<channel|>Použitie je účtované spoločnosťou Brave Search na základe počtu vykonaných dotazov. Ka každá odpoveď AI, ktorá vyvolá vyhľadávanie, sa považuje za jeden dotaz. Monitorujte svoje použitie v [dashboarde vývojára Brave Search](https://brave.com/search/api/), aby ste unikli nečakaným poplatkom.

## Tavily

Superdav AI Agent v1.10.0 pridáva **Tavily** ako alternatívny poskytovateľ internetového vyhľadávania, ktorý ponúka bohatšie výsledky vyhľadávania a pokročilé schopnosti výskumu.

### Získanie API kľúča Tavily

1. Navštívte [stranu API Tavily](https://tavily.com/).
2. Registrujte sa na účet. Dostupné je bezplatná úroveň s maximálnym počtom požiadaviek mesačne.
3. Skopírujte svoj API kľúč z dashboardu Tavily.
4. Vstrieť ho do polia **Tavily API Key** v nastaveniach Gratis AI Agent.

### Limity použitia

Použitie je účtované spoločnosťou Tavily na základe počtu vykonaných API hovorov (API calls). Ka odpoveď AI, ktorá vyvolá vyhľadávanie, sa považuje za jeden hovor. Monitorujte svoje použitie v [dashboarde Tavily](https://tavily.com/), aby ste unikli nečakaným poplatkom.

## Vyhľadávanie v sieti vypnuté

Odstránte API kľúč z polia aktívneho poskytovateľa vyhľadávania a uložte. Schopnosť vyhľadávania v sieti nebude už ponúkaná asistentom.

:::note
Vyhľadávanie v sieti pridáva zpoždenie odpovedí, pretože asistent musí čakať na výsledky vyhľadávania, aby mohol odpoveď vygenerovať. Pre časovo citlivé prípady si zvážte, či je potrebné vyhľadávanie v reálnom čase alebo či sú dostatočné znalosti vbudované v asistencie.
:::
