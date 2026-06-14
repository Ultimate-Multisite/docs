---
title: Creu eich cyfrifau cyntaf
sidebar_position: 6
_i18n_hash: a4a36ed896f6691eebb099208a746cd7
---
# Creu eich gyfrifau cyntaf (v2)

_**NOTI'RHYD: Mae'r ail nghyddug hwn yn rhoi am Ultimate Multisite fersiwn 2.x yn unig. Os ydych chi yn defnyddio fersiwn 1.x,**_ **_pwyd ystodwch y ail nghyddug hwn**_ .

I rywbeth i ddeall eich rheiniad a entynnu'r gwasanaethau eich cyhoeddol i benwiolion allweddol, mae angen gael wybodaeth gyfrifau gyntaf. Sut ydynt yn creu'r cynnyrch hyn? Beth yw rheolau gyfrifau a gallwch chi offeru? Yn yr ail nghyddug hwn, byddwn yn gweld pob hyn sy rhaid i chi gwybod am y cyfrifau.

## Drychiad Cyfrifau (Product Type)

 gyda Ultimate Multisite gallwch offeru ddau gategori o gyfrifau i'ch cleiention: **cyfrifau** a **add-ons (Order Bump)**. Gall add-ons cael eu cyflwyno mewn ddau rheolau: **packageau** a **gwasanaethau**. Byddwn yn gweld y gwahaniaethau a'r pethau penodol hyn nesaf.

  * **Cyfrifau (Plans)** : yw'r cynnyrch gyfrif Ultimate Multisite. Gall cleient chi gael ei chwarae i gydai fod wedi'i chysylltu â cyfrif. Mae cyfrif yn rhoi un neu fwy o safleoedd (dependant ar y cyfathrychiadau eich cyfrif) gyda'r hanesau sydd yn eu cyflwyno ar gyfer eich dogfennol cynhyrchu.

  * **Packageau (Packages)** : add-ons sy'n effaith yn uniongyrchol ar y ffurfion gweithredol o Ultimate Multisite. Mae'n newid hanesau neu drososi resurs, pluginau neu theimau newydd i'r cyfrif gyntaf a chwarae'r cleient chi wedi'i gael. Ar enw, gall un cyfrif gynnwys 1,000 ymweld per manyl, ac gallwch chi creu package sy'n llwybr y choldu hwn i 10,000.

  * **Gwasanaethau (Services)**: add-ons sy'n ddim yn newid y ffurfion gweithredol o Ultimate Multisite. Mae’r hyn yn gweithgareddau sydd yn cael eu cyflwyno ar gyfer eich cleient i adran y cyfrif a chwarae wedi'i gael. Ar enw, gall eich cleient gael ei chwarae un cyfrif sy'n sylweddol i safle un ac hefyd y pwyllid am gwasanaeth addol sydd yn creu'r safle hwn.

## Rheoli Cyfrifau (Managing Products)

Ar gyferol, yw'r tab **Products** yn Ultimate Multisite **(Ultimate Multisite > Products)** gallai ei ddefnyddio fel planau mewn amgylchedd gweithredol traddodiadol.

Yn y Ultimate Multisite, mae'r tab Products yn cyflwyno'r stratig a'r hanesau sy'n golygu i'r produsg neu weithred. Mae'r stratig hyn yn ymddangos i ddefnyddio'r disgrifiad y produsg neu weithred, y pres, y teithioedd (taxes), a'r pethau (permissions).

Bydd y sicr hon yn gwneud eich deall o'r cernwr hanfodol yr Ultimate Multisite.

![Products list page](/img/config/products-list.png)

## Ymyddu Prodwsigau (Adding Products)

Rydych chi'n ddefnyddio plan, paka, neu weithred fel y cyfrifau i ddefnyddio newItem newydd drwy **Ultimate Multisite > Products > Add Product**.

![Add Product button](/img/config/product-add-button.png)

