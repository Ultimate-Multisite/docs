---
title: Cyflwyniad owerthau
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# Mae Cynllunio Tadelth

Mae Ultimate Multisite wedi cael modd cynllunio cyfathrebu tadelth yn y plugin sydd yn ei coreg, felly os oes angen i chi gael cyfathrebu tadelthau o weithrediadau eich planau, packageau a gwasanaethau, gallwch chi wneud hynny'n ddefnyddio'r add-ons heb ddeallu unrhyw un.

Ar gyfer cwmni sydd yn y Europ, mae ein **add-on** yn rhoi toolau a ffeithiau i sicrhau gwelliant **VAT**.

Mae Ultimate Multisite nid yn cyflenwi neu dychwilio tadelthau ar eich blwyddyn i'r cyngor; rydym yn helpu chi i gael y tadelthau pwysig yn yr amser y weithrediad. **Byddwch chi angen i dychwilio tadelthau ar eich blwyddyn eich hun.**

## Mae Cynllunio Cyfathrebu Tadelth wedi'i Gofal

Nid yw cyfathrebu tadelth yn cael ei gael yn defnyddiol. I sicrhau ei gael, rhaid i chi fynd i **Ultimate Multisite > Settings > Taxes** a gwneud y setiad Enable Taxes yn gyflwyno (toggle on).

![Enable Taxes toggle at the top of the Tax settings page](/img/config/settings-taxes-enable.png)

Dyma'r gweld cyfan o'r pagedd setiadau tadelth:

![Tax settings full page](/img/config/settings-taxes-full.png)

Gallwch hefyd gweld y setiadau tadelth ar gyfer proddeictau unigol:

![Tax settings for products](/img/config/settings-taxes.png)

### Tadelth a Ddychwilio (Tax excluded vs. Tax included)

Yn defnyddiol, pob pris eich proddeictau yw tadelth a ddefnyddio, gan ei fod, mae tadelthau **nid cael eu cynnwys** yn y pris y proddeict. Os byddwn i ni ddodol bod angen i'r cyd-destunol ar gyfer weithrediad penodol, byddwn i dros y subtotal ychwanegu'r tadelthau.

Os ydych chi'n hoffi fod tadelthau cael eu cynnwys yn y pris eich proddeict, gallwch chi wneud hynny gan gyflwyno'r setiad **Inclusive Tax**.

![Inclusive Tax toggle row below the Enable Taxes setting](/img/config/settings-taxes-inclusive.png)

Peidiwch â hoffi'r newidiadau a chyflwynwch.

Gallwch y redytwr drwy clict ar y bot **Manage Tax Rates** ar fforddolaeth (sidebar) o'r dudalen setegau tax.

![Link Manage Tax Rates yn panel Tax Rates ar y dudalen setegau](/img/config/settings-taxes-manage-rates.png)

Ar y dudalen redytwr tax rates, gallwch ychwanegu newydd Tax Rates gan clict ar y bot **Add new Row**.

![Tablaw redytwr tax rates gyda Add new Row yn y ddefnydd](/img/config/tax-rates-editor.png)

Byddwch yn angen rhoi **title** (a ddefnyddir ar gyfer ffurfiadau) i bob tax rate. Yna gallwch ddwylo'r **country** (angen), y **state**, a'r **city** (all ddau allweddol) lle bydd ystaccu'r tax hwnnw. Isaf, apellwch y **tax rate yn persiant**.

### Tax Categories

Gallwch hefyd creu amlenni Tax Categories, i dros ychwanegu diffigynau tax ar gyfer gwaith diffigynol.

Clictwch ar **Add new Tax Category**, yna ysgrifwch enw eich amlenni a chrychi **Create**.

