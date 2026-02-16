---
title: Registrer en konto via Zapier
sidebar_position: 1
_i18n_hash: e769e5eddf428f2eac478f5b8cd4592d
---
# Hendelse: Registrer en konto via Zapier

I artikkelen [Integrasjon av Ultimate Multisite med Zapier](zapier.md) gikk vi gjennom hvordan du kan bruke Zapier til å utføre ulike handlinger i Ultimate Multisite basert på utløsere og hendelser. I denne artikkelen viser vi hvordan du kan integrere tredjepartsapplikasjoner. Vi bruker Google Sheets som datakilde og sender informasjonen til Ultimate Multisite for å registrere en konto.

Først må du opprette et **Google Sheet** i Google Drive. Pass på at du definerer hver kolonne riktig, slik at du enkelt kan koble dataene sammen senere.

![Google Sheet med kolonner for kundedata](/img/admin/webhooks-list.png)Etter at du har opprettet et Google Sheet, kan du logge inn på Zapier-kontoen din og begynne å lage en zap.

![Zapier-dashbord for å starte opprettelsen av en zap](/img/admin/webhooks-list.png)I søkefeltet for **«App event»** velger du **«Google Sheets»**

![Velge Google Sheets som app-hendelse](/img/admin/webhooks-list.png)

Deretter velger du **«New spreadsheet row»** i feltet **«Event»** og klikker på **«Continue»**

![Velge New spreadsheet row-hendelse i Zapier](/img/admin/webhooks-list.png)I neste steg blir du bedt om å velge **Google-kontoen** der **Google Sheet** er lagret. Forsikre deg om at riktig Google-konto er valgt.

![Velge Google-konto for Google Sheet](/img/admin/webhooks-list.png)

Under **«Set up trigger»** må du velge og angi Google-regnearket og arbeidsarket som dataene skal hentes fra. Fyll ut disse feltene og klikk på **«Continue»**

![Sette opp utløser med valg av regneark og arbeidsark](/img/admin/webhooks-list.png)Neste steg er å **«teste utløseren»** for å forsikre deg om at Google Sheet er riktig tilkoblet.

![Test utløser-steget i Zapier](/img/admin/webhooks-list.png)Hvis testen er vellykket, vil du se resultatet med noen verdier fra regnearket. Klikk på **«Continue»** for å gå videre.

![Vellykket utløsertest som viser verdier fra regnearket](/img/admin/webhooks-list.png)Neste steg er å sette opp den andre handlingen som vil opprette eller registrere en konto i Ultimate Multisite. I søkefeltet velger du **«Ultimate Multisite(2.0.2)»**

![Velge Ultimate Multisite som handlingsapp](/img/admin/webhooks-list.png)

I feltet **«Event»** velger du **«Register an Account in Ultimate Multisite»** og klikker deretter på **«Continue»**-knappen.

![Register an Account in Ultimate Multisite som handlingshendelse](/img/admin/webhooks-list.png)Under **«Set up an action»** ser du ulike felt for kundedata, medlemskap, produkter og mer. Du kan koble verdiene fra Google Sheet til riktig felt der de skal fylles inn, som vist i skjermbildet nedenfor.

![Koble verdier fra Google Sheet til Ultimate Multisite-felt](/img/admin/webhooks-list.png)

Etter at du har koblet verdiene, kan du teste handlingen.

![Teste registrer konto-handlingen i Zapier](/img/admin/webhooks-list.png)
