---
title: Maksuhooldus
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# Maksu käsitlemine

Ultimate Multisite on meie pealiku pluginis sissejuhatud maksu kogumise moodul, seega, kui vajad oma plaanidele, pakettide ja teenustele müügitaksutega kogumist, saate seda lihtsalt teha ilma lisamoodule installimata.

Euroopas asutatud ettevõtete jaoks pakume **lisamoodula**, mis annab tööriistad ja funktsioonid parema **VAT**-niiuga tugelema.

Ultimate Multisite ei esita ega ületaks makse teie nimel valitsusele; me lihtsalt aitame teil koguda asianud maksid tekkimise ajal. **Te peate makside edasi esitamisest oma vastu.**

## Maksu kogumise aktiveerimine

Maksu kogumine ei ole oletuks aktiveeritud. Selle aktiivistik aktiveerimiseks tuleb minna **Ultimate Multisite > Settings > Taxes** ja lülitada sisse "Enable Taxes" (Aktiveeri maksid) seost.

![Tax collection toggle at the top of the Tax settings page](/img/config/settings-taxes-enable.png)

Siin on tax settingu täielik vaade:

![Tax settings full page](/img/config/settings-taxes-full.png)

Võite ka vaadata maksu seadistusi eriti toodetele:

![Tax settings for products](/img/config/settings-taxes.png)

### Makse eksklüusi vs. Makse kaasamine

Oletuks kõik teie toote hinnad on makse eksklüusi, mida tähendab, et maksid **ei ole sisaldu** toote hinnas. Kui me määrame, et klient peab maksa makside tietale ostuluse korral, lisame maksid subtootile **üseli**.

Kui soovite, et maksid oleksid teie toote hinnas kaasatud, saate seda teha aktiveerides "Inclusive Tax" (Kaasatud maksu) seost.

![Inclusive Tax toggle row below the Enable Taxes setting](/img/config/settings-taxes-inclusive.png)

Ärmige mitte **salvestada** teel tehtud muudatused.

###

## Makse määrade luomine

Maksu kogumise aktiveerimise pärast peate oma makse määrade luumise jaoks kasutama meie makse määrade redigeerijat erinevate asukohtade jaoks.

Võimalik pääsurida redaktorisse, klõpsides **Manage Tax Rates** (Maksuaroundide halda) nupulile Tax-seadistuse sivubari kuril.

![Manage Tax Rates link in the Tax Rates panel on the settings page](/img/config/settings-taxes-manage-rates.png)

Tax aroundide redaktorise lehel saate uusi Aroundide lisada klõpsides **Add new Row** (Lisa uus rivi) nupulile.

![Tax rates editor table with Add new Row button at the top](/img/config/tax-rates-editor.png)

Kõik aroundide peale tuleb antuda **titel** (kasutatakse faktuurides). Seejärel saate valita **riigi** (kohustuslik), **piirkonna** ja **linna** (mõlemad valikud on vaba välja), kus see around tideerakse. Lõpuks lisage **aroundide tasu protsentina**.

### Aroundide kategooriad

Võimalik on ka luua mitmeid Aroundide kategooriaid, et saada erinevaid aroundide tasuid erinevate toote tüüpide jaoks.

Klõpsake **Add new Tax Category** (Lisa uus aroundide kategooria) välja, kirjutage oma kategooria nime ja klõpsake **Create** (Loo).

![Add new Tax Category button at the top of the tax rates editor](/img/config/tax-categories-add.png)

![Tax Category Name input field in the create category modal](/img/config/tax-categories-create-modal.png)

Kategooriate vaatamiseks klõpsake **Switch** (Ühel valikuna muuta) ja valige kategooria, millel soovite uusi aroundide lisada.

![Switch dropdown button to change between tax categories](/img/config/tax-categories-switch.png)

![Tax category selector dropdown showing available categories](/img/config/tax-categories-select.png)

Võimalik on seada aroundide kategooria konkreetse tootja jaoks, minnes **Tootja redaktorise** lehele ja siis Taxes (Aroundid) tabile.

![Product taxes tab with tax category and taxable toggle](/img/config/product-taxes.png)

Samal ekraanil saate välja lülitada **Is Taxable?** (Kas around on aroundide objektiivse?) lüliti, et Ultimate Multisite teaks, et seda toodet ei olearoundid koguda.

## Euroopa VAT toetamine

Kidesedime, et meieil on saadaval lisamoodul, mis on kasulik teise Euroopa Liidu klientide jaoks, kellel on lisajärgne nõuded Euroopa VAE (liseks) regulatsioonidega seotud.

Meie VAE-nüüdoolid aitavad järgmistes olulistes asjadega:

* Euroopa VAE tasurohute lihtne laadimine;
* VAE-numbrite kogumine ja validatsioon – ning tagasi laadimine VAE vabanud entiteedide jaoks (nt ettevõtete, kellel on valida VAE-numbrid).

See lisamooduli installimiseks külastage **Ultimate Multisite > Settings** ja klikkige siis sivubari linki **Check our Add-ons** (Kontrollige meie lisamoodulid) all.

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

Te oled suunatud meie lisamoodulide lehel. Seal saate otsida **Ultimate Multisite VAT add-on** (VAT lisamoodul) ja installida selle.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Seejärel külastage **Network Admin > Plugins** (Võrgu administraator > Lisamoodulid) ja aktiveerige seda lisamoodult kogu võrgus.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Kui na kõik tagasi **Tax Settings** (Maksu seadistuste) tabile, näete uusi võimalusi. Lülitage sisse **Enable VAT Support** (Lülita VAE toetuse). See aktiveerib uued VAE tööriistad. Ärmige mitte unustada **save** (salvestada) seadistused!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### VAE tasurohute laadimine

Meie integreerimise lisatud tööriistadest on üks võimalus laadida Euroopa Liidu liikmesriikide tasurohut. See saab teha, külastades tax rates editori (tasurohutesse redigeerimine) lehe pärast Euroopa VAE toetuse aktiveerimist.

Lehele lehel pärustuses näha saate VAT laetamise valikuid. Valige tasuta tüüp ja klõpsake **Update EU VAT Rates** nupul, et see avab ja täidetakse automaatselt tabel EU liikmesriikide maksu tasasega. Seejärel peate seda lihtsalt salvestama.

![Update EU VAT Rates button at the bottom of the tax rates editor](/img/config/tax-rates-vat-pull.png)

Välja poolt saate ka muuta väärtusi pärast laetamist. Selleks muutke lihtsalt vajalikku tabeli ühes rivi ja klõpsake uute väärtuste salvestamiseks.

### VAT Validatsioon

Kui VAT tugepärustamine on sisse, lisab Ultimate Multisite võrdlusvormile täiendava füüdi, makseadressi kohta all. See füüdi näitab ainult EU-l asutatud klientidele.

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Ultimate Multisite valideerib siis VAT-numbril ja kui see tagasi tuleb validina, aktiveeritakse ümberlaetamise mekanism ja tasuta määratakse selle tellimile 0%.
