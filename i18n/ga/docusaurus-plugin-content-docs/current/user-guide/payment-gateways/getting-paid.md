---
title: Íocaíocht a Fháil
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Ag Fáil Íocaíochta (v2)

_**NÓTA TÁBHACHTACH: Tagraíonn an t-alt seo do Ultimate Multisite leagan 2.x.**_

Tá córas ballraíochta agus billeála ionsuite ag Ultimate Multisite. Chun go bhfeidhmeoidh ár gcóras billeála, tá na geataí íocaíochta is coitianta a úsáidtear i ríomhthráchtáil comhtháite againn. Is iad na geataí íocaíochta réamhshocraithe in Ultimate Multisite ná _Stripe_ , _PayPal_ , agus Íocaíocht Láimhe. Is féidir leat _WooCommerce_ , _GoCardless_ agus _Payfast_ a úsáid freisin chun íocaíochtaí a fháil trína mbreiseáin faoi seach a shuiteáil.

## Socruithe Bunúsacha {#basic-settings}

Is féidir leat aon cheann de na geataí íocaíochta seo a chumrú faoi shocruithe íocaíochta Ultimate Multisite. Is féidir leat é a aimsiú trí dhul chuig **roghchlár Ultimate Multisite > Socruithe > Íocaíochtaí.**

![Leathanach socruithe Íocaíochtaí in Ultimate Multisite ag taispeáint an phainéil Íocaíochtaí](/img/config/payments-settings-page.png)

Sula socraíonn tú do gheata íocaíochta, féach ar na socruithe bunúsacha íocaíochta is féidir leat a chumrú:

**Cuir uath-athnuachan i bhfeidh** **m:** Cinnteoidh sé seo go dtarlóidh an íocaíocht arís go huathoibríoch ag deireadh gach timthrialla billeála, ag brath ar an minicíocht bhilleála a roghnaigh an t-úsáideoir.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Seiceálann Ultimate Multisite v2.13.0 an bhfuil dintiúr athnuachana in-athúsáidte ag an ngeata gníomhach sula sábháiltear ballraíocht athfhillteach le huath-athnuachan cumasaithe. Is féidir le dintiúr athnuachana a bheith ina shíntiús geata, ina chomhaontú billeála, ina vault token sábháilte, nó ina mhodh íocaíochta in-athúsáidte coibhéiseach. Má thuairiscíonn an geata nach bhfuil aon dintiúr inúsáidte ann, sábhálann Ultimate Multisite an bhallraíocht ach múchann sé uath-athnuachan agus taifeadann sé staid an dintiúir atá ar iarraidh ionas gur féidir le riarthóir nó sreabhadh tacaíochta iarraidh ar an gcustaiméir an íocaíocht a údarú arís roimh dháta na hathnuachana.

Cuireann sé seo cosc ar bhallraíocht a bheith le feiceáil amhail is go n-athnuachan sí go huathoibríoch nuair nach féidir leis an ngeata ach íocaíochtaí aonuaire a bhailiú. Ba cheart do bhreiseáin gheata a dheimhniú go stórálann seiceáil amach athfhillteach dintiúr in-athúsáidte, go háirithe nuair a thacaíonn an geata le gabháil aonuaire agus le modhanna íocaíochta vaultáilte/síntiús araon.

