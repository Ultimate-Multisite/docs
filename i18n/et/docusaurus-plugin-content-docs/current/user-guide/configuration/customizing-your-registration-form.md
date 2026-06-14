---
title: Registreerimise formaadi personaliseerimine
sidebar_position: 17
_i18n_hash: 13f72671d55f48becd6bd89f6571f111
---
# Registreerforma kohandlustamine

Et siis teie võrku tegemist sellega, et see näha erinevalt kõigustest muudelt WordPress platvormil loodud SaaS-laikplatest, võimaldab Ultimate Multisite oma **Checkout Forms** funktsiooniga registreerimise ja logiini lehekülte kohandada.

Kuigi need on lihtne ja jäykuse korral tegemiseks erinevate lähenemiste proovimiseks uute klientide konversioonile pystyt, neid kasutatakse pääsutult isenditavate registreerimise vormide loomiseks. See artikli eesmärk on näidata teil, kuidas seda teha.

## Logiini ja registreerimise leheküled:

Ultimate Multisite paigaldamise korral luuub see automaatselt oma pealele oleva sitele isikupärastatud logiini- ja registreerimise leheküled. Saate neid olles igal ajal muuta, minnes **Ultimate Multisite > Settings > Login & Registration** lehel.

![Logiini ja registreerimise seadistuste lehekülje](/img/config/settings-general.png)

Siin on logiini ja registreerimise seadistuste täielik vaade:

![Logiini ja registreerimise seadistuste täielik lehekülje](/img/config/settings-login-registration-full.png)

Vaatame nüüd iga valikut, mida saate **Login & Registration** lehel kohandada:

  * **Registreerimise aktiveerimine:** See valik aktiveerib või deaktiveerib registreerimise teie võrku jaoks. Kui see on välja lülitatud, ei saa teie klientid oma toote kasutamiseks registreeruda ega abonnireeruda.

  * **E-posti autentimise aktiveerimine:** Kui see valik on sisse lülitatud, saab tasuta plaani või proovivajadusega maksutulise plaani abonnireerivad klientid autentimispilt e-posti ja peavad klikkima autentimelinkile oma veebilehtide loomiseks.

* **Olet pooltide registreeriminu:** See on pooltide registririmisvahetuslehe. Sellele lehe tuleb publikua anda teie veebilehel ja sellel peab olema registreerimiform (teutakse ka ostukorvi forma), kus teie kliendid jälgivad oma toote. Saate luua kui palju registreerimise lehti ja ostukorviformid soovite, kuid mäletage, et tuleb asutada ostukorvi forma shortcode registreerimislehelele, elluti see ei ilmune.

  * **Kasutage oma kasutajale tehtud sisse logi:** See võimaldab kasutada kaunistatud sisselogi lehte, mis on erinev pooltide `wp-login.php` lehelt. Kui seda valikule lülitate sisse, saate välja, millist lehte kasutatakse sisselogi jaoks **Pooltide sisselogile** (koja on just allpool).

  * **Küülatud sisselogi URL-i salvestamine (`wp-login.php`):** Kui soovite salvestada originaalse sisselogi URL, saate seda valikule lülitate sisse. See on kasulik brute-force-takaamise vältimiseks. Kui see valik on aktiveeritud, pooltide Ultimate Multisite näitab 404 viga, kui kasutaja proovib päästa oma originaalse `wp-login.php` linki.

  * **Küülatud veebilehe publikatsioon:** Klient saab toote võtta veekonnale, ja uus ootav veebilehe tuleb muuta tõelise pooltide veebileheks. Publikatsioon protsess toimub Job Queue abil asünkrooniliselt. Lülitage see valik, et pakutada publikatsioon toimuks samas käskudes kui registreerimine.

Nüüd vaadime teisi valikuid, mis on edelleen olulised sisselogi ja registreerimise protsessile seoses. Need on allpool **Teised valikud** sellele sama Sisselogi & registreerimise lehel:

  * **Pooltide roll:** See on see roll, mida teie kliendid oma veebilehel saavad registreerimise pärast.

* **Jumperi aktiveerimine:** Aktiveerib Jumper kiiraltikuks (shortcut) admini juures. Jumper võimaldab administraatorit kiiresti hüpata Ultimate Multisite ekrane, võrkoobjektidele ja teist toetatud kohakojudele ilma iga menüü läbi hoitamata. Lülita see välja, kui soovite seda kiiret navigatsioonivara admini liidesest varjuta.

