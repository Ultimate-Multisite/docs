---
title: Reģistrācijas veidlapas pielāgošana
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Reģistrācijas veidlapas pielāgošana

Lai jūsu tīkls izskatītos unikāls salīdzinājumā ar visiem pārējiem SaaS, kas veidoti uz WordPress platformas, Ultimate Multisite ļauj pielāgot reģistrācijas un pieteikšanās lapas ar mūsu **Checkout Forms** funkciju.

Lai gan tās ir vienkāršs un elastīgs veids, kā eksperimentēt ar dažādām pieejām, mēģinot pārvērst jaunus klientus, tās galvenokārt tiek izmantotas personalizētu reģistrācijas veidlapu izveidei. Šī raksta mērķis ir parādīt, kā to varat izdarīt.

## Pieteikšanās un reģistrācijas lapas:

Pēc Ultimate Multisite instalēšanas tas automātiski izveido pielāgotas pieteikšanās un reģistrācijas lapas jūsu galvenajā vietnē. Šīs noklusējuma lapas varat mainīt jebkurā laikā, dodoties uz savu **Ultimate Multisite > Settings > Login & Registration** lapu.

![Pieteikšanās un reģistrācijas iestatījumu lapa](/img/config/settings-general.png)

Šeit ir pilns pieteikšanās un reģistrācijas iestatījumu lapas skats:

![Pieteikšanās un reģistrācijas iestatījumu pilna lapa](/img/config/settings-login-registration-full.png)

Apskatīsim katru no opcijām, ko varat pielāgot **Login & Registration** lapā:

  * **Iespējot reģistrāciju:** Šī opcija iespējos vai atspējos reģistrāciju jūsu tīklā. Ja tā ir izslēgta, jūsu klienti nevarēs reģistrēties un abonēt jūsu produktus.

  * **Iespējot e-pasta verifikāciju:** Ja šī opcija ir ieslēgta, klienti, kas abonē bezmaksas plānu vai maksas plānu ar izmēģinājuma periodu, saņems verifikācijas e-pastu un viņiem būs jānoklikšķina uz verifikācijas saites, lai viņu vietnes tiktu izveidotas.

  * **Noklusējuma reģistrācijas lapa:** Šī ir noklusējuma lapa reģistrācijai. Šai lapai jābūt publicētai jūsu vietnē un tajā jābūt reģistrācijas veidlapai (pazīstamai arī kā checkout veidlapa) — vietai, kur jūsu klienti abonēs jūsu produktus. Varat izveidot tik daudz reģistrācijas lapu un checkout veidlapu, cik vēlaties; tikai atcerieties ievietot checkout veidlapas shortcode reģistrācijas lapā, pretējā gadījumā tā neparādīsies.

  * **Izmantot pielāgotu pieteikšanās lapu:** Šī opcija ļauj izmantot pielāgotu pieteikšanās lapu, nevis noklusējuma wp-login.php lapu. Ja šī opcija ir ieslēgta, varat atlasīt, kura lapa tiks izmantota pieteikšanās vajadzībām, opcijā **Noklusējuma pieteikšanās lapa** (tieši zemāk).

  * **Paslēpt sākotnējo pieteikšanās URL (wp-login.php)** : Ja vēlaties paslēpt sākotnējo pieteikšanās URL, varat ieslēgt šo opciju. Tas ir noderīgi, lai novērstu brute-force uzbrukumus. Ja šī opcija ir iespējota, Ultimate Multisite parādīs 404 kļūdu, kad lietotājs mēģinās piekļūt sākotnējai wp-login.php saitei

  * **Piespiest sinhronu vietnes publicēšanu:** Pēc tam, kad klients abonē produktu tīklā, jaunā gaidošā vietne ir jāpārveido par īstu tīkla vietni. Publicēšanas process notiek caur Job Queue asinhroni. Iespējojiet šo opciju, lai piespiestu publicēšanu notikt tajā pašā pieprasījumā kā reģistrēšanās.

