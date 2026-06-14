---
title: Kòmanse Fòm Enrejistrasyon Ou
sidebar_position: 17
_i18n_hash: 13f72671d55f48becd6bd89f6571f111
---
# Kòman personalize Fòm Enskripsyon ou

Pou fè rezo ou sanble diferan de tout lòt SaaS ki bati sou platfòm WordPress, Ultimate Multisite pèmèt ou personalize paj enskripsyon ak login ou avèk fonksyon **Checkout Forms** nou an.

Malgre ke yo se yon fason fasil e fleksib pou eksperimante diferan apwòch lè w ap eseye konvèti nouvo kliyan, yo sitou itilize pou kreye fòm enskripsyon pèsonèl. Artikel sa a vle montre w kijan ou ka fè sa.

## Paj Login ak Enskripsyon:

Lè ou instale Ultimate Multisite, li otomatikman kreye paj login ak enskripsyon koutim sou sit prensipal ou an. Ou ka chanje paj default sa yo nenpòt lè ou ale nan paj **Ultimate Multisite > Settings > Login & Registration** ou a.

![Login and Registration settings page](/img/config/settings-general.png)

Men yon gade total sou paj konfigirasyon login ak enskripsyon an:

![Login and Registration settings full page](/img/config/settings-login-registration-full.png)

Ann gade chak opsyon ou ka personalize sou paj **Login & Registration** la:

  * **Enable registration (Aktive enskripsyon):** Opsyon sa a ap pèmèt ou aktive oswa desaktive enskripsyon sou rezo ou an. Si ou mete li sou "off", kliyan ou pa pral kapab enkripte epi abone nan pwodwi ou yo.

  * **Enable email verification (Aktive verifikasyon imèl):** Si opsyon sa a sou "on", kliyan ki abone pou yon plan gratis oswa yon plan peye ak peryòd esè ap resevwa yon imèl verifikasyon epi yo pral bezwen klike sou lyen verifikasyon an pou sit entèn ou ka kreye.

* **Page d'inscription par défaut (Default registration page):** Sa se paje se paje sa je la page de base pou registre. Sa page la bezwen publie sou sit ou epi li bezwen yon fòm registrasyon (ou ka konnen li kòm checkout form) - kote kliyan ou yo ap abone nan pwodwi ou yo. Ou ka kreye genyen anpil page registrasyon ak checkout form ou vle, men sonje mete shortcode checkout form la sou page registrasyon an, sinon li p ap parèt.

* **Sèvi ak yon page login koutim (Use custom login page):** Opsyon sa a pèmèt ou itilize yon page login ki gen yon fòm koutim, lòt pase page wp-login.php la deparè. Si opsyon sa a aktif, ou ka chwazi ki page ap itilize pou login sou opsyon **Default login page** (an anwo li).

* **Fou anpil URL login orijinal la (Obfuscate the original login url (wp-login.php))**: Si ou vle ka fè URL login orijinal la la pèdi, ou ka aktif opsyon sa a. Sa itilite pou anpeche atak brute-force. Si opsyon sa a aktive, Ultimate Multisite ap montre yon erè 404 lè yon itilizat ap eseye jwenn link wp-login.php original la.

* **Fòse publikasyon sit senkron (Force synchronous site publication)**: Apre yon kliyan abone nan yon pwodwi sou yon rezo, sit ki ap tann an nou bezwen konvèti li vin yon sit rezo reyèl. Pwosesis publikasyon an fèt atravè Job Queue, epi sa se asynchrone (asynchronously). Aktive opsyon sa a pou fè publikasyon an rive nan menm demann an tankou abònman an.

Kounye a, ann wè lòt opsyon ki toujou enpòtan pou pwosesis login ak registrasyon yo. Yo se anwo **Other options** sou menm page Login & registration la:

* **Ròl par defo (Default role):** Sa se rôl ki pral genyen kliyan ou yo sou sit yo apre pwosesis abònman an fini.

* **Active Jumper:** Sa fè Jumper la active. Jumper pèmèt admin yo monte rapidman nan ekran Ultimate Multisite, objè rezo (network objects), ak lòt destinasyon ki sipòte san ou pa bezwen mache atravè tout mennu a. Desactive li si ou prefere ka fè sa zouti navigasyon rapid la ka disparèt nan entèfas admin an.

