---
title: Mga Form sa Checkout
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Mga Form ng Pag-checkout

Ang Mga Form ng Pag-checkout ay isang madali at flexible na paraan para mag-eksperimento sa iba't ibang lapit kapag sinusubukang makakuha ng mga bagong customer.

Nag-aalok ang Ultimate Multisite 2.0 ng editor ng Form ng Pag-checkout na nagpapahintulot sa iyong gumawa ng kahit gaano karaming form ang gusto mo, na may iba't ibang field, mga product na iniaalok, atbp.

Para ma-access ang feature na ito, pumunta sa menu na Mga Form ng Pag-checkout, sa kaliwang side-bar.

![Listahan ng Mga Form ng Pag-checkout](/img/config/checkout-forms-list.png)

Sa pahinang ito, makikita mo ang lahat ng form ng pag-checkout na mayroon ka.

Kasama sa talahanayan ng listahan ang column na **Status** para makumpirma mo kung kasalukuyang available sa mga customer ang bawat form:

| Status | Kahulugan |
|---|---|
| **Active** | Maaaring gamitin ang form saanman naka-publish ang shortcode o pahina ng pagpaparehistro nito. |
| **Inactive** | Naka-save ang form ngunit naka-disable. Hindi makukumpleto ng mga customer ang pag-checkout gamit ito hanggang i-enable mo itong muli. |

Gamitin ang column ng status bago mag-edit ng pampublikong daloy ng pagpaparehistro, lalo na kapag pinapanatili mo ang mga draft o pana-panahong form ng pag-checkout kasabay ng iyong mga live na form.

Kung gusto mong gumawa ng bago, i-click lang ang Add Checkout Form sa itaas ng pahina.

Maaari kang pumili ng isa sa tatlong opsyong ito bilang panimulang punto: isang hakbang, multi-step, o blangko. Pagkatapos, i-click ang Go to the Editor.

Kapag pinili mo ang **isang hakbang** o **multi-step** bilang panimulang punto, kasama na ngayon sa template ng form ang field na **Template Selection** bilang default. Pinapayagan ng field na ito ang iyong mga customer na pumili ng template ng site habang nasa proseso ng pagpaparehistro. Maaari mo itong iwan sa puwesto, alisin, o ilipat tulad ng anumang ibang field sa editor.

![Editor ng Form ng Pag-checkout](/img/config/checkout-form-editor.png)

Bilang alternatibo, maaari mong i-edit o i-duplicate ang mga form na mayroon ka na sa pamamagitan ng pag-click sa mga opsyon sa ibaba ng pangalan nito. Doon, makikita mo rin ang mga opsyon para kopyahin ang shortcode ng form o burahin ang form.

![Mga aksyon kapag naka-hover sa form ng pag-checkout](/img/config/checkout-form-hover-actions.png)

#### Pangkalahatang-ideya ng Editor ng Form ng Pag-checkout

Nagbibigay ang editor ng form ng pag-checkout ng komprehensibong interface para buuin ang iyong mga form ng pagpaparehistro. Narito ang pangkalahatang-ideya ng layout ng editor:

![Pangkalahatang-ideya ng editor ng Form ng Pag-checkout](/img/config/checkout-form-editor-overview.png)

### Pag-edit ng Form ng Pag-checkout

Maaari kang gumawa ng mga form ng pag-checkout para sa iba't ibang layunin. Sa halimbawang ito, gagawa tayo sa isang form ng pagpaparehistro.

Pagkatapos pumunta sa editor ng form ng pag-checkout, bigyan ang iyong form ng pangalan (na gagamitin lamang para sa panloob na sanggunian) at slug (ginagamit para gumawa ng mga shortcode, halimbawa).

![Editor ng Form ng Pag-checkout](/img/config/checkout-form-editor.png)

Binubuo ang mga form ng mga hakbang at field. Maaari kang magdagdag ng bagong hakbang sa pamamagitan ng pag-click sa Add New Checkout Step.

![Magdagdag ng Bagong Hakbang sa Pag-checkout](/img/config/checkout-form-add-step.png)

Sa unang tab ng modal window, punan ang nilalaman ng hakbang ng iyong form. Bigyan ito ng ID, pangalan, at paglalarawan. Kadalasan, ginagamit ang mga item na ito sa loob lamang.