Mae'r ffurf yn cynnwys ddau sefyllfa ddefnyddiol. Ar y chwarae, mae rhai tabiau sy'n helpu gyda'r cyddefnyddio'r produsg a ar yr ochr, mae rhai sefyllfa i ddefnyddio'r pres gynnigol y produsg, ei statws weithredol, a'r llun y produsg.

![Product edit page overview](/img/config/product-edit-full.png)

### Disgrifiad (Description)

Gall y gwybodaeth gyntaf o'r produsg cael ei ddefnyddio gan ddefnyddio enw produsg a disgrifiad. Mae'r cyfathrebu hyn yn dangos lle mae angen y gwybodaeth o'r produsg fel y dechrau planau a'r pres, y ffurfiadau (invoices), y cyfathrydion (upgrades), a chwarae.

![Product description section](/img/config/product-description.png)

### Mathig Pres (Pricing Type)

Ar ochr y cyflym o'r ffurf, gall y pres gynnigol cael ei ddefnyddio.

![Pricing and save section](/img/config/product-pricing-save.png)

Mae Ultimate Multisite yn cefnogi tri mathig pres yn rhyddol. Mae'r opsiwn **paid** yn cyflwyno'r gynllunwrthyn weithredol am gwybodaeth am y pres y produsg a chwarae.

### Pres (Pricing)

Mae'r ffeithrin pres yn ddefnyddio'r pres gyntaf o'r produsg a'r cyfnod gynnigol.

![Pricing and save section](/img/config/product-pricing-save.png)

fel hynnyr pris o'r $29.99 gyda setiad o 1 mlynedd bydd yn billio $29.99 eu cyntaf. Yn y cyflwyniad, mae pris o $89.97 gyda setiad o 3 mlynedd bydd yn billio ystod y cyrddedau.

### Cyflwyniadau Billio (Billing Cycles)

Mae'r sefyllfa Cyflwyniadau Billio yn nodi rhyfedd y cyfnod billio a yw'n cael ei ddefnyddio mewn cyd-fyddiadau neu termau cyffredinol.

![Pricing and save section](/img/config/product-pricing-save.png)

Ar enw, pris o $29.99 gyda cyfnod o 1 mlynedd a 12 cyflwyniadau billio bydd yn billio $29.99 eu cyntaf ar y produsg am y 12 mlynedd nesaf. Yn y llall, bydd setiad hwn yn creu term pris cyffredinol o $29.99 per mlynedd am 12 mlynedd a fe wylio'r billio.

### Cyfnod Cynllun (Trial Period)

Mae gael y toggl offer trial yn rhoi i'r gyn-archwizair y rheiniad i ddefnyddio cyfnod cynllun ar gyfer y produsg.

![Pricing and save section](/img/config/product-pricing-save.png)

Yn y cyfnod cynllun, mae cydweithwyr yn llwybr i ddefnyddio'r produsg ac nid bydd eu billio heb fod y cyfnod cynllun wedi cael ei gwellio.

### Cyfeiriad Cynllun (Setup Fee)

Gallwch hefyd gyflwyno cyfeiriad cynllun ar eich plan.

![Pricing and save section](/img/config/product-pricing-save.png)

Mae hyn yn ei golygu bod eich cleient yn talu amol o wahania ar y billio cyntaf (yn o fewn pris y plan) sy'n cyfathogh â'r cyfeiriad a ddefnyddiwchwch yn y sefyllfa hwn.

### Actif (Active)

Mae'r toggl Actif yn rhoi amlwg i ddewis ydynt y produsg ar gael i'r cydweithwyr ar gyfer newid cyflwyniadau.

![Active toggle](/img/config/product-active.png)

Os oes ydyrchonau ar gyfer y gweithredwyr

Os oes gaeedau cleient sydd ar y plan hwn, mae tynnu'r toggle yn ei statws wedi'i dysgu i'w ddisgwylio'n dysg, yn llwybr yn gwneud y plan yn cael ei ddifynnu o'r cyflwyniadau yn y dyfodol. **Bydd y cleientau sydd ar y plan yn parhau i gael eu cyfrannu** thawel ydynt yn cael eu tynnu i plan newydd neu ei ddefnyddio o'r plan.