Tagad apskatīsim citas opcijas, kas joprojām ir saistītas ar pieteikšanās un reģistrācijas procesu. Tās atrodas tieši zem **Citas opcijas** tajā pašā Login & registration lapā:

  * **Noklusējuma loma:** Šī ir loma, kas jūsu klientiem būs viņu vietnē pēc reģistrēšanās procesa.

  * **Iespējot Jumper:** Iespējo Jumper saīsni administrēšanas zonā. Jumper ļauj administratoriem ātri pāriet uz Ultimate Multisite ekrāniem, tīkla objektiem un citiem atbalstītiem galamērķiem, nepārlūkojot katru izvēlni. Izslēdziet to, ja vēlaties paslēpt šo ātrās navigācijas rīku no administrēšanas saskarnes.

  * **Pievienot lietotājus arī galvenajai vietnei:** Šīs opcijas iespējošana pēc reģistrēšanās procesa pievienos lietotāju arī jūsu tīkla galvenajai vietnei. Ja iespējosiet šo opciju, tieši zemāk parādīsies arī opcija iestatīt šo lietotāju **noklusējuma lomu** jūsu vietnē.

  * **Iespējot vairākus kontus:** Atļauj lietotājiem izveidot kontus dažādās jūsu tīkla vietnēs ar vienu un to pašu e-pasta adresi. Ja šī opcija ir izslēgta, jūsu klienti nevarēs izveidot kontu citās vietnēs, kas darbojas jūsu tīklā, ar to pašu e-pasta adresi.

Un tās ir visas ar pieteikšanos un reģistrāciju saistītās opcijas, kuras varat pielāgot! Neaizmirstiet saglabāt iestatījumus pēc tam, kad būsiet pabeidzis tos rediģēt.

## Vairāku reģistrācijas veidlapu izmantošana:

Ultimate Multisite 2.0 piedāvā checkout veidlapu redaktoru, kas ļauj izveidot tik daudz veidlapu, cik vēlaties, ar dažādiem laukiem, piedāvātajiem produktiem utt.

Gan pieteikšanās, gan reģistrācijas lapas ir iegultas ar shortcode: **[wu_login_form]** pieteikšanās lapā un**[wu_checkout]** reģistrācijas lapai. Reģistrācijas lapu varat vēl vairāk pielāgot, veidojot vai izveidojot checkout veidlapas.

Lai piekļūtu šai funkcijai, dodieties uz **Checkout Forms** izvēlni kreisajā sānjoslā.

![Checkout Forms izvēlne sānjoslā](/img/config/checkout-forms-list.png)

Šajā lapā varat redzēt visas jums pieejamās checkout veidlapas.

Ja vēlaties izveidot jaunu, vienkārši noklikšķiniet uz **Pievienot Checkout Form** lapas augšdaļā.

Kā sākumpunktu varat atlasīt vienu no šīm trim opcijām: viens solis, vairāki soļi vai tukša. Pēc tam noklikšķiniet uz **Doties uz redaktoru**.

![Pievienot Checkout Form ar viena soļa, vairāku soļu vai tukšām opcijām](/img/config/checkout-forms-list.png)

Alternatīvi varat rediģēt vai dublēt jau esošās veidlapas, noklikšķinot uz opcijām zem tās nosaukuma. Tur atradīsiet arī opcijas, lai kopētu veidlapas shortcode vai dzēstu veidlapu.

![Checkout veidlapas darbības, novietojot kursoru, ar rediģēšanu, dublēšanu un dzēšanu](/img/config/checkout-form-hover-actions.png)

Ja atlasīsiet vienu soli vai vairākus soļus, checkout veidlapa jau būs iepriekš aizpildīta ar pamata soļiem, lai tā darbotos. Pēc tam, ja vēlaties, varat tai pievienot papildu soļus.

### Checkout Form rediģēšana:

