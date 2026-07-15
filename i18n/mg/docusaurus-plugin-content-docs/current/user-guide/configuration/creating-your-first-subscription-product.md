---
title: Fanaovana ny vokatra fandraisana vola voalohany anao
sidebar_position: 6
_i18n_hash: a4a36ed896f6691eebb099208a746cd7
---
# Fanaovana vokatra fandraisana vola voalohany (v2)

_**FANAMARIHANA MANAN-DANJA: Ity lahatsoratra ity dia ho an'ny mpampiasa Ultimate Multisite v2.x ihany. Raha mampiasa dika 1.x ianao,**_ **_jereo ity lahatsoratra ity**_.

Mba hanombohana ny fiasan'ny tambajotrao sy hanombohana ny fivarotana ny tolotranga ataonao ho mpampiasa mety, mila safidy fandraisana vola samihafa ianao. Ahoana no famoronana ireo vokatra ireo? Inona avy ireo karazana vokatra azonao atolotra? Amin'ity lahatsoratra ity dia handinika ny zavatra rehetra tokony ho fantatra momba ny vokatra isika.

## Karazana Vokatra {#product-type}

Amin'ny Ultimate Multisite dia afaka manolotra karazana vokatra roa ianao ho an'ny mpanjifa anao: **plans** (drafitra) sy **add-ons** (Order Bump). Ny add-ons dia azo zaraina ho karazana roa: **packages** (fandrindrana) sy **services** (fanompoana). Ho jerena ny fahasamihafana sy ny toetra manokana azy ireo isika manaraka.

  * **Plans** : io no vokatra fototra an'ny Ultimate Multisite. Afaka manana mpikambana ianao raha mifandray amin'ny plan iray izy. Ny plan dia manome toerana iray na maromaro (miankina amin'ny fametrahana ny plan anao) miaraka amin'ireo fetra izay voatendryo eo amin'ny pejy fanovana vokatra anao.

  * **Packages** : ireo add-ons izay mavitrika mivantana amin'ny fiasan'ny plans ao amin'ny Ultimate Multisite. Manova ny fetra na manampy loharano vaovao, plugins na themes any amin'ilay plan voahafantarina nataon'ny mpanjifanao. Ohatra, ny plan fototra dia mety mamela fidirana 1,000 isan-taona isam-bolana ary afaka manolotra package izay manitsastrasa io isa io ho 10,000.

  * **Services:** ireo add-ons izay tsy manova ny fiasan'ny Ultimate Multisite. Ireo dia asa ataonao ho an'ny mpanjifanao ankoatra ilay plan nividianareo. Ohatra, mety mividy plan ianao izay mamela toerana iray ihany ary mandoa fanampiny ho service izay hanamboarana io famolavolana toerana io.

## Fitantanana Vokatra {#managing-products}

Ho an'ny olona maro dia azo aseho ny **Products** tab ao amin'ny Ultimate Multisite **(Ultimate Multisite > Products)** ho toy ny "plans" (drafitra) amin'ny tontolo hosting mahazatra.

Ao anatin'ny Ultimate Multisite, ny Products tab no mamaritra ny firafitry ny zavatra na ny fepetra azo ampiharina amin'ny vokatra na serivisy manokana iray. Ireo firafitry ireo dia mivelatra hatrany amin'ny famaritana ny famaritana vokatra na serivisy, ny vidiny, ny hetra (taxes), ary ny zo fiasa (permissions).

Ity fizarana ity dia hitarika anareo amin'ny fahatakarana fototra tena ilaina ao amin'ny Ultimate Multisite.

![Products list page](/img/config/products-list.png)

## Fampidirana Vokatra (Adding Products) {#adding-products}

Na plan iray, package iray, na serivisy iray no lalana hanombohana ny famaritana zavatra vaovao dia amin'ny alalan'ny **Ultimate Multisite > Products > Add Product**.

![Add Product button](/img/config/product-add-button.png)

Ny interface dia misy faritany roa lehibe. Eo an-dakiana, misy sary maromaro izay manampy amin'ny famaritana ny vokatra ary eo an-ranomasina, misy faritra vitsivitsy izay mamaritra ny vidin'ny vokatra fototra, ny fahasalamany (active state), ary ny sary an'ilay vokatra.

![Product edit page overview](/img/config/product-edit-full.png)

### Famaritana (Description) {#description}

Ny fampahalalana fototra momba ny vokatra dia azo faritana amin'ny alalan'ny fanomezana anarana vokatra sy famaritana azy. Ireo famantarana ireo dia haseho aiza na aiza no ilainy ny fampahalalana momba ny vokatra, toy ny safidy plan sy vidiny, ny facture (invoices), ny fanatsarana (upgrades), ary izay hafa.

![Product description section](/img/config/product-description.png)

### Karazana Vidiny (Pricing Type) {#pricing-type}

Eo an-ranomasina amin'ny interface, dia azo faritana ny vidiny fototra.

![Pricing and save section](/img/config/product-pricing-save.png)

Maneho telo karazana vidiny samihafa ny Ultimate Multisite. Ny safidy **paid** (miditra vola) dia manome toromarika ho an'ny administrator an'ny tambajotra mba hanomezana fampahalalana momba ny vidin'ny vokatra sy ny fotoana famoahana azy (billing frequency).

### Vidiny (Pricing) {#pricing}

Ny ampahany amin'ny vidiny dia mamaritra ny vidin'ny vokatra fototra sy ny fotoana famoahana azy.

![Pricing and save section](/img/config/product-pricing-save.png)

izany hoe, ohatrin' ny vidiny $29.99 miaraka amin'ny fepetra 1 volana dia hifandray $29.99 isaky ny volana. Mitovy izany, ny vidiny $89.97 miaraka amin'ny fepetra 3 volana dia hifandray an'io vola io isam-bolana (isaky ny tsina).

### Billing Cycles {#billing-cycles}

Ny fizarana momba ny billing cycles dia manazava ny hamafin'ny fotoana fandoavam-bola voalaza etsy ambony ary matetika dia fantatra amin'ny alalan'ny fifanarahana na fe-potoana voafetra.

![Pricing and save section](/img/config/product-pricing-save.png)

Ohatra, ny vidin'ny vokatra $29.99 miaraka amin'ny fepetra 1 volana sy 12 billing cycles dia hifandray $29.99 isam-bolana ho an'ilay vokatra mandritra ireo volana 12 manaraka. Raha fintinina, io fepetra io dia mamorona fotoana vidiny voafetra amin'ny $29.99 isam-bolana mandritra ny 12 volana ary avy eo dia tsy hisy fandoavam-bola intsony.

### Trial Period {#trial-period}

Ny fanononana (enabling) ny toggle offer trial dia mamela ny administrator an'ny tambajotra hametraka fotoana fanandramana ho an'ilay vokatra.

![Pricing and save section](/img/config/product-pricing-save.png)

Mandritra ny fotoana fanandramana, afaka mampiasa ilay vokatra iainana ary tsy hifandray vola mandra-pahatonga ny fotoana fanandramana dia tapitra.

### Setup Fee {#setup-fee}

Afaka manome saram-barotra (setup fee) an'ilay plan ianao.

![Pricing and save section](/img/config/product-pricing-save.png)

Midika izany fa ny mpanjifa ho mandoa vola fanampiny amin'ny fandoavam-bola voalohany (ankoatra ny vidin'ny plan) izay mifanaraka amin'ny saram-barotra no voatendryo ao amin'ity fizarana ity.

