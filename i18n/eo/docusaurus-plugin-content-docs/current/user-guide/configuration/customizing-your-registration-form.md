---
title: Personalizi la via registri formon
sidebar_position: 17
_i18n_hash: 13f72671d55f48becd6bd89f6571f111
---
# Personaliziigo de viajregistriĝo

Por vian retoj ŝanĝi sin el ĉiuj aliaj SaaS, kiuj estas konstruita sur la platformo WordPress, Ultimate Multisite permesas vi personaligi vian registriĝo kaj log-in pagoj per nia funkcio **Checkout Forms**.

Mankaj, ili estas facila kaj fleksabla maniero eksperimenti diversajn approciojn pri provi konverti novajn klientojn, sed ili estas pli ofte uzata por krei personligajn registriĝfomojn. Ĉi tiu artikolo celas montri al vi, kiel vi povas fari tion.

## Log-in kaj registriĝo pagoj:

Post la instalado de Ultimate Multisite, ĝi aŭtomate kreas personalaj log-in kaj registriĝo pagoj sur via ĉefa sitio. Vi povas ŝanĝi ĉi tiuj defaultpagojn kiam kiel vi uzas vian **Ultimate Multisite > Settings > Login & Registration** paĝon.

![Login and Registration settings page](/img/config/settings-general.png)

Jen kompleta vidigo de la pagoj de log-in kaj registriĝo:

![Login and Registration settings full page](/img/config/settings-login-registration-full.png)

Kaj vi renkontas ĉiun opcion, kiun vi povas personaligi sur la **Login & Registration** paĝo:

  * **Enable registration (Aktivi registriĝon):** Ĉi tiu opcio aktivas aŭ desaktivas la registriĝon en via retoj. Se ĝi estas desligita, via klientoj ne uzos bone registriĝi kaj subskribi vian produktojn.

  * **Enable email verification (Aktivi elektronan verifikadon):** Se ĉi tiu opcio estas akiva, klientoj, kiuj subskribas por la senpagata planon aŭ pagitan planon kun provizioperiodo, ricevas verifika e-mailon kaj devas kliki sur la verifika linkon por siaj sitioj kreitaj.

* **Pagojregistra (Default registration page):** Ĉi tiu estas la default-paĝo por registriĝi. ĉi tiu paĝo devas esti publikigita sur via ĉefa sitio kaj havi registriĝformon (tamaj ankaŭ nomitan checkout formo) - kie via klientoj subskribas viajn produktojn. Vi povas krei ilont registriĝpaĝojn kaj checkout formojn, kiom vi volas, memmemu meti la shortcode de la checkout formo sur la registriĝo, plite aldatne ĝi ne aparos.

* **Uzu personalan logina paĝon (Use custom login page):** Ĉi tiu opcio permesas uzi personalan loginan paĝon, alia ol la default-wp-login.php paĝo. Se ĉi tiu opcio estas aktivita, vi povas elekti, kiu paĝo uzu por logi in la **Default login page** (tute alda).

* **Obfuski la originalan logan URL-on (Obfuscate the original login url (wp-login.php))**: Se vi volas ŝanĝi aŭ malaperigi la originalan loginan URL-on, vi povas aktivi ĉi tiun opcio. Ĉi tio estas utile por preveni brute-force atakojn. Se ĉi tiu opcio estas aktivita, Ultimate Multisite aldonos 404 errare, kiam uzanto provas akcesi la originalan wp-login.php linkon.

* **Forci sinkronan sitio publikigon (Force synchronous site publication)**: Post kiam klientas subskribas produkton sur la retoj, la nova pendiga paĝo devas esti konvertita en realan reta sito. La publikigproceso okazas per Job Queue, asinkrone. Aktivu ĉi tiun opcio por forci la publikigon okazi en la sama peto kiel la registriĝo.

Sekure, vidu aliajn opciojn, kiuj estas tut relevanta por la logina kaj registriĝo-proceso. Ili estas alda **Aliaj opcioj** sur la sama Paĝo de Logado kaj Registriĝo:

* **Default rolo (Default role):** Ĉi tiu estas la rolo, kiun via klientoj havis sur sia sitio post la registriĝo.

* **Aktive Jumper:** Aktive laŭlon Jumper en la admina zonon. Jumper permet administatoroj rapid pasiri al ekranoj Ultimate Multisite, retoj objektoj kaj aliaj suportitaj destinaĵoj sen navigui per ĉion menun. Dezaktive baldu ti, se vi preferas celi ti rapidan navigon instrumenton de la admina interfaco.

* **Ado uzantojn al la ĉefa sitio ankaŭ:** Aktive ĉi ti opcion ankaŭ aldon la uzanton al la ĉefa sitio de via rdeto post la registriĝo. Se vi aktivas ĉi ti opcion, opcio por estoni la **default role** de ĉi ti uzantoj sur via sitio ankaŭ apparacios tute sube.

