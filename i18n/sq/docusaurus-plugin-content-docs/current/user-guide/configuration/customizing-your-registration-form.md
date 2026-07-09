---
title: Përshtatja e Formularit Tuaj të Regjistrimit
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Përshtatja e Formularit tuaj të Regjistrimit

Për ta bërë rrjetin tuaj të duket unik nga të gjitha SaaS-et e tjera të ndërtuara mbi platformën WordPress, Ultimate Multisite ju lejon të përshtatni faqet tuaja të regjistrimit dhe hyrjes me veçorinë tonë **Formularët e Checkout-it**.

Edhe pse ato janë një mënyrë e lehtë dhe fleksibël për të eksperimentuar me qasje të ndryshme kur përpiqeni të konvertoni klientë të rinj, ato përdoren kryesisht për të krijuar formularë regjistrimi të personalizuar. Ky artikull synon t’ju tregojë se si mund ta bëni këtë.

## Faqet e hyrjes dhe regjistrimit:

Pas instalimit të Ultimate Multisite, ai krijon automatikisht faqe të personalizuara hyrjeje dhe regjistrimi në sajtin tuaj kryesor. Ju mund t’i ndryshoni këto faqe të parazgjedhura në çdo kohë duke shkuar te faqja juaj **Ultimate Multisite > Settings > Login & Registration**.

![Faqja e cilësimeve të Hyrjes dhe Regjistrimit](/img/config/settings-general.png)

Ja një pamje e plotë e faqes së cilësimeve të hyrjes dhe regjistrimit:

![Faqja e plotë e cilësimeve të Hyrjes dhe Regjistrimit](/img/config/settings-login-registration-full.png)

Le t’i hedhim një sy secilës prej opsioneve që mund të përshtatni në faqen **Login & Registration**:

  * **Aktivizo regjistrimin:** Ky opsion do të aktivizojë ose çaktivizojë regjistrimin në rrjetin tuaj. Nëse është i çaktivizuar, klientët tuaj nuk do të jenë në gjendje të regjistrohen dhe të abonohen në produktet tuaja.

  * **Aktivizo verifikimin me email:** Nëse ky opsion është i aktivizuar, klientët që abonohen në një plan falas ose në një plan me pagesë me periudhë prove do të marrin një email verifikimi dhe do të duhet të klikojnë në lidhjen e verifikimit që faqet e tyre të internetit të krijohen.

  * **Faqja e parazgjedhur e regjistrimit:** Kjo është faqja e parazgjedhur për regjistrim. Kjo faqe duhet të jetë e publikuar në faqen tuaj të internetit dhe të ketë një formular regjistrimi (i njohur gjithashtu si formular checkout-i) - ku klientët tuaj do të abonohen në produktet tuaja. Mund të krijoni sa faqe regjistrimi dhe formularë checkout-i të dëshironi, thjesht mos harroni të vendosni shortcode-in e formularit të checkout-it në faqen e regjistrimit, përndryshe ai nuk do të shfaqet.

  * **Përdor faqe hyrjeje të personalizuar:** Ky opsion ju lejon të përdorni një faqe hyrjeje të personalizuar, të ndryshme nga faqja e parazgjedhur wp-login.php. Nëse ky opsion është i aktivizuar, mund të zgjidhni se cila faqe do të përdoret për hyrje te opsioni **Faqja e parazgjedhur e hyrjes** (menjëherë më poshtë).

  * **Masko URL-në origjinale të hyrjes (wp-login.php)** : Nëse dëshironi të fshihni URL-në origjinale të hyrjes, mund ta aktivizoni këtë opsion. Kjo është e dobishme për të parandaluar sulmet brute-force. Nëse ky opsion është i aktivizuar, Ultimate Multisite do të shfaqë një gabim 404 kur një përdorues përpiqet të hyjë në lidhjen origjinale wp-login.php

  * **Detyro publikimin sinkron të sajtit:** Pasi një klient abonohet në një produkt në një rrjet, sajti i ri në pritje duhet të konvertohet në një sajt të vërtetë rrjeti. Procesi i publikimit ndodh përmes Job Queue, në mënyrë asinkrone. Aktivizoni këtë opsion për të detyruar publikimin të ndodhë në të njëjtën kërkesë si regjistrimi.

