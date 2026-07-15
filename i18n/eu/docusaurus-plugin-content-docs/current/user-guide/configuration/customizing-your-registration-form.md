---
title: Zure erregistro-inprimakia pertsonalizatzea
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Zure erregistro-inprimakia pertsonalizatzea

Zure sarea WordPress plataforman eraikitako beste SaaS guztietatik berezia izan dadin, Ultimate Multisite-k zure erregistro- eta saio-hasiera orriak pertsonalizatzeko aukera ematen dizu gure **Checkout Forms** eginbidearekin.

Bezero berriak bihurtzen saiatzean ikuspegi desberdinekin esperimentatzeko modu erraz eta malguak badira ere, batez ere erregistro-inprimaki pertsonalizatuak sortzeko erabiltzen dira. Artikulu honen helburua hori nola egin dezakezun erakustea da.

## Saio-hasiera eta erregistro orriak: {#login-and-registration-pages}

Ultimate Multisite instalatzean, automatikoki saio-hasiera eta erregistro orri pertsonalizatuak sortzen ditu zure gune nagusian. Lehenetsitako orri hauek edozein unetan alda ditzakezu zure **Ultimate Multisite > Settings > Login & Registration** orrira joanda.

![Saio-hasiera eta erregistro ezarpenen orria](/img/config/settings-general.png)

Hona hemen saio-hasiera eta erregistro ezarpenen orriaren ikuspegi osoa:

![Saio-hasiera eta erregistro ezarpenen orri osoa](/img/config/settings-login-registration-full.png)

Ikus ditzagun **Login & Registration** orrian pertsonaliza ditzakezun aukeretako bakoitza:

  * **Gaitu erregistroa:** Aukera honek zure sareko erregistroa gaituko edo desgaituko du. Desaktibatuta badago, zure bezeroek ezin izango dute erregistratu eta zure produktuetara harpidetu.

  * **Gaitu email egiaztapena:** Aukera hau aktibatuta badago, doako plan batera edo probaldia duen ordaindutako plan batera harpidetzen diren bezeroek egiaztapen-email bat jasoko dute, eta egiaztapen-estekan klik egin beharko dute beren webguneak sortzeko.

  * **Lehenetsitako erregistro-orria:** Hau da erregistrorako lehenetsitako orria. Orrialde honek zure webgunean argitaratuta egon behar du eta erregistro-inprimaki bat izan behar du (checkout inprimaki gisa ere ezaguna), non zure bezeroak zure produktuetara harpidetuko diren. Nahi adina erregistro-orri eta checkout inprimaki sor ditzakezu; gogoratu checkout inprimakiaren shortcode-a erregistro-orrian jartzea, bestela ez baita agertuko.

  * **Erabili saio-hasiera orri pertsonalizatua:** Aukera honek saio-hasiera orri pertsonalizatu bat erabiltzeko aukera ematen dizu, lehenetsitako wp-login.php orriaz bestelakoa. Aukera hau aktibatuta badago, saio-hasierarako zein orri erabiliko den hauta dezakezu **Lehenetsitako saio-hasiera orria** aukeran (behean bertan).

  * **Jatorrizko saio-hasiera URLa lausotu (wp-login.php)** : Jatorrizko saio-hasiera URLa ezkutatu nahi baduzu, aukera hau aktiba dezakezu. Hau erabilgarria da indar gordin bidezko erasoak saihesteko. Aukera hau gaituta badago, Ultimate Multisite-k 404 errore bat bistaratuko du erabiltzaile bat jatorrizko wp-login.php estekara sartzen saiatzen denean

  * **Behartu gune-argitalpen sinkronoa:** Bezero bat sare bateko produktu batera harpidetu ondoren, zain dagoen gune berria sareko benetako gune bihurtu behar da. Argitalpen-prozesua Job Queue bidez gertatzen da, asinkronoki. Gaitu aukera hau argitalpena izen-ematearen eskaera berean gerta dadin behartzeko.

Orain, ikus ditzagun saio-hasiera eta erregistro prozesurako oraindik garrantzitsuak diren beste aukera batzuk. Login & registration orri bereko **Beste aukera batzuk** atalaren azpian daude:

  * **Lehenetsitako rola:** Hau da zure bezeroek izen-emate prozesuaren ondoren beren webgunean izango duten rola.

  * **Gaitu Jumper:** Administrazio-eremuan Jumper lasterbidea gaitzen du. Jumper-ek administratzaileei Ultimate Multisite pantailetara, sareko objektuetara eta onartutako beste helmuga batzuetara azkar jauzi egiteko aukera ematen die, menu guztietan zehar nabigatu gabe. Desaktibatu administrazio-interfazetik nabigazio azkarreko tresna hori ezkutatu nahi baduzu.

  * **Gehitu erabiltzaileak gune nagusira ere:** Aukera hau gaituz gero, erabiltzailea zure sareko gune nagusira ere gehituko da izen-emate prozesuaren ondoren. Aukera hau gaitzen baduzu, erabiltzaile hauen **lehenetsitako rola** zure webgunean ezartzeko aukera bat ere agertuko da behean bertan.

  * **Gaitu kontu anitz:** Baimendu erabiltzaileei zure sareko gune desberdinetan email helbide berarekin kontuak izatea. Aukera hau desaktibatuta badago, zure bezeroek ezin izango dute konturik sortu zure sarean exekutatzen diren beste webgune batzuetan email helbide berarekin.

