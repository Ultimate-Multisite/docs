---
title: Taybetkirina forma xwe ya qeydkirinê
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Formê Qeydkirinê yê xwe taybet bike {#customizing-your-registration-form}

Ji bo ku tora te ji hemû SaaSên din ên li ser platforma WordPress hatine çêkirin cuda xuya bike, Ultimate Multisite bi taybetmendiya me ya **Formên Checkout** dihêle tu rûpelên qeydkirin û têketinê taybet bikî.

Her çend ew rêyek hêsan û nerm in ji bo ceribandina nêzîkatiyên cuda dema hewl didî xerîdarên nû veguherînî, ew bi piranî ji bo çêkirina formên qeydkirinê yên kesane tên bikaranîn. Armanca vê gotarê ew e ku nîşanî te bide tu çawa dikarî vê bikî.

## Rûpelên têketin û qeydkirinê: {#login-and-registration-pages}

Dema Ultimate Multisite tê sazkirin, ew bixweber rûpelên têketin û qeydkirinê yên taybet li ser malpera sereke ya te çêdike. Tu dikarî van rûpelên standard her dem biguherînî bi çûna rûpela **Ultimate Multisite > Settings > Login & Registration**.

![Rûpela mîhengên Têketin û Qeydkirinê](/img/config/settings-general.png)

Ev dîmena tevahî ya rûpela mîhengên têketin û qeydkirinê ye:

![Rûpela tevahî ya mîhengên Têketin û Qeydkirinê](/img/config/settings-login-registration-full.png)

Ka em li her yek ji vebijarkên ku tu dikarî li ser rûpela **Login & Registration** taybet bikî binêrin:

  * **Qeydkirinê çalak bike:** Ev vebijark dê qeydkirinê li ser tora te çalak an neçalak bike. Ger ew were girtin, xerîdarên te nikarin qeyd bibin û aboneyî berhemên te bibin.

  * **Piştrastkirina emailê çalak bike:** Ger ev vebijark were vekirin, xerîdarên ku ji bo planek belaş an planek bi pere û bi heyama ceribandinê abone dibin dê emaila piştrastkirinê bistînin û divê li ser girêdana piştrastkirinê bitikînin da ku malperên wan bên çêkirin.

  * **Rûpela qeydkirinê ya standard:** Ev rûpela standard ji bo qeydkirinê ye. Divê ev rûpel li ser malpera te were weşandin û formek qeydkirinê hebe (her weha wek formê checkout tê naskirin) - cihê ku clientên te aboneyî berhemên te dibin. Tu dikarî çend rûpelên qeydkirinê û formên checkoutê ku dixwazî çêkî, tenê bîr neke shortcode ya formê checkoutê li ser rûpela qeydkirinê danî, wekî din ew xuya nabe.

  * **Rûpela têketinê ya taybet bi kar bîne:** Ev vebijark dihêle tu rûpelek têketinê ya taybet bi kar bînî, ne rûpela standard a wp-login.php. Ger ev vebijark were vekirin, tu dikarî di vebijarka **Rûpela têketinê ya standard** de (rast li jêrê) hilbijêrî kîjan rûpel ji bo têketinê were bikaranîn.

  * **URL-a têketinê ya orîjînal veşêre (wp-login.php)** : Ger tu dixwazî URL-a têketinê ya orîjînal veşêrî, tu dikarî vê vebijarkê vekî. Ev ji bo pêşîlêgirtina êrîşên brute-force bi kêr tê. Ger ev vebijark çalak be, Ultimate Multisite dema bikarhênerek hewl dide bigihîje girêdana orîjînal a wp-login.php xeletiya 404 nîşan dide

  * **Weşandina hevdem a malperê bi zor bike:** Piştî ku xerîdarek li ser torekê aboneyî berhemek dibe, divê malpera nû ya bendewar veguherîne malperek rastîn a torê. Pêvajoya weşandinê bi rêya Job Queue, nehevdem, pêk tê. Vê vebijarkê çalak bike da ku weşandin di heman daxwazê de wek qeydkirinê pêk were.

Niha, ka em vebijarkên din bibînin ku hîn jî bi pêvajoya têketin û qeydkirinê re têkildar in. Ew rast li jêr **Vebijarkên din** li ser heman rûpela Login & registration in:

  * **Rola standard:** Ev rola ku xerîdarên te piştî pêvajoya qeydkirinê li ser malpera xwe dê hebin.

  * **Jumper çalak bike:** Kurterê Jumper di qada rêveberiyê de çalak dike. Jumper dihêle rêveber zû biçin ekranên Ultimate Multisite, tiştên torê, û armancên din ên piştgirîkirî bêyî ku di hemû pêşekan de bigerin. Ger tu dixwazî wê amûra rêberiya zû ji navrûya rêveberiyê veşêrî, wê bigire.

  * **Bikarhêneran li malpera sereke jî zêde bike:** Çalakkirina vê vebijarkê piştî pêvajoya qeydkirinê bikarhênerê jî li malpera sereke ya tora te zêde dike. Ger tu vê vebijarkê çalak bikî, vebijarkek ji bo danîna **rola standard** ya van bikarhêneran li ser malpera te jî rast li jêrê xuya dibe.

  * **Çend Account çalak bike:** Destûr bide bikarhêneran ku bi heman navnîşana emailê li malperên cuda yên tora te Account hebin. Ger ev vebijark girtî be, xerîdarên te nikarin bi heman navnîşana emailê li malperên din ên ku li ser tora te dixebitin Accountek çêkin.

Û ev hemû vebijarkên têkildar bi têketin û qeydkirinê ne ku tu dikarî taybet bikî! Piştî ku guherandinên xwe qedandî, jibîr neke mîhengên xwe tomar bikî.

## Bikaranîna çend formên qeydkirinê: {#using-multiple-registration-forms}

Ultimate Multisite 2.0 edîtorek formê checkoutê pêşkêş dike ku dihêle tu çend formên dixwazî, bi qadên cuda, berhemên pêşkêşkirî, hwd. çêkî.

Hem rûpelên têketinê hem jî qeydkirinê bi shortcodean hatine bicihkirin: **[wu_login_form]** li ser rûpela têketinê û**[wu_checkout]** ji bo rûpela qeydkirinê. Tu dikarî rûpela qeydkirinê hê bêtir taybet bikî bi avakirin an çêkirina formên checkoutê.

Ji bo gihîştina vê taybetmendiyê, here pêşeka **Formên Checkout**, li ser sidebarê aliyê çepê.

![Pêşeka Formên Checkout di sidebarê de](/img/config/checkout-forms-list.png)

Li ser vê rûpelê, tu dikarî hemû formên checkoutê yên ku te hene bibînî.

Ger tu dixwazî yekê nû çêkî, tenê li ser **Formek Checkout Zêde Bike** li serê rûpelê bitikîne.

Tu dikarî yek ji van sê vebijarkan wek destpêka xwe hilbijêrî: gavek tenê, çend-gav, an vala. Paşê, li **Here Edîtorê** bitikîne.

![Formek Checkout Zêde Bike bi vebijarkên gavek tenê, çend-gav, an vala](/img/config/checkout-forms-list.png)

Wek alternatîf, tu dikarî formên ku jixwe te hene biguherînî an ducarî bikî bi tikandina vebijarkên li jêr navê wan. Li wir, tu her weha vebijarkên kopîkirina shortcode ya formê an jêbirina formê dibînî.

![Çalakiyên hoverê yên formê checkoutê bi guherandin, ducarîkirin, û jêbirin](/img/config/checkout-form-hover-actions.png)

Ger tu gavek tenê an çend-gav hilbijêrî, formê checkoutê dê jixwe bi gavên bingehîn ên ji bo xebitîna wê were dagirtin. Paşê, ger tu bixwazî, dikarî gavên zêde lê zêde bikî.

### Guherandina Formek Checkout: {#editing-a-checkout-form}

Wek me berê got, tu dikarî formên checkoutê ji bo armancên cuda çêkî. Di vê mînakê de em ê li ser formek qeydkirinê bixebitin.

Piştî ku tu diçî edîtora formê checkoutê, navek bide forma xwe (ku tenê ji bo referansa navxweyî were bikaranîn) û slugek (mînak, ji bo çêkirina shortcakes tê bikaranîn).

![Edîtora forma qedandina kirînê bi qadên nav û slug](/img/config/checkout-form-name-slug.png)

Form ji gavan û qadan pêk tên. Tu dikarî bi klîkkirina li **Gava Nû ya Qedandina Kirînê Zêde Bike** gaveke nû zêde bikî.

![Bişkoka Gava Nû ya Qedandina Kirînê Zêde Bike](/img/config/checkout-form-add-step.png)

Di taba yekem a paceya modal de, naveroka gava forma xwe dagire. Ji wê re ID, nav û danasînek bide. Ev tişt bi piranî di hundir de tên bikaranîn.

![Taba naveroka gava checkout bi ID, nav û danasînê](/img/config/checkout-form-step-content.png)

Paşê, xuyabûna gavê saz bike. Tu dikarî di navbera **Her dem nîşan bide** , **Tenê ji bikarhênerên têketî re nîşan bide** an **Tenê ji mêvanan re nîşan bide** de hilbijêrî.

![Vebijarkên xuyabûna gava checkout](/img/config/checkout-form-step-visibility.png)

Di dawiyê de, şêwaza gavê saz bike. Ev qad ne mecbûrî ne.

![Sazkirina şêwaza gava checkout](/img/config/checkout-form-step-style.png)

Niha, dem e ku em qadên xwe li gava yekem zêde bikin. Tenê klîk bike li **Qada Nû Zêde Bike** û cureya beşê ya ku dixwazî hilbijêre.

![Bişkoka Qada Nû Zêde Bike](/img/config/checkout-form-add-field-button.png)![Dropdowna hilbijartina cureya qadê](/img/config/checkout-form-field-type-dropdown.png)

Her qad xwedî parameterên cuda ye ku divê bên dagirtin. Ji bo vê ketina yekem, em ê qada **Navê bikarhêner** hilbijêrin.

![Sazkirina qada navê bikarhêner](/img/config/checkout-form-username-content.png)![Parameterên qada navê bikarhêner](/img/config/checkout-form-username-visibility.png)![Mîhengên zêde yên qada navê bikarhêner](/img/config/checkout-form-username-style.png)

Tu dikarî bi qasî pêdiviya xwe gav û qad zêde bikî. Ji bo ku berhemên xwe nîşanî mişteriyên xwe bidî da ku yekê hilbijêrin, qada Tabloya Nirxan bi kar bîne. Heke dixwazî bihêlî ku clientên te şablonek hilbijêrin, qada Hilbijartina Şablonê zêde bike. Û hwd.

![Edîtora forma checkout bi qada hilbijartina şablonê](/img/config/checkout-form-with-template-field.png)

_**Têbînî:** Heke tu piştî çêkirina forma checkout a xwe berhemek çêkî, divê tu berhemê li beşa tabloya Nirxan zêde bikî. Heke tu wê zêde nekî, berhem li rûpela qeydkirinê ji mişteriyên te re xuya nabe._

_**Têbînî 2:** navê bikarhêner, email, şîfre, sernavê malperê, URL ya malperê, kurteya fermanê, dayîn, û bişkoka şandinê qadên mecbûrî ne ji bo çêkirina forma checkout._

Dema ku tu li ser forma checkout a xwe dixebitî, tu her dem dikarî bişkoka Pêşdîtinê bi kar bînî da ku bibînî clientên te dê formê çawa bibînin. Tu dikarî her weha di navbera dîtina wekî bikarhênerek heyî an mêvanek de biguherî.

![Bişkoka pêşdîtinê li ser edîtora forma checkout](/img/config/checkout-form-preview-button.png)![Pêşdîtina forma checkout wekî mêvan an bikarhênerê heyî](/img/config/checkout-form-preview-modal.png)

Di dawiyê de, li ser **Vebijarkên Pêşketî** tu dikarî peyama rûpela **Spas** saz bikî, snippetan zêde bikî ji bo şopandina veguherînan, CSS a xweser li forma checkout a xwe zêde bikî an wê bi hin welatan sînordar bikî.

![Vebijarkên Pêşketî bi rûpela Spas, şopandina veguherînê, û CSS a xweser](/img/config/checkout-form-advanced.png)

Tu dikarî her weha forma checkout a xwe bi destî çalak an neçalak bikî bi guherandina vê vebijarkê li stûna rastê, an formê bi temamî jê bibî.

![Toggle ya çalak û vebijarka jêbirinê ji bo forma checkout](/img/config/checkout-form-active.png)

Ji bîr neke forma checkout a xwe tomar bikî!

![Bişkoka Tomarkirina Forma Checkout](/img/config/checkout-form-save.png)

Ji bo wergirtina shortcode a forma xwe, klîk bike li **Shortcode Çêbike** û encama ku li paceya modal tê nîşandan kopî bike.

![Modala Shortcode Çêbike bi shortcode ji bo kopîkirinê](/img/config/checkout-form-editor.png)

_**Têbînî:** Divê tu vê shortcode li rûpela qeydkirina xwe zêde bikî da ku ev forma checkout lê zêde bibe._

## Pêş-hilbijartina berhem û şablonan bi parameterên URL: {#pre-selecting-products-and-templates-via-url-parameters}

Heke tu dixwazî tabloyên nirxan ên xweser ji bo berhemên xwe çêkî û li forma checkout berhem an şablona ku mişteriyê te ji rûpela tabloya nirxan an şablonan hilbijartiye pêş-hilbijêrî, tu dikarî ji bo vê parameterên URL bi kar bînî.

### **Ji bo planan:** {#for-plans}

Here **Ultimate Multisite > Berhem > Planek hilbijêre**. Divê tu bişkoka **Klîk bike ji bo kopîkirina Girêdana Parvebar** li serê rûpelê bibînî. Ev ew girêdan e ku tu dikarî bi kar bînî da ku ev plana taybetî li forma checkout a te pêş-hilbijartî be.

![Rûpela berhemê bi bişkoka girêdana parvebar](/img/config/products-list.png)

Bizane ku ev girêdana parvebar tenê ji bo **Plan** derbasdar e. Tu nikarî girêdanên parvebar ji bo paket an xizmetan bi kar bînî.

### Ji bo şablonan: {#for-templates}

Heke tu dixwazî şablonên malperê li forma checkout a xwe pêş-hilbijêrî, tu dikarî parameterê bi kar bînî: **?template_id=X** li URL ya rûpela qeydkirinê. Divê "X" bi **hejmara ID ya şablona malperê** were guhertin. Ji bo wergirtina vê hejmarê, here **Ultimate Multisite > Malper**.

Klîk bike li **Rêve bibe** rast li bin şablona malperê ya ku dixwazî bi kar bînî. Tu dê hejmara SITE ID bibînî. Tenê vê hejmarê ji bo vê şablona malperê ya taybetî bi kar bîne da ku li forma checkout a te pêş-hilbijartî be. Di vê mînaka me de, parameterê URL dê bibe **?template_id=2**.

![Lîsteya malperan ku ID ya şablona malperê nîşan dide](/img/config/site-templates-list.png)

Bila bibêjin malpera tora me [**www.mynetwork.com**](http://www.mynetwork.com) e û rûpela qeydkirina me bi forma checkout a me li rûpela **/register** ye. Hemû URL bi vê şablona malperê ya pêş-hilbijartî dê wisa xuya bike [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Û heke bixwazî, tu dikarî hem berhem hem jî şablonan li forma checkout a xwe pêş-hilbijêrî. Tişta ku divê bikî tenê ev e: girêdana parvebar a planê kopî bike û parameterê şablonê li dawiyê pê ve bike. Ew dê wisa xuya bike [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