![Tab ng nilalaman ng hakbang ng form ng pag-checkout](/img/config/checkout-form-step-content.png)

Susunod, itakda ang visibility ng hakbang. Maaari kang pumili sa pagitan ng "Palaging ipakita", "Ipakita lamang para sa mga naka-log in na user", o "Ipakita lamang para sa mga bisita".

![Tab ng visibility ng hakbang ng form ng pag-checkout](/img/config/checkout-form-step-visibility.png)

Sa huli, i-configure ang estilo ng hakbang. Opsyonal ang mga field na ito.

![Tab ng estilo ng hakbang ng form ng pag-checkout](/img/config/checkout-form-step-style.png)

Ngayon, oras na para magdagdag ng mga field sa una nating hakbang. I-click lang ang Add New Field at piliin ang uri ng seksyon na gusto mo.

![Hakbang ng form ng pag-checkout na may mga field](/img/config/checkout-form-step-with-fields.png)

May iba't ibang parameter na kailangang punan ang bawat field. Para sa unang pasok na ito, pipiliin natin ang field na "Username".

![Dropdown ng pagpili ng uri ng field](/img/config/checkout-form-field-type-dropdown.png)

![Mga setting ng nilalaman ng field na Username](/img/config/checkout-form-username-content.png)

![Mga setting ng visibility ng field na Username](/img/config/checkout-form-username-visibility.png)

![Mga setting ng estilo ng field na Username](/img/config/checkout-form-username-style.png)

Maaari kang magdagdag ng kahit gaano karaming hakbang at field ang kailangan mo. Para ipakita ang iyong mga product para makapili ang iyong mga customer ng isa, gamitin ang field na Pricing Table. Kung gusto mong papiliin ang iyong mga client ng template, idagdag ang field na Template Selection. At iba pa.

![Dialog ng Add New Field](/img/config/checkout-form-add-field-dialog.png)

_**Tandaan:** ang username, email, password, pamagat ng site, URL ng site, buod ng order, pagbabayad, at button na isumite ay mga mandatoryong field para gumawa ng form ng pag-checkout._

Habang ginagawa mo ang iyong form ng pag-checkout, maaari mong laging gamitin ang button na Preview para makita kung paano makikita ng iyong mga client ang form. Maaari ka ring magpalit sa pagitan ng pagtingin bilang kasalukuyang user o bisita

![Button ng preview ng Form ng Pag-checkout](/img/config/checkout-form-preview-button.png)

![Modal ng preview ng Form ng Pag-checkout](/img/config/checkout-form-preview-modal.png)

Sa huli, sa Advanced Options maaari mong i-configure ang mensahe para sa pahinang "Thank You", magdagdag ng mga snippet para subaybayan ang mga conversion, magdagdag ng custom na CSS sa iyong form ng pag-checkout, o i-restrict ito sa ilang bansa.

![Advanced Options](/img/config/checkout-form-advanced.png)

Maaari mo ring mano-manong i-enable o i-disable ang iyong form ng pag-checkout sa pamamagitan ng pag-toggle sa opsyong ito sa kanang column, o permanenteng burahin ang form.

![Toggle ng Active](/img/config/checkout-form-active.png)

Para burahin ang isang form, i-click ang opsyong burahin sa mga aksyon ng form:

![Opsyon sa pagbura ng form ng pag-checkout](/img/config/checkout-form-delete.png)

Huwag kalimutang i-save ang iyong form ng pag-checkout!

![Button na Save](/img/config/checkout-form-save.png)

Para makuha ang shortcode ng iyong form, i-click ang Generate Shortcode at kopyahin ang resultang ipinapakita sa modal window.

![Button na Save na may shortcode](/img/config/checkout-form-save.png)

### Ang Field na Pricing Table

Ipinapakita ng field na **Pricing Table** ang iyong mga product sa form ng pag-checkout para makapili ang mga customer ng plan. Kapag in-edit mo ang field na ito, maaari mong i-configure ang ilang opsyon:

![Mga setting ng field na Pricing Table](/img/config/pricing-table-field-settings.png)

Ganito lumalabas ang pricing table sa form ng pagpaparehistro sa frontend:

