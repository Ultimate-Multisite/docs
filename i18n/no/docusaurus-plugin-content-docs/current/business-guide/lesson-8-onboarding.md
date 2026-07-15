---
title: 'Leksjon 8: Oppstart for kunder'
sidebar_position: 9
_i18n_hash: 5b71133bebf067164c77d33db7c81806
---
# Leksjon 8: Kundens Oppstart (Onboarding)

Å få en kunde til å registrere seg er bare halve jobben. Hvis de logger inn, føler seg overveldet og aldri kommer tilbake, har du mistet dem. Denne leksjonen designer opplevelsen som forvandler en ny registrering til en aktiv, engasjert kunde.

## Hvor vi slapp {#where-we-left-off}

FitSite er fullstendig merkevarebygget med en fungerende kasseprosess. Nå fokuserer vi på hva som skjer etter at en eier av et treningsstudio fullfører registreringen og lander på sin nye nettside for første gang.

## Hvorfor oppstart er viktig {#why-onboarding-matters}

De første 30 minuttene etter registreringen bestemmer om kunden blir værende eller faller fra (churn). En eier av et treningsstudio som:

- Logger inn og ser en nettside som allerede ser ut som en treningsnettside → blir værende
- Vet nøyaktig hva de skal gjøre videre → blir værende
- Føler seg fortapt i et generisk WordPress-dashboard → går

Dine nisjetemplates (Leksjon 4) håndterer det første punktet. Denne leksjonen håndterer det andre.

## Første innloggingsopplevelse {#the-first-login-experience}

### Velkomst-dashboard-widget {#welcome-dashboard-widget}

Opprett en tilpasset dashboard-widget som hilser på nye kunder og veileder dem gjennom oppsettet. Dette bør vises fremtredende når de logger inn for første gang.

**FitSite Quick Start:**

1. **Legg til navnet og logoen til studioet ditt** -- Lenke til Customizer eller Site Identity-innstillingene
2. **Oppdater timeplanen for klassene dine** -- Lenke direkte til redigereren for Classes-siden
3. **Legg til trenerne dine** -- Lenke til redigereren for Trainers-siden
4. **Sett kontaktinformasjonen din** -- Lenke til redigereren for Contact-siden
5. **Forhåndsvis nettsiden din** -- Lenke til frontenden

Hvert trinn lenker direkte til den relevante siden eller innstillingen. Ingen leting gjennom menyer.

### Forenkle dashboardet {#simplify-the-dashboard}

Nye kunder trenger ikke å se hvert eneste WordPress-menyelement. Vurder:

- Å skjule menyelementer som ikke er relevante for administrasjon av treningsnettsteder (f.eks. Comments hvis det ikke brukes)
- Å omorganisere menyen for å plassere de mest brukte elementene først
- Å legge til tilpassede menyetiketter som gir mening for nisjen ("Ditt Studio" i stedet for "Utseende")

[Plugin & Theme Manager](/addons/plugin-and-theme-manager) addon kan hjelpe til med å kontrollere hva kundene ser.

## Velkomst-e-postsekvens {#welcome-email-sequence}

Én velkomst-e-post er ikke nok. Sett opp en sekvens som veileder kundene gjennom deres første uke:

### E-post 1: Velkommen (Umiddelbart etter registrering) {#email-1-welcome-immediately-after-signup}

- Emne: "Velkommen til FitSite – nettstedet ditt er live"
- Innhold: Innlogkingslenke, raske oppstartssteg, lenke til hjelkeressurser
- Tone: Entusiastisk, oppmuntrende, treningsfokusert

### E-post 2: Raske seire (Dag 1) {#email-2-quick-wins-day-1}

- Emne: "3 ting du bør gjøre først på ditt FitSite"
- Innhold: Legg til logoen din, oppdater hovedbildet på forsiden, legg til timeplanen for klassene
- Inkluder skjermbilder som viser nøyaktig hvor du skal klikke

### E-post 3: Gjør det ditt eget (Dag 3) {#email-3-make-it-yours-day-3}

- Emne: "Få treningsnettstedet ditt til å skinne"
- Innhold: Tilpass farger, legg til bilder av trenere, skriv studiohistorien din
- Lenke til eksempler på flotte treningsnettsteder på plattformen

### E-post 4: Gå live (Dag 7) {#email-4-go-live-day-7}

- Emne: "Klar til å dele ditt FitSite med verden?"
- Innhold: Sjekkliste over hva som må verifiseres før deling, hvordan man kobler til et custom domain (hvis man er på Growth/Pro), tips for deling på sosiale medier

:::tip E-postautomatisering
Bruk [Webhooks](/user-guide/integrations/webhooks) eller [Zapier](/user-guide/integrations/zapier) for å utløse disse e-postene gjennom din e-postmarkedsføringsplattform. Dette gir deg mer kontroll over timingen og lar deg spore engasjement.
:::

## Hjelperessurser {#help-resources}

Opprett nisjespesifikt hjelpeinnhold som svarer på spørsmålene treningsstudioeiere faktisk stiller:

### Kunnskapsbase-artikler {#knowledge-base-articles}

- "Hvordan oppdatere timeplanen for klassene dine"
- "Legge til og redigere trenerprofiler"
- "Endre logo og farger for studioet ditt"
- "Koble til ditt eget domenenavn" (for Growth/Pro-kunder)
- "Legge til en booking-widget på nettstedet ditt"

Skriv disse for ikke-tekniske brukere. Bruk skjermbilder. Unngå WordPress-sjargong.

### Video-gjennomganger {#video-walkthroughs}

Korte (2–3 minutter) skjermopptak som viser:

- Første innlogging og orientering
- Redigering av forsiden
- Oppdatering av timeplanen for klassene
- Legge til en ny trener

Disse trenger ikke å være polerte produksjoner. Det som betyr noe er at de er klare, nyttige og nisjespesifikke.

## Kontosiden {#the-account-page}

Ultimate Multisite inkluderer en kundeorientert [Account Page](/user-guide/client-management/account-page) der kundene administrerer abonnementet sitt. Tilpass denne til å:

- Vise deres nåværende FitSite-plan
- Vise oppgraderingsalternativer med treningsspesifikke fordeler
- Gi oversikt over fakturering og nedlasting av fakturaer
- Lenke til hjelkeressurser

## Måling av oppstarts-suksess {#measuring-onboarding-success}

Spor disse indikatorene for å vite om oppstarten din fungerer:

- **Aktiveringsrate**: Hvilken prosentandel av registreringene tilpasser faktisk nettstedet sitt i løpet av den første uken?
- **Innlogginger i første uke**: Hvor mange ganger logger en ny kunde inn i løpet av den første uken?
- **Support-billetter fra nye kunder**: Høyt volum betyr at oppstarten din har hull
- **Prøve-til-betalt konvertering**: Hvis du tilbyr prøveperioder, hvilken prosentandel konverterer?

## FitSite Network så langt {#the-fitsite-network-so-far}

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

## Hva vi bygde i denne leksjonen {#what-we-built-this-lesson}

- **En veiledet første innloggingsopplevelse** med en Quick Start-widget
- **Et forenklet dashboard** fokusert på oppgaver for administrasjon av treningsnettsteder
- **En velkomst-e-postsekvens** som veileder kundene gjennom deres første uke
- **Nisjespesifikke hjelkeressurser** skrevet for ikke-tekniske treningsstudioeiere
- **Oppstartsmetrikker** for å spore og forbedre opplevelsen

---

**Neste:** [Leksjon 9: Prissetting for profitt](lesson-9-pricing) -- vi raffinerer prissettingen for å maksimere inntektene og minimere frafall.
