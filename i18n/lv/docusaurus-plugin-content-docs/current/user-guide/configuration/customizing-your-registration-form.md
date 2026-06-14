---
title: Pielaupīt jūsu reģistrācijas formulāru
sidebar_position: 17
_i18n_hash: 13f72671d55f48becd6bd89f6571f111
---
# Izvēlnes formātās personalizācija

Lai jūsu tīkls izskatu būtu unikāšs salīdzinājumā ar visiem citiem SaaS, kas ir izveidoti WordPress platformā, Ultimate Multisite ļauj jums personalizēt savas reģistrācijas un iekļuvejas lapas ar mūsu **Checkout Forms** funkciju.

Lai gan tās ir viegs un elastīgs veids eksperimentēt ar dažādām pieejām, mēģinot konvertēt jaunas klientus, tās galvenokārt tiek izmantotas personalizētu reģistrācijas formāru izveidē. Šajā rakstā mēs redzamam, kā to darīt.

## Ījūves un reģistrācijas lapas:

Uz Ultimate Multisite instalācijas laikā tas automātiski izveido personalizētās iekļuvejas un reģistrācijas lapas jūsu galvenajā vietnē. Jūs varat mainīt šīs defaultas lapas jebkurā brīdī, dodoties uz savu **Ultimate Multisite > Settings > Login & Registration** lapu.

![Login and Registration settings page](/img/config/settings-general.png)

Šeit ir pilns skats uz iekļuvejas un reģistrācijas iestatījumu lapu:

![Login and Registration settings full page](/img/config/settings-login-registration-full.png)

Atspējiet katru opciju, ko varat personalizēt **Login & Registration** lapā:

  * **Enable registration (Iespēju reģistrācija):** Šaļojums iespēj vai neiespēj reģistrāciju jūsu tīklā. Ja to izslēdzat, jūsu klientiem nevarēs reģistrēties un abonentēt jūsu produktus.

  * **Enable email verification (Iespēju e-pasta apstiprinājums):** Ja šaļojums ieslēdzas, klienti, kas abonentējas bezmaksas plānusa vai maksājams plānusa ar próbu periodu, saņems apstiprinājuma e-pastu un būs nepieciešami klikšķināt uz apstiprinājuma saiti saviem vietnīm izveidot.

* **Definīts reģistrācijas lapa:** Ševe ir defaultā lapa reģistrācijai. Šo lapas jāpublicē uz jūsu vietnē un tas jābūt ar reģistrācijas formu (ko arī var saucties par checkout formu) – kurie klienti abonentējas jūsu produktiem. Jūs varat izveidot cik vēlreiz reģistrācijas lapas un checkout formus, kā jums ir vajadzīgs, bet atcerieties, ka jāievieto checkout formus shortcode reģistrācijas lapā, nevis citādi tas neparādīsies.

  * **Izmantot personīgu iekļūsturi lapu:** Ša opsiija ļauj izmantot personalizētu iekļūsturu lapu, kas ir atšķirīga no defaultās wp-login.php lapas. Ja šo opciju ieslēdziet, jūs varat izvēlēties, kurā lapa tiks izmantota kā iekļūstura laika **Default login page** (tā ir tieši zemāk).

  * **Sīpēt oriģinālo iekļūsturu URL (wp-login.php):** Ja vēlaties slēpt oriģinālo iekļūsturu URL, varat ieslēdzēt šo opciju. Tas ir noderīgs, lai novērstu brute-force atakus. Ja ša opsiija ir aktivizēta, Ultimate Multisite parādīs 404 kļūdu, kad lietotā mēģina piekļūt oriģinālajai wp-login.php linkai.

  * **Izmantot sinkronu vietnes publicēšanu:** Pēc tam, kad kliente abonentējas produktam tīklā, ja jaunā nepieņemta lapa ir jāpārveido reāla tīkla lapa. Publicēšanas procesa notiek caur Job Queue, asincrono. Ieslēdziet šo opciju, lai priekšnoteiktu publicēšanu tajā pašā pieprasījumā kā reģistrācija.

Tagad skatīsim citus opcijas, kas vēl ir aktīvas attiecībā uz iekļūsturu un reģistrācijas procesu. Tās atrodas zem **Other options** (Citas opcijas) tieši šajā iekļūstura un reģistrācijas lapā:

  * **Default role:** Tas ir tā loma, kas jūsu klientiem būs uz viņu vietnē pēc reģistrācijas procesu.

* **Iespējiet Jumper lietošanu:** Šis funkcija ļauj administratoriem ātri pāriet starp Ultimate Multisite ekrānus, tīkla objektiem un citiem atļautajiem vietām bez jāmeklē menu caur visu. Izslēdz šo, ja vēlaties slēpt šo ātrās navigācijas rīku no admin interfeisa.

