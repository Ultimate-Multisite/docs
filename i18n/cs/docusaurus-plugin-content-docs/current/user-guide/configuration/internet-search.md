---
title: Vyhledávání v internetu
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Internet Search

Gratis AI Agent v1.5.0 přidává možnost **Internet Search**, která umožňuje asistentovi AI získávat aktuální informace z webu během konverzace. Tato funkce je zajištěna pomocí [Brave Search API](https://brave.com/search/api/) nebo [Tavily API](https://tavily.com/).

## How It Works {#how-it-works}

Když je internetové vyhledávání aktivováno, asistent může automaticky dotazovat váš nakonfigurovaný poskytovatel vyhledávání, když zjistí, že otázka vyžaduje aktuální nebo externí informace — například nejnovější zprávy, aktuální ceny nebo dokumentaci, která se mohla změnit od data tréninku modelu.

Výsledky jsou získávány v reálném čase a vloženy do kontextu asistenta, než generuje odpověď. Asistent upozorní, když použil výsledky vyhledávání k zodpovězení otázky.

## Enabling Internet Search {#enabling-internet-search}

Internetové vyhledávání vyžaduje API klíč od vybraného poskytovatele vyhledávání. Pro jeho konfiguraci postupujte takto:

1. Přejděte na **Gratis AI Agent → Settings → Advanced**.
2. Najděte rozbalovací nabídku **Internet Search Provider** a vyberte buď **Brave Search** nebo **Tavily**.
3. Zadejte svůj API klíč do příslušného pole. Odkazy na registraci jsou zobrazeny vedle každého pole.
4. Klikněte na **Save Settings**.

Jakmile je klíč uložen, možnost Internet Search je automaticky k dispozici pro asistenta.

## Brave Search {#brave-search}

### Obtaining a Brave Search API Key {#obtaining-a-brave-search-api-key}

1. Navštivte [Brave Search API page](https://brave.com/search/api/).
2. Zaregistrujte se na plán. Je k dispozici bezplatná úroveň s měsíčním limitem dotazů.
3. Zkopírujte svůj API klíč z uživatelského panelu pro vývojáře Brave Search.
4. Vložte jej do pole **Brave Search API Key** v nastavení Gratis AI Agent.

### Usage Limits {#usage-limits}

Použití je fakturováno Brave Search na základě počtu dotazů. Každá odpověď AI, která spustí vyhledávání, se počítá jako jeden dotaz. Monitorujte své využití v [Brave Search developer dashboard](https://brave.com/search/api/), abyste se vyhnuli neočekávaným poplatkům.

## Tavily {#tavily}

Superdav AI Agent v1.10.0 přidává **Tavily** jako alternativního poskytovatele internetového vyhledávání, který nabízí bohatší výsledky vyhledávání a pokročilé možnosti výzkumu.

### Obtaining a Tavily API Key {#obtaining-a-tavily-api-key}

1. Navštivte [Tavily API page](https://tavily.com/).
2. Zaregistrujte se na účet. Je k dispozici bezplatná úroveň s měsíčním limitem dotazů.
3. Zkopírujte svůj API klíč z Tavily dashboardu.
4. Vložte jej do pole **Tavily API Key** v nastavení Gratis AI Agent.

### Usage Limits {#usage-limits-1}

Použití je fakturováno Tavily na základě počtu API volání. Každá odpověď AI, která spustí vyhledávání, se počítá jako jedno volání. Monitorujte své využití v [Tavily dashboard](https://tavily.com/), abyste se vyhnuli neočekávaným poplatkům.

## Disabling Internet Search {#disabling-internet-search}

Odstraňte API klíč z pole aktivního poskytovatele vyhledávání a uložte. Možnost Internet Search nebude asistenta již nabíjet.

:::note
Internetové vyhledávání přidává latenci do odpovědí, protože asistent musí počkat na výsledky vyhledávání, než vygeneruje odpověď. Pro aplikace citlivé na čas zvažte, zda je reálné vyhledávání nutné, nebo zda je dostatečné vestavěné знання asistenta.
:::
