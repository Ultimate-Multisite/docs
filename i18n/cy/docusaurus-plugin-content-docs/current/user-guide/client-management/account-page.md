---
title: Laman Cyflenwr
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# Pagina Cyflenau'r Client (v2)

_**NOTIADOLIA CRYTIDOL: Mae'r ail ddefnyddiol hwn yn cyfeiriad i Ultimate Multisite fersi 2.x.**_

Pan mae cyd-deunyddwyr yn cyfrifolio plan ar eich rheiniad, mae ganddynt y cyfathrebu â wefan a ei dashboard gyda wybodaeth hanfodol am eu peidiadau, cyflenau, domenaid, gyfyngau planion, ac eisiau.

Yn y tutorial hwn, byddwn yn rhoi'r llwybr i chi trwy'r cyfathrebu'r cyflenau o'r cyd-deunyddwr ac byddwch yn gweld beth gall eu cyd-deunyddwyr gweld a wneud ynddynt.

## Y Cyflenau Account (The Account Page)

Mae'r cyflenau account yn cael ei cyffredin gan clisi ar **Account** yn y dyfyniad o'r cyd-deunyddwr.

![Meny gyflenau Account yn y dyfyniad o'r cyd-deunyddwr](/img/account-page/account-menu.png)

Ar rheiniadau tenant souveren, mae Ultimate Multisite v2.13.0 yn cadw'r profiad cyfathrebu hyn ar y wefan canol. Os mae cyd-deunyddwr yn agor account, checkout, billing, invoice, site-management, template-switching, neu domain-mapping o'r tenant souveren, mae'r gweithrediad yn cael ei dychwelyd i'r panel cyflenau canol ystafell, felly bydd y cadarnau peidiadau a gyflenau cyfrifol yn parhaol.

Pan fydd y cyd-deunyddwr yn cyrraedd o'r tenant souveren, gall y panel cyflenau canol ystafell gynnwys llwybr cyfathrebu i'r wefan tenant. Mae'r llwybr cyfathrebu yn cael ei dangos dim ond pan gall Ultimate Multisite gwneud ychwanegiad ar gyfer y taro cyflenau fel un o'r wefanau'r cyd-deunyddwr, gan roi'r ddefnyddio amrywiol i'r redirection yn ôl gyda chofio'r gweithrediad tenant.

![Oglwydd cyflenau account](/img/account-page/overview.png)

Ar ôl i'r cyd-deunyddwr clisi arno, bydd eu gweld amgylchedd o'u cyflenau, adran peidiadau, gyfyngau, domenaid, gyfyngau wefan, ac gall eu gwahaniaeth y **Site Template** (os yw'n cael ei gael yn eich rheiniad) hefyd.

Gall eu newid y cyflenau i plan arall, neu athrodd package neu weithrediad arall sy'n cael eich cynnig. Gadewch ydym yn gweld pob sefyllfa yn unig.

### Overwain Your Cyflen:

Yn bloc cyntaf o'r chwarae arallan ystafell eich cwsmeriaid yn dangos amgylchedd o'r plan a gwasanaethau/pachau a roedd wedi cael eu prynu gyda hi. Mae'r bloc hefyd yn dangos nifer y cyflenwedig, y aml i'r cyntaf a ddihonwyd ar gyfer ei chwarae, sut mae'r plan a unrhyw gwasanaeth/pachau yn costio ac sut amser wedi cael eu ddihonnu ar gyfer y cyflenwedig hwn. Gallai hefyd gweld os yw'r cyflenwedig **Actif**, **Mae wedi cael ei ddefnyddio** neu **Mae wedi cael ei ddefnyddio**.

![Overwain cyflenwedig yn dangos plan, aml, a gyfathiadau ddihonnu](/img/account-page/membership-card.png)

Arallan y bloc hwnnw, gall eich cwsmeriaid gweld y bloc **Am y Safon Hwn** a'r bloc **Cyflenau'r Safon**. Mae'r blocau hyn yn dangos pob hanes y mae'n dod â'r plan: safon diskw, posts, peïaethau, mynediadau, sns... Gallai'r cyflenau hyn cael eu cyfathoghio ar gyfer pob dudalen plan ar **Ultimate Multisite > Products**.

![Blocau Am y Safon Hwn a Cyflenau'r Safon yn dangos hanes y plan](/img/account-page/site-limits.png)

Ar y tagol o **Your Membership**, gall eich cwsmeriaid gwmel ar **Change**. Bydd hyn yn dangos eu cyflenwedig allan a pobachau/gwasanaethau. Os fyddant yn dewis plan arall, bydd y cyflenau ar gyfer y plan yn digwydd yn lle cyflenau'r cyflenwedig yr unigolion - nid oes rhywbeth i'w golygu os oes anrhydedd neu ddiwyrchu.

Mae hi'n ddefnyddiol hefyd iddo gwneud pobachau neu gwasanaethau ar gyfer y cyflenwedig hwnnw - fel mwy o safon diskw neu mynediadau - nid yn cael ei newid y cyflenwedig yr unigolion ond bydd y pobachau newydd wedi cael eu cytuno iddo.

Rydych chi'n gwrthnos bod codau coupon yn cael eu cytuno ar y peiriant hwnnw. Os roedd y cwsmeriaid wedi defnyddio cod coupon ar gyfer y pryd cyntaf, bydd y cod hefyd yn cael ei ddefnyddio ar y cyflenwedig newydd hwnnw.

### Cyfathoghio'r Rhestr o Dihonnu:

Ar gyfer y cyfrannau, gall eich cyddee'r cyddeithwyr ei rheoli ar gyferol y cyfeiriad gweidiol eu billing hefyd. Mae angen nhw i chwarae ar **Update** yn y cyflwyniad o _Billing Address_.

![Billing Address section with Update button](/img/account-page/billing-address.png)

Bydd gwndyn newydd yn dangos i'ch cyddeithwyr. Mae angen nhw i ddatblygu'r cyfeiriad newydd a chwarae ar _Save Changes_.

![Update billing address form](/img/account-page/billing-address-form.png)

### Newid y Model Cyfathrebu:

I gael eich cyddeithwyr ei allu newid eu modelau cyfathrebu, rhaid i chi fynd i **Ultimate Multisite > Settings > Sites** a chwarae ar y opsiwn **Allow Template Switching**.

 hefyd, ar **Ultimate Multisite > Products**, wybynwch eich planau a fynd i'r tab **Site Templates**. Rhowch i gyd yn siŵr bod y opsiwn **Allow Site Templates** wedi'i chwarae ac ar **Site Template Selection Mode**, rhaid i'r opsiwn **Choose Available Site Templates** fod wedi'i dewis.

![Product site templates tab with template selection mode](/img/config/product-site-templates.png)

Bydd eich bod yn gallu gweld pob model cyfathrebu sydd ar gael ar eich gwefan. Dewiswch y cyfathrebuau sy rydych chi eisiau cael eu cyflwyniad a'r cyfathrebuau sy nid oes angen ei fod ar gael i'ch cyddeithwyr sydd wedi'u cyflwyno gyda'r plan hwn. Rhowch i gyd yn sylw bod y opsiynau hyn hefyd yn effeithio ar ffurf y chefedd, felly bydd unrhyw model sydd wedi'i dewis fel **Not Available** nid yn dangos ar y peiriant cyfrannu ar gyfer y plan hwn.

Mae eich cyddeithwyr yn gallu chwarae ar **Change Site Template** yn y cyflwyniad o'u cyfrannau.

![Change Site Template button on account page](/img/account-page/change-template-button.png)

Ultimate Multisite 2.10.0 dangos panel newid modelau cyfathrebu wedi'i redig yn llawn. Mae'r panel yn dechrau gyda **current-template card** felly gall eich cyddeithwyr gweld y model sydd ar gael قبل eu dewis rhywbeth newydd.

Mae grid o adeiladau siatau ar gael yn parhaol yn gweld yn barhau wrth y tebygwyr sy'n ddarparu'r opsiynau eu. Mae hyn yn helpu nhw i gymparu'r adeiladau siatau a dylai eu plan heb colli gweld y dechrau ar gyfer eu wybodaeth.

![Llyfrgell adeiladau siatau ar gael ar gyfer y plan](/img/config/site-templates-list.png)

Ar ôl cryfalu y un sy'n dyriot i newid, bydd eu cael eu cyflwyno i sicrwydd y newid.

![Dialog cyflwyno newidi adeilad siatau](/img/account-page/template-switch-confirm.png)

Ar ôl gwneud y cyflwyno ar gyfer a clisi ar **Process Switch**, bydd y adeilad siatau newydd yn cael ei defnyddio ar wefan y tebygwr.

Gall tebygwyr hefyd defnyddio **Reset current template** o'r panel hwn pan iddyntai nhw angen i ddatblygu'r siat yn ôl adeilad siatau a cael ei gyflwyno ar gyfer. Fel ychwanegu i newid adeilad siatau, gallu'r reset adeilad siatau gwneud amlwg ystod y cynnwys ar wefan; felly, bydd tebygwyr yn cael eu cyflwyno hi pan fyddant nhw yn deall y gweithrediad o'r reset.

### Ychwanegu Ddrefion Custom (Custom Domains):

Bydd ei chynllunio tebygwyr hefyd fod yn cael eu opsiwn i drosu ddrefion custom ar gyfer y plan hwn ar wahaniaeth eu cyfrifau. I gael eich tebygwyr defnyddio ddrefion custom, mynd i **Ultimate Multisite > Settings >** **Domain Mapping**.

Gweld y opsiwn **Enable Domain Mapping**. Bydd hyn yn sylweddol i'r tebygwyr i ddefnyddio ddrefion custom ar lefel cynnwys.

Peidiwch â hoffi hefyd gweld os yw domain mapping wedi cael ei chynllunio ar gael ar gyfer y produs ar gyfer - oheron, gallwch limitio produs i ddylai nhw nid eu gallu defnyddio ddrefion custom.

Mynd i **Ultimate Multisite > Products**. Dewch y plan sy'n eich cyhoedd yn ei chwilio ac mynd i'r tab **Custom Domains**. Gweld y opsiwn **Allow Custom Domains**.

![Tab Custom Domains gyda gwahaniaeth Allow Custom Domains](/img/config/product-custom-domains.png)

Mae hyn yn sylw'r holl cyddeeion sydd wedi cael eu cyflwyno i'r plan hon i gael eu domennau custom. Ar hyn o bryd, ar y peidiad Cyfathrebu (Account page), gall eich cyddeeion ychwanegu domenaid custom gan clisiad ar **Add Domain**.

![Add Domain button on the account page](/img/account-page/add-domain-button.png)

Ynwyllwr cyntaf sydd yn agor fydd yn dangos i'ch cyddeeion ei ddefnyddio'r message sydd wedi'i gynnwys y ffurfau ar gyfer ychwanegu eu cyfrannau DNS i wneud y domenaid custom hon gweithredu ar eich rheol.

![DNS instructions shown when adding a custom domain](/img/account-page/add-domain-dns.png)

Gall y message hwn cael ei redig (gan rhaint) ar **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions**.

![Add New Domain Instructions setting in Domain Mapping](/img/config/settings-domain-mapping.png)

Dyma'r gweld cyfan o setegau mappio domenaid:

![Domain mapping settings full page](/img/config/settings-domain-mapping-full.png)

Ar ôl clisiad ar **Next Step**, gall eich cyddeeion ychwanegu eu enw domenaidd custom a dewis pwy bydd y domenaid custom hon yn unigol. Rhowch i gyd, gall eich cyddeeion defnyddio mwy na un domenaid custom ar eu gwefanau, felly gallu nhw dewis y cyfrannau sydd yn unigol.

![Custom domain name entry with primary domain option](/img/account-page/add-domain-primary.png)

Ar ôl clisiad ar **Add Domain**, bydd y domenaid yn cael ei drosu i'r peidiad eich cyddeeion. Mae pob hyn sydd wedi'i gynnwys i'w wneud nawr yw newid y cyfrannau DNS o'r domenaid custom hon ar eu rheol domenaidd (domain registrar).

### Newid Cyfeiriad:

Yn y dashboard peidiad, gall eich cyddeeion hefyd newid eu cyfeiriad gan clisiad ar **Change Password**.

![Change Password button on account page](/img/account-page/change-password-button.png)

Bydd hyn yn dangos gwydweliad newydd lle bydd ei ddefnyddwyr angen i fydd â'u cyfrifolau gyfrifol a ddilyn y cyfrifol newydd sy'n dyfynnu eu.

![Form newid cyfrifol gyda ffeiliau cyfrifol a cyfrifol newydd](/img/account-page/change-password-form.png)

### Zon Perysig:

Mae gennyfynion hefyd ddau opsiyn sy'n dangos ar gyfer y **Zon Perysig**: **Talyb Site** a **Talyb Cyfrifol**. Mae'r ddau hyn yn y zon perysig oherwydd mae'r gweithgareddau hyn yn anghyffredol. Os oes eich ddefnyddwyr yn talybu eu gwefan neu eu cyfrifol, nid oes gan nhw ddefnyddio eu allan.

![Zon Perysig gyda opsiyn Talyb Site a Talyb Cyfrifol](/img/account-page/danger-zone.png)

Os mae eich ddefnyddwyr yn clisi ar unrhyw un o'r ddau opsiyn hyn, bydd eu cael ei dangos gwydweliad lle bydd angen nhw i chwarae'r opsiwn i dod â'r gwefan neu cyfrifol yn ôl a bydd eu cael ei ddefnyddio'r addysg bod y weithgaredd hwn nid yw'n gallu cael ei ddefnyddio.

![Cyfathrebu Talyb Site](/img/account-page/delete-site-confirm.png)

![Cyfathrebu Talyb Cyfrifol](/img/account-page/delete-account-confirm.png)

Os fyddant yn talybu eu gwefan, bydd eu cyfrifol a chwaraebyddau'n parhau i fod yn unig. Bydd nhw yn colli pob cynnwys ar eu gwefan. Os fyddant yn talybu eu cyfrifol, bydd pob wefan, chwaraebyddau a wybodaeth am y cyfrifol hwn yn cael ei colli.
