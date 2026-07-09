---
title: Äert Registréierungsformular upassen
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Deng Registréierungsformular upassen {#customizing-your-registration-form}

Fir däi Netzwierk eenzegaarteg ausgesinn ze loossen am Verglach mat all deenen anere SaaS, déi op der WordPress-Plattform gebaut sinn, erlaabt Ultimate Multisite dir, deng Registréierungs- a Login-Säite mat eiser **Checkout Forms**-Funktioun unzepassen.

Och wann se eng einfach a flexibel Manéier sinn, fir mat verschiddenen Usätz ze experimentéieren, wann ee probéiert nei Clienten ze konvertéieren, gi se meeschtens benotzt, fir personaliséiert Registréierungsformulairen ze erstellen. Dësen Artikel soll dir weisen, wéi s du dat maache kanns.

## Login- a Registréierungssäiten: {#login-and-registration-pages}

Bei der Installatioun vun Ultimate Multisite erstellt et automatesch personaliséiert Login- a Registréierungssäiten op denger Haaptsäit. Du kanns dës Standard-Säiten zu all Moment änneren, andeems s du op deng **Ultimate Multisite > Settings > Login & Registration** Säit gees.

![Login- a Registréierungs-Astellungssäit](/img/config/settings-general.png)

Hei ass eng komplett Vue vun der Login- a Registréierungs-Astellungssäit:

![Vollstänneg Login- a Registréierungs-Astellungssäit](/img/config/settings-login-registration-full.png)

Loosst eis all eenzel vun den Optiounen ukucken, déi s du op der **Login & Registration** Säit upasse kanns:

  * **Registréierung aktivéieren:** Dës Optioun aktivéiert oder deaktivéiert d’Registréierung an dengem Netzwierk. Wann se ausgeschalt ass, kënnen deng Clienten sech net registréieren an net op deng Produkter abonnéieren.

  * **E-Mail-Verifikatioun aktivéieren:** Wann dës Optioun ageschalt ass, kréien Clienten, déi e gratis Plang oder e bezuelte Plang mat enger Testperiod abonnéieren, eng Verifikatiouns-E-Mail a mussen op de Verifikatiounslink klicken, fir datt hir Websäiten erstallt ginn.

  * **Standard-Registréierungssäit:** Dëst ass d'Standard-Säit fir d’Registréierung. Dës Säit muss op denger Websäit publizéiert sinn an e Registréierungsformular hunn (och als Checkout Form bekannt) - wou deng Clienten deng Produkter abonnéieren. Du kanns esou vill Registréierungssäiten a Checkout Forms erstellen, wéi s du wëlls; denk just drun, de Checkout Form Shortcode op d’Registréierungssäit ze setzen, soss erschéngt en net.

  * **Benotzerdefinéiert Login-Säit benotzen:** Dës Optioun erlaabt dir, eng ugepasst Login-Säit ze benotzen, amplaz vun der Standard-wp-login.php-Säit. Wann dës Optioun ageschalt ass, kanns du auswielen, wéi eng Säit fir de Login benotzt gëtt, an der **Default login page** Optioun (direkt hei drënner).

  * **Déi ursprénglech Login-URL verstoppen (wp-login.php)** : Wann s du déi ursprénglech Login-URL verstoppe wëlls, kanns du dës Optioun aschalten. Dat ass nëtzlech, fir Brute-Force-Attacken ze verhënneren. Wann dës Optioun aktivéiert ass, weist Ultimate Multisite e 404-Feeler, wann e Benotzer probéiert, op den urspréngleche wp-login.php Link zouzegräifen

  * **Synchron Site-Publikatioun erzwingen:** Nodeems e Client e Produkt an engem Netzwierk abonnéiert, muss déi nei ofwaardend Säit an eng richteg Netzwierk-Säit ëmgewandelt ginn. De Publikatiounsprozess geschitt iwwer Job Queue, asynchron. Aktivéier dës Optioun, fir d’Publikatioun an där selwechter Ufro wéi d’Umeldung ze erzwingen.

Elo kucke mer aner Optiounen, déi nach ëmmer relevant fir de Login- a Registréierungsprozess sinn. Si stinn direkt ënner **Other options** op där selwechter Login & registration Säit:

  * **Standard-Roll:** Dëst ass d’Roll, déi deng Clienten op hirer Websäit nom Umeldungsprozess hunn.

  * **Jumper aktivéieren:** Aktivéiert d’Jumper-Ofkierzung am Administratiounsberäich. Jumper erlaabt Administrateuren, séier op Ultimate Multisite-Bildschirmer, Netzwierk-Objeten an aner ënnerstëtzt Ziler ze sprangen, ouni duerch all Menü ze browsen. Schalt et aus, wann s du léiwer dat séiert Navigatiounsinstrument aus der Administratiouns-Interface verstoppe wëlls.

  * **Benotzer och op d’Haaptsäit dobäisetzen:** Wann dës Optioun aktivéiert ass, gëtt de Benotzer nom Umeldungsprozess och op d’Haaptsäit vun dengem Netzwierk dobäigesat. Wann s du dës Optioun aktivéiers, erschéngt direkt hei drënner och eng Optioun, fir d’**Standard-Roll** vun dëse Benotzer op denger Websäit festzeleeën.

  * **Méi Konten aktivéieren:** Erlaabt Benotzer, Konten op verschiddene Säite vun dengem Netzwierk mat där selwechter E-Mail-Adress ze hunn. Wann dës Optioun aus ass, kënnen deng Clienten net mat där selwechter E-Mail-Adress e Kont op anere Websäiten erstellen, déi op dengem Netzwierk lafen.

An dat sinn all d’Optiounen am Zesummenhang mat Login a Registréierung, déi s du upasse kanns! Vergiess net, deng Astellungen ze späicheren, nodeems s du se fäerdeg geännert hues.

## Méi Registréierungsformulairë benotzen: {#using-multiple-registration-forms}

Ultimate Multisite 2.0 bitt e Checkout Form-Editor, deen dir erlaabt, esou vill Formulairen ze erstellen, wéi s du wëlls, mat verschiddene Felder, ugebuedene Produkter, asw.

Souwuel d’Login- wéi och d’Registréierungssäite si mat Shortcodes agebett: **[wu_login_form]** op der Login-Säit an**[wu_checkout]** fir d’Registréierungssäit. Du kanns d’Registréierungssäit weider upassen, andeems s du Checkout Forms baus oder erstellst.

Fir op dës Funktioun zouzegräifen, géi an de **Checkout Forms** Menü, an der lénker Säiteleescht.

![Checkout Forms Menü an der Säiteleescht](/img/config/checkout-forms-list.png)

Op dëser Säit kanns du all d’Checkout Forms gesinn, déi s du hues.

Wann s du en neien erstelle wëlls, klick einfach uewen op der Säit op **Add Checkout Form**.

Du kanns eng vun dësen dräi Optiounen als Startpunkt auswielen: eenzelne Schrëtt, méi Schrëtt oder eidel. Klick dann op **Go to the Editor**.

![Checkout Form dobäisetzen mat Optiounen eenzelne Schrëtt, méi Schrëtt oder eidel](/img/config/checkout-forms-list.png)

Alternativ kanns du d’Formulairen, déi s du schonn hues, änneren oder duplizéieren, andeems s du op d’Optiounen ënner hirem Numm klicks. Do fënns du och d’Optiounen, fir de Shortcode vum Formular ze kopéieren oder de Formular ze läschen.

![Checkout Form Hover-Aktioune mat änneren, duplizéieren a läschen](/img/config/checkout-form-hover-actions.png)

Wann s du eenzelne Schrëtt oder méi Schrëtt auswiels, ass de Checkout Form scho mat de Basis-Schrëtt virbefëllt, fir datt en funktionéiert. Duerno kanns du, wann s du wëlls, zousätzlech Schrëtt dobäisetzen.

### E Checkout Form änneren: {#editing-a-checkout-form}

Wéi mer virdru gesot hunn, kanns du Checkout Forms fir verschidden Zwecker erstellen. An dësem Beispill schaffe mer un engem Registréierungsformular.

Nodeems s du an de Checkout Form-Editor navigéiert hues, ginn dengem Formular en Numm (deen nëmme fir intern Referenz benotzt gëtt) an e Slug (benotzt fir zum Beispill Shortcodes ze erstellen).

![Checkout-Formulaire-Editor mat Numm- a Slug-Felder](/img/config/checkout-form-name-slug.png)

Formulaire bestinn aus Schrëtt a Felder. Dir kënnt en neie Schrëtt derbäisetzen, andeems Dir op **Neie Checkout-Schrëtt derbäisetzen** klickt.

![Knäppchen Neie Checkout-Schrëtt derbäisetzen](/img/config/checkout-form-add-step.png)

Am éischten Tab vun der Modalfënster fëllt Dir den Inhalt vum Schrëtt vun Ärem Formulaire aus. Gitt him eng ID, en Numm an eng Beschreiwung. Dës Elementer ginn haaptsächlech intern benotzt.

![Checkout-Schrëtt-Inhaltstab mat ID, Numm a Beschreiwung](/img/config/checkout-form-step-content.png)

Als Nächst setzt Dir d'Visibilitéit vum Schrëtt fest. Dir kënnt tëscht **Ëmmer weisen** , **Nëmme fir ageloggt Benotzer weisen** oder **Nëmme fir Gäscht weisen** wielen.

![Visibilitéitsoptioune fir Checkout-Schrëtt](/img/config/checkout-form-step-visibility.png)

Zum Schluss konfiguréiert Dir de Stil vum Schrëtt. Dëst sinn optional Felder.

![Stilkonfiguratioun fir Checkout-Schrëtt](/img/config/checkout-form-step-style.png)

Elo ass et Zäit, Felder bei eisen éischte Schrëtt derbäizesetzen. Klickt einfach op **Neit Feld derbäisetzen** a wielt den Typ vu Sektioun, deen Dir wëllt.

![Knäppchen Neit Feld derbäisetzen](/img/config/checkout-form-add-field-button.png)![Dropdown fir Feldtyp-Auswiel](/img/config/checkout-form-field-type-dropdown.png)

All Feld huet verschidde Parameteren, déi ausgefëllt musse ginn. Fir dësen éischten Entrée wäerte mir d'Feld **Benotzernumm** auswielen.

![Konfiguratioun vum Benotzernumm-Feld](/img/config/checkout-form-username-content.png)![Parameteren vum Benotzernumm-Feld](/img/config/checkout-form-username-visibility.png)![Zousätzlech Astellunge vum Benotzernumm-Feld](/img/config/checkout-form-username-style.png)

Dir kënnt esou vill Schrëtt a Felder derbäisetzen, wéi Dir braucht. Fir Är Produkter unzeweisen, fir datt Är Clienten ee kënnen auswielen, benotzt d'Präistabell-Feld. Wann Dir Är Clienten eng Schabloun wiele loosse wëllt, setzt d'Feld Schablounauswiel derbäi. An esou weider.

![Checkout-Formulaire-Editor mat Schablounauswiel-Feld](/img/config/checkout-form-with-template-field.png)

_**Notiz:** Wann Dir e Produkt erstellt, nodeems Dir Äre Checkout-Formulaire erstallt hutt, musst Dir d'Produkt an der Präistabell-Sektioun derbäisetzen. Wann Dir et net derbäisetzt, erschéngt d'Produkt net fir Är Clienten op der Registréierungssäit._

_**Notiz 2:** Benotzernumm, E-Mail, Passwuert, Säitentitel, Säit-URL, Bestellungsresumé, Bezuelung an Ofschéck-Knäppchen si obligatoresch Felder, fir e Checkout-Formulaire ze erstellen._

Wärend Dir un Ärem Checkout-Formulaire schafft, kënnt Dir ëmmer de Virschau-Knäppchen benotzen, fir ze gesinn, wéi Är Clienten de Formulaire gesinn. Dir kënnt och tëscht der Vue als bestehende Benotzer oder als Visiteur wiesselen.

![Virschau-Knäppchen am Checkout-Formulaire-Editor](/img/config/checkout-form-preview-button.png)![Checkout-Formulaire-Virschau als Visiteur oder bestehende Benotzer](/img/config/checkout-form-preview-modal.png)

Zum Schluss kënnt Dir ënner **Fortgeschratt Optiounen** de Message fir d'**Merci**-Säit konfiguréieren, Snippets derbäisetzen, fir Konversiounen ze verfollegen, personaliséiert CSS bei Äre Checkout-Formulaire derbäisetzen oder en op bestëmmte Länner beschränken.

![Fortgeschratt Optiounen mat Merci-Säit, Konversiounsverfolgung a personaliséiertem CSS](/img/config/checkout-form-advanced.png)

Dir kënnt Äre Checkout-Formulaire och manuell aktivéieren oder deaktivéieren, andeems Dir dës Optioun an der rietser Kolonn ëmschalt, oder de Formulaire permanent läschen.

![Aktiv-Ëmschalter a Läschoptioun fir Checkout-Formulaire](/img/config/checkout-form-active.png)

Vergiesst net, Äre Checkout-Formulaire ze späicheren!

![Knäppchen Checkout-Formulaire späicheren](/img/config/checkout-form-save.png)

Fir de Shortcode vun Ärem Formulaire ze kréien, klickt op **Shortcode generéieren** a kopéiert d'Resultat, dat an der Modalfënster ugewise gëtt.

![Modal fir Shortcode ze generéiere mat Shortcode fir ze kopéieren](/img/config/checkout-form-editor.png)

_**Notiz:** Dir musst dëse Shortcode op Är Registréierungssäit derbäisetzen, fir datt dëse Checkout-Formulaire derbäigesat gëtt._

## Produkter a Schablounen iwwer URL-Parameteren viraus auswielen: {#pre-selecting-products-and-templates-via-url-parameters}

Wann Dir personaliséiert Präistabelle fir Är Produkter erstelle wëllt an am Checkout-Formulaire de Produkt oder d'Schabloun viraus auswiele wëllt, déi Äre Client vun Ärer Präistabell oder Schablounesäit auswielt, kënnt Dir URL-Parameteren dofir benotzen.

### **Fir Pläng:** {#for-plans}

Gitt op **Ultimate Multisite > Produkter > E Plang auswielen**. Dir sollt de Knäppchen **Klickt fir de deelbare Link ze kopéieren** uewen op der Säit gesinn. Dëst ass de Link, deen Dir benotze kënnt, fir dëse spezifesche Plang op Ärem Checkout-Formulaire viraus auszewielen.

![Produktsäit mat deelbarem Link-Knäppchen](/img/config/products-list.png)

Notéiert, datt dësen deelbare Link nëmme fir **Pläng** gëlteg ass. Dir kënnt deelbar Linken net fir Paketer oder Servicer benotzen.

### Fir Schablounen: {#for-templates}

Wann Dir Säiteschablounen op Ärem Checkout-Formulaire viraus auswiele wëllt, kënnt Dir de Parameter benotzen: **?template_id=X** op der URL vun Ärer Registréierungssäit. Den "X" muss duerch d'**ID-Nummer vun der Säiteschabloun** ersat ginn. Fir dës Nummer ze kréien, gitt op **Ultimate Multisite > Säiten**.

Klickt op **Verwalten** direkt ënnert der Säiteschabloun, déi Dir benotze wëllt. Dir gesitt d'SITE ID-Nummer. Benotzt einfach dës Nummer fir dës spezifesch Säiteschabloun, fir se op Ärem Checkout-Formulaire viraus auswielen ze loossen. An eisem Fall hei wier den URL-Parameter **?template_id=2**.

![Säitelëscht mat Säiteschabloun-ID](/img/config/site-templates-list.png)

Loosst eis unhuelen, eis Netzwierk-Websäit ass [**www.mynetwork.com**](http://www.mynetwork.com) an eis Registréierungssäit mat eisem Checkout-Formulaire läit op der **/register**-Säit. Déi ganz URL mat dëser viraus ausgewielter Säiteschabloun gesäit esou aus: [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

A wann Dir wëllt, kënnt Dir souwuel Produkter wéi och Schablounen an Ärem Checkout-Formulaire viraus auswielen. Alles, wat Dir maache musst, ass den deelbare Link vum Plang ze kopéieren an de Schabloun-Parameter um Enn derbäizesetzen. Et gesäit esou aus: [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
