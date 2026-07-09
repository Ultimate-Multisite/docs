---
title: Pagpasibo sa Imong Form sa Pagparehistro
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Pag-customize sa imong Form sa Pagparehistro {#customizing-your-registration-form}

Aron mahimong talagsaon ang hitsura sa imong network kumpara sa tanang ubang SaaS nga gitukod sa WordPress platform, gitugotan ka sa Ultimate Multisite nga i-customize ang imong mga panid sa pagparehistro ug pag-login gamit ang among **Mga Form sa Pag-checkout** nga feature.

Bisan pa nga sayon ug flexible kini nga paagi sa pagsulay og lain-laing pamaagi kung maningkamot nga makabig ang bag-ong mga customer, kasagaran kini gigamit sa paghimo og personalized nga mga form sa pagparehistro. Tumong sa artikulo nga ipakita kanimo kung unsaon nimo kini pagbuhat.

## Mga panid sa pag-login ug pagparehistro: {#login-and-registration-pages}

Sa pag-install sa Ultimate Multisite, awtomatiko kini nga maghimo og custom nga mga panid sa pag-login ug pagparehistro sa imong main site. Mahimo nimo usbon kini nga default nga mga panid bisan kanus-a pinaagi sa pag-adto sa imong **Ultimate Multisite > Mga Setting > Pag-login & Pagparehistro** nga panid.

![Panid sa mga setting sa Pag-login ug Pagparehistro](/img/config/settings-general.png)

Aniay tibuok nga pagtan-aw sa panid sa mga setting sa pag-login ug pagparehistro:

![Tibuok nga panid sa mga setting sa Pag-login ug Pagparehistro](/img/config/settings-login-registration-full.png)

Atong tan-awon ang matag usa sa mga opsyon nga mahimo nimo i-customize sa **Pag-login & Pagparehistro** nga panid:

  * **I-enable ang pagparehistro:** Kini nga opsyon mag-enable o mag-disable sa pagparehistro sa imong network. Kung naka-off kini, dili makaparehistro ug makasubscribe ang imong mga customer sa imong mga produkto.

  * **I-enable ang pag-verify sa email:** Kung naka-on kini nga opsyon, ang mga customer nga mosubscribe sa libre nga plan o bayad nga plan nga adunay trial period makadawat og verification email ug kinahanglan nilang i-click ang verification link aron mahimo ang ilang mga website.

  * **Default nga panid sa pagparehistro:** Kini ang default nga panid alang sa pagparehistro. Kinahanglan nga na-publish kini nga panid sa imong website ug adunay form sa pagparehistro (nailhan usab nga form sa pag-checkout) - diin ang imong mga client mosubscribe sa imong mga produkto. Makahimo ka og bisan pila ka mga panid sa pagparehistro ug mga form sa pag-checkout nga gusto nimo, hinumdomi lang nga ibutang ang shortcode sa form sa pag-checkout sa panid sa pagparehistro, kay kung dili, dili kini makita.

  * **Gamita ang custom nga panid sa pag-login:** Kini nga opsyon nagtugot kanimo nga mogamit og customized nga panid sa pag-login, gawas sa default nga wp-login.php nga panid. Kung naka-on kini nga opsyon, makapili ka kung unsang panid ang gamiton para sa pag-login sa **Default nga panid sa pag-login** nga opsyon (direkta sa ubos).

  * **Itago ang orihinal nga login url (wp-login.php)** : Kung gusto nimo itago ang orihinal nga login URL, mahimo nimo i-on kini nga opsyon. Mapuslanon kini aron malikayan ang brute-force attacks. Kung naka-enable kini nga opsyon, magpakita ang Ultimate Multisite og 404 error kung mosulay ang user nga mo-access sa orihinal nga wp-login.php link

  * **Ipugos ang synchronous nga pag-publish sa site:** Human mosubscribe ang customer sa usa ka produkto sa usa ka network, ang bag-ong pending nga site kinahanglan nga i-convert ngadto sa tinuod nga network site. Ang proseso sa pag-publish mahitabo pinaagi sa Job Queue, asynchronously. I-enable kini nga opsyon aron ipugos nga mahitabo ang pag-publish sa parehas nga request sama sa signup.

Karon, tan-awon nato ang ubang mga opsyon nga may kalabutan gihapon sa proseso sa pag-login ug pagparehistro. Anaa kini direkta sa ubos sa **Ubang mga opsyon** sa parehas nga panid sa Pag-login & pagparehistro:

  * **Default nga role:** Kini ang role nga maangkon sa imong mga customer sa ilang website human sa proseso sa signup.

  * **I-enable ang Jumper:** Gi-enable niini ang Jumper shortcut sa admin area. Gitugotan sa Jumper ang mga administrator nga dali nga molukso ngadto sa Ultimate Multisite screens, mga object sa network, ug ubang suportadong mga destinasyon nga dili na kinahanglan molibot sa matag menu. I-off kini kung mas gusto nimo itago kana nga paspas nga navigation tool gikan sa admin interface.

  * **Idugang usab ang mga user sa main site:** Ang pag-enable niini nga opsyon modugang usab sa user ngadto sa main site sa imong network human sa proseso sa signup. Kung i-enable nimo kini nga opsyon, usa ka opsyon sa pag-set sa **default nga role** niini nga mga user sa imong website ang makita usab direkta sa ubos.

  * **I-enable ang daghang accounts:** Tugoti ang mga user nga adunay accounts sa lain-laing sites sa imong network gamit ang parehas nga email address. Kung naka-off kini nga opsyon, dili makahimo og account ang imong mga customer sa ubang mga website nga nagdagan sa imong network gamit ang parehas nga email address.

Ug mao na kana ang tanang opsyon nga may kalabutan sa pag-login ug pagparehistro nga mahimo nimo i-customize! Ayaw kalimti nga i-save ang imong mga setting human nimo mahuman ang pag-edit niini.

## Paggamit og daghang mga form sa pagparehistro: {#using-multiple-registration-forms}

Ang Ultimate Multisite 2.0 nagtanyag og editor sa form sa pag-checkout nga nagtugot kanimo sa paghimo og bisan pila ka form nga gusto nimo, nga adunay lain-laing mga field, mga produkto nga gitanyag, ug uban pa.

Ang mga panid sa pag-login ug pagparehistro parehong gi-embed gamit ang shortcodes: **[wu_login_form]** sa panid sa pag-login ug**[wu_checkout]** para sa panid sa pagparehistro. Mas mahimo pa nimo i-customize ang panid sa pagparehistro pinaagi sa pagtukod o paghimo og mga form sa pag-checkout.

Aron ma-access kini nga feature, adto sa **Mga Form sa Pag-checkout** nga menu, sa wala nga side-bar.

![Menu sa Mga Form sa Pag-checkout sa sidebar](/img/config/checkout-forms-list.png)

Niini nga panid, makita nimo ang tanang mga form sa pag-checkout nga naa nimo.

Kung gusto nimo maghimo og bag-o, i-click lang ang **Pagdugang og Form sa Pag-checkout** sa ibabaw sa panid.

Makapili ka og usa niining tulo ka opsyon isip imong sugdanan: usa ka step, multi-step o blanko. Dayon, i-click ang **Adto sa Editor**.

![Pagdugang og Form sa Pag-checkout nga adunay mga opsyon nga usa ka step, multi-step, o blanko](/img/config/checkout-forms-list.png)

Sa laing paagi, mahimo nimo i-edit o i-duplicate ang mga form nga naa na nimo pinaagi sa pag-click sa mga opsyon sa ubos sa ngalan niini. Didto, makita usab nimo ang mga opsyon sa pagkopya sa shortcode sa form o sa pagtangtang sa form.

![Mga hover action sa form sa pag-checkout nga adunay edit, duplicate, ug delete](/img/config/checkout-form-hover-actions.png)

Kung pilion nimo ang usa ka step o multi-step, ang form sa pag-checkout daan nang napun-an sa basic nga mga step aron kini molihok. Dayon, kung gusto nimo, makadugang ka og dugang nga mga step niini.

### Pag-edit sa Form sa Pag-checkout: {#editing-a-checkout-form}

Sama sa among gihisgutan kaniadto, makahimo ka og mga form sa pag-checkout alang sa lain-laing katuyoan. Niini nga pananglitan magtrabaho kita sa usa ka form sa pagparehistro.

Human sa pag-navigate ngadto sa editor sa form sa pag-checkout, hatagi og ngalan ang imong form (nga gamiton lamang alang sa internal nga reperensya) ug usa ka slug (gigamit sa paghimo og shortcakes, pananglitan).

![Editor sa porma sa pagkompleto sa pagpalit nga adunay mga uma sa ngalan ug slug](/img/config/checkout-form-name-slug.png)

Ang mga porma gihimo sa mga lakang ug mga uma. Makadugang ka og bag-ong lakang pinaagi sa pag-klik sa **Idugang ang Bag-ong Lakang sa Pagkompleto sa Pagpalit**.

![Buton nga Idugang ang Bag-ong Lakang sa Pagkompleto sa Pagpalit](/img/config/checkout-form-add-step.png)

Sa unang tab sa modal window, pun-a ang sulod sa lakang sa imong porma. Hatagi kini og ID, ngalan ug hulagway. Kini nga mga butang kasagaran gigamit sa sulod lamang.

![Tab sa sulod sa lakang sa pagkompleto sa pagpalit nga adunay ID, ngalan, ug hulagway](/img/config/checkout-form-step-content.png)

Sunod, itakda ang pagkakita sa lakang. Makapili ka tali sa **Kanunay ipakita** , **Ipakita lamang para sa mga naka-log in nga tiggamit** o **Ipakita lamang para sa mga bisita**.

![Mga opsyon sa pagkakita sa lakang sa pagkompleto sa pagpalit](/img/config/checkout-form-step-visibility.png)

Sa kataposan, i-configure ang estilo sa lakang. Kini mga opsyonal nga uma.

![Konpigurasyon sa estilo sa lakang sa pagkompleto sa pagpalit](/img/config/checkout-form-step-style.png)

Karon, panahon na sa pagdugang og mga uma sa atong unang lakang. I-klik lang ang **Idugang ang Bag-ong Uma** ug pilia ang tipo sa seksyon nga imong gusto.

![Buton nga Idugang ang Bag-ong Uma](/img/config/checkout-form-add-field-button.png)![Dropdown sa pagpili sa tipo sa uma](/img/config/checkout-form-field-type-dropdown.png)

Ang matag uma adunay lain-laing mga parameter nga pun-an. Para niining unang pagsulod, pilion nato ang **Username** nga uma.

![Konpigurasyon sa Username nga uma](/img/config/checkout-form-username-content.png)![Mga parameter sa Username nga uma](/img/config/checkout-form-username-visibility.png)![Dugang nga mga setting sa Username nga uma](/img/config/checkout-form-username-style.png)

Makadugang ka og daghang lakang ug uma kutob sa imong gikinahanglan. Aron ipakita ang imong mga produkto para makapili ang imong mga kustomer, gamita ang uma nga Talaan sa Presyo. Kung gusto nimo tugotan ang imong mga kliyente nga mopili og hulmahan, idugang ang uma nga Pagpili og Hulmahan. Ug uban pa.

![Editor sa porma sa pagkompleto sa pagpalit nga adunay uma sa pagpili og hulmahan](/img/config/checkout-form-with-template-field.png)

_**Pahinumdom:** Kung maghimo ka og produkto human nimo mabuhat ang imong porma sa pagkompleto sa pagpalit, kinahanglan nimo idugang ang produkto sa seksyon sa Talaan sa Presyo. Kung dili nimo kini idugang, ang produkto dili makita sa imong mga kustomer sa panid sa pagrehistro._

_**Pahinumdom 2:** username, email, password, titulo sa sityo, site URL, summary sa order, bayad, ug buton sa pagsumite kay mandatory nga mga uma aron makahimo og porma sa pagkompleto sa pagpalit._

Samtang nagtrabaho ka sa imong porma sa pagkompleto sa pagpalit, kanunay nimo magamit ang buton nga Preview aron makita kung giunsa makita sa imong mga kliyente ang porma. Makapuli-puli ka usab tali sa pagtan-aw isip kasamtangang tiggamit o bisita.

![Buton nga Preview sa editor sa porma sa pagkompleto sa pagpalit](/img/config/checkout-form-preview-button.png)![Preview sa porma sa pagkompleto sa pagpalit isip bisita o kasamtangang tiggamit](/img/config/checkout-form-preview-modal.png)

Sa kataposan, sa **Abanteng mga Opsyon** mahimo nimo i-configure ang mensahe para sa panid nga **Salamat**, magdugang og mga snippet aron masubay ang mga conversion, magdugang og custom CSS sa imong porma sa pagkompleto sa pagpalit o limitahan kini sa piho nga mga nasod.

![Abanteng mga Opsyon nga adunay panid nga Salamat, pagsubay sa conversion, ug custom CSS](/img/config/checkout-form-advanced.png)

Mahimo usab nimo nga manwal nga i-enable o i-disable ang imong porma sa pagkompleto sa pagpalit pinaagi sa pag-toggle niini nga opsyon sa tuo nga kolum, o permanenteng tangtangon ang porma.

![Active toggle ug opsyon sa pagtangtang para sa porma sa pagkompleto sa pagpalit](/img/config/checkout-form-active.png)

Ayaw kalimti nga i-save ang imong porma sa pagkompleto sa pagpalit!

![Buton nga Save sa Porma sa Pagkompleto sa Pagpalit](/img/config/checkout-form-save.png)

Aron makuha ang shortcode sa imong porma, i-klik ang **Generate Shortcode** ug kopyaha ang resulta nga gipakita sa modal window.

![Generate Shortcode modal nga adunay shortcode nga kopyahon](/img/config/checkout-form-editor.png)

_**Pahinumdom:** Kinahanglan nimo idugang kini nga shortcode sa imong panid sa pagrehistro aron madugang kini nga porma sa pagkompleto sa pagpalit ngadto niini._

## Pag-pre-select sa mga produkto ug hulmahan pinaagi sa URL parameters: {#pre-selecting-products-and-templates-via-url-parameters}

Kung gusto ka maghimo og pinasahi nga mga talaan sa presyo para sa imong mga produkto ug i-pre-select sa porma sa pagkompleto sa pagpalit ang produkto o hulmahan nga pilion sa imong kustomer gikan sa imong talaan sa presyo o panid sa mga hulmahan, magamit nimo ang URL parameters para niini.

### **Para sa mga plano:** {#for-plans}

Adto sa **Ultimate Multisite > Mga Produkto > Pagpili og plano**. Makita nimo ang buton nga **I-klik aron kopyahon ang Shareable Link** sa ibabaw sa panid. Kini ang link nga magamit nimo aron i-pre-select kining piho nga plano sa imong porma sa pagkompleto sa pagpalit.

![Panid sa produkto nga adunay buton sa shareable link](/img/config/products-list.png)

Timan-i nga kini nga shareable link balido lamang para sa **Mga Plano**. Dili nimo magamit ang shareable links para sa mga pakete o mga serbisyo.

### Para sa mga hulmahan: {#for-templates}

Kung gusto nimo i-pre-select ang mga hulmahan sa sityo sa imong porma sa pagkompleto sa pagpalit, magamit nimo ang parameter: **?template_id=X** sa URL sa imong panid sa pagrehistro. Ang "X" kinahanglan ilisan sa **numero sa ID sa hulmahan sa sityo**. Aron makuha kini nga numero, adto sa **Ultimate Multisite > Mga Sityo**.

I-klik ang **Manage** sa ubos gyud sa hulmahan sa sityo nga gusto nimo gamiton. Makita nimo ang numero sa SITE ID. Gamita lang kini nga numero para niining piho nga hulmahan sa sityo aron ma-pre select sa imong porma sa pagkompleto sa pagpalit. Sa atong kaso dinhi, ang URL parameter mahimong **?template_id=2**.

![Lista sa mga sityo nga nagpakita sa ID sa hulmahan sa sityo](/img/config/site-templates-list.png)

Pananglitan ang atong network website mao ang [**www.mynetwork.com**](http://www.mynetwork.com) ug ang atong panid sa pagrehistro nga adunay atong porma sa pagkompleto sa pagpalit nahimutang sa panid nga **/register**. Ang tibuok URL nga adunay kini nga hulmahan sa sityo nga pre-selected motan-aw sama sa [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Ug kung gusto nimo, mahimo nimo i-pre-select ang duha, mga produkto ug mga hulmahan, ngadto sa imong porma sa pagkompleto sa pagpalit. Ang kinahanglan ra nimo buhaton mao ang pagkopya sa shareable link sa plano ug ipilit ang parameter sa hulmahan sa kataposan. Motan-aw kini sama sa [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
