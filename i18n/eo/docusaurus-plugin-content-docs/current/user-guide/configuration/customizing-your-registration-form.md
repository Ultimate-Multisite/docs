---
title: Personigo de via registriĝa formularo
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Agordi vian Registriĝan Formularon

Por ke via reto aspektu unika kompare kun ĉiuj aliaj SaaS konstruitaj sur WordPress platformo, Ultimate Multisite permesas al vi agordi viajn registriĝajn kaj ensalutajn paĝojn per nia funkcio **Checkout Forms**.

Kvankam ili estas facila kaj fleksebla maniero eksperimenti per malsamaj aliroj kiam oni provas konverti novajn klientojn, ili estas plejparte uzataj por krei personecigitajn registriĝajn formularojn. Ĉi tiu artikolo celas montri al vi kiel vi povas fari tion.

## Ensalutaj kaj registriĝaj paĝoj:

Post instalado de Ultimate Multisite, ĝi aŭtomate kreas proprajn ensalutajn kaj registriĝajn paĝojn en via ĉefa retejo. Vi povas ŝanĝi ĉi tiujn defaŭltajn paĝojn iam ajn irante al via paĝo **Ultimate Multisite > Settings > Login & Registration**.

![Paĝo de agordoj por ensaluto kaj registriĝo](/img/config/settings-general.png)

Jen plena vido de la paĝo de ensalutaj kaj registriĝaj agordoj:

![Plena paĝo de ensalutaj kaj registriĝaj agordoj](/img/config/settings-login-registration-full.png)

Ni rigardu ĉiun el la opcioj, kiujn vi povas agordi en la paĝo **Login & Registration**:

  * **Ebligi registriĝon:** Ĉi tiu opcio ebligos aŭ malebligos registriĝon en via reto. Se ĝi estas malŝaltita, viaj klientoj ne povos registriĝi kaj aboni viajn produktojn.

  * **Ebligi retpoŝtan konfirmon:** Se ĉi tiu opcio estas ŝaltita, klientoj, kiuj abonas senpagan planon aŭ pagitan planon kun provperiodo, ricevos konfirman retpoŝton kaj devos alklaki la konfirman ligilon por ke iliaj retejoj estu kreitaj.

  * **Defaŭlta registriĝa paĝo:** Ĉi tiu estas la defaŭlta paĝo por registriĝo. Ĉi tiu paĝo devas esti publikigita en via retejo kaj havi registriĝan formularon (ankaŭ konatan kiel checkout-formularo) - kie viaj klientoj abonos viajn produktojn. Vi povas krei tiom da registriĝaj paĝoj kaj checkout-formularoj kiom vi volas, nur memoru meti la shortcode de la checkout-formularo sur la registriĝan paĝon, alie ĝi ne aperos.

  * **Uzi propran ensalutan paĝon:** Ĉi tiu opcio permesas al vi uzi personecigitan ensalutan paĝon, alian ol la defaŭlta paĝo wp-login.php. Se ĉi tiu opcio estas ŝaltita, vi povas elekti kiu paĝo estos uzata por ensaluto en la opcio **Defaŭlta ensaluta paĝo** (ĝuste sube).

  * **Malklarigi la originan ensalutan url (wp-login.php)** : Se vi volas kaŝi la originan ensalutan URL, vi povas ŝalti ĉi tiun opcion. Ĉi tio utilas por malhelpi krudfortajn atakojn. Se ĉi tiu opcio estas ebligita, Ultimate Multisite montros 404-eraron kiam uzanto provas aliri la originan ligilon wp-login.php

  * **Devigi sinkronan publikigon de retejo:** Post kiam kliento abonas produkton en reto, la nova pritraktota retejo devas esti konvertita en realan retan retejon. La publikiga procezo okazas per Job Queue, nesinkrone. Ebligu ĉi tiun opcion por devigi la publikigon okazi en la sama peto kiel la registriĝo.

Nun, ni vidu aliajn opciojn, kiuj ankoraŭ rilatas al la ensaluta kaj registriĝa procezo. Ili troviĝas ĝuste sub **Aliaj opcioj** en la sama paĝo Login & Registration:

  * **Defaŭlta rolo:** Ĉi tiu estas la rolo, kiun viaj klientoj havos en sia retejo post la registriĝa procezo.

  * **Ebligi Jumper:** Ebligas la ŝparvojon Jumper en la administra areo. Jumper permesas al administrantoj rapide salti al ekranoj de Ultimate Multisite, retaj objektoj kaj aliaj subtenataj cellokoj sen foliumi tra ĉiu menuo. Malŝaltu ĝin se vi preferas kaŝi tiun rapidan navigadan ilon el la administra interfaco.

  * **Aldoni uzantojn ankaŭ al la ĉefa retejo:** Ebligi ĉi tiun opcion ankaŭ aldonos la uzanton al la ĉefa retejo de via reto post la registriĝa procezo. Se vi ebligas ĉi tiun opcion, opcio por agordi la **defaŭltan rolon** de ĉi tiuj uzantoj en via retejo ankaŭ aperos ĝuste sube.

  * **Ebligi plurajn kontojn:** Permesu al uzantoj havi kontojn en malsamaj retejoj de via reto kun la sama retpoŝtadreso. Se ĉi tiu opcio estas malŝaltita, viaj klientoj ne povos krei konton en aliaj retejoj funkciantaj en via reto kun la sama retpoŝtadreso.

