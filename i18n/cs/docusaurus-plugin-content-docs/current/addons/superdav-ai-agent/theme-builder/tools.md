---
title: Nástroje a konfigurace
sidebar_position: 4
_i18n_hash: 78a3b6062e985598d020eaee28754120
---
# Nástroje a konfigurace

Theme Builder používá sadu nástrojů k analýze, návrhu a sestavení vašeho WordPress webu. Ve verzi 1.16.0 je **sd-ai-agent/site-scrape nyní nástroj Tier 1**, takže je ve výchozím nastavení dostupný v Theme Builder. Superdav AI Agent v1.18.0 také zavádí samostatně distribuovaný Advanced doprovodný balíček pro důvěryhodné vývojářské pracovní postupy; tyto nástroje nejsou součástí základního balíčku WordPress.org a musí být nainstalovány a autorizovány samostatně.

## Dostupné nástroje {#available-tools}

### Nástroje Tier 1 (vždy dostupné) {#tier-1-tools-always-available}

Nástroje Tier 1 jsou ve výchozím nastavení dostupné v Theme Builder bez jakékoli další konfigurace.

#### sd-ai-agent/site-scrape {#sd-ai-agentsite-scrape}

**Účel:** Analyzovat existující weby za účelem získání designové inspirace, struktury obsahu a funkcí.

**Možnosti:**

- **Analýza webu** — procházení a analýza konkurenčních nebo inspiračních webů
- **Extrakce designu** — identifikace barev, písem a vzorů rozvržení
- **Struktura obsahu** — pochopení organizace a hierarchie stránek
- **Detekce funkcí** — identifikace pluginů a funkcionality
- **Analýza výkonu** — kontrola rychlosti stránky a optimalizace
- **SEO analýza** — kontrola meta tagů a strukturovaných dat

**Použití:**

```
Analyzuj design example.com a použij ho jako inspiraci pro můj web.
```

**Co extrahuje:**

- Paleta barev a použití barev
- Typografie (písma a velikosti)
- Struktura rozvržení a mezery
- Vzory navigace
- Organizace obsahu
- Použití obrázků a médií
- Interaktivní prvky
- Responzivita na mobilech

**Omezení:**

- Nelze procházet weby chráněné heslem
- Respektuje robots.txt a zásady webu
- Nemusí zachytit dynamický obsah
- Weby výrazně založené na JavaScriptu mohou mít omezenou analýzu
- Analýza velkých webů může trvat déle

### Nástroje Tier 2 (volitelné) {#tier-2-tools-optional}

Nástroje Tier 2 jsou dostupné, když jsou výslovně povoleny v nastavení Theme Builder.

#### Pokročilá analytika {#advanced-analytics}

Poskytuje podrobné metriky výkonu:

- Časy načtení stránky
- Core Web Vitals
- SEO skóre
- Skóre přístupnosti
- Skóre osvědčených postupů

#### Optimalizátor obsahu {#content-optimizer}

Analyzuje a navrhuje zlepšení pro:

- Čitelnost
- SEO optimalizaci
- Použití klíčových slov
- Strukturu obsahu
- Umístění výzev k akci

### Nástroje Tier 3 (Premium) {#tier-3-tools-premium}

Nástroje Tier 3 vyžadují další konfiguraci nebo prémiové funkce.

#### Generátor obsahu AI {#ai-content-generator}

Generuje obsah pro:

- Popisy produktů
- Stránky služeb
- Blogové příspěvky
- Meta popisy
- Texty výzev k akci

#### Pokročilé designové nástroje {#advanced-design-tools}

Poskytuje pokročilé designové možnosti:

- Generování vlastního CSS
- Tvorbu animací
- Návrh interaktivních prvků
- Pokročilou teorii barev
- Optimalizaci typografie

### Advanced doprovodné nástroje (samostatný balíček) {#advanced-companion-tools-separate-package}