**Ceadaigh trialacha gan mhodh íocaíochta** **:** Agus an rogha seo cumasaithe, ní bheidh ar do chliant aon fhaisnéis airgeadais a chur leis le linn an phróisis chlárúcháin. Ní bheidh sé seo riachtanach ach amháin nuair a rachaidh an tréimhse trialach in éag.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Seol sonrasc ar dheimhniú íocaíochta:** Tugann sé seo rogha duit sonrasc a sheoladh nó gan é a sheoladh tar éis íocaíochta. Tabhair faoi deara go mbeidh rochtain ag úsáideoirí ar a stair íocaíochta faoina dashboard foshuímh. Ní bhaineann an rogha seo leis an nGeata Láimhe.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Scéim uimhrithe sonrasc:** Anseo, is féidir leat cód tagartha íocaíochta nó scéim uimhreacha sheicheamhach a roghnú. Má roghnaíonn tú cód tagartha íocaíochta a úsáid do do shonraisc, ní gá duit aon rud a chumrú. Má roghnaíonn tú scéim uimhreacha sheicheamhach a úsáid, beidh ort an **chéad uimhir sonraisc eile** a chumrú (Úsáidfear an uimhir seo mar uimhir an tsonraisc don chéad sonrasc eile a ghinfear ar an gcóras. Méadaítear í faoi a haon gach uair a chruthaítear sonrasc nua. Is féidir leat í a athrú agus í a shábháil chun uimhir sheicheamhach na sonraisc a athshocrú go luach sonrach) agus an **réimír uimhir sonraisc.**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Cá háit a bhfaighidh tú na geataí: {#where-to-find-the-gateways}

Is féidir leat na geataí íocaíochta a shocrú ar an leathanach céanna ( **Ultimate Multisite > Socruithe > Íocaíochtaí**). Díreach faoi **gheataí íocaíochta gníomhacha** , beidh tú in ann a fheiceáil: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ agus _Láimhe_.

![Rannán Geataí Íocaíochta Gníomhacha ag liostú Stripe, Stripe Checkout, PayPal agus Láimhe](/img/config/payments-active-gateways.png)

Tá alt tiomnaithe againn do gach geata íocaíochta a threoróidh thú trí na céimeanna chun é a shocrú, agus is féidir leat iad a aimsiú sna naisc thíos.

Is féidir leat sonraí íocaíochta a fheiceáil agus a chur in eagar:

![Comhéadan eagarthóireachta íocaíochta](/img/admin/payment-edit.png)

Seo amharc iomlán ar an leathanach eagarthóireachta íocaíochta:

![Comhéadan iomlán eagarthóireachta íocaíochta](/img/admin/payment-edit-full.png)

Seo freisin amharc iomlán ar shocruithe na ngeataí íocaíochta:

![Leathanach iomlán socruithe geataí íocaíochta](/img/config/settings-payments-gateways-full.png)

**An geata Stripe a shocrú**

**An geata PayPal a shocrú**** **

**Íocaíochtaí láimhe a shocrú**

Anois, más mian leat _WooCommerce_ , _GoCardless_ nó _Payfast_ a úsáid mar do gheata íocaíochta, beidh ort **a mbreiseáin a shuiteáil agus a chumrú**.

### Conas an breiseán WooCommerce a shuiteáil: {#how-to-install-the-woocommerce-add-on}

Tuigimid nach bhfuil _Stripe_ agus _PayPal_ ar fáil i roinnt tíortha, rud a chuireann teorainn le húsáideoirí Ultimate Multisite nó a chuireann bac orthu ár bplugin a úsáid go héifeachtach. Mar sin chruthaíomar breiseán chun _WooCommerce,_ a chomhtháthú, ar plugin ríomhthráchtála an-choitianta é. Chruthaigh forbróirí ar fud an domhain breiseáin chun geataí íocaíochta éagsúla a chomhtháthú leis. Bhain muid leas as seo chun na geataí íocaíochta is féidir leat a úsáid le córas billeála Ultimate Multisite a leathnú.

_**TÁBHACHTACH:** Éilíonn Ultimate Multisite: WooCommerce Integration go mbeidh WooCommerce gníomhachtaithe ar do phríomhshuíomh ar a laghad._

Ar dtús, téigh chuig leathanach na mbreiseán. Is féidir leat é a aimsiú trí dhul chuig **Ultimate Multisite > Socruithe**. Ba cheart duit an tábla **Breiseáin** a fheiceáil. Cliceáil ar **Seiceáil ár mBreiseáin**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Tar éis duit cliceáil ar **Seiceáil ár mBreiseáin** , atreorófar thú chuig leathanach na mbreiseán. Anseo is féidir leat gach breiseán Ultimate Multisite a aimsiú. Cliceáil ar an mbreiseán **Ultimate Multisite: WooCommerce Integration**.

![Leathanach breiseán ag liostú breiseáin Ultimate Multisite lena n-áirítear WooCommerce Integration](/img/addons/addons-page.png)

Osclóidh fuinneog leis na sonraí faoin mbreiseán. Ní gá ach cliceáil ar **Suiteáil Anois**.

<!-- Gabháil scáileáin nach bhfuil ar fáil: dialóg sonraí bhreiseán Ultimate Multisite WooCommerce Integration leis an gcnaipe Suiteáil Anois -->

Tar éis don tsuiteáil a bheith críochnaithe, atreorófar thú chuig leathanach na mbreiseán. Anseo, ní gá ach cliceáil ar **Gníomhachtaigh ar an Líonra** agus gníomhachtófar an breiseán WooCommerce ar do líonra.

<!-- Gabháil scáileáin nach bhfuil ar fáil: leathanach na mbreiseán leis an nasc Gníomhachtaigh ar an Líonra don bhreiseán WooCommerce Integration -->

Tar éis é a ghníomhachtú, mura bhfuil an breiseán WooCommerce suiteáilte agus gníomhachtaithe agat fós ar do shuíomh gréasáin, gheobhaidh tú meabhrúchán.

<!-- Gabháil scáileáin nach bhfuil ar fáil: fógra riaracháin ag meabhrú don riarthóir an breiseán WooCommerce a shuiteáil agus a ghníomhachtú -->

Chun tuilleadh a léamh faoin mbreiseán WooCommerce Integration, **cliceáil anseo**.

### Conas an breiseán GoCardless a shuiteáil: {#how-to-install-the-gocardless-add-on}

Tá na céimeanna chun an breiseán _GoCardless_ a shuiteáil beagnach mar an gcéanna leis an mbreiseán _WooCommerce_. Téigh chuig leathanach na mbreiseán agus roghnaigh an breiseán **Ultimate Multisite: GoCardless Gateway**.

<!-- Gabháil scáileáin nach bhfuil ar fáil: leathanach na mbreiseán agus an breiseán Ultimate Multisite GoCardless Gateway aibhsithe -->

Osclóidh fuinneog an bhreiseáin. Cliceáil ar **Suiteáil Anois**.

<!-- Gabháil scáileáin nach bhfuil ar fáil: dialóg sonraí bhreiseán Ultimate Multisite GoCardless Gateway leis an gcnaipe Suiteáil Anois -->

Tar éis don tsuiteáil a bheith críochnaithe, atreorófar thú chuig leathanach na mbreiseán. Anseo, ní gá ach cliceáil ar **Gníomhachtaigh ar an Líonra** agus gníomhachtófar an breiseán _GoCardless_ ar do líonra.

<!-- Gabháil scáileáin nach bhfuil ar fáil: leathanach na mbreiseán leis an nasc Gníomhachtaigh ar an Líonra don bhreiseán GoCardless Gateway -->

Chun foghlaim conas tosú leis an ngeata _GoCardless_, **léigh an t-alt seo**.

### Conas an breiseán Payfast a shuiteáil: {#how-to-install-the-payfast-add-on}

Téigh chuig leathanach na mbreiseán agus roghnaigh an breiseán **Ultimate Multisite: Payfast Gateway**.

<!-- Gabháil scáileáin nach bhfuil ar fáil: leathanach na mbreiseán agus an breiseán Ultimate Multisite Payfast Gateway aibhsithe -->

Osclóidh fuinneog an bhreiseáin. Cliceáil ar **Suiteáil Anois.**

<!-- Gabháil scáileáin nach bhfuil ar fáil: dialóg sonraí bhreiseán Ultimate Multisite Payfast Gateway leis an gcnaipe Suiteáil Anois -->

Tar éis don tsuiteáil a bheith críochnaithe, atreorófar thú chuig leathanach na mbreiseán. Anseo, ní gá ach cliceáil ar **Gníomhachtaigh ar an Líonra** agus gníomhachtófar an breiseán _Payfast_ ar do líonra.

<!-- Gabháil scáileáin nach bhfuil ar fáil: leathanach na mbreiseán leis an nasc Gníomhachtaigh ar an Líonra don bhreiseán Payfast Gateway -->
