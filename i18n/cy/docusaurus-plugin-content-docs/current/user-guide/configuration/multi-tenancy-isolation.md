---
title: Isolatiad Multi-Tenancy
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Isoladiad Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 sy'n gynnwys isoliad databnwch a fylfachau (filesystem) ar gyfer tenantau sydd yn ddefnyddio ei ddynion. Mae hyn yn gwarchod data tenantau yn rhydd o'r un arall, gyda chofio'r cyfathrebu cyd-llwybr (network-level provisioning), cyfrifoldeb (billing) a gyfarwyddyd (administration).

## Strategi isoliad

Defnyddiwch isoliad ddefnyddiol (sovereign isolation) ar gyfer cleientau sydd angen gwahaniaeth data yn gryf, storio fylfachau (filesystem storage) ddefnyddiol, neu hanfod cyfrifoldeb (host boundary) unig.

Rhaid cael y cyfathrebu canlynol i bob tenant ddefnyddiol:

- Databnwch tenant ddefnyddiol neu stratega prefex databnwch a ddefnyddiol wedi'i gymerchu ar gyfer y host.
- Fylfachau fylfachau (filesystem root) tenant ddefnyddiol.
- Cyfeiriad regrystri tenant sydd yn mapi'r site i ei databnwch, llwybr gweithredol (root path), enw gweithredol (hostname), a model isoliad.
- Ailadu cyflwyniad (migration verification) ar ôl y tenant cael ei gweld yn fyw.

## Cyfathrebu host databnwch

Mae Versiwn 1.2.0 yn newid y ffurf cyfathrebu host unig ar gael i installau ddefnyddiol (sovereign installs). Mae gwerthau unig fel `localhost` wedi'u gyfathrioli felly gall Bedrock, FrankenPHP, a WordPress sydd mewn containerau rhoi a chyflwyno permisiwnau yn gyfyngol ar y strwythur host MySQL sydd yn ei weld.

Pan mae'ch cyflwyno tenant ddefnyddiol:

1. Rheoli databnwch host i'r gwerth a angenwyd gan y runtime tenant.
2. Defnyddiwch `localhost` ar gyfer installau socket lleol pan fydd y host yn gofyn am cysylltiadau lleol.
3. Defnyddiwch `127.0.0.1` neu enw gweithredol serch (service hostname) dim ond pan mae'r server databnwch yn rhoi permisiwnau i'r host hwn.
4. Runo ailad cyflwyniad ar ôl newid y cyfathrebu host.

Os mae cyflwyniadau’r ailadu yn dangos eithaf permisiwnau (grant failures), gwahaniawch y permisiwnau databnwch tenant gyda'r cyfathrebu host a gyflwynwyd. Mae unwrach a rhoi permisiwn i `user@localhost` yn gwrthiant â `user@127.0.0.1` neu `user@%`.

## Fylfachau fylfachau (Filesystem root)

Rhaid y gwrth tenant (tenant root) syddedig yn ddefnyddio arallau aethau (restarts) ac mewn ddefnyddiau (deployments). Os oes unrhyw ffordd i'r llwybrau (mount paths) temporaidd, dod â'r hynny. Ar gyfer y installiadau mewn stil Bedrock, rhai'n sicr y mae'r gwrth tenant yn cyfeirio at y web root o WordPress a ddefnyddir gan y bootstrap y tenant, nid dim ond y gwrth y prosiect.

## Ordyn cyfathriant (Provisioning order)

Ar gyfer tenantau newydd sydd mewn swydd i'r gwlad (sovereign tenants), defnyddiwch y ordyn hwn:

1. Creu y cyflwyniad y registry tenant.
2. Creu'r database a'r user database ar gyfer y tenant.
3. Bootstrap y schema y tenant.
4. Cyfathriant y byweraethau (users) y tenant.
5. Cyfathriant y llwybrau y filesystem y tenant.
6. Runo gwylio'r chefnogaeth (migration verification).
7. Newch y rhwydwaith neu DNS ar ôl bod y cyfathriant wedi cael ei sicr.

Mae'r ordyn hwn yn prevensio i'r tenantau sydd yn cael eu parth-isolio yn cael eu cyflwyno trafennau cyn i fod y gwrth database, y byweraethau (users), a'r filesystem yn barodol.

## Cyfathriant rheoli cyd-defnyddwyr swyddogol (Sovereign customer management flows)

Mae Ultimate Multisite v2.13.0 yn parhau i gweithio gyda chwaraeion y rheoli cyd-defnyddwyr ar y safle cyflym (main site) pan fod y modd sovereign wedi'i chynllunio. Gallai'r tenant dal i weithio fel installiad WordPress sydd yn cael ei parth-isolio, ond mae gweithrediadau cyd-defnyddwyr sy'n cyffredin ar gyfer y cyfathrebu netwyllau (network billing), aeloddiad (membership), neu data cyfrifol (shared account data) yn angen i anfon y cyd-defnyddwr yn ôl i'r safle cyflym yn lle ceisio gwblhau'r gweithrediad ymlaen yn y rheoli tenant.

Mae'r cyfathriant y safle cyflym yn cael ei ddefnyddio ar gyfer:

- Newidi chefnogaeth (Checkout) a newidi planiau.
- Oglwyddo'r amgylchedd cyfrifol (Account overview) a gweithrediadau profill cyd-defnyddwyr.
- Cyfathriant amgylchedd cyfrifol (Billing address updates) a ddeallau rheoli peiriant (payment-management screens).
- Cysylltiadau ffurfiol (Invoice) a hanes peiriant (payment-history views).
- Gweithrediadau rheoli safle fel ychwanegu safleoedd neu ddifynnu safle.
- Newidi template.
- Cyfathriant domenaeth (Domain mapping) a newidi domenaeth prynhawn (primary-domain changes).

Pan fydd y gast yn dechrau un o'r gweithgareddau hyn o'r tenant souveren, mae Ultimate Multisite yn llwybr y URL o'r siat canol a mae'n parhau'r tenant sgwrsio fel cyflwyniad agor i dychwilio pan fydd hyn yn ddiogel. Mae hyn yn gael y gastau gwblhau'r weithgaredd wedi'i gwblhau ar gyfer y cyfrifau cyd-gynllunol, a ddychwilio i'r context y tenant heb dduplikeu statws cyfrifau neu gyflwyniad yn y database souveren.

Ar gyfer y gweithwyr, mae'r rheol praktigol yw: gwarchio'r peidiadau cyd-gynllunol, peidiad, checkout, ffurf cyfrifau, template, a rheoli domen ar y siat canol ar gyfer y rhwydweithiau souveren. Gall y dashboardau y tenant llwybr i'r peidiadau hyn, ond mae'r siat canol yn parhau'r chyflwyniad o benwiol ar gyfer y weithgaredd.