* **Aktive plurajn kontojn:** Permitu uzanto havi kontojn en diversaj sitoj de via rdeto kun la sama elektronika adresoj. Se ĉi tiu opcion estas dezaktiva, via klientoj ne uzos tempon al pli da sitoj sur via rdeto kun la sama elektronika adresoj.

E tio estas ĉio la opcionaj rilata al logado kaj registriĝo! Ne forgi savi vian konfiguracion post kiam vi finas editi ĝin.

## Uzo de pluraj registriĝformoj:

Ultimate Multisite 2.0 oferas redaktilon por formojn de checkout, kiu permesas vin krei iluantajn formojn, kun diversaj kampoj, ofretajn produktoj kaj aliajn.

Tio la loga kaj la registriĝo estas enlade per shortcode'oj: **[wu_login_form]** sur la loga paĝo kaj **[wu_checkout]** por la registriĝpaĝo. Vi povas plian personaligi la registriĝpaĝon per konstruado aŭ kreo de checkout formoj.

Por akcesi ĉi tijn funkcion, diru al la menun **Checkout Forms**, sur la malvalba baro.

![Checkout Forms menu in the sidebar](/img/config/checkout-forms-list.png)

Sur ĉi tiu paĝo vi povas vidi ĉiujn checkout formojn, kiujn vi havas.

Se vi volas krei novan, simple kliku sur **Add Checkout Form** en la superulo de la paĝo.

Vi povas elekti unu el ĉi ti tri opcio kiel vian komencparto: unpačstepa (single step), plurpačstepa (multi-step) aŭ blanka. Tiam kliku por **Ir al la redaktoro** (Go to the Editor).

![Add Checkout Form with single step, multi-step, or blank options](/img/config/checkout-forms-list.png)

Alino, vi povas modifi aŭ dupliki la formojn, kiujn vi 이미 havas, per kliki sur la opcio sub sia nomo. Tiam vi ankaŭ trovos opciojn kopii la koutakodon (shortcode) de la formo aŭ dili la formon.

![Checkout form hover actions with edit, duplicate, and delete](/img/config/checkout-form-hover-actions.png)

Se vi elektas unpačstepan aŭ plurpačstepan, la checkout formo estu déjà pre-plenata kun la bazaj paŝoj por ĝi funkcii. Tiam, se vi volas, vi povas aĉi ekstreman paŝojn al ĝi.

### Modifado de Checkout Formo:

Kiel ni mem diris antaŭe, vi povas krei checkout formojn por diversaj celoj. En ĉi tiu ekzemplo ni laboros kun registriĝo-formo (registration form).

Post navigado al la redaktoro de la checkout formo, donu al via formo nomon (ki uzusĝos nur por interna referenco) kaj slugon (ki uzusĝos por krei koutakodojn, paŭze).

![Checkout form editor with name and slug fields](/img/config/checkout-form-editor.png)

Formoj estas el paŝoj kaj kampoj. Vi povas aĉi novan paŝon per kliki sur **Add New Checkout Step** (Aĉi Novan Paŝon).

![Add New Checkout Step button](/img/config/checkout-form-add-step.png)

Sur la unua tab de la modala finestra, plenigu la encon de via formo paŝo. Donu al ĝi ID, nomon kaj deskripcon. Ti ĉi elementoj uzasĝas pli internajmente.

![Checkout step content tab with ID, name, and description](/img/config/checkout-form-step-content.png)

Tiam, estatu la vidibiliton de la paŝo. Vi povas elekti inter **Always show** (Spermi ĉiam), **Only show for logged in users** (Spermi nur por logitaj uzantoj) aŭ **Only show for guests** (Spermi nur por invitateloj).

![Checkout step visibility options](/img/config/checkout-form-step-visibility.png)

Fina, konfigurante la estilo de la etapa. Ĉi tiuj estas opcionaj kampoj.

![Checkout step style configuration](/img/config/checkout-form-step-style.png)

Nove, venas tempo a skivi kampojn al nia unua etapo. Simple kliku por **Aggivi Nova Kampon** kaj selekti la tipon sekcion, kiun vi volas.

