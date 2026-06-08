---
title: 'Lekce 4: Vytváření nišových šablon'
sidebar_position: 5
_i18n_hash: 3ade990de5fd404a7f09a9d42d7535ee
---
# Lekce 4: Vytváření nišových šablon

Šablony tvoří jádro vaší nišové nabídky. Vlastník fitness studia, který se zaregistruje a uvidí web, který vypadá jako web fitness studia – se jízdnými rozvrhy, profilem trenérů a správnou grafikou – má mnohem vyšší pravděpodobnost, že zůstane, než ten, který uvidí prázmný plátno.

## Kde jsme skončili

Máme funkční síť FitSite s nainstalovaným a nakonfigurovaným Ultimate Multisite. Nyní vytvoříme šablony, které činí FitSite tak, že se zdá, že je navržen speciálně pro fitness podniky.

## Proč jsou nišové šablony důležité

Obecné šablony nutí vaše klienty k tvrdé práci: zjistit, jaké stránky potřebují, jaká struktura obsahu funguje a jak to vše vypadá správně pro jejich obor. Nišové šablony tento třecí moment eliminují.

Vlastník fitness studia, který se zaregistruje u FitSite, by měl vidět:

- Úvodní stránku, která vypadá jako web fitness studia
- Stránky pro kurzy, rozvrh, trenéry a ceny již vytvořené
- Grafiku a náhrubný obsah, který odpovídá jejich oboru
- Design, který působí profesionálně a je v souladu s branží fitness

Oni vyplní své detaily. Nezačínají od nuly.

## Plánování šablon

Před stavbou se rozhodněte, jaké šablony nabídnete. Pro FitSite vytvoříme tři:

### Šablona 1: Studio Essential

Pro malé studia a osobní trenéry.

- **Úvodní stránka** s hero obrázkem, zvýrazněním kurzů a výzvou k akci
- **O nás** stránka se studiovou historií a misí
- **Kurzy** stránka s rozvrhem
- **Trenéři** stránka s kartami profilů
- **Kontakt** stránka s mapou umístění a kontaktním formulářem
- **Čistý, moderní design** s barevnou paletou vhodnou pro fitness

### Šablona 2: Gym Pro

Pro zavedené posilovny s více službami.

- Vše z Studio Essential, plus:
- **Příspěvky** stránka s tabulkou cen
- **Galerie** stránka s fotkami zařízení
- **Blog** sekce s tipy a novinkami ze světa fitness
- **Osvědčení** sekce na úvodní stránce
- **Více výrazných** možností značení (branding)

### Šablona 3: Fitness Chain

Pro provozovny s více pobočkami.

- Vše z Gym Pro, plus:
- **Pobočky** stránka s více záznamy o zařízeních
- Šablona podstránky pro **franchise/pobočku**
- **Centralizované značení** s detaily specifickými pro pobočku
- **Katalog zaměstnanců** pro všechny pobočky

## Vytváření webu šablony

V Ultimate Multisite je šablona jednoduše web WordPress nakonfigurovaný tak, jak chcete, aby vypadaly nové zákaznické webové stránky. Zde je návod, jak vytvořit takovou:

### Krok 1: Vytvořte web šablony

1. Přejděte do **Sites > Add New** v administraci sítě
2. Vytvořte web s názvem `template-studio-essential`
3. Tento web se stane vaším pracovním plátnem

### Krok 2: Nainstalujte a nakonfigurujte téma

Přepněte se na dashboard webu šablony a:

1. Aktivujte téma vhodné pro fitness podniky
2. Nakonfigurujte nastavení tématu, barvy a typografii
3. Nastavte hlavičku a zápatí s navigací vhodnou pro fitness

:::tip Výběr tématu
Vyberte téma, které je dostatečně flexibilní, aby vypadalo dobře pro fitness, ale není tak složité, že by ho vaši zákazníci nemohli spravovat. Témata jako Astra, GeneratePress nebo Kadence fungují dobře, protože jsou lehké, přizpůsobitelné a dobře podporované.
:::

### Krok 3: Vytvořte stránky

Vybudujte každou stránku s:

- **Náhrubným obsahem**, který se přirozeně čte pro fitness ("Vítejte v [Název studia]", nikoli "Lorem ipsum")
- **Náhrubnými obrázky** ze zdarma fotobank, které ukazují fitness aktivity
- **Funkčními rozvrženími** pomocí page builderu nebo block editoru

Dejte náhrubný obsah, kde je to možné, v kontextu návodu. Místo obecného vyplňovacího textu napište obsah jako: "Nahrazením krátkým popisem vašeho studia a toho, co ho činí zvláštním. Zmiňte svou tréninkovou filozofii, roky zkušeností nebo co mohou klienty očekávat."

### Krok 4: Nakonfigurujte pluginy

Nainstalujte a aktivujte pluginy, které fitness studia potřebují:

- Plugin pro rezervace nebo rozvržení (pokud je to relevantní pro váš plán)
- Plugin pro kontaktní formulář
- SEO plugin (předkonfigurovaný s nastavením relevantní pro fitness)

### Krok 5: Označte jako šablonu

1. Přejděte do **Ultimate Multisite > Sites**
2. Upravte web šablony
3. Zapněte přepínač **Site Template**

Opakujte tento proces pro každou šablonu, kterou chcete nabídnout.

## Kontrola kvality šablon

Než šablonu uvést k dispozici, ověřte:

- [ ] Všechny stránky se načítají správně a vypadají profesionálně
- [ ] Náhrubný obsah je užitečný a specifický pro niši
- [ ] Obrázky jsou vhodné a mají řádně platné licence
- [ ] Mobilní responzivita funguje na všech stránkách
- [ ] Navigace je logická a kompletní
- [ ] Kontaktní formuláře fungují
- [ ] Žádné zlomené odkazy nebo chybějící soubory
- [ ] Rychlost načítání stránky je přijatelná

## Síť FitSite do teď

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL
├── Domain mapping configured
├── Site Templates
│   ├── Studio Essential (small studios, trainers)
│   ├── Gym Pro (established gyms)
│   └── Fitness Chain (multi-location)
└── Ready for plan configuration (next lesson)
```

## Co jsme v této lekci vytvořili

- **Tři nišové šablony** navržené pro různé velikosti fitness podniků
- **Obsah a grafiku vhodnou pro fitness**, které činí platformu tak, že se zdá, že je navržen speciálně
- **Návodný náhrubný obsah**, který zákazníky vede k vlastní personalizaci
- **Kontrolní seznam** k zajištění, že šablony jsou připraveny k použití

---

**Další:** [Lekce 5: Návrhování vašich plánů](lesson-5-plans) — vytvoříme úrovně produktů, které odpovídají tomu, jak fitness podniky skutečně fungují.
