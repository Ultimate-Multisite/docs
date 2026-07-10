---
title: Formau y cheffr
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Fomau Checkout {#checkout-forms}

Mae Fomau Checkout yn ffordd einfaldig a chyniferus i gymryd am ymarferiad gyda'r ddefnyddiau cyffredinol pan fyddwch yn ceisio gwari newyddol o ddeimladau.

Mae Ultimate Multisite 2.0 yn cynnig redytwr Fomau Checkout sy'n sylw i chi i creu pethau fwy o fomau fel y gallwch, gyda phaelau cyffredinol, cynnyrchion a chwarae ar gael, sns.

I gosod ystafell hwnnw, mynd i'r menu Checkout Forms, ar y llawr-bar yn y cefn.

![Checkout Forms list](/img/config/checkout-forms-list.png)

Ar y peidiad hwn, gallwch gweld pob fomau checkout syddai gyda chi.

Mae'r tablu llisau mae ganolbwynt **Status** fel colbwr, felly gallwch sicr ydy'n ddefnyddio pob fom yn cyfathogh i'r cyddeeau ar hyn o bryd:

| Status | Cyfieithiad |
|---|---|
| **Active** | Gallai'r fom ei ddefnyddio mewn unrhyw lle mae ei shortcode neu peidiad cyfrifol wedi'i gyhoeddi. |
| **Inactive** | Mae'r fom wedi'i cadw i'r chwarae ond mae'n dysgynol. Nid oes gan y cyddeeau gallu gwblhau'r checkout gyda hi heb eich bod yn ei gael yn ddefnyddio eto eto. |

Defnyddiwch y colbwr status قبل ysbrydoli fform cyfrifol, yn enwedig pan mae'n cael chi'n cadw fomau checkout draff neu rheolion gwyliau gyda'r fomau byw.

Os ydych chi eisiau creu un newydd, gwch chi i'r "Add Checkout Form" ar y ddefnyddiad o'r peidiad.

Gallwch ddewisun un o'r tri opsiyn hyn fel cyntaf eich dechrau: un step, aml-step neu blanga. Yna, cliwch i Gae i'r Editor.

Pan wybennwch **single step** neu **multi-step** fel cyntaf eich dechrau, mae'r model fomau yn cynnig faelau **Template Selection** yn ddefnyddiol yn ddefnyddiol. Mae'r fael hwn yn sylw i'r cyddeeau i ddewisun model lleoliad yn ystod y proses cyfrifol. Gallwch ei gadw yn ddefnyddiol, dod â'r fael hwn, neu gyfathri'r fael hwn fel unrhyw fael arall yn y editor.

![Checkout Form editor](/img/config/checkout-form-editor.png)

Ar gyferbyn, gallwch redig neu dduplikat y ffurfau sy'n cael eu cyflwyno oethau yn ôl gan clisi ar y opsiynau isel ei enw. Yn yma hefyd byddwch yn dod i gael y opsiynau i copio'r shortcode y ffurf neu wedi terfynnu'r ffurf.

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

#### Oglwydd y Editor Ffurf Checkout {#checkout-form-editor-overview}

Mae'r editor ffurf checkout yn rhoi cyfathrebu amgylcheddol i guberddu eich ffurf cyfrifolion. Dyma wahanol o'r llwybr y editor:

![Checkout Form editor overview](/img/config/checkout-form-editor-overview.png)

### Redig Ffurf Checkout {#editing-a-checkout-form}

Gallwch creu ffurfau checkout ar gyfer gymharu pethau gwahanol. Yn y مثال hwn byddwn yn gweithio ar ffurf cyfrifolion.

Ar ôl mynd i'r editor ffurf checkout, rhoi enw i'ch ffurf (syllwch a fydd yn cael ei defnyddio ar gyfer cyfeiriad anoddol yn unig) a slug (a fydd yn cael ei ddefnyddio i creu shortcakes, er enghasz).

![Checkout Form editor](/img/config/checkout-form-editor.png)

Mae ffurfau wedi'u gwneud o adegau a ffeiliaid. Gallwch ychwanegu adeg newydd gan clisi ar Add New Checkout Step.

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

Ar y cyflwyniad cyntaf o'r gwydl modal, gwblhauwch y cynnwys y adeg eich ffurf. Rhowch ID, enw a disgrifiad i'i. Mae'r prif o'r itemau hyn yn cael eu defnyddio ar gyfer gymharu anoddol yn unig.

![Checkout form step content tab](/img/config/checkout-form-step-content.png)

Yna, rhoi'r cyflwyniad y adeg. Gallwch ddwylo rhwng "Always show" (Ddefnyddio bob amser), "Only show for logged in users" (Dangos yn cael ei ddefnyddio ar gyfer benn wedi'u cyfrifol) neu "Only show for guests" (Dangos yn cael ei ddefnyddio ar gyfer gwestyn).

