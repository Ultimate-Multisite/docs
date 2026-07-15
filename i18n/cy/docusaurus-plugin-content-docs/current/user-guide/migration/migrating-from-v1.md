---
title: Migru o V1
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Migru from V1

## Mae Ultimate Multisite wedi gwahanodd o'i ffamiriad cyntafol 1.x i ffamiriad 2.x. {#ultimate-multisite-has-switched-from-its-original-1x-family-of-releases-to-the-2x-family-of-releases}

Mae Ultimate Multisite versio 2.0 a oer yn rewri cyfan y cod, gan ei fod mae rhywfaint niwed cynnar a new yn cael eu rhannu'n dros ychwanegau. Oherwydd hynny, pan ydych chi'n gwneud ymlaen o 1.x i 2.x, bydd angen i chi ddangos eich data i ffurf sydd ei gallu deall y nwyrau newydd.

Mae'n dda iawn bod Ultimate Multisite 2.0+ **yn cael ei gynnig gyda migrator** a chwarae yn y core sydd yn gallu gweld data o'r ffamiriad cynnar ac i'w newid i ffurf newydd. Mae'r migras hwn yn digwydd yn ystod **Gweidiad Ymddangos (Setup Wizard)** o versio 2.0+.

Mae’r ddefnyddiol hwn yn gwrc yn dangos sut mae'r migrator yn gweithio, beth i wneud mewn perthynau o fflachau, a sut i ddeall anwylydiaethau allanol allanol y gallai fynd yn digwydd yn ystod y proses hwn.

_**DAWID: Trước na chi entyn ymlaen o versio 1.x i versio 2.0, mae'n dda gwneud cadarn eich cyfrifau (backup) o'r database eich safle.**_

## Ystafell gyntaf {#first-steps}

Mae yr unstafell gyntaf yn dod â chwarae y fflaen .zip a chwarae versio 2.0 ar ddaith admin y rhwydwaith eich multisite.

Ar ôl i chi [installio a chwarae versio 2.0](../getting-started/installing-ultimate-multisite.md), bydd y system yn gweld'r bod eich Multisite yn cael ei rheoli ar ffamiriad cynnar ac byddwch yn gweld y message hwn ar ddefnydd y plugin.

_**NOTIA:** Os oes gennych Ultimate Multisite 1.x wedi'i chwarae ar eich Multisite, bydd chi'n cael y wybodaeth i'w gael y opsiwn i'w hanfodol y plugin gyda'r versio sydd yn cael ei ddefnyddio. Os oes gennych, gofynwch, gwchyt ti ar **Replace current with uploaded**._

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

Y peth lân yn dangos i ddynwch beth yw'r add-ons legacy sy'n cael eu gweithredu gyda chyfnod 1.x. Bydd ychwanegiadau ar gyfer ystyr o fod y chyfnod sy'n cael eich defnyddio cyfathoghlyd â chyfnod 2.0 neu os oes angen i chi ddefnyddio chyfnod wedi'i gwneud ymlaen o'r add-on ar ôl y chwarae.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

Pan fyddwch yn bario i ddechrau, gallwch chi gwch y bot sy'n dweud **Ymddangos i'r Ymddangoswr i gwblhau'r cyfathrebu**.

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

Bydd hyn yn dod â'ch i'r dudalen gweithredu ymddangoswr gyda chwarae'n chofion gyffur. Mae angen i chi gwch **Dechrau** i symud i'r dudalen nesaf.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

Ar ôl gwch **Dechrau**, bydd ychwanegiadau yn cael eu redig i'r dudalen nesaf gyda Pre-install Checks_._ Bydd hyn yn dangos eich gair informadwy a chyfnod WordPress ac yn dweud i chi os yw'n cyflawni'r **cyflwyniadau Ultimate Multisite**.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

Ymddangos ystafell yw rhoi eich codref gyfrifol (license key) o Ultimate Multisite ac gwneud y plugin yn gweithredol. Bydd hyn yn sicr bod pob ffeithrin, gan gynnwys y add-ons, ar gael ar eich safle.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

Ar ôl i rhoi'ch codref, gwch **Cynllunio & Gwneud**.

Ar ôl cyfathrebu y codref, gallwch chi entyn y chwarae cyfrifol yn dechrau gan gwch **Ymddangos** ar y dudalen nesaf. Bydd hyn yn creu'r fylcheau a'r database sydd angen i chyfnod 2.0 i weithio yn awtomatig.

## Mae'r Mynediad {#now-the-migration}

Mae'r migrator sydd â ffurfyn diogelwch yn ei gynnwys ychwanegiad. Bydd ef yn gweld eich holl multisite i sicr y gallai'n cael eich data Ultimate Multisite i dros y cyflym heb unrhyw anwylyd. Clic ar y bot **Run Check** i entynnu'r proses.

After run the check, mae gennych chi ddau phosibl: gall y canlyniad fod yn ** gyda** anwylyd neu **heb** anwylyd.

### Gyda Anwylyd {#with-error}

Os byddwch yn cael message anwylyd, byddwch yn angen dod i'r tîm cefnogaeth ein i fynd eich help yn ei ddatblygu'r anwylyd. Rhowch sylw i **darparu'r log anwylyd** pan gwneudwch y ticket. Gallwch chi ddiwethu'r log neu gallwch chi clisi'r linc sydd â'r enw "contact our support team". Bydd hyn yn agor y widget help ar ochr ddefnyddi'r fpeidiad gyda phrydion wedi'u cyflwyno i chi sy'n cynnwys y logau anwylyd o dan y disgrifiad.

_**Gan fod y system wedi dod â anwylyd, byddwch yn angen i ddarganfod i dros i migraeth i fersiwn 2.0. Gallwch chi ddarganfod yn ôl i fersiwn 1.x i ddechrau chwarae'r rheol eich cyd-gynllun heb fod y anwylyd wedi'i ddatblygu.**_

### Heb Anwylyd {#without-error}

Os nid yw'r system yn dod â unrhyw anwylyd, byddwch yn gweld message cyfathrebu a bot **Migrate** ar ben y cefn i'r lleill sydd â'r chwarae eich migraeth. Ar y lleoliad hwnnw, byddwch yn cael eich ail-gofal i creu cyd-gynllun o'r database eich bod yn mynd ymlaen قبل, sydd yn ddefnyddiol iawn. Clic ar **Migrate** os oes gennych chi cyd-gynllun.

Mae hyn yn cyflwyno'r holl beth sydd angen!

Gallwn i'r fwytyr, a'i gallwch ddal y Mwynwr (Wizard) i'w cyfathogh eich logo a chwarae bythyrion ar eich rheol, neu entyn i'r menu a chyfweli yn y ffurf newydd o'r Ultimate Multisite 2.0. Goch chi ddilynwch ac gwnech rhywfaint o chwarae bythyrion!
