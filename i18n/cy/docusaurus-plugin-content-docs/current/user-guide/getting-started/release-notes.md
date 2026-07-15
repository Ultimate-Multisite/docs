---
title: Cyflwyniadau
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Cyflwyniadau y Cyfathrebu (Release Notes)

## Versi 2.13.0 — Cyflenwyd ar 2026-06-05 {#version-2130--released-on-2026-06-05}

New: Ychwanu chymorthol (sovereign-tenant support) wedi cael ei ddefnyddio ar gyfer cyfathrebu cyflwyniadau (customer account), checynau (checkout), cyfrifau (billing), safle (site), ffurfiadau (invoice), newid templateau (template switching), a mapiad o domenaid (domain mapping) felly gall y rhwydweithiau tenantau rhoi'r cyddeeion yn ôl i'r safle cyflym ar gyfer gweithgareddau cael eu rheoli.
New: Ychwanu gwylio cyfrifau atal (renewal-credential checks) ar gyfer cyflwyniadau allan (recurring memberships) felly gall y gateways neidio'r cyfathrebu autogynol pan nid oes gennych ei ddefnyddio cytuned cyfrifau wedi'i cadw, cyfleuster (subscription), neu token vault.
New: Ychwanu cyflwyniadau dewelopers (developer extension points) ar gyfer SSO URLs, domenaid cyflym ffurf checyn (checkout-form base domains), a creu recordau domenaid yn awtomatig.
Fix: Mae SSO yn gael ei ddefnyddio'n ddiogelffrom yn fwy arall gan domenaid wedi'u mapi, myfyrwyr anonymol (anonymous broker visits), tystiolaeth (logout), a chwilio cyfyngedig o pluginau.
Fix: Mae creu safle yn cael ei gael ei ddefnyddio ar gyfer cyfathrebu newydd (pending site creation) o hyd i'r flagau cyflym (stale publish flags) ac mae'n dod i'r ddeall o'r cyddeeion yn rhoi'r cyddeeion yn anghyffredol ar y ffurf creu safle.
Fix: Nid cael cyfleuster recordau domenaid ar gyfer domenaid cyflym checyn (shared checkout-form base domains), ac mae gweithgareddau ystafell (host-provider background jobs) nid a ddefnyddio pan nid oes gynnwys yn gweithredol.
Fix: Nid cael cyfleuster cheffrinau checyn, cyfrifau adres, rhwystro cyfrifau, cyfathrebu e-bost, newid templateau, tourau (tours), a chyfeiriadau dashboard cyddeeion yn blocio gyflym y ffordd cyffredinol o'r cyddeeion.
Fix: Mae e-bostau cyflwyniadol yn gwarchod y cyfathrebuon gyda'i ddefnyddwyr yn briodol pan nid oes anghyffredol ar SMTP/plugin fatal errors pan nid yw rhestrau cyfrifau neu gyfathrebu e-bostau yn cael eu cyflawni.
Fix: Mae newidiadau allan (membership renewals), dangos y cyflym, a chyfyngedig o chymryd peidiad yn dod i'r ddeall o ddifyniadau yn dod i'r ddefnyddio yn gyflym, crwthau, neu peidiadau cyffredig sydd ei angen.
Improved: Mae cyfathrebu WordPress wedi'i gwarchod hi i 7.0, mae asetau Vue o proddection wedi'u guberdio erredig o npm sources, ac mae cyflawni Cypress end-to-end yn chwarae mwy o ffordd checyn, setffroi (setup), SSO, a gateways.

## Versi 2.12.0 — Rheoli ar gyferol ar 15-mawr 2026 {#version-2120--released-on-2026-05-15}

- New: Ychwanegwyd Hostinger (hPanel) fel ychwanegur gweithredol gyda chymryd mappu domenaid
- New: Mae Site Exporter yn gwneud cyfathrebu bundleau import cyd-llwybrion ar gyfer rhannu site'n cael ei ddatblygu'n llwyr i ddatblygu site'n cael ei ddatblygu'n llwyr
- Fix: Mae e-bostai BCC bellach yn defnyddio header cyflwrdd-nysgolion i roi'r adresau gyflwrdd yn anghyffurfio
- Fix: Nid yw dyddiadau deallt y cyfrifol yn cael eu cael eu ddatblygu pan mae'n cael eu cadw gyda gwerthau nid-dyddiadol
- Fix: Mae cyfathrebu chwarae Stripe bellach yn gwneud ei ddatblygu'r cyd-llwybrion yn llwyr heb galw API deleteDiscount a ddifroddwyd

