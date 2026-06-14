---
title: Gukoresha Uburyo Bwanyu Bwumva
sidebar_position: 17
_i18n_hash: 13f72671d55f48becd6bd89f6571f111
---
# Gukoresha w'Urugero wawe

Kugira ngo uburyo bwawe bw'ubwujgwa buvugwa mu gihe cyose ku ntego z'ibindi SaaS zifite kuri WordPress, Ultimate Multisite yagushobora kugira ubwujgwa bwawe mu gukoresha amagambo ya **Checkout Forms** zacu.

Ntabwo ni uburyo mwiza kandi wibonye kandi wibonyeho kumenya ibintu bitandukanye itewe n'uburyo mwe yashobora gukora umuyobozi n'abakoresha bafite uburyo bwawe, ariko mu gihe cyinshi ni kuburira amagambo ya registration zikoreshwa mu gutera abakoresha bafite uburyo bwawe. Igihe cyacu ni gukwibwira uburyo mwe yashobora gukora ibi.

## Amagambo y'Urugero n'Urugero:

Icyiza cyane mu gihe utangira Ultimate Multisite, igaragaza amagambo ya login n'registration zikoreshwa ku siti runaka ryawe. Ufite uburyo bwawe gukora ibi mu gihe cyose ukaba kuri ipage ya **Ultimate Multisite > Settings > Login & Registration**.

![Ipage y'Urugero n'Urugero](/img/config/settings-general.png)

Dore umbwire wose w'ipage ya login n'registration:

![Ipage y'Urugero n'Urugero ibyo byose](/img/config/settings-login-registration-full.png)

Tugereye gukwibwira uburyo bwa amagambo mwe yashobora kubonjya ku ipage ya **Login & Registration**:

  * **Kugera umuyobozi (Enable registration):** Icyo cyo kugaragaza cyangwa kwigera umuyobozi mu gukoresha kuri network yawe. Niba ugiye kugira ngo ubone, abakoresha bafite uburyo bwawe batagashobora gukora registration kandi batagashobora gukoresha ibintu byawe.

  * **Kugera umwujiza (Enable email verification):** Niba ugiye kugira ngo ubone, abakoresha bashobora gukoresha uburyo bwawe mu gihe cy'ibintu by'ubwujgwa bw'umwujiza, batagira email y'ubwujgwa kandi bakwibonyeho gukorera link ya ubwujgwa kugira siti zabo zikoreshwa.

* **Ururu mu gukoresha (Default registration page):** Iki ni uburyo bwo gukoresha (registration) kuri WordPress. Uburyo nkozi ukoreshwa ari uko wumva umwe muri urugero rwawe kandi uba ubufasha ku muryango wawe. Ukenya uburyo bwo gukoresha uburyo bwo gukoresha (checkout form) - aho abakoresha bakoze bakora subscription kuri ibintu byawe. Ufite ubushobozi wubwira uburyo bwo gukoresha uburyo bwo gukoresha (checkout form) cyane ku urugero rwawe, ariko ugukoreshe u shortcode wa checkout form ku rubuga rwa registration, mu gihe nta ko uzabona.

* **Gukoresha urugero rwa login rwawe (Use custom login page):** Iki kintu kishobora kugufasha gukoresha urugero rwa login rwawe ry'ibyo bindi byo, kandi si wp-login.php. Niba uba wumva iki kintu, uza kuba ufite ubushobozi bwo gukoresha urugero rwa login ku **Urugero rwa login rwa default** (uri hejuru mu gihe cy'ibyo byo).

* **Gukoresha URL y'ubwoko bw'ibanire (Obfuscate the original login url (wp-login.php))**: Niba wumva ko wifasha gukoresha URL ya login ya mbere, uza kuba ufite ubushobozi bwo gukoresha iki kintu. Iki kintu kishobora kubaho mu gihe cy'ubwoko bw'ibanire (brute-force attacks). Niba uba wumva iki kintu, Ultimate Multisite izabona error ya 404 itewe igikorwa cyo gukoresha wp-login.php.

* **Gukora guhindura gukoresha site mu gihe cy'ubwoko (Force synchronous site publication)**: Nyuma yuko umwe muri muryango wacu yagize subscription kuri ibintu, urugero rwawe rwa mbere ryabaye site ya muryango itegeje. Icyo gukora guhindura gukoresha site kigira uburyo bwo gukorwa mu gihe cy'ubwoko (Job Queue), cyangwa mu gihe cy'ubwoko (asynchronously). Gukoresha iki kintu bizabasha gukora guhindura gukoresha site mu gihe cy'umwanya w'ibyo byo.

