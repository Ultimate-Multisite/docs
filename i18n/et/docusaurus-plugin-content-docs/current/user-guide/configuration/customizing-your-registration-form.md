---
title: Registreerimisvormi kohandamine
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Registreerimisvormi kohandamine

Et muuta sinu võrgustik kõigi teiste WordPress platvormile ehitatud SaaS-lahenduste seast ainulaadseks, võimaldab Ultimate Multisite kohandada registreerimis- ja sisselogimislehti meie **Checkout Forms** funktsiooniga.

Kuigi need on lihtne ja paindlik viis katsetada erinevaid lähenemisi uute klientide konverteerimiseks, kasutatakse neid enamasti isikupärastatud registreerimisvormide loomiseks. Selle artikli eesmärk on näidata, kuidas seda teha.

## Sisselogimis- ja registreerimislehed: {#login-and-registration-pages}

Ultimate Multisite paigaldamisel loob see automaatselt kohandatud sisselogimis- ja registreerimislehed sinu peamisele saidile. Neid vaikelehti saad igal ajal muuta, minnes lehele **Ultimate Multisite > Settings > Login & Registration**.

![Sisselogimise ja registreerimise seadete leht](/img/config/settings-general.png)

Siin on sisselogimise ja registreerimise seadete lehe täielik vaade:

![Sisselogimise ja registreerimise seadete täisleht](/img/config/settings-login-registration-full.png)

Vaatame iga valikut, mida saad **Login & Registration** lehel kohandada:

  * **Luba registreerimine:** See valik lubab või keelab registreerimise sinu võrgustikus. Kui see on välja lülitatud, ei saa sinu kliendid registreeruda ega sinu tooteid tellida.

  * **Luba e-posti kinnitamine:** Kui see valik on sisse lülitatud, saavad kliendid, kes tellivad tasuta paketi või tasulise paketi prooviperioodiga, kinnituskirja ning peavad klõpsama kinnituslingil, et nende veebisaidid loodaks.

  * **Vaikimisi registreerimisleht:** See on registreerimise vaikeleht. See leht peab olema sinu veebisaidil avaldatud ja sisaldama registreerimisvormi (tuntud ka kui checkout-vorm) – kus sinu kliendid tellivad sinu tooteid. Saad luua nii palju registreerimislehti ja checkout-vorme, kui soovid; pea lihtsalt meeles lisada checkout-vormi shortcode registreerimislehele, muidu seda ei kuvata.

  * **Kasuta kohandatud sisselogimislehte:** See valik võimaldab kasutada kohandatud sisselogimislehte, mis erineb vaikimisi wp-login.php lehest. Kui see valik on sisse lülitatud, saad valida, millist lehte kasutatakse sisselogimiseks valikus **Default login page** (kohe allpool).

  * **Peida algne sisselogimise URL (wp-login.php)** : Kui soovid algse sisselogimise URL-i peita, saad selle valiku sisse lülitada. See on kasulik jõurünnakute vältimiseks. Kui see valik on lubatud, kuvab Ultimate Multisite 404 vea, kui kasutaja üritab avada algset wp-login.php linki

  * **Sunni sünkroonset saidi avaldamist:** Pärast seda, kui klient tellib võrgustikus toote, tuleb uus ootel sait teisendada päris võrgustiku saidiks. Avaldamisprotsess toimub Job Queue kaudu asünkroonselt. Luba see valik, et sundida avaldamist toimuma samas päringus nagu registreerumine.

Nüüd vaatame teisi valikuid, mis on endiselt sisselogimis- ja registreerimisprotsessi jaoks asjakohased. Need asuvad samal Login & registration lehel jaotise **Other options** all:

  * **Vaikeroll:** See on roll, mis sinu klientidel pärast registreerumisprotsessi oma veebisaidil on.

  * **Luba Jumper:** Lubab Jumper otsetee adminialas. Jumper võimaldab administraatoritel kiiresti liikuda Ultimate Multisite ekraanidele, võrgustiku objektidele ja muudesse toetatud sihtkohtadesse, ilma et peaks iga menüüd läbi sirvima. Lülita see välja, kui eelistad selle kiire navigeerimistööriista adminiliidesest peita.

  * **Lisa kasutajad ka peamisele saidile:** Selle valiku lubamine lisab kasutaja pärast registreerumisprotsessi ka sinu võrgustiku peamisele saidile. Kui lubad selle valiku, ilmub kohe allpool ka valik määrata nende kasutajate **vaikeroll** sinu veebisaidil.

  * **Luba mitu kontot:** Luba kasutajatel omada kontosid sinu võrgustiku erinevatel saitidel sama e-posti aadressiga. Kui see valik on välja lülitatud, ei saa sinu kliendid sama e-posti aadressiga luua kontot teistel sinu võrgustikus töötavatel veebisaitidel.