* **Kasutajate lisamine peale site:** Selle valik aktiveerimine lisab kasutaja samuti teie võrku peale oleva sitele registreerumise pärast. Kui aktiveerite selle valiku, ilmub kohe all võimalus määrata nende kasutajate **oletulet role** teie veebilehel.

* **Paljude kontode aktiveerimine:** Luba kasutajatele saada kontod võrku erinevatele sitele samal e-posti aadressiga. Kui see valik on välja lülitatud, ei saa teie kliendid luua konti teistest võrku veebileheladel samal e-posti aadressiga.

See on kõik võimalused, mida saate isendita sisse logi ja registreerimise seadistustes! Lühlemata muudke oma seadistusi pärast seda, kui olete neid lõpetanud.

## Paljude registreerimiformide kasutamine:

Ultimate Multisite 2.0 pakub kassapult-redaktori, mis võimaldab teil luua nii palju formeid nagu soovite, erinevate väljakohikute ja pakkumiste toodete abil.

Mõlemad logi- ja registreerimispoolid on sisse laaditud skortkodega: **[wu_login_form]** logi poolil ja **[wu_checkout]** registreerimise poolile. Saate registreerimise lehte lisaks isendita kassapult-forme või neid luua.

Selle funktsiooni kasutamiseks külastage vasakust navigatsiooni menüü **Checkout Forms**.

![Checkout Forms menu in the sidebar](/img/config/checkout-forms-list.png)

Seele lehel näete kõik teie olemasolevad kassapult-forme.

Kui soovite uut luua, klõpsake lihtsalt sellele lehe ülaosas **Add Checkout Form** (Lisaindige kassapult-form).

Võimalik on valida ühtest needa kolmest variantist algupunktina: üksik küsimus, mitmeküsimus või tühja. Seejärel klõpsake, et **Minu lehega lahendada**.

![Lisa kassakogumise vorm üheksik küsimusega, mitmeküsimusega või tühjaga variantidega](/img/config/checkout-forms-list.png)

Alternatiivselt saate muuta või duplikat vorme, mida te juba oma poolt luudete, klõpsates selle nime all olevat valikuid. Seal leiate ka võimalusi kopienda vormi shortcode või vormi eemaldada.

![Kassakogumise vormi hover-toimised editimise, duplikat ja eemaldamise jaoks](/img/config/checkout-form-hover-actions.png)

Kui valite üksik küsimust või mitmeküsimust, kassakogumise forma on juba ettevalmistatud alusel basic ülesandeid selle tööks vajalikuks. Seejärel saate, kui soovite, lisada sellele lisaks ülesandeid.

### Kassakogumise vormi muutmise:

Kideses mainisime, et saate luua kassakogumise vorme erinevate eesmärkide jaoks. Selle näites kasutame registreerimise forma.

Navigeerides kassakogumise forma redigeerimisruumi juurde, annate forme nime (mis kasutatakse ainult sisemiseks viidiks) ja slugi (mis kasutatakse shortcode loomiseks, näiteks).

![Kassakogumise vormi redigeerimisu ruum nimi- ja slugi valikudega](/img/config/checkout-form-editor.png)

Formad on ülesandeid ja väljaküsimusi kokku pandud. Saate uue ülesande lisada klõpsates **Lisa uus kassakogumise ülesande**.

![Uue kassakogumise ülesande lisäämine nupp](/img/config/checkout-form-add-step.png)

Modal-aruudu esimesel tabis täidate forme ülesande sisu. Annate sellele ID, nime ja kirjelduse. Need osad kasutatakse pääsutult sisemiseks.

![Kassakogumise ülesande sisu tabID, nimi ja kirjeldusega](/img/config/checkout-form-step-content.png)

Järgmine on ülesande nähtavuse seadistamine. Saate valida **Alati näha**, **Näita ainult logitud kasutajatele** või **Näita ainult külalestele**.

![Checkout step visibility options](/img/config/checkout-form-step-visibility.png)

Lõpuks konfigurige sammide stiil. See on valikuline sisse seadistus.

![Checkout step style configuration](/img/config/checkout-form-step-style.png)

Nüüd on aeg lisada väljeid meie esimesele sammule. Klõpsake **Lisainiku** (Add New Field) ja valige soovitud osakonna tüüp.