Ubu, twishobora kubona ibindi byo byiza ku gukoresha login n'ubwoko (registration). Bifuza bifuza bifite ubushobozi bwo gukoresha iki kintu: **Other options** kuri urugero rwa Login & registration.

* **Ururo rwa mbere (Default role):** Iki ni uru ro mu muryango wawe uza kuba ufite ku website yawe nyuma yuko umwe yagize subscription.

* **Koresha Jumper:** Icyiza u Jumper mu admin area. Jumper yagira abashinzwe gukora urugero rw'Ultimate Multisite, network objects, n'ibindi by'ubwoko bwa mbere kandi byo bitanga, nta kumenya imenyinshi ya menu. Yitera n'iyo nshobora kugira ngo nishobore kubyara uwo tool w'ubwoko bw'umukono mu admin interface.

  * **Gusobanura abantu ku site y'inganda kandi:** Kugira ngo ushobore gukoresha iyo option, ibyo bishobora gukora ni gukoresha umuntu uyu mu site ya mbere ya network yawe nyuma yagera ku cyemezo cyo gushyira. Niba ushobora gukoresha iyo option, hari igice cyo gushyira **default role** y'abantu bishobora kubaho kuri website yawe kera ku mwezi.

  * **Gusobanura akazi nyinshi:** Yagira ngo abantu bashobore kugira akazi mu sites bitandukanye mu network yawe n'ibyo byo gushyira email yashya. Niba iyo option itera, abakiriya bishobora gufata akazi ku websites bitandukanye bitanga mu network yawe n'email yashya.

Ibi ni ibyo byose byo ubwoko bw'ubwoko bwa login no registration cyangwa uwo gushyira umuntu ushobora gukoresha! Usaba kwisobanura ibyo uko wari utera mu gihe cyose ugiye gukemura.

## Gukoresha forms zikomeye (multiple registration forms):

Ultimate Multisite 2.0 yifashije editor ya checkout form itanga kugira ngo ushaye forms nyinshi uhoze, n'ibyo bitandukanye mu gihe cyo gushyira, ibintu byo kubyara, n'ibindi.

Urugero rwa login no registration yifashishijwe n'shortcodes: **[wu_login_form]** kuri page ya login kandi **[wu_checkout]** ku page ya registration. Ushobora gukoresha ibyo byo gushyira umuntu mu registration cyangwa gukora forms zikomeye.

Kugira ngo ushaye iyo feature, gukora ugiye menu ya **Checkout Forms**, kuri side-bar y'igice cyo mbere.

![Checkout Forms menu in the sidebar](/img/config/checkout-forms-list.png)

Ku gihe cyo, ushobora kubona forms zose za checkout wari utera.

Niba ushaka gukora uwo hwizera, usaba gukoresha **Add Checkout Form** ku gice cyo mbere y'page.

Woweza uburyo mu mwezi w'ubwujgwa (single step), uburyo bishobora kubyara (multi-step) cyangwa ubwujgwa bw'umutwe (blank) nk'uko uburyo bwo kwiga. Nyuma, ugukora umuntu kugira ngo **Go to the Editor**.

![Add Checkout Form with single step, multi-step, or blank options](/img/config/checkout-forms-list.png)

Urugero, ushobora gukora cyangwa gukoresha mu gihe ugiye ku byiciro byo mu gihe w'ubwujgwa bwawe bwari bafite, uburenganzira ukoresheje uburyo bwo kubyara. Mu gihe runaka, ushobora gukora umuntu kugira ngo ushyire cyangwa ugusubire (duplicate) uburyo bwawe bwari bafite mu gihe ugiye ku byiciro byo mu gihe w'ubwujgwa bwawe. Mu gihe runaka, ushobora gukoresha uburyo bwo kubyara cyangwa kugusubira (duplicate) shortcode ya form cyangwa gufata umuntu.

![Checkout form hover actions with edit, duplicate, and delete](/img/config/checkout-form-hover-actions.png)

Muri uburyo bwo kubyara mu mwezi w'ubwujgwa (single step) cyangwa uburyo bishobora kubyara (multi-step), umusaruro wa form yashobora kuba yari yagize ibyiciro by'ubwujgwa bw'umutwe bafite mu gihe runaka. Nyuma, niba wifuza, ushobora gushyira ibyo byo ku mwezi w'ubwujgwa (extra steps) cyangwa ubyara.

