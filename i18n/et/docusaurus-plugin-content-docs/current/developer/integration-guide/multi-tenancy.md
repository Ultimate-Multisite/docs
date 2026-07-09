---
title: Mitmerentnikluse integratsioon
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Multi-Tenancy integratsioon

Ultimate Multisite: Multi-Tenancy 1.2.0 muudab mitut integratsiooni puutepunkti suveräänsete tenantide, migratsiooni kontrollimise ja tenanti elutsükli automatiseerimise jaoks.

## Tenanti algkäivituse voog

Integratsioonid, mis loovad või muudavad tenante, peaksid järgima seda järjekorda:

1. Lahenda tenanti registrikirje ja isolatsioonimudel.
2. Loo või kontrolli tenanti andmebaasi kirjutajat.
3. Algkäivita tenanti skeem.
4. Provisioni tenanti kasutajad.
5. Registreeri tenanti marsruutimine ja failisüsteemi teed.
6. Käivita migratsiooni kontroll enne tenanti avaldamist.

Ära eelda, et suveräänne tenant saab võrgu andmebaasiühendust taaskasutada. Kasuta addoni pakutavaid tenanti registri ja kirjutaja abstraktsioone.

## SSO ja REST konksud

Olekuta tenanti automaatne sisselogimine kasutab lühiajalisi tokeneid koos eesmärgi väitega, JTI taasesituskaitse, aegumistähtaja ülempiiri ja päritolu kinnitamisega. Integratsioonid, mis lisavad sisselogimisnuppe või kaughalduse linke, peaksid genereerima tenanti külastused toetatud SSO voo kaudu, mitte koostama tenanti sisselogimise URL-e otse.

Võrgupoole API auditisündmused ja igapäevased kokkuvõtted on saadaval suveräänsete tenantide lüüside jaoks. Kasuta neid logisid, kui silud väliseid süsteeme, mis kutsuvad tenanti elutsükli endpoint’e.

## Suveräänse kliendi toimingu URL-id

Ultimate Multisite v2.13.0 suunab suveräänse tenanti klienditoimingud tagasi põhisaidile Account, checkouti, arvelduse, arve, saidi, malli vahetamise ja domeeni kaardistamise voogude jaoks. Integratsioonid, mis renderdavad tenantipoolseid halduslinke, peaksid suunama need toimingud põhisaidi kliendipaneelile ja lisama valideeritud tagasipöördumise sihtkoha, kui kasutajal peaks olema võimalik pärast toimingu lõpetamist tagasi tenanti navigeerida.

Kasuta domeenideüleste halduslinkide jaoks põhilist SSO ümbrist:

```php
$url = wu_with_sso($main_site_customer_url);
```

Genereeritud URL jääb filtreeritavaks läbi `wu_sso_url`, mis saab SSO URL-i, praeguse kasutaja, sihtsaidi ID ja ümbersuunamise konteksti. Addonid saavad seda filtrit kasutada teenusepakkujapõhise konteksti lisamiseks või vahendaja URL-i asendamiseks, säilitades samal ajal Ultimate Multisite’i tokeni valideerimise.

Ära dubleeri liikmesuse, arve, arveldusaadressi, malli ega domeenihalduse olekut suveräänse tenanti sees. Käsitle tenanti Dashboardi käivitajana ja põhisaidi kliendipaneeli hallatavate toimingute lõpliku süsteemina.

## Migratsiooni kontroll

Pärast seda, kui migratsioon või elutsükli integratsioon muudab tenanti andmeid, käivita kontrollväravad:

- `wp tenant verify-no-legacy --site=<site-id>` kinnitab, et tenant ei sõltu enam pärand-võrgupoolsetest teedest.
- `wp tenant verify-sovereign-push --site=<site-id>` kinnitab, et suveräänsed tõuketööd saavad töödelda ja tühjeneda.

Integratsioonid peaksid käsitlema ebaõnnestunud kontrolli juurutuse blokeerijana ja vältima tenanti live’iks märkimist, kuni tõrge on lahendatud.

## Tenanti kustutamine

Kustutusvood peaksid kutsuma addoni mahavõtmise teed, et tenanti andmebaasi mandaatandmed saaksid puhastatud. Välised integratsioonid võivad pärast mahavõtmise õnnestumist eemaldada teenusepakkuja ressursid, kuid ei tohiks kustutada hosti andmebaase ega kaustu, kui kontroll või asünkroonsed tõuketööd veel töötavad.

## Aegunud andmebaasiruuter

Pärand `Database_Router` on asendatud aegumisstubiga. Uued integratsioonid peaksid lahendama tenantid praeguse saidiruuteri ja tenanti registri API-de kaudu, mitte sõltuma vanast ruuteriklassist.
