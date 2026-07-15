---
title: 'Lektion 8: Kunde onboarding'
sidebar_position: 9
_i18n_hash: 5b71133bebf067164c77d33db7c81806
---
# Lektion 8: Kundebegivenhed (Customer Onboarding)

At at få en kunde til at registrere sig er kun halvdelen af jobbet. Hvis de logger ind, føler sig overvældede og aldrig kommer tilbage, har du mistet dem. Denne lektion designer oplevelsen, der forvandler en ny registrering til en aktiv, engageret kunde.

## Hvor vi stoppede {#where-we-left-off}

FitSite er fuldt mærket med en fungerende checkout-proces. Nu fokuserer vi på, hvad der sker efter, at en fitnessstudioejer har gennemført registreringen og lander på sin nye side for første gang.

## Hvorfor onboarding betyder noget {#why-onboarding-matters}

De første 30 minutter efter registrering bestemmer, om en kunde bliver eller falder fra (churn). En fitnessstudioejer, der:

- Logger ind og ser en side, der allerede ligner en fitnesshjemmeside → bliver
- Ved præcis, hvad de skal gøre næste gang → bliver
- Føler sig tabt i et generisk WordPress dashboard → forlader siden

Dine niche-temaer (Lektion 4) håndterer det første punkt. Denne lektion håndterer det andet.

## Den første login oplevelse {#the-first-login-experience}

### Velkomstdashboard widget {#welcome-dashboard-widget}

Opret en custom dashboard widget, der hilser nye kunder velkommen og guider dem gennem opsætningen. Denne skal være fremtrædende, når de logger ind for første gang.

**FitSite Hurtigstart:**

1. **Tilføj dit studions navn og logo** -- Link til Customizer eller Site Identity indstillinger
2. **Opdater din klasseplan** -- Direkte link til redigereren af Klassen-siden
3. **Tilføj dine trænere** -- Link til redigereren af Trænerne-siden
4. **Indtast dine kontaktoplysninger** -- Link til redigereren af Kontakt-siden
5. **Se forhåndsvisning af din side** -- Link til frontend

Hvert trin linker direkte til den relevante side eller indstilling. Ingen behov for at lede rundt i menuerne.

### Forenkl Dashboardet {#simplify-the-dashboard}

Nye kunder behøver ikke se alle WordPress-menuindstillinger. Overvej følgende:

- Skjul menuindstillinger, der ikke er relevante for styring af fitnesshjemmet (f.eks. Kommentarer, hvis de ikke bruges)
- Omarranger menuen til at placere de mest brugte element først
- Tilføj brugerdefinerede menuetiketter, der giver mening for nichemålet ("Dit Studio" i stedet for "Udseende")

[Plugin & Theme Manager](/addons/plugin-and-theme-manager) addon kan hjælpe med at styre, hvad kunder ser.

## Velkomst E-mailsekvens {#welcome-email-sequence}

En enkelt velkomstmail er ikke nok. Opsæt en sekvens, der guider kunder gennem deres første uge:

### E-mail 1: Velkommen (Umiddelbart efter tilmelding) {#email-1-welcome-immediately-after-signup}

- Emne: "Velkommen til FitSite – dit studiohjem er live"
- Indhold: Login-link, hurtige starttrin, link til hjælperessourcer
- Tone: Engageret, opmuntrende, fitness-specifik

### E-mail 2: Hurtige sejre (Dag 1) {#email-2-quick-wins-day-1}

- Emne: "3 ting du skal gøre først på dit FitSite"
- Indhold: Tilføj dit logo, opdater din forsiden hovedbillede, tilføj dit klassetidsplan
- Inkluder skærmbilleder, der viser præcis, hvor man skal klikke

### E-mail 3: Gør det dit eget (Dag 3) {#email-3-make-it-yours-day-3}