### Active {#active}

Ny toggle active dia mamaritra mazava raha azo ampiasaina ho an'ny mpanjifa vaovao ilay vokatra.

![Active toggle](/img/config/product-active.png)

Raha misy mpanjifa efa ao an'ity amin'ity ity dia ny fametrahana ny toggle ho amin'ny toerana tsy azo ampiasaina (disabled) dia manome antoka fa esorina avy amin'ny fandraisana anjara any aoriana ilay plan. **Ny mpanjifa efa ao an'ity plan ity dia ho mandray vola hatrany** mandra-pahatongan'ny fifindrana azy amin'ny plan vaovao na esorina avy amin'ilay plan.

### Sary An-damin'ny Fivarotana (Product Image) {#product-image}

Ny bokotra **Upload Image** dia mamela ny mpitantana tambajotra (network administrator) hampiasa ny media library mba hisafidianana na fametrahana sary an'ny vokatra.

![Sary an'ny vokatra section](/img/config/product-image.png)

### Manapaka (Delete) {#delete}

Ny bokotra **Delete Product** dia manapaka ilay vokatra avy ao amin'ny rafitra. Azo hitantsika izany rehefa nivoaka ny vokatra.

![Manapaka vokatra section](/img/config/product-delete.png)

Tsy toy ny fanapahana hafa, tsy apetraka amin'ny toerana fampiasana (trash state) ilay vokatra. Noho izany dia rehefa voapaka dia tsy azo averina intsony io asa io.

### Safidy An'ny Vokatra (Product Options) {#product-options}

Rehefa vita ny fanazavana fototra momba ny vokatra, dia manampy an'ilay bokotra **product options** ny mpitantana tambajotra mba hanazavana bebe kokoa ireo toetra manokana an'ilay vokatra.

#### Ankapobeny (General) {#general}

Ny tabilao **General** dia mamaritra ireo toetran'ny vokatra ankapobeny izay tsy mifandraika amin'ireo tabilao hafa momba ny vokatra manokana.

![Tabilao General](/img/config/product-general-tab.png)

Ny **product slug** izay mazava dia mamaritra ilay slug izay ampiasaina hanamarina an'ilay vokatra ao amin'ny URLs sy ireo faritra hafa ao amin'ny Ultimate Multisite.

Manohana karazana vokatra maromaro ny Ultimate Multisite, toy ny Plan, Package ary Service. Ny tabilao **Product Options** dia miova arakaraka ny karazana vokatra voafidy.

Ny **Customer Role** dia mamaritra ny anjara atolotra ho an'ilay mpanjifa rehefa natao ny tranokala. Matetika, ho an'ny mpitantana tambajotra maro, dia ho default na Administrator no ho an'ny Ultimate Multisite izany. Ny anjara default an'ny Ultimate Multisite dia azo atao ao amin'ny **Ultimate Multisite > Settings > Login & Registration**.

![Customer role settings](/img/config/product-customer-role-settings.png)

#### Fanaka sy Fandresina (Up & Downgrades) {#up--downgrades}

Ity tab ity dia manazava ny lalana azo atao ho fanatsarana na fampihenana (upgrade and downgrade paths) ho an'ny mpanjifa ao anatin'ny haavo manokana azy.

Mba hahatakarana io hevitra io, dia azo jerena ohatra iray izay ny fametrahana Ultimate Multisite manokana dia manome vahaolana fitandroana fianarana (learning management solutions) ho an'ireo mpanjifany. Mba hahatratrarana izany ireo drafitra telo (Basic, Plus, ary Premium) dia voafaritra ary misy plugins manokana mifandray amin'ny drafitra tsirairay (jereo aorian'izany ao amin'ity fizarana ity ny toromarika momba ny fampiasana plugins).

Raha ny fametrahana Ultimate Multisite dia manome serivisy an-tserasera (business websites) na eCommerce websites ihany koa, ireo drafitra ireo dia mety mitaky plugins hafa ho voapetra sy ho ampiana.

Amin'izay maha-mety izany, dia tsy tianao ary olana ny mamela ireo mpanjifa fitandroana fianarana mifindra amin'ny drafitra eCommerce satria mety tsy mifanaraka amin'ny vidiny sy ny fetrany ireo drafitra ireo.

Noho izany, mba hanaraha-maso ny lalana an'ilay mpanjifa ary mba hisorohana olana, dia afaka mametraka vondron'drafitra (plan group) ny administrator an'ny tambajotra ianao ary ao anatin'io vondrona io dia manasongadina ireo drafitra azo atao ho fidirana.

![Up and Downgrades tab](/img/config/product-upgrades.png)

Mba fametrahana vondron'drafitra (plan group), dia voafetra ny drafitra mifanaraka ao anatin'ny lisitry ny **plan group**. Ny **product order** no mamaritra ny fomba fandrindrana sy fisehoan'ireo drafitra, manomboka amin'ny ambany indrindra ka hatramin'ny avo indrindra.

Misy toetra hafa ao amin'ny Ultimate Multisite dia ny **order bump**, izay azo ampiana vokatra sy serivisy fanampiny (add-on products and services) mifanaraka amin'izany drafitra. Ireo dia atolotra ho zavatra fanampiny ho an'ilay mpanjifa izay azo ampiana ao anatin'ny drafitra mandritra ny fividianana na mandritra ny fanatsarana (upgrade).

#### Fahasamihafan'ny Vidiny (Price Variations) {#price-variations}

Ny fiovana amin'ny vidiny dia mamela ny mpitantana tambajotra (network administrator) hanome vidiny hafa miankina amin'ny fotoana. Ity fepetra ity dia mamela anao hanolotra fotoana fandoavam-bola isam-bolana, isam-bolana, isan-taona, na fotoana fandoavam-bola hafa rehetra ho an'ny vokatra iray. Ohatra, azonao atao ny mametraka vokatra amin'ny $29.99/volana ary manome safidy isan-taona miadana amin'ny $249.99/taona.

![Price Variations tab](/img/config/product-price-variations-tab.png)

Mba hamoronana fiovana amin'ny vidiny, ataovy **active** ny fanindroana (toggle) hoe **Enable Price Variations** ary tsindrio ny bokotra **Add new Price Variation**.

![Product price variations](/img/config/product-price-variations.png)

Mba miditra amin'ny fiovana iray, apetaho ny fotoana, ny vanim-potoana (period), ary ny vidin'ilay fiovana. Afaka ampiana fiovana hafa ianao amin'ny alalan'ny tsindriana indray ilay bokotra.

Ohatra, raha ny vidin'ny vokatra fototra dia $29.99 isam-bolana, dia mety hanampy anao ireto:

  * **3 volana** amin'ny $79.99 (vidiny kely noho ny isam-bolana)
  * **1 Taona** amin'ny $249.99 (vidiny lehibe ho an'ny fanoloran-tena isan-taona)