Ja need ongi kõik sisselogimise ja registreerimisega seotud valikud, mida saad kohandada! Ära unusta pärast muutmise lõpetamist oma seadeid salvestada.

## Mitme registreerimisvormi kasutamine: {#using-multiple-registration-forms}

Ultimate Multisite 2.0 pakub checkout-vormi redaktorit, mis võimaldab luua nii palju vorme, kui soovid, erinevate väljade, pakutavate toodete jne jaoks.

Nii sisselogimis- kui ka registreerimislehed on manustatud shortcodidega: **[wu_login_form]** sisselogimislehel ja**[wu_checkout]** registreerimislehe jaoks. Saad registreerimislehte veelgi kohandada, ehitades või luues checkout-vorme.

Selle funktsiooni avamiseks mine vasakpoolsel külgribal menüüsse **Checkout Forms**.

![Checkout Forms menüü külgribal](/img/config/checkout-forms-list.png)

Sellel lehel näed kõiki oma checkout-vorme.

Kui soovid luua uue, klõpsa lihtsalt lehe ülaosas **Add Checkout Form**.

Saad valida lähtepunktiks ühe neist kolmest valikust: ühe sammuga, mitme sammuga või tühi. Seejärel klõpsa **Go to the Editor**.

![Lisa Checkout Form ühe sammu, mitme sammu või tühja valikuga](/img/config/checkout-forms-list.png)

Teise võimalusena saad juba olemasolevaid vorme muuta või dubleerida, klõpsates nende nime all olevatel valikutel. Sealt leiad ka valikud vormi shortcode’i kopeerimiseks või vormi kustutamiseks.

![Checkout-vormi hõljutustoimingud muutmise, dubleerimise ja kustutamisega](/img/config/checkout-form-hover-actions.png)

Kui valid ühe sammu või mitme sammuga variandi, on checkout-vorm juba eeltäidetud põhisammudega, et see toimiks. Seejärel saad soovi korral sellele lisasamme lisada.

### Checkout Formi muutmine: {#editing-a-checkout-form}

Nagu varem mainisime, saad luua checkout-vorme erinevateks eesmärkideks. Selles näites töötame registreerimisvormiga.

Pärast checkout-vormi redaktorisse liikumist anna vormile nimi (mida kasutatakse ainult sisemiseks viiteks) ja slug (kasutatakse näiteks shortcode’ide loomiseks).

![Checkout-vormi redaktor nime ja slug’i väljadega](/img/config/checkout-form-name-slug.png)

Vormid koosnevad sammudest ja väljadest. Saate lisada uue sammu, klõpsates **Lisa uus checkout’i samm**.

![Lisa uus checkout’i samm nupp](/img/config/checkout-form-add-step.png)

Modaaliakna esimesel vahekaardil täitke oma vormi sammu sisu. Andke sellele ID, nimi ja kirjeldus. Neid elemente kasutatakse enamasti sisemiselt.

![Checkout’i sammu sisu vahekaart ID, nime ja kirjeldusega](/img/config/checkout-form-step-content.png)

Järgmisena määrake sammu nähtavus. Saate valida **Näita alati** , **Näita ainult sisse logitud kasutajatele** või **Näita ainult külalistele**.

![Checkout’i sammu nähtavuse valikud](/img/config/checkout-form-step-visibility.png)

Lõpuks seadistage sammu stiil. Need on valikulised väljad.

![Checkout’i sammu stiili seadistus](/img/config/checkout-form-step-style.png)

Nüüd on aeg lisada väljad meie esimesse sammu. Klõpsake lihtsalt **Lisa uus väli** ja valige soovitud jaotise tüüp.

![Lisa uus väli nupp](/img/config/checkout-form-add-field-button.png)![Välja tüübi valiku rippmenüü](/img/config/checkout-form-field-type-dropdown.png)

Igal väljal on erinevad parameetrid, mis tuleb täita. Selle esimese sisestuse jaoks valime välja **Kasutajanimi**.

![Kasutajanime välja seadistus](/img/config/checkout-form-username-content.png)![Kasutajanime välja parameetrid](/img/config/checkout-form-username-visibility.png)![Kasutajanime välja lisaseaded](/img/config/checkout-form-username-style.png)

