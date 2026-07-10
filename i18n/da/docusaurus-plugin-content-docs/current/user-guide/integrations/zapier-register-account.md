---
title: Registrer en konto via Zapier
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Event: Registrer en konto via Zapier {#event-register-an-account-via-zapier}

I artiklen [Integrating Ultimate Multisite with Zapier](zapier.md) har vi diskuteret, hvordan man bruger Zapier til at udføre forskellige handlinger i Ultimate Multisite baseret på triggers og events. I denne artikel vil vi vise dig, hvordan du kan integrere tredjepartsapplikationer. Vi vil bruge Google Sheets som datakilde og sende oplysningerne til Ultimate Multisite for at registrere en konto.

Før du forbinder Zapier, skal du gå til **Ultimate Multisite > Settings > API & Webhooks** og bekræfte, at API'en er aktiveret. Kopier API Key og API Secret fra denne skærm, når Zapier beder om Ultimate Multisite-kontoudlysninger.

![API and Webhooks settings with API Key, API Secret, and Enable API options](/img/admin/settings-api-webhooks.png)

Først skal du oprette en **Google Sheet** i din Google Drive. Sørg for at definere hver kolonne korrekt, så du nemt kan mappe dataene senere.

Når du har oprettet en Google Sheet, kan du logge ind på din Zapier-konto og begynde at oprette en zap.

Under søgefeltet for **"App event"** skal du vælge **"Google Sheets"**.

Derefter i feltet "**Event** " skal du vælge "**New spreadsheet row** " og trykke på "**Continue** ".

Næste trin vil bede dig om at vælge en **Google Account**, hvor **Google Sheet**'en er gemt. Sørg blot for, at den rigtige Google-konto er angivet.

Under "**Set up trigger**" skal du vælge og specificere den Google Spreadsheet og det ark, du vil bruge som kilde til dataene. Bare udfyld dem og tryk på "**Continue** ".

Næste trin er at "**test your trigger**" for at sikre dig, at din Google Sheet er korrekt forbundet.

Hvis testen lykkes, skal du se resultatet med nogle værdier fra dine spreadsheets. Klik på "**Continue**" for at fortsætte.

Næste skridt er at opsætte den anden handling, som vil oprette eller registrere en konto i Ultimate Multisite. I søgefeltet skal du vælge "**Ultimate Multisite(2.0.2)** ".

Under feltet "**Event**" skal du vælge "**Register an Account in Ultimate Multisite**" og derefter klikke på knappen "**Continue**".

Under "**Set up an action**" vil du se forskellige felter til kundedata, medlemskaber, produkter osv. Du kan kortlægge værdierne i dit Google Sheet og tildele dem til det korrekte felt, hvor de skal udfyldes, som vist på skærmbilledet nedenfor.

Efter at have kortlagt værdierne kan du teste handlingen.
