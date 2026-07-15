---
title: Addasu eich ffurflen gofrestru
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Addasu eich Ffurflen Gofrestru

I wneud i’ch rhwydwaith edrych yn unigryw o’i gymharu â’r holl SaaS eraill sydd wedi’u hadeiladu ar blatfform WordPress, mae Ultimate Multisite yn caniatáu i chi addasu eich tudalennau cofrestru a mewngofnodi gyda’n nodwedd **Checkout Forms**.

Er eu bod yn ffordd hawdd a hyblyg o arbrofi â gwahanol ddulliau wrth geisio trosi cwsmeriaid newydd, cânt eu defnyddio’n bennaf i greu ffurflenni cofrestru personol. Nod yr erthygl hon yw dangos i chi sut y gallwch wneud hynny.

## Tudalennau mewngofnodi a chofrestru: {#login-and-registration-pages}

Wrth osod Ultimate Multisite, mae’n creu tudalennau mewngofnodi a chofrestru personol yn awtomatig ar eich prif wefan. Gallwch newid y tudalennau diofyn hyn unrhyw bryd drwy fynd i’ch tudalen **Ultimate Multisite > Settings > Login & Registration**.

![Tudalen gosodiadau Mewngofnodi a Chofrestru](/img/config/settings-general.png)

Dyma olwg lawn ar y dudalen gosodiadau mewngofnodi a chofrestru:

![Tudalen lawn gosodiadau Mewngofnodi a Chofrestru](/img/config/settings-login-registration-full.png)

Gadewch i ni edrych ar bob un o’r opsiynau y gallwch eu haddasu ar y dudalen **Login & Registration**:

  * **Galluogi cofrestru:** Bydd yr opsiwn hwn yn galluogi neu’n analluogi cofrestru ar eich rhwydwaith. Os caiff ei ddiffodd, ni fydd eich cwsmeriaid yn gallu cofrestru na thanysgrifio i’ch cynhyrchion.

  * **Galluogi dilysu e-bost:** Os caiff yr opsiwn hwn ei droi ymlaen, bydd cwsmeriaid sy’n tanysgrifio i gynllun am ddim neu gynllun taledig gyda chyfnod prawf yn derbyn e-bost dilysu a bydd angen iddynt glicio ar y ddolen ddilysu er mwyn i’w gwefannau gael eu creu.

  * **Tudalen gofrestru ddiofyn:** Dyma’r dudalen ddiofyn ar gyfer cofrestru. Mae angen i’r dudalen hon fod wedi’i chyhoeddi ar eich gwefan a bod â ffurflen gofrestru (a elwir hefyd yn ffurflen dalu) - lle bydd eich cleientiaid yn tanysgrifio i’ch cynhyrchion. Gallwch greu cymaint o dudalennau cofrestru a ffurflenni talu ag y dymunwch, cofiwch roi cod byr y ffurflen dalu ar y dudalen gofrestru, fel arall ni fydd yn ymddangos.

  * **Defnyddio tudalen mewngofnodi bersonol:** Mae’r opsiwn hwn yn caniatáu i chi ddefnyddio tudalen mewngofnodi wedi’i haddasu, yn hytrach na’r dudalen wp-login.php ddiofyn. Os caiff yr opsiwn hwn ei droi ymlaen, gallwch ddewis pa dudalen fydd yn cael ei defnyddio ar gyfer mewngofnodi yn yr opsiwn **Default login page** (yn union oddi tano).

  * **Cuddio’r url mewngofnodi gwreiddiol (wp-login.php)** : Os ydych am guddio’r URL mewngofnodi gwreiddiol, gallwch droi’r opsiwn hwn ymlaen. Mae hyn yn ddefnyddiol i atal ymosodiadau brute-force. Os yw’r opsiwn hwn wedi’i alluogi, bydd Ultimate Multisite yn dangos gwall 404 pan fydd defnyddiwr yn ceisio cyrchu’r ddolen wp-login.php wreiddiol

  * **Gorfodi cyhoeddi gwefan yn gydamserol:** Ar ôl i gwsmer danysgrifio i gynnyrch ar rwydwaith, mae angen trosi’r wefan newydd sydd ar y gweill yn wefan rwydwaith go iawn. Mae’r broses gyhoeddi yn digwydd drwy Job Queue, yn anghydamserol. Galluogwch yr opsiwn hwn i orfodi’r cyhoeddi i ddigwydd yn yr un cais â’r cofrestru.

