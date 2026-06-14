---
title: Buzka-handigarria
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# Tax Handling

Ultimate Multisite-ek has built-in module bat merkatu pluginaren, gertatzen da, planak, pakietak eta serbisioakara saldutako nabigazio-taxak hartzen behar baduzu, edozein add-onak instalatzeko beharrezkoa ez du.

Euregatik, Europaan dagoen diseinuak dira, **add-on** bat ematen dugu eta horrek VAT (Arrisku-taxa) erabilera laguntzeko herramienta eta funtzioak hasterazten du.

Ultimate Multisite ez du gobernuari partekatzen edo iraditzen taxak; bizitzeko testuinguru, transaksioaren prozesuaren orduan beharrezko taxak hartzea laguntuz dugu. **Taxak berehala iraditzen behartuko duzu.**

## Taxa-hartzeko aukera hasieraztea

Taxa-hartzea default (sortzioa) ez da hasterazten. Horrek hasterazten nahi du, **Ultimate Multisite > Settings > Taxes** funtziara jarraitu eta "Enable Taxes" (Taxak hasteraztea) aukeraren gainean klik egin behar duzu.

![Enable Taxes toggle at the top of the Tax settings page](/img/config/settings-taxes-enable.png)

Hau da taxa-hartzearen kontapurri guztia:

![Tax settings full page](/img/config/settings-taxes-full.png)

Produktuak bidezko taxa-hartzea ere ikusi ez duzu:

![Tax settings for products](/img/config/settings-taxes.png)

### Taxa-ezditu vs. Taxa-hartu

Default (sortzioa), produktu guztien prezioak taxa-ezdituta da, zeitu hau da, taxak **prezioko parte ez dago**. Mendiaren bat transaksioan taxak hartzea behar duon dela onartzen badu, subtotalaren gainean taxak hasterazten du.

Produktuen prezioko parte taxak hartuko nahi du, hori egin dezakezu "Inclusive Tax" (Taxa-hartua) aukera hasterazten.

![Inclusive Tax toggle row below the Enable Taxes setting](/img/config/settings-taxes-inclusive.png)

Gehiago egin duten hasierak **saldu** ez duu.

Ez dago eskuragarri editorraren zeisten menuko **Tax Rates** (N-taxa-larriak) botontuaren kopurua klikiz.

![Manage Tax Rates link in the Tax Rates panel on the settings page](/img/config/settings-taxes-manage-rates.png)

Tax rates editor lapenan, **Add new Row** (Hobaritua irki nagusia) botontuarekin new Tax Rates ez duzu lehiak dezake.

![Tax rates editor table with Add new Row button at the top](/img/config/tax-rates-editor.png)

Arreterri, lehi batean **title** (infeziakaren bitartean erabiltzen da) ematen behar duzu. Horrekik, **country** (besarra da), **state** eta **city** (duetan ere opzioa da) aukeratu duzu hori da dagoen taxia hartuko duen. Azkenik, **tax rate in percents** (taxia perzentuan) ematen duzu.

### Tax Categories (Taxa-kategoriak)

Produktuen espezifikazio eta produktu guztietan desberdinetarren taxia lehiak dezakeko multiple Tax Categories ere ez duzu lehiak dezake.

**Add new Tax Category** (New Tax Category hobetzea) klikiz, kategoriako nabaria ematen ditzakezu eta **Create** (Eskatu) botontuarekin egitezu.

![Add new Tax Tax Category button at the top of the tax rates editor](/img/config/tax-categories-add.png)

![Tax Category Name input field in the create category modal](/img/config/tax-categories-create-modal.png)

Kategoriak bilatzeko, **Switch** (Aldatu) klikiz eta new tax ez duzu lehiak dezakeko kategoriari aukeratu duzu.

![Switch dropdown button to change between tax categories](/img/config/tax-categories-switch.png)

![Tax category selector dropdown showing available categories](/img/config/tax-categories-select.png)

Ezinbestekoa da produktu batketa kategorian taxia ematen dena Ultimate Multisite-i informatzeko, **Product edit page** (Produktua editu lapena) zeisten eta gain **Taxes** (Taxak) tabera joan.

![Product taxes tab with tax category and taxable toggle](/img/config/product-taxes.png)

Berria ekranian, **Is Taxable?** (Taxia hartzen da?) botontuarekin ez duzu lehiak dezakeko kategorian taxia ematen ez duen informatzeko Ultimate Multisite-i informatzen ditzakezu.

## European VAT Support (EFTA/VAT suporta)

Mendatzen duen bezala, EU-ko kosturiet dagoen taldeak, EFTA erregulazioak duela gainditzen dituzten irudinetarako, kontsumidorari eta hasierriagatik (customer) espezializatutako add-on bat da disponible.

Horren VAT (Arresipoak) ahaleginak importante beste batzuk laguntzen dute:

  * EU VAT erateak lehenago laden diezaiola;

  * VAT Numera hartzea eta biltzen jakostea - eta VAT-ek mugitu dituzten entitateak (adibidez, validatutako VAT numerioak duten taldeak) beste batzuk (reverse charging) bitartean.

Horri add-onaren instalatzeko, **Ultimate Multisite > Settings** funtziara jarraitu eta gainera **Check our Add-ons** sidebar linka-re klikatu.

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

Horrek add-onaren espaldeko (add-ons) lapera-ri irekituko da. Horretan, **Ultimate Multisite VAT add-on**a bilatzen eta instalatzen dituzte.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Gero, **Network Admin > Plugins** funtziara jarraitu eta horrek add-onaren network-le aktibatu.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

**Tax Settings tab**-era itxarri dutenean, irudinetak berriak disponible izango duzu. **Enable VAT Support** (VAT suporta aktibatu) opsioa onartu eta berri VAT ahaleginak aktibatu. Horren beste, **save** (saldu) funtziari ez oublieru!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### VAT erateak hartzea

Horren integrazioa hasartzen duen ahalegin bat da EU testuinguruan dagoen erateak laden diezaiola. Horrek EU VAT suporta aktibatu ondoren, eratearen editori lapera-ri bisitatuz egin dezakezu.

Pagendua, leizkialdearen amaieran, irriztura (VAT) hartzeko opsioak ikusten duzu. Ratea bultzatuta eta **Update EU VAT Rates** botoiak klikitu, EU-ren edozein testuinguruan taxu rateak emateko taldea erabiliko dauden eta automatikoki horretan iragatik. Horrek egin behar duzu saldatu.

![Update EU VAT Rates botoia taxu rate editorearen amaieran](/img/config/tax-rates-vat-pull.png)

Aurreratuta, hartutako mga balioak ere editatuta ezartu dezakezu. Horrek egin dezakezu, beharrezkoa den taldeko lantiak editatu eta berri balioak saldatzeko klikitu.

### VAT Biltzaileak (VAT Validation)

VAT suporta aktiboa dutenean, Ultimate Multisite checkout formaren beste bat lehiaketa (field) ez du, billing address lehiaketaaren ondore la sartu. Lehiaketa horrek EU-rean dagoen kliuntzak jasotzeko gaurkiz erabiliko da.

<!-- Screenshot unavailable: VAT Numero lehiaketa frontend checkout formaren amaieran billing addressaren ondorela -->

Ultimate Multisite horrek VAT Numeroa biltzaile egiten du eta, balioa bere bat jakin denean, reverse charge mekanismoa aplikatzen da eta horreko ordainari taxu ratea 0% saiatzen da.
