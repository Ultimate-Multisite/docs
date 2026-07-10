---
title: Láimhseáil Cánach
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# Láimhseáil Cánach {#tax-handling}

Tá modúl bailithe cánach ionsuite inár bpríomh-plugin ag Ultimate Multisite, mar sin má tá ort cánacha díolacháin a bhailiú ar do phleananna, pacáistí agus seirbhísí, is féidir leat é sin a dhéanamh go héasca gan dul i muinín aon add-ons a shuiteáil.

Do chuideachtaí atá lonnaithe san Eoraip, cuirimid **add-on** ar fáil a chuireann uirlisí agus gnéithe leis chun tacú níos fearr le comhlíonadh **VAT**.

Ní dhéanann Ultimate Multisite cánacha a chomhdú ná a íoc thar do cheann leis an rialtas; ní dhéanaimid ach cabhrú leat na cánacha cuí a bhailiú tráth an idirbhirt. **Beidh ort fós cánacha a íoc tú féin.**

## Bailiú Cánach a Chumasú {#enabling-tax-collection}

Níl bailiú cánach cumasaithe de réir réamhshocraithe. Chun é a chumasú, ní mór duit dul chuig **Ultimate Multisite > Settings > Taxes** agus an socrú Enable Taxes a chasadh air.

![Scorán Enable Taxes ag barr leathanach na socruithe Cánach](/img/config/settings-taxes-enable.png)

Seo radharc iomlán ar leathanach na socruithe cánach:

![Leathanach iomlán na socruithe cánach](/img/config/settings-taxes-full.png)

Is féidir leat na socruithe cánach do tháirgí aonair a fheiceáil freisin:

![Socruithe cánach do tháirgí](/img/config/settings-taxes.png)

### Cáin eisiata vs. cáin san áireamh {#tax-excluded-vs-tax-included}

De réir réamhshocraithe, tá praghsanna uile do tháirgí gan cháin, rud a chiallaíonn **nach bhfuil cánacha san áireamh** i bpraghas an táirge. Má chinnimid gur chóir do chustaiméir cánacha a íoc ar cheannachán ar leith, cuirfimid na cánacha **anuas ar** an bhfo-iomlán.

Más fearr leat go mbeadh cánacha san áireamh i bpraghas do tháirge, is féidir leat é sin a dhéanamh tríd an socrú **Inclusive Tax** a chumasú.

![Sraith scoráin Inclusive Tax faoi bhun an tsocraithe Enable Taxes](/img/config/settings-taxes-inclusive.png)

Ná déan dearmad na hathruithe atá déanta agat a **shábháil**.

###

## Rátaí Cánach a Chruthú {#creating-tax-rates}

Tar éis duit Bailiú Cánach a chumasú, beidh ort rátaí cánach a chruthú do shuíomhanna ar leith ag baint úsáid as ár n-eagarthóir rátaí cánach.

Is féidir leat rochtain a fháil ar an eagarthóir trí chliceáil ar an gcnaipe **Manage Tax Rates** ar bharra taoibh leathanach na socruithe Cánach.

![Nasc Manage Tax Rates sa phainéal Tax Rates ar leathanach na socruithe](/img/config/settings-taxes-manage-rates.png)

Ar leathanach eagarthóir na rátaí cánach, is féidir leat Rátaí Cánach nua a chur leis trí chliceáil ar an gcnaipe **Add new Row**.

![Tábla eagarthóir rátaí cánach leis an gcnaipe Add new Row ag an mbarr](/img/config/tax-rates-editor.png)

Beidh ort **teideal** a thabhairt do gach ráta cánach (úsáidtear é ar shonraisc). Ansin is féidir leat an **tír** (riachtanach), an **stát,** agus an **chathair** (an dá cheann roghnach) a roghnú ina ngearrfar an cháin seo. Ar deireadh, cuir leis an **ráta cánach i gcéatadáin**.

### Catagóirí Cánach {#tax-categories}

Is féidir leat Catagóirí Cánach iolracha a chruthú freisin, chun rátaí cánach éagsúla a chur le cineálacha éagsúla táirgí.

Cliceáil chun **Add new Tax Category** a dhéanamh, ansin scríobh ainm do chatagóire agus brúigh **Create**.

![Cnaipe Add new Tax Category ag barr eagarthóir na rátaí cánach](/img/config/tax-categories-add.png)

