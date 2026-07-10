---
title: Kugadzirisa Fomu Rako reKunyoresa
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Kugadzirisa Registration Form yako {#customizing-your-registration-form}

Kuti network yako itaridzike yakasiyana nemamwe maSaaS ese akavakirwa paWordPress platform, Ultimate Multisite inokubvumira kugadzirisa mapeji ako ekunyoresa nekupinda uchishandisa chimiro chedu che **Checkout Forms**.

Kunyangwe ari nzira iri nyore uye inoshanduka yekuedza nzira dzakasiyana kana uchiedza kushandura vatengi vatsva, anonyanya kushandiswa kugadzira mafomu ekunyoresa akagadzirirwa munhu. Chinyorwa ichi chine chinangwa chekukuratidza kuti ungazviita sei.

## Mapeji ekupinda nekunyoresa: {#login-and-registration-pages}

Paunoisa Ultimate Multisite, inogadzira otomatiki mapeji ekupinda nekunyoresa akagadzirirwa pawebsite yako huru. Unogona kuchinja mapeji aya ekutanga chero nguva nekuenda pasi pepeji rako re **Ultimate Multisite > Settings > Login & Registration**.

![Peji rezvirongwa zveKupinda neKunyoresa](/img/config/settings-general.png)

Heino maonero akazara epeji rezvirongwa zvekupinda nekunyoresa:

![Peji rakazara rezvirongwa zveKupinda neKunyoresa](/img/config/settings-login-registration-full.png)

Ngatitarisei imwe neimwe yesarudzo dzaunogona kugadzirisa papeji re **Login & Registration**:

  * **Gonesa kunyoresa:** Sarudzo iyi ichagonesa kana kudzima kunyoresa panetwork yako. Kana yakadzimwa, vatengi vako havazokwanisi kunyoresa uye kunyoresa kuzvigadzirwa zvako.

  * **Gonesa kuongororwa kweemail:** Kana sarudzo iyi yakabatidzwa, vatengi vanonyoresa kuhurongwa hwemahara kana hurongwa hunobhadharwa hune nguva yekuyedza vachagamuchira email yekuongorora uye vachafanira kudzvanya link yekuongorora kuti mawebsite avo agadzirwe.

  * **Peji rekutanga rekunyoresa:** Iri ndiro peji rekutanga rekunyoresa. Peji iri rinofanira kunge rakaburitswa pawebsite yako uye riine fomu rekunyoresa (rinozivikanwawo secheckout form) - uko vatengi vako vachanyoresa kuzvigadzirwa zvako. Unogona kugadzira mapeji ekunyoresa uye checkout forms akawanda sezvaunoda, ingoyeuka kuisa checkout form shortcode papeji rekunyoresa, zvikasadaro harizooneki.

  * **Shandisa peji rekupinda rakagadzirirwa:** Sarudzo iyi inokubvumira kushandisa peji rekupinda rakagadzirirwa, risiri peji rekutanga rewp-login.php. Kana sarudzo iyi yakabatidzwa, unogona kusarudza kuti nderipi peji richashandiswa pakupinda pasarudzo ye **Default login page** (iri pazasi chaipo).

  * **Vanza login url yepakutanga (wp-login.php)** : Kana uchida kuviga URL yekupinda yepakutanga, unogona kubatidza sarudzo iyi. Izvi zvinobatsira kudzivirira brute-force attacks. Kana sarudzo iyi yagoneswa, Ultimate Multisite icharatidza kukanganisa kwe404 kana mushandisi akaedza kupinda pa link yepakutanga ye wp-login.php

  * **Manikidza kuburitswa kwesite panguva imwe chete:** Mushure mekunge mutengi anyoresa kuchigadzirwa panetwork, site itsva yakamirira inofanira kushandurwa kuita network site chaiyo. Maitiro ekuburitsa anoitika kuburikidza neJob Queue, zvisingaenderani nenguva imwe chete. Gonesa sarudzo iyi kumanikidza kuburitswa kuitika muchikumbiro chimwe chete sekusaina.

Zvino, ngationei dzimwe sarudzo dzichiri kukosha kumaitiro ekupinda nekunyoresa. Dziri pazasi chaipo pe **Other options** papeji rimwe chete reLogin & registration:

  * **Basa rekutanga:** Iri ndiro basa richava nevatengi vako pawebsite yavo mushure memaitiro ekusaina.

  * **Gonesa Jumper:** Inogonesa nzira pfupi yeJumper munzvimbo yeadmin. Jumper inobvumira vatungamiri kusvetukira nekukurumidza kumasikirini eUltimate Multisite, zvinhu zvenetwork, uye dzimwe nzvimbo dzinotsigirwa pasina kupuruzira mumenu imwe neimwe. Idzime kana uchida kuviga chishandiso icho chekufamba nekukurumidza kubva muadmin interface.

  * **Wedzera vashandisi kusite huruwo:** Kugonesa sarudzo iyi kuchawedzerawo mushandisi kusite huru yenetwork yako mushure memaitiro ekusaina. Kana ukagonesa sarudzo iyi, sarudzo yekuseta **default role** yevashandisi ava pawebsite yako ichaonekawo pazasi chaipo.

  * **Gonesa maakaundi akawanda:** Bvumira vashandisi kuva nemaakaundi mumasite akasiyana enetwork yako vachishandisa email address imwe chete. Kana sarudzo iyi yakadzimwa, vatengi vako havazokwanisi kugadzira account pane mamwe mawebsite ari kushanda panetwork yako vachishandisa email address imwe chete.

Uye ndizvo zvese sarudzo dzine chekuita nekupinda nekunyoresa dzaunogona kugadzirisa! Usakanganwa kuchengetedza zvirongwa zvako mushure mekupedza kuzvigadzirisa.

## Kushandisa mafomu akawanda ekunyoresa: {#using-multiple-registration-forms}

Ultimate Multisite 2.0 inopa mupepeti wecheckout form unokubvumira kugadzira mafomu akawanda sezvaunoda, ane fields dzakasiyana, zvigadzirwa zviri kupihwa, nezvimwe.

Mapeji ese ekupinda nekunyoresa akaiswa nema shortcodes: **[wu_login_form]** papeji rekupinda uye**[wu_checkout]** yepeji rekunyoresa. Unogona kuwedzera kugadzirisa peji rekunyoresa nekuvaka kana kugadzira checkout forms.

Kuti uwane chimiro ichi, enda kumenu ye **Checkout Forms**, kudivi rekuruboshwe.

![Menyu yeCheckout Forms musidebar](/img/config/checkout-forms-list.png)

Papeji iri, unogona kuona checkout forms dzese dzauinadzo.

Kana uchida kugadzira itsva, ingodzvanya pa **Add Checkout Form** pamusoro pepeji.

Unogona kusarudza imwe yesarudzo nhatu idzi senzvimbo yako yekutangira: nhanho imwe, nhanho dzakawanda kana isina chinhu. Wobva wadzvanya kuti **Go to the Editor**.

![Wedzera Checkout Form ine sarudzo dzenhanho imwe, nhanho dzakawanda, kana isina chinhu](/img/config/checkout-forms-list.png)

Neimwe nzira, unogona kugadzirisa kana kudzokorora mafomu aunotova nawo nekudzvanya pasarudzo dziri pasi pezita rayo. Ipapo, uchawanawo sarudzo dzekukopa shortcode yefomu kana kudzima fomu.

![Zviito zveCheckout form paunofambisa pamusoro zvine kugadzirisa, kudzokorora, uye kudzima](/img/config/checkout-form-hover-actions.png)

Kana ukasarudza nhanho imwe kana nhanho dzakawanda, checkout form inenge yatotangwa iine nhanho dzakakosha kuti ishande. Zvadaro, kana uchida, unogona kuwedzera dzimwe nhanho kwairi.

### Kugadzirisa Checkout Form: {#editing-a-checkout-form}

Sezvatambotaura, unogona kugadzira checkout forms dzezvinangwa zvakasiyana. Mumuenzaniso uyu tichashanda pafomu rekunyoresa.

Mushure mekuenda kumucheckout form editor, ipa fomu rako zita (richashandiswa pakureferensi yemukati chete) uye slug (inoshandiswa kugadzira shortcodes, semuenzaniso).

![Mupepeti wefomu rekubhadhara rine minda yezita ne slug](/img/config/checkout-form-name-slug.png)

Mafomu anogadzirwa nematanho neminda. Unogona kuwedzera nhanho itsva nekudzvanya pa **Wedzera Nhanho Itsva yeCheckout**.

![Bhatani reWedzera Nhanho Itsva yeCheckout](/img/config/checkout-form-add-step.png)

Patebhu yekutanga yehwindo re modal, zadza zvirimo munhanho yefomu rako. Ipe ID, zita uye tsananguro. Zvinhu izvi zvinonyanya kushandiswa mukati mehurongwa.

![Tebhu yezviri munhanho yecheckout ine ID, zita, uye tsananguro](/img/config/checkout-form-step-content.png)

Zvadaro, seta kuoneka kwenhanho. Unogona kusarudza pakati pe **Ratidza nguva dzose** , **Ratidza chete kune vashandisi vakapinda** kana **Ratidza chete kune vaenzi**.

![Sarudzo dzekuoneka kwenhanho yecheckout](/img/config/checkout-form-step-visibility.png)

Pakupedzisira, gadzirisa chimiro chenhanho. Iyi minda ndeyekusarudza.

![Kugadzirisa chimiro chenhanho yecheckout](/img/config/checkout-form-step-style.png)

Iye zvino, yave nguva yekuwedzera minda kunhanho yedu yekutanga. Ingodzvanya pa **Wedzera Munda Mutsva** uye sarudza rudzi rwechikamu chaunoda.

![Bhatani reWedzera Munda Mutsva](/img/config/checkout-form-add-field-button.png)![Dropdown yekusarudza rudzi rwemunda](/img/config/checkout-form-field-type-dropdown.png)

Munda wega wega une maparameter akasiyana anofanira kuzadzwa. Pakupinda kwekutanga uku, tichasarudza munda we **Username**.

![Kugadziriswa kwemunda weUsername](/img/config/checkout-form-username-content.png)![Maparameter emunda weUsername](/img/config/checkout-form-username-visibility.png)![Zvimwe zvigadziriso zvemunda weUsername](/img/config/checkout-form-username-style.png)

Unogona kuwedzera matanho neminda yakawanda sezvaunoda. Kuti uratidze zvigadzirwa zvako kuti vatengi vako vasarudze chimwe, shandisa munda wePricing Table. Kana uchida kurega vatengi vako vasarudze template, wedzera munda weTemplate Selection. Uye zvichingodaro.

![Mupepeti wefomu rekubhadhara rine munda wekusarudza template](/img/config/checkout-form-with-template-field.png)

_**Cherechedzo:** Kana ukagadzira chigadzirwa mushure mekugadzira fomu rako rekubhadhara, uchafanira kuwedzera chigadzirwa muchikamu chePricing table. Kana ukasachiwedzera, chigadzirwa hachizooneki kune vatengi vako papeji rekunyoresa._

_**Cherechedzo 2:** username, email, password, zita resaiti, URL yesaiti, pfupiso yeodha, kubhadhara, uye bhatani rekutumira minda inosungirwa kugadzira fomu rekubhadhara._

Paunenge uchishanda pafomu rako rekubhadhara, unogona kugara uchishandisa bhatani rePreview kuti uone kuti vatengi vako vachaona sei fomu. Unogonawo kuchinjana pakati pekuona semushandisi aripo kana mushanyi.

![Bhatani rePreview pamupepeti wefomu rekubhadhara](/img/config/checkout-form-preview-button.png)![Preview yefomu rekubhadhara semushanyi kana mushandisi aripo](/img/config/checkout-form-preview-modal.png)

Pakupedzisira, pa **Sarudzo Dzepamusoro** unogona kugadzirisa meseji yepeji re **Ndatenda**, kuwedzera snippets dzekutevera conversions, kuwedzera CSS yakasarudzika kufomu rako rekubhadhara kana kurirambidza kune dzimwe nyika.

![Sarudzo Dzepamusoro dzine peji reNdatenda, kutevera conversions, uye CSS yakasarudzika](/img/config/checkout-form-advanced.png)

Unogonawo kugonesa kana kudzima nemaoko fomu rako rekubhadhara nekuchinja sarudzo iyi pakoramu yekurudyi, kana kudzima fomu zvachose.

![Toggle yekushanda uye sarudzo yekudzima yefomu rekubhadhara](/img/config/checkout-form-active.png)

Usakanganwa kuchengetedza fomu rako rekubhadhara!

![Bhatani reChengetedza Fomu reCheckout](/img/config/checkout-form-save.png)

Kuti uwane shortcode yefomu rako dzvanya pa **Gadzira Shortcode** uye kopa mhedzisiro inoratidzwa pahwindo re modal.

![Modal yeGadzira Shortcode ine shortcode yekukopa](/img/config/checkout-form-editor.png)

_**Cherechedzo:** Uchafanira kuwedzera shortcode iyi kupeji rako rekunyoresa kuitira kuti fomu rekubhadhara iri riwedzerwe kwariri._

## Kusarudza kare zvigadzirwa nematemplate kuburikidza nema parameter eURL: {#pre-selecting-products-and-templates-via-url-parameters}

Kana uchida kugadzira matafura emitengo akagadziridzwa ezvigadzirwa zvako uye kusarudza kare pafomu rekubhadhara chigadzirwa kana template inosarudzwa nemutengi wako kubva patafura yako yemitengo kana peji rematemplate, unogona kushandisa ma parameter eURL pane izvi.

### **Kune maplans:** {#for-plans}

Enda ku **Ultimate Multisite > Products > Sarudza plan**. Unofanira kuona bhatani re **Dzvanya kuti ukopere Link Inogoverwa** pamusoro pepeji. Iyi ndiyo link yaunogona kushandisa kusarudza kare plan iyi chaiyo pafomu rako rekubhadhara.

![Peji rechigadzirwa rine bhatani re link inogoverwa](/img/config/products-list.png)

Cherechedza kuti link iyi inogoverwa inoshanda chete ku **Plans**. Haugoni kushandisa ma link anogoverwa kumapakeji kana masevhisi.

### Kune matemplate: {#for-templates}

Kana uchida kusarudza kare matemplate esaiti pafomu rako rekubhadhara, unogona kushandisa parameter: **?template_id=X** paURL yepeji rako rekunyoresa. "X" inofanira kutsiviwa ne **nhamba yeID yetemplate yesaiti**. Kuti uwane nhamba iyi, enda ku **Ultimate Multisite > Sites**.

Dzvanya pa **Manage** pazasi chaipo petemplate yesaiti yaunoda kushandisa. Uchaona nhamba yeSITE ID. Ingoshandisa nhamba iyi yetemplate yesaiti iyi chaiyo kuti isarudzwe kare pafomu rako rekubhadhara. Panyaya yedu pano, parameter yeURL ichava **?template_id=2**.

![Rondedzero yesaiti inoratidza ID yetemplate yesaiti](/img/config/site-templates-list.png)

Ngatitii webhusaiti yenetwork yedu ndi [**www.mynetwork.com**](http://www.mynetwork.com) uye peji redu rekunyoresa rine fomu redu rekubhadhara riri papeji re **/register**. URL yose ine template yesaiti iyi yakasarudzwa kare ichaita se [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Uye kana uchida, unogona kusarudza kare zvese zvigadzirwa nematemplate kufomu rako rekubhadhara. Chaunofanira kuita chete kukopa link inogoverwa yeplan wobva wanamira parameter yetemplate kumagumo. Ichaita se [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
