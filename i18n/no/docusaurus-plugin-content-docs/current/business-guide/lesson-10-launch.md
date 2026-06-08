---
title: 'Leksjon 10: Lanseringsdagen'
sidebar_position: 11
_i18n_hash: 49ba467b8efba57e92cf072bcec53969
---
# Leksjon 10: Lanseringsdagen

Alt er bygget. Før du åpner dørene, går denne leksjonen gjennom sjekklisten før lansering for å sikre at ingenting er ødelagt, mangler eller er pinlig.

## Hvor vi stoppet

FitSite har nå konfigurerte maler, planer, kasse, merkevarebygging, onboarding og prissetting. Nå skal vi verifisere at alt fungerer, og gå live.

## Sjekkliste før lansering

Gå gjennom hvert punkt. Ikke hopp over noe.

### Plattforminfrastruktur

- [ ] Hosting er stabil og presterer godt under belastning
- [ ] Wildcard SSL er aktiv, og alle underdomener kjører over HTTPS
- [ ] Domene-mapping fungerer – test å opprette et nettsted og mappe et custom domain
- [ ] Sikkerhetskopiering er konfigurert og testet (gjenopprett minst én for å verifisere)
- [ ] Overvåking er på plass – du vil vite det hvis plattformen går ned

### Maler

- [ ] Alle tre malene lastes korrekt på nye nettsteder
- [ ] Plassholder-innholdet er nyttig og fritt for skrivefeil
- [ ] Alle bilder er riktig lisensiert (ingen vannmerker fra stock photos)
- [ ] Mobilresponsiviteten fungerer på alle maler
- [ ] Sidens lastetid er akseptabel (test med et verktøy som GTmetrix eller PageSpeed Insights)
- [ ] Ingen ødelagte lenker eller manglende assets på noen mal

### Planer og produkter

- [ ] Alle tre planene er aktive og synlige
- [ ] Planbeskrivelsene er nøyaktige og nisjespesifikke
- [ ] Prissettingen er korrekt (månedlig og årlig)
- [ ] Oppsettgebyrer er konfigurert på de riktige planene
- [ ] Prøveperioden fungerer på Starter-planen
- [ ] Order bumps vises korrekt under kassen
- [ ] Begrensninger for plugin og tema håndheves korrekt per plan

### Kasseflyt

- [ ] Fullfør en komplett testregistrering for hver plan (bruk testbetalingsmodus)
- [ ] Valg av mal viser de korrekte malene per plan
- [ ] Betalingen behandles vellykket
- [ ] Kunden mottar velkomst-e-post etter registrering
- [ ] Et nytt nettsted opprettes med riktig mal
- [ ] Kunden kan logge inn på sitt nye nettsted umiddelbart
- [ ] Rabattkoder fungerer korrekt

### Merkevarebygging

- [ ] Innloggingssiden viser FitSite-merkevarebygging
- [ ] Admin-dashboardet viser FitSite-merkevarebygging
- [ ] Alle systeme-e-poster bruker FitSite-merkevarebygging og bransjespesifikt språk for fitness
- [ ] Fakturaer vises korrekt med dine forretningsdetaljer
- [ ] Markedsføringssiden er live og lenker til kasse-skjemaet

### Onboarding

- [ ] Quick Start-widget vises på nye kundedashboards
- [ ] Alle Quick Start-lenker peker til de korrekte sidene
- [ ] Velkomst-e-postsekvensen er konfigurert og testet
- [ ] Kunnskapsbaseartikler er publisert og tilgjengelige
- [ ] Kontosiden viser riktig planinformasjon og oppgraderingsalternativer

### Juridisk og forretning

- [ ] Tjenestevilkår er publisert og lenket fra kassen
- [ ] Personvernerklæring er publisert og tilgjengelig
- [ ] Refusjonspolitikken er definert og dokumentert
- [ ] Virksomheten er satt opp for å motta betalinger
- [ ] Betalingsgatewayen er i live-modus (ikke testmodus)
- [ ] Skattkonfigurasjonen er korrekt for din jurisdiksjon

## Soft Launch vs. Hard Launch

Vurder en to-fase lansering:

### Fase 1: Soft Launch

Inviter 5–10 eier av treningsstudioer til å registrere seg før den offentlige lanseringen. Dette er dine beta-kunder. Tilby dem en betydelig rabatt (50 % livstid, eller 3 måneder gratis) i bytte mot:

- Ærlig tilbakemelding på registrerings- og onboarding-opplevelsen
- Tillatelse til å bruke nettstedet deres som et utstillings eksempel
- Rapportering av eventuelle feil eller problemer de støter på

Dette gir deg ekte kunde-tilbakemeldinger og live nettsteder å vise frem før du åpner for publikum.

### Fase 2: Public Launch

Når tilbakemeldingene fra soft launch er integrert:

- Bytt betalingsgateway til live-modus
- Publiser markedsføringssiden din
- Begynn kundeanskaffelse (Leksjon 11)
- Annonser på relevante bransjekanaler for fitness

## Tiltak på lanseringsdagen

På dagen du går offentlig:

1. **Bytt til live betalinger** – deaktiver testmodus på betalingsgatewayen din
2. **Verifiser en gang til** – gjennomfør en komplett testregistrering med et ekte betalingskort (refunder deg selv etterpå)
3. **Overvåk nøye** – se etter feil, mislykkede registreringer eller betalingsproblemer
4. **Vær tilgjengelig** – dine første ekte kunder kan trenge hjelp, og rask respons bygger tillit
5. **Feire kort** – og gå deretter tilbake til arbeidet

## Hva kan gå galt

Vær forberedt på:

- **Problemer med betalingsgatewayen**: Ha supportkontakten til gateway-leverandøren din klar
- **SSL-sertifikatproblemer**: Vit hvordan du sjekker og fornyer sertifikater
- **Feil med e-postlevering**: Test at e-postene faktisk ankommer (sjekk spam-mapper)
- **Ytelse under belastning**: Hvis du får et trafikkhopp, vit hvordan du skal skalere hostingen din
- **Forvirring hos kunden**: Ha kunnskapsbasen og supportkanalene klare

## FitSite Network så langt

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

## Hva vi lærte i denne leksjonen

- **En omfattende sjekkliste før lansering** som dekker infrastruktur, innhold, betalinger og juss
- **En soft launch-strategi** for å få ekte tilbakemeldinger før du går offentlig
- **Prosedyrer for lanseringen** for å gå live med selvtillit
- **En beredskapsplan** for vanlige problemer på lanseringsdagen

---

**Neste:** [Leksjon 11: Å finne kunder](lesson-11-customers) -- nå som FitSite er live, hvordan får du treningsstudioeiere til å registrere seg?