### Gukora umusaruro wa form:

Nko twari tewe n'ibyo twagaragaje mbere, ushobora gukora umusaruro wa form mu gihe runaka bishobora kuba bifite ibyo byo kwiga. Mu gihe runaka, twandukira ku mwezi w'ubwujgwa (registration form).

Nyuma yuko ugiye ku editor ya usaruro wa form, ugize umuri mu cyerekezo (name) (uhoza gukoreshwa mu gihe runaka gusa) n'umutwe (slug) (uhoza gukoreshwa mu gutera shortcodes, umusaruro).

![Checkout form editor with name and slug fields](/img/config/checkout-form-editor.png)

Forms yari yagize ibyiciro byo kubyara n'ibyo byo kwiga (fields). Ushobora gushyira mwezi w'ubwujgwa (new step) bishobora kuba bifite mu gihe ugiye ku **Add New Checkout Step**.

![Add New Checkout Step button](/img/config/checkout-form-add-step.png)

Mu gihe runaka cyo mbere cyo modal window, gukoresha ibyo byo form yawe. Gize ID (umwihariko), izina n'ubwumvikane (description). Ibi bintu byari bifite mu gihe runaka gusa.

![Checkout step content tab with ID, name, and description](/img/config/checkout-form-step-content.png)

Nyuma, gukora umusaruro wa mwezi w'ubwujgwa (visibility). Ushobora gukoresha ibyo byo: **Always show** (Gushyira mu gihe runaka), **Only show for logged in users** (Gushyira ku bantu bafite aka aka aka aka aka aka aka aka aka aka aka aka aka aka aka aka aka aka aka aka aka aka aka aka aka aka aka aka aka aka aka

![Checkout step visibility options](/img/config/checkout-form-step-visibility.png)

Urugero, konfigurera indwara (step style). Ibi ni byo mu gihe (optional fields).

![Checkout step style configuration](/img/config/checkout-form-step-style.png)

Icyo, ni igihe cyo gushyira ibintu ku ndwara ya mbere. Gukoresha **Add New Field** kandi ugereye ku gukoresha uburyo bwo section wifuza.

