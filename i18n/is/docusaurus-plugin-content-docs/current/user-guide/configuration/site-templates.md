---
title: Sítastafli
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# Stöðvar (v2)

_**LÝSING: Þessi grein er tengd Ultimate Multisite útgáfu 2.x. Ef þú notar útgáfu 1.x,**_ **sjá þennan grein** _**.**_

Þær markmið okkar þegar við byggjum framúrskarandi nýnet (network) með Ultimate Multisite er að sjálfskipta hvaða mögulega flest ferli sem mögulegt er, en við gefum okkur viðskiptavinum fjarlag og tengsl fyrir val á því hvernig þeir vilja byggja sína vísitalmyndir (websites). Eitt einfalt hátt að ná þessum jafnvel samhengi er að nota eiginleika Site Templates í Ultimate Multisite.

## Hvað er Site Template? {#what-is-a-site-template}

Eins og nafnið sýnir, er Site Template einn grunnur-sítinn sem getur verið nota sem grundvallarmiðann þegar þú byggir ný vísitalmyndir í netinu þínu.

Þetta þýðir að þú getur skapað grunn-sítinn, aktivað ólíka plugins, sett upp aktiv theme og sérsniðið hana á hvaða hátt sem þú vilja. Þegar viðskiptavinurinn þinn skapar nýtt reikning, í stað þess að fá almenna WordPress síðu án nánasta innihalds, fær hann kopíun af grunn-síðunni þinni með öll sérsniðnum mögulegum og innihaldi sem er sett upp á.

Það høyrist svo ótrúlega vel, en hvernig get ég skráð nýja site template? Þetta er eins einfalt sem gæti verið.

## Skapandi og breytingar í nýri Site Template {#creating-and-editing-a-new-site-template}

Site Templates eru bara almennar síddar á netinu þínu. Til að skapa ný template geturðu bara ferð til **Network Admin > Ultimate Multisite > Sites > Add Site.**

**![Knappin til að bæta síti í listanum siti](/img/config/site-templates-list.png)**

Þetta opnar modal glugga sem munaðar þarf **Site title, Site Domain/path,** og **Site type**. Undir farið **Site Type** drop-down villu þú sýna að þú valdið **Site Template** *.*

_![Modal til að bæta síti template með site type drop-down](/img/config/site-templates-list.png)_

Þú getur einnig lagt við skrá fyrir viðskiptavininn sem sýnir hvað templatein inniheldur:

![Site template description field on the site template edit screen](/img/config/site-template-edit-description.png)

Í undir skjalfannið sjáðuðuðuðuðu **Copy Site** (Kopya Síti) vekslið. Þetta leyfir þér að skapa nýtt site template á byggingu á því sem þú hefur nú, sem byrjunspunkt til að spara tíma í stað þess að skapa site template úr nulli.

![Add site template modal with copy site toggle](/img/config/site-templates-list.png)

### Innstilla innihaldi Site Template {#customizing-the-contents-of-a-site-template}
Til að innstilla site template þitt, farðu bara yfir á dashboard panel þess og gerðu breytingarnar sem þú þurft. Þú getur skapað nýja posts, pages, aktivert plugins og breytt aktivt theme. Þú getur sógnað í Customizer og breytt allsorgulagningstendur.

![Site template edit interface](/img/config/site-template-edit.png)

Allt þetta data verður kopyað yfir þegar viðskiptavinur skapar nýtt site á byggingu á þessum Site Template.

### Framkvæmdarstafan {#advanced-options}
Ef þú hefur jákvileg upphaf í nokkrum sérstökum kóða, geturðu notað Search and Replace API okkar til að sjálfskipta skipti upplýsingum á nýtt síti eftir að það er skráð. Þetta er hulega fyrir þær hlutina sem þú vilt skipta, eins og að skipta fyrirtærsnafn á About page, eða að skipta tölvupóstfanni í Contact page, sýnilegt texti okkar.

### Notkun Site Templates {#using-site-templates}
Ok, þú hefur skapað fjölda af sínum site templates með ólíkum hlutum og innstillingum. Hvernig geturðu nú notað þau á netinu?

Í grunninn eru tveir aðferðir sem þú getur notað (ekki samkvæmt sama tíma):

  * Skipta einn Site Template í hvert af þínum Plans
**EINN ELLER**
  * Leita fyrir að viðskiptavinir þín velji site templates sjálfur á meðan þeir eru skráðir.

#### Tilstand 1: Skipta Site Template {#mode-1-assign-site-template}

