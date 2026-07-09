---
title: Pagmugna sa Imong Una nga Produkto sa Subscription
sidebar_position: 6
_i18n_hash: a4a36ed896f6691eebb099208a746cd7
---
# Paghimo sa Imong Una nga Subscription Product (v2) {#creating-your-first-subscription-product-v2}

_**MAHINUNGOD NGA PAHIBALO: Kini nga article para lang sa mga Ultimate Multisite version 2.x users. Kung gamiton nimo ang version 1.x,**_ **_kita kini nga article**_**.

Aron magsugod sa pagpadagan sa imong network ug magsugod sa pagbaligya sa imong mga serbisyo sa mga potensyal nga user, kinahanglan nimo og lain-laing subscription options. Unsaon nimo paghimo niining mga produkto? Unsa ang mga klase sa mga produktong mahimong ihatag nimo? Niining article, atong tabangan kamo sa tanan nga kinahanglan ninyo mahibalo bahin sa mga produkto.

## Klase sa Produkto {#product-type}

Sa Ultimate Multisite, mahimo kang magtanyag og duha ka klase sa mga produkto ngadto sa imong mga kliyente: **plans** ug **add-ons (Order Bump)**. Ang add-ons mahimong magbinag-bahin sa duha ka klase: **packages** ug **services**. Makita nato ang ilang kalainan ug espesyalidad sunod.

  * **Plans**: kini ang pundamental nga produkto sa Ultimate Multisite. Ang imong kliyente makahigop og membership kung kini konektado sa usa ka plan. Ang plan naghatag sa imong mga kliyente og usa o labaw pa nga sites (depende ni sa mga configuration sa imong plan) uban ang mga limitasyon nga imong gihimo sa imong product editing page.

  * **Packages**: mga add-on nga direkta nga makaapekto sa mga functionality sa Ultimate Multisite plans. Nag-usab sila sa mga limitasyon o nagdugang og bag-ong resources, plugins, o themes sa orihinal nga plan nga gipalit sa imong kliyente. Pananglitan, ang usa ka basic plan mahimong magtugot og 1,000 na visits kada bulan ug mahimo nimong maghatag og package nga magpadaghan niini ngadto sa 10,000.

  * **Services**: mga add-on nga dili mag-usab sa mga functionality sa Ultimate Multisite. Kini mao ang mga buluhaton nga imong himoon alang sa imong kliyente gawas pa sa plan nga ilang gipalit. Pananglitan, ang imong customer mahimong mopalit og plan nga nagtugot sa usa ka site ug mobayad usab og extra service nga maghimo niining site design.

## Pagdumala sa mga Produkto {#managing-products}

Para sa daghan, ang tab nga **Products** sa Ultimate Multisite **(Ultimate Multisite > Products)** mahimong itandi sa mga plano sa tradisyonal nga hosting environment.

Sa sulod sa Ultimate Multisite, ang tab nga Products naghatag og kahulogan ug mga limitasyon nga magamit sa usa ka piho nga produkto o serbisyo. Kini nga mga construct naglakip sa deskripsyon sa produkto o serbisyo, presyo, buhis (taxes), ug mga permiso.

Kini nga bahin maggiya kanimo sa pagsabot niining importante nga pundasyon sa Ultimate Multisite.

![Products list page](/img/config/products-list.png)

## Pagdadaghan og Produkto (Adding Products) {#adding-products}

Bisan plano, package, o serbisyo ang nagsilbing entrada para maghimo og bag-ong item pinaagi sa **Ultimate Multisite > Products > Add Product**.

![Add Product button](/img/config/product-add-button.png)

Ang interface adunay duha ka nag-unang seksyon. Sa wala kay pipila ka mga tab nga motabang sa paghatag og deskripsyon sa produkto ug sa tuod, sa tuo adunay pipila ka seksyon aron mag-define sa base price sa produkto, ang iyang aktibong kahimtang (active state), ug hulagway sa produkto.

![Product edit page overview](/img/config/product-edit-full.png)

### Deskripsyon (Description) {#description}

