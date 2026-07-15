---
title: Formacha i gcóras
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Fomanna Checkout

Fomanna Checkout is liathúil agus fáilteach a bheith agat chun ardán ar chuid foirme ábharacha ag iarraidh athrú nua oileáin.

Céadann Ultimate Multisite 2.0 le cur chuige foirme checkout, a ghlacann go mór foirme atá agat, le feidhmíocht foirme ar fáil, agus feidhmíocht iad, agus níos mó.

Leat a bheith ag an tairiscint seo, rud éigin ar an chuid menu Checkout Forms, ar an chuid bar léine.

![Checkout Forms list](/img/config/checkout-forms-list.png)

Ar an cur chuige seo, leat a fheiceáil gach foirme checkout atá agat.

Tá an tábla liosta le colú **Status** chun a bheith ag iarraidh a chuid foirme ar fáil do oileáin:

| Status | An t-aithris |
|---|---|
| **Active** | Is féidir an foirme a úsáid ag aon áit a bhailte go bhfuil sé atá ar fáil do oileáin. |
| **Inactive** | Tá an foirme caillte ach tá sé díobairt. Níl éirí an t-oileáin a dhéanamh leat go dtí a chfothú sé againn. |

Useach an colú status ar an bhfoirme primaite seo ar chuid éifeachtach chun foirme registration atá agat a athrú, go háirithe nuair a bhíonn foirme checkout draft nó seanacha leat ag fáil leat ar foirme live.

Má tá tú ag iarraidh a chur in áit nua, glacann Add Checkout Form ar an uachtar seo.

Is féidir leat aon dearcán seo a chmise ach an t-aithris atá agat: single step (ceann ceann), multi-step (ceanní múltáil), nó blank (fáinne). Ansin, glacann chun Go to the Editor.

Nuair a bhíonn tú ag iarraidh **single step** nó **multi-step** ar an chuid primaite seo, tá foirme template ag cur isteach le field **Template Selection** go dtí an t-aithris. Le tú féachaint ar é seo, leat do oileáin a bheith ag iarraidh a chur in áit site template ag an t-amachais registration. Is féidir leat é seo a bheith ag cur isteach, é a thoil, nó é a athrú mar aon field eile i ndá chuid editor.

![Checkout Form editor](/img/config/checkout-form-editor.png)

An uairt, leatúint an fómród atá tú ag curtha agat nó a dubhail, gan clic ar na oifneacha a bhon an t-amach. Tá na oifneacha seo a bheith agat chun an shortcode a chur i bhfómród nó chun an fómród a dhéanamh.

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

#### Oibríocht Editor Fómród Checkout {#checkout-form-editor-overview}

Is é an editor fómród checkout curte scáthach ar chuid a chur i bhfómrúcháin do chuid fómrúd registration. Tá seo an oibríocht ar an léamhacht an editor:

![Checkout Form editor overview](/img/config/checkout-form-editor-overview.png)

### Dubhail Fómród Checkout {#editing-a-checkout-form}

Is féidir leat fómrúd checkout a chur i bhfómrúcháin ar chuid uirlisí ag curte scáthach. Ag seo, déidh muid ar fómrúd registration.

Tar éis rud éigin chun an editor fómród checkout a bheith agat, déan leat oileán ar an fómrúd (a bheid mhaith chun úsáid iontaigreachais chomhartha). Déan tú hefyd slug (a thuairfidh tú chun shortcodes a chur i bhfómrúcháin, dá régam).

![Checkout Form editor](/img/config/checkout-form-editor.png)

Tá fómrúd ag curte scáthach agus ar chuid fáil. Is féidir leat nua step a chur i bhfómród ar chuid clic ar Add New Checkout Step.

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

Ar an ábhair de chéim modal, dhéan an curte foaddaí do step. Déan leat ID, oileán agus scríobh ar nóiméad. Is é astainn na rathanna seo iontaigreachais.

![Checkout form step content tab](/img/config/checkout-form-step-content.png)

Tar éis sin, déan an fhochasctha do step. Déan tú chun cinn ar "Always show", "Only show for logged in users" nó "Only show for guests".

![Checkout form step visibility tab](/img/config/checkout-form-step-visibility.png)

Ar chur i bhfómród, déan an stíl do step. Is é astainn na fáil seo.

![Checkout form step style tab](/img/config/checkout-form-step-style.png)

