---
title: Personalizimi i formularit tuaj të regjistrimit
sidebar_position: 17
_i18n_hash: 13f72671d55f48becd6bd89f6571f111
---
# Personalizimi i Formularit të Regjistrimit

Për të bërë që rrjeti juaj të duket unik nga të gjithë tjetrat SaaS të ndërtuara në platformën WordPress, Ultimate Multisite ju lejon të personalizoni faqet tuaja të regjistrimit dhe hyrjes (login) me funksionin tonë **Checkout Forms**.

Edhe pse janë një mënyrë e lehtë dhe fleksibël për të eksperimentuar me njerëzimet e ndryshme kur po përpiqeni të konvertoni klientët e rinj, ato përdoren kryesisht për krijimin e formularëve të regjistrimit personalizuar. Ky artikull synon t'ju tregojë se si mund ta bëni këtë.

## Faqet e hyrjes dhe regjistrimit:

Pas instalimit të Ultimate Multisite, ajo krijon automatikisht faqe të veçanta për hyrje dhe regjistrim në faqen tuaj kryesore. Mund të ndryshoni këto faqe standarde çdo herë duke shkuar te faqja juaj **Ultimate Multisite > Settings > Login & Registration**.

![Login and Registration settings page](/img/config/settings-general.png)

Këtu është një pamje e plotë e faqes së cilës janë opsionet që mund të personalizoni në faqen **Login & Registration**:

![Login and Registration settings full page](/img/config/settings-login-registration-full.png)

Le të shohim secilën nga opsionet që mund të personalizoni në faqen **Login & Registration**:

  * **Enable registration (Përfshir regjistrim):** Ky opsion do të aktivizojë ose të deaktivizojë regjistrimin në rrjetin tuaj. Nëse është i fikur, klientët nuk do të mund të regjistrohen dhe të abonojnë produktet tuaja.

  * **Enable email verification (Përfshir verifikim me email):** Nëse ky opsion është aktiv, klientët që abonojnë për një plan falas ose një plan me periudhë provimi do të marrin një email verifikimi dhe do të duhet të klikojnë në linkin e verifikimit për të krijuar faqet e tyre.

* **Pagja e regjistrimit e dytë:** Kjo është faqja standard për regjistrim. Kjo faqe duhet të publikohet në faquin tuaj dhe të ketë një formular regjistrimi (shpesh quajtur edhe formulari i checkout) - ku klientët tuaj do të abonojnë produktet tuaja. Mund të krijoni sa të dëshironi faqe regjistrimi dhe formate checkout, por kujtojeni që duhet të vendosni shortcode-in e formularit të checkout në faqen e regjistrimit, përndryshe nuk do të shfaqet.

  * **Përdorni një faqe hyrjeje të personalizuar:** Kjo opsion ju lejon të përdorni një faqe hyrjeje të personalizuar, tjetër veçmas nga faqja standarde wp-login.php. Nëse kjo opsion është aktiv, mund të zgjidhni cilën faqe do të përdoret për hyrjen në opsionin **Faqja e hyrjes standarde** (poshtë saj).

  * **Bllokoni URL-n origjinal të hyrjes (wp-login.php):** Nëse dëshironi të fshehni URL-n origjinal të hyrjes, mund ta aktivizoni këtë opsion. Kjo është e dobishme për të parandaluar sulmet brute-force. Nëse ky opsion është i aktivizuar, Ultimate Multisite do të shfaqë një gabim 404 kur përdoruesi provon të aksesojë linkun origjinal wp-login.php

  * **Forco publikimin sinchron:** Pas kur një klient abonon një produkt në një rrjet, faqa e re që është në pritje duhet të konvertohet në një faqe rrjeti reale. Procesi i publikimit ndodh përmes Job Queue, asinkronisht. Aktivizoni këtë opsion për të forcuar publikimin të ndodhë në të njëjtin kërkesë si regjistrimi.

Tani, le të shohim opsione të tjera që janë ende relevante për procesin e hyrjes dhe regjistrimit. Ato gjenden poshtë **Opsionet e tjera** në të njëjtën faqe Hyrjeje & Regjistrimi:

  * **Roli standard:** Ky është roli që klientët tuaj do të kenë në faqen e tyre pas procesit të regjistrimit.

* **Aktivizoni Jumper:** Aktivizon këtë shkurtues Jumper në zonën e adminit. Jumper le hipjes të shpejtë për administratorët drejt ekranëve Ultimate Multisite, objekteve të rrjetit dhe destinacioneve të tjera të mbështetur pa duhur përmes menysë. E ndaloni këtë nëse dëshironi të fshehni atë mjet navigimi të shpejtë nga interfejsi i adminit.

* **Shtoni përdoruesit edhe te faqen kryesore:** Aktivizimi i kësaj opsioni do të shtojë gjithashtu përdoruesin në faqen kryesore të rrjetit tuaj pas procesit të regjistrimit. Nëse aktivizoni këtë opsion, do të shfaqet edhe një opsion për të vendosur **rolin fillestar** të këtyre përdoruesve në faqe juaj.

