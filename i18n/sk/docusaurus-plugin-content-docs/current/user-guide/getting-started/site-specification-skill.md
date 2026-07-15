---
title: Špecifikácia webovej stránky
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Skilna špecifikácia webu

**Skilna špecifikácia webu** je štruktúrovaný prístup k zachytávaniu cieľov vášho webu, publikum a identickosti značky. Táto informácia sa ukladá v vašej pamäti **site_brief**, ktorú agenti odkazujú počas všetkých sesíi na poskytnutie konzistentnej a kontextu-zameranej pomoci.

## Čo je špecifikácia webu? {#what-is-site-specification}

Špecifikácia webu je proces dokumentovania:

- **Cieľ webu**: čo váš web robí a prečo existuje
- **Císelné publikum**: kto navštívi váš web a aké potreby má
- **Identita značky**: vaše farby, tón a vizuálny štýl
- **Biznisové ciele**: ako bude úspech na vašom webe vyzera
- **Struktúra obsahu**: ako je váš web zorganizovaný

Tá špecifikácia sa stane vaším **site_brief**, trvalou pamäťou, ktorú agenti používajú na pochopenie kontextu vášho webu.

## Prečo používať špecifikáciu webu? {#why-use-site-specification}

### Konzistentnosť počas sesíi {#consistency-across-sessions}

Bez site_brief musia každý raz, keď začnete novú sesiu, vysvetliť účel vášho webu. S ním agenti okamžite pochopia:

- Cieľ vašeho webu a publikum
- Farby a tón vašej značky
- Štruktúru vášho obsahu
- Vaše biznisové ciele

### Lepšie odporúčania {#better-recommendations}

Agenti používajú váš site_brief na:

- Predložené funkcie, ktoré sú v súlade s cieľom vášho webu
- Odporúčanie štruktúr obsahu, ktoré zodpovedajú vašim cieľom
- Navrhovanie návrhov konzistentných s vašou značkou
- Vyhnávanie odporúčaní nespôsobilných funkcií

### Rýchle začiatky práce (Onboarding) {#faster-onboarding}

Nové agenti (alebo agenti v nových sesíi) si rýchlo zvyknú, čítanie vášho site_briefu namiesto zadávania doprevedčivých otázok.

## Iniciačovanie špecifikácie webu {#initiating-site-specification}

### Po začiatku onboarding-u Theme Builder {#during-theme-builder-onboarding}

Skilna špecifikácia webu sa automaticky iniciuje počas **onboardingového toku Theme Builder**. Agent pomocníka Setup pomáča s otázkami a vytvára váš site_brief.

### Manuálne iniciovanie {#manual-initiation}

Môžete si definovať špecifikáciu webovej stránky v anytime:

```
"Definuj môj špecifikáciu webovej stránky"
```

alebo

```
"Pomôž mi vytvoriť štruktúru webovej stránky"
```

## Proces definovania špecifikácie webovej stránky (Site Specification Process) {#the-site-specification-process}

### Krok 1: Účel webovej stránky (Site Purpose) {#step-1-site-purpose}

Agent sa pýta:

```
Aký je hlavný účel vašej webovej stránky?
- E-commerce obchod
- Blog alebo obsahová stránka
- Portfolium alebo prezentácia
- SaaS aplikácia
- Komunita alebo fór
- Iné: [popísať]
```

Môžete si vybrať kategóriu alebo popísať svoj vlastný účel.

### Krok 2: Cílová skupina (Target Audience) {#step-2-target-audience}

```
Kto je vaša hlavná cieľová skupina?
- Spotrebiteľov / všeobecná verejnosť
- Biznisové profesionáli
- Vývojári / technickí používatelia
- Študenti / vzdelávajúci sa
- Iné: [popísať]

Ak sú ich hlavné potreby?
```

### Krok 3: Identita značky (Brand Identity) {#step-3-brand-identity}

```
Ak sú vaše farby značky?
- Primárna farba: [výber farby alebo hex kód]
- Sekundárna farba: [výber farby alebo hex kód]
- Akcentná farba: [voliteľné]

Ako by ste môгли opísať tón vašej značky?
- Profesionálny / korporátny
- Kreatívny / umelný
- Hravý / neformálny
- Minimalistický / moderný
- Ciepký / priateľský
```

### Krok 4: Biznisové ciele (Business Goals) {#step-4-business-goals}

```
Čo predstavuje úspech pre vašu webovú stránku?
- Generovanie leadov
- Predaj produktov
- Vytváranie komunity
- Zdieľanie vedomostí
- Ustanovenie autority
- Iné: [popísať]

Aký je váš hlavný metriky?
- Tranzakcie (Revenue)
- Zapojenie používateľov (User engagement)
- Dobiť obsahu (Content reach)
- Konverzie
- Iné
```

### Krok 5: Štruktúra obsahu (Content Structure) {#step-5-content-structure}

```
Ako je váš obsah zorganizovaný?
- Platý (všetky obsahy na rovnakom úrovni)
- Hierarchický (kategórie a podkategórie)
- Chronologický (styl blogu)
- Na základe produktov (katalóg)
- Iné: [popísať]

Aký typ obsahu používate?
- Blogové prvé
- Stránky produktov
- Štúdiá prípadov (Case studies)
- Dokumentácia
- Videá
- Iné
```

## Vaša pamäť site_brief {#your-sitebrief-memory}

