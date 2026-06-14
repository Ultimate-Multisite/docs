---
title: Y Ffylchion Cyflwyniad
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# Y Ffylgyrchu (v2)

_**NOTIADOLIA CRYTÔ: Mae'r ail nghydig hwn yn cyfeiriad i Ultimate Multisite versio 2.x.**_

Gall y bywogion dysgu mewn rhywfaint o ffordd ar gyfer eich rheiniant. Gallu eu defnyddio eich ffurflen ffylgyrchu neu linc arosol i un plan wedi'i dechrau cyntaf. Yn yr adran hwn byddom ni ddweud wrth chi sut gall y gallwyr eich rhannu ar gyfer y rheiniant eich network yn defnyddio'r fforddion sydd ar gael a beth sydd yn digwydd ar ôl eu fylgyrchu ar gyfer y rheiniant.

## Defnyddio'r Ffurflen Ffylgyrchu:

Mae hyn yn gyfnod fylgyrchu standard. Mae'ch ddefnyddio'r ffurflen fylgyrchu gyda **checkout form** a fydd hyn yw lle bydd y gallwyr eich rhannu i defnyddio ar gyfer y rheiniant eich network a chynllunio un plan. Gallwch gael pethau fylgyrchu amserol, gyda phfurflen fylgyrchu gwahanol ar gyfer pob un os i eisiau.

Mae'r fpeidiad cyffredinol ar gyfer fylgyrchu yn [_**yourdomain.com/register**_](http://yourdomain.com/register), ond gallwch newid hyn unrhyw amser ar **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

Ar ôl i'r bywog cyrraedd eich fpeidiad fylgyrchu (yn y pethau yn cael eu gwchllio ar gyfer "Sign in" neu "Buy now"), bydd eu canol y ffurflen fylgyrchu.

![Ffurflen fylgyrchu wedi'i dangos ar y peidiad fylgyrchu](/img/frontend/registration-form.png)

Dyma un مثال o ffurflen checkout fel yr ydych yn cael ei ddangos ar y frontend:

![Ffurflen fylgyrchu checkout frontend](/img/config/checkout-frontend-registration.png)

Mae angen eu gwneud yn llwyr i llenwi pob ffeil hanfodol - email, username, cyfradd, gan ychwanegau... - a llai ar gyfer y plan neu ddatblygu eu ffeil yr oeddent yn defnyddio ar gyfer un plan neu ddatblygu gyda phiriad heb wybodaeth o ddarlun.

Ar y peidiad "Diolch", bydd eu canol un sefyllfa yn dywed eu a oes angen eu cyffredin y ffeil eu cyffredin neu iddo'r gwefan wedi cael ei chynllunio'n ddefnyddio ac gallu entynnu.

![Thank You page after registration](/img/frontend/registration-thank-you.png)

Os oes angen gynnig y cyfeiriad ar gyferbyniad. Os oes angen cyfathoghio'r enell, bydd eu hunain yn angen mynd i'r ffurflen ei enell a chwilio ar y linc cyfathoghio. Nid fydd y dyfynnu'r gwefan yn cael ei gweithredu os nad oes gan ei gyfeiriad ymlaen.

Os roedd nhw wedi gyfeirio ar ffurf plan cyfaedig neu nid yw cyfathoghio'r enell yn hanfodol ar eich rheini, bydd eu gwefan yn cael ei gweithredu ar unwaith ar ôl y chefnogaeth a fynd eu gweld linc i dcyflwyno i'w dashboard.

![Site activated with link to sign in to dashboard](/img/frontend/site-activated.png)

## Defnyddio Linc Cyfathoghio:

Mae'r proses o gyfeiriad gan ddefnyddio linc cyfathoghio yn gymharu'n debyg â ffurflen gyfeiriad, ond y gwahaniaeth unig yw bod eich cleientau yn gallu gael prodde neu model wefan wedi'i ddefnyddio ar y ffurflen chefnogaeth ar y chefnogaeth (gwylch i'r sefyllfa Pre-selecting products and templates via URL parameters) neu edrych fel codwedd coupon a ddefnyddio (gwylch i'r sefyllfa Using URL Parameters).

Bydd y proses gyfeiriad yn unig: bydd angen eu cyflwyno enw, enw defnyddiwr, enell, enw wefan a teitl, neu bethau sydd arall... ond bydd y plan neu model wefan wedi'i ddefnyddio i'u gael.

### Gyfeirio Trwy Płatheir Manwl:

Os ydych chi nid yn gallu defnyddio PayPal, Stripe neu unrhyw gyfathoghio'r peiriant a cael ei offerwyd gan Ultimate Multisite neu ei chyddeallion ychwanegol, gallwch ddefnyddio płatheir manwl ar gyfer eich cleientau. Yn y ffordd hwn, gallwch gyflwyno ffurflen i'u gael eu cyfathoghio ar y peiriant a fydd yn cael ei ddefnyddio ganrhaol ar eich rheini ar ôl eu gyfeirio ar eich rheini.

Bydd y proses gyfeiriad yn unig fel o fewn ymlaen, ond ar y ffurflen gyfeiriad bydd eu cleientau'n gweld mesgar sydd â chwarae am enell gyda chyfarwyddiadau ymlaen i ddefnyddio'r płatheir.

![Manual payment message during registration](/img/frontend/registration-manual-notice.png)

Ac ar ôl cyflwyniadau peiriant yn ystod y cyfraddiad, ac ar ôl cyflymiad y cyfraddiad, bydd eu gweld y cyfarwyddiadau peiriant sy'n cael eich cyfathoghio (ac bydd hefyd yn cael ei derbyn yn eu e-bost).

![Payment instructions shown after registration](/img/frontend/registration-payment-instructions.png)

Gallu newid y cyfarwyddiadau peiriant ar **Ultimate Multisite > Settings > Payments** ar ôl gwneud y opsiwn peiriant **Manual**:

![Manual payment toggle with payment instructions field](/img/config/manual-gateway-settings.png)

Ar ôl i'ch cyddeeau gwblhau'r peiriant manual a anfon eu cyfathoghion i chi, mae angen i chi **cynfod y peiriant yn manwl** i gael y cyfraddiad o ddefnyddio (activate) y cyfraddiad ac wefan y cyddeeau.

I wneud hynny, mynd i **Ultimate Multisite > Payments** a chwilio am y peiriant y cyddee. Byddai'n dangos status **Pending**.

![Payments list with pending manual payment](/img/admin/payments-list.png)

Cliciw ar y enw y peiriant ac byddwch yn gallu newid ei status i **Completed**.

![Payment details page](/img/admin/payment-edit.png)

![Changing payment status to Completed](/img/admin/payment-status-completed.png)

Ar ôl newid ei status i **Completed**, byddai'n gweld y message **Activate membership** (Cyflwyno cyfraddiad). Gwahaniawch y opsiwn hwn yn **on** i gyflwyno'r cyfraddiad a wefan sy'n cael ei gysylltu â'r cyddee hon. Yna, clictiwch i **Save Payment** (Cynfod peiriant).

![Activate membership toggle and Save Payment button](/img/admin/payment-activate-membership.png)

Bydd eich cyddee yn gallu cyrraedd y dashboard a'r holl ffeithiau sy'n cael eu cyflwyno.
