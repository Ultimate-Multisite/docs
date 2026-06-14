---
title: Fandraisana ny hetra
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# Fandraisana hetra

Ultimate Multisite dia manana modely fandraisana hetra (tax collection module) ao anatin'ny plugin fototra nataontsika, ka raha mila mitandrina ny hetra fivarotana ianao amin'ny planinao, package sy serivisy, dia mora atao izany tsy mila mampiditra add-ons aho.

Ho an'ny orinasa ao Eoropa, manolotra **add-on** iray izahay izay manampy fitaovana sy fahaizana mba hanohanana bebe kokoa ny fanarahana VAT (Value Added Tax).

Tsy manao fametrahana na mandefa hetra ho anareo amin'ny governemanta i Ultimate Multisite; ny asanay dia manampy anareo handray ireo hetra mety amin'ny fotoana misy ny fifanakalozana. **Mbola mila mandefa ny hetra ianareo.**

## Fanajàna ny Fandraisana Hetra (Enabling Tax Collection)

Tsy voafandahiana mialoha ny fandraisana hetra. Raha te-handray azy ianao, dia mila mandeha any amin'ny **Ultimate Multisite > Settings > Taxes** ary manindry ny "Enable Taxes" mba hampandehanana izany.

![Enable Taxes toggle at the top of the Tax settings page](/img/config/settings-taxes-enable.png)

Ity misy fomba fijery feno an'ilay pejy fandrindrana hetra:

![Tax settings full page](/img/config/settings-taxes-full.png)

Afaka mijery ny fandrindran'ny hetra ho an'ny vokatra tsirairay ianao:

![Tax settings for products](/img/config/settings-taxes.png)

### Hetra tsy voafetra vs. Hetra voafetra (Tax excluded vs. Tax included)

Amin'ny fomba fandaharam-potoana, ny vidin'ny vokatra rehetra dia tsy misy hetra (tax excluded), izay midika fa **tsy voafetra** ao anatin'ny vidin'ilay vokatra ilay hetra. Raha fantatsika fa tokony handray hetra ny mpanjifa amin'ny fividianana iray, dia hanampy antsika ireo hetra **an-tampony** eo ambanin'ny subtotal (vidiny fototra).

Raha tianao ho voafetra ao anatin'ny vidin'ilay vokatra ny hetra, dia afaka manao izany amin'ny alalan'ny fanindriana ny "Inclusive Tax" (Hetra voafetra) ianao.

![Inclusive Tax toggle row below the Enable Taxes setting](/img/config/settings-taxes-inclusive.png)

Aza adino **hitahiry** ny fiovana rehetra nataonao.

###

## Famoronana Ny Sanomaso Hetra (Creating Tax Rates)

Rehefa voafandahiana ny Fandraisana Hetra, dia mila mamorona ny sanomaso hetra ho an'ny toerana manokana ianao amin'ny alalan'ny tax rates editor anay.

Afaka miditra ao amin'ny editor ianao amin'ny alalan'ny fipindrana ny bokotra **Manage Tax Rates** eo an-boalohany (sidebar) amin'ny pejy fametrahana ny tahan'ny hetra.

![Link Manage Tax Rates ao amin'ny panel Tax Rates amin'ny pejy settings](/img/config/settings-taxes-manage-rates.png)

Ao amin'ny pejy editor ny tahan'ny hetra, afaka manampy Tahan-hetsika vaovao ianao amin'ny alalan'ny fipindrana ny bokotra **Add new Row**.

![Tabilao editor tax rates misy bokotra Add new Row eo an-tampony](/img/config/tax-rates-editor.png)

Ilainao ny manome **title** (ampiasaina amin'ny faktiora) ho an'ny tahan'hetsika tsirairay. Avy eo dia afaka misafidy ny **firenena** (ilaina), ny **vilio**, ary ny **tanàna** (amin'ny safidy raha tianao) izay hapetra ity hetra ity ianao. Farany, ampiana ny **tahan-hetsika amin'ny persontja**.

### Tax Categories (Fizarana Hetra)

Afaka mamorona Fizarana Hetra maromaro ianao mba hanampiana tahan'hetsika samihafa ho an'ny karazana vokatra samihafa.

Kitsapao ny **Add new Tax Category**, dia soraty ny anaran'ilay fizarana ary tsindrio ny **Create**.

