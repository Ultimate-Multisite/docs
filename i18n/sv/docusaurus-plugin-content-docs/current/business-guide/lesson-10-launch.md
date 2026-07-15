---
title: 'Lektion 10: Lanseringsdagen'
sidebar_position: 11
_i18n_hash: 49ba467b8efba57e92cf072bcec53969
---
# Lektion 10: Lanseringsdagen

Allt är byggt. Innan du öppnar dörrarna går denna lektion igenom en pre-launch checklist för att se till att ingenting är trasigt, saknas eller pinsamt.

## Var vi slutade {#where-we-left-off}

FitSite har templates, plans, checkout, branding, onboarding och pricing konfigurerat. Nu verifierar vi att allt fungerar och går live.

## Pre-Launch Checklist {#pre-launch-checklist}

Gå igenom varje punkt. Hoppa inte över någon.

### Plattformsinfrastruktur {#platform-infrastructure}

- [ ] Hosting är stabilt och presterar bra under belastning
- [ ] Wildcard SSL är aktivt och alla subdomäner serverar över HTTPS
- [ ] Domain mapping fungerar – testa att skapa en sajt och mappa en egen domän
- [ ] Backups är konfigurerade och testade (återställ åtminstone en för att verifiera)
- [ ] Monitoring är på plats – du ska veta om plattformen går ner

### Templates {#templates}

- [ ] Alla tre templates laddas korrekt på nya sajter
- [ ] Placeholder-innehållet är hjälpsamt och fritt från stavfel
- [ ] Alla bilder har korrekt licens (inga vattenstämplar från stock photos)
- [ ] Mobilresponsiviteten fungerar på varje template-sida
- [ ] Sideladdningshastigheten är acceptabel (testa med ett verktyg som GTmetrix eller PageSpeed Insights)
- [ ] Inga trasiga länkar eller saknade assets på någon template

### Plans och Products {#plans-and-products}

- [ ] Alla tre plans är aktiva och synliga
- [ ] Planbeskrivningarna är korrekta och nischspecifika
- [ ] Prissättningen är rätt (månadsvis och årligen)
- [ ] Setup fees är konfigurerade på rätt plans
- [ ] Testperioden fungerar på Starter plan
- [ ] Order bumps visas korrekt under checkout
- [ ] Plugin- och theme-begränsningar tillämpas korrekt per plan

### Checkout Flow {#checkout-flow}

- [ ] Slutför en fullständig testregistrering på varje plan (använd testbetalningsläge)
- [ ] Template-valet visar de korrekta templates per plan
- [ ] Betalningen går igenom framgångsrikt
- [ ] Kunden får välkomstmejl efter registreringen
- [ ] En ny sajt skapas med rätt template
- [ ] Kunden kan logga in på sin nya sajt direkt
- [ ] Rabattkoder fungerar korrekt

### Branding {#branding}

- [ ] Inloggningssidan visar FitSite branding
- [ ] Admin dashboard visar FitSite branding
- [ ] Alla systemmejl använder FitSite branding och fitnessspecifikt språk
- [ ] Fakturor visas korrekt med dina företagsuppgifter
- [ ] Marknadswebbplatsen är live och länkar till checkout-formuläret

### Onboarding {#onboarding}

- [ ] Quick Start widget visas på nya kunddashboards
- [ ] Alla Quick Start-länkar pekar till rätt sidor
- [ ] Välkomstmejlsekvensen är konfigurerad och testad
- [ ] Knowledge base-artiklar är publicerade och tillgängliga
- [ ] Kontosidan visar korrekt planinformation och uppgraderingsalternativ

### Legal och Business {#legal-and-business}

- [ ] Användarvillkor är publicerade och länkas från checkout
- [ ] Integritetspolicy är publicerad och tillgänglig
- [ ] Återbetalningspolicy är definierad och dokumenterad
- [ ] Företagsenheten är uppsatt för att ta emot betalningar
- [ ] Payment gateway är i live mode (inte testläge)
- [ ] Skattekonfigurationen är korrekt för din jurisdiktion

## Soft Launch vs. Hard Launch {#soft-launch-vs-hard-launch}

Överväg en tvåfasig lansering:

### Fas 1: Soft Launch {#phase-1-soft-launch}

Bjud in 5–10 ägare av träningsstudior att registrera sig innan den allmänna lanseringen. Dessa är dina beta-kunder. Erbjud dem en betydande rabatt (50 % livstid, eller 3 månader gratis) i utbyte mot:

- Ärligt feedback på registrerings- och onboardingupplevelsen
- Tillstånd att använda deras sajt som ett showcase-exempel
- Rapportering av eventuella buggar eller problem de stöter på

Detta ger dig verkligt kundfeedback och live-sajter att visa upp innan du öppnar för allmänheten.

### Fas 2: Public Launch {#phase-2-public-launch}

När feedback från soft launch har införlivats:

- Byt payment gateway till live mode
- Publicera din marknadswebbplats
- Börja med kundanskaffning (Lektion 11)
- Meddela på relevanta branschanordningar för fitness

## Åtgärder på Lanseringsdagen {#launch-day-actions}

På dagen du går ut i det allmänna:

1. **Byt till livebetalningar** – stäng av testläget på din payment gateway
2. **Verifiera en gång till** – genomför en komplett testregistrering med en riktig betalning (återbetala dig själv efteråt)
3. **Övervaka noga** – leta efter fel, misslyckade registreringar eller betalningsproblem
4. **Var tillgänglig** – dina första riktiga kunder kan behöva hjälp, och snabb respons bygger förtroende
5. **Fira kort** – och sedan återgå till arbetet

## Vad kan gå fel {#what-can-go-wrong}

Var beredd på:

- **Problem med payment gateway**: Ha kontaktuppgifter till din gateway-leverantörs support redo
- **SSL-certifikatproblem**: Vet hur du kontrollerar och förnyar certifikat
- **Misslyckanden med e-postleverans**: Testa att mejlen faktiskt anländer (kolla spammappar)
- **Prestanda under belastning**: Om du får en trafikökning, vet hur du skalar din hosting
- **Kundförvirring**: Ha din knowledge base och supportkanaler redo

## FitSite Network hittills {#the-fitsite-network-so-far}

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

## Vad vi byggde i denna lektion {#what-we-built-this-lesson}

- **En omfattande pre-launch checklist** som täcker infrastruktur, innehåll, betalningar och juridik
- **En soft launch-strategi** för att få verkligt feedback innan du går live
- **Procedurer för lanseringen** för att gå live med självförtroende
- **En beredskapsplan** för vanliga problem vid lanseringen

---

**Nästa:** [Lektion 11: Att hitta kunder](lesson-11-customers) -- nu när FitSite är live, hur får du träningsstudieägare att registrera sig?
