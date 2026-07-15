---
title: Skattehantering
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# Skattehantering

Ultimate Multisite har en modul för skatteuppbörd inbyggd i vårt kärnplugin, så om du behöver ta ut försäljningsskatt på dina planer, paket och tjänster kan du enkelt göra det utan att behöva installera några add-ons.

För företag som är baserade i Europa erbjuder vi ett **add-on** som lägger till verktyg och funktioner för att bättre **stödja VAT**-efterlevnad.

Ultimate Multisite deklarerar eller betalar inte in skatter till myndigheter för din räkning; vi hjälper dig helt enkelt att ta ut rätt skatter vid tidpunkten för transaktionen. **Du behöver fortfarande betala in skatterna själv.**

## Aktivera skatteuppbörd {#enabling-tax-collection}

Skatteuppbörd är inte aktiverad som standard. För att aktivera den behöver du gå till **Ultimate Multisite > Settings > Taxes** och slå på inställningen Enable Taxes.

![Växlare för Enable Taxes högst upp på sidan för skatteinställningar](/img/config/settings-taxes-enable.png)

Här är en fullständig vy av sidan för skatteinställningar:

![Hela sidan för skatteinställningar](/img/config/settings-taxes-full.png)

Du kan också visa skatteinställningarna för enskilda produkter:

![Skatteinställningar för produkter](/img/config/settings-taxes.png)

### Skatt exkluderad vs. skatt inkluderad {#tax-excluded-vs-tax-included}

Som standard är alla dina produktpriser exklusive skatt, vilket betyder att skatter **inte ingår** i produktens pris. Om vi avgör att en kund ska betala skatt på ett visst köp lägger vi till skatterna **ovanpå** delsumman.

Om du föredrar att skatter ingår i produktens pris kan du göra det genom att aktivera inställningen **Inclusive Tax**.

![Rad med växlare för Inclusive Tax under inställningen Enable Taxes](/img/config/settings-taxes-inclusive.png)

Glöm inte att **spara** ändringarna du har gjort.

###

## Skapa skattesatser {#creating-tax-rates}

När du har aktiverat skatteuppbörd behöver du skapa skattesatser för specifika platser med vår redigerare för skattesatser.

Du kan komma åt redigeraren genom att klicka på knappen **Manage Tax Rates** i sidofältet på sidan för skatteinställningar.

![Länk till Manage Tax Rates i panelen Tax Rates på inställningssidan](/img/config/settings-taxes-manage-rates.png)

På sidan för redigering av skattesatser kan du lägga till nya skattesatser genom att klicka på knappen **Add new Row**.

![Tabell i redigeraren för skattesatser med knappen Add new Row högst upp](/img/config/tax-rates-editor.png)

Du behöver ge varje skattesats en **titel** (används på fakturor). Sedan kan du välja **land** (obligatoriskt), **delstat/region** och **stad** (båda valfria) där denna skatt ska debiteras. Lägg slutligen till **skattesatsen i procent**.

### Skattekategorier {#tax-categories}

Du kan också skapa flera skattekategorier för att lägga till olika skattesatser för olika typer av produkter.

Klicka på **Add new Tax Category**, skriv sedan kategorins namn och tryck på **Create**.

![Knappen Add new Tax Category högst upp i redigeraren för skattesatser](/img/config/tax-categories-add.png)

![Inmatningsfältet Tax Category Name i modalen för att skapa kategori](/img/config/tax-categories-create-modal.png)

För att bläddra bland kategorier klickar du på **Switch** och väljer den kategori som du vill lägga till nya skatter i.

![Rullgardinsknappen Switch för att byta mellan skattekategorier](/img/config/tax-categories-switch.png)

![Rullgardinsväljare för skattekategori som visar tillgängliga kategorier](/img/config/tax-categories-select.png)

Du kan ange skattekategorin för en viss produkt genom att gå till **Product edit page** och sedan till fliken Taxes.

![Produktens skatteflik med skattekategori och växlare för skatteplikt](/img/config/product-taxes.png)

På samma skärm kan du stänga av växlaren **Is Taxable?** för att låta Ultimate Multisite veta att det inte ska ta ut skatt på den aktuella produkten.

## Stöd för europeisk VAT {#european-vat-support}

Som nämnts tidigare har vi ett add-on tillgängligt för kunder i EU som har ytterligare krav på grund av europeiska VAT-regler.

Våra VAT-verktyg hjälper till med ett par viktiga saker:

  * Enkel inläsning av EU:s VAT-satser;

  * Insamling och validering av VAT-nummer – samt omvänd skattskyldighet för VAT-befriade enheter (till exempel företag med giltiga VAT-nummer);

För att installera detta add-on går du till **Ultimate Multisite > Settings** och klickar sedan på sidofältslänken **Check our Add-ons**.

![Sidofält på inställningssidan med länken Check our Add-ons](/img/config/settings-taxes-addons-link.png)

Du omdirigeras till vår sida för add-ons. Där kan du söka efter **Ultimate Multisite VAT add-on** och installera det.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Gå sedan till **Network Admin > Plugins** och aktivera detta add-on för hela nätverket.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Om du går tillbaka till **Tax Settings tab** ser du nya alternativ tillgängliga. Slå på alternativet **Enable VAT Support** för att aktivera de nya VAT-verktygen. Glöm inte att **spara** dina inställningar!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### Hämta VAT-skattesatser {#pulling-on-vat-tax-rates}

Ett av verktygen som vår integration lägger till är möjligheten att läsa in skattesatserna för EU:s medlemsstater. Det kan göras genom att besöka sidan för redigering av skattesatser efter att EU VAT-stöd har aktiverats.

Längst ned på sidan ser du alternativen för att hämta VAT. Om du väljer en satstyp och klickar på knappen **Update EU VAT Rates** hämtas skattesatserna för varje EU-medlemsstat och tabellen fylls i automatiskt. Sedan behöver du bara spara den.

![Knappen Update EU VAT Rates längst ned i redigeraren för skattesatser](/img/config/tax-rates-vat-pull.png)

Du kan också redigera värdena efter att ha hämtat dem. För att göra det redigerar du helt enkelt den tabellrad du behöver och klickar för att spara de nya värdena.

### VAT-validering {#vat-validation}

När VAT-stöd är aktiverat lägger Ultimate Multisite till ett extra fält i checkout-formuläret, nedanför faktureringsadressfältet. Fältet visas bara för kunder som befinner sig i EU.

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Ultimate Multisite validerar då VAT Number och om det kommer tillbaka som giltigt tillämpas mekanismen för omvänd skattskyldighet och skattesatsen sätts till 0 % på den ordern.
