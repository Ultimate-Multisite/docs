---
title: Specifikace webu dovednost
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Došvihování specifikace webu {#site-specification-skill}

**Došvihování specifikace webu** je strukturovaný přístup k zachycení cílů vašeho webu, cílové skupiny a značkové identity. Tyto informace jsou uloženy do vaší paměti **site_brief**, kterou agenti používají napříč různými sezeními, aby poskytovali konzistentní a kontextově vědomou pomoc.

## Co je specifikace webu? {#what-is-site-specification}

Specifikace webu je proces dokumentování následujících bodů:

- **Účel webu**: Co váš web dělá a proč existuje
- **Cílová skupina**: Kdo navštěvuje váš web a co potřebují
- **Značková identita**: Vaše barvy, tón a vizuální styl
- **Firemní cíle**: Jak vypadá úspěch pro váš web
- **Struktura obsahu**: Jak je váš web uspořádán

Tato specifikace se stává vaším **site_brief**, trvalou pamětí, kterou agenti používají k pochopení kontextu vašeho webu.

## Proč použít specifikaci webu? {#why-use-site-specification}

### Konzistence napříč sezeními {#consistency-across-sessions}

Bez site_briefu byste museli svůj účel webu vysvětlovat znovu při každém zahájení nového sezení. S ním agenti okamžitě pochopí:

- Cíle a cílovou skupinu vašeho webu
- Barvy a tón vaší značky
- Strukturu vašeho obsahu
- Vaše obchodní cíle

### Lepší doporučení {#better-recommendations}

Agenti používají váš site_brief k:

- Navrhování funkcí odpovídajících účelu vašeho webu
- Doporučování struktur obsahu, které odpovídají vašim cílům
- Navrhování designů konzistentních s vaší značkou
- Vyhýbání se navrhování nekompatibilních funkcí

### Rychlejší orientace {#faster-onboarding}

Noví agenti (nebo agenti v nových sezeních) se rychle orientují, když čtou váš site_brief, namísto toho, aby museli klást vysvětlující otázky.

## Spuštění specifikace webu {#initiating-site-specification}

### Během onboardingu Theme Builderu {#during-theme-builder-onboarding}

Došvihování specifikace webu je automaticky spuštěno během procesu **onboardingu Theme Builderu**. Agent Setup Assistant klade otázky a vytváří váš site_brief.

### Ruční spuštění {#manual-initiation}

Můžete začít s Došvihováním specifikace webu kdykoli:

```
"Definujme specifikaci mého webu"
```

nebo

```
"Pomoz mi vytvořit site brief"
```

## Proces specifikace webu {#the-site-specification-process}

### Krok 1: Účel webu {#step-1-site-purpose}

Agent se ptá:

```
Jaký je primární účel vašeho webu?
- E-shop
- Blog nebo obsahový web
- Portfolio nebo galerie
- SaaS aplikace
- Komunita nebo fóra
- Jiné: [popište]
```

Můžete vybrat kategorii nebo popsat svůj vlastní účel.

### Krok 2: Cílová skupina {#step-2-target-audience}

```
Kdo je vaše primární cílová skupina?
- Spotřebitelé / obec publikum
- Firemní profesionálové
- Vývojáři / techničtí uživatelé
- Studenti / pedagogové
- Jiné: [popište]

Jaké jsou jejich hlavní potřeby?
```

### Krok 3: Značková identita {#step-3-brand-identity}

```
Jaké jsou barvy vaší značky?
- Primární barva: [výběr barev nebo hex kód]
- Sekundární barva: [výběr barev nebo hex kód]
- Akcentní barva: [volitelné]

Jak byste popsal/a tón vaší značky?
- Profesionální / korporátní
- Kreativní / umělecký
- Hravý / neformální
- Minimalistický / moderní
- Teplý / přátelský
```

### Krok 4: Firemní cíle {#step-4-business-goals}

```
Jak vypadá úspěch pro váš web?
- Generování leadů
- Prodej produktů
- Budování komunity
- Sdílení znalostí
- Budování autority
- Jiné: [popište]

Jaká je vaše primární metrika?
- Příjmy
- Zapojení uživatelů
- Dosah obsahu
- Konverze
- Jiné
```

### Krok 5: Struktura obsahu {#step-5-content-structure}

```
Jak je váš obsah uspořádan?
- Ploché (veškerý obsah na stejné úrovni)
- Hierarchické (kategorie a podkategorie)
- Chronologické (styl blogu)
- Produktové (katalog)
- Jiné: [popište]

Jaké typy obsahu používáte?
- Blogové příspěvky
- Produktové stránky
- Studia případů
- Dokumentace
- Videa
- Jiné
```

## Vaše paměť site_brief {#your-sitebrief-memory}

Po dokončení specifikace webu jsou vaše informace uloženy jako **site_brief** do paměti vašeho agenta. Jedná se o strukturovaný záznam obsahující:

```json
{
  "site_purpose": "E-shop s ručně vyráběným klenotnictvím",
  "target_audience": "Ženy ve věku 25–45 let, zainteresované na udržitelné módě",
  "brand_colors": {
    "primary": "#8B4513",
    "secondary": "#D2B48C",
    "accent": "#2F4F4F"
  },
  "brand_tone": "Teplý, ruční, udržitelné",
  "business_goals": ["Generovat prodeje", "Budovat loajalitu značky"],
  "primary_metric": "Příjmy",
  "content_structure": "Produktový katalog s blogem",
  "content_types": ["Produktové stránky", "Blogové příspěvky", "Příběhy zákazníků"]
}
```

## Prohlížení a aktualizace site_briefu {#viewing-and-updating-your-sitebrief}

### Zobrazení site_briefu {#view-your-sitebrief}

Zeptejte agenta:

```
"Ukáž mi můj site brief"
```

nebo

```
"Co víš o mém webu?"
```

Agent zobrazí vaši uloženou specifikaci.

### Aktualizace site_briefu {#update-your-sitebrief}

Pokud se váš web vyvíjí, můžete jej aktualizovat:

```
"Aktualizuj můj site brief: nyní cílíme na B2B zákazníky"
```

nebo

```
"Obnov specifikaci mého webu"
```

To znovu spustí schopnost Došvihování specifikace webu s vašimi stávajícími informacemi jako výchozní bodem.

## Jak agenti používají site_brief {#how-agents-use-sitebrief}

### Doporučení designu {#design-recommendations}

Když požadujete změny designu, agenti se odvolávají na váš site_brief:

```
Vy: "Přepracuj mi domovskou stránku"
Agent: "Na základě vašeho site briefu cílíte na ženy ve věku 25–45 let s teplým, ručním tónem. Vytvořím design, který zdůrazní vaše ručně vyráběné klenotnictví a udržitelné hodnoty."
```

### Návrhy funkcí {#feature-suggestions}

Agenti navrhují funkce odpovídající vašim cílům:

```
Vy: "Jaké funkce bych měl přidat?"
Agent: "Pro e-shop zaměřený na loajalitu zákazníků doporučuji: program loajality, recenze zákazníků, newsletter a doporučení produktů."
```

### Struktura obsahu {#content-structure}

Agenti navrhují uspořádání obsahu na základě vaší struktury:

```
Vy: "Jak mám uspořádat svůj blog?"
Agent: "Protože používáte produktový katalog s blogem, navrhuji uspořádat příspěvky podle kategorie produktů a vytvořit 'stylistické průvodce', které ukazují více produktů dohromady."
```

## Nejlepší praxe {#best-practices}

### Buďte konkrétní {#be-specific}

Místo "obecné publikum" popište svou skutečnou cílovou skupinu:

- ✓ "Ženy ve věku 25–45 let, zainteresované na udržitelné módě"
- ✗ "Všichni"

### Aktualizujte pravidelně {#update-regularly}

Jak se váš web vyvíjí, aktualizujte svůj site_brief:

- Když se přesunete na novou cílovou skupinu
- Když přidáte nové produktové řady
- Když se změní identita vaší značky
- Když se změní vaše obchodní cíle

### Používejte konzistentní terminologii {#use-consistent-terminology}

Používejte stejné termíny napříč sezeními:

- ✓ Vždy řekněte "udržitelné klenotnictví" (ne "ekologické klenotnictví" a "zelené produkty")
- ✓ Vždy se odkazujte na svou cílovou skupinu stejným způsobem

### Zahrňte kontext {#include-context}

Poskytněte pozadí, které agentům pomůže pochopit vaše rozhodnutí:

- "Cílíme na profesionály, kteří oceňují kvalitu nad cenou"
- "Naše publikum je technologicky vyspělé a očekává moderní design"
- "Jsme startup bez financování, takže potřebujeme řešení s nízkými náklady"

## Vztṛnost k onboardingu Theme Builderu {#relationship-to-theme-builder-onboarding}

Schopnost Došvihování specifikace webu je integrována do procesu **onboardingu Theme Builderu**. Když dokončíte onboarding, váš site_brief je automaticky vytvořen s poskytnutými informacemi.

Můžete také spouštět Došvihování specifikace webu nezávisle, pokud chcete:

- Vylepšit svou specifikaci po počátečním nastavení
- Aktualizovat svůj site_brief, jak se váš web vyvíjí
- Vytvořit podrobnou specifikaci před zahájením Theme Builderu

## Řešení problémů {#troubleshooting}

**Můj site_brief není použit**
- Potvrďte, že má agent přístup k paměti
- Požádejte agenta, aby "vyzvedl můj site brief"
- Zkontrolujte, zda je paměť povolena ve vašich nastaveních

**Chci začít znovu s novým site_briefem**
- Požádejte agenta: "Vymaž můj site brief a začni od nuly"
- Poté znovu spusťte Došvihování specifikace webu

**Agent dává doporučení, která neodpovídají mému site_briefu**
- Požádejte agenta, aby "zkontroloval můj site brief"
- Aktualizujte svůj site_brief, pokud je zastaralý
- Poskytněte další kontext ve svých požadavcích

## Další kroky {#next-steps}

Po definování specifikace webu:

1. **Použijte Theme Builder**: Vytvořte vlastní téma na základě vašeho site_briefu
2. **Vylepšete design**: Použijte schopnost Design System Aesthetics pro podrobně práci na designu
3. **Plánujte obsah**: Požádejte agenta o doporučení struktury obsahu
4. **Vytvořte funkce**: Požádejte o funkce odpovídající vašim obchodním cílům