Í þessum modi geta ekki viðkomandi viðskiptavinir velja mallinn (template) þegar þeir skapa reikning, heldur þú sjálfur ákveður hvern mallinn skal nota í hverjum einum af þínum Plans.

Til að gera þetta þarftu að ferðast yfir **Ultimate Multisite > Products > Edit**.

![Edit product to assign site template](/img/config/product-site-templates.png)

Þetta leysir þig í **Edit Product** (Breyta vögu). Undir hluta sem heitir **Product Options** (Vögu möguleikar), finnðu tækið **Site template** (Mallinn fyrir stað). Valdu svo **Assign Site Template** (Áskyna mall) frá drápurfeldi. Þetta opnar lista yfir tilfelli mallanna sem eru til við, og það leyfir þér að velja bara eina mall í hverjum vögu sem er sérstaklega tæmdu fyrir þennan vögu.

![Product site template tab with assign site template option](/img/config/product-site-templates.png)

#### Modur 2: Veldu tilfelli mallar (Choose Available Site Template) {#mode-2-choose-available-site-template}

Í þessum modi geturðu gefið viðskiptavinum val í samkvæði þess sem þeir skapa reikning. Þeir geta veldur frammæli frá öllum mallum sem þú hefur sést undir vöguþáttum (product settings). Þar er möguleiki að takast til þess að þeir geti veldur frammæli frá sérstökum setnum mallanna sem eru settir undir valinn vögu. Þetta gerir þér kleift að hafa annar set mallanna undir hverjum vögu, sem er yfirburðar fyrir það að sýna annar möguleika og eiginleikar fyrir vögu með hærri verði.

Á **Edit Product** (Breyta vöndun) síðan. Undir hluta **Product Options** (Vöndunstendur), finn tabinn **Site template** (Staðleikastafli) og veldu **Choose Available Site Template** (Veldu tilfyllt staðleikastafli) úr drápurfeltinu. Þetta opnar lista með tilfylltum staðleikastafli sem leikur í hópnum, og það leyfir þér að velja staðleikastafli sem þú vilt séð fyrir til færðar. Þú getur gerð þess með því að velja hans **Behavior** (Aðferd): **Available** (Tilfyllt) ef þú vilt að staðleikastafli sé í lista, _**Not Available**_ (Ekki tilfyllt) ef þú vilt að staðleikastafli sé ekki sýnt sem valkostur. Eða **Pre-selected** (Forhæft veldur) ef þú vilt að einn af staðleikastafli sem er í lista sé forhæft valt.

![Choose available site templates with behavior options](/img/config/product-site-templates.png)

### Default Mode: Site template selection on the Checkout form (Staðleikastaflival á færðarformum) {#default-mode-site-template-selection-on-the-checkout-form}

Ef þú vilt að allir staðleikastafli þín séu tilfylltir í samkvæði þess sem notandi er registreið, eða ef þú ekki vilt gera extra vinnu með því að þú sést eða sést staðleikastafli undir hvert vöndun sem þú skapar. Þá geturðu bara sett val á staðleikastafli í **Checkout Form** (Færðarform) þínu. Til að gera þetta, ferðu yfir til **Ultimate Multisite > Checkout Forms** og klikka á **Edit** undir formann sem þú vilt að hleðja.

Þetta opnar **Edit Checkout Form** (Breyta færðarformann) síðuna. Finndu feltinu **Template Selection** (Val staðleikastafli) og klikka á **Edit** undir það.

Ein modal window (hlutfél) mun sýna sig. Undir feltinu **Template Sites** (Staðleikastafli staðlar) geturð veldur og lista allar staðleikastafli sem þú vilt séð fyrir til færðar. Staðleikastafli sem þú sést hér verður tilfyllt óháð því hvaða vöndun notandinn valdi.

![Template selection field in the checkout form editor](/img/config/checkout-form-template-step.png)

Á frontend (á vefsíðuna fyrir viðskiptavini) sjá viðskiptavinir staðleikastaflivalið á færðarferli og geta veldur að byrjunstílinn fyrir nýja síðu þeirra.

![Frontend template chooser during registration](/img/config/frontend-template-chooser.png)

### Valg á netstafurval (Site Template Options) {#site-template-options}

Þar eru aðeins öðrum netstafurfunksjonum til að slá úr, sem þú getur sést í innstillingum Ultimate Multisite.

![Netstafurval i innstillingum Ultimate Multisite](/img/config/settings-sites-templates-section.png)

#### Leitað á skipti netstafur (Allow Template Switching) {#allow-template-switching}

