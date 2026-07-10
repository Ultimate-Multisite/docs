---
title: Làimhseachadh chìsean
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# Làimhseachadh Chìsean {#tax-handling}

Tha modal cruinneachaidh chìsean aig Ultimate Multisite air a thogail a-steach don phrìomh plugin againn, mar sin ma dh’fheumas tu cìsean reic a chruinneachadh air na planaichean, pacaidean agus seirbheisean agad, faodaidh tu sin a dhèanamh gu furasta gun a bhith a’ stàladh tuilleadain sam bith.

Do chompanaidhean a tha suidhichte san Roinn Eòrpa, tha **tuilleadan** againn a chuireas innealan agus feartan ris gus gèilleadh ri **VAT** a **thaiceadh** nas fheàrr.

Cha bhith Ultimate Multisite a’ faidhleadh no a’ pàigheadh chìsean às do leth don riaghaltas; tha sinn dìreach gad chuideachadh gus na cìsean iomchaidh a chruinneachadh aig àm a’ ghnothaich. **Feumaidh tu fhathast na cìsean a phàigheadh leat fhèin.**

## A’ cur Cruinneachadh Chìsean an comas {#enabling-tax-collection}

Chan eil cruinneachadh chìsean air a chur an comas gu bunaiteach. Gus a chur an comas, feumaidh tu a dhol gu **Ultimate Multisite > Settings > Taxes** agus an suidse a thionndadh gus an roghainn Enable Taxes a chur an comas.

![Suidse Enable Taxes aig mullach duilleag roghainnean nan Cìsean](/img/config/settings-taxes-enable.png)

Seo sealladh slàn de dhuilleag roghainnean nan cìsean:

![Duilleag slàn roghainnean chìsean](/img/config/settings-taxes-full.png)

Faodaidh tu cuideachd roghainnean chìsean fhaicinn airson batharan fa leth:

![Roghainnean chìsean airson batharan](/img/config/settings-taxes.png)

### Cìs air a dùnadh a-mach vs. Cìs air a gabhail a-steach {#tax-excluded-vs-tax-included}

Gu bunaiteach, tha prìsean do bhathair uile gun chìs, a’ ciallachadh nach eil cìsean **air an gabhail a-steach** ann am prìs a’ bhathair. Ma dhearbhas sinn gum bu chòir do neach-ceannach cìsean a phàigheadh air ceannach sònraichte, cuiridh sinn na cìsean **a bharrachd air** an fho-iomlan.

Mas fheàrr leat cìsean a bhith air an gabhail a-steach ann am prìs a’ bhathair agad, faodaidh tu sin a dhèanamh le bhith a’ cur an roghainn **Inclusive Tax** an comas.

![Sreath suidse Inclusive Tax fon roghainn Enable Taxes](/img/config/settings-taxes-inclusive.png)

Na dìochuimhnich na h-atharrachaidhean a rinn thu a **shàbhaladh**.

###

## A’ cruthachadh Ìrean Cìse {#creating-tax-rates}

Às dèidh dhut Cruinneachadh Chìsean a chur an comas, feumaidh tu ìrean cìse a chruthachadh airson àiteachan sònraichte a’ cleachdadh deasaiche nan ìrean cìse againn.

Gheibh thu cothrom air an deasaiche le bhith a’ briogadh air a’ phutan **Manage Tax Rates** air bàr-taoibh duilleag roghainnean nan Cìsean.

![Ceangal Manage Tax Rates ann am pannal Tax Rates air duilleag nan roghainnean](/img/config/settings-taxes-manage-rates.png)

Air duilleag deasaiche nan ìrean cìse, faodaidh tu Ìrean Cìse ùra a chur ris le bhith a’ briogadh air a’ phutan **Add new Row**.

![Clàr deasaiche ìrean cìse leis a’ phutan Add new Row aig a’ mhullach](/img/config/tax-rates-editor.png)

Feumaidh tu **tiotal** a thoirt do gach ìre cìse (air a chleachdadh air fàirdealan). An uair sin faodaidh tu an **dùthaich** (riatanach), an **stàit,** agus am **baile** (an dà chuid roghainneil) a thaghadh far an tèid a’ chìs seo a chur. Mu dheireadh, cuir ris an **ìre cìse ann an ceudadan**.

### Roinnean Cìse {#tax-categories}

Faodaidh tu cuideachd iomadh Roinn Cìse a chruthachadh, gus ìrean cìse eadar-dhealaichte a chur ris airson diofar sheòrsaichean bathair.

Briog gus **Add new Tax Category** a chur ris, an uair sin sgrìobh ainm na roinne agad agus brùth **Create**.

![Putan Add new Tax Category aig mullach deasaiche nan ìrean cìse](/img/config/tax-categories-add.png)

![Raon cur-a-steach Tax Category Name sa mhodal cruthachaidh roinne](/img/config/tax-categories-create-modal.png)