:::tip Fampisehoana Toggle Fandoavam-bola eo amin'ny Frontend

Ny fiovana amin'ny vidiny irery dia tsy manampy toggle na switch any amin'ny checkout frontend. Mba hahafahan'ny mpanjifa mifidy eo anelanelan'ireo fotoana fandoavam-bola (ohatra: Isam-bolana / Isan-taona), mila manampy **Period Selection** field ianao ao amin'ny checkout form-nao. Jereo ny [Checkout Forms: Adding a Period Selection Toggle](checkout-forms#adding-a-period-selection-toggle) ho an'ny toromarika dingana tsirairay.
:::

#### Fanoherana (Taxes) {#taxes}

Ny **Taxes** tab dia mifanaraka amin'ny fepetra momba ny hetra voatondro ao amin'ny **Ultimate Multisite > Settings > Taxes** ary manokana kokoa ireo tahan'ny hetra voatondro. Mba hanajàna ny hetra sy hamaritana ny tahan'ny hetra azo ampiasaina dia jereo ny antontan-taratasy ao amin'ny **Ultimate Multisite: Settings**.

![Taxes tab](/img/config/product-taxes.png)

Te ohatrin'ny ohatra teo aloha, dia nanazava ny tahan'ny hetra eo an-toerana (local tax rate) 7.25% ho an'ireo mpanjifa any California (United States of America).

