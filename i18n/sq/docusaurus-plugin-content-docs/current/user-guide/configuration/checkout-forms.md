---
title: Forma e pagesës
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Formular e Checkout

Formularit e checkout janë një mënyrë e lehtë dhe fleksibël për të provuar arsyet e ndryshme kur po përpiqeni të konvertoni klientët e rinj.

Ultimate Multisite 2.0 ofron një redaktor formularish të checkout-it që ju lejon të krijoni sa shumë forma keni nevojë, me fusha të ndryshme, produkte në ofertë, etj.

Për të aksesuar këtë veçori, shijoni menynë Checkout Forms, në anën e majtë të paneli (side-bar).

![Checkout Forms list](/img/config/checkout-forms-list.png)

Në këtë faqe, mund të shihni të gjitha formularët e checkout-it që keni.

Tabela e listës përfshin një kolonë **Status** që ju lejon të konfirmeni nëse çdo formular është aktualisht i disponueshëm për klientët:

| Status | Kuqyrje |
|---|---|
| **Active** (I aktiv) | Formularit mund të përdoret kudo ku është publikuar shortcode ose faqja e regjistrimit. |
| **Inactive** (I i inaktiv) | Formularit është ruajtur por i i ndalur. Klientët nuk mund të përfundojnë checkout me atë derisa ta aktivizoni përsëri. |

Përdorni kolonën e statusit para se të redaktoni një rrjedhje publik regjistrimi, veçanërisht kur keni formularë të draft ose sezonal pranë formulave tuaja live.

Nëse dëshironi të krijoni një të ri, thjesht klikoni Add Checkout Form (Shto Formular Checkout) në krye të faqes.

Ju mund të zgjidhni një nga këto tre opsione si pikë fillestare: single step (hapi i vetëm), multi-step (hapi shumë), ose blank (i zbrazët). Pastaj, klikoni për të shkuar te Editor.

Kur zgjidhni **single step** ose **multi-step** si pikë fillestare, shablonu i formularit përfshin tani një fushë **Template Selection** (Zgjidhja Shablonit) por defecto. Kjo fushë ju lejon klientëve tuaj të zgjedhin një shabllon faqeje gjatë procesit të regjistrimit. Mund ta lëni atë në vendin e saj, ta hiqni ose ta vendosni ri si çdo fushë tjetër në editor.

![Checkout Form editor](/img/config/checkout-form-editor.png)

Alternativ, mund të modifikoni ose të duplikuat formulat që keni tashmë duke klikuar në opsionet më poshtë emrin e tyre. Atje gjenden edhe opsionet për kopjimin e shortcode-it të formularit ose për fshirjen e formularit.

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

#### Përmbledhje e Editorit të Formës së Checkout {#checkout-form-editor-overview}

Editori i formularit të checkout ofron një ndërfaqe të plotë për të ndërtuar formulat tuaja të regjistrimit. Ja një përmbledhje e dizajnit të editorit:

![Checkout Form editor overview](/img/config/checkout-form-editor-overview.png)

### Redaktimi i një Forme Checkout {#editing-a-checkout-form}

Ju mund të krijoni forma checkout për qëllime të ndryshme. Në këtë shembull do të punojmë me një formular regjistrimi.

Pas navigimit në editorin e formularit të checkout, japni emër formularit (që do të përdoret vetëm për referencë të brendshme) dhe një slug (përdoret për krijimin e shortcode-ve, p.sh.).

![Checkout Form editor](/img/config/checkout-form-editor.png)

Formulari ndahet në hapa dhe fusha. Ju mund të shtoni një hap të ri duke klikuar në Add New Checkout Step (Shtoni Hap të Ri i Checkout).

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

Në tabin e parë të dritares modale, plotësonni përmbajtjen e hapi të formularit tuaj. I jepni një ID, një emër dhe një përshkrim. Këto elemente përdoren kryesisht në mënyrë të brendshme.

![Checkout form step content tab](/img/config/checkout-form-step-content.png)

Më pas, vendosni dukshmërinë e hapi. Ju mund të zgjidhni midis "Always show" (Shiko gjithmonë), "Only show for logged in users" (Shiko vetëm për përdorues të hyrë në sistem) ose "Only show for guests" (Shiko vetëm për vizitorë).

![Checkout form step visibility tab](/img/config/checkout-form-step-visibility.png)

