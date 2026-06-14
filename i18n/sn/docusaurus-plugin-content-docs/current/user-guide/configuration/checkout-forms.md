---
title: Mavhiki ekutanga
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Checkout Forms

Checkout Forms ndiyo njia yakapfuura na yenye kubadilika kuti utaona nzira dzakasiyana dzinobva kuenda nekuvaka makuberekwa vachikuru vatsavo.

Ultimate Multisite 2.0 inopa editor ya Checkout Form inoshandisa iwe kutaura zvinhu zvinokwanisa, unogona kuita forms dzakawanda dzine fields dzakasiyana-siyana, products dzinobwera, uye zvinhombo zvakasiyana.

Kuti utange kuona iye, ndichida kuti uende ku menu ya Checkout Forms, pamwe ne side-bar (mabasa ekuti).

![Checkout Forms list](/img/config/checkout-forms-list.png)

Pamukati wepe iyi, unogona kuona forms dzese dzinowanikwa.

Table yechidzidzo inosanganisira column ya **Status** kuti uone kana form iye inowanikwa kune vachikuru nguva iyi:

| Status | Chii chiri chiri |
|---|---|
| **Active** | Form iye inogona kushandiswa panovunenge ndipo shortcode kana registration page yayo inopushwa. |
| **Inactive** | Form iye inosimbwa asi inachirwa. Vachikuru havanzi kuita checkout neye kunyangwe unokubatsira kune kuregawo chiri. |

Shandisa column ya status panguva uingine ukasimbura registration flow yakanaka, zvakasiyana kana unogona kuenda neforms dzakare (draft) kana dzinobva musi mweya pamwe neforms dzako dzakanyanya.

Kana uchida kutaura iye yepamusoro, ndichida kuti uingine "Add Checkout Form" pamusoro wepe iyi.

Unogona kuchokera zvinotiri izvi tiri pfungwa yako yekutanga: single step (mabasa akati), multi-step (mabasa akawanda), kana blank (panguva). Ndiyo, ndichida kuti uingine "Go to the Editor".

Kana uchigadzira **single step** kana **multi-step** kune kutanga kwako, template ya form inosanganisira field ya **Template Selection** nekuti iye inowanikwa nekuita registration. Field iye inokubatsira vachikuru kuva nenzira yakasiyana dzinobva mudiro (site template) nguva yechikuru. Unogona kubva kune iye, kunyera iye, kana kukutanga iye sefield yakanaka panguva uingine ukasimbura.

![Checkout Form editor](/img/config/checkout-form-editor.png)

Maviri, unogona kuenda kutaura kana fomu dzako dzinengei dzine, kana kuti dzichingopai zvinhu zvakasiyana-siyana nekuti zvinengei dzine. Unogona kuenda kuita izvi nekuvaka fomu dzako dzine. Heino nzira yakafanana yekuti editor ya checkout form inenge inoratidza sei:

![Checkout Form editor overview](/img/config/checkout-form-editor-overview.png)

### Kuenda Kutaura Checkout Form

Unogona kuita checkout forms dzinenge dzine zvinhu zvakasiyana-siyana nekuti zvinengei dzine. Mu nzira iyi, tichatanga nekuita registration form.

Panguva unenge ukasvika pakati pe editor ya checkout form, ndichida kuti upe simba (name) kune fomu yako (izvi zvichaitwa kunoita refrence yakanzvimbo chete), uye slug (slug) (inogona kushandiswa kuita shortcodes, sei).

![Checkout Form editor](/img/config/checkout-form-editor.png)

Forms dzine steps nefields. Unogona kuva nemapfumo ekutanga nekuti unenge ukasvika pakati pe "Add New Checkout Step".

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

Panguva unenge uva munzira yakatanga (first tab) ye modal window, ndichida kuti upe content ya step yako. Peita ID, name uye description. Izvi zvakasiyana-siyana zvinogona kushandiswa kunoita refrence yakanzvimbo chete.

![Checkout form step content tab](/img/config/checkout-form-step-content.png)

Zvedzo, ndichida kuti uwe visibility ya step. Unogona kuenda pakati pe "Always show", "Only show for logged in users" kana "Only show for guests".

![Checkout form step visibility tab](/img/config/checkout-form-step-visibility.png)

Mune nguva iyi, unogona kuweka style ya step. Izvi zviri optional (zvisingatidzo).

![Checkout form step style tab](/img/config/checkout-form-step-style.png)

Ngeita iye, ndichida kuti uonge fields kune step yako ya yakatanga. Zvinhu zvakasiyana-siyana zvinogona kushandiswa kuita "Add New Field" uye utange uchigadzira type ya section inotipa.

![Checkout form step with fields](/img/config/checkout-form-step-with-fields.png)

Kati chine (kuti) chinobva, kuna parameters dzakasi kuitorera. Kune chiri chekuti tinore select "Username" field.

