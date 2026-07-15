---
title: 'Les 8: Onboarding van klanten'
sidebar_position: 9
_i18n_hash: 5b71133bebf067164c77d33db7c81806
---
# Les 8: Onboarding van de klant

Een klant laten inschrijven is maar de helft van het werk. Als ze inloggen, zich overweldigd voelen en nooit meer terugkomen, dan heb je ze verloren. Deze les ontwerpt de ervaring die een nieuwe inschrijving omzet in een actieve, betrokken klant.

## Waar we gebleven waren {#where-we-left-off}

FitSite is volledig merkgekleurd met een werkende checkout-flow. Nu richten we ons op wat er gebeurt nadat een eigenaar van een fitnessstudio de inschrijving heeft voltooid en voor het eerst op hun nieuwe site terechtkomt.

## Waarom onboarding belangrijk is {#why-onboarding-matters}

De eerste 30 minuten na inschrijving bepalen of een klant blijft of afhaakt (churn). Een eigenaar van een fitnessstudio die:

- Inlogt en een site ziet die er al uitziet als een fitnesswebsite → blijft
- Exact weet wat de volgende stap is → blijft
- Zich verloren voelt in een generiek WordPress dashboard → vertrekt

Jouw niche-templates (Les 4) regelen het eerste punt. Deze les regelt het tweede.

## De eerste inlogervaring {#the-first-login-experience}

### Welkomstdashboard Widget {#welcome-dashboard-widget}

Maak een aangepaste dashboard widget die nieuwe klanten begroet en hen door de setup leidt. Dit moet prominent zichtbaar zijn wanneer ze voor het eerst inloggen.

**FitSite Quick Start:**

1. **Voeg uw studio naam en logo toe** -- Link naar Customizer of Site Identity instellingen
2. **Update uw lesrooster** -- Link direct naar de Classes pagina-editor
3. **Voeg uw trainers toe** -- Link naar de Trainers pagina-editor
4. **Stel uw contactgegevens in** -- Link naar de Contact pagina-editor
5. **Preview uw site** -- Link naar de frontend

Elke stap linkt direct naar de relevante pagina of instelling. Geen zoeken door menu's.

### Vereenvoudig het Dashboard {#simplify-the-dashboard}

Nieuwe klanten hoeven niet elk WordPress menu-item te zien. Overweeg:

- Menu-items verbergen die niet relevant zijn voor het beheer van een fitnesssite (bijv. Comments als dit niet wordt gebruikt)
- Het menu opnieuw rangschikken om de meest gebruikte items bovenaan te plaatsen
- Aangepaste menu-labels toevoegen die zinvol zijn voor de niche ("Uw Studio" in plaats van "Uiterlijk")

De [Plugin & Theme Manager](/addons/plugin-and-theme-manager) addon kan helpen bij het beheersen van wat klanten zien.

## Welkomstmailreeks {#welcome-email-sequence}

Eén welkomstmail is niet genoeg. Stel een reeks in die klanten door hun eerste week leidt:

### E-mail 1: Welkom (Direct na inschrijving) {#email-1-welcome-immediately-after-signup}

- Onderwerp: "Welkom bij FitSite – uw studio website is live"
- Inhoud: Inloglink, quick start stappen, link naar helpbronnen
- Toon: Enthousiast, bemoedigend, fitness-specifiek

### E-mail 2: Snelle overwinningen (Dag 1) {#email-2-quick-wins-day-1}

- Onderwerp: "3 dingen die u als eerste op uw FitSite moet doen"
- Inhoud: Voeg uw logo toe, update de hero-afbeelding op de homepage, voeg uw lesrooster toe
- Voeg screenshots toe die precies laten zien waar u moet klikken

### E-mail 3: Maak het van u (Dag 3) {#email-3-make-it-yours-day-3}

- Onderwerp: "Maak uw fitnesssite uniek"
- Inhoud: Pas kleuren aan, voeg foto's van trainers toe, schrijf het verhaal van uw studio
- Link naar voorbeelden van geweldige fitnesssites op het platform

