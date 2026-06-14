---
title: Kupasa Email uye Kuita Broadcasts
sidebar_position: 11
_i18n_hash: e9ddc461d32299505e4a7a5af491cff6
---
# Kuita Emails uye Kufamba (v2)

_**CHINDIRA CHINDIRA: Iriweiri iri rinorefererwa kune Ultimate Multisite version 2.x.**_

Ultimate Multisite inoratidza chine chine kuurudzwa nevanhu vako nekuti unenge uchida kuita email kune mutundu wese kana munhu anogona, uye kunge kuita zvishoko pamusoro pedashboard ya admin yavo kuti uita kutsimuka (broadcast) zvinhu.

## Kuita admin notices pamusoro pedashboard ya vana vako neBroadcasts

Ndinokwanisa kuita **admin notices** pamusoro pedashboard ya subsite ya mutundu wako nekubatsira kubva kune feature ya broadcast ya Ultimate Multisite.

Iyi nzira inobatsira zvikuru kana unoda kuita kutsimuka (announcement) sekuita maintenance yezvinhu, kana kuita zvinhu zvakadzama pamusoro pezvinovaka mutundu wako. Iyi ndiyo nzira inozviona admin notice pamusoro pedashboard ya mutundu wako.

<!-- Screenshot unavailable: Admin notice broadcast shown on a customer's subsite dashboard -->

Kuti utange kuita admin notice, enda ku dashboard yezvinhu vose (network admin dashboard) uye pangu menu ya **Ultimate Multisite**, uchaona option ya **Broadcasts**.

![Broadcasts list page in Ultimate Multisite admin](/img/admin/broadcasts-list.png)

Unogonawo kunge kuenda kutaura broadcasts dzakaita zvinotevera:

![Broadcast edit interface](/img/admin/broadcast-edit.png)

Kubva munzvimbo iyi, ndigadzirisa button ya **Add Broadcast** pamusoro peupenyu.

Izvi zvichatonga window ya Add broadcast inozviona kuti uone kuti unenge utange kuita kana chine kutaura (broadcast) uri upfungira.

Enda kuita iye uye chine kutaura chaizvo: **Message** ndichingava, ndipo ndigadzirisa button ya **Next Step**.

![Add broadcast modal with the Message option selected](/img/admin/broadcast-add-message.png)

Window yechipiri ichaipa kuti uone kana unoda kuita iye **Target customer** (mutundu wese anogona) kana **Target product** (zvinovaka zvakaita). Ndinokumbira kuti unozviona kuti unogona kutaura vana vose kana zvinovaka zvose.

Uchigara kuti utsvaka akaunti ye mutenda kana chine chine, unofanira kuteura (start typing) rurimi rudo (keyword) mu field.

Pasi **Message type** field, unogona kutenga rangi ya notice. Izvi zvichizivisa kurudziwa kwemushandiro wako.

Uchakanaka kuita **Next Step**.

![Target customers, target product and message type fields for a Message broadcast](/img/admin/broadcast-message-targets.png)

Window yechipfumbiro ndiyo unogona kuuzvikanedza (compose) mupfungwa yako nekutanga subject uye content/message unotipa vana.

![Broadcast message subject and content editor on the compose step](/img/admin/broadcast-edit.png)

Panguva unokera message yako, unogona kuita **Send** button.

Ndiyi izvi. Notice ya admin inofanira kuone mwedzi wako weuser immediately.

## Send emails to your customers

Mune kutenda feature ye Ultimate Multisite broadcast, unogona kuita email kune vana vakaro (users) vako. Unenge uene option yekutenda email kuno vana vechinangwa kana utenda group yavo yakakwana kubva pamusoro pe product kana plan yakatiyo vachiri ne.

Kuti utange broadcast ye email, enda ku dashboard ya network admin yako uye pangu Ultimate Multisite menu, unogona kuona option ye Broadcast.

![Broadcasts list page used as the starting point for an email broadcast](/img/admin/broadcasts-list.png)

Kubva pano, chibvumira **Add broadcast** button pamusoro.

Izvi zvichatonga Add broadcast modal window inotipa kuti utange utange kana type ye broadcast unotipa. Enda utange select **Email** ndichivimbisa Next Step button.

![Add broadcast modal with the Email option selected](/img/admin/broadcast-add-email.png)

