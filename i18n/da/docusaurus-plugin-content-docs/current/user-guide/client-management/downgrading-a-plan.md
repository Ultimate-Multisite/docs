---
title: Nedgradering af en plan
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# Nedgradering af en plan (v2) {#downgrading-a-plan-v2}

_**VIGTIG BEMÆRK: Denne artikel henviser til Ultimate Multisite version 2.x.**_

Nedgradering af en plan eller abonnement er en almindelig handling, som dine kunder måske foretager, hvis de har et begrænset budget eller har besluttet, at de ikke har brug for mange ressourcer til at drive deres subsite.

## Sådan nedgraderer du en plan {#how-to-downgrade-a-plan}

Dine kunder kan nedgradere deres plan når som helst ved at logge ind på deres subsite admin dashboard og klikke på **Change** under deres kontopage.

![Kunde konto side med Dit Medlemskort og Change knap](/img/account-page/membership-change-button.png)

Når du klikker på knappen **Change**, bliver brugeren/kunden omdirigeret til betalingssiden, hvor de kan vælge den plan, de ønsker at ændre deres abonnement til.

![Side med nedgraderingsmuligheder for kunden](/img/account-page/downgrade-picker.png)

I dette eksempel nedgraderer vi planen fra **Premium** til **Free**.

For at gå videre skal brugeren blot klikke på knappen **Complete Checkout**. Derefter bliver de ført tilbage til kontopagen, hvor der vises en besked om den ventende ændring for medlemskabet. Ændringerne træder i kraft ved kundens **næste faktureringscyklus**.

![Kontopage med banner for ventende medlemskabsændring](/img/account-page/pending-change.png)

### Hvad sker der, når en bruger nedgraderer sin plan {#what-happens-when-a-user-downgrades-their-plan}

Det er vigtigt at bemærke, at nedgradering af planen ikke ændrer den eksisterende konfiguration i brugerens subsite.

Den ændrer ikke automatisk site template, da ændring af site template fuldstændigt sletter og nulstiller subsite. Dette gøres for at undgå unødig datatab. Så diskplads, themes, plugins osv. forbliver intakte bortset fra indlæggelser (posts).

Vi forstår, at din hovedbekymring sandsynligvis er de grænser og kvoter, du sætter under hvert abonnement, men vi må også tage højde for skaden det kan på brugerens undersite, hvis vi sletter eller ændrer nogen af dens konfigurationer.

For indlæg, der overstiger grænsen sat i planen, har du 3 forskellige muligheder: **Behold indlæggene som de er** *,* **Flyt indlæggene til skraldes**, * eller **Flyt indlæggene til udkast**. Du kan konfigurere dette under Ultimate Multisite indstillinger.

![Network Admin Settings Sites page showing post-limit-exceeded behaviour options](/img/account-page/settings-sites-post-limit.png)

### Hvad sker der med betalingen {#what-happens-to-the-payment}

I version 2.0 kræves der ikke længere nogen justeringer i betalingen med hensyn til proportionering (proration).

Dette skyldes, at systemet vil vente på, at det eksisterende medlemskab **afslutter sin faktureringscyklus, før** den nye plan/medlemskab træder i kraft. Det nye fakturabeløb for det nye medlemskab vil automatisk blive anvendt og opkrævet ved næste faktureringscyklus.
