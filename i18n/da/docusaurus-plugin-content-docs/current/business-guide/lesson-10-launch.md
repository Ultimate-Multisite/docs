---
title: 'Lektion 10: Lancering'
sidebar_position: 11
_i18n_hash: 49ba467b8efba57e92cf072bcec53969
---
# Lektion 10: Lancering

Alt er bygget. Før du åbner dørene, gennemgår denne lektion tjeklisten før lancering for at sikre, at intet er gået i stykker, mangler eller er pinligt.

## Hvor vi stoppede

FitSite har skabeloner, planer, checkout, branding, onboarding og prissætning alle konfigureret. Nu verificerer vi, at alt virker, og går live.

## Tjekliste før lancering

Gennemgå hvert punkt. Spring ikke over noget.

### Platformsinfrastruktur

- [ ] Hosting er stabil og yder godt under belastning
- [ ] Wildcard SSL er aktiv, og alle subdomæner serverer via HTTPS
- [ ] Domænemapping fungerer – test at oprette en side og mappe et custom domæne
- [ ] Backups er konfigureret og testet (genopret mindst én for at verificere)
- [ ] Overvågning er på plads – du vil vide, hvis platformen går ned

### Skabeloner

- [ ] Alle de tre skabeloner indlæses korrekt på nye sider
- [ ] Pladsholderindholdet er hjælpsomt og uden stavefejl
- [ ] Alle billeder er korrekt licenseret (ingen vandmærker fra stockfotos)
- [ ] Mobilrespons fungerer på alle skabelonens sider
- [ ] Sideindlæsningstiden er acceptabel (test med et værktøj som GTmetrix eller PageSpeed Insights)
- [ ] Ingen ødelagte links eller manglende aktiver på nogen skabelon

### Planer og produkter

- [ ] Alle tre planer er aktive og synlige
- [ ] Planbeskrivelserne er korrekte og niche-specifikke
- [ ] Prissætningen er korrekt (månedlig og årlig)
- [ ] Opsætningsgebyrer er konfigureret på de rigtige planer
- [ ] Prøveperioden virker på Starter-planen
- [ ] Ordforhøjninger vises korrekt under kassen
- [ ] Plugin- og tema-begrænsninger håndhæves korrekt pr. plan

### Checkout Flow (Kassaflyd)

- [ ] Udfør en fuld testregistrering på hver plan (brug testbetalingsmode)
- [ ] Skabelonvalget viser de korrekte skabeloner pr. plan
- [ ] Betaleprocessen lykkes
- [ ] Kunden modtager velkomstmail efter registrering
- [ ] Ny side oprettes med den korrekte skabelon
- [ ] Kunden kan logge ind på sin nye side med det samme
- [ ] Rabatkoder virker korrekt

### Branding (Mærkning)

- [ ] Login-siden viser FitSite branding
- [ ] Admin-dashboardet viser FitSite branding
- [ ] Alle systemmails bruger FitSite branding og fitness-specifik sprogbrug
- [ ] Fakturaer vises korrekt med dine virksomhedsdetaljer
- [ ] Markedsførselswebsite er live og linker til kasseformularen

### Onboarding (Introduktion)

- [ ] Quick Start widget'en vises på nye kundedashboards
- [ ] Alle Quick Start links peger på de korrekte sider
- [ ] Velkomstmailsekvensen er konfigureret og testet
- [ ] Videnbaseartiklerne er publiceret og tilgængelige
- [ ] Kontoprisen viser korrekt planinformation og opgraderingsmuligheder

### Juridisk og Forretningsmæssigt

- [ ] Vilkår for brug er offentliggjort og linket fra kassen
- [ ] Privatlivspolitik er offentliggjort og tilgængelig
- [ ] Refunderingspolitik er defineret og dokumenteret
- [ ] Virksomhedsenhed er oprettet til at modtage betalinger
- [ ] Betalingsgatewayen er i live-tilstand (ikke testtilstand)
- [ ] Skattekonfigurationen er korrekt for din jurisdiktion

## Blød lancering vs. Hård lancering

Overvej en to-faset lancering:

### Fase 1: Blød lancering

Inviter 5-10 fitnessstudioejere til at tilmelde sig før den offentlige lancering. Det er dine beta-kunder. Tilbyd dem en betydelig rabat (50% i et helt liv, eller 3 måneder gratis) mod:

- Ærlig feedback på tilmeldings- og onboardingoplevelsen
- Tilladelse til at bruge deres side som et eksempel
- Rapportering af eventuelle fejl eller problemer de støder på

Dette giver dig reel kundefeedback og live sider at vise, før du åbner for offentligheden.

### Fase 2: Offentlig lancering

Når feedback fra den bløde lancering er indarbejdet:

- Skift betalingsgatewayen til live-tilstand
- Udgiv din marketingside
- Start kundevinding (Lektion 11)
- Annoncér på relevante fitnessbranchenkanaler

## Handlinger på lancieringsdagen

På dagen, du går offentlig:

1. **Skift til live betalinger** -- deaktiver testtilstand på din betalingsgateway
2. **Tjek en gang til** -- udfør en komplet testregistrering med et rigtigt betaling (refunder dig selv bagefter)
3. **Overvåg tæt** -- hold øje med fejl, mislykkede registreringer eller betalingsproblemer
4. **Vær tilgængelig** -- dine første rigtige kunder kan have brug for hjælp, og en hurtig reaktion opbygger tillid
5. **Fejr kortvarigt** -- så vend tilbage til arbejdet

## Hvad kan gå galt

Vær forberedt på:

- **Problemer med betalingsgatewayen**: Hav din gateways udbyders support klar
- **SSL-certifikatproblemer**: Kend hvordan du tjekker og genforhandler certifikaterne
- **Fejl i e-maillevering**: Test, at e-mails rent faktisk kommer frem (tjek spamfilerne)
- **Ydeevne under belastning**: Hvis du får et trafikstigning, så ved hvordan du skalerer dit hosting
- **Kundeforvirring**: Hav din videnbase og supportkanaler klar

## FitSite Netværket indtil nu

FitSite Network
├── WordPress Multisite (subdom-tilstand) ✓
├── Ultimate Multisite (konfigureret + mærket) ✓
├── Platform Domain (fitsite.com + wildcard SSL) ✓
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain) ✓
├── Produkter (Starter, Growth, Pro + Order Bumps + Rabatter) ✓
├── Checkout Flow (testet ende-til-ende) ✓
├── Branding (fuldstændigt) ✓
├── Kundeonboarding (Quick Start, e-mails, hjælperessourcer) ✓
├── Prissætningsstrategi (årlig, prøveperioder, opsætningsgebyrer, rabatter) ✓
├── Pre-Launch Tjekliste (verificeret) ✓
├── Blød Lancering (beta-kunder onboardet) ✓
└── LIVE ✓

## Hvad Vi Har Bygget I Denne Lektion

- **En omfattende pre-launch tjekliste**, der dækker infrastruktur, indhold, betalinger og juridiske forhold.
- **En blød lanceringstrategi** for at få reel feedback, før vi går offentligt.
- **Lanceringdageprocedurer** til at gå live med selvtillid.
- **En beredskabsplan** til almindelige problemer på lanceringsdagen.

---

**Næste:** [Lektion 11: Find Kunder](lesson-11-customers) -- nu hvor FitSite er live, hvordan får du fitnessstudioejere til at tilmelde sig?
