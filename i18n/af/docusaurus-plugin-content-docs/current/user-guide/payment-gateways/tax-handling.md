---
title: Belastinghantering
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# Belastinghantering

Ultimate Multisite het 'n belastinginsamelingsmodule ingebou in ons kern-plugin, so as dat u maklik belasting op u planne, pakkette en dienste kan inhaal sonder om enige add-ons te installeer.

Vir maatskappye wat in Europa geleë is, bied ons 'n **add-on** wat gereedskap en funksionaliteite byvoeg om die nakoming van **VAT** beter te **ondersteun**.

Ultimate Multisite dien nie belasting namens u aan die regering nie; ons help u bloot om die toepaslike belasting tydens die transaksie in te samel. **U sal steeds die belasting self moet oorbetaal.**

## Aktivering van Belastinginsameling

Belastinginsameling is nie standaard ingeskakel nie. Om dit te aktiveer, moet u na **Ultimate Multisite > Settings > Taxes** gaan en die 'Enable Taxes' instelling om te skakel.

![Enable Taxes toggle at the top of the Tax settings page](/img/config/settings-taxes-enable.png)

Hier is 'n volledige uitsig van die belastinginstellingsblad:

![Tax settings full page](/img/config/settings-taxes-full.png)

U kan ook die belastinginstellings vir individuele produkte sien:

![Tax settings for products](/img/config/settings-taxes.png)

### Belasting uitgesluit teenoor Belasting ingesluit

Standaard is al u produkpryse belasting uitgesluit, wat beteken dat belasting **nie ingesluit is** in die produk se prys nie. As ons bepaal dat 'n kliënt belasting op 'n gegewe aankoop moet betaal, sal ons die belasting **boop** die sub totaal byvoeg.

As u verkies om belasting in u produk se prys te hê, kan u dit doen deur die **Inclusive Tax** instelling in te skakel.

![Inclusive Tax toggle row below the Enable Taxes setting](/img/config/settings-taxes-inclusive.png)

Moenie vergeet om die veranderinge wat u gemaak het te **stoor** nie.

###

## Skep Belastingtariewe

Nadat u Belastinginsameling ingeskakel het, sal u belastingtariewe vir spesifieke plekke moet skep met behulp van ons belastingtariewe-redigeerder.

U kan die redigeerder bereik deur op die **Manage Tax Rates** knoppie in die vensterbalk van die Belastinginstellingsblad te klik.

![Manage Tax Rates link in the Tax Rates panel on the settings page](/img/config/settings-taxes-manage-rates.png)

Op die belastingtariewe-redigeerderblad kan u nuwe Belastingtariewe byvoeg deur op die **Add new Row** knoppie te klik.

![Tax rates editor table with Add new Row button at the top](/img/config/tax-rates-editor.png)

U moet elke belastingtarief 'n **titel** gee (gebruik op fakture). Daarna kan u die **land** (verpligtend), die **staat**, en die **stad** (beide opsioneel) kies waar hierdie belasting gehef sal word. Voeg laastens die **belastingtarief in persentasies** by.

### Belastingkategorieë

U kan ook verskeie Belastingkategorieë skep, om verskillende belastingtariewe vir verskillende soorte produkte by te voeg.

Klik op **Add new Tax Category**, skryf dan die naam van u kategorie en druk op **Create**.

![Add new Tax Category button at the top of the tax rates editor](/img/config/tax-categories-add.png)

![Tax Category Name input field in the create category modal](/img/config/tax-categories-create-modal.png)

Om deur kategorieë te blaai, klik op **Switch** en kies die kategorie waaraan u nuwe belasting wil byvoeg.

![Switch dropdown button to change between tax categories](/img/config/tax-categories-switch.png)

![Tax category selector dropdown showing available categories](/img/config/tax-categories-select.png)

U kan die belastingkategorie vir 'n spesifieke produk stel deur na die **Product edit page** te gaan en dan na die Belastings-tab.

![Product taxes tab with tax category and taxable toggle](/img/config/product-taxes.png)

Op dieselfde skerm kan u die **Is Taxable?** skakelaar uitskakel om Ultimate Multisite te laat weet dat dit nie belasting op daardie spesifieke produk moet inhaal nie.

## Europese VAT Ondersteuning

Soos voorheen genoem, het ons 'n add-on beskikbaar vir kliënte in die EU wat addisionele vereistes het as gevolg van Europese VAT-regulasies.

Ons VAT-gereedskap help met 'n paar belangrike dinge:

  * Maklike laai van EU VAT-tariewe;

  * VAT-nommerinsameling en -validering – en omgekeerde heffing vir VAT-vrygestelde entiteite (soos maatskappye met geldige VAT-nommers);

Om daardie add-on te installeer, gaan na **Ultimate Multisite > Settings** en klik dan op die **Check our Add-ons** vensterbalkskakel.

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

U sal na ons add-ons bladsy herlei word. Daar kan u na die **Ultimate Multisite VAT add-on** soek en dit installeer.

![VAT add-on tile on the Add-ons page](/img/admin/addons-page-vat.png)

![VAT add-on Install Now dialog](/img/admin/addon-install-vat.png)

Gaan dan na **Network Admin > Plugins** en aktiveer daardie add-on netwerkwyd.

![Network Activate action for the VAT add-on on the Plugins page](/img/admin/addons-list-vat.png)

As u teruggaan na die **Tax Settings tab**, sal u nuwe opsies sien beskikbaar. Skakel die **Enable VAT Support** opsie om die nuwe VAT-gereedskap te aktiveer. Moenie vergeet om u instellings te **stoor** nie!

![Enable VAT Support toggle in the Tax settings after add-on activation](/img/config/settings-taxes-vat-toggle.png)

### Die Inhaal van VAT Belastingtariewe

Een van die gereedskap wat ons integrasie byvoeg, is die vermoë om die belastingtariewe vir EU-lidstate te laai. Dit kan gedoen word deur die belastingtariewe-redigeerderblad te besoek nadat u EU VAT-ondersteuning ingeskakel het.

Aan die onderkant van die bladsy sal u die VAT-inhaalopsies sien. Die keuse van 'n tarief tipe en die klik op die **Update EU VAT Rates** knoppie sal die tabel met die belastingtariewe vir elke EU-lidstaat opblaas en outomaties invul. Daarna hoef u dit net te stoor.

![Update EU VAT Rates button at the bottom of the tax rates editor](/img/config/tax-rates-vat-pull.png)

U kan ook die waardes wysig nadat u dit inghaal het. Om dit te doen, wysig eenvoudig die tabellyn wat u benodig en klik om die nuwe waardes te stoor.

### VAT-validering

Wanneer VAT-ondersteuning ingeskakel is, sal Ultimate Multisite 'n bykomende veld by die afrekeningsformulier voeg, onder die faktuuradresveld. Die veld sal slegs vir kliënte wat in die EU geleë is, wys.

![VAT Number field on the frontend checkout form below the billing address](/img/frontend/checkout-vat-field.png)

Ultimate Multisite sal dan die VAT-nommer valideer en indien dit as geldig terugkom, word die omgekeerde heffingsmeganisme toegepas en word die belastingtarief op daardie bestelling op 0% gestel.
