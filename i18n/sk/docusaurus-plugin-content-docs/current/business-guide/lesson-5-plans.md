---
title: 'Lekcia 5: Navrhovanie vašich plánov'
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# Lekcia 5: Navrhovanie vašich plánov

Úrovne vašich plánov nie sú len cenové úrovne -- sú odrazom toho, ako vaši špecializovaní zákazníci skutočne fungujú. V tejto lekcii navrhnete úrovne produktov, ktoré zodpovedajú reálnym potrebám fitness podnikov v rôznych fázach.

## Kde sme skončili

FitSite má pripravené tri šablóny (Studio Essential, Gym Pro, Fitness Chain). Teraz vytvoríme plány, ktoré určujú, k čomu zákazníci získajú prístup a koľko zaplatia.

## Premýšľanie v zákazníckych segmentoch

Chybou, ktorú robí väčšina ľudí, je navrhovanie plánov okolo technických funkcií (úložisko, šírka pásma, počet stránok). Vaši špecializovaní zákazníci v týchto pojmoch nepremýšľajú. Majiteľ posilňovne premýšľa o tom, čo potrebuje na prevádzkovanie svojho podniku.

Pre fitness štúdiá existujú tri prirodzené segmenty:

| Segment | Kto sú | Čo potrebujú |
|---------|-------------|----------------|
| **Sólo tréneri / malé štúdiá** | 1 – 3 zamestnanci, jedna lokalita, začínajú | Profesionálnu stránku, informácie o lekciách, kontaktný formulár |
| **Zavedené posilňovne** | 5 – 20 zamestnancov, jedna lokalita, rastú | Všetko vyššie plus rezervácie, blog, galériu, vlastnú doménu |
| **Fitness reťazce** | Viaceré lokality, zavedená značka | Všetko vyššie plus multi-site, stránky lokalít, adresár zamestnancov |

Vaše plány by mali zodpovedať týmto segmentom, nie svojvoľným balíkom funkcií.

## Vytváranie plánov FitSite

Pre každý plán prejdite na **Ultimate Multisite > Products > Add Product**.

### Plán 1: FitSite Starter -- 49 USD/mesiac

**Cieľ**: Sólo tréneri a malé štúdiá

**Karta Description**:
- Názov: FitSite Starter
- Popis: „Všetko, čo osobný tréner alebo malé štúdio potrebuje, aby online pôsobili profesionálne.“

**Karta General**:
- Typ produktu: Plan
- Rola zákazníka: Administrator

**Karta Site Templates**:
- Povoliť šablóny stránok: Enabled
- Dostupné šablóny: iba Studio Essential

**Obmedzenia**:
- Stránky: 1
- Miesto na disku: 1 GB
- Vlastná doména: Disabled (používa `studioname.fitsite.com`)

**Karta Plugins**:
- Plugin kontaktného formulára: Force Activate
- SEO plugin: Force Activate
- Rezervačný plugin: Not Available (motivácia na upgrade)

**Karta Themes**:
- Vami vybratá téma: Force Activate
- Všetky ostatné témy: Hidden

### Plán 2: FitSite Growth -- 99 USD/mesiac

**Cieľ**: Zavedené posilňovne s jednou lokalitou

**Karta Description**:
- Názov: FitSite Growth
- Popis: „Pre zavedené posilňovne pripravené rozšíriť svoju online prítomnosť a prilákať nových členov.“

**Karta Site Templates**:
- Dostupné šablóny: Studio Essential a Gym Pro

**Obmedzenia**:
- Stránky: 1
- Miesto na disku: 5 GB
- Vlastná doména: Enabled

**Karta Plugins**:
- Všetko v Starter, plus:
- Rezervačný plugin: Force Activate
- Plugin galérie: Force Activate
- Funkcionalita blogu: Available

**Karta Up & Downgrades**:
- Skupina plánov: FitSite Plans
- Poradie produktu: 2

### Plán 3: FitSite Pro -- 199 USD/mesiac

**Cieľ**: Fitness reťazce s viacerými lokalitami

**Karta Description**:
- Názov: FitSite Pro
- Popis: „Kompletná platforma pre fitness značky s viacerými lokalitami.“

**Karta Site Templates**:
- Dostupné šablóny: všetky tri šablóny

**Obmedzenia**:
- Stránky: 5 (jedna na lokalitu)
- Miesto na disku: 20 GB
- Vlastná doména: Enabled

**Karta Plugins**:
- Všetko v Growth, plus:
- Všetky prémiové pluginy: Force Activate

**Karta Up & Downgrades**:
- Skupina plánov: FitSite Plans
- Poradie produktu: 3

## Nastavenie skupiny plánov

Skupina plánov zabezpečuje, že zákazníci môžu prejsť na vyšší alebo nižší plán iba v rámci rodiny plánov FitSite. Na karte **Up & Downgrades** každého plánu:

1. Nastavte **Plan Group** na „FitSite Plans“ pre všetky tri plány
2. Nastavte **Product Order** na 1 (Starter), 2 (Growth), 3 (Pro)

Tým sa vytvorí jasná cesta upgradu: Starter → Growth → Pro.

## Pridanie Order bumps

Order bumps sú doplnkové produkty ponúkané počas checkout. Pre FitSite zvážte:

- **Extra Storage Pack** (19 USD/mesiac) -- dodatočných 5 GB miesta na disku
- **Priority Support** (29 USD/mesiac) -- rýchlejšie časy odozvy
- **Additional Site** (39 USD/mesiac) -- pre zákazníkov, ktorí potrebujú viac stránok, než ich plán umožňuje

Vytvorte ich ako produkty typu **Package** v Ultimate Multisite a priraďte ich k relevantným plánom.

## Prečo táto štruktúra funguje

- **Starter** odstraňuje bariéry vstupu -- nízka cena, jednoduchá ponuka, rýchlo dostane trénerov online
- **Growth** pridáva funkcie, o ktoré posilňovne skutočne žiadajú -- rezervácie, galérie, vlastné domény
- **Pro** obsluhuje segment s vysokou hodnotou, ktorý potrebuje podporu pre viacero lokalít
- **Order bumps** umožňujú zákazníkom prispôsobiť si ponuku bez komplikovania základných plánov
- **Jasná cesta upgradu** znamená, že zákazníci rastú s vami namiesto toho, aby odišli

## Sieť FitSite doteraz

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo) → Studio Essential template
│   ├── FitSite Growth ($99/mo) → Studio Essential + Gym Pro templates
│   ├── FitSite Pro ($199/mo) → All templates
│   └── Order Bumps (Extra Storage, Priority Support, Additional Site)
└── Ready for checkout configuration (next lesson)
```

## Čo sme v tejto lekcii vytvorili

- **Tri úrovne plánov** priradené k reálnym segmentom fitness podnikov
- **Obmedzovanie funkcií** pomocou ovládacích prvkov pluginov a šablón v Ultimate Multisite
- **Skupinu plánov** s jasnou cestou upgradu
- **Produkty Order bump** pre dodatočné príjmy
- **Cenovú štruktúru** založenú na hodnote pre zákazníka, nie na technických špecifikáciách

---

**Ďalej:** [Lekcia 6: Skúsenosť s registráciou](lesson-6-checkout) -- vytvoríme checkout flow, ktorý premení majiteľov fitness štúdií na platiacich zákazníkov.
