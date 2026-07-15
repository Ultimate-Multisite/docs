---
title: Trajtimi i taksave
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# Trajtimi i taksave

Ultimate Multisite ka një modul për mbledhjen e taksave të integruar në plugin-in tonë kryesor, kështu që nëse ju duhet të mblidhni taksa shitjeje për planet, paketat dhe shërbimet tuaja, mund ta bëni lehtësisht pa pasur nevojë të instaloni add-ons.

Për kompanitë e vendosura në Evropë, ne ofrojmë një **add-on** që shton mjete dhe veçori për të **mbështetur VAT** compliance më mirë.

Ultimate Multisite nuk deklaron ose derdh taksa në emrin tuaj te qeveria; ne thjesht ju ndihmojmë të mblidhni taksat e duhura në momentin e transaksionit. **Ju do të duhet ende t’i derdhni taksat vetë.**

## Aktivizimi i mbledhjes së taksave {#enabling-tax-collection}

Mbledhja e taksave nuk është e aktivizuar si parazgjedhje. Për ta aktivizuar, duhet të shkoni te **Ultimate Multisite > Settings > Taxes** dhe të aktivizoni cilësimin Enable Taxes.

![Çelësi Enable Taxes në krye të faqes së cilësimeve të taksave](/img/config/settings-taxes-enable.png)

Ja një pamje e plotë e faqes së cilësimeve të taksave:

![Faqja e plotë e cilësimeve të taksave](/img/config/settings-taxes-full.png)

Mund të shihni gjithashtu cilësimet e taksave për produktet individuale:

![Cilësimet e taksave për produktet](/img/config/settings-taxes.png)

### Taksa e përjashtuar kundrejt taksës së përfshirë {#tax-excluded-vs-tax-included}

Si parazgjedhje, të gjitha çmimet e produkteve tuaja janë pa taksa, që do të thotë se taksat **nuk janë të përfshira** në çmimin e produktit. Nëse përcaktojmë se një klient duhet të paguajë taksa për një blerje të caktuar, do t’i shtojmë taksat **mbi** nëntotalin.

Nëse preferoni që taksat të jenë të përfshira në çmimin e produktit tuaj, mund ta bëni këtë duke aktivizuar cilësimin **Inclusive Tax**.

![Rreshti i çelësit Inclusive Tax poshtë cilësimit Enable Taxes](/img/config/settings-taxes-inclusive.png)

Mos harroni të **ruani** ndryshimet që keni bërë.

###

## Krijimi i normave të taksave {#creating-tax-rates}

Pasi të aktivizoni mbledhjen e taksave, do t’ju duhet të krijoni norma taksash për vendndodhje specifike duke përdorur editorin tonë të normave të taksave.

Mund të hyni në editor duke klikuar butonin **Manage Tax Rates** në shiritin anësor të faqes së cilësimeve të taksave.

![Lidhja Manage Tax Rates në panelin Tax Rates në faqen e cilësimeve](/img/config/settings-taxes-manage-rates.png)

Në faqen e editorit të normave të taksave, mund të shtoni norma të reja taksash duke klikuar butonin **Add new Row**.

![Tabela e editorit të normave të taksave me butonin Add new Row në krye](/img/config/tax-rates-editor.png)

Do t’ju duhet t’i jepni çdo norme takse një **titull** (që përdoret në fatura). Pastaj mund të zgjidhni **shtetin** (i detyrueshëm), **rajonin,** dhe **qytetin** (të dyja opsionale) ku do të tarifohet kjo taksë. Në fund, shtoni **normën e taksës në përqindje**.

### Kategoritë e taksave {#tax-categories}

Mund të krijoni gjithashtu disa kategori taksash, për të shtuar norma të ndryshme taksash për lloje të ndryshme produktesh.

Klikoni për të **Add new Tax Category** , pastaj shkruani emrin e kategorisë suaj dhe shtypni **Create**.

![Butoni Add new Tax Category në krye të editorit të normave të taksave](/img/config/tax-categories-add.png)