- Emne: "Gør dit fitnesshjem iøjnefaldende"
- Indhold: Tilpas farver, tilføj trainerfotos, skriv din studiohistorie
- Link til eksempler på gode fitnesshjem på platformen

### E-mail 4: Gå live (Dag 7) {#email-4-go-live-day-7}

- Emne: "Klar til at dele din FitSite med verden?"
- Indhold: Tjekliste over, hvad du skal verificere før deling, hvordan du forbinder en custom domæne (hvis du er på Growth/Pro), tips til social deling

:::tip E-mail automatisering
Brug [Webhooks](/user-guide/integrations/webhooks) eller [Zapier](/user-guide/integrations/zapier) til at udløse disse e-mails via din e-mail marketing platform. Dette giver dig mere kontrol over timingen og lader dig spore engagementet.
:::

## Hjælperessourcer {#help-resources}

Lav niche-specielt hjælpeindhold, der besvarer de spørgsmål fitnessstudioejere rent faktisk stiller:

### Videnbaseartikler {#knowledge-base-articles}

- "Sådan opdaterer du din klassetidsplan"
- "Tilføjelse og redigering af trænerprofiler"
- "Ændring af dit studios logo og farver"
- "Forbind din egen domæne" (for Growth/Pro kunder)
- "Tilføjelse af en bookingwidget til din side"

Skriv disse for ikke-tekniske brugere. Brug skærmbilleder. Undgå WordPress-jargon.

### Video-gennemløb {#video-walkthroughs}

Korte (2-3 minutters) skærmoptagelser, der viser:

- Første login og orientering
- Redigering af forsiden
- Opdatering af klassetidsplanen
- Tilføjelse af en ny træner

Disse behøver ikke være polerede produktioner. Klart, hjælpsomt og niche-specifikt er det vigtigste.

## Kontoprisen (The Account Page) {#the-account-page}

Ultimate Multisite inkluderer en kundeorienteret [Account Page](/user-guide/client-management/account-page), hvor kunderne administrerer deres abonnement. Tilpas denne til:

Vis deres nuværende FitSite plan
Vis opgraderingsmuligheder med fitness-specifikke fordele
Tilbyd faktureringshistorik og faktura-downloads
Link til hjælperessourcer

## Måling af Onboarding Succes {#measuring-onboarding-success}

Følg disse indikatorer for at vide, om dit onboarding virker:

- **Aktivitetsrate**: Hvor stor en procentdel af sign-up'erne tilpasser faktisk deres site inden den første uge?
- **Logins i første uge**: Hvor mange gange logger en ny kunde ind i løbet af sin første uge?
- **Supportbilletter fra nye kunder**: Højt antal betyder, at dit onboarding har huller.
- **Trial-til-betalingskonvertering**: Hvis du tilbyder prøveperioder, hvor stor en procentdel konverterer?

## FitSite Netværket Indtil Nu {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (konfigureret + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (niche-specifik, testet)
├── Branding (login, dashboard, emails, invoices, marketing site)
├── Customer Onboarding
│   ├── Quick Start dashboard widget
│   ├── Forenklet dashboard til fitness site management
│   ├── 4-e-mail velkomstsekvens
│   ├── Niche-specifik videnbase
│   ├── Video walkthroughs
│   └── Tilpasset kontopage
└── Klar til prisstrategi (næste lektion)
```

Hvad vi har bygget i denne lektion

- **En guidet first-login oplevelse** med en Quick Start widget
- **Et forenklet dashboard**, der fokuserer på opgaver til administration af fitnesshjemmesider
- **En velkomstmailsekvens**, der guider kunder gennem deres første uge
- **Niche-specifik hjælpemateriale**, skrevet til ikke-tekniske ejere af fitnessstudier
- **Onboarding-målinger** til at spore og forbedre oplevelsen

---

**Næste:** [Lektion 9: Prissætning for Profit](lesson-9-pricing) -- vi finjusterer prissætningsstrategien for at maksimere indtægterne og minimere frafald.
