---
title: Fomba Fandefasana
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Checkout Forms {#checkout-forms}

Checkout Forms dia fomba mora sy malalaka mba hanandrana fomba samihafa rehefa mitady hanovana mpanjifa vaovao.

Ny Ultimate Multisite 2.0 dia manolotra editor Checkout Form izay ahafahanao mamorona endrika (forms) maro tianao, misy safidy samihafa, vokatra azo atao, sns.

Mba hahitana ity fahaizana ity, mandehana any amin'ny menio Checkout Forms, eo anaty side-bar anaty lafiny.

![Checkout Forms list](/img/config/checkout-forms-list.png)

Amin'ity pejy ity dia afaka mahita ny checkout forms rehetra anananao ianao.

Ny tabilao dia ahitana tsindrim-peo **Status** (Toetran'ny Fandaharam-potoana) mba hahafahanao manamarina raha azo ampiasaina amin'izay endrika (form) isika izao ny mpanjifa:

| Status | Hevitra |
|---|---|
| **Active** | Afaka ampiasaina any aiza na aiza no naparitahana ny shortcode na pejy fanisana azy. |
| **Inactive** | Voarakitra fa tsy voafahana. Tsy afaka manao checkout amin'izany raha tsy averina ho azo ampiasaina indray ianao. |

Ampiasao ny tabilao Status alohan'ny hanovana lalana fandraisana (registration flow) mpanjifa, indrindra rehefa mitazona checkout forms voalaza na ara-vanim-potoana eo anilanao miaraka amin'ireo endrika mavitra.

Raha te-hamorona vaovao ianao, tsindrio fotsiny ny Add Checkout Form eo ambony pejy.

Afaka misafidy iray amin'ireo safidy telo ireo ho fanombohana anao: single step (iray dingana), multi-step (maro dingana) na blank (tsy misy). Avy eo, tsindrio mba handefitra any amin'ny Editor.

Rehefa misafidy **single step** na **multi-step** ho fanombohana anao, dia misy sehatra **Template Selection** (Safidy Template) ao anatin'ilay template ankehitriny. Ity sehatra ity dia ahafahan'ireo mpanjifanao misafidy template toerana ianao mandritra ny dingan'ny fanisana. Afaka avela eo, esory azy, na apetraka indray toy ny sehatra hafa ao anatin'ilay editor.

![Checkout Form editor](/img/config/checkout-form-editor.png)

Mba hafa, azonao manova na manao miverimberina ireo forms efa anananao amin'ny alalan'ny tsindrim-peo eo ambanin'ny anarany. Eo dia hahita safidy koa ianao mba kopiana ny shortcode an'ilay form na hanesorana ilay form.

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

#### Fampahafantarana ny Checkout Form Editor {#checkout-form-editor-overview}

Ny checkout form editor dia manome fitaovana feno ho an'ny fanamboarana ireo registration forms anareo. Ireto misy famintinana momba ny endriky ny editor:

![Checkout Form editor overview](/img/config/checkout-form-editor-overview.png)

### Fanovana Checkout Form {#editing-a-checkout-form}

Afaka mamorona checkout forms isan-karazany ho an'ny tanjona samihafa ianao. Amin'ity ohatra ity dia hiasa amin'ny registration form isika.

Rehefa miditra ao amin'ny checkout form editor, omeo anarana ny form anao (izay hampiasaina ho fanondroana anatiny ihany) sy slug (ampiasaina mba hamoronana shortcodes, ohatra).

![Checkout Form editor](/img/config/checkout-form-editor.png)

Ny forms dia vita amin'ny dingana sy champs (fields). Afaka manampy dingana vaovao ianao amin'ny alalan'ny tsindrim-peo "Add New Checkout Step".

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

Amin'ny tabilao voalohany an'ilay modal window, vinanso ny votoatin'ny dingana anareo. Ampio azy ID iray, anarana sy famaritana (description). Ireo zavatra ireo dia matetika ampiasaina ao anatiny fotsiny.

![Checkout form step content tab](/img/config/checkout-form-step-content.png)

Manaraka izany, voamarina ny fahitana (visibility) an'ilay dingana. Afaka misafidy ianao eo amin'ny "Always show" (Ataovy hita foana), "Only show for logged in users" (Ataovy hita ho mpampiasa efa miditra ihany) na "Only show for guests" (Ataovy hita ho mpanjifa tsy afaka miditra).

![Checkout form step visibility tab](/img/config/checkout-form-step-visibility.png)

Farany, diniho ny fomba fiasan'ilay dingana (step style). Ireo dia champs safidy (optional fields).

![Checkout form step style tab](/img/config/checkout-form-step-style.png)

Ity no fotoana hanampiana champs amin'ny dingana voalohany anareo. Tsindrio fotsiny ny "Add New Field" ary safidio ny karazana section tianao.

![Checkout form step with fields](/img/config/checkout-form-step-with-fields.png)

Ny champ tsirairana dia manana fepetra samihafa tokony ho voarakitra. Ho an'ity fampidirana voalohany ity, isika safidy ny champ "Username".

![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

![Username field content settings](/img/config/checkout-form-username-content.png)

![Username field visibility settings](/img/config/checkout-form-username-visibility.png)

![Username field style settings](/img/config/checkout-form-username-style.png)

Afaka manampy dingana sy champ maro dia ilainao. Ho fanehoana ny vokatrao ho an'ny mpanjifa mba hisafidianana iray, dia ampiasao ny field "Pricing Table". Raha te hampirisihina ny mpanjifanao hisafidy template ianao, ampiana ny field "Template Selection". Ary toy izany.

![Add New Field dialog](/img/config/checkout-form-add-field-dialog.png)

_**Fanamarihana:** username, email, password, site title, site URL, order summary, payment ary submit button dia champ tsy azo ialana mba hamoronana checkout form._

Raha miasa amin'ny checkout form anao ianao, afaka mampiasa ny Preview button ianao mba hahitana hoe ahoana no ho hitan'ny mpanjifanao ilay form. Afaka manova toerana eo amin'ny fahitana ho mpampiasa efa misy na ho mpitsidika ianao.

![Checkout Form preview button](/img/config/checkout-form-preview-button.png)

![Checkout Form preview modal](/img/config/checkout-form-preview-modal.png)

Farany, amin'ny Advanced Options dia afaka manova ny hafatra ho an'ny pejy "Thank You" ianao, manampy snippets mba hanaraha-maso ny conversion, manampy CSS manokana ho an'ny checkout form anao na manakana azy amin'ireo firenena sasany.

![Advanced Options](/img/config/checkout-form-advanced.png)

Afaka mamaha manokana na manakana ny checkout form anao ianao amin'ny alalan'ny fanindriana ity safidy eo amin'ny lafiny ankavanana, na manasana azy tanteraka ianao.

![Active toggle](/img/config/checkout-form-active.png)

Form irafana dia, form-pifandraisana (form) iray no tianao dia tsindrio ny safidy "delete" ao amin'ny form actions:

![Checkout form delete option](/img/config/checkout-form-delete.png)

Aza adino ny hitsavina ny checkout form anao!

![Save button](/img/config/checkout-form-save.png)

Mba hahazoana ny shortcode an'ilay form dia tsindrio ny "Generate Shortcode" ary kopio ny vokatra miseho ao amin'ny modal window.

![Save button with shortcode](/img/config/checkout-form-save.png)

### Ny Champin'ny Tabilao Vidiny (The Pricing Table Field) {#the-pricing-table-field}

Ny champin'ny **Pricing Table** dia mampiseho ny vokatrao eo amin'ny checkout form mba hahafahana misafidy toromarika iray ny mpanjifa. Rehefa manova ity champin'ity ity ianao, dia afaka mametraka safidy maromaro ianao:

![Pricing Table field settings](/img/config/pricing-table-field-settings.png)

Ity misy fomba miseho an'ilay pricing table eo amin'ny frontend registration form:

![Frontend checkout pricing table](/img/config/frontend-checkout-pricing-table.png)

  * **Products**: Safidio izay vokatra tianao haseho sy ny filahany rehefa avy.
  * **Force Different Durations**: Rehefa voafetra, dia haseho ireo vokatra rehetra na inona na inona raha misy fomba vidiny mifanaraka amin'ny fotoana fandraisana vola (billing period) voafidy ankehitriny. Raha tsy voafetra izany (default), dia ho afaka ny vokatra tsy manana fomba vidiny ho an'ilay fotoana voafidy noho afaka atao ho tsy hita.
    ![Pricing table force durations option](/img/config/pricing-table-force-durations.png)
  * **Hide when Pre-Selected**: Ho afaka manafatra ny pricing table rehefa misy toromarika efa voafidy tamin'ny alalan'ny URL (ohatra: `/register/premium`).
  * **Pricing Table Template**: Safidio ny endrika (template) ho an'ilay pricing table (Simple List, Legacy, sns.).

Raha ampiana vokatra iray ao amin'ny Pricing Table ianao mialoha fa tsy misy ireo champin'ilay ilaina mba hanatanterahana ny fomba fandraisana vola an'io vokatra io, dia hiseho famantarana (warning) eo amin'ny editor. Ampiasao io famantarana io mba hanampiana ny champin'ny ilaina alohan'ny famoahana na fanovana ho an'ny registration form mivantana.

### Fanampana ny Fandrefesana ny Fotoana {#adding-a-period-selection-toggle}

Raha efa nanamboarina [Price Variations](creating-your-first-subscription-product#price-variations) ianao eo amin'ny vokatrao (ohatra, vidiny isam-bolana sy isan-taona), dia afaka manampy **Period Selection** (Fanomezana safidy fotoana) iray ao amin'ny *checkout form* anao ianao. Ity fampisehoana ity dia mampiseho toggle izay ahafahan'ny mpanjifa mifindra eo amin'ireo fotoana fandoavam-bola samihafa, ary ny tabilao vidiny dia miova mandeha amin'ny fotoana tena izy (dynamically) rehefa misy fiovana.

#### Dingana 1: Fametrahana Price Variations eo amin'ny Vokatrao {#step-1-set-up-price-variations-on-your-products}

Alohan'ny hanampiana ny *Period Selection* ianao, dia ataovy antoka fa efa voafetra ny vokatrao ireo amin'ny *price variations*. Mandehana any amin'i **Ultimate Multisite > Products**, ovain-teny (edit) ny vokatra iray ary mandehana any amin'ny tabilao **Price Variations** mba hanampiana fotoana fandoavam-bola hafa (ohatra, isan-taona amin'ny vidiny latsaky ny tsena).

![Price Variations tab on a product](/img/config/product-price-variations-tab.png)

#### Dingana 2: Fametrahana ny Period Selection ao amin'ny Checkout Form anao {#step-2-add-the-period-selection-field-to-your-checkout-form}

1. Mandehana any amin'i **Ultimate Multisite > Checkout Forms** ary ovain-teny (edit) ny *checkout form* anao.

2. Mandehana latsaka mankany amin'ilay dingana izay ahitana ny *Pricing Table* anao ary tsindrio ny **Add new Field**.

3. Ao amin'ny fampidinana safidy karazana *field*, tsindrio ny **Period Select**.

![Add New Field dialog showing Period Select](/img/config/checkout-form-add-field-dialog.png)

4. Ataovy an-tsipika ireo safidy fotoana. Ny safidy tsirairay dia mila:
   * **Duration**: Ny isa (ohatra, `1`)
   * **Duration unit**: Ny karazana fotoana (Amin'ny andro, Herinandro, volana, na Taona)
   * **Label**: Ny lahatsoratra izay ho hita an'ny mpanjifa (ohatra, "Isam-bolana", "Isan-taona")

5. Tsindrio ny **+ Add Option** mba hanampiana safidy fotoana maro kokoa. Ireo safidy ireo dia tokony mitovy amin'ny *price variations* izay efa nametrakao eo amin'ny vokatrao.

![Period Selection field settings](/img/config/period-selection-field-settings.png)

6. Safidio ny **Period Selector Template** (Ny Clean no tena default, izay mamoaka safidy tsotra vita ho vonona ho an'ny CSS manokana).

7. Keteza ny **Save Field**.

#### Dingana 3: Apetaho eo ambony ny tabilao vidiny (Pricing Table) ilay champ {#step-3-position-the-field-above-the-pricing-table}

Mba hahazoana traikefa tsara indrindra ho an'ny mpampiasa, dia ataovy antoka fa miseho aloha ny champ Period Selection **alohan'ny** Pricing Table ao amin'ny dingana checkout anareo. Afaka manodina (drag) ireo champs ianao mba hanovana ny filaharany ao amin'ny checkout form editor. Amin'izay fomba, safidy ny mpividy aloha ny fotoana fandraisana vola ary avy eo dia hitaky vidiny ho an'io fotoana io izy.

![Checkout form editor showing field order](/img/config/checkout-form-editor-with-fields.png)

#### Ahoana no miasa amin'ny Frontend (Eo anatrehan'ny mpanjifa) {#how-it-works-on-the-frontend}

Rehefa vita ny fametrahana azy, ireo mpampiasa mijery ny pejy fandraisana anareo dia hahita ny safidy fotoana (period selector) eo ambony ny tabilao vidiny. Rehefa tsindrin'izy ireo ny fotoana fandraisana vola hafa:

  * Ho avy hatrany no hanavao ny tabilao vidiny mba hanehoana ny vidin'io fotoana io (tsy mila manao page reload intsony).
  * Raha tsy voafetra ny **Force Different Durations** ao amin'ny champ Pricing Table dia ho afaka hiditra an-tsokosoko ireo vokatra izay tsy misy fahasamihafana amin'ny vidiny ho an'io fotoana io.
  * Raha voafetra ny **Force Different Durations** dia ho hita foana avy ireo vokatra rehetra na dia tsy misy fahasamihafana amin'ny vidiny ho an'io fotoana io aza (hoaneho ny vidiny fototra azy izy).

#### Fametrahana aloha ny Fotoana Fandraisana Vola amin'ny alalan'ny URL {#pre-selecting-a-billing-period-via-url}

Afaka manome safidy mialoha ny vokatra sy ny fotoana fandraisana vola ianao amin'ny alalan'ny URL. Manohana ireo format URL ireo ny Ultimate Multisite:

  * `/register/premium` — Mampiditra mialoha ny vokatra "Premium" ihany
  * `/register/premium/12` — Mampiditra mialoha ny vokatra sy ny faharetana 12 volana
  * `/register/premium/1/year` — Mampiditra mialoha ny vokatra miaraka amin'ny faharetana 1 taona

### Ny Champ Fafana Template (Template Selection Field) {#the-template-selection-field}

Ny champ **Template Selection** dia mamela ny mpividy misafidy template ho an'ny tranokala mandritra ny checkout. Eto anio dia voarakitra ao anatin'ny **single step** sy ny **multi-step** checkout form templates izay ampiana ao amin'ny Ultimate Multisite v2.6.1.

#### Fampidirana azy manokana (Adding the field manually) {#adding-the-field-manually}

Raha ianao mitarika amin'ny form izay natao talohan'ny v2.6.1, na nanomboka tamin'ny template fotsiny:

1. Mandehana any amin'**Ultimate Multisite > Checkout Forms** ary ovay ny checkout form anao.
2. Ao amin'ilay dingana izay angon-drazana momba ny toerana (site details) dia tsindrio **Add new Field**.
3. Safidio ny **Template Selection** avy ao amin'ny dialog fampidinana karazana champ (field type).
4. Ataovy an-tsipika ilay field:
   - **Label** — Io lohateny izay hitan'ny mpanjifa eo ambony tamin'ny grid an'ny template ianao (ohatra: "Safidio ny template toerana").
   - **Required** — Raha tsy maintsy misafidy template alohan'ny hanohy ny mpanjifa.

#### Ahoana no fiasany {#how-it-works}

Rehefa misafidy template iray ny mpanjifa mandritra ny checkout dia ampiasain'i Ultimate Multisite izany rehefa mamorona ny toerany vaovao ho azy. Ireo template haseho dia avy amin'ny lisitry ny **Site Templates** anao (**Ultimate Multisite > Site Templates**). Ny template izay voamarina fa azo ampiasaina ho an'ny mpanjifa ihany no hita eto.

### Checkout-form base domains {#checkout-form-base-domains}

Ny Ultimate Multisite v2.13.0 dia manao ny domain voatendry ao amin'ny champs **Site URL** amin'ny checkout form ho toy ny network base domains (domain fototra an'ny tambajotra). Ampiasao ny fepetra momba ny available-domain an'ilay field rehefa te-handray ny mpanjifa hamorona toerana eo ambanin'ny domain famerenana iombonana iray na maromaro, toy ny `example.com` sy `sites.example.com`.

Tsy voatendry ho mapping an'ny domain manokana isaky ny toerana ireo checkout-form base domains. Rehefa mamorona toerana sous-directory (subdirectory site) ny mpanjifa amin'ireo fototra ireo, dia tsy hamorona ny Ultimate Multisite record an'ny mapped-domain izay hahatonga ilay host iombonana ho an'io toerana iray ihany. Ho azo ampiasaina ao anatin'ilay host iombonana io ho an'ny toerana mitovy mampiasa checkout form base.

Ataovy ho domain manokana (custom domains) ireo ho an'ny host mifandray amin'ny mpanjifa isaky ny toerana, toy ny `customer-example.com`. Avelao ho domain fototra an'ny checkout form ho an'ny host famerenana iombonana izay azo ampiasain'ny toerana maro.

#### Famoahana ilay field {#removing-the-field}

Raha tsy manolotra site templates ianao, esory ny champ "Template Selection" amin'ny forms-nao. Ny mpanjifa dia handray ilay template fa voafidy ao anatin'ny **Ultimate Multisite > Settings > Site Templates** no voatendry azy.