Nawr, gadewch i ni weld opsiynau eraill sy’n dal yn berthnasol i’r broses mewngofnodi a chofrestru. Maent yn union o dan **Opsiynau eraill** ar yr un dudalen Mewngofnodi a chofrestru:

  * **Rôl ddiofyn:** Dyma’r rôl fydd gan eich cwsmeriaid ar eu gwefan ar ôl y broses gofrestru.

  * **Galluogi Jumper:** Yn galluogi llwybr byr Jumper yn yr ardal weinyddu. Mae Jumper yn gadael i weinyddwyr neidio’n gyflym i sgriniau Ultimate Multisite, gwrthrychau rhwydwaith, a chyrchfannau eraill a gefnogir heb bori drwy bob dewislen. Diffoddwch ef os yw’n well gennych guddio’r offeryn llywio cyflym hwnnw o’r rhyngwyneb gweinyddu.

  * **Ychwanegu defnyddwyr i’r brif wefan hefyd:** Bydd galluogi’r opsiwn hwn hefyd yn ychwanegu’r defnyddiwr at brif wefan eich rhwydwaith ar ôl y broses gofrestru. Os galluogwch yr opsiwn hwn, bydd opsiwn i osod **rôl ddiofyn** y defnyddwyr hyn ar eich gwefan hefyd yn ymddangos yn union oddi tano.

  * **Galluogi cyfrifon lluosog:** Caniatáu i ddefnyddwyr gael cyfrifon mewn gwahanol wefannau ar eich rhwydwaith gyda’r un cyfeiriad e-bost. Os yw’r opsiwn hwn i ffwrdd, ni fydd eich cwsmeriaid yn gallu creu cyfrif ar wefannau eraill sy’n rhedeg ar eich rhwydwaith gyda’r un cyfeiriad e-bost.

A dyna’r holl opsiynau sy’n ymwneud â mewngofnodi a chofrestru y gallwch eu haddasu! Peidiwch ag anghofio cadw eich gosodiadau ar ôl i chi orffen eu golygu.

## Defnyddio ffurflenni cofrestru lluosog: {#using-multiple-registration-forms}

Mae Ultimate Multisite 2.0 yn cynnig golygydd ffurflen dalu sy’n caniatáu i chi greu cymaint o ffurflenni ag y dymunwch, gyda gwahanol feysydd, cynhyrchion ar gynnig, ac ati.

Mae’r tudalennau mewngofnodi a chofrestru ill dwy wedi’u hymgorffori gyda chodau byr: **[wu_login_form]** ar y dudalen mewngofnodi a**[wu_checkout]** ar gyfer y dudalen gofrestru. Gallwch addasu’r dudalen gofrestru ymhellach drwy adeiladu neu greu ffurflenni talu.

I gyrchu’r nodwedd hon, ewch i’r ddewislen **Checkout Forms**, ar y bar ochr chwith.

![Dewislen Checkout Forms yn y bar ochr](/img/config/checkout-forms-list.png)

Ar y dudalen hon, gallwch weld yr holl ffurflenni talu sydd gennych.

Os ydych am greu un newydd, cliciwch ar **Ychwanegu Ffurflen Dalu** ar frig y dudalen.

Gallwch ddewis un o’r tri opsiwn hyn fel eich man cychwyn: un cam, aml-gam neu wag. Yna, cliciwch i **Fynd i’r Golygydd**.

![Ychwanegu Checkout Form gydag opsiynau un cam, aml-gam, neu wag](/img/config/checkout-forms-list.png)

Fel arall, gallwch olygu neu ddyblygu’r ffurflenni sydd gennych eisoes drwy glicio ar yr opsiynau o dan ei henw. Yno, byddwch hefyd yn dod o hyd i’r opsiynau i gopïo cod byr y ffurflen neu i ddileu’r ffurflen.

![Gweithredoedd hofran ffurflen dalu gyda golygu, dyblygu, a dileu](/img/config/checkout-form-hover-actions.png)

Os dewiswch un cam neu aml-gam, bydd y ffurflen dalu eisoes wedi’i rhag-boblogi â’r camau sylfaenol sydd eu hangen iddi weithio. Yna, os dymunwch, gallwch ychwanegu camau ychwanegol ati.

