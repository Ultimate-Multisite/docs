---
title: Anfoniadau E-bost a Brondebau
sidebar_position: 11
_i18n_hash: e9ddc461d32299505e4a7a5af491cff6
---
# Enngrani E-bostref a Chwaraeon (v2)

_**NOTIADOLIA CRYTID: Mae'r ail ddefnyddiol hwn yn cyfeiriad i fersyllfa Ultimate Multisite versio 2.x.**_

Mae Ultimate Multisite gyda ffeithrin sydd wedi'i gynnwys y gallai eich cyfathogh â'ch cyddeeirwyr drwy anfon e-bostref i dyn neu gyfnod o dynion yn ei ddefnyddio, fel hefyd anfon gairon ar eu dashboard admin i drosglwyddo cyflwyniadau.

## Ymddangos gairon admin i'r dashboard eich cyddeeirwyr gyda Broadcasts

Trwy ei ddefnyddio ffeithrin broadcast o Ultimate Multisite, gallwch ddodol **gairon admin** i dashboard admin ychwanegol eich dyn.

Mae hyn yn ddefnyddiol iawn os oes angen i'w gwneud cyflwyniad fel gweithredoedd system neu offer newyddion neu weithgareddau i'ch cyddeeirwyr sydd ar gael. Dyma sut bydd y gair admin yn dangos ar dashboard eich dyn.

![Broadcasts list page in Ultimate Multisite admin](/img/admin/broadcasts-list.png)

I ddechrau gair admin, mynd i'r dashboard admin ychwanegol eich cyddeeirwyr ac yn ôl i'r menu **Ultimate Multisite**, byddwch yn dod o hyd i'r opsiwn **Broadcasts**.

<!-- Screenshot unavailable: Admin notice broadcast shown on a customer's subsite dashboard -->

Gallwch hefyd redig broadcastau sydd ar gael:

![Broadcast edit interface](/img/admin/broadcast-edit.png)

O'r dudalen hwn, gwch y bot **Add Broadcast** yn y ddefnyddio.

Bydd hyn yn dangos y ffenestr Add broadcast lle gallwch ddewis beth yr adeilad broadcast sydd eich hoffi anfon.

Goeliwch a chwilio **Message** wedyn y bot **Next Step**.

![Add broadcast modal with the Message option selected](/img/admin/broadcast-add-message.png)

Bydd y ffenestr nesaf yn gofyn i chi'r **Target customer** neu **Target product**. Rhowch i'w sylw bod gallwch ddewis mwy na un dyn neu mwy na un produs.

I gennychu'n gwrthod am ychwaneg neu'r produs, mae angen i chi entyn yr enw yn ystafell ymlaen yn y field.

Ond yn ymlaen yn y field **Message type** (Mathol ystref), gallwch chi gyhoeddi'r lliw o'r meddyliau. Mae hyn yn rhoi'n ddwfn y hanfodol o'ch message.

Yna gallwch chi gwchll **Next Step**.

![Target customers, target product and message type fields for a Message broadcast](/img/admin/broadcast-message-targets.png)

Mae'r ffenestr nesaf yw lle mae gennych chi allan i ddechrau golygu eich message gan y cyflwyno'r sylw (subject) a'r cynnwys/message sy rydych chi eisiau gyhoeddi i'r bennwr.

![Broadcast message subject and content editor on the compose step](/img/admin/broadcast-edit.png)

Ar ôl creu eich message, gallwch chi gwchll y bot **Send**.

A hyn yw'r cyfathrebu. Bydd y meddyliau o'r admin yn dangos ar gyferol ar dros y dashboard o'r bennwr.

## Gyflwyno e-bostau i'ch cyddeeion

Gan ei ffurfio'r ffeithoedd broadcast o'r Ultimate Multisite, gallwch chi gyflwyno e-bost i'ch bennwr. Mae gennych chi opsiwn i gyflwyno'r e-bost yn unig i bennwr penodol neu gyflwyno'r grŵp bennwr penodol yn seiliedig ar y produs neu'r plan sy rydych chi wedi cael ei ddefnyddio.

I ddechrau cyflwyniad e-bost, mynd i'r dashboard admin o'ch rheiniad (network admin) a dan y menu Ultimate Multisite, byddwch yn dod o hyd i'r opsiwn Broadcast.

![Broadcasts list page used as the starting point for an email broadcast](/img/admin/broadcasts-list.png)

O'r ffenestr hwn, gwchll y bot **Add broadcast** ar dros.

Bydd hyn yn dod o hyd i'r fenestr Add broadcast lle gallwch chi dewis beth yw'r rheol broadcast sy rydych chi eisiau gyflwyno. Dechrau a dewis **Email** wedyn gwchll y bot **Next Step**.

![Add broadcast modal with the Email option selected](/img/admin/broadcast-add-email.png)

