---
title: Shabllonjtë e faqes
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# Shkulpet për Shte të Shteteve (v2) {#site-templates-v2}

_**SHËNJE: Ky artikull i referohet Ultimate Multisite version 2.x. Nëse po përdorni versionin 1.x,**_ **shikoni këtë artikull.**_

Qëllimi ynë kur krijojmë një rrjet premium me Ultimate Multisite është të automatizojmë sa më shumë procese sa mundet, duke i dhënë klientëve fleksibilitet dhe opsione të ndryshme për të zgjedhur kur krijojnë faqe interneti të tyre. Një mënyrë e thjeshtë për të arritur këtë balancë është përdorimi i veçorit Ultimate Multisite Site Templates.

## Çfarë është një Template i Shteve? {#what-is-a-site-template}

Siç sugjeron emri, një Template i Shteve është një faqe bazë (boilerplate site) që mund të përdoret si bazë kur krijoni faqe të reja në rrjetin tuaj.

Kjo do të thotë që ju mund të krijoni një faqe bazë, të aktivizoni plugin-e të ndryshme, të vendosni një temë aktive dhe ta personalizoni sa dëshironi. Pastaj, kur klienti ju krijon një llogari të re, në vend që të marrin një faqe WordPress standarde pa përmbajtje kuptueshme brenda saj, ata do të marrin një kopje të faqes bazë tuaj me të gjitha personalizimet dhe përmbajtjet tashmë të vendosura.

Kjo tingëllon fantastike, por si krijoj një template të ri të faqes? Është sa më e thjeshtë që mund të jetë.

## Krijimi dhe Redaktimi i një Template të Ri i Shteve {#creating-and-editing-a-new-site-template}

Template-t e Shteve janë thjesht faqe normale në rrjetin tuaj. Për të krijuar një template të ri, ju mjafton të shkoni në **Network Admin > Ultimate Multisite > Sites > Add Site.**

**![Butoni për shtimin e faqes në faqen listuese të faqeve të Shteve](/img/config/site-templates-list.png)**

Kjo do të hapë një dritare modale ku do të kërkojë **Titullin e faqes, Domenin/Rrutën e faqes** dhe **Tipin e faqes**. Në fushën e derullimit (drop-down) për **Tipin e faqes**, sigurohuni që të zgjidhni **Site Template** *.

_![Modalja e shtimit të template-t të faqes me derullimin e tipit të faqes](/img/config/site-templates-list.png)_

Ju mund të shtoni gjithashtu një përshkrim për klientin që shpjegon se çfarë përfshin template-i:

![Site template description field on the site template edit screen](/img/config/site-template-edit-description.png)

Në fund të formularit, do të keni një ndërruese (toggle switch) për **Kopjen e Siti** (Copy Site). Kjo ju lejon të krijoni një model të ri të sitit bazuar në një model ekzistues si pikë fillestare, duke ju ndihmuar të ruani kohë dhe jo të krijoni një model nga e para.

![Add site template modal with copy site toggle](/img/config/site-templates-list.png)

### Personalizimi i përmbajtjes së një Modelit të Sitis {#customizing-the-contents-of-a-site-template}

Për të personalizuar modelin tuaj të sitit, thjesht shkoni në panelin e tij (dashboard) dhe bëni ndryshimet që keni nevojë. Mund të krijoni postime, faqe, aktivizoni plugin-e dhe ndryshoni temën aktive. Mund edhe të shkoni te Customizer dhe të ndryshoni të gjitha opsionet e personalizimit.

![Site template edit interface](/img/config/site-template-edit.png)

Të gjitha këto të dhëna do kopjohen kur një klient krijon një sit të ri bazuar në atë Model të Sitis.

### Opsionet Avancive {#advanced-options}

Nëse keni njohuri me kodim të ndonjesh, mund të përdorni API-në tonë për Kërkim dhe Zëvendësim (Search and Replace) për të zëvendësuar automatikisht informacionin në sitin e ri pas krijimit. Kjo është e dobishme për gjëra si zëvendësimin e emrave të kompanive në faqen "Rreth nesh" (About page), zëvendësimin e adresës së email-it kontakt në faqen Kontakt, etj.

### Përdorimi i Modeleve të Sitis {#using-site-templates}

Mirë, keni krijuar një sërë modele të sitit me dizajne, teme dhe cilësime të ndryshme. Si ta bëni ato të dobishme në rrjetin tuaj tani?

Në thelb, ekzistojnë dy mënyra që mund t'i përdorni tani (nuk njëkohësisht):

  * **Ngarkimi i një Modelit të Sitis në çdo Plan**

**Ose**

  * **Lejshimi për klientët tuaj të zgjedhin vetë modelet e sitit gjatë regjistrimit.**

#### Mode 1: Ngarkimi i Modelit të Sitis {#mode-1-assign-site-template}