![Fusha e hyrjes Tax Category Name në modalin e krijimit të kategorisë](/img/config/tax-categories-create-modal.png)

Për të shfletuar kategoritë, klikoni **Switch** dhe zgjidhni kategorinë së cilës dëshironi t’i shtoni taksa të reja.

![Butoni dropdown Switch për të ndryshuar midis kategorive të taksave](/img/config/tax-categories-switch.png)

![Dropdown i përzgjedhësit të kategorisë së taksave që tregon kategoritë e disponueshme](/img/config/tax-categories-select.png)

Mund të vendosni kategorinë e taksës për një produkt të caktuar duke shkuar te **Product edit page** dhe pastaj te skeda Taxes.

![Skeda e taksave të produktit me kategorinë e taksave dhe çelësin taxable](/img/config/product-taxes.png)

Në të njëjtin ekran, mund ta çaktivizoni çelësin **Is Taxable?** për t’i bërë të ditur Ultimate Multisite se nuk duhet të mbledhë taksa për atë produkt të caktuar.

## Mbështetja për VAT evropian {#european-vat-support}

Siç u përmend më parë, kemi një add-on të disponueshëm për klientët në BE që kanë kërkesa shtesë për shkak të rregulloreve evropiane të VAT.

Mjetet tona VAT ndihmojnë me disa gjëra të rëndësishme:

  * Ngarkim i lehtë i normave të VAT të BE-së;

  * Mbledhje dhe validim i numrit VAT - dhe reverse charging për subjektet e përjashtuara nga VAT (si kompanitë me numra të vlefshëm VAT);

Për ta instaluar atë add-on, shkoni te **Ultimate Multisite > Settings** dhe pastaj klikoni lidhjen e shiritit anësor **Check our Add-ons**.

![Shiriti anësor i faqes Settings me lidhjen Check our Add-ons](/img/config/settings-taxes-addons-link.png)

Do të ridrejtoheni te faqja jonë e add-ons. Atje, mund të kërkoni për **Ultimate Multisite VAT add-on** dhe ta instaloni.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Pastaj, shkoni te **Network Admin > Plugins** dhe aktivizojeni atë add-on në të gjithë rrjetin.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Nëse ktheheni te **Tax Settings tab** , do të shihni opsione të reja të disponueshme. Aktivizoni opsionin **Enable VAT Support** për të aktivizuar mjetet e reja VAT. Mos harroni të **ruani** cilësimet tuaja!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### Tërheqja e normave të taksave VAT {#pulling-on-vat-tax-rates}

Një nga mjetet që shton integrimi ynë është aftësia për të ngarkuar normat e taksave për shtetet anëtare të BE-së. Kjo mund të bëhet duke vizituar faqen e editorit të normave të taksave pasi të keni aktivizuar mbështetjen për EU VAT.

Në fund të faqes, do të shihni opsionet e tërheqjes së VAT. Zgjedhja e një lloji norme dhe klikimi i butonit **Update EU VAT Rates** do të tërheqë dhe do ta plotësojë automatikisht tabelën me normat e taksave për secilin shtet anëtar të BE-së. Pastaj, ju duhet vetëm ta ruani.

![Butoni Update EU VAT Rates në fund të editorit të normave të taksave](/img/config/tax-rates-vat-pull.png)

Mund t’i modifikoni gjithashtu vlerat pasi t’i keni tërhequr ato. Për ta bërë këtë, thjesht modifikoni rreshtin e tabelës që ju duhet dhe klikoni për të ruajtur vlerat e reja.

### Validimi i VAT {#vat-validation}

Kur mbështetja për VAT është e aktivizuar, Ultimate Multisite do të shtojë një fushë shtesë në formularin e checkout, poshtë fushës së adresës së faturimit. Fusha do të shfaqet vetëm për klientët e vendosur në BE.

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Ultimate Multisite më pas do të validojë numrin e VAT dhe, nëse rezulton i vlefshëm, zbatohet mekanizmi i reverse charge dhe norma tatimore vendoset në 0% për atë porosi.