Eta hori da pertsonaliza ditzakezun saio-hasiera eta erregistroarekin lotutako aukera guztia! Ez ahaztu zure ezarpenak gordetzea haiek editatzen amaitu ondoren.

## Erregistro-inprimaki anitz erabiltzea: {#using-multiple-registration-forms}

Ultimate Multisite 2.0-k checkout inprimakien editore bat eskaintzen du, nahi adina inprimaki sortzeko aukera ematen dizuna, eremu desberdinekin, eskaintzako produktuekin, eta abar.

Saio-hasiera eta erregistro orriak shortcode-ekin txertatuta daude: **[wu_login_form]** saio-hasiera orrian eta**[wu_checkout]** erregistro-orrirako. Erregistro-orria gehiago pertsonaliza dezakezu checkout inprimakiak eraikiz edo sortuz.

Eginbide honetara sartzeko, joan **Checkout Forms** menura, ezkerreko albo-barran.

![Checkout Forms menua albo-barran](/img/config/checkout-forms-list.png)

Orri honetan, dituzun checkout inprimaki guztiak ikus ditzakezu.

Berri bat sortu nahi baduzu, egin klik orriaren goiko aldeko **Gehitu Checkout Form** aukeran.

Abiapuntu gisa hiru aukera hauetako bat hauta dezakezu: urrats bakarra, urrats anitzekoa edo hutsa. Ondoren, egin klik **Joan Editorera** aukeran.

![Gehitu Checkout Form urrats bakarra, urrats anitzekoa edo hutsik aukerekin](/img/config/checkout-forms-list.png)

Bestela, dagoeneko dituzun inprimakiak editatu edo bikoiztu ditzakezu haien izenaren azpiko aukeretan klik eginez. Han, inprimakiaren shortcode-a kopiatzeko edo inprimakia ezabatzeko aukerak ere aurkituko dituzu.

![Checkout inprimakiaren gainetik pasatzean agertzen diren ekintzak: editatu, bikoiztu eta ezabatu](/img/config/checkout-form-hover-actions.png)

Urrats bakarra edo urrats anitzekoa hautatzen baduzu, checkout inprimakia dagoeneko aurrez beteta egongo da funtzionatzeko behar dituen oinarrizko urratsekin. Ondoren, nahi baduzu, urrats gehigarriak gehi diezazkiokezu.

### Checkout Form bat editatzea: {#editing-a-checkout-form}

Lehen aipatu dugun bezala, helburu desberdinetarako checkout inprimakiak sor ditzakezu. Adibide honetan erregistro-inprimaki batean lan egingo dugu.

Checkout inprimakiaren editorera nabigatu ondoren, eman izen bat zure inprimakiari (barne-erreferentziarako soilik erabiliko dena) eta slug bat (shortcakes sortzeko erabiltzen dena, adibidez).

![Checkout formulario-editorea izen eta slug eremuekin](/img/config/checkout-form-name-slug.png)

Formularioak urratsez eta eremuz osatuta daude. Urrats berri bat gehi dezakezu **Add New Checkout Step** sakatuta.

![Add New Checkout Step botoia](/img/config/checkout-form-add-step.png)

Leiho modalaren lehen fitxan, bete zure formularioaren urratsaren edukia. Eman ID bat, izen bat eta deskribapen bat. Elementu horiek batez ere barne-erabilerarako erabiltzen dira.

![Checkout urratsaren eduki-fitxa IDarekin, izenarekin eta deskribapenarekin](/img/config/checkout-form-step-content.png)

Ondoren, ezarri urratsaren ikusgaitasuna. Aukera hauen artean hauta dezakezu: **Always show** , **Only show for logged in users** edo **Only show for guests**.

![Checkout urratsaren ikusgaitasun-aukerak](/img/config/checkout-form-step-visibility.png)

Azkenik, konfiguratu urratsaren estiloa. Eremu hauek aukerakoak dira.

![Checkout urratsaren estilo-konfigurazioa](/img/config/checkout-form-step-style.png)

Orain, gure lehen urratsean eremuak gehitzeko unea da. Sakatu **Add New Field** eta hautatu nahi duzun atal mota.

![Add New Field botoia](/img/config/checkout-form-add-field-button.png)![Eremu mota hautatzeko goitibeherako menua](/img/config/checkout-form-field-type-dropdown.png)

Eremu bakoitzak betetzeko parametro desberdinak ditu. Lehen sarrera honetarako, **Username** eremua hautatuko dugu.

![Username eremuaren konfigurazioa](/img/config/checkout-form-username-content.png)![Username eremuaren parametroak](/img/config/checkout-form-username-visibility.png)![Username eremuaren ezarpen osagarriak](/img/config/checkout-form-username-style.png)