Rehefa voafidy ny tahan'ny hetra ao amin'ny **Ultimate Multisite > Settings > Manage Tax Rates** dia azo safidinao eo amin'ny haavo vokatra (product level) izany.

![Taxes tab](/img/config/product-taxes.png)

Mba hanondroana fa ny vokatra iray dia zavatra azo iasan'ny hetra, ataovy aktiva ny toggle **Is Taxable** ary safidio ny tahan'ny hetra mifanaraka avy amin'ny dropdown Tax Category.

#### Site Templates {#site-templates}

Amin'ny ankapobeny, ny site templates dia tranonkala WordPress feno izay atao cloning ho toerana an'ny mpanjifa rehefa manomboka ny fandraisana (subscription) azy.

![Site Templates tab](/img/config/product-site-templates.png)

Ny administrator an'ny tambajotra no mamorona sy manamboatra ny template site ho tranonkala WordPress mahazatra misy themes, plugins ary votoaty voafidy. Ny template site dia atao cloning tanteraka ho an'ilay mpanjifa.

Ity tabilao ity dia ahafahan'ny administrator an'ny tambajotra manome toromarika momba ny fomba fiasan'ny site templates rehefa misy fandraisana vaovao. Mba hampiasana site templates ho an'ity plan ity, ataovy aktiva ny toggle **Allow Site Templates**.

