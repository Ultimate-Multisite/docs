---
title: Modelau y safonau
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# Modelau Gweithiau (v2)

_**NOTIA: Mae'r ail nghydig hwn yn cyfeiriad i Ultimate Multisite fersiwn 2.x. Os ydych chi yn defnyddio fersiwn 1.x,**_ **gwneudwch yllori hwn.**_

Mae'n ddefnyddiol i'r cwmni prenial gyda Ultimate Multisite i awtomatgyr ychwanegauol o phrosesau fel ychwanegu gwahaniaeth a chynlluniau am gyflwyno i'r cydweithwyr pan yn creu eu gwebitau. Mae'r ffordd einfail i ddod i hyn yw defnyddio feithrin Site Templates o Ultimate Multisite.

## Beth yw Site Template? {#what-is-a-site-template}

Fel y mae'n cael ei henw, mae Site Template yn gwebit site sydd wedi'i chynllunio fel cyfrifol pan yn creu gwebitau newydd yn eich cydweith.

Mae hynny yn ei fod yn llwybr i chi creu gwebit base, gwneud pluginau yn weithredol, sethema (theme) ar gyferllaw, a chynllunio'r ffurf yn unrhyw ffordd sy'n dymuno. Yna, pan fydd eich cydweith yn creu cyfrif newydd, yn lle cael gwebit WordPress defnyddiol heb unrhyw cynnwys o ben, bydd eu cael ei cop o'r site base gyda'r holl chynlluniau a'r cynnwys wedi'i setio.

Mae hyn yn dangos iawn, ond sut i ffresgu site template newydd? Mae'n einfail fel y gallai fod.

## Creu a Redig Site Template Newydd {#creating-and-editing-a-new-site-template}

Mae Site Templates yn gwebitau normol ar eich cydweith. I creu template newydd gallwch eithaf i **Network Admin > Ultimate Multisite > Sites > Add Site.**

**![Add site button in the Sites list page](/img/config/site-templates-list.png)**

Bydd hyn yn agor gwyd-gwrth (modal window) lle bydd yn gofyn am y **Site title, Site Domain/path,** a **Site type**. Yn ôl y ffordd gwaith **Site Type**, sicrwch eich bod yn dewis **Site Template** *.*

_![Add site template modal with site type dropdown](/img/config/site-templates-list.png)_

Gallwch hefyd ychwanegu disgrifiad ar gyfer cydweith i esbonio beth mae'r template yn cynnwys:

![Site template description field on the site template edit screen](/img/config/site-template-edit-description.png)

Ar ôl ymlaen o'r ffurf, byddwch yn gweld y tynnu **Copy Site**. Bydd hyn yn sylw i chi creu model siat newydd ar adalaith o'r model siat sy'n syrthio fel نقطa dechrau i helpu chi gwarchod amser yn lle creu model siat o'r dechrau.

![Add site template modal with copy site toggle](/img/config/site-templates-list.png)

### Gwarchod y cynnwys o Model Siat {#customizing-the-contents-of-a-site-template}

I weld eich model siat, teithio i'r panel eu dashboard a gwneud y newidiadau sydd yn hanfodol iddo. Gallwch ddatblygu postau newydd, peidiadau (pages), gael pluginau yn weithredol ac newid y theme sy'n weithredol. Gallwch hefyd mynd i'r Customizer a newid pob math o opsiynau gwarchod.

![Site template edit interface](/img/config/site-template-edit.png)

Bydd pob ddata hyn yn cael ei copio i mewn pan mae client yn creu siat newydd ar adalaith o'r Model Siat hwnnw.

### Opsiynau Awdryddol (Advanced Options) {#advanced-options}

Os ydych chi'n gwybod eich ffordd gyda rhywfaint o codi custom, gallwch ddefnyddio API Search and Replace ein i newid yn awt y gairon ar y siat newydd ar ôl ei creu. Mae hyn yn ddefnyddiol ar gyfer pethau fel newid enw cwmni ar peidiad About, newid e-bostell cysyllti ar peidiad Contact, gan ychwanegol.

### Defnyddio Model Siatiau (Using Site Templates) {#using-site-templates}

Alright, mae chi wedi creu rhywfaint o model siatiau gyda dyluniadau, themeau a setegau yn rhywfaint. Sut mae'r hyn yn eu gwneud yn ddefnyddiol ar eich cyd-fynd nawr?

Yn y cyflwr, mae gennych chi ddau ffordd allwch ddefnyddio nawr (nid yn symudol):

  * Attaching un Model Siat i gydol o'r Planau eich
**O R**

  * Gofyn i'ch clientau gw milltir y model siatiau yn eu gwneud yn eu cyflwyniad.

#### Mod 1: Gyflwyno Model Siat (Assign Site Template) {#mode-1-assign-site-template}

