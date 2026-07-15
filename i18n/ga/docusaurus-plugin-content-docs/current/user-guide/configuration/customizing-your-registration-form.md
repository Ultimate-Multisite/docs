---
title: Do Fhoirm Chláraithe a Shaincheapadh
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Do Fhoirm Chláraithe a Shaincheapadh

Chun cuma uathúil a chur ar do líonra i gcomparáid leis na SaaS eile ar fad atá tógtha ar ardán WordPress, ligeann Ultimate Multisite duit do leathanaigh chlárúcháin agus logála isteach a shaincheapadh lenár ngné **Foirmeacha Checkout**.

Cé gur bealach éasca agus solúbtha iad chun triail a bhaint as cuir chuige éagsúla agus tú ag iarraidh custaiméirí nua a thiontú, úsáidtear iad den chuid is mó chun foirmeacha cláraithe pearsantaithe a chruthú. Tá sé mar aidhm ag an alt seo a thaispeáint duit conas is féidir leat é sin a dhéanamh.

## Leathanaigh logála isteach agus chlárúcháin: {#login-and-registration-pages}

Nuair a shuiteáiltear Ultimate Multisite, cruthaíonn sé leathanaigh shaincheaptha logála isteach agus chlárúcháin go huathoibríoch ar do phríomhshuíomh. Is féidir leat na leathanaigh réamhshocraithe seo a athrú am ar bith trí dhul chuig do leathanach **Ultimate Multisite > Settings > Login & Registration**.

![Leathanach socruithe Logála Isteach agus Clárúcháin](/img/config/settings-general.png)

Seo radharc iomlán ar leathanach socruithe an logála isteach agus an chlárúcháin:

![Leathanach iomlán socruithe Logála Isteach agus Clárúcháin](/img/config/settings-login-registration-full.png)

Breathnaímis ar gach ceann de na roghanna is féidir leat a shaincheapadh ar an leathanach **Login & Registration**:

  * **Cumasaigh clárú:** Cumasóidh nó díchumasóidh an rogha seo an clárú ar do líonra. Má mhúchtar é, ní bheidh do chustaiméirí in ann clárú ná liostáil le do tháirgí.

  * **Cumasaigh fíorú ríomhphoist:** Má chuirtear an rogha seo ar siúl, gheobhaidh custaiméirí a liostálann le plean saor in aisce nó le plean íoctha a bhfuil tréimhse trialach aige ríomhphost fíoraithe agus beidh orthu cliceáil ar an nasc fíoraithe chun a suíomhanna gréasáin a chruthú.

  * **Leathanach cláraithe réamhshocraithe:** Seo é an leathanach réamhshocraithe don chlárú. Ní mór an leathanach seo a bheith foilsithe ar do shuíomh gréasáin agus foirm chláraithe a bheith air (ar a dtugtar foirm checkout freisin) - áit a liostálfaidh do chliaint le do tháirgí. Is féidir leat an oiread leathanaigh chlárúcháin agus foirmeacha checkout agus is mian leat a chruthú, ach cuimhnigh an shortcode don fhoirm checkout a chur ar an leathanach cláraithe; murach sin, ní thaispeánfar í.

  * **Úsáid leathanach logála isteach saincheaptha:** Ligeann an rogha seo duit leathanach logála isteach saincheaptha a úsáid, seachas an leathanach réamhshocraithe wp-login.php. Má chuirtear an rogha seo ar siúl, is féidir leat an leathanach a úsáidfear le haghaidh logála isteach a roghnú sa rogha **Default login page** (díreach thíos).

  * **Doiléirigh an bun-URL logála isteach (wp-login.php)** : Más mian leat an bun-URL logála isteach a cheilt, is féidir leat an rogha seo a chur ar siúl. Tá sé seo úsáideach chun ionsaithe brute-force a chosc. Má chumasaítear an rogha seo, taispeánfaidh Ultimate Multisite earráid 404 nuair a dhéanfaidh úsáideoir iarracht rochtain a fháil ar an mbunnasc wp-login.php

  * **Cuir iallach ar fhoilsiú sioncrónach suímh:** Tar éis do chustaiméir liostáil le táirge ar líonra, ní mór an suíomh nua atá ar feitheamh a thiontú ina fhíorshuíomh líonra. Tarlaíonn an próiseas foilsithe trí Job Queue, go haisioncrónach. Cumasaigh an rogha seo chun iallach a chur ar an bhfoilsiú tarlú san iarratas céanna leis an gclárú.