Rehefa tsy voafidy (disabled) ny **Allow Site Templates**, dia tsy afaka misafidy template mpanjifa ao amin'ny plan raha toa ka misy endrika checkout form, link azo ampahany (shareable link), na parameter URL izay mety ahafahana manome template. Ny Ultimate Multisite dia manery izany fetra izany amin'ny alalan'ny lalan-tsarotra (fallback chain) eo amin'ireo fidirana azo: ny fandraisana anjara ao amin'ny plan no voalaza aloha, avy eo ny fandikana ny template ao amin'ny checkout form, ary farany ireo template efa voafidy na omen'ny URL. Izany dia mitazona ho marina ny fetran'ny plan ary manakana ny fisehoan'ny template ho an'ireo vokatra izay tsy tokony hanome azy.

Ny **site template selection mode** no mamaritra ny fomba fiasan'ny site templates mandritra ny dingana fandraisana (subscription process).

Ny **D** **efault** dia arahina ny dingana ao amin'ny fampidirana (checkout form). Raha toa ka nanome template selection step ve ny mpitantana tambajotra tao amin'ny dingan'ny checkout ary natao tamin'ny template ireo dingana ireo, dia hanaraka ny toromarika voatondro ao amin'io dingana checkout io ity ity ity ity ity.

Ny famaritana **A** **ssign Site Template** dia manery ny safidy ny template voatendry. Vokatr'izany, esorina avy amin'ny dingan'ny checkout ireo dingana safidy template rehetra.

Farany indrindra, ny **C** **hoose Available Site Templates** dia manodidina (overrides) ireo template voatendry ao amin'ny dingan'ny checkout tamin'ireo template voafidy ao anatin'ity famaritana ity. Afaka misy template efa voafidy mialoha koa izay azo atao mba hanampiana ny mpanjifa amin'ny safidy azy.

Amin'ny farany, raha te hanao template selection eo amin'ny dingan'ny checkout ny mpitantana tambajotra ianao dia ampy ny fametrahana ny fepetra hoe ' _default_ '. Na dia azo atao koa ny manala sy manakana ny safidy template ary mametraka azy ho an'ny fepetra plan amin'ny alalan'ny safidy ' _assign new template_ ' na ' _choose available site templates_ '.

#### Sites {#sites}

Ny tabilao **Sites** dia ampahany amin'ny fiasa voafetra (limitations functionality) ao amin'ny Ultimate Multisite.

![Sites tab](/img/config/product-sites.png)

Ity famaritana ity dia manamarina ny isan'ny toerana (sites) ambony indrindra izay azo atao ho tratr'ilay mpanjifa eo ambanin'ny fandraisany anjara (membership).

Mba hanatrehana io voafetra io, apetaho amin'ny toetran'ny **limit sites** ny "toggle" ary omeo ny isan'ny toerana ambony indrindra ao amin'ny sehatry ny **site allowance**.

#### Visits {#visits}

Ny tabilao **Visits** dia ampahany hafa amin'ny rafitry ny fepetra (limitations system) an'ny Ultimate Multisite. Ity famaritana ity dia mamela ny fanisana sy ny fandrahonana (throttling) ireo mpitsidika tsy manam-pahafahana tokana (unique visitors) ho amin'ny toerana an'ilay mpanjifa.

![Visits tab](/img/config/product-visits.png)

Amin'ny lafiny marketing, afaka mampiasa ity fepetra ity ny mpandrindra tambajotra mba hamporisihana ny mpanjifa hanatsara ny toromarika (plan) rehefa tonga amin'ny fetra izany. Afaka manampy an'ity fepetra ity koa ny mpandrindra tambajotra mba hampihenana sy hisorohana ny fifamoivoho be loatra amin'ny tranonkala mba hitazomana ny harena an'ny rafitra.

Mba hampiasana io fahaizana io, ataovy **active** (mifidy ny toerana mampiasa) ny toggle hoe **limit unique visits** ary omeo ny isan'ny mpitsidika tsy miha-miasa manokana (unique visitors) ambony indrindra ao amin'ny champ **unique visits quota**.

Rehefa tonga amin'ity fetra ity, dia tsy hanome ny tranonkala an'ilay mpanjifa intsony ny Ultimate Multisite fa haneho hafatra milaza fa nahatratra ny fetra.