![Checkout form step visibility tab](/img/config/checkout-form-step-visibility.png)

Isaf, cyflawni'r styl y adeg. Mae hyn yn ffeiliaid allweddol.

![Checkout form step style tab](/img/config/checkout-form-step-style.png)

Nychw, mae angen i chwilio ffeiliaid i'r adeg gyntaf ein. Caru i Add New Field a wybello'r rheol y dyfodol sydd yn dymunio.

![Checkout form step with fields](/img/config/checkout-form-step-with-fields.png)

Mae'r unigol sydd â'r ffeiliau yn cael eu cyflwyno. Ar gyfer y cyflwyniad cyntaf hwn, byddom ni'n dewis y ffeil "Username".

![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

![Username field content settings](/img/config/checkout-form-username-content.png)

![Username field visibility settings](/img/config/checkout-form-username-visibility.png)

![Username field style settings](/img/config/checkout-form-username-style.png)

Gallwch apello'r amserau a'r ffeiliau sydd â'u angen. Iysbu eich cynnyrchion i ddangos eich cynrychiadau i'ch cyddeeiriau i dewis un, defnyddiwch y ffeil Pricing Table. Os ydych chi eisiau gael eich cleientau dewis eu model, refwch y ffeil Template Selection. A chwarae hynny a dynion arall.

![Add New Field dialog](/img/config/checkout-form-add-field-dialog.png)

_**Meddefnyddio:** mae username, email, password, site title, site URL, order summary, payment, a'r bot cyflwyno yn ffeiliau hanfodol i creu ffurf cynnyrchion._

Er byddwch yn gweithio ar eich ffurf cynnyrchion, gallwch chi ddefnyddio'r butyn Preview i weld sut bydd eu cleientau'n gweld y ffurf. Gallwch hefyd gwahaniaethu rhwng gweld fel defnyddiwr sydd wedi'i creu neu gyfarfodol.

![Checkout Form preview button](/img/config/checkout-form-preview-button.png)

![Checkout Form preview modal](/img/config/checkout-form-preview-modal.png)

Isaf, ar Advanced Options gallwch chi gynllun y message ar gyfer y peidiad "Thank You", apello'r snippetau i ddefnyddio i gwylio'r cyfathrychiadau (conversions), apello'r CSS custom i eich ffurf cynnyrchion neu restrwch iddo'r wladau penodol.

![Advanced Options](/img/config/checkout-form-advanced.png)

Gallwch hefyd gael eich ffurf cynnyrchion yn weithredol neu ddefnyddio'r opsiwn hwn ar y colyn o'r gadarn, neu ddifaisio'n diwyll yn llawn y ffurf.

![Active toggle](/img/config/checkout-form-active.png)

Ie'n doddeu ffurfyn form, gwchyddu'r opsiwn o ddefnyddio yn y gweithredoedd y form:

![Checkout form delete option](/img/config/checkout-form-delete.png)

Peidiwch â hoffi i sicrhau eich form checkout!

![Save button](/img/config/checkout-form-save.png)

I gennych eich shortcode o'r form, gwchyddu ar "Generate Shortcode" a cop y resgyn a ddangos yn y window modal.

![Save button with shortcode](/img/config/checkout-form-save.png)

### Y Faeld Tablau Prifynol (The Pricing Table Field) {#the-pricing-table-field}

Mae'r faeld **Pricing Table** yn dangos eich cynnyrchon ar form checkout felly gall y golygu'r cyd-llwybrau'r cleientau. Pan fyddwch yn redig y faeld hwn, gallwch ddefnyddio'r amrywiol o opsiynau:

![Pricing Table field settings](/img/config/pricing-table-field-settings.png)

Dyma sut mae'r tabl prifynol yn dangos ar form cyfrifol y cyflwyniad (frontend):

![Frontend checkout pricing table](/img/config/frontend-checkout-pricing-table.png)

  * **Products**: Dewch wedi debyg y cynnyrchon i ddangos a'r ord yn y maesau sydd yn dangos.
  * **Force Different Durations (Forcei Dduron Niweddirol)**: Pan fydd yn cael ei chynllunio, mae pob cynnyrchon yn cael ei dangos nid oes ganddo amrywiol o gynnwys y cyfnod cleidiant sydd wedi'i debyg ar gyfer y cyfnod cleidiant a ddefnyddir. Pan fydd yn cael ei ddebyg (default), mae cynnyrchon heb amrywiol i'r cyfnod a ddefynwyd yn cael eu gwahanu.
    ![Pricing table force durations option](/img/config/pricing-table-force-durations.png)
  * **Hide when Pre-Selected (Gwylio Pan Debyg)**: Mae'n gwylio'r tabl prifynol pan fod y cynnyrchon wedi cael ei debyg drwy'r URL (e.e., `/register/premium`).
  * **Pricing Table Template**: Dewch wedi debyg y amrywiol o ddarparu ar gyfer y tabl prifynol (Simple List, Legacy, etc.).

Os ydych chi'n cytri cynnyrchon i'r Tabl Prifynol قبل y form mae'r faelau sydd yn hanfodol i ddod o'r cyflwyniad y cynnyrchon hwnnw, mae'r redig yn dangos rhybais. Defnyddiw y rhybais i dros y faeld hanfodol a ddifynwyd قبل y cyflwyniad neu sicrhau newidiadau ar gyfer form cyfrifol bydd yn cael ei chwarae.

### Ymlo Addi'r Taliadau Cyflwyniad {#adding-a-period-selection-toggle}

Os oes gennych chi'n cyfathoghio [Price Variations](creating-your-first-subscription-product#price-variations) ar eich cynnyrion (fel, prisau manwl a annal), gallwch chi ychwanegu field **Period Selection** i eich ffurflen cheictw. Mae'r field hwn yn dangos taliad (toggle) sy'n sylwtu i'r cyd-deithio rhwng cyfyngau cyfathrebu, ac mae'r tablaw prisau yn cyfresgu'n dynamig mewn amser byr.

#### Cynllun 1: Cyflwyno Price Variations ar eich cynnyrion {#step-1-set-up-price-variations-on-your-products}

Trước ychwanegu field Period Selection, sicrhewch bod eich cynnyrion wedi'u cyfathoghio gyda price variations. Ymddangos i **Ultimate Multisite > Products**, redig cynnyrion, a mynd i'r tab **Price Variations** i chwilio am cyfyngau cyfathrebu allweddol (fel, Annol ar pris yn ddefnyddiol).

![Tab Price Variations ar cynnyrion](/img/config/product-price-variations-tab.png)

#### Cynllun 2: Ychwanegu field Period Selection i eich ffurflen cheictw {#step-2-add-the-period-selection-field-to-your-checkout-form}

1. Myddwch i **Ultimate Multisite > Checkout Forms** a redig eich ffurflen cheictw.

2. Sgroli i'r cynllun sy'n cynnwys eich field **Pricing Table** a chwilio am **Add new Field**.

3. Yn y dialog wybodaeth ffeil, chwilio am **Period Select**.

![Dialog Add New Field yn dangos Period Select](/img/config/checkout-form-add-field-dialog.png)

4. Cyflwynwch y opsiynau cyfyngau. Mae'r unigol dyna'n angen:
   * **Duration**: Ynwaith (fel `1`)
   * **Duration unit**: Rheol cyfyngau (Days, Weeks, Months, neu Years)
   * **Label**: Ystodwr y tekst sydd yn dangos i'r cyd-deithwyr (fel "Monthly", "Annual")

5. Chwilio am **+ Add Option** i chwilio am cyfyngau cyfathrebu mwy. Mae’r opsiynau hyn yn dda fod yn cyfresgu â'r price variations sydd wedi'u cyfathoghio ar eich cynnyrion.

![Cyflwyniad field Period Selection](/img/config/period-selection-field-settings.png)

6. Dechrau **Period Selector Template** (Clean yw'r ddefnyddiol yn defnyddiol, sy'n cyfresgu'n gweledwr cyfyngau syml wedi'i chwarae i'r CSS custom).

7. Clicwch ar **Save Field**.

#### Cynllun 3: Lleolwch y Faeld Isod y Tabl Prifynau {#step-3-position-the-field-above-the-pricing-table}

Ar gyfer profiad gweithredol sy'n ddaest, sicrhewch bod y faeld Seiliedig y Cyfnod yn dangos **oherwydd** y Tabl Prifynau mewn cynllun eich checkout. Gallwch llwybr y faelau i newid eu cyflwyniad yn y redactor ffurf checkout. Mae hyn yn rhoi'r cyd-destunwyr i ddewis y cyfnod gyfrifol argyntaf a ddlygu'r prifynau am y cyfnod hwnnw.

![Checkout form editor showing field order](/img/config/checkout-form-editor-with-fields.png)

#### Sut mae hyn yn gweithio ar y Frontend {#how-it-works-on-the-frontend}

Ar ôl cael ei cynllunio, bydd y cyd-destunwyr sy'n mynychu eich dudalen cyfrifol bydd yn gweld y seiliedig y cyfnod isod y tabl prifynau. Pan fyddant yn clisi'r cyfnod gyfrifol arall:

  * Bydd y tabl prifynau yn cyfresgu'n gyflym i ddangos y prifynau am y cyfnod a ddewiswyd (nid oes angen ail-gysur y peidiad).
  * Os yw **Force Different Durations** wedi'i torri ar y Tabl Prifynau, bydd y proddeictau heb fersyllty prifynol am y cyfnod a ddewiswyd yn cael eu gwahanu.
  * Os yw **Force Different Durations** wedi'i chynllunio, bydd pob proddeict yn parhau i fod yn wellaidd er gwaith er i fod heb fersyllty ar gyfer y cyfnod a ddewiswyd (bydd yn dangos ei prifynau ddefnyddiol).

#### Cyn-destunio'r Cyfnod Gyfrifol trwy URL {#pre-selecting-a-billing-period-via-url}

Gallwch hefyd cyn-destunio proddeict a cyfnod gyfrifol drwy y URL. Mae Ultimate Multisite yn cefnogi y modelau URL hyn:

  * `/register/premium` — Cyn-destunio'r proddeict "Premium" yn unig
  * `/register/premium/12` — Cyn-destunio'r proddeict a cyfnod 12-mlynedd
  * `/register/premium/1/year` — Cyn-destunio'r proddeict gyda cyfnod 1-mlynedd

### Y Faeld Deilio'r Model {#the-template-selection-field}

Mae'r faeld **Template Selection** yn sylw i cyd-destunwyr ddewis y model safle ar gyfer y chefforddiad yn y checkout. Mae'n cael ei gynnwys fel defnyddiol yn ddefnyddiol mewn ffurf checkout un stad a ffurf checkout am y stadau amol yn Ultimate Multisite v2.6.1.

#### Ymyddu'r faeld yn manwl {#adding-the-field-manually}

Os byddwch yn gweithio gyda ffurf a roedd wedi'i creu قبل v2.6.1, neu wedi'i entynnu o template llawn:

1. Ydwch i **Ultimate Multisite > Checkout Forms** ac redig eich ffurf cheictw.
2. Yn y stad lle mae cyflenwiad ddata safle yn cael ei cyfrannu, cwblwch ar **Add new Field**.
3. Dewch **Template Selection** o ddilection typlau (field type dialog).
4. Rheoli'r ffurf:
   - **Label** — Y genedig sydd i'r cyddeeau yn gweld is-od y grid template (e.e., "Dechrau ar template safle").
   - **Required** — A oes angen i'r cyddeeau dechrau'r template cyn siaradodd.

#### Sut mae hyn yn gweithio {#how-it-works}

Pan mae cyddee unig yn crybio template yn y cheictw, mae Ultimate Multisite'n defnyddio'r template hwnnw wrth y cyfathriad eu safle newydd. Mae’r templateau a ddefnyddir yn dod o'r llyfr **Site Templates** eich (**Ultimate Multisite > Site Templates**). Mae templateau a nodwyd fel ar gael i'r cyddeeau yn dangos yma.

### Ddrefniadau safle cheictw-form (Checkout-form base domains) {#checkout-form-base-domains}

Mae Ultimate Multisite v2.13.0 yn gwastraff drefniadau safle a chynllunwyd ar ffurf cheictw **Site URL** fel drefniadau safle cyd-gynllunol (network base domains). Defnyddiwch y setau drefniadau gael o'r ffurf i gyd yr ydych chi eisiau bod y cyddeeau yn creu safleoedd o dan un neu fwy o drefniadau cyfrifol cyffredinol, fel `example.com` a `sites.example.com`.

Mae drefniadau safle cheictw-form cyd-gynllunol nid yn cael eu gweithredu fel mappio drefniadau safle per-site (per-site custom domain mappings). Pan mae'r cyddee unig yn creu safle ddefnyddiol ar un o'r drefniadau hyn, nid yw Ultimate Multisite'n creu record drefniad-mappid y bydd yn gwneud y gysylltiad cyffredinol yn dod yn perthynol i'r safle hwn yn unig. Bydd y safle cyd-gynllunol ar gael ar gyfer safleoedd cyflwyniad sydd yn gymryd â'r ffurf cheictw-form cyd-gynllunol.

Rwy'n gwarchio drefniadau safle cyd-gynllunol ar gyfer safleoedd mappid per-cyddee, fel `customer-example.com`. Rwy'n gwarchio drefniadau safle cheictw-form cyd-gynllunol ar gyfer safleoedd cyfrifol sydd yn gallu gweithredu am ychwaneg o safleoedd.

#### Aros y ffurf {#removing-the-field}



Os ydych chi nid yn cynnig modelau siat, osodwch y field Selgell Model (Template Selection) o'r ffurf eich bod. Bydd y tebydalwyr yn cael yr un model cyffredinol sydd wedi'i ddefnyddio o dan **Ultimate Multisite > Settings > Site Templates**.
