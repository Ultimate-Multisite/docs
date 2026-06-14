---
title: Menaxhimi i tatimeve
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# Menaxhimi i Tatimeve

Ultimate Multisite ka një modul për mbledhjen e tatimeve të integruar në plugin tonë bazë, kështu që nëse keni nevojë të mblidhni tatimet e shitjeve mbi planet, paketat dhe shërbimet tuaja, mund ta bëni lehtësisht pa u përpjekur të instaloni ndonjë addon.

Për kompanitë që ndodhen në Evropë, ne ofrojmë një **add-on** që shton mjete dhe funksionalitete për të mbështetur më mirë pajtueshmërinë me **VAT**.

Ultimate Multisite nuk depoziton apo transferon tatimet për ju në emër të qeverisë; ne thjesht ju ndihmojmë të mbledhni tatimet e duhura në momentin e transaksionit. **Ju do të keni ende nevojë të transferoni tatimet vetë.**

## Aktivizimi i Mbledhjes së Tatimeve

Mbledhja e tatimeve nuk është e aktivizuar në mënyrë e paracaktuar. Për ta aktivizuar, duhet të shkoni te **Ultimate Multisite > Settings > Taxes** dhe të ndryshoni (toggle) opsionin Enable Taxes për të e aktivizuar.

![Aktivizoni rregullimin e tatimeve në krye të faqes së cilësimeve të tatimeve](/img/config/settings-taxes-enable.png)

Këtu është një pamje e plotë e faqes së cilësimeve të tatimeve:

![Faqja e plotë e cilësimeve të tatimeve](/img/config/settings-taxes-full.png)

Ndonjëherë mund të shihni edhe cilësimet e tatimeve për produktet individuale:

![Tax settings for products](/img/config/settings-taxes.png)

### Tatim i përjashtuar vs. Tatim i përfshirë

Në defragmentin e paracaktuar, të gjitha çmimet e produkteve tuaja janë pa tregues (tax excluded), që do të thotë se taksat **nuk përfshihen** në çmimin e produktit. Nëse vendosim se një klient duhet të paguajë taksa për një blerje të caktuar, ne do ta shtojmë taksat **poshtë** (on top) të subtotalit.

Nëse dëshironi që tatimet të përfshihen në çmimin e produktit tuaj, mund ta bëni duke aktivizuar opsionin **Inclusive Tax** (Tatim i Përfshirë).

![Inclusive Tax toggle row below the Enable Taxes setting](/img/config/settings-taxes-inclusive.png)

Mos harro të **ruash** ndryshimet që bëni.

###

## Krijimi i Taksave

Pas kur aktivizoni Mbledhjen e Taksave (Tax Collection), do të duhet të krijoni nivele takse për vende specifike duke përdorur redaktuesin tonë të niveleve takse.

Mund të aksesoni redaktori duke klikuar butonin **Manage Tax Rates** (Menaxho Taksat) në panelin e anëtarit të faqes së cilës janë cilësimet e taksave.

![Link Manage Tax Rates në panelin e Taksave në faqen e cilësimeve](/img/config/settings-taxes-manage-rates.png)

Në faqen e redaktimit të taxave, mund të shtoni taxa të reja duke klikuar butonin **Add new Row** (Shtoni rresht të ri).

![Tax rates editor table with Add new Row button at the top](/img/config/tax-rates-editor.png)

Duhet të japin çdo përqindje tatimi një **titull** (përdoret në fakturim). Pastaj mund të zgjidhni **vendin** (obligator), **shtetin**, dhe **qytetin** (të dy opsionale) ku do të bëhet kjo tatime. Në fund, shtoni **përqindjen e tatimit në përqindje**.

### Kategoritë e Tatimeve

Jeni në gjendje të krijoni edhe disa Kategoritë Tatimore (Tax Categories), për të shtuar nivele të ndryshme tatimore për lloje të ndryshme produkte.

Klikoni te **Add new Tax Category** (Shtoni një Kategorinë Tatimore të re), pastaj shkruani emrin e kategorisë tuaj dhe shtypni **Create** (Krijoni).

![Butoni për shtimin e një Kategorisë Taksore në krye të redaktuesit të niveleve të taksave](/img/config/tax-categories-add.png)

![Fusha input për Emrin e Kategorisë Taksore në modalin e krijimit të kategorisë](/img/config/tax-categories-create-modal.png)

Për të browsuruar kategoritë, klikoni në **Switch** dhe zgjidhni kategorinë ku dëshironi të shtoni tregjet e reja.

![Butoni Dropdown Switch për ndryshimin midis kategorive të tregjeve](/img/config/tax-categories-switch.png)

![Dropdown i kategorive taksave që shfaq kategori të disponueshme](/img/config/tax-categories-select.png)

Mund të vendos kategorinë e taksave për një produkt specifik duke shkuar në **façadën e redaktimit të produktit** dhe më pas te tab-i i Taksave (Taxes).

![Tabi i taksave me kategorinë dhe ndryshuesin e taksav](/img/config/product-taxes.png)