Behar adina urrats eta eremu gehi ditzakezu. Zure produktuak erakusteko, bezeroek bat aukera dezaten, erabili Pricing Table eremua. Zure bezeroei txantiloi bat aukeratzen utzi nahi badiezu, gehitu Template Selection eremua. Eta horrela jarraian.

![Checkout formulario-editorea template selection eremuarekin](/img/config/checkout-form-with-template-field.png)

_**Oharra:** Produktu bat sortzen baduzu zure checkout formularioa sortu ondoren, produktua Pricing table atalean gehitu beharko duzu. Gehitu ezean, produktua ez zaie zure bezeroei agertuko erregistro-orrian._

_**2. oharra:** username, email, password, site title, site URL, order summary, payment eta submit button nahitaezko eremuak dira checkout formulario bat sortzeko._

Zure checkout formularioan lanean ari zaren bitartean, Preview botoia erabil dezakezu beti zure bezeroek formularioa nola ikusiko duten ikusteko. Era berean, ikuspegia txandaka dezakezu lehendik dagoen erabiltzaile gisa edo bisitari gisa.

![Preview botoia checkout formulario-editorean](/img/config/checkout-form-preview-button.png)![Checkout formularioaren aurrebista bisitari edo lehendik dagoen erabiltzaile gisa](/img/config/checkout-form-preview-modal.png)

Azkenik, **Advanced Options** atalean **Thank You** orriko mezua konfiguratu dezakezu, bihurketak jarraitzeko snippet-ak gehitu, CSS pertsonalizatua gehitu zure checkout formularioari edo herrialde jakin batzuetara mugatu.

![Advanced Options Thank You orriarekin, bihurketa-jarraipenarekin eta CSS pertsonalizatuarekin](/img/config/checkout-form-advanced.png)

Zure checkout formularioa eskuz gaitu edo desgaitu ere egin dezakezu eskuineko zutabeko aukera hau aktibatuz edo desaktibatuz, edo formularioa betiko ezabatu.

![Aktibo/desaktibo aukera eta ezabatzeko aukera checkout formularioarentzat](/img/config/checkout-form-active.png)

Ez ahaztu zure checkout formularioa gordetzea!

![Save Checkout Form botoia](/img/config/checkout-form-save.png)

Zure formularioaren shortcode-a lortzeko, sakatu **Generate Shortcode** eta kopiatu leiho modalean erakutsitako emaitza.

![Generate Shortcode modala kopiatzeko shortcode-arekin](/img/config/checkout-form-editor.png)

_**Oharra:** Shortcode hau zure erregistro-orrian gehitu beharko duzu checkout formulario hau bertan gehituta egon dadin._

## Produktuak eta txantiloiak URL parametroen bidez aurrez hautatzea: {#pre-selecting-products-and-templates-via-url-parameters}

Zure produktuentzako prezio-taula pertsonalizatuak sortu nahi badituzu eta checkout formularioan zure bezeroak zure prezio-taulatik edo txantiloien orritik aukeratzen duen produktua edo txantiloia aurrez hautatu nahi baduzu, URL parametroak erabil ditzakezu horretarako.

### **Planetarako:** {#for-plans}

Joan **Ultimate Multisite > Products > Select a plan** atalera. Orriaren goialdean **Click to copy Shareable Link** botoia ikusi beharko zenuke. Esteka hau erabil dezakezu plan zehatz hau zure checkout formularioan aurrez hautatzeko.

![Produktu-orria esteka partekagarria kopiatzeko botoiarekin](/img/config/products-list.png)

Kontuan izan esteka partekagarri hau **Plans**-etarako bakarrik dela baliozkoa. Ezin dituzu esteka partekagarriak erabili pakete edo zerbitzuetarako.

### Txantiloietarako: {#for-templates}

Zure checkout formularioan gune-txantiloiak aurrez hautatu nahi badituzu, parametro hau erabil dezakezu: **?template_id=X** zure erregistro-orriaren URLan. "X" ordeztu behar da **gune-txantiloiaren ID zenbakiarekin**. Zenbaki hau lortzeko, joan **Ultimate Multisite > Sites** atalera.

Sakatu **Manage** erabili nahi duzun gune-txantiloiaren azpian. SITE ID zenbakia ikusiko duzu. Erabili zenbaki hau gune-txantiloi zehatz honetarako, zure checkout formularioan aurrez hautatuta egon dadin. Gure kasuan hemen, URL parametroa **?template_id=2** izango litzateke.

![Guneen zerrenda gune-txantiloiaren IDa erakutsiz](/img/config/site-templates-list.png)

Demagun gure sareko webgunea [**www.mynetwork.com**](http://www.mynetwork.com) dela eta gure checkout formularioa duen erregistro-orria **/register** orrian dagoela. Gune-txantiloi hau aurrez hautatuta duen URL osoa honela izango da: [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Eta nahi baduzu, produktuak eta txantiloiak biak aurrez hauta ditzakezu zure checkout formularioan. Egin behar duzun guztia planaren esteka partekagarria kopiatzea eta amaieran txantiloiaren parametroa itsastea da. Honela izango da: [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