Kaj jen ĉiuj opcioj rilataj al ensaluto kaj registriĝo, kiujn vi povas agordi! Ne forgesu konservi viajn agordojn post kiam vi finos redakti ilin.

## Uzado de pluraj registriĝaj formularoj:

Ultimate Multisite 2.0 ofertas checkout-formularan redaktilon, kiu permesas al vi krei tiom da formularoj kiom vi volas, kun malsamaj kampoj, ofertataj produktoj, ktp.

Kaj la ensaluta kaj registriĝa paĝoj estas enkorpigitaj per shortcodes: **[wu_login_form]** en la ensaluta paĝo kaj**[wu_checkout]** por la registriĝa paĝo. Vi povas plu agordi la registriĝan paĝon per konstruado aŭ kreado de checkout-formularoj.

Por aliri ĉi tiun funkcion, iru al la menuo **Checkout Forms**, ĉe la maldekstra flanka breto.

![Menuo Checkout Forms en la flanka breto](/img/config/checkout-forms-list.png)

En ĉi tiu paĝo, vi povas vidi ĉiujn checkout-formularojn, kiujn vi havas.

Se vi volas krei novan, simple alklaku **Add Checkout Form** ĉe la supro de la paĝo.

Vi povas elekti unu el ĉi tiuj tri opcioj kiel vian deirpunkton: unuopa paŝo, plurpaŝa aŭ malplena. Poste, alklaku **Go to the Editor**.

![Aldoni Checkout Form kun opcioj unuopa paŝo, plurpaŝa aŭ malplena](/img/config/checkout-forms-list.png)

Alternative, vi povas redakti aŭ duobligi la formularojn, kiujn vi jam havas, alklakante la opciojn sub ilia nomo. Tie, vi ankaŭ trovos la opciojn por kopii la shortcode de la formularo aŭ por forigi la formularon.

![Ŝvebaj agoj de checkout-formularo kun redakti, duobligi kaj forigi](/img/config/checkout-form-hover-actions.png)

Se vi elektas unuopan paŝon aŭ plurpaŝan, la checkout-formularo jam estos antaŭplenigita per la bazaj paŝoj por ke ĝi funkciu. Poste, se vi volas, vi povas aldoni kromajn paŝojn al ĝi.

### Redakti Checkout Form:

Kiel ni menciis antaŭe, vi povas krei checkout-formularojn por malsamaj celoj. En ĉi tiu ekzemplo ni laboros pri registriĝa formularo.

Post navigado al la checkout-formulara redaktilo, donu al via formularo nomon (kiu estos uzata nur por interna referenco) kaj slug (uzata por krei shortcodes, ekzemple).

![Redaktilo de pagformularo kun nom- kaj slug-kampoj](/img/config/checkout-form-name-slug.png)

Formularoj konsistas el paŝoj kaj kampoj. Vi povas aldoni novan paŝon klakante al **Aldoni Novan Pagpaŝon**.

![Butono Aldoni Novan Pagpaŝon](/img/config/checkout-form-add-step.png)

En la unua langeto de la modala fenestro, plenigu la enhavon de la paŝo de via formularo. Donu al ĝi ID-on, nomon kaj priskribon. Ĉi tiuj eroj estas plejparte uzataj interne.

![Langeto de enhavo de pagpaŝo kun ID, nomo kaj priskribo](/img/config/checkout-form-step-content.png)

Poste, agordu la videblecon de la paŝo. Vi povas elekti inter **Ĉiam montri** , **Montri nur por ensalutintaj uzantoj** aŭ **Montri nur por gastoj**.

![Videblecaj opcioj de pagpaŝo](/img/config/checkout-form-step-visibility.png)

Fine, agordu la stilon de la paŝo. Ĉi tiuj estas nedevigaj kampoj.

![Stila agordo de pagpaŝo](/img/config/checkout-form-step-style.png)

Nun estas tempo aldoni kampojn al nia unua paŝo. Simple klaku al **Aldoni Novan Kampon** kaj elektu la tipon de sekcio, kiun vi volas.

![Butono Aldoni Novan Kampon](/img/config/checkout-form-add-field-button.png)![Falmenuo por elekto de kampotipo](/img/config/checkout-form-field-type-dropdown.png)

Ĉiu kampo havas malsamajn parametrojn por plenigi. Por ĉi tiu unua enigo, ni elektos la kampon **Uzantnomo**.

![Agordo de uzantnoma kampo](/img/config/checkout-form-username-content.png)![Parametroj de uzantnoma kampo](/img/config/checkout-form-username-visibility.png)![Aldonaj agordoj de uzantnoma kampo](/img/config/checkout-form-username-style.png)

