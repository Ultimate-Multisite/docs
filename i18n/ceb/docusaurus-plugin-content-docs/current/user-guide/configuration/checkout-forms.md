---
title: Mga Porma sa Pagbayad
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Checkout Forms

Ang Checkout Forms usa ka dali ug flexible nga paagi para mag-eksperimento sa lain-laing pamaagi kung nagtinguha kang makakuha og bag-ong mga kustomer.

Ang Ultimate Multisite 2.0 nagtanyag og Checkout Form editor nga nagtugot kanimo sa paghimo og daghang forms, nga adunay lain-laing fields, mga produkto nga gi-offer, ug uban pa.

Aron ma-access kini nga feature, pumunta sa Checkout Forms menu, sa left side-bar.

![Checkout Forms list](/img/config/checkout-forms-list.png)

Sa pahinong ni, makita nimo ang tanang checkout forms nga imong gihimo.

Ang listahan sa table naglakip og usa ka column nga **Status** aron masiguro kung available ba ang matag form para sa mga customer:

| Status | Kahulogan |
|---|---|
| **Active** | Ang form mahimong gamiton bisan asa i-publish ang imong shortcode o registration page. |
| **Inactive** | Ang form na-save pero gipahimong disabled. Dili makompleto sa checkout ang mga customer nimo hangtod nga imong i-enable pag-usab. |

Gamita ang status column sa dili pa mag-edit og public registration flow, labi na kung nagpabilin ka og draft o seasonal checkout forms uban sa imong live forms.

Kung gusto kang maghimo og bag-o, i-click lang ang Add Checkout Form sa taas sa pahina.

Makapili ka ni isa sa tulo ka mga option isip imong sinugdanan: single step, multi-step, o blank. Unya, i-click para magpadulong sa Editor.

Kung mopili ka og **single step** o **multi-step** isip imong sinugdanan, ang form template karon naglakip na og usa ka field nga **Template Selection** sa default. Kini nga field nagtugot sa imong mga customer sa pagpili og site template atol sa proseso sa registration. Mahimo nimo kini i-leave, tangtangon, o ilipat kini sama sa bisan unsang field sa editor.

![Checkout Form editor](/img/config/checkout-form-editor.png)

Alternatibo, pwede pud nimo i-edit o kopyahon ang mga form nga naa na nimo pinaagi sa pag-click sa mga option ubos sa ngalan niini. Duna pud diha ang mga option para kopya ang shortcode sa form o para ma-delete ang form.

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

#### Overview sa Checkout Form Editor

Ang checkout form editor naghatag og usa ka kompleto nga interface para maghimo sa imong registration forms. Ania ang overview sa layout sa editor:

![Checkout Form editor overview](/img/config/checkout-form-editor-overview.png)

### Pag-edit sa Checkout Form

Pwede kang maghimo og checkout forms para sa lain-laing katuyoan. Sa panigunting nga example, magtrabaho kita sa usa ka registration form.

Human maadto ka sa checkout form editor, hatag og ngalan sa imong form (nga gamiton lang para sa internal reference) ug slug (gamit para makahimo og shortcodes, pananglitan).

![Checkout Form editor](/img/config/checkout-form-editor.png)

Ang mga forms gihimo sa mga steps ug fields. Mahimo kang magdugang og bag-ong step pinaagi sa pag-click sa Add New Checkout Step.

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

Sa unang tab sa modal window, pun-on ang content sa step sa imong form. Hatag kaniya og ID, ngalan ug description. Kini nga mga butang kadaghanan gamiton sa sulod lang.

![Checkout form step content tab](/img/config/checkout-form-step-content.png)

Sunod, i-set ang visibility sa step. Mahimo kang mopili tali sa "Always show", "Only show for logged in users" o "Only show for guests".

![Checkout form step visibility tab](/img/config/checkout-form-step-visibility.png)

Sa katapusan, i-configure ang style sa step. Kini mga optional nga fields.

![Checkout form step style tab](/img/config/checkout-form-step-style.png)

Karon, panahon na aron magdugang og fields sa atong unang step. I-click lang para mag-Add New Field ug piliha ang tipo sa section nga gusto nimo.

![Checkout form step with fields](/img/config/checkout-form-step-with-fields.png)

Ang matag-iya nga field adunay lain-laing mga parameter nga kinahanglan pun-on. Para niining unang pagpasulod, pilion nato ang "Username" field.