![Bokotra Add new Tax Category eo an-tampony amin'ny editor tax rates](/img/config/tax-categories-add.png)

![Champ famantarana anarana Tax Category ao amin'ny modal create category](/img/config/tax-categories-create-modal.png)

Mba hitsapana ireo fizarana, tsindrio ny **Switch** ary safidio ilay fizarana tianao hampidirana hetra vaovao.

![Bokotra Switch dropdown mba hanovana eo amin'ny tax categories samihafa](/img/config/tax-categories-switch.png)

![Dropdown selector Tax category mampiseho ireo fizarana azo atao](/img/config/tax-categories-select.png)

Afaka mametraka ny Fizarana Hetra ho vokatra manokana ianao amin'ny alalan'ny fandefasana any amin'ny **Product edit page** ary avy eo any amin'ny tabilao Taxes.

![Tabilao Product taxes misy tax category sy toggle taxable](/img/config/product-taxes.png)

Ao anatin'io efijy io koa, afaka manaverina ny **Is Taxable?** (Mety ho hetra ve?) dia azo atao mba hampahafantarana Ultimate Multisite fa tsy tokony hanao hetra amin'io vokatra io ianao.

## European VAT Support (Fanohanana VAT Eoropeanina)

Voaloy, efa nolazana tamin'ny aloha, misy add-on azo ampiasaina ho an'ny mpanjifa ao Eoropa izay manana fepetra hafa noho ny fitsipika momba ny VAT Eoropa.

Ny fitaovana momba ny VAT dia manampy zavatra maromaro lehibe:

  * Fampidirana mora ny tahan'ny VAT Eoropa;

  * Fanangonana sy fanamarinana ny laharana VAT - ary ny *reverse charging* ho an'ireo orinasa tsy voatery mitondra VAT (toy ny orinasa manana laharana VAT marina);

Mba hanatrehana ilay add-on, mandehana any amin'ny **Ultimate Multisite > Settings** dia tsindrio eo amin'ilay rohy ao amin'ny sidebar hoe **Check our Add-ons**.

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

Ho rerahina any amin'ny pejy add-on anay ianao. Eo, afaka mitady ny **Ultimate Multisite VAT add-on** ary apetraho azy.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Avy eo, mandehana any amin'ny **Network Admin > Plugins** ary aktiva io add-on io manerana ny tambajotra (network).

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Rehefa miverina ianao any amin'ny **Tax Settings tab**, dia hahita safidy vaovao azo ampiasaina. Ampiana ny fampiasana (Toggle) ilay safidy hoe **Enable VAT Support** mba hampandehanana ireo fitaovana momba ny VAT vaovao. Aza adino **hampanaraka (save)** ny setinginao!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### Fandefasana ny Tahan'ny VAT

Iray amin'ireo fitaovana izay ampiana ny fifandraisana dia ny fahafahana mitondra ny tahan'ny hetra ho an'ny firenena ao Eoropa ianao. Azo atao izany amin'ny alalan'ny fankatoavana ny pejy fanovana ny tahan'ny hetra (tax rates editor page) aorian'ny fanatanterahana ny VAT support Eoropa.

Eo amin'ny farany an'ilay pejy dia hahita ny safidy fampidiana (pull) ny VAT. Safidio ny karazana tahan-davitra ary tsindrio ny bokotra **Update EU VAT Rates** mba hiseho sy hanome azy ho automatique ilay tabilao misy ny tahan-davitra ho an'ny firenena rehetra ao amin'ny UE. Avy eo, mila mitahiry (save) fotsiny ianao.

![Update EU VAT Rates button at the bottom of the tax rates editor](/img/config/tax-rates-vat-pull.png)

Afaka manova ny sandan'izy ireo aorian'ny fampidiana azy koa ianao. Raha te hanovana izany ianao, dia ampiasao fotsiny ny tsipika tabilao ilainao ary tsindrio mba hitahiry ny sandana vaovao.

### VAT Validation (Fanamarinana VAT)

Rehefa voafahana ny fanohanana VAT, dia hampiditra toerana hafa amin'ny endrika checkout iombonana (checkout form) an'i Ultimate Multisite eo ambanin'ilay fampidirana adiresy fandraisana vola. Ho hita io toerana io ho an'ireo mpanjifa ao amin'ny UE ihany.

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Dia hanamarina ny VAT Number i Ultimate Multisite ary raha toa ka marina izy, dia hampiasaina ny fomba "reverse charge mechanism" (fomba fanomezana indray) ary apetaka ho 0% ilay tahan-davitra amin'io fangatahana io.