Në të njëjtën ekran, mund ta keni të fikur ndryshuesin **Is Taxable?** (A është i taksimshëm?) për t'i thënë Ultimate Multisite se nuk duhet të mbledh taksa për atë produkt specifik.

## Dukja e TVSH në Evropë

Siç u përmend më parë, kemi një addon të disponueshëm për klientët në BE që kanë kërkesa shtesë për shkak të rregullave evropiane të TVSH-së.

Mjetet tona për TVSH ndihmojnë me disa gjëra të rëndësishme:

* Ngarkim i lehtë i rateve të TVSH-së në BE;

  * Mbledhja dhe vërtetimi i numrit të TVSH-së – dhe rimbursimi i TVSH-së për entitetet që janë të liruar nga TVSH (si kompanitë me numra TVSH të vlefshëm);

Për të instaluar atë add-on, shko te **Ultimate Multisite > Settings** dhe pastaj kliko mbi linkun në panelin e anasjeve (sidebar) "Check our Add-ons".

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

Do të kesh redirektuar te faqja e add-on-eve tona. Atje mund të kërkosh **Ultimate Multisite VAT add-on** dhe ta instalohesh.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: Dialogu për instalimin e shtesës VAT Install Now -->

Pastaj, shko në **Network Admin > Plugins** dhe aktivizo atë add-on në nivel të gjinerit (network-wide).

<!-- Screenshot unavailable: Aksioni i aktivizimit të add-onit VAT në faqen e Plugins -->

Nëse kthehesh te **Tax Settings tab**, do të shohësh opsione të reja të disponueshme. Aktivizo opsionin **Enable VAT Support** për të aktivizuar mjetet e reja të TVSh-së (VAT). Mos harro të **save** cilësimet e tua!

<!-- Screenshot unavailable: Përveçuesi i rregullave të TVSH në cilësimet e Tatimeve pas aktivizimit të add-on-it -->

### Përdorimi i Rregullave të TVSH

Këtu shpjegojmë se si mund të përdorni rregullat e TVSH (VAT Tax Rates). Kjo është një pjesë thelbësore për të siguruar që treguesit tuaj të bëjnë llogaritjet e duhura.

Në cilësimet e Tatimeve (Tax Settings), do të gjeni opsionin për TVSH. Kur këtë aktivizoni, mund të vendosni rregullat specifike që dëshironi t'i aplikoni në faqen tuaj.

**Shembull:**
Nëse keni nevojë për një tarifë më të ulët për produktet e caktuara, ju duhet të shtoni atë këtu. Kjo do të ndikojë direkt se si do të llogaritet TVSH-ja në procesin e pagesës (checkout).

```php
// Këtu vendosni rregullat tuaja të TVSH
$vat_rates = array(
    'standard' => 21, // P.sh., tarifën standarde
    'reduced' => 10  // P.sh., tarifën e ulët për produktet specifike
);

update_option('my_custom_vat_rates', $vat_rates);
```

Pasi të keni vendosur këto rregulla, sistemi do t'i përdor automatikisht kur një klient i bën një porositje. Kjo ju jep kontrollin plotë mbi mënyrën se si TVSH-ja përfaqësohet në faqen tuaj e WooCommerce/WordPress.

Një nga mjetet që shton integrimi ynë është aftësia për të ngarkuar tarifat e tatimeve për anëtarët e BE-së. Kjo mund të bëhet duke vizituar faqen e redaktimit të tarifave të tatimeve pasi të aktivizoni mbështetjen për VAT (Tatimin mbi Vlerën Shtuar) në BE.

Në fund të faqes do të shihni opsionet për të tërhequr (pulling) TVSH-në. Kur zgjidhni një lloj tregues dhe klikoni butonin **Update EU VAT Rates** (Përditëso TVSH-të të BE-së), tabela do të hapet dhe do të plotësohet automatikisht me tarifat e tatimeve për çdo shtet anëtar të BE-së. Pastaj, ju mbetet vetëm t'i ruani.

![Butoni për të përditësuar tregjet e TV-s në fund të redaktuesit të tregjeve të tatimeve](/img/config/tax-rates-vat-pull.png)

Mundesh edhe të ndryshosh vlerat pasi i ke të tërhequr ato (pulled). Për të bërë këtë, thjesht redigjosh linjën e tabelës që ke nevojë dhe kliko për të ruajtur vlerat e reja.

### Validimi i TVSH-së

Kur keni aktivizuar mbështetjen për TVSH (VAT), Ultimate Multisite do të shtojë një fushë shtesë në formularin e pagesave, poshtë fushës së adresës së fakturimit. Kjo fushë do të shfaqet vetëm për klientët që ndodhen në BE.

<!-- Screenshot unavailable: Fjalë për numrin VAT në formularin e checkout-ut të front-end, poshtë adresës së faturimit -->

Më pas Ultimate Multisite do të vlerifikohet Numri i TVSH dhe nëse kthehet si një numër i vlefshëm, mjeti i rimbushjes (reverse charge mechanism) aplikohet dhe taxa tregue vendoset në 0% për atë porosit.