### Golygu Checkout Form: {#editing-a-checkout-form}

Fel y soniasom o’r blaen, gallwch greu ffurflenni talu at wahanol ddibenion. Yn yr enghraifft hon byddwn yn gweithio ar ffurflen gofrestru.

Ar ôl llywio i olygydd y ffurflen dalu, rhowch enw i’ch ffurflen (a ddefnyddir ar gyfer cyfeirio mewnol yn unig) a slug (a ddefnyddir i greu codau byr, er enghraifft).

![Golygydd ffurflen dalu gyda meysydd enw a slug](/img/config/checkout-form-name-slug.png)

Mae ffurflenni wedi’u gwneud o gamau a meysydd. Gallwch ychwanegu cam newydd drwy glicio ar **Ychwanegu Cam Talu Newydd**.

![Botwm Ychwanegu Cam Talu Newydd](/img/config/checkout-form-add-step.png)

Ar dab cyntaf y ffenestr foddol, llenwch gynnwys cam eich ffurflen. Rhowch ID, enw a disgrifiad iddo. Defnyddir yr eitemau hyn yn fewnol gan amlaf.

![Tab cynnwys cam talu gydag ID, enw, a disgrifiad](/img/config/checkout-form-step-content.png)

Nesaf, gosodwch welededd y cam. Gallwch ddewis rhwng **Dangos bob amser** , **Dangos i ddefnyddwyr sydd wedi mewngofnodi yn unig** neu **Dangos i westeion yn unig**.

![Opsiynau gwelededd cam talu](/img/config/checkout-form-step-visibility.png)

Yn olaf, ffurfweddwch arddull y cam. Mae’r rhain yn feysydd dewisol.

![Ffurfweddiad arddull cam talu](/img/config/checkout-form-step-style.png)

Nawr, mae’n bryd ychwanegu meysydd at ein cam cyntaf. Cliciwch **Ychwanegu Maes Newydd** a dewiswch y math o adran rydych ei eisiau.

![Botwm Ychwanegu Maes Newydd](/img/config/checkout-form-add-field-button.png)![Cwymplen dewis math maes](/img/config/checkout-form-field-type-dropdown.png)

Mae gan bob maes baramedrau gwahanol i’w llenwi. Ar gyfer y cofnod cyntaf hwn, byddwn yn dewis y maes **Enw defnyddiwr**.

![Ffurfweddiad maes enw defnyddiwr](/img/config/checkout-form-username-content.png)![Paramedrau maes enw defnyddiwr](/img/config/checkout-form-username-visibility.png)![Gosodiadau ychwanegol maes enw defnyddiwr](/img/config/checkout-form-username-style.png)

Gallwch ychwanegu cymaint o gamau a meysydd ag sydd eu hangen arnoch. I arddangos eich cynhyrchion fel bod eich cwsmeriaid yn gallu dewis un, defnyddiwch y maes Tabl Prisiau. Os ydych am adael i’ch cleientiaid ddewis templed, ychwanegwch y maes Dewis Templed. Ac ati.

![Golygydd ffurflen dalu gyda maes dewis templed](/img/config/checkout-form-with-template-field.png)

_**Nodyn:** Os ydych yn creu cynnyrch ar ôl creu eich ffurflen dalu, bydd angen i chi ychwanegu’r cynnyrch yn yr adran Tabl Prisiau. Os nad ydych yn ei ychwanegu, ni fydd y cynnyrch yn ymddangos i’ch cwsmeriaid ar y dudalen gofrestru._

_**Nodyn 2:** mae enw defnyddiwr, e-bost, cyfrinair, teitl safle, URL safle, crynodeb archeb, taliad, a botwm cyflwyno yn feysydd gorfodol i greu ffurflen dalu._

Tra byddwch yn gweithio ar eich ffurflen dalu, gallwch bob amser ddefnyddio’r botwm Rhagolwg i weld sut y bydd eich cleientiaid yn gweld y ffurflen. Gallwch hefyd newid rhwng gweld fel defnyddiwr presennol neu ymwelydd.

![Botwm Rhagolwg ar olygydd y ffurflen dalu](/img/config/checkout-form-preview-button.png)![Rhagolwg ffurflen dalu fel ymwelydd neu ddefnyddiwr presennol](/img/config/checkout-form-preview-modal.png)

