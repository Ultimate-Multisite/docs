---
title: Mga Template sa Site
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# Site Templates (v2)

_**PAHINON: Kini nga article nagrefer sa Ultimate Multisite version 2.x. Kung gamiton nimo ang version 1.x,**_ **tan-aw kini nga article** _**.**_

Ang among tumong paghimo og premium network uban ang Ultimate Multisite kay mag-automate kita sa kadaghanan sa mga proseso samtang naghatag kita og flexibility ug lain-laing mga opsyon para sa among mga kliyente kung maghimo sila og ilang mga website. Usa ka dali nga paagi aron maabot kining balanse mao ang paggamit sa Ultimate Multisite Site Templates feature.

## Unsa ang Site Template? {#what-is-a-site-template}

Ingon sa ngalan niini, ang Site Template usa ka boilerplate site nga pwede gamiton isip base kung maghimo og bag-ong mga site sa imong network.

Nagpasabot kini nga pwede kang maghimo og base site, mag-activate og lain-laing plugins, mag-set og active theme, ug i-customize kini sa bisan unsang paagi nga gusto nimo. Unya, kung ang imong customer maghimo og bag-ong account, imbes nga makakuha sila og default WordPress site nga walay makahuluganon nga sulod niini, makakuha sila og kopya sa imong base site nga naay tanan nga mga customization ug content na anaa.

Nindot kana, pero unsaon nako paghimo og bag-ong site template? Sayon ra kini kaayo.

## Paghimo ug Pag-edit og Bag-ong Site Template {#creating-and-editing-a-new-site-template}

Ang Site Templates kay normal lang nga mga site sa imong network. Aron maghimo og bag-ong template, pwede kang moadto lang sa **Network Admin > Ultimate Multisite > Sites > Add Site.**

**![Add site button in the Sites list page](/img/config/site-templates-list.png)**

Kini magbukas og modal window diin mangutana kini bahin sa **Site title, Site Domain/path,** ug **Site type**. Sa ilalom sa drop-down field nga **Site Type**, siguruha nga pilion nimo ang **Site Template** *.

_![Add site template modal with site type dropdown](/img/config/site-templates-list.png)_

Pwede pud kang magdugang og customer-facing description aron ipasabot kung unsa ang apil sa template:

![Site template description field on the site template edit screen](/img/config/site-template-edit-description.png)

Sa ibaba sa form, makakita ka og **Copy Site** toggle switch. Kini magtugot kanimo nga maghimo og bag-ong site template base sa naay existing site template isip imong pundo aron matabangan ka sa pagtipig og oras imbes nga maghimo og site template gikan sa wala pa.

![Add site template modal with copy site toggle](/img/config/site-templates-list.png)

### Pag-customize sa mga sulod sa usa ka Site Template {#customizing-the-contents-of-a-site-template}

Aron ma-customize ang imong site template, basta adto lang sa dashboard panel niini ug himoa ang mga kausaban nga imong gikinahanglan. Mahimo kang maghimo og bag-ong posts, pages, mag-activate og plugins, ug magbag-o sa active theme. Mahimo pa gyud kang moadto sa Customizer ug magbag-o sa tanang klase sa customization options.

![Site template edit interface](/img/config/site-template-edit.png)

Kining tanang data ma-copy kung ang usa ka customer maghimo og bag-ong site base niini nga Site Template.

### Advanced Options {#advanced-options}

Kung kabalo ka sa gamay nga custom coding, pwede nimo gamiton ang among Search and Replace API aron awtomatikong mapulihan ang impormasyon sa bag-ong site human kini gihimo. Mamahimo kini og butang sama sa pagpuli sa mga ngalan sa kompanya sa About page, pagpuli sa contact email sa Contact page, ug uban pa.

### Paggamit sa Site Templates {#using-site-templates}

Okay, naghimo ka og daghang lain-laing Site Templates nga adunay lain-laing design, themes, ug settings. Unsaon nimo kini himuon nga useful sa imong network karon?

Sa basic, naa kay duha ka pamaagi nga pwede nimong gamiton karon (pero dili magkasin-a):

  * Pag-attach og usa ka Site Template sa matag Plan nimo

**O**

  * Pagtugot sa imong mga kliyente nga sila mismo ang mopili sa site templates atol sa sign-up.