Vi povas aldoni tiom da paŝoj kaj kampoj, kiom vi bezonas. Por montri viajn produktojn por ke viaj klientoj elektu unu, uzu la kampon Preztabelo. Se vi volas lasi viajn klientojn elekti ŝablonon, aldonu la kampon Ŝablona Elekto. Kaj tiel plu.

![Redaktilo de pagformularo kun kampo de ŝablona elekto](/img/config/checkout-form-with-template-field.png)

_**Noto:** Se vi kreas produkton post kreo de via pagformularo, vi devos aldoni la produkton en la sekcio Preztabelo. Se vi ne aldonas ĝin, la produkto ne aperos al viaj klientoj sur la registriĝa paĝo._

_**Noto 2:** uzantnomo, retpoŝto, pasvorto, reteja titolo, reteja URL, mendoresumo, pago kaj sendobutono estas devigaj kampoj por krei pagformularon._

Dum vi laboras pri via pagformularo, vi ĉiam povas uzi la butonon Antaŭrigardo por vidi kiel viaj klientoj vidos la formularon. Vi ankaŭ povas alterni inter vido kiel ekzistanta uzanto aŭ vizitanto.

![Butono Antaŭrigardo en la redaktilo de pagformularo](/img/config/checkout-form-preview-button.png)![Antaŭrigardo de pagformularo kiel vizitanto aŭ ekzistanta uzanto](/img/config/checkout-form-preview-modal.png)

Fine, ĉe **Altnivelaj Opcioj** vi povas agordi la mesaĝon por la paĝo **Dankon**, aldoni fragmentojn por spuri konvertiĝojn, aldoni propran CSS al via pagformularo aŭ limigi ĝin al certaj landoj.

![Altnivelaj Opcioj kun Dankon-paĝo, konvertiĝa spurado kaj propra CSS](/img/config/checkout-form-advanced.png)

Vi ankaŭ povas mane ebligi aŭ malebligi vian pagformularon per ŝalti/malŝalti ĉi tiun opcion en la dekstra kolumno, aŭ konstante forigi la formularon.

![Aktiva ŝaltilo kaj foriga opcio por pagformularo](/img/config/checkout-form-active.png)

Ne forgesu konservi vian pagformularon!

![Butono Konservi Pagformularon](/img/config/checkout-form-save.png)

Por akiri la shortcode de via formularo, klaku al **Generi Shortcode** kaj kopiu la rezulton montritan en la modala fenestro.

![Modalo Generi Shortcode kun shortcode por kopii](/img/config/checkout-form-editor.png)

_**Noto:** Vi devos aldoni ĉi tiun shortcode al via registriĝa paĝo por ke ĉi tiu pagformularo estu aldonita al ĝi._

## Antaŭelekti produktojn kaj ŝablonojn per URL-parametroj:

Se vi volas krei personecigitajn preztabelojn por viaj produktoj kaj antaŭelekti en la pagformularo la produkton aŭ ŝablonon, kiun via kliento elektas el via preztabelo aŭ ŝablonpaĝo, vi povas uzi URL-parametrojn por tio.

### **Por planoj:**

Iru al **Ultimate Multisite > Produktoj > Elektu planon**. Vi devus vidi la butonon **Klaku por kopii Kundivideblan Ligilon** ĉe la supro de la paĝo. Ĉi tiu estas la ligilo, kiun vi povas uzi por antaŭelekti ĉi tiun specifan planon en via pagformularo.

![Produkta paĝo kun butono de kundividebla ligilo](/img/config/products-list.png)

Rimarku, ke ĉi tiu kundividebla ligilo validas nur por **Planoj**. Vi ne povas uzi kundivideblajn ligilojn por pakaĵoj aŭ servoj.

### Por ŝablonoj:

Se vi volas antaŭelekti retejajn ŝablonojn en via pagformularo, vi povas uzi la parametron: **?template_id=X** en la URL de via registriĝa paĝo. La "X" devas esti anstataŭigita per la **ID-numero de la reteja ŝablono**. Por akiri ĉi tiun numeron, iru al **Ultimate Multisite > Retejoj**.

Klaku al **Administri** tuj sub la reteja ŝablono, kiun vi volas uzi. Vi vidos la SITE ID-numeron. Simple uzu ĉi tiun numeron por ĉi tiu specifa reteja ŝablono por ke ĝi estu antaŭelektita en via pagformularo. En nia kazo ĉi tie, la URL-parametro estus **?template_id=2**.

![Listo de retejoj montranta ID de reteja ŝablono](/img/config/site-templates-list.png)

Ni diru, ke nia retaĵa retejo estas [**www.mynetwork.com**](http://www.mynetwork.com) kaj nia registriĝa paĝo kun nia pagformularo troviĝas sur la paĝo **/register**. La tuta URL kun ĉi tiu reteja ŝablono antaŭelektita aspektos kiel [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Kaj se vi volas, vi povas antaŭelekti kaj produktojn kaj ŝablonojn por via pagformularo. Ĉio, kion vi bezonas fari, estas kopii la kundivideblan ligilon de la plano kaj alglui la ŝablonan parametron ĉe la fino. Ĝi aspektos kiel [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