#### Users (Mpampiasa) {#users}

Ny fepetra momba ny 'Users' ao amin'ny Ultimate Multisite dia mamela ny mpandrindra tambajotra hampanao fetra amin'ny isan'ny mpampiasa azo avy sy omenao an'izany asa manokana izany.

![Users tab](/img/config/product-users.png)

Mba hanamarihana ity fahaiza-manome fetra ity, ataovy **active** ny toggle hoe **limit user** amin'ny alalan'ny fanindriana azy any anaty sisiny (sliding it to the right).

Avy eo, ho an'ny asa manokana tsirairay izay hatao fetra, ataovy **active** ny toggle eo akaikina ary omeo ny fetra ambony indrindra ao amin'ilay champ mifanaraka.

#### Post Types (Karazana lahatsoratra) {#post-types}

Ny tabilao 'Post Types' dia mamela ny mpandrindra tambajotra hampanao fetra manokana kokoa amin'ny karazana lahatsoratra maro ao amin'ny WordPress.

![Post Types tab](/img/config/product-post-types.png)

Noho ny fanamboarana an'ny WordPress, ny posts sy post types dia ampahany lehibe amin'ny fiasan'ny fototra azy, ary noho izany dia natao ny rafitra fetran'ny Ultimate Multisite mba hanampiana ny mpandrindra tambajotra amin'ny fananganana sy fitazomana ireo fetra.

Mba hanamarihana ity rafitra fetra ity, ataovy **active** ny toggle hoe **limit post types** amin'ny alalan'ny fanindriana azy any anaty sisiny (sliding it to the right).

Manombana, eto ny fandikana amin'ny teny Malagasy:

Aorian'izany, ho an'ny karazana lahatsoratra tsirairay izay tiana voafetra, dia ataovy azo atao amin'ny alalan'ny fanindriana azy (toggle) amin'ny alalan fampitahana azy any havia ary manome ny fetra ambony farany ao amin'ilay toerana mifanaraka.

#### Tehiry Lalana (Disk Space) {#disk-space}

Ny tabilao **Disk Space** dia ahafahan'ny mpitantana tambajotra (network administrators) voafetra ny toerana ampiasain'ny mpanjifa.

![Disk Space tab](/img/config/product-disk-space.png)

Amin'ny ankapobeny ao amin'ny WordPress multisite, ireo rakitra fototra dia iombonina eo amin'ny tranokala rehetra ary ny lalana manokana no natao ho an'ireo rakitra media sy fametrahana (uploads) izay misy fepetra sy fetra ireo.

Mba ahafahana mampandeha ny fepetra momba ny fampiasana disk, dia ataovy amin'ny toerana azo atao (active state) ilay fanindriana **limit disk size per site** amin'ny alalan fampitahana azy any havia.

Avy eo, omeo ny fetra ambony farany amin'ny megabytes ao amin'ilay champ antsoina hoe **disk space allowance**.

#### Domain Manokana (Custom Domain) {#custom-domain}

Amin'ny alalan fanindriana ity safidy ity dia azo atao ny mamela domain manokana ho an'ity plan ity manokana.

![Custom Domains tab](/img/config/product-custom-domains.png)

#### Lohateny (Themes) {#themes}

Ny tabilao **Themes** ao anatin'ny safidy vokatra dia ahafahan'ny mpitantana tambajotra mamela ny lohateny ho azo safidinao ho an'ny mpanjifa ary afaka manome fanapahan-kevitra raha tiana hampiato (force) ny fepetra an'ilay lohateny.

![Themes tab](/img/config/product-themes.png)

_**Fanamarihana: Mba ahafahana mamela ireo lohateny ho an'ny mpanjifa dia tsy maintsy voafetra amin'ny tambajotra (network enabled) izy ireo avy amin'ny mpitantana tambajotra.**_

![Network themes page](/img/config/product-themes-network-enabled.png)

Ny safidy **visibility** dia mamaritra raha hita na tsy hita an'ilay lohateny io rehefa mijery ny tabilao **Appearance > Themes** ao amin'ny tranokala misy azy ny mpanjifa. Ny fametrahana ity safidy ity ho **Hidden** dia manala ilay lohateny amin'ny fahitana ary noho izany dia manakana ny fahafahana safidy sy hampandehanana azy.

