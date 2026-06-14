---
title: Gwylio eich ffurf cyfrannu
sidebar_position: 17
_i18n_hash: 13f72671d55f48becd6bd89f6571f111
---
# Customizing eich Ffurfwrdd Cyflwyniad

Iechon eich rheol yn ddeall yn unig o'r holl SaaSau a cael eu gweithredu ar ffurfwrdd WordPress, mae Ultimate Multisite yn sylw i chi allu gwneud eich pagedd cyflwyniad a cyflwyniad gyda'r ffurfwrdd **Checkout Forms** ein.

Er bod nhw'n ffordd einfailig a chydweithiol i gymryd ysbrydion gyda'r ddefnyddio ddethau gwahanol pan fyddwch yn ceisio newid cleiention newydd, mae hi'n cael eu defnyddio'n fwyaf i creu ffurfwrdd cyflwyniad personol. Mae'r ail ddefnyddi hwn yn dangos i chi sut allwch chi wneud hynny.

## Pagedd cyflwyniad a chwarae:

Ar ôl cael eich rhannu Ultimate Multisite, mae hi’n creu pagedd cyflwyniad a chwarae newydd ar eich safle canol yn awtomatig. Gallwch gwahanu'r pagedd hyn yn unrhyw pryd gan fynd i'r pagedd **Ultimate Multisite > Settings > Login & Registration**.

![Pagedd setegau cyflwyniad a chwarae](/img/config/settings-general.png)

Dyma'r gweld cyfan o'r pagedd setegau cyflwyniad a chwarae:

![Pagedd setegau cyflwyniad a chwarae yn llawn](/img/config/settings-login-registration-full.png)

Gwylio'n ddefnyddio pob un o'r opsiynau sy gallwch chi gwahanu ar y pagedd **Login & Registration**:

  * **Enable registration (Gofal cyflwyniad):** Mae'r opsiwn hwn yn chwanegu neu ddifynnu'r cyflwyniad ar eich rheol. Os mae hi wedi cael ei ddwynio allan, nid yw'r cleiention yn gallu cyflwyni a chwarae i'ch cynlluniau.

  * **Enable email verification (Gofal cyflwyniad e-bost):** Os mae'r opsiwn hwn wedi cael ei ddwynio allan, bydd y cleiention sy'n chwarae am plan rhanbarth neu plan gyda phroses weithredol bydd yn cael e-bost cyflwyniad ac byddant yn angen i ddarganfod ar y linc cyflwyniad i gael eu safleoedd aros.

* **Pagadu cyfrifolion (Default registration page):** Mae hyn y peidiad cyfrifolion ar gyfer cyfrifolion newydd. Mae'r peidiad hwn angen i'w rhoi ar eich gwefan a fydd â ffurf cyfrifolion (ganid agor yn cael ei gweld hefyd) - lle bydd ychwanegwyr eich cynrychioli eich cynnyrchau. Gallwch creu pethau cyfrifolion a ffurfiadau cheictw (checkout forms) am gyfyngedig chi eisiau, ond cofio i rhoi'r shortcode cheictw ar y peidiad cyfrifolion, er ei ddim yn cael hynny, nid yw'n cael ei gweld.

  * **Defnyddio peidiad cyfrifolion (Use custom login page):** Mae'r opsiwn hwn yn gallu chi defnyddio peidiad cyfrifolion wedi'i chysylltu, ar gyfer peidiad cyfrifolion allan y peidiad wp-login.php fel ddefnyddiol. Os mae'r opsiwn hwn yn cael ei gynnwys, gallwch ddewis y peidiad a fydd yn cael ei ddefnyddio ar gyfer y cyfrifolion ar **Peidiad cyfrifolion cyffredinol (Default login page)** (ar gael isel ymlaen).

  * **Gwylio'r llwybr cyfrifolion angen (Obfuscate the original login url (wp-login.php))**: Os ydych chi eisiau gwneud y llwybr cyfrifolion angen yn gwbl, gallwch gynnwys y opsiwn hwn. Mae hyn yn ddefnyddiol i'w roedd brasterau (brute-force attacks) i'w droi. Os mae'r opsiwn hwn yn cael ei chynllunio, bydd Ultimate Multisite yn dangos eror 404 pan fydd ybain yn ceisio cyffredin â'r lwybr wp-login.php angen.

  * **Gofio'r cyfrifolion sydd yn cael eu cyflwyno (Force synchronous site publication)**: Ar ôl i'w cynrychioli chwaraewr ar peth ar y rheol, mae'r peidiad newydd sydd yn cael ei ddefnyddio angen i fod yn llwybr peidiad gwefan neu. Mae'r proses cyfrifolion yn digwydd drwy Job Queue, yn asgynol (asynchronously). Gallwch ymlaen y opsiwn hwn i'w gofio bod y cyfrifolion yn digwydd yn yr un gyfle fel y cynrychioliad.

Mae'n gweld ychwanegau eraill sydd yn parhaol i'r proses cyfrifolion a chwaraewr. Mae'n cael eu gweld isel ar **Opsiadau eraill (Other options)** ar yr un peidiad cyfrifolion a chwaraewr:

  * **Rol cyffredinol (Default role):** Mae'r rol y mae eich chwaraewr yn cael ar ei gwefan ar ôl y proses cynrychioliad.

