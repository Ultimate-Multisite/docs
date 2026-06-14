---
title: Maareynta Cansarka
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# Maamulka Cansarka (Tax Handling)

Ultimate Multisite wuxuu leeyahay hab lagu soo ururiyo cansarka (tax collection module) oo ku jira plugin-ka aasaasiga ah, sidaa dar, haddii aad u baahan tahay inaad urunto cansarka iibkaaga qorshayaashaada, package-yada, iyo adeegyadaada, si fudud ayaad samayn kartaa iyadoon u baahnid inaad ku rakibto add-ons.

Waxaan ku siinay shirkadaha ku yaalla Yurub **add-on** oo ku daraya qalab iyo astaamo si loo xoojiyo **taageerada VAT** (Value Added Tax).

Ultimate Multisite ma soo gudbi doona ama ma u wadaagaysaa cansarka ah ee dawladda; waxaan kaliya kaa caawinaynaa inaad urunto cansarka saxda ah markii la sameeyo ganacsiga. **Waxa weli aad u baahan tahay inaad iska gudbiso cansarkaaga.**

## Fudaynta Ururinta Kansarka (Enabling Tax Collection)

Ururinta cansarka ma aha mid lagu furayo default-ka ah. Si aad u furto, waxaad u baahan tahay inaad tagto **Ultimate Multisite > Settings > Taxes** oo aad dib u dhigto (toggle) badhanka Enable Taxes si aad u furto dejinta "Enable Taxes".

![Enable Taxes toggle at the top of the Tax settings page](/img/config/settings-taxes-enable.png)

Halkan waa aragti buuxda ee bogga dejinta cansarka:

![Tax settings full page](/img/config/settings-taxes-full.png)

Waxaad sidoo kale arki kartaa dejinta cansarka ee alaabta gaarka ah:

![Tax settings for products](/img/config/settings-taxes.png)

### Kansarka la iska saaray vs. Kansarka lagu daray (Tax excluded vs. Tax included)

Default-ka ah, dhammaan qiimaha alaabtaada waa cansar la iska saaray (tax excluded), taasoo macnaheedu yahay in cansarku **aan ku jirin** qiimaha alaabta. Haddii aan u go'aannay in macaamiishu ay bixiyaan cansarka ganacsiga la gaarsiiyay, waxaan ku daraynaa cansarka **miisaanka sare** (on top) ee subtotal-ka.

Haddii aad dooratay inaad cansarka lagu darato qiimaha alaabtaada, waxaad sidaas samayn kartaa adigoo furaya dejinta "Inclusive Tax".

![Inclusive Tax toggle row below the Enable Taxes setting](/img/config/settings-taxes-inclusive.png)

Ha ilaawin inaad **badbaadiso** (save) isbeddellada aad samaysay.

###

## Abuurista Heerarka Kansarka (Creating Tax Rates)

Marka aad furto Ururinta Kansarka, waxaad u baahan doontaa inaad abuurto heerarka cansarka ee meelaha gaarka ah iyadoo la isticmaalayo editor-kaaga heerarka cansarka.

Waxaad heli kartaa editorka adiga oo ku riixaya badhanka **Manage Tax Rates** ee dhinaca hore (sidebar) ee bogga tax settings.

![Manage Tax Rates link in the Tax Rates panel on the settings page](/img/config/settings-taxes-manage-rates.png)

Bogga editka tax rates, waxaad ku dari kartaa Tax Rates cusub adiga oo riixaya badhanka **Add new Row**.

![Tax rates editor table with Add new Row button at the top](/img/config/tax-rates-editor.png)

Waxaad u baahan tahay inaad siinayso tax rate kasta **title** (oo loo isticmaalo invoice-yada). Markaas waxaad dooran kartaa **country** (waajib ah), **state**, iyo **city** (labo laba oo nafaqo leh) halka uu la soo deyn doono tax-taas. Ugu dambayn, ku dari **tax rate in percents**.

### Tax Categories

Waxaad sidoo kale samayn kartaa kooxaha Tax Category ah (Tax Categories), si aad u dari tax rates kala duwan noocyo alaabaha kala duwan.

Riix **Add new Tax Category** si aad u bilaawdo, ka dibna qor magaca category-gaaga oo riix **Create**.

![Add new Tax Category button at the top of the tax rates editor](/img/config/tax-categories-add.png)

![Tax Category Name input field in the create category modal](/img/config/tax-categories-create-modal.png)