![Themes tab](/img/config/product-themes.png)

Ny safidy **behavior** dia ahafahan'ny mpitantana tambajotra mamaritra ny fepetra an'ilay lohateny rehefa voaorina ilay tranokala ho an'ny mpanjifa.

Ao amin'ny **A vao misy (Available)** dia azo atao ny manome an'ilay theme ho azon'ny mpanjifa hampandeha azy tenany. Mifanohitra amin'izany, ny **Tsy Misy Fahaizana (Not Available)** kosa dia manala ny fahaizan'ny mpanjifa hampandeha ilay theme. Farany, ny safidy **Force Activate** dia manery ny fisafidianana sy ny fanatanterahana ilay theme ary mametraka azy ho default rehefa vita ny famoronana ny tranokala.

#### Plugins {#plugins}

Mitovy amin'ny tabilao Themes, ny Ultimate Multisite dia ahafahan'ny administrator an'ny tambajotra mamaritra ny fomba fijeriny ireo plugins ho an'ny mpanjifa ary koa ny fihetsiny rehefa vita ny famoronana tranokala vaovao.

![Plugins tab](/img/config/product-plugins.png)

Ny **visibility** (fomba fijery) dia ahafahana mametraka ilay plugin ho hita na ho voafangiana amin'ny mpanjifa rehefa jerena ao amin'ny menu Plugins eo amin'ny tranokala nataony.

Afaka manova ny fihetsran'ireo plugins ireo bebe kokoa ny administrator an'ny tambajotra amin'ny fampiasana ny safidy ao amin'ny behavior drop-down (fomba fitondran-javatra).

![Plugins tab](/img/config/product-plugins.png)

Ny safidy **Default** dia manaja ny sata (state) an'ilay plugin voatondro tao amin'ny site template izay safidin'ny mpanjifa. Noho izany, ireo plugins izay voatanteraka ao anatin'ilay template dia ho voatanteraka ihany rehefa atao cloning ilay template ho tranokala an'ilay mpanjifa.

Ny **Force Activate** dia mametraka ny plugin amin'ny sata mavitrika (active state) rehefa vita ny famoronana ny site, ary mifaninona amin'izany ny **Force Inactivate** izay manalefaka (deactivates) ilay plugin rehefa vita ny famoronana ny site. Amin'ireo toe-javatra roa ireo, azo ovaina manokana ny sata an'ilay plugin amin'ny alalan'ny menu WordPress Plugins an'ilay mpanjifa izany.

Ny fepetra **Force Activate & Lock** dia miasa mitovy fa manakana ny fomba fiasan'ny plugin tsy ho ovain'ny mpanjifa izany. Noho izany, raha misafidy Force Activate sy Lock ianao, dia hampihatra ny plugin amin'ny toeran'ny activé izy ary hanakana ny mpanjifa tsy hahatonga azy ho inactive intsony. Mitovy amin'izany koa ny fepetra **Force Inactivate & Lock**, izay hampihatra ny plugin amin'ny toeran'ny inactive sy hanakana ny mpampiasa tsy hahatonga azy ho active.

Mety te-handinihina ny administrator an'ny tambajotra ny fepetra Force Activate & Lock sy Force Inactivate & Lock miaraka amin'ny site templates ho plugins ary ny toetran'ny plugin ao anaty templates dia mety ho voakasika ireo fepetra ireo raha misafidy azy ireo.

#### Fepetra fanazavana indray (Reset Limitations) {#reset-limitations}

Ny tabilao **Reset Limitations** dia manavao ny fetra rehetra napetraka manokana momba ny vokatra. Raha te hanavao ianao, tsindrio ny bokotra **reset limitations**.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

Mba hanamafisana ny asa dia avelao ho active ny toggle **confirm reset** eo an-daniny ary tsindrio ny bokotra **reset limitations**.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

## Fanovana, Famoronana Miverimberina, na Fandefasana Vokatra (Edit, Duplicate, or Delete Product) {#edit-duplicate-or-delete-product}

Afaka ovaina, atao miverimberina (duplicate), na adinay ireo vokatra efa misy ianao amin'ny alalan'ny fidinana any amin'ny **Ultimate Multisite > Products** ary manindry ny anaran'ny vokatra efa misy.

![Product hover actions](/img/config/product-hover-actions.png)