* **Pievienojiet lietotājus arī galvenajā vietnē:** Iespējot šo opciju, lietotājs tiks pievienots jūsu tīkla galvenajai vietnei pēc reģistrācijas procesu. Ja ieslēdzat šo opciju, zem tā parādīsies iespēja noteikt šiem lietotājiem **vietas iestatīto lomu** jūsu vietnē.

* **Iespējiet vairākus kontus:**Ļauj lietotājiem turēt kontus dažādās tīkla vietnēs ar vienu un tiem pašām e-pasta adresi. Ja šaļojums ir izslēdzts, jūsu klientiem nevarēs radīt kontus citās vietnēs, kas darbojas jūsu tīklā un kuram ir tāds pats e-pasta adrs.

Un tas ir visas opcijas, kas saistītas ar iekopojumu un reģistrāciju, ko varat personalizēt! Neaizmirstiet saglabāt savas iestatījumus pēc tam, kad beidziet rediģēšanu.

## Vairāku reģistrācijas formām lietošana:

Ultimate Multisite 2.0 piedāvā kasina formātu redaktoru, ar kuru varat izveidot cik vēl formām, kā jums ir nepieciešams, ar dažādām laukiem, produktiem un citām iespējām.

Gan iestatījumu (login) un reģistrācijas lapas iekopojums ir šo shortcodeji: **[wu_login_form]** login lapā un **[wu_checkout]** reģistrācijas lapā. Jūs varat vēl vairāk personalizēt reģistrācijas lapu, izveidojot vai radot formātus (checkout forms).

Lai piekļūtu šai funkcijā, pārvietojieties uz menu **Checkout Forms**, kas atrodas labajā sarakstā.

![Checkout Forms menu in the sidebar](/img/config/checkout-forms-list.png)

Šajā lapā jūs varat redzēt visus savus checkout formātus.

Ja vēlaties izveidot jaunu, vienkārši noklikšķiniet uz **Add Checkout Form** (Pievienot checkout formātu) lapas augšējā daļā.

Jūs varat izvēlēties vienu no šiem trīs variantu kā sākumu: vienkāršu soļu, vairāku soļu vai tukšu. Pēc tam noklikšķiniet uz **Lietot redaktoru**.

![Add Checkout Form with single step, multi-step, or blank options](/img/config/checkout-forms-list.png)

Vai alternatīvi, jūs varat rediģēt vai duplikat formus, kas jums jau ir, noklikšķinot uz opcijām, kas atrodas formē nosaukuma zem. Tur jūs arī atrasties iespējas kopēt formē īsskodi vai izslēgt formu.

![Checkout form hover actions with edit, duplicate, and delete](/img/config/checkout-form-hover-actions.png)

Ja jūs izvēlaties vienkāršu soļu vai vairāku soļu, checkout forma jau būs iepriekš iestatīta ar pamata soļus, lai tā varētu darboties. Tad, ja vēlaties, jūs varat pievienot papildu soļus.

### Checkout formē rediģēšana:

Kā mēs iepriekš minējām, varat izveidot checkout formas dažādiem mērķiem. Šajā piemēra mēs strādāsim ar reģistrācijas formu.

Pēc tam, kad navigāt uz checkout formē redaktoru, piedāvājiet formai nosaukumu (kas tiks lietots tikai iekšējai referenci) un slug (lietu īsskodiem, piemēram).

![Checkout form editor with name and slug fields](/img/config/checkout-form-editor.png)

Formas ir sastāv no soļiem un laukiem. Jūs varat pievienot jaunu soļu noklikšķinot uz **Pievienot jaunu checkout soļu**.

![Add New Checkout Step button](/img/config/checkout-form-add-step.png)

Modalā loga pirmajā posmā aizpildiet formēsoja soļas saturu. Piedāvājiet tālnum, nosaukumu un aprakstu. Šie elementi galvenokārt lietojami iekšpusē.

![Checkout step content tab with ID, name, and description](/img/config/checkout-form-step-content.png)

Tālāk, noteikiet soļas redzamību. Jūs varat izvēlēties starp **Vispirms parādīt**, **Parādīt tikai ienācējus** vai **Parādīt tikai viesiem**.

![Checkout step visibility options](/img/config/checkout-form-step-visibility.png)

Visbeid konfigurējiet solīmes stili. Šie lauki ir v 선택i (optīvi).

![Checkout step style configuration](/img/config/checkout-form-step-style.png)

Tagad ir laiks pievienot laukus mūsu pirmās solīmei. Kļūsties uz **Pievienot jaunu lauku** un izvēlieties sekcijas veidu, ko vēlaties.

