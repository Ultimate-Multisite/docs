---
title: 'Lektion 8: Kundonboarding'
sidebar_position: 9
_i18n_hash: 5b71133bebf067164c77d33db7c81806
---
# Lektion 8: Kundintroduktion (Onboarding)

Att få en kund att registrera sig är bara halva jobbet. Om de loggar in, känner sig överväldigade och aldrig kommer tillbaka, har du förlorat dem. Denna lektion designar upplevelsen som förvandlar en ny registrering till en aktiv, engagerad kund.

## Var vi slutade

FitSite är fullständigt varumärkesbyggt med ett fungerande kassanflöde. Nu fokuserar vi på vad som händer efter att en ägare av ett träningsstudio slutfört registreringen och landar på sin nya webbplats för första gången.

## Varför onboarding är viktigt

De första 30 minuterna efter registreringen avgör om en kund stannar kvar eller lämnar oss. En ägare av ett träningsstudio som:

- Loggar in och ser en webbplats som redan ser ut som en träningswebbplats → stannar kvar
- Vet exakt vad de ska göra härnäst → stannar kvar
- Känner sig vilse i ett generiskt WordPress-dashboard → lämnar

Dina nischmallar (Lektion 4) hanterar den första punkten. Denna lektion hanterar den andra.

## Första inloggningsupplevelsen

### Welcome Dashboard Widget

Skapa en anpassad dashboard-widget som välkomnar nya kunder och guidar dem genom uppsättningen. Detta bör visas framträdande när de loggar in första gången.

**FitSite Quick Start:**

1. **Lägg till ditt studios namn och logotyp** -- Länk till Customizer eller Site Identity-inställningar
2. **Uppdatera din kursplan** -- Länk direkt till redigeraren för sidan "Classes"
3. **Lägg till dina tränare** -- Länk till redigeraren för sidan "Trainers"
4. **Ställ in dina kontaktuppgifter** -- Länk till redigeraren för sidan "Contact"
5. **Förhandsgranska din webbplats** -- Länk till frontenden

Varje steg länkar direkt till den relevanta sidan eller inställningen. Inget letande genom menyer.

### Förenkla dashboarden

Nya kunder behöver inte se varje menyalternativ i WordPress. Överväg:

- Att dölja menyalternativ som inte är relevanta för hantering av träningswebbplatser (t.ex. Kommenterar om det inte används)
- Att omordna menyn så att de mest använda alternativen kommer först
- Att lägga till anpassade menyetiketter som passar nischen ("Ditt Studio" istället för "Appearance")

Addonet [Plugin & Theme Manager](/addons/plugin-and-theme-manager) kan hjälpa till att kontrollera vad kunderna ser.

## Välkomst-e-postsekvens

Ett enda välkomst-e-postmeddelande räcker inte. Ställ in en sekvens som guidar kunderna genom deras första vecka:

### E-post 1: Välkommen (Omedelbart efter registrering)

- Ämne: "Välkommen till FitSite – din studios webbplats är live"
- Innehåll: Inloggningslänk, snabbstartsteg, länk till hjälpresurser
- Ton: Entusiastisk, uppmuntrande, träningsspecifik

### E-post 2: Snabba vinster (Dag 1)

- Ämne: "3 saker du bör göra först på din FitSite"
- Innehåll: Lägg till din logotyp, uppdatera hjältbilden på startsidan, lägg till din kursplan
- Inkludera skärmdumpar som visar exakt var man ska klicka

### E-post 3: Gör det till ditt eget (Dag 3)

- Ämne: "Låt ditt träningsstudio sticka ut"
- Innehåll: Anpassa färger, lägg till tränarfoton, skriv din studios historia
- Länk till exempel på bra träningswebbplatser på plattformen

### E-post 4: Gå live (Dag 7)

- Ämne: "Redo att dela din FitSite med världen?"
- Innehåll: Checklista över vad som ska verifieras innan delning, hur man kopplar ett anpassat domännamn (om man använder Growth/Pro), tips för social delning

:::tip E-postautomatisering
Använd [Webhooks](/user-guide/integrations/webhooks) eller [Zapier](/user-guide/integrations/zapier) för att utlösa dessa e-postmeddelanden via din e-postmarknadsföringsplattform. Detta ger dig mer kontroll över tajmingen och låter dig spåra engagemanget.
:::

## Hjälpresurser

Skapa nischspecikalt hjälpinnehåll som svarar på de frågor som träningsstudioägare faktiskt ställer:

### Kunskapsbasartiklar

- "Hur man uppdaterar kursplanen"
- "Lägga till och redigera tränarprofiler"
- "Ändra ditt studios logotyp och färger"
- "Koppla ditt eget domännamn" (för Growth/Pro-kunder)
- "Lägga till en bokningswidget på din webbplats"

Skriv dessa för icke-tekniska användare. Använd skärmdumpar. Undvik WordPress-jargong.

### Video-genomgångar

Korta (2–3 minuter) skärminspelningar som visar:

- Första inloggningen och orienteringen
- Redigering av startsidan
- Uppdatering av kursplanen
- Lägg till en ny tränare

Dessa behöver inte vara polerade produktioner. Tydligt, hjälpsamt och nischspecifikt är det som spelar roll.

## Kontosidan

Ultimate Multisite inkluderar en kundfacing [Account Page](/user-guide/client-management/account-page) där kunderna hanterar sitt abonnemang. Anpassa denna sida för att:

- Visa deras nuvarande FitSite-plan
- Visa uppgraderingsalternativ med träningsspecifika fördelar
- Tillhandahålla faktureringshistorik och nedladdning av fakturor
- Länka till hjälpresurser

## Mäta onboarding-framgång

Spåra dessa indikatorer för att veta om din onboarding fungerar:

- **Aktiveringsgrad (Activation rate)**: Vilken procentandel av registreringarna anpassar faktiskt sin webbplats under den första veckan?
- **Inloggningar under första veckan (First-week logins)**: Hur många gånger loggar en ny kund in under sin första vecka?
- **Supportärenden från nya kunder**: Hög volym betyder att din onboarding har luckor
- **Konvertering från provperiod till betald (Trial-to-paid conversion)**: Om du erbjuder provperioder, vilken procentandel konverterar?

## FitSite Network hittills

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

## Vad vi byggde i denna lektion

- **En guidad första inloggningsupplevelse** med en Quick Start-widget
- **En förenklad dashboard** fokuserad på uppgifter för hantering av träningswebbplatser
- **En välkomst-e-postsekvens** som guidar kunderna genom deras första vecka
- **Nischspecifika hjälpresurser** skrivna för icke-tekniska träningsstudioägare
- **Onboarding-mått** för att spåra och förbättra upplevelsen

---

**Nästa:** [Lektion 9: Prissättning för vinst](lesson-9-pricing) -- vi förfinar prissättningsstrategin för att maximera intäkterna och minimera avhopp.
