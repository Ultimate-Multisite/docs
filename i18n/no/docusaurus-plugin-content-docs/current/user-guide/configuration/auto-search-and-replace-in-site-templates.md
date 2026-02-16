---
title: Automatisk søk og erstatt i nettstedsmaler
sidebar_position: 8
_i18n_hash: ae72baba9155f43f2ca762880ece1e5c
---
# Automatisk søk og erstatt i nettstedsmaler (v2)

_**Denne veiledningen krever WP Ultimo versjon 2.x.**_

En av de kraftigste funksjonene i Ultimate Multisite er muligheten til å legge til egendefinerte tekst-, farge- og nedtrekksfelt i registreringsskjemaet. Når vi har fanget opp disse dataene, kan vi bruke dem til å forhåndsutfylle innhold i bestemte deler av den valgte nettstedsmalen. Når det nye nettstedet publiseres, vil Ultimate Multisite erstatte plassholderne med den faktiske informasjonen som ble oppgitt under registreringen.

Du kan for eksempel lage malnettstedene dine med plassholdere. Plassholdere bør legges til omgitt av doble krøllparenteser - {{placeholder_name}}.

Deretter kan du enkelt legge til et tilsvarende registreringsfelt for å fange opp disse dataene.

Kunden din vil da kunne fylle ut dette feltet under registreringen.

Ultimate Multisite vil så automatisk erstatte plassholderne med dataene kunden har oppgitt.

## **Løse problemet med «maler fulle av plassholdere»**

Alt dette er flott, men vi støter på et stygt problem: nå er malnettstedene våre – som kundene våre kan besøke – fulle av stygge plassholdere som ikke sier så mye.

For å løse dette tilbyr vi muligheten til å angi eksempelverdier for plassholderne, og vi bruker disse verdiene til å søke og erstatte innholdet på malnettstedene mens kundene dine besøker dem.

Du får tilgang til redigeringsverktøyet for malplassholdere ved å gå til **Ultimate Multisite > Innstillinger > Nettsteder**, og deretter klikke på lenken Rediger plassholdere i sidepanelet.

![Lenken Rediger plassholdere i sidepanelet for nettstedsinnstillinger](/img/config/settings-sites.png)

Dette tar deg til innholdsredigering for plassholdere, hvor du kan legge til plassholdere og deres tilhørende innhold.

![Innholdsredigering for plassholdere med plassholdernavn og verdier](/img/config/settings-sites.png)