### Imgysg Cynllun

Mae'r botun **Upload Image** yn sylw'r gynllunion media i'r gynllunwrthwr cyd-llwybr i ddewis neu ddefnyddio pobeth o'r cynllun.

![Product image section](/img/config/product-image.png)

### Talybu

Mae'r botun **Delete Product** yn talybu'r cynllun o'r system. Mae'n dangos unwaith y bydd y cynllun wedi'i cyflwyno.

![Delete product section](/img/config/product-delete.png)

Fel yma, nid yw'r cynllun yn cael ei leoli mewn statws "trash". Fel hyn, unig ar gyfer ei talybu mae'r gweithrediad yn anghyfrifol.

### Opsiadau Cynllun

Ar ôl i fod y wybodaeth cynllun o'r cyflym yn cael ei ddefnyddio, mae'r opsiynau cynllun yn helpu'r gynllunwrthwr i ddifynnu'r adranau penodol o'r cynllun.

#### Amserol

Mae'r tab **General** yn cyflwyno'r adranau amserol o'r cynllun sydd yn cael eu cyflwyno nid yw'n golygu unrhyw un o'r tabau penodol o'r cynllun.

![General tab](/img/config/product-general-tab.png)

Mae **product slug** sydd yn ddefnyddio i ddifynnu'r slug gyda phrif y mae'r cynllun wedi'i gyfeiriant mewn URLau a ar gyfer y cyflymion arall o Ultimate Multisite.

Mae Ultimate Multisite yn cefnogi amrywiol rheoli cynllunion yn y cyflym Plan, Package, a Service. Mae'r tabau **Product Options** yn cael eu gwahanu'n dymunol yn ôl y rheoli cynllun sydd wedi'i gyfeiriant.

Mae'r **Customer Role** yn cyflwyno'r rôl sydd wedi'i gael i'r cleient yn cael ei ddefnyddio pan fod y safle wedi'i creu. Fel arfer ar gyfer belâu gynllunwrthwyr amserol, bydd hyn yn Ultimate Multisite default neu Administrator. Gall y rôl default o Ultimate Multisite cael ei setio mewn **Ultimate Multisite > Settings > Login & Registration**.

![Customer role settings](/img/config/product-customer-role-settings.png)

#### Yn o Ddychwilio a'r Cynlluniau (Up & Downgrades)

Mae'r tab hwn yn cyflwyno’r fforddau cynllunio a chynllunio sydd ar gael i'r cyd-defnyddwyr mewn trefn eu cywir.

I weld y hunain, meddwch am مثال lle mae seiliedig Ultimate Multisite yn rhoi ddefnyddiau addysgu (learning management solutions) i’u cyd-defnyddwyr. I ddod o hyd i hyn, mae'r tri cynllunau (Basic, Plus, a Premium) wedi'u cyflwyno ac mae pluginau penodol wedi'u chwarae ar gyfer pob cynllun (gweli yn nesaf mewn sefyllfa hwn am y dyletnogau ar gyfer sut i chwarae pluginau).

Os oes gan yr installation Ultimate Multisite hefyd gweithio gyda wefanion busnes neu wefanion eCommerce, gallai'r cynlluniau hyn angen pluginau cyffredinol yn cael eu chwarae a chwarae.

I'r amser hwn, byddai'n dymunol ac anghyffredinol i'w gael y cyd-defnyddwyr addysgu i'r cynlluniau eCommerce felly gall y cynlluniau hyn, y cyfathrebu, a'r hanesau nid yn gywir.

Felly, i redeg y ffordd o'r cyd-defnyddwyr a'i ddiogelio'r digwyddiadau, gall yr admin y rheol (network administrator) gwneud cynllun grŵp (plan group) ac yn ymddangos y cynlluniau a gall y cyd-defnyddwyr chynllunio i'w cyfathri.

![Up and Downgrades tab](/img/config/product-upgrades.png)

