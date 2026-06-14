---
title: Skatīšanās uz nodokļu apstrādi
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# Grāmatvedības apakšdarīšana (Tax Handling)

Ultimate Multisite ir iekļauts mūsu galvenajā pluginā nodokļu vākšanas moduls, tāpēc, ja jums ir nepieciešams vākt salīdzinājumu nodokļus saviem plāniem, pakuoti un pakalpojumiem, jūs to varat viegli darīt bez jāinstalē nekādi papildu komponenti (add-ons).

Uz Eiropas vietām mēs piedāvājam **papildu komponenti**, kas pievieno rīkus un funkcijas, lai labāk **atbalstītu VAT** atstarpes.

Ultimate Multisite nenodod vai nosūtī nodokļus valsts iestādi jūsu nogaidā; mēs vienkārši palīdzam jums vākt paredzētos nodokļus transakcijas laikā. **Jums joprojām ir jānosūtās nodokļi savībā.**

## Nodokļu vākšanas iespēgšana (Enabling Tax Collection)

Nodokļu vākšana nav iespējota pēc defaulta. Lai to ieslēgtu, jums jāiet uz **Ultimate Multisite > Settings > Taxes** un jāieslēdz "Enable Taxes" (Iespēgt nodokļus) iestatījums.

![Enable Taxes toggle at the top of the Tax settings page](/img/config/settings-taxes-enable.png)

Šeit ir pilna skatsuma nodokļu iestatījumu lapā:

![Tax settings full page](/img/config/settings-taxes-full.png)

Jūs varat arī redzēt nodokļu iestatījumus konkrētām produktiem:

![Tax settings for products](/img/config/settings-taxes.png)

### Nodokļi izslēgti vs. Nodokļi iekļauti (Tax excluded vs. Tax included)

Defaulta iestatījums ir to, ka visi jūsu produktu cienigas ir nodokļu neiekļauti, kas nozīmē, ka nodokļi **nav iekļauti** produktā. Ja mēs noteiksim, ka klientam jāmaksā nodokļiem konkrētā iepirkšanai, mēs viņam pievienosim nodokļus **uz virs** subtotala.

Ja vēlaties, lai nodokļi būtu iekļauti jūsu produktu cenā, jūs to varat darīt ieslēdzot "Inclusive Tax" (Iekļautie nodokļi) iestatījumu.

![Inclusive Tax toggle row below the Enable Taxes setting](/img/config/settings-taxes-inclusive.png)

Neatkarīgi atcerieties **saglabāt** veiktās izmaiņas.

###

## Nodokļu līmeņu izveide (Creating Tax Rates)

Pēc tam, kad ieslēdzat nodokļu vākšanu, jums būs jāizveido nodokļu līmenis konkrētām vietām, izmantojot mūsu nodokļu līmeņu redaktoru.

Jūs varat piekļūt redaktō, noklikšķinot uz pogas **Izvēlēties nodokļu līmeņus** (Manage Tax Rates) sarakstā Tax settings lapas sarakstā.

![Link Manage Tax Rates panel on the settings page](/img/config/settings-taxes-manage-rates.png)

Tax rates redaktora lapā jūs varat pievienot jaunas nodokļu līmeņus, noklikšķinot uz pogas **Pievienot jaunu rindu** (Add new Row).

![Tax rates editor table with Add new Row button at the top](/img/config/tax-rates-editor.png)

Jums ir jāpiešķir katram nodokļu līmenim **tituls** (izmantojams faktūrās). Tad jūs varat izvēlēties **valstu** (nepieciešams), **vietas**, un **pilsētas** (ab obu nepieciešami), kur šis nodoklis tiks uzņemt. Visbeidzot, pievienojiet **nodokļu līmeni procentos**.

### Nodokļu kategorijas

Jūs varat izveidot vairākas nodokļu kategorijas, lai pievienotu dažādus nodokļu līmeņus dažādiem produktiem.

Noklikšķiniet uz **Pievienot jaunu nodokļu kategoriju** (Add new Tax Category), tad rakstiet savas kategorijas nosaukumu un nospiediet **Izveidot** (Create).

