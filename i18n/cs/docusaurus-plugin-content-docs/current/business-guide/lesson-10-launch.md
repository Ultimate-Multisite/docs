---
title: 'Lekce 10: Den spuštění'
sidebar_position: 11
_i18n_hash: 49ba467b8efba57e92cf072bcec53969
---
# Lekce 10: Den spuštění

Vše je postaveno. Než otevřete dveře, tato lekce vás provede kontrolním seznamem před spuštěním, abychom se ujistili, že nic není poškozené, chybějící nebo neohrabané.

## Kde jsme skončili {#where-we-left-off}

FitSite má připravené šablony, plány, proces platby, branding, onboarding a ceny. Nyní ověříme, že vše funguje a spuštíme službu.

## Kontrolní seznam před spuštěním {#pre-launch-checklist}

Projděte každý položku. Nic nesk 나서te.

### Infrastruktura platformy {#platform-infrastructure}

- [ ] Hosting je stabilní a dobře funguje pod zátěží
- [ ] Wildcard SSL je aktivní a všechny poddomény jsou dostupné přes HTTPS
- [ ] Mapování domény funguje – otestujte vytvoření webu a mapování vlastní domény
- [ ] Zálohování je nakonfigurováno a otestováno (obnovte alespoň jednu, abyste to ověřili)
- [ ] Monitorování je zajištěno – budete vědět, pokud platforma selže

### Šablony {#templates}

- [ ] Všechny tři šablony se na nových webech načítají správně
- [ ] Zástupný obsah je užitečný a je bez překlepů
- [ ] Všechny obrázky mají řádně získané licence (žádné vodoznačky ze stock fotek)
- [ ] Mobilní optimalizace funguje na každé stránce šablony
- [ ] Rychlost načítání stránky je přijatelná (testujte nástroji jako GTmetrix nebo PageSpeed Insights)
- [ ] Žádné rozbité odkazy ani chybějící soubory na žádné šabloně

### Plány a produkty {#plans-and-products}

- [ ] Všechny tři plány jsou aktivní a viditelné
- [ ] Popisy plánů jsou přesné a specifické pro danou oblast
- [ ] Ceny jsou správné (měsíční a roční)
- [ ] Poplatky za nastavení jsou nakonfigurovány na správných plánech
- [ ] Zkušební období funguje na plánu Starter
- [ ] Doplnění objednávky (Order bumps) se zobrazují správně během platby
- [ ] Omezení pluginů a témat jsou správně vynucena pro každý plán

### Proces platby (Checkout Flow) {#checkout-flow}

- [ ] Dokončte kompletní testovací registraci pro každý plán (použijte testovací režim platby)
- [ ] Výběr šablony zobrazuje správné šablony pro každý plán
- [ ] Platba probíhá úspěšně
- [ ] Zákazník obdrží e-mail s přivítáním po registraci
- [ ] Nový web je vytvořen se správnou šablonou
- [ ] Zákazník může okamžitě přihlásit na svůj nový web
- [ ] Slevové kódy fungují správně

### Branding {#branding}

- [ ] Stránka přihlášení zobrazuje branding FitSite
- [ ] Administrační dashboard zobrazuje branding FitSite
- [ ] Všechny systémové e-maily používají branding FitSite a jazyk specifický pro fitness
- [ ] Faktury se zobrazují správně s vašimi obchodními údaji
- [ ] Marketingová stránka je aktivní a odkazuje na formulář platby

### Onboarding {#onboarding}

- [ ] Widget Quick Start se zobrazuje na dashboardu nových zákazníků
- [ ] Všechny odkazy Quick Start vedou na správné stránky
- [ ] Sekvence e-mailů s přivítáním je nakonfigurována a otestována
- [ ] Články v bázi znalostí jsou publikovány a dostupné
- [ ] Stránka účtu zobrazuje správné informace o plánu a možnosti upgrade

### Právní a obchodní {#legal-and-business}

