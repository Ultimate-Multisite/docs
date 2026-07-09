---
title: Nedgradering av et abonnement
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# Nedgradere et abonnement (v2) {#downgrading-a-plan-v2}

_**VIKTIG MERKNAD: Denne artikkelen gjelder Ultimate Multisite versjon 2.x.**_

Å nedgradere en plan eller et abonnement er en vanlig handling kundene dine kan gjøre hvis de har et begrenset budsjett, eller hvis de har bestemt at de ikke trenger mange ressurser for å drive undersiden sin.

## Slik nedgraderer du et abonnement {#how-to-downgrade-a-plan}

Kundene dine kan nedgradere abonnementet sitt når som helst ved å logge inn på admin-Dashboard for undersiden sin og klikke på **Endre** under Account-siden sin.

![Kundens Account-side med kortet Ditt medlemskap og Endre-knapp](/img/account-page/membership-change-button.png)

Når brukeren/kunden klikker på **Endre**-knappen, blir vedkommende omdirigert til betalingssiden, der de kan velge abonnementet de vil endre abonnementet sitt til.

![Side med alternativer for nedgradering av abonnement på kundesiden](/img/account-page/downgrade-picker.png)

I dette eksempelet nedgraderer vi abonnementet fra **Premium** til **Gratis**.

For å fortsette trenger brukeren bare å klikke på **Fullfør betaling**-knappen. De blir deretter sendt tilbake til Account-siden, som viser en melding om den ventende endringen for medlemskapet. Endringene trer i kraft ved kundens **neste faktureringssyklus**.

![Account-side som viser banner for ventende medlemskapsendring](/img/account-page/pending-change.png)

### Hva skjer når en bruker nedgraderer abonnementet sitt {#what-happens-when-a-user-downgrades-their-plan}

Det er viktig å merke seg at nedgradering av abonnementet ikke endrer den eksisterende konfigurasjonen på brukerens underside.

Det endrer ikke automatisk nettstedsmalen, siden endring av nettstedsmalen vil slette og tilbakestille undersiden fullstendig. Dette er for å unngå unødvendig datatap. Diskplass, temaer, plugins osv. vil derfor være intakt, bortsett fra innleggene.

Vi forstår at hovedbekymringen din vil være grensene og kvotene du har satt under hvert abonnement, men vi må ta hensyn til skaden det ville gjort på brukerens underside hvis vi slettet eller endret noen av konfigurasjonene.

For innleggene som overskrider grensen satt for abonnementet, har du 3 ulike alternativer: **Behold innleggene som de er** *,* **Flytt innleggene til papirkurven** *,* eller **Flytt innleggene til utkast** *.* Du kan konfigurere dette under Ultimate Multisite-innstillingene.

![Siden Nettverksadmininnstillinger Nettsteder som viser alternativer for atferd når innleggsgrensen overskrides](/img/account-page/settings-sites-post-limit.png)

### Hva skjer med betalingen {#what-happens-to-the-payment}

I versjon 2.0 kreves det ikke lenger noen justeringer av betalingen når det gjelder forholdsmessig beregning.

Dette er fordi systemet vil vente til det eksisterende medlemskapet **fullfører faktureringssyklusen sin før** det nye abonnementet/medlemskapet trer i kraft. Det nye faktureringsbeløpet for det nye medlemskapet blir automatisk brukt og belastet i neste faktureringssyklus.