![Add new Tax Category button at the top of the tax rates editor](/img/config/tax-categories-add.png)

![Tax Category Name input field in the create category modal](/img/config/tax-categories-create-modal.png)

Lai pārgādu kategorijas, noklikšķiniet uz **Pielāgoēt** (Switch) un izvēlieties kategoriju, kurai vēlaties pievienot jaunas nodokļus.

![Switch dropdown button to change between tax categories](/img/config/tax-categories-switch.png)

![Tax category selector dropdown showing available categories](/img/config/tax-categories-select.png)

Jūs varat noteikt nodokļu kategoriju konkrētam produktam, dodoties uz **Produkta redaktēšanas lapu** (Product edit page) un tad uz Taxes tabu.

![Product taxes tab with tax category and taxable toggle](/img/config/product-taxes.png)

Tasā pašā ekrānā jūs varat izslēgt **Vai ir nodokļojams?** (Is Taxable?) reguli, lai Ultimate Multisite zinātu, ka tas konkrētām produktiem nevar uzņemt nodokļus.

## Eiropas VAT atbalsts

Jums atmiņā minējam, ka mums ir pieejams add-on, kas lietotāji Eiropas Savienībā, kuriem ir papildu prasības dēļ Eiropas PVM (VAT) regulām.

Mūsu PVM rīki palīdz ar dažādiem svarīgiem jautājumiem:

*   Vieils ielādēt EU PVM līmeņus;
*   PVM numuru savākšana un validācija – kā arī atgrieze maksājumu (reverse charging) PVM atbrīvošiem entitātem (piemēram, uzņēmumiem ar pareiziem PVM numuri).

Lai instalētu šo add-on, pārvietojies uz **Ultimate Multisite > Settings** un pēc tam nospiediet saites linku **Check our Add-ons** sarakstā.

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

Jūs tiks pārvietots uz mūsu add-on lapu. Tur jūs varat meklēt un instalēt **Ultimate Multisite VAT add-on**.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Pēc tam pārvietojieties uz **Network Admin > Plugins** un aktivizējiet šo add-on visā tīklā.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Ja atgriezties **Tax Settings tab**, jūs redziet jaunas opcijas. Pārslēdziet opciju **Enable VAT Support**, lai aktivizētu jaunus PVM rīkus. Neaizmirstiet **saglabāt** savas iestatījumus!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### Pārsūdzot PVM līmeņus

Vienu no mūsu integrācijas rīkiem ir iespēja ielādēt PVM līmeņus EU member states. To var izdarīt, apmeklējot PVM līmeņu redaktoru lapu pēc tam, kad aktivizēties EU PVM atbalsts.

Lai lejcelto lapas apakšējā redzamās jums ir iespēja izvēlēties VAT atkarības opcijas. Izvēloties noteiktu līmeņa veidu un noklikšķinot uz pogas **Update EU VAT Rates**, table vai automātiski aizpildīs ar nodokļu līmeņiem katras ES dalībvalstī. Pēc tam jums pietiks saglabāt to.

![Update EU VAT Rates pogas apakšējā redzamās tax rates redaktora](/img/config/tax-rates-vat-pull.png)

Jūs varat arī redzēt vērtības pēc tās izvēles. Lai to darītu, vienkārši redziet šo līniju, kas jums nepieciešama tabulā, un noklikšķiniet, lai saglabātu jaunas vērtības.

### VAT validācija

Kad ir ieslēgta Ultimate Multisite, tas pievienos kuršas papildu laiku kases formā, zem faktūras adrese laika. Šis laiks parādīsies tikai ES dalībvalstī esošajiem klientiem.

<!-- Screenshot unavailable: VAT numura laiks frontend kases formā zem faktūras adreses -->

Pēc tam Ultimate Multisite validē VAT numuru, un ja tas atgriežas kā pareizs, tiek piemērota atbalsta mehānisms (reverse charge mechanism), un nodokļu līmenis šajā orderingā tiek noteikts uz 0%.