Ang base nga impormasyon sa produkto mahimong ma-define pinaagi sa paghatag og ngalan ug deskripsyon sa produkto. Kini nga mga identifier gipakita bisan asa kinahanglan ang impormasyon sa produkto sama sa pagpili sa plano ug presyo, invoice, upgrades, ug uban pa.

![Product description section](/img/config/product-description.png)

### Uri sa Pagpresyo (Pricing Type) {#pricing-type}

Sa tuo nga bahin sa interface, mahimong ma-define ang base nga pagpresyo.

![Pricing and save section](/img/config/product-pricing-save.png)

Ang Ultimate Multisite nagsuporta og tulo ka nagkalain-laing uri sa pagpresyo. Ang opsyon nga **paid** magpangayo sa network administrator og impormasyon bahin sa presyo ug kalihokan sa pagbayad (billing frequency) sa produkto.

### Pagpresyo (Pricing) {#pricing}

Ang bahin sa presyo nag-define sa base nga presyo sa produkto ug ang panahon sa pagbayad (billing interval).

![Pricing and save section](/img/config/product-pricing-save.png)

mao, usa ka pananglitan nga presyo og $29.99 nga naay setting nga 1 bulan, magbayad siya og $29.99 kada bulan. Parehas ni, ang presyo og $89.97 nga naay setting nga 3 ka bulan, magbayad ana kada quarter.

### Billing Cycles {#billing-cycles}

Ang billing cycles section naghatag sa kasagaran kung unsa ka kasaba (frequency) sa nabanggit nga interval sa pagbayad ug kini kasagarang gihapoy base sa mga kontrata o fixed terms.

![Pricing and save section](/img/config/product-pricing-save.png)

Pananglitan, ang presyo sa produkto og $29.99 nga naay interval nga 1 ka bulan ug 12 ka billing cycles, magbayad siya og $29.99 kada bulan para sa produkto sulod sa sunod 12 ka bulan. Sa laing pagkasulti, ang ingon nga setting naghimo og fixed-price term nga $29.99 kada bulan sulod sa 12 ka bulan ug dayon moundang na sa pagbayad.

### Trial Period {#trial-period}

Ang pag-enable sa offer trial toggle nagtugot sa network administrator nga maghatag og trial period para sa produkto.

![Pricing and save section](/img/config/product-pricing-save.png)

Atol sa panahon sa trial, ang mga customer libre gamiton ang produkto ug dili sila mobayad hangtod nga mahurot na ang trial period.

### Setup Fee {#setup-fee}

Mahimo usab nimo magbutang og setup fee sa imong plan.

![Pricing and save section](/img/config/product-pricing-save.png)

Nagpasabot ni nga ang imong kliyente mobayad og dugang kwarta sa unang bayad (gawas sa presyo sa plano) nga nagkabuluhan sa fee nga imong gihubad niining seksyon.

### Active {#active}

Ang active toggle epektibong naghatag kung ang produkto available ba sa mga customer para sa bag-ong pag-sign up.

![Active toggle](/img/config/product-active.png)

Kung naa kay mga existing customers sa plan ani, ang pag-toggle sa toggle ngadto sa disabled state nagpasabot nga gipahimutang nimo ang plan ug gipahimong "grandfather" kini, nga gipahawa sa plano para sa future sign-ups. **Ang mga existing customers sa plan magpadayon sa pagbayad** hangtod sila mo-transition sa bag-ong plan o mawala sa plan.

### Product Image {#product-image}

Ang button nga **Upload Image** nagtugot sa network administrator nga gamiton ang media library aron mopili o mag-upload og product image.

![Product image section](/img/config/product-image.png)

### Delete {#delete}

Ang button nga **Delete Product** maoy magtanggal sa product gikan sa system. Makita kini kung gi-publish na ang product.

![Delete product section](/img/config/product-delete.png)

Dili sama sa uban nga pagtanggal, ang product dili mapunta sa trash state. Busa kung gitanggal na, dili na maibalik ang aksyon.

### Product Options {#product-options}

Pagkahuman nga gi-define na ang base-level information sa product, ang product options makatabang sa network administrator aron mas mag-define pa og specific attributes sa product.

#### General {#general}

Ang tab nga **General** nag-define sa general attributes sa product nga dili magamit sa bisan unsang laing product-specific tabs.

