---
title: Nedgradering av et abonnement
sidebar_position: 7
_i18n_hash: dc3ac67048002b04bfb952a01cf289c9
---
# Nedgradering av et abonnement (v2)

_**VIKTIG MERKNAD: Denne artikkelen gjelder Ultimate Multisite versjon 2.x.**_

Å nedgradere et abonnement er noe kundene dine ofte kan gjøre hvis de har et begrenset budsjett, eller hvis de har bestemt seg for at de ikke trenger så mange ressurser for å drifte undersiden sin.

## Slik nedgraderer du et abonnement

Kundene dine kan nedgradere abonnementet sitt når som helst ved å logge inn på administrasjonspanelet for undersiden sin og klikke på **Endre** under kontosiden.

![Kontoside med Endre-knapp under medlemskap](/img/admin/memberships-list.png)

Når brukeren/kunden klikker på **Endre**-knappen, blir de sendt videre til betalingssiden hvor de kan velge hvilket abonnement de vil bytte til.

![Betalingsside som viser abonnementsvalg for nedgradering](/img/admin/memberships-list.png)

I dette eksempelet nedgraderer vi abonnementet fra **Premium** til **Free**.

For å fortsette trenger brukeren bare å klikke på **Fullfør betaling**-knappen. De blir deretter sendt tilbake til kontosiden, hvor det vises en melding om den ventende endringen av medlemskapet. Endringene trer i kraft ved kundens **neste faktureringssyklus**.

![Kontoside som viser melding om ventende medlemskapsendring](/img/admin/memberships-list.png)

### Hva skjer når en bruker nedgraderer abonnementet sitt

Det er viktig å merke seg at nedgradering av abonnementet ikke endrer den eksisterende konfigurasjonen på brukerens underside.

Det endrer ikke automatisk nettstedsmalen, siden bytte av mal vil slette og tilbakestille undersiden fullstendig. Dette er for å unngå unødvendig tap av data. Diskplass, temaer, plugins osv. forblir intakt, bortsett fra innleggene.

Vi forstår at din største bekymring kan være grensene og kvotene du har satt for hvert abonnement, men vi må ta hensyn til skaden det ville påført brukerens underside hvis vi slettet eller endret noen av konfigurasjonene.

For innlegg som overskrider grensen satt i abonnementet, har du 3 forskjellige valg: **Behold innleggene som de er**, **Flytt innleggene til papirkurven**, eller **Flytt innleggene til kladd**. Du kan konfigurere dette under Ultimate Multisite-innstillingene.

![Valg for overskredne innleggsgrenser i Ultimate Multisite-innstillinger](/img/config/settings-sites.png)

### Hva skjer med betalingen

I versjon 2.0 kreves det ikke lenger noen justeringer av betalingen når det gjelder forholdsmessig avregning.

Dette er fordi systemet venter til det eksisterende medlemskapet har **fullført faktureringssyklusen før** det nye abonnementet/medlemskapet trer i kraft. Det nye fakturabeløpet for det nye medlemskapet blir automatisk brukt og belastet ved neste faktureringssyklus.