Tani, le të shohim opsione të tjera që janë ende relevante për procesin e hyrjes dhe regjistrimit. Ato janë menjëherë poshtë **Opsione të tjera** në të njëjtën faqe Login & registration:

  * **Roli i parazgjedhur:** Ky është roli që klientët tuaj do të kenë në faqen e tyre të internetit pas procesit të regjistrimit.

  * **Aktivizo Jumper:** Aktivizon shkurtoren Jumper në zonën e administrimit. Jumper u lejon administratorëve të kalojnë shpejt te ekranet e Ultimate Multisite, objektet e rrjetit dhe destinacionet e tjera të mbështetura pa shfletuar çdo menu. Çaktivizojeni nëse preferoni ta fshihni atë mjet të shpejtë navigimi nga ndërfaqja e administrimit.

  * **Shto përdoruesit edhe në sajtin kryesor:** Aktivizimi i këtij opsioni do ta shtojë përdoruesin edhe në sajtin kryesor të rrjetit tuaj pas procesit të regjistrimit. Nëse e aktivizoni këtë opsion, një opsion për të vendosur **rolin e parazgjedhur** të këtyre përdoruesve në faqen tuaj të internetit do të shfaqet gjithashtu menjëherë më poshtë.

  * **Aktivizo llogari të shumta:** Lejon përdoruesit të kenë llogari në sajte të ndryshme të rrjetit tuaj me të njëjtën adresë emaili. Nëse ky opsion është i çaktivizuar, klientët tuaj nuk do të jenë në gjendje të krijojnë një llogari në faqe të tjera interneti që funksionojnë në rrjetin tuaj me të njëjtën adresë emaili.

Dhe këto janë të gjitha opsionet që lidhen me hyrjen dhe regjistrimin që mund të përshtatni! Mos harroni të ruani cilësimet tuaja pasi të përfundoni redaktimin e tyre.

## Përdorimi i formularëve të shumtë të regjistrimit:

Ultimate Multisite 2.0 ofron një redaktues formularësh checkout-i që ju lejon të krijoni sa formularë të dëshironi, me fusha të ndryshme, produkte në ofertë, etj.

Si faqja e hyrjes, ashtu edhe faqja e regjistrimit janë të integruara me shortcode: **[wu_login_form]** në faqen e hyrjes dhe**[wu_checkout]** për faqen e regjistrimit. Mund ta përshtatni më tej faqen e regjistrimit duke ndërtuar ose krijuar formularë checkout-i.

Për të hyrë në këtë veçori, shkoni te menuja **Formularët e Checkout-it**, në shiritin anësor të majtë.

![Menuja Formularët e Checkout-it në shiritin anësor](/img/config/checkout-forms-list.png)

Në këtë faqe, mund të shihni të gjithë formularët e checkout-it që keni.

Nëse dëshironi të krijoni një të ri, thjesht klikoni mbi **Shto Formular Checkout-i** në krye të faqes.

Mund të zgjidhni një nga këto tri opsione si pikën tuaj të nisjes: një hap, shumë hapa ose bosh. Pastaj, klikoni te **Shko te Redaktuesi**.

![Shto Formular Checkout-i me opsione një hap, shumë hapa ose bosh](/img/config/checkout-forms-list.png)

Përndryshe, mund të redaktoni ose dublikoni formularët që keni tashmë duke klikuar mbi opsionet poshtë emrit të tij. Aty, do të gjeni gjithashtu opsionet për të kopjuar shortcode-in e formularit ose për ta fshirë formularin.

![Veprimet kur kaloni miun mbi formularin e checkout-it me redaktim, dublikim dhe fshirje](/img/config/checkout-form-hover-actions.png)

Nëse zgjidhni një hap ose shumë hapa, formulari i checkout-it do të jetë tashmë i parapopulluar me hapat bazë që i nevojiten për të funksionuar. Pastaj, nëse dëshironi, mund t’i shtoni hapa shtesë.

### Redaktimi i një Formulari Checkout-i:

Siç e përmendëm më parë, mund të krijoni formularë checkout-i për qëllime të ndryshme. Në këtë shembull do të punojmë mbi një formular regjistrimi.

