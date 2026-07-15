---
title: Registrer en Account via Zapier
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Hendelse: Registrer en konto via Zapier

I artikkelen [Integrere Ultimate Multisite med Zapier](zapier.md) diskuterte vi hvordan du bruker Zapier til å utføre ulike handlinger i Ultimate Multisite basert på triggere og hendelser. I denne artikkelen viser vi hvordan du kan integrere tredjepartsapplikasjoner. Vi bruker Google Sheets som datakilde og sender informasjonen til Ultimate Multisite for å registrere en konto.

Før du kobler til Zapier, gå til **Ultimate Multisite > Innstillinger > API og Webhooks** og bekreft at API-et er aktivert. Kopier API-nøkkelen og API-hemmeligheten fra denne skjermen når Zapier ber om påloggingsopplysningene for Ultimate Multisite-kontoen.

![API- og Webhooks-innstillinger med API-nøkkel, API-hemmelighet og Aktiver API-alternativer](/img/admin/settings-api-webhooks.png)

Først må du opprette et **Google Sheet** i Google Drive. Sørg for at du definerer hver kolonne riktig, slik at du enkelt kan tilordne dataene senere.

Etter at du har opprettet et Google-regneark, kan du logge inn på Zapier-kontoen din og begynne å opprette en zap.

Under søkefeltet for **"App-hendelse"** velger du **"Google Sheets"**


Deretter velger du **"Ny regnearkrad** " for feltet "**Hendelse** " og trykker på "**Fortsett** "

Neste trinn ber deg velge en **Google-konto** der **Google Sheet** er lagret. Sørg derfor for at riktig Google-konto er angitt.


Under **"Sett opp trigger** " må du velge og angi Google-regnearket og regnearkarket du vil bruke, der dataene skal komme fra. Bare fyll ut dette og trykk på "**Fortsett** "

Neste er å "**teste triggeren din** " for å sikre at Google-regnearket ditt er riktig tilkoblet.

Hvis testen er vellykket, bør du se resultatet som viser noen verdier fra regnearkene dine. Klikk på "**Fortsett** " for å gå videre.

Neste trinn er å sette opp den andre handlingen som vil opprette eller registrere en konto i Ultimate Multisite. I søkefeltet velger du "**Ultimate Multisite(2.0.2)** "


Under feltet "**Hendelse** " velger du "**Registrer en konto i Ultimate Multisite** " og klikker deretter på knappen "**Fortsett** ".

Under "**Sett opp en handling** " vil du se ulike felt tilgjengelige for kundedata, medlemskap, produkter osv. Du kan tilordne verdiene fra Google-regnearket ditt og knytte dem til riktig felt der de skal fylles inn, som vist i skjermbildet nedenfor.


Etter at du har tilordnet verdiene, kan du teste handlingen.
