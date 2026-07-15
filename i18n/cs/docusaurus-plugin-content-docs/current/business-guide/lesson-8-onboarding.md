---
title: 'Ukázka 8: Onboarding zákazníků'
sidebar_position: 9
_i18n_hash: 5b71133bebf067164c77d33db7c81806
---
# Lekce 8: Onboarding klientů

Získat si klienta je jen polovina práce. Pokud se přihlásí, cítí se přetížený a nikdy se nevrátí, jste ho ztratili. Tato lekce navrhuje zážitek, který z nového registrace promění aktivního, zapojeného klienta.

## Kde jsme skončili {#where-we-left-off}

FitSite je plně značkováno a má funkční proces platby. Nyní se zaměříme na to, co se stane po tom, když vlastník fitness studia dokončí registraci a poprvé se dostane na svůj nový web.

## Proč je onboarding důležitý {#why-onboarding-matters}

První 30 minut po registraci určuje, zda klient zůstane, nebo odejde. Vlastník fitness studia, který:

- Se přihlásí a uvidí web, který vypadá jako fitness web → zůstane
- Ví přesně, co má dál udělat → zůstane
- Se cítí ztracen v obecném WordPress dashboardu → odejde

Vaše niszové šablony (Lekce 4) řeší první bod. Tato lekce řeší druhý.

## Zážitky z prvního přihlášení {#the-first-login-experience}

### Widget pro dashboard „Vítejte“ {#welcome-dashboard-widget}

Vytvořte vlastní widget pro dashboard, který přivítá nové klienty a vede je k nastavení. Měl by být viditelný, když se přihlásí poprvé.

**FitSite Quick Start:**

1. **Přidejte název a logo vašeho studia** — Odkaz na Customizer nebo nastavení Site Identity
2. **Aktualizujte rozvrh vašich lekcí** — Přímý odkaz na editor stránky „Classes“
3. **Přidejte své trenéry** — Odkaz na editor stránky „Trainers“
4. **Nastavte své kontaktní údaje** — Odkaz na editor stránky „Contact“
5. **Přehozte svůj web** — Odkaz na frontend

Každý krok odkazuje přímo na relevantní stránku nebo nastavení. Žádné procházení menu.

### Zjednodušte dashboard {#simplify-the-dashboard}

Nízké klienty nemusí vidět každý položku menu WordPressu. Zvažte:

- Skrytí položek menu, které nejsou relevantní pro správu fitness webu (např. Comments, pokud nejsou použity)
- Přepředělení menu tak, aby nejdříve byly položky, které se nejčastěji používají
- Přidání vlastních názvů menu, které mají smysl pro danou niku („Vaše studio“ místo „Appearance“)

Addon [Plugin & Theme Manager](/addons/plugin-and-theme-manager) vám může pomoci kontrolovat, co klient vidí.

## Sekvence welcome e-mailů {#welcome-email-sequence}

Jediný welcome e-mail nestačí. Nastavte sekvenci, která klienty provede během prvního týdne:

### E-mail 1: Vítejte (Ihned po registraci) {#email-1-welcome-immediately-after-signup}

- Předmět: „Vítejte na FitSite – váš web studia je online“
- Obsah: Odkaz na přihlášení, kroky rychlého startu, odkaz na zdroje nápovědy
- Tón: Nadšený, povzbuzující, specifický pro fitness

### E-mail 2: Rychlé výhody (Den 1) {#email-2-quick-wins-day-1}

- Předmět: „3 věci, které musíte udělat na svém FitSite“
- Obsah: Přidejte své logo, aktualizujte hlavní obrázek na domovské stránce, přidejte rozvrh lekcí
- Vložte snímky obrazovky, které ukazují přesně, kam kliknout

### E-mail 3: Zvyklo vám (Den 3) {#email-3-make-it-yours-day-3}

- Předmět: „Vylepšete svůj fitness web“
- Obsah: Přizpůsobte barvy, přidejte fotky trenérů, napište příběh vašeho studia
- Odkaz na příklady skvělých fitness webů na platformě

