---
title: Oppgradere et abonnement
sidebar_position: 11
_i18n_hash: 292fe52b63762d11e65c720ada133d39
---
# Oppgradering av en plan (v2)

_**VIKTIG MERKNAD: Denne artikkelen viser til Ultimate Multisite versjon 2.x.**_

Kundene dine kan oppgradere planene sine når som helst. De kan enten oppgradere til en annen plan eller kjøpe tilleggstjenester eller pakker som du tilbyr på nettverket ditt.

I denne veiledningen går vi gjennom hvordan de kan oppgradere planen sin og hva som skjer etter oppgraderingsprosessen.

For å oppgradere planen sin bør kundene dine åpne Dashboard og gå til **Account**-siden.

![Dashboard for kundens undersite med Account-menylenke synlig](/img/account-page/account-menu.png)

På Account-siden får de se sitt nåværende medlemskap og planen som er knyttet til det. For å oppgradere til en annen plan må de klikke på **Endre** øverst til høyre i **Ditt medlemskap**-seksjonen.

![Account-side Ditt medlemskap-kort med Endre-knapp](/img/account-page/membership-change-button.png)

De blir omdirigert til et checkout-skjema der alle tilgjengelige planer vises.

De vil også kunne se **tjenestene og pakkene som er tilgjengelige for deres nåværende plan** , i tilfelle de bare ønsker å kjøpe en spesifikk tjeneste eller pakke (som ubegrensede besøk eller diskplass i eksempelet vårt her), og ikke oppgradere planen.

![Oppgraderingsvelger som viser tilgjengelige planer og pakker på kundesiden](/img/account-page/upgrade-picker.png)

Etter at de velger produktet de ønsker å kjøpe, vil de se hvor mye de må betale akkurat nå – ekskludert eventuell eksisterende kreditt – og hvor mye de blir belastet på neste faktureringsdato.

Vanligvis, hvis produktet er en annen plan og betalingen skal gjøres mellom en medlemskapsbelastning, vil de motta en kreditt for beløpet som er betalt på den første planen.

![Oppsummering av oppgraderingsbetaling som viser anvendt kreditt og neste faktureringsbeløp](/img/account-page/upgrade-summary.png)

Hvis de velger en plan eller pakke som ikke vil endre noe fra det nåværende abonnementet, vil de se en melding som forklarer det.

![Varsel når den valgte planen ikke endrer abonnementet](/img/account-page/upgrade-no-change.png)

Etter at checkout er fullført, blir det/de nye produktet/produktene lagt til på kundens konto, og alle grensene eller funksjonene for det/de nye produktet/produktene blir umiddelbart lagt til: besøk, diskplass, innlegg osv...

##

##

## Oppgraderings- og nedgraderingsstier {#upgrade-and-downgrade-paths}

På hvert av produktene dine har du en **Opp- og nedgraderinger**-fane. Det første alternativet på den fanen er et felt kalt **Plangruppe**.

**Plangrupper** er det som gjør at du kan la Ultimate Multisite vite at bestemte planer tilhører samme "familie", og derfor bør brukes til å konstruere alternativer for oppgraderings-/nedgraderingsstier.

![Produktredigering Opp- og nedgraderinger-fane med Plangruppe-felt](/img/config/product-upgrades-plan-group.png)

For eksempel har du en **Gratis plan** , en **Grunnleggende plan** og en **Premium-plan** tilgjengelig. Du vil at brukere som abonnerer under **Gratis plan**, bare skal kunne oppgradere til **Premium-plan**, og du vil ikke at de skal se "Grunnleggende plan" som et oppgraderingsalternativ. Alt du trenger å gjøre, er å tildele samme plangruppenavn for både Gratis- og Premium-planene, som vist i skjermbildene nedenfor.

![Gratis plan-produktside med High End-plangruppe tildelt](/img/config/product-upgrades-free.png)

![Premium-plan-produktside med High End-plangruppe tildelt](/img/config/product-upgrades-premium.png)

Dette bør fortelle Ultimate Multisite at det finnes en "familie" av planer i nettverket som heter **High End**. Når oppgraderinger eller nedgraderinger tilbys, vil bare planer fra samme familie bli presentert som et alternativ for brukeren.
