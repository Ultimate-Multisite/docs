---
title: 'Les 6: De Registratie-ervaring'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Les 6: De Aanmeldingservaring {#lesson-6-the-signup-experience}

Het afrekenproces is waar interesse omzet in inkomsten. Een verwarrend of algemeen aanmeldingsproces verliest klanten. Een niche-specifiek proces dat hun taal spreekt en moeiteloos aanvoelt, zet ze om in betalende klanten.

## Waar We Gebleven Zijn {#where-we-left-off}

FitSite heeft templates en plannen geconfigureerd. Nu bouwen we de registratie- en afrekenervaring die eigenaars van fitnessstudio's omzet in betalende klanten.

## Het Registratieproces Begrijpen {#understanding-the-registration-flow}

De checkout-formulieren van Ultimate Multisite zijn volledig aanpasbare, meerstapsformulieren. Voor FitSite willen we een proces dat:

1. Voelt alsof het is gebouwd voor fitnessbedrijven
2. Alleen verzamelt wat nodig is
3. De klant zo snel mogelijk naar een werkende site brengt

Zie [The Registration Flow](/user-guide/configuration/the-registration-flow) voor de volledige technische referentie.

## Het FitSite Checkout Ontwerpen {#designing-the-fitsite-checkout}

Navigeer naar **Ultimate Multisite > Checkout Forms** en maak een nieuw formulier aan.

### Stap 1: Plan Selectie {#step-1-plan-selection}

Het eerste wat een eigenaar van een fitnessstudio moet zien, zijn de plannen, gepresenteerd in termen die zij begrijpen.

- Voeg een **Pricing Table** veld toe
- Configureer het om alle drie de FitSite-plannen te tonen
- De planbeschrijvingen die je in Les 5 hebt geschreven, verschijnen hier – zorg ervoor dat ze ingaan op de behoeften van fitnessbedrijven, en niet op technische functies

:::tip Niche Taal Is Belangrijk
"1 GB opslag" betekent niets voor een sportschooleigenaar. "Alles wat je nodig hebt voor een professionele studio website" betekent alles. Schrijf planbeschrijvingen in de taal van je klant.
:::

### Stap 2: Template Selectie {#step-2-template-selection}

Nadat de klant een plan heeft gekozen, kiest hij zijn starttemplate.

- Voeg een **Template Selection** veld toe
- De beschikbare templates worden gefilterd op basis van het gekozen plan (geconfigureerd in Les 5)
- Elk template moet een voorbeeldafbeelding hebben die een fitness-specifiek ontwerp toont

### Stap 3: Account Aanmaken {#step-3-account-creation}

Houd dit minimaal. Verzamel alleen:

- E-mailadres
- Wachtwoord
- Studio-/bedrijfsnaam (dit wordt hun sitenaam)

Vraag niet om informatie die je niet nodig hebt bij de aanmelding. Elk extra veld vermindert de conversie.

### Stap 4: Site Setup {#step-4-site-setup}

- **Site title**: Vul automatisch in vanuit de studio naam die in Stap 3 is ingevoerd
- **Site URL**: Automatisch genereren vanuit de studio naam (bijv. `ironworks.fitsite.com`)

### Stap 5: Betaling {#step-5-payment}

- Voeg het **Payment** veld toe
- Configureer je betaalgateway ([Stripe](/user-guide/payment-gateways/stripe) wordt aanbevolen voor abonnementsfacturering)
- Als je in Les 5 order bumps hebt aangemaakt, voeg dan een **Order Bump** veld toe vóór de betalingsstap

### Stap 6: Bevestiging {#step-6-confirmation}

- Pas de bevestigingsboodschap aan met fitness-specifieke taal
- Voorbeeld: "Uw fitnessstudio website wordt aangemaakt. U wordt over een paar seconden doorgestuurd naar uw nieuwe site."

## Een Periodeselectie Toggle Toevoegen {#adding-a-period-selection-toggle}

Als je prijsvariaties hebt ingesteld in je plannen (maandelijks versus jaarlijks), voeg dan een **Period Selection** veld toe aan het checkout-formulier, zodat klanten kunnen schakelen tussen factuurperiodes. Zie [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) voor instructies.

## Betaling Configureren {#configuring-payment}

Als je nog geen betaalgateway hebt ingesteld:

1. Navigeer naar **Ultimate Multisite > Settings > Payment Gateways**
2. Volg de [Stripe setup guide](/user-guide/payment-gateways/stripe) of je voorkeursgateway
3. Test een volledig checkout-proces met een testbetaling

Zie [Getting Paid](/user-guide/payment-gateways/getting-paid) voor details over hoe betalingen naar je rekening vloeien.

## Het Proces Testen {#testing-the-flow}

Voordat je verdergaat, voer je een volledige testaanmelding uit:

1. Open het checkout-formulier in een incognito/privé browservenster
2. Selecteer een plan
3. Kies een template
4. Maak een account aan
5. Voltooi de betaling (gebruik testmodus)
6. Controleer of de site is aangemaakt met het juiste template

Controleer of:

- [ ] Planbeschrijvingen duidelijk en niche-specifiek zijn
- [ ] Templatevoorbeelden fitnessgeschikte ontwerpen tonen
- [ ] De site URL correct wordt gegenereerd vanuit de studio naam
- [ ] De betaling succesvol verwerkt wordt
- [ ] De klant op een werkende site terechtkomt met het geselecteerde template
- [ ] Bevestigingsmails fitness-specifieke taal gebruiken

## Het FitSite Netwerk Tot Nu Toe {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (geconfigureerd)
├── Hosting met wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow
│   ├── Plan selectie met niche-specifieke beschrijvingen
│   ├── Template selectie met fitnessvoorbeelden
│   ├── Minimale accountaanmaak
│   ├── Betaling via Stripe
│   └── Fitness-specifieke bevestiging
└── Klaar voor branding (volgende les)
```

## Wat We Deze Les Hebben Gebouwd {#what-we-built-this-lesson}

- **Een meerstaps checkout-formulier** afgestemd op eigenaars van fitnessstudio's
- **Niche-specifieke taal** gedurende het hele aanmeldingsproces
- **Minimale frictie** – alleen essentiële velden, snel pad naar een werkende site
- **Betalingsintegratie** met testverificatie
- **Een geteste end-to-end proces** van planselectie tot werkende site

---

**Volgende:** [Lesson 7: Making It Yours](lesson-7-branding) -- we white-labelen het platform en vestigen FitSite als merk.