Window yechipfumbiro ichaita kune chine **Target customer** kana **Target product**. Ziva kuti unogona kutenga vana vashoma kana products vashoma.

Kuti unogutsa kuti utsambe kune user account kana product, unofanira kuteura (start typing) keyword iye mu field.

Ngepa ndiri wakanaka wekuti wese wako wa target audience uwe, unogona kukutanga **Next Step**.

![Target customers and target product selection for an Email broadcast](/img/admin/broadcast-email-targets.png)

Window yechipfumbiro inotanga iwo ndiyo kungoni kunge kuteera email yako nekuingira subject uye content/message unoziva kuti utiita kuita kune users.

<!-- Screenshot unavailable: Email broadcast subject and content editor on the compose step -->

Panguva unokura message yako, unogona kukutanga button **Send**.

Ndinokuda kuti ndiyo yakapfuura sei kunge kuita email kune end-users vako nefeature ya broadcast.

## System emails

System emails mu Ultimate Multisite ndiyo iwo **notifications dzakakwana** dzinotangwa nesystem panguva kuna matsviki akati, zvakaita sekuti registration, payment, domain mapping, nendiri. Izi emails dzinogona kuendurwa kana kubatwa mhinduro (edited or modified) kubva mu settings ya Ultimate Multisite. Inoonekawowo nefeature inozova kutambura (reset) uye kuteerera (import) settings dzakare dzine kuti dzinotanga kubva mu installation ya Ultimate Multisite yakaipa.

### Resetting & Importing

Ultimate Multisite versions dzine zvinobva dzine emails dzinotsanana zvishoma, uye add-ons, dzinogona kuita neemails dzine kuteerera mazuva makati.

Kuti usawane (prevent conflicts) uye kuti usave nematambudziko akasiyana, **tichaisanganisira new email templates kamaSystem Emails pa installation yako nekuti zvinhu zvakakosha kwazvo kuenda zvakanaka kwefeature yese**, sokuti zvinhu izvi zvinogona kutangwa.

Hekuti zvinhu izvi zvinogone kuteerera emails dzine kuteerera neimporter tool, super admins uye agents dzinogona kuita iye. Izvi zvinhu zvichakanganisa system email yese necontent uye configuration ya new email template, kunoita kuti super admin anogone kutamba zvinhu anoziva kana kuva zvakaita.

#### How to import system emails

Penda kuenda pa Settings ya Ultimate Multisite uye uchitenda tab ya **Emails**.

![Emails tab in Ultimate Multisite settings showing the System Emails section](/img/config/settings-emails-tab.png)

Zvakanaka, munzira yakachengetedza (sidebar), ndichibvura button ya **Customize System Emails**.

<!-- Screenshot unavailable: Customize System Emails button on the System Emails sidebar panel -->

Pa page ya System Emails, uchaona button ya action ya **Reset & Import** pamusoro. Kuramba iye, inogona kuva modal window ye import uye reset.

![Reset or Import action button on the System Emails admin page](/img/admin/system-emails-reset-import.png)

Zvakanaka, unogona kuva (toggle) option ya Import Emails kuti uve nekuona emails zvinogona kuva (available) kuti uingire.

<!-- Screenshot unavailable: Reset and Import modal with the Import Emails options expanded -->

#### Kurudza System Emails

Nge nguva dzose, unoziva kuti zvinhu zvakagadzirwa pamusoro pe email template yakati isingazovaka (not working) uye unoda kurudza iye kuenda kune **default state** yake.

Mavhizha aya, unenge uene mhinduro mbiri: unogona kudumira system email uye kuingirawo (import) pamba (nekuita zvinhu zvakaita pamusoro), izvi zvichadzvipa kuti zvisanisi metrics dzemakutendwa uye zvinhu zvakasiyana, izviro chinodiwa kuitwa zvakasimba.

Noda unogona kuva ne **Reset & Import tool** kuti urudze email template iye.

Kuti urudze email template, unogona kutamba nemhinduro dziri pamusoro uye uenda kuita Reset & Import tool, ndipo, unogona kuva (toggle) option ya **Reset** uye utange emails unoda kurudza kuti zivaka content dzinogara (default content).

<!-- Screenshot unavailable: Reset and Import modal with the Reset Emails options expanded -->
