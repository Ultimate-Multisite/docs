---
title: Registrera ett konto via Zapier
sidebar_position: 1
_i18n_hash: e769e5eddf428f2eac478f5b8cd4592d
---
# Händelse: Registrera ett konto via Zapier

I artikeln [Integrera Ultimate Multisite med Zapier](zapier.md) gick vi igenom hur du kan använda Zapier för att utföra olika åtgärder i Ultimate Multisite baserat på triggers och händelser. I den här artikeln visar vi hur du kan integrera tredjepartsapplikationer. Vi använder Google Sheets som datakälla och skickar informationen till Ultimate Multisite för att registrera ett konto.

Först behöver du skapa ett **Google Sheet** i din Google Drive. Se till att du definierar varje kolumn tydligt så att du enkelt kan mappa datan senare.

![Google Sheet med kolumner för kunddata](/img/admin/webhooks-list.png)När du har skapat ett Google Sheet kan du logga in på ditt Zapier-konto och börja skapa en zap.

![Zapiers dashboard för att börja skapa en zap](/img/admin/webhooks-list.png)I sökfältet för **"App event"** väljer du **"Google Sheets"**

![Välja Google Sheets som app-händelse](/img/admin/webhooks-list.png)

I fältet "**Event**" väljer du sedan "**New spreadsheet row**" och klickar på "**Continue**"

![Välja händelsen New spreadsheet row i Zapier](/img/admin/webhooks-list.png)I nästa steg blir du ombedd att välja det **Google-konto** där ditt **Google Sheet** är sparat. Se till att rätt Google-konto är angivet.

![Välja Google-konto för Google Sheet](/img/admin/webhooks-list.png)

Under "**Set up trigger**" behöver du välja och ange vilket Google-kalkylark och vilket arbetsblad du vill använda som datakälla. Fyll i dessa uppgifter och klicka på "**Continue**"

![Konfigurera trigger med val av kalkylark och arbetsblad](/img/admin/webhooks-list.png)Nästa steg är att "**test your trigger**" för att säkerställa att ditt Google Sheet är korrekt anslutet.

![Steg för att testa din trigger i Zapier](/img/admin/webhooks-list.png)Om testet lyckas bör du se ett resultat med värden från ditt kalkylark. Klicka på "**Continue**" för att fortsätta.

![Lyckat triggertest som visar värden från kalkylarket](/img/admin/webhooks-list.png)Nästa steg är att konfigurera den andra åtgärden som skapar eller registrerar ett konto i Ultimate Multisite. I sökfältet väljer du "**Ultimate Multisite(2.0.2)**"

![Välja Ultimate Multisite som åtgärdsapp](/img/admin/webhooks-list.png)

I fältet "**Event**" väljer du "**Register an Account in Ultimate Multisite**" och klickar sedan på "**Continue**".

![Åtgärdshändelsen Register an Account in Ultimate Multisite](/img/admin/webhooks-list.png)Under "**Set up an action**" ser du olika fält tillgängliga för kunddata, medlemskap, produkter med mera. Du kan mappa värdena från ditt Google Sheet och tilldela dem till rätt fält där de ska fyllas i, som visas i skärmdumpen nedan.

![Mappa Google Sheet-värden till Ultimate Multisite-fält](/img/admin/webhooks-list.png)

När du har mappat värdena kan du testa åtgärden.

![Testa Zapier-åtgärden för att registrera konto](/img/admin/webhooks-list.png)
