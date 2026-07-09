---
title: 'Lekcia 6: Skúsenosť s registráciou'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Lekcia 6: Skúsenosť s registráciou {#lesson-6-the-signup-experience}

Proces checkoutu je miesto, kde sa záujem mení na príjem. Mätúci alebo všeobecný proces registrácie stráca zákazníkov. Špecifický proces pre danú niku, ktorý hovorí ich jazykom a pôsobí jednoducho, ich konvertuje.

## Kde sme skončili {#where-we-left-off}

FitSite má nakonfigurované šablóny a plány. Teraz vytvoríme registračný a checkout zážitok, ktorý z majiteľov fitness štúdií spraví platiacich zákazníkov.

## Pochopenie registračného toku {#understanding-the-registration-flow}

Checkout formuláre Ultimate Multisite sú plne prispôsobiteľné viac-krokové formuláre. Pre FitSite chceme tok, ktorý:

1. Pôsobí, akoby bol vytvorený pre fitness podniky
2. Zbiera iba to, čo je potrebné
3. Dostane zákazníka k funkčnému webu čo najrýchlejšie

Úplnú technickú referenciu nájdete v časti [Registračný tok](/user-guide/configuration/the-registration-flow).

## Navrhovanie FitSite checkoutu {#designing-the-fitsite-checkout}

Prejdite na **Ultimate Multisite > Checkout Forms** a vytvorte nový formulár.

### Krok 1: Výber plánu {#step-1-plan-selection}

Prvá vec, ktorú majiteľ fitness štúdia uvidí, by mali byť plány prezentované pojmami, ktorým rozumie.

- Pridajte pole **Pricing Table**
- Nakonfigurujte ho tak, aby zobrazovalo všetky tri plány FitSite
- Popisy plánov, ktoré ste napísali v lekcii 5, sa zobrazia tu -- uistite sa, že hovoria o potrebách fitness podnikov, nie o technických funkciách

:::tip Na jazyku niky záleží
„1 GB úložiska“ pre majiteľa posilňovne nič neznamená. „Všetko, čo potrebujete pre profesionálny web štúdia“ znamená všetko. Píšte popisy plánov jazykom svojho zákazníka.
:::

### Krok 2: Výber šablóny {#step-2-template-selection}

Po výbere plánu si zákazník vyberie svoju počiatočnú šablónu.

- Pridajte pole **Template Selection**
- Dostupné šablóny sú filtrované podľa plánu, ktorý si vybral (nakonfigurované v lekcii 5)
- Každá šablóna by mala mať náhľadový obrázok zobrazujúci dizajn špecifický pre fitness

### Krok 3: Vytvorenie Account {#step-3-account-creation}

Nechajte to minimálne. Zbierajte iba:

- E-mailovú adresu
- Heslo
- Názov štúdia/podniku (z toho sa stane názov ich webu)

Pri registrácii sa nepýtajte na informácie, ktoré nepotrebujete. Každé ďalšie pole znižuje konverzie.

### Krok 4: Nastavenie webu {#step-4-site-setup}

- **Názov webu**: Predvyplňte z názvu štúdia zadaného v kroku 3
- **URL webu**: Automaticky vygenerujte z názvu štúdia (napr. `ironworks.fitsite.com`)

### Krok 5: Platba {#step-5-payment}

- Pridajte pole **Payment**
- Nakonfigurujte svoju platobnú bránu ([Stripe](/user-guide/payment-gateways/stripe) sa odporúča pre fakturáciu predplatného)
- Ak ste v lekcii 5 vytvorili order bumps, pridajte pole **Order Bump** pred krok platby

### Krok 6: Potvrdenie {#step-6-confirmation}

- Prispôsobte potvrdzovaciu správu jazykom špecifickým pre fitness
- Príklad: „Web vašho fitness štúdia sa vytvára. O niekoľko sekúnd budete presmerovaní na svoj nový web.“

## Pridanie prepínača výberu obdobia {#adding-a-period-selection-toggle}

Ak ste vo svojich plánoch nastavili cenové varianty (mesačné vs. ročné), pridajte do checkout formulára pole **Period Selection**, aby zákazníci mohli prepínať medzi fakturačnými obdobiami. Pokyny nájdete v časti [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle).

## Konfigurácia platby {#configuring-payment}

Ak ste ešte nenastavili platobnú bránu:

1. Prejdite na **Ultimate Multisite > Settings > Payment Gateways**
2. Postupujte podľa [sprievodcu nastavením Stripe](/user-guide/payment-gateways/stripe) alebo svojej preferovanej brány
3. Otestujte celý checkout tok s testovacou platbou

Podrobnosti o tom, ako platby prúdia na váš účet, nájdete v časti [Prijímanie platieb](/user-guide/payment-gateways/getting-paid).

## Testovanie toku {#testing-the-flow}

Pred pokračovaním dokončite úplnú testovaciu registráciu:

1. Otvorte checkout formulár v anonymnom/súkromnom okne prehliadača
2. Vyberte plán
3. Vyberte šablónu
4. Vytvorte účet
5. Dokončite platbu (použite testovací režim)
6. Overte, že web bol vytvorený so správnou šablónou

Skontrolujte, že:

- [ ] Popisy plánov sú jasné a špecifické pre niku
- [ ] Náhľady šablón zobrazujú dizajny vhodné pre fitness
- [ ] URL webu sa správne generuje z názvu štúdia
- [ ] Platba prebehne úspešne
- [ ] Zákazník sa dostane na funkčný web s vybranou šablónou
- [ ] Potvrdzovacie e-maily používajú jazyk špecifický pre fitness

## Sieť FitSite doteraz {#the-fitsite-network-so-far}

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

## Čo sme vytvorili v tejto lekcii {#what-we-built-this-lesson}

- **Viac-krokový checkout formulár** prispôsobený majiteľom fitness štúdií
- **Jazyk špecifický pre niku** v celom registračnom toku
- **Minimálne trenie** -- iba nevyhnutné polia, rýchla cesta k funkčnému webu
- **Integrácia platby** s testovacím overením
- **Otestovaný tok od začiatku do konca** od výberu plánu po funkčný web

---

**Ďalej:** [Lekcia 7: Urobte si to po svojom](lesson-7-branding) -- platformu označíme vašou značkou a ustanovíme FitSite ako značku.