* **Ajoute itilizat yo sou sit prensipal la tou:** Lè ou active opsyon sa a, li ap ajoute itilizat la sou sit prensipal rezo ou apre pwosesis enskripsyon an. Si ou active opsyon sa a, yon opsyon pou mete **default role** (wòl dekouvè) itilizat yo sou sit wèb ou ap parèt tou imedyatman anba li.

* **Active plizyè kont:** Pèmèt itilizat gen kont nan diferan sit rezo ou ak menm adrès imèl la. Si opsyon sa a pa active, kliyan ou p ap ka kreye yon kont sou lòt sit wèb ki mache sou rezo ou ak menm adrès imèl la.

E se tout opsyon ki gen rapò ak login ak enskripsyon ou ka personalize! Pa bliye pou w mete konsèy ou apre ou fin fini edite yo.

## Itilize plizyè fòm enskripsyon:

Ultimate Multisite 2.0 of yon editè fòm checkout (checkout form editor) ki pèmèt ou kreye genyen fòm ou vle, ak diferan chèf (fields), pwodwi ki ofri, elatriye.

Paje login ak paje enskripsyon yo entegre ak shortcodes: **[wu_login_form]** sou paje login la epi **[wu_checkout]** pou paje enskripsyon an. Ou ka pi plis personalize paje enskripsyon ou a lè w ap bati oswa kreye fòm checkout (checkout forms).

Pou jwenn aksè nan fonksyon sa a, ale nan mennu **Checkout Forms**, sou bar an valè a (left side-bar).

![Checkout Forms menu in the sidebar](/img/config/checkout-forms-list.png)

Sou paj sa a, ou ka wè tout fòm checkout ou genyen yo.

Si ou vle kreye yon nou an, jis klike sou **Add Checkout Form** (Ajoute Fòm Checkout) sou lopitalaj paj la.

Ou ka chwazi yon nan twa opsyon sa yo kòm kòmansman ou: single step (et etap), multi-step (plizyè etap) oswa blank (san kontni). Apre sa, klike pou **Ale nan Editor la** (Go to the Editor).

![Add Checkout Form with single step, multi-step, or blank options](/img/config/checkout-forms-list.png)

Oswa ou ka edite oswa duplike fòm ou deja genyen lè w klike sou opsyon ki anba non li. La, ou pral jwenn tou opsyon pou kopye shortcode fòm la oswa pou elimine fòm la.

![Checkout form hover actions with edit, duplicate, and delete](/img/config/checkout-form-hover-actions.png)

Si ou chwazi single step oswa multi-step, fòm checkout la pral deja ranpli ak etap batatik pou li ka fonksyone. Apre sa, si ou vle, ou ka ajoute etap ekstra a li.

### Edite yon Checkout Form:

Kòm nou te mansyone anvan, ou ka kreye checkout forms pou diferan bagay. Nan egzanp sa a, nou pral travay sou yon fòm registrasyon (registration form).

Apre w fin ale nan editor checkout form la, bay fòm ou yon non (ki ap itilize sèlman pou referans anndan) epi yon slug (ki itilize pou kreye shortcode, pa egzanp).

![Checkout form editor with name and slug fields](/img/config/checkout-form-editor.png)

Fòm yo fèt ak etap ak champs (fields). Ou ka ajoute yon nou etap lè w klike sou **Add New Checkout Step** (Ajoute Nou Etap Checkout la).

![Add New Checkout Step button](/img/config/checkout-form-add-step.png)

Sou premye tab nan fenèt modal la, ranpli kontni etap fòm ou an. Bay li yon ID, yon non epi yon deskripsyon. Yo yo itilize sa pou referans anndan la anpil.

![Checkout step content tab with ID, name, and description](/img/config/checkout-form-step-content.png)

Answit, mete vizibilite etap la. Ou ka chwazi ant **Always show** (Toujou montre), **Only show for logged in users** (Sèlman montre pou itilizat ki log in), oswa **Only show for guests** (Sèlman montre pou yon vizitè).

![Checkout step visibility options](/img/config/checkout-form-step-visibility.png)

Finalman, configure le style de chaque étape. Sa yo se pa obligatwa (optional).

![Checkout step style configuration](/img/config/checkout-form-step-style.png)

Kounye, se lè pou nou ajoute champs nan premye etap nou an. Sen jis klike sou **Add New Field** epi chwazi kalite seksyon ou vle a.