Mbaręs, konfigurojeni stilin e hapi. Këto janë fusha opsionale.

![Checkout form step style tab](/img/config/checkout-form-step-style.png)

Tani është koha të shtojmë fusha në hapin ton e parë. Mjaftueshëm klikoni për Add New Field (Shtoni Fushë të Re) dhe zgjidhni tipin e seksionit që dëshironi.

![Checkout form step with fields](/img/config/checkout-form-step-with-fields.png)

Çdo fushësimi ka parametra të ndryshme që duhet mbushur. Për këtë hyrje të parë, do të zgjedhim fushën "Username" (Emri i përdoruesit).

![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

![Username field content settings](/img/config/checkout-form-username-content.png)

![Username field visibility settings](/img/config/checkout-form-username-visibility.png)

![Username field style settings](/img/config/checkout-form-username-style.png)

Mund të shtoni sa do të keni hapa dhe fusha që ju nevojiten. Për të shfaqur produktet tuaja për klientët që të zgjedhin një nga ato, përdorni fushën Pricing Table (Tabelat e Çmimit). Nëse dëshironi t'i lejoni klientët të zgjedhin një template, shtoni fushën Template Selection (Zgjidhja e Templateve). Dhe kështu me radhën.

![Add New Field dialog](/img/config/checkout-form-add-field-dialog.png)

_**Shënim:** username, email, password, site title, site URL, order summary (Përmbledhja e porosit), payment (Pagesa), dhe submit button (Butoni i dërgimit) janë fusha obligatorike për të krijuar një form checkout._

Ndërsa po punoni te formi juaj checkout, gjithmonë mund të përdorni butonin Preview (Parashikimi) për të parë se si do ta shohin klientët formën. Gjithashtu mund të ndryshoni midis pamjes si përdorues ekzistues ose vizitor.

![Checkout Form preview button](/img/config/checkout-form-preview-button.png)

![Checkout Form preview modal](/img/config/checkout-form-preview-modal.png)

Mbaręs, në Advanced Options (Opsionet Avancive) mund të konfigurosh mesazhin për faqen "Thank You" (Faleminderit), të shtosh snippet-e për të ndjekur konvertimet, të shtohesh CSS custom te formi juaj checkout ose ta kufizosh në vende specifike.

![Advanced Options](/img/config/checkout-form-advanced.png)

Mund të aktivizoni apo i deaktivizoni manualisht formën tuaj checkout duke ndryshuar këtë opsion në kolonën e djathtë, ose mund ta fshini përhershëm formën.

![Active toggle](/img/config/checkout-form-active.png)

Për të fshirë një formular, klikoni opsionin e fshirjes në veprimet e formularit:

![Checkout form delete option](/img/config/checkout-form-delete.png)

Mos harroni të ruani formulën tuaj të checkout!

![Save button](/img/config/checkout-form-save.png)

Për të marrë shortcode-in e formularit tuaj, klikoni në "Generate Shortcode" (Generoni Shortcode) dhe kopjoni rezultatin që shfaqet në dritaren modale.

![Save button with shortcode](/img/config/checkout-form-save.png)

### Fusha Tabelës së Çmimeve (The Pricing Table Field) {#the-pricing-table-field}

Fusha **Pricing Table** (Tabela e Çmimeve) tregon produktet tuaja në formularin e checkout-it që klientët mund të zgjedhin një plan. Kur ndryshoni këtë fushë, mund të konfigurosh disa opsione:

![Pricing Table field settings](/img/config/pricing-table-field-settings.png)

Ja si duket tabela e çmimeve në formularin frontend të regjistrimit:

![Frontend checkout pricing table](/img/config/frontend-checkout-pricing-table.png)

  * **Products (Produkte)**: Zgjidhni cilat produkte dëshironi të shfaqni dhe rendin që do të duken ato.
  * **Force Different Durations (Forco Koha Ndryshe)**: Kur është e aktivizuar, të gjitha produktet shfaqen pavarësisht nëse kanë një variacion çmimi për periudhën e pagesës aktuale të zgjedhur. Kur është i pishkaktuar (default), produktet pa variacion për periudhën e zgjedhur fshihen.
    ![Pricing table force durations option](/img/config/pricing-table-force-durations.png)
  * **Hide when Pre-Selected (Fshihet kur Përpara Zgjidhet)**: Fshihen tabela e çmimeve kur një plan është zgjedhur tashmë përmes URL-s (p.sh. `/register/premium`).
  * **Pricing Table Template (Shablon Tabela Çmimeve)**: Zgjidhni shablonin vizual për tabelën e çmimeve (Simple List, Legacy, etj.).

Nëse shtoni një produkt në Tabelën e Çmimeve para se formularit të përfshijë fushat që janë të nevojshme për të plotësuar rrjedhjen e checkout-it të atij produkti, redaktori tani tregon një paralajmërim. Përdorni paralajmërimin për të shtuar fushat e munguesve të nevojshme para se të publikoni ose ruani ndryshimet për një formular regjistrimi aktiv.

### Shtimi i Toggles së Zgjedhjes së Periodës {#adding-a-period-selection-toggle}

Nëse keni konfiguruar [Price Variations](creating-your-first-subscription-product#price-variations) në produktet tuaja (p.sh. çmime mujore dhe vjetore), mund të shtoni një fushë **Period Selection** (Zgjedhje Periode) në formularin tuaj të checkout-it. Kjo fushë shfaq një toggle që lejon klientët të ndryshojnë midis periudhave të pagesës, dhe tabela e çmime përditësohet dinamikisht në kohë reale.

#### Hapi 1: Konfigurojeni Price Variations (Variacionet e Çmimit) në Produktet Tuaja {#step-1-set-up-price-variations-on-your-products}

Para se të shtoni fushën Period Selection, sigurohuni që produktet tuaja të kenë konfiguruar price variations. Shkoni te **Ultimate Multisite > Products**, modifikoni një produkt dhe navigoni te tab-a **Price Variations** për të shtuar periudha të ndryshme pagese (p.sh. Vjetor me çmim i ulitur).

![Price Variations tab on a product](/img/config/product-price-variations-tab.png)

#### Hapi 2: Shtoni Fushën Period Selection në Formularin Tuaj të Checkout-it {#step-2-add-the-period-selection-field-to-your-checkout-form}

1. Shkoni te **Ultimate Multisite > Checkout Forms** dhe modifikoni formularin tuaj të checkout-it.

2. Scrolloni poshtë deri në hap që përmban fushën tuaj **Pricing Table** (Tabelë Çmime) dhe klikoni **Add new Field** (Shtoni Fushë të Re).

3. Në dialogun e zgjedhjes tipit të fushës, klikoni **Period Select**.

![Add New Field dialog showing Period Select](/img/config/checkout-form-add-field-dialog.png)

4. Konfigurojeni opsionet e periudhës. Çdo opsion kërkon:
   * **Duration** (Durata): Numri (p.sh. `1`)
   * **Duration unit** (Njësia e Durimit): Lloji i periudhës (Ditë, Javë, Muaj ose Vjet)
   * **Label** (Etiketi): Teksti që do të shohin klientët (p.sh. "Mujore", "Vjetore")

5. Klikoni **+ Add Option** (Shtoni Opsion) për të shtuar më shumë zgjedhje periudash. Këto opsione duhet të përshtaten me price variations që keni konfiguruar në produktet tuaja.

![Period Selection field settings](/img/config/period-selection-field-settings.png)

6. Zgjidhni një **Period Selector Template** (Shkema Zgjedhje Periode). "Clean" është default-i, i cili shfaq një seletor të thjeshtë stilizuar gati për CSS të personalizueshëm.

7. Klikoni **Save Field**.

#### Hapi 3: Vendos Këshillën Sipër Tabelës së Çmimeve {#step-3-position-the-field-above-the-pricing-table}

Për një përvojë më të mirë për përdoruesit, sigurohuni që fusha e Zgjedhjes së Periudhës (Period Selection) të shfaqet **para** tabelës së çmimeve në hapin tuaj të checkout-it. Mund të arratni fushat për t'i riordnuar në redaktuesin e formularit të checkout-it. Kështu, klientët fillimisht zgjedhin një periudhë pagese dhe më pas shohin çmimet për atë periudhë.

![Redaktuesi i formularit të checkout-it që tregon rendin e fushatave](/img/config/checkout-form-editor-with-fields.png)

#### Si Funksionon në Frontend {#how-it-works-on-the-frontend}

Pasi të konfigurohet, klientët që vizitojnë faqen tuaj të regjistrimit do të shohin seuesin e periudhës sipër tabelës së çmimeve. Kur klikojnë një periudhë pagese tjetër:

  * Tabela e çmimeve përditësohet menjëherë për të treguar çmimet për periudhën e zgjedhur (nuk është i nevojshëm ri-loadimi i faqes).
  * Nëse **Force Different Durations** (Forco Periudha të Ndryshe) është i pishëm në fushën e Tabelës së Çmimeve, produktet pa ndryshim çmimi për periudhën e zgjedhur do të fshihen.
  * Nëse **Force Different Durations** është aktiv, të gjitha produktet mbeten të dukshme edhe nëse nuk kanë variacion për periudhën e zgjedhur (do tregojnë çmimin e tyre standard).

#### Pre-selektimi i një Periudhe Pagese përmes URL-s {#pre-selecting-a-billing-period-via-url}

Ndonjëherë mund ta pre-selektoni produktin dhe periudhën pagese përmes URL-s. Ultimate Multisite mbështet këto modele URL:

  * `/register/premium` — Pre-selekton vetëm produktin "Premium"
  * `/register/premium/12` — Pre-selekton produktin dhe kohëzgjatjen 12-vjeçare
  * `/register/premium/1/year` — Pre-selekton produktin me kohëzgjatje 1-vjeçare

### Fusha e Zgjedhjes së Modelit (The Template Selection Field) {#the-template-selection-field}

Fusha **Template Selection** lejon klientët të zgjedhin një model faqeje gjatë checkout-it. Ajo tani përfshihet automatikisht në template formularit të checkout-it me hap të vetëm dhe me hapësh Ultimate Multisite v2.6.1.

#### Shtimi manual i fushatës {#adding-the-field-manually}

Nëse po punoni me një formular që u krijua para nga v2.6.1 ose filloi nga një shablon i zbrazët:

1. Shkoni te **Ultimate Multisite > Checkout Forms** dhe redigjoni formulën tuaj të checkout-it.
2. Në hapësirën ku mblidhen detajet e faqes, klikoni në **Add new Field**.
3. Zgjidhni **Template Selection** nga dialogu i tipit të fushës.
4. Konfigurojeni fushën:
   - **Label** — Titulli që shohin klientët mbi gridën e template-ve (p.sh. "Zgjidh një shabllon faqje").
   - **Required** — Ajo nëse klientët duhet të zgjedhin një shabllon para se të vazhdojnë.

#### Si funksionon {#how-it-works}

Kur një klient zgjedh një shabllon gjatë checkout-it, Ultimate Multisite e përdor atë kur po provizojnë faqen e tyre të re. Template-t që shfaqen vijnë nga lista juaj **Site Templates** (**Ultimate Multisite > Site Templates**). Vetëm template-t e caktuar si të disponueshëm për klientët shfaqen këtu.

### Base domainet e formulës së checkout-it {#checkout-form-base-domains}

Ultimate Multisite v2.13.0 trajton domenet që janë konfiguruar në fushën **Site URL** të formularit të checkout-it si base domainet në rrjet. Përdorni cilësimet e `available-domain` të fushës kur dëshironi që klientët të krijojnë faqe nën një ose më shumë domene regjistrimi të ndarë, si për shembull `example.com` dhe `sites.example.com`.

Base domainet e formularit të checkout-it e ndara nuk trajtohen si mape domene personalizimi për çdo faqe. Kur një klient krijon një faqe në dyqan (subdirectory) mbi një nga këto base, Ultimate Multisite nuk krijon një regjistrim domen që do ta bënte hostin e ndarë të përket vetëm atij faqes. Hostin i ndarë mbetet i disponueshëm për faqe anërore (sibling sites) që përdorin të njëjtën bazë formularit të checkout-it.

Ruani domenet personalizimi për hostet e mape të caktuara për çdo klient, si p.sh. `customer-example.com`. Ruani base domainet e formularit të checkout-it për hostet e ndara regjistrimi që shumë faqe mund t'i përdorin.

#### Heqja e fushës {#removing-the-field}

Nëse nuk ofron shkollën e saj të këshillueshme (site templates), largoni fushën e zgjedhjes së modelit (Template Selection) nga formati juaj. Kështu, klientët do të marrin atë model që është i vendosur si default në **Ultimate Multisite > Settings > Site Templates**.
