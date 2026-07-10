---
title: Creachtáil Codeanna Dáta
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Creachtánna Discount Codes (v2) {#creating-discount-codes-v2}

_**NOTE CRUCIAL: Tá an curte seo ag curte ar Ultimate Multisite version 2.x.**_

Leat Ultimate Multisite, is féidir leat curte discount codes chun scáthanna a chur ar na subscription-a do chliantacht. Agus curte sin curtha, is féidir é go fácil!

## Creacht agus Déanamh ar Discount Codes {#creating-and-editing-discount-codes}

Chun curte nó a athrú discount code, rag thar **Ultimate Multisite > Discount Codes**.

![List discount codes — state leat before any codes exist](/img/config/discount-codes-empty.png)

Ar an áit seo beidh tú le liosta na discount codes atá agat ag curte.

Is féidir leat cliceáil ar **Add Discount Code** chun nua coupon a chur in áit, nó is féidir leat athrú é sin atá agat ag curte mar a bhfáth tú ar éad agus cliceáil ar **Edit**.

![List discount codes with hover actions showing Edit and Delete links](/img/config/discount-codes-list-hover.png)

![Add Discount Code button in the page header](/img/config/discount-codes-add-button.png)

Beidh tú ag curte go dtí an curte a chur in áit, nó athrú é sin. Ar an chuid seo, beidh muid ag curte nua acu.

![Discount code edit page with all sections visible](/img/config/discount-code-edit.png)

Leat méid a bheith ar na curte atá ag curte anseo:

**Enter Discount Code:** Is é sin an teachtaireacht (name) do chuid discount code. Ní bhfear an curte seo a bhí ag na chliantacht ag úsáid ar fómhar checkout.

**Description:** Anseo, is féidir leat a chur inscríbhinn go beag má tá an coupon seo ag curte.

![Discount code name and description fields at the top of the edit page](/img/config/discount-code-description.png)

Is féidir leat hefyd a fheiceáil an discount code mar active (a chomhtháir) nó inactive (an fhéidir).

![Discount code active status](/img/config/discount-code-active.png)

**Coupon code:** Anseo is féidir leat a chur inscríbhinn an curte atá ag na chliantacht ag úsáid ag curte ar checkout.

![Champ kódhúsa coupon a geal a bhfáir na custaimeracha ag an chuidiadh](/img/config/discount-code-coupon-field.png)

**Cuidiadh:** Anseo, leat orm féachaint **poursaí** nó **amán ficeála** ar chuidiadh do kódhúsa discount.

![Taispeall amán uidheartha le toursa nó amán ficeála](/img/config/discount-code-amount.png)

**Áir le athrúcháin:** Má tá an t-option seo ag bheith off, beidh an kódhúsa discount ag éirí an chéad pléas. Beidh aon duine eile ag níos mó ná díonachta. Má tá an t-option seo ag bheith on, beidh an kódhúsa discount ag teacht ar an gcuidiadh sinte.

**Cuidiadh féacháin chuidiadh:** Má tá an t-option seo ag bheith off, níllt an kódhúsa coupon aon duine a fháil do féachán chuidiadh. Má tá an t-option seo ag bheith on, leat a chur ar fáil (poursaí nó amán ficeála) a bhaint ar an féachán chuidiadh sinte.

![Taispeall optionaí áir le athrúcháin agus cuidiadh féacháin chuidiadh](/img/config/discount-code-renewals.png)

**Actif:** Chúisigh nó déan an kódhúsa coupon seo go mhaith.

![Taispeall actif chun an kódhúsa discount a fháil nó a déanamh ag an chuidiadh](/img/config/discount-code-active.png)

Under **Advanced Options**, táimid ag cur isteach na rathacha seo:

![Rathacha áir le athrúcháin do kódhúsa discount](/img/config/discount-code-advanced.png)

**Límidtear úsáid:**

  * **Úsáid:** Anseo, leat a fheiceáil conas a chur in iúl an t-amach sinte a bhí ag éirí ná an kódhúsa discount.

  * **Max uses:** Beidh sé seo ag líonadh an amach sinte a bhí ag úsáid na custaimeracha ar an kódhúsa discount. Mar shampla, má chur agat 10 anseo, is féidir leis an coupon éirí ná 10 gceann a bheith ag úsáid. Tar éifeachtach seo, ní féidir an kódhúsa discount a úsáid mar chuidiadh eile.

![Taispeall líonadh úsáid le amach sinte agus amach max uses](/img/config/discount-code-limit-uses.png)

**Téigh agus tairiscint:** Beidh tú an tairiscint ag cur isteach oiriúnas de dhá láthair (start date) agus/nó láthair a bhféadfadh tú a chur ar fáil.

![Start and expiration date fields for scheduling the discount code](/img/config/discount-code-dates.png)

**Límidte próduictí:** Má tá **Select products** ag teacht ar fáil, beidh gach próduocht agat ag tairiscint. Beidh tú an tairiscint a bheith ag cur isteach nó a chlaith (ag teacht ar fáil nó a chlaith) chun a bheith ag fháil ar an próduocht atá ag fháil ar an code tairiscint seo. Ní bhfaidh próduicta a chlaith go hiomlán éifeachtach mar a bhíonn tú ag iarraidh a bheith ag cur isteach an code tairiscint seo chun na ghráisteoirí agat.

![Limit products section with per-product toggle switches](/img/config/discount-code-limit-products.png)

Tar éis trí athbhreithniú gach dearmad seo, cliceáil ar **Save Discount Code** chun an tairiscint a shábháil agus tá sé leat!

![Save Discount Code button at the bottom of the edit page](/img/config/discount-code-save.png)

Tá an tairiscint ag cur isteach ar chuid dearmad agat, agus trí seo, is féidir leat cliceáil chun é a **edit nó a dtalaí**.

![Discount code row in the list with Edit and Delete hover actions](/img/config/discount-codes-list-hover.png)

###

### Aistriúar URL (URL Parameters): {#using-url-parameters}

Má tá tú ag iarraidh athrú an tairiscintacha do chuid tabhairtacha nó a chur ar fáil curteoir níos gole do do shábháil agus má tá tú ag iarraidh a chur i bhfeidm code tairiscint ar do form cheangailte, is féidir leat é seo a dhéanamh trí URL parameters.

Ar anois, rud éigin leat a fháil: an link a bheith ag cur isteach chun an plan agat. Chun cheannas seo a dhéanamh, ragad go dtí **Ultimate Multisite > Products** agus déan seachain ar plan.

Cliceáil ar an nútair **Click to Copy Shareable Link**. Beidh sé seo an link a bheith ag cur isteach chun an plan a bhfuil tú ag cur isteach agat. Ag anseo, an link a bheith ag cur isteach a bhí ag cur isteach cheannas seo: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_.

![Product page with shareable link button](/img/config/products-list.png)

Leide an t-amhas ar an codal díonach seo, bosa an paraméar **?discount_code=XXX** ar an URL. Cuireann **XXX** an codal coupon (díonach) ar fáil.

Agus iarráid agam anseo, beidh mé ag aistriú an codal coupon **50OFF** ar an cur chuig seo.

An URL do chláir seo agus le codal díonach 50OFF ag cur chuig, beidh sé ag cur isteach: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