## Versi 2.11.0 — Rheoli ar gyferol ar 11-mawr 2026 {#version-2110--released-on-2026-05-11}

- New: Mae site exports yn cyfathrebu `index.php` sy'n cael ei ddatblygu yn autogynnu felly gallai'r ZIP cael ei ddatblygu ar host newydd heb ychwanegur plugin arall
- New: Mae export cyd-llwybrion yn sylw i'r gynllunwyr eu allu ddatblygu pob site yn un archiw o'r llyfrgell Site Export admin page
- New: Mae'r tynnu Plan Site Templates yn cael ei gyfyngu trwy ffurf cyflwrdd, gan redeg ychwanegau am ychwanegu template ar gyfer hanesau planau
- New: Mae'r redytwr ffurf checkout yn dangos pan mae gennych chi wedi ychwanegu produs yn cael ei ddatblygu heb ffurf cyflwrdd sydd yn angen
- New: Mae'r tab setegau Import/Export yn disgrifio'r cyfathrebu ei gyfoethau'n llwyr ac mae'n cysylltu'n dirir i'r tool Site Export

## Versi 2.10.0 — Rheoli ar gyferol ar 5-mawr 2026 {#version-2100--released-on-2026-05-05}

- New: Gweithro cyfarwyddyd PayPal ar gyfer cyflwyniad manwl gyda flag OAuth i sicrhau cyfathrebu gwylio sy'n ddefnyddio'r gateway yn llwyr.
- New: Mae panel cyddeeau (customer panel) wedi'i redysain gyda chard y **current-template**, grid perwilio, a bot **Reset current template**.
- Fix: Nid yw troi template yn gwthio'r UI ar gyfer fethau AJAX.
- Fix: Mae statau permisiwn troi template wedi'u sicrhau yn erbyn cyffredinau anghyfrifol.
- Fix: Mae inputau o ddefnyddio site wedi'u chyflwyno cyn cael eu cadw.
- Fix: Mae ganlyniad adres ffurfiol ar gael pan fod yr adran yn gwbl.
- Fix: Mae anwybynnau ddefnyddio PHP 8.1 o null-to-string wedi'u cyflwyno.
- Fix: Mae'r lazy-load gyfan yn cael ei wylio cyn y hook init i lawer ystafellau amser.
- Fix: Mae'r llwybr SSO wedi'i chynllunio arall dros pob llwybr cyflwyniad.
- Fix: Mae opsiynau site gwblan wedi'u cadw ar gyfer cadw.

## Versi 2.9.0 — Cyflwynwyd ar gyfer 30-04-2026 {#version-290--released-on-2026-04-30}

- New: Mae ddefnyddio single-site export a import wedi'i ychwanegu o dan **Tools > Export & Import**.
- Fix: Mae fyliau ZIP wedi'u serbu trwy ffenydd cadw wedi'i gyflwyno.
- Fix: Mae risg SQL injection a pethau cwestiynau mewn cwestiynau export/import yn cael eu cyfathrebu.
- Fix: Nid yw site yn cael ei cyflwyno pan fydd y admin yn gwylio'r e-bost o'r cyddee arall.
- Fix: Mae cyflogau pending_site anghyfrifol wedi'u glânio pan nid oes y cyfrifau a chwarae.
- Fix: Mae pethau padw (padding) nav settings a llwybr anchor search wedi'u gyflwyno.
- Fix: Mae site pending yn cael ei ddangos yn gyntaf mewn gwers All Sites.
- Fix: Mae header User-Agent o darparwr screenshot (mShots) wedi'i ychwanegu i sicrhau nad oes error 403.
- Fix: Mae cyfathrebu cron import wedi'i ddefnyddio yn gyfeiriad cyrregiad.
- Fix: Mae Tour IDs wedi'u chynllunio i underscores mewn cyfrifau setegau user.
- Improved: Mae ZipArchive wedi'i ddefnyddio yn lle Alchemy/Zippy ar gyfer cyfathrebu gwellter.