#### Mode 1: Assign Site Template {#mode-1-assign-site-template}

Sa mode ani, dili pwede ang mga kliyente magpili og template kung sila maghimo og account, kondili ikaw na ang maghatag unsa nga template ang gamiton sa matag Plan nimo.

Para mahimo niana, kinahanglan gyud kang moadto sa **Ultimate Multisite > Products > Edit**.

![Edit product to assign site template](/img/config/product-site-templates.png)

Kini magdala kanimo sa pahina nga **Edit Product**. Sa ilalom sa seksyon nga **Product Options**, pangitaa ang tab nga **Site template** ug piliha ang **Assign Site Template** option gikan sa drop-down field. Kini magdala sa listahan sa mga site template nga available ug tugotan ka nga mopili og usa lang ka site template nga gipahinungod para sa product.

![Product site template tab with assign site template option](/img/config/product-site-templates.png)

#### Mode 2: Pilia ang Available Site Template {#mode-2-choose-available-site-template}

Sa mode ani, maghatag ka og pagpili sa imong mga kliyente atol sa proseso sa sign-up. Makapili sila gikan sa lain-laing site templates nga imong gi-define ubos sa product settings. Aduna kay option nga limitahan ang site template nga ilang mapili ubos sa gipiling product. Kini magtugot kanimo nga adunay lain-laing mga set sa site templates ubos sa matag product, nga perpekto para ipakita ang lain-laing mga function ug features alang sa mas taas nga presyo nga produkto.

Sa pahina sa **Edit Product**. Sa ilalom sa seksyon nga **Product Options**, pangitaa ang tab nga **Site template** ug piliha ang **Choose Available Site Template** gikan sa drop-down field. Kini magdala sa listahan sa mga available nga site template ug tugotan ka nga mopili sa site template nga gusto nimong mahimong available. Mahimo nimo kini pinaagi sa pagpili sa iyang Behavior: **Available** kung gusto nimo nga ang site template apil sa listahan. _**Not Available**_ kung gusto nimo nga dili ipakita ang site template isip option. Ug **Pre-selected** kung gusto nimo nga usa sa mga site template nga gilista mahimong default nga napili.

![Choose available site templates with behavior options](/img/config/product-site-templates.png)

### Default Mode: Site template selection sa Checkout form {#default-mode-site-template-selection-on-the-checkout-form}

Kung gusto nimo nga tanan nimong site templates magamit panahon sa registration, o basin dili nimo gusto ang paghimo og dugang trabaho sa paghatag o pagsaysay og mga site template ubos sa matag product nga imong gihimo. Unsaon? Mahimo nimo kini pinaagi sa pag-set sa site template selection ubos sa imong **Checkout Form**. Aron buhat kini, adto sa **Ultimate Multisite > Checkout Forms** ug i-click ang **Edit** ubos sa form nga gusto nimong i-configure.

Kini magdala sa pahina sa **Edit Checkout Form**. Pangitaa ang field nga **Template Selection** ug i-click ang **Edit** ubos niini.

Magsulod ang usa ka modal window. Ubos sa field nga **Template Sites**, mahimo nimong piliha ug ilista ang tanang site templates nga gusto nimo nga magamit panahon sa registration. Ang mga site template nga imong gipili diri kay magamit bisan unsa pa ang product nga gipili sa user.

![Template selection field in the checkout form editor](/img/config/checkout-form-template-step.png)

Sa frontend, makita sa mga customer ang template chooser panahon sa checkout ug mahimo nilang pilion ang nagsugod nga disenyo alang sa ilang bag-ong site.

![Frontend template chooser during registration](/img/config/frontend-template-chooser.png)

### Mga Opsyon sa Template sa Website {#site-template-options}

Naa may ubang mga function sa site templates nga pwede nimong i-on o i-off under Ultimate Multisite settings.

![Site template options in Ultimate Multisite settings](/img/config/settings-sites-templates-section.png)

#### Tugotan ang Pag-switch sa Template (Allow Template Switching) {#allow-template-switching}

Kung i-enable nimo kining option, pwede nga mag-switch ang imong mga kliyente sa template nga ilang gipili atol sa proseso sa pag-sign up human na ma-create ang account ug site. Makatabang ni para sa kliyente kay pwede nila i-re-select ang template kung makatapos sila og mas klaro nga ang ilang una nga gusto dili mao ang pinakagawasnon para sa ilang mga panginahanglan.