Þegar þú sláttir þennan val á, getur viðskiptavinir þín breytt netstafurinn sem þeir velja í samkvæði þess að reikningurinn og netstafurinn eru skráðar. Þetta er hulega gagnlegt fyrir viðskiptavinann þar sem hann getur valdi aftur netstafur eftir því sem hann finnur, að það var ekki bestur val fyrir sérstakna þættindi hans.

#### Leitað á að nota netstafurinn sem netstafur (Allow Users to use their Site as templates) {#allow-users-to-use-their-site-as-templates}

Eftir að notendur subsite-a hefja tíma í byggingu og hönnun sinna eiga þeir gæti vilja að klona það og nota það sem einn af netstafurvalnum er til við skráning nánar subsite á netverk þínum. Þessi val getur þeim leitt til þess.

#### Kopja miðla á upplýsingastafur (Copy Media on Template Duplication) {#copy-media-on-template-duplication}

Þegar þú sláttir þennan val á, verður miðlar sem eru upplýst á netstafurinn kopya ykkur í nýskráðan netstafur. Þetta getur breytt á hverjum eina plani.

#### **Verndu leitarhjálpar fyrir netstafur (Prevent Search Engines from indexing Site Templates)** {#prevent-search-engines-from-indexing-site-templates}

Netstafurval sem er nefndur í þessum greininni er einnig hluti af netverk þínum, sjaldanir það er að leita eftir þeim með leitarhjálpar. Þessi val getur laukið netstafurvalinn svo að leitarhjálpar geta ekki fundið hann.

## Fyrirhaldandi netstafurval með sjálfskiptum leitingar og skiftingu (Pre-populating Site Templates with auto search-and-replace) {#pre-populating-site-templates-with-auto-search-and-replace}

Eitt af sterkastum eiginleika Ultimate Multisite er nýting á að bæta við friðgjöfstext, farga og valandi feldi í skráningarskjalann. Eftir að við höfum fanga þetta upplýsingar getum við notað þær til að fyrirfram fylla inn innihald í sérstökum hlutu á valinn templatilfelli. Þegar nýtt svið er beinga, mun Ultimate Multisite skipta staðnum með staðhaldi sem var fanga í skráningu.

Til dæmis, ef þú vilt fá nafn fyrirtækisins fyrir viðskiptavininn þinn á skilríkingum og sjálf án þess að þurfa að setja hann á hönnunarsíðuna, þá þarftu að bæta staðhaldi í templatilfellið þitt, eins og á myndinni hér að neðan (staðhaldi verða að vera umhuga með tvö dýpi curly braces - {{placeholder_name}}).

![Homepage with placeholder text in curly braces](/img/config/site-templates-list.png)

Þá geturðu bara bætt við samsvarandi feld á skráningarskjalann þinn til að fanga þær upplýsingar. Sama útlitið fyrir skráningarskjalann sem er notað til val á templatilfelli leysir þér í gang með sérstök feldi okk þá framkvæmdarval:

![Template selection and registration fields in the checkout form editor](/img/config/checkout-form-template-step.png)

Við þennan viðskiptavininn getur þá fylla inn það feldi á skilríkingum.

![Frontend checkout form with template chooser](/img/config/frontend-template-chooser.png)

Ultimate Multisite mun þá skipta staðhaldi með upplýsingum sem viðskiptavininn hefur gefið fyrir sjálf.

![Placeholders replaced with customer data on the site](/img/config/site-templates-list.png)

### Lösun á því að "templatilfelli er fullt af staðhaldi" {#solving-the-template-full-of-placeholders-problem}

Allt það er glæp, en við komum í ólíklega ólíka hugmynd: nú eru templatilfelli okkar - sem viðskiptavinir okkar geta beityð á - fullt af ólíklegum staðhaldi sem ekki segja mikið.

Til að løsa þetta býðum til valkost hingað sem við getum sett falska gildi fyrir staðhaldi (placeholders), og við notum þau gildi til að leita eftir þeim og skipta út innihaldi þeirra á templat sínum en þegar viðskiptavinir þín eru að heimsækja.

Þú getur aðgang að efni-efni templat (template placeholders editor) með því að ferðast yfir **Ultimate Multisite > Settings > Sites**, og svo, í menubúnaðinn á hliðinni, klikka á við **Edit Placeholders** linkinn.

![Site template settings under the Sites settings page](/img/config/settings-sites-templates-section.png)

Þetta leysir þig til efni-efnis templatins (placeholders' content editor), þar sem þú getur bætt staðhaldi í viðkomandi innihaldi þeirra.

![Template placeholders content editor entry point](/img/config/settings-sites-templates-section.png)