Gus brobhsadh tro roinnean, briog air **Switch** agus tagh an roinn ris a bheil thu airson cìsean ùra a chur ris.

![Putan clàr-tuiteamach Switch gus atharrachadh eadar roinnean cìse](/img/config/tax-categories-switch.png)

![Clàr-tuiteamach taghadair roinn cìse a’ sealltainn roinnean a tha ri fhaighinn](/img/config/tax-categories-select.png)

Faodaidh tu an roinn cìse a shuidheachadh airson bathar sònraichte le bhith a’ dol gu **duilleag deasachaidh a’ bhathair** agus an uair sin gu taba nan Cìsean.

![Taba chìsean bathair le roinn cìse agus suidse taxable](/img/config/product-taxes.png)

Air an aon sgrìn sin, faodaidh tu an suidse **Is Taxable?** a chur dheth gus innse do Ultimate Multisite nach bu chòir dha cìsean a chruinneachadh air a’ bhathar shònraichte sin.

## Taic VAT Eòrpach {#european-vat-support}

Mar a chaidh ainmeachadh roimhe, tha tuilleadan againn ri fhaighinn do luchd-ceannach san EU aig a bheil riatanasan a bharrachd air sgàth riaghailtean VAT Eòrpach.

Bidh na h-innealan VAT againn a’ cuideachadh le rud no dhà cudromach:

  * Luchdachadh furasta de ìrean VAT an EU;

  * Cruinneachadh agus dearbhadh Àireamh VAT - agus reverse charging airson buidhnean saor bho VAT (leithid chompanaidhean le àireamhan VAT dligheach);

Gus an tuilleadan sin a stàladh, rach gu **Ultimate Multisite > Settings** agus an uair sin briog air a’ cheangal bàr-taoibh **Check our Add-ons**.

![Bàr-taoibh duilleag nan roghainnean leis a’ cheangal Check our Add-ons](/img/config/settings-taxes-addons-link.png)

Thèid do ath-stiùireadh gu duilleag nan tuilleadan againn. An sin, faodaidh tu lorg airson an **tuilleadan Ultimate Multisite VAT** agus a stàladh.

<!-- Screenshot unavailable: Leac tuilleadain VAT air duilleag nan tuilleadan -->

<!-- Screenshot unavailable: Còmhradh Install Now airson tuilleadan VAT -->

An uair sin, theirig gu **Network Admin > Plugins** agus cuir an tuilleadan sin an gnìomh air feadh an lìonraidh.

<!-- Screenshot unavailable: Gnìomh Network Activate airson tuilleadan VAT air duilleag nam Plugins -->

Ma thèid thu air ais gu **taba Tax Settings** , chì thu roghainnean ùra rim faighinn. Tionndaidh an roghainn **Enable VAT Support** gus na h-innealan VAT ùra a chur an comas. Na dìochuimhnich na roghainnean agad a **shàbhaladh**!

<!-- Screenshot unavailable: Suidse Enable VAT Support ann an roghainnean nan Cìsean às dèidh gnìomhachadh an tuilleadain -->

### A’ tarraing a-steach Ìrean Cìse VAT {#pulling-on-vat-tax-rates}

Is e aon de na h-innealan a chuireas an t-aonachadh againn ris an comas ìrean cìse a luchdadh airson ball-stàitean an EU. Faodar sin a dhèanamh le bhith a’ tadhal air duilleag deasaiche nan ìrean cìse às dèidh taic EU VAT a chur an comas.

Aig bonn na duilleige, chì thu roghainnean tarraing VAT. Ma thaghas tu seòrsa ìre agus ma bhriogas tu air a’ phutan **Update EU VAT Rates**, tarraingidh sin suas agus lìonaidh e an clàr gu fèin-obrachail leis na h-ìrean cìse airson gach ball-stàit san EU. An uair sin, chan fheum thu ach a shàbhaladh.

![Putan Update EU VAT Rates aig bonn deasaiche nan ìrean cìse](/img/config/tax-rates-vat-pull.png)

Faodaidh tu cuideachd na luachan a dheasachadh às dèidh an tarraing a-steach. Gus sin a dhèanamh, deasaich dìreach loidhne a’ chlàir a tha a dhìth ort agus briog gus na luachan ùra a shàbhaladh.

### Dearbhadh VAT {#vat-validation}

Nuair a tha taic VAT air a cur an comas, cuiridh Ultimate Multisite raon a bharrachd ri foirm an checkout, fo raon an t-seòlaidh bileachaidh. Nochdaidh an raon a-mhàin do luchd-ceannach a tha suidhichte san EU.

<!-- Screenshot unavailable: Raon Àireamh VAT air foirm checkout aghaidh na làraich fo sheòladh bileachaidh -->

Dearbhaidh Ultimate Multisite an Àireamh VAT an uair sin agus ma thilleas i mar tè dhligheach, thèid an dòigh reverse charge a chur an sàs agus thèid an ìre cìse a shuidheachadh gu 0% air an òrdugh sin.
