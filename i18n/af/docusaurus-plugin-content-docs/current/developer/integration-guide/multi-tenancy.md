---
title: Multi-huurderskap-integrasie
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Multi-Tenancy-integrasie

Ultimate Multisite: Multi-Tenancy 1.2.0 verander verskeie integrasie-raakpunte vir soewereine huurders, migrasieverifikasie en outomatisering van die huurderlewensiklus.

## Huurder-bootstrap-vloei {#tenant-bootstrap-flow}

Integrasies wat huurders skep of wysig, moet hierdie volgorde volg:

1. Los die huurderregisterrekord en isolasiemodel op.
2. Skep of verifieer die huurderdatabasis-skrywer.
3. Bootstrap die huurder-skema.
4. Voorsien huurdergebruikers.
5. Registreer huurderroetering en lêerstelselpaaie.
6. Voer migrasieverifikasie uit voordat die huurder blootgestel word.

Moenie aanneem dat ’n soewereine huurder die netwerkdatabasisverbinding kan hergebruik nie. Gebruik die huurderregister en skrywer-abstraksies wat deur die byvoeging verskaf word.

## SSO- en REST-hooks {#sso-and-rest-hooks}

Toestandlose huurder-outoaanmelding gebruik kortlewende tokens met ’n doel-eis, JTI-herhalingsbeskerming, ’n vervalkap en oorsprongvaspenning. Integrasies wat aanmeldknoppies of afstandbestuurskakels byvoeg, moet huurderbesoeke deur die ondersteunde SSO-vloei genereer in plaas daarvan om huurderaanmeld-URL’s direk saam te stel.

Netwerkkant-API-ouditgebeurtenisse en daaglikse opsommings is beskikbaar vir soewereine huurderpoorte. Gebruik daardie logs wanneer eksterne stelsels ontfout word wat huurderlewensiklus-eindpunte aanroep.

## Soewereine kliëntaksie-URL’s {#sovereign-customer-action-urls}

Ultimate Multisite v2.13.0 roeteer soewereine-huurder-kliëntaksies terug na die hoofwerf vir Account-, checkout-, fakturering-, faktuur-, werf-, template-wisseling- en domeinkartering-vloeie. Integrasies wat bestuurskakels aan die huurderkant weergee, moet daardie aksies na die hoofwerf-kliëntepaneel wys en ’n gevalideerde terugkeerteiken insluit wanneer die gebruiker na die voltooiing van die aksie na die huurder moet kan terugnavigeer.

Gebruik die kern-SSO-omhulsel vir kruisdomein-bestuurskakels:

```php
$url = wu_with_sso($main_site_customer_url);
```

Die gegenereerde URL bly filtreerbaar deur `wu_sso_url`, wat die SSO-URL, huidige gebruiker, teikenwerf-ID en herleidingskonteks ontvang. Byvoegings kan daardie filter gebruik om verskafferspesifieke konteks by te voeg of om die makelaar-URL te vervang terwyl Ultimate Multisite se tokenvalidasie behou word.

Moenie lidmaatskap-, faktuur-, faktuuradres-, template- of domeinbestuurstoestand binne die soewereine huurder dupliseer nie. Behandel die huurder-Dashboard as die lanseerder en die hoofwerf-kliëntepaneel as die stelsel van rekord vir bestuurde aksies.

## Migrasieverifikasie {#migration-verification}

Nadat ’n migrasie- of lewensiklusintegrasie huurderdata verander, voer die verifikasiehekke uit:

- `wp tenant verify-no-legacy --site=<site-id>` bevestig dat die huurder nie meer van verouderde netwerkkant-paaie afhanklik is nie.
- `wp tenant verify-sovereign-push --site=<site-id>` bevestig dat soewereine stoot-take kan verwerk en dreineer.

Integrasies moet mislukte verifikasie as ’n ontplooiingsblokkeerder behandel en vermy om ’n huurder as live te merk totdat die mislukking opgelos is.

## Huurderuitvee {#tenant-deletion}

Uitveevloeie moet die byvoeging se afbreekpad aanroep sodat huurderdatabasisgeloofsbriewe skoongemaak word. Eksterne integrasies mag verskafferhulpbronne verwyder nadat afbreek suksesvol is, maar moet nie gasheerdatabasisse of vouers uitvee terwyl verifikasie of asinchrone stoot-take steeds loop nie.

## Afgekeurde databasisroeteerder {#deprecated-database-router}

Die verouderde `Database_Router` is deur ’n afkeuring-stub vervang. Nuwe integrasies moet huurders deur die huidige werfroeteerder en huurderregister-API’s oplos eerder as om van die ou roeteerderklas afhanklik te wees.