Advanced doprovodný balíček je distribuován samostatně od základního vydání Superdav AI Agent. Je určen pro důvěryhodná prostředí vývojářů a vlastníků webů, kde administrátoři výslovně povolí agentovi používat nástroje s vysokým dopadem.

Možnosti Advanced doprovodného balíčku mohou zahrnovat:

- **Nástroje souborového systému** — kontrola a úprava schválených souborů v důvěryhodných prostředích
- **Databázové nástroje** — dotazování nebo aktualizace dat webu při výslovné autorizaci
- **WP-CLI nástroje** — spouštění příkazů pro údržbu a kontrolu WordPress
- **Nástroje REST dispatcher** — volání registrovaných REST endpointů prostřednictvím řízených pracovních postupů dispatch
- **Nástroje pro tvorbu pluginů** — vytvoření kostry a iterace kódu pluginu
- **Nástroje Git snapshot** — vytváření snapshotů před rizikovými vývojářskými operacemi
- **Nástroje pro správu uživatelů** — pomoc s kontrolou nebo úpravou uživatelských záznamů tam, kde je to povoleno
- **Benchmarkovací nástroje** — spouštění benchmarků výkonu nebo schopností pro vývojářskou kontrolu

Nedokumentujte je jako obecně dostupné nástroje Theme Builder pro každou instalaci. Jsou dostupné pouze tehdy, když je Advanced doprovodný balíček nainstalován, povolen a omezen na důvěryhodné administrátory.

## Konfigurace nástrojů {#tool-configuration}

### Povolení nástrojů {#enabling-tools}

Chcete-li v Theme Builder povolit další nástroje:

1. Přejděte na **Gratis AI Agent → Nastavení**
2. Přejděte na **Theme Builder → Nástroje**
3. Zapněte nebo vypněte nástroje podle potřeby
4. Uložte nastavení

### Oprávnění nástrojů {#tool-permissions}

Některé nástroje vyžadují oprávnění:

- **Procházení webu** — vyžaduje přístup k internetu
- **Analytika** — vyžaduje integraci Google Analytics
- **Generování obsahu** — vyžaduje API klíče
- **Pokročilé funkce** — mohou vyžadovat prémiové předplatné
- **Advanced doprovodné nástroje** — vyžadují samostatně distribuovaný Advanced balíček a výslovnou důvěru administrátora

### API klíče a přihlašovací údaje {#api-keys-and-credentials}

Nakonfigurujte API klíče pro nástroje, které je vyžadují:

1. Přejděte na **Gratis AI Agent → Nastavení → API klíče**
2. Zadejte přihlašovací údaje pro každý nástroj
3. Otestujte připojení
4. Bezpečně uložte

### Instalace Advanced doprovodného balíčku {#installing-the-advanced-companion-package}

Advanced doprovodný balíček je vydáván samostatně od základního ZIP balíčku WordPress.org. Instalujte jej pouze z oficiálního distribučního kanálu projektu pro dané vydání a poté omezte přístup na důvěryhodné administrátory. Před povolením nástrojů souborového systému, databáze, WP-CLI, REST dispatcher, tvorby pluginů, správy uživatelů nebo benchmarků na produkčním webu zkontrolujte brány lidského schválení a chování Git snapshotů.

## Používání sd-ai-agent/site-scrape {#using-sd-ai-agentsite-scrape}

### Základní použití {#basic-usage}

Požádejte Theme Builder o analýzu webu:

```
Analyzuj design webu mého konkurenta na competitor.com
a navrhni designová zlepšení pro můj web.
```

### Konkrétní analýza {#specific-analysis}

Vyžádejte si konkrétní typy analýzy:

```
Extrahuj paletu barev z example.com a použij ji jako inspiraci.
```

```
Analyzuj strukturu navigace example.com a použij podobnou
organizaci na mém webu.
```

```
Zkontroluj responzivitu example.com na mobilech a zajisti, aby můj web
byl stejně responzivní.
```

### Srovnávací analýza {#comparison-analysis}

