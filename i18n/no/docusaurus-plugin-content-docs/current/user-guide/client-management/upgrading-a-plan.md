---
title: Oppgradere et abonnement
sidebar_position: 11
_i18n_hash: 83ee30a9547c0ea02bd1338ab7ec3f69
---
# Oppgradere en plan (v2)

_**VIKTIG: Denne artikkelen gjelder Ultimate Multisite versjon 2.x.**_

Kundene dine kan oppgradere planene sine når som helst. De kan enten oppgradere til en annen plan eller kjøpe tilleggstjenester eller pakker som du tilbyr på nettverket ditt.

I denne veiledningen går vi gjennom hvordan de kan oppgradere planen sin, og hva som skjer etter oppgraderingsprosessen.

For å oppgradere planen sin må kundene gå til dashboardet sitt og åpne **Konto**-siden.

![Kundedashboard med lenke til Konto-siden](/img/admin/memberships-list.png)

På Konto-siden ser de sitt nåværende medlemskap og planen knyttet til det. For å oppgradere til en annen plan må de klikke på **Endre** øverst til høyre i seksjonen **Ditt medlemskap**.

![Ditt medlemskap-seksjonen med Endre-knapp](/img/admin/memberships-list.png)

De blir deretter sendt til et betalingsskjema hvor alle tilgjengelige planer vises.

De vil også kunne se **tjenester og pakker som er tilgjengelige for deres nåværende plan**, i tilfelle de bare ønsker å kjøpe en spesifikk tjeneste eller pakke (som ubegrenset antall besøk eller diskplass i vårt eksempel her), uten å oppgradere selve planen.

![Betalingsskjema som viser tilgjengelige planer og pakker](/img/admin/memberships-list.png)

Etter at de har valgt produktet de ønsker å kjøpe, ser de hvor mye de må betale nå – fratrukket eventuell eksisterende kreditt – og hvor mye de vil bli belastet på neste faktureringsdato.

Hvis produktet er en annen plan og betalingen skjer mellom to medlemskapsbelastninger, vil de vanligvis få en kreditt for beløpet de betalte på den første planen.

![Oppsummering av oppgraderingsbetaling med kreditt og neste faktureringsbeløp](/img/admin/memberships-list.png)

Hvis de velger en plan eller pakke som ikke endrer noe fra det nåværende abonnementet, vil de se en melding som forklarer dette.

![Melding når valgt plan ikke endrer abonnementet](/img/admin/memberships-list.png)

Etter at betalingen er fullført, legges de nye produktene til på kundens konto, og alle grenser eller funksjoner fra de nye produktene aktiveres umiddelbart: besøk, diskplass, innlegg osv.

## 

## 

## Oppgraderings- og nedgraderingsstier

På hvert av produktene dine finner du en fane kalt **Opp- og nedgraderinger**. Det første alternativet på denne fanen er et felt som heter **Plangruppe**.

**Plangrupper** gjør det mulig å fortelle Ultimate Multisite at visse planer tilhører samme «familie», og at de derfor skal brukes til å bygge opp alternativer for oppgraderings- og nedgraderingsstier.

![Opp- og nedgraderinger-fanen med Plangruppe-feltet](/img/config/product-upgrades.png)

La oss si at du har en **Gratis plan**, en **Basisplan** og en **Premiumplan** tilgjengelig. Du ønsker at brukere som abonnerer på **Gratis plan** kun skal kunne oppgradere til **Premiumplan**, og at de ikke skal se «Basisplan» som et oppgraderingsalternativ. Alt du trenger å gjøre er å tildele samme plangruppenavn til både Gratis plan og Premiumplan, som vist i skjermbildene nedenfor.

![Gratis plan med plangruppen High End tildelt](/img/config/product-upgrades.png)

![Premiumplan med plangruppen High End tildelt](/img/config/product-upgrades.png)

Dette forteller Ultimate Multisite at det finnes en «familie» av planer i nettverket som heter **High End**. Når oppgraderinger eller nedgraderinger tilbys, vises kun planer fra samme familie som alternativer for brukeren.