![General tab](/img/config/product-general-tab.png)

Ang self-explanatory nga **product slug** mao ang slug kung giila ang product sa mga URL ug ubang lugar sa Ultimate Multisite.

Ang Ultimate Multisite nagsuporta sa pipila ka klase sa product sama sa Plan, Package, ug Service. Ang mga tabs sa **Product Options** mag-adjust depende sa klase sa product nga imong gipili.

Ang **Customer Role** nag-specify sa role nga gihatag sa customer kung gi-create ang site. Kasagaran para sa kadaghanan sa network administrators, kini mao ang Ultimate Multisite default o Administrator. Ang Ultimate Multisite default role mahimong i-set sa **Ultimate Multisite > Settings > Login & Registration**.

![Customer role settings](/img/config/product-customer-role-settings.png)

#### Pataas ug Pababa (Up & Downgrades) {#up--downgrades}

Kini nga tab naghatag og mga paagi sa pag-upgrade ug pagpababa (upgrade and downgrade paths) nga pwedeng gamiton sa usa ka customer sulod sa ilang piho nga tier.

Aron mas masabtan niining konsepto, hunahunaa ang usa ka pananglitan diin ang usa ka niche Ultimate Multisite installation naghatag og learning management solutions sa ilang mga customer. Aron makab-ot kini, gihimo ug gi-activate ang tulo ka plano (Basic, Plus, ug Premium) ug ang mga specific plugins para sa matag plano (tan-awa pagkahuman niining seksyon alang sa mga instruksyon kung unsaon pag-activate sa mga plugins).

Kung ang Ultimate Multisite installation nag-serbisyo usab og business websites o eCommerce websites, kailangan kini nga tulo ka plano mahimong magkinahanglan og lain nga mga plugin nga i-install ug i-activate.

Sa maong paagi, dili maayo ug problema kung tugotan nato ang mga customer sa eLearning nga mobalhin ngadto sa mga plano nga eCommerce kay ang mga plano, presyo, ug limitasyon dili siguro angay para kanila.

Busa aron limitado ang dalan sa customer ug aron malikayan ang mga insidente, mahimo sa network administrator nga mag-define og plan group ug sulod niini nga grupo tukion kung unsa ang mga plano nga pwedeng ibalhin sa customer.

![Up and Downgrades tab](/img/config/product-upgrades.png)

Aron ma-define ang usa ka plan group, tukion ang mga compatible plans sulod sa listahan sa **plan group**. Ang **product order** mao ang magdesisyon kung unsaon pag-order ug pagpakita sa mga plano gikan sa pinak ubos ngadto sa pinakataas.

Ang Ultimate Multisite naglakip usab og usa ka feature nga gitawag og **order bump**, diin ang mga add-on products ug services nga angay mahimong idugang sa mga plano. Kini gihatag sa customer isip dugang nga mga butang nga mahimong idugang sa mga plano sa checkout o panahon sa pag-upgrade.

#### Mga Pagbag-o sa Presyo (Price Variations) {#price-variations}

Ang mga pagbabago sa presyo nagpapahimutang sa network administrator nga maghatag og lain-laing lebel sa presyo depende sa gidugayon. Kini nga setting nagpapasulod kanimo aron mahimong magtanyag og monthly, quarterly, annual, o bisan unsang laing panahon sa pagbayad para sa parehas nga produkto. Pananglitan, pwede kang mag-set up og product sa $29.99/buwan uban ang discounted annual option sa $249.99/tuig.

![Price Variations tab](/img/config/product-price-variations-tab.png)

Aron makatukod og price variations, i-set ang **Enable Price Variations** toggle nga active ug i-click ang button nga **Add new Price Variation**.

![Product price variations](/img/config/product-price-variations.png)

Para mosulod sa variation, i-set ang duration (gidugayon), period (panahon), ug presyo sa variation. Dugang mga variation mahimong mosulod pinaagi sa pag-click pag-usab sa button.

Pananglitan, kung ang imong base product price kay $29.99 kada bulan, pwede kang magdaghan ni:

  * **3 Buwan** sa $79.99 (gamay nga discount kaysa monthly)
  * **1 Tuig** sa $249.99 (dako nga discount para sa annual commitment)