Anois, féachaimis ar roghanna eile atá fós ábhartha don phróiseas logála isteach agus cláraithe. Tá siad díreach faoi **Roghanna eile** ar an leathanach céanna Login & registration:

  * **Ról réamhshocraithe:** Seo é an ról a bheidh ag do chustaiméirí ar a suíomh gréasáin tar éis an phróisis chlárúcháin.

  * **Cumasaigh Jumper:** Cumasaíonn sé aicearra Jumper sa limistéar riaracháin. Ligeann Jumper do riarthóirí léim go tapa chuig scáileáin Ultimate Multisite, rudaí líonra, agus cinn scríbe tacaithe eile gan brabhsáil trí gach roghchlár. Múch é más fearr leat an uirlis thapa nascleanúna sin a cheilt ón gcomhéadan riaracháin.

  * **Cuir úsáideoirí leis an bpríomhshuíomh chomh maith:** Má chumasaítear an rogha seo, cuirfear an t-úsáideoir le príomhshuíomh do líonra freisin tar éis an phróisis chlárúcháin. Má chumasaíonn tú an rogha seo, taispeánfar rogha chun **ról réamhshocraithe** na n-úsáideoirí seo ar do shuíomh gréasáin a shocrú díreach thíos freisin.

  * **Cumasaigh cuntais iolracha:** Lig d’úsáideoirí cuntais a bheith acu ar shuíomhanna éagsúla de do líonra leis an seoladh ríomhphoist céanna. Má tá an rogha seo múchta, ní bheidh do chustaiméirí in ann Account a chruthú ar shuíomhanna gréasáin eile atá ag rith ar do líonra leis an seoladh ríomhphoist céanna.

Agus sin iad na roghanna ar fad a bhaineann le logáil isteach agus clárú is féidir leat a shaincheapadh! Ná déan dearmad do shocruithe a shábháil tar éis duit iad a chur in eagar.

## Foirmeacha cláraithe iolracha a úsáid: {#using-multiple-registration-forms}

Cuireann Ultimate Multisite 2.0 eagarthóir foirme checkout ar fáil a ligeann duit an oiread foirmeacha agus is mian leat a chruthú, le réimsí éagsúla, táirgí ar tairiscint, srl.

Tá na leathanaigh logála isteach agus chlárúcháin araon leabaithe le shortcodes: **[wu_login_form]** ar an leathanach logála isteach agus**[wu_checkout]** don leathanach cláraithe. Is féidir leat an leathanach cláraithe a shaincheapadh tuilleadh trí fhoirmeacha checkout a thógáil nó a chruthú.

Chun rochtain a fháil ar an ngné seo, téigh chuig an roghchlár **Checkout Forms**, ar an taobhbharra clé.

![Roghchlár Checkout Forms sa taobhbharra](/img/config/checkout-forms-list.png)

Ar an leathanach seo, is féidir leat na foirmeacha checkout go léir atá agat a fheiceáil.

Más mian leat ceann nua a chruthú, cliceáil ar **Add Checkout Form** ag barr an leathanaigh.

Is féidir leat ceann de na trí rogha seo a roghnú mar phointe tosaigh: céim aonair, ilchéimeach nó bán. Ansin, cliceáil ar **Go to the Editor**.

![Add Checkout Form le roghanna céime aonair, ilchéimeacha, nó bána](/img/config/checkout-forms-list.png)

Mar mhalairt air sin, is féidir leat na foirmeacha atá agat cheana a chur in eagar nó a dhúbailt trí chliceáil ar na roghanna faoi bhun a n-ainm. Ansin, gheobhaidh tú freisin na roghanna chun shortcode na foirme a chóipeáil nó chun an fhoirm a scriosadh.

![Gníomhartha ainlithe foirme checkout le heagarthóireacht, dúbailt, agus scriosadh](/img/config/checkout-form-hover-actions.png)

Má roghnaíonn tú céim aonair nó ilchéimeach, beidh an fhoirm checkout réamhlíonta cheana leis na céimeanna bunúsacha chun go n-oibreoidh sí. Ansin, más mian leat, is féidir leat céimeanna breise a chur léi.

### Foirm Checkout a Chur in Eagar: {#editing-a-checkout-form}

