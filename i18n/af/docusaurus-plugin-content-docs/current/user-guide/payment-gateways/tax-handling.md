---
title: Belastinghantering
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# Belastinghantering {#tax-handling}

Ultimate Multisite het ’n belastinginvorderingsmodule ingebou in ons kern-plugin, so as jy verkoopsbelasting op jou planne, pakkette en dienste moet invorder, kan jy dit maklik doen sonder om enige add-ons te installeer.

Vir maatskappye in Europa bied ons ’n **add-on** wat hulpmiddels en funksies byvoeg om **VAT**-nakoming beter te ondersteun.

Ultimate Multisite dien nie belasting namens jou by die regering in of betaal dit oor nie; ons help jou bloot om die toepaslike belasting ten tyde van die transaksie in te vorder. **Jy sal steeds self belasting moet oorbetaal.**

## Belastinginvordering aktiveer {#enabling-tax-collection}

Belastinginvordering is nie by verstek geaktiveer nie. Om dit te aktiveer, moet jy na **Ultimate Multisite > Settings > Taxes** gaan en die Enable Taxes-instelling aanskakel.

![Enable Taxes-skakelaar boaan die belastinginstellingsbladsy](/img/config/settings-taxes-enable.png)

Hier is ’n volledige aansig van die belastinginstellingsbladsy:

![Volledige belastinginstellingsbladsy](/img/config/settings-taxes-full.png)

Jy kan ook die belastinginstellings vir individuele produkte bekyk:

![Belastinginstellings vir produkte](/img/config/settings-taxes.png)

### Belasting uitgesluit vs. belasting ingesluit {#tax-excluded-vs-tax-included}

By verstek is al jou produkpryse belasting uitgesluit, wat beteken dat belasting **nie ingesluit is** in die produk se prys nie. As ons bepaal dat ’n klant belasting op ’n gegewe aankoop moet betaal, sal ons die belasting **bo-op** die subtotaal byvoeg.

As jy verkies om belasting by jou produk se prys in te sluit, kan jy dit doen deur die **Inclusive Tax**-instelling te aktiveer.

![Inclusive Tax-skakelaarry onder die Enable Taxes-instelling](/img/config/settings-taxes-inclusive.png)

Moenie vergeet om die veranderinge wat jy gemaak het, te **stoor** nie.

###

## Belastingkoerse skep {#creating-tax-rates}

Nadat jy belastinginvordering geaktiveer het, moet jy belastingkoerse vir spesifieke liggings skep met ons belastingkoersredigeerder.

Jy kan toegang tot die redigeerder kry deur op die **Manage Tax Rates**-knoppie in die sybalk van die belastinginstellingsbladsy te klik.

![Manage Tax Rates-skakel in die Tax Rates-paneel op die instellingsbladsy](/img/config/settings-taxes-manage-rates.png)

Op die belastingkoersredigeerderbladsy kan jy nuwe belastingkoerse byvoeg deur op die **Add new Row**-knoppie te klik.

![Belastingkoersredigeerdertabel met Add new Row-knoppie boaan](/img/config/tax-rates-editor.png)

Jy moet elke belastingkoers ’n **titel** gee (gebruik op fakture). Dan kan jy die **land** (vereis), die **staat,** en die **stad** (albei opsioneel) kies waar hierdie belasting gehef sal word. Voeg laastens die **belastingkoers in persentasies** by.

### Belastingkategorieë {#tax-categories}

Jy kan ook verskeie belastingkategorieë skep om verskillende belastingkoerse vir verskillende soorte produkte by te voeg.

Klik om **Add new Tax Category** te kies, skryf dan jou kategorie se naam en druk **Create**.

![Add new Tax Category-knoppie boaan die belastingkoersredigeerder](/img/config/tax-categories-add.png)

![Tax Category Name-invoerveld in die skep-kategorie-modale venster](/img/config/tax-categories-create-modal.png)

Om deur kategorieë te blaai, klik **Switch** en kies die kategorie waarby jy nuwe belastings wil voeg.

![Switch-aftrekknoppie om tussen belastingkategorieë te verander](/img/config/tax-categories-switch.png)

![Belastingkategoriekieser-aftreklys wat beskikbare kategorieë wys](/img/config/tax-categories-select.png)

Jy kan die belastingkategorie vir ’n spesifieke produk stel deur na die **Product edit page** te gaan en dan na die Taxes-oortjie.

![Produkbelastings-oortjie met belastingkategorie en belasbaar-skakelaar](/img/config/product-taxes.png)

Op dieselfde skerm kan jy die **Is Taxable?**-skakelaar afskakel om Ultimate Multisite te laat weet dat dit nie belasting op daardie gegewe produk moet invorder nie.

## Europese VAT-ondersteuning {#european-vat-support}

Soos voorheen genoem, het ons ’n add-on beskikbaar vir klante in die EU wat bykomende vereistes het weens Europese VAT-regulasies.

Ons VAT-hulpmiddels help met ’n paar belangrike dinge:

  * Maklike laai van EU VAT-koerse;

  * Invordering en validering van VAT-nommers - en omgekeerde heffing vir VAT-vrygestelde entiteite (soos maatskappye met geldige VAT-nommers);

Om daardie add-on te installeer, gaan na **Ultimate Multisite > Settings** en klik dan op die **Check our Add-ons**-sybalkskakel.

![Instellingsbladsy-sybalk met Check our Add-ons-skakel](/img/config/settings-taxes-addons-link.png)

Jy sal na ons add-ons-bladsy herlei word. Daar kan jy na die **Ultimate Multisite VAT add-on** soek en dit installeer.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Gaan dan na **Network Admin > Plugins** en aktiveer daardie add-on netwerk-wyd.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

As jy teruggaan na die **Tax Settings tab**, sal jy nuwe opsies beskikbaar sien. Skakel die **Enable VAT Support**-opsie aan om die nuwe VAT-hulpmiddels te aktiveer. Moenie vergeet om jou instellings te **stoor** nie!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### VAT-belastingkoerse intrek {#pulling-on-vat-tax-rates}

Een van die hulpmiddels wat ons integrasie byvoeg, is die vermoë om die belastingkoerse vir EU-lidlande te laai. Dit kan gedoen word deur die belastingkoersredigeerderbladsy te besoek nadat EU VAT-ondersteuning geaktiveer is.

Onderaan die bladsy sal jy die VAT-intrekopsies sien. Deur ’n koerstipe te kies en op die **Update EU VAT Rates**-knoppie te klik, sal die belastingkoerse vir elke EU-lidland ingetrek en die tabel outomaties ingevul word. Dan hoef jy dit net te stoor.

![Update EU VAT Rates-knoppie onderaan die belastingkoersredigeerder](/img/config/tax-rates-vat-pull.png)

Jy kan ook die waardes wysig nadat jy dit ingetrek het. Om dit te doen, wysig eenvoudig die tabelreël wat jy nodig het en klik om die nuwe waardes te stoor.

### VAT-validering {#vat-validation}

Wanneer VAT-ondersteuning geaktiveer is, sal Ultimate Multisite ’n bykomende veld by die checkout-vorm voeg, onder die faktuuradresveld. Die veld sal slegs vir klante in die EU verskyn.

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Ultimate Multisite sal dan die BTW-nommer valideer en, as dit as geldig terugkom, word die omgekeerde-heffing-meganisme toegepas en die belastingkoers op daardie bestelling op 0% gestel.
