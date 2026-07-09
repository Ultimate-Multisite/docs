---
title: 'Lekce 5: Návrhování vašich plánů'
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# Lekce 5: Navrhování vašich plánů {#lesson-5-designing-your-plans}

Vaše úrovně plánů nejsou pouhým cenotvorbou – odrážejí, jak skutečně funguje vaše zacílená klientela. V této lekci navrhnete produktové úrovně, které odpovídají skutečným potřebám fitness podniků v různých fázích.

## Kde jsme skončili {#where-we-left-off}

FitSite má připraveno tři šablony (Studio Essential, Gym Pro, Fitness Chain). Nyní vytvoříme plány, které určují, na co mají zákazníci přístup a za co platí.

## Myšlení v segmentu zákazníků {#thinking-in-customer-segments}

Chyba, kterou většina lidí udělá, je navrhování plánů kolem technických funkcí (úložiště, propustnost, počet stránek). Vaše zacílená klientela neuvádí tyto termíny. Vlastník posilovny přemýšlí o tom, co potřebuje k provozování svého podnikání.

Pro fitness studia existují tři přirozené segmenty:

| Segment | Kdo jsou | Co potřebují |
|---------|-------------|----------------|
| **Samostatní trenéři / malé studia** | 1–3 zaměstnanci, jedna lokalita, začínají | Profesionální web, informace o třídách, kontaktní formulář |
| **Zavedené posilovny** | 5–20 zaměstnanců, jedna lokalita, rostou | Vše výše uvedené plus rezervace, blog, galerie, vlastní doména |
| **Fitness řetězce** | Více lokalit, zavedená značka | Vše výše uvedené plus multi-site, stránky lokalit, adresář zaměstnanců |

Vaše plány by měly odpovídat těmto segmentům, nikoli náhodným balíčkům funkcí.

## Vytváření plánů FitSite {#creating-the-fitsite-plans}

Pro každý plán se dostanete na **Ultimate Multisite > Products > Add Product**.

### Plán 1: FitSite Starter – 49 USD/měsíc {#plan-1-fitsite-starter----49month}

**Cíl**: Samostatní trenéři a malé studia

**Sekce Popis**:
- Název: FitSite Starter
- Popis: „Vše, co potřebuje osobní trenér nebo malé studio, aby vypadalo online profesionálně.“

**Sekce Obecné**:
- Typ produktu: Plán
- Role zákazníka: Administrator

**Sekce Šablony webů**:
- Umožnit šablony webů: Zapnuto
- Dostupné šablony: Pouze Studio Essential

**Omezení**:
- Webové stránky: 1
- Úložiště: 1 GB
- Vlastní doména: Vymazáno (používá `studioname.fitsite.com`)

**Sekce Plugins**:
- Plugin pro kontaktní formulář: Nutí aktivovat
- Plugin pro SEO: Nutí aktivovat
- Plugin pro rezervace: Není k dispozici (podnět k upgradu)

**Sekce Tém**:
- Vybraná téma: Nutí aktivovat
- Všechny ostatní téma: Skryto

### Plán 2: FitSite Growth – 99 USD/měsíc {#plan-2-fitsite-growth----99month}

**Cíl**: Zavedené posilovny v jedné lokalitě

**Sekce Popis**:
- Název: FitSite Growth
- Popis: „Pro zavedené posilovny, které jsou připraveny rozvést svou online přítomnost a přitahovat nové členy.“

**Sekce Šablony webů**:
- Dostupné šablony: Studio Essential a Gym Pro

**Omezení**:
- Webové stránky: 1
- Úložiště: 5 GB
- Vlastní doména: Zapnuto

**Sekce Plugins**:
- Vše z Starter, plus:
- Plugin pro rezervace: Nutí aktivovat
- Plugin pro galerii: Nutí aktivovat
- Funkcionalita blogu: Dostupné

**Sekce Upgrade a Downgrade**:
- Skupina plánů: FitSite Plans
- Pořadí produktu: 2

### Plán 3: FitSite Pro – 199 USD/měsíc {#plan-3-fitsite-pro----199month}

**Cíl**: Fitness řetězce s více lokalitami

**Sekce Popis**:
- Název: FitSite Pro
- Popis: „Kompletní platforma pro fitness značky s více lokalitami.“

**Sekce Šablony webů**:
- Dostupné šablony: Vše tři šablony

**Omezení**:
- Webové stránky: 5 (jedna na lokalitu)
- Úložiště: 20 GB
- Vlastní doména: Zapnuto

**Sekce Plugins**:
- Vše z Growth, plus:
- Vše premium pluginy: Nutí aktivovat

**Sekce Upgrade a Downgrade**:
- Skupina plánů: FitSite Plans
- Pořadí produktu: 3

## Nastavení skupiny plánů {#setting-up-the-plan-group}

Skupina plánů zajišťuje, že zákazníci mohou upgradovat nebo downgradovat pouze v rámci rodiny plánů FitSite. Na sekci **Upgrade a Downgrade** každého plánu:

1. Nastavte **Skupinu plánů** na „FitSite Plans“ pro všechny tři plány.
2. Nastavte **Pořadí produktu** na 1 (Starter), 2 (Growth), 3 (Pro).

Tím vytvoříte jasnou cestu k upgradu: Starter → Growth → Pro.

## Přidání doplnění objednávky {#adding-order-bumps}

Doplnění objednávky (Order bumps) jsou doplňkové produkty nabízené při pokladně. Pro FitSite zvažte:

- **Extra Storage Pack** (19 USD/měsíc) – dodatečných 5 GB úložiště
- **Priority Support** (29 USD/měsíc) – rychlejší dobu odezvy
- **Additional Site** (39 USD/měsíc) – pro zákazníky, kteří potřebují více webů, než umožňuje jejich plán

Vytvořte je jako produkty typu **Package** v Ultimate Multisite a asociujte je s relevantními plány.

## Proč tato struktura funguje {#why-this-structure-works}

- **Starter** ničí bariéry vstupu – nízká cena, jednoduchá nabídka, rychle dostane trenéry online
- **Growth** přidává funkce, které posilovny skutečně požadují – rezervace, galerie, vlastní domény
- **Pro** slouží segmentu s vysokou hodnotou, který potřebuje podporu pro více lokalit
- **Doplnění objednávky** umožňují zákazníkům přizpůsobit bez komplikování základních plánů
- **Jasná cesta k upgradu** znamená, že zákazníci rostou s vámi, místo aby odešli

## FitSite Network na tuto chvíli {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter (49 USD/měsíc) → Studio Essential template
│   ├── FitSite Growth (99 USD/měsíc) → Studio Essential + Gym Pro templates
│   ├── FitSite Pro (199 USD/měsíc) → All templates
│   └── Order Bumps (Extra Storage, Priority Support, Additional Site)
└── Ready for checkout configuration (next lesson)
```

## Co jsme v této lekci vytvořili {#what-we-built-this-lesson}

- **Tři úrovně plánů** mapované na skutečné segmenty fitness podnikání
- **Omezování funkcí** pomocí ovládacích prvků pluginů a šablon Ultimate Multisite
- **Skupinu plánů** s jasnou cestou k upgradu
- **Produkty doplnění objednávky** pro dodatečný příjem
- **Cenovou strukturu** založenou na hodnotě pro zákazníka, nikoli na technických specifikacích

---

**Další:** [Lekce 6: Zážitky z registrace](lesson-6-checkout) – vytvoříme proces pokladny, který převede majitele fitness studií na platící zákazníky.
