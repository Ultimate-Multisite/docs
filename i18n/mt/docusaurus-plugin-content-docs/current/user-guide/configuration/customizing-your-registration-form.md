---
title: Tippersonalizza l-Formola tar-Reġistrazzjoni Tiegħek
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Tippersonalizza l-Formola tar-Reġistrazzjoni tiegħek {#customizing-your-registration-form}

Biex in-network tiegħek jidher uniku meta mqabbel mas-SaaS l-oħra kollha mibnija fuq il-pjattaforma WordPress, Ultimate Multisite jippermettilek tippersonalizza l-paġni tar-reġistrazzjoni u tal-login tiegħek bil-karatteristika tagħna **Checkout Forms**.

Għalkemm huma mod faċli u flessibbli biex tesperimenta b’approċċi differenti meta tipprova tikkonverti klijenti ġodda, l-aktar li jintużaw huwa biex jinħolqu formoli tar-reġistrazzjoni personalizzati. Dan l-artiklu għandu l-għan li jurik kif tista’ tagħmel dan.

## Paġni tal-login u tar-reġistrazzjoni: {#login-and-registration-pages}

Meta tinstalla Ultimate Multisite, dan joħloq awtomatikament paġni personalizzati tal-login u tar-reġistrazzjoni fuq is-sit ewlieni tiegħek. Tista’ tibdel dawn il-paġni predefiniti fi kwalunkwe ħin billi tmur fil-paġna **Ultimate Multisite > Settings > Login & Registration** tiegħek.

![Paġna tas-settings tal-Login u r-Reġistrazzjoni](/img/config/settings-general.png)

Hawnhekk hawn dehra sħiħa tal-paġna tas-settings tal-login u r-reġistrazzjoni:

![Paġna sħiħa tas-settings tal-Login u r-Reġistrazzjoni](/img/config/settings-login-registration-full.png)

Ejja nagħtu ħarsa lejn kull waħda mill-għażliet li tista’ tippersonalizza fuq il-paġna **Login & Registration**:

  * **Ippermetti r-reġistrazzjoni:** Din l-għażla se tippermetti jew tiddiżattiva r-reġistrazzjoni fuq in-network tiegħek. Jekk tkun mitfija, il-klijenti tiegħek ma jkunux jistgħu jirreġistraw u jabbonaw għall-prodotti tiegħek.

  * **Ippermetti l-verifika bl-email:** Jekk din l-għażla tkun mixgħula, il-klijenti li jabbonaw għal pjan b’xejn jew pjan imħallas b’perjodu ta’ prova jirċievu email ta’ verifika u jkollhom jikklikkjaw fuq il-link tal-verifika biex jinħolqu s-siti web tagħhom.

  * **Paġna predefinita tar-reġistrazzjoni:** Din hija l-paġna predefinita għar-reġistrazzjoni. Din il-paġna trid tkun ippubblikata fuq is-sit web tiegħek u jkollha formola tar-reġistrazzjoni (magħrufa wkoll bħala checkout form) - fejn il-klijenti tiegħek jabbonaw għall-prodotti tiegħek. Tista’ toħloq kemm trid paġni tar-reġistrazzjoni u checkout forms, ftakar biss li tpoġġi l-shortcode tal-checkout form fuq il-paġna tar-reġistrazzjoni, inkella ma tidhirx.

  * **Uża paġna tal-login personalizzata:** Din l-għażla tippermettilek tuża paġna tal-login personalizzata, differenti mill-paġna predefinita wp-login.php. Jekk din l-għażla tkun mixgħula, tista’ tagħżel liema paġna tintuża għall-login fl-għażla **Paġna predefinita tal-login** (eżatt taħt).

  * **Aħbi l-url oriġinali tal-login (wp-login.php)** : Jekk trid taħbi l-URL oriġinali tal-login, tista’ tixgħel din l-għażla. Dan huwa utli biex jiġu evitati attakki brute-force. Jekk din l-għażla tkun attivata, Ultimate Multisite se juri żball 404 meta utent jipprova jaċċessa l-link oriġinali wp-login.php

  * **Ġiegħel il-pubblikazzjoni sinkronika tas-sit:** Wara li klijent jabbonaw għal prodott fuq network, is-sit il-ġdid pendenti jrid jiġi kkonvertit f’sit reali tan-network. Il-proċess tal-pubblikazzjoni jsir permezz ta’ Job Queue, b’mod asinkronu. Ippermetti din l-għażla biex iġġiegħel il-pubblikazzjoni sseħħ fl-istess talba bħas-signup.

Issa, ejja naraw għażliet oħra li għadhom rilevanti għall-proċess tal-login u tar-reġistrazzjoni. Dawn jinsabu eżatt taħt **Għażliet oħra** fl-istess paġna Login & registration:

  * **Rwol predefinit:** Dan huwa r-rwol li l-klijenti tiegħek se jkollhom fuq is-sit web tagħhom wara l-proċess tas-signup.

  * **Ippermetti Jumper:** Jattiva s-shortcut Jumper fiż-żona tal-amministrazzjoni. Jumper iħalli lill-amministraturi jaqbżu malajr għal skrins ta’ Ultimate Multisite, oġġetti tan-network, u destinazzjonijiet oħra appoġġjati mingħajr ma jibbrawżjaw kull menu. Itfih jekk tippreferi taħbi dik l-għodda ta’ navigazzjoni rapida mill-interface tal-amministrazzjoni.

  * **Żid l-utenti wkoll mas-sit ewlieni:** Meta tattiva din l-għażla, l-utent jiżdied ukoll mas-sit ewlieni tan-network tiegħek wara l-proċess tas-signup. Jekk tattiva din l-għażla, għażla biex tissettja r-**rwol predefinit** ta’ dawn l-utenti fuq is-sit web tiegħek tidher ukoll eżatt taħt.

  * **Ippermetti kontijiet multipli:** Ħalli lill-utenti jkollhom kontijiet f’siti differenti tan-network tiegħek bl-istess indirizz tal-email. Jekk din l-għażla tkun mitfija, il-klijenti tiegħek ma jkunux jistgħu joħolqu kont fuq siti web oħra li jaħdmu fuq in-network tiegħek bl-istess indirizz tal-email.

U dawn huma l-għażliet kollha relatati mal-login u r-reġistrazzjoni li tista’ tippersonalizza! Tinsiex issalva s-settings tiegħek wara li tispiċċa teditjahom.

## Użu ta’ formoli tar-reġistrazzjoni multipli: {#using-multiple-registration-forms}

Ultimate Multisite 2.0 joffri editur tal-checkout form li jippermettilek toħloq kemm trid formoli, b’oqsma differenti, prodotti offruti, eċċ.

Kemm il-paġni tal-login kif ukoll dawk tar-reġistrazzjoni huma inkorporati b’shortcodes: **[wu_login_form]** fuq il-paġna tal-login u**[wu_checkout]** għall-paġna tar-reġistrazzjoni. Tista’ tippersonalizza aktar il-paġna tar-reġistrazzjoni billi tibni jew toħloq checkout forms.

Biex taċċessa din il-karatteristika, mur fil-menu **Checkout Forms**, fuq il-sidebar tax-xellug.

![Menu Checkout Forms fis-sidebar](/img/config/checkout-forms-list.png)

Fuq din il-paġna, tista’ tara l-checkout forms kollha li għandek.

Jekk trid toħloq waħda ġdida, ikklikkja biss fuq **Żid Checkout Form** fil-parti ta’ fuq tal-paġna.

Tista’ tagħżel waħda minn dawn it-tliet għażliet bħala l-punt tat-tluq tiegħek: pass wieħed, diversi passi jew vojta. Imbagħad, ikklikkja biex **Tmuri fl-Editur**.

![Żid Checkout Form b’għażliet ta’ pass wieħed, diversi passi, jew vojta](/img/config/checkout-forms-list.png)

Inkella, tista’ teditja jew tidduplika l-formoli li diġà għandek billi tikklikkja fuq l-għażliet taħt isimha. Hemmhekk, issib ukoll l-għażliet biex tikkopja s-shortcode tal-formola jew biex tħassar il-formola.

![Azzjonijiet meta tgħaddi fuq checkout form b’editjar, duplikazzjoni, u tħassir](/img/config/checkout-form-hover-actions.png)

Jekk tagħżel pass wieħed jew diversi passi, il-checkout form tkun diġà mimlija minn qabel bil-passi bażiċi biex taħdem. Imbagħad, jekk trid, tista’ żżid magħha passi żejda.

### Editjar ta’ Checkout Form: {#editing-a-checkout-form}

Kif semmejna qabel, tista’ toħloq checkout forms għal skopijiet differenti. F’dan l-eżempju se naħdmu fuq formola tar-reġistrazzjoni.

Wara li tinnaviga lejn l-editur tal-checkout form, agħti isem lill-formola tiegħek (li jintuża għal referenza interna biss) u slug (użat biex jinħolqu shortcakes, pereżempju).

![Editur tal-formola tal-checkout b’oqsma tal-isem u slug](/img/config/checkout-form-name-slug.png)

Il-formoli huma magħmula minn passi u oqsma. Tista’ żżid pass ġdid billi tikklikkja fuq **Żid Pass Ġdid tal-Checkout**.

![Buttuna Żid Pass Ġdid tal-Checkout](/img/config/checkout-form-add-step.png)

Fuq l-ewwel tab tat-tieqa modal, imla l-kontenut tal-pass tal-formola tiegħek. Agħtih ID, isem u deskrizzjoni. Dawn l-oġġetti jintużaw l-aktar internament.

![Tab tal-kontenut tal-pass tal-checkout b’ID, isem, u deskrizzjoni](/img/config/checkout-form-step-content.png)

Wara, issettja l-viżibbiltà tal-pass. Tista’ tagħżel bejn **Dejjem uri**, **Uri biss għal utenti illoggjati** jew **Uri biss għall-mistednin**.

![Għażliet tal-viżibbiltà tal-pass tal-checkout](/img/config/checkout-form-step-visibility.png)

Fl-aħħar, ikkonfigura l-istil tal-pass. Dawn huma oqsma fakultattivi.

![Konfigurazzjoni tal-istil tal-pass tal-checkout](/img/config/checkout-form-step-style.png)

Issa, wasal iż-żmien li nżidu oqsma mal-ewwel pass tagħna. Sempliċement ikklikkja fuq **Żid Qasam Ġdid** u agħżel it-tip ta’ sezzjoni li trid.

![Buttuna Żid Qasam Ġdid](/img/config/checkout-form-add-field-button.png)![Dropdown tal-għażla tat-tip ta’ qasam](/img/config/checkout-form-field-type-dropdown.png)

Kull qasam għandu parametri differenti li jridu jimtlew. Għal din l-ewwel entrata, se nagħżlu l-qasam **Username**.

![Konfigurazzjoni tal-qasam Username](/img/config/checkout-form-username-content.png)![Parametri tal-qasam Username](/img/config/checkout-form-username-visibility.png)![Settings addizzjonali tal-qasam Username](/img/config/checkout-form-username-style.png)

Tista’ żżid kemm passi u oqsma teħtieġ. Biex turi l-prodotti tiegħek sabiex il-klijenti tiegħek jagħżlu wieħed, uża l-qasam Tabella tal-Prezzijiet. Jekk trid tħalli lill-klijenti tiegħek jagħżlu mudell, żid il-qasam Għażla tal-Mudell. U hekk ikompli.

![Editur tal-formola tal-checkout b’qasam tal-għażla tal-mudell](/img/config/checkout-form-with-template-field.png)

_**Nota:** Jekk toħloq prodott wara li tkun ħloqt il-formola tal-checkout tiegħek, ikollok bżonn iżżid il-prodott fit-taqsima tat-Tabella tal-Prezzijiet. Jekk ma żżidux, il-prodott ma jidhirx lill-klijenti tiegħek fuq il-paġna tar-reġistrazzjoni._

_**Nota 2:** username, email, password, titlu tas-sit, URL tas-sit, sommarju tal-ordni, ħlas, u buttuna ta’ sottomissjoni huma oqsma obbligatorji biex tinħoloq formola tal-checkout._

Waqt li tkun qed taħdem fuq il-formola tal-checkout tiegħek, tista’ dejjem tuża l-buttuna Preview biex tara kif il-klijenti tiegħek se jaraw il-formola. Tista’ wkoll talterna bejn dehra bħala utent eżistenti jew viżitatur.

![Buttuna Preview fuq l-editur tal-formola tal-checkout](/img/config/checkout-form-preview-button.png)![Preview tal-formola tal-checkout bħala viżitatur jew utent eżistenti](/img/config/checkout-form-preview-modal.png)

Fl-aħħar, fuq **Għażliet Avvanzati** tista’ tikkonfigura l-messaġġ għall-paġna **Grazzi**, iżżid snippets biex issegwi l-konverżjonijiet, iżżid CSS personalizzat mal-formola tal-checkout tiegħek jew tirrestrinġiha għal ċerti pajjiżi.

![Għażliet Avvanzati b’paġna Grazzi, traċċar tal-konverżjonijiet, u CSS personalizzat](/img/config/checkout-form-advanced.png)

Tista’ wkoll tattiva jew tiddiżattiva manwalment il-formola tal-checkout tiegħek billi tbiddel din l-għażla fil-kolonna tal-lemin, jew tħassar il-formola b’mod permanenti.

![Toggle attiv u għażla tat-tħassir għall-formola tal-checkout](/img/config/checkout-form-active.png)

Tinsiex issalva l-formola tal-checkout tiegħek!

![Buttuna Issejvja l-Formola tal-Checkout](/img/config/checkout-form-save.png)

Biex tikseb ix-shortcode tal-formola tiegħek ikklikkja fuq **Iġġenera Shortcode** u kkupja r-riżultat muri fit-tieqa modal.

![Modal Iġġenera Shortcode b’shortcode biex tikkopja](/img/config/checkout-form-editor.png)

_**Nota:** Ikollok bżonn iżżid dan ix-shortcode mal-paġna tar-reġistrazzjoni tiegħek sabiex din il-formola tal-checkout tiżdied magħha._

## Għażla minn qabel ta’ prodotti u mudelli permezz ta’ parametri tal-URL: {#pre-selecting-products-and-templates-via-url-parameters}

Jekk trid toħloq tabelli tal-prezzijiet personalizzati għall-prodotti tiegħek u tagħżel minn qabel fuq il-formola tal-checkout il-prodott jew il-mudell li l-klijent tiegħek jagħżel mit-tabella tal-prezzijiet jew mill-paġna tal-mudelli tiegħek, tista’ tuża parametri tal-URL għal dan.

### **Għall-pjanijiet:** {#for-plans}

Mur għal **Ultimate Multisite > Prodotti > Agħżel pjan**. Għandek tara l-buttuna **Ikklikkja biex tikkopja Link li tista’ Tinqasam** fil-quċċata tal-paġna. Din hija l-link li tista’ tuża biex tagħżel minn qabel dan il-pjan speċifiku fuq il-formola tal-checkout tiegħek.

![Paġna tal-prodott b’buttuna ta’ link li tista’ tinqasam](/img/config/products-list.png)

Innota li din il-link li tista’ tinqasam hija valida biss għal **Pjanijiet**. Ma tistax tuża links li jistgħu jinqasmu għal pakketti jew servizzi.

### Għall-mudelli: {#for-templates}

Jekk trid tagħżel minn qabel mudelli tas-sit fuq il-formola tal-checkout tiegħek, tista’ tuża l-parametru: **?template_id=X** fuq il-URL tal-paġna tar-reġistrazzjoni tiegħek. L-"X" trid tinbidel bin-**numru tal-ID tal-mudell tas-sit**. Biex tikseb dan in-numru, mur għal **Ultimate Multisite > Siti**.

Ikklikkja fuq **Immaniġġja** eżatt taħt il-mudell tas-sit li trid tuża. Se tara n-numru SITE ID. Sempliċement uża dan in-numru għal dan il-mudell tas-sit speċifiku biex jiġi magħżul minn qabel fuq il-formola tal-checkout tiegħek. Fil-każ tagħna hawn, il-parametru tal-URL ikun **?template_id=2**.

![Lista tas-siti li turi l-ID tal-mudell tas-sit](/img/config/site-templates-list.png)

Ejja ngħidu li l-websajt tan-network tagħna hija [**www.mynetwork.com**](http://www.mynetwork.com) u l-paġna tar-reġistrazzjoni tagħna bil-formola tal-checkout tagħna tinsab fuq il-paġna **/register**. Il-URL kollu b’dan il-mudell tas-sit magħżul minn qabel se jidher hekk [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

U jekk trid, tista’ tagħżel minn qabel kemm prodotti kif ukoll mudelli għall-formola tal-checkout tiegħek. Kull ma trid tagħmel hu li tikkopja l-link li tista’ tinqasam tal-pjan u twaħħal il-parametru tal-mudell fl-aħħar. Se jidher hekk [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