![Talahanayan ng presyo sa frontend checkout](/img/config/frontend-checkout-pricing-table.png)

  * **Products**: Piliin kung aling mga produkto ang ipapakita at ang pagkakasunod-sunod ng paglitaw ng mga ito.
  * **Force Different Durations**: Kapag naka-enable, ipinapakita ang lahat ng produkto kahit wala silang tumutugmang variation ng presyo para sa kasalukuyang napiling panahon ng pagsingil. Kapag naka-disable (default), itinatago ang mga produktong walang variation para sa napiling panahon.
    ![Opsyon ng pricing table para sa force durations](/img/config/pricing-table-force-durations.png)
  * **Hide when Pre-Selected**: Itinatago ang talahanayan ng presyo kapag napili na ang isang plan sa pamamagitan ng URL (hal. `/register/premium`).
  * **Pricing Table Template**: Piliin ang biswal na template para sa talahanayan ng presyo (Simple List, Legacy, atbp.).

Kung magdaragdag ka ng produkto sa Pricing Table bago kasama sa form ang mga field na kinakailangan upang makumpleto ang checkout flow ng produktong iyon, magpapakita na ngayon ng babala ang editor. Gamitin ang babala upang idagdag ang nawawalang kinakailangang field bago i-publish o i-save ang mga pagbabago para sa isang live na registration form.

### Pagdaragdag ng Toggle para sa Pagpili ng Panahon