:::tip Pagpakita og Billing Period Toggle sa Frontend

Ang price variations lang dili makahatag og toggle o switch sa frontend checkout. Aron mapahimo ang mga customer nga mag-switch tali sa mga billing period (pananglitan: Monthly / Annual), kinahanglan nimo i-add ang **Period Selection** field sa imong checkout form. Tan-awa ang [Checkout Forms: Adding a Period Selection Toggle](checkout-forms#adding-a-period-selection-toggle) para sa step-by-step instructions.
:::

#### Mga Buwis (Taxes) {#taxes}

Ang **Taxes** tab nag-align sa mga setting sa buwis nga gipangita sa **Ultimate Multisite > Settings > Taxes** ug mas espesipiko, ang mga tax rates nga gi-define. Aron ma-enable ang mga buwis ug mag-define og applicable tax rates, palihog tan-awa ang dokumentasyon sa **Ultimate Multisite: Settings**.

![Taxes tab](/img/config/product-taxes.png)

Sa usa ka miaging pananglitan, nag-define kita og lokal nga tax rate nga 7.25% nga magamit sa mga customer sa California (United States of America).

Kung ma-define na ang tax rate sa **Ultimate Multisite > Settings > Manage Tax Rates** kini mahimong pilion sa lebel sa product.

![Taxes tab](/img/config/product-taxes.png)

Aron ipakita nga ang usa ka product kay taxable item, i-set ang toggle nga **Is Taxable** ngadto sa active ug piliha ang applicable tax rate gikan sa Tax Category dropdown.

#### Site Templates {#site-templates}

Sa laktod, ang site templates kay kompleto nga WordPress websites nga gi-clone para sa site sa customer sa sinugdan sa ilang subscription.

![Site Templates tab](/img/config/product-site-templates.png)

Ang network administrator naghimo ug nag-configure sa template site isip regular nga WordPress site uban ang mga themes, plugins, ug content nga active ug naka-configure na. Ang template site gi-clone verbatim ngadto sa customer.

Kini nga tab nagtugot sa network administrator nga mag-specify sa pamaagi sa paglihok sa site templates kung adunay bag-ong subscription. Aron mogamit og site templates alang niining plan, i-set ang toggle nga **Allow Site Templates** ngadto sa active state.

Kung gipahimo nga disabled ang **Allow Site Templates**, ang mga customer sa plan dili makapili og templates bisan pa kung ang checkout form, shareable link, o URL parameter maoy maghatag og access sa mga templates. Ang Ultimate Multisite karon nagpugos niining limit pinaagi sa usa ka fallback chain sa tanang available nga entry points: una i-check ang plan settings, dayon ang checkout-form template settings, ug pagkahuluna (pre-selected) o gihatag gikan sa URL nga mga templates. Kini nagpabilin og pareho ang mga limit sa plan ug nagpugong sa mga templates nga magpakita alang sa mga product nga dili kini angay magtanyag niini.

Ang **site template selection mode** nag-define sa pamaagi sa paglihok sa site templates atol sa proseso sa subscription.

Ang **D** **efault** nga setting nagsunod sa mga lakang sa checkout form. Kung ang network administrator mismo ang nag-define og template selection step sa proseso sa checkout ug kini gi-define gamit ang mga templates, kining setting maghatag og respeto sa mga direksyon nga gihimo sa checkout step.

Ang pagbutang og **A** **ssign Site Template** nagpugos sa pagpili sa gitakdang template. Tungod niini, ang bisan unsang template selection steps sa proseso sa checkout ma-alis.

Sa katapusan, ang **C** **hoose Available Site Templates** mag-override sa mga templates nga gipangita sa checkout step gamit ang mga templates nga gipili niining setting. Mahimo usab og mag-define og pre-selected template aron matabangan ang customer sa pagpili.

Sa katapusan, kung gusto sa network administrator nga mahitabo ang template selection sa mga checkout steps, igo na ang setting nga ' _default_ '. Alternatibo aron ma-remove ug ma-lock ang template selection ug ihatag kini sa plan settings, ang mga option nga ' _assign new template_ ' o ' _choose available site templates_ ' mahimong gusto.

#### Sites {#sites}

Ang **Sites** tab bahin sa limitations functionality sa Ultimate Multisite.

![Sites tab](/img/config/product-sites.png)

Kini setting nag-specify sa pinakadaghan nga gidaghanon sa mga sites nga pwede ma-create sa usa ka customer ubos sa ilang membership.

Aron ma-enable ang limitation, i-set ang **limit sites** toggle ngadto sa active state ug ispesipikar ang pinakadaghan nga numero sa mga sites sa field nga **site allowance**.

#### Visits {#visits}

Ang **Visits** tab usa pa ka bahin sa limitations system sa Ultimate Multisite. Kini nga setting nagtugot sa pag-account ug sunod nga throttling sa mga unique visitor ngadto sa site sa customer.

![Visits tab](/img/config/product-visits.png)

Gikan sa panan-marketing nga panan-aw, ang mga administrator sa network pwede gamiton kining setting isip pamaagi aron makapadasig sa mga customer nga mag-upgrade sa ilang plano kung naabot na ang mga limitasyon. Mahimo usab ni tabang ang network administrator sa pagpugong ug paglikay sa sobra nga traffic sa mga site aron mapreserbar ang mga resources sa sistema.

Aron gamiton kining feature, i-set ang **limit unique visits** toggle sa active state ug tukion ang pinakataas nga gidaghanon sa mga unique visitor sa field nga **unique visits quota**.

Kung naabot na ni limit, ang Ultimate Multisite dili na magserbisyo sa site sa customer imbes nga magpakita og mensahe nga naubos na ang mga limitasyon.

#### Users {#users}

Ang mga 'Users' limitations sa Ultimate Multisite nagtugot sa network administrator sa pagbutang og mga limitasyon sa gidaghanon sa mga user nga mahimong himuon ug ihatag og roles.

![Users tab](/img/config/product-users.png)

Aron ma-enable ang feature sa limitasyon, i-set ang **limit user** toggle sa active state pinaagi sa pag-slide niini sa tuig.

Sunod para sa matag role nga gustong limitahon, i-set ang toggle sa sunod niini ngadto sa active state ug tukion ang pinakataas nga limit sa angay nga field.

#### Post Types {#post-types}

Ang **Post Types** tab nagtugot sa network administrator sa pagbutang og pamaagi nga mga limitasyon sa daghang klase sa post types sulod sa WordPress.

![Post Types tab](/img/config/product-post-types.png)

Tungod sa paghimo sa WordPress, ang posts ug post types usa ka importante nga bahin sa iyang core functionality, ug busa ang sistema sa limitasyon sa Ultimate Multisite gidesinyo aron motabang sa network administrator sa paghimo ug pagpadayon sa mga limitasyon.

Aron ma-enable kining limits subsystem, i-set ang **limit post types** toggle sa active state pinaagi sa pag-slide niini sa tuig.

Sunod, para sa matag-iya nga post type, i-toggle kini pinaagi sa pag-slide niini sa tuig ug tukion ang pinakataas nga limitasyon sa husto nga field.

#### Disk Space {#disk-space}

Ang tab nga **Disk Space** nagtugot sa mga network administrator nga maglimpyo sa luna nga gipaggamit sa mga customer.

![Disk Space tab](/img/config/product-disk-space.png)

Kasagaran sa WordPress multisite, ang core files pareho ra para sa tanang sites ug ang mga indibidwal nga directory nga gigamit para sa media files ug uploads mao ang magbaton niini nga settings ug limitasyon.

Aron ma-enable ang limitasyon sa paggamit sa disk, i-set ang **limit disk size per site** toggle sa aktibo nga kahimtang pinaagi sa pag-slide niini sa tuig.

Sunod, tukion ang pinakataas nga limitasyon sa megabytes sa field nga **disk space allowance**.

#### Custom Domain {#custom-domain}

Pinaagi sa pag-toggle niining option, mahimo nimong tugotan ang custom domains para la ni plan.

![Custom Domains tab](/img/config/product-custom-domains.png)

#### Themes {#themes}

Ang **Themes** tab sulod sa product options nagtugot sa network administrator nga himuon nga available ang mga themes para sa pagpili sa mga customer ug mapilitong i-set ang estado sa theme.

![Themes tab](/img/config/product-themes.png)

_**Nota: Aron mahimong available ang mga themes sa mga customer, kinahanglan kining ma-enable sa network pinaagi sa network administrator.**_

![Network themes page](/img/config/product-themes-network-enabled.png)

Ang option nga **visibility** naghatag og kahibalo kung makita ba kini nga theme sa customer kung tan-awon nila ang ilang tab nga **Appearance > Themes** sulod sa ilang site. Ang pag-set niining option ngadto sa **Hidden** ma-alis ang theme gikan sa panan-aw ug busa limitado ang abilidad sa pagpili ug pag-activate niini.

![Themes tab](/img/config/product-themes.png)

Ang pagpili nga **behavior** nagtugot sa network administrator nga maghatag og estado sa theme kung kini gihimo na ang customer site.

Sa **A** **Available** nga kahimtang, ang theme gihatag sa customer para sa ilang kaugalingon nga pag-activate. Sa kasukwahi, ang **Not Available** nga kahimtang nagkuha sa abilidad sa customer nga ma-activate ang theme. Sa katapusan, ang opsyon nga **Force Activate** nagpugos sa pagpili ug pag-activate sa theme, busa kini mahimong default kung maghimo og bag-ong site.

#### Plugins {#plugins}

Parehas ni sa Themes tab, ang Ultimate Multisite nagtugot sa network administrator nga mag-define sa visibility sa mga plugins ngadto sa mga customer ug ang ilang kahimtang kung maghimo og bag-ong site.

![Plugins tab](/img/config/product-plugins.png)

Ang **visibility** drop-down nagtugot sa plugin nga mahimong makita o itago gikan sa customer kung tan-awon kini pinaagi sa Plugins menu option sa ilang site.

Mahimo usab sa network administrator nga manipulahon ang pamaagi sa mga plugins pinaagi sa paggamit sa mga options sa behavior drop-down.

![Plugins tab](/img/config/product-plugins.png)

Ang **Default** selection naghatag respeto sa kahimtang sa plugin nga gihubad sa site template nga gipili sa customer. Busa, ang mga plugins nga na-activate sulod sa template magpabilin nga na-activate kung gi-clone ang template ngadto sa site sa customer.

Ang **Force Activate** nagbutang sa plugin sa active state paghimo sa site ug sa kasukwahi, ang **Force Inactivate** nag-deactivate sa plugin paghimo sa site. Sa duha ka kahimtang ani, ang kahimtang sa plugin mahimong ma-modify manual sa customer pinaagi sa ilang WordPress Plugins menu.

Ang setting nga **Force Activate & Lock** naglihok sa parehas pero pig-agbaw ni kini nga ma-usab ang estado sa plugin sa customer. Busa, kung i-set nimo ang Force Activate and Lock, mapilitan niini ang plugin sa active state ug pig-agbaw sa customer nga ma-deactivate kini. Sa samang paagi, ang setting nga **Force Inactivate & Lock** mapilitan sa plugin sa inactive state ug pig-agbaw sa user nga ma-activate ang plugin.

Ang network administrator mahimong maghunahuna nga isalikway ang Force Activate & Lock ug Force Inactivate & Lock settings uban sa site templates isip plugins, ug ang mga plugin states sulod sa templates mahimong maapektuhan niini kung kini gipili.

#### Reset Limitations {#reset-limitations}

Ang tab nga **Reset Limitations** mag-reset sa tanang custom limits nga gi-define sa product. Aron i-reset ang mga limitasyon, i-click lang ang button nga **reset limitations**.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

Aron kumpirmahan ang buhat, slide ang toggle nga **confirm reset** ngadto sa active state sa tuig ug i-click ang button nga **reset limitations**.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

## Edit, Duplicate, or Delete Product {#edit-duplicate-or-delete-product}

Ang mga existing product pwede i-edit, i-duplicate, o ma-delete pinaagi sa pag-navigate ngadto sa **Ultimate Multisite > Products** ug pag-hover sa existing product name.

![Product hover actions](/img/config/product-hover-actions.png)