![Réimse ionchuir Tax Category Name sa mhodúil cruthaithe catagóire](/img/config/tax-categories-create-modal.png)

Chun brabhsáil trí chatagóirí, cliceáil **Switch** agus roghnaigh an chatagóir ar mhaith leat cánacha nua a chur léi.

![Cnaipe anuas Switch chun athrú idir catagóirí cánach](/img/config/tax-categories-switch.png)

![Roghchlár anuas roghnóra catagóire cánach a thaispeánann catagóirí atá ar fáil](/img/config/tax-categories-select.png)

Is féidir leat an chatagóir chánach do tháirge ar leith a shocrú trí dhul chuig an **leathanach eagarthóireachta Táirge** agus ansin chuig an táb Taxes.

![Táb cánacha Táirge le catagóir chánach agus scorán inchánach](/img/config/product-taxes.png)

Ar an scáileán céanna sin, is féidir leat an scorán **Is Taxable?** a mhúchadh chun a chur in iúl do Ultimate Multisite nár cheart dó cánacha a bhailiú ar an táirge áirithe sin.

## Tacaíocht VAT Eorpach {#european-vat-support}

Mar a luadh cheana, tá add-on ar fáil againn do chustaiméirí san AE a bhfuil riachtanais bhreise acu mar gheall ar rialacháin VAT Eorpacha.

Cabhraíonn ár n-uirlisí VAT le cúpla rud tábhachtach:

  * Luchtú éasca rátaí VAT an AE;

  * Bailiú agus bailíochtú Uimhir VAT - agus frithmhuirearú d’eintitis atá díolmhaithe ó VAT (amhail cuideachtaí le huimhreacha bailí VAT);

Chun an add-on sin a shuiteáil, téigh chuig **Ultimate Multisite > Settings** agus ansin cliceáil ar nasc barra taoibh **Check our Add-ons**.

![Barra taoibh leathanach Settings le nasc Check our Add-ons](/img/config/settings-taxes-addons-link.png)

Atreorófar thú chuig ár leathanach add-ons. Ansin, is féidir leat cuardach a dhéanamh ar an **Ultimate Multisite VAT add-on** agus é a shuiteáil.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Ansin, téigh chuig **Network Admin > Plugins** agus gníomhachtaigh an add-on sin ar fud an líonra.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Má théann tú ar ais chuig an **táb Tax Settings** , feicfidh tú roghanna nua ar fáil. Cas air an rogha **Enable VAT Support** chun na huirlisí nua VAT a chumasú. Ná déan dearmad do shocruithe a **shábháil**!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### Rátaí Cánach VAT a Tharraingt Isteach {#pulling-on-vat-tax-rates}

Ceann de na huirlisí a chuireann ár gcomhtháthú leis ná an cumas na rátaí cánach do bhallstáit an AE a luchtú. Is féidir é sin a dhéanamh trí chuairt a thabhairt ar leathanach eagarthóir na rátaí cánach tar éis tacaíocht EU VAT a chumasú.

Ag bun an leathanaigh, feicfidh tú na roghanna tarraingthe VAT. Má roghnaíonn tú cineál ráta agus má chliceálann tú ar an gcnaipe **Update EU VAT Rates**, tarraingeofar suas agus líonfar an tábla go huathoibríoch leis na rátaí cánach do gach ballstát AE. Ansin, ní gá duit ach é a shábháil.

![Cnaipe Update EU VAT Rates ag bun eagarthóir na rátaí cánach](/img/config/tax-rates-vat-pull.png)

Is féidir leat na luachanna a chur in eagar freisin tar éis iad a tharraingt isteach. Chun é a dhéanamh, cuir in eagar an líne tábla atá uait agus cliceáil chun na luachanna nua a shábháil.

### Bailíochtú VAT {#vat-validation}

Nuair atá tacaíocht VAT cumasaithe, cuirfidh Ultimate Multisite réimse breise leis an bhfoirm checkout, faoi bhun réimse an tseolta billeála. Ní thaispeánfar an réimse ach do chustaiméirí atá lonnaithe san AE.

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Déanfaidh Ultimate Multisite an Uimhir CBL a bhailíochtú ansin agus má thagann sí ar ais mar uimhir bhailí, cuirtear an mheicníocht frithmhuirir i bhfeidhm agus socraítear an ráta cánach go 0% ar an ordú sin.