![Add New Field button](/img/config/checkout-form-step-with-fields.png)![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

Katram laukam ir atšķirīgi parametri, kas jāievada. Šajā pirmā ienākšanās mēs izvēlamies **Username** (Vārds lietotāja) lauku.

![Username field configuration](/img/config/checkout-form-username-content.png)![Username field parameters](/img/config/checkout-form-username-visibility.png)![Username field additional settings](/img/config/checkout-form-username-style.png)

Jūs varat pievienot tantos solīmes un laukus, kā jums ir nepieciešams. Lai parādītu savus produktus klientiem, lai viņi izvēloties viens no tiem, izmantojiet **Pricing Table** (Cen sniegšanas tabulas) lauku. Ja vēlaties ļaut saviem klientiem izvēlēties šablonu, pievienojiet **Template Selection** (Šablonu izvēles) lauku un tā līdzīgus.

_**Piezīme:** Ja jūs izveidat produktu pēc tam, kad veidats jūsu checkout formā, jums būs jāpievieno tas produktus Cen sniegšanas tabulas sekcijā. Ja jūs to nepievienojat, produkti neparādīsies klientiem reģistrācijas lapā._

_**Piezīme 2:** username (vārds lietotāja), email, password (parole), site title (saites nosaukums), site URL (saites adrese), order summary (darba apkopojums), payment (maksājums) un submit button (ievadīt pogas) ir obligāti jāievada checkout formā._

Kamēr strādājat pie savas checkout formām, jūs vienmēr varat izmantot **Preview** (Pievades skatu) pogu, lai redzētu, kā klientiem parādīsies forma. Jūs varat arī mainīt skatu starp redzamību kā jau eksistents lietotājs vai apmeklētā.

![Preview butons piegriezums kasinātnes formulāra redaktētā](/img/config/checkout-form-preview-button.png)![Kasinātnes formulāra previews skatīšana kā apmeklējs vai jau eksistents lietotājs](/img/config/checkout-form-preview-modal.png)

Visbeidzot, **Attiliktās opcijas** (Advanced Options) jūs varat konfigurēt ziņojumu "Paldies" (Thank You) lapai, pievienot skriptus konversiju izsekošanai, pievienot personalizētu CSS stilu savam kasinātnes formulāram vai ierobežot to noteiktos valstīs.

![Attiliktās opcijas ar Paldies lapas ziņojumu, konversijas sekošanu un personalizētu CSS](/img/config/checkout-form-advanced.png)

Jūs varat arī manālie iestatīt vai izslēgt savu kasinātnes formulāru, atspējot šo opciju labajā kolonnā, vai noteikt puslapi formāri pastāvīgi.

![Aktīva pogas un izslēgšanas opcija kasinātnes formulāram](/img/config/checkout-form-active.png)

Neaizmirstiet saglabāt savu kasinātnes formulāru!

![Saglabāt kasinātnes formulāru pogas](/img/config/checkout-form-save.png)

Lai saņemtu jūsu formāras shortcode, noklikšķiniet uz **Izveidot shortcode** (Generate Shortcode) un kopējiet rezultātu, kas redzams modalā logā.

![Shortcode izveidošanas modalais ar shortcode kopēšanai](/img/config/checkout-form-editor.png)

_**Piezīme:** Jums būs jāpievieno šis shortcode savai reģistrācijas lapai, lai to kasinātnes formulārs varētu pievienot.*

## Presei produktu un templatizes ar URL parametrus:

Ja vēlaties izveidot personalizētas cenas tabulas saviem produktiem un presei kasinātnes formulārā, jūs varat izmantot URL parametrus tam.

### **Plānus (plans):**

Dodieties uz **Ultimate Multisite > Products > Select a plan**. Jums jāredzams pogas **Noklikšķiniet kopērt dalīšam saiti** (Click to copy Shareable Link) lapas augšpusē. Tas ir saite, ko varat izmantot, lai presei šo konkrētu plānu savā kasinātnes formulārā.

![Produkta lapa ar dalīšanas saites pogu](/img/config/products-list.png)

Piezīts, ka šis dalīšanās saite ir veidarbātīga tikai **Plāniem**. Nevarat izmantot dalīšanās saites paketēm vai pakalpojumiem.

### Tempiem:

Ja vēlaties iepriekš izvēlēties vietnes tematas formā, kur jūs pieteikties apmeklējot šo URL adresi ar parametru: **?template_id=X**. "X" ir jāmaina ar **vietnes tematas ID numuru**. Šo numuru varat iegūt, dodieties uz **Ultimate Multisite > Sites**.

Noklikšķiniet uz **Manage** (Izvēlēties) tieši zem vietnes tēmas, ko vēlaties izmantot. Jūs redzēsiet SITE ID numuru. Izmantojiet šo numuru tikai šīs konkrētās vietnes tēmas prefrontā, lai to iepriekš izvēlotu formā apmeklējot. Mums šajā gadījumā URL parametrs būtu **?template_id=2**.

![Sites list showing site template ID](/img/config/site-templates-list.png)

Izmantojiet, ja vēlaties iepriekš izvēlēties gan produktus un tematas formā apmeklējot. Visu, kas jums jādarīt, ir kopēt dalīšanās saites plāna un pievienot tēmas parametru beigās. Tas izskatīsies kā **www.mynetwork.com/register/premium-plan/?template**_id=2**.
