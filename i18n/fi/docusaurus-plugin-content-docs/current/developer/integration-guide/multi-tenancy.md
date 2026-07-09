---
title: Monivuokraajuuden integraatio
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Multi-Tenancy-integraatio {#multi-tenancy-integration}

Ultimate Multisite: Multi-Tenancy 1.2.0 muuttaa useita integraation kosketuspisteitä suvereeneille vuokralaisille, migraation varmistukselle ja vuokralaisen elinkaaren automaatiolle.

## Vuokralaisen bootstrap-kulku {#tenant-bootstrap-flow}

Integraatioiden, jotka luovat tai muokkaavat vuokralaisia, tulee noudattaa tätä järjestystä:

1. Selvitä vuokralaisrekisterin tietue ja eristysmalli.
2. Luo tai varmista vuokralaisen tietokannan kirjoittaja.
3. Käynnistä vuokralaisen skeema.
4. Provisionoi vuokralaisen käyttäjät.
5. Rekisteröi vuokralaisen reititys ja tiedostojärjestelmän polut.
6. Suorita migraation varmistus ennen vuokralaisen julkaisemista.

Älä oleta, että suvereeni vuokralainen voi käyttää uudelleen verkon tietokantayhteyttä. Käytä addonin tarjoamia vuokralaisrekisterin ja kirjoittajan abstraktioita.

## SSO- ja REST-hookit {#sso-and-rest-hooks}

Tilaton vuokralaisen automaattinen kirjautuminen käyttää lyhytikäisiä tokeneita, joissa on tarkoitusväite, JTI-uudelleentoiston esto, vanhenemisen yläraja ja alkuperän kiinnitys. Integraatioiden, jotka lisäävät kirjautumispainikkeita tai etähallintalinkkejä, tulee luoda vuokralaiskäynnit tuetun SSO-kulun kautta sen sijaan, että ne rakentaisivat vuokralaisen kirjautumis-URL-osoitteita suoraan.

Verkkopuolen API-auditointitapahtumat ja päivittäiset yhteenvedot ovat saatavilla suvereenien vuokralaisten yhdyskäytäville. Käytä näitä lokeja, kun virheenkorjaat ulkoisia järjestelmiä, jotka kutsuvat vuokralaisen elinkaaren endpointteja.

## Suvereenien asiakkaiden toiminto-URL-osoitteet {#sovereign-customer-action-urls}

Ultimate Multisite v2.13.0 reitittää suvereenin vuokralaisen asiakastoiminnot takaisin pääsivustolle Account-, checkout-, laskutus-, lasku-, sivusto-, mallipohjan vaihto- ja domain-mapping-kulkuja varten. Integraatioiden, jotka renderöivät vuokralaispuolen hallintalinkkejä, tulee osoittaa nämä toiminnot pääsivuston asiakaspaneeliin ja sisällyttää validoitu paluukohde, kun käyttäjän tulee voida siirtyä takaisin vuokralaiselle toiminnon suorittamisen jälkeen.

Käytä ydintason SSO-käärettä verkkotunnusten välisille hallintalinkeille:

```php
$url = wu_with_sso($main_site_customer_url);
```

Luotu URL pysyy suodatettavana `wu_sso_url`-suodattimen kautta, joka vastaanottaa SSO-URL-osoitteen, nykyisen käyttäjän, kohdesivuston ID:n ja uudelleenohjauskontekstin. Addonit voivat käyttää tätä suodatinta palveluntarjoajakohtaisen kontekstin lisäämiseen tai välittäjä-URL-osoitteen korvaamiseen säilyttäen samalla Ultimate Multisite:n tokenien validoinnin.

Älä monista jäsenyyden, laskun, laskutusosoitteen, mallipohjan tai verkkotunnuksen hallinnan tilaa suvereenin vuokralaisen sisälle. Käsittele vuokralaisen Dashboardia käynnistimenä ja pääsivuston asiakaspaneelia hallittujen toimintojen järjestelmänä, jossa ensisijaiset tiedot sijaitsevat.

## Migraation varmistus {#migration-verification}

Kun migraatio tai elinkaaren integraatio muuttaa vuokralaisen dataa, suorita varmistusportit:

- `wp tenant verify-no-legacy --site=<site-id>` vahvistaa, ettei vuokralainen enää riipu vanhoista verkkopuolen poluista.
- `wp tenant verify-sovereign-push --site=<site-id>` vahvistaa, että suvereenit push-työt voivat käsitellä ja tyhjentyä.

Integraatioiden tulee käsitellä epäonnistunutta varmistusta käyttöönoton estäjänä ja välttää vuokralaisen merkitsemistä live-tilaan, kunnes epäonnistuminen on ratkaistu.

## Vuokralaisen poistaminen {#tenant-deletion}

Poistokulkujen tulee kutsua addonin teardown-polkua, jotta vuokralaisen tietokannan tunnistetiedot siivotaan. Ulkoiset integraatiot voivat poistaa palveluntarjoajan resurssit teardownin onnistuttua, mutta niiden ei tule poistaa host-tietokantoja tai kansioita, kun varmistus tai asynkroniset push-työt ovat vielä käynnissä.

## Vanhentunut tietokantareititin {#deprecated-database-router}

Vanha `Database_Router` on korvattu vanhentumisstubilla. Uusien integraatioiden tulee selvittää vuokralaiset nykyisen sivustoreitittimen ja vuokralaisrekisterin API:en kautta sen sijaan, että ne riippuisivat vanhasta reititinluokasta.