#### Tugotan ang mga User nga gamiton ang ilang Site isip templates (Allow Users to use their Site as templates) {#allow-users-to-use-their-site-as-templates}

Tungod kay nag-usik ang mga subsite users og oras sa paghimo ug pag-design sa ilang kaugalingong site, basin gusto nila kopyahon ug gamiton kini isip usa sa mga available nga site template kung maghimo sila og laing subsite sa inyong network. Kining option magtugot kanila nga mahimong buhaton niana.

#### Kopya ang Media sa Template Duplication (Copy Media on Template Duplication) {#copy-media-on-template-duplication}

Kung i-check ninyo kining option, kopya ni ang mga media nga gi-upload sa template site ngadto sa bag-ong gihimo nga site. Mahimo kini i-override sa matag plano.

#### **Pigilan ang Search Engines nga mag-index sa Site Templates (Prevent Search Engines from indexing Site Templates)** {#prevent-search-engines-from-indexing-site-templates}

Ang site templates sama sa gihisgotan niining article kay boilerplate lang, pero bahin pa gani sila sa inyong network, nga nagpasabot nga pwedeng pangitaon pa sa search engines. Kining option magtugot kanimo nga itago ang mga site templates aron dili nila kini ma-index sa search engines.

## Pre-populating Site Templates with auto search-and-replace {#pre-populating-site-templates-with-auto-search-and-replace}

Ang isa sa pinakasiguro nga feature sa Ultimate Multisite kay ang abilidad nga magdugang og bisan unsang text, kolor, ug mga field sa registration form. Pagkuha na nato ni data, pwede natong gamiton kini para pre-populate ang content sa pipila ka bahin sa site template nga gipili. Unya, kung ang bag-ong site ma-publish, ang Ultimate Multisite mag-replace sa mga placeholder sa aktuwal nga impormasyon nga giisulat panahon sa registration.

Pananglitan, kung gusto nimo makuha ang ngalan sa kompanya sa imong end-user inang registration ug awtomatikong ibutang ang ngalan sa kompanya sa home page. Sa imong template site home page, kinahanglan nimong magdugang og mga placeholder, sama sa ipakit-an sa ubos (kinahanglan i-surround ang mga placeholder gamit og double curly braces - {{placeholder_name}}).

![Homepage with placeholder text in curly braces](/img/config/site-templates-list.png)

Unya, pwede nimo basta magdugang og matching registration field sa imong checkout form para makakuha niana nga data. Ang parehas nga checkout form editor nga gigamit para sa pagpili sa template nagtugot kanimo sa pagbutang og custom fields tupad sa template chooser:

![Template selection and registration fields in the checkout form editor](/img/config/checkout-form-template-step.png)

Ang imong customer mahimong magpuno ni field karon panahon sa registration.

![Frontend checkout form with template chooser](/img/config/frontend-template-chooser.png)

Ang Ultimate Multisite naay mag-replace sa mga placeholder ngadto sa data nga gihatag sa customer awtomatiko.

![Placeholders replaced with customer data on the site](/img/config/site-templates-list.png)

### Pag-solve sa problema sa "template puno og placeholders" {#solving-the-template-full-of-placeholders-problem}

Lahat ni nindot, pero naa tay problema: ang atong mga site template - nga mahimong bisitahon sa among mga customer - puno na og mga ugly placeholder nga dili daghan og sulti.

Aron masulbad na kana, naghatag kami og option sa pagbutang og mga fake values para sa mga placeholder, ug gamiton namo ang mga value nga ato kining i-search ug i-replace sa sulod sa inyong template sites samtang bisitaha sa inyong mga customer.

Mahimo ninyong ma-access ang template placeholders editor pinaagi sa pagadto sa **Ultimate Multisite > Settings > Sites**, ug dayon, sa sidebar, i-click ang link nga **Edit Placeholders**.

![Site template settings under the Sites settings page](/img/config/settings-sites-templates-section.png)

Dunay dad-an na kini kaninyo ngadto sa content editor sa mga placeholders, diin mahimo ninyong mag-add og mga placeholder ug ang ilang mga sulod.

![Template placeholders content editor entry point](/img/config/settings-sites-templates-section.png)