Anois, tá an t-amach chun fáil a chur i bhfómrúd ar an chéim áimseartha. Déan leat clic chun Add New Field agus déan an t-aithris do chuid seachtain atá tú ag curte scáthach.

![Checkout form step with fields](/img/config/checkout-form-step-with-fields.png)

Chomh maith leis an chéad chuid ar fáil, beidh mé ag iarraidh a bheith ag cur chun cinn an fáil "Username".

![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

![Username field content settings](/img/config/checkout-form-username-content.png)

![Username field visibility settings](/img/config/checkout-form-username-visibility.png)

![Username field style settings](/img/config/checkout-form-username-style.png)

Is féidir leat ag cur isteach go leat an t-amais agus na fáil atá tú ag iarraidh. Chun a chur i ardán páirtí agus fáil atá tú ag iarraidh, usaigh an fáil "Pricing Table" a úsáid. Má tá tú ag iarraidh a bheith ag cur isteach ar chuidisteana, usaigh an fáil "Template Selection" a chur isteach. Agus sin é.

![Add New Field dialog](/img/config/checkout-form-add-field-dialog.png)

_**Note:** username, email, password, site title, site URL, order summary, payment, agus nút an t-amais is éifeachtach chun fáil a chur ar fáil._

Nuair atá ag cur ar fáil an fáil chuid ar fáil, leat semperin a úsáid an nút "Preview" chun a fheiceáil conas beidh an fáil ag na chuidisteana. Is féidir leat hefyd athrú idir view as existing user agus visitor.

![Checkout Form preview button](/img/config/checkout-form-preview-button.png)

![Checkout Form preview modal](/img/config/checkout-form-preview-modal.png)

Go dtí an deireadh, ar Advanced Options leat féidir leat a chur in uradh an meán chun an cur "Thank You" a chur ar fáil, a chur i ardán snippets chun conversiona a sholáir, a chur CSS custom chun an fáil chuid ar fáil nó a chruthú go léir do chuidí níos fearr.

![Advanced Options](/img/config/checkout-form-advanced.png)

Is féidir leat hefyd a chruinneáil nó a shlónadh an fáil chuid ar fáil ag athrú an t-amais seo ar an chuid uile, nó a dhéanamh go léir de bhfaoiniú.

![Active toggle](/img/config/checkout-form-active.png)

Leat an fómhair a bhaint, cliceáil ar option 'delete' (delir) i ardaitheoirí fómhair:

![Checkout form delete option](/img/config/checkout-form-delete.png)

Ná bhfuisg a shábháil ar do fómhair!

![Save button](/img/config/checkout-form-save.png)

Leat a fháil an shortcode do fómhair, cliceáil ar 'Generate Shortcode' (Génrabh Shortcode) agus coptaigh an t-amhrán a shitéar ar an window modal.

![Save button with shortcode](/img/config/checkout-form-save.png)

### An Fhóláil Tágráid (The Pricing Table Field) {#the-pricing-table-field}

Tá an fóláil **Pricing Table** (Tágráid Tágráid) ag sithiú do príobháid ar an fómhair checkout chun na ghrúpaí a bheith ar fáil do chontail. Nuair a bhredtailtear é seo, leat a chur in áit cur chuir ceann sprioc:

![Pricing Table field settings](/img/config/pricing-table-field-settings.png)

Seo conas a tháir an tágráid ar fómhair registration frontend:

![Frontend checkout pricing table](/img/config/frontend-checkout-pricing-table.png)

  * **Products** (Príobháid): Déan chun cinn conas a chur i ardán na príobháid atá ag sithiú agus an ord sin a bheith ar fáil.
  * **Force Different Durations** (Foirmi Duineanna Eile): Nuair a bhfáthfaidh sé, tá gach príobháid ar fáil níl aon cheannsprioc deacairt le cur chuir sprioc a bhaineann leis an t-amhrán a bheith ag cur chuir chuid. Nuair a bhfáthfaidh sé (default), tá na príobháid nácurna ar fáil níl aon cheannsprioc do amhrán a bheith ag cur chuir chuid.
    ![Pricing table force durations option](/img/config/pricing-table-force-durations.png)
  * **Hide when Pre-Selected** (Glacadh nuair a bhí sé ar fáil): Glacann an tágráid tágráid nuair atá cur chuir chuid ar fáil trí URL (e.g., `/register/premium`).
  * **Pricing Table Template** (Teampalat Tágráid Tágráid): Déan chun cinn teampalat visual a chur i ardán an tágráid tágráid (Simple List, Legacy, ató).

Má bhíonn tú ag cur chuir príobháid ar fáil i Pricing Table prima caite leat a bheith ag cur chuir chuid a thugann an fómhair a bhaineann leis an t-amhrán a bheith ag cur chuir chuid do príobháid, tá an editor ag tairiscint a chur in áit. Usear an tairiscint seo chun an cheannsprioc caite a chur i ardán ar fáil prima caite go háirit go háirit prima caite leat a bheith ag cur chuir chuid prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima caite prima ca

### Añadh an Tógáil Seachtainn {#adding-a-period-selection-toggle}

Má tá tú ag cur ar fáil [Price Variations](creating-your-first-subscription-product#price-variations) ar do producath (e.g. prisiúir leata agus saolach), leat ormhaid **Period Selection** a chur ar fáil ar do form cheicinn. Léiríonn an fáil seo tógáil (toggle) a ghlúint do chláir a bheith ag athrú idir na seachtainn prisiúir, agus iarann an tábla prisiúir a athrú go dtí réiteach.

#### Step 1: Déan ar fáil Price Variations ar do Producath {#step-1-set-up-price-variations-on-your-products}

Ar primaidh a chur ar fáil an Period Selection field, déan go bhfuil prisiúir ar chuid deacair ar do producath. Go dtí **Ultimate Multisite > Products**, éidigh sản, agus cur isteach ar an tab **Price Variations** chun seachtainn prisiúir eile a chur ar fáil (e.g. Saolach ann le prisiúnas leat).

![Price Variations tab on a product](/img/config/product-price-variations-tab.png)

#### Step 2: Añadh an Period Selection Field ar do Corm Cheicinn {#step-2-add-the-period-selection-field-to-your-checkout-form}

1. Go dtí **Ultimate Multisite > Checkout Forms** agus éidigh do form cheicinn.

2. Glac go leathanach go dtí an step a bhfuil an field **Pricing Table** agat agus cliceáil ar **Add new Field**.

3. Ag cur isteach i d'fháil tairgseálacha, cliceáil ar **Period Select**.

![Add New Field dialog showing Period Select](/img/config/checkout-form-add-field-dialog.png)

4. Déan ar fáil na seachtainn prisiúir. Is féidir leat a bheith ag cur ar fáil:
   * **Duration**: An lúchán (e.g. `1`)
   * **Duration unit**: An tairgseálach (Days, Weeks, Months, or Years)
   * **Label**: An téacs a bhfaidh chláir (e.g. "Monthly", "Annual")

5. Cliceáil ar **+ Add Option** chun cur fáil seachtainn eile ar fáil. Is féidir leat na fáil seo a bheith ag tairgseálacha a chur ar fáil ar do producath.

![Period Selection field settings](/img/config/period-selection-field-settings.png)

6. Déan ar fáil **Period Selector Template** (Clean is an tairgseálach, a bhíonn sé ag cur ar fáil seachtainn beag leat ag CSS a chur ar fáil).

7. Click ar **Save Field**.

#### Step 3: Posíonadh an Fíel Above the Pricing Table {#step-3-position-the-field-above-the-pricing-table}

For an ghrá smachtach uile, cuir chun cinn go bhfuil an fíel Selections de Ard-chúram (Period Selection) ag teacht **i dtreo** an fíel Tablas Prísa (Pricing Table) i bhfinnteacht. Is féidir leat a draíocht fíel chun siomradh na fáil ar an fómhar checkout a athrú. Mar sin, baillíonn na custaimerí ar chuid ar an tairgileadh de chéad, agus tar éifeachtach a bhfáthfaidh siad an prisc ar an chéad chéim.

![Checkout form editor showing field order](/img/config/checkout-form-editor-with-fields.png)

#### Conas Tá Éifeachtach Ar an Frontend {#how-it-works-on-the-frontend}

Agus leat, mar a bhí sé ceangailte, beidh na custaimerí a bhfaidh an seomradh de chéad above an fáil Tablas Prísa ar an cur chuimhneacht. Nuair a bhíonn siad ag cur isteach ar chéim tairgileadh eile:

  * Beidh an tablprisc ag athrú go léirint an prisc ar an chéad chéim (ní mór é a bheith ag athrú an cur chuimhneacht).
  * Má tá **Force Different Durations** (Forbairt Durais Eile) inastatach ar an fíel Tablas Prísa, beidh na príobháidí gan prisc ar an chéad chéim ag teacht i gcur chuimhneacht.
  * Má tá **Force Different Durations** inastatach, beidh gach príobháid ag teacht i gcur chuimhneacht mar gheall ar chuid ar an chéad chéim (beidh siad ag tairgileadh ar an prisc de chuid).

#### Pre-selectáil Ar Chuid URL via URL {#pre-selecting-a-billing-period-via-url}

Is féidir leat a pre-selectáil príobháid agus chéim tairgileadh tríd an URL. Ultimate Multisite cúí cheangailtear leis na polaí URL seo:

  * `/register/premium` — Tá an "Premium" product ag pre-selectáil shampla
  * `/register/premium/12` — Tá an príobháid agus dúr ar 12 mionnán ag pre-selectáil
  * `/register/premium/1/year` — Tá an príobháid le dúr ar 1 gae

### An Fíel Selections Template {#the-template-selection-field}

Leann an fíel **Template Selection** na custaimerí a bheith ag tairgileadh shampla ar an chéad chéim. Is é seo ag cur isteach go dtí an chuid ceart i fómhar checkout de chéim aonair agus de chéim múltáil ag Ultimate Multisite v2.6.1.

#### Añadháil an fíel manualmente {#adding-the-field-manually}

Má tá tú ag cur sin féin le form a bhí curtha arda go le caillte ó v2.6.1, nó rud atá atá an t-amúla:

1. Roinn go **Ultimate Multisite > Checkout Forms** agus déan ar do form checkout.
2. Ag an áit a bhfuil na stiúirí site ag iarraidh, cliceáil ar **Add new Field**.
3. Déan chun **Template Selection** seachas an fhoirm áit a bhfáineann tú.
4. Déan ar an fhoirm:
   - **Label** — An téiteach a fheiceann na custaimeracha ar chuid dearcán (e.g., "Taispeáin an t-amúla site").
   - **Required** — Má tá é ag curtha ar an custaimeracha a bheith ag iarraidh seachaint an t-amúla primaill go dtí an chéad chuid eile.

#### Conas é seo a tháscaleann {#how-it-works}

Nuair a bhfaigheann an custaimer an t-amúla ag cur isteach ag checkout, usaíonn Ultimate Multisite é go dtí an t-amúla nuair a chur ar fáil (provisioning) do chuid site nua. Tá na t-amúla a sh fóir ag curtha ó do liosta **Site Templates** (**Ultimate Multisite > Site Templates**). Tá amháin na t-amúla a bhí ag curtha ar fáil do custaimeracha ag teacht anseo.

### Checkout-form base domains {#checkout-form-base-domains}

Traitheann Ultimate Multisite v2.13.0 domáin a chur ar fáil ar fhoirm checkout **Site URL** mar domáin base netwerca. Usearadh le curtha ar fáil domáin a bhí ag an fhoirm (available-domain settings) nuair atá tú ag iarraidh na custaimeracha a chur ar fáil siteanna ar domáin curtha ar fáil cúpla nó níos mó, mar `example.com` agus `sites.example.com`.

Ní bhfaigheann domáin base checkout-form curtha ar fáil per-site custom domain mappings (mapping deamáin a bheith ag an site). Nuair a chur an custaimer site subdirectory ar aon cheann seo, níl ann do Ultimate Multisite record deamáin a mapáil a dhéanann a bheith ag an host curtha ar fáil cúpla site. Bhí an host curtha ar fáil agat do siteanna eile a úsáidte domáin base checkout-form a chomhcheanglaíonn siad.

Bíodh domáin custom per-customer mapped hosts ag curtha ar fáil, mar `customer-example.com`. Bíodh domáin base checkout-form ag curtha ar fáil do hostanna curtha ar fáil cúpla site a bhí féidir leat a úsáidte.

#### Déanamh an fhoirm go líne {#removing-the-field}

Má tá maíse le haghaí, an t-ealaíocht (site templates) a bhféraite, raic an fhoinm "Template Selection" ó chuid ar fhoirm. Beidh na gach isteach le an t-ampla (template) is fearr a bhfhéidir ag curtha i ardán under **Ultimate Multisite > Settings > Site Templates**.
