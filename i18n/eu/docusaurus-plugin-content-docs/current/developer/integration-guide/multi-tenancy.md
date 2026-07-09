---
title: Maizter anitzeko integrazioa
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Multi-Tenancy integrazioa

Ultimate Multisite: Multi-Tenancy 1.2.0 bertsioak hainbat integrazio-puntu aldatzen ditu maizter subiranoetarako, migrazio-egiaztapenerako eta maizterren bizi-zikloaren automatizaziorako.

## Maizterra abiarazteko fluxua

Maizterrak sortzen edo aldatzen dituzten integrazioek ordena hau jarraitu beharko lukete:

1. Ebatzi maizterraren erregistro-erregistroa eta isolamendu-eredua.
2. Sortu edo egiaztatu maizterraren datu-baseko idazlea.
3. Abiarazi maizterraren eskema.
4. Hornitu maizterraren erabiltzaileak.
5. Erregistratu maizterraren bideratzea eta fitxategi-sistemako bideak.
6. Exekutatu migrazio-egiaztapena maizterra agerian jarri aurretik.

Ez hartu ontzat maizter subirano batek sareko datu-basearen konexioa berrerabil dezakeela. Erabili gehigarriak emandako maizter-erregistroa eta idazle-abstrakzioak.

## SSO eta REST hook-ak

Egoerarik gabeko maizter-autologin-ak iraupen laburreko token-ak erabiltzen ditu, purpose claim batekin, JTI replay babesarekin, iraungitze-muga batekin eta jatorri-ainguraketarekin. Saioa hasteko botoiak edo urruneko kudeaketa-estekak gehitzen dituzten integrazioek maizter-bisitak sortu beharko lituzkete onartutako SSO fluxuaren bidez, maizterraren saioa hasteko URL-ak zuzenean eraiki beharrean.

Sarearen aldeko API ikuskaritza-gertaerak eta eguneroko laburpenak erabilgarri daude maizter subiranoen atebideetarako. Erabili erregistro horiek maizterren bizi-zikloaren endpoint-etara deitzen duten kanpoko sistemak araztean.

## Bezero subiranoen ekintza-URLak

Ultimate Multisite v2.13.0 bertsioak maizter subiranoen bezero-ekintzak gune nagusira bideratzen ditu Account, checkout, fakturazio, faktura, gune, txantiloi-aldaketa eta domeinu-mapaketa fluxuetarako. Maizterraren aldeko kudeaketa-estekak errendatzen dituzten integrazioek ekintza horiek gune nagusiko bezero-panelera zuzendu beharko lituzkete, eta baliozkotutako itzulera-helburu bat sartu, erabiltzaileak ekintza amaitu ondoren maizterrera itzultzeko aukera izan behar duenean.

Erabili core SSO bilgarria domeinu arteko kudeaketa-esteketarako:

```php
$url = wu_with_sso($main_site_customer_url);
```

Sortutako URL-a iragazgarria izaten jarraitzen du `wu_sso_url` bidez; hark SSO URL-a, uneko erabiltzailea, helburuko gune IDa eta birbideratze-testuingurua jasotzen ditu. Gehigarriek iragazki hori erabil dezakete hornitzailearen testuinguru espezifikoa eransteko edo broker URL-a ordezteko, Ultimate Multisite-ren token baliozkotzea mantenduz.

Ez bikoiztu kidegoaren, fakturaren, fakturazio-helbidearen, txantiloiaren edo domeinu-kudeaketaren egoera maizter subiranoaren barruan. Hartu maizterraren Dashboard-a abiarazle gisa, eta gune nagusiko bezero-panela kudeatutako ekintzen erregistro-sistema gisa.

## Migrazio-egiaztapena

Migrazio batek edo bizi-zikloaren integrazio batek maizterraren datuak aldatu ondoren, exekutatu egiaztapen-ateak:

- `wp tenant verify-no-legacy --site=<site-id>` komandoak baieztatzen du maizterrak jada ez duela sarearen aldeko bide zaharren mendekotasunik.
- `wp tenant verify-sovereign-push --site=<site-id>` komandoak baieztatzen du push subiranoaren lanek prozesatu eta hustu dezaketela.

Integrazioek huts egindako egiaztapena hedapen-blokeatzaile gisa hartu beharko lukete, eta saihestu maizter bat live gisa markatzea hutsegitea konpondu arte.

## Maizterra ezabatzea

Ezabatze-fluxuek gehigarriaren teardown bidera deitu beharko lukete, maizterraren datu-baseko kredentzialak garbitu daitezen. Kanpoko integrazioek hornitzailearen baliabideak kendu ditzakete teardown-ak arrakasta izan ondoren, baina ez lituzkete ostalariaren datu-baseak edo karpetak ezabatu behar egiaztapena edo async push lanak oraindik martxan dauden bitartean.

## Baztertutako datu-basearen bideratzailea

`Database_Router` zaharra baztertze-stub batek ordezkatu du. Integrazio berriek maizterrak egungo gune-bideratzailearen eta maizter-erregistroaren APIen bidez ebatzi beharko lituzkete, bideratzaile-klase zaharraren mende egon beharrean.