Kā jau minējām iepriekš, varat izveidot checkout veidlapas dažādiem mērķiem. Šajā piemērā strādāsim ar reģistrācijas veidlapu.

Pēc pāriešanas uz checkout veidlapas redaktoru piešķiriet savai veidlapai nosaukumu (tas tiks izmantots tikai iekšējai atsaucei) un slug (izmantots, piemēram, shortcode izveidei).

![Norēķinu veidlapas redaktors ar nosaukuma un īsvārda laukiem](/img/config/checkout-form-name-slug.png)

Veidlapas sastāv no soļiem un laukiem. Varat pievienot jaunu soli, noklikšķinot uz **Pievienot jaunu norēķinu soli**.

![Poga Pievienot jaunu norēķinu soli](/img/config/checkout-form-add-step.png)

Modālā loga pirmajā cilnē aizpildiet savas veidlapas soļa saturu. Piešķiriet tam ID, nosaukumu un aprakstu. Šie elementi pārsvarā tiek izmantoti iekšēji.

![Norēķinu soļa satura cilne ar ID, nosaukumu un aprakstu](/img/config/checkout-form-step-content.png)

Pēc tam iestatiet soļa redzamību. Varat izvēlēties starp **Vienmēr rādīt** , **Rādīt tikai lietotājiem, kas ir pierakstījušies** vai **Rādīt tikai viesiem**.

![Norēķinu soļa redzamības opcijas](/img/config/checkout-form-step-visibility.png)

Visbeidzot konfigurējiet soļa stilu. Šie lauki nav obligāti.

![Norēķinu soļa stila konfigurācija](/img/config/checkout-form-step-style.png)

Tagad ir laiks pievienot laukus mūsu pirmajam solim. Vienkārši noklikšķiniet uz **Pievienot jaunu lauku** un atlasiet vēlamo sadaļas tipu.

![Poga Pievienot jaunu lauku](/img/config/checkout-form-add-field-button.png)![Lauka tipa izvēles nolaižamā izvēlne](/img/config/checkout-form-field-type-dropdown.png)

Katram laukam ir atšķirīgi aizpildāmie parametri. Šim pirmajam ievades laukam atlasīsim lauku **Lietotājvārds**.

![Lietotājvārda lauka konfigurācija](/img/config/checkout-form-username-content.png)![Lietotājvārda lauka parametri](/img/config/checkout-form-username-visibility.png)![Lietotājvārda lauka papildu iestatījumi](/img/config/checkout-form-username-style.png)

Varat pievienot tik daudz soļu un lauku, cik nepieciešams. Lai parādītu savus produktus, no kuriem klienti var izvēlēties, izmantojiet cenu tabulas lauku. Ja vēlaties ļaut saviem klientiem izvēlēties veidni, pievienojiet veidnes atlases lauku. Un tā tālāk.

![Norēķinu veidlapas redaktors ar veidnes atlases lauku](/img/config/checkout-form-with-template-field.png)

_**Piezīme:** Ja izveidojat produktu pēc norēķinu veidlapas izveides, produkts būs jāpievieno cenu tabulas sadaļā. Ja to nepievienosiet, produkts neparādīsies jūsu klientiem reģistrācijas lapā._

_**2. piezīme:** lietotājvārds, e-pasts, parole, vietnes nosaukums, vietnes URL, pasūtījuma kopsavilkums, maksājums un iesniegšanas poga ir obligāti lauki, lai izveidotu norēķinu veidlapu._

Kamēr strādājat ar savu norēķinu veidlapu, vienmēr varat izmantot priekšskatījuma pogu, lai redzētu, kā jūsu klienti redzēs veidlapu. Varat arī pārslēgt skatu kā esošs lietotājs vai apmeklētājs.

![Priekšskatījuma poga norēķinu veidlapas redaktorā](/img/config/checkout-form-preview-button.png)![Norēķinu veidlapas priekšskatījums kā apmeklētājam vai esošam lietotājam](/img/config/checkout-form-preview-modal.png)