- [ ] Obchodní podmínky jsou publikovány a odkázány z procesu platby
- [ ] Zásady ochrany osobních údajů jsou publikovány a dostupné
- [ ] Vrátná politika je definována a dokumentována
- [ ] Obchodní subjekt je nastaven pro přijímání plateb
- [ ] Brána pro platby je v live režimu (ne v test režimu)
- [ ] Konfigurace daní je správná pro vaši jurisdikci

## Soft Launch vs. Hard Launch {#soft-launch-vs-hard-launch}

Zvažte dvoufázový spuštění:

### Fáze 1: Soft Launch {#phase-1-soft-launch}

Začněte s 5–10 majiteli fitness studií, kteří se zaregistrují před veřejným spuštěním. Jsou to vaši beta zákazníci. Nabídněte jim významnou slevu (50 % doživotně, nebo 3 měsíce zdarma) výměnou za:

- Upřímný feedback o procesu registrace a onboardingu
- Souhlas s použitím jejich webu jako ukázkového příkladu
- Hlášení jakýchkoli chyb nebo problémů, které narazí

To vám poskytne skutečný feedback od zákazníků a živé weby k ukázání, než se otevřete veřejnosti.

### Fáze 2: Public Launch {#phase-2-public-launch}

Jakmile je feedback z soft launchu zohledněn:

- Přepněte bránu pro platby do live režimu
- Publikujte svou marketingovou stránku
- Začněte získávat zákazníky (Lekce 11)
- Oznámení na relevantních kanálech fitness průmyslu

## Akce dne spuštění {#launch-day-actions}

V den, kdy se stáváte veřejní:

1. **Přepněte na live platby** – vypněte testovací režim na vaší bráně pro platby
2. **Ověřte ještě jednou** – proveďte kompletní testovací registraci s skutečnou platbou (samotě refundujte)
3. **Monitorujte pečlivě** – sledujte chyby, selhání registrací nebo problémy s platbami
4. **Buďte dostupní** – vaši první skuteční zákazníci mohou potřebovat pomoc a rychlá reakce buduje důvěru
5. **Oslavte krátce** – pak se vraťte k práci

## Co může jít špatně {#what-can-go-wrong}

Buďte připraveni na:

- **Problémy s bránou pro platby**: Mějte připravený kontaktní tým podpory vašeho poskytovatele brány
- **Problémy se SSL certifikáty**: Věděte, jak certifikáty kontrolovat a obnovovat
- **Selhání doručení e-mailů**: Otestujte, že e-maily skutečně dorazí (zkontrolujte složku nevyžádané)
- **Výkon pod zátěží**: Pokud dojde k náhlému nárůstu návštěvnosti, vězte, jak škálovat svůj hosting
- **Zmatek zákazníků**: Mějte připravenou bázi znalostí a kanály podpory

## FitSite Network do teď {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode) ✓
├── Ultimate Multisite (configured + branded) ✓
├── Platform Domain (fitsite.com + wildcard SSL) ✓
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain) ✓
├── Products (Starter, Growth, Pro + Order Bumps + Discounts) ✓
├── Checkout Flow (tested end-to-end) ✓
├── Branding (complete) ✓
├── Customer Onboarding (Quick Start, emails, help resources) ✓
├── Pricing Strategy (annual, trials, setup fees, discounts) ✓
├── Pre-Launch Checklist (verified) ✓
├── Soft Launch (beta customers onboarded) ✓
└── LIVE ✓
```

## Co jsme v této lekci postavili {#what-we-built-this-lesson}

- **Komplexní kontrolní seznam před spuštěním**, který pokrývá infrastrukturu, obsah, platby a právní záležitosti
- **Strategii soft launchu** pro získání skutečného feedbacku před spuštěním
- **Postupy dne spuštění** pro spuštění s jistotou
- **Konzervační plán** pro běžné problémy dne spuštění

---

**Další:** [Lekce 11: Najít zákazníky](lesson-11-customers) — nyní, když je FitSite aktivní, jak získat majitele fitness studií k registraci?