Mar a luamar cheana, is féidir leat foirmeacha checkout a chruthú chun críocha éagsúla. Sa sampla seo oibreoimid ar fhoirm chláraithe.

Tar éis duit nascleanúint a dhéanamh chuig eagarthóir na foirme checkout, tabhair ainm do d’fhoirm (a úsáidfear le haghaidh tagartha inmheánaí amháin) agus slug (a úsáidtear chun shortcakes a chruthú, mar shampla).

![Eagarthóir foirme seiceála amach le réimsí ainm agus slug](/img/config/checkout-form-name-slug.png)

Tá foirmeacha déanta as céimeanna agus réimsí. Is féidir leat céim nua a chur leis trí chliceáil ar **Cuir Céim Nua Seiceála Amach leis**.

![Cnaipe Cuir Céim Nua Seiceála Amach leis](/img/config/checkout-form-add-step.png)

Ar an gcéad chluaisín den fhuinneog mhódúil, líon isteach ábhar chéim d’fhoirme. Tabhair ID, ainm agus cur síos di. Úsáidtear na míreanna seo go hinmheánach den chuid is mó.

![Cluaisín ábhair céime seiceála amach le ID, ainm, agus cur síos](/img/config/checkout-form-step-content.png)

Ansin, socraigh infheictheacht na céime. Is féidir leat roghnú idir **Taispeáin i gcónaí** , **Taispeáin d’úsáideoirí logáilte isteach amháin** nó **Taispeáin d’aíonna amháin**.

![Roghanna infheictheachta céime seiceála amach](/img/config/checkout-form-step-visibility.png)

Ar deireadh, cumraigh stíl na céime. Is réimsí roghnacha iad seo.

![Cumraíocht stíle céime seiceála amach](/img/config/checkout-form-step-style.png)

Anois, tá sé in am réimsí a chur lenár gcéad chéim. Níl le déanamh ach cliceáil chun **Réimse Nua a Chur Leis** agus roghnaigh an cineál rannáin atá uait.

![Cnaipe Cuir Réimse Nua Leis](/img/config/checkout-form-add-field-button.png)![Roghchlár anuas roghnaithe cineáil réimse](/img/config/checkout-form-field-type-dropdown.png)

Tá paraiméadair éagsúla le líonadh ag gach réimse. Don chéad iontráil seo, roghnóimid an réimse **Ainm úsáideora**.

![Cumraíocht réimse Ainm úsáideora](/img/config/checkout-form-username-content.png)![Paraiméadair réimse Ainm úsáideora](/img/config/checkout-form-username-visibility.png)![Socruithe breise réimse Ainm úsáideora](/img/config/checkout-form-username-style.png)

Is féidir leat an oiread céimeanna agus réimsí is gá duit a chur leis. Chun do tháirgí a thaispeáint do do chustaiméirí ionas gur féidir leo ceann a roghnú, úsáid an réimse Tábla Praghsála. Más mian leat ligean do do chliaint teimpléad a roghnú, cuir an réimse Roghnú Teimpléid leis. Agus mar sin de.

![Eagarthóir foirme seiceála amach le réimse roghnaithe teimpléid](/img/config/checkout-form-with-template-field.png)

_**Nóta:** Má chruthaíonn tú táirge tar éis duit d’fhoirm seiceála amach a chruthú, beidh ort an táirge a chur leis sa rannán Tábla praghsála. Mura gcuireann tú leis é, ní bheidh an táirge le feiceáil ag do chustaiméirí ar an leathanach clárúcháin._

_**Nóta 2:** is réimsí éigeantacha iad ainm úsáideora, ríomhphost, pasfhocal, teideal suímh, URL suímh, achoimre ordaithe, íocaíocht, agus cnaipe cuir isteach chun foirm seiceála amach a chruthú._

Agus tú ag obair ar d’fhoirm seiceála amach, is féidir leat an cnaipe Réamhamhairc a úsáid i gcónaí chun a fheiceáil conas a fheicfidh do chliaint an fhoirm. Is féidir leat malartú freisin idir amharc mar úsáideoir atá ann cheana nó mar chuairteoir.

![Cnaipe Réamhamhairc ar eagarthóir na foirme seiceála amach](/img/config/checkout-form-preview-button.png)![Réamhamharc ar fhoirm seiceála amach mar chuairteoir nó úsáideoir atá ann cheana](/img/config/checkout-form-preview-modal.png)