Kung na-configure mo ang [Price Variations](creating-your-first-subscription-product#price-variations) sa iyong mga produkto (hal. buwanan at taunang presyo), maaari kang magdagdag ng field na **Period Selection** sa iyong checkout form. Nagpapakita ang field na ito ng toggle na nagpapahintulot sa mga customer na lumipat sa pagitan ng mga panahon ng pagsingil, at dynamic na nag-a-update ang talahanayan ng presyo nang real time.

#### Hakbang 1: I-set Up ang Price Variations sa Iyong mga Produkto

Bago idagdag ang field na Period Selection, tiyaking may naka-configure na price variations ang iyong mga produkto. Pumunta sa **Ultimate Multisite > Products**, i-edit ang isang produkto, at pumunta sa tab na **Price Variations** upang magdagdag ng mga alternatibong panahon ng pagsingil (hal. Taunan sa may diskwentong presyo).

![Tab na Price Variations sa isang produkto](/img/config/product-price-variations-tab.png)

#### Hakbang 2: Idagdag ang Field na Period Selection sa Iyong Checkout Form

1. Pumunta sa **Ultimate Multisite > Checkout Forms** at i-edit ang iyong checkout form.

2. Mag-scroll pababa sa hakbang na naglalaman ng iyong field na **Pricing Table** at i-click ang **Add new Field**.

3. Sa dialog ng pagpili ng uri ng field, i-click ang **Period Select**.

![Dialog na Add New Field na nagpapakita ng Period Select](/img/config/checkout-form-add-field-dialog.png)

4. I-configure ang mga opsyon ng panahon. Kailangan ng bawat opsyon ng:
   * **Duration**: Ang numero (hal. `1`)
   * **Duration unit**: Ang uri ng panahon (Mga Araw, Mga Linggo, Mga Buwan, o Mga Taon)
   * **Label**: Ang text na makikita ng mga customer (hal. "Buwanan", "Taunan")

5. I-click ang **+ Add Option** upang magdagdag pa ng mga pagpipilian ng panahon. Dapat tumugma ang mga opsyong ito sa price variations na na-configure mo sa iyong mga produkto.

![Mga setting ng field na Period Selection](/img/config/period-selection-field-settings.png)

6. Pumili ng **Period Selector Template** (Clean ang default, na nagre-render ng simpleng naka-istilong selector na handa para sa custom CSS).

7. I-click ang **Save Field**.

#### Hakbang 3: Iposisyon ang Field sa Itaas ng Pricing Table

Para sa pinakamagandang karanasan ng user, tiyaking lumilitaw ang field na Period Selection **bago** ang field na Pricing Table sa iyong hakbang ng checkout. Maaari mong i-drag ang mga field upang baguhin ang pagkakasunod-sunod ng mga ito sa editor ng checkout form. Sa ganitong paraan, pipili muna ang mga customer ng panahon ng pagsingil at pagkatapos ay makikita ang mga presyo para sa panahong iyon.

![Editor ng checkout form na nagpapakita ng pagkakasunod-sunod ng field](/img/config/checkout-form-editor-with-fields.png)

#### Paano Ito Gumagana sa Frontend

Kapag na-configure na, makikita ng mga customer na bumibisita sa iyong registration page ang period selector sa itaas ng talahanayan ng presyo. Kapag nag-click sila ng ibang panahon ng pagsingil:

  * Agad na nag-a-update ang talahanayan ng presyo upang ipakita ang mga presyo para sa napiling panahon (hindi kinakailangan ang page reload).
  * Kung naka-disable ang **Force Different Durations** sa field na Pricing Table, itatago ang mga produktong walang variation ng presyo para sa napiling panahon.
  * Kung naka-enable ang **Force Different Durations**, mananatiling nakikita ang lahat ng produkto kahit wala silang variation para sa napiling panahon (ipapakita nila ang kanilang default na presyo).

#### Paunang Pagpili ng Panahon ng Pagsingil sa Pamamagitan ng URL

Maaari ka ring paunang pumili ng produkto at panahon ng pagsingil sa pamamagitan ng URL. Sinusuportahan ng Ultimate Multisite ang mga pattern ng URL na ito:

  * `/register/premium` — Paunang pinipili ang produktong "Premium" lamang
  * `/register/premium/12` — Paunang pinipili ang produkto at 12-buwang tagal
  * `/register/premium/1/year` — Paunang pinipili ang produkto na may 1-taong tagal

### Ang Field na Template Selection

Hinahayaan ng field na **Template Selection** ang mga customer na pumili ng site template habang nagche-checkout. Kasama na ito ngayon bilang default sa mga template ng checkout form na **single step** at **multi-step** na idinagdag sa Ultimate Multisite v2.6.1.

#### Manu-manong pagdaragdag ng field

Kung nagtatrabaho ka gamit ang isang form na ginawa bago ang v2.6.1, o nagsimula mula sa blangkong template:

1. Pumunta sa **Ultimate Multisite > Checkout Forms** at i-edit ang iyong checkout form.
2. Sa hakbang kung saan kinokolekta ang mga detalye ng site, i-click ang **Add new Field**.
3. Piliin ang **Template Selection** mula sa dialog ng uri ng field.
4. I-configure ang field:
   - **Label** — Ang heading na makikita ng mga customer sa itaas ng template grid (hal. "Pumili ng site template").
   - **Required** — Kung kailangang pumili ng template ang mga customer bago magpatuloy.

#### Paano ito gumagana

Kapag pumili ang isang customer ng template habang nagche-checkout, ginagamit ito ng Ultimate Multisite kapag nagpo-provision ng kanilang bagong site. Ang mga template na ipinapakita ay nagmumula sa iyong listahan ng **Site Templates** (**Ultimate Multisite > Site Templates**). Tanging ang mga template na minarkahang available sa mga customer ang lumilitaw dito.

### Mga base domain ng checkout form

Itinuturing ng Ultimate Multisite v2.13.0 ang mga domain na naka-configure sa mga field na **Site URL** ng checkout form bilang mga network base domain. Gamitin ang mga available-domain setting ng field kapag gusto mong makagawa ang mga customer ng mga site sa ilalim ng isa o higit pang shared registration domain, tulad ng `example.com` at `sites.example.com`.

Ang mga shared checkout-form base domain ay hindi itinuturing bilang mga per-site custom domain mapping. Kapag gumawa ang isang customer ng subdirectory site sa isa sa mga base na iyon, hindi gumagawa ang Ultimate Multisite ng mapped-domain record na gagawing pag-aari ng shared host ang iisang site lamang na iyon. Nananatiling available ang shared host para sa mga kapatid na site na gumagamit ng parehong checkout form base.

Panatilihin ang custom domains para sa per-customer mapped hosts, tulad ng `customer-example.com`. Panatilihin ang checkout-form base domains para sa shared registration hosts na magagamit ng maraming site.

#### Pag-aalis ng field

Kung hindi ka nag-aalok ng mga site template, alisin ang field na Template Selection mula sa iyong form. Pagkatapos ay matatanggap ng mga customer ang alinmang default template na naka-configure sa ilalim ng **Ultimate Multisite > Settings > Site Templates**.