Saate lisada nii palju samme ja välju, kui vajate. Selleks, et kuvada oma tooteid klientidele valimiseks, kasutage hinnatabeli välja. Kui soovite lasta oma klientidel valida malli, lisage mallivaliku väli. Ja nii edasi.

![Checkout-vormi redaktor mallivaliku väljaga](/img/config/checkout-form-with-template-field.png)

_**Märkus:** Kui loote toote pärast checkout-vormi loomist, peate lisama toote hinnatabeli jaotisse. Kui te seda ei lisa, ei ilmu toode teie klientidele registreerimislehel._

_**Märkus 2:** kasutajanimi, e-post, parool, saidi pealkiri, saidi URL, tellimuse kokkuvõte, makse ja esitamisnupp on checkout-vormi loomiseks kohustuslikud väljad._

Checkout-vormi kallal töötades saate alati kasutada eelvaate nuppu, et näha, kuidas teie kliendid vormi näevad. Samuti saate vahetada vaadet olemasoleva kasutaja ja külastaja vahel.

![Eelvaate nupp checkout-vormi redaktoris](/img/config/checkout-form-preview-button.png)![Checkout-vormi eelvaade külastajana või olemasoleva kasutajana](/img/config/checkout-form-preview-modal.png)

Lõpuks saate jaotises **Täpsemad valikud** seadistada **Aitäh** lehe sõnumi, lisada koodijuppe konversioonide jälgimiseks, lisada oma checkout-vormile kohandatud CSS-i või piirata seda teatud riikidega.

![Täpsemad valikud koos Aitäh lehe, konversioonide jälgimise ja kohandatud CSS-iga](/img/config/checkout-form-advanced.png)

Samuti saate oma checkout-vormi käsitsi lubada või keelata, lülitades selle valiku parempoolses veerus sisse või välja, või vormi jäädavalt kustutada.

![Aktiivsuse lüliti ja kustutamisvalik checkout-vormi jaoks](/img/config/checkout-form-active.png)

Ärge unustage oma checkout-vormi salvestada!

![Salvesta checkout-vorm nupp](/img/config/checkout-form-save.png)

Vormi lühikoodi saamiseks klõpsake **Genereeri lühikood** ja kopeerige modaaliaknas kuvatud tulemus.

![Genereeri lühikood modaal lühikoodiga, mida kopeerida](/img/config/checkout-form-editor.png)

_**Märkus:** Peate lisama selle lühikoodi oma registreerimislehele, et see checkout-vorm sinna lisataks._

## Toodete ja mallide eelvalimine URL-i parameetrite kaudu: {#pre-selecting-products-and-templates-via-url-parameters}

Kui soovite luua oma toodetele kohandatud hinnatabeleid ja eelvalida checkout-vormil toote või malli, mille teie klient valib teie hinnatabelist või mallide lehelt, saate selleks kasutada URL-i parameetreid.

### **Plaanide jaoks:** {#for-plans}

Minge jaotisse **Ultimate Multisite > Tooted > Vali plaan**. Lehe ülaosas peaksite nägema nuppu **Klõpsa jagatava lingi kopeerimiseks**. See on link, mida saate kasutada selle konkreetse plaani eelvalimiseks oma checkout-vormil.

![Tooteleht jagatava lingi nupuga](/img/config/products-list.png)

Pange tähele, et see jagatav link kehtib ainult **plaanide** jaoks. Te ei saa kasutada jagatavaid linke pakettide või teenuste jaoks.

### Mallide jaoks: {#for-templates}

Kui soovite checkout-vormil saidi malle eelvalida, saate oma registreerimislehe URL-is kasutada parameetrit: **?template_id=X**. "X" tuleb asendada **saidi malli ID-numbriga**. Selle numbri saamiseks minge jaotisse **Ultimate Multisite > Saidid**.

Klõpsake **Halda** kohe selle saidi malli all, mida soovite kasutada. Näete SITE ID numbrit. Kasutage lihtsalt seda numbrit selle konkreetse saidi malli jaoks, et see oleks teie checkout-vormil eelvalitud. Meie näites oleks URL-i parameeter **?template_id=2**.

![Saitide loend saidi malli ID-ga](/img/config/site-templates-list.png)

Oletame, et meie võrgustiku veebisait on [**www.mynetwork.com**](http://www.mynetwork.com) ja meie registreerimisleht koos checkout-vormiga asub lehel **/register**. Kogu URL selle eelvalitud saidi malliga näeb välja selline: [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Ja kui soovite, saate checkout-vormil eelvalida nii tooted kui ka mallid. Kõik, mida peate tegema, on kopeerida plaani jagatav link ja kleepida malli parameeter selle lõppu. See näeb välja selline: [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
