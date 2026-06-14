---
title: Gennemgang af administrationspanelet
sidebar_position: 16
_i18n_hash: d8ee34d53f01aaaa8009bec02bcd891a
---
# Gennemgang af Admin-panelet

Ultimate Multisite sigter mod at være så simpelt og selvforklarende som muligt, men med et så kraftfuldt værktøj kan det hjælpe med en guidet tur. Lad os gå igennem de administrative sider for at hjælpe dig med at komme godt i gang.

## Dashboard

Ultimate Multisite **Dashboard** viser grundlæggende rapporter og analyser, herunder indtægter, sites aktiviteter, medlemsvækst, besøgsantal og geografiske data.

![Ultimate Multisite Dashboard](/img/admin/um-dashboard-top.png)

Her er et fuldt overblik over dashboardet:

![Ultimate Multisite Dashboard full page](/img/admin/um-dashboard-full.png)

Og bunden af dashboardet:

![Ultimate Multisite Dashboard bottom section](/img/admin/um-dashboard-bottom.png)

Her er også et fuldt overblik over netværksdashboardet:

![Network Dashboard full page](/img/admin/network-dashboard-full-page.png)

## Checkout Forms

**Checkout Forms** giver dig fleksibiliteten til at oprette egne registreringssider. Du kan tilpasse felter, indsætte egne klasser og scripts samt begrænse adgangen baseret på besøgendes land eller placering.

![Checkout Forms list](/img/admin/checkout-forms-list.png)

## Produkter

**Products** sektionen er der, hvor du opretter forskellige planer, pakker og tjenester til dit netværk. Definer priser, faktureringsfrekvenser samt grænser og kvoter på produktniveau.

![Products list](/img/admin/products-list.png)

## Medlemskaber

**Memberships** siden viser alle abonnementer i dit netværk. Gennemgå og rediger detaljer om abonnementerne, herunder planer, produkter, faktureringsbeløb og -frekvenser, betalhistorik samt tidsstempler.

![Memberships list](/img/admin/memberships-list.png)

## Betalinger

Siden **Betalinger** giver et hurtigt overblik over betalingshistorikken på tværs af hele dit netværk, med detaljerede transaktionsoplysninger herunder specifikke produkter og beløb.

![Payments list](/img/admin/payments-list.png)

## Brugere

Siden **Brugere** viser alle medlemmer registreret i dit netværk med grundlæggende brugerinformation som navn, e-mailadresse, sidste login og et "skift til"-link til at logge ind på deres undersite.

![Customers list](/img/admin/customers-list.png)

## Sider

Siden **Sider** lister alle subsites i dit netværk op, herunder sidtempler og kundeejede sider. Administrer nemt kortlagte domæner, grænser & kvoter, plugins og themes samt side-thumbnails.

![Sites list](/img/admin/sites-list.png)

## Domæner

Siden **Domæner** er dedikeret til custom domæner kortlagt til subsites. Som superadministrator kan du manuelt tilføje eller kortlægge custom domænenavne og se DNS-oplysninger samt logs.

![Domains list](/img/admin/domains-list.png)

## Rabatkoder

**Rabatkoder** giver dig mulighed for at oprette kuponkoder for at tilbyde rabatter til dine slutbrugere. Angiv rabatværdien og mål specifikke brugere eller grupper.

![Discount Codes list](/img/admin/discount-codes-list.png)

## Udsendelser

**Udsendelser** er et værktøj til at udrulle meddelelser eller sende private beskeder til dine subsite-brugere. Mål specifikke brugergrupper baseret på planen eller produkt, de er abonnenter på.

![Broadcasts list](/img/admin/broadcasts-list.png)

## Indstillinger

Siden **Indstillinger** er her, hvor du konfigurerer Ultimate Multisite — registreringsindstillinger, betalinger, API og webhooks, domænekortlægning og andre integrationer.

AI connector indstillinger lister de i øjeblikkeligt understøttede OAuth provider pools: Anthropic Max, OpenAI ChatGPT/Codex og Google AI Pro. Hver leverandørkort giver superadministratorer mulighed for at forbinde konti, opdatere gemte konti, fjerne konti via e-mail og bruge den manuelle OAuth fallback, når et sandboxed miljø blokerer browseromdirigering. Cursor Pro opsætningstilbud er fjernet fra adminpanelet.

ChatGPT/Codex konti understøtter værktøjsbrug baseret på connector, hvor operationen tillader brug af værktøjer, så administratorworkflows, der afhænger af operationer understøttet af connector, kan bruge Codex tool behavior efter at OpenAI-kontoen er forbundet.

![Settings page](/img/admin/settings-general.png)

Her er et fuldt overblik over den generelle indstillingsside:

![Settings general full page](/img/admin/settings-general-full.png)

Og e-mailindstillingssiden:

![Settings emails full page](/img/admin/settings-emails-full.png)

Og betalingsindstillingssiden:

![Settings payments full page](/img/admin/settings-payments-full.png)

Og bunden af betalingsindstillingerne:

![Settings payments bottom section](/img/admin/settings-payments-bottom.png)

Og sidindstillingssiden:

![Settings sites full page](/img/admin/settings-sites-full.png)

## Events

**Events** siden holder styr på alle hændelser og logs i dit netværk. Den sporer aktiviteter som planændringer, tilmeldingsprocesser og andre bevægelser – nyttigt til at overvåge dit multisite.

![Events list](/img/admin/events-list.png)

## Webhooks

**Webhooks** giver dig mulighed for at levere data til en anden applikation. Det er nyttigt til at sende data fra Ultimate Multisite til platforme som Zapier.

![Webhooks list](/img/admin/webhooks-list.png)