Yn ffurf hwn, nid yn gallai eich cleientau dewis templat pan fyddant yn creu cyfrifol, ond yn lle hynny byddwch yn cyflwyno beth y templat sydd ei ddefnyddio ar y Planion eich.

I'r gael hyn, byddech chi angen mynd i **Ultimate Multisite > Products > Edit**.

![Edit product to assign site template](/img/config/product-site-templates.png)

Bydd hyn yn dod â'ch i'r lleoliad **Edit Product**. Yn y ddefnyddio sefyllfa **Product Options**, dod i'r tab **Site template** a dewis y opsiwn **Assign Site Template** o'r ffordd gellir. Bydd hyn yn dangos y rheolau templat sydd ar gael ac bydd yn sylw i chi i dewis un templat site yn ddefnyddiol ar gyfer y produs.

![Product site template tab with assign site template option](/img/config/product-site-templates.png)

#### Ffurf 2: Dewis Templat Site Ar Gael {#mode-2-choose-available-site-template}

Yn ffurf hwn, byddwch yn rhoi ddefnyddio'r cleientau i dewis yn ystod y prosess creu cyfrifol. Bydd eu gallai dewis o'r templadau site gwahanol sydd eich ddefnyddio yn y setegau y produs. Mae chi'n cael opsiwn i hanfodoli y templad site a gallau nhw dewis ohono ar gyfer y produs wedi'i dewis. Bydd hyn yn rhoi'n gallu chi gael setiau templadau site gwahanol ar gyfer pob produs, sydd yn llawn i ddatblygu ffurfion ac ffeithiau gwahanol ar gyfer produs gyda chysgod uchel.

Ar ystod ar ymlaen ar ymlaen ar gwefan **Edit Product**. Dder y rheol **Product Options**, dodwch y tab **Site template** a dewiswch y opsiwn **Choose Available Site Template** o'r ffordd drefn. Bydd hyn yn dangos y llyfrgell o site templates sydd ar gael ac bydd yn sylw i chi dewis y site template sy rydych chi eisiau fod ar gael. Gallwch fynd hyn drwy dewis ei Gweithrediad: **Available** os ydych chi eisiau bod y site template yn cael ei ddefnyddio ar y llyfrgell. _**Not Available**_ os ydych chi eisiau na'i ddangos y site template fel opsiwn. A **Pre-selected** os ydych chi eisiau fod un o'r site templates sydd ar gael yn cael ei dewis fel ddefnyddiol yn defnyddiwyd.

![Choose available site templates with behavior options](/img/config/product-site-templates.png)

### Modus Defnyddiol: Dewis site template ar ffurf y Checkout {#default-mode-site-template-selection-on-the-checkout-form}

Os ydych chi eisiau fod pob un o'r site templates eich gael yn cael ei ddefnyddio yn ystod y cyfrifol, neu nad yw chi'n gosod angen gwaith addol i gyflwyno neu nodi site templates o dan pob produsg sydd yn creu. Tapwch yn unig i setio'r dewis site template o dan eich **Checkout Form**. I wneud hynny, mynd i **Ultimate Multisite > Checkout Forms** a clisi **Edit** o dan y ffurf sydd chi eisiau cyflwyno.

Bydd hyn yn dangos y peidiad **Edit Checkout Form**. Tapwch y field **Template Selection** a clisi **Edit** o dan y cyfeiriad hwnnw.

Bydd ychwanegiad modal yn dangos. O dan y field **Template Sites** gallwch dewis a llywio pob site template sydd chi eisiau fod ar gael yn cael ei ddefnyddio yn ystod y cyfrifol. Bydd y site templates sydd chi'n nodi o'r lle hwnnw ar gael nid oes unrhyw produsg wedi'i dewis.

![Template selection field in the checkout form editor](/img/config/checkout-form-template-step.png)

Ar y frontend, bydd y teimloedd yn gweld y dewis template yn ystod y cyfrifol ac gallwch dewis y dylunio uchel i'r site newydd eich.

![Frontend template chooser during registration](/img/config/frontend-template-chooser.png)

### Opsiadau Model Si Lenydd {#site-template-options}

Mae ychwanegau model si lenydd eraill ar gael yn ddefnyddi, ac gallwch chi gwneud eu cyflwyno neu ddefnyddio o fewnau Ultimate Multisite.

![Opsiadau model si lenydd mewn setynau Ultimate Multisite](/img/config/settings-sites-templates-section.png)

#### Gofyn i'r Chwarae Modelu {#allow-template-switching}

Bydd ychwanegau hwn yn sylfaenu eich bod yn gallu'r cyddee chi'n gwneud i'ch clydefau troi'r model sy'n eu gw mill â'r proses cyflwyniad ar ôl cael y cyfrifol a'r si. Mae hyn yn ddefnyddiol o'r ochr y clydefwr gan ei gael ei chwarae eto os oes ganddyntai'r model gyntaf nid yw'n dda i'u angenau penodol ar ôl.