Visbeidzot, sadaļā **Papildu opcijas** varat konfigurēt ziņojumu **Paldies** lapai, pievienot fragmentus reklāmguvumu izsekošanai, pievienot pielāgotu CSS savai norēķinu veidlapai vai ierobežot to noteiktām valstīm.

![Papildu opcijas ar Paldies lapu, reklāmguvumu izsekošanu un pielāgotu CSS](/img/config/checkout-form-advanced.png)

Varat arī manuāli iespējot vai atspējot savu norēķinu veidlapu, pārslēdzot šo opciju labajā kolonnā, vai neatgriezeniski dzēst veidlapu.

![Aktīvs pārslēgs un dzēšanas opcija norēķinu veidlapai](/img/config/checkout-form-active.png)

Neaizmirstiet saglabāt savu norēķinu veidlapu!

![Poga Saglabāt norēķinu veidlapu](/img/config/checkout-form-save.png)

Lai iegūtu savas veidlapas shortcode, noklikšķiniet uz **Ģenerēt shortcode** un nokopējiet rezultātu, kas redzams modālajā logā.

![Ģenerēt shortcode modālais logs ar kopējamu shortcode](/img/config/checkout-form-editor.png)

_**Piezīme:** Šis shortcode būs jāpievieno jūsu reģistrācijas lapai, lai šī norēķinu veidlapa tiktu tai pievienota._

## Produktu un veidņu iepriekšēja atlase, izmantojot URL parametrus:

Ja vēlaties izveidot pielāgotas cenu tabulas saviem produktiem un norēķinu veidlapā iepriekš atlasīt produktu vai veidni, ko jūsu klients izvēlas no jūsu cenu tabulas vai veidņu lapas, šim nolūkam varat izmantot URL parametrus.

### **Plāniem:**

Dodieties uz **Ultimate Multisite > Produkti > Atlasīt plānu**. Lapas augšdaļā vajadzētu redzēt pogu **Noklikšķiniet, lai kopētu kopīgojamu saiti**. Šī ir saite, ko varat izmantot, lai savā norēķinu veidlapā iepriekš atlasītu šo konkrēto plānu.

![Produkta lapa ar kopīgojamas saites pogu](/img/config/products-list.png)

Ņemiet vērā, ka šī kopīgojamā saite ir derīga tikai **Plāniem**. Kopīgojamās saites nevar izmantot paketēm vai pakalpojumiem.

### Veidnēm:

Ja vēlaties savā norēķinu veidlapā iepriekš atlasīt vietņu veidnes, savas reģistrācijas lapas URL varat izmantot parametru: **?template_id=X**. "X" ir jāaizstāj ar **vietnes veidnes ID numuru**. Lai iegūtu šo numuru, dodieties uz **Ultimate Multisite > Vietnes**.

Noklikšķiniet uz **Pārvaldīt** tieši zem tās vietnes veidnes, kuru vēlaties izmantot. Jūs redzēsiet SITE ID numuru. Vienkārši izmantojiet šo numuru šai konkrētajai vietnes veidnei, lai tā tiktu iepriekš atlasīta jūsu norēķinu veidlapā. Mūsu gadījumā šeit URL parametrs būtu **?template_id=2**.

![Vietņu saraksts, kurā redzams vietnes veidnes ID](/img/config/site-templates-list.png)

Pieņemsim, ka mūsu tīkla vietne ir [**www.mynetwork.com**](http://www.mynetwork.com) un mūsu reģistrācijas lapa ar norēķinu veidlapu atrodas lapā **/register**. Pilnais URL ar iepriekš atlasītu šo vietnes veidni izskatīsies šādi: [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Un, ja vēlaties, varat savā norēķinu veidlapā iepriekš atlasīt gan produktus, gan veidnes. Viss, kas jums jādara, ir jānokopē plāna kopīgojamā saite un beigās jāielīmē veidnes parametrs. Tas izskatīsies šādi: [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
