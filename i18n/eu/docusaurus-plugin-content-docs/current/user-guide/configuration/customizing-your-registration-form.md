---
title: Zure Registrazio Formularen Sobiztzea
sidebar_position: 17
_i18n_hash: 13f72671d55f48becd6bd89f6571f111
---
# Irekiaren Formak Erregi

Ultimate Multisite-an, WordPress platormaan erabilizko beste SaaS-ek gertutakoak irudi ezberdin daitezkeen jakinarazpen eta login zeinetasuna (registration) formakarekin modu erregi daitezke.

Bestea, irudi ezberdinetara erabiliziek eta berri kliuntzak konvertatzea proposatzean erregi dituzten metodo batzuk erérimentatu dezakezuenez, horrek gure **Checkout Forms** funtzioaren bestelako apropiekitezkariak ematen du, baina ez da irudi zeinetasuna formakare pertsonalizatua egiteko eta erabiltzeko. Horren artean, testu hau zer egin dezakezu eta ondo egin dezakezu eta erregi dituzten.

## Login eta zeinetasuna zeinetasun:

Ultimate Multisite instalatu beharko du, horrek auto-kreatura egiten du login eta zeinetasuna zeinetasunak osoa (main site) dauden. Horren artean **Ultimate Multisite > Settings > Login & Registration** laperarean jarraituz, horiek default formakarekin aldatu dezakezu.

![Login and Registration settings page](/img/config/settings-general.png)

Hau da login eta zeinetasuna zeinetasunaren oso ikuspenaren:

![Login and Registration settings full page](/img/config/settings-login-registration-full.png)

**Login & Registration** laperaan erregi dituzten opsioak guztiak egiaztu dezagun:

  * **Enable registration (Zeinetasuna aktiboa ematea):** Horrek irudi zeinetasunaren aktiboa edo inaktiboa egiten du. Hau horrekin deshabilitatuta dutelako, klienteak ez dira erregi eta gure produkzioetara abonatu dezaten.

  * **Enable email verification (Email biderbatzera aktiboa ematea):** Horrek aktiboa dutelako, libre plan edo trial barkontu duen laburua abonen klienteak email biderbatzera bat hartuko du eta horiek bere zeinetasunetara websiteak kria egin dezaten.

* **Default registrazio zehatua (Default registration page):** Hau da pagina default-a registroari. Le honen paginaren behar duzu publikatu egin osoan eta formulario bat (checkout form gisa ere) hartzen du, jatorri hauek dira aholkuak produktu hauek ereiteko. Zerbait registro zehatua eta checkout form gehiago ez daude sortu dezakezu, baina gogoratu duzu, checkout form-aren shortcodea registro paginaren ondorekin ipotzatu behar duzu, bestartean ez erabiliko da.

  * **Erabendu login paginatu osoa (Use custom login page):** Hauko opsioak lehen aurrera dagoen wp-login.php paginaren bestalde erabiltzen dituzilearekin login paginatu oso bat erabiltzea gautatzen du. Hau ondo izanez, **Default login page** opsioan (hemen ondorekin) zer pagina izango da login-era erabiltzeko aukerak emateko.

  * **Obfuskatu URL-a orihala (wp-login.php)**: Zerbiak orihala URL-a hori gizotzea nahi duzu, hau ondo izanez opsioa ondo izanez. Hau brute-force atakak ezarretzeko garrantzitsu da. Hau aktiboa izanez, Ultimate Multisite iradokizuna erabiltzen duenean erabiltzaile bat orihala wp-login.php linkera erabiliko jarraitu beharko du 404 errora eradokizuna.

  * **Forzatu publikazio sinxrono (Force synchronous site publication):** Kudeak produktu bat networkan ereitean, paginaren iragailua garrantzitsu da. Publikazio prozesua Job Queue-n bidez asinkrona egiten da. Hau aktiboa izanez, publikazioa signup-arekin pareko eskatzean forzatu duzu.

Aurrera, login eta registro prozesuari pentsamendu duen beste opsioak ikustu dezidezu. Horrek Login & registration paginaren **Other options** ondorekin dagozkatu dira:

  * **Role defaulta (Default role):** Hau da iragailuak signup prosesuaren ondoren bere websitean izango duen role-a.

* **Jumper aktiboa:** Aktiboa da Jumper shortcut-a administrazio erabilgarrian. Jumper-ek administraulariak Ultimate Multisite ekranetara, network object-et beste aukera dituzten lupticari etorretan ez aurkituz, hasten jakiteko laguntzen du. Horrek ez dutra menu batzuk ez aurkitu nahi du interesatzen ari zaitutik, hori ezarri da.

* **Erabiltzaileak nagusi web-aren ere gehitu:** Horrek aukera aktiboa egiteak erabilzailea network-aren nagusi web-aren ere gehiatzen du signup prosesuaren ondoren. Horrek aktiboa egiteko, horiek erabiltzaileek website-an **default role** bat emateko aukera ere hemen aipotea da.

