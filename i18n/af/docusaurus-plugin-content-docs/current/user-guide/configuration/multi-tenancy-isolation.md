---
title: Multi-Tenant Isolering
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Multi-Tenancy Isolering

Ultimate Multisite: Multi-Tenancy 1.2.0 ondersteun per-subsite database en filesie-isolering vir soevereine huurders. Dit hou huurderdata geskei terwyl dit netwerkvlak-provisioning, fakturering en administrasie behou.

## Isoleringstrategie

Gebruik soevereine isolering vir kliënte wat sterkere data-separasie, toegewyde filesiesieopslag of 'n aparte hoesgren vereis.

Elke soevereine huurder moet hê:

- 'n Toegewyde huurderdatabase of databasevoorvoegstrategie wat deur die hoes goedgekeur is.
- 'n Toegewyde huurderfilesiesiewortel (root).
- 'n Huurderregistrasie-inskrywing wat die site met sy database, wortelpad, hostname en isoleringsmodel kappel.
- 'n Migrasieverifikasie-result voor die huurder as lewend beskou word.

## Databasehoesbinding

Versie 1.2.0 verander die standaard hoesbinding gedrag vir soevereine installeerings op dieselfde masjien. Op dieselfde masjien waardes soos `localhost` word genormaliseer sodat Bedrock, FrankenPHP en containeriseerde WordPress-installeerings toestemming kan gee en verifieer teen die hoesstring wat MySQL werklik sien.

Wanneer jy 'n soevereine huurder konfiguure:

1. Stel die databasehoes in op die waarde wat deur die huurder-runtime vereis word.
2. Gebruik `localhost` vir plaaslike soket-installeerings wanneer die hoes plaaslike verbindinge verwag.
3. Gebruik `127.0.0.1` of 'n dienst-hostname net wanneer die databasisbediening privilese aan daardie hoes gee.
4. Voer migrasieverifikasie uit nadat jy die hoesbinding verander het.

As verifikasie mislukte toestemmings rapporteer, vergelyk die huurder-DB-gebruikerstoestemming met die konfiguureerde hoesbinding. 'n Gebruiker wat vir `user@localhost` toegestaan is, is anders as `user@127.0.0.1` of `user@%`.

## Filesiesiewortel

Die root van die huurder moet stabiel wees oor herlaaies en deployments heen. Vermy tydelike mount padpunte. Vir Bedrock-styl installeer, bevestig dat die huurder root na die WordPress webroot wys wat deur die huurder bootstrap verwag, nie net die projek root nie.

## Provisioneringsvolgorde

Vir nuwe soevereine huurders gebruik hierdie volgorde:

1. Skep die huurder registrasie-inskrywing (tenant registry entry).
2. Skep die huurder database en database gebruiker.
3. Bootstrap die huurder skema.
4. Provisioneer huurder gebruikers.
5. Konfigureer huurder lêerspunte (filesystem paths).
6. Voer migrasie-verifikasie uit.
7. Skakel na roete of DNS nadat verifikasie slaag.

Hierdie volgorde voorkom dat gedeeltelik geïsoleerde huurders verkeer ontvang voordat die database skrywer, gebruikers en lêerspunte gereed is.

## Soevereine kliëntbestuurstrome

Ultimate Multisite v2.13.0 hou kliëntbestuuraksies op die hoofsite wanneer soevereine modus ingeskakel is. 'n Huurder kan steeds as 'n geïsoleerde WordPress-install funksioneer, maar kliëntgerigte aksies wat van netwerkfakturaasie, lidmaatskap of gedeelde rekeningdata afhang, moet die kliënt terugstuur na die hoofsite in plaas daarvan om die aksie binne die huurder runtime te voltooi.

Die hoofsite-stroom geld vir:

- Afrekening en planveranderings.
- Rekeningsoorsig en kliëntprofielaksies.
- Faktureesadresopdaterings en betalingsbestuur-skerms.
- Fakture- en betalingsgeskiedenisweergawes.
- Sitebestuuraksies soos die byvoeging of afskeiding van 'n site.
- Template-skakeling (template switching).
- Dome-mappering en primêre-domeinveranderings.

Wanneer 'n kliënt een van hierdie aksies vanaf 'n soevereine huurder (tenant) begin, bou Ultimate Multisite die ooreenstemmende hoofsite URL en behou die bronhuurder as terugdoelwit wanneer dit veilig is om te doen. Dit laat kliënte die bestuurde aksie teen die netwerkreelde voltooi en dan terugkeer na die huurderkonteks sonder dat die rekening- of lidmaatskapstatus in die soevereine database dubbel gemaak word.

Vir operators is die praktiese reël: hou die afrekening-, rekening-, afrekenings-, sjabloon- en domeinnaambestuurbladsye beskikbaar op die hoofsite vir soevereine netwerke. Huurderdashboards kan na daardie bladsye skakel, maar die hoofsite bly die bron van waarheid vir die aksie.