Si aad u raadsato categories, riix **Switch** oo dooro category-ga aad rabto inaad ku dari lahayd tax-yada cusub.

![Switch dropdown button to change between tax categories](/img/config/tax-categories-switch.png)

![Tax category selector dropdown showing available categories](/img/config/tax-categories-select.png)

Waxaad u samayn kartaa in aad category-ga tax-taas ku qabato alaab gaar ah adiga oo aada **Product edit page** ka dibna tab-ka Taxes (Taxes).

![Product taxes tab with tax category and taxable toggle](/img/config/product-taxes.png)

Sidaas darteed, waxaad xirtaa badhanka **Is Taxable?** si Ultimate Multisite u ogaado inuu uusan soo ururin tax-yada alaabta la sheegay.

## European VAT Support

Sida hore la sheegnay, waxaanu leenahay add-on (plugin) loogu talagalay macaamiisha ku nool EU oo leh baahiyo dheeraad ah sababtoo ah sharciyada VAT-ka Yurub.

Qalabka VAT-keena waxay caawiyaan arrimaha muhiim ah:

  * Soo qaadash fudud ee heerarka VAT-ka EU;

  * Ururinta iyo xaqiijinta lambarka VAT - iyo laabta lacagta (reverse charging) kuwa aan lahayn VAT (sida shirkadaha leh lambar VAT sax ah).

Si aad u soo dejisid add-on-kan, tag **Ultimate Multisite > Settings** ka dibna riix xiriirka "Check our Add-ons" ee dhinaca hore.

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

Waxaa lagaa diidhin doonaa bogga add-on-keena. Halkaas, waxaad ka raadin kartaa **Ultimate Multisite VAT add-on** oo aad ku soo dejisayso.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Markaas, tag **Network Admin > Plugins** oo fur add-on-kan si loo fuliyo dhammaan shirkadda (network-wide).

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Haddii aad dib ugu laabato **Tax Settings tab**, waxaad arki doontaa doorooyin cusub oo la heli karo. Fur (toggle) doorashada **Enable VAT Support** si aad u furto qalabka VAT-ka cusub. Ha ilaawin inaad **save** gareyso settings-kaaga!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### Soo qaadashda Heerarka VAT-ka

Mid ka mid ah qalabka ay ku daray isku-xirnaa waa awoodda lagu soo qaado heerarka tax-ta ee waddamada socda Yurub (EU member states). Tani waxay suurtagelin kartaa inaad booqato bogga wax-soo-qaadka heerarka tax-ta (tax rates editor page) ka dib markaad furto VAT support-ka Yurub.

Waxaad arki doontaa hooska bogga doorooyin lagu soo saaro (pull) lacagaha VAT-ka. Marka aad doorato noocka heerka iyo inaad gujiso badhanka **Update EU VAT Rates** (La cusboonaysii Heerarka VAT-ka EU), wuxuu soo bandhigi doonaa oo si toos ah u buuxin doonaa jadwalka lacagaha taxnaanta ee qof kasta oo ka mid ah dalalka EU. Markaas, waxaad kaliya inaad kaydsato (save) ay tahay.

![Badhanka Update EU VAT Rates hoosta hagaajinta heerarka taxnaanta](/img/config/tax-rates-vat-pull.png)

Waxaad sidoo kale dib u beddeli kartaa qiimaha ka dib markii la soo saaray. Si aad uasayso, si fudud hagaaji xarunta jadwalka aad u baahan tahay oo guji inaad kaydsato qiimaha cusub.

### Xaqiijinta VAT-ka (VAT Validation)

Marka taageerada VAT-ka la furayo, Ultimate Multisite wuxuu ku darayaa meel dheeri ah (field) qaabka checkout-ka, hoos ka dhanka meesha qoraalka bixinta (billing address). Meeshaas waxay kaliya soo muuqataa macaamiisha ku nool EU.

<!-- Screenshot unavailable: Meesha lambarka VAT-ka ee qaabka checkout-ka ee muuqaalka hore hoosta qoraalka bixinta -->

Markaas, Ultimate Multisite wuxuu xaqiijin doonaa Lambarka VAT-ka, haddii uu soo laaban yahay inuu yahay mid shaqaynaya (valid), habka dib u laabashada taxnaanta (reverse charge mechanism) ayaa la adeegsado waxaana qiimaha taxnaanta lagu qeexaa 0% ee order-kaas.