Porovnejte více webů:

```
Porovnej designy site1.com a site2.com a vytvoř design,
který kombinuje nejlepší prvky obou.
```

## Omezení a úvahy k nástrojům {#tool-limitations-and-considerations}

### Omezení rychlosti {#rate-limiting}

- Scraping je omezen limity požadavků, aby se zabránilo přetížení serveru
- Více požadavků na stejný web může být zpomaleno
- Analýza velkých webů může trvat déle

### Přesnost obsahu {#content-accuracy}

- Dynamický obsah nemusí být plně zachycen
- Obsah vykreslovaný JavaScriptem může být neúplný
- Data v reálném čase se nemusí projevit
- Některý obsah může být za paywallem

### Právní a etická hlediska {#legal-and-ethical-considerations}

- Respektujte robots.txt a zásady webu
- Nescrapujte obsah chráněný autorskými právy za účelem reprodukce
- Používejte analýzu pro inspiraci, ne ke kopírování
- Ověřte, že máte práva k použití extrahovaného obsahu
- Dodržujte podmínky služby analyzovaných webů

### Dopad na výkon {#performance-impact}

- Scrapování velkých webů může trvat delší dobu
- Více současně spuštěných scrapování může být pomalejší
- Rychlost ovlivňuje síťové připojení
- Velké datové sady mohou vyžadovat více zpracování

## Osvědčené postupy {#best-practices}

### Použití analýzy webu {#using-site-analysis}

1. **Analyzujte více webů** — získejte inspiraci z několika zdrojů
2. **Zaměřte se na strukturu** — poznejte vzory rozvržení a organizace
3. **Extrahujte barvy** — použijte barevné palety jako výchozí body
4. **Studujte typografii** — identifikujte kombinace písem, které se vám líbí
5. **Projděte navigaci** — pochopte organizaci menu

### Etické scrapování {#ethical-scraping}

1. **Respektujte robots.txt** — dodržujte pokyny webu
2. **Nekopírujte obsah** — používejte analýzu pouze pro inspiraci
3. **Ověřte práva** — ujistěte se, že můžete extrahovaný obsah použít
4. **Uvádějte zdroje** — přiznejte zdroje inspirace
5. **Dodržujte podmínky** — řiďte se podmínkami služby webu

### Maximalizace efektivity nástroje {#maximizing-tool-effectiveness}

1. **Buďte konkrétní** — požadujte konkrétní typy analýzy
2. **Poskytněte kontext** — vysvětlete účel svého webu
3. **Nastavte očekávání** — popište své cíle návrhu
4. **Iterujte** — zpřesňujte na základě výsledků
5. **Kombinujte nástroje** — použijte více nástrojů pro komplexní analýzu

## Řešení potíží {#troubleshooting}

### Web nelze scrapovat {#site-wont-scrape}

- Zkontrolujte, zda je web veřejně dostupný
- Ověřte, že robots.txt povoluje scrapování
- Zkuste jiný web
- Zkontrolujte internetové připojení
- Pokud problém přetrvává, kontaktujte podporu

### Neúplná analýza {#incomplete-analysis}

- Web může obsahovat dynamický obsah
- JavaScript nemusí být plně vykreslen
- U velkých webů může dojít k vypršení časového limitu
- Zkuste místo toho analyzovat konkrétní stránky
- Požádejte o konkrétní typy analýzy

### Pomalý výkon {#slow-performance}

- Analýza velkých webů trvá déle
- Více současně spuštěných scrapování je pomalejší
- Rychlost ovlivňuje síťové připojení
- Zkuste to mimo špičku
- Nejprve analyzujte menší části

## Související dokumentace {#related-documentation}

- [Úvodní rozhovor](./discovery-interview.md) — shromážděte informace o designu
- [Směr designu](./design-direction.md) — zpřesněte svůj design
- [Menu pro pohostinství](./hospitality-menus.md) — vytvořte stránky menu
