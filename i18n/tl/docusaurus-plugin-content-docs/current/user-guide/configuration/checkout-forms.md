---
title: Mga Form sa Pag-checkout
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Mga Form para sa Checkout {#checkout-forms}

Ang mga Checkout Forms ay isang madali at flexible na paraan para mag-eksperimento ng iba't ibang paraan kapag sinusubukan mong i-convert ang mga bagong customer.

Nag-aalok ang Ultimate Multisite 2.0 ng isang Checkout Form editor na nagbibigay-daan sa iyo na gumawa ng kahit anong dami ng forms, na may iba't ibang fields, produkto na inaalok, atbp.

Para ma-access ito, pumunta sa menu ng Checkout Forms, sa kaliwang side-bar.

![Checkout Forms list](/img/config/checkout-forms-list.png)

Sa pahinang ito, makikita mo ang lahat ng checkout forms na mayroon ka.

Ang listahan ng table ay mayroong column na **Status** para mapatunayan kung available ba ang bawat form sa mga customer:

| Status | Kahulugan |
|---|---|
| **Active** | Ang form ay magagamit kahit saan ilabas ang shortcode o registration page nito. |
| **Inactive** | Ang form ay na-save pero hindi ginagamit (disabled). Hindi makukumpleto ng mga customer ang checkout gamit ito hangga't hindi mo ito ina-enable muli. |

Gamitin ang column na status bago i-edit ang isang public registration flow, lalo na kapag mayroon kang draft o seasonal checkout forms kasabay ng iyong live forms.

Kung gusto mong gumawa ng bago, i-click lang ang Add Checkout Form sa itaas ng pahina.

Maaari kang pumili ng isa sa tatlong opsyon na ito bilang iyong panimula: single step (iisang hakbang), multi-step (maraming hakbang), o blank (walang laman). Pagkatapos, i-click para Pumunta sa Editor.

Kapag pinili mo ang **single step** o **multi-step** bilang iyong panimula, ang template ng form ay may kasamang field na **Template Selection** nang default. Ang field na ito ay nagpapahintulot sa mga customer na pumili ng site template habang nasa proseso ng registration. Maaari mo itong iwanan, tanggalin, o ilipat ito tulad ng anumang ibang field sa editor.

![Checkout Form editor](/img/config/checkout-form-editor.png)

Maaari mo ring i-edit o kopyahin ang mga form na mayroon ka sa pamamagitan ng pag-click sa mga opsyon sa ilalim ng pangalan nito. Diyan mo rin makikita ang mga opsyon para kopyahin ang shortcode ng form o burahin ang form.

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

#### Pangkalahatang-ideya ng Checkout Form Editor {#checkout-form-editor-overview}

Ang checkout form editor ay nagbibigay sa iyo ng kumpletong interface para buuin ang iyong mga registration forms. Narito ang isang overview ng layout ng editor:

![Checkout Form editor overview](/img/config/checkout-form-editor-overview.png)

### Pag-e-edit ng Checkout Form {#editing-a-checkout-form}

Maaari kang gumawa ng checkout forms para sa iba't ibang layunin. Sa halimbawang ito, gagana tayo sa isang registration form.

Pagkatapos mong pumunta sa checkout form editor, bigyan mo ng pangalan ang iyong form (na gagamitin lang para sa internal reference) at magbigay ng slug (ginagamit para gumawa ng shortcodes, halimbawa).

![Checkout Form editor](/img/config/checkout-form-editor.png)

Ang mga form ay binubuo ng mga step at field. Maaari kang magdagdag ng bagong step sa pamamagitan ng pag-click sa Add New Checkout Step.

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

Sa unang tab ng modal window, punan ang nilalaman ng step ng iyong form. Bigyan ito ng ID, pangalan at deskripsyon. Ang mga item na ito ay karaniwang ginagamit sa loob ng sistema.

![Checkout form step content tab](/img/config/checkout-form-step-content.png)

Susunod, itakda ang visibility ng step. Maaari kang pumili sa pagitan ng "Always show" (Laging ipakita), "Only show for logged in users" (Ipakita lang para sa mga naka-log in na user), o "Only show for guests" (Ipakita lang para sa mga bisita).

![Checkout form step visibility tab](/img/config/checkout-form-step-visibility.png)

Sa huli, i-configure ang style ng step. Ang mga ito ay optional na field.

![Checkout form step style tab](/img/config/checkout-form-step-style.png)

Ngayon, oras na para magdagdag ng mga field sa ating unang step. I-click lang ang Add New Field at piliin ang uri ng section na gusto mo.

![Checkout form step with fields](/img/config/checkout-form-step-with-fields.png)

Bawat field ay may iba't ibang parameters na kailangang punan. Para sa unang pagpasok na ito, pipiliin natin ang "Username" field.

![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

![Username field content settings](/img/config/checkout-form-username-content.png)

![Username field visibility settings](/img/config/checkout-form-username-visibility.png)

![Username field style settings](/img/config/checkout-form-username-style.png)

Maaari kang magdagdag ng kahit anong steps at fields na kailangan mo. Para ipakita ang iyong mga produkto para pumili ang iyong mga customer, gamitin ang Pricing Table field. Kung gusto mong hayaan ang iyong mga kliyente na pumili ng template, idagdag ang Template Selection field. At iba pa.

![Add New Field dialog](/img/config/checkout-form-add-field-dialog.png)

_**Tanda:** ang username, email, password, site title, site URL, order summary, payment, at submit button ay mga mandatoryong field para makagawa ng checkout form._

Habang nagtatrabaho ka sa iyong checkout form, maaari mo ring gamitin ang Preview button para makita kung paano makikita ito ng iyong mga kliyente. Maaari ka ring magpalit sa pagtingin bilang isang existing user o visitor.

![Checkout Form preview button](/img/config/checkout-form-preview-button.png)

![Checkout Form preview modal](/img/config/checkout-form-preview-modal.png)

Sa huli, sa Advanced Options, maaari mong i-configure ang mensahe para sa "Thank You" page, magdagdag ng mga snippets para subaybayan ang conversions, magdagdag ng custom CSS sa iyong checkout form o limitahan ito sa ilang mga bansa.

![Advanced Options](/img/config/checkout-form-advanced.png)

Maaari mo ring i-enable o i-disable nang mano-mano ang iyong checkout form sa pamamagitan ng pag-toggle nito sa kanang column, o permanenteng burahin ang form.

![Active toggle](/img/config/checkout-form-active.png)

Para burahin ang isang form, i-click lang ang delete option sa mga form actions:

![Checkout form delete option](/img/config/checkout-form-delete.png)

Huwag kalimutang i-save ang iyong checkout form!

![Save button](/img/config/checkout-form-save.png)

Para makuha ang shortcode ng iyong form, i-click lang ang Generate Shortcode at kopyahin ang resulta na ipinapakita sa modal window.

![Save button with shortcode](/img/config/checkout-form-save.png)

### Ang Pricing Table Field {#the-pricing-table-field}

Ang **Pricing Table** field ay nagpapakita ng iyong mga produkto sa checkout form para pwedeng pumili ang mga customer ng plano. Kapag binago mo itong field, pwede kang mag-configure ng ilang opsyon:

![Pricing Table field settings](/img/config/pricing-table-field-settings.png)

Narito kung paano lumalabas ang pricing table sa frontend registration form:

![Frontend checkout pricing table](/img/config/frontend-checkout-pricing-table.png)

  * **Products**: Piliin kung aling mga produkto ang ipapakita at ang pagkakasunod ng paglitaw nila.
  * **Force Different Durations**: Kapag naka-enable ito, lahat ng produkto ay ipapakita kahit wala silang matching price variation para sa kasalukuyang selected billing period. Kapag hindi naka-enable (default), itatago ang mga produktong walang variation para sa napiling period.
    ![Pricing table force durations option](/img/config/pricing-table-force-durations.png)
  * **Hide when Pre-Selected**: Itatago nito ang pricing table kapag mayroon nang plan na napili gamit ang URL (halimbawa ay `/register/premium`).
  * **Pricing Table Template**: Pumili ng visual template para sa pricing table (Simple List, Legacy, atbp.).

Kung magdagdag ka ng produkto sa Pricing Table bago isama ng form ang mga field na kailangan para matapos ang checkout flow ng produktong iyon, magpapakita na ngayon ng babala ang editor. Gamitin ang babala para idagdag ang kulang na required field bago mag-publish o mag-save ng mga pagbabago para sa isang live registration form.

### Pagdaragdag ng Period Selection Toggle {#adding-a-period-selection-toggle}

Kung naka-configure ka na ng [Price Variations](creating-your-first-subscription-product#price-variations) sa iyong mga produkto (halimbawa, monthly at annual pricing), pwede kang magdagdag ng **Period Selection** field sa iyong checkout form. Ang field na ito ay nagpapakita ng isang toggle na pinapayagan ang mga customer na lumipat sa pagitan ng billing periods, at ang pricing table ay awtomatikong mag-update nang real-time.

#### Hakbang 1: I-set Up ang Price Variations sa Iyong mga Produkto {#step-1-set-up-price-variations-on-your-products}

Bago magdagdag ng Period Selection field, siguraduhin na naka-configure na ang price variations ng iyong mga produkto. Pumunta sa **Ultimate Multisite > Products**, i-edit ang isang produkto, at pumunta sa tab na **Price Variations** para idagdag ang ibang billing periods (halimbawa: Annual sa discounted price).

![Price Variations tab on a product](/img/config/product-price-variations-tab.png)

#### Hakbang 2: Magdagdag ng Period Selection Field sa Iyong Checkout Form {#step-2-add-the-period-selection-field-to-your-checkout-form}

1. Pumunta sa **Ultimate Multisite > Checkout Forms** at i-edit ang iyong checkout form.

2. I-scroll pababa sa step na mayroon kang field na **Pricing Table** at i-click ang **Add new Field**.

3. Sa dialog para sa pagpili ng field type, i-click ang **Period Select**.

![Add New Field dialog showing Period Select](/img/config/checkout-form-add-field-dialog.png)

4. I-configure ang mga period options. Ang bawat option ay nangangailangan ng:
   * **Duration**: Ang bilang (halimbawa: `1`)
   * **Duration unit**: Ang uri ng period (Days, Weeks, Months, o Years)
   * **Label**: Ang text na makikita ng mga customer (halimbawa: "Monthly", "Annual")

5. I-click ang **+ Add Option** para magdagdag ng mas maraming pagpipilian sa period. Dapat tumugma ang mga option na ito sa price variations na naka-configure ka sa iyong mga produkto.

![Period Selection field settings](/img/config/period-selection-field-settings.png)

6. Pumili ng **Period Selector Template** (Ang Clean ang default, na nagpapakita ng simpleng styled selector na handa nang i-customize gamit ang CSS).

7. I-click ang **Save Field**.

#### Hakbang 3: Ilagay ang Field sa Itaas ng Pricing Table {#step-3-position-the-field-above-the-pricing-table}

Para sa pinakamahusay na karanasan ng user, siguraduhing lumalabas ang Period Selection field **bago** ang Pricing Table field sa iyong checkout step. Maaari mong i-drag ang mga fields para ayusin ang pagkakasunod nila sa checkout form editor. Sa ganitong paraan, unang pipili ng mga customer ng billing period at saka makikita ang mga presyo para sa period na iyon.

![Checkout form editor showing field order](/img/config/checkout-form-editor-with-fields.png)

#### Paano Ito Gumagana sa Frontend {#how-it-works-on-the-frontend}

Kapag naka-configure na, makikita ng mga customer na bumibisita sa iyong registration page ang period selector sa itaas ng pricing table. Kapag nag-click sila sa ibang billing period:

  * Ang pricing table ay agad na mag-a-update para ipakita ang mga presyo para sa napiling period (walang kailangang i-reload ang page).
  * Kung **Force Different Durations** ay naka-disable sa Pricing Table field, itatago ang mga produkto na walang pagbabago ng presyo para sa napiling period.
  * Kung naka-enable ang **Force Different Durations**, mananatiling nakikita ang lahat ng produkto kahit wala silang variation para sa napiling period (ipapakita nila ang kanilang default na presyo).

#### Pre-selecting ng Billing Period Gamit ang URL {#pre-selecting-a-billing-period-via-url}

Maaari mo ring i-pre-select ang isang product at billing period gamit ang URL. Sinusuportahan ng Ultimate Multisite ang mga pattern ng URL na ito:

  * `/register/premium` — Nag-i-pre-select lamang ng "Premium" product
  * `/register/premium/12` — Nag-i-pre-select ng product at 12-buwang tagal
  * `/register/premium/1/year` — Nag-i-pre-select ng product na may 1-taong tagal

### Ang Template Selection Field {#the-template-selection-field}

Ang **Template Selection** field ay nagbibigay-daan sa mga customer na pumili ng site template habang nasa checkout. Ito ay kasama na ngayon nang default sa **single step** at **multi-step** checkout form templates na idinagdag sa Ultimate Multisite v2.6.1.

#### Pagdaragdag ng field nang mano-mano {#adding-the-field-manually}

Kung gumagamit ka ng form na ginawa bago ang v2.6.1 o nagsimula sa isang blankong template:

1. Pumunta sa **Ultimate Multisite > Checkout Forms** at i-edit ang iyong checkout form.
2. Sa hakbang kung saan kinokolekta ang mga detalye ng site, i-click ang **Add new Field**.
3. Piliin ang **Template Selection** mula sa dialog box ng field type.
4. I-configure ang field:
   - **Label** — Ang heading na nakikita ng mga customer sa itaas ng template grid (halimbawa: "Pumili ng site template").
   - **Required** — Kung kailangang pumili ng template ang mga customer bago magpatuloy.

#### Paano ito gumagana {#how-it-works}

Kapag pinili ng isang customer ang isang template habang nag-checkout, gagamitin ito ng Ultimate Multisite kapag inilalagay (provisioning) nila ang kanilang bagong site. Ang mga template na ipinapakita ay mula sa iyong listahan ng **Site Templates** (**Ultimate Multisite > Site Templates**). Tanging ang mga template na markang available sa mga customer lang ang lalabas dito.

### Checkout-form base domains {#checkout-form-base-domains}

Itinuturing ng Ultimate Multisite v2.13.0 ang mga domain na naka-configure sa mga field na **Site URL** ng checkout form bilang network base domains. Gamitin ang mga setting ng available-domain ng field kapag gusto mong gumawa ang mga customer ng site sa ilalim ng isa o higit pang shared registration domains, tulad ng `example.com` at `sites.example.com`.

Ang mga shared checkout-form base domains ay hindi ituturing bilang per-site custom domain mappings. Kapag ang isang customer ay gumawa ng subdirectory site sa isa sa mga base na iyon, hindi gagawa ng Ultimate Multisite ng mapped-domain record na magpapatunay na ang shared host ay para lamang sa iisang site na iyon. Ang shared host ay mananatiling available para sa mga kapatid na site na gumagamit ng parehong checkout form base.

Panatilihin ang custom domains para sa per-customer mapped hosts, tulad ng `customer-example.com`. Panatilihin ang checkout-form base domains para sa mga shared registration hosts na maaaring gamitin ng maraming site.

#### Pag-alis ng field {#removing-the-field}

Kung hindi ka nag-aalok ng mga site template, tanggalin ang field na Template Selection mula sa iyong form. Ang mga customer ay makakatanggap ng anumang default template na naka-configure sa ilalim ng **Ultimate Multisite > Settings > Site Templates**.
