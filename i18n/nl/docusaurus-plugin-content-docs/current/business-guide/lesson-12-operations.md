---
title: 'Les 12: Het Bedrijf Runnen'
sidebar_position: 13
_i18n_hash: 0fe6371df216b74a2051b95972ad68e8
---
# Les 12: Het Bedrijf Runnen {#lesson-12-running-the-business}

Een platform is geen project dat je afwerkt; het is een bedrijf dat je draaiende houdt. In deze les behandelen we de dagelijkse bedrijfsvoering van FitSite: ondersteuning, facturatie, onderhoud en het tevreden houden van klanten.

## Waar We Gebleven Zijn {#where-we-left-off}

FitSite is live en klanten melden zich aan. Nu moet je de operatie duurzaam laten draaien.

## Dagelijkse Operaties {#daily-operations}

### Monitoring {#monitoring}

Controleer deze dagelijks (of stel meldingen in):

- **Uptime**: Is het platform toegankelijk? Gebruik een uptime monitoring service.
- **Nieuwe aanmeldingen**: Hoeveel nieuwe klanten hebben vandaag zich aangemeld?
- **Mislukte betalingen**: Zijn er betalingsmislukkingen die aandacht vereisen?
- **Supportverzoeken**: Zijn er onbeantwoorde vragen van klanten?

### Klantondersteuning {#customer-support}

Je nichefocus is hier een voordeel. Omdat al je klanten fitnessstudio's zijn, zul je steeds dezelfde vragen tegenkomen:

**Veelvoorkomende vragen die je krijgt:**

- "Hoe update ik mijn lesrooster?"
- "Kan ik de kleuren van mijn site wijzigen?"
- "Hoe voeg ik een nieuwe trainer toe aan mijn site?"
- "Mijn domein werkt niet"
- "Hoe annuleer/upgradeer ik mijn plan?"

Bouw je kennisbank (gestart in Les 8) rond deze terugkerende vragen. Elk supportticket dat een kennisbankartikel had kunnen zijn, is een signaal om dat artikel te schrijven.

### Support Niveaus {#support-tiers}

Naarmate je groeit, structureer je de ondersteuning per plan:

| Plan | Support Niveau | Reactietijd |
|------|--------------|---------------|
| Starter | Kennisbank + e-mail | 48 uur |
| Growth | E-mail support | 24 uur |
| Pro | Prioritaire e-mail + onboarding call | 4 uur |

De [Support Tickets addon](/addons/support-tickets) kan helpen bij het beheren van supportverzoeken binnen het platform.

## Facturatieprocessen {#billing-operations}

### Periodieke Betalingen {#recurring-payments}

Ultimate Multisite beheert periodieke facturering automatisch via je payment gateway. Jouw taak is om te monitoren op:

- **Mislukte betalingen**: Volg snel op. De meeste mislukkingen zijn verlopen kaarten, en geen opzettelijke annuleringen.
- **Dunning**: Stel automatische herhaallogica in via je payment gateway (Stripe regelt dit goed)
- **Annuleringsverzoeken**: Begrijp waarom klanten vertrekken. Elke annulering is feedback.

### Lidmaatschappen Beheren {#managing-memberships}

Navigeer naar **Ultimate Multisite > Memberships** om:

- Alle actieve abonnementen te bekijken
- Upgrade- en downgradeverzoeken te verwerken
- Terugbetalingen te verwerken indien nodig
- De verlopen proefperiodes te beheren

Zie [Managing Memberships](/user-guide/administration/managing-memberships) voor de volledige referentie.

### Facturatie {#invoicing}

Zorg ervoor dat facturen correct worden gegenereerd voor elke betaling. Klanten hebben facturen mogelijk nodig voor de verantwoording van bedrijfskosten. Zie [Managing Payments and Invoices](/user-guide/administration/managing-payments-and-invoices).

## Platform Onderhoud {#platform-maintenance}

### WordPress en Plugin Updates {#wordpress-and-plugin-updates}

Als netwerkbeheerder ben je verantwoordelijk voor:

- **WordPress core updates**: Testen op een staging site voordat je het toepast op de productieomgeving
- **Plugin updates**: Ook hier geldt: eerst testen, dan netwerkbreed toepassen
- **Theme updates**: Verifiëren of de templates na theme-updates nog correct ogen
- **Ultimate Multisite updates**: Volg de changelog en test voordat je updateert