#### Gofyn i'r Bwyliau Defnyddio eu Si fel Modelau {#allow-users-to-use-their-site-as-templates}

Gan fod y bywogion o subsite yn gwneud a ddefnyddio amser i adeiladu a ddefnyddio eu si ei hun, gallent eu bod eisiau ei chloenio a ddefnyddio'n un o'r modelau si sydd ar gael pan mae'n cael cyfrifol newid subsite ar eich rheini. Bydd ychwanegau hwn yn sylfaenu eu bod yn gallu eu gwneud hyn.

#### Cloeni Media ar Gyflymi Modelau Si {#copy-media-on-template-duplication}

Gan fod ychwanegau hwn yn cael eu gwylio, byddai'n chloeni'r media a ddefnyddiwyd ar y si model i'r si newydd a cael ei creu. Gall hyn cael ei gyflwyno ar un o'r planau.

#### **Pretthyn Nuwchau Ar Gweithredwyr Si** {#prevent-search-engines-from-indexing-site-templates}

Mae modelau si fel y mae'n disgyblhau yn yr erthygl hwn, ond mae'n parth o'r rheini eich bod yn cael eu chwilio gan gweithredwyr. Bydd ychwanegau hwn yn gallu chi gwneud i'r modelau si ei gwneud yn gwahanol felly gallai gweithredwyr chwilio nhw.

## Cyflwyniad Modelau Si gyda chwarae a cyfnewid awtomatig {#pre-populating-site-templates-with-auto-search-and-replace}

Mae un oethau mwyaf pwysig o Ultimate Multisite yw'r gallu ychwanegu text, colore a ffeiliau ar gyferfyniad form. Ar ôl iêm y data hwn, gallwn ei ddefnyddio i pre-pobylu'r cynnwys mewn rhai ardaloedd o'r template sydd wedi'i deilio. Yna, pan fydd y site newydd yn cael ei gyflwyno, bydd Ultimate Multisite yn gwahanu'r placeholderau gyda'r wybodaeth cywir a ddifynwyd yn ystod y ffurfiad.

Ar enw, os ydych chi eisiau gael enw cwmni'r benwerth eich benwerthwr yn ystod y ffurfiad, ac i ddefnyddio enw yr unig ar gyfer y peiriant. Ar fy nghanol y template site eich benwerthwr, mae angen i chi drosu'r placeholderau, fel yn ysbrydol yn y canlynol (ddylunio'r placeholderau yn cael eu cyflwyno gan drosurau ddwfn - {{placeholder_name}}).

![Homepage with placeholder text in curly braces](/img/config/site-templates-list.png)

Yna, gallwch sicr yn ychwanegu ffurfiad benwerthwr sy'n cyfathogh â'r data hwn i gael y data hwn. Mae'r editor ffurfiad benwerthwr fellyddol a ddefnyddir ar gyfer deilio templateau yn gallwch rhoi ffeiliau custom gyda'r ddetholion yn ystod y cyfathogh â'r deilio template:

![Template selection and registration fields in the checkout form editor](/img/config/checkout-form-template-step.png)

Bydd eich benwerthwr yn gallu gwblhau'r ffurfiad hwn yn ystod y ffurfiad.

![Frontend checkout form with template chooser](/img/config/frontend-template-chooser.png)

Yna, bydd Ultimate Multisite yn gwahanu'r placeholderau gyda'r data a rhoi'n cael ei darparu gan y benwerthwr yn awyr.

![Placeholders replaced with customer data on the site](/img/config/site-templates-list.png)

### Cynllunio'r problem "template llawn o placeholderau" {#solving-the-template-full-of-placeholders-problem}

Mae pob hyn yn dda, ond mae ein yn cyflwyno problem anhygoel: mae ein templateau site - sydd wedi eu gallu weithio gan benwerthwr ein - yn llawn o placeholderau anhygoel sy'n dweud llawer.

Iechyddu'r problem hwnnw, mae gennyf yn rhoi'r opsiwn o setio gwerthau palsam ar y placeholderau, ac yn defnyddio'r gwerthau hyn i chwilio a newid eu cynnwys ar y safonau template pan fydd eich cyddeeion yn ymweld â nhw.

Gallwch cyrraedd y redshonwr o editor placeholderau gan ddod i **Ultimate Multisite > Settings > Sites**, ac yna, ar y sidebar, gwch betaliad ar y linc **Edit Placeholders**.

![Site template settings under the Sites settings page](/img/config/settings-sites-templates-section.png)

Bydd hyn yn rhoi'n ddefnyddio i ddod i editor cynnwys y placeholderau, lle gallwch ychwanegu placeholderau a'u cynnwys cyflwynigol.

![Template placeholders content editor entry point](/img/config/settings-sites-templates-section.png)
