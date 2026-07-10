---
title: Pèsonalize Fòm Enskripsyon Ou an
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Pèsonalize Fòm Enskripsyon ou {#customizing-your-registration-form}

Pou fè rezo ou parèt inik parapò ak tout lòt SaaS ki bati sou platfòm WordPress, Ultimate Multisite pèmèt ou pèsonalize paj enskripsyon ak koneksyon ou yo ak fonksyon **Checkout Forms** nou an.

Malgre yo se yon fason fasil ak fleksib pou fè eksperyans ak diferan apwòch lè w ap eseye konvèti nouvo kliyan, yo sitou itilize pou kreye fòm enskripsyon pèsonalize. Atik sa a gen pou objektif montre ou kijan ou ka fè sa.

## Paj koneksyon ak enskripsyon: {#login-and-registration-pages}

Lè w enstale Ultimate Multisite, li kreye otomatikman paj koneksyon ak enskripsyon pèsonalize sou sit prensipal ou. Ou ka chanje paj defo sa yo nenpòt ki lè lè w ale anba paj **Ultimate Multisite > Settings > Login & Registration** ou.

![Paj paramèt Koneksyon ak Enskripsyon](/img/config/settings-general.png)

Men yon vi konplè paj paramèt koneksyon ak enskripsyon an:

![Paj konplè paramèt Koneksyon ak Enskripsyon](/img/config/settings-login-registration-full.png)

Ann gade chak opsyon ou ka pèsonalize sou paj **Login & Registration** la:

  * **Aktive enskripsyon:** Opsyon sa a ap aktive oswa dezaktive enskripsyon sou rezo ou. Si li dezaktive, kliyan ou yo p ap kapab enskri epi abòne ak pwodwi ou yo.

  * **Aktive verifikasyon imel:** Si opsyon sa a aktive, kliyan ki abòne ak yon plan gratis oswa yon plan peye ki gen yon peryòd esè ap resevwa yon imel verifikasyon epi y ap bezwen klike sou lyen verifikasyon an pou sit entènèt yo ka kreye.

  * **Paj enskripsyon defo:** Sa a se paj defo pou enskripsyon. Paj sa a bezwen pibliye sou sit entènèt ou epi gen yon fòm enskripsyon (yo konnen tou kòm checkout form) - kote kliyan ou yo ap abòne ak pwodwi ou yo. Ou ka kreye otan paj enskripsyon ak checkout forms ou vle, jis sonje mete shortcode checkout form nan sou paj enskripsyon an, sinon li p ap parèt.

  * **Itilize paj koneksyon pèsonalize:** Opsyon sa a pèmèt ou itilize yon paj koneksyon pèsonalize, olye de paj defo wp-login.php la. Si opsyon sa a aktive, ou ka chwazi ki paj k ap itilize pou koneksyon nan opsyon **Default login page** la (jis anba a).

  * **Kache url koneksyon orijinal la (wp-login.php)** : Si ou vle kache URL koneksyon orijinal la, ou ka aktive opsyon sa a. Sa itil pou anpeche atak brute-force. Si opsyon sa a aktive, Ultimate Multisite ap montre yon erè 404 lè yon itilizatè eseye jwenn aksè ak lyen orijinal wp-login.php la

  * **Fòse piblikasyon sit senkronize:** Apre yon kliyan abòne ak yon pwodwi sou yon rezo, nouvo sit ki annatant lan bezwen konvèti an yon sit rezo reyèl. Pwosesis piblikasyon an fèt atravè Job Queue, yon fason asenkron. Aktive opsyon sa a pou fòse piblikasyon an fèt nan menm demann ak enskripsyon an.

Kounye a, ann wè lòt opsyon ki toujou enpòtan pou pwosesis koneksyon ak enskripsyon an. Yo jis anba **Other options** sou menm paj Login & registration la:

  * **Wòl defo:** Sa a se wòl kliyan ou yo ap genyen sou sit entènèt yo apre pwosesis enskripsyon an.

  * **Aktive Jumper:** Aktive rakousi Jumper nan zòn admin nan. Jumper pèmèt administratè yo sote rapidman nan ekran Ultimate Multisite, objè rezo, ak lòt destinasyon ki sipòte san yo pa navige nan chak meni. Dezaktive li si ou pito kache zouti navigasyon rapid sa a nan koòdone admin nan.

  * **Ajoute itilizatè yo sou sit prensipal la tou:** Lè w aktive opsyon sa a, sa ap ajoute itilizatè a tou sou sit prensipal rezo ou apre pwosesis enskripsyon an. Si ou aktive opsyon sa a, yon opsyon pou mete **wòl defo** itilizatè sa yo sou sit entènèt ou ap parèt tou jis anba a.

  * **Aktive plizyè kont:** Pèmèt itilizatè yo gen kont nan diferan sit rezo ou ak menm adrès imel la. Si opsyon sa a dezaktive, kliyan ou yo p ap kapab kreye yon kont sou lòt sit entènèt k ap mache sou rezo ou ak menm adrès imel la.

E se tout opsyon ki gen rapò ak koneksyon ak enskripsyon ou ka pèsonalize yo! Pa bliye sove paramèt ou yo apre ou fini modifye yo.

## Itilize plizyè fòm enskripsyon: {#using-multiple-registration-forms}

Ultimate Multisite 2.0 ofri yon editè checkout form ki pèmèt ou kreye otan fòm ou vle, ak diferan chan, pwodwi ki an òf, elatriye.

Tou de paj koneksyon ak enskripsyon yo entegre ak shortcodes: **[wu_login_form]** sou paj koneksyon an ak**[wu_checkout]** pou paj enskripsyon an. Ou ka pèsonalize paj enskripsyon an plis lè w konstwi oswa kreye checkout forms.

Pou jwenn aksè ak fonksyon sa a, ale nan meni **Checkout Forms** la, sou ba bò gòch la.

![Meni Checkout Forms nan ba bò a](/img/config/checkout-forms-list.png)

Sou paj sa a, ou ka wè tout checkout forms ou genyen yo.

Si ou vle kreye yon nouvo, jis klike sou **Add Checkout Form** anlè paj la.

Ou ka chwazi youn nan twa opsyon sa yo kòm pwen depa ou: yon sèl etap, plizyè etap oswa vid. Apre sa, klike pou **Ale nan Editè a**.

![Ajoute Checkout Form ak opsyon yon sèl etap, plizyè etap, oswa vid](/img/config/checkout-forms-list.png)

Altènativman, ou ka modifye oswa diplike fòm ou deja genyen yo lè w klike sou opsyon ki anba non li. La, w ap jwenn tou opsyon pou kopye shortcode fòm nan oswa pou efase fòm nan.

![Aksyon checkout form lè sourit pase sou li ak modifye, diplike, ak efase](/img/config/checkout-form-hover-actions.png)

Si ou chwazi yon sèl etap oswa plizyè etap, checkout form nan ap deja ranpli davans ak etap debaz yo pou li fonksyone. Apre sa, si ou vle, ou ka ajoute etap anplis ladan l.

### Modifye yon Checkout Form: {#editing-a-checkout-form}

Jan nou te mansyone anvan, ou ka kreye checkout forms pou diferan objektif. Nan egzanp sa a nou pral travay sou yon fòm enskripsyon.

Apre ou fin navige nan editè checkout form nan, bay fòm ou an yon non (ki pral itilize sèlman pou referans entèn) ak yon slug (yo itilize pou kreye shortcakes, pa egzanp).

![Editè fòm finalizasyon acha ak chan non ak slug](/img/config/checkout-form-name-slug.png)

Fòm yo fèt ak etap ak chan. Ou ka ajoute yon nouvo etap lè ou klike sou **Ajoute Nouvo Etap Finalizasyon Acha**.

![Bouton Ajoute Nouvo Etap Finalizasyon Acha](/img/config/checkout-form-add-step.png)

Sou premye onglet fenèt modal la, ranpli kontni etap fòm ou an. Ba li yon ID, yon non ak yon deskripsyon. Atik sa yo sitou itilize anndan sistèm nan.

![Onglet kontni etap finalizasyon acha ak ID, non, ak deskripsyon](/img/config/checkout-form-step-content.png)

Apre sa, mete vizibilite etap la. Ou ka chwazi ant **Toujou montre** , **Montre sèlman pou itilizatè ki konekte** oswa **Montre sèlman pou envite**.

![Opsyon vizibilite etap finalizasyon acha](/img/config/checkout-form-step-visibility.png)

Finalman, konfigire estil etap la. Sa yo se chan opsyonèl.

![Konfigirasyon estil etap finalizasyon acha](/img/config/checkout-form-step-style.png)

Kounye a, li lè pou ajoute chan nan premye etap nou an. Jis klike sou **Ajoute Nouvo Chan** epi chwazi kalite seksyon ou vle a.

![Bouton Ajoute Nouvo Chan](/img/config/checkout-form-add-field-button.png)![Meni deroulan seleksyon kalite chan](/img/config/checkout-form-field-type-dropdown.png)

Chak chan gen diferan paramèt pou ranpli. Pou premye antre sa a, nou pral chwazi chan **Non itilizatè** a.

![Konfigirasyon chan Non itilizatè](/img/config/checkout-form-username-content.png)![Paramèt chan Non itilizatè](/img/config/checkout-form-username-visibility.png)![Paramèt adisyonèl chan Non itilizatè](/img/config/checkout-form-username-style.png)

Ou ka ajoute otan etap ak chan ou bezwen. Pou montre pwodwi ou yo pou kliyan ou yo chwazi youn, sèvi ak chan Tablo Pri a. Si ou vle kite kliyan ou yo chwazi yon modèl, ajoute chan Seleksyon Modèl la. Epi konsa.

![Editè fòm finalizasyon acha ak chan seleksyon modèl](/img/config/checkout-form-with-template-field.png)

_**Nòt:** Si ou kreye yon pwodwi apre ou fin kreye fòm finalizasyon acha ou a, w ap bezwen ajoute pwodwi a nan seksyon Tablo Pri a. Si ou pa ajoute li, pwodwi a p ap parèt pou kliyan ou yo sou paj enskripsyon an._

_**Nòt 2:** non itilizatè, imèl, modpas, tit sit, URL sit, rezime kòmann, peman, ak bouton soumèt se chan obligatwa pou kreye yon fòm finalizasyon acha._

Pandan w ap travay sou fòm finalizasyon acha ou a, ou ka toujou sèvi ak bouton Aperçu a pou wè kijan kliyan ou yo pral wè fòm nan. Ou ka tou altène ant afichaj kòm yon itilizatè ki deja egziste oswa yon vizitè.

![Bouton Aperçu sou editè fòm finalizasyon acha a](/img/config/checkout-form-preview-button.png)![Aperçu fòm finalizasyon acha kòm vizitè oswa itilizatè ki deja egziste](/img/config/checkout-form-preview-modal.png)

Finalman, nan **Opsyon Avanse** ou ka konfigire mesaj pou paj **Mèsi** a, ajoute snippets pou swiv konvèsyon, ajoute CSS pèsonalize nan fòm finalizasyon acha ou a oswa limite li pou sèten peyi.

![Opsyon Avanse ak paj Mèsi, swivi konvèsyon, ak CSS pèsonalize](/img/config/checkout-form-advanced.png)

Ou ka tou aktive oswa dezaktive fòm finalizasyon acha ou a manyèlman lè ou chanje opsyon sa a nan kolòn adwat la, oswa efase fòm nan nèt ale.

![Bouton aktive/dezaktive ak opsyon efase pou fòm finalizasyon acha](/img/config/checkout-form-active.png)

Pa bliye sove fòm finalizasyon acha ou a!

![Bouton Sove Fòm Finalizasyon Acha](/img/config/checkout-form-save.png)

Pou jwenn shortcode fòm ou an klike sou **Jenere Shortcode** epi kopye rezilta ki parèt sou fenèt modal la.

![Modal Jenere Shortcode ak shortcode pou kopye](/img/config/checkout-form-editor.png)

_**Nòt:** W ap bezwen ajoute shortcode sa a sou paj enskripsyon ou an pou fòm finalizasyon acha sa a ajoute ladan l._

## Pre-seleksyone pwodwi ak modèl atravè paramèt URL: {#pre-selecting-products-and-templates-via-url-parameters}

Si ou vle kreye tablo pri pèsonalize pou pwodwi ou yo epi pre-seleksyone sou fòm finalizasyon acha a pwodwi oswa modèl kliyan ou a chwazi nan tablo pri ou oswa paj modèl yo, ou ka itilize paramèt URL pou sa.

### **Pou plan yo:** {#for-plans}

Ale nan **Ultimate Multisite > Pwodwi > Chwazi yon plan**. Ou ta dwe wè bouton **Klike pou kopye Lyen Pataj** la anlè paj la. Sa a se lyen ou ka itilize pou pre-seleksyone plan espesifik sa a sou fòm finalizasyon acha ou a.

![Paj pwodwi ak bouton lyen pataj](/img/config/products-list.png)

Remake ke lyen pataj sa a valab sèlman pou **Plan**. Ou pa ka itilize lyen pataj pou pakè oswa sèvis.

### Pou modèl yo: {#for-templates}

Si ou vle pre-seleksyone modèl sit sou fòm finalizasyon acha ou a, ou ka itilize paramèt la: **?template_id=X** sou URL paj enskripsyon ou an. "X" la bezwen ranplase pa **nimewo ID modèl sit la**. Pou jwenn nimewo sa a, ale nan **Ultimate Multisite > Sit**.

Klike sou **Jere** jis anba modèl sit ou vle itilize a. Ou pral wè nimewo SITE ID la. Jis itilize nimewo sa a pou modèl sit espesifik sa a pou li pre-seleksyone sou fòm finalizasyon acha ou a. Nan ka pa nou isit la, paramèt URL la ta dwe **?template_id=2**.

![Lis sit ki montre ID modèl sit](/img/config/site-templates-list.png)

Ann di sit entènèt rezo nou an se [**www.mynetwork.com**](http://www.mynetwork.com) epi paj enskripsyon nou an ak fòm finalizasyon acha nou an sitiye sou paj **/register** la. URL konplè a ak modèl sit sa a ki pre-seleksyone ap sanble ak [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Epi si ou vle, ou ka pre-seleksyone ni pwodwi ni modèl pou fòm finalizasyon acha ou a. Tout sa ou bezwen fè se kopye lyen pataj plan an epi kole paramèt modèl la nan fen an. Li pral sanble ak [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
