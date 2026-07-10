---
title: Automatisk søgning og erstatning i sidtempler
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# Automatisk søgning og erstatning i sidtempler (v2) {#auto-search-and-replace-in-site-templates-v2}

_**Denne tutorial kræver WP UItimo version 2.x.**_

En af de mest kraftfulde funktioner ved Ultimate Multisite er evnen til at tilføje vilkårlig tekst, farve og valgfelter til registreringsformularen. Når vi har indsamlet disse data, kan vi bruge dem til forudfyldning af indhold i specifikke dele af det valgte sidtemplet. Derefter erstatter Ultimate Multisite pladsholderne med den faktiske information, der er indtastet under registreringen, når den nye side bliver offentliggjort.

For eksempel kan du lave dine templatessider med pladsholdere. Pladsholdere skal indsættes omgivet af dobbelte klammer - {{placeholder_name}}.

Derefter kan du blot tilføje et matchende registreringsfelt for at indsamle de data.

Din kunde vil derefter kunne udfylde dette felt under registreringen.

Ultimate Multisite vil derefter automatisk erstatte pladsholderne med de data, kunden har angivet.

## **Løsning på problemet med "templet fyldt med pladsholdere"** {#solving-the-template-full-of-placeholders-problem}

Alt det her er fantastisk, men vi støder på et grimt problem: nu er vores sidtempler - som vores kunder kan besøge - fyldt med grimme pladsholdere, der ikke fortæller meget.

For at løse dette tilbyder vi muligheden for at sætte fiktive værdier til pladsholderne, og vi bruger disse værdier til at søge og erstatte deres indhold på de templatessider, mens dine kunder besøger dem.

Du kan få adgang til redigeringsfeltet for sidtemplet ved at gå til **Ultimate Multisite > Settings > Sites**, scrolle ned til området Site Template Options, og derefter klikke på linket **Edit Placeholders**.

![Site Template Options area in the Sites settings page](/img/config/settings-sites-templates-section.png)

Dette vil føre dig til redigeringsfeltet for pladsholdernes indhold, hvor du kan tilføje pladsholdere og deres respektive indhold.

![Billedstedsplads redigeringspunkt](/img/config/settings-sites-templates-section.png)