* **Aktivizoni skedare (kontot) të shumta:** Lehet që përdoruesit të kenë konta në faqe të ndryshme të rrjetit tuaj me të njëjtin adresë e emailit. Nëse ky opsion është i fikur, klientët tuaj nuk do të mund të krijojnë një kontë në web-e të tjera që funksionojnë në rrjetin tuaj me të njëjtën adresë e emailit.

Dhe kjo janë të gjitha opsionet lidhura me hyrjen dhe regjistrimin që mund t'i personalizoni! Mos harroni të ruani cilësimet tuaja pasi përfundoni redaktimin.

## Përdorimi i formulave të shumta regjistrimi:

Ultimate Multisite 2.0 ofron një redaktor formularsh të checkout-it që ju lejon të krijoni sa shumë forma sa dëshironi, me fusha të ndryshme, produkte të ndryshme, etj.

Si faqja e hyrjes (login) ashtu edhe faqja e regjistrimit janë integruar me shortcodes: **[wu_login_form]** në faqen e hyrjes dhe **[wu_checkout]** për faqen e regjistrimit. Ju mund t'i personalizoni më tej faqen e regjistrimit duke ndërtuar ose krijuar forma checkout-i.

Për të aksesuar këtë veçori, shkoni te menynja **Checkout Forms**, në anën e majtë të paneli (sidebar).

![Menyja Checkout Forms në sidebar](/img/config/checkout-forms-list.png)

Nën këtë faqe, ju mund të shihni të gjitha formulat e checkout-it që keni.

Nëse dëshironi të krijoni një të re, thjesht klikoni te **Add Checkout Form** në krye të faqes.

Mund të zgjidhni një nga këto tre opsione si pikë fillestare: hapi i vetëm (single step), shumë hapa (multi-step) ose bosh. Pastaj, klikoni për të **Shkuar në Editor**.

![Add Checkout Form with single step, multi-step, or blank options](/img/config/checkout-forms-list.png)

Alternativ, mund të modifikoni ose të duplikuani formulat që keni tashmë duke klikuar mbi opsionet e poshtë emrit të tyre. Atje gjenden edhe opsionet për kopjimin e shortcode-it të formularit ose për fshirjen e formularit.

![Checkout form hover actions with edit, duplicate, and delete](/img/config/checkout-form-hover-actions.png)

Nëse zgjidhni hapin e vetëm ose shumë hapa, formulari i checkout është tashmë plot me hapat bazë që të funksionojë. Pastaj, nëse dëshironi, mund t'i shtoni hapa ekstra.

### Redaktimi i një Formari i Checkout:

Si e përmendëm më parë, mund të krijoni formulare checkout për qëllime të ndryshme. Në këtë shembull do të punojmë me një formular regjistrimi.

Pas navigimit në editorin e formularit të checkout, i jepni emrin formularit (që do të përdoret vetëm për referencë interne) dhe slug-un (përdoret për krijimin e shortcode-ve, për shembull).

![Checkout form editor with name and slug fields](/img/config/checkout-form-editor.png)

Formularët ndahen në hapa dhe fusha. Mund të shtoni një hap të ri duke klikuar te **Add New Checkout Step**.

![Add New Checkout Step button](/img/config/checkout-form-add-step.png)

Në tabin e parë të dritares modale, plotësoni përmbajtjen e hapis të formularit tuaj. I jepni një ID, emër dhe përshkrim. Këto elemente përdoren kryesisht intern.

![Checkout step content tab with ID, name, and description](/img/config/checkout-form-step-content.png)

Më pas, vendosni dukshmërinë e hapis. Mund të zgjidhni midis **Always show** (Shiko gjithmonë), **Only show for logged in users** (Shiko vetëm për përdorues të hyrë në sistem) ose **Only show for guests** (Shiko vetëm për vizitorë).

![Checkout step visibility options](/img/config/checkout-form-step-visibility.png)

Mbarojeni, konfigurojeni stili të hapësirave (step style). Këto janë fusha opsionale.

![Checkout step style configuration](/img/config/checkout-form-step-style.png)

Tani është koha për të shtuar fusha në hapin tonë të parë. Thjesht klikoni te **Add New Field** (Shtoj Fushë e Re) dhe zgjidhni tipin e seksionit që dëshironi.