Bydd y ffenestr nesaf yn gofyn i chi'r **Target customer** neu **Target product**. Rhowch i'w sylw bod gallwch chi dewis mwy na un bennwr neu mwy na un produs.

I gennychu'n gweithio am ychwanegu neu'r produs, mae angen i chi entyn yr enw yn y field.

Ar ôl i chi ddewis eich cyflwrddau taro, gallwch chi clisi **Next Step**.

![Dechreuion a wybrioedd taro ar gyfer cyfathrebu e-bost](/img/admin/broadcast-email-targets.png)

Mae'r ffenestr nesaf yw lle gallwch chi entyn eich e-bost yn dechrau gwneud ei ddefnyddio gan y cyflwrddau drwy rhoi'r cyfeiriad a'r cynnwys/message sydd chi eisiau anfon i'r benodau.

<!-- Screenshot unavailable: Editor o subject a cynnwys e-bost ar gyfer y cynllunio -->

Ar ôl i ddynnu eich message, gallwch chi ddynnu'r bot **Send**.

Ac mae hyn yn ddefnyddiol i anfon e-bost i'ch benodau drwy'r ffeithiau cyflwrdd.

## E-bostau systemol (System emails)

Mae e-bostau systemol mewn Ultimate Multisite yn **gofyniadau awtomatig** a dychwelyd gan y system ar ôl gweithgareddau penodol fel cyfraddiad, peidiad, mapiad o drafod, etc. Gallai'r e-bostau hyn ei redig neu newid o ddibenion Ultimate Multisite. Mae hefyd yn dod â ffeithiau sydd yn gallu chi reiddi a chymryd seteffau sydd ychwanegol o'r installiad Ultimate Multisite arall.

### Reiddi a Chymryd (Resetting & Importing)

Gall y chyfnewidiadau newydd o Ultimate Multisite, fel ychwanegoliadau, cyfraddiadau newydd ei reiddi o amser o amser.

I chafoddio'r ddiffygion a chyflwyno'r angen arall, **byddwn ni yn ychwanegu y template e-bostau newydd fel E-bostau Systemol ar eich installiad yn awt**, ond os oes angen eu bod yn hanfodol i'r gweithrediad cywir o'r ffeithiau.

Fodd bynnag, gall y super admins a'r aelodau chymryd y e-bostau newydd hyn drwy ddefnyddio'r tool chyfrannu (importer). Bydd y proses hwn yn creu e-bost systemol newydd gyda'r cynnwys a'r seteffau o'r template e-bost newydd, gan gael i'r super admin gwneud unrhyw redisiadau sydd ei angen neu gadw eu fel ydynt.

#### Sut i chymryd e-bostau systemol

Rydych chiwainwch eich llyfr gweithredol o'r Ultimate Multisite ac ymdrech i fynd i'r tab **Emails**.

![Tab Emails yn y setegau Ulti Multisite yn dangos y rheol System Emails](/img/config/settings-emails-tab.png)

Yna, ar y llawerdd, gwchwch ar y botun **Customize System Emails**.

<!-- Screenshot unavailable: Botun Customize System Emails ar y panel System Emails -->

Ar y peidiad System Emails, byddwch yn gweld y botun gweithredol **Reset & Import** ar y ddefnyddi. Mae cliw ar y botun hwn yn agor y fenestr modal i'r import a'r resetr.

![Botun Reset neu Import ar y peidiad System Emails admin](/img/admin/system-emails-reset-import.png)

Yna, gallwch gwneud ychwanegiadau ar gyfer y Import Emails i weld beth yw'r system emails a allai cael eu importio.

<!-- Screenshot unavailable: Modal Reset a Import gyda'r opsiynau Import Emails wedi'i gyflwyno -->

#### Resetr o System Emails

Am ddiweddarach, gallwch weld bod y newidiadau a wnaethon i'r model email penodol yn gweithio am ti anwy, ac byddwch yn gallu resetr'n eu i'r **stat defnyddiol** (default state).

 mewn perthynau hyn, mae gennych chi ddau opsiyn: gallwch efallai dod â'r system email a importio'n ddiweddar (gan defnyddio'r gyfarwyddiadau isonol) - sydd â'r effaith i'r metricau cyflwyno a chwaraeion eraill, gan gwneud y ffordd hwn yn cael ei gael yn llai priodol.

neu gallwch ddefnyddio'r **Reset & Import tool** i resetr y model email hwnnw.

I resetr model email, gallwch dilyn y cynlluniau isonol thawel i rai cyflwyno'r Reset & Import tool, ac yna, gwchwch y opsiwn **Reset** a wybellwch y emails sydd eich bod eisiau resetr yn ôl eu cynnwys defnyddiol.

<!-- Screenshot unavailable: Modal Reset a Import gyda'r opsiynau Resetr Emails wedi'i gyflwyno -->