### E-mail 4: Start (Den 7) {#email-4-go-live-day-7}

- Předmět: „Jste připraveni sdílet svůj FitSite se světem?“
- Obsah: Kontrolní seznam toho, co je třeba ověřit před sdílením, jak připojit vlastní doménu (pokud je na Growth/Pro), tipy pro sdílení na sociálních sítích

:::tip Automatizace e-mailů
Použijte [Webhooks](/user-guide/integrations/webhooks) nebo [Zapier](/user-guide/integrations/zapier) k spuštění těchto e-mailů přes vaši platformu pro e-mail marketing. Dává vám to větší kontrolu nad časováním a umožňuje sledovat zapojení.
:::

## Zdroje nápovědy {#help-resources}

Vytvořte niszový obsah nápovědy, který odpovídá otázkám, které vlastně vlastníci fitness studií kladou:

### Články v znalostní bázi {#knowledge-base-articles}

- „Jak aktualizovat rozvrh lekcí“
- „Přidávání a úprava profilů trenérů“
- „Změna loga a barev studia“
- „Připojení vlastní domény“ (pro klienty Growth/Pro)
- „Přidání widgetu pro rezervace na váš web“

Napište je pro uživatele bez technických znalostí. Používejte snímky obrazovky. Vyvarujte se žargonu WordPressu.

### Video návody {#video-walkthroughs}

Krátké (2–3 minut) screeny, které ukazují:

- První přihlášení a orientace
- Úpravu domovské stránky
- Aktualizaci rozvrhu lekcí
- Přidání nového trenéra

Nejsou nutné být dokonale vypracované produkce. Důležité je, aby byly jasné, užitečné a specifické pro niku.

## Stránka účtu {#the-account-page}

Ultimate Multisite obsahuje klientům určenou [Account Page](/user-guide/client-management/account-page), kde klienté spravují svou předplatnou. Přizpůsobte ji tak, aby:

- Ukazovala jejich aktuální plán FitSite
- Zobrazovala možnosti upgradu s benefity specifickými pro fitness
- Poskytovala historii faktur a stahování účtů
- Odkazovala na zdroje nápovědy

## Měření úspěchu onboardingu {#measuring-onboarding-success}

Sledujte tyto ukazatele, abyste věděli, zda funguje váš onboarding:

- **Rate aktivace**: Jaká procenta registrací skutečně přizpůsobí svůj web během prvního týdne?
- **Přihlášení v prvním týdnu**: Kolikrát se nový klient přihlásí během prvního týdne?
- **Záznamy z podpory od nových klientů**: Vysoká frekvence znamená, že váš onboarding má mezery
- **Konverze z zkušební verze na placenou**: Pokud nabízíte zkušební verze, jaká procenta se konvertuje?

## FitSite Network na tuto chvíli {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (niche-specific, tested)
├── Branding (login, dashboard, emails, invoices, marketing site)
├── Customer Onboarding
│   ├── Quick Start dashboard widget
│   ├── Simplified dashboard for fitness site management
│   ├── 4-email welcome sequence
│   ├── Niche-specific knowledge base
│   ├── Video walkthroughs
│   └── Customized account page
└── Ready for pricing strategy (next lesson)
```

## Co jsme v této lekci vytvořili {#what-we-built-this-lesson}

- **Vedený zážitek z prvního přihlášení** s widgetem Quick Start
- **Zjednodušený dashboard** zaměřený na úkoly spravování fitness webu
- **Sekvence welcome e-mailů**, která klienty provede během prvního týdne
- **Niszové zdroje nápovědy** napsané pro uživatele bez technických znalostí fitness studií
- **Metriky onboardingu** k sledování a vylepšování zážitku

---

**Další:** [Lekce 9: Ceny pro zisk](lesson-9-pricing) — vylepšíme strategii cenotvorby, abychom maximalizovali příjem a minimalizovali odchod klientů.