![Add New Field button](/img/config/checkout-form-step-with-fields.png)![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

Chak champ gen diferan paramèt pou ou ranpli. Pou kòmansman sa a, nou pral chwazi champ **Username**.

![Username field configuration](/img/config/checkout-form-username-content.png)![Username field parameters](/img/config/checkout-form-username-visibility.png)![Username field additional settings](/img/config/checkout-form-username-style.png)

Ou ka ajoute yon sans etap ak champ ou bezwen. Pou montre pwodwi ou pou kliyan yo chwazi youn, itilize champ **Pricing Table**. Si ou vle pèmèt kliyan w chwazi yon template, ajoute champ **Template Selection**. E konsa.

_**Nòt:** Si ou kreye yon pwodwi apre ou fin kreye fòm checkout ou a, ou pral bezwen ajoute pwodwi a nan seksyon Pricing Table la. Si ou pa ajoute l, pwodwi a p ap parèt pou kliyan ou yo sou paj registrasyon an._

_**Nòt 2:** username, email, password, site title, site URL, order summary, payment, ak bouton submit se champs obligatwa pou kreye yon fòm checkout._

Pandans ou ap travay sou fòm checkout ou a, ou ka toujou itilize bouton Preview pou wè kijan kliyan ou yo pral wè fòm la. Ou ka tou chanje ant vizyon kòm yon itilizat ki egziste deja oswa yon vizitè.

Finalman, nan **Advanced Options**, ou ka configure mesaj pou paj **Thank You** la, ajoute des snippets pou swiv konversions, ajoute CSS koutim pou fòm checkout ou a, oswa limite li pou kèk peyi espesifik.

![Advanced Options with Thank You page, conversion tracking, and custom CSS](/img/config/checkout-form-advanced.png)

Ou ka tou active oswa disable fòm checkout ou manman an toggler opisyon sa a nan kolòn ki sou la, oubyen delete li pèmanan.

![Active toggle and delete option for checkout form](/img/config/checkout-form-active.png)

Pa bliye pou w save fòm checkout ou!

![Save Checkout Form button](/img/config/checkout-form-save.png)

Pou jwenn shortcode fòm ou a, klike sou **Generate Shortcode** epi copie rezilta ki montre nan fenèt modal la.

![Generate Shortcode modal with shortcode to copy](/img/config/checkout-form-editor.png)

_**Note:** Ou pral bezwen ajoute shortcode sa a nan paj registration ou pou w ka ajoute fòm checkout sa a ladan li._

## Pre-seleman pwodwi ak template yo atravè URL parameters:

Si ou vle kreye tab pri yo koutimaye pou pwodwi ou epi pre-seleman sou fòm checkout la pwodwi oswa template ki chwazi pa kliyan nan tab pri ou a oubyen paj template ou a, ou ka itilize URL parameters pou sa.

### **Pou plan yo:**

Ale nan **Ultimate Multisite > Products > Select a plan**. Ou dwe wè bouton **Click to copy Shareable Link** an lopital la. Sa se link ou ka itilize pou pre-seleman plan espesifik sa a sou fòm checkout ou a.

![Product page with shareable link button](/img/config/products-list.png)

Note ke sa link shareable sa bon sèlman valide pou **Plans**. Ou pa ka itilize link shareable pou packages oswa services.

### Pou templates:

Si ou vle pre-sélectionner site templates sou fòm checkout ou, ou ka itilize paramèt la: **?template_id=X** sou URL paj registrasyon ou. "X" la dwe ranplase pa **numè ID template site**. Pou jwenn numè sa a, ale nan **Ultimate Multisite > Sites**.

Klike sou **Manage** anba site template ou vle itilize a. Ou pral wè numè SITE ID la. Sèlman itilize numè sa a pou site template espesifik sa a pou li pre-sélectionne sou fòm checkout ou. Nan ka nou la, paramèt URL la ta ye **?template_id=2**.

![Sites list showing site template ID](/img/config/site-templates-list.png)

Imajine ke sit entènat nou an se [**www.mynetwork.com**](http://www.mynetwork.com) epi paj registrasyon nou ak fòm checkout la ki nan /register page a. Tout URL la ak site template pre-sélectionne sa a ap sanble tankou [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

E si ou vle, ou ka pre-sélectionne tou de pwodwi ak templates ou sou fòm checkout ou. Tout sa ou bezwen fè se kopye link shareable plan an epi kole paramèt template la nan fen li. Li ap sanble tankou [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