Ar deireadh, faoi **Ardroghanna** is féidir leat an teachtaireacht don leathanach **Go raibh maith agat** a chumrú, snippets a chur leis chun tiontuithe a rianú, CSS saincheaptha a chur le d’fhoirm seiceála amach nó í a shrianadh do thíortha áirithe.

![Ardroghanna le leathanach Go raibh maith agat, rianú tiontaithe, agus CSS saincheaptha](/img/config/checkout-form-advanced.png)

Is féidir leat d’fhoirm seiceála amach a chumasú nó a dhíchumasú de láimh freisin tríd an rogha seo a scoránú sa cholún ar dheis, nó an fhoirm a scriosadh go buan.

![Scorán gníomhach agus rogha scriosta don fhoirm seiceála amach](/img/config/checkout-form-active.png)

Ná déan dearmad d’fhoirm seiceála amach a shábháil!

![Cnaipe Sábháil Foirm Seiceála Amach](/img/config/checkout-form-save.png)

Chun shortcode d’fhoirme a fháil, cliceáil ar **Gin Shortcode** agus cóipeáil an toradh a thaispeántar ar an bhfuinneog mhódúil.

![Módal Gin Shortcode le shortcode le cóipeáil](/img/config/checkout-form-editor.png)

_**Nóta:** Beidh ort an shortcode seo a chur le do leathanach clárúcháin chun an fhoirm seiceála amach seo a chur leis._

## Táirgí agus teimpléid a réamhroghnú trí pharaiméadair URL: {#pre-selecting-products-and-templates-via-url-parameters}

Más mian leat táblaí praghsála saincheaptha a chruthú do do tháirgí agus an táirge nó an teimpléad a roghnaíonn do chustaiméir ó do thábla praghsála nó ó leathanach na dteimpléad a réamhroghnú ar an bhfoirm seiceála amach, is féidir leat paraiméadair URL a úsáid chuige seo.

### **Do phleananna:** {#for-plans}

Téigh go **Ultimate Multisite > Táirgí > Roghnaigh plean**. Ba chóir duit an cnaipe **Cliceáil chun Nasc Inroinnte a chóipeáil** a fheiceáil ag barr an leathanaigh. Seo é an nasc is féidir leat a úsáid chun an plean sonrach seo a réamhroghnú ar d’fhoirm seiceála amach.

![Leathanach táirge le cnaipe naisc inroinnte](/img/config/products-list.png)

Tabhair faoi deara nach bhfuil an nasc inroinnte seo bailí ach do **Phleananna**. Ní féidir leat naisc inroinnte a úsáid do phacáistí ná do sheirbhísí.

### Do theimpléid: {#for-templates}

Más mian leat teimpléid suímh a réamhroghnú ar d’fhoirm seiceála amach, is féidir leat an paraiméadar seo a úsáid: **?template_id=X** ar URL do leathanaigh clárúcháin. Ní mór an "X" a chur in ionad leis an **uimhir ID teimpléid suímh**. Chun an uimhir seo a fháil, téigh go **Ultimate Multisite > Suímh**.

Cliceáil ar **Bainistigh** díreach faoi bhun an teimpléid suímh is mian leat a úsáid. Feicfidh tú uimhir SITE ID. Úsáid an uimhir seo don teimpléad suímh sonrach seo chun é a réamhroghnú ar d’fhoirm seiceála amach. Inár gcás anseo, bheadh an paraiméadar URL mar **?template_id=2**.

![Liosta suíomhanna a thaispeánann ID teimpléid suímh](/img/config/site-templates-list.png)

Abair gurb é [**www.mynetwork.com**](http://www.mynetwork.com) suíomh Gréasáin ár líonra agus go bhfuil ár leathanach clárúcháin lenár bhfoirm seiceála amach suite ar an leathanach **/register**. Beidh cuma mar seo ar an URL iomlán leis an teimpléad suímh seo réamhroghnaithe: [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Agus más mian leat, is féidir leat táirgí agus teimpléid araon a réamhroghnú do d’fhoirm seiceála amach. Níl le déanamh agat ach nasc inroinnte an phlean a chóipeáil agus an paraiméadar teimpléid a ghreamú ag an deireadh. Beidh cuma mar seo air: [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