![Add New Field button](/img/config/checkout-form-step-with-fields.png)![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

Çdo fushë ka paraqitje të ndryshme që duhet plotësuar. Për këtë hyrje fillestare, do të zgjedhim fushën **Username** (Emri i përdoruesit).

![Username field configuration](/img/config/checkout-form-username-content.png)![Username field parameters](/img/config/checkout-form-username-visibility.png)![Username field additional settings](/img/config/checkout-form-username-style.png)

Ju mund të shtoni sa shumë hap dhe fusha saçues që keni nevojë. Për të shfaqur produktet tuaja për klientët që të zgjedhin një nga to, përdorni fushën Pricing Table (Tavola e Çmimeve). Nëse dëshironi të lejoni klientët të zgjedhin një model (template), shtoni fushën Template Selection. Dhe kështu me radhën.

_**Shënim:** Nëse krijoni një produkt pas krijimit të formularit tuaj të checkout-it, do të duhet ta shtoni produktin në seksionin Pricing table. Nëse nuk e shtoni, produkti nuk do të shfaqet për klientët në faqen e regjistrimit._

_**Shënim 2:** username (emri i përdoruesit), email, password, site title (titulli i faqes), site URL (adresat e faqes), order summary (përmbledhja e porosit) , payment (pagesa) dhe submit button (butoni për dërgesë) janë fusha obligatorike për të krijuar një formular checkout._

Ndërsa po punoni në formularin tuaj të checkout-it, gjithmonë mund të përdorni butonin Preview (Parashikimi) për të parë se si do ta shohin klientët formulën. Ju keni gjithashtu mundësinë të ndryshoni midis pamjes si përdorues ekzistues ose vizitator.

Në fund të gjithë, në **Advanced Options** mund të konfigurosh mesazhin për faqen e **Falënduar (Thank You)**, të shtosh snippet-e për monitorimin e konvertimeve, të shton CSS personal nga i formatit i formularit të tekës suaj ose ta kufizosh në vende specifike.

![Advanced Options me faqe Falënduese, trackim konvertimesh dhe CSS personal](/img/config/checkout-form-advanced.png)

Edhe mund ta aktivizosh apo i deaktivizosh formularin e tekës suaj manualisht duke ndryshuar këtë opsion në kolonën e djathtë, ose ta fshish përgjithmonë formularin.

![Togli aktivo dhe opsioni për fshirjen e formularit të tekës suaj](/img/config/checkout-form-active.png)

Mos harro të ruash formularin e tekës suaj!

![Butoni Ruaj Formularin e Tekës Suaj](/img/config/checkout-form-save.png)

Për të marrë shortcode-in e formularit tuaj, klikoni në **Generate Shortcode** dhe kopjoni rezultatin që shfaqet në dritaren modale.

![Modali Generimi i Shortcode-it me shortcode për kopjim](/img/config/checkout-form-editor.png)

_**Shënim:** Do të duhet ta shtoni këtë shortcode në faqen tuaj të regjistrimit që ky formular i tekës suaj do të shtohet aty._

## Pre-selektimi i produkteve dhe template-ve përmes parametrave URL:

Nëse dëshiron të krijosh tabela çmime personalizuara për produktet e tua dhe të pre-selektosh në formularin e tekës suaj produktin ose template-in që klienti zgjedh nga tabela jote e çmimeve ose faqja e template-ve, mund të përdorësh parametrat URL për kët.

### **Për plane:**

Shkoni te **Ultimate Multisite > Products > Select a plan**. Do të shihni butonin **Click to copy Shareable Link** në krye të faqes. Ky është linku që mund ta përdorni për pre-selektimin e kësaj plane specifike në formularin e tekës suaj.

![Faqja e produktit me buton linkues](/img/config/products-list.png)

Ky link i mund të përdoret vetëm për **Plana**. Nuk mund të përdorni linkje të ndara (shareable links) për paketa ose shërbime.

### Për template:

Nëse dëshironi të zgjidhni parapharma site-të në formularin tuaj të pagesës, mund të përdorni parametrin: **?template_id=X** në URL-n e faqes tuaj të regjistrimit. "X" duhet zëvendësuar me **numrin e ID-së së template-s së site-t**. Për të marrë këtë numër, shkoni te **Ultimate Multisite > Sites**.

Klikoni në **Manage** (Menaxho) menjëherë poshtë template-s që dëshironi të përdorni. Do të shihni numrin e ID-së SITES. Përdorni thjesht këtë numër për këtë template specifik që të jetë i zgjedhur paraprakisht në formularin tuaj të pagesës. Në rastin ton, parametri URL do të jetë **?template_id=2**.

![Lista e site-ve me ID-n e template-s](/img/config/site-templates-list.png)

Supozojmë se faqja jonë e rrjetit është [**www.mynetwork.com**](http://www.mynetwork.com) dhe faqja jonë e regjistrimit me formularin tuaj të pagesës ndodhet në faqen **/register**. I gjithë URL-i me këtë template i zgjedhur paraprakisht do të duket si [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Dhe nëse dëshironi, mund të zgjidhni parapharma të dy produktet dhe template-t në formularin tuaj të pagesës. Gjithçka që duhet të bëni është të kopjoni linkun e ndarur (shareable link) të planit dhe të ngjisni parametrin e template-s në fund. Do të duket si [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