Yn olaf, ar **Opsiynau Uwch** gallwch ffurfweddu’r neges ar gyfer y dudalen **Diolch**, ychwanegu pytiau i olrhain trosiadau, ychwanegu CSS personol at eich ffurflen dalu neu ei chyfyngu i wledydd penodol.

![Opsiynau Uwch gyda thudalen Diolch, olrhain trosiadau, a CSS personol](/img/config/checkout-form-advanced.png)

Gallwch hefyd alluogi neu analluogi eich ffurflen dalu â llaw drwy doglo’r opsiwn hwn yn y golofn dde, neu ddileu’r ffurflen yn barhaol.

![Togl gweithredol ac opsiwn dileu ar gyfer ffurflen dalu](/img/config/checkout-form-active.png)

Peidiwch ag anghofio cadw eich ffurflen dalu!

![Botwm Cadw Ffurflen Dalu](/img/config/checkout-form-save.png)

I gael cod byr eich ffurflen, cliciwch **Cynhyrchu Cod Byr** a chopïwch y canlyniad a ddangosir yn y ffenestr foddol.

![Modal Cynhyrchu Cod Byr gyda chod byr i’w gopïo](/img/config/checkout-form-editor.png)

_**Nodyn:** Bydd angen i chi ychwanegu’r cod byr hwn at eich tudalen gofrestru er mwyn ychwanegu’r ffurflen dalu hon ati._

## Rhag-ddewis cynhyrchion a thempledi drwy baramedrau URL: {#pre-selecting-products-and-templates-via-url-parameters}

Os ydych am greu tablau prisiau wedi’u teilwra ar gyfer eich cynhyrchion a rhag-ddewis ar y ffurflen dalu y cynnyrch neu’r templed y mae eich cwsmer yn ei ddewis o’ch tabl prisiau neu’ch tudalen templedi, gallwch ddefnyddio paramedrau URL ar gyfer hyn.

### **Ar gyfer cynlluniau:** {#for-plans}

Ewch i **Ultimate Multisite > Cynhyrchion > Dewiswch gynllun**. Dylech weld y botwm **Cliciwch i gopïo Dolen Rannadwy** ar frig y dudalen. Dyma’r ddolen y gallwch ei defnyddio i rag-ddewis y cynllun penodol hwn ar eich ffurflen dalu.

![Tudalen cynnyrch gyda botwm dolen rannadwy](/img/config/products-list.png)

Sylwch fod y ddolen rannadwy hon yn ddilys ar gyfer **Cynlluniau** yn unig. Ni allwch ddefnyddio dolenni rannadwy ar gyfer pecynnau neu wasanaethau.

### Ar gyfer templedi: {#for-templates}

Os ydych am rag-ddewis templedi safle ar eich ffurflen dalu, gallwch ddefnyddio’r paramedr: **?template_id=X** ar URL eich tudalen gofrestru. Mae angen disodli’r "X" â’r **rhif ID templed safle**. I gael y rhif hwn, ewch i **Ultimate Multisite > Safleoedd**.

Cliciwch ar **Rheoli** yn union o dan y templed safle rydych am ei ddefnyddio. Byddwch yn gweld rhif SITE ID. Defnyddiwch y rhif hwn ar gyfer y templed safle penodol hwn i’w rag-ddewis ar eich ffurflen dalu. Yn ein hachos ni yma, byddai’r paramedr URL yn **?template_id=2**.

![Rhestr safleoedd yn dangos ID templed safle](/img/config/site-templates-list.png)

Gadewch i ni ddweud mai ein gwefan rhwydwaith yw [**www.mynetwork.com**](http://www.mynetwork.com) a bod ein tudalen gofrestru gyda’n ffurflen dalu wedi’i lleoli ar y dudalen **/register**. Bydd yr URL cyfan gyda’r templed safle hwn wedi’i rag-ddewis yn edrych fel [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Ac os ydych eisiau, gallwch rag-ddewis cynhyrchion a thempledi ar eich ffurflen dalu. Y cyfan sydd angen i chi ei wneud yw copïo dolen rannadwy’r cynllun a gludo paramedr y templed ar y diwedd. Bydd yn edrych fel [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