![Add New Field button](/img/config/checkout-form-step-with-fields.png)![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

Ĉiu kampo havas diversajn parametrojn por esti plenigita. Por ĉi tiu unua entrinto, ni selektos la kampon **Username** (Nom de Uzo).

![Username field configuration](/img/config/checkout-form-username-content.png)![Username field parameters](/img/config/checkout-form-username-visibility.png)![Username field additional settings](/img/config/checkout-form-username-style.png)

Vi povas aĉi iluant cuánt stepojn kaj kampojn vi bezonas. Por montri viajn produktojn por via klientoj elekti unu, uzu la kampon Pricing Table (Tablo de Precoj). Se vi volas permi via klientojn elekti tempon, aĉi la kampon Template Selection (Selelekto de Tempo). Kaj similaj.

_**Notado:** Se vi kreas produkton post krei via checkout formon, vi bezonas aĉi ti produkton en la sekcion Pricing Table. Se vi ne aĉas ĝin, la produkto ne aparos al via klientoj sur la registriĝo-paĝo._

_**Notado 2:** username (nom de uzo), emailo, password (senumo), site title (titolo de sitio) kaj site URL estas obligaj kampoj por krei unuan checkout formon._

Dum vi laboras al via checkout formo, vi ĉiam povas uzi la Preview button (Previa) por vidi kiel via klientoj vidos la formon. Vi ankaŭ povas alterni inter vidado kiel ekzista uzanto aŭ vizito.

![Preview butono sur la redaktoro de formuloj de pagament](/img/config/checkout-form-preview-button.png)![Previzio de formuloj de pagament kiel vizitru aŭ ekzista uzanto](/img/config/checkout-form-preview-modal.png)

Finalan, sur **Advanced Options** vi povas konfiguri la mesaĝon por la paĝo **Thank You**, aĉeti fragmentojn por sekvi konvertajn aktojn, aĉeti CSS personalan al via formuloj de pagamentaj kaj restriĉi ĝin al certaj paŝtoj.

![Advanced Options kun paĝo Thank You, sekvi konvertajn aktojn kaj personala CSS](/img/config/checkout-form-advanced.png)

Vi ankaŭ povas manove manuale aktivi aŭ desakti vian formulon de pagamentaj per togglo ĉi ti opcio sur la destra kolono, aŭ permanentman deskti la formulon.

![Aktiva togglo kaj deskti opcio por formuloj de pagamentaj](/img/config/checkout-form-active.png)

Ne forgi savi vian formulon de pagamentaj!

![Butono Save Checkout Form](/img/config/checkout-form-save.png)

Por akcepti vian formulon'n kion vi bezonas, kliku sur **Generate Shortcode** kaj kopiu rezulton, kiun vi vidas en la modalaj fenetro.

![Modal Generate Shortcode kun shortcode por kopii](/img/config/checkout-form-editor.png)

_**Notado:** Vi bezonas aĉeti ĉi ti shortcode al via registriĝo paĝo por havi ĉi ti formulon de pagamentaj al ĝi.*

## Preselekti produktojn kaj templatojn per URL parametroj:

Se vi volas krei personalajn preco-tabulojn por viaj produktoj kaj preselekti sur la formuloj de pagamentaj la produkton aŭ templaton, kiun viaj klientoj elektas el viajo de preco-tabulo aŭ templatoj paĝo, vi povas uzi URL parametroj por tio.

### **Por planoj:**

Aliri **Ultimate Multisite > Products > Select a plan**. Vi devas vidi la butonon **Click to copy Shareable Link** al la superflanka de la paĝo. Ĉi tiu estas la linko, kiun vi povas uzi por preselekti ĉi ti specifan planon sur via formuloj de pagamentaj.

![Produkto paĝo kun butono shareable link](/img/config/products-list.png)

Nota, ĉi tiu parta link estas valida nur por **Planoj**. Vi ne povas uzi parta linkojn por paketoj aŭ servoj.

### Por templatoj:

Se vi volas pri-selekti templatojn de siton sur via checkout formo, vi povas uzi la parametron: **?template_id=X** sur la URL de via registriĝo. La "X" devas esti substituita per la **templat ID nombro**. Por akiri ĉi tiun nombron, aliriĝu al **Ultimate Multisite > Sites**.

Klaknu sur **Manage** tute sup la templaton, kiun vi volas uzi. Vi vidus la SITE ID nombron. Uzu ĉi tiun nombron por ĉi tiu specifita sita templato por esti pri-selekti sur via checkout formo. En nia kazo, la URL parametro tabus esti **?template_id=2**.

![Sites list showing site template ID](/img/config/site-templates-list.png)

Laŭvoke nia reto-sitelo estas [**www.mynetwork.com**](http://www.mynetwork.com) kaj nia registriĝo-paĝo kun nia checkout formo estas loĝita sur la **/register** paĝo. La tuta URL kun ĉi tiu sita templato pri-selekti ŝanĝiĝos al [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

E se vi volas, vi povas pri-selekti tute produktajn kaj templatajn sur via checkout formo. Tiu ĉio, kion vi devas fari, estas kopii la partan linkon de la planon kaj glui la templat parametron al la finon. Ĝi ŝanĝiĝos al [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
