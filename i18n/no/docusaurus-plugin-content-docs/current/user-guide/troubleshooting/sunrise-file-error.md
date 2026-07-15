---
title: Sunrise-filfeil
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Feil ved installasjon av Sunrise-filen

Filen sunrise.php er en spesiell fil som WordPress ser etter når det starter opp. For at WordPress skal kunne oppdage sunrise.php-filen, må den ligge i **wp-content-mappen**.

Når du aktiverer Ultimate Multisite og går gjennom installasjonsveiviseren som vist på skjermbildet, prøver Ultimate Multisite å kopiere vår sunrise.php-fil til wp-content-mappen.

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

Som regel klarer vi å kopiere filen uten problemer, og alt fungerer som det skal. Men hvis noe ikke er riktig satt opp (for eksempel mapperettigheter), kan du havne i en situasjon der Ultimate Multisite ikke får kopiert filen.

Hvis du leser feilmeldingen Ultimo gir deg, ser du at det er akkurat det som har skjedd her: **Sunrise copy failed**.

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

For å løse dette kan du enkelt kopiere sunrise.php-filen fra wp-ultimo-plugin-mappen og lime den inn i wp-content-mappen din. Når du har gjort det, laster du inn veivisersiden på nytt, og sjekkene skal gå gjennom.

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> Uansett kan dette være et tegn på at du bør sjekke mapperettighetene dine generelt, for å unngå problemer i fremtiden (ikke bare med Ultimate Multisite, men også med andre plugins og temaer).

**Health Check-verktøyet** som følger med WordPress (du finner det via hovedsiden under **adminpanelet > Verktøy > Health Check**) kan fortelle deg om du har mapperettigheter som kan skape problemer med WordPress.

<!-- Screenshot unavailable: WordPress Health Check tool showing folder permissions status -->