Po dokončení definovania špecifikácie webovej stránky sa vaše informácie uložia ako **site_brief** v pamäti vášho agenta. Toto je štruktúrovaný záznam obsahujúci:

## Zobrazenie a aktualizácia vášho site_briefu {#viewing-and-updating-your-sitebrief}

### Zobraziť váš site_brief {#view-your-sitebrief}

Pýtajte sa agenta:

```
"Show me my site brief"
```

alebo

```
"What do you know about my site?"
```

Agent zobrazí vaše uložené špecifikácie.

### Aktualizovať váš site_brief {#update-your-sitebrief}

Ak sa váš web vyvíja, môžete ho aktualizovať:

```
"Update my site brief: we're now targeting B2B customers"
```

alebo

```
"Refresh my site specification"
```

Toto spustí znova skili Site Specification s vašimi existujúcimi informáciami ako bodom odpočinku.

## Ako agenti používajú site_brief {#how-agents-use-sitebrief}

### Návrhy na dizajn {#design-recommendations}

Keď si pýtate o zmeny v dizajne, agenti sa vzájomne odkazujú na váš site_brief:

```
Vy: "Redesign my homepage"
Agent: "Na základe vášho site briefu sa snažíme za cieľom žien veku 25-45 rokov s teplým, ručným tónom. Vytvorím dizajn, ktorý zdôrazňuje vaše ručne vyrobené šperky a udržateľné hodnoty."
```

### Predložené funkcie {#feature-suggestions}

Agenti navrhujú funkcie v súlade s vašimi cieľmi:

```
Vy: "What features should I add?"
Agent: "Pre e-shop zameraný na lojalitu zákazníkov odporúčam: program lojalnosti, recenzie zákazníkov, e-mailový newsletter a odporúčania produktov."
```

### Štruktúra obsahu {#content-structure}

Agenti navrhujú organizáciu obsahu na základe vašej štruktúry:

Ako: „Ako by som ma môžem organizovať svoj blog?“
Agent: „Keďže používate produktový katalóg s blogom, odporúčam postavy posts podľa kategórií produktov a vytvoriť 'stylistické návody', ktoré prezentujú viacero produktov rôzne.“

## Najlepšie praxe {#best-practices}

### Buď konkrétny {#be-specific}

Namísto „obecná publikácia“ opište svoju cieľovú skupinu:

- ✓ „Ženy v rozsahu 25-45 rokov, záujmové v udržateľnej móde“
- ✗ „Všetci“

### Pravidelne aktualizuj {#update-regularly}

Keď sa váš web vyvíja, aktualizujte svoj `site_brief`:

- Keď sa zmeníte na novú cieľovú skupinu
- Keď pridáte nové produktové linky
- Keď sa zmení vaša značková identita
- Keď sa zmenia vaše obchodné ciele

### Používať konzistentnú terminológiu {#use-consistent-terminology}

Používajte rovnaké termíny počas všetkých prevádiek:

- ✓ Vždy hovoríte „udržateľná móda“ (nie „ekologická móda“ a „zelené produkty“)
- ✓ Konzistentne sa na cieľovú skupinu odkazujete tým istým spôsobom

### Obsahovať kontext {#include-context}

Poskytujte pozadanie, ktoré pomáha agentovi pochopiť vaše rozhodnutia:

- „Cílíme na profesionálov, ktorí si vážia kvalitu nad cenou“
- „Naš cieľová skupina je technicky zdatná a očakáva moderný dizajn“
- „Sme startup, ktorý sa financuje vlastnými silami, takže potrebujeme efektívne riešenia“

## Vzťah k onboardingovaniu Theme Builderu {#relationship-to-theme-builder-onboarding}

Skilність Site Specification je integrovaná do **onboardingového toku Theme Builderu**. Keď dokončíte onboarding, váš `site_brief` sa automaticky vytvorí s informáciami, ktoré ste poskytli.

Môžete tiež spustiť Site Specification nezávisle, ak chcete:

- Upraviť svoje špecifikácie po prvom nastavení
- Aktualizovať svoj `site_brief`, keď sa váš web vyvíja
- Vytvoriť podrobnú špecifikáciu pred začiatkom Theme Builderu

## Řešenie problémov (Troubleshooting) {#troubleshooting}

**Môj site_brief sa nepoužíva**
- Potvrďte, že agent má prístup k pamäti
- Požiadajte agenta o „spomenutie môj site_brief“ (`recall my site brief`)
- Skontrolujte, či je pamäť zapnutá v nastaveniach

**Chcem začať s novým site\_briefom**
- Pýtajte agenta: "Vyčistiť môj site brief a začať od začiatku"
- Potom znova spustite Site Specification

**Agent mi robí odporúčania, ktoré sa nehodujú k môjmu site briefu**
- Pýtajte agenta na to, aby "preškolil môj site brief" (review my site brief)
- Aktualizujte svoj site\_brief, ak je starý
- Poskytnite extra kontext v svojich požiadavkách

## Nasledujúce kroky {#next-steps}

Po zdefiniovaní vašej specifikácie webu:

1. **Použite Theme Builder**: Vytvorte vlastný tému na základe vášho site\_briefu
2. **Upravte dizajn**: Použite schopnosť Design System Aesthetics pre detailné návrhy
3. **Plánujte obsah**: Pýtajte agentov na odporúčania k štruktúre obsahu
4. **Vytvorte funkcie**: Požiadajte o funkcie, ktoré sú v súlade s vašimi obchodnými cieleniami