Pasi të navigoni te redaktuesi i formularit të checkout-it, jepini formularit tuaj një emër (që do të përdoret vetëm për referencë të brendshme) dhe një slug (i përdorur për të krijuar shortcakes, për shembull).

![Redaktori i formularit të përfundimit të blerjes me fushat e emrit dhe slug-ut](/img/config/checkout-form-name-slug.png)

Formularët përbëhen nga hapa dhe fusha. Mund të shtoni një hap të ri duke klikuar te **Shto hap të ri për përfundimin e blerjes**.

![Butoni Shto hap të ri për përfundimin e blerjes](/img/config/checkout-form-add-step.png)

Në skedën e parë të dritares modale, plotësoni përmbajtjen e hapit të formularit tuaj. Jepini një ID, një emër dhe një përshkrim. Këto elemente përdoren kryesisht brenda sistemit.

![Skeda e përmbajtjes së hapit të përfundimit të blerjes me ID, emër dhe përshkrim](/img/config/checkout-form-step-content.png)

Më pas, vendosni dukshmërinë e hapit. Mund të zgjidhni midis **Shfaq gjithmonë** , **Shfaq vetëm për përdoruesit e identifikuar** ose **Shfaq vetëm për mysafirët**.

![Opsionet e dukshmërisë së hapit të përfundimit të blerjes](/img/config/checkout-form-step-visibility.png)

Në fund, konfiguroni stilin e hapit. Këto janë fusha opsionale.

![Konfigurimi i stilit të hapit të përfundimit të blerjes](/img/config/checkout-form-step-style.png)

Tani, është koha të shtojmë fusha në hapin tonë të parë. Thjesht klikoni te **Shto fushë të re** dhe zgjidhni llojin e seksionit që dëshironi.

![Butoni Shto fushë të re](/img/config/checkout-form-add-field-button.png)![Menyja rënëse e zgjedhjes së llojit të fushës](/img/config/checkout-form-field-type-dropdown.png)

Çdo fushë ka parametra të ndryshëm për t’u plotësuar. Për këtë hyrje të parë, do të zgjedhim fushën **Emri i përdoruesit**.

![Konfigurimi i fushës së emrit të përdoruesit](/img/config/checkout-form-username-content.png)![Parametrat e fushës së emrit të përdoruesit](/img/config/checkout-form-username-visibility.png)![Cilësimet shtesë të fushës së emrit të përdoruesit](/img/config/checkout-form-username-style.png)

Mund të shtoni aq hapa dhe fusha sa ju nevojiten. Për të shfaqur produktet tuaja që klientët tuaj të zgjedhin një, përdorni fushën Tabela e Çmimeve. Nëse dëshironi t’u lejoni klientëve tuaj të zgjedhin një shabllon, shtoni fushën Zgjedhja e Shabllonit. Dhe kështu me radhë.

![Redaktori i formularit të përfundimit të blerjes me fushën e zgjedhjes së shabllonit](/img/config/checkout-form-with-template-field.png)

_**Shënim:** Nëse krijoni një produkt pas krijimit të formularit tuaj të përfundimit të blerjes, do t’ju duhet ta shtoni produktin në seksionin Tabela e çmimeve. Nëse nuk e shtoni, produkti nuk do t’u shfaqet klientëve tuaj në faqen e regjistrimit._

_**Shënim 2:** emri i përdoruesit, email-i, fjalëkalimi, titulli i sajtit, URL-ja e sajtit, përmbledhja e porosisë, pagesa dhe butoni i dorëzimit janë fusha të detyrueshme për të krijuar një formular për përfundimin e blerjes._

Ndërsa po punoni me formularin tuaj të përfundimit të blerjes, mund të përdorni gjithmonë butonin Parapamje për të parë se si klientët tuaj do ta shohin formularin. Gjithashtu mund të alternoni midis pamjes si përdorues ekzistues ose si vizitor.

![Butoni Parapamje në redaktorin e formularit të përfundimit të blerjes](/img/config/checkout-form-preview-button.png)![Parapamja e formularit të përfundimit të blerjes si vizitor ose përdorues ekzistues](/img/config/checkout-form-preview-modal.png)