:::warning Update Nooit in Productie Zonder Testen
Een defecte update beïnvloedt elke klantwebsite op je netwerk. Test updates altijd eerst op een stagingkopie van je netwerk.
:::

### Beveiliging {#security}

- Houd alle software up-to-date
- Gebruik sterke wachtwoorden en tweefactorauthenticatie voor admin-accounts
- Monitor op verdachte activiteiten
- Zorg voor een plan voor beveiligingsincidenten

### Prestaties {#performance}

Naarmate je netwerk groeit, monitor je:

- **Paginalaadtijden**: Zijn de klantwebsites snel?
- **Serverresourcegebruik**: CPU, geheugen, opslagruimte
- **Databaseprestaties**: Grote netwerken vereisen na verloop van tijd databaseoptimalisatie

Overweeg het implementeren van caching (pagina- en objectcaching) en een CDN als je dat nog niet gedaan hebt. De [Cloudflare integration](/user-guide/host-integrations/cloudflare) regelt veel van dit.

## Klantlevenscyclusbeheer {#customer-lifecycle-management}

### Churn Verminderen {#reducing-churn}

Churn is het percentage klanten dat elke maand annuleert. Voor een abonnementsbedrijf is het verminderen van churn net zo belangrijk als het werven van nieuwe klanten.

**Veelvoorkomende redenen waarom fitnessstudio-klanten churn:**

- Ze konden niet uitzoeken hoe ze het platform moesten gebruiken → verbeter de onboarding
- De site zag er niet goed genoeg uit → verbeter de templates
- Ze zagen geen waarde → verbeter de functies of communicatie
- Ze vonden een goedkopere alternatief → versterk je nichewaarde
- Hun bedrijf sloot → onvermijdelijk, maar houd dit apart bij

### Upgrades Stimuleren {#encouraging-upgrades}

Klanten op het Starter-niveau die succesvol zijn, moeten worden aangemoedigd om te upgraden:

- Wanneer ze planlimieten bereiken (sites, opslag), toon dan upgrade-prompts
- Stuur gerichte e-mails waarin de functies van het Growth-plan worden benadrukt waar ze baat bij zouden hebben
- Toon wat Growth/Pro-klanten hebben gebouwd

### Win-Back Campagnes {#win-back-campaigns}

Wanneer een klant annuleert:

1. Vraag waarom (exit-enquête of e-mail)
2. Beantwoord hun zorg indien mogelijk
3. Bied een korting om terug te keren (30-60 dagen na annulering)

## Wekelijkse en Maandelijkse Routines {#weekly-and-monthly-routines}

### Wekelijks {#weekly}

- Bekijk nieuwe aanmeldingen en annuleringen
- Beantwoord alle open supporttickets
- Controleer de platformprestaties en uptime
- Controleer op mislukte betalingen

### Maandelijks {#monthly}

- Analyseer belangrijke metrics (MRR, churn, nieuwe klanten, upgrades)
- Pas WordPress- en plugin-updates aan (na stagingtest)
- Herzien en update de kennisbank op basis van supportpatronen
- Stuur een nieuwsbrief of update naar klanten (nieuwe functies, tips, nieuws uit de fitnessindustrie)

### Driemaandelijks {#quarterly}

- Evalueer de prijzen ten opzichte van concurrenten en klantfeedback
- Beoordeel de template-ontwerpen – moeten ze vernieuwd worden?
- Beoordeel de hostingcapaciteit – moet je opschalen?
- Herzien en verbeter de onboarding op basis van activatiedata

## Wat We In Deze Les Hebben Opgebouwd {#what-we-built-this-lesson}

- **Dagelijkse monitoringroutines** voor uptime, aanmeldingen, betalingen en support
- **Een gelaagde supportstructuur** afgestemd op planniveaus
- **Facturatieprocessen** inclusief dunning en annuleringbeheer
- **Onderhoudsprocedures** voor updates, beveiliging en prestaties
- **Churn-verminderingstrategieën** specifiek voor de fitnessniche
- **Wekelijkse, maandelijkse en driemaandelijkse operationele routines**

---

**Volgende:** [Les 13: Opschalen](lesson-13-growth) -- FitSite laten groeien van een kleine operatie naar een echt bedrijf.