* **Gofalwch Jumper:** Mae'r Gofalwch (Jumper) yn sylw'r cyffredinol o'r admin area. Mae'r Jumper yn sylw i'r adminau i ddod yn gyflym i ddefnyddio screenau Ultimate Multisite, obydau cyd-llwybr (network objects), a destynau eraill sydd wedi'u chynllunio heb gwesoio drwy gydol y menu. Troswch ef os ydych chi eisiau gwahaniaeth i'r ffurf cyflym hwn o ddefnyddio o'r gyfnod admin.

* **Ychwanegu benau i'r safle cyflym hefyd:** Bydd ychwanegu'r opsiwn hwn yn ychwanegu'r benau i'r safle cyflym o'r safle main eich rheini ar ôl y proses cyfathrebu. Os ydych chi'n sylw'r opsiwn hwn, bydd opsiwn i setio'r **rol cyffredinol** (default role) y benau hyn ar eich gwefan hefyd yn dangos osodol isel.

* **Gofalwch cyfathrebu amserol:** Mae'n sylw i benau i gael cyfathrebu mewn safleoedd eraill o'r rheini eich network gyda'r uniad cyfathrebu fel email unig. Os ydych chi'n sylw'r opsiwn hwn yn off, nid yw eich cydweithwyr yn gallu creu benau ar wefanau eraill sydd ar gweiniant eich rheini gyda'r uniad cyfathrebu fel email unig.

Ac mae hyn i gyd yn y opsiynau sydd wedi'u chynllunio sydd â'r cyflwyniad a gyfrannu! Peidiwch â hoffi'r seteffau eich ar ôl i ddefnyddio eu.

## Defnyddio ffurf cyfathrebu amserol amserol:

Mae Ultimate Multisite 2.0 yn cynnig redactor ffurf cyfathrebu (checkout form editor) sy'n sylw i chi i creu pethau cyfathrebu nawr yr ydych eisiau, gyda chyflenau cyffredinol, cynlluniau a chwarae ar gael, sns.

Mae pagedd cyfathrebu (login page) a pagedd cyfathrebu (registration page) wedi'u cynnwys gyda shortcodes: **[wu_login_form]** ar pagedd cyfathrebu a **[wu_checkout]** ar pagedd cyfathrebu. Gallwch chi roi chynlluniau eraill i'r pagedd cyfathrebu gan ddefnyddio neu creu ffurfau cyfathrebu (checkout forms).

I dod o hyd i'r fäith hon, mynd i'r menu **Checkout Forms**, ar y llawr o'r sidebar.

![Checkout Forms menu in the sidebar](/img/config/checkout-forms-list.png)

Ar y pagedd hwn, gallwch gweld pob ffurf cyfathrebu sydd chi wedi'i creu.

Os ydych chi eisiau creu un newydd, gwchwch ar **Add Checkout Form** ar y ddefnyddi o'r pagedd.

Gallwch un un o'r tri opsi hyn fel نقطddiad cynnes eich dechrau: single step (un cyflwyniad), multi-step (cyflwyniadol), neu blank (talyb). Yna, cliwch i **Go to the Editor** (Gwneud i'r Editor).

![Add Checkout Form with single step, multi-step, or blank options](/img/config/checkout-forms-list.png)

Arall, gallwch redig neu dduplikat y ffurfau sy roedd chi wedi'u gynnwys gan cliw ar y opsiynau o'r lleol yn eu cyflwyno. Yn y cyflym hwn hefyd fyddwch chi ddod i'r opsiynau i copio'r shortcode y ffurf neu i ddefnyddio'r ffurf.

![Checkout form hover actions with edit, duplicate, and delete](/img/config/checkout-form-hover-actions.png)

Os gwahironwch single step neu multi-step, bydd y ffurf cyflwyniad yn cael ei gyflwyno gyda chyflwyniadau sylfaenol i'i gweithio. Yna, os oes angen, gallwch chi dros y cyflwyniadau extra iddo ychwanegu.

### Redig Ffurf Cyflwyniad:

Fel y ddyfynaiwn yn ymlaen, gallwch creu ffurfau cyflwyniad ar gyfer gymharu o'r amgylchedd. Yn yr adran hwn byddwn ni weithio ar ffurf cyflwyniad cyfrifoldeb (registration form).

Ar ôl mynd i'r editor y ffurf cyflwyniad, rhoi enw i'ch ffurf (sy bydd yn cael ei ddefnyddio yn gyfrifol yn unig) a slug (a ddefnyddir i creu shortcakes, felly).

![Checkout form editor with name and slug fields](/img/config/checkout-form-editor.png)

Mae ffurfau wedi'u gwneud o cyflwyniadau a ffeiliau. Gallwch chi dros ychwanegu cyflwyniad newydd gan cliw ar **Add New Checkout Step** (Ychwanegu Cyflwyniad Newydd).

![Add New Checkout Step button](/img/config/checkout-form-add-step.png)

