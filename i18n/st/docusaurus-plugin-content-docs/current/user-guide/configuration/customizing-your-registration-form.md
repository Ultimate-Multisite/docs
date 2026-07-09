---
title: Ho Fetola Foromo ea Hao ea Ngoliso
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Ho iketsetsa Registration Form ya hao {#customizing-your-registration-form}

Ho etsa hore network ya hao e shebahale e ikgetha ho SaaS tse ding tsohle tse ahilweng hodima platform ya WordPress, Ultimate Multisite e o dumella ho iketsetsa maqephe a hao a ngodiso le ho kena ka karolo ya rona ya **Checkout Forms**.

Le hoja e le tsela e bonolo le e feto-fetohang ya ho leka mekgwa e fapaneng ha o leka ho fetola bareki ba batjha hore e be ba lefang, hangata di sebediswa ho etsa diforomo tsa ngodiso tse ikgethileng. Sengolwa sena se reretswe ho o bontsha hore na o ka etsa seo jwang.

## Maqephe a ho kena le a ngodiso: {#login-and-registration-pages}

Ha Ultimate Multisite e kenngwa, e iketsetsa maqephe a ikgethileng a ho kena le a ngodiso sebakeng sa hao sa sehlooho. O ka fetola maqephe ana a kamehla neng kapa neng ka ho ya leqepheng la hao la **Ultimate Multisite > Settings > Login & Registration**.

![Leqephe la disetting tsa ho kena le ngodiso](/img/config/settings-general.png)

Mona ke pono e felletseng ya leqephe la disetting tsa ho kena le ngodiso:

![Leqephe le felletseng la disetting tsa ho kena le ngodiso](/img/config/settings-login-registration-full.png)

Ha re shebeng e nngwe le e nngwe ya dikgetho tseo o ka di iketsetsang leqepheng la **Login & Registration**:

  * **Dumella ngodiso:** Kgetho ena e tla dumella kapa ya thibela ngodiso ho network ya hao. Haeba e timilwe, bareki ba hao ba ke ke ba kgona ho ingodisa le ho subscribe ho dihlahiswa tsa hao.

  * **Dumella netefatso ya email:** Haeba kgetho ena e buletswe, bareki ba subscribe ho moralo wa mahala kapa moralo o lefellwang o nang le nako ya teko ba tla fumana email ya netefatso mme ba tla hloka ho tobetsa sehokelo sa netefatso hore diwebsite tsa bona di thehwe.

  * **Leqephe la kamehla la ngodiso:** Lena ke leqephe la kamehla la ngodiso. Leqephe lena le hloka ho phatlalatswa ho website ya hao mme le be le foromo ya ngodiso (e tsejwang hape e le checkout form) - moo bareki ba hao ba tla subscribe ho dihlahiswa tsa hao. O ka etsa maqephe a mangata a ngodiso le checkout forms kamoo o batlang, hopola feela ho beha shortcode ya checkout form leqepheng la ngodiso, ho seng jwalo e ke ke ya hlaha.

  * **Sebedisa leqephe la ho kena le ikgethileng:** Kgetho ena e o dumella ho sebedisa leqephe la ho kena le ikgetseditsweng, ho fapana le leqephe la kamehla la wp-login.php. Haeba kgetho ena e buletswe, o ka kgetha hore na ke leqephe lefe le tla sebediswa bakeng sa ho kena kgethong ya **Leqephe la kamehla la ho kena** (hang ka tlase).

  * **Pata url ya pele ya ho kena (wp-login.php)** : Haeba o batla ho pata URL ya pele ya ho kena, o ka bulela kgetho ena. Sena se molemo ho thibela ditlhaselo tsa brute-force. Haeba kgetho ena e buletswe, Ultimate Multisite e tla bontsha phoso ya 404 ha mosebedisi a leka ho fihlella sehokelo sa pele sa wp-login.php

  * **Qobella phatlalatso ya site ka nako e le nngwe:** Ka mora hore moreki a subscribe ho sehlahiswa ho network, site e ntjha e ntseng e emetse e hloka ho fetolwa hore e be site ya nnete ya network. Tshebetso ya phatlalatso e etsahala ka Job Queue, ka tsela e sa tsamaisaneng ka nako e le nngwe. Bulela kgetho ena ho qobella phatlalatso hore e etsahale kopong e tshwanang le signup.

Jwale, ha re boneng dikgetho tse ding tse ntseng di amana le tshebetso ya ho kena le ngodiso. Di teng hang ka tlase ho **Dikgetho tse ding** leqepheng lona leo la Login & registration:

  * **Karolo ya kamehla:** Ena ke karolo eo bareki ba hao ba tla ba le yona website ya bona ka mora tshebetso ya signup.

  * **Dumella Jumper:** E dumella shortcut ya Jumper sebakeng sa admin. Jumper e dumella batsamaisi ho tlolela kapele ho discreen tsa Ultimate Multisite, dintho tsa network, le dibaka tse ding tse tshehetswang ntle le ho bala menu e nngwe le e nngwe. E time haeba o rata ho pata sesebediswa seo sa ho tsamaea kapele ho interface ya admin.

  * **Kenya basebedisi le ho site ya sehlooho hape:** Ho bulela kgetho ena ho tla boela ho kenye mosebedisi ho site ya sehlooho ya network ya hao ka mora tshebetso ya signup. Haeba o bulela kgetho ena, kgetho ya ho seta **karolo ya kamehla** ya basebedisi bana website ya hao le yona e tla hlaha hang ka tlase.

  * **Dumella diaccount tse ngata:** Dumella basebedisi ho ba le diaccount disite tse fapaneng tsa network ya hao ka aterese e tshwanang ya email. Haeba kgetho ena e timme, bareki ba hao ba ke ke ba kgona ho etsa account diwebsite tse ding tse sebetsang ho network ya hao ka aterese e tshwanang ya email.

Mme ke tsona dikgetho tsohle tse amanang le ho kena le ngodiso tseo o ka di iketsetsang! O se ke wa lebala ho boloka disetting tsa hao ka mora hore o qete ho di hlophisa.

## Ho sebedisa diforomo tse ngata tsa ngodiso: {#using-multiple-registration-forms}

Ultimate Multisite 2.0 e fana ka mohlophisi wa checkout form o o dumellang ho etsa diforomo tse ngata kamoo o batlang, ka fields tse fapaneng, dihlahiswa tse fanwang, jj.

Maqephe a ho kena le a ngodiso ka bobedi a kentse shortcodes: **[wu_login_form]** leqepheng la ho kena le**[wu_checkout]** bakeng sa leqephe la ngodiso. O ka iketsetsa leqephe la ngodiso ho feta ka ho aha kapa ho etsa checkout forms.

Ho fihlella karolo ena, eya ho menu ya **Checkout Forms**, ka lehlakoreng le letshehadi la side-bar.

![Menu ya Checkout Forms ho sidebar](/img/config/checkout-forms-list.png)

Leqepheng lena, o ka bona checkout forms tsohle tseo o nang le tsona.

Haeba o batla ho etsa e ntjha, tobetsa feela **Add Checkout Form** hodimo leqepheng.

O ka kgetha e nngwe ya dikgetho tsena tse tharo e le qalo ya hao: mohato o le mong, mehato e mengata kapa e se nang letho. Jwale, tobetsa **Go to the Editor**.

![Eketsa Checkout Form ka dikgetho tsa mohato o le mong, mehato e mengata, kapa e se nang letho](/img/config/checkout-forms-list.png)

Ka tsela e nngwe, o ka hlophisa kapa wa kopitsa diforomo tseo o seng o na le tsona ka ho tobetsa dikgetho tse ka tlase ho lebitso la yona. Moo, o tla boela o fumane dikgetho tsa ho kopitsa shortcode ya foromo kapa ho hlakola foromo.

![Diketso tsa checkout form ha o hover ka edit, duplicate, le delete](/img/config/checkout-form-hover-actions.png)

Haeba o kgetha mohato o le mong kapa mehato e mengata, checkout form e tla be e se e tlatsitswe pele ka mehato ya motheo hore e sebetse. Jwale, haeba o batla, o ka eketsa mehato e meng ho yona.

### Ho hlophisa Checkout Form: {#editing-a-checkout-form}

Jwaloka ha re boletse pejana, o ka etsa checkout forms bakeng sa merero e fapaneng. Mohlaleng ona re tla sebetsa foromong ya ngodiso.

Ka mora ho ya ho mohlophisi wa checkout form, fa foromo ya hao lebitso (le tla sebediswa bakeng sa tshupiso ya ka hare feela) le slug (e sebediswang ho etsa shortcodes, ka mohlala).

![Mohlophisi oa foromo ea ho lefella e nang le libaka tsa lebitso le slug](/img/config/checkout-form-name-slug.png)

Liforomo li entsoe ka mehato le libaka. U ka eketsa mohato o mocha ka ho tobetsa **Eketsa Mohato o Mocha oa ho Lefella**.

![Konopo ea Eketsa Mohato o Mocha oa ho Lefella](/img/config/checkout-form-add-step.png)

Ho tab ea pele ea fensetere ea modal, tlatsa litaba tsa mohato oa foromo ea hao. E fe ID, lebitso le tlhaloso. Lintho tsena hangata li sebelisoa ka hare.

![Tab ea litaba tsa mohato oa ho lefella e nang le ID, lebitso le tlhaloso](/img/config/checkout-form-step-content.png)

Ka mor’a moo, beha ponahalo ea mohato. U ka khetha pakeng tsa **Bontša kamehla** , **Bontša feela bakeng sa basebelisi ba keneng** kapa **Bontša feela bakeng sa baeti**.

![Likhetho tsa ponahalo ea mohato oa ho lefella](/img/config/checkout-form-step-visibility.png)

Qetellong, hlophisa setaele sa mohato. Tsena ke libaka tsa boikhethelo.

![Tlhophiso ea setaele sa mohato oa ho lefella](/img/config/checkout-form-step-style.png)

Joale, ke nako ea ho eketsa libaka mohato oa rona oa pele. Tobetsa feela **Eketsa Sebaka se Secha** ebe u khetha mofuta oa karolo eo u e batlang.

![Konopo ea Eketsa Sebaka se Secha](/img/config/checkout-form-add-field-button.png)![Lenane le theohelang la khetho ea mofuta oa sebaka](/img/config/checkout-form-field-type-dropdown.png)

Sebaka ka seng se na le lipharamitha tse fapaneng tse lokelang ho tlatsoa. Bakeng sa keno ena ea pele, re tla khetha sebaka sa **Lebitso la mosebelisi**.

![Tlhophiso ea sebaka sa Lebitso la mosebelisi](/img/config/checkout-form-username-content.png)![Lipharamitha tsa sebaka sa Lebitso la mosebelisi](/img/config/checkout-form-username-visibility.png)![Litlhophiso tse ling tsa sebaka sa Lebitso la mosebelisi](/img/config/checkout-form-username-style.png)

U ka eketsa mehato le libaka tse ngata kamoo u li hlokang. Ho bontša lihlahisoa tsa hao hore bareki ba hao ba khethe e le ’ngoe, sebelisa sebaka sa Tafole ea Litheko. Haeba u batla ho lumella bareki ba hao ho khetha template, eketsa sebaka sa Khetho ea Template. Joalo-joalo.

![Mohlophisi oa foromo ea ho lefella e nang le sebaka sa khetho ea template](/img/config/checkout-form-with-template-field.png)

_**Tlhokomeliso:** Haeba u etsa sehlahisoa ka mor’a ho etsa foromo ea hao ea ho lefella, u tla hloka ho eketsa sehlahisoa karolong ea tafole ea Litheko. Haeba u sa se kenye, sehlahisoa se ke ke sa hlaha ho bareki ba hao leqepheng la ngoliso._

_**Tlhokomeliso 2:** lebitso la mosebelisi, imeile, phasewete, sehlooho sa site, URL ea site, kakaretso ea odara, tefo, le konopo ea ho romela ke libaka tse tlamang ho etsa foromo ea ho lefella._

Ha u ntse u sebetsa foromong ea hao ea ho lefella, u ka lula u sebelisa konopo ea Ponelopele ho bona hore na bareki ba hao ba tla bona foromo joang. U ka boela ua fapanyetsana pakeng tsa ho sheba joaloka mosebelisi ea teng kapa moeti.

![Konopo ea ponelopele ho mohlophisi oa foromo ea ho lefella](/img/config/checkout-form-preview-button.png)![Ponelopele ea foromo ea ho lefella joaloka moeti kapa mosebelisi ea teng](/img/config/checkout-form-preview-modal.png)

Qetellong, ho **Likhetho tse Tsoetseng Pele** u ka hlophisa molaetsa bakeng sa leqephe la **Kea Leboha**, ua eketsa snippets ho sala morao liphetoho, ua eketsa CSS e ikhethileng foromong ea hao ea ho lefella kapa ua e thibela linaheng tse itseng.

![Likhetho tse Tsoetseng Pele tse nang le leqephe la Kea Leboha, ho sala morao liphetoho, le CSS e ikhethileng](/img/config/checkout-form-advanced.png)

U ka boela ua bulela kapa ua tima foromo ea hao ea ho lefella ka letsoho ka ho fetola khetho ena kholomong e ka ho le letona, kapa ua hlakola foromo ka ho sa feleng.

![Toggle e sebetsang le khetho ea ho hlakola bakeng sa foromo ea ho lefella](/img/config/checkout-form-active.png)

Se lebale ho boloka foromo ea hao ea ho lefella!

![Konopo ea Boloka Foromo ea ho Lefella](/img/config/checkout-form-save.png)

Ho fumana shortcode ea foromo ea hao tobetsa **Hlahisa Shortcode** ebe u kopitsa sephetho se bontšitsoeng fensetereng ea modal.

![Modal ea Hlahisa Shortcode e nang le shortcode e lokelang ho kopitsoa](/img/config/checkout-form-editor.png)

_**Tlhokomeliso:** U tla hloka ho eketsa shortcode ena leqepheng la hao la ngoliso e le hore foromo ena ea ho lefella e eketsoe ho lona._

## Ho khetha esale pele lihlahisoa le templates ka lipharamitha tsa URL: {#pre-selecting-products-and-templates-via-url-parameters}

Haeba u batla ho etsa litafole tsa litheko tse ikhethileng bakeng sa lihlahisoa tsa hao le ho khetha esale pele foromong ea ho lefella sehlahisoa kapa template eo moreki oa hao a e khethang tafoleng ea hao ea litheko kapa leqepheng la templates, u ka sebelisa lipharamitha tsa URL bakeng sa sena.

### **Bakeng sa meralo:** {#for-plans}

E-ea ho **Ultimate Multisite > Lihlahisoa > Khetha moralo**. U lokela ho bona konopo ea **Tobetsa ho kopitsa Sehokelo se ka Arolelanoang** ka holimo leqepheng. Ena ke sehokelo seo u ka se sebelisang ho khetha esale pele moralo ona o itseng foromong ea hao ea ho lefella.

![Leqephe la sehlahisoa le nang le konopo ea sehokelo se ka arolelanoang](/img/config/products-list.png)

Hlokomela hore sehokelo sena se ka arolelanoang se sebetsa feela bakeng sa **Meralo**. U ke ke ua sebelisa lihokelo tse ka arolelanoang bakeng sa liphutheloana kapa litšebeletso.

### Bakeng sa templates: {#for-templates}

Haeba u batla ho khetha esale pele templates tsa site foromong ea hao ea ho lefella, u ka sebelisa pharamitha: **?template_id=X** ho URL ea leqephe la hao la ngoliso. "X" e lokela ho nkeloa sebaka ke **nomoro ea ID ea site template**. Ho fumana nomoro ena, e-ea ho **Ultimate Multisite > Sites**.

Tobetsa **Laola** ka tlase ho site template eo u batlang ho e sebelisa. U tla bona nomoro ea SITE ID. Sebelisa feela nomoro ena bakeng sa site template ena e itseng hore e khethoe esale pele foromong ea hao ea ho lefella. Tabeng ea rona mona, pharamitha ea URL e tla ba **?template_id=2**.

![Lenane la sites le bontšang ID ea site template](/img/config/site-templates-list.png)

Ha re re webosaete ea rona ea marang-rang ke [**www.mynetwork.com**](http://www.mynetwork.com) ’me leqephe la rona la ngoliso le nang le foromo ea rona ea ho lefella le fumaneha leqepheng la **/register**. URL eohle e nang le site template ena e khethiloeng esale pele e tla shebahala tjena [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

’Me haeba u batla, u ka khetha esale pele lihlahisoa le templates ka bobeli foromong ea hao ea ho lefella. Seo u hlokang ho se etsa feela ke ho kopitsa sehokelo se ka arolelanoang sa moralo ebe u maneha pharamitha ea template qetellong. E tla shebahala tjena [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