![Add New Field button](/img/config/checkout-form-step-with-fields.png)![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

Icyo cyo gukoresha umbwereze (parameters) mu gihe cy'ibintu byiza. Ku gihe cyo mbere, twagira **Username** field.

![Username field configuration](/img/config/checkout-form-username-content.png)![Username field parameters](/img/config/checkout-form-username-visibility.png)![Username field additional settings](/img/config/checkout-form-username-style.png)

Ushobora gushyira indwara n'ibintu byiza cyane uzi. Kugira ngo umuyobozi wako yoroshye abakoresha bwo gukoresha ibyo, gukoresha Pricing Table field. He uzi ko wifuza abakoresha bwa template, shyira Template Selection field. kandi ibindi.

_**Urugero:** Iyo utera product nyuma y'uko wifashije checkout form, uza gutera product mu Pricing table section. Niba ushyira, product uzagira umuntu ku registration page.*

_**Urugero 2:** username, email, password, site title, site URL, order summary, payment, kandi submit button ni ibintu byiza (mandatory fields) kugira ngo utera checkout form.*

Iyo ugiye gukora checkout form yawe, ushobora gukoresha Preview button kugira ngo umuyobozi wako yoroshye kumenya uko abakoresha bwo gushobora kubona form. Ushobora kandi guhindura hagati yuko umuntu ari umuryango wariye cyangwa umuntu wariye mu gihe cyo gukoresha.

![Button ya kuona uburyo bw'umuganda w'urugero rwa checkout](/img/config/checkout-form-preview-button.png)![Gushobora kumenya uburyo bwo gushobora umuganda w'urugero rwa checkout n'umuntu w'ubwujere cyangwa umuntu w'ubwujere kandi yashobora kuba yashobora kubona](/img/config/checkout-form-preview-modal.png)

Urugero, ku **Advanced Options** (Icyiciro Cy'ingenzi), uza kuba ufite uburyo bwo gukoresha amakuru ku cyerekezo cy'umuganda w'ubwujere (Thank You page), kugabanya ibyerekezo by'ubwujere, gushyira CSS cy'umuganda w'urugero rwa checkout cyangwa kwibanda ku nzego z'ubwujere.

![Advanced Options n'ibyo bindi bikurikira: uburyo bw'umuganda w'ubwujere, gushyira ibyerekezo by'ubwujere, no CSS cy'umuganda w'urugero rwa checkout](/img/config/checkout-form-advanced.png)

Uza kuba ufite uburyo bwo gukoresha umuganda w'urugero rwa checkout kandi uza kuba ufite uburyo bwo guhagarara cyangwa guhagarara umuganda w'urugero rwa checkout ubwo ugiye ku column ya mbere, cyangwa ugashobora gusohora mu gihe cy'ibindi.

![Urugero rw'umuganda w'urugero rwa checkout kandi uburyo bwo guhagarara cyangwa guhagarara umuganda w'urugero rwa checkout](/img/config/checkout-form-active.png)

Usaba ko usahije umuganda w'urugero rwa checkout!

![Button ya gushyira umuganda w'urugero rwa checkout](/img/config/checkout-form-save.png)

Kugira shortcode cy'umuganda wako, ugashobora gukoresha **Generate Shortcode** (Gukoresha Shortcode) kandi uburyo bwo gushyira mu shortcode yose igice cyiza cyangwa seka uburyo bwa modal window.

![Modal ya Generate Shortcode n'umuganda w'urugero rwa checkout kugira ngo usohore](/img/config/checkout-form-editor.png)

_**Urugero:** Uza kuba ufite ubushobozi bwo gushyira shortcode uyu mu registration page yawe kugira ngo umuganda w'urugero rwa checkout uyu yashobore guhagarara kuri iyo page._

## Gukoresha amakuru (URL parameters) kugira ngo utangire ubwoko bw'ibintu n'ibyo bishobora kuboneka mu URL:

Iyo wumva ko wumva gukora ibyo, uza kuba ufite uburyo bwo gukoresha amakuru (URL parameters) kugira ngo ushage amafaranga y'ubwoko ku bijyanye n'ibintu by'ubwoko mu checkout form cyangwa seka umuntu w'ubwujere yashobora kubona ibyo abantu bafite mu pricing table cyangwa templates page.

### **Kwa plans (Uburyo bwo gukoresha amakuru ku plans):**

Gukoresha **Ultimate Multisite > Products > Select a plan**. Uza kumenya uburyo bwo gushobora kubona button ya **Click to copy Shareable Link** (Koresha uburyo bwo gushyira link yashobora guhagarara) ku cyerekezo cy'iyo page. Iyo ni uburyo ushobora gukoresha kugira ngo ushage plan igihariye kuri checkout form yawe.

![Product page n'ubwo bwoko bwa shareable link](/img/config/products-list.png)

Urahindwe uyuha umukono w'ubwujaji uyuha **Plans** gusa. Ntuzuye uyuha ubwujaji bwo muco cyangwa ibikorwa.

### Ku bwoko (templates):

Iyo wumva kugira ngo utangire gukoresha templates z'ibanga ku gihe cyo ugenda mu checkout form yawe, uba mushobora gukoresha parameter: **?template_id=X** kuri URL yawe y'ubwujaji. Uyu "X" ukenewe guhindurwa n'umwihariko w'ibanga (site template ID number). Kugira ngo uhereye uyu numero, genda ku **Ultimate Multisite > Sites**.

Gukoresha **Manage** cyangwa **Urugero** kera mu gihe cyo ugomba gukoresha site template ukenewe. Uba mufite numero ya SITE ID. Gukoresha uyu numero gusa kugira ngo umwe site template w'ibanga yose yoroshye gukoreshwa ku checkout form yawe. Mu gihe cyacu, parameter ya URL itera ku **?template_id=2**.

![Sites list showing site template ID](/img/config/site-templates-list.png)

Muri uburyo bwo kuvuga, website y'urugendo rwawe ni [**www.mynetwork.com**](http://www.mynetwork.com) kandi igice cyo gukoresha checkout form yawe kigira ku gihe cyo **/register**. URL yose itera ku site template ukenewe yoroshye gukoreshwa izaba ikomeye nk'iki: [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Kindi, niba wumva kugira ngo utangire gukoresha ibintu byose (products) n'ibanga (templates) ku checkout form yawe, ukenewe gukora iki: gukopya shareable link y'ibanga kandi ukugira mu gihe cyo gufata parameter ya template ku mwera. Izaba ikomeye nk'iki: [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