![Bot Add new Tax Category yn y ddefnydd o'r redytwr tax rates](/img/config/tax-categories-add.png)

![Faelad input Enw Tax Category mewn modal creu amlenni](/img/config/tax-categories-create-modal.png)

I chwarae drwy amlenni, clictwch ar **Switch** a wybylwch y amlenni i sydd yn eich bod eisiau addasu newydd taxau.

![Bot Switch dropdown i newid rhwng amlenni tax](/img/config/tax-categories-switch.png)

![Faelad amlenni tax yn dangos amlenni ar gael](/img/config/tax-categories-select.png)

Gallwch setio'r amlenni tax ar gyfer proddeig penodol gan fynd i'r **Product edit page** a yna i'r tab Taxes.

![Tab Tax Products gyda amlenni tax a toggel cyflwyniad](/img/config/product-taxes.png)

Ar y cyflym hwn, gallwch yn toggu off the **Is Taxable?** (Ydych chi’n cael ei ddefnyddio?) i ddweud wrth Ultimate Multisite nad yw'n ddeallai gael taxau ar y proddeig hwnnw.

## European VAT Support

Fel ymlaen fel wedi cael ei ddefnyddio yn y cyflwyniad, mae ein add-on ar gael i'r cyddeeau yn y EU sydd â hanesau addysgol yn ddeb o regoliad VAT Eu.

Mae'r toolau VAT ein yn helpu gyda chwarae ddau peth hanfodol:

  * Chwarae llai cyflwyniadau VAT Eu yn einfedig;

  * Cyfathrebu a chyfaddefu Nifer VAT - a chwarae gwrth-chwarae ar gyfer entiteau sydd yn cael eu amrywiad VAT (fel y firmion sydd â niferoedd VAT sydd yn ddefnyddiol);

I gosi'r add-on hwn, mynd i **Ultimate Multisite > Settings** a gadael ar y link o'r sidebar **Check our Add-ons**.

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

Byddwch yn cael eich reiddiio i'r peidiad add-on ein. Yn y cyflym hwn, gallwch chwilio am **Ultimate Multisite VAT add-on** a gosi'n ddefnyddi.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Yna, mynd i **Network Admin > Plugins** a chwarae'r add-on hwn yn gyflwyniad cyfan ar y rheol.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Os byddwch yn cael eich cyffredin yn ôl i'r **Tax Settings tab**, byddwch yn gweld opsiynau newydd ar gael. Chwarae'r opsiwn **Enable VAT Support** i gosi'r toolau VAT newydd yn ddefnyddio. Peidiwch â hoffi'r **settings** eich!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### Gwahanu ar Ratif VAT

Un o'r toolau sydd yn cael ei ddefnyddio gan ein cyfathrebu yw'r gallu chwarae y rifau tax ar gyfer y cyddeeau Eu. Gall hyn cael ei wneud drwy mynd i'r peidiad redigion y rifau tax ar ôl cael eich amrywiad VAT Eu yn ddefnyddio.

Ar ôl ymlaen o'r pein, byddwch yn gweld opsiynau i gael y VAT. Gan wybullesu rheol ddefnyddio a clisi ar y bot **Update EU VAT Rates**, bydd y tabell yn cael ei ddangos a'i gyflwyno'n awt gyda'r cyfrifau tescau ar gyfer pob statws EU. Yna, dim ond angen i chi ei haddiffu.

![Bot Update EU VAT Rates yn y cefn o ddefnyddio rheoli tescau](/img/config/tax-rates-vat-pull.png)

Gallwch hefyd haddiffu'r gaelau ar ôl eu cael eu ddangos. I wneud hynny, haddiffwch y llinell tabell sy rydych chi angen a clisi i haddiff y gaelau newydd.

### Validacio VAT

Pan fydd cefn VAT yn cael ei chynllunio, bydd Ultimate Multisite'n cytuno ffordd ychwanegol i ffurf y cheictw, isod ymlaen o'r ffurf adres gweithredol. Bydd y ffurf yn dangos i'r cyddeeau sy rydych yn EU dim ond ar gyfer cyddeeau sy roedd yn EU.

<!-- Screenshot unavailable: Ffurf Nifer VAT ar y cefn cheictw o'r cyflym isod isod ymlaen o'r adres gweithredol -->

Yna bydd Ultimate Multisite yn gyflwyno (validate) y Nifer VAT ac os mae'n dod yn un ddefnyddiol, bydd y mecanwaith cyfathrebu allan (reverse charge mechanism) yn cael ei chynllunio a fydd y cyfrifau tescau ar gyfer y barch yn cael eu setio ar 0% ar y barch hwn.
