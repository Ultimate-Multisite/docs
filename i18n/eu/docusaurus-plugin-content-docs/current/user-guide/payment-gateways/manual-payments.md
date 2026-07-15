---
title: Eskuzko ordainketak konfiguratzea
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Eskuzko ordainketak konfiguratzea (v2)

_**OHAR GARRANTZITSUA: Artikulu honek Ultimate Multisite 2.x bertsioari egiten dio erreferentzia.**_

Eskuzko ordainketak zure erabiltzaileei beste ordainketa-metodo batzuk eskaintzeko modu bat dira, **Stripe** edo **PayPal** erabilgarri ez daudenean. Transferentzia telegrafikoa edo banku-transferentzia izan daiteke, edo zure erabiltzaileek tokian tokiko eskuragarri duten beste edozein ordainketa-metodo.

## Nola gaitu eskuzko ordainketak {#how-to-enable-manual-payments}

Eskuzko ordainketa konfiguratzea oso erraza da. Ordainketa-pasabideetan gaitu besterik ez duzu egin behar, eta erabiltzaileak ordainketa nola bidali behar duen azaltzen duten jarraibide zehatzak sartu.

Lehenik, joan hona: **Ultimate Multisite > Ezarpenak > Ordainketak**. **Ordainketa-pasabideak** azpian, aktibatu **Eskuzkoa**. Ikusiko duzu **Ordainketa-jarraibideak** koadro bat agertuko zaizula.

Gehitu koadro horretan zure bezeroak ordainketa egiteko behar duen informazioa. Adibidez, zure banku-kontuaren xehetasunak eta zure posta elektronikoa izan daitezke, bezeroak ordainketaren berrespena bidal diezazun.

![Eskuzko ordainketa-pasabidearen etengailua Ordainketa-jarraibideak testu-eremuarekin](/img/config/manual-gateway-expanded.png)

Hona hemen eskuzko pasabidearen ezarpenen interfazea:

![Eskuzko pasabidearen ezarpenak](/img/config/manual-gateway-settings.png)

Konfiguratu ondoren, egin klik **Gorde ezarpenak** botoian, eta eginda egongo da. Erabiltzaileek zure sarean erregistratzen direnean, mezu bat ikusiko dute, erosketa osatzeko zure jarraibideak jasoko dituztela esanez.

![Erregistroaren berrespen-mezua, erabiltzaileari ordainketa-jarraibideak jasoko dituela esanez](/img/frontend/registration-manual-notice.png)

Eta zure **Eskerrik asko** orrian ere mezu bat jasoko dute, zure ordainketa-jarraibideekin.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Eskuzko ordainketak berrestea {#confirming-manual-payments}

Eskuzko ordainketa bat berresteko, joan ezkerreko barrako **Ordainketak** menura. Han zure sareko ordainketa guztiak eta haien xehetasunak ikus ditzakezu, haien **egoera** barne. Eskuzko ordainketa batek beti izango du **Zain** egoera, zuk eskuz aldatu arte.

![Ordainketen zerrenda, zain dagoen eskuzko ordainketa erakutsiz](/img/admin/payments-list.png)

Sartu ordainketa-orrian **erreferentzia-kodea** sakatuta. Orrialde honetan zain dagoen ordainketaren xehetasun guztiak dituzu, hala nola erreferentzia-IDa, produktuak, denbora-zigiluak eta gehiago.

![Ordainketaren xehetasunen orria, erreferentzia-kodea, produktuak eta guztizkoak erakutsiz](/img/admin/payment-edit.png)

Eskuineko zutabean, ordainketaren egoera alda dezakezu. **Osatuta** egoerara aldatuz eta **Aktibatu kidetza** aukera aktibatuz, zure bezeroaren gunea gaituko da eta haren kidetza aktibo egongo da.

![Ordainketa editatzeko orria, Egoera Osatuta gisa ezarrita eta Aktibatu kidetza etengailuarekin](/img/admin/payment-activate-membership.png)