I ddefnyddio cynllun grŵp, gwneud y cynlluniau cywir yn y rhestr **plan group**. Mae'r **product order** yn darn sydd yn dywed yn rhyfeddu sut mae'r cynlluniau wedi'u cyflwyno a ddangos o'r isel i'r ddefnyddiol.

Mae Ultimate Multisite hefyd yn cynnwys ffeithrin **order bump**, lle gallai addau aystrol (add-on products) a chwarae ychwanegol cael eu ychwanegu i'r cynlluniau. Mae hyn yn cael ei cynnig i'r cyd-defnyddwyr fel item addysgu sydd wedi'u gallu ychwanegu i'r cynlluniau ar gyfer cyflwyniad neu yn ystod cynllunio.

#### Cyfathrebu Cyfathrebu (Price Variations)

Mae'r pwyllau pren (price variations) yn sylw'r gynllunwrth y rheol (network administrator) i ddefnyddio cyflwyniadau pren arall yn ôl am y cyfnod. Mae'r setiad hwn yn gwneud i'r merch yn llai i gynnig cyfnod cyfathrebu (billing period) fel manwl, cyntaf, annal, neu unrhyw cyfnod cyfathrebu arall ar gyfer ystodol. Ar enllaft, gallwch setlo produs ag $29.99/mth with opsiwn annal wedi'i ddefnyddio yn $249.99/blwyddyn.

![Price Variations tab](/img/config/product-price-variations-tab.png)

I gynnig pwyllau pren, setwch y toggel **Enable Price Variations** i weithredol (active) a cliwch ar bwdein **Add new Price Variation**.

![Product price variations](/img/config/product-price-variations.png)

I gosod pwyll, setwch y cyfnod, cyfnod, a pren y pwyll. Gallai'r merch yn cael pwyllau ychwanegol gan cliwch ar bwdein ychwanegol.

Ar enllaft, os ydych chi'r pren ysgol (base product price) yn $29.99 per mth, gallwch drosglwyddo:

  * **3 Mth** ag $79.99 (pren bach oer am y mth)
  * **1 Blwyddyn** ag $249.99 (pren mawr oer am y cyflwyniad annal)

:::tip Cyflwyniadau Cyfnod Cyfathrebu ar y Frontend