![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

![Username field content settings](/img/config/checkout-form-username-content.png)

![Username field visibility settings](/img/config/checkout-form-username-visibility.png)

![Username field style settings](/img/config/checkout-form-username-style.png)

Kune kuita zvakawanda steps uye fields zvako zvine kuitora. Kuti utore products dzako kuti vagovana vavo, unogona kushandisa Pricing Table field. Nekuti unoda kuti makubatsiri vako vave zivone template, shandisa Template Selection field. Ndiye izvi.

![Add New Field dialog](/img/config/checkout-form-add-field-dialog.png)

_**Note:** username, email, password, site title, site URL, order summary, payment, uye submit button ndiko zvinhu zvinotora (mandatory fields) kuti utore checkout form._

Chiripo pakuti uri kutora checkout form yako, unogona kushandisa Preview button kuti uveone kuti makubatsiri vako vanoona form sei. Unogonawo kutaura pakati nekuona se mutenda wese kana munhu anobva (visitor).

![Checkout Form preview button](/img/config/checkout-form-preview-button.png)

![Checkout Form preview modal](/img/config/checkout-form-preview-modal.png)

Mune zvinhu zvinotora (Advanced Options), unogona kuita configuration yekuti message yakanzvimbo "Thank You" iwe, kutaura snippets kuti utore conversions, kuita custom CSS kwa checkout form yako kana kukufamba kwemakore akawanda.

![Advanced Options](/img/config/checkout-form-advanced.png)

Unogonawo kunge kuita kana kusapihwa (enable or disable) checkout form yako nekuvuta option iye munyoringo wechikuru, kana kukufamba kwemakore nekuti unokufamba zvakanaka.

![Active toggle](/img/config/checkout-form-active.png)

Iyiwe kuti udele formi, ndichikumbira ukukumbula isiphi indawo ye delete (delete option) kune actions ze formi:

![Checkout form delete option](/img/config/checkout-form-delete.png)

Usazange utsimbise ukusave checkout formini!

![Save button](/img/config/checkout-form-save.png)

Ukuze uthole shortcode we formini, ndichikumbira ukukumbula ukuthi ushaye isigaba "Generate Shortcode" (Generate Shortcode) futhi ukhopha kuyo futhi unqobe into eyakhiwe ekhoneni kwindlela ye modal window.

![Save button with shortcode](/img/config/checkout-form-save.png)

### Indawo Ye Pricing Table

Indawo ye **Pricing Table** (Izibhalwe Zokuhlelo) iyakhanya izinto zakho zokuhlelo ekhoneni kwesiyifo se checkout formi ukuze abantu bakwazi ukukhetha isiqalo. Lapho ukhonza le ndawo, unga kukhombisa izixazululo eziningi:

![Pricing Table field settings](/img/config/pricing-table-field-settings.png)

Nansi indlela iPricing Table ikhanya ngayo kwesiyifo se registration formi yesikhashana (frontend):

![Frontend checkout pricing table](/img/config/frontend-checkout-pricing-table.png)

  * **Products**: Khetha izinto zokuhlelo okufanele ukuthi zikhanywe futhi ukuthi zizihlangana kanjani.
  * **Force Different Durations**: Lapho kukhona, yonke i-product (isihloko sekhono) ikhombiswa ngaphandle kokuthi liyakwazi isixazululo esihlelo sokuhlelo esikhona manje. Lapho kukhona (default), izinto ezinkosaziyo ngezixazululo sokuhlelo esikhethwe zizihlonipha.
    ![Pricing table force durations option](/img/config/pricing-table-force-durations.png)
  * **Hide when Pre-Selected**: Ikhonza iPricing Table lapho isiqalo sokuphatha (plan) sikhona kwi-URL (isibonelo: `/register/premium`).
  * **Pricing Table Template**: Khetha indlela yokuhlelo yezithombe (visual template) yePricing Table (Simple List, Legacy, njalo).

Uma ushiye i-product ePricing Table ngaphambi kokuthi isiyifo sikhonze izixazululo ezidingekayo ukuze sikwazi ukukwazi isiqalo sekhono lokuqala kwesikhashana, ieditor iyakhombisa umbono (warning). Sebenzisa le nto ukuze ushiye indawo eyahlukahlukene eyidingekayo ngaphambi kokuthi ukhasele noma ukhasele izibonelo zokuthatha isiqalo sekhono.

### Kufamba Toggle Yechigadzirwa Period

Kana uri kanga ufunguirira [Price Variations](creating-your-first-subscription-product#price-variations) pamusoro pe products yako (kuti zvichii, zvinhu hwe-monthly ne annual pricing), unogona kuenda uye kuita **Period Selection** field mu checkout form yako. Ichi field chinoshowora toggle inosimbisa kuti customers vanogone kutaura pakati pe billing periods, uye pricing table inobva kubatana nekuti zvinhu zvinobva mweya (dynamically).

#### Step 1: Fungira Price Variations pamusoro pe Products Yako

Panguva unoti uingine Period Selection field, ndichida kuti products yako zive neprice variations dzakafungwa. Enda ku **Ultimate Multisite > Products**, shandisa product yakasiya, uye endaka ku tab ya **Price Variations** kuti uingine billing periods (kuti zvinhu hwe-Annual nediscounted price).

![Price Variations tab on a product](/img/config/product-price-variations-tab.png)

#### Step 2: Shando Period Selection Field mu Checkout Form Yako

1. Enda ku **Ultimate Multisite > Checkout Forms** uye shandisa checkout form yako.

2. Endaka kupfuura kune step inosimbisa field yako ya **Pricing Table** uye chibvumira **Add new Field**.

3. Mu dialog ye selection ye field type, ndichida kuti uingine **Period Select**.

![Add New Field dialog showing Period Select](/img/config/checkout-form-add-field-dialog.png)

4. Fungira period options. Zvinhu zvakawanda zvinoda:
   * **Duration**: Nhoro (kuti zvichii, `1`)
   * **Duration unit**: Nyaya ya period (Days, Weeks, Months, kana Years)
   * **Label**: Text inozobona customers (kuti zvinhu hwe-Monthly, hwe-Annual)

5. Shanda **+ Add Option** kuti uingine period choices. Zvinhu izvi zvinofanira kuitana neprice variations dzakafungwa pamusoro pe products yako.

![Period Selection field settings](/img/config/period-selection-field-settings.png)

6. Chigadzira **Period Selector Template** (Clean ndiyo inosimbisa, inobva neselector inosimbiswa yakapfuma ready kuti uingine CSS).

7. Klik **Save Field**.

#### Dinguva 3: Posisheni Field Upfuwo Kune Pricing Table

Kuti uonekane zvakanaka kwemuno wemudzidzi, ndichida kuti Period Selection field ine kuonekwa **panguva** kune Pricing Table field mupfungwa yechitatu chekuchengetedza (checkout step). Unogona kugara fields kuti utshanye iwo mu checkout form editor. Izvi zvinhu zvinoita kuti mutendai: mutendai kuti mudzidzi avone period ya kukumbira kutyisira, uye panguva apo vanenge vachigona kuona matare anogona kutanga.

![Checkout form editor showing field order](/img/config/checkout-form-editor-with-fields.png)

#### Izvi Zvinotenderera Kune Frontend (Mupfungwa Yemudzidzi)

Ngekurudzwa, mutendai avo vanenge vachiti munyanya wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika wenyika w

Kana uri munenge uchitika nekuti wauri kunoitawo nemafomu anogona kuvaedza (form) yakagadzirwa panguva yakare kupfuura v2.6.1, kana kuti yakatanga kubva mupfomu yakare (blank template):

1. Enda ku **Ultimate Multisite > Checkout Forms** uye edza fomu yako ya checkout.
2. Mune chii chii chinotanga kunge zvinhu zvemahoma (site details) zvinogara, ndichida kuti uingine **Add new Field**.
3. Chii chii chaunoda kuita, unoda kuti uingine **Template Selection** (Kutenga Template).
4. Ramba uchigadzirisa chii:
   - **Label** — Iri kunzwa kwemabhuku anogona kuona pamusoro pe grid ya templates (kuti zvichiri, "Chibva cha template").
   - **Required** — Kuratidza kuti vanhu vachida kuita selection ye template panguva haunogone kuenda mberi.

#### Izvi zvinogona kuita sei

Kana munhu akange anoda template panguva aiva checkout, Ultimate Multisite inoshandisa iye kana ichiichiri kubva kunge site yavo yakare (provisioning). Templates izvi zinogara kuva dzinogona kuone pamusoro pe list yako ya **Site Templates** (**Ultimate Multisite > Site Templates**). Zvinogona kuone templates zvakaita kuti vanhu vanyane vave (available to customers) chinhu chete.

### Checkout-form base domains

Ultimate Multisite v2.13.0 inoshandisa domains dzakagadzirwa pamusoro pe fields ya **Site URL** panguva checkout kunge base domains dze network. Ramba uchigadzirisa settings dzemafomu (available-domain) kana unoda vanhu vanyane vave kuita sites zvinogara under one kana zvinhu zvakawanda zveregistration domain, se `example.com` uye `sites.example.com`.

Base domains dze checkout-form dzine kushandawe (shared) hazvazovada mapping dzemafomu dzinogona kuva per-site custom domain mappings. Kana munhu akange anoda site yavo yakare (subdirectory site) panguva iye inoshandisa base ezi, Ultimate Multisite haizovada record ya mapped-domain inosimbisa kuti host yese inenge yakagadzirwa kuiteiteite kana site yacho chete. Host yese inogona kuonekwa kune sites dzine sibling (sites dzinogara panguva).

Ramba uchitenda custom domains dze per-customer mapped hosts, se `customer-example.com`. Ramba uchitenda base domains dze checkout-form dze registration hosts dzinogone kuiteiteite vanhu vanyane vave (shared registration hosts) kuti sites dzakawanda dzinogone kuita.

#### Kuenda kunaka chii field

(Hapana content for this section in the original, so I keep it as is.)

Kana haunokudza site templates (mabasa anonyanya), chibvumira kuenda kufarcha Template Selection field kubva munzira wenyu. Mune zvinhu, vachida kuita iTemplate inotanga (default template) inozivikanwa under **Ultimate Multisite > Settings > Site Templates**.