Në këtë mod, klientët nuk do të mund të zgjedhin një template kur krijojnë një llogari, por ju do të vendosni cilin template duhet të përdoret në çdo Plan që keni.

Për të bërë këtë, do t'i duhet të shkoni te **Ultimate Multisite > Products > Edit**.

![Edit product to assign site template](/img/config/product-site-templates.png)

Kjo ju do të çojë në faqen e **Edit Product**. Në seksionin **Product Options**, gjeni tabin **Site template** dhe zgjidhni opsionin **Assign Site Template** nga fusha me rullues (drop-down). Kjo do t'ju shfaq listën e templateve të ndërtesave (site templates) që janë në dispozicion dhe ju lejon të zgjidhni vetëm një template të ndërtesës për produktin.

![Product site template tab with assign site template option](/img/config/product-site-templates.png)

#### Mod 2: Zgjidh Template të Përshtatshëm të Disponueshëm {#mode-2-choose-available-site-template}

Në këtë mod, ju do t'i jepni klientëve një zgjedhje gjatë procesit të regjistrimit (sign-up). Ata do të mund të zgjedhin nga template të ndërtesave të ndryshme që definoni në cilësimet e produktit. Keni opsionin për të kufizuar template të ndërtesës që ata mund të zgjedhin nën produktin e zgjedhur. Kjo ju lejon të keni grupe të ndryshme template të ndërtesave nën çdo produkt, gjë ideale për të theksuar funksione dhe veçori të ndryshme për një produkt me çmimin më të lartë.

N faqen **Edit Product** (Redaktimi i Produktit). Në seksionin **Product Options** (Opsioni i Produktit), gjeni tabin **Site template** dhe zgjidhni opsionin **Choose Available Site Template** nga fusha e listës së derullimit. Kjo do të hapë listën e template-ve të disponueshme dhe ju lejon të zgjidhni template-n site që dëshironi të jetë i disponueshëm. Mund ta bëni këtë duke zgjedhur sjelljen e tij: **Available** (I Disponueshëm) nëse dëshironi që template-t i site të jetë i përfshirë në listë, _**Not Available**_ (Jo I Disponueshëm) nëse nuk dëshironi që template-t i site të shfaqet si opsion. Dhe **Pre-selected** (Përparuar zgjedhur) nëse dëshironi që një nga template-t i site listuar të jetë i zgjedhur si paradatore.

![Choose available site templates with behavior options](/img/config/product-site-templates.png)

### Mode Paradatore: Zgjedhja e template-s së site në formularin e Checkout (Kasa) {#default-mode-site-template-selection-on-the-checkout-form}

Nëse dëshironi që të gjithë template-t i site juaj të jenë të disponueshëm gjatë regjistrimit, ose ndoshta nuk dëshironi të bëni punë shtesë duke i dhënë apo specifikuar template-t e site nën çdo produkt që krijoni. Atëherë mund ta vendosni zgjedhjen e template-s së site nën **Checkout Form** (Formulari i Kases). Për të bërë këtë, shkoni te **Ultimate Multisite > Checkout Forms** dhe klikoni **Edit** nën formularin që dëshironi të konfigurojuni.

Kjo do të hapë faqen **Edit Checkout Form** (Redaktimi i Formulari i Kases). Gjeni fushën **Template Selection** (Zgjedhja e Template-s) dhe klikoni **Edit** nën atë.

Do të shfaqet një dritare modale. Në fushën **Template Sites** mund të zgjidhni dhe listoni të gjithë template-t e site që dëshironi të jenë i disponueshëm gjatë regjistrimit. Template-t e site që specifikoni këtu do të jenë të disponueshëm pavarësisht produktit që zgjedhur nga përdoruesi.

![Template selection field in the checkout form editor](/img/config/checkout-form-template-step.png)

Në frontend, klientët e shohin zgjedhjen e template-s gjatë procesit të kases dhe mund të zgjedhin dizajnin fillestar për sitin e tyre të ri.

![Frontend template chooser during registration](/img/config/frontend-template-chooser.png)

### Opsioni të Templateve të Sijës së Vendit (Site Template Options) {#site-template-options}

Ekzistojnë edhe funksione të tjera të templateve të vendit që mund t'i aktivizoni ose i deaktivizoni në cilësimet e Ultimate Multisite.

![Opsionet e templateve të vendit në cilësimet e Ultimate Multisite](/img/config/settings-sites-templates-section.png)

#### Lejo Ndryshimin e Templateve (Allow Template Switching) {#allow-template-switching}

Aktivizimi i kësaj opsioni do t'i lejojë klientëve të ndryshojnë template-in që zgjedhin gjatë procesit të regjistrimit pas krijimit të llogarisë dhe vendit. Kjo është e dobishme nga pikëpamja e klientit sepse i lejon atyre të rizgjedhin një template nëse më vonë zbulojnë se zgjedhja origjinale nuk ishte më e mirë për nevojat specifike të tyre.

