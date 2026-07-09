---
title: 'Lekce 6: Zážitek z registrace'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Lekce 6: Zážitky z registrace {#lesson-6-the-signup-experience}

Proces platby je místo, kde zájem se mění na příjem. Zmatečný nebo obecný proces registrace vás zákazníky ztratí. Nišově zaměřený proces, který mluví jejich jazykem a je bez námahy použitelný, je pro někoně záchranný.

## Kde jsme skončili {#where-we-left-off}

FitSite má připravené šablony a plány. Nyní vytvoříme proces registrace a platby, který přemění majitele fitness studií na platící zákazníky.

## Pochopení procesu registrace {#understanding-the-registration-flow}

Checkout formuláře Ultimate Multisite jsou plně přizpůsobitelné vímejstečné formuláře. Pro FitSite chceme proces, který:

1. Zní tak, jako by byl vytvořen pro fitness podniky
2. Sbírá pouze to, co je nutné
3. Zákazníka dostane na funkční stránku co nejdříve

Podrobnější technický přehled naleznete v [Procesu registrace](/user-guide/configuration/the-registration-flow).

## Návrh checkoutu FitSite {#designing-the-fitsite-checkout}

Přejděte do **Ultimate Multisite > Checkout Forms** a vytvořte nový formulář.

### Krok 1: Výběr plánu {#step-1-plan-selection}

První věc, kterou majitel fitness studia uvidí, by měly být plány, prezentované v pojmech, které rozumí.

- Přidejte pole **Pricing Table** (Tabulka cen)
- Konfigurujte ho tak, aby zobrazoval všechny tři plány FitSite
- Popisy plánů, které jste napsali v Lekci 5, se zde objeví – ujistěte se, že se týkají potřeb fitness podnikání, nikoli technických funkcí

:::tip Nišový jazyk je důležitý
„1 GB úložiště“ nic neznamená pro majitele sportoviště. „Vše, co potřebujete pro profesionální webové studio“ znamená vše. Popisy plánů pište v jazyce vašeho zákazníka.
:::

### Krok 2: Výběr šablony {#step-2-template-selection}

Po výběru plánu si zákazník vybere svou výchozí šablonu.

- Přidejte pole **Template Selection** (Výběr šablony)
- Dostupné šablony jsou filtrovány podle vybraného plánu (konfigurováno v Lekci 5)
- Každá šablona by měla mít náhledovou fotografii zobrazující design specifický pro fitness

### Krok 3: Vytvoření účtu {#step-3-account-creation}

Udržujte to minimální. Sbírejte pouze:

- E-mailová adresa
- Heslo
- Název studia/podniku (to se stane názvem jejich webu)

Neptejte se na informace, které nepotřebujete při registraci. Každé extra pole snižuje konverze.

### Krok 4: Nastavení webu {#step-4-site-setup}

- **Site title** (Název webu): Předplnit názvem studia zadaným v Kroku 3
- **Site URL** (URL webu): Automaticky vygenerovat z názvu studia (např. `ironworks.fitsite.com`)

### Krok 5: Úhrada {#step-5-payment}

- Přidejte pole **Payment** (Platba)
- Konfigurujte svou bránu pro platby (doporučujeme [Stripe](/user-guide/payment-gateways/stripe) pro předplatné)
- Pokud jste v Lekci 5 vytvořili *order bumps*, přidejte pole **Order Bump** před krokem platby

### Krok 6: Potvrzení {#step-6-confirmation}

- Přizpůsobte zprávu o potvrzení jazykem specifickým pro fitness
- Příklad: „Váš web pro fitness studio je v procesu tvorby. Bude vás za několik sekund přesměrován na váš nový web.“

## Přidání přepínače výběru období {#adding-a-period-selection-toggle}

Pokud jste v plánech nastavili různé ceny (měsíčně vs. ročně), přidejte do formuláře platby pole **Period Selection** (Výběr období), aby zákazníci mohli přepínat mezi obdobími fakturace. Pokyny naleznete v [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle).

## Konfigurace platby {#configuring-payment}

Pokud jste bránu pro platby ještě nastavili:

1. Přejděte do **Ultimate Multisite > Settings > Payment Gateways**
2. Postupujte podle [návodu pro nastavení Stripe](/user-guide/payment-gateways/stripe) nebo podle své preferované brány
3. Otestujte celý proces platby testovací platbou

Podrobnosti o tom, jak platby přijdou na váš účet, naleznete v [Getting Paid](/user-guide/payment-gateways/getting-paid).

## Testování procesu {#testing-the-flow}

Než se budete posouvat dál, dokončete kompletní testovací registraci:

1. Otevřete formulář platby v okně v režimu incognito/soukromí
2. Vyberte plán
3. Vyberte šablonu
4. Vytvořte účet
5. Dokončete platbu (použijte testovací režim)
6. Ověřte, že je web vytvořen s použitou šablonou

Zkontrolujte, zda:

- [ ] Popisy plánů jsou jasné a specifické pro niši
- [ ] Náhledy šablon zobrazují design vhodné pro fitness
- [ ] URL webu se generuje správně z názvu studia
- [ ] Platba probíhá úspěšně
- [ ] Zákazník se dostane na funkční web s vybranou šablonou
- [ ] E-maily o potvrzení používají jazyk specifický pro fitness

## FitSite Network do teď {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow
│   ├── Plan selection with niche-specific descriptions
│   ├── Template selection with fitness previews
│   ├── Minimal account creation
│   ├── Payment via Stripe
│   └── Fitness-specific confirmation
└── Ready for branding (next lesson)
```

## Co jsme v této lekci vytvořili {#what-we-built-this-lesson}

- **Vímejstečný formulář platby** přizpůsobený majitelům fitness studií
- **Nišový jazyk** po celém procesu registrace
- **Minimální tření** – pouze nezbytná pole, rychlá cesta k funkčnímu webu
- **Integrace platby** s testovacím ověřením
- **Otestovaný end-to-end proces** od výběru plánu po funkční web

---

**Další:** [Lekce 7: Jak to udělat svým](lesson-7-branding) – platformu převedeme na vlastní značku a zřídíme FitSite jako značku.
