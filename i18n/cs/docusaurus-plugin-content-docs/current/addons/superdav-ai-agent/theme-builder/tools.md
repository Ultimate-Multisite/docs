---
title: Nástroje a konfigurace
sidebar_position: 4
_i18n_hash: f27cdab7be320668b6c1d53db1190775
---
# Nástroje a konfigurace

Theme Builder používá soubor nástrojů k analýze, návrhu a budování vašeho webu na WordPressu. Ve verzi 1.16.0 je **sd-ai-agent/site-scrape nyní nástrojem úrovně 1 (Tier 1)**, takže je výchozíně k dispozici v Theme Builderu.

## Dostupné nástroje

### Nástroje úrovně 1 (Tier 1) (Vždy dostupné)

Nástroje úrovně 1 jsou výchozíně dostupné v Theme Builderu bez jakékoliv další konfigurace.

#### sd-ai-agent/site-scrape

**Účel:** Analýza existujících webů k extrakci designových inspirací, struktury obsahu a funkcionality.

**Funkce:**

- **Analýza webu** — skrapuje a analyzuje webové stránky konkurence nebo inspirace
- **Extrakt designu** — identifikuje barvy, písma a vzory rozložení
- **Struktura obsahu** — rozumí uspořádání a hierarchii stránek
- **Detekce funkcí** — identifikuje pluginy a funkčnost
- **Analýza výkonu** — kontroluje rychlost a optimalizaci stránek
- **SEO analýza** — kontroluje meta tagy a strukturovaná data

**Použití:**

```
Analyze the design of example.com and use it as inspiration for my site.
```

**Co extrahuje:**

- Paleta barev a použití barev
- Typografie (písma a velikosti)
- Struktura rozložení a mezery
- Navigační vzory
- Organizace obsahu
- Použití obrázků a médií
- Interaktivní prvky
- Mobilní responzivita

**Omezení:**

- Nemůže skrapovat webové stránky chráněné heslem
- Respektuje robots.txt a zásady webu
- Nemůže zachytit dynamický obsah
- Webové stránky s vysokým obsahem JavaScriptu mohou mít omezenou analýzu
- Velké webové stránky mohou trvat déle na analýzu

### Nástroje úrovně 2 (Tier 2) (Volitelné)

Nástroje úrovně 2 jsou dostupné, když jsou výslovně aktivovány v nastavení Theme Builderu.

#### Advanced Analytics

Poskytuje podrobné metriky výkonu:

- Čas načítání stránek
- Core Web Vitals
- SEO skóre
- Skóre přístupnosti (Accessibility score)
- Skóre nejlepších postupů (Best practices score)

#### Content Optimizer

Analyzuje a navrhuje vylepšení pro:

- Čitelnost
- SEO optimalizaci
- Použití klíčových slov
- Strukturu obsahu
- Umístění výzev k akci (Call-to-action)

### Nástroje úrovně 3 (Tier 3) (Premium)

Nástroje úrovně 3 vyžadují další konfiguraci nebo prémiové funkce.

#### AI Content Generator

Generuje obsah pro:

- Popisy produktů
- Stránky služeb
- Blogové příspěvky
- Meta popisy
- Texty výzev k akci (Call-to-action copy)

#### Advanced Design Tools

Poskytuje pokročilé designové schopnosti:

- Generování vlastního CSS
- Vytváření animací
- Návrh interaktivních prvků
- Pokročilá teorie barev
- Optimalizace typografie

## Konfigurace nástrojů

### Aktivace nástrojů

Pokud chcete aktivovat další nástroje v Theme Builderu:

1. Přejděte na **Gratis AI Agent → Settings**
2. Přejděte na **Theme Builder → Tools**
3. Přepínač nástrojů zapněte/vypněte podle potřeby
4. Uložte nastavení

### Povolenía nástrojů

Některé nástroje vyžadují oprávnění:

- **Site scraping** — vyžaduje přístup k internetu
- **Analytics** — vyžaduje integraci s Google Analytics
- **Content generation** — vyžaduje API klíče
- **Advanced features** — může vyžadovat prémiovou předplatitelskou smlouvu

### API klíče a ověřovací údaje

Konfigurujte API klíče pro nástroje, které je vyžadují:

