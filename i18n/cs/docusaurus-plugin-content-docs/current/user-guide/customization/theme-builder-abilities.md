---
title: Schopnosti konstruktora témat
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Schopnosti pro tvorbu témat: Základní struktura a aktivace block témat {#theme-builder-abilities-scaffold-and-activate-block-themes}

Superdav AI Agent v1.12.0 představuje dvě výkonné schopnosti, které vám umožní generovat a nasazovat vlastní block témata přímo z chatového rozhraní.

## Přehled {#overview}

Schopnosti **scaffold-block-theme** a **activate-theme** umožňují agentům:
- Vytvořit kompletní, připravená k použití block témata na základě vašich specifikací
- Automaticky aktivovat témata na vašem webu bez nutnosti ruční intervence
- Vytvořit jednotnou vizuální identitu pomocí průvodních rozhodnutí ohledně designu

## Základní struktura block tématu (Scaffold Block Theme) {#scaffold-block-theme}

Schopnost **scaffold-block-theme** generuje nové WordPress block téma s kompletní strukturou, včetně:

- Konfigurace `theme.json` s designovými tokeny
- Souborů šablon pro bloky pro běžné rozložení
- Vlastních stylů a variant bloků
- Metadat a deklarací podpory tématu

### Jak to použít {#how-to-invoke}

V vašem chatu se Superdav AI Agentovi můžete požádat o vygenerování tématu:

```
"Create a block theme called 'Modern Agency' with a blue and white color scheme,
sans-serif typography, and a professional layout"
```

Agent provede následující kroky:
1. Shromáždí vaše designové preference během konverzace
2. Vygeneruje kompletní strukturu tématu
3. Vytvoří všechny potřebné soubory tématu
4. Připraví téma k aktivaci

### Očekávaný výstup {#expected-output}

Po úspěšném provedení schopnosti uvidíte:

- Potvrzení, že bylo téma vytvořeno (scaffolded)
- Název a umístění tématu
- Shrnutí použitých designových tokenů (barvy, typografie, mezery)
- Stav připravený k aktivaci

Příklad výstupu:
```
✓ Theme "Modern Agency" scaffolded successfully
  Location: /wp-content/themes/modern-agency/
  Colors: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Status: Ready to activate
```

## Aktivace tématu (Activate Theme) {#activate-theme}

Schopnost **activate-theme** přepne váš web na nově vytvořené nebo již existující block téma.

### Jak to použít {#how-to-invoke-1}

Po vytvoření základní struktury tématu jej můžete okamžitě aktivovat:

```
"Activate the Modern Agency theme"
```

Nebo aktivovat jakékoli existující téma:

```
"Switch to the Twentytwentyfour theme"
```

### Očekávaný výstup {#expected-output-1}

Po úspěšné aktivaci:

- Potvrzení aktivního tématu
- Název předchozího tématu (pro reference)
- URL webu, kde je téma nyní aktivní
- Jakékoli poznámky k nastavení specifické pro téma

Příklad výstupu:
```
✓ Theme activated successfully
  Active theme: Modern Agency
  Previous theme: Twentytwentyfour
  Live at: https://yoursite.com
  Note: Check your homepage to verify the layout
```

## Pracovní postup: Základní struktura a aktivace {#workflow-scaffold-and-activate}

Typický pracovní postup kombinuje obě schopnosti:

1. **Požadovat vytvoření tématu**: "Create a block theme for my SaaS landing page"
2. **Agent vytvoří základní strukturu tématu**: Generuje soubory a designové tokeny
3. **Prohlížení a úprava**: Diskutujte o změnách designu, pokud je to nutné
4. **Aktivace**: "Activate the theme now"
5. **Ověření**: Navštivte svůj web, abyste potvrdili, že je nový design aktivní

## Designové tokeny a přizpůsobení {#design-tokens-and-customization}

Témata vytvořená základní strukturou používají WordPress designové tokeny (skrze `theme.json`) pro:

- **Barvy**: Primární, sekundární, akcentní, neutrální paleta
- **Typografie**: Rodiny písma, velikosti, výšky, mezery řádků
- **Mezery**: Padding, margin, škály mezer
- **Okrajové prvky**: Tokeny pro zaoblení a šířku
- **Stíny**: Úrovně zvýraznění

Tyto tokeny jsou centralizovány v souboru `theme.json`, což usnadňuje úpravu celého vašeho designového systému z jednoho souboru.

## Omezení a poznámky {#limitations-and-notes}

- Témata jsou vytvářena v adresáři `/wp-content/themes/` a musí dodržovat konvence pojmenování WordPressu
- Aktivace vyžaduje vhodné oprávnění na vašem WordPress webu
- Vlastní PHP kód v tématech je minimální; pro složitější funkčnost používejte pluginy
- Block témata fungují nejlépe s WordPress 5.9 a novější

## Řešení problémů {#troubleshooting}

**Téma se neobjeví po vytvoření základní struktury**
- Ověřte, že adresář tématu existuje a má správná oprávnění
- Zkontrolujte, zda je `theme.json` platní JSON
- Ujistěte se, že název tématu se neshoduje s již existujícími témata

**Aktivace selhává**
- Potvrďte, že máte administrátorská oprávnění
- Zkontrolujte, že adresář tématu je čitelný pro WordPress
- Pro podrobnosti zkontrolujte log chyby WordPress

**Designové tokeny nejsou aplikovány**
- Ověřte, že syntaxe `theme.json` je správná
- Vymažte jakékoli cacheovací pluginy
- Zkontrolujte, zda vaše verze WordPress podporuje tokeny, které používáte

## Další kroky {#next-steps}

Po aktivaci tématu můžete:
- Použít schopnost **Design System Aesthetics** k úpravě typografie, barev a mezer
- Přizpůsobit jednotlivé styly bloků přímo v editoru bloků WordPress
- Přidat vlastní CSS do souboru `style.css` tématu
- Vytvořit vlastní šablony bloků pro specifické typy stránek
