---
title: Migration fra V1
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Migration fra V1

## Ultimate Multisite er skiftet fra sin oprindelige 1.x udgivelsesfamilie til 2.x udgivelsesfamilien.

Ultimate Multisite version 2.0 og opefter er en komplet omskrivning af koden, hvilket betyder, at der er meget lidt fælles grund mellem den gamle version og den nye. Derfor skal dine data migreres til et format, som de nye versioner kan forstå, når du opgraderer fra 1.x til 2.x.

Heldigvis **Ultimate Multisite 2.0+ inkluderer en migrator** bygget ind i kernen, som er i stand til at genkende data fra den gamle version og konvertere dem til det nye format. Denne migration sker under **Setup Wizardet** i version 2.0+.

Denne guide dækker, hvordan migratoren fungerer, hvad du skal gøre i tilfælde af fejl, og hvordan du fejlfinder problemer, der måtte opstå under denne proces.

_**VIGTIGT: Før du starter opgraderingen fra version 1.x til version 2.0, sørg for at lave en backup af din sites database**_

## Første skridt

Det første skridt er at downloade plugin .zip-filen og installere version 2.0 på dit netværksadministrator dashboard.

Efter du har [installeret og aktiveret version 2.0](../getting-started/installing-ultimate-multisite.md), vil systemet automatisk opdage, at din Multisite kører på den gamle version, og du vil se denne besked øverst på plugin-siden.

_**BEMÆRK:** Hvis du har Ultimate Multisite 1.x installeret på din Multisite, får du mulighed for at erstatte plugin'en med den version, du lige har downloadet. Gå bare videre og klik på **Erstat nu med uploadet**._

<!-- Skærmbillede utilgængeligt: Plugin-side der viser muligheden for at erstatte v1 med uploader v2-version -->

Næste side fortæller dig, hvilke legacy add-ons du har installeret sammen med version 1.x. Den vil give dig instruktioner om, hvorvidt den version, du bruger, er kompatibel med version 2.0, eller om du skal installere en opgraderet version af add-on'et efter migreringen.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

Når du er klar til at gå videre, kan du klikke på knappen, hvor der står **Besøg installatøren for at færdiggøre opgraderingen**.

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

Det vil derefter føre dig til installationsvejledningen med nogle velkomstbeskeder. Du skal blot klikke på **Start** for at komme videre til næste side.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

Efter at have klikket på **Start**, bliver du omdirigeret til Pre-install Checks_._ Dette vil vise dig din systeminformation og WordPress-installation og fortælle dig, om den opfylder **Ultimate Multisite's krav**.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

Næste trin er at indtaste din Ultimate Multisite licensnøgle og aktivere plugin'et. Dette sikrer, at alle funktioner, herunder add-ons, vil være tilgængelige på din side.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

Når du har indtastet nøglen, klikker du på **Accepter & Aktiver**.

Efter licensaktivering kan du begynde den faktiske installation ved at klikke på **Installer** på næste side. Dette vil automatisk oprette de nødvendige filer og databasen, der kræves for, at version 2.0 kan fungere.

## Nu er det tid til migrationen

Migratoren har en indbygget sikkerhedsfunktion, hvor den tjekker hele dit multisite for at sikre, at alle dine Ultimate Multisite data kan migreres uden problemer. Klik på knappen **Run Check** for at starte processen.

Efter du har kørt tjekket, vil du have to to muligheder: resultatet kan enten være **med** en fejl eller **uden** en fejl.

### Med Fejl

Hvis du får en fejlmeddelelse, skal du kontakte vores supportteam, så de kan hjælpe dig med at rette fejlen. Husk at **vedhæfte fejlloggen**, når du opretter et ticket. Du kan downloade loggen eller klikke på linket, hvor der står "contact our support team". Det vil åbne hjælpewidget'en til højre på din side med felter forudfyldt for dig, som inkluderer fejlloggene under beskrivelsen.

_**Da systemet fandt en fejl, kan du ikke fortsætte med at migrere til version 2.0. Du kan i stedet rulle tilbage til version 1.x for at genoptage driften af dit netværk, indtil fejlen er rettet.**_

### Uden Fejl

Hvis systemet ikke finder nogen fejl, vil du se en succesmeddelelse og en **Migrate** knap nederst, som vil give dig mulighed for at fortsætte med migrationen. På denne side får du mindet om at lave en backup af din database, før du går videre – hvilket vi stærkt anbefaler. Tryk på **Migrate**, hvis du allerede har en backup.

Og det er alt, hvad det kræver!

Du kan enten fortsæ med at køre Wizard-opsætningen for at opdatere dit logo og andre ting på dit netværk, eller starte i at navigere i menupakken til din Ultimate Multisite version 2.0 og dens nye grænseflade. Gå bare i gang og ha lidt sjov!
