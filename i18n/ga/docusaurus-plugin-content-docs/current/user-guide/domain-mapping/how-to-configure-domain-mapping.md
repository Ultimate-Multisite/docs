---
title: Conas Mapáil Fearainn a Chumrú
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Conas Mapáil Fearainn a Chumrú (v2) {#how-to-configure-domain-mapping-v2}

_**NÓTA TÁBHACHTACH: Tagraíonn an t-alt seo do leagan 2.x de Ultimate Multisite.**_

Ceann de na gnéithe is cumhachtaí de líonra préimhe ná an cumas deis a thabhairt dár gcliaint fearann barrleibhéil a cheangal lena suíomhanna. Tar éis an tsaoil, cé acu a bhfuil cuma níos gairmiúla air: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) nó [_**joesbikeshop.com**_](http://joesbikeshop.com)? Sin é an fáth a dtugann Ultimate Multisite an ghné sin ionsuite, gan gá le plugins tríú páirtí a úsáid.

## Cad is mapáil fearainn ann? {#whats-domain-mapping}

Mar a thugann an t-ainm le fios, is éard atá i mapáil fearainn ná an cumas a chuireann Ultimate Multisite ar fáil iarratas ar fhearann saincheaptha a ghlacadh agus an t-iarratas sin a mhapáil chuig an suíomh comhfhreagrach sa líonra a bhfuil an fearann áirithe sin ceangailte leis.

### Conas mapáil fearainn a shocrú ar do Líonra Ultimate Multisite {#how-to-setup-domain-mapping-on-your-ultimate-multisite-network}

Éilíonn mapáil fearainn roinnt socraithe ar do thaobhsa chun oibriú. Ar ámharaí an tsaoil, uathoibríonn Ultimate Multisite an obair chrua duit ionas gur féidir leat na riachtanais a chomhlíonadh go héasca.

Le linn suiteáil Ultimate Multisite, cóipeálfaidh agus suiteálfaidh an draoi **sunrise.php** go huathoibríoch chuig an bhfillteán ainmnithe. **Ní ligfidh an draoi duit dul ar aghaidh go dtí go mbeidh an chéim seo críochnaithe**.

<!-- Níl gabháil scáileáin ar fáil: draoi suiteála Ultimate Multisite leis an gcéim sunrise.php -->

Ciallaíonn sé seo, a luaithe a bheidh draoi suiteála Ultimate Multisite críochnaithe le do líonra a shocrú, gur féidir leat tosú ag mapáil an fhearainn shaincheaptha láithreach.

Tabhair faoi deara nach bhfuil mapáil fearainn in Ultimate Multisite éigeantach. Tá rogha agat feidhm dhúchasach mapála fearainn WordPress Multisite nó aon réiteach mapála fearainn eile a úsáid.

Más gá duit mapáil fearainn Ultimate Multisite a dhíchumasú chun slí a thabhairt do réitigh eile mapála fearainn, is féidir leat an ghné seo a dhíchumasú faoi **Ultimate Multisite > Settings > Domain Mapping**.

![Leathanach socruithe Mapáil Fearainn ag taispeáint atreorú admin, teachtaireacht mapála agus roghanna DNS](/img/config/domain-mapping-settings.png)

Díreach faoin rogha seo, is féidir leat an rogha **Force Admin Redirect** a fheiceáil freisin. Ligeann an rogha seo duit rialú a dhéanamh ar cibé acu an mbeidh do chustaiméirí in ann rochtain a fháil ar a dashboard admin ar a bhfearann saincheaptha agus ar a bhfofhearann araon, nó ar cheann amháin acu.

Má roghnaíonn tú **Force redirect to mapped domain** , ní bheidh do chustaiméirí in ann rochtain a fháil ar a dashboard admin ach ar a bhfearainn shaincheaptha.

Déanfaidh an rogha **Force redirect to** **network domain** a mhalairt go díreach - ní cheadófar do do chustaiméirí rochtain a fháil ar a dashboards ach ar a bhfofhearann, fiú má dhéanann siad iarracht síniú isteach ar a bhfearainn shaincheaptha.

Agus ligeann an rogha **Allow access to the admin by both mapped domain domain and network domain** dóibh rochtain a fháil ar a dashboards admin ar an bhfofhearann agus ar an bhfearann saincheaptha araon.

![Roghchlár anuas Admin Redirect leathnaithe ag taispeáint na dtrí rogha atreoraithe](/img/config/domain-mapping-redirect-options.png)

Tá dhá bhealach ann chun fearann saincheaptha a mhapáil. Is é an chéad cheann ná ainm an fhearainn a mhapáil ó dashboard admin do líonra mar an super admin agus is é an dara ceann ná trí dashboard admin an fho-shuímh faoi leathanach an Account.

Ach sula dtosaíonn tú ag mapáil an fhearainn shaincheaptha chuig ceann de na fo-shuímh i do líonra, beidh ort a chinntiú go bhfuil **socruithe DNS** ainm an fhearainn cumraithe i gceart.

###

### A chinntiú go bhfuil socruithe DNS an fhearainn cumraithe i gceart {#making-sure-the-domain-dns-settings-are-properly-configured}

Chun go n-oibreoidh mapáil, ní mór duit a chinntiú go bhfuil an fearann atá beartaithe agat a mhapáil ag díriú ar sheoladh IP do Líonra. Tabhair faoi deara go bhfuil seoladh IP an Líonra ag teastáil uait - seoladh IP an fhearainn ina bhfuil Ultimate Multisite suiteáilte - ní seoladh IP an fhearainn shaincheaptha is mian leat a mhapáil. Chun seoladh IP fearainn ar leith a chuardach, molaimid dul chuig [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), mar shampla.

Chun an fearann a mhapáil i gceart, ní mór duit **A RECORD** a chur le do chumraíocht **DNS** ag díriú ar an **seoladh IP** sin. Athraíonn bainistíocht DNS go mór idir cláraitheoirí fearainn éagsúla, ach tá neart ranganna teagaisc ar líne a chlúdaíonn é sin má chuardaíonn tú " _Creating A Record on XXXX_ " áit arb é XXXX do chláraitheoir fearainn (m.sh.: " _Creating A Record on_ _GoDaddy_ ").

Má bhíonn deacracht agat é seo a chur ag obair, **déan teagmháil le tacaíocht do chláraitheora fearainn** agus beidh siad in ann cabhrú leat leis an gcuid seo.

Má tá sé beartaithe agat ligean do do chliaint a bhfearainn féin a mhapáil, beidh orthu an obair ar an gcuid seo a dhéanamh iad féin. Treoraigh iad i dtreo chóras tacaíochta a gcláraitheora mura mbíonn siad in ann an A Record a chruthú.

### Ainm fearainn shaincheaptha a mhapáil mar Super Admin {#mapping-custom-domain-name-as-super-admin}

Nuair atá tú logáilte isteach mar super admin ar do líonra, is féidir leat ainmneacha fearainn shaincheaptha a chur leis agus a bhainistiú go héasca trí dhul faoi **Ultimate Multisite > Domains**.

![Leathanach liosta Fearann in Ultimate Multisite](/img/admin/domains-list.png)

Faoin leathanach seo, is féidir leat cliceáil ar an gcnaipe **Add Domain** ag an mbarr agus osclóidh sé seo fuinneog mhódúil inar féidir leat **ainm fearainn saincheaptha** a shocrú agus a líonadh isteach, **an fo-shuíomh** ar mian leat an t-ainm fearainn saincheaptha a chur i bhfeidhm air, agus cinneadh a dhéanamh an mian leat é a shocrú mar ainm **fearainn phríomhúil** nó nach mian (tabhair faoi deara gur féidir leat **ilainmneacha fearainn a mhapáil chuig fo-shuíomh amháin**).

![Módúil Add Domain le hainm fearainn, roghnóir suímh agus lasc fearainn phríomhúil](/img/admin/domain-add-modal.png)

Tar éis duit an fhaisnéis go léir a chur isteach, is féidir leat cliceáil ansin ar an gcnaipe **Add Existing Domain** ag an mbun.

Cuirfidh sé seo tús leis an bpróiseas chun faisnéis DNS an fhearainn shaincheaptha a fhíorú agus a fháil. Feicfidh tú loga ag bun an leathanaigh freisin ionas gur féidir leat an próiseas atá ar siúl aige a leanúint. D’fhéadfadh go dtógfadh sé cúpla nóiméad an próiseas seo a chríochnú.

Cruthaíonn Ultimate Multisite v2.13.0 an taifead fearainn inmheánach go huathoibríoch freisin nuair a chruthaítear suíomh nua ar óstach ar cheart é a láimhseáil mar fhearann in aghaidh an tsuímh. Más é an t-óstach príomhfhearann an líonra, nó ceann de na bunfhearainn chomhroinnte don fhoirm checkout atá cumraithe ar réimse **Site URL**, scipeáiltear an taifead fearainn mhapáilte uathoibríoch ionas go bhfanfaidh an bunfhearann comhroinnte sin ar fáil do gach suíomh a úsáideann é.

Nuair a chláraíonn custaiméir fearann nua trí Domain Seller v1.3.0 nó níos nuaí, mapálann Ultimate Multisite an fearann cláraithe go huathoibríoch chuig suíomh líonra an chustaiméara de réir réamhshocraithe. Ní gá do riarthóirí taifead fearainn mhapáilte ar leith a chur leis a thuilleadh tar éis clárú rathúil, mura dteastaíonn uathu roghanna a choigeartú amhail bratach an phríomhfhearainn, staid ghníomhachtaithe, nó láimhseáil SSL.

Ba cheart don **Chéim** nó don stádas athrú ó **Checking DNS** go **Ready** má tá gach rud socraithe i gceart.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

Má chliceálann tú ar ainm an fhearainn, beidh tú in ann roinnt roghanna a fheiceáil istigh ann. Breathnaímis go tapa orthu:

![Leathanach sonraí fearainn le scoránaigh céime, suímh, gníomhachta, príomhúil agus SSL](/img/admin/domain-edit.png)

**Céim:** Seo an chéim ina bhfuil an fearann. Nuair a chuireann tú an fearann leis den chéad uair, is dócha go mbeidh sé ar an gcéim **Checking DNS**. Seiceálfaidh an próiseas na hiontrálacha DNS agus deimhneoidh sé go bhfuil siad ceart. Ansin, cuirfear an fearann ar an gcéim **Checking SSL**. Seiceálfaidh Ultimate Multisite an bhfuil SSL ag an bhfearann nó nach bhfuil agus catagóireoidh sé d’fhearann mar **Ready** nó **Ready (without SSL)**.

**Suíomh:** An fofhearann atá bainteach leis an bhfearann seo. Taispeánfaidh an fearann mapáilte ábhar an tsuímh shonraigh seo.

**Gníomhach:** Is féidir leat an rogha seo a scoránú air nó as chun an fearann a ghníomhachtú nó a dhíghníomhachtú.

**An é an Príomhfhearann é?:** Is féidir le do chustaiméirí níos mó ná fearann mapáilte amháin a bheith acu do gach suíomh. Úsáid an rogha seo chun a roghnú an é seo an príomhfhearann don suíomh sonrach.

**An bhfuil sé Slán?:** Cé go seiceálann Ultimate Multisite an bhfuil teastas SSL ag an bhfearann nó nach bhfuil sula gcumasaíonn sé é, is féidir leat a roghnú de láimh an fearann a luchtú le teastas SSL nó gan teastas SSL. Tabhair faoi deara mura bhfuil teastas SSL ag an suíomh gréasáin agus má dhéanann tú iarracht iallach a chur air luchtú le SSL, d’fhéadfadh sé earráidí a thabhairt duit.

### Ainm fearainn saincheaptha a mhapáil mar úsáideoir Foshuímh {#mapping-custom-domain-name-as-subsite-user}

Is féidir le riarthóirí foshuímh ainmneacha fearainn saincheaptha a mhapáil óna Dashboard riaracháin foshuímh freisin.

Ar dtús, ní mór duit a chinntiú go gcumasaíonn tú an rogha seo faoi na socruithe **Mapáil fearainn**. Féach an seat scáileáin thíos.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

Is féidir leat an rogha seo a shocrú nó a chumrú freisin ag leibhéal an **Plan** nó sna roghanna táirge ar **Ultimate Multisite > Products**.

![Rannán Fearainn Shaincheaptha ar leathanach eagarthóireachta an táirge](/img/config/product-custom-domains.png)

Nuair atá aon cheann de na roghanna sin cumasaithe agus nuair a cheadaítear d’úsáideoir foshuímh ainmneacha fearainn saincheaptha a mhapáil, ba cheart don úsáideoir foshuímh metabox a fheiceáil faoin leathanach **Account** darb ainm **Fearainn**.

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

Is féidir leis an úsáideoir an cnaipe **Cuir Fearann Leis** a chliceáil agus tabharfaidh sé sin fuinneog mhódúil aníos le roinnt treoracha.

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

Is féidir leis an úsáideoir ansin **An Chéad Chéim Eile** a chliceáil agus leanúint ar aghaidh chun an t-ainm fearainn saincheaptha a chur leis. Is féidir leo a roghnú freisin an mbeidh sé seo mar phríomhfhearann nó nach mbeidh.

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

Má chliceálann tú **Cuir Fearann Leis**, cuirfear tús leis an bpróiseas chun faisnéis DNS an fhearainn shaincheaptha a fhíorú agus a fháil.

### Maidir le Sioncronú Fearainn {#about-domain-syncing}

Is próiseas é Sioncronú Fearainn ina gcuireann Ultimate Multisite an t-ainm fearainn saincheaptha le do chuntas óstála mar fhearann breise **ionas go n-oibreoidh an mhapáil fearainn**.

Tarlaíonn sioncronú fearainn go huathoibríoch má tá comhtháthú ag do sholáthraí óstála le gné mhapála fearainn Ultimate Multisite. Faoi láthair, is iad na soláthraithe óstála seo _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ agus _Cpanel._

Nuair atá comhtháthú soláthraí óstála gníomhach, is féidir le Ultimate Multisite an tasc cruthaithe DNS nó fofhearainn ar thaobh an tsoláthraí a chur sa chiú freisin do shuímh nua-chruthaithe. Mura bhfuil aon chomhtháthú ag éisteacht leis an tasc sin, scipeáiltear an post cúlra chun iontrálacha ciú gan toradh a sheachaint. Leanann seiceálacha DNS agus SSL do fhearainn mhapáilte ag rith tríd an ngnáthphróiseas céime fearainn.

Beidh ort an comhtháthú seo a ghníomhachtú i socruithe Ultimate Multisite faoin gcluaisín **Comhtháthú**.

![Cluaisín Comhtháthaithe i socruithe Ultimate Multisite ag taispeáint soláthraithe óstála](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_Tabhair faoi deara mura bhfuil do sholáthraí óstála ar cheann de na soláthraithe sin a luadh thuas, **beidh ort an t-ainm fearainn a shioncronú nó a chur leis de láimh** i do chuntas óstála._