* **Kontuak batez baino gehiak aktiboa:** Erabilzaileek network-aren beste web-arrak kontuak bidi ezberdinetan email-direccion berriago bereana izango du. Horrek ez dutra, hori ez dutelako aukera da, erabiltzaileek network-aren beste web-arrak kontu dezatten email-direccion berriago bereana izango du.

Hau da login eta registration-ekin lotutako aukerak zehatz da hauek joan jakiteko! Editatu beharraren ondoren aukerak saldatu beharko duzu.

## Registration formetue gehiak erabiliz:

Ultimate Multisite 2.0-ek checkout form editor bat ematen du, horrek zerbait forma batzuk ezberdinak, produkzioak, eta beste irudiak ere barne sortzeko aukera litzake.

Login eta registration eskuari **[wu_login_form]** eta registration eskuari **[wu_checkout]** shortcodes-ek barne ematen dira. Registration eskuari gehiago forma batzuk sortu edo datu sortzea mediante checkout forms sortzeko aukera oso garrantzitsia da.

Haukarri egiteko, eskuratu **Checkout Forms** menu-ra, eskuratu-barnean dagoen.

![Checkout Forms menu in the sidebar](/img/config/checkout-forms-list.png)

Hau trangan, forma guztietak ikusi ez duzu.

Bestea sortu nahi du, trangaren gainean **Add Checkout Form** (Checkout Forma gehiago sortzea) klikatu beharko duzu.

Zerbi horiek tresko bat irudi: single step (bat-etapur), multi-step (bertsapetak) edo blank (ezia). Horrek ondoren klik egin behar duzu **Go to the Editor** (Editorra jarraitu).

![Add Checkout Form with single step, multi-step, or blank options](/img/config/checkout-forms-list.png)

Alternatiboa, joan zehatzeko formak ez duzunak editatu edo kopiatu dezakezu horiek irudien ondoreko opsioak klikizten. Horretan, formaren shortcode kopioatzeko edo formak boratzen (delete) beste opsioak ere aurkituko dugu.

![Checkout form hover actions with edit, duplicate, and delete](/img/config/checkout-form-hover-actions.png)

Single step edo multi-step irudi ezduz, checkout formak hori bere funtzionatzeko beharrezko bat-etapurak lehiak pre-poblatutako forma izango da. Horrek ondoren, gure bidez, beste bat-etapuruak gehiago ez dodako dugu.

### Checkout Formaren Editatu:

Leikitu duzuz ulertu zuen bezala, checkout formak erabilera ondo eta batekin erabiltzeko aukera dituztezu. Horrek ondoreko aldean, registration form bat eginduko dugu.

Checkout form editorra jarraituz, formari bat emate (horrek aurreikusten referentziaren bitartean erabiltara da) eta slug bat ematu (shortcode-ak sortzeko erabilera da, adibidez).

![Checkout form editor with name and slug fields](/img/config/checkout-form-editor.png)

Formak bat-etapuru eta field batzuk dira. New Checkout Step (New Checkout Step) klikizten baduzu, bat-etapuru berri emate dezakezu.

![Add New Checkout Step button](/img/config/checkout-form-add-step.png)

Modal windowaren lehen taban, formaren bat-etapuraren kontentua platu duzu. Oinbat ID bat, nome bat eta deskribapena bat ematu behar da. Horrek inpoetatzen (internal use) erabiltara da.

![Checkout step content tab with ID, name, and description](/img/config/checkout-form-step-content.png)

Ondore, bat-etapuraren erabilera ezartu behar da. **Always show** (Adituzu), **Only show for logged in users** (Erabiltzaileak logatutakoak dira) edo **Only show for guests** (Gasteak dira) hasiera emateko dituztezu.

![Checkout step visibility options](/img/config/checkout-form-step-visibility.png)

Eskerrikuntaina, konfiguriatu urdian estiloa. Horrenak erabili dira opsionalen lekuak.

![Checkout step style configuration](/img/config/checkout-form-step-style.png)

Arriba, ordu da irudien beste lekuak ezazu. **Add New Field** (Beste Lege Zaharra) klikatu eta zerbait ereditzen duwan sektionaren bidea ustelekin aukeratu.

