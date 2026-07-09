---
title: Automatisk søk og erstatt i nettstedsmaler
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# Automatisk søk og erstatt i nettstedsmaler (v2)

_**Denne veiledningen krever WP UItimo versjon 2.x.**_

En av de kraftigste funksjonene i Ultimate Multisite er muligheten til å legge til vilkårlige tekst-, farge- og valgfelter i registreringsskjemaet. Når vi har fanget opp disse dataene, kan vi bruke dem til å forhåndsutfylle innholdet i visse deler av den valgte nettstedsmalen. Når det nye nettstedet publiseres, vil Ultimate Multisite deretter erstatte plassholderne med den faktiske informasjonen som ble oppgitt under registreringen.

Du kan for eksempel lage malnettstedene dine med plassholdere. Plassholdere bør legges til omgitt av doble krøllparenteser - {{placeholder_name}}.

Deretter kan du ganske enkelt legge til et samsvarende registreringsfelt for å fange opp disse dataene

Kunden din vil deretter kunne fylle ut det feltet under registreringen.

Ultimate Multisite vil deretter automatisk erstatte plassholderne med dataene som kunden har oppgitt.

## **Løse problemet med «mal full av plassholdere»**

Alt dette er flott, men vi støter på et stygt problem: Nå er nettstedsmalene våre – som kan besøkes av kundene våre – fulle av stygge plassholdere som ikke sier så mye.

For å løse dette tilbyr vi muligheten til å angi falske verdier for plassholderne, og vi bruker disse verdiene til å søke etter og erstatte innholdet deres på malnettstedene mens kundene dine besøker dem.

Du kan få tilgang til redigeringsverktøyet for malplassholdere ved å gå til **Ultimate Multisite > Innstillinger > Nettsteder**, bla til området Alternativer for nettstedsmal, og deretter klikke på lenken **Rediger plassholdere**.

![Området Alternativer for nettstedsmal på siden Nettsteder-innstillinger](/img/config/settings-sites-templates-section.png)

Det tar deg til innholdsredigeringsverktøyet for plassholdere, hvor du kan legge til plassholdere og deres respektive innhold.

![Inngangspunkt for redigeringsverktøy for malplassholdere](/img/config/settings-sites-templates-section.png)