Mae pwyllau pren yn unig nid yw'n cael toggel neu switch i'r checkout ar y frontend. I gynnig i'r cyddeeion gwahaniaethau cyfathrebu (billing periods) (e.e., Mthly / Annal), mae angen i chi drosglwyddo field **Period Selection** i'ch ffurf checkout. Gweld [Checkout Forms: Adding a Period Selection Toggle](checkout-forms#adding-a-period-selection-toggle) ar gyfer gystadleuaeth o ddlethyrenau.
:::

#### Taxedau (Taxes)

Mae'r tab **Taxes** yn cysylltiedig â'r setiadau tax sydd wedi'u cyflwyno mewn **Ultimate Multisite > Settings > Taxes** a yn benodol gyda'r gynnwys taxa ar gyfer. I weithredol y taxedau a ddefnyddio taxa ar gyfer, gweld y drafiadau ar **Ultimate Multisite: Settings**.

![Taxes tab](/img/config/product-taxes.png)

Yn ddeall, yn مثال blaenorol, fe wnaethom ychwanegu arwyddyn tescafell lleol o 7.25% aelodol i golybuswyr yn California (Estref Unol Daleithiau).

Ar ôl i'r tescafell tescafell ei ddefnyddio mewn **Ultimate Multisite > Settings > Manage Tax Rates**, mae'n gallu cael ei wybilydd ar lefel y produsg.

![Taxes tab](/img/config/product-taxes.png)

I ddangos bod produsg yn item cyflwrus, rhoi'r toggel **Is Taxable** i weithredol ac gwilio'r tescafell tescafell aelodol o'r drwyllau Tescafell (Tax Category).

#### Site Templates

Yn ddeall, mae site templates yn wefan WordPress cyflym sydd wedi'i chloeni i wefan y golybuswr ar ddechrau eu cyflwyniad.

![Site Templates tab](/img/config/product-site-templates.png)

Mae'r admin y rheol yn creu a chyfathri'r site template fel wefan WordPress cyffredinol gyda theimau, pluginau, a cynnwys wedi'u chwarae ac chyfathri. Mae'r site template wedi'i chloeni yn llwyr i'r golybuswr.

Mae'r tab hwn yn sylwiol i'r admin y rheol i ddefnyddio'r site templates ar gyfer cyflwyniad newydd. I ddefnyddio site templates ar gyfer y plan hwn, rhoi'r toggel **Allow Site Templates** i weithredol ei statws weithredol.

Pan fod **Allow Site Templates** wedi'i dysgu, nid yw golybuswyr ar y plan yn gallu dewis templateau er i gydai bod ffurf cyflwyniad, linc sydd wedi'i rhannu, neu parameter URL yn gwneud templateau ar gael. Mae Ultimate Multisite yn gyfyngu hyn ar yr hanes trwy llinell ddefnyddiol ar gyfer y mynychau cyflwyniad: mae setegau y plan yn cael eu gwerto yn erbyn, ymlaen i setegau ffurf cyflwyniad template, aethau wedi'u dewis neu a rhoi gan URL. Mae hyn yn gwarchod amserau y plan yn gyfoethog ac yn prevensio bod templateau yn dangos ar gyfer produsau sydd ei dylai na fyddont yn eu cynnig.

Mae **site template selection mode** yn cyflwyno'r weithredol o site templates yn ystod y cyflwyniad.

Mae'r setiadur **D** **efault** yn dilyn y cyflenau o ffurf chec (checkout form). Os oes gan weithredwr cyd-gynllunio wedi cyflwyno sstafell dechrau wybilydd mewn proses chec ac os mae'r dechrau wedi'i cyflwyno gyda chymrydion (templates), bydd y setiadur hwn yn cadw'r ddirectionau a gaelir yn y chec.

Mae cyflwyno **A** **ssign Site Template** yn golygu i'r wybilydd y cael y sstafell a ddarganfod. Fel argyllun, mae unrhyw steddau wybilydd mewn proses chec wedi'u talybu.

I'r olaf, mae **C** **hoose Available Site Templates** yn gwneud rhydd i'r stafell a darganfod mewn dechrau chec gyda'r stafell a cael eu dewis yma. Gallai hefyd cael sstafell wedi'i dewis ar gynted â chwarae i helpu'r cyd-defnyddiwr yn wybilydd.

Yn ddiwedd, os oes angen i'r weithredwr cyd-gynllunio bod y wybilydd stafell yn digwydd mewn steddau chec, bydd setiadur ' _default_ ' yn cyfyngu. Fel alternatiw i talybu a chofio y wybilydd stafell ac rhoi'r wybilydd i'r setiadau y plan, gall y opsiynion ' _assign new template_ ' neu ' _choose available site templates_ ' fod yn dymunol.

#### Sites (Steddau)

Mae'r tab **Sites** yn rhan o ffurf gweithredol Ultimate Multisite.

![Sites tab](/img/config/product-sites.png)

Mae'r setiadur hwn yn cyflwyno angen mwyaf o steddau a gall y cyd-defnyddiwr creu o dan ei chwarae.

I'w chynllunio'r gweithredol, rhoi'r toggel **limit sites** i'r status ei weithredol ac cyflwyno angen mwyaf o steddau yn y field **site allowance**.

#### Visits (Ymrydion)

Mae'r tab **Visits** yn rhan arall o system gweithredol Ultimate Multisite. Mae'r setiadur hwn yn sylwi ar gyfer cyfrifoldeb a ddiweddarau ar y chwarae unigol i'r stedd y cyd-defnyddiwr.

![Visits tab](/img/config/product-visits.png)

O'r pethaurol (marketing) yn gyfrifol, gallai ychwanegwyr cyd-fynd ei ddefnyddio'r setiad hwn fel ffordd i gofyn ar gyflwynionau i'r cyd-fyndau gwneud ei plan diwethaf pan fydd y cyflwynion wedi'i gael. Gallai'r setiad hwn hefyd helpu'r chyd-fyndwr network i redeg a profi trafoda arallgol i weithredol i sicrhau'r ressusrwydd system.

I weld y ffeithrin hwn, rhoi'r toggel **limit unique visits** i'r stat newydd ac osod y amser mwyaf o gyflwynion unig yn y field **unique visits quota**.

Pan fydd y limit hwn wedi'i gael, bydd Ultimate Multisite yn ddeall i weithio ar gyfer y cyflwyniad ystafell yn lle dangos message i ddweud bod y limitau wedi'u gwblhau.

#### Cyfathrebuwr (Users)

Mae'r hanesau 'Users' o Ultimate Multisite yn sylw'r chyd-fyndwr network i redeg ar gyflwynion ar unig o gyfathrebuwr sydd bresennol a'i gael rôl.

![Users tab](/img/config/product-users.png)

I chynllun y ffeithrin hanesau hwn, rhoi'r toggel **limit user** i'r stat newydd gan ei llwybr i'r oer.

Yna ar gyfer pob rôl sydd yn cael ei redeg, rhoi'r toggel yn ei gymryd gyda hi i'r stat newydd a chyflwyno'r limit uwch mwyaf yn y field cywir.

#### Post Types (Tydau Post)

Mae'r tab **Post Types** yn sylw'r chyd-fyndwr network i redeg ar gyflwynion sydd yn cael eu gwneud mewn amgylchedd fawr o post types yn WordPress.

![Post Types tab](/img/config/product-post-types.png)

Oherwydd y cyd-deall WordPress, mae posts a post types yn gymunedol canol i'i ffurfyniad cyfan, ac felly mae'r system hanesau Ultimate Multisite wedi'i ddefnyddio i helpu'r chyd-fyndwr network i sicrhau a chwanegu y limitau.

I weld y subsystem hanesau hwn, rhoi'r toggel **limit post types** i'r stat newydd gan ei llwybr i'r oer.

Ar ôl post typeau i'r limitio, rheoliwch yn ei ymddangos gan ei llwybrio ar y gwylch i'r gael a nodi'r cyflwr ddefnyddiol uchaf yn y ffeil sy'n cywir.

#### Cyflenau Disk (Disk Space)

Mae'r tab **Disk Space** yn sylwogol i'r gynllunwyr cyd-gynllunio i redeg y safon a ddefnyddir gan y cyd-gynllunwyr.

![Disk Space tab](/img/config/product-disk-space.png)

Yn aml yn WordPress multisite, mae'r fyliau canol (core files) yn cael eu rhannu'n gyffredinol arall sitesau a'r diriectionau unigol a cael eu creu ar gyfer ffiliad media a chyddeallau y cyflenau a chynlliniadau hyn.

I gael y limitio ddefnyddio disk, rhoi'r gwylch **limit disk size per site** i'r stat yn weithredol gan ei llwybrio ar y gwylch.

Yna, nodwch y cyflwr uchaf yn megabai mewn ffeil **disk space allowance**.

#### Domenau Custom (Custom Domain)

Gan ei ymddangos y opsiwn hwn, gallwch gael domenau custom ar y plan hwn yn benodol.

![Custom Domains tab](/img/config/product-custom-domains.png)

#### Theimau (Themes)

Mae'r tab **Themes** ynghylch y opsiynau y produs, yn sylwogol i'r gynllunwr cyd-gynllunio i gael theimau ar gael i'r cyd-gynllunwyr i'u deall a i'r cyflwr i'r stat y theim yn cael ei gyfeiriol.

![Themes tab](/img/config/product-themes.png)

_**Noted: I fod y theimau ar gael i'r cyd-gynllunwyr, nid yw'n cael eu cyffredinol gan y gynllunwr cyd-gynllunio.**_

![Network themes page](/img/config/product-themes-network-enabled.png)

Mae'r opsiwn **visibility** yn cyflwyno beth yw'r theim hwn i'r cyd-gynllunwr pan fydd yn gwellu'r tab **Appearance > Themes** yn eu sites. Mae'r setiad hwn i **Hidden** yn talyb y theim o ddeall ac yn gyfyngu'r gallu ei deallio a chynllini.

![Themes tab](/img/config/product-themes.png)

Mae'r wybodaeth **behavior** yn sylwogol i'r gynllunwr cyd-gynllunio i ddefnyddio stat y theim pan fydd ei creu'r sites y cyd-gynllunwr.

Yn **stat gyflenwi** mae'r thema wedi cael ei ddefnyddio gan y cyddee ar gyfer cyflwyniad hunanol. Yn y pethau **Nid Mae Ar Gweithredoedd**, mae'r thema yn tystyr y cyddee i'r cyddee i chwarae'r thema. Yn olaf, mae'r opsiwn **Force Activate** yn golygu i'r thema cael ei ddefnyddio a chwarae yn uniongyrchol, gan ei wneud yn debyg ar gyfer y safle pan cael ei creu.

#### Plugins

Fel ychwanegol i'r tab Themes, mae Ultimate Multisite yn sylwi'r gyn-archwizair y rheiniant i ddefnyddio'r cyflwyniad o'r plugins i'r cyddei fel hefyd fel stat eu pan cael ei creu safle newydd.

![Plugins tab](/img/config/product-plugins.png)

Mae'r drifau **visibility** yn sylwi'r plugin i fod yn gweld neu wedi'i gwahanu o'r cyddee pan fydd yn cael ei weld ar ei safle trwy'r opsiwn menws Plugins.

Gall y gyn-archwizair rheiniant hefyd gwahanu'r ymddygiad y plugins drwy ddefnyddio'r opsiynau mewn drifau behavior.

![Plugins tab](/img/config/product-plugins.png)

Mae'r wybodaeth **Default** yn cadw'r stat y plugin a ddifynwyd yn y template safle a ddefnyddiwyd gan y cyddee. Fel hyn, bydd y plugins a cael eu chwarae mewn template yn parhau i fod wedi'u chwarae pan cael ei clonio i'r safle y cyddee.

Mae'r **Force Activate** yn rhoi'r plugin mewn stat chwarae pan cael ei creu safle, ac mae'r **Force Inactivate** yn tystyr y plugin pan cael ei creu safle. Mewn adeiladu hyn allai'r cyddee gwahanu'r stat y plugin yn hanesydd gan ei hun trwy'r menws Plugins o'r WordPress.

Mae'r setiadur **Force Activate & Lock** yn gweithio felly fel, ond mae'n gwarchod y cyfyngedig (plugin state) o fod wedi'i newid gan y cydweithredwr. Fel gael setiadur Force Activate a Lock, bydd y plugin yn cael ei gweithredu mewn stat "active" ac bydd yn rhoi'r cydweithredwr i'w ddeactivio. Yn y cyflwyniad hwnnw, bydd setiadur **Force Inactivate & Lock** yn gwarchod y plugin i'w stat "inactive" ac bydd yn rhoi'r benyn i fod yn cael ei gweithredu.

Gall y cydweithredwr weleiddio'r setiadur Force Activate & Lock a Force Inactivate & Lock gyda chymryd â templau safle (site templates) fel pluginau, ac gall y statau o'r pluginau yng nghanol y templau cael eu cyflawni gan y setiadur hyn os oes angen.

#### Gyhoeddi'r Batrodd

Mae'r tab **Reset Limitations** yn trefnu allan y batroddau a gaelon ar y produs. I trefnu'r batroddau, gwchuedwch ar y bot **reset limitations**.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

I sicr y gweithrediad, slai'r toggel **confirm reset** i'w stat "active" ar y ochr ddifrifol a chwilio ar y bot **reset limitations**.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

## Redig, Duplikat neu Ddilebu Prod
Gallai redig, duplikat neu ddiilebu prodau sydd wedi'u cyflwyno gan weithrediad yn **Ultimate Multisite > Products** a chwilio ar y enw y produs sydd wedi'i gael.

![Product hover actions](/img/config/product-hover-actions.png)