![Add New Field button](/img/config/checkout-form-step-with-fields.png)![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

Lege batek parameterrak ondo ez du. Horrek lehen erabilera, **Username** (Erabiltzaile Nuan) legeak aukeratu dugu.

![Username field configuration](/img/config/checkout-form-username-content.png)![Username field parameters](/img/config/checkout-form-username-visibility.png)![Username field additional settings](/img/config/checkout-form-username-style.png)

Zerbait estelak eta legeak behar duzu. Zerbait produktuak irudien artean aukeratzeko, **Pricing Table** (Prezioak Legeak) legea erabili. Clienten bat template ere aukeratzea gustuko dugu? Ordu **Template Selection** (Template Aukera) legeak ezazu. eta horgitara.

_**Nota:** Checkout formaren aurrera produktu bat sortu duzu, Pricing Table seksioan produktua ezazu behar duzu. Ez ezazu, produktua irudien artean ez eratu daiteke._

_**Nota 2:** Checkout formaren sortzeko **username**, **email**, **password**, **site title**, **site URL**, **order summary**, **payment**, eta **submit button** (Bidai Botonu) legeak dira zorrotz beharrezkoak._

Checkout formaren lan egiten duzenean, clienten irudien edo bisitariengaren irudi bezala formua ikusteko **Preview** (Ikustea Aurrera) botontik erabiltu dezakezu. Bestetik, beste erabilera jakin duen erabiltzaile edo bisitari gisa ikusteko aukera ditu.

![Checkout form preview button on the checkout form editor](/img/config/checkout-form-preview-button.png)![Checkout form preview as visitor or existing user](/img/config/checkout-form-preview-modal.png)

Eskerrikuntaina, **Advanced Options** (Opsioak Advancedak) da ez baduzu informazioa emateko testuaren (message) konfiguratzen dituz, konversioak (conversions) egiaztatzeko snippet-ak (snippets) jodezale ditu, checkout form-i (checkout form) irudi CSS osoa (custom CSS) jodezale ditu edo bestelako etorri zehatzak (certain countries) leku batzuk ere murriztu dituz.

![Advanced Options with Thank You page, conversion tracking, and custom CSS](/img/config/checkout-form-advanced.png)

Checkout form-i (checkout form) aktibo edo inaktibo jartzeko, hakuraren (right column) ondoreko opsioa (option) onartu edo ezartu dituz, edo form-i (form) permanente lekuan (permanently) borrokatzen dituz.

![Active toggle and delete option for checkout form](/img/config/checkout-form-active.png)

Checkout form-i (checkout form) saldatu (save) ez dututa!

![Save Checkout Form button](/img/config/checkout-form-save.png)

Forma-ren shortcode (shortcode) aurretik aurkitu nahi duzu? **Generate Shortcode** (Shortcode sortzen) irudiari klik egin eta modal finestra (modal window) anpaioan erakusten duen rezultatuaren kopiatu duzu.

![Generate Shortcode modal with shortcode to copy](/img/config/checkout-form-editor.png)

_**Nota:** Checkout form-i (checkout form) irudien (registration page) aurkitu nahi duzu, hailea jodezale ditu._

## URL parametrikak erabiliz produkzioak eta templateak irretik leku batzuk pre-selektatzea:

Produzioak (products) beste batzuk dira eta checkout form-i (checkout form) irretik pre-selektatu nahi duzu, jodezalearen (customer) aukeratu template edo produkzioa (product) jodezalearen (customer) aurkitu dituen prezioak (pricing table) edo template batzuk dira, hori arte URL parametrikak (URL parameters) erabiliekin egin dezakezu.

### **Plan-ek (For plans):**

**Ultimate Multisite > Products > Select a plan** (Ultimate Multisite > Produkzioak > Plana irretatu). Irudiaren (page) gainean **Click to copy Shareable Link** (Shareable Link kopiatzeko klik egin) botoia ikusten duzu. Horrek da link-a (link) jodezalearen checkout form-i (checkout form) pre-selektatuz erabiliko duen.

![Product page with shareable link button](/img/config/products-list.png)

Ez dago eskatzen du, ha linka iradokizko **Plan**-ekodi-dina lehiaketa da. Paketio edo serbisio-ekodi-ek dira shareable linkak ez dute erabiltzea.

### Forma-template-ekodi-ek:

Site template-ak checkout forman aurretik aukeratuta nahi duzu, registro URL-eko parametroaren **?template_id=X**a erabiliz piztu dezakezu. "X"-en atzerria **site template ID numeroa** erregu behar da. Horri aurkitzeko, **Ultimate Multisite > Sites** funtziokoan jarraitu.

Nahi erabiltzen duzu site template-ak ondoren, **Manage**-ra klikatu. SITE ID numeroa ikusten duzu. Hau eskatutako site template-eko bitartean pre-selektatuta egindera, hori numeroa erabiliz dut. Horrek, gure kasuan, URL parametroa izango da **?template_id=2**.

![Sites list showing site template ID](/img/config/site-templates-list.png)

Dugutuz, gure network web-saila [**www.mynetwork.com**](http://www.mynetwork.com) dela eta checkout formak dagoen /register sailan dagoela. Site template pre-selektatuta duen guztia URL-ekodi hori izango da: [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Eta nahi duzu, produktu eta template bat gehiago pre-selektatuta ere checkout forman. Ez dago egin behar duzu, planaren shareable linka kopiatu eta template parametroak ondorioz itxarri. Horizki izango da: [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
