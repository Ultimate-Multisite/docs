---
title: Eksport og import
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Eksport og import

Ultimate Multisite 2.9.0 legger til et verktøy for **Eksport og import** for enkeltnettsteder under **Verktøy > Eksport og import**. Bruk dette når du må pakke ett WordPress-nettsted som en ZIP-fil, gjenopprette denne ZIP-en, eller flytte et nettsted mellom kompatible Ultimate Multisite- og enkeltstående WordPress-installasjoner.

## Nødvendige tillatelser

Du må logge inn som administrator som har tilgang til WordPress-menyen **Verktøy** på nettstedet som skal eksporteres eller importeres. På et multisite-nettverk, bruk en nettverksadministrator-konto når du eksporterer eller importerer undernettsteder fra nettverksnivåverktøy i Ultimate Multisite.

ZIP-nedlastinger fra eksporten sendes via et autentisert nedlastingsendepunkt, så hold admin-sesjonen aktiv til nedlastingen er ferdig, og del ikke genererte nedlastings-URL-er offentlig.

## Eksportering av et nettsted til en ZIP

1. I WordPress-administrasjonen for nettstedet du vil kopiere, gå til **Verktøy > Eksport og import**.
2. Åpne eksportområdet og velg nettstedet du vil pakke.
3. Velg valgfritt innhold du vil inkludere, for eksempel opplastinger, plugins og temaer, når slike alternativer er tilgjengelige.
4. Start eksporten og vent til prosessen er ferdig. Store nettsteder kan trenge å fullføres i bakgrunnen før ZIP-filen er klar.
5. Last ned den ferdige ZIP-filen fra eksportlisten.

Oppbevar ZIP-filen på et sikkert sted. Den kan inneholde nettstedinnhold, innstillinger, mediefiler og valgte kode-ressurser.

## Hva eksporten inkluderer

En eksport-ZIP kan inkludere:

- Databaseinnhold og konfigurasjon fra det valgte nettstedet.
- Opplastede mediefiler når opplastinger er inkludert.
- Plugins og temaer når disse alternativene er valgt.
- Importmetadata som brukes av Export & Import-verktøyet for å gjenoppbygge nettstedet på målinstallasjonen.

Den nøyaktige ZIP-størrelsen avhenger av mengden medier, de valgte pluginene og temaene, og størrelsen på nettstedets databasetabeller.

## Importering av et nettsted fra en ZIP

1. Gå til **Verktøy > Eksport og import** på det mål-WordPress-nettstedet.
2. Åpne importområdet og last opp ZIP-filen som ble opprettet av Export & Import-verktøyet.
3. Angi en erstatnings-URL hvis nettstedet skal bruke en ny adresse, eller la feltet stå tomt for å beholde den opprinnelige URL-en.
4. Velg om du vil slette den opplastede ZIP-filen etter at importen er fullført.
5. Klikk på **Start import**.
6. Overvåk den pågående importen til den er ferdig. Bruk **Avbryt import** kun hvis du må stoppe prosessen før den er fullført.
7. Gjennomgå det importerte nettstedet før du tillater normal trafikk eller kundetilgang.

På en enkeltstående WordPress-installasjon erstatter import av en ZIP det nåværende nettstedet med det importerte nettstedet. Lag en fullstendig sikkerhetskopi av målnettstedet før du begynner, og unngå å starte flere importinger for samme nettsted samtidig.

## Begrensninger og kompatibilitetsmerknader

- Svært store opplastningsmapper eller medielbiblioteker kan produsere store ZIP-filer. Bekreft PHP-opplastningsgrenser, utførelsesgrenser, diskplass, minne og serverutløpstiltak før du eksporterer eller importerer store nettsteder.
- Svært store medielbiblioteker kan trenge å flyttes i et vedlikeholdsvindu med lav trafikk.
- Mål-WordPress-installasjonen bør kjøre kompatible versjoner av WordPress, PHP, Ultimate Multisite, plugin og tema.
- En import til et enkeltstående nettsted erstatter målnettstedet. Det er ikke et sammenslåingsverktøy.
- Flytt fra multisite til enkeltstående nettsted og fra enkeltstående nettsted til multisite støttes kun når målmiljøet kan kjøre pluginene, temaene, URL-ene og de nødvendige Ultimate Multisite-komponentene fra det eksporterte nettstedet.
- Hold ZIP-filen privat. Den kan inneholde databaseinnhold, opplastede filer og konfigurasjonsdetaljer fra det eksporterte nettstedet.

For eldre nettverksnivå eksponeringsarbeidsflyter, se [Site Export](/user-guide/administration/site-export).