#### Lejo Përdoruesve të përdorin Vendin si template {#allow-users-to-use-their-site-as-templates}

Pasi përdoruesit e subsite-ve kanë pasur kohë në ndërtimin dhe dizajnin e vendit të tyre, mund të duan ta koprojnë dhe t'i përdorin atë si një nga template-të e disponueshme kur krijojnë një subsite tjetër në rrjetin tuaj. Ky opsion do t'u lejojë të arrijnë këtë.

#### Kopjo Media në Duplikat Templateve (Copy Media on Template Duplication) {#copy-media-on-template-duplication}

Kontrollimi i kësaj opsioni do të kopojë median e ngarkuar në vendin template-t dhe në vendin e krijuar me vjetër. Kjo mund të kalojë në çdo plan.

#### **Pryndjeshja e Motorëve të Kërkimit nga Indeksimi i Templateve të Vendit (Prevent Search Engines from indexing Site Templates)** {#prevent-search-engines-from-indexing-site-templates}

Template-t e vendit, siç u diskutuan në këtë artikull, janë boilerplate por mbeten pjesë e rrjetit tuaj, gjë që do të thotë se ato janë ende të disponueshme për motorët e kërkimit. Ky opsion do t'ju lejojë të fshehni template-t e vendit në mënyrë që motorët e kërkimit të mund t'i indeksojnë.

## Përgatitja e Templateve të Vendit me kërkim dhe zëvendësim automatik (Pre-populating Site Templates with auto search-and-replace) {#pre-populating-site-templates-with-auto-search-and-replace}

Një nga funksionet më të fuqishme të Ultimate Multisite është aftësia për të shtuar tekst, ngjyrë dhe fusha të çdo lloj i dëshironi në formularin e regjistrimit. Pasi kemi këtë të dhënë, mund ta përdorim atë për të mbushur para-përmbushur përmbajtjen në pjesë specifike të shablonit të vendosur. Pastaj, kur ndodhet publikimi i faqes së re, Ultimate Multisite do të zëvendësojë placeholder-t e vërtetë me informacionin që u hyri gjatë regjistrimit.

Për shembull, nëse dëshironi të merrni emrin e kompanisë të përdoruesit tuaj përfundimtar gjatë regjistrimit dhe automatikisht ta vendosni emrin e kompanisë në faqen kryesore. Në faqen kryesore të shablonit tuaj, ju duhet të shtoni placeholder-t, siç është në imazhin më poshtë (placeholder-t duhet të rrethohen nga dy kllapa kurshore - {{emri_i_placeholder}}).

![Homepage with placeholder text in curly braces](/img/config/site-templates-list.png)

Pastaj, mund thjesht të shtoni një fushë që përputhet në formularin tuaj të pagesës (checkout form) për të marrë atë të dhënë. Editori i të njëjtës forme të pagesës që përdoret për zgjedhjen e shablonit ju lejon të vendosni fusha të personalizuara pranë zgjedhjes së shablonit:

![Template selection and registration fields in the checkout form editor](/img/config/checkout-form-template-step.png)

Klienti juaj pastaj do të mund të plotësojë këtë fushë gjatë regjistrimit.

![Frontend checkout form with template chooser](/img/config/frontend-template-chooser.png)

Ultimate Multisite pastaj do të zëvendësojë placeholder-t me të dhënat që ofrohet nga klienti automatikisht.

![Placeholders replaced with customer data on the site](/img/config/site-templates-list.png)

### Zgjidhja e problemit "shablon i plotë me placeholder-e" {#solving-the-template-full-of-placeholders-problem}

Kjo gjithçka është fantastike, por ne hasim me një problem të keq: tani shablonet tona – që mund të vizitohen nga klientët tanë – janë plot me placeholder-e të mprehta që nuk thonë shumë.

Për të zgjidhur këtë, ofrojmë opsionin e vendosjes vlerave faqeve (fake values) për placeholder-t, dhe ne përdorim ato vlerë për të kërkuar dhe zëvendësuar përmbajtjen e tyre në sitet shablonike gjatë vizitës së klientëve tuaj.

Kujdesuni që mund të aksesoni redaktorin e placeholder-ve duke shkuar te **Ultimate Multisite > Settings > Sites**, dhe më pas, në menyen anës (sidebar), klikoni mbi linkun **Edit Placeholders**.

![Site template settings under the Sites settings page](/img/config/settings-sites-templates-section.png)

Kjo do të ju çojë te redaktori i përmbajtjes së placeholder-ve, ku mund të shtoni placeholder-t dhe përmbajtjen e tyre përkatëse.

![Template placeholders content editor entry point](/img/config/settings-sites-templates-section.png)