![Add New Field button](/img/config/checkout-form-step-with-fields.png)![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

Iga väljendil on erinevad parametrid, mida tuleb täita. Esimese sissepääsu jaoks valime **Username** (Käitja nimi) välja.

![Username field configuration](/img/config/checkout-form-username-content.png)![Username field parameters](/img/config/checkout-form-username-visibility.png)![Username field additional settings](/img/config/checkout-form-username-style.png)

Saate lisada nii palju sammude ja väljeid, kui vajad. Kui soovite esitada oma toote klientidele valikuna, kasutage **Pricing Table** (Hindamine tabel) väljekonfiguratsiooni. Kui soovite, et teie kliendid valiksid šabloni, lisa **Template Selection** (Šabloni valik) väljend. Ja nii edasi.

_**Märkus:** Kui luute toote pärast sissepääsuformaali loomist, pead seda lisama Hindamine tabeli osas. Kui te seda ei lise, toote ei ilmune klientidele registreerimispoolil._

_**Märkus 2:** username (käitja nimi), email, password (parool), site title (sitiutitel), site URL (siti ümber) ja order summary (tellisüht) on pakkuformaali loomiseks peamised väljed._

Teuidas töötamise ajal saate alati kasutada **Preview** (Eelvaate) nupud, et näha, kuidas teie klientidele formaal ilmub. Saate ka vaheldada erinevate kasutajate ja külastuste vahel.

![Preview button on the checkout form editor](/img/config/checkout-form-preview-button.png)![Checkout form preview as visitor or existing user](/img/config/checkout-form-preview-modal.png)

Lõpuks **Advanced Options** väljas ootate konfigurida sõnumi **Thank You** lehel, lisada sissekujundite jälgimiseks snippetsid, lisada oma checkout formile saadud CSS või piirata seda teatud riikidele.

![Advanced Options with Thank You page, conversion tracking, and custom CSS](/img/config/checkout-form-advanced.png)

Võite ka käsitsemata või välja lülitada oma checkout formi antkadesse selle valiku abil paremas kolonn on, või eemaldu oma formi pysseliselt.

![Active toggle and delete option for checkout form](/img/config/checkout-form-active.png)

Ära unustige salvestada oma checkout form!

![Save Checkout Form button](/img/config/checkout-form-save.png)

Formi shortcode saamiseks klõpsake **Generate Shortcode** (Shortcode genereerimine) ja kopige modal finestra loomist näidatud tulemus.

![Generate Shortcode modal with shortcode to copy](/img/config/checkout-form-editor.png)

_**Märkus:** See shortcode peate lisama oma registreerimispoolile, et see checkout formi sellele lisata saaks._

## Toote ja mallide ettevalikamine URL parametrite abil:

Kui soovite luua kohandatud hinnatavastikke teie toodetele ja ettevalida checkout formil toote või malli, mida klient valib oma hinnatavastikute või mallide lehtest, saate selleks kasutada URL parametreid.

### **Plänide jaoks:**

Minimeerige **Ultimate Multisite > Products > Select a plan**. Peal lehel peaks teile näha **Click to copy Shareable Link** (Kopija ja jagamise linki) nuppu. See on link, mida saate kasutada selle spetsiifilise plaaniga ettevalimiseks oma checkout formil.

![Product page with shareable link button](/img/config/products-list.png)

Päriselt see jaotav link on ainult **Plänidele** kehtiv. Jaotavate linkidega ei saa kasutada pakette või teenuse jaoks.

### Mallide jaoks:

Kui soovite valitud veebilehva malle juba ostukorvi vormis ette määrata, saate kasutada parametrit: **?template_id=X** registreerimise lehekülje URL-is. "X" tuleb asendada **veebimalli ID numberiga**. Selle numbrist saate päästa **Ultimate Multisite > Sites** sekkoni.

Klõpsake **Manage** (Hallinta) nupul veebimalli all, mida soovite kasutada. Siis näete SITE ID numberi. Kasutage seda numbril ainult selle konkreetse veebimalli jaoks, et see oleks ette määratud ostukorvi vormis. Meie juhul URL-parameter oleks **?template_id=2**.

![Sites list showing site template ID](/img/config/site-templates-list.png)

Lõpulemiseks, kui meie võrku veebilehva on [**www.mynetwork.com**](http://www.mynetwork.com) ja registreerimise lehekülje koos ostukorvi vormiga asub /register lehel. Kogu URL-i, kus see veebimalli ette määratud on, ilmub näiteks [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Ja kui soovite, saate et ette määrata nii toote kui ka malli ostukorvi vormis. Kõige, mida peate teema on kopienda plaanidele ja liigutada malli parameter endile lõppu. See ilmub näiteks nagu [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