Në fund, te **Opsionet e avancuara** mund të konfiguroni mesazhin për faqen **Faleminderit**, të shtoni fragmente për të gjurmuar konvertimet, të shtoni CSS të personalizuar në formularin tuaj të përfundimit të blerjes ose ta kufizoni atë në vende të caktuara.

![Opsionet e avancuara me faqen Faleminderit, gjurmimin e konvertimeve dhe CSS të personalizuar](/img/config/checkout-form-advanced.png)

Gjithashtu mund ta aktivizoni ose çaktivizoni manualisht formularin tuaj të përfundimit të blerjes duke ndërruar këtë opsion në kolonën e djathtë, ose ta fshini përgjithmonë formularin.

![Ndërruesi Aktiv dhe opsioni i fshirjes për formularin e përfundimit të blerjes](/img/config/checkout-form-active.png)

Mos harroni ta ruani formularin tuaj të përfundimit të blerjes!

![Butoni Ruaj formularin e përfundimit të blerjes](/img/config/checkout-form-save.png)

Për të marrë shortcode-in e formularit tuaj, klikoni te **Gjenero Shortcode** dhe kopjoni rezultatin e shfaqur në dritaren modale.

![Dritarja modale Gjenero Shortcode me shortcode për ta kopjuar](/img/config/checkout-form-editor.png)

_**Shënim:** Do t’ju duhet ta shtoni këtë shortcode në faqen tuaj të regjistrimit në mënyrë që ky formular i përfundimit të blerjes të shtohet në të._

## Përzgjedhja paraprake e produkteve dhe shablloneve përmes parametrave të URL-së:

Nëse dëshironi të krijoni tabela çmimesh të personalizuara për produktet tuaja dhe të përzgjidhni paraprakisht në formularin e përfundimit të blerjes produktin ose shabllonin që klienti juaj zgjedh nga tabela juaj e çmimeve ose faqja e shablloneve, mund të përdorni parametrat e URL-së për këtë.

### **Për planet:**

Shkoni te **Ultimate Multisite > Produktet > Zgjidh një plan**. Duhet të shihni butonin **Kliko për të kopjuar lidhjen e ndashme** në krye të faqes. Kjo është lidhja që mund të përdorni për të përzgjedhur paraprakisht këtë plan specifik në formularin tuaj të përfundimit të blerjes.

![Faqja e produktit me butonin e lidhjes së ndashme](/img/config/products-list.png)

Vini re se kjo lidhje e ndashme është e vlefshme vetëm për **Planet**. Nuk mund të përdorni lidhje të ndashme për paketa ose shërbime.

### Për shabllonet:

Nëse dëshironi të përzgjidhni paraprakisht shabllonet e sajtit në formularin tuaj të përfundimit të blerjes, mund të përdorni parametrin: **?template_id=X** në URL-në e faqes suaj të regjistrimit. "X" duhet të zëvendësohet me **numrin ID të shabllonit të sajtit**. Për ta marrë këtë numër, shkoni te **Ultimate Multisite > Sitet**.

Klikoni te **Menaxho** menjëherë poshtë shabllonit të sajtit që dëshironi të përdorni. Do të shihni numrin SITE ID. Thjesht përdorni këtë numër për këtë shabllon specifik sajti që të përzgjidhet paraprakisht në formularin tuaj të përfundimit të blerjes. Në rastin tonë këtu, parametri i URL-së do të ishte **?template_id=2**.

![Lista e sajteve që tregon ID-në e shabllonit të sajtit](/img/config/site-templates-list.png)

Le të themi se uebsajti i rrjetit tonë është [**www.mynetwork.com**](http://www.mynetwork.com) dhe faqja jonë e regjistrimit me formularin tonë të përfundimit të blerjes ndodhet në faqen **/register**. URL-ja e plotë me këtë shabllon sajti të përzgjedhur paraprakisht do të duket si [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Dhe nëse dëshironi, mund të përzgjidhni paraprakisht si produktet ashtu edhe shabllonet në formularin tuaj të përfundimit të blerjes. Gjithçka që duhet të bëni është të kopjoni lidhjen e ndashme të planit dhe të ngjitni parametrin e shabllonit në fund. Do të duket si [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