![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

![Username field content settings](/img/config/checkout-form-username-content.png)

![Username field visibility settings](/img/config/checkout-form-username-visibility.png)

![Username field style settings](/img/config/checkout-form-username-style.png)

Pwede ka magdugang og daghang mga step ug field nga imong gikinahanglan. Aron ipakita ang imong mga produkto para pilion sa imong mga kustomer, gamita ang Pricing Table field. Kung gusto nimo tugotan ang imong mga kliyente sa pagpili og template, dugangi ang Template Selection field. Ug mao na usab.

![Add New Field dialog](/img/config/checkout-form-add-field-dialog.png)

_**Nota:** username, email, password, site title, site URL, order summary, payment, ug submit button kay mandatory nga mga field para makamugna og checkout form._

Samtang nagtrabaho ka sa imong checkout form, pwede gihapon nimo gamiton ang Preview button aron makita kung unsaon makita sa imong mga kustomer ang form. Mahimo usab kang mag-alternate tali sa pagtan-aw isip usa ka existing user o usa ka visitor.

![Checkout Form preview button](/img/config/checkout-form-preview-button.png)

![Checkout Form preview modal](/img/config/checkout-form-preview-modal.png)

Sa katapusan, sa Advanced Options pwede nimo i-configure ang mensahe para sa "Thank You" page, magdugang og mga snippets aron ma-track ang conversions, magdugang og custom CSS sa imong checkout form o maglimpyo kini sa pipila ka nasud.

![Advanced Options](/img/config/checkout-form-advanced.png)

Pwede usab nimo i-enable o i-disable ang imong checkout form pinaagi sa pag-toggle niining option sa tuig nga column, o permanenteng ma-delete ang form.

![Active toggle](/img/config/checkout-form-active.png)

Para magtanggal ng isang form, i-click lang ang delete option sa mga form actions:

![Checkout form delete option](/img/config/checkout-form-delete.png)

Huwag kalimutan na i-save mo rin ang iyong checkout form!

![Save button](/img/config/checkout-form-save.png)

Para makuha ang shortcode ng iyong form, i-click lang ang Generate Shortcode at kopyahin ang resulta na makikita sa modal window.

![Save button with shortcode](/img/config/checkout-form-save.png)

### Ang Field na Pricing Table

Ang field na **Pricing Table** ay nagpapakita ng iyong mga produkto sa checkout form para pwedeng pumili ang mga customer ng plano. Kapag binago mo ito, pwede kang mag-configure ng ilang options:

![Pricing Table field settings](/img/config/pricing-table-field-settings.png)

Narito kung paano lumalabas ang pricing table sa frontend registration form:

![Frontend checkout pricing table](/img/config/frontend-checkout-pricing-table.png)

  * **Products**: Piliin kung aling mga produkto ang ipapakita at ang pagkakasunod ng paglitaw nila.
  * **Force Different Durations**: Kapag naka-enable ito, lahat ng produkto ay ipapakita kahit wala silang matching price variation para sa kasalukuyang billing period na pinili. Kapag hindi naka-enable (default), itatago ang mga produktong walang variation para sa napiling panahon.
    ![Pricing table force durations option](/img/config/pricing-table-force-durations.png)
  * **Hide when Pre-Selected**: Itatago nito ang pricing table kapag may plano na nang napili gamit ang URL (halimbawa, `/register/premium`).
  * **Pricing Table Template**: Pumili ng visual template para sa pricing table (Simple List, Legacy, atbp.).

Kung magdagdag ka ng produkto sa Pricing Table bago isama ng form ang mga fields na kailangan para matapos ang checkout flow ng produktong iyon, may babala na lalabas sa editor. Gamitin mo ang babala na iyon para idagdag ang kulang na required field bago mag-publish o mag-save ng mga pagbabago para sa isang live registration form.

### Pagdugang sa Period Selection Toggle

Kung nag-configure ka na og [Price Variations](creating-your-first-subscription-product#price-variations) sa imong mga produkto (pananglitan, monthly ug annual pricing), pwede kang magdugang og **Period Selection** field sa imong checkout form. Kini nga field nagpakita og toggle nga nagtugot sa mga customer nga mag-switch tali sa billing periods, ug ang pricing table kay mo-update dayon samtang naglihok sila.

#### Lakang 1: I-set Up ang Price Variations sa Imong Mga Produkto

Sa dili pa magdugang og Period Selection field, siguruha lang nga ang imong mga produkto naa na og price variations nga naka-configure. Adto sa **Ultimate Multisite > Products**, i-edit ang usa ka product, ug adto sa tab nga **Price Variations** para magdugang og lain nga billing periods (pananglitan: Annual sa discounted nga presyo).

![Price Variations tab on a product](/img/config/product-price-variations-tab.png)

#### Lakang 2: Dugangi ang Period Selection Field sa Imong Checkout Form

1. Adto sa **Ultimate Multisite > Checkout Forms** ug i-edit ang imong checkout form.

2. I-scroll pababa ngadto sa step nga adunay imong **Pricing Table** field ug i-click ang **Add new Field**.

3. Sa dialog para sa pagpili sa field type, i-click ang **Period Select**.

![Add New Field dialog showing Period Select](/img/config/checkout-form-add-field-dialog.png)

4. I-configure ang mga period options. Ang matag option kinahanglan adunay:
   * **Duration**: Ang numero (pananglitan, `1`)
   * **Duration unit**: Ang klase sa period (Days, Weeks, Months, o Years)
   * **Label**: Ang text nga makita sa mga customer (pananglitan: "Monthly", "Annual")

5. I-click ang **+ Add Option** para dugang og mas daghang pagpili sa period. Kinahanglan magtugma kini sa price variations nga imong naka-configure sa imong mga produkto.

![Period Selection field settings](/img/config/period-selection-field-settings.png)

6. Pilia ang usa ka **Period Selector Template** (Ang Clean kay default, nga naghatag og simple nga styled selector nga andam na para sa custom CSS).

7. I-click ang **Save Field**.

#### Step 3: Iposisyon ang Field Ibabaw ng Pricing Table

Para sa pinakamagandang karanasan ng user, siguraduha nga nga ang Period Selection field makita **una** sa Pricing Table field sa inyong checkout step. Mahimo ninyong i-drag ang mga fields para ma-reorder kini sa checkout form editor. Sa paagi ani, una magpili ang mga customer og billing period ug unya makakita sila sa mga presyo para sa period nga gipili nila.

![Checkout form editor showing field order](/img/config/checkout-form-editor-with-fields.png)

#### Unsaon Kini Paglihok sa Frontend

Pagkahuman ma-configure, ang mga customer nga moadto sa inyong registration page makakita sa period selector ibabaw sa pricing table. Kung sila mag-click og lain nga billing period:

  * Ang pricing table dayon ma-update para ipakita ang mga presyo para sa gipiling period (walay kinahanglan nga mag-reload sa page).
  * Kung ang **Force Different Durations** wala gi-disable sa Pricing Table field, ang mga produkto nga walay variation sa presyo para sa gipiling period mahimong itago.
  * Kung ang **Force Different Durations** gi-enable, tanan nga mga produkto magpabilin nga makita bisan og wala silay variation para sa gipiling period (ipakita nila ang ilang default nga presyo).

#### Pre-selecting og Billing Period pinaagi sa URL

Mahimo pud ninyong pre-select ang usa ka product ug billing period pinaagi sa URL. Ang Ultimate Multisite nagsuporta niining mga pattern sa URL:

  * `/register/premium` — Mag-pre-select lang sa "Premium" nga product
  * `/register/premium/12` — Mag-pre-select sa product ug 12-month duration
  * `/register/premium/1/year` — Mag-pre-select sa product nga adunay 1-year duration

### Ang Template Selection Field

Ang **Template Selection** field nagtugot sa mga customer nga magpili og site template samtang nag-checkout. Kini na karon gi-include sa default sa **single step** ug **multi-step** checkout form templates nga gitudlo sa Ultimate Multisite v2.6.1.

#### Pagdugang sa field pinaagi sa manual



Kung nagtrabaho ka sa usa ka form nga gihimo pa sa v2.6.1 o nagsugod gikan sa blankong template:

1. Adto sa **Ultimate Multisite > Checkout Forms** ug i-edit ang imong checkout form.
2. Sa lakang diin giipon ang mga detalye sa site, i-click ang **Add new Field**.
3. Pilia ang **Template Selection** gikan sa field type dialog.
4. I-configure ang field:
   - **Label** — Ang heading nga makita sa mga customer ibabaw sa template grid (pananglitan, "Pili og site template").
   - **Required** — Kung kinahanglan ba nga magpili ang mga customer og template sa dili pa sila magpadayon.

#### Unsaon kini pagtrabaho

Kung mopili ang usa ka customer og template inig checkout, gamiton kini sa Ultimate Multisite kung i-provision nila ang ilang bag-ong site. Ang mga template nga gipakita nagagikan sa imong listahan sa **Site Templates** (**Ultimate Multisite > Site Templates**). Ang mga template nga gihubad isip available sa mga customer lang ang modapadulong dinhi.

### Checkout-form base domains

Ang Ultimate Multisite v2.13.0 nagtratar sa mga domain nga nakakompyut ang checkout form **Site URL** fields isip network base domains. Gamita ang settings sa available-domain sa field kung gusto nimo nga maghimo og mga site ang mga customer ubos sa usa o labaw pa nga shared registration domains, sama sa `example.com` ug `sites.example.com`.

Ang shared checkout-form base domains dili itraktar isip per-site custom domain mappings. Kung ang usa ka customer maghimo og subdirectory site sa usa niini, ang Ultimate Multisite dili maghimo og mapped-domain record nga magpabiling ang shared host para lang sa usa ka site. Ang shared host magpabilin nga available alang sa mga sibling sites nga naggamit sa parehas nga checkout form base.

Pabilin og custom domains alang sa per-customer mapped hosts, sama sa `customer-example.com`. Pabilin og checkout-form base domains alang sa shared registration hosts nga mahimong gamiton sa daghang sites.

#### Pagkuha sa field

(Note: Ang orihinal nga teksto nagtapos dinhi, busa kini ang hubad.)

Kung wala ka'y nag-offer og mga site templates, unsaon pag-usab ang imong form para dili na ipakita ang "Template Selection" field. Ang mga kliyente magbaton sa bisan unsang default template nga naka-configure ubos sa **Ultimate Multisite > Settings > Site Templates**.