Ar y cyflwyniad cyntaf o'r gwydl window, llenwi'r cynnwys y cyflwyniad eich ffurf. Rhoi ID, enw a disgrifiad. Mae'r prifau hyn yn cael eu defnyddio yn unig mewn cyfrifol.

![Checkout step content tab with ID, name, and description](/img/config/checkout-form-step-content.png)

Yna, rhoi'r amgylchedd y cyflwyniad. Gallwch chi dewis rhwng **Always show** (Ddefnyddio bob amser), **Only show for logged in users** (Deffroi yn unig ar gyfer benn cael eu cyfrifol) neu **Only show for guests** (Deffroi yn unig ar gyfer gaeau).

![Checkout step visibility options](/img/config/checkout-form-step-visibility.png)

Isolwch yn edrych ar y styl ystafellau. Mae'r ffeillion hyn yn ffeillion allweddol.

![Checkout step style configuration](/img/config/checkout-form-step-style.png)

Mae angen i chi dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen i dros ymlaen

![Bwrddau'r bot yn y ffurf checyn](https://example.com/img/config/checkout-form-preview-button.png)![Prehelu ffurf checyn fel y myfyrwyr neu benyddol](/img/config/checkout-form-preview-modal.png)

Isaf, ar **Advanced Options** gallwch sicrwy'r message ar gyfer y peidiad **Thank You**, ychwanegu snippets i ddefnyddio eu cyflwyniadau (conversions), ychwanegu CSS manwl i ffurf checyn eich ffurf, neu redegol ei fod yn cael ei redegol i ddinasau penodol.

![Advanced Options gyda peidiad Thank You, traeddiadau cyflwyniadau, a CSS manwl](/img/config/checkout-form-advanced.png)

Gallwch hefyd gael eich ffurf checyn yn weithredol neu redegol gan ddefnyddio'r opsiwn hwn ar y llawr o'r col yn gyferol, neu ddifynnu'r ffurf yn llawn.

![Togol weithredol a opsiwn ddifyniad ar gyfer ffurf checyn](/img/config/checkout-form-active.png)

Peidiwch â hoffi dod o hyd i eich ffurf checyn!

![Bwrddau'r ffurf checyn](https://example.com/img/config/checkout-form-save.png)

I gael eich shortcode y ffurf, cliw ar **Generate Shortcode** a cop y resgell a ddangos yn y window modal.

![Modal Generate Shortcode gyda shortcode i cop](/img/config/checkout-form-editor.png)

_**Not:** Byddwch yn angen i drosgl y shortcode hwn ar eich peidiad cyfrifol i fod y ffurf checyn hwn wedi'i ychwanegu i'r peidiad hwn._

## Pre-seilio cynlluniau a templaethau drwy parametrau URL:

Os ydych chi eisiau creu tabliadau prysau manwl ar gyfer eich cynlluniau a pre-seilio ar y ffurf checyn y cynllun neu'r templaeth sydd yn cael ei ddefnyddio gan eich cleient o'r peidiad eich tabliadau prysau neu'r peidiad templaethau, gallwch ddefnyddio parametrau URL i hyn.

### **Ar gyfer cynlluniau (plans):**

Gewe ar **Ultimate Multisite > Products > Select a plan**. Doddiwch yn gweld y bot **Click to copy Shareable Link** ar y llawr o'r peidiad. Mae hwn yw'r link sydd yn gallwch ddefnyddio i pre-seilio'r cynllun penodol hwn ar eich ffurf checyn.

![Peidiad cynlluniau gyda bot link cyfrifol](/img/config/products-list.png)

Mae'n nod yn hanfodol i gyd-fyddiaeth hwnnwch yw bod y linc a chyfathriwyd yn gywir yn unig ar gyfer **Plans**. Nid oes unrhyw ddefnyddio lincau cyfathriwyd ar gyfer cyddeithiau neu gwasanaethau.

### Ar gyfer modelau (templates):

Os ydych chi eisiau gwilio'r modelau safle ar gyfer y ffurf cheddor eich cheddor, gallwch ddefnyddio'r parametrau: **?template_id=X** ar gyfer URL y peiriant eich cyfrifolion. Mae angen i'r "X" ei allw'r **nifer ID model safle**. I gael y nifer hwn, myndwch i **Ultimate Multisite > Sites**.

Cliciwch ar **Manage** osod y model safle sydd yn eich hoffi defnyddio. Byddwch yn gweld y nifer SITE ID. Defnyddiwch yr unifol hwn ar gyfer y model safle honno i fod wedi'i gwilio'r cheddor eich cyfrifolion. Yn ein cas, bydd y parametrau URL yn dod yn **?template_id=2**.

![Sites list showing site template ID](/img/config/site-templates-list.png)

Os ydych chi eisiau, gallwch gwilio'r droseddau a'r modelau safle i eich cheddor cyfrifolion hefyd. Mae angen i chi ddynnu'r linc cyfathriwyd y plan ac yn ddefnyddio'r parametrau model safle ar ben y diwedd. Bydd yn dod yn llai fel **www.mynetwork.com/register/premium-plan/?template** (www.mynetwork.com/register/premium-plan/?template)**_id=2**.
