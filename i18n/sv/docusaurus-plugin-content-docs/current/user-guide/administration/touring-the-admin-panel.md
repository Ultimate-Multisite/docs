---
title: Rundtur i adminpanelen
sidebar_position: 16
_i18n_hash: d8ee34d53f01aaaa8009bec02bcd891a
---
# Rundtur i adminpanelen

Ultimate Multisite strävar efter att vara så enkelt och självförklarande som möjligt, men med ett så kraftfullt verktyg kan det vara hjälpsamt med en guidad rundtur. Låt oss gå igenom adminsidorna för att hjälpa dig komma på plats.

## Dashboard {#dashboard}

Ultimate Multisite **Dashboard** visar grundläggande rapporter och analyser, inklusive intäkter, webbplatsaktiviteter, medlemskapstillväxt, besökarantal och geografiska data.

![Ultimate Multisite Dashboard](/img/admin/um-dashboard-top.png)

Här är en fullständig vy av dashboard:

![Ultimate Multisite Dashboard helsida](/img/admin/um-dashboard-full.png)

Och den nedre sektionen av dashboard:

![Ultimate Multisite Dashboard nedre sektion](/img/admin/um-dashboard-bottom.png)

Här är också en fullständig vy av nätverkets dashboard:

![Network Dashboard helsida](/img/admin/network-dashboard-full-page.png)

## Checkout-formulär {#checkout-forms}

**Checkout-formulär** ger dig flexibiliteten att skapa anpassade registreringssidor. Du kan anpassa fält, infoga anpassade klasser och skript samt begränsa åtkomst baserat på besökarens land eller plats.

![Lista över Checkout-formulär](/img/admin/checkout-forms-list.png)

## Produkter {#products}

Sektionen **Produkter** är där du skapar olika planer, paket och tjänster för ditt nätverk. Definiera priser, faktureringsfrekvenser samt gränser och kvoter på produktnivå.

![Produktlista](/img/admin/products-list.png)

## Medlemskap {#memberships}

Sidan **Medlemskap** visar alla prenumerationer i ditt nätverk. Granska och redigera prenumerationsdetaljer, inklusive planer, produkter, faktureringsbelopp och frekvenser, betalningshistorik och tidsstämplar.

![Medlemskapslista](/img/admin/memberships-list.png)

## Betalningar {#payments}

Sidan **Betalningar** ger en snabb vy över betalningshistoriken i hela ditt nätverk, med detaljerad transaktionsinformation inklusive specifika produkter och belopp.

![Betalningslista](/img/admin/payments-list.png)

## Kunder {#customers}

Sidan **Kunder** visar alla medlemmar som är registrerade i ditt nätverk med grundläggande användarinformation, inklusive namn, e-postadress, senaste inloggning och en "byt till"-länk för att logga in på deras underwebbplats.

![Kundlista](/img/admin/customers-list.png)

## Webbplatser {#sites}

Sidan **Webbplatser** listar alla underwebbplatser i ditt nätverk, inklusive webbplatsmallar och kundägda webbplatser. Hantera enkelt mappade domäner, gränser och kvoter, plugins och teman samt webbplatsminiatyrer.

![Lista över webbplatser](/img/admin/sites-list.png)

## Domäner {#domains}

Sidan **Domäner** är avsedd för anpassade domäner som är mappade till underwebbplatser. Som superadmin kan du manuellt lägga till eller mappa anpassade domännamn och visa DNS-poster och loggar.

![Domänlista](/img/admin/domains-list.png)

## Rabattkoder {#discount-codes}

**Rabattkoder** låter dig skapa kupongkoder för att erbjuda rabatter till dina slutanvändare. Ange rabattvärdet och rikta in dig på specifika användare eller grupper.

![Lista över rabattkoder](/img/admin/discount-codes-list.png)

## Utskick {#broadcasts}

**Utskick** är ett verktyg för att publicera meddelanden eller skicka privata meddelanden till användarna på dina underwebbplatser. Rikta in dig på specifika användargrupper baserat på den plan eller produkt de prenumererar på.

![Lista över utskick](/img/admin/broadcasts-list.png)

## Inställningar {#settings}

Sidan **Inställningar** är där du konfigurerar Ultimate Multisite — registreringsinställningar, betalningar, API och webhooks, domänmappning och andra integrationer.

Inställningar för AI-anslutare listar de OAuth-leverantörspooler som stöds för närvarande: Anthropic Max, OpenAI ChatGPT/Codex och Google AI Pro. Varje leverantörskort låter superadmins ansluta konton, uppdatera sparade konton, ta bort konton via e-post och använda den manuella OAuth-reservlösningen när en sandlådemiljö blockerar webbläsarens omdirigering. Installationsalternativ för Cursor Pro har tagits bort från adminpanelen.

ChatGPT/Codex-konton stöder verktygsanvändning via anslutaren där åtgärden tillåter verktyg, så adminarbetsflöden som är beroende av åtgärder som stöds av anslutaren kan använda Codex-verktygsbeteende efter att OpenAI-kontot har anslutits.

![Inställningssida](/img/admin/settings-general.png)

Här är en fullständig vy av sidan för allmänna inställningar:

![Allmänna inställningar helsida](/img/admin/settings-general-full.png)

Och sidan för e-postinställningar:

![E-postinställningar helsida](/img/admin/settings-emails-full.png)

Och sidan för betalningsinställningar:

![Betalningsinställningar helsida](/img/admin/settings-payments-full.png)

Och den nedre sektionen av betalningsinställningarna:

![Betalningsinställningar nedre sektion](/img/admin/settings-payments-bottom.png)

Och sidan för webbplatsinställningar:

![Webbplatsinställningar helsida](/img/admin/settings-sites-full.png)

## Händelser {#events}

Sidan **Händelser** sparar en förteckning över alla händelser och loggar i ditt nätverk. Den spårar aktiviteter som planändringar, registreringar och andra rörelser — användbart för att övervaka din multisite.

![Händelselista](/img/admin/events-list.png)

## Webhooks {#webhooks}

**Webhooks** låter dig leverera data till en annan applikation. Användbart för att skicka data från Ultimate Multisite till plattformar som Zapier.

![Lista över webhooks](/img/admin/webhooks-list.png)
