---
title: Sette Sunrise-konstanten på Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Sette Sunrise-konstanten til true på Closte

Noen hostingleverandører låser wp-config.php av sikkerhetsgrunner. Dette betyr at Ultimate Multisite ikke kan redigere filen automatisk for å legge til de nødvendige konstantene som trengs for at domenemapping og andre funksjoner skal fungere. Closte er en slik hostingleverandør.

Closte tilbyr imidlertid en måte å legge til konstanter i wp-config.php på en sikker måte. Du trenger bare å følge trinnene nedenfor:

## I Closte-dashbordet

Først [logger du inn på Closte-kontoen din](https://app.closte.com/), klikker på Sites-menyen, og deretter klikker du på Dashboard-lenken for nettstedet du jobber med:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Du vil få opp en rekke nye menypunkter på venstre side av skjermen. Naviger til **Settings**-siden ved hjelp av denne menyen:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Deretter, på **Settings**-siden, finner du WP-Config-fanen, og så feltet "Additional wp-config.php content" på den fanen:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Når du installerer Ultimate Multisite, må du legge til sunrise-konstanten i dette feltet. Bare legg til en ny linje og lim inn linjen nedenfor. Deretter klikker du på **Save All**-knappen.

define('SUNRISE', true);

Det var det, nå er du klar. Gå tilbake til installasjonsveiviseren for Ultimate Multisite og oppdater siden for å fortsette prosessen.