1. Přejděte na **Gratis AI Agent → Settings → API Keys**
2. Zadejte ověřovací údaje pro každý nástroj
3. Otestujte připojení
4. Uložte bezpečně

## Používání sd-ai-agent/site-scrape

### Základní použití

Požádejte Theme Builder, aby analyzoval web:

```
Analyze the design of my competitor's site at competitor.com
and suggest design improvements for my site.
```

### Specifická analýza

Požádejte o specifické typy analýzy:

```
Extract the color palette from example.com and use it as inspiration.
```

```
Analyze the navigation structure of example.com and apply similar
organization to my site.
```

```
Check the mobile responsiveness of example.com and ensure my site
is equally responsive.
```

### Porovnávací analýza

Porovnejte více webů:

```
Compare the designs of site1.com and site2.com and create a design
that combines the best elements of both.
```

## Omezení a ohledu vlastníka nástrojů

### Rate Limiting (Omezení rychlosti)

- Skrapování je omezeno, aby se zabránilo přetížení serveru
- Více požadavků na stejný web může být zpomaleno (throttled)
- Velké webové stránky mohou trvat déle na analýzu

### Přesnost obsahu

- Dynamický obsah nemusí být plně zachycen
- Obsah vykreslený pomocí JavaScriptu může být neúplný
- Data v reálném čase nemusí být zobrazeny
- Některý obsah může být za paywallem

### Právní a etické ohledu

- Respektujte robots.txt a zásady webu
- Neskrápujte chráněný obsah k reprodukci
- Používejte analýzu jako inspiraci, ne jako kopírování
- Ověřte si, že máte právo používat extrahovaný obsah
- Dodržujte obchodní podmínky analyzovaných webů

### Dopad na výkon

- Skrapování velkých webů může trvat
- Více současných skrapů může být pomalejší
- Připojení k síti ovlivňuje rychlost
- Velké datové sady mohou vyžadovat více zpracování

## Nejlepší praxe

### Používání analýzy webů

1. **Analyzujte více webů** — shromážděte inspiraci z několika zdrojů
2. **Zaměřte se na strukturu** — naučte se vzory rozložení a uspořádání
3. **Extrahujte barvy** — používejte palety barev jako výchozí body
4. **Studujte typografii** — identifikujte kombinace písm, které se vám líbí
5. **Projděte navigaci** — pochopte uspořádání menu

### Etické skrapování

1. **Respektujte robots.txt** — dodržujte pokyny webu
2. **Nepokopírujte obsah** — používejte analýzu pouze jako inspiraci
3. **Ověřte práva** — ujistěte se, že můžete extrahovaný obsah používat
4. **Uveďte zdroje** — uznáte zdroje inspirace
5. **Dodržujte podmínky** — dodržujte obchodní podmínky webu

### Maximalizace účinnosti nástrojů

1. **Buďte konkrétní** — požadujte specifické typy analýzy
2. **Poskytněte kontext** — vysvětlete účel vašeho webu
3. **Stanovte očekávání** — popište své designové cíle
4. **Iterujte** — vylepšujte na základě výsledků
5. **Kombinujte nástroje** — používejte více nástrojů pro komplexní analýzu

## Řešení problémů

### Web se neuskrapuje

- Zkontrolujte, zda je web veřejně dostupný
- Ověřte, zda robots.txt skrapování povoluje
- Zkuste jiný web
- Zkontrolujte připojení k internetu
- Kontaktujte podporu, pokud problém přetrvává

### Neúplná analýza

- Web může obsahovat dynamický obsah
- JavaScript nemusí být plně vykreslen
- Velké webové stránky mohou vyvolat časový limit (timeout)
- Zkuste analyzovat konkrétní stránky místo celého webu
- Požádejte o specifické typy analýzy

### Pomalebný výkon

- Velké webové stránky trvají déle na analýzu
- Více současných skrapů je pomalejší
- Připojení k síti ovlivňuje rychlost
- Zkuste během nešpičkových hodin
- Nejprve analyzujte menší sekce

## Související dokumentace

- [Discovery Interview](./discovery-interview.md) — sběr designových informací
- [Design Direction](./design-direction.md) — vylepšení vašeho designu
- [Hospitality Menus](./hospitality-menus.md) — vytváření stránek menu