## Versi 2.8.0 — Cyflwynwyd ar gyfer 29-04-2026 {#version-280--released-on-2026-04-29}

New: Mae'n: Mae'r toggol Jumper wedi cael ei chynllunio yn y cyfathrebu Oesoedd (Other Options) UI.
New: Mae'n: Mae'r collinell Statws wedi cael ei ddefnyddio ar gyfer y llyfrgell ffurfau checyniad (checkout forms list table).
New: Mae'n: Mae'r lladdwr cyflenwiad sunrise i gael ymlaen am ystoddiadau MU-plugin custom.
Improved: Mae'n cael ei gwsueniad: Mae'r setiad o ddefnyddio cyflenwiad error-reporting wedi cael ei dod o'r dudalen setiadau.
Fix: Card safon y pethau diolch — mae'r llun yn cael ei chynllunio ac mae'r lwybr yn cael ei stylio'n iawn.
Fix: Mae'r cyfathrebu screenshot wedi cael ei newid o thum.io i WordPress.com mShots.
Fix: Mae'r Cyregistracion a Rol Defnyddiol yn cael eu setio'n ddefnyddiol ar gyfer y chwarae newydd ar y chwarae (fresh install).
Fix: `get_site_url()` nid yw'n dod yn gwbl o gwbl pan mae'r domain yn cynnwys port.
Fix: Mae'r ffeiliau media wedi cael eu copio'n iawn pan oedd setiad `copy_media` yn ôl.
Fix: Mae'r cache o'r obydau wedi cael ei ddefnyddio'n iawn ar ôl y gweithrediad sitemeta ar gyfer network-activate.
Fix: Mae'r domain cyflenwiad auto-promoted i'r prymedig ar DNS verification ar gyfer domainau gyda tri adran.
Fix: Mae'r cyfathrebu aros wedi cael ei ddelio pan fod y pamygder wedi'i cael ei drosglwyddo pan fod y pamygder wedi'i cael ei ddefnyddio yn llall.
Fix: Mae'r gwachau gweithredol (Password strength checker) wedi cael ei newid ar ôl cael ei ddefnyddio'r cyflenwiad logyn yn llall.
Fix: Mae'r reol ffurfau llawn wedi cael ei stopio ar gyfer y pethau diolch pan fod y safon wedi cael ei creu'n ddyfynnu.
Fix: Mae'r opsiwn cyregistracion WP core wedi cael ei synallt ar gyfer y chwarae plugin a'r cadw setiadau.
Fix: Mae'r gwarchau o ddifynol (Null expiration guard) wedi cael ei ddefnyddio yn `calculate_expiration` i gael ychwanegol i PHP 8.4.
Fix: Mae'r cyfathrebu cyregistracion wedi cael ei blocio pan fod y cyd-gysylltiad yn cael ei drosglwyddo pan fydd y cyd-gysylltiad yn cael ei gael ei ddefnyddio.
Fix: Mae'r gwchau null check wedi cael ei ddefnyddio ar gyfer `date_expiration` yn y checyniad.
Fix: Mae'r cyfathrebu safon wedi cael ei gael ei ddefynnu — mae'r hanesau, ychwanegderau pamygder, a'r prymedig domain.
Fix: Mae'r label statws pre-install wedi cael ei gwsueniad i nid yw'n cael ei chwarae pan fod y chec wedi cael ei ddefnyddio.
Fix: Mae'r domain checyniad diolch yn cael ei ddefnyddio ar gyfer URL cyfathrebu email.
Fix: Mae'r logyn auto-login ar ôl y pethau diolch pan nid oes ffurf cyfrifol (password field) sydd.
Fix: Mae'r pamygder rydyn-freed noch wedi cael ei ddefnyddio yn llall — mae'n cael ei golygu fel bywyd llawn.

- Gyfeiriad: Mae gwylio e-bost o ddefnyddi'r safle yn atal y cyflwyniad i ddifynnu'r cleient yn gyfrannol.
- Gyfeiriad: Mae'r llwybr y bas path a'r llwybr identiti ar bennod API SES v2 wedi'i cheini.
- Gyfeiriad: Mae'r hook `wu_inline_login_error` wedi'i cyflwyno yn y blwch cyfathrebu cyn y cyflwyniad.