### E-mail 4: Live gaan (Dag 7) {#email-4-go-live-day-7}

- Onderwerp: "Klaar om uw FitSite met de wereld te delen?"
- Inhoud: Checklist van wat te verifiëren voordat u de site deelt, hoe u een custom domein verbindt (indien Growth/Pro), tips voor social media delen

:::tip E-mailautomatisering
Gebruik [Webhooks](/user-guide/integrations/webhooks) of [Zapier](/user-guide/integrations/zapier) om deze e-mails via uw e-mailmarketingplatform te triggeren. Dit geeft u meer controle over de timing en stelt u in staat om de betrokkenheid te volgen.
:::

## Helpbronnen {#help-resources}

Maak niche-specifieke helpcontent die de vragen beantwoordt die eigenaars van fitnessstudio's daadwerkelijk stellen:

### Knowledge Base Artikelen {#knowledge-base-articles}

- "Hoe update ik mijn lesrooster"
- "Trainersprofielen toevoegen en bewerken"
- "Het logo en de kleuren van uw studio wijzigen"
- "Uw eigen domeinnaam verbinden" (voor Growth/Pro klanten)
- "Een boekingswidget toevoegen aan uw site"

Schrijf deze voor niet-technische gebruikers. Gebruik screenshots. Vermijd WordPress jargon.

### Video Walkthroughs {#video-walkthroughs}

Korte (2-3 minuten) schermopnames die laten zien:

- Eerste inloggen en oriëntatie
- De homepage bewerken
- Het lesrooster updaten
- Een nieuwe trainer toevoegen

Dit hoeven geen gepolijste producties te zijn. Duidelijk, behulpzaam en niche-specifiek is wat telt.

## De Accountpagina {#the-account-page}

Ultimate Multisite bevat een klantgerichte [Accountpagina](/user-guide/client-management/account-page) waar klanten hun abonnement beheren. Pas deze aan om:

- Hun huidige FitSite-plan te tonen
- Upgrade-opties te weergeven met fitness-specifieke voordelen
- Betaalgeschiedenis en factuurdownloads te verstrekken
- Een link naar helpbronnen te geven

## Het meten van onboarding succes {#measuring-onboarding-success}

Volg deze indicatoren om te weten of uw onboarding werkt:

- **Activatiegraad**: Welk percentage van de inschrijvingen past hun site daadwerkelijk aan binnen de eerste week?
- **Inlogpogingen in de eerste week**: Hoe vaak logt een nieuwe klant in gedurende de eerste week?
- **Support tickets van nieuwe klanten**: Een hoog volume betekent dat uw onboarding hiaten heeft
- **Trial-naar-betaald conversie**: Als u proefperiodes aanbiedt, welk percentage converteert?

## Het FitSite Netwerk tot nu toe {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (geconfigureerd + merkgekleurd)
├── Platform Domein (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Producten (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (niche-specifiek, getest)
├── Branding (login, dashboard, e-mails, facturen, marketing site)
├── Klant Onboarding
│   ├── Quick Start dashboard widget
│   ├── Vereenvoudigd dashboard voor fitness site management
│   ├── 4-mail welkomstreeks
│   ├── Niche-specifieke kennisbank
│   ├── Video walkthroughs
│   └── Gepersonaliseerde accountpagina
└── Klaar voor prijsstrategie (volgende les)
```

## Wat we gebouwd hebben in deze les {#what-we-built-this-lesson}

- **Een begeleide eerste-login ervaring** met een Quick Start widget
- **Een vereenvoudigd dashboard** gericht op taken voor fitness site management
- **Een welkomstmailreeks** die klanten door hun eerste week leidt
- **Niche-specifieke helpbronnen** geschreven voor niet-technische eigenaars van fitnessstudio's
- **Onboarding metrics** om de ervaring te volgen en te verbeteren

---

**Volgende:** [Les 9: Prijsstelling voor winst](lesson-9-pricing) -- we verfijnen de prijsstrategie om de omzet te maximaliseren en het verloop te minimaliseren.
