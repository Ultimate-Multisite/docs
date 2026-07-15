---
title: Registrera ett Account via Zapier
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Händelse: Registrera ett Account via Zapier

I artikeln [Integrera Ultimate Multisite med Zapier](zapier.md) diskuterade vi hur man använder Zapier för att utföra olika åtgärder inom Ultimate Multisite baserat på triggers och händelser. I den här artikeln visar vi hur du kan integrera tredjepartsapplikationer. Vi använder Google Sheets som datakälla och skickar informationen till Ultimate Multisite för att registrera ett Account.

Innan du ansluter Zapier, gå till **Ultimate Multisite > Settings > API & Webhooks** och bekräfta att API:t är aktiverat. Kopiera API Key och API Secret från den här skärmen när Zapier ber om inloggningsuppgifterna för Ultimate Multisite Account.

![API- och Webhooks-inställningar med API Key, API Secret och alternativ för att aktivera API](/img/admin/settings-api-webhooks.png)

Först behöver du skapa ett **Google Sheet** under din Google Drive. Se till att du definierar varje kolumn korrekt så att du enkelt kan mappa datan senare.

Efter att ha skapat ett Google Sheet kan du logga in på ditt Zapier Account och börja skapa en zap.

Under sökfältet för **"App event"** välj **"Google Sheets"**


Välj sedan **"New spreadsheet row"** för fältet "**Event** " och tryck på "**Continue** "

Nästa steg ber dig välja ett **Google Account** där **Google Sheet** är sparat. Se bara till att rätt Google Account är angivet.


Under **"Set up trigger** " behöver du välja och ange Google-kalkylarket och kalkylbladet du kommer att använda, där datan kommer ifrån. Fyll bara i dessa och tryck på "**Continue** "

Nästa steg är att "**test your trigger** " för att säkerställa att ditt Google Sheet är korrekt anslutet.

Om ditt test lyckas bör du se resultatet som visar några värden från dina kalkylark. Klicka på "**Continue** " för att fortsätta.

Nästa steg är att konfigurera den andra åtgärden som kommer att skapa eller registrera ett Account i Ultimate Multisite. I sökfältet välj "**Ultimate Multisite(2.0.2)** "


Under fältet "**Event** " väljer du "**Register an Account in Ultimate Multisite** " och klickar sedan på knappen "**Continue** ".

Under "**Set up an action** " ser du olika fält tillgängliga för kunddata, memberships, produkter osv. Du kan mappa värdena från ditt Google Sheet och tilldela dem till rätt fält där de ska fyllas i, som visas i skärmbilden nedan.


Efter att ha mappat värdena kan du testa åtgärden.
